import{H as n,j as o,U as s}from"./index-f56db1a7.js";import"./sass.default-a1d89e71.js";const g={async getAllCdiInventoryReports(){const t=n();try{t.setLoading(!0,"cargango reportes");const e=await o.get(`${s}/all-cdi-inventory-report`);return e.status===200?(t.setLoading(!1,"cargango reportes"),e.data):(t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e),null}},async getAllMyCdiInventoryReports(t){const e=n();try{e.setLoading(!0,"cargango reportes");const r=await o.get(`${s}/all-cdi-inventory-report/${t}`);return r.status===200?(e.setLoading(!1,"cargango reportes"),r.data):(console.error("An error occurred while fetching the ingredients:",r.status),e.setLoading(!1,"cargango reportes"),null)}catch(r){return e.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",r),null}},async getAllMyCdiInventoryReportsFiltered(t,e,r){const i=n();try{i.setLoading(!0,"cargango reportes");const a=await o.get(`${s}/all-cdi-inventory-report/${t}/${e}/${r}`);return a.status===200?(i.setLoading(!1,"cargango reportes"),a.data):(console.error("An error occurred while fetching the cdi inventory reports:",a.status),i.setLoading(!1,"cargango reportes"),null)}catch(a){return console.error("An error occurred while fetching the cdi inventory reports:",a),i.setLoading(!1,"cargango reportes"),null}},async getAllCdiInventoryReportsFiltered(t,e,r){const i=n();try{i.setLoading(!0,"cargango reportes");const a=await o.get(`${s}/all-cdi-inventory-report-filtered/${t}/${e}/${r}`);return a.status===200?(i.setLoading(!1,"cargango reportes"),a.data):(console.error("An error occurred while fetching the cdi inventory reports:",a.status),i.setLoading(!1,"cargango reportes"),null)}catch(a){return i.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the cdi inventory reports:",a),null}},async getGroupsWithItems(){const t=n();try{t.setLoading(!0,"carganDo GRUPOS");const e=await o.get(`${s}/get_cdi_groups_with_items`);return e.status===200?(t.setLoading(!1,"cargango reportes"),e.data):(t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e),null}},async getAllCdiInventoryUnitMeasures(){const t=n();try{t.setLoading(!0,"cargango UNIDADES");const e=await o.get(`${s}/daily_inventory_unit_measures`);return e.status===200?(t.setLoading(!1,"cargango UNIDADES"),e.data):(t.setLoading(!1,"cargango UNIDADES"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return t.setLoading(!1,"cargango UNIDADES"),console.error("An error occurred while fetching the ingredients:",e),null}},async InsertCdiGrupInventory(t){const e=n();try{e.setLoading(!0,"cargango GRUPOS");const r=await o.post(`${s}/insert_cdi_inventory_group`,t);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async InsertCdiUnitMeasure(t){const e=n();try{e.setLoading(!0,"cargango UNIDADES");const r=await o.post(`${s}/insert_unit_measure`,t);return r.status===200?(e.setLoading(!1,"cargango UNIDADES"),r.data):(console.error("An error occurred while fetching the ingredients:",r.status),e.setLoading(!1,"cargango UNIDADES"),null)}catch(r){return e.setLoading(!1,"cargango UNIDADES"),console.error("An error occurred while fetching the ingredients:",r),null}},async InsertCdiInventory(t){const e=n();try{e.setLoading(!0,"GUARDANDO reporte");const r=await o.post(`${s}/insert_cdi_complete_inventory`,t);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async InsertCdiItemInventory(t){const e=n();try{e.setLoading(!0,"GUARDANDO ITEM");const r=await o.post(`${s}/insert_cdi_inventory_item`,t);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async disableCdiGrupInventory(t){const e=n();try{e.setLoading(!0,"BORRANDO ITEM");const r=await o.put(`${s}/disable_cdi_inventory_group/${t}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async disableUnitMeasureInventory(t){const e=n();try{e.setLoading(!0,"BORRANDO UNIDAD");const r=await o.put(`${s}/disable_unit_measure/${t}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async disableCdiItemInventory(t){const e=n();try{e.setLoading(!0,"BORRANDO ITEM");const r=await o.put(`${s}/disable_cdi_inventory_item/${t}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async getAllCdiInventoryItems(t){const e=n();try{e.setLoading(!0,"CARGANDO ITEMS");const r=await o.get(`${s}/group_cdi_inventory_items/${t}`);return r.status===200?(e.setLoading(!1,"cargango reportes"),r.data):(e.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return e.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",r),null}},async getCdiInventoryEntriesByCdiInventoryID(t){n();try{const e=await o.get(`${s}/cdi-inventory-entries/${t}`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async getCdiInventoryGroups(){const t=n();try{t.setLoading(!0,"cargango reportes");const e=await o.get(`${s}/group_cdi_inventory_items`);return e.status===200?(t.setLoading(!1,"cargango reportes"),e.data):(t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return t.setLoading(!1,"cargango reportes"),console.error("An error occurred while fetching the ingredients:",e),null}}};export{g as c};
