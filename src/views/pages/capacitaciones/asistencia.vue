<template>
    <div class="col-12 mx-auto " style="max-width:1024px ;height:max-content;background-color ">

<!-- {{ capacitacion }} -->

        <!-- {{ usersSelected }} -->
        <!-- {{ asistentes }} -->
    <!-- {{ groupedUsersByPosition }} {{ groupedUsersBySite }} -->



        <div class="grid">



      
           
       
            
            <!-- {{ siteDropValues }} -->
            <div class="col-12     " >

                <p class="col-12  my-0 text-3xl" style="font-weight: bold;">  Asistencia a la capacitacion 
                    
                    <Button severity="help" class="lg:ml-6 mt-4 md:mt-0"  @click="editando = true" v-if="!editando && getUserId() == capacitacion.creator_id"> Tomar asistencia</Button > 
                    <Button class="lg:ml-6  mt-4 md:mt-0" v-if="editando" @click="editando = false" style="background-color:var(--green-500   );"> Todo ready
</Button>
                    
                     </p>


                     <div class="col-12 p" style="display:flex;justify-content: end;">




<!-- {{ asistentes }} -->
</div>

                
                <p v-if="editando" class="col-12 py-0 text-1xl" style="color:red"> Esta tomando la lista de asistentes, por favor sea cuidadoso</p>
 



           
                <div class="col-12" style="display:flex">
                    <ProgressSpinner v-if="charging" style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                </div>
            






  
<div class="col-12  m-auto pb-4 p-5 "
    style="background-color: rgba(255, 255, 255, 0); ;height: 100%; border-radius: 1rem;height overflow: hidden">



    <div class="grid" style="height:; overflow-y: auto;">
    <div v-for="user in asistentes" class="col-12 p-1" style="display: flex; min-width: max-content; gap: 1rem; align-items: center; justify-content: start">
        <Checkbox :disabled="!editando" class="" :binary="true" :modelValue="user.assigned" @change="() => toggleUserSelection(user.attendee_id)"></Checkbox>
        <p class="" style="font-weight: ;"> {{ user.attendee_name }}</p>
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
import { siteDropValues } from '@/service/valoresReactivosCompartidos';
import {
    sitesDropValues,
    GenderDropValues,
    PositionDropValues,
    maritalStatusDropValues,
    epsDropValues,
    educationLevelDropValues,
    employmentContractTypeDropValues,
    pantSizesDropValues,
    shirtSizesDropValues,
    bloodTypesDropValues,
    housingTypesDropValues,
    statusDropValues,
    vehicleTypesDropValues,
    findSiteById,
    findSiteByName,
    getSites

} from '@/service/dropDownAux';


import { useToast } from 'primevue/usetoast';
import { getUserId } from '../../../service/valoresReactivosCompartidos';
const sending = ref(false)

const toast = useToast();
const route = useRoute()
const allUsers = ref(false)
const groupedUsersBySite = ref([]);
const groupedUsersByPosition = ref([]);
const capacitacion = ref({})
const charging = ref(true)
const checked = ref(false)
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


const areAllSelected = computed(() => {
    const allUserIds = groupedUsersBySite.value.reduce((acc, group) => {
        return acc.concat(group.employers.map(user => user.id));
    }, []);

    return allUserIds.every(userId => usersSelected.value.includes(userId));
});


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



























// Dentro de tu script setup

// ... otras declaraciones ...

const updateCapacitacion = async () => {
    sending.value = true;
    try {
        const response = await fetch(`${URI}/training/${capacitacion.value.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(capacitacion.value),
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const result = await response.json();
        toast.add({ severity: 'success', summary: 'Capacitación actualizada', detail: 'Los detalles de la capacitación se han actualizado correctamente.', life: 3000 });
        await postAttendees(); // Llama a la función para actualizar los asistentes después de actualizar la capacitación
    } catch (error) {
        console.error('Error al actualizar la capacitación:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar la capacitación.', life: 3000 });
    } finally {
        sending.value = false;
    }
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
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const result = await response.json();
        toast.add({ severity: 'success', summary: 'Asistentes actualizados', detail: 'La lista de asistentes ha sido actualizada.', life: 3000 });
    } catch (error) {
        console.error('Error al actualizar los asistentes:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron actualizar los asistentes.', life: 3000 });
    }
};

// ... resto del script ...
























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
const isUserSelected = (user) => {
    return usersSelected.value.some(u => u.id === user.id);
};

const deselectAll = () => {
    usersSelected.value = [];
};

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



// const postAttendees = async () => {
//     const attendeesData = createAttendeesData();

//     try {
//         const response = await fetch(`${URI}/training/attendees`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(attendeesData)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         toast.add({ severity: 'success', summary: 'asistentes modificados', detail: 'hecho', life: 3000 })  

//         console.log("Respuesta del servidor:", result);
//         sending.value = false
//         // Aquí puedes manejar la respuesta como sea necesario
//     } catch (error) {
//         console.error('Error al enviar los datos de los asistentes:', error);
//         // Manejar el error, por ejemplo, mostrando un mensaje al usuario
//     }
// };



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
    const capacitacion_id = route.params.capacitacion_id;
    try {
        const response = await fetch(`${URI}/training/${capacitacion_id}/attendees-with-status`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        asistentes.value = await response.json();

        // Actualizar la lista de IDs de usuarios seleccionados
        usersSelected.value = asistentes.value
            .filter(attendee => attendee.assigned)
            .map(attendee => attendee.attendee_id);
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

const toggleUserSelection = async (userId) => {
    const index = usersSelected.value.indexOf(userId);
    const isSelected = index > -1;



    const user = asistentes.value.find(u => u.attendee_id === userId);
    if (user) {
        user.assigned = !user.assigned;
    }

    if (isSelected) {
        usersSelected.value.splice(index, 1); // Elimina el usuario si ya está seleccionado
    } else {
        usersSelected.value.push(userId); // Agrega el usuario si no está seleccionado
    }

    try {
        // Reemplaza con tu endpoint y ajusta el body según tu API
        const response = await fetch(`${URI}/training/${capacitacion.value.id}/attendee/${userId}/mark-attendance`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ assigned: !isSelected }) // Cambia según tu API
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const result = await response.json();
        toast.add({ severity: 'success', summary: 'Asistencia registrada', detail: `Asistencia de ${userId} actualizada correctamente.`, life: 3000 });
    } catch (error) {
        console.error('Error al marcar la asistencia:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar la asistencia.', life: 3000 });
    }
};

const deselectBySiteId = (siteId) => {
    usersSelected.value = usersSelected.value.filter(
        userId => !users.value.find(user => user.id === userId && user.site_id === siteId)
    );
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


// const updateCapacitacion = async () => {
//     const capacitacion_id = route.params.capacitacion_id;
//     sending.value = true // o como obtengas el ID
//     try {
//         const response = await fetch(`${URI}/training/${capacitacion_id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(capacitacion.value), // Asegúrate de que esta es la estructura correcta
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Tratamiento adicional si es necesario, por ejemplo, mostrar un mensaje de éxito
//         console.log("Capacitación actualizada con éxito");
//         toast.add({ severity: 'success', summary: 'capacitacion actualizada', detail: 'hecho', life: 3000 })  
//         postAttendees()

//         editando.value = false  
//     } catch (error) {
//         console.error('Error al actualizar la capacitación:', error);
//         // Manejar el error, por ejemplo, mostrar un mensaje de error
//     }
// };


const selectBySiteId = (siteId) => {
    users.value.forEach(user => {
        if (user.site_id === siteId && !usersSelected.value.includes(user.id)) {
            usersSelected.value.push(user.id);
        }
    });
};

const selectByPosition = (position) => {
    users.value.forEach(user => {
        if (user.position === position && !usersSelected.value.includes(user.id)) {
            usersSelected.value.push(user.id);
        }
    });
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