<template>
    <Dialog  v-model:visible="dialogStore.updateVideo" class="p-0 m-3" header="Actualizar Curso"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre del video</h6>
            <InputText v-model="dataToUpdate.video_name" style="width: 100%;"></InputText>


            <h6 style="">Link del video (YouTube) <i class="pi pi-youtube "></i></h6>
            <InputText v-model="dataToUpdate.video_link" style="width: 100%;"></InputText>

            
            <img class="my-3" v-if="dataToUpdate.video_link  && urlService.getThumbnail(dataToUpdate.video_link)" style="width: 100%;border-radius: .3rem; aspect-ratio: 16 / 9;object-fit: cover;"
                        :src="urlService.getThumbnail(dataToUpdate.video_link)" alt="">

            <h6>Descripcion u objetivo</h6>
            <Textarea v-model="dataToUpdate.description" style="width: 100%; resize: none;" rows="4">

            </Textarea>
        </div>

        <template #footer>
            <Button class="m-0" @click="updateData" severity="warning" label="Actualizar escuela"></Button>
        </template>

    </Dialog>

</template>



<script setup>
import { ref, watch } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '../../../../../../service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useDataToInteract } from '../../../../../../store/trainingVideo/dataToInteract';
import { urlService } from '../../../../../../service/video_training/urlService';

const dataToInteract = useDataToInteract()
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()

const dataToUpdate = ref({... dataToInteract.videoToUpdate,}

   
)

watch(() =>     dataToInteract.videoToUpdate, (newVal) => {
    dataToUpdate.value = {...newVal}
}, {deep:true})




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




const dataToSend = ref({})

const updateData = async () => {


    if (!urlService.ValidateThumbnail(dataToUpdate.value.video_link)){
        alert ('url invalida debe ser una url valida de youtube')
        return
    }
    
    
    const video_id = dataToUpdate.value.video_id
    const data = {

        name:dataToUpdate.value.video_name,
        link:dataToUpdate.value.video_link,
        description:dataToUpdate.value.description
        
    
    }

        
    await videoSequenceService.updateVideo(video_id,data)
    dialogStore.updateVideo = false
    emit('update');

}

</script>