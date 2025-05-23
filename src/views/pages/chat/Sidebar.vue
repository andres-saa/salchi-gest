<template>
  <div class="sidebar-container" style="position:relative">
    <div class="header">

      


      <div class="notifications"   :style="view_norifications? {height:'calc(100vh - 8rem)',top:'4rem',boxShadow: '0 1rem 1rem #00000040'} : {height:0,overflow:'hidden',top:'-2rem'}"  style="width: 100%;max-width: 90%; background-color: #ffffff90;max-height: 90vh;overflow: auto;position: absolute;z-index: 9;transition: all linear .2s;border-radius: .5rem; right: 0;;backdrop-filter:blur(5px);display: flex;flex-direction: column;">


        <h4 class="my-3 px-3" :style="chatTheme.current_chat_theme.text"> <strong>
Notificaciones
        </strong> </h4>
        <RouterLink
          :active-class="chatTheme.current_chat_theme.name === 'dark' ? 'active' : 'active-light'"
          v-for="(chat, index) in chats?.notifications?.[current_restaurant.id]"
          :key="index"
          :to="`/chat/chats/messages/${current_restaurant.id}/${chat.user_info.wa_id}/${(
                (chat.user_info.nombre || '')
                  .normalize('NFD')                 // separa acentos
                  .replace(/[\u0300-\u036f]/g, '')  // elimina marcas diacríticas
                  .replace(/[^A-Za-z0-9_-]/g, '')   // descarta lo que no sea letra/número/-/_
              ) || 'n'}/${chat.user_info.color}?expirado=${chat.user_info.expirado}&expira-en=${chat.user_info.tiempo_para_expirar}`"
        >

        <!-- …tu card de chat intacta… -->
        <div  class="chat2" @click="()  => setUserMark_notificacion(chat)" :style="chat.resolved?  'background-color: #fff' : 'background-color: #b6f8ff59' ">
          
          <!-- imagen + iniciales -->
          <div class="avatar" style="grid-area: imagen;height:100%;width:100%;display:flex;align-items:center;">
            <div style="height:3rem; width:3rem; aspect-ratio:1/1; border-radius:50%; display:flex; align-items:center; justify-content:center; text-transform:uppercase;font-size:1.3rem;"
                 :style="`background-color:${chat.user_info.color || 'black'}`">
              {{ getInitials(chat.user_info.nombre) }}
            </div>
          </div>
          <!-- nombre -->
          <div style="grid-area:nombre; "  :style="`${ chatTheme.current_chat_theme.text} ; ${!chat.resolved? 'font-weight: bold;' : ''}`">{{ chat.description }}</div>

          

          <!-- mensaje y fecha -->
          <span style="grid-area:mensaje; color:#ffffff80;opacity: .5;" :style="chatTheme.current_chat_theme.text">{{ chat.user_info.nombre.slice(0,20) }}... </span>
          <p class="p-0 m-0" style="grid-area:fecha; text-align:end;min-width: max-content; " :style="chatTheme.current_chat_theme.text"> {{ chat.user_info.hora_ultimo_mensaje }}</p>

          <!-- badge mensajes sin leer -->
          <!-- <div style="grid-area:check; display:flex; justify-content:end; gap:.5rem;" >
            <div v-if="chat.user_info.unreaded > 0"
                 style="height:1.5rem;width:1.5rem;border-radius:50%;background-color:rgb(156,39,176);display:flex;align-items:center;justify-content:center;font-weight:bold;" >
              <span style="color:white;" >{{ chat.user_info.unreaded }}</span>
            </div>
            <i style="color:greenyellow;" class="fa-solid fa-check-double"></i>
          </div> -->
        </div>
      </RouterLink>
        
      </div>


<Dialog :closable="false" header="Buscar un usuario"  v-model:visible="view_search" style="width: 50rem; " modal="">

  <template #header >
  
    <div style="display: flex;flex-direction: column;width: 100%;">
    <h3> <b> Buscar un usuario</b></h3>

    <InputText v-model="search_text" style="width: 100%;" placeholder="Escriba el nombre o numero del usuario"></InputText>
    </div>

  </template>

   <div class="" style="height: 67vh;" :class="animable? 'chats active-new' : 'chats'"  ref="chatsContainer" @scroll="handleScroll">
<RouterLink 
  :active-class="chatTheme.current_chat_theme.name == 'dark' ? 'active' : 'active-light'"
  v-for="(chat, index) in chats.sidebars[current_restaurant.id]?.filter((u) => {
    const search = search_text?.toLowerCase()?.trim() || '';
    if (search === '') return false;
    const nombre = u.nombre?.toLowerCase() || '';
    const waId = u.wa_id?.toLowerCase() || '';
    return nombre.includes(search) || waId.includes(search);
  }) || []"
  :key="index"
  :to="`/chat/chats/messages/${current_restaurant.id}/${chat.wa_id}/${chat.nombre}/${chat.color}?expirado=${chat.expirado}&?expira-en?=${chat.tiempo_para_expirar}`"
>
        <!-- …tu card de chat intacta… -->
        <div  class="chat" @click="()  => setUserMark(chat)">
          
          <!-- imagen + iniciales -->
          <div class="avatar" style="grid-area: imagen;height:100%;width:100%;display:flex;align-items:center;">
            <div style="height:3rem; width:3rem; aspect-ratio:1/1; border-radius:50%; display:flex; align-items:center; justify-content:center; text-transform:uppercase;font-size:1.3rem;"
                 :style="`background-color:${chat.color || 'black'}`">
              {{ getInitials(chat.nombre) }}
            </div>
          </div>

          
          <!-- nombre -->
          <div style="grid-area:nombre; text-transform:capitalize;font-weight: 500;" :style="chatTheme.current_chat_theme.text">{{ chat.nombre }}</div>
          <div style="grid-area:numero; text-transform:capitalize;opacity: .7;" :style="chatTheme.current_chat_theme.text">+{{ chat.wa_id }}</div>

          <!-- expiración -->
          <!-- <div v-if="chat.tiempo_para_expirar || !chat.expirado"
               style="grid-area:expiration; text-align:end; text-transform:capitalize;opacity: .5 ;" :style="chatTheme.current_chat_theme.text">
            Expira en {{ chat.tiempo_para_expirar }}
          </div>
          <div v-else
               style="grid-area:expiration; text-align:end; text-transform:capitalize;opacity: .5 ; " :style="chatTheme.current_chat_theme.text">
            Expirado
          </div> -->

          <!-- mensaje y fecha -->
          <span style="grid-area:mensaje; color:#ffffff80;opacity: .5;" :style="chatTheme.current_chat_theme.text">{{ chat.mensaje_truncado }}</span>
          <span style="grid-area:fecha; text-align:end; " :style="chatTheme.current_chat_theme.text"> {{ chat.abreviatura || chat.fecha_ultimo_mensaje }}</span>

          <span style="grid-area:hora; color:#ffffff80;opacity: .5;text-align: end;" :style="chatTheme.current_chat_theme.text">{{ chat.hora_ultimo_mensaje }}</span>
          <!-- badge mensajes sin leer -->
          <div style="grid-area:check; display:flex; justify-content:end; gap:.5rem;" >
            <div v-if="chat.unreaded > 0"
                 style="height:1.5rem;width:1.5rem;border-radius:50%;background-color:rgb(156,39,176);display:flex;align-items:center;justify-content:center;font-weight:bold;" >
              <span style="color:white;" >{{ chat.unreaded }}</span>
            </div>
            <i style="color:greenyellow;" class="fa-solid fa-check-double"></i>
          </div>
        </div>
      </RouterLink>

      <!-- loader / fin de lista -->

      <div v-if="loadingMore" :style="`bottom:0;padding-bottom:1rem; background:linear-gradient(to bottom , transparent 3%, ${chatTheme.current_chat_theme.gradient});display:flex; position: absolute; z-index: 100;width:100%; color: white`"><ProgressSpinner
      v-if="true"
      style="width: 50px; height: 50px; "
      strokeWidth="8"
      fill="transparent"
      animationDuration=".3s"
      aria-label="Custom ProgressSpinner"
    /> </div>
      
      <div v-if="finished" style="text-align:center; padding:.5rem; color:#ffffff80;">No hay más chats.</div>
    </div>

    <Button rounded=""  @click="view_search=false" icon="pi pi-times  text-xl" style="position: absolute;top: -1rem;right: -1rem;" severity="danger" ></Button>
</Dialog>
      































      <!-- ▼▼▼  TU DROPDOWN ORIGINAL  ▼▼▼ -->
      <Dropdown
        v-model="current_restaurant"
        :options="restaurants"
        optionLabel="name"
        style="background-color: #ffffff20;;outline: none;box-shadow: none;"
        :style="chatTheme.current_chat_theme.border"
      >
        <template #option="slotProps">
          <div class="flex align-items-center">
            <img :src="slotProps.option.img" alt="Logo"
                 style="width: 24px; height: 24px; margin-right: 8px;object-fit: contain;" />
            <span><b>{{ slotProps.option.name }}</b></span>
          </div>
        </template>
        <template #value="slotProps">
          <div class="flex align-items-center">
            <img v-if="slotProps.value" :src="slotProps.value.img" alt="Logo"
                 style="width: 24px; height: 24px; margin-right: 8px;object-fit: contain;" />
            <span :style="chatTheme.current_chat_theme.text">
              {{ slotProps.value ? slotProps.value.name : 'Selecciona' }}
            </span>
          </div>
        </template>
      </Dropdown>

      <div style="display: flex;gap: 1rem;">
        <Button class="options" text>
          <i class="pi pi-search text-2xl " @click="view_search=true
          " :style="chatTheme.current_chat_theme.text"></i>
        </Button>

          <div class="notifications" style="position: relative;cursor: pointer;" @click="view_norifications = !view_norifications">
          <Button class="options" text style="opacity: .5;">
            <i class="pi pi-bell text-2xl notifications "   :style="chatTheme.current_chat_theme.text"></i>
          </Button>
          
          <div  :class="ping?  'load' : ''"  style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background-color: rgb(156,39,176); position: absolute; top: -1rem; right: -.7rem; display: flex; align-items: center; justify-content: center; font-weight: bold;padding: .8rem;">
            <span style="color: white;">{{ chats?.notifications?.[current_restaurant.id]?.length || 0 }}</span>
          </div>  
        </div>

           <Button class="options" text>
          <i class="pi pi-bars text-2xl " :style="chatTheme.current_chat_theme.text"></i>
        </Button>


      
      </div>
    </div>

    <!-- <div class="busqueda">
      <IconField  :style="chatTheme.current_chat_theme.border">
        <InputText :style="chatTheme.current_chat_theme.border" style="color:white;" class="search" placeholder="Buscar..." />
      </IconField>
    </div> -->

    <div class="statuses">




      <Button
        style=" border-radius: .3rem; padding: 0.3rem;text-transform: capitalize;"
        text
     
        v-for="(button, index) in colorMap"
        :icon="button.icon"
        :key="index"
        @click="() => setCurrent(button)"
        class="status"
        :label="button.label.toLowerCase()"
        :style="button.label === current.label ? { backgroundColor: button.bg, color: '#fff' }
                                   : { backgroundColor: '#ffffff20', color: button.bg }"
      />
    </div>

    <!-- ▲▲▲  LISTA DE CHATS  ▲▲▲ -->
    <div class="" :class="animable? 'chats active-new' : 'chats'"  ref="chatsContainer" @scroll="handleScroll">
      <RouterLink 
        
        :active-class=" chatTheme.current_chat_theme.name == 'dark'?  'active' : 'active-light'"
        v-for="(chat, index) in (
        chats.sidebars[current_restaurant.id]?.filter(ch => {
          // 1) Mostrar todos los chats
          if (current.label === 'TODO') return true

          // 2) Filtros especiales
          if (current.label === 'SIN LEER') return ch.unreaded > 0        // tiene mensajes sin leer
          if (current.label === 'LEIDOS')   return ch.unreaded == 0      // todo leído

          // 3) Filtro por clasificación normal
          return ch.clasification === current.label
        }).slice(0,100) || []
      )"
        :key="index"
        :to="`/chat/chats/messages/${current_restaurant.id}/${chat.wa_id}/${chat.nombre}/${chat.color}?expirado=${chat.expirado}&?expira-en?=${chat.tiempo_para_expirar}`"
      >
        <!-- …tu card de chat intacta… -->
        <div  class="chat" @click="()  => setUserMark(chat)">
          
          <!-- imagen + iniciales -->
          <div class="avatar" style="grid-area: imagen;height:100%;width:100%;display:flex;align-items:center;">
            <div style="height:3rem; width:3rem; aspect-ratio:1/1; border-radius:50%; display:flex; align-items:center; justify-content:center; text-transform:uppercase;font-size:1.3rem;"
                 :style="`background-color:${chat.color || 'black'}`">
              {{ getInitials(chat.nombre) }}
            </div>
          </div>

          
          <!-- nombre -->
          <div style="grid-area:nombre; text-transform:capitalize;font-weight: 500;" :style="chatTheme.current_chat_theme.text">{{ chat.nombre }}</div>
          <div style="grid-area:numero; text-transform:capitalize;opacity: .7;" :style="chatTheme.current_chat_theme.text">+{{ chat.wa_id }}</div>

          <!-- expiración -->
          <!-- <div v-if="chat.tiempo_para_expirar || !chat.expirado"
               style="grid-area:expiration; text-align:end; text-transform:capitalize;opacity: .5 ;" :style="chatTheme.current_chat_theme.text">
            Expira en {{ chat.tiempo_para_expirar }}
          </div>
          <div v-else
               style="grid-area:expiration; text-align:end; text-transform:capitalize;opacity: .5 ; " :style="chatTheme.current_chat_theme.text">
            Expirado
          </div> -->

          <!-- mensaje y fecha -->
          <span style="grid-area:mensaje; color:#ffffff80;opacity: .5;" :style="chatTheme.current_chat_theme.text">{{ chat.mensaje_truncado }}</span>
          <span style="grid-area:fecha; text-align:end; " :style="chatTheme.current_chat_theme.text"> {{ chat.abreviatura || chat.fecha_ultimo_mensaje }}</span>
      <span style="grid-area:hora; color:#ffffff80;opacity: .5;text-align: end;" :style="chatTheme.current_chat_theme.text">{{ chat.hora_ultimo_mensaje }}</span>
          <!-- badge mensajes sin leer -->
          <div style="grid-area:check; display:flex; justify-content:end; gap:.5rem;" >
            <div v-if="chat.unreaded > 0"
                 style="height:1.5rem;width:1.5rem;border-radius:50%;background-color:rgb(156,39,176);display:flex;align-items:center;justify-content:center;font-weight:bold;" >
              <span style="color:white;" >{{ chat.unreaded }}</span>
            </div>
            <i style="color:greenyellow;" class="fa-solid fa-check-double"></i>
          </div>
        </div>
      </RouterLink>

      <!-- loader / fin de lista -->

      <div v-if="loadingMore" :style="`bottom:0;padding-bottom:1rem; background:linear-gradient(to bottom , transparent 3%, ${chatTheme.current_chat_theme.gradient});display:flex; position: absolute; z-index: 100;width:100%; color: white`"><ProgressSpinner
      v-if="true"
      style="width: 50px; height: 50px; "
      strokeWidth="8"
      fill="transparent"
      animationDuration=".3s"
      aria-label="Custom ProgressSpinner"
    /> </div>
      
      <div v-if="finished" style="text-align:center; padding:.5rem; color:#ffffff80;">No hay más chats.</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { URI_MESSAGES } from '@/service/conection.js'
import { fetchService } from '@/service/utils/fetchService.js'
import { useChatStore } from '@/store/chat'
import {chatThemeStore} from '@/store/chatTheme'
import { URI } from '../../../service/conection'

const view_norifications = ref(false)
const view_search = ref(false)
const search_text = ref('')

const ping = ref(false)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  // Verifica si el clic ocurrió dentro de un elemento con clase 'emoji-picker'
  if (!target.closest('.notifications')) {
    view_norifications.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})








const chatTheme  = chatThemeStore()



/* ░░░  PROPS  ░░░ */
const props = defineProps({ restaurant: Object })

/* ░░░  STATE STORES  ░░░ */
const chats = useChatStore()

/* ░░░  CONFIG  ░░░ */
const restaurants = [
  { id: 1, name: 'Salchimonster', img: 'https://backend.salchimonster.com/read-photo-product/xai0dVnL' },
  { id: 7, name: 'Distrimoster',  img: 'https://backend.salchimonster.com/read-photo-product/iX6UiE6e' }
]
const current_restaurant = ref(props.restaurant || restaurants[0])

const buttons = ref([
  { label: 'Todos',        textColor: '#4CAF50' },
  { label: 'Sin leer',     textColor: '#2196F3' },
  { label: 'Favoritos',    textColor: '#FFC107' },
  { label: 'Preocupantes', textColor: '#F44336' },
  { label: 'Top',          textColor: '#9C27B0' }
])



const setUserMark = async (user) => {
  chats.current_user = user
  view_search.value = false
  view_norifications.value = false
  try {
    await fetchService.post(`${URI_MESSAGES}/read-message/${user.user_id}/${current_restaurant.value.id}`,false)
  } catch (err) {
    console.error('No se pudo marcar como leído', err)
  }

  user.unreaded = 0
}


const setUserMark_notificacion = async (user) => {
  chats.current_user = user.user_info
  view_norifications.value = false
  try {
    await fetchService.post(`${URI_MESSAGES}/read-message/${user.user_info.user_id}/${current_restaurant.value.id}`,false)
    await fetchService.post(`${URI_MESSAGES}/view_notification/${user.id}`,false)
    chats.notifications[current_restaurant.value.id] = await fetchService.get(`${URI_MESSAGES}/notifications/${current_restaurant.value.id}`)
    const idx  =  chats.sidebars[current_restaurant.value.id]?.findIndex(u => u.user_id == user.user_info.user_id)
    
    console.log(idx)
    if (idx !== -1) {
      chats.sidebars[current_restaurant.value.id][idx].unreaded = 0
    }
  } catch (err) {
    console.error('No se pudo marcar como leído', err)
  }


 
}


const colorMap = [
  { label: 'SIN LEER',    bg: '#f39c12', icon: 'fa-solid fa-envelope-open' },
  { label: 'LEIDOS',      bg: '#16a085', icon: 'fa-solid fa-envelope-circle-check' },
  { label: 'TODO',        bg: '#34495e', icon: 'fa-solid fa-inbox' },
  { label: 'SIN DATOS',   bg: '#95a5a6', icon: 'fa-solid fa-circle-question' },
  { label: 'PREOCUPANTE', bg: '#e74c3c', icon: 'fa-solid fa-triangle-exclamation' },
  { label: 'CASUAL',      bg: '#e67e22', icon: 'fa-solid fa-person-walking' },
  { label: 'FRECUENTE',   bg: '#27ae60', icon: 'fa-solid fa-repeat' },
  { label: 'TOP',         bg: '#2980b9', icon: 'fa-solid fa-ranking-star' },
  { label: 'ESTRELLA',    bg: '#8e44ad', icon: 'fa-solid fa-star' }
];

const current = ref( { label: 'SIN LEER',    bg: '#f39c12', icon: 'fa-solid fa-envelope-open' })
const totalUnread  = ref(0)

/* ░░░  PAGINACIÓN  ░░░ */
const LIMIT        = 100         // tamaño de página
let   offset       = 0          // cuántas filas omitir
const loadingMore  = ref(false)
const finished     = ref(false)

const chatsContainer = ref(null)

/* ░░░  UTILIDADES  ░░░ */
const getInitials = (name='') => {
  const p = name.trim().split(' ');
  return (Array.from(p[0]||'')[0]||'') + (p[1] ? Array.from(p[1])[0] : '');
};



onMounted( async() => {

  chats.notifications[current_restaurant.value.id] = await fetchService.get(`${URI_MESSAGES}/notifications/${current_restaurant.value.id}`)
})


const toNumUnread = v => v === '9+' ? 10 : Number(v ?? 0)

const appendChats = (id, newItems) => {
  // Lista reactiva actual
  const list = chats.sidebars[id] || []

  newItems.forEach(newChat => {
    const idx = list.findIndex(c => c.wa_id === newChat.wa_id)

    if (idx === -1) {
      // ▸ Chat nuevo
      list.push(newChat)
    } else {
      const current = list[idx]

      const idChanged       = current.ultimo_mensaje_id !== newChat.ultimo_mensaje_id
      const colorchanged       = current.color !== newChat.color
      const nombrechanged       = current.nombre !== newChat.nombre
      const unreadDecreased = newChat.unreaded != current.unreaded

      // ▸ Reemplazamos si llegó un mensaje nuevo O si se redujeron los pendientes
      if (idChanged || unreadDecreased  || colorchanged || nombrechanged) {
        list[idx] = newChat
      }
      // Si no cambió nada relevante, lo dejamos como está
    }
  })

  // Actualizamos el store reactivo
  chats.sidebars[id] = list

  // Re-calcular total de no leídos del sidebar
  totalUnread.value = list.reduce(
    (sum, c) => sum + toNumUnread(c.unreaded),
    0
  )
}







/* ░░░  CARGAR UNA PÁGINA  ░░░ */
const loadPage = async () => {
  if (loadingMore.value || finished.value) return
  loadingMore.value = true

  const url = `${URI_MESSAGES}/last-contact-messages/` +
              `${current_restaurant.value.id}` +
              `?limit=${LIMIT}&offset=${offset}`

  const data = await fetchService.get(url, false)

  /* marcar fin si llegaron menos filas que el límite */
  if (data.length < LIMIT) finished.value = true

  /* siguiente desplazamiento para la próxima página */
  offset += data.length
  appendChats(current_restaurant.value.id, data)

  loadingMore.value = false
}

/* ░░░  INFINITE SCROLL  ░░░ */
const handleScroll = () => {
  const el = chatsContainer.value
  if (!el || loadingMore.value || finished.value) return

  const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 120
  if (nearBottom) loadPage()
}

/* ░░░  NUEVOS MENSAJES VÍA SOCKET ░░░ */
const mergeOrPrepend = (newPage) => {
  const list = chats.sidebars[current_restaurant.value.id] || []
  const ids  = new Set(list.map(c => c.wa_id))

  const merged = [...newPage.filter(c => !ids.has(c.wa_id)), ...list]
  chats.sidebars[current_restaurant.value.id] = merged


  totalUnread.value = merged.reduce(
    (t, c) => t + Number(c.unreaded || 0),
    0
  )
}

const refreshTop = (fresh) => {
  const id  = current_restaurant.value.id
  const old = chats.sidebars[id] || []

  // Parte que ya teníamos después de la nueva cabecera
  const tail = old.slice(fresh.length)

  // Nueva lista = cabecera fresca + cola anterior
  chats.sidebars[id] = [...fresh, ...tail]

  // Recalcular total de no leídos
  totalUnread.value = chats.sidebars[id]
    .reduce((t, c) => t + Number(c.unreaded || 0), 0)
}


const addUser = (user) => {
  const id   = current_restaurant.value.id
  const list = chats.sidebars[id] || []

  // ¿Ya está en la lista?
  const idx = list.findIndex(c => c.wa_id === user.wa_id)

  if (idx !== -1) {
    // 1️⃣ Elimina la versión antigua…
    list.splice(idx, 1)
    // 2️⃣ …y prepende la nueva
    chats.sidebars[id] = [user, ...list]
  } else {
    // Usuario nuevo → simplemente prepéndelo
    chats.sidebars[id] = [user, ...list]
  }

  // Recalcular total de mensajes sin leer
  totalUnread.value = chats.sidebars[id]
    .reduce((t, c) => t + Number(c.unreaded || 0), 0)
}



let socket = null
const connectWebSocket = () => {
  const wsUrl = `wss://sockets-service.salchimonster.com/ws/salchimonster-${current_restaurant.value.id}`
  socket      = new WebSocket(wsUrl)

  socket.onopen  = () => console.log('WebSocket conectado a', wsUrl)
  socket.onerror = err => console.error('WebSocket error', err)
  socket.onclose = () => setTimeout(connectWebSocket, 5000)

  socket.onmessage = async (event) => {
    const data = JSON.parse(event.data)
    if (data?.user_id) {
      addUser(data)

    }
  }
}


let socket__notifications = null
const connectWebSocketNNotifications = () => {
  const wsUrl = `wss://sockets-service.salchimonster.com/ws/salchimonster-notifications-${current_restaurant.value.id}`
  socket__notifications  = new WebSocket(wsUrl)

  socket__notifications.onopen  = () => console.log('WebSocket conectado a', wsUrl)
  socket__notifications.onerror = err => console.error('WebSocket error', err)
  socket__notifications.onclose = () => setTimeout(connectWebSocketNNotifications, 5000)
  
  socket__notifications.onmessage = async (event) => {
     chats.notifications[current_restaurant.value.id] = await fetchService.get(`${URI_MESSAGES}/notifications/${current_restaurant.value.id}`)
      ping.value = true
        setTimeout(() => {
          ping.value = false
        }, 1000);


        const data = JSON.parse( event.data)
        
        // notificacion
        // : 
        // "Pedido Cancelado"

        // notificacion
        // : 
        // "Cliente solicita un asesor"
                
          }

}





/* ░░░  REACCIONAR AL CAMBIO DE SEDE  ░░░ */
watch(current_restaurant, async (val) => {
  /* reiniciar paginación */
  offset        = 0
  finished.value = false
  chats.sidebars[val.id] = []

  /* reiniciar socket */
  if (socket) socket.close()
  connectWebSocket()
  connectWebSocketNNotifications()  

  await loadPage()
  animable.value = false
  setTimeout(() => {
    animable.value = true
  },0);
})

/* ░░░  CICLO DE VIDA  ░░░ */
onMounted(async () => {
  await loadPage()
  chatsContainer.value?.addEventListener('scroll', handleScroll)
  connectWebSocket()
  connectWebSocketNNotifications()
})

onUnmounted(() => {
  chatsContainer.value?.removeEventListener('scroll', handleScroll)
  if (socket) socket.close()
})

const animable = ref(true)

const setCurrent = (btn) => {
  current.value = btn
  animable.value = false
  setTimeout(() => {
    animable.value = true
  },0);
}
// watch(current, () => {
//   

// })
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
  gap: 0.5rem;
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
  gap: .5rem;
}

.chat {
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-areas: 
    "imagen nombre fecha"
    "imagen numero hora"
    "imagen mensaje check"
    "imagen  hr hr"
;
  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: repeat(min-content);
  color: white;
  gap:0 1rem;
  cursor: pointer;
  padding: 0.3rem 1rem;
  transition: all ease 0.3s;
}


.chat2 {
    display: grid;
  width: 100%;
  align-items: center;
  grid-template-areas: 
    "imagen nombre nombre"
    "imagen mensaje fecha"

    "expiration  expiration expiration";
  grid-template-columns: 1fr 5fr 2fr;
  grid-template-rows: 1fr 2fr;
  color: white;
  gap:0 1rem;
  cursor: pointer;
  padding: 0.3rem 1rem;
  transition: all ease 0.3s;
  border-bottom: 2px solid rgba(0, 0, 0, 0.179);
}


.avatar{
  transition: .2s ease all;
}
.chat:hover {
  background-color: rgba(221, 0, 255, 0.051);
  box-shadow: 0 0 0rem rgb(179, 0, 255);
}

.chat:hover .avatar {
  /* background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 0rem black; */
  transform: scale(1.2);
  filter: brightness(1.4);
  
}

.active {
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 0rem black;
}

.active-light {
  background-color: rgb(217, 253, 211);
  box-shadow: 0 0 0rem black;
}

::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #94949423;
  }
  ::-webkit-scrollbar-thumb {
    background: #bf00ff53;
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
  position: relative;
  min-width: max-content;
  justify-content: space-between;
  padding:  .5rem  1rem;
  box-shadow: 0 1rem 1rem #00000010;
}



.active-new{
  animation: .8s active ease;
}
    
@keyframes active {
    0%{
        opacity: 0;
        transform: translateY(-3rem);
      
    }

    
}


.statuses {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap:  .5rem;
  padding: -0rem 1rem;
  box-shadow: 0 1rem 1rem #00000010;
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

  color: white;
}

hr {
  height: 0;
}

*:focus {
  box-shadow: none !important;
  outline: none !important;
}



.load{
  animation: .3s load linear;

	}


@keyframes load {
	 0% {
		 background: #fff;
		 border: 0px solid #ffffff4d;
     		 outline: 0px solid #fff;

	}
	 50% {
		 background: #fff;
		 border: 10px solid #8a00ad;
      outline: 20px  solid  #9945ff53;
	}
	 100% {
		 background: #fff;
		 border: 0px solid #22222252;
     		 outline: 0px solid #222;
	}
}
 




</style>
