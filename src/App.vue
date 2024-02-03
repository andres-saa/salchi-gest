<script setup>
import { useToast } from 'primevue/usetoast';
import { obtenerRolesYActualizar } from './service/roles';
import { onBeforeMount } from 'vue';


onBeforeMount(async() => {
    obtenerRolesYActualizar( )
})
const toast = useToast()
</script>

<template>
    <Toast></Toast>
    <router-view />
</template>

<style scoped></style>
