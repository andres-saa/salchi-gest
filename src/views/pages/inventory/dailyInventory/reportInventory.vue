<template>


    <Dialog style="width: 30rem;" class="m-2" header="Estas seguro Monstruo?" modal v-model:visible="showConfirmDialog">

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
                <Button @click="showConfirmDialog = false" label="Mejor lo reviso de nuevo!" severity="help"></Button>
                <Button text label="Firmar" @click="sendInventory" severity="danger"></Button>
            </div>
        </template>
    </Dialog>


    <div class="md:mx-auto p-3 md:shadow-2 mb-6"
        style="max-width:700px;border-radius:0.5rem;min-height:80vh; margin-top:3rem">

        <p class="text-2xl my-3 text-center ">
            <b>
                Reportar inventario

            </b>


        </p>

        <p class="text-xl  py-0 my-0">
            <b>
                Fechah :

            </b> {{ formatDate(new Date()) }}
        </p>

        <p class="text-xl  py-0 my-0" style="text-transform: capitalize;">
            <b>
                Responsable :

            </b>{{ store.rawUserData?.name.toLowerCase() }}
        </p>
        <!-- {{groupWithItems}} -->
        <div v-for="(grupo, index) in groupWithItems" :key="index">
            <p class="text-center p-1 my-3" style="background-color: #00000020;border-radius:0.2rem">
                <b style="text-transform:uppercase;">
                    {{ grupo.group_name }}
                </b>

            </p>

            <div style="align-items:center" class="grid m-0 " v-for="(item, index) in grupo.items" :key="index">

                <div style="text-transform: uppercase; font-weight:bold" class="col-12 my-2 md:col-6 p-0"> {{
                    item.item_name
                    }} <Tag severity="danger">{{ item.unit_measure }}</Tag>
                </div>

                <div class="col-12 md:col-6 px-0 py-1 md:pl-3" style="display: flex;align-items:center;gap:1rem">
                    <!-- <span v-if="item.quantity == null" style="color:red; font-weight:bold">*</span> -->
                    <InputNumber  :useGrouping="false"  showButtons  buttonLayout="horizontal"  :min="0" :maxFractionDigits="2" v-model="item.quantity"
                        :suffix="` ${item.unit_measure}`" maxDecimal="5" style="width: 100% " class="" :style="item.quantity == null && validating? 'outline:3px solid red;border-radius:0.5rem' : ''" >
                    </InputNumber>
                   
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



const prepareItemsToSend = (grupo) => {
    return grupo.map(grupo => grupo).map(item => 
        item.items
    ).flat().map(it => {
        return {
            daily_inventory_item_id:it.item_id,
            quantity:it.quantity,
            daily_inventory_unit_measure_id:it.unit_measure_id
        }
    })
}


const preareInventory = () => {
    return {
        daily_inventory:{
            "responsible_id": store.rawUserData?.id,
            "site_id": store.rawUserData?.site_id,
        },
        daily_inventory_items:prepareItemsToSend([...groupWithItems.value])
    }
}


const openDialog = () => {
    const data = preareInventory()
    validating.value = true
    if(data.daily_inventory_items.some(item => item.quantity === null)){
        alert("Debes llenar todos los espacios")
        return
    }
    showConfirmDialog.value = true

}


const sendInventory = async() => {
   
    const data = preareInventory()
    await dailyInventoryReportsService.InsertDailyInventory(data)
    router.push('/daily-inventory/daily-inventory-my-reports/')

}




onMounted(async () => {
    const grupos = await dailyInventoryReportsService.getGroupsWithItems()
    grupos.map( g => g.items.map( i=> i.quantity = null))
    groupWithItems.value = grupos
    console.log(grupos)


})






</script>

<style scoped>


.invalid{

border-bottom:1px solid red
}


</style>