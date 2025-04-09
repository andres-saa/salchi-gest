<template>

  <div style=" margin: 0 auto;" class="px-2 md:px-4 xl:px-6">


  <!-- Diálogo de éxito -->
  <Dialog
    v-model:visible="melo"
    modal
    :closable="false"
    style="display: flex; justify-content: center; width: 30rem;"
  >
    <div
      style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%;"
    >
      <h3><b>{{response?.message}}</b></h3>
      <i class="pi pi-check text-7xl" style="font-weight: bold; color: green;"></i>
      <Button
        @click="melo = false"
        icon="pi pi-times"
        style="position: absolute; aspect-ratio: 1/1; border-radius: 50%; right: -1.5rem; top: -1.5rem"
        severity="danger"
      />
    </div>
  </Dialog>

  <!-- Diálogo para modificación masiva -->
  <Dialog
    v-model:visible="massDialog"
    modal
    header="Modificar precios masivamente"
    :closable="true"
    style="width: 20rem;"
  >
    <div class="p-3">
      <div class="field">
        <label for="descuentoMayor"
          ><b>Descuento para Precio Mayor (%)</b></label
        >
        <InputNumber
        :inputStyle="{
                width: '100%',
            
                height: '2rem',
                borderRadius: '0'}
                "
          id="descuentoMayor"
          v-model="descuentoMayor"
          mode="decimal"
          :min="0"
          :max="100"
          :step="0.1"
          class="w-full"
        />
      </div>
      <div class="field mt-3">
        <label for="descuentoDistribuidor"
          ><b>Descuento para Precio Distribuidor (%)</b></label
        >
        <InputNumber 
        :inputStyle="{
                width: '100%',
          
                height: '2rem',
                borderRadius: '0'}
                "
          id="descuentoDistribuidor"
          v-model="descuentoDistribuidor"
          mode="decimal"
          :min="0"
          :max="100"
          :step="0.1"
          class="w-full"
        />
      </div>
      <div class="flex justify-content-end gap-2 mt-4">
        <Button label="Cancelar" severity="danger" @click="cancelarMass" />
        <Button label="Aplicar" severity="success" @click="applyMassDiscount" />
      </div>
    </div>
  </Dialog>

  <div style="margin-top: 10rem;  margin: 5rem auto 2rem auto  ;" class="">
      <div style="width: 100%;justify-content: center;gap:1rem; display: flex;flex-wrap: wrap;" class="my-4">
          <img :src="`${URI}/read-photo-product/xai0dVnL`" alt="" style="height: 5rem;width: min-content; margin: auto;">
          <img :src="`${URI}/read-photo-product/a1roeK3y`" alt="" style="height: 5rem;width: min-content; margin: auto;">
          <img :src="`${URI}/read-photo-product/mm9Ohnu7`" alt="" style="height: 5rem;width: min-content; margin: auto;">
          <img :src="`https://restaurant.pe/assets/images/logo-header.svg`" alt="" style="height: 5rem;width: min-content; margin: auto;">

          <img :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/WhatsApp_Business_icon.png/169px-WhatsApp_Business_icon.png`" alt="" style="height: 5rem;width: min-content; margin: auto;">


      </div>
 

    <Tag class="p-4" severity="success">
      <h5>
        <b>Sincronizar las cartas</b> ¿Como funciona? 
        El servidor principal correra' un script que se encargara' de tomar la carta de restaurant.Pe y descargar todo el contenido nuevo incluyendo las fotos, 
        con esto logramos que nuestro servidor (que es mas rapido) nos entregue el menu sin preguntarle cual es a restaurant.Pe 
        <b>Esta tarea deberia tomar maximo 2 minutos</b>
      </h5>
    </Tag>

    <div style="display: flex; justify-content: end; width: 100%;">
      <Button @click="refresh" severity="help" label="Sincronizar Las cartas" class="my-4" />
    </div>


   
  </div>


  <div style="display: flex; flex-wrap: wrap; box-shadow: 0 0rem 1rem #00000030; padding:0 1rem;border-radius: .5rem;gap:.5rem;padding: 1rem;">
    <div  v-for="s in site.filter(s => s.show_on_web)" style="display: flex; align-items: center; border: 1px solid;border-radius: .5rem;background-color: #00000030;">
    <RouterLink active-class="active"
    exact-active-class="full-active" style=""  :to="`/tiendas/site/${s.pe_site_id           }/${s.site_name}`" >
      <Button :label="s.site_name" text style="color: black; outline: none;box-shadow: none;">

      </Button>

    </RouterLink>
    <!-- <i class="fa-solid fa-pipe p-0 m-0" style="opacity: .7;"></i> -->
  </div>

  </div>

<div class="">
  <RouterView></RouterView>

</div>



</div>

</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { fetchService } from "../../service/utils/fetchService";
import { URI } from "../../service/conection";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import { formatoPesosColombianos } from "../../service/formatoPesos";


const site = ref([])

onMounted( async() => {
  site.value = await fetchService.get(`${URI}/sites`)
})
// Variables reactivas
const melo = ref(false);
const massDialog = ref(false);
const descuentoMayor = ref(0);
const descuentoDistribuidor = ref(0);
const data = ref([]);
const oririginal_data = ref([]);
const modificando = ref(false);

// Computed para detectar cambios en la data
const hasChanges = computed(() => {
  return JSON.stringify(data.value) !== JSON.stringify(oririginal_data.value);
});

// Función para actualizar los datos desde la API
const update = async () => {
  try {
    const response = await fetchService.get(
      `${URI}/get-product-integration-distrimonster`
    );
    const productos =
      response.data?.data?.filter((p) => p.categoria_id == 107) || [];
    data.value = productos;
    // Crear copia profunda de los datos originales
    oririginal_data.value = JSON.parse(JSON.stringify(productos));
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }
};

const descartar = () => {
  modificando.value = false;
  update();
};

onMounted(async () => {
  update();
});

const response = ref('')

// Función para sincronizar la Districarta
const refresh = async () => {
  try {
  
  const res =        await fetchService.get(`${URI}/tiendas/refresh_all`);    ;
response.value = res
melo.value = true
} catch (error) {
console.error("Error al refrescar la caché:", error);
}
};

// Función para actualizar los precios individualmente
const updatePrices = async () => {
  const datas = {
    prices: data.value?.map((p) => ({
      id:  p.id,
      mayor: parseInt(p.mayor) ,
      distribuidor: parseInt(p.distribuidor)  ,
    })),
  };

  try {
    await fetchService.put(`${URI}/update-prices`, datas);
    melo.value = true;
    modificando.value = false;
    update();
  } catch (error) {
    console.error("Error al actualizar precios:", error);
  }
};

// Función para aplicar el descuento masivo basado en el precio base (minor)
const applyMassDiscount = () => {
// Convertir los descuentos a enteros
const intDescuentoMayor = parseInt(descuentoMayor.value, 10) || 0;
const intDescuentoDistribuidor = parseInt(descuentoDistribuidor.value, 10) || 0;

data.value = data.value.map((p) => {
  const nuevoMayor = p.minor * (1 - intDescuentoMayor / 100);
  const nuevoDistribuidor = p.minor * (1 - intDescuentoDistribuidor / 100);
  return {
    ...p,
    mayor: parseFloat(nuevoMayor.toFixed(0)),
    distribuidor: parseFloat(nuevoDistribuidor.toFixed(0)),
  };
});
massDialog.value = false;
descuentoMayor.value = 0;
descuentoDistribuidor.value = 0;
};

// Función para cancelar la modificación masiva
const cancelarMass = () => {
  massDialog.value = false;
  descuentoMayor.value = 0;
  descuentoDistribuidor.value = 0;
};
</script>

<style scoped>
/* Estilos adicionales si se requieren */


/* *:focus{
  outline: 0;
  box-shadow: 0;
} */

.active {
  box-shadow: 0rem .5rem 1rem .5rem #00000030;
  background-color: rgba(0, 255, 221, 0.322);
  color: white;
  border-radius: .5rem;
}
</style>
