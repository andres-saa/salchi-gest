<template>
    <div class="container py-2 px-2">
      <!-- Confirmar marcar como completada -->
      <Dialog
        header="Completar clase"
        v-model:visible="visible_to_delete"
        modal
        :style="{ width: '30rem', textTransform: 'capitalize' }"
        class="modern-dialog"
      >
        <h5 class="p-0 m-0">
          Esta acción no se puede deshacer. ¿Seguro que deseas marcar el video
          <b>{{ videoToMark.video_name }}</b> como completado?
        </h5>
  
        <template #footer>
          <div style="display: flex; justify-content: end; width: 100%">
            <Button
              @click="visible_to_delete = false"
              severity="help"
              label="No, no lo he visto aún"
            />
            <Button
              @click="markvideo(videoToMark)"
              text
              severity="danger"
              label="Sí, marcar como visto"
            />
          </div>
        </template>
      </Dialog>
  
      <!-- Player -->
      <Dialog
        v-model:visible="playVisible"
        class="p-0 m-3 modern-dialog"
        header="Reproductor de video"
        modal
        :style="{ width: 'min(90vw, 64rem)' }"
      >
        <div style="height: 100%">
          <iframe
            class="p-0"
            width="100%"
            style="aspect-ratio: 16 / 9"
            :src="formattedVideoLink(videoToSee.video_link)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </Dialog>
  
      <!-- HERO con progreso -->
      <section class="page-hero">
        <div class="page-hero__content">
          <div class="title-wrap">
            <i class="fa fa-book"></i>
            <h2 class="uppercase"><b>{{ route.params.sequence_name }}</b></h2>
          </div>
  
          <div class="stats-wrap">
            <Tag severity="success" class="ml-2">
              {{ completedCount }} / {{ totalCount }} completadas
            </Tag>
            <div class="progress-wrap">
              <ProgressBar :value="progressPct" />
              <small class="muted">{{ progressPct }}%</small>
            </div>
          </div>
        </div>
        <div class="hero-accent" />
      </section>
  
      <!-- Tabla -->
      <div class="table-card shadow-2">
        <DataTable
          :value="videos"
          dataKey="video_id"
          :paginator="true"
          :rows="15"
          :rowsPerPageOptions="[5, 10, 25, 100]"
          scrollable
          showGridlines
          scrollHeight="65vh"
          stripedRows
          tableStyle="min-width: 64rem"
          v-model:filters="filters"
          filterDisplay="menu"
          :globalFilterFields="[
            'video_name',
            'description',
            'created_date',
            'created_time',
            'creator_name',
            'video_id'
          ]"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} clases"
          class="col-12 m-auto"
        >
          <template #header>
            <div class="grid p-2 header-row">
              <h4 class="px-2">
                <i class="fa fa-book"></i> <b>Clases</b>
              </h4>
  
              <span class="p-input-icon-left search-input">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters.global.value"
                  placeholder="Buscar clase, creador, fecha…"
                />
              </span>
            </div>
          </template>
  
          <template #empty>
            <div class="empty-state">
              <i class="fa-solid fa-circle-play bounce" />
              <p><b>No hay clases aún</b></p>
              <p class="muted">Cuando el curso tenga clases, aparecerán aquí.</p>
            </div>
          </template>
  
          <Column header="Check" class="px-4" style="min-width: 7rem">
            <template #body="{ data }">
              <Checkbox
                :disabled="videoChecks[data.video_id]"
                @change="validate(data, videoChecks[data.video_id])"
                binary
                v-model="videoChecks[data.video_id]"
              />
            </template>
          </Column>
  
          <Column header="ID" class="px-4" field="video_id" style="min-width: 8rem">
            <template #body="{ data }">
              <Tag severity="info">#{{ data.video_id }}</Tag>
            </template>
          </Column>
  
          <Column header="Nombre" class="px-4" field="video_name" style="min-width: 22rem">
            <template #body="{ data }">
              <div class="name-cell">
                <h6 class="name-text">{{ data.video_name }}</h6>
                <Tag
                  v-if="videoChecks[data.video_id]"
                  severity="success"
                  class="ml-2"
                >
                  Completada
                </Tag>
              </div>
  
              <div class="name-actions">
                <Button text icon="fa-solid fa-play" @click="openVideo(data)" v-tooltip.bottom="'Reproducir'" />
                <Button text icon="fa-solid fa-ellipsis-vertical" />
              </div>
            </template>
          </Column>
  
          <Column header="Descripción" class="px-4" field="description" style="min-width: 28rem">
            <template #body="{ data }">
              <div class="desc-cell">
                <i class="fa-regular fa-message" />
                <span class="truncate">{{ data.description }}</span>
              </div>
            </template>
          </Column>
  
          <Column header="Miniatura" class="px-4" style="min-width: 16rem">
            <template #body="{ data }">
              <div class="thumb" @click="openVideo(data)">
                <img
                  class="thumb-img"
                  :src="urlService.getThumbnail(data.video_link)"
                  alt="Miniatura"
                />
                <div class="thumb-overlay">
                  <i class="fa-solid fa-play" />
                </div>
              </div>
            </template>
          </Column>
  
          <Column header="Fecha" class="px-4" field="created_date" style="min-width: 12rem">
            <template #body="{ data }">
              <h6 class="date">{{ data.created_date }}</h6>
            </template>
          </Column>
  
          <Column header="Hora" class="px-4" field="created_time" style="min-width: 10rem">
            <template #body="{ data }">
              <h6 class="date">{{ data.created_time }}</h6>
            </template>
          </Column>
  
          <Column header="Creador" class="px-4" field="creator_name" style="min-width: 16rem">
            <template #body="{ data }">
              <div class="creator-cell">
                <span class="avatar">{{ initials(data.creator_name) }}</span>
                <h6>{{ data.creator_name }}</h6>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { loginStore } from '@/store/user.js'
  import { FilterMatchMode } from 'primevue/api'
  
  import { videoSequenceService } from '../../../service/video_training/videoTrainingService'
  import { urlService } from '../../../service/video_training/urlService'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI } from '../../../service/conection'
  
  const user = loginStore()
  const route = useRoute()
  
  const playVisible = ref(false)
  const visible_to_delete = ref(false)
  
  const videos = ref([])
  const videoChecks = ref({})          // { [video_id]: boolean }
  const videoToSee = ref({})
  const videoToMark = ref({})
  
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  
  const formattedVideoLink = (link = '') => {
    const m = link.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)(?:\?.*)?/
    )
    return m?.[1] ? `https://www.youtube.com/embed/${m[1]}` : ''
  }
  
  const openVideo = (video) => {
    videoToSee.value = video
    playVisible.value = true
  }
  
  const markvideo = async (video) => {
    const data = {
      user_id: user.rawUserData.id,
      video_id: video.video_id
    }
    await fetchService.post(`${URI}/mark-video-user`, data, 'marcando video como visto')
    await update()
    visible_to_delete.value = false
  }
  
  const update = async () => {
    const sequence_id = route.params.sequence_id
    const student_id = user.rawUserData.id
    const list = await videoSequenceService.getVideosBySequenceIdAndStudentId(sequence_id, student_id)
  
    // Mapear checks por id
    const map = {}
    list.forEach((e) => { map[e.video_id] = !!e.video_user_mark })
    videoChecks.value = map
  
    videos.value = list
  }
  
  onMounted(async () => {
    await update()
  })
  
  const validate = (video, value) => {
    // Si el checkbox quedó en true (intenta marcar), pedimos confirmación y revertimos temporalmente
    visible_to_delete.value = true
    if (!value) return
    videoChecks.value[video.video_id] = false
    videoToMark.value = video
  }
  
  const initials = (name = '') =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('')
  
  // Progreso
  const totalCount = computed(() => videos.value.length)
  const completedCount = computed(() =>
    videos.value.reduce((acc, v) => acc + (videoChecks.value[v.video_id] ? 1 : 0), 0)
  )
  const progressPct = computed(() =>
    totalCount.value ? Math.round((completedCount.value * 100) / totalCount.value) : 0
  )
  </script>
  
  <style scoped>
  .container { margin-top: 3rem; }
  .uppercase { text-transform: uppercase; }
  
  /* ---------- Hero ---------- */
  .page-hero {
    position: relative; border-radius: 1rem; overflow: hidden; margin-bottom: 1rem;
    background: linear-gradient(135deg, #06b6d4, #7c3aed 55%, #ff7ac3); color: white;
  }
  .page-hero__content {
    display: flex; flex-wrap: wrap; gap: 1rem;
    align-items: center; justify-content: space-between;
    padding: 1.25rem 1rem;
  }
  .title-wrap { display: flex; align-items: center; gap: .75rem; }
  .stats-wrap { display: flex; align-items: center; gap: .75rem; }
  .progress-wrap { display: flex; align-items: center; gap: .5rem; min-width: 14rem; }
  .progress-wrap :deep(.p-progressbar) { width: 12rem; height: .75rem; border-radius: 999px; }
  .muted { opacity: .9; }
  .hero-accent { height: 6px; width: 100%; background: linear-gradient(90deg, rgba(255,255,255,.55), transparent); }
  
  /* ---------- Header row ---------- */
  .header-row {
    align-items: center; justify-content: space-between; display: flex; gap: 1rem;
  }
  .search-input :deep(input) {
    width: clamp(16rem, 38vw, 28rem); border-radius: .75rem; border: none;
  }
  
  /* ---------- Card/Table ---------- */
  .table-card { background: white; border-radius: 1rem; padding: .25rem .25rem 1rem; overflow: hidden; }
  :deep(.p-datatable) { border-radius: 1rem; }
  :deep(.p-datatable .p-datatable-thead > tr > th) {
    background: #f6f8ff; color: #2b2b2b; font-weight: 700; border: none;
  }
  :deep(.p-datatable .p-datatable-tbody > tr) {
    transition: transform .08s ease, box-shadow .12s ease, background-color .15s ease;
  }
  :deep(.p-datatable .p-datatable-tbody > tr:hover) {
    background: #fafaff; transform: translateY(-1px); box-shadow: 0 2px 8px rgba(87, 98, 255, .08);
  }
  
  /* ---------- Cells ---------- */
  .name-cell { display: flex; align-items: center; gap: .5rem; }
  .name-text { margin: 0; color: #1f2937; }
  .name-actions :deep(.p-button) { margin-right: .25rem; }
  
  .desc-cell { display: flex; align-items: center; gap: .5rem; color: #374151; }
  .truncate { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  
  .creator-cell { display: flex; align-items: center; gap: .6rem; }
  .avatar {
    width: 2rem; height: 2rem; border-radius: 50%;
    display: grid; place-items: center; font-weight: 800; font-size: .9rem; color: white;
    background: linear-gradient(135deg, #7c3aed, #06b6d4);
  }
  
  .date { min-width: max-content; }
  h6 { margin: 0; text-transform: uppercase; overflow: hidden; }
  
  /* ---------- Thumbnail ---------- */
  .thumb {
    width: 9rem; aspect-ratio: 16 / 9; border-radius: .5rem; overflow: hidden; position: relative; cursor: pointer;
    box-shadow: 0 3px 10px rgba(0,0,0,.08); transition: transform .15s ease, box-shadow .15s ease;
  }
  .thumb:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 8px 20px rgba(0,0,0,.15); }
  .thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb-overlay {
    position: absolute; inset: 0; display: grid; place-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.35));
    opacity: 0; transition: opacity .18s ease;
  }
  .thumb:hover .thumb-overlay { opacity: 1; }
  .thumb-overlay i { color: white; font-size: 1.1rem; }
  
  /* ---------- Dialog (moderno) ---------- */
  .modern-dialog :deep(.p-dialog-header) {
    border-bottom: 0; background: linear-gradient(135deg, #06b6d4, #7c3aed); color: white;
  }
  .modern-dialog :deep(.p-dialog-content) { background: #ffffff; }
  
  /* ---------- Empty ---------- */
  .empty-state { padding: 4rem 1rem; text-align: center; color: #4b5563; }
  .empty-state i { font-size: 3rem; margin-bottom: .5rem; opacity: .8; }
  @keyframes bounceKey { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
  .bounce { animation: bounceKey 1.4s ease-in-out infinite; }
  </style>
  