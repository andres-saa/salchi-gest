import{a as E,u as R}from"./site-61ef71fc.js";import{u as C}from"./resumen.vue_vue_type_style_index_0_scoped_87f7cd7e_lang-ac973e18.js";import{f as g}from"./formatoPesos-2a38d2e7.js";import{_ as O,r as $,A as P,i as k,D as L,o as i,c as l,b as t,F as x,d as S,t as n,m,u as o,f as D,k as T,p as N,h as U,G as B,E as M,a as A,g as h,w as I}from"./index-82df3ad8.js";import"./ventas-0e139d59.js";import"./sass.default-a5b7a582.js";const y=d=>(N("data-v-bdec01a7"),d=d(),U(),d),q={class:"p-1 my-5 md:my-0 col-12"},j={style:{position:"sticky",top:"5rem","border-radius":"0.5rem","z-index":"1000"},class:"col-12 p-3 p-shadow m-0"},G=y(()=>t("h5",null,[t("b",null,"Resumen")],-1)),V=y(()=>t("h5",null,[t("b",null,"productos")],-1)),F={class:"grid mb-0 pb-0"},z={class:"col-6 py-2 mb-0 m-0"},H={class:"m-0"},Q={style:{"min-width":"3rem",width:"100%1"}},Z={class:"m-0 ml-3",style:{width:"340px"}},J={style:{"font-weight":"400"}},K={class:"col-6 my-0 text-right py-2"},W={class:"col-12 p-0 mt-1"},X={class:"mb-0"},Y={class:"mb-1 text-center"},tt={style:{display:"flex",width:"100%",gap:"1rem","justify-content":"space-between"}},et={class:"text adicion",style:{"text-transform":""}},st={key:0,class:"pl-2 text-sm"},ot=y(()=>t("hr",{class:"p-0 mt-2"},null,-1)),nt={class:"grid"},at=y(()=>t("div",{class:"col-6 my-0 py-0"},[t("span",null,[t("b",null,"Subtotal")])],-1)),rt={class:"col-6 my-0 text-right py-0"},it={class:"col-6 my-0 py-0"},lt=y(()=>t("b",null,"Domicilio",-1)),ct=[lt],dt={class:"col-6 my-0 text-right py-0"},_t={key:0,style:{color:"var(--primary-color)"}},pt={key:1},ut=y(()=>t("div",{class:"col-6 my-0 py-0"},[t("span",null,[t("b",null,"Total")])],-1)),ht={class:"col-6 my-0 text-right py-0"},mt={__name:"resumen-gracias",setup(d){$(!1);const v=P(),c=E(),s=R(),_=C(),f=$({}),p=()=>{f.value=c.cart.additions.reduce((a,e)=>{let r=e.group;return a[r]||(a[r]=[]),a[r].push(e),a},{})};return k(()=>{var a;p(),((a=_.user.payment_method_option)==null?void 0:a.id)!=7&&!v.path.includes("reservas")?s.setNeighborhoodPrice():s.setNeighborhoodPriceCero()}),L(()=>c.cart.additions,()=>{p()},{deep:!0}),(a,e)=>(i(),l("div",q,[t("div",j,[G,V,(i(!0),l(x,null,S(o(c).cart.products,r=>(i(),l("div",F,[t("div",z,[t("h6",H,[t("span",Q,[t("b",null,n(r.quantity),1)]),m(" "+n(r.product.productogeneral_descripcion),1)]),(i(!0),l(x,null,S(r.product.lista_productobase,b=>(i(),l("h6",Z,[m(" -- "),t("b",null,n(parseInt(b.productocombo_cantidad*r.quantity)),1),m(),t("span",J,n(b.producto_descripcion),1)]))),256))]),t("div",K,[t("h6",null,n(o(g)(r.total_cost)),1)])]))),256)),t("div",W,[(i(!0),l(x,null,S(f.value,(r,b)=>(i(),l("div",{class:"p-0 mb-2",key:b,style:{position:"relative","border-radius":"0.3rem"}},[t("div",X,[t("span",Y,[t("b",null,n(b),1)]),(i(!0),l(x,null,S(r,u=>(i(),l("div",{key:u.aditional_item_instance_id,style:{display:"flex",gap:"1rem","align-items":"center"}},[t("div",tt,[t("span",et,[t("span",null,[t("b",null,n(u.quantity),1)]),m(" "+n(u.name),1)]),u.price>0?(i(),l("span",st,[t("b",null,n(o(g)(u.price*u.quantity)),1)])):D("",!0)])]))),128))])]))),128))]),ot,t("div",nt,[at,t("div",rt,[t("span",null,[t("b",null,n(o(g)(o(c).cart.total_cost)),1)])]),t("div",it,[t("span",{style:T(o(s).location.neigborhood.delivery_price==0?"text-decoration: line-through;":"")},ct,4)]),t("div",dt,[o(s).location.neigborhood.delivery_price==0?(i(),l("span",_t,[t("b",null,n(o(v).path.includes("reservas")?"Ir a la sede":"Recoger en local"),1)])):(i(),l("span",pt,[t("b",null,n(o(g)(o(s).location.neigborhood.delivery_price)),1)]))]),ut,t("div",ht,[t("span",null,[t("b",null,n(o(g)(o(c).cart.total_cost+o(s).location.neigborhood.delivery_price)),1)])])])])]))}},yt=O(mt,[["__scopeId","data-v-bdec01a7"]]);const w=d=>(N("data-v-d2d45b5a"),d=d(),U(),d),bt={class:"p-2 col-12 my-6",style:{height:"auto","min-height":"90vh",display:"flex","justify-content":"center","align-items":"center"}},gt={class:"shadow-7 p-4",style:{"border-radius":"0.5rem","max-width":"500px"}},vt={class:"text-4xl text-center mt-5",style:{"font-weight":"bold"}},ft=w(()=>t("p",{class:"text-2xl text-center mb-5",style:{"font-weight":"bold"}},"🔥MUCHAS GRACIAS POR TU COMPRA!🔥",-1)),xt={class:"text-4xl text-center my-5",style:{"font-weight":"bold","text-transform":"uppercase"}},St=w(()=>t("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),wt=w(()=>t("br",null,null,-1)),$t=w(()=>t("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",color:"white"}},"Hemos recibido tu pedido y en breve será despachado",-1)),At={id:"factura",style:{width:"100%","text-transform":"uppercase"}},It={style:{display:"flex","flex-direction":"column",gap:"1rem"}},Et=["href"],Rt={__name:"gracias",setup(d){const v=R(),c=$(""),s=E(),_=C();k(()=>{var p,a;c.value=`Hola soy *${_.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${s.last_order}*.


*Escribo para Realizar la Transferecia*

*🛒 PRODUCTOS*
${s.cart.products.map(e=>`*${e.quantity}* ${e.product.product_name}`).join(`
`)}

`,s.cart.additions.length>0&&(c.value+=`*➕ ADICIONES*
${s.cart.additions.filter(e=>e.group=="ADICIONES").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),s.cart.additions.filter(e=>e.group=="CAMBIOS").length>0&&(c.value+=`*➕ CAMBIOS*
${s.cart.additions.filter(e=>e.group=="CAMBIOS").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),s.cart.additions.filter(e=>e.group=="SALSAS").length>0&&(c.value+=`*➕ SALSAS*
${s.cart.additions.filter(e=>e.group=="SALSAS").map(e=>` ${e.name}`).join(`
`)}

`),c.value+=`*📍 DIRECCIÓN*
${_.user.address} BARRIO ${(a=(p=v.location)==null?void 0:p.neigborhood)==null?void 0:a.name}

*📞 TELEFONO*
${_.user.phone_number}

*📝 NOTAS*
${s.cart.order_notes||"Sin notas"}

*💰 METODO DE PAGO*
${_.user.payment_method_option.name}

*Muchas Gracias* 🙏`,console.log(c.value)});const f=B(()=>{const p="https://api.whatsapp.com/send",a=new URLSearchParams({phone:"573053447255",text:c.value});return`${p}?${a.toString()}`});return M(()=>{s.cart={products:[],total_cost:0,additions:[]}}),(p,a)=>{const e=A("Button"),r=A("router-link");return i(),l("div",bt,[t("div",gt,[t("p",vt," 🤩"+n(o(_).user.name.toUpperCase())+"🤩",1),ft,t("p",xt,[St,m(),wt,m(" #"+n(o(s).last_order),1)]),$t,t("div",At,[h(yt)]),t("div",It,[h(r,{to:"/rastrear-pedido"},{default:I(()=>[h(e,{class:"mt-3",icon:"pi ",iconPos:"right",severity:"warning",style:{"font-weight":"bold",width:"100%"},label:"PUEDES RASTREARLO AQUI"})]),_:1}),o(_).user.payment_method_option.id==6?(i(),l("a",{key:0,href:f.value,target:"_blank"},[h(e,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,Et)):D("",!0),h(r,{to:"/call-center-vender/"},{default:I(()=>[h(e,{icon:"pi pi-arrow-left",severity:"danger",outlined:"",style:{"font-weight":"bold",border:"none",width:"100%"},label:"VOLVER AL MENU"})]),_:1})])])])}}},Pt=O(Rt,[["__scopeId","data-v-d2d45b5a"]]);export{Pt as default};