
<script setup>
import ShowUserBirth from './ShowUserBirth.vue';
import { ref, onMounted, onBeforeMount, computed, cloneVNode } from 'vue';
import { URI } from '../../service/conection';
import { getUsers, } from '@/service/userServices'




const users = ref([]);
onMounted(async () => {
    const fechaServidor = await obtenerFechaServidor();
    const mesActual = fechaServidor.getMonth() + 1; // getMonth() devuelve un índice basado en 0, por lo que se suma 1.

    getUsers().then(data => {
        users.value = filtrarUsuariosPorMes(data, mesActual);
    });
});



const fechaFormateada = ref('');
const mesActual = ref()
// Array de nombres de meses en español
const nombresMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const obtenerFechaServidor = async () => {
    try {
        const serverTimeResponse = await fetch(`${URI}/server_time`);
        const serverTimeString = await serverTimeResponse.json();

        // Verificar si la respuesta es una cadena válida
        if (!serverTimeString || !serverTimeString.trim()) {
            throw new Error('Respuesta del servidor no válida o vacía');
        }

        // Asegurarse de que la cadena esté en el formato esperado
        const serverTime = new Date(serverTimeString.replace(' ', 'T') + 'Z');

        // Verificar si la fecha es válida
        if (isNaN(serverTime.getTime())) {
            throw new Error('La fecha del servidor no es válida');
        }

        // Obtener el día, mes y año
        const dia = serverTime.getDate();
        const mes = serverTime.getMonth();
        const anio = serverTime.getFullYear();
        mesActual.value = mes
   

        // Formatear la fecha
        fechaFormateada.value = `${dia} de ${nombresMeses[mes]} de ${anio}`;
        return new Date(serverTime)
    } catch (error) {
        console.error('Error al obtener la hora del servidor:', error);
        fechaFormateada.value = 'Fecha no disponible';
    }
};

onMounted(obtenerFechaServidor);


const filtrarUsuariosPorMes = (users, mes) => {
    return users.filter(usuario => {
        const fechaNacimiento = new Date(usuario.birth_date);
        return fechaNacimiento.getMonth() + 1 === mes && usuario?.status.toLowerCase().split(' ')[0] === 'activo';
    });
};


const cargarImagenAvatar = (dni, gender) => {
    const url = `${URI}/read-product-image/96/employer-${dni}`;
    const imagen = new Image();

    imagen.onload = () => {
        // La imagen se cargó correctamente
        return url;
    };

    imagen.onerror = () => {
        // Error al cargar la imagen, devuelve una imagen predeterminada
        return obtenerImagenPredeterminada(gender);
    };

    imagen.src = url;
};


const onImageError = (gender, event) => {
    const avataresPredeterminados = {
        masculino: '/images/male-avatar.png',
        femenino: '/images/female-avatar.png',
        default: '/images/who.png'
    };

    event.target.src = avataresPredeterminados[gender] || avataresPredeterminados.default;
};

const obtenerImagenPredeterminada = (gender) => {
    const avataresPredeterminados = {
        masculino: '/images/male-avatar.png',
        femenino: '/images/female-avatar.png',
        default: '/images/who.png'
    };

    return avataresPredeterminados[gender] || avataresPredeterminados.default;
};

</script>

<template>
<div class="cont px-2 col-12 mt-8">
  <h5 class="m-auto col-12  text-center text-5xl" style="font-weight: bold; color: ;"> Cumples <i class="pi pi-spin pi-star-fill
" style="font-size: 3rem"></i> </h5>
  <h5 class="m-auto col-12  text-center text-2xl"> Hoy: {{ fechaFormateada }} 
       </h5>

  <div class="md:col-9 m-auto p-4 col-12" style="border-radius: 1REM; box-shadow: 0 0 20px rgba(0, 0, 0, 0.433); background-color: rgb(255, 206, 206);">



    <div style="display: flex; justify-content: space-between; align-items: center;">
      <h2 class="justify-center text-2xl" style="height: 100%; font-weight: bold;">
        Este mes
      </h2>

      <!-- {{ users }} -->


      <AvatarGroup class="mb-3 avatar"  @click="$refs.currentCumple.click()">
        <Avatar v-for="user in users.slice(0,6)" shape="circle" size="xlarge" :style="{ 'background-color': '#fff', color: '#ffffff' }" :key="user.dni" :image="`${URI}/read-product-image/96/employer-${user.dni}` " @error="onImageError(user.gender, $event)" />

     
      <Avatar v-if="users.length>6" :label="`+${users.length-6}`" shape="circle" size="xlarge" :style="{ 'background-color': '#9c27b0', color: '#ffffff' }">
      </Avatar>
    </AvatarGroup>

 
    </div>
   

  
    <Accordion :activeIndex="mesActual" >
      <AccordionTab header="Enero">
        <ShowUserBirth :mes="1" />
      </AccordionTab>
      <AccordionTab header="Febrero">
        <ShowUserBirth :mes="2" />
      </AccordionTab>
      <AccordionTab header="Marzo">
        <ShowUserBirth :mes="3" />
      </AccordionTab>
      <AccordionTab header="Abril">
        <ShowUserBirth :mes="4" />
      </AccordionTab>
      <AccordionTab header="Mayo">
        <ShowUserBirth :mes="5" />
      </AccordionTab>
      <AccordionTab header="Junio">
        <ShowUserBirth :mes="6" />
      </AccordionTab>
      <AccordionTab header="Julio" >
        <ShowUserBirth :mes="7" />
      </AccordionTab>
      <AccordionTab header="Agosto">
        <ShowUserBirth :mes="8" />
      </AccordionTab>
      <AccordionTab header="Septiembre">
        <ShowUserBirth :mes="9" />
      </AccordionTab>
      <AccordionTab header="Octubre">
        <ShowUserBirth :mes="10" />
      </AccordionTab>
      <AccordionTab header="Noviembre">
        <ShowUserBirth :mes="11" />
      </AccordionTab>
      <AccordionTab header="Diciembre">
        <ShowUserBirth :mes="12" />
      </AccordionTab>

    </Accordion>
  </div>
</div>
  
</template>


<style scoped>

.cont {
    position: relative;
    min-height: 100vh; /* Asegura que el div cubra toda la altura de la pantalla */
    width: 100%; /* Asegura que el div cubra todo el ancho de la pantalla */
    overflow: hidden;
    /* min-width: 900px; */
 
  /* Evita cualquier desbordamiento del contenido */
}

.cont::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://www.enter.co/wp-content/uploads/2017/11/iStock-601920764-1024x768.jpg');
    background-size: cover; /* Asegura que la imagen cubra todo el espacio disponible */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    background-position: center; /* Centra la imagen de fondo */
    opacity: 0.5; /* Establece la opacidad del fondo */
    z-index: -1;
    
}

.cont > * {
    position: relative;
    z-index: 1;
}
</style>