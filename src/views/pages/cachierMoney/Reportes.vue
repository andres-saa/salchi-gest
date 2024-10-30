<template>



    <div class="container px-2">
    
        <!-- <p class="text-2xl my-0" > <b>Filtro</b> </p> -->
         

        <div class="my-3 shadow p-2" style="width: 100%;border-radius: .5rem; min-width: 400px; display: flex;justify-content: center;gap: 1rem;align-items: center;">
            <h6 class="m-0"><b>Sedes</b></h6>
            <MultiSelect v-model="selectedSites" filter="" :options="nav_buttons.filter(s => s.show_on_web)" optionLabel="site_name" style="width: 200px;"></MultiSelect>

            <h6 class="m-0"><b>Desde</b></h6>
            <Calendar style="width: 8rem;"  dateFormat="dd/mm/yy" v-model="start_date"></Calendar>

            <h6 class="m-0"><b>Hasta</b></h6>
            <Calendar style="width: 8rem;" dateFormat="dd/mm/yy"  v-model="end_date"></Calendar>

            <Button @click="getCachier" label="Buscar" severity="help"></Button>
        </div>

        <nav class="nav_bar shadow-2 p-0 my-0 mx-2"  style="position: sticky; top: 0rem;width: 100%;min-width: 1200px ;overflow: auto; border-radius:.5rem; background-color: white;z-index: 99;">
            <ul class="nav_bar--buttons p-0 m-1" style="">
           
                    <li v-for="button in selectedSites.filter(s => s.show_on_web)" key="" class="">
                      
                        
                        <Button @click="selecte_site = button"   class="nav_bar--buttons-button p-2" :class="selecte_site.site_id == button.site_id? 'nav_bar--buttons-button-selected': ''" :label="button.site_name"></Button>
    
                    </li>
         
                
            </ul>
        </nav>


        
        <h1 class="px-4" v-if="selectedSites.length> 0 && cachier_money?.report  "  style="text-align: end;width: 100%;border-radius: .5rem; background-color: #00ff365e;"><b>DEBE TENER  {{ formatoPesosColombianos(sumReceivedValues(cachier_money?.report?.filter(c => c.site_id == selecte_site.site_id)) - sumReceivedValues(cachier_money?.shops?.filter(c => c.site_id == selecte_site.site_id)) - sumReceivedValues(cachier_money?.outputs?.filter(c => c.site_id == selecte_site.site_id))) }}</b></h1>

        <div style="display: flex;width: 100%;justify-content: end;">
            <Button label="Descargar Excel" severity="help" @click="downloadExcel" class="download-button" />

        </div>

        <DataTable :paginator="true" :rows="15" style="width: 100%;;min-width: 900px;"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
       :value="cachier_money?.report?.filter(c => c.site_id == selecte_site.site_id)" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <!-- <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">PQRS <b>{{ route.params.section }}</b> </b> </h4> -->
               <p class="text-2xl my-3" > <b>Entregado por los cajeros</b> </p>

               <!-- <div style="display: flex;gap: 1rem;">
                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar Solicitud..." /> -->

                <!-- <Button @click="store.visible_add_pqr = true" label="Nueva PQR" severity="help"></Button> -->
               <!-- </div> -->
             



           </div>


       </template>


       <template #footer>


        <div class="px-4" style="display: flex;justify-content: end;">
            <h3><b> TOTAL: {{formatoPesosColombianos(sumReceivedValues(cachier_money?.report?.filter(c => c.site_id == selecte_site.site_id)))  }}</b></h3>
        </div>
      


       </template>


       <column   #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in dataColumns" :field="column.columnValue" class="my-0 py-2">

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
           
       
       </column>


       <!-- <Column class="my-0 py-0 px-0 mx-0" style="" header="Interactuar" >
          <template #body="data" >
 
             <div style="display: flex;gap: .5rem;justify-content: center;" class="px-2"> -->
                  <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                  <!-- <Button @click="chargePqr(data.data)" label="Gestionar"  severity="help" icon="pi pi-check p-0" class="my-0 py-2"></Button> -->
                  <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
             <!-- </div>
          </template>
         
         </Column> -->



       </DataTable>


       <DataTable :paginator="true" :rows="15" style="width: 100%;;min-width: 900px;"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
       :value="cachier_money?.shops?.filter(c => c.site_id == selecte_site.site_id)" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <!-- <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">PQRS <b>{{ route.params.section }}</b> </b> </h4> -->
               <p class="text-2xl my-0" > <b>Compras</b> </p>

  


           </div>


       </template>





       <column   #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in dataColumns2" :field="column.columnValue" class="my-0 py-2">

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
           
       
       </column>


       <!-- <Column class="my-0 py-0 px-0 mx-0" style="" header="Interactuar" >
          <template #body="data" >
 
             <div style="display: flex;gap: .5rem;justify-content: center;" class="px-2"> -->
                  <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                  <!-- <Button @click="chargePqr(data.data)" label="Gestionar"  severity="help" icon="pi pi-check p-0" class="my-0 py-2"></Button> -->
                  <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
             <!-- </div>
          </template>
         
         </Column> -->

         <template #footer>


            <div class="px-4" style="display: flex;justify-content: end;">
                <h3><b> TOTAL: {{formatoPesosColombianos(sumReceivedValues(cachier_money?.shops?.filter(c => c.site_id == selecte_site.site_id)))  }}</b></h3>
            </div>



            </template>


       </DataTable>

       <DataTable :paginator="true" :rows="15" style="width: 100%;;min-width: 900px;"
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
       :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
       :value="cachier_money?.outputs?.filter(c => c.site_id == selecte_site.site_id)" tableStyle="min-width: 50rem;" :filters="filters">
       <template #header>
           <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
               <!-- <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">PQRS <b>{{ route.params.section }}</b> </b> </h4> -->
               <p class="text-2xl my-0" > <b>Gastos</b> </p>



           </div>


       </template>





       <column   #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in dataColumns2" :field="column.columnValue" class="my-0 py-2">

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
           
       
       </column>


       <!-- <Column class="my-0 py-0 px-0 mx-0" style="" header="Interactuar" >
          <template #body="data" >
 
             <div style="display: flex;gap: .5rem;justify-content: center;" class="px-2"> -->
                  <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                  <!-- <Button @click="chargePqr(data.data)" label="Gestionar"  severity="help" icon="pi pi-check p-0" class="my-0 py-2"></Button> -->
                  <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
             <!-- </div>
          </template>
         
         </Column> -->



         <template #footer>


            <div class="px-4" style="display: flex;justify-content: end;">
                <h3><b> TOTAL: {{formatoPesosColombianos(sumReceivedValues(cachier_money?.outputs?.filter(c => c.site_id == selecte_site.site_id)))  }}</b></h3>
            </div>



            </template>


       </DataTable>
    

     
    </div>
    
    
    
    
    </template>
    
    
    <script setup>
    
    import { onMounted, ref } from 'vue';
    import { PathService } from '../../../service/pathService';
    import { RouterLink } from 'vue-router';
    import router from '../../../router';
    
    import { fetchService } from '../../../service/utils/fetchService';
    import { URI } from '../../../service/conection';
    import { FilterMatchMode, PrimeIcons } from 'primevue/api';
    import { onBeforeMount } from 'vue';
    import { formatoPesosColombianos } from '../callCenter/service/formatoPesos';
    import { saveAs } from 'file-saver';
    import * as XLSX from 'xlsx';
    import { useToast } from 'primevue/usetoast';
    const filters = ref(null);


    const downloadExcel = () => {
    // Crear un nuevo libro de trabajo
    const wb = XLSX.utils.book_new();

    // Crear hojas para cada tipo de datos con encabezados en español
    if (cachier_money.value) {
        // Mapear los datos a un nuevo objeto con claves en español
        const reportData = cachier_money.value.report.map(item => ({
            Fecha: item.transaction_date,
            Cajero: item.cachier_name,
            'Valor Entregado': item.received_value,
            Jornada: item.work_schedule
        }));
        const wsReport = XLSX.utils.json_to_sheet(reportData);
        XLSX.utils.book_append_sheet(wb, wsReport, "Reportes de Caja");

        const shopsData = cachier_money.value.shops.map(item => ({
            Fecha: item.date,
            Responsable: item.responsible,
            Valor: item.value,
            Concepto: item.content,
            Jornada: item.schedule
        }));
        const wsShops = XLSX.utils.json_to_sheet(shopsData);
        XLSX.utils.book_append_sheet(wb, wsShops, "Compras");

        const outputsData = cachier_money.value.outputs.map(item => ({
            Fecha: item.date,
            Responsable: item.responsible,
            Valor: item.value,
            Concepto: item.content,
            Jornada: item.schedule
        }));
        const wsOutputs = XLSX.utils.json_to_sheet(outputsData);
        XLSX.utils.book_append_sheet(wb, wsOutputs, "Gastos");
    }

    // Generar el archivo Excel
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "DatosFinancieros.xlsx");
};


    const selecte_site = ref({})

    const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
    };

    onBeforeMount( () => {
    initFilters()
})

    const selectedSites = ref([])
    const start_date = ref()
    const end_date = ref()
    const isActive = PathService.isActiveRoute
    const nav_buttons = ref( [
    
       
    ]
    )


    function sumReceivedValues(transactions=[]) {
    return transactions.reduce((acc, transaction) => acc + (transaction.received_value || 0), 0);
}


    const dataColumns2 = ref( [



{
    columnName:'Fecha',
    columnValue:'date',
    columnType:'other',
    size:'1rem',
    vif:true
},

{
    columnName:'Responsable',
    columnValue:'responsible',
    columnType:'other',
    size:'1rem',
    vif:true
},




{
    columnName:'Valor',
    columnValue:'value',
    columnType:'money',
    size:'1rem',
    vif:true
},

{
    columnName:'Concepto',
    columnValue:'content',
    columnType:'other',
    size:'1rem',
    vif:true
},

{
    columnName:'Jornada',
    columnValue:'schedule',
    columnType:'other',
    size:'1rem',
    vif:true
},


// {
//     columnName:'Clasificacion',
//     columnValue:'tag_name',
//     columnType:'tag',
//     size:'1rem',
//     vif:true
// },


// {
//     columnName:'Id orden',
//     columnValue:'order_id',
//     columnType:'other',
//     size:'1rem',
//     vif:true
// },


// {
//     columnName:'Canal',
//     columnValue:'channel',
//     columnType:'tag',
//     size:'4rem',
//     vif:true
// },


// {
//     columnName:'Sede',
//     columnValue:'site_name',
//     columnType:'other',
//     size:'4rem',
//     vif:true
// },
// {
//     columnName:'Red',
//     columnValue:'red',
//     columnType:'other',
//     size:'4rem',
//     vif:true
// },


// {
//     columnName:'Calificacion',
//     columnValue:'rating',
//     columnType:'rating',
//      size:'10rem',
//      vif:true
// },


// {
//     columnName:'Tipo',
//     columnValue:'request_type',
//     columnType:'other',
//      size:'15rem',
//      vif:true
// },

// {
//     columnName:'Comentarios',
//     columnValue:'request_content',
//     columnType:'other',
//     size:'20rem',
//     vif:true
// },

// {
//     columnName:'Estado',
//     columnValue:'current_status',
//     columnType:'status',
//     size:'15rem',
//     vif:true
// },






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



const dataColumns = ref( [



{
    columnName:'Fecha',
    columnValue:'transaction_date',
    columnType:'other',
    size:'1rem',
    vif:true
},

{
    columnName:'Cajero',
    columnValue:'cachier_name',
    columnType:'other',
    size:'1rem',
    vif:true
},


{
    columnName:'Valor entregado',
    columnValue:'received_value',
    columnType:'money',
    size:'1rem',
    vif:true
},



{
    columnName:'Jornada',
    columnValue:'work_schedule',
    columnType:'other',
    size:'1rem',
    vif:true
},


// {
//     columnName:'Clasificacion',
//     columnValue:'tag_name',
//     columnType:'tag',
//     size:'1rem',
//     vif:true
// },


// {
//     columnName:'Id orden',
//     columnValue:'order_id',
//     columnType:'other',
//     size:'1rem',
//     vif:true
// },


// {
//     columnName:'Canal',
//     columnValue:'channel',
//     columnType:'tag',
//     size:'4rem',
//     vif:true
// },


// {
//     columnName:'Sede',
//     columnValue:'site_name',
//     columnType:'other',
//     size:'4rem',
//     vif:true
// },
// {
//     columnName:'Red',
//     columnValue:'red',
//     columnType:'other',
//     size:'4rem',
//     vif:true
// },


// {
//     columnName:'Calificacion',
//     columnValue:'rating',
//     columnType:'rating',
//      size:'10rem',
//      vif:true
// },


// {
//     columnName:'Tipo',
//     columnValue:'request_type',
//     columnType:'other',
//      size:'15rem',
//      vif:true
// },

// {
//     columnName:'Comentarios',
//     columnValue:'request_content',
//     columnType:'other',
//     size:'20rem',
//     vif:true
// },

// {
//     columnName:'Estado',
//     columnValue:'current_status',
//     columnType:'status',
//     size:'15rem',
//     vif:true
// },






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


const formatDate = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    }


    const cachier_money = ref([])
    
    const navigateTo = (route,id) => {
    
        router.push({
            name:'pqrs-section',
            params:{section_id:id, section:route},
    
        })
    
    }
    
    onMounted( async() => {
        

       nav_buttons.value = await fetchService.get(`${URI}/sites`)
    //    cachier_money.value = await fetchService.get(`${URI}/get-all-cachier-money/`)
    })
    


            const getCachier = async() => {
        // Verificar que haya sitios seleccionados
        if (!selectedSites.value || selectedSites.value.length === 0) {
            alert('Por favor, selecciona al menos una sede.');
            return;
        }

        // Verificar que las fechas de inicio y fin estén presentes
        if (!start_date.value) {
            alert('Por favor, selecciona una fecha de inicio.');
            return;
        }
        if (!end_date.value) {
            alert('Por favor, selecciona una fecha de fin.');
            return;
        }

        // Preparar los datos para la solicitud
        const data = {
            "sites": selectedSites.value.map(s => s.site_id),
            "start_date": formatDate(start_date.value),
            "end_date": formatDate(end_date.value)
        };

        try {
            // Hacer la solicitud de datos
            cachier_money.value = await fetchService.post(`${URI}/get-all-cachier-money-by-filtered/`, data);
            selecte_site.value = selectedSites.value[0]
        } catch (error) {
            alert('Hubo un error al obtener los datos del cajero.');
        }
        };

    
    </script>
    
    
    
    <style scoped>
    
    .container{
        margin-top: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    
    .nav_bar{
    
        width: 100%;
        display: flex;
        justify-content: center;
       
    }
    
    .nav_bar--buttons{
        display: flex;
        list-style: none;
        max-width: 1;
        gap: 1rem;
    
    
    }
    
    .nav_bar--buttons-button{
        background-color: transparent;
        padding: .3rem 1rem;
        border-radius: 0;
    
        
    }
    .nav_bar--buttons-button-selected { 
        box-shadow: 0 .3rem 0px var(--primary-color);
    }
    </style>