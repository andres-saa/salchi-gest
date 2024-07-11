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

    <div  style="display:flex;flex-direction:column;justify-content:center;align-items:center">
        <nav  class=" nav-bar  p-2 " style="width:100%; max-width:1024px">
            <ul class="p-2  " style="display:flex;gap:1rem;flex-wrap:wrap;">
             

                    <li style="position: relative; display:flex;justify-content:center; align-items:center;flex-basis:200" class="p-0 " v-for="(item, index) in items" :key="index">
                        
                        <Button style="" @click="navigateToCategory(item.name,item.id)" :disabled="deleting" :class="isActive(item.name)? 'selected': ''"  class="nav-bar--button shadow-2"  :label="item.name"></Button>

                        <Button @click="prepareToDelete(item)" v-if="deleting && !isActive(item.name)" size="small" class="m-0 shadow-2"  severity="danger" icon="pi pi-times " style="position: absolute;width:1rem;height:1rem; left:-.5rem; padding:0.7rem;border-radius:50%"></Button>

                    </li>
                    

       
                
               
                <li class="p-0" style="display: flex;gap:1rem">
                    <Button  class="nav-bar--button-black m-0 shadow-2" @click="dialogVisible = true" icon="pi pi-plus" ></Button>

                    <Button  @click="deleting = !deleting" :style="!deleting? 'background-color: red;' : 'background-color: #22c55e;'"  class="nav-bar--button-black m-0 shadow-2" :icon="deleting? 'pi pi-check' : 'pi pi-trash'" ></Button>
                </li>
            </ul>
        </nav>

       

        <img v-if="routing.path == '/cdi-inventory/cdi-inventory-settings/'" style="height:60vh;object-fit:contain;width:100%;" src="/images/dailyMan.png" alt="">
    
    </div>
  
    <router-view >
    </router-view>

</template>


<script setup>


import {cdiInventoryReportsService} from '../../../../service/inventory/cdiInventoryService.js'
import { onMounted , ref } from 'vue'
import router from '@/router/index.js';

import {useRoute} from 'vue-router'
const items = ref([])
const routing = useRoute()
const dialogVisible = ref(false)
const deleteDialogVisible = ref(false)
const currentDelete = ref({ })



const refresh = async() => {
    items.value = await cdiInventoryReportsService.getCdiInventoryGroups()

}


const prepareToDelete = (item) => {
    currentDelete.value = item
    deleteDialogVisible.value = true

}



const disableGroup = async(id) => {
    await cdiInventoryReportsService.disableCdiGrupInventory(id)
    deleteDialogVisible.value = false
    refresh()
}
 

const deleting = ref(false)

const newGroup = ref({
    name:null
})

const navigateToCategory = (categoryName,category_id) => {
   
   router.push({ name: 'cdi-inventory-settings-sesion', params: { sesion: categoryName, id:category_id } });
   
};

const saveGroup = async(data) => {
    await cdiInventoryReportsService.InsertCdiGrupInventory(data)
    dialogVisible.value = false
    refresh()
}

const isActive = (sesion) => {
    return routing.params.sesion == sesion
}


onMounted(async() =>{

    await refresh()

}
)
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
    width: 100%;
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

@media (max-width:600px) {

    ul{
        justify-content:space-between
    }
    
}

</style>