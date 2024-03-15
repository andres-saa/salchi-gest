```<template>



    <div class="col-12 mx-auto md:shadow-3 my-4 md:p-3" style="max-width: 600px; border-radius: 1rem;">

        <p class="p-3 text-2xl text-center" style="font-weight: bold;"> <i class="fa-solid fa-folder-open"></i> Directorio</p>
        
        <div class="p-0" style="overflow: hidden;">
            <Dropdown v-model="store.currentSite" :options="sites" optionLabel="site_name" style="max-width: 30rem;"
            class="col-12 p-0 md:col-4 md:m-3 " placeholder="Sede">
        </Dropdown>

        <Divider> Informacion</Divider>
        <!-- {{ selectedSite }} -->

        <div class="grid p-0 m-0" style="">

            <div style="overflow-x: auto;" class="py-3 md:py-0">
                
                <div v-for="(item, index) in infoItems" :key="index" class="my-0 p-3 py-0"

                style="display: flex; align-items: center; gap: 1rem;">
                <div class="p-0">
                    <p style="font-weight: bold; min-width: 10rem;">{{ item.label }}:</p>
                </div>
                <!-- <Button size="large" severity="help" text  class="m-1 p-0"
                    style="min-width: max-content;"> <i class="fa-solid fa-pen-to-square "></i>
                </Button> -->
               

                <div v-if="!item.isLink" class="" style="min-width: max-content;">
                    {{ store.currentSite[item.value] }}
                </div>

                <!-- <i class="mr-2" :class="PrimeIcons.PENCIL"></i> -->

                <a v-else class="" style="min-width: max-content;" :href="store.currentSite[item.value]">
                    {{ store.currentSite[item.value] }}
                </a>
           
            
            
            </div>

            
            </div>
            <div class="col-12 p-0 m-0" style="display: flex;justify-content: start;align-items: center;">
                <Button  style="min-width: max-content;" severity="help" class="m-3 py-2" size="small"> <i class="fa-solid fa-pen-to-square mr-2"></i> Editar inform</Button>
                <div style="background-color: #A855F7; height: 0.3rem;border-radius: 0 1rem 1rem 0; width: 100%;">

</div>
            </div>


           

            <Divider> Seguridad </Divider>

            <div v-for="(item, index) in securityItems" :key="index" class="my-0 col-12 py-0"
                style="display: flex; align-items: center; gap: 1rem;">
                <div class="">
                    <p style="font-weight: bold; min-width: 10rem;">{{ item.label }}:</p>
                </div>
                <!-- <Button  size="large" severity="danger" text  class="m-1 p-0"
                    style="min-width: max-content;"> <i class="fa-solid fa-pen-to-square "></i>
                </Button> -->
                <div class="">

                    <!-- {{ store.currentSite[item.value] }} -->
                    ************
                </div>
            </div>
            <div class="col-12 p-0 m-0" style="display: flex; justify-content: start;align-items: center;">
                <Button style="min-width: max-content;" severity="danger" class="m-3 py-2" size="small" > <i class="fa-solid fa-pen-to-square mr-2"></i> Editar claves</Button>
                <div style="background-color: #ef4444; height: 0.3rem;border-radius: 0 1rem 1rem 0; width: 100%;">

                </div>

            </div>
            

            <Divider> Horario</Divider>

            <div class="col-12 md:col-6 p-0">
                <div class="col-12">
                    <img key="store.currentSite.site_id"
                        style="width: 100%; border-radius: 1rem;  object-fit: cover;"
                        :src="`${URI}/read-product-image/600/site-${store.currentSite.site_id}`" alt=""
                        v-if="store.currentSite.site_id">

                </div>


            </div>

            <!-- <iframe src="https://maps.app.goo.gl/6kCLNgDfz84224ZV9" frameborder="0"></iframe> -->

            <!-- <Divider vertical></Divider> -->
            <div class="col-12 md:col-6 px-3">
                <horarios></horarios>

            </div>

        </div>
        </div>

       

    </div>





</template>


<script setup>
import { siteService } from '@/service/siteService.js'
import { onMounted, ref, watch } from 'vue'
import { URI } from '../../service/conection';
import horarios from './horarios.vue';
const sites = ref()
import { useDirectoryStore } from '../../store/directorio';
import { useReportesStore } from '../../store/reportes';
import { PrimeIcons } from 'primevue/api';
const store2 = useReportesStore()






const infoItems = [
    { label: 'Nombre', value: 'site_name' },
    { label: 'Direccion', value: 'site_address' },
    { label: 'Telefono', value: 'site_phone' },
    { label: 'Link de WhatsApp', value: 'wsp_link', isLink: true },
    { label: 'Link de Maps', value: 'maps', isLink: true }
]
const securityItems = [
    { label: 'Clave cocina', value: 'kitchen_key' },
    { label: 'Clave rappi', value: 'rappi_key' },
    { label: 'Clave pirpos', value: 'pirpos_key' },
    { label: 'Clave Didi', value: 'pirpos_key' }
]

const store = useDirectoryStore()
const selectedSite = ref(store.currentSite)


onMounted(async () => {
    await siteService.getSites().then(data => sites.value = data)
    store.setSite(sites.value[0])
})


watch(() => store.currentSite, (newVal) => {
    store2.setLoading(true, `cargando información de ${newVal.site_name}`);
    store2.setLoading(false);
    // Establece un temporizador para cambiar el estado de carga a false después de 1 segundo
    // 1000 milisegundos = 1 segundo
});


</script>


<style scoped>
/* Define las transiciones para la imagen */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active en <2.1.8 */
    {
    opacity: 0;
}

a {
    text-decoration: none;
    color: #A855F7;
    font-weight: 500;
}
</style>
