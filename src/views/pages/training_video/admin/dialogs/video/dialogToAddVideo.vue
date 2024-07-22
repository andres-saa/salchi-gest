<template>
    <Dialog v-model:visible="dialogStore.addVideo" class="p-0 m-3" header="Registrar nueva Clase"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre de la nueva Clase</h6>
            <InputText v-model="dataToSend.name" style="width: 100%;"></InputText>


            <h6 style="">Link del video (YouTube) <i class="pi pi-youtube "></i></h6>
            <InputText v-model="dataToSend.link" style="width: 100%;"></InputText>


            <img class="my-3" v-if="dataToSend.link  && urlService.getThumbnail(dataToSend.link)" style="width: 100%;border-radius: .3rem; aspect-ratio: 16 / 9;object-fit: cover;"
                        :src="urlService.getThumbnail(dataToSend.link)" alt="">

            <h6>Descripcion u objetivo</h6>
            <Textarea v-model="dataToSend.description" style="width: 100%; resize: none;" rows="4">

            </Textarea>
        </div>
        

        <template #footer>
            <Button class="m-0" @click="sendData" severity="help" label="Crear Clase"></Button>
        </template>

        

    </Dialog>

</template>



<script setup>
import { ref } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useRoute } from 'vue-router';
import { urlService } from '../../../../../../service/video_training/urlService';

const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()
const dataToSend = ref({})


const route = useRoute()
const sendData = async () => {
    
    const data = {
        ...dataToSend.value,
        created_by:user.rawUserData.id,
        sequence_id:route.params.sequence_id
    }

        
    await videoSequenceService.createVideo(data)
    dialogStore.addVideo = false
    emit('update');

}

</script>