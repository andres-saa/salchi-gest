import axios from "axios";
import { URI } from "../conection";
import { useReportesStore } from '../../store/reportes';
import { loginStore } from '@/store/user.js'

export const contestService = {

    
    async getAllContest() {
        const login = loginStore()
        const user = login.rawUserData.id
        const store = useReportesStore()
        try {
            store.setLoading(true,"cargango consursos")
            const response = await axios.get(`${URI}/contests/${user}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango consursos")
                return response.data;
                
            } else {
                store.setLoading(false,"cargango consursos")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango consursos")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    async getAllContestAll() {
        const login = loginStore()
        const user = login.rawUserData.id
        const store = useReportesStore()
        try {
            store.setLoading(true,"cargango consursos")
            const response = await axios.get(`${URI}/contests_all/${user}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango consursos")
                return response.data;
                
            } else {
                store.setLoading(false,"cargango consursos")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango consursos")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    async getParticipationByUserId(contest_id, user) {
        const login = loginStore()
        
        const store = useReportesStore()
        try {
            store.setLoading(true,"cargango evidencias")
            const response = await axios.get(`${URI}/user-contest-participation/${user}/${contest_id}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango consursos")
                return response.data;
                
            } else {
                store.setLoading(false,"cargango consursos")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango consursos")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async sendEvidence(evidence_data) {
        const store = useReportesStore()
        store.setLoading(true,"enviando evidencia")

        try {
            
            const response = await axios.post(`${URI}/contest-entry/`, evidence_data);
            if (response.status === 200) {
                store.setLoading(false,"enviando evidencia")

              
                return response.data;
            } else {
                console.error('An error occurred while preparing the order:', response.status);
                store.setLoading(false,"enviando evidencia")

                return null;
            }
        } catch (error) {
            console.error('An error occurred while preparing the order:', error);
            store.setLoading(false,"enviando evidencia")

            return null;
        }
    },


    async sendContestImage(userId, contestId, evidenceId, imageFile) {
        const store = useReportesStore();
        store.setLoading(true, "Subiendo imagen");
    
        try {
            const formData = new FormData();
            formData.append('file', imageFile);
    
            const response = await axios.post(`${URI}/upload-constest-image/${userId}/${contestId}/${evidenceId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.status === 200) {
                store.setLoading(false, "Imagen subida con éxito");
                return response.data;
            } else {
                console.error('Error al subir la imagen:', response.status);
                store.setLoading(false, "Error al subir la imagen");
                return null;
            }
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            alert(error.response.data.detail)
            store.setLoading(false, "Error al subir la imagen");
            return null;
        }
    }

   
}