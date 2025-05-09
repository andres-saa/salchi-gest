<template>


    <div class="chat-container-master " >
    <div class="icons-bar"  style="display: flex;flex-direction: column;height: 100%;gap: 1rem; background-color: #ffffff20;padding: .5rem;border-radius: .5rem;">
    
        <div class="icons" :class="route.fullPath == '/chat/'? 'icons' : 'icons-active'" style="display: flex;flex-direction: column;height: 100%;gap: 1rem;">
            <RouterLink to="/chat/chats" active-class="active">
            <Button  severity="success" icon="pi pi-whatsapp text-2xl" text></Button>
            </RouterLink>

            <RouterLink to="/chat/templates" active-class="active">
                <Button severity="danger" icon="pi pi-sync text-2xl" text></Button>

            </RouterLink>

            <Button severity="warning"  icon="pi pi-chart-bar text-2xl" text></Button>
    
        </div>
        
    </div>
     
    <RouterView/>
        
 
    </div>
    
    
    </template>
    
    <script setup>
    import Sidebar from './Sidebar.vue'
    import Main from './Main.vue'
    import { useRoute } from 'vue-router';


    const route = useRoute()
    
    </script>
    
    <style scoped>
    
    .chat-container-master{
        display: grid;
        margin-top: 3rem;
        grid-template-columns:4rem 1fr ;
        height: 100vh;
        min-width: 1268px;
        padding: .5rem !important;
        gap: .5rem;
        background-color:rgb(0 0 22);
        /* max-width: 1200px; */
        max-height: calc(100vh - 3rem) 
    }
    
    @media (width < 600px) {
        .chat-container{
       
        grid-template-columns: 1fr ;
        padding: 0rem !important;
    
       
    }
    }
    
    .icons{
        transform: translateX(-4rem);
        transition: all .3s ease;
    }


    .icons-active{
        transform: translateX(0);
    }
    

    .active{
        background-color: rgba(255, 255, 255, 0.137);
        color: white;
    }

    
    </style>
    
    