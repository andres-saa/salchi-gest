<template>
    <div class="container p-2 ">
        <div class="sub-container">

            <nav class="nav">
                <ul class="nav_button_list">
                    <li  v-for="button in navButtons">
                        <router-link :to="button.to"> 
                            <Button severity="help" class="selected" :label="button.name"></Button>    
                        </router-link>
                    </li>
                </ul>
            </nav>

        </div>


    </div>
</template>


<script setup>
import { ref } from 'vue';

const navButtons = [
    {
        name:'En curso',
        to:'/'
    },
    {
        name:'Programadas',
        to:'/'
    },
    {
        name:'Historial',
        to:'/'
    },
    

]
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
    gap: 1rem;
    padding: 0;

}

Button{
    min-width: max-content;
    background: transparent;
    border: none;
    color: gray;
    
}

.selected{
    box-shadow: 0 1rem 0 var(--primary-color);
    border-radius: 0;
}


</style>