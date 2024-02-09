<template>
    <div class="col-12 m-auto p-0"> 


      <div class="col-12" v-if="charging" style="display: flex;flex-direction: column; pointer-events: none; align-items: center; justify-content: center; position: fixed;z-index: 1000;left: 0;top: 0; height: 100%;background-color: rgba(0, 0, 0, 0.5);">


<p class="text-3xl" style="font-weight: bold; color: white; text-shadow: 0 0 10px rgba(0, 0, 0, 0.551);">CARGANDO PERMISOS</p>
<div style="display: flex;">

    
        <ProgressSpinner  style="width: 100px; height: 100px" strokeWidth="4" fill="var(--surface-ground)"
        animationDuration=".5s" aria-label="Custom ProgressSpinner" />

    </div>
</div>


      <DataTable ref="dt" :value="permisos" v-model:selection="selectedPermisos" dataKey="id" :paginator="true"
                    
                    :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25,100]"
                    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} permisoes"
                    responsiveLayout="scroll" scrollable scroll-height="62vh" >
                    <template #header style="z-index:200">
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center" >
                            <p class="m-0  text-2xl my-4">Mis permisos </p> 
                            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                            </span>
                        </div>
                    </template>

                    <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen  ></Column>

                    <Column class="p-2" field="id" header="Id" :sortable="true"
                        headerStyle="width:3rem; min-width:min-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.id }}
                        </template>
                    </Column>

                    <Column class="p-2" field="tipo" header="Tipo" :sortable="true"
                        headerStyle="width:10rem; min-width:min-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.tipo }}
                        </template>
                    </Column>


                    
                    <Column class="p-2" field="fecha" header="Fecha de solicitud" :sortable="true"
                        headerStyle="width:10rem; min-width:min-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.history?.filter(e => e.status == 'generado')[0].timestamp?.split(' ')[0] }}
                        </template>
                    </Column>



                    <Column class="p-2" field="start_date" header="Fecha de inicio" :sortable="true"
                        headerStyle="width:15rem; min-width:10rem; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.start_date }}
                        </template>
                    </Column>

                    <Column class="p-2" field="end_date" header="Fecha finalizacion" :sortable="true"
                        headerStyle="width:15rem; min-width:max-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.end_date }}
                        </template>
                    </Column>

                    <Column class="p-2" field="observations" header="Observaciones del empleado" :sortable="true"
                        headerStyle="width:30rem; min-width:max-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->
                            {{ permiso.data.observations }}
                        </template>
                    </Column>

                    <Column class="p-2 " field="status.status" header="Estado" :sortable="true"
                        headerStyle="width:10rem; min-width:max-content; ">
                        <template #body="permiso">
                            <span class="p-column-title">Code</span>
                            <!-- {{ permiso.data.id }} -->

                            <div class="p-2" style="border-radius: 10rem;" :class="permiso.data.status.status">
                              {{ permiso.data.status.status }}

                            </div>
                        </template>
                    </Column>

                 




                    <Column class="p-2" field="location" header="Acciones" :sortable="true" frozen alignFrozen="right"
                        headerStyle="width:1rem; min-width:min-content; ">
                        <template #body="permiso">
                            
                           
                            <!-- <Button text class="p-0 mx-2" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.PENCIL"></i></span></Button> -->
                           
                            <!-- <Button text class="p-0 mx-2" severity="danger" style="width: 100;"><span class="text-right" style=""><i :class="PrimeIcons.TRASH"></i></span></Button> -->
<div style="display: flex; gap: 1rem;justify-content:center ;">
  <Button class="p-0"  outlined severity="info" label="Small"  @click="open(permiso.data)" text > <i class="text-xl" style="font-weight: bold;" :class="PrimeIcons.EYE"> </i> </Button>
                            <!-- <Button class="p-0" :disabled="permiso.data.status.status == 'aprobado' " outlined severity="success" label="Small" text  @click="openAceptar(permiso.data)"  style="display: flex;justify-content: center;" > <i class="text-xl" style="font-weight: bold;" :class="PrimeIcons.CHECK"></i> </Button>
                            <Button class="p-0" :disabled="permiso.data.status.status == 'rechazado' && permiso.data.status.status != 'aprobado' " outlined severity="danger" label="Small"  @click="openRechazar(permiso.data)" style="display: flex;justify-content: center;" text> <i  class="text-xl" style="font-weight: bold;" :class="PrimeIcons.TIMES"></i> </Button> -->
      
                          
</div>
                              <!-- {{ permiso.data.status }} -->
                        </template>
                    </Column>

</DataTable>



<!-- <P class="text-center text-2xl" style="font-weight: bold; text-transform: capitalize;">  {{ ruta }}</P> -->



        


    <div>
        
    </div>
    </div>


    <Dialog style="border: none; box-shadow: none;" v-model:visible="show" :style="{ width: '700px' }" header="Revizar permiso" :modal="true"
        class="p-fluid m-2 pt-8">

       
        <div class=" a4-size p-0 lg:p-6 mi-clase mt-4" >




<img class="m-auto" src="https://salchimonster.com/images/logo.png" style="width: 10%;" alt="">

<h6 style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">


  {{ convertirFecha(currentPermiso.status.timestamp) }}
</h6>
<h6 class="text-center"
  style="font-size: 11pt; font-weight: bold;color: black; font-family: Arial, Helvetica, sans-serif;">
  INVERSIONES SALCHIMONSTER SAS
</h6>

<!-- [Logo de la Empresa] -->

<h6 style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;"
  class="text-center">NIT: 901.420.874-0</h6>

<h6 class="text-center py-4" style="font-weight: bold;text-transform: uppercase;">FORMATO SOLICITUD DE PERMISO  {{currentPermiso.tipo}} <span
    style="text-transform: capitalize;"></span></h6>

<h5 class="text-l "
  style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">

  <p class="p-0 m-0">
    <span style="font-weight: bold;">Fecha de la solicitud: </span> <span
      style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">   {{ convertirFecha(currentPermiso.start_date) }}</span>
    
  </p>

  <p class="p-0 m-0" style="width: 100%;">
    <span style="font-weight: bold;">Nombre: </span> <span
      style="width: 100%; border-bottom: 1px solid ; padding-bottom: 0; padding-right:3rem">{{ currentUser.name }}</span>
      <!-- {{ user.name }}{{ currentUser }}s -->
  </p>

  <p class="p-0 m-0">
    <span style="font-weight: bold;">Cargo: </span> <span
      style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">{{ currentUser.position }}</span>
      <!-- {{ user.position }} -->
  </p>

  <p class="p-0 m-0">
    <span style="font-weight: bold;">Identificación No: </span> <span
      style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem"> {{ currentUser.dni }}</span>
      <!-- {{ user.dni }} -->
  </p>


  <div style="display: flex; justify-content: start; gap: 2rem; border: 1px solid; margin-top: 2rem;" class="p-2">

    <div style="display: flex; flex-direction: column;" class="">
      <div style="font-weight: bold;">
        Desde
      </div>
      <div>
        {{ convertirFechaALocal(currentPermiso.start_date) }}
      </div>
    </div>


    <div style="display: flex; flex-direction: column;">
      <div style="font-weight: bold;">
        Hasta
      </div>
      <div>
        {{ convertirFechaALocal(currentPermiso.end_date) }}
      </div>
    </div>





  </div>


  
  <div style="display: flex; justify-content: start; gap: 2rem; border: 1px solid; margin-top: 2rem;" class="p-2">

<div style="display: flex; flex-direction: column;" class="">


  <div style="display: flex; flex-direction: column;">
      <div style="font-weight: bold;">
        Observaciones
      </div>
      <div>
        {{currentPermiso.observations}}
      </div>
    </div>


</div>






</div>



  <div style="display: flex; justify-content: start; gap: 2rem; border: 1px solid; margin-top: 2rem;" class="p-2">

<div style="display: flex; flex-direction: column;" class="">


  <div style="display: flex; flex-direction: column;">
      <div class="mb-2" style="font-weight: bold;">
        Estado actual
      </div>
      <div class="mb-1">
       <span style="font-weight: bold;">Resumen:</span>  {{ currentPermiso.status.status }}
      </div>

      <div class="mb-1">
        <span style="font-weight: bold;">Fecha:</span>
        {{ convertirFechaALocal(currentPermiso.status.timestamp) }}
      </div>

      <div class="mb-1" >
        <span style="font-weight: bold;"> Responsable:</span> {{ allUsersBasic.filter(u => u.id == currentPermiso.status?.responsable )[0].name}}
      </div>

      <div v-if="currentPermiso.status.status == 'rechazado'">
        <span style="font-weight: bold;">Motivos   del rechazo:</span>  {{ currentPermiso.status?.razones }}
      </div>

    </div>

    <div class=" col-12 md:col-6 m-auto p-0 botonera" style=" display: flex;gap: 1rem;; overflow: hidden; justify-content: space-around;position: absolute;top: 0rem;right: 0; background-color:rgba(255, 255, 255, 0)te;"> 
            <!-- <Button style="background-color: rgb(255, 255, 168);color: rgba(0, 0, 0, 0.864); border: none;" @click="open(permiso)"> REVISAR</Button> -->
            <!-- <Button class="text-center" @click="openAceptar(currentPermiso)" severity="success" style="; border: none;display: flex; justify-content: center;" > APROBAR </Button> -->
            <!-- <Button @click="openRechazar(currentPermiso)" severity="danger"  style=" border: none;display: flex; justify-content: center;"> RECHAZAR</Button> -->

            <Button @click="imprimir" severity="warning"  style=" border: none;display: flex; justify-content: center;"> imprimir</Button>
        </div>

</div>






</div>

</h5>





        </div>

        
    </Dialog>








    <Dialog header="Confirmacion" v-model:visible="consfirmacionAceptar" :style="{ width: '350px' }" :modal="true">
        <h5>Seguro que desea aceptar el permiso de {{ currentUser.name }}</h5>
        <span class="p-input-icon-left " style="width: 100%;">
            <i class="pi pi-pencil" />
            <!-- <InputText v-model="nameNewCategorie" class="w-100" style="width: 100%;"  type="text"  /> -->
        </span>

        <Button @click="acceptPermission(currentPermiso)" style="margin:auto ; background-color:rgb(105, 255, 157) ; color: black;border: none;" class="m-auto my-4 text-center"> <span class="text-center col-12 p-0">Si, continuar</span></Button>
        <Button  style="background-color: rgb(255, 156, 156);color: rgba(0, 0, 0, 0.864); border: none;" class="m-auto my-4 ml-4 text-center"> <span class="text-center col-12 p-0">No, talvez luego</span></Button>

    </Dialog>

    <Dialog header="Confirmacion" v-model:visible="consfirmacionRechazar" :style="{ width: '350px' }" :modal="true">
        <h5>Seguro que desea Rechazar el permiso de {{ currentUser.name }}?</h5>
        <h6>Razones para rechazar este permiso </h6>
        <Textarea v-model="razonesDeRechazo" style="max-width: 100%; min-width: 100%;min-height: 100px;" class="col-12"></Textarea>
        <span class="p-input-icon-left " style="width: 100%;">
            <i class="pi pi-pencil" />
            <!-- <InputText v-model="nameNewCategorie" class="w-100" style="width: 100%;"  type="text"  /> -->
        </span>

        <Button @click="rejectPermission(currentPermiso)"  style="margin:auto ; background-color:rgb(105, 255, 157) ; color: black;border: none;" class="m-auto my-4 text-center"> <span class="text-center col-12 p-0">Si, continuar</span></Button>
        <Button  style="background-color: rgb(255, 156, 156);color: rgba(0, 0, 0, 0.864); border: none;" class="m-auto my-4 ml-4 text-center"> <span class="text-center col-12 p-0">No, talvez luego</span></Button>

    </Dialog>


</template>

<script setup>
import { onMounted, ref,watch,onBeforeMount } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { URI } from '../../service/conection';
import router from '../../router';
import { useRoute } from 'vue-router';
import { getUserDni, getUserId,getUsersBasic } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';

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

const imprimir = () => {
  window.print()
}




const show = ref( false)
const serverDate = ref("2029-12-21 16:19")
const currentPermiso = ref()
const filters = ref(null);
const permisos = ref([])
const currentUser = ref({})
const consfirmacionAceptar = ref(false)
const consfirmacionRechazar = ref(false)

const selectedPermisos = ref([])

const charging = ref(true)

onBeforeMount( () => {
        initFilters()
    })
watch(() => route.params.status, (newTipo) => {
    ruta.value = newTipo;
    // Aquí también puedes llamar a funciones que dependan del cambio de ruta
    // Por ejemplo, actualizar la lista de permisos
    // getPermissions(newTipo).then(data => permisos.value = data);
});


watch(() => route.params.tipo, (newTipo) => {
    tipo.value = newTipo;
    console.log(tipo)
    // Aquí también puedes llamar a funciones que dependan del cambio de ruta
    // Por ejemplo, actualizar la lista de permisos
    getPermissions(newTipo,status.value).then(data => permisos.value = data);
});



watch(() => route.params.status, (newstatus) => {
    status.value = newstatus
    // Aquí también puedes llamar a funciones que dependan del cambio de ruta
    // Por ejemplo, actualizar la lista de permisos
    // getPermissions(newTipo).then(data => permisos.value = data);
    getPermissions(tipo.value,newstatus).then(data => permisos.value = data);
});




const open = async (permiso) => {
    show.value = true
    currentPermiso.value = permiso

    getUser(permiso.employer_id)
    
}

const openAceptar = (permiso) => {
    consfirmacionAceptar.value = true
    currentPermiso.value = permiso

    getUser(permiso.employer_id)
}

const openRechazar = (permiso) => {
    consfirmacionRechazar.value = true
    currentPermiso.value = permiso

    getUser(permiso.employer_id)
}


function acceptPermission(permiso) {
    
    // Actualizar el estado y agregar al historial
  
    permiso.status = { status: 'aprobado', timestamp: serverDate.value,responsable:getUserId() }; // Asumiendo que manejas el timestamp aquí
    permiso.history.push({ ...permiso.status });

    // Enviar la actualización
    fetch(`${URI}/permission/${permiso.id}`, { // Asegúrate de que URI esté correctamente definida
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(permiso),
    })
    .then(response => {
      response.json()
      show.value = false
      consfirmacionAceptar.value = false
      getPermissions(tipo.value,status.value).then(data => permisos.value = data)
    } )
    .then(updatedData => console.log('Permiso aprobado:', updatedData))
    .catch(error => console.error('Error:', error));
}


function rejectPermission(permiso) {
    // Actualizar el estado y agregar al historial
    permiso.status = { status: 'rechazado', timestamp: serverDate.value,razones:razonesDeRechazo.value,responsable:getUserId() }; // Asumiendo que manejas el timestamp aquí
    permiso.history.push({ ...permiso.status });

    // Enviar la actualización
    fetch(`${URI}/permission/${permiso.id}`, { // Asegúrate de que URI esté correctamente definida
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(permiso),
    })
    .then(response => {
      response.json()
      consfirmacionRechazar.value = false
      show.value = false
      getPermissions(tipo.value,status.value).then(data => permisos.value = data)
    })
    .then(updatedData => console.log('Permiso rechazado:', updatedData))
    .catch(error => console.error('Error:', error));
}






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

const getUser = async (dni) => {
  fetch(`${URI}/employer/${dni}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(data => {
      console.log('Employer data:', data);
      currentUser.value = data
    //   queja.value = ''
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    //   user.value = {}
    //   queja.value = '  No hay un usuario para el número de documento ' + usrDni.value
    //   mensaje.value = 'error'
    });
}



const allUsersBasic =ref([])
onMounted(() => {
  getUsersBasic().then(data => allUsersBasic.value = data)
})





async function getPermissions() {
  // URL de la API para obtener los permisos, reemplaza con tu URL real
  const usr_id = await getUserId()
  const url = `${URI}/permissions/user/${usr_id}  `;

  try {
    // Realiza la solicitud a la API
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener los permisos: ${response.status}`);
    }

    // Parsea y retorna los datos de la respuesta
    charging.value = false
    const permissionsData = await response.json();
    return permissionsData;
   
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error en getPermissions:', error);
    throw [error]; // O manejar el error de la manera que prefieras
  }
}


onMounted(() => {
    getPermissions(tipo.value,status.value).then(data => permisos.value = data).catch(() => permisos.value = [])
    getDate()
})


</script>

<style scoped>

Button{
    font-weight: bold;
}

@media print {
   .botonera {
    display: none !important ;
  }

  .a4-size{
    margin: 0 ;
    position: absolute !important;
    top: -400px !important; 
  }
}

.vacaciones{
    display: flex;
    background-color:#64748B;
    justify-content: center;
    
}

.licencia{
    display: flex;
    background-color:#64748B;
    justify-content: center;
}

.general{
    display: flex;
    background-color:#64748B;
    justify-content: center;
}


.generado{
    display: flex;
    background-color:#eeff0060;
    justify-content: center;
}

.aprobado{
    display: flex;
    background-color:#2bff0060;
    justify-content: center;
}

.rechazado{
  display: flex;
    background-color:#ff000044;
    justify-content: center;
}

Button{
  text-transform: capitalize;
}
  
</style>