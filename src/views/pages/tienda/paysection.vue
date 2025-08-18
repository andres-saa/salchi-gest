<template>
    <div class="container" style="margin-top: 4rem;">
      <!-- ARCHIVAR -->
      <Dialog v-model:visible="archiveDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Archivar pago</b></h3>
        </template>
        <form @submit.prevent="archive(archiveData.order_id)" style="display:flex;gap:1rem;flex-direction:column;">
          <p>
            ¿Seguro que deseas archivar el pago de la orden
            <b>{{ archiveData.order_id }}</b>? Esta acción no intentará cobrar al cliente.
          </p>
          <div style="display:flex;gap:.5rem;">
            <Button type="button" label="Cancelar" class="w-full p-button-secondary" @click="archiveDialogVisible=false" />
            <Button type="submit" label="Archivar" class="w-full p-button-danger" />
          </div>
        </form>
      </Dialog>
  
      <p class="text-4xl text-center px-4" style="font-weight: bold; margin-top: 4rem;">
        <i class="fa-solid fa-money-bill"></i>
        Pedidos de pasarela sin pagar o abandonados
      </p>
  
      <!-- RECHAZAR ORDEN -->
      <Dialog v-model:visible="cancelDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Rechazar orden</b></h3>
        </template>
        <form @submit.prevent="resolve(false,cancelData.id,cancelData.reason)" style="display:flex;gap:1rem;flex-direction:column;align-items:start">
          <Textarea style="resize:none; text-transform:lowercase; width:100%" id="reason" v-model="cancelData.reason" rows="5"
            placeholder="Porque desea rechazar esta solicitud?"></Textarea>
          <Button style="width:100%;border-radius:.5rem" label="Rechazar" type="submit" class="p-button-danger" />
        </form>
      </Dialog>
  
      <!-- APROBAR ORDEN -->
      <Dialog v-model:visible="aceptDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Aprobar esta orden</b></h3>
        </template>
        <form @submit.prevent="authoize(cancelData.order_id)" style="display:flex;gap:1rem;flex-direction:column;align-items:start">
          <Button style="width:100%;border-radius:.5rem" label="Aprobar (usuario contactado)" type="submit" class="p-button-success" />
        </form>
      </Dialog>
  
      <div style="max-width: 1280px;" class="mx-auto">
        <!-- BARRA DE TAREAS (Pestañas Pendientes / Archivados) -->
        <div class="taskbar" style="padding: 0 .5rem;">
          <Button
            :label="`Pendientes`"
            :class="['task-btn', paymentTab==='pending' ? 'task-btn--active' : 'p-button-outlined']"
            @click="switchTab('pending')"
          />
          <Button
            :label="`Archivados`"
            :class="['task-btn', paymentTab==='archived' ? 'task-btn--active' : 'p-button-outlined']"
            @click="switchTab('archived')"
          />
        </div>
  
        <div class="slider mx-auto" style="display:flex;overflow:hidden">
          <!-- SLIDE 1: LISTA -->
          <div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">
            <DataTable
              :loading="loading"
              :paginator="true"
              :rows="15"
              :filters="filters"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Transferencias"
              :rowsPerPageOptions="[5, 10, 25, 100]"
              scrollable
              scrollHeight="65vh"
              stripedRows
              v-model:filters="filters"
              class="col-12 m-auto"
              :value="paymentTab==='pending' ? filteredTransferRequests : filteredArchivedRequests"
              tableStyle="min-width: 50rem;"
            >
              <template #header>
                <div class="grid" style="align-items:center;justify-content: space-between;">
                  <div style="display:flex;gap:2rem;padding:0 2rem;">
                    <div><Checkbox v-model="visible.colombia" :binary="true"></Checkbox> Tiendas Colombia</div>
                    <div><Checkbox v-model="visible.usa" :binary="true"></Checkbox> Tiendas Usa</div>
                    <div><Checkbox v-model="visible.distri" :binary="true"></Checkbox> Distrimonster</div>
                  </div>
  
                  <span class="md:mt-0 p-input-icon-right m-3">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Buscar Solicitud..." />
                  </span>
                </div>
              </template>
  
              <template #loading>
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".2s" aria-label="Custom ProgressSpinner" />
              </template>
  
              <Column style="min-width: max-content;" class="py-1" field="order_id" header="ID orden" frozen />
              <Column class="py-1" field="total_order_price" header="Monto de la orden">
                <template #body="data">
                  {{ formatoPesosColombianos(data.data.total_order_price) || '$ 0' }}
                </template>
              </Column>
  
              <Column class="py-1" field="hora" header="Hora">
                <template #body="data">
                  {{ extraerHora(data.data.latest_status_timestamp) }}
                </template>
              </Column>
  
              <Column class="py-1" field="delivery_price" header="Domicilio">
                <template #body="data">
                  {{ formatToColombianPeso(data.data.pe_json?.delivery?.delivery_costoenvio) }}
                </template>
              </Column>
  
              <Column class="py-1" field="Total" header="Total">
                <template #body="data">
                  {{ formatToColombianPeso((data.data.pe_json?.delivery?.delivery_costoenvio || 0) + (data.data.total_order_price || 0)) }}
                </template>
              </Column>
  
              <Column class="py-1" field="user_name" header="Cliente" />
              <Column class="py-1" field="user_phone" header="Telefono cliente" />
  
              <Column class="py-1 px-0" field="date" header="Action" frozen alignFrozen="right">
                <template #body="data">
                  <div style="display:flex;gap:.5rem;">
                    <Button v-if="route.params.request_status != 'aprobadas'" @click="open(data.data)" style="height:1.8rem;width:2rem;" severity="info" class="p-1" icon="pi pi-eye" />
                    <Button v-if="route.params.request_status != 'aprobadas'" @click="copyToClipboard(data.data)" style="height:1.8rem;min-width:max-content;" label="Cop. Link" severity="help" class="py-1" icon="pi pi-copy" />
                    <!-- Ocultar archivar cuando la pestaña es 'archived' -->
                    <Button
                      v-if="route.params.request_status != 'aprobadas' && paymentTab==='pending'"
                      @click="confirmArchive(data.data)"
                      style="height:1.8rem;width:2rem;"
                      severity="danger"
                      class="p-1"
                      icon="pi pi-trash"
                    />
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
  
          <!-- SLIDE 2: REPORTES (se deja tal cual) -->
          <div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">
            <DataTable
              :paginator="true"
              :rows="15"
              style="width:100%"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Transferencias"
              :rowsPerPageOptions="[5, 10, 25, 100]"
              scrollable
              showGridlines
              stripedRows
              class="col-12 p-2"
              :value="transfers"
              tableStyle="min-width:50rem;"
              :filters="filters"
            >
              <template #header>
                <div class="grid p-3 mt-4" style="align-items:center;justify-content:start; display:flex;gap:1rem;">
                  <h4 class="px-2 m-0">
                    <i class="fa-regular fa-bars-progress"></i>
                    <b style="text-transform: uppercase;">Pedidos pendientes <b>{{ route.params.section }}</b></b>
                  </h4>
                  <Calendar v-model="date_range.start_date"></Calendar>
                  <calendar v-model="date_range.end_date"></calendar>
                  <MultiSelect style="max-width:30rem;" v-model="date_range.sites" optionLabel="site_name" :options="sites.filter(s => s.show_on_web)"></MultiSelect>
                  <Button severity="help" @click="update" label="Buscar" icon="pi pi-search"></Button>
                </div>
              </template>
  
              <Column class="py-1" style="text-transform: uppercase;" v-for="c in columnsd" :key="c" :header="c">
                <template #body="data">
                  <h6 class="m-0">{{ data.data[c] }}</h6>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </div>
  
      <DialogoPedido></DialogoPedido>
    </div>
  </template>
  
  <script setup>
  import { useToast } from 'primevue/usetoast';
  import { ref, onMounted, onBeforeMount, watch, computed } from 'vue'
  import { PathService } from '@/service/pathService.js'
  import { formatToColombianPeso } from '@/service/valoresReactivosCompartidos';
  import { FilterMatchMode } from 'primevue/api';
  import DialogoPedido from '../cocina/DialogoPedido.vue';
  import { useRoute } from 'vue-router'
  import { orderService } from '@/service/menu/orderService.js'
  import { loginStore } from '@/store/user.js'
  import { useOrderStore } from '../../../store/order';
  import { extraerHora } from '@/service/formating/formatDate.js'
  import { fetchService } from '../../../service/utils/fetchService';
  import { URI } from '../../../service/conection';
  import { formatoPesosColombianos } from '../callCenter/service/utils/formatoPesos';
  
  // IDs por región
  const USA_SITE_IDS    = [33,35,36];
  const COL_SITE_IDS    = [1,2,3,7,8,9,10,11,29,30];
  const DISTRI_SITE_IDS = [32];
  
  const visible = ref({ usa: true, colombia: true, distri: false });
  
  // NUEVO: pestaña actual de la barra de tareas
  const paymentTab = ref('pending'); // 'pending' | 'archived'
  
  // Datos (pendientes)
  const allTransferRequests = ref([])
  // Datos (archivados)
  const allArchivedRequests = ref([])
  
  // Filtro por país para pendientes
  const filteredTransferRequests = computed(() => {
    const allowed = new Set([
      ...(visible.value.usa ? USA_SITE_IDS : []),
      ...(visible.value.colombia ? COL_SITE_IDS : []),
      ...(visible.value.distri ? DISTRI_SITE_IDS : []),
    ])
    return allTransferRequests.value.filter(r => allowed.has(r.site_id))
  })
  
  // Filtro por país para archivados
  const filteredArchivedRequests = computed(() => {
    const allowed = new Set([
      ...(visible.value.usa ? USA_SITE_IDS : []),
      ...(visible.value.colombia ? COL_SITE_IDS : []),
      ...(visible.value.distri ? DISTRI_SITE_IDS : []),
    ])
    return allArchivedRequests.value.filter(r => allowed.has(r.site_id))
  })
  
  const sites = ref([])
  const dataColumns = ref([
    { columnName:'SEDE', columnValue:'sede', columnType:'other', size:'1rem', vif:true },
    { columnName:'ASESOR', columnValue:'current_status', columnType:'status', size:'15rem', vif:true },
  ])
  
  const date_range = ref({ start_date : new Date(), end_date: new Date(), sites:[] })
  const columnsd = ref([])
  const store = useOrderStore()
  
  const open = (order) => {
    store.setVisible('currentOrder',true)
    store.setOrder(order)
  }
  
  const authoize = async(order_id) => {
    const responsible_id = userStore.rawUserData.id
    await orderService.aproveOrder(order_id,responsible_id)
    aceptDialogVisible.value = false
    fetchTransferRequests();
  }
  
  const transfers = ref([])
  const loading = ref(false)
  
  onMounted(async () => {
    sites.value = await fetchService.get(`${URI}/sites/`)
  })
  
  const cancelDialogVisible = ref(false)
  const aceptDialogVisible  = ref(false)
  const userStore = loginStore()
  const cancelData = ref({})
  
  const modes = ref([
    { index:1, slide:0, name:'Basico' },
    { index:2, slide:-100, name:'reportes' }
  ])
  
  const selectedMode = ref({ index:1, slide:0, name:'Basico' })
  
  const orderStore = useOrderStore()
  const route = useRoute()
  
  const filters = ref()
  const initFilters = () => {
    filters.value = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } }
  }
  initFilters()
  
  // CARGA INICIAL
  onBeforeMount(() => { initFilters() })
  onMounted(() => { fetchTransferRequests() })
  
  watch(() => store.numberOders, () => { fetchTransferRequests() })
  
  watch(() => route.params.request_status, async () => {
    // mantenemos comportamiento previo
    TransferRequests.value = await requestMethods['revisar']()
  },{deep:true})
  
  const requestMethods = {
    revisar:    orderService.getPendientsCancellationRequest,
    aprobadas:  orderService.getaceptedCancellationAcepted,
    rechazadas: orderService.getPendientsCancellationRejected
  }
  const requestMethodsNoLoading = {
    revisar:    orderService.getPendientsCancellationRequestNoLoading,
    aprobadas:  orderService.getaceptedCancellationAceptedNoLoading,
    rechazadas: orderService.getPendientsCancellationRejectedNoLoading
  }
  const TransferRequests = ref([])
  
  const isActive = PathService.isActiveRoute
  const toast = useToast()
  
  async function copyToClipboard (data) {
    let texto = `https://salchimonster.com/pagar/${data.order_id}`
    if ([33,35,36].includes(data.site_id)) {
        texto = `https://usa.salchimonster.com/pagar/${data.order_id}`
    } 
    try {
      await navigator.clipboard.writeText(texto)
      toast.add({ severity:'success', summary:'¡Copiado!', detail:'El enlace se copió al portapapeles', life:2500 })
    } catch (err) {
      const temp = document.createElement('input')
      temp.value = texto
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      temp.remove()
      toast.add({ severity:'info', summary:'Copiado con método alternativo', detail:'Tu navegador no soporta la API moderna de portapapeles', life:3000 })
    }
  }
  
  const archiveDialogVisible = ref(false)
  const archiveData = ref({ order_id: null })
  
  const confirmArchive = (order) => {
    archiveData.value.order_id = order.order_id
    archiveDialogVisible.value = true
  }
  
  // Carga pendientes
  const fetchTransferRequests = async () => {
    loading.value = true
    try {
      allTransferRequests.value = await orderService.getOrdersPay()
    } finally {
      loading.value = false
    }
  }
  
  // NUEVO: cargar archivados
  const fetchArchivedRequests = async () => {
    loading.value = true
    try {
      allArchivedRequests.value = await fetchService.get(`${URI}/order-to-pay-archived`)
    } finally {
      loading.value = false
    }
  }
  
  // NUEVO: cambiar pestaña
  const switchTab = async (tab) => {
    if (paymentTab.value === tab) return
    paymentTab.value = tab
    if (tab === 'archived' && allArchivedRequests.value.length === 0) {
      await fetchArchivedRequests()
    }
    if (tab === 'pending' && allTransferRequests.value.length === 0) {
      await fetchTransferRequests()
    }
  }
  
  // Archivar con renderizado optimista
  const archive = async (order_id) => {
    archiveDialogVisible.value = false
    const prev = [...allTransferRequests.value]
    allTransferRequests.value = allTransferRequests.value.filter(o => o.order_id !== order_id)
    try {
      await fetchService.put(`${URI}/reject_order_pay/${order_id}`, { "responsible_id": userStore.rawUserData.id })
      toast.add({ severity:'success', summary:'Archivado', detail:`Pago de la orden ${order_id} archivado`, life:2500 })
      // si ya está cargada la lista de archivados, refrescar
      if (paymentTab.value === 'archived' || allArchivedRequests.value.length) {
        await fetchArchivedRequests()
      }
    } catch (e) {
      allTransferRequests.value = prev
      toast.add({ severity:'error', summary:'Error', detail:'No se pudo archivar el pago. Intenta de nuevo.', life:3500 })
    } finally {
      fetchTransferRequests()
    }
  }
  
  // Mantener helpers existentes
  const show = (id) => {
    aceptDialogVisible.value = true
    cancelData.value.order_id = id
  }
  const resolve = async(desition,id,observation) => {
    const data = {
      authorized: desition,
      responsible_id: userStore.rawUserData.id,
      responsible_observation: cancelData.value.reason || 'sin observaciones'
    }
    await orderService.resolveCancellationRequest(id, data)
    aceptDialogVisible.value = false
    cancelDialogVisible.value = false
    TransferRequests.value = await requestMethods['revisar']()
  }
  </script>
  
  <style scoped>
  ul{
    display:flex;
    justify-content:center;
    overflow-x:auto;
    gap:1rem;
  }
  @media (width < 600px) {
    ul{ justify-content:start; padding:.5rem 0; }
  }
  .nav-bar--item{ padding-bottom:.3rem; }
  .nav-bar{
    margin:auto;
    width:min-content;
    background-color:#fff;
    padding:0;
    position:sticky;
    top:3rem;
    width:100%;
    z-index:99;
  }
  li{ list-style:none; }
  .container{ margin-top:3rem; position:relative;min-width: 820px; }
  .slider-item{
    width:100%;
    min-width:100%;
    transition:all ease .5s;
  }
  .nav-var--item-button{
    color:gray;
    border-radius:0%;
    padding:.5rem;
    min-width:max-content;
  }
  .nav-var--item-button-selected{
    box-shadow:0 .3rem var(--primary-color);
    color:#000;
  }
  
  /* NUEVO: barra de tareas */
  .taskbar{
    display:flex;
    gap:.5rem;
    padding:.75rem 0 .6rem;
    position:sticky;
    top:3.5rem;
    background:#fff;
    z-index:90;
  }
  .task-btn{
    min-width:10rem;
    justify-content:center;
    color: black;
  }
  .task-btn--active{
    font-weight:700;
    background-color: black;
    color: white;
  }
  </style>
  