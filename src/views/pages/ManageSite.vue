<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';

import { useDocumentsStore } from '../../store/documentos';
import { siteService } from '../../service/siteService';
import { URI } from '../../service/conection';

import Skeleton from 'primevue/skeleton';
import InputText from 'primevue/inputtext';

/* --------- state --------- */
const sites = ref([]);
const loading = ref(true);
const search = ref('');

const store = useDocumentsStore();
const route = useRoute();
const currentSite = ref({});

/* --------- computed --------- */
const filteredSites = computed(() => {
  if (!search.value?.trim()) return sites.value;
  const q = search.value.toLowerCase();
  return sites.value.filter(s => String(s.site_name || '').toLowerCase().includes(q));
});

const isActive = (siteId) => String(route.params.site_id) === String(siteId);

/* --------- helpers --------- */
const imgSrcForSite = (id) => `${URI}/read-product-image/96/site-${id}`;
const onImgError = (e) => {
  e.target.src = '/images/files.jpg'; // fallback genérico
};

const ensureRouteHasSite = async () => {
  if (!sites.value.length) return;
  const routeSiteId = route.params.site_id;
  if (!routeSiteId) {
    // No hay site en la ruta, redirige al primero
    await router.replace(`/site/${sites.value[0].site_id}/documentos`);
  }
};

const ensureStoreCurrentSite = async (siteId) => {
  if (!siteId) return;
  // Si el store no coincide con la ruta, sincroniza
  if (!store.currentSite?.site_id || String(store.currentSite.site_id) !== String(siteId)) {
    const s = await siteService.getSiteById(siteId);
    store.setSite(s);
  }
  currentSite.value = store.currentSite;
};

/* --------- navigation --------- */
const navigateToSite = async (siteData) => {
  store.setSite(siteData);
  await router.push(`/site/${siteData.site_id}/documentos`);
};

/* --------- keyboard a11y --------- */
const onSiteKeydown = (e, siteData) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navigateToSite(siteData);
  }
};

/* --------- lifecycle --------- */
onMounted(async () => {
  loading.value = true;
  try {
    sites.value = await siteService.getSites();
    await ensureRouteHasSite();
    await ensureStoreCurrentSite(route.params.site_id || sites.value[0]?.site_id);
  } finally {
    loading.value = false;
  }
});

watch(
  () => route.params.site_id,
  async (newId) => {
    await ensureStoreCurrentSite(newId);
  }
);
</script>

<template>
  <div class="mx-auto md:p-5 px-2 main-container">
    <!-- Header -->
    <div class="text-4xl text-center col-12 m-auto p-0 header">
      <div class="header-bar-left"></div>

      <div class="header-middle">
        <p class="p-0 header-title">
          {{ store.currentSite?.site_name || 'SEDE' }}
        </p>
      </div>

      <div class="header-bar-right"></div>
    </div>

    <!-- Buscador de sedes -->
    <div class="search-wrap">
      <InputText
        class="w-full md:w-30rem"
        v-model="search"
        placeholder="Buscar sede..."
      />
    </div>

    <div class="grid">
      <!-- Carrusel de sedes -->
      <div class="mb-5 m-auto col-12 sites-container">
        <div class="p-3 sites-list" role="list" aria-label="Lista de sedes">
          <!-- Skeletons mientras carga -->
          <template v-if="loading">
            <div v-for="i in 6" :key="i" class="site-item">
              <Skeleton height="4rem" width="8rem" class="mb-2 border-round" />
              <Skeleton height="1.2rem" width="6rem" class="border-round" />
            </div>
          </template>

          <template v-else>
            <div
              class="p-1 site-item"
              v-for="site in filteredSites"
              :key="site.site_id"
              :class="{ 'site-item-active': isActive(site.site_id) }"
              role="listitem"
            >
              <div
                class="site-link"
                tabindex="0"
                role="button"
                :aria-pressed="isActive(site.site_id)"
                @click="navigateToSite(site)"
                @keydown="onSiteKeydown($event, site)"
              >
                <img
                  class="site-image"
                  :src="imgSrcForSite(site.site_id)"
                  loading="lazy"
                  decoding="async"
                  :alt="`Imagen de ${site.site_name}`"
                  @error="onImgError"
                />
                <p class="site-name">{{ site.site_name }}</p>
              </div>
            </div>

            <div v-if="!filteredSites.length" class="empty-sites">
              No se encontraron sedes para “{{ search }}”.
            </div>
          </template>
        </div>
      </div>

      <!-- Contenido enrutado -->
      <div class="m-auto p-0 col-12 router-view-container">
        <img
          v-if="!$route.path.includes('recibos') && !$route.path.includes('documentos')"
          class="col-12 background-image"
          src="/images/files.jpg"
          alt="Archivos"
          loading="lazy"
          decoding="async"
        />

        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  max-width: 1920px;
  margin-top: 3rem;
  min-height: calc(100vh - 9rem);
}

.header {
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
}
.header-bar-left {
  background-color: #a855f7;
  height: 0.5rem;
  border-radius: 0 1rem 1rem 0;
  width: 100%;
}
.header-middle {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.header-title {
  min-width: max-content;
  text-transform: uppercase;
}
.header-bar-right {
  background-color: #f59e0b;
  height: 0.5rem;
  border-radius: 0 1rem 1rem 0;
  width: 100%;
}

/* buscador */
.search-wrap {
  display: flex;
  justify-content: center;
  margin: 1rem 0 0.5rem 0;
}

/* sedes */
.sites-container {
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}
.sites-list {
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: .25rem;
}
.site-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.25s ease, border 0.25s ease, transform 0.1s ease;
}
.site-item-active {
  box-shadow: 0 6px 0 var(--primary-color);
}
.site-link {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
}
.site-link:focus-visible {
  box-shadow: 0 0 0 3px rgba(59,130,246,.45);
  border-radius: .5rem;
}
.site-image {
  width: 100%;
  min-width: 8rem;
  border-radius: 0.5rem;
  height: 4rem;
  object-fit: cover;
}
.site-name {
  font-weight: bold;
  min-width: max-content;
  text-transform: uppercase;
  margin-top: .25rem;
}

.empty-sites {
  font-size: .95rem;
  opacity: .8;
  display: flex;
  align-items: center;
}

/* router view */
.router-view-container {
  max-width: 1024px;
}
.background-image {
  opacity: 0.3;
  height: 60vh;
  object-fit: cover;
}
</style>
