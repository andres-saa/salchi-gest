import { defineStore } from "pinia";
import { URI } from "../service/conection";

import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export const useReportesStore = defineStore('reportes', {
    state: () => {


        const savedStartDate = localStorage.getItem('reportesStartDate');
        const savedEndDate = localStorage.getItem('reportesEndDate');

        return {
            dateRange: {
                startDate: savedStartDate ? new Date(savedStartDate) : new Date(new Date().setDate(new Date().getDate() - 7)),
                endDate: savedEndDate ? new Date(savedEndDate) : new Date(),
            },
            salesReport:
            {
                "total_sales": {
                    "total_sales": 0,
                    "total_orders": 0,
                    "average_ticket": 0
                }
            },
            selectedSites: [],
            order_status: 'enviada'



        }
    },

    getters: {
        lastWeek: (state) => {
            const today = new Date();
            const pastDate = new Date();
            pastDate.setDate(today.getDate() - 7); // +1 para incluir el día de hoy en el rango
            return {
                startDate: pastDate,
                endDate: today
            }
        },
        lastMidMonth: (state) => {
            const today = new Date();
            const pastDate = new Date();
            pastDate.setDate(today.getDate() - 14); // +1 para incluir el día de hoy en el rango
            return {
                startDate: pastDate,
                endDate: today
            }
        },
        lastMonth: (state) => {
            const today = new Date();
            const pastDate = new Date();
            pastDate.setDate(today.getDate() - 28); // +1 para incluir el día de hoy en el rango
            return {
                startDate: pastDate,
                endDate: today
            }
        },

        dateRangeDifference(state) {
            // Calcula la diferencia en días
            const diffTime = Math.abs(state.dateRange.endDate - state.dateRange.startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Determina el nombre del rango basado en la diferencia de días
            let rangeName = '';
            switch(diffDays) {
                case 6:
                    rangeName = 'Últimos 7 días';
                    break;
                case 13:
                    rangeName = 'Últimos 14 días';
                    break;
                case 27:
                    rangeName = 'Últimos 28 días';
                    break;
                default:
                    // No coincide con ningún rango predefinido
                    rangeName = null;
            }

            return {
                diffDays,
                rangeName
            };
        },
    },

    // actions y el resto de tu configuración...

   

    actions: {

        async fetchSalesReport() {
            const formattedStartDate = this.formatDate(this.dateRange.startDate);
            const formattedEndDate = this.formatDate(this.dateRange.endDate);
            const siteIds = this.selectedSites.map(site => site.site_id).join(',');

            // Construir la URL con parámetros de consulta
            const queryParams = new URLSearchParams({
                site_ids: siteIds,
                status: this.order_status,
                start_date: formattedStartDate,
                end_date: formattedEndDate
            });

            const url = `${URI}/sales_report?${queryParams.toString()}`;

            try {
                const response = await fetch(url, {
                    method: 'GET', // Método GET especificado aquí
                    headers: {
                        'Content-Type': 'application/json',
                        // Agrega aquí otros encabezados si son necesarios
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.salesReport = data


                // Maneja la respuesta
                console.log(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        },


        formatDate(date) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        },

        setDateRange(startDate, endDate) {
            // Actualizar el estado
            this.dateRange.startDate = new Date(startDate);
            this.dateRange.endDate = new Date(endDate);

            // Guardar las fechas en localStorage
            localStorage.setItem('reportesStartDate', this.dateRange.startDate.toISOString());
            localStorage.setItem('reportesEndDate', this.dateRange.endDate.toISOString());
        },



    },
   
})


