<template>
    <Dialog class="mx-2" v-model:visible="showDateDialog" modal header="Periodo" :style="{ width: '25rem' }">
        <div class="grid">
            <div class="col-12 px-0 mx-0">
                <!-- Botones para selección rápida de fechas -->
                <Button text label="Hoy" @click="setDateRange(0)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Ayer" @click="setDateRange(1)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Últimos 7 días" @click="setDateRange(7)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Últimos 14 días" @click="setDateRange(14)" class="p-button-text col-12 p-1" />
                <Button text label="Últimos 28 días" @click="setDateRange(28)" class="p-button-text col-12 p-0" />
            </div>

            <!-- <Divider></Divider> -->
            <div class="col-12 " style="display: flex; flex-direction: column;">


                <span class="text-l" style="font-weight: bold;">Desde </span>
                <Calendar style="min-width: max-content;" v-model="TempStartDate" />

            </div>

            <!-- <Divider></Divider> -->

            <div class="col-12 " style=" display: flex;flex-direction: column;">
                <span style="font-weight: bold; " class="text-l">Hasta </span>
                <Calendar style="min-width: max-content;" v-model="TempEndDate" showWeek />

            </div>


            <div class="col-12 p-0" style="display: flex; justify-content: center;">
                <div class="col-12" style="display: flex; justify-content: center;">
                    <Button @click="() => {
                        setDateRangeDirect(TempStartDate, TempEndDate);
                        showDateDialog = false;



                    }">Aplicar</Button>
                </div>
            </div>


        </div>
    </Dialog>

    <!-- {{ invetnoryDailyReports }} -->
    <div class=" m-auto" style="max-width: 900px;">
        <div class="grid mx-0 mt-4 ">

            
            

            <div class="col-12 p-2" style="display: flex; gap:1rem;justify-content:center;align-items:center">
                <span class="text-xl" > <b>Periodo</b></span>
                <InputText class="" @click="showDateDialog = true" style="height: 2.7rem;"
                    :value="`${formatDate(startDate)}  |  ${formatDate(endDate)}`" placeholder="periodo" />
                <!-- {{ dateRange }} -->

                <Button @click="getFiltered" icon="pi pi-search" severity="help" class="text-center p-0 col-12  md:p-0"
                    style="height: 2.5rem;width:min-content;aspect-ratio:  1 / 1;font-weight: bold; border-radius: 50%; display: flex;justify-content:center ; "></Button>

            </div>


        </div>
    </div>


<div class="mt-3" style="min-height:20vh; display: flex; justify-content:center;align-items:center">


    <DataTable style="max-width: 900px;"  v-model:filters="filters" class="col-12 m-auto" :value="invetnoryDailyReports" tableStyle="min-width: 50rem;">
        <template #header>
          
            <div style="display: flex;justify-content:space-between;align-items:center">
                <span class="text-xl"> Mis reportes de inventario</span>
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />

            </div>
        </template>
        <Column class="py-1" field="daily_inventory_id" header="ID"></Column>
        <Column class="py-1" field="employer_name" header="Responsable"></Column>
        <Column class="py-1" field="site_name" header="Sede"></Column>
        <Column class="py-1" field="date" header="Fecha">
        <template #body="temp">
            {{ formatDateReverse(temp.data.date)}}
        </template>
        </Column>
        <Column class="py-1" field="date" header="Action">
            <template #body="data">

                <router-link :to="`/daily-inventory/daily-inventory-view/${data.data.daily_inventory_id}`">
                    <Button text icon="pi pi-eye" />
                </router-link>
           
                <Button severity="success" text icon="pi pi-download" />


            </template>
        </Column>
    </DataTable>

</div>


</template>



<script setup>
import { ref, onMounted } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { siteService } from '../../../../service/siteService.js'
import { dailyInventoryReportsService } from '../../../../service/inventory/dailyInventoryService.js'
import { loginStore } from '../../../../store/user.js'

const store = loginStore()
const sites = ref([])
const selectedSites = ref([])
const showDateDialog = ref(false)
const TempStartDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))
const TempEndDate = ref(new Date());
const startDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))
const endDate = ref(new Date());
const invetnoryDailyReports = ref()
const filters = ref();
const setDateRangeDirect = (start, end) => {
    startDate.value = start
    endDate.value = end
}

const setDateRange = (days) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Incrementa en uno para incluir el día de mañana

    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - days); // Ajustado para incluir el día de hoy en el rango si es necesario

    TempStartDate.value = pastDate;


    if (days == 1) {
        TempEndDate.value = today;
        endDate.value = TempEndDate.value
        startDate.value = TempStartDate.value
        showDateDialog.value = false



    } else {
        TempEndDate.value = tomorrow;
        startDate.value = TempStartDate.value
        endDate.value = TempEndDate.value
        showDateDialog.value = false

    }
    getFiltered()
}

onMounted(async () => {
    sites.value = await siteService.getSites()
    const user_id = store.rawUserData.id
    invetnoryDailyReports.value = await dailyInventoryReportsService.getAllMyDailyInventoryReports(user_id)
})


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

initFilters();

function formatDate(dated) {
    const date = new Date(dated)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatDateReverse(dated) {
    const date = new Date(dated)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
}




const getFiltered = async() => {
    const user_id = store.rawUserData.id
    const new_startDate = formatDate(startDate.value) 
    const new_endDate = formatDate(endDate.value) 
    invetnoryDailyReports.value = await dailyInventoryReportsService.getAllMyDailyInventoryReportsFiltered(user_id,new_startDate,new_endDate)
}




</script>


<style scoped>
.multi {
    max-width: 100%;
}

@media (max-width:500px) {

    .multi {
        width: 50%;
    }

}
</style>