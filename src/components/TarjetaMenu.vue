<template>
    <!-- {{ store.currentProduct }} -->

    <div class="container p-shadow col-12 shadow-2 p-3" style="border-radius: 0.5rem;background-color: white; height: 100%;position: relative;">

        <div style="display: flex; position: absolute; right: -1rem; top: -1rem; gap: 0.2rem;z-index: 9;">
            <Button class="shadow-2" @click="prepareToDelete(props.product)" severity="danger" style=" width: 2rem;height: 2rem; right: 0;top: 0;" rounded
                icon="pi pi-times"></Button>


            <Button class="shadow-2" @click="prepareToEdit(props.product)" severity="warning" style="font-weight: bold;width: 2rem;height: 2rem;  right: 0;top: 0;" rounded
                icon="pi pi-pencil"></Button>

        </div>


        <div class="imagen" style="overflow: hidden;">

            <img  v-show="loaded" @load="see" :class="loaded? 'cargado': 'sin-cargar'" class=""
                style="width: 100%;aspect-ratio: 1 / 1; background-color: rgb(255, 255, 255);object-fit: contain; border-radius: 0.2rem;"
                :src="`${URI}/read-photo-product/${props.product.img_identifier}/600`" alt=""
                >

                


        </div>

        <div class="texto" style="">
            <div style="display: flex;gap: 1rem; height: 100%; flex-direction: column;justify-content: space-between;">

                <div style="display: grid;grid-template-columns: auto auto; width: 100%; justify-content: space-between; align-items: center;">
                    <span>
                        <b style="text-transform: uppercase;">
                            {{ props.product.product_name }}
                        </b>
                    </span>
                    <Button class="elipsis" text style="color: black;" icon="pi pi-ellipsis-v p-0 text-xl" />




                </div>

                <span>
                    {{ truncatedDescription?.toLocaleLowerCase() }}
                </span>

                <div style="display: flex;justify-content: space-between; align-items: c;">

                    <!-- {{ props.pr }} -->

                    <!-- <Button icon="pi pi-heart text-2xl" text rounded style="color: red;"/> -->
                    <InputSwitch v-model="props.product.status"
                        @update:modelValue="updateProductStatus(props.product.status)" />
                    <div style="display: flex; align-items: center;gap: 1rem;">
                        <span class="text-xl"><b>{{ formatoPesosColombianos(props.product.price) }}</b> </span>

                    </div>

                </div>

            </div>


        </div>


        <!-- <Button  style="position: absolute; right: -1rem; top:-1rem;" @click="addToCart(props.product)" severity="danger"  rounded icon="pi pi-plus text-xl fw-100"/> -->


    </div>
</template>
    
<script setup>

import { formatoPesosColombianos } from '../service/formatoPesos'
import { computed,ref } from 'vue';
import { productService } from '../service/ProductService';

import { useProductStore } from '../store/productStore';
import { URI } from '../service/conection';

const store = useProductStore()

const props = defineProps({
    product: {
        type: Object,
        default: {}
    },


});

const loaded = ref(false)

const see = () => {
    loaded.value = true
}


const prepareToEdit = (product) => {
    store.visibles.dialogEditProduct = true
    store.currentProductToEdit = product
}


const prepareToDelete = (product) => {
    store.visibles.dialogDeleteProduct = true
    store.currentProductToDelete = product
}


const updateProductStatus = async (newStatus) => {
    try {
        const response = await productService.updateProductInstanceStatus(props.product.id, newStatus);
        if (response) {
            console.log('Status updated:', response);
        }
    } catch (error) {
        console.error('Failed to update status:', error);
    }
};

const truncatedDescription = computed(() => {
    const description = props.product.product_description;
    return description.substring(0, 100) + '...'
});

const imagenError = (Event) => {
    Event.target.src = 'https://salchimonster.com/images/logo.png';
}





</script>
    


    
    
<style scoped>
.container {
    display: grid;
    gap: 1rem;
    /* Spacing between grid items */
    grid-template-columns: 1fr;

    margin: 0;
    padding: 1rem;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    border-radius: 0.5rem 0.5rem 1.4rem 0.6rem;
}

.elipsis{
        display: none;
    }
/* Responsive adjustments */
@media (max-width: 576px) {
    .container {
        grid-template-columns: 1fr 2fr;
        width: 100%;
        
        /* 1:2 ratio for image to details */
        /* Stack elements vertically on smaller screens */
    }
    .elipsis{
        display: inline;
    }

    .imagen,
    .texto {
        width: 100%;
        /* Ensure full width on smaller screens */
    }
}

.imagen img {
    width: 100%;
    height: auto;
    /* Maintain aspect ratio */
    background-color: #fff;
    object-fit: contain;
    border-radius: 0.2rem;
}

.texto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.rating {
    width: 1rem;
    /* Adjust based on your design */
}


@keyframes fadeIn {
    from {
       opacity: 0;
        transform: translateY(-100px);
        /* transform: scale(.5); */
        /* background-color: rgb(255, 255, 0); */
        /* filter: blur(1px); */
    }
    to {
        opacity: 1;
        /* filter: blur(1px); */

    }
}

.cargado {
    opacity: 0; /* Inicialmente invisible */
    animation: fadeIn .1s ease-out forwards; /* Duración de 1 segundo, 'ease-out' para desacelerar hacia el final, y 'forwards' para mantener el estado final visible */
}

/* Add additional styles for buttons, text, etc., as needed */
</style>
    
    
    