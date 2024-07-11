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
    <div class=" m-auto" style="max-width: 1024px;">
        <div class="grid mx-0 mt-4 ">
            
            
            

            <div class="col-12 p-2" style="display: flex; gap:1rem;justify-content:center;align-items:center">
                <span class="text-xl" > <b>Periodo</b></span>
                <InputText class="" @click="showDateDialog = true" style="height: 2.7rem;"
                    :value="`${formatDate(startDate)}  |  ${formatDate(endDate)}`" placeholder="periodo" />
                <!-- {{ dateRange }} -->

                <Button @click="getFiltered" icon="pi pi-search" severity="help" class="text-center p-0 col-12  md:p-0"
                    style="height: 2.5rem;width:min-content;aspect-ratio:  1 / 1;font-weight: bold; border-radius: 50%; display: flex;justify-content:center ; "></Button>

            </div>

            <div class="col-12 px-3" style="display: flex;justify-content:end">
                <Button severity="help" icon="pi pi-download" label="Descargar todo" @click="downloadAll"></Button>
    
            </div>

        </div>
    </div>


    <div class="mt-3" style="min-height:20vh; display: flex; justify-content:center;align-items:center">


        <DataTable style="max-width: 1024px;" v-model:filters="filters" class="col-12 m-auto"
            :value="invetnoryDailyReports" tableStyle="min-width: 50rem;" :paginator="true"
            :rows="15"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} reportes">
            <template #header>
                <div class="grid" style="align-items:center">
                    <div class="col-12 md:col-6 p-3"> 
                        <span  class="text-xl" style="width: 100%;"> Mis Ordenes de compra</span>
                    </div>
                    <div class="col-12 md:col-6 p-3"> 
                        <InputText style="width: 100%;" class="" v-model="filters['global'].value" placeholder="Buscar..." />
                    </div>
                    

                </div>
            </template>
            <Column class="py-1" field="purchase_order_id" header="ID"></Column>
            <Column class="py-1" field="employer_name" header="Responsable"></Column>
            <Column  class="py-1" field="site_name" header="Sede"></Column>
            <Column  class="py-1" field="date" header="Fecha">

                <template #body="data">
                    <p style="min-width: max-content">
                        {{ data.data.expedition_date?.split('T')[0]}}

                    </p>

                </template>

            </Column>

            <Column style="min-width:max-content;" class="py-1" field="date" header="Hora">

                <template #body="data">
                    <span style="min-width: max-content;">
                        {{ data.data.expedition_date?.split('T')[1]}}

                    </span>

                </template>

            </Column>
            <Column class="py-1" field="date" header="Estado">

                <template #body="data">
                    <Tag style="width: 100%;height:2.7rem"
                        :style="`background-color:${color_status[data.data.current_status]}`">
                        {{ data.data.current_status }}

                    </Tag>

                </template>
            </Column>

            <!-- <Column class="py-1" field="date" header="Action">
                <template #body="data">

                    <router-link :to="`/purchase-order/purchase-order-view/${data.data.purchase_order_id}`">
                        <Button text icon="pi pi-eye" />
                    </router-link>

                    <Button @click="prepareDownload(data.data.daily_inventory_id,data.data.site_name,data.data.date)" severity="success" text
                        icon="pi pi-download" />


                </template>
            </Column> -->

            <Column style="width: 20px;" class="py-1 mx-0 px-0" field="date" header="Acciones">
                <template #body="data">

                    <div class="m-0 p-0" style="display: flex;width:min-content; justify-content:start; align-items:center;gap:0.5rem">
                        <router-link :to="`/purchase-order/purchase-order-view/${data.data.purchase_order_id}`">
                            <Button style="height: 2rem;" severity="help" class="p-1" icon="pi pi-eye" />
                        </router-link>
    
                        <Button style="height: 2rem;" @click="prepareDownload(data.data.purchase_order_id,data.data.site_name,data.data.expedition_date?.split('T')[0])" severity="success" class="p-1"
                            icon="pi pi-download" />
    
                            <Button style="height: 2rem;"  severity="warning"  class="p-1"
                            icon="pi pi-history p-0 m-0" />
    
                    </div>
                    
                  

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
import * as XLSX from 'xlsx';
import {purchaseOrderService} from '../../../../service/inventory/purchaseOrderService'


const color_status = {
    Generada: '#FF0000', // Rojo
    Lista: '#FFA500', // Naranja
    "Entregada al transportista": '#FFFF00', // Amarillo
    Completada: '#00FF00' // Verde
};


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
    invetnoryDailyReports.value = await purchaseOrderService.getAllMypurchaseOrderReports(user_id)
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
    invetnoryDailyReports.value = await purchaseOrderService.getAllMypurchaseOrderReportsFiltered(user_id,new_startDate,new_endDate)
}



const entries = ref([])


const prepareDownload = async (purchase_order_id,site_name,date) => {
    entries.value = await purchaseOrderService.getpurchaseOrderEntriesBypurchaseOrderID(purchase_order_id)
    const data = entries.value.map(product => ({
        "Producto": product.item_name,
        "Cantidad": product.quantity,
        "Unidad de medida":product.unit_measure
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
        { wch: Math.max(30, "Producto".length) },
        { wch: Math.max(0, "Cantidad".length) },
        { wch: Math.max(0, "Unidad de medida".length) }]
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, `Orden_de_compra_${site_name}_${date} .xlsx`);

};


const downloadAll = async() => {

const reportes = invetnoryDailyReports.value

reportes.forEach(reporte => {
    prepareDownload(reporte.purchase_order_id,reporte.site_name,reporte.expedition_date?.split('T')[0])
});

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