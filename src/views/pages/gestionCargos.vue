<template>
  <div>
    <!-- ========== DIALOG: GESTIÓN DE PERMISOS ========== -->
    <Dialog
      v-model:visible="show_access"
      modal
      :style="{ width: '52rem', maxWidth: '95vw' }"
      class="perm-dialog"
    >
      <template #header>
        <div class="dialog-header">
          <i class="pi pi-shield text-3xl"></i>
          <div class="titles">
            <h3 class="m-0 p-0"><b>Gestión de permisos</b></h3>
            <small class="opacity-80">Administra accesos por grupo y permiso individual</small>
          </div>
        </div>
      </template>

      <div class="role-chip">
        <span class="label">Accesos para:</span>
        <Tag severity="help" class="px-3 py-2 text-sm">
          <b>{{ rol_to_edit?.name || '—' }}</b>
        </Tag>
      </div>

      <!-- Estado de carga simple -->
      <div v-if="!all_roles?.length" class="loading-zone">
        <ProgressSpinner strokeWidth="6" />
        <p class="mt-2">Cargando grupos de permisos…</p>
      </div>

      <!-- LISTA DE GRUPOS -->
      <div v-else class="groups">
        <div
          v-for="(group, gIdx) in all_roles"
          :key="`${group.name}-${gIdx}`"
          class="group-card"
          :class="{ active: group.enrolledAll }"
        >
          <!-- ENCABEZADO DEL GRUPO -->
          <div
            class="group-head"
            @click="toggleVisible(group)"
          >
            <div class="left" @click.stop>
              <InputSwitch
                v-model="group.enrolledAll"
                @change="toggleGroup(group)"
                :pt="{root:{class:'switch-root'}}"
              />
              <h5 class="m-0 p-0 name" :title="group.name">
                <b>{{ group.name }}</b>
              </h5>
              <Tag class="count-chip" :severity="group.enrolledAll ? 'success' : 'secondary'">
                {{ group.permissions.filter(p => p.enrolled).length }}/{{ group.permissions.length }}
              </Tag>
            </div>
            <div class="right">
              <Button
                text
                rounded
                class="chev"
                :icon="visibles[group.name] ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
                @click.stop="visibles[group.name] = !visibles[group.name]"
                :aria-label="visibles[group.name] ? 'Contraer' : 'Expandir'"
              />
            </div>
          </div>

          <!-- CONTENIDO DEL GRUPO -->
          <div
            class="group-body"
            :style="!visibles[group.name] ? 'height:0;overflow:hidden;padding:0' : ''"
          >
            <div class="perm-list">
              <div
                v-for="perm in group.permissions"
                :key="perm.id"
                class="perm-row"
              >
                <InputSwitch
                  v-model="perm.enrolled"
                  @change="toggle_permision(perm, perm.enrolled)"
                />
                <h6 class="perm-name">
                  {{ perm.name }}
                </h6>
                <Tag
                  class="state-chip"
                  :severity="perm.enrolled ? 'success' : 'danger'"
                >
                  {{ perm.enrolled ? 'Activo' : 'Inactivo' }}
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>

    <!-- ========== LISTA DE ROLES ========== -->
    <div class="container mx-auto mb-4 page-wrap">
      <div class="hero">
        <div class="hero-card shadow-1">
          <div class="hero-left">
            <i class="pi pi-sitemap text-3xl"></i>
            <div>
              <h2 class="m-0 p-0"><b>Gestión de cargos y accesos</b></h2>
              <small class="opacity-80">Encuentra el cargo y ajusta sus permisos</small>
            </div>
          </div>
          <div class="hero-right">
            <InputText
              v-model="filters['global'].value"
              placeholder="Buscar cargo..."
              class="search"
            />
          </div>
        </div>
      </div>

      <div class="table-wrap">
        <DataTable
          :value="rols"
          :paginator="true"
          :rows="15"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Roles"
          :rowsPerPageOptions="[5,10,25,100]"
          scrollable
          showGridlines
          scrollHeight="60vh"
          stripedRows
          :filters="filters"
          class="p-datatable-sm pretty-table"
        >
          <template #header>
            <div class="table-header">
              <h3 class="m-0 p-0"><b>Cargos</b></h3>
            </div>
          </template>

          <Column header="Cargo" field="name" style="width: 75%;">
            <template #body="slotProps">
              <div class="cell-role">
                <i class="pi pi-user"></i>
                <span class="role-text">
                  {{ slotProps.data.name }}
                </span>
              </div>
            </template>
          </Column>

          <Column header="Acción" style="width: 25%; text-align: right;">
            <template #body="slotProps">
              <div class="actions">
                <Button
                  label="Accesos"
                  icon="pi pi-eye"
                  text
                  class="p-button-plain"
                  @click="openToEdit(slotProps.data.id, slotProps.data)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { fetchService } from '@/service/utils/fetchService'
import { URI } from '@/service/conection'
import { loginStore } from '@/store/user.js'

const store = loginStore()

const visibles = ref({})
const rols = ref([])
const all_roles = ref([])
const show_access = ref(false)
const filters = ref(null)
const rol_to_edit = ref('')

onBeforeMount(() => initFilters())

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  }
}

const update = async () => {
  rols.value = await fetchService.get(`${URI}/get-all-rol`)
}

onMounted(async () => {
  await update()
})

const openToEdit = async (id, data) => {
  rol_to_edit.value = data
  show_access.value = true

  const roles = await fetchService.get(`${URI}/get_all-permission-group-by-group`, 'Cargando')
  const permision = await fetchService.get(`${URI}/get-all-rol-by-rol-id/${id}`, 'Cargando')
  const permision_rol = permision.map((p) => p.permission_id)

  roles.forEach((group) => {
    group.permissions.forEach((p) => {
      p.enrolled = permision_rol.includes(p.id)
      p.permission_rol_id = permision.find((m) => m.permission_id === p.id)?.id
    })
    group.enrolledAll = group.permissions.every((p) => p.enrolled)
    // Por defecto: mostrar todos los grupos abiertos
    visibles.value[group.name] = true
  })

  all_roles.value = roles
}

const toggleGroup = async (group) => {
  const newStatus = group.enrolledAll
  for (const perm of group.permissions) {
    if (perm.enrolled === newStatus) continue
    perm.enrolled = newStatus
    await toggle_permision(perm, newStatus)
  }
}

const toggle_permision = async (permision, status) => {
  const payload = {
    rol_id: rol_to_edit.value.id,
    permission_id: permision.id,
    status,
    permission_rol_id: permision.permission_rol_id,
  }

  await fetchService.put(
    `${URI}/toggle_permision/${permision.permission_rol_id || 1}/${status}`,
    payload,
    'Cargando'
  )

  const group = all_roles.value.find((g) => g.permissions.some((p) => p.id === permision.id))
  if (group) {
    const everyOn = group.permissions.every((p) => p.enrolled)
    group.enrolledAll = everyOn
  }
}

const toggleVisible = (group) => {
  visibles.value[group.name] = !visibles.value[group.name]
}
</script>

<style scoped>
/* ---------- Paleta y helpers ---------- */
:root {
  --fun-a: #7c4dff;
  --fun-b: #00c2ff;
  --fun-c: #ff7ee7;
  --fun-d: #25d366;

  --text-strong: #1e293b;
  --text-soft: #64748b;

  --glass: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.75));
  --radial: radial-gradient(1200px 600px at 20% -10%, rgba(124,77,255,.18), transparent 60%),
            radial-gradient(1200px 600px at 120% 110%, rgba(0,194,255,.15), transparent 60%);
  --grad: linear-gradient(135deg, var(--fun-a), var(--fun-b));
  --grad-success: linear-gradient(135deg, #34d399, #10b981);
  --grad-muted: linear-gradient(135deg, #cbd5e1, #94a3b8);
}

* { transition: all .2s ease; }

/* ---------- Page ---------- */
.page-wrap {
  margin-top: 6rem;
  max-width: 60rem;
  padding: 0 1rem;
  background:
    var(--radial);
}

/* ---------- Hero ---------- */
.hero { margin-bottom: 1rem; }
.hero-card {
  background: var(--glass);
  backdrop-filter: blur(8px);
  border-radius: .5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  border: 1px solid rgba(0,0,0,.05);
}
.hero-left {
  display: flex;
  align-items: center;
  gap: .75rem;
}
.hero-left i { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-right { display: flex; align-items: center; justify-content: flex-end; }
.search { min-width: 18rem; width: 100%; max-width: 22rem; }

/* ---------- Table ---------- */
.table-wrap {
  background: white;
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.06);
  overflow: hidden;
}
.table-header {
  display: flex; align-items:center; justify-content: space-between;
  padding: .5rem .75rem;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.pretty-table :deep(.p-datatable-thead > tr > th) {
  background: #f8fafc;
}
.cell-role {
  display: flex; align-items: center; gap: .5rem;
}
.cell-role i { color: var(--text-soft); }
.role-text { text-transform: uppercase; font-weight: 700; color: var(--text-strong); }

/* ---------- Dialog ---------- */
.perm-dialog :deep(.p-dialog) { border-radius: .5rem; overflow: hidden; }
.dialog-header {
  display: flex; align-items: center; gap: .75rem;
  background: var(--grad); color: white;
  padding: .75rem 1rem; margin: -1rem -1rem 0 -1rem;
}
.dialog-header i { filter: drop-shadow(0 2px 8px rgba(0,0,0,.25)); }
.titles small { display:block; }

.role-chip {
  display: flex; align-items: center; gap: .5rem;
  margin: 1rem 0 .25rem 0;
}
.role-chip .label { color: var(--text-soft); }

/* ---------- Loading ---------- */
.loading-zone {
  display: grid; place-items: center; padding: 2rem 0; color: var(--text-soft);
}

/* ---------- Groups ---------- */
.groups { display: grid; gap: .8rem; }

.group-card {
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.06);
  background: white;
  overflow: hidden;
  box-shadow: 0 8px 20px -12px rgba(0,0,0,.15);
}
.group-card.active {
  border-color: rgba(16,185,129,.35);
  background:
    linear-gradient(0deg, rgba(16,185,129,.06), transparent 40%),
    white;
}

.group-head {
  padding: .75rem .75rem;
  display: grid; grid-template-columns: 1fr auto; align-items: center;
  gap: .75rem;
  cursor: pointer;
}
.group-head:hover { background: rgba(0,0,0,.025); }

.group-head .left {
  display: flex; align-items: center; gap: .6rem;
}
.group-head .name {
  text-transform: uppercase; letter-spacing: .5px;
}
.count-chip {
  border-radius: 999px;
}

.group-head .chev :deep(.p-button-icon) {
  transform: translateY(1px);
}

.group-body {
  padding: .25rem .75rem .8rem .75rem;
}

.perm-list {
  display: grid;
  gap: .45rem;
}
.perm-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: .6rem;
  background: #f8fafc;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: .75rem;
  padding: .5rem .6rem;
}
.perm-row:hover { background: #f1f5f9; }
.perm-name { margin: 0; text-transform: uppercase; font-weight: 700; color: var(--text-strong); }
.state-chip { min-width: 6rem; text-align: center; }

/* ---------- PrimeVue switches theming (scoped safe) ---------- */
:deep(.p-inputswitch) { scale: 1; }
:deep(.p-inputswitch .p-inputswitch-slider) {
  background: #cbd5e1;
}
:deep(.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider) {
  background: linear-gradient(135deg, #10b981, #22c55e);
}

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .hero-card { grid-template-columns: 1fr; }
  .hero-right { justify-content: stretch; }
  .search { min-width: unset; }
}
</style>
