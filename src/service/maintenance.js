import { URI } from "./conection";
import { useReportesStore } from "@/store/reportes";

const loading = useReportesStore();

const equipmentService = {

    async getSitesWithAllEquipment(equipmentIds) {
        loading.setLoading(true, 'cargando sitios con todos los equipos');
        try {
            const response = await fetch(`${URI}/equipment/sites-with-all`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(equipmentIds),
            });
            const data = await response.json();
            loading.setLoading(false, 'cargando sitios con todos los equipos');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando sitios con todos los equipos');
            return []
        }
    },


    async uploadImage (productId,file) {
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const response = await fetch(`${URI}/upload-product-image/${productId}`, {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error('Error al subir la imagen');
            }
    
            // Manejar respuesta de éxito
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            // Manejar error
        }
    },

    async getAllEquipment() {
        loading.setLoading(true, 'cargando equipos');
        try {
            const response = await fetch(`${URI}/equipment`);
            const data = await response.json();
            loading.setLoading(false, 'cargando equipos');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando equipos');
            console.log(error);
        }
    },

    async getEquipmentById(equipmentId) {
        loading.setLoading(true, 'cargando equipo');
        try {
            const response = await fetch(`${URI}/equipment/${equipmentId}`);
            const data = await response.json();
            loading.setLoading(false, 'cargando equipo');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando equipo');
            console.log(error);
        }
    },

    async createEquipment(equipmentData) {
        loading.setLoading(true, 'creando equipo');
        try {
            const response = await fetch(`${URI}/equipment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(equipmentData),
            });
            const data = await response.json();
            loading.setLoading(false, 'creando equipo');
            return data;
        } catch (error) {
            loading.setLoading(false, 'creando equipo');
            console.log(error);
        }
    },

    async updateEquipment(equipmentId, equipmentData) {
        loading.setLoading(true, 'actualizando equipo');
        try {
            const response = await fetch(`${URI}/equipment/${equipmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(equipmentData),
            });
            const data = await response.json();
            loading.setLoading(false, 'actualizando equipo');
            return data;
        } catch (error) {
            loading.setLoading(false, 'actualizando equipo');
            console.log(error);
        }
    },


    async getEquipmentBySite(siteId) {
        loading.setLoading(true, 'cargando equipos');
        try {
            const response = await fetch(`${URI}/equipment/site/${siteId}`);
            const data = await response.json();
            loading.setLoading(false, 'cargando equipos por sitio');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando equipos por sitio');
            console.log(error);
        }
    },

    async getSitesWithAllEquipmentByNames(equipmentNames) {
        loading.setLoading(true, 'cargando sitios con todos los equipos por nombres');
        try {
            const response = await fetch(`${URI}/equipment/sites-with-all-by-names`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( equipmentNames ),
            });
            if (!response.ok) {
                throw new Error('Error al obtener los sitios');
            }
            const data = await response.json();
            loading.setLoading(false, 'cargando sitios con todos los equipos por nombres');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando sitios con todos los equipos por nombres');
            console.error('Error al cargar sitios con todos los equipos por nombres:', error);
            return [];
        }
    },
    

    async deleteEquipment(equipmentId) {
        loading.setLoading(true, 'eliminando equipo');
        try {
            const response = await fetch(`${URI}/equipment/${equipmentId}`, {
                method: 'DELETE',
            });
            loading.setLoading(false, 'eliminando equipo');
            return response.ok;
        } catch (error) {
            loading.setLoading(false, 'eliminando equipo');
            console.log(error);
        }
    },
};

const maintenanceService = {



    async completeMaintenance(maintenanceId, remarks) {
        loading.setLoading(true, 'completando mantenimiento');
        try {
            const url = new URL(`${URI}/maintenance/${maintenanceId}/complete`);
            url.searchParams.append('remarks', remarks); // Añade 'remarks' como parámetro de consulta
    
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Error al completar el mantenimiento');
            }
    
            const data = await response.json();
            loading.setLoading(false, 'completando mantenimiento');
            return data;
        } catch (error) {
            loading.setLoading(false, 'completando mantenimiento');
            console.error('Error al completar el mantenimiento:', error);
        }
    },
    
    async getMaintenanceBySite(siteId) {
        loading.setLoading(true, 'cargando mantenimientos por sede');
        try {
            const response = await fetch(`${URI}/maintenance/site/${siteId}`);
            const data = await response.json();
            loading.setLoading(false, 'cargando mantenimientos por sede');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando mantenimientos por sede');
            console.log(error);
        }
    },

    async getAllMaintenanceRecords() {
        loading.setLoading(true, 'cargando mantenimientos');
        try {
            const response = await fetch(`${URI}/maintenance`);
            const data = await response.json();
            loading.setLoading(false, 'cargando mantenimientos');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando mantenimientos');
            console.log(error);
        }
    },

    async getMaintenanceById(maintenanceId) {
        loading.setLoading(true, 'cargando mantenimiento');
        try {
            const response = await fetch(`${URI}/maintenance/${maintenanceId}`);
            const data = await response.json();
            loading.setLoading(false, 'cargando mantenimiento');
            return data;
        } catch (error) {
            loading.setLoading(false, 'cargando mantenimiento');
            console.log(error);
        }
    },

    async createMaintenanceRecord(maintenanceData) {
        loading.setLoading(true, 'creando mantenimiento');
        try {
            const response = await fetch(`${URI}/maintenance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(maintenanceData),
            });
            const data = await response.json();
            loading.setLoading(false, 'creando mantenimiento');
            return data;
        } catch (error) {
            loading.setLoading(false, 'creando mantenimiento');
            console.log(error);
        }
    },

    async updateMaintenanceRecord(maintenanceId, maintenanceData) {
        loading.setLoading(true, 'actualizando mantenimiento');
        try {
        const response = await fetch(`${URI}/maintenance/${maintenanceId}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(maintenanceData),
        });
        const data = await response.json();
        loading.setLoading(false, 'actualizando mantenimiento');
        return data;
        } catch (error) {
        loading.setLoading(false, 'actualizando mantenimiento');
        console.log(error);
        }
        },
        async deleteMaintenanceRecord(maintenanceId) {
            loading.setLoading(true, 'eliminando mantenimiento');
            try {
                const response = await fetch(`${URI}/maintenance/${maintenanceId}`, {
                    method: 'DELETE',
                });
                loading.setLoading(false, 'eliminando mantenimiento');
                return response.ok;
            } catch (error) {
                loading.setLoading(false, 'eliminando mantenimiento');
                console.log(error);
            }
        },
    };

    export { equipmentService, maintenanceService };
