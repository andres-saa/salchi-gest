<template>



    <div>


        <div class="aux-back"
            style="background-color: white;  object-fit: contain;display: flex; position: fixed;top: 0;bottom: 0;left: 0;">
        </div>



        <div class="aux-back"
            style="background-color: rgb(0, 1, 22);opacity:0.9 ;background-size: cover;height: 100vh;  width: 100vw; object-fit: contain;display: flex; position: fixed;top: 0;bottom: 0;left: 0;">
        </div>


        <div style="height: calc(100vh - 3rem); display: flex;margin-top:2rem; align-items: center;">





            <div class="ipad-container col-12   "
                style="max-width: 800px;border-radius:0.5rem;position: relative;display: flex; ">



                <div style="z-index: 99; width: min-content; display: flex;justify-content: start; gap: 1rem; align-items: center;"
                    class=" knobi my-3">

                    <div
                        style="position: relative;width: min-content; height: min-content; display: flex;align-items: center; justify-content: center;">
                        <!-- <Knob v-model="valor" valueTemplate=""></Knob> -->
                        <img class="p-1"
                            style="height:3.5rem; position: relative; border-radius: 50%;width: 3.5rem;outline: .2rem solid var(--primary-color); object-fit: cover;"
                            :src="`${URI}/read-product-image/96/employer-${store.rawUserData?.dni}`" alt="">

                    </div>


                    <div style="display: flex; flex-direction: column;gap:0.5rem ;   ">
                        <h6 class="text-xl m-0 md:text-3xl" style=" min-width: max-content;color:white;text-transform:capitalize;  text-shadow: 
">


                            {{ store.rawUserData?.name.split(' ').slice(0, 3).join(' ').toLowerCase() }}</h6>

                        <h6 class="m-0" style=" color:white;text-transform:capitalize; min-width:max-content;
"> {{ store.rawUserData?.rol.toLowerCase() }}</h6>
                    </div>


                </div>


                <div class="ipad-screen p-3" style=" ">


                    <h4 class="m-0 col-12" style="color: #fff;">

Accesos Directos ->


                    </h4>




                    <div style="overflow: hidden;display: flex;align-items: center;">




<div style="display: flex; transition: .7s all ease;" ref="slider" :class="move ? 'move' : '.'">


<div v-for="i in [1,2,3]" class="grid col-12   m-0"
    style="z-index: 99;overflow: hidden;width: 100%; align-items: start"
   >





    <div class=" col-6  p-0 md:col-3 xl:col-3 px-0 item p-3" v-for="menu in menus"
        style="display: flex; transition: .2s all ease; flex-direction: column; justify-content: center; align-items: center;">
        <div class="p-0   " outlined style="border: none;">

            <a class="" v-if="menu.a" :href="menu.to">
                <Button class="p-1 " style="background-color: transparent;border: none;">
                    <img class="m-0 px-2 py-2 " :src="menu.imagen"
                        style="width: 100%;aspect-ratio: 16/9; object-fit: cover;" alt="">
                </Button>
            </a>

            <router-link v-else :to="menu.to">
                <Button class="p-1" style="background-color: transparent;border: none;">
                    <img class="m-0 px-2 py-2" :src="menu.imagen"
                        style="width: 100%;aspect-ratio: 16/9; object-fit: cover;" alt="">
                </Button>
            </router-link>



        </div>

        <span class="texto-apps text-sm md:text-l my-0 my-1"
            style="text-align: center; z-index: 99; color: white;">{{ menu.name }}</span>


    </div>

</div>



</div>


                    </div>
                   


                    
                    <div class="buttons" style="height: min-content;">

                    <Button v-if="current_post > 1" class="button" rounded icon="pi pi-angle-left text-2xl text-white"
                        style="position: absolute;background-color: var(--primary-color); left: -1.5rem;z-index: 999;"
                        @click="moveLeft"></Button>

                    <Button v-if="current_post < 3" class="button" rounded icon="pi pi-angle-right text-2xl text-white"
                        @click="moveRight"
                        style="position: absolute; background-color: var(--primary-color);right: -1.5rem;z-index: 9999;"></Button>

                    </div>

                </div>

            </div>
        </div>
    </div>




</template>







<script setup>
import { ref } from 'vue';
import { URI } from '@/service/conection'
import { loginStore } from '@/store/user.js'
const store = loginStore()
const valor = ref(90)
const move = ref(false)

const slider = ref(null)

const current_post = ref(1) ;

const positionX = ref(0);



const moveRight = () => {
  // Incrementamos la posición en 100px hacia la derecha

  if (current_post.value <3){
  positionX.value -= 100;

  // Aplicamos el nuevo valor de transform a través del estilo
  slider.value.style.transform = `translateX(${positionX.value}%)`;
  current_post.value += 1 
  }
};


const moveLeft = () => {
  
    if (current_post.value > 1){
        positionX.value += 100;

        current_post.value -= 1 
        slider.value.style.transform = `translateX(${positionX.value}%)`;
    } else{
        slider.value.animation
    }

};



const items = ref([
    {
        label: 'Finder',
        icon: "https://primefaces.org/cdn/primevue//images/dock/finder.svg",
        command: () => {
            displayFinder.value = true;
        }
    },
    {
        label: 'Terminal',
        icon: "https://primefaces.org/cdn/primevue//images/dock/terminal.svg",
        command: () => {
            displayTerminal.value = true;
        }
    },
    {
        label: 'App Store',
        icon: "https://primefaces.org/cdn/primevue//images/dock/appstore.svg",
        command: () => {
            toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
        }
    },
    {
        label: 'Safari',
        icon: "https://primefaces.org/cdn/primevue//images/dock/safari.svg",
        command: () => {
            toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
        }
    },
    {
        label: 'Photos',
        icon: "https://primefaces.org/cdn/primevue//images/dock/photos.svg",
        command: () => {
            displayPhotos.value = true;
        }
    },
    {
        label: 'GitHub',
        icon: "https://primefaces.org/cdn/primevue//images/dock/github.svg",
    },
    {
        label: 'Trash',
        icon: "https://primefaces.org/cdn/primevue//images/dock/trash.png",
        command: () => {
            toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
        }
    }
]);


const menus = [
    {
        name: 'Certificado laboral',
        to: '/certificado-laboral',
        imagen: "/images/icons/certify.png"
    },

    {
        name: 'Capacitaciones',
        to: 'capacitaciones-invitaciones',
        imagen: "/images/icons/capacitation.png"
    },


    {
        name: 'Actualizar mis datos',
        to: '/actualizar-datos',
        imagen: "/images/icons/data.png"
    },
    {
        name: 'Solicitar permiso general',
        to: '/permiso',
        imagen: "/images/icons/general.png"
    },
    {
        name: 'Solicitar permiso por licencia',
        to: '/permiso-licencia',
        imagen: "/images/icons/licencia.png"
    },
    {
        name: 'Solicitar vacaciones',
        to: '/permiso-vacaciones',
        imagen: "/images/icons/vacaciones.png"
    },
    {
        name: 'Mi carne digital',
        to: '/mi-carnet',
        imagen: "/images/icons/carnet.png"
    },

    {
        name: 'Un verdadero Monstruo',
        to: '/informacion-empresarial',
        imagen: "/images/icons/monster.png"
    },

    {
        name: 'Mis turnos',
        to: '/turnos-trabajo-empleados',
        imagen: "/images/icons/turno.png"
    },
    {
        name: 'Facebook Salchimonster',
        to: 'https://www.facebook.com/salchimonsterr',
        imagen: "/images/icons/facebook.webp",
        a: true
    },
    {
        name: 'Instagram Salchimonster',
        to: 'https://www.instagram.com/salchimonsterr/',
        imagen: "/images/icons/insta.webp",
        a: true
    },

    {
        name: 'Youtube salchimonster',
        to: 'https://www.youtube.com/@Salchimonster/videos',
        imagen: "/images/icons/youtube.png",
        a: true
    },



]

</script>



<style scoped>
.imagen::before {

    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    object-fit: cover;


}

.knobi {
    margin: 0 0rem;
}

.bg {
    background-image: url('/images/bg-ipad.jpg');
    background-size: cover;
    width: 100%;
    object-fit: cover;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    opacity: 1;
    background-size: cover;
}


Button img {
    transition: all .3s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.208); */
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    object-fit: cover;

}

Button img:hover {
    /* transform: scale(1.03); */

}

.ipad-container {
    /* aspect-ratio: 4/5; */
    /* border-radius: 1rem; */
    /* max-width: 1080px; */
    height: max-content;
    /* max-height: 1920px; */
    /* background-color: rgb(255, 255, 255); */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    justify-content: center;

    margin: auto;

}



@keyframes move {
    0% {
        opacity: 1;
        /* width:100% */
        transform: translateX(0100%); 


    }

    100% {
        transform: translateX(-100%); 
    }


}


@keyframes alter-move {
    0% {
        opacity: 1;

    }

    100% {
        transform: translateX(  100%);

    }


}




.ipad-screen {
    border-radius: 0.5rem;
    /* box-shadow: 0 0 10px var(--primary-color) ; border-radius: 0.5rem; */
    outline: 2px solid var(--primary-color);


}

.barra {
    display: flex;
}

.ipad-screen {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* justify-content: space-between; */
    background-color: transparent;
    height: 100%;
    /* overflow: hidden; */
    /* box-shadow: 0 0 20px var(--primary-color) ; border-radius: 0.5rem;
     overflow: hidden; */
}

@media (max-width: 600px) {
    .texto-apps {
        font-size: 0.8rem;
        /* Tamaño de letra reducido para pantallas pequeñas */
    }

    .ipad-container {
        border: none;
        box-shadow: none;


        margin-top: 2rem;


    }

    .knobi {
        margin: 1rem;
    }

    .dock {
        display: none;
    }

    .ipad-screen {}

    .bg {
        position: fixed;
        /* display: none; */
        bottom: 0;
        height: 100%;
    }

    .barra {
        /* display: none; */
    }

    .aux-back {
        display: inline;
    }



}

.item {
    filter: brightness(.9);
}

.item:hover {
    /* transform: scale(1.1); */
    filter: brightness(1.4);
    transform: translateY(-1rem)
}
</style>