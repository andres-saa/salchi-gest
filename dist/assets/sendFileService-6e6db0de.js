<<<<<<<< HEAD:dist/assets/sendFileService-6e6db0de.js
import{U as l}from"./index-9672dc6b.js";function i(a,e,c){if(!a)return;const t=`${l}/upload-file-document/${e}`,o=new FormData;o.append("file",a),o.append("document_id",e),o.append("file_name",c),fetch(t,{method:"POST",body:o}).then(r=>{r.ok?console.log("Archivo PDF cargado con éxito"):console.error("Error al cargar el archivo PDF:",r.status,r.statusText)}).catch(r=>{console.error("Error en la solicitud:",r)})}function s(a,e){const c=`${l}/upload-product-image/employer-${e}`,t=new FormData;t.append("file",a),fetch(c,{method:"POST",body:t}).then(o=>{o.ok?console.log("Archivo photo cargado con éxito"):console.error("Error al cargar foto de perfil:",o.status,o.statusText)}).catch(o=>{console.error("Error en la solicitud:",o)})}export{s as a,i as u};
========
import{U as l}from"./index-acdf86d7.js";function i(a,e,c){if(!a)return;const t=`${l}/upload-file-document/${e}`,o=new FormData;o.append("file",a),o.append("document_id",e),o.append("file_name",c),fetch(t,{method:"POST",body:o}).then(r=>{r.ok?console.log("Archivo PDF cargado con éxito"):console.error("Error al cargar el archivo PDF:",r.status,r.statusText)}).catch(r=>{console.error("Error en la solicitud:",r)})}function s(a,e){const c=`${l}/upload-product-image/employer-${e}`,t=new FormData;t.append("file",a),fetch(c,{method:"POST",body:t}).then(o=>{o.ok?console.log("Archivo photo cargado con éxito"):console.error("Error al cargar foto de perfil:",o.status,o.statusText)}).catch(o=>{console.error("Error en la solicitud:",o)})}export{s as a,i as u};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/sendFileService-029265bb.js
