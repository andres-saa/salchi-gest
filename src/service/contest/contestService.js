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

   
}