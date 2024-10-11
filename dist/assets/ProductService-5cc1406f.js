import{I as n,v as a,U as o,J as c}from"./index-a2ef39b5.js";import{u as d}from"./site-0687bd76.js";const l=n("product",{persist:{key:"product",storage:localStorage,paths:[]},state:()=>({currentProductToEdit:{},currentProductToDelete:{},visibles:{dialogEditProduct:!1,dialogDeleteProduct:!1}}),getters:{},actions:{}}),i=d(),f={async getProductsByCategorySite(s,t){try{const e=await a.get(`${o}/products-all/category-id/${s}/site/${t}/${i.restaurant}`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async updateProductInstanceStatus(s,t){try{const e=await a.put(`${o}/product-instance/${s}/status`,{new_status:t});return e.status===200?(console.log("Product instance status updated successfully:",e.data),e.data):(console.error("Failed to update product instance status:",e.status),null)}catch(e){return console.error("Error updating product instance status:",e),null}},async deleteProduct(s){try{const t=await a.put(`${o}/deactivate-product/${s}`);return t.status===200?(console.log("Product instance status updated successfully:",t.data),t.data):(console.error("Failed to update product instance status:",t.status),null)}catch(t){return console.error("Error updating product instance status:",t),null}},async uploadPhoto(s){try{const t=await a.post(`${o}/upload-photo-product`,s,{headers:{"Content-Type":"multipart/form-data"}});return t.status===200?(console.log("Image uploaded successfully:",t.data),t.data):(console.error("Failed to upload image:",t.status),null)}catch(t){return console.error("Error uploading image:",t),null}},async updateProductInstance(s,t){const e=l(),u=c();u.setLoading(!0,"actualizando en todas las sedes"),e.visibles.dialogEditProduct=!1;try{const r=await a.put(`${o}/products/update/${s.product_id}`,{product:s,additional_item_ids:t});return r.status===200?(u.setLoading(!1,"actualizando en todas las sedes"),console.log("Product instance status updated successfully:",r.data),r.data):(console.error("Failed to update product instance status:",r.status),u.setLoading(!1,"actualizando en todas las sedes"),null)}catch(r){return u.setLoading(!1,"actualizando en todas las sedes"),console.error("Error updating product instance status:",r),null}}};export{f as p,l as u};
