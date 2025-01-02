import{_ as ie,L as re,T as de,r as s,A as ce,D as y,i as ue,U as L,V as pe,a as m,o as V,c as $,b as t,g as r,u as n,F as me,d as _e,t as D,w as x,m as k,k as C,n as F,M as U,p as ve,h as fe,W as ye}from"./index-82df3ad8.js";const u=b=>(ve("data-v-6e3d46e6"),b=b(),fe(),b),ge={class:"col-12 px-0 md:px-4 mx-auto",style:{position:"relative","max-width":"1366px","margin-top":"6rem"}},he={class:"grid",style:{"background-color":"rgba(250, 250, 250, 0)"}},xe={class:"text-sm col-12 md:col-3 p-2 xl:col-2"},be={class:"text-sm col-12 p-2 md:col-4 xl:col-6"},we={class:"text-center col-12 p-2 md:col-3"},De={class:"col-12 md:col-1 md:p-0",style:{display:"flex","align-items":"center","justify-content":"start"}},ke=u(()=>t("p",{class:"text-3xl px-0 mx-0 my-6 pb-0",style:{"font-weight":"bold"}},[t("i",{class:"fa-solid fa-chart-simple"}),k(" Vision General")],-1)),Se={class:"contenedor mt-5",style:{position:"sticky",top:"3rem","z-index":"99"}},Re={class:"col-12 px-0 py-0 my-0 p-0 m-auto",style:{"overflow-x":"auto","background-color":"#fafafa"}},Ve={class:"px-0 mx-0",style:{width:"max-content","background-color":"#fafafa",display:"flex","align-items":"center",color:"","justify-content":"start",gap:"2rem","min-width":"max-content"}},$e={style:{"background-color":""}},Ce=u(()=>t("p",{class:"text-xl px-0 mx-0 my-3 pb-0",style:{"font-weight":"bold"}}," INDICADORES GENERALES",-1)),Te={class:"grid col-12 p-0 m-0"},je={class:"col-12 lg:col-6 md:px-3 px-0 lg:pl-0"},Ee={class:"card mb-0 m-0 card-indicator"},Me={class:"flex justify-content-between mb-3"},He=u(()=>t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1)),Ie={class:"text-900 font-medium text-xl"},Ne=u(()=>t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1)),ze={style:{display:"flex","align-items":"center"}},Ae=u(()=>t("span",{class:"text-500"},"Total de ordenes",-1)),Le={class:"col-12 lg:col-6 md:px-3 px-0 lg:pr-0",style:{height:""}},Fe={class:"card mb-0 card-indicator",style:{height:"100%"}},Ue={class:"flex justify-content-between mb-3"},Pe=u(()=>t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1)),Be={class:"text-900 font-medium text-xl"},Oe=u(()=>t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1)),Ge=u(()=>t("span",{class:"text-500"},"Valor de la venta promedio",-1)),Je={class:"grid p-0 m-0"},We={class:"grid"},qe={class:"col-12",style:{display:"flex","flex-wrap":"wrap",gap:"1rem"}},Ye={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},Ke=u(()=>t("span",{style:{"font-weight":"bold"},class:"text-l"},"Desde ",-1)),Qe={style:{position:"relative"}},Xe={class:"col-12",style:{display:"flex","flex-direction":"column",position:"relative"}},Ze=u(()=>t("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),et={style:{position:"relative"}},tt={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},st={class:"col-12",style:{display:"flex","justify-content":"center"}},ot={__name:"reporteVentas",setup(b){const l=re(),{isDarkTheme:P}=de(),_=s(new Date),v=s(new Date);s([]);const B=s(["enviada","cancelada","en preparacion"]),O=s("enviada"),G=ce(),J=s([]),W=s([]),g=s(!1),S=s(new Date(new Date().setDate(new Date().getDate()-7))),R=s(new Date);s(Array.from({length:24},(o,e)=>e)),s([0,10,20,30,40,50]),s([0,1,2,3,4,5,6,7,8,9]);const q=s(null),Y=s(null),K=s(null);s(Array.from({length:24},(o,e)=>e)),s([10,20,30,40,50]),s([0,1,2,3,4,5,6,7,8,9]);const Q=s(null),X=s(null),Z=s(null);s(null),s(null),y(v,o=>{o&&o.getHours()===0&&(Q.value=null,X.value=null,Z.value=null)},{deep:!0}),s("");function h(o){const e=new Date,p=new Date(e);p.setDate(p.getDate());const c=new Date(e);c.setDate(e.getDate()-o),c.setHours(10,0,0,0);let d;o==1?(d=new Date(e),d.setHours(4,0,0,0),d<e&&d.setDate(d.getDate()),_.value=c,v.value=d):(d=new Date(p),d.setHours(4,0,0,0),_.value=c,v.value=d),l.setDateRange(_.value,v.value),g.value=!1,l.fetchSalesReport()}ue(()=>{te().then(o=>{J.value=o,l.fetchSalesReport()})});const ee=async()=>{const o=w(S.value),e=w(R.value),p=W.value.map(i=>i.site_id).join(","),c=new URLSearchParams({site_ids:p,status:O.value,start_date:o,end_date:e}),d=`${L}/sales_report?${c.toString()}`;try{const i=await fetch(d,{method:"GET",headers:{"Content-Type":"application/json"}});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const f=await i.json();ye.value=f,console.log(f)}catch(i){console.error("Fetch error:",i)}};y([S,R],()=>{ee()},{deep:!0}),y(_,o=>{o&&o.getHours()===0&&(q.value=null,Y.value=null,K.value=null)},{deep:!0}),y(()=>l.order_status,(o,e)=>{console.log(`El estado de orden ha cambiado de ${e} a ${o}`),l.fetchSalesReport()}),y(l.selectedSites,o=>{l.setSelectedSites(o)},{deep:!0});const te=async()=>{try{const o=await fetch(`${L}/sites`);if(!o.ok)throw"paila";return await o.json()}catch(o){console.log(o)}},se=s([{name:"Resumen",to:"/reporte-ventas/order-sumary",icon:"fa-solid fa-table"},{name:"Valor ventas",to:"/reporte-ventas/valor-ventas",icon:"fa-solid fa-dollar-sign"},{name:"No. Ordenes",to:"/reporte-ventas/no-ordenes",icon:"fa-solid fa-sort"},{name:"Ticket promedio",to:"/reporte-ventas/ticket",icon:"fa-solid fa-money-bill"},{name:"Ordenes",to:"/reporte-ventas/ordenes",icon:"fa-solid fa-table"}]);s(null),pe({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),s([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const T=s(null),oe=()=>{T.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},le=()=>{T.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};y(P,o=>{o?le():oe()},{immediate:!0}),s(`${S.value} - ${R.value}`);const w=o=>{const e=new Date(o),p=e.getFullYear(),c=(e.getMonth()+1).toString().padStart(2,"0"),d=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),f=e.getMinutes().toString().padStart(2,"0");return`${p}-${c}-${d} ${i}:${f}`};return s({}),s(),(o,e)=>{var E,M,H,I,N,z,A;const p=m("Dropdown"),c=m("MultiSelect"),d=m("InputText"),i=m("Button"),f=m("RouterLink"),ae=m("RouterView"),j=m("Calendar"),ne=m("Dialog");return V(),$("div",ge,[t("div",he,[t("div",xe,[r(p,{class:"text-sm col-12 p-0",modelValue:n(l).order_status,"onUpdate:modelValue":e[0]||(e[0]=a=>n(l).order_status=a),options:B.value,placeholder:"Estado"},null,8,["modelValue","options"])]),t("div",be,[r(c,{style:{},display:"chip",multiple:"",modelValue:n(l).selectedSites,"onUpdate:modelValue":e[1]||(e[1]=a=>n(l).selectedSites=a),optionLabel:"site_name",options:(E=n(l).sites)==null?void 0:E.filter(a=>a.show_on_web),class:"text-sm col-12 p-0",placeholder:"Sedes"},null,8,["modelValue","options"])]),t("div",we,[r(d,{class:"col-12 p-3",onClick:e[2]||(e[2]=a=>g.value=!0),style:{height:"2.7rem"},value:n(l).dateRangeDifference.rangeName||`${w(n(l).dateRange.startDate)}  |  ${w(n(l).dateRange.endDate)}`,placeholder:"periodo"},null,8,["value"])]),t("div",De,[r(i,{icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"},onClick:n(l).fetchSalesReport},null,8,["onClick"])])]),ke,t("div",Se,[t("div",Re,[t("div",Ve,[(V(!0),$(me,null,_e(se.value,a=>(V(),$("div",$e,[r(f,{to:a.to},{default:x(()=>[r(i,{size:"medium",style:C([n(G).fullPath==a.to?"box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;":"",{"border-radius":"0"}]),class:"text-md px-0 pt-2 pb-4 my-0 mx-0",text:"",severity:"secondary"},{default:x(()=>[t("i",{class:F(["mr-2",a.icon])},null,2),k(" "+D(a.name),1)]),_:2},1032,["style"])]),_:2},1032,["to"])]))),256))])])]),Ce,t("div",Te,[t("div",je,[t("div",Ee,[t("div",Me,[t("div",null,[He,t("div",Ie,D(n(U)((H=(M=n(l).salesReport)==null?void 0:M.total_sales)==null?void 0:H.total_sales)||"$0"),1)]),Ne]),t("div",ze,[Ae,r(f,{to:"/reporte-ventas/ordenes"},{default:x(()=>[r(i,{outlined:"",class:"p-2 font-medium ml-3",style:C([n(l).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:x(()=>[k(" ordenes")]),_:1},8,["style"])]),_:1}),k(),t("span",{class:"font-medium ml-3",style:C(n(l).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},D(((N=(I=n(l).salesReport)==null?void 0:I.total_sales)==null?void 0:N.total_orders)||0),5)])])]),t("div",Le,[t("div",Fe,[t("div",Ue,[t("div",null,[Pe,t("div",Be,D(n(U)((A=(z=n(l).salesReport)==null?void 0:z.total_sales)==null?void 0:A.average_ticket)||"$0"),1)]),Oe]),Ge])])]),t("div",Je,[t("div",{class:F(["p-0",n(l).visibleNotifications?"col-9":"col-12"])},[r(ae)],2)]),r(ne,{visible:g.value,"onUpdate:visible":e[11]||(e[11]=a=>g.value=a),modal:"",header:"Periodo",style:{width:"25rem"}},{default:x(()=>[t("div",We,[t("div",qe,[r(i,{size:"small",severity:"help",style:{"flex-grow":"1","min-width":"max-content"},label:"Hoy",onClick:e[3]||(e[3]=a=>h(0)),class:""}),r(i,{size:"small",severity:"warning",style:{"flex-grow":"1"},label:"Ayer",onClick:e[4]||(e[4]=a=>h(1)),class:""}),r(i,{size:"small",severity:"success",style:{"flex-grow":"1"},label:"Últimos 7 días",onClick:e[5]||(e[5]=a=>h(7)),class:""}),r(i,{size:"small",severity:"danger",style:{"flex-grow":"1"},label:"Últimos 14 días",onClick:e[6]||(e[6]=a=>h(14)),class:""}),r(i,{size:"small",severity:"info",style:{"flex-grow":"1"},label:"Últimos 28 días",onClick:e[7]||(e[7]=a=>h(28)),class:""})]),t("div",Ye,[Ke,t("div",Qe,[r(j,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:_.value,"onUpdate:modelValue":e[8]||(e[8]=a=>_.value=a),showWeek:""},null,8,["modelValue"])])]),t("div",Xe,[Ze,t("div",et,[r(j,{showTime:"",hourFormat:"12",style:{"min-width":"max-content",width:"100%"},modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=a=>v.value=a),showWeek:""},null,8,["modelValue"])])]),t("div",tt,[t("div",st,[r(i,{label:"Aplicar",severity:"help",onClick:e[10]||(e[10]=()=>{n(l).setDateRange(_.value,v.value),g.value=!1,n(l).fetchSalesReport()})})])])])]),_:1},8,["visible"])])}}},at=ie(ot,[["__scopeId","data-v-6e3d46e6"]]);export{at as default};