<script setup>
import { ref, onBeforeMount, watch, computed } from 'vue';
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

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? `${props.parentItemKey}-${props.index}` : String(props.index);
  const activeItem = layoutState.activeMenuItem;
  isActiveMenu.value = activeItem === itemKey.value || (activeItem ? activeItem.startsWith(itemKey.value + '-') : false);
});

watch(
  () => layoutConfig.activeMenuItem.value,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
  }
);

// Helpers de visibilidad por permisos
const canSee = (perm) => perm === undefined || permissions.value.includes(perm);

const hasVisibleChildren = computed(() => {
  if (!props.item?.items?.length) return false;
  return props.item.items.some((child) => {
    // Si el hijo es link simple
    if (!child.items) return canSee(child.permision_id) && child.visible !== false;
    // Si el hijo es grupo, con que tenga algún nieto visible basta
    return (child.visible !== false) && (
      canSee(child.permision_id) ||
      (child.items && child.items.some((grand) => (grand.visible !== false) && canSee(grand.permision_id)))
    );
  });
});

// Grupo raíz visible si tiene hijos visibles por permisos
const isGroupVisible = computed(() => {
  if (props.root) return props.item.visible !== false && hasVisibleChildren.value;
  return props.item.visible !== false;
});

// Click/teclas
const itemClick = (event, item) => {
  if (item.disabled) {
    event.preventDefault();
    return;
  }

  const { overlayMenuActive, staticMenuMobileActive } = layoutState;

  if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
    onMenuToggle();
  }

  if (item.command) {
    item.command({ originalEvent: event, item });
  }

  const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;
  setActiveMenuItem(foundItemKey);
};

const onRootToggle = (e) => {
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

</script>

<template>
  <li
    v-if="isGroupVisible"
    :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }"
    role="none"
  >
    <!-- Encabezado de grupo (raíz) -->
    <div
      v-if="root && item.visible !== false"
      class="layout-menuitem-root-text p-2 border-radius-1 menu-root"
      :aria-expanded="visibleMenus"
      :aria-haspopup="!!item.items"
      role="button"
      tabindex="0"
      @click="onRootToggle"
      @keydown="onRootKeydown"
      style="cursor: pointer; border-radius: .5rem; display: flex; background-color: #ffffff15; min-width: max-content; justify-content: space-between; align-items: center;"
    >
      <div class="menu-root-left">
        <i
          :style="`color:${item['icon-color'] || 'inherit'}`"
          :class="item.icon"
          class="layout-menuitem-icon text-xl mr-3"
          style="min-width: 1.5rem;"
          aria-hidden="true"
        />
        <span class="menu-root-label">{{ item.label }}</span>
      </div>

      <i
        v-if="item.items && hasVisibleChildren"
        class="pi pi-angle-down menu-chevron"
        :class="!visibleMenus ? 't-up' : 't-down'"
        aria-hidden="true"
      />
    </div>

    <!-- Anchor de grupo colapsable (no-link) -->
    <Transition name="submenu">
      <a
        v-if="(!item.to || item.items) && item.visible !== false && hasVisibleChildren && !root"
        :href="item.url"
        @click="itemClick($event, item, index)"
        :class="['layout-submenu', item.class]"
        :target="item.target"
        tabindex="0"
        role="menuitem"
        class="pr-2 submenu-trigger"
      >
        <i
          :style="`color:${item['icon-color'] || 'inherit'}`"
          :class="item.icon"
          class="layout-menuitem-icon"
          aria-hidden="true"
        />
        <span class="layout-menuitem-text">{{ item.label }}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler text-l" v-if="item.items" aria-hidden="true" />
      </a>
    </Transition>

    <!-- Link simple -->
    <router-link
      v-if="item.to && !item.items && item.visible !== false && canSee(item.permision_id)"
      @click="itemClick($event, item, index)"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
      role="menuitem"
      class="menu-link"
      :aria-current="checkActiveRoute(item) ? 'page' : undefined"
    >
      <i
        :style="`color:${item['icon-color'] || 'inherit'}`"
        :class="item.icon"
        class="layout-menuitem-icon layout-menu-button"
        aria-hidden="true"
      />
      <span class="layout-menuitem-text">{{ item.label }}</span>
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
          style="transition: .2s all ease;"
        />
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped>
/* Estado visual base */
.menu-root {
  transition: background-color .2s ease, box-shadow .2s ease;
  &:hover {
    background-color: #ffffff22;
  }
  &:focus {
    outline: 2px solid var(--primary-color, #4f46e5);
    outline-offset: 2px;
  }
}
.menu-root-left {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.menu-root-label {
  font-weight: 600;
  letter-spacing: .2px;
}
.menu-chevron {
  transition: transform .25s ease;
}

/* Links */
.menu-link {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .55rem .75rem;
  border-radius: .5rem;
  transition: background-color .2s ease, color .2s ease;
  &:hover {
    background-color: #ffffff10;
  }
  &.active-route {
    background-color: #ffffff1f;
    box-shadow: inset 0 0 0 1px #ffffff22;
  }
}

/* Lista de hijos */
.children {
  margin: .2rem 0 .4rem .25rem;
  padding-left: .5rem;
  border-left: 1px dashed #ffffff25;
}

/* Animaciones del submenu */
.submenu-enter-from,
.submenu-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-4px);
}
.submenu-enter-active,
.submenu-leave-active {
  transition: all .2s ease;
}
.submenu-enter-to,
.submenu-leave-from {
  max-height: 40rem;
  opacity: 1;
  transform: translateY(0);
}

/* Estados open/close para compat con tu lógica */
.open {
  max-height: 40rem;
  opacity: 1;
  height: auto;
}
.close {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateX(-.5rem);
}

/* Flecha */
.t-down {
  transform: rotate(-180deg);
}
.t-up {
  transform: rotate(0);
}

/* Tipografía */
span {
  font-weight: 400;
}
</style>
