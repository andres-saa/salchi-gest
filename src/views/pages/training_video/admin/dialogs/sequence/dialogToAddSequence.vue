<template>
    <Dialog v-model:visible="dialogStore.addSequence" class="p-0 m-3" header="Registrar nuevo curso"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre del nuevo curso</h6>
            <InputText v-model="dataToSend.name" style="width: 100%;"></InputText>

            <h6>Descripcion u objetivo</h6>
            <Textarea v-model="dataToSend.description" style="width: 100%; resize: none;" rows="4">

            </Textarea>
        </div>
        

        <template #footer>
            <Button class="m-0" @click="sendData" severity="help" label="Crear Curso"></Button>
        </template>

        

    </Dialog>

</template>



<script setup>
import { ref } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useRoute } from 'vue-router';
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()
const dataToSend = ref({})


const route = useRoute()
const sendData = async () => {
    
    const data = {
        ...dataToSend.value,
        created_by:user.rawUserData.id,
        sesion_id:route.params.sesion_id}

        
    await videoSequenceService.createSequence(data)
    dialogStore.addSequence = false
    emit('update');

}

</script>