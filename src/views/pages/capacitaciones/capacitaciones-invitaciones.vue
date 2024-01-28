<template>


    <div class="col-12 m-auto " >
    
    
        <Dialog v-model:visible="sending" modal header="Enviando datos" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        
        <div style="display: flex;">
            <ProgressSpinner  style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    
        </div>
        
    </Dialog>
    


        <Dialog style="max-width: 1024px;" v-model:visible="openNew" modal header="Agendar capacitacion" :style="{ width: '90%' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" >
        
    
            {{ newCapacitacion }}
    
            {{ usersSelected }}
        <div style="display: flex;">
        </div>
    
    <div class="grid">
    
    
    
    
        <div class="col-12 lg:col-6     ">
    
    
            <p class="col-12 text-3xl" style="font-weight: bold;"> Configuración </p>
            <div class="col-12  m-auto pb-4 p-4 "
                style="background-color: var(--orange-400); box-shadow: 0 0 10px rgba(0, 0, 0, 0.137) ;height: max-content; border-radius: 1rem;">
    
    
                <div class="col-12 m-0 mb-3  " style=";">
                    <p class="text-2xl" style="font-weight: bold;text-transform: capitalize; color: white;"> </p>
                </div>
    
    
    
    
                <div class="flex flex-column gap-2 my-4 text-white">
                    <label for="username" >Nombre de  la capacitacion</label>
                    <InputText id="username"  v-model="newCapacitacion.name" aria-describedby="username-help" />
                    <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                </div>
    
    
                <div class="flex flex-column gap-2 my-4 text-white">
                    <label for="username" >Tematica</label>
                    <InputText id="username"  v-model="newCapacitacion.topic" aria-describedby="username-help" />
                    <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                </div>
    
    
                <div class="flex flex-column gap-2 my-4 text-white">
        <label for="switch-incluir-link">¿Incluir enlace de la reunión?</label>
        <InputSwitch id="switch-incluir-link" v-model="incluirLink" />
    </div>
    
    <div v-if="incluirLink" class="flex flex-column gap-2 my-4 text-white">
        <label for="input-enlace-reunion">Enlace de la reunión</label>
        <InputText id="input-enlace-reunion" v-model="newCapacitacion.material_url" />
    </div>
    
    
           
                <div class="flex flex-column gap-2 my-4 text-white">
                    <label for="username" >Ubicacion</label>
                    <InputText id="username"  v-model="newCapacitacion.location" aria-describedby="username-help" />
                    <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                </div>
    
    
    
                <div class="flex flex-column gap-2 my-4 text-white">
                    <label for="username" >Fecha de la capacitacion</label>
                    <Calendar id="username"  v-model="newCapacitacion.scheduled_time" aria-describedby="username-help" />
                    <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                </div>
    
    
    
          
                
    
    
    
    
    
    
      
                
    
            </div>
    
            <Button @click="crearCapacitacion" class="my-6 col-12" outlined > <span class="col-12 p-0">Agendar</span> </Button>
    
    
    
        </div>
    
        
        <!-- {{ siteDropValues }} -->
        <div class="col-12 lg:col-6    " >
    
            <p class="col-12  my-0 text-3xl" style="font-weight: bold;">  Asistentes  
                
               </p>
    
            
          
       
            <div class="col-12" style="display:flex">
                <ProgressSpinner v-if="charging" style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
        
    
    
    
    
    
    <div v-if="!charging"  class="col-12 p-0 ml-3 " style="display: flex; gap: 1rem; align-items: center;">
    <Checkbox class=" mt-3" style="margin-left:3px" v-model="allUsers"  :binary="true" @change="toggleSelectAll(allUsers)" />
    
    <span class=""  style="font-weight:bold">TODOS </span>  
    </div>
    
    <div class="col-12  m-auto pb-4 p-5 "
    style="background-color: rgba(255, 255, 255, 0); ;height: 100%; border-radius: 1rem;height overflow: hidden">
    
    
    
    <div class="grid" style="height: 70vh; overflow-y: auto;">
    
    
    <div class="col-12 grid py-4" v-for="grupo in groupedUsersBySite" style="border-bottom: 2px solid rgba(0, 0, 0, 0.375);">
    
    <div class="col-12 p-1" style="display: flex; gap: 1rem; align-items: center;">
    <Checkbox style="" :binary="true" :modelValue="isSiteSelected(grupo.site_name)" @change="isSelected => toggleUsersSelectionBySite(grupo.site_name, !isSiteSelected(grupo.site_name))"></Checkbox>
    <span style="font-weight: bold;">{{ grupo.site_name }}</span>
    </div>
    
    
    
    <!-- <p class="col-12 p-0" style="font-weight: bold;" > {{grupo.site_name }}</p> -->
    <div v-for="user in grupo.employers" class="col-12  p-1" style="display: flex;min-width: max-content;gap: 1rem; align-items: center; justify-content: start">
        <Checkbox  class="" style="" :binary="true" :modelValue="isUserIdSelected(user.id)" @change="() => toggleUserSelection(user.id)"></Checkbox>
    <p class="" style="font-weight: ;"> {{ user.name }}</p>
    </div>
    </div>
    
    
    
    
    </div>
    
    
    
    </div>
    
    
    
    
    
    
    </div>
    
    
    
    
    
        </div>
        
    </Dialog>
    
    



    <Dialog v-model:visible="charging" modal  :style="{ width: '50rem'}" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" style="background-color;red">
        
        <div style="display: flex;">
            <ProgressSpinner  style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    
        </div>
        
    </Dialog>
        
    
        <DataTable v-if="  capacitaciones?.length > 0 " ref="dt"  :value="capacitaciones" v-model:selection="selectedCapacitaciones" dataKey="id" :paginator="true"
                        
                        :rows="10" :filters="filters"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        :rowsPerPageOptions="[5, 10, 25,100]"
                        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Capacitaciones"
                        responsiveLayout="scroll" scrollable scroll-height="62vh" :frozenValue="lockedCustomers">
                        <template #header style="z-index:200">
                            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center" >
                                <p class="m-0  text-2xl my-4"> Invitaciones <Button @click="openNew = ! openNew" class="ml-0 p-2 col-12 lg:ml-0 lg:col-12 mt-4"  > Agendar nueva capacitacion</Button> </p> 
                                <span class="block mt-2 md:mt-0 p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                                </span>
                            </div>
                        </template>
    
                        <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen  ></Column>
    
                        <Column class="p-2" field="id" header="Id" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.id }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="creator_id" header="Responsable" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.creator_id }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="name" header="Nombre" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.name }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="name" header="Tema" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.topic }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="location" header="Ubicacion" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.location }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="location" header="Fecha de la capacitacion" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.scheduled_time }}
                            </template>
                        </Column>
    
                        <Column class="p-2" field="location" header="Fecha de creacion" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span class="p-column-title">Code</span>
                                {{ capacitacion.data.created_at }}
                            </template>
                        </Column>
    
                        <Column class="p-2"  field="location" header="Estado" :sortable="true"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <span  class="p-column-title">Code</span>
                               <p class="p-2 text-center" :class="capacitacion.data.status">
                                {{ capacitacion.data.status }}
                               </p> 
                            </template>
                        </Column>
    
                        <Column class="p-2" field="location" header="Detalles" :sortable="true" frozen alignFrozen="right"
                            headerStyle="width:min-content; min-width:min-content; ">
                            <template #body="capacitacion">
                                <RouterLink :to="getUserId() == capacitacion.data.creator_id? `capacitacion/${capacitacion.data.id}/configuracion` : `capacitacion/${capacitacion.data.id}/archivos`">
                                    <Button text class="p-0 mx-2" severity="success" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.EYE"></i> </span></Button>
    
                                </RouterLink>
                               
                                <!-- <Button text class="p-0 mx-2" style="width: 100;"><span class="text-right"><i :class="PrimeIcons.PENCIL"></i></span></Button> -->
                               
                                <Button text class="p-0 mx-2" severity="danger" style="width: 100;"><span class="text-right" style=""><i :class="PrimeIcons.TRASH"></i></span></Button>
    
                                <!-- {{ capacitacion.data.status }} -->
                            </template>
                        </Column>
    
    </DataTable>
    

    <div class="col-12 text-6xl text-center" v-else-if="!charging" style="font-weight: bold; display: flex;height: 85vh;justify-content: center;align-items: center;"> <p>No tienes invitaciones a capacitaciones</p> </div>
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </template>
        
        
        <script setup>
        
        import {ref, onMounted, onBeforeMount} from 'vue'
        import { URI } from '@/service/conection';
        
        
    
    
    import { FilterMatchMode, PrimeIcons } from 'primevue/api';
    
    import { useToast } from 'primevue/usetoast';
    // import { departamentos, findByDepartament } from '@/service/CountryService.js'
    // import { jsPDF } from "jspdf";
    
    // import { uploadUserPhotoProfile } from '@/service/sendFileService'
    import {
    
        getSites
    
    } from '@/service/dropDownAux';
    
    // // import logo from '@/images/logo.png'
    // import { getUserRole } from '@/service/valoresReactivosCompartidos.js'
    // import * as XLSX from 'xlsx';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const userId = ref( await getUserId())
    
    
    const openNew = ref(false)
    
    
        const capacitaciones = ref()
    
        const selectedCapacitaciones = ref()
        
        const filters = ref(null);
    
        const initFilters = () => {
        filters.value = {
            global: { value: null, matchMode: FilterMatchMode.CONTAINS }
        };
    
    };
    
        const getCapacitaciones = async () => {

            const attendee_id = getUserId()
            try {
                const response = await fetch(`${URI}/attendee/${attendee_id}/invited-trainings`);
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
        
        
        onMounted( () => {
            getCapacitaciones().then(data => capacitaciones.value = data)
            
        })
    
        onBeforeMount( () => {
            initFilters()
        })
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        import { computed } from 'vue'
    // import { URI } from '@/service/conection';
    import { useRoute } from 'vue-router';
    import { getUserId } from '@/service/valoresReactivosCompartidos';
    import router from '@/router';
    // import { getUserId } from '@/service/valoresReactivosCompartidos';
    // import { getUsers } from '@/service/userServices'
    // import { siteDropValues } from '@/service/valoresReactivosCompartidos';
    // import {
    //     sitesDropValues,
    //     GenderDropValues,
    //     PositionDropValues,
    //     maritalStatusDropValues,
    //     epsDropValues,
    //     educationLevelDropValues,
    //     employmentContractTypeDropValues,
    //     pantSizesDropValues,
    //     shirtSizesDropValues,
    //     bloodTypesDropValues,
    //     housingTypesDropValues,
    //     statusDropValues,
    //     vehicleTypesDropValues,
    //     findSiteById,
    //     findSiteByName,
    //     getSites
    
    // } from '@/service/dropDownAux';
    
    
    // import { useToast } from 'primevue/usetoast';
    const sending = ref(false)
    
        const incluirLink = ref(false);
    const toast = useToast();
    const route = useRoute()
    const allUsers = ref(false)
    const groupedUsersBySite = ref([]);
    const groupedUsersByPosition = ref([]);
    const capacitacion = ref({})
    
    const esURLValida = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    };
    const newCapacitacion = ref({})
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
    
    
    // const areAllSelected = computed(() => {
    //     const allUserIds = groupedUsersBySite.value.reduce((acc, group) => {
    //         return acc.concat(group.employers.map(user => user.id));
    //     }, []);
    
    //     return allUserIds.every(userId => usersSelected.value.includes(userId));
    // });
    
    
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
    // const isUserSelected = (user) => {
    //     return usersSelected.value.some(u => u.id === user.id);
    // };
    
    // const deselectAll = () => {
    //     usersSelected.value = [];
    // };
    
    // const capacitacionStatusValues = ref([
    //     'Agendada',
    //     'Completada',
    //     'Cancelada'
    // ])
    
    
    
    const createAttendeesData = (training_id) => {
        // const training_id = route.params.capacitacion_id
        return {
            attendees: usersSelected.value.map(userId => ({
                training_id: training_id, // Asegúrate de que sea un número
                attendee_id: userId,
                assigned: false, // o el valor por defecto que desees
                attendance_time: new Date().toISOString() // o una fecha/hora específica si es necesario
            }))
        };
    };
    
    
    
    const postAttendees = async (training_id) => {
        const attendeesData = createAttendeesData(training_id);
    
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
    
            
            router.push(`capacitacion/${training_id}/configuracion`)
            
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
    
    
    
    const sites = ref([])
    
    
    onBeforeMount(() => {
    
        // initFilters();
        getSites().then(data => sites.value = data)
        // getAsistentes()
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
    
    // const deselectBySiteId = (siteId) => {
    //     usersSelected.value = usersSelected.value.filter(
    //         userId => !users.value.find(user => user.id === userId && user.site_id === siteId)
    //     );
    // };
    
        // const getCapacitaciones = async () => {
    
        //     const capacitacion_id = route.params.capacitacion_id 
    
        //     try {
        //         const response = await fetch(`${URI}/training/${capacitacion_id}`);
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //         const data = await response.json();
        //         return data;
                
        //     } catch (error) {
        //         console.error('Error al obtener las capacitaciones:', error);
        //         // Manejar el error de alguna manera o re-lanzarlo
        //         throw error;
        //     }
        // };
    
    
    const isUserIdSelected = (userId) => {
        return usersSelected.value.includes(userId);
    };
    
    
    const crearCapacitacion = async () => {
        sending.value = true; // o como obtengas el ID
        const data = {...newCapacitacion.value};
        data.creator_id = await getUserId();
        data.status = 'Agendada';
    
    
    
    
           // Establecer material_url a null si no se incluye o está vacío
           if (!incluirLink.value || !data.material_url) {
            data.material_url = null;
        } else if (!esURLValida(data.material_url)) {
            // Validar el enlace si se incluye
            toast.add({ severity: 'error', summary: 'Error', detail: 'El enlace de la reunión no es válido', life: 3000 });
            sending.value = false;
            return;
        }
    
    
    
    
        if (!data.name || !data.topic || !data.location || !data.scheduled_time) {
            toast.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor, completa todos los campos requeridos.', life: 3000 });
            sending.value = false;
            return;
        }
    
    
    
        try {
            const response = await fetch(`${URI}/training/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Asegúrate de que esta es la estructura correcta
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json(); // Parse the JSON response
            const trainingId = responseData.training_id; // Extraer el training_id
    
            // Llamar a postAttendees con el training_id
            await postAttendees(trainingId);
    
            // Tratamiento adicional si es necesario, por ejemplo, mostrar un mensaje de éxito
            console.log("Capacitación actualizada con éxito", response);
            toast.add({ severity: 'success', summary: 'Capacitación actualizada', detail: 'Hecho', life: 3000 });
    
            getCapacitaciones().then(data => capacitaciones.value = data);
            editando.value = false;
        } catch (error) {
            console.error('Error al actualizar la capacitación:', error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
    };
    
    
    
    // const selectBySiteId = (siteId) => {
    //     users.value.forEach(user => {
    //         if (user.site_id === siteId && !usersSelected.value.includes(user.id)) {
    //             usersSelected.value.push(user.id);
    //         }
    //     });
    // };
    
    // const selectByPosition = (position) => {
    //     users.value.forEach(user => {
    //         if (user.position === position && !usersSelected.value.includes(user.id)) {
    //             usersSelected.value.push(user.id);
    //         }
    //     });
    // };
    
    const editando = ref(false)
    
    // onMounted(async () => {
    //     getUsers().then(data => users.value = data)
    
    
    // });
    
    onMounted(() => {
        // getCapacitaciones().then(data => capacitacion.value = data)
    
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </script>
        
        <style scoped>
        
        Button{
            font-weight: bold;
        }
        
        .vacaciones{
            display: flex;
            background-color:#64748B;
            justify-content: center;
            
        }
        
        .licencia{
            display: flex;
            background-color:#64748B;
            justify-content: center;
        }
        
        .general{
            display: flex;
            background-color:#64748B;
            justify-content: center;
        }
        
        
        .generado{
            display: flex;
            background-color:#eeff0060;
            justify-content: center;
        }
        
        *{
            overflow-wrap: break-word; white-space: normal;      overflow: hidden;
        }
        .aprobado{
            display: flex;
            background-color:#2bff0060;
            justify-content: center;
        }
        
        .rechazado{
          display: flex;
            background-color:#ff000044;
            justify-content: center;
        }
        
        Button{
          text-transform: capitalize;
        }
          
    
    
        .Agendada{
            background-color: var(--yellow-200) ;
            border-radius: 5rem;
        }
    
        .Completada{
            background-color: var(--green-200) ;
            border-radius: 5rem;
        }
    
        .Cancelada{
            background-color: var(--red-200) ;
            border-radius: 5rem;
        }
        </style>