import{a as C,u as E}from"./site-a59100ea.js";import{u as U}from"./resumen.vue_vue_type_style_index_0_scoped_3b64403a_lang-4a11ddd6.js";import"./formatoPesos-2a38d2e7.js";import{_ as L,g as I,C as V,D as N,e as w,o,c as n,a as t,F as R,r as $,t as s,m as k,u as e,j as b,n as O,x as y,f as g,b as d,p as B,k as D,H as T,I as F}from"./index-94da6d1e.js";import{f as v}from"./formatoPesos-374ef498.js";import"./ventas-b0ca63f8.js";import"./sass.default-a5b7a582.js";const _=p=>(B("data-v-fcc1ab56"),p=p(),D(),p),z={class:"pe1 pe5 md:pe0 pe12"},G={class:"sticky-summary pe12 pe3 m-0"},H=_(()=>t("h5",null,[t("b",null,"Resumen")],-1)),M=_(()=>t("h5",null,[t("b",null,"productos")],-1)),j={class:"mb-0 pb-0 product-line"},Q={class:"pe6 py-2 mb-0 m-0"},Z={class:"m-0"},q={class:"span-minwidth"},J={style:{"font-weight":"400"}},K={style:{"margin-right":".5rem"}},W={class:"font-weight-400"},X={class:"pe6 pe0 text-right py-2"},Y={key:0,class:"text-end"},tt={key:1,class:"text-end"},et={class:"addition-item-inner"},ot={class:"text adicion"},st={key:0,class:"pl-2 text-sm"},nt=_(()=>t("div",{class:"pe12 pe0 mt-1"},null,-1)),at=_(()=>t("hr",{class:"pe0 mt-2"},null,-1)),it={class:"summary-grid"},rt=_(()=>t("div",{class:"pe6 pe0 py-0"},[t("span",null,[t("b",null,"Subtotal")])],-1)),lt={class:"pe6 pe0 text-right py-0 text-end"},ct={class:"pe6 pe0 py-0"},dt=_(()=>t("b",null,"Domicilio",-1)),pt=[dt],_t={class:"pe6 pe0 text-right py-0 text-end"},ut={key:0,class:"primary-color"},ht={key:1},mt=_(()=>t("div",{class:"pe6 pe0 py-0"},[t("span",null,[t("b",null,"Total")])],-1)),bt={key:0,class:"pe6 pe0 text-right py-0 text-end"},yt=_(()=>t("div",null,null,-1)),vt={__name:"ResumenGracias",setup(p){const x=I(!1),i=V(),u=C(),r=E();return U(),I({}),N(()=>u.cart.additions,()=>{update()},{deep:!0}),(f,h)=>{var P,A;const l=w("Button"),m=w("router-link");return o(),n("div",z,[t("div",G,[H,M,(o(!0),n(R,null,$(e(u).cart,a=>(o(),n("div",{key:a.productogeneral_id},[t("div",j,[t("div",Q,[t("h6",Z,[t("span",q,"( "+s(a.pedido_cantidad)+" ) ",1),t("span",J,s(a.pedido_nombre_producto),1)]),(o(!0),n(R,null,$(a.lista_productocombo,c=>(o(),n("h6",{class:"m-0 ml-3",style:{"margin-left":"1rem"},key:c.producto_id},[k(" ( "+s(a.pedido_cantidad)+" ) ",1),t("b",K,s(parseInt(c.pedido_cantidad)),1),t("span",W,s(c.pedido_nombre),1)]))),128))]),t("div",X,[a.modificadorseleccionList.length<1?(o(),n("h6",Y,s(e(v)(a.pedido_precio*a.pedido_cantidad)),1)):(o(),n("h6",tt,s(e(v)(a.pedido_base_price*a.pedido_cantidad)),1))])]),(o(!0),n(R,null,$(a.modificadorseleccionList,c=>(o(),n("div",{class:"addition-item",key:c},[t("div",et,[t("span",ot,[t("span",null,[t("b",null,"- ( "+s(a.pedido_cantidad)+" ) "+s(c.modificadorseleccion_cantidad/a.pedido_cantidad),1)]),k(" "+s(c.modificador_nombre),1)]),c.pedido_precio>0?(o(),n("span",st,[t("b",null,s(e(v)(c.pedido_precio*c.modificadorseleccion_cantidad)),1)])):b("",!0)])]))),128))]))),128)),nt,at,t("div",it,[rt,t("div",lt,[t("span",null,[t("b",null,s(e(v)(e(u).cartTotal)),1)])]),t("div",ct,[t("span",{style:O(e(r).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},pt,4)]),t("div",_t,[e(r).location.neigborhood.delivery_price==0?(o(),n("span",ut,[t("b",null,s(e(i).path.includes("reservas")?"Ir a la sede":"Recoger en local"),1)])):e(r).location.neigborhood.delivery_price?(o(),n("span",ht,[t("b",null,s(e(v)(e(r).location.neigborhood.delivery_price)),1)])):b("",!0)]),mt,e(r).location.neigborhood.delivery_price?(o(),n("div",bt,[t("span",null,[t("b",null,s(e(v)(e(u).cartTotal+e(r).location.neigborhood.delivery_price)),1)])])):b("",!0)]),e(i).path.includes("cart")?(o(),y(m,{key:0,to:"/call-center-vender/"},{default:g(()=>[d(l,{outlined:"",icon:"pi pi-shopping-cart",label:"Volver al menu'",class:"mt-4 button-common button-transparent button-fullwidth button-bold",severity:"danger"})]),_:1})):b("",!0),e(i).path.includes("pay")?(o(),y(m,{key:1,to:"/call-center-vender/cart/"},{default:g(()=>[d(l,{outlined:"",icon:"pi pi-shopping-cart",label:"Volver al carrito'",class:"mt-4 button-common button-transparent button-fullwidth button-bold",severity:"danger"})]),_:1})):b("",!0),yt,e(i).path.includes("cart")?(o(),y(m,{key:2,to:"/call-center-vender/pay"},{default:g(()=>[d(l,{iconPos:"right",icon:"pi pi-arrow-right",label:"Pedir",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):e(i).path.includes("reservas")?(o(),y(m,{key:3,to:"/pay"},{default:g(()=>[d(l,{onClick:h[0]||(h[0]=()=>{f.orderService.sendOrderReserva(),x.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):((P=e(r).status)==null?void 0:P.status)!=="closed"&&((A=e(r).status)!=null&&A.status)&&e(i).path=="/cart"?(o(),y(m,{key:4,to:"/pay"},{default:g(()=>[d(l,{iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})]),_:1})):e(i).path=="/call-center-vender/pay"?(o(),y(l,{key:5,onClick:h[1]||(h[1]=()=>{f.orderService.sendOrder(),x.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2 button-common button-black button-fullwidth button-bold button-no-border button-no-outline",severity:"help"})):b("",!0)])])}}},gt=L(vt,[["__scopeId","data-v-fcc1ab56"]]);const S=p=>(B("data-v-91227aed"),p=p(),D(),p),ft={class:"p-2 col-12 my-6",style:{height:"auto","min-height":"90vh",display:"flex",gap:"2rem","justify-content":"center","align-items":"center"}},xt={class:"shadow-7 p-4",style:{"border-radius":"0.5rem","max-width":"500px",display:"flex","flex-direction":"column",gap:"2rem"}},wt={class:"text-4xl text-center mt-0",style:{"font-weight":"bold"}},kt=S(()=>t("p",{class:"text-2xl text-center mb-0",style:{"font-weight":"bold"}},"🔥MUCHAS GRACIAS POR TU COMPRA!🔥",-1)),St={class:"text-4xl text-center my-0",style:{"font-weight":"bold","text-transform":"uppercase"}},Rt=S(()=>t("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),$t=S(()=>t("br",null,null,-1)),It=S(()=>t("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",padding:"1rem",color:"white"}}," Hemos recibido tu pedido y en breve será despachado",-1)),Pt={id:"factura",style:{width:"100%","text-transform":"uppercase"}},At={style:{display:"flex","flex-direction":"column",gap:"1rem"}},Ct={target:"_blank",href:"https://www.salchimonster.com/rastrear-pedido"},Et=["href"],Ut={__name:"gracias",setup(p){E();const x=I(""),i=C(),u=U(),r=T(()=>{const f="https://api.whatsapp.com/send",h=new URLSearchParams({phone:"573053447255",text:x.value});return`${f}?${h.toString()}`});return F(()=>{i.cart={products:[],total_cost:0,additions:[]}}),(f,h)=>{const l=w("Button"),m=w("router-link");return o(),n("div",ft,[t("div",xt,[t("p",wt," 🤩"+s(e(u).user.name.toUpperCase())+"🤩",1),kt,t("p",St,[Rt,k(),$t,k(" #"+s(e(i).last_order),1)]),It,t("div",Pt,[d(gt)]),t("div",At,[t("a",Ct,[d(l,{class:"mt-3",icon:"pi ",iconPos:"right",severity:"warning",style:{"font-weight":"bold",width:"100%"},label:"PUEDES RASTREARLO AQUI"})]),e(u).user.payment_method_option.id==6?(o(),n("a",{key:0,href:r.value,target:"_blank"},[d(l,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,Et)):b("",!0),d(m,{to:"/call-center-vender/"},{default:g(()=>[d(l,{icon:"pi pi-arrow-left",severity:"danger",outlined:"",style:{"font-weight":"bold",border:"none",width:"100%"},label:"VOLVER AL MENU"})]),_:1})])])])}}},Ft=L(Ut,[["__scopeId","data-v-91227aed"]]);export{Ft as default};
