import{_ as ne,y as ie,r as l,l as se,q as h,bX as oe,A as O,C as le,a as r,o as _,c as f,f as n,w as d,F as P,d as i,Y as R,D as E,e as $,t as m,j as L,s as j,U as de,g as re,p as ce,i as ue}from"./index-a2618755.js";import{m as y,e as z}from"./maintenance-22411561.js";import{m as me}from"./maintenance-00149356.js";import{s as pe}from"./siteService-a7406c33.js";const b=C=>(ce("data-v-e3fbe8f1"),C=C(),ue(),C),_e=["onSubmit"],ve={class:"field"},he=b(()=>i("label",{for:"remarks"},"Comentarios",-1)),fe=["onSubmit"],ye={class:"field"},be=b(()=>i("label",null,"Equipos",-1)),ge={key:0,class:"field"},Se=b(()=>i("label",{for:"additionalSites"},"Agregar a otras sedes",-1)),we={class:"field p-0"},qe=b(()=>i("label",{for:"frequency"},"Frecuencia anual",-1)),Ce={class:"col-12 p-0 mt-6"},xe={class:"col-12 p-0 mb-4",style:{display:"flex","justify-content":"end"}},Me=b(()=>i("span",{class:"p-column-title"},"Code",-1)),Ve={style:{"min-width":"max-content"}},ke={class:""},Le={style:{display:"flex",gap:"1rem"}},De={style:{display:"flex","align-items":"center","flex-direction":"column"}},Ne=["src"],Pe={style:{"min-width":"max-content"}},Ae=b(()=>i("span",{class:"p-column-title"},"Code",-1)),Be={__name:"maintenanceList",setup(C){const o=me(),A=ie(),g=l([]),B=l([]),x=l(!1),s=l({equipment_ids:[],sites:g.value.map(t=>({site_id:t.site_id,date:null}))}),T=l([]),M=l([]),U=l(null);se(async()=>{g.value=await pe.getSites(),M.value=g.value.map(t=>({site_id:t.site_id,site_name:t.site_name})),S.value=await y.getMaintenanceBySite(o.currentSite.site_id),w(o.currentSite.site_id),N()}),l(["unqualified","qualified","new","negotiation","renewal","proposal"]);const S=l([]);h(o.currentSite,t=>{w(t.site_id)}),h(()=>s.value.equipment_ids,async(t,a)=>{if(console.log("Equipos cambiados",t),(t==null?void 0:t.length)>0){const q=[...s.value.equipment_ids].map(v=>v.name);M.value=await z.getSitesWithAllEquipmentByNames(q)}else M.value=[]},{deep:!0}),h(()=>o.currentSite,async t=>{S.value=await y.getMaintenanceBySite(t.site_id)});const G=oe(),V=l(!1),k=l(""),D=l(null),H=t=>{D.value=t,G.require({message:"¿Estás seguro de que deseas marcar este mantenimiento como completado?",accept:()=>{V.value=!0}})},K=async()=>{D.value&&(await W(D.value.data.maintenance_id,k.value),V.value=!1,k.value="")},W=async(t,a)=>{await y.completeMaintenance(t,a),S.value=await y.getMaintenanceBySite(o.currentSite.site_id)};O(()=>{N()}),h(o.currentSite,t=>{w(t.site_id)});const X=()=>{s.value={},x.value=!0},N=()=>{U.value={global:{value:null,matchMode:le.CONTAINS}}};O(()=>{N()}),h(o.currentSite,t=>{w(t.site_id)});const w=async t=>{B.value=await z.getEquipmentBySite(t),T.value=B.value.map(a=>({equipment_id:a.equipment_id,name:a.name}))},Y=async()=>{if(s.value.sites.some(a=>!a.scheduled_date)||s.value.equipment_ids.length===0){alert("Por favor, completa todos los campos requeridos.");return}const t=[...s.value.equipment_ids];s.value.equipment_ids=t.map(a=>a.equipment_id),[...s.value.sites],s.value.sites.forEach(a=>{if(a.scheduled_date){const p=new Date(a.scheduled_date);p.setHours(0,0,0,0),a.scheduled_date=p.toISOString().split("T")[0],a.equipment_ids=t.map(q=>q.equipment_id)}}),s.value.status="AGENDADO",s.value.completed=!1,A.setLoading(!0,"Agendando mantenimiento"),x.value=!1,A.setLoading(!1,"Agendando mantenimiento"),await y.createMaintenanceRecord(s.value),S.value=await y.getMaintenanceBySite(o.currentSite.site_id)},J=t=>{const a=g.value.find(p=>p.site_id===t);return a?a.site_name:"Nombre no encontrado"};return h(()=>o.currentSite.site_id,()=>{o.currentSite.site_id&&w(o.currentSite.site_id)},{deep:!0}),(t,a)=>{const p=r("ConfirmDialog"),q=r("InputText"),v=r("Button"),I=r("Dialog"),F=r("MultiSelect"),Q=r("InputNumber"),Z=r("Calendar"),c=r("Column"),ee=r("tag"),te=r("DataTable");return _(),f(P,null,[n(p),n(I,{visible:V.value,"onUpdate:visible":a[1]||(a[1]=e=>V.value=e),header:"Completar Mantenimiento",modal:!0,style:{width:"30rem"}},{default:d(()=>[i("form",{onSubmit:R(K,["prevent"])},[i("div",ve,[he,n(q,{class:"col-12",id:"remarks",modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),required:""},null,8,["modelValue"])]),n(v,{type:"submit",label:"Confirmar",class:"p-button-success"})],40,_e)]),_:1},8,["visible"]),n(I,{visible:x.value,"onUpdate:visible":a[5]||(a[5]=e=>x.value=e),header:"Agendar Nuevo Mantenimiento",modal:!0,style:{width:"30rem"}},{default:d(()=>[i("form",{onSubmit:R(Y,["prevent"])},[i("div",ye,[be,n(F,{style:{width:"100%","max-width":"100%"},modelValue:s.value.equipment_ids,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value.equipment_ids=e),options:T.value,optionLabel:"name",placeholder:"Selecciona los equipos",required:""},null,8,["modelValue","options"])]),g.value.length>1?(_(),f("div",ge,[Se,n(F,{style:{width:"100%","max-width":"100%"},id:"additionalSites",modelValue:s.value.sites,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value.sites=e),options:M.value,optionLabel:"site_name",placeholder:"Selecciona sedes",onChange:t.updatesites},null,8,["modelValue","options","onChange"])])):E("",!0),i("div",we,[qe,n(Q,{id:"frequency ",class:"col-12 m-0 p-0 mb-6",modelValue:s.value.frequency,"onUpdate:modelValue":a[4]||(a[4]=e=>s.value.frequency=e),required:"",placeholder:"Ingresa la frecuencia"},null,8,["modelValue"])]),(_(!0),f(P,null,$(s.value.sites,(e,u)=>(_(),f("div",{class:"field",key:e.site_id},[i("label",null,m(J(e.site_id))+" - Fecha de mantenimiento",1),n(Z,{style:{width:"100%"},modelValue:e.scheduled_date,"onUpdate:modelValue":ae=>e.scheduled_date=ae,showIcon:!0,required:""},null,8,["modelValue","onUpdate:modelValue"])]))),128)),i("div",Ce,[n(v,{type:"submit",label:"Agendar Mantenimiento",class:"col-12 p-button-success"})])],40,fe)]),_:1},8,["visible"]),n(te,{stripedRows:"",class:"mb-4 mx-3 mt-6",style:{border:"none",margin:"auto",padding:"0"},ref:"dt",value:S.value,dataKey:"id",paginator:!0,rows:10,filters:U.value,scrollable:"",responsiveLayout:"scroll",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} archivos"},{default:d(()=>[i("div",xe,[n(v,{label:"Agendar",onClick:X,icon:"pi pi-calendar-plus",class:"p-button-success"})]),n(c,{class:"p-2 px-5",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>[Me,L(" "+m(e.data.maintenance_id),1)]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Fecha",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>[i("p",Ve,m(e.data.scheduled_date),1)]),_:1}),n(c,{class:"px-5",field:"id",header:"Sede",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>{var u;return[i("p",ke,m((u=j(o).currentSite.site_name)==null?void 0:u.toUpperCase()),1)]}),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Equipos",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>[i("div",Le,[(_(!0),f(P,null,$(e.data.equipment,u=>(_(),f("div",null,[i("div",De,[i("img",{style:{width:"3rem","aspect-ratio":"1 / 1","object-fit":"cover","border-radius":"0.5rem"},src:`${j(de)}/read-product-image/300/${u.name}-${u.brand}`,alt:""},null,8,Ne),i("p",Pe,m(u.name),1)])]))),256))])]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Frecuencia",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>[L(m(e.data.frequency),1)]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Estado",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:d(e=>[n(ee,{severity:e.data.completed?"success":"warning"},{default:d(()=>[L(m(e.data.completed?"COMPLETADO":e.data.status),1)]),_:2},1032,["severity"])]),_:1}),n(c,{class:"p-2 px-5",field:"file_name",header:"Observaciones",sortable:!0,headerStyle:"width:min-content; min-width: 20rem; "},{body:d(e=>[Ae,L(" "+m(e.data.remarks||"Agendado"),1)]),_:1}),n(c,{class:"p-2 px-5",field:"action",header:"acciones",sortable:!0,headerStyle:"width:min-content; min-width: 20rem; "},{body:d(e=>[e.data.completed?E("",!0):(_(),re(v,{key:0,icon:"fa-solid fa-check",size:"small",severity:"success",label:"marcar como completado",onClick:u=>H(e)},null,8,["onClick"]))]),_:1})]),_:1},8,["value","filters"])],64)}}},Oe=ne(Be,[["__scopeId","data-v-e3fbe8f1"]]);export{Oe as default};
