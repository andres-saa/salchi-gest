<template>
   

   
  <Dialog class="mx-2 " v-model:visible="visibleAceptRequest" modal header="Aceptar solicitud de requisicion" :style="{ width: '30rem',  }">
   
      <h6 class="m-0 mb-2">Fecha: {{formatDate()  }}</h6>
      <h6 class="m-0">Responsable: {{login.rawUserData.name  }}</h6>
      <h6 class="my-2">  <b> {{ login.rawUserData.name }}  </b> confirmas la aprobacion de la solicitud de requisicion de <b>{{ currentRequest.creator_name }}  </b> para el area  <b>{{ currentRequest.area_name }}</b> aceptando dando por valida la siguiente justificacion:
      
      <Textarea class="my-3" rows="7" style="width: 100%;height:max-content;resize: none;border: 1px solid;" readonly v-model="currentRequest.requisition_description"></Textarea>

      </h6>

      <template #footer>
          <div>
              <Button severity="help" label="No, Pensarlo mejor"></Button>
              <Button text severity="danger" label="Si, Autorizar"></Button>
          </div>
      </template>

  </Dialog>



  <DataTable :paginator="true" :rows="15" style="width: 100%;max-width: 1280px;"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
       :value="requisitions" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b>Solicitudes de rechazadas</b></h4>

               <InputText class="" v-model="filters['global'].value"
               placeholder="Buscar Solicitud..." />



           </div>


       </template>





       <column #body="contract" :header="column.columnName" v-for="column in dataColumns" :field="column.columnValue" class="my-0 py-2">

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





       </DataTable>




</template>


<script setup>



import { ref,onMounted,onBeforeMount } from 'vue';
import { fetchService } from '../../../../service/utils/fetchService';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { loginStore } from '../../../../store/user';


const login = loginStore()

const visibleAceptRequest = ref(false)

const filters = ref(null);
const initFilters = () => {
   filters.value = {
       global: { value: null, matchMode: FilterMatchMode.CONTAINS }
   };
};



function formatDate(date = new Date()) {
const day = date.getDate(); // Obtiene el día como número
const monthIndex = date.getMonth(); // Obtiene el índice del mes (0-11)
const year = date.getFullYear(); // Obtiene el año completo

// Array de nombres de meses abreviados en español
const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

// Formatea el día para siempre tener al menos dos dígitos
const formattedDay = day < 10 ? `0${day}` : day;

// Obtener el nombre del mes usando el índice
const monthName = months[monthIndex];

// Construir la fecha en el formato deseado
return `${formattedDay} / ${monthName} / ${year}`;
}


const currentRequest = ref([])

const chargeRequest = async(request) => {
   visibleAceptRequest.value = true
   currentRequest.value = request
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
       columnName:'Fecha de solicitud',
       columnValue:'created_at_formated',
       columnType:'max-content'
   },

   {
       columnName:'Nombre del solicitante',
       columnValue:'creator_name',
       columnType:'other'

   },

   {
       columnName:'Cargo del solicitante',
       columnValue:'creator_position',
       columnType:'other'

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

  //  {
  //      columnName:'Estado actual',
  //      columnValue:'lap_name',
  //      columnType:'tag'
  //  },

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
  "id": 18,
  "area_id": 5,
  "requester_id": 1082,
  "requisition_lap_id": 12,
  "creator_id": 1082,
  "creator_name": "ANDRES FELIPE ARECHEA",
  "created_at": "2024-10-22T14:22:33",
  "area_name": "Innovación",
  "validation_type_id": 2,
  "lap_name": "Entregado a Gestión Humana",
  "created_at_formated": "22-10-2024  02:22 PM",
  "requisition_description": "Necesidad de personal adicional para apoyar un nuevo proyecto de innovación que busca explorar tecnologías emergentes en nuestra industria.",
  "lap_history": null,
  "creator_position": "Analista de Innovación"
},
{
  "id": 19,
  "area_id": 5,
  "requester_id": 1082,
  "requisition_lap_id": 12,
  "creator_id": 1082,
  "creator_name": "ANDRES FELIPE ARECHEA",
  "created_at": "2024-10-22T14:22:55",
  "area_name": "Innovación",
  "validation_type_id": 2,
  "lap_name": "Entregado a Gestión Humana",
  "created_at_formated": "22-10-2024  02:22 PM",
  "requisition_description": "Solicitud de incremento de equipo debido al crecimiento acelerado de nuestro proyecto piloto que requiere más recursos humanos para su expansión.",
  "lap_history": [
    {
      "time": "22-10-2024  02:22 PM",
      "lap": "No requiere aprobación de la gerencia",
      "responsible": "ANDRES FELIPE ARECHEA",
      "comment": "Decisión automática por política interna debido a la categoría del proyecto."
    },
    {
      "time": "22-10-2024  02:22 PM",
      "lap": "Entregado a Gestión Humana",
      "responsible": "ANDRES FELIPE ARECHEA",
      "comment": "Enviado para la acción inmediata dada la urgencia y el impacto potencial del proyecto."
    }
  ],
  "creator_position": "Analista de Innovación"
}
]


</script>