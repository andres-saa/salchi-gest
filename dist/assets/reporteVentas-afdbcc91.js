import{_ as O,x as q,G as W,r as l,k as Y,i as K,m as x,U as I,H as Q,a as u,o as k,c as S,b as s,d as n,u as r,F as X,e as Z,n as E,w as b,T as ee,E as te,s as V,t as R,p as oe,g as se,I as ae}from"./index-b7d84b8e.js";const le=g=>(oe("data-v-9bb437cc"),g=g(),se(),g),ne={class:"col-12 px-3 md:px-4 mx-auto",style:{position:"relative","max-width":"1366px","margin-top":"6rem"}},ie={class:"grid",style:{"background-color":"rgba(250, 250, 250, 0)"}},re={class:"text-sm col-12 md:col-3 p-2 xl:col-2"},ce={class:"text-sm col-12 p-2 md:col-4 xl:col-6"},de={class:"text-center col-12 p-2 md:col-3"},pe={class:"col-12 md:col-1 md:p-0",style:{display:"flex","align-items":"center","justify-content":"start"}},ue=le(()=>s("p",{class:"text-3xl px-0 mx-0 my-6 pb-0",style:{"font-weight":"bold"}},[s("i",{class:"fa-solid fa-chart-simple"}),V(" Vision General")],-1)),me={class:"contenedor mt-5",style:{position:"sticky",top:"3rem","z-index":"99"}},fe={class:"col-12 px-0 py-0 my-0 p-0",style:{"overflow-x":"auto","background-color":"#fafafa"}},ve={class:"px-0 mx-0",style:{width:"max-content","background-color":"#fafafa",display:"flex",color:"","justify-content":"start",gap:"2rem","min-width":"max-content"}},_e={style:{"background-color":""}},ye={class:"grid p-0 m-0"},xe={class:"grid"},be={class:"col-12 px-0 mx-0"},ge={class:"col-12",style:{display:"flex","flex-direction":"column"}},he={class:"text-l",style:{"font-weight":"bold"}},we={class:"col-12",style:{display:"flex","flex-direction":"column"}},De={style:{"font-weight":"bold"},class:"text-l"},ke={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Se={class:"col-12",style:{display:"flex","justify-content":"center"}},Re={__name:"reporteVentas",setup(g){const a=q(),{isDarkTheme:L}=W(),N=l(["enviada","cancelada","en preparacion"]),U=l("enviada"),F=Y(),C=l([]),M=l([]),f=l(!1),h=l(new Date(new Date().setDate(new Date().getDate()-7))),w=l(new Date),m=l(new Date),c=l(new Date);l("");function _(t){const e=new Date,d=new Date(e);d.setDate(d.getDate()+1);const p=new Date(e);p.setDate(e.getDate()-t),m.value=p,t==1?(c.value=e,a.setDateRange(m.value,c.value),f.value=!1):(c.value=d,a.setDateRange(m.value,c.value),f.value=!1),a.fetchSalesReport()}K(()=>{P().then(t=>{C.value=t}),a.fetchSalesReport()});const B=async()=>{const t=v(h.value),e=v(w.value),d=M.value.map(i=>i.site_id).join(","),p=new URLSearchParams({site_ids:d,status:U.value,start_date:t,end_date:e}),y=`${I}/sales_report?${p.toString()}`;try{const i=await fetch(y,{method:"GET",headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const D=await i.json();ae.value=D,console.log(D)}catch(i){console.error("Fetch error:",i)}};x([h,w],()=>{B()},{deep:!0}),x(()=>a.order_status,(t,e)=>{console.log(`El estado de orden ha cambiado de ${e} a ${t}`),a.fetchSalesReport()}),x(a.selectedSites,t=>{a.setSelectedSites(t)},{deep:!0});const P=async()=>{try{const t=await fetch(`${I}/sites`);if(!t.ok)throw"paila";return await t.json()}catch(t){console.log(t)}},z=l([{name:"Valor ventas",to:"/reporte-ventas/valor-ventas",icon:"fa-solid fa-dollar-sign"},{name:"No. Ordenes",to:"/reporte-ventas/no-ordenes",icon:"fa-solid fa-sort"},{name:"Ticket promedio",to:"/reporte-ventas/ticket",icon:"fa-solid fa-money-bill"},{name:"Ordenes",to:"/reporte-ventas/ordenes",icon:"fa-solid fa-table"},{name:"Resumen",to:"/reporte-ventas/order-sumary",icon:"fa-solid fa-table"}]);l(null),Q({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),l([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const $=l(null),A=()=>{$.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},H=()=>{$.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};x(L,t=>{t?H():A()},{immediate:!0}),l(`${h.value} - ${w.value}`);function v(t){const e=new Date(t),d=e.getFullYear(),p=(e.getMonth()+1).toString().padStart(2,"0"),y=e.getDate().toString().padStart(2,"0");return`${d}-${p}-${y}`}return l({}),l(),x([m,c],([t,e])=>{t>e&&(alert("La fecha de inicio debe ser anterior o igual a la fecha final."),c.value=t)}),(t,e)=>{var j;const d=u("Dropdown"),p=u("MultiSelect"),y=u("InputText"),i=u("Button"),D=u("RouterLink"),G=u("RouterView"),T=u("Calendar"),J=u("Dialog");return k(),S("div",ne,[s("div",ie,[s("div",re,[n(d,{class:"text-sm col-12 p-0",modelValue:r(a).order_status,"onUpdate:modelValue":e[0]||(e[0]=o=>r(a).order_status=o),options:N.value,placeholder:"Estado"},null,8,["modelValue","options"])]),s("div",ce,[n(p,{style:{},display:"chip",multiple:"",modelValue:r(a).selectedSites,"onUpdate:modelValue":e[1]||(e[1]=o=>r(a).selectedSites=o),optionLabel:"site_name",options:(j=C.value)==null?void 0:j.filter(o=>o.show_on_web),class:"text-sm col-12 p-0",placeholder:"Sedes"},null,8,["modelValue","options"])]),s("div",de,[n(y,{class:"col-12 p-3",onClick:e[2]||(e[2]=o=>f.value=!0),style:{height:"2.7rem"},value:r(a).dateRangeDifference.rangeName||`${v(r(a).dateRange.startDate)}  |  ${v(r(a).dateRange.endDate)}`,placeholder:"periodo"},null,8,["value"])]),s("div",pe,[n(i,{icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"},onClick:r(a).fetchSalesReport},null,8,["onClick"])])]),ue,s("div",me,[s("div",fe,[s("div",ve,[(k(!0),S(X,null,Z(z.value,o=>(k(),S("div",_e,[n(D,{to:o.to},{default:b(()=>[n(i,{size:"medium",style:te([r(F).fullPath==o.to?"box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;":"",{"border-radius":"0"}]),class:"text-md px-0 pt-2 pb-4 my-0 mx-0",text:"",severity:"secondary"},{default:b(()=>[s("i",{class:E(["mr-2",o.icon])},null,2),V(" "+R(o.name)+" ",1)]),_:2},1032,["style"])]),_:2},1032,["to"])]))),256))])])]),s("div",ye,[s("div",{class:E(["p-0",r(a).visibleNotifications?"col-9":"col-12"])},[n(ee,{name:"fade"},{default:b(()=>[n(G)]),_:1})],2)]),n(J,{visible:f.value,"onUpdate:visible":e[11]||(e[11]=o=>f.value=o),modal:"",header:"Periodo",style:{width:"25rem"}},{default:b(()=>[s("div",xe,[s("div",be,[n(i,{text:"",label:"Hoy",onClick:e[3]||(e[3]=o=>_(0)),class:"p-button-text col-12 p-1 m-0"}),n(i,{text:"",label:"Ayer",onClick:e[4]||(e[4]=o=>_(1)),class:"p-button-text col-12 p-1 m-0"}),n(i,{text:"",label:"Últimos 7 días",onClick:e[5]||(e[5]=o=>_(7)),class:"p-button-text col-12 p-1 m-0"}),n(i,{text:"",label:"Últimos 14 días",onClick:e[6]||(e[6]=o=>_(14)),class:"p-button-text col-12 p-1"}),n(i,{text:"",label:"Últimos 28 días",onClick:e[7]||(e[7]=o=>_(28)),class:"p-button-text col-12 p-0"})]),s("div",ge,[s("span",he,"Desde - "+R(v(h.value)),1),n(T,{style:{"min-width":"max-content"},modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=o=>m.value=o)},null,8,["modelValue"])]),s("div",we,[s("span",De,"Hasta - "+R(v(w.value)),1),n(T,{style:{"min-width":"max-content"},modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=o=>c.value=o),showWeek:""},null,8,["modelValue"])]),s("div",ke,[s("div",Se,[n(i,{onClick:e[10]||(e[10]=()=>{r(a).setDateRange(m.value,c.value),f.value=!1,r(a).fetchSalesReport()})},{default:b(()=>[V("Aplicar")]),_:1})])])])]),_:1},8,["visible"])])}}},Ce=O(Re,[["__scopeId","data-v-9bb437cc"]]);export{Ce as default};
