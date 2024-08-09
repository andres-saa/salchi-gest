<template>
  


<div class="col-12" style="display:flex">
                    <ProgressSpinner v-if="charging" style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>

       

    <DataTable style="max-width: 900px; margin: auto    ;" ref="dt" :value="archivos" v-model:selection="selectedFiles" dataKey="id" :paginator="true"
                    
                    :rows="20" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25,100]"
                    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} archivos"
                    responsiveLayout="scroll" scrollable scroll-height="62vh" >
                    <template #header style="z-index:200">
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center" >
                            <p class="m-0  text-2xl my-4" >Archivos de la capacitacion 
 </p> 
                            <span class="block mt-2 md:mt-0 p-input-icon-left">
                              
                                <i class="pi pi-search" />
                                <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                            </span>
                            
                        </div>
                        <div style="display: flex; justify-content: end;">
                          <Button v-if="getUserId() == capacitacion.creator_id" label="Subir archivo"  icon="pi pi-upload" class="p-button-success " @click="showDialog" />

                        </div>
                    </template>

                    <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen  ></Column>

                    <Column class="p-2" field="id" header="Id" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            <span class="p-column-title">Code</span>
                            {{ training.data.id }}
                        </template>
                    </Column>


                    <Column class="p-2" field="id" header="" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            <div>
             <img style="height: 3rem;" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="">
        </div>
                        </template>
                    </Column>

                    

                    <Column class="p-2" field="file_name" header="Nombre del archivo" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            <span class="p-column-title">Code</span>
                            {{ training.data.file_name }}
                        </template>
                    </Column>


                    <Column class="p-2" field="type" header="tipo" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            <span class="p-column-title">Code</span>
                            {{ training.data.file_type }}
                        </template>
                    </Column>



                    <Column class="p-2" field="upload_date" header="Fecha de subida" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            <span class="p-column-title">Code</span>
                            {{ training.data.upload_date }}
                        </template>
                    </Column>

                   

                    <Column class="p-2" field="location" header="Acciones" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="training">
                            
                            <Button text class="p-0 mx-2" severity="success" @click="downloadFile(training.data.training_id, training.data.file_name)">
            <span class="text-right"><i :class="PrimeIcons.DOWNLOAD"></i></span>
        </Button>
                        
                           
                            <!-- <Button text class="p-0 mx-2" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.PENCIL"></i></span></Button> -->
                           
                            <Button text class="p-0 mx-2" severity="danger" style="width: 100;"><span class="text-right" style=""><i :class="PrimeIcons.TRASH"></i></span></Button>

                            <!-- {{ training.data.status }} -->
                        </template>
                    </Column>

</DataTable> 



<!-- Diálogo para subir archivo -->
<Dialog v-model:visible ="dialogVisible" style="width: 450px" header="Subir Archivo de Capacitación" modal :closable="true" @hide="onHide">
  <form @submit.prevent="submitFile" enctype="multipart/form-data">
    <div class="field">
      <label for="customFilename" class="col-12 pl-0">Nombre del Archivo</label>
      <InputText id="customFilename" class="col-12" v-model="form.custom_filename" required />
    </div>
    <div class="field">
      <!-- <label for="file">Archivo</label> -->
      

      <div style="background-color: var(--green-100);border-radius: 0.2rem;" class="col-12  my-4" v-if="form.file">{{ form.file.name }}</div>

    </div>

    
   
  </form>


  <template #footer>
      <div>
        <input type="file" id="file" ref="fileInput" @change="handleFileUpload" required  style="display: none;"/>
      <Button @click="()=> {fileInput.click()}" text label=" Cargar archivo"></Button>
      <Button label="Enviar" class="" severity="help" @click="submitFile" />
      </div>
    </template>
</Dialog>


</template>


<script setup>
import { onMounted,onBeforeMount, ref } from 'vue';
import { URI } from '@/service/conection';
// import { PrimeIcons } from 'primevue/api';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { getUserDni, getUserId } from '@/service/valoresReactivosCompartidos';

// import { onBeforeMount } from 'vue'
import { useToast } from 'primevue/usetoast';
// import { PrimeIcons } from 'primevue/api';
import { useRoute } from 'vue-router';



const capacitacion = ref({})

const charging = ref(true)
const fileInput = ref(null)
const dialogVisible = ref(false);
const form = ref({
  training_id: '',
  custom_filename: '',
  file: null
});

const showDialog = () => {
  dialogVisible.value = true;
};

const onHide = () => {
  dialogVisible.value = false;
  // Restablecer el formulario al cerrar el diálogo
  form.value = {
    training_id: '',
    custom_filename: '',
    file: null
  };
};



const handleFileUpload = (event) => {
  form.value.file = event.target.files[0];
};

const submitFile = async () => {

    const capacitacion_id = route.params.capacitacion_id
  if (form.value.file) {
    const formData = new FormData();
    formData.append('file', form.value.file);
    formData.append('custom_filename', form.value.custom_filename);
    formData.append('training_id', form.value.training_id);

    try {
      const response = await fetch(`${URI}/upload-training-file/${capacitacion_id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        
        getTrainingFiles().then( data => archivos.value = data)

        toast.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo subido correctamente', life: 3000 });
        onHide(); // Cierra el diálogo
      } else {
        throw new Error(`Error al subir el archivo: ${response.statusText}`);
      }
    } catch (error) {
      toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    }
  } else {
    toast.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor, selecciona un archivo', life: 3000 });
  }
};































const selectedFiles = ref()




const archivos = ref([])

const filters = ref(null);

const initFilters = () => {
filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
};

};



onBeforeMount( () => {
        initFilters()
    })
    


    const downloadFile = (trainingId, fileName) => {
    const fileUrl = `${URI}/get-training-file/${trainingId}/${fileName}`;
    fetch(fileUrl).then(response => {
        if (response.ok) return response.blob();
        throw new Error('Network response was not ok.');
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a); // Append the element to the DOM
        a.click();
        a.remove(); // Remove the element from the DOM
        window.URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error downloading the file:', error));
};



async function getTrainingFiles() {
    const capacitacion_id = route.params.capacitacion_id
    
    try {
        const response = await fetch(`${URI}/training-files/${capacitacion_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
       
        let data = await response.json();

        // Agrupar adicionalmente por posición dentro de cada sede
        
        
        charging.value = false

        return data 
        // groupedUsersBySite.value = data;
        // charging.value = false

        
    } catch (error) {
        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}


onMounted(() => {
    getCapacitacion().then(data => capacitacion.value = data)
})



const getCapacitacion = async () => {

const capacitacion_id = route.params.capacitacion_id 

try {
    const response = await fetch(`${URI}/training/${capacitacion_id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    
} catch (error) {
    console.error('Error al obtener las capacitaciones:', error);
    // Manejar el error de alguna manera o re-lanzarlo
    throw error;
}
};


onMounted( async() => {


    getTrainingFiles().then( data => archivos.value = data)


})































//     sitesDropValues,
//     GenderDropValues,
//     PositionDropValues,
//     maritalStatusDropValues,
//     epsDropValues,
//     educationLevelDropValues,
//     employmentContractTypeDropValues,
//     pantSizesDropValues,
//     shirtSizesDropValues,
//     bloodTypesDropValues,
//     housingTypesDropValues,
//     statusDropValues,
//     vehicleTypesDropValues,
//     findSiteById,
//     findSiteByName,
//     getSites

// } from '@/service/dropDownAux';


// import { useToast } from 'primevue/usetoast';
const sending = ref(false)

    const incluirLink = ref(false);
const toast = useToast();
const route = useRoute()
const allUsers = ref(false)
const groupedUsersBySite = ref([]);
const groupedUsersByPosition = ref([]);
const training = ref({})



// const areAllSelected = computed(() => {
//     const allUserIds = groupedUsersBySite.value.reduce((acc, group) => {
//         return acc.concat(group.employers.map(user => user.id));
//     }, []);

//     return allUserIds.every(userId => usersSelected.value.includes(userId));
// });







// Función para obtener usuarios agrupados por posición




// const deselectBySiteId = (siteId) => {
//     usersSelected.value = usersSelected.value.filter(
//         userId => !users.value.find(user => user.id === userId && user.site_id === siteId)
//     );
// };

    // const gettraininges = async () => {

    //     const training_id = route.params.training_id 

    //     try {
    //         const response = await fetch(`${URI}/training/${training_id}`);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         return data;
            
    //     } catch (error) {
    //         console.error('Error al obtener las traininges:', error);
    //         // Manejar el error de alguna manera o re-lanzarlo
    //         throw error;
    //     }
    // };







// const selectBySiteId = (siteId) => {
//     users.value.forEach(user => {
//         if (user.site_id === siteId && !usersSelected.value.includes(user.id)) {
//             usersSelected.value.push(user.id);
//         }
//     });
// };

// const selectByPosition = (position) => {
//     users.value.forEach(user => {
//         if (user.position === position && !usersSelected.value.includes(user.id)) {
//             usersSelected.value.push(user.id);

onMounted(() => {
    // gettraininges().then(data => training.value = data)

    
})


































</script>