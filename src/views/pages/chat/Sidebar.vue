<template>
    <div class="sidebar-container">
      <div class="header">
      


                <Dropdown 
            v-model="current_restaurant" 
            :options="restaurants" 
            optionLabel="name" 
            style="background-color: #ffffff20;border: none; color: white;outline: none;box-shadow: none;"
          >
            <!-- Plantilla para cada opción en la lista -->
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img 
                  :src="slotProps.option.img" 
                  alt="Logo" 
                  style="width: 24px; height: 24px; margin-right: 8px;object-fit: contain;"
                />
                <span style=""> <b>{{ slotProps.option.name }}</b> </span>
              </div>
            </template>

            <!-- Plantilla para el valor seleccionado en el dropdown -->
            <template #value="slotProps">
              <div class="flex align-items-center">
                <img 
                  v-if="slotProps.value" 
                  :src="slotProps.value.img" 
                  alt="Logo" 
                  style="width: 24px; height: 24px; margin-right: 8px;object-fit: contain;"
                />
                <span style="color: white;">{{ slotProps.value ? slotProps.value.name : 'Selecciona' }}</span>
              </div>
            </template>
          </Dropdown>


        <div style="display: flex;gap: 1rem;">
          <Button class="options" text>
            <i class="pi pi-bars text-2xl text-white"></i>
          </Button>


          <div style="position: relative;">
            <Button class="options" text style="opacity: .5;">
            <i class="pi pi-bell text-2xl text-white"></i>
          </Button>

          <div
                style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background-color: rgb(156, 39, 176);position: absolute;top: -1rem;right: -.7rem; display: flex; align-items: center; justify-content: center; font-weight: bold;"
              >
                <span style="color: white;">{{ 9 }}</span>
              </div>
          </div>
      
        </div>
      </div>
  
      <div class="busqueda">
        <IconField style="display: flex;">
        <InputText style="color: white;" class="search" v-model="value1" placeholder="Buscar..." />
        <!-- <InputIcon class="pi pi-search" /> -->

        </IconField>
      </div>
  
      <div class="statuses">
        <Button
          style="height: 2.3rem; border-radius: .3rem; padding: .5rem;"
          text
          v-for="(button, index) in buttons"
          :key="index"
          @click="() => current = button"
          class="status"
          :label="button.label"
          :style="button === current ? { backgroundColor: button.textColor, color: '#fff' } : { backgroundColor: '#ffffff20', color: button.textColor }"
        ></Button>
      </div>
  
      <!-- Lista de chats -->
      <div class="chats">
        <RouterLink
          active-class="active"
          v-for="(chat, index) in messages.last_messages[props.restaurant?.id]"
          :key="index"
          :to="`/chat/messages/${current_restaurant.id}/${chat.wa_id}/${chat.nombre}/${chat.color}?expirado=${chat.expirado}&?expira-en?=${chat.tiempo_para_expirar}`"
        >
          <div class="chat">
            <div style="grid-area: imagen;height: 100%;width: 100%;display: flex;align-items: center;">
                <div
    
              style="height: 100%; width: 3rem; height: 3rem; aspect-ratio: 1/1; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;font-size: 1.3rem;" :style="`background-color:${chat.color}`"
            >
              
                {{ getInitials(chat?.nombre) }}
           
            </div>

            </div>
            
            <div style="grid-area: nombre; text-transform: capitalize;">
              {{ chat.nombre }}
            </div>
            <div v-if="chat.tiempo_para_expirar || !chat.expirado"  style="grid-area: expiration;text-align: end; text-transform: capitalize; color: #ffffff80;">
             Expira en {{ chat.tiempo_para_expirar }}
            </div>
            <div v-else style="grid-area: expiration;text-align: end; text-transform: capitalize;color:  #ff000080;;">
             Expirado
            </div>
            <span style="grid-area: mensaje; color: #ffffff80;">
              {{ chat.mensaje_truncado }}
            </span>
            <span style="grid-area: fecha; text-align: end; text-transform: capitalize;">
              {{ chat.abreviatura || chat.fecha_ultimo_mensaje }}
            </span>
            <div
              style="grid-area: check; text-align: end; display: flex; width: 100%; justify-content: end; gap: .5rem;"
            >
              <div v-if="chat.unreaded > 0"
                style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background-color: rgb(156, 39, 176); display: flex; align-items: center; justify-content: center; font-weight: bold;"
              >
                <span style="color: white;" >{{ chat.unreaded }}</span>
              </div>
              <i style="color: greenyellow;" class="fa-solid fa-check-double"></i>
            </div>
          </div>
        </RouterLink>

      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import { URI_MESSAGES } from '@/service/conection.js'
  import { fetchService } from '@/service/utils/fetchService.js'
  import { useChatStore } from '@/store/chat'
import { useRoute } from 'vue-router'
import router from '../../../router'


const props = defineProps(  {
  restaurant:Object
})



const messages = useChatStore()



const route = useRoute()






  const restaurants = [
    {
      id:1,
      name:"Salchimonster",
      img:"https://backend.salchimonster.com/read-photo-product/xai0dVnL"
    },
    {
      id:7,
      name:"Distrimoster",
      img:"https://backend.salchimonster.com/read-photo-product/iX6UiE6e"
    }
  ]

  const current_restaurant = ref( {
      id:1,
      name:"Salchimonster",
      img:"https://backend.salchimonster.com/read-photo-product/xai0dVnL"
    },)
  
  const buttons = ref([
    { label: 'Todos',         bgColor: 'ffffff00', textColor: '#4CAF50' },
    { label: 'Sin leer',      bgColor: 'ffffff00', textColor: '#2196F3' },
    { label: 'Favoritos',     bgColor: 'ffffff00', textColor: '#FFC107' },
    { label: 'Preocupantes',  bgColor: 'ffffff00', textColor: '#F44336' },
    { label: 'Top',           bgColor: 'ffffff00', textColor: '#9C27B0' }
  ])
  const current = ref({})
  const first = ref(true)
  
  
onMounted(() => {
  if (props.restaurant) {
    current_restaurant.value = props.restaurant
  }
})


  /**
   * Función para obtener la lista de mensajes
   */
   const getInitials = (name) => {
  if (!name) return '';
  const words = name.split(' ');
  const firstInitial = Array.from(words[0])[0];
  const secondInitial = words[1] ? Array.from(words[1])[0] : '';
  return firstInitial + secondInitial;
};


watch(current_restaurant, (newVal) => {
    // alert(route.params.restaurant_id)

    if (route.params.restaurant_id !== current_restaurant.value.id) {
      router.push('/chat')
    }
} )

  const update = async () => {
    
    messages.last_messages[props.restaurant?.id] = await fetchService.get(`${URI_MESSAGES}/last-contact-messages/${props.restaurant?.id}`,false)
    first.value = false
  }
  
  // WebSocket usando salchimonster-all
  let socket = null
  const connectWebSocket = () => {
    const wsUrl = `wss://sockets-service.salchimonster.com/ws/salchimonster-${props.restaurant?.id}`
    socket = new WebSocket(wsUrl)
  
    socket.onopen = () => {
      console.log('Conectado a:', wsUrl)
    }
  
    socket.onmessage = (event) => {
      console.log('Mensaje recibido:', event.data)
      if (event.data === 'nuevo mensaje') {
        update()
      }
    }
  
    socket.onerror = (error) => {
      console.error('Error en WebSocket:', error)
    }
  
    socket.onclose = () => {
      console.warn('WebSocket cerrado. Se intentará reconectar en 5 segundos...')
      // Intentar reconectar
      setTimeout(connectWebSocket, 5000)
    }
  }
  
  onMounted(async () => {
    await update()
    connectWebSocket()
  })
  
  onUnmounted(() => {
    if (socket) {
      socket.close()
    }
  })
  </script>
  
  <style scoped>
  .sidebar-container {
    width: 100%;
    background-color: #ffffff11;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    height: calc(100%);
    border-radius: 0.5rem;
    overflow: auto;
    gap: 1rem;
    grid-template-rows: 3rem 3rem min-content 1fr;
  }
  
  .restaurant h5 {
    color: white;
    margin: 0;
  }
  
  .restaurant img {
    color: white;
    aspect-ratio: 1/1;
    height: 100%;
    object-fit: contain;
  }
  
  .restaurant {
    display: flex;
    gap: 1rem;
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
    outline: none !important;
    border: none !important;
  }
  
  *:focus {
    outline: none;
    border: none;
  }
  
  .chats {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    overflow: auto;
    max-height: 100%;
    overflow: auto;
    width: 100%;
  }
  
  .chat {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-areas: 
      "imagen nombre fecha"
      "imagen mensaje check"
      "imagen  hr hr"
      "expiration  expiration expiration";
    grid-template-columns: 1fr 5fr 2fr;
    grid-template-rows: 1fr 2fr;
    color: white;
    gap:0 1rem;
    cursor: pointer;
    padding: 0.6rem 1rem;
    transition: all ease 0.3s;
  }
  
  .chat:hover {
    background-color: rgba(255, 255, 255, 0.13);
    box-shadow: 0 0 0rem black;
  }
  
  .active {
    background-color: rgba(255, 255, 255, 0.13);
    box-shadow: 0 0 0rem black;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: #94949423;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #ffffff20;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  
  html {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
  
  .cliente-img {
    width: 3rem;
    /* background-color: white; */
    border-radius: 50%;
    height: 3rem;
  }
  
  h4 {
    color: white;
    padding: 0;
    margin: 0;
  }
  
  .header {
    display: flex;
    width: 100%;
    align-items: center;
    min-width: max-content;
    justify-content: space-between;
    padding: 1rem;
  }
  
  .statuses {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: -0rem 1rem;
  }
  
  .status {
    background-color: rgba(255, 255, 255, 0.144);
    color: white;
  }
  
  .busqueda {
    /* display: flex; */
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  
  .options {
    padding: 0;
    margin: 0;
  }
  
  .search {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
  }
  
  hr {
    height: 0;
  }
  
  *:focus {
    box-shadow: none !important;
    outline: none !important;
  }
  </style>
  