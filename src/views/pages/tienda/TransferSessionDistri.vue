<template>
    <div class="container" style="margin-top: 7rem;display: flex;flex-direction: column;">
        <img :src="`${URI}/read-photo-product/iX6UiE6e`" alt="" style="height: 5rem;width: min-content; margin: auto;">

        <p  class=" text-4xl text-center px-4" style="font-weight: bold;">

       Transferencias Distrimonster
    </p>

        <Dialog v-model:visible="cancelDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
            <template #header>
              <h3> <b>Rechazar orden</b> </h3>
            </template>

            <form @submit.prevent="resolve(false,cancelData.id,cancelData.reason)" style="display: flex;gap: 1rem; flex-direction: column;align-items:start">
        
              
              <Textarea style="resize: none; text-transform: lowercase; width:100%" id="reason" v-model="cancelData.reason" rows="5"
                placeholder="Porque desea rechazar esta solicitud?"></Textarea>
        
              <Button  style="width: 100%;border-radius:0.5rem" label="Rechazar" type="submit" class="p-button-danger" />

            </form>
        </Dialog>

        <Dialog v-model:visible="aceptDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
            <template #header>
              <h3> <b>Aprobar esta orden</b> </h3>
            </template>

            <form @submit.prevent="authoize(cancelData.order_id)" style="display: flex;gap: 1rem; flex-direction: column;align-items:start">
        
              
            
              <Button style="width: 100%;border-radius:0.5rem" label="Aprobar (Transferencia confirmada)" type="submit" class="p-button-success" />

            </form>
        </Dialog>





        <div style="max-width: 1280px;" class="mx-auto">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <h3 style="width: min-content; padding: 0;"> <b>Modos</b> </h3>  <Dropdown v-model="selectedMode" :options="modes" optionLabel="name"></Dropdown>

            </div>


        <div class="slider mx-auto" style="display: flex;overflow: hidden">


<div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">       
    <DataTable   :paginator="true" :rows="15" :filters="filters"
paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Transferencias"
:rowsPerPageOptions="[5, 10, 25, 100]"
scrollable
scrollHeight="65vh"
stripedRows style="" v-model:filters="filters" class="col-12 m-auto"
:value="TransferRequests" tableStyle="min-width: 50rem;">
<template #header>
<div class="grid" style="align-items:center;justify-content: space-between;">
    <div class="col-12 md:col-6 p-3"> 
        <span  class="text-xl" style="width: 100%;"> Transferencias pendientes <span style="text-transform: capitalize;"></span> </span>
    </div>

    <span class="md:mt-0 p-input-icon-right m-3">
                    <i class="pi pi-search" />
                    <InputText class="" v-model="filters['global'].value"
                        placeholder="Buscar Solicitud..." />
                </span>
</div>
</template>


<Column style="" class="py-1 pl-0" field="order_id" header="ID orden" frozen />
<!-- <Column style="" class="py-1 pl-0" field="Metodo de pago" header="ID orden" frozen /> -->
<Column style="" class="py-1 pl-0" field="total_order_price" header="Monto de la orden"  >
<template #body="data">
    {{formatToColombianPeso(data.data.total_order_price)   }}
</template>
</Column>


<Column style="" class="py-1 pl-0" field="total_order_price" header="Hora"  >
<template #body="data">
    {{ extraerHora(data.data.latest_status_timestamp ) }}
</template>
</Column>
<Column style="" class="py-1 " field="delivery_price" header="Domicilio"  >
<template #body="data">
    {{formatToColombianPeso(data.data.pe_json?.delivery?.delivery_costoenvio)   }}
</template>
</Column>



<Column style="" class="py-1 " field="Total" header="Total"  >
<template #body="data">
    {{formatToColombianPeso(data.data.pe_json?.delivery?.delivery_costoenvio + data.data.total_order_price)   }}
</template>
</Column>



<Column style="" class="py-1 pl-0" field="user_name" header="Cliente"  />

<Column style="" class="py-1 pl-0" field="user_phone" header="Telefono cliente"  />
<!-- <Column style="" class="py-1 pl-0" field="user_phone" header="ID orden" frozen /> -->




<Column style="" class="py-1 px-0" field="date" header="Action" frozen alignFrozen="right">
<template #body="data">

    <div style="display: flex;gap:0.5rem;">
        
            <Button size="" v-if="route.params.request_status != 'aprobadas'" @click="open(data.data)" style="height: 1.8rem;width: 2rem;" severity="info" class="p-1" icon="pi pi-eye" />

            <Button size="" v-if="route.params.request_status != 'aprobadas'" @click="show(data.data.order_id)" style="height: 1.8rem;width: 2rem;" severity="success" class="p-1" icon="pi pi-check" />
            <!-- <Button v-if="route.params.request_status != 'rechazadas'" @click="show(false,data.data.id)" style="height: 1.8rem;width: 2rem;background:var(--primary-color);border:none"  severity="danger" class="p-1"
            icon="pi pi-times" /> -->

        
    </div>
    
</template>
</Column>


</DataTable>
</div>
<div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">

    <DataTable   :paginator="true" :rows="15" style="width: 100%"
           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
           currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Transferencias"
           :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines  stripedRows class="col-12  p-2"
           :value="transfers" tableStyle="min-width: 50rem;" :filters="filters">
           <template #header>
               <div class="grid p-3 mt-4" style="align-items:center;justify-content: start; display: flex;gap: 1rem;">
                   <h4 class="px-2 m-0"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">Transferencias Distrimonster <b>{{ route.params.section }}</b> </b> </h4>
                   

                   <Calendar v-model="date_range.start_date"></Calendar>
                   <calendar v-model="date_range.end_date"></calendar>

                   <MultiSelect style="max-width: 30rem;" v-model="date_range.sites" optionLabel="site_name" :options="sites.filter(s => s.show_on_web)"></MultiSelect>

                <Button severity="help" @click="update" label="Buscar" icon="pi pi-search"></Button>
    
               </div>
    
    
    
           </template>
    
    
           
           <Column class="py-1" style="text-transform: uppercase;" v-for="c in columnsd" :header="c">
        
            <template #body="data">
                    <h6 class="m-0">{{ data.data[c] }}</h6>
            </template>
        

            </Column>
    
           </DataTable>
    
    
</div>


</div>

        </div>



 


    <DialogoPedido>

</DialogoPedido>

    </div>




</template>

<script setup>

import {ref,onMounted,onBeforeMount,watch,onUnmounted} from 'vue'
import {PathService} from '@/service/pathService.js'
import { formatToColombianPeso, salesReport } from '@/service/valoresReactivosCompartidos';
import OrderItem from '../cocina/OrderItem.vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import DialogoPedido from '../cocina/DialogoPedido.vue';
import {useRoute} from 'vue-router'
import {orderService} from '@/service/menu/orderService.js'
import {loginStore} from '@/store/user.js'
import { useOrderStore } from '../../../store/order';
import { months } from 'moment-timezone';
import {formatDateTime, extraerHora} from '@/service/formating/formatDate.js'
import { fetchService } from '../../../service/utils/fetchService';
import { URI } from '../../../service/conection';
// import { transform } from 'html2canvas/dist/types/css/property-descriptors/transform';



const sites = ref([])

const dataColumns = ref( [
    
    
    
    
    
    {
        columnName:'SEDE',
        columnValue:'sede',
        columnType:'other',
        size:'1rem',
        vif:true
    },



    {
        columnName:'ASESOR',
        columnValue:'current_status',
        columnType:'status',
        size:'15rem',
        vif:true
    },
 
 
 
 
   
 ])


 const date_range = ref( {
    start_date : new Date(),
    end_date: new Date(),
    sites:[]
 })


const columnsd = ref([])




const store = useOrderStore()




const open = (order) => {
    store.setVisible('currentOrder',true)
    store.setOrder(order)
}


const authoize = async( order_id) => {
    const responsible_id = userStore.rawUserData.id
    await orderService.authorizeOrder(order_id,responsible_id)
    aceptDialogVisible.value = false
    fetchTransferRequests();

}


const update = async() => {
const transfersd = await fetchService.post(`${URI}/transaction_report/`,
    {
        "start_date": date_range.value.start_date,
        "end_date": date_range.value.end_date,
        "sites": 
            date_range.value.sites.map(s => s.site_id)
        
    }


    )

    transfers.value = transfersd

    if (transfersd?.[0]){
        columnsd.value = Object.keys(transfersd[0]) 
    }


}
const transfers = ref([])

onMounted  (async() => {


  
    sites.value = await fetchService.get(`${URI}/sites/`)
    await update()

})


const cancelDialogVisible = ref(false)
const TransferRequests = ref([])
const aceptDialogVisible =ref(false)
const userStore = loginStore()
const cancelData = ref({

})


onMounted(() => {
    userStore.bar_color = '#FF0042'
    userStore.colorized = false

})

onUnmounted(() => {
    userStore.bar_color = 'rgba(0, 1, 22, 1)'
    userStore.colorized = true

})

const modes = ref([

{
    index:1,
    slide:0,
    name:'Basico'
},
{
    index:2,
    slide:-100,
    name:'reportes'
}

])


const selectedMode = ref({
    index:1,
    slide:0,
    name:'Basico'
})

const sonido1 = new Audio('/sound/pip1.wav')
const sonido2 = new Audio('/sound/pip2.wav')
const sonido3 = new Audio('/sound/pip3.wav')
const sonido4 = new Audio('/sound/pip4.wav')
const orderStore = useOrderStore()

const intervalId = ref(null); // Guardar la referencia al intervalo

const requestMethods = {
    
    "revisar": orderService.getPendientsCancellationRequest,
    "aprobadas":orderService.getaceptedCancellationAcepted,
    "rechazadas":orderService.getPendientsCancellationRejected
}




const requestMethodsNoLoading = {
    
    "revisar": orderService.getPendientsCancellationRequestNoLoading,
    "aprobadas":orderService.getaceptedCancellationAceptedNoLoading,
    "rechazadas":orderService.getPendientsCancellationRejectedNoLoading
}



onBeforeMount(() => {
    initFilters();

});



watch(() => store.numberTransferRequests, () => {
    fetchTransferRequests();
  
})


const show = (id) => {
    
    aceptDialogVisible.value = true
    cancelData.value.order_id = id

}


const resolve = async(desition,id,observation) => {
 const  data = {
        "authorized": desition,
        "responsible_id": userStore.rawUserData.id,
        "responsible_observation": cancelData.value.reason || 'sin observaciones'
    }

    await orderService.resolveCancellationRequest(id,data)
    aceptDialogVisible.value = false
    cancelDialogVisible.value = false
    TransferRequests.value = await requestMethods['revisar']()


}




const buildData = (timestamp) => {
    const monthsStr = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const parts = timestamp.split('T');
    const dateParts = parts[0].split('-');

    const day = dateParts[2];
    const month = parseInt(dateParts[1], 10) - 1;  // Convertir a entero y ajustar índice
    const year = dateParts[0];

    const monthStr = monthsStr[month];
    const timeParts = parts[1].split(':');
    const hour = parseInt(timeParts[0], 10);  // Hora en formato de 24 horas
    const minute = timeParts[1];

    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12;  // Convierte la hora a formato 12 horas y ajusta medianoche a 12
    const paddedHour = formattedHour < 10 ? `0${formattedHour}` : `${formattedHour}`; // Agrega cero si es necesario
    const amPm = isPM ? 'PM' : 'AM';

    return {
        date: `${day}-${monthStr}-${year}`,
        time: `${paddedHour}:${minute} ${amPm}`
    };
}



const route = useRoute()

const filters = ref()
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

initFilters();

onMounted(() => {
    // Ejecutar inicialmente al montar el componente
    fetchTransferRequests();






});









onMounted(async() => {
    // Ejecutar inicialmente al montar el componente
    fetchTransferRequests();


});



// Función para cargar las Transferencias de cancelación
const fetchTransferRequests = async () => {
    TransferRequests.value = await fetchService.get(`${URI}/order-to-transfer-distri`)

};

const fetchTransferRequestsNoLoading = async () => {
    TransferRequests.value = await orderService.getOrdersTransferNoLoading();

};

const sounds = [sonido1, sonido2, sonido3]; // Array de sonidos



const isActive = PathService.isActiveRoute

watch(()=> route.params.request_status, async() => {
    TransferRequests.value = await requestMethods['revisar']()
},{deep:true})





</script>

<style scoped>

ul{
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 1rem;
}

@media (width < 600px) {
    
    ul{

        justify-content: start;
        padding:  0.5rem 0;
     
    }
    
}

.nav-bar--item{
    padding-bottom: 0.3rem;
}


.nav-bar{
    margin: auto;
    width: min-content;
    background-color: rgb(255, 255, 255);
    padding: 0;


    position: sticky;
    top:3rem;
    width: 100%;
    z-index: 99;
}
li{
    list-style:none;  
}

.container{
    margin-top: 3rem;
    position: relative;

}



.slider-item{
    width: 100%;
    min-width: 100%;
    transition: all ease .5s;
}



.nav-var--item-button{
    color:gray;
    border-radius: 0%;
    padding: 0.5rem ;
    min-width: max-content;
}

.nav-var--item-button-selected{
    box-shadow: 0 0.3rem var(--primary-color);
    color: black;
}


</style>