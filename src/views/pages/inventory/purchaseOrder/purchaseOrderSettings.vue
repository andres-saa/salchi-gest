<template>
    <Dialog class="mx-2" header="Nuevo grupo de items" style="width: 30rem;" modal v-model:visible="dialogVisible">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Nombre del grupo</span>
            <InputText v-model="newGroup.name"></InputText>
        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="dialogVisible = false" severity="danger" label="Cerrar"> </Button>
                <Button @click="saveGroup(newGroup)" severity="help" label="Guardar"> </Button>
            </div>
        </template>
    </Dialog>


    <Dialog class="mx-2" header="Nueva unidad de medida" style="width: 30rem;" modal v-model:visible="newUnitMeasureDialog">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Nombre de la unidad de medida</span>
            <InputText v-model="newUnitMeasure.name"></InputText>
        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="newUnitMeasureDialog = false" severity="danger" label="Cerrar"> </Button>
                <Button @click="saveUnitMearure(newUnitMeasure)" severity="help" label="Guardar"> </Button>
            </div>
        </template>
    </Dialog>

    <Dialog :closable="false" class="mx-2" header="UNIDADES DE MEDIDA" style="width: 40rem;" modal v-model:visible="dialogVisibleMeasure">


    
        <DataTable style="max-width:1000px;border-radius:0.5rem;min-height:min-content"  v-model:filters="filters" class="col-12 p-0" :value=" unitMeasures" tableStyle="">
            <template #header>
                <div style="display: flex;justify-content:center;align-items:center;">
                    UNIDADES DE MEDIDA
                </div>
            </template>
            <Column style="width: 10%;" class="py-1 px-0" field="id" header="Id">
            
                <template #body="data">
                    {{ data.data.id }}

                </template>
            </Column>

            <Column style="width: 10%;" class="py-1 px-0" field="id" header="Nombre">
            
                <template #body="data">
                    {{ data.data.name }}

                </template>
            </Column>


            <column style="width: 10%;height:2rem" class="py-1 px-0" >
            
                <template #body="item"  >
                    <div style="display: flex; justify-content:end">
                        <!-- <Button text severity="warning" class="p-0" icon="pi pi-pencil"></Button> -->
                        <Button @click="prepareToDeleteMeasure(item.data)" severity="danger" style="height: 2rem;" class="p-0 nav-bar-- m-0 shadow-2" icon="pi pi-trash"></Button>
                            
                    </div>
                 
                </template>
    
            </column>



            
            <template #footer> 

                <div class="col-12 p-0" style="display: flex; justify-content:end">
                    <Button @click="newUnitMeasureDialog = true" class="p-0"  severity="help" style="border-radius: 0.5rem;height:2rem; padding:0.3rem 0"  icon="pi pi-plus"></Button>
                </div>
            </template>
        </DataTable>


       


        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="dialogVisibleMeasure = false" severity="danger" label="Cerrar"> </Button>
            </div>
        </template>
    </Dialog>



    <Dialog class="mx-2" header="Borrar grupo" style="width: 30rem;" modal v-model:visible="deleteDialogVisible">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Esta seguro de eliminar el grupo {{ currentDelete?.name}} ?</span>
        
        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="deleteDialogVisible = false" severity="help" label="No"> </Button>
                <Button @click="disableGroup(currentDelete.id)" severity="danger" label="Borrar"> </Button>
            </div>
        </template>
    </Dialog>




    <Dialog class="mx-2" header="Borrar grupo" style="width: 30rem;" modal v-model:visible="deleteDialogUnitMeasure">

        <div class="" style="display: flex;flex-direction:column;gap:1rem">
            <span>Esta seguro de eliminar La unidad de medida {{ currentDeleteMeasure?.name}} ?</span>
        
        </div>

        <template #footer>
            <div style="display: flex; justify-content:end">
                <Button @click="deleteDialogUnitMeasure = false" severity="help" label="No"> </Button>
                <Button @click="disableUnitMeasure(currentDeleteMeasure.id)" severity="danger" label="Borrar"> </Button>
            </div>
        </template>
    </Dialog>



    <div class="m-auto"  style="display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:900px">
        <nav  class=" nav-bar  p-2 " style="width:100%; ">
            <ul class="p-2  " style="display:flex;gap:1rem;flex-wrap:wrap;">
             

                    <li style="position: relative; display:flex;justify-content:center; align-items:center;flex-basis:200" class="p-0 " v-for="(item, index) in items" :key="index">
                        
                        <Button @click="navigateToCategory(item.name,item.id)" :disabled="deleting" :class="isActive(item.name)? 'selected': ''"  class="nav-bar--button shadow-2"  :label="item.name"></Button>

                        <Button @click="prepareToDelete(item)" v-if="deleting && !isActive(item.name)" size="small" class="m-0 shadow-2"  severity="danger" icon="pi pi-times " style="position: absolute;width:1rem;height:1rem; left:-.5rem; padding:0.7rem;border-radius:50%"></Button>

                    </li>
                    

       
                
               
            </ul>
        </nav>

       

        <img v-if="routing.path == '/daily-inventory/daily-inventory-settings/'" style="height:60vh;object-fit:contain" src="/images/dailyMan.png" alt="">
    

        <router-view >
        </router-view>
    </div>
  
   

</template>


<script setup>


import {dailyInventoryReportsService} from '../../../../service/inventory/dailyInventoryService.js'
import {purchaseOrderService} from '../../../../service/inventory/purchaseOrderService'

import { onMounted , ref } from 'vue'
import router from '@/router/index.js';

import {useRoute} from 'vue-router'
import DailyInventoryReports from '../dailyInventory/dailyInventoryReports.vue';
const items = ref([])
const routing = useRoute()
const dialogVisible = ref(false)
const dialogVisibleMeasure = ref(false)
const deleteDialogVisible = ref(false)
const currentDelete = ref({ })
const currentDeleteMeasure  = ref({})
const unitMeasures = ref([])
const newUnitMeasureDialog = ref(false)
const deleteDialogUnitMeasure = ref(false)
const newUnitMeasure = ref({})



const refresh = async() => {
    items.value = await purchaseOrderService.getpurchaseOrderGroups()
    unitMeasures.value = await dailyInventoryReportsService.getAllDailyInventoryUnitMeasures()


}


const prepareToDelete = (item) => {
    currentDelete.value = item
    deleteDialogVisible.value = true

}


const prepareToDeleteMeasure = (item) => {
    currentDeleteMeasure.value = item
    deleteDialogUnitMeasure.value = true

}



const disableGroup = async(id) => {
    await purchaseOrderService.disablePurchaseGroupItems(id)
    deleteDialogVisible.value = false
    refresh()
}
 

const disableUnitMeasure = async(id) => {
    await dailyInventoryReportsService.disableUnitMeasureInventory(id)
    deleteDialogUnitMeasure.value = false
    refresh()
}
 

const deleting = ref(false)

const newGroup = ref({
    name:null
})

const navigateToCategory = (categoryName,category_id) => {
   
   router.push({ name: 'purchase-order-settings-sesion', params: { sesion: categoryName, id:category_id } });
   
};

const saveGroup = async(data) => {
    await purchaseOrderService.InsertDailyGrupPurchaseOrder(data)
    dialogVisible.value = false
    refresh()
}

const saveUnitMearure = async(data) => {
    await dailyInventoryReportsService.InsertDailyUnitMeasure(data)
    newUnitMeasureDialog.value = false
    refresh()
}


const isActive = (sesion) => {
    return routing.params.sesion == sesion
}

onMounted( async() => {
    items.value = await purchaseOrderService.getpurchaseOrderGroups()
    unitMeasures.value = await dailyInventoryReportsService.getAllDailyInventoryUnitMeasures()
    router.push(`/purchase-order/recorrido/purchase-order-settings/${items.value[0].name}/${items.value[0].id}/`)
})


</script>

<style scoped>

.nav-bar--button{
    border-radius: 0rem;
    padding: 0.3rem 1rem;
    background-color: rgb(232, 232, 232);
    color: rgb(122, 122, 122);
    border: none;
    box-shadow: none;
    outline: none;
    min-width: max-content;
}

button{
    text-transform: capitalize;
}
.nav-bar--button-black{
    border-radius: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: none;

}
.nav-bar--button-primary{
    border-radius: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: none;

}



.selected{
    background-color: var(--primary-color);
    color: white;
    border-radius: 0.3rem;
}
.nav-bar{
    overflow-x: auto;
    display: grid;
    

    border-radius: 0.5rem;
}

li{
    list-style: none;
}

ul{
    border-radius: 0.5rem;
}

</style>