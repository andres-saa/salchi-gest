import{r as w}from"./resumen-582a8cfd.js";import{a as P,u as $,f as h}from"./formatoPesos-4dfc00f7.js";import{u as A}from"./orderService-e6b9ed81.js";import{_ as B,g as p,h as y,q as I,D as v,e as N,o as a,c as n,u as o,a as t,F as g,r as f,b as r,t as d,U as V,m as b,j as k,p as R,k as D}from"./index-b95637e8.js";import"./ventas-253150d8.js";const F="/assets/empty-cart-6210340a.jpg";const C=_=>(R("data-v-c8dc818a"),_=_(),D(),_),L={key:0,class:"cart-has-products"},M=C(()=>t("h1",{class:"cart-title text-center text-2xl my-8"},[t("b",null,"CARRITO DE COMPRAS")],-1)),T={class:"cart-grid"},U={class:"cart-items-container p8712 text-sm md:p876 p873 md:p874"},j={class:"cart-product-description-container"},E={class:"p870 m-0"},O=["src"],z={class:"cart-product-info"},G={class:"cart-product-info-inner"},H={class:"cart-product-quantity-container"},J={class:"cart-product-quantity-control p870"},K={class:"cart-product-quantity-label",readonly:""},Q={class:"p870 m-0",style:{"margin-left":"1rem"}},W={key:0,class:"mt-2",style:{"box-shadow":"0 0 1rem #00000030",width:"100%",padding:".5rem","margin-top":"1rem","border-radius":".5rem"}},X={class:"cart-additions-item"},Y={class:"cart-additions-item-container"},Z={class:"text adicion",style:{"text-transform":"capitalize"}},tt={class:"cart-addition-item-price"},et={key:0,class:""},st={class:"cart-addition-quantity-control ml-2"},it=["modelValue"],ot={key:1,class:"cart-empty-container"},at=C(()=>t("img",{style:{"border-radius":"0",width:"100%"},src:F,alt:""},null,-1)),nt=[at],ct={__name:"cart",setup(_){const i=P(),u=$(),x=p({});p({});const q=A();return p([]),y(()=>{console.log(i.cart)}),I(()=>{var c;(c=u.location.site)!=null&&c.site_id||(u.visibles.currentSite=!0)}),v(()=>i.cart.additions,()=>{},{deep:!0}),v(()=>i.visibles.addAdditionToCart,c=>{c&&(x.value={})},{deep:!0}),y(async()=>{var c;((c=q.user.payment_method_option)==null?void 0:c.productogeneral_id)!=7?u.setNeighborhoodPrice():u.setNeighborhoodPriceCero()}),(c,dt)=>{const l=N("Button");return a(),n("div",null,[o(i).cart.length>0?(a(),n("div",L,[M,t("div",T,[t("div",U,[(a(!0),n(g,null,f(o(i).cart,e=>{var m;return a(),n("div",{class:"cart-product-item p8712 py-3 p87shadow shadow-6",key:e.pedido_productoid},[t("div",null,[t("div",j,[t("span",E,d(e.pedido_nombre_producto),1)]),t("img",{class:"cart-product-img p871",src:`${o(V)}/get-image?image_url=${e.productogeneral_urlimagen}`,alt:""},null,8,O),r(l,{class:"cart-delete-product-button ml-2",onClick:s=>o(i).removeProductFromCart(e.signature),icon:"pi pi-trash",severity:"danger",rounded:""},null,8,["onClick"]),t("div",z,[t("div",G,[t("div",H,[t("div",J,[r(l,{class:"cart-quantity-btn-minus",onClick:s=>o(i).decrementProduct(e.signature),icon:"pi pi-minus",severity:"danger"},null,8,["onClick"]),t("span",K,d(e.pedido_cantidad),1),r(l,{class:"cart-quantity-btn-plus",onClick:s=>o(i).incrementProduct(e.signature),icon:"pi pi-plus",severity:"danger"},null,8,["onClick"])]),t("h5",Q,[t("b",null,d(o(h)(e.pedido_precio*e.pedido_cantidad)),1)])]),t("div",null,[((m=e==null?void 0:e.modificadorseleccionList)==null?void 0:m.length)>0?(a(),n("div",W,[(a(!0),n(g,null,f(e.modificadorseleccionList,s=>(a(),n("div",X,[t("div",Y,[t("span",Z,[b("( "+d(e.pedido_cantidad)+" ) ",1),t("span",null,[t("b",null,d(s.modificadorseleccion_cantidad),1)]),b(" "+d(s.modificadorseleccion_nombre),1)]),t("span",tt,[s.pedido_precio>0?(a(),n("span",et,[t("b",null,d(o(h)(s.pedido_precio*s.modificadorseleccion_cantidad*e.pedido_cantidad)),1)])):k("",!0),t("div",st,[r(l,{style:{"border-radius":".3rem 0 0 .3rem"},onClick:S=>o(i).decrementAdditional(e.signature,s),severity:"danger",class:"cart-addition-quantity-btn-minus",icon:"pi pi-minus"},null,8,["onClick"]),t("span",{modelValue:s.quantity,readonly:"",class:"cart-addition-quantity-label p870 text-center"},d(s.modificadorseleccion_cantidad*e.pedido_cantidad),9,it),r(l,{style:{"border-radius":"0  .3rem   .3rem 0"},onClick:S=>o(i).incrementAdditional(e.signature,s),severity:"danger",class:"cart-addition-quantity-btn-plus",icon:"pi pi-plus"},null,8,["onClick"])])])])]))),256))])):k("",!0)])])])])])}),128))]),r(w,{class:"md:p876"})])])):(a(),n("div",ot,nt))])}}},mt=B(ct,[["__scopeId","data-v-c8dc818a"]]);export{mt as default};
