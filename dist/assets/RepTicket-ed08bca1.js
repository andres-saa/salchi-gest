import{x as P,f as p,h as B,r as c,o as S,c as D,a as t,t as i,l as e,d as a,w as d,k as h,y as _,X as R,q as T,P as j}from"./index-9a9a1d69.js";const z={class:"grid"},A={class:"grid col-12"},N={class:"col-12 lg:col-6"},O={class:"card mb-0"},$={class:"flex justify-content-between mb-3"},E=t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1),L={class:"text-900 font-medium text-xl"},q=t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),H={style:{display:"flex","align-items":"center"}},I=t("span",{class:"text-500"},"Total de ordenes",-1),M={class:"col-12 lg:col-6",style:{height:""}},U={class:"card mb-0",style:{height:"100%"}},W={class:"flex justify-content-between mb-3"},X=t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1),F={class:"text-900 font-medium text-xl"},G=t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),J=t("span",{class:"text-500"},"Valor de la venta promedio",-1),K={class:"col-12"},Q={class:"card"},Y={style:{"background-color":""}},Z={class:"card"},ot={__name:"RepTicket",setup(tt){const o=P(),u=p(!1);B(()=>{m.value=w()}),p();const m=p(),w=()=>{const r=getComputedStyle(document.documentElement),s=r.getPropertyValue("--text-color"),l=r.getPropertyValue("--text-color-secondary"),n=r.getPropertyValue("--surface-border");return{maintainAspectRatio:!0,aspectRatio:3,plugins:{legend:{labels:{color:s}}},scales:{x:{ticks:{color:l},grid:{color:n,display:!1}},y:{ticks:{color:l},grid:{color:n}}}}};return(r,s)=>{var g,b,x,y,f,k;const l=c("Button"),n=c("RouterLink"),v=c("Chart"),V=c("Dialog");return S(),D("div",z,[t("div",A,[t("div",N,[t("div",O,[t("div",$,[t("div",null,[E,t("div",L,i(e(R)((b=(g=e(o).salesReport)==null?void 0:g.total_sales)==null?void 0:b.total_sales)||"$0"),1)]),q]),t("div",H,[I,a(n,{to:"/reporte-ventas/ordenes"},{default:d(()=>[a(l,{outlined:"",class:"p-2 font-medium ml-3",style:_([e(o).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:d(()=>[h("ver ordenes")]),_:1},8,["style"])]),_:1}),h(),t("span",{class:"font-medium ml-3",style:_(e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},i(((y=(x=e(o).salesReport)==null?void 0:x.total_sales)==null?void 0:y.total_orders)||0),5)])])]),t("div",M,[t("div",U,[t("div",W,[t("div",null,[X,t("div",F,i(e(R)((k=(f=e(o).salesReport)==null?void 0:f.total_sales)==null?void 0:k.average_ticket)||"$0"),1)]),G]),J])]),t("div",K,[t("div",Q,[t("h5",Y,[h("Historico de ordenes "),t("span",{style:_(e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},i(e(o).order_status)+"s",5)]),t("div",Z,[a(l,{class:"p-0",text:"",onClick:s[0]||(s[0]=C=>u.value=!0),size:"small",style:_([{border:"none"},e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)"])},{default:d(()=>[t("i",{class:T(["text-4xl",e(j).ARROW_A]),style:{transform:"rotate(45deg)"}},null,2)]),_:1},8,["style"]),a(v,{type:"line",data:e(o).ticketsCharData,options:m.value,class:"h-30rem"},null,8,["data","options"])])])])]),a(V,{visible:u.value,"onUpdate:visible":s[1]||(s[1]=C=>u.value=C),modal:"",header:"Periodo",style:{width:"90vw",height:"max-content"}},{default:d(()=>[a(v,{type:"line",data:e(o).ticketsCharData,options:m.value,style:{height:"60vh"}},null,8,["data","options"])]),_:1},8,["visible"])])}}};export{ot as default};