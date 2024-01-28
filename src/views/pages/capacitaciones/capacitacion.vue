<template>
    <div class="col-12" style="display: flex;justify-content: center;gap: 1rem;">


        <!-- {{ capacitacion }} -->


        <div v-for="btn in btns" class="" style="display: flex; gap: 1rem;">


            <RouterLink :to="btn.to" v-if="btn.name == 'CONFIGURACION' && getUserId() == capacitacion.creator_id">
                <Button outlined style="font-weight: bold;"> {{ btn.name }}</Button>
            </RouterLink>

            
            <RouterLink :to="btn.to" v-if="btn.name !== 'CONFIGURACION'">
                <Button outlined style="font-weight: bold;"> {{ btn.name }}</Button>
            </RouterLink>


            <!-- <Button> hola</Button> -->
        </div>
    </div>


    <RouterView>

    </RouterView>
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