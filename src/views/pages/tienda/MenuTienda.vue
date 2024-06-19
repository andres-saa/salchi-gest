<template>



<barraCategorias class="" />

<div style="max-width: 1024px;; border-radius: 1rem;"  class="m-auto m-0 p-0 mt-8">

    <div class="mx-3 my-4 mx-auto px-4" style="min-width: max-content;max-width: 1024px; display: flex; align-items: center;">
        <span class="mr-4" > <b>SEDE</b>  </span>

        <Dropdown v-model="siteStore.site" :options="sites.filter(site => site.show_on_web)" optionLabel="site_name" class="" style="width: 100%;"/>

   
       
    </div>

    
    
    <router-view class=""></router-view>
</div>
<dialogEditProduct class="m-3"></dialogEditProduct>
<dialogDeleteProduct></dialogDeleteProduct>
</template>

<script setup>



import { onMounted, ref } from 'vue';
import BarraCategorias from '../../../components/BarraCategorias.vue';
import { siteService } from '../../../service/siteService';
import dialogEditProduct from '../dialogEditProduct.vue';
import { useSitesStore } from '../../../store/site';
import dialogDeleteProduct from '../dialogDeleteProduct.vue';

const siteStore = useSitesStore()

const sites = ref([])



onMounted(async() => {
    sites.value = await siteService.getSites()

        // siteStore.site = sites.value.filter(site => site.site_id = 1)[0]
    
})

</script>