<template>

<Dialog class="p-0" :closable="false"  modal style="width: min-content; display: flex;  " v-model:visible="store.loading.visible">



<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
 
  <img  src="/images/logo.png" style="width: 5rem;"><img>


    <p class="text-3xl  text-center"  style="width: min-content; font-weight: bold;text-transform: uppercase; color: var(--orange-500);border-radius: 10rem; ;background-color: rgba(255, 255, 255, 0);">{{store.loading.tittle}}</p>
    
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
    animationDuration=".1s" aria-label="Custom ProgressSpinner" />

</div>


</Dialog>



</template>


<script setup>
import {useReportesStore} from '@/store/reportes.js'
import {onUnmounted} from 'vue'
const store = useReportesStore()
const visible = true
const props = defineProps({
    tittle: {
        type: String,
        default: 'CARGANDO'
    },


});




onUnmounted(() => {
    store.setLoading(false);
});

</script>

<style scoped>



</style>