<template>


 





</template>


<script setup>



import { useToast } from 'primevue/usetoast';
import { watch } from 'vue';
import { onMounted } from 'vue';
import {loginStore} from '@/store/user.js'


const store = loginStore()
  
const toast = useToast()

onMounted(() => {
   

})



watch(() => store.NoAuthorized ,(newVal) => {
    if(newVal){
        toast.add({ severity: 'error', summary: 'No estas autorizado', detail: 'No tienes permiso para entrar ahi', life: 3000 })
        store.NoAuthorized = !newVal
    }
})






</script>