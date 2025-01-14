<script setup>
import Dock from 'primevue/dock';
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import ShowFiles from '@/views/pages/ShowFiles.vue';
import { useDocumentsStore } from '../../store/documentos';
import { siteService } from '../../service/siteService';
import router from '../../router';

import {
    sitesDropValues,
    GenderDropValues,
    PositionDropValues,
    maritalStatusDropValues,
    epsDropValues,
    educationLevelDropValues,
    employmentContractTypeDropValues,
    pantSizesDropValues,
    shirtSizesDropValues,
    bloodTypesDropValues,
    housingTypesDropValues,
    statusDropValues,
    vehicleTypesDropValues,
    findSiteById,
    curentSite,
    getSite
} from '@/service/dropDownAux';
import { URI } from '../../service/conection';

const sites = ref([]);
const store = useDocumentsStore();
const site = ref({});
const route = useRoute();
const currentSite = ref({});
const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const idFrozen = ref(false);
const products = ref(null);
const expandedRows = ref([]);

onMounted(async () => {
    const data = await siteService.getSites();
    sites.value = data;
    if (!store.currentSite?.site_id) {
        store.setSite(data[0]);
    }
    currentSite.value = await siteService.getSiteById(route.params.site_id);
});

watch(() => route.params.site_id, () => {
    const storedSiteData = localStorage.getItem('currentSiteFiles');
    if (storedSiteData) {
        currentSite.value = JSON.parse(storedSiteData);
    }
});

const navigateToSite = (siteData) => {
    localStorage.setItem('currentSiteFiles', JSON.stringify(siteData));
    router.push(`/site/${siteData.site_id}/documentos`);
    store.setSite(siteData);
};
</script>

<template>
    <div class="mx-auto md:p-5 px-2 main-container">
        <div class="text-4xl text-center col-12 m-auto p-0 header">
            <div class="header-bar-left"></div>

            <div class="header-middle">
                <p class="p-0 header-title">{{ store.currentSite.site_name }}</p>
            </div>

            <div class="header-bar-right"></div>
        </div>

        <div class="grid" style="">
            <div class="mb-5 m-auto col-6 sites-container">
                <div class="p-3 sites-list">
                    <div
                        class="p-1 site-item"
                        v-for="site in sites"
                        :key="site.site_id"
                        :class="{ 'site-item-active': route.params.site_id == site.site_id }"
                    >
                        <div @click="navigateToSite(site)" class="site-link">
                            <img
                                class="site-image"
                                :src="`${URI}/read-product-image/96/site-${site.site_id}`"
                                alt="Site Image"
                            />
                            <p class="site-name">{{ site.site_name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-auto p-0 col-12 router-view-container">
                <img
                    v-if="!$route.path.includes('recibos') && !$route.path.includes('documentos')"
                    class="col-12 background-image"
                    src="/images/files.jpg"
                    alt="Archivos"
                />

                <RouterView></RouterView>
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

.sites-container {
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
}

.sites-list {
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 1rem;
}

.site-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 6px solid red; */
    transition: box-shadow 0.3s ease, border 0.3s ease;
}

.site-item-active {
    box-shadow: 0 6px 0 red;
    border: none;
}

.site-link {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.site-image {
    width: 100%;
    min-width: 5rem;
    border-radius: 0.5rem;
    height: 4rem;
    object-fit: cover;
}

.site-name {
    font-weight: bold;
    min-width: max-content;
    text-transform: uppercase;
}

.router-view-container {
    max-width: 1024px;
}

.background-image {
    opacity: 0.3;
    height: 60vh;
    object-fit: cover;
}
</style>
