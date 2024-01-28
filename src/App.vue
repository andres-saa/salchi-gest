<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast()
</script>

<template>
    <Toast></Toast>
    <router-view />
</template>

<style scoped></style>
