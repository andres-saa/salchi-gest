  <template>




<Dialog v-model:visible="showUserDialog" modal style="width: 20rem;">
    <h3>{{ selectedUser.name }}</h3>

  
  <div v-if="selectedUser" class="user-info" style="display: flex; flex-direction: column; align-items: center;">
    <img class="shadow-3 p-1" :src="`${URI}/read-product-image/300/employer-${selectedUser.dni}`" @error="onImageError(selectedUser.gender, $event)" alt="Foto del empleado" style="width: 100px; height: 100px; border-radius: 50%;object-fit: cover;">
    

    <div class="col-12">
      <p> <b>Nombre:</b> {{ selectedUser.name }}</p>
    <p><b>Cargo:</b>  {{ selectedUser.position }}</p>
    <p><b>Telefono:</b>  {{ selectedUser.phone }}</p>
    <p> <b>Contrato</b>  {{ selectedUser.contract_type?.toLowerCase() }}</p>
    <!-- <p>Hora de Llegada: {{ new Date(selectedUser.arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
    <p>Hora de Salida: {{ new Date(selectedUser.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
    <p>Horas Trabajadas: {{ selectedUser.hoursWorked.toFixed(2) }} hrs</p>
    <p>Tipo de Contrato: {{ selectedUser.contract_type?.toLowerCase() }}</p> -->
    </div>
    

  </div>
  
  <template #footer>
    <Button label="Cerrar" @click="showUserDialog = false" />
  </template>
</Dialog>




<Dialog v-model:visible="showDateRangeDialog" modal closable>
    

    <div class=""> 
      <div class="col-12 p-0 m-0">
        <Button class="col-12 " severity="danger" text label="Esta semana" @click="setThisWeek"></Button>
      </div>
      <div class="col-12 p-0 m-0">
        <Button class=" col-12  " severity="help" text label="Semana pasada" @click="setLastWeek"></Button>
      </div>
      <div class="col-12 p-0">
        <Button class="col-12" severity="warning" text label="Este mes" @click="setThisMonth"></Button>
      </div>
      <div class="col-12 p-0">
        <Button class="col-12" severity="primary" text label="Mes pasado" @click="setLastMonth"></Button>
      </div>
    </div>

    <p>Desde:</p>
    <Calendar class="col-12" v-model="tempStartDate" showIcon></Calendar>

    <p>Hasta:</p>
    <Calendar class="col-12" v-model="tempEndDate" showIcon></Calendar>

 

    <template #footer>
      <Button severity="danger" label="Cancelar" @click="closeDateRangeDialog" class="p-button-text" />
      <Button severity="success" label="Aceptar" @click="applyDateRange" />
    </template>
  </Dialog>

<!-- {{ roles['Horaios de trabajo admin'] }}  -->

<!-- {{ loginData }} -->

<Dialog v-model:visible="showDeleteWorkDayDialog" modal style="width: 350px" header="Confirmar eliminación" :closable="false">
  <div class="confirmation-content">
    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"></i>
    <span>¿Estás seguro de que quieres eliminar este día de trabajo y todos sus registros?</span>
  </div>
  <template #footer>
    <Button label="No" icon="pi pi-times" class="p-button-text" @click="showDeleteWorkDayDialog = false" />
    <Button label="Sí" icon="pi pi-check" class="p-button" @click="deleteWorkDay" />
  </template>
</Dialog>


<Dialog v-model:visible="showDeleteDialog" modal style="width: 350px" header="Confirmar eliminación" :closable="false">
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"></i>
      <span>¿Estás seguro de que quieres eliminar este registro?</span>
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" class="p-button-text" @click="() => showDeleteDialog = false" />
      <Button label="Sí" icon="pi pi-check" class="p-button" @click="deleteRecord" />
    </template>
  </Dialog>


<div style="" class="p-0 m-0"  >

  <Dialog v-model:visible="showNewDayDialog" style="width: 22rem" modal closeOnEscape  @close="showNewDayDialog = false">

      <h3>Nuevo dia</h3>

    <Calendar class="my-4" v-model="newWorkDayDate" showIcon></Calendar>

    <Dropdown class="col-12 p-0" disabled v-model="selectedSite" :options="sites" optionLabel="site_name" placeholder="Select a site"></Dropdown>
    <template #footer>
      <Button label="cancelar" @click="showNewDayDialog = false" class="p-button-danger" />
      <Button label="Agregar" @click="addNewWorkDay" class="p-button-success" />
    </template>
  </Dialog>


<div class="col-12 p-0 m-0">


  <div class="grid p-0 mx-auto " style=" max-width: 700px;">


    <div class="col-12 md:col-5  py-2" style="height: 4rem"> <Dropdown  :disabled="!roles['Horarios de trabajo admin']?.includes(loginData?.rawUserData?.rol)" style="height: 100%;" class="col-12 p-0 m-0" v-model="currentSite" :options="sites" optionLabel="site_name" ></Dropdown></div>
      <!-- <div class="col-3"> <Calendar class="col-12 p-0 m-0" v-model="start_date"></Calendar></div> -->
      <div class="col-12 md:col-5  py-2" style="height: 4rem"> <InputText style="height: 100%;" class="col-12 text-center m-0" readonly v-model="formattedDateRange" @click="openDateRangeDialog" /> </div>
  
      <div class="col-12 md:col-2  py-2 md:mb-8 " style="display: flex;height: 4rem; justify-content: end;"><Button severity="help" rounded class="mb-3" icon="pi pi-search" @click="fetchWorkDays" /></div>
   
  
   </div>


</div>









<p class="p-3 text-2xl text-center" style="font-weight: bold;color: black;text-transform: uppercase;"> <i class="fa-solid fa-folder-open"></i>
        Empleados de {{ currentSite?.site_name }}</p>
        


<div class="col-12 p-0" style="display: flex; justify-content: center;">
<div style="display: flex; gap: 1rem; overflow-x: auto;" class="pb-3 m-auto">
  <div v-for="user in users" :key="user.id" draggable="true"
      style="display: flex; flex-direction: column; align-items: center; "
      @dragstart="handleDragStart(user)">
      <img @click="openUserDialog(user)" class="shadow-4 mb-3 p-1" :src="`${URI}/read-product-image/96/employer-${user.dni}`" alt="user.name"
 @error="onImageError(user.gender, $event)"
 style="width: 4rem;object-fit: cover; height: 4rem; border-radius: 50%;" />
    <p class="my-0 py-0" style="min-width: max-content; font-weight: bold;text-transform: uppercase;">
      {{ user.name.split(' ').slice(0, 2).join(' ') }}
    </p>
    <span class="my-0 py-0" style="min-width: min-content ;text-transform: uppercase;text-align: center;">
      {{ user.position }}
    </span>
    
  </div>
</div>
</div>

<p  class="p-3 text-2xl text-center my-2" style="font-weight: bold;color: black;text-transform: uppercase;"> <i class="fa-solid fa-folder-open"></i>
        Calendario de trabajo {{ currentSite?.site_name }}</p>





<div class="col-12 p-0" style="display: flex;justify-content: end;">
  <Button class="mb-3" icon="pi pi-plus" severity="info" label="Nuevo día" @click="showNewDayDialog = true" />

</div>

<div  class="col-12 pb-6" style="overflow-x: auto;">
<div style="display: flex; gap: 3rem;">
  <div class="" v-for="workDay in workDays" :key="workDay.id" style="position: relative;">

    <Button style="position: absolute;right: -1rem;top: -1rem;"  icon="pi pi-trash text-2xl " class="p-button-rounded p-button-danger shadow-5"  @click="confirmDeleteWorkDay(workDay.id)"></Button>

  
    <div style="max-width: 39rem; min-width: min-content; background-color: #F4F1D6">
      
      
      <div class="p-2 shadow-4" :style="{ 'background-color': getDayColor(workDay.date), color: 'white', 'border-radius': '0.5rem 0.5rem 0 0', 'display': 'flex', 'align-items': 'center', 'justify-content': 'space-beetwen' }">

        
        <p  class="py-0 px-4 text-center col-12 text-xl" style="font-weight: bold; text-shadow: 0 0 3px black;text-transform: uppercase;">
          {{ workDay.date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Bogota' }) }}
          <!-- {{ workDay.da }} -->
</p>
      </div>

      <div class="shadow-5 p-5" style="min-height: 15rem; border-radius: 0 0 0.5rem 0.5rem; display: flex; flex-wrap: wrap; align-items: flex-start;gap: 2rem; justify-content: space-around; padding: 10px;"
          @dragover.prevent @drop="handleDrop(workDay)">
        <div class="shadow-4 p-3 " v-for="user in workDay.users" :key="user.id" style="text-align: center;width: 10rem; aspect-ratio: 1  / 1; background-color: white;position:relative; border-radius: 0.5rem">

          <p class="py-0 my-0" style="min-width: max-content; font-weight: bold;text-transform: uppercase;">
            {{ user.name.split(' ').slice(0, 1).join(' ') }}
          </p>
          <p class="py-0 my-0 text-sm" style="min-width: max-content;text-transform: uppercase;">
            {{ user.position.slice(0,15 )}}
          </p>
          <img class="shadow-4 mb-3 p-1" @click="openUserDialog(user)" :src="`${URI}/read-product-image/96/employer-${user.dni}`" alt="user.name"
 @error="onImageError(user.gender, $event)"
 style="width: 4rem;object-fit: cover; height: 4rem; border-radius: 50%;" />
          <p class="py-0 my-0">De: {{ new Date(user.arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
          <p class="py-0 my-0">A:  {{ new Date(user.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
          <p class="py-0 my-0">por: {{ user.hoursWorked.toFixed(2) }} hrs</p>
          <p class="py-0 my-0"><b>{{ user.contract_type?.toLowerCase().slice(0,13) }}</b></p>
          <Button  size="small" style="position: absolute;top:-1rem;right: -1rem; " icon="pi pi-trash text-2xl" class="p-button-rounded p-button-danger shadow-3" @click="confirmDelete(user.id)"></Button>

        </div>
      </div>
    </div>
  </div>
</div>
</div>





















<Dialog v-model:visible="showCalendar"  style="width: 20rem" :modal="true" >
<template #header>
  .
</template>

<h5 class="" style="text-transform: uppercase;">Cuantas horas trabajo {{ currentUser.name }}?</h5>


<p>Hora de llegada:</p>
<Calendar v-model="arrivalTime" showIcon iconDisplay="input" timeOnly hourFormat="12">
  <template #inputicon="{ clickCallback }">
    <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
  </template>
</Calendar>

<p>Hora de salida:</p>
<Calendar v-model="departureTime" showIcon iconDisplay="input" timeOnly hourFormat="12">
  <template #inputicon="{ clickCallback }">
    <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
  </template>
</Calendar>

<template #footer>
  <Button label="Aceptar" @click="saveTimes" />
</template>
</Dialog>
</div>


  </template>

  <script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import { URI } from '@/service/conection.js';
  // Asegúrate de que userService está correctamente importado y configurado
  import { userService } from '@/service/userService.js';
  import { useReportesStore } from '../../store/reportes';
  import {siteService} from '../../service/siteService.js'
  import { loginStore } from '../../store/user';
  import { roles } from '../../service/roles';
  
  import { 
  subDays, 
  startOfWeek, 
  endOfWeek, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  format 
} from 'date-fns';
  
  

const showUserDialog = ref(false);
const selectedUser = ref(null);

const openUserDialog = (user) => {
  selectedUser.value = user;
  showUserDialog.value = true;
};
  
  const showDateRangeDialog = ref(false);
  const tempStartDate = ref(new Date());
  const tempEndDate = ref(new Date());


  
  
  const loginData = loginStore()
  const store = useReportesStore()

  const showDeleteDialog = ref(false);
  const recordToDelete = ref(null);
  const currentSite = ref()
  const sites = ref()
  const start_date = ref()
  const end_date = ref()
  const showCalendar = ref(false);
  const currentUser = ref(null);
  const currentDay = ref(null);
  const arrivalTime = ref(new Date());
  const departureTime = ref(new Date());











const formattedDateRange = computed(() => {
  if (!start_date.value || !end_date.value) return '';
  return `${format(start_date.value, 'dd/MM/yyyy')} - ${format(end_date.value, 'dd/MM/yyyy')}`;
});

const openDateRangeDialog = () => {
  tempStartDate.value = start_date.value || new Date();
  tempEndDate.value = end_date.value || new Date();
  showDateRangeDialog.value = true;
};

const closeDateRangeDialog = () => {
  showDateRangeDialog.value = false;
};

const applyDateRange = () => {
  start_date.value = tempStartDate.value;
  end_date.value = tempEndDate.value;
  showDateRangeDialog.value = false;
  fetchWorkDays(); // Llama a la función que realiza la búsqueda.
};

const setThisWeek = () => {
  const now = new Date();
  tempStartDate.value = startOfWeek(now, { weekStartsOn: 1 });
  tempEndDate.value = endOfWeek(now, { weekStartsOn: 1 });
  applyDateRange(); // Llama a la función que aplica el rango y cierra el diálogo.
};

const setLastWeek = () => {
  const now = startOfWeek(new Date(), { weekStartsOn: 1 });
  tempStartDate.value = subDays(now, 7);
  tempEndDate.value = endOfWeek(tempStartDate.value, { weekStartsOn: 1 });
  applyDateRange(); // Llama a la función que aplica el rango y cierra el diálogo.
};



const setThisMonth = () => {
  const now = new Date();
  tempStartDate.value = startOfMonth(now);
  tempEndDate.value = endOfMonth(now);
  applyDateRange(); // Aplica el rango y cierra el diálogo.
};

const setLastMonth = () => {
  const now = new Date();
  tempStartDate.value = startOfMonth(subMonths(now, 1));
  tempEndDate.value = endOfMonth(subMonths(now, 1));
  applyDateRange(); // Aplica el rango y cierra el diálogo.
};























































  const confirmDelete = (recordId) => {
    recordToDelete.value = recordId;
    showDeleteDialog.value = true;
  };
  // Importa los componentes de PrimeVue que estás utilizando
  


  const deleteRecord = async () => {
  showDeleteDialog.value = false;
  store.setLoading(true,'borrando');

  if (!recordToDelete.value) return;
  
  // Llamada a la API para eliminar el registro
  const response = await fetch(`${URI}/work_records/${recordToDelete.value}`, { method: 'DELETE' });
  if (response.ok) {
    // Después de borrar, actualiza la vista con los días de trabajo actualizados
    fetchWorkDays();
    store.setLoading(false,'borrando');
  } else {
    console.error('Error al eliminar el registro:', await response.text());
    alert('Hubo un error al eliminar el registro.');
    store.setLoading(false,'borrando');
  }

  recordToDelete.value = null;
};




const showDeleteWorkDayDialog = ref(false);
const workDayToDelete = ref(null);

const confirmDeleteWorkDay = (workDayId) => {
  workDayToDelete.value = workDayId;
  showDeleteWorkDayDialog.value = true;
};

const deleteWorkDay = async () => {
  showDeleteWorkDayDialog.value = false;

  if (!workDayToDelete.value) return;

  store.setLoading(true,'borrando')
  const response = await fetch(`${URI}/work_days/${workDayToDelete.value}`, { method: 'DELETE' });
  if (response.ok) {
    // Eliminar el workDay del array workDays para actualizar la UI
    workDays.value = workDays.value.filter(workDay => workDay.id !== workDayToDelete.value);
    store.setLoading(false,'borrando')

  } else {
    alert('Hubo un error al eliminar el día de trabajo.');
    store.setLoading(false,'borrando')

  }
};





const dayColors = {
    "Monday": "#22c55e",
    "Tuesday": "#F59E0B",
    "Wednesday": "#EF4444",
    "Thursday": "#3B82F6",
    "Friday": "#A855F7", // Corregido para quitar un # adicional
    "Saturday": "#10B981",
    "Sunday": "#EC4899"
} 


const getDayColor = (date) => {
    if (!(date instanceof Date)) {
        console.error('getDayColor: date is not a Date object', date);
        // Provide a fallback or handle the error appropriately
        return '#FFFFFF'; // Return a default color if not a Date
    }
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return dayColors[dayOfWeek];
};

  const users = ref([]);
  const workDays = ref([]);

  const onImageError = (gender, event) => {
    const genderImages = {
        masculino: '/images/male-avatar.png',
        femenino: '/images/female-avatar.png',
        default: '/images/who.png'
    };

    const genderKey = gender?.trim().toLowerCase();
    event.target.src = genderImages[genderKey] || genderImages.default;
};


const selectedSite = ref(null);
const showNewDayDialog = ref(false);
const newWorkDayDate = ref(new Date());

onMounted(async () => {
  // Carga inicial de sitios y usuarios...
  sites.value = await siteService.getSites();
  currentSite.value = sites.value.filter(s => s.site_id == loginData.rawUserData.site_id)[0];
  selectedSite.value = sites.value.filter(s => s.site_id == loginData.rawUserData.site_id)[0];
  users.value = await userService.getUsersBySiteId(loginData.rawUserData.site_id);

  // Obtiene los días de trabajo con sus registros...
  const workDaysResponse = await fetch(`${URI}/work_days_with_records`);


});



watch(currentSite, async( newval) => {
  users.value = await userService.getUsersBySiteId(newval.site_id);
  selectedSite.value = newval
  // alert('cambio')

})



const fetchWorkDays = async () => {

  store.setLoading(true, 'cargando horario')
    if (!currentSite.value || !start_date.value || !end_date.value) {
        alert('Please select a site and date range.');
        return;
    }

    const startDateFormatted = start_date.value.toISOString().split('T')[0];
    const endDateFormatted = end_date.value.toISOString().split('T')[0];

    const response = await fetch(`${URI}/filtered_work_days?site_id=${currentSite.value.site_id}&start_date=${startDateFormatted}&end_date=${endDateFormatted}`);
    if (response.ok) {
      store.setLoading(false, 'cargando horario')

        const fetchedWorkDays = await response.json();
        workDays.value = fetchedWorkDays.map(workDay => {
            // Asegurándonos de que workDay.date es un objeto Date
            workDay.date = new Date(workDay.date);
            workDay.date.setDate(workDay.date.getDate()+1)

            workDay.users = workDay.records.map(record => {
                let user = users.value.find(u => u.id === record.employer_id);
                if (user) {
                    let userCopy = { ...user };

                    // Combinar la fecha del día de trabajo con las horas de inicio y fin
                    const startTime = new Date(`${workDay.date.toISOString().split('T')[0]}T${record.start_time}`);
                    const endTime = new Date(`${workDay.date.toISOString().split('T')[0]}T${record.end_time}`);

                    userCopy.arrivalTime = startTime;
                    userCopy.departureTime = endTime;
                    userCopy.hoursWorked = (endTime - startTime) / 3600000;

                    return userCopy;
                }
                return null;
            }).filter(u => u != null);
            store.setLoading(false, 'cargando horario')

            return workDay;

        });
    } else {
      store.setLoading(false, 'cargando horario')

        alert('Failed to fetch workdays');
    }
};




const addNewWorkDay = async () => {
  showNewDayDialog.value = false;

  store.setLoading(true, 'guardando');
  if (!selectedSite.value || !newWorkDayDate.value) {
    alert('Please select a site and date.');
    return;
  }

  let date = new Date(newWorkDayDate.value.getTime());
  const dateInUTC = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

  const response = await fetch(`${URI}/work_days`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: dateInUTC, site_id: selectedSite.value.site_id }),
  });

  if (response.ok) {
    const newWorkDay = await response.json();
    newWorkDay.date = new Date(newWorkDay.date);
    newWorkDay.date.setDate(newWorkDay.date.getDate() + 1);
    store.setLoading(false, 'guardando');
    // workDays.value.push(newWorkDay);
    fetchWorkDays();
  } else {
    // Handling the specific error when a workday is already registered
    const errorResponse = await response.json();
    if (errorResponse.detail && errorResponse.detail === "El día con el mismo site_id ya está registrado.") {
      alert("Este dia ya esta registrado para esta sede");
    } else {
      alert('Failed to add new workday');
    }
    store.setLoading(false, 'guardando');
  }
};





  const handleDragStart = (user) => {
    currentUser.value = user;
  };

  const handleDrop = (day) => {
    currentDay.value = day;
    showCalendar.value = true;
  };

  const saveTimes = async () => {
    showCalendar.value = false;
    store.setLoading(true,'cargando')
    if (!currentUser.value || !currentDay.value) {
      return;
    }

    if (arrivalTime.value.getTime() >= departureTime.value.getTime()) {
      alert('La hora de llegada no puede ser mayor o igual a la hora de salida.');
      store.setLoading(false,'cargando')
      showCalendar.value = true;


      return;
    }

    // Formateando las horas para enviar solo la parte de la hora
    let formattedStartTime = arrivalTime.value.toISOString().split('T')[1].slice(0, 8);
    let formattedEndTime = departureTime.value.toISOString().split('T')[1].slice(0, 8);

    const record = {
      employer_id: currentUser.value.id,
      work_day_id: currentDay.value.id, // Añade el work_day_id aquí
      start_time: formattedStartTime,
      end_time: formattedEndTime,
    };

    // Llamada a la API para crear el registro
    await fetch(`${URI}/work_records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });

    // Actualiza la interfaz de usuario con los nuevos datos
    currentUser.value.arrivalTime = arrivalTime.value;
    currentUser.value.departureTime = departureTime.value;
    currentUser.value.hoursWorked = (departureTime.value - arrivalTime.value) / 3600000;
    currentDay.value.users.push(currentUser.value);

    // Restablece las variables para limpiar el formulario
    showCalendar.value = false;
    currentUser.value = null;
    currentDay.value = null;
    store.setLoading(false,'cargando')

  };


  </script>

  <style scoped>
  img{
    object-fit: cover
  }
  /* Añade estilos según sea necesario */
  </style>
