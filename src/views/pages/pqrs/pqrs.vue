<template>



<div class="container px-2">
<!-- 
    <p class="text-3xl my-4" > <b>PQRS</b> </p>
    <nav class="nav_bar shadow-2 p-0 my-0 mx-2" style="position: sticky;top: 0rem;max-width: 900px;border-radius:10rem; background-color: white;z-index: 99;">
        <ul class="nav_bar--buttons p-0 m-1" style="">
       
                <li v-for="button in nav_buttons" key="" class="">
                  
                    
                    <Button  @click="navigateTo(button.name,button.id)" class="nav_bar--buttons-button p-2" :class="isActive(button.name)? 'nav_bar--buttons-button-selected': ''" :label="button.name"></Button>

                </li>
     
            
        </ul>
    </nav> -->

    <router-view> </router-view>

</div>




</template>


<script setup>

import { onMounted, ref } from 'vue';
import { PathService } from '../../../service/pathService';
import { RouterLink } from 'vue-router';
import router from '../../../router';

import { fetchService } from '../../../service/utils/fetchService';
import { URI } from '../../../service/conection';


const isActive = PathService.isActiveRoute
const nav_buttons = ref( [

   
]
)

const navigateTo = (route,id) => {

    router.push({
        name:'pqrs-section',
        params:{section_id:id, section:route},

    })

}

onMounted( async() => {
   nav_buttons.value = await fetchService.get(`${URI}/get-all-pqr-channel`)
})


</script>



<style scoped>

.container{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.nav_bar{

    width: 100%;
    display: flex;
    justify-content: center;
   
}

.nav_bar--buttons{
    display: flex;
    list-style: none;
    gap: 1rem;


}

.nav_bar--buttons-button{
    background-color: transparent;
    padding: .3rem 1rem;
    border-radius: 0;

    
}
.nav_bar--buttons-button-selected { 
    box-shadow: 0 .3rem 0px var(--primary-color);
}
</style>