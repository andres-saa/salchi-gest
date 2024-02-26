<template>
    <!-- {{ store.salesReport }} -->
    <div v-for="orden in store.salesReport.total_sales?.orders_info">
    <!-- {{ orden }} -->
    </div>

    <div class="card p-4" style="">
        <DataTable paginator  :value="store.salesReport.total_sales.orders_info" tableStyle="min-width: 50rem"
        
        
        :rows="5" :filters="filters"
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                  :rowsPerPageOptions="[5, 10, 25,100]"
                  currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} ordenes"
                  responsiveLayout="scroll" scrollable scroll-height="62vh">

                  
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Ordenes {{ store.order_status }}s entre {{ store.formatDate(store.dateRange.startDate)  }} y {{ store.formatDate(store.dateRange.endDate)  }} </span>
                    <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center" style="background-color: ;">
                           
                            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText class="" v-model="filters['global'].value" placeholder="Search..." />
                            </span>
                        </div>
                </div>
            </template>
            <Column field="order_id" header="Id">
            
                <template #body="slotProps">
                    {{slotProps.data.order_id}}
                    <!-- <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem border-round" /> -->
                </template>
            </Column>
            <!-- <Column header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem border-round" />
                </template>
            </Column> -->
            <Column field="total_price" header="Monto">
                <template #body="slotProps">
                    <!-- {{ formatCurrency(slotProps.data.price) }} -->
                    {{ formatToColombianPeso(slotProps.data.total_price)  }}
                </template>
            </Column>

            <Column field="site_name" header="Sede">
                <template #body="slotProps">
                    <!-- {{ formatCurrency(slotProps.data.price) }} -->
                    {{ formatToColombianPeso(slotProps.data.site_name)  }}
                </template>
            </Column>

            <Column field="status.timestamp" header="Fecha y hora" headerStyle="width:10rem; min-width:8rem ">
                <template #body="slotProps">
                    <!-- {{ formatCurrency(slotProps.data.price) }} -->
                    {{ slotProps.data.status.timestamp}}
                </template>
            </Column>

            <Column v-if="store.order_status == 'cancelada'" headerStyle="width:5rem; min-width:20rem; " field="status.reazon" header="Motivo">
                <template #body="slotProps">
                    <!-- {{ formatCurrency(slotProps.data.price) }} -->
                   <span class="motivo">{{ slotProps.data.status.reazon?.toLowerCase()}}.</span> 
                </template>
            </Column>


            <Column field="category" header=""></Column>
            <!-- <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.order_id" readonly :cancel="false" />
                </template>
            </Column> -->
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status?.status" :severity="getSeverity(slotProps.data?.status?.status)" />
                </template>
            </Column>


            <Column header="Aacciones" frozen alignFrozen="right">
                <template #body="slotProps">
                    <Button @click="store.setVisibleOrder(true,slotProps.data)" text ><i class="text-2xl col-12 p-0" :class="PrimeIcons.EYE"></i></Button>
                </template>
            </Column>
            <!-- <template #footer> In total there are {{ products ? products.length : 0 }} products. </template> -->
        </DataTable>
    </div>


    <OrderDialog>

    </OrderDialog>

</template>


<script setup>
import {useReportesStore} from '@/store/reportes.js'
import { formatToColombianPeso } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import {onBeforeMount} from 'vue'
import { FilterMatchMode } from 'primevue/api';
import {ref} from 'vue'
import OrderDialog from '../../components/orderDialog.vue';
const store = useReportesStore()
onBeforeMount(() => {
    initFilters();
    // getSites()
});



const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


const filters = ref(null);
const getSeverity = (state) => {
    switch (state) {
        case 'enviada':
            return 'success';

        // case 'LOWSTOCK':
        //     return 'warning';

        case 'cancelada':
            return 'danger';

        default:
            return null;
    }
};
</script>

<style scoped>




*{
    transition: all ease .3s;
}

.motivo{
    text-transform: capitalize;
}


</style>



