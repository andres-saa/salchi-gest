<template>
    <div  >
     
      <vue-pdf-embed :source="source1" style="max-width: 1024px; " class="col-12 m-auto" />


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