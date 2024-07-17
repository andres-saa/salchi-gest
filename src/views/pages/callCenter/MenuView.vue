<template >


<div class="px-0 mx-0 mt-5" style="min-height: 100vh;">

  


<siteDialog></siteDialog>


  <BarraCategorias/>

 
  
        <RouterView />
        <barra></barra>



        <div v-if=" route.path == '/call-center-vender' " style="height: 80vh;display: flex; align-items: center; justify-content: center;">
  <p class="text-center text-4xl md:text-6xl">  <b>Por favor seleccione una categoria</b> </p>

  </div>
       
  
  <VistaProducto></VistaProducto>
</div>


    










   
</template>

<script setup>
// import TarjetaCombo from '../../components/TarjetaCombo.vue';
import TarjetaMenu from './TarjetaMenu.vue'
import { menuOptions } from './service/menuOptions';
import {  onMounted, onBeforeUnmount, computed,watch } from 'vue';
import { PrimeIcons } from 'primevue/api';
import { curentProduct, changeProduct } from './service/productServices';
import { menuGlobal } from './service/menu/menu';
import { ableMenu } from './service/menuOptions';
import { formatoPesosColombianos } from './service/formatoPesos';
import siteDialog from './siteDialog.vue'
// import CarouselBanner from '../../components/CarouselBanner.vue'
import sesion from './sesion.vue';
import BarraCategorias from './BarraCategorias.vue';
import Loading from '@/components/Loading.vue';
import { useRoute } from 'vue-router';
import barra from './barra.vue'
import VistaProducto  from './VistaProducto.vue'

const route = useRoute()

const siteStore = useSitesStore()



import {ref} from 'vue'
import { comprobar_sede } from './service/state';
import router from '@/router/index.js'
import { useSitesStore } from './store/site';
const ruta = ref(router.currentRoute)
const hola = ref( localStorage.getItem('currentNeigborhood') )

const screenWidth = ref(window.innerWidth);

const isSmallScreen = computed(() => screenWidth.value < 800);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
  comprobar_sede()
  // siteStore.setVisible("currentSite", true)
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
  
});


const currentSection = ref(menuOptions.value[0].menus[0])
const currentMenu = ref({})
const changesection = (section) => {
    currentSection.value = section
    console.log(section)
}


const setSection = () => {
    currentSection.value = { category: menuOptions.value[0].menus[1].category, products: menuOptions.value[0].menus[1].products }

    console.log('cambio')
}

watch(menuOptions, setSection);






onMounted(async () => {
    // changesection({category:localStorage.getItem('menu').category,products:localStorage.getItem('menu').products})
    // getMenu().then(products => currentSection.value = products[0])
    ableMenu.value = true
});

</script>
