<template>

<!-- {{ archivedFiles }} -->


<p class="text-center text-5xl py-3" style="font-weight: bold;">Guias para el area finanzas</p>


<div class="col-12 p-0 m-0" style="height: 80vh; display: flex; align-items: center;">

    <div class="grid m-auto m-0" style="max-width: 1280px;">

<div class="col-12 sm:col-6 md:col-4 lg:col-6 xl:col-4 py-2" v-for=" file in archivedFiles" style=" background-color: rgba(255, 0, 0, 0);aspect-ratio: 4 / 3;">

    <div style="box-shadow: 0 0 10px;background-size: cover; background-image: url('https://static2.bigstockphoto.com/0/1/3/large1500/310380877.jpg'); height: 100%;width: 100%;overflow: hidden; border-radius: 1rem; position: relative;">
        

        
        <div class="p-3 text-sm xl:text-lg" style="text-shadow: 0 0 3px black ; width: 100%;position: ;color: white; height: 100%;background-color: rgba(0, 0, 0, 0.661);">

            

            <p class="text-2xl" style="font-weight: bold;"> Descripcion: </p> <p>Informacion referente a todo lo relacionado con las facturas y como se debe realizar el proceso de instalacion de los vienes de servicion dados a los integrantes de la sesion del inicio</p>
        </div>

        
        <div style="box-shadow: 0 0 10px ; width: 50%;right: 0;display: flex;align-items: center;justify-content: center; position: absolute;bottom: 0;border-radius: 10rem 0 0 0; background-color: rgb(255, 255, 255);aspect-ratio: 16 / 4;">

            <i class="fa-solid fa-download text-5xl p-1" style="z-index: ;color:rgb(255, 0, 0)" :class="PrimeIcons.DOWNLOAD"></i>
        
        
        </div>

   
    </div>

</div>

</div>

</div>

</template>



<script setup>


import { PrimeIcons } from 'primevue/api';
import { URI } from '../../service/conection';
import {ref,onMounted,watch} from 'vue'




const archivedFiles = ref([])



const getArchivedFiles = async() => {

    try {
        const response =await fetch(`${URI}/archived-files`)

        if(!response.ok){
            throw "paila"
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


onMounted(()=> {
    getArchivedFiles().then( data => archivedFiles.value = data)
})




</script>


<style scoped>

</style>