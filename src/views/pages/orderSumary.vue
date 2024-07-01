<template>


    <div class="col-12 p-0 md:p-2 m-auto" style="max-width:1024px">

        <p class="text-xl px-0 mx-0 my-0 pb-0" style="font-weight: bold;">
            Inducadores generales</p>



        <div class="grid col-12 p-0 m-0">

            <div class="col-12 lg:col-6 md:px-3 px-0 lg:pl-0 ">
                <div class="card mb-0 m-0">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">Venta bruta</span>
                            <div class="text-900 font-medium text-xl">
                                {{ formatToColombianPeso(store.salesReport?.total_sales?.total_sales) || '$0' }}</div>
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

            <div class="col-12 lg:col-6 md:px-3 px-0 lg:pr-0" style="height: ;">
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


        </div>

        <p class="text-xl px-0 mx-0 my-0 pb-0" style="font-weight: bold;">
            Resumen de ventas</p>

        <p class="text-l px-0 my-4  text-900 font-bold">{{
            convertirFechaUTCaColombia(store.formatDate(store.dateRange.startDate)) }} - {{
                convertirFechaUTCaColombia(store.formatDate(store.dateRange.endDate)) }} </p>


        <DataTable stripedRows :value="store.sumaryData.total_sales" tableStyle="min-width: 100%  max-width:500px"
            :rows="11" :filters="filters" responsiveLayout="scroll" scrollable>


            <template>

            </template>
            <Column field="order_id" header="Sede" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <P class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ slotProps.data.site_name }}
                    </P>
                </template>
            </Column>
            <Column field="order_id" header="Env" class="py-0 px-0" headerStyle="width:3rem;min-width:3rem">

                <template #body="slotProps">
                    <P class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ slotProps.data.total_orders_sent }}
                    </P>
                </template>
            </Column>
            <Column field="order_id" header="$ env" class="py-0 px-0" headerStyle="width:3rem;min-width:2rem">

                <template #body="slotProps">
                    <P class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ formatToColombianPeso(slotProps.data.total_sales_sent) }}
                    </P>
                </template>
            </Column>

            <Column field="order_id" header="Canc" class="py-0 px-0" headerStyle="width:3rem;min-width:3rem">

                <template #body="slotProps">
                    <P class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ slotProps.data.total_orders_cancelled }}
                    </P>
                </template>
            </Column>
            <Column field="order_id" header="$ Canc" class="py-0 px-0" headerStyle="width:12rem;min-width:3rem">

                <template #body="slotProps">
                    <P class="text" :class="slotProps.data.site_name == 'TOTAL' ? 'bold' : ''"
                        style="min-width: max-content;">
                        {{ formatToColombianPeso(slotProps.data.total_sales_cancelled) }}
                    </P>
                </template>
            </Column>






        </DataTable>



        <p class="text-l px-0 my-4  text-900 font-bold">REPORTE CALL CENTER </p>



        <DataTable stripedRows :value="store.sumaryData.creators" tableStyle="min-width: 100%  max-width:500px"
            :rows="11" :filters="filters" responsiveLayout="scroll" scrollable>


            <template>

            </template>
            <Column style="text-transform: uppercase;" field="name" header="Acesor" class="py-0 px-0"
                headerStyle="width:30rem;min-width:10rem">
                <template #body="data">
                    <div class="py-1" style="display: flex; align-items: center;"  :class="data.data.name == 'TOTAL' ? 'bold' : ''" >
                        <img class="pr-2"  v-if="data.data.name !== 'pagina web'" style="height: 1rem;" src="/images/WhatsApp.svg.webp"
                            alt="">

                        <i style="font-weight: bold;" v-if="data.data.name == 'TOTAL'" class="pi pi-plus mr-2"></i>

                        <img class="mr-2" v-if="data.data.name == 'pagina web' || data.data.name == 'TOTAL'" style="height: 1rem;"
                            src="/images/logo.png" alt="">
                        {{ data.data.name }}
                    </div>

                </template>
            </Column>
            <Column style="text-transform: uppercase;" field="orders_generated" header="ingresadas" class="py-0 p-0"
                headerStyle="width:12rem;min-width:3rem">
                <template #body="data">

                    <div class="py-1" :class="data.data.name == 'TOTAL' ? 'bold' : ''">

                        {{ data.data.orders_sent + data.data.orders_cancelled }}
                    </div>
                </template>


            </Column>

            <Column style="text-transform: uppercase;" field="orders_sent" header="enviadas" class="py-0 px-0"
                headerStyle="width:12rem;min-width:3rem">

                <template #body="data">

                    <div class="py-1" :class="data.data.name == 'TOTAL' ? 'bold' : ''">

                        {{ data.data.orders_sent }}
                    </div>
                </template>

            </Column>

            <Column style="text-transform: uppercase;" field="orders_cancelled" header="canceladas" class="py-0 px-0"
                headerStyle="width:12rem;min-width:3rem">

                <template #body="data">

                    <div class="py-1"  :class="data.data.name == 'TOTAL' ? 'bold' : ''">

                        {{ data.data.orders_cancelled }}
                    </div>
                </template>

            </Column>






        </DataTable>



    </div>


</template>


<script setup>
import { useReportesStore } from '@/store/reportes.js'
import { formatToColombianPeso, salesReport } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import { onBeforeMount } from 'vue'

import { FilterMatchMode } from 'primevue/api';
import { ref } from 'vue'
import OrderDialog from '../../components/orderDialog.vue';
import * as XLSX from 'xlsx';

const filters = ref(null);

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

onBeforeMount(() => {
    initFilters();
    // getSites()
});



const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


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
    padding: 0 1rem 0 0;
}
</style>
