<script setup>
import { ref, onBeforeMount, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLayout } from '@/layout/composables/layout';






import {loginStore} from '@/store/user.js'



const login = loginStore()

const permissions = ref([])


onBeforeMount( async() => {
     permissions.value =  await login.rawUserData.permissions
    //  console.log(permissions.value)
    // alert(permissions.value?.[0])
})










const route = useRoute();
const visibleMenus = ref(false)

const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

const isActiveMenu = ref(false);
const itemKey = ref(null);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

    const activeItem = layoutState.activeMenuItem;

    isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
});

watch(
    () => layoutConfig.activeMenuItem.value,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);
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
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;

    setActiveMenuItem(foundItemKey);
};

const checkActiveRoute = (item) => {
    return route.path === item.to;
};


</script>

<template>
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div  @click="visibleMenus = !visibleMenus"  style="cursor: pointer; border-radius: 1rem; display: flex;background-color: #ffffff15;min-width: max-content; justify-content: space-between;align-items: center;" v-if="root && item.visible !== false" class="layout-menuitem-root-text p-2 border-radius-1">{{ item.label }} 
            
            <i   :class="!visibleMenus?  'pi pi-angle-down t-up' :  'pi pi-angle-down t-down' " v-if="item.items"></i>
        
            <!-- {{ visibleMenus }} -->
        </div>






        <Transition name="layout-submenu">
            <a v-if="(!item.to || item.items) && item.visible !== false && item.items.some( i => permissions.includes(i.permision_id))" :href="item.url" @click="itemClick($event, item, index)" :class="item.class" :target="item.target" tabindex="0" class="layout-submenu pr-2">
                <i :class="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i style="transition: all .3s ease;" class="pi pi-fw pi-angle-down layout-submenu-toggler text-l" v-if="item.items"></i>
            </a>
        </Transition>
            

        
            <router-link  v-if="item.to && !item.items && item.visible !== false && item.permision_id && permissions.includes(item.permision_id)" @click="itemClick($event, item, index)" :class="[item.class, { 'active-route': checkActiveRoute(item) }]" tabindex="0" :to="item.to">
                <i :class="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
            </router-link>

            <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
                <ul  v-show="root ? true : isActiveMenu && permissions.includes(item.permision_id)" class="layout-submenu">
                    <app-menu-item  style="transition: .2s all ease;" :class="!visibleMenus && props.root && !props.parentItemKey ? 'close layout-submenu'  : 'open layout-submenu'" v-for="(child, i) in item.items" :key="child" :index="i+1" :item="child" :parentItemKey="itemKey" :root="false"></app-menu-item>
                </ul>
            </Transition>
    


 
   

    </li>
</template>

<style lang="scss" scoped>



.collapsible-content {
  overflow: hidden;
  transition: height 1s ease, opacity 1s ease;
  height: auto; /* Altura inicial */
  opacity: 1;
}

/* Estado de entrada (antes de entrar) */
.collapse-enter-from {
  height: 0;
  opacity: 0;
}

/* Estado de entrada activa (durante la entrada) */
.collapse-enter-active {
  height: auto;
  opacity: 1;
}

/* Estado de salida (inicio de la salida) */
.collapse-leave-to {
  height: 0;
  opacity: 0;
}

/* Estado de salida activa (durante la salida) */
.collapse-leave-active {
  height: 0;
  opacity: 0;
}


.open{

    max-height: 30rem;
    opacity: 1;
    height: auto;
}


.close{
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateX(-1rem);
}

.t-down{
    transform: rotatez(-180deg);
    transition: all .3s ease;
}

.t-up{
    transform: rotateX(0);
    transition: all .3s ease;
}
</style>
