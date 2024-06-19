<script setup>
import { useToast } from 'primevue/usetoast';
import { obtenerRolesYActualizar } from './service/roles';
import { onBeforeMount,onMounted,ref } from 'vue';
import Loading from './components/Loading.vue';
import {orderService} from '@/service/menu/orderService.js'
import { useOrderStore } from './store/order';

const sonido4 = new Audio('/sound/pip4.wav')
const orderStore = useOrderStore()

const sonido1 = new Audio('/sound/pip1.wav')
const sonido2 = new Audio('/sound/pip2.wav')
const sonido3 = new Audio('/sound/pip3.wav')



onBeforeMount(async() => {
    obtenerRolesYActualizar( )
})


const toast = useToast()


const intervalId = ref()
const intervalId2 = ref()
const sounds = [sonido1, sonido2, sonido3]; // Array de sonidos


onMounted( async() => {



    intervalId2.value = setInterval(async() => {

        const recent_cancellation = await orderService.is_recent_order_generated()
        if (recent_cancellation && orderStore.numberCancellationRequests != recent_cancellation) {
            const randomSoundIndex = Math.floor(Math.random() * sounds.length); // Genera un índice aleatorio
            sounds[randomSoundIndex].play(); // Reproduce el sonido seleccionado al azar
            orderStore.numberCancellationRequests = recent_cancellation; // Actualiza el store
            toast.add({ severity: 'error', summary: 'Solicitud de Cancelacion', detail: 'Una sede ha solicitado cancelar una orden', life: 10000 });
        fetchCancellationRequestsNoLoading();
        }
    }, 10000);


    

    intervalId.value = setInterval(async() => {

        const recentTransfer = await orderService.is_recent_transfer_generated()
        if (recentTransfer && orderStore.numberTransferRequests != recentTransfer) {
            // const randomSoundIndex = Math.floor(Math.random() * sounds.length); // Genera un índice aleatorio
            sonido4.play(); // Reproduce el sonido seleccionado al azar
            orderStore.numberTransferRequests = recentTransfer; // Actualiza el store
            toast.add({ severity: 'success', summary: 'Nueva solicitud de tranferencia', detail: 'Un cliente quiere pagar por transferencia', life: 10000 });

        fetchTransferRequestsNoLoading();
        }
    }, 10000);



} )
</script>

<template>
   

   <loading class="col-12" style=" z-index: 9;"></loading>


    <Toast style="z-index: 999;" ></Toast>
    
   
        <RouterView></RouterView>

</template>

<style scoped>



</style>
