import{_ as U,V as B,r as i,i as j,a as d,o as N,c as E,d as l,w as c,b as s,F as H,A as P,q as C,t as Y,p as q,g as G}from"./index-53be5af1.js";import{s as L}from"./siteService-58c4f5cc.js";import{d as $}from"./dailyInventoryService-a23f40de.js";const x=D=>(q("data-v-bfbda3d8"),D=D(),G(),D),O={class:"grid"},W={class:"col-12 px-0 mx-0"},z={class:"col-12",style:{display:"flex","flex-direction":"column"}},J=x(()=>s("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),K={class:"col-12",style:{display:"flex","flex-direction":"column"}},Q=x(()=>s("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),X={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Z={class:"col-12",style:{display:"flex","justify-content":"center"}},ee={class:"m-auto",style:{"max-width":"900px"}},te={class:"m-0 col-12",style:{"align-items":"center"}},le={class:"p-0 mb-3",style:{display:"flex","align-items":"center"}},ae=x(()=>s("span",{class:"text-xl mr-2"},[s("b",null,"Sedes")],-1)),se={class:"col p-0",style:{display:"flex",gap:"1rem","align-items":"center"}},oe=x(()=>s("span",{class:"text-xl"},[s("b",null,"Periodo")],-1)),ne={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},ie={style:{display:"flex","justify-content":"space-between","align-items":"center"}},de=x(()=>s("span",{class:"text-xl"}," Gestionar reportes de inventario",-1)),re={__name:"dailyInventoryReports",setup(D){const I=B(),h=i([]),g=i([{}]),u=i(!1),p=i(new Date(new Date().setDate(new Date().getDate()-7))),r=i(new Date),v=i(new Date(new Date().setDate(new Date().getDate()-7))),m=i(new Date),S=i(),y=i(),k=(o,e)=>{v.value=o,m.value=e},_=o=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const n=new Date(e);n.setDate(e.getDate()-o),p.value=n,o==1?(r.value=e,m.value=r.value,v.value=p.value,u.value=!1):(r.value=a,v.value=p.value,m.value=r.value,u.value=!1)};j(async()=>{h.value=await L.getSites(),g.value=h.value,S.value=await $.getAllDailyInventoryReports()}),(()=>{y.value={global:{value:null,matchMode:P.CONTAINS}}})();function b(o){const e=new Date(o),a=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),w=e.getDate().toString().padStart(2,"0");return`${a}-${n}-${w}`}function R(o){const e=new Date(o),a=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0");return`${e.getDate().toString().padStart(2,"0")}-${n}-${a}`}const F=async()=>{const o=g.value.map(n=>n.site_id);I.rawUserData.id;const e=b(v.value),a=b(m.value);S.value=await $.getAllDailyInventoryReportsFiltered(o,e,a)};return(o,e)=>{const a=d("Button"),n=d("Calendar"),w=d("Dialog"),M=d("MultiSelect"),V=d("InputText"),f=d("Column"),T=d("router-link"),A=d("DataTable");return N(),E(H,null,[l(w,{class:"mx-2",visible:u.value,"onUpdate:visible":e[8]||(e[8]=t=>u.value=t),modal:"",header:"Periodo",style:{width:"25rem"}},{default:c(()=>[s("div",O,[s("div",W,[l(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=t=>_(0)),class:"p-button-text col-12 p-1 m-0"}),l(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=t=>_(1)),class:"p-button-text col-12 p-1 m-0"}),l(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=t=>_(7)),class:"p-button-text col-12 p-1 m-0"}),l(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=t=>_(14)),class:"p-button-text col-12 p-1"}),l(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=t=>_(28)),class:"p-button-text col-12 p-0"})]),s("div",z,[J,l(n,{style:{"min-width":"max-content"},modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t)},null,8,["modelValue"])]),s("div",K,[Q,l(n,{style:{"min-width":"max-content"},modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=t=>r.value=t),showWeek:""},null,8,["modelValue"])]),s("div",X,[s("div",Z,[l(a,{onClick:e[7]||(e[7]=()=>{k(p.value,r.value),u.value=!1})},{default:c(()=>[C("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),s("div",ee,[s("div",te,[s("div",le,[ae,l(M,{style:{},display:"chip",multiple:"",modelValue:g.value,"onUpdate:modelValue":e[9]||(e[9]=t=>g.value=t),optionLabel:"site_name",options:h.value.filter(t=>t.site_id!=12&t.site_id!=13),class:"text-sm multi p-0"},null,8,["modelValue","options"])]),s("div",se,[oe,l(V,{class:"",onClick:e[10]||(e[10]=t=>u.value=!0),style:{height:"2.7rem"},value:`${b(v.value)}  |  ${b(m.value)}`,placeholder:"periodo"},null,8,["value"]),l(a,{onClick:F,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])])]),s("div",ne,[l(A,{style:{"max-width":"900px"},filters:y.value,"onUpdate:filters":e[12]||(e[12]=t=>y.value=t),class:"col-12 m-auto",value:S.value,tableStyle:"min-width: 50rem;"},{header:c(()=>[s("div",ie,[de,l(V,{modelValue:y.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>y.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])]),default:c(()=>[l(f,{class:"py-1",field:"daily_inventory_id",header:"ID"}),l(f,{class:"py-1",field:"employer_name",header:"Responsable"}),l(f,{class:"py-1",field:"site_name",header:"Sede"}),l(f,{class:"py-1",field:"date",header:"Fecha"},{body:c(t=>[C(Y(R(t.data.date)),1)]),_:1}),l(f,{class:"py-1",field:"date",header:"Action"},{body:c(t=>[l(T,{to:`/daily-inventory/daily-inventory-view/${t.data.daily_inventory_id}`},{default:c(()=>[l(a,{text:"",icon:"pi pi-eye"})]),_:2},1032,["to"]),l(a,{severity:"success",text:"",icon:"pi pi-download"})]),_:1})]),_:1},8,["filters","value"])])],64)}}},me=U(re,[["__scopeId","data-v-bfbda3d8"]]);export{me as default};
