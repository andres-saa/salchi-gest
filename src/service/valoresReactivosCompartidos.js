import { ref } from "vue";
    
import {jwtDecode} from 'jwt-decode';
import { URI } from "./conection";

const categoryValue = ref()
const siteDropValue = ref()
const grupoSalsasdropValue = ref()
const grupoAdicionesDropValue = ref()
const grupoCambiosDropValue = ref()
const GrupoAcompananterDropvalue = ref()
const GrupoToppingsDropValue = ref()
const showAgregarProducto = ref(false)
const showEditarProducto = ref(false)
const isInitialWatchCall = ref(true)
const siteDropValues = ref()
const productoEnviado = ref(1)
const productoAEditar = ref({})
const productoAEliminar = ref({})
const showEliminarProducto = ref(false)
const verInfo = ref(true)

const pastelColors = {

    
    salsas: '#FFF',
    toppings: '#fff',
    cambios: '#fff',
    adicionales: '#fff',
    acompanantes:'#fff'
    
    
    
    }

const getUserRole = () => {
    const token = localStorage.getItem('token');
    if (token) {
    try {
        const decoded = jwtDecode(token);
        return decoded.rol; // Asegúrate de que 'rol' es la propiedad correcta en tu token
    } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
    }
    }
    return null;
}

const getUserDni = () => {
    const token = localStorage.getItem('token');
    if (token) {
    try {
        const decoded = jwtDecode(token);
        return decoded.dni; // Asegúrate de que 'rol' es la propiedad correcta en tu token
    } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
    }
    }
    return null;
}


const getUserId = () => {
    const token = localStorage.getItem('token');
    if (token) {
    try {
        const decoded = jwtDecode(token);
        return decoded.id; // Asegúrate de que 'rol' es la propiedad correcta en tu token
    } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
    }
    }
    return null;
}


const getUserBasic = async (id) => {
    try {
      const response = await fetch(`${URI}/employer-basic/${id}`, {
        method: 'GET',
        // headers: headers,
      });
  
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        const data = await response.json();
        
        return data;
      } else {
        // Puedes manejar errores de autenticación o cualquier otro tipo de error aquí
        console.error('Error al obtener usuarios:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return null;
    }
  };


  
const getUsersBasic = async (id) => {
    try {
      const response = await fetch(`${URI}/employers-basic`, {
        method: 'GET',
        // headers: headers,
      });
  
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        const data = await response.json();
        
        return data;
      } else {
        // Puedes manejar errores de autenticación o cualquier otro tipo de error aquí
        console.error('Error al obtener usuarios:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return null;
    }
  };
export {getUserDni,verInfo,getUserBasic,getUsersBasic, getUserRole,getUserId, productoAEliminar, showEliminarProducto, productoAEditar, showEditarProducto, productoEnviado,siteDropValues,isInitialWatchCall, showAgregarProducto,pastelColors, categoryValue,siteDropValue,grupoAdicionesDropValue,grupoCambiosDropValue,grupoSalsasdropValue,GrupoAcompananterDropvalue,GrupoToppingsDropValue}