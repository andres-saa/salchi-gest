<!-- File: CodesTable.vue -->
<template>
  <div class="container">
    <h3><strong>Códigos generados y redimidos para recolección de emails</strong></h3>

    <!-- Búsqueda global -->


    <div class="table-container">
            <div class="toolbar">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="filters.global.value"
          placeholder="Buscar en todos los campos…"
          style="width: 100%; max-width: 350px"
          class="p-inputtext-sm"
        />
      </span>

        <Button
        label="Descargar Excel"
        icon="pi pi-download"
        class="p-button-help p-button-sm ml-3"
        @click="downloadExcel"
        :loading="excelLoading"
      />
    </div>
      <!--  ⬇️  v-model:filters enlaza el modelo reactivo -->
      <DataTable
        v-model:filters="filters"
        :value="data"
        :loading="loading"
        paginator
        stripedRows
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="{first} – {last} de {totalRecords}"
        :rows="20"
        :rowsPerPageOptions="[15, 20, 30, 50, 100]"
        responsiveLayout="scroll"
        filterDisplay="row"
        removableSort
        sortMode="multiple"
        dataKey="code"
        showGridlines
        :globalFilterFields="[
          'code',
          'user_name',
          'user_phone',
          'user_address',
          'email'
        ]"
      >
        <!-- ───────── Columna CÓDIGO ───────── -->
        <Column
          field="code"
          header="Código"
          sortable
          filterMatchMode="contains"
          class="py-1"
        >
          <template #filter="{ filterModel, filterCallback }">
            <InputText  style="width:10rem;"
              v-model="filterModel.value"
              @input="filterCallback()"
              placeholder="Filtrar"
              class="p-column-filter"
            />
          </template>
        </Column>

        <!-- ───────── Columna REDIMIDO (booleano) ───────── -->
        <Column
          field="redimido"
          header="Redimido"
          sortable
          dataType="boolean"
          filterMatchMode="equals"
          class="py-1"
        >
          <template #body="{ data }">
            {{ data.redimido ? 'Sí' : 'No' }}
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
          field="user_name"
          header="Nombre"
          sortable
          filterMatchMode="contains"
          class="py-1"
        >
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
          field="user_phone"
          header="Teléfono"
          sortable
          filterMatchMode="contains"
          class="py-1"
        >
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
          field="user_address"
          header="Dirección"
          sortable
          filterMatchMode="contains"
          class="py-1"
        >
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
          field="email"
          header="Email"
          sortable
          filterMatchMode="contains"
          class="py-1"
        >
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
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'

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

const data    = ref<CodeRow[]>([])
const loading = ref(false)

const excelLoading = ref(false)

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

/* Boolean dropdown para “redimido” */
const redimidoOptions = [
  { label: 'Todos', value: null },
  { label: 'Sí',    value: true },
  { label: 'No',    value: false }
]

/* Modelo de filtros */
const filters = ref({
  global       : { value: null, matchMode: FilterMatchMode.CONTAINS },
  code         : { value: null, matchMode: FilterMatchMode.CONTAINS },
  redimido     : { value: null, matchMode: FilterMatchMode.EQUALS   },
  user_name    : { value: null, matchMode: FilterMatchMode.CONTAINS },
  user_phone   : { value: null, matchMode: FilterMatchMode.CONTAINS },
  user_address : { value: null, matchMode: FilterMatchMode.CONTAINS },
  email        : { value: null, matchMode: FilterMatchMode.CONTAINS }
})

/* Cargar datos de la API */
onMounted(async () => {
  loading.value = true
  try {
    data.value = await fetchService.get<CodeRow[]>(`${URI}/get-users-code-plain`)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #fff;
  padding: 0 1rem;
}

h3 {
  text-align: center;
}

.toolbar {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: flex-end;
  margin:  1rem 0 ;
 
}

.table-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
}
</style>
