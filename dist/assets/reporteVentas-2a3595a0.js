import{_ as Y,A as K,V as Q,r as t,B as Z,C as y,j as ee,U as M,W as te,a as f,o as S,c as k,b as o,g as i,u as c,F as se,d as oe,n as j,w as R,m as le,q as z,t as ae,p as ne,h as ie,X as re}from"./index-670442b0.js";const x=h=>(ne("data-v-102a4109"),h=h(),ie(),h),ce={class:"col-12 px-0 md:px-4 mx-auto",style:{position:"relative","max-width":"1366px","margin-top":"6rem"}},de={class:"grid",style:{"background-color":"rgba(250, 250, 250, 0)"}},ue={class:"text-sm col-12 p-2 md:col-4 xl:col-6"},pe={class:"text-center col-12 p-2 md:col-3"},me={class:"col-12 md:col-1 md:p-0",style:{display:"flex","align-items":"center","justify-content":"start"}},fe=x(()=>o("p",{class:"text-3xl px-0 mx-0 my-6 pb-0",style:{"font-weight":"bold"}},[o("i",{class:"fa-solid fa-chart-simple"}),z(" Vision General")],-1)),ve={class:"contenedor mt-5",style:{position:"sticky",top:"3rem","z-index":"99"}},ye={class:"col-12 px-0 py-0 my-0 p-0 m-auto",style:{"overflow-x":"auto","background-color":"#fafafa"}},_e={class:"px-0 mx-0",style:{width:"max-content","background-color":"#fafafa",display:"flex","align-items":"center",color:"","justify-content":"start",gap:"2rem","min-width":"max-content"}},ge={style:{"background-color":""}},he=x(()=>o("div",{class:"grid col-12 p-0 m-0"},null,-1)),we={class:"grid p-0 m-0"},xe={class:"grid"},be={class:"col-12",style:{display:"flex","flex-wrap":"wrap",gap:"1rem"}},De={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},Se=x(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Desde ",-1)),ke={style:{position:"relative"}},Re={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},$e=x(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),Ce={style:{position:"relative"}},Ve={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Te={class:"col-12",style:{display:"flex","justify-content":"center"}},He={__name:"reporteVentas",setup(h){const n=K(),{isDarkTheme:E}=Q(),p=t(new Date),m=t(new Date);t([]),t(["enviada","cancelada","en preparacion"]);const F=t("enviada"),I=Z(),$=t([]),C=t([]),_=t(!1),b=t(new Date(new Date().setDate(new Date().getDate()-7))),D=t(new Date);t(Array.from({length:24},(s,e)=>e)),t([0,10,20,30,40,50]),t([0,1,2,3,4,5,6,7,8,9]);const N=t(null),A=t(null),L=t(null);t(Array.from({length:24},(s,e)=>e)),t([10,20,30,40,50]),t([0,1,2,3,4,5,6,7,8,9]);const U=t(null),B=t(null),P=t(null);t(null),t(null),y(m,s=>{s&&s.getHours()===0&&(U.value=null,B.value=null,P.value=null)},{deep:!0}),t("");function g(s){const e=new Date,u=new Date(e);u.setDate(u.getDate());const d=new Date(e);d.setDate(e.getDate()-s),d.setHours(10,0,0,0);let l;s==1?(l=new Date(e),l.setHours(4,0,0,0),l<e&&l.setDate(l.getDate()),p.value=d,m.value=l):(l=new Date(u),l.setHours(4,0,0,0),p.value=d,m.value=l),n.setDateRange(p.value,m.value),_.value=!1,n.fetchSalesReport()}ee(()=>{O().then(s=>{$.value=s,C.value=$.value.filter(e=>e.site_id!=12&&e.site_id!=13),n.fetchSalesReport()})});const J=async()=>{const s=w(b.value),e=w(D.value),u=C.value.map(r=>r.site_id).join(","),d=new URLSearchParams({site_ids:u,status:F.value,start_date:s,end_date:e}),l=`${M}/sales_report?${d.toString()}`;try{const r=await fetch(l,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const v=await r.json();re.value=v,console.log(v)}catch(r){console.error("Fetch error:",r)}};y([b,D],()=>{J()},{deep:!0}),y(p,s=>{s&&s.getHours()===0&&(N.value=null,A.value=null,L.value=null)},{deep:!0}),y(()=>n.order_status,(s,e)=>{console.log(`El estado de orden ha cambiado de ${e} a ${s}`),n.fetchSalesReport()}),y(n.selectedSites,s=>{n.setSelectedSites(s)},{deep:!0});const O=async()=>{try{const s=await fetch(`${M}/sites`);if(!s.ok)throw"paila";return await s.json()}catch(s){console.log(s)}},W=t([{name:"Resumen",to:"/reporte-ventas/order-sumary",icon:"fa-solid fa-table"},{name:"Valor ventas",to:"/reporte-ventas/valor-ventas",icon:"fa-solid fa-dollar-sign"},{name:"No. Ordenes",to:"/reporte-ventas/no-ordenes",icon:"fa-solid fa-sort"},{name:"Ticket promedio",to:"/reporte-ventas/ticket",icon:"fa-solid fa-money-bill"},{name:"Ordenes",to:"/reporte-ventas/ordenes",icon:"fa-solid fa-table"}]);t(null),te({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),t([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const V=t(null),q=()=>{V.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},G=()=>{V.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};y(E,s=>{s?G():q()},{immediate:!0}),t(`${b.value} - ${D.value}`);const w=s=>{const e=new Date(s),u=e.getFullYear(),d=(e.getMonth()+1).toString().padStart(2,"0"),l=e.getDate().toString().padStart(2,"0"),r=e.getHours().toString().padStart(2,"0"),v=e.getMinutes().toString().padStart(2,"0");return`${u}-${d}-${l} ${r}:${v}`};return t({}),t(),(s,e)=>{var H;const u=f("MultiSelect"),d=f("InputText"),l=f("Button"),r=f("RouterLink"),v=f("RouterView"),T=f("Calendar"),X=f("Dialog");return S(),k("div",ce,[o("div",de,[o("div",ue,[i(u,{style:{},display:"chip",multiple:"",modelValue:c(n).selectedSites,"onUpdate:modelValue":e[0]||(e[0]=a=>c(n).selectedSites=a),optionLabel:"site_name",options:(H=c(n).sites)==null?void 0:H.filter(a=>a.show_on_web),class:"text-sm col-12 p-0",placeholder:"Sedes"},null,8,["modelValue","options"])]),o("div",pe,[i(d,{class:"col-12 p-3",onClick:e[1]||(e[1]=a=>_.value=!0),style:{height:"2.7rem"},value:c(n).dateRangeDifference.rangeName||`${w(c(n).dateRange.startDate)}  |  ${w(c(n).dateRange.endDate)}`,placeholder:"periodo"},null,8,["value"])]),o("div",me,[i(l,{icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"},onClick:c(n).fetchSalesReport},null,8,["onClick"])])]),fe,o("div",ve,[o("div",ye,[o("div",_e,[(S(!0),k(se,null,oe(W.value,a=>(S(),k("div",ge,[i(r,{to:a.to},{default:R(()=>[i(l,{size:"medium",style:le([c(I).fullPath==a.to?"box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;":"",{"border-radius":"0"}]),class:"text-md px-0 pt-2 pb-4 my-0 mx-0",text:"",severity:"secondary"},{default:R(()=>[o("i",{class:j(["mr-2",a.icon])},null,2),z(" "+ae(a.name),1)]),_:2},1032,["style"])]),_:2},1032,["to"])]))),256))])])]),he,o("div",we,[o("div",{class:j(["p-0",c(n).visibleNotifications?"col-9":"col-12"])},[i(v)],2)]),i(X,{visible:_.value,"onUpdate:visible":e[10]||(e[10]=a=>_.value=a),modal:"",header:"Periodo",style:{width:"25rem"}},{default:R(()=>[o("div",xe,[o("div",be,[i(l,{size:"small",severity:"help",style:{"flex-grow":"1","min-width":"max-content"},label:"Hoy",onClick:e[2]||(e[2]=a=>g(0)),class:""}),i(l,{size:"small",severity:"warning",style:{"flex-grow":"1"},label:"Ayer",onClick:e[3]||(e[3]=a=>g(1)),class:""}),i(l,{size:"small",severity:"success",style:{"flex-grow":"1"},label:"Últimos 7 días",onClick:e[4]||(e[4]=a=>g(7)),class:""}),i(l,{size:"small",severity:"danger",style:{"flex-grow":"1"},label:"Últimos 14 días",onClick:e[5]||(e[5]=a=>g(14)),class:""}),i(l,{size:"small",severity:"info",style:{"flex-grow":"1"},label:"Últimos 28 días",onClick:e[6]||(e[6]=a=>g(28)),class:""})]),o("div",De,[Se,o("div",ke,[i(T,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=a=>p.value=a),showWeek:""},null,8,["modelValue"])])]),o("div",Re,[$e,o("div",Ce,[i(T,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=a=>m.value=a),showWeek:""},null,8,["modelValue"])])]),o("div",Ve,[o("div",Te,[i(l,{label:"Aplicar",severity:"help",onClick:e[9]||(e[9]=()=>{c(n).setDateRange(p.value,m.value),_.value=!1,c(n).fetchSalesReport()})})])])])]),_:1},8,["visible"])])}}},je=Y(He,[["__scopeId","data-v-102a4109"]]);export{je as default};
