<template>


  <Dialog v-model:visible="showChangeDialog" :modal="true" class="p-3" style="background-color: var(--primary-color);max-width: 20rem;max-height: 30rem;border-radius: 1rem;" >
    <template #header>
        
          <h6>Elige una alternativa para  {{productBaseToChange.producto_descripcion}}</h6>
      </template>
    
    <div v-if="productBaseToChange" style="display: flex;flex-direction: column;gap: 1rem;align-items: center;"  >
  
      <div class="shadow-4 p-2" v-for="option in productBaseToChange.lista_productoCambio" :key="option.producto_cambio_id" style="cursor: pointer;background-color: white;color: black; width: 100%; display: flex;flex-direction: column;align-items: center;" @click="selectAlternative(option)">
        <img :src="`https://img.restpe.com/${option.producto_urlimagen}`" alt="" style="width: 100px; height: 100px; object-fit: contain;">
        <p><strong>{{ option.producto_descripcion }}</strong> </p>
        <!-- <p>{{ formatoPesosColombianos(option.producto_precio) }}</p> -->
      </div>
    </div>
  </Dialog>
  
  
    <Dialog :close="reset()" v-model:visible="store.visibles.currentProduct" :style="{ width: '500px', }"
      header="Seleccion de sede" :modal="true" class="p-fluid pt-8 m-3"
      style="justify-content: center; background-color: white;position: relative ; border-radius: 1rem;padding-top: 2rem;">
  
  
  
  
      <div class="header col-12    "
        style=" display: flex;justify-content: space-between; ; background-color: rgb(255, 255, 255);z-index:99; position:absolute;top:0rem;left: 0;height: min-content;">
        <p class=" mayuscula md:pl-4 nombre col-9 text-l lg:text-xl p-0 text-left" style="color:black;font-weight: bold">
          {{
            store.currentProduct.productogeneral_descripcion }}</p>
        <p class="md:pr-4 precio col-3 text-l lg:text-xl p-0 text-right " style="color:black;font-weight: bold">
          {{ formatoPesosColombianos(store.currentProduct.productogeneral_precio ||
            store.currentProduct.lista_presentacion[0].producto_precio) }}</p>
      </div>
  
  
      <template #footer>
        <div class="col-12 pb-6 " style="display: flex; justify-content: center;">
          <Button class="" @click="addToCart(store.currentProduct)" label="Agregar al carrito" icon="pi pi-shopping-cart"
            style=" position: absolute;  pointer-events: all; background-color: black; color:white;width:auto;border:none;padding: 0.5rem 3rem; font-weight: bold;">
          </Button>
        </div>
  
      </template>
  
  
  
      <Button @click="store.setVisible('currentProduct', false)" severity="danger" icon="pi pi-times"
        style=" width: 2.5rem;height: 2.5rem; border: none; position: absolute; right: -1rem; top: -1rem; border-radius: 50%; display: flex; align-items: center;justify-content: center; z-index: 99;">
  
      </Button>
  
  
  
  
  
  
  
  
      <div class="grid col-12 p-0  md:p-2">
  
  
  
  
  
        <div class="col-12  p-0 mt-0 shadow-5"
          style="display: flex;align-items: center; max-height: 45rem; background-color:white;border-radius: 0.5rem; ">
  
  
  
  
  
          <img
            style="width: 100%; aspect-ratio: 1 / 1 ; border-radius: 1rem; background-color: rgb(255, 255, 255);object-fit: cover; border-radius: 0.5rem;"
            :src="`https://img.restpe.com/${store.currentProduct.productogeneral_urlimagen}`" alt="">
  
        </div>
  
  
  
  
        <!-- <h6>  {{ store.currentProduct }}</h6>
  
       -->
  
  
        <div v-show="!see" class="col-12  p-0 mt-0 shadow-5"
          style="display: flex;align-items: center; max-height: 45rem; background-color:white;border-radius: 0.5rem; ">
  
  
  
  
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        <div class="   col-12 p-0 my-5" style="  " :class="!isSmallScreen ? 'scroll' : 'static'">
          <p class="col-12 p-0 " style="font-weight: bold;color: black; ">
            DESCRIPCION
  
          </p>
  
  
          <p class="col-12 text-l p-0" style="color: black;text-transform:capitalize">
            {{ store.currentProduct.productogeneral_descripcionweb?.toLowerCase() }}
  
          </p>
  
          <!-- 
          <div style="color: black;">
  
            <div v-for="grupo in adicionales" :key="grupo.category">
              <div class="mb-2">
                <span class="mb-2 text-center">
                  <b>{{ grupo.category }}</b>
                </span>
                <div class="mt-2">
                  <div v-for="item in grupo.items" :key="item.aditional_item_instance_id" style="display: flex; gap: 1rem;">
  
                    <Checkbox class="my-1" :binary="true" v-model="item.checked"
                      @change="() => handleAdditionChange(item, grupo.category)" />
                    <div style="display: flex; width: 100%; gap: 1rem; justify-content: space-between;">
                      <span class="text-sm adicion" style="text-transform: lowercase;">{{ item.aditional_item_name }}</span>
                      <span v-if="item.checked" style="display: flex; align-items: center;">
  
  
  
  
  
  
  
                        <span v-if="item.aditional_item_price > 0" class="pl-2 py-1 text-sm">
                          <b>{{ formatoPesosColombianos(item.aditional_item_price *
                            selectedAdditions[item.aditional_item_instance_id]?.quantity) }}</b>
                        </span>
  
                        <Button @click="decrement(item)" class="ml-2" severity="danger"
                          style="width: 2rem; height: 1.5rem;border: none;" icon="pi pi-minus"></Button>
                        <InputText :modelValue="selectedAdditions[item.aditional_item_instance_id]?.quantity" readonly
                          style="width: 2rem;border: none; height: 1.5rem;" class="p-0 text-center" />
                        <Button @click="increment(item)" severity="danger" style="width: 2rem;height: 1.5rem; border: none;"
                          icon="pi pi-plus"></Button>
                      </span>
  
  
  
                      <span v-else-if="item.aditional_item_price > 0" class="pl-2 py-1 text-sm">
                          <b>{{ formatoPesosColombianos(item.aditional_item_price)}}
                            </b>
                        </span>
  
                    </div>
  
                  </div>
                  <hr>
                </div>
              </div>
            </div>
          </div> -->
  
  
  
          <div v-for="i in store.currentProduct.lista_agrupadores">
  
  
            <h6 class="m-0 my-3"> <strong> {{ i.modificador_nombre }} </strong></h6>
          
  
  
            <div style="color: black;">
  
            <div v-for="modificador in i.listaModificadores" style="display: flex; gap: 1rem;" >
  
  
  
              <!-- {{ modificador.productogeneralmodificador_cantidadmaxima}} 
  
              {{ i.modificador_esmultiple }} -->
  
   
   
                <Checkbox v-if="modificador.modificadorseleccion_precio > 0"  @change="() => handleAdditionChange(modificador, i)"  binary v-model="checkedAdition[modificador.modificadorseleccion_nombre]" class="my-1" :binary="true" 
                />
  
  
             
                <div v-if="modificador.modificadorseleccion_precio > 0" style="display: flex; width: 100%; gap: 1rem; justify-content: space-between;">
                  <span class="text-sm adicion" style="text-transform: lowercase;">{{ modificador.modificadorseleccion_nombre }}</span>
                
  
  
  
  
                  <div  >
                    <span v-if="modificador.modificadorseleccion_precio > 0" class="pl-2 py-1 text-sm">
                      <b v-if="selectedAdditions[modificador.modificadorseleccion_id]?.quantity > 0">
                      {{ formatoPesosColombianos(modificador.modificadorseleccion_precio * parseInt(selectedAdditions[modificador.modificadorseleccion_id]?.quantity)) }}
                    </b>        
  
                    
                    <b v-else>  {{ formatoPesosColombianos(modificador.modificadorseleccion_precio) }}</b>
                  
                  
                  
                  
                  </span>
  
             
                    <Button v-if="checkedAdition[modificador.modificadorseleccion_nombre] && modificador.modificadorseleccion_precio > 0 && i.modificador_esmultiple > 0" @click="decrement(modificador)" class="ml-2" severity="danger"
                      style="width: 2rem; height: 1.5rem;border: none;" icon="pi pi-minus"></Button>
                    <InputText v-if="checkedAdition[modificador.modificadorseleccion_nombre] && modificador.modificadorseleccion_precio > 0 && i.modificador_esmultiple > 0" :modelValue="selectedAdditions[modificador.modificadorseleccion_id]?.quantity || 1"  readonly moce
                      style="width: 2rem;border: none; height: 1.5rem;" class="p-0 text-center" />
                    <Button v-if="checkedAdition[modificador.modificadorseleccion_nombre] && modificador.modificadorseleccion_precio > 0 && i.modificador_esmultiple > 0" @click="increment(modificador)" severity="danger" style="width: 2rem;height: 1.5rem; border: none;"
                      icon="pi pi-plus"></Button>
                  </div>
  
                  
            
  
  
  
                 
  
           
  
              </div>
  
  
            </div>
  
  
            </div>
  
  
  
          </div>
          <h4 v-if="store.currentProduct?.lista_productobase?.length > 0"> <strong>Incluye</strong> </h4>
  
          <div
            style="display: grid;gap: 1rem;grid-template-columns: repeat(1,1fr);border-radius: .5rem;overflow: hidden; ">
            
            
            <div class="p-3" style="border: 2px solid var(--primary-color);display: flex;border-radius: .5rem;background-color: 
            ;flex-direction: column;box-shadow: 0 0 1rem rgba(0, 0 , 0, .1 ); gap: .5rem;" v-for="product_base in store.currentProduct.lista_productobase"
             >
  
  <div  style="
            display: flex; align-items: start;border-radius: 50%; gap: 1rem;align-items: center; justify-content:start; padding: 1rem;overflow: hidden;border-radius:.5rem;position: relative;">
    <h6 class="m-0 p-0 text-2xl" style="max-width: 100%;min-width: max-content;">  {{Math.round(product_base.productocombo_cantidad)  }} x </h6>
  
  
  <img class="" style="width: 3rem; aspect-ratio: 1/1; object-fit: cover;border-radius: .5rem;"
    :src="`https://img.restpe.com/${product_base.producto_urlimagen}`" alt="d">
  
  <!-- <h6 class="m-0"> {{  product_base.producto_id  }} </h6><br> -->
  <h6 class="m-0 p-0" style="max-width: 100%;"> x {{ product_base.producto_descripcion }} </h6>
  <!-- <h6 class="m-0"> {{ product_base.productocombo_precio }} </h6><br> -->
  
  </div>
        
  <div style="display: flex;justify-content: end;width: 100%;">
    <Button style="background-color: black;max-width: min-content;color: white; border: none;" label="Cambiar" v-if="product_base.lista_productoCambio && product_base.lista_productoCambio.length > 0" @click="changeProduct(product_base)"></Button>
              
  </div>
             
            </div>
          </div>
  
  
  
  
  
  
  
        </div>
  
        <div v-if="!isSmallScreen" class="col-12 md:col-6 add-car pt-5 " style="pointer-events: none;display: flex; align-items: end; justify-content: center;     background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%);
    height: 5rem; bottom: 0rem;right: 0;">
  
  
  
        </div>
  
  
      </div>
  
  
  
      <img :onLoad="seeImageLeftHand" v-show="see" :class="see ? 'cargado-left-hand' : 'sin-cargar'" style="     pointer-events: none;
     ; position: absolute;right: 95%; top: 20%;" :src="'/images/garra-sm-hor.png'" alt="">
      <img :onLoad="seeImageRightHand" v-show="see" :class="see ? 'cargado-right-hand' : 'sin-cargar'" style="     pointer-events: none;
     ; position: absolute;left: 95%; top: 20%;" :src="'/images/garra-sm-izq.png'" alt="">
  
  
  
    </Dialog>
  </template>
  
  
  
  
  <script setup>
  import { menuOptions } from '@/service/menuOptions';
  import { onMounted, onBeforeUnmount, watch } from 'vue'
  // import { getProductsByCategory, getCategory, getMenu } from '@/service/productServices.js'
  import { ref, computed } from 'vue';
  import { PrimeIcons } from 'primevue/api';
  // import { changeProduct } from '@/service/productServices';
  import { carro_para_la_barra_de_abajo } from '@/service/cart';
  // import { useRouter } from 'vue-router';
  import { adiciones } from '@/service/menu/adiciones/adiciones.js'
  import { URI } from '@/service/conection'
  import { useToast } from 'primevue/usetoast';
  import { domicilio, quantity } from '@/service/cart';
  // import { cart } from '@/service/cart';
  // import {vue} from 'vue';imp
  import { cities } from '@/service/citiesService';
  import { menuGlobal, version_menu } from '@/service/menu/menu';
  // import { PrimeIcons } from 'primevue/api';
  import { formatoPesosColombianos } from '@/service/formatoPesos';
  // import TarjetaMenu from '@/components/TarjetaMenu.vue';
  // import { RouterLink } from 'vue-router';
  import router from '@/router/index.js'
  import { useCart, deleteAllCookies } from '@/service/cart';
  // import barra from '@/components/barra.vue';
  import { useRoute } from 'vue-router';
  import barra from '@/components/barra.vue';
  import siteDialog from '@/components/siteDialog.vue';
  // import ProductDial from '@/views/pages/productDial.vue';
  import { verCerrado } from './service/state';
  import { usecartStore } from './store/shoping_cart';
  import { curentProduct } from './service/productServices';
  import { carService } from './service/car/carService'
  import { adicionalesService } from './service/restaurant/aditionalService';
  import { useSitesStore } from './store/site';
  
  
  const selectAlternative = (option) => {
    // Crear un objeto con los detalles del producto actual
    const currentProduct = {
      producto_cambio_id: productBaseToChange.value.producto_id,
      producto_descripcion: productBaseToChange.value.producto_descripcion,
      producto_precio: productBaseToChange.value.producto_precio,
      producto_urlimagen: productBaseToChange.value.producto_urlimagen,
      // Incluye otras propiedades si es necesario
    };
  
    // Encontrar el índice de la opción seleccionada en lista_productoCambio
    const optionIndex = productBaseToChange.value.lista_productoCambio.findIndex(
      (item) => item.producto_cambio_id === option.producto_cambio_id
    );
  
    // Reemplazar la opción seleccionada con el producto actual
    if (optionIndex !== -1) {
      productBaseToChange.value.lista_productoCambio.splice(optionIndex, 1, currentProduct);
    }
  
    // Actualizar productBaseToChange con los detalles de la opción seleccionada
    productBaseToChange.value.producto_id = option.producto_id;
    productBaseToChange.value.producto_descripcion = option.producto_descripcion;
    productBaseToChange.value.producto_precio = option.producto_precio;
    productBaseToChange.value.producto_urlimagen = option.producto_urlimagen;
  
    // Cerrar el diálogo
    showChangeDialog.value = false;
  
    // Recalcular el precio total si es necesario
    recalculateTotalPrice();
  };
  
  
  const recalculateTotalPrice = () => {
    let totalPrice = 0;
  
    // Sumar precios de los productos base
    store.currentProduct.lista_productobase.forEach((product) => {
      totalPrice += parseFloat(product.producto_precio) * parseInt(product.productocombo_cantidad);
    });
  
    // Agregar precio del producto general si es necesario
    if (store.currentProduct.productogeneral_precio) {
      totalPrice += parseFloat(store.currentProduct.productogeneral_precio);
    }
  
    // Actualizar el precio total en el store
    store.currentProduct.totalPrice = totalPrice;
  };
  
  
  const productBaseToChange = ref(null);
  const showChangeDialog = ref(false);
  
  const changeProduct = (product_base) => {
    productBaseToChange.value = product_base;
    showChangeDialog.value = true;
  };
  
  
  const highResLoaded = ref({});
  const currentImageSrc = ref({}); // Objeto para mantener la imagen actual de cada sede
  
  const lowResImage = (product_name) => `${URI}/read-photo-product/${product_name}/96`;
  const highResImage = (product_name) => `${URI}/read-photo-product/${product_name}/600`;
  
  
  const currentImage = (site_id) => {
    return currentImageSrc.value[site_id] || lowResImage(site_id);
  };
  
  const loadHighResImage = (site_id) => {
    const img = new Image();
    img.src = highResImage(site_id);
    img.onload = () => {
      currentImageSrc.value[site_id] = highResImage(site_id); // Reemplaza el src de la imagen cuando está completamente cargada
      highResLoaded.value[site_id] = true;
    };
  };
  
  
  
  
  const sonido = new Audio('/sounds/sarpazo.mp3')
  const route = useRoute();
  const selectedAdditions = ref({});
  
  const store = usecartStore()
  const see = ref(false)
  
  const seeImage = () => {
  
    see.value = true
  }
  
  
  const reset = () => {
    see.value = seeLeftHand.value = seeRightHand.value = false
  
  }
  

  
  const seeLeftHand = ref(false)
  
  const seeImageLeftHand = () => {
    seeLeftHand.value = true
  }
  
  const seeRightHand = ref(false)
  
  const seeImageRightHand = () => {
    seeRightHand.value = true
  }
  
  
  
  
  const handleAdditionChange = (item, group) => {
  
    if (checkedAdition.value?.[item?.modificadorseleccion_nombre]) {
  
      const new_item = {
        id: item.modificadorseleccion_id,
        name: item.modificadorseleccion_nombre,
        price: item.modificadorseleccion_precio,
        group: group.modificador_nombre,
        group_id:group.modificador_id,
        parent_id: store.currentProduct.producto_id || store.currentProduct.lista_presentacion[0].producto_id
      }
  
      selectedAdditions.value[new_item.id] = {
        ...new_item,
        quantity: item.quantity || 1
      };
  
      console.log(selectedAdditions.value)
      
    } else {
      delete selectedAdditions.value[item.modificadorseleccion_id];
    }
  };
  
  const increment = (item) => {
    if (checkedAdition.value?.[item?.modificadorseleccion_nombre]) {
  
      const new_item = {
        id: item.modificadorseleccion_id,
        name: item.modificadorseleccion_nombre,
        price: item.modificadorseleccion_precio,
        // quantity:item.quantity
      }
  
  
      selectedAdditions.value[new_item.id].quantity++;
    }
  };
  
  const decrement = (item) => {
  
    if (selectedAdditions.value[item.modificadorseleccion_id].quantity > 1 && selectedAdditions.value[item.modificadorseleccion_id]) {
      selectedAdditions.value[item.modificadorseleccion_id].quantity--
    }
  
  };
  
  
  const addToCart = (product) => {
  
  
    const additionsArray = Object.values(selectedAdditions.value);
  
    store.addProductToCart(product);
  
    additionsArray.forEach(adition => {
      store.addAdditionToCart(adition)
      console.log(adition)
      
    })
  
    selectedAdditions.value = {}; // Resetear las adiciones seleccionadas
  
  
    store.setVisible('currentProduct', false)
  };
  
  const adicionales = ref([])
  
  
  const checkedAdition = ref({})
  
  
  
  const salsas = ref()
  const cambios = ref()
  
  // const adicionales = ref()
  const toppings = ref()
  const acompanantes = ref()
  
  
  // onMounted(async () => {
  //   const product_id = await store.currentProduct.id
  
  
  //   if (product_id) {
  //     adicionales.value = await adicionalesService.getAditional(product_id)
  //   }
  // })
  
  
  watch(() => store.currentProduct, async () => {
    const product_id = await store.currentProduct.id
  
  
    if (product_id) {
      adicionales.value = await adicionalesService.getAditional(product_id)
    }
  })
  
  
  watch(() => store.visibles.addAdditionToCart, async (new_val) => {
    if (!new_val) {
      selectedAdditions.value = {}
      adicionales.value = []
    } else {
      const product_id = await store.currentProduct.id
      if (product_id) {
        adicionales.value = await adicionalesService.getAditional(product_id)
      }
    }
  }, { deep: true })
  
  
  
  
  // Verificar si la ruta actual o alguna de sus rutas secundarias es /admin-products
  const isInAdminProductsRoute =
    route.matched.some(record => record.path === '/admin-products') ||
    route.matched.some(record => record.path.startsWith('/admin-products/')) ||
    route.matched.some(record => record.path === '/entregas') ||
    route.matched.some(record => record.path.startsWith('/entregas/'));;
  
  
  
  const ruta = ref(router.currentRoute)
  const version_tienda = ref(1)
  const screenWidth = ref(window.innerWidth);
  //console.log(screenWidth.value)
  // Función para actualizar el valor del ancho de la pantalla
  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };
  
  const isSmallScreen = computed(() => screenWidth.value < 768);
  
  
  
  
  
  const toast = useToast();
  // Escuchar el evento de cambio de tamaño de la ventana
  window.addEventListener('resize', updateScreenWidth);
  
  // Limpieza al desmontar el componente
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
  
  });
  
  
  
  
  
  const storedVersion = localStorage.getItem('version_tienda');
  
  // Check if it doesn't exist in local storage
  if (!storedVersion) {
    // If it doesn't exist, save the current version to local storage
    localStorage.setItem('version_tienda', version_tienda.value);
  } else {
    // If it exists, compare with the current version
    if (parseInt(storedVersion) !== version_tienda.value) {
      // If it's not equal, update the local storage with the current version
      localStorage.setItem('version_tienda', version_tienda.value);
      localStorage.removeItem('menu')
      localStorage.removeItem('cart')
      localStorage.removeItem('currentNeigborhood')
      deleteAllCookies()
  
      // Perform any additional actions needed when the version changes
      // For example, you might want to update the UI or perform other logic.
      //console.log('Version updated. Do additional actions here.');
    }
  }
  
  



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const c_neigbor = ref(localStorage.getItem('currentNeigborhood'))
  
  onMounted(() => {
  


  
  
  
  
  
  
    if (localStorage.getItem('cart')) {
      // localStorage.setItem('cart',{products:[],total:0})
      carro_para_la_barra_de_abajo.value = JSON.parse(localStorage.getItem('cart'))
    }
  
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify({ products: [], total: 0 }))
      // localStorage.setItem('totalCart',0)
    }
  
    //console.log(JSON.parse((localStorage.getItem('menu'))))
    // cart.value = JSON.parse(localStorage.getItem('cart'))
  
    if (localStorage.getItem('menu') && localStorage.getItem('versionMenu') && parseFloat(localStorage.getItem('versionMenu')) == version_menu.value) {
      const version_local = parseFloat(localStorage.getItem('versionMenu'))
      //console.log(version_local, version_menu.value)
  
  
      //console.log('habia')
      menuOptions.value[0].menus = JSON.parse(localStorage.getItem('menu'))
      // menuOptions.value[0].version = JSON.parse(localStorage.getItem('versionMenu'))
  
  
    } else {
  
      //   getMenu().then(products => {
      //   menuOptions.value[0].menus = products
      //   localStorage.setItem("menu", JSON.stringify(products))
  
      //   if(!showSiteDialog.value){
      //     location.reload()
      //   }
  
      // })
  
      menuOptions.value[0].menus = menuGlobal
      localStorage.setItem('menu', JSON.stringify(menuGlobal))
      localStorage.setItem('versionMenu', version_menu.value)
      //console.log('nuevo menu')
      localStorage.removeItem('cart')
      localStorage.removeItem('currentNeigborhood')
  
    }
  
  
  
  
  
  
  })
  
  
  const sitesImages = ref({
    Caney: 'https://drive.google.com/file/d/1LpmzmgBDOR-YAT4_SstyAldl1Nid-CF2/view?usp=sharing',
    'La Flora': 'https://backend.novatocode.online/read-site-cover/IMPERIO%20CANEY',
    Palmira: '	https://backend.novatocode.online/read-site-cover/IMPERIO%20PALMIRA',
    Bretaña: 'https://backend.novatocode.online/read-site-cover/IMPERIO%20BRETA%C3%91A',
    Jamundi: 'https://backend.novatocode.online/read-site-cover/IMPERIO%20JAMUNDI',
    Tulua: 'https://backend.novatocode.online/read-site-cover/IMPERIO%20TULUA',
    default: ''
  })
  const currenNeigborhood = ref({
    site: {
      name: 'default'
    }
  })
  const possibleNeigborhoods = ref()
  

  const currenCity = ref({})
  
  const changePossiblesNeigborhoods = () => {
    const neigborhoods = []
  
    currenCity.value.sites.map(site => {
      site.neigborhoods.map(neigborhood => {
        neigborhoods.push({ name: neigborhood.name, neigborhood: neigborhood, site: site })
        //console.log(site)
      })
    })
  
    possibleNeigborhoods.value = neigborhoods
  }
  watch(currenCity, () => { changePossiblesNeigborhoods() })
  


 
  
  //console.log(router.currentRoute)
  
  const topbarMenuActive = ref(false);
  
  
  
 
  // const cargarAcomp = (item) => {
  //   //console.log('hola');
  
  //   // Asegúrate de que checkedAdiciones y currentAditions estén definidos en el ámbito adecuado
  
  //   if (checkedAcomp.value[item.name]) {
  //     // Si el checkbox está marcado, agregar el elemento a la lista
  //     currentAditions.value.push(item);
  //   } else {
  //     // Si el checkbox está desmarcado, quitar el elemento de la lista
  //     const index = currentAditions.value.findIndex((el) => el.name === item.name);
  //     if (index !== -1) {
  //       currentAditions.value.splice(index, 1);
  //     }
  //   }
  // };
  
  
  
  const cargarSalsas = (item) => {
    //console.log('hola');
  
    if (item === 'TODAS LAS SALSAS') {
      // Si seleccionas 'TODAS LAS SALSAS', establece todas las demás opciones como false
      for (const key in checkedSalsas.value) {
        if (key !== 'TODAS LAS SALSAS') {
          checkedSalsas.value[key] = false;
        }
      }
  
      // Limpia la lista currentSalsas y agrega 'TODAS LAS SALSAS'
      currentSalsas.value = ['TODAS LAS SALSAS'];
    } else if (item === 'SIN SALSAS') {
      // Si seleccionas 'SIN SALSAS', establece todas las demás opciones como false
      for (const key in checkedSalsas.value) {
        if (key !== 'SIN SALSAS') {
          checkedSalsas.value[key] = false;
        }
      }
  
      // Limpia la lista currentSalsas y agrega 'SIN SALSAS'
      currentSalsas.value = ['SIN SALSAS'];
    } else {
      // Asegúrate de que checkedSalsas y currentSalsas estén definidos en el ámbito adecuado
  
      // Si 'TODAS LAS SALSAS' está presente, quitarlo de la lista
      const indexTodasLasSalsas = currentSalsas.value.indexOf('TODAS LAS SALSAS');
      if (indexTodasLasSalsas !== -1) {
        currentSalsas.value.splice(indexTodasLasSalsas, 1);
      }
  
      // Si 'SIN SALSAS' está presente, quitarlo de la lista
      const indexSinSalsas = currentSalsas.value.indexOf('SIN SALSAS');
      if (indexSinSalsas !== -1) {
        currentSalsas.value.splice(indexSinSalsas, 1);
      }
  
      // Si el checkbox está marcado, agregar el elemento a la lista
      if (checkedSalsas.value[item]) {
        currentSalsas.value.push(item);
      } else {
        // Si el checkbox está desmarcado, quitar el elemento de la lista
        const index = currentSalsas.value.indexOf(item);
        if (index !== -1) {
          currentSalsas.value.splice(index, 1);
        }
      }
    }
  
    //console.log(currentSalsas.value);
  };
  
  
  
  
  const hay_barrio = ref(JSON.parse(localStorage.getItem('currentNeigborhood')))
  
  
  
  
  
  
  
  
  
  </script>
  
  
  
  
  
  
  
  
  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-100px);
      /* transform: scale(.5); */
      /* background-color: rgb(255, 255, 0); */
      /* filter: blur(1px); */
    }
  
    to {
      opacity: 1;
      /* filter: blur(1px); */
  
    }
  }
  
  .cargado {
    opacity: 0;
    /* Inicialmente invisible */
    animation: fadeIn .1s ease-out forwards;
    /* Duración de 1 segundo, 'ease-out' para desacelerar hacia el final, y 'forwards' para mantener el estado final visible */
  }
  
  
  
  
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-100px);
      /* transform: scale(.5); */
      /* background-color: rgb(255, 255, 0); */
      /* filter: blur(1px); */
    }
  
    to {
      opacity: 1;
      /* filter: blur(1px); */
  
    }
  }
  
  
  
  @keyframes fadeInLeftHand {
    from {
      opacity: 0;
      transform: translateX(-1000px);
      /* transform: scale(.5); */
      /* background-color: rgb(255, 255, 0); */
      /* filter: blur(1px); */
    }
  
    to {
      opacity: 1;
      /* filter: blur(1px); */
  
    }
  }
  
  .cargado-left-hand {
    opacity: 0;
    /* Inicialmente invisible */
    animation: fadeInLeftHand .1s ease-out forwards;
    /* Duración de 1 segundo, 'ease-out' para desacelerar hacia el final, y 'forwards' para mantener el estado final visible */
  }
  
  
  
  
  @keyframes fadeInRightHand {
    from {
      opacity: 0;
      transform: translateX(1000px);
      /* transform: scale(.5); */
      /* background-color: rgb(255, 255, 0); */
      /* filter: blur(1px); */
    }
  
    to {
      opacity: 1;
      /* filter: blur(1px); */
  
    }
  }
  
  .cargado-right-hand {
    opacity: 0;
    /* Inicialmente invisible */
    animation: fadeInRightHand .1s ease-out forwards;
    /* Duración de 1 segundo, 'ease-out' para desacelerar hacia el final, y 'forwards' para mantener el estado final visible */
  }
  
  
  
  
  
  
  
  
  
  *::-webkit-scrollbar {
    overflow-y: auto;
    display: none;
    /* oculta la barra de desplazamiento en navegadores basados en WebKit/Blink */
  }
  
  /* .scroll{
    overflow-y: auto;
  } */
  
  .adicion::first-letter {
    text-transform: uppercase;
  }
  
  .mayuscula {
    text-transform: uppercase;
  }
  </style>