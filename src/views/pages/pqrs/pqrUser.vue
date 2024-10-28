<template>

<Dialog v-model:visible="store.visible_add_pqr" style="width: 50rem;" modal class="mx-2" header="INGRESAR PQR">

    <Dialog :closable="false" class="mx-4" v-model:visible="visibleDialog" modal style="width:30rem;background-color: white;">
    
    <div style="height: auto;color: black;background-color: white; display: flex;flex-direction: column;justify-content: end;align-items: center;" >

        <h4>Hemos recibido su solicitud y ha quedado registrada con el id   </h4> <br><b> <p class="text-center" style="width: auto;font-size: 3rem;">{{ last_id }}</p></b>
        
        

        <Button @click=" () => {store.visible_add_pqr = false ; visibleDialogGRacias = false; visibleDialog = false}" class="m-auto" style="font-weight: bold;" severity="info" label="Listo"></Button>

        
    </div>
</Dialog>





<Dialog class="mx-4" v-model:visible="visibleDialogGRacias" modal style="width: 30rem;background-color: white">

<div style="height: auto;color: black;display: flex;flex-direction: column;justify-content: end;align-items: center;" >

 <br><b> <p class="text-center" style="width: auto;font-size: 3rem;"> Listo</p></b>
    
    
 <Button @click=" () => {store.visible_add_pqr = false ; visibleDialogGRacias = false; visibleDialog = false}" class="m-auto" style="font-weight: bold;" severity="info" label="Listo"></Button>
    
</div>
</Dialog>



    <div class="container mt-0 col-12 p-0" style="max-width: ; margin: auto;">
     
      <div class="form" style="width: 100%; display: flex; flex-direction: column; gap: 1rem;">


        <div class="input">
          <h5 class="field">Medio</h5>
          <Dropdown v-model="selectet_networks" optionValue="id" style="width: 100%; text-transform: uppercase;" :options="networs" optionLabel="name"></Dropdown>
        </div>
        <!-- Selección de Tipo de Requerimiento -->
        <div class="input">
          <h5 class="field">Categoria</h5>
          <Dropdown v-model="selectedType" optionValue="id" style="width: 100%; text-transform: uppercase;" :options="types.filter(e => e.id != 8)" optionLabel="name"></Dropdown>
        </div>


        <div class="input p-3" v-if="(selectedType )" style="background-color: #00f3ff29;">
          <h5 class="field">Califícanos</h5>
          <Rating v-model="rating" :cancel="false"></Rating>
        </div>
  
        <!-- Selección de Sede -->
        <div class="input" v-if="(selectedType)">
          <h5 class="field">Sede</h5>
          <Dropdown :options="sites.filter(s => s.show_on_web)" v-model="selecteSite" optionValue="site_id" optionLabel="site_name" style="width: 100%;"></Dropdown>
        </div>
  
        <!-- ID de la Orden -->
        <div class="input" v-if="selectedType && selectedType == 9">
          <h5 class="field" >ID de la orden ejemplo <b>BRE-0554</b></h5>
          <InputText  v-model="orderId" style="width: 100%;" placeholder="Escriba el número de la orden"></InputText>
        </div>
  

  
        <!-- Comentarios -->
        <div class="input" v-if="selectedType">
          <h5 class="field">Comentarios</h5>
          <Textarea v-model="comments" rows="5" style="width: 100%; resize: none;" placeholder="Deja tus comentarios"></Textarea>
        </div>
  
        <!-- Información del Usuario -->
        <div class="input" v-if="selectedType && selectedType != 8">
          <h5 class="field">Nombre</h5>
          <InputText v-model="userName" style="width: 100%;" placeholder="Escriba su nombre por favor"></InputText>
        </div>
  
        <div class="input" v-if="selectedType && selectedType != 8">
          <h5 class="field">Número de teléfono</h5>
          <InputNumber :useGrouping="false" v-model="userPhone" style="width: 100%;" placeholder="Escriba su número de teléfono"></InputNumber>
        </div>
  
        <div class="input" v-if="selectedType && selectedType != 8">
          <h5 class="field">Dirección (opcional)</h5>
          <InputText v-model="userAddress" style="width: 100%;" placeholder="Escriba su dirección"></InputText>
        </div>
  

      </div>
    </div>


   <template #footer>
            <!-- Botón de Envío -->
            <div class="input" style="display: flex; justify-content: end;">
          <Button label="Enviar" style="font-weight: bold;" severity="info" @click="handleSubmit"> </Button>
        </div>
   </template>
</Dialog>



      </template>
    <script setup>
    import { ref, onMounted, watch } from 'vue';
    import { pqrsService } from '@/service/pqrs/pqrsService';
    import { fetchService } from '@/service/utils/fetchService.js';
    import { URI } from '@/service/conection';
    import router from '@/router';
    
    const emit = defineEmits(['inFocus', 'reload'])

 

    import { useReportesStore } from '@/store/reportes';
    const store = useReportesStore()

    const order_id = ref()

    const visible = ref(true)
    const last_id = ref()
    
    const visibleDialog = ref(false)
    const pqrs = ref([]);
    const visibleDialogGRacias = ref(false)
    const selectedType = ref();
    const selecteSite = ref();
    const sites = ref([]);
    const types = ref([]);
    const orderId = ref('');
    const userName = ref('');
    const userPhone = ref('');
    const userAddress = ref('');
    const comments = ref('');
    const rating = ref(null);
    const networs = ref([])
    const selectet_networks = ref()
    

    


watch(() => store.visible_add_pqr, (newVal) => {
  if (newVal) {
    // Reseteo de los valores de los ref
    selectedType.value = null;
    comments.value = 'Sin comentarios';
    selecteSite.value = null;
    selectet_networks.value = null;
    userName.value = '';
    userPhone.value = '';
    userAddress.value = '';
  }
});

    
    const handleSubmit = async () => {
      // Validación de campos obligatorios
      if (!selectedType.value) {
        alert('Por favor, seleccione un tipo de requerimiento.');
        return;
      }
      if (selectedType.value == 9 && !orderId.value) {
        alert('Por favor, ingrese el ID de la orden.');
        return;
      }
    
    
      if (selectedType.value != 8 && !comments.value) {
        alert('Por favor, Cuentenos lo sucedido');
        return;
      }
    
    
      if (selectedType.value != 8 && (!userName.value || !userPhone.value)) {
        alert('Por favor, complete los campos obligatorios (nombre y teléfono).');
        return;
      }



      if (!selectet_networks.value) {
        alert('Por favor, Seleccione la red');
        return;
      }
    
      if (!selecteSite.value) {
        alert('Por favor, Seleccione la sede');
        return;
      }

    

      // Construcción del objeto de datos
      const data = {
        data: {
          reques_type_id: selectedType.value,
          content: comments.value || 'Sin comentarios',
          channel_id: 2, // Ajustar según el canal,
          rating: rating.value,
          site_id: selecteSite.value || null,
          network_id:selectet_networks.value || null,
          order_id:orderId.value  || null
        },
        user: {
          user_name: userName.value || '',
          user_phone: userPhone.value?.toString() || '',
          user_address: userAddress.value || '',
          site_id: selecteSite.value || null
        }
      };
    
      // Envío de datos
      try {
    
        const result = await fetchService.post(`${URI}/create-pqr`, data);
       last_id.value = result?.pqr_id[0]?.id
       if (selectedType.value == 8){
        visibleDialogGRacias.value = true
        emit('reload')
        } else {
        visibleDialog.value = true
       }

       visible.value = false
    
      } catch (error) {
        
      }

      emit('reload')
    };
    
    onMounted(async () => {
    //   update();
      types.value = await fetchService.get(`${URI}/get-all-pqrs-types`);
      sites.value = await fetchService.get(`${URI}/sites`);
      networs.value = await fetchService.get(`${URI}/get-all-networks`)

      selectedType.value = 8;
    });
    
    
    
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
    
    .field{
        margin:.5rem 0;
        
    }
    
    .bar {
        max-width: 900px;
        display: flex;
        justify-content: end;
    }
    
    .input{
        width: 100%;
    }
    
    .container {
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    
        margin-top: 3rem;
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
        animation: an_show_actions_2 .3s ease;
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
    </style>
    