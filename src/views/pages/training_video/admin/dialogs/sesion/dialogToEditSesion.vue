<template>
    <Dialog  v-model:visible="dialogStore.updateSesion" class="p-0 m-3" header="Actualizar escuela"
        style="width: 30rem;" modal>
        <div style="height: 100%;">
            <h6>Nombre de la escuela</h6>
            <InputText v-model="dataToUpdate.sesion_name" style="width: 100%;"></InputText>

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
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useDataToInteract } from '@/store/trainingVideo/dataToInteract';


const dataToInteract = useDataToInteract()
const emit = defineEmits(['update']);
const user = loginStore()
const dialogStore = useDialogStore()

const dataToUpdate = ref({... dataToInteract.sesionToUpdate,}

   
)

watch(() =>     dataToInteract.sesionToUpdate, (newVal) => {
    dataToUpdate.value = {...newVal}
}, {deep:true})





const dataToSend = ref({})

const updateData = async () => {
    
    const sesion_id = dataToUpdate.value.sesion_id
    const data = {

        name:dataToUpdate.value.sesion_name,
        description:dataToUpdate.value.description
        
    
    }

        
    await videoSequenceService.updateSesion(sesion_id,data)
    dialogStore.updateSesion = false
    emit('update');

}

</script>