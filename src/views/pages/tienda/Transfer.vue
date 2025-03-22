<template>
    <div class="container">

        <nav  class="nav-bar shadow-1 ">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index">
                    <router-link :to="`/transfer/${button.path}/`">
                        <Button :icon="button.icon" text :class="isActive(`/transfer/${button.path}/`)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>
                </li>
            </ul>
        </nav>


        <div class="container">
            <h6 class="text-center" >Los pedidos de Distrimonster seguiran' apareciendo hasta 15 dias  en pendiente de validacion, Para las tiendas se debe validar el mismo dia' , luego no podra' hacerlo</h6>
            <router-view/>
        </div>
       





    </div>

</template>

<script setup>

import {ref} from 'vue'
import {PathService} from '@/service/pathService.js'

const isActive = PathService.isActiveRoute

const cancellationRequests = ref([])

    const navItems = [
    {
        label:'Por Confirmar',
        icon:'pi pi-history',
        path:'transfer-sesion'
    },
    {
        label:'Confirmadas',
        icon:'pi pi-check',
        path:'transfer-sesion-confirmed'
    },
    {
        label:'Cliente no confirma',
        icon:'pi pi-times',
        path:'transfer-sesion-no-confirmed'
    },


]





</script>

<style scoped>

ul{
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 1rem;
}

@media (width < 600px) {
    
    ul{

        justify-content: start;
        padding:  0.5rem 0;
     
    }
    
}

.nav-bar--item{
    padding-bottom: 0.3rem;
}


.nav-bar{
    margin: auto;
    width: min-content;
    background-color: rgb(255, 255, 255);
    padding: 0;


    position: sticky;
    top:3rem;
    width: 100%;
    z-index: 99;
}
li{
    list-style:none;  
}

.container{
    margin-top: 3rem;
    position: relative;

}


.nav-var--item-button{
    color:gray;
    border-radius: 0%;
    padding: 0.5rem ;
    min-width: max-content;
}

.nav-var--item-button-selected{
    box-shadow: 0 0.3rem var(--primary-color);
    color: black;
}


</style>