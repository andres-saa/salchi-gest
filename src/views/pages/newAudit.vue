<template>
    <div class="mx-auto" style="max-width: 900px;">
        <div class="mx-4" >
            <div class="grid my-0 py-0">
                <div class="col-12 my-0 py-2 md:col-6">
                    <Dropdown placeholder="sede" class="col-12 p-0 " v-model="store.currentSite" :options="sites"
                        optionLabel="site_name"></Dropdown>
                </div>
                <div class="col-12 my-0 py-2 md:col-6">
                    <Dropdown placeholder="Checklist" class="col-12 p-0" v-model="currentChecklist"
                        :options="checklists" optionLabel="checklist_name"></Dropdown>
                </div>
            </div>


            <div class=" " style=" border-radius: 1rem;">
                <p class="text-2xl text-center my-4" style="font-weight: bold;">
                    Auditoria
                </p>
                <div v-for="group in currentChecklistInfo.groups" :key="group.group_id">
                    <h6 class="my-3" style="text-transform: uppercase;">{{ group.group_name }}</h6>
                    <div style="display: flex; gap: 1rem;" v-for="item in group.items" :key="item.item_id"
                        class="p-field-checkbox">
                        <Checkbox class="" v-model="item.checked" :value="true" binary="true"></Checkbox>
                        <label style=" overflow-x: auto;" class="">{{ item.item_description }}</label>
                    </div>
                </div>

            </div>

            <Button style="" v-if="currentChecklist.checklist_id" @click="prepareItemsForWarnings" size="small"
                class="my-5 col-12 md:col-4" severity="help" label="Revisar y Enviar Auditoría"></Button>

            <Dialog style="width: 40rem;" v-model:visible="dialogVisible" header="Añadir Observaciones" modal
                :closable="false">
                <div v-for="(item, index) in itemsToWarn" :key="index">
                    <h5 class=" col-12 p-0 my-3">{{ item.item_description }} <i style="color: red;"
                            :class="PrimeIcons.TIMES"> No cumplio</i> </h5>
                    <InputText class="col-12" v-model="item.warning_text" placeholder="Observación..." />
                </div>
                <template #footer>
                    <div class="col-12 p-0" style="display: flex;">
                        <Button class="col-6" severity="success" label="Enviar" @click="confirmWarnings"></Button>
                        <Button class="col-6" severity="danger" label="Cancelar "
                            @click="dialogVisible = false"></Button>
                    </div>

                </template>
            </Dialog>
        </div>
    </div>


</template>




<script setup>
import { siteService } from '@/service/siteService.js';
import { onMounted, ref, watch } from 'vue';
import { useDirectoryStore } from '@/store/directorio.js';
import { Auditservice } from '@/service/auditService.js';
import { URI } from '../../service/conection';
import { PrimeIcons } from 'primevue/api';
import { useReportesStore } from '../../store/reportes';
import { getUserId } from '../../service/valoresReactivosCompartidos';

const loading = useReportesStore().setLoading
const store = useDirectoryStore();
const sites = ref([]);
const checklists = ref([]);
const currentChecklist = ref({});
const currentChecklistInfo = ref({});
const dialogVisible = ref(false);
const itemsToWarn = ref([]);

onMounted(async () => {
    sites.value = await siteService.getSites();
    const checklistData = await Auditservice.getChecklist();
    checklists.value = Array.isArray(checklistData) ? checklistData : [];
    if (sites.value.length > 0 && !store.currentSite?.site_name) {
        store.setSite(sites.value[0]);
    }
});

watch(currentChecklist, async (newVal) => {
    if (newVal?.checklist_id) {
        currentChecklistInfo.value = await Auditservice.getChecklistWithItems(newVal.checklist_id);
    } else {
        currentChecklistInfo.value = []
    }
});

function prepareItemsForWarnings() {
    itemsToWarn.value = currentChecklistInfo.value.groups.flatMap((group) => group.items.filter((item) => !item.checked));
    if (itemsToWarn.value.length > 0) {
        dialogVisible.value = true;
    } else {
        sendAudit();
    }
}

async function confirmWarnings() {
    dialogVisible.value = false;
    sendAudit();
}

async function sendAudit() {
    // Construye la estructura de datos para ítems no marcados que necesitan advertencias.
    const itemsWithWarnings = currentChecklistInfo.value.groups.flatMap((group) =>
        group.items
            .filter((item) => !item.checked)
            .map((item) => ({
                audit_item: {
                    check_item_id: item.item_id,
                    status: false, // Establece el estado en false porque son ítems no marcados.
                    comments: ''
                },
                warning: {
                    warning_text: item.warning_text || 'Observación no proporcionada',
                    resolved: false,
                    date: new Date().toISOString().split('T')[0]
                }
            }))
    );

    // Prepara los datos de la auditoría para enviarlos.
    const auditData = {
        audit: {
            site_id: store.currentSite.site_id,
            coordinator_id: getUserId(), // Este ID debe ser dinámico o establecido correctamente.
            audit_date: new Date().toISOString().split('T')[0],
            checklist_id: currentChecklist.value.checklist_id
        },
        items_with_warnings: itemsWithWarnings
    };

    // Realiza la solicitud POST para enviar la auditoría y sus ítems al servidor.
    try {
        loading(true, 'enviando')
        const response = await fetch(`${URI}/audits-with-items-and-warnings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(auditData)
        });

        if (!response.ok) {
            // Maneja la respuesta no exitosa.
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Procesa la respuesta exitosa.
        const responseData = await response.json();
        loading(false, 'enviando')

        console.log('Audit created successfully', responseData);
        currentChecklistInfo.value = {}

        // Aquí puedes implementar lógica adicional para manejar la respuesta, como notificaciones al usuario.
    } catch (error) {
        loading(false, 'enviando')

        // Maneja errores en la solicitud o en la respuesta.
        console.error('Error creating the audit', error);
        // Implementa la lógica para manejar errores, como mostrar un mensaje al usuario.
    }
}
</script>