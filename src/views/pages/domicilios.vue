<template>
    <div class="col-12 p-3">
      <p class="text-4xl text-center px-4" style="font-weight: bold; margin-top: 6rem;">
        <i class="fa-solid fa-truck-arrow-right"></i>
        Domicilios
      </p>
  
      <!-- Barra de acciones -->
      <div class="actions-bar">
        <Button
          icon="pi pi-plus"
          label="Agregar barrio"
          @click="openAddNeighborhoodDialog"
          :disabled="loading"
        />
      </div>
  
      <!-- Diálogo: Agregar Nuevo Barrio -->
      <Dialog
        v-model:visible="showAddNeighborhoodDialog"
        header="Agregar Nuevo Barrio"
        :modal="true"
        :closable="false"
        style="width: 32rem; max-width: 95vw;"
      >
        <div class="p-fluid form-grid">
          <div class="p-field">
            <label for="name">Nombre del Barrio</label>
            <InputText id="name" v-model.trim="newNeighborhood.name" :invalid="submitted && !newNeighborhood.name" />
            <small v-if="submitted && !newNeighborhood.name" class="p-error">Requerido</small>
          </div>
  
          <div class="p-field">
            <label for="delivery_price">Precio de Domicilio</label>
            <InputNumber
              id="delivery_price"
              v-model="newNeighborhood.delivery_price"
              mode="currency"
              currency="COP"
              locale="es-CO"
              :min="0"
              :invalid="submitted && !Number.isFinite(newNeighborhood.delivery_price)"
              :maxFractionDigits="0"
            />
            <small v-if="submitted && !Number.isFinite(newNeighborhood.delivery_price)" class="p-error">Requerido</small>
          </div>
  
          <div class="p-field">
            <label for="site">Sede</label>
            <Dropdown
              id="site"
              v-model="newNeighborhood.site_id"
              :options="sites.filter(s => s.show_on_web)"
              optionLabel="site_name"
              optionValue="site_id"
              placeholder="Selecciona una Sede"
              showClear
              filter
              :invalid="submitted && !newNeighborhood.site_id"
            />
            <small v-if="submitted && !newNeighborhood.site_id" class="p-error">Requerido</small>
          </div>
  
          <div class="p-field">
            <label for="city">Ciudad</label>
            <Dropdown
              id="city"
              v-model="newNeighborhood.city_id"
              :options="cities"
              optionLabel="name"
              optionValue="city_id"
              placeholder="Selecciona una Ciudad"
              showClear
              filter
              :invalid="submitted && !newNeighborhood.city_id"
            />
            <small v-if="submitted && !newNeighborhood.city_id" class="p-error">Requerido</small>
          </div>
        </div>
  
        <template #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="closeAddNeighborhoodDialog" />
          <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="addNeighborhood" :loading="saving" />
        </template>
      </Dialog>
  
      <div style="max-width: 700px;" class="m-auto">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <!-- Selector de sede -->
          <Skeleton v-if="loading" height="3rem" width="100%"></Skeleton>
          <Dropdown
            v-else
            style="width: 100%;"
            filter
            showClear
            v-model="site"
            :options="sites.filter(n => n.show_on_web)"
            placeholder="SEDE"
            optionLabel="site_name"
            :virtualScrollerOptions="{ itemSize: 38 }"
          />
        </div>
  
        <!-- Estados de error / vacío -->
        <div v-if="error" class="error-box">
          <i class="pi pi-exclamation-triangle"></i>
          <span>{{ error }}</span>
        </div>
  
        <!-- Contenido anidado -->
        <RouterView />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useToast } from 'primevue/usetoast'
  import { URI } from '@/service/conection'
  import router from '../../router'
  import { useRoute } from 'vue-router'
  
  const toast = useToast()
  const route = useRoute()
  
  const sites = ref([])
  const cities = ref([])
  const site = ref(null)
  
  const loading = ref(true)
  const saving = ref(false)
  const error = ref('')
  
  // Diálogo Agregar Barrio
  const showAddNeighborhoodDialog = ref(false)
  const submitted = ref(false)
  const newNeighborhood = ref({
    neighborhood_id: 0,
    name: '',
    delivery_price: null,
    site_id: null,
    city_id: null
  })
  
  function resetNeighborhoodForm() {
    submitted.value = false
    newNeighborhood.value = {
      neighborhood_id: 0,
      name: '',
      delivery_price: null,
      site_id: null,
      city_id: null
    }
  }
  
  function openAddNeighborhoodDialog() {
    resetNeighborhoodForm()
    showAddNeighborhoodDialog.value = true
  }
  function closeAddNeighborhoodDialog() {
    showAddNeighborhoodDialog.value = false
  }
  
  async function addNeighborhood() {
    submitted.value = true
    if (
      !newNeighborhood.value.name ||
      !Number.isFinite(newNeighborhood.value.delivery_price) ||
      !newNeighborhood.value.site_id ||
      !newNeighborhood.value.city_id
    ) {
      toast.add({ severity: 'warn', summary: 'Faltan datos', detail: 'Completa los campos requeridos.', life: 3000 })
      return
    }
  
    try {
      saving.value = true
      const response = await fetch(`${URI}/neighborhoods`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNeighborhood.value)
      })
      if (!response.ok) throw new Error('Error al crear el barrio')
  
      toast.add({ severity: 'success', summary: 'Guardado', detail: 'Barrio agregado con éxito.', life: 2500 })
      closeAddNeighborhoodDialog()
      // TODO: refrescar lista local si esta vista la usa
    } catch (e) {
      console.error(e)
      toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo guardar el barrio.', life: 3500 })
    } finally {
      saving.value = false
    }
  }
  
  // Data fetching
  const getSites = async () => {
    const res = await fetch(`${URI}/sites`)
    if (!res.ok) throw new Error('No se pudieron cargar las sedes')
    return await res.json()
  }
  const getCities = async () => {
    const res = await fetch(`${URI}/cities`)
    if (!res.ok) throw new Error('No se pudieron cargar las ciudades')
    return await res.json()
  }
  
  function selectSiteById(id) {
    const s = sites.value.find(x => String(x.site_id) === String(id))
    site.value = s || null
  }
  
  // Sincroniza la ruta cuando cambia la sede seleccionada
  watch(site, (newVal) => {
    if (newVal && newVal.site_id != null) {
      const target = `/domicilios/${newVal.site_id}`
      if (route.path !== target) {
        router.push(target)
      }
    }
  })
  
  // Cuando cambia el parámetro de la ruta, ajusta el dropdown
  watch(
    () => route.params.site_id,
    (siteId) => {
      if (!loading.value) {
        selectSiteById(siteId)
      }
    }
  )
  
  onMounted(async () => {
    loading.value = true
    error.value = ''
    try {
      const [sitesData, citiesData] = await Promise.all([getSites(), getCities().catch(() => [])])
      sites.value = Array.isArray(sitesData) ? sitesData : []
      cities.value = Array.isArray(citiesData) ? citiesData : []
  
      // Selección inicial: usar el parámetro de ruta o la primera sede visible
      const routeSiteId = route.params.site_id
      if (routeSiteId) {
        selectSiteById(routeSiteId)
      } else {
        const firstVisible = sites.value.find(s => s.show_on_web)
        if (firstVisible) {
          site.value = firstVisible
          router.replace(`/domicilios/${firstVisible.site_id}`)
        }
      }
    } catch (e) {
      console.error(e)
      error.value = 'Hubo un problema cargando la información. Intenta de nuevo.'
    } finally {
      loading.value = false
    }
  })
  </script>
  
  <style scoped>
  /* Botones coherentes y con texto capitalizado */
  Button { font-weight: bold; text-transform: capitalize; }
  
  /* Barra de acciones */
  .actions-bar {
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    max-width: 700px;
    margin: 0 auto 1rem auto;
  }
  
  /* Caja de error */
  .error-box {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin: 1rem 0;
    padding: .75rem 1rem;
    border-radius: .5rem;
    background: #fee2e2;
    color: #991b1b;
  }
  
  /* Grid del formulario del diálogo */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: .75rem;
  }
  
  /* Estados (conservados por si los usas en la vista anidada) */
  .vacaciones, .licencia, .general, .generado, .aprobado, .rechazado {
    display: flex;
    justify-content: center;
  }
  .vacaciones, .licencia, .general { background-color: #64748B; }
  .generado  { background-color: #eeff0060; }
  .aprobado  { background-color: #2bff0060; }
  .rechazado { background-color: #ff000044; }
  
  /* Etiquetas de estado específicas */
  .Agendada  { background-color: var(--yellow-200); border-radius: 5rem; }
  .Completada{ background-color: var(--green-200);  border-radius: 5rem; }
  .Cancelada { background-color: var(--red-200);    border-radius: 5rem; }
  
  /* --- IMPORTANTE: evitamos romper dropdowns/dialogs --- */
  /* Quitamos el overflow global que cortaba contenidos */
  :where(.nope) { /* placeholder para recordar que evitamos * { overflow: hidden } */ }
  
  /* Tipografía y ajustes */
  * { overflow-wrap: break-word; white-space: normal; }
  </style>
  