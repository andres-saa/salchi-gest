<template>
    
    <div class="container m-auto px-3 ">
       
        
        <!-- <img src="/images/logo.png"> -->
        <h4 class="title">  <i class="fa-duotone fa-solid fa-person-circle-question"></i> <b> Solicitud de Requisición</b></h4>

        <span><h6 style="text-transform: capitalize;">Solicitante: {{ login?.rawUserData?.name?.toLowerCase() }}</h6></span>
        <span><h6>Fecha:    {{ formatDate() }}</h6></span>
        <span><h6>Sede</h6></span>
   
        <Dropdown :options="sites.filter(s => s.show_on_web)" v-model="selectedSite" >
            <!-- Plantilla para la opción mostrada en la lista desplegable -->
            <template #option="option">
            <div class="flex align-items-center">
                <img  style="aspect-ratio: 1 / 1; height: 2rem;"  :src="`https://backend.salchimonster.com/read-product-image/600/site-${option.option.site_id}`" class="option-image mr-3" alt="">
                <span>{{ option.option.site_name }}</span>
            </div>
            </template>

            <!-- Plantilla para la opción seleccionada -->
            <template #value="value">
            <div class="selected-option flex align-items-center">
                <img  style="aspect-ratio: 1 / 1; height: 1.5rem;" :src="`https://backend.salchimonster.com/read-product-image/600/site-${value.value.site_id}`" class="selected-image mr-3" alt="">
                <span>{{ value.value.site_name }}</span>
            </div>
            </template>
        </Dropdown>


        <span><h6>Area de la vacante</h6></span>
        <Dropdown :options="areas" v-model="selectedArea" optionLabel="name" style="height: 3.1rem;" ></Dropdown>

        
        <h6>Requiere verificacion de Gerencia?</h6>

        <div style="width: 100%;height: 4rem;border-radius: .4rem;padding: 1rem;min-height: max-content;" :style="selectedArea.validation_type_id == 1 ? 'background-color: #ff000021;' : 'background-color: rgb(0 255 76 / 20%)'">

            <h6 v-if="selectedArea.validation_type_id  == 1">
                Esta área requiere validación por parte de la Gerencia. El proceso podría extenderse, agradecemos su paciencia.
            </h6>

            <h6 v-else-if="selectedArea.validation_type_id == 2">
                ¡Buenas noticias! Esta solicitud no requiere validación de Gerencia y será procesada directamente por Gestión Humana.
            </h6>
        </div>
        <span><h6>Justificacion de la requisicion</h6></span>
        <Textarea style="width: 100%;resize: none;" rows="8">
        </Textarea>
        <div style="display: flex; justify-content: end;width: 100%;">
            <Button icon="pi pi-check" style="width: min-content;" label="Solicitar" severity="help"></Button>
        </div>

    </div>
</template>

<style lang="css" scoped>

    .container{
        max-width: 600px;
        min-height: calc(100vh - 7rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    h2, h6{

        margin: 0;
    }

    .title{
        margin-bottom: 2rem;
      
    }


</style>

<script setup>

import { fetchService } from '@/service/utils/fetchService';
import { URI } from '@/service/conection';
import { ref,onMounted } from 'vue';
import { loginStore } from '@/store/user';
import { now } from 'moment-timezone';




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


const login = loginStore()

const areas = ref([])
const selectedArea = ref({})

const sites = ref([])
const selectedSite = ref({})

onMounted( async() =>{

    areas.value = await fetchService.get(`${URI}/get-requisition-areas`)
    sites.value = await fetchService.get(`${URI}/sites`)
})





const create_requisition = async() => {


    await fe
}

</script>