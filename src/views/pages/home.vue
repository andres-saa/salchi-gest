<template>
    <div class="home">
      <!-- Header -->
      <header class="home__header">
        <div class="home__title">
          <i class="pi pi-home"></i>
          <h4 style="margin: .5rem;">Inicio</h4>
        </div>
  
        <div class="home__search">
          <i class="pi pi-search"></i>
          <input
            v-model="q"
            type="search"
            placeholder="Busca por nombre de sección u opción…"
            aria-label="Buscar"
          />
        </div>
      </header>
  
      <!-- Contenido -->
      <div v-if="filteredModel.length" class="sections">
        <section
          v-for="menu in filteredModel"
          :key="menu.label"
          class="section-card"
        >
          <!-- Encabezado del grupo -->
          <div class="section-card__header">
            <div class="section-card__icon" :style="iconBg(menu.color)">
              <i :class="menu.icon"></i>
            </div>
            <div class="section-card__meta">
              <h3>{{ menu.label }}</h3>
              <small class="muted">Accesos disponibles</small>
            </div>
          </div>
  
          <!-- Subgrupos -->
          <div class="section-card__content">
            <div
              v-for="m in (menu.items || []).filter(tienePermiso)"
              :key="m.label"
              class="sub-card"
              :style="subCardBorder(m.color)"
            >
              <RouterLink
                v-if="m.to"
                class="sub-card__title link"
                :to="m.to"
              >
                <i :class="m.icon"></i>
                <span>{{ m.label }}</span>
              </RouterLink>
  
              <div v-else class="sub-card__title">
                <i :class="m.icon"></i>
                <span>{{ m.label }}</span>
              </div>
  
              <!-- Items -->
              <ul class="sub-card__items" v-if="(m.items || []).filter(tienePermiso).length">
                <li
                  v-for="m2 in (m.items || []).filter(tienePermiso)"
                  :key="m2.label"
                >
                  <RouterLink class="item-link" :to="m2.to">
                    <span class="bullet" :style="iconBg(m2.color)">
                      <i :class="m2.icon"></i>
                    </span>
                    <span class="label">{{ m2.label }}</span>
                    <Tag v-if="m2.nuevo" severity="warning" class="ml-auto nuevo">Nuevo</Tag>
                  </RouterLink>
                </li>
              </ul>
  
              <div v-else class="empty">Sin opciones disponibles</div>
            </div>
          </div>
        </section>
      </div>
  
      <!-- Empty state -->
      <div v-else class="empty-state">
        <i class="pi pi-inbox"></i>
        <p>No tienes accesos visibles por ahora.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import { loginStore } from '../../store/user' // ajusta si tu alias es @/store/user
  
  /* ============ DATOS ============ */
  const model = [
     {
      label: 'ATENCION AL CLIENTE',
      icon: 'fa-solid fa-headset',
      color: '#4D96FF',
      items: [
        { label: 'Administrar PQRS ', icon: 'fa-solid fa-folder-tree', to: '/pqrs/pagina_web/1', permision_id: 55, color: '#FFD93D' },
      ]
    },
    {
      label: 'CALIDAD Y CONTROL',
      icon: 'fa-solid fa-clipboard-check',
      color: '#6BCB77',
      items: [
        { label: 'Auditorias ', icon: 'fa-solid fa-list-check', to: '/auditorias/lista', permision_id: 33, color: '#FFA502' },
        { label: 'Configurar turnos ', icon: 'fa-solid fa-clock', to: '/turnos-trabajo', permision_id: 35, color: '#FFA502' },
      ]
    },
  {
      label: 'FRANQUICIAS',
      icon: 'fa-solid fa-handshake',
      color: '#845EC2',
      items: [
        { label: 'Solicitudes', icon: 'fa-solid fa-clipboard-list', to: '/franquicias', permision_id: 53, color: '#FFD93D' },
      ]
    },
    {
      label: 'ENTREGAS',
      icon: 'fa-solid fa-truck-moving',
      color: '#FFA502',
      items: [
        { label: 'Dotacion', icon: 'fa-solid fa-shirt', to: '/dotacion', permision_id: 37, color: '#FFD93D' },
      ]
    },
    {
      label: 'CELEBRACIONES',
      icon: 'fa-solid fa-cake-candles',
      color: '#D65DB1',
      to: '/cumples',
      items: [
        { label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples', permision_id: 38, color: '#FFD93D' }
      ]
    },
    {
      label: 'GUIAS',
      icon: 'fa-solid fa-book-open',
      color: '#845EC2',
      items: [
        { label: 'Gestion de guias', icon: 'fa-solid fa-book', to: '/guias', permision_id: 40, color: '#FFD93D' },
      ]
    },
    {
      label: 'CERTIFICADOS',
      icon: 'fa-solid fa-award',
      color: '#FF6B6B',
      items: [
        { label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral', permision_id: 41, color: '#FFD93D' },
      ]
    },
    {
      label: 'Revisar',
      icon: 'fa-solid fa-check-double',
      color: '#D65DB1',
      items: [
        { label: 'Permisos', icon: 'fa-solid fa-file-invoice', to: '/permisos', permision_id: 50, color: '#FFD93D' },
      ]
    },
    {
      label: 'Datos',
      icon: 'fa-solid fa-database',
      color: '#6BCB77',
      items: [
        { label: 'Actualizar mis datos', icon: 'fa-solid fa-user-pen', to: '/actualizar-datos', permision_id: 50, color: '#FFD93D' },
      ]
    },
    {
      label: 'Extras',
      icon: 'fa-solid fa-ellipsis',
      color: '#845EC2',
      to: '/mis-permisos',
      items: [
        { label: 'Mi carnet digital', icon: 'fa-solid fa-id-badge', to: '/mi-carnet', permision_id: 52, color: '#FFD93D' },
        { label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama', permision_id: 52, color: '#FFD93D' },
      ]
    },
    {
      label: 'PRIILEGIADO',
      icon: 'pi pi-key',
      color: 'red',
      items: [
        {
          label: 'Master',
          icon: 'fa-solid fa-key',
          color: 'red',
          items: [
            { label: 'Base de clientes', icon: 'fa-solid fa-key', to: '/customers/', permision_id: 800, color: 'red', nuevo: false },
            { label: 'Codigos redimidos', icon: 'fa-solid fa-key', to: '/usuarios-email/', permision_id: 800, color: 'magenta', nuevo: true },
          ]
        },
      ]
    },
    {
      label: 'INVENTARIO',
      icon: 'fa-solid fa-boxes-stacked',
      color: '#FFD93D',
      items: [
        {
          label: 'Recetario',
          icon: 'fa-solid fa-book',
          color: '#6BCB77',
          items: [
            { label: 'Ingredientes', icon: 'fa-solid fa-carrot', to: '/recetario/prices-cdi-table/', permision_id: 8, color: '#00C9A7' },
            { label: 'recetas', icon: 'fa-solid fa-utensils', to: '/recetario/recetas/', permision_id: 8, color: '#00C9A7' },
            { label: 'Configuracion', icon: 'fa-solid fa-gears', to: '/recetario/configuracion/', permision_id: 13, color: '#00C9A7' },
            { label: 'Resumen Beneficio', icon: 'fa-solid fa-chart-pie', to: '/recetario/recipe-sumary-benefit/', permision_id: 14, color: '#00C9A7' },
          ]
        },
        {
          label: 'Reportes de inventario diario',
          icon: 'fa-solid fa-calendar-day',
          color: '#4D96FF',
          items: [
            { label: 'Reportar inventario diario', icon: 'fa-solid fa-edit', to: '/daily-inventory/report-inventory', permision_id: 11, color: '#FFA502' },
            { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/daily-inventory/daily-inventory-reports', permision_id: 10, color: '#FFA502' },
          ]
        },
        {
          label: 'Reportes de inventario Mensual',
          icon: 'fa-solid fa-calendar-days',
          color: '#4D96FF',
          items: [
            { label: 'Reportar inventario mensual', icon: 'fa-solid fa-file-circle-plus', to: '/monthly-inventory/report-monthly-inventory', permision_id: 17, color: '#FFA502' },
            { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/monthly-inventory/monthly-inventory-reports', permision_id: 18, color: '#FFA502' },
          ]
        },
        {
          label: 'Ordenes de compra',
          icon: 'fa-solid fa-shopping-cart',
          color: '#FF6B6B',
          items: [
            { label: 'Nueva', icon: 'fa-solid fa-file-circle-plus', to: '/purchase-order/generate-purchase-order', permision_id: 21, color: '#D65DB1' },
            { label: 'Generadas por mi', icon: 'fa-solid fa-folder-open', to: '/purchase-order/purchase-order-my-orders/', permision_id: 21, color: '#D65DB1' },
            { label: 'Alistar', icon: 'fa-solid fa-clipboard-check', to: '/purchase-order/recorrido/alistar/', permision_id: 22, color: '#D65DB1' },
            { label: 'Autorizar', icon: 'fa-solid fa-check-double', to: '/purchase-order/recorrido/autorizar', permision_id: 23, color: '#D65DB1' },
            { label: 'Transportar', icon: 'fa-solid fa-truck', to: '/purchase-order/recorrido/transport/', permision_id: 24, color: '#D65DB1' },
            { label: 'Recibir en la sede', icon: 'fa-solid fa-building-circle-check', to: '/purchase-order/recorrido/recibida-en-sede/', permision_id: 25, color: '#D65DB1' },
            { label: 'Completada', icon: 'fa-solid fa-circle-check', to: '/purchase-order/recorrido/completed/', permision_id: 25, color: '#D65DB1' },
            { label: 'Todas las ordenes', icon: 'fa-solid fa-list-ol', to: '/purchase-order/recorrido/purchase-order-reports/', permision_id: 26, color: '#D65DB1' },
            { label: 'Stock', icon: 'fa-solid fa-boxes-packing', to: '/purchase-order/recorrido/purchase-order-settings/', permision_id: 27, color: '#D65DB1' },
          ]
        },
      ]
    },
    {
      label: 'VENTAS',
      icon: 'fa-solid fa-cash-register',
      color: '#FFA502',
      items: [
        {
          label: 'Tienda',
          icon: 'fa-solid fa-store',
          color: '#845EC2',
          items: [
            { label: 'Cocina', icon: 'fa-solid fa-utensils', to: '/cocina/', permision_id: 1, color: '#FFD93D' },
            { label: 'Menu', icon: 'fa-solid fa-book-open', to: '/tienda-menu/productos/SALCHIPAPAS/3', permision_id: 2, color: '#FFD93D' },
            { label: 'Reportes de ventas', icon: 'fa-solid fa-chart-line', to: '/reporte-ventas/order-sumary', permision_id: 3, color: '#FFD93D' },
            { label: 'Domicilios', icon: 'fa-solid fa-truck-fast', to: '/domicilios/1', permision_id: 4, color: '#FFD93D' },
            { label: 'Transferencias', icon: 'fa-solid fa-right-left', to: '/transfer/', permision_id: 5, color: '#FFD93D' },
            { label: 'Ingresar pedido', icon: 'fa-solid fa-cart-plus', to: '/call-center-vender', permision_id: 6, color: '#FFD93D' },
            { label: 'Solicitudes de cancelacion', icon: 'fa-solid fa-ban', to: '/cancellation-requests/revisar/', permision_id: 7, color: '#FFD93D' },
            { label: 'Control', icon: 'fa-solid fa-sliders', to: '/cancellation-requests/revisar/', color: '#FFD93D' }, // sin permiso explícito
            { label: 'Info sedes ', icon: 'fa-solid fa-building', to: '/directorio', permision_id: 31, color: '#FFD93D' },
          ],
        },
        {
          label: 'Cajeros',
          icon: 'fa-solid fa-cash-register',
          color: '#845EC2',
          items: [
            { label: 'Reportes', icon: 'fa-solid fa-file-invoice-dollar', to: '/cachier-money/reportes/', permision_id: 1, color: '#FFD93D' },
            { label: 'Registros', icon: 'fa-solid fa-book', to: '/cachier-money/registros/', permision_id: 1, color: '#FFD93D' },
            { label: 'Salidas', icon: 'fa-solid fa-money-bill-trend-up', to: '/cachier-money/salidas/', permision_id: 1, color: '#FFD93D' },
          ],
        }
      ]
    },
    /* … (resto de bloques: INFORMACIÓN ADICIONAL, CAPACITACIONES, RRHH, etc. se mantienen igual que tu modelo original) … */
   
   
  ]
  
  /* ============ STORE/PERMISOS ============ */
  const store = loginStore()
  const userId = computed(() => store?.rawUserData?.id ?? null)
  const userPerms = computed(() => Array.isArray(store?.rawUserData?.permissions) ? store.rawUserData.permissions : [])
  const elegidos = [1132, 1082]
  
  function tienePermiso(item) {
    if (!item) return false
  
    // privilegio especial
    if (item.permision_id === 800) {
      return elegidos.includes(userId.value)
    }
  
    // si tiene permiso explícito
    const explicit = typeof item.permision_id === 'number'
      ? userPerms.value.includes(item.permision_id)
      : false
    if (explicit) return true
  
    // si no tiene permiso explícito, heredamos de los hijos
    if (Array.isArray(item.items) && item.items.length) {
      return item.items.some(tienePermiso)
    }
  
    // ítems sin permiso y sin hijos no se muestran
    return false
  }
  
  /* ============ BUSCADOR ============ */
  const q = ref('')
  
  const norm = (s) =>
    (s ?? '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  
  const matches = (item) => {
    const t = norm(q.value)
    if (!t) return true
    return norm(item.label).includes(t)
  }
  
  // Filtra por permisos + query, preservando estructura
  function filterTree(nodes) {
    return (nodes || [])
      .map((node) => {
        if (!tienePermiso(node)) return null
        const clone = { ...node }
        if (Array.isArray(node.items)) {
          clone.items = filterTree(node.items)
        }
        const selfMatches = matches(clone)
        const hasChildren = Array.isArray(clone.items) && clone.items.length > 0
        return (selfMatches || hasChildren) ? clone : null
      })
      .filter(Boolean)
  }
  
  const filteredModel = computed(() => filterTree(model))
  
  /* ============ ESTILOS DINÁMICOS ============ */
  const iconBg = (c) => ({ background: c || '#e5e7eb' })
  const subCardBorder = (c) => ({ borderLeft: `4px solid ${c || '#e5e7eb'}` })
  </script>
  
  <style scoped>
  :root {
    /* paleta modo claro */
    --bg: #f6f8fb;
    --card: #ffffff;
    --text: #0f172a;
    --muted: #64748b;
    --ring: #e5e7eb;
    --ring-strong: #d1d5db;
  }
  
  .home {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    padding: 1.25rem;
  }
  
  /* Header */
  .home__header {
    position: sticky;
    top: 3rem;
    /* background: linear-gradient(180deg, rgb(255, 255, 255) 60%, rgba(255, 2, 2, 0.625)); */
    background-color: white;
    z-index: 2;
    box-shadow: 0 .1rem 1rem #00000020;
    padding: 0rem  1rem;
    /* backdrop-filter: saturate(120%) blur(2px); */
    display: grid;
    gap: 1rem;
    margin-bottom: 4rem;
    grid-template-columns: 1fr 320px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .home__header {
      grid-template-columns: 1fr;
    }
  }
  
  .home__title {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  .home__title i {
    font-size: 1.25rem;
  }
  
  .home__search {
    display: flex;
    align-items: center;
    gap: .5rem;
    background: var(--card);
    border: 1px solid var(--ring);
    border-radius: .75rem;
    padding: .5rem .75rem;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03);
  }
  .home__search i {
    font-size: 1rem;
    color: var(--muted);
  }
  .home__search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--text);
  }
  
  /* Grid principal (máximo 3 columnas) */
  .sections {
    --min: 340px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(var(--min), 1fr));
   
    margin: 0 auto;
  }
  
  /* Tarjeta de sección */
  .section-card {
    background: var(--card);
    border: 1px solid var(--ring);
    border-radius: 1rem;
    box-shadow: 0 8px 24px -16px rgba(0,0,0,0.2);
    overflow: hidden;
  }
  
  .section-card__header {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem 1rem;
    border-bottom: 1px solid var(--ring);
  }
  .section-card__icon {
    width: 3rem;
    height: 3rem;
    border-radius: .75rem;
    display: grid;
    place-items: center;
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.25);
  }
  .section-card__icon i { font-size: 1.25rem; }
  
  .section-card__meta h3 {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.2;
  }
  .muted { color: var(--muted); }
  
  /* Sub card */
  .section-card__content {
    padding: .75rem;
    display: grid;
    gap: .75rem;
  }
  .sub-card {
    border: 1px solid var(--ring);
    border-radius: .75rem;
    background: #fff;
    overflow: hidden;
  }
  
  .sub-card__title {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .8rem .9rem;
    font-weight: 600;
    border-bottom: 1px solid var(--ring);
  }
  .sub-card__title i { width: 1.1rem; text-align: center; }
  
  .sub-card__title.link {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  .sub-card__title.link:hover {
    background: #f9fafb;
  }
  
  /* Items */
  .sub-card__items {
    list-style: none;
    margin: 0;
    padding: .5rem;
    display: grid;
    gap: .25rem;
  }
  .item-link {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .55rem .5rem;
    border-radius: .5rem;
    text-decoration: none;
    color: inherit;
  }
  .item-link:hover {
    background: #f8fafc;
  }
  .bullet {
    width: 2rem;
    height: 2rem;
    border-radius: .5rem;
    display: grid;
    place-items: center;
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.25);
  }
  .bullet i { font-size: .95rem; }
  
  .empty {
    padding: .8rem .9rem;
    color: var(--muted);
    font-size: .9rem;
  }
  
  /* Empty state global */
  .empty-state {
    max-width: 900px;
    margin: 10vh auto 0;
    padding: 2rem;
    border: 2px dashed var(--ring-strong);
    border-radius: 1rem;
    background: var(--card);
    text-align: center;
    color: var(--muted);
  }
  .empty-state i {
    font-size: 2rem;
    display: block;
    margin-bottom: .75rem;
  }
  
  /* Tag "Nuevo" animado */
  .nuevo {
    animation: nuevoPulse 1.5s infinite;
  }
  @keyframes nuevoPulse {
    0% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
    100% { transform: translateY(0); }
  }
  </style>
  