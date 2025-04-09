<template>


<div class="chat-container " >
 <Sidebar   />
 <Main />
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
    grid-template-columns: 1fr 3fr;
    height: 100vh;
    padding: 2rem !important;
    gap: 1.5rem;
    background-color:rgb(0 0 22);
    max-height: calc(100vh - 3rem) 
}

@media (width < 600px) {
    .chat-container{
   
    grid-template-columns: 1fr ;
    padding: 0rem !important;

   
}
}

</style>

