<template>
  <div class="grid xl:mx-0 mx-0  py-0 mt-6 px-0">

    <div class="col-12 py-0 px-2 shadow-2 my-0" >

      <nav class="">

        <ul class="pb-0 p-0" style="display: flex;flex-wrap: wrap; gap:1rem;list-style: none;overflow-x: auto;">
          <li v-for="site in sites.filter(site => site.show_on_web)">
            <Button class="p-2 mb-2" @click="site_cocina.site = site" :style="site_cocina.site.site_id == site.site_id? 'box-shadow:0 5px 0px var(--primary-color)' : ''"  style="min-width: max-content;border-radius: 0;color: black" text :label="site.site_name"></Button>
          </li>


          <li style="display: flex; gap:1rem;">
         
           <InputText style="" v-model.trim="searchId"  placeholder="Buscar por id (sin #)"></InputText>     <InputMask v-model="searchPhoneNumber"  prefix="+57" id="basic"  mask="999 999 9999" placeholder="Buscar por telefono" />
           <Button @click="search()" severity="help" icon="pi pi-search" label="Buscar"></Button>
          </li>
        </ul>

      </nav>

    </div>

  

    <DialogoPedido>

  </DialogoPedido>

    <div class="md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top">

      <div class=" shadow-4 contenedor pb-2" style="overflow: hidden; background-color:#ffad53
">

        <div style="height: 100%;width: 100%;">
          <p class="col-12 text-center shadow-4 " style="background-color: #ffffff61;">
            <span class="text-center text-2xl" style="color: black;font-weight: bold;"> <i class="pi pi-envelope
 text-2xl"></i> RECIBIDOS</span>
          </p>

        

          <div class="lg:pb-8" style="height: 100%; overflow-y: auto;">

            <div class="px-3 py-2"
              v-for="orden in store.TodayOrders.filter(orden => orden.current_status == 'generada')">
              <OrderItem :order="orden"/>
            </div>

           
          </div>
        </div>





      </div>



    </div>



   <div class="md:px-2 xl:pt-5  p-0 col-12 xl:col-4 top">
      <div class=" shadow-4 contenedor pb-2" style="overflow: hidden; background-color:#8e3693
">
        <div style="height: 100%;width: 100%;">

          <p class="col-12 text-center shadow-4" style="background-color: #ffffff61;">
            <span class="text-center text-2xl" style="color: black;font-weight: bold;"> <i
                class="pi pi-clock text-2xl"></i>
              EN PREPARACION</span>
          </p>
          <div class="lg:pb-8" style="height: 100%; overflow-y: auto;">

            <div class="px-3 py-2"
            v-for="orden in store.TodayOrders.filter(orden => orden.current_status == 'en preparacion')">
              <OrderItem :order="orden"/>
            </div>


            
          

            
          </div>



        </div>
      </div>
    </div>


    <div class="md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top">
      <div class=" shadow-4 contenedor pb-2" style="overflow: hidden; background-color:#00bf7a
">
        <div class="lg:pb-8" style="height: 100%;width: 100%;">


          <p class="col-12 text-center shadow-4" style="background-color: #ffffff61;">
            <span class="text-center text-2xl" style="color: black;font-weight: bold;"><i class="pi pi-send text-2xl
"></i> ENVIADOS</span>
          </p>
          <div style="height: 100%; overflow-y: auto;">

            <div class="px-3 py-2"
            v-for="orden in store.TodayOrders.filter(orden => orden.current_status == 'enviada')">
              <OrderItem :order="orden"/>
            </div>


          </div>

      
          



        </div>
      </div>
    </div>


    <div class="md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top">
      <div class=" shadow-4 contenedor pb-2" style="overflow: hidden; background-color:red
">
        <div class="lg:pb-8" style="height: 100%;width: 100%;">


          <p class="col-12 text-center shadow-4" style="background-color: #ffffff61;">
            <span class="text-center text-2xl" style="color: black;font-weight: bold;"><i class="pi pi-times text-2xl
"></i> CANCELADOS</span>
          </p>
          <div style="height: 100%; overflow-y: auto;">

            <div class="px-3 py-2"
            v-for="orden in store.TodayOrders.filter(orden => orden.current_status == 'cancelada')">
              <OrderItem :order="orden"/>
            </div>


          </div>

      
          



        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

// import { gruposPedidos, obtenerHoraFormateadaAMPM, filtrarPedidosPorFecha, fecha_del_server, grupos, pedido, pedidos, ordenes_de_hoy, dialog_pedido_visible, set_dialog_order, filtrarPorEstado, open_order } from '@/service/un_pedido'
// import { URI } from '../../service/conection';
import DialogoPedido from './DialogoPedido.vue';
// import pedidoItem from '@/components/pedidoItem.vue';
import { onMounted,onUnmounted, ref, watch } from 'vue';
import OrderItem from './OrderItem.vue';
// import { orderService } from '../../service/orderService';
import { useOrderStore } from '@/store/order';
import {siteService} from '@/service/siteService.js'
import {orderService} from '@/service/cocina/orderService.js'
import { useSitesCocinaStore } from "@/store/siteCocina";
const sites = ref([])

const store = useOrderStore()

const site_cocina = useSitesCocinaStore()
const searchId = ref('')
const searchPhoneNumber = ref('')


onMounted(() => {
  store.startOrderUpdates();
});

onUnmounted(() => {
  store.stopOrderUpdates();
});

onMounted(async() => {
  sites.value = await siteService.getSites()
  store.getTodayOrders()
})

watch(() => site_cocina.site , () => {
  store.getTodayOrders()
})

watch(searchId, () => {
  searchPhoneNumber.value = ''
})
watch(searchPhoneNumber, () => {
  searchId.value = ''
})



const search = () => {
  if (searchId.value != ''){
    searchOrder_id(searchId.value)
  }else if (searchPhoneNumber.value != ''){
    searchPhone(searchPhoneNumber.value?.split(' ').join(''))
  }else return
}


const searchOrder_id = async(id) => {
  const order = await orderService.getOrderById(id)
  if (order?.order_id){
    store.setVisible('currentOrder',true)
    store.setOrder(order)
    site_cocina.site = sites.value.filter(site => site.site_id == order.site_id)[0]
    store.currentSearchingOrder = order

    
  } else{
    alert('Orden no encontrada')
  }

}

const searchPhone = async(phone) => {
  const order = await orderService.getOrderByPhone(phone)
  if (order?.order_id){
    store.setVisible('currentOrder',true)
    store.setOrder(order)
    site_cocina.site = sites.value.filter(site => site.site_id == order.site_id)[0]
    store.currentSearchingOrder = order

    
  } else{
    alert('Orden no encontrada')
  }

}

</script>

<style scoped>
.texto-negro {
  color: black;
}

.before {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2);
}


.pedido {
  /* background-color: white; */
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.742);
  transition: .3s all ease
}

.pedido:hover {
  background-color: rgb(255, 255, 255);
  /* transform:  translateX(10px); */
}

.RECIBIDOS {
  background-color: rgba(246, 255, 0, 0.73)
}


.contenedor{
  height: calc(100vh - 16rem);
  border-radius: 0.5rem;
}

.top{
  margin-top:0rem;
}

@media  ( max-width: 1200px)  {

  .contenedor{
    height: 1000%;
    min-height: 20vh;
    margin: 0;
    border-radius: 0;

  }
  .top{
  margin-top:1rem;
}
}

.EN {

  background-color: rgba(66, 255, 255, 0.73)
}


.ENVIADOS {
  background-color: rgba(123, 255, 66, 0.73)
}

::-webkit-scrollbar {
  width: 0.5rem;
  /* Ancho de la barra de desplazamiento */
  padding-top: 1rem;
  position: absolute;
  /* display: none; */
}

.clase {}

/* Estilo del pulgar de la barra de desplazamiento */
/* WebKit (Chrome, Safari) */
::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  /* Color del pulgar de la barra de desplazamiento */
  border-radius: 9px;
  /* border: 5px solid var(--primary-color); */
  height: 10rem;
  width: 10rem;
  /* display: none;  */
}
</style>