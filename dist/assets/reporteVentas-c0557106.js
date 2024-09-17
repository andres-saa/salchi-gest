import{_ as K,H as Q,X as ee,r as t,v as te,k as y,m as se,U as T,Y as oe,a as p,o as S,c as k,b as o,g as i,u as c,F as le,d as ae,n as H,w as x,T as ne,s as ie,q as M,t as re,p as ce,h as de,Z as ue}from"./index-fcc1124b.js";const R=h=>(ce("data-v-fc2ee0fb"),h=h(),de(),h),pe={class:"col-12 px-3 md:px-4 mx-auto",style:{position:"relative","max-width":"1366px","margin-top":"6rem"}},me={class:"grid",style:{"background-color":"rgba(250, 250, 250, 0)"}},fe={class:"text-sm col-12 md:col-3 p-2 xl:col-2"},ve={class:"text-sm col-12 p-2 md:col-4 xl:col-6"},ye={class:"text-center col-12 p-2 md:col-3"},_e={class:"col-12 md:col-1 md:p-0",style:{display:"flex","align-items":"center","justify-content":"start"}},ge=R(()=>o("p",{class:"text-3xl px-0 mx-0 my-6 pb-0",style:{"font-weight":"bold"}},[o("i",{class:"fa-solid fa-chart-simple"}),M(" Vision General")],-1)),he={class:"contenedor mt-5",style:{position:"sticky",top:"3rem","z-index":"99"}},we={class:"col-12 px-0 py-0 my-0 p-0 m-auto",style:{"overflow-x":"auto","background-color":"#fafafa"}},xe={class:"px-0 mx-0",style:{width:"max-content","background-color":"#fafafa",display:"flex","align-items":"center",color:"","justify-content":"start",gap:"2rem","min-width":"max-content"}},be={style:{"background-color":""}},De={class:"grid p-0 m-0"},Se={class:"grid"},ke={class:"col-12",style:{display:"flex","flex-wrap":"wrap",gap:"1rem"}},Re={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},Ve=R(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Desde ",-1)),$e={style:{position:"relative"}},Ce={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},Te=R(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),He={style:{position:"relative"}},Me={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},je={class:"col-12",style:{display:"flex","justify-content":"center"}},ze={__name:"reporteVentas",setup(h){const a=Q(),{isDarkTheme:j}=ee(),m=t(new Date),f=t(new Date);t([]);const z=t(["enviada","cancelada","en preparacion"]),E=t("enviada"),F=te(),I=t([]),N=t([]),_=t(!1),b=t(new Date(new Date().setDate(new Date().getDate()-7))),D=t(new Date);t(Array.from({length:24},(s,e)=>e)),t([0,10,20,30,40,50]),t([0,1,2,3,4,5,6,7,8,9]);const U=t(null),L=t(null),A=t(null);t(Array.from({length:24},(s,e)=>e)),t([10,20,30,40,50]),t([0,1,2,3,4,5,6,7,8,9]);const B=t(null),P=t(null),J=t(null);t(null),t(null),y(f,s=>{s&&s.getHours()===0&&(B.value=null,P.value=null,J.value=null)},{deep:!0}),t("");function g(s){const e=new Date,u=new Date(e);u.setDate(u.getDate()+1);const d=new Date(e);d.setDate(e.getDate()-s),d.setHours(10,0,0,0);let r;s==1?(r=new Date(e),r.setHours(4,0,0,0),r<e&&r.setDate(r.getDate()),m.value=d,f.value=r):(r=new Date(u),r.setHours(4,0,0,0),m.value=d,f.value=r),a.setDateRange(m.value,f.value),_.value=!1,a.fetchSalesReport()}se(()=>{q().then(s=>{I.value=s,a.fetchSalesReport()})});const O=async()=>{const s=w(b.value),e=w(D.value),u=N.value.map(n=>n.site_id).join(","),d=new URLSearchParams({site_ids:u,status:E.value,start_date:s,end_date:e}),r=`${T}/sales_report?${d.toString()}`;try{const n=await fetch(r,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const v=await n.json();ue.value=v,console.log(v)}catch(n){console.error("Fetch error:",n)}};y([b,D],()=>{O()},{deep:!0}),y(m,s=>{s&&s.getHours()===0&&(U.value=null,L.value=null,A.value=null)},{deep:!0}),y(()=>a.order_status,(s,e)=>{console.log(`El estado de orden ha cambiado de ${e} a ${s}`),a.fetchSalesReport()}),y(a.selectedSites,s=>{a.setSelectedSites(s)},{deep:!0});const q=async()=>{try{const s=await fetch(`${T}/sites`);if(!s.ok)throw"paila";return await s.json()}catch(s){console.log(s)}},G=t([{name:"Resumen",to:"/reporte-ventas/order-sumary",icon:"fa-solid fa-table"},{name:"Valor ventas",to:"/reporte-ventas/valor-ventas",icon:"fa-solid fa-dollar-sign"},{name:"No. Ordenes",to:"/reporte-ventas/no-ordenes",icon:"fa-solid fa-sort"},{name:"Ticket promedio",to:"/reporte-ventas/ticket",icon:"fa-solid fa-money-bill"},{name:"Ordenes",to:"/reporte-ventas/ordenes",icon:"fa-solid fa-table"}]);t(null),oe({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),t([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const V=t(null),W=()=>{V.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},Y=()=>{V.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};y(j,s=>{s?Y():W()},{immediate:!0}),t(`${b.value} - ${D.value}`);const w=s=>{const e=new Date(s),u=e.getFullYear(),d=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0"),n=e.getHours().toString().padStart(2,"0"),v=e.getMinutes().toString().padStart(2,"0");return`${u}-${d}-${r} ${n}:${v}`};return t({}),t(),(s,e)=>{var C;const u=p("Dropdown"),d=p("MultiSelect"),r=p("InputText"),n=p("Button"),v=p("RouterLink"),X=p("RouterView"),$=p("Calendar"),Z=p("Dialog");return S(),k("div",pe,[o("div",me,[o("div",fe,[i(u,{class:"text-sm col-12 p-0",modelValue:c(a).order_status,"onUpdate:modelValue":e[0]||(e[0]=l=>c(a).order_status=l),options:z.value,placeholder:"Estado"},null,8,["modelValue","options"])]),o("div",ve,[i(d,{style:{},display:"chip",multiple:"",modelValue:c(a).selectedSites,"onUpdate:modelValue":e[1]||(e[1]=l=>c(a).selectedSites=l),optionLabel:"site_name",options:(C=c(a).sites)==null?void 0:C.filter(l=>l.show_on_web),class:"text-sm col-12 p-0",placeholder:"Sedes"},null,8,["modelValue","options"])]),o("div",ye,[i(r,{class:"col-12 p-3",onClick:e[2]||(e[2]=l=>_.value=!0),style:{height:"2.7rem"},value:c(a).dateRangeDifference.rangeName||`${w(c(a).dateRange.startDate)}  |  ${w(c(a).dateRange.endDate)}`,placeholder:"periodo"},null,8,["value"])]),o("div",_e,[i(n,{icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"},onClick:c(a).fetchSalesReport},null,8,["onClick"])])]),ge,o("div",he,[o("div",we,[o("div",xe,[(S(!0),k(le,null,ae(G.value,l=>(S(),k("div",be,[i(v,{to:l.to},{default:x(()=>[i(n,{size:"medium",style:ie([c(F).fullPath==l.to?"box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;":"",{"border-radius":"0"}]),class:"text-md px-0 pt-2 pb-4 my-0 mx-0",text:"",severity:"secondary"},{default:x(()=>[o("i",{class:H(["mr-2",l.icon])},null,2),M(" "+re(l.name),1)]),_:2},1032,["style"])]),_:2},1032,["to"])]))),256))])])]),o("div",De,[o("div",{class:H(["p-0",c(a).visibleNotifications?"col-9":"col-12"])},[i(ne,{name:"fade"},{default:x(()=>[i(X)]),_:1})],2)]),i(Z,{visible:_.value,"onUpdate:visible":e[11]||(e[11]=l=>_.value=l),modal:"",header:"Periodo",style:{width:"25rem"}},{default:x(()=>[o("div",Se,[o("div",ke,[i(n,{size:"small",severity:"help",style:{"flex-grow":"1","min-width":"max-content"},label:"Hoy",onClick:e[3]||(e[3]=l=>g(0)),class:""}),i(n,{size:"small",severity:"warning",style:{"flex-grow":"1"},label:"Ayer",onClick:e[4]||(e[4]=l=>g(1)),class:""}),i(n,{size:"small",severity:"success",style:{"flex-grow":"1"},label:"Últimos 7 días",onClick:e[5]||(e[5]=l=>g(7)),class:""}),i(n,{size:"small",severity:"danger",style:{"flex-grow":"1"},label:"Últimos 14 días",onClick:e[6]||(e[6]=l=>g(14)),class:""}),i(n,{size:"small",severity:"info",style:{"flex-grow":"1"},label:"Últimos 28 días",onClick:e[7]||(e[7]=l=>g(28)),class:""})]),o("div",Re,[Ve,o("div",$e,[i($,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=l=>m.value=l),showWeek:""},null,8,["modelValue"])])]),o("div",Ce,[Te,o("div",He,[i($,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:f.value,"onUpdate:modelValue":e[9]||(e[9]=l=>f.value=l),showWeek:""},null,8,["modelValue"])])]),o("div",Me,[o("div",je,[i(n,{label:"Aplicar",severity:"help",onClick:e[10]||(e[10]=()=>{c(a).setDateRange(m.value,f.value),_.value=!1,c(a).fetchSalesReport()})})])])])]),_:1},8,["visible"])])}}},Fe=K(ze,[["__scopeId","data-v-fc2ee0fb"]]);export{Fe as default};
