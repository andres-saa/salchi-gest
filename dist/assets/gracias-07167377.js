import{a as I,u as R}from"./site-4b599247.js";import{u as C}from"./resumen.vue_vue_type_style_index_0_scoped_87f7cd7e_lang-dc6774f8.js";import"./formatoPesos-2a38d2e7.js";import{_ as E,g as w,C as U,h as O,D as P,o as r,c,a as t,F as f,r as S,t as n,m as b,u as o,j as k,n as L,p as D,k as N,H as T,I as B,e as A,b as y,f as M}from"./index-a97ea6dc.js";import{f as g}from"./formatoPesos-374ef498.js";import"./ventas-9f09b372.js";import"./sass.default-a5b7a582.js";const m=d=>(D("data-v-0417575a"),d=d(),N(),d),q={class:"p-1 my-0 md:my-0"},j={class:"sticky-summary col-12 p-3 m-0"},G=m(()=>t("h5",null,[t("b",null,"Resumen")],-1)),V=m(()=>t("h5",null,[t("b",null,"productos")],-1)),F={class:"col-6 p-0 py-2 mb-0 m-0"},H={class:"m-0"},z={class:"span-minwidth"},Q={class:"font-weight-400"},Z={class:"col-6 my-0 p-0 text-right py-2"},J={class:"text-end"},K={class:"col-12 p-0 mt-1"},W={class:"mb-0"},X={class:"mb-1 text-center"},Y={class:"addition-item-inner"},tt={class:"text adicion"},et={key:0,class:"pl-2 text-sm"},st=m(()=>t("hr",{class:"p-0 mt-2"},null,-1)),ot={class:"summary-grid"},nt=m(()=>t("div",{class:"col-6 my-0 py-0 p-0"},[t("span",null,[t("b",null,"Subtotal")])],-1)),at={class:"col-6 p-0 my-0 text-right py-0",style:{"text-align":"end",width:"100%"}},it={style:{}},rt={class:"col-6 my-0 py-0 p-0"},ct=m(()=>t("b",null,"Domicilio",-1)),lt=[ct],dt={class:"col-6 my-0 text-right py-0 text-end p-0",style:{"text-align":"end",width:"100%"}},pt={key:0,class:"primary-color"},_t={key:1},ut=m(()=>t("div",{class:"col-6 my-0 py-0 p-0"},[t("span",null,[t("b",null,"Total")])],-1)),ht={class:"col-6 my-0 text-right py-0 text-end p-0",style:{"text-align":"end",width:"100%"}},mt={__name:"ResumenGracias",setup(d){w(!1);const v=U(),l=I(),s=R(),p=C(),x=w({}),_=()=>{x.value=l.cart.additions.reduce((a,e)=>{let i=e.group;return a[i]||(a[i]=[]),a[i].push(e),a},{})};return O(()=>{var a;_(),((a=p.user.payment_method_option)==null?void 0:a.id)!=7&&!v.path.includes("reservas")?s.setNeighborhoodPrice():s.setNeighborhoodPriceCero()}),P(()=>l.cart.additions,()=>{_()},{deep:!0}),(a,e)=>(r(),c("div",q,[t("div",j,[G,V,(r(!0),c(f,null,S(o(l).cart.products,i=>(r(),c("div",{class:"mb-0 pb-0 product-line",key:i.product.productogeneral_id},[t("div",F,[t("h6",H,[t("span",z,[t("b",null,n(i.quantity),1)]),b(" "+n(i.product.productogeneral_descripcion),1)]),(r(!0),c(f,null,S(i.product.lista_productobase,u=>(r(),c("h6",{class:"m-0",key:u.producto_id},[b(" -- "),t("b",null,n(parseInt(u.productocombo_cantidad*i.quantity)),1),t("span",Q,n(u.producto_descripcion),1)]))),128))]),t("div",Z,[t("h6",J,n(o(g)(i.total_cost)),1)])]))),128)),t("div",K,[(r(!0),c(f,null,S(x.value,(i,u)=>(r(),c("div",{class:"p-0 mb-2 addition-group",key:u},[t("div",W,[t("span",X,[t("b",null,n(u),1)]),(r(!0),c(f,null,S(i,h=>(r(),c("div",{class:"addition-item",key:h.aditional_item_instance_id},[t("div",Y,[t("span",tt,[t("span",null,[t("b",null,n(h.quantity),1)]),b(" "+n(h.name),1)]),h.price>0?(r(),c("span",et,[t("b",null,n(o(g)(h.price*h.quantity)),1)])):k("",!0)])]))),128))])]))),128))]),st,t("div",ot,[nt,t("div",at,[t("span",it,[t("b",null,n(o(g)(o(l).cart.total_cost)),1)])]),t("div",rt,[t("span",{style:L(o(s).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},lt,4)]),t("div",dt,[o(s).location.neigborhood.delivery_price==0?(r(),c("span",pt,[t("b",null,n(o(v).path.includes("reservas")?"Ir a la sede":"Recoger en local"),1)])):(r(),c("span",_t,[t("b",null,n(o(g)(o(s).location.neigborhood.delivery_price)),1)]))]),ut,t("div",ht,[t("span",null,[t("b",null,n(o(g)(o(l).cart.total_cost+o(s).location.neigborhood.delivery_price)),1)])])])])]))}},yt=E(mt,[["__scopeId","data-v-0417575a"]]);const $=d=>(D("data-v-047022eb"),d=d(),N(),d),gt={class:"p-2 col-12 my-6",style:{height:"auto","min-height":"90vh",display:"flex",gap:"2rem","justify-content":"center","align-items":"center"}},bt={class:"shadow-7 p-4",style:{"border-radius":"0.5rem","max-width":"500px",display:"flex","flex-direction":"column",gap:"2rem"}},vt={class:"text-4xl text-center mt-0",style:{"font-weight":"bold"}},xt=$(()=>t("p",{class:"text-2xl text-center mb-0",style:{"font-weight":"bold"}},"🔥MUCHAS GRACIAS POR TU COMPRA!🔥",-1)),ft={class:"text-4xl text-center my-0",style:{"font-weight":"bold","text-transform":"uppercase"}},St=$(()=>t("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),$t=$(()=>t("br",null,null,-1)),wt=$(()=>t("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",padding:"1rem",color:"white"}}," Hemos recibido tu pedido y en breve será despachado",-1)),At={id:"factura",style:{width:"100%","text-transform":"uppercase"}},It={style:{display:"flex","flex-direction":"column",gap:"1rem"}},Rt={target:"_blank",href:"https://www.salchimonster.com/rastrear-pedido"},Ct=["href"],Et={__name:"gracias",setup(d){const v=R(),l=w(""),s=I(),p=C();O(()=>{var _,a;l.value=`Hola soy *${p.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${s.last_order}*.


*Escribo para Realizar la Transferecia*

*🛒 PRODUCTOS*
${s.cart.products.map(e=>`*${e.quantity}* ${e.product.product_name}`).join(`
`)}

`,s.cart.additions.length>0&&(l.value+=`*➕ ADICIONES*
${s.cart.additions.filter(e=>e.group=="ADICIONES").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),s.cart.additions.filter(e=>e.group=="CAMBIOS").length>0&&(l.value+=`*➕ CAMBIOS*
${s.cart.additions.filter(e=>e.group=="CAMBIOS").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),s.cart.additions.filter(e=>e.group=="SALSAS").length>0&&(l.value+=`*➕ SALSAS*
${s.cart.additions.filter(e=>e.group=="SALSAS").map(e=>` ${e.name}`).join(`
`)}

`),l.value+=`*📍 DIRECCIÓN*
${p.user.address} BARRIO ${(a=(_=v.location)==null?void 0:_.neigborhood)==null?void 0:a.name}

*📞 TELEFONO*
${p.user.phone_number}

*📝 NOTAS*
${s.cart.order_notes||"Sin notas"}

*💰 METODO DE PAGO*
${p.user.payment_method_option.name}

*Muchas Gracias* 🙏`,console.log(l.value)});const x=T(()=>{const _="https://api.whatsapp.com/send",a=new URLSearchParams({phone:"573053447255",text:l.value});return`${_}?${a.toString()}`});return B(()=>{s.cart={products:[],total_cost:0,additions:[]}}),(_,a)=>{const e=A("Button"),i=A("router-link");return r(),c("div",gt,[t("div",bt,[t("p",vt," 🤩"+n(o(p).user.name.toUpperCase())+"🤩",1),xt,t("p",ft,[St,b(),$t,b(" #"+n(o(s).last_order),1)]),wt,t("div",At,[y(yt)]),t("div",It,[t("a",Rt,[y(e,{class:"mt-3",icon:"pi ",iconPos:"right",severity:"warning",style:{"font-weight":"bold",width:"100%"},label:"PUEDES RASTREARLO AQUI"})]),o(p).user.payment_method_option.id==6?(r(),c("a",{key:0,href:x.value,target:"_blank"},[y(e,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,Ct)):k("",!0),y(i,{to:"/call-center-vender/"},{default:M(()=>[y(e,{icon:"pi pi-arrow-left",severity:"danger",outlined:"",style:{"font-weight":"bold",border:"none",width:"100%"},label:"VOLVER AL MENU"})]),_:1})])])])}}},Tt=E(Et,[["__scopeId","data-v-047022eb"]]);export{Tt as default};
