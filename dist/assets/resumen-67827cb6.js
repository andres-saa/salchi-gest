import{f as g}from"./formatoPesos-2a38d2e7.js";import{a as z,u as F}from"./site-61ef71fc.js";import{_ as T,r as N,A as D,i as E,D as O,a as C,o,c as n,b as e,F as w,d as x,t as s,m as v,u as t,f as S,k as j,e as p,w as _,g as f,p as A,h as L}from"./index-82df3ad8.js";import{u as M,o as R}from"./resumen.vue_vue_type_style_index_0_scoped_87f7cd7e_lang-ac973e18.js";const h=k=>(A("data-v-87f7cd7e"),k=k(),L(),k),U={class:"p-1 my-5 md:my-0 col-12"},G={style:{position:"sticky",top:"5rem","border-radius":"0.5rem","z-index":"1000"},class:"col-12 p-3 p-shadow m-0"},H=h(()=>e("h5",null,[e("b",null,"Resumen")],-1)),J=h(()=>e("h5",null,[e("b",null,"productos")],-1)),K={class:"grid mb-0 pb-0"},Q={class:"col-6 py-2 mb-0 m-0"},W={class:"m-0"},X={style:{"min-width":"3rem",width:"100%1"}},Y={class:"m-0 ml-3",style:{width:"340px"}},Z={style:{"font-weight":"400"}},$={class:"col-6 my-0 text-right py-2"},ee={class:"col-12 p-0 mt-1"},te={class:"mb-0"},oe={class:"mb-1 text-center"},se={style:{display:"flex",width:"100%",gap:"1rem","justify-content":"space-between"}},ne={class:"text adicion",style:{"text-transform":""}},re={key:0,class:"pl-2 text-sm"},le=h(()=>e("hr",{class:"p-0 mt-2"},null,-1)),ae={class:"grid"},ie=h(()=>e("div",{class:"col-6 my-0 py-0"},[e("span",null,[e("b",null,"Subtotal")])],-1)),ce={class:"col-6 my-0 text-right py-0"},de={class:"col-6 my-0 py-0"},ue=h(()=>e("b",null,"Domicilio",-1)),pe=[ue],_e={class:"col-6 my-0 text-right py-0"},he={key:0,style:{color:"var(--primary-color)"}},ye={key:1},me=h(()=>e("div",{class:"col-6 my-0 py-0"},[e("span",null,[e("b",null,"Total")])],-1)),be={class:"col-6 my-0 text-right py-0"},ge={__name:"resumen",setup(k){const P=N(!1),i=D(),y=z(),r=F(),V=M(),B=N({}),I=()=>{B.value=y.cart.additions.reduce((a,c)=>{let l=c.group;return a[l]||(a[l]=[]),a[l].push(c),a},{})};return E(()=>{var a;I(),((a=V.user.payment_method_option)==null?void 0:a.id)!=7&&!i.path.includes("reservas")?r.setNeighborhoodPrice():r.setNeighborhoodPriceCero()}),O(()=>y.cart.additions,()=>{I()},{deep:!0}),(a,c)=>{const l=C("Button"),m=C("router-link"),q=C("Tag");return o(),n("div",U,[e("div",G,[H,J,(o(!0),n(w,null,x(t(y).cart.products,d=>(o(),n("div",K,[e("div",Q,[e("h6",W,[e("span",X,[e("b",null,s(d.quantity),1)]),v(" "+s(d.product.productogeneral_descripcion),1)]),(o(!0),n(w,null,x(d.product.lista_productobase,b=>(o(),n("h6",Y,[v(" -- "),e("b",null,s(parseInt(b.productocombo_cantidad*d.quantity)),1),v(),e("span",Z,s(b.producto_descripcion),1)]))),256))]),e("div",$,[e("h6",null,s(t(g)(d.total_cost)),1)])]))),256)),e("div",ee,[(o(!0),n(w,null,x(B.value,(d,b)=>(o(),n("div",{class:"p-0 mb-2",key:b,style:{position:"relative","border-radius":"0.3rem"}},[e("div",te,[e("span",oe,[e("b",null,s(b),1)]),(o(!0),n(w,null,x(d,u=>(o(),n("div",{key:u.aditional_item_instance_id,style:{display:"flex",gap:"1rem","align-items":"center"}},[e("div",se,[e("span",ne,[e("span",null,[e("b",null,s(u.quantity),1)]),v(" "+s(u.name),1)]),u.price>0?(o(),n("span",re,[e("b",null,s(t(g)(u.price*u.quantity)),1)])):S("",!0)])]))),128))])]))),128))]),le,e("div",ae,[ie,e("div",ce,[e("span",null,[e("b",null,s(t(g)(t(y).cart.total_cost)),1)])]),e("div",de,[e("span",{style:j(t(r).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},pe,4)]),e("div",_e,[t(r).location.neigborhood.delivery_price==0?(o(),n("span",he,[e("b",null,s(t(i).path.includes("reservas")?"Ir a la sede":"Recoger en local"),1)])):(o(),n("span",ye,[e("b",null,s(t(g)(t(r).location.neigborhood.delivery_price)),1)]))]),me,e("div",be,[e("span",null,[e("b",null,s(t(g)(t(y).cart.total_cost+t(r).location.neigborhood.delivery_price)),1)])])]),t(i).path.includes("cart")?(o(),p(m,{key:0,to:"/call-center-vender"},{default:_(()=>[f(l,{outlined:"",icon:"pi pi-shopping-cart",label:"Seguir comprando",class:"mt-4",severity:"danger",style:{outline:"none",width:"100%","font-weight":"bold","background-color":"rgba(0, 0, 0, 0)"}})]),_:1})):t(i).path!="/reservas"?(o(),p(m,{key:1,to:"/call-center-vender/cart"},{default:_(()=>[f(l,{outlined:"",icon:"pi pi-arrow-left",label:"Volver al carrito",class:"mt-4",severity:"danger",style:{outline:"none",width:"100%","font-weight":"bold","background-color":"rgba(0, 0, 0, 0)"}})]),_:1})):S("",!0),t(r).status=="cerrado"&&t(i).path!="/reservas"?(o(),p(q,{key:2,style:{width:"100%",height:"2.5rem"},class:"mt-2",severity:"danger"},{default:_(()=>[v(" Este Restaurante esta cerrado")]),_:1})):S("",!0),t(i).path.includes("cart")&&t(r).status!="cerrado"?(o(),p(m,{key:3,to:"/call-center-vender/pay"},{default:_(()=>[f(l,{iconPos:"right",icon:"pi pi-arrow-right",label:"Pedir",class:"mt-2",severity:"help",style:{outline:"none",width:"100%",border:"none","font-weight":"bold","background-color":"black"}})]),_:1})):t(i).path.includes("reservas")?(o(),p(m,{key:4,to:"/call-center-vender/pay"},{default:_(()=>[f(l,{onClick:c[0]||(c[0]=()=>{t(R).sendOrderReserva(),P.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2",severity:"help",style:{outline:"none",width:"100%",border:"none","font-weight":"bold","background-color":"black"}})]),_:1})):t(r).status!="cerrado"?(o(),p(m,{key:5,to:"/call-center-vender/pay"},{default:_(()=>[f(l,{onClick:c[1]||(c[1]=()=>{t(R).sendOrder(),P.value=!0}),iconPos:"right",icon:"pi pi-arrow-right",label:"Finalizar pedido",class:"mt-2",severity:"help",style:{outline:"none",width:"100%",border:"none","font-weight":"bold","background-color":"black"}})]),_:1})):S("",!0)])])}}},xe=T(ge,[["__scopeId","data-v-87f7cd7e"]]);export{xe as r};