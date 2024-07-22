<template>
    <Dialog v-model:visible="dialogStore.deleteVideo" class="p-0 m-3" header="Registrar nueva escuela"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Seguro que desea borrar la clase <br> <b>{{ dataToInteractStore.videoToDelete?.video_name }}</b> ? </h6>
        </div>

        <template #footer>
            <Button icon="pi pi-trash"  class="m-0" @click="deleteVideo" severity="danger" label="Eliminar escuela"></Button>
        </template>

    </Dialog>

</template>



<script setup>
import { ref } from 'vue';
import { useDialogStore } from '../../../../../../store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { useDataToInteract } from '../../../../../../store/trainingVideo/dataToInteract';
import { loginStore } from '@/store/user.js'
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()
const dataToInteractStore = useDataToInteract()
const dataToSend = ref({})




const deleteVideo = async () => {
    
    const video_id = dataToInteractStore.videoToDelete.video_id
        
    await videoSequenceService.deleteVideo(video_id)
    dialogStore.deleteVideo = false
    emit('update');

}

</script>