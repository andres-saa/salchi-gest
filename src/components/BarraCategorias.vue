<template>

    <div :class="categories.length>0? 'apear' : 'hide'" style="position: sticky;top: 3rem;min-height: 3rem;min-width: 100%; z-index: 99; " class=" shadow-3 d-flex p lg:justify-content-center align-items-center mb-5 p-0 md:p-0 m-0">
       
      

        <div class=" barra align-items-center  p-0 md:p-1"
        style="overflow-x: auto;display: flex;  background-color: rgba(255, 255, 255, 0.913)">

        

        <div v-for="section in categories" :key="section.id" class="p-1">
            <button @click="navigateToCategory(section.category_name,section.category_id)"
                :class="checkSelected(section) ? 'selected menu-button' : 'menu-button'"
                class="p-2 text-lg titulo" style="font-weight: 400; text-transform: uppercase;min-width: max-content;">
                <span class="text-lg" style="min-width: max-content;">{{ section.category_name }}</span>
            </button>
        </div>
    </div>
    </div>
    
<!-- {{ gategori }} -->

<!-- {{ categories }} -->
</template>





<script setup>
import { ref, onMounted,watch } from 'vue';
import router from '@/router/index.js';
import { useRoute } from 'vue-router';
import { categoriesService } from '../service/restaurant/categoriesService'
import { useSitesStore } from '../store/site';
 
const siteStore = useSitesStore()
const categories = ref([]);


const navigateToCategory = (categoryName,category_id) => {
    if(category_id >= 1000){
        router.push('/tienda-menu/productos/adicionales')
    } else{
        router.push({ name: 'sesion', params: { menu_name: categoryName, category_id:category_id } });
    }
};


const update = async() => {
    categories.value = await categoriesService.getCategories()
}


onMounted(async () => {
    update()
    
}
    );


const checkSelected = (section) => {
    const route = useRoute(); // Asegúrate de que tienes acceso a useRoute aquí
    return route.params.category_id == section.category_id; // Verifica si el path actual contiene la cadena section
};


watch(() => siteStore.restaurant, (newval) => {
    update()
    router.push('/tienda-menu/')
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
    box-shadow: 0 0.5rem var(--primary-color);

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
  max-height: 10rem;
}

.hide{
  opacity: 0;
  max-height: 0rem;
  overflow: hidden;

}


@media (min-width: 600px) {
    .barra{
    justify-content: center;
}
}

</style>