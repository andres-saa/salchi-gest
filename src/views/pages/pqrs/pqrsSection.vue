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
       
    
    
    
    
  
    
        <Dialog class="mx-2 " v-model:visible="showPqrGest" modal  :header="`GESTION DE LA PQR  ID:    ${currentPqrGest.pqr_request_id}`" :style="{ width: '50rem',  }">
       
            <div style="display: flex; flex-direction: column;">
               
                <h6 class="mx-0 my-0"><b>TIPO</b> </h6>
                <p  style="display: flex;align-items: center;gap: 1rem;">  {{ currentPqrGest.request_type }}</p>
    
    
                <h6 class="mx-0 my-0"><b>CANAL</b> </h6>
                <p class="m-0 p-0" style="display: flex;align-items: center;gap: 1rem;">  {{ currentPqrGest.channel }}</p>
    
    
                <h6 class="mt-3 mb-2"><b>CONTEXTO</b> </h6>
    
    
    
    
               
                <div style="display: flex;gap: 1rem">
                    <div style="width: 100%;max-width: .4rem;border-radius: 45rem; box-sizing: border-box;" :style="`background-color:${currentPqrGest.channel_color}`"></div>
                    <div style="display: flex;flex-direction: column;">
                <p >{{ currentPqrGest.request_content }}</p>
                </div>
                </div>
    
    
                <h6 class="mt-3 mb-3" v-if="currentPqrGest.user_name || currentPqrGest.user_phone"><b>DATOS DEL CLIENTE</b> </h6>
    
    
                <div style="display: flex;gap: 1rem">
                    <div style="width: 100%;max-width: .4rem;border-radius: 45rem; box-sizing: border-box;" :style="`background-color:${currentPqrGest.channel_color}`"></div>
                    <div style="display: flex;flex-direction: column;">
                    <span v-if="currentPqrGest.user_name"><b>Nombre: </b> {{ currentPqrGest.user_name }}</span>
                    <span v-if="currentPqrGest.user_phone"><b>Telefono: </b> {{ currentPqrGest.user_phone }}</span>
                    <span v-if="currentPqrGest.user_address"><b>Direccion: </b> {{ currentPqrGest.user_address }}</span>
                    <span v-if="currentPqrGest.order_id"><b>Orden: </b> {{ currentPqrGest.order_id }}</span>
                <!-- <span><b>Direccion: {{ currentPqrGest.user_address }} </b></span> -->
                </div>
                </div>
               
             
    
    
                <h6><b>HISTORIAL</b> </h6>
    
    
                <div style="display: flex;gap: 1rem">
                    <div style="width: 100%;max-width: .4rem;border-radius: 45rem;  box-sizing: border-box;" :style="`background-color:${currentPqrGest.status_history[0].color}`"></div>
                    <div style="display: flex;flex-direction: column;">
    
    
    
    
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
                </div>
                </div>
    
    
    
    
    
    
               
    
    
    
    
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
    
    
    


<div style="">


    
    
    
    
        <nav class="nav_bar shadow-2 p-0 my-0 mx-3" style="position: sticky;top: 3rem;max-width: 96vw;left: 0; background-color: white;z-index: 99;">
            <ul class="nav_bar--buttons p-0 m-1" style="">
           
                    <li v-for="button in nav_buttons" key="" class="" style="display: flex;align-items: center  ;" >
                     
                       
                       <Tag :style="`background-color:${button.color}`"  style="height: 1.3rem;aspect-ratio: 1 / 1;border-radius: 50%;"></Tag> <Button  @click="() => {active_button_nav = button ; login.currentSection_pqr = options[0] }" class="nav_bar--buttons-button p-2" :class="button.id == active_button_nav.id? 'nav_bar--buttons-button-selected': ''" :label="button.name"></Button>
     
                    </li>
            </ul>
        </nav>


       <div style="display: flex; justify-content: center;flex-direction: column; width: 100%;max-width: 96vw; align-items: center;gap: 1rem;" class="mt-0 px-1">


        <div class="my-0 px-0" v-if="login.currentSection_pqr.x !=0"  :style="login.currentSection_pqr.x !=0? 'opacity:1' :'opacity:0'" style="display: flex;transition: all ease .5s; align-items: end; gap: 1rem">
         
         <h6> <b> Desde</b> </h6>
         <Calendar style="max-width:7.5rem;" :disabled="login.currentSection_pqr.x == 0" v-model="temp_start_date"     dateFormat="dd-mm-yy" 
         ></Calendar>



         <h6><b>Hasta</b> </h6>
         <Calendar style="max-width:7.5rem;" :disabled="!temp_start_date || login.currentSection_pqr.x == 0" v-model="temp_end_data"     dateFormat="dd-mm-yy"  
         ></Calendar>


        <template v-if="login.currentSection_pqr.x == -200">
            <h6><b>Sedes</b> </h6>
                <MultiSelect style="max-width: 17rem;min-width:  15rem;" :options="sites.filter(s => s.show_on_web || s.site_id == 17 || s.site_id == 18)"  optionLabel="site_name" v-model="selected_sites"  placeholder="SEDES" />
        </template>
        
     
     
     <Button style="min-width: max-content;" :disabled="login.currentSection_pqr.x == 0" @click="obtain_pqr_report(temp_start_date,temp_end_data)" severity="help" label="Buscar" icon="pi pi-search"></Button>


        </div>



        <div style="display: flex;align-items: center;gap: 1rem;">
            <h6 class="m-0"> <b>MODOS</b>  </h6>
            <div>
                        
                        <Dropdown style="width: 10rem;" optionLabel="name" placeholder="Avanzado" v-model="login.currentSection_pqr" :options="options"></Dropdown>
            </div>
                     
            <Button @click="store.visible_add_pqr = true" icon="pi pi-plus" label="Nueva PQR" severity="help"></Button>
            <div style="text-align: right; margin: 1rem;">
    <Button 
      @click="downloadPQRExcel" 
      label="Descargar PQRs como Excel" 
      icon="pi pi-file-excel" 
      severity="success" 
      class="p-button-sm"
    />
  </div>

                
        </div>



                
            
        </div>
                
            
    
        <div class="px-0    mt-2" style="display: flex;width: 100%;align-items: center; justify-content:end;gap: 1rem; max-width: 96vw;">
    
    
 
         
    
        </div>
     
    
    
    
    
        <div class="scroll-container" style="margin: 0 auto;">
    
    
    
    
            <div  style="display: flex; max-width: 96vw;overflow: hidden;align-items: start   ;margin:0 auto;">
    
    
             
               
            <DataTable :style="`transform:translateX(${ login.currentSection_pqr.x}%);transition: .5s all ease;`"  :paginator="true" :rows="15" style="width: 100%"
           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
           currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
           :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines  stripedRows class="col-12  p-2"
           :value="pqrsUser.filter(p =>  p.current_status?.status == active_button_nav?.name )" tableStyle="min-width: 50rem;" :filters="filters">
           <template #header>
               <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                   <h4 class="px-2"> <i class="fa-regular fa-bars-progress"></i>  <b style="text-transform: uppercase;">PQRS <b>{{ route.params.section }}</b> </b> </h4>
    
    
    
    
                   <div style="display: flex;gap: 1rem;">
                    <InputText class="" v-model="filters['global'].value"
                    placeholder="Buscar Solicitud..." />
    
    
                 
                   </div>
                 
    
    
    
    
    
    
               </div>
    
    
    
    
           </template>
    
    
    
    
    
    
    
    
    
    
           <column    #body="contract" :header="column.columnName" :style="`min-width:${column.size}`" v-for="column in dataColumns" :field="column.columnValue" class="my-0 py-2">
    
    
               <h6  style="min-width: max-content;" v-if="column.columnType=='date'" class="m-0 p-0">
                   {{ contract.data[column.columnValue]?.split('-').reverse().join('-') || '---------'  }}
               </h6>
    
    
    
    
    
    
               <h6  style="min-width: max-content;" v-if="column.columnType=='responsible_name' " class="m-0 p-0">
                {{ contract.data?.status_history?.[0]?.responsible_name || 'No se ha interactuado'  }}
               </h6>
               
    
    
               <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'max-content'" class="m-0 p-0">
                   {{ contract.data[column.columnValue] || '---------'  }}
               </h6>
    
    
    
    
               <h6 style="text-align: justify;min-width: max-content;" v-if="column.columnType == 'order_id'" class="m-0 p-0">
                   {{ contract.data[column.columnValue] || '---------'  }}
               </h6>
    
    
               <h6 style="text-align: justify;" v-if="column.columnType == 'other'" class="m-0 p-0">
                   {{ contract.data[column.columnValue] || '---------'  }}
               </h6>
    
    
    
    
               <h6  v-if="column.columnType == 'rating'" class="m-0 p-0">
                 <Rating :cancel="false"  v-if="contract.data[column.columnValue] > 0" readonly v-model="contract.data[column.columnValue]"/>  <span v-else> ------------</span>
               </h6>
    
    
               <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'money'" class="m-0 p-0">
                   {{formatoPesosColombianos(contract.data[column.columnValue]) || '---------'  }}
               </h6>
    
    
           
    
    
               <div class="p-2" v-if="column.columnValue == 'current_status'" style="display: flex;gap: .1rem;flex-direction:column;align-items:center;" >
                <Tag  style="color: white;text-align: center; " :style="`background-color:${contract.data[column.columnValue]?.color}`">
    
    
                   
                   {{ contract.data[column.columnValue]?.status || '---------' }}  
               </Tag>
               <b>
                {{ contract.data[column.columnValue]?.timestamp || '---------' }}  
               </b>
                   
               </div>
    
    
    
    
    
    
                 
    
    
               <div class="p-2" v-if="column.columnValue == 'channel'" style="display: flex;gap: .1rem;flex-direction:column;align-items:center;" >
                <Tag  style="color: white;text-align: center;" :style="`background-color:${contract.data.channel_color}`">
    
    
                   
                   {{ contract.data[column.columnValue] || '---------' }}  
               </Tag>
           
                   
               </div>
    
    
    
    
    
    
               <div class="p-2" v-if="column.columnValue == 'tag_name'" style="display: flex;gap: .1rem;flex-direction:column;align-items:center;" >
                <Tag  style="color: white;text-align: center;" :style="`background-color:${contract.data.tag_color}`">
    
    
                   
                   {{ contract.data[column.columnValue]  }}  
               </Tag>
           
                   
               </div>
    
    
    
    
    
    
               <div class="p-2" v-if="column.columnValue == 'restaurant'" style="display: flex;gap: .1rem;flex-direction:column;align-items:start;" >
                <Tag  style="color: white;;" :style="`background-color:${contract.data.restaurant_color}`">
                   {{ contract.data[column.columnValue]  }}  
               </Tag>
           
               </div>
    
    
               
               
           
           </column>
    
    
    
    
           <Column class="my-0 py-0 px-0 mx-0" style="" frozen alignFrozen="right" header="Interactuar" >
              <template #body="data" >
     
                 <div style="display: flex;gap: .4rem;justify-content: center;" class="px-2">
                      <!-- <Button @click="chargeHistory(data.data)"  severity="info" icon="pi pi-history p-0" class="my-0 p-2"></Button> -->
                      <Button @click="chargePqr(data.data)" label="Gestionar"  severity="help" icon="pi pi-check p-0" class="my-0 py-2"></Button>
                      <!-- <Button @click="chargeRequest(data.data)"  severity="danger" icon="pi pi-times p-0" class="my-1 p-1"></Button> -->
                 </div>
              </template>
             
             </Column>
    
    
    
    
             
             
    
    
           </DataTable>
    
    
           <div :style="`transform:translateX(${ login.currentSection_pqr.x}%);transition: .5s all ease;`" style="min-width: 100%;overflow: auto; margin:0 auto;height: min-content;">
    
    
    
    

           
    
            <div style="max-width: 1366px;" class="m-auto my-6">


         
    


                <h4 class="m-0 px-0">
                <b>
                    REPORTE POR ESTADO  {{ formatearFechaLocal(startDate).split('-').reverse().join('-')}} <i class="pi pi-arrow-right"</i> {{ formatearFechaLocal(endDate   ).split('-').reverse().join('-')}} 
                </b> 
                </h4>
                 
            <DataTable    :rows="15" style=" max-width: 96vw; box-shadow: 0 0 1rem #00000030;border-radius: .5rem;"
    
    
            scrollable showGridlines  stripedRows class="col-12 m-auto my-4"
           :value="report" tableStyle="min-width: 50rem;" :filters="filters">
           <template #header>
     
    
    
    
    
           </template>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
           <Column v-for="column  in report_keys" class="p-0 text-center" style="max-width: min-content;text-transform: uppercase;" :header="column" >
                <template #body="data">
                    <div>
                        <h6 class="m-0 py-1 px-2 text-xl" v-if="data.data.sede == 'total'" style="display: flex;background-color:  var(--blue-100);" :style="column != 'sede'? 'justify-content: center;' : 'justify-content: start;'">
                            <b>
                                {{ data.data[column] }}
                            </b>
                        </h6>
    
    
                        <h6 v-else class="m-0 py-1 px-2" style="display: flex; justify-content: center;" :style="column != 'sede'? 'justify-content: center;' : 'justify-content: start;'">
    
    
                        {{ data.data[column] }}
                        </h6>
                    </div>
                </template>
    
    
             </Column>
    
    
    
    
    
    
    
    
    
    
           </DataTable>
    
    
            </div>
       
    


            <div style="max-width: 1366px;" class="mx-auto my-6">
                <h4 class="m-0 px-0">
                <b>
                    REPORTE POR RESPONSABLES  {{ formatearFechaLocal(startDate).split('-').reverse().join('-')}} <i class="pi pi-arrow-right"</i> {{ formatearFechaLocal(endDate   ).split('-').reverse().join('-')}} 
                </b>
                </h4>
                 
            <DataTable    :rows="15" style=" max-width: 96vw; box-shadow: 0 0 1rem #00000030;border-radius: .5rem;"
    
    
            scrollable showGridlines  stripedRows class="col-12 m-auto my-4"
           :value="report_responsible   " tableStyle="min-width: 50rem;" :filters="filters">
           <template #header>
     
    
    
            
    
           </template>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
           <Column v-for="column  in report_keys_responsible" class="p-0 text-center" style="max-width: min-content;text-transform: uppercase;" :header="column" >
                <template #body="data">
                    <div>
                        <h6 class="m-0 py-1 px-2 text-xl " v-if="data.data.responsible_name == 'total'" style="display: flex;text-align: center; background-color:  var(--blue-100); " :style="column != 'responsible_name'? 'justify-content: center;' : 'justify-content: start;'">
                            <b>
                                {{ data.data[column] }}
                            </b>
                        </h6>



                        <h6 class="m-0 py-1 px-2" v-else-if="data.data.responsible_name == 'pendiente'" style="display: flex;text-align: center; color: var(--red-900); background-color:  var(--red-100); " :style="column != 'responsible_name'? 'justify-content: center;' : 'justify-content: start;'">
                            <b>
                                {{ data.data[column] }}
                            </b>
                        </h6>
                        
    
    
                        <h6 v-else class="m-0 py-1 px-2" style="display: flex;text-align: start;" :style="column != 'responsible_name'? 'justify-content: center;' : 'justify-content: start;'">
    
    
                        {{ data.data[column] }}
                        </h6>
                    </div>
                </template>
    
    
             </Column>
    
    
    
    
    
    
    
    
    
    
           </DataTable>
    
    
            </div>
    
    


           
            <div style="max-width: 1366px;" class="mx-auto my-3">
                <h4 class="m-0 px-0">
                <b>
                    REPORTE POR TIPOS  {{ formatearFechaLocal(startDate).split('-').reverse().join('-')}} <i class="pi pi-arrow-right"</i> {{ formatearFechaLocal(endDate   ).split('-').reverse().join('-')}} 
                </b>
                </h4>
                 
            <DataTable    :rows="15" style=" max-width: 96vw; box-shadow: 0 0 1rem #00000030;border-radius: .2rem;background-color: white;"
    
    
            scrollable showGridlines  stripedRows class="col-12 m-auto my-4"
           :value="report_type" tableStyle="min-width: 50rem;" :filters="filters">
           <template #header>
     
    
    
            
    
           </template>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
           <Column v-for="column  in report_keys_type" class="p-0 text-center " style="max-width: min-content;text-transform: uppercase;" :header="column" >
                <template #body="data">
                    <div>
                        <h6 class="m-0 py-1 px-2 text-xl" v-if="data.data.sede == 'TOTAL'" style="display: flex;background-color:  var(--blue-100); " :style="column != 'sede'? 'justify-content: center;' : 'justify-content: start;'">
                            <b>
                                {{ data.data[column] }}
                            </b>
                        </h6>
    
    
                        <h6 v-else class="m-0 py-1 px-2" :style="column != 'sede'? 'justify-content: center;' : 'justify-content: start;'" style="display: flex; ">
    
    
                        {{ data.data[column] }}
                        </h6>
                    </div>
                </template>
    
    
             </Column>
    
    
    
    
    
    
    
    
    
    
           </DataTable>
    
    
            </div>



                
       
           <div>
    
    
    
    
           
           </div>
    
    
            </div>


             <div class="p-3" :style="`transform:translateX(${ login.currentSection_pqr.x}%);transition: .5s all ease;`" style="min-width: 100%;overflow: auto;height: min-content;  margin:0 auto;">


                <div style="display: flex;width: 100%;margin:0 auto; max-width: 1200px; gap: 1rem; align-items: center;" class="my-4">
                    <h6 class="m-0"><b>Tipo de grafica</b> </h6>

                <Dropdown v-model="type_graph" :options="tipos_graficas" optionLabel="name"></Dropdown>
                </div>
         

                <Chart :type="type_graph.value" :data="data_graphics"  class="h-[10rem] p-2 h-50" style="width: 100%;margin:0 auto; max-width: 1200px; box-shadow: 0 0 10px rgba(0, 0, 0, .2);border-radius: .5rem;" />
                
       
           <div>
    
    
    
    
           
           </div>
    
    
            </div>







            
            </div>

            
    
    
        </div>
    
           <pqrUser @reload="update()"></pqrUser>



        </div>

       
    </template>
    
    
    <script setup>
    import { onBeforeMount, onMounted, ref, watch } from 'vue';
    import { pqrsService } from '../../../service/pqrs/pqrsService';
    import router from '../../../router';
    import { onBeforeRouteLeave, START_LOCATION, useRoute } from 'vue-router';
    import OverlayPanel from 'primevue/overlaypanel';
    import Editor from 'primevue/editor';
    import { fetchService } from '../../../service/utils/fetchService';
    import { URI } from '../../../service/conection';
    import { FilterMatchMode, PrimeIcons } from 'primevue/api';
    import Pqrs from './pqrs.vue';
    import { loginStore } from '../../../store/user';
    import { da, ta } from 'date-fns/locale';
    import { formatToColombianPeso } from '../../../service/valoresReactivosCompartidos';
    import { saveAs } from 'file-saver';
import axios from 'axios';
    
    import { PathService } from '@/service/pathService';
    import pqrUser from './pqrUser.vue';
    

    const prepareExcelData = () => {
  // Verificar que pqrsUser tenga datos
  if (!pqrsUser.value || pqrsUser.value.length === 0) {
    alert("No hay PQRs disponibles para descargar.");
    return null;
  }

  // Función para formatear la fecha a 'yyyy-mm-dd'
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Mes en base 0
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Formatear las fechas seleccionadas
  const startDateFormatted = formatDate(temp_start_date.value);
  const endDateFormatted = formatDate(temp_end_data.value);

  // Filtrar PQRs dentro del rango de fechas inclusivo
  const filteredByDatePqrs = pqrsUser.value.filter(pqr => {
    if (!pqr.current_status?.timestamp) return false;

    // Extraer la fecha de 'dd-mm-yyyy' a 'yyyy-mm-dd'
    const [day, month, year] = pqr.current_status.timestamp.split(' ')[0].split('-');
    const pqrDateFormatted = `${year}-${month}-${day}`;

    return pqrDateFormatted >= startDateFormatted && pqrDateFormatted <= endDateFormatted;
  });

  if (filteredByDatePqrs.length === 0) {
    alert("No hay PQRs en el rango de fechas seleccionado.");
    return null;
  }

  // Filtrar PQRs para excluir las de clasificación "CORTESÍAS"
  const filteredPqrs = filteredByDatePqrs.filter(pqr => pqr.tag_name && pqr.tag_name.toUpperCase() !== "CORTESÍAS");

  // Agrupar las PQRs por sede
  const groupedBySede = filteredPqrs.reduce((acc, pqr) => {
    const sede = pqr.site_name || "Sin Sede"; // Asegúrate de que 'site_name' sea el campo correcto
    if (!acc[sede]) {
      acc[sede] = [];
    }
    acc[sede].push(pqr);
    return acc;
  }, {});

  // Crear una hoja por cada sede
  const hojas = Object.keys(groupedBySede).map(sede => ({
    hoja: sede,
    title: `Reporte de PQRs - Sede: ${sede}`,
    column_widths: {
      "ID": 15,
      "Clasificacion": 30,
      "Descripción": 60,
      "Fecha": 15,
      "Hora": 10,
      "Estado": 45,
      "Observación del estado": 50,   // Nueva columna
      "Responsable": 50             // Nueva columna
      // Agrega más columnas según tus necesidades
    },
    data: groupedBySede[sede]
      .sort((a, b) => {
        // Manejo seguro para evitar problemas con valores nulos
        const tagA = a.tag_name || "";
        const tagB = b.tag_name || "";
        return tagA.localeCompare(tagB);
      })
      .map(pqr => {
        // Extraer fecha y hora
        let fecha = "--------";
        let hora = "--------";
        if (pqr.current_status?.timestamp) {
          const parts = pqr.current_status.timestamp.split(' ');
          if (parts.length >= 2) {
            fecha = parts[0]; // "dd-mm-yyyy"
            hora = parts.slice(1).join(' '); // Resto de la cadena (hora)
          } else {
            // Manejo de formatos inesperados
            fecha = pqr.current_status.timestamp;
          }
        }

        return {
          "ID": pqr.pqr_request_id,
          "Clasificacion": pqr.tag_name || "Sin Clasificación", // Valor por defecto
          "Descripción": pqr.request_content,
          "Fecha": fecha,
          "Hora": hora,
          "Estado": pqr.current_status?.status || "N/A",
          "Observación del estado": pqr.current_status?.notes || "--------",        // Nuevo campo
          "Responsable": pqr.current_status?.responsible_name?.toUpperCase() || "--------"        // Nuevo campo
          // Agrega más campos según tus necesidades
        };
      }),
  }));

  return { hojas };
};







// Función para descargar las PQRs como Excel
const downloadPQRExcel = async () => {
  try {
    const payload = prepareExcelData();

    if (!payload) return; // Salir si no hay datos para descargar

    // Realizar la solicitud POST a la API
    const response = await axios.post('https://excel-creator.salchimonster.com/crear-excel', payload, {
      responseType: 'blob', // Importante para manejar archivos binarios
    });

    // Crear un blob a partir de la respuesta
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Utilizar file-saver para descargar el archivo
    saveAs(blob, 'Reporte_PQRs.xlsx');
  } catch (error) {
    console.error('Error al descargar el Excel:', error);
    alert("Ocurrió un error al intentar descargar el archivo Excel.");
    // Opcional: Mostrar una notificación al usuario usando tu sistema de notificaciones
  }
};
    

    const tipos_graficas = [

        {
            name:'Lineas',
            value:'line'
        },
        {
            name:'Barras',
            value:'bar'
        }
    ]



    const sites = ref([])
    const selected_sites = ref([])


    const type_graph = ref(  {
            name:'Barras',
            value:'bar'
        })

    
    
    
    import { useReportesStore } from '@/store/reportes';
        const store = useReportesStore()
    

    
    


        const data_graphics = ref([])


    function formatearFechaLocal(fechaInput) {
    const fecha = new Date(fechaInput); // Convertir a objeto Date
    if (isNaN(fecha)) {
        throw new Error("Fecha inválida");
    }

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes en base 0
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

    
    
    const notes = ref('')
    
    
    const endDate = ref()
    const startDate = ref()

    const temp_start_date = ref()
    const temp_end_data = ref()



    const obtain_pqr_report = async (start, end) => {
    // Validar que los parámetros start y end estén definidos y no vacíos
        if (!start || !end) {
            alert("Por favor, proporciona tanto la fecha de inicio como la fecha de fin.");
            return; // Sale de la función si los parámetros no son válidos
        }

        // Si las fechas son válidas, realiza la llamada
        await getReports(start, end);
        
        // Asigna los valores a las variables correspondientes
        startDate.value = start;
        endDate.value = end;
    };


    onBeforeMount(() => {
    // Garantiza que las fechas sean objetos Date válidos
        endDate.value = new Date()

        const fifteenDaysAgo = new Date()
        fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15)
        startDate.value = fifteenDaysAgo

        temp_start_date.value = startDate.value
        temp_end_data.value = endDate.value
    })

    
    const report = ref([])
    const report_keys = ref([])
    
    
    
    
    
    
    const report_type = ref([])
    const report_keys_type = ref([])
    const report_responsible = ref([])
    const report_keys_responsible = ref([])
    
    
    const options = ref([

{
    name:'Basico',
    x:0
},

{
    name:'Reportes Generales',
    x:-100
},

{
    name:'Reportes Graficados',
    x:-200
}

]) 

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
           columnName:'Estado',
           columnValue:'current_status',
           columnType:'status',
           size:'15rem',
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
           columnName:'Clasificacion',
           columnValue:'tag_name',
           columnType:'tag',
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
           columnName:'Id orden',
           columnValue:'order_id',
           columnType:'order_id',
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
           columnName:'Comentarios',
           columnValue:'request_content',
           columnType:'other',
           size:'40rem',
           vif:true
       },
       {
           columnName:'Responsable',
           columnValue:'responsible_name',
           columnType:'responsible_name',
           size:'20rem',
           vif:false
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
    
    
    
    
    // watch(active_button_nav, () => {
    //     login.currentSection_pqr = options[0]
    // })
    
    
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
    

    const getReports = async(starD, endD) => {
    

        if (!starD || !endDate) {
            return
        }

        const start = formatearFechaLocal(starD)
        const end  = formatearFechaLocal(endD)
        const reports = await fetchService.get(`${URI}/get-pqrs-by-date-range/${start}/${end}`)
        const reports_types = await fetchService.get(`${URI}/get-pqrs-by-date-range-types/${start}/${end}`)

        const reports_types_responsible = await fetchService.get(`${URI}/get_pqrs_by_responsible_and_state/${start}/${end}`)
    
  
        report.value = reports
        report_keys.value =  Object.keys(reports[0]);
    
    
        report_type.value = reports_types
        report_keys_type.value =  Object.keys(reports_types[0]);

        report_responsible.value = reports_types_responsible
        report_keys_responsible.value = Object.keys(reports_types_responsible[0])



        data_graphics.value = await fetchService.post(`${URI}/get_daily_pqrs_report/${start}/${end}`,{ids:selected_sites.value.map(s => s.site_id)})

   
    }
    
    onMounted(async () => {
        await update();

        sites.value = await fetchService.get(`${URI}/sites`)
        sites.value.filter(s => s.show_on_web)
        await getReports(startDate.value, endDate.value)
        
            
    }
    );
    
    
    
    
    watch(selecte_status_update, () => {
        resetPqrForm(startDate.value, endDate.value)
    })
    
    
    const resetPqrForm = () => {
        // selecte_status_update.value = null;  
        costovalue.value = null;
        notes.value = '';
        inputOrder.value = null;
        costo.value = false;
        order.value = false;
    };
    
    




    // watch(endDate, async() => {

    //     getReports()
    //     console.log(endDate.value)

    // })
    
    
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
            notes:notes.value,
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
    .h{
        transform: translateX(100%);
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
    justify-content: start;
    border-radius: 0 0 1rem  1rem;
    overflow: auto;
    
    
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
    
    
    
    