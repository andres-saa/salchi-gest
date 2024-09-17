<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';
import { getUserDni, getUserRole } from '../service/valoresReactivosCompartidos';
import { URI } from '../service/conection';
const { layoutConfig, onMenuToggle } = useLayout();
import {loginStore} from '../store/user.js'
import { storeToRefs } from 'pinia';

const User_store = loginStore()


const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `https://salchimonster.com/images/logo.png`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

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
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};



const getImageUrl = () => {
            const timestamp = new Date().getTime(); // Obtiene el timestamp actual
            return `${URI}/read-product-image/600/employer-${getUserDni()}?timestamp=${timestamp}`;
        }



const cerrar = () => {
    

    User_store.userData = {}
    router.push('/auth/login')


}



const isSmallScreen = ref(window.innerWidth < 991);



const checkScreenWidth = () => {
      isSmallScreen.value = window.innerWidth < 991;
    };

    onMounted(() => {
      window.addEventListener('resize', checkScreenWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenWidth);
    });


</script>

<template>
    <div  class="layout-topbar md:px-4" style="background-color:   rgba(0, 1, 22, 1);max-width: 100vw; ">


        



        <router-link to="/" class="layout-topbar-logo">
            <img style="height: 1.5rem;" src="/images/logo.png" alt="logo" />
            <!-- <span>SAKAI</span> -->
           <span class="pl-4 text-sm text-white">{{ getUserRole() }}</span> 
        </router-link>

        <button v-if="isSmallScreen" class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle() ">
            <i class="pi pi-bars button-toggle-sidebar text-white"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            
            <Button @click="onTopBarMenuButton()" class="p-link layout-topbar-button ">
                <img style="height: 32px;width: 32px; border-radius: 50%;border: 2px solid var(--primary-color); object-fit: cover;" :src="getImageUrl()" alt="">
              
            </Button>
            <!-- <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button> -->
            <button @click="cerrar" class="p-link layout-topbar-button">
                <i class="fa-solid fa-right-from-bracket text-white"></i>
                <span>Cerrar sesion</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>



* {
    background-color: transparent;
    border: none;
}


@media print {
 * {
    display: none !important;
  }
}

button:focus{
    box-shadow: none
}
</style>
