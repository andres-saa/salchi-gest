import{x as P,f as p,h as B,r as c,o as S,c as D,a as e,t as i,l as t,d as a,w as d,k as h,y as _,X as R,q as j,P as N}from"./index-faf47748.js";const O={class:"grid"},T={class:"grid col-12"},z={class:"col-12 lg:col-6 m-0"},A={class:"card mb-0"},$={class:"flex justify-content-between mb-3"},E=e("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1),L={class:"text-900 font-medium text-xl"},q=e("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),H={style:{display:"flex","align-items":"center"}},I=e("span",{class:"text-500"},"Total de ordenes",-1),M={class:"col-12 lg:col-6",style:{height:""}},U={class:"card mb-0",style:{height:"100%"}},W={class:"flex justify-content-between mb-3"},X=e("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1),F={class:"text-900 font-medium text-xl"},G=e("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),J=e("span",{class:"text-500"},"Valor de la venta promedio",-1),K={class:"col-12"},Q={class:"card"},Y={style:{"background-color":""}},Z={class:"card"},oe={__name:"RepNoOrdenes",setup(ee){const o=P(),u=p(!1);B(()=>{m.value=w()}),p();const m=p(),w=()=>{const r=getComputedStyle(document.documentElement),s=r.getPropertyValue("--text-color"),l=r.getPropertyValue("--text-color-secondary"),n=r.getPropertyValue("--surface-border");return{maintainAspectRatio:!0,aspectRatio:3,plugins:{legend:{labels:{color:s}}},scales:{x:{ticks:{color:l},grid:{color:n,display:!1}},y:{ticks:{color:l},grid:{color:n}}}}};return(r,s)=>{var g,b,x,y,f,k;const l=c("Button"),n=c("RouterLink"),v=c("Chart"),V=c("Dialog");return S(),D("div",O,[e("div",T,[e("div",z,[e("div",A,[e("div",$,[e("div",null,[E,e("div",L,i(t(R)((b=(g=t(o).salesReport)==null?void 0:g.total_sales)==null?void 0:b.total_sales)||"$0"),1)]),q]),e("div",H,[I,a(n,{to:"/reporte-ventas/ordenes"},{default:d(()=>[a(l,{outlined:"",class:"p-2 font-medium ml-3",style:_([t(o).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:d(()=>[h(" ordenes")]),_:1},8,["style"])]),_:1}),h(),e("span",{class:"font-medium ml-3",style:_(t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},i(((y=(x=t(o).salesReport)==null?void 0:x.total_sales)==null?void 0:y.total_orders)||0),5)])])]),e("div",M,[e("div",U,[e("div",W,[e("div",null,[X,e("div",F,i(t(R)((k=(f=t(o).salesReport)==null?void 0:f.total_sales)==null?void 0:k.average_ticket)||"$0"),1)]),G]),J])]),e("div",K,[e("div",Q,[e("h5",Y,[h("Historico de cantidad de ordenes "),e("span",{style:_(t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},i(t(o).order_status)+"s",5)]),e("div",Z,[a(l,{class:"p-0",text:"",onClick:s[0]||(s[0]=C=>u.value=!0),size:"small",style:_([{border:"none"},t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)"])},{default:d(()=>[e("i",{class:j(["text-4xl",t(N).ARROW_A]),style:{transform:"rotate(45deg)"}},null,2)]),_:1},8,["style"]),a(v,{type:"line",data:t(o).ordersCharData,options:m.value,class:"h-30rem"},null,8,["data","options"])])])])]),a(V,{visible:u.value,"onUpdate:visible":s[1]||(s[1]=C=>u.value=C),modal:"",header:"Periodo",style:{width:"90vw",height:"max-content"}},{default:d(()=>[a(v,{type:"line",data:t(o).ordersCharData,options:m.value,style:{height:"60vh"}},null,8,["data","options"])]),_:1},8,["visible"])])}}};export{oe as default};
