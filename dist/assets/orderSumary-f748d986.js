import{_ as N}from"./WhatsApp.svg-2bf29679.js";import{_ as I,r as V,H as $,E as B,I as M,a as _,o as h,c as y,b as t,t as o,u as l,d as s,w as a,q as c,s as R,$ as u,n,m as f,p as j,g as F,a0 as z}from"./index-f28936d7.js";/* empty css                                                                    */const i=p=>(j("data-v-5b67b641"),p=p(),F(),p),U={class:"col-12 p-0 md:p-2 m-auto",style:{}},q=i(()=>t("p",{class:"text-xl px-0 mx-0 my-3 pb-0",style:{"font-weight":"bold"}}," INDICADORES GENERALES",-1)),G={class:"grid col-12 p-0 m-0"},H={class:"col-12 lg:col-6 md:px-3 px-0 lg:pl-0"},J={class:"card mb-0 m-0"},K={class:"flex justify-content-between mb-3"},Q=i(()=>t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1)),W={class:"text-900 font-medium text-xl"},X=i(()=>t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1)),Y={style:{display:"flex","align-items":"center"}},Z=i(()=>t("span",{class:"text-500"},"Total de ordenes",-1)),P={class:"col-12 lg:col-6 md:px-3 px-0 lg:pr-0",style:{height:""}},ee={class:"card mb-0",style:{height:"100%"}},te={class:"flex justify-content-between mb-3"},se=i(()=>t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1)),ae={class:"text-900 font-medium text-xl"},oe=i(()=>t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1)),le=i(()=>t("span",{class:"text-500"},"Valor de la venta promedio",-1)),de=i(()=>t("p",{class:"text-xl px-0 mx-0 my-3 pb-0",style:{"font-weight":"bold"}}," RESUMEN DE VENTAS",-1)),re={class:"text-l px-0 my-4 text-900 font-bold",style:{"text-transform":"uppercase"}},ne=i(()=>t("template",null,null,-1)),ie=i(()=>t("p",{class:"text-l px-0 my-4 text-900 font-bold"},"REPORTE CALL CENTER ",-1)),ce=i(()=>t("template",null,null,-1)),me={key:0,class:"pr-2",style:{height:"1rem"},src:N,alt:""},_e={key:1,style:{"font-weight":"bold"},class:"pi pi-plus mr-2"},pe={key:2,class:"mr-2",style:{height:"1rem"},src:z,alt:""},he={__name:"orderSumary",setup(p){const x=V(null);function w(v){const g=new Date(v),b={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return new Intl.DateTimeFormat("es-CO",b).format(g)}const d=$();B(()=>{k()});const k=()=>{x.value={global:{value:null,matchMode:M.CONTAINS}}};return(v,g)=>{var A,L,E,D,C,O;const b=_("Button"),T=_("RouterLink"),m=_("P"),r=_("Column"),S=_("DataTable");return h(),y("div",U,[q,t("div",G,[t("div",H,[t("div",J,[t("div",K,[t("div",null,[Q,t("div",W,o(l(u)((L=(A=l(d).salesReport)==null?void 0:A.total_sales)==null?void 0:L.total_sales)||"$0"),1)]),X]),t("div",Y,[Z,s(T,{to:"/reporte-ventas/ordenes"},{default:a(()=>[s(b,{outlined:"",class:"p-2 font-medium ml-3",style:R([l(d).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:a(()=>[c(" ordenes")]),_:1},8,["style"])]),_:1}),c(),t("span",{class:"font-medium ml-3",style:R(l(d).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},o(((D=(E=l(d).salesReport)==null?void 0:E.total_sales)==null?void 0:D.total_orders)||0),5)])])]),t("div",P,[t("div",ee,[t("div",te,[t("div",null,[se,t("div",ae,o(l(u)((O=(C=l(d).salesReport)==null?void 0:C.total_sales)==null?void 0:O.average_ticket)||"$0"),1)]),oe]),le])])]),de,t("p",re,o(w(l(d).formatDate(l(d).dateRange.startDate)))+" -> "+o(w(l(d).formatDate(l(d).dateRange.endDate))),1),s(S,{loading:l(d).loading.visible,stripedRows:"",value:l(d).sumaryData.total_sales,tableStyle:"min-width: 100%  max-width:500px",rows:11,filters:x.value,responsiveLayout:"scroll",scrollable:""},{default:a(()=>[ne,s(r,{field:"order_id",header:"SEDE   ",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[s(m,{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},{default:a(()=>[c(o(e.data.site_name),1)]),_:2},1032,["class"])]),_:1}),s(r,{field:"order_id",header:"ENVIADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:3rem"},{body:a(e=>[s(m,{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},{default:a(()=>[c(o(e.data.total_orders_sent),1)]),_:2},1032,["class"])]),_:1}),s(r,{field:"order_id",header:"$ ENVIADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:2rem"},{body:a(e=>[s(m,{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},{default:a(()=>[c(o(l(u)(e.data.total_sales_sent)),1)]),_:2},1032,["class"])]),_:1}),s(r,{field:"order_id",header:"CANCELADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:3rem"},{body:a(e=>[s(m,{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},{default:a(()=>[c(o(e.data.total_orders_cancelled||0),1)]),_:2},1032,["class"])]),_:1}),s(r,{field:"order_id",header:"$ CANCELADAS",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[s(m,{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},{default:a(()=>[c(o(l(u)(e.data.total_sales_cancelled)||"$ 0.0"),1)]),_:2},1032,["class"])]),_:1})]),_:1},8,["loading","value","filters"]),ie,s(S,{stripedRows:"",value:l(d).sumaryData.creators,tableStyle:"min-width: 100%  max-width:500px",rows:11,filters:x.value,responsiveLayout:"scroll",scrollable:""},{default:a(()=>[ce,s(r,{style:{"text-transform":"uppercase"},field:"name",header:"Acesor",class:"py-0 px-0",headerStyle:"width:30rem;min-width:10rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""]),style:{display:"flex","align-items":"center"}},[e.data.name!=="pagina web"?(h(),y("img",me)):f("",!0),e.data.name=="TOTAL"?(h(),y("i",_e)):f("",!0),e.data.name=="pagina web"||e.data.name=="TOTAL"?(h(),y("img",pe)):f("",!0),c(" "+o(e.data.name),1)],2)]),_:1}),s(r,{style:{"text-transform":"uppercase"},field:"orders_generated",header:"ingresadas",class:"py-0 p-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},o(e.data.orders_sent+e.data.orders_cancelled),3)]),_:1}),s(r,{style:{"text-transform":"uppercase"},field:"orders_sent",header:"enviadas",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},o(e.data.orders_sent),3)]),_:1}),s(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"canceladas",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},o(e.data.orders_cancelled),3)]),_:1}),s(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"Transferencias",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},o(e.data.concreted_transferences||0),3)]),_:1}),s(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"Rendimiento",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:a(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},o(e.data.name!="TOTAL"?e.data.concreted_transferences+e.data.orders_sent+e.data.orders_cancelled:"--"),3)]),_:1})]),_:1},8,["value","filters"])])}}},be=I(he,[["__scopeId","data-v-5b67b641"]]);export{be as default};
