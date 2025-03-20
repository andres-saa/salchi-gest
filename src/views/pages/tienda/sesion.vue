<template>
    

<div>
    <p class="text-center text-3xl col-12" style="font-weight: bold;display: flex;gap: 1rem;align-items: center;">
      <div style="width: 100%;height: 3px; background-color: #ff6200">
    
      </div>

     <span class="text-3xl" style="width: min-content;"> <p style="min-width: max-content;">{{ route.params.menu_name }} DE</p>  {{ siteStore.site.site_name }}</span> 
    
        <div style="width: 100%;height: 3px; background-color:#ff6200">
    
    </div>
        
    </p>

    <div v-if="!noProducts" class="grid p-1 pb-8" style="max-width: 900px;margin: auto;" >
    
    
    
   
    
    
        <div v-for="(product, index) in products" :key="product.id" class=" col-12 md:col-4 lg:col-3 sm:col-6">
    
                <TarjetaMenu style="width: 100%;" :id="`tarjeta-${index}`"  :product="product"></TarjetaMenu>
        </div>
    
    
    
    
    </div>
    

    <p style="font-weight: bold;" class="text-4xl text-center my-8 p-0" v-else>
        Selecciona una sede y una categoria.
    </p>
    
</div>

   

    
</template>

<script setup>
import { onMounted,ref,watch,onUnmounted } from 'vue'
import {productService} from '../../../service/ProductService'
import TarjetaMenu from '@/components/TarjetaMenu.vue'
import { useRoute } from 'vue-router'
import { useSitesStore } from '../../../store/site'
import { nextTick } from 'vue'
import { siteService } from '../../../service/siteService'
import { loginStore } from '../../../store/user'


const userStore = loginStore()
const siteStore = useSitesStore()
const route = useRoute()
const products = ref([])
const noProducts = ref (false)


onMounted(() => {
    userStore.bar_color = 'var(--primary-color)'
})

onUnmounted(() => {
    userStore.bar_color = 'rgba(0, 1, 22, 1)'
})

onMounted( async () => {
    getProducts()
})


const getProducts = async()=> {
    let category_id = route.params.category_id
    let site_id = siteStore.site.site_id;
    products.value = await productService.getProductsByCategorySite(category_id,site_id)
}

watch(() => route.params.category_id, async () => {
   
        getProducts();
    
},{deep:true});


watch(() => siteStore.site, async () => {
    if(siteStore.site){
        getProducts();
    await nextTick(); 
    }
},{deep:true});

</script>