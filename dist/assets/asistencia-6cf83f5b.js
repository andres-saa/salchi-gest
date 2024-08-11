import{_ as V,r as o,z as A,v as H,y as I,E as z,h as g,a as f,o as c,c as y,b as i,q as v,u as D,f as w,w as $,m as h,F,e as G,U as u,ac as M,d as O,t as R,p as q,g as J}from"./index-f28936d7.js";import{g as L}from"./userServices-4433f19d.js";import{g as W}from"./dropDownAux-c5dd007b.js";const K=p=>(q("data-v-80e56b72"),p=p(),J(),p),Q={class:"col-12 mx-auto",style:{"max-width":"1024px",height:"max-content"}},X={class:"grid"},Y={class:"col-12"},Z={class:"col-12 my-0 text-3xl",style:{"font-weight":"bold"}},ee=K(()=>i("div",{class:"col-12 p",style:{display:"flex","justify-content":"end"}},null,-1)),te={key:0,class:"col-12 py-0 text-1xl",style:{color:"red"}},se={class:"col-12",style:{display:"flex"}},ae={class:"col-12 m-auto pb-4 p-5",style:{"background-color":"rgba(255, 255, 255, 0)",height:"100%","border-radius":"1rem","height overflow":"hidden"}},oe={class:"grid",style:{"overflow-y":"auto"}},re={class:"col-12 p-1",style:{display:"flex","min-width":"max-content",gap:"1rem","align-items":"center","justify-content":"start"}},ne={class:"",style:{"font-weight":""}},ie={__name:"asistencia",setup(p){o(!1);const x=A(),b=H();o(!1);const k=o([]),E=o([]),_=o({}),S=o(!0);o(!1),I(()=>k.value.reduce((t,s)=>t.concat(s.employers.map(n=>n.id)),[]).every(t=>d.value.includes(t)));const T=o({}),m=o([]),d=o([]);o(["Agendada","Completada","Cancelada"]);async function C(){try{const e=await fetch(`${u}/employers/grouped-by-site`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let t=await e.json();t=t.map(s=>{const n=s.employers.reduce((a,r)=>(a[r.position]=a[r.position]||[],a[r.position].push(r),a),{});return{...s,positions:n}}),k.value=t,S.value=!1}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}async function B(){try{const e=await fetch(`${u}/employers/grouped-by-position`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);E.value=await e.json()}catch(e){console.error("Error al obtener usuarios agrupados por posición:",e)}}async function U(){const e=b.params.capacitacion_id;try{const t=await fetch(`${u}/training/${e}/attendees-with-status`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);m.value=await t.json(),d.value=m.value.filter(s=>s.assigned).map(s=>s.attendee_id)}catch(t){console.error("Error al obtener asistentes:",t)}}const P=o([]);z(()=>{W().then(e=>P.value=e),U()}),g(async()=>{await C(),await B()});const j=async e=>{const t=d.value.indexOf(e),s=t>-1,n=m.value.find(a=>a.attendee_id===e);n&&(n.assigned=!n.assigned),s?d.value.splice(t,1):d.value.push(e);try{const a=await fetch(`${u}/training/${_.value.id}/attendee/${e}/mark-attendance`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({assigned:!s})});if(!a.ok)throw new Error(`Error en la solicitud: ${a.statusText}`);const r=await a.json();x.add({severity:"success",summary:"Asistencia registrada",detail:`Asistencia de ${e} actualizada correctamente.`,life:3e3})}catch(a){console.error("Error al marcar la asistencia:",a),x.add({severity:"error",summary:"Error",detail:"No se pudo actualizar la asistencia.",life:3e3})}},N=async()=>{const e=b.params.capacitacion_id;try{const t=await fetch(`${u}/training/${e}`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){throw console.error("Error al obtener las capacitaciones:",t),t}},l=o(!1);return g(async()=>{L().then(e=>T.value=e)}),g(()=>{N().then(e=>_.value=e)}),(e,t)=>{const s=f("Button"),n=f("ProgressSpinner"),a=f("Checkbox");return c(),y("div",Q,[i("div",X,[i("div",Y,[i("p",Z,[v(" Asistencia a la capacitacion "),!l.value&&D(M)()==_.value.creator_id?(c(),w(s,{key:0,severity:"help",class:"lg:ml-6 mt-4 md:mt-0",onClick:t[0]||(t[0]=r=>l.value=!0)},{default:$(()=>[v(" Tomar asistencia")]),_:1})):h("",!0),l.value?(c(),w(s,{key:1,class:"lg:ml-6 mt-4 md:mt-0",onClick:t[1]||(t[1]=r=>l.value=!1),style:{"background-color":"var(--green-500   )"}},{default:$(()=>[v(" Todo ready ")]),_:1})):h("",!0)]),ee,l.value?(c(),y("p",te," Esta tomando la lista de asistentes, por favor sea cuidadoso")):h("",!0),i("div",se,[S.value?(c(),w(n,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):h("",!0)]),i("div",ae,[i("div",oe,[(c(!0),y(F,null,G(m.value,r=>(c(),y("div",re,[O(a,{disabled:!l.value,class:"",binary:!0,modelValue:r.assigned,onChange:()=>j(r.attendee_id)},null,8,["disabled","modelValue","onChange"]),i("p",ne,R(r.attendee_name),1)]))),256))])])])])])}}},ue=V(ie,[["__scopeId","data-v-80e56b72"]]);export{ue as default};
