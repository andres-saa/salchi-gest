
import { URI } from "./conection"


const Auditservice = {
    async getAudits() {
        try {
            const response = await fetch(`${URI}/audits`);
            const data = await response.json();  // Asegúrate de esperar a que la promesa se resuelva
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getChecklist() {
        try {
            const response = await fetch(`${URI}/checklists`);
            const data = await response.json();  // Asegúrate de esperar a que la promesa se resuelva
            return data;
        } catch (error) {
            console.log(error);
        }
    },





    async getChecklistWithItems(checklist_id) {
        try {
            const response = await fetch(`${URI}/checklists/${checklist_id}`);
            const data = await response.json();  // Asegúrate de esperar a que la promesa se resuelva
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getAuditCheckGroupsWithItems(audit_id) {
        try {
            const response = await fetch(`${URI}/audits/${audit_id}/check-groups-with-items`);
            const data = await response.json();  // Asegúrate de esperar a que la promesa se resuelva
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    
}





export {Auditservice}