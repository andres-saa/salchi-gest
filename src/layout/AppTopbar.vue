<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter, useRoute } from 'vue-router';
import { getUserDni, getUserRole } from '../service/valoresReactivosCompartidos';
import { URI } from '../service/conection';
import { loginStore } from '../store/user.js';

const { onMenuToggle } = useLayout();
const router = useRouter();
const route = useRoute();

const User_store = loginStore();

const current_items = ref([]);
const visible_menu = ref(false);

const status = { true: 'anim', false: 'anim2' };

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);

onMounted(() => {
  bindOutsideClickListener();
  window.addEventListener('resize', checkScreenWidth);
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
  window.removeEventListener('resize', checkScreenWidth);
});

const logoUrl = computed(() => `https://salchimonster.com/images/logo.png`);

const onTopBarMenuButton = () => {
  topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
  topbarMenuActive.value = false;
  router.push('/documentation');
};
const topbarMenuClasses = computed(() => ({
  'layout-topbar-menu-mobile-active': topbarMenuActive.value
}));

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false;
      }
    };
    document.addEventListener('click', outsideClickListener.value);
  }
};
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener.value); // ✅ corregido (.value)
    outsideClickListener.value = null;
  }
};
const isOutsideClicked = (event) => {
  if (!topbarMenuActive.value) return;
  const sidebarEl = document.querySelector('.layout-topbar-menu');
  const topbarEl = document.querySelector('.layout-topbar-menu-button');
  if (!sidebarEl || !topbarEl) return true;
  return !(
    sidebarEl.isSameNode(event.target) ||
    sidebarEl.contains(event.target) ||
    topbarEl.isSameNode(event.target) ||
    topbarEl.contains(event.target)
  );
};

const getImageUrl = () => {
  const timestamp = new Date().getTime();
  return `${URI}/read-product-image/600/employer-${getUserDni()}?timestamp=${timestamp}`;
};

const cerrar = () => {
  User_store.userData = {};
  router.push('/auth/login');
};

const over = (items) => {
  current_items.value = items;
  visible_menu.value = true;
};

/* ===========================
   🔗 Navegar y ❌ cerrar pestañas (User_store.open)
=========================== */
const keyOf = (it) => it?.to ?? it?.url ?? it?.label ?? String(it?.ts ?? Math.random());

const navigateOpen = (it) => {
  if (!it) return;
  try {
    if (it.to) router.push(it.to);
    else if (it.url) {
      const target = it.target ?? '_blank';
      window.open(it.url, target);
    }
    // cerrar menú superior en móvil
    topbarMenuActive.value = false;
  } catch (e) {
    console.warn('No se pudo navegar', e);
  }
};

const removeOpen = (it) => {
  const k = keyOf(it);
  const idx = Array.isArray(User_store.open)
    ? User_store.open.findIndex((x) => keyOf(x) === k)
    : -1;
  if (idx > -1) User_store.open.splice(idx, 1);
};

/* ===========================
   👤 Permisos (igual a tu lógica)
=========================== */
const permisions = loginStore();
function tienePermiso(item) {
  if (item.permision_id === 800) {
    return elegidos.includes(permisions.rawUserData.id);
  }
  const permisoValido = item.permision_id
    ? permisions.rawUserData.permissions.includes(item.permision_id)
    : false;
  if (permisoValido) return true;
  if (item.items && item.items.length > 0) {
    return item.items.some((subItem) => tienePermiso(subItem));
  }
  return false;
}

/* ===========================
   📱 Responsive
=========================== */
const isSmallScreen = ref(window.innerWidth < 991);
const checkScreenWidth = () => {
  isSmallScreen.value = window.innerWidth < 991;
};
</script>

<template>
  <div
    @mouseleave="visible_menu = false"

    class="layout-topbar md:px-4"
    :style="`;max-width: 100vw;` "
  >
    <router-link to="/" class="layout-topbar-logo">
      <img style="height: 3rem;" src="/images/logo.png" alt="logo" />
      <span style="color: black;" class="pl-4 text-sm ">{{ getUserRole() }}</span>
    </router-link>

    <button
      v-if="isSmallScreen"
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle()"
    >
      <i class="pi pi-bars button-toggle-sidebar text-black"></i>
    </button>

    <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <!-- 🔖 Pestañas abiertas -->
    <div style="width: 100%;max-width: 100%; gap: .35rem; overflow:hidden;" class="open-icons">
      <div class="btn-open"
        v-for="(i, idx) in User_store.open"
        :key="keyOf(i)"
        style="width: max-content; border-radius: .3rem; overflow: hidden; display: flex; gap: 0;min-width:auto;text-wrap:nowrap;width: 100%;max-width: max-content; " 
        :style="`border:1px solid ${i.color || 'var(--primary-color)'}, ;background-color:${ route.fullPath == i.to?  i.color : '#fff'}`"
      >
        <!-- Botón principal: navega -->
        <Button
          @click="navigateOpen(i)"
          style="background-color: transparent;padding: 0; color: black;padding: .5rem; background-color: #ffffffaa; border-radius: 0; display: flex; gap: .5rem; height: 2rem;"
          type="button"
        >
          <i style="font-size: 1.5rem;" :class="i.icon" :style="`color:${i.color || 'var(--primary-color)'}`"></i>
          <span><b>{{ i.label }}</b></span>
        </Button>

        <!-- Botón cerrar: elimina del array -->
        <Button
          icon="pi pi-times"
          @click.stop="removeOpen(i)"
          :style="`background-color:${ route.fullPath == i.to?  i.color : '#fff'}; ${route.fullPath == i.to? 'color: white ': 'color:black'}; `"
          style=" border-radius: 0;box-shadow: -.1rem 0 .4rem #00000040;  height: 2rem;width: 2rem; min-width: max-content;aspect-ratio: 1 / 1;"
          type="button"
        />
      </div>
    </div>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <Button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
        <img
          style="height: 32px; width: 32px; border-radius: 50%; border: 2px solid var(--primary-color); object-fit: cover;"
          :src="getImageUrl()"
          alt=""
        />
      </Button>

      <button @click="cerrar" class="p-link layout-topbar-button">
        <i class="fa-solid fa-right-from-bracket text-black"></i>
        <span>Cerrar sesion</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* { background-color: transparent; border: none; }

@media print { * { display: none !important; } }

button:focus { box-shadow: none }

.animate { animation: anim .3s ease; }

@keyframes anim {
  0% { transform: translate(-1rem); opacity: 0; }
  100% { }
}
@keyframes anim2 {
  0% { transform: translate(1rem); opacity: 0; }
  100% { }
}


.item:hover { transform: scale(1.05); }

.activo { background-color: var(--primary-color); }
.activo2 { box-shadow: 0 .5rem 0 red; }

.black { filter: grayscale(1) brightness(300); }

.icons { display: flex; }
@media (width < 1200px) {
  .icons { display: none; }
}

.open-icons{
    
    display: flex;
}

@media (width < 991px ) {
    .open-icons{
        display: none;
    }
}


.btn-open{

    animation: apear .3s linear;
}



@keyframes apear {

    0% {
        opacity: 0;
        transform:translatex(-20px)
    }

    100% {
        opacity: 1;
        transform:translatex(0)
    }
    
}

</style>
