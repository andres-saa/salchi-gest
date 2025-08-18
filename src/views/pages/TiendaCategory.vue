<template>
  <div class="page-wrap">
    <!-- Encabezado -->
    <header class="page-header">
      <h2 class="title">
        <i class="pi pi-store mr-2"></i>
        <b>{{ route.params.site_name }}</b>
      </h2>

      <div class="mode-badges">
        <Tag v-if="modificando2" severity="warn" rounded class="mr-2">Editando categorías</Tag>
        <Tag v-if="modificando" severity="warn" rounded>Editando productos</Tag>
      </div>
    </header>

    <!-- Categorías -->
    <section class="card-block">
      <!-- Modo edición: drag & drop -->
      <draggable
        v-if="modificando2"
        v-model="categorias"
        :options="{ animation: 600 }"
        @end="onCategoryReorder"
        class="chips-grid"
      >
        <template #item="{ element }">
          <div
            :key="element.categoria_descripcion"
            class="chip is-editable"
            :class="{ 'is-hidden': !element.visible }"
          >
            <div class="chip-left">
              <i class="pi pi-arrows-alt drag-handle" />
              <Checkbox @change="onCategoryReorder" binary v-model="element.visible" />
              <img
                class="chip-avatar"
                :src="`${URI}/get-image?image_url=${element.products[0].productogeneral_urlimagen}`"
                alt=""
              />
            </div>
            <strong class="chip-text">{{ element.categoria_descripcion }}</strong>
          </div>
        </template>
      </draggable>

      <!-- Modo visualización -->
      <div v-else class="chips-grid">
        <div
          v-for="c in categorias"
          :key="c.categoria_descripcion"
          class="chip"
          :class="{ 'is-hidden': !c.visible }"
        >
          <RouterLink
            class="chip-link"
            active-class="active"
            exact-active-class="full-active"
            :to="`/tiendas/categoria/${route.params.site_id}/${route.params.site_name}/${c.categoria_descripcion}`"
          >
            <span class="status-icon" :class="c.visible ? 'ok' : 'ko'">
              <i class="pi" :class="c.visible ? 'pi-check' : 'pi-times'"></i>
            </span>
            <img
              class="chip-avatar"
              :src="`${URI}/get-image?image_url=${c.products[0].productogeneral_urlimagen}`"
              alt=""
            />
            <Button
              :label="c.categoria_descripcion"
              text
              class="chip-button"
            />
          </RouterLink>
        </div>
      </div>

      <!-- Acciones categorías -->
      <div class="actions-row">
        <Button
          v-if="modificando2 && hasChanges2"
          @click="enviarCategorias"
          severity="success"
          label="Guardar cambios"
          icon="pi pi-save"
        />
        <Button
          v-if="!modificando2"
          @click="modificando2 = true"
          severity="help  "
          label="Reorganizar"
          icon="pi pi-sort"
        />
        <Button
          v-if="modificando2"
          @click="descartar_categorias"
          severity="danger"
          label="Descartar"
          icon="pi pi-times"
          text
        />
      </div>
    </section>

    <!-- Título de categoría actual y nombre en inglés -->
    <section class="category-header">
      <h3 class="subtitle">
        <i class="pi pi-tag mr-2"></i><b>{{ route.params.category_name }}</b>
      </h3>

      <div class="english-name">
        <label class="label">Nombre en inglés</label>
        <div class="input-with-icon">
          <i class="pi pi-language"></i>
          <InputText
            v-model="categoriaActual.english_name"
            placeholder="Ingresa el nombre en inglés"
            @change="handleCategoriaBlur"
            class="w-full"
          />
        </div>
      </div>
    </section>

    <!-- Productos -->
    <section class="card-block">
      <DataTable
        :value="sortedProducts"
        :rowHover="true"
        stripedRows
        :scrollable="true"
        scrollHeight="60vh"
        tableStyle="min-width: 64rem"
        @row-reorder="onRowReorder"
        class="products-table"
      >
        <!-- Imagen -->
        <Column header="Imagen" class="col-narrow">
          <template #body="slotProps">
            <img
              class="thumb"
              :src="`${URI}/get-image?image_url=${slotProps.data.productogeneral_urlimagen}`"
              alt=""
            />
          </template>
        </Column>

        <!-- Producto -->
        <Column header="Producto" class="col-wide">
          <template #body="slotProps">
            <h6 class="cell-title">{{ slotProps.data.productogeneral_descripcion }}</h6>
          </template>
        </Column>

        <!-- Nombre en inglés -->
        <Column header="Nombre en inglés" class="col-wide">
          <template #body="slotProps">
            <div v-if="modificando">
              <Textarea autoResize class="w-full" style="min-width: 20rem;" v-model="slotProps.data.english_name" />
            </div>
            <div v-else>
              <h6 class="cell-subtitle">{{ slotProps.data.english_name }}</h6>
            </div>
          </template>
        </Column>

        <!-- Precio -->
        <Column header="Precio" class="col-min">
          <template #body="slotProps">
            <h6 class="cell-price">
              {{ formatoPesosColombianos(slotProps.data.productogeneral_precio || slotProps.data.lista_presentacion[0].producto_precio) }}
            </h6>
          </template>
        </Column>

        <!-- Precio Anterior -->
        <Column header="Precio anterior" class="col-min">
          <template #body="slotProps">
            <div v-if="modificando" class="min-w-12rem">
              <InputNumber
                v-model="slotProps.data.last_price"
                mode="currency"
                currency="COP"
                locale="es-CO"
                class="w-full"
              />
            </div>
            <div v-else>
              <h6 class="cell-subtitle">
                {{ formatoPesosColombianos(slotProps.data.last_price) }}
              </h6>
            </div>
          </template>
        </Column>

        <!-- Descripción -->
        <Column header="Descripción" class="col-wide">
          <template #body="slotProps">
            <p class="cell-text">{{ slotProps.data.productogeneral_descripcionweb }}</p>
          </template>
        </Column>

        <!-- Descripción en inglés -->
        <Column header="Descripción en inglés" class="col-wide">
          <template #body="slotProps">
            <div v-if="modificando">
              <Textarea class="w-full" style="min-width: 30rem;" v-model="slotProps.data.english_description" autoResize />
            </div>
            <div v-else>
              <p class="cell-text">{{ slotProps.data.english_description }}</p>
            </div>
          </template>
        </Column>
      </DataTable>

      <!-- Acciones productos -->
      <div class="actions-row">
        <Button
          v-if="modificando"
          @click="enviarProductos"
          severity="help"
          label="Guardar cambios"
          icon="pi pi-save"
        />
        <Button
          v-if="!modificando"
          @click="modificando = true"
          severity="help"
          label="Editar productos"
          icon="pi pi-pencil"
        />
        <Button
          v-if="modificando"
          @click="descartar"
          severity="danger"
          label="Descartar"
          icon="pi pi-times"
          text
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import draggable from "vuedraggable";
import { fetchService } from "../../service/utils/fetchService";
import { URI } from "../../service/conection";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { formatoPesosColombianos } from "../../service/formatoPesos";

const route = useRoute();
const categorias = ref([]);
const modificando = ref(false);
const modificando2 = ref(false);
const hasChanges2 = ref(false);

const categoriaActual = computed(() => {
  return categorias.value?.find(
    c => c.categoria_descripcion === route.params.category_name
  ) || {};
});

const update_products = async () => {
  const result = await fetchService.get(
    `${URI}/tiendas/${route.params.site_id}/products-no-cache`
  );
  categorias.value = result.data[0].categorias.filter(c => c.products);
};

watch(
  () => route.params.site_id,
  () => {
    update_products();
  }
);

onMounted(() => {
  update_products();
});

const enviarNombreInglesCategoria = async (category) => {
  if (!category || !category.categoria_id) return;
  try {
    await fetchService.post(`${URI}/update_category_english/${category.categoria_id}/${category.english_name}`);
    console.log("Nombre en inglés de la categoría enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el nombre en inglés de la categoría:", error);
  }
};

const handleCategoriaBlur = () => {
  enviarNombreInglesCategoria(categoriaActual.value);
};

// ======== Lógica existente (sin cambios) ========= //
const categories_to_send = ref([]);
const onCategoryReorder = (event) => {
  categorias.value.forEach((categoria, i) => {
    categoria.index = i + 1;
  });
  categories_to_send.value = categorias.value.map(c => ({
    categoria_id: parseInt(c.categoria_id),
    visible: c.visible || false,
    index: c.index
  }));
  hasChanges2.value = true;
  console.log("Categories to send:", categories_to_send.value);
};

const onRowReorder = (event) => {
  if (!modificando.value) return;
  event.value.forEach((producto, i) => {
    producto.index = i + 1;
  });
};

const sortedProducts = computed(() => {
  const cat = categorias.value?.find(
    c => c.categoria_descripcion === route.params.category_name
  );
  if (!cat || !cat.products) return [];
  return [...cat.products].sort((a, b) => a.index - b.index);
});

const descartar_categorias = () => {
  update_products();
  modificando2.value = false;
  hasChanges2.value = false;
};

const enviarCategorias = async () => {
  try {
    await fetchService.post(`${URI}/update_categorias`, {
      categorias: categories_to_send.value
    });
    hasChanges2.value = false;
    modificando2.value = false;
    console.log("Categorías enviadas correctamente.");
  } catch (error) {
    console.error("Error al enviar categorías:", error);
  }
};

const descartar = () => {
  modificando.value = false;
  update_products();
};

const enviarProductos = async () => {
  const products_to_send = [];
  const cat = categorias.value?.find(
    c => c.categoria_descripcion === route.params.category_name
  );
  if (cat && cat.products) {
    cat.products.forEach(product => {
      products_to_send.push({
        producto_id: product.producto_id,
        english_name: product.english_name || "",
        last_price: product.last_price ||  0,
        english_description: product.english_description || "",
        index: product.index
      });
    });
  }
  try {
    await fetchService.post(`${URI}/update_products`, { productos: products_to_send });
    modificando.value = false;
    console.log("Productos enviados correctamente.");
  } catch (error) {
    console.error("Error al enviar productos:", error);
  }
};
</script>

<style scoped>
/* Layout */
.page-wrap{
  margin: 0 auto;
  padding: 1rem;
  max-width: 100%;
}
.page-header{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 1rem;
  padding: .5rem 0 1rem 0;
}
.title{
  display:flex;
  align-items:center;
  gap:.5rem;
  margin: 0;
}
.mode-badges :deep(.p-tag){
  font-size: .78rem;
}

/* Secciones tipo tarjeta */
.card-block{
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
  border: 1px solid rgba(0,0,0,.06);
  background: #fff;
  padding: 1rem;
  border-radius: .75rem;
  margin-bottom: 1rem;
}

/* Cabecera de categoría actual */
.category-header{
  display:grid;
  grid-template-columns: 1fr minmax(260px, 420px);
  gap: 1rem;
  align-items: end;
  margin: 1.5rem 0 .5rem 0;
}
.subtitle{
  display:flex;
  align-items:center;
  gap:.5rem;
  margin: 0;
}
.english-name .label{
  font-size: .85rem;
  color: #555;
  margin-bottom: .25rem;
  display:block;
}
.input-with-icon{
  position: relative;
}
.input-with-icon > i{
  position: absolute;
  left: .75rem;
  top: 50%;
  transform: translateY(-50%);
  opacity: .6;
  font-size: .9rem;
}
.input-with-icon :deep(.p-inputtext){
  padding-left: 2.25rem;
}

/* Chips de categorías */
.chips-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: .5rem;
}
.chip{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap:.75rem;
  padding: .5rem .6rem;
  border: 1px solid rgba(0,0,0,.08);
  background: linear-gradient(180deg, #ffffff, #f9fafb);
  border-radius: .6rem;
  transition: transform .15s ease, box-shadow .15s ease, opacity .2s;
  box-shadow: 0 4px 12px rgba(0,0,0,.04);
}
.chip:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
}
.chip.is-editable{
  cursor: grab;
}
.chip.is-hidden{
  opacity: .6;
  filter: grayscale(.2);
}
.chip-left{
  display:flex;
  align-items:center;
  gap:.5rem;
}
.drag-handle{
  cursor: grab;
  opacity:.6;
}
.chip-avatar{
  height: 2rem;
  width: 2rem;
  border-radius: .5rem;
  object-fit: cover;
  box-shadow: 0 3px 10px rgba(0,0,0,.18);
}
.chip-text{
  color: #111;
  font-weight: 600;
  letter-spacing: .1px;
}
.chip-link{
  display:flex;
  align-items:center;
  gap:.6rem;
  text-decoration: none;
  color: inherit;
  padding: .25rem .25rem .25rem .1rem;
}
.status-icon{
  display:grid;
  place-items:center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: .5rem;
  border: 1px solid transparent;
}
.status-icon.ok{
  background: #ecfdf5;
  color: #059669;
  border-color: #bbf7d0;
}
.status-icon.ko{
  background: #fef2f2;
  color: #dc2626;
  border-color: #fecaca;
}
.chip-button{
  color: #111 !important;
  font-weight: 600;
}

/* Botonera */
.actions-row{
  display:flex;
  justify-content: flex-end;
  gap: .5rem;
  margin-top: 1rem;
}

/* Tabla de productos */
.products-table :deep(.p-datatable-header){
  border: none;
}
.products-table :deep(.p-datatable-wrapper){
  border-radius: .5rem;
}
.thumb{
  height: 2.25rem;
  width: 2.25rem;
  object-fit: cover;
  border-radius: .5rem;
  box-shadow: 0 3px 12px rgba(0,0,0,.18);
}
.cell-title{
  margin: 0;
  font-weight: 600;
  color: #111827;
}
.cell-subtitle{
  margin: 0;
  font-weight: 500;
  color: #374151;
}
.cell-text{
  margin: 0;
  color: #4b5563;
  line-height: 1.35rem;
}
.cell-price{
  margin: 0;
  font-weight: 700;
  color: #0f766e;
}

/* Column widths utilitarias */
.col-narrow{ width: 6rem; }
.col-min{ width: 12rem; }
.col-wide{ width: 28rem; }

/* Estado de enlace activo */
.active{
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
  background: #ecfeff;
  border-radius: .6rem;
}
</style>
