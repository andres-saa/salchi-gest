import axios from "axios";
import { URI } from "../conection";
import { useReportesStore } from '../../store/reportes';
import { TRUE } from "sass";

export const cdiInventoryReportsService = {

    async getAllCdiInventoryReports() {
        const store = useReportesStore()
        try {
            store.setLoading(true,"cargango reportes")
            const response = await axios.get(`${URI}/all-cdi-inventory-report`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")
                return response.data;
                
            } else {
                store.setLoading(false,"cargango reportes")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async getAllMyCdiInventoryReports(responsible_id) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango reportes")
            const response = await axios.get(`${URI}/all-cdi-inventory-report/${responsible_id}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")

                return response.data;
                
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false,"cargango reportes")

                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")
            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async getAllMyCdiInventoryReportsFiltered(responsible_id, start_date, end_date) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango reportes")
            // Asegúrate de que la URL refleja la estructura correcta según la definición del endpoint en tu servidor.
            const response = await axios.get(`${URI}/all-cdi-inventory-report/${responsible_id}/${start_date}/${end_date}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")
                return response.data;
            } else {
                console.error('An error occurred while fetching the cdi inventory reports:', response.status);
                store.setLoading(false,"cargango reportes")

                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the cdi inventory reports:', error);
            store.setLoading(false,"cargango reportes")

            return null;
        }
    },


    async getAllCdiInventoryReportsFiltered(site_ids, start_date, end_date) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango reportes")
            // Asegúrate de que la URL refleja la estructura correcta según la definición del endpoint en tu servidor.
            const response = await axios.get(`${URI}/all-cdi-inventory-report-filtered/${site_ids}/${start_date}/${end_date}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")

                return response.data;
            } else {
                console.error('An error occurred while fetching the cdi inventory reports:', response.status);
                store.setLoading(false,"cargango reportes")

                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")

            console.error('An error occurred while fetching the cdi inventory reports:', error);
            return null;
        }
    },

    async getGroupsWithItems() {
        const store = useReportesStore()

        try {
            store.setLoading(true,"carganDo GRUPOS")
            const response = await axios.get(`${URI}/get_cdi_groups_with_items`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")

                return response.data;
            } else {
                store.setLoading(false,"cargango reportes")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },
    
    async getAllCdiInventoryUnitMeasures() {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango UNIDADES")
            const response = await axios.get(`${URI}/daily_inventory_unit_measures`);
            if (response.status === 200) {
                store.setLoading(false,"cargango UNIDADES")

                return response.data;
            } else {
                store.setLoading(false,"cargango UNIDADES")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango UNIDADES")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },

    async InsertCdiGrupInventory(data) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango GRUPOS")
            const response = await axios.post(`${URI}/insert_cdi_inventory_group`,data);
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

    async InsertCdiUnitMeasure(unit_measure) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango UNIDADES")
            const response = await axios.post(`${URI}/insert_unit_measure`,unit_measure);
            if (response.status === 200) {
                store.setLoading(false,"cargango UNIDADES")

                return response.data;
                
                
            } else {
                console.error('An error occurred while fetching the ingredients:', response.status);
                store.setLoading(false,"cargango UNIDADES")

                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango UNIDADES")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },


    async InsertCdiInventory(data) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"GUARDANDO reporte")
            const response = await axios.post(`${URI}/insert_cdi_complete_inventory`,data);
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


    async InsertCdiItemInventory(data) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"GUARDANDO ITEM")
            const response = await axios.post(`${URI}/insert_cdi_inventory_item`,data);
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



    async disableCdiGrupInventory(group_id) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"BORRANDO ITEM")
            const response = await axios.put(`${URI}/disable_cdi_inventory_group/${group_id}`);
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

    async disableUnitMeasureInventory(unit_measure_id) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"BORRANDO UNIDAD")
            const response = await axios.put(`${URI}/disable_unit_measure/${unit_measure_id}`);
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


    async disableCdiItemInventory(item_id) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"BORRANDO ITEM")
            const response = await axios.put(`${URI}/disable_cdi_inventory_item/${item_id}`);
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



    async getAllCdiInventoryItems(cdi_item_group_name) {
        const store = useReportesStore()

        try {
            store.setLoading(true,"CARGANDO ITEMS")
            const response = await axios.get(`${URI}/group_cdi_inventory_items/${cdi_item_group_name}`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")

                return response.data;
            } else {
                store.setLoading(false,"cargango reportes")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")
            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },


    async getCdiInventoryEntriesByCdiInventoryID(cdi_inventory_id) {
        const store = useReportesStore()

        try {
        
            const response = await axios.get(`${URI}/cdi-inventory-entries/${cdi_inventory_id}`);
            
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

    async getCdiInventoryGroups() {
        const store = useReportesStore()

        try {
            store.setLoading(true,"cargango reportes")
            const response = await axios.get(`${URI}/group_cdi_inventory_items`);
            if (response.status === 200) {
                store.setLoading(false,"cargango reportes")

                return response.data;
            } else {
                store.setLoading(false,"cargango reportes")

                console.error('An error occurred while fetching the ingredients:', response.status);
                return null;
            }
        } catch (error) {
            store.setLoading(false,"cargango reportes")

            console.error('An error occurred while fetching the ingredients:', error);
            return null;
        }
    },
}