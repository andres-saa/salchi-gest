<template>
    <div  class="col-12 m-auto" style="max-width: 900px;position: relative;border-radius: 1rem;" >
     
        <iframe width="100%" style="height: 85vh; border-radius: 1rem; overflow: hidden; box-shadow: 0 0 20px;box-shadow: 0 0 20px;" src="/documents/Planeación Estrategica Completa.pdf" frameborder="0"></iframe>

        <!-- <div style="background-color: red; height: 1em;width: 100%; position: absolute;bottom:0px; z-index: 300;">

        </div> -->
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