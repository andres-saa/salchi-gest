<template>
<!-- 
    <Loading v-if="guardando" tittle="guardando"></Loading>
    <Loading v-if="cargando" tittle="cargando horario"></Loading> -->

    <!-- <p class="text-center my-6 text-4xl" style="font-weight: bold;"> Horario</p> -->
    <!-- {{ horario }} -->

    <!-- {{ horario }} -->
    <div class=" p-0 " style=" border-radius: 1rem; background-color: red;">
        <!-- <Button @click="enableEditing" size="small" class="m-3" outlined style="font-weight: bold;border-radius: 0.5rem;">Modificar</Button> -->
        <DataTable stripedRowss ref="dt" class="" :value="horario" dataKey="id" style="border: 1rem;overflow: hidden;" :rows="7"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} scheldules" responsiveLayout="scroll"
            scrollable >


            <!-- <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen></Column> -->

            <Column  style="max-width: 3rem;" class="p-0" field="day_of_week" header="Dia" 
            headerStyle="width:1rem; min-width:1rem;">
                <template #body="scheldule">
                    
                    <span class="m-0">{{ dias[scheldule.data.day_of_week - 1] }}</span>

                </template>
            </Column>

            



            <Column class="p-0" field="opening_time" header="Abre" 
        headerStyle="width:2rem; min-width:2rem;">
    <template #body="scheldule">
        <span class="p-column-title">Code</span>
        <Calendar class="p-0" :disabled="!isEditing" hourFormat="12" timeOnly v-model="scheldule.data.opening_time"></Calendar>
    </template>
</Column>

<Column class="p-1" field="closing_time" header="Cierra" 
        headerStyle="width:2rem; min-width:2rem;">
    <template #body="scheldule">
        <span class="p-column-title">Code</span>
        <Calendar :disabled="!isEditing" hourFormat="12" timeOnly v-model="scheldule.data.closing_time"></Calendar>
    </template>
</Column>





        </DataTable>
     

    </div>
    <div  class="col-12 px-1" style="display: flex;position: relative;background-color: ; align-items: center;gap: 1rem; justify-content: end;gap: 0.5rem;">

        <Button  :severity="isEditing? 'help' : 'info'" @click=" enableEditing" size="small" class=""  style="transition: all  .5s;min-width:max-content ;align-items: ; font-weight: bold;border-radius: 0.5rem;"> 
            
            <i v-if="!isEditing" class="fa-solid fa-pen-to-square mr-2"></i> 
            <!-- <i class="fa-solid fa-pen-to-square mr-2"></i>  -->
            <!-- <i  class="fa-solid fa-floppy-disk mr-2"></i> -->
            <i v-else class="fa-solid fa-rotate-right mr-2"></i>
            
            
            
            {{ isEditing? 'Restablecer':'Modificar horario' }}</Button>

        <Transition name="fade">
            <Button  v-if="isEditing" size="small" severity="success" @click="saveChanges" style="font-weight: bold;min-height: max-content; border-radius: 0.5rem;d " class="">            <i  class="fa-solid fa-floppy-disk mr-2"></i> 
Guardar</Button>

        </Transition>




        </div>
</template>
        
<script setup>
import { URI } from '../../service/conection';
import { onMounted, ref, watch } from 'vue'
// import Loading from '@/components/Loading.vue'
const isEditing = ref(false);

const enableEditing = () => {
    isEditing.value? getHorarios().then(data => horario.value = data)  : ''

    isEditing.value = !isEditing.value;
};

const guardando = ref(false)
const horario = ref([])
const cargando = ref(false)
import { useDirectoryStore } from '../../store/directorio';
const store = useDirectoryStore()
onMounted(() => {
    getHorarios().then(data => horario.value = data)
})




watch(() => store.currentSite, (newpad) => {
    getHorarios().then(data => horario.value = data)
})




const getHorarios = async () => {

    cargando.value = true
    const site_id = localStorage.getItem('siteId')
    try {
        const response = await fetch(`${URI}/site-schedule/${store.currentSite.site_id}/`)
        if (!response.ok)
            throw ('paila')

        const data = await response.json()
        // Convertir opening_time de cadena de texto a objeto de fecha
        data.forEach(item => {
            item.opening_time = new Date(`1970-01-01T${item.opening_time}`);
            item.closing_time = new Date(`1970-01-01T${item.closing_time}`);
        });
        cargando.value = false

        return data
    } catch (error) {
        cargando.value = false

        console.log(error)
    }
}

const urlPhotoProfile = ref("")


const saveChanges = async () => {
    guardando.value = true
    try {
        // Formatear los datos para enviar solo la hora
        const horarioToSend = horario.value.map(item => {
            const openingTime  = item.opening_time instanceof Date ? item.opening_time.toLocaleTimeString() : item.opening_time;
            const closing_time = item.closing_time instanceof Date ? item.closing_time.toLocaleTimeString() : item.closing_time;

            return {
                ...item,
                opening_time: openingTime.split(' ')[0],
                closing_time: closing_time.split(' ')[0] // Obtener solo la hora de la cadena de fecha y hora
            };
        });

        // Enviar los horarios modificados al servidor
        const response = await fetch(`${URI}/site-schedule/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(horarioToSend)
        });

        if (!response.ok)
            throw ('Error al enviar los datos');

        // Después de enviar los datos, deshabilitar la edición
        isEditing.value = false;
        guardando.value = false
    } catch (error) {
        console.log(error);
        guardando.value = false

    }
};


const dias = ref([ "Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"])

</script>

<style scoped>

/* Define las transiciones para la imagen */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s 
}
.fade-enter, .fade-leave /* .fade-leave-active en <2.1.8 */ {
  opacity: 0;
  width: 0;
}

*{}
</style>