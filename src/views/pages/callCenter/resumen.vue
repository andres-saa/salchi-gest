<template>
    <div class="43f1 43f5 md:43f0 43f12">
        <!-- Contenedor principal “Resumen” -->
        <div class="sticky-summary 43f12 43f3 43f0">
            <h5><b>Resumen</b></h5>
            <h5><b>productos</b></h5>

            <!-- Lista de productos -->
            <div  v-for="product in store.cart"
                :key="product.productogeneral_id">

                <div class="43f0 43f0 product-line">
                    <div class="43f6 43f2 43f0 43f0">
                    <h6 class="43f0">
                        <span class="span-minwidth">( {{ product.pedido_cantidad }} ) </span>
                       <span style="font-weight: 400;"> {{ product.pedido_nombre_producto }}</span>
                    </h6>

                    <h6 class="43f0 43f3 " style="margin-left: 1rem;" v-for="i in product.lista_productocombo" :key="i.producto_id">
                        ( {{  product.pedido_cantidad }} ) <b style="margin-right: .5rem;">{{ parseInt(i.pedido_cantidad ) }}</b>
                        <span class="font-weight-400">{{ i.pedido_nombre   }}</span>
                    </h6>






                </div>




                <div class="43f6 43f0 text-right 43f2">
                    <h6 v-if="product.modificadorseleccionList.length < 1" class="text-end">
                        {{ formatoPesosColombianos(product.pedido_precio * product.pedido_cantidad) }}
                    </h6>

                    <h6 v-else class="text-end">
                        {{ formatoPesosColombianos(product.pedido_base_price * product.pedido_cantidad) }}
                    </h6>
                </div>


                </div>
                <div class="addition-item" v-for="item in product.modificadorseleccionList" :key="item">
                            <div class="addition-ite43finner">
                                <span class="text adicion"><span><b>- ( {{ product.pedido_cantidad }} ) {{ item.modificadorseleccion_cantidad }}</b></span> {{ item.modificadorseleccion_nombre
                                    }}</span>

                                <span    v-if="item.pedido_precio > 0" class="pl-2 text-sm">
                                    <b>{{ formatoPesosColombianos(item.pedido_precio * item.modificadorseleccion_cantidad * product.pedido_cantidad) }}</b>
                                </span>
                            </div>
                    </div>

            </div>

      

            <hr class="43f0 43f2" />

          


            <div class="grid summary-grid">
                <div class="col-6 my-0 py-0">
                    <span><b>Subtotal</b></span>
                </div>
                <div class="col-6 my-0 text-right py-0 text-right text-end" style="">
                    <span>
                        <b>{{ formatoPesosColombianos(store.cartTotal) }}</b>
                    </span>
                </div>

                <div class="col-6 my-0 py-0" >
                    <span :style="siteStore.location.neigborhood.delivery_price == 0
                        ? 'text-decoration: line-through;'
                        : ''
                        "><b>Domicilio</b></span>
                </div>
                <div  class="col-6 my-0 text-right py-0 text-end">
                    <!-- {{ siteStore.location }} -->
                    <span v-if="siteStore.location.neigborhood.delivery_price === 0 && siteStore.location.site.site_id  != 33" class="primary-color">
                        <b>
                            {{
                                route.path.includes('reservas')
                                    ? 'Ir a la sede'
                                    : '$0'
                            }}
                        </b>
                    </span>
                    <span >
                        <b>{{ formatoPesosColombianos(siteStore.location.neigborhood.delivery_price) }}</b>
                    </span>
                    
                </div>
                <div class="col-6 my-0 py-0">
                    <span><b>Total</b></span>
                </div>
                <div class="col-6 my-0 text-right py-0 text-end" v-if="siteStore.location.neigborhood.delivery_price || siteStore.location.neigborhood.delivery_price === 0">
                    <!-- {{ siteStore.location }} -->
                    <span><b>{{ formatoPesosColombianos(
                        store.cartTotal +
                        siteStore.location.neigborhood.delivery_price
                            ) }}</b></span>
                </div>

                <!-- <Button @click="siteStore.visibles.currentSite = true" v-else label="Calcular mi domicilio"
                    style="min-width: max-content;"></Button> -->
            </div>
            <!-- Botones de navegación y acciones -->
            <router-link to="/call-center-vender" v-if="route.path.includes('cart')">
                <Button outlined icon="pi pi-shopping-cart" label="Volver al menu'"
                    class="43f4 button-common button-transparent button-fullwidth button-bold" severity="danger">
                </Button>
            </router-link>

            <router-link to="/call-center-vender/cart" v-else-if="route.path != '/reservas'">
                <Button outlined icon="pi pi-arrow-left" label="Volver al carrito"
                    class="43f4 button-common button-transparent button-fullwidth button-bold"
                    severity="danger"></Button>
            </router-link>

            <Tag v-if="siteStore.status?.status == 'closed' && route.path != '/reservas'" class="43f2 tag-fullheight"
                severity="danger">
                Cerrado, abre a las {{ siteStore.status.next_opening_time }}
            </Tag>


            <div>

            </div>


            <router-link to="/call-center-vender/pay"
                v-if="route.path.includes('cart') ">
                <Button iconPos="right" icon="pi pi-arrow-right" label="Pedir"
                    class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
                    severity="help"></Button>
            </router-link>

            <!-- Botón “Finalizar pedido” al reservar -->
            <router-link to="/pay" v-else-if="route.path.includes('reservas')">
                <Button @click="() => {
                    orderService.sendOrderReserva()
                    sending = true
                }" iconPos="right" icon="pi pi-arrow-right" label="Finalizar pedido"
                    class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
                    severity="help"></Button>
            </router-link>

            <!-- Botón “Finalizar pedido” si el restaurante no está cerrado -->
            <router-link to="/pay"
                v-else-if="siteStore.status?.status !== 'closed' && siteStore.status?.status && route.path == '/cart'">
                <Button iconPos="right" icon="pi pi-arrow-right" label="Finalizar pedido"
                    class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
                    severity="help"></Button>
            </router-link>


            <Button :disabled = "reportes.loading.visible"
                v-else-if=" route.path == '/call-center-vender/pay' && !reportes.loading.visible"
                @click="() => {
                    orderService.sendOrder()
                    sending = true
                }" iconPos="right" icon="pi pi-arrow-right" label="Finalizar pedido"
                class="43f2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline"
                severity="help"></Button>
        </div>
    </div>
</template>

<script setup>
import { formatoPesosColombianos } from './service/utils/formatoPesos';
import { usecartStore } from './store/shoping_cart';
import { useSitesStore } from './store/site';
import { useRoute } from 'vue-router';
import { orderService } from './service/order/orderService';
import { onMounted, ref, watch } from 'vue';
import { useUserStore } from './store/user';
// import { Button } from 'primevue';
// import { Tag } from 'primevue';
import { useReportesStore } from './store/ventas';

const reportes = useReportesStore()

const sending = ref(false);
const route = useRoute();
const store = usecartStore();
const siteStore = useSitesStore();
const user = useUserStore();

const agrupados = ref({});

// const update = () => {
//     agrupados.value = store.cart.additions.reduce((acumulador, elemento) => {
//         let grupo = elemento.group;
//         if (!acumulador[grupo]) {
//             acumulador[grupo] = [];
//         }
//         acumulador[grupo].push(elemento);
//         return acumulador;
//     }, {});
// };

onMounted(() => {
    // update();


});

watch(
    () => store.cart.additions,
    () => {
        update();
    },
    { deep: true }
);
</script>

<style scoped>
/* --- Clases nuevas para reemplazar estilos en línea --- */

/* Contenedor “sticky” del resumen */
.sticky-summary {
    position: sticky;
    padding: 1rem;
    max-height: min-content;
    background-color: white;
    box-shadow: 0 1rem 1rem #00000020;
    top: 9rem;
    border-radius: 0.5rem;
    z-index: 10;
}

/* Línea de cada producto (display: flex; justify-content: space-between) */
.product-line {
    display: flex;
    justify-content: space-between;
}

/* Span con min-width: 3rem; y width: 100% */
.span-minwidth {
    min-width: 3rem;
    width: 100%;
}

/* Forzar texto a “end” */
.text-end {
    text-align: end;
    width: 100%;
}

/* Contenedor de adiciones agrupadas */
.addition-group {
    position: relative;
    border-radius: 0.3rem;
}

/* Cada ítem de adicional */
.addition-item {
    display: flex;
    margin-left: 1rem;
    gap: 1rem;
    align-items: center;
}
h6{
    margin: 0;
}
/* Contenedor interno de ítem adicional */
.addition-ite43finner {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
}

/* Grid para los subtotales y totales */
.summary-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

/* Texto con color primario */
.primary-color {
    color: var(--primary-color);
}

/* Ajustes de fuente para la descripción base (opcional) */
.font-weight-400 {
    font-weight: 400;
}

/* Botones y clases genéricas */
.button-common {
    outline: none;
    margin: .5rem 0;
}

.button-no-outline {
    outline: none;
}

.button-no-border {
    border: none;
}

.button-fullwidth {
    width: 100%;
}

.button-bold {
    font-weight: bold;
}

.button-transparent {
    background-color: rgba(0, 0, 0, 0);
}

.button-black {
    background-color: black;
}

/* Tag de aviso de “Restaurante cerrado” */
.tag-fullheight {
    width: 100%;
    height: 2.5rem;
}

/* Estilos globales ya existentes */
.43fshadow {
    box-shadow: 0 0.3rem 5px rgba(0, 0, 0, 0.15);
}

button {
    text-transform: uppercase;
}

* {
    text-transform: uppercase;
    font-size: 0.9rem;
}

*::first-letter {
    text-transform: uppercase;
}
</style>
