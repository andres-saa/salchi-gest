<!-- TemplateManager.vue - Gestor de plantillas de WhatsApp con PrimeVue ConfirmDialog (sin SweetAlert) -->
<template>
  
  <div class="p-4 templates-container" style="max-width: 70rem;width: 100%; margin: auto; background-color: white;border-radius: 1rem;transition: all .3s ease;">
    <!-- Encabezado y búsqueda -->

  <div style="height: 100%;">
        
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4" style="align-items: center;">
        <h2 class="text-2xl font-bold whitespace-nowrap m-0 p-0" style="min-width: max-content;">Plantillas de WhatsApp</h2>
        <span class="p-input-icon-left w-full md:w-80 my-3" style="height: 100%;">
          <i class="pi pi-search" />
          <InputText v-model.trim="globalFilter" placeholder="Buscar…" class="w-full" />
        </span>
        <Dropdown v-model="restaurant" :options="resturants.filter((r) => r.exist)" optionLabel="name" optionValue="waba_id" placeholder="Selecciona un restaurante" class="w-full md:w-80 my-3" />

      </div>
        <!-- Tabla de plantillas -->
        <DataTable
        :value="filteredTemplates"
        dataKey="id"
        paginator :rows="10" responsiveLayout="scroll"
        :loading="loading" :globalFilterFields="['name','category']"
        class="shadow-md rounded-xl overflow-hidden"
      >
        <Column class="my-1 py-1" field="name" header="Nombre" bodyClass="font-medium" />
        <Column class="my-1 py-1" field="category" header="Categoría" />
        <Column class="my-1 py-1"  field="language" header="Idioma" />
        <Column class="my-1 py-1" header="Estado">
          <template #body="{data}">
            <Tag :severity="statusSeverity(data.status)" >{{ data.status }}</Tag>
          </template>
        </Column>
        <Column class="my-1 py-1" headerStyle="width:8rem" header="Acciones">
          <template #body="{data}">
            <div class="flex gap-2">
              <Button icon="pi pi-eye" rounded text severity="secondary" @click="openEdit(data)" />
              <Button icon="pi pi-trash" rounded text severity="danger"  @click="askRemove(data)" />
              <Button icon="pi pi-sync"  label="Difundir" severity="danger"  @click="askRemove(data)" />

            </div>
          </template>
        </Column>
      </DataTable>

      <!-- Botón nueva plantilla -->

      <div style="display: flex;  width:100%; justify-content: end; margin-top: 1rem;">
        <Button label="Nueva plantilla" icon="pi pi-plus" severity="help" class="w-full md:w-auto" @click="openNew" />

      </div>

      <!-- Diálogo de creación / edición -->
      <Dialog v-model:visible="dialogVisible" :header="dialogTitle" modal class="" style="width: 90vw; max-width: 60rem; min-width: 50rem;">
        <div class="space-y-4">
          <!-- Datos básicos -->
          <div class=" md:grid-cols-2 gap-3">
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
          <Button label="Cancelar" text severity="secondary" @click="dialogVisible=false" />
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

/* ------- state ------- */
const templates = ref([])
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
/* servicios */
const confirm = useConfirm()

/* cat / lang / btn types */
const categories = [ {label:'AUTHENTICATION',value:'AUTHENTICATION'}, {label:'MARKETING',value:'MARKETING'}, {label:'UTILITY',value:'UTILITY'} ]
const languages  = [ {label:'Español (CO)',value:'es_CO'},{label:'Español (ES)',value:'es_ES'},{label:'English (US)',value:'en_US'} ]
const buttonTypes= [ {label:'URL',value:'URL'}, {label:'QUICK_REPLY',value:'QUICK_REPLY'} ]

/* filtered */
const filteredTemplates = computed(()=>{
  if(!globalFilter.value) return templates.value
  const txt = globalFilter.value.toLowerCase()
  return templates.value.filter(t=>`${t.name} ${t.category}`.toLowerCase().includes(txt))
})

onMounted( async() => {
  resturants.value = await fetchService.get(`${URI}/restaurants`)
  restaurant.value = resturants.value[0]?.waba_id || null
  if (!restaurant.value == null) {
    return
  }
  fetchTemplates
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
  try{ templates.value = await fetchService.get(`${URI_MESSAGES}/wabas/${restaurant.value}/templates/`) } finally { loading.value=false }
}

watch(restaurant, async (newVal) => {
  if (!newVal) return
  fetchTemplates()
})

/* helpers */
function statusSeverity(s){ return {APPROVED:'success',PENDING:'warning',REJECTED:'danger'}[s]||'info' }
function resetForm(){ form.value={name:'',category:'UTILITY',language:'es_ES'}; bodyText.value=''; buttons.value=[]; examples.value={}; editingId.value=null }
function openNew(){ resetForm(); dialogVisible.value=true }



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

async function saveTemplate(){
  if(!form.value.name.trim()) return
  saving.value = true
  try{
    const exampleObj = buildExample()
    const comps = [
      {
        type: 'BODY',
        data: {
          text: bodyText.value,
          ...(exampleObj ? { example: exampleObj } : {})
        }
      },
      ...(buttons.value.length ? [{ type:'BUTTONS', data:{ buttons: buttons.value }}] : [])
    ]
    const payload = { ...form.value, components: comps }

    if(editingId.value){
      // Meta actualiza con ?name=<template_name>
      await fetchService.post(`${URI_MESSAGES}/wabas/${restaurant.value}/templates/${editingId.value}`, payload)
    } else {
      await fetchService.post(`${URI_MESSAGES}/wabas/${restaurant.value}/templates`, payload)
    }

    await fetchTemplates()
    dialogVisible.value = false
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
      await fetchService.delete(`${URI_MESSAGES}/wabas/${restaurant.value}/templates/${tpl.name}`)
      await fetchTemplates()
    }
  })
}
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
