<<<<<<<< HEAD:dist/assets/autorizar-permisos-7cc31f42.js
import{_,v as p,r as o,k as m,h,a as f,o as w,c as d,d as v,U as a}from"./index-a1098956.js";const y={class:"col-12 m-auto p-0",style:{"max-width":"1280px"}},k={__name:"autorizar-permisos",setup(x){const r=p(),n=o(r.fullPath);m(()=>r.fullPath,e=>{n.value=e}),o(!1);const c=o("2029-12-21 16:19");o();const i=o({});o({}),o(!1),o(!1);const l=async()=>{fetch(`${a}/server_time`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log("Employer data:",e),c.value=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),mensaje.value="error"})};async function u(){const e=`${a}/permissions`;try{const s=await fetch(e);if(!s.ok)throw new Error(`Error al obtener los permisos: ${s.status}`);return await s.json()}catch(s){throw console.error("Error en getPermissions:",s),s}}return h(()=>{u().then(e=>i.value=e),l()}),(e,s)=>{const t=f("RouterView");return w(),d("div",y,[v(t)])}}},P=_(k,[["__scopeId","data-v-cdab85f8"]]);export{P as default};
========
import{_,v as p,r as o,k as m,h,a as f,o as w,c as d,d as v,U as a}from"./index-1a945cfc.js";const y={class:"col-12 m-auto p-0",style:{"max-width":"1280px"}},k={__name:"autorizar-permisos",setup(x){const r=p(),n=o(r.fullPath);m(()=>r.fullPath,e=>{n.value=e}),o(!1);const c=o("2029-12-21 16:19");o();const i=o({});o({}),o(!1),o(!1);const l=async()=>{fetch(`${a}/server_time`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log("Employer data:",e),c.value=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),mensaje.value="error"})};async function u(){const e=`${a}/permissions`;try{const s=await fetch(e);if(!s.ok)throw new Error(`Error al obtener los permisos: ${s.status}`);return await s.json()}catch(s){throw console.error("Error en getPermissions:",s),s}}return h(()=>{u().then(e=>i.value=e),l()}),(e,s)=>{const t=f("RouterView");return w(),d("div",y,[v(t)])}}},P=_(k,[["__scopeId","data-v-cdab85f8"]]);export{P as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/autorizar-permisos-ec591e71.js
