<template>


    <div class="chat-container " :style="chatTheme.current_chat_theme.bg" >
 
     <Sidebar style="       box-shadow: .5rem 0 1rem #00000010;" class="sidebar-left" :restaurant=" {id:1,name:'Salchimonster',img:'https://backend.salchimonster.com/read-photo-product/xai0dVnL'}"  />
     <Main />
     <Sidebar style="       box-shadow: -.5rem 0 1rem #00000010;"  class="sidebar-right" :restaurant=" {id:1,name:'Salchimonster',img:'https://backend.salchimonster.com/read-photo-product/xai0dVnL'}" />
    </div>
    
    
    </template>
    
    <script setup>
    import Sidebar from './Sidebar.vue'
    import Main from './Main.vue'
    
    import {chatThemeStore} from '@/store/chatTheme'



    const chatTheme  = chatThemeStore()


    
    </script>
    
    <style scoped>
    
    .chat-container{
        display: grid;
        /* margin-top: 3rem; */
        grid-template-columns: 1fr 2fr 1fr;
        height: 100vh;
        min-width: 1268px;
        /* padding: .5rem !important; */
        /* gap: .5rem; */
        background-color:rgb(0 0 22);
        /* max-width: 1200px; */
        max-height: calc(100vh - 3rem) ;
        animation:  active .3s ease;
        overflow: hidden;
    }
    
    @media (width < 600px) {
        .chat-container{
       
        grid-template-columns: 1fr ;
        padding: 0rem !important;
    
       
    }
    }
    
    
    @keyframes active {
    0%{
        opacity: 0;
        transform: translateY(-3rem);
    }

    
}



.sidebar-left{
    animation: active-left .3s ease;
}


.sidebar-right{
    animation: active-right .3s ease;
}
    
    
@keyframes active-left {
    0%{
        opacity: 0;
        transform: translatex(-30rem);
    }

    
}


    
@keyframes active-right {
    0%{
        opacity: 0;
        transform: translatex(30rem);
    }

    
}

    </style>
    
    