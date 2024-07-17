<template>




  <div class="mt-8 m-auto" style="max-width: 1024px; ">

    <Dialog style="width: 30rem;" modal header="Agregar una entrada" v-model:visible="showAddDialog">

      <InputText v-model="custom_file_name" class="w-100 my-4" style="width: 100%;" placeholder="Nombre del video"></InputText>
      <div style="width: 100%;display: flex; align-items: center; justify-content: center; border: 3px dashed var(--primary-color);aspect-ratio: 16 / 9; border-radius: .5rem;overflow: hidden;">

        <video v-if="previewFile" controls :src="previewFile" style="width: 100%; height: 100%;"></video>


        <input accept="video/*" style="display: none;" type="file" ref="inputFile" @change="handleFileChange">
        <Button v-if="!previewFile" text @click="inputFile.click()" label="Cargar un video" style="color: var(--primary-color);width: 100%; height: 100%;"></Button>
      </div>

      <template #footer>
          <div  style="display:  flex; justify-content: end;gap: 1rem;">

            <Button v-if="previewFile" @click="inputFile.click()" class="m-0" label="Cambiar video" severity="" style="background-color: var(--primary-color);color: #fff;"></Button>
            <Button @click="sendData" class="m-0" label="Enviar" severity="help"></Button>

          </div>
      </template>
    </Dialog>



    <Dialog style="width: 30rem;" modal header="Agregar una entrada" v-model:visible="showDelete">

      <p> Esta <b>seguro</b> de eliminar el video <b>{{ currentToDelete.file_name }} </b>?</p>

<template #footer>
    <div  style="display:  flex; justify-content: end;gap: 1rem;">

      <Button v-if="previewFile" @click="inputFile.click()" class="m-0" label="Cambiar video" severity="" style="background-color: var(--primary-color);color: #fff;"></Button>
      <Button severity="danger" @click="deletFile(currentToDelete.file_id)" class="m-0" label="Eliminar" ></Button>

    </div>
</template>
</Dialog>



    <div class="my-2 col-12 ">
                    <p style="font-weight: bold;" class="text-4xl text-center pl-0 ml-0"><i </i> Innovacion</p>

    </div>
      

    <div class="header" >
      <Button @click="openToAddNew" icon="pi pi-plus" severity="help" label="Agregar nuevo"></Button>
    </div>


    <div class="col-12 m-auto" style="max-width: 1280px;">
            <div class="">
                
              
                <DataView :value="files.files" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder"
                    :sortField="sortField">
                    
                    <template #grid="slotProps">
                        
                        <div  class="col-12 lg:col-6 md:col-6 xl:col-4" style="position: relative; ">
                            <div class="p-3" style=" height: 100%;position: relative;">
                                <div class="container -3 p-3 " style="height: 100%;overflow: hidden; border-radius: .3rem;">
                                  
                                    <img  class="foto"  style="width: 100%;aspect-ratio: 1 / 1;border-radius: .3rem; object-fit: cover;" :src="slotProps.data.thumbnailLink" alt="">

                                    
                                  
                                   <p class="text-2xl my-2" style="text-transform: capitalize;max-width: 100%;"> <b>{{ slotProps.data.file_name }}</b>  </p>
                                </div>


                                <div style="width: 100%;height: 100%; position: absolute;display: flex; align-items: center;pointer-events: none; justify-content: center; top: 0; left: 0; ">
                                  <a target="_blank" :href="slotProps.data.embedLink">
                                  <Button class="imagen"  style="aspect-ratio: 1 / 1;pointer-events: all; color: white;background-color: #00000080; width: 7rem;border-radius: 5rem;" icon="fa-solid fa-play text-6xl"></Button>
                                </a>
                                </div>
                               
                               
                            </div>

                            <Button @click="openToDelete(slotProps.data)" severity="danger" rounded icon="pi pi-times" style="position: absolute; right: 0;top: 0;"></Button>
                        </div>
                    </template>
                </DataView>

            </div>
    </div>


  </div>

</template>


<script setup>
import { onMounted , ref} from 'vue';
import { driveService } from '../../../service/drive/driveService';
import DataView from 'primevue/dataview';

const files = ref([])
const layout = ref('grid');
const currentToDelete =  ref({})
const loaded = ref(false)
const showDelete = ref(false)
const see = () => {
    loaded.value = true
}


onMounted(async() => {
  await update()
})

const openToDelete = (file) => {
  showDelete.value = true
  currentToDelete.value = file
}

const update = async () => {
  files.value = await driveService.getAlldrive()
}

const deletFile = async(file_id) => {
  await driveService.deleteData(file_id)
  showDelete.value = false
  update()

}

const previewFile = ref(

)

const custom_file_name = ref()

const handleFileChange = () => {
  const file = inputFile.value.files[0];
  if (file) {
    previewFile.value = URL.createObjectURL(file);
  }
};



const inputFile = ref(null)
const showAddDialog = ref(false)

const openToAddNew = () => {

  showAddDialog.value = true
  previewFile.value = null

}


const sendData = async () => {
  if (!custom_file_name.value || !previewFile.value) {
    alert("Tanto el nombre del archivo como el archivo son obligatorios");
    return;
  }

  const formData = new FormData();
  formData.append('file', inputFile.value.files[0]);
  formData.append('folder_id', '1heb6WmBQHyeNxkrttn1QHFoL-jbhXGd2');
  formData.append('custom_file_name', custom_file_name.value);

  await driveService.uploadData(formData);
  showAddDialog.value = false;
  await update();
};

</script>


<style scoped>


.imagen{
  transition: all .3s ease;
}


.imagen:hover {
  transform: scale(1.2);
}

.imagen > .container :hover{
  box-shadow: 0 0 5px red;
}
.container{
  transition:  all .3s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.266);
}
.container:hover{
  box-shadow: 0 0 5px red;
  /* background-color: rgba(0, 255, 247, 0.172); */
}

.header{
  display: flex;
  width: 100%;
  /* background-color: red; */
  /* height: 30px; */
  justify-content: end;
  padding:0 2rem ;
}
</style>