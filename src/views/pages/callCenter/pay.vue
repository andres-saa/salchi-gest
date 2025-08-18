<template>
    <div class="finalizar-compra-container">




      <Dialog
      :header="t('site_selector')"
      modal
      v-model:visible="see_sites"
      style="width: 100%;max-width: 30rem;margin: .5rem ;"
    >
      <template v-if="!user.user.order_type || user.user.order_type.id !== 2 ">
        <div style="display: flex;flex-direction: column;gap: 1rem;">
          <div class="form-group">
            <!-- Autocomplete de direcciones -->
            <AutoComplete
          size="large"
          style="min-width: 100%;"
          v-model="user.user.site"
          :suggestions="dir_options"
          option-label="description"
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
            :severity="user.user.site?.nearest?.in_coverage? 'success' : 'danger'"
          >
            {{  user.user.site?.nearest?.in_coverage ? t('in_coverage') : t('not_in_coverage') }}
          </Tag>

          <span>
            <strong>{{ t('distance') }}: </strong>
            {{ user.user.site?.nearest?.distance_miles }} {{ t('miles') }}
          </span>

          <span v-if="user.user.site?.delivery_cost_usd">
            <strong>{{ t('ships_from_site') }}: </strong>
            {{ user.user.site?.nearest?.site?.site_name }}
          </span>

          <Tag v-if="user.user.site?.delivery_cost_usd" severity="success">
            <span>
              <strong>{{ t('delivery_price') }}: ${{ user.user.site?.delivery_cost_usd }}</strong>
            </span>
          </Tag>
        </div>
      </template>

      

      <template #footer>
        <div style="display: flex;gap: 1rem;">
          <Button
            @click="() => {see_sites = false ; user.user.site = {}}"
            :label="t('cancel')"
            severity="danger"
            text
          />
          <Button
            style="background-color: black;border: none;color: white;"
            :label="t('save')"
            @click="() => {see_sites = false ; siteStore.location.site = user.user.site?.nearest?.site ; siteStore.location.neigborhood.delivery_price = user.user.site?.delivery_cost_usd; user.user.address = user.user.site?.nearest?.site?.site_address }"
            :disabled="!user.user.site?.nearest?.in_coverage"
          />
        </div>
      </template>
    </Dialog>
























      <!-- <validate></validate> -->
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
          <span>Ubicacio'n</span>
          <div class="form-group">
            <InputText
              @click="siteStore.setVisible('currentSite', true)"
              :modelValue="siteStore.location.neigborhood.name"
              id="neighborhood"
              placeholder="Ubicacion"
              readonly
            />
          </div>
  
          <span>Metodo Entrega</span>
          <div class="form-group">
            <Dropdown
              style="width: 100%;"
              v-model="user.user.order_type"
              id="metodo_de_entrega"
              placeholder="Metodo de entrega"
              :options="computedOrderTypes.filter(t => [1,2,3].includes( t.id))"
              optionLabel="name"
            />
          </div>
  
          <!-- Mostrar dirección solo si el método no es "Pasar a recoger" (id 2) -->
          <template v-if="!user.user.order_type || user.user.order_type?.id !== 2 && [33,35,36].includes(siteStore.location?.site?.site_id)">
            <span>Direccio'n</span>
            <InputText
              @click="() => see_sites = true"
              :value="user.user.address"
              readonly
            />
          
          </template>



                    <!-- Mostrar dirección solo si el método no es "Pasar a recoger" (id 2) -->
                    <template v-else-if="!user.user.order_type || user.user.order_type?.id !== 2 && ![33,35,36].includes(siteStore.location?.site?.site_id)">
            <span>Direccio'n</span>
            <div class="form-group">
              <InputText v-model="user.user.address" id="address" placeholder="DIRECCION" />
            </div>
          </template>

    
            <span>Correo Electronico</span>
            <div class="form-group">
              <InputText v-model="user.user.email" id="email" placeholder="Correo Electronico" />
            </div>
   
  
          <span>Telefono</span>
          <div class="form-group">
            <InputText
              v-model="user.user.phone_number"
              id="phone_number"
              mask="999 999 9999"
              placeholder="TELEFONO"
            />
          </div>
  
          <!-- Mostrar campo de placa solo si el método es "Pasar a recoger" (id 2) y la sede es 33 -->
          <template v-if="user.user.order_type && user.user.order_type?.id === 2 && siteStore.location?.site?.site_id === 33">
            <span>Placa de tu vehiculo</span>
            <div class="form-group">
              <InputText v-model="user.user.placa" id="placa" placeholder="Placa de tu vehiculo" />
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
        <!-- Template para mostrar las opciones en la lista -->
        <template #option="slotProps">
          {{ slotProps.option.name }}
          <Tag>{{ slotProps.option.percentage }}</Tag>
        </template>

        <!-- Template para mostrar el valor seleccionado -->
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


  
          <span>Metodo de pago</span>
          <div class="form-group">
            <Dropdown
              style="width: 100%;"
              v-model="user.user.payment_method_option"
              id="payment_method"
              placeholder="METODO DE PAGO"
              :options="paymen_rules?.[siteStore.location?.site?.site_id]"
             
              
              optionLabel="name"
            />
          </div>




          <span v-if="user.user?.order_type?.id != 2">Domicilio</span>
          <div class="form-group">
            <InputNumber
            v-if="user.user?.order_type?.id != 2"
              style="width: 100%;"
              prefix="$"
              min="0"
              :maxFractionDigits="2"

              v-model="siteStore.location.neigborhood.delivery_price"
              id="payment_method"
              placeholder="Domicilio"
              :options="
                siteStore.location?.site?.site_id === 33
                  ? payment_method_options.filter(option => [6, 8].includes(option?.id))
                  : siteStore.location?.site?.site_id !== 33
                  ? payment_method_options.filter(option => ![7].includes(option?.id))
                  : payment_method_options  
              "
              optionLabel="name"
            />
          </div>



          <span>Notas</span>
  
          <Textarea
            v-model="store.cart.order_notes"
            class="order-notes"
            placeholder="Notas adicionales"
          />
  
          <!-- En otros casos, muestra un textarea normal -->
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
import { useToast } from 'primevue/usetoast';
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import resumen from './resumen.vue';
import { usecartStore } from './store/shoping_cart';
// import { formatoPesosColombianos } from '../../service/formatoPesos';
import { URI } from './service/conection';
import { fetchService } from '../../../service/utils/fetchService';
import { useSitesStore } from './store/site';
import {useUserStore} from './store/user'
import { paymentMethodService } from './service/restaurant/paymentMethodService';
import { useReportesStore } from './store/ventas';
// import validate from './validate.vue';

const see_sites = ref(false)

const paymen_rules = ref({})




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
    finalize_purchase: 'Finalizar compra',
    name: 'Nombre',
    address: 'Dirección',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    vehicle_plate: 'Placa de tu vehículo',
    payment_method: 'Método de pago',
    notes: 'Notas',
    additional_notes: 'Notas adicionales',
    delivery_method: 'Método de entrega',
  },
  en: {
    site_selector: 'Site selector',
    address_placeholder: 'Type your address',
    in_coverage: 'In coverage',
    not_in_coverage: 'Out of coverage',
    distance: 'Distance',
    miles: 'Miles',
    ships_from_site: 'Ships from',
    delivery_price: 'Delivery price',
    cancel: 'Cancel',
    save: 'Save',
    finalize_purchase: 'Checkout',
    name: 'Name',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    vehicle_plate: 'Vehicle plate',
    payment_method: 'Payment method',
    notes: 'Notes',
    additional_notes: 'Additional notes',
    delivery_method: 'Delivery method',
  }
};
const t = (key) => (DICT[lang.value] && DICT[lang.value][key]) || (DICT.es[key] || key);







const stripeApiBase = import.meta.env.VITE_STRIPE_API_URI || 'https://api.stripe.salchimonster.com';

const uri_api_google =  import.meta.env.VITE_STRIPE_API_URI || 'https://api.stripe.salchimonster.com';

// Estado del autocomplete
const addressQuery = ref('');
const dir_options = ref([]);

// Token de sesión para Autocomplete + Details (mismo ciclo)
const sessionToken = ref(null);


// --- Helpers de sesión ---


const autocompleteError = ref(null); // { code, message_es, message_en, coverage_radius_miles } | null


const isCortesia = ref(false)

  const cortesias = [
  {
    "id": 1,
    "name": "Demora más de una hora",
    "percentage": "15%"
  },
  {
    "id": 2,
    "name": "Pedido frío",
    "percentage": "20%"
  },
  {
    "id": 3,
    "name": "Un pelo",
    "percentage": "100%"
  },
  {
    "id": 4,
    "name": "Producto dañado",
    "percentage": "100%"
  },
  {
    "id": 5,
    "name": "Faltante de bebida y adición",
    "percentage": "0%"
  },
  {
    "id": 6,
    "name": "Responderle con lo que falta",
    "percentage": "0%"
  },
  {
    "id": 7,
    "name": "Salsas que no son",
    "percentage": "20%"
  },
  {
    "id": 8,
    "name": "Si se enoja y quiere cambio",
    "percentage": "100%"
  },
  {
    "id": 9,
    "name": "Mala atención Call Center",
    "percentage": "20%"
  },
  {
    "id": 10,
    "name": "Mala atención en Punto de venta",
    "percentage": "20%"
  },
  {
    "id": 11,
    "name": "Influencer",
    "percentage": "100%"
  },
  {
    "id": 12,
    "name": "No llegó el pedido",
    "percentage": "20%"
  }
]


  const store = usecartStore();
  const siteStore = useSitesStore();
  const user = useUserStore();
  
  const order_types = ref([]);
  const payment_method_options = ref([]);
  
  onMounted(async () => {
    user.user.order_type = {}

    payment_method_options.value = await fetchService.get(`${URI}/payment_methods`);
    order_types.value = await fetchService.get(`${URI}/get_all_order_types`);
    paymen_rules.value = await fetchService.get(`${URI}/site-payments-call-center`);

  });
  
  watch(() => user.user.order_type, (new_val) => {
    if (new_val?.id == 2) {
      // siteStore.current_delivery = siteStore.location.neigborhood.delivery_price;
      siteStore.location.neigborhood.delivery_price = 0;
    } else {
      siteStore.location.neigborhood.delivery_price = user.user.site?.delivery_cost_usd
    }
  });


  watch(isCortesia, (newval) => {
    if (newval)   alert('El esquema de comandas cambio y el modelo actual ya no es valido, la orden se envia como una orden comun' )

  })

  watch(() => siteStore.location?.site?.site_id,() => {
    user.user.order_type = null
  })

  watch(() => user.user.order_type,() => {
    user.user.placa = null
  })
  
  // Computed para filtrar los tipos de orden según la sede
  const computedOrderTypes = computed(() => {
    const currentSiteId = siteStore.location?.site?.site_id;
    if (currentSiteId === 33) {
      // Para la sede 33: permitir "Enviar por uber" (id: 1) y "Pasar a recoger" (id: 2)
      return order_types.value.filter(option => option?.id !== 3);
    } else {
      // Para las demás sedes: permitir "Pasar a recoger" (id: 2) y "Enviar a domicilio" (id: 3)
      return order_types.value.filter(option => option?.id !== 1);
    }
  });





















  const GEO_API_BASE =
  import.meta.env.VITE_GEO_API_BASE ||
  import.meta.env.VITE_PLACES_API_URI ||
  // último recurso: mismo host donde montaste tu microservicio de rutas
  'https://api.stripe.salchimonster.com';

// ── Autocomplete remoto ──────────────────────────────────────────────


const newSession = () => {
  sessionToken.value =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`;
};
const endSession = () => { sessionToken.value = null; };

const regionPref = computed(() => siteStore.location?.site?.country_code ?? 'co');
const maxSuggestions = 5;

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

    // Esperamos objetos { description, place_id }
    dir_options.value = predictions.filter(p => p?.description && p?.place_id);
    autocompleteError.value = (res && !Array.isArray(res) && res.error) ? res.error : null;
  } catch (err) {
    console.error('Autocomplete error:', err);
    dir_options.value = [];
    autocompleteError.value = null;
  }
};

// ✅ Al seleccionar una sugerencia: pedir DETAILS y calcular domicilio
const onSelectAddress = async ({ value }) => {
  try {
    if (!value?.place_id) return;
    const params = new URLSearchParams({
      place_id: value.place_id,
      session_token: sessionToken.value || '',
      language: lang.value,
      region: regionPref.value || '',
    });

    const url = `${GEO_API_BASE}/places/details?${params.toString()}`;
    const res = await fetchService.get(url, false);

    // Normaliza posibles formas de respuesta del backend
    const details = res?.result || res || {};
    const nearest = res?.nearest || details?.nearest || null;

    const deliveryCost =
      res?.delivery_cost_usd ??
      details?.delivery_cost_usd ??
      nearest?.delivery_cost_usd ??
      null;

    // Guardamos TODO en user.user.site (lo que ya usas en el template)
    user.user.site = {
      ...details,
      nearest,
      delivery_cost_usd: deliveryCost,
      description: value.description,
      place_id: value.place_id,
    };

    // Domicilio automático si no es "pasar a recoger" (id 2)
    if (
      deliveryCost != null &&
      (!user.user.order_type || user.user.order_type?.id !== 2)
    ) {
      siteStore.location.neigborhood.delivery_price = deliveryCost;
    }
  } catch (err) {
    console.error('Details error:', err);
  } finally {
    // cierra la sesión de Places: nuevo ciclo si vuelve a escribir
    endSession();
  }
};

// ✅ Si cambia el costo en user.user.site, vuelve a aplicarlo automáticamente
watch(
  () => user.user.site?.delivery_cost_usd,
  (val) => {
    if (val != null && (!user.user.order_type || user.user.order_type?.id !== 2)) {
      siteStore.location.neigborhood.delivery_price = val;
    }
  }
);
  </script>
  
  <style scoped>
  /* Contenedor Principal */
  .finalizar-compra-container {
    padding: 0;
    margin-bottom: 2rem;
  }
  
  /* Título */
  .title {
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
    font-weight: bold;
  }
  
  .advertice {
    animation: anim_status_tag 2s infinite ease;
    color: black;
    padding: 1rem;
    font-weight: 400;
    font-size: 1.1rem;
  }
  
  @keyframes anim_status_tag {
    20% {
      background-color: rgb(0, 255, 110);
    }
    50% {
      background-color: rgb(0, 255, 204);
      transform: scale(1.02);
    }
    80% {
      background-color: rgb(0, 255, 140);
    }
  }
  
  /* Grid del Formulario y Resumen */
  .form-grid {
    display: grid;
    max-width: 800px;
    margin: 0 auto;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  /* Columna del Formulario */
  .form-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.25rem;
  }
  
  /* Grupo de Formularios */
  .form-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
  
  /* Área de Notas */
  .order-notes {
    height: 8rem;
    resize: none;
    width: 100%;
  }
  
  /* Eliminar estilos en línea de elementos enfocados */
  *:focus {
    outline: none;
    border: none;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Personalizar Scrollbar */
  ::-webkit-scrollbar {
    width: 1rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgb(255, 0, 0);
    border-radius: 9px;
    border: 5px solid var(--primary-color);
    height: 10rem;
    width: 10rem;
  }
  </style>
  