<!-- ChatView.vue (versión corregida) -->
<template>
  <div class="main-container" :style="chatTheme.current_chat_theme.bg_image" style=""> 


       <!-- <div  style="display:flex; justify-content: center;align-items: center; height:100%;">
          <h2 style="color:white;font-size: 3rem;opacity: .5;" :style="chatTheme.current_chat_theme.text">Selecciona un chat...</h2>
    

        </div> -->
    <!-- █████ TOP BAR █████ -->
    <div  tabindex="0"  v-if="route.params?.user_id" class="top-bar " style="border-radius:.5rem;gap:1rem; " :style="chatTheme.current_chat_theme.bg_bars">
      <div class="top-bar-left">
        <div style="height:3rem;width:3rem;display:flex;align-items:center;">
          <div
          
            class="cliente-img"
            :style="`background-color:${route.params.color}`"
            style="height:100%;color: white; width:3rem;aspect-ratio:1/1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-transform:uppercase;font-size:1.3rem;">
            {{ getInitials(route.params.user_name) }}
          </div>
          
        </div> 

        <div class="top-bar-info">

          <div style="display: flex;flex-direction: column;">
                <strong><h5 style="text-transform:capitalize;margin:0;" :style="chatTheme.current_chat_theme.text">
                        {{ route.params.user_name?.substring(0, 20) }}  
                      </h5></strong>

                      <span>+{{ route.params.user_id }}</span>
          </div>
     

          <div>
                          <Button
                v-if="chatStore.current_user.clasification"
                :style="{
                  height: '2.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'capitalize',
                  gap: '0.35rem',
                  backgroundColor: colorMap[chatStore.current_user.clasification]?.bg || '#7f8c8d',
                  color: '#fff'
                }"
              >
                <!-- Ícono -->
                <i 
                  :class="['fa-solid', colorMap[chatStore.current_user.clasification]?.icon]"
                  aria-hidden="true"
                  style="font-size: 0.9rem"
                ></i>

                <!-- Texto -->
                {{ chatStore.current_user.clasification?.toLowerCase() }} {{ chatStore.current_user.times_purchased }} compras
              </Button>

          </div>
    
       
        </div>

       
      </div>

      <!-- <div
        v-for="i in restaurants.filter(r => r.id == route.params.restaurant_id)"
        :key="i.id"
      >
        <img :src="i.img" alt="" style="max-height:2rem;object-fit:contain;">
      </div> -->

      <div style="display:flex;align-items:center;gap:1rem;">
     
        <Button icon="pi pi-shopping-cart" class="p-2"
                style="color:white;min-width:max-content;" severity="warning" label="Ing. Ped"/>

                
        <Button text class="p-2"><i :style="chatTheme.current_chat_theme.text" class="pi pi-search text-2xl "/></Button>
        <Button text class="p-2"><i :style="chatTheme.current_chat_theme.text" class="pi pi-bars text-2xl "/></Button>
      </div>
    </div>

    <!-- █████ MENSAJES █████ -->
    <div style="height:100%;overflow:auto;" >
      <RouterView >
        <Messages v-if="route.params.user_id"  :send_function="send_files" :send_text="send_text_message"  :change_expiration="change_expiration" ref="Messages_element"/>

     
      </RouterView>
    </div>

    <!-- █████ CHAT BAR █████ -->
    <div class="chat-bar" tabindex="0" v-if="route.params?.user_id"  :style="chatTheme.current_chat_theme.bg_bars">
      <EmojiPicker
        v-if="showEmojiPicker"
        :native="true"
        style="position:absolute;bottom:4rem;z-index:1000;"
        @select="addEmoji"
        class="emoji-picker"
      />

      <!-- área entrada -->
      <div class="message-area" >
        <Button text style="font-size:2rem; padding-left: 0;" @click="showEmojiPicker=!showEmojiPicker">
          <i class="fas fa-laugh-wink emoji-picker"/>
        </Button>

        <!-- textarea ↔ audio chip -->
        <Textarea
          v-if="!recordedAudio"
          v-model="messageBody"
          autoResize
          class="message"
          :disabled="isExpired"
          @keydown="handleKeydown"
          :style="`${chatTheme.current_chat_theme.text} ; ${chatTheme.current_chat_theme.border} `"
        />

        <div v-else class="audio-chip" @keydown.enter.prevent="sendRecordedAudio">
          <audio style="width:100%;min-width:28rem;max-width:42rem;" :src="recordedAudio.url" controls/>
          <Button text class="btn-audio-trash p-2" @click="discardAudio">
            <i :style="chatTheme.current_chat_theme.text" class="pi pi-trash text-2xl p-0"/>
          </Button>
        </div>
      </div>

      <!-- controles -->
      <div style="position:relative;transition:.2s;">
        <!-- <Button class="btn-descuento" icon="pi pi-send btn-descuento"
                style="transition:.2s;" label="Enviar Descuento"/> -->

   
        <Button
          text style="height:100%;"
          v-if="!recordedAudio && messageBody.trim()===''"
          @click="handleMicToggle"
        >
          <i :style="chatTheme.current_chat_theme.text" :class="isRecording 
                ? 'pi pi-stop text-2xl text-red-500'
                : 'pi pi-microphone text-2xl '"/>
        </Button>

        

        <!-- enviar audio -->
        <Button
          v-else-if="recordedAudio"
          :disabled="isUploading"
          text
          @click="sendRecordedAudio"
        >
          <i :style="chatTheme.current_chat_theme.text" class="pi pi-send text-2xl "/>
        </Button>

        <!-- enviar texto -->
        <Button :style="chatTheme.current_chat_theme.text" v-else text @click="send_text_message(messageBody)">
          <i class="pi pi-send text-2xl "/>
        </Button>

      </div>

      <div style="display: flex; gap: 1rem;">
        <Button 
          severity="danger" style="" icon="pi pi-clock" class="p-2"
          @click="() =>  showTemplates = true"
           
       
        >
          <!-- <i :class=" 'pi pi- text-2xl '"/> -->
        </Button>
        <Button v-if="route.query.expirado" icon="pi pi-bolt"
          severity="warning" style="" class="p-2"
          @click="() =>  showTemplates = true"
       
       
        >
          <!-- <i :class=" 'pi pi- text-2xl '"/> -->
        </Button>
      </div>
   
    </div>

    <Dialog v-model:visible="showTemplates" header="Envio de plantilla" style="width: 50rem;">
      <DataTable
        :value="templates"
        dataKey="id"
        paginator :rows="10" responsiveLayout="scroll"
        class="shadow-md rounded-xl overflow-hidden"
      >
        <Column class="my-1 py-1" field="name" header="Nombre" bodyClass="font-medium" />
        <!-- <Column class="my-1 py-1" field="category" header="Categoría" />
        <Column class="my-1 py-1" field="language" header="Idioma" /> -->
        <Column class="my-1 py-1" header="Estado">
          <template #body="{data}">
            <Tag :severity="statusSeverity(data.status)" >{{ data.status }}</Tag>
          </template>
        </Column>

        <Column class="my-1 py-1" header="Estado">
          <template #body="{data}">
           {{data?.components?.find(c => c.type == 'BODY')?.text}}
          </template>
        </Column>


        <Column class="my-1 py-1" headerStyle="width:8rem" header="Acciones">
          <template #body="{data}">
            <div class="flex gap-2">
              <Button icon="pi pi-send" label="Enviar" severity="help"
                @click="handleSendTemplate(data)"
              />
            </div>
          </template>
        </Column>

   

        
      </DataTable>

    
        <div style="width: 100%; display: flex; justify-content: end;">

          <RouterLink to="/chat/templates">
          <Button severity="help" icon="pi pi-plus" label="Agregar otro">

          </Button> 
        </RouterLink>
        </div>
       
  
    </Dialog>



    


  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { loginStore } from '@/store/user';
import { URI_MESSAGES } from '../../../service/conection';
import { fetchService } from '../../../service/utils/fetchService';
import Messages from './Messages.vue';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';
import { useChatStore } from '@/store/chat'
import { URI } from '../../../service/conection';

import {chatThemeStore} from '@/store/chatTheme'





const chatTheme  = chatThemeStore()


function statusSeverity(s){ return {APPROVED:'success',PENDING:'warning',REJECTED:'danger'}[s]||'info' }


/* send_template_message already defined */

const handleSendTemplate = (template: any) => {
  send_template_message(
   template
  );
  showTemplates.value = false;
};


// —————— NUEVA: Función para enviar plantillas ——————
// const send_template_message = async (
//     templateName: string,
//     languageCode: string,
//     components: Array<any> = [],
//     context: { message_data: { wa_id: string } } | null = null
//   ) => {
//     if (computed(() => route.query.expirado === 'true').value) return;

//     const fd = new FormData();
//     fd.append('messaging_product', 'whatsapp');
//     fd.append('employer_id', login.rawUserData.id);
//     fd.append('context_message_id', context?.message_data?.wa_id || '');
//     fd.append('restaurant_id', route.params.restaurant_id?.toString() || '');
//     fd.append('to', route.params.user_id || '');
//     fd.append('type', 'template');
//     fd.append('template', JSON.stringify({
//       name: templateName,
//       language: { code: languageCode },
//       components
//     }));

//     try {
//       chatStore.sending = true;
//       await fetchService.post(
//         `${URI_MESSAGES}/webhook/send/template/`,
//         fd,
//         false
//       );
//       console.log(`✅ Template "${templateName}" enviado a ${route.params.user_id}`);
//     } catch (e) {
//       console.error('✗ Error al enviar template', e);
//     } finally {
//       chatStore.sending = false;
//     }
//   };



  async function send_template_message( template ) {
    const templatePayload = template

   
      const fd = new FormData();
      fd.append("messaging_product", "whatsapp");
      fd.append("employer_id", login.rawUserData.id.toString());
      fd.append("context_message_id", "");             // sin hilo
      fd.append("restaurant_id", route.params.restaurant_id);                  // FORZAMOS 1
      fd.append("to", route.params.user_id);
      fd.append("type", "template");
      fd.append("template", JSON.stringify(templatePayload));

      try {
        chatStore.sending = true;
        await fetchService.post(
          `${URI_MESSAGES}/webhook/send/template/`,
          fd,
          false
        );
        console.log(`✅ Template enviado a ${to}`);
      } catch (err) {
        console.error(`✗ Error al enviar template a ${to}`, err);
      } finally {
        chatStore.sending = false;
      }

  }




const templates = ref( [{}])

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  // Verifica si el clic ocurrió dentro de un elemento con clase 'emoji-picker'
  if (!target.closest('.emoji-picker')) {
    showEmojiPicker.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  fetchTemplates()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})



const showTemplates = ref(false)
const tamplates = ref([])
/* ───── estado ───── */
const route = useRoute();
const login = loginStore();

const showEmojiPicker = ref(false);
const messageBody     = ref('');
const isRecording     = ref(false);
const recordedAudio   = ref(null);    // {file,url}
const isUploading     = ref(false);   // bloquea send mientras sube
const expirado = ref(true); // para el mensaje de expirado
/* ───── expirado ───── */
const isExpired = computed(
  () => expirado.value && (route.query?.expirado === 'true' || route.query?.expirado === true)
);

const change_expiration = (v) => {
  expirado.value = v;
};



watch(() => route.params?.restaurant_id,() =>  {
  fetchTemplates()
})

watch(isExpired, v => { messageBody.value = v ? 'Conversación expirada' : ''; }, { immediate:true });

const colorMap = {
  'SIN DATOS':   { bg: '#7f8c8d', icon: 'fa-circle-question' }, // gris
  'PREOCUPANTE': { bg: '#e74c3c', icon: 'fa-triangle-exclamation' }, // rojo
  'CASUAL':      { bg: '#e67e22', icon: 'fa-person-walking' }, // naranja
  'FRECUENTE':   { bg: '#27ae60', icon: 'fa-repeat' }, // verde
  'TOP':         { bg: '#2980b9', icon: 'fa-ranking-star' }, // azul
  'ESTRELLA':    { bg: '#8e44ad', icon: 'fa-star' } // púrpura
}
const chatStore = useChatStore();

/* ───── logos ───── */
const restaurants = ref([
  { id:1, name:'Salchimonster', img:'https://backend.salchimonster.com/read-photo-product/xai0dVnL' },
  { id:7, name:'Distrimoster',  img:'https://backend.salchimonster.com/read-photo-product/iX6UiE6e' }
]);

/* ───── utils ───── */
const getInitials = (name='') => {
  const p = name.trim().split(' ');
  return (Array.from(p[0]||'')[0]||'') + (p[1] ? Array.from(p[1])[0] : '');
};
const addEmoji = e => { messageBody.value += e.i; showEmojiPicker.value=false; };

/* ───── grabar audio ───── */
let mediaRecorder = null;
let chunks=[], audioStream=null;

const handleMicToggle = async () => {
  // detener si ya grababa
  if (isRecording.value && mediaRecorder) { mediaRecorder.stop(); return; }

  try {
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')
      ? 'audio/ogg;codecs=opus'
      : 'audio/webm;codecs=opus';

    mediaRecorder = new MediaRecorder(audioStream, { mimeType: mime });
    mediaRecorder.ondataavailable = e => e.data.size && chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: mime.split(';')[0] });
      chunks = [];
      audioStream.getTracks().forEach(t => t.stop());

      const ext  = mime.startsWith('audio/ogg') ? 'ogg' : 'webm';
      recordedAudio.value = {
        file: new File([blob], `audio_${Date.now()}.${ext}`, { type: blob.type }),
        url : URL.createObjectURL(blob)
      };
      isRecording.value = false;
    };

    mediaRecorder.start();
    isRecording.value = true;

  } catch (err) {
    // NotReadableError u otros → solo log y limpia estado
    console.error('No se pudo abrir el micrófono:', err.name, err.message);
    isRecording.value = false;
    if (audioStream) audioStream.getTracks().forEach(t => t.stop());
  }
};
const discardAudio = () => {
  if (recordedAudio.value) URL.revokeObjectURL(recordedAudio.value.url);
  recordedAudio.value = null;
};

onUnmounted(() => {
  if (mediaRecorder && isRecording.value) mediaRecorder.stop();
  if (audioStream) audioStream.getTracks().forEach(t => t.stop());
});

/* ───── enviar texto ───── */
const basePayload = {
  messaging_product:'whatsapp',
  employer_id: login.rawUserData.id,
  context_message_id:null
};

const send_text_message = async (body,context=null) => {
  if (isExpired.value || !body.trim()) return;

  const fd = new FormData();
  fd.append('messaging_product', 'whatsapp');
  fd.append('employer_id', login.rawUserData.id);
  fd.append('context_message_id', context?.message_data?.wa_id || null);
  fd.append('restaurant_id', route.params.restaurant_id?.toString());
  fd.append('to', route.params.user_id);
  fd.append('type', 'text');
  fd.append('text', JSON.stringify({ body }));
  messageBody.value = '';

  try {

    chatStore.sending = true;
    await fetchService.post(`${URI_MESSAGES}/webhook/send/text/`, fd, false);
  } catch (e) {
    console.error('Error al enviar texto', e);
  }
  chatStore.sending = false;

};

/* ───── enviar audio ───── */
const sendRecordedAudio = async () => {
  if (isExpired.value || !recordedAudio.value || isUploading.value) return;

  // oculta el chip para que puedas grabar otro
  const audioToSend = recordedAudio.value;
  discardAudio();
  isUploading.value = true;

  const fd = new FormData();
  fd.append('files', audioToSend.file);

  const payload = {
    ...basePayload,
    restaurant_id: route.params.restaurant_id?.toString(),
    to: route.params.user_id,
    type:'audio',
    text:{ body:'' },
    file_index:0
  };
  fd.append('payloads', JSON.stringify(payload));

  try { await fetchService.post(`${URI_MESSAGES}/webhook/send`, fd, false); }
  catch (e) { console.error('Error al enviar audio', e); }

  isUploading.value = false;
};

/* ───── otros adjuntos ───── */
const send_files = async wrappers => {
  if (isExpired.value || !wrappers?.length) return;
  const fd = new FormData();

  const fixed = {
    restaurant_id: route.params.restaurant_id?.toString(),
    to: route.params.user_id,
    messaging_product:'whatsapp',
    employer_id: login.rawUserData.id,
    context_message_id:null
  };

  const getType = f => {
    const { type, name } = f;
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('audio/')) return 'audio';
    if (type.startsWith('video/')) return 'video';
    if (type==='application/pdf')  return 'document';
    const ext = name.split('.').pop()?.toLowerCase();
    if (['jpg','jpeg','png','webp'].includes(ext)) return 'image';
    if (['mp3','wav','ogg','opus'].includes(ext))  return 'audio';
    return 'document';
  };

  wrappers.forEach((w,i)=>{
    fd.append('files', w.file);
    fd.append('payloads', JSON.stringify({
      ...fixed,
      type:getType(w.file),
      text:{ body:w.caption||'' },
      file_index:i
    }));
  });

  chatStore.sending = true;

  try { await fetchService.post(`${URI_MESSAGES}/webhook/send`, fd, false); }
  catch (e) { console.error('Error al enviar archivos', e); }
  chatStore.sending = false;

};

/* enter textarea */
const handleKeydown = e => {
  if (e.key==='Enter') { e.preventDefault(); if (messageBody.value.trim()) send_text_message(messageBody.value); }
};

/* enter cuando hay chip audio */
const globalEnter = e => {
  if (e.key==='Enter' && recordedAudio.value) {
    e.preventDefault();
    sendRecordedAudio();
  }
};
onMounted(()=> window.addEventListener('keydown', globalEnter));
onUnmounted(()=> window.removeEventListener('keydown', globalEnter));



const testNumbers = [
  "573226892988", 
  // "573186871962", "573138772316", "573005609834", "573208949100", "573169520893", "573106813511",
  // "573212469473", "573143418629", "573174415988", "573107701589", "573147030834", "5733333334444", "573213700962",
  // "573214265817", "573145913414", "573058613960", "573192203419", "573212385299", "573229449515", "573027214428",
  // "573207950433", "573142141164", "573176223088", "573227939754", "573013862198", "573232200851", "573165297702",
  // "573224104394", "573122012581", "573183336677", "573226892987", "573105780091", "573053877247", "573206652773",
  // "573137174562", "573043816966", "573183633231", "573147603568", "573007338605", "573107636488", "573214557615",
  // "573164035543", "573012909946", "573123121321", "573004658858", "573007910324", "573057626329", "573229016561",
  // "573015376554", "573023932514", "573217113224", "573219349112", "573058277280", "573158642601", "573132592793",
  // "573004862714", "573042951448", "573175016400", "573127185556", "573188889802", "573185728770", "573223784758",
  // "573222906592", "573185278617", "573057742111", "573226350007", "573113875767", "573107413780", "573212543004",
  // "573104541032", "573142590281", "573182468160", "573194014036", "573134541000", "573144469624", "573223826206",
  // "573026371945", "573184351066", "573144175184", "573042911908", "573003331480", "573112328164", "573505698882",
  // "573164962605", "573188787974", "573185765760", "573204660255", "573125515937", "573164342010", "573114152613",
  // "573225560911", "573185858932", "573116982593", "573214263032", "573127278329", "573206253541", "573207789120",
  // "573155678888", "573173629519", "573156471061", "573022375913", "573174677267", "573193383971", "573186582676",
  // "573167790122", "573208350423", "573170473022", "573183274753", "573016373127", "573164813649", "573223068341",
  // "573219870417", "573005191250", "573102793764", "573163444038", "573225012467", "573046644510", "573236268030",
  // "57304280485",  "573194964734", "573046417412", "573224061662", "573108679206", "573158123591", "573155845104",
  // "573106858766", "573023148955", "575555226633", "573227359566", "573136673940", "573157407774", "573133374467",
  // "573004388237", "573205426024", "573023527969", "573016836569", "573123559075", "573226443980", "573016550320",
  // "573164744155", "573186060748", "573164969926", "573118726529", "573007551909", "573156715370", "573162651199",
  // "573229109791", "573132962337", "573218887743", "573016839675", "573143546245", "573114600108", "573143387284",
  // "573229445795", "573013304382", "573212055560", "573057091548", "573115222116", "573022141303", "573184095322",
  // "573103986699", "573127611900", "573164994313", "573103987144", "573125169002", "573212586274", "573143245808",
  // "573233275966", "573112031130", "573028152272", "573122752731", "573212267102", "573118610611", "573115180147",
  // "573154393303", "573178949755", "573146950688", "573184763423", "573168318412", "573154402772", "573117745709",
  // "573006280482", "573222575349", "573023144181", "573123306972", "573003011497", "573193619415", "573133271835",
  // "573135037552", "573206507583", "573024970795", "573137425128", "573197134414", "573166209599", "573226002072",
  // "573054018719", "573113865080", "573005167472", "573183981009", "573224787879", "573108333267", "573133186191",
  // "573002351732", "573142404870", "573177280806", "573017812225", "573104958365", "573015497605", "573142128044",
  // "573243527336", "57300000009", "57300200000", "573013199438", "573222254661", "573152447869", "573116634380",
  // "573143579803", "573217684664", "573142025637", "573026577195", "573107178930", "573054380817", "573012830956",
  // "573228819818", "573233650953", "573228105987", "573143833820", "573123002522", "573234884684", "573228812355",
  // "573002997245", "573154000919", "573214705892", "573244483464", "573147401576", "573042798370", "573218218363",
  // "573160607004", "573174258469", "573118624318", "573114603974", "573152068432", "573016754695", "573215215198",
  // "573128049832", "573027400399", "573218407549", "573008528154", "573146418255", "573117803635", "573102770201",
  // "573008927023", "573174019560", "573186509925", "573164437224", "573108936633", "573245957926", "573226892988",
  // "573204624586", "573127695728", "573195976295", "573017219913", "573187114600", "573214520399", "573104773012",
  // "573059319459", "573228136697", "573204166126", "573012440289", "573246381306", "573045569034", "573213120247",
  // "573223793820", "573187232563", "573127981980", "573042109028", "573025141376", "573024395425", "573184934834",
  // "573108742922", "573156053332", "573247506966", "573205320924", "573127495836", "573003609326", "573228585758",
  // "573138081202", "573177271128", "573022008799", "573174827734", "573016343475", "573053402943"
];


async function sendBulkTest(message = '🔔 Mensaje de prueba') {
  // Usa tu mismo fetchService; cada iteración clona el FormData base
  testNumbers.forEach(async (to) => {
    const fd = new FormData();
    fd.append('messaging_product', 'whatsapp');
    fd.append('employer_id', login.rawUserData.id);
    fd.append('restaurant_id', route.params.restaurant_id?.toString());
    fd.append('to', to);
    fd.append('type', 'text');
    fd.append('text', JSON.stringify({ body: message }));

    try {
      await fetchService.post(`${URI_MESSAGES}/webhook/send/text/`, fd, false);
      console.log(`✓ Enviado a ${to}`);
    } catch (err) {
      console.error(`✗ Falló con ${to}`, err);
    }
  });
}









  async function fetchTemplates() {

    if (route.params.restaurant_id) {
      const restaurants2 = await fetchService.get(`${URI}/restaurants`) || []
      const restaurant   = restaurants2.find(r => r.id == route.params?.restaurant_id) || null
      if (restaurant){
        templates.value = await fetchService.get(`${URI_MESSAGES}/wabas/${restaurant.waba_id}/templates/`) 
    }
    }


  }






// sendBulkTest('🔔 Mensaje de prueba'); // Llama a la función para enviar el mensaje de prueba
</script>

<style scoped>
/* ——— estilos base ——— */
.main-container{width:100%;background:#ffffff11;display:grid;height:100vh;max-height:calc(100vh - 3rem);border-radius:.5rem;grid-template-rows:4.5rem 1fr max-content;
background-size: cover;}
.btn-descuento{position:absolute;right:1.5rem;top:-5rem;min-width:max-content;margin:0;color:#FFC107;background:#ffffff10;}
.btn-descuento:hover{background:#FFC107;color:#000;}
.message-area{width:100%;display:flex;}
h5{margin:0;padding:0;color:white;}
.top-bar-info{display:flex;align-items:center;gap:.5rem;}
.top-bar-left{display:flex;gap:1rem;}
.top-bar,.chat-bar{width:100%;background:rgba(255,255,255,.062);height:100%;display:flex;padding:0 1rem;align-items:center;justify-content:space-between;}
.cliente-img{border-radius:50%;height:100%;aspect-ratio:1/1;}
.message{background:rgba(255,255,255,.103);width:100%;max-height:10rem;font-family:roboto;font-size:medium;;min-height:min-content;outline:none;}
/* scroll */
::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{background:#94949423;}::-webkit-scrollbar-thumb{background:#ffffff20;border-radius:6px;}::-webkit-scrollbar-thumb:hover{background:#ffffff;}
html{scrollbar-width:thin;scrollbar-color:#888 #f1f1f1;}
/* audio chip */
.audio-chip{display:flex;align-items:center;gap:.5rem;background:#ffffff10;border-radius:.5rem;padding:.5rem;flex:1;}
.audio-chip audio{max-width:12rem;}
.btn-audio-trash{width:2rem;height:2rem;}


.chat-bar{
  animation: animate .3s ease
}

.top-bar{
  animation: animate2 ease .3s 
}

@keyframes animate {

  0%{

    opacity: 0;
    transform: translateY(10rem);
    background-color: rgb(102, 255, 0);
  }
  
}

@keyframes animate2 {

  0%{

    opacity: 0;
    transform: translateY(-10rem);
    background-color: rgb(102, 255, 0);
  }
  
}
</style>
