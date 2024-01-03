<template>
    <div class="col-12" style="overflow-x: auto;">
    <div class="col-12 m-auto mt-8" style="position:relative;;width:700px">
        <img  style="width:100%;opacity:0.4; height:100%;object-fit:cover;overflow-x: auto;" src="/images/home.jpg" alt="">

    


        <router-link to="/certificado-laboral">

            <button style="position:absolute;display:flex;justify-content:center; background-color:transparent;border:none;right:30px;top:50px;filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.9))"> 
            <img style="width:100px; z-index:99" src="/images/boton1.png" alt="">
            <span class="text-2xl text-white pt-4 px-3 pb-2" style="font-weight:bold; position:absolute;bottom:-80px;border-radius:0.5rem;background-color:red" >Descargar certificado laboral</span>

        </button>
        </router-link>

        <router-link to="/permiso">
            <button style="position:absolute;display:flex;justify-content:center; background-color:transparent;border:none;right:288px;top:120px;filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.9))"> 
            <img style="width:100px; z-index:99" src="/images/boton2.png" alt="">
            <span class="text-2xl text-white pt-4 px-3 pb-2" style="font-weight:bold; position:absolute;bottom:-60px;border-radius:0.5rem;background-color:red" >Solicitar permiso</span>

        </button>
        </router-link>
        

        <router-link to="/actualizar-datos">

            <button style="position:absolute;display:flex; justify-content:center; background-color:transparent;border:none;left:44px;top:130px;    filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.9));
"> 
            <img style="width:96px; z-index:99" src="/images/boton3.png" alt="">
            <span class="text-2xl text-white pt-4 px-3 pb-2" style="font-weight:bold; position:absolute;bottom:-60px;border-radius:0.5rem;background-color:red" >Actualizar mis datos</span>
        </button>
        </router-link>

        
    </div>
    </div>

</template>





<script setup>


</script>

<style scoped>


button{
    transition:  all .3s ease;

}
button:hover{
    transform: scale(1.1);
}
</style>