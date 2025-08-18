<template>
    <div class="43f1 43f5 md:43f0 43f12">
      <!-- Contenedor principal “Resumen” -->
      <div class="sticky-summary 43f12 43f3 43f0">
        <h5><b>Resumen</b></h5>
        <h5><b>productos</b></h5>
  
        <!-- Lista de productos -->
        <div v-for="product in store.cart" :key="product.productogeneral_id">
          <div class="43f0 43f0 product-line">
            <div class="43f6 43f2 43f0 43f0">
              <h6 class="43f0">
                <span class="span-minwidth">( {{ product.pedido_cantidad }} ) </span>
                <span style="font-weight: 400;"> {{ product.pedido_nombre_producto }}</span>
              </h6>
  
              <h6
                class="43f0 43f3 "
                style="margin-left: 1rem;"
                v-for="i in product.lista_productocombo"
                :key="i.producto_id"
              >
                ( {{ product.pedido_cantidad }} ) <b style="margin-right: .5rem;">{{ parseInt(i.pedido_cantidad) }}</b>
                <span class="font-weight-400">{{ i.pedido_nombre }}</span>
              </h6>
            </div>
  
            <div class="43f6 43f0 text-right 43f2">
              <h6 v-if="product.modificadorseleccionList.length < 1" class="text-end">
                {{ formatoPesosColombianos(product.pedido_precio * product.pedido_cantidad) }}
              </h6>
              <h6 v-else class="text-end">
                {{ formatoPesosColombianos(product.pedido_base_price * product.pedido_cantidad) }}
              </h6>
            </div>
          </div>
  
          <div class="addition-item" v-for="item in product.modificadorseleccionList" :key="item">
            <div class="addition-ite43finner">
              <span class="text adicion">
                <span><b>- ( {{ product.pedido_cantidad }} ) {{ item.modificadorseleccion_cantidad }}</b></span>
                {{ item.modificadorseleccion_nombre }}
              </span>
              <span v-if="item.pedido_precio > 0" class="pl-2 text-sm">
                <b>
                  {{
                    formatoPesosColombianos(
                      item.pedido_precio * item.modificadorseleccion_cantidad * product.pedido_cantidad
                    )
                  }}
                </b>
              </span>
            </div>
          </div>
        </div>
  
        <hr class="43f0 43f2" />
  
        <div class="grid summary-grid">
          <div class="col-6 my-0 py-0">
            <span><b>Subtotal</b></span>
          </div>
          <div class="col-6 my-0 text-right py-0 text-right text-end">
            <span>
              <b>{{ formatoPesosColombianos(store.cartTotal) }}</b>
            </span>
          </div>
  
          <div class="col-6 my-0 py-0">
            <span
              :style="siteStore.location.neigborhood.delivery_price == 0 ? 'text-decoration: line-through;' : ''"
              ><b>Domicilio</b></span
            >
          </div>
          <div class="col-6 my-0 text-right py-0 text-end">
            <span
              v-if="siteStore.location.neigborhood.delivery_price === 0 && siteStore.location.site?.site_id != 33"
              class="primary-color"
            >
              <b>
                {{ route.path.includes('reservas') ? 'Ir a la sede' : '$0' }}
              </b>
            </span>
            <span>
              <b>{{ formatoPesosColombianos(siteStore.location.neigborhood.delivery_price) }}</b>
            </span>
          </div>
  
          <div class="col-6 my-0 py-0">
            <span><b>Total</b></span>
          </div>
          <div
            class="col-6 my-0 text-right py-0 text-end"
            v-if="
              siteStore.location.neigborhood.delivery_price ||
              siteStore.location.neigborhood.delivery_price === 0
            "
          >
            <span
              ><b>{{
                formatoPesosColombianos(
                  store.cartTotal + siteStore.location.neigborhood.delivery_price
                )
              }}</b></span
            >
          </div>
        </div>
  
        <!-- Botones de navegación y acciones -->
        <router-link to="/call-center-vender" v-if="route.path.includes('cart')">
          <Button
            outlined
            icon="pi pi-shopping-cart"
            label="Volver al menu'"
            class="43f4 button-common button-transparent button-fullwidth button-bold"
            severity="danger"
          />
        </router-link>
  
        <router-link to="/call-center-vender/cart" v-else-if="route.path != '/reservas'">
          <Button
            outlined
            icon="pi pi-arrow-left"
            label="Volver al carrito"
            class="43f4 button-common button-transparent button-fullwidth button-bold"
            severity="danger"
          />
        </router-link>
  
        <Tag
          v-if="siteStore.status?.status == 'closed' && route.path != '/reservas'"
          class="43f2 tag-fullheight"
          severity="danger"
        >
          Cerrado, abre a las {{ siteStore.status.next_opening_time }}
        </Tag>
  
        <!-- === Acciones que ahora abren el diálogo de confirmación y validación === -->
  
        <!-- Pedir (desde /call-center-vender/cart → /call-center-vender/pay) -->
        <router-link to="/call-center-vender/pay"
                v-if="route.path.includes('cart') ">
                <Button iconPos="right" icon="pi pi-arrow-right" label="Pedir"
                    class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
                    severity="help"></Button>
            </router-link>
  
        <!-- Finalizar pedido al reservar -->
        <div v-else-if="route.path.includes('reservas')">
          <Button
            iconPos="right"
            icon="pi pi-arrow-right"
            label="Finalizar pedido"
            class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
            severity="help"
            :disabled="sending || reportes.loading.visible"
            @click="openConfirm('reservas_finalize')"
          />
        </div>
  
        <!-- Finalizar pedido (carrito normal -> /pay) si el restaurante NO está cerrado -->
        <div
          v-else-if="
            siteStore.status?.status !== 'closed' && siteStore.status?.status && route.path == '/cart'
          "
        >
          <Button
            iconPos="right"
            icon="pi pi-arrow-right"
            label="Finalizar pedido"
            class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
            severity="help"
            :disabled="sending || reportes.loading.visible"
            @click="openConfirm('cart_to_pay')"
          />
        </div>
  
        <!-- Enviar orden en pantalla de pago del call center -->
        <div v-else-if="route.path == '/call-center-vender/pay'">
          <Button
            :disabled="reportes.loading.visible || sending"
            iconPos="right"
            icon="pi pi-arrow-right"
            label="Finalizar pedido"
            class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
            severity="help"
            @click="openConfirm('send_order_callcenter_pay')"
          />
        </div>
      </div>
  
      <!-- ───────────────────────────────────────────────
           Dialogo de Confirmación + Validación
      ─────────────────────────────────────────────── -->
      <Dialog
        v-model:visible="confirm.visible"
        modal
        :closable="true"
        closeOnEscape
        style="width: 100%; max-width: 46rem;"
      >
        <template #header>
          <h3 style="margin:0;"><b>Confirmar pedido</b></h3>
        </template>
  
        <!-- Errores de validación -->
        <div v-if="validationErrors.length" class="validation-box">
          <Tag severity="danger" class="mb-2">Faltan datos para continuar</Tag>
          <ul class="errors-list">
            <li v-for="(err, idx) in validationErrors" :key="idx">• {{ err }}</li>
          </ul>
        </div>
  
        <div class="confirm-grid">
          <!-- Datos -->
          <div class="confirm-section">
            <h4>Datos del cliente</h4>
            <ul class="clean-list">
              <li><b>Nombre:</b> {{ user.user.name || '—' }}</li>
              <li><b>Teléfono:</b> {{ user.user.phone_number || '—' }}</li>
              <li v-if="user.user.email"><b>Email:</b> {{ user.user.email }}</li>
              <li><b>Método de entrega:</b> {{ user.user.order_type?.name || '—' }}</li>
              <li v-if="needsAddress"><b>Dirección:</b> {{ addressShown }}</li>
              <li><b>Sede:</b> {{ siteStore.location?.site?.site_name || '—' }}</li>
              <li v-if="needsPlate"><b>Placa:</b> {{ user.user.placa || '—' }}</li>
            </ul>
  
            <div style="display:flex; gap:.5rem; flex-wrap: wrap; margin:.25rem 0;">
              <Tag
                v-if="user.user.site?.nearest"
                :severity="user.user.site.nearest.in_coverage ? 'success' : 'danger'"
              >
                {{ user.user.site?.nearest?.in_coverage ? 'En cobertura' : 'Fuera de cobertura' }}
              </Tag>
              <Tag v-if="user.user.site?.nearest?.distance_miles">
                Distancia: {{ user.user.site.nearest.distance_miles }} millas
              </Tag>
              <Tag v-if="deliveryFeeNumber >= 0" severity="success">
                Domicilio: {{ formatoPesosColombianos(deliveryFeeNumber) }}
              </Tag>
              <Tag v-if="user.user.payment_method_option?.name" severity="contrast">
                Pago: {{ user.user.payment_method_option.name }}
              </Tag>
            </div>
  
            <div v-if="store.cart?.order_notes" class="notes-box">
              <b>Notas:</b> {{ store.cart.order_notes }}
            </div>
          </div>
  
          <!-- Items -->
          <div class="confirm-section">
            <h4>Productos</h4>
            <div class="items-table">
              <div class="items-head">
                <div>Producto</div>
                <div class="text-right">Cant.</div>
                <div class="text-right">Unit.</div>
                <div class="text-right">Total</div>
              </div>
              <div
                v-for="(p, idx) in store.cart"
                :key="p.productogeneral_id || p.id || idx"
                class="items-row"
              >
                <div class="ellipsis">
                  {{ p.pedido_nombre_producto || p.name || 'Producto' }}
                </div>
                <div class="text-right">{{ Number(p.pedido_cantidad ?? 1) }}</div>
                <div class="text-right">
                  {{
                    formatoPesosColombianos(
                      (p.modificadorseleccionList?.length ? p.pedido_base_price : p.pedido_precio) || 0
                    )
                  }}
                </div>
                <div class="text-right">
                  {{
                    formatoPesosColombianos(
                      (p.modificadorseleccionList?.length ? p.pedido_base_price : p.pedido_precio) *
                        Number(p.pedido_cantidad ?? 1)
                    )
                  }}
                </div>
              </div>
  
              <div class="items-foot">
                <div class="grow"></div>
                <div class="text-right" style="grid-column: span 2;"><b>Subtotal</b></div>
                <div class="text-right"><b>{{ formatoPesosColombianos(store.cartTotal) }}</b></div>
  
                <div class="grow"></div>
                <div class="text-right" style="grid-column: span 2;">Domicilio</div>
                <div class="text-right">{{ formatoPesosColombianos(deliveryFeeNumber) }}</div>
  
                <div class="grow"></div>
                <div class="text-right" style="grid-column: span 2;"><b>Total a pagar</b></div>
                <div class="text-right">
                  <b>{{
                    formatoPesosColombianos(store.cartTotal + deliveryFeeNumber)
                  }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <template #footer>
          <div style="display:flex; gap:.5rem; width:100%; justify-content:flex-end;">
            <Button
              label="Editar"
              class="p-button-secondary"
              text
              @click="confirm.visible = false"
            />
            <Button
              label="Continuar"
              style="background:black; border:none; color:white"
              :disabled="!canContinue || sending || reportes.loading.visible"
              @click="proceed()"
            />
          </div>
        </template>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { usecartStore } from './store/shoping_cart';
  import { useSitesStore } from './store/site';
  import { useUserStore } from './store/user';
  import { useReportesStore } from './store/ventas';
  import { orderService } from './service/order/orderService';
  import { formatoPesosColombianos } from './service/utils/formatoPesos';
  
  const route = useRoute();
  const router = useRouter();
  
  const reportes = useReportesStore();
  const store = usecartStore();
  const siteStore = useSitesStore();
  const user = useUserStore();
  
  const sending = ref(false);
  
  /* Stub para no romper los watchers existentes */
  const agrupados = ref({});
  const update = () => {}; // ← evita errores por el watcher que llama update()
  
  onMounted(() => {
    // update();
  });
  
  watch(
    () => store.cart.additions,
    () => {
      update();
    },
    { deep: true }
  );
  
  /* ─────────────────────────────────────────────
     Confirmación + Validación
     ──────────────────────────────────────────── */
  const confirm = ref({
    visible: false,
    action: /** @type {null | 'to_callcenter_pay_from_cart' | 'reservas_finalize' | 'cart_to_pay' | 'send_order_callcenter_pay'} */ (null)
  });
  
  const openConfirm = (actionName) => {
    confirm.value.action = actionName;
    confirm.value.visible = true;
  };
  
  const needsAddress = computed(() => !user.user.order_type || user.user.order_type?.id !== 2);
  const needsPlate = computed(
    () => user.user.order_type?.id === 2 && siteStore.location?.site?.site_id === 33
  );
  const addressShown = computed(
    () => user.user.address || user.user.site?.description || '—'
  );
  const deliveryFeeNumber = computed(
    () => Number(siteStore?.location?.neigborhood?.delivery_price ?? 0)
  );
  
  /* Reglas de validación */
  const digits = (s) => (String(s || '')).replace(/\D/g, '');
  const paymentRequiredForAction = computed(() => {
    // Exige método de pago cuando realmente se envía/termina la orden o va a /pay
    return (
      confirm.value.action === 'send_order_callcenter_pay' ||
      confirm.value.action === 'cart_to_pay'
    );
  });
  
  const validationErrors = computed(() => {
    const errs = [];
  
    if (!Array.isArray(store.cart) || store.cart.length === 0) {
      errs.push('El carrito está vacío.');
    }
    if (!user.user.name) {
      errs.push('Falta el nombre.');
    }
    const phoneDigits = digits(user.user.phone_number);
    if (!phoneDigits || phoneDigits.length < 7) {
      errs.push('Teléfono inválido o incompleto.');
    }
    if (!user.user.order_type?.id) {
      errs.push('Selecciona el método de entrega.');
    }
  
    if (needsAddress.value) {
      if (!(user.user.address || user.user.site?.description)) {
        errs.push('Falta la dirección de entrega.');
      }
      // En sedes 33/35/36 se valida cobertura si viene de Google/Places
      const isSpecial = [33, 35, 36].includes(siteStore.location?.site?.site_id || 0);
      if (isSpecial && user.user.site && user.user.site.nearest && !user.user.site.nearest.in_coverage) {
        errs.push('La dirección está fuera de cobertura de la sede seleccionada.');
      }
    }
  
    if (needsPlate.value && !user.user.placa) {
      errs.push('Ingresa la placa del vehículo (requerido para recoger en sede 33).');
    }
  
    if (paymentRequiredForAction.value) {
      // Si tienes método de pago en el estado, pídeselo
      const pm = user.user.payment_method_option;
      if (!pm || !(pm.id || pm.name)) {
        errs.push('Selecciona un método de pago.');
      }
    }
  
    return errs;
  });
  
  const canContinue = computed(() => validationErrors.value.length === 0);
  
  /* Ejecuta lo que antes hacían tus botones/enlaces, pero sólo si la validación pasa */
  const proceed = async () => {
    if (!canContinue.value) return;
    confirm.value.visible = false;
    sending.value = true;
  
    try {
      switch (confirm.value.action) {
        case 'to_callcenter_pay_from_cart':
          await router.push('/call-center-vender/pay');
          break;
        case 'reservas_finalize':
          try { await orderService.sendOrderReserva(); } catch (e) { console.error(e); }
          await router.push('/pay');
          break;
        case 'cart_to_pay':
          await router.push('/pay');
          break;
        case 'send_order_callcenter_pay':
          await orderService.sendOrder();
          break;
      }
    } catch (err) {
      console.error('Error al continuar:', err);
    } finally {
      sending.value = false;
    }
  };
  </script>
  
  <style scoped>
  /* --- Clases nuevas para reemplazar estilos en línea --- */
  
  /* Contenedor “sticky” del resumen */
  .sticky-summary {
    position: sticky;
    padding: 1rem;
    max-height: min-content;
    background-color: white;
    box-shadow: 0 1rem 1rem #00000020;
    top: 9rem;
    border-radius: 0.5rem;
    z-index: 10;
  }
  
  /* Línea de cada producto (display: flex; justify-content: space-between) */
  .product-line {
    display: flex;
    justify-content: space-between;
  }
  
  /* Span con min-width: 3rem; y width: 100% */
  .span-minwidth {
    min-width: 3rem;
    width: 100%;
  }
  
  /* Forzar texto a “end” */
  .text-end {
    text-align: end;
    width: 100%;
  }
  
  /* Contenedor de adiciones agrupadas */
  .addition-group {
    position: relative;
    border-radius: 0.3rem;
  }
  
  /* Cada ítem de adicional */
  .addition-item {
    display: flex;
    margin-left: 1rem;
    gap: 1rem;
    align-items: center;
  }
  h6 {
    margin: 0;
  }
  /* Contenedor interno de ítem adicional */
  .addition-ite43finner {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
  }
  
  /* Grid para los subtotales y totales */
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Texto con color primario */
  .primary-color {
    color: var(--primary-color);
  }
  
  /* Ajustes de fuente para la descripción base (opcional) */
  .font-weight-400 {
    font-weight: 400;
  }
  
  /* Botones y clases genéricas */
  .button-common {
    outline: none;
    margin: 0.5rem 0;
  }
  .button-no-outline { outline: none; }
  .button-no-border { border: none; }
  .button-fullwidth { width: 100%; }
  .button-bold { font-weight: bold; }
  .button-transparent { background-color: rgba(0, 0, 0, 0); }
  .button-black { background-color: black; }
  
  /* Tag de aviso de “Restaurante cerrado” */
  .tag-fullheight {
    width: 100%;
    height: 2.5rem;
  }
  
  /* Estilos globales ya existentes */
  .43fshadow {
    box-shadow: 0 0.3rem 5px rgba(0, 0, 0, 0.15);
  }
  button { text-transform: uppercase; }
  * { text-transform: uppercase; font-size: 0.9rem; }
  *::first-letter { text-transform: uppercase; }
  
  /* ── Estilos del diálogo de confirmación ───────────────────────── */
  .confirm-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (min-width: 900px) {
    .confirm-grid { grid-template-columns: 1fr 1fr; }
  }
  .confirm-section h4 {
    margin: 0.25rem 0 0.5rem 0;
    font-weight: 700;
  }
  .clean-list { margin: 0; padding-left: 1rem; }
  .clean-list li { margin: 0.15rem 0; }
  .items-table { width: 100%; display: grid; gap: 0.25rem; }
  .items-head, .items-row, .items-foot {
    display: grid;
    grid-template-columns: 1fr 5rem 7rem 7rem;
    gap: 0.5rem;
    align-items: center;
  }
  .items-head { font-weight: 700; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem; }
  .items-row { border-bottom: 1px dashed #eee; padding: 0.25rem 0; }
  .items-foot { padding-top: 0.5rem; }
  .grow { grid-column: 1 / 2; }
  .text-right { text-align: right; }
  .ellipsis { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .validation-box {
    background: #fff1f1;
    border: 1px solid #ffd0d0;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .errors-list { margin: 0; padding-left: 1.2rem; }
  .notes-box {
    background: #fafafa;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px dashed #e5e5e5;
    margin-top: 0.5rem;
  }
  </style>
  