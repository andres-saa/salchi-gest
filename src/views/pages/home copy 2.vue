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
          :style="!collasable[menu.label]?  { maxHeight:'30rem'} :  {maxHeight:'100%'}"
          class="section-card"
        >
          <!-- Encabezado del grupo -->
          <div class="section-card__header">
            <div class="section-card__icon" :style="iconBg(menu.color)">
              <i :class="menu.icon"></i>
            </div>
            <div class="section-card__meta">
              <h3>{{ menu.label }}</h3>
              <!-- <small class="muted">Accesos disponibles</small> -->
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
  
              <!-- <div v-else class="empty">Sin opciones disponibles</div> -->
            </div>
          </div>

          <div  @click="collasable[menu.label] = !collasable[menu.label]"  v-if="visibleCountMenu(menu) > 8" style="position: absolute;bottom: 0;padding-top: 4rem; display: flex;justify-content: center;width: 100%;" :style=" `background:${menu.color}`">
            <Button
             text
              
              :label="collasable[menu.label] ? 'Ver menos': 'Ver Mas'   "
             
              style="position: absolute;color: white; width: 100%; bottom: .4rem; left: 0; right: 0; margin: 0 auto; "
            />



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


  const collasable = ref( {

  })
  function countVisibleNodes(node) {
  if (!node || !tienePermiso(node)) return 0
  let total = 1 // cuenta al propio nodo
  const children = Array.isArray(node.items) ? node.items.filter(tienePermiso) : []
  for (const c of children) total += countVisibleNodes(c)
  return total
}

// Cuenta todo lo visible dentro de una sección (incluye al padre `menu`)
function visibleCountMenu(menu) {
  return countVisibleNodes(menu)
}
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
  

  function permsOnly(nodes) {
  return (nodes || [])
    .map((n) => {
      if (!tienePermiso(n)) return null
      const clone = { ...n }
      if (Array.isArray(n.items)) clone.items = permsOnly(n.items)
      return clone
    })
    .filter(Boolean)
}


  function treePermsOnly(nodes) {
  return (nodes || [])
    .map((n) => {
      if (!tienePermiso(n)) return null
      const clone = { ...n }
      if (Array.isArray(n.items)) clone.items = treePermsOnly(n.items)
      return clone
    })
    .filter(Boolean)
}

function filterTree(nodes) {
  const term = norm(q.value)
  const searchActive = term.length > 0

  // Sin búsqueda: árbol completo filtrado por permisos
  if (!searchActive) return treePermsOnly(nodes)

  // Con búsqueda: ignorar matches del padre (nivel 0)
  const walk = (ns, depth = 0) =>
    (ns || [])
      .map((node) => {
        if (!tienePermiso(node)) return null

        // Filtrar hijos primero
        const childrenFiltered = Array.isArray(node.items)
          ? walk(node.items, depth + 1)
          : []

        if (depth === 0) {
          // En nivel padre NO se considera su propia coincidencia
          // Solo se incluye si tiene descendientes que sí coincidieron
          if (childrenFiltered.length === 0) return null
          return { ...node, items: childrenFiltered }
        }

        // Desde segundo nivel en adelante:
        const isClickable = !!node.to
        const selfMatches = norm(node.label).includes(term)

        // Incluir si es clickeable y coincide, o si alguno de sus hijos coincidió
        const includeNode = (isClickable && selfMatches) || childrenFiltered.length > 0
        if (!includeNode) return null

        return { ...node, items: childrenFiltered }
      })
      .filter(Boolean)

  const result = walk(nodes, 0)
  if (result.length > 0) return result

  // Fallback global: si no hubo resultados, mostrar padres completos cuyo nombre coincida
  const fallback = (nodes || [])
    .map((menu) => {
      if (!tienePermiso(menu)) return null
      if (!norm(menu.label).includes(term)) return null

      const itemsPerms = Array.isArray(menu.items) ? permsOnly(menu.items) : []
      if (itemsPerms.length === 0) return null

      return { ...menu, items: itemsPerms }
    })
    .filter(Boolean)

  return fallback
}
function visibleItemsCount(node) {
  // Cuenta todos los descendientes visibles (excluye al propio nodo)
  return Math.max(countVisibleNodes(node) - 1, 0)
}

function sortTreeByVisibleItems(nodes) {
  return (nodes || [])
    .slice() // evita mutar el original
    .sort((a, b) => visibleItemsCount(b) - visibleItemsCount(a)) // desc
    .map(n => ({
      ...n,
      // ordena recursivamente los hijos también
      ...(Array.isArray(n.items) ? { items: sortTreeByVisibleItems(n.items) } : {})
    }))
}

// --- REEMPLAZA tu filteredModel por este ---
const filteredModel = computed(() => {
  const tree = filterTree(store.model)         // ya respeta permisos + búsqueda
  return sortTreeByVisibleItems(tree)          // ordena de mayor a menor
})

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
    margin-left: 3rem;
  }

  @media (width < 900px) {
    .home {
   
    margin-left: 0rem;
  }
  }

  *{
    transition: all .3s ease;
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
    gap: .5rem;
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
    position: relative;
    background: var(--card);
    padding-bottom: 4rem;
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
  