<template>
    

<div style="max-width: 1300px;margin: auto;">

    <DataTable class="mx-auto  shadow-2 p-4" style="max-width: max-content;" stripedRows showGridlines :value="data" >
    <template #header>
        <h2 style="text-align: center;"> <b>Reporte de Cancelaciones</b> </h2>

               <div class="grid p-3 mt-4" style="align-items:center;justify-content: start; display: flex;gap: 1rem;">
                   <!-- <h4 class="px-2 m-0"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">Transferencias <b>{{ route.params.section }}</b> </b> </h4> -->


                   <Calendar v-model="date_range.start_date"></Calendar>
                   <calendar v-model="date_range.end_date"></calendar>

                   <MultiSelect style="max-width: 30rem;" v-model="date_range.sites" optionLabel="site_name" :options="sites.filter(s => s.show_on_web)"></MultiSelect>

                <Button severity="help" @click="update" label="Buscar" icon="pi pi-search"></Button>
    
               </div>
    
    
    
           </template>


<column class="py-0" style="text-transform: uppercase;" v-for="column in columns" :header="column">
    <template  #body="data">
        <h6 class="m-0 py-2 "> {{ data.data[column] }}</h6>

    </template>
</column>


</DataTable>


<h2 style="text-align: center;"> <b>Cancelaciones en el tiempo por categorias</b> </h2>


<div class="card">
                    <!-- <Chart type="bar" :data="lineData" :options="lineOptions" /> -->
                    <div class="card">
                        <Chart type="line" :data="charData"  class="h-30rem" />
                    </div>
                </div>
</div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { fetchService } from '../../../service/utils/fetchService';
import { URI } from '../callCenter/service/conection';
const data = ref([{}])


const date_range = ref( {
    start_date : new Date(),
    end_date: new Date(),
    sites:[]
 })
const columns = ref([])
const sites = ref([])

const charData = ref({})

const update = async () => {
    const response = await fetchService.post(`${URI}/get_all_cancellation_request_summary`,    {
        "start_date": date_range.value.start_date,
        "end_date": date_range.value.end_date,
        "site_ids": date_range.value.sites.map(s => s.site_id) || [1,2]
        
    })
    // alert('hp;')

    

    if (response?.summary?.length > 0){
        data.value = response?.summary

        columns.value = Object.keys(response?.summary[0])

        console.log(columns.value)

        charData.value = response?.graph_daily_categories

    }
 

}


onMounted(async() => {

    await update()

    sites.value = await fetchService.get(`${URI}/sites/`)

})
</script>