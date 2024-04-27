<script setup>


import { ref, onMounted, onBeforeMount, computed, cloneVNode, watch } from 'vue';
import {
    curentSite, getSiteDocument

} from '@/service/dropDownAux';
import { URI } from '../../service/conection';
// import { getUsers, } from '@/service/userServices'
// import { URI } from "@/service/conection.js" 
// import { getSiteDocument } from '../../service/dropDownAux';
// import ProductService from '@/service/ProductService';
// import { ref, onMounted } from 'vue';
// import { useToast } from 'primevue/usetoast';
import { uploadPDF } from '@/service/sendFileService.js'
import { useRoute } from 'vue-router';
import { useReportesStore } from '../../store/reportes';

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import { useDocumentsStore } from '../../store/documentos';
import { siteService } from '../../service/siteService';

const store2 = useDocumentsStore()
const confirm = useConfirm();

const displayAddTypeDialog = ref(false);
const newTypeName = ref('');

const addNewType = async () => {
    if (!newTypeName.value) {
        alert('Por favor, ingrese un nombre para el tipo de documento.'); // Usa una forma más sofisticada de manejar errores en producción
        return;
    }

    try {
        const response = await fetch(`${URI}/site-file-type`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type_name: newTypeName.value }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Tipo de documento agregado:', data);
        newTypeName.value = ''; // Limpiar el campo después de la inserción
        fetchDocumentTypes(); // Recargar los tipos de documentos si es necesario
    } catch (error) {
        console.error('Error al agregar el tipo de documento:', error);
        // Maneja el error adecuadamente
    }
};










const store = useReportesStore()
const documents = ref([])
const file = ref()
const currentdocument = ref()
const documentsDropValues = ref([]); // Inicializa vacío

const curentSiteDocuments = ref()
const documentType = ref('')
const documentRenovationDate = ref('')
const route = useRoute()
const currentSite = ref({})
const toast = useToast()

documents.value = curentSiteDocuments.value

const handleFileChange = (event) => {
    // Accede al archivo seleccionado a través del objeto de evento
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        // Aquí puedes realizar acciones con el archivo seleccionado, como cargarlo al servidor
        console.log('Archivo seleccionado:', selectedFile);
        file.value = selectedFile
    }

}


const fetchDocumentTypes = async () => {
    try {
        const response = await fetch(`${URI}/site-file-types`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        documentsDropValues.value = data
    } catch (error) {
        console.error('Error al obtener los tipos de documentos:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
};


const deleteDocument = (document) => {
    confirm.require({
        target: event.currentTarget,
        message: `Esta seguro de eliminar ${document.document_name}`,
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-info p-button-outlined p-button-sm',
        acceptClass: 'p-button-sm p-button-danger',
        rejectLabel: 'Cancelar',
        acceptLabel: 'Eliminar',
        accept: () => {
            // toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            performDeletion(document)
        },
        reject: () => {
            // toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    })
};


const performDeletion = async (document) => {
    try {
        const response = await fetch(`${URI}/site_document/${document.document_id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el documento');
        }

        // Actualiza la lista de documentos en la interfaz de usuario
        getSiteDocumentInfo();
        toast.add({ severity: 'success', summary: 'Documento eliminado', detail: 'El documento ha sido eliminado correctamente.', life: 3000 });
    } catch (error) {
        console.error('Error al eliminar el documento:', error);
        toast.add({ severity: 'error', summary: 'Error al eliminar', detail: 'No se pudo eliminar el documento.', life: 3000 });
    }
};

const uploadPDFInfo = async (data) => {

    if(!file.value){
        alert('seleccione un archivo')
        return
    }

    let Method = "post"
    const queryUrl = `${URI}/site-document/`
    const requestOptions = {
        method: Method,
        headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(queryUrl, requestOptions)
    const dataresp = response.json()
    return dataresp


}






const getSiteDocumentInfo = async () => {
    try {

        const site_id = store2?.currentSite?.site_id || route.params.site_id
        // Construye la URL con los parámetros
        const url = `${URI}/get-site-documents-info/${site_id}`;

        // Realiza la solicitud GET
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            return
        }

        const data = await response.json();
        curentSiteDocuments.value = data



    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
};

const updatePDFInfo = async (datos) => {

    if(!documentRenovationDate.value){
        alert('la recha de renovacion es obligatoria')
        return 
    }
       
    let Method = "put";
    const data = { ...datos }
    const queryUrl = `${URI}/site-document/${data.document_id}`;
    data.renovation_date = documentRenovationDate.value
    const requestOptions = {
        method: Method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(queryUrl, requestOptions);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const responseData = await response.json();
        getSiteDocumentInfo()
        close()
        toast.add({ severity: 'success', summary: 'Actualización exitosa', detail: 'Documento actualizado correctamente', life: 3000 });
        return responseData;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error en la actualización', detail: error.message, life: 3000 });
    }
};



onMounted(async() => {
    const site_id = store2?.currentSite?.site_id || route.params.site_id
    store2.currentSite= await siteService.getSiteById(site_id)
    getSiteDocumentInfo()
    store.setLoading(true)
    store.setLoading(false)
    fetchDocumentTypes();

    // console.log(curentSite)
});


watch(() => route.params.site_id, () => {

    getSiteDocumentInfo()
    store.setLoading(true)
    store.setLoading(false)
})


onMounted(() => {
    const storedSiteData = localStorage.getItem('currentSiteFiles');
    if (storedSiteData) {
        currentSite.value = JSON.parse(storedSiteData);
    }
});


const updateFileType = async (tipo) => {
  try {
    const response = await fetch(`${URI}/site-file-type/${tipo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type_name: tipo.type_name }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Tipo de documento actualizado:', data);
    toast.add({ severity: 'success', summary: 'Actualizado', detail: 'Tipo de archivo actualizado con éxito', life: 3000 });
  } catch (error) {
    console.error('Error al actualizar el tipo de documento:', error);
    toast.add({ severity: 'error', summary: 'Error al actualizar', detail: 'No se pudo actualizar el tipo de archivo.', life: 3000 });
  }
};

const display = ref(false);
const display2 = ref(false);

const upload = (file, document_type, site_name) => {
    // const existe = curentSiteDocuments.value.some(objeto => objeto.document_type == documentType.value);
    // console.log(documents,documentType.value)
    // console.log(existe)
            if(!documentRenovationDate.value){
            alert('la fecha de renovacion es obligatoria')
            return 
        }

            if(!documentType.value?.type_name){
            alert('debe elegir un tipo de archivo')
            return 
        }

        if(!file){
            alert('debe subir un  archivo')
            return 
        }

    const data = {
        "document_name": `${currentSite.value.site_name} ${documentType.value.type_name}`,
        "document_type": documentType.value.type_name,
        "renovation_date": documentRenovationDate.value,
        "site_id": route.params.site_id
    }

    store.setLoading(true,'enviando')

    uploadPDFInfo(data).then(data => {
        store.setLoading(false,'enviando')

        console.log(data)

        uploadPDF(file, data.document_id, documentType.value.type_name)

        getSiteDocumentInfo()


    })
    toast.add({ severity: 'success', summary: `hecho`, detail: '', life: 3000 })
    close()
    store.setLoading(false,'enviando')



};

const update = (file, data) => {

    if(!documentRenovationDate.value){
            alert('la fecha de renovecion es obligatoria')
            return 
        }


    if (4) {
        const i = {
            "document_name": `${currentdocument.value.document_name}`,
            "document_type": currentdocument.value.document_type,
            "renovation_date": documentRenovationDate.value,
            "site_id": route.params.site_id
        }
        console.log(data)

        updatePDFInfo(data)

        uploadPDF(file, data.document_id, data.document_type)

        toast.add({ severity: 'success', summary: `hecho`, detail: '', life: 3000 })
        close()
    } else {
        // console.log(existe)
        toast.add({ severity: 'error', summary: `Ya hay cargado un ${documentType.value} para ${currentSite.value.site_name} pero puede renovarlo si gusta  `, detail: '', life: 3000 })
    }


};

const open = (currentdoc) => {
    display.value = true;
    currentdocument.value = currentdoc
};

const open2 = (currentdoc) => {
    display2.value = true;
    currentdocument.value = currentdoc
};
const close = () => {
    display.value = false;
    display2.value = false;
    file.value = null
    getSiteDocumentInfo()
    // file.value = null
}


const imagePreviewUrl = ref(null);

const displayNewSiteDialog = ref(false);
const newSiteData = ref({
    site_name: '',
    site_address: '',
    site_phone: '',
    site_business_hours: '',
});
const newSiteImage = ref(null);
const imageInputRef = ref(null);

const openNewSiteDialog = () => {
    displayNewSiteDialog.value = true;
    imagePreviewUrl.value = null; // Resetear la vista previa al abrir el diálogo
};

const handleNewSiteImageChange = (event) => {
    const file = event.target.files[0];
    newSiteImage.value = file;
    if (file) {
        // Crear una URL de objeto para la vista previa de la imagen
        imagePreviewUrl.value = URL.createObjectURL(file);
    }
};

const createNewSite = async () => {
    try {
        const response = await fetch(`${URI}/site`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSiteData.value),
        });
        if (!response.ok) throw new Error('Error al crear la sede');

        const responseData = await response.json();
        const siteId = responseData.site_id;

        if (newSiteImage.value) {
            const formData = new FormData();
            formData.append('file', newSiteImage.value);
            await fetch(`${URI}/upload-product-image/site-${siteId}`, {
                method: 'POST',
                body: formData,
            });
        }

        displayNewSiteDialog.value = false;
        // Actualiza la UI según sea necesario
    } catch (error) {
        console.error('Error al crear la sede:', error);
    }
};











const deleteFileType = async (typeId) => {


    confirm.require({
        target: event.currentTarget,
        message: '¿Está seguro de que desea eliminar este tipo de archivo?',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-info p-button-outlined p-button-sm',
        acceptClass: 'p-button-sm p-button-danger',
        rejectLabel: 'Cancelar',
        acceptLabel: 'Eliminar',
        accept: async () => {
            try {
                store.setLoading(true, 'eliminando')

                const response = await fetch(`${URI}/site-file-type/${typeId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Error al eliminar el tipo de archivo');
                }

                // Eliminar el tipo de archivo de la vista
                documentsDropValues.value = documentsDropValues.value.filter(tipo => tipo.type_id !== typeId);
                toast.add({ severity: 'success', summary: 'Eliminado', detail: 'Tipo de archivo eliminado con éxito', life: 3000 });
                store.setLoading(false, 'eliminando')

                fetchDocumentTypes(); // Recargar los tipos de documentos si es necesario


            } catch (error) {
                store.setLoading(false, 'eliminando')
                console.error('Error al eliminar el tipo de archivo:', error);
                toast.add({ severity: 'error', summary: 'Error al eliminar', detail: 'No se pudo eliminar el tipo de archivo.', life: 3000 });
                fetchDocumentTypes(); // Recargar los tipos de documentos si es necesario

            }
        }
    });
};












</script>

<template>


    <Dialog v-model:visible="displayAddTypeDialog" :style="{ width: '450px', }" :modal="true">
        <template #header>
            <h3>Tipos de archivo</h3>
        </template>


        <div>
            <p class="text-xl" style="font-weight: bold;" for="type_name">Nuevo</p>
            <InputText class="col-12" id="type_name" v-model="newTypeName" />
        </div>


        <div class="col-12 p-0" style="display: flex; justify-content: end;">


            <Button class="my-4" label="Agregar" @click="addNewType" />

        </div>



        <p class="text-xl my-4" style="font-weight: bold;" for="type_name">Editar exixtentes</p>


        <div class="my-2 col-12 p-0" v-for="tipo in documentsDropValues" :key="tipo.type_id">
            <div class="col-12 p-0" style="display: flex; gap: 1rem; justify-content: space-between;">
                <InputText class="col-11" v-model="tipo.type_name" @blur="updateFileType(tipo)" />
                <Button rounded
                    style="aspect-ratio: 1 / 1; width: 3rem; height: 3rem; display: flex; justify-content: center;"
                    severity="danger" text class="pi-button-rounded" @click="deleteFileType(tipo.id)">
                    <i class="fa-solid fa-trash-can text-2xl"></i>
                </Button>
            </div>
        </div>

        <div>

        </div>




    </Dialog>

    <Toast />
    <div class="col-12 p-0 mx-auto" style=" margin-top: 0rem;">

        <Toast />
        <ConfirmPopup></ConfirmPopup>


        

            <DataTable stripedRows="" ref="dt" :value="curentSiteDocuments" dataKey="id" :paginator="true" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                responsiveLayout="scroll">


                <div class="col-12 p-0" style="display: flex; justify-content: end;">
                    <div class="mt-4 col-12 md:col-6 xl:col-4 p-0"
                        style="display: flex;max-width: 35rem; justify-content: end; gap: 1rem;">

                        <Button size="small "
                            style="width: 100%;font-weight: bold;display: flex;align-items: center;justify-content: center; "
                            rounded class=" p-button-info  py-2" @click="open2()">
                            <i class="fa-solid fa-plus mr-2 text-2xl "></i>
                            <i class="fa-solid fa-file mr-2  text-2xl "></i>

                        </Button>
                        <Button size="small " ico
                            style="width:100%;font-weight: bold;display: flex;align-items: center; justify-content: center; "
                            rounded class=" p-button-warning  py-2" @click="openNewSiteDialog">
                            <i class="fa-solid fa-plus mr-2 text-2xl "></i>
                            <i class="fa-solid fa-house mr-2 text-2xl "></i>

                        </Button>

                        <Button size="small "
                            style="width: 100%;font-weight: bold;display: flex;align-items: center;justify-content: center; "
                            rounded class=" p-button-success  py-2" @click="displayAddTypeDialog = true">
                            <i class="fa-solid fa-plus mr-2 text-2xl "></i>
                            <i class="fa-solid fa-font"></i>

                        </Button>



                    </div>
                </div>

                <template #header>






                </template>

                <!-- <Column class="py-0" header="Icon" headerStyle="width:5rem; min-width:3rem;">
                        <template #body="user">
                            <span class="p-column-title">Image  </span>
                            <i class="fa-solid fa-file-invoice"></i>
                            <div>

                            </div>
                        </template>
                    </Column> -->




                <Column class="p-0" field="name" header="Tipo" :sortable="true"
                    headerStyle="width:20rem; min-width:max-content; ">
                    <template #body="user">
                        <p style="min-width: max-content;">
                            {{ user.data.document_type }}
                        </p>
                    </template>
                </Column>


                <Column class="py-0" field="position" header="Nombre " :sortable="true"
                    headerStyle="width:20rem; min-width:10rem;">
                    <template #body="user">
                        <span class="p-column-title">Category</span>
                        <p style="min-width: max-content;">
                            {{ user.data.document_name }}

                        </p>
                    </template>
                </Column>

                <Column class="p-0" field="birth_date" header="Renovacion" :sortable="true"
                    headerStyle="width:5rem; min-width:10rem;">
                    <template #body="user">
                        <!-- <span class="p-column-title">Fecha de Nacimiento</span> -->
                        {{ user.data.renovation_date }}
                    </template>
                </Column>

                <Column style="" class="py-0" 
                    frozen alignFrozen="right">
                    <template #body="user">

                        <div style="display: flex;">
                            <Button text size="large" style=" aspect-ratio: 1 / 1; "
                                class=" p-button-success mr-2 mb-2 p-0 text-3xl "
                                @click="getSiteDocument(user.data.document_id, user.data.document_type)">

                                <i class="fa-solid fa-file-arrow-down"></i>

                            </Button>

                            <Button text size="large" style="" class=" p-button-info mr-2 mb-2 p-0 text-3xl"
                                @click="open(user.data)">

                                <i class="fa-solid fa-pen-to-square"></i>

                            </Button>

                            <Button text size="large" style="" class=" p-button-danger mr-2 mb-2 p-0 text-3xl"
                                @click="deleteDocument(user.data)">
                                <i class="fa-solid fa-trash"></i>
                            </Button>

                        </div>




                    </template>


                </Column>





            </DataTable>

            <Dialog class="p-0" :closable="true" :header="` RENOVAR ${currentdocument?.document_type} PARA ${currentSite.site_name?.toUpperCase()}`"
                v-model:visible="display" :style="{ width: '500px' }" :modal="true">


                <input ref="fileInput" type="file" @change="handleFileChange" style="display: none;">

                <div class="col-12 p-0" style="">
                    <label for="position">FECHA DE RENOVACION</label>

                    <Calendar id="entry_date" style="width: 100%;margin: 20px 0 ;" v-model="documentRenovationDate"
                        required="true" autofocus />
                </div>


                <p class="p-3" v-show="file" style="background-color:rgba(115, 255, 76, 0.306);">
                    <i class="pi pi-check" style="color: slateblue"></i> {{ file ? `${file.name} : si este no es
                    su documento por
                    favor carguelo` : '' }}
                </p>
                <!-- <img src="@/images/document_image.jpg" class="shadow-2" style="width: 20%;" @click="cambiar" /> -->
                <div class="grid" style="display: flex; justify-content: space-between;">

                    <div class="col-12 xl:col-6">
                        <Button severity="help" label="Seleccionar documento" class="col-12"
                            style="" @click="$refs.fileInput.click();" />
                    </div>

                    <div class="col-12 xl:col-6">
                        <Button class="col-12" severity="success" label="Enviar"
                            @click="update(file, currentdocument)" />

                    </div>




                    <!-- {{ currentdocument }}  -->

                </div>


                <!-- <Button label="enviar" severity="warning" @click="$refs.fileInput.click();" /> -->
            </Dialog>
            <!-- <Button label="Show" icon="pi pi-external-link" style="width: auto" @click="open" /> -->


            <Dialog :header="` CARGAR ${documentType?.type_name || ''} PARA ${currentSite?.site_name?.toUpperCase()}`"
                v-model:visible="display2" :style="{ width: '450px', }" :modal="true">


                <div class="grid" style="">
                    <div class="col-12">
                        <label for="position">TIPO DE DOCUMENTO</label>
                        <Dropdown v-model.trim="documentType" :options="documentsDropValues" optionLabel="type_name"
                            placeholder="" required="true" :class="{ 'p-invalid': submitted }"
                            style="width: 100%;margin: 20px 0 ;" />
                    </div>


                    <div class="col-12">
                        <label for="position">FECHA DE RENOVACION</label>

                        <Calendar id="entry_date" style="width: 100%;margin: 20px 0 ;" v-model="documentRenovationDate"
                            required="true" autofocus />
                    </div>

                </div>

                <input ref="fileInput" type="file" @change="handleFileChange" style="display: none;">

                <p class="p-3" v-show="file" style="background-color:rgba(19, 164, 0, 0.306);">
                    <i class="pi pi-check" style="color: slateblue"></i> {{ file ? `${file.name} : verifique si
                    este es su documeto
                    antes de envirlo` : '' }}
                </p>
                <!-- <img src="@/images/document_image.jpg" class="shadow-2" style="width: 20%;" @click="cambiar" /> -->
                <div class="" style="display: flex; justify-content: space-between;gap: 1rem; flex-direction: column;">
                    <Button class="" severity="help" label="Seleccionar documento" style="width:100%;"
                        @click="$refs.fileInput.click();" />
                    <Button label="Enviar" style="width:100%;" severity="success"
                        @click="upload(file, documentType, currentSite.site_id)" />
                    <!-- {{ documentRenovationDate }} -->
                </div>
                <!-- <Button label="enviar" severity="warning" @click="$refs.fileInput.click();" /> -->
            </Dialog>





        </div>



    <Dialog v-model:visible="displayNewSiteDialog" :style="{ width: '450px', padding: '0px' }" :modal="true">
        <template #header>
            <h3>Nueva Sede</h3>
        </template>

        <!-- Formulario para la nueva sede -->
        <div class>
            <p class="mt-4">Nombre de la Sede:</p>
            <InputText class="col-12" v-model="newSiteData.site_name" />
        </div>
        <div>
            <p class="mt-4">Dirección:</p>
            <InputText class="col-12" v-model="newSiteData.site_address" />
        </div>
        <div>
            <p class="mt-4">Teléfono:</p>
            <InputText class="col-12" v-model="newSiteData.site_phone" />
        </div>

        <div v-if="imagePreviewUrl" style="margin-top: 20px;">
            <img :src="imagePreviewUrl" alt="Vista previa de la imagen" style="max-width: 100%; max-height: 300px;">
        </div>
        <!-- Botón personalizado para cargar la imagen -->
        <Button class="my-5" @click="$refs.imageInput.click()"><i class="fa-solid fa-camera"></i></Button>
        <input type="file" ref="imageInput" @change="handleNewSiteImageChange" style="display: none;">

        <template #footer>
            <Button @click="createNewSite">Crear Sede</Button>
        </template>
    </Dialog>


</template>

<style scoped lang="scss">
.inputSwith {
    display: flex;
    justify-content: space-between;
    margin: 2em 0;
}


* {
    text-transform: capitalize;
}
</style>
