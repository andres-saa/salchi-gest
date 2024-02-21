<script setup>
import { computed, watch, ref } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

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
</script>

<template>
    <div class="layout-wrapper " :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container " >

            <div style="background-color: red; height: 200vh;position: fixed;top: -10%;right: 100%; z-index: 9999; width: 100vw;box-shadow: 10px 0 15px rgba(0, 0, 0, 0.15);">

</div>

<div style="background-color: red; height: 200vh;position: fixed;top: -10%;left: 100%; z-index: 9999; width: 100vw;box-shadow: -10px 0 15px rgba(0, 0, 0, 0.15);">

</div>

            <div class="layout-main p-0" style="contain: paint;">
                <!-- <div style="background-color: red; height: 200vh;position: fixed;top: -10%;right: 100%; z-index: 999; width: 100vw;box-shadow: 10px 0 15px rgba(0, 0, 0, 0.15);"></div> -->

             
                
                <router-view class="p-0"></router-view>
            </div>
            
        </div>
        <!-- <app-footer class="my-4"></app-footer> -->
        <!-- <app-config></app-config> -->
        <!-- <div class="layout-mask"></div> -->
    </div>
</template>

<style lang="scss" scoped></style>
