<template>
    <div  class="m-0 m-auto">
        <!-- {{ equipment }} -->
        
<!-- {{ sites }} -->

        <ConfirmDialog style="max-width: 30rem;" />

        <div style="display: flex;justify-content: end">
            <Button label="Agregar Equipo" severity="success" @click="showDialog = true" icon="pi pi-plus" class=" mb-4"></Button>
        </div>
        <Dialog style="width: 30rem;" v-model:visible="showDialog" header="Agregar 
        
        nuevo equipo" :modal="true">

        <Input style="display: none;" ref="fileInput" type="file" @change="cargarFoto" accept="image/*" />

        
<div v-if="urlFoto">
    <!-- <h5>Previsualización de la Foto</h5> -->
    <img :src="urlFoto" alt="Previsualización del Producto" style="max-width: 100%;aspect-ratio: 1 / 1; object-fit: cover; height: auto;" />
</div>

<div class=" col-12 p-0" style="display:  flex; justify-content: end">
    <Button class="my-3" @click="fileInput.click()" icon="fa-solid fa-camera"></Button>

</div>



    <form @submit.prevent="addEquipment">
        <InputText class="col-12 my-2" v-model="newEquipment.name" placeholder="Nombre del equipo" required />
        <InputText class="col-12 my-2" v-model="newEquipment.brand" placeholder="Marca" required />

        <p class="text-center"> <b>SEDES</b> </p>
        <div class="my-2">
            <div  v-for="site in sites" :key="site.site_id" class="flex align-items-center my-1">
                <Checkbox v-model="newEquipment.site_ids" :value="site.site_id"></Checkbox>
                <label class="ml-2">{{ site.site_name }}</label>
            </div>
        </div>

        <Button type="submit" label="Guardar" class="mt-2" />
    </form>
</Dialog>





        <div class="col-12 p-0 m-0">

            <div class="grid p-0 m-0">

                <div style=";position: relative;" class="col-6 md:p-3 md:col-4 lg:col-3 xl:col-2 x p-2 " v-for="equipo in equipment">
                
                    <div class=" shadow-3 p-2" style="position: relative;height: 100%;overflow: hidden;border-radius: 0.3rem; ">
                        <img style="width: 100%; aspect-ratio: 4 / 4;object-fit: cover;border-radius: 0.3rem;" :src="`${URI}/read-product-image/300/${equipo.name}-${equipo.brand}`" alt="">
                        <p class="py-0 my-0 text-sm"><b>Nombre:</b> </p>
                        <p>{{ equipo.name }}</p>

                        <p class="py-0 my-0"><b>Marca:</b> </p>
                        <p>{{ equipo.brand }} </p>

                        
                    </div>
                    <Button  size="small" @click="confirmDelete(equipo.equipment_id,$event)" class="shadow-4 p-3" rounded severity="danger" icon="pi pi-trash p-0 shadow-3 text-xl" style="position: absolute;width: 1rem; height: 1rem; top: 0rem; right: 0rem;"></Button>

                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { maintenanceStore } from "../../../store/maintenance";
import { equipmentService, maintenanceService } from '../../../service/maintenance'
import { onMounted, ref, watch } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useReportesStore } from "../../../store/reportes";
import { siteService } from '../../../service/siteService';
import { URI } from "../../../service/conection";

const equipment = ref([]);
const newEquipment = ref({ name: '', brand: '', site_ids: [] });
const showDialog = ref(false);
const confirm = useConfirm();
const loading = useReportesStore();
const store = maintenanceStore();
const sites = ref([]);
const currentSite = maintenanceStore()
const fileInput = ref(null)


const urlFoto = ref(null);
const file = ref(null);

// Función para cargar y previsualizar la foto
const cargarFoto = (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
        urlFoto.value = URL.createObjectURL(archivo);
        file.value = archivo
    }
};



onMounted(async() => {
    sites.value = await siteService.getSites();
    const temp_equipment = await equipmentService.getEquipmentBySite(store.currentSite.site_id)
    if(temp_equipment){
        equipment.value = temp_equipment

    }


})

watch(() => store.currentSite , async() => {
    const temp_equipment = await equipmentService.getEquipmentBySite(store.currentSite.site_id)
    if(temp_equipment){
        equipment.value = temp_equipment

    }

})

const confirmDelete = (equipmentId) => {
    confirm.require({
        message: '¿Estás seguro de que quieres eliminar este equipo? Los mantenimientos realizados a este equipo también serán eliminados.',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
            loading.setLoading(true,'eliminando equipo')
            await equipmentService.deleteEquipment(equipmentId);
            equipment.value = await equipmentService.getEquipmentBySite(store.currentSite.site_id)
            loading.setLoading(false,'eliminando equipo')
 // Actualiza la lista de equipos
        },
        reject: () => {
            loading.setLoading(false,'eliminando equipo')

        }
    });
};


const addEquipment = async () => {

    if (newEquipment.value.site_ids.length === 0) {
        alert("Por favor, selecciona al menos una sede.");
        return;
    }
    if (!file.value){
        alert("Por favor, selecciona la foto del equipo");
        return;
    }

    showDialog.value = false;
    loading.setLoading(true, 'Agregando equipo');

    await equipmentService.createEquipment(newEquipment.value);
    await equipmentService.uploadImage(`${newEquipment.value.name}-${newEquipment.value.brand}`, file.value)
    // equipment.value = await equipmentService.getAllEquipment();
    const temp_equipment = await equipmentService.getEquipmentBySite(store.currentSite.site_id)
    if(temp_equipment){
        equipment.value = temp_equipment
    }

    loading.setLoading(false, 'Agregando equipo');
    newEquipment.value = { name: '', brand: '', site_ids: [] };
    location.reload()
};
</script>