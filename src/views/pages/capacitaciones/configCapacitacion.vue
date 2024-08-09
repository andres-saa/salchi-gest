<template>
    <div class="col-12 m-auto my-0" style="max-width:1024px ;height:max-content;background-color ">

        <Dialog v-model:visible="sending" modal header="Enviando datos" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    
            <div style="display: flex;">
                <ProgressSpinner  style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>

            
            
</Dialog>



        <!-- {{ usersSelected }} -->
    <!-- {{ groupedUsersByPosition }} {{ groupedUsersBySite }} -->

    <div class="col-12 p" style="display:flex;justify-content: end;">

        <Button severity="help" v-if="getUserId() == capacitacion.creator_id" @click="updateCapacitacion">Guardar cambios</Button>


        <!-- {{ asistentes }} -->
    </div>

        <div class="grid">



      
            <div class="col-12 lg:col-6 ">


                <p class="col-12 text-3xl" style="font-weight: bold;"> Configuración </p>

                <div class="col-12  mx-auto pb-4 p-4 "
                    style="background-color: var(--primary-color); box-shadow: 0 0 10px rgba(0, 0, 0, 0.137) ;position: sticky;top: 5rem; height: max-content; border-radius: .5rem;">


                    <div class="col-12 m-0 mb-3  " style=";">
                        <p class="text-2xl" style="font-weight: bold;text-transform: capitalize; color: white;"> </p>
                    </div>


                    <div class="flex flex-column gap-2 text-white">
                        <label for="username" >Id de la capacitacion</label>
                        <InputText id="username" disabled v-model="capacitacion.id" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>

                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Id del creador</label>
                        <InputText id="username" disabled v-model="capacitacion.creator_id" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>


                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Nombre de  la capacitacion</label>
                        <InputText id="username"  v-model="capacitacion.name" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>


                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Tematica</label>
                        <InputText id="username"  v-model="capacitacion.topic" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>


                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >link de la reunion</label>
                        <InputText id="username"  v-model="capacitacion.material_url" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>


               
                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Ubicacion</label>
                        <InputText id="username"  v-model="capacitacion.location" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>



                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Fecha de la capacitacion</label>
                        <Calendar id="username"  v-model="capacitacion.scheduled_time" aria-describedby="username-help" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>

                    <div class="flex flex-column gap-2 my-4 text-white">
                        <label for="username" >Estado</label>
                        <!-- <inputText id="username"  v-model="capacitacion.status" aria-describedby="username-help" /> -->
                        
                        <Dropdown :class="capacitacion.status" v-model.trim="capacitacion.status" :options="capacitacionStatusValues" >

                        </Dropdown>
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>


              
                    






          
                    

                </div>



            </div>
       
            
            <!-- {{ siteDropValues }} -->
            <div class="col-12 lg:col-6    " >

                <p class="col-12  my-0 text-3xl" style="font-weight: bold;">  Asistentes <Button text @click="editando = true" v-if="!editando"> Modificar</Button> 
                    
                    <Button text @click="() => {getAsistentes(); editando = false; allUsers = false}" v-else> reset</Button> </p>

                
                <p v-if="editando" class="col-12 py-0 text-1xl" style="color:red"> Esta modificando la lista de asistentes, por favor sea cuidadoso, si presiona reset todo volvera a como estaba al inicio </p>
 



           
                <div class="col-12" style="display:flex">
                    <ProgressSpinner v-if="charging" style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>
            





<div v-if="!charging"  class="col-12 p-0 ml-3 " style="display: flex; gap: 1rem; align-items: center;">
    <Checkbox class=" mt-3" style="margin-left:3px" v-model="allUsers" :disabled="!editando" :binary="true" @change="toggleSelectAll(allUsers)" />
       
   <span class=""  style="font-weight:bold">TODOS </span>  
</div>
  
<div class="col-12  m-auto pb-4 p-5 "
    style="background-color: rgba(255, 255, 255, 0); ;height: 100%; border-radius: 1rem;height overflow: hidden">



    <div class="grid" style="height: 100%; overflow-y: auto;">


    <div class="col-12 grid py-4" v-for="grupo in groupedUsersBySite" style="border-bottom: 2px solid rgba(0, 0, 0, 0.375);">

        <div class="col-12 p-1" style="display: flex; gap: 1rem; align-items: center;">
    <Checkbox :disabled="!editando" style="" :binary="true" :modelValue="isSiteSelected(grupo.site_name)" @change="isSelected => toggleUsersSelectionBySite(grupo.site_name, !isSiteSelected(grupo.site_name))"></Checkbox>
    <span style="font-weight: bold;">{{ grupo.site_name }}</span>
</div>



        <!-- <p class="col-12 p-0" style="font-weight: bold;" > {{grupo.site_name }}</p> -->
        <div v-for="user in grupo.employers" class="col-12  p-1" style="display: flex;min-width: max-content;gap: 1rem; align-items: center; justify-content: start">
            <Checkbox :disabled="!editando" class="" style="" :binary="true" :modelValue="isUserIdSelected(user.id)" @change="() => toggleUserSelection(user.id)"></Checkbox>
        <p class="" style="font-weight: ;"> {{ user.name }}</p>
        </div>
    </div>


      

    </div>
    


</div>






            </div>






        </div>
    </div>



</template>
    
    
<script setup>

import { ref, onMounted,onBeforeMount,computed } from 'vue'
import { URI } from '@/service/conection';
import { useRoute } from 'vue-router';
import { getUsers } from '@/service/userServices'
import {
    getSites

} from '@/service/dropDownAux';


import { useToast } from 'primevue/usetoast';
const sending = ref(false)
import { getUserId } from '../../../service/valoresReactivosCompartidos';
const toast = useToast();
const route = useRoute()
const allUsers = ref(false)
const groupedUsersBySite = ref([]);
const groupedUsersByPosition = ref([]);
const capacitacion = ref({})
const charging = ref(true)

const toggleUsersSelectionBySite = (siteName, isSelected) => {
    const siteGroup = groupedUsersBySite.value.find(group => group.site_name === siteName);
    if (!siteGroup) return;

    let updatedSelectedUsers = [...usersSelected.value];
 
    siteGroup.employers.forEach(user => {
        const userIndex = updatedSelectedUsers.indexOf(user.id);
        if (isSelected && userIndex === -1) {
            updatedSelectedUsers.push(user.id);
        } else if (!isSelected && userIndex !== -1) {
            updatedSelectedUsers.splice(userIndex, 1);
        }
    });

    usersSelected.value = updatedSelectedUsers;
};



const toggleSelectAll = (isSelected) => {
    if (isSelected) {
        // Selecciona todos los usuarios
        usersSelected.value = groupedUsersBySite.value.reduce((acc, group) => {
            return acc.concat(group.employers.map(user => user.id));
        }, []);
    } else {
        // Deselecciona todos los usuarios
        usersSelected.value = [];
    }
};

const isSiteSelected = (siteName) => {
    const siteGroup = groupedUsersBySite.value.find(group => group.site_name === siteName);
    if (siteGroup) {
        return siteGroup.employers.every(user => usersSelected.value.includes(user.id));
    }
    return false;
};

const users = ref({})
const asistentes = ref([])
const usersSelected = ref([]);


const capacitacionStatusValues = ref([
    'Agendada',
    'Completada',
    'Cancelada'
])



const createAttendeesData = () => {
    const training_id = route.params.capacitacion_id
    return {
        attendees: usersSelected.value.map(userId => ({
            training_id: parseInt(training_id), // Asegúrate de que sea un número
            attendee_id: userId,
            assigned: false, // o el valor por defecto que desees
            attendance_time: new Date().toISOString() // o una fecha/hora específica si es necesario
        }))
    };
};



const postAttendees = async () => {
    const attendeesData = createAttendeesData();

    try {
        const response = await fetch(`${URI}/training/attendees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendeesData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        toast.add({ severity: 'success', summary: 'asistentes modificados', detail: 'hecho', life: 3000 })  

        console.log("Respuesta del servidor:", result);
        sending.value = false
        // Aquí puedes manejar la respuesta como sea necesario
    } catch (error) {
        console.error('Error al enviar los datos de los asistentes:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
};



async function fetchGroupedUsersBySite() {
    
    try {
        const response = await fetch(`${URI}/employers/grouped-by-site`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
       
        let data = await response.json();

        // Agrupar adicionalmente por posición dentro de cada sede
        
        data = data.map(group => {
            const groupedByPosition = group.employers.reduce((acc, curr) => {
                acc[curr.position] = acc[curr.position] || [];
                acc[curr.position].push(curr);
                return acc;
            }, {});
            return { ...group, positions: groupedByPosition };
            
        });

        groupedUsersBySite.value = data;
        charging.value = false

        
        
    } catch (error) {
        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

// Función para obtener usuarios agrupados por posición
async function fetchGroupedUsersByPosition() {
    try {
        const response = await fetch(`${URI}/employers/grouped-by-position`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        groupedUsersByPosition.value = await response.json();
    } catch (error) {
        console.error('Error al obtener usuarios agrupados por posición:', error);
    }
}


async function getAsistentes() {
    const capacitacion_id = route.params.capacitacion_id
    try {
        const response = await fetch(`${URI}/training/${capacitacion_id}/attendees`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        asistentes.value = await response.json();

        // Inicializar usersSelected con los IDs de los asistentes
        usersSelected.value = asistentes.value.map(attendee => attendee.attendee_id);
    
        
    } catch (error) {
        console.error('Error al obtener asistentes:', error);
    }
}




const sites = ref([])


onBeforeMount(() => {

    // initFilters();
    getSites().then(data => sites.value = data)
    getAsistentes()
});


onMounted(async () => {
    // Cargar datos agrupados al montar el componente
    await fetchGroupedUsersBySite();
    await fetchGroupedUsersByPosition();
});

const toggleUserSelection = (userId) => {
    const index = usersSelected.value.indexOf(userId);
    if (index > -1) {
        usersSelected.value.splice(index, 1); // Elimina el ID si ya está presente
    } else {
        usersSelected.value.push(userId); // Agrega el ID si no está presente
    }
};


const getCapacitacion = async () => {

    const capacitacion_id = route.params.capacitacion_id 

    try {
        const response = await fetch(`${URI}/training/${capacitacion_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error al obtener las capacitaciones:', error);
        // Manejar el error de alguna manera o re-lanzarlo
        throw error;
    }
};


const isUserIdSelected = (userId) => {
    return usersSelected.value.includes(userId);
};


const updateCapacitacion = async () => {
    const capacitacion_id = route.params.capacitacion_id;
    sending.value = true // o como obtengas el ID
    try {
        const response = await fetch(`${URI}/training/${capacitacion_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(capacitacion.value), // Asegúrate de que esta es la estructura correcta
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Tratamiento adicional si es necesario, por ejemplo, mostrar un mensaje de éxito
        console.log("Capacitación actualizada con éxito");
        toast.add({ severity: 'success', summary: 'capacitacion actualizada', detail: 'hecho', life: 3000 })  
        postAttendees()

        editando.value = false  
    } catch (error) {
        console.error('Error al actualizar la capacitación:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
    }
};





const editando = ref(false)

onMounted(async () => {
    getUsers().then(data => users.value = data)


});

onMounted(() => {
    getCapacitacion().then(data => capacitacion.value = data)
})

</script>
    
<style scoped>
Button {
    font-weight: bold;
}

.vacaciones {
    display: flex;
    background-color: #64748B;
    justify-content: center;

}

.licencia {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}

.general {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}

.Agendada{
    background-color: var(--yellow-200) ;
}

.Completada{
    background-color: var(--green-200) ;
}

.Cancelada{
    background-color: var(--red-200) ;
}


.generado {
    display: flex;
    background-color: #eeff0060;
    justify-content: center;
}

* {
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
}

.aprobado {
    display: flex;
    background-color: #2bff0060;
    justify-content: center;
}

.rechazado {
    display: flex;
    background-color: #ff000044;
    justify-content: center;
}

Button {
    text-transform: capitalize;
}
</style>