<template>
   <div style="padding: 3rem;">
     <h2 style="text-transform: capitalize;">
       <b>{{ route.params.carta_name }}</b>
     </h2>
 
     <Button
       style="margin:1rem 0;background-color: var(--primary-color);border: none;"
       label="Agregar Imágenes"
       icon="pi pi-upload"
       severity="help"
       @click="openAddImageDialog"
     />
 
     <!-- Diálogo para agregar imágenes -->
     <Dialog
       header="Agregar Imágenes"
       v-model:visible="isAddImageDialogOpen"
       modal
       style="width: 40rem;"
     >
       <!-- Zona para arrastrar y soltar archivos -->
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
         <!-- Muestra las previsualizaciones de todos los archivos seleccionados -->
         <div
           v-if="selectedPreviews.length > 0"
           class="preview-container"
         >
           <div
             v-for="(src, index) in selectedPreviews"
             :key="index"
             class="preview-item"
           >
             <img
               :src="src"
               alt="Preview"
               style="width: 100%; object-fit: contain; border-radius: 0.2rem;"
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
           style="position: absolute; left: 0; top: 0; width: 100%; display: flex; justify-content: center; align-items: center; height: 100%; background-color: #ffffff80;"
         >
           <ProgressSpinner strokeWidth="8" style="color: white" />
         </div>
       </div>
 
       <template #footer>
         <div class="col-12 p-0 m-0">
           <Button @click="confirmAddImages" severity="help" label="Guardar" />
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
         <img :src="`${URI}/read-photo-product/${img.src}/300`" :alt="img.title" />
 
         <!-- Botón de eliminar -->
         <Button
           style="border-radius: 50%; position: absolute; background-color: var(--primary-color); border: 3px solid; aspect-ratio: 1 / 1; right: -1.5rem; top: -1.5rem;"
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
           <i class="pi pi-exclamation-triangle" style="font-size: 2rem; color: #ff9800"></i>
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
 import { ref, computed, onMounted, watch } from 'vue'
 import axios from 'axios'
 import { useRoute } from 'vue-router'
 
 // Importa tu servicio, la URI base y el fetchService
 import { productService } from '@/service/ProductService'
 import { URI } from '../../service/conection'
 import { fetchService } from '../../service/utils/fetchService'
 
 const route = useRoute()
 
 // -------------------- ESTADOS --------------------
 const images = ref([]) // Lista de cartas en local
 const draggedItemIndex = ref(-1)
 const dragOverIndex = ref(-1)
 
 // Diálogo de eliminación
 const isDeleteDialogOpen = ref(false)
 const imageToDelete = ref(null)
 
 // Diálogo para agregar imágenes
 const isAddImageDialogOpen = ref(false)
 const uploading = ref(false)
 const selectedFiles = ref([])       // Almacenará todos los archivos seleccionados
 const selectedPreviews = ref([])      // Almacenará las URLs de previsualización
 const fileInput = ref(null)
 const isDragging = ref(false)         // Para destacar la zona de drop
 
 // Ordenamos localmente las imágenes según index
 const sortedImages = computed(() => {
   return images.value.slice().sort((a, b) => a.index - b.index)
 })
 
 // -------------------- CICLO DE VIDA --------------------
 onMounted(async () => {
   await fetchcartas()
 })
 
 watch(
   () => route.params.carta_id,
   async () => {
     await fetchcartas()
   }
 )
 
 // -------------------- FUNCIONES A BACKEND --------------------
 /** GET /cartas/ */
 async function fetchcartas() {
   try {
     const cartaId = route.params.carta_id
     const response = await fetchService.get(`${URI}/carta/${cartaId}`)
     images.value = response.map((carta, idx) => ({
       ...carta,
       id: carta.id ?? (Date.now() + Math.random()),
       index: carta.index ?? idx,
       src: carta.img_identifier, // para usar en el src de la imagen
       title: carta.title ?? 'Sin título'
     }))
   } catch (error) {
     console.error('Error al obtener cartas:', error)
   }
 }
 
 /** POST /cartas/ con { index, img_identifier, carta_id } */
 async function createcarta(cartaData) {
   // cartaData = { index, img_identifier, carta_id }
   const response = await fetchService.post(`${URI}/carta/`, cartaData)
   return response
 }
 
 /** POST /cartas/reorder con { cartas: [ { index, img_identifier }, ... ] } */
 async function reordercartas(cartasArray) {
   const response = await axios.post(`${URI}/carta/reorder`, cartasArray)
   return response.data
 }
 
 /** DELETE /cartas/{carta_id} */
 async function deletecarta(cartaId) {
   const response = await axios.delete(`${URI}/carta/${cartaId}`)
   return response.data
 }
 
 // -------------------- DRAG & DROP IMÁGENES EXISTENTES --------------------
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
   const originalIndex = images.value.findIndex((img) => img.id === draggedItem.id)
 
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
     await reordercartas(reorderData)
   } catch (error) {
     console.error('Error al reordenar cartas:', error)
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
     await deletecarta(imageToDelete.value.id)
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
     console.error('Error al eliminar carta:', error)
   }
   closeDeleteDialog()
 }
 
 // -------------------- AGREGAR NUEVAS CARTAS --------------------
 // Abre el diálogo para agregar imágenes
 function openAddImageDialog() {
   isAddImageDialogOpen.value = true
 }
 
 // Dispara la selección de archivos en el input
 function triggerFileSelect() {
   fileInput.value.click()
 }
 
 // Maneja la selección a través del explorador de archivos
 function handleFileUpload(event) {
   const files = event.target.files
   if (!files || files.length === 0) return
 
   const newFiles = Array.from(files)
   selectedFiles.value = selectedFiles.value.concat(newFiles)
   const newPreviews = newFiles.map(file => URL.createObjectURL(file))
   selectedPreviews.value = selectedPreviews.value.concat(newPreviews)
   event.target.value = ''
 }
 
 // Funciones para la zona de drop con drag & drop
 function onDragOverFiles() {
   isDragging.value = true
 }
 
 function onDragLeaveFiles() {
   isDragging.value = false
 }
 
 function handleDropFiles(event) {
   isDragging.value = false
   const files = event.dataTransfer.files
   if (!files || files.length === 0) return
 
   const newFiles = Array.from(files)
   selectedFiles.value = selectedFiles.value.concat(newFiles)
   const newPreviews = newFiles.map(file => URL.createObjectURL(file))
   selectedPreviews.value = selectedPreviews.value.concat(newPreviews)
 }
 
 // Envía cada imagen de forma secuencial y al finalizar recarga la página
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
 
       const cartaData = {
         index: images.value.length,
         img_identifier: image_identifier,
         carta_id: route.params.carta_id
       }
       const created = await createcarta(cartaData)
       images.value.push({
         id: created.id ?? Date.now() + Math.random(),
         index: created.index ?? images.value.length - 1,
         src: created.img_identifier,
         title: file.name
       })
     }
     // Limpieza de estado
     selectedFiles.value = []
     selectedPreviews.value = []
     isAddImageDialogOpen.value = false
   } catch (error) {
     console.error('Error al subir las imágenes o crear cartas:', error)
     alert('Hubo un error al subir las imágenes.')
   } finally {
     uploading.value = false
     location.reload() // Recarga la página al finalizar
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
   /* aspect-ratio: 19 / 9; */
   object-fit: contain;
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
 