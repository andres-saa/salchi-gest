<template>


    <div class="col-12 m-auto p-0" style=" max-width: 1280px;;">
      




    
    <RouterView>

    </RouterView>
    



  </div>      

</template>

<script setup>
import { onMounted, ref,watch } from 'vue';
import { URI } from '../../service/conection';
import { useRoute } from 'vue-router';

const route = useRoute();
const ruta = ref(route.fullPath);


const menus =[
  {name:'VACACIONES',to:'/autorizar-permisos/vacaciones/'},
  {name:'GENERALES',to:'/autorizar-permisos/general/'},
  {name:'LICENCIA',to:'/autorizar-permisos/licencia/'}
]



watch(() => route.fullPath, (newTipo) => {
    ruta.value = newTipo;
    // Aquí también puedes llamar a funciones que dependan del cambio de ruta
    // Por ejemplo, actualizar la lista de permisos
    // getPermissions(newTipo).then(data => permisos.value = data);
});

const show = ref( false)
const serverDate = ref("2029-12-21 16:19")
const currentPermiso = ref()
const permisos = ref({})
const currentUser = ref({})
const consfirmacionAceptar = ref(false)
const consfirmacionRechazar = ref(false)


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
  
    permiso.status = { status: 'Aceptado', timestamp: serverDate.value }; // Asumiendo que manejas el timestamp aquí
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
      getPermissions()
    } )
    .then(updatedData => console.log('Permiso aceptado:', updatedData))
    .catch(error => console.error('Error:', error));
}


function rejectPermission(permiso) {
    // Actualizar el estado y agregar al historial
    permiso.status = { status: 'Rechazado', timestamp: serverDate.value }; // Asumiendo que manejas el timestamp aquí
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
      getPermissions()
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









async function getPermissions() {
  // URL de la API para obtener los permisos, reemplaza con tu URL real
  const url = `${URI}/permissions`;

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
    getPermissions().then(data => permisos.value = data)
    getDate()
})


</script>

<style scoped>

Button{
    font-weight: bold;
}

.Vacaciones{
    background-color: rgb(186, 247, 255)
}

.Licencia{
    background-color: rgb(195, 255, 186)
}

.General{
    background-color: rgb(255, 246, 186)
}


Button{
  text-transform: capitalize;
}
  
</style>