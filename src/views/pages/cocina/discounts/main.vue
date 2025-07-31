<template>




    <div class="container">
        <h1> <strong>Descuentos</strong> </h1>


        <DataTable :value="discounts" >

            <Column header="Nombre" field="discount_name">

            </Column>


            <Column header="Codigo" field="code">

            </Column>
            

            <Column header="Tipo" field="type">

            </Column>

            <Column header="Monto">
                <template #body="data">
                    <!-- {{ data }} -->
                    {{ data.data?.amount ? formatToColombianPeso(data.data.amount) : `${data.data.percent}%` }}
                </template>

            </Column>


            <Column header="Sedes" style="justify-content: end;display: flex;">
                <template #body="data">
                    <!-- {{ data }} -->
                    <Button @click="openToEdit(data.data)" icon="pi pi-home" severity="help"
                        :label="data.data.sites?.length"></Button>


                </template>

            </Column>

        </DataTable>


        <Dialog :style="dialogStyle" :header="`Sedes donde aplica el descuento ${currentDiscount.discount_name}`"
            v-model:visible="visibles.discountSites" modal>

            <div class="sites-continaer">
                <div v-for="site in currentDiscount.sites" class="site">

                    <div class="site">
                        <div class="left"><img :src="`${URI}/read-product-image/96/site-${site.site_id}`" alt="">
                            <h6 class="p-0 m-0">
                                {{ site.site_name }}
                            </h6>
                        </div>

                        <div class="right">

                            <Button label="Eliminar esta sede" icon="pi pi-trash" severity="danger"></Button>

                        </div>

                    </div>

                </div>

                <div class="site">

                    <div class="site">
                        <div class="left">
                        </div>

                        <div class="right">

                            <Button label="Agregar otra sede" icon="pi pi-plus" severity="help"></Button>

                        </div>

                    </div>

                </div>
                
            </div>

            <template #footer>

                <div class="footer-container">
                    <Button severity="help" label="Guardar"></Button>
                </div>
            </template>

        </Dialog>

        <Dialog>
            
        </Dialog>
    </div>
</template>

<script setup>
import { fetchService } from '@/service/utils/fetchService'
import { onMounted, ref } from 'vue';
import { URI } from '@/service/conection';
import { formatToColombianPeso } from '../../../../service/valoresReactivosCompartidos';

const discounts = ref([{}])

const visibles = ref({
    discountSites: false
})

const openToEdit = (discount) => {
    currentDiscount.value = discount
    visibles.value.discountSites = true
}

const dialogStyle = {
    maxWidth: '30rem'
}

const currentDiscount = ref([{}])

onMounted(async () => {
    discounts.value = await fetchService.get(`${URI}/discount/get-discounts`)
})


</script>

<style scoped>
.container {
    margin: 3rem auto;

    max-width: 1200px;
}

.footer-container{
width: 100%;
display: flex;
justify-content: end;
}

img {
    aspect-ratio: 1 / 1;
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
    object-fit: cover;
}

.sites-continaer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.site {
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.left{
    display: flex;
    gap: 1rem;
    align-items: center;
}
h1{
    margin:4rem 0;
}
</style>