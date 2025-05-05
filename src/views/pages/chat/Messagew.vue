<template>

<div   :style="props.message.message_data.employer_id ? 'justify-content: end;' : 'justify-content: start;'" style="width: 100%; display: flex; gap: 1rem; padding-bottom: 1rem;">

<div
  v-if="!props.message.message_data.employer_id"
  :style="`background-color:${user?.color}`"
  style="height: 100%; width: 3rem; aspect-ratio: 1/1; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
>
  <h5 style="margin: 0; color: white; font-weight: 400">{{ props.getInitials(user?.name) }}</h5>
</div>

<!-- Burbuja -->
<div
  :style="props.message.message_data.employer_id
          ? 'background-color:#0a3744;border-radius:.5rem 0 .5rem .5rem;'
          : 'background-color:#2f2f41;border-radius:0 .5rem .5rem .5rem;'"
  style="padding:1rem 1rem 2.5rem 1rem;overflow-wrap:break-word;word-break:break-word;
         max-width:60%;min-width:10rem;position:relative;display:flex;flex-direction:column;gap:.5rem;"
>

<Button class="options" style="color: white;" @click="setMarkedMessage(message)">
    <i class="pi pi-angle-down text-xl"></i>
  </Button>
  <!-- Adjuntos -->
  <template v-if="props.message.message_data.file_type">
    <template v-if="props.message.message_data.file_type === 'image'">
    <img class="img-fluid"
      :src="props.message.currentSrc"                   
      @click="setWatchingImg(props.message.full)"        
      style="max-width:38rem;border-radius:.3rem;width:18rem;object-fit:cover;cursor:pointer"
    />
  </template>

    <template v-else-if="props.message.message_data.file_type === 'audio'">
      <audio :src="fileUrl(props.message.message_data)" controls style="width:100%;min-width:20rem;max-width: 100%;background-color: white; border-radius: .5rem;" />
    </template>

    <template v-else>
      <a
        :href="fileUrl(props.message.message_data)"
        target="_blank"
        style="color:#2196f3;text-decoration:none;align-self:flex-start;display:flex;align-items:center;gap:.5rem"
      >
        <i class="pi pi-file" /> Descargar archivo
      </a>
    </template>
  </template>

  <!-- Texto -->
  <h6 style="color:white;margin:0;font-weight:300">
    <span
      v-if="!isExpanded(props.message.message_data.id)"
      v-html="formatContent(props.message.message_data.content?.substring(0,200) +
              (props.message.message_data.content?.length > 200 ? '…' : ''))"
    />
    <span v-else v-html="formatContent(props.message.message_data.content)" />
    <button
      v-if="props.message.message_data.content?.length > 200"
      @click="toggleExpand(props.message.message_data.id)"
      style="background:none;border:none;color:#2196f3;cursor:pointer;padding:0 .5rem"
    >
      Ver {{ isExpanded(props.message.message_data.id) ? 'menos' : 'más' }}
    </button>
  </h6>

  <!-- Hora e iconos -->
  <h6
    style="color:white;margin:0;font-weight:300;position:absolute;bottom:.5rem;right:1rem;min-width:max-content;display:flex;gap:.5rem"
  >
    <span style="opacity:.5">{{ props.message.time }}</span>
    <i v-if="props.message.message_data.current_status_id == 3 && props.message.message_data.employer_id" class="fa-solid fa-check-double" style="color:greenyellow" />
    <i v-else-if="props.message.message_data.current_status_id == 2 && props.message.message_data.employer_id" class="fa-solid fa-check" style="color:greenyellow" />
    <i v-else-if="props.message.message_data.current_status_id == 1 && props.message.message_data.employer_id" class="fa-solid fa-check" style="color:gray" />
  </h6>
  
  <!-- Cola -->


  <svg
    v-if="!props.message.message_data.employer_id"
    style="position:absolute;left:-8px;top:0;color:#2f2f41"
    viewBox="0 0 8 13" height="13" width="8"
  >
    <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812C1.042,1,0.474,2.156,1.533,3.568z"/>
    <path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"/>
  </svg>
  <svg
    v-else
    style="position:absolute;right:-8px;top:0;color:#0a3744"
    viewBox="0 0 8 13" height="13" width="8"
  >
    <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625C7.526,2.156,6.958,1,5.188,1z"/>
    <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"/>
  </svg>
</div>

<!-- Avatar employer -->
<div
  v-if="props.message.message_data.employer_id"
  style="height: 100%; width: 3rem; min-width: 3rem; aspect-ratio: 1/1; background-color: rgb(3 88 95 / 53%); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
>
  <h5 style="margin: 0; color: white; font-weight: 400">{{ props.getInitials(props.message.message_data.employer_name) }}</h5>
</div>

</div>


</template>


<script setup lang="ts">


const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  setMarkedMessage: {
    type: Function,
    required: true,
  }, 
  getInitials: {
    type: Function,
    required: true,
  },
  setWatchingImg: {
    type: Function,
    required: true,
  },
  isExpanded: {
    type: Function,
    required: true,
  },
  toggleExpand: {
    type: Function,
    required: true,
  },
  
});





  import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI, URI_MESSAGES } from '../../../service/conection'
  import { useChatStore } from '@/store/chat'
import { onBeforeRouteLeave } from 'vue-router'
  const controller = ref<AbortController|null>(null)

  const message_acctions = ref(true)
  const chats = useChatStore()
  defineEmits(['down'])

  function handlePaste (e) {
  const items = Array.from(e.clipboardData?.items || [])

  items.forEach(item => {
    // Acepta cualquier DataTransferItem que sea archivo
    if (item.kind === 'file') {
      const file = item.getAsFile()
      if (!file) return

      droppedFiles.value.push({
        file,
        name: file.name || `pasted-${Date.now()}.${file.type.split('/')[1] || 'bin'}`,
        type: file.type,
        caption: '',
        // Para imágenes, PDF o audio podemos mostrar una vista previa;
        // para otros tipos queda vacío pero igual servirá para el envío.
        preview: URL.createObjectURL(file)
      })

      showFilesDialog.value = true
    }
  })
}



onMounted(() => window.addEventListener('paste', handlePaste))
onUnmounted(() => window.removeEventListener('paste', handlePaste))
onMounted(() => {
  window.addEventListener('paste', handlePaste);
});

onUnmounted(() => {
  window.removeEventListener('paste', handlePaste);
  // ...tu cleanup existente
});

// --- NUEVAS refs para DnD y diálogo ---
const isDragging = ref(false);
const droppedFiles = ref([]); // { file, name, type, preview, caption }
const showFilesDialog = ref(false);



const whatchingImg = ref(false)
const currentimg = ref('')
const setWatchingImg = (img) => {
  whatchingImg.value = true
  currentimg.value = `${img}`
}

// Genera la URL de previsualización para cualquier tipo compatible
function createPreview (file) {
  try {
    return URL.createObjectURL(file)
  } catch {
    return ''
  }
}

function removeFile (idx) {
  const removed = droppedFiles.value.splice(idx, 1)
  if (removed.length && removed[0].preview) URL.revokeObjectURL(removed[0].preview)
}


function removeAllfiles () {
  alert('removeAllfiles')
  droppedFiles.value.forEach(f => f.preview && URL.revokeObjectURL(f.preview))
  droppedFiles.value = []
}

function handleDragLeave (e) {
  if (e.currentTarget === e.target) isDragging.value = false
}

function fileUrl (msgData: any) {
  return `${URI_MESSAGES}/files/${msgData.file_type}s/${msgData.file_id}?size=thumbnail`
}

function fileUrlVisual (msgData: any) {
  return `${URI_MESSAGES}/files/${msgData.file_type}s/${msgData.file_id}?size=visual`
}

function clearAllPreviews () {
  droppedFiles.value.forEach(f => f.preview && URL.revokeObjectURL(f.preview))
  droppedFiles.value = []
}

function cancelFiles () {
  clearAllPreviews()
  showFilesDialog.value = false
}


// Asegúrate de limpiar si el usuario cierra el diálogo con la X o cambia de ruta
watch(showFilesDialog, visible => {
  if (!visible) clearAllPreviews()
})

onUnmounted(() => {
  clearAllPreviews()
})

  
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



const send_context = (msg) => {

  props.send_text(msg,markedMessages.value.wa_id)
  message_acctions.value = false
}


const handleDrop = (e) => {
  e.preventDefault();
  isDragging.value = false;

  const files = Array.from(e.dataTransfer.files || []);
  files.forEach((f) => {
    const obj = {
      file: f,
      name: f.name,
      type: f.type,
      caption: '',
      preview: '',
    };
    if (f.type.startsWith('image/')) {
      obj.preview = URL.createObjectURL(f);
    }
    droppedFiles.value.push(obj);
  });

  if (droppedFiles.value.length) showFilesDialog.value = true;
};

const sendFiles = () => {
  // TODO: implementa la subida real
// `  console.log('Enviar', props.send_function, droppedFiles.value);
//   // Vacía y cierra
//   droppedFiles.value.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
//   droppedFiles.value = [];
//   showFilesDialog.value = false;`
  const data = [...droppedFiles.value]
  showFilesDialog.value = false
  droppedFiles.value.forEach((f) => f.preview && URL.revokeObjectURL(f.preview))
  droppedFiles.value = []

  props.send_function(data)

// cerramos el dialogo y limpiamos los archivos

  // Envío de archivos (aquí puedes implementar la lógica de envío real)
  // console.log('Archivos a enviar:', getAllFiles())
  // props.send_function(getAllFiles())
};


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
  const responseText = ref('')
  // Variables para paginación
  const paginationOffset = ref(0)
  const paginationLimit = ref(10)
  const loadingMore = ref(false)
  const noMoreMessages = ref(false)
  // Variable para indicar si han llegado nuevos mensajes (para el botón)
  const newMessagesArrived = ref(false)
  // Objeto reactivo para almacenar el estado de expansión de cada mensaje
  const expandedMessages = ref({})
  const markedMessages = ref({
                "message_data": {
                    "id": 3445,
                    "user_id": 10,
                    "restaurant_id": 7,
                    "content": "Esa del video q bale",
                    "created_at": "2025-05-03T00:55:43.750083+00:00",
                    "current_status_id": 1,
                    "employer_id": 1082,
                    "employer_name": "ANDRES FELIPE ARrECHEA",
                    "wa_id": "wamid.HBgMNTczMjI2ODkyOTg4FQIAERgSMTMzOEU4Rjc1N0Y3QzVCRUQ3AA==",
                    "wa_timestamp": "1746233743",
                    "context_message_id": null,
                    "local_dt": "2025-05-02T19:55:43",
                    "file_type": null,
                    "file_id": null
                },
                "time": "07:55 PM",
                "date": "02/05/2025",
                "day_label": "hoy",
                "contest": null
            })
  const last_message = ref({})


  const setMarkedMessage = (msg) => {
      message_acctions.value = true
      markedMessages.value = msg
  }                                 
  
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

  const enhanceImageMessage = (msg: any) => {
  if (msg.message_data.file_type !== 'image') return;

  // 1️⃣ URLs
  const base = `${URI_MESSAGES}/files/images/${msg.message_data.file_id}`;
  msg.thumbnail = `${base}?size=thumbnail`;
  msg.full      = `${base}?size=visual`;

  // 2️⃣ arrancamos mostrando la miniatura
  msg.currentSrc = msg.thumbnail;

  // 3️⃣ precargamos la versión visual y la sustituimos al terminar
  const preload = new Image();
  preload.src = msg.full;
  preload.onload = () => { msg.currentSrc = msg.full };
};


  // Función de actualización de mensajes (carga y actualización)
  const update = async (cargar = true) => {
   
      // Carga manual: reinicia paginación y conversación
      controller.value?.abort()
      controller.value = new AbortController()

      paginationOffset.value = 0
      noMoreMessages.value = false
      if (!route.params.user_id || !route.params.restaurant_id) return
      const result = await fetchService.get(
        `${URI_MESSAGES}/conversation/${route.params.restaurant_id}/${route.params.user_id}/${paginationOffset.value}/${20}`,
        cargar,
        { signal: controller.value.signal }

      )
  

      result?.[0]?.messages.forEach(enhanceImageMessage);
      
      messages.value = result?.[0]?.messages || []
      user.value = result?.[0]?.user || {}

      await nextTick()
  
      if (first.value) {
        scrollToBottomNoSmooth()
        first.value = false
      }

    // } else {
    //   // Actualización automática: obtiene mensajes nuevos
    //   const lastMessage = messages.value.length > 0
    //     ? messages.value[messages.value.length - 1].message_data.id
    //     : 0
  
    //   const result = await fetchService.get(
    //     `${URI_MESSAGES}/conversation/${route.params.user_id}/new?lastMessageId=${lastMessage}`,
    //     cargar
    //   )
  
    //   const nuevos = result?.[0]?.messages || []
    //   const mensajesNuevos = nuevos.filter(
    //     newMsg =>
    //       !messages.value.some(
    //         msg => msg.message_data.id === newMsg.message_data.id
    //       )
    //   )
    //   messages.value = [...messages.value, ...mensajesNuevos]
    //   showNewMessagesButton.value = true
    //   newMessagesArrived.value = true
    //   user.value = result?.[0]?.user || {}

      await nextTick()
    
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

    mensajesNuevos.forEach(enhanceImageMessage);

    messages.value = [...messages.value, ...mensajesNuevos]
    await nextTick()


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
        props.change_expiration(false)

      }

      if (event.data === `actualizar-todo`) {
        update(false)
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

// Cuando el componente se desmonte, abortamos la petición si quedó colgada
onUnmounted(() => {
  controller.value?.abort()
})

// Justo antes de navegar fuera de esta ruta, abortamos la petición
onBeforeRouteLeave((to, from, next) => {
  controller.value?.abort()
  next()
})

// Si quieres reiniciar la petición cada vez que cambian los params:
watch(
  () => route.params,
  () => {
    update()
  }
)


  const getAllFiles = () => {
    return droppedFiles.value.map((file) => file.file)
  }
  defineExpose({
  scrollToBottom,
  scrollToBottomNoSmooth,
  getAllFiles
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


.img-fluid{
  transition: all ease .3s;
}
.img-fluid:hover {
  filter: brightness(1.2);
  transform: scale(1.05);
}

.message {
  transition: all ease .3s;
}

.options {
  position: absolute;
  right: 0;
  top: 0;
  background-color:rgba(10, 56, 68, 0);
  padding: .5rem;
  border-radius:  0 .5rem 0 .5rem;
  z-index: 99;
  opacity: 0;
  transition: all ease .3s;
}
.message:hover  .options {
  opacity: 1;
}

</style>