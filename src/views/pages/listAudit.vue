<template>
    <div class=" m-0 p-0 md:p-4">

        <!-- {{ audits }} -->
        <DataTable :value="audits" tableStyle="min-width: 50rem" class="p-0" dataKey="id" :paginator="true" :rows="10"
            :filters="filters"
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
                    {{ slotProps.data.audits[0].coordinator_name }}
                </template>
            </Column>


            <Column header="Sede" class="p-0 m-0">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.audits[0].site_name }}
                </template>
            </Column>


            <Column header="Fecha" class="p-0 m-0">
                <template #body="slotProps">
                    <!-- <img :src="`${URI}/read-product-image/96/employer-1032`"> -->
                    {{ slotProps.data.audits[0].audit_date }}
                </template>
            </Column>

            <Column class="p-0 m-0" field="rating" header="Calificacion" sortable style="min-width:12rem">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.audits.length" />

                </template>
            </Column>



            <Column class="p-0 m-0" field="inventoryStatus" header="Acciones" sortable style="">
                <template #body="slotProps">
                    <div style="display: flex;">
                        <Button @click="seeAudit(slotProps.data.audits[0])" text severity="help">
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

    <Dialog class="mx-2" v-model:visible="visibleAuditInfo" modal header="Detalles de la Auditoría" :style="{ width: '40rem' }">

            <template v-if="currentAuditInfo">


                <div class="">
                    
            <h4 style="text-transform: capitalize;"><b>{{ currentAudit.site_name?.toLowerCase() }} - {{
                currentAudit.coordinator_name?.toLowerCase() }}</b></h4>
            <p class="text-xl"><b>Fecha de auditoría:</b> {{ currentAudit.audit_date }}</p>



            <h5 v-if="currentAuditInfo[1]?.length > [0]"><b>Pendientes</b></h5>

            <div v-for="(warning, warningIndex) in currentAuditInfo[1]" :key="warningIndex">

                <ul class="p-0">
                    <li style="list-style: none;" class="my-2 p-0">
                        <Checkbox class="mr-3" :binary="true"></Checkbox>

                        
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



</template>

<script setup>
import { ref, onMounted } from 'vue';

import { Auditservice } from '@/service/auditService';
import { URI } from '@/service/conection.js'
import { da } from 'date-fns/locale';


const groupAudits = (audits) => {
    const grouped = {};
    audits.forEach(audit => {
        const groupKey = `${audit.site_name}-${audit.coordinator_name}-${audit.audit_date}`;
        if (!grouped[groupKey]) {
            grouped[groupKey] = { id: groupKey, audits:[{...audit}] };
        } else {
            grouped[groupKey].audits?.push(audit)
        }
    });
    return Object.values(grouped);
};

const seeAudit = async(audit) => {
    visibleAuditInfo.value = true
    currentAudit.value = audit

    // Auditservice.getAuditCheckGroupsWithItems(audit.id).then(data => currentAuditInfo.value = data)
    currentAuditInfo.value = await Auditservice.getAuditCheckGroupsWithItemsFiltered(audit.coordinator_id,audit.audit_date,audit.site_id)

}

const visibleAuditInfo = ref(false)
const audits = ref()

const currentAudit = ref({})
const currentAuditInfo = ref({})



onMounted(() => {

    Auditservice.getAudits().then(data => {
        audits.value = groupAudits(data)
        console.log(groupAudits(data))

    })

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


</script>
