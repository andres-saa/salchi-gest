<template>
  <!-- Componente opcional (si no lo usas, quita la import y la etiqueta) -->
  <Banner></Banner>

  <div style="padding: 3rem;">
    <h2><b>Arrastra y Reordena las Imágenes</b></h2>

    <Button
      style="margin:1rem 0;"
      severity="help"
      label="Agregar Imágenes"
      icon="pi pi-upload"
      @click="openAddImageDialog"
    />

    <!-- Diálogo para agregar imágenes -->
    <Dialog
      header="Agregar Imágenes"
      v-model:visible="isAddImageDialogOpen"
      modal
      style="width: 40rem;"
    >
      <!-- Área de drop que también responde al click para abrir el file selector -->
      <div
        class="drop-zone"
        @dragover.prevent="onDragOverFiles"
        @dragleave.prevent="onDragLeaveFiles"
        @drop.prevent="handleDropFiles"
        :class="{ 'drag-over-zone': isDragging }"
        @click="triggerFileSelect"
      >
        <p>
          Arrastra y suelta tus imágenes aquí o haz clic para seleccionarlas.
        </p>

        <!-- Previsualización de las imágenes seleccionadas -->
        <div v-if="selectedPreviews.length > 0" class="preview-container">
          <div
            v-for="(src, index) in selectedPreviews"
            :key="index"
            class="preview-item"
          >
            <img
              :src="src"
              alt="Preview"
              style="width: 100%; object-fit: cover; border-radius: 0.2rem;"
            />
          </div>
        </div>

        <!-- Input oculto para seleccionar archivos -->
        <input
          type="file"
          ref="fileInput"
          @change="handleFileUpload"
          style="display: none;"
          multiple
          accept="image/*"
        />

        <!-- Spinner de carga mientras se suben las imágenes -->
        <div
          v-if="uploading"
          style="
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-color: #ffffff80;
          "
        >
          <ProgressSpinner strokeWidth="8" style="color: white" />
        </div>
      </div>

      <template #footer>
        <div class="col-12 px-0 pb-0">
          <Button
            @click="confirmAddImages"
            severity="success"
            label="Guardar"
          />
        </div>
      </template>
    </Dialog>

    <!-- Lista de imágenes arrastrables -->
    <div class="draggable-container">
      <div
        v-for="(img, index) in sortedImages"
        :key="img.id"
        class="draggable-item"
        draggable="true"
        :class="{ 'drag-over': dragOverIndex === index }"
        @dragstart="onDragStart(index)"
        @dragenter.prevent="onDragEnter(index)"
        @dragover.prevent
        @dragleave="onDragLeave"
        @drop="onDrop(index)"
      >
        <!-- Muestra la imagen usando la URI base -->
        <img :src="`${URI}/read-photo-product/${img.src}`" :alt="img.title" />

        <!-- Botón de eliminar -->
        <Button
          style="
            border-radius: 50%;
            position: absolute;
            background-color: var(--primary-color);
            border: 3px solid;
            aspect-ratio: 1 / 1;
            right: -1.5rem;
            top: -1.5rem;
          "
          icon="pi pi-times"
          severity="info"
          class="delete-button"
          @click.stop="openDeleteDialog(img)"
        />
      </div>

      <!-- Diálogo de confirmación de eliminación -->
      <Dialog
        header="Confirmar Eliminación"
        v-model:visible="isDeleteDialogOpen"
        modal
        :closable="false"
        style="width: 350px"
      >
        <div class="confirmation-content">
          <i
            class="pi pi-exclamation-triangle"
            style="font-size: 2rem; color: #ff9800"
          ></i>
          <span class="message">
            ¿Estás seguro de que deseas eliminar esta imagen?
          </span>
        </div>
        <div class="dialog-footer">
          <Button
            label="Sí, eliminar"
            icon="pi pi-check"
            class="p-button-danger"
            @click="confirmDelete"
          />
          <Button
            label="Cancelar"
            icon="pi pi-times"
            class="p-button-secondary"
            @click="closeDeleteDialog"
          />
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Componente opcional
import Banner from './Banner.vue'

// Importa tu servicio y la URI base
import { productService } from '@/service/ProductService'
import { URI } from '../../service/conection'

// -------------------- ESTADOS --------------------
const images = ref([]) // Lista de imágenes locales
const draggedItemIndex = ref(-1)
const dragOverIndex = ref(-1)

// Diálogo de eliminación
const isDeleteDialogOpen = ref(false)
const imageToDelete = ref(null)

// Diálogo para agregar imágenes
const isAddImageDialogOpen = ref(false)
const uploading = ref(false)
const selectedFiles = ref([])       // Archivos seleccionados (array de File)
const selectedPreviews = ref([])      // Array de URLs para previsualizar
const fileInput = ref(null)
const isDragging = ref(false)         // Bandera para resaltar el drop zone

// Ordenamos localmente las imágenes según su índice
const sortedImages = computed(() => {
  return images.value.slice().sort((a, b) => a.index - b.index)
})

// -------------------- CICLO DE VIDA --------------------
onMounted(async () => {
  await fetchBanners()
})

// -------------------- FUNCIONES A BACKEND --------------------
async function fetchBanners() {
  try {
    const response = await axios.get(`${URI}/banners/`)
    images.value = response.data.map((banner, idx) => ({
      ...banner,
      id: banner.id ?? (Date.now() + Math.random()),
      index: banner.index ?? idx,
      src: banner.img_identifier,
      title: banner.title ?? 'Sin título'
    }))
  } catch (error) {
    console.error('Error al obtener banners:', error)
  }
}

async function createBanner(bannerData) {
  // bannerData = { index, img_identifier }
  const response = await axios.post(`${URI}/banners/`, bannerData)
  return response.data
}

async function reorderBanners(bannersArray) {
  // bannersArray = [ { index, img_identifier }, ... ]
  const response = await axios.post(`${URI}/banners/reorder`, bannersArray)
  return response.data
}

async function deleteBanner(bannerId) {
  const response = await axios.delete(`${URI}/banners/${bannerId}`)
  return response.data
}

// -------------------- DRAG & DROP SOBRE IMÁGENES EXISTENTES --------------------
function onDragStart(index) {
  draggedItemIndex.value = index
}

function onDragEnter(index) {
  dragOverIndex.value = index
}

function onDragLeave() {
  dragOverIndex.value = -1
}

async function onDrop(index) {
  if (index === draggedItemIndex.value) return

  const draggedItem = sortedImages.value[draggedItemIndex.value]
  const originalIndex = images.value.findIndex(
    (img) => img.id === draggedItem.id
  )
  images.value.splice(originalIndex, 1)
  images.value.splice(index, 0, draggedItem)

  images.value.forEach((img, idx) => {
    img.index = idx
  })

  draggedItemIndex.value = -1
  dragOverIndex.value = -1

  try {
    const reorderData = images.value.map((img) => ({
      id: img.id,
      index: img.index,
      img_identifier: img.src
    }))
    await reorderBanners(reorderData)
  } catch (error) {
    console.error('Error al reordenar banners:', error)
  }
}

// -------------------- ELIMINAR --------------------
function openDeleteDialog(img) {
  imageToDelete.value = img
  isDeleteDialogOpen.value = true
}

function closeDeleteDialog() {
  isDeleteDialogOpen.value = false
  imageToDelete.value = null
}

async function confirmDelete() {
  if (!imageToDelete.value) return
  try {
    await deleteBanner(imageToDelete.value.id)
    const indexToRemove = images.value.findIndex(
      (img) => img.id === imageToDelete.value.id
    )
    if (indexToRemove !== -1) {
      images.value.splice(indexToRemove, 1)
      images.value.forEach((img, idx) => {
        img.index = idx
      })
    }
  } catch (error) {
    console.error('Error al eliminar banner:', error)
  }
  closeDeleteDialog()
}

// -------------------- AGREGAR NUEVOS BANNERS --------------------
function openAddImageDialog() {
  isAddImageDialogOpen.value = true
}

function triggerFileSelect() {
  fileInput.value.click()
}

// Maneja la selección desde el explorador de archivos
function handleFileUpload(event) {
  const files = event.target.files
  if (!files || files.length === 0) return
  const newFiles = Array.from(files)
  selectedFiles.value = selectedFiles.value.concat(newFiles)
  const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
  selectedPreviews.value = selectedPreviews.value.concat(newPreviews)
  event.target.value = ''
}

// Funciones para el área de arrastrar y soltar
function onDragOverFiles() {
  isDragging.value = true
}

function onDragLeaveFiles() {
  isDragging.value = false
}

function handleDropFiles(e) {
  isDragging.value = false
  const files = e.dataTransfer.files
  if (!files || files.length === 0) return
  const newFiles = Array.from(files)
  selectedFiles.value = selectedFiles.value.concat(newFiles)
  const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
  selectedPreviews.value = selectedPreviews.value.concat(newPreviews)
}

// Envía las imágenes seleccionadas una a una al backend
async function confirmAddImages() {
  if (selectedFiles.value.length === 0) {
    alert('Por favor selecciona al menos una imagen.')
    return
  }
  uploading.value = true
  try {
    for (const file of selectedFiles.value) {
      const formData = new FormData()
      formData.append('file', file)
      const response = await productService.uploadPhoto(formData)
      const { image_identifier } = response

      const bannerData = {
        index: images.value.length,
        img_identifier: image_identifier
      }
      const created = await createBanner(bannerData)
      images.value.push({
        id: created.id ?? Date.now() + Math.random(),
        index: created.index ?? images.value.length - 1,
        src: created.img_identifier,
        title: file.name
      })
    }
    // Limpia el estado de archivos y previsualizaciones
    selectedFiles.value = []
    selectedPreviews.value = []
    isAddImageDialogOpen.value = false
  } catch (error) {
    console.error('Error al subir las imágenes o crear banners:', error)
    alert('Hubo un error al subir las imágenes.')
  } finally {
    uploading.value = false
    location.reload()
  }
}
</script>

<style scoped>
.draggable-container {
  width: 100%;
  margin: 1rem auto;
  gap: 2rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: start;
}

.draggable-item {
  position: relative;
  width: 100%;
  max-width: 15rem;
  border-radius: 4px;
  cursor: move;
  text-align: center;
  background-color: #fff;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  margin-bottom: 1rem;
}

.draggable-item img {
  max-width: 15rem;
  display: block;
  margin: 0 auto 0.5rem;
  aspect-ratio: 19 / 9;
  object-fit: cover;
}

.draggable-item.drag-over {
  background-color: #f0f0f0;
  border-color: #aaa;
}

.delete-button {
  position: absolute;
  top: 8px;
  right: 8px;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.drop-zone.drag-over-zone {
  background-color: #f0f0f0;
  border-color: #aaa;
}

.preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
}

.preview-item {
  width: 100px;
}

.confirmation-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.confirmation-content .pi-exclamation-triangle {
  flex-shrink: 0;
}

.confirmation-content .message {
  flex-grow: 1;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>
