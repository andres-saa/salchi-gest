<template>
    <div class="col-12 px-0 md:px-4 mx-auto" style="position: relative; max-width: 1366px; margin-top: 6rem;">
      <div class="grid" style="background-color: rgba(250, 250, 250, 0);">
        <div class="text-sm col-12 p-2 md:col-4 xl:col-6">
          <MultiSelect
            display="chip"
            multiple
            v-model="store.selectedSites"
            optionLabel="site_name"
            :options="store.sites?.filter(s => s.show_on_web)"
            class="text-sm col-12 p-0"
            placeholder="Sedes"
          />
        </div>
        <div class="text-center col-12 p-2 md:col-3">
          <InputText
            class="col-12 p-3"
            @click="showDateDialog = true"
            style="height: 2.7rem;"
            :value="store.dateRangeDifference.rangeName || `${formatDate(store.dateRange.startDate)}  |  ${formatDate(store.dateRange.endDate)}`"
            placeholder="periodo"
          />
        </div>
        <div class="col-12 md:col-1 md:p-0" style="display: flex; align-items: center; justify-content: start;">
          <Button
            icon="pi pi-search"
            severity="help"
            class="text-center p-0 col-12 md:p-0"
            style="height: 2.5rem; width: min-content; aspect-ratio: 1/1; font-weight: bold; border-radius: 50%; display: flex; justify-content: center;"
            @click="() => store.reportar += 1"
          />
        </div>
      </div>
  
      <p class="text-3xl px-0 mx-0 my-6 pb-0" style="font-weight: bold;">
        <i class="fa-solid fa-chart-simple"></i> Vision General
      </p>
  
      <div class="contenedor mt-5" style="position: sticky; top: 3rem; z-index: 99;">
        <div class="col-12 px-0 py-0 my-0 p-0 m-auto" style="overflow-x:auto; background-color: #fafafa;">
          <div class="px-0 mx-0" style="width: max-content; background-color:#fafafa; display:flex; align-items: center; justify-content: start; gap: 2rem;">
            <div v-for="boton in menus" :key="boton.to">
              <RouterLink :to="boton.to">
                <Button
                  size="medium"
                  :style="ruta.fullPath === boton.to ? 'box-shadow: 0 4px 0 #ff6200; color:#000; font-weight:bold;' : ''"
                  class="text-md px-0 pt-2 pb-4 my-0 mx-0"
                  text
                  severity="secondary"
                  style="border-radius: 0;"
                >
                  <i class="mr-2" :class="boton.icon"></i>
                  {{ boton.name }}
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>  
  
      <div class="grid p-0 m-0">
        <div class="p-0" :class="store.visibleNotifications ? 'col-9' : 'col-12'">
          <RouterView />
        </div>
      </div>
  
      <Dialog v-model:visible="showDateDialog" modal header="Periodo" :style="{ width: '25rem' }">
        <div class="grid">
          <div class="col-12" style="display: flex; flex-wrap: wrap; gap:1rem;">
            <Button size="small" severity="help" style="flex-grow: 1; min-width: max-content;" label="Hoy" @click="setDateRange(0)" />
            <Button size="small" severity="warning" style="flex-grow: 1;" label="Ayer" @click="setDateRange(1)" />
            <Button size="small" severity="success" style="flex-grow: 1;" label="Últimos 7 días" @click="setDateRange(7)" />
            <Button size="small" severity="danger" style="flex-grow: 1;" label="Últimos 14 días" @click="setDateRange(14)" />
            <Button size="small" severity="info" style="flex-grow: 1;" label="Últimos 28 días" @click="setDateRange(28)" />
          </div>
  
          <div class="col-12" style="display: flex; flex-direction: column; position: relative;">
            <span style="font-weight: bold;" class="text-l">Desde</span>
            <div style="position: relative;">
              <Calendar showTime hourFormat="12" style="min-width: max-content; width: 100%;" v-model="TempStartDate" showWeek />
            </div>
          </div>
  
          <div class="col-12" style="display: flex; flex-direction: column; position: relative;">
            <span style="font-weight: bold;" class="text-l">Hasta</span>
            <div style="position: relative;">
              <Calendar showTime hourFormat="12" style="min-width: max-content; width: 100%;" v-model="TempEndDate" showWeek />
            </div>
          </div>
  
          <div class="col-12 p-0" style="display: flex; justify-content: center;">
            <div class="col-12" style="display: flex; justify-content: center;">
              <Button
          label="Aplicar"
          severity="help"
          @click="applyCustomDateRange"
        />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useReportesStore } from '@/store/reportes.js';
  import { URI } from '@/service/conection';
  import { fetchService } from '../../../service/utils/fetchService';
  
  const store = useReportesStore();
  const ruta = useRoute();
  const TempStartDate = ref(new Date());
  const TempEndDate = ref(new Date());
  const showDateDialog = ref(false);
  
  const menus = ref([
    { name: 'Resumen', to: '/reporte-ventas/order-sumary', icon: 'fa-solid fa-table' },
    { name: 'Valor ventas', to: '/reporte-ventas/valor-ventas', icon: 'fa-solid fa-dollar-sign' },
    { name: 'No. Ordenes', to: '/reporte-ventas/no-ordenes', icon: 'fa-solid fa-sort' },
    { name: 'Ticket promedio', to: '/reporte-ventas/ticket', icon: 'fa-solid fa-money-bill' },
    { name: 'Ordenes', to: '/reporte-ventas/ordenes', icon: 'fa-solid fa-table' },
    { name: 'Modificar ordenes', to: '/reporte-ventas/modificar-ordenes', icon: 'fa-solid fa-sync' }
  ]);
  
  function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
  function setDateRange(days) {
    const today = new Date();
    const tomorrow = new Date(today).setDate(today.getDate() + 1);
   
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - days);
    pastDate.setHours(10, 0, 0, 0);
  
    let end;
    if (days === 0) {
      end = new Date(tomorrow);
      end.setHours(4, 0, 0, 0);
    } else if (days === 1) {
      end = new Date(today);
      end.setHours(4, 0, 0, 0);
    } else {
      end = new Date(tomorrow);
      end.setHours(4, 0, 0, 0);
    }
    TempStartDate.value = pastDate;
    TempEndDate.value = end;
  
    store.setDateRange(TempStartDate.value, TempEndDate.value);
    showDateDialog.value = false;
    store.fetchSalesReport();
  }
  
  // Nueva función para aplicar el rango personalizado
  function applyCustomDateRange() {
    store.setDateRange(TempStartDate.value, TempEndDate.value);
    showDateDialog.value = false;
    store.fetchSalesReport();
  }
  
  onMounted(async () => {
    store.sites = await fetchService.get(`${URI}/sites`);
  });
  
  watch(
    () => store.order_status,
    (newValue, oldValue) => {
      console.log(`El estado de orden ha cambiado de ${oldValue} a ${newValue}`);
      store.fetchSalesReport();
    }
  );
  </script>
  
  <style scoped>
  .btn-ocultar {
    box-shadow: none;
    border: none !important;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all ease 0.3s;
  }
  
  .card-indicator {
    box-shadow: 0 0.5rem 0.5rem #00000020;
  }
  
  * {
    transition: 0.3s ease all;
  }
  </style>
  