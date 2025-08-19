<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';

import { URI } from '@/service/conection';
import { getSiteDocument } from '@/service/dropDownAux';
import { uploadPDF } from '@/service/sendFileService.js';
import { useReportesStore } from '@/store/reportes';
import { useDocumentsStore } from '@/store/documentos';
import { siteService } from '@/service/siteService';

/* ------------------- Stores y servicios ------------------- */
const store = useReportesStore();
const docsStore = useDocumentsStore();
const confirm = useConfirm();
const toast = useToast();
const route = useRoute();

/* ------------------- State ------------------- */
const curentSiteDocuments = ref([]);
const documentsDropValues = ref([]);

const file = ref(null);
const currentdocument = ref(null);

const documentType = ref(null); // { type_id, type_name }
const documentRenovationDate = ref(null);

const displayRenewDialog = ref(false);
const displayUploadDialog = ref(false);
const displayAddTypeDialog = ref(false);
const displayNewSiteDialog = ref(false);

const newTypeName = ref('');

const newSiteData = ref({
  site_name: '',
  site_address: '',
  site_phone: '',
  site_business_hours: ''
});
const newSiteImage = ref(null);
const imagePreviewUrl = ref(null);

const fileInputRef = ref(null);
const imageInputRef = ref(null);

/* ------------------- Helpers ------------------- */
const currentSite = computed(() => docsStore.currentSite || {});
const siteId = computed(() => docsStore?.currentSite?.site_id || route.params.site_id);

const toISODate = (val) => {
  if (!val) return null;
  if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(val)) return val;
  const dt = new Date(val);
  if (isNaN(dt)) return null;
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
const formatDisplayDate = (iso) => {
  if (!iso || typeof iso !== 'string') return '';
  const [y, m, d] = iso.split('-');
  if (!y || !m || !d) return iso;
  return `${d}/${m}/${y}`;
};

/* ------------------- API ------------------- */
const fetchDocumentTypes = async () => {
  try {
    const res = await fetch(`${URI}/site-file-types`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    documentsDropValues.value = await res.json();
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los tipos de archivo', life: 3000 });
  }
};

const getSiteDocumentInfo = async () => {
  try {
    const res = await fetch(`${URI}/get-site-documents-info/${siteId.value}`);
    if (!res.ok) return;
    curentSiteDocuments.value = await res.json();
  } catch (err) {
    console.error('Error al obtener documentos:', err);
  }
};

const uploadPDFInfo = async (payload) => {
  const res = await fetch(`${URI}/site-document/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

const updatePDFInfo = async (docRow, isoDate) => {
  const payload = { ...docRow, renovation_date: isoDate };
  const res = await fetch(`${URI}/site-document/${docRow.document_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

const addNewType = async () => {
  if (!newTypeName.value?.trim()) {
    toast.add({ severity: 'warn', summary: 'Falta nombre', detail: 'Ingresa un nombre para el tipo', life: 2500 });
    return;
  }
  try {
    const res = await fetch(`${URI}/site-file-type`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type_name: newTypeName.value.trim() })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    newTypeName.value = '';
    await fetchDocumentTypes();
    toast.add({ severity: 'success', summary: 'Tipo creado', life: 2500 });
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el tipo', life: 3000 });
  }
};

const updateFileType = async (tipo) => {
  try {
    const res = await fetch(`${URI}/site-file-type/${tipo.type_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type_name: tipo.type_name })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    toast.add({ severity: 'success', summary: 'Tipo actualizado', life: 2500 });
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el tipo', life: 3000 });
  }
};

const deleteFileType = async (typeId) => {
  confirm.require({
    message: '¿Eliminar este tipo de archivo?',
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Eliminar',
    rejectLabel: 'Cancelar',
    acceptClass: 'p-button-danger',
    accept: async () => {
      try {
        const res = await fetch(`${URI}/site-file-type/${typeId}`, { method: 'DELETE' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        documentsDropValues.value = documentsDropValues.value.filter(t => t.type_id !== typeId);
        toast.add({ severity: 'success', summary: 'Eliminado', life: 2500 });
      } catch (err) {
        console.error(err);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar', life: 3000 });
        fetchDocumentTypes();
      }
    }
  });
};

const deleteDocument = (doc) => {
  confirm.require({
    message: `¿Eliminar "${doc.document_name}"?`,
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Eliminar',
    rejectLabel: 'Cancelar',
    acceptClass: 'p-button-danger',
    accept: async () => {
      try {
        const res = await fetch(`${URI}/site_document/${doc.document_id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Error eliminando');
        await getSiteDocumentInfo();
        toast.add({ severity: 'success', summary: 'Documento eliminado', life: 2500 });
      } catch (err) {
        console.error(err);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar', life: 3000 });
      }
    }
  });
};

/* ------------------- Handlers ------------------- */
const handleFileChange = (e) => {
  const selected = e.target.files?.[0];
  if (selected) file.value = selected;
};

const openRenew = (row) => {
  currentdocument.value = row;
  documentRenovationDate.value = null;
  file.value = null;
  displayRenewDialog.value = true;
};

const openUpload = () => {
  documentType.value = null;
  documentRenovationDate.value = null;
  file.value = null;
  displayUploadDialog.value = true;
};

const closeDialogs = () => {
  displayRenewDialog.value = false;
  displayUploadDialog.value = false;
  file.value = null;
};

const upload = async () => {
  if (!documentType.value?.type_name) {
    toast.add({ severity: 'warn', summary: 'Selecciona un tipo', life: 2000 });
    return;
  }
  const isoDate = toISODate(documentRenovationDate.value);
  if (!isoDate) {
    toast.add({ severity: 'warn', summary: 'Fecha de renovación requerida', life: 2000 });
    return;
  }
  if (!file.value) {
    toast.add({ severity: 'warn', summary: 'Adjunta un archivo', life: 2000 });
    return;
  }

  const payload = {
    document_name: `${currentSite.value?.site_name || ''} ${documentType.value.type_name}`.trim(),
    document_type: documentType.value.type_name,
    renovation_date: isoDate,
    site_id: siteId.value
  };

  try {
    store.setLoading(true, 'Enviando');
    const created = await uploadPDFInfo(payload);
    await uploadPDF(file.value, created.document_id, documentType.value.type_name);
    await getSiteDocumentInfo();
    toast.add({ severity: 'success', summary: 'Documento cargado', life: 2500 });
    closeDialogs();
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el documento', life: 3000 });
  } finally {
    store.setLoading(false);
  }
};

const renew = async () => {
  const isoDate = toISODate(documentRenovationDate.value);
  if (!isoDate) {
    toast.add({ severity: 'warn', summary: 'Fecha de renovación requerida', life: 2000 });
    return;
  }
  try {
    store.setLoading(true, 'Actualizando');
    await updatePDFInfo(currentdocument.value, isoDate);
    if (file.value) {
      await uploadPDF(file.value, currentdocument.value.document_id, currentdocument.value.document_type);
    }
    await getSiteDocumentInfo();
    toast.add({ severity: 'success', summary: 'Documento actualizado', life: 2500 });
    closeDialogs();
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar', life: 3000 });
  } finally {
    store.setLoading(false);
  }
};

/* ------------------- Nueva sede ------------------- */
const openNewSiteDialog = () => {
  displayNewSiteDialog.value = true;
  newSiteData.value = { site_name: '', site_address: '', site_phone: '', site_business_hours: '' };
  newSiteImage.value = null;
  imagePreviewUrl.value = null;
};

const handleNewSiteImageChange = (e) => {
  const f = e.target.files?.[0];
  newSiteImage.value = f || null;
  imagePreviewUrl.value = f ? URL.createObjectURL(f) : null;
};

const createNewSite = async () => {
  try {
    const res = await fetch(`${URI}/site`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSiteData.value)
    });
    if (!res.ok) throw new Error('Error al crear la sede');

    const { site_id } = await res.json();
    if (newSiteImage.value) {
      const formData = new FormData();
      formData.append('file', newSiteImage.value);
      const up = await fetch(`${URI}/upload-product-image/site-${site_id}`, {
        method: 'POST',
        body: formData
      });
      if (!up.ok) throw new Error('Error subiendo imagen de sede');
    }

    displayNewSiteDialog.value = false;
    toast.add({ severity: 'success', summary: 'Sede creada', life: 2500 });
  } catch (err) {
    console.error(err);
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear la sede', life: 3000 });
  }
};

/* ------------------- Lifecycle ------------------- */
onMounted(async () => {
  // Garantiza currentSite desde store o ruta
  if (!docsStore?.currentSite?.site_id && route.params.site_id) {
    docsStore.currentSite = await siteService.getSiteById(route.params.site_id);
  }
  await getSiteDocumentInfo();
  await fetchDocumentTypes();
});

watch(() => route.params.site_id, async () => {
  await getSiteDocumentInfo();
});
</script>

<template>
  <Toast />
  <ConfirmDialog />

  <div class="col-12 p-0 mx-auto">
    <!-- Toolbar -->
    <div class="toolbar">
      <div class="left">
        <h3 class="title">
          Documentos — <span class="muted">{{ currentSite?.site_name || 'Sede' }}</span>
        </h3>
      </div>
      <div class="right">
        <Button size="small" class="w-full md:w-auto" icon="pi pi-plus" label="Nuevo documento" @click="openUpload" />
        <Button size="small" class="w-full md:w-auto" icon="pi pi-home" label="Nueva sede" @click="openNewSiteDialog" />
        <Button size="small" class="w-full md:w-auto" icon="pi pi-list" label="Tipos de archivo" @click="displayAddTypeDialog = true" />
      </div>
    </div>

    <!-- Tabla -->
    <DataTable
      :value="curentSiteDocuments"
      :stripedRows="true"
      :paginator="true"
      :rows="10"
      dataKey="document_id"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5,10,25]"
      currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
      responsiveLayout="scroll"
      class="mt-3"
    >
      <Column field="document_type" header="Tipo" headerStyle="min-width:12rem;" />
      <Column header="Nombre" headerStyle="min-width:18rem;">
        <template #body="{ data }">
          {{ (currentSite?.site_name || '') + ' ' + data.document_type }}
        </template>
      </Column>
      <Column field="renovation_date" header="Renovación" headerStyle="min-width:10rem;">
        <template #body="{ data }">
          {{ formatDisplayDate(data.renovation_date) }}
        </template>
      </Column>
      <Column header="Acciones" frozen alignFrozen="right" headerStyle="min-width:12rem;">
        <template #body="{ data }">
          <div class="actions">
            <Button text rounded aria-label="Descargar" icon="pi pi-download" @click="getSiteDocument(data.document_id, data.document_type)" />
            <Button text rounded aria-label="Editar" icon="pi pi-pencil" @click="openRenew(data)" />
            <Button text rounded severity="danger" aria-label="Eliminar" icon="pi pi-trash" @click="deleteDocument(data)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>

  <!-- Dialog: Renovar -->
  <Dialog
    v-model:visible="displayRenewDialog"
    :modal="true"
    :style="{ width: '500px' }"
    :header="`Renovar ${currentdocument?.document_type || ''} — ${(currentSite?.site_name || '').toUpperCase()}`"
  >
    <div class="field">
      <label>Fecha de renovación</label>
      <Calendar
        v-model="documentRenovationDate"
        dateFormat="dd/mm/yy"
        class="w-full"
        :manualInput="false"
      />
    </div>

    <div class="upload-zone" v-if="file">
      <i class="pi pi-check mr-2" />
      <span>{{ file?.name }} seleccionado</span>
    </div>

    <div class="grid-buttons">
      <Button class="w-full" severity="help" label="Seleccionar documento" icon="pi pi-upload" @click="fileInputRef?.click()" />
      <Button class="w-full" severity="success" label="Guardar" icon="pi pi-save" @click="renew" />
    </div>

    <input ref="fileInputRef" type="file" @change="handleFileChange" style="display: none" />
  </Dialog>

  <!-- Dialog: Subir nuevo -->
  <Dialog
    v-model:visible="displayUploadDialog"
    :modal="true"
    :style="{ width: '500px' }"
    :header="`Cargar ${documentType?.type_name || 'documento'} — ${(currentSite?.site_name || '').toUpperCase()}`"
  >
    <div class="field">
      <label>Tipo de documento</label>
      <Dropdown
        v-model="documentType"
        :options="documentsDropValues"
        optionLabel="type_name"
        placeholder="Selecciona un tipo"
        class="w-full"
      />
    </div>

    <div class="field">
      <label>Fecha de renovación</label>
      <Calendar
        v-model="documentRenovationDate"
        dateFormat="dd/mm/yy"
        class="w-full"
        :manualInput="false"
      />
    </div>

    <div class="upload-zone" v-if="file">
      <i class="pi pi-check mr-2" />
      <span>{{ file?.name }} seleccionado</span>
    </div>

    <div class="grid-buttons">
      <Button class="w-full" severity="help" label="Seleccionar documento" icon="pi pi-upload" @click="fileInputRef?.click()" />
      <Button class="w-full" severity="success" label="Enviar" icon="pi pi-send" @click="upload" />
    </div>

    <input ref="fileInputRef" type="file" @change="handleFileChange" style="display: none" />
  </Dialog>

  <!-- Dialog: Tipos de archivo -->
  <Dialog v-model:visible="displayAddTypeDialog" :modal="true" :style="{ width: '520px' }" header="Tipos de archivo">
    <div class="field">
      <label>Nuevo tipo</label>
      <div class="row">
        <InputText class="flex-1" v-model="newTypeName" placeholder="Ej: Certificado sanitario" />
        <Button label="Agregar" icon="pi pi-plus" @click="addNewType" />
      </div>
    </div>

    <h4 class="mt-4">Editar existentes</h4>
    <div class="types-list">
      <div class="type-item" v-for="tipo in documentsDropValues" :key="tipo.type_id">
        <InputText class="flex-1" v-model="tipo.type_name" @blur="updateFileType(tipo)" />
        <Button rounded text severity="danger" icon="pi pi-trash" @click="deleteFileType(tipo.type_id)" />
      </div>
    </div>
  </Dialog>

  <!-- Dialog: Nueva Sede -->
  <Dialog v-model:visible="displayNewSiteDialog" :modal="true" :style="{ width: '520px' }" header="Nueva sede">
    <div class="field">
      <label>Nombre de la sede</label>
      <InputText class="w-full" v-model="newSiteData.site_name" />
    </div>
    <div class="field">
      <label>Dirección</label>
      <InputText class="w-full" v-model="newSiteData.site_address" />
    </div>
    <div class="field">
      <label>Teléfono</label>
      <InputText class="w-full" v-model="newSiteData.site_phone" />
    </div>

    <div v-if="imagePreviewUrl" class="preview">
      <img :src="imagePreviewUrl" alt="Vista previa" />
    </div>

    <div class="row mt-3">
      <Button class="w-full" icon="pi pi-camera" label="Cargar imagen" @click="imageInputRef?.click()" />
      <input ref="imageInputRef" type="file" @change="handleNewSiteImageChange" style="display:none" />
    </div>

    <template #footer>
      <Button label="Crear sede" icon="pi pi-check" @click="createNewSite" />
    </template>
  </Dialog>
</template>

<style scoped>
.toolbar {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: .5rem;
  flex-wrap: wrap;
}
.toolbar .right {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
}
.title { margin: 0; font-weight: 700; }
.muted { color: var(--text-color-secondary); }

.actions {
  display: flex;
  gap: .25rem;
  align-items: center;
}

.field {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: .75rem 0;
}
.row {
  display: flex;
  gap: .5rem;
  align-items: center;
}
.flex-1 { flex: 1; }

.grid-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .75rem;
  margin-top: 1rem;
}

.upload-zone {
  background: rgba(19, 164, 0, 0.08);
  border: 1px dashed rgba(19, 164, 0, 0.35);
  padding: .75rem;
  border-radius: .5rem;
  margin-top: .5rem;
  display: flex;
  align-items: center;
}

.types-list {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: .5rem;
}
.type-item {
  display: flex;
  gap: .5rem;
  align-items: center;
}

.preview {
  margin-top: .75rem;
}
.preview img {
  max-width: 100%;
  max-height: 260px;
  border-radius: .5rem;
  display: block;
}
</style>
