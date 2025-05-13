<template>


<Dialog v-model:visible="message_acctions" :close="() =>  close " header="Acciones del mensaje" :modal="true" :style="{ width: '90vw', maxWidth: ' 50rem' }" :closable="true" :dismissableMask="false" style="background-color:rgb(0, 1, 22);display: flex;">

  <div
            :style="markedMessages.message_data.employer_id
                  ? `${chatTheme.current_chat_theme.m_employer};border-radius:.5rem 0 .5rem .5rem;`
                    : `${chatTheme.current_chat_theme.m_user} ; border-radius:0 .5rem .5rem .5rem;`"
            style="padding:1rem 1rem 1rem 1rem;overflow-wrap:break-word;word-break:break-word;
                   max-width:100%;min-width:10rem;position:relative;display:flex;flex-direction:column;gap:.5rem;box-shadow: 0 0 1rem #ccc;"
          >


     
                    
          <!-- <Button class="options" style="color: white;">
              <i class="pi pi-angle-down text-xl"></i>
            </Button> -->
            <!-- Adjuntos -->
            <template v-if="markedMessages.message_data.file_type">
              <template v-if="markedMessages.message_data.file_type === 'image'">
              <div> 
                <img class="img-fluid"
                :src=" get_url(markedMessages)"                   
                @click="setWatchingImg(get_url(markedMessages) )" 

       
                style="border-radius:.3rem;width:18rem;object-fit:contain;aspect-ratio: 1 / 1; cursor:pointer"
              />
              </div>
             
            </template>

              <template v-else-if="markedMessages.message_data.file_type === 'audio'">
                <audio :src="fileUrl(markedMessages.message_data)" controls style="width:100%;min-width:20rem;max-width: 100%;background-color: white; border-radius: .5rem;" />
              </template>

              <template v-else>
                <a
                  :href="fileUrl(markedMessages.message_data)"
                  target="_blank"
                  style="color:#2196f3;text-decoration:none;align-self:flex-start;display:flex;align-items:center;gap:.5rem"
                >
                  <i class="pi pi-file" /> Descargar archivo
                </a>
              </template>
            </template>

            <!-- Texto -->
            <h6 style="color:white;margin:0;font-weight:300">
              <span :style="chatTheme.current_chat_theme.text"
                v-if="!isExpanded(markedMessages.message_data.id)"
                v-html="formatContent(markedMessages.message_data.content?.substring(0,200) +
                        (markedMessages.message_data.content?.length > 200 ? '…' : ''))"
              />
              <span :style="chatTheme.current_chat_theme.text" v-else v-html="formatContent(markedMessages.message_data.content)" />
              <button
                v-if="markedMessages.message_data.content?.length > 200"
                @click="toggleExpand(message.message_data.id)"
                style="background:none;border:none;color:#2196f3;cursor:pointer;padding:0 .5rem"
              >
                Ver {{ isExpanded(markedMessages.message_data.id) ? 'menos' : 'más' }}
              </button>
            </h6>

            <!-- Hora e iconos -->
            <h6
              style="color:white;margin:0;font-weight:300;position:absolute;bottom:.5rem;right:1rem;min-width:max-content;display:flex;gap:.5rem"
            >
              <span :style="chatTheme.current_chat_theme.text" style="opacity:.5">{{ markedMessages.time }}</span>
              <i v-if="markedMessages.message_data.current_status_id == 3 && markedMessages.message_data.employer_id" class="fa-solid fa-check-double" style="color:greenyellow" />
              <i v-else-if="markedMessages.message_data.current_status_id == 2 && markedMessages.message_data.employer_id" class="fa-solid fa-check" style="color:greenyellow" />
              <i v-else-if="markedMessages.message_data.current_status_id == 1 && markedMessages.message_data.employer_id" class="fa-solid fa-check" style="color:gray" />
            </h6>
            
            <!-- Cola -->

          
            <svg
              v-if="!markedMessages.message_data.employer_id"
              style="position:absolute;left:-8px;top:0"
              viewBox="0 0 8 13" height="13" width="8"

              :style="markedMessages.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.pico_employer}`
                    : `${chatTheme.current_chat_theme.pico_user}`"
            >
              <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812C1.042,1,0.474,2.156,1.533,3.568z"/>
              <path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"/>
            </svg>
            <svg
              v-else
              style="position:absolute;right:-8px;top:0;"
              viewBox="0 0 8 13" height="13" width="8"
              :style="markedMessages.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.pico_employer}`
                    : `${chatTheme.current_chat_theme.pico_user}`"
            >
              <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625C7.526,2.156,6.958,1,5.188,1z"/>
              <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"/>
            </svg>
          </div>

  <div style="display: flex; gap: 1rem; flex-direction: column; padding:1rem  0rem;">
    <!-- <Button label="Eliminar" icon="pi pi-trash" severity="danger" @click="message_acctions = false" /> -->
    <!-- <Button label="Reenviar" icon="pi pi-paper-plane" severity="success" @click="message_acctions = false" /> -->

    <div>
      <EmojiPicker class="emoji-picker"
    v-if="showEmojiPicker"

        :native="true"
        style="position:absolute;bottom:4rem;z-index:1000;"
        @select="addEmoji"
      />


    </div>
 

  
        <Textarea v-model="responseText"  autoResize rows="4" placeholder="Escribe un mensaje…" style="width: 100%; background-color: ;" />


        <div style="display: flex;">
    <Button class="emoji-picker" text style="font-size:2rem;" @click="showEmojiPicker=!showEmojiPicker">
          <i class="fa fa-laugh-wink emoji-picker"/>
        </Button>
    <Button label="Responder" icon="pi pi-send" severity="help"   style="width: 100%;" @click="send_context(responseText)" />
    <!-- <Button label="Copiar enlace" icon="pi pi-copy" severity="warning" @click="message_acctions = false" /> -->
      </div>
 

  </div>
</Dialog>


  <div
    style="height: 100%; position: relative; display: flex; justify-content: center;"
    @dragover.prevent
    @dragenter="isDragging = true"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    :class="animable?  'container-messages' : '.container-oculto'"
  >
    <!-- Overlay de arrastre -->
    <div
      v-if="isDragging"
      style="position: absolute; inset: 0; background: #00000080; z-index: 500000; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.6rem; pointer-events: none;"
    >
      Suelte aquí
    </div>



    <ProgressSpinner
      v-if="loadingMore"
      style="width: 50px; height: 50px; position: absolute; z-index: 100; color: white"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".3s"
      aria-label="Custom ProgressSpinner"
    />

    <div style="position: relative; height: 100%; width: 100%">
      <!-- Contenedor de mensajes -->
      <div
        ref="messagesContainer"
        style="padding: 1rem; display: flex; flex-direction: column; gap: 0rem; overflow-y: auto; height: 100%; padding-bottom: 4rem;"
      >       
        <div   
        
          v-for="message in messages"
          :key="message.message_data.id"
          
         
        >


        <div class="message"  :style="message.message_data.employer_id ? 'justify-content: end;' : 'justify-content: start;'" style="width: 100%; display: flex; gap: 1rem;  padding-bottom: 1rem;">  
          

          <div
            v-if="!message.message_data.employer_id"
            :style="`background-color:${user?.color}`"
            style="height: 100%; width: 3rem; aspect-ratio: 1/1; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
          >

          
            <h5 style="margin: 0; color: white; font-weight: 400">{{ getInitials(user?.name) }}</h5>
          </div>

          <!-- Burbuja -->
          <div
            :style="message.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.m_employer};border-radius:.5rem 0 .5rem .5rem;`
                    : `${chatTheme.current_chat_theme.m_user} ; border-radius:0 .5rem .5rem .5rem;`"
            style="padding:0rem 1rem 2.5rem 1rem;overflow-wrap:break-word;word-break:break-word;
                   max-width:60%;min-width:15rem;position:relative;display:flex; flex-direction:column;gap:.5rem;"
          >


          <div>

            <Button class="options" v-if="message?.message_data?.employer_id" style="color: white;" @click="setMarkedMessage(message)">
              <i class="fa-solid fa-message text-xl p-1"></i>
            </Button>
            <Button class="options-variant" @click="copyMessage(message)" v-if="message.message_data.employer_id" style="color: white;left: -6rem  ;background-color:#2196f3;" >
              <i class="fa-solid fa-copy text-xl p-1"></i>
            </Button>

            <Button class="options-variant-template" @click="copyMessage(message)" v-if="message.message_data.employer_id" style="color: white;left: -9rem  ;background-color:orangered;" >
              <i class="fa-solid fa-send text-xl p-1"></i>
            </Button>
           
          </div>


          <div>
            <Button class="options2" v-if="!message.message_data.employer_id" style="color: white;" @click="setMarkedMessage(message)">
              <i class="fa-solid fa-message text-xl p-1"></i>
            </Button>

            <Button class="options2-variant" @click="copyMessage(message)" v-if="!message.message_data.employer_id" style="color: white;right: -6rem  ;background-color:#2196f3;" >
              <i class="fa-solid fa-copy text-xl p-1"></i>
            </Button>

            <Button class="options-variant-template2" @click="copyMessage(message)" v-if="!message.message_data.employer_id" style="color: white;right: -9rem  ;background-color:orangered;" >
              <i class="fa-solid fa-send text-xl p-1"></i>
            </Button>
          </div>

            
            





            <!-- Adjuntos -->
            <template v-if="message.message_data.file_type">
              <template v-if="message.message_data.file_type === 'image'">
              <img class="img-fluid"
                :src="get_url(message) "                   
                @click="setWatchingImg(get_url(message))"   
          
     
                style="max-width:38rem;border-radius:.3rem;width:18rem;object-fit:cover;aspect-ratio: 1 / 1 ; cursor:pointer"
              /> 
            </template>

              <template v-else-if="message.message_data.file_type === 'audio'">
                <audio :src="fileUrl(message.message_data)" controls style="width:100%;min-width:20rem;max-width: 100%;background-color: white; border-radius: .5rem;" />
              </template>

              <template v-else>
                <a
                  :href="fileUrl(message.message_data)"
                  target="_blank"
                  style="color:#2196f3;text-decoration:none;align-self:flex-start;display:flex;align-items:center;gap:.5rem"
                >
                  <i class="pi pi-file" /> Descargar archivo
                </a>
              </template>
            </template>




  <div class="message" v-if="message.contest"  :style="message.message_data.employer_id ? 'justify-content: end;' : 'justify-content: start;'" style="width: 100%; display: flex; gap: 1rem; ">
         

          <!-- Burbuja -->
          <div 
          :style="message.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.m_employer};border-radius:.5rem 0 .5rem .5rem;`
                    : `${chatTheme.current_chat_theme.m_user} ; border-radius:0 .5rem .5rem .5rem;`"
            style="padding:;overflow-wrap:break-word;word-break:break-word;
                   max-width:100%;min-width:10rem;position:relative;display:flex;opacity:.5; flex-direction:column;gap:.5rem;"
          >
                                                
         
            <!-- Adjuntos -->
            <template v-if="message.contest.message_data.file_type">
              <template v-if="message.contest.message_data.file_type === 'image'">
              <img class="img-fluid"
                :src="get_url( message.contest)"                   
                @click="setWatchingImg(get_url( message.contest))"  
              
      
                style="max-width:38rem;border-radius:.3rem;width:18rem;object-fit:cover;cursor:pointer"
              />
            </template>

              <template v-else-if="message.contest.message_data.file_type === 'audio'">
                <audio :src="fileUrl(message.contest.message_data)" controls style="width:100%;min-width:20rem;max-width: 100%;background-color: white; border-radius: .5rem;" />
              </template>

              <template v-else>
                <a
                  :href="fileUrl(message.contest.message_data)"
                  target="_blank"
                  style="color:#2196f3;text-decoration:none;align-self:flex-start;display:flex;align-items:center;gap:.5rem"
                >
                  <i class="pi pi-file" /> Descargar archivo
                </a>
              </template>
            </template>

            <!-- Texto -->
            <h6 style="color:white;margin:0;font-weight:300"  :style="chatTheme.current_chat_theme.text">
              <span 
                v-if="!isExpanded(message.message_data.id)"
                v-html="formatContent(message.contest.message_data.content?.substring(0,200) +
                        (message.contest.message_data.content?.length > 30 ? '…' : ''))"
              /> 
              <span v-else v-html="formatContent(message.contest.message_data.content)" /> 
              <button
                v-if="message.contest.message_data.content?.length > 30"
                @click="toggleExpand(message.contest.message_data.id)"
                style="background:none;border:none;color:#2196f3;cursor:pointer;padding:0 .5rem"
              >
                
              </button>
            </h6>

          </div>

        </div>




            <!-- Texto -->
            <h6 style="color:white;margin:0;font-weight:300" :style="chatTheme.current_chat_theme.text">


              
              <span  
                v-if="!isExpanded(message.message_data.id)"
                v-html="formatContent(message.message_data.content?.substring(0,200) +
                        (message.message_data.content?.length > 200 ? '…' : ''))"
              />


              


              <span v-else v-html="formatContent(message.message_data.content)" />
              
              <button
                v-if="message.message_data.content?.length > 200"
                @click="toggleExpand(message.message_data.id)"
                style="background:none;border:none;color:#2196f3;cursor:pointer;padding:0 .5rem"
              >  
                Ver {{ isExpanded(message.message_data.id) ? 'menos' : 'más' }}
              </button>
            </h6>

            <!-- Hora e iconos -->
            <h6
              style="color:white;margin:0;font-weight:300;position:absolute;bottom:.5rem;right:1rem;min-width:max-content;display:flex;gap:.5rem"
            >
              <span style="opacity:.5"  :style="chatTheme.current_chat_theme.text">{{ message.date }} - {{ message.time }}</span> 
              <i v-if="message.message_data.current_status_id == 3 && message.message_data.employer_id" class="fa-solid fa-check-double" style="color:greenyellow" />
              <i v-else-if="message.message_data.current_status_id == 2 && message.message_data.employer_id" class="fa-solid fa-check" style="color:greenyellow" />
              <i v-else-if="message.message_data.current_status_id == 1 && message.message_data.employer_id" class="fa-solid fa-check" style="color:gray" />
            </h6>
            
            <!-- Cola -->

          
            <svg
              v-if="!message.message_data.employer_id"
              style="position:absolute;left:-8px;top:0"
              viewBox="0 0 8 13" height="13" width="8"
              :style="message.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.pico_employer}`
                    : `${chatTheme.current_chat_theme.pico_user}`"
            >
              <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812C1.042,1,0.474,2.156,1.533,3.568z"/>
              <path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"/>
            </svg>
            <svg
              v-else
              style="position:absolute;right:-8px;top:0"
              viewBox="0 0 8 13" height="13" width="8"
              :style="message.message_data.employer_id
                    ? `${chatTheme.current_chat_theme.pico_employer}`
                    : `${chatTheme.current_chat_theme.pico_user}`"
            >
              <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625C7.526,2.156,6.958,1,5.188,1z"/>
              <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"/>
            </svg>
          </div>

          <!-- Avatar employer -->
          <div
            v-if="message.message_data.employer_id"
            style="height: 100%; width: 3rem; min-width: 3rem; aspect-ratio: 1/1; background-color: rgb(3 88 95 / 53%); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;"
          >
            <h5 style="margin: 0; color: white; font-weight: 400">{{ getInitials(message.message_data.employer_name) }}</h5>
          </div>
        </div>
        
          <!-- Avatar entrante -->
          
        </div>
        <div v-if="chats.sending" style="display: flex; gap: 1rem; justify-content: end;width: 100%; ">
          <div style="background-color: #0a3744;max-width: 20rem; width: 100%;border-radius: .5rem;height: 4rem;">
            <h6 style="color:white;margin:0;font-weight:300;display:flex;align-items:center;gap:.5rem;height: 100%;padding:1rem 1rem 1rem 1rem;">
              <i class="pi pi-send" style="color: white" />  <progressSpinner style="width: 1.5rem; height: 1.5rem; color: white" strokeWidth="8" fill="transparent" animationDuration=".3s" aria-label="Custom ProgressSpinner" />
            </h6>
          </div>

          <div
           
            style="height: 100%; width: 3rem; min-width: 3rem; aspect-ratio: 1/1; background-color: rgb(3 88 95 / 53%); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-transform: uppercase;padding: .5rem;"
          >
            <img style="height: 2rem; width: 2rem;aspect-ratio: 1/1;object-fit: contain;" src="https://backend.salchimonster.com/read-photo-product/xai0dVnL" alt="">
          </div>
        </div>
      </div>

      <!-- Botones de scroll -->
      <Button icon="pi pi-angle-down" v-if="showNewMessagesButton || nuevos_counter > 0" @click="scrollToBottomNoSmooth" :style="downButtonStyle" />
      <Button :label="nuevos_counter" v-if="nuevos_counter > 0" @click="scrollToBottomNoSmooth" :style="downButtonStyle2" />
    </div>

    <!-- Dialog de archivos -->
    <Dialog
      v-model:visible="showFilesDialog"
      header="Archivos a enviar"
      :modal="true"
      :style="{ width: '90vw', maxWidth: '40rem' }"
      @dragover.prevent
      @drop="handleDrop"
      :close="removeAllfiles"
      :closable="true"
      :dismissableMask="false"
      style="background-color:rgb(0, 1, 22);display: flex;"
    >
      <div v-if="droppedFiles.length === 0" style="text-align: center; opacity: 0.6;">
        Arrastra archivos aquí
      </div>
      <div v-else style="max-height: 60vh; overflow-y: auto">
        <div
          v-for="(item, idx) in droppedFiles"
          :key="idx"
          style="display: flex; align-items: center; flex-direction: column; position: relative; gap: 1rem; margin-bottom: 1rem; padding: 1rem;"
        >
          <template v-if="item.type.startsWith('image/')">
            <div style="position: relative; border-radius: .3rem;">
              <img :src="item.preview" style="width: 30rem; box-shadow: 0 0 1rem #00000090; object-fit: cover; border-radius: .3rem" />
              <Button icon="pi pi-times" severity="danger" @click="removeFile(idx)" style="position:absolute;width:1.5rem;height:1.5rem;right:0;border-radius:.3rem" />
            </div>
          </template>

          <template v-else-if="item.type.startsWith('audio/')">
            <div style="position: relative;">
              <audio :src="item.preview" controls style="width: 100%" />
              <Button icon="pi pi-times" severity="danger" @click="removeFile(idx)" style="position:absolute;width:1.5rem;height:1.5rem;right:0;border-radius:.3rem" />
            </div>
          </template>

          <template v-else>
            <div style="position: relative;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" style="width: 10rem;" />
              <Button icon="pi pi-times" severity="danger" @click="removeFile(idx)" style="position:absolute;width:1.5rem;height:1.5rem;right:0;border-radius:.3rem" />
            </div>
          </template>

          <span style="flex: 1 1 auto">{{ item.name }}</span>
          <InputText v-model="item.caption" placeholder="Texto opcional…" style="flex: 1 1 auto; width: 100%; background-color: #ffffff20;" />
        </div>
      </div>
      <template #footer>
        <div style="width: 100%; justify-content: end; display: flex;">
          <Button label="Enviar" icon="pi pi-check" severity="success" @click="sendFiles" :disabled="droppedFiles.length === 0" />
        </div>
      </template>
    </Dialog>
  </div>






























  <div v-if="whatchingImg" style="background-color: #00000080;position: fixed; width: 100vw; height: 100vh;left: 0;top: 0;z-index: 1000000;display: flex;align-items: center;justify-content: center;opacity:1" >

    <div style="max-height: 90vh;position: relative;max-width:90vw">

      <img style=" height: 90vh; max-width:100%" :src="currentimg" />

      <Button @click="() => whatchingImg = false" style="position: absolute;right: -1rem;top:-1rem;border: 3px solid black;" icon="pi pi-times" severity="danger" rounded></Button>
    </div>
  </div>


</template>


  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI, URI_MESSAGES } from '../../../service/conection'
  import { useChatStore } from '@/store/chat'
import { onBeforeRouteLeave } from 'vue-router'
import EmojiPicker from 'vue3-emoji-picker';
import { useToast } from 'primevue/usetoast'



import {chatThemeStore} from '@/store/chatTheme'
const chatTheme  = chatThemeStore()



const toast = useToast()

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  // Verifica si el clic ocurrió dentro de un elemento con clase 'emoji-picker'
  if (!target.closest('.emoji-picker')) {
    showEmojiPicker.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const copyMessage = (msg: any) => {
  const texto = msg.message_data.content ?? ''
  navigator.clipboard.writeText(texto)
    .then(() => {
      toast.add({           // ← dispara el toast
        severity: 'success',
        summary: 'Copiado',
        detail: 'El texto ha sido copiado al portapapeles',
        life: 2000
      })
    })
    .catch(err => {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo copiar el texto',
        life: 2000
      })
      console.error('Error copiando al portapapeles:', err)
    })
}


const showEmojiPicker = ref(false);
  const controller = ref<AbortController|null>(null)

  const message_acctions = ref(false)
  const chats = useChatStore()
  const emit = defineEmits(['down'])

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

const props = defineProps({
  send_function: {
    type: Function,
    default: () => {}
  },
  change_expiration: {
    type: Function,
    default: () => {}
  },
  send_text: {
    type: Function,
    default: () => {}
  },
})

onMounted(() => window.addEventListener('paste', handlePaste))
onUnmounted(() => window.removeEventListener('paste', handlePaste))
onMounted(() => {
  window.addEventListener('paste', handlePaste);
});

onUnmounted(() => {
  window.removeEventListener('paste', handlePaste);
  // ...tu cleanup existente
});
const addEmoji = e => { responseText.value += e.i; showEmojiPicker.value=false; };

// --- NUEVAS refs para DnD y diálogo ---
const isDragging = ref(false);
const droppedFiles = ref([]); // { file, name, type, preview, caption }
const showFilesDialog = ref(false);



const whatchingImg = ref(false)
const currentimg = ref('')
const setWatchingImg = (img) => {
  whatchingImg.value = true
  currentimg.value = `${img}?size=visual`
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
  if (
    msg.message_data.readed ) {
    return
  }


  try {
    await fetchService.post(`${URI_MESSAGES}/read-message/${msg.message_data.user_id}/${route.params.restaurant_id}`,false)
    msg.message_data.current_status_id = 3  
    nuevos_counter.value = 0     // ← actualiza el icono ✓✓
    chats.resetUnreadForSidebar(msg.message_data.user_id, route.params.restaurant_id)
  } catch (err) {
    console.error('No se pudo marcar como leído', err)
  }
}

const close = () => {
   responseText.value = ''
    showEmojiPicker.value = false
 
}

const send_context = (msg) => {

  props.send_text(msg,markedMessages.value)
  responseText.value = ''
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


  watch(message_acctions, (newval) => {
    if (!newval){
      close()
    }
  })

  const cargando = ref(false)
  const route = useRoute()
  const getInitials = (name) => {
  if (!name) return '';
  const words = name.split(' ');
  const firstInitial = Array.from(words[0])[0];
  const secondInitial = words[1] ? Array.from(words[1])[0] : '';
  return firstInitial + secondInitial;
};

    let socket: WebSocket | null = null
  let reconnectTimer: number | null = null
  let shouldReconnect = true   // ← nuevo flag

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
  const paginationLimit = ref(20)
  const loadingMore = ref(false)
  const noMoreMessages = ref(false)
  // Variable para indicar si han llegado nuevos mensajes (para el botón)
  const newMessagesArrived = ref(false)
  // Objeto reactivo para almacenar el estado de expansión de cada mensaje
  const expandedMessages = ref({})
  const markedMessages = ref({
                "message_data": {
                    "id": 3559,
                    "user_id": 10,
                    "restaurant_id": 1,
                    "content": "final del mensaje\n",
                    "created_at": "2025-05-03T02:16:30.361038+00:00",
                    "current_status_id": 1,
                    "employer_id": 1082,
                    "employer_name": "ANDRES FELIPE ARrECHEA",
                    "wa_id": "wamid.HBgMNTczMjI2ODkyOTg4FQIAERgSQzg4QzYyQzg0MDg0RkY2OEVDAA==",
                    "wa_timestamp": "1746238590",
                    "context_message_id": "wamid.HBgMNTczMjI2ODkyOTg4FQIAERgSNDIyNUIxQkZEMkE1MTA4RDA3AA==",
                    "local_dt": "2025-05-02T21:16:30",
                    "file_type": null,
                    "file_id": null
                },
                "time": "09:16 PM",
                "date": "02/05/2025",
                "day_label": "hoy",
                "contest": {
                    "message_data": {
                        "id": 3490,
                        "user_id": 10,
                        "restaurant_id": 1,
                        "content": "fsfs",
                        "created_at": "2025-05-03T01:28:04.499413+00:00",
                        "current_status_id": 1,
                        "employer_id": 1082,
                        "employer_name": "ANDRES FELIPE ARrECHEA",
                        "wa_id": "wamid.HBgMNTczMjI2ODkyOTg4FQIAERgSNDIyNUIxQkZEMkE1MTA4RDA3AA==",
                        "wa_timestamp": "1746235684",
                        "context_message_id": "null",
                        "file_type": null,
                        "file_id": null,
                        "local_dt": "2025-05-02T20:28:04",
                        "time": "08:28 PM",
                        "date": "02/05/2025",
                        "day_label": "hoy"
                    },
                    "time": "08:28 PM",
                    "date": "02/05/2025",
                    "day_label": "hoy"
                }
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
  function formatContent(content) {
  if (!content) return '';

  // Convertir saltos de línea
  let formatted = content.replace(/\n/g, '<br/>');

  // Negrita entre asteriscos
  formatted = formatted.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');

  // Detectar y convertir URLs en links clicables
  formatted = formatted.replace(
    /((https?:\/\/|www\.)[^\s<]+)/g,
    (match) => {
      const url = match.startsWith('http') ? match : `https://${match}`;
      return `<a href="${url}" target="_blank" style="color:#42a5f5;text-decoration:underline;">${match}</a>`;
    }
  );




  

  return formatted;
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
  const get_url = (msg: any, size='thumbnail') => {

    const base  = `${URI_MESSAGES}/files/images/${msg.message_data.file_id}?size=${size}`;
    return base
    
  }

  // Función de actualización de mensajes (carga y actualización)
  const update = async (cargar = true) => {
    animable.value = false
    loadingMore.value = true
      // Carga manual: reinicia paginación y conversación
      controller.value?.abort()
      controller.value = new AbortController()

      paginationOffset.value = 0
      noMoreMessages.value = false
      if (!route.params.user_id || !route.params.restaurant_id) return
      const result = await fetchService.get(
        `${URI_MESSAGES}/conversation/${route.params.restaurant_id}/${route.params.user_id}/${paginationOffset.value}/${20}`,
        false,
        { signal: controller.value.signal }

      )
  

      // result?.[0]?.messages?.forEach(enhanceImageMessage);
      
      messages.value = result?.[0]?.messages || []
      user.value = result?.[0]?.user || {}
    
      setTimeout(() => {
        animable.value = true
      },0);
    
  
      if (first.value) {
        // scrollToBottomNoSmooth()
        first.value = false
      }


      loadingMore.value = false
  }
  
  watch(newMessagesArrived, (new_val) => {
    if (!new_val) {
      nuevos_counter.value = 0
    }
  })
  
  const fetchNewMessages = async (mensajeNuevo) => {
  // 1️⃣ Enriquecemos el mensaje (añadir miniaturas, etc.)
  // enhanceImageMessage(mensajeNuevo)


  // 2️⃣ Buscamos si ya existe un mensaje con ese wa_id
  const idx = messages.value.findIndex(
    m => m.message_data.wa_id === mensajeNuevo.message_data.wa_id
  )

  if (idx !== -1) {
    // 2a. Ya existe → lo reemplazamos en la misma posición
    messages.value[idx] = mensajeNuevo
  } else {
    // 2b. No existe → lo añadimos al final (ajusta a tu UX si prefieres al inicio)
   
    if (route.params.user_id === mensajeNuevo.message_data.wa_user_id){
      messages.value.push(mensajeNuevo)
      
      
       if (!mensajeNuevo.message_data.employer_id){
        showNewMessagesButton.value = true
        nuevos_counter.value ++ 
       }

    }
    
  }

  // 3️⃣ Esperamos al siguiente “tick” para que el DOM termine de renderizar
  await nextTick()
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
        // behavior: 'smooth'
      })
      showNewMessagesButton.value = false
      newMessagesArrived.value = false
    }
    nuevos_counter.value = 0
  }
  
  // Scroll sin animación (para la primera carga)
  const scrollToBottomNoSmooth = () => {
    if (messagesContainer.value) {
      setTimeout(() => {
        messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        // behavior:'smooth'
      })
      }, 100);
      
      showNewMessagesButton.value = false
      newMessagesArrived.value = false
    }
    nuevos_counter.value = 0
  }
  
  // Configuración del WebSocket para actualizaciones

  function disconnectSocket () {
    // Anula reconexión pendiente
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
    // Cierra y limpia el socket actual
    if (socket) {
      shouldReconnect = false         // ← evita el setTimeout del onclose
      socket.close(1000, 'route‑change')
      socket.onopen = socket.onmessage = socket.onerror = socket.onclose = null
      socket = null
    }
  }

  function connectWebSocket () {
    if (!route.params.user_id) return

    const wsUrl = `wss://sockets-service.salchimonster.com/ws/${route.params.user_id}`
    socket = new WebSocket(wsUrl)
    shouldReconnect = true            // ← sólo reconectar si se cae “solo”

    socket.onopen = () => {
      console.log('🟢 Conectado a', wsUrl)
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data) {
        fetchNewMessages(data)
        
        props.change_expiration(false)
      }
    }

    socket.onerror = (err) => console.error('WebSocket error', err)

    socket.onclose = (ev) => {
      console.log('🔴 Socket cerrado', ev.reason || ev.code)
      if (shouldReconnect) {
        reconnectTimer = window.setTimeout(connectWebSocket, 5000)
      }
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
    messages.value = []
    disconnectSocket()      // ← ahora sí mata la conexión previa
    update()
    scrollToBottomNoSmooth()
    connectWebSocket()      // ← y abre la conexión nueva
    nuevos_counter.value = 0
  }
)

// Limpieza global del componente


// Cuando el componente se desmonte, abortamos la petición si quedó colgada
onUnmounted(() => {
  controller.value?.abort()
  disconnectSocket()
})

// Justo antes de navegar fuera de esta ruta, abortamos la petición
onBeforeRouteLeave((to, from, next) => {
  controller.value?.abort()
  next()
})

// Si quieres reiniciar la petición cada vez que cambian los params:
const animable = ref(true)
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


  .img-fluid{
    transition: all ease .3s;
  }
  .img-fluid:hover {
    filter: brightness(1.1);

    
    /* transform: scale(1.02); */
  }

  .message {
    transition: all ease .3s;
  }

  .options {
    position: absolute;
    left: -3rem;

    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .3s;

  }

  .options-variant {
    position: absolute;
    left: -3rem;

    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .3s;

  }


 
  


  @keyframes enter {

    0%{

      transform: translateX(3rem);
    }
    
  }

  
  @keyframes out {

    0%{

      transform: translateX(-3rem);
    }

}





  .options2 {
    position: absolute;
    right: -3rem;
    top: 0;
    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .2s;
  }


  .options2-variant {
    position: absolute;
    right: -3rem;
    top: 0;
    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .2s;

  }


  .options-variant-template {
    position: absolute;
    left: -3rem;
    /* top: 0; */
    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .2s;


  }

  .options-variant-template2 {
    position: absolute;
    right: -3rem;
    top: 0;
    background-color:#ff6200;
    padding: .5rem;
    border-radius:  50%;
    z-index: 99;
    opacity: 0;
    transition: all ease .2s;

  }






  .message:hover  .options {
    animation: enter .2s ease ;
    opacity: 1;
  }



   .message:hover  .options2 {
    animation: out .2s ease ;
    opacity: 1;
  }

  .message:hover   .options-variant {
    animation: enter .5s ease ;
    opacity: 1;
  }


    .message:hover   .options2-variant {
      animation: out .5s ease ;
      opacity: 1;
    }


    .message:hover   .options-variant-template {
    animation: enter .8s ease ;
    opacity: 1;
  }


    .message:hover   .options-variant-template2 {
      animation: out .8s ease ;
      opacity: 1;
    }



  .options:hover, .options2:hover, .options-variant:hover, .options2-variant:hover, .options-variant-template:hover, .options-variant-template2:hover{

    transform: scale(1.1);
    filter:brightness(1.3);
  }

      
  @keyframes active {
    0%{
        opacity: 0;
        transform: translatey(-3rem);
    }

    
}

  .container-messages{
    animation:  active  .3s ease;
  }

  .container-oculto{
    opacity: 0;
    overflow: hidden;
  }
  
  </style>
  