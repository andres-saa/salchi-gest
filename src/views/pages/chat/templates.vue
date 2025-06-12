<!-- TemplateManager.vue - Gestor de plantillas de WhatsApp con PrimeVue ConfirmDialog (sin SweetAlert) -->
<template>


<Dialog v-model:visible="difundiendo" modal header="Difundir Plantilla" style="width:100vw;max-width: 80rem;background-color: white;">
    <div style="height: 100%;">
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); max-width:max-content;gap:.5rem; align-items: center;">
        <h6 class="m-0 p-0"> <strong>Id plantilla :</strong></h6> <h6 class="m-0 p-0">{{ selectedTemplate?.id }}</h6>
        <h6 class="m-0 p-0"> <strong>Nombre plantilla :</strong></h6> <h6 class="m-0 p-0">{{ selectedTemplate?.name }}</h6>
        <h6 class="m-0 p-0"> <strong>Estado :</strong></h6> <h6 class="m-0 p-0">{{ selectedTemplate?.status }}</h6>
        <h6 class="m-0 p-0"> <strong>Categoria :</strong></h6> <h6 class="m-0 p-0">{{ selectedTemplate?.category }}</h6>
        <h6 class="m-0 p-0"> <strong>Mensaje :</strong></h6>
        <h6 class="m-0 " style="background-color: #0a3744;padding: 1rem;border-radius: .5rem;color: white;">
          {{ selectedTemplate?.components?.find(c => c.type == 'BODY')?.text }}
        </h6>
        <h6 class="m-0 p-0"> <strong>Foto :</strong></h6>

        <img style="height: 10rem;width: 10rem;aspect-ratio: 1 / 1 ; object-fit: cover;border-radius: .5rem;border: 1px solid;" :src="selectedTemplate?.components?.find(c => c.type == 'HEADER')?.example?.header_handle[0]
        " alt="">
     
      </div>

      <h5 class="mt-4 mb-1"><strong>Imagen para este envío</strong></h5>
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
        <input type="file" accept="image/*" @change="onHeaderUpload" />
        <!-- Vista previa → solo si ya se cargó -->
        <img
          v-if="templateHeaderUrl"
          :src="templateHeaderUrl"
          alt="preview"
          style="height: 8rem;width: 8rem;object-fit: cover;border-radius: .5rem;border: 1px solid;"
        />
      </div>

      <h5><strong>Usuarios</strong></h5>
      <div class="statuses" style="display: flex; gap: 1rem;">
        <Button
          v-for="(button, index) in colorMap"
          :key="index"
          style="height: 2.3rem; border-radius: .3rem; padding: .5rem;"
          text
          @click="toggleStatus(button)"
          class="status"
          :label="button.label"
          :style="selectedStatuses.includes(button.label)
            ? { backgroundColor: button.bg, color: '#fff' }
            : { backgroundColor: '#ffffff20', color: button.bg }"
        />
      </div>

      <div style="width: 100%; height: 50vh; margin-top: 1rem;">
        <DataTable :rows="10" paginator
                   stripedRows showGridlines
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                   :rowsPerPageOptions="[5,10,15,25,100]"
                   currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} clientes"
                   responsiveLayout="scroll" scrollable
                   :value="filteredUsers" header="clientes">
          <Column class="py-1" header="Nombre" field="nombre" />
          <Column class="py-1" header="Número" field="wa_id" />
          <Column class="py-1" header="Clasificación" field="clasification" />
        </DataTable>
      </div>

      
    </div>

    <template #footer>
        <Button label="Cancelar" text severity="secondary" @click="difundiendo=false" />
        <Button 
          label="Enviar a todos" 
          severity="help" 
          icon="pi pi-broadcast" 
          :loading="sendingBulk" 
          @click="broadcastTemplate" 
          autofocus 
        />
      </template>
  </Dialog>

  
  <div class="p-4 templates-container" style=" margin: auto; background-color: white;border-radius: 1rem;transition: all .3s ease;max-height: 90vh;">
    <!-- Encabezado y búsqueda -->

  <div style="height: 100%;">
        
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4" style="align-items: center;">
        <h2 class="text-2xl font-bold whitespace-nowrap m-0 p-0" style="min-width: max-content;">Plantillas de WhatsApp</h2>
        <span class="p-input-icon-left w-full md:w-80 my-3" style="height: 100%;">
          <i class="pi pi-search" />
          <InputText v-model.trim="globalFilter" placeholder="Buscar…" class="w-full" />
        </span>
        <Dropdown v-model="restaurant" :options="resturants.filter((r) => r.exist)" optionLabel="name"  placeholder="Selecciona un restaurante" class="w-full md:w-80 my-3" />

      </div>
        <!-- Tabla de plantillas -->
        <DataTable 
        style="max-width: 80rem;width: 100%;overflow: auto;"
        :value="filteredTemplates"
        dataKey="id"
        scrollable
        scroll-height="65vh"
        paginator :rows="10" responsiveLayout="scroll"
         :globalFilterFields="['name','category']"
        class="shadow-md rounded-xl overflow-hidden"
      >
        <Column class="my-1 py-1" field="name" header="Nombre" bodyClass="font-medium" />
        <!-- <Column class="my-1 py-1" field="category" header="Categoría" />
        <Column class="my-1 py-1"  field="language" header="Idioma" /> -->
         <Column class="my-1 py-1" header="Texto">
          <template #body="{data}">
            <span>{{ data?.components.find(c => c.type == 'BODY')?.text }}</span>
          </template>
        </Column>

        <Column class="my-1 py-1" header="Texto">
          <template #body="{data}">

            <div v-if="data?.components.find(c => c.type == 'HEADER')?.example?.header_handle[0]" style="display: flex;justify-content: center;">
                          <img style="height: 10rem;width: 10rem;aspect-ratio: 1 / 1 ; object-fit: cover;border-radius: .5rem;border: 1px solid;" :src="data?.components.find(c => c.type == 'HEADER')?.example?.header_handle[0]"/>

            </div>
            
          </template>
        </Column>
        <Column class="my-1 py-1" header="Estado">
          <template #body="{data}">
            <Tag :severity="statusSeverity(data.status)" >{{ data.status }}</Tag>
          </template>
        </Column>
        <Column class="my-1 py-1" headerStyle="width:8rem" header="Acciones">
          <template #body="{data}">
            <div class="flex gap-2">
              <Button icon="pi pi-eye"   severity="warning" @click="openEdit(data)" />
              <!-- <Button icon="pi pi-trash"   severity="danger"  @click="askRemove(data)" /> -->
              <Button icon="pi pi-sync"  label="Difundir" severity="help"  @click="openToDifundir(data)" />

            </div>
          </template>
        </Column>
      </DataTable>

      <!-- Botón nueva plantilla -->

      <div style="display: flex;  width:100%; justify-content: end; margin-top: 1rem;">
        <Button label="Nueva plantilla" icon="pi pi-plus" severity="help" class="w-full md:w-auto" @click="openNew" />

      </div>

      <!-- Diálogo de creación / edición -->
      <Dialog v-model:visible="dialogVisible" :header="dialogTitle" modal class="" style="width: 90vw; max-width: 20rem; min-width: 40rem;">
        <div class="space-y-4">
          <!-- Datos básicos -->
          <div class=" md:grid-cols-2 gap-3">
            <div class="field">


 

 <div
  v-if="headerImageFile"               
  style="position:relative;width:300px;margin-top:.5rem"
>
  <img :src="headerImagePreviewUrl"   style="width:100%;height:100%;object-fit:cover;border-radius:.5rem" />
  <Button     icon="pi pi-times"
      severity="danger"
      size="small"
      style="position:absolute;top:.1rem;right:.1rem" @click="removeHeaderImage" />
</div>
            </div>

            <div style="display: flex;justify-content: center;">
            <img :src="imageHeader" style="max-width:100%;margin: ; aspect-ratio: 1 / 1;max-width: 20rem;object-fit: contain;" alt="">
            </div>
          
            <div class="field">
              <label class="font-medium">Nombre</label>
              <InputText v-model="form.name" class="w-full" />
            </div>
            <div class="field">
              <label class="font-medium">Categoría</label>
              <Dropdown v-model="form.category" :options="categories" optionLabel="label" optionValue="value" class="w-full" />
            </div>
            <div class="field">
              <label class="font-medium">Idioma</label>
              <Dropdown v-model="form.language" :options="languages" optionLabel="label" optionValue="value" class="w-full" />
            </div>
          </div>

          <!-- Cuerpo con placeholders -->
          <div>
            <h6 class="font-medium">Cuerpo del mensaje <small class="opacity-70">(usa {{param}} o {{1}})</small></h6>
            <Textarea auto-resize="" v-model="bodyText" rows="6" class="w-full" />
          </div>

          <!-- Ejemplos dinámicos -->
          <div v-if="placeholders.length" class="" style="display: flex;flex-direction: column; gap: 1rem;justify-content: center;">
            <h5 class="font-medium m-0 p-0 py-3" >Ejemplos de variables</h5>
            <div v-for="ph in placeholders" :key="ph" style="align-items: center;display: flex;gap: 1rem;" class="">
              <Tag severity="info" style="padding: 0 1rem;height: 2.8rem; min-width: 2.8rem;"  class="min-w-[5rem] text-center text-xl">{{ ph }}</Tag>
              <InputText v-model="examples[ph]" :placeholder="`Ejemplo para ${ ph }`" class="flex-1" />
            </div>
          </div>

          <!-- Botones -->
          <div class="space-y-2">
            <div class="flex items-center  my-4" style="align-items: center;gap:1rem">
              <h5 class="m-0" >Botones</h5>
              <Button icon="pi pi-plus"   severity="success" @click="addButton" />
            </div>


            <div style="display: flex; flex-direction: column;gap: 1rem; max-width: 100%;overflow: hidden;">
              <div v-for="(btn,idx) in buttons" :key="idx" class="" style="display: grid; grid-template-columns: 10rem  1fr 1fr 3rem;gap: .5rem;">
              <Dropdown v-model="btn.type" :options="buttonTypes" optionLabel="label" optionValue="value"  />
              <InputText v-model="btn.text" placeholder="Texto"  />
              <InputText v-model="btn.url"  placeholder="URL"    />
              <Button icon="pi pi-times"   severity="danger"  @click="buttons.splice(idx,1)" />
            </div>
            </div>
           
          </div>
        </div>

        <template #footer>
          <Button label="cerrar" text severity="secondary" @click="dialogVisible=false" />
          <Button label="Guardar" severity="help" icon="pi pi-check" @click="saveTemplate" :loading="saving" autofocus />
        </template>
      </Dialog>

      <!-- Diálogo de confirmación global -->
      <ConfirmDialog />
  </div>



  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import ConfirmDialog from 'primevue/confirmdialog'
import { useConfirm } from 'primevue/useconfirm'
import { fetchService } from '@/service/utils/fetchService'
import { URI_MESSAGES,URI } from '@/service/conection'
import { loginStore } from '@/store/user';
import { useChatStore } from '@/store/chat'

const login = loginStore()
const chatStore = useChatStore()

function uploadHeaderImage({ files }) {
  if (!files?.length) return
  const file = files[0]

  // ► Guarda el archivo; se enviará en saveTemplate()
  headerImageFile.value       = file
  headerImagePreviewUrl.value = URL.createObjectURL(file)
}

function removeHeaderImage () {
  headerImageFile.value       = null
  headerImagePreviewUrl.value = ''
}






/* ------------- NUEVA VARIABLE PARA LA URL DE CABECERA ------------- */
const templateHeaderUrl = ref('')

/* ------------- FUNCIÓN CARGA DE IMAGEN ------------- */
async function onHeaderUpload (e) {
  const file = e.target.files?.[0]
  if (!file) return
  try {
    const fd = new FormData()
    fd.append('file', file)        // ⚠️ campo esperado por backend

    // POST → /upload-photo-product
    const resp = await fetchService.postFormData(`${URI_MESSAGES}/upload-photo-product`, fd)
    const id   = (resp?.content?.file_id ?? resp).toString()

    templateHeaderUrl.value = `${URI_MESSAGES}/files/images/${id}`
  } catch (err) {
    console.error('✗ Error subiendo imagen:', err)
  }



  //     const resp = await fetchService.postFormData(`${URI_MESSAGES}/upload-photo-product`, fd)
  //   const id   = (resp?.content?.file_id ?? resp).toString()

  //   templateHeaderUrl.value = `${URI_MESSAGES}/files/images/${id}?size=visual`
  // } catch (err) {
  //   console.error('✗ Error subiendo imagen:', err)
  // }







  
}
 



const headerImageId     = ref('')  // ← image_identifier
const isUploadingHeader = ref(false)
/* ------- state ------- */


const templates = ref(chatStore.templates  )
const selectedTemplate = ref({})
const loading   = ref(false)
const globalFilter = ref('')
const dialogVisible = ref(false)
const saving = ref(false)
const editingId = ref(null)
const resturants = ref([])
const form = ref({ name:'', category:'UTILITY', language:'es_ES' })
const bodyText = ref('')
const buttons  = ref([])
const examples = ref({})
const editingName = ref(null)
const restaurant = ref({})
const users = ref([{}])
const current = ref(  {label: 'PREOCUPANTE',  bg: '#e74c3c', icon: 'fa-triangle-exclamation' }, // rojo
)
/* Imagen HEADER */
const headerImageFile       = ref(null)   // ⬅️ archivo original         (File | null)
const headerImagePreviewUrl = ref('')     // ⬅️ URL local para pre-ver



 const selectedStatuses = ref([])

const colorMap = ref([

  { label: 'SIN DATOS', bg: '#7f8c8d', icon: 'fa-circle-question' },
  { label: 'PREOCUPANTE', bg: '#e74c3c', icon: 'fa-triangle-exclamation' },
  { label: 'CASUAL', bg: '#e67e22', icon: 'fa-person-walking' },
  { label: 'FRECUENTE', bg: '#27ae60', icon: 'fa-repeat' },
  { label: 'TOP', bg: '#2980b9', icon: 'fa-ranking-star' },
  { label: 'ESTRELLA', bg: '#8e44ad', icon: 'fa-star' }
])


/* Función para alternar selección de filtros */
function toggleStatus(button) {
  const label = button.label
  // Si pulsa TODO, limpia todas las selecciones
  if (label === 'TODO') {
    selectedStatuses.value = []
    return
  }
  // Si 'TODO' estaba seleccionado, quítalo
  const idxTodo = selectedStatuses.value.indexOf('TODO')
  if (idxTodo > -1) selectedStatuses.value.splice(idxTodo, 1)
  // Alterna la selección del label
  const idx = selectedStatuses.value.indexOf(label)
  if (idx === -1) selectedStatuses.value.push(label)
  else selectedStatuses.value.splice(idx, 1)
}

/* Computed para filtrar usuarios */
const filteredUsers = computed(() => {
  if (selectedStatuses.value.length === 0) {
    return users.value
  }
  return users.value.filter(u => selectedStatuses.value.includes(u.clasification))
})

/* servicios */
const confirm = useConfirm()
const difundiendo = ref(false)
/* cat / lang / btn types */
const categories = [ {label:'AUTHENTICATION',value:'AUTHENTICATION'}, {label:'MARKETING',value:'MARKETING'}, {label:'UTILITY',value:'UTILITY'} ]
const languages  = [ {label:'Español (CO)',value:'es_CO'},{label:'Español (ES)',value:'es_ES'},{label:'English (US)',value:'en_US'} ]
const buttonTypes= [ {label:'URL',value:'URL'}, {label:'QUICK_REPLY',value:'QUICK_REPLY'} ]

/* filtered */
const filteredTemplates = computed(()=>{
  if(!globalFilter.value) return chatStore.templates
  const txt = globalFilter.value.toLowerCase()
  return chatStore.templates.filter(t=>`${t.name} ${t.category}`.toLowerCase().includes(txt))
})

onMounted( async() => {
  const result = await fetchService.get(`${URI}/restaurants`)
  resturants.value = result
  restaurant.value = result.find(r => r.id == 1)
  if (!restaurant.value == null) {
    return
  }
  fetchTemplates
})


const openToDifundir = (template) => {

  selectedTemplate.value = template
  difundiendo.value = true
}


watch( difundiendo, () => {
  selectedStatuses.value = []
})
/* placeholders */
const placeholders = ref([])
watch(bodyText,val=>{
  const found = Array.from(new Set((val.match(/{{\s*([^{}\s]+)\s*}}/g)||[]).map(p=>p.replace(/{{|}}/g,'').trim())))
  placeholders.value = found
  examples.value = Object.fromEntries(Object.entries(examples.value).filter(([k])=>found.includes(k)))
  found.forEach(k=>{ if(!(k in examples.value)) examples.value[k] = '' })
})

/* lifecycle */
// onMounted()
async function fetchTemplates(){
  loading.value = true
  try{ chatStore.templates = await fetchService.get(`${URI_MESSAGES}/wabas/${restaurant.value.waba_id}/templates/`) } finally { loading.value=false }

  // templates.value = [
  //       {
  //           "name": "hola_monstruos",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "HEADER",
  //                   "format": "IMAGE",
  //                   "example": {
  //                       "header_handle": [
  //                           "https://scontent.whatsapp.net/v/t61.29466-34/491871117_706606121949406_6553986942653382855_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=tB5YvBsHSCAQ7kNvwFsZlX5&_nc_oc=AdkjISSy0ULnk1rymjQp0zy_mtKW9Rjo7DNQcoyGGsL8ZfBGPY6ndgth9UQiPfZKtjI&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=GKQIPoypFCCQmks2rRHSyA&oh=01_Q5Aa1gGbVrmJkdyQOntvZepGG4vFu0khUYb_gz7fxdU9jKLUaQ&oe=685034A5"
  //                       ]
  //                   }
  //               },
  //               {
  //                   "type": "BODY",
  //                   "text": "hola monstruo como vamos"
  //               }
  //           ],
  //           "language": "es",
  //           "status": "PENDING",
  //           "category": "MARKETING",
  //           "sub_category": "CUSTOM",
  //           "id": "706606118616073"
  //       },
  //       {
  //           "name": "saludo_mas_foto",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "este es un saludo con foto"
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "2160964337689084"
  //       },
  //       {
  //           "name": "saludo_con_imagen",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "este es un saludo con imagen"
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "3027921840718980"
  //       },
  //       {
  //           "name": "saludo_2_preba",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "como vamos, que cuentas"
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "736097758752571"
  //       },
  //       {
  //           "name": "saludo_prueba",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "Hola, como va todo"
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "569459862443947"
  //       },
  //       {
  //           "name": "saludo",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "Hola, buenos dias."
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "704055995490439"
  //       },
  //       {
  //           "name": "ayuda",
  //           "previous_category": "UTILITY",
  //           "parameter_format": "POSITIONAL",
  //           "components": [
  //               {
  //                   "type": "BODY",
  //                   "text": "en que le puedo ayudar"
  //               }
  //           ],
  //           "language": "es_ES",
  //           "status": "APPROVED",
  //           "category": "MARKETING",
  //           "correct_category": "MARKETING",
  //           "id": "1767949943936161"
  //       }
  //   ]
  //   loading.value=false
}



const update_users = async()  => {
  users.value = await fetchService.get(`${URI_MESSAGES}/wabas/${restaurant.value.waba_id}/templates/users/${restaurant.value.id}`)
}



watch(restaurant, async (newVal) => {
  if (!newVal) return
  fetchTemplates()
  selectedStatuses.value = []
  await update_users()
},{deep:true})

/* helpers */
function statusSeverity(s){ return {APPROVED:'success',PENDING:'warning',REJECTED:'danger'}[s]||'info' }
function resetForm(){ form.value={name:'',category:'UTILITY',language:'es_ES'}; bodyText.value=''; buttons.value=[]; examples.value={}; editingId.value=null }
function openNew(){ resetForm(); dialogVisible.value=true }


const imageHeader = ref({})
/* título del diálogo */
const dialogTitle = computed(() => editingName.value ? 'Editar plantilla' : 'Nueva plantilla'); 
function openEdit(tpl){
  editingId.value = tpl.id
  form.value = { name:tpl.name, category:tpl.category, language:tpl.language }
  const bodyComp = tpl.components.find(c=>c.type==='BODY')||{text:''}
  bodyText.value = bodyComp.text
  examples.value = {}
  if(bodyComp.example?.body_text_named_params){
    bodyComp.example.body_text_named_params.forEach(({param_name,example})=>{ examples.value[param_name]=example })
  } else if(bodyComp.example?.body_text){
    bodyComp.example.body_text[0].forEach((ex,i)=>{ examples.value[String(i+1)] = ex })
  }
  const btnComp = tpl.components.find(c=>c.type==='BUTTONS')||{buttons:[]}
  buttons.value = btnComp.buttons.map(b=>({type:b.type,text:b.text,url:b.url||''}))

  const headerComp = tpl.components.find(c=>c.type==='HEADER') || { "type": "HEADER", "format": "IMAGE", "example": { "header_handle": [ ] } }
  imageHeader.value = headerComp?.example.header_handle[0]
  dialogVisible.value=true
}


function addButton(){ buttons.value.push({type:'URL',text:'',url:''}) }

/* save */
function buildExample(){
  const keys = placeholders.value
  if(!keys.length) return undefined
  const numeric = keys.every(k=>/^\d+$/.test(k))
  if(numeric){
    const arr = keys.sort((a,b)=>+a-+b).map(k=>examples.value[k]||'')
    return { body_text: [arr] }
  } else {
    return { body_text_named_params: keys.map(k=>({param_name:k, example: examples.value[k]||''})) }
  }
}
/* ---------- SAVE TEMPLATE COMPLETO ---------- */



/* ---------- SAVE TEMPLATE COMPLETO (elige endpoint) ---------- */
/* ---------- SAVE TEMPLATE (com multipart opcional) ---------- */
/* ---------- SAVE TEMPLATE (elige JSON o FormData) ---------- */
async function saveTemplate () {
  // ── Validación mínima
  if (!form.value.name.trim()) return
  saving.value = true

  try {
    /* 1) BODY + botones, SIN header por ahora ------------------ */
    const exampleObj = buildExample()

    const comps = [
      {
        type: 'BODY',
        data: {
          text: bodyText.value,
          ...(exampleObj ? { example: exampleObj } : {})
        }
      }
    ]

    if (buttons.value.length) {
      comps.push({
        type : 'BUTTONS',
        data : { buttons: buttons.value }
      })
    }

    const payload = { ...form.value, components: comps }
    const baseURL = `${URI_MESSAGES}/wabas/${restaurant.value.waba_id}/templates`

    /* 2) Con o sin imagen de header ---------------------------- */
    if (headerImageFile.value) {
      /* ▶ Con HEADER → multipart al endpoint /with-header */
      const fd = new FormData()
      fd.append('template_json', JSON.stringify(payload))
      fd.append('header_image',  headerImageFile.value)

      const url = `${baseURL}/with-header`
      await fetchService.postFormData(url, fd, 'Guardando…')
    } else {
      /* ▶ Sin HEADER → JSON (creación o edición) */
      const url = editingId.value ? `${baseURL}/${editingId.value}` : baseURL
      await fetchService.post(url, payload, 'Guardando…')
    }

    /* 3) Refrescar lista y cerrar ------------------------------ */
    await fetchTemplates()
    dialogVisible.value = false
    resetForm()
    headerImageFile.value       = null
    headerImagePreviewUrl.value = ''
  } catch (err) {
    console.error('✗ Error guardando plantilla:', err)
  } finally {
    saving.value = false
  }
}



/* confirm & delete */
function askRemove(tpl){
  confirm.require({
    message: `¿Eliminar la plantilla "${tpl.name}"?`,
    header: 'Confirmar eliminación',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sí',
    rejectLabel: 'No',
    accept: async () => {
      await fetchService.delete(`${URI_MESSAGES}/wabas/${restaurant.value.waba_id}/templates/${tpl.name}`)
      await fetchTemplates()
    }
  })
}

const sendingBulk = ref(false)
async function broadcastTemplate () {
  if (!selectedTemplate.value) return

  // ◉ Validar que ya exista la URL de la imagen cargada
  if (!templateHeaderUrl.value) {
    confirm.require({
      message   : 'Debes seleccionar una imagen antes de difundir la plantilla.' ,
      header    : 'Imagen requerida',
      icon      : 'pi pi-exclamation-triangle',
      acceptLabel: 'Ok',
      rejectVisible: false
    })
    return
  }

  /* 1) Construir lista de destinatarios */
  const recipients = filteredUsers.value
    .map(u => u.wa_id)
    .filter(id => !!id && id.trim().length > 0)

  if (!recipients.length) {
    console.warn('No hay destinatarios válidos para la difusión')
    return
  }

  /* 2) Payload completo */
  const payload = {
    messaging_product : 'whatsapp',
    employer_id       : login.rawUserData.id.toString(),
    restaurant_id     : `${restaurant.value.id}`,
    template          : selectedTemplate.value,
    template_header_url: templateHeaderUrl.value,
    recipients:['573226892988' ]
  }

  sendingBulk.value = true
  try {
    await fetchService.post(`${URI_MESSAGES}/webhook/send/template/bulk/`, payload, false)
    console.log(`✅ Difusión iniciada para ${recipients.length} usuarios`)
    difundiendo.value = false
  } catch (err) {
    console.error('✗ Error en difusión masiva:', err)
  } finally {
    sendingBulk.value = false
  }
}

/* ------------- RESET imagen al cerrar diálogo ------------- */
watch(difundiendo, val => {
  if (!val) templateHeaderUrl.value = ''
})

/* ------------- RESTO DEL ARCHIVO ORIGINAL SIN CAMBIOS ------------- */


</script>

<style scoped>
.field label { @apply block mb-1; }




.templates-container{
  animation:  active .3s ease;
}


@keyframes active {
    0%{
        opacity: 0;
        transform: translateY(-3rem);
        }}
</style>
