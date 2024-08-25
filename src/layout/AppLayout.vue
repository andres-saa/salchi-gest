<script setup>
import { computed,onMounted, watch, onBeforeUnmount, ref } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from '@/layout/composables/layout';
import Loading from '../components/Loading.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { layoutConfig, layoutState,onMenuToggle, isSidebarActive,onmenuHide } = useLayout();

const outsideClickListener = ref(null);

// document.removeEventListener('hover', onmenuHide);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    } 
});

const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === 'light',
        'layout-theme-dark': layoutConfig.darkTheme.value === 'dark',
        'layout-overlay': layoutConfig.menuMode.value === 'overlay',
        'layout-static': layoutConfig.menuMode.value === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive.value,
        'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        'p-input-filled': layoutConfig.inputStyle.value === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple.value
    };
});
const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
                isSidebarActive = false
                
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
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};




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

    <div class="layout-wrapper " :class="containerClass">

       
        <app-topbar></app-topbar>


      
        <Button class="pr-0 pl-3 shadow-5 " @click="onMenuToggle()" :icon="isSidebarActive? 'fa fa-arrow-left text-xl text-bold' :' fa-solid fa-arrow-right text-xl text-bold'" :style=" isSidebarActive? 'left   : 20rem;top:50vh' : 'left:-1.5rem ;   top: 50vh;'  " severity="danger" v-if="!isSmallScreen"  style="position: fixed;transition: all .2s ease;border-radius: 0 10rem 10rem 0;justify-content: ;background-color: var(--primary-color); z-index: 100;width: 3.5rem; font-weight: bold"></Button>
        <div class="layout-sidebar">
            
            <app-sidebar></app-sidebar>
        </div>

        <div class="layout-main-container px-0 py-0" >


            <div class="layout-main p-0" style="position: relative;content:paint;">
  
                
                
                <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" class="p-0" />
                </transition>
                </router-view>
                  

             
            </div>
            
        </div>

    </div>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter, .fade-leave-to { /* .fade-leave-active en versiones anteriores de Vue */
    opacity: 0;
    transform: translateY(2rem);
}
</style>
