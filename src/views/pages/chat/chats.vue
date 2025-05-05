<template>


    <div class="chat-container " >
 
     <Sidebar :restaurant=" {id:1,name:'Salchimonster',img:'https://backend.salchimonster.com/read-photo-product/xai0dVnL'}"  />
     <Main />
     <Sidebar  :restaurant=" {
          id:7,
          name:'Distrimoster',
          img:'https://backend.salchimonster.com/read-photo-product/iX6UiE6e'
        }" />
    </div>
    
    
    </template>
    
    <script setup>
    import Sidebar from './Sidebar.vue'
    import Main from './Main.vue'
    
    
    </script>
    
    <style scoped>
    
    .chat-container{
        display: grid;
        /* margin-top: 3rem; */
        grid-template-columns: 1fr 2fr 1fr;
        height: 100vh;
        min-width: 1268px;
        /* padding: .5rem !important; */
        gap: .5rem;
        background-color:rgb(0 0 22);
        /* max-width: 1200px; */
        max-height: calc(100vh - 4rem) 
    }
    
    @media (width < 600px) {
        .chat-container{
       
        grid-template-columns: 1fr ;
        padding: 0rem !important;
    
       
    }
    }
    
    
    
    </style>
    
    