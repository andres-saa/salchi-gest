<template>


<ConfirmDialog />



    <nav class="nav_bar shadow-2 p-0 my-0 mx-2" style="position: sticky;top: 3rem;max-width: 900px;border-radius:10rem; background-color: white;z-index: 99;">
        <ul class="nav_bar--buttons p-0 m-1" style="">
       
                <li v-for="button in nav_buttons" key="" class="" style="display: flex;align-items: center  ;" >
                  
                    
                   <!-- <Tag :style="`background-color:${button.color}`"  style="height: 1.3rem;aspect-ratio: 1 / 1;border-radius: 50%;"></Tag>  -->
                   <Button  @click="() => active_button_nav = button" class="nav_bar--buttons-button p-2" :class="button.name == active_button_nav.name? 'nav_bar--buttons-button-selected': ''" :label="button.name"></Button>
 
                </li>
        </ul>
    </nav>

    <DataTable  :paginator="true" :rows="15" style="width: 100%;;" 
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 mX-auto mt-7"
       :value="pqrsUser.filter(p => p.status == active_button_nav.name)" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">SOLICITUDES DE FRANQUICIAS {{ active_button_nav.name }} <b></b> </b> </h4>


               <div style="display: flex;gap: 1rem;">
                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar Solicitud..." />

                <Button @click="descargar_excel()" label="Descargar Registros" severity="help"></Button>

                <Button @click="descargar_excel_todo()" label="Descargar Todo" severity="help"></Button>
               </div>
             



           </div>


       </template>





       <column   #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in columview(dataColumns)" :field="column.columnValue" class="my-0 py-2">

           <h6  style="min-width: max-content;" v-if="column.columnType=='date'" class="m-0 p-0">
               {{ contract.data[column.columnValue]?.split('-').reverse().join('-') || '---------'  }}
           </h6>



           <h6  style="min-width: max-content;" v-if="column.columnType=='bool'" class="m-0 p-0">
               {{ contract.data[column.columnValue]? 'Si': 'No' || '---------'  }}
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


       <Column class="my-0 py-2 px-0 mx-0" style="" header="Interactuar" >
          <template #body="data" >
 
             <div style="display: flex;gap: .5rem; justify-content: center;flex-direction: column;" class="px-2">
                  <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                  <Button v-if="data.data.status != 'Tomada en cuenta'"
                        @click="confirmTomarEnCuenta(data.data)"
                        style="min-width: max-content;"
                        label="Tomar en cuenta"
                        severity="help"
                        icon="pi pi-check p-0"
                        class="my-0 py-2"
                    ></Button>
                    <Button  v-if="data.data.status != 'Descartada'"
                        @click="confirmDescartar(data.data)"
                        label="Descartar"
                        severity="danger"
                        icon="pi pi-times p-0"
                        class="my-0 py-2"
                    ></Button>
                  <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
             </div>
          </template>
         
         </Column>



       </DataTable>


       <!-- <pqrUser @reload="update()"></pqrUser> -->
   
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { pqrsService } from '@/service/pqrs/pqrsService';
import { fetchService } from '@/service/utils/fetchService';
import { URI } from '@/service/conection';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { useRoute } from 'vue-router';
import { loginStore } from '@/store/user';
import { formatToColombianPeso } from '@/service/valoresReactivosCompartidos';
import { PathService } from '@/service/pathService';
import pqrUser from '../pqrs/pqrUser.vue';
import * as XLSX from 'xlsx';
import { useConfirm } from 'primevue/useconfirm'; // Import useConfirm

import { useReportesStore } from '@/store/reportes';
import { da } from 'date-fns/locale';
    const store = useReportesStore()
    const confirm = useConfirm(); // Initialize useConfirm


const notes = ref('')


const inputOrder = ref()

const isActive = PathService.isActiveRoute

const route = useRoute();
const nav_buttons = ref( [
{
name:'Pendiente'
},

{
name:'Tomada en cuenta'
}
,
{
name:'Descartada'
}

]
)



const descargar_excel = async () => {

// loadingStore.setLoading(true,"generando descargas")


const data = pqrsUser.value.filter(p => p.status == active_button_nav.value.name).map(item => {
  const row = {};
  dataColumns.value.forEach(col => {
    row[col.columnName] = item[col.columnValue];
  });
  return row;
});



const worksheet = XLSX.utils.json_to_sheet(data);
function sizeToWidth(sizeStr) {
  // Extract numeric value from size string (e.g., '2rem' -> 2)
  const num = parseFloat(sizeStr);
  // Convert rem units to approximate character width
  const width = num * 10; // Adjust multiplier as needed
  // Ensure the width does not exceed 100
  return Math.min(width, 50);
}

// Set column widths based on 'size' in dataColumns
worksheet["!cols"] = dataColumns.value.map(col => ({ wch: sizeToWidth(col.size) }));

const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

XLSX.writeFile(workbook, `Reporte de franquicias ${active_button_nav.value.name}.xlsx`);
// loadingStore.setLoading(false,"generando descargas")


};


const descargar_excel_todo = async () => {

// loadingStore.setLoading(true,"generando descargas")


const data = pqrsUser.value.map(item => {
  const row = {};
  dataColumns.value.forEach(col => {
    row[col.columnName] = item[col.columnValue];
  });
  return row;
});



const worksheet = XLSX.utils.json_to_sheet(data);
function sizeToWidth(sizeStr) {
  // Extract numeric value from size string (e.g., '2rem' -> 2)
  const num = parseFloat(sizeStr);
  // Convert rem units to approximate character width
  const width = num * 10; // Adjust multiplier as needed
  // Ensure the width does not exceed 100
  return Math.min(width, 50);
}

// Set column widths based on 'size' in dataColumns
worksheet["!cols"] = dataColumns.value.map(col => ({ wch: sizeToWidth(col.size) }));

const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

XLSX.writeFile(workbook, `Reporte de franquicias todas.xlsx`);
// loadingStore.setLoading(false,"generando descargas")


};


const columview = (colums) => {
 
        return colums;
    
}

const active_button_nav = ref(
  {  name:'Pendiente'}

    

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


const confirmTomarEnCuenta = (item) => {
  confirm.require({
    message: '¿Está seguro de que desea tomar en cuenta esta solicitud?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      tomarEnCuenta(item);
    },
    reject: () => {
      // Do nothing
    },
  });
};

const confirmDescartar = (item) => {
  confirm.require({
    message: '¿Está seguro de que desea descartar esta solicitud?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      descartar(item);
    },
    reject: () => {
      // Do nothing
    },
  });
};



const tomarEnCuenta = async(solicitud) => {
    solicitud.status = 'Tomada en cuenta'
    await fetchService.put(`${URI}/update_franquicia_request/${solicitud.id}`,solicitud)
}



const descartar = async(solicitud) => {
    solicitud.status = 'Descartada'
    await fetchService.put(`${URI}/update_franquicia_request/${solicitud.id}`,solicitud)
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


const dataColumns = ref([

  {
    columnName: 'Id',
    columnValue: 'id',
    columnType: 'other',
    size: '1rem',
    vif: true
  },


  {
    columnName: 'Fecha y Hora',
    columnValue: 'formatted_date',
    columnType: 'other',
    size: '3rem',
    vif: true
  },


  {
    columnName: 'Nombre',
    columnValue: 'name',
    columnType: 'other',
    size: '2rem',
    vif: true
  },

  {
    columnName: 'Telefono',
    columnValue: 'phone',
    columnType: 'other',
    size: '2rem',
    vif: true
  },

  {
    columnName: 'Email',
    columnValue: 'email',
    columnType: 'other',
    size: '3rem',
    vif: true
  },

  {
    columnName: 'Motivo',
    columnValue: 'reason',
    columnType: 'other',
    size: '20rem',
    vif: true
  },

  {
    columnName: 'Capacidad de inversion',
    columnValue: 'investment_capacity',
    columnType: 'other',
    size: '3rem',
    vif: true
  },

  {
    columnName: 'Zona de interes',
    columnValue: 'zone_of_interest',
    columnType: 'other',
    size: '2rem',
    vif: true
  },

  {
    columnName: 'Ciudad',
    columnValue: 'city',
    columnType: 'other',
    size: '2rem',
    vif: true
  },

  {
    columnName: 'Esta en sector gastronomico?',
    columnValue: 'is_in_gastronomic_sector',
    columnType: 'bool',
    size: '2rem',
    // vif: true
  },

  {
    columnName: 'Participara en la operacion?',
    columnValue: 'will_participate_in_operation',
    columnType: 'bool',
    size: '2rem',
    vif: true
  },

  {
    columnName: 'Fuente de ingresos',
    columnValue: 'source_of_income',
    columnType: 'other',
    size: '3rem',
    vif: true
  },

  {
    columnName: 'Estado',
    columnValue: 'status',
    columnType: 'other',
    size: '3rem',
    vif: true
  },


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
    pqrsUser.value = await fetchService.get(`${URI}/get_franquicia_request`);
    // const status = await fetchService.get(`${URI}/get-all-pqrs-status`);

    allStatus.value = status;
    // nav_buttons.value = status
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
