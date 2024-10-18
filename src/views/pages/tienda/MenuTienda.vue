<template>





<div style="border-radius: 1rem;position:relative"  class="mx-auto mx-0 p-0 mt-6 mb-8">
    <barraCategorias class="m-0" />
    <div  class="mx-3 my-4 mx-auto px-4" style="min-width: max-content;max-width: 1024px; display: flex; align-items: center;">
        <span class="mr-4" > <b>SEDE</b>  </span>
        <Dropdown v-model="siteStore.site" :options="sites.filter(site => site.show_on_web)" optionLabel="site_name" class="" style="width: 100%;"/> 
          
        <Button @click="open_to_add" class="ml-3" style="min-width: max-content;" severity="help" label="Nuevo producto"></Button>

    </div>
    <router-view class=""></router-view>
    <dialogEditProduct class="m-3"></dialogEditProduct>
    <dialogDeleteProduct></dialogDeleteProduct> 
    <dialogAddProduct></dialogAddProduct>
    


    <div style="position: fixed;overflow: hidden;background-color: white; border-radius: 0 1rem 1rem 0; left: 0;top:12rem;display: flex;flex-direction: column; ">

        <div v-for="(i, index) in [{name:'S',id:1,imagen:'https://www.salchimonster.com/images/logo.png'},{name:'B',id:2,imagen:'https://burgermonsterr.com/images/LOGO.png'},{name:'P',id:4,imagen:'https://papasmonster.com/images/LOGO.png'}]" style="display: flex;align-items: center;width: 2rem; flex-direction: column;">
            <Button size="small" text :label="i.name" class="text-white" @click="siteStore.restaurant = i.id">
                <img style="width: 2rem;" :src="i.imagen" alt="">
            </Button>
            <span   v-if="index != 2" style="border-top: .1rem solid white;"></span>
        </div>


    </div>
</div>

</template>

<script setup>



import { onMounted, ref } from 'vue';
import BarraCategorias from '../../../components/BarraCategorias.vue';
import { siteService } from '../../../service/siteService';
import dialogEditProduct from '../dialogEditProduct.vue';
import { useSitesStore } from '../../../store/site';
import dialogAddProduct from '../dialogAddProduct.vue'
import dialogDeleteProduct from '../dialogDeleteProduct.vue';
import { watch } from 'vue';
import { useProductStore } from '@/store/productStore';
const store = useProductStore();


const siteStore = useSitesStore()

const sites = ref([])


const open_to_add = () => {
    // alert(store.visibles.dialogAddProduct)
    store.visibles.dialogAddProduct = true
}

const update = async() =>{
    sites.value = await siteService.getSites()

}


onMounted(async() => {
   update()
 
})



</script>