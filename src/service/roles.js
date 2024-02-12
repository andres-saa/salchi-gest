 
 import {URI} from '@/service/conection.js'
import { ref } from 'vue';
 const  roles = ref({})




async function obtenerRolesYActualizar() {
    try {
        // Hacer la solicitud fetch al endpoint /formatted-rolegroups
        const response = await fetch(`${URI}/formatted-rolegroups`);
        if (!response.ok) {
            throw new Error('Hubo un problema al obtener los datos: ' + response.statusText);
        } 
        let rolesActualizados = await response.json();

        // Actualizar la variable roles con los nuevos datos obtenidos
        // Asegúrate de que esta variable roles está definida en un ámbito accesible
        roles.value = rolesActualizados;
     

        // console.log('Roles actualizados:', roles);
        return rolesActualizados
    } catch (error) {
        console.error('Error al obtener los roles:', error);
    }
}


const getRoles = async () => {
    try {
        const response = await fetch(URI + '/roles');
        const groups = await response.json();

        // roles.value = groups;
        return groups
    } catch (error) {
        console.error(error);
    }
};


// Ejecutar la función para actualizar los roles
obtenerRolesYActualizar();

 
 function verificarRol(rol, rolesPermitidos) {
    // Eliminar espacios innecesarios y convertir a minúsculas
    let rolNormalizado = rol.trim().toLowerCase();

    // Normalizar también los roles permitidos
    let rolesPermitidosNormalizados = rolesPermitidos.map(r => r.trim().toLowerCase());

    return rolesPermitidosNormalizados.includes(rolNormalizado);
}


export {roles, verificarRol,obtenerRolesYActualizar,getRoles}