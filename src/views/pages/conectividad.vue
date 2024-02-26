<template>
    <RepNotificaciones class="p-4" ></RepNotificaciones>
</template>



<script setup>












import { onMounted, reactive, ref, watch } from 'vue';
// import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';
import { URI } from '../../service/conection';
import {salesReport} from '../../service/valoresReactivosCompartidos'
import {useReportesStore} from '@/store/reportes.js'
import RepNotificaciones from './RepNotificaciones.vue';

const store = useReportesStore()


onMounted(() =>{
store.startSitesStatusUpdate()

})



</script>

<style scoped>


@keyframes flash {
from { opacity: 1;transform: scale(1.5) }	
to { opacity: 0; ; }
}

.indicador {
animation: flash .2s ease infinite alternate;
}
</style>