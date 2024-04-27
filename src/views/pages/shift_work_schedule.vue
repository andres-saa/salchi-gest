<template>
          <Dialog v-model:visible="showUserDialog" modal style="width: 30rem">
        <h4>{{ selectedUser.name }}</h4>

        <div v-if="selectedUser" class="user-info" style="display: flex; flex-direction: column; align-items: center">
            <img
                class="shadow-3 "
                :src="`${URI}/read-product-image/300/employer-${selectedUser.dni}`"
                @error="onImageError(selectedUser.gender, $event)"
                alt="Foto del empleado"
                style="width: 100%;aspect-ratio: 1 / 1; border-radius: 0.5rem; object-fit: cover"
            />

            <div class="col-12 p-0 mt-4">
                
<div v-if="selectedUser.arrivalTime && selectedUser.departureTime">
    <p v-if="!selectedUser.rest" class=" p-0 my-1 "><b> Desde: </b>{{ new Date(selectedUser.arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
                <p v-if="!selectedUser.rest" class="p-0 my-1 "><b> Hasta: </b> {{ new Date(selectedUser.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
                <p v-else  class="p-0 my-1 text-xl" style="color: green;"> <b> Descansa </b> </p>
</div>
                <p class="p-0 my-1 "><b>Cargo:</b> {{ selectedUser.position }}</p>
                <p class="p-0 my-1 "><b>Telefono:</b> {{ selectedUser.phone }}</p>
                <p class="p-0 my-1 "><b>Contrato</b> {{ selectedUser.contract_type?.toLowerCase() }}</p>


            </div>
        </div>

        <template #footer>
            <Button label="Cerrar" @click="showUserDialog = false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="showDateRangeDialog" modal closable>
        <div class="">

            <div class="col-12 p-0 m-0 my-2">
                <Button class="col-12  p-1" severity="success"  label="Semana entrante" @click="setNextWeek"></Button>
            </div>
            <div class="col-12 p-0 m-0 my-2">
                <Button class="col-12  p-1" severity="secondary"  label="Dentro de 2 semanas" @click="setInTwoWeeks"></Button>
            </div>
            <div class="col-12 p-0 m-0 my-2">
                <Button class="col-12 p-1" severity="danger"  label="Esta semana" @click="setThisWeek"></Button>
            </div>
            <div class="col-12 p-0 m-0 my-2">
                <Button class="col-12  p-1" severity="help"  label="Semana pasada" @click="setLastWeek"></Button>
            </div>
            <div class="col-12 p-0 my-2">
                <Button class="col-12  p-1" severity="warning"  label="Este mes" @click="setThisMonth"></Button>
            </div>
            <div class="col-12 p-0 my-2">
                <Button class="col-12  p-1" severity="primary"  label="Mes pasado" @click="setLastMonth"></Button>
            </div>
        </div>

        <p class="col-12 m-0 p-0 py-2">Desde:</p>
        <Calendar class="col-12 m-0 p-0" v-model="tempStartDate" showIcon></Calendar>

        <p class="col-12 m-0 p-0 py-2">Hasta:</p>
        <Calendar class="col-12 m-0 p-0" v-model="tempEndDate" showIcon></Calendar>

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
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="() => (showDeleteDialog = false)" />
            <Button label="Sí" icon="pi pi-check" class="p-button" @click="deleteRecord" />
        </template>
    </Dialog>
    <Dialog v-model:visible="showNewDayDialog" style="width: 22rem" modal closeOnEscape @close="showNewDayDialog = false">
        <h3>Nueva semana</h3>

        <Calendar class="my-4" v-model="newWorkDayDate" showIcon></Calendar>

        <Dropdown class="col-12 p-0" disabled v-model="selectedSite" :options="sites" optionLabel="site_name" placeholder="Select a site"></Dropdown>
        <template #footer>
            <Button label="cancelar" @click="showNewDayDialog = false" class="p-button-danger" />
            <Button label="Agregar" @click="addNewWorkDay(newWorkDayDate)" class="p-button-success" />
        </template>
    </Dialog>

    <div style="margin-top: 6rem;" class="px-2 mx-0 col-12">
        <div class="col-12 p-0 m-0 mb-8">
            <div class="grid p-0 mx-auto">
                <div class="col-12 md:col-5 py-2" style="height: 4rem">
                    <Dropdown :disabled="!roles['Horarios de trabajo admin']?.includes(loginData?.rawUserData?.rol) && getUserId()!=1104" style="height: 100%" class="col-12 p-0 m-0" v-model="currentSite" :options="sites" optionLabel="site_name"></Dropdown>
                </div>
                <!-- <div class="col-3"> <Calendar class="col-12 p-0 m-0" v-model="start_date"></Calendar></div> -->
                <div class="col-12 md:col-5 py-2" style="height: 4rem"><InputText style="height: 100%" class="col-12 text-center m-0" readonly v-model="formattedDateRange" @click="openDateRangeDialog" /></div>

                <div class="col-12 md:col-2 py-2" style="display: flex; height: 4rem; justify-content: end"><Button severity="help" rounded class="mb-3" icon="pi pi-search" @click="fetchWorkDays" /></div>
            </div>
        </div>

        <div class="grid" style=" margin: auto;">
            <div class="col-2 p-0" style="height: 80vh;max-width: min-content; overflow-y: auto">
                <div class="p-0 text-sm" style="display: flex; justify-content: center">
                    <div style="display: flex; gap: 1rem; flex-direction: column" class="pb-3 m-auto">
                        <div v-for="user in users" :key="user.id" draggable="true" style="display: flex; flex-direction: column; align-items: center" @dragstart="handleDragStart(user)">
                            <img
                                @click="openUserDialog(user)"
                                class="shadow-2 p-1"
                                :src="`${URI}/read-product-image/96/employer-${user.dni}`"
                                alt="user.name"
                                @error="onImageError(user.gender, $event)"
                                style="width: 3rem; object-fit: cover; height: 3rem; border-radius: 50%"
                            />
                            <p class="my-0 py-0" style="min-width: max-content; font-weight: bold; text-transform: uppercase">
                                {{ user.name.split(' ').slice(0, 2).join(' ') }}
                            </p>
                            <span class="my-0 py-0" style="min-width: min-content; text-transform: uppercase; text-align: center">
                                {{ user.position }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" style="height: 80vh; overflow-y: auto">
                <div class="col-12 pb-6" style="">
                    <div style="display: flex; gap: 0rem; flex-direction: column">
                        <div class="p-0 m-0" v-for="workDay in workDays" :key="workDay.id" style="position: relative">
                            <div class="shadow-2" :style="{ 'background-color': getDayColor(workDay.date), color: 'white', 'border-radius': '0.5rem 0.5rem 0 0', display: 'flex', 'align-items': 'center', 'justify-content': 'space-beetwen' }">
                                <p class="py-0 px-4 text-center col-12 m-0 p-0 text" style="font-weight: bold; text-shadow: 0 0 3px black; text-transform: uppercase">
                                    {{ workDay.date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Bogota' }) }}
                                    <!-- {{ workDay.da }} -->
                                </p>
                            </div>
                            <div style="overflow-x: auto">
                                <Button style="position: absolute; right: -1rem; top: -1rem" icon="pi pi-trash text-2xl " class="p-button-rounded p-button-danger shadow-5" @click="confirmDeleteWorkDay(workDay.id)"></Button>

                                <div style="min-width: max-content">
                                    <div
                                        class="shadow-5 p-3 m-0 p-4"
                                        style="border-radius: 0 0 0.5rem 0.5rem; display: flex; overflow-x: auto; flex-wrap: wrap; align-items: flex-start; gap: 2rem; justify-content: start; padding: 10px"
                                        @dragover.prevent
                                        @drop="handleDrop(workDay)"
                                    >
                                        <div
                                            class="shadow-2 p-2"
                                            v-for="user in workDay.users"
                                            :key="user.id"
                                            style="text-align: center; width: 7rem; aspect-ratio: 1 / 1; background-color: white; color: black; position: relative; border-radius: 0.5rem"
                                            :style="user.rest ? 'outline:2px solid green;  ' : 'background-color: white;'"
                                        >
                                            <p class="py-0 my-0 text-sm" style="min-width: max-content; font-weight: bold; text-transform: uppercase">
                                                {{ user.name.split(' ').slice(0, 1).join(' ') }}
                                            </p>
                                            <!-- <p class="py-0 my-0 text-sm" style="min-width: max-content; text-transform: uppercase">
                                                {{ user.position.slice(0, 15) }}
                                            </p> -->
                                            <img
                                                class="shadow-2 p-1"
                                                @click="openUserDialog(user)"
                                                :src="`${URI}/read-product-image/96/employer-${user.dni}`"
                                                alt="user.name"
                                                @error="onImageError(user.gender, $event)"
                                                style="width: 3rem; object-fit: cover; height: 3rem; border-radius: 50%"
                                            />
                                            <div class="text-sm" v-if="!user.rest">
                                                <!-- <p class="py-0 my-0">De: {{ new Date(user.arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
                                                <p class="py-0 my-0">A: {{ new Date(user.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}</p>
                                                <p class="py-0 my-0">por: {{ user.hoursWorked.toFixed(2) }} hrs</p> -->
                                                <!-- <p class="py-0 my-0">
                                                    <b>{{ user.contract_type?.toLowerCase().slice(0, 13) }}</b>
                                                    
                                                </p> -->

                                                <p class="py-0 my-0 text-sm text-center">
                                                    De: {{ new Date(user.arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }} A:
                                                    {{ new Date(user.departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) }}
                                                </p>
                                                <!-- {{ user }} -->
                                            </div>

                                            <div class="text-sm" v-else>
                                                <!-- <p class="py-0 my-0">
                                                    <b style="color: green">.</b>
                                                </p>
                                                <p class="py-0 my-0">
                                                    <b style="color: green">.</b>
                                                </p> -->
                                                <p class="py-0 my-0">
                                                    <b>{{ user.contract_type?.toLowerCase().slice(0, 13) }}</b>
                                                </p>
                                                <p class="py-0 my-0">
                                                    <b style="color: green">DESCANSA</b>
                                                </p>
                                            </div>

                                            <Button
                                                style="position: absolute; width: 1.5rem; height: 1.5rem; top: -0.5rem; right: -0.5rem; font-weight: bold"
                                                icon="pi pi-times fw-bold"
                                                class="p-button-rounded p-button-danger p-0"
                                                @click="confirmDelete(user.id)"
                                            ></Button>

                                            <!-- <div size="small" style="background-color: red;width: 2rem;height: 2rem; position: absolute; bottom: -1rem; right: -1rem" icon="pi pi-trash text-2xl" class="p-button-rounded p-button-danger shadow-3" @click="confirmDelete(user.id)"></div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    <Dialog v-model:visible="showCalendar" style="width: 20rem" :modal="true">
            <template #header> . </template>

            <h5 class="" style="text-transform: uppercase">Cuantas horas trabajo {{ currentUser.name }}?</h5>

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
                <div class="col-12 p-0" style="display: flex; justify-content: space-between">
                    <Button severity="help" label="Descansa" @click="saveRest" />

                    <Button severity="success" label="Aceptar" @click="saveTimes" />
                </div>
            </template>
        </Dialog>
</template>
  
    <script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { URI } from '@/service/conection.js';
// Asegúrate de que userService está correctamente importado y configurado
import { userService } from '@/service/userService.js';
import { useReportesStore } from '../../store/reportes';
import { siteService } from '../../service/siteService.js';
import { loginStore } from '../../store/user';
import { roles } from '../../service/roles';
import { getUserId } from '../../service/valoresReactivosCompartidos';
import { subDays, startOfWeek, endOfWeek, subMonths, startOfMonth, endOfMonth, format, setWeek } from 'date-fns';

const showUserDialog = ref(false);
const selectedUser = ref(null);

const openUserDialog = (user) => {
    selectedUser.value = user;
    showUserDialog.value = true;
};

const showDateRangeDialog = ref(false);
const tempStartDate = ref(new Date());
const tempEndDate = ref(new Date());

const loginData = loginStore();
const store = useReportesStore();

const showDeleteDialog = ref(false);
const recordToDelete = ref(null);
const currentSite = ref();
const sites = ref();
const start_date = ref();
const end_date = ref();
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

const applyDateRange = async() => {
    start_date.value = tempStartDate.value;
    end_date.value = tempEndDate.value;
    showDateRangeDialog.value = false;
    await addNewWorkDay(start_date.value);

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
    store.setLoading(true, 'borrando');

    if (!recordToDelete.value) return;

    // Llamada a la API para eliminar el registro
    const response = await fetch(`${URI}/shift_work_records/${recordToDelete.value}`, { method: 'DELETE' });
    if (response.ok) {
        // Después de borrar, actualiza la vista con los días de trabajo actualizados
        fetchWorkDays();
        store.setLoading(false, 'borrando');
    } else {
        console.error('Error al eliminar el registro:', await response.text());
        alert('Hubo un error al eliminar el registro.');
        store.setLoading(false, 'borrando');
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

    store.setLoading(true, 'borrando');
    const response = await fetch(`${URI}/shift_work_days/${workDayToDelete.value}`, { method: 'DELETE' });
    if (response.ok) {
        // Eliminar el workDay del array workDays para actualizar la UI
        workDays.value = workDays.value.filter((workDay) => workDay.id !== workDayToDelete.value);
        store.setLoading(false, 'borrando');
    } else {
        alert('Hubo un error al eliminar el día de trabajo.');
        store.setLoading(false, 'borrando');
    }
};

const dayColors = {
    Monday: '#22c55e',
    Tuesday: '#F59E0B',
    Wednesday: '#EF4444',
    Thursday: '#3B82F6',
    Friday: '#A855F7', // Corregido para quitar un # adicional
    Saturday: '#10B981',
    Sunday: '#EC4899'
};

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
    currentSite.value = sites.value.filter((s) => s.site_id == loginData.rawUserData.site_id)[0];
    selectedSite.value = sites.value.filter((s) => s.site_id == loginData.rawUserData.site_id)[0];

    const tempUsers = await userService.getUsersBySiteId(loginData.rawUserData.site_id);
    users.value = tempUsers.filter((u) => u.status == 'activo');

    // Obtiene los días de trabajo con sus registros...
    const workDaysResponse = await fetch(`${URI}/shift_work_days_with_records`);

    const now = new Date();
    await addNewWorkDay(now);
    

    // Obtiene los días de trabajo con sus registros para la semana actual...
    await fetchWorkDays();
});



const setNextWeek = async() => {
    const now = new Date();
    const nextWeekStartDate = new Date(now.setDate(now.getDate() + (7 - now.getDay()) + 1));
    tempStartDate.value = startOfWeek(nextWeekStartDate, { weekStartsOn: 1 });
    tempEndDate.value = endOfWeek(nextWeekStartDate, { weekStartsOn: 1 });

    applyDateRange();
};

const setInTwoWeeks = async() => {
    const now = new Date();
    const inTwoWeeksStartDate = new Date(now.setDate(now.getDate() + (7 - now.getDay()) + 8));
    tempStartDate.value = startOfWeek(inTwoWeeksStartDate, { weekStartsOn: 1 });
    tempEndDate.value = endOfWeek(inTwoWeeksStartDate, { weekStartsOn: 1 });

    applyDateRange();
};




watch(currentSite, async (newval,oldVal) => {

    if (getUserId() == 1104 && (currentSite.value.site_name?.toLowerCase() != 'kennedy' && currentSite.value.site_name?.toLowerCase() != 'montes' ) ){
        alert('No tienes permiso para administrar esta sede')
        currentSite.value = oldVal
        return
    } else {
    const tempUsers = await userService.getUsersBySiteId(newval.site_id);
    users.value = tempUsers.filter((u) => u.status == 'activo');
    selectedSite.value = newval;
    setThisWeek();
    fetchWorkDays();
    const now = new Date();
    await addNewWorkDay(now);

   
    }

    // alert('cambio')
});

const fetchWorkDays = async () => {

    if (getUserId() == 1104 && (currentSite.value.site_name?.toLowerCase() != 'kennedy' && currentSite.value.site_name?.toLowerCase() != 'montes' ) ){
        // alert('not')
        
        return
        

    }


    store.setLoading(true, 'cargando horario');
    if (!currentSite.value || !start_date.value || !end_date.value) {
        alert('No olvide seleccionar una sede y un rango de fechas');
        return;
    }

    const startDateFormatted = start_date.value.toISOString().split('T')[0];
    const endDateFormatted = end_date.value.toISOString().split('T')[0];

    const response = await fetch(`${URI}/shift_filtered_work_days?site_id=${currentSite.value.site_id}&start_date=${startDateFormatted}&end_date=${endDateFormatted}`);
    if (response.ok) {
        store.setLoading(false, 'cargando horario');

        const fetchedWorkDays = await response.json();
        workDays.value = fetchedWorkDays.map((workDay) => {
            // Asegurándonos de que workDay.date es un objeto Date
            workDay.date = new Date(workDay.date);
            workDay.date.setDate(workDay.date.getDate() + 1);

            workDay.users = workDay.records
                .map((record) => {
                    let user = users.value.find((u) => u.id === record.employer_id);
                    if (user) {
                        let userCopy = { ...user };

                        // Combinar la fecha del día de trabajo con las horas de inicio y fin
                        const startTime = new Date(`${workDay.date.toISOString().split('T')[0]}T${record.start_time}`);
                        const endTime = new Date(`${workDay.date.toISOString().split('T')[0]}T${record.end_time}`);

                        userCopy.arrivalTime = startTime;
                        userCopy.departureTime = endTime;
                        userCopy.hoursWorked = (endTime - startTime) / 3600000;
                        userCopy.rest = record.rest;

                        return userCopy;
                    }
                    return null;
                })
                .filter((u) => u != null);
            store.setLoading(false, 'cargando horario');

            return workDay;
        });
    } else {
        store.setLoading(false, 'cargando horario');

        alert('Failed to fetch workdays');
    }
};

async function addNewWorkDay(date) {
    if (!selectedSite.value) return;

    let dateInUTC = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];

    const response = await fetch(`${URI}/shift_work_days`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: dateInUTC, site_id: selectedSite.value.site_id })
    });

    if (response.ok) {
        // Opcional: Actualizar la interfaz con el nuevo día laboral
        fetchWorkDays();
    } else {
        // Manejo de error
        console.error('Error al agregar un nuevo día laboral', await response.text());
    }
}

const handleDragStart = (user) => {
    currentUser.value = user;
};

const handleDrop = (day) => {
    currentDay.value = day;
    showCalendar.value = true;
};

const saveTimes = async () => {
    showCalendar.value = false;
    store.setLoading(true, 'cargando');
    if (!currentUser.value || !currentDay.value) {
        return;
    }

   

    // Formateando las horas para enviar solo la parte de la hora
    let formattedStartTime = arrivalTime.value.toISOString().split('T')[1].slice(0, 8);
    let formattedEndTime = departureTime.value.toISOString().split('T')[1].slice(0, 8);

    const record = {
        employer_id: currentUser.value.id,
        work_day_id: currentDay.value.id, // Añade el work_day_id aquí
        start_time: formattedStartTime,
        end_time: formattedEndTime
    };

    // Llamada a la API para crear el registro
    await fetch(`${URI}/shift_work_records`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
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
    store.setLoading(false, 'cargando');
};

const saveRest = async () => {
    showCalendar.value = false;
    store.setLoading(true, 'cargando');
    if (!currentUser.value || !currentDay.value) {
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
        rest: true
    };

    // Llamada a la API para crear el registro
    await fetch(`${URI}/shift_work_records`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    });

    const newUser = { ...currentUser.value };
    // Actualiza la interfaz de usuario con los nuevos datos
    newUser.arrivalTime = arrivalTime.value;
    newUser.departureTime = departureTime.value;
    newUser.hoursWorked = (departureTime.value - arrivalTime.value) / 3600000;
    newUser.rest = true;
    currentDay.value.users.push(newUser);

    // Restablece las variables para limpiar el formulario
    showCalendar.value = false;
    currentUser.value = null;
    currentDay.value = null;
    store.setLoading(false, 'cargando');
};
</script>
  
    <style scoped>
img {
    object-fit: cover;
    background-color: white;
}
/* Añade estilos según sea necesario */
</style>
  