import{U as l}from"./index-de8de9e2.js";function i(t,a,c){const e=`${l}/upload-file-document/`,o=new FormData;o.append("file",t),o.append("type_document",a),o.append("site_id",c),fetch(e,{method:"POST",body:o}).then(r=>{r.ok?console.log("Archivo PDF cargado con éxito"):console.error("Error al cargar el archivo PDF:",r.status,r.statusText)}).catch(r=>{console.error("Error en la solicitud:",r)})}function d(t,a){const c=`${l}/upload-product-image/employer-${a}`,e=new FormData;e.append("file",t),fetch(c,{method:"POST",body:e}).then(o=>{o.ok?console.log("Archivo photo cargado con éxito"):console.error("Error al cargar foto de perfil:",o.status,o.statusText)}).catch(o=>{console.error("Error en la solicitud:",o)})}export{d as a,i as u};
