<template>
    <div class="main-container">
      <div class="top-bar" style="border-radius: .5rem;gap: 1rem;">
        <div class="top-bar-left">
          <div style="height:3rem;width: 3rem;display: flex;align-items: center;">
            <div class="cliente-img"
                 :style="`background-color:${route.params.color}`"
                 style="height: 100%; width: 3rem; color: white; height: 3rem; aspect-ratio: 1/1; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase; font-size: 1.3rem;">
              {{ getInitials(route.params.user_name) }}
            </div>
          </div>
          <div class="top-bar-info">
            <strong>
              <h5 style="text-transform: capitalize;margin: 0;">{{ route.params.user_name?.substring(0, 40) }} </h5>
            </strong>
            <!-- <span>Click para ver informacion</span> -->
          </div>
          
        </div>

        <div v-for="i in restaurants.filter(r => r.id == route.params.restaurant_id)">
            <img :src="i.img" alt="" style="max-height: 2rem;object-fit: contain;">
        </div>
        
        <div style="display: flex;align-items: center;gap: 1rem;">
          <Button icon="pi pi-shopping-cart" class="p-2" style="color: white;" :style="`background-color:${route.params.color}`" label="Compras"></Button>
          <Button icon="pi pi-shopping-cart" class="p-2" style="color: white;min-width: max-content;" severity="warning"  label="Ing. Ped"></Button>

          <Button text class="p-2">
            <i class="pi pi-search text-2xl text-white"></i>
          </Button>
          <Button text class="p-2">
            <i class="pi pi-bars text-2xl text-white"></i>
          </Button>
        </div>
      </div>
  
      <div style="height: 100%; overflow: auto;"> 
        <RouterView>
            <Messages ref="Messages_element"></Messages>
        </RouterView>
      </div>
  
      <div class="chat-bar">
        <div class="message-area">
          <Button text>
            <i class="pi pi-plus text-2xl text-white"></i>
          </Button>
          <!-- Se agrega el event handler @keydown -->
          <Textarea
              v-model="messageBody"
              autoResize
              class="message"
              :disabled="isExpired"
              @keydown="handleKeydown"
            />
        </div>
        <div style="position: relative; transition: all ease .2s;">
          <Button class="btn-descuento" icon="pi pi-send btn-descuento" style="transition: all ease .2s;" label="Enviar Descuento"></Button>
          <Button text v-if="messageBody?.trim() === ''">
            <i class="pi pi-microphone text-2xl text-white"></i>
          </Button>
          <Button @click="send_message" text v-else>
            <i class="pi pi-send text-2xl text-white"></i>
          </Button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed,watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { loginStore } from "@/store/user";
  import { URI_MESSAGES } from '../../../service/conection';
  import { fetchService } from '../../../service/utils/fetchService';
  import Messages from './Messages.vue';
  const route = useRoute();
  const login = loginStore();


  const Messages_element = ref(null)
  const messageBody = ref('')
  
  const restaurants = ref([
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
  ])


  
  const isExpired   = computed(() => route.query?.expirado === 'true' || route.query?.expirado === true)

  // Sincroniza el contenido con el query param
  watch(
    isExpired,
    (val) => {
      messageBody.value = val ? 'Conversación expirada' : ''
    },
    { immediate: true }          // ejecuta al cargar el componente
  )

  const messages = ref(null)
  
  // Define el objeto del mensaje
  const message = ref({
    "messaging_product": "whatsapp",
    "type": "text",
    "template": {
      "name": "string",
      "language": {
        "code": "string"
      },
      "components": [
        {
          "additionalProp1": {}
        }
      ]
    },
    "text": {
      "body": ""
    },
    "employer_id": login.rawUserData.id,
    "context_message_id": null,

  });
  
  // Función para enviar el mensaje
  const send_message = async () => {

    if (isExpired.value) return
    message.value.restaurant_id = route.params.restaurant_id?.toString()
    message.value.to = route.params.user_id
    message.value.text.body = messageBody.value.toString()
    messageBody.value = "";

    try {
      // Se envía la solicitud incluyendo el header de autorización
      await fetchService.post(
        `${URI_MESSAGES}/webhook/send`,
        message.value,false,
        {
          headers: {
            "Authorization": `Bearer ${login.token}`  // Asegúrate de que login.token contenga un token válido
          }
        }
      );

      setTimeout(() => {
      }, 1000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
    
  };
  
  // Función para el manejo de la tecla presionada en el Textarea
  const handleKeydown = (event) => {
    // Si presionamos Enter sin Shift, se envía el mensaje
    if (event.key === 'Enter') {
      event.preventDefault();  // Evita agregar un salto de línea
      if (message.value.text.body.trim() === "") return; // Evita enviar mensajes vacíos
      send_message();
    }
  };



  // Función para obtener las iniciales del nombre del usuario
  const getInitials = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    const firstInitial = Array.from(words[0])[0];
    const secondInitial = words[1] ? Array.from(words[1])[0] : '';
    return firstInitial + secondInitial;
  };
  </script>
  
  <style scoped>
  .main-container {
    width: 100%;
    background-color: #ffffff11;
    display: grid;
    height: 100vh;
    max-height: calc(100vh - 4rem);
    border-radius: .5rem;
    grid-template-rows: 4.5rem 1fr max-content;
  }
  
  .btn-descuento {
    position: absolute;
    right: 1.5rem;
    top: -5rem;
    min-width: max-content;
    margin: 0;
    color: #FFC107;
    background-color: #ffffff10;
  }
  
  .btn-descuento:hover {
    background-color: #FFC107;
    color: #000000;
  }
  
  .message-area {
    width: 100%;
    display: flex;
  }
  
  h5 {
    margin: 0;
    padding: 0;
    color: white;
  }
  
  .top-bar-info {
    display: flex;
    /* flex-direction: column; */
    color: rgba(255, 255, 255, 0.336);
    align-items: center;
    gap: .5rem;
  }
  
  .top-bar-left {
    display: flex;
    gap: 1rem;
  }
  
  .top-bar {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.062);
    height: 100%;
    display: flex;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
  }
  
  .chat-bar {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.062);
    height: 100%;
    display: flex;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
  }
  
  .cliente-img {
    border-radius: 50%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
  
  .message {
    background-color: rgba(255, 255, 255, 0.103);
    border: none;
    border-radius: .5rem;
    width: 100%;
    max-height: 10rem;
    color: white;
    font-family: roboto;
    font-size: medium;
    padding: 1rem;
    min-height: min-content;
    outline: none;
  }
  
  /* Estilos para la scrollbar */
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
  </style>
  