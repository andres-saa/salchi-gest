<template>
    <div  class="col-12 mx-auto my-0 py-0" style="max-width: 1024px;position: relative;border-radius: 1rem;" >
     
        <iframe width="100%" style="height: 85vh; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 0 20px;box-shadow: 0 0 20px;" src="/documents/Planeación Estrategica Completa.pdf" frameborder="0"></iframe>

    </div>
  </template>
  
  <script>
  import VuePdfEmbed from 'vue-pdf-embed'
  
  // OR THE FOLLOWING IMPORT FOR VUE 2
  // import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
  
  export default {
    components: {
      VuePdfEmbed,
    },
    data() {
      return {
        source1: '/documents/Planeación Estrategica Completa.pdf',
        source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',
      }
    },
  }
  </script>