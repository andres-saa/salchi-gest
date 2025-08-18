<template>
  <div class="finalizar-compra-container">
    <!-- Dialog de dirección SOLO para sedes 33,35,36 -->
    <Dialog
      v-if="isCalcSite"
      :header="t('site_selector')"
      modal
      v-model:visible="see_sites"
      style="width: 100%;max-width: 30rem;margin: .5rem ;"
    >
      <template v-if="!user.user.order_type || user.user.order_type.id !== 2">
        <div style="display: flex;flex-direction: column;gap: 1rem;">
          <div class="form-group">
            <!-- Autocomplete de direcciones -->
            <AutoComplete
              size="large"
              style="min-width: 100%;"
              v-model="user.user.site"
              :suggestions="dir_options"
              optionLabel="description"
              :minLength="1"
              :delay="250"
              forceSelection
              :placeholder="t('address_placeholder')"
              @complete="search"

              class="w-full"
            >
              <template #item="{ item }">
                <div class="flex flex-col">
                  <span>{{ item.description }}</span>
                </div>
              </template>
            </AutoComplete>
          </div>

          <Tag
            v-if="user.user.site?.nearest"
            style="width: max-content;"
            :severity="user.user.site?.nearest?.in_coverage ? 'success' : 'danger'"
          >
            {{ user.user.site?.nearest?.in_coverage ? t('in_coverage') : t('not_in_coverage') }}
          </Tag>

          <span v-if="user.user.site?.nearest">
            <strong>{{ t('distance') }}: </strong>
            {{ user.user.site?.nearest?.distance_miles }} {{ t('miles') }}
          </span>

          <span v-if="user.user.site?.delivery_cost_usd">
            <strong>{{ t('ships_from_site') }}: </strong>
            {{ user.user.site?.nearest?.site?.site_name }}
          </span>

          <Tag v-if="user.user.site?.delivery_cost_usd" severity="success">
            <span>
              <strong style="font-size: 1.5rem;">{{ t('delivery_price') }}: ${{ user.user.site?.delivery_cost_usd }}</strong>
            </span>
          </Tag>
        </div>
      </template>

      <template #footer>
        <div style="display: flex;gap: 1rem;">
          <Button
            @click="() => {see_sites = false }"
            :label="t('cancel')"
            severity="danger"
            text
          />
          <Button
            style="background-color: black;border: none;color: white;"
            :label="t('save')"
            @click="saveCalculatedAddress"
            :disabled="!user.user.site?.nearest?.in_coverage"
          />
        </div>
      </template>
    </Dialog>

    <!-- Título -->
    <p class="title">FINALIZAR COMPRA</p>

    <div style="margin: auto; max-width: 800px;">
      <div class="title" style="margin: 3rem .5rem">
        <Tag severity="success" class="advertice">
          El tiempo promedio de entrega es de 60 a 75 minutos, por favor téngalo en cuenta antes de ordenar
        </Tag>
      </div>
    </div>

    <div class="form-grid">
      <div class="form-column">
        <span>NOMBRE</span>
        <div class="form-group">
          <InputText id="username" placeholder="NOMBRE" v-model="user.user.name" />
        </div>

        <!-- Campo Ubicación SOLO para sedes NO calculadas (abre SiteDialog) -->
        <div v-if="!isCalcSite">
          <span>Ubicación</span>
          <div class="form-group">
            <InputText
              @click="siteStore.setVisible('currentSite', true)"
              :modelValue="siteStore.location.neigborhood.name"
              id="neighborhood"
              placeholder="Ubicación"
              readonly
            />
          </div>
        </div>

        <span>Método Entrega</span>
        <div class="form-group">
          <Dropdown
            style="width: 100%;"
            v-model="user.user.order_type"
            id="metodo_de_entrega"
            placeholder="Método de entrega"
            :options="computedOrderTypes.filter(t => [1,2,3].includes(t.id))"
            optionLabel="name"
          />
        </div>

        <!-- Dirección: calculada (sede 33/35/36) cuando no es recoger -->
        <template v-if="isCalcSite && (!user.user.order_type || user.user.order_type?.id !== 2)">
          <span>Dirección</span>
          <InputText
            @click="() => see_sites = true"
            :value="user.user.address"
            readonly
          />
        </template>

        <!-- Dirección: manual (otras sedes) cuando no es recoger -->
        <template v-else-if="!isCalcSite && (!user.user.order_type || user.user.order_type?.id !== 2)">
          <span>Dirección</span>
          <div class="form-group">
            <InputText v-model="user.user.address" id="address" placeholder="DIRECCIÓN" />
          </div>
        </template>

        <span>Correo Electrónico</span>
        <div class="form-group">
          <InputText v-model="user.user.email" id="email" placeholder="Correo Electrónico" />
        </div>

        <span>Teléfono</span>
        <div class="form-group">
          <InputText
            v-model="user.user.phone_number"
            id="phone_number"
            mask="999 999 9999"
            placeholder="TELÉFONO"
          />
        </div>

        <!-- Placa para recoger (id 2) solo en sede 33 -->
        <template v-if="user.user.order_type && user.user.order_type?.id === 2 && siteStore.location?.site?.site_id === 33">
          <span>Placa de tu vehículo</span>
          <div class="form-group">
            <InputText v-model="user.user.placa" id="placa" placeholder="Placa de tu vehículo" />
          </div>
        </template>

        <span style="display: flex; align-items: center; gap: 1rem;">
          <Checkbox v-model="isCortesia" binary/>
          Es una cortesía?
        </span>

        <div v-if="isCortesia" class="form-group">
          <Dropdown
            style="width: 100%;"
            v-model="user.user.payment_method_option"
            id="payment_method"
            placeholder="Porcentaje de cortesía"
            :options="cortesias"
          >
            <template #option="slotProps">
              {{ slotProps.option.name }}
              <Tag>{{ slotProps.option.percentage }}</Tag>
            </template>
            <template #value="slotProps">
              <span v-if="slotProps.value">
                {{ slotProps.value.name }}
                <Tag>{{ slotProps.value.percentage }}</Tag>
              </span>
              <span v-else>
                Selecciona un porcentaje
              </span>
            </template>
          </Dropdown>
        </div>

        <span>Método de pago</span>
        <div class="form-group">
          <Dropdown
            style="width: 100%;"
            v-model="user.user.payment_method_option"
            id="payment_method"
            placeholder="MÉTODO DE PAGO"
            :options="paymen_rules?.[siteStore.location?.site?.site_id]"
            optionLabel="name"
          />
        </div>

        <!-- Domicilio: visible si NO es recoger -->
        <span v-if="user.user?.order_type?.id != 2">Domicilio</span>
        <div class="form-group">
          <InputNumber
            v-if="user.user?.order_type?.id != 2"
            style="width: 100%;"
            prefix="$"
            min="0"
            :maxFractionDigits="2"
            v-model="siteStore.location.neigborhood.delivery_price"
            id="delivery_price"
            :readonly="isCalcSite"
            :placeholder="isCalcSite ? 'Calculado automáticamente' : 'Defínelo en el diálogo de Ubicación'"
          />
        </div>

        <span>Notas</span>
        <Textarea
          v-model="store.cart.order_notes"
          class="order-notes"
          placeholder="Notas adicionales"
        />

        <!-- (duplicado en tu código original; lo dejo igual por compatibilidad) -->
        <template>
          <Textarea
            v-model="store.cart.order_notes"
            class="order-notes"
            placeholder="Notas"
          />
        </template>
      </div>

      <resumen class="resumen-column"></resumen>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, reactive } from 'vue';
import resumen from './resumen.vue';
import { usecartStore } from './store/shoping_cart';
import { URI } from './service/conection';
import { fetchService } from '../../../service/utils/fetchService';
import { useSitesStore } from './store/site';
import { useUserStore } from './store/user';

const see_sites = ref(false);
const paymen_rules = ref({});

const store = usecartStore();
const siteStore = useSitesStore();
const user = useUserStore();

const order_types = ref([]);
const payment_method_options = ref([]);
const isCortesia = ref(false);
const cortesias = ref([]); // (si ya la tienes en otro lado, ignora esta línea)

// --- i18n mini ---
const lang = computed(() => {
  const v = (user?.lang?.name || 'es').toString().toLowerCase();
  return v === 'en' ? 'en' : 'es';
});
const DICT = {
  es: {
    site_selector: 'Seleccionar sede',
    address_placeholder: 'Escribe tu dirección',
    in_coverage: 'En cobertura',
    not_in_coverage: 'Fuera de cobertura',
    distance: 'Distancia',
    miles: 'Millas',
    ships_from_site: 'Sale de la sede',
    delivery_price: 'Costo de envío',
    cancel: 'Cancelar',
    save: 'Guardar',
  },
  en: {
    site_selector: 'Site selector',
    address_placeholder: 'Type your address',
    in_coverage: 'In coverage',
    not_in_coverage: 'Out of coverage',
    distance: 'Distance',
    miles: 'Miles',
    ships_from: 'Ships from',
    ships_from_site: 'Ships from',
    delivery_price: 'Delivery price',
    cancel: 'Cancel',
    save: 'Save',
  }
};
const t = (key) => (DICT[lang.value] && DICT[lang.value][key]) || (DICT.es[key] || key);

// --- GEO API base ---
const GEO_API_BASE =
  import.meta.env.VITE_GEO_API_BASE ||
  import.meta.env.VITE_PLACES_API_URI ||
  'https://api.stripe.salchimonster.com';

// Estado del autocomplete
const dir_options = ref([]);
const sessionToken = ref(null);
const autocompleteError = ref(null);

const newSession = () => {
  sessionToken.value =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`;
};
const endSession = () => { sessionToken.value = null; };

const regionPref = computed(() => siteStore.location?.site?.country_code ?? 'co');
const maxSuggestions = 5;

// Cargar catálogos
onMounted(async () => {
  user.user.order_type = {};
  payment_method_options.value = await fetchService.get(`${URI}/payment_methods`);
  order_types.value = await fetchService.get(`${URI}/get_all_order_types`);
  paymen_rules.value = await fetchService.get(`${URI}/site-payments-call-center`);
});

// ¿Sede calcula domicilio?
const isCalcSite = computed(() => [33, 35, 36].includes(siteStore.location?.site?.site_id ?? -1));
const currentSiteId = computed(() => siteStore.location?.site?.site_id ?? -1);

// --------------------
// Cache con persistencia local
// --------------------
const STORAGE_KEY = 'salchi:deliveryCache:v1';
const deliveryCache = reactive({
  manual: {}, // { [site_id]: number }
  calc: {}    // { [site_id]: number }
});

function loadCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data?.manual && typeof data.manual === 'object') Object.assign(deliveryCache.manual, data.manual);
    if (data?.calc && typeof data.calc === 'object') Object.assign(deliveryCache.calc, data.calc);
  } catch (e) {
    console.warn('No se pudo cargar deliveryCache:', e);
  }
}
function saveCache() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ manual: deliveryCache.manual, calc: deliveryCache.calc }));
  } catch (e) {
    console.warn('No se pudo guardar deliveryCache:', e);
  }
}
loadCache();
watch(deliveryCache, saveCache, { deep: true });

// Guarda en cache cuando el usuario define manualmente (solo sedes manuales y no recoger)
watch(
  () => siteStore.location?.neigborhood?.delivery_price,
  (val) => {
    if (!isCalcSite.value && (user.user.order_type?.id ?? 0) !== 2 && val != null) {
      deliveryCache.manual[currentSiteId.value] = Number(val);
    }
  }
);

// Guarda en cache cuando cambia el calculado (y aplica si no es recoger)
watch(
  () => user.user.site?.delivery_cost_usd,
  (val) => {
    if (isCalcSite.value && val != null) {
      deliveryCache.calc[currentSiteId.value] = Number(val);
      if ((user.user.order_type?.id ?? 0) !== 2) {
        siteStore.location.neigborhood.delivery_price = Number(val);
      }
    }
  }
);

// Reglas al cambiar método de entrega / sede / modo (calc vs manual)
watch(
  [() => user.user.order_type?.id, isCalcSite, currentSiteId],
  ([typeId, isCalc]) => {
    const sid = currentSiteId.value;

    // Pasar a recoger => domicilio 0
    if (typeId === 2) {
      siteStore.location.neigborhood.delivery_price = 0;
      return;
    }

    // Envío: aplica según modo
    if (isCalc) {
      const v = user.user.site?.delivery_cost_usd ?? deliveryCache.calc[sid] ?? 0;
      siteStore.location.neigborhood.delivery_price = Number(v);
    } else {
      const v = deliveryCache.manual[sid]
        ?? siteStore.location?.neigborhood?.delivery_price
        ?? 0;
      siteStore.location.neigborhood.delivery_price = Number(v);
    }
  },
  { immediate: true }
);

// Al cambiar sede: limpiar/ajustar estado relevante
watch(() => siteStore.location?.site?.site_id, () => {
  user.user.order_type = null;
  user.user.placa = null;
  if (!isCalcSite.value) {
    // modo manual
    see_sites.value = false;
    user.user.site = null;
  } else {
    // modo calculado
    user.user.address = '';
  }
});

// Filtro de tipos de orden por sede
const computedOrderTypes = computed(() => {
  const sid = siteStore.location?.site?.site_id;
  if (sid === 33) {
    // En 33 no permites opción id 3 (según tu regla original)
    return order_types.value.filter(option => option?.id !== 3);
  } else {
    // En otras sedes no permites opción id 1
    return order_types.value.filter(option => option?.id !== 1);
  }
});

// Buscar sugerencias
const search = async (event) => {
  const query = (event?.query ?? '').trim();
  if (!query) {
    dir_options.value = [];
    autocompleteError.value = null;
    return;
  }
  if (!sessionToken.value) newSession();

  const params = new URLSearchParams({
    input: query,
    session_token: sessionToken.value,
    language: lang.value,
    region: regionPref.value || '',
    limit: String(maxSuggestions),
  });

  try {
    const url = `${GEO_API_BASE}/places/autocomplete?${params.toString()}`;
    const res = await fetchService.get(url, false);

    const predictions = Array.isArray(res)
      ? res
      : Array.isArray(res?.predictions)
        ? res.predictions
        : [];

    dir_options.value = predictions.filter(p => p?.description && p?.place_id);
    autocompleteError.value = (res && !Array.isArray(res) && res.error) ? res.error : null;
  } catch (err) {
    console.error('Autocomplete error:', err);
    dir_options.value = [];
    autocompleteError.value = null;
  }
};

// Selección de dirección -> details + cálculo
const onSelectAddress = async (evt) => {
  try {
    const value = evt?.value;
    if (!value?.place_id) return;

    const params = new URLSearchParams({
      place_id: value.place_id,
      session_token: sessionToken.value || '',
      language: lang.value,
      region: regionPref.value || '',
    });

    const url = `${GEO_API_BASE}/places/details?${params.toString()}`;
    const res = await fetchService.get(url, false);

    const details = res?.result || res || {};
    const nearest = res?.nearest || details?.nearest || null;

    const deliveryCost =
      res?.delivery_cost_usd ??
      details?.delivery_cost_usd ??
      nearest?.delivery_cost_usd ??
      null;

    user.user.site = {
      ...details,
      nearest,
      delivery_cost_usd: deliveryCost,
      description: value.description,
      place_id: value.place_id,
    };

    // Aplicar costo si no es recoger
    if (deliveryCost != null && (!user.user.order_type || user.user.order_type?.id !== 2)) {
      siteStore.location.neigborhood.delivery_price = Number(deliveryCost);
    }

    // Guardar dirección visible en el input fuera del diálogo
    user.user.address = value.description;
  } catch (err) {
    console.error('Details error:', err);
  } finally {
    endSession();
  }
};

// Guardar desde el diálogo (modo calculado)
const saveCalculatedAddress = () => {
  see_sites.value = false;

  // ⛔️ IMPORTANTE: NO CAMBIAR LA SEDE ACTUAL AQUÍ
  // Antes: siteStore.location.site = user.user.site?.nearest?.site;  <-- causaba que isCalcSite pasara a false y se limpiara el estado.
  // Si necesitas la sede de despacho, úsala desde user.user.site?.nearest?.site cuando envíes el pedido.

  const cost = user.user.site?.delivery_cost_usd ?? 0;
  siteStore.location.neigborhood.delivery_price = Number(cost);

  // Asegura que la dirección quede en el campo principal
  user.user.address = user.user.site?.description || user.user.address || '';
};

// ⚠️ Evita watcher duplicado de delivery_cost_usd: ya lo manejamos arriba
</script>

<style scoped>
/* (Se mantiene tu estilo original) */
.finalizar-compra-container { padding: 0; margin-bottom: 2rem; }
.title { text-align: center; font-size: 2rem; margin: 2rem 0; font-weight: bold; }
.advertice { animation: anim_status_tag 2s infinite ease; color: black; padding: 1rem; font-weight: 400; font-size: 1.1rem; }
@keyframes anim_status_tag {
  20% { background-color: rgb(0, 255, 110); }
  50% { background-color: rgb(0, 255, 204); transform: scale(1.02); }
  80% { background-color: rgb(0, 255, 140); }
}
.form-grid { display: grid; max-width: 800px; margin: 0 auto; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }
.form-column { display: flex; flex-direction: column; gap: 1rem; padding: 0.25rem; }
.form-group { display: flex; align-items: center; gap: 0.5rem; width: 100%; }
.order-notes { height: 8rem; resize: none; width: 100%; }
*:focus { outline: none; border: none; }
input, textarea, select { width: 100%; box-sizing: border-box; }
::-webkit-scrollbar { width: 1rem; }
::-webkit-scrollbar-thumb { background-color: rgb(255, 0, 0); border-radius: 9px; border: 5px solid var(--primary-color); height: 10rem; width: 10rem; }
 :deep(.p-autocomplete) {
  width: 100%;
  flex: 1 1 auto;
}

:deep(.p-autocomplete .p-inputtext),
:deep(.p-autocomplete-input) {
  width: 100%;
}

</style>
