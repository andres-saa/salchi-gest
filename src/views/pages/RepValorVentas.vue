<template>
    <div class="p-0 m-0">

        <div class="grid col-12 p-0 m-0">

            <div class=" grid" style="">
                <div class="col-12 lg:col-6 pr-3 lg:pl-0 ">
                    <div class="card mb-0">
                        <div class="flex justify-content-between mb-3">
                            <div>
                                <span class="block text-500 font-medium mb-3">Venta bruta</span>
                                <div class="text-900 font-medium text-xl">
                                    {{ formatToColombianPeso(store.salesReport?.total_sales?.total_sales) || '$0' }}
                                </div>
                            </div>
                            <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                                style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>

                        <div style="display:flex; align-items: center;">
                            <span class="text-500">Total de ordenes</span>


                            <RouterLink to="/reporte-ventas/ordenes">
                                <Button outlined class="p-2 font-medium ml-3  "
                                    :style="store.order_status == 'enviada' ? 'color:var(--blue-500);background-color:var(--blue-100)' : 'color:rgba(255, 99, 132, 1);background-color:var(--pink-100)'"
                                    style="border: none ;"> ordenes</Button>

                            </RouterLink> <span class=" font-medium ml-3"
                                :style="store.order_status == 'enviada' ? 'color:var(--blue-500)' : 'color:rgba(255, 99, 132, 1)'">{{
                                    store.salesReport?.total_sales?.total_orders || 0 }} </span>
                        </div>

                    </div>
                </div>

            
                <div class="col-12 lg:col-6 pl-3 lg:pr-0" style="height: ;">
                    <div class="card mb-0" style="height: 100%;">
                        <div class="flex justify-content-between mb-3">
                            <div>
                                <span class="block text-500 font-medium mb-3">Ticket promedio</span>
                                <div class="text-900 font-medium text-xl">
                                    {{ formatToColombianPeso(store.salesReport?.total_sales?.average_ticket) || '$0' }}
                                </div>
                            </div>
                            <div class="flex align-items-center justify-content-center bg-orange-100 border-round"
                                style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <!-- <span class="text-green-500 font-medium">%52+ </span> -->
                        <span class="text-500">Valor de la venta promedio</span>
                    </div>
                </div>

                <div class="col-12 px-3 lg:px-3  m-auto card  p-3  " style="">

                    <h5 style="background-color: ;">Historico de ordenes <span
                            :style="store.order_status == 'enviada' ? 'color:var(--blue-500)' : 'color:rgba(255, 99, 132, 1)'">{{
                            store.order_status }}s</span> </h5>
                    <!-- <Chart type="bar" :data="lineData" :options="lineOptions" /> -->

                    <Button class="p-0" text @click="visible_graph = true" size="small" style="border: none;"
                        :style="store.order_status == 'enviada' ? 'color:var(--blue-500)' : 'color:rgba(255, 99, 132, 1)'"><i
                            class="text-4xl" style="transform: rotate(45deg);;"
                            :class="PrimeIcons.ARROW_A"></i></Button>

                            
                    <Chart type="line" :data="store.ventasCharData" :options="chartOptions" />




                </div>

            </div>

        </div>


        <Dialog v-model:visible="visible_graph" modal header="Periodo" :style="{ width: '90vw' }">
            <!-- <RepValorVentas></RepValorVentas> -->
            <Chart type="line" :data="store.ventasCharData" :options="chartOptions" />

        </Dialog>

    </div>
</template>

<!-- 
<script setup>












import { onMounted, reactive, ref, watch } from 'vue';
// import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';

const { isDarkTheme } = useLayout();


const ruta = useRoute()







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


</script> -->


<script setup>
import { ref, onMounted } from "vue";
import { salesReport, formatToColombianPeso } from "../../service/valoresReactivosCompartidos";
import { URI } from "../../service/conection";
import { useReportesStore } from '@/store/reportes.js'
import { PrimeIcons } from "primevue/api";
const store = useReportesStore()
const visible_graph = ref(false)
onMounted(() => {
    // store.fetchDilyReport()
    chartOptions.value = setChartOptions();
});


const chartData = ref();
const chartOptions = ref();





const fetchSalesReport = async () => {
    //   const formattedStartDate = formatDate(startDate.value);
    //   const formattedEndDate = formatDate(endDate.value);
    //   const siteIds = selectedSites.value.map(site => site.site_id).join(',');

    // Construir la URL con parámetros de consulta
    const queryParams = new URLSearchParams({
        site_ids: '7',
        status: 'enviada',
        start_date: '2024-01-01',
        end_date: '2024-02-08'
    });

    const url = `${URI}/daily_sales?${queryParams.toString()}`;

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
        // salesReport.value = data
        return (data)


        // Maneja la respuesta
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};



// fetchSalesReport()



// onMounted(() => {
//     store.fetchSalesReport()    

// })






const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: true,
        aspectRatio: 3,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    display: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,

                }
            }
        }
    };
}





</script>