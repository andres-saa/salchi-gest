import{j as o,U as n,H as u}from"./index-db916a24.js";import{u as c}from"./productStore-c855a9c1.js";const i={async getProductsByCategorySite(s,e){try{const t=await o.get(`${n}/products-all/category-id/${s}/site/${e}`);return t.status===200?t.data:(console.error("An error occurred while fetching the ingredients:",t.status),null)}catch(t){return console.error("An error occurred while fetching the ingredients:",t),null}},async updateProductInstanceStatus(s,e){try{const t=await o.put(`${n}/product-instance/${s}/status`,{new_status:e});return t.status===200?(console.log("Product instance status updated successfully:",t.data),t.data):(console.error("Failed to update product instance status:",t.status),null)}catch(t){return console.error("Error updating product instance status:",t),null}},async deleteProduct(s){try{const e=await o.put(`${n}/deactivate-product/${s}`);return e.status===200?(console.log("Product instance status updated successfully:",e.data),e.data):(console.error("Failed to update product instance status:",e.status),null)}catch(e){return console.error("Error updating product instance status:",e),null}},async updateProductInstance(s,e){const t=c(),a=u();a.setLoading(!0,"actualizando en todas las sedes"),t.visibles.dialogEditProduct=!1;try{const r=await o.put(`${n}/products/update/${s.product_id}`,{product:s,additional_item_ids:e});return r.status===200?(a.setLoading(!1,"actualizando en todas las sedes"),console.log("Product instance status updated successfully:",r.data),r.data):(console.error("Failed to update product instance status:",r.status),a.setLoading(!1,"actualizando en todas las sedes"),null)}catch(r){return a.setLoading(!1,"actualizando en todas las sedes"),console.error("Error updating product instance status:",r),null}}};export{i as p};