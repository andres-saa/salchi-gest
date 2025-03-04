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

    async getOrdersValidate() {
        const store = useReportesStore()
        
        try {
            store.setLoading(true)
            const response = await axios.get(`${URI}/order-to-validate`);
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




    async recent_pqr() {
        const store = useReportesStore()
        
        try {
            // store.setLoading(true)
            const response = await axios.get(`${URI}/recent-pqr/`);
            if (response.status === 200) {
                // store.setLoading(false)

                return response.data?.[0]?.id || null;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                // store.setLoading(false)

                return null;
            }

        } catch (error) {
            // store.setLoading(false)

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }

    },





    async recent_order() {
        const store = useReportesStore()
        
        try {
            // store.setLoading(true)
            const response = await axios.get(`${URI}/recent-order/`);
            if (response.status === 200) {
                // store.setLoading(false)

                return response.data?.[0]?.id || null;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                // store.setLoading(false)

                return null;
            }

        } catch (error) {
            // store.setLoading(false)

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }

    },




    async getCancellationCategories() {
        const store = useReportesStore()
        
        try {
          
            const response = await axios.get(`${URI}/order-cancellation-request-categories/`);
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




    async getOrdersTransferNoLoading() {
        
        try {
            const response = await axios.get(`${URI}/order-to-transfer/`);
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

    async is_recent_order_generated() {
        
        try {
            const response = await axios.get(`${URI}/recent-cancellation/`);
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


    async is_recent_transfer_generated() {
        
        try {
            const response = await axios.get(`${URI}/recent-pendient-transfer/`);
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


    async authorizeOrder(order_id, responsible_id) {
        const store = useReportesStore();
        try {
            store.setLoading(true);
            const data = { responsible_id };
            const response = await axios.put(`${URI}/authorize_order/${order_id}`, data);
            if (response.status === 200) {
                store.setLoading(false);
                return response.data;
            } else {
                console.error('An error occurred while authorizing the order:', response.status);
                store.setLoading(false);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while authorizing the order:', error);
            store.setLoading(false);
            return null;
        }
    }
    ,

    async aproveOrder(order_id, responsible_id) {
        const store = useReportesStore();
        try {
            store.setLoading(true);
            const data = { responsible_id };
            const response = await axios.put(`${URI}/aprove-order/${order_id}`, data);
            if (response.status === 200) {
                store.setLoading(false);
                return response.data;
            } else {
                console.error('An error occurred while authorizing the order:', response.status);
                store.setLoading(false);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while authorizing the order:', error);
            store.setLoading(false);
            return null;
        }
    }
    ,
    



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

