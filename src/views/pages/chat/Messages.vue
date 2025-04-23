<template>
    <div style="height: 100%; position: relative;display: flex;justify-content: center;">
        <ProgressSpinner v-if="loadingMore" style="width: 50px; height: 50px;position: absolute;z-index: 100;color: white" strokeWidth="8" fill="transparent"
    animationDuration=".3s" aria-label="Custom ProgressSpinner" />
      <div style="position: relative; height: 100%;width: 100%; ">
        <!-- Contenedor de mensajes con ref para monitorear el scroll -->
        <div
          ref="messagesContainer"
          style="padding: 1rem; display: flex; flex-direction: column; gap: 0rem; overflow-y: auto; max-height: 100%;padding-bottom: 4rem;"
        >
          <div
            v-for="message in messages"
            :key="message?.message_data?.id"
            style="width: 100%; display: flex; gap: 1rem; padding-bottom: 1rem;"
            :style="message?.message_data?.employer_id ? 'justify-content: end;' : 'justify-content: start;'"
          >
            <!-- Avatar para mensajes entrantes -->
            <div 
              v-if="!message?.message_data?.employer_id"
              :style="`background-color:${user?.color}`"
              style="height: 100%; width: 3rem; aspect-ratio: 1/1; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
            >
              <h5 style="margin: 0; color: white; font-weight: 400;">
                {{ getInitials(user?.name) }}
              </h5>
            </div>
  
            <!-- Contenido del mensaje con truncamiento, saltos de línea y formato en negrita -->
            <div
              :style="message?.message_data?.employer_id ? 'background-color: #0a3744; border-radius: .5rem 0 .5rem .5rem;' : 'background-color: #2f2f41; border-radius: 0 .5rem .5rem .5rem;'"
              style="padding: 1rem 1rem 2.5rem 1rem;  
                /* si una “palabra” supera el ancho, quiebra ahí */
                overflow-wrap: break-word;
                word-break: break-word; /* para Safari */ max-width: 60%;min-width: 10rem; position: relative;"
            >
              <h6 style="color: white; margin: 0; font-weight: 300;">
                <!-- Usamos v-html y la función formatContent para interpretar los saltos de línea y *asteriscos* -->
                <span
                  v-if="!isExpanded(message?.message_data?.id)"
                  v-html="formatContent(message?.message_data?.content.substring(0, 200) + (message?.message_data?.content.length > 200 ? '...' : ''))"
                ></span>
                <span
                  v-else
                  v-html="formatContent(message?.message_data?.content)"
                ></span>
                <button
                  v-if="message?.message_data?.content.length > 200"
                  @click="toggleExpand(message?.message_data?.id)"
                  style="background: none; border: none; color: rgb(33, 150, 243); cursor: pointer; padding: 0 0.5rem;"
                >
                  Ver {{ isExpanded(message?.message_data?.id) ? 'menos' : 'más' }}
                </button>
              </h6>
           

              <h6
                style="color: white; margin: 0; font-weight: 300; position: absolute;min-width: 10rem; bottom: .5rem; right: 1rem; min-width: max-content; display: flex; gap: .5rem"
              >   <span style="opacity: .5;"> {{ message.time }}</span>
                <i v-if="message?.message_data.current_status_id == 3 && message?.message_data?.employer_id" style="color: greenyellow;" class="fa-solid fa-check-double"></i>
                <i v-if="message?.message_data.current_status_id == 2 && message?.message_data?.employer_id" style="color: greenyellow;" class="fa-solid fa-check"></i>
                <i v-if="message?.message_data.current_status_id == 1 && message?.message_data?.employer_id" style="color: gray;" class="fa-solid fa-check"></i>
                

              </h6>
  
              <!-- Burbuja de mensaje "tail" -->
              <svg
                v-if="!message?.message_data?.employer_id"
                style="position: absolute; left: -8px; top: 0; color: #2f2f41;"
                viewBox="0 0 8 13"
                height="13"
                width="8"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>tail-in</title>
                <path
                  opacity="0.13"
                  fill="#0000000"
                  d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
                ></path>
              </svg>
  
              <svg
                v-else
                style="position: absolute; right: -8px; top: 0; color: #0a3744;"
                viewBox="0 0 8 13"
                height="13"
                width="8"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>tail-out</title>
                <path
                  opacity="0.13"
                  d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                ></path>
              </svg>
            </div>
  
            <!-- Avatar para mensajes de employer -->
            <div
              v-if="message?.message_data?.employer_id"
              style="height: 100%; width: 3rem; min-width: 3rem; aspect-ratio: 1/1; background-color: rgb(3 88 95 / 53%); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
            >
              <h5 style="margin: 0; color: white; font-weight: 400;">
                {{ getInitials(message?.message_data?.employer_name) }}
              </h5>
            </div>
          </div>
        </div>
  
        <!-- Botón para bajar manualmente. Se muestra cuando el usuario no está al fondo -->
        <Button
          icon="pi pi-angle-down"
          v-if="showNewMessagesButton || nuevos_counter > 0"
          @click="scrollToBottomNoSmooth"
          :style="downButtonStyle"
        ></Button>
  
        <Button
          :label="nuevos_counter"
          v-if="nuevos_counter > 0"
          @click="scrollToBottomNoSmooth"
          :style="downButtonStyle2"
        ></Button>


      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI, URI_MESSAGES } from '../../../service/conection'
  import { useChatStore } from '@/store/chat'

  const chats = useChatStore()
  defineEmits(['down'])


  const markAsRead = async (msg) => {
  // Evita llamadas repetidas
  if (msg.message_data.current_status_id >= 3 || msg._marking) return
  msg._marking = true

  try {
    await fetchService.post(`${URI_MESSAGES}/read-message/${msg.message_data.id}/${route.params.restaurant_id}`,false)
    msg.message_data.current_status_id = 3         // ← actualiza el icono ✓✓
  } catch (err) {
    console.error('No se pudo marcar como leído', err)
  }
}




const checkVisibleUnread = () => {
  if (!messagesContainer.value) return
  const contRect = messagesContainer.value.getBoundingClientRect()

  messages.value.forEach((msg, idx) => {
    // Sólo mensajes entrantes y con current_status_id < 3
    if (msg.message_data.employer_id || msg.message_data.current_status_id >= 3) return

    // El div raíz de cada mensaje es el hijo de messagesContainer con el mismo índice
    const el = messagesContainer.value.children[idx]
    if (!el) return

    const rect = el.getBoundingClientRect()
    const fullyVisible = rect.top >= contRect.top && rect.bottom <= contRect.bottom

    if (fullyVisible) markAsRead(msg)
  })
}




  const cargando = ref(false)
  const route = useRoute()
  const getInitials = (name) => {
  if (!name) return '';
  const words = name.split(' ');
  const firstInitial = Array.from(words[0])[0];
  const secondInitial = words[1] ? Array.from(words[1])[0] : '';
  return firstInitial + secondInitial;
};

  
  // Variables reactivas
  const first = ref(true)
  const messages = ref([])
  const user = ref({})
  const messagesContainer = ref(null)
  const showNewMessagesButton = ref(false)
  const nuevos_counter = ref(0)
  // Variables para paginación
  const paginationOffset = ref(0)
  const paginationLimit = ref(100)
  const loadingMore = ref(false)
  const noMoreMessages = ref(false)
  // Variable para indicar si han llegado nuevos mensajes (para el botón)
  const newMessagesArrived = ref(false)
  // Objeto reactivo para almacenar el estado de expansión de cada mensaje
  const expandedMessages = ref({})

  const last_message = ref({})
  
  // Función para alternar el estado expandido de un mensaje según su id
  const toggleExpand = (id) => {
    expandedMessages.value[id] = !expandedMessages.value[id]
  }
  
  // Función para saber si un mensaje está expandido
  const isExpanded = (id) => {
    return !!expandedMessages.value[id]
  }
  
  // Función para formatear el contenido: muestra saltos de línea y pone en negrita el texto entre asteriscos
  const formatContent = (content) => {
    if (!content) return ''
    let formatted = content.replace(/\n/g, '<br/>')
    formatted = formatted.replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    return formatted
  }
  
  // Computed para el estilo del botón de scroll
  const downButtonStyle = computed(() => {
    return {
      position: 'absolute',
      zIndex: '300000',
      height: '3rem',
      width: '3rem',
      borderRadius: '50%',
      bottom: '5rem',
      right: '2rem',
      backgroundColor: newMessagesArrived.value ? 'rgb(33, 150, 243)' : 'rgba(255, 255, 255,.1)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    }
  })
  
  const downButtonStyle2 = computed(() => {
    return {
      position: 'absolute',
      zIndex: '300000',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2rem',
      borderRadius: '50%',
      bottom: '5rem',
      right: '1rem',
      backgroundColor: 'rgb(156, 39, 176)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    }
  })
  
  // Extraer iniciales a partir del nombre

  
  // Función de actualización de mensajes (carga y actualización)
  const update = async (cargar = true) => {
    if (cargar) {
      // Carga manual: reinicia paginación y conversación
      paginationOffset.value = 0
      noMoreMessages.value = false
  
      const result = await fetchService.get(
        `${URI_MESSAGES}/conversation/${route.params.restaurant_id}/${route.params.user_id}/${paginationOffset.value}/${20}`,
        cargar
      )
  
      messages.value = result?.[0]?.messages || []
      user.value = result?.[0]?.user || {}
  
      await nextTick()
  
      if (first.value) {
        scrollToBottomNoSmooth()
        first.value = false
      }

    } else {
      // Actualización automática: obtiene mensajes nuevos
      const lastMessage = messages.value.length > 0
        ? messages.value[messages.value.length - 1].message_data.id
        : 0
  
      const result = await fetchService.get(
        `${URI_MESSAGES}/conversation/${route.params.user_id}/new?lastMessageId=${lastMessage}`,
        cargar
      )
  
      const nuevos = result?.[0]?.messages || []
      const mensajesNuevos = nuevos.filter(
        newMsg =>
          !messages.value.some(
            msg => msg.message_data.id === newMsg.message_data.id
          )
      )
      messages.value = [...messages.value, ...mensajesNuevos]
      showNewMessagesButton.value = true
      newMessagesArrived.value = true
      user.value = result?.[0]?.user || {}
  
      await nextTick()
    }
  }
  
  watch(newMessagesArrived, (new_val) => {
    if (!new_val) {
      nuevos_counter.value = 0
    }
  })
  
  const fetchNewMessages = async () => {
    const lastMessage = messages.value.length > 0
      ? messages.value[messages.value.length - 1].message_data.id
      : 0
    const result = await fetchService.get(
      `${URI_MESSAGES}/conversation-last-message/${route.params.restaurant_id}/${route.params.user_id}/`,
      false
    )
    const nuevos = result?.[0]?.messages || []
    const wa_user_id = result?.[0]?.wa_id || []

    const mensajesNuevos = nuevos.filter(
      newMsg =>
        !messages.value.some(
          msg => msg.message_data.id === newMsg.message_data.id && !newMsg.employer_id
        )
    )
    messages.value = [...messages.value, ...mensajesNuevos]
    await nextTick()


    scrollToBottomNoSmooth()

    if(mensajesNuevos && mensajesNuevos?.[0] && !mensajesNuevos?.[0]?.message_data?.employer_id){
      if (wa_user_id == route.params.user_id){
        nuevos_counter.value ++
        newMessagesArrived.value = true
        showNewMessagesButton.value = true
      

      }
    }
    

  }
  
  // Carga de mensajes anteriores (paginación) al hacer scroll hacia arriba
  const loadMoreMessages = async () => {
    
    if (loadingMore.value || noMoreMessages.value) return
    loadingMore.value = true
  
    const currentScrollHeight = messagesContainer.value
      ? messagesContainer.value.scrollHeight
      : 0
  
    const newOffset = paginationOffset.value + paginationLimit.value
    const result = await fetchService.get(
      `${URI_MESSAGES}/conversation/${route.params.restaurant_id}/${route.params.user_id}/${newOffset}/${paginationLimit.value}`,
      false
    )
    const olderMessages = result?.[0]?.messages || []
  
    if (olderMessages.length === 0) {
      noMoreMessages.value = true
    } else {
      messages.value = [...olderMessages, ...messages.value]
      paginationOffset.value = newOffset
      await nextTick()
      const newScrollHeight = messagesContainer.value.scrollHeight
      messagesContainer.value.scrollTop = newScrollHeight - currentScrollHeight
    }
    loadingMore.value = false
  }
  
  // Manejador del scroll del contenedor
  const handleScroll = () => {

    checkVisibleUnread()          // ← añade esta línea

    if (!messagesContainer.value) return
    const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value
  
    if (scrollTop < 50) {
      loadMoreMessages()
    }
  
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50
    if (isAtBottom) {
      showNewMessagesButton.value = false
      newMessagesArrived.value = false
    } else {
      showNewMessagesButton.value = true
    }
  }
  
  // Función para desplazar el scroll hacia abajo (con desplazamiento suave)
  const scrollToBottom = () => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        bottom: 0,
        behavior: 'smooth'
      })
      showNewMessagesButton.value = false
      newMessagesArrived.value = false
    }
    nuevos_counter.value = 0
  }
  
  // Scroll sin animación (para la primera carga)
  const scrollToBottomNoSmooth = () => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        behavior:'smooth'
      })
      showNewMessagesButton.value = false
      newMessagesArrived.value = false
    }
    nuevos_counter.value = 0
  }
  
  // Configuración del WebSocket para actualizaciones
  let socket = null
  const connectWebSocket = () => {
    if (!route.params.user_id) return
  
    const wsUrl = `wss://sockets-service.salchimonster.com/ws/${route?.params?.user_id}`
    socket = new WebSocket(wsUrl)
  
    socket.onopen = () => {
      console.log('Conexión WebSocket establecida a:', wsUrl)
    }
  
    socket.onmessage = (event) => {
      console.log('Mensaje recibido por WebSocket:', event.data)
      if (event.data === `actualizar-${route.params.user_id}`) {
        fetchNewMessages()
      }
    }
  
    socket.onerror = (error) => {
      console.error('Error en el WebSocket:', error)
    }
  
    socket.onclose = () => {
      console.warn('WebSocket cerrado. Se intentará reconectar en 5 segundos...')
      setTimeout(() => connectWebSocket(), 5000)
    }
  }
  
  onMounted(() => {
    update()
    connectWebSocket()
    if (messagesContainer.value) {
      messagesContainer.value.addEventListener('scroll', handleScroll)
    }
  })
  
  onUnmounted(() => {
    if (socket) {
      socket.close()
    }
    if (messagesContainer.value) {
      messagesContainer.value.removeEventListener('scroll', handleScroll)
    }
  })
  
  watch(
    () => route.params,
    () => {
      first.value = true
      update()
      if (socket) {
        socket.close()
      }
      scrollToBottomNoSmooth()
      connectWebSocket()
      nuevos_counter.value = 0
    }
    
  )


  defineExpose({
  scrollToBottom,
  scrollToBottomNoSmooth
})
  </script>
  
  <style scoped>
  /* Estilos para la barra de scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #94949423;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffffff90;
    border-radius: 6px;
    /* min-height: 4rem; */
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
  </style>
  