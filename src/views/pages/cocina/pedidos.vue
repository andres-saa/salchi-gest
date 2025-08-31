<template>
  <div class="kitchen-layout xl:mx-0 mx-0 py-0 mt-6 px-0" style="background-color: white; width: 100%;">

    <!-- Topbar: Sedes + búsqueda -->
    <div class="topbar shadow-1">
      <!-- Barra de sedes arriba -->
      <div class="sitesbar">


        <div class="sites-scroll-x" v-if="sites.length">
          <Button
            v-for="site in sites.filter(s => s.show_on_web)"
            :key="site.site_id"
            class="site-item"
            :class="{ active: site_cocina.site?.site_id === site.site_id }"
            text
            :label="site.site_name"
            :aria-pressed="site_cocina.site?.site_id === site.site_id"
            @click="site_cocina.site = site"
          />

     
        <InputText
        style="height: 2.5rem"
          
          v-model.trim="searchId"
          placeholder="Buscar por id (sin #)"
          inputmode="numeric"
          autocomplete="off"
          aria-label="Buscar por ID de orden"
          @keyup.enter="search"
        />
        <InputMask
        style="height: 2.5rem"
          v-model="searchPhoneNumber"
          prefix="+57"
          mask="999 999 9999"
          placeholder="Buscar por teléfono"
          autocomplete="tel"
          aria-label="Buscar por número de teléfono"
          @keyup.enter="search"
        />
        <Button
        style="height: 2.5rem"
          @click="search"
          severity="help"
          icon="pi pi-search"
          label="Buscar"
          :disabled="!searchId && !searchPhoneNumber"
        />

        </div>
        
      </div>

      <!-- Búsqueda -->
   
    </div>

    <!-- Contenido principal -->
    <main class="main-area">
      <DialogoPedido />

      <!-- Mensaje global si no hay ningún pedido -->
      <div v-if="totalOrders === 0" class="col-12 p-3">
        <div class="empty-state">
          <i class="pi pi-inbox empty-icon" aria-hidden="true"></i>
          <p class="empty-text">hoy no tenemos pedidos para esta sede aun.</p>
        </div>
      </div>

      <!-- Secciones (máx 3 columnas, min 400px c/u) -->
      <div v-else class="sections-row">
        <!-- RECIBIDOS -->
        <section class="section-col">
          <div class="panel-wrap">
            <div class="shadow-4 contenedor panel" style="overflow: hidden; background-color:#ffad53">
              <div style="height: 100%; width: 100%;">
                <p class="col-12 text-center shadow-4 panel-header">
                  <span class="text-center text-2xl" style="color: black;font-weight: bold;">
                    <i class="pi pi-envelope text-2xl" aria-hidden="true"></i>
                    RECIBIDOS
                    <small class="badge-count">{{ recibidos.length }}</small>
                  </span>
                </p>

                <div class="lg:pb-8 panel-body" style="height: 100%; overflow-y: auto;">
                  <div v-if="!recibidos.length" class="sub-empty-state">
                    <i class="pi pi-inbox" aria-hidden="true"></i>
                    <span>sin pedidos "recibidos"</span>
                  </div>
                  <transition-group v-else name="fade" tag="div">
                    <div class="px-3 py-2" v-for="orden in recibidos" :key="`recibida-${orden.order_id}`">
                      <OrderItem :order="orden" />
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- EN PREPARACIÓN -->
        <section class="section-col">
          <div class="panel-wrap">
            <div class="shadow-4 contenedor panel" style="overflow: hidden; background-color:#8e3693">
              <div style="height: 100%; width: 100%;">
                <p class="col-12 text-center shadow-4 panel-header">
                  <span class="text-center text-2xl" style="color: black;font-weight: bold;">
                    <i class="pi pi-clock text-2xl" aria-hidden="true"></i>
                    EN PREPARACIÓN
                    <small class="badge-count">{{ enPreparacion.length }}</small>
                  </span>
                </p>

                <div class="lg:pb-8 panel-body" style="height: 100%; overflow-y: auto;">
                  <div v-if="!enPreparacion.length" class="sub-empty-state">
                    <i class="pi pi-inbox" aria-hidden="true"></i>
                    <span>sin pedidos "en preparación"</span>
                  </div>
                  <transition-group v-else name="fade" tag="div">
                    <div class="px-3 py-2" v-for="orden in enPreparacion" :key="`prep-${orden.order_id}`">
                      <OrderItem :order="orden" />
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </section>


                <section class="section-col">
          <div class="panel-wrap">
            <div class="shadow-4 contenedor panel" style="overflow: hidden; background-color:#914">
              <div style="height: 100%; width: 100%;">
                <p class="col-12 text-center shadow-4 panel-header">
                  <span class="text-center text-2xl" style="color: black;font-weight: bold;">
                    <i class="pi pi-book text-2xl" aria-hidden="true"></i>
                    DOMICILIARIO SOLICITADO
                    <small class="badge-count">{{ domiciliario_solicitao.length }}</small>
                  </span>
                </p>

                <div class="lg:pb-8 panel-body" style="height: 100%; overflow-y: auto;">
                  <div v-if="!domiciliario_solicitao.length" class="sub-empty-state">
                    <i class="pi pi-inbox" aria-hidden="true"></i>
                    <span>sin pedidos "para recoger"</span>
                  </div>
                  <transition-group v-else name="fade" tag="div">
                    <div class="px-3 py-2" v-for="orden in domiciliario_solicitao" :key="`dom-${orden.order_id}`">
                      <OrderItem :order="orden" />
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ENVIADOS -->
        <section class="section-col">
          <div class="panel-wrap">
            <div class="shadow-4 contenedor panel" style="overflow: hidden; background-color:#00bf7a">
              <div class="lg:pb-8 panel-body" style="height: 100%; width: 100%;">
                <p class="col-12 text-center shadow-4 panel-header">
                  <span class="text-center text-2xl" style="color: black;font-weight: bold;">
                    <i class="pi pi-send text-2xl" aria-hidden="true"></i>
                    ENVIADOS
                    <small class="badge-count">{{ enviados.length }}</small>
                  </span>
                </p>

                <div style="height: 100%; overflow-y: auto;">
                  <div v-if="!enviados.length" class="sub-empty-state">
                    <i class="pi pi-inbox" aria-hidden="true"></i>
                    <span>sin pedidos "enviados"</span>
                  </div>
                  <transition-group v-else name="fade" tag="div">
                    <div class="px-3 py-2" v-for="orden in enviados" :key="`env-${orden.order_id}`">
                      <OrderItem :id="orden.order_id" :order="orden" />
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CANCELADOS (solo si hay) -->
        <section class="section-col" v-if="cancelados.length">
          <div class="panel-wrap">
            <div class="shadow-4 contenedor panel" style="overflow: hidden; background-color:red">
              <div class="lg:pb-8 panel-body" style="height: 100%; width: 100%;">
                <p class="col-12 text-center shadow-4 panel-header">
                  <span class="text-center text-2xl" style="color: black;font-weight: bold;">
                    <i class="pi pi-times text-2xl" aria-hidden="true"></i>
                    CANCELADOS
                    <small class="badge-count">{{ cancelados.length }}</small>
                  </span>
                </p>

                <div style="height: 100%; overflow-y: auto;">
                  <transition-group name="fade" tag="div">
                    <div class="px-3 py-2" v-for="orden in cancelados" :key="`canc-${orden.order_id}`">
                      <OrderItem :order="orden" />
                    </div>
                  </transition-group>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import DialogoPedido from './DialogoPedido.vue';
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import OrderItem from './OrderItem.vue';
import { useOrderStore } from '@/store/order';
import { siteService } from '@/service/siteService.js';
import { orderService } from '@/service/cocina/orderService.js';
import { useSitesCocinaStore } from '@/store/siteCocina';

const sites = ref([]);
const store = useOrderStore();
const site_cocina = useSitesCocinaStore();
const searchId = ref('');
const searchPhoneNumber = ref('');

/* Grupos como computeds */
const recibidos = computed(() =>
  store.TodayOrders.filter(o => o.current_status === 'generada')
);
const enPreparacion = computed(() =>
  store.TodayOrders.filter(o => o.current_status === 'en preparacion')
);

const domiciliario_solicitao = computed(() =>
  store.TodayOrders.filter(o => o.current_status === 'domiciliario solicitado')
)

const enviados = computed(() =>
  store.TodayOrders.filter(o => o.current_status === 'enviada')
);
const cancelados = computed(() =>
  store.TodayOrders.filter(o => o.current_status === 'cancelada')
);

/* Conteo total para estado global */
const totalOrders = computed(() =>
  recibidos.value.length + enPreparacion.value.length + enviados.value.length + cancelados.value.length + domiciliario_solicitao.value.length
);

onMounted(() => {
  store.startOrderUpdates();
});
onUnmounted(() => {
  store.stopOrderUpdates();
});

onMounted(async () => {
  sites.value = await siteService.getSites();
  store.getTodayOrders();
});

watch(() => site_cocina.site, () => {
  store.getTodayOrders();
});

watch(searchId, () => {
  searchPhoneNumber.value = '';
});
watch(searchPhoneNumber, () => {
  searchId.value = '';
});

const search = () => {
  if (searchId.value !== '') {
    searchOrder_id(searchId.value);
  } else if (searchPhoneNumber.value !== '') {
    searchPhone(searchPhoneNumber.value?.split(' ').join(''));
  }
};

const searchOrder_id = async (id) => {
  const order = await orderService.getOrderById(id);
  if (order?.order_id) {
    store.setVisible('currentOrder', true);
    store.setOrder(order);
    store.currentSearchingOrder = order;
  } else {
    alert('Orden no encontrada');
  }
};

const searchPhone = async (phone) => {
  const order = await orderService.getOrderByPhone(phone);
  if (order?.order_id) {
    store.setVisible('currentOrder', true);
    store.setOrder(order);
    site_cocina.site = sites.value.find(site => site.site_id == order.site_id);
    store.currentSearchingOrder = order;
  } else {
    alert('Orden no encontrada');
  }
};
</script>

<style scoped>
/* ===== Layout general (sin sidebar) ===== */
.kitchen-layout {
  /* display: grid; */
  grid-template-columns: 1fr;
}

/* ===== Topbar (sedes + búsqueda) ===== */
.topbar {
  position: sticky;
  top: 3rem;
  z-index: 5;
  background: white;
  padding: .5rem .75rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* gap: .75rem; */
  border: 1px solid #00000014;
}

/* Bloque de sedes arriba */
.sitesbar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
}
.sitesbar-header {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: 700;
}
.sites-scroll-x {
  display: flex;
  gap:  .9rem;
  flex-wrap: wrap;
  overflow-x: auto;
  padding-bottom: .25rem;
  -webkit-overflow-scrolling: touch;
}
.sites-scroll-x::-webkit-scrollbar { height: .45rem; }
.sites-scroll-x::-webkit-scrollbar-thumb {
  background-color: #00000025;
  border-radius: 999px;
}

/* Botones de sede */
.site-item {
  white-space: nowrap;
  justify-content: flex-start;
  /* border-radius: 999px !important; */
  color: black;
  padding-inline: .75rem;
  border-radius: 0;
  padding: .3rem .5rem;
}
.site-item.active {
  font-weight: 700;
  /* background-color: black !important; */
  /* color: white !important; */
  box-shadow: 0 .4rem 0  #000000;
}

/* Búsqueda */
.search-wrap {
  display: flex;
  gap: .75rem;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .topbar {
    flex-direction: column; /* mantiene dos renglones en desktop */
  }
}

/* ===== Secciones ===== */
.sections-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: stretch;
}
.section-col {
  flex: 1 1 400px;
  max-width: 100%;
  display: flex;
}
@media (min-width: 992px) {
  .section-col { max-width: calc(50% - .5rem); }
}
@media (min-width: 1300px) {
  .section-col { max-width: calc(33.333% - .67rem); }
}

.panel-wrap {  width: 100%; margin-inline: auto; display: flex; }
.contenedor { height: calc(100vh - 8rem); border-radius: 0.5rem; width: 100%; }
.panel { border: 1px solid #00000014; width: 100%; }
.panel-header {
  background-color: #ffffff61;
  position: sticky;
  top: 0;
  z-index: 2;
  margin: 0;
  padding: .75rem 1rem;
  backdrop-filter: blur(2px);
}
.panel-body { padding-top: .25rem; }
.badge-count { background: #00000014; padding: .15rem .5rem; border-radius: 999px; margin-left: .5rem; font-weight: 600; }

/* Estado vacío global */
.empty-state {
  max-width: 560px;
  margin: 1rem auto 0;
  padding: 2rem 1rem;
  border: 1px dashed #d8d8d8;
  border-radius: .75rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}
.empty-icon { font-size: 1.5rem; opacity: .6; }
.empty-text { margin: 0; font-weight: 600; opacity: .85; }

/* Estado vacío por sección */
.sub-empty-state {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 1rem;
  margin: .5rem 1rem 1rem;
  border: 1px dashed #0000001a;
  border-radius: .5rem;
  background: #ffffff80;
  font-weight: 600;
  opacity: .9;
}

/* Hover de tarjeta pedido */
.pedido {
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.742);
  transition: .3s all ease;
}
.pedido:hover { background-color: #fff; }

/* Scrollbar general */
::-webkit-scrollbar { width: .5rem; height: .5rem; }
::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 9px;
  height: 10rem;
}

/* Transiciones */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(0.5rem); }

/* (Clases legacy conservadas) */
.RECIBIDOS { background-color: rgba(246, 255, 0, 0.73); }
.EN { background-color: rgba(66, 255, 255, 0.73); }
.ENVIADOS { background-color: rgba(123, 255, 66, 0.73); }
</style>
