<template>


 <Loading v-if="Load?.start" tittle="consultando registros"></Loading>
 <Loading v-if="Load?.firmando" tittle="firmando"></Loading>
 <Loading v-if="Load?.enviando" tittle="Entregando dotacion"></Loading>

<doc></doc>

    <!-- {{ dotacion }} -->
    <div class="col-12 m-auto p-0">




        <DataTable ref="dt" :value="dotacion" v-model:selection="selectedSupply" dataKey="id" :paginator="true" :rows="10"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} permisoes" responsiveLayout="scroll"
            scrollable scroll-height="62vh">
            <template #header style="z-index:200">
                <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                    <div class="d-flex" style="display: ;">
                        <p class="m-0  text-2xl my-4">Entrega de dotacion </p>

                        <Button  class="py-2 rounded" rounded severity="" label="Small" @click="openNew = true"
                            style="display: flex;justify-content: center;"> Registrar nueva entrega </Button>
                    </div>



                    <span class="block mt-2 md:mt-0 p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                    </span>
                </div>
            </template>

            <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen></Column>

            <Column class="p-2" field="id" header="Id" :sortable="true" headerStyle="width:3rem; min-width:min-content; ">
                <template #body="dotacion">
                    <span class="p-column-name">entrega</span>
                    <!-- {{ permiso.data.id }} -->
                    {{ dotacion.data.delivery_id }}
                </template>
            </Column>

            <Column class="p-2" field="id" header="Fecha de la entrega" :sortable="true"
                headerStyle="width:3rem; min-width:min-content; ">
                <template #body="dotacion">
                    <!-- <span class="p-column-name">Code</span> -->
                    <!-- {{ permiso.data.id }} -->
                    {{ dotacion.data.delivery_date }}
                </template>
            </Column>


            <Column class="p-2" field="id" header="Entregado por" :sortable="true"
                headerStyle="width:3rem; min-width:min-content; ">
                <template #body="dotacion">
                    <!-- <span class="p-column-name">Empleado</span> -->
                    <!-- {{ permiso.data.id }} -->
                 {{ allUsersBasic.filter(u => u.id == dotacion.data.user_delivery_id )[0].name }}   <Button :severity="dotacion.data.firmado_enviado? 'success' : 'danger'"  class="p-0 rounded" rounded text severity="success"
                        label="Small" @click="" style="display: flex;justify-content: center;"> {{dotacion.data.firmado_enviado? 'Firmado' : 'Sin firmar'}} </Button>
                </template>
            </Column>


            <Column class="p-2" field="id" header="Recibido  por" :sortable="true"
                headerStyle="width:3rem; min-width:min-content; ">
                <template #body="dotacion">
                    <span class="p-column-name"></span>
       

                    {{ allUsersBasic.filter(u => u.id == dotacion.data.user_delivery_id )[0].name }}
                    <Button  class="p-0 rounded" rounded text :severity="dotacion.data.firmado_recibido? 'success' : 'danger'"
                        label="Small" @click="" style="display: flex;justify-content: center;"> {{dotacion.data.firmado_recibido? 'Firmado' : 'Sin firmar'}} </Button>
                </template>
            </Column>

            <Column class="p-2" field="location" header="Acciones" :sortable="true" frozen alignFrozen="right"
                headerStyle="width:10rem; min-width:min-content; ">
                <template #body="dotacion">


                    <!-- <Button text class="p-0 mx-2" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.PENCIL"></i></span></Button> -->

                    <!-- <Button text class="p-0 mx-2" severity="danger" style="width: 100;"><span class="text-right" style=""><i :class="PrimeIcons.TRASH"></i></span></Button> -->
                    <div style="display: flex; gap: 1rem;">
                        <Button class="p-0" outlined severity="info" label="Small" @click="see(dotacion.data)" text> <i class="text-xl"
                                style="font-weight: bold;" :class="PrimeIcons.EYE"> </i> </Button>
                                <!-- <Button @click="downloadPdf" class="p-0" outlined label="Small" text>
  <i class="text-xl" severity="warning" style="font-weight: bold;" :class="PrimeIcons.DOWNLOAD"></i>
</Button> -->



                                <Button v-if="getUserId() ==  dotacion.data.user_delivery_id && !dotacion.data.firmado_enviado" class="py-2 rounded" rounded severity="success" label="Small" @click="requestSignDeliveryAsSent(dotacion.data.delivery_id)"
    style="display: flex;justify-content: center;"> Firmar Entregado </Button>

<Button v-if="getUserId() ==  dotacion.data.user_receive_id && !dotacion.data.firmado_recibido "  class="py-2 rounded" rounded severity="success" label="Small" @click="requestSignDeliveryAsReceived(dotacion.data.delivery_id)"
    style="display: flex;justify-content: center;"> Firmar Recibido </Button>



                    </div>
                    <!-- {{ permiso.data.status }} -->
                </template>
            </Column>









        </DataTable>



        <!-- <P class="text-center text-2xl" style="font-weight: bold; text-transform: capitalize;">  {{ ruta }}</P> -->









        <div>

        </div>
    </div>




    <!-- <Button label="Show" @click="visible = true" /> -->

    <Dialog v-model:visible="openNew" modal header="Registrar entrega" :style="{ width: '50rem' }">
        <!-- <span class="p-text-secondary block mb-5">Update your information.</span> -->

        <!-- {{ deliveryItems }} -->
        <div class="my-3" style=";">
            <p for="username" class="font-semibold ">Recibe</p>
            <Dropdown class="p-0" style="width: 100%;" filter v-model.trim="user_receive"
                :options="users.filter(user => user.id != getUserId())" placeholder="" optionLabel="name" required="true"
                :class="{ 'p-invalid'    : submitted && !currentUser.position }">

                <template #value="user">


                    <div style="display: flex; align-items: center;gap: 1rem;">
                        <img @click="verIMagen(user?.value?.dni)"
                            :src="`${URI}/read-product-image/96/employer-${user?.value?.dni}`"
                            @error="onImageError(user?.value?.gender, $event)" class="shadow-2 img-profile"
                            style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />

                        {{ user?.value?.name }}

                    </div>
                </template>

                <template #option="user">
                    <div style="display: flex; align-items: center;gap: 1rem;">
                        <img @click="verIMagen(user.option.dni)"
                            :src="`${URI}/read-product-image/96/employer-${user.option.dni}`"
                            @error="onImageError(user.option.gender, $event)" class="shadow-2 img-profile"
                            style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />

                        {{ user?.option?.name }}
                    </div>

                </template>




            </Dropdown>
        </div>

        <Divider> Lista de la entrega</Divider>


        <div v-for="(item, index) in deliveryItems" :key="index" style="display: flex; align-items: center;">
    <span style="border-radius: 0.5rem; overflow: hidden; display: flex; width: 100%; gap; align-items: center; border-bottom: 1px solid rgb(186, 186, 186)">
        <InputText v-model="item.name" placeholder="Nombre" style="width: 90%; border: none;" />
        <div style="width: 3px; height: 2rem; border: none; background-color: rgb(187, 187, 187);"></div>
        <InputText v-model.number="item.quantity" type="number" placeholder="cant" style="width: 20%; border: none;" />
    </span>
    <Button text class="p-0 m-0" severity="danger" @click="removeDeliveryItem(index)">
        <i class="text-3xl p-2 m-0" style="font-weight: bold" :class="PrimeIcons.TRASH"></i>
    </Button>
</div>

<Button text class="p-0 mt-3" @click="addDeliveryItem">
    <i class="text-5xl p-0 m-0" style="font-weight: bold" :class="PrimeIcons.PLUS_CIRCLE"></i>
</Button>




        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancel" severity="danger" @click="visible = false"></Button>
            <Button type="button" label="Guardar" @click="saveDelivery()"></Button>
        </div>

    </Dialog>



    <Dialog v-model:visible="confirmSignSentDialog" header="Confirmación" :style="{ width: '50rem' }">
    <p>¿Estás seguro de que deseas firmar esta entrega como enviada?</p>
    <div class="flex justify-content-end gap-2">
        <Button label="No" @click="confirmSignSentDialog = false"></Button>
        <Button label="Sí" @click="signDeliveryAsSent(selectedDeliveryIdToSign)"></Button>
    </div>
</Dialog>

<Dialog v-model:visible="confirmSignReceivedDialog" header="Confirmación" :style="{ width: '50rem' }">
    <p>¿Estás seguro de que deseas firmar esta entrega como recibida?</p>
    <div class="flex justify-content-end gap-2">
        <Button label="No" @click="confirmSignReceivedDialog = false"></Button>
        <Button label="Sí" @click="signDeliveryAsReceived(selectedDeliveryIdToSign)"></Button>
    </div>
</Dialog>
</template>

<script setup>
import { onMounted, ref, watch, onBeforeMount } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import doc from '../../layout/doc.vue';
import { URI } from '../../service/conection';
import router from '../../router';
import { useRoute } from 'vue-router';
import { getUserDni, getUserId, currentDotacion, showDotation,getUsersBasic } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import Loading from '@/components/Loading.vue'
import html2pdf from 'html2pdf.js'

const newSupplyDelivery = ref({})
const user_delivery_id = ref()
const user_receive = ref()

const confirmSignSentDialog = ref(false);
const confirmSignReceivedDialog = ref(false);
const selectedDeliveryIdToSign = ref(null);
const allUsersBasic =ref([])
onMounted(() => {
getUsersBasic().then(data => allUsersBasic.value = data)
})

const see = (dotacion) => {
    currentDotacion.value = dotacion
    showDotation.value = true
}

function requestSignDeliveryAsSent(delivery_id) {
    selectedDeliveryIdToSign.value = delivery_id;
    confirmSignSentDialog.value = true;
}

function requestSignDeliveryAsReceived(delivery_id) {
    selectedDeliveryIdToSign.value = delivery_id;
    confirmSignReceivedDialog.value = true;
}

const Load = ref({})

async function signDeliveryAsSent(delivery_id) {
    Load.value.firmando = true
    try {
        const response = await fetch(`${URI}/supply-delivery/${delivery_id}/sign-sent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // No es necesario enviar un cuerpo (body) en este caso, ya que solo estamos marcando el envío como firmado
        });

        if (!response.ok) {
            throw new Error('Error al firmar la entrega como enviada');
        }

        // Actualiza la lista de entregas para reflejar el cambio de estado
        getDotacion().then(data => dotacion.value = data);
        Load.value.firmando = false
        confirmSignSentDialog.value = false

    } catch (error) {
        console.error('Error al firmar la entrega como enviada:', error);
        Load.value.firmando = false
        confirmSignSentDialog.value = false


        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
}

async function signDeliveryAsReceived(delivery_id) {
    Load.value.firmando = true

    try {
        const response = await fetch(`${URI}/supply-delivery/${delivery_id}/sign-received`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // No es necesario enviar un cuerpo (body) en este caso, ya que solo estamos marcando la recepción como firmada
        });

        if (!response.ok) {
            throw new Error('Error al firmar la entrega como recibida');
        }

        // Actualiza la lista de entregas para reflejar el cambio de estado
        getDotacion().then(data => dotacion.value = data);
        Load.value.firmando = false
        confirmSignReceivedDialog = false;

    } catch (error) {
        console.error('Error al firmar la entrega como recibida:', error);
        Load.value.firmando = false
        confirmSignReceivedDialog = false;

        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
}


const downloadPdf = () => {
  // Opciones para html2pdf
  console.log('')
  const options = {
    margin:       1,
    filename:     'documento.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Selecciona el elemento que deseas convertir a PDF
  const element = document.getElementById('doc');

  // Usa html2pdf para convertir el elemento a PDF y descargarlo
  html2pdf().set(options).from(element).save();
}



async function saveDelivery() {

    Load.value.enviando = true
    // Construye el objeto de entrega con los datos del formulario y los ítems
    // newSupplyDelivery.value.user_receive_id = newSupplyDelivery.value.user_delivery_id.id
    const deliveryData = {
        delivery_data: {
            delivery_date:serverDate.value.split(' ')[0],
            user_delivery_id: user_delivery_id.value,
            user_receive_id: user_receive?.value?.id,
       
        }, // Asumiendo que newSupplyDelivery contiene los datos de la entrega
        items_data: deliveryItems.value, // Los ítems agregados
        
    };

    try {
        // Envía los datos al servidor
        const response = await fetch(`${URI}/supply-delivery-with-items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deliveryData),
        });

        if (!response.ok) {
            Load.value.enviando = false
            throw new Error('Error al guardar la entrega');
            
        }

        // Procesa la respuesta
        const result = await response.json();
        console.log('Entrega guardada con éxito', result);
        Load.value.enviando = false


        // Actualiza la lista de entregas o muestra un mensaje de éxito
        getDotacion().then(data => dotacion.value = data); // Recargar las entregas

        // Cierra el diálogo y limpia el formulario
        openNew.value = false;
        newSupplyDelivery.value = {}; // Reinicia el formulario de nueva entrega
        deliveryItems.value = [{ name: '', quantity: 1 }]; // Reinicia los ítems

    } catch (error) {
        console.error('Error al guardar la entrega:', error);
        Load.value.enviando = false

        // Muestra un mensaje de error o maneja el error de alguna manera
    }
}

















function addDeliveryItem() {
    deliveryItems.value.push({ name: '', quantity: 1 });
}



function removeDeliveryItem(index) {
    deliveryItems.value.splice(index, 1);
}


const deliveryItems = ref([{ name: '', quantity: 1 }]);

import { getUsers, } from '@/service/userServices'
const dt = ref(null)
const route = useRoute();
const ruta = ref(route.params.status);
const tipo = ref(route.params.tipo);
const status = ref(route.params.status);
const razonesDeRechazo = ref('')
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };

};
const users = ref([]);

const openNew = ref(false)
const serverDate = ref("2029-12-21 16:19")
const currentPermiso = ref()
const filters = ref(null);
const permisos = ref([])
const currentUser = ref({})
const consfirmacionAceptar = ref(false)
const consfirmacionRechazar = ref(false)
const dotacion = ref([])
const selectedSupply = ref([])

const charging = ref(false)

onBeforeMount(async() => {
    initFilters()
    user_delivery_id.value = await getUserId()
})


const onImageError = (gender, event) => {


    const genders = {
        masculino: '/images/male-avatar.png',
        femenino: '/images/female-avatar.png',
        default: '/images/who.png'
    }


    if (!gender || gender == '' || gender == 'N/A') {
        event.target.src = genders.default
    } else
        event.target.src = genders[gender.trim().toLowerCase()]
}


const verIMagen = (dni) => {
    visibleImage.value = true
    bigImage.value = `${URI}/read-product-image/600/employer-${dni}`
}


onMounted(async () => {
    getUsers().then(data => {
        users.value = data
        charging.value = false

    })

    // getRoles().then(data => PositionDropValues.value = data)


});

function convertirFechaALocal(dateString) {
    // Crear un objeto de fecha a partir del string
    var date = new Date(dateString);

    // Opciones para formatear la fecha en español
    var options = { day: 'numeric', month: 'long', year: 'numeric' };

    // Formatear la fecha en español
    return date.toLocaleDateString('es-ES', options);
}

const getDate = async () => {
    fetch(`${URI}/server_time`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(data => {
            console.log('Employer data:', data);
            serverDate.value = data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            mensaje.value = 'error'
        });
}


function convertirFecha(fecha) {

    if (!fecha) {
        fecha = "2029-12-21 16:19"
    }
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    // Dividimos la fecha y la hora
    let [fechaParte, horaParte] = fecha.split(' ');

    // Dividimos los componentes de la fecha
    let [año, mes, día] = fechaParte.split('-').map(Number);

    // Convertimos el mes a formato legible
    let mesLegible = meses[mes - 1];

    // Formateamos la fecha
    return `${día} de ${mesLegible} de ${año}`;
}



async function getDotacion() {

    Load.value.start = true
    // URL de la API para obtener los permisos, reemplaza con tu URL real
    const url = `${URI}/supply-deliveries/`;

    try {
        // Realiza la solicitud a la API
        const response = await fetch(url);

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener los permisos: ${response.status}`);
        }

        // Parsea y retorna los datos de la respuesta
        // charging.value = false
        const dotacion = await response.json();
        Load.value.start = false
        return dotacion;

    } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error('Error en getPermissions:', error);
        Load.value.start = false
        throw error; // O manejar el error de la manera que prefieras
    }
}




onMounted(() => {
    // getPermissions(tipo.value,status.value).then(data => permisos.value = data)
    getDotacion().then(data => dotacion.value = data)
    getDate()
})


</script>

<style scoped>
Button {
    font-weight: bold;
}

.vacaciones {
    display: flex;
    background-color: #64748B;
    justify-content: center;

}

.licencia {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}

.general {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}


.generado {
    display: flex;
    background-color: #eeff0060;
    justify-content: center;
}

.aprobado {
    display: flex;
    background-color: #2bff0060;
    justify-content: center;
}

.rechazado {
    display: flex;
    background-color: #ff000044;
    justify-content: center;
}

Button {
    text-transform: capitalize;
}

</style>