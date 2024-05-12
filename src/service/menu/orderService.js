import axios from "axios";
import { URI } from "@/service/conection";


export const orderService = {

    async getPendientsCancellationRequest() {
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
    
    async getaceptedCancellationAcepted() {
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

    async getPendientsCancellationRejected() {
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
        try {
            const response = await axios.put(`${URI}/resolve-cancellation/${cancellation_request_id}`, data);
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
     
};

