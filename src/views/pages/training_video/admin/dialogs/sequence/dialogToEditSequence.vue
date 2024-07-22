<template>
    <Dialog  v-model:visible="dialogStore.updateSequence" class="p-0 m-3" header="Actualizar Curso"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre del Curso</h6>
            <InputText v-model="dataToUpdate.sequence_name" style="width: 100%;"></InputText>

            <h6>Descripcion u objetivo</h6>
            <Textarea v-model="dataToUpdate.description" style="width: 100%; resize: none;" rows="4">

            </Textarea>
        </div>

        <template #footer>
            <Button class="m-0" @click="updateData" severity="warning" label="Actualizar CURSO"></Button>
        </template>

    </Dialog>

</template>



<script setup>
import { ref, watch } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '../../../../../../service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useDataToInteract } from '../../../../../../store/trainingVideo/dataToInteract';


const dataToInteract = useDataToInteract()
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()

const dataToUpdate = ref({... dataToInteract.sequenceToUpdate,}

   
)

watch(() =>     dataToInteract.sequenceToUpdate, (newVal) => {
    dataToUpdate.value = {...newVal}
}, {deep:true})





const dataToSend = ref({})

const updateData = async () => {
    
    const sequence_id = dataToUpdate.value.sequence_id
    const data = {

        name:dataToUpdate.value.sequence_name,
        description:dataToUpdate.value.description
        
    
    }

        
    await videoSequenceService.updateSequence(sequence_id,data)
    dialogStore.updateSequence = false
    emit('update');

}

</script>