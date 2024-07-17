import axios from "axios";
import { URI } from "../conection";
import { useReportesStore } from '../../store/reportes';
import { loginStore } from '@/store/user.js'







export const driveService = {


    store:useReportesStore(),
    
    async getAlldrive() {
        const login = loginStore()
 
        try {
            this.store.setLoading(true,"cargango archivos")
            const response = await axios.get(`${URI}/files-list/1heb6WmBQHyeNxkrttn1QHFoL-jbhXGd2`);
            if (response.status === 200) {
                this.store.setLoading(false,"cargango archivos")
                return response.data;
                
            } else {
                this.store.setLoading(false,"cargango archivos")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false,"cargango archivos")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },


   
        async uploadData(data) {
            // URL del servidor donde deseas enviar la imagen


            this.store.setLoading(true,"Enviando a google drive")

            const serverURL = `${URI}/upload-file/`;
        
 
            
            
            try {
                const response = await axios.post(serverURL, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
           
                if (response.status === 200) {
                    // La carga fue exitosa, realiza alguna acción si es necesario
                    console.log('Archivo photo cargado con éxito');
                    this.store.setLoading(false,"Enviando a google drive")
                } else {
                    console.error('Error al cargar foto de perfil:', response.status, response.statusText);
                    this.store.setLoading(false,"Enviando a google drive")
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                this.store.setLoading(false,"Enviando a google drive")
            }
        },


        async deleteData(file_id) {
            // URL del servidor donde deseas enviar la imagen
            const serverURL = `${URI}/delete-file/${file_id}`;
    
            try {
                const response = await axios.delete(serverURL);
                if (response.status === 200) {
                    // La carga fue exitosa, realiza alguna acción si es necesario
                    console.log('Archivo photo cargado con éxito');
                } else {
                    console.error('Error al cargar foto de perfil:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        },



    }
    


   
