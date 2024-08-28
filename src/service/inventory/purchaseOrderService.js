import axios from "axios";
import { URI } from "../conection";
import { useReportesStore } from "../../store/reportes";
import { useRoleStore } from "../../store/rolesStore";
import router from "../../router";

export const purchaseOrderService = {

    report: useReportesStore(),

    async getAllpurchaseOrderReports() {

        this.report.setLoading(true, 'cargando reportes')
        try {
            const response = await axios.get(`${URI}/all-purchase_orders`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando reportes')
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
        this.report.setLoading(true, 'cargando mis ordenes')
        try {
            const response = await axios.get(`${URI}/all-purchase_orders_by_responsible_id/${responsible_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando mis ordenes')
                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando mis ordenes')
            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async getAllMypurchaseOrderReportsFiltered(responsible_id, start_date, end_date) {
        try {
            this.report.setLoading(true, 'cargando ordenes filtradas')

            const response = await axios.get(`${URI}/all-purchase-orders-filtered/${responsible_id}/${start_date}/${end_date}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando ordenes filtradas')
                return response.data;
            } else {
                this.report.setLoading(false, 'cargando ordenes filtradas')
                console.error('An error occurred while fetching the daily inventory reports:', response.status);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the daily inventory reports:', error);
            this.report.setLoading(false, 'cargando ordenes filtradas')

            return null;
        }
    },


    

    async getAllpurchaseOrderReportsFiltered(site_ids, start_date, end_date) {
        try {
            this.report.setLoading(true, 'cargando ordenes filtradas')

            const response = await axios.get(`${URI}/all-purchase-orders-by-site-filtered/${site_ids}/${start_date}/${end_date}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando ordenes filtradas')

                return response.data;
            } else {
                this.report.setLoading(false, 'cargando ordenes filtradas')

                console.error('An error occurred while fetching the daily inventory reports:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando ordenes filtradas')

            console.error('An error occurred while fetching the daily inventory reports:', error);
            return null;
        }
    },

    async getGroupsWithItems() {
        

        try {
            this.report.setLoading(true, 'cargando items')
            const response = await axios.get(`${URI}/get_purchase_item_groups_with_items`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando items')
                return response.data;
            } else {
                this.report.setLoading(false, 'cargando items')
                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando items')
            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },






    async getPurchaseOrderHistory(purchase_order_id) {
        try {
            this.report.setLoading(true, 'cargando historial')
            const response = await axios.get(`${URI}/purchase-order-history/${purchase_order_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando historial')
                return response.data;
            } else {
                this.report.setLoading(true, 'cargando historial')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(true, 'cargando historial')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },











    
    async getAllpurchaseOrderUnitMeasures() {
        try {
            this.report.setLoading(true, 'cargando unidades de medida')

            const response = await axios.get(`${URI}/daily_inventory_unit_measures`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando unidades de medida')
                return response.data;
            } else {
                this.report.setLoading(false, 'cargando unidades de medida')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando unidades de medida')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async InsertDailyGrupPurchaseOrder(data) {
        try {
            this.report.setLoading(true, 'guardando')

            const response = await axios.post(`${URI}/insert_purchase_items_group`,data);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                this.report.setLoading(false, 'guardando')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'guardando')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },


    async InsertpurchaseOrder(data) {
        this.report.setLoading(true, 'Enviando orden de compra')
        try {
            const response = await axios.post(`${URI}/insert_complete_order`,data);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando reportes')
                
                if(response.data?.inventory_id.code == 400) {
                    alert(response.data.inventory_id.message)
                    return
                }
                

                return response.data;

                
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                this.report.setLoading(false, 'cargando reportes')
              
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando reportes')
     
            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },


    async InsertPurchaserOrderItem(data) {
        try {
            this.report.setLoading(true, 'guardando')
            const response = await axios.post(`${URI}/insert_purchase_order_item`,data);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                this.report.setLoading(false, 'guardando')

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
            this.report.setLoading(false, 'guardando')

            return null;
        }
    },


    async PreparePurchaserOrder(data) {
        try {
            const response = await axios.post(`${URI}/prepare-purchase-order`,data);
            this.report.setLoading(true, 'guardando')

            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')
                return response.data;
            } else {
                this.report.setLoading(false, 'guardando')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'guardando')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    async disablePurchaseGroupItems(group_id) {
        try {
            this.report.setLoading(true, 'guardando')

            const response = await axios.put(`${URI}/disable_purchase_order_group/${group_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                this.report.setLoading(false, 'guardando')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'guardando')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async disableOrderPUrchaseItem(item_id) {
        try {
            this.report.setLoading(true, 'guardando')

            const response = await axios.put(`${URI}/disable_order_purchase_item/${item_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                this.report.setLoading(false, 'guardando')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'guardando')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    async getAllpurchaseOrderItems(daily_item_group_name) {
        this.report.setLoading(true,`cargando ${daily_item_group_name}`)
        try {
            const response = await axios.get(`${URI}/group-purchase-items-by-group-name/${daily_item_group_name}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                this.report.setLoading(false, 'guardando')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'guardando')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },



    
    async getPurchaseOrderByLap_id(lap_id) {
        this.report.setLoading(true, `cargando ordenes en etapa ${lap_id}`)

        try {
            const response = await axios.get(`${URI}/all-purchase_orders_by_lap_id/${lap_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'guardando')

                return response.data;
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                this.report.setLoading(false, 'guardando')

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the ingredients:', error);
            this.report.setLoading(false, 'guardando')

            return null;
        }
    },


    async getpurchaseOrderEntriesBypurchaseOrderID(purchase_order_id) {
        try {
            this.report.setLoading(true, 'cargando entradas')

            const response = await axios.get(`${URI}/purchase-order-entries-by-purchase-id/${purchase_order_id}`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando entradas')

                return response.data;
            } else {
                this.report.setLoading(false, 'cargando entradas')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando entradas')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async getpurchaseOrderGroups() {
        try {
            this.report.setLoading(true, 'cargando grupos')

            const response = await axios.get(`${URI}/all_purchase_order_group_items`);
            if (response.status === 200) {
                this.report.setLoading(false, 'cargando grupos')

                return response.data;
            } else {
                this.report.setLoading(false, 'cargando grupos')

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            this.report.setLoading(false, 'cargando grupos')

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },
}