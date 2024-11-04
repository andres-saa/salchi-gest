import{u as O,a as k}from"./site-fffcd1b8.js";import{u as $}from"./user-1f54ab51.js";import{_ as C,r as E,i as D,G as B,H as N,q as L,v as R,a as T,o as i,c as r,b as t,t as n,u as s,m as A,F as b,d as y,g as M,f as U,p as q,h as P}from"./index-32c82ec4.js";import{f as _}from"./formatoPesos-2a38d2e7.js";const l=h=>(q("data-v-d3acbc6d"),h=h(),P(),h),j={class:"p-2 col-12 my-3",style:{height:"auto","min-height":"90vh","background-color":"white",display:"flex","justify-content":"center","align-items":"center"}},F={class:"shadow-3 p-4",style:{"border-radius":"0.5rem","max-width":"500px"}},V={class:"text-2xl text-center mt-5",style:{"font-weight":"bold"}},G=l(()=>t("p",{class:"text-2xl text-center mb-5",style:{"font-weight":"bold"}},"🔥Bien! Este el numero de orden del cliente🔥",-1)),H={class:"text-4xl text-center my-5",style:{"font-weight":"bold","text-transform":"uppercase"}},z=l(()=>t("span",{class:"text-2xl"},"ID DEL PEDIDO",-1)),Z=l(()=>t("br",null,null,-1)),J=l(()=>t("p",{class:"text-2xl text-center my-3 p-3",style:{"border-radius":".3rem","background-color":"var(--primary-color)",color:"white"}},"La sede ha recibido el pedido y en breve será despachado",-1)),K={id:"factura",style:{width:"100%","text-transform":"uppercase"}},Q={class:"",style:{width:"auto",color:"black"}},W=l(()=>t("div",{class:"",style:{"font-weight":"bold",color:"white",margin:"0","background-color":"black","align-items":"center",display:"grid","grid-template-columns":"auto auto"}},[t("div",{style:{width:"100%"},class:"p-1"},[t("b",null," PRODUCTOS")]),t("div",{class:"p-1"},[t("p",{style:{"text-align":"end","font-weight":"bold"}},[t("b",null," TOTAL ")])])],-1)),X={style:{display:"grid","grid-template-columns":"auto auto"}},Y={class:"p-0 m-0"},tt={style:{"text-align":"end",color:"black"}},et=l(()=>t("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),ot={class:"p-1",style:{"background-color":"black","font-weight":"bold",color:"white",width:"100%",margin:"0"}},st={style:{display:"grid","grid-template-columns":"auto 20%","align-items":"center"}},nt={style:{"text-align":"end",color:"black"}},at={class:"",style:{display:"grid",color:"","margin-top":"0.5rem","grid-template-columns":"auto auto"}},lt=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold"}},[t("b",null,"Subtotal")])],-1)),it={class:""},rt={style:{"text-align":"end","font-weight":"bold",color:"black"}},ct=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold"}},[t("b",null,"Domicilio")])],-1)),dt={class:""},ut={style:{"text-align":"end","font-weight":"bold",color:"black"}},pt=l(()=>t("div",{class:""},[t("span",{style:{"font-weight":"bold",color:"black"}},[t("b",null,"Total")])],-1)),_t={class:""},ht={style:{"text-align":"end",color:"black","font-weight":"bold"}},mt=l(()=>t("div",{class:""},null,-1)),gt={style:{display:"flex","flex-direction":"column",gap:"1rem"}},bt=["href"],yt={__name:"gracias",setup(h){const g=O(),c=E(""),o=k(),d=$();D(()=>{var u,p;c.value=`Hola soy *${d.user.name.toUpperCase()}* 🤗 acabo de hacer el siguiente pedido en la página web. El número de la orden es *#${o.last_order}*.


*Escribo para Realizar la Transferecia*

*🛒 PRODUCTOS*
${o.cart.products.map(e=>`*${e.quantity}* ${e.product.product_name}`).join(`
`)}

`,o.cart.additions.length>0&&(c.value+=`*➕ ADICIONES*
${o.cart.additions.filter(e=>e.group=="ADICIONES").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),o.cart.additions.filter(e=>e.group=="CAMBIOS").length>0&&(c.value+=`*➕ CAMBIOS*
${o.cart.additions.filter(e=>e.group=="CAMBIOS").map(e=>`*${e.quantity}* ${e.name}`).join(`
`)}

`),o.cart.additions.filter(e=>e.group=="SALSAS").length>0&&(c.value+=`*➕ SALSAS*
${o.cart.additions.filter(e=>e.group=="SALSAS").map(e=>` ${e.name}`).join(`
`)}

`),c.value+=`*📍 DIRECCIÓN*
${d.user.address} BARRIO ${(p=(u=g.location)==null?void 0:u.neigborhood)==null?void 0:p.name}

*📞 TELEFONO*
${d.user.phone_number}

*📝 NOTAS*
${o.cart.order_notes||"Sin notas"}

*💰 METODO DE PAGO*
${d.user.payment_method_option.name}

*Muchas Gracias* 🙏`,console.log(c.value)});const I=B(()=>{const u="https://api.whatsapp.com/send",p=new URLSearchParams({phone:"573053447255",text:c.value});return`${u}?${p.toString()}`});return N(()=>{d.user={name:"",neigborhood:"",address:"",phone_number:"",payment_method_option:""},o.cart={products:[],total_cost:0,additions:[]}}),L(()=>{o.cart.products.length<=0&&R.push("/")}),(u,p)=>{var f,v,S,x;const e=T("Button");return i(),r("div",j,[t("div",F,[t("p",V," 🤩"+n(s(d).user.name.toUpperCase())+"🤩",1),G,t("p",H,[z,A(),Z,A(" #"+n(s(o).last_order),1)]),J,t("div",K,[t("div",Q,[W,(i(!0),r(b,null,y(s(o).cart.products,a=>(i(),r("div",null,[t("div",X,[t("p",Y,n(a.quantity)+" "+n(a.product.product_name),1),t("div",null,[t("p",tt,n(s(_)(a.total_cost)),1)])]),et]))),256)),(i(!0),r(b,null,y({ADICIONES:s(o).cart.additions.filter(a=>a.group=="ADICIONES"),SALSAS:s(o).cart.additions.filter(a=>a.group=="SALSAS"),CAMBIOS:s(o).cart.additions.filter(a=>a.group=="CAMBIOS")},(a,w)=>(i(),r("div",{key:w,style:{position:"relative","margin-top":"0.5rem"}},[t("p",ot,[t("b",null,n(w),1)]),(i(!0),r(b,null,y(a,m=>(i(),r("div",null,[t("div",st,[t("div",null,[t("p",null,n(m.quantity)+" "+n(m.name),1)]),t("div",null,[t("p",nt,n(s(_)(m.price*m.quantity)),1)])])]))),256))]))),128)),t("div",at,[lt,t("div",it,[t("p",rt,[t("b",null,n(s(_)(s(o).cart.total_cost)),1)])]),ct,t("div",dt,[t("p",ut,[t("b",null,n(s(_)((v=(f=s(g).location)==null?void 0:f.neigborhood)==null?void 0:v.delivery_price)),1)])]),pt,t("div",_t,[t("p",ht,[t("b",null,n(s(_)(((x=(S=s(g).location)==null?void 0:S.neigborhood)==null?void 0:x.delivery_price)+s(o).cart.total_cost)),1)])]),mt])])]),t("div",gt,[s(d).user.payment_method_option.id==6?(i(),r("a",{key:0,href:I.value,target:"_blank"},[M(e,{icon:"pi pi-whatsapp",severity:"danger",class:"wsp",style:{"font-weight":"bold","background-color":"#00b66c",border:"none",width:"100%"},label:"REALIZAR TRANSFERENCIA"})],8,bt)):U("",!0)])])])}}},wt=C(yt,[["__scopeId","data-v-d3acbc6d"]]);export{wt as default};
