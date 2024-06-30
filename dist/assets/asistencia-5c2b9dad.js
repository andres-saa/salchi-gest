import{_ as A,r as o,z as H,v as I,y as z,H as D,h as g,a as v,o as c,c as f,q as h,t as $,b as i,u as F,f as w,w as T,m as _,F as G,e as M,U as u,a3 as O,d as R,p as q,g as J}from"./index-c77db9f7.js";import{g as L}from"./userServices-735859d1.js";import{g as W}from"./dropDownAux-749a6661.js";const K=p=>(q("data-v-f602f21a"),p=p(),J(),p),Q={class:"col-12 m-auto",style:{"max-width":"1024px",height:"max-content"}},X={class:"grid"},Y={class:"col-12"},Z={class:"col-12 my-0 text-3xl",style:{"font-weight":"bold"}},ee=K(()=>i("div",{class:"col-12 p",style:{display:"flex","justify-content":"end"}},null,-1)),te={key:0,class:"col-12 py-0 text-1xl",style:{color:"red"}},se={class:"col-12",style:{display:"flex"}},ae={class:"col-12 m-auto pb-4 p-5",style:{"background-color":"rgba(255, 255, 255, 0)",height:"100%","border-radius":"1rem","height overflow":"hidden"}},oe={class:"grid",style:{"overflow-y":"auto"}},re={class:"col-12 p-1",style:{display:"flex","min-width":"max-content",gap:"1rem","align-items":"center","justify-content":"start"}},ne={class:"",style:{"font-weight":""}},ie={__name:"asistencia",setup(p){o(!1);const x=H(),b=I();o(!1);const k=o([]),C=o([]),m=o({}),S=o(!0);o(!1),z(()=>k.value.reduce((t,s)=>t.concat(s.employers.map(n=>n.id)),[]).every(t=>d.value.includes(t)));const E=o({}),y=o([]),d=o([]);o(["Agendada","Completada","Cancelada"]);async function B(){try{const e=await fetch(`${u}/employers/grouped-by-site`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let t=await e.json();t=t.map(s=>{const n=s.employers.reduce((a,r)=>(a[r.position]=a[r.position]||[],a[r.position].push(r),a),{});return{...s,positions:n}}),k.value=t,S.value=!1}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}async function U(){try{const e=await fetch(`${u}/employers/grouped-by-position`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);C.value=await e.json()}catch(e){console.error("Error al obtener usuarios agrupados por posición:",e)}}async function P(){const e=b.params.capacitacion_id;try{const t=await fetch(`${u}/training/${e}/attendees-with-status`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);y.value=await t.json(),d.value=y.value.filter(s=>s.assigned).map(s=>s.attendee_id)}catch(t){console.error("Error al obtener asistentes:",t)}}const j=o([]);D(()=>{W().then(e=>j.value=e),P()}),g(async()=>{await B(),await U()});const N=async e=>{const t=d.value.indexOf(e),s=t>-1,n=y.value.find(a=>a.attendee_id===e);n&&(n.assigned=!n.assigned),s?d.value.splice(t,1):d.value.push(e);try{const a=await fetch(`${u}/training/${m.value.id}/attendee/${e}/mark-attendance`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({assigned:!s})});if(!a.ok)throw new Error(`Error en la solicitud: ${a.statusText}`);const r=await a.json();x.add({severity:"success",summary:"Asistencia registrada",detail:`Asistencia de ${e} actualizada correctamente.`,life:3e3})}catch(a){console.error("Error al marcar la asistencia:",a),x.add({severity:"error",summary:"Error",detail:"No se pudo actualizar la asistencia.",life:3e3})}},V=async()=>{const e=b.params.capacitacion_id;try{const t=await fetch(`${u}/training/${e}`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){throw console.error("Error al obtener las capacitaciones:",t),t}},l=o(!1);return g(async()=>{L().then(e=>E.value=e)}),g(()=>{V().then(e=>m.value=e)}),(e,t)=>{const s=v("Button"),n=v("ProgressSpinner"),a=v("Checkbox");return c(),f("div",Q,[h($(m.value)+" ",1),i("div",X,[i("div",Y,[i("p",Z,[h(" Asistencia a la capacitacion "),!l.value&&F(O)()==m.value.creator_id?(c(),w(s,{key:0,class:"lg:ml-6 mt-4 md:mt-0",onClick:t[0]||(t[0]=r=>l.value=!0)},{default:T(()=>[h(" Tomar asistencia")]),_:1})):_("",!0),l.value?(c(),w(s,{key:1,class:"lg:ml-6 mt-4 md:mt-0",onClick:t[1]||(t[1]=r=>l.value=!1),style:{"background-color":"var(--green-600   )"}},{default:T(()=>[h(" Todo ready ")]),_:1})):_("",!0)]),ee,l.value?(c(),f("p",te," Esta tomando la lista de asistentes, por favor sea cuidadoso")):_("",!0),i("div",se,[S.value?(c(),w(n,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):_("",!0)]),i("div",ae,[i("div",oe,[(c(!0),f(G,null,M(y.value,r=>(c(),f("div",re,[R(a,{disabled:!l.value,class:"",binary:!0,modelValue:r.assigned,onChange:()=>N(r.attendee_id)},null,8,["disabled","modelValue","onChange"]),i("p",ne,$(r.attendee_name),1)]))),256))])])])])])}}},ue=A(ie,[["__scopeId","data-v-f602f21a"]]);export{ue as default};
