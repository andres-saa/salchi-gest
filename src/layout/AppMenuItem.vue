<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLayout } from '@/layout/composables/layout';
import { loginStore } from '@/store/user.js';

const login = loginStore();
const permissions = ref([]);

onBeforeMount(async () => {
  permissions.value = await login.rawUserData.permissions;
});

const route = useRoute();
const visibleMenus = ref(false); // Solo afecta al grupo raíz
const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout();

const props = defineProps({
  item: { type: Object, default: () => ({}) },
  index: { type: Number, default: 0 },
  root: { type: Boolean, default: true },
  parentItemKey: { type: String, default: null }
});

const isActiveMenu = ref(false);
const itemKey = ref(null);

const readRefMaybe = (x) => (x && typeof x === 'object' && 'value' in x ? x.value : x);
const computeIsActiveForKey = (key, active) =>
  active === key || (active ? String(active).startsWith(key + '-') : false);

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? `${props.parentItemKey}-${props.index}` : String(props.index);
  const activeItem = readRefMaybe(layoutState.activeMenuItem) ?? readRefMaybe(layoutConfig?.activeMenuItem) ?? '';
  isActiveMenu.value = computeIsActiveForKey(itemKey.value, activeItem);
});

// si el menú ya es activo, aseguro que el grupo raíz aparezca abierto al (re)montar
onMounted(() => {
  if (props.root && isActiveMenu.value) visibleMenus.value = true;
});

watch(
  () => readRefMaybe(layoutState.activeMenuItem) ?? readRefMaybe(layoutConfig?.activeMenuItem),
  (newVal = '') => {
    isActiveMenu.value = computeIsActiveForKey(itemKey.value, newVal ?? '');
  }
);

// Helpers de visibilidad por permisos
const canSee = (perm) => perm === undefined || permissions.value.includes(perm);

const hasVisibleChildren = computed(() => {
  if (!props.item?.items?.length) return false;
  return props.item.items.some((child) => {
    if (!child.items) return canSee(child.permision_id) && child.visible !== false;
    return (
      child.visible !== false &&
      (canSee(child.permision_id) ||
        (child.items && child.items.some((grand) => grand.visible !== false && canSee(grand.permision_id))))
    );
  });
});

// Grupo raíz visible si tiene hijos visibles por permisos
const isGroupVisible = computed(() => {
  if (props.root) return props.item.visible !== false && hasVisibleChildren.value;
  return props.item.visible !== false;
});

// Click/teclas del item
const itemClick = (event, item) => {
  if (item.disabled) {
    event.preventDefault();
    return;
  }

  const { overlayMenuActive, staticMenuMobileActive } = layoutState;

  if ((item.to || item.url) && (staticMenuMobileActive?.value || overlayMenuActive?.value)) {
    onMenuToggle(); // esto ya cierra la sidebar en móvil/overlay al navegar
  }

  item.command?.({ originalEvent: event, item });

  const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey.value) : itemKey.value;
  setActiveMenuItem(foundItemKey);
};

const onRootToggle = () => {
  if (!props.item.items?.length) return;
  visibleMenus.value = !visibleMenus.value;
};

const onRootKeydown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onRootToggle();
  }
};

const checkActiveRoute = (item) => route.path === item.to;
const rootClasses = computed(() => [{ 'layout-root-menuitem': props.root, 'active-menuitem': isActiveMenu.value }, 'menu-light']);

/* ===========================
   🔒 Cerrar *sidebar* al click afuera (y Escape)
   - NO tocamos visibleMenus ni activeMenuItem.
   - Solo añadimos 1 listener (en el primer root).
=========================== */
const sidebarActive = computed(() =>
  !!(layoutState.overlayMenuActive?.value || layoutState.staticMenuMobileActive?.value)
);

const getSidebarEl = () =>
  document.querySelector('.layout-sidebar, .layout-menu-container, [data-sidebar], #layout-sidebar');

const closeSidebar = () => {
  if (layoutState.overlayMenuActive?.value) layoutState.overlayMenuActive.value = false;
  if (layoutState.staticMenuMobileActive?.value) layoutState.staticMenuMobileActive.value = false;
};

const handleDocClick = (e) => {
  if (!sidebarActive.value) return;
  const sidebar = getSidebarEl();
  if (sidebar && sidebar.contains(e.target)) return; // click dentro => no cerrar
  closeSidebar(); // click fuera => cerrar sidebar
};

const handleEscape = (e) => {
  if (e.key !== 'Escape' || !sidebarActive.value) return;
  closeSidebar();
};

// Solo enganchar una vez (en el primer root)
onMounted(() => {
  if (props.root && props.index === 0) {
    document.addEventListener('click', handleDocClick, true);
    document.addEventListener('keydown', handleEscape);
  }
});

onBeforeUnmount(() => {
  if (props.root && props.index === 0) {
    document.removeEventListener('click', handleDocClick, true);
    document.removeEventListener('keydown', handleEscape);
  }
});
</script>

<template>
  <li v-if="isGroupVisible" :class="rootClasses" role="none">
    <!-- Encabezado de grupo (raíz) -->
    <div
      v-if="root && item.visible !== false"
      class="menu-root"
      :aria-expanded="visibleMenus"
      :aria-haspopup="!!item.items"
      role="button"
      tabindex="0"
      @click="onRootToggle"
      @keydown="onRootKeydown"
    >
      <div class="menu-root-left">
        <i
          :style="`color:${item['icon-color'] || 'var(--menu-icon)'}`"
          :class="item.icon"
          class="menu-icon text-xl"
          aria-hidden="true"
        />
        <span class="menu-root-label">{{ item.label }}</span>
      </div>

      <i
        v-if="item.items && hasVisibleChildren"
        class="pi pi-angle-down menu-chevron"
        :class="{ 'is-open': visibleMenus }"
        aria-hidden="true"
      />
    </div>

    <!-- Anchor de grupo colapsable (no-link) -->
    <Transition name="submenu">
      <a
        v-if="(!item.to || item.items) && item.visible !== false && hasVisibleChildren && !root"
        :href="item.url"
        @click="itemClick($event, item)"
        :class="['submenu-trigger', item.class]"
        :target="item.target"
        tabindex="0"
        role="menuitem"
      >
        <i
          :style="`color:${item['icon-color'] || 'var(--menu-icon)'}`"
          :class="item.icon"
          class="menu-icon"
          aria-hidden="true"
        />
        <span class="menu-text">{{ item.label }}</span>
        <i class="pi pi-fw pi-angle-down submenu-caret" v-if="item.items" aria-hidden="true" />
      </a>
    </Transition>

    <!-- Link simple -->
    <router-link
      v-if="item.to && !item.items && item.visible !== false && canSee(item.permision_id)"
      @click="itemClick($event, item)"
      :class="['menu-link', item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
      role="menuitem"
      :aria-current="checkActiveRoute(item) ? 'page' : undefined"
    >
      <i
        :style="`color:${item['icon-color'] || 'var(--menu-icon)'}`"
        :class="item.icon"
        class="menu-icon"
        aria-hidden="true"
      />
      <span class="menu-text">{{ item.label }}</span>
    </router-link>

    <!-- Hijos -->
    <Transition name="submenu">
      <ul
        v-if="item.items && item.visible !== false && hasVisibleChildren"
        class="layout-submenu children"
        role="menu"
        :aria-hidden="root ? !visibleMenus : !isActiveMenu"
        v-show="root ? visibleMenus : isActiveMenu && canSee(item.permision_id)"
      >
        <app-menu-item
          v-for="(child, i) in item.items"
          :key="`${itemKey}-${i}`"
          :index="i + 1"
          :item="child"
          :parentItemKey="itemKey"
          :root="false"
          :class="['submenu-item', root ? (visibleMenus ? 'open' : 'close') : (isActiveMenu ? 'open' : 'close')]"
        />
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped>
/* 🎨 estilos idénticos a tu versión anterior (animaciones incluidas) */
.menu-light {
  --menu-bg: #ffffff;
  --menu-ink: #0f172a;
  --menu-muted: #64748b;
  --menu-border: #e5e7eb;
  --menu-hover: #f3f4f6;
  --menu-active: #eef2ff;
  --menu-outline: #4f46e5;
  --menu-icon: #334155;
  --menu-radius: 10px;
  --menu-gap: .75rem;
  --menu-pad: .55rem .75rem;
  --menu-transition: .2s ease;
  color-scheme: light;
}
.menu-root{display:flex;align-items:center;justify-content:space-between;gap:var(--menu-gap);background:var(--menu-bg);border:1px solid var(--menu-border);border-radius:var(--menu-radius);padding:.6rem .8rem;transition:background-color var(--menu-transition),border-color var(--menu-transition);cursor:pointer;user-select:none}
.menu-root:hover{background-color:var(--menu-hover)}
.menu-root:focus{outline:none}
.menu-root:focus-visible{box-shadow:0 0 0 3px color-mix(in oklab,var(--menu-outline) 25%,white);border-color:var(--menu-outline)}
.menu-root-left{display:flex;align-items:center;gap:.6rem}
.menu-root-label{font-weight:600;letter-spacing:.2px;color:var(--menu-ink)}
.menu-icon{min-width:1.5rem;font-size:1.15rem;color:var(--menu-icon)}
.menu-chevron{transition:transform .25s ease;color:var(--menu-muted)}
.menu-chevron.is-open{transform:rotate(180deg)}
.menu-link,.submenu-trigger{display:flex;align-items:center;gap:.75rem;padding:var(--menu-pad);border-radius:calc(var(--menu-radius) - 6px);color:var(--menu-ink);text-decoration:none;background:transparent;transition:background-color var(--menu-transition),color var(--menu-transition),border-color var(--menu-transition);border:1px solid transparent}
.menu-link:hover,.submenu-trigger:hover{background-color:var(--menu-hover)}
.menu-link:focus-visible,.submenu-trigger:focus-visible{box-shadow:0 0 0 3px color-mix(in oklab,var(--menu-outline) 25%,white)}
.menu-link.active-route{background-color:var(--menu-active);border-color:color-mix(in oklab,var(--menu-outline) 25%,white)}
.menu-text{color:var(--menu-ink);font-weight:500}
.submenu-caret{margin-left:auto;color:var(--menu-muted)}
.children{margin:.25rem 0 .4rem .35rem;padding-left:.5rem;border-left:1px dashed color-mix(in oklab,var(--menu-border) 75%,var(--menu-muted))}
.submenu-enter-from,.submenu-leave-to{max-height:0;opacity:0;transform:translateY(-4px)}
.submenu-enter-active,.submenu-leave-active{transition:all .2s ease}
.submenu-enter-to,.submenu-leave-from{max-height:40rem;opacity:1;transform:translateY(0)}
.open{opacity:1;height:auto}
.close{opacity:0;overflow:hidden;transform:translateX(-.5rem)}
:where(.menu-light) span{font-weight:400;color:var(--menu-ink)}
</style>
