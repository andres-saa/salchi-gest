<template>


    <!-- {{ visibleColumns }} -->




    <div v-if="recipeData.id" class="m-auto md:p-4 md:shadow-3 " style="border-radius: 1rem;">

        <h4 v-if="recipeData.recipe_name" class="text-center mb-6"> <b>
            {{ recipeData.recipe_name }}

        </b>
    </h4>

        <div class="grid m-0 " style="">
            <div class="col-12 md:col-6 my-2 ">

                <div class="grid md:pr-3 ">
                    <div class="col-12 p-0 " style="display:  flex; border: 1px solid;" v-for="campo in camposIzq">

                        <div class="p-2 " style="width: 60%; background-color:yellow; ">
                            <b>{{ campo.nombre }}</b>
                        </div>
                        <div class="p-2 " style="width: 40%; ">
                            {{ recipeData[campo.valor] }}
                        </div>

                    </div>

                </div>


            </div>

             <div class="col-12 md:col-6 my-2 ">

                <div class="grid md:pl-3">
                    <div class="col-12 p-0 " style="display:  flex; border: 1px solid;" v-for="campo in camposDer">

                        <div class="p-2 " style="width: 60%; background-color:yellow; ">
                            <b>{{ campo.nombre }}</b>
                        </div>
                        <div class="p-2 " style="width: 40%; ">
                            {{ recipeData[campo.valor] }}
                        </div>

                    </div>

                </div>
                

            </div>





        </div>


        <DataTable showGridlines :value="recipeData.ingredient_details" paginator :rows="10" dataKey="id"
            
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} recipees" responsiveLayout="scroll"
            scrollable :frozenValue="lockedCustomers"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" :loading="loading">



            <div class="flex flex-column gap-3 align-items-end">
                <span> <b>Columnas visibles</b> </span>
                <MultiSelect style="width: 20rem;" :options="columns" v-model="visibleColumns" optionLabel="header" />

            </div>
            <template #header>

                <div class="flex justify-content-between">


                    <span>Ingredientes</span>
                    <div>

                     
                    </div>
                </div>






            </template>
            <template #loading>

                <ProgressSpinner style="width: 100px;background-color: transparent; color: transparent; height: 100px"
                    strokeWidth="5" fill="transparent" animationDuration=".3s" aria-label="Custom ProgressSpinner" />
            </template>

            <Column class="p-3 px-2" field="" header="Foto" style="min-width: 3rem">
                <template #body="{ data }">
                    <!-- {{ data.name }} -->
                    <img style="width: 2rem; height: 2rem; aspect-ratio: 1 / 1; object-fit:cover;border-radius: 0.5rem;"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV84QloLgfvrli6GpuJoJlvB-bicUpq2H6QAS80K6Rw&s"
                        alt="">
                </template>

            </Column>


            <div v-for="column in columns">

                <Column v-if="visibleColumns.some(col => col.header == column.header)" class="p-1 px-2"
                    :field="column.field" :header="column.header" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data[column.field] }}
                    </template>
                </Column>

            </div>


        </DataTable>

    </div>





</template>




<script setup>
import { onMounted, ref } from "vue";
import { recipesService } from "../../../service/inventory/recipesService";
import { useRoute } from "vue-router";
// import Loading from "../../../components/Loading.vue"
const recipeData = ref([])
const route = useRoute()
const recipe_id = route.params.recipe_id



const columns = [
    { field: 'ingredient_name', header: 'Nombre' },
    { field: 'unit_of_measure', header: 'Unidad de medida' },
    { field: 'quantity', header: 'Cantidad' },
    { field: 'purchasing_price', header: 'Precio de compra' },
    { field: 'net_gross_weight', header: 'Peso bruto neto' },
    { field: 'cost_per_units', header: 'Costo por unidad' },
    { field: 'total_cost', header: 'Costo total' },
]


const visibleColumns = ref([...columns])






const camposIzq = ref([
    { nombre: "Fecha:", valor: 'date' },
    { nombre: "Tamaño de la porción:", valor: 'portion_size' },
    { nombre: "Número de porciones:", valor: 'portion_number' },
    { nombre: "Tiempo de preparación:", valor: 'preparation_time' },
    { nombre: "Tiempo de cocción:", valor: 'cooking_time' },
    { nombre: "Temperatura de servicio:", valor: 'service_temperature' }
]
)


const camposDer = ref(
    [
        { nombre: "Precio de venta:", valor: 'selling_price' },
        { nombre: "Impuestos:", valor: 'taxes' },
        { nombre: "peso de venta neto:", valor: 'presentation' },
        { nombre: "Costo total de la receta:", valor: 'preparation_equipment' },
        { nombre: "% Costo de la receta:", valor: 'otro valor' },
        { nombre: "Margen de beneficio neto:", valor: 'otro valor' }
    ]

)




onMounted(async () => {
    recipeData.value = await recipesService.getRecipeDatasheet(recipe_id)
})
</script>