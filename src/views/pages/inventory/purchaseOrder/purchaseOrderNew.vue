<template>


    <Dialog :closable="false" style="width: 30rem;" class="m-2" header="Estas seguro Monstruo?" modal v-model:visible="showConfirmDialog">

        <span style="color: red;">Esta accion no se puede deshacer luego, piensalo bien.</span> <br> <br>
        Hola,
        <span style="text-transform:capitalize">
            {{ store.rawUserData?.name.toLowerCase() }} !
        </span>
        <p style="">
            Al precionar <Button severity="danger" text class="p-0" label="Firmar"> </Button> das fe de que el reporte
            del inventario para la sede <b>Salchimonster {{ store.rawUserData.site_name }} </b> el dia {{ formatDate(new
            Date()) }} que estas intentando enviar <b class="text-l">ES CORRECTO</b> y lo has verificado <b
                class="text-l">PERSONALMENTE.</b> <br> <br>


            <b>Deseas continuar?</b>
        </p>
        <template #footer>
            <div style="display: flex;justify-content:end">
                <Button @click="() => {showConfirmDialog = false; validating = false} " label="Mejor lo reviso de nuevo!" severity="help"></Button>
                <Button text label="Firmar" @click="sendPurchaseOrder" severity="danger"></Button>
            </div>
        </template>
    </Dialog>


    <div class="md:mx-auto p-0  mb-6"
        style="max-width:800px;border-radius:0.5rem;min-height:80vh; margin-top:3rem;">

        <p class="text-2xl my-3 text-center ">
            <b>
                Generar orden de compra

            </b>


        </p>

        <p class="text-xl  py-0 my-0">
            <b>
                Fecha :

            </b> {{ formatDate(new Date()) }}
        </p>

        <p class="text-xl  py-0 my-0" style="text-transform: capitalize;">
            <b>
                Responsable :

            </b>{{ store.rawUserData?.name.toLowerCase() }}
        </p>
        <p class="text-xl  py-0 my-0" style="text-transform: capitalize;">
            <b>
                sede :

            </b>{{ store.rawUserData?.site_name.toLowerCase() }}
        </p>
        <!-- {{groupWithItems}} -->
        <div v-for="(grupo, index) in groupWithItems" :key="index">
            <p class="text-center p-1 my-3 text-white" style="background-color: #000000;display: flex;align-items: center;justify-content: center; border-radius:0.3rem;height: 2.5rem;">
                <b style="text-transform:uppercase;border-radius: ">
                    {{ grupo.group_name }}
                </b>

            </p>

            <div style="align-items:center" class="grid m-0 " v-for="(item, index) in grupo.items" :key="index">

                <div style="text-transform: uppercase;display:flex;gap:1rem;align-items: center; justify-content:space-between; font-weight:bold" class="col-12 my-2 md:col-7 p-0">
                    <span>{{
                        item.item_name
                       }}</span>  <Tag style="border-radius:0.3rem;height: 2.5rem;background-color: transparent;" :style="`color:${unitMeasureColors[item.unit_measure_id]}; border: 1px solid ${unitMeasureColors[item.unit_measure_id]}`">{{ item.unit_measure }}</Tag>
                </div>

                <div class="col-12 md:col-5 px-0 py-1 md:pl-3" style="display: flex;align-items:center;gap:1rem">
                    <!-- <span v-if="item.quantity == null" style="color:red; font-weight:bold">*</span> -->
                    <InputNumber   invalid type="number" locale="es-ES"  :useGrouping="false"  showButtons   :min="0" :maxFractionDigits="2" v-model="item.quantity"
                        :suffix="` ${item.unit_measure}`" maxDecimal="5" style="width: 100%;height: 2.5rem; border-radius:0.3rem;" class=" md:p-0 "  :style="item.quantity == null && validating? 'border:2px solid red;border-radius:0.3rem' : ''" />
                    
                   
                </div>


            </div>
        </div>



        <div class="col-12 p-0 mt-3" style="display: flex; justify-content:end">
            <Button @click="openDialog" severity="help" label="Enviar Reporte"></Button>

        </div>
    </div>
</template>

<script setup>
import { dailyInventoryReportsService } from '../../../../service/inventory/dailyInventoryService.js'
import { loginStore } from '../../../../store/user.js'
import { ref, onMounted } from 'vue'
import router from '../../../../router/index.js'
import { URI } from "@/service/conection";
import {purchaseOrderService} from '../../../../service/inventory/purchaseOrderService'
import { fetchService } from '../../../../service/utils/fetchService'
const newReport = ref({ items: [{}] })
const groupWithItems = ref([])
const showConfirmDialog = ref(false)
const store = loginStore()
const itemsToSend = ref([])


const validating = ref(false)

function formatDate(date) {
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${day} de ${months[monthIndex]} del ${year}`;
}

const unitMeasureColors = {
    1: '#FF0000',  // Rojo brillante
    2: '#FF4500',  // Naranja rojizo
    3: '#FFD700',  // Oro
    4: '#FF4500',  // Verde oficina
    5: '#0000FF',  // Azul fuerte
    20: '#4B0082',  // Índigo
    21: '#3CB371',  // Púrpura
    25: '#EE82EE',  // Violeta
    23: '#FFC0CB',  // Rosa
    24: '#00FFFF', // Aqua
    11: '#3CB371', // Verde mar medio
    12: '#00008B', // Azul oscuro
    13: '#FFA500', // Naranja
    14: '#A52A2A', // Marrón
    15: '#FFFF00'  // Amarillo
};

const prepareItemsToSend = (grupo) => {
    return grupo.map(grupo => grupo).map(item => 
        item.items
    ).flat().map(it => {
        return {
            order_purchase_item_id:it.item_id,
            quantity:it.quantity,
            unit_measure_id:it.unit_measure_id
        }
    })
}


onMounted(async () => {
    const grupos = await purchaseOrderService.getGroupsWithItems()

    grupos.map( g => g.items.map( i=> i.quantity = 0))
    groupWithItems.value = grupos



})



const prepareItemsToSendCero = (grupo) => {
    return grupo.map(grupo => grupo).map(item => 
        item.items
    ).flat().map(it => {
        return {
            order_purchase_item_id:it.item_id,
            quantity:it.quantity  || 0,
            unit_measure_id:it.unit_measure_id
        }
    })
}

const preparePurchaseOrder = () => {
    return {
        order_purchase:{
            "responsible_id": store.rawUserData?.id,
            "site_id": store.rawUserData?.site_id,
        },
        order_purchase_items:prepareItemsToSend([...groupWithItems.value])
    }
}


const openDialog = () => {
    const data = preparePurchaseOrder()
    validating.value = true
    if(data.order_purchase_items.some(item => item.quantity === null)){
        alert("Debes llenar todos los espacios")
        return
    }
    showConfirmDialog.value = true

}


const sendPurchaseOrder = async() => {
   

    const data = preparePurchaseOrder()
    // data.daily_inventory_items = prepareItemsToSendCero([...groupWithItems.value])
    // await purchaseOrderService.InsertpurchaseOrder(data)

    await fetchService.post(`${URI}/insert_complete_order`,data,'enviando orden')
    router.push('/purchase-order/purchase-order-my-orders/')
    showConfirmDialog.value = false
}

function handleKeydown(event) {
  // Comprobar si la tecla presionada es la coma
  if (event.key === ',') {
    alert('Por favor usa punto ( . ) para los decimales, gracias');
    event.preventDefault(); // Prevenir que la tecla tenga efecto en el input
  }
}



</script>

<style scoped>


.invalid{

border-bottom:1px solid red
}


/* Para Chrome, Safari, y Edge */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Para Firefox */


/* Opcional: para todos los navegadores, asegurando que no aparezcan las flechas */
input[type="number"] {
  appearance: textfield;
}

</style>