import{_ as w,Z as A,e as u,o as r,c as i,b,f as l,m as t,t as o,a as s,F as I,r as B,x as c,j as n,n as N,u as R,a2 as C,p as P,k as V}from"./index-a97ea6dc.js";import"./OrderItem.vue_vue_type_style_index_0_scoped_bbba8067_lang-85f5cf9d.js";const D="/images/WhatsApp.svg.webp",p=_=>(P("data-v-bbba8067"),_=_(),V(),_),T={style:{display:"flex","align-items":"center","justify-content":"space-between"}},j={style:{display:"flex","align-items":"center",gap:".5rem","flex-wrap":"wrap"}},L={style:{"min-width":"max-content",color:"black"}},F={style:{width:"3rem",height:"100%"}},U={style:{position:"relative"}},W=["src"],$={class:"text-xl",style:{display:"flex",gap:"1rem","align-items":"center"}},z={style:{"min-width":"max-content",color:"black"}},Z={key:1,style:{"font-weight":"bold"}},q=p(()=>s("b",null,"RESPONSABLE:",-1)),H={key:4},J=p(()=>s("b",null,"OBSERVACIONES:",-1)),Y=p(()=>s("i",{class:"pi pi-whatsapp mr-2"},null,-1)),G=p(()=>s("br",null,null,-1)),K={key:7},M=p(()=>s("p",{style:{color:"black"},class:"py-0 my-1"},[s("b",null,"Vendido por")],-1)),Q={key:9,class:"pr-2",style:{height:"2rem",position:"absolute",bottom:"1rem",right:".5rem"},src:D,alt:""},X={key:10,class:"pr-2",style:{height:"1.5rem",position:"absolute",bottom:"1rem",right:".5rem"},src:C,alt:""},ee={__name:"OrderItem",props:{order:{type:Object,default:{}}},setup(_){const m=A(),E=()=>{m.setVisible("currentOrder",!0),m.setOrder(e.order)},e=_;return(re,se)=>{var y,h,g,k,v,f;const d=u("Tag"),x=u("Button"),O=u("ProgressSpinner"),S=u("P");return r(),i("div",{onClick:E,class:"col-12",style:N([R(m).currentSearchingOrder.order_id==e.order.order_id?"border:3px solid var(--primary-color)":"",{"background-color":"rgba(255, 255, 255, 0.506)",padding:".6rem",position:"relative","border-radius":"0.5rem",cursor:"pointer"}])},[b(d,{style:{"border-radius":".3rem"},class:"text mb-2",severity:e.order.user_phone=="1111111111"?"danger":"help"},{default:l(()=>{var a;return[t(o(e.order.user_phone=="1111111111"?"ES UNA PRUEBA, RELAJATE":`CLIENTE --> ${(a=e.order.user_name)==null?void 0:a.toUpperCase()}`),1)]}),_:1},8,["severity"]),s("div",T,[s("div",j,[s("b",L," #"+o((y=e.order)==null?void 0:y.order_id),1),(r(!0),i(I,null,B(e.order.products.slice(0,3),a=>(r(),i("div",F,[s("div",U,[s("img",{style:{width:"100%","border-radius":"10%","background-color":"white"},src:`https://backend.salchimonster.com/read-photo-product/${a.img_identifier}/96`,alt:""},null,8,W),b(x,{severity:"danger",class:"p-0",rounded:"",label:a.quantity,style:{width:"1.5rem",position:"absolute",top:"-.5rem",right:"-.5rem","z-index":"99",height:"1.5rem","border-radius":"1rem"}},null,8,["label"])])]))),256))]),s("span",$,[s("b",z,o((f=(v=(k=(g=(h=e.order)==null?void 0:h.latest_status_timestamp)==null?void 0:g.split("T")[1])==null?void 0:k.split(".")[0])==null?void 0:v.split(":").slice(0,2))==null?void 0:f.join(":")),1),e.order.current_status=="en preparacion"?(r(),c(O,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):n("",!0)])]),e.order.calcel_sol_state!=null?(r(),c(d,{key:0,style:{"border-radius":".3rem"},severity:e.order.calcel_sol_state?"success":"danger"},{default:l(()=>[t(o(e.order.calcel_sol_state?"REVISADO":" EN REVISION..."),1)]),_:1},8,["severity"])):n("",!0),t(),e.order.calcel_sol_state?(r(),i("span",Z," Y ")):n("",!0),e.order.calcel_sol_state?(r(),c(d,{key:2,style:{"border-radius":".3rem"},severity:e.order.calcel_sol_asnwer?"success":"danger"},{default:l(()=>[t(o(e.order.calcel_sol_asnwer?"APROBADO":"RECHAZADO"),1)]),_:1},8,["severity"])):n("",!0),e.order.calcel_sol_state?(r(),c(S,{key:3,class:"m-0"},{default:l(()=>{var a;return[q,t(" "+o((a=e.order.cancelation_solve_responsible)==null?void 0:a.split(" ").slice(0,3).join(" ")),1)]}),_:1})):n("",!0),e.order.responsible_observation?(r(),i("span",H,[s("p",null,[J,t(" "+o(e.order.responsible_observation||"sin observaciones"),1)])])):n("",!0),e.order.responsible_id?(r(),c(d,{key:5,style:{"border-radius":".3rem"},severity:"success"},{default:l(()=>[Y,t(" TRANSFERENCIA APROBADA")]),_:1})):n("",!0),t(),G,e.order.responsible_id?(r(),c(d,{key:6,style:{"border-radius":".3rem"},severity:"success"},{default:l(()=>[t(o(e.order.name),1)]),_:1})):n("",!0),e.order.inserted_by_name?(r(),i("div",K,[M,b(d,{style:{"border-radius":".3rem","background-color":"black"}},{default:l(()=>[t(o(e.order.inserted_by_name)+" -> ",1)]),_:1})])):(r(),c(d,{key:8,style:{"border-radius":".3rem","background-color":"var(--primary-color)"}},{default:l(()=>[t(" DIRECTO DE WEB -> ")]),_:1})),e.order.inserted_by_name?(r(),i("img",Q)):(r(),i("img",X))],4)}}},ae=w(ee,[["__scopeId","data-v-bbba8067"]]);export{ae as O};
