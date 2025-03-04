<script setup>
import { useToast } from 'primevue/usetoast';
import { obtenerRolesYActualizar } from './service/roles';
import { onBeforeMount,onMounted,ref } from 'vue';
import Loading from './components/Loading.vue';
import {orderService} from '@/service/menu/orderService.js'
import { useOrderStore } from './store/order';
import {useAppStore} from './store/app/app'
import {fetchService} from './service/utils/fetchService'
import { URI } from './service/conection';
import NoPermission from './views/pages/NoPermission.vue';

const sonido4 = new Audio('/sound/pip4.wav')
const orderStore = useOrderStore()

const sonido1 = new Audio('/sound/pip1.wav')
const sonido2 = new Audio('/sound/pip2.wav')
const sonido3 = new Audio('/sound/pip3.wav')
const sonido_pqr = new Audio('/sound/pqr_audio.mp3')
const appStore = useAppStore()
const sonido_order = new Audio('/sound/order.wav')


const newVersion = ref(false)

onBeforeMount(async() => {
    obtenerRolesYActualizar( )
})


const toast = useToast()


const intervalId = ref()
const intervalId2 = ref()
const intervalId3 = ref()
const intervalId4 = ref()
const sounds = [sonido1, sonido2, sonido3]; // Array de sonidos





const updateApp = async() => {


    const currentVersion = await fetchService.get(`${URI}/get-salchigest-version/`)
    appStore.version_store = currentVersion.version
    window.location.href = window.location.href

}

onMounted( async() => {

        const currentVersion = await fetchService.get(`${URI}/get-salchigest-version/`)
        
        console.log(appStore.version_store)
        console.log(currentVersion.version)


        if(currentVersion.version > appStore.version_store || isNaN(appStore.version_store) ){
            newVersion.value = true
         
        }
  
    



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


    
    intervalId3.value = setInterval(async() => {

    const recent_pqr = await orderService.recent_pqr()
    if (recent_pqr && orderStore.numberPqrId != recent_pqr) {
        // const randomSoundIndex = Math.floor(Math.random() * sounds.length); // Genera un índice aleatorio
        sonido_pqr.play(); // Reproduce el sonido seleccionado al azar
        orderStore.numberPqrId = recent_pqr; // Actualiza el store
        toast.add({ severity: 'info', summary: 'Nueva Pqr recibida', detail: 'Una pqr por atender', life: 3000 });
        
    fetchTransferRequestsNoLoading();
    }
    }, 10000);


    intervalId4.value = setInterval(async() => {

    const recent_pqr = await orderService.recent_order()
    if (recent_pqr && orderStore.numberOders != recent_pqr) {
        // const randomSoundIndex = Math.floor(Math.random() * sounds.length); // Genera un índice aleatorio
        sonido_order.play(); // Reproduce el sonido seleccionado al azar
        orderStore.numberOders = recent_pqr; // Actualiza el store
        toast.add({ severity: 'success', summary: 'Nuevo pedido recibido', detail: 'Un pedido por atender', life: 3000 });
        
    fetchTransferRequestsNoLoading();
    }
    }, 10000);

} )
</script>

<template>



    <div v-if="newVersion" class="p-4" style="width: 100vw;height: 100vh; position: absolute;left: 0; top: 0;border-radius: .5rem; background-color: rgba(0, 0, 0, .5);z-index: 100000;justify-content: center; align-items:center;display: flex;">


        <div class="p-4" style="width: 100%; max-width: 20rem;background-color: white;border-radius: .5rem;display: flex; flex-direction: column;">

            <h5>
                <b>
                    Nueva version del salchigest disponible
                </b>
              
            </h5>

            <Button @click="updateApp()" severity="help" label="Actualizar"></Button>

        </div>


    </div>
   

   <loading class="col-12" style=" z-index: 9;"></loading>


    <Toast style="z-index: 999;" ></Toast>
    
   <NoPermission/>
        <RouterView></RouterView>

</template>

<style scoped>



</style>
