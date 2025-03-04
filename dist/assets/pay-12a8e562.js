import{r as F}from"./resumen-1a363181.js";import{a as j,u as A}from"./formatoPesos-61de2e24.js";import{_ as L,h as U,i as $,j as O,U as D,D as V,H as z,g as _,o as p,c,a as n,b as s,f as h,u as t,F as P,k as x,q as m,t as b,p as G,m as H}from"./index-03a193b1.js";import{u as Z}from"./orderService-a32b2a8e.js";import"./ventas-b13155aa.js";const i=y=>(G("data-v-5dfcc8b7"),y=y(),H(),y),J={class:"finalizar-compra-container"},K=i(()=>n("p",{class:"title"},"FINALIZAR COMPRA",-1)),Q={style:{margin:"auto","max-width":"800px"}},W={class:"title",style:{margin:"3rem .5rem"}},X={class:"form-grid"},Y={class:"form-column"},ee=i(()=>n("span",null,"NOMBRE",-1)),oe={class:"form-group"},te=i(()=>n("span",null,"Ubicacio'n",-1)),ae={class:"form-group"},ne=i(()=>n("span",null,"Metodo Entrega",-1)),se={class:"form-group"},le=i(()=>n("span",null,"Direccio'n",-1)),de={class:"form-group"},re=i(()=>n("span",null,"Telefono",-1)),ie={class:"form-group"},ue=i(()=>n("span",null,"Placa de tu vehiculo",-1)),pe={class:"form-group"},ce={style:{display:"flex","align-items":"center",gap:"1rem"}},me={key:2,class:"form-group"},_e={key:0},he={key:1},ye=i(()=>n("span",null,"Metodo de pago",-1)),ge={class:"form-group"},ve=i(()=>n("span",null,"Notas",-1)),fe={__name:"pay",setup(y){const g=U(!1),R=[{id:1,name:"Demora más de una hora",percentage:"15%"},{id:2,name:"Pedido frío",percentage:"20%"},{id:3,name:"Un pelo",percentage:"100%"},{id:4,name:"Producto dañado",percentage:"100%"},{id:5,name:"Faltante de bebida y adición",percentage:"0%"},{id:6,name:"Responderle con lo que falta",percentage:"0%"},{id:7,name:"Salsas que no son",percentage:"20%"},{id:8,name:"Si se enoja y quiere cambio",percentage:"100%"},{id:9,name:"Mala atención Call Center",percentage:"20%"},{id:10,name:"Mala atención en Punto de venta",percentage:"20%"},{id:11,name:"Influencer",percentage:"100%"},{id:12,name:"No llegó el pedido",percentage:"20%"}],v=j(),l=A(),a=Z(),N=U([]),f=U([]);$(async()=>{var d;a.user.order_type={},f.value=await O.get(`${D}/payment_methods`),N.value=await O.get(`${D}/get_all_order_types`),((d=a.user.payment_method_option)==null?void 0:d.id)!=7?l.setNeighborhoodPrice():l.setNeighborhoodPriceCero()}),V(()=>a.user.order_type,d=>{d.id==2?(l.current_delivery=l.location.neigborhood.delivery_price,l.location.neigborhood.delivery_price=0):l.setNeighborhoodPrice()}),V(g,d=>{d&&alert("El esquema de comandas cambio y el modelo actual ya no es valido, la orden se envia como una orden comun")}),V(()=>{var d,o;return(o=(d=l.location)==null?void 0:d.site)==null?void 0:o.site_id},()=>{a.user.order_type=null}),V(()=>a.user.order_type,()=>{a.user.placa=null});const q=z(()=>{var o,u;return((u=(o=l.location)==null?void 0:o.site)==null?void 0:u.site_id)===33?N.value.filter(r=>r.id!==3):N.value.filter(r=>r.id!==1)});return(d,o)=>{var C,k,E,w,T,M;const u=_("Tag"),r=_("InputText"),S=_("Dropdown"),B=_("Checkbox"),I=_("Textarea");return p(),c("div",J,[K,n("div",Q,[n("div",W,[s(u,{severity:"success",class:"advertice"},{default:h(()=>[m(" El tiempo promedio de entrega es de 60 a 75 minutos, por favor téngalo en cuenta antes de ordenar ")]),_:1})])]),n("div",X,[n("div",Y,[ee,n("div",oe,[s(r,{id:"username",placeholder:"NOMBRE",modelValue:t(a).user.name,"onUpdate:modelValue":o[0]||(o[0]=e=>t(a).user.name=e)},null,8,["modelValue"])]),te,n("div",ae,[s(r,{onClick:o[1]||(o[1]=e=>t(l).setVisible("currentSite",!0)),modelValue:t(l).location.neigborhood.name,id:"neighborhood",placeholder:"Ubicacion",readonly:""},null,8,["modelValue"])]),ne,n("div",se,[s(S,{style:{width:"100%"},modelValue:t(a).user.order_type,"onUpdate:modelValue":o[2]||(o[2]=e=>t(a).user.order_type=e),id:"metodo_de_entrega",placeholder:"Metodo de entrega",options:q.value,optionLabel:"name"},null,8,["modelValue","options"])]),!t(a).user.order_type||t(a).user.order_type.id!==2?(p(),c(P,{key:0},[le,n("div",de,[s(r,{modelValue:t(a).user.address,"onUpdate:modelValue":o[3]||(o[3]=e=>t(a).user.address=e),id:"address",placeholder:"DIRECCION"},null,8,["modelValue"])])],64)):x("",!0),re,n("div",ie,[s(r,{modelValue:t(a).user.phone_number,"onUpdate:modelValue":o[4]||(o[4]=e=>t(a).user.phone_number=e),id:"phone_number",mask:"999 999 9999",placeholder:"TELEFONO"},null,8,["modelValue"])]),t(a).user.order_type&&t(a).user.order_type.id===2&&((k=(C=t(l).location)==null?void 0:C.site)==null?void 0:k.site_id)===33?(p(),c(P,{key:1},[ue,n("div",pe,[s(r,{modelValue:t(a).user.placa,"onUpdate:modelValue":o[5]||(o[5]=e=>t(a).user.placa=e),id:"placa",placeholder:"Placa de tu vehiculo"},null,8,["modelValue"])])],64)):x("",!0),n("span",ce,[s(B,{modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=e=>g.value=e),binary:""},null,8,["modelValue"]),m(" Es una cortesía? ")]),g.value?(p(),c("div",me,[s(S,{style:{width:"100%"},modelValue:t(a).user.payment_method_option,"onUpdate:modelValue":o[7]||(o[7]=e=>t(a).user.payment_method_option=e),id:"payment_method",placeholder:"Porcentaje de cortesía",options:R},{option:h(e=>[m(b(e.option.name)+" ",1),s(u,null,{default:h(()=>[m(b(e.option.percentage),1)]),_:2},1024)]),value:h(e=>[e.value?(p(),c("span",_e,[m(b(e.value.name)+" ",1),s(u,null,{default:h(()=>[m(b(e.value.percentage),1)]),_:2},1024)])):(p(),c("span",he," Selecciona un porcentaje "))]),_:1},8,["modelValue"])])):x("",!0),ye,n("div",ge,[s(S,{style:{width:"100%"},modelValue:t(a).user.payment_method_option,"onUpdate:modelValue":o[8]||(o[8]=e=>t(a).user.payment_method_option=e),id:"payment_method",placeholder:"METODO DE PAGO",options:((w=(E=t(l).location)==null?void 0:E.site)==null?void 0:w.site_id)===33?f.value.filter(e=>[6,8].includes(e.id)):((M=(T=t(l).location)==null?void 0:T.site)==null?void 0:M.site_id)!==33?f.value.filter(e=>![7].includes(e.id)):f.value,optionLabel:"name"},null,8,["modelValue","options"])]),ve,s(I,{modelValue:t(v).cart.order_notes,"onUpdate:modelValue":o[9]||(o[9]=e=>t(v).cart.order_notes=e),class:"order-notes",placeholder:"Notas adicionales"},null,8,["modelValue"]),n("template",null,[s(I,{modelValue:t(v).cart.order_notes,"onUpdate:modelValue":o[10]||(o[10]=e=>t(v).cart.order_notes=e),class:"order-notes",placeholder:"Notas"},null,8,["modelValue"])])]),s(F,{class:"resumen-column"})])])}}},xe=L(fe,[["__scopeId","data-v-5dfcc8b7"]]);export{xe as default};
