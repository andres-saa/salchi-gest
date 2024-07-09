
import { URI } from "../conection";



import axios from 'axios';

const fileService = {
    async uploadImage(img, consept, id) {
        // URL del servidor donde deseas enviar la imagen
        const serverURL = `${URI}/upload-product-image/${consept}-${id}`;
    
        // Crear un objeto FormData para enviar el archivo
        const formData = new FormData();
        formData.append('file', img);
        
        try {
            const response = await axios.post(serverURL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                // La carga fue exitosa, realiza alguna acción si es necesario
                console.log('Archivo photo cargado con éxito');
            } else {
                console.error('Error al cargar foto de perfil:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}

export default fileService;

