import{L as P,r as p,i as B,a as i,o as S,c as D,b as e,t as c,u as t,g as a,w as d,m as h,k as _,M as R,n as j,P as N}from"./index-5708809f.js";const O={class:"grid"},T={class:"grid col-12"},z={class:"col-12 lg:col-6 m-0"},A={class:"card mb-0"},L={class:"flex justify-content-between mb-3"},$=e("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1),E={class:"text-900 font-medium text-xl"},M=e("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),H={style:{display:"flex","align-items":"center"}},I=e("span",{class:"text-500"},"Total de ordenes",-1),U={class:"col-12 lg:col-6",style:{height:""}},W={class:"card mb-0",style:{height:"100%"}},q={class:"flex justify-content-between mb-3"},F=e("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1),G={class:"text-900 font-medium text-xl"},J=e("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),K=e("span",{class:"text-500"},"Valor de la venta promedio",-1),Q={class:"col-12"},X={class:"card"},Y={style:{"background-color":""}},Z={class:"card"},oe={__name:"RepNoOrdenes",setup(ee){const o=P(),u=p(!1);B(()=>{m.value=w()}),p();const m=p(),w=()=>{const r=getComputedStyle(document.documentElement),s=r.getPropertyValue("--text-color"),l=r.getPropertyValue("--text-color-secondary"),n=r.getPropertyValue("--surface-border");return{maintainAspectRatio:!0,aspectRatio:3,plugins:{legend:{labels:{color:s}}},scales:{x:{ticks:{color:l},grid:{color:n,display:!1}},y:{ticks:{color:l},grid:{color:n}}}}};return(r,s)=>{var g,b,x,y,f,k;const l=i("Button"),n=i("RouterLink"),v=i("Chart"),V=i("Dialog");return S(),D("div",O,[e("div",T,[e("div",z,[e("div",A,[e("div",L,[e("div",null,[$,e("div",E,c(t(R)((b=(g=t(o).salesReport)==null?void 0:g.total_sales)==null?void 0:b.total_sales)||"$0"),1)]),M]),e("div",H,[I,a(n,{to:"/reporte-ventas/ordenes"},{default:d(()=>[a(l,{outlined:"",class:"p-2 font-medium ml-3",style:_([t(o).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:d(()=>[h(" ordenes")]),_:1},8,["style"])]),_:1}),h(),e("span",{class:"font-medium ml-3",style:_(t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(((y=(x=t(o).salesReport)==null?void 0:x.total_sales)==null?void 0:y.total_orders)||0),5)])])]),e("div",U,[e("div",W,[e("div",q,[e("div",null,[F,e("div",G,c(t(R)((k=(f=t(o).salesReport)==null?void 0:f.total_sales)==null?void 0:k.average_ticket)||"$0"),1)]),J]),K])]),e("div",Q,[e("div",X,[e("h5",Y,[h("Historico de cantidad de ordenes "),e("span",{style:_(t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(t(o).order_status)+"s",5)]),e("div",Z,[a(l,{class:"p-0",text:"",onClick:s[0]||(s[0]=C=>u.value=!0),size:"small",style:_([{border:"none"},t(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)"])},{default:d(()=>[e("i",{class:j(["text-4xl",t(N).ARROW_A]),style:{transform:"rotate(45deg)"}},null,2)]),_:1},8,["style"]),a(v,{type:"line",data:t(o).ordersCharData,options:m.value,class:"h-30rem"},null,8,["data","options"])])])])]),a(V,{visible:u.value,"onUpdate:visible":s[1]||(s[1]=C=>u.value=C),modal:"",header:"Periodo",style:{width:"90vw",height:"max-content"}},{default:d(()=>[a(v,{type:"line",data:t(o).ordersCharData,options:m.value,style:{height:"60vh"}},null,8,["data","options"])]),_:1},8,["visible"])])}}};export{oe as default};
