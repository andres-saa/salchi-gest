import{_ as ee,h as d,z as te,C as ae,s as se,i as $,g as f,o as u,c as v,b as r,f as S,a,u as oe,e as C,k,d as le,q as U,F as j,r as O,U as h,a8 as ne,t as N,p as ie,m as re}from"./index-03a193b1.js";import{g as de}from"./userServices-b688dfbb.js";import{g as ce}from"./dropDownAux-0432f2de.js";const p=g=>(ie("data-v-35780591"),g=g(),re(),g),ue={class:"col-12 m-auto my-0",style:{"max-width":"1024px",height:"max-content"}},pe={style:{display:"flex"}},me={class:"col-12 p",style:{display:"flex","justify-content":"end"}},_e={class:"grid"},fe={class:"col-12 lg:col-6"},ve=p(()=>a("p",{class:"col-12 text-3xl",style:{"font-weight":"bold"}}," Configuración ",-1)),he={class:"col-12 mx-auto pb-4 p-4",style:{"background-color":"var(--primary-color)","box-shadow":"0 0 10px rgba(0, 0, 0, 0.137)",position:"sticky",top:"5rem",height:"max-content","border-radius":".5rem"}},ye=p(()=>a("div",{class:"col-12 m-0 mb-3",style:{}},[a("p",{class:"text-2xl",style:{"font-weight":"bold","text-transform":"capitalize",color:"white"}})],-1)),ge={class:"flex flex-column gap-2 text-white"},be=p(()=>a("label",{for:"username"},"Id de la capacitacion",-1)),xe={class:"flex flex-column gap-2 my-4 text-white"},we=p(()=>a("label",{for:"username"},"Id del creador",-1)),Ve={class:"flex flex-column gap-2 my-4 text-white"},Se=p(()=>a("label",{for:"username"},"Nombre de la capacitacion",-1)),Ce={class:"flex flex-column gap-2 my-4 text-white"},ke=p(()=>a("label",{for:"username"},"Tematica",-1)),Ue={class:"flex flex-column gap-2 my-4 text-white"},Te=p(()=>a("label",{for:"username"},"link de la reunion",-1)),Ee={class:"flex flex-column gap-2 my-4 text-white"},$e=p(()=>a("label",{for:"username"},"Ubicacion",-1)),Pe={class:"flex flex-column gap-2 my-4 text-white"},Be=p(()=>a("label",{for:"username"},"Fecha de la capacitacion",-1)),Ie={class:"flex flex-column gap-2 my-4 text-white"},De=p(()=>a("label",{for:"username"},"Estado",-1)),je={class:"col-12 lg:col-6"},Oe={class:"col-12 my-0 text-3xl",style:{"font-weight":"bold"}},Ne={key:0,class:"col-12 py-0 text-1xl",style:{color:"red"}},ze={class:"col-12",style:{display:"flex"}},Ae={key:1,class:"col-12 p-0 ml-3",style:{display:"flex",gap:"1rem","align-items":"center"}},He=p(()=>a("span",{class:"",style:{"font-weight":"bold"}},"TODOS ",-1)),Ge={class:"col-12 m-auto pb-4 p-5",style:{"background-color":"rgba(255, 255, 255, 0)",height:"100%","border-radius":"1rem","height overflow":"hidden"}},Me={class:"grid",style:{height:"100%","overflow-y":"auto"}},Fe={class:"col-12 grid py-4",style:{"border-bottom":"2px solid rgba(0, 0, 0, 0.375)"}},Re={class:"col-12 p-1",style:{display:"flex",gap:"1rem","align-items":"center"}},Je={style:{"font-weight":"bold"}},We={class:"col-12 p-1",style:{display:"flex","min-width":"max-content",gap:"1rem","align-items":"center","justify-content":"start"}},qe={class:"",style:{"font-weight":""}},Le={__name:"configCapacitacion",setup(g){const b=d(!1),P=te(),x=ae(),w=d(!1),y=d([]),z=d([]),o=d({}),T=d(!0),A=(t,e)=>{const l=y.value.find(i=>i.site_name===t);if(!l)return;let m=[...c.value];l.employers.forEach(i=>{const n=m.indexOf(i.id);e&&n===-1?m.push(i.id):!e&&n!==-1&&m.splice(n,1)}),c.value=m},H=t=>{t?c.value=y.value.reduce((e,l)=>e.concat(l.employers.map(m=>m.id)),[]):c.value=[]},B=t=>{const e=y.value.find(l=>l.site_name===t);return e?e.employers.every(l=>c.value.includes(l.id)):!1},G=d({}),I=d([]),c=d([]),M=d(["Agendada","Completada","Cancelada"]),F=()=>{const t=x.params.capacitacion_id;return{attendees:c.value.map(e=>({training_id:parseInt(t),attendee_id:e,assigned:!1,attendance_time:new Date().toISOString()}))}},R=async()=>{const t=F();try{const e=await fetch(`${h}/training/attendees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const l=await e.json();P.add({severity:"success",summary:"asistentes modificados",detail:"hecho",life:3e3}),console.log("Respuesta del servidor:",l),b.value=!1}catch(e){console.error("Error al enviar los datos de los asistentes:",e)}};async function J(){try{const t=await fetch(`${h}/employers/grouped-by-site`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);let e=await t.json();e=e.map(l=>{const m=l.employers.reduce((i,n)=>(i[n.position]=i[n.position]||[],i[n.position].push(n),i),{});return{...l,positions:m}}),y.value=e,T.value=!1}catch(t){console.error("Error al obtener usuarios agrupados por sede:",t)}}async function W(){try{const t=await fetch(`${h}/employers/grouped-by-position`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);z.value=await t.json()}catch(t){console.error("Error al obtener usuarios agrupados por posición:",t)}}async function D(){const t=x.params.capacitacion_id;try{const e=await fetch(`${h}/training/${t}/attendees`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);I.value=await e.json(),c.value=I.value.map(l=>l.attendee_id)}catch(e){console.error("Error al obtener asistentes:",e)}}const q=d([]);se(()=>{ce().then(t=>q.value=t),D()}),$(async()=>{await J(),await W()});const L=t=>{const e=c.value.indexOf(t);e>-1?c.value.splice(e,1):c.value.push(t)},K=async()=>{const t=x.params.capacitacion_id;try{const e=await fetch(`${h}/training/${t}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error al obtener las capacitaciones:",e),e}},Q=t=>c.value.includes(t),X=async()=>{const t=x.params.capacitacion_id;b.value=!0;try{const e=await fetch(`${h}/training/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);console.log("Capacitación actualizada con éxito"),P.add({severity:"success",summary:"capacitacion actualizada",detail:"hecho",life:3e3}),R(),_.value=!1}catch(e){console.error("Error al actualizar la capacitación:",e)}},_=d(!1);return $(async()=>{de().then(t=>G.value=t)}),$(()=>{K().then(t=>o.value=t)}),(t,e)=>{const l=f("ProgressSpinner"),m=f("Dialog"),i=f("Button"),n=f("InputText"),Y=f("Calendar"),Z=f("Dropdown"),E=f("Checkbox");return u(),v("div",ue,[r(m,{visible:b.value,"onUpdate:visible":e[0]||(e[0]=s=>b.value=s),modal:"",header:"Enviando datos",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:S(()=>[a("div",pe,[r(l,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])]),_:1},8,["visible"]),a("div",me,[oe(ne)()==o.value.creator_id?(u(),C(i,{key:0,severity:"help",onClick:X},{default:S(()=>[U("Guardar cambios")]),_:1})):k("",!0)]),a("div",_e,[a("div",fe,[ve,a("div",he,[ye,a("div",ge,[be,r(n,{id:"username",disabled:"",modelValue:o.value.id,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.id=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",xe,[we,r(n,{id:"username",disabled:"",modelValue:o.value.creator_id,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value.creator_id=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ve,[Se,r(n,{id:"username",modelValue:o.value.name,"onUpdate:modelValue":e[3]||(e[3]=s=>o.value.name=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ce,[ke,r(n,{id:"username",modelValue:o.value.topic,"onUpdate:modelValue":e[4]||(e[4]=s=>o.value.topic=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ue,[Te,r(n,{id:"username",modelValue:o.value.material_url,"onUpdate:modelValue":e[5]||(e[5]=s=>o.value.material_url=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ee,[$e,r(n,{id:"username",modelValue:o.value.location,"onUpdate:modelValue":e[6]||(e[6]=s=>o.value.location=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Pe,[Be,r(Y,{id:"username",modelValue:o.value.scheduled_time,"onUpdate:modelValue":e[7]||(e[7]=s=>o.value.scheduled_time=s),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ie,[De,r(Z,{class:le(o.value.status),modelValue:o.value.status,"onUpdate:modelValue":e[8]||(e[8]=s=>o.value.status=s),modelModifiers:{trim:!0},options:M.value},null,8,["class","modelValue","options"])])])]),a("div",je,[a("p",Oe,[U(" Asistentes "),_.value?(u(),C(i,{key:1,text:"",onClick:e[10]||(e[10]=()=>{D(),_.value=!1,w.value=!1})},{default:S(()=>[U(" reset")]),_:1})):(u(),C(i,{key:0,text:"",onClick:e[9]||(e[9]=s=>_.value=!0)},{default:S(()=>[U(" Modificar")]),_:1}))]),_.value?(u(),v("p",Ne," Esta modificando la lista de asistentes, por favor sea cuidadoso, si presiona reset todo volvera a como estaba al inicio ")):k("",!0),a("div",ze,[T.value?(u(),C(l,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):k("",!0)]),T.value?k("",!0):(u(),v("div",Ae,[r(E,{class:"mt-3",style:{"margin-left":"3px"},modelValue:w.value,"onUpdate:modelValue":e[11]||(e[11]=s=>w.value=s),disabled:!_.value,binary:!0,onChange:e[12]||(e[12]=s=>H(w.value))},null,8,["modelValue","disabled"]),He])),a("div",Ge,[a("div",Me,[(u(!0),v(j,null,O(y.value,s=>(u(),v("div",Fe,[a("div",Re,[r(E,{disabled:!_.value,style:{},binary:!0,modelValue:B(s.site_name),onChange:V=>A(s.site_name,!B(s.site_name))},null,8,["disabled","modelValue","onChange"]),a("span",Je,N(s.site_name),1)]),(u(!0),v(j,null,O(s.employers,V=>(u(),v("div",We,[r(E,{disabled:!_.value,class:"",style:{},binary:!0,modelValue:Q(V.id),onChange:()=>L(V.id)},null,8,["disabled","modelValue","onChange"]),a("p",qe,N(V.name),1)]))),256))]))),256))])])])])])}}},Ye=ee(Le,[["__scopeId","data-v-35780591"]]);export{Ye as default};
