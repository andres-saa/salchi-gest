<template>

<div class="col-12 p-0 ">

    

    <p class="text-3xl titulo my-6 px-0 mx-0 text-center" style="text-transform: capitalize;align-items: center; gap:1rem;font-weight: bold;display: flex;"> <div style="height: 0.5rem;width: 100%; background-color: #a855f7;border-radius: 1rem 0 0 1rem;" ></div>  <span style="min-width: max-content;">{{ ruta.params.sesion }}</span> <div style="height: 0.5rem; background-color: #f59e0b; width: 100%; border-radius: 0 1rem 1rem 0;"></div>
                
    </p> 

<span>
    <Button  style="height: 2.5rem;"  @click="showAgregarProducto = !showAgregarProducto" class=" ml-2 mb-4 " size="small" severity="help"> <i :class="PrimeIcons.PLUS" class="mr-3"></i> Agregar {{ ruta.params.sesion.slice(0,-1) }} </Button>
</span>

    <div class="grid p-0  m-0 col-12 " style=""  >
        <div v-for="product in products" :key="product.id" class="xl:col-3 lg:col-4 md:p-3 p-1 col-6 md:col-6 mb-4 ">
            <div class="cont p-2" style="background-color: white; height: 100%;position: relative"  >
        <!-- <router-link :to="`product/${product.id}` " @click="changeProduct(product)"> -->

            


            <div class="imagen-cont " style="position: ;">
                <!-- <img class="imagen" @error="imagenError" :src="`${URI}/read_product_image/300/${product.id}`" alt=""> -->
                <img class="imagen" @error="imagenError" style="height: 50;" :src="`${URI}/read-product-image/300/${product.name}`" alt="">
                
            
            </div>
           

        <!-- </router-link> -->
        <!-- <img class="imagen" src="src/images/iconos menu/salchipapa-icono.png" alt=""> -->

        
            <div style=" display: ; " >
                <p class="nombre-producto mt-4 " style="font-weight: bold;" > {{ product.name }}</p>
                <p class="descripcion-producto mt-2 text-sm mb-4" > {{ product.description }}</p>
                
            </div>

            
            <Button class="p-2" size="small" rounded severity="info" style="position: absolute;top: -1rem;right: 0rem;  display: flex; align-items: center; justify-content: center; color: white;z-index:;" @click="prepararParaEditar(product)" ><i   class=" text-2xl  p-0 m-0 " :class="PrimeIcons.PENCIL"> </i>  </Button>

            

            <Button  severity="danger"  style="position: absolute;top: -1rem;right: 3rem; width: 2.5rem;height: 2.5rem;border-radius: 50%; display: flex; align-items: center; justify-content: center;z-index:;" @click="pregpararParaEliminar(product)" ><i  class=" text-2xl  p-0 m-0 " :class="PrimeIcons.TRASH"> </i>  </Button>
            <Toast style="box-shadow: none;"  />
       

        <div class="info " >
            <!-- {{ showEditarProducto }} -->
            
            <div class="text-l" style="font-weight: bold;border-radius: 100px; "> {{ formatoPesosColombianos(product.price) }}</div>

            <InputSwitch v-model="product.isActive" @change="() => updateProductState(product)" />


        </div> 


        
    </div>
        </div>
    </div>


    <Toast></Toast>

 
<dialogoAgregarProducto></dialogoAgregarProducto>
<dialogoEditarProducto></dialogoEditarProducto>




<Dialog header="Confirmation" v-model:visible="showEliminarProducto" :style="{ width: '350px' }" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span>Seguro que desea eliminar <b>{{ productoAEliminar.name }}</b></span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" @click="showEliminarProducto = !showEliminarProducto" class="p-button-text" />
                        <Button label="Si" icon="pi pi-check" @click="eliminarProducto" class="p-button-text" autofocus />
                    </template>
</Dialog>

</div>


</template>

<script setup>
import TarjetaMenu from '@/components/TarjetaMenu.vue';
import { onMounted, ref, watch } from 'vue';
import { PrimeIcons } from 'primevue/api';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { URI } from '@/service/conection';
import { formatoPesosColombianos } from '../../../service/formatoPesos';
import router from '@/router/index.js';
import { productoAEliminar } from '../../../service/valoresReactivosCompartidos';
import { categoryValue,siteDropValue} from '@/service/valoresReactivosCompartidos';
import dialogoAgregarProducto from '../../../components/dialogos/dialogoAgregarProducto.vue';
import dialogoEditarProducto from '../../../components/dialogos/dialogoEditarProducto.vue';
import { showAgregarProducto, showEliminarProducto } from '../../../service/valoresReactivosCompartidos';
// import { siteDropValue } from '../../../service/valoresReactivosCompartidos';
// import { categoryValue } from '../../../service/valoresReactivosCompartidos';
import { productoEnviado } from '../../../service/valoresReactivosCompartidos';
import { showEditarProducto } from '../../../service/valoresReactivosCompartidos';
import { productoAEditar } from '../../../service/valoresReactivosCompartidos';
const products = ref([]); // Definiendo la variable reactiva para almacenar los productos
const ruta = useRoute(); // Usando useRoute para acceder a los parámetros de la ruta
const isActive = ref([]);
const toast = useToast()
import { useReportesStore } from '../../../store/reportes';
const store = useReportesStore()
// const getProducts = async (category_name) => {


//     try {
        
//         let response = await fetch(`${URI}/products/category/name/${category_name}/site/${siteDropValue.value.site_id}`);
//         if (!response.ok) {
//             products.value = [];
//             throw new Error(`HTTP error! status: ${response.status}`);
           
//         }
//         let data = await response.json();
//         products.value = data;
//     } catch (error) {
//         products.value = [];
//         console.error('Error fetching data: ', error);
//     }



// }
const prepararParaEditar = (product) => {
    console.log('hola')
    showEditarProducto.value = !showEditarProducto.value
    productoAEditar.value = product
}
const pregpararParaEliminar = (product) => {
    
    showEliminarProducto.value = !showEliminarProducto.value
    productoAEliminar.value = product
}


const getProducts = async (category_name) => {

console.log(localStorage)













// Check if siteDropValue?.value?.site_id is undefined or null
if (!siteDropValue?.value?.site_id) {
    console.log('Site ID is not available. Exiting function.');
    return; // Exit the function early
}



try {
    store.setLoading(true,`cargando ${category_name} de ${siteDropValue.value.site_name}`)
    let response = await fetch(`${URI}/products/category/name/${category_name}/site/${siteDropValue?.value?.site_id}`);
    if (!response.ok) {
        products.value = [];
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    store.setLoading(false,`cargando ${category_name}s`)
    products.value = data.map(product => ({
        ...product,
        isActive: product.state == 'active' // Initialize the isActive field based on server data
    }));
} catch (error) {
    products.value = [];
    console.error('Error fetching data: ', error);
    store.setLoading(false,`cargando ${category_name}s`)

}
};



const updateProductState = (product) => {

const data = {...product}    
data.state = product.isActive? 'active': 'inactive'
// console.log(data)


fetch(`${URI}/products/${product.product_id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    toast.add({ severity: `${!product.isActive? 'error':'success'}`, summary: `${!product.isActive? 'Desactivado':'Activado'}`, detail: product.name, life: 3000 });
    isActive.value = product.state == 'active';
    // location.reload()
    return response.json(); 
})
.then(data => {
    // Manejar la respuesta (puedes mostrar un mensaje de éxito, por ejemplo)
})
.catch(error => {
    console.error('Error al actualizar el producto:', error);
});
};



watch(siteDropValue, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        // console.log('siteValue changed from', oldValue, 'to', newValue);
        getProducts(ruta.params.sesion); // Assuming ruta.params.sesion is the correct parameter
      }
    });



watch(productoEnviado, (newValue, oldValue) => {
    if (newValue !== oldValue) {
    // console.log('siteValue changed from', oldValue, 'to', newValue);
    getProducts(ruta.params.sesion); // Assuming ruta.params.sesion is the correct parameter
    }
});



onMounted(async () => {
    getProducts(ruta.params.sesion);
});

// Opcional: Observar cambios en el parámetro de la ruta
watch(() => ruta.params.sesion, (newMenuName) => {
    getProducts(newMenuName);
});


const eliminarProducto = async () => {
    if (!productoAEliminar.value || !productoAEliminar.value.product_id) {
        console.error('No se ha seleccionado ningún producto para eliminar');
        return;
    }

    try {
        const response = await fetch(`${URI}/products/${productoAEliminar.value.product_id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el producto: ${response.status}`);
        }

        // Manejo post-eliminación, por ejemplo, actualizar la lista de productos
        await getProducts(ruta.params.sesion);
        showEliminarProducto.value = false; // Cerrar el diálogo de confirmación
        console.log(`Producto eliminado: ${productoAEliminar.value.name}`);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
};


</script>

<style scoped>
.boton-menu {
    margin: 0;
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 0 20px;
}

.menu-button {
    background-color: transparent;
    padding: 1rem;
    margin: 0 1rem;
    border: none;
    font-size: 20px;
    /* transition: all  0.3s; */
    /* font-weight: bold; */
}

.menu-button:hover {
    /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); */
    /* transform: scale(1.1); */
    /* border-bottom:  2px red; */
    /* color: var(--primary-color); */
    /* padding:; */
    cursor: pointer;


}
*:focus{
    outline: none;
}

::-webkit-scrollbar {
  width: 12px;
  display: none;


   /* Ancho de la barra de desplazamiento */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Estilo del pulgar de la barra de desplazamiento */
/* WebKit (Chrome, Safari) */
::-webkit-scrollbar-thumb {

  background-color: white; /* Color del pulgar de la barra de desplazamiento */
  border-radius: 6px; /* Radio de esquinas del pulgar */
  transform: translateY(40px);
  /* padding: 50px; */
  /* display: none; */
}

.selected {
    /* color: var(--primary-color); */
    box-shadow: 0 0.5rem var(--primary-color);
    /* padding: 1rem; */
    /* font-weight: bold; */


}

.col-12 {

}





.boton-menu {
    margin: 0;
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 0 20px;
}

.menu-button {
    background-color: transparent;
    padding: 1rem;
    margin: 0 1rem;
    border: none;
    font-size: 20px;
    /* transition: all  0.3s; */
    /* font-weight: bold; */
}

.menu-button:hover {
    /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); */
    /* transform: scale(1.1); */
    /* border-bottom:  2px red; */
    /* color: var(--primary-color); */
    /* padding:; */
    cursor: pointer;


}
*:focus{
    outline: none;
}

::-webkit-scrollbar {
  width: 12px;
  display: none;


   /* Ancho de la barra de desplazamiento */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Estilo del pulgar de la barra de desplazamiento */
/* WebKit (Chrome, Safari) */
::-webkit-scrollbar-thumb {

  background-color: white; /* Color del pulgar de la barra de desplazamiento */
  border-radius: 6px; /* Radio de esquinas del pulgar */
  transform: translateY(40px);
  /* padding: 50px; */
  /* display: none; */
}

.selected {
    /* color: var(--primary-color); */
    box-shadow: 0 0.5rem var(--primary-color);
    /* padding: 1rem; */
    /* font-weight: bold; */


}

.info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-attachment: fixed; */
    /* position: absolute; */

    
    /* gap: 20px; */
 
    /* padding: 20px; */
}




.nombre-producto,.descripcion-producto{
    text-transform: lowercase;
}

.nombre-producto,.descripcion-producto::first-letter{
    text-transform: uppercase;
}

.descripcion-producto{
overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines you want to display */
  -webkit-box-orient: vertical;
  max-height: 4.5em; /* Adjust based on line-height and number of lines */
  line-height: 1.5em;
}

.add-cart-btn{
    /* transition: all  0.2s ease; */
    border-radius: 50%;
    border: none;
    /* height: 3rem; */
    /* width: 3rem; */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */

    /* padding: 1rem 1rem; */
    font-size: 20px;
    background-color: rgba(251, 0, 0, 0);
    /* border-radius: 10px; */
    color: #ff0000;
}

.add-cart-btn .icono{

    color: #fff;
}




*:focus{
    outline: none;
}

.icono{
    /* transition: all  0.2s ease; */
    color: var(--primary-color);
    /* transform: translateX(-15px); */
    font-weight: bold;
}
.cont {
    /* border: 1px solid gray; */
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    /* margin: 20px; */
    /* height: max-content; */
    /* width: 100%; */
    /* padding: 5%; */
    /* min-height: 100%; */
    /* max-height: 100%; */
    /* padding-bottom: 6rem;     */
    position: relative;
    margin: 0;


    /* margin: 0px; */
    /* width: 90%; */
    /* width: 100%; display: flex; */
    /* margin: auto; */

    /* height: 100%; */
    /* max-height: ; */
    /* background-color: red; */
    /* margin:1rem; */
}
/* .cont:hover .imagen{
    filter: brightness(1);
    transform: scale(1.1) rotate(3deg); */
    /* filter: brightness(1.1) drop-shadow(2px 2px 10px rgb(255, 123, 0)); */
    /* filter: brightness(1.1) drop-shadow(2px 2px 10px rgb(0, 0, 0)); */


.cont:hover .add-cart-btn{
    
    /* transform: translateY(-10px); */
}
.imagen:hover {
    filter: brightness(1.1);
    /* box-shadow: 0px 0px 30px var(--primary-color); */
    background-color: #00000035;
}
.imagen{
    width: 100%;
    object-fit: contain;
    height: 200px;
    transition: all ease .3s ;;
 
    /* background-image: url('https://i.ytimg.com/vi/yvIhfmAfsck/maxresdefault.jpg'); */
    /* height: 100%; */
    /* background-color: red; */
    /* filter: brightness(1.1) drop-shadow(2px 2px 10px rgb(255, 123, 0)); */
}

.imagen-cont{
    /* width: 100%; */
    overflow: hidden;
    border-radius:0.5rem;
    /* height: max-content; */
    /* background-color: green; */

}

button{
    cursor: pointer;
}

.col-12 {

}
</style>