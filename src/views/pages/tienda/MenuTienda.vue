<template>


<p  class="mb-2 text-4xl text-center px-4" style="font-weight: bold;">
    <i class="fa-solid fa-utensils"></i>
       Menú
    </p>


    <div class="col-12 m-auto  grid p-0  " style="max-width: 800px;" >

    <div style="display: flex;overflow-x: auto; align-items: center;" class="col-12 px-2 my-3 pb-4 md:p-0 ">
     
    <div  style="min-width: max-content;">
        <SPan class=" mr-4 " style="font-weight: bold;">  SEDE: </SPan>  <Dropdown  style="min-width: max-content;" class="col md:col-6 p-0   " v-model="siteDropValue" :options="siteDropValues" optionLabel="site_name"
placeholder="sede" />

    </div>
    


    <div class="" style="min-width: max-content;">
        <SPan class=" mx-4" style="font-weight: bold;">  CATEGORIA: </SPan>

    <Dropdown style="outline: none;max-width: min-content; " class=" col-6 p-0  " primary v-model="categoryValue" :options="categories"
                    placeholder="Productos" >


                <template #value="data">
                    <div> <i :class="PrimeIcons.STAR_FILL" class="mr-2"></i>{{ data.value?.category_name? data.value.category_name:{} }}</div> 
                

                </template>

                <template #option="data">
                        <div>
                            <span> <i :class="data.option.category_name == 'Nueva categoria'? PrimeIcons.PLUS_CIRCLE:  PrimeIcons.TRASH" class="mr-3"></i></span>{{ data.option.category_name }}
                        </div>
                    </template>



            </Dropdown>
    </div>




    </div>



     
    <div class="grid col-12 mt-3 m-0 p-0" style="max-width: 1000px;">

  


        <div v-for="menu in MenuOptions" class="col p-2  ">
            <RouterLink :to="`/tienda-menu/${menu.to}`">
                <Button style="height: 2.5rem;" :severity="menu.severity"  class="outlined col-12  text-center"
                     Secondary> <i :class="menu.icon" class="mr-2" ></i> <span style="width: 100%;" sclass="text-center"> {{ menu.name }}</span> </Button>
            </RouterLink>

        </div>
    </div>

    

    <div class="col-12 lg:col-9 mr-auto ml-auto m-0 p-0 mt-8 " v-for="i in [1,2,3,4,5,6]" style="width: 100%; " v-if="ruta == '/tienda-menu/'">

        <!-- {{ ruta }} -->
    <img style="width: 100%;" :src="`/images/carta/${i}.jpeg`" alt="">

    </div>

    




    </div>

    <div class="col-12 m-auto  p-0 m-0" style="max-width: 800px; "> <RouterView  /></div>
   
   
    <Dialog header="Confirmation" v-model:visible="showAgregarCategoria" :style="{ width: '350px' }" :modal="true">
        <h5>Nombre de la nueva categoria</h5>
        <span class="p-input-icon-left " style="width: 100%;">
            <i class="pi pi-pencil" />
            <InputText v-model="nameNewCategorie" class="w-100" style="width: 100%;"  type="text"  />
        </span>

        <Button @click="createCategory()" style="margin:auto ;" class="m-auto my-4 text-center"> <span class="text-center col-12 p-0">Agregar Categoria</span></Button>

    </Dialog>

   

</template>

<script setup>
import crud from '@/views/pages/Crud.vue'
import ListaProductos from './ListaProductos.vue';
import { onMounted, ref } from 'vue';
import { URI } from '../../../service/conection';
import { watch } from 'vue';
import router from '@/router/index.js';
import { pastelColors,siteDropValues } from '../../../service/valoresReactivosCompartidos';
// import { RouterView } from 'vue-router';
import dialogoEditarProducto from '../../../components/dialogos/dialogoEditarProducto.vue';

// import router from '@/router/index.js';

import { useRoute } from 'vue-router';

const route = useRoute()
import { categoryValue, siteDropValue } from '@/service/valoresReactivosCompartidos.js'
import { PrimeIcons } from 'primevue/api';

const showAgregarCategoria = ref(false)
const categories = ref([]);
const nameNewCategorie = ref()
const ruta = ref(route.path);
// const route = useRoute();



const getCategories = async () => {
    try {
        let response = await fetch(`${URI}/categories`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}








watch(() => route.path, (newpad) => {
    ruta.value = newpad

});






watch(categoryValue, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        console.log(oldValue, newValue);
        // Save the new value to localStorage
        localStorage.setItem('categoryValue', JSON.stringify(newValue));

        // Perform the router push based on the new value
        if (newValue.category_name != 'Nueva categoria') {
            router.push({
                path: `/tienda-menu/productos/${newValue.category_name}`,
                query: { category: newValue.category_id }
            });
        } else {
           showAgregarCategoria.value = true
        }
    }
});

watch(siteDropValue, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        console.log(oldValue, newValue);
        // Save the new value to localStorage
        localStorage.setItem('siteDropValue', JSON.stringify(newValue));

        // Additional actions based on the new siteDropValue
        // Perform actions similar to what you did with categoryValue, if necessary
    }
});

const createCategory = async () => {
    const url = `${URI}/categories`; // Replace with your actual API endpoint

    const categoryData = {
        category_name:nameNewCategorie.value

    }
    try {
        const response = await fetch(url, {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json' // Content type
            },
            body: JSON.stringify(categoryData) // Convert the category data to a JSON string
        });

        if (!response.ok) {
            showAgregarCategoria.value = false
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json(); // Convert response to JSON
        console.log('Success:', responseData);
        
        showAgregarCategoria.value = false
        prepararCategorias()
        router.push({
                path: `/tienda-menu/`,
            });
        
        // Perform actions after successful creation, like updating UI or redirecting
    } catch (error) {
        console.error('Error:', error);
        // Handle errors, like showing error messages to the user
    }
};


const MenuOptions = [


    {
        name: 'Adiciones',
        to: 'adicionales',
        severity:'success',
        icon:'fa-solid fa-bowl-rice'
    },
    {
        name: 'Salsas',
        to: 'salsas',
        severity:'warning',
        icon:"fa-solid fa-pepper-hot"

    },
    {
        name: 'Topping',
        to: 'toppings',
        severity:'danger',
        icon:"fa-solid fa-candy-cane"

    },
    {
        name: 'Cambios',
        to: 'cambios',
        severity:'info',
        icon:"fa-solid fa-dice"

    },
    {
        name: 'Acompanantes',
        to: 'acompanantes',
        severity:'help',
       

    }
]

const getSites = async () => {
    try {
        const response = await fetch(`${URI}/sites`)
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


const prepararCategorias = () => {

    getCategories().then(data => {
        categories.value = data
        categories.value.push(
            {
                category_name: 'Nueva categoria'
            }

        )
    })
    
}


onMounted(async () => {

    const initialCategoryValue = localStorage.getItem('categoryValue');
    if (initialCategoryValue) {
        categoryValue.value = JSON.parse(initialCategoryValue);
    }

    const initialSiteValue = localStorage.getItem('siteDropValue');
    if (initialSiteValue) {
        siteDropValue.value = JSON.parse(initialSiteValue);
    }

    getSites().then(data => siteDropValues.value = data)
    prepararCategorias()
    
})



</script>                                                                                                                                                                                                                                                                

<style scoped>
</style>