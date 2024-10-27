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
         :value="vacancies" tableStyle="min-width: 50rem;" :filters="filters">
         <template #header>
             <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                 <h4 class="px-2 my-5"> <i class="fa-regular fa-bars-progress"></i>  <b>Gestor de vacantes</b></h4>
 
                 <InputText class="" v-model="filters['global'].value"
                 placeholder="Buscar Solicitud..." />
 
 
 
             </div>
 
 
         </template>
 
 
 


        <Column class="py-2" header="Imagen" headerStyle="width:5%; min-width:3rem;">
                        <template #body="user">
                            <!-- <span class="p-column-title">Foto</span> -->


                            <img @click="verIMagen(user.data.dni)"
                                :src="user.data.img"
                                @error="onImageError(user.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 4rem; width:4rem; object-fit: cover;" />


                            
                        </template>
                    </Column>



 
 
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

             <h6  v-if="column.columnType == 'text'" class="m-0 p-0" style="min-width: 20rem;">
                 {{ contract.data[column.columnValue] }}
             </h6>


             <h6  v-if="column.columnType == 'link'" class="m-0 p-0">
                <a href="
                " style="color: blue;">
                {{ contract.data[column.columnValue] }}
            </a>

             </h6>
 
             <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'money'" class="m-0 p-0">
                 {{formatoPesosColombianos(contract.data[column.columnValue])  }}
             </h6>
 
             <Tag class="p-2" v-if="column.columnValue == 'active'"  style="color: white;" :severity="`${contract.data[column.columnValue]? 'success' : 'danger'}`">
                 {{ contract.data[column.columnValue]? 'activa' : 'inactiva'}}
             </Tag>
         
         </column>
         <Column class="" style="display: flex; justify-content: center;" header="Actuar" >
         <template #body="data" >

            <div style="display: flex;flex-direction: column; gap:.1rem">
                 <Button style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Ver proceso de seleccion" severity="warning" icon="pi pi-history p-0" class="my-0 py-1"></Button>
                 <Button v-if="!data.data.active" style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Abrir recepcion" severity="success" icon="pi pi-check p-0" class="my-0 py-1"></Button>
                 <Button v-else style="min-width: max-content" size="small" @click="chargeHistory(data.data.lap_history)" label="Cerrar recepcion" severity="danger" icon="pi pi-times p-0" class="my-0 py-1"></Button>
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
         columnName:'Titulo',
         columnValue:'title',
         columnType:'max-content'
 
     },
     {
         columnName:'Descripcion',
         columnValue:'description',
         columnType:'text'
     },

 
     {
         columnName:'Creada por',
         columnValue:'creator_name',
         columnType:'max-content'
 
     },
     {
         columnName:'Aplicantes',
         columnValue:'applicants_quantity',
         columnType:'link'
 
     },
     {
         columnName:'Fecha de creacion',
         columnValue:'start_date_formated',
         columnType:'max-content'
     },


     {
         columnName:'Estado',
         columnValue:'active',
         columnType:'tag'
     },
 
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
 

 const vacancies = [
  {
    "id": 1,
    "requisition_id": 29,
    "exists": true,
    "created_by": 3001,
    "created_at": "2024-10-22T08:30:00",
    "title": "Cocinero de Comidas Rápidas",
    "description": "Se requiere cocinero con experiencia en preparación de alimentos rápidos y en trabajar bajo presión durante horarios pico.",
    "image_identifier": "cook_vacancy",
    "start_date": "2024-10-24T08:00:00+00:00",
    "active": true,
    "start_date_formated": "24-10-2024 08:00 AM",
    "creator_name": "JUAN CARLOS PÉREZ",
    "applicants_quantity": 45,
    "img":'https://cdn.euroinnova.edu.es/img/subidasEditor/1-1638277250.webp'
  },
  {
    "id": 2,
    "requisition_id": 30,
    "exists": true,
    "created_by": 3005,
    "created_at": "2024-10-22T09:00:00",
    "title": "Cajero",
    "description": "Buscamos cajero con habilidades en atención al cliente y manejo de caja registradora. Experiencia previa deseada.",
    "image_identifier": "cashier_vacancy",
    "start_date": "2024-10-25T09:00:00+00:00",
    "active": true,
    "start_date_formated": "25-10-2024 09:00 AM",
    "creator_name": "MARÍA GARCÍA",
    "applicants_quantity": 60,
    "img":'https://i.ytimg.com/vi/5bh-cca7-j0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7KxVOYfVXJxcumwlya2zxedeWMw'
  },
  {
    "id": 3,
    "requisition_id": 31,
    "exists": true,
    "created_by": 3010,
    "created_at": "2024-10-23T10:15:00",
    "title": "Empleado de Autoservicio",
    "description": "Se solicita empleado para la entrega de pedidos en autoservicio. Se requiere disponibilidad para turnos nocturnos y rapidez en la atención.",
    "image_identifier": "drive_thru_vacancy",
    "start_date": "2024-10-26T10:00:00+00:00",
    "active": true,
    "start_date_formated": "26-10-2024 10:00 AM",
    "creator_name": "CARLOS RAMÍREZ",
    "applicants_quantity": 30,
    "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMPxureWfSSA110TQmuMcaBkJnqnv5DxvIQ&s'

  },
  {
    "id": 4,
    "requisition_id": 32,
    "exists": true,
    "created_by": 3020,
    "created_at": "2024-10-23T12:45:00",
    "title": "Empleado de Limpieza",
    "description": "Se requiere personal de limpieza para el área del comedor y cocina. Turno de la tarde y fines de semana incluidos.",
    "image_identifier": "cleaning_staff_vacancy",
    "start_date": "2024-10-27T12:00:00+00:00",
    "active": true,
    "start_date_formated": "27-10-2024 12:00 PM",
    "creator_name": "LAURA MENDOZA",
    "applicants_quantity": 20,
    "img":'https://www.jover-abogados.com/wp-content/uploads/elementor/thumbs/subrogacion-personal-servicio-limpieza-q1ke7mt2zolcgkfk4xrtilbijojbu69t4n1onxu3pc.jpg'


  }
]

 
 
 </script>