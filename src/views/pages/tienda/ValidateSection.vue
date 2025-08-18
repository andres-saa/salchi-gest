<template>
    <div class="container" style="margin-top: 7rem;">
      <p class="text-4xl text-center px-4" style="font-weight: bold; margin-top: 6rem;">
        <i class="fa-solid fa-truck-arrow-right"></i>
        Pedidos pendidentes
      </p>
  
      <!-- Dialog: Rechazar orden (con observación) -->
      <Dialog v-model:visible="cancelDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Rechazar orden</b></h3>
        </template>
  
        <form @submit.prevent="resolve(false,cancelData.id,cancelData.reason)"
              style="display: flex; gap: 1rem; flex-direction: column; align-items: start">
          <Textarea
            style="resize: none; text-transform: lowercase; width:100%"
            id="reason"
            v-model="cancelData.reason"
            rows="5"
            placeholder="Porque desea rechazar esta solicitud?"
          />
          <Button style="width: 100%; border-radius: 0.5rem" label="Rechazar" type="submit" class="p-button-danger" />
        </form>
      </Dialog>
  
      <!-- Dialog: Aprobar orden -->
      <Dialog v-model:visible="aceptDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Aprobar esta orden</b></h3>
        </template>
  
        <form @submit.prevent="authoize(cancelData.order_id)"
              style="display: flex; gap: 1rem; flex-direction: column; align-items: start">
          <Button style="width: 100%; border-radius: 0.5rem"
                  label="Aprobar (usuario contactado)"
                  type="submit"
                  class="p-button-success" />
        </form>
      </Dialog>
  
      <!-- Dialog: Archivar pedido (cliente no confirma) -->
      <Dialog v-model:visible="archiveDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
        <template #header>
          <h3><b>Archivar pedido</b></h3>
        </template>
  
        <form @submit.prevent="archive(archiveData.order_id)"
              style="display: flex; gap: 1rem; flex-direction: column;">
          <p>
            ¿Seguro que deseas archivar el pedido
            <b>{{ archiveData.order_id }}</b>?
            Esta acción no intentará cobrar al cliente.
          </p>
          <div style="display: flex; gap: .5rem;">
            <Button type="button" label="Cancelar" class="w-full p-button-secondary" @click="archiveDialogVisible=false" />
            <Button type="submit" label="Archivar pedido" class="w-full p-button-danger" />
          </div>
        </form>
      </Dialog>
  
      <div style="max-width: 1280px;" class="mx-auto">
        <!-- Barra de tareas (tabs) -->
        <div class="nav-bar">
          <ul>
            <li>
              <Button
                class="nav-var--item-button"
                :class="selectedMode.index === 1 ? 'nav-var--item-button-selected' : ''"
                @click="selectTab(1)"
                label="Pendientes"
              />
            </li>
            <li>
              <Button
                class="nav-var--item-button"
                :class="selectedMode.index === 2 ? 'nav-var--item-button-selected' : ''"
                @click="selectTab(2)"
                label="Rechazadas"
              />
            </li>
          </ul>
        </div>
  
        <!-- Slider -->
        <div class="slider mx-auto" style="display: flex; overflow: hidden">
          <!-- TAB 1: Pendientes -->
          <div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">
            <DataTable
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
              :value="TransferRequests"
              tableStyle="min-width: 50rem;"
            >
              <template #header>
                <div class="grid" style="align-items: center; justify-content: space-between;">
                  <div class="col-12 md:col-6 p-3">
                    <span class="text-xl" style="width: 100%;">
                      Pedidos pendientes de validación
                    </span>
                  </div>
  
                  <span class="md:mt-0 p-input-icon-right m-3">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Buscar Solicitud..." />
                  </span>
                </div>
              </template>
  
              <Column class="py-1" field="order_id" header="ID orden" frozen />
              <Column class="py-1" field="total_order_price" header="Monto de la orden">
                <template #body="data">
                  {{ formatToColombianPeso(data.data.total_order_price) }}
                </template>
              </Column>
  
              <Column class="py-1" field="Hora" header="Hora">
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
              <Column class="py-1" field="user_phone" header="Teléfono cliente" />
              <Column style="max-width: 10rem;" class="py-1" field="order_notes" header="Notas" />
  
              <Column class="py-1 px-0" field="date" header="Action" frozen alignFrozen="right">
                <template #body="data">
                  <div style="display: flex; gap: 0.5rem;">
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="open(data.data)"
                      style="height: 1.8rem; width: 2rem;"
                      severity="info"
                      class="p-1"
                      icon="pi pi-eye"
                    />
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="show(data.data.order_id)"
                      style="height: 1.8rem; width: 2rem;"
                      severity="success"
                      class="p-1"
                      icon="pi pi-check"
                    />
                    <!-- CAMBIO: Archivar pedido (trash + danger) -->
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="showArchive(data.data.order_id)"
                      style="height: 1.8rem; width: 2rem;"
                      severity="danger"
                      class="p-1"
                      icon="pi pi-trash"
                    />
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
  
          <!-- TAB 2: Rechazadas (cliente no confirma) - mismas columnas que Pendientes -->
          <div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">
            <DataTable
              :paginator="true"
              :rows="15"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
              :rowsPerPageOptions="[5, 10, 25, 100]"
              scrollable
              showGridlines
              stripedRows
              class="col-12 p-2"
              :value="rejected"
              tableStyle="min-width: 50rem;"
              :filters="filters"
            >
              <template #header>
                <div class="grid p-3 mt-4" style="align-items:center; justify-content: space-between; display: flex; gap: 1rem;">
                  <h4 class="px-2 m-0">
                    <i class="fa-regular fa-circle-xmark"></i>
                    <b>Pedidos rechazados (cliente no confirma)</b>
                  </h4>
  
                  <span class="p-input-icon-right m-3">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Buscar..." />
                  </span>
                </div>
              </template>
  
              <!-- Mismas columnas que la tabla de Pendientes (sin columna de acciones) -->
              <Column class="py-1" field="order_id" header="ID orden" frozen />
              <Column class="py-1" field="total_order_price" header="Monto de la orden">
                <template #body="data">
                  {{ formatToColombianPeso(data.data.total_order_price) }}
                </template>
              </Column>
  
              <Column class="py-1" field="Hora" header="Hora">
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
              <Column class="py-1" field="user_phone" header="Teléfono cliente" />
              <Column style="max-width: 10rem;" class="py-1" field="order_notes" header="Notas" />
              <Column class="py-1 px-0" field="date" header="Action" frozen alignFrozen="right">
                <template #body="data">
                  <div style="display: flex; gap: 0.5rem;">
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="open(data.data)"
                      style="height: 1.8rem; width: 2rem;"
                      severity="info"
                      class="p-1"
                      icon="pi pi-eye"
                    />
                    <Button
                      v-if="route.params.request_status != 'aprobadas'"
                      @click="show(data.data.order_id)"
                      style="height: 1.8rem; width: 2rem;"
                      severity="success"
                      class="p-1"
                      icon="pi pi-check"
                    />
                    <!-- CAMBIO: Archivar pedido (trash + danger) -->
                    
                  </div>
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
  import { ref, onMounted, onBeforeMount, watch } from 'vue'
  import { FilterMatchMode } from 'primevue/api'
  import DialogoPedido from '../cocina/DialogoPedido.vue'
  import { useRoute } from 'vue-router'
  import { orderService } from '@/service/menu/orderService.js'
  import { loginStore } from '@/store/user.js'
  import { useOrderStore } from '../../../store/order'
  import { formatToColombianPeso } from '@/service/valoresReactivosCompartidos'
  import { extraerHora } from '@/service/formating/formatDate.js'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI } from '../../../service/conection'
  import { PathService } from '@/service/pathService.js'
  
  // -------------------- Stores y estado base --------------------
  const route = useRoute()
  const userStore = loginStore()
  const store = useOrderStore()
  
  const cancelDialogVisible = ref(false)
  const aceptDialogVisible = ref(false)
  
  const TransferRequests = ref([]) // Pendientes
  const rejected = ref([])         // Rechazadas (cliente no confirma)
  
  // Archivar pedido
  const archiveDialogVisible = ref(false)
  const archiveData = ref({ order_id: null })
  
  // Filtros DataTable
  const filters = ref()
  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    }
  }
  initFilters()
  
  // -------------------- Tabs (barra de tareas) --------------------
  const modes = ref([
    { index: 1, slide: 0, name: 'pendientes' },
    { index: 2, slide: -100, name: 'rechazadas' }
  ])
  const selectedMode = ref(modes.value[0])
  
  const selectTab = async (index) => {
    const mode = modes.value.find(m => m.index === index)
    if (!mode) return
    selectedMode.value = mode
    if (index === 2) {
      await fetchRejected()
    } else {
      await fetchTransferRequests()
    }
  }
  
  // -------------------- Acciones UI --------------------
  const open = (order) => {
    store.setVisible('currentOrder', true)
    store.setOrder(order)
  }
  
  const show = (id) => {
    aceptDialogVisible.value = true
    cancelData.value.order_id = id
  }
  
  const showArchive = (order_id) => {
    archiveData.value.order_id = order_id
    archiveDialogVisible.value = true
  }
  
  // -------------------- Llamados API --------------------
  const authoize = async (order_id) => {
    const responsible_id = userStore.rawUserData.id
    await orderService.aproveOrder(order_id, responsible_id)
    aceptDialogVisible.value = false
    await fetchTransferRequests()
  }
  
  const archive = async (order_id) => {
    try {
      // Si tu backend espera el id en la URL, usa:
      // await fetchService.put(`${URI}/reject_order_cliente_no_confirma/${order_id}`, {})
      await fetchService.put(`${URI}/reject_order_cliente_no_confirma/`, { order_id })
      archiveDialogVisible.value = false
      await fetchTransferRequests()
      await fetchRejected()
    } catch (e) {
      console.error('Error archivando pedido:', e)
    }
  }
  
  const fetchTransferRequests = async () => {
    TransferRequests.value = await orderService.getOrdersValidate()
  }
  
  const fetchRejected = async () => {
    try {
      const data = await fetchService.get(`${URI}/order-to-transfer-no-confirmed`)
      rejected.value = data || []
    } catch (e) {
      console.error('Error cargando rechazadas:', e)
    }
  }
  
  // -------------------- Cancelación con observación (si aplica en tu UI) --------------------
  const cancelData = ref({})
  
  const resolve = async (desition, id, observation) => {
    const data = {
      authorized: desition,
      responsible_id: userStore.rawUserData.id,
      responsible_observation: cancelData.value.reason || 'sin observaciones'
    }
    await orderService.resolveCancellationRequest(id, data)
    aceptDialogVisible.value = false
    cancelDialogVisible.value = false
    await fetchTransferRequests()
  }
  
  // -------------------- Watchers --------------------
  onBeforeMount(() => {
    initFilters()
  })
  
  watch(() => store.numberOders, async () => {
    await fetchTransferRequests()
  })
  
  // Si en tu ruta cambias de sección por params
  watch(() => route.params.request_status, async () => {
    await fetchTransferRequests()
  }, { deep: true })
  
  // -------------------- Montaje --------------------
  onMounted(async () => {
    await fetchTransferRequests()
    await fetchRejected()
  })
  
  // Utilidad si la usas en la plantilla
  const isActive = PathService.isActiveRoute
  </script>
  
  <style scoped>
  ul {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 1rem;
  }
  
  @media (width < 600px) {
    ul {
      justify-content: start;
      padding: 0.5rem 0;
    }
  }
  
  .nav-bar--item {
    padding-bottom: 0.3rem;
  }
  
  .nav-bar {
    margin: auto;
    width: min-content;
    background-color: rgb(255, 255, 255);
    padding: 0;
    position: sticky;
    top: 3rem;
    width: 100%;
    z-index: 99;
  }
  
  li {
    list-style: none;
  }
  
  .container {
    margin-top: 3rem;
    position: relative;
  }
  
  .slider-item {
    width: 100%;
    min-width: 100%;
    transition: all ease .5s;
  }
  
  .nav-var--item-button {
    color: gray;
    border-radius: .3rem;
    padding: 0.5rem;
    min-width: max-content;
  }
  
  .nav-var--item-button-selected {
    /* box-shadow: 0 0.3rem var(--primary-color); */
    color: rgb(255, 255, 255);
    background-color: black;
  }
  </style>
  