<template>
    <div class="col-12  my-6" style="display: flex;justify-content: center;flex-direction: column; gap: 1rem;">


        <!-- {{ capacitacion }} -->



        <div style="display: flex; min-width: max-content;position: sticky;top: 3rem;background-color: white;z-index: 99;" class="shadow-3">

      
            <div v-for="btn in btns" class="" >


                <RouterLink :to="btn.to" v-if="btn.name == 'CONFIGURACION' && getUserId() == capacitacion.creator_id">
                    <Button :class="route.path?.toUpperCase().includes('CONFIGURACION')? 'selected': ''" text style="font-weight: bold;" :label=" btn.name"> </Button>
         
                </RouterLink>

                
                <RouterLink  :to="btn.to" v-if="btn.name !== 'CONFIGURACION'">
                    <Button :class="route.path?.toUpperCase().includes(btn.name)? 'selected': ''" text style="font-weight: bold" :label=" btn.name"> </Button>
                 
                </RouterLink>

          
        </div>
    </div>
        <RouterView>

        </RouterView>
    </div>


  
</template>

<script setup>

// import {onMounted} from 'vue'
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import { getUserId } from '../../../service/valoresReactivosCompartidos';
import { onMounted } from 'vue';
import { URI } from '@/service/conection';

const route = useRoute()
const capacitacion_id = ref(route.params.capacitacion_id)

const capacitacion = ref({})



const getCapacitacion = async () => {

    const capacitacion_id = route.params.capacitacion_id

    try {
        const response = await fetch(`${URI}/training/${capacitacion_id}`);
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





onMounted(() => {
    getCapacitacion().then(data => capacitacion.value = data)

})


const btns = [
    {
        name: 'CONFIGURACION', to: `/capacitacion/${capacitacion_id.value}/configuracion/`,
    },
    {
        name: 'ARCHIVOS', to: `/capacitacion/${capacitacion_id.value}/archivos/`
    },
    {
        name: 'ASISTENCIA', to: `/capacitacion/${capacitacion_id.value}/asistencia/`
    }
]



</script>

<style scoped>



button{
    outline: none;
    box-shadow: none;
    color: var(--text-color);
}


.selected{
    outline: none;
    font-weight: bold;
    color: var(--primary-color);
    }
</style>