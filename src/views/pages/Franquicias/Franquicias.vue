<template>
  <div class="page-wrap theme-bw">
    <ConfirmDialog />

    <!-- Nav: filtros de estado -->
    <nav class="nav_bar">
      <ul class="nav_bar--buttons">
        <li
          v-for="button in nav_buttons"
          :key="button.name"
          class="nav_bar--item"
        >
          <Button
            @click="() => active_button_nav = button"
            class="nav_bar--buttons-button p-button-text"
            :class="button.name == active_button_nav.name ? 'nav_bar--buttons-button-selected' : ''"
            :label="button.name"
            icon="pi pi-check"
            iconPos="left"
          />
        </li>
      </ul>
    </nav>

    <!-- Tabla -->
    <DataTable
      :paginator="true"
      :rows="15"
      class="col-12 mt-5 fancy-table"
      :value="pqrsUser.filter(p => p.status == active_button_nav.name)"
      :filters="filters"
      scrollable
      showGridlines
      stripedRows
      scrollHeight="65vh"
      tableStyle="min-width: 64rem; width:100%;"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
      :rowsPerPageOptions="[5, 10, 25, 100]"
    >
      <template #header>
        <div class="table-toolbar">
          <h4 class="toolbar-title">
            <i class="fa-regular fa-bars-progress"></i>
            <b> Solicitudes de franquicias {{ active_button_nav.name }} </b>
          </h4>

          <div class="toolbar-actions">
            <span class="search-wrap">
              <i class="pi pi-search"></i>
              <InputText
                v-model="filters['global'].value"
                placeholder="Buscar solicitud..."
                class="w-full"
              />
            </span>

            <Button
              @click="descargar_excel()"
              label="Descargar Registros"
              icon="pi pi-download"
              severity="help"
              class="toolbar-btn"
            />
            <Button
              @click="descargar_excel_todo()"
              label="Descargar Todo"
              icon="pi pi-download"
              severity="help"
              class="toolbar-btn"
            />
          </div>
        </div>
      </template>

      <!-- Columnas dinámicas -->
      <Column
        v-for="column in columview(dataColumns)"
        :key="column.columnValue"
        :header="column.columnName"
        :field="column.columnValue"
        :style="`min-width:${column.size}`"
        class="my-0 py-2"
      >
        <template #body="contract">
          <!-- Fecha -->
          <h6
            v-if="column.columnType=='date'"
            class="m-0 p-0 cell mono"
            style="min-width:max-content"
          >
            {{ contract.data[column.columnValue]?.split('-').reverse().join('-') || '---------' }}
          </h6>

          <!-- Booleano -->
          <h6
            v-else-if="column.columnType=='bool'"
            class="m-0 p-0 cell"
            style="min-width:max-content"
          >
            {{ (contract.data[column.columnValue] ? 'Sí' : 'No') || '---------' }}
          </h6>

          <!-- Max content -->
          <h6
            v-else-if="column.columnType == 'max-content'"
            class="m-0 p-0 cell"
            style="min-width:max-content"
          >
            {{ contract.data[column.columnValue] || '---------' }}
          </h6>

          <!-- Dinero -->
          <h6
            v-else-if="column.columnType == 'money'"
            class="m-0 p-0 cell"
            style="min-width:max-content"
          >
            {{ formatoPesosColombianos(contract.data[column.columnValue]) || '---------' }}
          </h6>

          <!-- Rating -->
          <div v-else-if="column.columnType == 'rating'" class="m-0 p-0">
            <Rating :cancel="false" v-if="contract.data[column.columnValue] > 0" readonly v-model="contract.data[column.columnValue]" />
          </div>

          <!-- Otros -->
          <h6 v-else-if="column.columnValue !== 'current_status'
                         && column.columnValue !== 'channel'
                         && column.columnValue !== 'tag_name'
                         && column.columnValue !== 'restaurant'"
              class="m-0 p-0 cell">
            {{ contract.data[column.columnValue] || '---------' }}
          </h6>

          <!-- Status compuesto -->
          <div
            v-else-if="column.columnValue == 'current_status'"
            class="pill-col"
          >
            <Tag class="status-pill bw-pill" :style="`background-color:${contract.data[column.columnValue]?.color}`">
              {{ contract.data[column.columnValue]?.status || '---------' }}
            </Tag>
            <b class="mono">{{ contract.data[column.columnValue]?.timestamp || '---------' }}</b>
          </div>

          <!-- Channel -->
          <div v-else-if="column.columnValue == 'channel'" class="pill-col">
            <Tag class="status-pill bw-pill" :style="`background-color:${contract.data.channel_color}`">
              {{ contract.data[column.columnValue] || '---------' }}
            </Tag>
          </div>

          <!-- Tag -->
          <div v-else-if="column.columnValue == 'tag_name'" class="pill-col">
            <Tag class="status-pill bw-pill" :style="`background-color:${contract.data.tag_color}`">
              {{ contract.data[column.columnValue] }}
            </Tag>
          </div>

          <!-- Restaurant -->
          <div v-else-if="column.columnValue == 'restaurant'" class="pill-col">
            <Tag class="status-pill bw-pill" :style="`background-color:${contract.data.restaurant_color}`">
              {{ contract.data[column.columnValue] }}
            </Tag>
          </div>
        </template>
      </Column>

      <!-- Acciones -->
      <Column header="Interactuar" class="my-0 py-2 px-0 mx-0">
        <template #body="data">
          <div class="row-actions">
            <Button
              v-if="data.data.status != 'Tomada en cuenta'"
              @click="confirmTomarEnCuenta(data.data)"
              label="Tomar en cuenta"
              icon="pi pi-check"
              severity="help"
              class="action-btn"
            />
            <Button
              v-if="data.data.status != 'Descartada'"
              @click="confirmDescartar(data.data)"
              label="Descartar"
              icon="pi pi-times"
              severity="danger"
              class="action-btn"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { pqrsService } from '@/service/pqrs/pqrsService';
import { fetchService } from '@/service/utils/fetchService';
import { URI } from '@/service/conection';
import { FilterMatchMode } from 'primevue/api';
import { useRoute } from 'vue-router';
import { loginStore } from '@/store/user';
import { formatToColombianPeso } from '@/service/valoresReactivosCompartidos';
import { PathService } from '@/service/pathService';
import pqrUser from '../pqrs/pqrUser.vue';
import * as XLSX from 'xlsx';
import { useConfirm } from 'primevue/useconfirm';
import { useReportesStore } from '@/store/reportes';

const store = useReportesStore()
const confirm = useConfirm();

const notes = ref('')
const inputOrder = ref()
const isActive = PathService.isActiveRoute
const route = useRoute();

const nav_buttons = ref([
  { name:'Pendiente' },
  { name:'Tomada en cuenta' },
  { name:'Descartada' }
])

const descargar_excel = async () => {
  const data = pqrsUser.value
    .filter(p => p.status == active_button_nav.value.name)
    .map(item => {
      const row = {};
      dataColumns.value.forEach(col => {
        row[col.columnName] = item[col.columnValue];
      });
      return row;
    });

  const worksheet = XLSX.utils.json_to_sheet(data);
  function sizeToWidth(sizeStr) {
    const num = parseFloat(sizeStr);
    const width = num * 10;
    return Math.min(width, 50);
  }
  worksheet["!cols"] = dataColumns.value.map(col => ({ wch: sizeToWidth(col.size) }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
  XLSX.writeFile(workbook, `Reporte de franquicias ${active_button_nav.value.name}.xlsx`);
};

const descargar_excel_todo = async () => {
  const data = pqrsUser.value.map(item => {
    const row = {};
    dataColumns.value.forEach(col => {
      row[col.columnName] = item[col.columnValue];
    });
    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(data);
  function sizeToWidth(sizeStr) {
    const num = parseFloat(sizeStr);
    const width = num * 10;
    return Math.min(width, 50);
  }
  worksheet["!cols"] = dataColumns.value.map(col => ({ wch: sizeToWidth(col.size) }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
  XLSX.writeFile(workbook, `Reporte de franquicias todas.xlsx`);
};

const columview = (colums) => colums;

const active_button_nav = ref({ name:'Pendiente' })
const get_status = (status) => status.status_id
const login = loginStore()
const allStatus = ref([])
const selecte_status_update  = ref()

const chargeHistory = async(historial) => {
  showHistoryDialog.value = true
  currentOrderHistory.value = historial
}

const confirmTomarEnCuenta = (item) => {
  confirm.require({
    message: '¿Está seguro de que desea tomar en cuenta esta solicitud?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    accept: () => { tomarEnCuenta(item); },
    reject: () => {}
  });
};

const confirmDescartar = (item) => {
  confirm.require({
    message: '¿Está seguro de que desea descartar esta solicitud?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    accept: () => { descartar(item); },
    reject: () => {}
  });
};

const tomarEnCuenta = async(solicitud) => {
  solicitud.status = 'Tomada en cuenta'
  await fetchService.put(`${URI}/update_franquicia_request/${solicitud.id}`, solicitud)
}

const descartar = async(solicitud) => {
  solicitud.status = 'Descartada'
  await fetchService.put(`${URI}/update_franquicia_request/${solicitud.id}`, solicitud)
}

const chargePqr = async(historial) => {
  showPqrGest.value = true
  currentPqrGest.value = historial
}

const currentOrderHistory = ref([])
const currentPqrGest = ref([])
const showHistoryDialog = ref(false)
const showPqrGest = ref(false)

const filters = ref(null);
const initFilters = () => {
  filters.value = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } };
};
onBeforeMount(() => { initFilters() })

const dataColumns = ref([
  { columnName:'Id', columnValue:'id', columnType:'other', size:'1.2rem', vif:true },
  { columnName:'Fecha y Hora', columnValue:'formatted_date', columnType:'other', size:'4rem', vif:true },
  { columnName:'Nombre', columnValue:'name', columnType:'other', size:'3rem', vif:true },
  { columnName:'Telefono', columnValue:'phone', columnType:'other', size:'3rem', vif:true },
  { columnName:'Email', columnValue:'email', columnType:'other', size:'4rem', vif:true },
  { columnName:'Motivo', columnValue:'reason', columnType:'other', size:'20rem', vif:true },
  { columnName:'Capacidad de inversion', columnValue:'investment_capacity', columnType:'other', size:'4rem', vif:true },
  { columnName:'Zona de interes', columnValue:'zone_of_interest', columnType:'other', size:'3rem', vif:true },
  { columnName:'Ciudad', columnValue:'city', columnType:'other', size:'3rem', vif:true },
  { columnName:'Esta en sector gastronomico?', columnValue:'is_in_gastronomic_sector', columnType:'bool', size:'3rem' },
  { columnName:'Participara en la operacion?', columnValue:'will_participate_in_operation', columnType:'bool', size:'3rem', vif:true },
  { columnName:'Fuente de ingresos', columnValue:'source_of_income', columnType:'other', size:'4rem', vif:true },
  { columnName:'Estado', columnValue:'status', columnType:'other', size:'3rem', vif:true },
])

const tags = ref({
  "2": "#3498DB","4": "#2ECC71","5": "#16A085","6": "#E74C3C","7": "#F39C12"
});

const newPqrs = ref({ question: '', answer: '' });
const pqrsToDelete = ref({});
const controlVisible = ref({});
const previousIndex = ref(null);

const pqrsUser = ref([{}]);
const visibles = ref({});
const editing = ref(false);
const visibleAnswers = ref({});

const costo = ref(false)
const costovalue = ref()
const order = ref(false)

const open_to_edit = (pq) => {
  editing.value = true;
  visibles.value.showDialogToAddPqrs = true;
  newPqrs.value = { ...pq };
};
const openToCreatePqrs = () => {
  editing.value = false;
  visibles.value.showDialogToAddPqrs = true;
};
const openToDelete = (pqrs) => {
  pqrsToDelete.value = pqrs;
  visibles.value.showDeleteDialog = true;
};
const toggle = (index) => {
  if (previousIndex.value !== null && previousIndex.value !== index) {
    controlVisible.value[previousIndex.value] = false;
  }
  controlVisible.value[index] = !controlVisible.value[index];
  previousIndex.value = controlVisible.value[index] ? index : null;
};

const update = async () => {
  pqrsUser.value = await fetchService.get(`${URI}/get_franquicia_request`);
  allStatus.value = status;
};
const deletePqrs = async (id) => {
  visibles.value.showDeleteDialog = false;
  await pqrsService.deletePqrs(id);
  update();
};
onMounted(async () => { update() });

watch(selecte_status_update, () => { resetPqrForm() })
const resetPqrForm = () => {
  costovalue.value = null; notes.value = ''; inputOrder.value = null;
  costo.value = false; order.value = false;
};

const descuento = ref()
const sendPqrUpdate = async () => {
  const discountedValue = descuento.value && costovalue.value
    ? (costovalue.value - (costovalue.value * (descuento.value / 100))).toFixed(2)
    : costovalue.value;

  const dataToSend = {
    pqr_request_id: currentPqrGest.value.pqr_request_id,
    status_id: selecte_status_update.value,
    responsible_id: login.rawUserData.id,
    value: discountedValue || null,
    notes: descuento.value && costovalue.value
      ? `Se le dio un descuento de ${descuento.value}% en una orden de ${formatToColombianPeso(costovalue.value)}, quedando en un valor de ${formatToColombianPeso(discountedValue)}`
      : '',
    order_id: inputOrder.value || null
  };
  try {
    await fetchService.post(`${URI}/change-pqr-status`, dataToSend);
    update(); showPqrGest.value = false; resetPqrForm();
  } catch (error) {
    console.error('Error al enviar la actualización de la PQR:', error);
  }
};

watch(() => route.params.section_id, () => { update(); }, { deep: true });

const createNewPqrs = async () => {
  const dataToSend = {
    question: newPqrs.value.question,
    answer: newPqrs.value.answer,
    place_id: route.params.section_id,
  };
  visibles.value.showDialogToAddPqrs = false;
  if (editing.value) {
    await pqrsService.updatePqrs(dataToSend, newPqrs.value.id);
  } else {
    await pqrsService.createPqrs(dataToSend);
  }
  update();
};
</script>

<style scoped>
/* =================== Paleta blanco & negro (grises) =================== */
.theme-bw{
  --bg: #fafafa;
  --panel: #ffffff;
  --panel-strong: #f3f3f3;
  --line: #e6e6e6;
  --text: #111111;
  --text-weak: #5a5a5a;
  --muted: #8c8c8c;
  --shadow: rgba(0,0,0,.06);
  --shadow-strong: rgba(0,0,0,.12);
}
.page-wrap{
  width: 100vw;
  max-width: 100vw;
  background: var(--bg);
  padding: 1rem 2vw 2rem;
  box-sizing: border-box;
  color: var(--text);
}

/* =================== Nav pills de estado =================== */
.nav_bar{
  position: sticky;
  top: 3.5rem;
  z-index: 9;
  width: 100%;
  margin: .75rem auto 1rem;
  display: flex;
  justify-content: center;
  backdrop-filter: saturate(1.1) blur(4px);
}
.nav_bar--buttons{
  display: flex;
  gap: .5rem;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: .35rem .5rem;
  box-shadow: 0 8px 20px var(--shadow);
  max-width: 1200px;
  width: calc(100% - 2rem);
  overflow: auto;
  scrollbar-width: none;
}
.nav_bar--buttons::-webkit-scrollbar{ display:none; }
.nav_bar--item{
  display: flex; align-items: center;
}
.nav_bar--buttons-button{
  border-radius: 999px;
  padding: .45rem 1rem;
  border: 1px solid transparent;
  transition: transform .12s ease, box-shadow .12s ease;
  color: var(--text);
}
.nav_bar--buttons-button:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 18px var(--shadow-strong);
}
/* Botón seleccionado: texto blanco + fondo negro */
.nav_bar--buttons-button-selected{
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}
.nav_bar--buttons-button-selected :deep(.p-button-label),
.nav_bar--buttons-button-selected :deep(.p-button-icon){
  color: #fff !important;
}

/* =================== Toolbar de la tabla =================== */
.table-toolbar{
  display: grid;
  grid-template-columns: 1fr auto;
  gap: .75rem;
  align-items: center;
  padding: .5rem 0 .75rem;
}
.toolbar-title{
  margin: 0;
  display:flex;
  align-items:center;
  gap:.5rem;
  color: var(--text);
}
.toolbar-actions{
  display: flex;
  gap: .5rem;
  align-items: center;
  flex-wrap: wrap;
}
.search-wrap{
  position: relative;
  display: inline-flex;
  align-items: center;
}
.search-wrap > i{
  position: absolute;
  left: .6rem;
  color: var(--muted);
  font-size: .9rem;
}
.search-wrap :deep(.p-inputtext){
  padding-left: 2rem;
  height: 2.25rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--text);
}
.toolbar-btn{
  border-radius: 999px;
  /* Fuerza B/N para botones con severidades de PrimeVue */
  background: #f0f0f0 !important;
  border: 1px solid var(--line) !important;
  color: #111 !important;
}
.toolbar-btn:hover{
  background: #e6e6e6 !important;
}

/* =================== Tabla (PrimeVue) =================== */
.fancy-table :deep(.p-datatable){
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--text);
  box-shadow: 0 10px 24px var(--shadow);
}
.fancy-table :deep(.p-datatable-thead > tr > th){
  background: var(--panel-strong);
  color: var(--text);
  border-color: var(--line);
  font-weight: 600;
}
.fancy-table :deep(.p-datatable-tbody > tr){
  transition: background .12s ease;
}
.fancy-table :deep(.p-datatable-tbody > tr:hover){
  background: #f4f4f4;
}

/* =================== Celdas y badges =================== */
.cell{ color: var(--text); }
.mono{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

.pill-col{
  display:flex; flex-direction:column; gap:.15rem; align-items:flex-start;
}
.status-pill{
  color: #fff;
  border: 0;
  padding: .2rem .5rem;
  border-radius: .35rem;
  box-shadow: 0 6px 14px var(--shadow-strong);
}
/* Convierte colores dinámicos a escala de grises sin tocar datos */
.bw-pill{
  filter: grayscale(1) contrast(1.05);
}

/* =================== Acciones por fila =================== */
.row-actions{
  display:flex;
  flex-direction: column;
  gap: .35rem;
  justify-content:center;
  align-items: stretch;
  padding: .25rem .5rem;
}
.action-btn{
  width: 100%;
  border-radius: .5rem;
  /* Uniforme B/N (incluye .p-button-danger/.p-button-help) */
  background: #111 !important;
  border: 1px solid #111 !important;
  color: #fff !important;
}
.action-btn:hover{
  background:#000 !important;
  border-color:#000 !important;
}

/* =================== Responsividad =================== */
@media (max-width: 1200px){
  .table-toolbar{
    grid-template-columns: 1fr;
  }
  .toolbar-actions{
    justify-content: flex-start;
  }
}
@media (max-width: 992px){
  /* Reduce min-width de la tabla para menos scroll horizontal */
  .fancy-table :deep(.p-datatable-table){
    min-width: 56rem !important;
  }
}
@media (max-width: 768px){
  .nav_bar--buttons{
    gap: .35rem;
    padding: .25rem .4rem;
  }
  .nav_bar--buttons-button{
    padding: .35rem .8rem;
    font-size: .9rem;
  }
  .search-wrap{ width: 100%; }
  .toolbar-actions{ width: 100%; }
  .toolbar-btn{ flex: 1 1 auto; }
  .fancy-table :deep(.p-datatable-table){
    min-width: 48rem !important;
  }
  .row-actions{ flex-direction: row; }
}
@media (max-width: 576px){
  .fancy-table :deep(.p-datatable-table){
    min-width: 40rem !important;
  }
  .toolbar-btn{
    font-size: .9rem;
    padding: .4rem .6rem;
  }
}
</style>
