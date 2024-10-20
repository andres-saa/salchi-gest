<<<<<<<< HEAD:dist/assets/maintenance-d33756b4.js
import{J as r,U as t}from"./index-9672dc6b.js";const e=r(),d={async getSitesWithAllEquipment(o){e.setLoading(!0,"cargando sitios con todos los equipos");try{const a=await(await fetch(`${t}/equipment/sites-with-all`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"cargando sitios con todos los equipos"),a}catch{return e.setLoading(!1,"cargando sitios con todos los equipos"),[]}},async uploadImage(o,n){const a=new FormData;a.append("file",n);try{if(!(await fetch(`${t}/upload-product-image/${o}`,{method:"POST",body:a})).ok)throw new Error("Error al subir la imagen")}catch(s){console.error("Error al subir la imagen:",s)}},async getAllEquipment(){e.setLoading(!0,"cargando equipos");try{const n=await(await fetch(`${t}/equipment`)).json();return e.setLoading(!1,"cargando equipos"),n}catch(o){e.setLoading(!1,"cargando equipos"),console.log(o)}},async getEquipmentById(o){e.setLoading(!0,"cargando equipo");try{const a=await(await fetch(`${t}/equipment/${o}`)).json();return e.setLoading(!1,"cargando equipo"),a}catch(n){e.setLoading(!1,"cargando equipo"),console.log(n)}},async createEquipment(o){e.setLoading(!0,"creando equipo");try{const a=await(await fetch(`${t}/equipment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"creando equipo"),a}catch(n){e.setLoading(!1,"creando equipo"),console.log(n)}},async updateEquipment(o,n){e.setLoading(!0,"actualizando equipo");try{const s=await(await fetch(`${t}/equipment/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();return e.setLoading(!1,"actualizando equipo"),s}catch(a){e.setLoading(!1,"actualizando equipo"),console.log(a)}},async getEquipmentBySite(o){e.setLoading(!0,"cargando equipos");try{const a=await(await fetch(`${t}/equipment/site/${o}`)).json();return e.setLoading(!1,"cargando equipos por sitio"),a}catch(n){e.setLoading(!1,"cargando equipos por sitio"),console.log(n)}},async getSitesWithAllEquipmentByNames(o){e.setLoading(!0,"cargando sitios con todos los equipos por nombres");try{const n=await fetch(`${t}/equipment/sites-with-all-by-names`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!n.ok)throw new Error("Error al obtener los sitios");const a=await n.json();return e.setLoading(!1,"cargando sitios con todos los equipos por nombres"),a}catch(n){return e.setLoading(!1,"cargando sitios con todos los equipos por nombres"),console.error("Error al cargar sitios con todos los equipos por nombres:",n),[]}},async deleteEquipment(o){e.setLoading(!0,"eliminando equipo");try{const n=await fetch(`${t}/equipment/${o}`,{method:"DELETE"});return e.setLoading(!1,"eliminando equipo"),n.ok}catch(n){e.setLoading(!1,"eliminando equipo"),console.log(n)}}},l={async completeMaintenance(o,n){e.setLoading(!0,"completando mantenimiento");try{const a=new URL(`${t}/maintenance/${o}/complete`);a.searchParams.append("remarks",n);const s=await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error("Error al completar el mantenimiento");const i=await s.json();return e.setLoading(!1,"completando mantenimiento"),i}catch(a){e.setLoading(!1,"completando mantenimiento"),console.error("Error al completar el mantenimiento:",a)}},async getMaintenanceBySite(o){e.setLoading(!0,"cargando mantenimientos por sede");try{const a=await(await fetch(`${t}/maintenance/site/${o}`)).json();return e.setLoading(!1,"cargando mantenimientos por sede"),a}catch(n){e.setLoading(!1,"cargando mantenimientos por sede"),console.log(n)}},async getAllMaintenanceRecords(){e.setLoading(!0,"cargando mantenimientos");try{const n=await(await fetch(`${t}/maintenance`)).json();return e.setLoading(!1,"cargando mantenimientos"),n}catch(o){e.setLoading(!1,"cargando mantenimientos"),console.log(o)}},async getMaintenanceById(o){e.setLoading(!0,"cargando mantenimiento");try{const a=await(await fetch(`${t}/maintenance/${o}`)).json();return e.setLoading(!1,"cargando mantenimiento"),a}catch(n){e.setLoading(!1,"cargando mantenimiento"),console.log(n)}},async createMaintenanceRecord(o){e.setLoading(!0,"creando mantenimiento");try{const a=await(await fetch(`${t}/maintenance`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"creando mantenimiento"),a}catch(n){e.setLoading(!1,"creando mantenimiento"),console.log(n)}},async updateMaintenanceRecord(o,n){e.setLoading(!0,"actualizando mantenimiento");try{const s=await(await fetch(`${t}/maintenance/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();return e.setLoading(!1,"actualizando mantenimiento"),s}catch(a){e.setLoading(!1,"actualizando mantenimiento"),console.log(a)}},async deleteMaintenanceRecord(o){e.setLoading(!0,"eliminando mantenimiento");try{const n=await fetch(`${t}/maintenance/${o}`,{method:"DELETE"});return e.setLoading(!1,"eliminando mantenimiento"),n.ok}catch(n){e.setLoading(!1,"eliminando mantenimiento"),console.log(n)}}};export{d as e,l as m};
========
import{J as r,U as t}from"./index-acdf86d7.js";const e=r(),d={async getSitesWithAllEquipment(o){e.setLoading(!0,"cargando sitios con todos los equipos");try{const a=await(await fetch(`${t}/equipment/sites-with-all`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"cargando sitios con todos los equipos"),a}catch{return e.setLoading(!1,"cargando sitios con todos los equipos"),[]}},async uploadImage(o,n){const a=new FormData;a.append("file",n);try{if(!(await fetch(`${t}/upload-product-image/${o}`,{method:"POST",body:a})).ok)throw new Error("Error al subir la imagen")}catch(s){console.error("Error al subir la imagen:",s)}},async getAllEquipment(){e.setLoading(!0,"cargando equipos");try{const n=await(await fetch(`${t}/equipment`)).json();return e.setLoading(!1,"cargando equipos"),n}catch(o){e.setLoading(!1,"cargando equipos"),console.log(o)}},async getEquipmentById(o){e.setLoading(!0,"cargando equipo");try{const a=await(await fetch(`${t}/equipment/${o}`)).json();return e.setLoading(!1,"cargando equipo"),a}catch(n){e.setLoading(!1,"cargando equipo"),console.log(n)}},async createEquipment(o){e.setLoading(!0,"creando equipo");try{const a=await(await fetch(`${t}/equipment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"creando equipo"),a}catch(n){e.setLoading(!1,"creando equipo"),console.log(n)}},async updateEquipment(o,n){e.setLoading(!0,"actualizando equipo");try{const s=await(await fetch(`${t}/equipment/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();return e.setLoading(!1,"actualizando equipo"),s}catch(a){e.setLoading(!1,"actualizando equipo"),console.log(a)}},async getEquipmentBySite(o){e.setLoading(!0,"cargando equipos");try{const a=await(await fetch(`${t}/equipment/site/${o}`)).json();return e.setLoading(!1,"cargando equipos por sitio"),a}catch(n){e.setLoading(!1,"cargando equipos por sitio"),console.log(n)}},async getSitesWithAllEquipmentByNames(o){e.setLoading(!0,"cargando sitios con todos los equipos por nombres");try{const n=await fetch(`${t}/equipment/sites-with-all-by-names`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!n.ok)throw new Error("Error al obtener los sitios");const a=await n.json();return e.setLoading(!1,"cargando sitios con todos los equipos por nombres"),a}catch(n){return e.setLoading(!1,"cargando sitios con todos los equipos por nombres"),console.error("Error al cargar sitios con todos los equipos por nombres:",n),[]}},async deleteEquipment(o){e.setLoading(!0,"eliminando equipo");try{const n=await fetch(`${t}/equipment/${o}`,{method:"DELETE"});return e.setLoading(!1,"eliminando equipo"),n.ok}catch(n){e.setLoading(!1,"eliminando equipo"),console.log(n)}}},l={async completeMaintenance(o,n){e.setLoading(!0,"completando mantenimiento");try{const a=new URL(`${t}/maintenance/${o}/complete`);a.searchParams.append("remarks",n);const s=await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"}});if(!s.ok)throw new Error("Error al completar el mantenimiento");const i=await s.json();return e.setLoading(!1,"completando mantenimiento"),i}catch(a){e.setLoading(!1,"completando mantenimiento"),console.error("Error al completar el mantenimiento:",a)}},async getMaintenanceBySite(o){e.setLoading(!0,"cargando mantenimientos por sede");try{const a=await(await fetch(`${t}/maintenance/site/${o}`)).json();return e.setLoading(!1,"cargando mantenimientos por sede"),a}catch(n){e.setLoading(!1,"cargando mantenimientos por sede"),console.log(n)}},async getAllMaintenanceRecords(){e.setLoading(!0,"cargando mantenimientos");try{const n=await(await fetch(`${t}/maintenance`)).json();return e.setLoading(!1,"cargando mantenimientos"),n}catch(o){e.setLoading(!1,"cargando mantenimientos"),console.log(o)}},async getMaintenanceById(o){e.setLoading(!0,"cargando mantenimiento");try{const a=await(await fetch(`${t}/maintenance/${o}`)).json();return e.setLoading(!1,"cargando mantenimiento"),a}catch(n){e.setLoading(!1,"cargando mantenimiento"),console.log(n)}},async createMaintenanceRecord(o){e.setLoading(!0,"creando mantenimiento");try{const a=await(await fetch(`${t}/maintenance`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return e.setLoading(!1,"creando mantenimiento"),a}catch(n){e.setLoading(!1,"creando mantenimiento"),console.log(n)}},async updateMaintenanceRecord(o,n){e.setLoading(!0,"actualizando mantenimiento");try{const s=await(await fetch(`${t}/maintenance/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();return e.setLoading(!1,"actualizando mantenimiento"),s}catch(a){e.setLoading(!1,"actualizando mantenimiento"),console.log(a)}},async deleteMaintenanceRecord(o){e.setLoading(!0,"eliminando mantenimiento");try{const n=await fetch(`${t}/maintenance/${o}`,{method:"DELETE"});return e.setLoading(!1,"eliminando mantenimiento"),n.ok}catch(n){e.setLoading(!1,"eliminando mantenimiento"),console.log(n)}}};export{d as e,l as m};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/maintenance-0a276a90.js
