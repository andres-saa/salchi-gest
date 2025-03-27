<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { getUserDni, getUserRole } from '../service/valoresReactivosCompartidos';
import { URI } from '../service/conection';
const { layoutConfig, onMenuToggle } = useLayout();
import {loginStore} from '../store/user.js'
import { storeToRefs } from 'pinia';
import { useToast } from 'primevue/usetoast';

const User_store = loginStore()

const current_items = ref([])
const visible_menu = ref(false)

const status = {
    true:'anim',
    false:'anim2'
}
const route = useRoute()
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


const over = (items) => {
    current_items.value = items
    visible_menu.value = true
}


function tienePermiso(item) {
  // Si el permiso es 800, se permite solo si el usuario está en 'elegidos'
  if (item.permision_id === 800) {
    return elegidos.includes(permisions.rawUserData.id);
  }

  // Para otros permisos, verifica si el usuario lo tiene en su rawUserData
  const permisoValido = item.permision_id
    ? permisions.rawUserData.permissions.includes(item.permision_id)
    : false;

  if (permisoValido) return true;

  // Si el elemento tiene sub-items, verifica recursivamente
  if (item.items && item.items.length > 0) {
    return item.items.some(subItem => tienePermiso(subItem));
  }

  return false;
}


const permisions = loginStore()


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
    <div @mouseleave="visible_menu = false" style="transition: all 1s ease;"  class="layout-topbar md:px-4" :style="`background-color:${User_store.bar_color} ;max-width: 100vw;` ">


        



        <router-link to="/" class="layout-topbar-logo">
            <img :class="User_store.colorized? 'normal' : 'white'" style="height: 3rem;" src="/images/logo.png" alt="logo" />
            <!-- <span>SAKAI</span> -->
           <span class="pl-4 text-sm text-white">{{ getUserRole() }}</span> 
        </router-link>

        <button v-if="isSmallScreen" class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle() ">
            <i class="pi pi-bars button-toggle-sidebar text-white"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>


        <div class="icons" style="justify-content: center;width: 100%; align-items: center;">
                    <div @mouseover="visible_menu = false" style="height: 3rem;width: 3rem"></div>

                    <div @mouseleave="visible_menu = false" style="width: .5rem;"></div>
                <div style="display: flex;justify-content: center;"  v-show="tienePermiso(link)"  v-for="link in User_store?.model?.filter(p => p.items.some(p => p.to))"  > 
                <div @mouseleave="visible_menu = false" style="width: .5rem;"></div>

                <div style="display: flex;justify-content: center;">
                    <div  @mouseover="over(link.items)">  <Button class="p-1 text-l" style="aspect-ratio: 1 / 1; height: 2rem;width: 2rem;" :icon="link.icon" :style="`background-color:${User_store.colorized? link['icon-color'] : 'white'}`"></Button></div>
            
                <div class="animate"  @mouseleave="visible_menu = false" v-if="current_items == link.items && visible_menu" style="display: flex;flex-direction: column;justify-content: start; opacity: .9; position: absolute;top: 3rem;width: max-content;min-width: 25rem; border-radius: 0 0 1rem 1rem;gap: 1rem;padding: 2rem" :style="`background-color:${User_store.bar_color}`">
<h6 style="color: white;text-transform: capitalize;"> <b>{{ link.label }}</b></h6>

                    <RouterLink :to="item.to"  v-for="item in current_items">
                        <Button class="item" :class="route.fullPath.includes(item.to)? 'activo' : ''" @click="visible_menu = false" style="width: 100%; border-radius: 1rem;color: white; border-radius: 0;text-transform: uppercase;min-width: max-content;" :label="item.label" >

                    </Button>
                    </RouterLink>
                    
                </div>
                <div @mouseleave="visible_menu = false" style="width: .5rem;"></div>
                
            </div> <div v-if="(current_items == link.items && visible_menu) ||  link.items?.some(i => route.fullPath.includes(i.to))" style="position: absolute;bottom:0%;height: .3rem;width: 2.5rem;background-color: white;"></div>
                </div>
                <div @mouseover="visible_menu = false" style="height: 3rem;width: 3rem;"></div>

                
           
        </div>

   

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


.animate{
    animation:  anim .3s ease ;
}


@keyframes anim {

    0%{
        transform: translate(-1rem);
        opacity: 0;
    }

    100%{
        
    }
    
}

@keyframes anim2 {

0%{
    transform: translate(1rem);
    opacity: 0;
}

100%{
    
}

}


.item{
    background-color: #ffffff30;
    transition: all .2s ease;
}

.item:hover{
    transform: scale(1.05);
}

.activo{
    background-color:var(--primary-color);
}

.activo2{
    
    box-shadow: 0 .5rem 0 red;
}

.white{
   
    filter:grayscale(1) brightness(300) ;
  
}


.icons{
    display: flex;
}

@media (width < 1200px) {

    .icons{
        display: none;

    }
    
}




</style>
