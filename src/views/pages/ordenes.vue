<template>
    <!-- {{ store.salesReport }} -->
    <div v-for="orden in store.salesReport.total_sales?.orders_info">
    <!-- {{ orden }} -->
    </div>

    <Button size="small" class="py-2"  severity="success" @click="exportCSV"> <i class="pr-3 " :class="PrimeIcons.DOWNLOAD" ></i> Descargar reporte</Button>

    <div class="flex flex-wrap align-items-center justify-content-between gap-2 my-5 pl-0 ml-0">
                    <span class="text-l p-0  text-900 font-bold">Ordenes {{ store.order_status }}s entre {{ store.formatDate(store.dateRange.startDate)  }} y {{ store.formatDate(store.dateRange.endDate)  }} </span>
                    <div class="flex p-0  flex-column md:flex-row md:justify-content-between md:align-items-center" style="background-color: ;">
                           
                            <span class="block mt-2 md:mt-0 py-0">
                                <!-- <i class="pi pi-search pr-3" /> -->
                                <InputText class="p-2"  v-model="filters['global'].value" placeholder="Buscar..." />
                            </span>
                        </div>
                </div>



        <DataTable paginator  :value="store.salesReport.total_sales.orders_info" tableStyle="min-width: 50rem"
        
        
        :rows="10" :filters="filters"
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                  :rowsPerPageOptions="[5, 10, 25,100]"
                  currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} ordenes"
                  responsiveLayout="scroll" scrollable scroll-height="62vh">

                  
            <template>
                
            </template>
            <Column field="order_id" header="Id" class="p-0" headerStyle="max-width:8rem; width:10rem">
            
                <template #body="slotProps">
                 <P style="min-width: max-content;">
                    {{slotProps.data.order_id}}
                 </P>   
                </template>
            </Column>
            <Column field="total_price" header="Monto" class="p-0" headerStyle="max-width:10rem; width:5rem">
                <template #body="slotProps">
             
                    {{ formatToColombianPeso(slotProps.data.total_order_price)  }}
                </template>
            </Column>


                
      

            <Column field="site_name" header="Sede" class="p-0" headerStyle="max-width:6rem; width:6rem">
                <template #body="slotProps">
                   
                    {{ formatToColombianPeso(slotProps.data.site_name)  }}
                </template>
            </Column>


        
            <Column field="status.timestamp" class="p-0" header="Fecha y hora" headerStyle="width:10rem; min-width:8rem ">
                <template #body="slotProps">
           
                    {{ slotProps.data.latest_status_timestamp?.split('T')[0]}} 
                    {{ slotProps.data.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0,2)?.join(':')}}
                </template>
            </Column>

                 
            <Column class="p-0" v-if="store.order_status == 'cancelada'" headerStyle="width:30rem; max-width:40rem; " field="status.reazon" header="Motivo">
                <template #body="slotProps">
                
                   <span class="motivo">{{ slotProps.data.reason?.toLowerCase()}}.</span> 
                </template>
            </Column>

         
            <Column header="Status" class="p-0"> 
                <template #body="slotProps">
                    <Tag :value="slotProps.data.current_status" :severity="getSeverity(slotProps.data?.current_status)" />
                </template>
            </Column>

        
            <Column class="p-0" header="" frozen alignFrozen="right" headerStyle="width:0.5rem; max-width:0.5rem ">
                <template #body="slotProps">
                    <Button style="width: min-content;" @click="store.setVisibleOrder(true,slotProps.data)" text ><i class="text-2xl  p-0" :class="PrimeIcons.EYE"></i></Button>
                </template>
            </Column>
        </DataTable>




    <OrderDialog>

    </OrderDialog>

</template>


<script setup>
import {useReportesStore} from '@/store/reportes.js'
import { formatToColombianPeso, salesReport } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import {onBeforeMount} from 'vue'
import { FilterMatchMode } from 'primevue/api';
import {ref} from 'vue'
import OrderDialog from '../../components/orderDialog.vue';
import * as XLSX from 'xlsx';

const filters = ref(null);




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


 


const exportCSV = async() => {



    const datosFiltrados = await obtenerDatosFiltrados();
    const data = datosFiltrados.map(order => ({
    // "Id": order.id,
    "Orden No": order.order_id,
    "Monto":order.total_order_price,
    "Sede":order.site_name,
    "Fecha":order.latest_status_timestamp?.split('T')[0],
    "Hora":order.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0,2)?.join(':'),
    "Estado":order.current_status,
    "Domicilio":order.delivery_price,
    "Metodo de pago":order.payment_method,
    "razon de la cancelacion":order.reason || 'es una orden enviada',
    "Nombre del usuario":order.user_name,
    "telefono del usuario":order.user_phone,
    "direccion del usuario":order.user_address
    
    

    // "Nombre": order.name,
    // "Documento": order.dni,
    // "Direccion": order.address,
    // "Cargo": order.position,
    // "Sede": order.site_name,
    // "Estado": order.status,
    // "Género": order.gender,
    // "Fecha de Nacimiento": order.birth_date?.toString() || '',
    // "Teléfono": order.phone,
    // "Correo Electrónico": order.email,
    // "Fecha de Ingreso": order.entry_date?.toString() || '',
    // "Fecha de Salida": order.exit_date?.toString() || '',
    // "Motivo de Salida": order.exit_reason,
    // "Autorización de Datos": order.authorization_data == true ? 'si' : 'no',
    // "País de Nacimiento": order.birth_country,
    // "Departamento de Nacimiento": order.birth_department,
    // "Ciudad de Nacimiento": order.birth_city,
    // "Tipo de Sangre": order.blood_type,
    // "Estado Civil": order.marital_status,
    // "Nivel de Educación": order.education_level,
    // "Tipo de Contrato": order.contract_type,
    // "EPS": order.eps,
    // "Fondo de Pensión": order.pension_fund,
    // "Fondo de Cesantías": order.severance_fund,
    // "Tiene Hijos": order.has_children == true ? 'si' : 'no',
    // "Tipo de Vivienda": order.housing_type,
    // "Tiene Vehiculo": order.has_vehicle == true ? 'si' : 'no',
    // "Tipo de Vehiculo": order.vehicle_type,
    // "Tamaño del Hogar": order.household_size,
    // "Contacto de Emergencia": order.emergency_contact,
    // "Talla de Camisa": order.shirt_size,
    // "Talla de Pantalón": order.jeans_sweater_size,
    // "Certificado de Manejo de Alimentos": order.food_handling_certificate == true ? 'si' : 'no',
    // "Número de Certificado de Manejo de Alimentos": order.food_handling_certificate_number,
    // "Salario": order.salary,
    // "Comentarios/Notas": order.comments_notes
    // Agrega aquí otros campos si es necesario
}));


const worksheet = XLSX.utils.json_to_sheet(data);
worksheet["!cols"] = [
    { wch: Math.max(8, "Id".length) },
    { wch: Math.max(10, "Monto".length) },
    { wch: Math.max(12, "Sede".length) },
    { wch: Math.max(10, "Fecha".length) },
    { wch: Math.max(5, "Hora".length) },
    { wch: Math.max(10, "Estado".length) },
    { wch: Math.max(5, "Domicilio".length) },
    { wch: Math.max(25, "Metodo de pago".length) },
    { wch: Math.max(40, "Fecha de Nacimiento".length) },
    { wch: Math.max(20, "Teléfono".length) },
    { wch: Math.max(10, "Correo Electrónico".length) },
    { wch: Math.max(40, "Fecha de Ingreso".length) },
    { wch: Math.max(15, "Fecha de Salida".length) },
    { wch: Math.max(18, "Motivo de Salida".length) },
    { wch: Math.max(25, "Autorización de Datos".length) },
    { wch: Math.max(20, "País de Nacimiento".length) },
    { wch: Math.max(25, "Departamento de Nacimiento".length) },
    { wch: Math.max(20, "Ciudad de Nacimiento".length) },
    { wch: Math.max(15, "Tipo de Sangre".length) },
    { wch: Math.max(15, "Estado Civil".length) },
    { wch: Math.max(20, "Nivel de Educación".length) },
    { wch: Math.max(18, "Tipo de Contrato".length) },
    { wch: Math.max(20, "EPS".length) },
    { wch: Math.max(18, "Fondo de Pensión".length) },
    { wch: Math.max(18, "Fondo de Cesantías".length) },
    { wch: Math.max(12, "Tiene Hijos".length) },
    { wch: Math.max(18, "Tipo de Vivienda".length) },
    { wch: Math.max(16, "Tiene Vehiculo".length) },
    { wch: Math.max(18, "Tipo de Vehiculo".length) },
    { wch: Math.max(18, "Tamaño del Hogar".length) },
    { wch: Math.max(22, "Contacto de Emergencia".length) },
    { wch: Math.max(15, "Talla de Camisa".length) },
    { wch: Math.max(18, "Talla de Pantalón".length) },
    { wch: Math.max(35, "Certificado de Manejo de Alimentos".length) },
    { wch: Math.max(40, "Número de Certificado de Manejo de Alimentos".length) },
    { wch: Math.max(10, "Salario".length) },
    { wch: Math.max(20, "Comentarios/Notas".length) }]




const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "ventas");

XLSX.writeFile(workbook, "reporte de ventas salchimonster");







};



// exportCSV()
</script>

<style scoped>




*{
    transition: all ease .3s;
}

.motivo{
    text-transform: capitalize;
}


</style>



