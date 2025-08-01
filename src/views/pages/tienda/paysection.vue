<template>
    <div class="container" style="margin-top: 7rem;">

        <p  class=" text-4xl text-center px-4" style="font-weight: bold; margin-top: 6rem;">
            <i class="fa-solid fa-money-bill"></i>
       Pedidos de pasarela sin pagar o abandonados
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
        
              
            
              <Button style="width: 100%;border-radius:0.5rem" label="Aprobar (usuario contactado)" type="submit" class="p-button-success" />

            </form>
        </Dialog>





        <div style="max-width: 1280px;" class="mx-auto">
           

        <div class="slider mx-auto" style="display: flex;overflow: hidden">


<div :style="`transform:translateX(${selectedMode.slide}%)`" class="slider-item">       
    <DataTable  :loading="loading"  :paginator="true" :rows="15" :filters="filters"
paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Transferencias"
:rowsPerPageOptions="[5, 10, 25, 100]"
scrollable
scrollHeight="65vh"
stripedRows style="" v-model:filters="filters" class="col-12 m-auto"
:value="filteredTransferRequests " tableStyle="min-width: 50rem;">
<template #header>
<div class="grid" style="align-items:center;justify-content: space-between;">
  

<div style="display: flex;gap: 2rem;padding: 0 2rem;">
    <div>
    <Checkbox v-model="visible.colombia" :binary="true"> </Checkbox> Tiendas Colombia
</div>


<div>
    <Checkbox v-model="visible.usa" :binary="true"> </Checkbox> Tiendas Usa
</div>


<div>
    <Checkbox v-model="visible.distri" :binary="true"> </Checkbox> Distrimonster 
</div>


</div>


    <span class="md:mt-0 p-input-icon-right m-3">
                    <i class="pi pi-search" />
                    <InputText class="" v-model="filters['global'].value"
                        placeholder="Buscar Solicitud..." />
                </span>
</div>
</template>

<template #loading>


    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
    animationDuration=".2s" aria-label="Custom ProgressSpinner" />
    
</template>


<Column style="min-width: max-content;" class="py-1 " field="order_id" header="ID orden" frozen />
<!-- <Column style="" class="py-1 " field="Metodo de pago" header="ID orden" frozen /> -->
<Column style="" class="py-1 " field="total_order_price" header="Monto de la orden"  >
<template #body="data">
    {{formatoPesosColombianos(data.data.total_order_price) || '$ 0'   }}
</template>
</Column>


<Column style="" class="py-1 " field="total_order_price" header="Hora"  >
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
<!-- <Column style="" class="py-1 " field="Metodo de pago" header="ID orden" frozen /> -->




<Column style="" class="py-1" field="user_name" header="Cliente"  />

<Column style="" class="py-1" field="user_phone" header="Telefono cliente"  />
<!-- <Column style="" class="py-1 " field="user_phone" header="ID orden" frozen /> -->

<Column style="max-width: 10rem;" class="py-1 " > 


    <template>

    </template>

</Column>



<Column style="" class="py-1 px-0" field="date" header="Action" frozen alignFrozen="right">
<template #body="data">

    <div style="display: flex;gap:0.5rem;">
        
            <Button size="" v-if="route.params.request_status != 'aprobadas'" @click="open(data.data)" style="height: 1.8rem;width: 2rem;" severity="info" class="p-1" icon="pi pi-eye" />

            <Button size="" v-if="route.params.request_status != 'aprobadas'" @click="copyToClipboard(data.data)" style="height: 1.8rem;min-width: max-content;" label="Copiar link" severity="help" class="py-1" icon="pi pi-copy" />
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
                   <h4 class="px-2 m-0"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">Pedidos pendientes <b>{{ route.params.section }}</b> </b> </h4>
                   

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
import { useToast } from 'primevue/usetoast';
import {ref,onMounted,onBeforeMount,watch,onUnmounted,computed} from 'vue'
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
import { formatoPesosColombianos } from '../callCenter/service/utils/formatoPesos';
// import { transform } from 'html2canvas/dist/types/css/property-descriptors/transform';






const USA_SITE_IDS     = [33,35,36];
const COL_SITE_IDS     = [1, 2, 3, 7, 8, 9, 10, 11, 29, 30];
const DISTRI_SITE_IDS  = [32];


const visible = ref({
  usa:      true,
  colombia: true,
  distri:   false,
});


const allTransferRequests = ref([])


const filteredTransferRequests = computed(() => {
  // construir la lista de IDs permitidos según los switches
  const allowed = new Set([
    ...(visible.value.usa      ? USA_SITE_IDS    : []),
    ...(visible.value.colombia ? COL_SITE_IDS    : []),
    ...(visible.value.distri   ? DISTRI_SITE_IDS : []),
  ])

  console.log(allowed)
  // Si ningún switch está activo, devuelvo todo (ajústalo a tu UX)
//   if (allowed.size === 0) return allTransferRequests.value

  // Filtrar usando el Set (O(1) por lookup)
  return allTransferRequests.value.filter(r => allowed.has(r.site_id))
})


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
    await orderService.aproveOrder(order_id,responsible_id)
    aceptDialogVisible.value = false
    fetchTransferRequests();

}


const transfers = ref([])
const loading = ref(false)

onMounted  (async() => {



    sites.value = await fetchService.get(`${URI}/sites/`)


})


const cancelDialogVisible = ref(false)
const TransferRequests = ref([])
const aceptDialogVisible =ref(false)
const userStore = loginStore()
const cancelData = ref({

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



watch(() => store.numberOders, () => {
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
    loading.value =  true
    allTransferRequests.value = await orderService.getOrdersPay();
    loading.value =  false

};

// const fetchTransferRequestsNoLoading = async () => {
//     TransferRequests.value = await orderService.getOrdersValidateNoLoading();

// };

const sounds = [sonido1, sonido2, sonido3]; // Array de sonidos



const isActive = PathService.isActiveRoute

watch(()=> route.params.request_status, async() => {
    TransferRequests.value = await requestMethods['revisar']()
},{deep:true})


const toast = useToast()



async function copyToClipboard (data) {
  const texto =  `https://salchimonster.com/pagar/${data.order_id}`


  try {
    // Método moderno (requiere HTTPS)
    await navigator.clipboard.writeText(texto)
    toast.add({
      severity: 'success',
      summary: '¡Copiado!',
      detail: 'El enlace se copió al portapapeles',
      life: 2500
    })
  } catch (err) {
    /* Fallback para navegadores antiguos */
    const temp = document.createElement('input')
    temp.value = texto
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    temp.remove()

    toast.add({
      severity: 'info',
      summary: 'Copiado con método alternativo',
      detail: 'Tu navegador no soporta la API moderna de portapapeles',
      life: 3000
    })
  }
}


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