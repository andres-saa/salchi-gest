<template>













    <div class="mx-auto px-2" style="max-width: 700px;">

        <Dialog class="mx-2" v-model:visible="visibleModify" modal header="Seleccion de Cargos para el grupo" :style="{ width: '50rem',height:'80vh' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    
    <div style="display: flex;" class="grid pt-6">
        <div v-for=" cargo in roles" style="display: flex;" class="col-12 p-0">

            <div class="col-12 p-1" style="display: flex; gap: 1rem;">
                <Checkbox v-model="selectedRoleIds" :value="cargo.id"></Checkbox>
                <p>{{ cargo.title }}</p>
            </div>
            
        </div>
    </div>


    <template #footer>
        <Button @click="assignRolesToGroup">Guardar cambios</Button>
    </template>
    
    
</Dialog>


<Dialog v-model:visible="openNewRol" modal header="Crear nuevo Cargo" :style="{ width: '50rem'}" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    
    <!-- Campos existentes para nombre y descripción -->
    <p> Nombre</p>
    <InputText v-model="newRole.title" class="col-12"></InputText>
    <p> Descripcion</p>
    <Textarea  v-model="newRole.description" class="col-12" style="max-width: 100%; min-width: 100%;height: 20vh;"></Textarea>
    
    <!-- Nueva sección para selección de grupo -->
    <p>Seleccionar Grupo(s)</p>
    <div class="grid">
        
        <div class="col-12 py-1" v-for="group in roleGroups" :key="group.id">
            <Checkbox v-model="selectedGroupIds" :value="group.id"></Checkbox> {{ group.group_name }}
        </div>
    </div>
    
    <Button @click="CrearCargo" class="mt-4">Crear nuevo cargo</Button>
</Dialog>


        
        <div class="col-12 p-0  p-0" style="max-width: 900px; margin-top: 6rem; display: flex;gap: 1rem; align-items: center;justify-content:end;">
                    <!-- <p style="font-weight: bold;" class=" text-xl px-1 m-0">Cargos </p>  -->
                    <Button severity="help" style="font-weight: bold;" @click="openNewRol = true">Crear nuevo cargo</Button>
                </div>
        <!-- Grupos de Cargos y sus Cargos Correspondientes -->
        <div  v-for="(group, index) in roleGroups" :key="group.id" class="my-6 m-auto shadow-2 px-2" style=" border-radius: 0.5rem; border: 1px solid;">
            <div class="p-2" style="display: flex; gap: 1rem; align-items: center;">
                <p class="text-2xl p-0 m-0" style="font-weight: bold; text-transform: capitalize;">{{ index + 1 }}. Grupo {{ group.group_name }}
                </p>
                
               
                <!-- <Button text class="m-0 text-2xl" style="font-weight: bold;" size="small">Agregar Cargo al Grupo</Button> -->


                
            </div>



            
            <div class="mx-2 mt-2 p-3 " style="border-radius: 0.3rem;background-color: rgba(0, 0, 0, 0.1);color: black;border: px solid; align-items: center;">
                

                
                <p class=" text-xl p-0 m-0" style="font-weight: bold;">Description de las funciones del Grupo:
                </p>

                <p class="text-sm md:text-lg p-0 m-0"> {{ group.description }}      </p>
                
            </div>







            <div class="grid  px-0 mx-2">


                <div class="col-12 p-0 my-6" style="display: flex;gap: 1rem; align-items: center;">
                    <p style="font-weight: bold;" class=" text-xl px-0 m-0">Cargos </p> 
                    <Button severity="danger" style="font-weight: bold;" @click="openRoleModificationDialog(group)">Modificar</Button>
                </div>
                
                <div v-for="(role, rIndex) in group.roles" :key="role.id" class="col-12 md:col-6 p-1 text-sm lg:text-lg">
                    <div style="display: flex; gap: 0.5rem; align-items:center;">
                        <p class="p-0 m-0 " style="text-transform: capitalize;"><i :class="PrimeIcons.CIRCLE_FILL"></i> {{ rIndex + 1 }}. {{ role.title }}</p>
                        <!-- <Button text style="font-weight: bold;" class="p-0 m-0"><i :class="PrimeIcons.PENCIL    "></i></Button>
                        <Button severity="danger" text style="font-weight: bold;" class="p-0 m-0"><i :class="PrimeIcons.TIMES    "></i></Button> -->
                    </div>
                </div>

                


                
            </div>


            
            
        </div>


    </div>
    </template>



<script setup>
import { ref, onMounted } from 'vue';
import { URI } from '../../service/conection';
import Loading from '../../components/Loading.vue';
import { PrimeIcons } from 'primevue/api';

const visibleModify = ref(false)
const roleGroups = ref([]);
const roles = ref([])
const openNewRol = ref(false)
const  modificandoCargos = ref(false)
const selectedRoleIds = ref([]);
const currentGroupId = ref(null);





const selectedGroupIds = ref(["todos"]); // "todos" es un valor especial para manejar en el backend o aquí mismo







import { useReportesStore } from '../../store/reportes';
const store = useReportesStore()
const charging = ref(true)

// Función modificada para obtener los grupos de cargos y sus cargos correspondientes
const getRoleGroups = async () => {
    try {
        store.setLoading(true, 'BUSCANDO CARGOS')
        const response = await fetch(URI + '/rolegroups');
        const groups = await response.json();
        for (const group of groups) {
            const rolesResponse = await fetch(`${URI}/rolegroup/${group.id}/roles`);
            const roles = await rolesResponse.json();
            group.roles = roles; // Agregar los cargos al grupo
        }
        roleGroups.value = groups;
        charging.value = false 
        store.setLoading(false, 'BUSCANDO CARGOS')

    } catch (error) {
        console.error(error);
        store.setLoading(false, 'BUSCANDO CARGOS')

    }
};



const getRoles = async () => {
    try {
        const response = await fetch(URI + '/roles');
        const groups = await response.json();

        roles.value = groups;
    } catch (error) {
        console.error(error);
    }
};



const assignRolesToGroup = async () => {
    modificandoCargos.value = true
    // Nota: Asegúrate de que la URL esté formateada correctamente para incluir el ID del grupo
    const url = `${URI}/assign-roles-to-group-delete-olds/${currentGroupId.value}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( selectedRoleIds.value ) // Envía solo los IDs de roles seleccionados
        });
        if (!response.ok) {
            throw new Error('Hubo un problema al asignar los roles al grupo');
        }
        visibleModify.value = false; // Cierra el diálogo
        
        modificandoCargos.value = false
        await getRoleGroups();

      // Actualiza los grupos de roles para reflejar los cambios
    } catch (error) {
        console.error("Error al asignar roles al grupo:", error);
    }
};


const newRole = ref({})




const CrearCargo = async () => {
    modificandoCargos.value = true;
    const urlCrearRol = `${URI}/role`; // URL para crear el rol
    try {
        // Datos del nuevo rol
        const newRoleData = {
            title: newRole.value.title,
            description: newRole.value.description,
            // No incluyes groupIds aquí porque la asignación se hará en un paso separado
        };
        // Crear el nuevo rol
        const responseCrearRol = await fetch(urlCrearRol, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRoleData)
        });
        if (!responseCrearRol.ok) {
            throw new Error('Hubo un problema al crear el nuevo cargo.');
        }
        const { role_id } = await responseCrearRol.json(); // Obtener el ID del nuevo rol creado

        // Asignación del rol a los grupos seleccionados
        for (const groupId of selectedGroupIds.value) {
            const urlAsignarRolAGrupo = `${URI}/assign-roles-to-group/${groupId}`; // Asume que tienes una URL específica para asignar roles a un grupo
            await fetch(urlAsignarRolAGrupo, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([role_id] ) // Envía el ID del nuevo rol como parte de un array
            });
            // No es necesario verificar el ok aquí si asumes que siempre será exitoso, pero sería prudente hacerlo
        }

        // Finalización y actualización de la interfaz de usuario
        modificandoCargos.value = false;
        openNewRol.value = false;
        await getRoleGroups(); // Para refrescar la lista de grupos y roles
        await getRoles();
        selectedGroupIds.value = ["todos"]; // Restablece la selección de grupos para la próxima creación
    } catch (error) {
        console.error("Error al crear y asignar el nuevo rol:", error);
        modificandoCargos.value = false;
    }
};





const openRoleModificationDialog = (group) => {
    currentGroupId.value = group.id; // Establece el ID del grupo actual
    // Filtra y marca los roles asignados al grupo
    selectedRoleIds.value = group.roles.map(role => role.id);
    visibleModify.value = true; // Muestra el diálogo
};

onMounted(getRoleGroups);
onMounted(getRoles);
</script>