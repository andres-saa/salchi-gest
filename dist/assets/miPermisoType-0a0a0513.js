import{_ as R,B,r as t,C as n,j as T,a as c,o as u,c as _,g as a,w as i,b as f,F as N,d as V,U as v,q as m,t as d}from"./index-35b299a4.js";const j={class:"col-12 m-auto p-4"},z={class:"my-2",style:{display:"flex"}},A={style:{display:"flex"},class:"m-auto p-0 my-4"},C={class:"p-2"},S={__name:"miPermisoType",setup($){const s=B(),l=t(s.params.tipo),p=t(s.params.status);t(!1);const w=t("2029-12-21 16:19");t();const x=t({});t({}),t(!1),t(!1);const g=t(s.path);s.path;const k=t([{name:"PENDIENTES",to:"./generado",severity:"info",key:"generado"},{name:"APROBADOS",to:"./aprobado",severity:"success",key:"aprobado"},{name:"RECHAZADOS",to:"./rechazado",severity:"danger",key:"rechazado"}]);n(()=>s.fullPath,e=>{}),n(()=>s.params.tipo,e=>{l.value=e}),n(()=>s.params.status,e=>{p.value=e}),n(()=>s.fullPath,e=>{g.value=e});const P=async()=>{fetch(`${v}/server_time`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log("Employer data:",e),w.value=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),mensaje.value="error"})};async function E(e){const y=`${v}/permissions/type/${e}`;try{const o=await fetch(y);if(!o.ok)throw new Error(`Error al obtener los permisos: ${o.status}`);return await o.json()}catch(o){throw console.error("Error en getPermissions:",o),o}}return T(()=>{E(l.value).then(e=>x.value=e),P()}),(e,y)=>{const o=c("P"),h=c("Button"),b=c("RouterLink"),D=c("RouterView");return u(),_("div",j,[a(o,{class:"text-center text-2xl my-0",style:{"font-weight":"bold","text-transform":"capitalize"}},{default:i(()=>[m(" Tipo de permiso: "+d(l.value),1)]),_:1}),a(o,{class:"text-center text-2xl py-0",style:{"font-weight":"bold","text-transform":"capitalize"}},{default:i(()=>[m(" Estado: "+d(p.value),1)]),_:1}),f("div",z,[f("div",A,[(u(!0),_(N,null,V(k.value,r=>(u(),_("div",C,[a(b,{to:r.to},{default:i(()=>[a(h,{outlined:p.value!=r.key,severity:r.severity},{default:i(()=>[m(d(r.name),1)]),_:2},1032,["outlined","severity"])]),_:2},1032,["to"])]))),256))])]),a(D)])}}},I=R(S,[["__scopeId","data-v-85990f35"]]);export{I as default};
