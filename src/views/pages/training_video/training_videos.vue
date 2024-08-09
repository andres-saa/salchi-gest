<template>

    <div class="container py-6">


        <Dialog header="Completar clase" v-model:visible="visible_to_delete" modal style="width: 30rem; text-transform: capitalize;">

            <h5 class="p-0 m-0"> Esta accion no se puede deshacer, seguro que deseas marcar el video <b>{{ videoToMark.video_name }}</b> como completado?</h5>

            <template #footer>

                <div style="display: flex;justify-content: end; width:100%">


                    <Button @click="visible_to_delete = false" severity="help" label="No, no le he visto aun"></Button>
                    <Button @click="markvideo(videoToMark)" text severity="danger" label="Si claro"></Button>
                </div>


            </template>

        </Dialog>



        <h2 style="text-transform: uppercase;" class="text-center"><b>{{ route.params.sequence_name }}</b></h2>



        <Dialog v-model:visible="playVisible" class="p-0 m-3" header="Reproductor de video
    " modal style="width: 100%;max-width: 150vh; aspect-ratio: 16  / 9;">
            <div style="height: 100%;">
                <!-- {{ videoToSee }} -->
                <iframe class="p-0" width="100%" style="aspect-ratio: 16 / 9;"
                    :src="formattedVideoLink(videoToSee.video_link)" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </Dialog>


    <DataTable :paginator="true" :rows="15" style="width: 100%;max-width: 1280px;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Secuencias"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines  scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="videos" tableStyle="min-width: 50rem;">
        <template #header>
            <div class="grid p-2" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h4 class="px-2"> <i class="fa fa-book"></i> <b>Clases</b></h4>

                <InputText class="" style="width: 100%; max-width: 500px;" placeholder="Buscar Secuencia..." />



            </div>


        </template>

     
       


        <column header="Check" icon="pi pi-check" class="px-4" field="created_time">
            <template #body="data">

                <Checkbox :disabled="videoChecks[data.data.video_id]" @change="validate(data.data, videoChecks[data.data.video_id])" binary v-model="videoChecks[data.data.video_id]"></Checkbox>
            </template>
        </column>
        <column header="Id" class="px-4" field="id">
            <template #body="data">

                <h6  style=""> {{ data.data.video_id }}</h6>
            </template>
        </column>

        
        <column header="Nombre" style="min-width: 20rem;" class="px-4" field="created_time">
            <template #body="data">

                <h6 style=""> {{ data.data.video_name }}</h6>

                <div style="display: flex; justify-content: start; align-items: center;">
                    
                    <Button @click="openVideo(data.data)" text  icon="fa-solid fa-play">
                        
                    </Button>

                    <Button text  icon="fa-solid fa-ellipsis-vertical">
                        
                    </Button>

                </div>
            </template>
        </column>



        <column header="Descripcion" style="max-width: 20rem;" class="px-4" field="created_time">
            <template #body="data">

                <h6 class="" style=""> {{ data.data.description }}</h6>
            </template>
        </column>







        <column header="Miniatura" class="px-4">

            <template #body="data">

                <!-- <img style="width: 5rem; aspect-ratio: 16 / 9; object-fit: cover;"
                    :src="urlService.getThumbnail(data.data.)" alt=""> -->

                <div style="display: flex; gap: .5rem;">


                    <img  @click="openVideo(data.data)"
                        style="width: 9rem;cursor: pointer; border-radius: .3rem; aspect-ratio: 16 / 9;object-fit: cover;"
                        :src="urlService.getThumbnail(data.data.video_link)" alt="">
                </div>

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

        <column header="Creador" class="px-4"  field="created_time">
            <template #body="data">

                <h6 style="min-width: max-content;"> {{ data.data.creator_name }}</h6>
            </template>
        </column>


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

    </DataTable>

</div>
</template>


<script setup>

import { videoSequenceService } from '../../../service/video_training/videoTrainingService';
import { urlService } from '../../../service/video_training/urlService';

import { ref, onMounted, watch } from 'vue';
import { da } from 'date-fns/locale';
import { useRoute } from 'vue-router';
import { loginStore } from '@/store/user.js'
import { fetchService } from '../../../service/utils/fetchService';
import { URI } from '../../../service/conection';
const user = loginStore()

const  route = useRoute()
const playVisible = ref( false )
const videoChecks = ref({})

const videos = ref([])

const videoToSee = ref({})


const visible_to_delete = ref(false)




const formattedVideoLink = (link) => {
    const match = link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);

    if (match && match[1]) {
        const videoId = match[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return embedUrl;
    } else {
        console.error("La URL del video no es válida: ", link);
        return '';
    }
};


const openVideo = (video) => {
    videoToSee.value = video
    playVisible.value = true
}



const markvideo = async(video) => {
    const data = {
        "user_id": user.rawUserData.id,
        "video_id": video.video_id
        }
     await fetchService.post(`${URI}/mark-video-user`,data,'marcando video como visto')
     update()
     visible_to_delete.value = false
}



const update = async() => {


    const sequence_id = route.params.sequence_id
    const student_id = user.rawUserData.id

    const video = await videoSequenceService.getVideosBySequenceIdAndStudentId(sequence_id,student_id)

    video.forEach(e => {
        videoChecks.value[e.video_id] = e.video_user_mark
    });

    videos.value = video
}


onMounted(async () => {
    await update()
})


const videoToMark = ref ({})

const validate = (video, value) => {
   
        visible_to_delete.value = true
        if (!value){
            return
        }
        videoChecks.value[video.video_id] = false
        videoToMark.value = video
}
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