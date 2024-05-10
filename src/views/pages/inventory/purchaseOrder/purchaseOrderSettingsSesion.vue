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
                <Button @click="disableItem(currentDelete.item_id)" severity="danger" label="Borrar"> </Button>
            </div>
        </template>
    </Dialog>

    <div class="m-2">
        <DataTable style="max-width:1000px;border-radius:0.5rem;min-height:70vh"  v-model:filters="filters" class="col-12 shadow-3 my-0 mx-auto" :value=" items" tableStyle="min-width:30rem">
            <template #header>
                <div style="display: flex;justify-content:center;align-items:center;">
                    <span style="text-transform: uppercase;"> {{router.params.sesion}} </span>
                </div>
            </template>
            <Column style="width: 10%;" class="py-1 px-0" field="item_id" header="Id"></Column>
            <Column style="width: 50%;" class="py-1 px-0" field="item_name" header="Nombre"></Column>
            <Column style="width: 20%;" class="py-1 px-0" field="unit_of_measure_name" header="Unidad de medida"></Column>

            <Column style="width: 20%;" class="py-1 px-0" field="item_name" header="">
            <template #body="item"  >
                <div style="display: flex; justify-content:end">
                    <!-- <Button text severity="warning" class="p-0" icon="pi pi-pencil"></Button> -->
                    <Button @click="prepareToDelete(item.data)" text severity="danger" class="p-0 nav-bar--button-black m-0 shadow-2" icon="pi pi-trash"></Button>
                    
                </div>
             
            </template>
            </Column>

            <!-- <Column style="width: 400%;" class="py-1 px-0" field="unit_measure" header="Unidad de medida"></Column> -->
            <template #footer> 

                <div class="col-12 p-0" style="display: flex; justify-content:end">
                    <Button @click="open" class="p-0"  severity="help" style="border-radius: 0.5rem;height:2rem; padding:0.3rem 0" icon="pi pi-plus"></Button>

                </div>
            </template>
        </DataTable>
        
    </div>
</template>


<script setup>
import {dailyInventoryReportsService} from '../../../../service/inventory/dailyInventoryService.js'
import { onMounted , ref,watch } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import {purchaseOrderService} from '../../../../service/inventory/purchaseOrderService'

import {useRoute} from 'vue-router'




const prepareToDelete = (item) => {
    
    currentDelete.value = item
    deleteDialogVisible.value = true

}

const disableItem = async(id) => {
    await purchaseOrderService.disableOrderPUrchaseItem(id)
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
    items.value = await purchaseOrderService.getAllpurchaseOrderItems(group_name)
    unitMeasures.value = await dailyInventoryReportsService.getAllDailyInventoryUnitMeasures()
}

onMounted( async() => {
    
    refresh()
    
})

watch(() => router.params.sesion , async(new_val) => {
    refresh()
})


const saveItem = async(item) => {
    const group_daily_inventory_item_id = router.params.id
    item.unit_measure_id = selectedUnit.value.id
    item.order_purchase_item_group_id = group_daily_inventory_item_id
    await purchaseOrderService.InsertPurchaserOrderItem(item)
    dialogVisible.value = false
    refresh()
    
}

initFilters();


const open = () => {
    dialogVisible.value = true
    refresh()
}


</script>


<style scoped>

.nav-bar--button-black{
    border-radius: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border: none;
    height: 2rem;

}
</style>