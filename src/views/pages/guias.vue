<template>
    <div>
      <!-- ELIMINAR ÁREA O TIPO -->
      <Dialog v-model:visible="showDeleteDialog" header="Eliminar área o tipo" modal :closable="true" @hide="resetDeleteForm" style="max-width: 36rem">
        <div class="flex align-items-center gap-3">
          <Dropdown class="w-9" v-model="selectedToDelete" :options="combinedOptions" optionLabel="name" placeholder="Seleccione un área o tipo" />
          <Button class="w-3" label="Eliminar" :icon="PrimeIcons.TRASH" severity="danger" :disabled="!selectedToDelete" @click="deleteSelectedItem" />
        </div>
        <small class="mt-3 block p-text-secondary">Esta acción elimina el elemento del catálogo (no los archivos ya cargados).</small>
      </Dialog>
  
      <!-- CONFIRMAR ELIMINACIÓN DE ARCHIVO -->
      <Dialog v-model:visible="deleteDialogVisible" header="Confirmar eliminación" modal :closable="false" style="max-width: 28rem">
        <p>¿Estás seguro de que quieres eliminar este archivo?</p>
        <div class="flex gap-2 justify-content-end">
          <Button label="No" :icon="PrimeIcons.TIMES" @click="deleteDialogVisible = false" text />
          <Button label="Sí" :icon="PrimeIcons.CHECK" @click="deleteFile" severity="danger" />
        </div>
      </Dialog>
  
      <!-- CREAR NUEVA ÁREA -->
      <Dialog v-model:visible="showNewAreaDialog" header="Crear nueva área" modal :closable="true" @hide="resetNewAreaForm" style="max-width: 28rem">
        <form @submit.prevent="createNewArea" class="flex flex-column gap-3">
          <InputText v-model="newArea.area_name" placeholder="Nombre del área" class="w-full" />
          <div class="flex justify-content-end">
            <Button  label="Crear" :icon="PrimeIcons.CHECK" :disabled="!newArea.area_name?.trim()" @click="createNewArea" />
          </div>
        </form>
      </Dialog>
  
      <!-- CREAR NUEVO TIPO -->
      <Dialog v-model:visible="showNewTypeDialog" header="Crear nuevo tipo de archivo" modal :closable="true" @hide="resetNewTypeForm" style="max-width: 28rem">
        <form @submit.prevent="createNewType" class="flex flex-column gap-3">
          <InputText v-model="newType.type_name" placeholder="Nombre del tipo de archivo" class="w-full" />
          <div class="flex justify-content-end">
            <Button  label="Crear" :icon="PrimeIcons.CHECK" :disabled="!newType.type_name?.trim()" @click="createNewType" />
          </div>
        </form>
      </Dialog>
  
      <!-- CONTENEDOR PRINCIPAL -->
      <div class="wrapper">
        <!-- ENCABEZADO -->
        <div class="hero">
          <div class="hero__left">
            <i class="fa-solid fa-person-chalkboard"></i>
            <div>
              <h2 class="m-0">Gestión de guías</h2>
              <p class="m-0">Organiza y comparte documentos por área y tipo</p>
            </div>
          </div>
  
          <div class="hero__actions">
            <Button class="minw" :icon="PrimeIcons.UPLOAD" label="Nuevo archivo" severity="success" @click="dialogVisible = true" />
            <Button class="minw" :icon="PrimeIcons.PLUS" label="Nueva área" severity="warning" @click="showNewAreaDialog = true" />
            <Button class="minw" :icon="PrimeIcons.PLUS" label="Nuevo tipo" severity="info" @click="showNewTypeDialog = true" />
            <Button class="minw" :icon="PrimeIcons.TRASH" label="Eliminar área/tipo" severity="danger" @click="() => { showDeleteDialog = true; loadCombinedOptions(); }" />
          </div>
        </div>
  
        <!-- CONTROLES / FILTROS -->
        <div class="controls card shadow-1">
          <div class="grid align-items-center m-0 w-full">
            <div class="col-12 lg:col-5 p-1">
              <Dropdown class="w-full h-3rem" optionLabel="area_name" v-model="area" :options="areas" placeholder="Área de la empresa" />
            </div>
            <div class="col-12 lg:col-4 p-1">
              <Dropdown class="w-full h-3rem" v-model="type" optionLabel="type_name" :options="types" placeholder="Tipo de archivo" />
            </div>
  
            <div class="col-12 lg:col-3 p-1 flex justify-content-end gap-2">
              <Button @click="clean" :icon="PrimeIcons.ERASER" class="" severity="danger" size="small" v-tooltip.bottom="'Limpiar filtros'"></Button>
              <Button @click="getfiles" :icon="PrimeIcons.SEARCH" class="" severity="help" size="small" v-tooltip.bottom="'Buscar'"></Button>
            </div>
          </div>
  
          <div class="flex flex-wrap gap-2 mt-2">
            <Tag v-if="area?.id_area !== 'all'" :icon="PrimeIcons.BOOK" severity="success" :value="`Área: ${area?.area_name}`"  />
            <Tag v-if="type?.id_type !== 'all'" :icon="PrimeIcons.FILE" severity="info" :value="`Tipo: ${type?.type_name}`"  />
          </div>
  
          <div class="p-input-icon-left mt-3">
            <i class="pi pi-search" />
            <InputText class="w-full" v-model="filters.global.value" placeholder="Buscar por nombre, tipo, área, fecha..." />
          </div>
        </div>
  
        <!-- TABLA -->
        <DataTable
          class="table glow"
          :value="archived_files"
          dataKey="id_file"
          v-model:selection="selectedFiles"
          :paginator="true"
          :rows="10"
          stripedRows
          rowHover
          showGridlines
          :filters="filters"
          :loading="loadingTable"
          removableSort
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5,10,25,100]"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} archivos"
        >
          <template #empty>
            <div class="py-6 text-center">
              <i class="pi pi-folder-open text-4xl block mb-2"></i>
              <span>No hay archivos para los filtros actuales.</span>
            </div>
          </template>
  
          <Column selectionMode="multiple" headerStyle="width: 3rem" frozen class="p-2"></Column>
  
          <Column field="id_file" header="ID" sortable headerStyle="width: 8rem" class="p-2">
            <template #body="slotProps">
              {{ slotProps.data.id_file }}
            </template>
          </Column>
  
          <Column header="" headerStyle="width: 6rem" class="p-2">
            <template #body="slotProps">
              <div class="file-badge" :style="`background-color:${extColor(slotProps.data.file_extension)};`">
                <img class="file-badge__icon" src="/images/file.png" alt="file" />
                <span class="file-badge__ext">{{ slotProps.data.file_extension?.slice(0,4)?.toUpperCase() }}</span>
              </div>
            </template>
          </Column>
  
          <Column field="file_name" header="Nombre" sortable headerStyle="min-width: 22rem" class="p-2">
            <template #body="slotProps">
              <div class="flex flex-column">
                <span class="font-semibold">{{ slotProps.data.file_name }}</span>
                <small class="p-text-secondary">Versión: {{ slotProps.data.version ?? '—' }}</small>
              </div>
            </template>
          </Column>
  
          <Column field="type_name" header="Tipo" sortable class="p-2" headerStyle="width: 12rem">
            <template #body="slotProps">
              <Tag :value="slotProps.data.type_name" severity="info"  />
            </template>
          </Column>
  
          <Column field="area_name" header="Área" sortable class="p-2" headerStyle="width: 12rem">
            <template #body="slotProps">
              <Tag :value="slotProps.data.area_name" severity="success"  />
            </template>
          </Column>
  
          <Column field="upload_date" header="Fecha" sortable class="p-2" headerStyle="width: 11rem">
            <template #body="slotProps">
              {{ slotProps.data.upload_date }}
            </template>
          </Column>
  
          <Column header="Acciones" frozen alignFrozen="right" class="p-2" headerStyle="width:10rem">
            <template #body="slotProps">
              <div class="flex gap-2 justify-content-end">
                <Button text :icon="PrimeIcons.DOWNLOAD" severity="success" @click="downloadFile(slotProps.data.id_area, slotProps.data.id_type, slotProps.data.file_name)" />
                <Button text :icon="PrimeIcons.TRASH" severity="danger" @click="confirmDelete(slotProps.data.id_file)" />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
  
      <!-- SUBIR ARCHIVO -->
      <Dialog v-model:visible="dialogVisible" :header="`Subir ${newFile?.type?.type_name || 'archivo'} para ${newFile?.area?.area_name || 'alguna área'}`" modal :closable="true" @hide="onHide" style="width: 100%; max-width: 34rem">
        <form @submit.prevent="submitFile" enctype="multipart/form-data" class="flex flex-column gap-3">
          <InputText placeholder="Nombre del archivo" class="w-full" v-model="newFile.file_name" />
  
          <Dropdown optionLabel="area_name" placeholder="Área de la empresa" class="w-full" v-model="newFile.area" :options="areasFiltered" />
          <Dropdown class="w-full" placeholder="Tipo de archivo" v-model="newFile.type" optionLabel="type_name" :options="typesFiltered" />
  
          <!-- Dropzone -->
          <div class="dropzone" @click="() => fileInput?.click()">
            <i class="pi pi-upload text-2xl mb-2"></i>
            <span v-if="!form.file">Haz clic para seleccionar un archivo</span>
            <span v-else>{{ form.file.name }}</span>
            <input type="file" ref="fileInput" @change="handleFileUpload" hidden />
          </div>
  
         
        </form>
        <template #footer>
            <div class="flex justify-content-between w-full">
              <Button text :icon="PrimeIcons.TIMES" label="Cancelar" @click="onHide" />
              <Button :disabled="!canSubmit" severity="success" :icon="PrimeIcons.CHECK" label="Enviar" @click="submitFile" />
            </div>
          </template>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeMount, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useToast } from 'primevue/usetoast';
  import { FilterMatchMode, PrimeIcons } from 'primevue/api';
  import { URI } from '@/service/conection';
  import { useReportesStore } from '@/store/reportes.js';
  
  const store = useReportesStore();
  const toast = useToast();
  const route = useRoute();
  
  /* ---------- Estado ---------- */
  const showDeleteDialog = ref(false);
  const selectedToDelete = ref(null);
  const combinedOptions = ref([]);
  
  const showNewAreaDialog = ref(false);
  const showNewTypeDialog = ref(false);
  
  const newArea = ref({ area_name: '' });
  const newType = ref({ type_name: '' });
  
  const deleteDialogVisible = ref(false);
  const fileToDelete = ref(null);
  
  const newFile = ref({});
  const archived_files = ref([]);
  const selectedFiles = ref([]);
  const dialogVisible = ref(false);
  const fileInput = ref(null);
  
  const form = ref({
    file: null
  });
  
  const loadingTable = ref(false);
  
  const areas = ref([]);
  const types = ref([]);
  const area = ref(null);
  const type = ref(null);
  
  /* ---------- Paleta por extensión ---------- */
  const colors = {
    pdf: '#E74C3C',
    doc: '#3498DB',
    docx: '#3498DB',
    xls: '#27AE60',
    xlsx: '#27AE60',
    ppt: '#E67E22',
    pptx: '#E67E22',
    psd: '#34495E',
    ai: '#F39C12',
    indd: '#EB4D4B',
    jpg: '#F1C40F',
    jpeg: '#F1C40F',
    png: '#1ABC9C',
    gif: '#F39C12',
    bmp: '#2ECC71',
    tiff: '#D35400',
    svg: '#9B59B6',
    mp3: '#2ECC71',
    wav: '#3498DB',
    aac: '#9B59B6',
    flac: '#E74C3C',
    ogg: '#E67E22',
    csv: '#27AE60'
  };
  const extColor = (ext) => colors[ext?.toLowerCase?.()] || '#8E44AD';
  
  /* ---------- Filtros tabla ---------- */
  const filters = ref(null);
  const initFilters = () => {
    filters.value = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } };
  };
  onBeforeMount(initFilters);
  
  /* ---------- Computados útiles ---------- */
  const areasFiltered = computed(() => areas.value.filter(a => a.id_area !== 'all'));
  const typesFiltered = computed(() => types.value.filter(t => t.id_type !== 'all'));
  const canSubmit = computed(() => !!(newFile.value?.area && newFile.value?.type && newFile.value?.file_name?.trim() && form.value.file));
  
  /* ---------- Carga inicial ---------- */
  onMounted(async () => {
    await fetchAll();
  });
  
  async function fetchAll() {
    await Promise.all([loadFiles(), loadAreas(), loadTypes()]);
    // Defaults "Todos"
    area.value = areas.value.find(a => a.id_area === 'all') || null;
    type.value = types.value.find(t => t.id_type === 'all') || null;
    await loadCombinedOptions();
  }
  
  /* ---------- Loaders ---------- */
  async function loadFiles() {
    loadingTable.value = true;
    store.setLoading(true, 'cargando archivos');
    try {
      const res = await fetch(`${URI}/archived-files`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      archived_files.value = await res.json();
    } catch (e) {
      console.error(e);
      toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los archivos', life: 3000 });
    } finally {
      loadingTable.value = false;
      store.setLoading(false, 'cargando archivos');
    }
  }
  
  async function loadAreas() {
    store.setLoading(true, 'cargando áreas');
    try {
      const res = await fetch(`${URI}/areas`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      areas.value = [{ id_area: 'all', area_name: 'Todas las áreas' }, ...data];
    } catch (e) {
      console.error(e);
      toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las áreas', life: 3000 });
    } finally {
      store.setLoading(false, 'cargando áreas');
    }
  }
  
  async function loadTypes() {
    store.setLoading(true, 'cargando tipos');
    try {
      const res = await fetch(`${URI}/archived-file-types`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      types.value = [{ id_type: 'all', type_name: 'Todos los tipos' }, ...data];
    } catch (e) {
      console.error(e);
      toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los tipos', life: 3000 });
    } finally {
      store.setLoading(false, 'cargando tipos');
    }
  }
  
  const loadCombinedOptions = async () => {
    // Asegura catálogos actualizados
    await Promise.all([loadFiles(), loadAreas(), loadTypes()]);
    combinedOptions.value = [
      ...areas.value.filter(a => a.id_area !== 'all').map(area => ({ id: area.id_area, name: area.area_name, type: 'area' })),
      ...types.value.filter(t => t.id_type !== 'all').map(type => ({ id: type.id_type, name: type.type_name, type: 'type' }))
    ];
  };
  
  /* ---------- Acciones catálogos ---------- */
  const resetDeleteForm = () => { selectedToDelete.value = null; };
  
  const createNewArea = async () => {
    if (!newArea.value.area_name?.trim()) return;
    store.setLoading(true, 'creando área');
    try {
      const response = await fetch(`${URI}/area`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArea.value)
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Área creada correctamente', life: 3000 });
      await loadAreas();
      showNewAreaDialog.value = false;
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    } finally {
      store.setLoading(false, 'creando área');
    }
  };
  
  const createNewType = async () => {
    if (!newType.value.type_name?.trim()) return;
    store.setLoading(true, 'creando tipo');
    try {
      const response = await fetch(`${URI}/archived-file-type`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newType.value)
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Tipo de archivo creado correctamente', life: 3000 });
      await loadTypes();
      showNewTypeDialog.value = false;
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    } finally {
      store.setLoading(false, 'creando tipo');
    }
  };
  
  const deleteSelectedItem = async () => {
    if (!selectedToDelete.value) return;
    const { id, type } = selectedToDelete.value;
    let url = `${URI}/`;
    url += type === 'area' ? `area/${id}` : `archived-file-type/${id}`;
    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      toast.add({ severity: 'success', summary: 'Éxito', detail: `${type === 'area' ? 'Área' : 'Tipo'} eliminado correctamente`, life: 3000 });
      await (type === 'area' ? loadAreas() : loadTypes());
      await loadCombinedOptions();
      showDeleteDialog.value = false;
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    }
  };
  
  /* ---------- Acciones archivos ---------- */
  const confirmDelete = (fileId) => {
    fileToDelete.value = fileId;
    deleteDialogVisible.value = true;
  };
  
  const deleteFile = async () => {
    if (!fileToDelete.value) return;
    store.setLoading(true, 'borrando archivo');
    try {
      const response = await fetch(`${URI}/archived-file/${fileToDelete.value}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Error al eliminar el archivo: ${response.statusText}`);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo eliminado correctamente', life: 3000 });
      await getfiles(); // refresca según filtros activos
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    } finally {
      store.setLoading(false, 'borrando archivo');
      deleteDialogVisible.value = false;
      fileToDelete.value = null;
    }
  };
  
  const handleFileUpload = (event) => {
    form.value.file = event.target.files[0];
  };
  
  const onHide = () => {
    dialogVisible.value = false;
    form.value = { file: null };
    newFile.value = {};
  };
  
  const submitFile = async () => {
    if (!canSubmit.value) {
      toast.add({ severity: 'warn', summary: 'Advertencia', detail: 'Completa todos los campos', life: 2500 });
      return;
    }
    const formData = new FormData();
    formData.append('file', form.value.file);
    formData.append('id_area', newFile.value.area.id_area);
    formData.append('id_type', newFile.value.type.id_type);
    formData.append('file_name', newFile.value.file_name);
  
    try {
      const response = await fetch(`${URI}/upload-archived-file/`, { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`Error al subir el archivo: ${response.statusText}`);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo subido correctamente', life: 3000 });
      onHide();
      await getfiles();
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    }
  };
  
  const downloadFile = (areaId, typeId, nombre) => {
    const fileUrl = `${URI}/get-archived-file/${areaId}/${typeId}/${(nombre || '').split('.')[0]}`;
    fetch(fileUrl)
      .then(response => {
        if (response.ok) return response.blob();
        throw new Error('No se pudo descargar el archivo.');
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nombre || 'archivo';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 }));
  };
  
  /* ---------- Filtros de servidor ---------- */
  async function getAreaFilesByAreaId() {
    if (!area.value) return;
    loadingTable.value = true;
    store.setLoading(true, 'cargando archivos');
    try {
      const response = await fetch(`${URI}/archived-files/area/${area.value.id_area}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      archived_files.value = await response.json();
    } finally {
      loadingTable.value = false;
      store.setLoading(false, 'cargando archivos');
    }
  }
  
  async function getAreaFilesByTypeId() {
    if (!type.value) return;
    loadingTable.value = true;
    store.setLoading(true, 'cargando archivos');
    try {
      const response = await fetch(`${URI}/archived-files/type/${type.value.id_type}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      archived_files.value = await response.json();
    } finally {
      loadingTable.value = false;
      store.setLoading(false, 'cargando archivos');
    }
  }
  
  async function getAreaFilesByTypeIdAndAresId() {
    if (!type.value || !area.value) return;
    loadingTable.value = true;
    store.setLoading(true, 'cargando archivos');
    try {
      const response = await fetch(`${URI}/archived-files/${area.value.id_area}/${type.value.id_type}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      archived_files.value = await response.json();
    } finally {
      loadingTable.value = false;
      store.setLoading(false, 'cargando archivos');
    }
  }
  
  const getfiles = async () => {
    if (area.value && type.value && area.value?.id_area !== 'all' && type.value?.id_type !== 'all') {
      await getAreaFilesByTypeIdAndAresId();
    } else if (area.value?.id_area === 'all' && type.value?.id_type !== 'all') {
      await getAreaFilesByTypeId();
    } else if (area.value?.id_area !== 'all' && type.value?.id_type === 'all') {
      await getAreaFilesByAreaId();
    } else {
      await loadFiles();
    }
  };
  
  const clean = async () => {
    area.value = areas.value.find(a => a.id_area === 'all');
    type.value = types.value.find(t => t.id_type === 'all');
    await loadFiles();
  };
  
  /* ---------- Reactividad ---------- */
  watch([area, type], async () => {
    // Búsqueda automática al cambiar filtros
    await getfiles();
  });
  </script>
  
  <style scoped>
  /* Paleta moderna */
  :root {
    --brand-1: #7c4dff;
    --brand-2: #00c2ff;
    --brand-3: #10b981;
    --brand-4: #f59e0b;
    --hero-grad: linear-gradient(135deg, rgba(124,77,255,.22), rgba(0,194,255,.22));
  }
  
  * { text-transform: uppercase; }
  Button { text-transform: capitalize; font-weight: 500; }
  
  /* Layout principal */
  .wrapper {
    max-width: 1500px;
    margin: 3rem auto 2rem;
    padding: 0 1rem;
    min-height: calc(100vh - 9rem);
  }
  
  /* Header / Hero */
  .hero {
    background: var(--hero-grad);
    border: 1px solid rgba(255,255,255,.35);
    backdrop-filter: blur(6px);
    border-radius: 1rem;
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .hero__left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .hero__left i {
    font-size: 2.2rem;
    color: var(--brand-1);
    background: white;
    border-radius: .8rem;
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    box-shadow: 0 6px 18px rgba(124,77,255,.15);
  }
  .hero h2 { font-weight: 800; letter-spacing: .5px; }
  .hero p { text-transform: none; color: #3f3f46; }
  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: .6rem;
  }
  .minw { min-width: max-content; }
  
  /* Controles */
  .controls {
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    background: #fff;
    border: 1px solid #eef2ff;
  }
  . {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  
  /* Tabla */
  .table {
    margin-top: 1rem;
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid #eef2ff;
  }
  .glow {
    /* box-shadow: 0 10px 30px rgba(124,77,255,0.08); */
  }
  
  /* Badge de archivo */
  .file-badge {
    height: 3.5rem;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: .6rem;
    display: grid;
    place-items: center;
    padding: .3rem;
  }
  .file-badge__icon {
    height: 100%;
    width: 100%;
    object-fit: contain;
    mix-blend-mode: lighten;
    opacity: .9;
  }
  .file-badge__ext {
    position: absolute;
    bottom: .35rem;
    font-size: .7rem;
    font-weight: 900;
    color: #fff;
    letter-spacing: .5px;
  }
  
  /* Dropzone */
  .dropzone {
    border: 2px dashed #dbeafe;
    border-radius: .8rem;
    padding: 1.2rem;
    text-align: center;
    cursor: pointer;
    transition: background .2s ease, border-color .2s ease;
  }
  .dropzone:hover {
    background: #f8fafc;
    border-color: #93c5fd;
  }
  
  /* Utilidades */
  .h-3rem { height: 3rem; }
  .p-text-secondary { color: #6b7280; }
  
  /* Responsive */
  @media (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr auto;
      align-items: center;
    }
  }
  </style>
  