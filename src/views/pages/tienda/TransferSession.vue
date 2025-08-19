<template>
    <div class="page">
      <!-- HEADER -->
      <header class="page-header">
        <div class="title-wrap">
          <i class="pi pi-wallet"></i>
          <h2>Transferencias por confirmar</h2>
        </div>
  
       
      </header>
  
      <!-- CARD PRINCIPAL -->
      <div class="card">
        <TabView v-model:activeIndex="activeTab">
          <!-- TAB 1: BÁSICO -->
          <TabPanel header="Básico">
            <Toolbar class="toolbar">
              <template #start>
                <div class="toolbar-left">
                  <i class="pi pi-list"></i>
                  <span><b>Solicitudes</b></span>
                </div>
              </template>
              <template #end>
                <span class="p-input-icon-left" style="width: 18rem; max-width: 100%;">
                  <i class="pi pi-search" />
                  <InputText v-model="filters['global'].value" placeholder="Buscar solicitud..." class="w-full" />
                </span>
              </template>
            </Toolbar>
  
            <DataTable
              :value="TransferRequests"
              class="datatable"
              :loading="loadingBasic"
              :paginator="true"
              :rows="15"
              :rowsPerPageOptions="[5,10,25,100]"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} transferencias"
              scrollable
              scrollHeight="65vh"
              stripedRows
              showGridlines
              v-model:filters="filters"
            >
              <template #empty>
                <div class="empty">
                  <i class="pi pi-inbox"></i>
                  <p>Sin transferencias pendientes por ahora.</p>
                </div>
              </template>
  
              <Column field="order_id" header="ID orden" style="min-width:max-content" frozen />
  
              <Column header="Monto de la orden">
                <template #body="slotProps">
                  {{ formatToColombianPeso(slotProps.data.total_order_price) }}
                </template>
              </Column>
  
              <Column header="Fecha">
                <template #body="slotProps">
                  {{ slotProps.data.latest_status_timestamp?.split('T')[0]?.split('-')?.reverse()?.join('-') }}
                </template>
              </Column>
  
              <Column header="Hora">
                <template #body="slotProps">
                  {{
                    slotProps.data.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0,2)?.join(':')
                  }}
                </template>
              </Column>
  
              <Column header="Domicilio">
                <template #body="slotProps">
                  {{ formatToColombianPeso(slotProps.data.pe_json?.delivery?.delivery_costoenvio || 0) }}
                </template>
              </Column>
  
              <Column header="Total">
                <template #body="slotProps">
                  {{
                    formatToColombianPeso(
                      (slotProps.data.pe_json?.delivery?.delivery_costoenvio || 0) + (slotProps.data.total_order_price || 0)
                    )
                  }}
                </template>
              </Column>
  
              <Column header="Cliente" style="min-width:16rem">
                <template #body="slotProps">
                  {{ slotProps.data.user_name }}
                  {{ slotProps.data.second_name }}
                  {{ slotProps.data.first_last_name }}
                  {{ slotProps.data.second_last_name }}
                </template>
              </Column>
  
              <Column field="user_phone" header="Teléfono cliente" />
  
              <Column header="Acciones" frozen alignFrozen="right" class="px-0" style="min-width:10rem">
                <template #body="slotProps">
                  <div class="action-row">
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="open(slotProps.data)"
                      icon="pi pi-eye"
            
                      style="width: 2rem;height: 2rem;"
                      severity="info"
                      aria-label="Ver"
                    />
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="show(slotProps.data.order_id)"
                      icon="pi pi-check"
             
                      severity="success"
                      aria-label="Aprobar"
                      style="width: 2rem;height: 2rem;"
                    />
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="show2(slotProps.data.order_id)"
                      icon="pi pi-trash"
                
                      severity="danger"
                      aria-label="Archivar"
                      style="width: 2rem;height: 2rem;"
                    />
                  </div>
                </template>
              </Column>
            </DataTable>
          </TabPanel>
  
          <!-- TAB 2: REPORTES -->
          <TabPanel header="Reportes">
            <div class="filters">
              <div class="filters-row">
                <div class="filters-item">
                  <label class="filters-label">Fecha inicio</label>
                  <Calendar v-model="date_range.start_date" showIcon />
                </div>
                <div class="filters-item">
                  <label class="filters-label">Fecha fin</label>
                  <Calendar v-model="date_range.end_date" showIcon />
                </div>
                <div class="filters-item grow">
                  <label class="filters-label">Sedes</label>
                  <MultiSelect
                    v-model="date_range.sites"
                    :options="sites.filter(s => s.show_on_web)"
                    optionLabel="site_name"
                    display="chip"
                    placeholder="Selecciona sedes"
                    class="w-full"
                  />
                </div>
                <div class="filters-item">
                  <Button severity="help" @click="update" label="Buscar" icon="pi pi-search" />
                </div>
              </div>
            </div>
  
            <DataTable
              :value="transfers"
              class="datatable"
              :loading="loadingReport"
              :paginator="true"
              :rows="15"
              :rowsPerPageOptions="[5,10,25,100]"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} transferencias"
              scrollable
              showGridlines
              stripedRows
            >
              <template #header>
                <div class="table-header-compact">
                  <i class="pi pi-chart-bar"></i>
                  <span><b>Transferencias {{ route.params.section }}</b></span>
                </div>
              </template>
  
              <template #empty>
                <div class="empty">
                  <i class="pi pi-folder-open"></i>
                  <p>Sin resultados para los filtros seleccionados.</p>
                </div>
              </template>
  
              <Column
                v-for="c in columnsd"
                :key="c"
                :header="c"
                class="py-1"
                style="text-transform: uppercase;"
              >
                <template #body="slotProps">
                  <h6 class="m-0">{{ slotProps.data[c] }}</h6>
                </template>
              </Column>
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
  
      <!-- DIALOG: RECHAZAR SOLICITUD (antes el footer estaba DENTRO del form) -->
      <Dialog v-model:visible="cancelDialogVisible" modal :closable="true" :draggable="false" class="dialog-md">
        <template #header>
          <h3><b>Rechazar orden</b></h3>
        </template>
  
        <form @submit.prevent="resolve(false,cancelData.id,cancelData.reason)" class="dialog-form">
          <Textarea
            id="reason"
            v-model="cancelData.reason"
            rows="5"
            placeholder="¿Por qué deseas rechazar esta solicitud?"
            class="w-full"
            style="resize:none; text-transform:lowercase;"
          />
          <!-- ⚠️ EL FOOTER DEBE SER HERMANO DIRECTO DEL DIALOG, NO DENTRO DEL FORM -->
        </form>
  
        <template #footer>
          <div class="dialog-footer">
            <Button label="Cancelar" class="p-button-text" @click="cancelDialogVisible=false" />
            <Button label="Rechazar" type="submit" class="p-button-danger" @click="$el.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))" />
          </div>
        </template>
      </Dialog>
  
      <!-- DIALOG: APROBAR -->
      <Dialog v-model:visible="aceptDialogVisible" modal :closable="true" :draggable="false" class="dialog-sm">
        <template #header>
          <h3><b>Aprobar esta orden</b></h3>
        </template>
        <div class="dialog-content">
          <p>Confirma que la transferencia fue recibida.</p>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <Button label="Cancelar" class="p-button-text" @click="aceptDialogVisible=false" />
            <Button
              label="Aprobar (Transferencia confirmada)"
              class="p-button-success"
              @click="authoize(cancelData.order_id)"
            />
          </div>
        </template>
      </Dialog>
  
      <!-- DIALOG: ARCHIVAR (NO CONFIRMADA) -->
      <Dialog v-model:visible="rejectDialogVisible" modal :closable="true" :draggable="false" class="dialog-sm">
        <template #header>
          <h3><b>El cliente no realizó la transferencia</b></h3>
        </template>
        <div class="dialog-content">
          <p>Se archivará la solicitud como no confirmada.</p>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <Button label="Cancelar" class="p-button-text" @click="rejectDialogVisible=false" />
            <Button
              label="Archivar (Transferencia no confirmada)"
              class="p-button-danger"
              @click="reject(rejectData.order_id)"
            />
          </div>
        </template>
      </Dialog>
  
      <!-- Dialogo de pedido -->
      <DialogoPedido />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeMount, watch } from 'vue'
  import { FilterMatchMode } from 'primevue/api'
  import { useRoute } from 'vue-router'
  import DialogoPedido from '../cocina/DialogoPedido.vue'
  import { orderService } from '@/service/menu/orderService.js'
  import { loginStore } from '@/store/user.js'
  import { useOrderStore } from '../../../store/order'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI } from '../../../service/conection'
  import { formatToColombianPeso } from '../../../service/valoresReactivosCompartidos'
  import { formatoPesosColombianos } from '../callCenter/service/utils/formatoPesos'
  const route = useRoute()
  const userStore = loginStore()
  const store = useOrderStore()
  
  const TransferRequests = ref([])
  const transfers = ref([])
  const columnsd = ref([])
  const sites = ref([])
  
  const loadingBasic = ref(false)
  const loadingReport = ref(false)
  const activeTab = ref(0)
  
  // Filtros
  const filters = ref()
  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  }
  onBeforeMount(() => initFilters())
  
  // Rangos reportes
  const date_range = ref({
    start_date: new Date(),
    end_date: new Date(),
    sites: []
  })
  
  // Dialogs
  const cancelDialogVisible = ref(false)
  const aceptDialogVisible = ref(false)
  const rejectDialogVisible = ref(false)
  
  const cancelData = ref({})
  const rejectData = ref({})
  
  // Contadores “sesión”
  const approvedCount = ref(0)
  const archivedCount = ref(0)
  
  // Acciones
  const open = (order) => {
    store.setVisible('currentOrder', true)
    store.setOrder(order)
  }
  
  const authoize = async (order_id) => {
    const responsible_id = userStore.rawUserData.id
    await orderService.authorizeOrder(order_id, responsible_id)
    aceptDialogVisible.value = false
    approvedCount.value++
    fetchTransferRequests()
  }
  
  const reject = async (order_id) => {
    const responsible_id = userStore.rawUserData.id
    await orderService.rejectOrder(order_id, responsible_id)
    rejectDialogVisible.value = false
    archivedCount.value++
    fetchTransferRequests()
  }
  
  const show = (id) => {
    aceptDialogVisible.value = true
    cancelData.value.order_id = id
  }
  
  const show2 = (id) => {
    rejectDialogVisible.value = true
    rejectData.value.order_id = id
  }
  
  const resolve = async (desition, id, observation) => {
    const data = {
      authorized: desition,
      responsible_id: userStore.rawUserData.id,
      responsible_observation: cancelData.value.reason || 'sin observaciones'
    }
    await orderService.resolveCancellationRequest(id, data)
    aceptDialogVisible.value = false
    cancelDialogVisible.value = false
    TransferRequests.value = await orderService.getPendientsCancellationRequest()
  }
  
  // Reporte
  const update = async () => {
    loadingReport.value = true
    try {
      const transfersd = await fetchService.post(`${URI}/transaction_report/`, {
        start_date: date_range.value.start_date,
        end_date: date_range.value.end_date,
        sites: date_range.value.sites.map((s) => s.site_id)
      })
      transfers.value = transfersd || []
      columnsd.value = transfersd?.[0] ? Object.keys(transfersd[0]) : []
    } finally {
      loadingReport.value = false
    }
  }
  
  // Loaders
  const fetchTransferRequests = async () => {
    loadingBasic.value = true
    try {
      TransferRequests.value = await orderService.getOrdersTransfer()
    } finally {
      loadingBasic.value = false
    }
  }
  
  watch(
    () => store.numberTransferRequests,
    () => {
      fetchTransferRequests()
    }
  )
  
  watch(
    () => route.params.request_status,
    async () => {
      TransferRequests.value = await orderService.getPendientsCancellationRequest()
    },
    { deep: true }
  )
  
  onMounted(async () => {
    sites.value = await fetchService.get(`${URI}/sites/`)
    await Promise.all([fetchTransferRequests(), update()])
  })
  </script>
  
  <style scoped>
  .page {
    --bg: #f7f7f8;
    --card: #ffffff;
    --text: #111827;
    --muted: #6b7280;
    --border: #e5e7eb;
    --ring: #d1d5db;
    --shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  
    min-height: 100%;
    background: var(--bg);
    padding: 1rem;
  }
  
  .page-header {
    position: sticky;
    top: 3rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  
    backdrop-filter: blur(6px);
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    box-shadow: var(--shadow);
    margin: 0 auto 1rem;
    max-width: 1280px;
  }
  
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text);
  }
  .title-wrap i { font-size: 1.4rem; }
  .title-wrap h2 {
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.2px;
  }
  .header-stats :deep(.p-tag) {
    border-radius: 999px;
    font-size: 0.9rem;
  }
  
  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 0.75rem;
    max-width: 1280px;
    margin: 0 auto 2rem;
    box-shadow: var(--shadow);
  }
  
  .toolbar {
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    margin: 0.5rem 0 0.75rem;
    background: #fff;
  }
  .toolbar-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--muted);
  }
  .toolbar-left i { font-size: 1.1rem; }
  
  .filters {
    border: 1px dashed var(--ring);
    background: #fcfcfd;
    border-radius: 0.75rem;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .filters-row {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .filters-item { display: flex; flex-direction: column; gap: 0.25rem; }
  .filters-item.grow { grid-column: span 2; }
  .filters-label { color: var(--muted); font-size: 0.8rem; }
  
  .datatable :deep(.p-datatable-header) { background: transparent; border: none; }
  .datatable :deep(.p-datatable-wrapper) { border-radius: 0.5rem; }
  .table-header-compact {
    display: inline-flex; align-items: center; gap: 0.5rem; color: var(--muted);
  }
  .action-row { display: flex; gap: 0.4rem; }
  .empty {
    display: grid; place-items: center; text-align: center; color: var(--muted); padding: 2rem 0;
  }
  .empty i { font-size: 1.6rem; margin-bottom: 0.35rem; }
  
  .dialog-sm { width: 32rem; max-width: 96%; }
  .dialog-md { width: 34rem; max-width: 96%; }
  .dialog-form { display: flex; flex-direction: column; gap: 0.75rem; }
  .dialog-content { padding: 0 0.5rem 0.5rem; }
  .dialog-footer { display: flex; gap: 0.5rem; justify-content: flex-end; }
  
  @media (max-width: 900px) {
    .filters-row { grid-template-columns: 1fr 1fr; }
    .filters-item.grow { grid-column: span 2; }
  }
  @media (max-width: 600px) {
    .page-header { top: 2.5rem; flex-direction: column; align-items: flex-start; gap: 0.6rem; }
  }
  </style>
  