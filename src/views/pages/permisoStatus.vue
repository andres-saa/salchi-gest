<template>
    <div class="col-12 m-auto p-0"> 
<!-- {{ permisos }}  -->


<!-- {{ permisos }} -->

<div class="col-12 p-0" v-if="permisos.length <= 0" style="position: relative; display: flex; align-items: center;justify-content:center;">
      <img src="/images/empty.avif" alt="" srcset="" style="width: 100%;height: 50vh;object-fit: cover; border-radius: 1rem;">
      <span class="text-6xl" style="font-weight: bold; position: absolute; ;"> Nada por aquí</span>
  </div>
<!-- <P class="text-center text-2xl" style="font-weight: bold; text-transform: capitalize;">  {{ ruta }}</P> -->


<div class="grid  p-3 m-0" >










    <div class="col-12 md:col-6  xl:col-4 px-0 md:px-3 m-0  "  v-for="permiso in permisos"  >


<div class="col-12 p-0 m-auto pb-4 " style="background-color: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.137) ;height: 100%; border-radius: 1rem;max-width: 400px; overflow: hidden" >
  <!-- {{ permiso }} -->

  <div class="col-12 m-0 mb-3  " :class="permiso.tipo" style=";">
    <p class="text-2xl" style="font-weight: bold;text-transform: capitalize; color: white;">{{permiso.tipo}} ID #{{ permiso.id }}</p>
  </div>


  <div class="col-12 grid m-0 p-1" >
            <p class="col-6  my-0 py-0" style="font-weight: bold;"> <span>ID del permiso</span></p>
            <p class="col-6 my-0 py-0 text-right ">{{permiso.id}}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-6 my-0 py-0" style="font-weight: bold;"> <span>ID del empleado</span></p>
            <p class="col-6 my-0 py-0 text-right ">{{permiso.employer_id}}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-6 my-0 py-0" style="font-weight: bold;"> <span>Desde</span></p>
            <p class="col-6 my-0 py-0 text-right ">{{permiso.start_date}}</p>
        </div>

        <div class="col-12 grid m-0 p-1">
            <p class="col-6 my-0 py-0 " style="font-weight: bold;"> <span>Hasta</span></p>
            <p class="col-6 my-0 py-0 text-right ">{{permiso.end_date}}</p>
        </div>



        <div class="col-12 grid m-0 p-1" style=" background-color: rgb(252, 255, 172);">
            <p class="col-6 my-0 py-0 " style="font-weight: bold;"> <span>Estado <br> Fecha</span></p>
            <p class="col-6 my-0 py-0 text-right " >{{permiso.status.status}} <br> {{permiso.status.timestamp.split(" ")[0]}} </p>
        </div>
        

        <div class="col-12 grid m-0 p-1 mt-4" >
            <p class="col-12 my-0 py-0 " style="font-weight: bold;"> <span>Observaciones</span></p>
            <p class="col-12 my-0 py-0  ">{{permiso.observations}}</p>
        </div>


        <div class="    px-3 mt-4" style="display: flex;gap: 1rem; justify-content: space-around;position: relative;bottom: 0;"> 
            <Button  outlined severity="info" label="Small"  @click="open(permiso)" style="width: 100%;display: flex;justify-content: center;"> <span class=" text-sm text-center">REVISAR</span></Button>
            <Button v-if="permiso.status.status != 'aprobado' " outlined severity="success" label="Small"  class="" @click="openAceptar(permiso)"  style="width: 100%;display: flex;justify-content: center;" > <span class="text-sm">APROBAR</span> </Button>
            <Button v-if="permiso.status.status != 'rechazado' && permiso.status.status != 'aprobado' " outlined severity="danger" label="Small"  @click="openRechazar(permiso)" style="width: 100%;display: flex;justify-content: center;"> <span class="text-sm" > RECHAZAR</span> </Button>
        </div>
       
</div>

      

</div>



</div>
       
        


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
      style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">   {{ convertirFechaALocal(currentPermiso.start_date) }}</span>
    
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


      <div class="mb-2" style="font-weight: bold;">
        Observaciones
      </div>
        <h6 class="  col-12 text-xl">

{{currentPermiso.observations }}

</h6>
  
    
    </div>






  </div>


</h5>





        </div>

        <div class=" col-12 md:col-6 m-auto p-0" style=" display: flex;gap: 1rem;; overflow: hidden; justify-content: space-around;position: absolute;top: 0rem;right: 0; background-color:rgba(255, 255, 255, 0)te;"> 
            <!-- <Button style="background-color: rgb(255, 255, 168);color: rgba(0, 0, 0, 0.864); border: none;" @click="open(permiso)"> REVISAR</Button> -->
            <Button style="background-color: rgb(105, 255, 157);color: rgba(0, 0, 0, 0.864); border: none;"> APROBAR</Button>
            <Button style="background-color: rgb(255, 125, 125);color: rgba(0, 0, 0, 0.864); border: none;"> RECHAZAR</Button>
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
        <h5>Seguro que desea Rechazar el permiso de {{ currentUser.name }}</h5>
        <span class="p-input-icon-left " style="width: 100%;">
            <i class="pi pi-pencil" />
            <!-- <InputText v-model="nameNewCategorie" class="w-100" style="width: 100%;"  type="text"  /> -->
        </span>

        <Button @click="rejectPermission(currentPermiso)"  style="margin:auto ; background-color:rgb(105, 255, 157) ; color: black;border: none;" class="m-auto my-4 text-center"> <span class="text-center col-12 p-0">Si, continuar</span></Button>
        <Button  style="background-color: rgb(255, 156, 156);color: rgba(0, 0, 0, 0.864); border: none;" class="m-auto my-4 ml-4 text-center"> <span class="text-center col-12 p-0">No, talvez luego</span></Button>

    </Dialog>


</template>

<script setup>
import { onMounted, ref,watch } from 'vue';
import { URI } from '../../service/conection';
import router from '../../router';
import { useRoute } from 'vue-router';

const route = useRoute();
const ruta = ref(route.params.status);
const tipo = ref(route.params.tipo);
const status = ref(route.params.status);


const show = ref( false)
const serverDate = ref("2029-12-21 16:19")
const currentPermiso = ref()

const permisos = ref({})
const currentUser = ref({})
const consfirmacionAceptar = ref(false)
const consfirmacionRechazar = ref(false)




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
  
    permiso.status = { status: 'aprobado', timestamp: serverDate.value }; // Asumiendo que manejas el timestamp aquí
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
      consfirmacionAceptar.value = false
      getPermissions(tipo.value,status.value).then(data => permisos.value = data)
    } )
    .then(updatedData => console.log('Permiso aprobado:', updatedData))
    .catch(error => console.error('Error:', error));
}


function rejectPermission(permiso) {
    // Actualizar el estado y agregar al historial
    permiso.status = { status: 'rechazado', timestamp: serverDate.value }; // Asumiendo que manejas el timestamp aquí
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









async function getPermissions(tipo,estado) {
  // URL de la API para obtener los permisos, reemplaza con tu URL real
  const url = `${URI}/permissions/status/${estado}/type/${tipo}`;

  try {
    // Realiza la solicitud a la API
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener los permisos: ${response.status}`);
    }

    // Parsea y retorna los datos de la respuesta
    const permissionsData = await response.json();
    return permissionsData;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error en getPermissions:', error);
    throw error; // O manejar el error de la manera que prefieras
  }
}


onMounted(() => {
    getPermissions(tipo.value,status.value).then(data => permisos.value = data)
    getDate()
})


</script>

<style scoped>

Button{
    font-weight: bold;
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


Button{
  text-transform: capitalize;
}
  
</style>