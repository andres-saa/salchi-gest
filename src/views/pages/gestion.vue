<template>
  <div class="col-12 mx-auto my-0 py-0 shadow-2" style="max-width: 1024px; position: relative; border-radius: 1rem;">
    <!-- VuePdfEmbed component to display the PDF directly -->
    <VuePdfEmbed :source="source1" style="height: ; border-radius: 0.5rem; overflow: hidden; "></VuePdfEmbed>
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
    }
  },
}
</script>
