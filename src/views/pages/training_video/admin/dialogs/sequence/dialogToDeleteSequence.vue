<template>
    <Dialog v-model:visible="dialogStore.deleteSequence" class="p-0 m-3" header="Borrar un curso"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Seguro que desea borrar el curso <br> <b>{{ dataToInteractStore.sequenceToDelete?.sequence_name }}</b> ? </h6>
        </div>

        <template #footer>
            <Button icon="pi pi-trash"  class="m-0" @click="deleteSequence" severity="danger" label="Eliminar Curso"></Button>
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




const deleteSequence = async () => {
    
    const sequence_id = dataToInteractStore.sequenceToDelete.sequence_id
        
    await videoSequenceService.deleteSequence(sequence_id)
    dialogStore.deleteSequence = false
    emit('update');

}

</script>