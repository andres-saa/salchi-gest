<template>
    <Dialog :closable="store.location?.site?.pe_site_id > 0"
            style="width: 30rem;max-width: 96%;"
            v-model:visible="store.visibles.currentSite"
            header="Selección de sede"
            :modal="true" class="dialog">
        <div class="dialog-content">
            <b class="dialog-title">
                <!-- {{ store.location }} -->
            </b>

            <div class="form-container">
                <!-- Selección de Ciudad -->
                <div class="form-group">
                    <div class="label-spinner">
                        <label for="city-dropdown" class="label">¿Para que ciudad va el pedido?</label>
                        <ProgressSpinner v-if="spinnersView.ciudad" class="spinner" strokeWidth="8" fill="var(--white)"
                            animationDuration=".5s" aria-label="Cargando ciudades" />
                    </div>
                    <Dropdown id="city-dropdown"
                              v-model="currenCity"
                              @click="resetNeighborhood"
                              :options="cities"
                              optionLabel="city_name"
                              placeholder="SELECCIONA UNA CIUDAD"
                              class="dropdown"
                              required />
                </div>

                <!-- ⛔️ Selector de barrio REMOVIDO visualmente -->
                <!-- (Se selecciona automáticamente el primero tras elegir la ciudad) -->

                <!-- ⛔️ Vista previa de sede OCULTA (cambio solo visual) -->
                <!--
                <div class="image-container" v-if="false">
                    ...
                </div>
                -->

                <div class="button-container">
                    <Button label="Guardar"
                            @click="setNeigborhood"
                            :disabled="!currenCity?.city_id || !currenNeigborhood?.name"
                            class="save-button" />
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { URI } from './service/conection'
import { sitesService } from './service/site/sitesService'
import { useSitesStore } from './store/site'
import { usecartStore } from './store/shoping_cart';
import router from '../../../router';

const store = useSitesStore();
const cart = usecartStore();

const spinnersView = ref({ ciudad: false, barrio: false });
const cities = ref([]);
const currentSite = ref({});
const currenCity = ref(null);

// 🔁 Barrio autoseleccionado internamente (sin UI)
const currenNeigborhood = ref({
    site: { name: 'default' },
});
const possibleNeigborhoods = ref([]);

const resetNeighborhood = () => {
    currenNeigborhood.value = { site: { site_name: 'default' } };
};

// 🔄 Al cambiar la ciudad: cargar barrios y autoseleccionar el primero
const changePossiblesNeigborhoods = async () => {
    if (currenCity.value && currenCity.value.city_id) {
        const neighborhoods = await getNeighborhoodsByCityId(currenCity.value.city_id);
        possibleNeigborhoods.value = neighborhoods;

        // ✅ Auto-pick del primer barrio disponible
        const first = neighborhoods?.[0] || null;
        currenNeigborhood.value = first || { site: { name: 'default' } };

        // Si hay site_id, obtener el site para guardarlo luego
        if (first?.site_id) {
            currentSite.value = await sitesService.getSiteById(first.site_id);
        } else {
            currentSite.value = {};
        }
    } else {
        possibleNeigborhoods.value = [];
        currenNeigborhood.value = { site: { name: 'default' } };
        currentSite.value = {};
    }
};

watch(currenCity, () => {
    changePossiblesNeigborhoods();
});

// (Se mantiene por si el flujo externo cambia el barrio programáticamente)
watch(
    currenNeigborhood,
    async () => {
        if (currenNeigborhood.value?.site_id) {
            currentSite.value = await sitesService.getSiteById(currenNeigborhood.value.site_id);
        } else {
            currentSite.value = {};
        }
    },
    { immediate: true }
);

const setNeigborhood = async () => {
    const newLocation = {
        site: currentSite.value,
        neigborhood: currenNeigborhood.value,
        city: currenCity.value,
    };

    store.setLocation(newLocation);

    // mantener lógica de precio si existe en el barrio
    if (currenNeigborhood.value?.delivery_price != null) {
        store.location.neigborhood.delivery_price = currenNeigborhood.value.delivery_price;
    }

    store.setVisible('currentSite', false);
    await router.push('/call-center-vender/')
    
    cart.cart = []
 
        location.reload();

}

const getCities = async () => {
    try {
        spinnersView.value.ciudad = true;
        const response = await fetch(`${URI}/cities`);
        if (response.ok) {
            const data = await response.json();
            cities.value = data;
        }
    } catch (error) {
        console.error('Error obteniendo ciudades:', error);
    } finally {
        spinnersView.value.ciudad = false;
    }
};

const getNeighborhoodsByCityId = async (city_Id) => {
    try {
        spinnersView.value.barrio = true;
        const response = await fetch(`${URI}/neighborhoods/by-city/${city_Id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        return [];
    } catch (error) {
        console.error('Error obteniendo barrios:', error);
        return [];
    } finally {
        spinnersView.value.barrio = false;
    }
};

onMounted(() => {
    getCities();
});
</script>

<style scoped>
/* (Se mantiene el resto de estilos) */
.dialog {
    background-color: white;
    position: relative;
    border-radius: 1rem;
    padding-top: 2rem;
}
.dialog-content { display: flex; flex-direction: column; align-items: center; }
.dialog-title { color: black; margin-bottom: 1rem; }
.form-container { width: 100%; display: flex; flex-direction: column; align-items: center; }
.form-group { width: 100%; margin-bottom: 1.5rem; }
.label-spinner { display: flex; align-items: center; gap: 1rem; margin-bottom:1rem; }
.label { color: black; min-width: max-content; }
.dropdown { width: 100%; }
.spinner { width: 20px; height: 20px; }
.button-container { width: 100%; }
.save-button {
    width: 100%;
    padding: 10px 20px;
    border: none;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.save-button:disabled { background-color: #555; cursor: not-allowed; }
.save-button:not(:disabled):hover { background-color: #333; }
@media (max-width: 500px) {
    .dialog { width: 90%; }
}
</style>
