<template>
    <div>


        <div class="buttons active" style="display: flex;align-items: center; justify-content: center;height: 100%;gap: 1rem;" >

       
            <div  :icon="btn.icon" class="text-3xl btn2" :style="{}"  v-for="(btn, index) in buttons" :key="index" style="display: flex;flex-direction: column;align-items: center;gap: 2rem; " >

                
                <i class="text-4xl" :class="btn.icon" :style="{color:btn.bg}" style="font-weight: bold;"></i>
                <Button @click="router.push(btn.to)"  :style="{color:btn.bg,border:`1px solid ${btn.bg} `}" class="text-2xl btn" :label="btn.label" style="aspect-ratio:  1 / 1; width: 15rem; text-align: center;box-shadow: 0 0 1rem; ">

                </Button>
            </div>
    
        </div>
    </div>
</template>


<script setup lang="ts">

import { useRoute } from 'vue-router';
import router from '../../../router';


const route = useRoute()


import { Ref } from 'vue';

const buttons = [


    {
        label:'Chatear con clientes',
        bg:'#22C55E',
        icon:'pi pi-whatsapp text-2xl',
        to:'/chat/chats'
    },

    
    {
        label:'Gestionar plantillas y difusiones',
        bg:'#EF4444',
        icon:'pi pi-sync text-2xl',
          to:'/chat/templates'
    }
    ,
    {
        label:'Estadisticas',
        bg:'#F59E0B',
        icon:'pi pi-chart-bar text-2xl'
    }
]


</script>

<style scoped>



.buttons{
    animation: active .5s ease;
}



@keyframes active {
    0%{
        opacity: 0;
        transform: translateY(-3rem);
    }
}


.btn{
    background-color: transparent;
}

i{
    transition: all .3s ease;
}

.btn:hover{
    background-color: rgba(255, 255, 255, 0.082);

}

.btn2:hover i {
    transform: scale(1.5);
}

</style>