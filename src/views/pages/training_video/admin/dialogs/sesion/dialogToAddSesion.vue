<template>
    <Dialog v-model:visible="dialogStore.addSesion" class="p-0 m-3" header="Registrar nueva escuela"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre de la nueva escuela</h6>
            <InputText v-model="dataToSend.name" style="width: 100%;"></InputText>

            <h6>Descripcion u objetivo</h6>
            <Textarea v-model="dataToSend.description" style="width: 100%; resize: none;" rows="4">

            </Textarea>
        </div>

        <template #footer>
            <Button class="m-0" @click="sendData" severity="help" label="Crear escuela"></Button>
        </template>

    </Dialog>

</template>



<script setup>
import { ref } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()
const dataToSend = ref({})

const sendData = async () => {
    
    const data = {
        ...dataToSend.value,
        created_by:user.rawUserData.id
        }

        
    await videoSequenceService.createSesion(data)
    dialogStore.addSesion = false
    emit('update');

}

</script>