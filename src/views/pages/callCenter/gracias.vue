<template>
  <div class="p-2 col-12 my-6"
      style="height: auto;min-height: 90vh;padding: .5rem; display: flex;gap:rem; justify-content: center; align-items: center;">
      <div class="shadow-7 p-0"
          style="border-radius: 0.5rem; max-width: 500px;display: flex;flex-direction: column;gap: 0rem;font-size: 1.3rem;">
          <p class="text-4xl text-center m-0" style="font-weight: bold;text-align: center;"> 🤩{{ user.user.name.toUpperCase() }}🤩</p>
          <p class="text-2xl text-center m-0 " style="font-weight: bold;text-align: center;">🔥MUCHAS GRACIAS POR TU COMPRA!🔥</p>

          <p class="text-4xl text-center my-0" style="font-weight: bold; text-transform: uppercase;text-align: center;"> <span
                  class="text-2xl">ID DEL PEDIDO</span> <br> #{{ store.last_order }}</p>




          <p class="text-2xl text-center my-3 p-3"
              style=" border-radius: .3rem; background-color: var(--primary-color); padding: 1rem; color: white;">
              Hemos recibido tu
              pedido y en breve será despachado</p>

<div>

</div>


          <div id="factura" style="width: 100%;text-transform: uppercase;">






              <resumenGracias></resumenGracias>




          </div>


          <div style="display: flex;gap: 1rem;padding: 1rem;min-width  : 100%;">


          
            <div style="width:100%;">  <InputText style="width: 100%;" :value="`https://salchimonster.com/pagar/${store.last_order}`"> </InputText>  </div>

            <Button       @click="copyToClipboard"
 style="min-width:max-content;" label="Copiar link " icon="pi pi-copy" severity="help"></Button>


          </div>

      </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount, onBeforeMount, computed, onUnmounted } from 'vue';
import { usecartStore } from './store/shoping_cart';
import { useUserStore } from './store/user'
import { useSitesStore } from "./store/site";
import { useToast } from 'primevue/usetoast';
import resumenGracias from './ResumenGracias.vue';

const text = ref('');
const store = usecartStore();
const user = useUserStore()
import { useReportesStore } from './store/ventas';

const reportes = useReportesStore()
const toast = useToast()





const linkPago = computed(
  () => `https://salchimonster.com/pagar/${store.last_order}`
)


const obtenerHoraFormateadaAMPM = (fecha) => {
  const fechaParseada = new Date(fecha);
  const horas = fechaParseada.getHours();
  const minutos = fechaParseada.getMinutes();
  const ampm = horas >= 12 ? 'pm' : 'am';
  const hora12 = horas % 12 || 12;
  const horaFormateada = hora12 < 10 ? '0' + hora12 : hora12;
  const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;

  return `${horaFormateada}:${minutosFormateados} ${ampm}`;
};





async function copyToClipboard () {
  const texto = linkPago.value
  try {
    // Método moderno (requiere HTTPS)
    await navigator.clipboard.writeText(texto)
    toast.add({
      severity: 'success',
      summary: '¡Copiado!',
      detail: 'El enlace se copió al portapapeles',
      life: 2500
    })
  } catch (err) {
    /* Fallback para navegadores antiguos */
    const temp = document.createElement('input')
    temp.value = texto
    document.body.appendChild(temp)
    temp.select()
    document.execCommand('copy')
    temp.remove()

    toast.add({
      severity: 'info',
      summary: 'Copiado con método alternativo',
      detail: 'Tu navegador no soporta la API moderna de portapapeles',
      life: 3000
    })
  }
}



onMounted(() => {
  reportes.setLoading(false, "enviando tu pedido");

  text.value = `Hola soy *${user.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${store.last_order}*.\n

  *Escribo para Realizar la Transferecia*\n

  *Muchas Gracias* 🙏`;

  console.log(text.value);

});



const whatsappUrl = computed(() => {
  const baseUrl = 'https://api.whatsapp.com/send';
  const urlParams = new URLSearchParams({
      phone: '573053447255',
      text: text.value
  });
  return `${baseUrl}?${urlParams.toString()}`;
});


onUnmounted(() => {
  user.user = {
        name:'',
        neigborhood:'',
        address:'',
        phone_number:'',
        payment_method_option:'',
        was_reserva:false
    },

  store.cart = []
})

// onBeforeMount(() => {
//     store.cart.length <= 0? router.push('/'):''
// })

</script>


<style scoped>
@keyframes parpadeo {
  0% {
      filter: brightness(1);
  }

  50% {
      filter: brightness(1.1);
      transform: scale(1.01);
  }

}

.wsp {
  animation: parpadeo ease infinite .5s;
  transition: all ease .5s;
}


*{
  /* font-size: 1.3rem; */
  /* margin: 0; */

}
</style>
