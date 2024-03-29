import {URI} from '@/service/conection'
import { useReportesStore } from '../store/reportes';
const store = useReportesStore()
const getUsers = async () => {
    try {
      // Obtiene el token de acceso desde el Local Storage
      // const accessToken = localStorage.getItem('accessToken');
  
      // Verifica si el token de acceso existe
      // if (!accessToken) {
      //   // Si no hay token de acceso, puedes manejar el error o redirigir al usuario a iniciar sesión
      //   console.error('Token de acceso no encontrado');
      //   // return null;
      // }
  
      // Configura el encabezado de la solicitud con el token de acceso
      // const headers = {
      //   'Authorization': `Bearer ${accessToken}`,
      //   'Content-Type': 'application/json', // Ajusta según tus necesidades
      // };
  
      // Realiza la solicitud HTTP con el encabezado configurado
      store.setLoading(true,'cargando usuarios')
      const response = await fetch(`${URI}/employers`, {
        method: 'GET',
        // headers: headers,
      });
  
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        store.setLoading(false,'cargando usuarios')

        const data = await response.json();
        
        return data;
      } else {
        // Puedes manejar errores de autenticación o cualquier otro tipo de error aquí
        console.error('Error al obtener usuarios:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      store.setLoading(false,'cargando usuarios')

      return null;
    }
  };
    
  
  const getUsersBySite = async (site_id) => {
    try {
      // Obtiene el token de acceso desde el Local Storage
      // const accessToken = localStorage.getItem('accessToken');
  
      // Verifica si el token de acceso existe
      // if (!accessToken) {
      //   // Si no hay token de acceso, puedes manejar el error o redirigir al usuario a iniciar sesión
      //   console.error('Token de acceso no encontrado');
      //   // return null;
      // }
  
      // Configura el encabezado de la solicitud con el token de acceso
      // const headers = {
      //   'Authorization': `Bearer ${accessToken}`,
      //   'Content-Type': 'application/json', // Ajusta según tus necesidades
      // };
  
      // Realiza la solicitud HTTP con el encabezado configurado
      const response = await fetch(`${URI}/employer/site/${site_id}`, {
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
  

  const getUserBasic = async (id) => {
    try {
      // Obtiene el token de acceso desde el Local Storage
      // const accessToken = localStorage.getItem('accessToken');
  
      // Verifica si el token de acceso existe
      // if (!accessToken) {
      //   // Si no hay token de acceso, puedes manejar el error o redirigir al usuario a iniciar sesión
      //   console.error('Token de acceso no encontrado');
      //   // return null;
      // }
  
      // Configura el encabezado de la solicitud con el token de acceso
      // const headers = {
      //   'Authorization': `Bearer ${accessToken}`,
      //   'Content-Type': 'application/json', // Ajusta según tus necesidades
      // };
  
      // Realiza la solicitud HTTP con el encabezado configurado
      const response = await fetch(`${URI}/employers-basic${id}`, {
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


export{getUsers,getUsersBySite,getUserBasic}
