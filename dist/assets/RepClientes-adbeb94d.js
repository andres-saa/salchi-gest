import{z as C,h as w,f,r as l,o as S,c as T,a as t,t as c,l as o,d as i,w as x,k as d,v as _,U as V,X as y}from"./index-8299c8c8.js";const P={class:"grid"},j={class:"grid col-12"},B={class:"col-12 lg:col-6"},$={class:"card mb-0"},E={class:"flex justify-content-between mb-3"},L=t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1),N={class:"text-900 font-medium text-xl"},U=t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),z={style:{display:"flex","align-items":"center"}},D=t("span",{class:"text-500"},"Total de ordenes",-1),H={class:"col-12 lg:col-6"},O={class:"card mb-0"},q={class:"flex justify-content-between mb-3"},A=t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1),F={class:"text-900 font-medium text-xl"},G=t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),I=t("span",{class:"text-500"},"Valor de la venta promedio",-1),M={class:"col-12"},X={class:"card"},J={style:{"background-color":""}},K={class:"card"},Z={__name:"RepClientes",setup(Q){const s=C();w(()=>{u.value=k()}),f();const u=f();(async()=>{const r=new URLSearchParams({site_ids:"7",status:"enviada",start_date:"2024-01-01",end_date:"2024-02-08"}),n=`${V}/daily_sales?${r.toString()}`;try{const e=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const a=await e.json();return a}catch(e){console.error("Fetch error:",e)}})();const k=()=>{const r=getComputedStyle(document.documentElement),n=r.getPropertyValue("--text-color"),e=r.getPropertyValue("--text-color-secondary"),a=r.getPropertyValue("--surface-border");return{maintainAspectRatio:!0,aspectRatio:3,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:e},grid:{color:a,display:!1}},y:{ticks:{color:e},grid:{color:a}}}}};return(r,n)=>{var p,m,h,v,g,b;const e=l("Button"),a=l("RouterLink"),R=l("Chart");return S(),T("div",P,[t("div",j,[t("div",B,[t("div",$,[t("div",E,[t("div",null,[L,t("div",N,c(o(y)((m=(p=o(s).salesReport)==null?void 0:p.total_sales)==null?void 0:m.total_sales)||"$0"),1)]),U]),t("div",z,[D,i(a,{to:"/reporte-ventas/ordenes"},{default:x(()=>[i(e,{outlined:"",class:"p-2 font-medium ml-3",style:_([o(s).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:x(()=>[d("ver ordenes")]),_:1},8,["style"])]),_:1}),d(),t("span",{class:"font-medium ml-3",style:_(o(s).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(((v=(h=o(s).salesReport)==null?void 0:h.total_sales)==null?void 0:v.total_orders)||0),5)])])]),t("div",H,[t("div",O,[t("div",q,[t("div",null,[A,t("div",F,c(o(y)((b=(g=o(s).salesReport)==null?void 0:g.total_sales)==null?void 0:b.average_ticket)||"$0"),1)]),G]),I])]),t("div",M,[t("div",X,[t("h5",J,[d("Historico de ordenes "),t("span",{style:_(o(s).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(o(s).order_status)+"s",5)]),t("div",K,[i(R,{type:"line",data:o(s).ventasCharData,options:u.value,class:"h-30rem"},null,8,["data","options"])])])])])])}}};export{Z as default};
