<template>


<div style="max-width: 500px;" class="m-auto">



    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/Wh4tL3dkmR0" frameborder="0" allowfullscreen></iframe> -->



    <h3 style="margin-top: 6rem;" class="text-center p-0 mx-0">
        <i class=" fa fa-gear"></i>
            <b>
                Porcentajes de comparación cdi
            </b>
    </h3>

    <Dialog style="width: 30rem;" :header="editing? 'Actualizar Percente' : 'Nuevo Percente'" class="mx-2" v-model:visible="showNewingredientDialog" modal>



        <div v-for="field in newrecipesFields">
 
            <h6 class="m-0 my-3">{{field.name}} </h6>
            
     
           <InputNumber v-model="newPercent[field.fiel]" style="width: 100%;"  suffix="%" locale="es-ES" ></InputNumber>
           
        </div>

        <template #footer>

            <Button v-if="!editing" @click="sendPercent"  severity="help" label="Guardar"></Button>
            <Button v-else @click="sendPercent"  severity="help" label="Modificar Percente"></Button>


        </template>
      

    </Dialog>


    <Dialog class="mx-2" header="Eliminar Percente" v-model:visible=" showDelePercentDialog" modal>

        <h6>seguro que desea eliminar el Valor de comparacion <b>{{ PercentToDelete.percent }}%</b> ?</h6>

        <template #footer>
            <div style="display:  flex;justify-content: end;">
                <Button size="small" label="cancelar" @click="showDelePercentDialog = false" severity="help"></Button>
                <Button size="small" @click="DeletePercent()" label="Eliminar" severity="danger" text ></Button>
            </div>
        </template>
    </Dialog>





        
    <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} porcentajes"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto p-0"
        :value="recipes"  :filters="filters">
        <template #header>

            <div style="display: flex; width: 100%; justify-content: end;flex-wrap: wrap;gap: 1rem;align-items: center;" >
                <!-- <MultiSelect v-model="visibleColumns" :options="columns" optionLabel="header" style="width: min-content; max-width: 300px;" placeholder="Columnas visibles"></MultiSelect> -->
                <Button size="small" severity="help" @click="openNewPercent" label="Nuevo porcentaje"></Button>
            </div>

            


        </template>
        

        <column header="Id" field="name" class="py-2" style="width: 40%;">
        
        
            <template #body="data">

                <h6 class="p-0 m-0" style="text-transform: uppercase;">
                    {{ data.data.id }}
                </h6>


            </template>
        
        </column>


        <column header="Porcentaje" style="width: 50%;" field="name" class="py-2">
        
        
        <template #body="data">

            <h6 class="p-0 m-0" style="text-transform: capitalize;">
                {{ data.data.percent }}%
            </h6>


        </template>
    
    </column>

        <column header="Para vender a sedes?" style="width: max-content; min-width: 10rem;" field="name" class="py-2">
        
        
        <template #body="data">

            <div style="display: flex; justify-content: end;gap: .5rem;">

                <InputSwitch @change="set_main_percent(data.data.id)" v-model="data.data.main"></InputSwitch>



            </div>


        </template>
    
    </column>


    <column header="Accion" style="width: min-content;" field="name" class="py-2">
        
        
        <template #body="data">

            <div style="display: flex; justify-content: end;gap: .5rem;">

                <!-- <Button @click="openToUpdateType(data.data)" class="m-0 p-0" severity="warning" style="height: 2rem; width: 2rem;" icon="pi pi-pencil"></Button> -->
                <Button v-if="!data.data.main" @click="openToDeletPercent(data.data)" class="m-0 p-0" severity="danger" style="height: 2rem; width: 2rem;" icon="pi pi-trash"></Button>



            </div>


        </template>
    
    </column>
     


        </DataTable>
        
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

const PercentToDelete = ref({})
const showNewingredientDialog = ref(false)
const newPercent = ref({})
const recipes = ref([{}])
const unitMeasures = ref([])

const editing = ref(false)
const showDelePercentDialog  = ref(false)



const openToDeletPercent = (Percent) => {
    showDelePercentDialog.value = true
    PercentToDelete.value = Percent
}


const openNewPercent = () =>{
    
    editing.value = false
    newPercent.value = {}
    showNewingredientDialog.value = true
}


const DeletePercent = async() => {
    const id = PercentToDelete.value.id
    await fetchService.delete(`${URI}/delete-cdi-percent-price/${id}`,'Borrando')
    showDelePercentDialog.value = false
    update()
}



const toggle_recipe = async(id, status) => {
    const data = {
        status
    }
    let mesage = ''

    status? mesage = 'Activando': mesage =  'desactivando'
    await fetchService.put(`${URI}/toggle_product_to_recipe/${id}`,data,mesage)
}



const openEditPercent = (Percent) =>{


    // console.log(Percent)

    editing.value = true



    newPercent.value = { 
        "id":Percent.id ,
        "name": Percent.Percent_name,
        "purchasing_unit_measure": unitMeasures.value.find(um => um.name == Percent.purchasing_unit_measure),
        purchasing_unit_measure_id:unitMeasures.value.find(um => um.name == Percent.purchasing_unit_measure)[0]?.id,
        "purchasing_price": Percent.purchasing_price, 
        "net_gross_weight": Percent.net_gross_weight } 
        console.log(newPercent.value)


    showNewingredientDialog.value = true


}




const columns = [
    {
        header:'Id',
        value:'id',
  
    },
    {
        header:'Porcentaje',
        value:'percent',

        width:''
    },
    // {
    //     header:'Categoria',
    //     value:'category_name',
    //     width:'10'
    // },

   
    



]


const visibleColumns = ref ([...columns])

const visibleColIds = computed( () => {
    return visibleColumns.value?.map(col => col.value)
})

const newrecipesFields = ref([


    {
        name:'Porcentaje(%)',
        fiel:'percent',
        type:'number'
    },
    // {
    //     name:'porcentaje de merma (%)',
    //     fiel:'shrinkage_persent',
    //     type:'persent'
    // }

]) 


watch(newPercent, async(newval,oldval) => {
    newPercent.value.purchasing_unit_measure_id = newval.purchasing_unit_measure?.id || null
}, {deep:true})



const sendPercent = async() => {
    const data = newPercent.value


        await fetchService.post(`${URI}/create-cdi-percent-price`,data,'creando un nuevo porcentaje')

    
    update()
    showNewingredientDialog.value = false


}


const set_main_percent = async(id) => {
     await fetchService.put(`${URI}/set-main-percent-to-sell/${id}/`,{},'Modificando')
     update()
}


const update = async() => {
   recipes.value = await fetchService.get(`${URI}/get-prices-cdi-percents`)
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



