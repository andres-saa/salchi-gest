

import { URI } from "./conection";

const userService = {

    async getUserByDni(dni) {
        try {
            const response = await fetch(`${URI}/employer/dni/${dni}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    },

    async getUsersBySiteId(site_id) {
        try {
            const response = await fetch(`${URI}/employer/site/${site_id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data; // Retorna los datos obtenidos
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }
};



export {userService}