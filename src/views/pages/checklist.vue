<template>
    <div class=" m-0 p-0 md:p-4">

<!-- {{ checklist }} -->
        <!-- {{ audits }} -->
        <DataTable  :value="checklist" tableStyle="min-width: 50rem" class="p-0" 
        
       dataKey="id" :paginator="true"
                    :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 100]"
                    currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} listas"
                    responsiveLayout="scroll" scrollable     
        
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Checklists</span>
                    <!-- <Button icon="pi pi-refresh" rounded raised /> -->
                    <Button  icon="pi pi-plus" rounded raised @click="showCreateChecklistDialog" />

                </div>
            </template>


            <Column header="Id">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.checklist_id }}
                </template>
            </Column>

            <Column header="Nombre del checklist" >
                <template #body="slotProps" >
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    <p style="text-transform: uppercase;">{{ slotProps.data.checklist_name }}</p>
                    
                </template>
            </Column>

            <Column header="Grupos de Items" class="">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    
                    <p style="text-transform: uppercase;" class="py-0 my-0" v-for="(grupo,index) in slotProps.data.groups">
                      {{ grupo.group_name }} {{ "" }}

                        

                    </p>
                </template>
            </Column>


            



            <Column class="p-0 m-0" field="inventoryStatus" header="Mas detalles" style="min-width:7rem;">
                <template #body="slotProps">
                    <Button @click="openCheckList(slotProps.data.checklist_id)" text severity="help">
                        <i
                            class="fa-solid fa-eye text-2xl"></i><!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" /> -->

                    </Button>
                </template>
            </Column>


            <!-- <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column> -->
            <!-- <template #footer> In total there are {{ products ? products.length : 0 }} products. </template> -->
        </DataTable>
    </div>




    <!-- <Button label="Show" @click="visibleAuditInfo = true" /> -->

    <Dialog v-model:visible="visibleChecklistInfo" modal header="DETALLES" :style="{ width: '30rem' }">

        <!-- Iterar sobre las listas de verificación -->

        <!-- {{currentChecklist[0].checklist_name }} -->

        <!-- {{ currentChecklist }} -->

        <h5> <b style="text-transform: uppercase;"> {{ currentChecklist.checklist_name }}</b></h5>

        <div v-for="grupo in currentChecklist.groups">
        
            <h6 class="py-0 mt-4"  style="text-transform: uppercase;font-weight: bold">{{ grupo.group_name }}</h6>

            <div v-for=" item in grupo.items" class="my-0 py-0 ">
               
                <ul class="my-0 py-0">
                    <li class="" style="">
                        <h6 class="my-0 py-0" >
                            {{ item.item_description }}
                         </h6> 
                    </li>
                </ul>
              
            
            </div>

        
        
        
        </div>

 


</Dialog>












    <!-- Botón para abrir el diálogo de creación de checklist -->

    <!-- Diálogo para crear un nuevo checklist -->
    <Dialog v-model:visible="createChecklistDialogVisible" header="Crear Checklist" :modal="true">
        <div class="field">
            <label for="checklistName">Nombre del Checklist</label>
            <InputText style="font-weight: bold;text-transform: uppercase;" class="col-12" id="checklistName" v-model="newChecklist.name" />
        </div>

        <div class="ml-5" v-for="(group, groupIndex) in newChecklist.groups" :key="groupIndex">
            <div class="field my-5">

                <!-- <p class="text-xl text-center"><b>{{ group.name }} </b></p>  -->
                <!-- <label class="mr-3" :for="'groupName' + groupIndex">Nombre del Grupo</label> -->
                <!-- <p>{{group.name}}</p> -->
                 <div class="input-group" style="display:flex; align-items:center;justify-content: space-between;">
                    <InputText style="font-weight: bold;text-transform: uppercase;" placeholder="nombre del grupo" class="col-10" :id="'groupName' + groupIndex" v-model="group.name" />
                    <Button severity="danger"  style="width: 3rem; height: 3rem; border-radius: 5rem; aspect-ratio: 1 / 1;" class="input-group-button   " icon="pi pi-times" @click="removeGroup(groupIndex)" />
                </div>
          
            </div>

            <Divider> Items de {{ group.name }}</Divider>
            <div v-for="(item, itemIndex) in group.items" :key="itemIndex">
                


                <div class="input-group my-2 col-12 p-0" style="display:flex;gap: 1rem; align-items:center;justify-content: space-between;">
                    <InputText style="width: 100%;" placeholder="descripcion" class=" " :id="'groupName' + groupIndex"  v-model="item.description" />
                    <Button severity="danger"  style="min-width: 3rem; height: 3rem; border-radius: 50%;aspect-ratio: 1 / 1;" class="input-group-button " icon="pi pi-times" @click="removeItem(group, itemIndex)" />
                </div>






            </div>
            <div class="col-12 p-0" style="display: flex;justify-content: end; ">
                <Button style="height:3rem;width: 3rem; height: 3rem; border-radius: 50%;" icon="pi pi-plus " severity="info"  @click="addItem(group)" />

            </div>
        </div>
        <div class="grid gap-2 my-4">

            <div class="col-12 py-0">  <Button severity="help" class="col-12" label="Añadir Grupo" @click="addGroup" /></div>
            <div class="col-12 py-0">  <Button severity="success" class="col-12" label="Guardar" @click="saveChecklist" /></div>
            <div class="col-12 py-0">  <Button severity="danger" class="col-12" label="Cancelar" @click="cancelChecklistCreation" /></div>
           
        <!-- Botones para guardar o cancelar -->
           
           
        </div>
        
    </Dialog>



</template>

<script setup>
import { ref, onMounted } from 'vue';

import { Auditservice } from '@/service/auditService';
import { URI } from '@/service/conection.js'
import {useReportesStore} from '@/store/reportes.js'

const store = useReportesStore()

const seeAudit = (audit) => {
    visibleChecklistInfo.value = true
    currentAudit.value = audit

    Auditservice.getChecklistWithItems(1).then(data => currentChecklist.value = data)
}

const visibleChecklistInfo = ref(false)
const audits = ref()

const currentAudit = ref({})
const currentAuditInfo = ref({})
const currentChecklist = ref({})
const checklist = ref([{}])


const openCheckList = (checklist_id) => {
  visibleChecklistInfo.value = true
  Auditservice.getChecklistWithItems(checklist_id).then(data => currentChecklist.value = data)

}

onMounted(() => {
    Auditservice.getAudits().then(data => audits.value = data);
    Auditservice.getChecklist().then(data => {
        // Aquí se realiza la comprobación
        checklist.value = Array.isArray(data) ? data : [];
    });
});






const createChecklistDialogVisible = ref(false);
const newChecklist = ref({
    name: '',
    groups: []
});

const showCreateChecklistDialog = () => {
    createChecklistDialogVisible.value = true;
};

const addGroup = () => {
    newChecklist.value.groups.push({
        name: '',
        items: []
    });
};

const addItem = (group) => {
    group.items.push({
        description: '',
        group_id: 0 // Ajusta según la lógica de tu backend
    });
};

const removeGroup = (index) => {
    newChecklist.value.groups.splice(index, 1);
};

const removeItem = (group, index) => {
    group.items.splice(index, 1);
};

const saveChecklist = async () => {
    const url = `${URI}/checklists-with-groups-and-items`; // Asegúrate de que URI esté definido correctamente
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newChecklist.value)
    };

    try {
            store.setLoading(true, 'guardando')

        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Checklist guardado con éxito:', data);
        createChecklistDialogVisible.value = false;
            Auditservice.getChecklist().then(data => {
        // Aquí se realiza la comprobación
        checklist.value = Array.isArray(data) ? data : [];
            store.setLoading(false, 'guardando')

    });

        // Aquí podrías actualizar tu UI o estado para reflejar la adición del nuevo checklist
    } catch (error) {
        console.error('Error al guardar el checklist:', error);
            store.setLoading(false, 'guardando')

        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
    }
};


const cancelChecklistCreation = () => {
    createChecklistDialogVisible.value = false;
};






</script>
