<template>
    <div class="container p-0">

        <nav  class="nav-bar shadow-1 m-0 p-0">
            <ul>
                <li class="nav-bar--item" v-for="(button, index) in navItems" :key="index" style="display: flex;align-items: center;">
                    <router-link :to="`/hiring-hr-follow/${button.path}/132`">
                        <Button :icon="button.icon" text :class="isActive(button.path)? 'nav-var--item-button-selected': '' " severity="help" class=" nav-var--item-button" :label="button.label" />
                    </router-link>

                    <i class="fa-solid fa-arrow-right"></i>
                    
                </li>
                
            </ul>
        </nav>


        <router-view class="p-0 m-0" />



    </div>

</template>

<script setup>

import {ref} from 'vue'
import {PathService} from '@/service/pathService.js'

const isActive = PathService.isActiveRoute
const navItems = [
    { label: "Revisión de hojas de vida", icon: "fa-regular fa-file-alt", path: "resume-review/accepted" },
    { label: "Filtro 1, preliminares", icon: "fa-regular fa-filter", path: "preliminary-filter/accepted" },
    { label: "Filtro 2, primera entrevista", icon: "fa-regular fa-user-check", path: "first-interview/accepted" },
    { label: "Filtro 3, segunda entrevista", icon: "fa-regular fa-users", path: "second-interview/accepted" },
    // { label: "Revisión de Examenes", icon: "fa-regular fa-vial", path: "exam-review" },
    { label: "Recepción de documentos", icon: "fa-regular fa-folder-open", path: "document-reception" },
    { label: "Contratación completada", icon: "fa-regular fa-handshake", path: "hiring-completed" },
];


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