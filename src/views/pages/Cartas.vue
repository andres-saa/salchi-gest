<template>
  <div style="margin: 6rem auto;">
    <div style="display: flex; width: 100%; align-items: center; justify-content: center; gap: 1rem;">
      <b class="text-4xl">
        Cartas
      </b>
      <!-- Agrupamos la imagen y el botón para descargarla -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img style="width: 100px;" :src="`${URI}/read-photo-product/Ik0vvGzo`" alt="Imagen del producto">
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 3rem; justify-content: center; width: 100%;">
      <RouterLink 
        v-for="button in buttons" 
        :key="button.id"
        active-class="active" 
        exact-active-class="full-active"  
        :to="`/cartas/${button.id}/${button.name}`">
        <Button 
          :label="button.name"  
          style="background-color: #00000020; text-transform: uppercase; color: black;" 
        />
      </RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { fetchService } from '../../service/utils/fetchService';
import { URI } from '../../service/conection';

const buttons = ref([]);

onMounted(async () => {
  buttons.value = await fetchService.get(`${URI}/cartas`);
});

const downloadImage = async () => {
  try {
    const response = await fetch(`${URI}/read-photo-product/Ik0vvGzo`, { mode: 'cors' });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    // Define el nombre con el que se descargará el archivo
    link.setAttribute('download', 'imagen.jpg');
    // Agrega el link al DOM para que funcione el clic simulado
    document.body.appendChild(link);
    link.click();
    // Remueve el elemento y libera el objeto URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al descargar la imagen:', error);
  }
};
</script>

<style scoped>
.active {
  background-color: rgb(134, 217, 255);
}
</style>
