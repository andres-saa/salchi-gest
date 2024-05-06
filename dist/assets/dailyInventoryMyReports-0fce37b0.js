import{_ as T,V as A,r as i,i as U,a as r,o as j,c as B,d as t,w as c,b as s,F as N,A as E,q as $,t as H,p as P,g as Y}from"./index-53be5af1.js";import{s as q}from"./siteService-58c4f5cc.js";import{d as I}from"./dailyInventoryService-a23f40de.js";const w=f=>(P("data-v-715d75c6"),f=f(),Y(),f),O={class:"grid"},W={class:"col-12 px-0 mx-0"},z={class:"col-12",style:{display:"flex","flex-direction":"column"}},G=w(()=>s("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),J={class:"col-12",style:{display:"flex","flex-direction":"column"}},K=w(()=>s("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),L={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Q={class:"col-12",style:{display:"flex","justify-content":"center"}},X={class:"m-auto",style:{"max-width":"900px"}},Z={class:"grid mx-0 mt-4"},ee={class:"col-12 p-2",style:{display:"flex",gap:"1rem","justify-content":"center","align-items":"center"}},te=w(()=>s("span",{class:"text-xl"},[s("b",null,"Periodo")],-1)),ae={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},le={style:{display:"flex","justify-content":"space-between","align-items":"center"}},se=w(()=>s("span",{class:"text-xl"}," Mis reportes de inventario",-1)),oe={__name:"dailyInventoryMyReports",setup(f){const b=A(),k=i([]);i([]);const u=i(!1),p=i(new Date(new Date().setDate(new Date().getDate()-7))),d=i(new Date),v=i(new Date(new Date().setDate(new Date().getDate()-7))),y=i(new Date),h=i(),m=i(),V=(o,e)=>{v.value=o,y.value=e},_=o=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const n=new Date(e);n.setDate(e.getDate()-o),p.value=n,o==1?(d.value=e,y.value=d.value,v.value=p.value,u.value=!1):(d.value=a,v.value=p.value,y.value=d.value,u.value=!1),S()};U(async()=>{k.value=await q.getSites();const o=b.rawUserData.id;h.value=await I.getAllMyDailyInventoryReports(o)}),(()=>{m.value={global:{value:null,matchMode:E.CONTAINS}}})();function x(o){const e=new Date(o),a=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),g=e.getDate().toString().padStart(2,"0");return`${a}-${n}-${g}`}function M(o){const e=new Date(o),a=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0");return`${e.getDate().toString().padStart(2,"0")}-${n}-${a}`}const S=async()=>{const o=b.rawUserData.id,e=x(v.value),a=x(y.value);h.value=await I.getAllMyDailyInventoryReportsFiltered(o,e,a)};return(o,e)=>{const a=r("Button"),n=r("Calendar"),g=r("Dialog"),C=r("InputText"),D=r("Column"),R=r("router-link"),F=r("DataTable");return j(),B(N,null,[t(g,{class:"mx-2",visible:u.value,"onUpdate:visible":e[8]||(e[8]=l=>u.value=l),modal:"",header:"Periodo",style:{width:"25rem"}},{default:c(()=>[s("div",O,[s("div",W,[t(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=l=>_(0)),class:"p-button-text col-12 p-1 m-0"}),t(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=l=>_(1)),class:"p-button-text col-12 p-1 m-0"}),t(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=l=>_(7)),class:"p-button-text col-12 p-1 m-0"}),t(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=l=>_(14)),class:"p-button-text col-12 p-1"}),t(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=l=>_(28)),class:"p-button-text col-12 p-0"})]),s("div",z,[G,t(n,{style:{"min-width":"max-content"},modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=l=>p.value=l)},null,8,["modelValue"])]),s("div",J,[K,t(n,{style:{"min-width":"max-content"},modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=l=>d.value=l),showWeek:""},null,8,["modelValue"])]),s("div",L,[s("div",Q,[t(a,{onClick:e[7]||(e[7]=()=>{V(p.value,d.value),u.value=!1})},{default:c(()=>[$("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),s("div",X,[s("div",Z,[s("div",ee,[te,t(C,{class:"",onClick:e[9]||(e[9]=l=>u.value=!0),style:{height:"2.7rem"},value:`${x(v.value)}  |  ${x(y.value)}`,placeholder:"periodo"},null,8,["value"]),t(a,{onClick:S,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])])]),s("div",ae,[t(F,{style:{"max-width":"900px"},filters:m.value,"onUpdate:filters":e[11]||(e[11]=l=>m.value=l),class:"col-12 m-auto",value:h.value,tableStyle:"min-width: 50rem;"},{header:c(()=>[s("div",le,[se,t(C,{modelValue:m.value.global.value,"onUpdate:modelValue":e[10]||(e[10]=l=>m.value.global.value=l),placeholder:"Buscar..."},null,8,["modelValue"])])]),default:c(()=>[t(D,{class:"py-1",field:"daily_inventory_id",header:"ID"}),t(D,{class:"py-1",field:"employer_name",header:"Responsable"}),t(D,{class:"py-1",field:"site_name",header:"Sede"}),t(D,{class:"py-1",field:"date",header:"Fecha"},{body:c(l=>[$(H(M(l.data.date)),1)]),_:1}),t(D,{class:"py-1",field:"date",header:"Action"},{body:c(l=>[t(R,{to:`/daily-inventory/daily-inventory-view/${l.data.daily_inventory_id}`},{default:c(()=>[t(a,{text:"",icon:"pi pi-eye"})]),_:2},1032,["to"]),t(a,{severity:"success",text:"",icon:"pi pi-download"})]),_:1})]),_:1},8,["filters","value"])])],64)}}},ce=T(oe,[["__scopeId","data-v-715d75c6"]]);export{ce as default};