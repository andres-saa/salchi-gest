import{s as B}from"./siteService-e9b2fb74.js";import{u as E}from"./directorio-21008aa8.js";import{A as D}from"./auditService-504d4ab2.js";import{x as N,f as u,h as W,g as L,r as v,o as i,c as n,a as o,d as r,l as b,F as y,b as x,J as M,n as P,w as I,t as S,k as F,q as R,P as $,a2 as j,U as z}from"./index-11627319.js";const J={class:"grid my-0 py-0"},q={class:"col-12 my-0 py-2 md:col-6"},H={class:"col-12 my-0 py-2 md:col-6"},G={class:"",style:{"border-radius":"1rem"}},K=o("p",{class:"text-2xl text-center my-4",style:{"font-weight":"bold"}}," Auditoria ",-1),Q={class:"my-3",style:{"text-transform":"uppercase"}},X={style:{"overflow-x":"auto"},class:""},Y={class:"col-12 p-0 my-3"},Z={class:"col-12 p-0",style:{display:"flex"}},le={__name:"newAudit",setup(ee){const f=N().setLoading,m=E(),h=u([]),C=u([]),p=u({}),c=u({}),_=u(!1),g=u([]);W(async()=>{var e;h.value=await B.getSites();const s=await D.getChecklist();C.value=Array.isArray(s)?s:[],h.value.length>0&&!((e=m.currentSite)!=null&&e.site_name)&&m.setSite(h.value[0])}),L(p,async s=>{s!=null&&s.checklist_id?c.value=await D.getChecklistWithItems(s.checklist_id):c.value=[]});function T(){g.value=c.value.groups.flatMap(s=>s.items.filter(e=>!e.checked)),g.value.length>0?_.value=!0:V()}async function A(){_.value=!1,V()}async function V(){const s=c.value.groups.flatMap(a=>a.items.filter(l=>!l.checked).map(l=>({audit_item:{check_item_id:l.item_id,status:!1,comments:""},warning:{warning_text:l.warning_text||"Observación no proporcionada",resolved:!1,date:new Date().toISOString().split("T")[0]}}))),e={audit:{site_id:m.currentSite.site_id,coordinator_id:j(),audit_date:new Date().toISOString().split("T")[0],checklist_id:p.value.checklist_id},items_with_warnings:s};try{f(!0,"enviando");const a=await fetch(`${z}/audits-with-items-and-warnings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const l=await a.json();f(!1,"enviando"),console.log("Audit created successfully",l),c.value={}}catch(a){f(!1,"enviando"),console.error("Error creating the audit",a)}}return(s,e)=>{const a=v("Dropdown"),l=v("Checkbox"),k=v("Button"),U=v("InputText"),O=v("Dialog");return i(),n(y,null,[o("div",J,[o("div",q,[r(a,{placeholder:"sede",class:"col-12 p-0",modelValue:b(m).currentSite,"onUpdate:modelValue":e[0]||(e[0]=t=>b(m).currentSite=t),options:h.value,optionLabel:"site_name"},null,8,["modelValue","options"])]),o("div",H,[r(a,{placeholder:"Checklist",class:"col-12 p-0",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),options:C.value,optionLabel:"checklist_name"},null,8,["modelValue","options"])])]),o("div",G,[K,(i(!0),n(y,null,x(c.value.groups,t=>(i(),n("div",{key:t.group_id},[o("h6",Q,S(t.group_name),1),(i(!0),n(y,null,x(t.items,d=>(i(),n("div",{style:{display:"flex",gap:"1rem"},key:d.item_id,class:"p-field-checkbox"},[r(l,{class:"",modelValue:d.checked,"onUpdate:modelValue":w=>d.checked=w,value:!0,binary:"true"},null,8,["modelValue","onUpdate:modelValue"]),o("label",X,S(d.item_description),1)]))),128))]))),128))]),p.value.checklist_id?(i(),M(k,{key:0,style:{},onClick:T,size:"small",class:"my-5 col-12 md:col-4",severity:"warning",label:"Revisar y Enviar Auditoría"})):P("",!0),r(O,{style:{width:"40rem"},visible:_.value,"onUpdate:visible":e[3]||(e[3]=t=>_.value=t),header:"Añadir Observaciones",modal:"",closable:!1},{footer:I(()=>[o("div",Z,[r(k,{class:"col-6",severity:"success",label:"Enviar",onClick:A}),r(k,{class:"col-6",severity:"danger",label:"Cancelar ",onClick:e[2]||(e[2]=t=>_.value=!1)})])]),default:I(()=>[(i(!0),n(y,null,x(g.value,(t,d)=>(i(),n("div",{key:d},[o("h5",Y,[F(S(t.item_description)+" ",1),o("i",{style:{color:"red"},class:R(b($).TIMES)}," No cumplio",2)]),r(U,{class:"col-12",modelValue:t.warning_text,"onUpdate:modelValue":w=>t.warning_text=w,placeholder:"Observación..."},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),_:1},8,["visible"])],64)}}};export{le as default};
