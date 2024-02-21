<template>
    <div class="app">
        <span>Filtros</span>
        <div class="col-12 grid gap" style="display: flex;">

            <div class="col p-3">
                <Dropdown class="col-12 p-2" placeholder="sede"></Dropdown>

            </div>

            <div class="col p-3" @click="date = true">
                <InputText :value="`${formatDate(startDate)}-${formatDate(endDate)}`" class="col-12 p-3"
                    placeholder="periodo">
                </InputText>
            </div>

        </div>



        <div class="contenedor" style="background-color: white;">

            <span class="text-4xl" style="font-weight: bold;">Vision General</span>

            <div class="col-12" style="overflow-x:auto;">
                <div  style="width: max-content; background-color: rgb(255, 255, 255); display:  flex;color: ; justify-content: start;gap: 2rem;min-width: max-content;">
               <div v-for="boton in menus">

                <RouterLink :to="boton.to" >
                    <Button  :style="ruta.fullPath == boton.to? 'box-shadow: 0 4px 0 var(--primary-color)': ''" class="text-xl px-0 py-4" text   severity="secondary" style="font-weight: 500; border-radius: 0;">
                        
                        {{ boton.name }}

                        <!-- {{ ruta.fullPath }} -->
                        
                    
                    </Button>
                </RouterLink>
               </div>
                   
            
                
            </div>
            </div>
           

       
        </div>






    </div>






<RouterView>

</RouterView>




    <Dialog v-model:visible="date" modal header="Periodo" :style="{ width: 'max-content' }">
        <div class="grid">

            <div class="col-12 xl:col-6" style="display: flex;flex-direction: column;">


                <span class="text-xl" style="font-weight: bold;"> {{ formatDate(startDate) }} </span>
                <Calendar style="min-width: max-content;" v-model="startDate" inline showWeek />

            </div>

            <div class="col-12 xl:col-6" style="display: flex;flex-direction: column;">
                <span style="font-weight: bold; " class="text-xl"> {{ formatDate(endDate) }} </span>
                <Calendar style="min-width: max-content;" v-model="endDate" inline showWeek />

            </div>


        </div>

    </Dialog>
</template>


<script setup>












import { onMounted, reactive, ref, watch } from 'vue';
// import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';

const { isDarkTheme } = useLayout();


const ruta = useRoute()


const menus = ref([
    {
        name: 'Valor ventas',
        to: '/reporte-ventas/valor-ventas'
    },
    {
        name: 'No. Ordenes',
        to: '/reporte-ventas/no-ordenes'
    },
    {
        name: 'Ticket promedio',
        to: '/reporte-ventas/ticket'
    },
    {
        name: 'Clientes',
        to: '#'
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




































const date = ref(false)
const startDate = ref(new Date()) // Fecha de inicio del período
const endDate = ref(new Date())   // Fecha de finalización del período

// Formatear el período de fechas
const formattedPeriod = ref(`${startDate.value} - ${endDate.value}`)

function formatDate(date) {
    if (!date) {
        return 'periodo'
    }
    const mes = date.getMonth() + 1; // Extraer el mes (agregar 1 porque los meses comienzan desde 0)
    const dia = date.getDate(); // Extraer el día
    const año = date.getFullYear(); // Extraer el año

    // Formatear la fecha con ceros a la izquierda si es necesario
    const fechaFormateada = `${mes.toString().padStart(2, '0')}/${dia.toString().padStart(2, '0')}/${año.toString().slice(-2)}`;

    return fechaFormateada;
}


const selectedCountry = ref({})

const countries = ref()


</script>