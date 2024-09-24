<template>

    <div :class="categories.length > 1? 'apear' : 'hide'" style="position: sticky; top: 3rem; z-index: 99; background-color: white;height: max-content; min-height: max-content;" class=" shadow-1 d-flex  lg:justify-content-center align-items-center mb-5 p-0 md:p-0">
       
       
        <!-- <Button class="px-0" style="position: absolute;border: none;background-color: white;color: black; left: -0.5rem;z-index: 99;height: 100%;width: 1.7rem; border-radius: 0;" severity="help"  icon="pi pi-angle-left text-2xl"></Button>


        <Button class="px-0" style="position: absolute;border: none;background-color: white;color: black; right: -0.5rem;z-index: 99;height: 100%; width: 1.7rem; border-radius: none;" severity="help"  icon="pi pi-angle-right text-2xl"></Button> -->

        <div class="  d-flex p lg:justify-content-center align-items-center  p-0 md:p-1"
        style="overflow-x: auto; display:flex;width: 100%; background-color: rgba(255, 255, 255, 0.913)">


        <Button @click="store.visibles.currentSite = true" severity="help"
                
                class="py-2  ml-4 text-lg titulo"  style="font-weight: 400;border-radius: .3rem; text-transform: uppercase;min-width: max-content;">
                <span class="text-lg" style="min-width: max-content;">Nuevo pedido</span>
        </Button>
        

        <div v-for="section in categories" :key="section.id" class="p-1">
            

            <Button @click="navigateToCategory(section.category_name,section.category_id)"
                :class="checkSelected(section.category_id) ? 'selected menu-button' : 'menu-button'"
                class="p-0 mx-3   text-lg titulo" style="font-weight: 400; text-transform: uppercase;border-radius: 0; min-width: max-content;">
                <span class="text-lg" style="min-width: max-content;"> {{ section.category_name }}</span>
            </Button>
        </div>
    </div>
    </div>
    

</template>





<script setup>
import { ref, onMounted,watch } from 'vue';
import router from '@/router/index.js';
import { useRoute } from 'vue-router';
import { categoriesService } from './service/restaurant/categoriesService'
import {useSitesStore} from  './store/site'

const store = useSitesStore()

const categories = ref([{name:'CARGANDO ...'}]);


const navigateToCategory = (categoryName,category_id) => {
    router.push({ name: 'call-center-vender-menu', params: { menu_name: categoryName, category_id:category_id } });
};


onMounted(async () => {
    categories.value = await categoriesService.getCategories()});


const checkSelected = (section) => {
    const route = useRoute(); // Asegúrate de que tienes acceso a useRoute aquí
    return route.path.includes(section); // Verifica si el path actual contiene la cadena section
};

watch(() => store.restaurant, async(newval) => {
    categories.value = await categoriesService.getCategories();
    router.push('/call-center-vender')
}, {depth:true})

</script>


<style scoped>
.boton-menu {
    margin: 0;
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 0 20px;
}

* {
    text-transform: lowercase;
}

*::first-letter {
    text-transform: uppercase;
}

.menu-button {
    background-color: transparent;
    padding: 1rem;
    margin: 0 1rem;
    border: none;
    font-size: 20px;
    outline: none;

}

.menu-button:hover {

    cursor: pointer;


}

*:focus {
    outline: none;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.titulo {
    text-transform: lowercase;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.selected {
    box-shadow: 0 0.3rem var(--primary-color);

}
.col-12 {
    width: 100vw;
    /* position: absolute; */
    left: 0;
    padding: 1.5rem;
}



.apear{
  transition: .3s all ease;
  opacity:1;

}

.hide{
  opacity: 0;

  overflow: hidden;

}
</style>