<template>






    <div class="mx-auto mt-8" style="width: 100%; max-width: 900px;">
        <div style="background-color: rgba(0, 255, 76, 0.2);border: 1px solid;" class="m-0">
            <h3 class="text-center py-5 m-1" style="width: 100%;"> <b>Contratación completada; ya le informamos al líder Andrés Arrechea.</b>
            </h3>
        </div>

<br>

        <div class="grid gap-0 m-0 p-0">

            <div class="col-6 p-2" style="outline: 1px solid;">
                <h4 class="m-0">Fecha de ingreso</h4>
            </div>

            <div class="col-6 p-2" style="outline: 1px solid;">
                <h4 class="m-0">23-oct-2024</h4>
            </div>


            <div class="col-6 p-2" style="outline: 1px solid;">
                <h4 class="m-0">Nombre del empleado</h4>
            </div>

            <div class="col-6 p-2" style="outline: 1px solid;">
                <h4 class="m-0"> Ana Gómez                </h4>
            </div>


            <div class="col-3 p-2" style="outline: 1px solid;">
                <h4 class="m-0">Tipo de documento</h4>
            </div>

            <div class="col-1 p-2" style="outline: 1px solid;">
                <h4 class="m-0">C.C</h4>
            </div>

            <div class="col-4 p-2" style="outline: 1px solid;">
                <h4 class="m-0">Numero de documento</h4>
            </div>

            <div class="col-4 p-2" style="outline: 1px solid;">
                <h4 class="m-0">1003153254</h4>
            </div>

            <div class="col-7 p-2" style="outline: 1px solid;">
                <h4 class="m-0">Telefono</h4>
            </div>

            <div class="col-5 p-2" style="outline: 1px solid;">
                <h4 class="m-0">3226892988</h4>
            </div>



        </div>





        <div style="display: flex;justify-content: end; width: 100%;">

            <Button class="my-4" label="Crear Usuario" severity="help"></Button>

        </div>
    </div>





</template>


<script setup>



import { ref, onMounted, onBeforeMount } from 'vue';
import { fetchService } from '@/service/utils/fetchService';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';

import { PathService } from '@/service/pathService.js'

const isActive = PathService.isActiveRoute


const documentos = [
    "Fotocopia de la cédula ampliadas al 150%",
    "Hoja de vida",
    "Certificados académicos",
    "Referencias Laborales",
    "Certificado de antecedentes",
    "Antecedentes penales y requerimientos judiciales",
    "Certificación cuenta bancaria de nómina",
    "Otros solicitados"
];

const navItems = [
    { label: "Pendientes por revisar", icon: "fa-regular fa-file-alt", path: "resume-review" },
    { label: "Descartados", icon: "fa-regular fa-filter", path: "preliminary-filter" },

];



const showHistoryDialog = ref(false)

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


const currentOrderHistory = ref([])

const chargeHistory = async (historial) => {
    showHistoryDialog.value = true
    currentOrderHistory.value = historial
}

onBeforeMount(() => {
    initFilters();

});


const dataColumns = [

    //  {
    //          columnName:'Id',
    //          columnValue:'id',
    //          columnType:'other'
    //      },
    {
        columnName: 'Nombre',
        columnValue: 'name',
        columnType: 'max-content'

    },
    {
        columnName: 'Correo electronico',
        columnValue: 'email',
        columnType: 'other'
    },


    {
        columnName: 'Telefono',
        columnValue: 'phone',
        columnType: 'other'

    },
    //  {
    //      columnName:'Aplicantes',
    //      columnValue:'applicants_quantity',
    //      columnType:'link'

    //  },
    //  {
    //      columnName:'Fecha de creacion',
    //      columnValue:'start_date_formated',
    //      columnType:'max-content'
    //  },


    //  {
    //      columnName:'Estado',
    //      columnValue:'active',
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



const participants = [
    { id: 1, name: "Ana Gómez", email: "ana.gomez@example.com", phone: "1122334455" },
    { id: 2, name: "Juan Pérez", email: "juan.perez@example.com", phone: "2233445566" },
    { id: 3, name: "Laura Martínez", email: "laura.martinez@example.com", phone: "3344556677" },
    { id: 4, name: "Carlos López", email: "carlos.lopez@example.com", phone: "4455667788" },
    { id: 5, name: "Sara Jiménez", email: "sara.jimenez@example.com", phone: "5566778899" },
    { id: 6, name: "Diego Ramírez", email: "diego.ramirez@example.com", phone: "6677889900" },
    { id: 7, name: "Carmen Hernández", email: "carmen.hernandez@example.com", phone: "7788990011" },
    { id: 8, name: "Francisco García", email: "francisco.garcia@example.com", phone: "8899001122" },
    { id: 9, name: "Beatriz Álvarez", email: "beatriz.alvarez@example.com", phone: "9900112233" },
    { id: 10, name: "Manuel Ortiz", email: "manuel.ortiz@example.com", phone: "0011223344" },
    // Continúa añadiendo participantes hasta llegar a 50
];


</script>



<style scoped>
ul {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 1rem;
    width: min-content;
    padding-right: 3rem;
    margin: 0;
}

@media (width < 1000px) {

    ul {

        justify-content: start;
        padding: 0.5rem 0;

    }

}

.nav-bar--item {
    padding-bottom: 0.3rem;
}


.nav-bar {
    margin: 0 auto;
    width: min-content;
    background-color: rgb(255, 255, 255);
    padding: 0;
    width: min-content;
    /* position: sticky; */
    /* top:3rem; */
    width: 100%;
    z-index: 99;
    border-radius: 100rem;
    overflow: hidden;
}

li {
    list-style: none;
}

.container {
    margin-top: 3rem;
    position: relative;
    margin: auto;
    width: min-content;


}


.nav-var--item-button {
    color: gray;
    border-radius: 0%;
    padding: 0.5rem;
    min-width: max-content;
}

.nav-var--item-button-selected {
    box-shadow: 0 0.3rem var(--primary-color);
    color: black;
}
</style>