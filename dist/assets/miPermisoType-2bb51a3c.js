import{_ as R,v as T,r as t,k as n,h as B,a as c,o as u,c as _,d as a,w as i,b as f,F as N,e as V,U as v,q as m,t as d}from"./index-db916a24.js";const z={class:"col-12 m-auto p-4"},A={class:"my-2",style:{display:"flex"}},S={style:{display:"flex"},class:"m-auto p-0 my-4"},$={class:"p-2"},j={__name:"miPermisoType",setup(C){const s=T(),l=t(s.params.tipo),p=t(s.params.status);t(!1);const w=t("2029-12-21 16:19");t();const x=t({});t({}),t(!1),t(!1);const k=t(s.path);s.path;const g=t([{name:"PENDIENTES",to:"./generado",severity:"info",key:"generado"},{name:"APROBADOS",to:"./aprobado",severity:"success",key:"aprobado"},{name:"RECHAZADOS",to:"./rechazado",severity:"danger",key:"rechazado"}]);n(()=>s.fullPath,e=>{}),n(()=>s.params.tipo,e=>{l.value=e}),n(()=>s.params.status,e=>{p.value=e}),n(()=>s.fullPath,e=>{k.value=e});const P=async()=>{fetch(`${v}/server_time`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log("Employer data:",e),w.value=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),mensaje.value="error"})};async function E(e){const h=`${v}/permissions/type/${e}`;try{const o=await fetch(h);if(!o.ok)throw new Error(`Error al obtener los permisos: ${o.status}`);return await o.json()}catch(o){throw console.error("Error en getPermissions:",o),o}}return B(()=>{E(l.value).then(e=>x.value=e),P()}),(e,h)=>{const o=c("P"),y=c("Button"),b=c("RouterLink"),D=c("RouterView");return u(),_("div",z,[a(o,{class:"text-center text-2xl my-0",style:{"font-weight":"bold","text-transform":"capitalize"}},{default:i(()=>[m(" Tipo de permiso: "+d(l.value),1)]),_:1}),a(o,{class:"text-center text-2xl py-0",style:{"font-weight":"bold","text-transform":"capitalize"}},{default:i(()=>[m(" Estado: "+d(p.value),1)]),_:1}),f("div",A,[f("div",S,[(u(!0),_(N,null,V(g.value,r=>(u(),_("div",$,[a(b,{to:r.to},{default:i(()=>[a(y,{outlined:p.value!=r.key,severity:r.severity},{default:i(()=>[m(d(r.name),1)]),_:2},1032,["outlined","severity"])]),_:2},1032,["to"])]))),256))])]),a(D)])}}},I=R(j,[["__scopeId","data-v-85990f35"]]);export{I as default};