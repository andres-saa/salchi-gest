<template>
    <div class="container">

        <nav  class="nav-bar shadow-1 ">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index">
                    <router-link :to="`/cdi-inventory/${button.path}/`">
                        <Button :icon="button.icon" text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>
                </li>
                <div class="px-3" style="position: absolute;left: 0; border-radius:0 0  10rem 0 ; top:100%; height: 1.3rem;background-color: var(--primary-color);"> <span style="color: white;font-weight: bold;">Cdi</span></div>

            </ul>


        </nav>


        <router-view/>



    </div>

</template>

<script setup>

import {ref} from 'vue'
import {PathService} from '../../../../service/pathService.js'

const isActive = PathService.isActiveRoute
const navItems = [
    {
        label:'Reportar inventario',
        icon:'pi pi-chart-bar',
        path:'report-inventory'
    },
    {
        label:'Mis reportes',
        icon:'pi pi-chart-bar',
        path:'cdi-inventory-my-reports'
    },
    {
        label:'Adiministrar reportes',
        icon:'pi pi-chart-bar',
        path:'cdi-inventory-reports'
    },
    {
        label:'Configuracion',
        icon:'pi pi-cog',
        path:'cdi-inventory-settings'
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