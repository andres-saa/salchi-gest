
<template>



<ConfirmDialog></ConfirmDialog>


<Dialog v-model:visible="showCompletionDialog" header="Completar Mantenimiento" :modal="true" style="width: 30rem;">
  <form @submit.prevent="completeMaintenanceConfirmed">
    <div class="field">
      <label for="remarks">Comentarios</label>
      <InputText class="col-12" id="remarks" v-model="completionRemarks" required />
    </div>
    <Button type="submit" label="Confirmar" class="p-button-success" />
  </form>
</Dialog>



  <Dialog v-model:visible="showMaintenanceDialog" header="Agendar Nuevo Mantenimiento" :modal="true" style="width: 30rem;">
    <form @submit.prevent="createMaintenance">
      <!-- Selección de equipos -->
      <div class="field">
        <label>Equipos</label>
        <MultiSelect style="width: 100%; max-width: 100%;" v-model="newMaintenance.equipment_ids" :options="equipmentOptions" optionLabel="name" placeholder="Selecciona los equipos" required />
      </div>

      <!-- Selección de sedes adicionales -->
      <div class="field " v-if="sites.length > 1">
        <label for="additionalSites">Agregar a otras sedes</label>
        <MultiSelect style="width: 100%; max-width: 100%;" id="additionalSites" v-model="newMaintenance.sites" :options="siteOptions" optionLabel="site_name" placeholder="Selecciona sedes" @change="updatesites" />
      </div>

      
      <!-- Frecuencia de mantenimiento -->
      <div class="field p-0">
        <label for="frequency">Frecuencia anual</label>
        <InputNumber id="frequency " class="col-12 m-0 p-0 mb-6" v-model="newMaintenance.frequency" required placeholder="Ingresa la frecuencia" />
      </div>

      <!-- Fecha de mantenimiento por sede -->
      <div class="field " v-for="(siteMaintenance, index) in newMaintenance.sites" :key="siteMaintenance.site_id">
        <label>{{ getSiteName(siteMaintenance.site_id) }} - Fecha de mantenimiento</label>
        <Calendar style="width: 100%;" v-model="siteMaintenance.scheduled_date" :showIcon="true" required></Calendar>
      </div>




      <div class="col-12 p-0 mt-6">
        <Button  type="submit" label="Agendar Mantenimiento" class="col-12  p-button-success" />

      </div>
    </form>
  </Dialog>




        <DataTable stripedRows  class=" mb-4 mx-3 mt-6 "  
            style="border: none; margin: auto    ; padding: 0;" ref="dt"
            :value="maintenances"  dataKey="id" :paginator="true" :rows="10"
            :filters="filters"
            scrollable
            responsiveLayout="scroll"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} archivos" 
           >
    
    
    
    
           <div class="col-12 p-0 mb-4" style="display: flex; justify-content: end;">
    <Button label="Agendar" @click="openCreate" icon="pi pi-calendar-plus" class="p-button-success" />


  </div>

    
    
            <!-- <template #header  >

    
    
             
    
    
    
               
            </template>
     -->
            <!-- <Column class="p-2 px-5" selectionMode="multiple" headerStyle="width: 3rem; " frozen></Column> -->
    
            <Column class="p-2 px-5" field="id" header="Id" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    <span class="p-column-title">Code</span>
                    {{ maintenance.data.maintenance_id }}
                </template>
            </Column>
    
    
            

           
    

            <!-- <Column class="p-2" field="id" header="" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    {{ maintenance.data }}
                </template>
            </Column> -->

            <Column class="p-2 px-5" field="id" header="Fecha" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                  <p style="min-width: max-content;">
                    {{ maintenance.data.scheduled_date }}
</p>
                </template>
            </Column>


            
            <Column class="px-5 " field="id" header="Sede" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                  <p class="">
                    {{ store.currentSite.site_name?.toUpperCase() }}

                  </p>
                </template>
            </Column>


            <Column class="p-2 px-5" field="id" header="Equipos" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    <div style="display: flex; gap: 1rem;">
                        <div v-for="eq in maintenance.data.equipment " >
                        <div style="display: flex;align-items: center; flex-direction: column;">
                            <img style="width: 3rem; aspect-ratio: 1 / 1; object-fit: cover;border-radius: 0.5rem;" :src="`${URI}/read-product-image/300/${eq.name}-${eq.brand}`" alt="">
                            <p style="min-width: max-content;"> 
                               
                                {{ eq.name }}
                               
                            </p> 

                        </div>
                    </div>
                    </div>
                    
                    
                </template>
            </Column>

            <Column class="p-2 px-5" field="id" header="Frecuencia" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    {{ maintenance.data.frequency }}
                </template>
            </Column>

            <Column class="p-2 px-5" field="id" header="Estado" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                  <tag :severity="maintenance.data.completed? 'success' : 'warning'" >
                    {{  maintenance.data.completed? "COMPLETADO" : maintenance.data.status   }}
                  </tag> 
                </template>
            </Column>


           
    

            <Column class="p-2 px-5" field="file_name" header="Observaciones" :sortable="true"
                headerStyle="width:min-content; min-width: 20rem; ">
                <template #body="maintenance">
                    <span class="p-column-title">Code</span>
                    {{ maintenance.data.remarks || 'Agendado' }}
                </template>
            </Column>


            <Column class="p-2 px-5" field="action" header="acciones" :sortable="true"
                headerStyle="width:min-content; min-width: 20rem; ">
                <template #body="maintenance">
                  <Button v-if="!maintenance.data.completed" icon="fa-solid fa-check" size="small" severity="success" label="marcar como completado" @click="requestCompletion(maintenance)"></Button>
                </template>
            </Column>
    
            <!-- <Column class="p-2" field="file_name" header="Nombre" :sortable="true"
                headerStyle="width:min-content; min-width:20rem; ">
                <template #body="maintenance">
                    <span class="p-column-title">Code</span>
                    {{ maintenance.data.file_name }}
                </template>
            </Column>
    
    
            <Column class="p-2" field="type" header="Tipo" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    <span class="p-column-title">Code</span>
                    {{ maintenance.data.type_name }}
                </template>
            </Column>
    
            <Column class="p-2" field="type" header="Area" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="maintenance">
                    <span class="p-column-title">Code</span>
                    {{ maintenance.data.area_name }}
                </template>
            </Column>
     -->
    

    
        </DataTable>

</template>

<script setup>
import { ref, onMounted,onBeforeMount, watch } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { maintenanceService,equipmentService } from '../../../service/maintenance';
import { maintenanceStore } from '../../../store/maintenance';
// import { CustomerService } from '@/service/CustomerService';
import { useReportesStore } from '../../../store/reportes';
import { siteService } from '../../../service/siteService';
import { URI } from '../../../service/conection';
import { useConfirm } from 'primevue/useconfirm';

const store = maintenanceStore();
const loading = useReportesStore();
const sites = ref([]);
const equipment = ref([]);
const showMaintenanceDialog = ref(false);
const newMaintenance = ref({
  equipment_ids: [],
  sites: sites.value.map(site => ({
    site_id: site.site_id,
    date: null
  }))
});

const equipmentOptions = ref([]);
const siteOptions = ref([]);
const filters = ref(null);




onMounted(async () => {
  // Carga inicial de datos para mantenimientos y sitios
  sites.value = await siteService.getSites();
  siteOptions.value = sites.value.map(site => ({ site_id: site.site_id, site_name: site.site_name }));
  maintenances.value = await maintenanceService.getMaintenanceBySite(store.currentSite.site_id);
  loadEquipment(store.currentSite.site_id);

  // Inicialización de filtros
  initFilters();
});


// const representatives = ref([
//     { name: 'Amy Elsner', image: 'amyelsner.png' },
//     { name: 'Anna Fali', image: 'annafali.png' },
//     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
//     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
//     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
//     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
//     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
//     { name: 'Onyama Limba', image: 'onyamalimba.png' },
//     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
//     { name: 'XuXue Feng', image: 'xuxuefeng.png' }
// ]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
// const loading = ref(true);
const maintenances = ref( [ ] )





watch(store.currentSite, (newSite) => {
  loadEquipment(newSite.site_id);
});


watch(
  () => newMaintenance.value.equipment_ids,
  async (newEquipmentIds, oldEquipmentIds) => {
    console.log('Equipos cambiados', newEquipmentIds);
    if (newEquipmentIds?.length > 0) {
      const temp_equipment = [...newMaintenance.value.equipment_ids]
      const names = temp_equipment.map(e => e.name)
      siteOptions.value = await equipmentService.getSitesWithAllEquipmentByNames(names);
    } else {
      siteOptions.value = [];
    }
  },
  { deep: true } // Observar cambios profundos dentro del array
);


watch(() => store.currentSite, async(newval) => {
    maintenances.value = await maintenanceService.getMaintenanceBySite(newval.site_id)


})


















const confirmationService = useConfirm()



const showCompletionDialog = ref(false);
const completionRemarks = ref('');
const maintenanceToComplete = ref(null);

const requestCompletion = (maintenance) => {
  maintenanceToComplete.value = maintenance;
  confirmationService.require({
    message: '¿Estás seguro de que deseas marcar este mantenimiento como completado?',
    accept: () => {
      showCompletionDialog.value = true;
    }
  });
};

const completeMaintenanceConfirmed = async () => {
  if (maintenanceToComplete.value) {
    await resolveMaintenance(maintenanceToComplete.value.data.maintenance_id, completionRemarks.value);
    showCompletionDialog.value = false;
    completionRemarks.value = '';  // Limpia los comentarios para la próxima vez
  }
};

const resolveMaintenance = async (maintenanceId, remarks) => {
  // Llama a la función del servicio para completar el mantenimiento
  await maintenanceService.completeMaintenance(maintenanceId, remarks);
  // Recargar los mantenimientos para reflejar el cambio
  maintenances.value = await maintenanceService.getMaintenanceBySite(store.currentSite.site_id);
};

















onBeforeMount(() => {
  initFilters();
});



watch(store.currentSite, (newSite) => {
  loadEquipment(newSite.site_id);
});





















































const openCreate = () => {
    newMaintenance.value = {}
    showMaintenanceDialog.value = true
}








const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  };
};

onBeforeMount(() => {
  initFilters();
});

watch(store.currentSite, (newSite) => {
  loadEquipment(newSite.site_id);
});

const loadEquipment = async (siteId) => {
  equipment.value = await equipmentService.getEquipmentBySite(siteId);
  equipmentOptions.value = equipment.value.map(eq => ({ equipment_id: eq.equipment_id, name: eq.name }));
};

const createMaintenance = async () => {

  if (newMaintenance.value.sites.some(siteMaintenance => !siteMaintenance.scheduled_date) || newMaintenance.value.equipment_ids.length === 0) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }

  const temp_equipment = [...newMaintenance.value.equipment_ids]

  newMaintenance.value.equipment_ids = temp_equipment.map(e => e.equipment_id)

  const temp_sites = [...newMaintenance.value.sites]

  newMaintenance.value.sites.forEach(site => {
    if (site.scheduled_date) {
      // Ajustar la fecha para eliminar la hora, minutos, segundos y milisegundos
      const date = new Date(site.scheduled_date);
      date.setHours(0, 0, 0, 0);
      site.scheduled_date = date.toISOString().split('T')[0];
      site.equipment_ids = temp_equipment.map(s => s.equipment_id)  // Conserva solo la parte de la fecha
    } else {
      // Marcar como inválido si alguna fecha está ausente
    }
  });
  newMaintenance.value.status='AGENDADO'
  newMaintenance.value.completed=false




  
  loading.setLoading(true, 'Agendando mantenimiento');
  showMaintenanceDialog.value = false;
  loading.setLoading(false, 'Agendando mantenimiento');

  await maintenanceService.createMaintenanceRecord(newMaintenance.value);
  maintenances.value = await maintenanceService.getMaintenanceBySite(store.currentSite.site_id);


};

const getSiteName = (siteId) => {
  const site = sites.value.find(s => s.site_id === siteId);
  return site ? site.site_name : 'Nombre no encontrado';
};



watch(() => store.currentSite.site_id, () => {


  if (store.currentSite.site_id){
    loadEquipment(store.currentSite.site_id)
  }


}, {deep:true})








</script>


<style  scoped>

column *{
  min-width: max-content;
  padding: 0 3rem;
}
</style>