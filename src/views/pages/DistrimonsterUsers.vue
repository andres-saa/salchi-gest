<template>
  <!-- Diálogo de eliminación -->
  <Dialog
    v-model:visible="deleteDialog"
    modal
    :closable="false"
    header="Eliminar usuario"
    style="width: 30rem;"
  >
    <div class="p-3">
      <h6>
        ¿Estás seguro de que deseas eliminar a
        <b>{{ userToDelete?.user_name }}</b>?
      </h6>
      <div class="flex justify-content-end gap-2 mt-4">
        <Button
          label="Cancelar"
          severity="help"
          @click="deleteDialog = false"
        />
        <Button
          label="Sí, eliminar"
          severity="danger"
          @click="deleteUser"
        />
      </div>
    </div>
  </Dialog>

  <!-- Diálogo de éxito (ejemplo) -->
  <Dialog
    v-model:visible="melo"
    modal
    :closable="false"
    style="display: flex; justify-content: center; width: 10rem;"
  >
    <div
      style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%;"
    >
      <h3><b>Melo</b></h3>
      <i class="pi pi-check text-7xl" style="font-weight: bold; color: green;"></i>
      <Button
        @click="melo = false"
        icon="pi pi-times"
        style="position: absolute; aspect-ratio: 1/1; border-radius: 50%; right: -1.5rem; top: -1.5rem"
        severity="danger"
      />
    </div>
  </Dialog>

  <!-- Diálogo para modificación masiva (ejemplo tuyo) -->
  <Dialog
    v-model:visible="massDialog"
    modal
    header="Modificar precios masivamente"
    :closable="true"
    style="width: 20rem;"
  >
    <div class="p-3">
      <div class="field">
        <label for="descuentoMayor"
          ><b>Descuento para Precio Mayor (%)</b></label
        >
        <InputNumber
          :inputStyle="{
            width: '100%',
            height: '2rem',
            borderRadius: '0'
          }"
          id="descuentoMayor"
          v-model="descuentoMayor"
          mode="decimal"
          :min="0"
          :max="100"
          :step="0.1"
          class="w-full"
        />
      </div>
      <div class="field mt-3">
        <label for="descuentoDistribuidor"
          ><b>Descuento para Precio Distribuidor (%)</b></label
        >
        <InputNumber
          :inputStyle="{
            width: '100%',
            height: '2rem',
            borderRadius: '0'
          }"
          id="descuentoDistribuidor"
          v-model="descuentoDistribuidor"
          mode="decimal"
          :min="0"
          :max="100"
          :step="0.1"
          class="w-full"
        />
      </div>
      <div class="flex justify-content-end gap-2 mt-4">
        <Button label="Cancelar" severity="danger" @click="cancelarMass" />
        <Button label="Aplicar" severity="success" @click="applyMassDiscount" />
      </div>
    </div>
  </Dialog>

  <!-- Tabla principal -->
  <div style="margin-top: 3rem; max-width: 1920px; margin: 5rem auto;" class="px-3">
    <h1> <strong>Usuarios Distrimonster</strong> </h1>

    <DataTable scrollable scrollHeight="70vh" :value="data" class="shadow-1 py-3 px-2">
      <!-- Ejemplo de columna con edición y tracking de cambios -->
      <Column
        frozen
        align-frozen="left"
        header="Cedula / Nit"
        class="m-0 py-2"
      >
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.cedula_nit"
            @input="onInput($event, slotProps.data, 'cedula_nit')"
            style="height: 2rem; width: 8rem;"
          />
          <h6 v-else class="m-0 p-0">{{ slotProps.data.cedula_nit }}</h6>
        </template>
      </Column>

      <Column header="Primer nombre" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.user_name"
            @input="onInput($event, slotProps.data, 'user_name')"
            style="height: 2rem; width: 10rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.user_name || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Segundo nombre" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.second_name"
            @input="onInput($event, slotProps.data, 'second_name')"
            style="height: 2rem; width: 10rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.second_name || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Primer apellido" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.first_last_name"
            @input="onInput($event, slotProps.data, 'first_last_name')"
            style="height: 2rem; width: 10rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.first_last_name || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Segundo apellido" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.second_last_name"
            @input="onInput($event, slotProps.data, 'second_last_name')"
            style="height: 2rem; width: 10rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.second_last_name || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Telefono" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            v-if="modificando"
            :model-value="slotProps.data.user_phone"
            @input="onInput($event, slotProps.data, 'user_phone')"
            style="height: 2rem; width: 10rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.user_phone || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Direccion" class="m-0 py-0" style="min-width: 20rem; text-transform: capitalize;">
        <template #body="slotProps">
          <h6 class="m-0 p-0">
            {{ slotProps.data.user_address?.toLowerCase() || '----' }}
          </h6>
        </template>
      </Column>

      <Column header="Correo" class="m-0 py-0">
        <template #body="slotProps">
          <InputText
            type="email"
            v-if="modificando"
            :model-value="slotProps.data.email"
            @input="onInput($event, slotProps.data, 'email')"
            style="height: 2rem; width: 20rem;"
          />
          <h6 v-else class="m-0 p-0">
            {{ slotProps.data.email || '----' }}
          </h6>
        </template>
      </Column>

      <Column v-if="modificando" header="Visible?" class="m-0 py-0">
        <template #body="slotProps">
          <InputSwitch
            v-model="slotProps.data.visible"
            @change="markChanged(slotProps.data)"
          />
        </template>
      </Column>

      <Column header="Tipo" class="m-0 py-0">
        <template #body="slotProps">
          <Tag
            :severity="slotProps.data.old ? 'success' : 'warning'"
            style="color: white; border-radius: 0.2rem;"
          >
            <h6 style="color: white;" class="m-0 p-0">
              {{ slotProps.data.old ? 'viejo' : 'Nuevo' }}
            </h6>
          </Tag>
        </template>
      </Column>

      <Column
        v-if="!modificando"
        frozen
        alignFrozen="right"
        header="Action"
        class="m-0 py-0"
      >
        <template #body="slotProps">
          <Button
            severity="danger"
            style="height: 2rem; border-radius: 0.2rem;"
            icon="pi pi-trash"
            @click="confirmDelete(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <div style="display: flex; gap: 1rem; justify-content: end; margin: 1rem 0;">
      <!-- Botón de guardar cambios (solo cuando modificando = true y haya cambios en al menos uno) -->
      <Button
        v-if="modificando && anyChange"
        @click="updateUsers"
        severity="success"
        label="Guardar cambios"
      />
      <!-- Botón para activar modo edición -->
      <Button
        v-if="!modificando"
        @click="enableEditing"
        severity="info"
        label="Editar"
      />
      <!-- Botón de descartar ediciones -->
      <Button
        v-if="modificando"
        @click="descartar"
        severity="danger"
        label="Descartar"
      />
      <!-- Botón para modificar masivamente (ejemplo tuyo) -->
      <Button
        v-if="modificando"
        @click="massDialog = true"
        severity="warning"
        label="Modificar Masiva"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { fetchService } from "../../service/utils/fetchService";
import { URI } from "../../service/conection";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
import InputSwitch from "primevue/inputswitch"; // si no lo tenías importado
import InputText from "primevue/inputtext"; // si no lo tenías importado

// Variables reactivas
const melo = ref(false);
const massDialog = ref(false);
const descuentoMayor = ref(0);
const descuentoDistribuidor = ref(0);

// data principal
const data = ref([]);
const originalData = ref([]);

// Para el modo edición
const modificando = ref(false);

// Para las medidas (opcional en tu ejemplo)
const unit_measures = ref({
  unit_measures: [],
  presentation_measures: [],
});

// Diálogo de eliminar
const deleteDialog = ref(false);
const userToDelete = ref(null);

// ============= 1) Obtener datos iniciales =============
const update = async () => {
  try {
    const response = await fetchService.get(`${URI}/users-distri`);
    // Añadimos la propiedad `changed: false` para cada usuario
    data.value = response.map((u) => ({ ...u, changed: false }));

    // Guardamos un clon sin la propiedad `changed`
    originalData.value = response.map((u) => ({ ...u }));
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }

  // ... tu fetch para unit_measures (opcional)
  try {
    const response2 = await fetchService.get(`${URI}/distrimonster-measures/`);
    unit_measures.value = response2;
  } catch (error) {
    console.error("Error al actualizar los datos (measures):", error);
  }
};

// ============= 2) Modo edición - Habilitar/Descartar =============
const enableEditing = () => {
  modificando.value = true;
};
const descartar = () => {
  modificando.value = false;
  update(); // recarga desde API y descarta todo
};

// ============= 3) Detectar cambios en cada campo =============
// Opción A: Un método genérico que se asocia con @input
const onInput = (event, row, field) => {
  // Actualizamos el campo
  row[field] = event.target.value;
  // Marcamos si cambió
  markChanged(row);
};

// Opción B: Un método que, al cambiar algo (por ejemplo InputSwitch), marca el row
const markChanged = (row) => {
  // Obtenemos el "original" para este row (por user_id, por ejemplo)
  const original = originalData.value.find((o) => o.user_id === row.user_id);
  if (!original) {
    row.changed = true;
    return;
  }
  // Compara campo por campo que te interese
  const hasChanged =
    row.cedula_nit !== original.cedula_nit ||
    row.user_name !== original.user_name ||
    row.second_name !== original.second_name ||
    row.first_last_name !== original.first_last_name ||
    row.second_last_name !== original.second_last_name ||
    row.user_phone !== original.user_phone ||
    row.email !== original.email ||
    row.visible !== original.visible;
  row.changed = hasChanged;
};

// Computed para ver si hay al menos un registro cambiado
const anyChange = computed(() => {
  return data.value.some((u) => u.changed);
});

// ============= 4) Guardar/actualizar solo usuarios cambiados =============
const updateUsers = async () => {
  // Filtramos los usuarios cambiados
  const changedUsers = data.value.filter((u) => u.changed);

  // Si no hay ninguno, salimos
  if (!changedUsers.length) return;

  const payload = {
    users: changedUsers.map((u) => ({
      user_id: u.user_id,
      user_name: u.user_name,
      user_phone: u.user_phone,
      cedula_nit: u.cedula_nit,
      email: u.email,
      first_last_name: u.first_last_name,
      second_last_name: u.second_last_name,
      second_name: u.second_name,
      visible: u.visible,
    })),
  };

  try {
    await fetchService.put(`${URI}/update-users`, payload);
    // Notificamos éxito
    melo.value = true;
    // Salimos de modo edición
    modificando.value = false;
    // Refrescamos la tabla
    update();
  } catch (error) {
    console.error("Error al actualizar usuarios:", error);
  }
};

// ============= Eliminar usuario =============
const confirmDelete = (user) => {
  userToDelete.value = user;
  deleteDialog.value = true;
};

const deleteUser = async () => {
  try {
    await fetchService.put(`${URI}/delete-user-by-id/${userToDelete.value.user_id}`);
    deleteDialog.value = false;
    melo.value = true; // diálogo de éxito
    update(); // recarga
  } catch (error) {
    console.error("Error al borrar el usuario:", error);
  }
};

// =============  Modificación masiva (ejemplo tuyo)  =============
const applyMassDiscount = () => {
  // Convertir los descuentos a enteros
  const intDescuentoMayor = parseInt(descuentoMayor.value, 10) || 0;
  const intDescuentoDistribuidor = parseInt(descuentoDistribuidor.value, 10) || 0;

  // Tu ejemplo de cambio (aquí no se ve relación con "usuarios", quizás era para productos)
  data.value = data.value.map((p) => {
    // Esto es solo ejemplo, ajusta a la lógica real
    const nuevoMayor = p.minor * (1 - intDescuentoMayor / 100);
    const nuevoDistribuidor = p.minor * (1 - intDescuentoDistribuidor / 100);

    return {
      ...p,
      mayor: parseFloat(nuevoMayor.toFixed(0)),
      distribuidor: parseFloat(nuevoDistribuidor.toFixed(0)),
      changed: true, // marcamos que cambió
    };
  });

  massDialog.value = false;
  descuentoMayor.value = 0;
  descuentoDistribuidor.value = 0;
};

const cancelarMass = () => {
  massDialog.value = false;
  descuentoMayor.value = 0;
  descuentoDistribuidor.value = 0;
};

// Montaje
onMounted(async () => {
  await update();
});

</script>

<style scoped>
/* Estilos adicionales */
</style>
