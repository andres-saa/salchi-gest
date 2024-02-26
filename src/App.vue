<script setup>
import { useToast } from 'primevue/usetoast';
import { obtenerRolesYActualizar } from './service/roles';
import { onBeforeMount } from 'vue';
import Loading from './components/Loading.vue';

onBeforeMount(async() => {
    obtenerRolesYActualizar( )
})
const toast = useToast()
</script>

<template>
   
    <Toast style="z-index: 99999999999999999999;" ></Toast>
    
    <transition name="fade">
        <RouterView></RouterView>
    </transition>

</template>

<style scoped>

.fade-enter-active,.fade-leave-active {
  transition: all ease  .5s;
  
}



/* .fade-enter-to  {
  opacity: 0;
  transform: translateX(20rem);
 
} */


/* .fade-leave-from  {
  opacity: 1;
  transform: translateY(20rem);

} */
 /*
*/

 .fade-enter-from {
  opacity: 1;
  transform: translateY(-20rem);
  filter: blur(10px);
  /* filter: blur(0); */
  
}



.fade-enter-to {
  opacity: 1;
  /* filter: blur(0); */
  /* transform: translateY(0); */

  
} 



</style>
