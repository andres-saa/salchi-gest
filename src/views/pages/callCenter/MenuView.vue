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

  <div style="position: fixed;overflow: hidden;background-color: white;border-radius: 10rem;background-color: black; top:12rem;display: flex;flex-direction: column;left:1rem;padding: .5rem;gap: 1rem; ">

<div v-for="(i, index) in categories" style="display: flex;align-items: center; flex-direction: column;">
    <Button :style="siteStore.categories == i.codigos? 'background-color:yellow' : 'background-color:white'" style="padding: .5rem; border-radius: 50%;aspect-ratio: 1 / 1;" size="small" text :label="i.name" class="text-white button" @click="siteStore.categories = i.codigos">
        <img style="width: 2rem; height: 2rem;" :src="i.imagen" alt="">
    </Button>
    <span   v-if="index != 2" style="border-top: .1rem solid white;"></span>
</div>


</div>
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





import {ref} from 'vue'
import { comprobar_sede } from './service/state';
import router from '@/router/index.js'
import { useSitesStore } from './store/site';
const ruta = ref(router.currentRoute)
const hola = ref( localStorage.getItem('currentNeigborhood') )
const siteStore = useSitesStore()
import { URI } from './service/conection';
import {usecartStore} from './store/shoping_cart'
import { fetchService } from '../../../service/utils/fetchService';





const cartStore = usecartStore()
const screenWidth = ref(window.innerWidth);

const isSmallScreen = computed(() => screenWidth.value < 800);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};



onMounted(async () => {
  const site_id = siteStore.location.site?.site_id
  const pe_id = siteStore.location.site?.pe_site_id

  const data = await fetchService.get(`${URI}/get-product-integration/6149/${pe_id || 1}`)
  cartStore.menu = data

})



onMounted(async() => {
  window.addEventListener('resize', updateScreenWidth);
  comprobar_sede()
  // await getProducts()

  // const cart = await fetchService.get(`https://backend.salchimonster.com/get-product-integration/6149/11`)
  // cartStore.menu = cart


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










const categories = ref([
  {
    name:'S',
    id:1,
    imagen:'/images/logo.png',
    codigos:[
        10,
        26,
        8,
        9,
        13,
        27,
        11,
        4,
        5,
        110, // SALCHIPAPA PARA 2 PERSONAS NJ
        112, // SALCHIPAPAS PERSONALES NJ
        113, // PARA COMPARTIR
        111, // BURGERMONSTER
        109, // BEBIDAS
        115,
        118, 
        119, 
        116,
        117
      ]

  },

  {
    name:'B',
    id:2,imagen:'https://backend.salchimonster.com/read-photo-product/mm9Ohnu7',
    codigos:[
    5,
    22,
    18,
    4

]
  },
  
  {
    name:'P',
    id:4,
    imagen:'https://backend.salchimonster.com/read-photo-product/a1roeK3y',
    codigos:[
    19,
24,
4,
5
      ]
  }
])


  
// const getProducts = async (category_name) => {
//     if (true) {
//         try {
//             let response = await fetch(`${URI}/get-product-integration/6149/3`);

//             if (!response.ok) {
//                 store.setLoading(false, 'cargando productos');
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             let data = await response.json();

//             // Procesamos los productos y los organizamos por precio usando cartStore.getProductPrice
//             const sortedProducts = data.data.data.sort((a, b) => {
//                 return cartStore.getProductPrice(a) - cartStore.getProductPrice(b);
//             });

//             // Asignamos los productos organizados al menú
//             cartStore.menu.data = sortedProducts;

//         } catch (error) {
//             console.error('Error fetching data: ', error);
//         }
//     }
// };



  
onMounted(async () => {
    ableMenu.value = true
});



</script>

<style scoped>


*{
  transition: all ease .5s;
}


.button:hover{

  transform: scale(1.2);
  
}
</style>
