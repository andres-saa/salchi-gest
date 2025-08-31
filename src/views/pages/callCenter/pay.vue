<template>
  <div class="finalizar-compra-container">
    <!-- Dialog de dirección SOLO para sedes 33,35,36 -->
    <Dialog
      v-if="isCalcSite || isCalcSite_colombia"
      :header="t('site_selector')"
      modal
      v-model:visible="see_sites"
      style="width: 100%;max-width: 30rem;margin: .5rem ;"
    >
      <template v-if="!user.user.order_type || user.user.order_type.id !== 2">
        <div style="display: flex;flex-direction: column;gap: 1rem;">
          <div class="form-group">
            <!-- Autocomplete de direcciones (solo predicciones) -->
            <AutoComplete
              size="large"
              style="min-width: 100%;"
              v-model="addressQuery"
              :suggestions="dir_options"
              optionLabel="description"
              :minLength="1"
              :delay="250"
              forceSelection
              :placeholder="t('address_placeholder')"
              @complete="search"
              @item-select="onAddressSelect"
              class="w-full"
            >
              <template #item="{ item }">
                <div class="flex flex-col">
                  <span>{{ item.description }}</span>
                  <small class="opacity-70">{{ item.place_id }}</small>
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

          <!-- Error de cobertura -->
          <div v-if="user.user.site?.error" class="p-2" style="border:1px solid #ff6b6b;border-radius:.5rem;background:#fff0f0;padding:1rem;">
            <strong style="color:#b00020;">{{ t('coverage_error') }}:</strong>
            <div style="margin-top:.25rem;">
              {{ lang === 'en' ? user.user.site.error.message_en : user.user.site.error.message_es }}
            </div>
            <small style="opacity:.8;">(code: {{ user.user.site.error.code }})</small>
          </div>

          <span v-if="user.user.site?.nearest?.distance_miles != null">
            <strong>{{ t('distance') }}: </strong>
            {{ user.user.site?.nearest?.distance_miles }} {{ t('miles') }}
          </span>

          <span v-if="user.user.site?.nearest?.site?.site_name">
            <strong>{{ t('ships_from_site') }}: </strong>
            {{ user.user.site?.nearest?.site?.site_name }}
          </span>

          <Tag v-if="user.user.site?.delivery_cost_cop != null" severity="success">
            <span>
              <strong style="font-size: 1.1rem;">
                {{ t('delivery_price') }}: {{ formatUSD(user.user.site?.delivery_cost_cop) }}
              </strong>
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
        <template v-if="(isCalcSite ) && (!user.user.order_type || user.user.order_type?.id !== 2)">
          <span>Direcciónd</span>
          <InputText
            @click="() => see_sites = true"
            :value="user.user.address"
            readonly
          />
        </template>

        

        <!-- Dirección: manual (otras sedes) cuando no es recoger -->
        <template v-else-if="( isCalcSite_colombia) && (!user.user.order_type || user.user.order_type?.id !== 2)">
          <span>Dirección</span>
          <div class="form-group">
            <InputText v-model="user.user.address" id="address" placeholder="DIRECCIÓN" />
          </div>
        </template>

        <span>Correo Electrónico</span>
        <div class="form-group">
          <InputText v-model="user.user.email" id="email" placeholder="Correo Electrónico" />
        </div>

        <!-- === Teléfono con selector de país (bandera + código) === -->
        <span>{{ t('phone') }}</span>
        <div class="form-group phone-row" style="display:flex;">
          <!-- País / código -->
          <AutoComplete
            style="width: min-content;"
            v-model="user.user.phone_code"
            :suggestions="countrySuggestions"
            optionLabel="dialCode"
            forceSelection
            :placeholder="t('search_country_or_code')"
            @complete="countryComplete"
            class="cc-autocomplete"
          >
            <template #option="slotProps">
              <div class="flex items-center" style="display:flex;gap:1rem;">
                <img :alt="slotProps.option.flag" :src="slotProps.option.flag" style="width:20px;height:14px;" />
                <div>{{ slotProps.option.name }} {{ slotProps.option.dialCode }}</div>
              </div>
            </template>
            <template #selectedItem="slotProps">
              <div class="flex items-center gap-2" style="display:flex;gap:1rem;">
                <img :alt="slotProps.value.flag" :src="slotProps.value.flag" style="width:20px;height:14px;" />
                <span>{{ slotProps.value.dialCode }}</span>
              </div>
            </template>
          </AutoComplete>

          <!-- Número -->
          <div class="phone-number" style="width:100%;">
            <InputText
              :disabled="!user.user.phone_code?.dialCode"
              v-model="user.user.phone_number"
              id="phone_number"
              :placeholder="t('phone')"
              @blur="formatPhoneOnBlur"
            />
            <div v-if="phoneError" class="phone-error">
              {{ phoneError }}
            </div>
          </div>
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
import { ref, onMounted, computed, watch, reactive } from 'vue'
import resumen from './resumen.vue'
import { usecartStore } from './store/shoping_cart'
import { URI } from './service/conection'
import { fetchService } from '../../../service/utils/fetchService'
import { useSitesStore } from './store/site'
import { useUserStore } from './store/user'
import { buildCountryOptions } from '@/service/utils/countries' // <- ajusta la ruta si es necesario
import { parsePhoneNumberFromString } from 'libphonenumber-js/min'

const see_sites = ref(false)
const paymen_rules = ref({})

const store = usecartStore()
const siteStore = useSitesStore()
const user = useUserStore()

const order_types = ref([])
const payment_method_options = ref([])
const isCortesia = ref(false)
const cortesias = ref([]) // si ya existe en otro lado, puedes quitar esta ref
const countryComplete = (e) => {
  const q = (e?.query ?? '')
  const qNorm = norm(q)
  const qDigits = onlyDigits(q)

  if (!qNorm) {
    countrySuggestions.value = countries.value.slice(0, 25)
    return
  }

  let list = countries.value.filter(c => {
    const name = norm(c.name)
    const iso  = norm(c.code)
    const dialDigits = c.dialDigits

    if (name.includes(qNorm) || iso.includes(qNorm)) return true
    if (!qDigits) return false

    // Soporta "+1 929", "1-929", "(+1)929" comparando solo dígitos
    if (dialDigits.startsWith(qDigits) || qDigits.startsWith(dialDigits)) return true
    return false
  })

  countrySuggestions.value = list
    .filter(o => o && typeof o === 'object' && typeof o.name === 'string')
    .slice(0, 50)
}

// --- i18n mini ---
const lang = computed(() => {
  const v = (user?.lang?.name || 'es').toString().toLowerCase()
  return v === 'en' ? 'en' : 'es'
})
const DICT = {
  es: {
    site_selector: 'Seleccionar sede',
    address_placeholder: 'Escribe tu dirección',
    in_coverage: 'En cobertura',
    not_in_coverage: 'Fuera de cobertura',
    coverage_error: 'Error de cobertura',
    distance: 'Distancia',
    miles: 'Millas',
    ships_from_site: 'Sale de la sede',
    delivery_price: 'Costo de envío',
    cancel: 'Cancelar',
    save: 'Guardar',
    phone: 'Teléfono',
    search_country_or_code: 'Buscar país o código (+57, 57, US, +1 929)...',
  },
  en: {
    site_selector: 'Site selector',
    address_placeholder: 'Type your address',
    in_coverage: 'In coverage',
    not_in_coverage: 'Out of coverage',
    coverage_error: 'Coverage error',
    distance: 'Distance',
    miles: 'Miles',
    ships_from_site: 'Ships from',
    delivery_price: 'Delivery price',
    cancel: 'Cancel',
    save: 'Save',
    phone: 'Phone',
    search_country_or_code: 'Search country or code (+57, 57, US, +1 929)...',
  }
}
const t = (key) => (DICT[lang.value] && DICT[lang.value][key]) || (DICT.es[key] || key)

const formatUSD = (v) => {
  let currency  = ""
  

    if (isCalcSite.value) {
      currency  = "USD"
    }  else if (isCalcSite_colombia.value) {
      currency = "COP"
    }

  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(Number(v || 0))
  } catch {
    return `$${Number(v || 0).toFixed(2)}`
  }
}

// --- GEO API base ---
const GEO_API_BASE =
  import.meta.env.VITE_GEO_API_BASE ||
  import.meta.env.VITE_PLACES_API_URI || "http://localhost:8000" ||
  'https://api.stripe.salchimonster.com'

// Estado del autocomplete
const addressQuery = ref('')
const dir_options = ref([])
const sessionToken = ref(null)
const autocompleteError = ref(null)

const newSession = () => {
  sessionToken.value =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`
}
const endSession = () => { sessionToken.value = null }

const maxSuggestions = 5

// Países / telefonía
const countries = ref([])
const countrySuggestions = ref([])

const norm = (s) => (s || '').toString().trim().toLowerCase()
const onlyDigits = (s) => (s || '').replace(/\D+/g, '')

const toFlagEmoji = (iso2) => {
  if (!iso2) return '🏳️'
  return iso2
    .toUpperCase()
    .split('')
    .map(c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0)))
    .join('')
}

// Pref de región para Autocomplete: usa ISO del código telefónico si existe
const regionPref = computed(() =>
  (user.user?.phone_code?.code || siteStore.location?.site?.country_code || 'CO').toLowerCase()
)

// Cargar catálogos
onMounted(async () => {
  user.user.order_type = {}
  payment_method_options.value = await fetchService.get(`${URI}/payment_methods`)
  order_types.value = await fetchService.get(`${URI}/get_all_order_types`)
  paymen_rules.value = await fetchService.get(`${URI}/site-payments-call-center`)

  // Países con bandera (FlagCDN) + emoji fallback y dialDigits
  countries.value = buildCountryOptions(lang.value).map(c => ({
    ...c,
    dialDigits: (c.dialCode || '').replace(/\D+/g, ''),
    flag: `https://flagcdn.com/h20/${c.code.toLowerCase()}.png`,
    flagEmoji: toFlagEmoji(c.code),
    _imgError: false
  }))
  countrySuggestions.value = countries.value.slice(0, 25)

  const bySite = siteStore.location?.site?.country_code?.toUpperCase?.()
  const defIso = bySite && countries.value.some(c => c.code === bySite)
    ? bySite
    : (lang.value === 'en' ? 'US' : 'CO')

  // Normaliza si llega string viejo
  if (typeof user.user.phone_code === 'string') {
    const raw = user.user.phone_code.trim().toLowerCase()
    let found = countries.value.find(c => c.code.toLowerCase() === raw)
    if (!found) found = countries.value.find(c => c.name.toLowerCase() === raw)
    if (!found) found = countries.value.find(c => c.dialDigits === raw.replace(/\D+/g,''))
    user.user.phone_code = found || null
  }
  if (!user.user.phone_code) {
    user.user.phone_code = countries.value.find(c => c.code === defIso) || null
  }
})

// === Teléfono: validación y formateo ===
const phoneError = ref(null)

const formatPhoneOnBlur = () => {
  const countryIso = user.user.phone_code?.code || undefined
  const phone = parsePhoneNumberFromString(user.user.phone_number || '', countryIso)
  if (phone && phone.isValid()) {
    user.user.phone_number = phone.formatNational()
  }
}

watch([() => user.user.phone_number, () => user.user.phone_code], ([num, country]) => {
  phoneError.value = null

  const raw = (num || '').toString().trim()
  if (!raw) {
    user.user.phone_e164 = null
    return
  }

  const countryIso = country?.code || undefined
  const phone = parsePhoneNumberFromString(raw, countryIso)

  if (phone && phone.isValid()) {
    user.user.phone_e164 = phone.number        // +1xxxxxxxxxx / +57xxxxxxxxxx
  } else {
    user.user.phone_e164 = null
    phoneError.value = lang.value === 'en'
      ? 'Invalid phone number for selected country.'
      : 'Número inválido para el país seleccionado.'
  }
}, { immediate: true })

watch(lang , (new_val) => {
  const prev = user.user.phone_code?.code
  countries.value = buildCountryOptions(new_val).map(c => ({
    ...c,
    dialDigits: (c.dialCode || '').replace(/\D+/g, ''),
    flag: `https://flagcdn.com/h20/${c.code.toLowerCase()}.png`,
    flagEmoji: toFlagEmoji(c.code),
    _imgError: false
  }))
  countrySuggestions.value = countries.value.slice(0, 25)
  user.user.phone_code = countries.value.find(c => c.code === prev) || countries.value.find(c => c.code === (new_val === 'en' ? 'US' : 'CO'))
})

// ¿Sede calcula domicilio?
const isCalcSite = computed(() => [33, 35, 36].includes(siteStore.location?.site?.site_id ?? -1))
const isCalcSite_colombia = computed(() => [11,32,4,29,9,8,1,10,2,30,7,3].includes(siteStore.location?.site?.site_id ?? -1))
const currentSiteId = computed(() => siteStore.location?.site?.site_id ?? -1)

// --------------------
// Cache con persistencia local
// --------------------
const STORAGE_KEY = 'salchi:deliveryCache:v1'
const deliveryCache = reactive({
  manual: {}, // { [site_id]: number }
  calc: {}    // { [site_id]: number }
})

function loadCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const data = JSON.parse(raw)
    if (data?.manual && typeof data.manual === 'object') Object.assign(deliveryCache.manual, data.manual)
    if (data?.calc && typeof data.calc === 'object') Object.assign(deliveryCache.calc, data.calc)
  } catch (e) {
    console.warn('No se pudo cargar deliveryCache:', e)
  }
}
function saveCache() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ manual: deliveryCache.manual, calc: deliveryCache.calc }))
  } catch (e) {
    console.warn('No se pudo guardar deliveryCache:', e)
  }
}
loadCache()
watch(deliveryCache, saveCache, { deep: true })

// Guarda en cache cuando el usuario define manualmente (solo sedes manuales y no recoger)
watch(
  () => siteStore.location?.neigborhood?.delivery_price,
  (val) => {
    if (!isCalcSite.value && (user.user.order_type?.id ?? 0) !== 2 && val != null) {
      deliveryCache.manual[currentSiteId.value] = Number(val)
    }
  }
)

// Guarda en cache cuando cambia el calculado (y aplica si no es recoger)
watch(
  () => user.user.site?.delivery_cost_cop,
  (val) => {
    if (isCalcSite.value && val != null) {
      deliveryCache.calc[currentSiteId.value] = Number(val)
      if ((user.user.order_type?.id ?? 0) !== 2) {
        siteStore.location.neigborhood.delivery_price = Number(val)
      }
    }
  }
)

// Reglas al cambiar método de entrega / sede / modo (calc vs manual)
watch(
  [() => user.user.order_type?.id, isCalcSite, currentSiteId],
  ([typeId, isCalc]) => {
    const sid = currentSiteId.value

    // Pasar a recoger => domicilio 0
    if (typeId === 2) {
      siteStore.location.neigborhood.delivery_price = 0
      return
    }

    // Envío: aplica según modo
    if (isCalc) {
      const v = user.user.site?.delivery_cost_cop ?? deliveryCache.calc[sid] ?? 0
      siteStore.location.neigborhood.delivery_price = Number(v)
    } else {
      const v = deliveryCache.manual[sid]
        ?? siteStore.location?.neigborhood?.delivery_price
        ?? 0
      siteStore.location.neigborhood.delivery_price = Number(v)
    }
  },
  { immediate: true }
)

// Al cambiar sede: limpiar/ajustar estado relevante
watch(() => siteStore.location?.site?.site_id, () => {
  user.user.order_type = null
  user.user.placa = null
  if (!isCalcSite.value && !isCalcSite_colombia.value) {
    // modo manual
    see_sites.value = false
    user.user.site = null
  } else {
    // modo calculado
    user.user.address = ''
  }
})

// Filtro de tipos de orden por sede
const computedOrderTypes = computed(() => {
  const sid = siteStore.location?.site?.site_id
  if (sid === 33) {
    // En 33 no permites opción id 3 (según tu regla original)
    return order_types.value.filter(option => option?.id !== 3)
  } else {
    // En otras sedes no permites opción id 1
    return order_types.value.filter(option => option?.id !== 1)
  }
})

// Buscar sugerencias
const search = async (event) => {
  const query = (event?.query ?? '').trim()
  if (!query) {
    dir_options.value = []
    autocompleteError.value = null
    return
  }
  if (!sessionToken.value) newSession()

  const params = new URLSearchParams({
    input: query,
    session_token: sessionToken.value,
    language: lang.value,
    region: regionPref.value || '',
    limit: String(maxSuggestions),
  })

  try {
    let url = ""
    if (isCalcSite.value) {
      url = `${GEO_API_BASE}/places/autocomplete?${params.toString()}`
    }  else if (isCalcSite_colombia.value) {
      url = `${GEO_API_BASE}/co/places/autocomplete?${params.toString()}`
    }

    const res = await fetchService.get(url, false)

    const predictions = Array.isArray(res)
      ? res
      : Array.isArray(res?.predictions)
        ? res.predictions
        : []

    dir_options.value = predictions.filter(p => p?.description && p?.place_id)
    autocompleteError.value = (res && !Array.isArray(res) && res.error) ? res.error : null
  } catch (err) {
    console.error('Autocomplete error:', err)
    dir_options.value = []
    autocompleteError.value = null
  }
}

// Selección de dirección -> coverage-details + cálculo
const onAddressSelect = async (e) => {
  const item = e?.value
  if (!item?.place_id) return

  autocompleteError.value = null
  try {
    const params = new URLSearchParams({
      place_id: item.place_id,
      session_token: sessionToken.value || '',
      language: lang.value
    })


      let url = ""
    if (isCalcSite.value) {
      url = `${GEO_API_BASE}/places/coverage-details?${params.toString()}`
    }  else if (isCalcSite_colombia.value) {
      url = `${GEO_API_BASE}/co/places/coverage-details?${params.toString()}`
    }

 
    const details = await fetchService.get(url)

    user.user.site = details || {}
    user.user.site.description = details?.formatted_address || item.description
    user.user.lat = details?.lat || null
    user.user.lng = details?.lng || null
    user.user.address_details = details

    // Aplicar costo si no es recoger
    if (details?.delivery_cost_cop != null && (!user.user.order_type || user.user.order_type?.id !== 2)) {
      siteStore.location.neigborhood.delivery_price = Number(details.delivery_cost_cop)
    }

    // Guardar dirección visible
    user.user.address = user.user.site.description || item.description
  } catch (err) {
    console.error('Coverage Details error:', err)
    user.user.address = item.description
    user.user.site = {}
  } finally {
    endSession()
  }
}

// Guardar desde el diálogo (modo calculado)
const saveCalculatedAddress = () => {
  see_sites.value = false

  // NO cambiar la sede actual. Usa user.user.site?.nearest?.site cuando envíes el pedido si lo necesitas.
  const cost = user.user.site?.delivery_cost_cop ?? 0
  siteStore.location.neigborhood.delivery_price = Number(cost)

  // asegura que la dirección quede en el campo principal
  user.user.address = user.user.site?.description || user.user.address || ''
}
</script>

<style scoped>
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

/* PrimeVue AutoComplete full width */
:deep(.p-autocomplete) { width: 100%; flex: 1 1 auto; }
:deep(.p-autocomplete .p-inputtext), :deep(.p-autocomplete-input) { width: 100%; }

/* Teléfono */
.phone-row { align-items: start; gap: .75rem; width: 100%; }
.cc-autocomplete :deep(.p-inputtext) { width: 5rem !important; }
.phone-error { color:#b00020; font-size:.85rem; margin-top:.25rem; }
</style>
