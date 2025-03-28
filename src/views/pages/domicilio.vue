<template>
    <!-- Diálogo de confirmación de eliminación -->
    <div class="dialog-container">
      <Dialog
        v-model:visible="showDialog"
        header="Confirmar eliminación"
        :modal="true"
        :closable="false"
        class="confirm-delete-dialog"
      >
        <p>¿Estás seguro de que quieres eliminar este barrio?</p>
        <Button
          label="Cancelar"
          @click="showDialog = false"
          class="p-button-text"
        />
        <Button
          label="Eliminar"
          @click="deleteNeighborhood"
          class="p-button-danger"
        />
      </Dialog>
    </div>
  
    <!-- Diálogo para crear nuevo barrio -->
    <div class="dialog-container">
      <Dialog
        v-model:visible="showCreateDialog"
        header="Crear Nuevo Barrio"
        :modal="true"
        :closable="false"
        class="create-neighborhood-dialog"
      >
        <div class="dropdowns-wrapper">
          <Dropdown
            v-model="newNeighborhoodCity"
            :options="cities"
            optionLabel="city_name"
            placeholder="Ciudad"
            class="dropdown-field"
          />
          <Dropdown
            v-model="newNeighborhoodSite"
            :options="sites?.filter(site => site.show_on_web)"
            optionLabel="site_name"
            placeholder="Sede"
            class="dropdown-field"
          />
        </div>
  
        <Divider>Nuevos barrios</Divider>
  
        <div
          v-for="(barrio, index) in barriosToAdd"
          :key="index"
          class="barrio-to-add-item"
        >
          <div class="barrio-fields">
            <InputText
              v-model="barrio.name"
              placeholder="Nombre del Barrio"
              class="barrio-name-input"
            />
            <InputNumber
              prefix="$"
              v-model="barrio.delivery_price"
              placeholder="Precio del Domicilio"
              class="barrio-delivery-input"
            />
            <Button
              icon="pi pi-trash"
              text
              class="delete-barrio-button"
              size="small"
              severity="danger"
              @click="removeBarrio(index)"
            />
          </div>
        </div>
  
        <div class="add-barrio-button-wrapper">
          <Button
            text
            class="add-barrio-button"
            @click="() => { barriosToAdd.push({}) }"
          >
            <i :class="PrimeIcons.PLUS_CIRCLE"></i>
          </Button>
        </div>
  
        <template #footer>
          <Button
            severity="danger"
            label="Cancelar"
            @click="showCreateDialog = false"
            class="p-button-text"
          />
          <Button
            severity="help"
            label="Crear"
            @click="createNeighborhood"
            class="p-button"
          />
        </template>
      </Dialog>
    </div>
  
    <!-- Diálogo para descargar informe de barrios -->
    <div class="dialog-container">
      <Dialog
        header="Descargar informe de barrios"
        class="download-dialog"
        modal
        v-model:visible="visibleDownloadDialog"
      >
        <div class="download-dialog-content">
          <label for="sedes"><strong>Selecciona las sedes</strong></label>
  
          <MultiSelect
            id="sedes"
            v-model="selectedSites"
            filter
            filterPlaceholder="Busca una sede..."
            :options="sites.filter(s => s.show_on_web)"
            optionLabel="site_name"
            class="multiselect-field"
          >
          </MultiSelect>
  
          <div class="selected-sites-list">
            <div
              v-for="sede in selectedSites"
              :key="sede?.site_id"
              class="selected-site-item"
            >
              <img
                :src="`${URI}/read-product-image/96/site-${sede?.site_id}`"
                alt="Imagen sede"
                class="site-image"
              />
              <strong>{{ sede.site_name }}</strong>
            </div>
          </div>
        </div>
  
        <!-- Botón para descargar el reporte -->
        <template #footer>
          <Button
            icon="pi pi-download"
            severity="help"
            label="Descargar Informe"
            @click="downloadReport"
          />
        </template>
      </Dialog>
    </div>
  
    <!-- Diálogo para subir (actualizar) informe de barrios -->
    <div class="dialog-container">
      <Dialog
        v-model:visible="visibleUploadDialog"
        header="Subir Informe de Barrios"
        class="upload-dialog"
        :modal="true"
        :closable="false"
      >
        <p class="upload-instructions">
          Selecciona el archivo Excel con la información de barrios que deseas
          actualizar.
        </p>
        <input
          type="file"
          accept=".xlsx, .xls"
          @change="onFileSelect"
          class="file-input"
        />
        <template #footer>
          <Button
            label="Cancelar"
            class="p-button-text"
            @click="closeUploadDialog"
          />
          <Button
            label="Subir"
            class="p-button-help"
            @click="uploadReport"
          />
        </template>
      </Dialog>
    </div>
  
    <!-- Contenedor principal de la tabla de barrios -->
    <div class="neighborhoods-container">
      <div class="actions-bar">
        <Button
          raised
          severity="help"
          size="small"
          label="Nuevo Barrio"
          @click="showCreateDialog = true"
        ></Button>
  
        <Button
          raised
          icon="pi pi-download"
          severity="danger"
          size="small"
          label="Descargar informe"
          class="ml"
          @click="visibleDownloadDialog = true"
        ></Button>
  
        <Button
          raised
          icon="pi pi-upload"
          severity="warning"
          size="small"
          label="Subir informe"
          class="ml"
          @click="visibleUploadDialog = true"
        ></Button>
      </div>
  
      <DataTable
        :class="neighborhoods.length > 0 ? 'apear' : 'hide'"
        stripedRows
        ref="dt"
        :value="neighborhoods"
        v-model:selection="selectedneighborhoods"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25, 100]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} barrios"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="table-header">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Buscar..."
              />
            </span>
          </div>
        </template>
  
        <Column
          field="name"
          header="Barrio"
          :sortable="true"
          class="barrio-column py-1 px-1"
        >
          <template #body="neighborhood">
            <InputText
              :onchange="() => update(neighborhood.data)"
              v-model="neighborhood.data.name"
              class="table-input"
            />
          </template>
        </Column>
  
        <Column
          field="delivery_price"
          header="Precio del domicilio"
          :sortable="true"
          class="delivery-price-column py-1 px-1"
        >
          <template #body="neighborhood">
            <InputNumber :inputStyle="{border:0, outline:0,borderRadius:0}"
              prefix="$"
              v-model="neighborhood.data.delivery_price"
              @update:modelValue="() => update(neighborhood.data)"
              class="table-input-number"
            />
          </template>
        </Column>
  
        <Column
          field="actions"
          header="Eliminar"
          class="actions-column  py-1"
        >
          <template #body="data">
            <Button
              class="p-button-rounded p-button-danger delete-button"
              @click="confirmDelete(data.data)"
            >
              <i :class="PrimeIcons.TRASH"></i>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script setup>
  /* --- Imports & Setup --- */
  import { ref, onMounted, onBeforeMount, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useToast } from 'primevue/usetoast';
  import { FilterMatchMode, PrimeIcons } from 'primevue/api';
  
  import { URI } from '@/service/conection';
  import { useReportesStore } from '@/store/reportes.js';
  import { getSites } from '@/service/dropDownAux';
  
  /* --- Store & Refs --- */
  const store = useReportesStore();
  const toast = useToast();
  const route = useRoute();
  
  /* --- Dialog visibility states --- */
  const showDialog = ref(false);          // Confirm Delete
  const showCreateDialog = ref(false);    // Create Neighborhood
  const visibleDownloadDialog = ref(false);  // Download Report
  const visibleUploadDialog = ref(false);    // Upload (Update) Report
  
  /* --- Neighborhood creation --- */
  const newNeighborhoodCity = ref(0);
  const newNeighborhoodSite = ref(0);
  const barriosToAdd = ref([{}]);
  
  /* --- File Upload --- */
  const fileToUpload = ref(null);
  
  /* --- Lists & Data --- */
  const cities = ref([]);
  const sites = ref([]);
  const neighborhoods = ref([]);
  const filters = ref(null);
  
  /* --- Selected data --- */
  const selectedneighborhoods = ref([]);
  const neighborhoodToDelete = ref({});
  const selectedSites = ref([]);
  
  /* --- Other states --- */
  const guardando = ref(false);
  const visibleLoading = ref(false);
  const sending = ref(false);
  const incluirLink = ref(false);
  const allUsers = ref(false);
  const groupedUsersBySite = ref([]);
  const groupedUsersByPosition = ref([]);
  const neighborhood = ref({});
  const charging = ref(true);
  const usersSelected = ref([]);
  
  /* --- Lifecycle --- */
  onBeforeMount(() => {
    store.setLoading(false);
    initFilters();
    // Cargamos las sedes generales
    getSites().then((data) => (sites.value = data));
  });
  
  onMounted(async () => {
    // Cargamos ciudades
    const data = await getCities();
    if (data) {
      cities.value = data;
    }
    // Cargamos barrios
    const nData = await getNeighborhoods();
    if (nData) {
      neighborhoods.value = nData;
    }
    // Cargamos posibles usuarios agrupados (si se necesitan)
    await fetchGroupedUsersBySite();
    await fetchGroupedUsersByPosition();
  });
  
  /* --- Watchers --- */
  watch(newNeighborhoodCity, async (nuevo, viejo) => {
    if (nuevo !== viejo) {
      const s = await getSitesByCity();
      if (s) {
        sites.value = s;
        newNeighborhoodSite.value = sites.value[0];
      }
    }
  });
  
  watch(showCreateDialog, (nuevo) => {
    if (nuevo) {
      newNeighborhoodCity.value = {};
      barriosToAdd.value = [{}];
    }
  });
  
  watch(
    () => route.path,
    () => {
      getNeighborhoods().then((data) => {
        neighborhoods.value = data;
      });
    }
  );
  
  /* --- Methods --- */
  
  /**
   * Inicializa los filtros para la DataTable
   */
  function initFilters() {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
  }
  
  /**
   * Obtiene la lista de ciudades.
   */
  async function getCities() {
    try {
      const response = await fetch(`${URI}/cities`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  }
  
  /**
   * Obtiene la lista de barrios por sitio (según la ruta actual).
   */
  async function getNeighborhoods() {
    const site_id = route.params.site_id;
    try {
      store.setLoading(true, 'cargando barrios');
      const response = await fetch(`${URI}/neighborhoods/by-site/${site_id}`);
      if (!response.ok) {
        store.setLoading(false, 'cargando barrios');
      }
      if (response.ok) {
        const data = await response.json();
        store.setLoading(false, 'cargando barrios');
        return data;
      }
    } catch (error) {
      store.setLoading(false, 'cargando barrios');
      console.error('Error fetching neighborhoods:', error);
    }
  }
  
  /**
   * Obtiene las sedes disponibles en una ciudad.
   */
  async function getSitesByCity() {
    if (!newNeighborhoodCity.value?.city_id) {
      return;
    }
    const city_id = newNeighborhoodCity.value.city_id;
    try {
      store.setLoading(true, 'cargando barrios');
      const response = await fetch(`${URI}/sites/city/${city_id}`);
      if (response.ok) {
        const data = await response.json();
        store.setLoading(false, 'cargando barrios');
        return data;
      }
    } catch (error) {
      store.setLoading(false, 'cargando barrios');
      console.error('Error fetching sites by city:', error);
    }
  }
  
  /**
   * Crea (envía) nuevos barrios al servidor
   */
  async function createNeighborhood() {
    showCreateDialog.value = false;
    store.setLoading(true, 'guardando barrios');
    try {
      await Promise.all(
        barriosToAdd.value.map(async (barrio) => {
          barrio.site_id = newNeighborhoodSite.value.site_id;
          barrio.city_id = newNeighborhoodCity.value.city_id;
  
          const response = await fetch(`${URI}/neighborhood`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(barrio),
          });
  
          if (!response.ok) {
            throw new Error(`Error creando el barrio: ${barrio.name}`);
          }
        })
      );
  
      toast.add({
        severity: 'success',
        summary: 'Creado',
        detail: 'Barrios creados con éxito',
        life: 3000,
      });
      barriosToAdd.value = [{}];
  
      // Refrescamos la lista de barrios
      const barrios = await getNeighborhoods();
      neighborhoods.value = barrios;
    } catch (error) {
      console.error('Request error:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo crear alguno de los barrios',
        life: 3000,
      });
    } finally {
      store.setLoading(false, 'guardando barrios');
    }
  }
  
  /**
   * Actualiza la información de un barrio existente
   */
  async function update(neighborhood) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(neighborhood),
    };
  
    try {
      const response = await fetch(
        `${URI}/neighborhood/${neighborhood.neighborhood_id}`,
        options
      );
      if (!response.ok) {
        throw new Error('La petición ha fallado');
      }
      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  }
  
  /**
   * Elimina un barrio seleccionado
   */
  async function deleteNeighborhood() {
    const options = {
      method: 'DELETE',
    };
  
    try {
      const response = await fetch(
        `${URI}/neighborhood/${neighborhoodToDelete.value.neighborhood_id}`,
        options
      );
      if (!response.ok) {
        throw new Error('Error al eliminar el barrio');
      }
      await getNeighborhoods().then((data) => (neighborhoods.value = data));
      showDialog.value = false;
      toast.add({
        severity: 'success',
        summary: 'Eliminado',
        detail: 'Barrio eliminado con éxito',
        life: 3000,
      });
    } catch (error) {
      console.error('Error en la petición:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo eliminar el barrio',
        life: 3000,
      });
    }
  }
  
  /**
   * Confirma la eliminación de un barrio
   */
  function confirmDelete(neighborhood) {
    neighborhoodToDelete.value = neighborhood;
    showDialog.value = true;
  }
  
  /**
   * Elimina un barrio de la lista temporal de creación
   */
  function removeBarrio(index) {
    if (barriosToAdd.value.length > 1) {
      barriosToAdd.value.splice(index, 1);
    }
  }
  
  /**
   * Descarga un archivo Excel con barrios, según sedes seleccionadas
   */
  async function downloadReport() {
    store.setLoading(true, 'descargando informe');
    try {
      const siteIds = selectedSites.value.map((s) => s.site_id);
      const response = await fetch(`${URI}/get-neigborhoods-report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ site_ids: siteIds }),
      });
  
      if (!response.ok) {
        throw new Error('Error al descargar el informe');
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'barrios_informe.xlsx';
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  
      toast.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Informe descargado con éxito',
        life: 3000,
      });
    } catch (error) {
      console.error('Error al descargar el informe:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo descargar el informe',
        life: 3000,
      });
    } finally {
      store.setLoading(false, 'descargando informe');
    }
  }
  
  /* ------------------------ */
  /*   SECCIÓN: SUBIR EXCEL   */
  /* ------------------------ */
  
  /**
   * Evento que se lanza al seleccionar un archivo en el input.
   */
  function onFileSelect(event) {
    fileToUpload.value = event.target.files[0] || null;
  }
  
  /**
   * Cierra el diálogo de subida
   */
  function closeUploadDialog() {
    visibleUploadDialog.value = false;
    fileToUpload.value = null;
  }
  
  /**
   * Envía el Excel a /update-neigborhoods para actualizar la data
   */
  async function uploadReport() {
    if (!fileToUpload.value) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se ha seleccionado ningún archivo',
        life: 3000,
      });
      return;
    }
  
    store.setLoading(true, 'subiendo informe');
    try {
      const formData = new FormData();
      formData.append('file', fileToUpload.value);
  
      const response = await fetch(`${URI}/update-neigborhoods`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al subir el informe');
      }
  
      toast.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Informe subido con éxito',
        life: 3000,
      });
      visibleUploadDialog.value = false;
      fileToUpload.value = null;
  
      // Refrescar la lista de barrios si es necesario
      const updatedNeighborhoods = await getNeighborhoods();
      if (updatedNeighborhoods) {
        neighborhoods.value = updatedNeighborhoods;
      }
    } catch (error) {
      console.error('Error subiendo informe:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo subir el informe',
        life: 3000,
      });
    } finally {
      store.setLoading(false, 'subiendo informe');
    }
  }
  
  /* --- Ejemplo: agrupación de usuarios por sedes/posición, si se requiere --- */
  async function fetchGroupedUsersBySite() {
    try {
      const response = await fetch(`${URI}/employers/grouped-by-site`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      data = data.map((group) => {
        const groupedByPosition = group.employers.reduce((acc, curr) => {
          acc[curr.position] = acc[curr.position] || [];
          acc[curr.position].push(curr);
          return acc;
        }, {});
        return { ...group, positions: groupedByPosition };
      });
      groupedUsersBySite.value = data;
      charging.value = false;
    } catch (error) {
      console.error('Error al obtener usuarios agrupados por sede:', error);
    }
  }
  
  async function fetchGroupedUsersByPosition() {
    try {
      const response = await fetch(`${URI}/employers/grouped-by-position`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      groupedUsersByPosition.value = await response.json();
    } catch (error) {
      console.error('Error al obtener usuarios agrupados por posición:', error);
    }
  }
  </script>
  
  <style scoped>
  /* ---- Dialogs & containers ---- */
  .dialog-container {
    /* Si se requiere un contenedor adicional */
  }
  
  .confirm-delete-dialog {
    width: auto;
  }
  
  .create-neighborhood-dialog {
    width: 45rem;
    max-width: 90vw;
  }
  
  .download-dialog {
    width: 30rem;
    max-width: 90vw;
    background-color: white;
  }
  
  .upload-dialog {
    width: 30rem;
    max-width: 90vw;
    background-color: white;
  }
  
  .upload-instructions {
    margin-bottom: 0.5rem;
  }
  
  /* ---- Fields & forms ---- */
  .dropdown-field {
    width: 100%;
  }
  
  .file-input {
    margin-bottom: 1rem;
  }
  
  /* ---- Sección de creación de barrios ---- */
  .dropdowns-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .barrio-to-add-item {
    margin-bottom: 1rem;
  }
  
  .barrio-fields {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .barrio-name-input,
  .barrio-delivery-input {
    width: 100%;
  }
  
  .delete-barrio-button {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
  }
  
  .add-barrio-button-wrapper {
    margin-top: 0.5rem;
  }
  
  /* ---- Diálogo para descarga de informes ---- */
  .download-dialog-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
  
  .multiselect-field {
    width: 100%;
    max-width: 25rem;
  }
  
  .selected-sites-list {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .selected-site-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .site-image {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 2rem;
  }
  
  /* ---- Tabla de barrios ---- */
  .neighborhoods-container {
    max-width: 700px;
    margin: auto;
  }
  
  .actions-bar {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
  }
  
  /* Espacio a la izquierda para los botones subsecuentes */
  .ml {
    margin-left: 1rem;
  }
  
  .apear {
    transition: 0.3s all ease;
    opacity: 1;
    max-height: 100vh;
  }
  
  .hide {
    opacity: 0;
    max-height: 0rem;
    overflow: hidden;
  }
  
  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  
  .barrio-column {
    width: 15rem;
    min-width: 15rem;
  }
  
  .delivery-price-column {
    width: 15rem;
    min-width: 15rem;
  }
  
  .table-input {
    width: 100%;
    border: none;
    border-radius: 0;
  }
  
  .table-input-number {
    width: 10%;
    border: none;
    border-radius: 0;
  }
  
  .actions-column {
    text-align: center;
    min-width: 5rem;
  }
  
  .delete-button {
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
  }
  
  /* ---- Transiciones para elementos loading, etc. (si se usan) ---- */
  .loading-enter-active,
  .loading-leave-active {
    transition: all ease 0.3s;
  }
  
  .loading-leave-to {
    opacity: 0;
    transform: translateY(20rem);
  }
  
  .loading-leave-from {
    opacity: 1;
    transform: translateY(20rem);
  }
  
  .loading-enter-from {
    opacity: 0;
    transform: translateY(20rem);
    filter: blur(10px);
  }
  
  .loading-enter-to {
    opacity: 1;
    filter: blur(0);
  }
  
  /* ---- Otros estados/badges (si son usados) ---- */
  .vacaciones,
  .licencia,
  .general {
    display: flex;
    justify-content: center;
    background-color: #64748b;
  }
  
  .generado {
    display: flex;
    background-color: #eeff0060;
    justify-content: center;
  }
  
  .aprobado {
    display: flex;
    background-color: #2bff0060;
    justify-content: center;
  }
  
  .rechazado {
    display: flex;
    background-color: #ff000044;
    justify-content: center;
  }
  
  .Agendada {
    background-color: var(--yellow-200);
    border-radius: 5rem;
  }
  
  .Completada {
    background-color: var(--green-200);
    border-radius: 5rem;
  }
  
  .Cancelada {
    background-color: var(--red-200);
    border-radius: 5rem;
  }
  
  input {
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
    background: transparent;
  }
  
  Button {
    font-weight: bold;
    text-transform: capitalize;
  }
  </style>
  