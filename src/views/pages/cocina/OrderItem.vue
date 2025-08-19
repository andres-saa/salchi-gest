<template>
    <div
      class="order-card col-12"
      :style="borderStyle"
      role="button"
      tabindex="0"
      :aria-label="`Abrir orden #${props.order?.order_id || ''}`"
      @click="open"
      @keydown.enter.prevent.stop="open"
      @keydown.space.prevent.stop="open"
    >
      <!-- Tag cliente o prueba -->
      <Tag
        class="mb-2 tag-client"
        :severity="isTest ? 'danger' : 'help'"
        style="border-radius: .3rem"
      >
        {{ isTest ? 'ES UNA PRUEBA, RELÁJATE' : `CLIENTE --> ${clientName}` }}
      </Tag>
  
      <!-- Encabezado: #orden + miniaturas + hora/estado -->
      <div class="order-row">
        <div class="order-left">
          <b class="order-id">#{{ props.order?.order_id }}</b>
  
          <div
            v-for="product in (props.order?.products || []).slice(0,3)"
            :key="product?.img_identifier + '-' + product?.quantity"
            class="thumb"
          >
            <div class="thumb-inner">
              <img
                :src="`https://backend.salchimonster.com/read-photo-product/${product?.img_identifier}/96`"
                alt="Producto del pedido"
                loading="lazy"
                class="thumb-img"
              />
              <Button
                severity="danger"
                class="p-0 qty-badge"
                rounded
                :label="String(product?.quantity ?? 0)"
              />
            </div>
          </div>
        </div>
  
        <span class="right-time">
          <b class="time">{{ displayTime }}</b>
  
          <!-- Spinner si está en preparación -->
          <ProgressSpinner
            v-if="isPreparing"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Preparando pedido"
          />
        </span>
      </div>
  
      <!-- Estado de solicitud de cancelación -->
      <template v-if="props.order?.calcel_sol_state !== null && props.order?.calcel_sol_state !== undefined">
        <Tag style="border-radius: .3rem" :severity="props.order.calcel_sol_state ? 'success' : 'danger'">
          {{ props.order.calcel_sol_state ? 'REVISADO' : 'EN REVISIÓN...' }}
        </Tag>
        <span class="and" v-if="props.order.calcel_sol_state"><b>&nbsp;Y&nbsp;</b></span>
        <Tag
          v-if="props.order.calcel_sol_state"
          style="border-radius: .3rem"
          :severity="props.order.calcel_sol_asnwer ? 'success' : 'danger'"
        >
          {{ props.order.calcel_sol_asnwer ? 'APROBADO' : 'RECHAZADO' }}
        </Tag>
  
        <p class="m-0 resp" v-if="props.order.cancelation_solve_responsible">
          <b>RESPONSABLE:</b>
          {{ props.order.cancelation_solve_responsible?.split(' ').slice(0,3).join(' ') }}
        </p>
      </template>
  
      <!-- Observaciones -->
      <div v-if="props.order?.responsible_observation" class="obs">
        <p><b>OBSERVACIONES:</b> {{ props.order.responsible_observation || 'sin observaciones' }}</p>
      </div>
  
      <!-- Transferencia aprobada -->
      <template v-if="props.order?.responsible_id">
        <Tag style="border-radius: .3rem" severity="success">
          <i class="pi pi-whatsapp mr-2"></i> TRANSFERENCIA APROBADA
        </Tag>
        <br />
        <Tag style="border-radius: .3rem" severity="success">
          {{ props.order?.name }}
        </Tag>
      </template>
  
      <!-- Origen de la venta -->
      <div v-if="props.order?.inserted_by_name" class="seller">
        <p class="py-0 my-1"><b>Vendido por</b></p>
        <Tag class="tag-seller"> {{ props.order.inserted_by_name }} -> </Tag>
      </div>
      <Tag v-else class="tag-web"> DIRECTO DE WEB -> </Tag>
  
      <!-- Logotipo según origen -->
      <img
        v-if="props.order?.inserted_by_name"
        class="brand brand--wa"
        src="/images/WhatsApp.svg.webp"
        alt="Venta por WhatsApp"
      />
      <img
        v-else
        class="brand brand--web"
        src="/images/logo.png"
        alt="Venta desde la web"
      />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useOrderStore } from '@/store/order'
  
  const store = useOrderStore()
  
  const props = defineProps({
    order: {
      type: Object,
      default: () => ({})
    }
  })
  
  const open = () => {
    store.setVisible('currentOrder', true)
    store.setOrder(props.order)
  }
  
  // ¿Orden seleccionada? (para borde)
  const isSelected = computed(() => {
    return store?.currentSearchingOrder?.order_id === props.order?.order_id
  })
  const borderStyle = computed(() => (isSelected.value ? { border: '3px solid var(--primary-color)' } : {}))
  
  // Cliente / prueba
  const isTest = computed(() => props.order?.user_phone === '1111111111')
  const clientName = computed(() => (props.order?.user_name || '').toUpperCase())
  
  // Hora a mostrar (robusto ante distintos formatos)
  const displayTime = computed(() => {
    const ts = props.order?.latest_status_timestamp
    if (!ts) return ''
    // Intento con Date primero
    const d = new Date(ts)
    if (!Number.isNaN(d.getTime())) {
      try {
        // 24h por consistencia; cambia a 'hour12: true' si prefieres AM/PM
        return new Intl.DateTimeFormat('es-CO', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(d)
      } catch {
        // fallback a parsing manual
      }
    }
    // Fallback si viene como string tipo 2025-08-19T14:05:30.000Z
    const timePart = ts.split('T')[1]?.split('.')[0]
    if (!timePart) return ''
    const [h, m] = timePart.split(':')
    return `${h}:${m}`
  })
  
  // Estado preparación
  const isPreparing = computed(() => props.order?.current_status === 'en preparacion')
  
  // (Disponible si decides reactivar el Tag de estado)
  /* const icons = {
    generada: 'warning',
    'en preparacion': 'info',
    enviada: 'success',
    cancelada: 'danger'
  } */
  </script>
  
  <style scoped>
  .order-card {
    background-color: rgba(255, 255, 255, 0.506);
    padding: .6rem;
    position: relative;
    border-radius: .5rem;
    cursor: pointer;
    transition: box-shadow .2s ease, transform .08s ease;
    outline: none;
  }
  .order-card:hover {
    box-shadow: 0 6px 18px -8px rgba(0, 0, 0, 0.25);
  }
  .order-card:focus-visible {
    box-shadow: 0 0 0 3px var(--primary-color);
  }
  
  .order-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    flex-wrap: nowrap;
  }
  
  .order-left {
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;
  }
  
  .order-id {
    min-width: max-content;
    color: black;
  }
  
  .right-time {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .time {
    min-width: max-content;
    color: black;
  }
  
  /* Miniaturas */
  .thumb {
    width: 3rem;
    height: 100%;
  }
  .thumb-inner {
    position: relative;
  }
  .thumb-img {
    width: 100%;
    border-radius: 10%;
    background-color: white;
    display: block;
  }
  .qty-badge {
    width: 1.5rem !important;
    height: 1.5rem !important;
    position: absolute !important;
    top: -.5rem;
    right: -.5rem;
    z-index: 99;
    border-radius: 1rem !important;
    font-size: .8rem;
    line-height: 1;
  }
  
  /* Tags y textos auxiliares */
  .tag-client {
    border-radius: .3rem;
  }
  .and {
    font-weight: bold;
  }
  .resp {
    color: black;
  }
  .obs p {
    margin: .5rem 0 0;
  }
  
  .seller p {
    color: black;
  }
  
  .tag-seller {
    background-color: black;
    color: white;
    border-radius: .3rem;
  }
  .tag-web {
    background-color: var(--primary-color);
    color: var(--primary-color-text, #fff);
    border-radius: .3rem;
  }
  
  /* Logos segun origen */
  .brand {
    position: absolute;
    bottom: .75rem;
    right: .5rem;
  }
  .brand--wa {
    height: 2rem;
  }
  .brand--web {
    height: 1.5rem;
  }
  
  /* Ajuste global a Tag (como tenías) */
  Tag {
    border-radius: .5rem;
  }
  </style>
  