<template>
    <div class=" m-0 p-0 md:p-4">

        <!-- {{ audits }} -->
        <DataTable :value="audits" tableStyle="min-width: 50rem" class="p-0"
        
        dataKey="id" :paginator="true"
                    :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 100]"
                    currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} Auditorias"
                    responsiveLayout="scroll" scrollable  
        
        
        
        >
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

            <Column class="p-0 m-0" field="rating" header="Calificacion" sortable style="min-width:12rem">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.score" />
                    
                </template>
            </Column>



            <Column class="p-0 m-0" field="inventoryStatus" header="ver" sortable style="">
                <template #body="slotProps">
                    <Button @click="seeAudit(slotProps.data)" text severity="help">
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
        </DataTable>
    </div>




    <!-- <Button label="Show" @click="visibleAuditInfo = true" /> -->

    <Dialog v-model:visible="visibleAuditInfo" modal header="Detalles de la Auditoría" :style="{ width: '30rem' }">

        <!-- {{ currentAuditInfo }} -->
        <template v-if="currentAuditInfo">



            <h4 style="text-transform: capitalize;"><b>{{ currentAudit.site_name?.toLowerCase() }} - {{
            currentAudit.coordinator_name?.toLowerCase() }}</b></h4>
            <p class="text-xl"><b>Fecha de auditoría:</b> {{ currentAudit.audit_date }}</p>



            <h5 v-if="currentAuditInfo[1]?.length>[0]"><b>Pendientes</b></h5>

            <div v-for="(warning, warningIndex) in currentAuditInfo[1]" :key="warningIndex">

                <ul class="p-0">
                    <li style="list-style: none;" class="my-2 p-0">
                        <Checkbox class="mr-3" :binary="true"></Checkbox>

                        {{ warning.item_description }}
                        
                        <!-- {{warning}} -->
                        <Tag :severity="warning.resolved? 'succes': 'danger'"> {{warning.resolved? 'resuelto': 'pendiente'}}</Tag>

                        <!-- Mostrar advertencia -->
                        <ul v-if="warning.warning_text">
                            <li style="list-style: none;" class="text-danger">

                                <p class="py-0 my-0" style="font-weight: bold;"> ({{ warning.warning_date }})</p>

                                <span style="color:red"> {{ warning.warning_text }} </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div v-for="(group, index) in currentAuditInfo[0]" :key="index">


                <h5 v-if="group?.items?.some( elem => elem?.status)" ><b>{{ group.group_name }}</b></h5>
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



const seeAudit = (audit) => {
    visibleAuditInfo.value = true
    currentAudit.value = audit

    Auditservice.getAuditCheckGroupsWithItems(audit.id).then(data => currentAuditInfo.value = data)
}

const visibleAuditInfo = ref(false)
const audits = ref()

const currentAudit = ref({})
const currentAuditInfo = ref({})


onMounted(() => {

    Auditservice.getAudits().then(data => audits.value = data)

})

</script>
