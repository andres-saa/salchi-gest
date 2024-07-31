<template>
    <Dialog  v-model:visible="dialogStore.showSequenceStudents" :closable="false" class="p-0 m-3" header="Estudiantes"
        style="width: 30rem; min-height: 80vh;" modal>

      <!-- {{ total_to_enrroll }} -->

  



 


        <template #header >
            <div style="width: 100%;">
                <h5> <b>Estudiantes</b></h5>
            
            <div class="shadow-2 my-2" style="display:  flex;gap: 1rem; width: 100%;border-radius: .3rem;" >
                <Button :class="sesion == s? 'selected': ''" style="border-radius: 0;color: var(--text-color);" @click="setSesion(s)" class="px-3 py-2" v-for=" s in sesions" text :label="s.name"></Button>
         
            </div>

            <div class="shadow-2" style="display:  flex;gap: 1rem; width: 100%;border-radius: .3rem;" >
                <Button size="small" :class="sesionInscribir == s? 'selected': ''" style="border-radius: 0;color: var(--text-color);" @click="setSesionInscribir(s)" class="px-3 py-2 my-" v-for=" s in sesionsInscribir" text :label="s.name"></Button>
         
            </div>
            </div>
            
            </template>


        <div class="container" style="height: 80vh;" >
        <div style="" v-if="sesionInscribir.id == 0" >

            <DataTable v-if="sesionInscribir.id == 0 && people.length > 0" :paginator="false" :rows="15" style="width: 100%;" v-model:selection="selectedStudents"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
        :value="people"  >
        <template #header>

        </template>

        <Column v-if="sesion.id == 1" class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

      
        <column class="p-2" header="Empleados">

            <template #body="data" > 

                 <div class="students"  style="display: flex; align-items: center; gap: 1rem">

                    <b v-if="sesion.id == 0"> <i class="pi pi-check"</i> </b>
                        <img 
                                :src="`${URI}/read-product-image/96/employer-${sesion.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" /> <h6 class="p-0 my-0">{{data.data.user_name}}</h6>
              
            </div>


            </template>

            
        </column>
        
        </DataTable>



          
            
        </div>




        <div style="" v-for=" (employers, sede) in people" :key="sede" v-if="sesionInscribir.id == 1" >

                
        <DataTable v-if="sesionInscribir.id == 1 && employers.length > 0" :paginator="false" :rows="15" style="width: 100%;" v-model:selection="selectedStudentsBysite[sede]"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
        :value="employers"  >
        <template #header>
            <div class="pt-3" style="display:  flex; gap: 1rem;align-items: center;">
                

            

            <!-- <Button text="" severity="help" class="m-0 p-0" iconPos="right"  icon="pi pi-angle-up"></Button> -->
            </div>
        
        </template>

        <Column  v-if="sesion.id == 1 "  class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

        <column class="p-2" style="text-transform: uppercase;" :header="sede">

        <template #body="data" > 

            <div class="students"  style="display: flex; align-items: center; gap: 1rem">

                <b v-if="sesion.id == 0"> <i class="pi pi-check"</i> </b>
                    <img @click="verIMagen(data.option.dni)"
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />  <h6 class="p-0 my-0">{{data.data.user_name}}</h6>
        
        </div>


        </template>


        </column>

        </DataTable>





        </div>




            
            <div style="" v-for=" (employers, sede) in people" :key="sede" v-if="sesionInscribir.id == 2" >

                    
    <DataTable v-if="sesionInscribir.id == 2 && employers.length > 0" :paginator="false" :rows="15" style="width: 100%;" v-model:selection="selectedStudentsBysite[sede]"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
    :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
    :value="employers"  >
    <template #header>
        <div class="" style="display:  flex; gap: 1rem;align-items: center;">
            
            <Divider class="p-0 m-2"></Divider>
       

        <!-- <Button text="" severity="help" class="m-0 p-0" iconPos="right"  icon="pi pi-angle-up"></Button> -->
        </div>

    </template>

    <Column  v-if="sesion.id == 1 "  class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

    <column class="p-2" style="text-transform: uppercase;" :header="sede">

    <template #body="data" > 

        <div class="students"  style="display: flex; align-items: center; gap: 1rem">

            <b v-if="sesion.id == 0"> <i class="pi pi-check"</i> </b>
                <img @click="verIMagen(data.option.dni)"
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />   <h6 class="p-0 my-0">{{data.data.user_name}}</h6>

    </div>


    </template>


    </column>

    </DataTable>





    </div>


    


        </div>

    <template #footer>
        <div class="pt-4" style="display: flex;justify-content: end;gap: 1rem">
            <Button text class="m-0" @click="dialogStore.showSequenceStudents = false" severity="danger" label="Cerrar"></Button>
            <Button  class="m-0" @click="sendData" severity="help" label="Actualizar Estudiantes"></Button>
        </div>
           
        </template>
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

function combineUsers(data) {
    // Inicializa un array vacío para almacenar los resultados combinados
    let combinedArray = [];

    // Recorre cada grupo en los datos
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            // Usa el método concat para combinar todos los arrays de usuarios
            combinedArray = combinedArray.concat(data[key]);
        }
    }

    return [...combinedArray, ...selectedStudents.value];
}



const total_to_enrroll = computed( () => {
  
      return combineUsers(selectedStudentsBysite.value)
    
})

const sesions = ref([
{
        name:'INSCRITOS',
        id:0
    },
    {
        name:'INSCRIBIR',
        id:1
    }
  
])
// )
const sesionsInscribir = ref([
{
        name:'INDIVIDUAL',
        id:0
    },
    {
        name:'SEDES',
        id:1
    },
    {
        name:'CARGOS',
        id:2
    }
  
])

const sesionInscribir = ref(sesionsInscribir.value[0])




const sendData = async() => {

    const data = {
        sequence_id:dataToInteract.secuence_students.sequence_id,
        users:total_to_enrroll.value.map(e => e.id)
    }

    console.log(data)

    await fetchService.put(`${URI}/togle_users_to_sequence_video`,data,'actualizando estudiantes')
    sesion.value = sesions.value[0]
}





const sesion = ref(sesions.value[0])

const update = async(sesion, sesionInscribir) => {

    const sequence_id = dataToInteract.secuence_students.sequence_id
    if(sesion == 0) {
        if (sesionInscribir == 0) {
            people.value = await fetchService.get(`${URI}/list-video-training-student-enrolled-by-sequence-id/${sequence_id}`)
        } else if(sesionInscribir == 1){
            people.value = await fetchService.get(`${URI}/list-video-training-student-enrolled-by-sequence-id-group-by-site/${sequence_id}`)
        } else if(sesionInscribir == 2){
            people.value = await fetchService.get(`${URI}/list-video-training-student-enrolled-by-sequence-id-group-by-position/${sequence_id}`)

        }
    }  
    
    
    if(sesion == 1) {
        if (sesionInscribir == 0) {
            people.value = await fetchService.get(`${URI}/list-all-video-training-student-by-sequence-id/${sequence_id}`)
        } else if(sesionInscribir == 1){
            people.value = await fetchService.get(`${URI}/list-all-video-training-student-by-sequence-id-group-by-site/${sequence_id}`)
        } else if(sesionInscribir == 2){
       
            people.value = await fetchService.get(`${URI}/list-all-video-training-student-by-sequence-id-group-by-position/${sequence_id}`)
        }
    }


    if (sesionInscribir === 0) {
        selectedStudents.value = people.value?.filter(p => p.enrolled) || [];

    } 
    else  {
        selectedStudentsBysite.value = {};

        // Iterar sobre las claves del objeto people.value
        for (const [site, students] of Object.entries(people.value || {})) {
            selectedStudentsBysite.value[site] = students?.filter(p => p.enrolled);
        }
        
    }
    
}






const people = ref([{}])

const selectedStudents = ref ([])


const selectedStudentsBysite = ref({});
const selectedStudentsByPosition = ref({});

// onMounted(async () => {
//    await update(0, sesionInscribir.value.id)
// })


watch( () => dialogStore.showSequenceStudents, async(newVal) => {

if(newVal){
    sesion.value = sesions.value[0]
    sesionInscribir.value = sesionsInscribir.value[0]
    await update(0, 0)
}

},{deep:true} )




watch(sesion,async( newVal  ) => {
    const sequence_id = dataToInteract.secuence_students.sequence_id
    
       await update(newVal.id, sesionInscribir.value.id)
    
   }
 ,{deep:true})


watch(sesionInscribir,async( newVal , oldVal ) => {


    selectedStudents.value = []
    selectedStudentsBysite.value = {}

    console.log(combineUsers(selectedStudentsBysite.value))


    await update(sesion.value.id, newVal.id)
    console.log(sesion.value.id, newVal.id)



} ,{deep:true})











const setSesion = ( s) => {

    sesion.value = s
}

const setSesionInscribir = ( s) => {

sesionInscribir.value = s
}




// const openToDelete = (data) =>{
// dataToInteractStore.sesionToDelete = {}
// dataToInteractStore.sesionToDelete = data
// dialogStore.deleteSesion = true
// }



// const openToEdit = (data) =>{
// dataToInteractStore.sesionToUpdate = {}
// dataToInteractStore.sesionToUpdate = data
// dialogStore.updateSesion = true
// }



// const updateSesions = async() => {
//     videos.value = await videoSequenceService.getSesions()

// }




// const dataToSend = ref({})

// const updateData = async () => {


//     if (!urlService.ValidateThumbnail(dataToUpdate.value.video_link)){
//         alert ('url invalida debe ser una url valida de youtube')
//         return
//     }
    
    
//     const video_id = dataToUpdate.value.video_id
//     const data = {

//         name:dataToUpdate.value.video_name,
//         link:dataToUpdate.value.video_link,
//         description:dataToUpdate.value.description
        
    
//     }

        
//     await videoSequenceService.updateVideo(video_id,data)
//     dialogStore.updateVideo = false
//     emit('update');

// }

</script>

<style scoped>



.selected{
    box-shadow: 0 .3rem 0 var(--primary-color);
    /* padding-bottom: 1rem; */
}


</style>