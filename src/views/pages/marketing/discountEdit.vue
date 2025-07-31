<template>
  <div class="container">



    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-left">
          <RouterLink to="/marketing/discounts/">
            <Button icon="pi pi-times" text class="btn-close" />
          </RouterLink>
          <h5 class="title"><strong>Editar Descuento</strong></h5>
        </div>

        <div style="display: flex; gap: 1rem;" v-if="charging_menu">
          <ProgressSpinner style="width: 40px; height: 40px" strokeWidth="8" fill="transparent" animationDuration=".5s"
            aria-label="Custom ProgressSpinner" />
          <h6 class="m-0" style="max-width: 40rem;">Estoy actualizando al ultimo menu de restaurant, sino has hecho
            cambios recientes ignora este mensaje ...</h6>
        </div>

        <div v-else style="display: flex;gap: 1rem;">
          <i class="pi pi-check text-5xl" style=" color: green;"></i>
          <h5>Menu actualizado, Puedes Editar tu descuento a gusto</h5>
        </div>
        <div class="navbar-right">
          <RouterLink to="/marketing/discounts/">
            <Button label="Cancelar" text class="btn-cancel" />
          </RouterLink>
          <Button label="Guardar" severity="help" class="btn-save" />
        </div>
      </div>
    </nav>

    <h1 class="section-title"><b>Descuento</b></h1>


    <div style="display: flex;">





      <div class="discount card discount-grid">
        <!-- Nombre -->
        <div class="form-label">
          <h5><b>Nombre</b></h5>
          <h5>Asigna un nombre a tu descuento</h5>
        </div>
        <InputText style="text-transform: uppercase;" placeholder="Nombre del descuento"
          v-model="dataToSave.discount_name" class="input-large" />

        <!-- Divider -->
        <hr class="grid-divider" />

        <!-- Tiendas -->
        <div class="form-label">
          <h5><b>Tiendas</b></h5>
          <h5>¿En qué tiendas se puede aplicar el descuento?</h5>
        </div>
        <div class="form-checkbox">
          <div style="width:100%;max-width: 100%;">
            <MultiSelect display="chip" optionLabel="site_name" @change="recalcSiates" v-model="dataToSave.sites"
              :options="sites" style="width:30rem;max-width: 30rem;"></MultiSelect>
          </div>
        </div>

        <!-- Divider -->
        <hr class="grid-divider" />

        <!-- Tipo de descuento -->
        <div class="form-label">
          <h5><b>Tipo de descuento</b></h5>
          <h5>Selecciona el tipo de descuento que quieres aplicar</h5>
        </div>
        <Dropdown disabled style="text-transform: uppercase;" :options="dataToCreate.data.discount_types"
          v-model=dataToSave.type optionLabel="name" class="input-large" />

        <!-- Espacio visual -->
        <div class="card-light-full card" style="width: 100%;">

          <div style="grid-area: nombre;">
            <div class="form-label">
              <h5><b>{{ dataToSave.type.name }}
                </b></h5>
              <h5>¿Cómo le gustaría que se aplicara su descuento?
              </h5>
            </div>
          </div>



          <div v-if="visibles[dataToSave.type.id].includes('articulo')"
            style="grid-area: articulo;display: flex;gap: 1rem;width: 100%;">
            <div style="display: flex; flex-direction: column;width: 100%;">
              <h5>Articulo</h5>
              <Dropdown disabled v-model="dataToSave.product_json" :options="store.marketing_menu" filter
                filterPlaceholder="Busca un producto" optionLabel="name" style="width: 100%;" placeholder="" />
            </div>

          </div>

          <div style="grid-area: detalles;display: flex;gap: 1rem;">
            <div v-if="visibles[dataToSave.type.id].includes('item')"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Item</h5>
              <Dropdown disabled style="max-width:20rem;" v-model="dataToSave.product_json"
                :options="store.marketing_menu" filter filterPlaceholder="Busca un producto" optionLabel="name"
                placeholder="" class="input-large" />
            </div>
            <div v-if="visibles[dataToSave.type.id].includes('obtenga')"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Obtenga</h5>
              <Dropdown disabled style="width: 100%;max-width: 20rem;" optionLabel="name" v-model="dataToSave.gift_json"
                :options="store.marketing_menu" filter filterPlaceholder="Busca un producto para regalar" placeholder=""
                class="input-large" />
            </div>
          </div>



          <div style="grid-area: tipo;display: flex;gap: 1rem;">
            <div v-if="visibles[dataToSave.type.id].includes('tipo')"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Tipo</h5>
              <Dropdown style="text-transform: uppercase;" disabled :options="dataToCreate.data.details_types"
                v-model="dataToSave.detail_type_id" optionLabel="name" placeholder="" class="input-large" />
            </div>
            <div v-if="visibles[dataToSave.type.id].includes('cantidad_descuento') && dataToSave.detail_type_id.id == 1"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Cantidad de descuento</h5>
              <InputNumber disabled inputStyle="background-color: white !important" v-model="dataToSave.amount"
                prefix="$" style="width: 100%;" />

            </div>

            <div v-if="visibles[dataToSave.type.id].includes('cantidad_descuento') && dataToSave.detail_type_id.id == 2"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Porcentaje de descuento</h5>
              <InputNumber disabled inputStyle="background-color: white !important" :max="100" :min="1"
                v-model="dataToSave.percent" suffix="%" style="width: 100%;text-transform: capitalize;" />

            </div>
          </div>

          <div style="grid-area: minimo;display: flex;gap: 1rem;">
            <div v-if="visibles[dataToSave.type.id].includes('minimo')"
              style="display: flex; flex-direction: column;width: 100%;">
              <h5>Pedido minimo</h5>
              <InputNumber disabled v-model="dataToSave.min_purchase" inputStyle="background-color: white !important"
                prefix="$" style="width: 100%;text-transform: capitalize;" />
            </div>

          </div>

          <div class="form-checkbox" style="grid-area: limite;">
            <Checkbox />
            <h5> Límite de una redención por comensal.</h5>
          </div>


        </div>




        <div class="form-label">
          <h5><b>Código de descuento</b></h5>
          <h5 class="m-0">Este es el código que tus clientes pueden ingresar para canjear el descuento.
          </h5>


        </div>
        <div style="height: 100%;display: flex;align-items: end;">
          <InputText disabled style="text-transform: uppercase;" placeholder="Nombre del descuento"
            v-model="dataToSave.code" class="input-large" />
        </div>



      </div>



    </div>


    <h1 style="margin:4rem 0"><b>Distribución</b></h1>

    <div class="discount card discount-grid">
      <!-- Nombre -->
      <div class="form-label">
        <h5><b>Comparte el descuento a través de mensaje de texto.
          </b></h5>
        <h5>Envía un mensaje de texto a tus clientes con el código de descuento
        </h5>
      </div>

      <div style="display: flex;justify-content: end;">
        <InputSwitch />

      </div>


      <!-- Divider -->
      <hr class="grid-divider" />

      <div class="form-label">
        <h5><b>Mostrar en el banner del menú

          </b></h5>
        <h5>Mantén el descuento siempre visible para tus comensales agregándolo al banner de descuento.
        </h5>
      </div>

      <div style="display: flex;justify-content: end;">
        <InputSwitch />

      </div>


      <!-- Divider -->
      <hr class="grid-divider" />


    </div>






    <h1><b>Ajustes Avanzados</b></h1>


    <div class="discount card " style="display: flex;gap: 4rem;align-items: end;">
      <!-- Nombre -->
      <div class="form-label">
        <h5><b>Duración

          </b></h5>
        <h5>Establezca una fecha de inicio y
          opcionalmente una fecha final para su cupón
        </h5>

        <div style="display: flex;gap: 1rem;width: 100%;justify-content: en;">
          <Checkbox binary="true" v-model="expiration"></Checkbox>
          <h5 class="m-0">No expira
          </h5>
        </div>

      </div>


      <div style="display: flex;justify-content: end;gap: 1rem;">

        <div>
          <h5><b>Inicio

            </b></h5>
          <Calendar show-time hour-format="12" v-model="dataToSave.start_date"></Calendar>
        </div>

        <div>
          <h5><b>Final

            </b></h5>
          <Calendar :disabled="expiration" show-time hour-format="12" v-model="dataToSave.end_date"></Calendar>

        </div>


      </div>



    </div>
  </div>
</template>




<script setup>
import { onMounted, ref, watch } from 'vue';
import { fetchService } from '@/service/utils/fetchService.js'
import { useOrderStore } from '../../../store/order';
import { URI } from '../../../service/conection';

const sites = ref([{}])
const products = ref([])
const expiration = ref(true)

const charging_menu = ref(false)

const dataToCreate = ref({
  "data": {
    "sites": [
      {
        "site_id": 4,
        "site_name": "JAMUNDI"
      },
      {
        "site_id": 32,
        "site_name": "ACOPI YUMBO"
      },
      {
        "site_id": 29,
        "site_name": "CITY U"
      },
      {
        "site_id": 8,
        "site_name": "SUBA"
      },
      {
        "site_id": 33,
        "site_name": "NEW JERSEY"
      },
      {
        "site_id": 11,
        "site_name": "LAURELES"
      },
      {
        "site_id": 9,
        "site_name": "MONTES"
      },
      {
        "site_id": 10,
        "site_name": "KENNEDY"
      },
      {
        "site_id": 1,
        "site_name": "BRETAÑA"
      },
      {
        "site_id": 30,
        "site_name": "USAQUEN"
      },
      {
        "site_id": 3,
        "site_name": "CANEY"
      },
      {
        "site_id": 7,
        "site_name": "MODELIA"
      },
      {
        "site_id": 35,
        "site_name": "FILADELPHIA"
      },
      {
        "site_id": 2,
        "site_name": "FLORA"
      }
    ],
    "discount_types": [
      {
        "id": 1,
        "name": "Descuento por pedido"
      },
      {
        "id": 2,
        "name": "Compra 1, llevate 1 gratis"
      },
      {
        "id": 3,
        "name": "Descuento por item"
      }
    ],
    "details_types": [
      {
        "id": 1,
        "name": "Monto fijo"
      },
      {
        "id": 2,
        "name": "porcentaje"
      }
    ]
  }
})


const store = useOrderStore()

const visibles = {
  "1": ["tipo", "cantidad_descuento", "minimo"],
  '2': ["item", "obtenga", "tipo", "cantidad_descuento", "minimo"],
  '3': ["articulo", "tipo", "cantidad_descuento", "minimo"],
}


const dataToSave = ref({
  "discount_name": "amor y amistad",
  "code": "amistad-90",
  "type": {
    "id": 2,
    "name": "Compra 1, llevate 1 gratis"
  },
  "detail_type_id": {
    "id": 2,
    "name": "porcentaje"
  },
  "amount": 4005,
  "percent": 10,
  "sites": [
    {
      "site_id": 1,
      "site_name": "BRETAÑA",
      "pe_site_id": 2
    },
    {
      "site_id": 3,
      "site_name": "CANEY",
      "pe_site_id": 7
    },
    {
      "site_id": 2,
      "site_name": "FLORA",
      "pe_site_id": 1
    }
  ],
  "status": "active",
  "redent": 2.0,
  "sell": 2000.0,
  "id": 1,
  "min_purchase": 12,
  "product_id": 234,
  "gift_id": 234,
  "gift_json": {
    "name": "CLASIC MONSTERCONO + BEBIDA",
    "product_id": "356"
  },
  "product_json": {
    "name": "CLASIC MONSTERCONO + BEBIDA",
    "product_id": "356"
  },
  "start_date": "2025-07-24T00:36:06.399091+00:00",
  "end_date": "2025-07-24T00:36:06.399091+00:00"
}
)

const menus = ref({
  1: {

  }

})

onMounted(async () => {
  const data = await fetchService.get(`${URI}/sites`);
  sites.value = data
    .filter(s => s.show_on_web)
    .map(s => ({
      site_name: s.site_name,
      site_id: s.site_id,
      pe_site_id: s.pe_site_id
    }));

  for (const s of sites.value) {
    charging_menu.value = true
    if (!menus.value[s.pe_site_id]) {
      const data = await fetchService.get(`${URI}/tiendas/${s.pe_site_id}/products`);
      menus.value[s.pe_site_id] = data;
    }
    else {
      console.log(menus.value[s.pe_site_id])
    }
    charging_menu.value = false
  }

  await recalcSiates()

});


const recalcSiates = async () => {
  const sites = dataToSave.value.sites;
  const productosFusionados = [];

  for (const s of sites) {
    const siteId = s.pe_site_id;


    // Obtener el menú actual del sitio
    const menu = menus.value[siteId];

    if (menu.categorias && Array.isArray(menu.categorias)) {
      for (const categoria of menu.categorias) {
        if (categoria.products && Array.isArray(categoria.products)) {
          productosFusionados.push(...categoria.products?.map(p => {
            if (p.lista_presentacion?.[0].productogeneral_id) {
              if (productosFusionados.findIndex(pp => pp.product_id == p.lista_presentacion?.[0].productogeneral_id) === -1) {
                return {
                  product_id: p.lista_presentacion?.[0].productogeneral_id,
                  name: p.productogeneral_descripcion
                }
              }
            } else if (productosFusionados.findIndex(pp => pp.product_id == p.productogeneral_id) === -1) {
              return {
                product_id: p.productogeneral_id,
                name: p.productogeneral_descripcion
              }
            }





          }).filter(Boolean));
        }
      }
    }

    console.log(`Productos fusionados para el sitio ${siteId}:`, productosFusionados);
  }
  store.marketing_menu = productosFusionados

};


</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 .5rem 1rem #00000020;
  position: fixed;
  top: 0rem;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: .5rem;
  min-width: 1200px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

h5 {
  margin: 0;
  padding: 0;
}

.title {
  margin: 0;
}

.btn-close,
.btn-cancel,
.btn-save {}

.container {
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
}

.section-title {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.discount-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 2rem;
}

.form-label {
  display: flex;
  flex-direction: column;
  min-width: max-content;
}

.input-large {
  width: 100%;
  /* max-width: 500px; */
  height: min-content;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.grid-divider {
  grid-column: 1 / -1;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0;
}

.card-light-full {
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-template-areas: "nombre articulo" "nombre detalles" "nombre tipo" "nombre minimo" "nombre limite";
  background-color: #ebebeb8e;
  gap: 1rem 3rem;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
}

.card-light-full2 {

  display: grid;
  grid-template-areas: "nombre articulo" "nombre detalles" "nombre tipo" "nombre minimo" "nombre limite";
  background-color: #00000010;
  gap: 1rem;
  width: 100%;
  border-radius: 0.5rem;
}

h5 {
  margin: .8rem 0;
}


.menu-actualizado {
  transition: all ease 3s;
  transform: translateX(-2rem);

}
</style>