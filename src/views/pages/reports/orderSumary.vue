<template>


    <div class="col-12 p-0 md:p-2 m-auto" style="">



        <p class="text-xl px-0 mx-0 my-3 pb-0" style="font-weight: bold;">
            RESUMEN DE VENTAS</p>

        <p class="text-l px-0 my-4  text-900 font-bold" style="text-transform: uppercase;">{{
            convertirFechaUTCaColombia(store.formatDate(store.dateRange.startDate)) }}   ->   {{
                convertirFechaUTCaColombia(store.formatDate(store.dateRange.endDate)) }} </p>


        <DataTable style="box-shadow: 0 0 1rem #00000030  ;border-radius: .5rem; overflow: hidden;" :loading="store.loading.visible" stripedRows showGridLines :value="store.sumaryData.total_sales" tableStyle="min-width: 100%  max-width:500px"
            :rows="11" :filters="filters" responsiveLayout="scroll" scrollable>


            <template>

            </template>
            <Column field="order_id" header="SEDE   " class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ slotProps.data.site_name }}
                    </p>
                </template>
            </Column>


            <Column field="order_id" header="#_BOT" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem;color:var(--green-500)">

            <template #body="slotProps">
                <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                    style="min-width: max-content;background-color: #22c55e5c;">
                    {{ slotProps.data.orders_chatbot }}
                </p>
            </template>
            </Column>

            <Column field="order_id" header="$_BOT" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem;color:var(--green-500)">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: #22c55e5c;">
                        {{formatToColombianPeso(slotProps.data.sales_chatbot) || '$ 0'  }}
                    </p>
                </template>
            </Column>


            <Column field="order_id" header="#_WEB" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem;color:var(--primary-color)">
            <template #body="slotProps">
                <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                    style="min-width: max-content;background-color: #ff620061;">
                    {{ slotProps.data.orders_web }}
                </p>
            </template>
            </Column>

            <Column field="order_id" header="$_WEB" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem;color:var(--primary-color)">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: #ff620061;">
                        {{formatoPesosColombianos(slotProps.data.sales_web) || '$ 0'  }}
                    </p>
                </template>
            </Column>


            <Column field="order_id" header="#_C.CENTER" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">
            <template #body="slotProps">
                <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                    style="min-width: max-content;background-color: var(--blue-100);">
                    {{ slotProps.data.orders_callcenter }}
                </p>
            </template>
            </Column>

            <Column field="order_id" header="$_C.CENTER" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color:  var(--blue-100);;">
                        {{ formatoPesosColombianos(slotProps.data.sales_callcenter)  }}
                    </p>
                </template>
            </Column>








            <Column field="order_id" header="#_TOTAL_ENV" class="py-0 px-0" headerStyle="width:3rem;min-width:3rem; min-width:max-content" >

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: #ffff0042;">
                        {{ slotProps.data.total_orders_sent }}
                    </p>
                </template>
            </Column>
            <Column field="order_id" header="$_TOTAL_ENV" class="py-0 px-0" headerStyle="width:3rem;min-width:2rem">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: #ffff0042;">
                        {{ formatToColombianPeso(slotProps.data.total_sales_sent) || '$ 0'}} 
                    </p>
                </template>
            </Column>

            <Column field="order_id" header="CANC" class="py-0 px-0" headerStyle="width:3rem;min-width:3rem">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: var(--red-100);">
                        {{ slotProps.data.total_orders_cancelled || 0 }}
                    </p>
                </template>
            </Column>
            <Column field="order_id" header="$_CANC" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <p class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;background-color: var(--red-100);">
                        {{ formatToColombianPeso(slotProps.data.total_sales_cancelled) ||
                            '$ 0.0'
                        }}
                    </p>
                </template>
            </Column>






        </DataTable>




        <p class="text-xl px-0 mx-0 my-6 pb-0" style="font-weight: bold;">
            REPORTE CALLCENTER</p>


        <DataTable  style="box-shadow: 0 0 1rem #00000030  ;border-radius: .5rem; overflow: hidden;" :loading="store.loading.visible" stripedRows showGridLines :value="store.sumaryData.callcenter_report" tableStyle="min-width: 100%  max-width:500px"
            :rows="11" :filters="filters" responsiveLayout="scroll" scrollable>


            <template>

            </template>
            <Column :style="`background-color:${call_colors[column?.split(' ').slice(0,1)]}`"  v-for="column in columnsd" style="text-transform: uppercase;" :header="column?.split(' ').slice(0,1).join(' ') + ' ' +  column?.split(' ')?.reverse()[0]" field="order_id" header="SEDE   " class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <p v-if="!column?.includes('Dinero')" class="text" :class="slotProps.data['SEDE '] == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ slotProps.data[column]  }}
                    </p>

                    <p class="text" v-else :class="slotProps.data['SEDE '] == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ formatoPesosColombianos(slotProps.data[column] ) }}
                    </p>    

                </template>
            </Column>




        </DataTable>



    </div>


</template>


<script setup>
import { useReportesStore } from '@/store/reportes.js'
import { formatToColombianPeso, salesReport } from '@/service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import { onBeforeMount, onMounted, watch } from 'vue'
import { FilterMatchMode } from 'primevue/api';
import { ref } from 'vue'
import OrderDialog from '@/components/orderDialog.vue';
import * as XLSX from 'xlsx';
import { formatoPesosColombianos } from '@/service/formatoPesos';
import { URI } from '../../../service/conection';
const filters = ref(null);




const call_colors = {
    LILIAN:'var(--red-100)',
    ALEXANDRA:'var(--yellow-100)'
}

const columnsd = ref()
function convertirFechaUTCaColombia(fechaUTC) {
    // Crear un objeto de fecha con la fecha UTC
    const fecha = new Date(fechaUTC);

    // Opciones para el formateador de fecha
    const opciones = {
        weekday: 'long', // nombre del día de la semana
        year: 'numeric',
        month: 'long', // nombre del mes
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true // formato de 12 horas
    };

    // Crear un formateador de fecha para Colombia
    const formateador = new Intl.DateTimeFormat('es-CO', opciones);

    // Convertir la fecha UTC a hora local de Colombia y formatearla
    return formateador.format(fecha);
}


const store = useReportesStore()


const  fetchSumaryReport = async () => {
    store.setLoading(true, 'cargando reporte')

    const formattedStartDate = store.formatDate(store.dateRange.startDate)
    const formattedEndDate = store.formatDate(store.dateRange.endDate)
    const siteIds = store.selectedSites.map(site => site.site_id).join(',');

  // Construir la URL con parámetros de consulta
  const queryParams = new URLSearchParams({
      site_ids: siteIds,
      start_date: formattedStartDate,
      end_date: formattedEndDate
  });

  const url = `${URI}/sales_report_sumary?${queryParams.toString()}`;

  try {
      const response = await fetch(url, {
          method: 'GET', // Método GET especificado aquí
          headers: {
              'Content-Type': 'application/json',
              // Agrega aquí otros encabezados si son necesarios
          }
      });

      if (!response.ok) {
        store.setLoading(false, 'cargando reporte')

          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // salesReport.value = data

      store.sumaryData = data


      if (data) {
        const columns = Object.keys(data.callcenter_report[0])
        // columnsd.value = columns
        columns? columnsd.value = columns  : columnsd.value = []   }

      store.setLoading(false, 'cargando reporte')


  } catch (error) {
      console.error('Fetch error:', error);
      store.setLoading(false, 'cargando reporte')
  }
}


onMounted(async () => {
 
    await fetchSumaryReport(); 

    // 5. Actualizar el rango "anterior"
  
});

onBeforeMount(() => {
    initFilters();
    // getSites()
});



const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


watch(() => store.dateRange, async() => {
    // alert('hola')
   await  fetchSumaryReport()
},{deep:true})


watch(() => store.reportar, async() => {
    // alert('hola')
   await  fetchSumaryReport()
},{deep:true})


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



const obtenerDatosFiltrados = async () => {


    let Orders1 = [...store.salesReport.total_sales.orders_info];

    store.order_status = store.order_status == 'enviada' ? 'cancelada' : 'enviada';
    // Esperamos a que se complete la operación asincrónica
    await store.fetchSalesReport();

    // Ahora podemos trabajar con los datos actualizados
    Orders1 = Orders1.concat([...store.salesReport.total_sales.orders_info]);
    // store.order_status = store.order_status == 'enviada' ? 'cancelada' : 'enviada';

    if (!filters?.value?.global.value) {
        return Orders1
    }

    const filtroGlobal = filters.value.global.value.trim().toLowerCase();


    // store.fetchSalesReport()

    return Orders1.filter(order => {
        // Asumiendo que `order` es un objeto y comprobamos cada propiedad
        return Object.values(order).some(value =>
            value && value.toString().trim().toLowerCase().includes(filtroGlobal)
        );
    });
};



const exportCSV = async () => {
    const datosFiltrados = await obtenerDatosFiltrados();
    const data = datosFiltrados.map(order => ({
        "Orden No": order.order_id,
        "Monto": order.total_order_price,
        "Sede": order.site_name,
        "Fecha": order.latest_status_timestamp?.split('T')[0],
        "Hora": order.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0, 2)?.join(':'),
        "Estado": order.current_status,
        "Responsable": order.responsible ? `cancelada por ${order.responsible}` : 'no aplica',
        "razon de la cancelacion": order.reason || 'no aplica',
        "Domicilio": order.delivery_price,
        "Metodo de pago": order.payment_method,
        "Nombre del usuario": order.user_name,
        "telefono del usuario": order.user_phone,
        "direccion del usuario": order.user_address
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    // Calcular el ancho máximo de cada columna
    const colWidths = data.reduce((widths, row) => {
        Object.keys(row).forEach((key, i) => {
            const contentLength = row[key]?.toString().length || 0;
            widths[i] = Math.max(widths[i] || 10, contentLength);
        });
        return widths;
    }, []);

    worksheet["!cols"] = colWidths.map(maxWidth => ({
        wch: maxWidth
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ventas");
    XLSX.writeFile(workbook, "reporte de ventas salchimonster.xlsx");
};





// exportCSV()
</script>

<style scoped>
* {
    transition: all ease .3s;
    color: black;
}

.motivo {
    text-transform: capitalize;
}


.bold {
    font-weight: bold;
    font-size: 1.1rem;
    background-color: var(--blue-100);


}

.text {
    padding: 0 1rem 0 1rem;
}
</style>
