import{f as p}from"./formatoPesos-2a38d2e7.js";import{a as F,u as z}from"./site-184baab4.js";import{_ as R,g as P,C as T,h as D,D as L,e as B,o,c as n,a as t,F as k,r as x,t as s,m as I,u as e,j as u,n as O,x as _,f as b,b as m,p as j,k as E}from"./index-fb835a1d.js";import{u as M,o as N}from"./resumen.vue_vue_type_style_index_0_scoped_45d07414_lang-fda93328.js";const d=y=>(j("data-v-45d07414"),y=y(),E(),y),U={class:"pe1 pe5 md:pe0 pe12"},q={class:"sticky-summary pe12 pe3 m-0"},A=d(()=>t("h5",null,[t("b",null,"Resumen")],-1)),G=d(()=>t("h5",null,[t("b",null,"productos")],-1)),H={class:"mb-0 pb-0 product-line"},J={class:"pe6 py-2 mb-0 m-0"},K={class:"m-0"},Q={class:"span-minwidth"},W={style:{"font-weight":"400"}},X={style:{"margin-right":".5rem"}},Y={class:"font-weight-400"},Z={class:"pe6 pe0 text-right py-2"},$={key:0,class:"text-end"},tt={key:1,class:"text-end"},et={class:"addition-item-inner"},ot={class:"text adicion"},st={key:0,class:"pl-2 text-sm"},nt=d(()=>t("div",{class:"pe12 pe0 mt-1"},null,-1)),it=d(()=>t("hr",{class:"pe0 mt-2"},null,-1)),at={class:"summary-grid"},lt=d(()=>t("div",{class:"pe6 pe0 py-0"},[t("span",null,[t("b",null,"Subtotal")])],-1)),rt={class:"pe6 pe0 text-right py-0 text-end"},dt={class:"pe6 pe0 py-0"},ct=d(()=>t("b",null,"Domicilio",-1)),pt=[ct],ut={class:"pe6 pe0 text-right py-0 text-end"},_t={key:0,class:"primary-color"},ht={key:1},bt=d(()=>t("div",{class:"pe6 pe0 py-0"},[t("span",null,[t("b",null,"Total")])],-1)),mt={key:0,class:"pe6 pe0 text-right py-0 text-end"},yt=d(()=>t("div",null,null,-1)),vt={__name:"resumen",setup(y){const w=P(!1),r=T(),v=F(),a=z(),V=M();return P({}),D(()=>{var f;((f=V.user.payment_method_option)==null?void 0:f.id)!=7&&!r.path.includes("reservas")?a.setNeighborhoodPrice():a.setNeighborhoodPriceCero()}),L(()=>v.cart.additions,()=>{update()},{deep:!0}),(f,g)=>{var S,C;const c=B("Button"),h=B("router-link");return o(),n("div",U,[t("div",q,[A,G,(o(!0),n(k,null,x(e(v).cart,i=>(o(),n("div",{key:i.productogeneral_id},[t("div",H,[t("div",J,[t("h6",K,[t("span",Q,"( "+s(i.pedido_cantidad)+" ) ",1),t("span",W,s(i.pedido_nombre_producto),1)]),(o(!0),n(k,null,x(i.lista_productocombo,l=>(o(),n("h6",{class:"m-0 ml-3",style:{"margin-left":"1rem"},key:l.producto_id},[I(" ( "+s(i.pedido_cantidad)+" ) ",1),t("b",X,s(parseInt(l.pedido_cantidad)),1),t("span",Y,s(l.pedido_nombre),1)]))),128))]),t("div",Z,[i.modificadorseleccionList.length<1?(o(),n("h6",$,s(e(p)(i.pedido_precio)),1)):(o(),n("h6",tt,s(e(p)(i.pedido_base_price*i.pedido_cantidad)),1))])]),(o(!0),n(k,null,x(i.modificadorseleccionList,l=>(o(),n("div",{class:"addition-item",key:l},[t("div",et,[t("span",ot,[t("span",null,[t("b",null,"- ( "+s(i.pedido_cantidad)+" ) "+s(l.modificadorseleccion_cantidad/i.pedido_cantidad),1)]),I(" "+s(l.modificador_nombre),1)]),l.pedido_precio>0?(o(),n("span",st,[t("b",null,s(e(p)(l.pedido_precio*l.modificadorseleccion_cantidad)),1)])):u("",!0)])]))),128))]))),128)),nt,it,t("div",at,[lt,t("div",rt,[t("span",null,[t("b",null,s(e(p)(e(v).cartTotal)),1)])]),t("div",dt,[t("span",{style:O(e(a).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},pt,4)]),t("div",ut,[e(a).location.neigborhood.delivery_price==0?(o(),n("span",_t,[t("b",null,s(e(r).path.includes("reservas")?"Ir a la sede":"Recoger en local"),1)])):e(a).location.neigborhood.delivery_price?(o(),n("span",ht,[t("b",null,s(e(p)(e(a).location.neigborhood.delivery_price)),1)])):u("",!0)]),bt,e(a).location.neigborhood.delivery_price?(o(),n("div",mt,[t("span",null,[t("b",null,s(e(p)(e(v).cartTotal+e(a).location.neigborhood.delivery_price)),1)])])):u("",!0)]),e(r).path.includes("cart")?(o(),_(h,{key:0,to:"/call-center-vender/"},{default:b(()=>[m(c,{outlined:"",icon:"pi pi-shopping-cart",label:"Volver al menu'",class:"mt-4 button-common button-transparent button-fullwidth button-bold",severity:"danger"})]),_:1})):u("",!0),e(r).path.includes("pay")?(o(),_(h,{key:1,to:"/call-center-vender/cart/"},{default:b(()=>[m(c,{outlined:"",icon:"pi pi-shopping-cart",label:"Volver al carrito'",class:"mt-4 button-common button-transparent button-fullwidth button-bold",severity:"danger"})]),_:1})):u("",!0),yt,e(r).path.includes("cart")?(o(),_(h,{key:2,to:"/call-center-vender/pay"},{default:b(()=>[m(c,{iconPos:"right",icon:"pi pi-arrow-right",label:"Pedir",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):e(r).path.includes("reservas")?(o(),_(h,{key:3,to:"/pay"},{default:b(()=>[m(c,{onClick:g[0]||(g[0]=()=>{e(N).sendOrderReserva(),w.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):((S=e(a).status)==null?void 0:S.status)!=="closed"&&((C=e(a).status)!=null&&C.status)&&e(r).path=="/cart"?(o(),_(h,{key:4,to:"/pay"},{default:b(()=>[m(c,{iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):e(r).path=="/call-center-vender/pay"?(o(),_(c,{key:5,onClick:g[1]||(g[1]=()=>{e(N).sendOrder(),w.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})):u("",!0)])])}}},wt=R(vt,[["__scopeId","data-v-45d07414"]]);export{wt as r};
