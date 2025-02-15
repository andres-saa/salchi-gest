<template>
    <!-- Diálogo de éxito -->
    <Dialog
      v-model:visible="melo"
      modal
      :closable="false"
      style="display: flex; justify-content: center; width: 10rem;"
    >
      <div
        style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%;"
      >
        <h3><b>Melo</b></h3>
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
  
    <div style="margin-top: 10rem; max-width: 900px; margin: 10rem auto;" class="px-3">
        <div style="width: 100%;justify-content: center;display: flex;" class="my-4">
            <img :src="`${URI}/read-photo-product/iX6UiE6e`" alt="" style="height: 5rem;width: min-content; margin: auto;">

        </div>
   
  
      <Tag class="p-4" severity="success">
        <h5>
          ¿No ves algún producto? Prueba <b>Sincronizar la Districarta</b>
          (tardará un poco mientras obtenemos todos los datos de restaurant.PE)
          <b>2 minutos como máximo.</b>
        </h5>
      </Tag>
  
      <div style="display: flex; justify-content: end; width: 100%;">
        <Button @click="refresh" severity="help" label="Sincronizar Districarta" class="my-4" />
      </div>
  
      <DataTable :value="data" class="shadow-1">
        <!-- Producto -->
        <Column header="Producto" class="m-0 py-0">
          <template #body="slotProps">
            <h6 class="m-0 p-0">{{ slotProps.data.productogeneral_descripcion }}</h6>
          </template>
        </Column>
  
        <!-- Precio base -->
        <Column header="Precio base" class="m-0 py-0 py-2">
          <template #body="slotProps">
            <h6 class="m-0 p-0">
              {{ formatoPesosColombianos(slotProps.data.minor) }}
            </h6>
          </template>
        </Column>
  
        <!-- Precio Mayor -->
        <Column header="Precio Mayor" class="m-0 py-0">
          <template #body="slotProps">
            <div v-if="modificando">
              <InputNumber
                :inputStyle="{
                  width: '100%',
                  maxWidth: '10rem',
                  height: '2rem',
                  borderRadius: '0'
                }"
                v-model="slotProps.data.mayor"
                mode="currency"
                currency="USD"
                locale="en-US"
                :minFractionDigits="0"
                :maxFractionDigits="2"
              />
            </div>
            <h6 v-else class="m-0 p-0">
              {{ formatoPesosColombianos(slotProps.data.mayor) }}
            </h6>
          </template>
        </Column>
  
        <!-- Precio Distribuidor -->
        <Column header="Precio Distribuidor" class="m-0 py-0">
          <template #body="slotProps">
            <div v-if="modificando">
              <InputNumber
                :inputStyle="{
                  width: '100%',
                  maxWidth: '10rem',
                  height: '2rem',
                  borderRadius: '0'
                }"
                v-model="slotProps.data.distribuidor"
                mode="currency"
                currency="USD"
                locale="en-US"
                :minFractionDigits="0"
                :maxFractionDigits="2"
              />
            </div>
            <h6 v-else class="m-0 p-0">
              {{ formatoPesosColombianos(slotProps.data.distribuidor) }}
            </h6>
          </template>
        </Column>
      </DataTable>
  
      <div style="display: flex; gap: 1rem; justify-content: end; margin: 1rem 0;">
        <Button
          @click="updatePrices"
          v-if="modificando && hasChanges"
          severity="success"
          label="Guardar cambios"
        />
        <Button
          v-if="!modificando"
          @click="modificando = true"
          severity="info"
          label="Editar"
        />
        <Button @click="descartar" v-if="modificando" severity="danger" label="Descartar" />
        <!-- Botón para modificar masivamente -->
        <Button v-if="modificando" @click="massDialog = true" severity="warning" label="Modificar Masiva" />
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
  
  // Variables reactivas
  const melo = ref(true);
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
  
  // Función para sincronizar la Districarta
  const refresh = async () => {
    try {
      await fetchService.post(`${URI}/refresh-cache-distrimonster?quipupos=0`);
      update();
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
  </style>
  