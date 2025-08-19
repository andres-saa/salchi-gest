<!-- File: CodesTable.vue -->
<template>
  <div class="codes-container">
    <h3 class="title"><strong>Códigos generados y redimidos para recolección de emails</strong></h3>

    <!-- Toolbar -->
    <div class="toolbar card">
      <div class="left">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="searchTerm"
            placeholder="Buscar en todos los campos…"
            class="p-inputtext-sm"
            :disabled="loading"
            :aria-label="'Búsqueda global'"
          />
        </span>

        <!-- Alternar columnas visibles -->
        <div class="columns-toggle">
          <MultiSelect
            v-model="visibleCols"
            :options="allCols"
            optionLabel="label"
            optionValue="field"
            display="chip"
            class="p-inputtext-sm"
            :maxSelectedLabels="3"
            placeholder="Columnas"
            :disabled="loading"
          />
        </div>
      </div>

      <div class="right">
        <!-- Contadores -->
        <Tag severity="info" class="mx-1">Total: <b>{{ data.length }}</b></Tag>
        <Tag severity="success" class="mx-1">Redimidos: <b>{{ totalSi }}</b></Tag>
        <Tag severity="warning" class="mx-1">Pendientes: <b>{{ totalNo }}</b></Tag>

        <!-- Acciones -->
        <Button
          label="CSV"
          icon="pi pi-table"
          class="p-button-text p-button-sm mx-1"
          @click="exportCSV"
          :disabled="loading || !data.length"
        />
        <Button
          label="Excel"
          icon="pi pi-download"
          class="p-button-help p-button-sm mx-1"
          @click="downloadExcel"
          :loading="excelLoading"
          :disabled="loading || !data.length"
        />
        <Button
          label="Limpiar filtros"
          icon="pi pi-filter-slash"
          class="p-button-secondary p-button-sm mx-1"
          @click="clearFilters"
          :disabled="loading"
        />
        <Button
          label="Recargar"
          icon="pi pi-refresh"
          class="p-button-sm mx-1"
          @click="reload"
          :loading="loading"
        />
      </div>
    </div>

    <div class="table-wrapper card">
      <DataTable
        ref="dt"
        v-model:filters="filters"
        :value="data"
        :loading="loading"
        paginator
        rowHover
        stripedRows
        :rows="20"
        :rowsPerPageOptions="[15, 20, 30, 50, 100]"
        responsiveLayout="scroll"
        filterDisplay="row"
        removableSort
        sortMode="multiple"
        dataKey="code"
        showGridlines
        scrollable
        scrollHeight="60vh"
        :globalFilterFields="['code','user_name','user_phone','user_address','email']"
        stateStorage="local"
        stateKey="codes-table-state"
        :rowClass="rowClass"
        :pt="{
          header: { style: 'position: sticky; top: 0; z-index: 1;' }
        }"
        currentPageReportTemplate="{first} – {last} de {totalRecords}"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        :emptyMessage="emptyMessage"
      >
        <!-- ───────── Columna CÓDIGO ───────── -->
        <Column
          v-if="isVisible('code')"
          field="code"
          header="Código"
          sortable
          filterMatchMode="contains"
          class="py-1"
          :headerStyle="{ minWidth: '12rem' }"
        >
          <template #body="{ data }">
            <div class="cell-flex">
              <span class="mono">{{ data.code }}</span>
              <Button
                icon="pi pi-clipboard"
                class="p-button-text p-button-rounded p-button-sm"
                :aria-label="`Copiar código ${data.code}`"
                @click="copy(data.code)"
                v-tooltip.top="'Copiar'"
              />
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
              style="width:10rem;"
            />
          </template>
        </Column>

        <!-- ───────── Columna REDIMIDO ───────── -->
        <Column
          v-if="isVisible('redimido')"
          field="redimido"
          header="Redimido"
          sortable
          dataType="boolean"
          filterMatchMode="equals"
          class="py-1"
          :headerStyle="{ minWidth: '10rem' }"
        >
          <template #body="{ data }">
            <Tag :severity="data.redimido ? 'success' : 'secondary'">
              {{ data.redimido ? 'Sí' : 'No' }}
            </Tag>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Dropdown
              v-model="filterModel.value"
              :options="redimidoOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Todos"
              class="p-column-filter"
              @change="filterCallback()"
              style="width: 8rem"
            />
          </template>
        </Column>

        <!-- ───────── Columna NOMBRE ───────── -->
        <Column
          v-if="isVisible('user_name')"
          field="user_name"
          header="Nombre"
          sortable
          filterMatchMode="contains"
          class="py-1"
          :headerStyle="{ minWidth: '14rem' }"
        >
          <template #body="{ data }">
            <span class="truncate">{{ data.user_name }}</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
            />
          </template>
        </Column>

        <!-- ───────── Columna TELÉFONO ───────── -->
        <Column
          v-if="isVisible('user_phone')"
          field="user_phone"
          header="Teléfono"
          sortable
          filterMatchMode="contains"
          class="py-1"
          :headerStyle="{ minWidth: '12rem' }"
        >
          <template #body="{ data }">
            <div class="cell-flex">
              <span class="mono">{{ data.user_phone }}</span>
              <Button
                icon="pi pi-clipboard"
                class="p-button-text p-button-rounded p-button-sm"
                :aria-label="`Copiar teléfono ${data.user_phone}`"
                @click="copy(data.user_phone)"
                v-tooltip.top="'Copiar'"
              />
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
            />
          </template>
        </Column>

        <!-- ───────── Columna DIRECCIÓN ───────── -->
        <Column
          v-if="isVisible('user_address')"
          field="user_address"
          header="Dirección"
          sortable
          filterMatchMode="contains"
          class="py-1"
          :headerStyle="{ minWidth: '16rem' }"
        >
          <template #body="{ data }">
            <span class="truncate">{{ data.user_address }}</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
            />
          </template>
        </Column>

        <!-- ───────── Columna EMAIL ───────── -->
        <Column
          v-if="isVisible('email')"
          field="email"
          header="Email"
          sortable
          filterMatchMode="contains"
          class="py-1"
          :headerStyle="{ minWidth: '18rem' }"
        >
          <template #body="{ data }">
            <div class="cell-flex">
              <a
                v-if="data.email"
                :href="`mailto:${data.email}`"
                class="link"
              >
                {{ data.email }}
              </a>
              <span v-else class="muted">—</span>

              <Button
                v-if="data.email"
                icon="pi pi-clipboard"
                class="p-button-text p-button-rounded p-button-sm"
                :aria-label="`Copiar email ${data.email}`"
                @click="copy(data.email)"
                v-tooltip.top="'Copiar'"
              />
            </div>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { FilterMatchMode } from 'primevue/api'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import MultiSelect from 'primevue/multiselect'

import { fetchService } from '@/service/utils/fetchService'
import { URI } from '@/service/conection'

interface CodeRow {
  code: string
  redimido: boolean
  user_name: string
  user_phone: string
  user_address: string
  email: string
}

const dt = ref()
const data = ref<CodeRow[]>([])
const loading = ref(false)
const excelLoading = ref(false)

/* Opciones para “redimido” */
const redimidoOptions = [
  { label: 'Todos', value: null },
  { label: 'Sí',    value: true },
  { label: 'No',    value: false }
]

/* Modelo de filtros */
const filters = ref({
  global       : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
  code         : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
  redimido     : { value: null as boolean | null, matchMode: FilterMatchMode.EQUALS   },
  user_name    : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
  user_phone   : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
  user_address : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
  email        : { value: null as string | null, matchMode: FilterMatchMode.CONTAINS }
})

/* Búsqueda global con debounce */
const searchTerm = ref('')
let debounceId: number | null = null
watch(searchTerm, (val) => {
  if (debounceId) window.clearTimeout(debounceId)
  debounceId = window.setTimeout(() => {
    filters.value.global.value = val || null
  }, 300)
})

/* Columnas y alternador de visibilidad */
const allCols = [
  { field: 'code',        label: 'Código' },
  { field: 'redimido',    label: 'Redimido' },
  { field: 'user_name',   label: 'Nombre' },
  { field: 'user_phone',  label: 'Teléfono' },
  { field: 'user_address',label: 'Dirección' },
  { field: 'email',       label: 'Email' }
]
const visibleCols = ref<string[]>(allCols.map(c => c.field))
function isVisible(field: string) {
  return visibleCols.value.includes(field)
}

/* Contadores */
const totalSi = computed(() => data.value.filter(d => d.redimido).length)
const totalNo = computed(() => data.value.filter(d => !d.redimido).length)

/* Row class (ligero highlight a redimidos) */
function rowClass(rowData: CodeRow) {
  return { redeemed: rowData.redimido, pending: !rowData.redimido }
}

/* Mensaje vacío contextual según filtros */
const emptyMessage = computed(() => {
  const anyFilter =
    (filters.value.global.value && String(filters.value.global.value).length > 0) ||
    Object.entries(filters.value).some(([k, v]: any) => k !== 'global' && v?.value)
  return anyFilter
    ? 'Sin resultados con los filtros aplicados.'
    : 'Aún no hay registros para mostrar.'
})

/* Acciones */
async function reload() {
  loading.value = true
  try {
    data.value = await fetchService.get<CodeRow[]>(`${URI}/get-users-code-plain`)
  } finally {
    loading.value = false
  }
}

async function downloadExcel() {
  excelLoading.value = true
  try {
    const response = await fetch(`${URI}/get-users-code`, { method: 'GET' })
    if (!response.ok) throw new Error('Error al descargar el archivo.')
    const blob = await response.blob()
    const url  = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'users-codes.xlsx'
    link.click()
    window.URL.revokeObjectURL(url)
  } catch (err) {
    console.error(err)
  } finally {
    excelLoading.value = false
  }
}

function exportCSV() {
  dt.value?.exportCSV?.()
}

function clearFilters() {
  searchTerm.value = ''
  filters.value.global.value = null
  filters.value.code.value = null
  filters.value.redimido.value = null
  filters.value.user_name.value = null
  filters.value.user_phone.value = null
  filters.value.user_address.value = null
  filters.value.email.value = null
}

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    console.warn('No se pudo copiar al portapapeles.')
  }
}

/* Cargar datos de la API */
onMounted(reload)
</script>

<style scoped lang="scss">
.codes-container {
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 2rem;
}

.title {
  text-align: center;
  margin-bottom: .5rem;
}

.card {
  width: 100%;
  max-width: 1400px;
  background: #fff;
  border-radius: .75rem;
  padding: .75rem;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,.06);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  position: sticky;
  top: 4rem;
  z-index: 2;

  .left {
    display: flex;
    align-items: center;
    gap: .75rem;
    flex-wrap: wrap;

    .columns-toggle {
      min-width: 220px;
      max-width: 360px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: .25rem;
    flex-wrap: wrap;
  }
}

.table-wrapper {
  margin-top: .5rem;
}

.cell-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.truncate {
  max-width: 28rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link {
  text-decoration: none;
  color: var(--primary-color);
}

.muted {
  color: var(--text-color-secondary);
}

/* Colorear filas suavemente */
:deep(.p-datatable-tbody > tr.redeemed) {
  background: rgba(16, 185, 129, 0.06); /* success suave */
}
:deep(.p-datatable-tbody > tr.pending) {
  background: rgba(234, 179, 8, 0.04); /* warning suave */
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .truncate { max-width: 14rem; }
  .toolbar { top: 3.5rem; }
}
</style>
