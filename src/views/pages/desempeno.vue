<template>
    <div>
        <div id="loadingMessage" style="text-align:center; font-size:24px; height: 100%; display: flex; align-items: center;">
       <p class="text-center text-4xl">
        Cargando encuesta, por favor espera...
       </p> 
    </div>
    <iframe style="margin-top: 3rem;" src="https://docs.google.com/forms/d/e/1FAIpQLSe4rmqQpEXoWw0_eJTAnXnosHK9OK8fwsWjKfpjBPbFR9I65g/viewform?embedded=true" 
            width="100%" 
            height="6169" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            onload="document.getElementById('loadingMessage').style.display='none';">
    </iframe>
    </div>
    
</template>

<script setup>
    // Aquí puedes añadir cualquier script adicional si es necesario
</script>