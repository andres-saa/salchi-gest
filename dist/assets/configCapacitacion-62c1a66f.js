import{_ as ee,f as d,B as te,u as ae,Q as se,h as $,r as _,o as u,c as v,d as r,w as C,k as g,t as P,a,l as oe,J as k,n as U,q as le,F as O,b as N,U as h,a2 as ne,p as ie,e as re}from"./index-8299c8c8.js";import{g as de}from"./userServices-a3b8aa4a.js";import{g as ce}from"./dropDownAux-07d9c678.js";const p=b=>(ie("data-v-3fcaa71b"),b=b(),re(),b),ue={class:"col-12 m-auto",style:{"max-width":"1024px",height:"max-content"}},pe={style:{display:"flex"}},me={class:"col-12 p",style:{display:"flex","justify-content":"end"}},fe={class:"grid"},_e={class:"col-12 lg:col-6"},ve=p(()=>a("p",{class:"col-12 text-3xl",style:{"font-weight":"bold"}}," Configuración ",-1)),he={class:"col-12 m-auto pb-4 p-4",style:{"background-color":"var(--primary-color)","box-shadow":"0 0 10px rgba(0, 0, 0, 0.137)",height:"max-content","border-radius":"1rem"}},ye=p(()=>a("div",{class:"col-12 m-0 mb-3",style:{}},[a("p",{class:"text-2xl",style:{"font-weight":"bold","text-transform":"capitalize",color:"white"}})],-1)),ge={class:"flex flex-column gap-2 text-white"},be=p(()=>a("label",{for:"username"},"Id de la capacitacion",-1)),xe={class:"flex flex-column gap-2 my-4 text-white"},we=p(()=>a("label",{for:"username"},"Id del creador",-1)),Ve={class:"flex flex-column gap-2 my-4 text-white"},Se=p(()=>a("label",{for:"username"},"Nombre de la capacitacion",-1)),Ce={class:"flex flex-column gap-2 my-4 text-white"},ke=p(()=>a("label",{for:"username"},"Tematica",-1)),Ue={class:"flex flex-column gap-2 my-4 text-white"},Te=p(()=>a("label",{for:"username"},"link de la reunion",-1)),Ee={class:"flex flex-column gap-2 my-4 text-white"},$e=p(()=>a("label",{for:"username"},"Ubicacion",-1)),Pe={class:"flex flex-column gap-2 my-4 text-white"},Be=p(()=>a("label",{for:"username"},"Fecha de la capacitacion",-1)),Ie={class:"flex flex-column gap-2 my-4 text-white"},De=p(()=>a("label",{for:"username"},"Estado",-1)),je={class:"col-12 lg:col-6"},Oe={class:"col-12 my-0 text-3xl",style:{"font-weight":"bold"}},Ne={key:0,class:"col-12 py-0 text-1xl",style:{color:"red"}},Ae={class:"col-12",style:{display:"flex"}},He={key:1,class:"col-12 p-0 ml-3",style:{display:"flex",gap:"1rem","align-items":"center"}},ze=p(()=>a("span",{class:"",style:{"font-weight":"bold"}},"TODOS ",-1)),Ge={class:"col-12 m-auto pb-4 p-5",style:{"background-color":"rgba(255, 255, 255, 0)",height:"100%","border-radius":"1rem","height overflow":"hidden"}},Me={class:"grid",style:{height:"70vh","overflow-y":"auto"}},Fe={class:"col-12 grid py-4",style:{"border-bottom":"2px solid rgba(0, 0, 0, 0.375)"}},Je={class:"col-12 p-1",style:{display:"flex",gap:"1rem","align-items":"center"}},Re={style:{"font-weight":"bold"}},We={class:"col-12 p-1",style:{display:"flex","min-width":"max-content",gap:"1rem","align-items":"center","justify-content":"start"}},qe={class:"",style:{"font-weight":""}},Le={__name:"configCapacitacion",setup(b){const x=d(!1),B=te(),w=ae(),V=d(!1),y=d([]),A=d([]),o=d({}),T=d(!0),H=(t,e)=>{const l=y.value.find(i=>i.site_name===t);if(!l)return;let m=[...c.value];l.employers.forEach(i=>{const n=m.indexOf(i.id);e&&n===-1?m.push(i.id):!e&&n!==-1&&m.splice(n,1)}),c.value=m},z=t=>{t?c.value=y.value.reduce((e,l)=>e.concat(l.employers.map(m=>m.id)),[]):c.value=[]},I=t=>{const e=y.value.find(l=>l.site_name===t);return e?e.employers.every(l=>c.value.includes(l.id)):!1},G=d({}),D=d([]),c=d([]),M=d(["Agendada","Completada","Cancelada"]),F=()=>{const t=w.params.capacitacion_id;return{attendees:c.value.map(e=>({training_id:parseInt(t),attendee_id:e,assigned:!1,attendance_time:new Date().toISOString()}))}},J=async()=>{const t=F();try{const e=await fetch(`${h}/training/attendees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const l=await e.json();B.add({severity:"success",summary:"asistentes modificados",detail:"hecho",life:3e3}),console.log("Respuesta del servidor:",l),x.value=!1}catch(e){console.error("Error al enviar los datos de los asistentes:",e)}};async function R(){try{const t=await fetch(`${h}/employers/grouped-by-site`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);let e=await t.json();e=e.map(l=>{const m=l.employers.reduce((i,n)=>(i[n.position]=i[n.position]||[],i[n.position].push(n),i),{});return{...l,positions:m}}),y.value=e,T.value=!1}catch(t){console.error("Error al obtener usuarios agrupados por sede:",t)}}async function W(){try{const t=await fetch(`${h}/employers/grouped-by-position`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);A.value=await t.json()}catch(t){console.error("Error al obtener usuarios agrupados por posición:",t)}}async function j(){const t=w.params.capacitacion_id;try{const e=await fetch(`${h}/training/${t}/attendees`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);D.value=await e.json(),c.value=D.value.map(l=>l.attendee_id)}catch(e){console.error("Error al obtener asistentes:",e)}}const q=d([]);se(()=>{ce().then(t=>q.value=t),j()}),$(async()=>{await R(),await W()});const L=t=>{const e=c.value.indexOf(t);e>-1?c.value.splice(e,1):c.value.push(t)},Q=async()=>{const t=w.params.capacitacion_id;try{const e=await fetch(`${h}/training/${t}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error al obtener las capacitaciones:",e),e}},K=t=>c.value.includes(t),X=async()=>{const t=w.params.capacitacion_id;x.value=!0;try{const e=await fetch(`${h}/training/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);console.log("Capacitación actualizada con éxito"),B.add({severity:"success",summary:"capacitacion actualizada",detail:"hecho",life:3e3}),J(),f.value=!1}catch(e){console.error("Error al actualizar la capacitación:",e)}},f=d(!1);return $(async()=>{de().then(t=>G.value=t)}),$(()=>{Q().then(t=>o.value=t)}),(t,e)=>{const l=_("ProgressSpinner"),m=_("Dialog"),i=_("Button"),n=_("InputText"),Y=_("Calendar"),Z=_("Dropdown"),E=_("Checkbox");return u(),v("div",ue,[r(m,{visible:x.value,"onUpdate:visible":e[0]||(e[0]=s=>x.value=s),modal:"",header:"Enviando datos",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:C(()=>[a("div",pe,[r(l,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])]),_:1},8,["visible"]),g(" "+P(o.value)+" ",1),a("div",me,[oe(ne)()==o.value.creator_id?(u(),k(i,{key:0,onClick:X},{default:C(()=>[g("Guardar cambios")]),_:1})):U("",!0)]),a("div",fe,[a("div",_e,[ve,a("div",he,[ye,a("div",ge,[be,r(n,{id:"username",disabled:"",modelValue:o.value.id,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.id=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",xe,[we,r(n,{id:"username",disabled:"",modelValue:o.value.creator_id,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.creator_id=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ve,[Se,r(n,{id:"username",modelValue:o.value.name,"onUpdate:modelValue":e[3]||(e[3]=s=>o.value.name=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ce,[ke,r(n,{id:"username",modelValue:o.value.topic,"onUpdate:modelValue":e[4]||(e[4]=s=>o.value.topic=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ue,[Te,r(n,{id:"username",modelValue:o.value.material_url,"onUpdate:modelValue":e[5]||(e[5]=s=>o.value.material_url=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ee,[$e,r(n,{id:"username",modelValue:o.value.location,"onUpdate:modelValue":e[6]||(e[6]=s=>o.value.location=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Pe,[Be,r(Y,{id:"username",modelValue:o.value.scheduled_time,"onUpdate:modelValue":e[7]||(e[7]=s=>o.value.scheduled_time=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ie,[De,r(Z,{class:le(o.value.status),modelValue:o.value.status,"onUpdate:modelValue":e[8]||(e[8]=s=>o.value.status=s),modelModifiers:{trim:!0},options:M.value},null,8,["class","modelValue","options"])])])]),a("div",je,[a("p",Oe,[g(" Asistentes "),f.value?(u(),k(i,{key:1,text:"",onClick:e[10]||(e[10]=()=>{j(),f.value=!1,V.value=!1})},{default:C(()=>[g(" reset")]),_:1})):(u(),k(i,{key:0,text:"",onClick:e[9]||(e[9]=s=>f.value=!0)},{default:C(()=>[g(" Modificar")]),_:1}))]),f.value?(u(),v("p",Ne," Esta modificando la lista de asistentes, por favor sea cuidadoso, si presiona reset todo volvera a como estaba al inicio ")):U("",!0),a("div",Ae,[T.value?(u(),k(l,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):U("",!0)]),T.value?U("",!0):(u(),v("div",He,[r(E,{class:"mt-3",style:{"margin-left":"3px"},modelValue:V.value,"onUpdate:modelValue":e[11]||(e[11]=s=>V.value=s),disabled:!f.value,binary:!0,onChange:e[12]||(e[12]=s=>z(V.value))},null,8,["modelValue","disabled"]),ze])),a("div",Ge,[a("div",Me,[(u(!0),v(O,null,N(y.value,s=>(u(),v("div",Fe,[a("div",Je,[r(E,{disabled:!f.value,style:{},binary:!0,modelValue:I(s.site_name),onChange:S=>H(s.site_name,!I(s.site_name))},null,8,["disabled","modelValue","onChange"]),a("span",Re,P(s.site_name),1)]),(u(!0),v(O,null,N(s.employers,S=>(u(),v("div",We,[r(E,{disabled:!f.value,class:"",style:{},binary:!0,modelValue:K(S.id),onChange:()=>L(S.id)},null,8,["disabled","modelValue","onChange"]),a("p",qe,P(S.name),1)]))),256))]))),256))])])])])])}}},Ye=ee(Le,[["__scopeId","data-v-3fcaa71b"]]);export{Ye as default};
