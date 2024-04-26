<template>

    <!-- {{ totalList.length }} -->
<div class="md:justify-content-center mb-4 rounded-pill shadow-3 mx-auto py-0 px-6 my-4" style="background-color: white; display: flex;overflow-x: auto; align-items: center; max-width: min-content;">
    <span class="px-4" style="font-weight: bold;">
        CALIDOMETRO
    </span>

    <span class="px-4" style="font-weight: bold;gap:0.5rem; align-items: center;display: flex;">
        <span class="p-0 m-0"> SEDES</span>
        
        <InputSwitch v-model="calidometoSedes" class="p-0 m-0"></InputSwitch>
    </span>

    <span class="px-4" style="font-weight: bold;gap: 0.5rem; align-items: center;display: flex;">
        <span class="p-0 m-0"> COORDINADORES</span>
        
        <InputSwitch v-model="calidometroCoordinatos" class="p-0 m-0"></InputSwitch>
    </span>

    <span class="text-xl">
        |
    </span>
   
    
    <span style="display: flex;align-items: center;">
        <span class="px-4" style="font-weight: bold;">
        VISTA
    </span>
        <Dropdown  :options="vistas" optionLabel="name" v-model="vista" style="min-width: 10rem;box-shadow: none; background-color:transparent;border: none;font-weight: bold;"></Dropdown>
    </span>


    <span class="text-xl">
        |
    </span>

    <span style="display: flex;align-items: center;">
        <span class="px-4" style="font-weight: bold;">
        COLUMNAS
    </span>

        <MultiSelect placeholder="Columnas" :options="columns"  v-model="selectedColums" style="max-width: 0rem;box-shadow: none; background-color:transparent;border: none;font-weight: bold;"/>
    </span>
  

</div>
   




    <div v-if="calidometroCoordinatos" class="px-2 md:px-4 mb-2 pb-2 md:justify-content-center" style="display:  flex;gap: 2rem; overflow-x: auto; ">
        <div style="display: flex;align-items: center; flex-direction: column;justify-content: center;gap:0.5rem" v-for=" coordinador in coordinators">
           

            <div class="cara" style="width: min-content;position: relative; align-items: center;display: flex; justify-content: center;">
                <Knob :strokeWidth="10"  valueTemplate="" v-model="value" readonly />
                <img class="p-4" style="width: 7rem;z-index: -1; aspect-ratio: 1/1;position: absolute; object-fit: cover; border-radius: 50%;" :src="`${URI}/read-product-image/96/employer-${coordinador.dni}`"  @error="onImageError(coordinador.gender, $event)">
            </div>
            <span style="width: max-content;font-weight: bold;">  {{ coordinador.name.split(' ').slice(0,2).join(' ') }}</span>
    </div>
    </div>
 
 
    <div v-if="calidometoSedes" class="px-2 md:mx-4 mb-2 pb-2" style="display:  flex;gap: 2rem;justify-content: ; overflow-x: auto; ">
        <div style="display: flex;align-items: center; flex-direction: column;justify-content: center;gap:0.5rem" v-for=" site in sites">
           

            <div class="cara" style="width: min-content;position: relative; align-items: center;display: flex; justify-content: center;">
                <Knob :strokeWidth="10"  valueTemplate="" v-model="value" readonly />
                <img class="p-4" style="width: 7rem;z-index: -1; aspect-ratio: 1/1;position: absolute; object-fit: cover; border-radius: 50%;" :src="`${URI}/read-product-image/96/site-${site.site_id}`">
            </div>
            <span style="width: max-content;font-weight: bold;">  {{ site.site_name }}</span>
    </div>
    </div>

    <div class=" m-0 p-0 md:p-4">

        <DataTable style="" v-if="vista.id == 2" :value="audits" tableStyle="min-width: 50rem" class="p-0" dataKey="id"
            :paginator="true" :rows="10" :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} Auditorias"
            responsiveLayout="scroll" scrollable>
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Auditorias</span>
                </div>
            </template>


            <Column v-if="selectedColums.includes('Coordinador')" class="mx-3" header="Coordinador" headerStyle="min-width:20rem">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                   <span style="min-width: max-content;"> {{ slotProps.data.audits[0].coordinator_name }}</span> 
                </template>
            </Column>


            <Column v-if="selectedColums.includes('Sede')" header="Sede" class="py-0 px-3" headerStyle="min-width:10rem">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.audits[0].site_name }}
                </template>
            </Column>


            <Column v-if="selectedColums.includes('Fecha')" header="Fecha" class="p-0 m-0"  style="min-width:10rem;">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.audits[0].audit_date }}
                </template>
            </Column>

            <Column v-if="selectedColums.includes('Calificacion Sede')" class="p-0 m-0" field="rating" header="Calificacion Sede"  style="min-width:12rem">
                <template #body="slotProps">

                    <div style="display: flex; gap: 1rem; justify-content: space-between; align-items: center;">

                    <Tag :severity="calcSeverity(slotProps.data.audits.length)"  class="text-xl " style="font-weight: bold;min-width: max-content; height: min-content;">  {{ slotProps.data.audits.length }} / {{ totalList.length }}</Tag> 
                 
                    <Rating color="red" :cancel="false" :modelValue="slotProps.data.audits.length" />

                </div>
                </template>
            </Column>

            <Column v-if="selectedColums.includes('Rendimiento coordinador')" class="px-3 m-0" field="rating" header="Rendimiento coordinador"  style="min-width:12rem">
                <template #body="slotProps">
                    <div style="display: flex; gap: 1rem; justify-content: space-between; align-items: center;">
                        <Tag :severity="calcSeverity((5/totalList.length) * slotProps.data.audits.length)"  class="text-xl" style="font-weight: bold;min-width: max-content; height: min-content;">  {{ slotProps.data.audits.length }} / {{ totalList.length }}</Tag> 
                        <Rating :cancel="false" :modelValue=" (5/totalList.length) * slotProps.data.audits.length" />
                    </div>
                  

                </template>
            </Column>


            <Column v-if="selectedColums.includes('Checklists Realizados')" class="py-2 m-0" field="rating" header="Checklists Realizados"  style="min-width:50rem">
                <template #body="slotProps">
                    <div style="display: grid; grid-template-columns: auto auto auto auto auto;" >
                        <span  class="" v-for="(audit, index) in slotProps.data.audits" style="min-width: max-content;">
                        <span class="mr-4 text-sm" style="min-width: max-content;"> <b>{{ index + 1  }}.  </b>{{ audit.checklist_name }} <i class="pi pi-check"></i>  </span>   
                        </span>
                    </div>
                </template>
            </Column>

            
            <Column v-if="selectedColums.includes('Checklists Faltantes')" class="py-2 m-0" field="rating" header="Checklists Faltantes"  style="min-width:50rem">
                <template #body="slotProps">
                    <div style="display: grid; grid-template-columns: auto auto auto auto auto;" >
                        <span  class="" v-for="(audit, index) in slotProps.data.audits" style="min-width: max-content;">
                        <span class="mr-4 text-sm" style="min-width: max-content;"> <b>{{ index + 1  }}.  </b>{{ audit.checklist_name }} <i class="pi pi-times"></i>  </span>   
                        </span>
                    </div>
                </template>
            </Column>
     

            <Column  class="p-0 m-0" field="inventoryStatus" frozen  alignFrozen="right" header="Acciones" sortable style="">
                <template #body="slotProps">
                    <div style="display: flex;">
                        <Button @click="seeAudit(slotProps.data.audits[0])" text severity="help">
                            <i
                                class="fa-solid fa-eye text-2xl"></i><!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" /> -->

                        </Button>

                        <!-- <Button @click="deleteAudit(slotProps.data)" text icon="fa-solid fa-trash text-2xl"
                            class="p-button-danger" /> -->

                    </div>

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
        </DataTable>

        <DataTable v-else :value="auditIndividual" tableStyle="min-width: 50rem" class="p-0" dataKey="id"
            :paginator="true" :rows="10" :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} Auditorias"
            responsiveLayout="scroll" scrollable>
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Auditorias</span>
                </div>
            </template>


            <Column header="Coordinador">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.coordinator_name }}
                </template>
            </Column>


            <Column header="Sede" class="p-0 m-0">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.site_name }}
                </template>
            </Column>


            <Column header="Fecha" class="p-0 m-0">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.audit_date }}
                </template>
            </Column>


            <Column header="Checklist" class="p-0 m-0">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.checklist_name }}
                </template>
            </Column>

            <Column class="p-0 m-0" field="rating" header="Calificacion" sortable style="min-width:12rem">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.score" />

                </template>
            </Column>



            <Column class="p-0 m-0" field="inventoryStatus" header="Acciones" sortable style="">
                <template #body="slotProps">
                    <div style="display: flex;">
                        <Button @click="seeAuditIndividual(slotProps.data)" text severity="help">
                            <i
                                class="fa-solid fa-eye text-2xl"></i><!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" /> -->

                        </Button>

                        <Button @click="deleteAudit(slotProps.data)" text icon="fa-solid fa-trash text-2xl"
                            class="p-button-danger" />

                    </div>

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
        </DataTable>




    </div>

    <Dialog class="mx-2" v-model:visible="visibleAuditInfo" modal header="Detalles de la Auditoría"
        :style="{ width: '40rem' }">

        <template v-if="currentAuditInfo">


            <div class="">

                <h4 style="text-transform: capitalize;"><b>{{ currentAudit.site_name?.toLowerCase() }} - {{
                    currentAudit.coordinator_name?.toLowerCase() }}</b></h4>
                <p class="text-xl"><b>Fecha de auditoría:</b> {{ currentAudit.audit_date }}</p>



                <h5 v-if="currentAuditInfo[1]?.length > [0]"><b>Pendientes</b></h5>

                <div v-for="(warning, warningIndex) in currentAuditInfo[1]" :key="warningIndex">

                    <ul class="p-0">
                        <li style="list-style: none;" class="my-2 p-0">
                            <!-- <Checkbox class="" :binary="true"></Checkbox> -->

                            <Tag class="" :severity="warning.resolved ? 'succes' : 'danger'"> {{ warning.resolved ?
                                'resuelto': 'pendiente'}}</Tag>

                            <br>
                            <span>
                                {{ warning.item_description }}
                            </span>


                            <div v-if="warning.warning_text">
                                <div style="list-style: none;" class="text-danger">

                                    <p class="py-0 my-0" style="font-weight: bold;"> ({{ warning.warning_date }})</p>

                                    <span style="color:red"> {{ warning.warning_text }} </span>
                                </div>
                            </div>


                        </li>
                    </ul>
                </div>

                <div v-for="(group, index) in currentAuditInfo[0]" :key="index">


                    <h5 v-if="group?.items?.some(elem => elem?.status)"><b>{{ group.group_name }}</b></h5>
                    <ul class="p-0">

                        <li style="list-style: none;" class="my-2 p-0" v-for="(item, itemIndex) in group.items"
                            :key="itemIndex">




                            <div class="col-12 p-0" style="display: flex; gap: 1rem;" v-if="item.status">
                                <Checkbox class="" readonly v-model="item.status" :binary="true"></Checkbox>
                                <span>
                                    {{ item.description }}
                                </span>


                            </div>

                        </li>
                    </ul>
                </div>

            </div>


        </template>

        <template v-else>
            <p>Información de la auditoría no disponible.</p>
        </template>
    </Dialog>


    <Dialog v-model:visible="visibleAuditInfoInvidual" modal header="Detalles de la Auditoría"
        :style="{ width: '30rem' }">

        <!-- {{ currentAuditInfo }} -->
        <template v-if="currentAuditIndividual">



            <h4 style="text-transform: capitalize;"><b>{{ currentAuditIndividual.site_name?.toLowerCase() }} - {{
                currentAuditIndividual.coordinator_name?.toLowerCase() }}</b></h4>
            <p class="text-xl"><b>Fecha de auditoría:</b> {{ currentAuditIndividual.audit_date }}</p>



            <h5 v-if="currentAuditInfoIndividual[1]?.length > [0]"><b>Pendientes</b></h5>

            <div v-for="(warning, warningIndex) in currentAuditInfoIndividual[1]" :key="warningIndex">

                <ul class="p-0">
                    <li style="list-style: none;" class="my-2 p-0">






                        <Tag class="my-1" :severity="warning.resolved ? 'succes' : 'danger'"> {{ warning.resolved ?
                            'resuelto': 'pendiente'}}</Tag>

                        <br>
                        {{ warning.item_description }}






                        <ul v-if="warning.warning_text">
                            <li style="list-style: none;" class="text-danger">

                                <p class="py-0 my-0" style="font-weight: bold;"> ({{ warning.warning_date }})</p>

                                <span style="color:red"> {{ warning.warning_text }} </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div v-for="(group, index) in currentAuditInfoIndividual[0]" :key="index">


                <h5 v-if="group?.items?.some(elem => elem?.status)"><b>{{ group.group_name }}</b></h5>
                <ul class="p-0">

                    <li style="list-style: none;" class="my-2 p-0" v-for="(item, itemIndex) in group.items"
                        :key="itemIndex">

                        <!-- {{ group.items }} -->



                        <div v-if="item.status">
                            <Checkbox class="mr-3" readonly v-model="item.status" :binary="true"></Checkbox>
                            {{ item.description }}
                            <!-- {{ item.status }} -->
                        </div>

                        <!-- Mostrar advertencias -->
                        <!-- <ul v-if="item.warning_text">
                        <li class="text-danger">
                            {{ item.warning_text }} ({{ item.warning_date }})
                        </li>
                    </ul> -->
                    </li>
                </ul>
            </div>

            <!-- Mostrar advertencias adicionales -->


        </template>
        <template v-else>
            <p>Información de la auditoría no disponible.</p>
        </template>
    </Dialog>

</template>

<script setup>
import { ref, onMounted } from 'vue';

import { Auditservice } from '@/service/auditService';
import { URI } from '@/service/conection.js'
import { da } from 'date-fns/locale';
import { siteService } from '../../service/siteService';
import MultiSelect from 'primevue/multiselect';


const value = ref(40)
const coordinators = ref([])




const groupAudits = (audits) => {
    const grouped = {};
    audits.forEach(audit => {
        const groupKey = `${audit.site_name}-${audit.coordinator_name}-${audit.audit_date}`;
        if (!grouped[groupKey]) {
            grouped[groupKey] = { id: groupKey, audits: [{ ...audit }] };
        } else {
            grouped[groupKey].audits?.push(audit)
        }
    });
    return Object.values(grouped);
};

const seeAudit = async (audit) => {
    visibleAuditInfo.value = true
    currentAudit.value = audit

    // Auditservice.getAuditCheckGroupsWithItems(audit.id).then(data => currentAuditInfo.value = data)
    currentAuditInfo.value = await Auditservice.getAuditCheckGroupsWithItemsFiltered(audit.coordinator_id, audit.audit_date, audit.site_id)

}





const visibleAuditInfo = ref(false)
const audits = ref()

const currentAudit = ref({})
const currentAuditIndividual = ref({})
const currentAuditInfo = ref({})
const currentAuditInfoIndividual = ref({})
const auditIndividual = ref([])
const visibleAuditInfoInvidual = ref(false)
const totalList = ref(0)
const calidometoSedes = ref(false)
const calidometroCoordinatos = ref(true)



const onImageError = (gender, event) => {


const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
}


if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
} else
    event.target.src = genders[gender.trim().toLowerCase()]
}





const seeAuditIndividual = async (audit) => {
    visibleAuditInfoInvidual.value = true
    currentAuditIndividual.value = audit

    // Auditservice.getAuditCheckGroupsWithItems(audit.id).then(data => currentAuditInfo.value = data)
    currentAuditInfoIndividual.value = await Auditservice.getAuditCheckGroupsWithItems(audit.id)

}


const vistas = ref([
    { id: 1, name: 'INDIVIDUAL' },
    { id: 2, name: 'AGRUPADOS' }
])

const vista = ref(vistas.value[1])


const columns = ref([
    'Coordinador',
    'Sede',
    'Fecha',
    'Calificacion Sede',
    'Rendimiento coordinador',
    'Checklists Realizados',
    'Checklists Faltantes'


])

const selectedColums = ref([...columns.value])



onMounted(async () => {

    Auditservice.getAudits().then(data => {
        audits.value = groupAudits(data)
        console.log(groupAudits(data))

        auditIndividual.value = data


    })

    coordinators.value = await Auditservice.getCoordinators()
    totalList.value = await Auditservice.getChecklist()

})

const sites = ref([])

onMounted(async() => {
    sites.value = await siteService.getSites()
})




const deleteAudit = (audit) => {
    if (confirm(`Are you sure you want to delete the audit with ID: ${audit.id}?`)) {
        const deleteUrl = `${URI}/audits/${audit.id}`; // Construct the URL for deletion

        fetch(deleteUrl, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    // Handle response errors
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    // Successful deletion
                    // Remove the audit from the local state to update the UI
                    const index = audits.value.findIndex(a => a.id === audit.id);
                    if (index !== -1) {
                        audits.value.splice(index, 1);
                    }
                    console.log(`Audit with ID: ${audit.id} has been successfully deleted.`);
                }
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Error deleting audit:', error);
            });
    }
};


const calcSeverity = (number) => {
    // Redondeamos el número al entero más cercano
    const roundedNumber = Math.round(number);

    const severities = {
        0: "danger",
        1: "danger",
        2: "danger",
        3: "warning",
        4: "success",
        5: "success"
    };

    // Devuelve la severidad basada en el número redondeado
    // Si el número redondeado no está en el objeto, devuelve un valor por defecto, por ejemplo 'unknown'
    return severities[roundedNumber] || 'unknown';
}

</script>


<style scoped>
    *:focus{
        border: none;
        outline: none;
        box-shadow: none;
    }
</style>