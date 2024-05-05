import axios from "axios";
import { URI } from "../conection";

export const dailyInventoryReportsService = {
    async getAllDailyInventoryReports() {
        try {
            const response = await axios.get(`${URI}/all-daily-inventory-report`);
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

    async getAllMyDailyInventoryReports(responsible_id) {
        try {
            const response = await axios.get(`${URI}/all-daily-inventory-report/${responsible_id}`);
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

    async getAllMyDailyInventoryReportsFiltered(responsible_id, start_date, end_date) {
        try {
            // Asegúrate de que la URL refleja la estructura correcta según la definición del endpoint en tu servidor.
            const response = await axios.get(`${URI}/all-daily-inventory-report/${responsible_id}/${start_date}/${end_date}`);
            if (response.status === 200) {
                return response.data;
            } else {
                console.error('An error occurred while fetching the daily inventory reports:', response.status);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the daily inventory reports:', error);
            return null;
        }
    },

    async getGroupsWithItems() {
        try {
            const response = await axios.get(`${URI}/get_groups_with_items`);
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
    
    async getAllDailyInventoryUnitMeasures() {
        try {
            const response = await axios.get(`${URI}/daily_inventory_unit_measures`);
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

    async InsertDailyGrupInventory(data) {
        try {
            const response = await axios.post(`${URI}/insert_daily_inventory_group`,data);
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


    async InsertDailyInventory(data) {
        try {
            const response = await axios.post(`${URI}/insert_complete_inventory`,data);
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


    async InsertDailyItemInventory(data) {
        try {
            const response = await axios.post(`${URI}/insert_daily_inventory_item`,data);
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



    async disableDailyGrupInventory(group_id) {
        try {
            const response = await axios.put(`${URI}/disable_daily_inventory_group/${group_id}`);
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

    async disableDailyItemInventory(item_id) {
        try {
            const response = await axios.put(`${URI}/disable_daily_inventory_item/${item_id}`);
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



    async getAllDailyInventoryItems(daily_item_group_name) {
        try {
            const response = await axios.get(`${URI}/group_daily_inventory_items/${daily_item_group_name}`);
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


    async getDailyInventoryEntriesByDailyInventoryID(daily_inventory_id) {
        try {
            const response = await axios.get(`${URI}/daily-inventory-entries/${daily_inventory_id}`);
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

    async getDailyInventoryGroups() {
        try {
            const response = await axios.get(`${URI}/group_daily_inventory_items`);
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
}