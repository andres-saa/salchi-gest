<template>


    <div class="chat-container-master " style="" :style="chatTheme.current_chat_theme.bg" >

        
    <div class="icons-bar"  style="display: flex; box-shadow: .5rem 0 1rem #00000020; flex-direction: column;height: 100%;gap: 1rem; background-color: #ffffff20;padding: .5rem;;z-index: 99;">
    
        <div class="icons" :class="route.fullPath == '/chat/'? 'icons' : 'icons-active'" style="display: flex;flex-direction: column;height: 100%;gap: 1rem;">
            <RouterLink to="/chat/chats" active-class="active">
            <Button  severity="success" icon="pi pi-whatsapp text-2xl" text></Button>
            </RouterLink>

            <RouterLink to="/chat/templates" active-class="active">
                <Button severity="danger" icon="pi pi-sync text-2xl" text></Button>

            </RouterLink>

            <Button :style="style? 'background-color:transparent;color:black' : 'background-color:transparent;color:white'"  @click="alternateTheme" severity="warning"  icon="pi pi-eye text-2xl" text></Button>
    
        </div>
        
    </div>
     
    <RouterView/>
        
 
    </div>
    
    
    </template>
    
    <script setup>
    import Sidebar from './Sidebar.vue'
    import Main from './Main.vue'
    import { useRoute } from 'vue-router';
    import { computed, onMounted } from 'vue';
    import {chatThemeStore} from '@/store/chatTheme'



    const chatTheme  = chatThemeStore()


    const alternateTheme = () => {

        chatTheme.current_chat_theme.name == 'light'? chatTheme.current_chat_theme = chatTheme.themes.dark : chatTheme.current_chat_theme = chatTheme.themes.light

    }

    const route = useRoute()



    const style =  computed( () => {
        return chatTheme.current_chat_theme.name == 'light'
    })


    onMounted(() => {
    

        // if (!chatTheme.current_chat_theme.bg){
        //     chatTheme.current_chat_theme = chatTheme.themes.black
        // }
  
 
    
    })
    
    
   
    </script>
    
    <style scoped>
    
    .chat-container-master{
        display: grid;
        margin-top: 3rem;
        grid-template-columns:4rem 1fr ;
        height: 100vh;
        min-width: 1268px;
        /* padding: .5rem !important; */
        /* gap: .5rem; */
        max-height: calc(100vh - 3rem) ;
 
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
    
    