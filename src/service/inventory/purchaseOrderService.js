import axios from "axios";
import { URI } from "../conection";

export const purchaseOrderService = {

    async getAllpurchaseOrderReports() {
        try {
            const response = await axios.get(`${URI}/all-purchase_orders`);
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

    async getAllMypurchaseOrderReports(responsible_id) {
        try {
            const response = await axios.get(`${URI}/all-purchase_orders_by_responsible_id/${responsible_id}`);
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

    async getAllMypurchaseOrderReportsFiltered(responsible_id, start_date, end_date) {
        try {
            // Asegúrate de que la URL refleja la estructura correcta según la definición del endpoint en tu servidor.
            const response = await axios.get(`${URI}/all-purchase-orders-filtered/${responsible_id}/${start_date}/${end_date}`);
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


    

    async getAllpurchaseOrderReportsFiltered(site_ids, start_date, end_date) {
        try {
            // Asegúrate de que la URL refleja la estructura correcta según la definición del endpoint en tu servidor.
            const response = await axios.get(`${URI}/all-purchase-orders-by-site-filtered/${site_ids}/${start_date}/${end_date}`);
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
            const response = await axios.get(`${URI}/get_purchase_item_groups_with_items`);
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
    
    async getAllpurchaseOrderUnitMeasures() {
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

    async InsertDailyGrupPurchaseOrder(data) {
        try {
            const response = await axios.post(`${URI}/insert_purchase_items_group`,data);
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


    async InsertpurchaseOrder(data) {
        try {
            const response = await axios.post(`${URI}/insert_complete_order`,data);
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


    async InsertPurchaserOrderItem(data) {
        try {
            const response = await axios.post(`${URI}/insert_purchase_order_item`,data);
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



    async disablePurchaseGroupItems(group_id) {
        try {
            const response = await axios.put(`${URI}/disable_purchase_order_group/${group_id}`);
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

    async disableOrderPUrchaseItem(item_id) {
        try {
            const response = await axios.put(`${URI}/disable_order_purchase_item/${item_id}`);
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



    async getAllpurchaseOrderItems(daily_item_group_name) {
        try {
            const response = await axios.get(`${URI}/group-purchase-items-by-group-name/${daily_item_group_name}`);
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


    async getpurchaseOrderEntriesBypurchaseOrderID(purchase_order_id) {
        try {
            const response = await axios.get(`${URI}/purchase-order-entries-by-purchase-id/${purchase_order_id}`);
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

    async getpurchaseOrderGroups() {
        try {
            const response = await axios.get(`${URI}/all_purchase_order_group_items`);
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