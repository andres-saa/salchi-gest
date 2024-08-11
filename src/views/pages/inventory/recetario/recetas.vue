<template>


<div style="max-width: 900px;" class="m-auto">



    <Dialog style="width: 30rem;" :header="editing? 'Actualizar Ingrediente' : 'Nuevo Ingrediente'" class="mx-2" v-model:visible="showNewIngredinetDialog" modal>



        <div v-for="field in newrecipesFields">
 
            <h6 class="m-0 my-3">{{field.name}} </h6>
            <inputText v-model="newIngredient[field.fiel]" v-if="field.type == 'text'" style="width: 100%;"></inputText>
           <Dropdown  :options="field.Options" optionLabel="name" v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'drop'"></Dropdown>
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'money'"  prefix="$" locale="es-ES" max-fraction-digits="3"></InputNumber>
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'number'" ></InputNumber locale="es-ES" max-fraction-digits="3">
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'persent'" suffix="%" locale="es-ES" max-fraction-digits="3" ></InputNumber>
           
        </div>

        <template #footer>

            <Button v-if="!editing" @click="sendIngredient"  severity="help" label="Guardar ingrediente"></Button>
            <Button v-else @click="sendIngredient"  severity="help" label="Modificar ingrediente"></Button>


        </template>
      

    </Dialog>


    <Dialog class="mx-2" header="Eliminar ingrediente" v-model:visible=" showDeleIngredientDialog" modal>

        <h6>seguro que desea eliminar el Ingrediente <b>{{ ingredientToDelete.ingredient_name }}</b> ?</h6>

        <template #footer>
            <div style="display:  flex;justify-content: end;">
                <Button size="small" label="cancelar" @click="showDeleIngredientDialog = false" severity="help"></Button>
                <Button size="small" @click="DeleteIngredient()" label="Eliminar ingrediente" severity="danger" text ></Button>
            </div>
        </template>
    </Dialog>




    <div style="margin-top: 3rem;">
        <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} recetas"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="recipes" tableStyle="min-width: 50rem;" :filters="filters">
        <template #header>
            <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h3 class="px-2"> <i class="fa fa-bowl-rice"></i>  <b>Recetas</b></h3>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar receta ..." />

               


            </div>




        

        </template>


        <column header="foto" class="py-1 px-0" style="max-width: 2.2rem;" >
            <template #body="data">
                <div style="display: flex; justify-content: center;">
                    <img class="p-0 shadow-2" style="width: 2rem;border-radius: .3rem;background-color: white;" :src="`${URI}/read-product-image/96/${data.data.recipe_name}`" alt="">

                </div>
            </template>
        </column>

        <column v-for="column in columns" :header="column.header" style="" :style="`min-width:${column.width}rem`"  :field="column.value" class="py-2" >
            <template #body="data" >
               

                <h6 v-if="column.type == 'money'" style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{formatoPesosColombianos(data.data[column.value] ) || '-----------'}}</h6>

                <h6 v-else style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{ data.data[column.value] || '-----------'}}</h6>
            </template>
        </column>

        
        <column header="Accion" style="max-width: 6rem;" field="name" class="py-0 px-0 m-0" frozen alignFrozen="right">
        
        
        <template #body="data" >

            <div style="display: flex;gap: .5rem;justify-content: center;">

                <Button text disabled style="height: 2rem; width: 2rem;" severity="warning" icon="pi pi-pencil"></Button>
                <Button text  disabled style="height: 2rem; width: 2rem;" severity="danger" icon="pi pi-trash"></Button>
                <Button @click="navigateToRecipeDataSheet(data.data.id,data.data.recipe_name)" text severity="help" style="height: 2rem; width: 2rem;" icon="pi pi-eye"></Button>



            </div>


        </template>
    
    </column>

        


        </Datatable>
    </div>

</div>

</template>


<script setup lang="">
import { ref } from 'vue';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';
import { fetchService } from '../../../../service/utils/fetchService';
import { URI } from '../../../../service/conection';
import { watch } from 'vue';
import { computed } from 'vue';
import {formatoPesosColombianos} from '@/service/formatoPesos.js' 
import router from '../../../../router';




const navigateToRecipeDataSheet =  (product_id,recipe_name) => {
    router.push({
        name:'recipe_data_sheet',
        params:{
            product_id,
            recipe_name
        }
    })
}

const ingredientToDelete = ref({})
const showNewIngredinetDialog = ref(false)
const newIngredient = ref({})
const recipes = ref([{}])
const unitMeasures = ref([])

const editing = ref(false)
const showDeleIngredientDialog  = ref(false)



const openToDeletIngredient = (ingredient) => {
    showDeleIngredientDialog.value = true
    ingredientToDelete.value = ingredient
}


const openNewIngredient = () =>{
    
    editing.value = false
    newIngredient.value = {}
    showNewIngredinetDialog.value = true
}


const DeleteIngredient = async() => {
    const id = ingredientToDelete.value.id
    await fetchService.delete(`${URI}/delete-ingredient/${id}`,'Borrando ingrediente')
    showDeleIngredientDialog.value = false
    update()

}


const openEditIngredient = (ingredient) =>{


    // console.log(ingredient)

    editing.value = true



    newIngredient.value = { 
        "id":ingredient.id ,
        "name": ingredient.ingredient_name,
        "purchasing_unit_measure": unitMeasures.value.find(um => um.name == ingredient.purchasing_unit_measure),
        purchasing_unit_measure_id:unitMeasures.value.find(um => um.name == ingredient.purchasing_unit_measure)[0]?.id,
        "purchasing_price": ingredient.purchasing_price, 
        "net_gross_weight": ingredient.net_gross_weight } 
        console.log(newIngredient.value)


    showNewIngredinetDialog.value = true


}




const columns = [
    {
        header:'Id',
        value:'id',
        width:'1'
    },
    {
        header:'Producto',
        value:'recipe_name',
        type:'max-content',
        width:''
    },
    {
        header:'Categoria',
        value:'category_name',
        width:'10'
    },
    



]


const visibleColumns = ref ([...columns])

const visibleColIds = computed( () => {
    return visibleColumns.value?.map(col => col.value)
})

const newrecipesFields = ref([
    {
        name:'Producto',
        fiel:'namerecipe_name',
        type:'text'
    },
    {
        name:'Unidad de medida de compra',
        fiel:'purchasing_unit_measure',
        type:'drop',
        Options:ref(unitMeasures),
        optionLable:'name'
    },
    {
        name:'precio de compra',
        fiel:'purchasing_price',
        type:'money'
    },
    // {
    //     name:'No Unidades por compra',
    //     fiel:'number_units_purchasing',
    //     type:'number'
    // },


    {
        name:'Peso Bruto (Kg/Litros)',
        fiel:'net_gross_weight',
        type:'number'
    },
    // {
    //     name:'porcentaje de merma (%)',
    //     fiel:'shrinkage_persent',
    //     type:'persent'
    // }

]) 


watch(newIngredient, async(newval,oldval) => {
    newIngredient.value.purchasing_unit_measure_id = newval.purchasing_unit_measure?.id || null
}, {deep:true})



const sendIngredient = async() => {
    const data = newIngredient.value

    if(!data.name || !data.purchasing_unit_measure_id || !data.purchasing_price || !data.net_gross_weight){
        alert('Por favor llene todos los campos')
        return
    }

    if (editing.value){
        await fetchService.post(`${URI}/update-ingredient/${newIngredient.value.id}`,data,'Editando ingrediente')
    } else {
        await fetchService.post(`${URI}/create-ingredient`,data,'creando un nuevo ingrediente')

    }
    update()
    showNewIngredinetDialog.value = false


}


const update = async() => {
   recipes.value = await fetchService.get(`${URI}/list-recipes-enabled`,'cargando ingredientes')
   unitMeasures.value = await fetchService.get(`${URI}/daily_inventory_unit_measures`, )
}

onMounted( async() =>{
    update()
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

h6::first-letter{
    text-transform: uppercase;
}

</style>



