<template>
  <!-- ===== Dialog: Traslado de Sede ===== -->
  <Dialog v-model:visible="travelDialog" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>TRASLADO DE SEDE</b></h3>
    </template>

    <form @submit.prevent="submitCancel" class="form-col">
      <label for="sede_destino">SELECCIONE LA SEDE DESTINO</label>

      <Dropdown
        id="sede_destino"
        v-model="sede_destino"
        :options="sites.filter(s => s.show_on_web)"
        optionLabel="site_name"
        optionValue="site_id"
        placeholder="Seleccione la sede destino"
        style="width: 100%;"
      />

      <Button
        :disabled="!sede_destino"
        @click="traslate_order()"
        style="width: 100%; border-radius: 0.5rem"
        label="Trasladar"
        type="submit"
        class="p-button-danger"
        icon="pi pi-share-right"
      />
    </form>
  </Dialog>

  <!-- ===== Dialog: Cambiar Valor del Domicilio ===== -->
  <Dialog v-model:visible="changeDeliveryDialog" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>Cambiar Valor del Domicilio</b></h3>
    </template>

    <form @submit.prevent="submitChangeDeliveryPrice" class="form-col">
      <span>Valor actual del domicilio</span>
      <Tag class="px-4" severity="warning">
        <b>{{ formatoPesosColombianos(store.currentOrder.delivery_price) }}</b>
      </Tag>

      <label for="new_delivery_price">Nuevo valor del domicilio</label>
      <InputNumber
        id="new_delivery_price"
        style="width: 100%"
        v-model="newDeliveryPrice"
        mode="currency"
        currency="COP"
        locale="es-CO"
        maxFractionalDigits="0"
        :min="0"
        :step="100"
        placeholder="Ingresa el nuevo valor"
        required
      />

      <Button
        style="width: 100%; border-radius: 0.5rem"
        label="Cambiar"
        type="submit"
        class="p-button-help"
        icon="pi pi-check"
        :disabled="newDeliveryPrice === null || newDeliveryPrice === undefined || newDeliveryPrice === store.currentOrder.delivery_price"
        @click="changeDeliveryPrice()"
      />
    </form>
  </Dialog>

  <!-- ===== Dialog: Cancelar Orden (simple) ===== -->
  <Dialog v-model:visible="cancelDialogVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>Cancelar Orden</b></h3>
    </template>

    <form @submit.prevent="submitCancel" class="form-col">
      <label for="responsible">Responsable</label>
      <Dropdown
        id="responsible"
        v-model="cancelData.responsible"
        :options="responsibles"
        optionLabel="name"
        placeholder="Selecciona un responsable"
        style="width: 100%"
      />

      <label for="reason">Razón</label>
      <Textarea
        id="reason"
        v-model="cancelData.reason"
        rows="5"
        style="resize: none; width: 100%"
        placeholder="Escribe la razón de la cancelación"
      />

      <Button
        style="width: 100%; border-radius: 0.5rem"
        label="Cancelar"
        type="submit"
        class="p-button-danger"
        icon="pi pi-times"
      />
    </form>
  </Dialog>

  <!-- ===== Dialog: Solicitar Domiciliario (con verificación Shipday) ===== -->
  <Dialog v-model:visible="callDeliveryPersonVisible" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>Solicitar Domiciliario</b></h3>
    </template>

    <form @submit.prevent class="form-col">
      <span>¿Está seguro de llamar a un domiciliario para la orden <b>{{ store.currentOrder.order_id }}</b>?</span>

      <!-- Estado de consulta -->
      <div v-if="shipdayLoading" class="shipday-status loading">
        <ProgressSpinner class="spinner" strokeWidth="6" />
        <span><b>Consultando a Shipday…</b></span>
      </div>

      <div v-else>
        <div v-if="shipdayError" class="shipday-status error">
          <Tag severity="danger"><b>Error:</b> {{ shipdayError }}</Tag>
          <Button style="width: 100%; border-radius: 0.5rem; margin-top: .5rem" label="Reintentar" class="p-button-warning" icon="pi pi-refresh" @click="checkShipdayAvailability" />
        </div>

        <div v-else-if="shipdayData" class="shipday-status ok">
          <Tag :severity="shipdayData.available ? 'success' : 'danger'">
            {{ shipdayData.available ? 'Cobertura disponible en Shipday' : 'Sin cobertura en Shipday' }}
          </Tag>

          <!-- Cotización previa (al crear el pedido) -->
          <div class="quote-card">
            <p class="quote-title"><b>Cotización al crear el pedido</b></p>
            <div class="quote-grid">
              <span>Proveedor</span>
              <span>{{ previousQuote?.name || previousAvailability?.provider || '-' }}</span>

              <span>Tarifa</span>
              <span>{{ formatoUSD(previousQuote?.fee ?? previousAvailability?.fee) }}</span>

              <span>Pickup</span>
              <span>{{ formatIso(addressDetailsValue?.pickup_time_iso || previousQuote?.pickupTime) }}</span>

              <span>Entrega</span>
              <span>{{ formatIso(addressDetailsValue?.delivery_time_iso || previousQuote?.deliveryTime) }}</span>

              <span>Duraciones</span>
              <span>
                {{ (previousQuote?.pickupDuration ?? addressDetailsValue?.pickup_duration_minutes) || '-' }} +
                {{ (previousQuote?.deliveryDuration ?? addressDetailsValue?.delivery_duration_minutes) || '-' }} min
              </span>
            </div>
            <p class="muted">Consultado: {{ formatIso(addressDetailsValue?.shipday_requested_at_iso) }}</p>
            <p class="muted">Ruta: {{ addressDetailsValue?.shipday_payload?.pickupAddress }} → {{ addressDetailsValue?.shipday_payload?.deliveryAddress }}</p>
          </div>

          <!-- Cotización actual (ahora) -->
          <div class="quote-card">
            <p class="quote-title"><b>Cotización ahora</b></p>
            <div class="quote-grid">
              <span>Proveedor</span>
              <span>{{ shipdayData.availability?.provider || shipdayData.shipday_response?.[0]?.name || '-' }}</span>

              <span>Tarifa</span>
              <span>{{ formatoUSD(shipdayData.availability?.fee ?? shipdayData.shipday_response?.[0]?.fee) }}</span>

              <span>Pickup</span>
              <span>{{ formatIso(shipdayData.availability?.pickup_time_iso ?? shipdayData.shipday_response?.[0]?.pickupTime) }}</span>

              <span>Entrega</span>
              <span>{{ formatIso(shipdayData.availability?.delivery_time_iso ?? shipdayData.shipday_response?.[0]?.deliveryTime) }}</span>

              <span>Duraciones</span>
              <span>
                {{ (shipdayData.availability?.pickup_duration_minutes ?? shipdayData.shipday_response?.[0]?.pickupDuration) || '-' }} +
                {{ (shipdayData.availability?.delivery_duration_minutes ?? shipdayData.shipday_response?.[0]?.deliveryDuration) || '-' }} min
              </span>
            </div>
            <p class="muted">Ruta: {{ shipdayData.shipday_payload?.pickupAddress }} → {{ shipdayData.shipday_payload?.deliveryAddress }}</p>
          </div>
        </div>

        <!-- Acción: solicitar -->
        <Button
          :disabled="shipdayLoading || !canRequestDelivery"
          @click="sendDeliveryPerson"
          style="width: 100%; border-radius: 0.5rem"
          label="Solicitar domiciliario"
          type="button"
          class="p-button-help"
          icon="pi pi-send"
        />
      </div>
    </form>
  </Dialog>

  <!-- ===== Dialog: Cancelar Orden (admin con solicitud) ===== -->
  <Dialog v-model:visible="cancelDialogVisibleAdmin" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>Cancelar Orden</b></h3>
    </template>

    <form @submit.prevent="sendRequest" class="form-col">
      <span class="advert advert--danger">Desde el 16 de mayo de 2024, la cancelación de órdenes requerirá autorización.</span>

      <label for="responsible_admin">Responsable</label>
      <Dropdown
        id="responsible_admin"
        v-model="cancelData.responsible"
        :options="responsibles"
        optionLabel="name"
        placeholder="Selecciona un responsable"
        style="width: 100%"
      />

      <label for="reason_admin">Razón</label>
      <Textarea
        id="reason_admin"
        v-model="cancelData.reason"
        rows="5"
        style="resize: none; width: 100%"
        placeholder="Escribe la razón de la cancelación"
      />

      <Button
        style="width: 100%; border-radius: 0.5rem"
        label="Solicitar cancelación"
        type="submit"
        class="p-button-danger"
        icon="pi pi-send"
      />
    </form>
  </Dialog>

  <!-- ===== Dialog: Confirmar Domicilio en $0 ===== -->
  <Dialog :closable="false" style="width: 30rem" modal v-model:visible="showDeleteDeliveryPrice">
    <span class="confirm-text">
      Esta seguro de llevar a $0.00 el valor del domicilio para la orden
      <b>{{ store.currentOrder.order_id }}</b>
      del cliente
      <b>{{ store.currentOrder.user_name }}</b>?
    </span>

    <template #footer>
      <div class="footer-actions">
        <Button
          text
          size="small"
          @click="() => { orderService.deliveryZero(store.currentOrder.order_id); showDeleteDeliveryPrice = false }"
          style="border-radius: 0.3rem; width: 100%"
          severity="danger"
          label="Sí"
          icon="pi pi-check"
        />
        <Button
          size="small"
          @click="showDeleteDeliveryPrice = false"
          style="border-radius: 0.3rem; width: 100%"
          severity="danger"
          label="No"
          icon="pi pi-times"
        />
      </div>
    </template>
  </Dialog>

  <!-- ===== Dialog Principal: Orden (Sitio != 32) ===== -->
  <Dialog
    v-if="store.currentOrder.site_id != 32"
    class="mx-3"
    closeOnEscape
    :closable="false"
    v-model:visible="store.visibles.currentOrder"
    modal
    style="max-height: 95vh; width: 50rem; position: relative;"
  >
    <div>
      <p :class="['estado', (store.currentOrder?.current_status || '').split(' ')[0]]">
        {{ getOrderMessage(store.currentOrder) }}
      </p>
    </div>

    <div id="factura" style="width: 100%">
      <Tag class="tag mb-2" severity="success" v-if="store.currentOrder.responsible_id">
        <i class="pi pi-whatsapp mr-2"></i> TRANSFERENCIA APROBADA
      </Tag>
      <br />
      <Tag class="tag" severity="success" v-if="store.currentOrder.responsible_id">{{ store.currentOrder.name }}</Tag>

      <div>
        <p id="id" class="text-center strong">ID: {{ store.currentOrder.order_id }}</p>
        <p id="cliente" class="text-center strong">
          {{ store.currentOrder.user_name }} {{ store.currentOrder.second_name }}
          {{ store.currentOrder.first_last_name }} {{ store.currentOrder.second_last_name }}
        </p>

        <p class="fecha-hora">
          <b>fecha: {{ store.currentOrder.latest_status_timestamp?.split('T')[0]?.split('-')?.reverse().join('-') }}</b>
          <b>Hora: {{ store.currentOrder.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0, 2)?.join(':') }}</b>
        </p>

        <!-- Encabezado productos -->
        <div class="grid-head">
          <div class="px-2"><b>productos</b></div>
          <div class="px-2 text-right"><b>total</b></div>
        </div>

        <!-- Lista de productos -->
        <div v-for="product in store?.currentOrder?.pe_json?.listaPedidos" :key="product.pedido_productoid">
          <div class="grid-row">
            <p class="m-0">
              <b>({{ product.pedido_cantidad }})</b>
              {{ product.pedido_nombre_producto }}
            </p>
            <p class="m-0 text-right">
              <span v-if="product.pedido_base_price">
                {{ formatoPesosColombianos(product.pedido_base_price * product.pedido_cantidad) }}
              </span>
              <span v-else>
                {{ formatoPesosColombianos(product.pedido_precio) }}
              </span>
            </p>
          </div>

          <p v-if="product.lista_productocombo?.length > 0" class="m-0"><b>COMBO INCLUYE</b></p>
          <p v-for="i in product.lista_productocombo" :key="i.pedido_nombre" class="m-0 ml-3">--
            <b>{{ i.pedido_cantidad }}</b> {{ i.pedido_nombre }}
          </p>

          <div v-for="i in product.modificadorseleccionList" :key="i.modificadorseleccion_nombre" class="grid-row between">
            <p class="m-0">- ({{ product.pedido_cantidad }}) <b>{{ i.modificadorseleccion_cantidad }}</b> {{ i.modificadorseleccion_nombre }}</p>
            <p class="m-0 text-right">{{ formatoPesosColombianos(i.pedido_precio * i.modificadorseleccion_cantidad * product.pedido_cantidad) }}</p>
          </div>

          <div class="divider"></div>
        </div>

        <!-- Totales -->
        <div class="totals-grid">
          <span class="strong">Subtotal</span>
          <p class="text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json.delivery.delivery_pagocon - store.currentOrder.pe_json?.delivery?.delivery_costoenvio) }}
          </p>

          <span class="strong">Domicilio</span>
          <p class="m-0 text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json?.delivery?.delivery_costoenvio) }}
          </p>

          <span class="strong">Total</span>
          <p class="m-0 text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json.delivery.delivery_pagocon) }}
          </p>
        </div>

        <!-- Notas -->
        <p class="section-title"><b>Notas</b></p>
        <p class="notas">{{ store.currentOrder.order_notes?.toLowerCase() }}</p>

        <!-- Cliente -->
        <p class="section-title"><b>cliente</b></p>
        <div class="details-grid">
          <span><b>Nombre</b></span>
          <span>{{ store.currentOrder.user_name }} {{ store.currentOrder.second_name }} {{ store.currentOrder.first_last_name }} {{ store.currentOrder.second_last_name }}</span>

          <span><b>Metodo de entrega</b></span>
          <span>{{ store.currentOrder.order_type }}</span>

          <span v-if="store.currentOrder.placa"><b>Placa del vehiculo</b></span>
          <span v-if="store.currentOrder.placa">{{ store.currentOrder.placa }}</span>

          <span><b>telefono</b></span>
          <span>{{ store.currentOrder.user_phone }}</span>

          <span v-if="store.currentOrder.order_type != 'Pasar a recoger'"><b>direccion</b></span>
          <span v-if="store.currentOrder.order_type != 'Pasar a recoger'">{{ store.currentOrder.user_address?.toLowerCase() }}</span>

          <span><b>metodo de pago</b></span>
          <span>{{ store.currentOrder.payment_method?.toLowerCase() }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="footer-actions">
        <Button v-if="isGenerada" size="small" @click="orderService.prepareOrder(store.currentOrder.order_id)" style="border-radius: 0.3rem; width: 100%" severity="success" label="Preparar" icon="pi pi-cog" />
        <Button v-if="isEnPreparacion || deliverySolicited" size="small" @click="orderService.sendOrder(store.currentOrder.order_id)" style="border-radius: 0.3rem; width: 100%" severity="success" label="Enviar" icon="pi pi-send" />
        <Button size="small" style="border-radius: 0.3rem; width: 100%" @click="() => (travelDialog = true)" severity="warning" label="TRASLADO" icon="pi pi-arrow-right-arrow-left" />
        <Button size="small" style="border-radius: 0.3rem; width: 100%" @click="() => (cancelDialogVisibleAdmin = true)" severity="danger" label="CANCELAR" icon="pi pi-times" />
      </div>

      <div class="footer-row">
        <Button style="width: 100%" icon="pi pi-wallet" @click="() => (changePaymentDialog = true)" label=" m. de pago" severity="success" />
        <Button style="width: 100%" icon="pi pi-home" @click="() => (changeDeliveryDialog = true)" label=" Domicilio" class="p-button-warning" />
        <Button v-if="isEnPreparacion" style="width: 100%" icon="pi pi-send" @click="() => (callDeliveryPersonVisible = true)" label=" Llamar Repartidor" class="p-button-help" />
      </div>
    </template>

    <Button class="shadow-4 close-btn" @click="store.setVisible('currentOrder', false)" icon="pi pi-times" rounded severity="danger" />
  </Dialog>

  <!-- ===== Dialog Principal: Orden (Sitio == 32) ===== -->
  <Dialog
    v-else
    class="mx-3"
    closeOnEscape
    :closable="false"
    v-model:visible="store.visibles.currentOrder"
    modal
    style="max-height: 95vh; width: 50rem; position: relative;"
  >
    <div>
      <p :class="['estado', (store.currentOrder?.current_status || '').split(' ')[0]]">
        {{ getOrderMessage(store.currentOrder) }}
      </p>
    </div>

    <div id="factura" style="width: 100%">
      <Tag class="tag mb-2" severity="success" v-if="store.currentOrder.responsible_id">
        <i class="pi pi-whatsapp mr-2"></i> TRANSFERENCIA APROBADA
      </Tag>
      <br />
      <Tag class="tag" severity="success" v-if="store.currentOrder.responsible_id">{{ store.currentOrder.name }}</Tag>

      <div>
        <p id="id" class="text-center strong">ID: {{ store.currentOrder.order_id }}</p>
        <p id="cliente" class="text-center strong">
          {{ store.currentOrder.user_name }} {{ store.currentOrder.second_name }}
          {{ store.currentOrder.first_last_name }} {{ store.currentOrder.second_last_name }}
        </p>

        <p class="fecha-hora">
          <b>fecha: {{ store.currentOrder.latest_status_timestamp?.split('T')[0] }}</b>
          <b>Hora: {{ store.currentOrder.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0, 2)?.join(':') }}</b>
        </p>

        <!-- Encabezado productos (industrial) -->
        <div class="grid-head industrial">
          <div class="px-2"><b> Cant.</b></div>
          <div class="px-0"><b> producto</b></div>
          <div class="px-0"><b> pres.</b></div>
          <div class="px-0"><b> V. Kilo</b></div>
          <div class="px-2 text-right"><b> total</b></div>
        </div>

        <!-- Lista de productos (industrial) -->
        <div v-for="product in store?.currentOrder?.pe_json?.listaPedidos" :key="product.pedido_productoid">
          <div class="grid-row industrial">
            <p class="m-0"><b>({{ product.pedido_cantidad }} {{ product.unit_measure }})</b></p>
            <p class="m-0">{{ product.pedido_nombre_producto }}</p>
            <p class="m-0">{{ product.presentacion }} {{ product.unit_measure }}</p>
            <p class="m-0">{{ formatoPesosColombianos(product.pedido_precio) }}</p>
            <p class="m-0 text-right">
              <span v-if="product.pedido_base_price">
                {{ formatoPesosColombianos(product.pedido_base_price * product.pedido_cantidad) }}
              </span>
              <span v-else>
                {{ formatoPesosColombianos(product.pedido_precio) }}
              </span>
            </p>
          </div>

          <div v-for="i in product.modificadorseleccionList" :key="i.modificadorseleccion_nombre" class="grid-row between">
            <p class="m-0">- ({{ product.pedido_cantidad }}) <b>{{ i.modificadorseleccion_cantidad }}</b> {{ i.modificadorseleccion_nombre }}</p>
            <p class="m-0 text-right">{{ formatoPesosColombianos(i.pedido_precio * i.modificadorseleccion_cantidad * product.pedido_cantidad) }}</p>
          </div>

          <div class="divider"></div>
        </div>

        <!-- Totales -->
        <div class="totals-grid">
          <span class="strong">Subtotal</span>
          <p class="text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json.delivery.delivery_pagocon - store.currentOrder.pe_json?.delivery?.delivery_costoenvio) }}
          </p>

          <span class="strong">Domicilio</span>
          <p class="m-0 text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json?.delivery?.delivery_costoenvio) }}
          </p>

          <span class="strong">Total</span>
          <p class="m-0 text-right strong">
            {{ formatoPesosColombianos(store.currentOrder.pe_json.delivery.delivery_pagocon) }}
          </p>
        </div>

        <!-- Notas -->
        <p class="section-title"><b>Notas</b></p>
        <p class="notas">{{ store.currentOrder.order_notes?.toLowerCase() }}</p>

        <!-- Cliente -->
        <p class="section-title"><b>cliente</b></p>
        <div class="details-grid">
          <span><b>Nombre</b></span>
          <span>{{ store.currentOrder.user_name }} {{ store.currentOrder.second_name }} {{ store.currentOrder.first_last_name }} {{ store.currentOrder.second_last_name }}</span>

          <span><b>Cedula / Nit</b></span>
          <span>{{ store.currentOrder.cedula_nit }}</span>

          <span><b>Metodo de entrega</b></span>
          <span>{{ store.currentOrder.order_type }}</span>

          <span><b>Fecha de entrega</b></span>
          <span>{{ store.currentOrder.pe_json?.delivery?.delivery_horaentrega }}</span>

          <span v-if="store.currentOrder.placa"><b>Placa del vehiculo</b></span>
          <span v-if="store.currentOrder.placa">{{ store.currentOrder.placa }}</span>

          <span><b>telefono</b></span>
          <span>{{ store.currentOrder.user_phone }}</span>

          <span><b>Correo</b></span>
          <span>{{ store.currentOrder.email }}</span>

          <span v-if="store.currentOrder.order_type != 'Pasar a recoger'"><b>direccion</b></span>
          <span v-if="store.currentOrder.order_type != 'Pasar a recoger'">{{ store.currentOrder.user_address?.toLowerCase() }}</span>

          <span><b>metodo de pago</b></span>
          <span>{{ store.currentOrder.payment_method?.toLowerCase() }}</span>

          <span v-if="store.currentOrder.epayco_ref"><b>Estado del pago</b></span>
          <span v-if="store.currentOrder.epayco_ref">Aprobado</span>

          <span v-if="store.currentOrder.epayco_ref"><b>Referencia de pago</b></span>
          <span v-if="store.currentOrder.epayco_ref">{{ store.currentOrder.epayco_ref }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="footer-actions">
        <Button v-if="isGenerada" size="small" @click="orderService.prepareOrder(store.currentOrder.order_id)" style="border-radius: 0.3rem; width: 100%" severity="success" label="Preparar" icon="pi pi-cog" />
        <Button v-if="isEnPreparacion || deliverySolicited" size="small" @click="orderService.sendOrder(store.currentOrder.order_id)" style="border-radius: 0.3rem; width: 100%" severity="success" label="Enviar" icon="pi pi-send" />
        <Button size="small" style="border-radius: 0.3rem; width: 100%" @click="IMPRIMIR" severity="warning" label="Imprimir" icon="pi pi-print" />
        <Button size="small" style="border-radius: 0.3rem; width: 100%" @click="() => (cancelDialogVisibleAdmin = true)" severity="danger" label="CANCELAR" icon="pi pi-times" />
      </div>

      <div class="footer-row">
        <Button style="width: 100%" icon="pi pi-wallet" @click="() => (changePaymentDialog = true)" label=" metodo de pago" severity="success" />
        <Button style="width: 100%" icon="pi pi-home" @click="() => (changeDeliveryDialog = true)" label=" Domicilio" class="p-button-warning" />
      </div>
    </template>

    <Button class="shadow-4 close-btn" @click="store.setVisible('currentOrder', false)" icon="pi pi-times" rounded severity="danger" />
  </Dialog>

  <!-- ===== Dialog: Cambiar método de pago ===== -->
  <Dialog v-model:visible="changePaymentDialog" closeOnEscape :closable="true" modal style="width: 30rem;">
    <template #header>
      <h3><b>Cambiar Método de Pago</b></h3>
    </template>

    <form @submit.prevent="submitChangePayment" class="form-col">
      <span>Método de Pago actual</span>
      <Tag class="px-4" severity="warning">
        <b>{{ store.currentOrder.payment_method }}</b>
      </Tag>

      <label for="paymentMethod">Nuevo método de pago</label>
      <Dropdown
        id="paymentMethod"
        v-model="newPaymentMethod"
        :options="paymentMethods"
        optionLabel="name"
        optionValue="id"
        placeholder="Selecciona un método de pago"
        style="width: 100%"
        required
      />

      <Button
        style="width: 100%; border-radius: 0.5rem"
        label="Cambiar"
        type="submit"
        class="p-button-help"
        icon="pi pi-check"
        :disabled="!newPaymentMethod"
      />
    </form>
  </Dialog>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useOrderStore } from '@/store/order'
import { orderService } from '@/service/cocina/orderService'
import { fetchService } from '@/service/utils/fetchService'
import { URI } from '@/service/conection'
import { formatoPesosColombianos } from '@/service/formatoPesos'

// ===== Store =====
const store = useOrderStore()
const callDeliveryPersonVisible = ref(false)

// ===== UI State =====
const changeDeliveryDialog = ref(false)
const changePaymentDialog = ref(false)
const cancelDialogVisible = ref(false)
const cancelDialogVisibleAdmin = ref(false)
const travelDialog = ref(false)
const showDeleteDeliveryPrice = ref(false)

// ===== Shipday (disponibilidad actual) =====
const shipdayLoading = ref(false)
const shipdayData = ref(null) // respuesta actual de disponibilidad
const shipdayError = ref(null)

const checkShipdayAvailability = async () => {
  shipdayLoading.value = true
  shipdayError.value = null
  shipdayData.value = null
  try {
    const orderId = store.currentOrder.order_id
    // Llamado directo al endpoint de disponibilidad
    const res = await fetchService.post(`https://api.stripe.salchimonster.com/shipday/availability/${orderId}`)
    shipdayData.value = res
  } catch (e) {
    shipdayError.value = e?.message || 'No se pudo consultar Shipday'
  } finally {
    shipdayLoading.value = false
  }
}

watch(callDeliveryPersonVisible, (val) => {
  if (val) checkShipdayAvailability()
})

// ===== Data =====
const newDeliveryPrice = ref(store.currentOrder.delivery_price)
const newPaymentMethod = ref(null)
const paymentMethods = ref([])
const sites = ref([])
const sede_destino = ref(0)

// ===== Helpers / Computed =====
const isGenerada = computed(() => store.currentOrder.current_status === 'generada')
const isEnPreparacion = computed(() => store.currentOrder.current_status === 'en preparacion')
const deliverySolicited =  computed(() => store.currentOrder.current_status === 'domiciliario solicitado')

const subtotal = computed(() => {
  const items = store.currentOrder?.pe_json?.listaPedidos || []
  return items.reduce((acc, product) => {
    let productTotal = product.pedido_cantidad * product.pedido_precio
    const mods = product.modificadorseleccionList?.filter(mod => mod.pedido_productoid == product.pedido_productoid) || []
    const modsTotal = mods.reduce((macc, mod) => macc + mod.modificadorseleccion_cantidad * mod.pedido_precio, 0)
    return acc + productTotal + modsTotal
  }, 0)
})

const total = computed(() => subtotal.value + (store.currentOrder.delivery_price || 0))

// Dirección / cotización PREVIA guardada en la orden
const addressDetailsValue = computed(() => {
  const raw = store.currentOrder?.address_details || store.currentOrder?.pe_json?.address_details
  if (!raw) return null
  if (typeof raw === 'string') {
    try { return JSON.parse(raw) } catch { return null }
  }
  return raw
})
const previousQuote = computed(() => addressDetailsValue.value?.shipday_response?.[0] || null)
const previousAvailability = computed(() => addressDetailsValue.value?.availability || null)

const canRequestDelivery = computed(() => shipdayData.value?.available === true)

const formatoUSD = (v) => (v || v === 0)
  ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(v)
  : '-'

const formatIso = (iso) => {
  if (!iso) return '-'
  try {
    const d = new Date(iso)
    return `${d.toLocaleDateString('es-CO')} ${d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}`
  } catch { return iso }
}

// Mantener sincronizado el InputNumber con el valor de la orden
watch(
  () => store.currentOrder.delivery_price,
  (val) => { newDeliveryPrice.value = val }
)

// ===== Lifecycle =====
onMounted(async () => {
  try {
    const [methods, siteList] = await Promise.all([
      fetchService.get(`${URI}/payment_methods`),
      fetchService.get(`${URI}/sites`)
    ])
    paymentMethods.value = methods
    sites.value = siteList
  } catch (error) {
    console.error('Error inicializando datos:', error)
  }
})

// ===== Actions =====
const getOrderMessage = (order) => {
  const hora = order?.latest_status_timestamp?.split('T')[1]?.split(':')?.slice(0, 2)?.join(':') || ''
  switch (order?.current_status) {
    case 'enviada':
      return `El pedido fue enviado a su domicilio a las ${hora}`
    case 'cancelada':
      return `El pedido fue cancelado a las ${hora}\nResponsable: ${order.responsible}\nRazón: ${order.reason}`
    case 'en preparacion':
      return `El pedido está en preparación desde las ${hora} y será enviado en breve.`
    case 'generada':
      return `Hemos recibido su pedido a las ${hora} y empezaremos a prepararlo en breve. Gracias por su espera.`
    default:
      return ''
  }
}

const changeDeliveryPrice = async () => {
  try {
    await fetchService.put(`${URI}/changue-delivery/${store.currentOrder.order_id}`, { price: newDeliveryPrice.value })
    changeDeliveryDialog.value = false
    // Toggle para refrescar listas (corrección del operador de asignación)
    store.numberOders = store.numberOders === 1 ? 2 : 1
    store.visibles.currentOrder = false
  } catch (e) {
    console.error('Error al cambiar el domicilio:', e)
  }
}

const submitChangePayment = async () => {
  if (!newPaymentMethod.value) return
  try {
    await fetchService.put(
      `${URI}/change-method/${store.currentOrder.order_id}/${newPaymentMethod.value}`,
      `Cambiando método de pago para la orden ${store.currentOrder.order_id}`
    )
    changePaymentDialog.value = false
    store.visibles.currentOrder = false
  } catch (error) {
    console.error('Error al cambiar el método de pago:', error)
  }
}

const responsibles = ref([
  { name: 'Restaurante', value: 'restaurant' },
  { name: 'Cliente', value: 'client' }
])

const cancelData = ref({
  responsible: null,
  reason: 'Sin razon'
})

const submitCancel = () => {
  if (!cancelData.value.responsible) return
  orderService
    .cancelOrder(
      store.currentOrder.order_id,
      cancelData.value.reason,
      cancelData.value.responsible.name
    )
    .then((response) => {
      if (response) {
        cancelDialogVisible.value = false
        console.log('Order canceled successfully')
      }
    })
    .catch((error) => {
      console.error('Failed to cancel order:', error)
    })
}

const sendRequest = async () => {
  try {
    const data = {
      order_id: store.currentOrder.order_id,
      responsible: cancelData.value.responsible?.name,
      reason: cancelData.value.reason
    }
    await orderService.create_cancellling_request(data)
    cancelDialogVisibleAdmin.value = false
    store.Notification.pause()
    store.Notification.currentTime = 0
  } catch (e) {
    console.error('Error al solicitar cancelación:', e)
  }
}

const sendDeliveryPerson = async () => {
  if (!canRequestDelivery.value) return
  try {
    await orderService.call_delivery_person(store.currentOrder.order_id)
    callDeliveryPersonVisible.value = false
    store.Notification.pause()
    store.Notification.currentTime = 0
  } catch (e) {
    console.error('Error al llamar domiciliario', e)
  }
}

const IMPRIMIR = () => {
  const contenidoFactura = document.getElementById('factura')?.innerHTML || ''
  const ventanaImpresion = window.open('', '_blank')
  ventanaImpresion.document.write('<html><head><title>Factura</title>')
  const estilosPagina = document.getElementsByTagName('style')
  for (let i = 0; i < estilosPagina.length; i++) {
    ventanaImpresion.document.write(estilosPagina[i].outerHTML)
  }
  ventanaImpresion.document.write('<style>@media print { html{height: min-content;} *{text-transform:uppercase;align-items:center; width:100%; font-family: sans-serif;padding:0;margin:0; font-size:o.9rem !IMPORTANT} body { -webkit-print-color-adjust: exact; color-adjust: exact; } } </style>')
  ventanaImpresion.document.write('</head><body>')
  ventanaImpresion.document.write(contenidoFactura)
  ventanaImpresion.document.write('</body></html>')
  ventanaImpresion.document.close()
  ventanaImpresion.print()
  setTimeout(() => ventanaImpresion.close(), 0)
}

const deliveryZero = async (order_id) => {
  await orderService.deliveryZero(order_id)
}

const traslate_order = async () => {
  try {
    const order_id = store.currentOrder.order_id
    const site_id = sede_destino.value
    await fetchService.put(
      `${URI}/traslate-order`,
      { site_id, order_id },
      `trasladando orden ${order_id}`
    )
    store.visibles.currentOrder = false
    travelDialog.value = false
  } catch (e) {
    console.error('Error al trasladar la orden:', e)
  }
}
</script>

<style scoped>
/* ===== Utilidades ===== */
.form-col { display: flex; gap: 1rem; flex-direction: column; align-items: start; }
.text-center { text-align: center; }
.text-right { text-align: end; }
.strong { font-weight: bold; }
.ml-3 { margin-left: 1rem; }
.m-0 { margin: 0; }

.footer-actions { display: flex; justify-content: space-between; gap: 1rem; }
.footer-row { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; }
.close-btn { position: absolute; right: -1rem; top: -1rem; border-radius: 50%; }

.grid-head { font-weight: bold; color: white; margin: 0; background-color: black; align-items: center; display: grid; grid-template-columns: auto auto; }
.grid-head.industrial { grid-template-columns: 1fr 3fr 1fr 1fr 1fr; gap: 1rem; }
.grid-row { display: grid; grid-template-columns: auto auto; align-items: center; gap: 0 1rem; }
.grid-row.industrial { grid-template-columns: 1fr 3fr 1fr 1fr 1fr; gap: 0 1rem; }
.grid-row.between { grid-template-columns: auto auto; justify-content: space-between; }

.totals-grid { display: grid; grid-template-columns: auto auto; margin-top: 1rem; }
.details-grid { display: grid; grid-template-columns: auto auto; gap: 1rem 2rem; align-items: start; }
.section-title { background-color: black; color: white; padding: 0; margin: 0.5rem 0 0 0; font-weight: bold; }
.fecha-hora { padding: 0; color: black; text-align: center; margin: 0 auto 1rem; width: max-content; display: flex; flex-direction: column; }

.divider { background-color: rgba(0, 0, 0, 0.286); height: 1px; margin: 0.25rem 0; }

/* ===== Estados ===== */
.generada { background-color: rgba(255, 255, 0, 0.804); padding: 2rem; border-radius: 0.5rem; }
.enviada { background-color: rgb(153, 255, 0); padding: 2rem; border-radius: 0.5rem; }
.en { background-color: rgb(84, 212, 255); padding: 2rem; border-radius: 0.5rem; }
.cancelada { background-color: rgba(255, 84, 84, 0.692); padding: 2rem; border-radius: 0.5rem; }
.estado::first-letter { text-transform: capitalize; }

/* ===== Tipografía global del ticket ===== */
* { align-items: center; text-transform: capitalize; font-size: 12pt; }
span { color: black; }

.notas { text-transform: lowercase; border: 1px solid; color: black; padding: 0.5rem; }
.notas::first-letter { text-transform: uppercase; }
.advert { text-transform: lowercase; }
.advert::first-letter { text-transform: uppercase; }
.advert--danger { color: red; font-weight: bold; }

/* ===== Shipday UI ===== */
.shipday-status.loading { display: flex; align-items: center; gap: .75rem; }
.shipday-status.error { }
.shipday-status.ok { }
.spinner { width: 32px; height: 32px; }

.quote-card { border: 1px solid #e0e0e0; border-radius: .5rem; padding: .75rem; margin: .5rem 0; }
.quote-title { margin: 0 0 .5rem; }
.quote-grid { display: grid; grid-template-columns: auto 1fr; gap: .25rem .75rem; }
.muted { color: #555; font-size: .9em; }

@media print {
  * { font-size: 30pt; }
  #id { font-size: 40pt; }
}
</style>
