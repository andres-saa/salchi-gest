<template>
    <div class="container p-2 ">
        <div class="sub-container">

            <nav class="nav">
                <ul class="nav_button_list">
                    <li  v-for="button in navButtons">
                        <router-link :to="button.to"> 
                            <Button class="p-0 py-2" severity="help" :class="isRouteActive(button.to)? 'selected' : '' " :label="button.name"></Button>    
                        </router-link>
                    </li>
                </ul>
            </nav>

         
        </div>
   <routerView/>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const routes = useRoute()
const navButtons = [
    {
        name:'En curso',
        to:'/dev-tasks/current'
    },
    {
        name:'Programadas',
        to:'/dev-tasks/scheduled'
    },
    {
        name:'Historial',
        to:'/dev-tasks/history'
    },
    
]

const isRouteActive = ( route )  => {
    return routes.path.includes( route )
    // console.log(routes)
}

</script>

<style lang="scss" scoped>

</style>

<style scoped>
.container{
    margin-top: 3rem;
    
}

.sub-container{
    /* background-color: red; */
    width: 100%;
    height: 100%;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    /* overflow-x: auto; */
}

nav{
    overflow-x: auto;
    /* background-color: rgb(0, 0, 90); */
    padding: 0;
    height: min-content;
}

.nav_button_list{
    list-style: none;
    display: flex;
    /* justify-content: center; */
    gap: 2rem;
    padding: 0;
    box-shadow:none

}



Button{
    min-width: max-content;
    background: transparent;
    border: none;
    color: gray;
    box-shadow:none;
    border-radius:0;
    
}

.selected{
    box-shadow: 0 0.3rem 0 var(--primary-color);
    border-radius: 0;
}


</style>