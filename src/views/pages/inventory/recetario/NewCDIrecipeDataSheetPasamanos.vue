<template>

    <div style="max-width: 500px;" class="m-auto px-3 my-8">



        <Dialog style="width: 40rem;" header="Actualizar receta" class="mx-2" v-model:visible="showNewRecipe" modal>




            <div v-for="field in newIngredientsFields">

                <h6 class="m-0 my-3">{{ field.name }} </h6>
                <inputText v-model="newIRecipe[field.fiel]" v-if="field.type == 'text'" style="width: 100%;">
                </inputText>

                <Textarea v-model="newIRecipe[field.fiel]" v-if="field.type == 'textArea'" rows="6"
                    style="width: 100%;min-width: 100%;resize: none"></Textarea>


                <Calendar timeOnly v-model="newIRecipe[field.fiel]" v-if="field.type == 'time'" rows="6"
                    style="width: 100%;">
                </Calendar>


                <InputNumber v-model="newIRecipe[field.fiel]" style="width: 100%;" v-if="field.type == 'money'"
                    locale="es-ES" max-fraction-digits="3" prefix="$"></InputNumber>


                <InputNumber locale="es-ES" max-fraction-digits="3" v-model="newIRecipe[field.fiel]"
                    style="width: 100%;" v-if="field.type == 'number'">
                </InputNumber>

                <InputNumber locale="es-ES" max-fraction-digits="3" v-model="newIRecipe[field.fiel]"
                    style="width: 100%;" v-if="field.type == 'percent'" suffix="%"></InputNumber>

            </div>

            <template #footer>


                <Button @click="updateRecipe(newIRecipe)" severity="danger" class="mt-4"
                    label="Modificar Receta"></Button>


            </template>


        </Dialog>


        <Dialog class="mx-2" header="Eliminar ingrediente" v-model:visible="showDeleIngredientDialog" modal>

            <h6>seguro que desea eliminar el Ingrediente <b>{{ ingredientToDelete?.ingredient_name }}</b> ?</h6>


            <template #footer>
                <div style="display:  flex;justify-content: end;">
                    <Button size="small" label="cancelar" @click="showDeleIngredientDialog = false"
                        severity="help"></Button>
                    <Button size="small" @click="DeleteIngredient()" label="Eliminar ingrediente" severity="danger"
                        text></Button>
                </div>
            </template>
        </Dialog>



        <Dialog style="width: 30rem;" header="Nuevo Ingrediente" class="mx-2" v-model:visible="showNewIngredient" modal>


            <h6> Ingrediente</h6>
            <Dropdown v-model="newIngredient.ingredient" :options="ingredients" filter optionLabel="ingredient_name"
                style="width: 100%;"></Dropdown>
            <h6> Unidad de medida</ h6>
                <Dropdown v-model="newIngredient.unitMeasure" :options="unitMeasures" optionLabel="name"
                    style="width: 100%;">
                </Dropdown>
                <h6> Cantidad</h6>
                <InputNumber v-model="newIngredient.quantity" locale="es-ES" max-fraction-digits="3"
                    style="width: 100%;">
                </InputNumber>
                <h6> Cantidad antes de merma</h6>
                <InputNumber v-model="newIngredient.quantity_before_shrinkage" locale="es-ES" max-fraction-digits="3"
                    style="width: 100%;"></InputNumber>

                <template #footer>
                    <div style="display:  flex;justify-content: end;">
                        <Button class="m-0" size="small" label="Agregar" @click="addIngredintToRecipe"
                            severity="help"></Button>

                    </div>
                </template>

        </Dialog>



        <Dialog style="width: 30rem;" header="Editar Ingrediente" class="mx-2" v-model:visible="showUpdateIngredient"
            modal>


            <h6> Ingrediente</h6>
            <Dropdown v-model="newIngredient.ingredient" :options="ingredients" optionLabel="ingredient_name"
                style="width: 100%;"></Dropdown>
            <h6> Unidad de medida</h6>
            <Dropdown v-model="newIngredient.unitMeasure" :options="unitMeasures" optionLabel="name"
                style="width: 100%;">
            </Dropdown>
            <h6> Cantidad</h6>
            <InputNumber v-model="newIngredient.quantity" locale="es-ES" max-fraction-digits="3" style="width: 100%;">
            </InputNumber>
            <h6> Cantidad antes de merma</h6>
            <InputNumber v-model="newIngredient.quantity_before_shrinkage" locale="es-ES" max-fraction-digits="3"
                style="width: 100%;"></InputNumber>

            <template #footer>
                <div style="display:  flex;justify-content: end;">
                    <Button class="m-0" size="small" label="Guardar" @click="updateIngredient" severity="help"></Button>

                </div>
            </template>

        </Dialog>




        <h2 class="text-center" style="margin-top: 3rem;">
            <i class="fa-solid fa-bowl-rice mr-2">

            </i>
            <b style="text-transform: uppercase;">
                {{ newIRecipe.name || 'Nuevo pasamanos' }}
            </b>
        </h2>

   




        <div class="grid mx-0 md:mx-0" style="margin-top: 3rem;">



            <!-- <div s class="col-12 md:col-6 py-0 px-0 md:pr-4 shadow-2"
                style="border-radius: .5rem;background-color: white; display: flex; align-items: center;justify-content: center;">
                <img style="height:18rem;width: 100%;object-fit:contain;"
                    :src="`${URI}/read-product-image/600/${route.params.recipe_name}`" alt="">
            </div> -->


            <div class="col-12 p-0 md:p-4">

                <h5 style="" class=" py-3 m-0"> IngredienteAsociado</h5>

<Dropdown v-model="newIngredient" placeholder="Ingrediente pasamanos" :options="ingredients" filter optionLabel="ingredient_name"
style="width: 100%;"></Dropdown>


                <h5 style="" class=" py-3 m-0"> Iva</h5>

                <InputNumber locale="es-ES" max-fraction-digits="3" v-model="newIRecipe.iva" suffix="%" placeholder="Iva cuando se usa como ingrediente" style="width: 100%;">
                </InputNumber>

                <h5 style="" class=" py-3 m-0"> Unidad de medida</h5>

                <Dropdown :options="unitMeasures" optionLabel="name" v-model="newIRecipe.unitMeasure" placeholder="Un. med. cuando se usa como ingrediente" style="width: 100%;">
                </Dropdown>

                <h5 style="" class=" py-3 m-0"> Presentacion convertir a gramos</h5>

           

                <InputNumber v-model="newIRecipe.convert_value" placeholder="Para Kilogramos en 1000" style="width: 100%;"
                    locale="es-ES" max-fraction-digits="3" ></InputNumber>






                <div class="col-12  my-4 px-0" style="display: flex;justify-content: end;">
            <Button v-if="!recipe.recipe_data_sheet.init" size="small" severity="info"
                @click="createCdiRecipeDataShee" label="Crear Receta"></Button>
        </div>
            </div>



            <div v-if="false" class="col-12 md:col-6 py-0 px-0 md:pl-4 " style="">





                <div class="col-12 p-0">



                    <div class="col-12 py-4 md:p-0 p-0">
                        <h4 style="background-color: black; color: white;" class=" p-2"><b> Informacion pricipal</b>
                        </h4>
                    </div>





                </div>

                <div :class="column.separe ? 'mt-4 ' : ''" v-for="column in data_sheet_columns"
                    class="justify-content-start"
                    style="display: flex; background-color: white   ; gap: 1rem; border: 1px solid black; align-items: center; justify-content: space-between">


                    <h6 class="m-0 p-2"
                        style="background-color: var(--primary-color); width: 100%;color: white;font-weight: bold;">
                        {{ column.label }}
                    </h6>

                    <h6 v-if="column.type !== 'money' && column.type !== 'percent'" class="m-0 text-right p-2"
                        style="width: 100%;">
                        {{ recipe.recipe_data_sheet[column.field] }}
                    </h6>

                    <h6 v-else-if="column.type === 'money' && column.calc" class="m-0 text-right p-2"
                        style="width: 100%;">
                        {{ formatoPesosColombianos(recipe.recipe_data_sheet[column.calc[0]] -
                            (recipe.recipe_data_sheet[column.calc[0]] * recipe.recipe_data_sheet[column.calc[1]]) / 100) }}
                    </h6>

                    <h6 v-else-if="column.type === 'money'" class="m-0 text-right p-2" style="width: 100%;">
                        {{ formatoPesosColombianos(recipe.recipe_data_sheet[column.field]) }}
                    </h6>

                    <h6 v-else-if="column.type === 'percent'" class="m-0 text-right p-2" style="width: 100%;">
                        {{ recipe.recipe_data_sheet[column.field] }}%
                    </h6>



                </div>
            </div>


        </div>


 



        <div style="margin-top: 3rem;" v-if="false">
            <DataTable direction="vertical" :paginator="true" :rows="15" style="width: 100%;"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} recetas"
                :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows
                class="col-12 m-auto p-0" :value="recipe.ingredients" tableStyle="min-width: 50rem;" :filters="filters">
                <template #header>
                    <div class="grid p-3"
                        style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                        <h4 class="px-2"> <i class="fa fa-carrot"></i> <b>Ingredientes para su preparacion</b></h4>

                        <InputText class="" v-model="filters['global'].value" placeholder="Buscar ingrediente ..." />




                    </div>

                    <div
                        style="display: flex; width: 100%; justify-content: end;flex-wrap: wrap;gap: 1rem;align-items: center;">
                        <!-- <MultiSelect v-model="visibleColumns" :options="columns" optionLabel="header" style="width: min-content; max-width: 300px;" placeholder="Columnas visibles"></MultiSelect> -->
                        <Button size="small" severity="help" @click="openNewIngredient"
                            label="Nuevo ingredinte"></Button>
                    </div>




                </template>

                <column v-for="column in columns" :header="column.header" :style="`min-width:${column.width}rem`"
                    :field="column.value" class="py-2">
                    <template #body="data">





                        <h6 v-if="column.type == 'money'" style="text-transform: lowercase;"
                            :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">
                            {{ formatoPesosColombianos(data.data[column.value]) || '-----------' }}</h6>



                        <h6 v-else-if="column.type == 'calc_percent'" style="text-transform: lowercase;"
                            :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">
                            {{ `${((data.data[column.value] /
                                recipe.recipe_data_sheet.recipe_total) * 100)?.toFixed(2)?.replace('.', ',')}%` ||
                                '-----------' }} </h6>


                        <h6 v-else-if="column.type == 'number'" style="text-transform: lowercase;"
                            :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">
                            {{ formatoDecimal(data.data[column.value]) || '-----------' }}</h6>






                        <h6 v-else style="text-transform: lowercase;"
                            :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{
                                data.data[column.value] || '-----------' }}</h6>
                    </template>
                </column>


                <column header="Accion" style="width: min-content;" field="name" class="py-1" frozen
                    alignFrozen="right">


                    <template #body="data">

                        <div style="display: flex; justify-content: end;gap: .5rem;">

                            <Button text @click="openEditIngredient(data.data)" class="m-0 p-0" severity="warning"
                                style="height: 2rem; width: 2rem;" icon="pi pi-pencil"></Button>
                            <Button text @click="openToDeletIngredient(data.data)" class="m-0 p-0" severity="danger"
                                style="height: 2rem; width: 2rem;" icon="pi pi-trash"></Button>



                        </div>


                    </template>

                </column>




            </Datatable>


            <div style="border: 1px solid ;border-radius: .3rem;" class="p-3 mt-4">

                <h4>
                    <b>
                        Elaboracion
                    </b>

                </h4>

                <h6>
                    {{ recipe.recipe_data_sheet.elaboration }}
                </h6>
            </div>



            <div style="border: 1px solid ;border-radius: .3rem;" class="p-3 my-4">
                <h4>
                    <b>
                        Presentacion
                    </b>

                </h4>

                <h6>
                    {{ recipe.recipe_data_sheet.presentation }}
                </h6>

            </div>


            <div style="border: 1px solid ;border-radius: .3rem;" class="p-3">
                <h4>
                    <b>
                        Equipo de preparacion
                    </b>

                </h4>

                <h6>
                    {{ recipe.recipe_data_sheet.preparation_equipment }}
                </h6>

            </div>
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';
import { fetchService } from '../../../../service/utils/fetchService';
import { URI } from '../../../../service/conection';
import { watch } from 'vue';
import { computed } from 'vue';
import { formatoPesosColombianos, formatoDecimal } from '@/service/formatoPesos.js'
import router from '../../../../router';
import { useRoute } from 'vue-router';
import InputNumber from 'primevue/inputnumber';
import Ingredientes from './ingredientes.vue';



const showUpdateIngredient = ref(false)

const newIngredient = ref({})





const createCdiRecipeDataShee = async () => {
    const data = { ...newIRecipe.value }

    if (!newIngredient.value || data.iva === null   || !data.unitMeasure?.id || !data.convert_value){
        alert (
            'por favor llene todos los campos'
        ) 
        return
    }
    const newData = {
    "cdi_recipe_data_sheet": {
        "name": newIngredient.value.ingredient_name,
       
        "iva": data.iva,
        "pasamanos": true
    },
    "cdi_recipe_data_sheet_on_ingredient": {
        "unit_measure_id": data.unitMeasure.id,
        "convert_value": data.convert_value ,
    },



    "cdi_recipe_data_Ingredient":{
        ingredient_id:newIngredient.value.id,
        unit_measure_id: data.unitMeasure.id,
        quantity:1,
        cdi_recipe_data_sheet_id:0
    } 
  

    
}

console.log(newData)

    const recipe_id = await fetchService.post(`${URI}/create-cdi-recipe-data-sheet-pasamanos/`, newData, 'Creando receta')
 
    router.push({
        name:'cdi_recipe_data_sheet_pasamanos',
        params:{
            product_id : recipe_id,
            recipe_name : newIngredient.value.ingredient_name
        }
    })
    showNewIngredient.value = false

}


// const createCdiRecipeDataSheetAll = async () => {
//     const data = { ...newIRecipe.value }




//     ingredients.value.forEach(async(p) => {


//         const newData = {
//         "cdi_recipe_data_sheet": {
//         "name": p.ingredient_name,
//         "ingredient_id":p.id,
//         "iva": 0,
//         "pasamanos": true
//     },
//     "cdi_recipe_data_sheet_on_ingredient": {
//         "unit_measure_id": p.purchasing_unit_measure_id,
//         "convert_value": p.net_gross_weight ,
//     },



//     "cdi_recipe_data_Ingredient":{
//         ingredient_id:p.id,
//         unit_measure_id: p.purchasing_unit_measure_id,
//         quantity:1,
//         cdi_recipe_data_sheet_id:0
//     } 
  

    
//     } 


//     const recipe_id = await fetchService.post(`${URI}/create-cdi-recipe-data-sheet-pasamanos/`, newData, 'Creando receta')




//     })



// }


const route = useRoute()
const showNewIngredient = ref(false)
const ingredientToDelete = ref({})
const showNewRecipe = ref(false)

const newIRecipe = ref({
    "name": null,
    "portion_size": 33,
    "portion_number": 0,
    "preparation_time": "00:00",
    "cooking_time": "00:00",
    "service_temperature": 0,
    "selling_price": 0,
    "taxes": 0,
    "presentation": "Informacion no proporcionada",
    "preparation_equipment": "Informacion no proporcionada",
    "elaboration": "Informacion no proporcionada"
})

const ingredients = ref([{}])
const unitMeasures = ref([])

const editing = ref(false)
const showDeleIngredientDialog = ref(false)

const data_sheet_columns = ref([





    {
        label: 'Costo total del bache',
        field: 'portion_size',
    },
    {
        label: 'Costo total por kilo',
        field: 'portion_number',
    },

    {
        label: 'Costo con MP, Mano Obra y CIF',
        field: 'preparation_time',
    },
    {
        label: 'Precio de venta kilo con 15%',
        field: 'cooking_time',
    },
    {
        label: 'Precio de venta kilo con 19% IVA',
        field: 'service_temperature',

    },



])


const openToDeletIngredient = (ingredient) => {
    showDeleIngredientDialog.value = true
    ingredientToDelete.value = ingredient
}


const openNewRecipe = () => {

    editing.value = false
    newIRecipe.value = {}
    showNewRecipe.value = true
}




const openNewIngredient = () => {

    newIRecipe.value = {}
    showNewIngredient.value = true
}

const DeleteIngredient = async () => {
    const id = ingredientToDelete.value.id
    await fetchService.delete(`${URI}/delete-recipe-data-ingredient/${id}`, 'Borrando ingrediente')
    showDeleIngredientDialog.value = false
    update()

}


const openEditIngredient = (ingredient) => {

    newIngredient.value = {}
    const newIngredientData = { ...ingredient }

    newIngredientData.ingredient = ingredients.value.find(i => i.ingredient_name = ingredient.ingredient_name)
    newIngredientData.unitMeasure = unitMeasures.value.find(i => i.name = ingredient.unit_measure)
    console.log(newIngredient.value)

    showUpdateIngredient.value = true
    newIngredient.value = { ...newIngredientData }


}


const openEditIRecipe = (recipe) => {


    // console.log(ingredient)

    newIRecipe.value = { ...recipe }
    editing.value = true
    showNewRecipe.value = true


}



const updateIngredient = async () => {

    const data = { ...newIngredient.value }
    const newData = {
        "ingredient_id": data.ingredient.id,
        "recipe_data_sheet_id": recipe.value.recipe_data_sheet.id,
        "unit_measure_id": data.unitMeasure.id,
        "quantity": data.quantity,
        "quantity_before_shrinkage": data.quantity_before_shrinkage
    }

    await fetchService.put(`${URI}/update-recipe-data-ingredient/${newIngredient.value.id}`, newData, 'modificando ingrediente')
    update()
    showUpdateIngredient.value = false



}

const columns = [

    {
        header: 'Nombre',
        value: 'ingredient_name',
        type: 'max-content',
        width: ''
    },

    {
        header: 'Unidad de medida',
        value: 'unit_measure',
        width: '10',
        type: 'max-content'
    },
    {
        header: 'Cantidad',
        value: 'quantity',
        width: 'number',
        type: 'number',
    },
    {
        header: 'Cantidad Antes de merma',
        value: 'quantity_before_shrinkage',
        type: 'max-content',
        type: 'number',
    },

    {
        header: 'Costo unitario',
        value: 'unit_cost',
        width: 'number',
        type: 'money'
    },
    {
        header: 'Porcentaje del costo',
        value: 'total_cost',
        width: 'number',
        type: 'calc_percent'
    },

    {
        header: 'Costo total',
        value: 'total_cost',
        width: 'number',
        type: 'money'
    },




]


const visibleColumns = ref([...columns])

const visibleColIds = computed(() => {
    return visibleColumns.value?.map(col => col.value)
})

const newIngredientsFields = ref([
    {
        name: 'Tamano de la porcion',
        fiel: 'portion_size',
        type: 'number'
    },



    {
        name: 'Numero de porciones',
        fiel: 'portion_number',
        type: 'number',

    },
    {
        name: 'Tiempo de preparacion',
        fiel: 'preparation_time',
        type: 'time'
    },

    {
        name: 'Tiempo de coccion',
        fiel: 'cooking_time',
        type: 'time'
    },

    {
        name: 'Temperatura de servicio',
        fiel: 'service_temperature',
        type: 'number'
    },


    // {
    //     name:'No Unidades por compra',
    //     fiel:'number_units_purchasing',
    //     type:'number'
    // },

    {
        name: 'Precio de venta',
        fiel: 'selling_price',
        type: 'money'
    },
    {
        name: 'Impuestos',
        fiel: 'taxes',
        type: 'percent'
    },

    {
        name: 'presentacion',
        fiel: 'presentation',
        type: 'textArea'
    },

    {
        name: 'Equipo de preparacion',
        fiel: 'preparation_equipment',
        type: 'textArea'
    },

    {
        name: 'Elaboracion',
        fiel: 'elaboration',
        type: 'textArea'
    },



])


watch(newIRecipe, async (newval, oldval) => {
    newIRecipe.value.purchasing_unit_measure_id = newval.purchasing_unit_measure?.id || null
}, { deep: true })




const updateRecipe = async (data) => {
    // Copiar los datos para no modificar el objeto original
    const dataSend = { ...data };

    // Función para formatear un objeto Date o cadena en formato HH:MM
    const formatTime = (time) => {
        if (typeof time === 'string') {
            // Si la cadena ya está en formato HH:MM:SS, recortar a HH:MM
            if (/^\d{2}:\d{2}:\d{2}$/.test(time)) {
                return time.slice(0, 5); // Retorna solo HH:MM
            }
            return time; // Si es otro formato de cadena, retornarla tal cual
        } else if (time instanceof Date && !isNaN(time.getTime())) {
            const hours = time.getHours().toString().padStart(2, '0');
            const minutes = time.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        } else {
            console.error('El tiempo proporcionado no es una fecha válida');
            return '';
        }
    };

    // Formatear preparation_time y cooking_time
    dataSend.preparation_time = formatTime(dataSend.preparation_time);
    dataSend.cooking_time = formatTime(dataSend.cooking_time);

    console.log(dataSend);

    await fetchService.put(`${URI}/update-recipe-data-sheet/${dataSend.id}`, dataSend, 'Modificando receta');
    showNewRecipe.value = false
    await update();
};

// const sendIngredient = async () => {
//     const data = newIRecipe.value

//     if (!data.name || !data.purchasing_unit_measure_id || !data.purchasing_price || !data.net_gross_weight) {
//         alert('Por favor llene todos los campos')
//         return
//     }

//     if (editing.value) {
//         await fetchService.
//     } else {
//         await fetchService.post(`${URI}/create-ingredient`, data, 'creando un nuevo ingrediente')

//     }
//     update()
//     showNewRecipe.value = false


// }

const recipe = ref({
    "recipe_data_sheet": [
        {
            init: true,
            "id": 13,
            "portion_size": 0,
            "portion_number": 0,
            "preparation_time": "00:00:00",
            "cooking_time": "00:00:00",
            "service_temperature": 0,
            "selling_price": 0,
            "taxes": 0,
            "presentation": "",
            "preparation_equipment": "",
            "elaboration": "",
            "product_id": 100,
            "exist": true,
            "created_at": "2024-08-02T21:54:57.980587+00:00"
        }
    ],
    "ingredients": []
})

const update = async () => {
    const product_id = 243
    // recipe.value = await fetchService.get(`${URI}/list-recipe-by-product-id/${product_id}`, 'cargando receta')
    ingredients.value = await fetchService.get(`${URI}/list-ingredients`, 'cargando ingredientes')
    unitMeasures.value = await fetchService.get(`${URI}/daily_inventory_unit_measures`,)
} 

onBeforeMount(async () => {
    await update()
})

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};

onBeforeMount(() => {
    initFilters()
})
</script>

<style>
h6::first-letter {
    text-transform: uppercase;
}
</style>
