import{K as d,C as a,U as n,M as u}from"./index-5fe7872a.js";import{u as l}from"./site-fce46a38.js";const c=d("product",{persist:{key:"product",storage:localStorage,paths:[]},state:()=>({currentProductToEdit:{},currentProductToDelete:{},visibles:{dialogEditProduct:!1,dialogAddProduct:!1,dialogDeleteProduct:!1}}),getters:{},actions:{}}),i=l(),f={async getProductsByCategorySite(s,t){try{const e=await a.get(`${n}/products-all/category-id/${s}/site/${t}/${i.restaurant}`);return e.status===200?e.data:(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async updateProductInstanceStatus(s,t){try{const e=await a.put(`${n}/product-instance/${s}/status`,{new_status:t});return e.status===200?(console.log("Product instance status updated successfully:",e.data),e.data):(console.error("Failed to update product instance status:",e.status),null)}catch(e){return console.error("Error updating product instance status:",e),null}},async deleteProduct(s){try{const t=await a.put(`${n}/deactivate-product/${s}`);return t.status===200?(console.log("Product instance status updated successfully:",t.data),t.data):(console.error("Failed to update product instance status:",t.status),null)}catch(t){return console.error("Error updating product instance status:",t),null}},async uploadPhoto(s){try{const t=await a.post(`${n}/upload-photo-product`,s,{headers:{"Content-Type":"multipart/form-data"}});return t.status===200?(console.log("Image uploaded successfully:",t.data),t.data):(console.error("Failed to upload image:",t.status),null)}catch(t){return console.error("Error uploading image:",t),null}},async updateProductInstance(s,t){const e=c(),r=u();r.setLoading(!0,"actualizando en todas las sedes"),e.visibles.dialogEditProduct=!1;try{const o=await a.put(`${n}/products/update/${s.product_id}`,{product:s,additional_item_ids:t});return o.status===200?(r.setLoading(!1,"actualizando en todas las sedes"),console.log("Product instance status updated successfully:",o.data),o.data):(console.error("Failed to update product instance status:",o.status),r.setLoading(!1,"actualizando en todas las sedes"),null)}catch(o){return r.setLoading(!1,"actualizando en todas las sedes"),console.error("Error updating product instance status:",o),null}},async createProductInstance(s,t){c();const e=u();e.setLoading(!0,"creando producto en todas las sedes");try{const r=await a.post(`${n}/products/create/`,{product:s,additional_item_ids:t});return r.status===200?(e.setLoading(!1,"creando producto en todas las sedes"),console.log("Product created successfully:",r.data),r.data):(console.error("Failed to create product:",r.status),e.setLoading(!1,"creando producto en todas las sedes"),null)}catch(r){return e.setLoading(!1,"creando producto en todas las sedes"),console.error("Error creating product:",r),null}}};export{f as p,c as u};