<template>





<div class="col-12 m-auto p-0" style="max-width:1280px ;"> 

    <div class="grid  p-3 m-0" >

<div class="col-12 md:col-6  xl:col-4 px-0 md:px-3 m-0  "  v-for="capacitacion in capacitaciones"   >


<div class="col-12 p-0 m-auto pb-4 " style="background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.137) ;height: 100%; border-radius: 1rem;max-width: 400px; overflow: hidden" >


  <div class="col-12 m-0 mb-3  "  style=";">
    <p class="text-2xl" style="font-weight: bold;text-transform: capitalize; color: white;"> </p>
  </div>


  <div class="col-12 grid m-0 p-1" >
            <p class="col-12  my-0 py-0" style="font-weight: bold;"> <span>ID de la capacitacion</span></p>
            <p class="col-12 my-0 py-0  ">{{ capacitacion.id }}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-12 my-0 py-0" style="font-weight: bold;"> <span>ID del responsable</span></p>
            <p class="col-12 my-0 py-0  ">{{ capacitacion.creator_id }}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-12 my-0 py-0" style="font-weight: bold;"> <span>Nombre de la capacitacion  </span></p>
            <p class="col-12 my-0 py-0  " >{{ capacitacion.name }}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>Tematica</span></p>
            <p class="col-12 my-0 py-0  ">{{ capacitacion.topic }}</p>
        </div>

        <div class="col-12 grid m-0 p-1" style=" ">
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>link de la reunion</span></p>
            <a :href=" capacitacion.material_url" class="col-12 my-0 py-0   "  >{{ capacitacion.material_url }}</a>
        </div>

        <div class="col-12 grid m-0 p-1" style=" ">
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>Ubicacion</span></p>
            <a :href=" capacitacion.material_url" class="col-12 my-0 py-0   "  >{{ capacitacion.location }}</a>
        </div>

        <div class="col-12 grid m-0 p-1" style=" ">
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>Fecha</span></p>
            <p :href=" capacitacion.material_url" class="col-12 my-0 py-0   "  >{{ capacitacion.scheduled_time }}</p>
        </div>






        <div class="col-12 grid m-0 p-1"  >
            <p class="col-6 my-0 py-0 " style="font-weight: bold;"> <span>Estado <br> Fecha</span></p>
            <p class="col-6 my-0 py-0 text-right " > </p>
        </div>
        

        <div class="col-12 grid m-0 p-1 mt-4" >
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>Observaciones</span></p>
            <p class="col-12 my-0 py-0  "></p>
        </div>


        <div class="    px-3 mt-4" style="display: flex;gap: 1rem; justify-content: space-around;position: relative;bottom: 0;"> 
            <Button  outlined severity="info" label="Small"  style="width: 100%;display: flex;justify-content: center;"> <span class=" text-sm text-center">REVISAR</span></Button>
            <!-- <Button outlined severity="success" label="Small"  class="" @click="openAceptar(permiso)"  style="width: 100%;display: flex;justify-content: center;" > <span class="text-sm">DESCARGAR COMPROBANTE</span> </Button> -->

        </div>
       
</div>

      

</div>
</div>
</div>
</template>


<script setup>

import {ref, onMounted} from 'vue'
import { URI } from '../../service/conection';


const capacitaciones = ref()



const getCapacitaciones = async () => {
    try {
        const response = await fetch(`${URI}/trainings`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las capacitaciones:', error);
        // Manejar el error de alguna manera o re-lanzarlo
        throw error;
    }
};


onMounted( () => {
    getCapacitaciones().then(data => capacitaciones.value = data)
})

</script>

<style scoped>

Button{
    font-weight: bold;
}

.vacaciones{
    display: flex;
    background-color:#64748B;
    justify-content: center;
    
}

.licencia{
    display: flex;
    background-color:#64748B;
    justify-content: center;
}

.general{
    display: flex;
    background-color:#64748B;
    justify-content: center;
}


.generado{
    display: flex;
    background-color:#eeff0060;
    justify-content: center;
}

*{
    overflow-wrap: break-word; white-space: normal;      overflow: hidden;
}
.aprobado{
    display: flex;
    background-color:#2bff0060;
    justify-content: center;
}

.rechazado{
  display: flex;
    background-color:#ff000044;
    justify-content: center;
}

Button{
  text-transform: capitalize;
}
  
</style>