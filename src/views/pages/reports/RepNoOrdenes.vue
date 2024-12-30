<template>
    <div class="p-3" style="min-width: 100%; max-height: 80vh;overflow: auto; margin: auto;">


        <div style="display: flex;gap: 1rem; align-items: center;" class="my-4">
            <h6 class="m-0"><b>Tipo de grafica</b> </h6>

            <Dropdown v-model="type_graph" :options="tipos_graficas" optionLabel="name"></Dropdown>
        </div>


        <Chart :type="type_graph.value" :data="data_graphics" class="h-[10rem] p-2 h-50"
            style="width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, .2);border-radius: .5rem;" />

        <div>





        </div>


    </div>


</template>


<script setup>
import { onMounted, ref } from "vue"
import { URI } from "../../../service/conection"
import { fetchService } from "../../../service/utils/fetchService"

const type_graph = ref({
    name: 'Barras',
    value: 'bar'
})



const data_graphics = ref([])


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
    data_graphics.value = await fetchService.post(`${URI}/get_daily_orders_report/2024-09-01/2024-12-30`, { ids: [1, 2, 3, 4, 5, 6, 7] })

})


</script>