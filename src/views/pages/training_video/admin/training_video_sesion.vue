<template>
    <div class="container py-2 px-2">
  
      <!-- Dialogs -->
      <dialogToAddSesion @update="updateSesions" />
      <dialogToDeletesesion @update="updateSesions" />
      <dialogToEditSesion @update="updateSesions" />
  
      <!-- HERO / HEADER -->
      <section class="page-hero">
        <div class="page-hero__content">
          <div class="title-wrap">
            <i class="fa-solid fa-school"></i>
            <h2><b>Administrar Escuelas</b></h2>
            <Tag class="ml-2" severity="success">{{ videos.length }} activas</Tag>
          </div>
  
          <div class="actions-wrap">
            <span class="p-input-icon-left search-input">
              <i class="pi pi-search" />
              <InputText
                v-model="filters.global.value"
                placeholder="Buscar escuela, creador, fecha…"
              />
            </span>
  
            <Button
              label="Nueva Escuela"
              icon="fa-solid fa-plus"
              severity="help"
              @click="dialogStore.addSesion = true"
            />
          </div>
        </div>
        <div class="hero-accent" />
      </section>
  
      <!-- VIDEO PLAYER -->
      <Dialog
        v-model:visible="playVisible"
        class="p-0 m-3 modern-dialog"
        header="Reproductor de video"
        modal
        :style="{ width: 'min(90vw, 64rem)' }"
      >
        <div class="video-frame">
          <iframe
            class="p-0"
            width="100%"
            style="aspect-ratio: 16 / 9;"
            :src="formattedVideoLink(videoToSee.video_link)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </Dialog>
  
      <!-- TABLE -->
      <div class="table-card shadow-2">
        <DataTable
          :value="videos"
          dataKey="sesion_id"
          :paginator="true"
          :rows="15"
          :rowsPerPageOptions="[5, 10, 25, 100]"
          scrollable
          showGridlines
          scrollHeight="65vh"
          stripedRows
          tableStyle="min-width: 64rem;"
          v-model:filters="filters"
          filterDisplay="menu"
          :globalFilterFields="['sesion_name','description','created_date','created_time','creator_name','sesion_id']"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} escuelas"
          class="col-12 m-auto"
        >
          <template #empty>
            <div class="empty-state">
              <i class="fa-solid fa-graduation-cap bounce" />
              <p><b>Sin escuelas todavía</b></p>
              <p class="muted">Crea tu primera escuela para comenzar.</p>
              <Button
                label="Crear escuela"
                icon="fa-solid fa-plus"
                severity="success"
                @click="dialogStore.addSesion = true"
              />
            </div>
          </template>
  
          <Column header="ID" field="sesion_id" class="px-4" style="min-width: 8rem;">
            <template #body="{ data }">
              <Tag severity="info">#{{ data.sesion_id }}</Tag>
            </template>
          </Column>
  
          <Column header="Nombre" field="sesion_name" class="px-4" style="min-width: 22rem;">
            <template #body="{ data }">
              <div class="name-cell">
                <h6 class="name-text">
                  {{ (data.sesion_name || '').toLowerCase() }}
                </h6>
                <div class="name-actions">
                  <Button
                    text
                    severity="help"
                    icon="fa-solid fa-eye"
                    @click="navigate_to_sesion(data.sesion_name, data.sesion_id)"
                    v-tooltip.bottom="'Ver escuela'"
                  />
                  <Button
                    text
                    icon="fa-solid fa-pencil"
                    @click="openToEdit(data)"
                    v-tooltip.bottom="'Editar'"
                  />
                  <Button
                    text
                    severity="danger"
                    icon="fa-solid fa-trash"
                    @click="openToDelete(data)"
                    v-tooltip.bottom="'Eliminar'"
                  />
                  <Button
                    v-if="data.video_link"
                    text
                    severity="success"
                    icon="fa-solid fa-play"
                    @click="openVideo(data)"
                    v-tooltip.bottom="'Reproducir video'"
                  />
                </div>
              </div>
            </template>
          </Column>
  
          <Column header="Descripción" field="description" class="px-4" style="min-width: 28rem;">
            <template #body="{ data }">
              <div class="desc-cell">
                <i class="fa-regular fa-message" />
                <span class="truncate">
                  {{ (data.description || '').toLowerCase() }}
                </span>
              </div>
            </template>
          </Column>
  
          <Column header="Fecha & Hora" class="px-4" style="min-width: 16rem;">
            <template #body="{ data }">
              <div class="datetime-stack">
                <Tag severity="warning" class="mb-2">
                  <i class="fa-regular fa-calendar-days mr-2" />
                  {{ data.created_date }}
                </Tag>
                <Tag severity="secondary">
                  <i class="fa-regular fa-clock mr-2" />
                  {{ data.created_time }}
                </Tag>
              </div>
            </template>
          </Column>
  
          <Column header="Creador" field="creator_name" class="px-4" style="min-width: 16rem;">
            <template #body="{ data }">
              <div class="creator-cell">
                <span class="avatar">{{ initials(data.creator_name) }}</span>
                <h6>{{ data.creator_name }}</h6>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
  
      <!-- FAB on mobile -->
      <Button
        class="fab"
        icon="fa-solid fa-plus"
        label="Nueva"
        severity="help"
        @click="dialogStore.addSesion = true"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import router from '../../../../router'
  
  import dialogToAddSesion from './dialogs/sesion/dialogToAddSesion.vue'
  import dialogToDeletesesion from './dialogs/sesion/dialogToDeletesesion.vue'
  import dialogToEditSesion from './dialogs/sesion/dialogToEditSesion.vue'
  
  import { useDialogStore } from '@/store/trainingVideo/dialogs'
  import { useDataToInteract } from '@/store/trainingVideo/dataToInteract'
  import { videoSequenceService } from '../../../../service/video_training/videoTrainingService'
  
  import { FilterMatchMode } from 'primevue/api'
  
  const dialogStore = useDialogStore()
  const dataToInteractStore = useDataToInteract()
  
  const route = useRoute()
  
  const videos = ref([])
  const playVisible = ref(false)
  const videoToSee = ref({})
  
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  
  const updateSesions = async () => {
    videos.value = await videoSequenceService.getSesions()
  }
  
  const openToDelete = (data) => {
    dataToInteractStore.sesionToDelete = { ...data }
    dialogStore.deleteSesion = true
  }
  
  const openToEdit = (data) => {
    dataToInteractStore.sesionToUpdate = { ...data }
    dialogStore.updateSesion = true
  }
  
  const navigate_to_sesion = (sesion_name, sesion_id) => {
    router.push({
      name: 'video-training-sequence-admin',
      params: {
        sesion_id,
        sesion_name
      }
    })
  }
  
  const formattedVideoLink = (link = '') => link.replace('watch?v=', 'embed/')
  const openVideo = (video) => {
    videoToSee.value = video
    playVisible.value = true
  }
  
  const initials = (name = '') =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('')
  
  onMounted(async () => {
    updateSesions()
  })
  </script>
  
  <style scoped>
  /* ---------- Layout ---------- */
  .container {
    margin-top: 3rem;
  }
  
  /* ---------- Hero ---------- */
  .page-hero {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #5b8cff, #9a6bff 55%, #ff7ac3);
    color: white;
  }
  
  .page-hero__content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1rem;
  }
  
  .title-wrap {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  
  .title-wrap i {
    font-size: 1.35rem;
  }
  
  .actions-wrap {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  
  .search-input :deep(input) {
    width: clamp(16rem, 38vw, 28rem);
    border-radius: .75rem;
    border: none;
  }
  
  .hero-accent {
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,.55), transparent);
  }
  
  /* ---------- Card/Table ---------- */
  .table-card {
    background: white;
    border-radius: 1rem;
    padding: .25rem .25rem 1rem;
    overflow: hidden;
  }
  
  :deep(.p-datatable) {
    border-radius: 1rem;
  }
  
  :deep(.p-datatable .p-datatable-thead > tr > th) {
    background: #f8f9ff;
    color: #2b2b2b;
    font-weight: 700;
    border: none;
  }
  
  :deep(.p-datatable .p-datatable-tbody > tr) {
    transition: transform .08s ease, box-shadow .12s ease, background-color .15s ease;
  }
  
  :deep(.p-datatable .p-datatable-tbody > tr:hover) {
    background: #fafaff;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(87, 98, 255, .08);
  }
  
  /* ---------- Cells ---------- */
  .name-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
  }
  
  .name-text {
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    color: #1f2937;
  }
  
  .name-actions :deep(.p-button) {
    margin-left: .25rem;
  }
  
  .desc-cell {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #374151;
  }
  
  .truncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .datetime-stack {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  
  .creator-cell {
    display: flex;
    align-items: center;
    gap: .6rem;
  }
  
  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 800;
    font-size: .9rem;
    color: white;
    background: linear-gradient(135deg, #7c3aed, #06b6d4);
  }
  
  /* ---------- Dialog ---------- */
  .video-frame {
    width: 100%;
    border-radius: .75rem;
    overflow: hidden;
  }
  
  .modern-dialog :deep(.p-dialog-header) {
    border-bottom: 0;
    background: linear-gradient(135deg, #5b8cff, #9a6bff);
    color: white;
  }
  
  .modern-dialog :deep(.p-dialog-content) {
    background: #ffffff;
  }
  
  /* ---------- Empty ---------- */
  .empty-state {
    padding: 4rem 1rem;
    text-align: center;
    color: #4b5563;
  }
  
  .empty-state i {
    font-size: 3rem;
    margin-bottom: .5rem;
    opacity: .8;
  }
  
  .muted {
    color: #6b7280;
    margin-bottom: 1rem;
  }
  
  @keyframes bounceKey {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  .bounce {
    animation: bounceKey 1.4s ease-in-out infinite;
  }
  
  /* ---------- FAB ---------- */
  .fab {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    border-radius: 999px;
    box-shadow: 0 6px 20px rgba(0,0,0,.15);
  }
  
  /* ---------- Misc ---------- */
  h6 {
    text-transform: uppercase;
    overflow: hidden;
    margin: 0;
  }
  
  .date { min-width: max-content; }
  
  /* Responsive tweaks */
  @media (max-width: 768px) {
    .actions-wrap {
      width: 100%;
      justify-content: space-between;
    }
    .table-card { padding: 0; }
  }
  </style>
  