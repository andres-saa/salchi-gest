<template>
    <h3>Métodos de pago por sede</h3>
  
    <div class="sites-wrapper">
      <div style="border-radius: 1rem;" :style=" activeDropdown === site.site_id? 'border: 2px solid red' : ''"
        v-for="site in sites.filter(s => s.show_on_web)"
        :key="site.site_id"
        class="site-item"
      >
        <!-- Botón para abrir/cerrar dropdown -->
        <Button
          :label="site.site_name"
          @click="toggleDropdown(site.site_id)"
        />
  
        <!-- Lista de métodos -->
        <div
          v-if="activeDropdown === site.site_id"
          class="methods-list"
          style="min-width:16rem;margin-top:.5rem;padding:.5rem;border:1px solid var(--surface-border);border-radius:4px;"
        >
          <div
            v-for="method in payment_methods"
            :key="method.id"
            class="method-item"
            style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem;"
          >
            <!--
              ✓  Modo “array” (sin :binary).  
              ✓  Aseguramos que selectedMethods[site_id] sea SIEMPRE array.
            -->
            <Checkbox
              :inputId="`m-${site.site_id}-${method.id}`"
              v-model="selectedMethods[site.site_id]"
              :value="method.id"
            />
            <label :for="`m-${site.site_id}-${method.id}`">{{ method.name }}</label>
          </div>
        </div>
      </div>
    </div>
  

  
    <Button
      label="Guardar cambios"
      severity="success"
      style="margin-top:2rem"
      :disabled="!isDirty"
      @click="saveRules"
    />
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import Checkbox    from 'primevue/checkbox'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI }        from '../callCenter/service/conection'
  
  /* ---------- state ---------- */
  const payment_methods  = ref([])      // [{id,name,exist}, …]
  const sites            = ref([])      // [{site_id,site_name,show_on_web}, …]
  const selectedMethods  = reactive({}) // { [site_id]: [methodId,…] }
  const originalSnapshot = ref({})
  const activeDropdown   = ref(null)
  
  /* ---------- helpers ---------- */
  const toggleDropdown = id => {
    activeDropdown.value = activeDropdown.value === id ? null : id
  }
  
  /* ¿Hay cambios sin guardar? */
  const isDirty = computed(() =>
    JSON.stringify(selectedMethods) !== JSON.stringify(originalSnapshot.value)
  )
  
  /*   Devuelve { "1":[{id,name,exist}, …], … }   */
  const buildPayload = () =>
    Object.fromEntries(
      Object.entries(selectedMethods).map(([site_id, methodIds]) => [
        site_id,                                      // clave
        payment_methods.value                         // valores filtrados
          .filter(m => methodIds.includes(m.id))
          .map(({ id, name, exist }) => ({ id, name, exist }))
      ])
    )
  
  /* ---------- acciones ---------- */
  const saveRules = async () => {
    try {
      await fetchService.put(`${URI}/site-payments`, {data:buildPayload()} )
      // Actualizamos “versión original” para reiniciar el flag dirty
      originalSnapshot.value = JSON.parse(JSON.stringify(selectedMethods))
    } catch (e) {
      console.error('Error guardando site-payments', e)
    }
  }
  
  /* ---------- carga inicial ---------- */
  onMounted(async () => {
    const [methods, sitesList, serverRules] = await Promise.all([
      fetchService.get(`${URI}/payment_methods`),
      fetchService.get(`${URI}/sites`),
      fetchService.get(`${URI}/site-payments`)
    ])
  
    payment_methods.value = methods
    sites.value           = sitesList
  
    // Prepara estructura reactiva: siempre array, aunque empiece vacía
    sites.value
      .filter(s => s.show_on_web)
      .forEach(({ site_id }) => {
        const existing = (serverRules[site_id] || []).map(m => m.id)
        selectedMethods[site_id] = existing.length ? existing : []
      })
  
    originalSnapshot.value = JSON.parse(JSON.stringify(selectedMethods))
  })
  </script>
  
  <style scoped>
  .sites-wrapper { margin-top:4rem; display:flex; flex-wrap:wrap; gap:.75rem; }
  .site-item     { display:flex; flex-direction:column; align-items:flex-start; }
  </style>
  