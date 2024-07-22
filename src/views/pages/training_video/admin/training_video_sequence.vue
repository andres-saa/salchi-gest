<template>

    <div class="container py-6">
        <dialogToAddSequence @update="updateSequence" />
        <DialogToDeleteSequence @update="updateSequence" />
        <dialogToEditSequence @update="updateSequence" />




        <Dialog v-model:visible="playVisible" class="p-0 m-3" header="Reproductor de video
    " modal style="width: 100%;max-width: 150vh; aspect-ratio: 16  / 9;">
            <div style="height: 100%;">
                <!-- {{ videoToSee }} -->
                <iframe class="p-0" width="100%" style="aspect-ratio: 16 / 9;"
                    :src="formattedVideoLink(videoToSee)" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </Dialog>

        <h2 class="text-center"><b>GESTIONAR ESCUELA {{ route.params.sesion_name }}</b></h2>
        <DataTable :paginator="true" :rows="15" style="width: 100%;max-width: 1280px;"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Capacitaciones" showGridlines
            :rowsPerPageOptions="[5, 10, 25, 100]" scrollable scrollHeight="65vh" stripedRows class="col-12 m-auto"
            :value="sequesces" tableStyle="min-width: 50rem;">
            <template #header>
                <div class="grid p-2"
                    style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                    <h4 class="px-2"> <i class="fa fa-glasses"></i> <b>Cursos</b></h4>

                    <InputText class="" style="width: 100%; max-width: 500px;" placeholder="Buscar Secuencia..." />

                    <Button @click="dialogStore.addSequence = true" severity="help" label="Nuevo curso"></Button>



                </div>

            </template>

            <column header="Check" class="" field="created_time">
                <template #body="data">

                    <Checkbox></Checkbox>
                </template>
            </column>

            <column header="Id" class="" field="created_time">
                <template #body="data">

                    <h6> {{ data.data.sesion_id }}</h6>
                </template>
            </column>




            <column header="Nombre" class="" field="created_time">
                <template #body="data">

                    <h6> {{ data.data.sequence_name }}</h6>
                    <div style="display: flex; justify-content: start; align-items: center;">

                        <Button severity="help"
                            @click="navigate_to_sesion(data.data.sequence_id, data.data.sequence_name)" text
                            icon="fa-solid fa-eye">

                        </Button>

                        <Button @click="openToEdit(data.data)" text icon="fa-solid fa-pencil">

                        </Button>
                        <Button text @click="openToDelete(data.data)" severity="danger" icon="fa-solid fa-trash">

                        </Button>
                        <Button severity="success" text label="Estudiantes" icon="fa-solid fa-graduation-cap">

                        </Button>







                    </div>
                </template>
            </column>


            <column header="Descripcion" style="min-width: 30rem;" class="px-4" field="created_time">
                <template #body="data">

                    <h6 class="" style="text-transform: capitalize;"> {{ data.data.description?.toLowerCase() }}</h6>
                </template>
            </column>











            <column header="Fecha" class="" field="created_time">
                <template #body="data">

                    <h6 class="date"> {{ data.data.created_date }}</h6>
                </template>
            </column>



            <column header="Hora" field="created_time">
                <template #body="data">

                    <h6 class="date"> {{ data.data.created_time }}</h6>
                </template>
            </column>

            <column header="Creador" class="date" field="created_time">
                <template #body="data">

                    <h6 style="min-width: max-content;"> {{ data.data.creator_name }}</h6>
                </template>
            </column>

            <!-- <column header="Asignado por"  field="created_time">
            <template #body="data">
                <h6> {{ data.data.creator_name }}</h6>
            </template>
        </column> -->


            <!-- <column  style="min-width: 1rem;" class="py-1 pl-0" header="imagen" field="id">
    
        <template #body="data">
             
            <img class="p-0"
                    style="width: 100%;aspect-ratio: 3 / 3;border-radius: .3rem; object-fit: cover;"
                     :src="`${URI}/read-product-image/96/contest-${data.data.id}`"
                    alt="">
        </template>
    
    
    </column>
    <column style="min-width: 20rem;" class="py-1" header="Nombre" field="name"></column>

    <column style="min-width: 20rem;" class="py-1" header="Participantes" field="name">
    
        <template #body="data">
{{ data.data.is_site_participation? 'Sedes' : 'Colaboradores' }}
        </template>
    </column>



    <column style="min-width: 13rem;" class="py-1" header="Fecha de inicio" field="formattedStartDate">
        <template #body="data">
            {{ data.data.formattedStartDate }}
        </template>
    </column>
    <column style="min-width: 13rem;" class="py-1" header="Fecha de finalizacion" field="formattedStartDate">
        <template #body="data">
            {{ data.data.formattedEndDate }}
        </template>
    </column>




    <column style="min-width: 13rem;" class="py-1" header="Forma de ganar" field="formattedStartDate">
        <template #body="data">
           
            <span> {{ data.data.contest_winner_type_name }}</span>

        </template>
    </column>

    <column style="min-width: 12rem;" class="py-1" header="Tipo de evidencia" field="formattedStartDate">
        <template #body="data">
           
            <span> {{ data.data.evidence_type_name }}</span>

        </template>
    </column>


    
    <column style="min-width: 12rem;" class="py-1" header="Quien va ganando?" field="formattedStartDate">
        <template #body="data">
           
            <p style="text-transform: capitalize;min-width: max-content;"> {{ data.data.rbq[0]?.name?.split(' ')?.slice(0,3)?.join(' ')?.toLowerCase() }}</p>

        </template>
    </column>


    <column style="min-width: 20rem;" class="py-1" header="Instrucciones" field="formattedStartDate">
        <template #body="data">
           
            <span> {{ data.data.instructions }}</span>

        </template>
    </column>

    
    <column style="min-width: 5rem;" class="py-1" header="Estado" field="formattedStartDate">
        <template #body="data">
           
            <Tag  v-if="data.data.started" :severity="data.data.vigent? 'success' : 'danger'" style="border-radius: .3rem; min-width: max-content;">{{ data.data.vigent? 'En curso...' : 'Finalizado' }} </Tag> 
            <Tag  v-if="!data.data.started" style="border-radius: .3rem;min-width: max-content;">{{ data.data.started? '' : 'Proximo' }} </Tag> 

        </template>
    </column>


    <column  alignFrozen="right" style="min-width: 4rem;" class="py-1 pr-0" header="Acciones" field="Visible">
        <template #body="data">
            <div style="display: flex; align-items: center; gap: 0;">
                    <Button @click="opencontestToEdit(data.data)" style="pediting: 0; margin: 0;" severity="warning" text class="p-0 m-0 text-2xl" icon="fa-solid fa-pen-to-square p-0 m-0"></Button>
                    <Button @click="openContestToDelete(data.data)"  style="pediting: 0; margin: 0;" severity="danger" text class="p-0 m-0 text-2xl" icon="fa-solid fa-trash  p-0 m-0"></Button>
            </div>
           
        </template>
    </column>
    <column frozen alignFrozen="right" style="min-width: 4rem;" class="py-1 pr-0" header="Visible" field="Visible">
        <template #body="data">
            <div style="display: flex; align-items: center; gap: 0;">
                <InputSwitch  @change="() => contestService.contestToggleVisible(visibleContest[data.data.id], data.data.id)" v-model="visibleContest[data.data.id]"/>
            </div>
           
        </template>
    </column> -->

            <column header="Clases" class="px-4">

                <template #body="data">

                    <!-- <img style="width: 5rem; aspect-ratio: 16 / 9; object-fit: cover;"
        :src="urlService.getThumbnail(data.data.)" alt=""> -->

                    <div class="" style="display: flex; gap: 1rem; align-items: center;">



                        <img @click="openVideo(link)" class="img-courses" v-for="link in data.data.video_links?.filter(l => l)"
                            style="width: 9rem;cursor: pointer; border-radius: .3rem; aspect-ratio: 16 / 9;object-fit: cover;"
                            :src="urlService.getThumbnail(link)" alt=""> <span class=""><b> <i
                                    class="text-4xl pi pi-ellipsis-h"></i> </b></span>

                        

                    </div>

                </template>
            </column>

        </DataTable>

    </div>

</template>


<script setup>

import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { urlService } from '@/service/video_training/urlService';
import dialogToAddSesion from './dialogs/sesion/dialogToAddSesion.vue';
import { ref, onMounted, watch } from 'vue';
import { da } from 'date-fns/locale';
import router from '@/router';
import { useRoute } from 'vue-router';
import dialogToAddSequence from './dialogs/sequence/dialogToAddSequence.vue';
import dialogToDeleteSequence from './dialogs/sequence/dialogToDeleteSequence.vue';
import dialogToEditSequence from './dialogs/sequence/dialogToEditSequence.vue';
import DialogToDeleteSequence from './dialogs/sequence/dialogToDeleteSequence.vue';
import { useDialogStore } from '../../../../store/trainingVideo/dialogs';
import { useDataToInteract } from '../../../../store/trainingVideo/dataToInteract';

const dataToInteractStore = useDataToInteract()


const dialogStore = useDialogStore()
const route = useRoute()

const navigate_to_sesion = (sequence_id, sequence_name) => {
    router.push({

        name: 'video-training-video-admin',
        params: {
            sequence_id: sequence_id,
            sequence_name: sequence_name,
        }

    })
}


const formattedVideoLink = (link) => {
    const match = link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);

    if (match && match[1]) {
        const videoId = match[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return embedUrl;
    } else {
        console.error("La URL del video no es válida: ", link);
        return '';
    }
};


const videoToSee = ref({})


const playVisible = ref(false)



const sequesces = ref([])


const openToDelete = (data) => {
    dataToInteractStore.sequenceToDelete = {}
    dataToInteractStore.sequenceToDelete = data
    dialogStore.deleteSequence = true
}


const openVideo = (video) => {
    videoToSee.value = video
    playVisible.value = true
}


const openToEdit = (data) => {
    dataToInteractStore.sequenceToUpdate = {}
    dataToInteractStore.sequenceToUpdate = data
    dialogStore.updateSequence = true
}



const updateSesions = async () => {
    videos.value = await videoSequenceService.getSesions()

}




const updateSequence = async () => {
    sequesces.value = await videoSequenceService.getVideoSequencesBySesionId(route.params.sesion_id)

}


onMounted(async () => {
    updateSequence()
})


</script>

<style scoped>
.container {
    margin-top: 3rem;
}



h6 {

    text-transform: uppercase;
}


.date {
    min-width: max-content;
}

.img-courses {
    transition: all ease .2s;
}

.img-courses:hover {
    transform: scale(1.05);
}
</style>