<template>
  <div>
    <div class="site-payments">
    <div class="header-row">
      <h1 class="title"> <b>Métodos de pago call center</b> </h1>

   
    </div>

    <div class="sites-grid">
      <div
        v-for="site in sites.filter(s => s.show_on_web)"
        :key="site.site_id"
        class="site-card"
        :class="{ open: activeDropdown === site.site_id }"
      >
        <!-- Header de la sede -->
        <div class="site-card__header" @click="toggleDropdown(site.site_id)">
          <div class="site-card__title">
            <i class="pi pi-map-marker"></i>
            <b>{{ site.site_name }}</b>
          </div>

          <div class="site-card__stats">
            <Tag class="tag soft mr-2" style="background-color: black;color: white;">
              {{ (selectedMethods[site.site_id] || []).length }} seleccionados
            </Tag>
            <Button
              :icon="activeDropdown === site.site_id ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
              rounded
              text
              aria-label="toggle"
              @click.stop="toggleDropdown(site.site_id)"
            />
          </div>
        </div>

        <!-- Contenido -->
        <transition name="fade">
          <div v-if="activeDropdown === site.site_id" class="site-card__content">
            <!-- Acciones masivas -->
            <div class="toolbar">
              <div class="toolbar__buttons">
                <Button label="Seleccionar todos" size="small" text @click.stop="selectAll(site.site_id)" />
                <Button label="Invertir"          size="small" text @click.stop="invertSelection(site.site_id)" />
                <Button label="Limpiar"           size="small" text class="danger" @click.stop="clearSelection(site.site_id)" />
              </div>
            </div>

            <!-- Lista de métodos (tal cual vienen de la API) -->
            <div class="methods-grid">
              <div
                v-for="method in payment_methods"
                :key="`m-${site.site_id}-${method.id}`"
                class="method-tile"
                :class="{ active: isSelected(site.site_id, method.id) }"
                @click.prevent="toggleMethod(site.site_id, method.id)"
              >
                <div class="method-tile__left">
                  <i :class="iconClass(method)" class="method-icon"></i>
                  <div class="method-texts">
                    <span class="method-name">{{ method.name }}</span>
                    <small v-if="subLabel(method)" class="method-sub">{{ subLabel(method) }}</small>
                  </div>
                </div>

                <div class="method-tile__right">
                  <!-- Checkbox en modo ARREGLO -->
                  <Checkbox
                    :inputId="`m-${site.site_id}-${method.id}`"
                    v-model="selectedMethods[site.site_id]"
                    :binary="false"
                    :value="method.id"
                    @click.stop
                  />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Pie fijo en móviles -->
    <transition name="slide-up">
      <div v-if="isDirty" class="sticky-footer">
        <div class="sticky-footer__info">
          <i class="pi pi-info-circle"></i>
          <span>Tienes cambios sin guardar</span>
        </div>
        <div class="sticky-footer__actions">
          <Button label="Deshacer" text @click="resetChanges" />
          <Button label="Guardar" class="primary" :loading="saving" @click="saveRules" />
        </div>
      </div>
    </transition>
  </div>
  </div>

</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Checkbox from 'primevue/checkbox'
import { fetchService } from '../../../service/utils/fetchService'
import { URI } from '../callCenter/service/conection'

/* ---------- state ---------- */
const payment_methods  = ref([])      // <- vienen de la API
const sites            = ref([])
const selectedMethods  = reactive({}) // { [site_id]: [methodId,…] }
const originalSnapshot = ref({})
const activeDropdown   = ref(null)
const saving           = ref(false)

/* ---------- helpers ---------- */
const toggleDropdown = id => {
  activeDropdown.value = activeDropdown.value === id ? null : id
}

const isDirty = computed(() =>
  JSON.stringify(selectedMethods) !== JSON.stringify(originalSnapshot.value)
)

const ensureArray = (site_id) => {
  if (!Array.isArray(selectedMethods[site_id])) selectedMethods[site_id] = []
  return selectedMethods[site_id]
}

const isSelected = (site_id, methodId) =>
  ensureArray(site_id).includes(methodId)

const toggleMethod = (site_id, methodId) => {
  const arr = ensureArray(site_id)
  const idx = arr.indexOf(methodId)
  if (idx >= 0) arr.splice(idx, 1)
  else arr.push(methodId)
}

const selectAll = (site_id) => {
  selectedMethods[site_id] = payment_methods.value.map(m => m.id)
}

const clearSelection = (site_id) => {
  selectedMethods[site_id] = []
}

const invertSelection = (site_id) => {
  const allIds = new Set(payment_methods.value.map(m => m.id))
  const current = new Set(ensureArray(site_id))
  const next = []
  allIds.forEach(id => { if (!current.has(id)) next.push(id) })
  selectedMethods[site_id] = next
}

/** Usa icono de la API si existe; si no, ícono genérico */
const iconClass = (method) => method.icon || method.icon_class || 'pi pi-money-bill'
/** Subtítulo opcional solo si viene algo en la API */
const subLabel = (m) => m.english_name || m.code || m.slug || ''

/*   Payload SOLO con IDs por sede  */
const buildPayload = () =>
  Object.fromEntries(
    Object.entries(selectedMethods).map(([site_id, methodIds]) => [
      site_id,
      payment_methods.value.filter(m => methodIds.includes(m.id)) // ← objetos completos
    ])
  )

/* ---------- acciones ---------- */
const saveRules = async () => {
  try {
    saving.value = true
    await fetchService.put(`${URI}/site-payments-call-center`, { data: buildPayload() })
    originalSnapshot.value = JSON.parse(JSON.stringify(selectedMethods))
  } catch (e) {
    console.error('Error guardando site-payments', e)
  } finally {
    saving.value = false
  }
}

const resetChanges = () => {
  const snap = JSON.parse(JSON.stringify(originalSnapshot.value || {}))
  Object.keys(selectedMethods).forEach(k => delete selectedMethods[k])
  Object.entries(snap).forEach(([k, v]) => (selectedMethods[k] = v))
}

/* ---------- carga inicial ---------- */
onMounted(async () => {
  const [methods, sitesList, serverRules] = await Promise.all([
    fetchService.get(`${URI}/payment_methods`),
    fetchService.get(`${URI}/sites`),
    fetchService.get(`${URI}/site-payments-call-center`)
  ])

  payment_methods.value = methods
  sites.value = sitesList

  sites.value
    .filter(s => s.show_on_web)
    .forEach(({ site_id }) => {
      const existing = (serverRules?.[site_id] || []).map(m => (typeof m === 'object' ? m.id : m))
      selectedMethods[site_id] = existing.length ? existing : []
    })

  originalSnapshot.value = JSON.parse(JSON.stringify(selectedMethods))

  const first = sites.value.find(s => s.show_on_web)
  if (first) activeDropdown.value = first.site_id
})
</script>

<style scoped>
/* ===========================
   Paleta blanco, gris y negro
   =========================== */
.site-payments {
  --ink: #111;         /* texto principal */
  --ink-soft: #3a3a3a; /* texto intermedio */
  --ink-sub: #6b6b6b;  /* texto secundario */


  --ground: #f6f6f7;   /* header de tarjeta */
  --card: #ffffff;     /* tarjeta */
  --hover: #f1f1f2;    /* hover suave */

  --border: #e6e6e8;   /* bordes suaves */
  --border-2: #d4d4d8; /* borde activo */

  --primary: #111111;  /* botón/acción principal */
  --primary-2: #222222;

  color: var(--ink);
  background: var(--bg);
  max-width: 900px;
  margin:0 auto

}

/* Layout */
.header-row { display: flex; align-items: center; justify-content: space-between; gap: .75rem; flex-wrap: wrap; }
.title { margin: 0; color: var(--ink);margin: 4rem 0;  }
.actions { display: flex; align-items: center; gap: .25rem; }

/* Tags y botones (grayscale) */
.tag {
  padding: .35rem .5rem;
  border-radius: .3rem;
  background: #f5f5f5;
  color: var(--ink-soft);
  border: 1px solid var(--border);
}
.tag.warn { background: #efefef; color: var(--ink); border-color: var(--border-2); }
.tag.soft { background: #f2f2f2; color: var(--ink-soft); }

/* PrimeVue buttons */
:deep(.p-button) {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
:deep(.p-button:disabled) { opacity: .55; }
:deep(.p-button.p-button-text),
:deep(.p-button.p-button-rounded) {
  background: transparent;
  border-color: transparent;
  color: var(--primary);
}
:deep(.p-button.primary) {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
.danger:deep(.p-button) { color: var(--ink); }

/* PrimeVue checkbox (grayscale) */
:deep(.p-checkbox .p-checkbox-box) { border-color: var(--border-2); }
:deep(.p-checkbox:not(.p-disabled) .p-checkbox-box:hover) { border-color: var(--primary); }
:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background: var(--primary);
  border-color: var(--primary);
}

/* Grid de sedes */
.sites-grid { display: grid; grid-template-columns: repeat(1, minmax(320px, 1fr)); gap: .9rem; }

/* Tarjeta de sede */
.site-card {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card);
  overflow: hidden;
  transition: border-color .2s, box-shadow .2s;
}
.site-card.open {
  border-color: var(--border-2);
  box-shadow: 0 2px 20px rgba(0,0,0,.05);
}
.site-card__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: .75rem .9rem; cursor: pointer; background: var(--ground);
}
.site-card__title { display: flex; align-items: center; gap: .5rem; color: var(--ink); }
.site-card__stats { display: flex; align-items: center; gap: .25rem; }
.site-card__content { padding: .75rem .9rem 1rem .9rem; }

/* Toolbar */
.toolbar { display: flex; justify-content: flex-end; margin-bottom: .5rem; }
.toolbar__buttons { display: flex; align-items: center; gap: .25rem; flex-wrap: wrap; }

/* Métodos */
.methods-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: .4rem;
  max-height: 320px;
  overflow: auto;
  padding-right: .25rem;
}
@media (min-width: 560px) { .methods-grid { grid-template-columns: 1fr 1fr; } }

.method-tile {
  display: flex; align-items: center; justify-content: space-between;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: .55rem .65rem;
  cursor: pointer;
  transition: border-color .15s, background .15s;
  user-select: none;
  background: #fff;
}
.method-tile:hover { border-color: var(--border-2); background: var(--hover); }
.method-tile.active { background: #fafafa; border-color: var(--border-2); }
.method-tile__left { display: flex; align-items: center; gap: .55rem; }
.method-icon { font-size: 1.15rem; opacity: .9; color: var(--primary); }
.method-texts { display: flex; flex-direction: column; }
.method-name { font-weight: 600; line-height: 1; color: var(--ink); }
.method-sub { color: var(--ink-sub); }

/* Sticky footer (móvil) */
.sticky-footer {
  position: sticky;
  bottom: 0;
  margin-top: .5rem;
  padding: .5rem .75rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  box-shadow: 0 -6px 20px rgba(0,0,0,.04);
}
.sticky-footer__info { display: flex; align-items: center; gap: .5rem; }

/* Transiciones */
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-up-enter-active, .slide-up-leave-active { transition: all .2s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(10px); opacity: 0; }
</style>
