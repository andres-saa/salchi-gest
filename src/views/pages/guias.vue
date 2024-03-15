<template>

<p  class="mb-2 text-4xl text-center px-4" style="font-weight: bold; text-transform: capitalize;">
    <i class="fa-solid fa-person-chalkboard"></i>
      Gestion de guias
    </p>



<Dialog v-model:visible="showDeleteDialog" header="Eliminar área o tipo" modal :closable="true" @hide="resetDeleteForm">
    <div>
        <h4>Seleccione el elemento a eliminar:</h4>
        <div style="display: flex;gap: 1rem">
            
        <Dropdown style="width: 60%; ;"  v-model="selectedToDelete" :options="combinedOptions" optionLabel="name" placeholder="Seleccione un área o tipo" />
        <Button style="width: 40%;" label="Eliminar" icon="pi pi-check" class="p-button-danger" @click="deleteSelectedItem" />
        </div>
      
    </div>
</Dialog>

    <Dialog v-model:visible="deleteDialogVisible" header="Confirmar eliminación" modal :closable="false">
        <p>¿Estás seguro de que quieres eliminar este archivo?</p>
        <Button label="No" icon="pi pi-times" @click="deleteDialogVisible = false" class="p-button-text" />
        <Button label="Sí" icon="pi pi-check" @click="deleteFile" class="p-button-danger" />
    </Dialog>


    <Dialog v-model:visible="showNewAreaDialog" header="Crear nueva área" modal :closable="true" @hide="resetNewAreaForm">
        <form @submit.prevent="createNewArea">
            <InputText v-model="newArea.area_name" placeholder="Nombre del área" class="w-full" />

            <div class="col-12 p-0" style="display: flex; justify-content: end;"> 
                <Button rounded class="mt-4" label="Crear"
                    icon="pi pi-check" @click="createNewArea" />
            </div>
        </form>
    </Dialog>

    <!-- Dialog for creating a new file type -->
    <Dialog v-model:visible="showNewTypeDialog" header="Crear nuevo tipo de archivo" modal :closable="true"
        @hide="resetNewTypeForm">
        <form @submit.prevent="createNewType">
            <InputText v-model="newType.type_name" placeholder="Nombre del tipo de archivo" class="w-full" />
            <div class="col-12 p-0" style="display: flex; justify-content: end;"> <Button rounded class="mt-4" label="Crear"
                    icon="pi pi-check" @click="createNewType" />
            </div>
        </form>
    </Dialog>
    <!-- {{ capacitacion }} -->

    <!-- <p class="col-12 text-center text-xl p-0 mb-5" style="font-weight: bold;">Asi lo hacemos en salchimonster</p> -->

    <DataTable class="card mb-4 p-5 my-3 shadow-4" grid 
        style="background-color: white; max-width: 1024px;border: none; margin: auto    ;" ref="dt"
        :value="archived_files" v-model:selection="selectedFiles" dataKey="id" :paginator="true" :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25, 100]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} archivos" 
       >







        <template #header style="z-index:200 ; background-color: red;" >
            <div class="grid col-12 m-0 p-0 gap-3 text-center" style="">
                <Button class="col" style="height: 2.5rem; min-width: max-content;" @click="dialogVisible = true"  severity="success"><i :class="PrimeIcons.UPLOAD"
                        class="pr-3 "></i> Nuevo archivo</Button>

                <Button class="col text-center" style="height: 2.5rem; min-width: max-content;"  severity="warning" @click="showNewAreaDialog = true">
                    <i :class="PrimeIcons.PLUS" class="pr-3"></i> Nueva area
                </Button>
                <Button class="col" style="height: 2.5rem ; min-width: max-content;"  severity="info" @click="showNewTypeDialog = true">
                    <i :class="PrimeIcons.PLUS" class="pr-3"></i> Nuevo tipo de archivo
                </Button>

                <Button class="col" style="height: 2.5rem; min-width: max-content;"  severity="danger" @click="() => {showDeleteDialog = true ; loadCombinedOptions()} ">
                <i :class="PrimeIcons.TRASH" class="pr-3"></i> Eliminar área o tipo
            </Button>
            </div>


            <div class="grid col-12 p-0 gap-3 my-4 m-0">
                <Dropdown style="height: 3rem; text-justify: center;" class="col-12 lg:col-5 p-0" optionLabel="area_name"
                    v-model="area" :options="areas" placeholder="Area de la empresa" />
                <Dropdown style="height: 3rem; text-justify: center;" class="col-12 lg:col-5 p-0" v-model="type"
                    optionLabel="type_name" :options="types" placeholder="Tipo de archivo" />
                <Button @click="getfiles"
                    style="height: 3rem; border-radius: 50%; aspect-ratio: 1/1; display: flex;align-items: center; justify-content: center;"
                    class="  text-center" severity="help" size="small"> <i :class="PrimeIcons.SEARCH"></i></Button>
            </div>



            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">


                <p v-if="!type && !area" class="m-0  text-2xl my-4">{{ type?.type_name }} Todos los tipos de archivos de
                    todas
                    las areas {{ area?.area_name }}
                </p>


                <p v-else-if="type && !area" class="m-0  text-2xl my-4">{{ type?.type_name }} de todas las areas
                </p>

                <p v-else-if="!type && area" class="m-0  text-2xl my-4">{{ type?.type_name }} Todos los tipos de archivos
                    del
                    area {{ area?.area_name }}
                </p>


                <p v-else class="m-0  text-2xl my-4">{{ type?.type_name }} del area de {{ area?.area_name }}
                </p>

                <Button v-if="getUserId() == capacitacion.creator_id" label="Subir archivo" icon="pi pi-upload"
                    class="p-button-success ml-4 p-2" @click="showDialog" />


                <span class="block mt-2 md:mt-0 p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                </span>
            </div>
        </template>

        <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen></Column>

        <Column class="p-2" field="id" header="Id" :sortable="true"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <span class="p-column-title">Code</span>
                {{ archived_file.data.id_file }}
            </template>
        </Column>


        <Column class="p-2" field="id" header="" :sortable="true" headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <div class="" style="position: relative; display: flex;justify-content: center;">
                    <img style="height: 3.5rem; aspect-ratio: 1 / 1;object-fit: contain;border-radius: 0.5rem;" class="p-1" :style="`background-color:${colors[archived_file.data.file_extension]} `"
                        src="/images/file.png"
                        alt="">
                    <span  style="color:white;font-size: 0.7rem; position: absolute;font-weight: bold;bottom: 0.9rem;; text-transform: uppercase;"> {{ archived_file.data.file_extension.slice(0,4) }}</span>
                </div>
            </template>
        </Column>



        <Column class="p-2" field="file_name" header="Nombre" :sortable="true"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <span class="p-column-title">Code</span>
                {{ archived_file.data.file_name }}
            </template>
        </Column>


        <Column class="p-2" field="type" header="Tipo" :sortable="true"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <span class="p-column-title">Code</span>
                {{ archived_file.data.type_name }}
            </template>
        </Column>

        <Column class="p-2" field="type" header="Area" :sortable="true"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <span class="p-column-title">Code</span>
                {{ archived_file.data.area_name }}
            </template>
        </Column>



        <Column class="p-2" field="upload_date" header="Fecha" :sortable="true"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">
                <span class="p-column-title">Code</span>
                {{ archived_file.data.upload_date }}
            </template>
        </Column>



        <Column class="p-2" field="location" header="Acciones" :sortable="true" frozen alignFrozen="right"
            headerStyle="width:min-content; min-width:min-content; ">
            <template #body="archived_file">

                <Button text class="p-0 mx-2" severity="success"
                    @click="downloadFile(archived_file.data.id_area, archived_file.data.id_type, archived_file.data.file_name)">
                    <span class="text-right"><i :class="PrimeIcons.DOWNLOAD"></i></span>
                </Button>


                <!-- <Button text class="p-0 mx-2" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.PENCIL"></i></span></Button> -->

                <Button text class="p-0 mx-2" severity="danger" @click="confirmDelete(archived_file.data.id_file)">
                    <span class="text-right"><i :class="PrimeIcons.TRASH"></i></span>
                </Button>

                <!-- {{ archived_file.data.status }} -->
            </template>
        </Column>

    </DataTable>



    <!-- Diálogo para subir archivo -->
    <Dialog v-model:visible="dialogVisible" style="width: 450px"
        :header="`Subir ${newFile?.type?.type_name} para el area de ${newFile?.area?.area_name}`" modal :closable="true"
        @hide="onHide">
        <form @submit.prevent="submitFile" enctype="multipart/form-data">


            <InputText optionLabel="area_name" placeholder="Nombre del archivo" class="col-12  my-0"
                style="padding: 0.8rem 10px;" v-model="newFile.file_name" :options="areas" />



            <Dropdown optionLabel="area_name" placeholder="Area de la empresa" class="col-12 p-0 my-3"
                v-model="newFile.area" :options="areas" />
            <Dropdown class="col-12 p-0" placeholder="Tipo de archivo" v-model="newFile.type" optionLabel="type_name"
                :options="types" />



            <div class="field my-3" style="display: flex; gap:1rem;justify-content: end;flex-direction: column;">


                <div style="background-color: var(--green-100);border-radius: 0.2rem;" class="col-12  my-4"
                    v-if="form.file">{{ form.file.name }}</div>
                <!-- <label for="file">Archivo</label> -->
                <div style="display: flex; gap:1rem;justify-content: end;">
                    <input type="file" id="file" ref="fileInput" @change="handleFileUpload" required
                        style="display: none;" />
                    <Button rounded="" @click="() => { fileInput.click() }"> Cargar archivo</Button>

                    <Button rounded="" severity="success" label="Enviar" class="" @click="submitFile" />
                </div>




            </div>
        </form>
    </Dialog>
</template>
    
    
<script setup>
import { onMounted, onBeforeMount, ref } from 'vue';
import { URI } from '@/service/conection';
// import { PrimeIcons } from 'primevue/api';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { getUserDni, getUserId } from '@/service/valoresReactivosCompartidos';
import {useReportesStore} from '@/store/reportes.js'

const store = useReportesStore()


// import { onBeforeMount } from 'vue'
import { useToast } from 'primevue/usetoast';
// import { PrimeIcons } from 'primevue/api';
import { useRoute } from 'vue-router';

const colors = {
  "pdf": "#E74C3C",   // Rojo para PDF
  "doc": "#3498DB",   // Azul para Word
  "docx": "#3498DB",
  "xls": "#27AE60",   // Verde para Excel
  "xlsx": "#27AE60",
  "ppt": "#E67E22",   // Naranja para PowerPoint
  "pptx": "#E67E22",
  "psd": "#34495E",   // Azul marino para Photoshop
  "ai": "#F39C12",    // Naranja para Illustrator
  "indd": "#EB4D4B",  // Rojo para InDesign
  "jpg": "#F1C40F",   // Amarillo para imágenes JPEG
  "jpeg": "#F1C40F",
  "png": "#1ABC9C",   // Turquesa para PNG
  "gif": "#F39C12",   // Naranja para GIF
  "bmp": "#2ECC71",   // Verde esmeralda para BMP
  "tiff": "#D35400",  // Naranja calabaza para TIFF
  "svg": "#9B59B6",   // Púrpura para SVG
  "mp3": "#2ECC71",   // Verde para MP3
  "wav": "#3498DB",   // Azul para WAV
  "aac": "#9B59B6",   // Púrpura para AAC
  "flac": "#E74C3C",  // Rojo para FLAC
  "ogg": "#E67E22",   // Naranja para OGG
  "csv": '#27AE60'    // Verde para CSV
}

const showDeleteDialog = ref(false);
const selectedToDelete = ref(null);
const combinedOptions = ref([]);

const resetDeleteForm = () => {
    selectedToDelete.value = null;
};


const loadCombinedOptions = async () => {



    await getArchivedFiles().then(data => archived_files.value = data)
    await getAreaFiles().then(data => {
        areas.value = data
    } )
    await getTypeFiles().then(data => {
        types.value = data
    } )
    combinedOptions.value = [
        ...areas.value.map(area => ({ id: area.id_area, name: area.area_name, type: 'area' })),
        ...types.value.map(type => ({ id: type.id_type, name: type.type_name, type: 'type' })),
    ];
};

const deleteSelectedItem = async () => {
    if (!selectedToDelete.value) return;

    const { id, type } = selectedToDelete.value;
    let url = `${URI}/`;
    if (type === 'area') {
        url += `area/${id}`;
    } else if (type === 'type') {
        url += `archived-file-type/${id}`;
    }

    try {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        toast.add({ severity: 'success', summary: 'Éxito', detail: `${type === 'area' ? 'Área' : 'Tipo'} eliminado correctamente`, life: 3000 });
        if (type === 'area') {
            getAreaFiles().then(data => {areas.value = data; loadCombinedOptions()} );
        } else {
            getTypeFiles().then(data => { loadCombinedOptions(); types.value = data } );
        }
        showDeleteDialog.value = false;
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    }
};



const showNewAreaDialog = ref(false);
const newArea = ref({ area_name: '' });

const showNewTypeDialog = ref(false);
const newType = ref({ type_name: '' });

const resetNewAreaForm = () => {
    newArea.value = { area_name: '' };
};

const resetNewTypeForm = () => {
    newType.value = { type_name: '' };
};

const createNewArea = async () => {
    store.setLoading(true, 'creando area')

    try {
        const response = await fetch(`${URI}/area`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newArea.value),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        toast.add({ severity: 'success', summary: 'Éxito', detail: 'Área creada correctamente', life: 3000 });
        getAreaFiles().then(data => areas.value = data); // Refresh the areas list
        showNewAreaDialog.value = false;
        store.setLoading(false, 'cargando archivos')

    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
        store.setLoading(false, 'cargando archivos')

    }
};

const createNewType = async () => {
    store.setLoading(true, 'creando tipo')

    try {
        const response = await fetch(`${URI}/archived-file-type`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newType.value),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        toast.add({ severity: 'success', summary: 'Éxito', detail: 'Tipo de archivo creado correctamente', life: 3000 });
        getTypeFiles().then(data => types.value = data); // Refresh the types list
        showNewTypeDialog.value = false;
        store.setLoading(false, 'cargando archivos')

    } catch (error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
        store.setLoading(false, 'cargando archivos')

    }
};













const areas = ref([


])
const types = ref([


])


const deleteDialogVisible = ref(false);
const fileToDelete = ref(null);

const confirmDelete = (fileId) => {
    fileToDelete.value = fileId;
    deleteDialogVisible.value = true;
};

const deleteFile = async () => {

    store.setLoading(true, 'borrando archivo')

    if (!fileToDelete.value) return;

    try {
        const response = await fetch(`${URI}/archived-file/${fileToDelete.value}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            store.setLoading(false, 'borrando archivo')

            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo eliminado correctamente', life: 3000 });
            getArchivedFiles().then(data => archived_files.value = data); // Refresh the list
        } else {
            throw new Error(`Error al eliminar el archivo: ${response.statusText}`);
        }
    } catch (error) {
        store.setLoading(false, 'borrando archivo')

        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    } finally {
        store.setLoading(false, 'borrando archivo')

        deleteDialogVisible.value = false;
        fileToDelete.value = null;
    }
};


const type = ref(types.value[0])
const area = ref(areas.value[0])

const newFile = ref({})
const capacitacion = ref({})
const archived_files = ref([])

const fileInput = ref(null)
const dialogVisible = ref(false);
const form = ref({
    archived_file_id: '',
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
        archived_file_id: '',
        custom_filename: '',
        file: null
    };
};



const handleFileUpload = (event) => {
    form.value.file = event.target.files[0];
};

const submitFile = async () => {

    // const capacitacion_id = route.params.capacitacion_id
    if (form.value.file) {
        const formData = new FormData();
        formData.append('file', form.value.file);
        formData.append('id_area', newFile.value.area.id_area);
        formData.append('id_type', newFile.value.type.id_type);
        formData.append('file_name', newFile.value.file_name);


        try {
            const response = await fetch(`${URI}/upload-archived-file/`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();

                // getarchived_fileFiles().then(data => archivos.value = data)

                toast.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo subido correctamente', life: 3000 });
                onHide(); // Cierra el diálogo
                getArchivedFiles().then(data => archived_files.value = data)


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



onBeforeMount(() => {
    initFilters()
})



const downloadFile = (area, tipo, nombre) => {
    const fileUrl = `${URI}/get-archived-file/${area}/${tipo}/${nombre.split('.')[0]}`;
    fetch(fileUrl).then(response => {
        if (response.ok) return response.blob();
        throw new Error('Network response was not ok.');
    })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = nombre;
            document.body.appendChild(a); // Append the element to the DOM
            a.click();
            a.remove(); // Remove the element from the DOM
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading the file:', error));
};



async function getArchivedFiles() {

    store.setLoading(true, 'cargando archivos')

    try {
        const response = await fetch(`${URI}/archived-files`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
   
        store.setLoading(false, 'cargando archivos')

        return data


    } catch (error) {
        store.setLoading(false, 'cargando archivos')

        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

async function getAreaFiles() {
    store.setLoading(true, 'cargando areas')

    try {
        const response = await fetch(`${URI}/areas`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
    
        store.setLoading(false, 'cargando archivos')


        return data

    } catch (error) {
        store.setLoading(false, 'cargando archivos')

        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

async function getTypeFiles() {
    store.setLoading(true, 'cargando tipos')

    try {
        const response = await fetch(`${URI}/archived-file-types    `);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
 
        store.setLoading(false, 'cargando archivos')


        return data

    } catch (error) {
        store.setLoading(false, 'cargando archivos')

        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}


onMounted(() => {
    // getCapacitacion().then(data => capacitacion.value = data)
    loadCombinedOptions()

})



async function getAreaFilesByAreaId() {

    store.setLoading(true, 'cargando archivos')

    if (!area.value) {
        store.setLoading(false, 'cargando archivos')

        return

    }

    try {
        const response = await fetch(`${URI}/archived-files/area/${area.value.id_area}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            store.setLoading(false, 'cargando archivos')

        }

        let data = await response.json();
      
        store.setLoading(false, 'cargando archivos')


        return data

    } catch (error) {
        store.setLoading(false, 'cargando archivos')

        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

async function getAreaFilesByTypeId() {

    store.setLoading(true, 'cargando archivos')

    if (!type.value) {
        store.setLoading(false, 'cargando archivos')

        return
    }

    try {
        const response = await fetch(`${URI}/archived-files/type/${type.value.id_type}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        store.setLoading(false, 'cargando archivos')


        return data

    } catch (error) {
        store.setLoading(false, 'cargando archivos')

        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

async function getAreaFilesByTypeIdAndAresId() {

    store.setLoading(true, 'cargando archivos')

    if (!type.value || !area.value) {
        store.setLoading(false, 'cargando archivos')

        return
    }

    try {
        const response = await fetch(`${URI}/archived-files/${area.value.id_area}/${type.value.id_type}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            store.setLoading(false, 'cargando archivos')

        }

        let data = await response.json();

        store.setLoading(false, 'cargando archivos')

        return data


    } catch (error) {
        console.error('Error al obtener usuarios agrupados por sede:', error);
        store.setLoading(false, 'cargando archivos')

    }
}
const getfiles = () => {
    if (area.value && type.value) {
        getAreaFilesByTypeIdAndAresId().then(data => archived_files.value = data)
    } else if (!area.value && type.value) {
        getAreaFilesByAreaId().then(data => archived_files.value = data)
    } else if (area.value && !type.value) {
        getAreaFilesByTypeId().then(data => archived_files.value = data)
    } else getArchivedFiles()
}



















const toast = useToast();
const route = useRoute()




































</script>


<style scoped>


*{text-transform: lowercase;}

Button{
    /* text-transform: uppercase; */
    text-transform: capitalize;
    font-weight: 400;
}

</style>