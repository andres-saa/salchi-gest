<template>


    <div style="margin-top: 3rem;  max-width: 1366px;" class="m-auto" >

        <nav  class="nav-bar shadow-1 mb-5 ">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index" style="display: flex;align-items: center;">
                    <router-link :to="`/recetario/${button.path}/`">
                        <Button :icon="`${button.icon}  'text-green'`"  text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>
                    <b>
                        <i class="pi pi-arrow-right p-1"></i>
                    </b>
                </li>

            </ul>


        </nav>

        <RouterView >

        </RouterView>

    </div>
</template>

<script setup>

import {PathService} from '@/service/pathService.js'

const isActive = PathService.isActiveRoute



const navItems = [


    // {
    //     label:'Ingredientes base',
    //     icon:'fa fa-carrot',
    //     path:'ingredientes',
    //     color:'green'
    // }, 

    {
        label:'Master',
        icon:'fa fa-chart-column',
        path:'prices-cdi-table'
    }, 

    {
        label:'Pasamanos',
        icon:'fa fa-bowl-rice',
        path:'pasamanos'
    },

    
    {
        label:'Producto Terminado',
        icon:'fa fa-bowl-rice',
        path:'producto-terminado'
    }, 




    {
        label:'Recetas Sedes',
        icon:'fa fa-bowl-rice',
        path:'recetas'
    },  

    // {
    //     label:'Ingredientes CDI',
    //     icon:'fa fa-carrot',
    //     path:'ingredientes',
    //     color:'green'
    // }, 


 
    {
        label:'Resumen Beneficio',
        icon:'fa fa-chart-column',
        path:'recipe-sumary-benefit'
    },


    {
        label:'Configuracion',
        icon:'fa fa-gear',
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