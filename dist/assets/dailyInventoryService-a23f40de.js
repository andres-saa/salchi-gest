import{h as t,U as n}from"./index-53be5af1.js";const l={async getAllDailyInventoryReports(){try{const e=await t.get(`${n}/all-daily-inventory-report`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async getAllMyDailyInventoryReports(e){try{const r=await t.get(`${n}/all-daily-inventory-report/${e}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async getAllMyDailyInventoryReportsFiltered(e,r,s){try{const o=await t.get(`${n}/all-daily-inventory-report/${e}/${r}/${s}`);return o.status===200?o.data:(console.error("An error occurred while fetching the daily inventory reports:",o.status),null)}catch(o){return console.error("An error occurred while fetching the daily inventory reports:",o),null}},async getAllDailyInventoryReportsFiltered(e,r,s){try{const o=await t.get(`${n}/all-daily-inventory-report-filtered/${e}/${r}/${s}`);return o.status===200?o.data:(console.error("An error occurred while fetching the daily inventory reports:",o.status),null)}catch(o){return console.error("An error occurred while fetching the daily inventory reports:",o),null}},async getGroupsWithItems(){try{const e=await t.get(`${n}/get_groups_with_items`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async getAllDailyInventoryUnitMeasures(){try{const e=await t.get(`${n}/daily_inventory_unit_measures`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async InsertDailyGrupInventory(e){try{const r=await t.post(`${n}/insert_daily_inventory_group`,e);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async InsertDailyInventory(e){try{const r=await t.post(`${n}/insert_complete_inventory`,e);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async InsertDailyItemInventory(e){try{const r=await t.post(`${n}/insert_daily_inventory_item`,e);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async disableDailyGrupInventory(e){try{const r=await t.put(`${n}/disable_daily_inventory_group/${e}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async disableDailyItemInventory(e){try{const r=await t.put(`${n}/disable_daily_inventory_item/${e}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async getAllDailyInventoryItems(e){try{const r=await t.get(`${n}/group_daily_inventory_items/${e}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async getDailyInventoryEntriesByDailyInventoryID(e){try{const r=await t.get(`${n}/daily-inventory-entries/${e}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}},async getDailyInventoryGroups(){try{const e=await t.get(`${n}/group_daily_inventory_items`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}}};export{l as d};
