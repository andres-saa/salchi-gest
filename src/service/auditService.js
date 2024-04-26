import axios from "axios";
import { URI } from "./conection"
const Auditservice = {
    async getAudits() {
        try {
            const response = await axios.get(`${URI}/audits`);
            return response.data; // `axios` automatically parses the JSON, so no need to call .json()
        } catch (error) {
            console.error(error);
        }
    },

    async getChecklist() {
        try {
            const response = await axios.get(`${URI}/checklists`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getCoordinators() {
        try {
            const response = await axios.get(`${URI}/audits-coordinators`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getChecklistWithItems(checklist_id) {
        try {
            const response = await axios.get(`${URI}/checklists/${checklist_id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getAuditCheckGroupsWithItems(audit_id) {
        try {
            const response = await axios.get(`${URI}/audits/${audit_id}/check-groups-with-items`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getAuditCheckGroupsWithItemsFiltered(coordinator_id, date, site_id) {
        try {
            // Ensure parameters are correctly passed and handled on the backend
            const response = await axios.get(`${URI}/checklists-with-filters`, {
                params: { coordinator_id, date, site_id }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export { Auditservice };
