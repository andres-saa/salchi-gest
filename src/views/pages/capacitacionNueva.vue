<template>
    <div class="col-12 m-auto px-3"
        style="max-width: 900px;display: ;align-items: center;justify-content: center; flex-direction: column; ">

        <div ref="pdfContainer"  class="pdf-container"></div>

    </div>
</template>



<script setup>


import { ref, onMounted } from 'vue';


    const pdfContainer = ref(null);
    const pdfUrl = 'http://localhost:9000/get-training-document/12/capacitacion'; // Reemplaza con la URL de tu PDF

    onMounted(() => {
      const iframe = document.createElement('iframe');
      iframe.src = pdfUrl;
      iframe.style.width = '100%';
      iframe.style.height = '85VH'; // Puedes ajustar esto según tus necesidades

      if (pdfContainer.value) {
        pdfContainer.value.appendChild(iframe);
      }
    });



</script>

<style>
.pdf-container {
  height: 100%;
}
</style>
