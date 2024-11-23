<template>


    <div style="margin-top: 0rem;  max-width: 1366px;" class="m-auto" >

        <nav  class="nav-bar shadow-1 mb-2">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index">
                    <router-link :to="`/recetario/${button.path}/`">
                        <Button :icon="`${button.icon}  'text-green'`"  text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>
                </li>

            </ul>


        </nav>


        <RouterView />

  

    </div>
</template>

<script setup>

import {PathService} from '@/service/pathService.js'
import { onMounted } from 'vue';
import router from '../../../../router';

const isActive = PathService.isActiveRoute

onMounted(() => {
    router.push('/recetario/configuracion/productos-con-receta/')
})

const navItems = [


    {
        label:'Asignar receta',
        icon:'fa fa-info-circle',
        path:'configuracion/productos-con-receta',
        color:'green'
    }, 
    {
        label:'% Comparación',
        icon:'fa fa-info-circle',
        path:'configuracion/comparation-percents'
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
    margin-top: ;
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