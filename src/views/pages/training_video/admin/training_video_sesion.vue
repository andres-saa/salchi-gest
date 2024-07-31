<template>

<div class="container py-6">

    <dialogToAddSesion @update="updateSesions" />
    <dialogToDeletesesion @update="updateSesions" />
    <dialogToEditSesion  @update="updateSesions" ></dialogToEditSesion>
    

        <h2 class="text-center" ><b> <i class="fa-solid fa-school"></i> ADMINISTRAR ESCUELAS</b></h2>


    <Dialog  v-model:visible="playVisible" class="p-0 m-3" header="Reproductor de video
    " modal style="width: 70%; aspect-ratio: 16  / 9;">
        <div style="height: 100%;">
            <iframe class="p-0" width="100%"  style="aspect-ratio: 16 / 9;" :src="formattedVideoLink(videoToSee.video_link)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </Dialog>


    <DataTable :paginator="true" :rows="15" style="width: 100%;max-width: 1280px;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Secuencias"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines  scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="videos" tableStyle="min-width: 50rem;">


        <template #header>
            <div class="grid p-2" style="align-items:center;display: flex;align-items: center; gap: 1rem; justify-content: space-between;">
                <h4 class="px-2"> <i class="fa fa-graduation-cap"></i> <b>Escuelas</b></h4>

                <InputText class="" style="width: 100%; max-width: 500px;" placeholder="Buscar Secuencia..." />
                <Button @click="dialogStore.addSesion = true" severity="help" label="Nueva Escuela"></Button>

            </div>

        </template>

        <column header="Id" class="px-4" field="id">
            <template #body="data">

                <h6  style=""> {{ data.data.sesion_id }}</h6>
            </template>
        </column>

        
        <column header="Nombre" style="min-width: 20rem;" class="px-4" field="created_time">
            <template #body="data">

                <h6 style="text-transform: capitalize;"> {{ data.data.sesion_name?.toLowerCase() }}</h6>

                <div style="display: flex; justify-content: start; align-items: center;">
                    
                    <Button severity="help" @click="navigate_to_sesion(data.data.sesion_name,data.data.sesion_id)" text  icon="fa-solid fa-eye">
                        
                    </Button>

                    <Button @click="openToEdit(data.data)" text  icon="fa-solid fa-pencil">
                        
                    </Button>


                   
                    <Button @click="openToDelete(data.data)" text severity="danger"  icon="fa-solid fa-trash">
                        
                    </Button>

                    <!-- <Button severity="success" text label="Estudiantes" icon="fa-solid fa-graduation-cap">
                        
                    </Button> -->
                </div>
            </template>
        </column>



        <column header="Descripcion" style="min-width: 30rem;" class="px-4" field="created_time">
            <template #body="data">

                <h6 class="" style="text-transform: capitalize;"> {{ data.data.description?.toLowerCase() }}</h6>
            </template>
        </column>


        <column header="Fecha" class="px-4" field="created_time">
            <template #body="data">

                <h6 class="date" style=""> {{ data.data.created_date }}</h6>
            </template>
        </column>


        <column header="Hora" class="px-4" field="created_time">
            <template #body="data">

                <h6 class="date" style=""> {{ data.data.created_time }}</h6>
            </template>
        </column>

        <column header="Creador" class="px-4" style=""  field="created_time">
            <template #body="data">

                <h6 style="min-width: max-content;"> {{ data.data.creator_name }}</h6>
            </template>
        </column>
    </DataTable>

</div>
</template>


<script setup>

import { videoSequenceService } from '../../../../service/video_training/videoTrainingService';
import { urlService } from '../../../../service/video_training/urlService';
import dialogToAddSesion from './dialogs/sesion/dialogToAddSesion.vue';
import { ref, onMounted, watch } from 'vue';
import { da } from 'date-fns/locale';
import { useRoute } from 'vue-router';
import router from '../../../../router';

import dialogToDeletesesion from './dialogs/sesion/dialogToDeletesesion.vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import dialogToEditSesion from './dialogs/sesion/dialogToEditSesion.vue';
import { useDataToInteract } from '@/store/trainingVideo/dataToInteract';


const dataToInteractStore = useDataToInteract()



const dialogStore = useDialogStore()



const openToDelete = (data) =>{
dataToInteractStore.sesionToDelete = {}
dataToInteractStore.sesionToDelete = data
dialogStore.deleteSesion = true
}



const openToEdit = (data) =>{
dataToInteractStore.sesionToUpdate = {}
dataToInteractStore.sesionToUpdate = data
dialogStore.updateSesion = true
}



const updateSesions = async() => {
    videos.value = await videoSequenceService.getSesions()

}


const  route = useRoute()
const playVisible = ref( false )


const navigate_to_sesion = ( sesion_name , sesion_id ) => {
    router.push({
        
        name:'video-training-sequence-admin',
        params:{
            sesion_id:sesion_id,
            sesion_name:sesion_name
        }
    
    })
}


const videos = ref([])

const videoToSee = ref({})


const formattedVideoLink = (link) => {
      return link.replace('watch?v=', 'embed/');
    }

const openVideo = (video) => {
    videoToSee.value = video
    playVisible.value = true
}


onMounted(async () => {
    updateSesions()
})

</script>

<style scoped>
.container {
    margin-top: 3rem;
}



h6{

    text-transform: uppercase;

    overflow: hidden;

}

.date{
    min-width: max-content;
}


.p-dialog-content{
    background-color: red;
}


.p-dialog .p-dialog-header {
    border-bottom: 0 none;
    background: #ff0000;
    color: #374151;
    padding: 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

</style>