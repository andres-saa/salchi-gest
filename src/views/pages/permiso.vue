<template>
  <div class="  mx-0 mx-auto " style="margin-top: 6rem;">

    <p class="text-2xl lg:text-3xl text-center my-4 mt-8 " style="font-weight: bold;">Solicitar permiso General</p>
    <span class=" mb-3 col-12 p-3" style="display: flex;justify-content: space-between; gap: 1rem; height: auto;">


<InputNumber  v-model="usrDni" :disabled="getUserRole()?.toLowerCase() != 'gerente'" class="text-center m-0"
  style="width: 100%;" placeholder="Cedula del empleado"></InputNumber>

<Button class="" severity="help" style="color:white;font-weight: bold;min-width: 3rem;" icon="pi pi-search" rounded
  @click="getUser(usrDni)"></Button>



</span>

    <p v-if="usrDni == null" class="text-1xl m-auto  col-6 p-0" style="color: var(--primary-color);"> Por favor digite el
      numero de decumento del usuario y presione Buscar</p>


    <p v-if="!user.dni && usrDni" class="text-5xl m-auto col-12">
      {{ queja }}
    </p>






    <div v-if="user.dni && usrDni" class=" col-12  p-0 m-auto"
      style=" height: max-content; background-color: transparent;">





      <h6 class="text-center p-2 m-0 mb-5 col-12"
        style="border-radius: 2rem; font-weight: bold; background-color: var(--gray-200);">INFORMACIÓN DEL EMPLEADO</h6>

      <div class=" px-0 grid" style="">
        <h6 class="col-6 m-0  text-left text-md">NOMBRE</h6>
        <h6 class="col-6 m-0 text-right" style="font-weight: 300;min-width: max-content;">{{ user.name }}</h6>
      </div>


      <div class=" px-0 grid p-0 " style=" border-radius: 2rem; "
        :style="user?.status?.toLowerCase().split(' ')[0] == 'activo' ? 'background-color:rgb(193, 255, 100);' : 'background-color: rgb(255, 132, 132);'">
        <h6 class="col-6 m-0  py-2 text-left">ESTADO</h6>
        <h6 class="col-6 m-0  py-2 text-right" style="font-weight: 300;min-width: max-content;">{{ user.status }}</h6>
      </div>


      <div class="px-0 grid" style="">
        <h6 class="col-6 m-0  text-left">DOCUMENTO</h6>
        <h6 class="col-6 m-0  text-right" style="font-weight: 300;min-width:max-content;">{{ user.dni }}</h6>
      </div>

      <div class="px-0 grid" style="">
        <h6 class="col-6 m-0  text-left">FECHA DE INICIO</h6>
        <h6 class="col-6 m-0  text-right" style="font-weight: 300; ">{{ user.entry_date }}</h6>
      </div>

      <div class="px-0 grid" style="background-color: ">
        <h6 class="col-6 m-0  text-left">CARGO</h6>
        <h6 class="col-6 m-0  text-right" style="font-weight: 300;">{{ user.position }}</h6>
      </div>

      <h6 class="text-center p-2 mb-5" style=" border-radius: 2rem;font-weight: bold; background-color: var(--gray-200)">
        DETALLES ADICIONALES</h6>




      <div class="px-0 grid" style="">
        <h6 class="col-6 m-0  text-left">TIPO DE CONTRATO</h6>
        <h6 class="col-6 m-0  text-right" style="font-weight: 300;">{{ user.contract_type }}</h6>
      </div>

      <div class="px-0 grid" style="">
        <h6 class="col-6 m-0  text-left">SALARIO</h6>
        <h6 class="col-6 m-0  text-right" style="font-weight: 300;">{{ formatoPesosColombianos(user.salary) }}</h6>
      </div>

      <div class="px-0 grid col-12" style="">

        <h6 class="  col-6">
          <div style="">
            DESDE
            <Calendar class="col p-0" v-model="desde" required="true" autofocus />
          </div>

        </h6>

        <h6 class="  col-6">
          <div>
            HASTA
            <Calendar class="col p-0" v-model="hasta" required="true" autofocus />
          </div>

        </h6>



        <h6 class="text-center p-2 m-0 my-5 col-12"
        style="border-radius: 2rem; font-weight: bold; background-color: var(--gray-200);">OBSERVACIONES</h6>

        
        <h6 class="  col-12">
      
            <Textarea class="col-12 text-xl" v-model="Observaciones" required="true" autofocus />


        </h6>



      </div>


      <div style="display: flex;">
        <Button @click="solicitarPermiso()" :disabled="store.Loading.visible"
        style="display: flex;color: white; align-items: center;justify-content: center;font-weight: bold;"><span
          style="color: white;">
          <i :class="PrimeIcons.UPLOAD"> </i> Solicitar permiso</span></Button>

          <Button @click="exportarComoPDF()" disabled style="display: flex;color: white; align-items: center;justify-content: center;font-weight: bold;" ><span style="color: white;"> 
      <i :class="PrimeIcons.UPLOAD"> </i> Descargar Comprobante</span></Button>
      </div>

      

    </div>



    <div class=" col-12 p-0 mt-6" style="overflow-x: auto;  box-shadow: 0 0 20px rgba(0, 0, 0, 0.308)"
      v-show="user?.status?.toLowerCase().split(' ')[0] == 'activo' && !temporaryScreenSize" ref="contenidoParaPDF">

      <div class=" a4-size p-8 mi-clase" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.508)">




        <img class="m-auto" src="https://salchimonster.com/images/logo.png" style="width: 10%; object-fit: cover;" alt="">

        <h6 style="font-size: 14pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">


          {{ convertirFecha(serverDate) }}
        </h6>
        <h6 class="text-center"
          style="font-size: 14pt; font-weight: bold;color: black; font-family: Arial, Helvetica, sans-serif;">
          INVERSIONES SALCHIMONSTER SAS
        </h6>

        <!-- [Logo de la Empresa] -->

        <h6 style="font-size: 14pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;"
          class="text-center">NIT: 901.420.874-0</h6>

        <h6 class="text-center py-4" style="font-weight: bold;">FORMATO SOLICITUD DE PERMISO GENERAL <span
            style="text-transform: capitalize;"></span></h6>

        <h5 class="text-l "
          style="font-size: 14pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">

          <p class="p-0 m-0">
            <span style="font-weight: bold;">Fecha de la solicitud: </span> <span
              style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">{{ convertirFecha(serverDate) }}</span>
          </p>

          <p class="p-0 m-0" style="width: 100%;">
            <span style="font-weight: bold;">Nombre: </span> <span
              style="width: 100%; border-bottom: 1px solid ; padding-bottom: 0; padding-right:3rem">{{ user.name }}</span>
          </p>

          <p class="p-0 m-0">
            <span style="font-weight: bold;">Cargo: </span> <span
              style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">{{ user.position }}</span>
          </p>

          <p class="p-0 m-0">
            <span style="font-weight: bold;">Identificación No: </span> <span
              style="border-bottom: 1px solid ; padding-bottom: 0; padding-right: 2rem">{{ user.dni }}</span>
          </p>


          <div style="display: flex; justify-content: start; gap: 2rem; border: 1px solid; margin-top: 2rem;" class="p-2">

            <div style="display: flex; flex-direction: column;" class="">
              <div style="font-weight: bold;">
                Desde
              </div>
              <div>
                {{ convertirFechaALocal(desde) }}
              </div>
            </div>


            <div style="display: flex; flex-direction: column;">
              <div style="font-weight: bold;">
                Hasta
              </div>
              <div>
                {{ convertirFechaALocal(hasta) }}
              </div>
            </div>





          </div>


          <div style="display: flex; justify-content: start; gap: 2rem; border: 1px solid; margin-top: 2rem;" class="p-2">

            <div style="display: flex; flex-direction: column;" class="">


              <div class="mb-2" style="font-weight: bold;">
                Observaciones
              </div>
                <h6 class="  col-12">
      
            <Textarea class="col-12 text-xl" style="min-width: 600px; max-width: 600px;" v-model="Observaciones" required="true" autofocus />


        </h6>
          
            
            </div>






          </div>

          <!-- 
  E
  <div class=" grid mt-2 col-10 mb-0 pb-0 ">
    <div class=" col-8 p-0">SALARIO BASICO</div>
    <div class="col text-right p-0">{{ formatoPesosColombianos(user.salary)  }} </div>
  </div>
  <div class=" grid pt-0 mt-0 col-10 ">
    <div class="col-8 p-0">BONIFICACION NO PRESTACIONAL</div>
    <div class="col text-right p-0">{{ formatoPesosColombianos(100000)  }} </div>
  </div>
  <div class=" grid pt-0  col-10 ">
    <div class="col-8 p-0">AUXILIO DE TRANSPORTE</div>
    <div class="col text-right p-0">{{ formatoPesosColombianos(140606)  }} </div>
  </div> -->

          <!-- <h5 style="font-size: 14pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;" class="py-1 mt-0">
    Para constancia de lo anterior se firma en Bogota D.C a los 19 dias del mes de septiempre de 2023

    <p class="py-6">
      Cordialmente,
    </p>
   



<p class="py-0  my-0"> <b> YARY CESPEDES MEJIA</b></p>
<p class="py-0  my-0"> Jefe Gestión Humana</p>
<p class="py-0  my-0">INVERSIONES SALCHIMONSTER SAS</p>
<p class="py-0  my-0">
  NIT. 901420874-0
</p>

  </h5> -->

        </h5>





      </div>
    </div>






    <div v-if="!user.dni" class="col-12">
      <img src="/images/permiso.jpg" alt="" srcset="" style="width: 100%;height: 50vh;object-fit: cover; border-radius: 0.5rem;">
    </div>


  </div>
</template>
  
  
<script setup>



import { onMounted, ref, watch,computed,onBeforeUnmount } from 'vue';
import { URI } from '../../service/conection';
import { formatoPesosColombianos } from '../../service/formatoPesos.js';
import { useRoute } from 'vue-router';
import { getUserRole } from '../../service/valoresReactivosCompartidos';
import { getUserDni } from '../../service/valoresReactivosCompartidos';
import { PrimeIcons } from 'primevue/api';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import router from '@/router/index.js'
import { nextTick } from 'vue';
const user = ref({})
const usrDni = ref(getUserDni())
const mensaje = ref()
const serverDate = ref("2029-12-21 16:19")
const queja = ref()
const desde = ref()
const hasta = ref()
const Observaciones = ref()
const dias = ref()


function convertirFechaALocal(dateString) {
  // Crear un objeto de fecha a partir del string
  var date = new Date(dateString);

  // Opciones para formatear la fecha en español
  var options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Formatear la fecha en español
  return date.toLocaleDateString('es-ES', options);
}
watch(usrDni, (newValue, oldValue) => {
  console.log(`El valor de usrDni ha cambiado de ${oldValue} a ${newValue}`);
  // Aquí puedes agregar cualquier lógica adicional que necesites
});



const getUser = async (dni) => {
  store.setLoading(true, `Buscando usuario ${dni}`)
  fetch(`${URI}/employer/dni/${dni}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      store.setLoading(false, `Buscando usuario ${dni}`)

      return response.json();

    })
    .then(data => {
      store.setLoading(false, `Buscando usuario ${dni}`)

      console.log('Employer data:', data);
      user.value = data
      queja.value = ''
    })
    .catch(error => {
      store.setLoading(false, `Buscando usuario ${dni}`)

      console.error('There has been a problem with your fetch operation:', error);
      user.value = {}
      queja.value = '  No hay un usuario para el número de documento ' + usrDni.value
      mensaje.value = 'error'
    });
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

onMounted(async () => {
  getDate()

})


import { useReportesStore } from '../../store/reportes';
const store = useReportesStore()

const solicitarPermiso = async () => {
  // Asegúrate de que 'user.user_id' tenga un valor válido
  if (!user.value.id) {
    console.error("El ID del usuario es necesario para solicitar el permiso.");
    return;
  }

  // Formatear 'desde' y 'hasta' para enviar solo la fecha
  const formatDate = (date) => date.toISOString().split('T')[0];

  const permisoData = {
    employer_id: user.value.id,
    start_date: formatDate(desde.value),
    end_date: formatDate(hasta.value),
    observations: Observaciones.value || 'sin observaciones',
    tipo:'general',
    status: { status: 'generado', timestamp: serverDate.value },
    history: [{ status: 'generado', timestamp: serverDate.value }]
  }

  try {
    store.setLoading(true, 'solicitando permiso')

    const response = await fetch(`${URI}/permission`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Agrega aquí cualquier otro header necesario
      },
      body: JSON.stringify(permisoData)
    });

    if (!response.ok) {
      store.setLoading(false, 'solicitando permiso')

      throw new Error('Error en la solicitud de permiso');
    }

    const responseData = await response.json();
    console.log('Permiso creado exitosamente:', responseData);
    router.push('/mis-permisos')
    // Lógica adicional después de crear el permiso
  } catch (error) {
    store.setLoading(false, 'solicitando permiso')
    console.error('Error al solicitar el permiso:', error);
    // Manejar el error
  }
};




























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




function numeroATexto(numero) {
  const unidades = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

  // Función auxiliar para convertir los dígitos en palabras
  function convertir(trio) {
    let resultado = '';
    let cien = 'cien';

    if (trio[0] > 1) {
      resultado += unidades[trio[0]] + 'cientos ';
      cien = '';
    } else if (trio[0] === 1) {
      resultado += cien + ' ';
    }

    if (trio[1] > 1) {
      resultado += decenas[trio[1]] + ' y ';
    } else if (trio[1] === 1) {
      return resultado + especiales[trio[2]];
    }

    if (trio[2] !== 0 || (trio[0] === 0 && trio[1] === 0)) {
      resultado += unidades[trio[2]];
    }

    return resultado;
  }

  if (numero === 0) {
    return unidades[0];
  }

  if (numero < 0) {
    return 'menos ' + numeroATexto(-numero);
  }

  let grupos = [];
  while (numero > 0) {
    grupos.push(numero % 1000);
    numero = Math.floor(numero / 1000);
  }

  let partes = grupos.map((grupo, i) => {
    if (grupo === 0) return '';
    let parte = convertir([Math.floor(grupo / 100), Math.floor((grupo % 100) / 10), grupo % 10]);
    if (i === 1) return grupo === 1 ? 'mil' : parte + ' mil';
    if (i === 2) return grupo === 1 ? 'un millón' : parte + ' millones';
    return parte;
  });

  return partes.reverse().join(' ').trim();
}

// Ejemplo de uso
console.log(numeroATexto(1600000)); // "un millón seiscientos mil"

// Ejemplo de uso
console.log(numeroATexto(1600000)); // "un millón seiscientos mil"



console.log(numeroATexto(1111111)); // "un millón seiscientos mil"




const screenWidth = ref(window.innerWidth);
const isSmallScreen = computed(() => screenWidth.value < 600);



const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});


var elementos = document.getElementsByClassName("mi-clase");




const convertirFechaserver = (fecha) => {
    // Crear objeto de fecha
    let date = new Date(fecha);

    // Obtener día, mes y año
    let day = date.getDate();
    let month = date.getMonth(); // Los meses en JavaScript comienzan en 0
    let year = date.getFullYear();

    // Nombres de los meses en español
    let monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
                      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let monthName = monthNames[month];

    // Formatear la fecha
    return `los ${day} días del mes de ${monthName} de ${year}`;
};

watch(usrDni, (newValue, oldValue) => {
      console.log(`El valor de usrDni ha cambiado de ${oldValue} a ${newValue}`);
      // Aquí puedes agregar cualquier lógica adicional que necesites
    });








onMounted( async() => {
getDate()

})







// Ejemplo de uso
console.log(numeroATexto(1600000)); // "un millón seiscientos mil"

// Ejemplo de uso
console.log(numeroATexto(1600000)); // "un millón seiscientos mil"



console.log(numeroATexto(1111111)); // "un millón seiscientos mil"






// Variable temporal para la generación de PDF
const temporaryScreenSize = ref(isSmallScreen.value);



const exportarComoPDF = async () => {
  const originalState = isSmallScreen.value;
  temporaryScreenSize.value = false;

  // Asegúrate de que el DOM se haya actualizado antes de capturar el contenido
  await nextTick();

  let elementoParaPDF = document.querySelector('.mi-clase');
  if (elementoParaPDF) {
    try {
      // Incrementar la escala para mejorar la calidad de la imagen
      const canvas = await html2canvas(elementoParaPDF, { scale: 2.5 });

      // Usar formato JPEG con una calidad más alta
      const imgData = canvas.toDataURL('image/jpeg', 0.9); // Aumentar aún más la calidad de la imagen

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      // Agregar la imagen con una calidad alta
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);

      pdf.save(`certificado laboral - ${user.value.name}.pdf`);
    } catch (error) {
      console.error("Error al exportar PDF: ", error);
    } finally {
      // Restablecer el estado original en un bloque finally para asegurar que se ejecute
      temporaryScreenSize.value = originalState;
    }
  } else {
    console.error("No se encontró el elemento para convertir a PDF");
    temporaryScreenSize.value = originalState;
  }
};








</script>
  
<style scoped>
.a4-size {
  width: 210mm;
  min-width: 210mm;
  height: 297mm;
  min-height: 297mm;
  margin: auto;
  /* Centrar 
      overn la pantalla */
  background-color: white;
  overflow-x: auto;
  /* Opcional: para simular el color de una hoja de papel */
}

.a4-size * {
  font-optical-sizing: 12pt;
}

* {
  font-family: Arial, Helvetica, sans-serif;
  /* font-size: 12pt; */
  color: black;
  max-width: 210mm;
  margin: auto;
}</style>
  
  