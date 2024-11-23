<template>

    <div style="max-width: 1280px;" class="m-auto px-3 my-8">



        <Dialog style="width: 40rem;" header="Actualizar receta" class="mx-2"
            v-model:visible="showNewRecipe" modal>




            <div v-for="field in newIngredientsFields">

                <h6 class="m-0 my-3">{{ field.name }} </h6>
                <inputText v-model="newIRecipe[field.fiel]" v-if="field.type == 'text'" style="width: 100%;">
                </inputText>

                <Textarea v-model="newIRecipe[field.fiel]" v-if="field.type == 'textArea'" rows="6"
                    style="width: 100%;min-width: 100%;resize: none"></Textarea>


                <Calendar timeOnly v-model="newIRecipe[field.fiel]" v-if="field.type == 'time'" rows="6"
                    style="width: 100%;">
                </Calendar>


                <InputNumber v-model="newIRecipe[field.fiel]" style="width: 100%;" v-if="field.type == 'money'" locale="es-ES" max-fraction-digits="3"
                    prefix="$"></InputNumber>


                <InputNumber locale="es-ES" max-fraction-digits="3" v-model="newIRecipe[field.fiel]" style="width: 100%;" v-if="field.type == 'number'">
                </InputNumber>

                <InputNumber locale="es-ES" max-fraction-digits="3" v-model="newIRecipe[field.fiel]" style="width: 100%;" v-if="field.type == 'percent'"
                    suffix="%"></InputNumber>

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


        
        <Dialog style="width: 30rem;" header="Nuevo Ingrediente" class="mx-2"
            v-model:visible="showNewIngredient" modal> 

       
            <h6> Ingrediente</h6>
            <Dropdown v-model="newIngredient.ingredient" :options="ingredients" filter optionLabel="name" style="width: 100%;"></Dropdown>
            <h6> Unidad de medida</
                h6>
            <Dropdown v-model="newIngredient.unitMeasure" :options="unitMeasures" optionLabel="name" style="width: 100%;"></Dropdown>
            <h6 > Cantidad</h6>
            <InputNumber  v-model="newIngredient.quantity" locale="es-ES" max-fraction-digits="3" style="width: 100%;"></InputNumber>
            <h6 > Cantidad antes de merma</h6>
            <InputNumber v-model="newIngredient.quantity_before_shrinkage" locale="es-ES" max-fraction-digits="3" style="width: 100%;"></InputNumber>

            <template #footer>
                <div style="display:  flex;justify-content: end;">
                    <Button class="m-0" size="small" label="Agregar" @click="addIngredintToRecipe"
                        severity="help"></Button>
                    
                </div>
            </template>
        
        </Dialog>


                
        <Dialog style="width: 30rem;" header="Editar Ingrediente" class="mx-2"
            v-model:visible="showUpdateIngredient" modal> 

       
            <h6> Ingrediente</h6>
            <Dropdown v-model="newIngredient.ingredient" :options="ingredients" optionLabel="ingredient_name" style="width: 100%;"></Dropdown>
            <h6> Unidad de medida</h6>
            <Dropdown v-model="newIngredient.unitMeasure" :options="unitMeasures" optionLabel="name" style="width: 100%;"></Dropdown>
            <h6 > Cantidad</h6>
            <InputNumber v-model="newIngredient.quantity" locale="es-ES" max-fraction-digits="3" style="width: 100%;"></InputNumber>
            <h6 > Cantidad antes de merma</h6>
            <InputNumber v-model="newIngredient.quantity_before_shrinkage" locale="es-ES" max-fraction-digits="3" style="width: 100%;"></InputNumber>

            <template #footer>
                <div style="display:  flex;justify-content: end;">
                    <Button class="m-0" size="small" label="Guardar" @click="updateIngredient"
                        severity="help"></Button>
                    
                </div>
            </template>
        
        </Dialog>




        <h2 class="text-center" style="margin-top: 3rem;">
            <i class="fa-solid fa-bowl-rice mr-2">

            </i>
            <b style="text-transform: uppercase;">
                {{ route.params?.recipe_name }}
            </b>
        </h2>

        <!-- {{ recipe?.recipe_data_sheet }} -->

        <div class="grid mx-0 md:mx-0" style="margin-top: 3rem;">

            <div class="col-12  my-4 px-0" style="display: flex;justify-content: end;">
                <Button v-if="!recipe.recipe_data_sheet.init" size="small" severity="info"
                    @click="openEditIRecipe(recipe.recipe_data_sheet)" label="Modificar la Receta"></Button>
            </div>

            <div s class="col-12 md:col-6 py-0 px-0 md:pr-4 shadow-2"
                style="border-radius: .5rem;background-color: white; display: flex; align-items: center;justify-content: center;">
                <img style="width: 100%;aspect-ratio: 1 / 1; object-fit:cover;"
                    :src="`${URI}/read-product-image/600/${route.params.recipe_name}`" alt="">
            </div>

            <div class="col-12 md:col-6 py-0 px-0 md:pl-4 " style="">


                <div class="col-12 py-4 md:p-0">
                    <h4>
                        <b>
                            Información Principal
                        </b>
                    </h4>
                </div>

                <div :class="column.separe? 'mt-4 ' : ''" v-for="column in data_sheet_columns" class="justify-content-start" style="display: flex; background-color: white   ; gap: 1rem; border: 1px solid black; align-items: center; justify-content: space-between">

                  
                    <h6 class="m-0 p-2" style="background-color: var(--primary-color); width: 100%;color: white;font-weight: bold;">
                        {{ column.label }}
                    </h6>

                    <h6 v-if="column.type !== 'money' && column.type !== 'percent'" class="m-0 text-right p-2"
                        style="width: 100%;">
                        {{ recipe.recipe_data_sheet[column.field] }}
                    </h6>

                    <h6 v-else-if="column.type === 'money' && column.calc" class="m-0 text-right p-2"
                        style="width: 100%;">
                        {{ formatoPesosColombianos(recipe.recipe_data_sheet[column.calc[0]] -
                            (recipe.recipe_data_sheet[column.calc[0]] * recipe.recipe_data_sheet[column.calc[1]])/100 ) }}
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



        <div style="margin-top: 3rem;">
            <DataTable direction="vertical" :paginator="true" :rows="15" style="width: 100%;"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} recetas"
                :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows
                class="col-12 m-auto p-0" :value="recipe.ingredients" tableStyle="min-width: 50rem;" :filters="filters">
                <template #header>
                    <div class="grid p-3"
                        style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                        <h4 class="px-2"> <i class="fa fa-carrot"></i> <b>Ingredientes para su preparación</b></h4>

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
                            {{ `${((data.data[column.value] / recipe.recipe_data_sheet.recipe_total)*100)?.toFixed(2)?.replace('.', ',')}%` ||
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


                        
                                <Button v-if="!data.data.pasamanos" @click="navigateToRecipeDataSheet(data.data.recipe_id, data.data.ingredient_name)" text severity="help" style="height: 2rem; width: 2rem;" icon="pi pi-eye"></Button>

                          
                               
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
import { formatoPesosColombianos,formatoDecimal } from '@/service/formatoPesos.js'
import router from '../../../../router';
import { useRoute } from 'vue-router';
import InputNumber from 'primevue/inputnumber';



const navigateToRecipeDataSheet =  (product_id,recipe_name) => {

    alert(recipe_name)
    router.push({
        name:'cdi_recipe_data_sheet',
        params:{
            product_id,
            recipe_name
        }
    })
}


const showUpdateIngredient = ref(false)

const newIngredient = ref({})





const addIngredintToRecipe = async() => {
    const data = {...newIngredient.value}


    const newData = {
        "cdi_recipe_data_sheet_id": data.ingredient.id,
        "recipe_data_sheet_id": recipe.value.recipe_data_sheet.id,
        "unit_measure_id": data.unitMeasure.id,
        "quantity": data.quantity,
        "quantity_before_shrinkage":data.quantity_before_shrinkage
    }


    await fetchService.post(`${URI}/create-new-recipe-data-ingredient/`,newData, 'Agregando ingrediente')
    update()
    showNewIngredient.value = false

}

const route = useRoute()
const showNewIngredient =ref(false)
const ingredientToDelete = ref({})
const showNewRecipe = ref(false)

const newIRecipe = ref({
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
        label: 'Tamano de la porcion',
        field: 'portion_size',
    },
    {
        label: 'Numero de porciones',
        field: 'portion_number',
    },

    {
        label: 'Tiempo de preparacion',
        field: 'preparation_time',
    },
    {
        label: 'Tiempo de coccion',
        field: 'cooking_time',
    },
    {
        label: 'Temperatura de servicio',
        field: 'service_temperature',
       
    },
    {
        label: 'Precio de venta al publico',
        field: 'selling_price',
        type: 'money',
        separe:true
    },



    {
        label: 'Impuestos',
        field: 'taxes',
        type: 'percent'
    },
    
    {
        label: 'Precio de venta Neto',
        field: 'net_selling_price',
        type: 'money',
        
    },

    {
        label: 'Costo cotal de la receta',
        field: 'recipe_total',
        type: 'money',
        separe:true
    },

    {
        label: '% Costo de la receta',
        field: 'percent_recipe_total_cost',
        type: 'percent'
    },
    
    {
        label: 'Margen de beneficio neto',
        field: 'net_benefic_margin',
        type: 'money'
    },

    {
        label: 'Margen de beneficio',
        field: 'benefit_margin',
        type: 'percent'
    },





    // {
    //     label: 'Precio de venta Neto',
    //     field: 'selling_price',
    //     calc: ['selling_price', 'taxes'],
    //     type: 'money'
    // },


   

  


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



const los_nuevos = [
    {
        "id": 2,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 22,
        "unit_measure_id": 5,
        "quantity": 20,
        "quantity_before_shrinkage": null
    },
    {
        "id": 5,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 20,
        "quantity_before_shrinkage": null
    },
    {
        "id": 7,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 455,
        "quantity_before_shrinkage": null
    },
    {
        "id": 11,
        "ingredient_id": 18,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 44,
        "quantity_before_shrinkage": null
    },
    {
        "id": 12,
        "ingredient_id": 18,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 44,
        "quantity_before_shrinkage": null
    },
    {
        "id": 13,
        "ingredient_id": 19,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 20,
        "quantity": 44,
        "quantity_before_shrinkage": null
    },
    {
        "id": 14,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 4,
        "quantity": 4455,
        "quantity_before_shrinkage": null
    },
    {
        "id": 8,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 4,
        "quantity": 4551,
        "quantity_before_shrinkage": null
    },
    {
        "id": 6,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 2066,
        "quantity_before_shrinkage": null
    },
    {
        "id": 0,
        "ingredient_id": 17,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 4,
        "quantity": 100000,
        "quantity_before_shrinkage": null
    },
    {
        "id": 15,
        "ingredient_id": 20,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 4,
        "quantity": 23,
        "quantity_before_shrinkage": null
    },
    {
        "id": 18,
        "ingredient_id": 20,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 4,
        "quantity": 250,
        "quantity_before_shrinkage": 440
    },
    {
        "id": 17,
        "ingredient_id": 20,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 4,
        "quantity": 250,
        "quantity_before_shrinkage": 440
    },
    {
        "id": 16,
        "ingredient_id": 20,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 4,
        "quantity": 250,
        "quantity_before_shrinkage": 440
    },
    {
        "id": 19,
        "ingredient_id": 22,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 4,
        "quantity": 250,
        "quantity_before_shrinkage": 440
    },
    {
        "id": 20,
        "ingredient_id": 22,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 23,
        "ingredient_id": 23,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 4,
        "quantity": 4,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 24,
        "ingredient_id": 23,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 4,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 25,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 26,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 27,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 28,
        "ingredient_id": 82,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 55,
        "quantity_before_shrinkage": 55
    },
    {
        "id": 29,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 30,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 31,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 32,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 33,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 34,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 35,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 36,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 37,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 38,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 39,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 40,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 41,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 19,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 42,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 43,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 44,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 45,
        "ingredient_id": 55,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 150,
        "quantity_before_shrinkage": 330
    },
    {
        "id": 46,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 47,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 48,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 49,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 50,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 51,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 52,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 53,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 54,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 55,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 56,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 57,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 58,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 34,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 59,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 60,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 61,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 62,
        "ingredient_id": 100,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 120,
        "quantity_before_shrinkage": 170
    },
    {
        "id": 63,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 64,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 65,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 66,
        "ingredient_id": 88,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 67,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 68,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 69,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 70,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 71,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 72,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 73,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 74,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 75,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 76,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 9,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 77,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 78,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 79,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 80,
        "ingredient_id": 72,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 200,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 81,
        "ingredient_id": 25,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 60,
        "quantity_before_shrinkage": 60
    },
    {
        "id": 82,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 83,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 84,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 85,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 86,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 87,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 88,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 89,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 90,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 91,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 92,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 93,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 94,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 10,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 95,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 500,
        "quantity_before_shrinkage": 875
    },
    {
        "id": 96,
        "ingredient_id": 86,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 329
    },
    {
        "id": 97,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 98,
        "ingredient_id": 56,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 120,
        "quantity_before_shrinkage": 120
    },
    {
        "id": 99,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 100,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 101,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 102,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 103,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 104,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 105,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 106,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 22,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 107,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 108,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 109,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 110,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 36,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 111,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 112,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 113,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 115,
        "ingredient_id": 87,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 50,
        "quantity_before_shrinkage": 50
    },
    {
        "id": 116,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 117,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 118,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 119,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 120,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 121,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 122,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 123,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 124,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 125,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 126,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 127,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 128,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 21,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 129,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 130,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 250,
        "quantity_before_shrinkage": 316
    },
    {
        "id": 131,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 133,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 134,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 135,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 136,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 137,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 138,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 139,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 140,
        "ingredient_id": 54,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 22,
        "quantity": 34,
        "quantity_before_shrinkage": 34
    },
    {
        "id": 141,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 142,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 143,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 144,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 145,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 146,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 132,
        "ingredient_id": 41,
        "recipe_data_sheet_id": 17,
        "unit_measure_id": 4,
        "quantity": 250,
        "quantity_before_shrinkage": 350
    },
    {
        "id": 147,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 450,
        "quantity_before_shrinkage": 788
    },
    {
        "id": 148,
        "ingredient_id": 36,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 120,
        "quantity_before_shrinkage": 120
    },
    {
        "id": 153,
        "ingredient_id": 87,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 50,
        "quantity_before_shrinkage": 50
    },
    {
        "id": 154,
        "ingredient_id": 56,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 60,
        "quantity_before_shrinkage": 60
    },
    {
        "id": 155,
        "ingredient_id": 59,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 50,
        "quantity_before_shrinkage": 50
    },
    {
        "id": 156,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 144,
        "quantity_before_shrinkage": 144
    },
    {
        "id": 157,
        "ingredient_id": 65,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 50,
        "quantity_before_shrinkage": 50
    },
    {
        "id": 158,
        "ingredient_id": 50,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 80,
        "quantity_before_shrinkage": 80
    },
    {
        "id": 159,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 160,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 161,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 162,
        "ingredient_id": 88,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 30,
        "quantity_before_shrinkage": 30
    },
    {
        "id": 163,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 164,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 165,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 166,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 22,
        "quantity": 32,
        "quantity_before_shrinkage": 32
    },
    {
        "id": 167,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 168,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 169,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 170,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 1,
        "quantity_before_shrinkage": 1
    },
    {
        "id": 171,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 5,
        "quantity_before_shrinkage": 5
    },
    {
        "id": 172,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 40,
        "unit_measure_id": 5,
        "quantity": 2,
        "quantity_before_shrinkage": 2
    },
    {
        "id": 174,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 450.0,
        "quantity_before_shrinkage": 788.0
    },
    {
        "id": 175,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 250.0,
        "quantity_before_shrinkage": 316.0
    },
    {
        "id": 177,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 144.0,
        "quantity_before_shrinkage": 144.0
    },
    {
        "id": 178,
        "ingredient_id": 36,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 155.0,
        "quantity_before_shrinkage": 155.0
    },
    {
        "id": 179,
        "ingredient_id": 50,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 80.0,
        "quantity_before_shrinkage": 80.0
    },
    {
        "id": 180,
        "ingredient_id": 65,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 50.0,
        "quantity_before_shrinkage": 50.0
    },
    {
        "id": 181,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 182,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 183,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 184,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 185,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 186,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 187,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 188,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 189,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 190,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 191,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 193,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 194,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 450.0,
        "quantity_before_shrinkage": 788.0
    },
    {
        "id": 195,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 250.0,
        "quantity_before_shrinkage": 316.0
    },
    {
        "id": 196,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 144.0,
        "quantity_before_shrinkage": 144.0
    },
    {
        "id": 197,
        "ingredient_id": 41,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 250.0,
        "quantity_before_shrinkage": 350.0
    },
    {
        "id": 198,
        "ingredient_id": 50,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 199,
        "ingredient_id": 42,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 150.0,
        "quantity_before_shrinkage": 200.0
    },
    {
        "id": 200,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 201,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 202,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 30.0,
        "quantity_before_shrinkage": 30.0
    },
    {
        "id": 203,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 204,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 205,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 206,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 207,
        "ingredient_id": 31,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 208,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 209,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 210,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 211,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 5.0,
        "quantity_before_shrinkage": 5.0
    },
    {
        "id": 212,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 24,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 213,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 450.0,
        "quantity_before_shrinkage": 788.0
    },
    {
        "id": 214,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 250.0,
        "quantity_before_shrinkage": 316.0
    },
    {
        "id": 215,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 144.0,
        "quantity_before_shrinkage": 144.0
    },
    {
        "id": 216,
        "ingredient_id": 36,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 219,
        "ingredient_id": 87,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 50.0,
        "quantity_before_shrinkage": 50.0
    },
    {
        "id": 220,
        "ingredient_id": 68,
        "recipe_data_sheet_id": 30,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 221,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 1400.0,
        "quantity_before_shrinkage": 2452.0
    },
    {
        "id": 222,
        "ingredient_id": 85,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 500.0,
        "quantity_before_shrinkage": 633.0
    },
    {
        "id": 223,
        "ingredient_id": 42,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 150.0,
        "quantity_before_shrinkage": 200.0
    },
    {
        "id": 224,
        "ingredient_id": 55,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 150.0,
        "quantity_before_shrinkage": 330.0
    },
    {
        "id": 225,
        "ingredient_id": 72,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 200.0,
        "quantity_before_shrinkage": 316.0
    },
    {
        "id": 226,
        "ingredient_id": 100,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 150.0,
        "quantity_before_shrinkage": 215.0
    },
    {
        "id": 227,
        "ingredient_id": 48,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 150.0,
        "quantity_before_shrinkage": 230.0
    },
    {
        "id": 228,
        "ingredient_id": 87,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 229,
        "ingredient_id": 76,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 144.0,
        "quantity_before_shrinkage": 144.0
    },
    {
        "id": 230,
        "ingredient_id": 56,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 231,
        "ingredient_id": 82,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 55.0,
        "quantity_before_shrinkage": 55.0
    },
    {
        "id": 232,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 233,
        "ingredient_id": 91,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 234,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 120.0,
        "quantity_before_shrinkage": 120.0
    },
    {
        "id": 235,
        "ingredient_id": 47,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 236,
        "ingredient_id": 98,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 237,
        "ingredient_id": 92,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 238,
        "ingredient_id": 90,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 22,
        "quantity": 32.0,
        "quantity_before_shrinkage": 32.0
    },
    {
        "id": 239,
        "ingredient_id": 34,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 240,
        "ingredient_id": 64,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 241,
        "ingredient_id": 30,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 2.0,
        "quantity_before_shrinkage": 2.0
    },
    {
        "id": 242,
        "ingredient_id": 29,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 243,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 10.0,
        "quantity_before_shrinkage": 10.0
    },
    {
        "id": 244,
        "ingredient_id": 99,
        "recipe_data_sheet_id": 41,
        "unit_measure_id": 5,
        "quantity": 6.0,
        "quantity_before_shrinkage": 6.0
    },
    {
        "id": 245,
        "ingredient_id": 41,
        "recipe_data_sheet_id": 33,
        "unit_measure_id": 22,
        "quantity": 450.0,
        "quantity_before_shrinkage": 450.0
    },
    {
        "id": 246,
        "ingredient_id": 62,
        "recipe_data_sheet_id": 33,
        "unit_measure_id": 22,
        "quantity": 450.0,
        "quantity_before_shrinkage": 788.0
    },
    {
        "id": 247,
        "ingredient_id": 54,
        "recipe_data_sheet_id": 33,
        "unit_measure_id": 22,
        "quantity": 34.0,
        "quantity_before_shrinkage": 34.0
    },
    {
        "id": 248,
        "ingredient_id": 50,
        "recipe_data_sheet_id": 33,
        "unit_measure_id": 4,
        "quantity": 80.0,
        "quantity_before_shrinkage": 80.0
    },
    {
        "id": 192,
        "ingredient_id": 94,
        "recipe_data_sheet_id": 32,
        "unit_measure_id": 4,
        "quantity": 5.0,
        "quantity_before_shrinkage": 5.0
    },
    {
        "id": 249,
        "ingredient_id": 61,
        "recipe_data_sheet_id": 13,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    },
    {
        "id": 250,
        "ingredient_id": 61,
        "recipe_data_sheet_id": 13,
        "unit_measure_id": 5,
        "quantity": 1.0,
        "quantity_before_shrinkage": 1.0
    }
]


const las_sheets = [
    {
        "id": 2,
        "labour_cost": 0,
        "bache_total_cost": 141112.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 141112.0,
        "cost_whit_labour": 141112.0,
        "cost_whit_percent_gain": 166014.118,
        "purchasing_price_whit_error": 174751.703,
        "purchasing_price_whit_error_and_iva": 174751.703,
        "pasamanos": true,
        "ingredient_id": 24
    },
    {
        "id": 3,
        "labour_cost": 0,
        "bache_total_cost": 45410.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 45410.0,
        "cost_whit_labour": 45410.0,
        "cost_whit_percent_gain": 53423.529,
        "purchasing_price_whit_error": 56235.294,
        "purchasing_price_whit_error_and_iva": 56235.294,
        "pasamanos": true,
        "ingredient_id": 36
    },
    {
        "id": 4,
        "labour_cost": 0,
        "bache_total_cost": 3047.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 3047.0,
        "cost_whit_labour": 3047.0,
        "cost_whit_percent_gain": 3584.706,
        "purchasing_price_whit_error": 3773.375,
        "purchasing_price_whit_error_and_iva": 3773.375,
        "pasamanos": true,
        "ingredient_id": 34
    },
    {
        "id": 5,
        "labour_cost": 0,
        "bache_total_cost": 270.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 270.0,
        "cost_whit_labour": 270.0,
        "cost_whit_percent_gain": 317.647,
        "purchasing_price_whit_error": 334.365,
        "purchasing_price_whit_error_and_iva": 334.365,
        "pasamanos": true,
        "ingredient_id": 103
    },
    {
        "id": 6,
        "labour_cost": 0,
        "bache_total_cost": 483.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 483.0,
        "cost_whit_labour": 483.0,
        "cost_whit_percent_gain": 568.235,
        "purchasing_price_whit_error": 598.142,
        "purchasing_price_whit_error_and_iva": 598.142,
        "pasamanos": true,
        "ingredient_id": 33
    },
    {
        "id": 7,
        "labour_cost": 0,
        "bache_total_cost": 15000.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 15000.0,
        "cost_whit_labour": 15000.0,
        "cost_whit_percent_gain": 17647.059,
        "purchasing_price_whit_error": 18575.851,
        "purchasing_price_whit_error_and_iva": 18575.851,
        "pasamanos": true,
        "ingredient_id": 32
    },
    {
        "id": 8,
        "labour_cost": 0,
        "bache_total_cost": 48125.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 48125.0,
        "cost_whit_labour": 48125.0,
        "cost_whit_percent_gain": 56617.647,
        "purchasing_price_whit_error": 59597.523,
        "purchasing_price_whit_error_and_iva": 59597.523,
        "pasamanos": true,
        "ingredient_id": 35
    },
    {
        "id": 9,
        "labour_cost": 0,
        "bache_total_cost": 12461.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 12461.0,
        "cost_whit_labour": 12461.0,
        "cost_whit_percent_gain": 14660.0,
        "purchasing_price_whit_error": 15431.579,
        "purchasing_price_whit_error_and_iva": 15431.579,
        "pasamanos": true,
        "ingredient_id": 25
    },
    {
        "id": 10,
        "labour_cost": 0,
        "bache_total_cost": 4180.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4180.0,
        "cost_whit_labour": 4180.0,
        "cost_whit_percent_gain": 4917.647,
        "purchasing_price_whit_error": 5176.471,
        "purchasing_price_whit_error_and_iva": 5176.471,
        "pasamanos": true,
        "ingredient_id": 37
    },
    {
        "id": 11,
        "labour_cost": 0,
        "bache_total_cost": 4295.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4295.0,
        "cost_whit_labour": 4295.0,
        "cost_whit_percent_gain": 5052.941,
        "purchasing_price_whit_error": 5318.885,
        "purchasing_price_whit_error_and_iva": 5318.885,
        "pasamanos": true,
        "ingredient_id": 40
    },
    {
        "id": 12,
        "labour_cost": 0,
        "bache_total_cost": 2415.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2415.0,
        "cost_whit_labour": 2415.0,
        "cost_whit_percent_gain": 2841.176,
        "purchasing_price_whit_error": 2990.712,
        "purchasing_price_whit_error_and_iva": 2990.712,
        "pasamanos": true,
        "ingredient_id": 39
    },
    {
        "id": 13,
        "labour_cost": 0,
        "bache_total_cost": 15846.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 15846.0,
        "cost_whit_labour": 15846.0,
        "cost_whit_percent_gain": 18642.353,
        "purchasing_price_whit_error": 19623.529,
        "purchasing_price_whit_error_and_iva": 19623.529,
        "pasamanos": true,
        "ingredient_id": 38
    },
    {
        "id": 14,
        "labour_cost": 0,
        "bache_total_cost": 36929.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 36929.0,
        "cost_whit_labour": 36929.0,
        "cost_whit_percent_gain": 43445.882,
        "purchasing_price_whit_error": 45732.508,
        "purchasing_price_whit_error_and_iva": 45732.508,
        "pasamanos": true,
        "ingredient_id": 41
    },
    {
        "id": 15,
        "labour_cost": 0,
        "bache_total_cost": 12352.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 12352.0,
        "cost_whit_labour": 12352.0,
        "cost_whit_percent_gain": 14531.765,
        "purchasing_price_whit_error": 15296.594,
        "purchasing_price_whit_error_and_iva": 15296.594,
        "pasamanos": true,
        "ingredient_id": 42
    },
    {
        "id": 16,
        "labour_cost": 0,
        "bache_total_cost": 5975.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 5975.0,
        "cost_whit_labour": 5975.0,
        "cost_whit_percent_gain": 7029.412,
        "purchasing_price_whit_error": 7399.381,
        "purchasing_price_whit_error_and_iva": 7399.381,
        "pasamanos": true,
        "ingredient_id": 43
    },
    {
        "id": 17,
        "labour_cost": 0,
        "bache_total_cost": 1150.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 1150.0,
        "cost_whit_labour": 1150.0,
        "cost_whit_percent_gain": 1352.941,
        "purchasing_price_whit_error": 1424.149,
        "purchasing_price_whit_error_and_iva": 1424.149,
        "pasamanos": true,
        "ingredient_id": 26
    },
    {
        "id": 18,
        "labour_cost": 0,
        "bache_total_cost": 2793.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2793.0,
        "cost_whit_labour": 2793.0,
        "cost_whit_percent_gain": 3285.882,
        "purchasing_price_whit_error": 3458.824,
        "purchasing_price_whit_error_and_iva": 3458.824,
        "pasamanos": true,
        "ingredient_id": 44
    },
    {
        "id": 19,
        "labour_cost": 0,
        "bache_total_cost": 2636.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2636.0,
        "cost_whit_labour": 2636.0,
        "cost_whit_percent_gain": 3101.176,
        "purchasing_price_whit_error": 3264.396,
        "purchasing_price_whit_error_and_iva": 3264.396,
        "pasamanos": true,
        "ingredient_id": 45
    },
    {
        "id": 20,
        "labour_cost": 0,
        "bache_total_cost": 818.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 818.0,
        "cost_whit_labour": 818.0,
        "cost_whit_percent_gain": 962.353,
        "purchasing_price_whit_error": 1013.003,
        "purchasing_price_whit_error_and_iva": 1013.003,
        "pasamanos": true,
        "ingredient_id": 46
    },
    {
        "id": 21,
        "labour_cost": 0,
        "bache_total_cost": 19058.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 19058.0,
        "cost_whit_labour": 19058.0,
        "cost_whit_percent_gain": 22421.176,
        "purchasing_price_whit_error": 23601.238,
        "purchasing_price_whit_error_and_iva": 23601.238,
        "pasamanos": true,
        "ingredient_id": 48
    },
    {
        "id": 22,
        "labour_cost": 0,
        "bache_total_cost": 5780.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 5780.0,
        "cost_whit_labour": 5780.0,
        "cost_whit_percent_gain": 6800.0,
        "purchasing_price_whit_error": 7157.895,
        "purchasing_price_whit_error_and_iva": 7157.895,
        "pasamanos": true,
        "ingredient_id": 47
    },
    {
        "id": 23,
        "labour_cost": 0,
        "bache_total_cost": 17800.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 17800.0,
        "cost_whit_labour": 17800.0,
        "cost_whit_percent_gain": 20941.176,
        "purchasing_price_whit_error": 22043.344,
        "purchasing_price_whit_error_and_iva": 22043.344,
        "pasamanos": true,
        "ingredient_id": 27
    },
    {
        "id": 24,
        "labour_cost": 0,
        "bache_total_cost": 16000.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 16000.0,
        "cost_whit_labour": 16000.0,
        "cost_whit_percent_gain": 18823.529,
        "purchasing_price_whit_error": 19814.241,
        "purchasing_price_whit_error_and_iva": 19814.241,
        "pasamanos": true,
        "ingredient_id": 50
    },
    {
        "id": 25,
        "labour_cost": 0,
        "bache_total_cost": 6300.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6300.0,
        "cost_whit_labour": 6300.0,
        "cost_whit_percent_gain": 7411.765,
        "purchasing_price_whit_error": 7801.858,
        "purchasing_price_whit_error_and_iva": 7801.858,
        "pasamanos": true,
        "ingredient_id": 49
    },
    {
        "id": 26,
        "labour_cost": 0,
        "bache_total_cost": 4100.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4100.0,
        "cost_whit_labour": 4100.0,
        "cost_whit_percent_gain": 4823.529,
        "purchasing_price_whit_error": 5077.399,
        "purchasing_price_whit_error_and_iva": 5077.399,
        "pasamanos": true,
        "ingredient_id": 51
    },
    {
        "id": 27,
        "labour_cost": 0,
        "bache_total_cost": 90.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 90.0,
        "cost_whit_labour": 90.0,
        "cost_whit_percent_gain": 105.882,
        "purchasing_price_whit_error": 111.455,
        "purchasing_price_whit_error_and_iva": 111.455,
        "pasamanos": true,
        "ingredient_id": 106
    },
    {
        "id": 28,
        "labour_cost": 0,
        "bache_total_cost": 4100.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4100.0,
        "cost_whit_labour": 4100.0,
        "cost_whit_percent_gain": 4823.529,
        "purchasing_price_whit_error": 5077.399,
        "purchasing_price_whit_error_and_iva": 5077.399,
        "pasamanos": true,
        "ingredient_id": 52
    },
    {
        "id": 29,
        "labour_cost": 0,
        "bache_total_cost": 4100.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4100.0,
        "cost_whit_labour": 4100.0,
        "cost_whit_percent_gain": 4823.529,
        "purchasing_price_whit_error": 5077.399,
        "purchasing_price_whit_error_and_iva": 5077.399,
        "pasamanos": true,
        "ingredient_id": 53
    },
    {
        "id": 30,
        "labour_cost": 0,
        "bache_total_cost": 2070.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2070.0,
        "cost_whit_labour": 2070.0,
        "cost_whit_percent_gain": 2435.294,
        "purchasing_price_whit_error": 2563.467,
        "purchasing_price_whit_error_and_iva": 2563.467,
        "pasamanos": true,
        "ingredient_id": 54
    },
    {
        "id": 31,
        "labour_cost": 0,
        "bache_total_cost": 6181.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6181.0,
        "cost_whit_labour": 6181.0,
        "cost_whit_percent_gain": 7271.765,
        "purchasing_price_whit_error": 7654.489,
        "purchasing_price_whit_error_and_iva": 7654.489,
        "pasamanos": true,
        "ingredient_id": 28
    },
    {
        "id": 32,
        "labour_cost": 0,
        "bache_total_cost": 9680.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 9680.0,
        "cost_whit_labour": 9680.0,
        "cost_whit_percent_gain": 11388.235,
        "purchasing_price_whit_error": 11987.616,
        "purchasing_price_whit_error_and_iva": 11987.616,
        "pasamanos": true,
        "ingredient_id": 56
    },
    {
        "id": 33,
        "labour_cost": 0,
        "bache_total_cost": 3800.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 3800.0,
        "cost_whit_labour": 3800.0,
        "cost_whit_percent_gain": 4470.588,
        "purchasing_price_whit_error": 4705.882,
        "purchasing_price_whit_error_and_iva": 4705.882,
        "pasamanos": true,
        "ingredient_id": 55
    },
    {
        "id": 34,
        "labour_cost": 0,
        "bache_total_cost": 44065.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 44065.0,
        "cost_whit_labour": 44065.0,
        "cost_whit_percent_gain": 51841.176,
        "purchasing_price_whit_error": 54569.659,
        "purchasing_price_whit_error_and_iva": 54569.659,
        "pasamanos": true,
        "ingredient_id": 57
    },
    {
        "id": 35,
        "labour_cost": 0,
        "bache_total_cost": 225000.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 225000.0,
        "cost_whit_labour": 225000.0,
        "cost_whit_percent_gain": 264705.882,
        "purchasing_price_whit_error": 278637.771,
        "purchasing_price_whit_error_and_iva": 278637.771,
        "pasamanos": true,
        "ingredient_id": 58
    },
    {
        "id": 36,
        "labour_cost": 0,
        "bache_total_cost": 8415.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 8415.0,
        "cost_whit_labour": 8415.0,
        "cost_whit_percent_gain": 9900.0,
        "purchasing_price_whit_error": 10421.053,
        "purchasing_price_whit_error_and_iva": 10421.053,
        "pasamanos": true,
        "ingredient_id": 59
    },
    {
        "id": 37,
        "labour_cost": 0,
        "bache_total_cost": 16362.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 16362.0,
        "cost_whit_labour": 16362.0,
        "cost_whit_percent_gain": 19249.412,
        "purchasing_price_whit_error": 20262.539,
        "purchasing_price_whit_error_and_iva": 20262.539,
        "pasamanos": true,
        "ingredient_id": 60
    },
    {
        "id": 38,
        "labour_cost": 0,
        "bache_total_cost": 1379.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 1379.0,
        "cost_whit_labour": 1379.0,
        "cost_whit_percent_gain": 1622.353,
        "purchasing_price_whit_error": 1707.74,
        "purchasing_price_whit_error_and_iva": 1707.74,
        "pasamanos": true,
        "ingredient_id": 61
    },
    {
        "id": 39,
        "labour_cost": 0,
        "bache_total_cost": 21860.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 21860.0,
        "cost_whit_labour": 21860.0,
        "cost_whit_percent_gain": 25717.647,
        "purchasing_price_whit_error": 27071.207,
        "purchasing_price_whit_error_and_iva": 27071.207,
        "pasamanos": true,
        "ingredient_id": 29
    },
    {
        "id": 40,
        "labour_cost": 0,
        "bache_total_cost": 20900.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 20900.0,
        "cost_whit_labour": 20900.0,
        "cost_whit_percent_gain": 24588.235,
        "purchasing_price_whit_error": 25882.353,
        "purchasing_price_whit_error_and_iva": 25882.353,
        "pasamanos": true,
        "ingredient_id": 63
    },
    {
        "id": 41,
        "labour_cost": 0,
        "bache_total_cost": 3600.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 3600.0,
        "cost_whit_labour": 3600.0,
        "cost_whit_percent_gain": 4235.294,
        "purchasing_price_whit_error": 4458.204,
        "purchasing_price_whit_error_and_iva": 4458.204,
        "pasamanos": true,
        "ingredient_id": 62
    },
    {
        "id": 42,
        "labour_cost": 0,
        "bache_total_cost": 8377.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 8377.0,
        "cost_whit_labour": 8377.0,
        "cost_whit_percent_gain": 9855.294,
        "purchasing_price_whit_error": 10373.994,
        "purchasing_price_whit_error_and_iva": 10373.994,
        "pasamanos": true,
        "ingredient_id": 64
    },
    {
        "id": 43,
        "labour_cost": 0,
        "bache_total_cost": 3700.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 3700.0,
        "cost_whit_labour": 3700.0,
        "cost_whit_percent_gain": 4352.941,
        "purchasing_price_whit_error": 4582.043,
        "purchasing_price_whit_error_and_iva": 4582.043,
        "pasamanos": true,
        "ingredient_id": 65
    },
    {
        "id": 44,
        "labour_cost": 0,
        "bache_total_cost": 6466.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6466.0,
        "cost_whit_labour": 6466.0,
        "cost_whit_percent_gain": 7607.059,
        "purchasing_price_whit_error": 8007.43,
        "purchasing_price_whit_error_and_iva": 8007.43,
        "pasamanos": true,
        "ingredient_id": 30
    },
    {
        "id": 45,
        "labour_cost": 0,
        "bache_total_cost": 28363.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 28363.0,
        "cost_whit_labour": 28363.0,
        "cost_whit_percent_gain": 33368.235,
        "purchasing_price_whit_error": 35124.458,
        "purchasing_price_whit_error_and_iva": 35124.458,
        "pasamanos": true,
        "ingredient_id": 68
    },
    {
        "id": 46,
        "labour_cost": 0,
        "bache_total_cost": 44.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 44.0,
        "cost_whit_labour": 44.0,
        "cost_whit_percent_gain": 51.765,
        "purchasing_price_whit_error": 54.489,
        "purchasing_price_whit_error_and_iva": 54.489,
        "pasamanos": true,
        "ingredient_id": 66
    },
    {
        "id": 47,
        "labour_cost": 0,
        "bache_total_cost": 33251.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 33251.0,
        "cost_whit_labour": 33251.0,
        "cost_whit_percent_gain": 39118.824,
        "purchasing_price_whit_error": 41177.709,
        "purchasing_price_whit_error_and_iva": 41177.709,
        "pasamanos": true,
        "ingredient_id": 67
    },
    {
        "id": 48,
        "labour_cost": 0,
        "bache_total_cost": 30723.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 30723.0,
        "cost_whit_labour": 30723.0,
        "cost_whit_percent_gain": 36144.706,
        "purchasing_price_whit_error": 38047.059,
        "purchasing_price_whit_error_and_iva": 38047.059,
        "pasamanos": true,
        "ingredient_id": 71
    },
    {
        "id": 49,
        "labour_cost": 0,
        "bache_total_cost": 646.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 646.0,
        "cost_whit_labour": 646.0,
        "cost_whit_percent_gain": 760.0,
        "purchasing_price_whit_error": 800.0,
        "purchasing_price_whit_error_and_iva": 800.0,
        "pasamanos": true,
        "ingredient_id": 31
    },
    {
        "id": 50,
        "labour_cost": 0,
        "bache_total_cost": 16730.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 16730.0,
        "cost_whit_labour": 16730.0,
        "cost_whit_percent_gain": 19682.353,
        "purchasing_price_whit_error": 20718.266,
        "purchasing_price_whit_error_and_iva": 20718.266,
        "pasamanos": true,
        "ingredient_id": 72
    },
    {
        "id": 51,
        "labour_cost": 0,
        "bache_total_cost": 19997.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 19997.0,
        "cost_whit_labour": 19997.0,
        "cost_whit_percent_gain": 23525.882,
        "purchasing_price_whit_error": 24764.087,
        "purchasing_price_whit_error_and_iva": 24764.087,
        "pasamanos": true,
        "ingredient_id": 73
    },
    {
        "id": 52,
        "labour_cost": 0,
        "bache_total_cost": 2459.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2459.0,
        "cost_whit_labour": 2459.0,
        "cost_whit_percent_gain": 2892.941,
        "purchasing_price_whit_error": 3045.201,
        "purchasing_price_whit_error_and_iva": 3045.201,
        "pasamanos": true,
        "ingredient_id": 74
    },
    {
        "id": 53,
        "labour_cost": 0,
        "bache_total_cost": 2459.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2459.0,
        "cost_whit_labour": 2459.0,
        "cost_whit_percent_gain": 2892.941,
        "purchasing_price_whit_error": 3045.201,
        "purchasing_price_whit_error_and_iva": 3045.201,
        "pasamanos": true,
        "ingredient_id": 75
    },
    {
        "id": 54,
        "labour_cost": 0,
        "bache_total_cost": 17411.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 17411.0,
        "cost_whit_labour": 17411.0,
        "cost_whit_percent_gain": 20483.529,
        "purchasing_price_whit_error": 21561.61,
        "purchasing_price_whit_error_and_iva": 21561.61,
        "pasamanos": true,
        "ingredient_id": 76
    },
    {
        "id": 55,
        "labour_cost": 0,
        "bache_total_cost": 52800.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 52800.0,
        "cost_whit_labour": 52800.0,
        "cost_whit_percent_gain": 62117.647,
        "purchasing_price_whit_error": 65386.997,
        "purchasing_price_whit_error_and_iva": 65386.997,
        "pasamanos": true,
        "ingredient_id": 77
    },
    {
        "id": 56,
        "labour_cost": 0,
        "bache_total_cost": 9730.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 9730.0,
        "cost_whit_labour": 9730.0,
        "cost_whit_percent_gain": 11447.059,
        "purchasing_price_whit_error": 12049.536,
        "purchasing_price_whit_error_and_iva": 12049.536,
        "pasamanos": true,
        "ingredient_id": 78
    },
    {
        "id": 57,
        "labour_cost": 0,
        "bache_total_cost": 43000.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 43000.0,
        "cost_whit_labour": 43000.0,
        "cost_whit_percent_gain": 50588.235,
        "purchasing_price_whit_error": 53250.774,
        "purchasing_price_whit_error_and_iva": 53250.774,
        "pasamanos": true,
        "ingredient_id": 80
    },
    {
        "id": 58,
        "labour_cost": 0,
        "bache_total_cost": 8360.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 8360.0,
        "cost_whit_labour": 8360.0,
        "cost_whit_percent_gain": 9835.294,
        "purchasing_price_whit_error": 10352.941,
        "purchasing_price_whit_error_and_iva": 10352.941,
        "pasamanos": true,
        "ingredient_id": 82
    },
    {
        "id": 59,
        "labour_cost": 0,
        "bache_total_cost": 31061.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 31061.0,
        "cost_whit_labour": 31061.0,
        "cost_whit_percent_gain": 36542.353,
        "purchasing_price_whit_error": 38465.635,
        "purchasing_price_whit_error_and_iva": 38465.635,
        "pasamanos": true,
        "ingredient_id": 81
    },
    {
        "id": 60,
        "labour_cost": 0,
        "bache_total_cost": 17076.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 17076.0,
        "cost_whit_labour": 17076.0,
        "cost_whit_percent_gain": 20089.412,
        "purchasing_price_whit_error": 21146.749,
        "purchasing_price_whit_error_and_iva": 21146.749,
        "pasamanos": true,
        "ingredient_id": 85
    },
    {
        "id": 61,
        "labour_cost": 0,
        "bache_total_cost": 1811.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 1811.0,
        "cost_whit_labour": 1811.0,
        "cost_whit_percent_gain": 2130.588,
        "purchasing_price_whit_error": 2242.724,
        "purchasing_price_whit_error_and_iva": 2242.724,
        "pasamanos": true,
        "ingredient_id": 83
    },
    {
        "id": 62,
        "labour_cost": 0,
        "bache_total_cost": 6776.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6776.0,
        "cost_whit_labour": 6776.0,
        "cost_whit_percent_gain": 7971.765,
        "purchasing_price_whit_error": 8391.331,
        "purchasing_price_whit_error_and_iva": 8391.331,
        "pasamanos": true,
        "ingredient_id": 87
    },
    {
        "id": 63,
        "labour_cost": 0,
        "bache_total_cost": 6304.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6304.0,
        "cost_whit_labour": 6304.0,
        "cost_whit_percent_gain": 7416.471,
        "purchasing_price_whit_error": 7806.811,
        "purchasing_price_whit_error_and_iva": 7806.811,
        "pasamanos": true,
        "ingredient_id": 84
    },
    {
        "id": 64,
        "labour_cost": 0,
        "bache_total_cost": 31061.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 31061.0,
        "cost_whit_labour": 31061.0,
        "cost_whit_percent_gain": 36542.353,
        "purchasing_price_whit_error": 38465.635,
        "purchasing_price_whit_error_and_iva": 38465.635,
        "pasamanos": true,
        "ingredient_id": 86
    },
    {
        "id": 65,
        "labour_cost": 0,
        "bache_total_cost": 12960.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 12960.0,
        "cost_whit_labour": 12960.0,
        "cost_whit_percent_gain": 15247.059,
        "purchasing_price_whit_error": 16049.536,
        "purchasing_price_whit_error_and_iva": 16049.536,
        "pasamanos": true,
        "ingredient_id": 89
    },
    {
        "id": 66,
        "labour_cost": 0,
        "bache_total_cost": 6827.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 6827.0,
        "cost_whit_labour": 6827.0,
        "cost_whit_percent_gain": 8031.765,
        "purchasing_price_whit_error": 8454.489,
        "purchasing_price_whit_error_and_iva": 8454.489,
        "pasamanos": true,
        "ingredient_id": 90
    },
    {
        "id": 67,
        "labour_cost": 0,
        "bache_total_cost": 15024.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 15024.0,
        "cost_whit_labour": 15024.0,
        "cost_whit_percent_gain": 17675.294,
        "purchasing_price_whit_error": 18605.573,
        "purchasing_price_whit_error_and_iva": 18605.573,
        "pasamanos": true,
        "ingredient_id": 88
    },
    {
        "id": 68,
        "labour_cost": 0,
        "bache_total_cost": 14017.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 14017.0,
        "cost_whit_labour": 14017.0,
        "cost_whit_percent_gain": 16490.588,
        "purchasing_price_whit_error": 17358.514,
        "purchasing_price_whit_error_and_iva": 17358.514,
        "pasamanos": true,
        "ingredient_id": 92
    },
    {
        "id": 69,
        "labour_cost": 0,
        "bache_total_cost": 8519.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 8519.0,
        "cost_whit_labour": 8519.0,
        "cost_whit_percent_gain": 10022.353,
        "purchasing_price_whit_error": 10549.845,
        "purchasing_price_whit_error_and_iva": 10549.845,
        "pasamanos": true,
        "ingredient_id": 93
    },
    {
        "id": 70,
        "labour_cost": 0,
        "bache_total_cost": 9680.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 9680.0,
        "cost_whit_labour": 9680.0,
        "cost_whit_percent_gain": 11388.235,
        "purchasing_price_whit_error": 11987.616,
        "purchasing_price_whit_error_and_iva": 11987.616,
        "pasamanos": true,
        "ingredient_id": 91
    },
    {
        "id": 71,
        "labour_cost": 0,
        "bache_total_cost": 4320.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4320.0,
        "cost_whit_labour": 4320.0,
        "cost_whit_percent_gain": 5082.353,
        "purchasing_price_whit_error": 5349.845,
        "purchasing_price_whit_error_and_iva": 5349.845,
        "pasamanos": true,
        "ingredient_id": 94
    },
    {
        "id": 72,
        "labour_cost": 0,
        "bache_total_cost": 18604.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 18604.0,
        "cost_whit_labour": 18604.0,
        "cost_whit_percent_gain": 21887.059,
        "purchasing_price_whit_error": 23039.009,
        "purchasing_price_whit_error_and_iva": 23039.009,
        "pasamanos": true,
        "ingredient_id": 95
    },
    {
        "id": 73,
        "labour_cost": 0,
        "bache_total_cost": 7312.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 7312.0,
        "cost_whit_labour": 7312.0,
        "cost_whit_percent_gain": 8602.353,
        "purchasing_price_whit_error": 9055.108,
        "purchasing_price_whit_error_and_iva": 9055.108,
        "pasamanos": true,
        "ingredient_id": 96
    },
    {
        "id": 74,
        "labour_cost": 0,
        "bache_total_cost": 5110.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 5110.0,
        "cost_whit_labour": 5110.0,
        "cost_whit_percent_gain": 6011.765,
        "purchasing_price_whit_error": 6328.173,
        "purchasing_price_whit_error_and_iva": 6328.173,
        "pasamanos": true,
        "ingredient_id": 98
    },
    {
        "id": 75,
        "labour_cost": 0,
        "bache_total_cost": 2459.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2459.0,
        "cost_whit_labour": 2459.0,
        "cost_whit_percent_gain": 2892.941,
        "purchasing_price_whit_error": 3045.201,
        "purchasing_price_whit_error_and_iva": 3045.201,
        "pasamanos": true,
        "ingredient_id": 97
    },
    {
        "id": 76,
        "labour_cost": 0,
        "bache_total_cost": 5572.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 5572.0,
        "cost_whit_labour": 5572.0,
        "cost_whit_percent_gain": 6555.294,
        "purchasing_price_whit_error": 6900.31,
        "purchasing_price_whit_error_and_iva": 6900.31,
        "pasamanos": true,
        "ingredient_id": 99
    },
    {
        "id": 77,
        "labour_cost": 0,
        "bache_total_cost": 19337.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 19337.0,
        "cost_whit_labour": 19337.0,
        "cost_whit_percent_gain": 22749.412,
        "purchasing_price_whit_error": 23946.749,
        "purchasing_price_whit_error_and_iva": 23946.749,
        "pasamanos": true,
        "ingredient_id": 100
    },
    {
        "id": 78,
        "labour_cost": 0,
        "bache_total_cost": 4500.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 4500.0,
        "cost_whit_labour": 4500.0,
        "cost_whit_percent_gain": 5294.118,
        "purchasing_price_whit_error": 5572.755,
        "purchasing_price_whit_error_and_iva": 5572.755,
        "pasamanos": true,
        "ingredient_id": 101
    },
    {
        "id": 79,
        "labour_cost": 0,
        "bache_total_cost": 2820.0,
        "quantity_bache_total_cost": 1.0,
        "total_cost_per_kilo": 2820.0,
        "cost_whit_labour": 2820.0,
        "cost_whit_percent_gain": 3317.647,
        "purchasing_price_whit_error": 3492.26,
        "purchasing_price_whit_error_and_iva": 3492.26,
        "pasamanos": true,
        "ingredient_id": 102
    }
]

// onMounted(async => {

//     los_nuevos.forEach(async(i) => {

//         const newData = {
//         "cdi_recipe_data_sheet_id": las_sheets.find(shet => shet.ingredient_id == i.ingredient_id ).id,
//         "recipe_data_sheet_id": i.recipe_data_sheet_id,
//         "unit_measure_id": i.unit_measure_id,
//         "quantity": i.quantity,
//         "quantity_before_shrinkage":i.quantity_before_shrinkage
//     }


//     await fetchService.post(`${URI}/create-new-recipe-data-ingredient/`,newData, 'Agregando ingrediente')

//     })
// })



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

    newIngredient.value ={}
    const newIngredientData = {...ingredient}
 
    newIngredientData.ingredient = ingredients.value.find(i => i.ingredient_name = ingredient.ingredient_name)
    newIngredientData.unitMeasure = unitMeasures.value.find(i => i.name = ingredient.unit_measure  )
    console.log(newIngredient.value)

    showUpdateIngredient.value = true
    newIngredient.value = {...newIngredientData}


}


const openEditIRecipe = (recipe) => {


    // console.log(ingredient)

    newIRecipe.value = { ...recipe }
    editing.value = true
    showNewRecipe.value = true


}



const updateIngredient = async() => {

    const data = {...newIngredient.value}
    const newData = {
        "ingredient_id": data.ingredient.id,
        "recipe_data_sheet_id": recipe.value.recipe_data_sheet.id,
        "unit_measure_id": data.unitMeasure.id,
        "quantity": data.quantity,
        "quantity_before_shrinkage":data.quantity_before_shrinkage
    }

    await fetchService.put(`${URI}/update-recipe-data-ingredient/${newIngredient.value.id}`,newData, 'modificando ingrediente')
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
        type:'number',
    },
    {
        header: 'Cantidad Antes de merma',
        value: 'quantity_before_shrinkage',
        type: 'max-content',
        type:'number',
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
    const product_id = route.params.product_id
    recipe.value = await fetchService.get(`${URI}/list-recipe-by-product-id/${product_id}`, 'cargando receta')
    ingredients.value = await fetchService.get(`${URI}/list-cdi-recipes-all`, 'cargando ingredientes')
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
