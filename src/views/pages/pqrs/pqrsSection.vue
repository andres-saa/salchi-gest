<template>
    <Dialog class="mx-2" :header="editing ? 'Editar PQRS' : 'Crear nueva PQRS'" style="width: 50rem;"
        v-model:visible="visibles.showDialogToAddPqrs">

        <p class="my-3"> <b>Pregunta</b> </p>
        <InputText style="width: 100%;" v-model="newPqrs.question" editorStyle="height: 5rem" />

        <p class="my-3"> <b>Respuesta</b> </p>
        <Editor v-model="newPqrs.answer" editorStyle="height: 320px" />



        <template #footer>

            <div class="col-12 p-0">

                <Button @click="createNewPqrs" class="m-0" severity="success" label="ENVIAR"></Button>
            </div>
        </template>
    </Dialog>

    <Dialog header="Eliminar PQRS" style="width: 20rem;" v-model:visible="visibles.showDeleteDialog">
        <p> Esta seguro de elimnar esta PQRS <b>{{ pqrsToDelete.question }}</b></p>
        <template #footer>
            <div>
                <Button @click="deletePqrs(pqrsToDelete.id)" text label="Eliminar" severity="danger"></Button>
            </div>
        </template>
    </Dialog>

    <div class="container col-12">
        <div class="p-0 col-12 bar my-4">
            <Button size="small" @click="openToCreatePqrs" label="NUEVA PQRS" severity="help"></Button>
        </div>



        <Accordion style="width: 100%;"  expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionTab v-for="(pq, index) in pqrs" :key="pq.id" style="background-color: red;">
                <template #header>
                    
                    
                        <p class="p-0 m-0" style="width: 100%;">
                            <b>{{ pq.question }}</b>
                        </p>

                        <div class=""
                            style="display: flex; width: 100%; justify-content: end; align-items: center;">
                            <Button severity="danger" @click="openToDelete(pq)" text style="transition: .3s ease all;"
                                :class="controlVisible[index] ? 'button-visible' : 'button-hide'" class="p-0 m-0"
                                icon="pi pi-trash text-xl p-0"></Button>
                            <Button :class="controlVisible[index] ? 'button-visible' : 'button-hide'" severity="warning"
                                @click="open_to_edit(pq)" text class="p-0 m-0" icon="pi pi-pencil text-xl p-0"></Button>
                        </div>
                
                </template>
                <p class="m-0">
                <p v-html="pq.answer"></p>
                </p>
            </AccordionTab>

        </Accordion>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { pqrsService } from '../../../service/pqrs/pqrsService';
import router from '../../../router';
import { useRoute } from 'vue-router';
import OverlayPanel from 'primevue/overlaypanel';
import Editor from 'primevue/editor';

const newPqrs = ref({ question: '', answer: '' });
const pqrsToDelete = ref({});
const controlVisible = ref({});
const previousIndex = ref(null);
const route = useRoute();
const pqrs = ref([]);
const visibles = ref({});
const editing = ref(false);
const visibleAnswers = ref({});

const open_to_edit = (pq) => {
    editing.value = true;
    visibles.value.showDialogToAddPqrs = true;
    newPqrs.value = { ...pq };
};

const openToCreatePqrs = () => {
    editing.value = false;
    visibles.value.showDialogToAddPqrs = true;
};

const openToDelete = (pqrs) => {
    pqrsToDelete.value = pqrs;
    visibles.value.showDeleteDialog = true;
};

const toggle = (index) => {
    if (previousIndex.value !== null && previousIndex.value !== index) {
        controlVisible.value[previousIndex.value] = false;
    }
    controlVisible.value[index] = !controlVisible.value[index];
    previousIndex.value = controlVisible.value[index] ? index : null;
};

const update = async () => {
    pqrs.value = await pqrsService.getPqrsByPlaceId(route.params.section_id);
};

const deletePqrs = async (id) => {
    visibles.value.showDeleteDialog = false;
    await pqrsService.deletePqrs(id);
    update();
};

onMounted(async () => {
    update();
});

watch(() => route.params.section_id, () => {
    update();
}, { deep: true });

const createNewPqrs = async () => {
    const dataToSend = {
        question: newPqrs.value.question,
        answer: newPqrs.value.answer,
        place_id: route.params.section_id,
    };

    visibles.value.showDialogToAddPqrs = false;
    if (editing.value) {
        await pqrsService.updatePqrs(dataToSend, newPqrs.value.id);
    } else {
        await pqrsService.createPqrs(dataToSend);
    }

    update();
};
</script>

<style scoped>
.pqrs {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 900px;
}

.pqrs-element {
    border-radius: .3rem;
}

.bar {
    max-width: 900px;
    display: flex;
    justify-content: end;
}

.container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
}

@keyframes an_show_actions {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
    }
}

@keyframes an_show_actions_2 {
    100% {
        opacity: 0;
        transform: translateX(20px);
    }

    0% {
        opacity: 1;
    }
}

.button-visible {
    animation: an_show_actions .3s ease;
}

.button-hide {
    animation: an_show_actions .3s ease;
}

/* Transición de fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
