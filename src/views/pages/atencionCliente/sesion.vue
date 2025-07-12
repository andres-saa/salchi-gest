<template > 

    <h2 style="font-weight: bold;text-transform: capitalize;margin: 2rem 1rem ;"> {{ route.params.pqr_status_name }}</h2>
</template>

<script setup>

import { useRoute } from 'vue-router';


const route = useRoute();

</script>