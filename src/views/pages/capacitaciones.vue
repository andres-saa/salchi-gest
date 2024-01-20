<template>


<div class="col-12 m-auto p-4"> 
<!-- {{ permisos }}  -->



<P class="text-center text-2xl my-0" style="font-weight: bold; text-transform: capitalize;"> Capacitación</P>


<!-- 
<P class="text-center text-2xl my-0" style="font-weight: bold; text-transform: capitalize;"> Tipo de permiso: {{ ruta }}</P>
<P class="text-center text-2xl py-0" style="font-weight: bold; text-transform: capitalize;"> Estado: {{ estado }}</P> -->

<div class=" my-2  " style="display: flex;">

<div style="display: flex;" class="m-auto p-0 my-4" >

<div class="p-2">
    <RouterLink to="/capacitaciones/links">
      <Button   v-if="getUserId() == 1178" class="p-0" text severity="danger"   >

        LINKS 
      </Button>
    </RouterLink>
</div>
   

  <div v-for="menu in menus" class="p-2">

    <RouterLink :to="menu.to">
      <Button   class="p-0" :text=" estado != menu.key"  :severity="menu.severity"   >

        {{ menu.name }}
      </Button>
    </RouterLink>
    

  </div>
</div>
</div>


       

<RouterView>

</RouterView>

    </div>

</template>


<script setup>

import {ref, onMounted} from 'vue'
import { URI } from '../../service/conection';
import { getUserId } from '../../service/valoresReactivosCompartidos';


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


const menus = ref([
// { name: 'LINKS', to: `/capacitaciones/asistencia`, severity: "danger",key:'rechazado' },
  { name: 'GUIAS', to: `/capacitaciones/guias`, severity: "info",key:'generado' },
  { name: 'CUESTIONARIO', to: `/capacitaciones/cuestionario`, severity: "success",key:'aprobado' },
  { name: 'ASISTENCIA', to: `/capacitaciones/asistencia`, severity: "danger",key:'rechazado' },
//   { name: 'links', to: `/capacitaciones/asistencia`, severity: "danger",key:'rechazado' }    
]);

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