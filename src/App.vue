<script setup>
import { useToast } from 'primevue/usetoast';
import { obtenerRolesYActualizar } from './service/roles';
import { onBeforeMount } from 'vue';
import Loading from './components/Loading.vue';

onBeforeMount(async() => {
    obtenerRolesYActualizar( )
})
const toast = useToast()
</script>

<template>
   

   <loading class="col-12" style=" z-index: 9;"></loading>


    <Toast style="z-index: 999;" ></Toast>
    
   
        <RouterView></RouterView>

</template>

<style scoped>



</style>
