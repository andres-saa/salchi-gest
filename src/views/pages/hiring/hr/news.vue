<template>
   

   
   <Dialog class="mx-2 " v-model:visible="showHistoryDialog" modal header="Historial mi solicitud" :style="{ width: '30rem',  }">
    
    <Timeline :value="currentOrderHistory">
        <template #opposite="data" align="">
            <div style="display: flex;flex-direction: column;">
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.time?.split(' ')[0]}}</p>
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.time?.split(' ')?.slice(2,3)?.[0]}}</p>
            </div>
           
        </template>
        <template #content="data">
            <p class="m-0"> <b>{{data.item.lap}}</b></p>

            <div>
                
            </div>
            <p class="m-0">{{data.item.responsible}}</p>

            <p v-if="data.item.notes">
                <b>Notas</b>
                {{ data.item.notes }}
            </p>
            <br>
            <div style="display: flex;gap: 1rem; ">

                <!-- <Button  :disabled="!data.item.notes"  style="height: 2rem;opacity: 0; border-radius: 0.3rem;" cla severity="help" class="" label="Notas"></Button>
                <Button :disabled="!data.item.conflict" style="height: 2rem;border-radius: 0.3rem;" severity="danger" class="mb-4" label="Conflictos"></Button> -->
            </div>
            
        </template>
    </Timeline>


</Dialog>



   <DataTable :paginator="true" :rows="15" style="width: 100%;max-width: 1280px;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="requisitions" tableStyle="min-width: 50rem;" :filters="filters">
        <template #header>
            <div class="grid p-3 my-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b>Solicitudes de requisición</b></h4>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar Solicitud..." />



            </div>


        </template>





        <column #body="contract" :header="column.columnName" v-for="column in dataColumns" :field="column.columnValue" class="my-0 py-0">

            <h6  style="min-width: max-content;" v-if="column.columnType=='date'" class="m-0 p-0">
                {{ contract.data[column.columnValue]?.split('-').reverse().join('-') }}
            </h6>

            <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'max-content'" class="m-0 p-0">
                {{ contract.data[column.columnValue] }}
            </h6>

            <h6  v-if="column.columnType == 'other'" class="m-0 p-0">
                {{ contract.data[column.columnValue] }}
            </h6>

            <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'money'" class="m-0 p-0">
                {{formatoPesosColombianos(contract.data[column.columnValue])  }}
            </h6>

            <Tag class="p-2" v-if="column.columnValue == 'lap_name'"  style="color: white;" :style="`background-color:${tags.find(tag => tag.id == contract.data.requisition_lap_id)?.backgroundColor }`">
                {{ contract.data[column.columnValue]}}
            </Tag>
        
        </column>

        <Column class="" style="display: flex; justify-content: center;" header="Actuar" >
         <template #body="data" >

            <div style="display: flex;flex-direction: column; gap:.1rem">
                 <Button style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Ver historial" severity="warning" icon="pi pi-history p-0" class="my-0 py-1"></Button>
                 <Button style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Crear vacante" severity="success" icon="pi pi-check p-0" class="my-0 py-1"></Button>
                 <Button style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Rechazar solicitud" severity="danger" icon="pi pi-times p-0" class="my-0 py-1"></Button>
            </div>
         </template>
        
        </Column>




        </DataTable>




</template>


<script setup>



import { ref,onMounted,onBeforeMount } from 'vue';
import { fetchService } from '../../../../service/utils/fetchService';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';


const showHistoryDialog = ref(false)

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


const currentOrderHistory = ref([])

const chargeHistory = async(historial) => {
    showHistoryDialog.value = true
    currentOrderHistory.value = historial
}

onBeforeMount(() => {
    initFilters();

});


const dataColumns = [
    {
        columnName:'Id',
        columnValue:'id',
        columnType:'other'
    },

    {
        columnName:'Nombre del solicitante',
        columnValue:'creator_name',
        columnType:'other'

    },
    {
        columnName:'Fecha de solicitud',
        columnValue:'created_at_formated',
        columnType:'max-content'
    },
    {
        columnName:'Area de solicitud',
        columnValue:'area_name',
        columnType:'max-content'

    },
    {
        columnName:'Justificacion de la requisicion',
        columnValue:'requisition_description',
        columnType:'other'
    },
    // {
    //     columnName:'Estado actual',
    //     columnValue:'lap_name',
    //     columnType:'tag'
    // },

    // {
    //     columnName:'Dias restantes',
    //     columnValue:'days_remaining',
    //     columnType:'other'
    // },

    // {
    //     columnName:'Salario',
    //     columnValue:'salary',
    //     columnType:'money'
    // },
    // {
    //     columnName:'Creado por',
    //     columnValue:'creator_name',
    //     columnType:'max-content'
    // },
    // {
    //     columnName:'Estado',
    //     columnValue:'active',
    //     columnType:'bool'
    // },
 
]


const tags = [
    { id: 1, name: "Pendiente de aprobación", color: "#FFFFFF", backgroundColor: "#FF5733" },  // Rojo oscuro
    { id: 2, name: "Aprobado por Gerencia", color: "#FFFFFF", backgroundColor: "#2980B9" },    // Azul oscuro
    { id: 3, name: "Publicada en web", color: "#FFFFFF", backgroundColor: "#8E44AD" },        // Púrpura oscuro
    { id: 4, name: "Revisión de hojas de vida", color: "#FFFFFF", backgroundColor: "#27AE60" }, // Verde oscuro
    { id: 5, name: "Filtro 1, preliminares", color: "#FFFFFF", backgroundColor: "#D35400" },   // Naranja oscuro
    { id: 6, name: "Filtro 2, primera entrevista", color: "#FFFFFF", backgroundColor: "#C0392B" }, // Rojo bermellón
    { id: 7, name: "Filtro 3, segunda entrevista", color: "#FFFFFF", backgroundColor: "#16A085" }, // Turquesa oscuro
    { id: 8, name: "Revisión de Exámenes", color: "#FFFFFF", backgroundColor: "#34495E" },   // Azul Asfalto
    { id: 9, name: "Recepción de documentos", color: "#FFFFFF", backgroundColor: "#F39C12" }, // Amarillo oscuro
    { id: 10, name: "Contratación completada", color: "#FFFFFF", backgroundColor: "#2ECC71" }, // Verde esmeralda
    { id: 12, name: "Entregado a Gestión Humana", color: "#FFFFFF", backgroundColor: "#3498DB" }, // Azul brillante
    { id: 13, name: "Rechazado por gerencia general", color: "#FFFFFF", backgroundColor: "#E74C3C" }, // Rojo alizarina
    { id: 14, name: "No requiere aprobación de la gerencia", color: "#FFFFFF", backgroundColor: "#95A5A6" }, // Gris pizarra claro
    { id: 15, name: "Solicitud registrada", color: "#FFFFFF", backgroundColor: "#7F8C8D" }, // Gris pizarra
    { id: 16, name: "Rechazada por Gestión Humana", color: "#FFFFFF", backgroundColor: "#E74C3C" }  // Verde jade
];


const requisitions = [
  {
    "id": 29,
    "area_id": 1,
    "requester_id": 3001,
    "requisition_lap_id": 14,
    "creator_id": 3001,
    "creator_name": "JUAN CARLOS PÉREZ",
    "created_at": "2024-10-22T08:00:30",
    "area_name": "Cocina",
    "validation_type_id": 2,
    "lap_name": "Entregado a Recursos Humanos",
    "created_at_formated": "22-10-2024 08:00 AM",
    "requisition_description": "Contratación de dos cocineros para cubrir el aumento de pedidos durante el horario de almuerzo.",
    "lap_history": [
      {
        "time": "22-10-2024 08:15 AM",
        "lap": "Entregado a Recursos Humanos",
        "responsible": "JUAN CARLOS PÉREZ",
        "comment": "Personal adicional necesario para mantener la rapidez en la preparación de pedidos."
      }
    ],
    "creator_position": "Jefe de Cocina"
  },
  {
    "id": 30,
    "area_id": 2,
    "requester_id": 3005,
    "requisition_lap_id": 15,
    "creator_id": 3005,
    "creator_name": "MARÍA GARCÍA",
    "created_at": "2024-10-22T09:30:20",
    "area_name": "Caja",
    "validation_type_id": 1,
    "lap_name": "Aprobado por Gerente General",
    "created_at_formated": "22-10-2024 09:30 AM",
    "requisition_description": "Reemplazo de un cajero por baja médica, para garantizar la agilidad en la atención al cliente.",
    "lap_history": [
      {
        "time": "22-10-2024 09:45 AM",
        "lap": "Aprobado por Gerente General",
        "responsible": "MARÍA GARCÍA",
        "comment": "Reemplazo necesario para mantener el flujo de clientes en caja."
      }
    ],
    "creator_position": "Supervisora de Caja"
  },
  {
    "id": 31,
    "area_id": 3,
    "requester_id": 3010,
    "requisition_lap_id": 14,
    "creator_id": 3010,
    "creator_name": "CARLOS RAMÍREZ",
    "created_at": "2024-10-23T10:20:45",
    "area_name": "Autoservicio",
    "validation_type_id": 2,
    "lap_name": "Entregado a Recursos Humanos",
    "created_at_formated": "23-10-2024 10:20 AM",
    "requisition_description": "Contratación de dos empleados para manejar la entrega de pedidos en el autoservicio durante el horario nocturno.",
    "lap_history": [
      {
        "time": "23-10-2024 10:35 AM",
        "lap": "Entregado a Recursos Humanos",
        "responsible": "CARLOS RAMÍREZ",
        "comment": "Necesario para mejorar los tiempos de entrega en el autoservicio."
      }
    ],
    "creator_position": "Gerente de Turno"
  },
  {
    "id": 32,
    "area_id": 4,
    "requester_id": 3020,
    "requisition_lap_id": 15,
    "creator_id": 3020,
    "creator_name": "LAURA MENDOZA",
    "created_at": "2024-10-23T12:30:10",
    "area_name": "Limpieza",
    "validation_type_id": 1,
    "lap_name": "Aprobado por Gerente General",
    "created_at_formated": "23-10-2024 12:30 PM",
    "requisition_description": "Contratación de un empleado de limpieza para cubrir turnos de la tarde y mantener la higiene en el comedor.",
    "lap_history": [
      {
        "time": "23-10-2024 12:45 PM",
        "lap": "Aprobado por Gerente General",
        "responsible": "LAURA MENDOZA",
        "comment": "Personal necesario para mantener la limpieza durante las horas pico."
      }
    ],
    "creator_position": "Supervisora de Limpieza"
  }
]





</script>