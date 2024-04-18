<template>


<div style="max-width: 1024px; border-radius: 1rem;"  class="m-auto">

    <div class="mx-3">
        <span class="mr-4" > <b>SEDE</b>  </span>

<Dropdown v-model="siteStore.site" :options="sites.filter(site => site.show_on_web)" optionLabel="site_name" class="mb-4" style="width: 100%; max-width: 20rem;"/>

   
       
    </div>

    <barraCategorias class="mx-4" />
    
    <router-view></router-view>
</div>
<dialogEditProduct></dialogEditProduct>
</template>

<script setup>



import { onMounted, ref } from 'vue';
import BarraCategorias from '../../../components/BarraCategorias.vue';
import { siteService } from '../../../service/siteService';
import dialogEditProduct from '../dialogEditProduct.vue';
import { useSitesStore } from '../../../store/site';

const siteStore = useSitesStore()

const sites = ref([])



onMounted(async() => {
    sites.value = await siteService.getSites()
})

</script>