import axios from "axios";
import { URI } from "@/service/conection";
import { useReportesStore } from '@/store/reportes';


export const orderService = {



    async getOrdersTransfer() {
        const store = useReportesStore()
        
        try {
            store.setLoading(true)
            const response = await axios.get(`${URI}/order-to-transfer/`);
            if (response.status === 200) {
                store.setLoading(false)

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false)

                return null;
            }

        } catch (error) {
            store.setLoading(false)

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }



    },
    
    async getPendientsCancellationRequest() {
        const store = useReportesStore()
        store.setLoading(true,'Consultando pendientes')
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_pendients`);
            if (response.status === 200) {
                store.setLoading(false)

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false)

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
            store.setLoading(false)

            return null;
        }
    },
    

    async getaceptedCancellationAcepted() {
        const store = useReportesStore()
        store.setLoading(true,'Consultando Aceptadas')
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_acepted`);
            if (response.status === 200) {
                store.setLoading(false)

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false)

                return null;
            }
        } catch (error) {
            store.setLoading(false)

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async getPendientsCancellationRejected() {
        const store = useReportesStore()
        store.setLoading(true,'Consultando Rechazadas')
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_rejected`);
            if (response.status === 200) {
                store.setLoading(false)

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false)

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
            store.setLoading(false)

            return null;
        }
    },














    async getPendientsCancellationRequestNoLoading() {
       
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_pendients`);
            if (response.status === 200) {
       

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
        

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);


            return null;
        }
    },
    

    async getaceptedCancellationAceptedNoLoading() {
      
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_acepted`);
            if (response.status === 200) {
             

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
             

                return null;
            }
        } catch (error) {
     

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    async getPendientsCancellationRejectedNoLoading() {
     
        try {
            const response = await axios.get(`${URI}/get_all_cancellation_request_rejected`);
            if (response.status === 200) {
   

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
          

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
  

            return null;
        }
    },


























    async resolveCancellationRequest(cancellation_request_id,data) {
        const store = useReportesStore()
        store.setLoading(true,'Resolviendo solicitud')
        try {
            const response = await axios.put(`${URI}/resolve-cancellation/${cancellation_request_id}`, data);
            if (response.status === 200) {
                store.setLoading(false)

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false)

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
            store.setLoading(false)

            return null;
        }
    },
     
};

