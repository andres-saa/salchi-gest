import{j as n,U as o}from"./index-f28936d7.js";import{u as s}from"./site-6e5b842b.js";s();const c={async getAditional(r){try{const t=await n.get(`${o}/adicionales-new/${r}`);return t.status===200?t.data:(console.error("An error occurred while fetching the ingredients:",t.status),null)}catch(t){return console.error("An error occurred while fetching the ingredients:",t),null}},async getAditionalGroup(r){const t={instance_product_ids:r};try{const e=await n.post(`${o}/adicionales-new-group/`,t);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async getAllAditions(){const t=s().site.site_id;try{const e=await n.get(`${o}/adicionales-unique-site/${t}/`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async toggleAditionalStatus(r,t){try{const e=await n.put(`${o}/toggle-adicionales/${r}`,t);return e.status===200?e.data:(console.error("An error occurred while updating the aditional status:",e.status),null)}catch(e){return console.error("An error occurred while updating the aditional status:",e),null}},async getAllAditionsRegistered(){try{const r=await n.get(`${o}/all-aditional-registered/`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}}};export{c as a};
