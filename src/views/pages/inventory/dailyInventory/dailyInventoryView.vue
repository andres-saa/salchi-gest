<template>

<div >

    <p class="text-center text-2xl" style="font-weight: bold;">Resumen de reporte de inventario diario</p>
    <div class="header mx-auto px-3 md:px-0 my-5" style=" max-width:50rem;overflow-x:auto" >
        <p class="p-0 m-0" style="width: max-content;"> <b>FECHA: </b>  {{ entries[0]?.date?.split('-').reverse().join('-')}} </p>
        <p class="p-0 m-0" style="width: max-content;"> <b>SEDE: </b>  {{ entries[0]?.site_name}} </p>
        <p class=" p-0 m-0" style="width: max-content;"> <b>RESPONSABLE: </b>  {{ entries[0]?.employer_name}} </p>
    </div>

   
    <div v-for="(value, key) in agruparPorGroupName(entries)" >
        
        
        <DataTable stripedRows style="max-width:50rem" showgridlines  v-model:filters="filters" class="col-12 mb-4 p-2 shadow-2 mt-0 mx-auto" :value=" value" tableStyle="min-width:30rem">
          <template #header class="p-0">
         
                <p class="p-1 m-0 text-center" style="font-weight: bold;background:#00000020">{{ key }}</p>
                <!-- <InputText v-model="filters['global'].value" placeholder="Buscar..." /> -->
       
          </template>
            <Column style="width: 40%;" class="py-1 px-0" field="item_name" header="Nombre"></Column>
            <Column style="width: 20%;" class="py-1 px-2rem" field="quantity" header="Cantidad">
            
                <template #body="data">
                    {{ data.data.quantity?.toString().replace('.', ',') }}
                </template>
            </Column>
            <Column style="width: 400%;" class="py-1 px-0" field="unit_measure" header="Unidad de medida"></Column>
    
        </DataTable>

         

    </div>


</div>

</template>



<script setup>
import {ref,onMounted} from 'vue'
import {dailyInventoryReportsService} from '../../../../service/inventory/dailyInventoryService.js'
import {useRoute} from 'vue-router'
import { FilterMatchMode, FilterOperator } from 'primevue/api';


const entries = ref([])
const filters = ref({})
const router = useRoute()


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};



onMounted(async() => {
    const daily_inventory_id = router.params.daily_inventory_id
    entries.value = await dailyInventoryReportsService.getDailyInventoryEntriesByDailyInventoryID(daily_inventory_id)
    entries.value = entries.value.filter(item => item.quantity != 0)
})


function agruparPorGroupName(datos) {
  return datos.reduce((agrupado, elemento) => {
    const groupName = elemento.group_name;
    if (!agrupado[groupName]) {
      agrupado[groupName] = [];
    }
    agrupado[groupName].push(elemento);
    return agrupado;
  }, {});
}


initFilters();



</script>

<style>


</style>