<template>
    <div class="p-3" style="min-width: 100%;  margin: auto;">


        <div style="display: flex;gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de grafica</b> </h6>

            <Dropdown v-model="type_graph" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div>


        <Chart :type="type_graph.value" :data="data_graphics" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2);border-radius: .5rem;" />

        <div>



            <!-- {{ store }} -->

        </div>


    </div>


</template>


<script setup>
import { onMounted, ref, watch } from "vue"
import { URI } from "../../../service/conection"
import { fetchService } from "../../../service/utils/fetchService"
import { useReportesStore } from '@/store/reportes.js'


const store = useReportesStore()
const type_graph = ref({
    name: 'Barras',
    value: 'bar'
})



const data_graphics = ref([])


watch(() => store.dateRange , async() => {
    const site_ids = store.selectedSites.map(s => s.site_id)
    data_graphics.value = await fetchService.post(`${URI}/get_daily_orders_report/`, {
        start_date:store.dateRange.startDate,
        end_date:store.dateRange.endDate,
        sites: site_ids
         })
}, {deep:true})




const tipos_graficas = [

    {
        name: 'Lineas',
        value: 'line'
    },
    {
        name: 'Barras',
        value: 'bar'
    }
]

onMounted(async () => {

    const site_ids = store.selectedSites.map(s => s.site_id)

    data_graphics.value = await fetchService.post(`${URI}/get_daily_orders_report/`, {
        start_date:store.dateRange.startDate,
        end_date:store.dateRange.endDate,
        sites: site_ids
         })

})


</script>