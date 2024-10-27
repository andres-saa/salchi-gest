<template>


    <div style="margin-top: 3rem;">

        <nav  class="nav-bar shadow-1 ">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index">
                    <router-link :to="`/contracts/${button.path}/`">
                        <Button :icon="`${button.icon}  'text-green'`"  text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>
                </li>

            </ul>


        </nav>

        <RouterView class="m-auto">

        </RouterView>

    </div>
</template>

<script setup>

import {PathService} from '@/service/pathService.js'

const isActive = PathService.isActiveRoute



const navItems = [


{
        label:'Vigentes',
        icon:'pi pi-circle-fill',
        path:'contracts-vigent',
        color:'green'
    }, 
    {
        label:'Por Finalizar',
        icon:'pi pi-history',
        path:'contracts-to-finish'
    },  


    {
        label:'Finalizados',
        icon:'pi pi-arrow-down',
        path:'contracts-ended'
    }, 
    {
        label:'Proximos',
        icon:'pi pi-arrow-right',
        path:'contracts-next'
    },
    
    {
        label:'Todos los contratos',
        icon:'pi pi-book',
        path:'contracts-all'
    },

    {
        label:'Nuevo contrato',
        icon:'pi pi-plus-circle',
        path:'new-contract'
    },
    {
        label:'Configuracion',
        icon:'pi pi-cog',
        path:'configuracion'
    },


]



</script>


<style scoped>

ul{
    display: flex;
    /* justify-content: center; */
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