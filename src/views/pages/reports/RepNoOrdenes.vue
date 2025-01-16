<template>
    <div class="p-3" style="min-width: 100%; margin: auto;">

        <!-- Gráfico 1 -->


        <h2 class="my-6"><b>Cantidad de ordenes por canal</b></h2>
        <div style="display: flex; gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de gráfica</b></h6>
            <Dropdown v-model="type_graph.reporte_basico" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div>
        <Chart :type="type_graph.reporte_basico.value" :data="store.NoOrdersDataGraphics.reporte_basico" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: .5rem;" />


        
            <h2 class="my-6"><b>Cantidad de ordenes Totales periodo actual vs periodo anterior</b></h2>




            <Chart type="line":data="store.NoOrdersDataGraphics.reporte_total" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: .5rem;" />



            <h2 class="my-6"><b>Cantidad de ordenes Call center periodo actual vs periodo anterior</b></h2>

        <!-- Gráfico 2 -->
        <!-- <div style="display: flex; gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de gráfica</b></h6>
            <Dropdown v-model="type_graph.callcenter" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div> -->
        <Chart type="line" :data="store.NoOrdersDataGraphics.reporte_callcenter" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: .5rem;" />



        <!-- Gráfico 3 -->
        <!-- <div style="display: flex; gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de gráfica</b></h6>
            <Dropdown v-model="type_graph.total" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div> -->
     
        <!-- Gráfico 4 -->
        <!-- <div style="display: flex; gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de gráfica</b></h6>
            <Dropdown v-model="type_graph.chatbot" :options="tipos_graficas" optionLabel="name"></Dropdown>


        </div> -->


        <h2 class="my-6"><b>Cantidad de ordenes Salchibot periodo actual vs periodo anterior</b></h2>

        <Chart type="line" :data="store.NoOrdersDataGraphics.reporte_chatbot" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: .5rem;" />

        <!-- Gráfico 5 -->
        <!-- <div style="display: flex; gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de gráfica</b></h6>
            <Dropdown v-model="type_graph.web" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div> -->


        <h2 class="my-6"><b>Cantidad de ordenes Pagina web periodo actual vs periodo anterior</b></h2>

        <Chart type="line" :data="store.NoOrdersDataGraphics.reporte_web" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2); border-radius: .5rem;" />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { URI } from "../../../service/conection"
import { fetchService } from "../../../service/utils/fetchService"
import { useReportesStore } from '@/store/reportes.js'

const store = useReportesStore()

// Tipos de gráficos para cada componente
const type_graph = ref({
    reporte_basico: { name: 'Barras', value: 'bar' },
    callcenter: { name: 'Barras', value: 'bar' },
    total: { name: 'Barras', value: 'bar' },
    chatbot: { name: 'Barras', value: 'bar' },
    web: { name: 'Barras', value: 'bar' }
})

// const store.NoOrdersDataGraphics = ref([])

watch(() => store.dateRange, async () => {
    const site_ids = store.selectedSites.map(s => s.site_id)
    store.NoOrdersDataGraphics = await fetchService.post(`${URI}/get_daily_orders_report/`, {
        start_date: store.dateRange.startDate,
        end_date: store.dateRange.endDate,
        sites: site_ids
    })
}, { deep: true })

const tipos_graficas = [
    { name: 'Lineas', value: 'line' },
    { name: 'Barras', value: 'bar' }
]

onMounted(async () => {
    const site_ids = store.selectedSites.map(s => s.site_id)

   
        store.NoOrdersDataGraphics = await fetchService.post(`${URI}/get_daily_orders_report/`, {
        start_date: store.dateRange.startDate,
        end_date: store.dateRange.endDate,
        sites: site_ids
    })
    
 
})
</script>
