<template>



<Dialog class="mx-2 " v-model:visible="showHistoryDialog" modal :header="`Historial de la pqr  ID   ${currentOrderHistory.pqr_request_id}`" :style="{ width: '40rem',  }">
    
    <Timeline :value="currentOrderHistory.status_history">
        <template #opposite="data" align="">
            <div style="display: flex;flex-direction: column;">
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.timestamp?.split(' ')[0]}}</p>
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.timestamp?.split(' ')?.slice(1,4)?.join(' ')}}</p>
                
            </div>
           
        </template>
        <template #content="data">
            <Tag :style="`background-color:${data.item.color}`">
                <p class="m-0"> <b>{{data.item.status}}</b></p>
            </Tag>
      

            <div>
                
            </div>
            <p v-if="data.item.responsible_name" class="m-0" style="text-transform: capitalize;"> <b>Responsable:</b>  {{data.item.responsible_name?.toLowerCase()}}</p>

            <p class="p-0 m-0" v-if="data.item.value">Le costo a la empresa <b>{{ data.item  }}</b> </p>
            <p  class="p-0 m-0" v-if="data.item.order_id">Orden entregada <b>{{ data.item.order_id}}</b> </p> 
            <p v-if="data.item.notes">
                <b>Notas</b>
                {{ data.item.notes }}
            </p>
            <br>
            <div style="display: flex;gap: 1rem; ">

                <!-- <Button  :disabled="!data.item.notes"  style="height: 2rem;opacity: 0; border-radius: 0.3rem;" cla severity="help" class="" label="Notas"></Button>
                <Button :disabled="!data.item.conflict" style="height: 2rem;border-radius: 0.3rem;" severity="danger" class="mb-4" label="Conflictos"></Button> -->
            </div>
            
        </template>
    </Timeline>


</Dialog>
    


    <div>
        <h4 class="mt-0 py-0"></h4>
    </div>

    <Dialog class="mx-2 " v-model:visible="showPqrGest" modal  :header="`Gestion de la pqr  ID    ${currentPqrGest.pqr_request_id}`" :style="{ width: '50rem',  }">
    
        <div style="display: flex; flex-direction: column;">
            





            <h6 v-if="currentPqrGest.user_name || currentPqrGest.user_phone"><b>Datos del cliente</b> </h6>
            <span v-if="currentPqrGest.user_name"><b>Nombre: </b> {{ currentPqrGest.user_name }}</span>
            <span v-if="currentPqrGest.user_phone"><b>Telefono: </b> {{ currentPqrGest.user_phone }}</span>
            <span v-if="currentPqrGest.order_id"><b>Orden: </b> {{ currentPqrGest.order_id }}</span>
            <!-- <span><b>Direccion: {{ currentPqrGest.user_address }} </b></span> -->

            <h6><b>Historial</b> </h6>
            <Timeline :value="currentPqrGest.status_history">
                <template #opposite="data" align="">
            <div style="display: flex;flex-direction: column;">
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.timestamp?.split(' ')[0]}}</p>
                <p  style="min-width: max-content; margin: 0;padding: 0;" class="p-text-secondary m-0 p-0">{{data.item.timestamp?.split(' ')?.slice(1,4)?.join(' ')}}</p>
            </div>
           
        </template>
        <template #content="data">

            <Tag :style="`background-color:${data.item.color}`">
            <p class="m-0"> <b>{{data.item.status}}</b></p>
        </Tag>
            <div>
                
            </div>
             <p v-if="data.item.responsible_name"  class="m-0" style="text-transform: capitalize;"> <b>Responsable:</b>  {{data.item.responsible_name?.toLowerCase()}}</p>

             <p class="p-0 m-0" v-if="data.item.value">Le costo a la empresa <b>{{ formatToColombianPeso(data.item.value)  }}</b> </p> 
             <p  class="p-0 m-0" v-if="data.item.order_id">Orden entregada <b>{{ data.item.order_id}}</b> </p> 
            <p v-if="data.item.notes">
                <b>Notas</b>
                {{ data.item.notes }}
            </p>
            <br>
            <div style="display: flex;gap: 1rem; ">

                <!-- <Button  :disabled="!data.item.notes"  style="height: 2rem;opacity: 0; border-radius: 0.3rem;" cla severity="help" class="" label="Notas"></Button>
                <Button :disabled="!data.item.conflict" style="height: 2rem;border-radius: 0.3rem;" severity="danger" class="mb-4" label="Conflictos"></Button> -->
            </div>
            
        </template>
            </Timeline>


            <h6><b>Como desea proceder?</b></h6>

            

            <Dropdown v-model="selecte_status_update" :options="allStatus.filter( d => d.id != 2)" optionLabel="name" optionValue="id">

            </Dropdown>


            <div v-if="selecte_status_update">

      

            <div style="display: flex;justify-content: space-between;margin: 1rem 0" v-if="selecte_status_update == 4 || selecte_status_update == 7">
                <h6 class="m-0">Le dio una cortesia del 100% ?</h6>
                <Checkbox binary v-model="costo"></Checkbox>
            </div>


            <div  v-if="selecte_status_update == 4 || selecte_status_update == 7" style="display: flex;justify-content: space-between;margin: 1rem 0">
                <h6 class="m-0">Le dio un bono de descuento?</h6>
                <Checkbox v-model="order" binary></Checkbox>
            </div>


            <div  v-if="(selecte_status_update == 4 || selecte_status_update == 7) &&  order"  >
                <h6 class="m-0 my-3">porcentaje del descuento    </h6>
                <InputNumber   v-model="descuento" style="width: 100%;"></InputNumber>
            </div>


            <div  v-if="(selecte_status_update == 4 || selecte_status_update == 7) && costo || order"  >
                <h6 class="m-0 my-3">Valor de la orden</h6>
                <InputNumber   v-model="costovalue" style="width: 100%;"></InputNumber>
            </div>


       

            <div  v-if="(selecte_status_update == 4 || selecte_status_update == 7) && order || costo"   >
                <h6 class="m-0 my-3">Id de la orden</h6>
                <InputText v-model="inputOrder" style="width: 100%;"></InputText>
            </div>


            <div>
                <h6 class="m-0 my-3">Detalles</h6>
                <Textarea v-model="notes" rows="5" style="resize: none;width: 100%;">

                </Textarea>
            </div>
        

        
            <h6 style="background-color: #ff00002e;;" class="p-3">Recuerde que esta firmando como  <b>{{ login.rawUserData.name }}</b>  y por ende se hace responsable, <b>No preste sus credenciales de Salchigest, cada miembro de la empresa tiene los suyos, muchas gracias</b></h6>


            
        </div>
    </div>

    <template #footer>
        <div style="display: flex;justify-content: end;margin-top: 2rem" >
                <Button @click="sendPqrUpdate" label="Enviar" severity="help"></Button>
            </div>
    </template>

    </Dialog>




    <nav class="nav_bar shadow-2 p-0 my-0 mx-2" style="position: sticky;top: 3rem;max-width: 900px;border-radius:10rem; background-color: white;z-index: 99;">
        <ul class="nav_bar--buttons p-0 m-1" style="">
       
                <li v-for="button in nav_buttons" key="" class="" style="display: flex;align-items: center  ;" >
                  
                    
                   <Tag :style="`background-color:${button.color}`"  style="height: 1.3rem;aspect-ratio: 1 / 1;border-radius: 50%;"></Tag> <Button  @click="() => active_button_nav = button" class="nav_bar--buttons-button p-2" :class="button.id == active_button_nav.id? 'nav_bar--buttons-button-selected': ''" :label="button.name"></Button>
 
                </li>
        </ul>
    </nav>

    <DataTable :paginator="true" :rows="15" style="width: 100%;;"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
       :value="pqrsUser.filter(p =>  p.current_status?.status == active_button_nav?.name )" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">PQRS <b>{{ route.params.section }}</b> </b> </h4>


               <div style="display: flex;gap: 1rem;">
                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar Solicitud..." />

                <Button @click="store.visible_add_pqr = true" label="Nueva PQR" severity="help"></Button>
               </div>
             



           </div>


       </template>





       <column   #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in columview(dataColumns)" :field="column.columnValue" class="my-0 py-2">

           <h6  style="min-width: max-content;" v-if="column.columnType=='date'" class="m-0 p-0">
               {{ contract.data[column.columnValue]?.split('-').reverse().join('-') || '---------'  }}
           </h6>


           

           <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'max-content'" class="m-0 p-0">
               {{ contract.data[column.columnValue] || '---------'  }}
           </h6>

           <h6  v-if="column.columnType == 'other'" class="m-0 p-0">
               {{ contract.data[column.columnValue] || '---------'  }}
           </h6>


           <h6  v-if="column.columnType == 'rating'" class="m-0 p-0">
             <Rating :cancel="false"  v-if="contract.data[column.columnValue] > 0" readonly v-model="contract.data[column.columnValue]"> </Rating>   
           </h6>

           <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'money'" class="m-0 p-0">
               {{formatoPesosColombianos(contract.data[column.columnValue]) || '---------'  }}
           </h6>

       

           <div class="p-2" v-if="column.columnValue == 'current_status'" style="display: flex;gap: .1rem;flex-direction:column;align-items:start;" > 
            <Tag  style="color: white;;" :style="`background-color:${contract.data[column.columnValue]?.color}`">

               
               {{ contract.data[column.columnValue]?.status || '---------' }}  
           </Tag>
           <b>
            {{ contract.data[column.columnValue]?.timestamp || '---------' }}   
           </b>
                
           </div>



              

           <div class="p-2" v-if="column.columnValue == 'channel'" style="display: flex;gap: .1rem;flex-direction:column;align-items:start;" > 
            <Tag  style="color: white;;" :style="`background-color:${contract.data.channel_color}`">

               
               {{ contract.data[column.columnValue] || '---------' }}  
           </Tag>
        
                
           </div>



           <div class="p-2" v-if="column.columnValue == 'tag_name'" style="display: flex;gap: .1rem;flex-direction:column;align-items:start;" > 
            <Tag  style="color: white;;" :style="`background-color:${contract.data.tag_color}`">

               
               {{ contract.data[column.columnValue]  }}  
           </Tag>
        
                
           </div>



           <div class="p-2" v-if="column.columnValue == 'restaurant'" style="display: flex;gap: .1rem;flex-direction:column;align-items:start;" > 
            <Tag  style="color: white;;" :style="`background-color:${contract.data.restaurant_color}`">
               {{ contract.data[column.columnValue]  }}  
           </Tag>
        
           </div>

           
           
       
       </column>


       <Column class="my-0 py-0 px-0 mx-0" style="" header="Interactuar" >
          <template #body="data" >
 
             <div style="display: flex;gap: .5rem;justify-content: center;" class="px-2">
                  <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                  <Button @click="chargePqr(data.data)" label="Gestionar"  severity="help" icon="pi pi-check p-0" class="my-0 py-2"></Button>
                  <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
             </div>
          </template>
         
         </Column>



       </DataTable>


       <pqrUser @reload="update()"></pqrUser>
   
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { pqrsService } from '../../../service/pqrs/pqrsService';
import router from '../../../router';
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import OverlayPanel from 'primevue/overlaypanel';
import Editor from 'primevue/editor';
import { fetchService } from '../../../service/utils/fetchService';
import { URI } from '../../../service/conection';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import Pqrs from './pqrs.vue';
import { loginStore } from '../../../store/user';
import { da, ta } from 'date-fns/locale';
import { formatToColombianPeso } from '../../../service/valoresReactivosCompartidos';

import { PathService } from '@/service/pathService';
import pqrUser from './pqrUser.vue';


import { useReportesStore } from '@/store/reportes';
    const store = useReportesStore()


const notes = ref('')


const inputOrder = ref()

const isActive = PathService.isActiveRoute

const route = useRoute();
const nav_buttons = ref( [


]
)

const columview = (colums) => {
 
        return colums;
    
}

const active_button_nav = ref(

    {
        "id": 2,
        "name": "Generada",
        "description": "Estado inicial de la pqr",
        "exist": true,
        "color": "#3498DB"
    }

    

)

const get_status = (status) => {
    return status.status_id
}

const login = loginStore()

const allStatus = ref([])
const selecte_status_update  = ref()
const chargeHistory = async(historial) => {
    showHistoryDialog.value = true
    currentOrderHistory.value = historial
}


const chargePqr = async(historial) => {
    showPqrGest.value = true
    currentPqrGest.value = historial
}

const currentOrderHistory = ref([])
const currentPqrGest = ref([])
const showHistoryDialog = ref(false)
const showPqrGest = ref(false)

const filters = ref(null);


const initFilters = () => {
   filters.value = {
       global: { value: null, matchMode: FilterMatchMode.CONTAINS }
   };
};

onBeforeMount( () => {
    initFilters()
})


const dataColumns = ref( [



   {
       columnName:'Id',
       columnValue:'pqr_request_id',
       columnType:'other',
       size:'1rem',
       vif:true
   },

   {
       columnName:'Restaurante',
       columnValue:'restaurant',
       columnType:'restaurant',
       size:'1rem',
       vif:true
   },


   {
       columnName:'Clasificacion',
       columnValue:'tag_name',
       columnType:'tag',
       size:'1rem',
       vif:true
   },


   {
       columnName:'Id orden',
       columnValue:'order_id',
       columnType:'other',
       size:'1rem',
       vif:true
   },


   {
       columnName:'Canal',
       columnValue:'channel',
       columnType:'tag',
       size:'4rem',
       vif:true
   },


   {
       columnName:'Sede',
       columnValue:'site_name',
       columnType:'other',
       size:'4rem',
       vif:true
   },
   {
       columnName:'Red',
       columnValue:'red',
       columnType:'other',
       size:'4rem',
       vif:true
   },


   {
       columnName:'Calificacion',
       columnValue:'rating',
       columnType:'rating',
        size:'10rem',
        vif:true
   },


   {
       columnName:'Tipo',
       columnValue:'request_type',
       columnType:'other',
        size:'15rem',
        vif:true
   },

   {
       columnName:'Comentarios',
       columnValue:'request_content',
       columnType:'other',
       size:'20rem',
       vif:true
   },
   {
       columnName:'Responsable',
       columnValue:'responsible_name',
       columnType:'other',
       size:'20rem',
       vif:true
   },

   {
       columnName:'Estado',
       columnValue:'current_status',
       columnType:'status',
       size:'15rem',
       vif:true
   },






//    {
//        columnName:'Fecha de solicitud',
//        columnValue:'created_at_formated',
//        columnType:'max-content'
//    },

//    {
//        columnName:'Nombre del solicitante',
//        columnValue:'creator_name',
//        columnType:'other'

//    },

//    {
//        columnName:'Cargo del solicitante',
//        columnValue:'creator_position',
//        columnType:'other'

//    },
//    {
//        columnName:'Area de solicitud',
//        columnValue:'area_name',
//        columnType:'max-content'

//    },
//    {
//       columnName:'Justificacion de la requisicion',
//       columnValue:'requisition_description',
//       columnType:'other'
//   },

  //  {
  //      columnName:'Estado actual',
  //      columnValue:'lap_name',
  //      columnType:'tag'
  //  },

   // {
   //     columnName:'Dias restantes',
   //     columnValue:'days_remaining',
   //     columnType:'other'
   // },

   // {
   //     columnName:'Salario',
   //     columnValue:'salary',
   //     columnType:'money'
   // },
   // {
   //     columnName:'Creado por',
   //     columnValue:'creator_name',
   //     columnType:'max-content'
   // },
   // {
   //     columnName:'Estado',
   //     columnValue:'active',
   //     columnType:'bool'
   // },

])

const tags = ref({
   "2": "#3498DB",  // Azul brillante
   "4": "#2ECC71",  // Verde esmeralda
   "5": "#16A085",  // Turquesa oscuro
   "6": "#E74C3C",  // Rojo alizarina
   "7": "#F39C12"   // Amarillo oscuro
});

const newPqrs = ref({ question: '', answer: '' });
const pqrsToDelete = ref({});
const controlVisible = ref({});
const previousIndex = ref(null);

const pqrsUser = ref([{}]);
const visibles = ref({});
const editing = ref(false);
const visibleAnswers = ref({});

const costo = ref(false)
const costovalue = ref()
const order = ref(false)

const open_to_edit = (pq) => {
    editing.value = true;
    visibles.value.showDialogToAddPqrs = true;
    newPqrs.value = { ...pq };
};

const openToCreatePqrs = () => {
    editing.value = false;
    visibles.value.showDialogToAddPqrs = true;
};

const openToDelete = (pqrs) => {
    pqrsToDelete.value = pqrs;
    visibles.value.showDeleteDialog = true;
};

const toggle = (index) => {
    if (previousIndex.value !== null && previousIndex.value !== index) {
        controlVisible.value[previousIndex.value] = false;
    }
    controlVisible.value[index] = !controlVisible.value[index];
    previousIndex.value = controlVisible.value[index] ? index : null;
};

const update = async () => {
    pqrsUser.value = await fetchService.get(`${URI}/get-all-pqrs`);
    const status = await fetchService.get(`${URI}/get-all-pqrs-status`);

    allStatus.value = status;
    nav_buttons.value = status
};
const deletePqrs = async (id) => {
    visibles.value.showDeleteDialog = false;
    await pqrsService.deletePqrs(id);
    update();
};

onMounted(async () => {
    update();
});


watch(selecte_status_update, () => {
    resetPqrForm()
})

const resetPqrForm = () => {
    // selecte_status_update.value = null;  
    costovalue.value = null;
    notes.value = '';
    inputOrder.value = null;
    costo.value = false;
    order.value = false;
};


const descuento = ref()


const sendPqrUpdate = async () => {
    // Recolectar los datos del formulario
    const discountedValue = descuento.value && costovalue.value 
        ? (costovalue.value - (costovalue.value * (descuento.value / 100))).toFixed(2)
        : costovalue.value;

    const dataToSend = {
        pqr_request_id: currentPqrGest.value.pqr_request_id,
        status_id: selecte_status_update.value,
        responsible_id: login.rawUserData.id, // Usa el ID del usuario actual
        value: discountedValue || null, // Envía el valor con descuento o el valor total
        notes: descuento.value && costovalue.value 
            ? `Se le dio un descuento de ${descuento.value}% en una orden de ${formatToColombianPeso(costovalue.value)}, quedando en un valor de ${formatToColombianPeso(discountedValue)}`
            : '',
        order_id: inputOrder.value || null
    };
    try {
        // Realizar el POST usando el servicio de PQRS
        await fetchService.post( `${URI}/change-pqr-status`,dataToSend);

        // Actualizar la lista de PQRS y cerrar el diálogo
        update();
        showPqrGest.value = false;
        resetPqrForm()
    } catch (error) {
        console.error('Error al enviar la actualización de la PQR:', error);
    }
};


watch(() => route.params.section_id, () => {
    update();
}, { deep: true });

const createNewPqrs = async () => {
    const dataToSend = {
        question: newPqrs.value.question,
        answer: newPqrs.value.answer,
        place_id: route.params.section_id,
    };

    visibles.value.showDialogToAddPqrs = false;
    if (editing.value) {
        await pqrsService.updatePqrs(dataToSend, newPqrs.value.id);
    } else {
        await pqrsService.createPqrs(dataToSend);
    }

    update();
};
</script>

<style scoped>
.pqrs {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 900px;
}

.pqrs-element {
    border-radius: .3rem;
}

.bar {
    max-width: 900px;
    display: flex;
    justify-content: end;
}

.container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
}

@keyframes an_show_actions {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
    }
}

@keyframes an_show_actions_2 {
    100% {
        opacity: 0;
        transform: translateX(20px);
    }

    0% {
        opacity: 1;
    }
}

.button-visible {
    animation: an_show_actions .3s ease;
}

.button-hide {
    animation: an_show_actions .3s ease;
}

/* Transición de fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}




.nav_bar{

width: 100%;
display: flex;
justify-content: center;
border-radius: 30rem;
overflow: hidden;

}

.nav_bar--buttons{
display: flex;
list-style: none;
gap: 1rem;


}

.nav_bar--buttons-button{
background-color: transparent;
padding: .3rem 1rem;
border-radius: 0;
min-width: max-content;


}
.nav_bar--buttons-button-selected { 
box-shadow: 0 .3rem 0px var(--primary-color);
}
</style>
