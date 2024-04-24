<script setup>

import Dock from 'primevue/dock';
import { onMounted, onBeforeMount, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import ShowFiles from '@/views/pages/ShowFiles.vue'
import {siteService} from '@/service/siteService.js'
// /home/ludi/projects/salchimonster/salchimonster_frontend/src/views/pages/ShowUser.vue
// import { ref, onBeforeMount } from 'vue';
import { useDirectoryStore } from '../../store/directorio';

// import { useRouter } from 'vue-router';
// import Router from '@/router/index.js';
const sites = ref([])
const store = useDirectoryStore()
onMounted( () => {

siteService.getSites().then(data => {
    sites.value = data
    if(!store.currentSite?.site_id)
    store.setSite(data[0])
} )

})



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
// import Showrecibos from './Showrecibos.vue';
import router from '../../router';


const site = ref({})
const route = useRoute()
const currentSite = ref({})
const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const idFrozen = ref(false);
const products = ref(null);
const expandedRows = ref([]);

onMounted(() => {
    getSite(route.params.site_id)
    // console.log(curentSite)
});

// onMounted(() => {
//     const storedSiteData = localStorage.getItem('currentSiteFiles');
//     if (storedSiteData) {
//         currentSite.value = JSON.parse(storedSiteData);
//     }
// });


watch( () => route.params.site_id, () => {
    const storedSiteData = localStorage.getItem('currentSiteFiles');
    if (storedSiteData) {
        currentSite.value = JSON.parse(storedSiteData);
    }
});

const navigateToSite = (siteData) => {
    localStorage.setItem('currentSiteFiles', JSON.stringify(siteData));
    router.push(`/site/${siteData.site_id}/documentos`);
    store.setSite(siteData)
};
</script>

<template>

<div class=" m-auto md:p-5 md:shadow-5" style="max-width: 1024px;">
    <div class=" text-4xl text-center col-12 m-auto p-0"
        style="font-weight: bold; display: flex;align-items: center; gap: 1rem;max-width: 1024px;">

        <div style="background-color: #A855F7; height: 0.5rem;border-radius: 0 1rem 1rem 0; width: 100%;" />

        <div style="display: flex; align-items: center;gap: 1rem;">
           
        <p class="p-0" style="min-width: max-content;text-transform: uppercase;" > {{ store.currentSite.site_name }}
            
        </p>
        </div>

        <div style="background-color: #F59E0B; height: 0.5rem;border-radius: 0 1rem 1rem 0; width: 100%;" />

    </div>


    <div class=" mb-5 m-auto  " style="width: 100%;height: 100%;display: flex;max-width: 1024px;"> 

        <!-- {{ store }} -->
            <div class="p-3" style="display: flex;width: 100%; overflow-x: auto;gap: 1rem; ">
                <div class="p-1" v-for="site in sites"  style="display: flex;flex-direction: column; justify-content: center; align-items: center;" :style="route.params.site_id == site.site_id? 'box-shadow:0 6px 0 red':' 6px solid red'">
                    <div @click="navigateToSite(site)" style="cursor: pointer;display: flex;flex-direction: column; align-items: center;" >
                        <img style="width:100%;min-width: 5rem; border-radius: 0.5rem; height: 4rem; object-fit: cover;"  :src="`${URI}/read-product-image/96/site-${site.site_id}`" />
                    <p style="font-weight: bold; min-width: max-content; text-transform: uppercase;"> {{site.site_name}}</p>
                    </div>
 
                    
                </div>
            </div>
           
            </div>


    <!-- <div 
        style="z-index: 99; max-width: 1024px;  display: flex;; align-items: center; justify-content: space-between; "
        class="col-12  p-0 m-auto">

        <div class="col-12 md:col-6 p-0" style="min-width: max-content;max-width: 40rem; display: flex;gap: 1rem;">


            <RouterLink :to="`/site/${route.params.site_id}/documentos`" style="width: 100%">
                <Button size="small" class=" mr-3 p-button-help center   " style="font-weight: bold;width: 100%" label="DOCUMENTOS"> </Button>

            </RouterLink>

            <RouterLink :to="`/site/${route.params.site_id}/recibos`" style="width: 100%">
                <Button size="small" class="p-button-warning" style="font-weight: bold;width: 100%" label="RECIBOS"> </Button>
            </RouterLink>

        </div>
 




    </div> -->
    <div class="grid m-auto p-0 col-12" style="max-width: 1024px;">

        <img v-if="!$route.path.includes('recibos') && !$route.path.includes('documentos')" class="col-12"
            style="opacity: 0.3;position: ; height: 60vh; object-fit: cover;" src="/images/files.jpg" alt="">

        <!-- {{ route.path }} -->
        <RouterView>

        </RouterView>



    </div>

</div>



</template>



<style lang="scss" scoped></style>
