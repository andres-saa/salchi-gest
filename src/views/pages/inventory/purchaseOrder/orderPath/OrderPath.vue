<template>
    <div class="container">

        <nav  class="nav-bar shadow-1 ">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index">
                    <router-link :to="`/purchase-order/recorrido/${button.path}/`">
                        <Button :icon="button.icon" text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>

                    
                </li>
                
            </ul>
        </nav>


        <router-view/>



    </div>

</template>

<script setup>

import {ref} from 'vue'
import {PathService} from '@/service/pathService.js'

const isActive = PathService.isActiveRoute
const navItems = [
    {
        label:'Alistar',
        icon:'pi pi-chart-bar',
        path:'alistar'
    },
    {
        label:'Authorizar',
        icon:'pi pi-chart-bar',
        path:'autorizar'
    },
    {
        label:'Transportar',
        icon:'pi pi-chart-bar',
        path:'transport'
    },

    {
        label:'Recibir Orden',
        icon:'pi pi-chart-bar',
        path:'recibida-en-sede'
    },
    {
        label:'Completadas',
        icon:'pi pi-chart-bar',
        path:'completed'
    },
    

    {
        label:'Todas las ordenes',
        icon:'pi pi-chart-bar',
        path:'purchase-order-reports'
    },

    {
        label:'stock en planta',
        icon:'pi pi-cog',
        path:'purchase-order-settings'
    },

    {
        label:'Movimientos',
        icon:'pi pi-cog',
        path:'purchase-order-comple'
    }

]




</script>

<style scoped>

ul{
    display: flex;
    justify-content: start;
    overflow-x: auto;
    gap: 1rem;
}

@media (width < 1000px) {
    
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