<<<<<<<< HEAD:dist/assets/purchaseOrderNew-badec85e.js
import{_ as A,r as p,l as M,i as R,a as y,o as _,c as m,g as d,w as F,b as e,j as a,t as r,u as b,F as w,d as I,k as U,p as T,h as L,q as z,U as G,s as P}from"./index-9672dc6b.js";import"./sass.default-a5b7a582.js";import{p as W}from"./purchaseOrderService-6d752b07.js";const o=h=>(T("data-v-b28694e7"),h=h(),L(),h),H=o(()=>e("span",{style:{color:"red"}},"Esta accion no se puede deshacer luego, piensalo bien.",-1)),Y=o(()=>e("br",null,null,-1)),J=o(()=>e("br",null,null,-1)),K={style:{"text-transform":"capitalize"}},Q={style:{}},X=o(()=>e("b",{class:"text-l"},"ES CORRECTO",-1)),Z=o(()=>e("b",{class:"text-l"},"PERSONALMENTE.",-1)),ee=o(()=>e("br",null,null,-1)),te=o(()=>e("br",null,null,-1)),se=o(()=>e("b",null,"Deseas continuar?",-1)),ae={style:{display:"flex","justify-content":"end"}},oe={class:"md:mx-auto p-0 mb-6",style:{"max-width":"800px","border-radius":"0.5rem","min-height":"80vh","margin-top":"3rem"}},re=o(()=>e("p",{class:"text-2xl my-3 text-center"},[e("b",null," Generar orden de compra ")],-1)),ne={class:"text-xl py-0 my-0"},le=o(()=>e("b",null," Fecha : ",-1)),ie={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},de=o(()=>e("b",null," Responsable : ",-1)),ce={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},ue=o(()=>e("b",null," sede : ",-1)),pe={class:"text-center p-1 my-3 text-white",style:{"background-color":"#000000",display:"flex","align-items":"center","justify-content":"center","border-radius":"0.3rem",height:"2.5rem"}},_e={style:{"text-transform":"uppercase","border-radius":""}},me={style:{"text-transform":"uppercase",display:"flex",gap:"1rem","align-items":"center","justify-content":"space-between","font-weight":"bold"},class:"col-12 my-2 md:col-7 p-0"},he={class:"col-12 md:col-5 px-0 py-1 md:pl-3",style:{display:"flex","align-items":"center",gap:"1rem"}},ye={class:"col-12 p-0 mt-3",style:{display:"flex","justify-content":"end"}},be={__name:"purchaseOrderNew",setup(h){p({items:[{}]});const f=p([]),u=p(!1),c=M();p([]);const v=p(!1);function D(s){const t=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];let n=s.getDate(),x=s.getMonth(),g=s.getFullYear();return`${n} de ${t[x]} del ${g}`}const C={1:"#FF0000",2:"#FF4500",3:"#FFD700",4:"#FF4500",5:"#0000FF",20:"#4B0082",21:"#3CB371",25:"#EE82EE",23:"#FFC0CB",24:"#00FFFF",11:"#3CB371",12:"#00008B",13:"#FFA500",14:"#A52A2A",15:"#FFFF00"},k=s=>s.map(t=>t).map(t=>t.items).flat().map(t=>({order_purchase_item_id:t.item_id,quantity:t.quantity,unit_measure_id:t.unit_measure_id}));R(async()=>{const s=await W.getGroupsWithItems();s.map(t=>t.items.map(n=>n.quantity=0)),f.value=s});const E=()=>{var s,t;return{order_purchase:{responsible_id:(s=c.rawUserData)==null?void 0:s.id,site_id:(t=c.rawUserData)==null?void 0:t.site_id},order_purchase_items:k([...f.value])}},q=()=>{const s=E();if(v.value=!0,s.order_purchase_items.some(t=>t.quantity===null)){alert("Debes llenar todos los espacios");return}u.value=!0},N=async()=>{const s=E();await z.post(`${G}/insert_complete_order`,s,"enviando orden"),P.push("/purchase-order/purchase-order-my-orders/"),u.value=!1};return(s,t)=>{var S,B;const n=y("Button"),x=y("Dialog"),g=y("Tag"),O=y("InputNumber");return _(),m(w,null,[d(x,{closable:!1,style:{width:"30rem"},class:"m-2",header:"Estas seguro Monstruo?",modal:"",visible:u.value,"onUpdate:visible":t[1]||(t[1]=i=>u.value=i)},{footer:F(()=>[e("div",ae,[d(n,{onClick:t[0]||(t[0]=()=>{u.value=!1,v.value=!1}),label:"Mejor lo reviso de nuevo!",severity:"help"}),d(n,{text:"",label:"Firmar",onClick:N,severity:"danger"})])]),default:F(()=>{var i;return[H,a(),Y,a(),J,a(" Hola, "),e("span",K,r((i=b(c).rawUserData)==null?void 0:i.name.toLowerCase())+" ! ",1),e("p",Q,[a(" Al precionar "),d(n,{severity:"danger",text:"",class:"p-0",label:"Firmar"}),a(" das fe de que el reporte del inventario para la sede "),e("b",null,"Salchimonster "+r(b(c).rawUserData.site_name),1),a(" el dia "+r(D(new Date))+" que estas intentando enviar ",1),X,a(" y lo has verificado "),Z,a(),ee,a(),te,se])]}),_:1},8,["visible"]),e("div",oe,[re,e("p",ne,[le,a(" "+r(D(new Date)),1)]),e("p",ie,[de,a(r((S=b(c).rawUserData)==null?void 0:S.name.toLowerCase()),1)]),e("p",ce,[ue,a(r((B=b(c).rawUserData)==null?void 0:B.site_name.toLowerCase()),1)]),(_(!0),m(w,null,I(f.value,(i,j)=>(_(),m("div",{key:j},[e("p",pe,[e("b",_e,r(i.group_name),1)]),(_(!0),m(w,null,I(i.items,(l,V)=>(_(),m("div",{style:{"align-items":"center"},class:"grid m-0",key:V},[e("div",me,[e("span",null,r(l.item_name),1),a(),d(g,{style:U([{"border-radius":"0.3rem",height:"2.5rem","background-color":"transparent"},`color:${C[l.unit_measure_id]}; border: 1px solid ${C[l.unit_measure_id]}`])},{default:F(()=>[a(r(l.unit_measure),1)]),_:2},1032,["style"])]),e("div",he,[d(O,{invalid:"",type:"number",locale:"es-ES",useGrouping:!1,showButtons:"",min:0,maxFractionDigits:2,modelValue:l.quantity,"onUpdate:modelValue":$=>l.quantity=$,suffix:` ${l.unit_measure}`,maxDecimal:"5",style:U([{width:"100%",height:"2.5rem","border-radius":"0.3rem"},l.quantity==null&&v.value?"border:2px solid red;border-radius:0.3rem":""]),class:"md:p-0"},null,8,["modelValue","onUpdate:modelValue","suffix","style"])])]))),128))]))),128)),e("div",ye,[d(n,{onClick:q,severity:"help",label:"Enviar Reporte"})])])],64)}}},ge=A(be,[["__scopeId","data-v-b28694e7"]]);export{ge as default};
========
import{_ as A,r as p,l as M,i as R,a as y,o as _,c as m,g as d,w as F,b as e,j as a,t as r,u as f,F as w,d as I,k as U,p as T,h as L,q as z,U as G,s as P}from"./index-acdf86d7.js";import"./sass.default-a5b7a582.js";import{p as W}from"./purchaseOrderService-b5e27381.js";const o=h=>(T("data-v-ef2d626a"),h=h(),L(),h),H=o(()=>e("span",{style:{color:"red"}},"Esta accion no se puede deshacer luego, piensalo bien.",-1)),Y=o(()=>e("br",null,null,-1)),J=o(()=>e("br",null,null,-1)),K={style:{"text-transform":"capitalize"}},Q={style:{}},X=o(()=>e("b",{class:"text-l"},"ES CORRECTO",-1)),Z=o(()=>e("b",{class:"text-l"},"PERSONALMENTE.",-1)),ee=o(()=>e("br",null,null,-1)),te=o(()=>e("br",null,null,-1)),se=o(()=>e("b",null,"Deseas continuar?",-1)),ae={style:{display:"flex","justify-content":"end"}},oe={class:"md:mx-auto p-0 mb-6",style:{"max-width":"800px","border-radius":"0.5rem","min-height":"80vh","margin-top":"3rem"}},re=o(()=>e("p",{class:"text-2xl my-3 text-center"},[e("b",null," Generar orden de compra ")],-1)),ne={class:"text-xl py-0 my-0"},le=o(()=>e("b",null," Fecha : ",-1)),ie={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},de=o(()=>e("b",null," Responsable : ",-1)),ce={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},ue=o(()=>e("b",null," sede : ",-1)),pe={class:"text-center p-1 my-3 text-white",style:{"background-color":"#000000",display:"flex","align-items":"center","justify-content":"center","border-radius":"0.3rem",height:"2.5rem"}},_e={style:{"text-transform":"uppercase","border-radius":""}},me={style:{"text-transform":"uppercase",display:"flex",gap:"1rem","align-items":"center","justify-content":"space-between","font-weight":"bold"},class:"col-12 my-2 md:col-7 p-0"},he={class:"col-12 md:col-5 px-0 py-1 md:pl-3",style:{display:"flex","align-items":"center",gap:"1rem"}},ye={class:"col-12 p-0 mt-3",style:{display:"flex","justify-content":"end"}},fe={__name:"purchaseOrderNew",setup(h){p({items:[{}]});const b=p([]),u=p(!1),c=M();p([]);const v=p(!1);function D(s){const t=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];let n=s.getDate(),x=s.getMonth(),g=s.getFullYear();return`${n} de ${t[x]} del ${g}`}const C={1:"#FF0000",2:"#FF4500",3:"#FFD700",4:"#FF4500",5:"#0000FF",20:"#4B0082",21:"#3CB371",25:"#EE82EE",23:"#FFC0CB",24:"#00FFFF",11:"#3CB371",12:"#00008B",13:"#FFA500",14:"#A52A2A",15:"#FFFF00"},k=s=>s.map(t=>t).map(t=>t.items).flat().map(t=>({order_purchase_item_id:t.item_id,quantity:t.quantity,unit_measure_id:t.unit_measure_id}));R(async()=>{const s=await W.getGroupsWithItems();s.map(t=>t.items.map(n=>n.quantity=0)),b.value=s});const E=()=>{var s,t;return{order_purchase:{responsible_id:(s=c.rawUserData)==null?void 0:s.id,site_id:(t=c.rawUserData)==null?void 0:t.site_id},order_purchase_items:k([...b.value])}},q=()=>{const s=E();if(v.value=!0,s.order_purchase_items.some(t=>t.quantity===null)){alert("Debes llenar todos los espacios");return}u.value=!0},N=async()=>{const s=E();await z.post(`${G}/insert_complete_order`,s,"enviando orden"),P.push("/purchase-order/purchase-order-my-orders/"),u.value=!1};return(s,t)=>{var S,B;const n=y("Button"),x=y("Dialog"),g=y("Tag"),O=y("InputNumber");return _(),m(w,null,[d(x,{closable:!1,style:{width:"30rem"},class:"m-2",header:"Estas seguro Monstruo?",modal:"",visible:u.value,"onUpdate:visible":t[1]||(t[1]=i=>u.value=i)},{footer:F(()=>[e("div",ae,[d(n,{onClick:t[0]||(t[0]=()=>{u.value=!1,v.value=!1}),label:"Mejor lo reviso de nuevo!",severity:"help"}),d(n,{text:"",label:"Firmar",onClick:N,severity:"danger"})])]),default:F(()=>{var i;return[H,a(),Y,a(),J,a(" Hola, "),e("span",K,r((i=f(c).rawUserData)==null?void 0:i.name.toLowerCase())+" ! ",1),e("p",Q,[a(" Al precionar "),d(n,{severity:"danger",text:"",class:"p-0",label:"Firmar"}),a(" das fe de que el reporte del inventario para la sede "),e("b",null,"Salchimonster "+r(f(c).rawUserData.site_name),1),a(" el dia "+r(D(new Date))+" que estas intentando enviar ",1),X,a(" y lo has verificado "),Z,a(),ee,a(),te,se])]}),_:1},8,["visible"]),e("div",oe,[re,e("p",ne,[le,a(" "+r(D(new Date)),1)]),e("p",ie,[de,a(r((S=f(c).rawUserData)==null?void 0:S.name.toLowerCase()),1)]),e("p",ce,[ue,a(r((B=f(c).rawUserData)==null?void 0:B.site_name.toLowerCase()),1)]),(_(!0),m(w,null,I(b.value,(i,j)=>(_(),m("div",{key:j},[e("p",pe,[e("b",_e,r(i.group_name),1)]),(_(!0),m(w,null,I(i.items,(l,V)=>(_(),m("div",{style:{"align-items":"center"},class:"grid m-0",key:V},[e("div",me,[e("span",null,r(l.item_name),1),a(),d(g,{style:U([{"border-radius":"0.3rem",height:"2.5rem","background-color":"transparent"},`color:${C[l.unit_measure_id]}; border: 1px solid ${C[l.unit_measure_id]}`])},{default:F(()=>[a(r(l.unit_measure),1)]),_:2},1032,["style"])]),e("div",he,[d(O,{invalid:"",type:"number",locale:"es-ES",useGrouping:!1,showButtons:"",min:0,maxFractionDigits:2,modelValue:l.quantity,"onUpdate:modelValue":$=>l.quantity=$,suffix:` ${l.unit_measure}`,maxDecimal:"5",style:U([{width:"100%",height:"2.5rem","border-radius":"0.3rem"},l.quantity==null&&v.value?"border:2px solid red;border-radius:0.3rem":""]),class:"md:p-0"},null,8,["modelValue","onUpdate:modelValue","suffix","style"])])]))),128))]))),128)),e("div",ye,[d(n,{onClick:q,severity:"help",label:"Enviar Reporte"})])])],64)}}},ge=A(fe,[["__scopeId","data-v-ef2d626a"]]);export{ge as default};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/purchaseOrderNew-cc7c6923.js
