<template>
    <div class="container px-2">
      <div style="width: 100%;">
        
        <!-- Fecha -->
        <div style="width: 100%; align-items: center; gap: 1rem;">
          <h5 class="m-0 my-3"><b>Fecha</b> </h5>
          <Calendar v-model="form.date" style="width: 100%;" dateFormat="dd-mm-yy" placeholder="Selecciona una fecha"></Calendar>
        </div>
  
        <!-- Cajero -->
        <div style="width: 100%; align-items: center; gap: 1rem;">
          <h5 class="m-0 my-3"><b>Cajero</b> </h5>
          <Dropdown v-model="form.cachier_id" :options="cachiers" optionLabel="name" optionValue="id" filter style="width: 100%;"></Dropdown>
        </div>
  
        <!-- Jornada -->
        <div style="width: 100%; align-items: center; gap: 1rem;">
          <h5 class="m-0 my-3"><b>Jornada</b> </h5>
          <Dropdown v-model="form.work_schedule_id" :options="schedules" optionLabel="name" optionValue="id" style="width: 100%;"></Dropdown>
        </div>
  
        <!-- Sede -->
        <div style="width: 100%; align-items: center; gap: 1rem;">
          <h5 class="m-0 my-3"><b>Sede</b> </h5>
          <Dropdown v-model="form.site_id" :options="sites.filter(s => s.show_on_web)" optionLabel="site_name" optionValue="site_id" style="width: 100%;"></Dropdown>
        </div>
  
        <!-- Valor -->
        <div style="width: 100%; align-items: center; gap: 1rem;">
          <h5 class="m-0 my-3"><b>Valor</b> </h5>
          <InputNumber v-model="form.value" style="width: 100%;" placeholder="Ingresa el valor"></InputNumber>
        </div>
  
        <!-- Botón de envío -->
        <div style="width: 100%; display: flex; align-items: center; gap: 1rem; padding: 2rem 0; justify-content: end;">
          <Button label="Registrar" severity="help" @click="enviar"></Button>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchService } from '../../../service/utils/fetchService';
  import { URI } from '../../../service/conection';
  import { useRouter } from 'vue-router';
  import { useToast } from 'primevue/usetoast';
  

  const toast = useToast(); // Inicializar el toast


  const router = useRouter();
  
  // Datos del formulario
  const form = ref({
    cachier_id: 0,
    work_schedule_id: 0,
    value: 0,
    site_id: 0,
    date: ''
  });

  const formatDate = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    }



    const resetForm = () => {
  form.value = {
    cachier_id: 0,
    work_schedule_id: 0,
    value: 0,
    site_id: 0,
    date: ''
  };
};
  
  // Listas de opciones
  const sites = ref([]);
  const cachiers = ref([]);
  const schedules = ref([]);
  
  // Función para enviar los datos
  const enviar = async () => {
    const data = {
      cachier_id: form.value.cachier_id,
      work_schedule_id: form.value.work_schedule_id,
      value: form.value.value,
      site_id: form.value.site_id,
      date: formatDate(form.value.date) 
    };
  
    if (!data.cachier_id || !data.work_schedule_id || !data.value || !data.site_id || !data.date) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    try {
      await fetchService.post(`${URI}/create-cachier-entry`, data);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Enviado con éxito', life: 3000 }); // Mostrar notificación

      resetForm()
    } catch (error) {
      alert('Error al registrar los datos');
    }
  };
  
  // Cargar datos al montar el componente
  onMounted(async () => {
    cachiers.value = await fetchService.get(`${URI}/employers-basic`);
    schedules.value = await fetchService.get(`${URI}/get-work-schedule`);
    sites.value = await fetchService.get(`${URI}/sites`);
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;
    width: 100%;
  }
  </style>
  