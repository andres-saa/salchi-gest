<template>

  
    <Dialog style="border: none; box-shadow: none;" v-model:visible="showDotation" :style="{ width: '700px' }"
        header="Constancia de entrega de dotacion" :modal="true" class="p-fluid m-2 pt-8">

        
        <div class=" a4-size p-0 lg:p-6 mi-clase mt-4">




            <img class="m-auto" src="https://salchimonster.com/images/logo.png" style="width: 10%;" alt="">

            <h6 style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">


                {{ convertirFecha(currentDotacion.delivery_date) }}
            </h6>
            <h6 class="text-center"
                style="font-size: 11pt; font-weight: bold;color: black; font-family: Arial, Helvetica, sans-serif;">
                INVERSIONES SALCHIMONSTER SAS
            </h6>

            <!-- [Logo de la Empresa] -->

            <h6 style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;"
                class="text-center">NIT: 901.420.874-0</h6>

            <h6 class="text-center py-4" style="font-weight: bold;text-transform: uppercase;">ENTREGA DE DOTACION <span
                    style="text-transform: capitalize;"></span></h6>

            <h5 class="text-l "
                style="font-size: 11pt; font-weight: normal;color: black; font-family: Arial, Helvetica, sans-serif;">



                <p class="p-0 m-0" style="width: 100%;">
                    <span style="font-weight: bold;">Entrega: </span> <span
                        style="width: 100%; border-bottom: 1px solid ; padding-bottom: 0; padding-right:3rem"> {{
                            user_delivery.name }}</span>

                </p>

                <p class="p-0 m-0" style="width: 100%;">
                    <span style="font-weight: bold;">Recibe: </span> <span
                        style="width: 100%; border-bottom: 1px solid ; padding-bottom: 0; padding-right:3rem"> {{
                            user_receive.name }}</span>

                </p>






                <div style="display: flex;flex-direction: column; justify-content: start; border: 1px solid; margin-top: 2rem;"
                    class=" col-12 p-0 ">

                   
                    <p class="text-center p-0 m-0" style="font-weight: bold;">Lista de Entregados</p>

                    <div class="p-0 col-12">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid;">
        <thead>
            <tr>
                <th style="border: 1px solid; text-align: left;">Nombre</th>
                <th style="border: 1px solid; text-align: left; width: 20%;">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in deliveryItems" :key="index">
                <td style="border: 1px solid;">{{ item.name }}</td>
                <td style="border: 1px solid;">{{ item.quantity }}</td>
            </tr>
        </tbody>
    </table>
</div>
            







                </div>


                <div class="grid" style=" position: relative">




                    <p class="col-12 md:col-6 m-0" style="font-family: ;  display: flex; flex-direction: column; position: relative;">
                        <span v-if="currentDotacion?.firmado_enviado" class="text-7xl"
                            style=" min-width: max-content; width: 100%;position: relative;bottom:-40px  ;text-transform: lowercase ;font-family: 'TheWeddingSignature', cursive; padding-bottom: 0; padding-right:3rem">
                            {{
                                user_delivery?.name?.substring(0, 30) }}.</span>


                        <span v-else class="text-7xl"
                            style="width: 100%;position: relative;bottom:-50px  ;text-transform: lowercase ;font-family: 'TheWeddingSignature', cursive; padding-bottom: 0; padding-right:3rem">
                            .</span>

                        <span style="font-weight: bold; border-top: 1px solid;">{{ user_delivery.name }} </span>
                    </p>

                    <p class="col-12 md:col-6 m-0" style="font-family: ;  display: flex; flex-direction: column; position: relative;">
                        <span v-if="currentDotacion?.firmado_recibido" class="text-7xl"
                            style=" min-width: max-content; width: 100%;position: relative;bottom:-40px  ;text-transform: lowercase ;font-family: 'TheWeddingSignature', cursive; padding-bottom: 0; padding-right:3rem">
                            {{
                                user_receive?.name?.substring(0, 30) }}.</span>


                        <span v-else class="text-7xl"
                            style="width: 100%;position: relative;bottom:-50px  ;text-transform: lowercase ;font-family: 'TheWeddingSignature', cursive; padding-bottom: 0; padding-right:3rem">
                            .</span>

                        <span style="font-weight: bold; border-top: 1px solid;">{{ user_receive.name }} </span>
                    </p>




                </div>




            </h5>





        </div>

 

        <!-- {{ currentDotacion }} -->

    </Dialog>
</template>


<script setup>


import { ref, onMounted, watch } from 'vue'
import { getUserDni, getUserId, getUserBasic, currentDotacion, showDotation } from '@/service/valoresReactivosCompartidos';
import { URI } from '../service/conection';
import { PrimeIcons } from 'primevue/api';
const user_receive = ref({})
const user_delivery = ref({})

const show = ref(true)
const deliveryItems = ref([])
function convertirFecha(fecha) {

    if (!fecha) {
        fecha = "2029-12-21 16:19"
    }
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    // Dividimos la fecha y la hora
    let [fechaParte, horaParte] = fecha.split(' ');

    // Dividimos los componentes de la fecha
    let [año, mes, día] = fechaParte.split('-').map(Number);

    // Convertimos el mes a formato legible
    let mesLegible = meses[mes - 1];

    // Formateamos la fecha
    return `${día} de ${mesLegible} de ${año}`;
}

const props = defineProps({
    dotacion: {
        type: Object,
        default: {}
    }
})

onMounted(() => {
    if (currentDotacion.value.delivery_id) {

        getUserBasic(currentDotacion.value.user_delivery_id).then(data => {
            user_delivery.value = data
        })

        getUserBasic(currentDotacion.value.user_receive_id).then(data => {
            user_receive.value = data
        })

        getDeliveryItems(currentDotacion.value.delivery_id).then(data => {
            deliveryItems.value = data
        })
    }

})

watch(showDotation, (nuevo) => {
    if (nuevo) {
        getUserBasic(currentDotacion.value.user_delivery_id).then(data => {
            user_delivery.value = data
        })

        getUserBasic(currentDotacion.value.user_receive_id).then(data => {
            user_receive.value = data
        })
        getDeliveryItems(currentDotacion.value.delivery_id).then(data => {
            deliveryItems.value = data
        })

    }
})


const getDeliveryItems = async(delivery_id) => {
    try {
        
        const response = await fetch(`${URI}/supply_delivery_items/delivery/${delivery_id}`)
        if (!response.ok){
            throw ('paila')
        }
        const  data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
</script>


<style scoped>
@font-face {
    font-family: 'TheWeddingSignature';
    src: url('/fonts/TheWeddingSignature-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>