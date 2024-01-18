<template>
    <Dialog v-model:visible="showEditarProducto" :style="{ width: '500px', height: 'max-content' }" :header="`Editar ${productoAEditar.name}`"
        :modal="true" class="p-fluid p-2 m-3" style="   ; background-color: white;border-radius:1rem;overflow:hidden">


        <!-- {{ grupoSalsasdropValue }} -->

        <!-- <h5>Foto del Producto</h5> -->


        {{ productoAEditar }}

<div v-if="urlFoto">
    <!-- <h5>Previsualización de la Foto</h5> -->
    <img :src="urlFoto" alt="Previsualización del Producto" style="max-width: 100%; height: auto;" />
</div>

<Input type="file" @change="cargarFoto" accept="image/*" />
<Button text style="width: auto;" class="p-0" label="Reset image" size="small" @click="urlFoto =  `${URI}/read-product-image/300/${productoAEditar.name}` "></Button>


        <h5>Nombre</h5>
        <span class="p-input-icon-left mb-4">
            <i class="pi pi-pencil" />
            <InputText v-model="productoAEditar.name" type="text" />
        </span>

        <h5>Description</h5>
        <Textarea v-model="productoAEditar.description" :autoResize="true" rows="3" cols="30" />

        <h5>Precio</h5>
        <span class="p-input-icon-left">
            <!-- <i class="pi pi-pencil mr-7" /> -->
            <InputNumber class="" v-model="productoAEditar.price" type="number" placeholder="Precio" />
        </span>

        <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="checkedValuesSalsas" /> 
            <span class="ml-5">Conjunto de salsas</span></h5>
        <span v-if="checkedValuesSalsas" class="p-input-icon-left">

                <Dropdown style="outline: none; " class="p-0  " primary v-model="grupoSalsasdropValue" :options="grupoSalsasdropValues"
                    optionLabel='name' />
        </span>

        <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="checkedValuesAdiciones" /> 
            <span class="ml-5">Conjunto de adiciones</span></h5>
        <span class="p-input-icon-left">
            <Dropdown v-if="checkedValuesAdiciones" style="outline: none; " class="p-0  " primary v-model="grupoAdicionesDropValue" :options="grupoAdicionesDropValues"
                    optionLabel='name' />
        </span>

        <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="checkedValuesAcompanantes" /> 
            <span class="ml-5">Conjunto de acompanantes</span></h5>
        <span class="p-input-icon-left">
            <Dropdown v-if=" checkedValuesAcompanantes" style="outline: none; " class="p-0  " primary v-model="GrupoAcompananterDropvalue" :options="grupoAcompanantesDropValues"
                    optionLabel='name'  />
        </span>

        <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="checkedValuesToppinns" /> 
            <span class="ml-5">Conjunto de toppings</span></h5>
        <span class="p-input-icon-left">
            <Dropdown v-if="checkedValuesToppinns" style="outline: none; " class="p-0  " primary v-model="GrupoToppingsDropValue" :options="grupoToppingsDropValues"
                    optionLabel='name'  />
        </span>


        <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="checkedValuesCambios" /> 
            <span class="ml-5">Conjunto de cambios</span></h5>
        <span class="p-input-icon-left">
            <Dropdown v-if="checkedValuesCambios" style="outline: none; " class="p-0  " primary v-model="grupoCambiosDropValue" :options="grupoCambiosDropValues"
                    optionLabel='name'  />
        </span>


        <h5 style="display: flex; align-items: center;"> 
            <span class="">Estado</span></h5>
        <span class="p-input-icon-left">
            <Dropdown style="outline: none; " class="p-0  " primary v-model="productoAEditar.state" :options="estados"
                     />
        </span>



        <h5 style="display: flex; align-items: center;">  
            <span class="ml-0 mt-6" style="text-transform: capitalize; ">En que sedes quiere modificar  {{ productoAEditar.name }}</span></h5>
        
        <div class="mt-6">            
            <h5 style="display: flex; align-items: center;"> <InputSwitch class="p-0 m-0" v-model="todasLasSedes" /> 
            <span class="ml-5">Todas</span></h5>

            <div v-for="sede in siteDropValues" :key="sede.site_id">
    <h5 style="display: flex; align-items: center;">
        <InputSwitch 
            class="p-0 m-0" 
            v-model="sedesSeleccionadas[sede.site_id]" 
            :disabled="!estadoSedeProducto[sede.site_id]" /> 
        <span class="ml-5">{{ sede.site_name }}</span>
    </h5>
</div>
        </div>
         



             
               
        <!-- <span class="p-input-icon-left">
                            <i class="pi pi-user" />
                            <InputText type="text" placeholder="Username" />
                        </span> -->


                        <Button @click="enviarProducto" class="m-auto my-4 text-center"> <span class="text-center col-12 p-0">Guardar</span></Button>







    </Dialog>

    <toast></toast>
</template>



<script setup>
import { onMounted, ref,computed } from 'vue';
import { useToast } from 'primevue/usetoast';
import { productoAEditar } from '../../service/valoresReactivosCompartidos';
import { 
    showAgregarProducto, 
    categoryValue, 
    siteDropValues,
    grupoAdicionesDropValue, 
    grupoCambiosDropValue, 
    grupoSalsasdropValue, 
    GrupoAcompananterDropvalue, 
    GrupoToppingsDropValue } from '@/service/valoresReactivosCompartidos.js'
import { URI } from '../../service/conection';
import { checkedAdiciones, checkedSalsas } from '../../service/state';
import { useRoute } from 'vue-router';
import { getProductsByCategory } from '../../service/productServices';

import { watch } from 'vue';
import { productoEnviado, showEditarProducto } from '../../service/valoresReactivosCompartidos';
import { fotos } from '../../service/menu/fotos';


const estadoSedeProducto = ref({});


watch(productoAEditar, async (nuevoProducto) => {
    // Restablecer estado de las sedes
    Object.keys(estadoSedeProducto.value).forEach(key => {
        estadoSedeProducto.value[key] = false;
    });

    // Suponiendo que obtienes la lista actualizada de sedes donde está disponible el producto
    const sedesActualizadas = await getSitesByProductName(productoAEditar.value.name);
    sedesActualizadas.forEach(sede => {
        estadoSedeProducto.value[sede.site_id] = true;
    });
});

const urlFoto = ref(null);
const file = ref(null);

// Función para cargar y previsualizar la foto
const cargarFoto = (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
        urlFoto.value = URL.createObjectURL(archivo);
        file.value = archivo
    }
};



// const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         selectedFile.value = file;
//         imageUrl.value = URL.createObjectURL(file);
//     }
// };







const toast = useToast();
const route = useRoute();
const category_id = computed(() => route.query.category);
const sedesSeleccionadas = ref([]);
const todasLasSedes = ref(false);


watch(todasLasSedes, (nuevoValor) => {
  siteDropValues.value.forEach(sede => {
    sedesSeleccionadas.value[sede.site_id] = nuevoValor;
  });
});





function actualizarSeleccionSede(site_id) {
  if (sedesSeleccionadas.value.includes(site_id)) {
    sedesSeleccionadas.value = sedesSeleccionadas.value.filter(id => id !== site_id);
  } else {
    sedesSeleccionadas.value.push(site_id);
  }
}



console.log(category_id.value)



const nombre = ref("producto sin nombre")
const description = ref("producto sin descripcion")
const precio = ref(0)
const estado = ref('inactive')
const estados = ref(['active', 'inactive'])



const grupoSalsasdropValues = ref([])
const grupoAdicionesDropValues = ref([])
const grupoCambiosDropValues = ref([])
const grupoAcompanantesDropValues = ref([])
const grupoToppingsDropValues = ref([])


const checkedValuesSalsas = ref()
const checkedValuesAdiciones = ref()
const checkedValuesToppinns = ref()
const checkedValuesCambios = ref()
const checkedValuesAcompanantes = ref()







const enviarProducto = async () => {
    // const uploadUrl = `${URI}/upload-product-image/${productoAEditar.value.product_id}`;
    await uploadImage(productoAEditar.value.name);

    for (const [site_id, isSelected] of Object.entries(sedesSeleccionadas.value)) {
        if (isSelected) {
            const productoActualizado = {
                "product_id": productoAEditar.value.product_id, // Asegúrate de que este es el ID correcto del producto
                "name": productoAEditar.value.name,
                "price": productoAEditar.value.price,
                "description": productoAEditar.value.description,
                "category_id": category_id.value,
                "porcion": "1",
                "state": productoAEditar.value.state,
                // Asegúrate de que estos campos se asignan correctamente
                "grupo_salsa_id": checkedValuesSalsas.value ? grupoSalsasdropValue.value.grupo_salsa_id : null,
                "grupo_topping_id": checkedValuesToppinns.value ? GrupoToppingsDropValue.value.grupo_topping_id : null,
                "grupo_acompanante_id": checkedValuesAcompanantes.value ? GrupoAcompananterDropvalue.value.grupo_acompanante_id : null,
                "grupo_cambio_id": checkedValuesCambios.value ? grupoCambiosDropValue.value.grupo_cambio_id : null,
                "grupo_adicional_id": checkedValuesAdiciones.value ? grupoAdicionesDropValue.value.grupo_id : null,
                "site_id": site_id
            };

            try {
                const response = await fetch(`${URI}/products/${productoActualizado.product_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productoActualizado)
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                toast.add({ severity: 'success', summary: `Producto actualizado en la sede ${site_id}`, detail: 'Actualización completada', life: 3000 });
            } catch (error) {
                console.error('Error al actualizar el producto:', error);
            }
        }
    }

    showEditarProducto.value = false;
    location.reload()
    
};

watch(productoAEditar, async (nuevoProducto) => {
    // Reiniciar todas las selecciones a false
    Object.keys(sedesSeleccionadas.value).forEach(site_id => {
        sedesSeleccionadas.value[site_id] = false;
    });

    // Cargar y establecer las sedes del nuevo producto
    if (nuevoProducto && nuevoProducto.name) {
        try {
            const sites = await getSitesByProductName(productoAEditar.value.name);
            sites.forEach(site => {
                sedesSeleccionadas.value[site.site_id] = true;
            });
        } catch (error) {
            console.error('Error al obtener sedes para el producto:', error);
        }
    }
}, { immediate: true });

const getSitesByProductName = async (productName) => {
    try {
        const response = await fetch(`${URI}/products/name/${productName}/sites`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const sites = await response.json();
        return sites;
    } catch (error) {
        console.error('Error fetching sites:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Error fetching sites data', life: 3000 });
    }
};


const uploadImage = async (productId) => {
    const formData = new FormData();
    formData.append('file', file.value);
    
    try {
        const response = await fetch(`${URI}/upload-product-image/${productId}`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error al subir la imagen');
        }

        urlFoto.value = `${URI}/read-product-image/600/${productoAEditar.value.name}`
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        // Manejar error
    }
};

































const getGrupoSalsas = async () => {
    try {
        let response = await fetch(`${URI}/grupo-salsas`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

const getGrupoCambios = async () => {
    try {
        let response = await fetch(`${URI}/grupo-cambios`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

const getGrupoAdiciones = async () => {
    try {
        let response = await fetch(`${URI}/grupo-adicionales`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

const getGrupoGrupoToppings = async () => {
    try {
        let response = await fetch(`${URI}/grupo-toppings`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

const getGrupoGrupoAcompanantes = async () => {
    try {
        let response = await fetch(`${URI}/grupo-acompanantes`);
        let data = await response.json();
        // categories.value = data
        return data
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}


watch(productoAEditar, async() => {


    urlFoto.value = `${URI}/read-product-image/600/${productoAEditar.value.name}`
    productoAEditar.value.grupo_salsa_id? checkedValuesSalsas.value = true : checkedValuesSalsas.value = false
    productoAEditar.value.grupo_adicional_id? checkedValuesAdiciones.value = true : checkedValuesAdiciones.value = false
    productoAEditar.value.grupo_acompanante_id? checkedValuesAcompanantes.value = true : checkedValuesAcompanantes.value = false
    productoAEditar.value.grupo_topping_id? checkedValuesToppinns.value = true : checkedValuesToppinns.value = false
    productoAEditar.value.grupo_cambio_id? checkedValuesCambios.value = true : checkedValuesCambios.value = false


    getGrupoSalsas().then(data => { grupoSalsasdropValues.value = data })
    getGrupoAdiciones().then(data => { grupoAdicionesDropValues.value = data })
    getGrupoCambios().then(data => { grupoCambiosDropValues.value = data })
    getGrupoGrupoAcompanantes().then(data => { grupoAcompanantesDropValues.value = data })
    getGrupoGrupoToppings().then(data => { grupoToppingsDropValues.value = data })

    const gruposSalsas = await getGrupoSalsas();
    grupoSalsasdropValues.value = gruposSalsas;

    const gruposCambios = await getGrupoCambios();
    grupoCambiosDropValues.value = gruposCambios;

    const gruposAdiciones = await getGrupoAdiciones();
    grupoAdicionesDropValues.value = gruposAdiciones;

    const gruposToppings = await getGrupoGrupoToppings();
    grupoToppingsDropValues.value = gruposToppings;

    const gruposAcompanantes = await getGrupoGrupoAcompanantes();
    grupoAcompanantesDropValues.value = gruposAcompanantes;

    // Preseleccionar valores basados en el producto a editar

    grupoSalsasdropValue.value = gruposSalsas.find(grupo => grupo.grupo_salsa_id === productoAEditar.value.grupo_salsa_id);
    grupoCambiosDropValue.value = gruposCambios.find(grupo => grupo.grupo_cambio_id === productoAEditar.value.grupo_cambio_id);
    grupoAdicionesDropValue.value = gruposAdiciones.find(grupo => grupo.grupo_id === productoAEditar.value.grupo_adicional_id);
    GrupoToppingsDropValue.value = gruposToppings.find(grupo => grupo.grupo_topping_id === productoAEditar.value.grupo_topping_id);
    GrupoAcompananterDropvalue.value = gruposAcompanantes.find(grupo => grupo.grupo_acompanante_id === productoAEditar.value.grupo_acompanante_id);





})



onMounted(async () => {

    urlFoto.value = `${URI}/read-product-image/600/${productoAEditar.value.name}`
    productoAEditar.value.grupo_salsa_id? checkedValuesSalsas.value = true : checkedValuesSalsas.value = false
    productoAEditar.value.grupo_adicional_id? checkedValuesAdiciones.value = true : checkedValuesAdiciones.value = false
    productoAEditar.value.grupo_acompanante_id? checkedValuesAcompanantes.value = true : checkedValuesAcompanantes.value = false
    productoAEditar.value.grupo_topping_id? checkedValuesToppinns.value = true : checkedValuesToppinns.value = false
    productoAEditar.value.grupo_cambio_id? checkedValuesCambios.value = true : checkedValuesCambios.value = false

    
    getGrupoSalsas().then(data => { grupoSalsasdropValues.value = data })
    getGrupoAdiciones().then(data => { grupoAdicionesDropValues.value = data })
    getGrupoCambios().then(data => { grupoCambiosDropValues.value = data })
    getGrupoGrupoAcompanantes().then(data => { grupoAcompanantesDropValues.value = data })
    getGrupoGrupoToppings().then(data => { grupoToppingsDropValues.value = data })

    


    siteDropValues?.value?.forEach(sede => {
        sedesSeleccionadas.value[sede.site_id] = false;
    });

})





</script>


<style scoped>

*{
    text-transform: lowercase;
}


*::first-letter{text-transform: uppercase;}
</style>