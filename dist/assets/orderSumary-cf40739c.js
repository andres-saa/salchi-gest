import{_ as R}from"./WhatsApp.svg-2bf29679.js";import{_ as N,r as I,J as V,H as B,K as $,a as _,o as p,c as h,b as t,t as s,u as a,g as o,w as l,j as x,k as C,a0 as c,n,f as b,p as j,h as M,a1 as F}from"./index-0d1140a0.js";/* empty css                                                                    */const i=m=>(j("data-v-5b2d6e74"),m=m(),M(),m),z={class:"col-12 p-0 md:p-2 m-auto",style:{}},U=i(()=>t("p",{class:"text-xl px-0 mx-0 my-3 pb-0",style:{"font-weight":"bold"}}," INDICADORES GENERALES",-1)),G={class:"grid col-12 p-0 m-0"},H={class:"col-12 lg:col-6 md:px-3 px-0 lg:pl-0"},J={class:"card mb-0 m-0"},K={class:"flex justify-content-between mb-3"},q=i(()=>t("span",{class:"block text-500 font-medium mb-3"},"Venta bruta",-1)),Q={class:"text-900 font-medium text-xl"},W=i(()=>t("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-shopping-cart text-blue-500 text-xl"})],-1)),X={style:{display:"flex","align-items":"center"}},Y=i(()=>t("span",{class:"text-500"},"Total de ordenes",-1)),Z={class:"col-12 lg:col-6 md:px-3 px-0 lg:pr-0",style:{height:""}},P={class:"card mb-0",style:{height:"100%"}},ee={class:"flex justify-content-between mb-3"},te=i(()=>t("span",{class:"block text-500 font-medium mb-3"},"Ticket promedio",-1)),se={class:"text-900 font-medium text-xl"},ae=i(()=>t("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[t("i",{class:"pi pi-map-marker text-orange-500 text-xl"})],-1)),oe=i(()=>t("span",{class:"text-500"},"Valor de la venta promedio",-1)),le=i(()=>t("p",{class:"text-xl px-0 mx-0 my-3 pb-0",style:{"font-weight":"bold"}}," RESUMEN DE VENTAS",-1)),de={class:"text-l px-0 my-4 text-900 font-bold",style:{"text-transform":"uppercase"}},re=i(()=>t("template",null,null,-1)),ne=i(()=>t("p",{class:"text-l px-0 my-4 text-900 font-bold"},"REPORTE CALL CENTER ",-1)),ie=i(()=>t("template",null,null,-1)),ce={key:0,class:"pr-2",style:{height:"1rem"},src:R,alt:""},me={key:1,style:{"font-weight":"bold"},class:"pi pi-plus mr-2"},_e={key:2,class:"mr-2",style:{height:"1rem"},src:F,alt:""},pe={__name:"orderSumary",setup(m){const y=I(null);function f(w){const v=new Date(w),u={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return new Intl.DateTimeFormat("es-CO",u).format(v)}const d=V();B(()=>{k()});const k=()=>{y.value={global:{value:null,matchMode:$.CONTAINS}}};return(w,v)=>{var S,A,L,E,D,O;const u=_("Button"),g=_("RouterLink"),r=_("Column"),T=_("DataTable");return p(),h("div",z,[U,t("div",G,[t("div",H,[t("div",J,[t("div",K,[t("div",null,[q,t("div",Q,s(a(c)((A=(S=a(d).salesReport)==null?void 0:S.total_sales)==null?void 0:A.total_sales)||"$0"),1)]),W]),t("div",X,[Y,o(g,{to:"/reporte-ventas/ordenes"},{default:l(()=>[o(u,{outlined:"",class:"p-2 font-medium ml-3",style:C([a(d).order_status=="enviada"?"color:var(--blue-500);background-color:var(--blue-100)":"color:rgba(255, 99, 132, 1);background-color:var(--pink-100)",{border:"none"}])},{default:l(()=>[x(" ordenes")]),_:1},8,["style"])]),_:1}),x(),t("span",{class:"font-medium ml-3",style:C(a(d).order_status=="enviada"?"color:var(--blue-500)":"color:rgba(255, 99, 132, 1)")},s(((E=(L=a(d).salesReport)==null?void 0:L.total_sales)==null?void 0:E.total_orders)||0),5)])])]),t("div",Z,[t("div",P,[t("div",ee,[t("div",null,[te,t("div",se,s(a(c)((O=(D=a(d).salesReport)==null?void 0:D.total_sales)==null?void 0:O.average_ticket)||"$0"),1)]),ae]),oe])])]),le,t("p",de,s(f(a(d).formatDate(a(d).dateRange.startDate)))+" -> "+s(f(a(d).formatDate(a(d).dateRange.endDate))),1),o(T,{loading:a(d).loading.visible,stripedRows:"",value:a(d).sumaryData.total_sales,tableStyle:"min-width: 100%  max-width:500px",rows:11,filters:y.value,responsiveLayout:"scroll",scrollable:""},{default:l(()=>[re,o(r,{field:"order_id",header:"SEDE   ",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("p",{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},s(e.data.site_name),3)]),_:1}),o(r,{field:"order_id",header:"ENVIADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:3rem"},{body:l(e=>[t("p",{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},s(e.data.total_orders_sent),3)]),_:1}),o(r,{field:"order_id",header:"$ ENVIADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:2rem"},{body:l(e=>[t("p",{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},s(a(c)(e.data.total_sales_sent)),3)]),_:1}),o(r,{field:"order_id",header:"CANCELADAS",class:"py-0 px-0",headerStyle:"width:3rem;min-width:3rem"},{body:l(e=>[t("p",{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},s(e.data.total_orders_cancelled||0),3)]),_:1}),o(r,{field:"order_id",header:"$ CANCELADAS",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("p",{class:n(["text",e.data.site_name=="TOTAL"?"bold":""]),style:{"min-width":"max-content"}},s(a(c)(e.data.total_sales_cancelled)||"$ 0.0"),3)]),_:1})]),_:1},8,["loading","value","filters"]),ne,o(T,{stripedRows:"",value:a(d).sumaryData.creators,tableStyle:"min-width: 100%  max-width:500px",rows:11,filters:y.value,responsiveLayout:"scroll",scrollable:""},{default:l(()=>[ie,o(r,{style:{"text-transform":"uppercase"},field:"name",header:"Acesor",class:"py-0 px-0",headerStyle:"width:30rem;min-width:10rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""]),style:{display:"flex","align-items":"center"}},[e.data.name!=="pagina web"?(p(),h("img",ce)):b("",!0),e.data.name=="TOTAL"?(p(),h("i",me)):b("",!0),e.data.name=="pagina web"||e.data.name=="TOTAL"?(p(),h("img",_e)):b("",!0),x(" "+s(e.data.name),1)],2)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_sent",header:"VENTA",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(a(c)(e.data.sales)),3)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_generated",header:"ingresadas",class:"py-0 p-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(e.data.orders_sent+e.data.orders_cancelled),3)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_sent",header:"enviadas",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(e.data.orders_sent),3)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"canceladas",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(e.data.orders_cancelled),3)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"Transferencias",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(e.data.concreted_transferences||0),3)]),_:1}),o(r,{style:{"text-transform":"uppercase"},field:"orders_cancelled",header:"Rendimiento",class:"py-0 px-0",headerStyle:"width:12rem;min-width:3rem"},{body:l(e=>[t("div",{class:n(["py-1",e.data.name=="TOTAL"?"bold":""])},s(e.data.name!="TOTAL"?e.data.concreted_transferences+e.data.orders_sent+e.data.orders_cancelled:"--"),3)]),_:1})]),_:1},8,["value","filters"])])}}},xe=N(pe,[["__scopeId","data-v-5b2d6e74"]]);export{xe as default};
