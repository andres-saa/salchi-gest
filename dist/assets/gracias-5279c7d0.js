import{a as $,u as L,f as _}from"./site-238dd28a.js";import{u as k}from"./orderService-1f32378c.js";import{_ as R,h as w,C as P,i as I,D as N,o as i,c as r,a as e,F as v,r as x,t as s,q as y,u as t,k as f,n as D,p as E,m as A,H as T,I as V,g as S,f as u,e as B}from"./index-dffc30d1.js";import{u as C}from"./ventas-7e92370f.js";const p=d=>(E("data-v-0509c038"),d=d(),A(),d),G={class:"43f1 43f5 md:43f0 43f12"},M={class:"sticky-summary 43f12 43f3 43f0"},O=p(()=>e("h5",null,[e("b",null,"Resumen")],-1)),H=p(()=>e("h5",null,[e("b",null,"productos")],-1)),z={class:"43f0 43f0 product-line"},F={class:"43f6 43f2 43f0 43f0"},j={class:"43f0"},q={class:"span-minwidth"},Q={style:{"font-weight":"400"}},Z={style:{"margin-right":".5rem"}},J={class:"font-weight-400"},K={class:"43f6 43f0 text-right 43f2"},W={key:0,class:"text-end"},X={key:1,class:"text-end"},Y={class:"addition-ite43finner"},ee={class:"text adicion"},te={key:0,class:"pl-2 text-sm"},se=p(()=>e("hr",{class:"43f0 43f2"},null,-1)),oe={class:"grid summary-grid"},ae=p(()=>e("div",{class:"col-6 my-0 py-0"},[e("span",null,[e("b",null,"Subtotal")])],-1)),ne={class:"col-6 my-0 text-right py-0 text-right text-end",style:{}},ie={class:"col-6 my-0 py-0"},re=p(()=>e("b",null,"Domicilio",-1)),de=[re],ce={class:"col-6 my-0 text-right py-0 text-end"},le={key:0,class:"primary-color"},_e=p(()=>e("div",{class:"col-6 my-0 py-0"},[e("span",null,[e("b",null,"Total")])],-1)),pe={key:0,class:"col-6 my-0 text-right py-0 text-end"},he={__name:"ResumenGracias",setup(d){C(),w(!1);const l=P(),c=$(),a=L(),g=k();return w({}),I(()=>{var h;((h=g.user.payment_method_option)==null?void 0:h.id)!=7&&!l.path.includes("reservas")?a.setNeighborhoodPrice():a.setNeighborhoodPriceCero()}),N(()=>c.cart.additions,()=>{update()},{deep:!0}),(h,b)=>(i(),r("div",G,[e("div",M,[O,H,(i(!0),r(v,null,x(t(c).cart,o=>(i(),r("div",{key:o.productogeneral_id},[e("div",z,[e("div",F,[e("h6",j,[e("span",q,"( "+s(o.pedido_cantidad)+" ) ",1),e("span",Q,s(o.pedido_nombre_producto),1)]),(i(!0),r(v,null,x(o.lista_productocombo,n=>(i(),r("h6",{class:"43f0 43f3",style:{"margin-left":"1rem"},key:n.producto_id},[y(" ( "+s(o.pedido_cantidad)+" ) ",1),e("b",Z,s(parseInt(n.pedido_cantidad)),1),e("span",J,s(n.pedido_nombre),1)]))),128))]),e("div",K,[o.modificadorseleccionList.length<1?(i(),r("h6",W,s(t(_)(o.pedido_precio*o.pedido_cantidad)),1)):(i(),r("h6",X,s(t(_)(o.pedido_base_price*o.pedido_cantidad)),1))])]),(i(!0),r(v,null,x(o.modificadorseleccionList,n=>(i(),r("div",{class:"addition-item",key:n},[e("div",Y,[e("span",ee,[e("span",null,[e("b",null,"- ( "+s(o.pedido_cantidad)+" ) "+s(n.modificadorseleccion_cantidad),1)]),y(" "+s(n.modificadorseleccion_nombre),1)]),n.pedido_precio>0?(i(),r("span",te,[e("b",null,s(t(_)(n.pedido_precio*n.modificadorseleccion_cantidad*o.pedido_cantidad)),1)])):f("",!0)])]))),128))]))),128)),se,e("div",oe,[ae,e("div",ne,[e("span",null,[e("b",null,s(t(_)(t(c).cartTotal)),1)])]),e("div",ie,[e("span",{style:D(t(a).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},de,4)]),e("div",ce,[t(a).location.neigborhood.delivery_price===0&&t(a).location.site.site_id!=33?(i(),r("span",le,[e("b",null,s(t(l).path.includes("reservas")?"Ir a la sede":"$0"),1)])):f("",!0),e("span",null,[e("b",null,s(t(_)(t(a).location.neigborhood.delivery_price)),1)])]),_e,t(a).location.neigborhood.delivery_price||t(a).location.neigborhood.delivery_price===0?(i(),r("div",pe,[e("span",null,[e("b",null,s(t(_)(t(c).cartTotal+t(a).location.neigborhood.delivery_price)),1)])])):f("",!0)])])]))}},ue=R(he,[["__scopeId","data-v-0509c038"]]);const m=d=>(E("data-v-a5727d19"),d=d(),A(),d),me={class:"p-2 col-12 my-6",style:{height:"auto","min-height":"90vh",padding:".5rem",display:"flex",gap:"rem","justify-content":"center","align-items":"center"}},fe={class:"shadow-7 p-4",style:{"border-radius":"0.5rem","max-width":"500px",display:"flex","flex-direction":"column",gap:".5rem","font-size":"1.3rem"}},ye={class:"text-4xl text-center mt-5",style:{"font-weight":"bold","text-align":"center"}},ge=m(()=>e("p",{class:"text-2xl text-center",style:{"font-weight":"bold","text-align":"center"}},"🔥MUCHAS GRACIAS POR TU COMPRA!🔥",-1)),be={class:"text-4xl text-center my-5",style:{"font-weight":"bold","text-transform":"uppercase","text-align":"center"}},ve=m(()=>e("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),xe=m(()=>e("br",null,null,-1)),we=m(()=>e("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",padding:"1rem",color:"white"}}," Hemos recibido tu pedido y en breve será despachado",-1)),Se=m(()=>e("div",null,null,-1)),$e={id:"factura",style:{width:"100%","text-transform":"uppercase"}},ke={style:{display:"flex","flex-direction":"column",gap:"1rem"}},Re={href:"https://www.salchimonster.com/rastrear-pedido/"},Ie=["href"],Ee={__name:"gracias",setup(d){const l=w(""),c=$(),a=k(),g=C();I(()=>{g.setLoading(!1,"enviando tu pedido"),l.value=`Hola soy *${a.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${c.last_order}*.


  *Escribo para Realizar la Transferecia*


  *Muchas Gracias* 🙏`,console.log(l.value)});const h=T(()=>{const b="https://api.whatsapp.com/send",o=new URLSearchParams({phone:"573053447255",text:l.value});return`${b}?${o.toString()}`});return V(()=>{a.user={name:"",neigborhood:"",address:"",phone_number:"",payment_method_option:"",was_reserva:!1},c.cart=[]}),(b,o)=>{const n=S("Button"),U=S("router-link");return i(),r("div",me,[e("div",fe,[e("p",ye," 🤩"+s(t(a).user.name.toUpperCase())+"🤩",1),ge,e("p",be,[ve,y(),xe,y(" #"+s(t(c).last_order),1)]),we,Se,e("div",$e,[u(ue)]),e("div",ke,[e("a",Re,[u(n,{class:"mt-3",icon:"pi ",iconPos:"right",severity:"warning",style:{"font-weight":"bold",width:"100%"},label:"PUEDES RASTREARLO AQUI"})]),t(a).user.payment_method_option.id==6?(i(),r("a",{key:0,href:h.value,target:"_blank"},[u(n,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,Ie)):f("",!0),u(U,{to:"/call-center-vender/"},{default:B(()=>[u(n,{icon:"pi pi-arrow-left",severity:"danger",outlined:"",style:{"font-weight":"bold",border:"none",width:"100%"},label:"VOLVER AL MENU"})]),_:1})])])])}}},Pe=R(Ee,[["__scopeId","data-v-a5727d19"]]);export{Pe as default};
