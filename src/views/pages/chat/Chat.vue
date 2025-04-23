<template>


<div class="chat-container " >
<div class="icons-bar" style="display: flex;flex-direction: column;height: 100%;gap: 1rem; background-color: #ffffff20;padding: .5rem;border-radius: .5rem;">

    <Button severity="success" icon="pi pi-bell text-2xl" text></Button>
    <Button severity="danger" icon="pi pi-sync text-2xl" text></Button>
    <Button severity="warning"  icon="pi pi-chart-bar text-2xl" text></Button>

</div>
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
    margin-top: 3rem;
    grid-template-columns:4rem 1fr 2fr 1fr;
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



</style>

