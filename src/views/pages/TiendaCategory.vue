<template>
  <div style="margin: 0 auto;" class="my-2">
    <h4 class="my-5"><b>{{ route.params.site_name }}</b></h4>
    
    <!-- Sección para mostrar/editar el nombre en inglés de la categoría -->

    
    <div style="gap:0 1rem; box-shadow: 0 0rem 1rem #00000030; padding: 1rem; border-radius: .5rem;">
      <!-- Modo edición: listado arrastrable usando slot "item" -->
      <draggable style="display: flex; flex-wrap: wrap; gap: .5rem;"
        v-if="modificando2"
        v-model="categorias"
        :options="{ animation: 600 }"
        @end="onCategoryReorder"
      >
        <template #item="{ element }">
          <div
            :key="element.categoria_descripcion"
            style="display: flex; transition: all .3s ease; align-items: center; cursor: move; gap: .5rem; ; border: 1px solid; padding: .5rem; border-radius: .5rem;background-color: #00000030;"
          >  
            <Checkbox @change="onCategoryReorder" binary v-model="element.visible" />
            <img
              style="height: 2rem; aspect-ratio: 1 / 1; border-radius: 50%; box-shadow: -.5rem .5rem .5rem #00000050; object-fit: cover;"
              :src="`${URI}/get-image?image_url=${element.products[0].productogeneral_urlimagen}`"
              alt=""
            />
            <strong>
              <span style="color: black;">{{ element.categoria_descripcion }}</span>
            </strong>
          </div>
        </template>
      </draggable>
    
      <!-- Modo visualización: enlaces de navegación -->
      <div v-else style="display: flex; flex-wrap: wrap;gap: .5rem;">
        <div
          v-for="c in categorias"
          :key="c.categoria_descripcion"
          style="\grid-template-columns: repeat(3, 1fr); "
        >          
          <div style="display: flex; align-items: center;border: 1px solid; ;border-radius: .5rem;background-color: #00000030;" :style="!c.visible? 'opacity:.5': ''">
            <RouterLink
              style="display: flex; align-items: center; justify-content: start; padding: 0rem .5rem; gap: .5rem;"
              active-class="active"
              exact-active-class="full-active"
              :to="`/tiendas/categoria/${route.params.site_id}/${route.params.site_name}/${c.categoria_descripcion}`"
            >
              <b v-if="c.visible">
                <i class="pi pi-check text-2xl" style="font-weight: bold; color: green;"></i>
              </b>
              <b v-else>
                <i class="pi pi-times text-2xl" style="font-weight: bold; color: red;"></i>
              </b>
              <img
                style="height: 2rem; aspect-ratio: 1/1; border-radius:.5rem; box-shadow: -.5rem .5rem .5rem #00000050; object-fit: cover;"
                :src="`${URI}/get-image?image_url=${c.products[0].productogeneral_urlimagen}`"
                alt=""
              />
              <Button
                :label="c.categoria_descripcion"
                text
                style="color: black; width: max-content; outline: none; box-shadow: none; text-align: start;padding: .5rem 0;"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    
      <!-- Botón para enviar categorías (modo edición) -->
      <div style="width: 100%; display:flex; justify-content: end; gap: 1rem; margin: 1rem 0;">
        <Button
          v-if="modificando2 && hasChanges2"
          @click="enviarCategorias"
          severity="success"
          label="Guardar cambios"
        />
        <Button
          v-if="!modificando2"
          @click="modificando2 = true"
          severity="info"
          label="Reorganizar"
        />
        <Button
          @click="descartar_categorias"
          v-if="modificando2"
          severity="danger"
          label="Descartar"
        />
      </div>
    </div>
  </div>

  <!-- Sección de productos -->
  <h4 class="mt-5"><b>{{ route.params.category_name }}</b></h4>
  <h4 class="mb-5">  <div class="mb-5">
      <span>Nombre en ingles: </span>
   
      <InputText 
      v-model="categoriaActual.english_name" 
      placeholder="Ingresa el nombre en inglés"
      @change="handleCategoriaBlur" />
      
    </div>
</h4>






  <div style="box-shadow: 0 1rem 1rem #00000030; padding: 1rem; border-radius: .5rem;">
    <!-- Tabla de productos -->
    <DataTable
      :value="sortedProducts"
      @row-reorder="onRowReorder"
    >
      <!-- Columna Imagen -->
      <Column header="Imagen" class="m-0 py-1" style="width: 3rem;">
        <template #body="slotProps">
          <img
            style="height: 2rem; aspect-ratio: 1/1; object-fit: cover; border-radius: .5rem; box-shadow: -.5rem .5rem 1rem #00000050;"
            :src="`${URI}/get-image?image_url=${slotProps.data.productogeneral_urlimagen}`"
            alt=""
          />
        </template>
      </Column>

      <!-- Columna Producto -->
      <Column header="Producto" class="m-0 py-1" style="width: 40rem">
        <template #body="slotProps">
          <div>
            <h6 class="m-0 p-0">{{ slotProps.data.productogeneral_descripcion }}</h6>
          </div>
        </template>
      </Column>

      <!-- Columna Nombre en ingles -->
      <Column header="Nombre en ingles" class="m-0 py-2" style="width: 40rem;">
        <template #body="slotProps">
          <div v-if="modificando">
            <Textarea autoResize style="width: 100%;" v-model="slotProps.data.english_name" />
          </div>
          <div v-else>
            <h6 class="m-0 p-0">{{ slotProps.data.english_name }}</h6>
          </div>
        </template>
      </Column>

      <!-- Columna Precio -->
      <Column header="Precio" class="m-0 py-2" style="width:min-content">
        <template #body="slotProps">
          <div>
            <h6 class="m-0 p-0">
              {{ formatoPesosColombianos(slotProps.data.productogeneral_precio || slotProps.data.lista_presentacion[0].producto_precio) }}
            </h6>
          </div>
        </template>
      </Column>

      <!-- Columna Precio Anterior -->
      <Column header="Precio Anterior" class="m-0 py-2" style="width: min-content">
        <template #body="slotProps">
          <div v-if="modificando">
            <InputNumber 
              v-model="slotProps.data.last_price" 
              mode="currency" 
              currency="COP" 
              locale="es-CO" 
            />
          </div>
          <div v-else>
            <h6 class="m-0 p-0">
              {{ formatoPesosColombianos(slotProps.data.last_price) }}
            </h6>
          </div>
        </template>
      </Column>

      <!-- Columna Descripción -->
      <Column header="Descripción" class="m-0 py-2" style="width: 40rem;">
        <template #body="slotProps">
          <div>
            <h6 class="m-0 p-0">{{ slotProps.data.productogeneral_descripcionweb }}</h6>
          </div>
        </template>
      </Column>

      <!-- Columna Descripción en inglés -->
      <Column header="Descripción en ingles" class="m-0 py-2" style="width: 40rem">
        <template #body="slotProps">
          <div v-if="modificando">
            <Textarea 
              style="width: 100%;" 
              v-model="slotProps.data.english_description" 
              autoResize 
            />
          </div>
          <div v-else>
            <h6 class="m-0 p-0">{{ slotProps.data.english_description }}</h6>
          </div>
        </template>
      </Column>
    </DataTable>

    <!-- Botones de acción para productos -->
    <div style="display: flex; gap: 1rem; justify-content: end; margin: 1rem 0;">
      <Button
        v-if="modificando"
        @click="enviarProductos"
        severity="success"
        label="Guardar cambios"
      />
      <Button
        v-if="!modificando"
        @click="modificando = true"
        severity="info"
        label="Editar Productos"
      />
      <Button
        v-if="modificando"
        @click="descartar"
        severity="danger"
        label="Descartar"
      />
    </div>
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

// Variables reactivas y configuración inicial
const route = useRoute();
const categorias = ref([]);
const modificando = ref(false);
const modificando2 = ref(false);
const hasChanges2 = ref(false);  // Para cambios en categorías

// Computed para obtener la categoría actual según la ruta
const categoriaActual = computed(() => {
  return categorias.value?.find(
    c => c.categoria_descripcion === route.params.category_name
  ) || {};
});

// Función para actualizar las categorías desde el backend
const update_products = async () => {
  const result = await fetchService.get(
    `${URI}/tiendas/${route.params.site_id}/products-no-cache`
  );
  // Se filtran las categorías que tienen productos
  categorias.value = result.data[0].categorias.filter(c => c.products);
};

// Actualizar categorías al cambiar el site_id
watch(
  () => route.params.site_id,
  () => {
    update_products();
  }
);

// Llamada inicial al montar el componente
onMounted(() => {
  update_products();
});

const enviarNombreInglesCategoria = async (category) => {
  if (!category || !category.categoria_id) return; // Validar que exista
  try {
    await fetchService.post(`${URI}/update_category_english/${category.categoria_id}/${category.english_name}`);
    console.log("Nombre en inglés de la categoría enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el nombre en inglés de la categoría:", error);
  }
};

// Función que se dispara al perder el foco
const handleCategoriaBlur = () => {
  enviarNombreInglesCategoria(categoriaActual.value);
};



// ======== El resto de tu código para categorías y productos ========= //

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
.active {
  box-shadow: 0rem .5rem 1rem .5rem #00000030;
  background-color: rgba(0, 255, 221, 0.322);
  color: white;
  border-radius: .5rem;
}
</style>
