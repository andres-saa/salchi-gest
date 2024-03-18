<template>


    <Dialog header="Agregar nueva aplicación" v-model:visible="isApplicationDialogVisible" modal
        :style="{ width: '50vw' }">
        <div class="field">
            <label for="appName">Nombre de la aplicación</label>
            <InputText id="appName" v-model="applicationData.name" />
        </div>
        <div class="field">
            <label for="username">Nombre de usuario</label>
            <InputText id="username" v-model="applicationData.username" />
        </div>
        <div class="field">
            <label for="password">Contraseña</label>
            <InputText id="password" type="password" v-model="applicationData.password" />
        </div>
        <Button label="Agregar" @click="addApplication" />
    </Dialog>

    <Dialog header="Agregar nueva página web" v-model:visible="isWebPageDialogVisible" modal :style="{ width: '50vw' }">
        <div class="field">
            <label for="pageName">Nombre de la página</label>
            <InputText id="pageName" v-model="webPageData.page" />
        </div>
        <div class="field">
            <label for="username">Nombre de usuario</label>
            <InputText id="username" v-model="webPageData.username" />
        </div>
        <div class="field">
            <label for="password">Contraseña</label>
            <InputText id="password" type="password" v-model="webPageData.password" />
        </div>
        <Button label="Agregar" @click="addWebPage" />
    </Dialog>




    <Dialog header="Agregar nuevo datáfono" v-model:visible="isDataphoneDialogVisible" modal :style="{ width: '50vw' }">
        <div class="field">
            <label for="uniqueCode">Código único</label>
            <InputText id="uniqueCode" v-model="dataphoneData.unique_code" />
        </div>
        <div class="field">
            <label for="externalCode">Código externo</label>
            <InputText id="externalCode" v-model="dataphoneData.external_code" />
        </div>
        <Button label="Agregar" @click="addDataphone" />
    </Dialog>

    <Dialog header="Agregar nueva red WiFi" v-model:visible="isWifiDialogVisible" modal :style="{ width: '50vw' }">
        <div class="field">
            <label for="wifiUsername">Nombre de usuario</label>
            <InputText id="wifiUsername" v-model="wifiData.username" />
        </div>
        <div class="field">
            <label for="wifiPassword">Contraseña</label>
            <InputText id="wifiPassword" v-model="wifiData.password" type="password" />
        </div>
        <Button label="Agregar" @click="addWifiNetwork" />
    </Dialog>



    <Dialog header="Agregar nueva cámara" v-model:visible="isCameraDialogVisible" modal :style="{ width: '50vw' }"
        :closable="true" :showHeader="true">
        <div class="field">
            <label for="username">Nombre de usuario</label>
            <InputText id="username" v-model="cameraData.username" />
        </div>
        <div class="field">
            <label for="password">Contraseña</label>
            <InputText id="password" v-model="cameraData.password" />
        </div>
        <Button label="Agregar" @click="addCamera" />
    </Dialog>


    <Dialog header="Agregar nueva caja fuerte" v-model:visible="isSafeBoxDialogVisible" modal :style="{ width: '50vw' }">
        <div class="field">
            <label for="boxName">Nombre de la caja</label>
            <InputText id="boxName" v-model="safeBoxData.boxName" />
        </div>
        <div class="field">
            <label for="password">Contraseña</label>
            <InputText id="password" v-model="safeBoxData.password" type="password" />
        </div>
        <Button label="Agregar" @click="addSafeBox" />
    </Dialog>














    <div class="col-12 mx-auto md:shadow-3 my-4 md:p-3" style="max-width: 600px; border-radius: 1rem;">


        <!-- {{ directories }} -->
        <p class="p-3 text-2xl text-center" style="font-weight: bold;"> <i class="fa-solid fa-folder-open"></i>
            Directorio</p>

        <div class="p-0" style="overflow: hidden;">
            <Dropdown v-model="store.currentSite" :options="sites" optionLabel="site_name" style="max-width: 30rem;"
                class="col-12 p-0 md:col-4 md:m-3 " placeholder="Sede">
            </Dropdown>

            <div class="col-12 p-0 my-5 ">
              

                <img class="img-profile-add p-0" style="width: 100%; border-radius: 1rem;  object-fit: cover; border-radius: 1rem; aspect-ratio: 4 / 2;background-color: #84e4ff;"
            :src="urlsite_photo ? urlsite_photo : `${URI}/read-product-image/600/site-${store.currentSite.site_id}`"
            alt="">
        <div class="field col-12 mt-6 mb-6 p-0" style="display: flex;justify-content: end;gap: 1rem;"> 
            <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" style="display: none;">
            <Button severity="info" class="" style="width: min-content;"
                                @click="$refs.fileInput.click();">
                                <i class="fa-solid fa-camera"></i>

                            </Button>


                            <Button v-if="file" severity="help" class="" style="width: min-content;"
                                @click="() => {urlsite_photo = `${URI}/read-product-image/600/site-${store.currentSite.site_id}`; file = ''}">
                                <i class="fa-solid fa-spinner"></i>

                            </Button>

                            <Button v-if="file" severity="success" class="" style="width: min-content;"
                                @click="uploadUsersite_photo(file,store.currentSite.site_id)">
                                <i class="fa-solid fa-floppy-disk"></i>

                            </Button>

        </div>
        


            </div>


            <!-- {{ selectedSite }} -->

            <div class="grid p-0 m-0" style="">


                <p class="text-xl   mb-1 col-12" style="font-weight: bold;"><i class="fa-solid fa-circle-info mr-3"></i>
                    INFORMACION BASICA</p>

                <div style="overflow-x: auto;" class="py-3 md:py-0">

                    <div v-for="(item, index) in infoItems" :key="index" class="my-0 p-3 py-0"
                        style="display: flex; align-items: center; gap: 1rem;">
                        <div class="p-0">
                            <p style="font-weight: bold; min-width: 10rem;">{{ item.label }}:</p>
                        </div>
                        <!-- <Button size="large" severity="help" text  class="m-1 p-0"
                    style="min-width: max-content;"> <i class="fa-solid fa-pen-to-square "></i>
                </Button> -->


                        <div v-if="!item.isLink" class="" style="min-width: max-content;">
                            {{ store.currentSite[item.value] }}
                        </div>

                        <!-- <i class="mr-2" :class="PrimeIcons.PENCIL"></i> -->

                        <a v-else class="" style="min-width: max-content;" :href="store.currentSite[item.value]">
                            {{ store.currentSite[item.value] }}
                        </a>



                    </div>


                </div>
                <div class="col-12 p-0 my-4" style="display: flex;justify-content: start;align-items: center;">

                    <div style="background-color: #a855f7; height: 0.3rem;border-radius: 0 1rem 1rem 0; width: 100%;">

                    </div>
                </div>


                <div class="col-12  mt-4 mb-1 col-12" style="background-color: #f6f7c1;border-radius: 0.5rem;position: relative">


                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> CAMARAS</p>
                        <Button @click="isCameraDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>



                    <div v-for="(item, index) in directories.cameras" :key="index" class="my-0 col-12 py-0" style="">
                        <Button  size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0" @click="confirmDeleteCamera(item.camera_id)" />

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Usuario {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.username }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Clave {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.password }}
                            </div>

                        </div>

                        <Divider class="p-0 m-1"></Divider>






                    </div>

                </div>


            

                <div class="col-12  mt-4 mb-1 col-12" style="background-color: #84e4ff;position: relative;border-radius: 0.5rem;">
                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> CAJAS FUERTES</p>
                        <Button @click="isSafeBoxDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>

                    <div style="overflow-x: auto;">
                    <div v-for="(item, index) in directories.safe_boxes" :key="index" class="my-0 col-12 py-0" style="">

                        <Button size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0" @click="confirmDeleteSafeBox(item.safe_box_id)" />

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Usuario {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.box_name }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Clave {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.password }}
                            </div>

                        </div>

                        <Divider class="p-0 m-1"></Divider>






                    </div>

                    </div>
                </div>


      




                <div class="col-12  mt-4 mb-1 col-12" style="background-color: #d0f5be;position: relative;border-radius: 0.5rem;">
                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> WIFI'S</p>
                        <Button @click="isWifiDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>

                    <div style="overflow-x: auto; ">

                        
                        <div style="" v-for="(item, index) in directories.wifi_networks" :key="index" class="my-0 col-12 py-0">

                            <Button size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0" @click="confirmDeleteWifi(item.wifi_id)" />


                            <div style="display: flex;align-items: center; gap: 1rem;">
                                <div class="p-0">
                                    <p style="font-weight: bold; min-width: 10rem;">Nombre:</p>
                                </div>



                                <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                    {{ item.username }}
                                </div>
                                

                               

                            </div>

                            

                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div class="p-0">
                                    <p style="font-weight: bold; min-width: 10rem;">Clave:</p>
                                </div>



                                <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                    {{ item.password }}
                                </div>

                            </div>

                            <Divider class="p-0 m-1"></Divider>






                        </div>
                    </div>


                </div>



                <div class="col-12  mt-4 mb-1 col-12" style="background-color: #e7ceff; position: relative;border-radius: 0.5rem;">
                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> DATAFONOS</p>
                        <Button @click="isDataphoneDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>
                    <div v-for="(item, index) in directories.dataphones" :key="index" class="my-0 col-12 py-0" style="">

                        <Button size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0" @click="confirmDeleteDataphone(item.dataphone_id)" />



                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Codigo unico {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.unique_code }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Codigo externo {{ index + 1 }}:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.external_code }}
                            </div>

                        </div>

                        <Divider class="p-0 m-1"></Divider>






                    </div>
                </div>


                <div class="col-12  mt-4 mb-1 col-12"
                    style="background-color: rgb(237 120 85 / 43%);border-radius: 0.5rem;position: relative">

               

                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> PAGINAS WEB</p>
                        <Button @click="isWebPageDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>


                    <div v-for="(item, index) in directories.web_pages" :key="index" class="my-0 col-12 py-0" style="">
                        <Button size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0"  @click="confirmDeleteWebPage(item.web_page_id)" />

                                    <!-- {{ item }} -->
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Nombre :</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.page }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Usuario:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.username }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Clave:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.password }}
                            </div>

                        </div>

                        <Divider class="p-0 m-1" style="color:red;background-color: red;"></Divider>






                    </div>

                </div>





                <div class="col-12  mt-4 mb-1 col-12" style="background-color: #ddedea;border-radius: 0.5rem;position: relative">


                    <div class="text-xl p-0  mb-1 col-12" style="display: flex; justify-content: space-between;">
                        <p style="font-weight: bold;"><i class="fa-solid fa-video mr-3"></i> APLICACIONES</p>
                        <Button @click="isApplicationDialogVisible = true" class="p-0" size="small" rounded
                            style="aspect-ratio: 1 / 1;display: flex;align-items: center; justify-content: center; width: 3rem; height: 3rem;"
                            severity="warning">
                            <i class="fa-solid fa-plus text-xl"></i> </Button>
                    </div>


                    <div v-for="(item, index) in directories.applications " :key="index" class="my-0 col-12 py-0"
                        style="">

                        <Button size="small" style="position: absolute;right:     1rem; " icon="pi pi-trash" 
                                    class="p-button-rounded p-button-danger p-0" @click="confirmDeleteApplication(item.application_id)" />

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Nombre :</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.name }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Usuario:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.username }}
                            </div>

                        </div>

                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="p-0">
                                <p style="font-weight: bold; min-width: 10rem;">Clave:</p>
                            </div>



                            <div v-if="!item.isLink" class="" style="min-width: max-content;">
                                {{ item.password }}
                            </div>

                        </div>

                        <!-- <Divider class="p-0 m-1"></Divider> -->






                    </div>



                </div>









                <div class="col-12 p-0 my-4" style="display: flex; justify-content: start;align-items: center;">

                    <div style="background-color: #ef4444; height: 0.3rem;border-radius: 0 1rem 1rem 0; width: 100%;">

                    </div>

                </div>



                <p class="text-xl   mb-1 col-12" style="font-weight: bold;"><i class="fa-solid fa-clock mr-3"></i>
                    HORARIO</p>



                <!-- <iframe src="https://maps.app.goo.gl/6kCLNgDfz84224ZV9" frameborder="0"></iframe> -->

                <!-- <Divider vertical></Divider> -->
                <div class="col-12 ">
                    <horarios></horarios>

                </div>

            </div>
        </div>



    </div>





</template>


<script setup>
import { siteService } from '@/service/siteService.js'
import { onMounted, ref, watch } from 'vue'
import { URI } from '../../service/conection';
import horarios from './horarios.vue';
const sites = ref()
import { useDirectoryStore } from '../../store/directorio';
import { useReportesStore } from '../../store/reportes';
import { PrimeIcons } from 'primevue/api';
const store2 = useReportesStore()





const confirmDeleteWifi = (wifiId) => {
    // Mostrar diálogo de confirmación
    // Si confirma, llamar a deleteWifi
    if (confirm('¿Estás seguro de que quieres eliminar esta red Wi-Fi?')) {
        deleteWifi(wifiId);
    }
};

const deleteWifi = (wifiId) => {
    const apiUrl = `${URI}/site/${store.currentSite.site_id}/wifi-network/${wifiId}`;

    fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            // Actualizar la lista de redes Wi-Fi
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


const confirmDeleteSafeBox = (safeBoxId) => {
  // Mostrar diálogo de confirmación
  if (confirm('¿Estás seguro de que quieres eliminar esta caja fuerte?')) {
    deleteSafeBox(safeBoxId);
  }
};

const deleteSafeBox = (safeBoxId) => {
  const apiUrl = `${URI}/site/${store.currentSite.site_id}/safe-box/${safeBoxId}`;

  fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    // Actualizar la lista de cajas fuertes
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};



const directories = ref({})

const isCameraDialogVisible = ref(false);
const cameraData = ref({
    username: '',
    password: '',
});


const addCamera = () => {
    if (!cameraData.value.username || !cameraData.value.password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        username: cameraData.value.username,
        password: cameraData.value.password,
    };

    // Construir la URL final usando la base URI y la ruta específica
    const apiUrl = `${URI}/site/camera`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Manejar la lógica post-envío aquí
            isCameraDialogVisible.value = false;
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

            // Cerrar el diálogo y resetear el formulario
        })
        .catch((error) => {
            console.error('Error:', error);
            // Manejar errores aquí
        });

    // Opcional: resetear el formulario aquí si prefieres esperar a que la petición finalice
};


const confirmDeleteDataphone = (dataphoneId) => {
  // Mostrar diálogo de confirmación
  if (confirm('¿Estás seguro de que quieres eliminar este datáfono?')) {
    deleteDataphone(dataphoneId);
  }
};

const deleteDataphone = (dataphoneId) => {
  const apiUrl = `${URI}/site/${store.currentSite.site_id}/dataphone/${dataphoneId}`;

  fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    // Actualizar la lista de datáfonos
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};


const isSafeBoxDialogVisible = ref(false);
const safeBoxData = ref({
    boxName: '',
    password: '',
});




const confirmDeleteApplication = (applicationId) => {
  if (confirm('¿Estás seguro de que quieres eliminar esta aplicación?')) {
    deleteApplication(applicationId);
  }
};

const deleteApplication = (applicationId) => {
  const apiUrl = `${URI}/site/${store.currentSite.site_id}/application/${applicationId}`;

  fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};
const file = ref(null)
const urlsite_photo = ref("")

const handleFileChange = (event) => {
    // Accede al archivo seleccionado a través del objeto de evento
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        // Aquí puedes realizar acciones con el archivo seleccionado, como cargarlo al servidor
        console.log('Archivo seleccionado:', selectedFile);
        file.value = selectedFile
        urlsite_photo.value = URL.createObjectURL(selectedFile);
    }

}


const addSafeBox = () => {
    if (!safeBoxData.value.boxName || !safeBoxData.value.password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        box_name: safeBoxData.value.boxName,
        password: safeBoxData.value.password,
    };

    const apiUrl = `${URI}/site/safe-box`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)
            isSafeBoxDialogVisible.value = false;
            safeBoxData.value.boxName = '';
            safeBoxData.value.password = '';

            // Cerrar el diálogo
            // Actualizar la UI o estado según sea necesario
        })
        .catch((error) => {
            console.error('Error:', error);
            // Manejar errores aquí
        });

    // Resetear el formulario

};



const isWifiDialogVisible = ref(false);
const wifiData = ref({
    username: '',
    password: '',
});


const addWifiNetwork = () => {
    if (!wifiData.value.username || !wifiData.value.password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        username: wifiData.value.username,
        password: wifiData.value.password,
    };

    const apiUrl = `${URI}/site/wifi-network`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            isWifiDialogVisible.value = false;
            wifiData.value.username = '';
            wifiData.value.password = '';
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });


};



const confirmDeleteWebPage = (webPageId) => {
  if (confirm('¿Estás seguro de que quieres eliminar esta página web?')) {
    deleteWebPage(webPageId);
  }
};

const deleteWebPage = (webPageId) => {
  const apiUrl = `${URI}/site/${store.currentSite.site_id}/web-page/${webPageId}`;

  fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

const isDataphoneDialogVisible = ref(false);
const dataphoneData = ref({
    unique_code: '',
    external_code: '',
});


const addDataphone = () => {
    if (!dataphoneData.value.unique_code) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        unique_code: dataphoneData.value.unique_code,
        external_code: dataphoneData.value.external_code,
    };

    const apiUrl = `${URI}/site/dataphone`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            isDataphoneDialogVisible.value = false;
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });

    dataphoneData.value.unique_code = '';
    dataphoneData.value.external_code = '';
};


const confirmDeleteCamera = (cameraId) => {
  // Mostrar diálogo de confirmación
  if (confirm('¿Estás seguro de que quieres eliminar esta cámara?')) {
    deleteCamera(cameraId);
  }
};

const deleteCamera = (cameraId) => {
  const apiUrl = `${URI}/site/${store.currentSite.site_id}/camera/${cameraId}`;

  fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(() => {
    // Actualizar la lista de cámaras
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};


const isWebPageDialogVisible = ref(false);
const webPageData = ref({
    page: '',
    username: '',
    password: '',
});


const addWebPage = () => {
    if (!webPageData.value.page || !webPageData.value.username || !webPageData.value.password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        page: webPageData.value.page,
        username: webPageData.value.username,
        password: webPageData.value.password,
    };

    const apiUrl = `${URI}/siteweb-page`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            isWebPageDialogVisible.value = false;
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });

    webPageData.value.page = '';
    webPageData.value.username = '';
    webPageData.value.password = '';
};


const isApplicationDialogVisible = ref(false);
const applicationData = ref({
    name: '',
    username: '',
    password: '',
});

const addApplication = () => {
    if (!applicationData.value.name || !applicationData.value.username || !applicationData.value.password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const payload = {
        site_id: store.currentSite.site_id,
        name: applicationData.value.name,
        username: applicationData.value.username,
        password: applicationData.value.password,
    };

    const apiUrl = `${URI}/site/application`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            isApplicationDialogVisible.value = false;
            siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

        })
        .catch((error) => {
            console.error('Error:', error);
        });

    applicationData.value.name = '';
    applicationData.value.username = '';
    applicationData.value.password = '';
};



const infoItems = [
    { label: 'Nombre', value: 'site_name' },
    { label: 'Direccion', value: 'site_address' },
    { label: 'Telefono', value: 'site_phone' },
    { label: 'Correo', value: 'email_address' },
    { label: 'Link de WhatsApp', value: 'wsp_link', isLink: true },
    { label: 'Link de Maps', value: 'maps', isLink: true }
]

const store = useDirectoryStore()
const selectedSite = ref(store.currentSite)


onMounted(async () => {
    await siteService.getSites().then(data => sites.value = data)
    await siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)

    if (!store.currentSite) {
        store.setSite(sites.value[0])

    }

    urlsite_photo.value = `${URI}/read-product-image/600/site-${store.currentSite.site_id}`; file = ''
})



function uploadUsersite_photo(site_photo,id) {
    // URL del servidor donde deseas enviar el PDF
    const serverURL = `${URI}/upload-product-image/site-${id}`;
    store2.setLoading(true,'sibiendo imagen')
  
    // Crear un objeto FormData para enviar el archivo
    const formData = new FormData();
    formData.append('file', site_photo);
    
  
    // Realizar una solicitud POST al servidor
    fetch(serverURL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // La carga fue exitosa, realiza alguna acción si es necesario
          console.log('Archivo photo cargado con éxito');
          file.value = ''
          store2.setLoading(false,'sibiendo imagen')

        } else {
          console.error('Error al cargar foto de perfil:', response.status, response.statusText);
          store2.setLoading(false,'sibiendo imagen')

        }
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        store2.setLoading(false,'sibiendo imagen')

      });
  }








watch(() => store.currentSite, (newVal) => {
    store2.setLoading(true, `cargando información de ${newVal.site_name}`);
    store2.setLoading(false);
    siteService.siteDirectory(store.currentSite.site_id).then(data => directories.value = data)
    urlsite_photo.value = `${URI}/read-product-image/600/site-${store.currentSite.site_id}`; 
    file.value = ''

    // Establece un temporizador para cambiar el estado de carga a false después de 1 segundo
    // 1000 milisegundos = 1 segundo
});


</script>


<style scoped>
/* Define las transiciones para la imagen */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active en <2.1.8 */
    {
    opacity: 0;
}

a {
    text-decoration: none;
    color: #A855F7;
    font-weight: 500;
}

p {
    color: black;
}


*{transition: all ease .5s;}
</style>
