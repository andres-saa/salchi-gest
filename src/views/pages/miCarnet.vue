

<template>
            

              <div class="col-12 " style="display: flex;justify-content: center ;flex-direction: column; align-items: center;">
                <p class="px-3 py-0 mt-3 text-center text-4xl col-12 " style="font-weight: bold;">Mi carnet</p>
<div class=" carnet mb-8 mt-8 p-3" style="background-color: rgba(255, 255, 255, 0); display: flex;width: min-content; justify-content: center; align-items: center;transform: scale(1.4); border-radius:0.7rem">

    <div class="p-0 content" style="border-radius: 0.7rem;">
        <div class="P-7 "
    style=" width:5.5cm ;max-width: 100%; height:8.5cm; ;box-shadow: 0 0 10px rgba(0, 0, 0, 0.281); border-radius: 0.5rem; display: flex; justify-content: center;overflow: hidden;position: relative;">
    <div
        style="width: 11cm; height: 11cm;border-radius: 50%; background-color: rgba(255,98,0,255);;box-shadow: 0 0 10px rgba(0, 0, 0, 0.288);position: absolute; bottom: 5cm;">

    </div>


    <img  class="fotoPerfil" style="position: absolute; width: 50%;;width: 3cm;z-index: 99; height: 3cm;object-fit: cover; border-radius: 50%;top:1.5cm"
        :src="`${URI}/read-product-image/600/employer-${getUserDni()}`" alt="">

    <div style="position: absolute; display: flex; align-items: center;top:0.5cm">
        <img style=" ;width: 0.8cm; object-fit: contain;" src="/images/logo blanco.png" alt="">
        <span class="ml-2 text-white" style="font-weight: bold;"> Salchimonster</span>
    </div>

    <div class="info" style="position: absolute; top:4.8cm">
        <p class="px-3 py-0 my-0 text-center text-sm " style="font-weight: bold;text-transform: uppercase;"> {{currentUser.name}}x</p>
        <p class="px-3 py-0 mb-3 text-center text-sm " style="text-transform: capitalize;"> {{currentUser.position}}</p>

        <p class="px-3 py-0 my-0 text-center   "  style="font-size: 0.7rem;">Email: {{ currentUser?.email || ''}}</p>
        <p class="px-3 py-0 my-0 text-center  " style="font-size: 0.7rem;">Telefono: {{currentUser?.phone || ''}}</p>
        <p class="px-3 py-0 mt-3 text-center text-sm " style="font-weight: bold;">ID {{ getUserId() }}</p>
    </div>


</div>
    </div>
        



</div>
              </div>


              <div v-if="visibleCarga" class="col-12" style="display: flex; justify-content: center;">
    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    
</div>
<div  class="col-12" style="display: flex; justify-content: center;">
    <Button @click="downloadCarnetAsJPG()"> <i :class="PrimeIcons.DOWNLOAD" class="mr-2"></i> Descargar</Button>
    
</div>





</template>


<script setup>





import { PrimeIcons } from 'primevue/api';
import { getUserDni, getUserId } from '../../service/valoresReactivosCompartidos';
import { URI } from "@/service/conection.js"
import html2canvas from 'html2canvas';
import { ref,onMounted } from 'vue';

const currentUser = ref({})
const visibleCarga = ref(false)
const getUser = async (dni) => {
    fetch(`${URI}/employer/dni/${dni}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(data => {
            console.log('Employer data:', data);
            currentUser.value = data
            // getSites().then(() => { SiteDropValue.value = findSiteById(data.site_id)})
            // departamentDropValue.value = findByDepartament(data.birth_department) || []
            // cityDropValue.value = data.birth_city
            // statusDropValue.value = data.status.trim().toLowerCase() 
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            currentUser.value = {}

        });
}
const downloadCarnetAsJPG = async () => {

    visibleCarga.value = true
    
    try {
        const carnetElement = document.querySelector('.carnet');
        const content = document.querySelector('.content');
        if (!carnetElement) {
            console.error('Elemento carnet no encontrado');
            return;
        }

        const fotoPerfil = document.querySelector('.fotoPerfil');
        if (!fotoPerfil) {
            console.error('Elemento fotoPerfil no encontrado');
            return;
        }

        fotoPerfil.src = proxiedImageUrl;
        content.style.border = '1px solid  rgba(255,98,0,255)';

        // Esperar a que la imagen se cargue completamente
        await new Promise((resolve, reject) => {
            fotoPerfil.onload = resolve;
            fotoPerfil.onerror = reject;
        });

        // Aumentar la escala para una mayor resolución
        const scale = 2;

        // Renderizar con html2canvas
        const canvas = await html2canvas(carnetElement, {
            scale: scale,
            useCORS: true,
            allowTaint: false
        });

        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = `carnet-${getUserId()}.png`;
        link.href = image;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        content.style.border = 'none';
        visibleCarga.value = false

    } catch (error) {
        console.error('Error al descargar el carnet:', error);
    }
};


// Función para modificar la URL de la imagen con el proxy de AllOrigins
function addAllOriginsProxy(url) {
    const encodedUrl = encodeURIComponent(url);
    return `https://api.allorigins.win/raw?url=${encodedUrl}`;
}

// Modificar la URL de la imagen
const originalImageUrl = `${URI}/read-product-image/600/employer-${getUserDni()}`;
const proxiedImageUrl = addAllOriginsProxy(originalImageUrl);

// Usar la URL modificada en tu imagen

onMounted(() => {
    // currentUser.value = props.user
    getUser(getUserDni())
    // getSites()
})




</script>


<style scoped>


</style>