<template>
    <Dialog  v-model:visible="dialogStore.showSequenceStudents" :closable="false" class="p-0 m-3" header="Estudiantes"
        style="width: 60rem; min-height: 80vh;" modal>

 

 


        <template #header >
            <div style="width: 100%;">
                <h5> <b>Estudiantes</b></h5>
             <div style="display: flex;align-items: center;gap: 1rem;">
            
                <h6 class="m-0"> <b> Buscar empleado</b></h6>
                <InputText style="height: 2rem;" v-model="filters['global'].value"   placeholder="Buscar a un trabajador" /> 

                  <h6 v-if="sesionInscribir.id == 1" class="m-0 header" > <b>Buscar Por Sede</b> </h6>
                <InputText  v-if="sesionInscribir.id == 1" class="header" style="height: 2rem;" v-model="searchSite"   placeholder="Buscar una sede..." />

                 <h6 v-if="sesionInscribir.id == 2" class="m-0 header"> <b> Buscar Por Cargo</b></h6>
                <InputText v-if="sesionInscribir.id == 2" class="header" style="height: 2rem;" v-model="searchPosition"   placeholder="Buscar un cargo..." />

         
             </div>
            <div class="shadow-2 my-2" style=" display:  flex;gap: 1rem; width: 100%;border-radius: .3rem;align-items: center;" >
                <Button :class="sesion == s? 'selected': ''" style="border-radius: 0;color: var(--text-color);" @click="setSesion(s)" class="px-3 py-2" v-for=" s in sesions" text :label="s.name"></Button>


            </div>

            <div class="shadow-2" style="display:  flex;gap: 1rem; width: 100%;border-radius: .3rem;" >
                <Button size="small" :class="sesionInscribir == s? 'selected': ''" style="border-radius: 0;color: var(--text-color);" @click="setSesionInscribir(s)" class="px-3 py-2 my-" v-for=" s in sesionsInscribir" text :label="s.name"></Button>
         
            </div>
            </div>
            
            </template>


        <div class="container" style="height: 80vh;" >
            
        <div style="" v-if="sesionInscribir.id == 0" >
            
  
            <DataTable v-if="sesionInscribir.id == 0 && people.length > 0" :paginator="false" :rows="10" style="width: 100%;" v-model:selection="selectedStudents"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
        :filters="filters" 
        :value="people"  >




        <Column v-if="sesion.id == 1" class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

      
        <column class="p-2" header="Empleados" field="user_name">

            <template #body="data" > 

                 <div class="students"  style="display: flex; align-items: center; gap: 1rem">

                    <!-- <b v-if="sesion.id == 0"> <i class="pi pi-check"</i> </b> -->
                        <img 
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" /> <h6 class="p-0 my-0" style="text-transform:capitalize;">{{data.data.user_name?.toLowerCase()}}</h6>
              
            </div>


            </template>

            
        </column>
        
            </DataTable>



          
            
        </div>




        <div v-if="sesionInscribir.id == 1">

                


                    <div style="" v-for=" (employers, sede) in filteredGrouped" :key="sede"  >

                
            
        <DataTable v-if="sesionInscribir.id == 1 && employers.length > 0" :paginator="false" :rows="15" style="width: 100%;" v-model:selection="selectedStudentsBysite[sede]"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
        :value="employers"     :filters="filters"   >
      

        
   

        <Column  v-if="sesion.id == 1 "  class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

        <column class="p-2" style="text-transform: uppercase;" :header="sede" field="user_name">


        

        <template #body="data" > 

            <div class="students"  style="display: flex; align-items: center; gap: 1rem">


                    <img @click="verIMagen(data.option.dni)"
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />  
                                
                                
                                <h6 style="text-transform: capitalize;" class="p-0 my-0">{{data.data.user_name?.toLowerCase()}}</h6>
        
        </div>


        </template>


        </column>

        </DataTable>





        </div>



        </div>



        <div v-if="sesionInscribir.id == 2"> 


        <div style="" v-for=" (employers, sede) in filteredGrouped" :key="sede"  >

                    
    <DataTable v-if="sesionInscribir.id == 2 && employers.length > 0" :paginator="false" :rows="15" style="width: 100%;" v-model:selection="selectedStudentsBysite[sede]"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
    :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines  stripedRows class="col-12 m-auto p-0"
    :value="employers"  :filters="filters" >
     
    <Column  v-if="sesion.id == 1 "  class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " > </Column>

    <column class="p-2" style="text-transform: uppercase;" :header="sede" field="user_name">

    <template #body="data" > 

        <div class="students"  style="display: flex; align-items: center; gap: 1rem">

      
                <img @click="verIMagen(data.option.dni)"
                                :src="`${URI}/read-product-image/96/employer-${data.data.dni}`"
                                @error="onImageError(data.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;text-transform:capitalize;" />   <h6 class="p-0 my-0" style="text-transform: capitalize;">{{data.data.user_name?.toLowerCase()}}</h6>

    </div>


    </template>


    </column>

    </DataTable>





            </div>


    
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
import { ref, watch, onBeforeMount } from 'vue';
import { useDialogStore } from '@/store/trainingVideo/dialogs';
import { videoSequenceService } from '@/service/video_training/videoTrainingService';
import { loginStore } from '@/store/user.js'
import { useDataToInteract } from '@/store/trainingVideo/dataToInteract';
import { urlService } from '@/service/video_training/urlService';
import { fetchService } from '../../../../../service/utils/fetchService';
import { onMounted } from 'vue';
import { URI } from '../../../../../service/conection';
import { computed } from 'vue';
import { tr } from 'date-fns/locale';
import { FilterMatchMode } from 'primevue/api';





const searchEmployee = ref('')
const searchSite     = ref('')   // solo para “SEDES”
const searchPosition = ref('')   // solo para “CARGOS”



const filters = ref(null);

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


onBeforeMount(() => {

    initFilters()
});


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




const searhEmployer = ref("")




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




watch(sesionInscribir, (newVal) => {
  if (newVal.id === 1) {
    searchPosition.value = ''   // Entramos en “SEDES” → vaciamos CARGOS
  } else if (newVal.id === 2) {
    searchSite.value = ''       // Entramos en “CARGOS” → vaciamos SEDES
  }
},)

/* Opcional: si quieres que el usuario sólo pueda escribir en uno de los
   campos a la vez, añade esta pareja de watchers */
watch(searchSite,     () => { if (searchSite.value)     searchPosition.value = '' })
watch(searchPosition, () => { if (searchPosition.value) searchSite.value     = '' })






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


const normalize = str =>
  (str ?? '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

// ────── 2. Filtrado para la vista “INDIVIDUAL” ──────

/*
 * ────── 3. Filtrado agrupado (“SEDES” y “CARGOS”) ──────
 *   SEDES   → searchEmployee + searchSite
 *   CARGOS  → searchEmployee + searchPosition
 */
/* ——— 1. Término global escrito por el usuario ——— */
const globalTerm = computed(() =>
  normalize(filters.value?.global?.value)   // '' si aún es null/undefined
)

/* ——— 2. Lista “INDIVIDUAL” ——— */
const filteredPeople = computed(() => {
  if (sesionInscribir.value.id !== 0) return people.value           // vista agrupada
  const term = globalTerm.value
  return (Array.isArray(people.value) ? people.value : []).filter(p =>
    normalize(p.user_name).includes(term) || normalize(p.dni).includes(term)
  )
})

/* ——— 3. Listas agrupadas “SEDES” / “CARGOS” ——— */
const filteredGrouped = computed(() => {
  if (sesionInscribir.value.id === 0 || !people.value) return {}

  const empTerm  = globalTerm.value
  const siteTerm = normalize(searchSite.value)
  const posTerm  = normalize(searchPosition.value)
  const result   = {}

  for (const [groupName, list] of Object.entries(people.value)) {
    if (!Array.isArray(list)) continue                         // seguridad

    /* 1️⃣ Filtrar por nombre de grupo (sede o cargo) */
    if (
      (sesionInscribir.value.id === 1 && siteTerm && !normalize(groupName).includes(siteTerm)) ||
      (sesionInscribir.value.id === 2 && posTerm  && !normalize(groupName).includes(posTerm))
    ) continue

    /* 2️⃣ Filtrar empleados dentro del grupo */
    const sub = list.filter(p =>
      normalize(p.user_name).includes(empTerm) || normalize(p.dni).includes(empTerm)
    )

    /* 3️⃣ Sólo añadimos el grupo si quedó con elementos */
    if (sub.length) result[groupName] = sub
  }
  return result
})







</script>

<style scoped>



.selected{
    box-shadow: 0 .3rem 0 var(--primary-color);
    /* padding-bottom: 1rem; */
}

.header{
    animation:header .3s ease ;
}

@keyframes header {
    0%{
        opacity: 0;
       
        transform:translatex(1rem);
        background-color: rgb(55, 255, 65);
       
    }
       100%{
        opacity: 1;
        
        /* text-transform:translatex(3rem); */
    }
}


</style>