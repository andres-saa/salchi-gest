import axios from 'axios';
import { URI } from './conection';
i

class AuthService {
  validateToken(token) {
    return axios.get(`${URI}/validate-token`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // Aquí manejas la respuesta positiva
      if (response.data.access_token) {
        // Si el servidor devuelve un nuevo token, puedes optar por actualizarlo en el cliente
        this.saveToken(response.data.access_token);
      }
      return response.data;
    })
    .catch(error => {
      // Manejo de errores si el token es inválido o expirado
      console.error("Error durante la validación del token:", error);
      throw error;
    });
  }

  saveToken(token) {
    localStorage.setItem('userToken', token);
  }

  getToken() {
    return localStorage.getItem('userToken');
  }
}

export default new AuthService();