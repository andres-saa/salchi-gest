<<<<<<<< HEAD:dist/assets/pedidos-05c8b7af.js
import{_ as U,a0 as P,a as w,o,c as l,d as i,w as y,q as d,t as h,b as e,F as k,e as O,f as x,m,s as j,u as b,$ as z,p as L,g as M,r as V,a1 as F,h as R,x as q,k as N,n as W,a2 as G,a3 as D}from"./index-a1098956.js";import{D as H}from"./OrderItem.vue_vue_type_style_index_0_scoped_b09f2bb4_lang-db50fd57.js";import{_ as J}from"./WhatsApp.svg-2bf29679.js";import{s as Y}from"./siteService-87e954ef.js";import"./ventas-5d71f542.js";import"./formatoPesos-78ea101b.js";const S=n=>(L("data-v-b09f2bb4"),n=n(),M(),n),Z={style:{display:"flex","align-items":"center","justify-content":"space-between"}},K={style:{display:"flex","align-items":"center",gap:".5rem","flex-wrap":"wrap"}},Q={style:{"min-width":"max-content",color:"black"}},X={style:{width:"3rem",height:"100%"}},ee={style:{position:"relative"}},te=["src"],se={class:"text-xl",style:{display:"flex",gap:"1rem","align-items":"center"}},oe={style:{"min-width":"max-content",color:"black"}},re={key:1,style:{"font-weight":"bold"}},le=S(()=>e("b",null,"RESPONSABLE:",-1)),ae={key:4},de=S(()=>e("b",null,"OBSERVACIONES:",-1)),ie=S(()=>e("i",{class:"pi pi-whatsapp mr-2"},null,-1)),ne=S(()=>e("br",null,null,-1)),ce={key:7},_e=S(()=>e("p",{style:{color:"black"},class:"py-0 my-1"},[e("b",null,"Vendido por")],-1)),pe={key:9,class:"pr-2",style:{height:"2rem",position:"absolute",bottom:"1rem",right:".5rem"},src:J,alt:""},ue={key:10,class:"pr-2",style:{height:"1.5rem",position:"absolute",bottom:"1rem",right:".5rem"},src:z,alt:""},he={__name:"OrderItem",props:{order:{type:Object,default:{}}},setup(n){const c=P(),a=()=>{c.setVisible("currentOrder",!0),c.setOrder(s.order)},s=n;return(v,g)=>{var r,u,$,E,t,T;const _=w("Tag"),B=w("Button"),C=w("ProgressSpinner"),p=w("P");return o(),l("div",{onClick:a,class:"col-12",style:j([b(c).currentSearchingOrder.order_id==s.order.order_id?"border:3px solid var(--primary-color)":"",{"background-color":"rgba(255, 255, 255, 0.506)",padding:".6rem",position:"relative","border-radius":"0.5rem",cursor:"pointer"}])},[i(_,{style:{"border-radius":".3rem"},class:"text mb-2",severity:s.order.user_phone=="1111111111"?"danger":"help"},{default:y(()=>{var f;return[d(h(s.order.user_phone=="1111111111"?"ES UNA PRUEBA, RELAJATE":`CLIENTE --> ${(f=s.order.user_name)==null?void 0:f.toUpperCase()}`),1)]}),_:1},8,["severity"]),e("div",Z,[e("div",K,[e("b",Q," #"+h((r=s.order)==null?void 0:r.order_id),1),(o(!0),l(k,null,O(s.order.products.slice(0,3),f=>(o(),l("div",X,[e("div",ee,[e("img",{style:{width:"100%","border-radius":"10%","background-color":"white"},src:`https://backend.salchimonster.com/read-product-image/96/${f.name}`,alt:""},null,8,te),i(B,{severity:"danger",class:"p-0",rounded:"",label:f.quantity,style:{width:"1.5rem",position:"absolute",top:"-.5rem",right:"-.5rem","z-index":"99",height:"1.5rem","border-radius":"1rem"}},null,8,["label"])])]))),256))]),e("span",se,[e("b",oe,h((T=(t=(E=($=(u=s.order)==null?void 0:u.latest_status_timestamp)==null?void 0:$.split("T")[1])==null?void 0:E.split(".")[0])==null?void 0:t.split(":").slice(0,2))==null?void 0:T.join(":")),1),s.order.current_status=="en preparacion"?(o(),x(C,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):m("",!0)])]),s.order.calcel_sol_state!=null?(o(),x(_,{key:0,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_state?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_state?"REVISADO":" EN REVISION..."),1)]),_:1},8,["severity"])):m("",!0),d(),s.order.calcel_sol_state?(o(),l("span",re," Y ")):m("",!0),s.order.calcel_sol_state?(o(),x(_,{key:2,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_asnwer?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_asnwer?"APROBADO":"RECHAZADO"),1)]),_:1},8,["severity"])):m("",!0),s.order.calcel_sol_state?(o(),x(p,{key:3,class:"m-0"},{default:y(()=>{var f;return[le,d(" "+h((f=s.order.cancelation_solve_responsible)==null?void 0:f.split(" ").slice(0,3).join(" ")),1)]}),_:1})):m("",!0),s.order.responsible_observation?(o(),l("span",ae,[e("p",null,[de,d(" "+h(s.order.responsible_observation||"sin observaciones"),1)])])):m("",!0),s.order.responsible_id?(o(),x(_,{key:5,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[ie,d(" TRANSFERENCIA APROBADA")]),_:1})):m("",!0),d(),ne,s.order.responsible_id?(o(),x(_,{key:6,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[d(h(s.order.name),1)]),_:1})):m("",!0),s.order.inserted_by_name?(o(),l("div",ce,[_e,i(_,{style:{"border-radius":".3rem","background-color":"black"}},{default:y(()=>[d(h(s.order.inserted_by_name)+" -> ",1)]),_:1})])):(o(),x(_,{key:8,style:{"border-radius":".3rem","background-color":"var(--primary-color)"}},{default:y(()=>[d(" DIRECTO DE WEB -> ")]),_:1})),s.order.inserted_by_name?(o(),l("img",pe)):(o(),l("img",ue))],4)}}},I=U(he,[["__scopeId","data-v-b09f2bb4"]]);const A=n=>(L("data-v-f90a501f"),n=n(),M(),n),ye={class:"grid xl:mx-0 mx-0 py-0 mt-6 px-0",style:{"background-color":"white"}},me={class:"pb-0 p-0",style:{display:"flex","flex-wrap":"wrap",gap:"1rem","list-style":"none","overflow-x":"auto"}},be={style:{display:"flex",gap:"1rem"}},fe=["vif"],ve={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#ffad53"}},ge={style:{height:"100%",width:"100%"}},xe=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-envelope text-2xl"}),d(" RECIBIDOS")])],-1)),we={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},ke={class:"px-3 py-2"},Oe={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Se={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#8e3693"}},$e={style:{height:"100%",width:"100%"}},Ee=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-clock text-2xl"}),d(" EN PREPARACION")])],-1)),Ie={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},Ae={class:"px-3 py-2"},Be={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Ce={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#00bf7a"}},Te={class:"lg:pb-8",style:{height:"100%",width:"100%"}},Ve=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-send text-2xl"}),d(" ENVIADOS")])],-1)),Ne={style:{height:"100%","overflow-y":"auto"}},Pe={class:"px-3 py-2"},Re={key:0,class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},De={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"red"}},Ue={class:"lg:pb-8",style:{height:"100%",width:"100%"}},je=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-times text-2xl"}),d(" CANCELADOS")])],-1)),Le={style:{height:"100%","overflow-y":"auto"}},Me={class:"px-3 py-2"},ze={__name:"pedidos",setup(n){P();const c=V([]),a=P(),s=F(),v=V(""),g=V("");R(()=>{a.startOrderUpdates()}),q(()=>{a.stopOrderUpdates()}),R(async()=>{c.value=await Y.getSites(),a.getTodayOrders()}),N(()=>s.site,()=>{a.getTodayOrders()}),N(v,()=>{g.value=""}),N(g,()=>{v.value=""});const _=()=>{var p;if(v.value!="")B(v.value);else if(g.value!="")C((p=g.value)==null?void 0:p.split(" ").join(""));else return},B=async p=>{const r=await D.getOrderById(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")},C=async p=>{const r=await D.getOrderByPhone(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")};return(p,r)=>{const u=w("Button"),$=w("InputText"),E=w("InputMask");return o(),l("div",ye,[e("div",{class:W([c.value.length>0?"apear":"hide","col-12 py-0 px-2 shadow-1 my-0"])},[e("nav",null,[e("ul",me,[(o(!0),l(k,null,O(c.value.filter(t=>t.show_on_web),t=>(o(),l("li",null,[i(u,{class:"p-2 mb-2",onClick:T=>b(s).site=t,style:j([b(s).site.site_id==t.site_id?"box-shadow:0 5px 0px var(--primary-color)":"",{"min-width":"max-content","border-radius":"0",color:"black"}]),text:"",label:t.site_name},null,8,["onClick","style","label"])]))),256)),e("li",be,[i($,{style:{},modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=t=>v.value=t),modelModifiers:{trim:!0},placeholder:"Buscar por id (sin #)"},null,8,["modelValue"]),d(),i(E,{modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=t=>g.value=t),prefix:"+57",id:"basic",mask:"999 999 9999",placeholder:"Buscar por telefono"},null,8,["modelValue"]),i(u,{onClick:r[2]||(r[2]=t=>_()),severity:"help",icon:"pi pi-search",label:"Buscar"})])])])],2),i(H),e("div",{vif:b(a).TodayOrders.filter(t=>t.current_status=="generada").length>0?"apear":"hide",class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},[e("div",ve,[e("div",ge,[xe,e("div",we,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="generada"),t=>(o(),l("div",ke,[i(I,{order:t},null,8,["order"])]))),256))])])])],8,fe),e("div",Oe,[e("div",Se,[e("div",$e,[Ee,e("div",Ie,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="en preparacion"),t=>(o(),l("div",Ae,[i(I,{order:t},null,8,["order"])]))),256))])])])]),e("div",Be,[e("div",Ce,[e("div",Te,[Ve,e("div",Ne,[i(G,{name:"fade",tag:"div"},{default:y(()=>[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="enviada"),t=>(o(),l("div",Pe,[i(I,{id:t.order_id,order:t},null,8,["id","order"])]))),256))]),_:1})])])])]),b(a).TodayOrders.filter(t=>t.current_status=="cancelada").length>0?(o(),l("div",Re,[e("div",De,[e("div",Ue,[je,e("div",Le,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="cancelada"),t=>(o(),l("div",Me,[i(I,{order:t},null,8,["order"])]))),256))])])])])):m("",!0)])}}},Ye=U(ze,[["__scopeId","data-v-f90a501f"]]);export{Ye as default};
========
import{_ as U,a0 as P,a as w,o,c as l,d as i,w as y,q as d,t as h,b as e,F as k,e as O,f as x,m,s as j,u as b,$ as z,p as L,g as M,r as V,a1 as F,h as R,x as q,k as N,n as W,a2 as G,a3 as D}from"./index-1a945cfc.js";import{D as H}from"./OrderItem.vue_vue_type_style_index_0_scoped_b09f2bb4_lang-21100c69.js";import{_ as J}from"./WhatsApp.svg-2bf29679.js";import{s as Y}from"./siteService-6d9bcdae.js";import"./ventas-1c07b28d.js";import"./formatoPesos-78ea101b.js";const S=n=>(L("data-v-b09f2bb4"),n=n(),M(),n),Z={style:{display:"flex","align-items":"center","justify-content":"space-between"}},K={style:{display:"flex","align-items":"center",gap:".5rem","flex-wrap":"wrap"}},Q={style:{"min-width":"max-content",color:"black"}},X={style:{width:"3rem",height:"100%"}},ee={style:{position:"relative"}},te=["src"],se={class:"text-xl",style:{display:"flex",gap:"1rem","align-items":"center"}},oe={style:{"min-width":"max-content",color:"black"}},re={key:1,style:{"font-weight":"bold"}},le=S(()=>e("b",null,"RESPONSABLE:",-1)),ae={key:4},de=S(()=>e("b",null,"OBSERVACIONES:",-1)),ie=S(()=>e("i",{class:"pi pi-whatsapp mr-2"},null,-1)),ne=S(()=>e("br",null,null,-1)),ce={key:7},_e=S(()=>e("p",{style:{color:"black"},class:"py-0 my-1"},[e("b",null,"Vendido por")],-1)),pe={key:9,class:"pr-2",style:{height:"2rem",position:"absolute",bottom:"1rem",right:".5rem"},src:J,alt:""},ue={key:10,class:"pr-2",style:{height:"1.5rem",position:"absolute",bottom:"1rem",right:".5rem"},src:z,alt:""},he={__name:"OrderItem",props:{order:{type:Object,default:{}}},setup(n){const c=P(),a=()=>{c.setVisible("currentOrder",!0),c.setOrder(s.order)},s=n;return(v,g)=>{var r,u,$,E,t,T;const _=w("Tag"),B=w("Button"),C=w("ProgressSpinner"),p=w("P");return o(),l("div",{onClick:a,class:"col-12",style:j([b(c).currentSearchingOrder.order_id==s.order.order_id?"border:3px solid var(--primary-color)":"",{"background-color":"rgba(255, 255, 255, 0.506)",padding:".6rem",position:"relative","border-radius":"0.5rem",cursor:"pointer"}])},[i(_,{style:{"border-radius":".3rem"},class:"text mb-2",severity:s.order.user_phone=="1111111111"?"danger":"help"},{default:y(()=>{var f;return[d(h(s.order.user_phone=="1111111111"?"ES UNA PRUEBA, RELAJATE":`CLIENTE --> ${(f=s.order.user_name)==null?void 0:f.toUpperCase()}`),1)]}),_:1},8,["severity"]),e("div",Z,[e("div",K,[e("b",Q," #"+h((r=s.order)==null?void 0:r.order_id),1),(o(!0),l(k,null,O(s.order.products.slice(0,3),f=>(o(),l("div",X,[e("div",ee,[e("img",{style:{width:"100%","border-radius":"10%","background-color":"white"},src:`https://backend.salchimonster.com/read-product-image/96/${f.name}`,alt:""},null,8,te),i(B,{severity:"danger",class:"p-0",rounded:"",label:f.quantity,style:{width:"1.5rem",position:"absolute",top:"-.5rem",right:"-.5rem","z-index":"99",height:"1.5rem","border-radius":"1rem"}},null,8,["label"])])]))),256))]),e("span",se,[e("b",oe,h((T=(t=(E=($=(u=s.order)==null?void 0:u.latest_status_timestamp)==null?void 0:$.split("T")[1])==null?void 0:E.split(".")[0])==null?void 0:t.split(":").slice(0,2))==null?void 0:T.join(":")),1),s.order.current_status=="en preparacion"?(o(),x(C,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):m("",!0)])]),s.order.calcel_sol_state!=null?(o(),x(_,{key:0,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_state?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_state?"REVISADO":" EN REVISION..."),1)]),_:1},8,["severity"])):m("",!0),d(),s.order.calcel_sol_state?(o(),l("span",re," Y ")):m("",!0),s.order.calcel_sol_state?(o(),x(_,{key:2,style:{"border-radius":".3rem"},severity:s.order.calcel_sol_asnwer?"success":"danger"},{default:y(()=>[d(h(s.order.calcel_sol_asnwer?"APROBADO":"RECHAZADO"),1)]),_:1},8,["severity"])):m("",!0),s.order.calcel_sol_state?(o(),x(p,{key:3,class:"m-0"},{default:y(()=>{var f;return[le,d(" "+h((f=s.order.cancelation_solve_responsible)==null?void 0:f.split(" ").slice(0,3).join(" ")),1)]}),_:1})):m("",!0),s.order.responsible_observation?(o(),l("span",ae,[e("p",null,[de,d(" "+h(s.order.responsible_observation||"sin observaciones"),1)])])):m("",!0),s.order.responsible_id?(o(),x(_,{key:5,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[ie,d(" TRANSFERENCIA APROBADA")]),_:1})):m("",!0),d(),ne,s.order.responsible_id?(o(),x(_,{key:6,style:{"border-radius":".3rem"},severity:"success"},{default:y(()=>[d(h(s.order.name),1)]),_:1})):m("",!0),s.order.inserted_by_name?(o(),l("div",ce,[_e,i(_,{style:{"border-radius":".3rem","background-color":"black"}},{default:y(()=>[d(h(s.order.inserted_by_name)+" -> ",1)]),_:1})])):(o(),x(_,{key:8,style:{"border-radius":".3rem","background-color":"var(--primary-color)"}},{default:y(()=>[d(" DIRECTO DE WEB -> ")]),_:1})),s.order.inserted_by_name?(o(),l("img",pe)):(o(),l("img",ue))],4)}}},I=U(he,[["__scopeId","data-v-b09f2bb4"]]);const A=n=>(L("data-v-f90a501f"),n=n(),M(),n),ye={class:"grid xl:mx-0 mx-0 py-0 mt-6 px-0",style:{"background-color":"white"}},me={class:"pb-0 p-0",style:{display:"flex","flex-wrap":"wrap",gap:"1rem","list-style":"none","overflow-x":"auto"}},be={style:{display:"flex",gap:"1rem"}},fe=["vif"],ve={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#ffad53"}},ge={style:{height:"100%",width:"100%"}},xe=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-envelope text-2xl"}),d(" RECIBIDOS")])],-1)),we={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},ke={class:"px-3 py-2"},Oe={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Se={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#8e3693"}},$e={style:{height:"100%",width:"100%"}},Ee=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-clock text-2xl"}),d(" EN PREPARACION")])],-1)),Ie={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},Ae={class:"px-3 py-2"},Be={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Ce={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#00bf7a"}},Te={class:"lg:pb-8",style:{height:"100%",width:"100%"}},Ve=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-send text-2xl"}),d(" ENVIADOS")])],-1)),Ne={style:{height:"100%","overflow-y":"auto"}},Pe={class:"px-3 py-2"},Re={key:0,class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},De={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"red"}},Ue={class:"lg:pb-8",style:{height:"100%",width:"100%"}},je=A(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-times text-2xl"}),d(" CANCELADOS")])],-1)),Le={style:{height:"100%","overflow-y":"auto"}},Me={class:"px-3 py-2"},ze={__name:"pedidos",setup(n){P();const c=V([]),a=P(),s=F(),v=V(""),g=V("");R(()=>{a.startOrderUpdates()}),q(()=>{a.stopOrderUpdates()}),R(async()=>{c.value=await Y.getSites(),a.getTodayOrders()}),N(()=>s.site,()=>{a.getTodayOrders()}),N(v,()=>{g.value=""}),N(g,()=>{v.value=""});const _=()=>{var p;if(v.value!="")B(v.value);else if(g.value!="")C((p=g.value)==null?void 0:p.split(" ").join(""));else return},B=async p=>{const r=await D.getOrderById(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")},C=async p=>{const r=await D.getOrderByPhone(p);r!=null&&r.order_id?(a.setVisible("currentOrder",!0),a.setOrder(r),s.site=c.value.filter(u=>u.site_id==r.site_id)[0],a.currentSearchingOrder=r):alert("Orden no encontrada")};return(p,r)=>{const u=w("Button"),$=w("InputText"),E=w("InputMask");return o(),l("div",ye,[e("div",{class:W([c.value.length>0?"apear":"hide","col-12 py-0 px-2 shadow-1 my-0"])},[e("nav",null,[e("ul",me,[(o(!0),l(k,null,O(c.value.filter(t=>t.show_on_web),t=>(o(),l("li",null,[i(u,{class:"p-2 mb-2",onClick:T=>b(s).site=t,style:j([b(s).site.site_id==t.site_id?"box-shadow:0 5px 0px var(--primary-color)":"",{"min-width":"max-content","border-radius":"0",color:"black"}]),text:"",label:t.site_name},null,8,["onClick","style","label"])]))),256)),e("li",be,[i($,{style:{},modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=t=>v.value=t),modelModifiers:{trim:!0},placeholder:"Buscar por id (sin #)"},null,8,["modelValue"]),d(),i(E,{modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=t=>g.value=t),prefix:"+57",id:"basic",mask:"999 999 9999",placeholder:"Buscar por telefono"},null,8,["modelValue"]),i(u,{onClick:r[2]||(r[2]=t=>_()),severity:"help",icon:"pi pi-search",label:"Buscar"})])])])],2),i(H),e("div",{vif:b(a).TodayOrders.filter(t=>t.current_status=="generada").length>0?"apear":"hide",class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},[e("div",ve,[e("div",ge,[xe,e("div",we,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="generada"),t=>(o(),l("div",ke,[i(I,{order:t},null,8,["order"])]))),256))])])])],8,fe),e("div",Oe,[e("div",Se,[e("div",$e,[Ee,e("div",Ie,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="en preparacion"),t=>(o(),l("div",Ae,[i(I,{order:t},null,8,["order"])]))),256))])])])]),e("div",Be,[e("div",Ce,[e("div",Te,[Ve,e("div",Ne,[i(G,{name:"fade",tag:"div"},{default:y(()=>[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="enviada"),t=>(o(),l("div",Pe,[i(I,{id:t.order_id,order:t},null,8,["id","order"])]))),256))]),_:1})])])])]),b(a).TodayOrders.filter(t=>t.current_status=="cancelada").length>0?(o(),l("div",Re,[e("div",De,[e("div",Ue,[je,e("div",Le,[(o(!0),l(k,null,O(b(a).TodayOrders.filter(t=>t.current_status=="cancelada"),t=>(o(),l("div",Me,[i(I,{order:t},null,8,["order"])]))),256))])])])])):m("",!0)])}}},Ye=U(ze,[["__scopeId","data-v-f90a501f"]]);export{Ye as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/pedidos-e2f66470.js
