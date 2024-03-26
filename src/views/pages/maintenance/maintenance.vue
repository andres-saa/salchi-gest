<template>
    <div class="p-0 m-auto" style="max-width: 1280px">
        <p class="mb-2 my-1 text-4xl text-center px-4" style="font-weight: bold; text-transform: capitalize">
            <i class="fa-solid fa-person-chalkboard"></i>
            Mantenimientos
        </p>

        <!-- Mnatenimientos -->

        <!-- {{ ruta.fullPath }} -->

        <div class="grid p-0 mx-0 mt-6 col-12 xl:col-8 md:col-10 my-4 p-1" style="">

            <div class="col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0" style="display: flex; align-items: center;">
                <span class=" p-0 col-2 mr-4"><b>SEDE</b> </span>
                <Dropdown v-model="store.currentSite" class="col-9 p-0" :options="sites" optionLabel="site_name"> </Dropdown>
            </div>


            <div class="col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0">
                <router-link to="/maintenance/equipment">
                    <Button :outlined="!ruta.fullPath.includes('equipment')" severity="warning" style="width: 100%" class="" label="equipos"></Button>
                </router-link>
            </div>
            <div class="col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0">
                <router-link to="/maintenance/maintance-list">
                    <Button :outlined="!ruta.fullPath.includes('maintance-list')" severity="help" style="width: 100%" class="" label="mantenimientos"></Button>
                </router-link>
            </div>
        </div>

        <router-view class="p-0 m-0"> </router-view>
    </div>
</template>


<script setup>
import { isPast } from 'date-fns';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { siteService } from '../../../service/siteService';
import { maintenanceStore } from '../../../store/maintenance';

const sites = ref([]);
const currentSite = ref({});
const store = maintenanceStore();

const route = useRouter();
const ruta = route.currentRoute;

onMounted(async () => {
    sites.value = await siteService.getSites();
    if (!store.currentSite?.site_id) {
        store.setCurrentSite(sites.value[0]);
    }
});
</script>