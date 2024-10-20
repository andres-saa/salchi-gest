import{_ as U,a2 as P,a as w,o,c as l,g as i,w as y,j as d,t as h,b as e,F as k,d as O,e as x,f as m,k as j,u as f,a1 as M,p as L,h as z,r as V,a3 as F,i as R,z as W,x as N,n as q,a4 as G,a5 as D}from"./index-acdf86d7.js";import{D as H}from"./OrderItem.vue_vue_type_style_index_0_scoped_3e9ef262_lang-f94a33c8.js";import{s as J}from"./siteService-e3ae066c.js";import"./ventas-bc05655a.js";import"./formatoPesos-8aa989a0.js";const Y="/images/WhatsApp.svg.webp",S=n=>(L("data-v-3e9ef262"),n=n(),z(),n),Z={style:{display:"flex","align-items":"center","justify-content":"space-between"}},K={style:{display:"flex","align-items":"center",gap:".5rem","flex-wrap":"wrap"}},Q={style:{"min-width":"max-content",color:"black"}},X={style:{width:"3rem",height:"100%"}},ee={style:{position:"relative"}},te=["src"],se={class:"text-xl",style:{display:"flex",gap:"1rem","align-items":"center"}},oe={style:{"min-width":"max-content",color:"black"}},re={key:1,style:{"font-weight":"bold"}},le=S(()=>e("b",null,"RESPONSABLE:",-1)),ae={key:4},de=S(()=>e("b",null,"OBSERVACIONES:",-1)),ie=S(()=>e("i",{class:"pi pi-whatsapp mr-2"},null,-1)),ne=S(()=>e("br",null,null,-1)),ce={key:7},_e=S(()=>e("p",{style:{color:"black"},class:"py-0 my-1"},[e("b",null,"Vendido por")],-1)),pe={key:9,class:"pr-2",style:{height:"2rem",position:"absolute",bottom:"1rem",right:".5rem"},src:Y,alt:""},ue={key:10,class:"pr-2",style:{height:"1.5rem",position:"absolute",bottom:"1rem",right:".5rem"},src:M,alt:""},he={__name:"OrderItem",props:{order:{type:Object,default:{}}},setup(n){const c=P(),a=()=>{c.setVisible("currentOrder",!0),c.setOrder(s.order)},s=n;return(v,g)=>{var r,u,E,I,t,T;const _=w("Tag"),B=w("Button"),C=w("ProgressSpinner"),p=w("P");return o(),l("div",{onClick:a,class:"col-12",style:j([f(c).currentSearchingOrder.order_id==s.order.order_id?"border:3px solid var(--primary-color)":"",{"background-color":"rgba(255, 255, 255, 0.506)",padding:".6rem",position:"relative","border-radius":"0.5rem",cursor:"pointer"}])},[i(_,{style:{"border-radius":".3rem"},class:"text mb-2",severity:s.order.user_phone=="1111111111"?"danger":"help"},{default:y(()=>{var b;return[d(h(s.order.user_phone=="1111111111"?"ES UNA PRUEBA, RELAJATE":`CLIENTE --> ${(b=s.order.user_name)==null?void 0:b.toUpperCase()}`),1)]}),_:1},8,["severity"]),e("div",Z,[e("div",K,[e("b",Q," #"+h((r=s.order)==null?void 0:r.order_id),1),(o(!0),l(k,null,O(s.order.products.slice(0,3),b=>(o(),l("div",X,[e("div",ee,[e("img",{style:{width:"100%","border-radius":"10%","background-color":"white"},src:`https://backend.salchimonster.com/read-photo-product/${b.img_identifier}/96`,alt:""},null,8,te),i(B,{severity:"danger",class:"p-0",rounded:"",label:b.quantity,style:{width:"1.5rem",position:"absolute",top:"-.5rem",right:"-.5rem","z-index":"99",height:"1.5rem","border-radius":"1rem"}},null,8,["label"])])]))),256))]),e("span",se,[e("b",oe,h((T=(t=(I=(E=(u=s.order)==null?void 0:u.latest_status_timestamp)==null?void 0:E.split("T")[1])==null?void 0:I.split(".")[0])==null?void 0:t.split(":").slice(0,2))==null?void 0:T.join(":")),1),s.order.current_status=="en preparacion"?(o(),x(C,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):m("",!0)])]),s.order.calcel_sol_state!=null?(o(),x(_,{key:0,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_state?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_state?"REVISADO":" EN REVISION..."),1)]),_:1},8,["severity"])):m("",!0),d(),s.order.calcel_sol_state?(o(),l("span",re," Y ")):m("",!0),s.order.calcel_sol_state?(o(),x(_,{key:2,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_asnwer?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_asnwer?"APROBADO":"RECHAZADO"),1)]),_:1},8,["severity"])):m("",!0),s.order.calcel_sol_state?(o(),x(p,{key:3,class:"m-0"},{default:y(()=>{var b;return[le,d(" "+h((b=s.order.cancelation_solve_responsible)==null?void 0:b.split(" ").slice(0,3).join(" ")),1)]}),_:1})):m("",!0),s.order.responsible_observation?(o(),l("span",ae,[e("p",null,[de,d(" "+h(s.order.responsible_observation||"sin observaciones"),1)])])):m("",!0),s.order.responsible_id?(o(),x(_,{key:5,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[ie,d(" TRANSFERENCIA APROBADA")]),_:1})):m("",!0),d(),ne,s.order.responsible_id?(o(),x(_,{key:6,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[d(h(s.order.name),1)]),_:1})):m("",!0),s.order.inserted_by_name?(o(),l("div",ce,[_e,i(_,{style:{"border-radius":".3rem","background-color":"black"}},{default:y(()=>[d(h(s.order.inserted_by_name)+" -> ",1)]),_:1})])):(o(),x(_,{key:8,style:{"border-radius":".3rem","background-color":"var(--primary-color)"}},{default:y(()=>[d(" DIRECTO DE WEB -> ")]),_:1})),s.order.inserted_by_name?(o(),l("img",pe)):(o(),l("img",ue))],4)}}},$=U(he,[["__scopeId","data-v-3e9ef262"]]);const A=n=>(L("data-v-75fd7160"),n=n(),z(),n),ye={class:"grid xl:mx-0 mx-0 py-0 mt-6 px-0",style:{"background-color":"white",width:"100%"}},me={class:"pb-0 p-0",style:{display:"flex","flex-wrap":"wrap",gap:"1rem","list-style":"none","overflow-x":"auto"}},fe={style:{display:"flex",gap:"1rem"}},be=["vif"],ve={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#ffad53"}},ge={style:{height:"100%",width:"100%"}},xe=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-envelope text-2xl"}),d(" RECIBIDOS")])],-1)),we={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},ke={class:"px-3 py-2"},Oe={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Se={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#8e3693"}},Ee={style:{height:"100%",width:"100%"}},Ie=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-clock text-2xl"}),d(" EN PREPARACION")])],-1)),$e={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},Ae={class:"px-3 py-2"},Be={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Ce={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#00bf7a"}},Te={class:"lg:pb-8",style:{height:"100%",width:"100%"}},Ve=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-send text-2xl"}),d(" ENVIADOS")])],-1)),Ne={style:{height:"100%","overflow-y":"auto"}},Pe={class:"px-3 py-2"},Re={key:0,class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},De={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"red"}},Ue={class:"lg:pb-8",style:{height:"100%",width:"100%"}},je=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-times text-2xl"}),d(" CANCELADOS")])],-1)),Le={style:{height:"100%","overflow-y":"auto"}},ze={class:"px-3 py-2"},Me={__name:"pedidos",setup(n){P();const c=V([]),a=P(),s=F(),v=V(""),g=V("");R(()=>{a.startOrderUpdates()}),W(()=>{a.stopOrderUpdates()}),R(async()=>{c.value=await J.getSites(),a.getTodayOrders()}),N(()=>s.site,()=>{a.getTodayOrders()}),N(v,()=>{g.value=""}),N(g,()=>{v.value=""});const _=()=>{var p;if(v.value!="")B(v.value);else if(g.value!="")C((p=g.value)==null?void 0:p.split(" ").join(""));else return},B=async p=>{const r=await D.getOrderById(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")},C=async p=>{const r=await D.getOrderByPhone(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")};return(p,r)=>{const u=w("Button"),E=w("InputText"),I=w("InputMask");return o(),l("div",ye,[e("div",{class:q([c.value.length>0?"apear":"hide","col-12 py-0 px-2 shadow-1 my-0"])},[e("nav",null,[e("ul",me,[(o(!0),l(k,null,O(c.value.filter(t=>t.show_on_web),t=>(o(),l("li",null,[i(u,{class:"p-2 mb-2",onClick:T=>f(s).site=t,style:j([f(s).site.site_id==t.site_id?"box-shadow:0 5px 0px var(--primary-color)":"",{"min-width":"max-content","border-radius":"0",color:"black"}]),text:"",label:t.site_name},null,8,["onClick","style","label"])]))),256)),e("li",fe,[i(E,{style:{},modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=t=>v.value=t),modelModifiers:{trim:!0},placeholder:"Buscar por id (sin #)"},null,8,["modelValue"]),d(),i(I,{modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=t=>g.value=t),prefix:"+57",id:"basic",mask:"999 999 9999",placeholder:"Buscar por telefono"},null,8,["modelValue"]),i(u,{onClick:r[2]||(r[2]=t=>_()),severity:"help",icon:"pi pi-search",label:"Buscar"})])])])],2),i(H),e("div",{vif:f(a).TodayOrders.filter(t=>t.current_status=="generada").length>0?"apear":"hide",class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},[e("div",ve,[e("div",ge,[xe,e("div",we,[(o(!0),l(k,null,O(f(a).TodayOrders.filter(t=>t.current_status=="generada"),t=>(o(),l("div",ke,[i($,{order:t},null,8,["order"])]))),256))])])])],8,be),e("div",Oe,[e("div",Se,[e("div",Ee,[Ie,e("div",$e,[(o(!0),l(k,null,O(f(a).TodayOrders.filter(t=>t.current_status=="en preparacion"),t=>(o(),l("div",Ae,[i($,{order:t},null,8,["order"])]))),256))])])])]),e("div",Be,[e("div",Ce,[e("div",Te,[Ve,e("div",Ne,[i(G,{name:"fade",tag:"div"},{default:y(()=>[(o(!0),l(k,null,O(f(a).TodayOrders.filter(t=>t.current_status=="enviada"),t=>(o(),l("div",Pe,[i($,{id:t.order_id,order:t},null,8,["id","order"])]))),256))]),_:1})])])])]),f(a).TodayOrders.filter(t=>t.current_status=="cancelada").length>0?(o(),l("div",Re,[e("div",De,[e("div",Ue,[je,e("div",Le,[(o(!0),l(k,null,O(f(a).TodayOrders.filter(t=>t.current_status=="cancelada"),t=>(o(),l("div",ze,[i($,{order:t},null,8,["order"])]))),256))])])])])):m("",!0)])}}},Je=U(Me,[["__scopeId","data-v-75fd7160"]]);export{Je as default};
