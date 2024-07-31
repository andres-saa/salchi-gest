<template>


<Dialog  v-model:visible="dialogStore.showvideoStudents"  class="p-0 m-3" header="Vistas"
style="width: 30rem;" modal>

<DataTable  :paginator="false" :rows="15" style="width: 100%;" 
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
        :value="employers" 
        
       
        >
        <template #header>
            <div class="pt-3" style="display:  flex; gap: 1rem;align-items: center;">
                <h6 class="m-0 p-0 text-cende">
                <b>
                    
                </b>
            </h6>

            </div>
        
        </template>

        <!-- <Column  class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column> -->

        <column class="p-2" style="text-transform: uppercase;" >

        <template #body="data" > 

            <div class="students"  style="display: flex; align-items: center; gap: 1rem">

          
            <!-- {{ marcas }} -->
                <Checkbox disabled binary v-model="marcas[data.data.user_id] "></Checkbox>
                    <img 
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />  <h6 class="p-0 my-0">{{data.data.name}}</h6>
        
        </div>


        </template>


        </column>

        </DataTable>
</Dialog>


</template>


<script setup>

import { ref, watch } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useDataToInteract } from '@/store/trainingVideo/dataToInteract';
import { urlService } from '@/service/video_training/urlService';
import { fetchService } from '../../../../../service/utils/fetchService';
import { onMounted } from 'vue';
import { URI } from '../../../../../service/conection';
import { computed } from 'vue';
import { da } from 'date-fns/locale';


const marcas = ref({})

const employers = ref([{}])
const dataToInteract = useDataToInteract()
// const emit = defineEmits(['update']);
// const user = loginStore()
const dialogStore = useDialogStore()
const onImageError = (gender, event) => {



const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
}


if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
} else
    event.target.src = genders[gender.trim()?.toLowerCase()]
}
// const dataToUpdate = ref({... dataToInteract.videoToUpdate,}

const visibleSites = ref( {

})


onMounted(async () => {
 



})


watch(()=> dialogStore.showvideoStudents , async(newval) => {

    if (newval) {
        const id = dataToInteract.videoUsersId
        employers.value = await fetchService.get(`${URI}/list-video-mark-by-video-id/${id}`,'cargando asistencia')
        employers.value?.forEach( e =>  marcas.value[e.user_id] = e.mark )
    }
},{deep:true})

</script>