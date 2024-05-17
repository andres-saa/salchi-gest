<template>

    <Dialog class="mx-2" header="Nuevo item" style="width: 30rem;" modal v-model:visible="dialogVisible">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Nombre del Item</span>
            <InputText v-model="newItem.name"></InputText>

            <span>Unidad de medida </span>
            <Dropdown v-model="selectedUnit" optionLabel="name" :options="unitMeasures"></Dropdown>
        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="dialogVisible = false" severity="danger" label="Cerrar"> </Button>
                <Button @click="saveItem(newItem)" severity="help" label="Guardar"> </Button>
            </div>
        </template>
    </Dialog>

    <Dialog class="mx-2" header="Borrar item" style="width: 30rem;" modal v-model:visible="deleteDialogVisible">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Esta seguro de eliminar el item {{ currentDelete?.item_name}} ?</span>

        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="deleteDialogVisible = false" severity="help" label="No"> </Button>
                <Button @click="disableItem(currentDelete.id)" severity="danger" label="Borrar"> </Button>
            </div>
        </template>
    </Dialog>

    <div class="m-2">
        <DataTable style="max-width:1024px;border-radius:0.5rem;min-height:70vh"  v-model:filters="filters" class="col-12 shadow-3 my-0 mx-auto" :value=" items" tableStyle="min-width:30rem">
            <template #header>
                <div style="display: flex;justify-content:center;align-items:center;">
                    <span style="text-transform: uppercase;"> {{router.params.sesion}} </span>
                </div>
            </template>
            <Column style="width: 10%;" class="py-2 px-0" field="id" header="Id"></Column>
            <Column style="width: 50%;" class="py-2 px-0" field="item_name" header="Nombre"></Column>
            <Column style="width: 20%;" class="py-2 px-0" field="unit_of_measure_name" header="Unidad de medida"></Column>

            <Column style="width: 20%;" class="py-2 px-0" field="item_name" header="">
            <template #body="item"  >
             

                <div style="display: flex; justify-content:end">
                    <!-- <Button text severity="warning" class="p-0" icon="pi pi-pencil"></Button> -->
                    <Button @click="prepareToDelete(item.data)" style="height: 2rem;" severity="danger" class="p-0 nav-bar--button-black m-0 shadow-2" icon="pi pi-trash"></Button>
                    
                </div>
             
            </template>
            </Column>

            <!-- <Column style="width: 400%;" class="py-2 px-0" field="unit_measure" header="Unidad de medida"></Column> -->
            <template #footer> 

                <div class="col-12 p-0" style="display: flex; justify-content:end">
                    <Button @click="dialogVisible = true" class="" severity="help" style="border-radius: 0.5rem; height:2rem" icon="pi pi-plus"></Button>

                </div>
            </template>
        </DataTable>
        
    </div>
</template>


<script setup>
import {dailyInventoryReportsService} from '../../../../service/inventory/dailyInventoryService.js'
import { onMounted , ref,watch } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';

import {useRoute} from 'vue-router'




const prepareToDelete = (item) => {
    currentDelete.value = item
    deleteDialogVisible.value = true

}

const disableItem = async(id) => {
    await dailyInventoryReportsService.disableDailyItemInventory(id)
    deleteDialogVisible.value = false
    refresh()
}
 


const deleteDialogVisible = ref(false)
const currentDelete = ref({ })

const items = ref([])
const router = useRoute()
const filters = ref({})
const unitMeasures = ref([])
const newItem = ref({})
const dialogVisible = ref(false)
const selectedUnit = ref({})
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};


const refresh = async () => {
    const group_name = router.params.sesion
    items.value = await dailyInventoryReportsService.getAllDailyInventoryItems(group_name)
    items.value.filter(item => item.quantity != 0)
    unitMeasures.value = await dailyInventoryReportsService.getAllDailyInventoryUnitMeasures()
    alert(3)
}

onMounted( async() => {
    
    refresh()
    
})

watch(() => router.params.sesion , async(new_val) => {
    refresh()
})


const saveItem = async(item) => {
    const group_daily_inventory_item_id = router.params.id
    item.daily_inventory_item_unit_measure_id = selectedUnit.value.id
    item.group_daily_inventory_item_id = group_daily_inventory_item_id
    await dailyInventoryReportsService.InsertDailyItemInventory(item)
    dialogVisible.value = false
    refresh()
    

}

initFilters();




</script>


<style scoped>


</style>