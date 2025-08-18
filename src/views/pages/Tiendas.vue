<template>
  <!-- Cambia theme-gray -> theme-ink para el otro look en grises -->
  <div class="page-wrap theme-gray px-2 md:px-4 xl:px-6 mt-7">

    <!-- Diálogo de éxito -->
    <Dialog
      v-model:visible="melo"
      modal
      :closable="false"
      :draggable="false"
      class="success-dialog"
    >
      <div class="success-body">
        <h3 class="success-title"><b>{{ response?.message }}</b></h3>
        <i class="pi pi-check success-icon"></i>
        <Button
          @click="melo = false"
          icon="pi pi-times"
          class="success-close"
          severity="danger"
          text
        />
      </div>
    </Dialog>

    <!-- Diálogo para modificación masiva -->
    <Dialog
      v-model:visible="massDialog"
      modal
      header="Modificar precios masivamente"
      :closable="true"
      :draggable="false"
      class="mass-dialog"
    >
      <div class="p-3 form-grid-vertical">
        <div class="field">
          <label for="descuentoMayor"><b>Descuento para Precio Mayor (%)</b></label>
          <InputNumber
            :inputStyle="{ width:'100%', height:'2.25rem', borderRadius:'0' }"
            id="descuentoMayor"
            v-model="descuentoMayor"
            mode="decimal"
            :min="0"
            :max="100"
            :step="0.1"
            class="w-full"
          />
        </div>
        <div class="field">
          <label for="descuentoDistribuidor"><b>Descuento para Precio Distribuidor (%)</b></label>
          <InputNumber
            :inputStyle="{ width:'100%', height:'2.25rem', borderRadius:'0' }"
            id="descuentoDistribuidor"
            v-model="descuentoDistribuidor"
            mode="decimal"
            :min="0"
            :max="100"
            :step="0.1"
            class="w-full"
          />
        </div>
        <div class="actions-row">
          <Button label="Cancelar" severity="danger" @click="cancelarMass" icon="pi pi-times" text />
          <Button label="Aplicar" severity="success" @click="applyMassDiscount" icon="pi pi-check" />
        </div>
      </div>
    </Dialog>

    <!-- Encabezado + marcas -->
    <section class="brands card-block">
      <div class="brands-row">
        <img style="" :src="`${URI}/read-photo-product/xai0dVnL`" alt="logo" />
        <img style="  filter: grayscale(1);" :src="`${URI}/read-photo-product/a1roeK3y`" alt="logo" />
        <img style="  filter: grayscale(1);" :src="`${URI}/read-photo-product/mm9Ohnu7`" alt="logo" />
        <img :src="`https://restaurant.pe/assets/images/logo-header.svg`" alt="logo" />
        <img :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/WhatsApp_Business_icon.png/169px-WhatsApp_Business_icon.png`" alt="logo" />
      </div>

      <Tag class="info-tag p-4">
        <h5 class="m-0">
          <b>Sincronizar las cartas</b> — ¿Cómo funciona?
          El servidor principal ejecuta un script que toma la carta de restaurant.pe y descarga contenido nuevo (incluyendo fotos).
          Así servimos el menú desde nuestro servidor (más rápido) sin consultar cada vez a restaurant.pe.
          <b>Esta tarea debería tomar máximo 2 minutos.</b>
        </h5>
      </Tag>

      <div class="actions-row">
        <Button @click="refresh" severity="help" style="background-color: black;color: white;" label="Sincronizar las cartas" icon="pi pi-refresh" />
      </div>
    </section>

    <!-- Sedes -->
    <section class="card-block">
      <div class="chips-grid">
        <div
          v-for="s in site.filter(s => s.show_on_web)"
          :key="s.site_id || s.site_name"
          class="chip"
        >
          <RouterLink
            active-class="active"
            exact-active-class="full-active"
            :to="`/tiendas/site/${s.pe_site_id}/${s.site_name}`"
            class="chip-link"
          >
            <i class="pi pi-map-marker chip-icon" />
            <Button :label="s.site_name" text class="chip-btn" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Contenido de la ruta -->
    <section class="route-outlet">
      <RouterView />
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { fetchService } from "../../service/utils/fetchService";
import { URI } from "../../service/conection";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable"; // (se mantiene, aunque aquí no se usa)
import Column from "primevue/column";       // (se mantiene, aunque aquí no se usa)
import Tag from "primevue/tag";
import { formatoPesosColombianos } from "../../service/formatoPesos";

const site = ref([]);

onMounted(async () => {
  site.value = await fetchService.get(`${URI}/sites`);
});

// Estado UI / datos
const melo = ref(false);
const massDialog = ref(false);
const descuentoMayor = ref(0);
const descuentoDistribuidor = ref(0);
const data = ref([]);
const oririginal_data = ref([]);
const modificando = ref(false);

const hasChanges = computed(() => {
  return JSON.stringify(data.value) !== JSON.stringify(oririginal_data.value);
});

// Carga de productos (misma lógica)
const update = async () => {
  try {
    const response = await fetchService.get(`${URI}/get-product-integration-distrimonster`);
    const productos = response.data?.data?.filter((p) => p.categoria_id == 107) || [];
    data.value = productos;
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

const response = ref("");

// Sincronizar cartas (misma lógica)
const refresh = async () => {
  try {
    const res = await fetchService.get(`${URI}/tiendas/refresh_all`);
    response.value = res;
    melo.value = true;
  } catch (error) {
    console.error("Error al refrescar la caché:", error);
  }
};

// Actualizar precios individualmente (misma lógica)
const updatePrices = async () => {
  const datas = {
    prices: data.value?.map((p) => ({
      id: p.id,
      mayor: parseInt(p.mayor),
      distribuidor: parseInt(p.distribuidor),
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

// Descuento masivo (misma lógica)
const applyMassDiscount = () => {
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

// Cancelar descuento masivo (misma lógica)
const cancelarMass = () => {
  massDialog.value = false;
  descuentoMayor.value = 0;
  descuentoDistribuidor.value = 0;
};
</script>

<style scoped>
/* ====== Layout full width ====== */
.page-wrap{
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding: 1.5rem 2vw;
  box-sizing: border-box;
  background: var(--bg);
}

/* ====== Tarjetas / contenedores ====== */
.card-block{
  box-shadow: 0 8px 24px var(--shadow);
  border: 1px solid var(--line);
  background: var(--panel);
  padding: 1rem;
  border-radius: .75rem;
  margin: 0 auto 1rem auto;
}

/* ====== Marcas / logos ====== */
.brands{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.brands-row{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  align-items: center;
  gap: 1rem;
}
.brands-row img{
  height: 5rem;
  object-fit: contain;

  opacity: .9;
}

/* ====== Tag informativo ====== */
.info-tag{
  width: 100%;
  background: var(--panel-strong);
  color: var(--text);
  border: 1px solid var(--line);
}

/* ====== Chips de sedes ====== */
.chips-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: .6rem;
}
.chip{
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: .6rem;
  box-shadow: 0 4px 12px var(--shadow);
  transition: transform .12s ease, box-shadow .12s ease;
}
.chip:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 18px var(--shadow-strong);
}
.chip-link{
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem .6rem;
  text-decoration: none;
  color: var(--text);
}
.chip-icon{
  color: var(--muted);
}
.chip-btn{
  color: var(--text) !important;
  font-weight: 600;
}

/* ====== Zona RouterView ====== */
.route-outlet{
  width: 100%;
  margin: 0 auto;
}

/* ====== Acciones ====== */
.actions-row{
  display: flex;
  justify-content: flex-end;
  gap: .6rem;
  margin-top: 1rem;
}
.actions-row :deep(.p-button){
  background: var(--btn);
  border: 1px solid var(--line);
  color: var(--text);
  box-shadow: 0 2px 8px var(--shadow);
}
.actions-row :deep(.p-button:hover){
  background: var(--btn-hover);
}
.actions-row :deep(.p-button.p-button-text){
  background: transparent;
  border-color: transparent;
  color: var(--muted-strong);
}

/* ====== Dialogs ====== */
:deep(.p-dialog){
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--line);
  box-shadow: 0 12px 32px var(--shadow-strong);
}
.success-dialog :deep(.p-dialog-content),
.mass-dialog :deep(.p-dialog-content){
  background: var(--panel);
}
.success-body{
  position: relative;
  display: grid;
  place-items: center;
  gap: .5rem;
  padding: .25rem 0 1rem 0;
}
.success-title{
  margin: .25rem 0 .25rem 0;
  text-align: center;
  color: var(--text-strong);
}
.success-icon{
  font-size: 3.5rem;
  color: var(--text);
  opacity: .9;
}
.success-close{
  position: absolute;
  right: -1rem;
  top: -1rem;
  border-radius: 999px;
}

/* ====== Link activo ====== */
.active{
  box-shadow: 0 8px 20px var(--shadow-strong);
  background: black ;
  border-radius: .6rem;
}

/* ====== THEME 1: Gris suave ====== */
.theme-gray{
  --bg: #f7f7f7;
  --bg-softer: #f0f0f0;
  --panel: #ffffff;
  --panel-strong: #f4f4f4;
  --line: #d8d8d8;
  --text: #2c2c2c;
  --text-weak: #6a6a6a;
  --text-strong: #1e1e1e;
  --muted: #8a8a8a;
  --muted-strong: #4f4f4f;
  --btn: #e9e9e9;
  --btn-hover: #dedede;
  --shadow: rgba(0,0,0,.06);
  --shadow-strong: rgba(0,0,0,.12);
}

/* ====== THEME 2: Gris grafito (opción) ====== */
.theme-ink{
  --bg: #1b1b1b;
  --bg-softer: #222;
  --panel: #202020;
  --panel-strong: #2a2a2a;
  --line: #3a3a3a;
  --text: #e6e6e6;
  --text-weak: #b8b8b8;
  --text-strong: #ffffff;
  --muted: #9a9a9a;
  --muted-strong: #d0d0d0;
  --btn: #2a2a2a;
  --btn-hover: #333;
  --shadow: rgba(0,0,0,.25);
  --shadow-strong: rgba(0,0,0,.4);
}

/* Ajuste del tag activo anterior (mantengo tu clase por compatibilidad) */
.active {
  color: var(--text);
}


/* ===== Botón seleccionado: texto blanco + fondo negro ===== */

/* 1) Botones dentro de RouterLink activo (categorías, sedes, etc.) */
.chip-link.active :deep(.p-button),
.chip-link.full-active :deep(.p-button) {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}
.chip-link.active :deep(.p-button .p-button-label),
.chip-link.full-active :deep(.p-button .p-button-label),
.chip-link.active :deep(.p-button .p-button-icon),
.chip-link.full-active :deep(.p-button .p-button-icon) {
  color: #fff !important;
}

/* 2) Botones PrimeVue con estado “destacado/seleccionado” (p.ej. ToggleButton) */
:deep(.p-button.p-highlight),
:deep(.p-button.is-selected) {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}
:deep(.p-button.p-highlight .p-button-label),
:deep(.p-button.p-highlight .p-button-icon),
:deep(.p-button.is-selected .p-button-label),
:deep(.p-button.is-selected .p-button-icon) {
  color: #fff !important;
}

/* 3) Mantén el esquema al pasar el mouse / click */
.chip-link.active :deep(.p-button:hover),
.chip-link.full-active :deep(.p-button:hover),
:deep(.p-button.p-highlight:hover),
:deep(.p-button.is-selected:hover),
.chip-link.active :deep(.p-button:active),
.chip-link.full-active :deep(.p-button:active),
:deep(.p-button.p-highlight:active),
:deep(.p-button.is-selected:active) {
  background: #000 !important;
  border-color: #000 !important;
  color: #fff !important;
}

</style>
