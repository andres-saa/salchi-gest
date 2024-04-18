import{_ as ne,q as ie,f as o,g as se,i as S,bW as oe,x as R,z as le,r as d,o as _,c as h,d as n,w as l,a as i,F as N,R as F,A as O,b as $,t as m,v as L,k as j,U as de,j as re,p as ce,e as ue}from"./index-db2eb84a.js";import{m as f,e as z}from"./maintenance-167b6d48.js";import{m as me}from"./maintenance-8a9c4ae7.js";import{s as pe}from"./siteService-35373ddd.js";const y=q=>(ce("data-v-69acf841"),q=q(),ue(),q),_e=["onSubmit"],ve={class:"field"},he=y(()=>i("label",{for:"remarks"},"Comentarios",-1)),fe=["onSubmit"],ye={class:"field"},ge=y(()=>i("label",null,"Equipos",-1)),be={key:0,class:"field"},we=y(()=>i("label",{for:"additionalSites"},"Agregar a otras sedes",-1)),Se={class:"field p-0"},qe=y(()=>i("label",{for:"frequency"},"Frecuencia anual",-1)),Ce={class:"col-12 p-0 mt-6"},xe={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Me=y(()=>i("span",{class:"p-column-title"},"Code",-1)),ke={style:{"min-width":"max-content"}},Ve={class:""},Le={style:{display:"flex",gap:"1rem"}},De={style:{display:"flex","align-items":"center","flex-direction":"column"}},Ie=["src"],Ne={style:{"min-width":"max-content"}},Pe=y(()=>i("span",{class:"p-column-title"},"Code",-1)),Ae={__name:"maintenanceList",setup(q){const r=me(),P=ie(),g=o([]),A=o([]),C=o(!1),s=o({equipment_ids:[],sites:g.value.map(a=>({site_id:a.site_id,date:null}))}),B=o([]),x=o([]),E=o(null);se(async()=>{g.value=await pe.getSites(),x.value=g.value.map(a=>({site_id:a.site_id,site_name:a.site_name})),b.value=await f.getMaintenanceBySite(r.currentSite.site_id),V(r.currentSite.site_id),I()}),o(["unqualified","qualified","new","negotiation","renewal","proposal"]);const b=o([]);S(r.currentSite,a=>{V(a.site_id)}),S(()=>s.value.equipment_ids,async(a,t)=>{if(console.log("Equipos cambiados",a),a.length>0){const w=[...s.value.equipment_ids].map(v=>v.name);x.value=await z.getSitesWithAllEquipmentByNames(w)}else x.value=[]},{deep:!0}),S(()=>r.currentSite,async a=>{b.value=await f.getMaintenanceBySite(a.site_id)});const W=oe(),M=o(!1),k=o(""),D=o(null),G=a=>{D.value=a,W.require({message:"¿Estás seguro de que deseas marcar este mantenimiento como completado?",accept:()=>{M.value=!0}})},H=async()=>{D.value&&(await K(D.value.data.maintenance_id,k.value),M.value=!1,k.value="")},K=async(a,t)=>{await f.completeMaintenance(a,t),b.value=await f.getMaintenanceBySite(r.currentSite.site_id)};R(()=>{I()}),S(r.currentSite,a=>{V(a.site_id)});const J=()=>{s.value={},C.value=!0},I=()=>{E.value={global:{value:null,matchMode:le.CONTAINS}}};R(()=>{I()}),S(r.currentSite,a=>{V(a.site_id)});const V=async a=>{A.value=await z.getEquipmentBySite(a),B.value=A.value.map(t=>({equipment_id:t.equipment_id,name:t.name}))},Q=async()=>{if(s.value.sites.some(t=>!t.scheduled_date)||s.value.equipment_ids.length===0){alert("Por favor, completa todos los campos requeridos.");return}const a=[...s.value.equipment_ids];s.value.equipment_ids=a.map(t=>t.equipment_id),[...s.value.sites],s.value.sites.forEach(t=>{if(t.scheduled_date){const p=new Date(t.scheduled_date);p.setHours(0,0,0,0),t.scheduled_date=p.toISOString().split("T")[0],t.equipment_ids=a.map(w=>w.equipment_id)}}),s.value.status="AGENDADO",s.value.completed=!1,P.setLoading(!0,"Agendando mantenimiento"),C.value=!1,P.setLoading(!1,"Agendando mantenimiento"),await f.createMaintenanceRecord(s.value),b.value=await f.getMaintenanceBySite(r.currentSite.site_id)},X=a=>{const t=g.value.find(p=>p.site_id===a);return t?t.site_name:"Nombre no encontrado"};return(a,t)=>{const p=d("ConfirmDialog"),w=d("InputText"),v=d("Button"),T=d("Dialog"),U=d("MultiSelect"),Y=d("InputNumber"),Z=d("Calendar"),c=d("Column"),ee=d("tag"),te=d("DataTable");return _(),h(N,null,[n(p),n(T,{visible:M.value,"onUpdate:visible":t[1]||(t[1]=e=>M.value=e),header:"Completar Mantenimiento",modal:!0,style:{width:"30rem"}},{default:l(()=>[i("form",{onSubmit:F(H,["prevent"])},[i("div",ve,[he,n(w,{class:"col-12",id:"remarks",modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=e=>k.value=e),required:""},null,8,["modelValue"])]),n(v,{type:"submit",label:"Confirmar",class:"p-button-success"})],40,_e)]),_:1},8,["visible"]),n(T,{visible:C.value,"onUpdate:visible":t[5]||(t[5]=e=>C.value=e),header:"Agendar Nuevo Mantenimiento",modal:!0,style:{width:"30rem"}},{default:l(()=>[i("form",{onSubmit:F(Q,["prevent"])},[i("div",ye,[ge,n(U,{style:{width:"100%","max-width":"100%"},modelValue:s.value.equipment_ids,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value.equipment_ids=e),options:B.value,optionLabel:"name",placeholder:"Selecciona los equipos",required:""},null,8,["modelValue","options"])]),g.value.length>1?(_(),h("div",be,[we,n(U,{style:{width:"100%","max-width":"100%"},id:"additionalSites",modelValue:s.value.sites,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value.sites=e),options:x.value,optionLabel:"site_name",placeholder:"Selecciona sedes",onChange:a.updatesites},null,8,["modelValue","options","onChange"])])):O("",!0),i("div",Se,[qe,n(Y,{id:"frequency ",class:"col-12 m-0 p-0 mb-6",modelValue:s.value.frequency,"onUpdate:modelValue":t[4]||(t[4]=e=>s.value.frequency=e),required:"",placeholder:"Ingresa la frecuencia"},null,8,["modelValue"])]),(_(!0),h(N,null,$(s.value.sites,(e,u)=>(_(),h("div",{class:"field",key:e.site_id},[i("label",null,m(X(e.site_id))+" - Fecha de mantenimiento",1),n(Z,{style:{width:"100%"},modelValue:e.scheduled_date,"onUpdate:modelValue":ae=>e.scheduled_date=ae,showIcon:!0,required:""},null,8,["modelValue","onUpdate:modelValue"])]))),128)),i("div",Ce,[n(v,{type:"submit",label:"Agendar Mantenimiento",class:"col-12 p-button-success"})])],40,fe)]),_:1},8,["visible"]),i("div",xe,[n(v,{label:"Agendar",onClick:J,icon:"pi pi-calendar-plus",class:"p-button-success"})]),n(te,{stripedRows:"",class:"card mb-4 my-3 md:shadow-5 md:p-5",style:{border:"none",margin:"auto",padding:"0"},ref:"dt",value:b.value,dataKey:"id",paginator:!0,rows:10,filters:E.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} archivos"},{default:l(()=>[n(c,{class:"p-2 px-5",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),n(c,{class:"p-2 px-5",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>[Me,L(" "+m(e.data.maintenance_id),1)]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Fecha",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>[i("p",ke,m(e.data.scheduled_date),1)]),_:1}),n(c,{class:"px-5",field:"id",header:"Sede",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>{var u;return[i("p",Ve,m((u=j(r).currentSite.site_name)==null?void 0:u.toUpperCase()),1)]}),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Equipos",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>[i("div",Le,[(_(!0),h(N,null,$(e.data.equipment,u=>(_(),h("div",null,[i("div",De,[i("img",{style:{width:"3rem","aspect-ratio":"1 / 1","object-fit":"cover","border-radius":"0.5rem"},src:`${j(de)}/read-product-image/300/${u.name}-${u.brand}`,alt:""},null,8,Ie),i("p",Ne,m(u.name),1)])]))),256))])]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Frecuencia",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>[L(m(e.data.frequency),1)]),_:1}),n(c,{class:"p-2 px-5",field:"id",header:"Estado",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:l(e=>[n(ee,{severity:e.data.completed?"success":"warning"},{default:l(()=>[L(m(e.data.completed?"COMPLETADO":e.data.status),1)]),_:2},1032,["severity"])]),_:1}),n(c,{class:"p-2 px-5",field:"file_name",header:"Observaciones",sortable:!0,headerStyle:"width:min-content; min-width: 20rem; "},{body:l(e=>[Pe,L(" "+m(e.data.remarks||"Agendado"),1)]),_:1}),n(c,{class:"p-2 px-5",field:"action",header:"acciones",sortable:!0,headerStyle:"width:min-content; min-width: 20rem; "},{body:l(e=>[e.data.completed?O("",!0):(_(),re(v,{key:0,icon:"fa-solid fa-check",size:"small",severity:"success",label:"marcar como completado",onClick:u=>G(e)},null,8,["onClick"]))]),_:1})]),_:1},8,["value","filters"])],64)}}},Re=ne(Ae,[["__scopeId","data-v-69acf841"]]);export{Re as default};
