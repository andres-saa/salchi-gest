import{J as P,r as m,i as B,a as i,o as S,c as j,b as t,t as c,u as e,g as a,w as d,j as v,k as u,a0 as R,n as D,P as T}from"./index-e7a37f9b.js";const z={class:"p-0 m-0"},A={class:"grid col-12 p-0 m-0"},N={class:"grid",style:{}},O={class:"col-12 lg:col-6 pr-3 lg:pl-0"},$={class:"card mb-0"},E={class:"flex justify-content-between mb-3"},L=t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1),H={class:"text-900 font-medium text-xl"},I=t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1),J={style:{display:"flex","align-items":"center"}},M=t("span",{class:"text-500"},"Total de ordenes",-1),U={class:"col-12 lg:col-6 pl-3 lg:pr-0",style:{height:""}},W={class:"card mb-0",style:{height:"100%"}},q={class:"flex justify-content-between mb-3"},F=t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1),G={class:"text-900 font-medium text-xl"},K=t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1),Q=t("span",{class:"text-500"},"Valor de la venta promedio",-1),X={class:"col-12 px-3 lg:px-3 m-auto card p-3",style:{}},Y={style:{"background-color":""}},et={__name:"RepValorVentas",setup(Z){const o=P(),_=m(!1);B(()=>{p.value=V()}),m();const p=m(),V=()=>{const r=getComputedStyle(document.documentElement),s=r.getPropertyValue("--text-color"),l=r.getPropertyValue("--text-color-secondary"),n=r.getPropertyValue("--surface-border");return{maintainAspectRatio:!0,aspectRatio:3,plugins:{legend:{labels:{color:s}}},scales:{x:{ticks:{color:l},grid:{color:n,display:!1}},y:{ticks:{color:l},grid:{color:n}}}}};return(r,s)=>{var b,h,x,y,f,k;const l=i("Button"),n=i("RouterLink"),g=i("Chart"),w=i("Dialog");return S(),j("div",z,[t("div",A,[t("div",N,[t("div",O,[t("div",$,[t("div",E,[t("div",null,[L,t("div",H,c(e(R)((h=(b=e(o).salesReport)==null?void 0:b.total_sales)==null?void 0:h.total_sales)||"$0"),1)]),I]),t("div",J,[M,a(n,{to:"/reporte-ventas/ordenes"},{default:d(()=>[a(l,{outlined:"",class:"p-2 font-medium ml-3",style:u([e(o).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:d(()=>[v(" ordenes")]),_:1},8,["style"])]),_:1}),v(),t("span",{class:"font-medium ml-3",style:u(e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(((y=(x=e(o).salesReport)==null?void 0:x.total_sales)==null?void 0:y.total_orders)||0),5)])])]),t("div",U,[t("div",W,[t("div",q,[t("div",null,[F,t("div",G,c(e(R)((k=(f=e(o).salesReport)==null?void 0:f.total_sales)==null?void 0:k.average_ticket)||"$0"),1)]),K]),Q])]),t("div",X,[t("h5",Y,[v("Historico de ordenes "),t("span",{style:u(e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},c(e(o).order_status)+"s",5)]),a(l,{class:"p-0",text:"",onClick:s[0]||(s[0]=C=>_.value=!0),size:"small",style:u([{border:"none"},e(o).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)"])},{default:d(()=>[t("i",{class:D(["text-4xl",e(T).ARROW_A]),style:{transform:"rotate(45deg)"}},null,2)]),_:1},8,["style"]),a(g,{type:"line",data:e(o).ventasCharData,options:p.value},null,8,["data","options"])])])]),a(w,{visible:_.value,"onUpdate:visible":s[1]||(s[1]=C=>_.value=C),modal:"",header:"Periodo",style:{width:"90vw"}},{default:d(()=>[a(g,{type:"line",data:e(o).ventasCharData,options:p.value},null,8,["data","options"])]),_:1},8,["visible"])])}}};export{et as default};
