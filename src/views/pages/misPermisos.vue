<template>
    <div class="col-12 m-auto "
        style="max-width: 1280px;display: ;height: 70vh;align-items: center;justify-content: center; flex-direction: column; ">

        <p class="text-2xl lg:text-4xl   col-12 text-center" style="font-weight: bold;width: auto; "> Mis permisos</p>



    <RouterView>
        
    </RouterView>



    </div>


</template>





<script setup>


const menus = [

    {
        nombre:'Mis permisos',
        to:'/mis-permisos/permiso/generado',
        imagen:"/images/permiso.jpg"
    },
    {
        nombre:'Mis licencias',
        to:'/mis-permisos/permiso-licencia/generado',
        imagen:"/images/licencia.avif"
    },
    {
        nombre:'Mis vacaciones',
        to:'/mis-permisos/permiso-vacaciones/generado',
        imagen:"/images/vacaciones.jpg"
    },

]

</script>



<style scoped>


.imagen::before{

    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    top:0;
    left:0;
    backdrop-filter: blur(2px);
    object-fit: cover;


}
Button img {
    transition: all .3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.208);
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    object-fit: cover;

}

Button img:hover {
    transform: scale(1.03);

}</style>