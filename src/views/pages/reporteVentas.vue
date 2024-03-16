<template>

    <!-- <Transition name="fade">
        <Loading :tittle=" `CARGANDO REPORTE DE ORDENES ${store.order_status}s` " v-if="store.loading"></Loading>

    </Transition> -->


    <div class="col-12 p-0 m-0 " style="position: relative; max-width: 1366px;" cls>
       
        <div class="col-12 px-3 py-0 mb-3 " style="overflow-x:auto;">
    <div class="px-0 mx-0 pb-4 " style="width: max-content; background-color:rgba(250, 250, 250, 0); display:  flex;color: ; justify-content: start;align-items: center; gap: 2rem;">



     



                    <Dropdown class="text-sm"   v-model="store.order_status" :options="estadosDropValues"  placeholder="Estado"></Dropdown>


       
                    <MultiSelect  style="width: 30rem;" display="chip" multiple v-model="store.selectedSites" optionLabel="site_name" :options="sites.filter(s => s.site_id != 12 & s.site_id !=13)" class="text-sm" placeholder="Sedes"></MultiSelect>


                    <InputText class="text-center "  @click="showDateDialog = true" style="" :value="store.dateRangeDifference.rangeName || `${formatDate(store.dateRange.startDate) }  |  ${formatDate(store.dateRange.endDate)}`" placeholder="periodo"/>


                    <Button severity="info" class="text-center p-2"   style="height: 100%;width:min-content;aspect-ratio:  1 / 1;border-radius: 50%; display: flex;justify-content:center ; " @click="store.fetchSalesReport"> <i :class="PrimeIcons.SEARCH" style="padding: 0.2rem;"></i></Button>


</div>
</div>












    <div class="contenedor mt-5" style="position: sticky;top: 0.8rem;z-index: 99;">











<span class="text-3xl mt-8 ml-3" style="font-weight: bold;"> <i class="fa-solid fa-chart-simple"></i> Vision General</span>

<div class="col-12 px-3 py-0 my-3 p-2" style="overflow-x:auto; background-color: #fafafa;">
    <div class="px-0 mx-0" style="width: max-content; background-color:#fafafa; display:  flex;color: ; justify-content: start;gap: 2rem;min-width: max-content;">
   <div v-for="boton in menus">

    <RouterLink :to="boton.to" >
        <Button  size="medium" :style="ruta.fullPath == boton.to? 'box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;':''" class="text-md px-0 py-2 my-3 mx-0" text   severity="secondary" style=" border-radius: 0;">
            
            <i class="mr-2" :class="boton.icon"></i>
            {{ boton.name }}

            <!-- {{ ruta.fullPath }} -->
            
        
        </Button>
    </RouterLink>
   </div>
   <div class="p-0" style="display: flex;align-items: center;background-color: rgba(245, 222, 179, 0); ">
    
          <Button size="medium"   class="text-md px-0 py-0 mx-0 text-l btn-ocultar" text @click="store.toogleVisibleNotifications" :severity="store.visibleNotifications? 'danger': 'success'"  rounded style="font-weight: bold; ">
            <span>
               <span >{{ store.visibleNotifications? 'Ocultar notificaciones': 'Mostrar notificaciones' }} </span> <i  :class="PrimeIcons.ANGLE_DOUBLE_RIGHT"></i>
            </span>
        
        </Button>  
        
        <!-- <span>ooodssss</span> -->
           

            <!-- {{ ruta.fullPath }} -->
            
        
   </div>
       

    
</div>
</div>



</div>

    

    <div class="app" style="position: ;">
       

        <!-- <Button style="position: sticky; top:2rem;right: 2rem;"> <i :class="PrimeIcons.ARROW_LEFT"></i> </Button> -->


      






    </div>


    <div class="grid p-0 m-0"> 
    
    <div class="" :class="store.visibleNotifications? 'col-9':'col-12'">
    
    <transition name="fade">
        <RouterView>

        </RouterView>
    </transition>
    </div>
    

    <transition name="noti">
    <RepNotificaciones></RepNotificaciones>
    </transition>

    </div>





    <Dialog v-model:visible="showDateDialog" modal header="Periodo" :style="{ width: '25rem' }">
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


                <span class="text-l" style="font-weight: bold;">Desde -  {{ formatDate(startDate) }} </span>
                <Calendar style="min-width: max-content;" v-model="TempStartDate"  />

            </div>

            <!-- <Divider></Divider> -->

            <div class="col-12 " style=" display: flex;flex-direction: column;">
                <span style="font-weight: bold; " class="text-l">Hasta - {{ formatDate(endDate) }} </span>
                <Calendar style="min-width: max-content;" v-model="TempEndDate"  showWeek />

            </div>


            <div class="col-12 p-0" style="display: flex; justify-content: center;">
                <div class="col-12" style="display: flex; justify-content: center;">
            <Button @click=" () => {
                    store.setDateRange(TempStartDate,TempEndDate);
                    showDateDialog = false;
                    store.fetchSalesReport();


            }">Aplicar</Button>
        </div>
            </div>


        </div>

    </Dialog>


    
    </div>

<!-- {{ store }} -->
<!-- {{ salesReport }} -->




</template>


<script setup>












import { onMounted, reactive, ref, watch,onUnmounted } from 'vue';
// import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';
import { URI } from '../../service/conection';
import {salesReport} from '../../service/valoresReactivosCompartidos'
import { formatToColombianPeso } from '../../service/valoresReactivosCompartidos';
import Loading from '../../components/Loading.vue';
import { PrimeIcons } from 'primevue/api';
import {useReportesStore} from '@/store/reportes.js'
import RepValorVentas from './RepValorVentas.vue';
import RepNotificaciones from './RepNotificaciones.vue';
const store = useReportesStore()
const { isDarkTheme } = useLayout();


const estadosDropValues = ref(['enviada', 'cancelada', 'en preparacion'])
const estadosDropValue = ref('enviada')
const ruta = useRoute()
const sites = ref([])
const selectedSites = ref([])
const showDateDialog = ref(false)
const startDate = ref(new Date(new Date().setDate(new Date().getDate() - 7))); // Fecha de inicio hace 7 días
const endDate = ref(new Date());















// function checkCustomDateRange() {
//     // Determina la diferencia en días entre las fechas seleccionadas
//     const diffTime = Math.abs(store.dateRange - TempStartDate.value);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 para incluir ambos días en el rango

//     switch(diffDays) {
//         case 7:
//             selectedRangeName.value = 'Últimos 7 días';
//             break;
//         case 14:
//             selectedRangeName.value = 'Últimos 14 días';
//             break;
//         case 28:
//             selectedRangeName.value = 'Últimos 28 días';
//             break;
//         default:
//             selectedRangeName.value = ''; // No coincide con ningún rango predefinido
//     }
// }




const TempStartDate = ref(new Date()) // Fecha de inicio del período
const TempEndDate = ref(new Date())

const selectedRangeName = ref('');


// watch(estadosDropValue, (viejo,nuevo)=> {
//     if(viejo != nuevo){
//         fetchSalesReport()

//     }
// })

function setDateRange(days) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Incrementa en uno para incluir el día de mañana

    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - days); // Ajustado para incluir el día de hoy en el rango si es necesario

    TempStartDate.value = pastDate;


    if (days == 1){
        TempEndDate.value = today;
        store.setDateRange(TempStartDate.value,TempEndDate.value)
        showDateDialog.value = false


    }else{
        TempEndDate.value = tomorrow;
        store.setDateRange(TempStartDate.value,TempEndDate.value)
        showDateDialog.value = false

    }

    


    store.fetchSalesReport()
    
    // Usando 'tomorrow' en lugar de 'today'
}

onMounted( () => {
    getSites().then(data => {
        sites.value = data
        // selectedSites.value = sites.value.filter(s => s.site_id != 12 && s.site_id != 13);
        // fetchSalesReport()


    } )
    // fetchSales()
    store.fetchSalesReport()    
})

// function setDateRange(days) {
//     const today = new Date();
//     const pastDate = new Date();
//     pastDate.setDate(today.getDate() - days + 1); // +1 para incluir el día de hoy en el rango

//     TempStartDate.value = pastDate;
//     TempEndDate.value = today;

//     applyDateSelection()
    
// }
function applyDateSelection() {
    checkCustomDateRange()
    showDateDialog.value = false
    startDate.value = TempStartDate.value;
    endDate.value = TempEndDate.value;
    showDateDialog = false;
     // Asegúrate de volver a buscar el informe de ventas con las nuevas fechas
}


const fetchSalesReport = async () => {
  const formattedStartDate = formatDate(startDate.value);
  const formattedEndDate = formatDate(endDate.value);
  const siteIds = selectedSites.value.map(site => site.site_id).join(',');

  // Construir la URL con parámetros de consulta
  const queryParams = new URLSearchParams({
    site_ids: siteIds,
    status: estadosDropValue.value,
    start_date: formattedStartDate,
    end_date: formattedEndDate
  });

  const url = `${URI}/sales_report?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET', // Método GET especificado aquí
      headers: {
        'Content-Type': 'application/json',
        // Agrega aquí otros encabezados si son necesarios
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    salesReport.value = data


    // Maneja la respuesta
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

watch([startDate, endDate], () => {
    // Esta función se ejecutará cada vez que cambien startDate o endDate
    fetchSalesReport(); // Llama a tu función que obtiene el reporte de ventas
}, { deep: true });


watch(() => store.order_status, (newValue, oldValue) => {
  // Esta función se ejecutará cada vez que order_status cambie.
  // Aquí puedes llamar a fetchSalesReport o cualquier otra lógica necesaria
  console.log(`El estado de orden ha cambiado de ${oldValue} a ${newValue}`);
  store.fetchSalesReport(); // Llamada al método de la tienda
});


watch(store.selectedSites, (nuevasSedes) => {
  store.setSelectedSites(nuevasSedes);
}, { deep: true });


const getSites = async() => {
    try {
        const response = await fetch(`${URI}/sites`)

        if(!response.ok){
            throw 'paila'
        }

        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
}

const menus = ref([
    {
        name: 'Valor ventas',
        to: '/reporte-ventas/valor-ventas',
        icon:'fa-solid fa-dollar-sign'
    },
    {
        name: 'No. Ordenes',
        to: '/reporte-ventas/no-ordenes',
        icon:'fa-solid fa-sort'
    },
    {
        name: 'Ticket promedio',
        to: '/reporte-ventas/ticket',
        icon: 'fa-solid fa-money-bill'
    },
    {
        name: 'Ordenes',
        to: '/reporte-ventas/ordenes',
        icon:'fa-solid fa-table'
    }
])






const products = ref(null);
const lineData = reactive({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});
const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);
// const productService = new ProductService();

// onMounted(() => {
//     productService.getProductsSmall().then((data) => (products.value = data));
// });

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);




































 // Fecha de finalización del período

// Formatear el período de fechas
const formattedPeriod = ref(`${startDate.value} - ${endDate.value}`)

function formatDate(dated) {
const date = new Date(dated)
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}


const selectedCountry = ref({})

const countries = ref()

watch([TempStartDate, TempEndDate], ([newStartDate, newEndDate]) => {
    if (newStartDate > newEndDate) {
        alert('La fecha de inicio debe ser anterior o igual a la fecha final.');
        // Ajusta las fechas según sea necesario, por ejemplo:
        TempEndDate.value = newStartDate;
    }
});



function saveState() {
    const state = {
        startDate: formatDate(startDate.value),
        endDate: formatDate(endDate.value),
        estadosDropValue: estadosDropValue.value,
        selectedSites: selectedSites.value.map(site => site.site_id),
        salesReport: salesReport.value,
    };
    localStorage.setItem('reportState', JSON.stringify(state));
}

// Cargar estado desde Local Storage
// function loadState() {
//     const state = JSON.parse(localStorage.getItem('reportState'));
//     if (state) {
//         startDate.value = new Date(state.startDate);
//         endDate.value = new Date(state.endDate);
//         estadosDropValue.value = state.estadosDropValue;
//         // Aquí necesitas asegurarte de reconstruir los objetos de las sedes si solo guardaste los IDs
//         selectedSites.value = state.selectedSites; // Asumiendo que tienes una manera de reconstruir los objetos de las sedes a partir de los IDs
//         salesReport.value = state.salesReport;
//     }
// }

// // Hook para cargar el estado al montar el componente
// watch([startDate, endDate, estadosDropValue, selectedSites, salesReport], () => {
//     saveState();
// }, { deep: true }); // La opción 'deep' es importante si estás observando objetos o arrays para detectar cambios dentro de ellos

// // Hook para cargar el estado al montar el componente
// onMounted(() => {
//     loadState();
// });






</script>


<style scoped>

.btn-ocultar{
    /* outline: none !important; */
    box-shadow: none    ;
    border: none !important;
    /* background-color: ; */
}
.fade-enter-active,.fade-leave-active {
  transition: all ease  .3s;
  
}


.noti-enter-active,.noti-leave-active {
  transition: all ease  1s;
  
}

 .fade-leave-to{
  opacity: 0;
  transform: translateY(20rem);

}

/* .fade-enter-to  {
  opacity: 0;
  transform: translateX(20rem);
 
} */


.fade-leave-from  {
  opacity: 1;
  transform: translateY(20rem);

}
 /*
*/

 .fade-enter-from {
  opacity: 0;
  transform: translateY(20rem);
  filter: blur(10px);
  /* filter: blur(0); */
  
}


.noti-enter-from {
  opacity: 0;
  transform: translateY(20rem);
  filter: blur(10px);
  /* filter: blur(0); */
  
}

.noti-enter-to {
    opacity: 1;
  filter: blur(0);
  
}



.fade-enter-to {
  opacity: 1;
  filter: blur(0);

  
} 



/* 
.fade-leave-from {
  opacity: 0;
  transform: translateX(0);
  
} 


.fade-leave-to {
  opacity: 1;
  transform: translateX(20rem);
  
}   */

*{
    transition: .3s ease all;
}

</style>