import"./pqrUser.vue_vue_type_style_index_0_scoped_508d9820_lang-f7824f10.js";import{_ as X,r as s,M as Y,D as Z,i as ee,j as _,U as f,a as d,o as u,e as le,w as h,u as C,b as t,g as a,m as N,t as T,c as r,k as F,f as c,p as te,h as oe}from"./index-67d4dcac.js";const i=U=>(te("data-v-508d9820"),U=U(),oe(),U),se={style:{height:"auto",color:"black","background-color":"white",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},ae=i(()=>t("h4",null,"Hemos recibido su solicitud y ha quedado registrada con el id ",-1)),ie=i(()=>t("br",null,null,-1)),ne={class:"text-center",style:{width:"auto","font-size":"3rem"}},ue={style:{height:"auto",color:"black",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},de=i(()=>t("br",null,null,-1)),re=i(()=>t("b",null,[t("p",{class:"text-center",style:{width:"auto","font-size":"3rem"}}," Listo")],-1)),ce={class:"container mt-0 col-12 p-0",style:{"max-width":"",margin:"auto"}},ve={class:"form",style:{width:"100%",display:"flex","flex-direction":"column",gap:"1rem"}},pe={class:"input"},me=i(()=>t("h5",{class:"field"},"Medio",-1)),_e={class:"input"},fe=i(()=>t("h5",{class:"field"},"Restaurante",-1)),he={class:"input"},ye=i(()=>t("h5",{class:"field"},"Categoria",-1)),be={key:0,class:"input"},ge=i(()=>t("h5",{class:"field"},"Por favor clasifica tu inconveniente",-1)),we={style:{display:"flex","align-items":"center",gap:"1rem"}},Ve={class:"p-0 m-0"},xe={style:{display:"flex","align-items":"center",gap:"1rem"}},ke={class:"p-0 m-0"},Ue={key:1,class:"input p-3",style:{"background-color":"#00f3ff29"}},Se=i(()=>t("h5",{class:"field"},"Califícanos",-1)),qe={key:2,class:"input"},Ie=i(()=>t("h5",{class:"field"},"Sede",-1)),De={key:3,class:"input"},Ce=i(()=>t("h5",{class:"field"},[N("ID de la orden ejemplo "),t("b",null,"BRE-0554")],-1)),Ne={key:4,class:"input"},Pe=i(()=>t("h5",{class:"field"},"Comentarios",-1)),Re={key:5,class:"input"},Ee=i(()=>t("h5",{class:"field"},"Nombre",-1)),Te={key:6,class:"input"},$e=i(()=>t("h5",{class:"field"},"Número de teléfono",-1)),Be={key:7,class:"input"},Le=i(()=>t("h5",{class:"field"},"Dirección (opcional)",-1)),je={class:"input",style:{display:"flex","justify-content":"end"}},ze={__name:"pqrUser",emits:["inFocus","reload"],setup(U,{emit:H}){const $=H,P=s({}),B=s([{}]),S=s({}),y=Y();s();const Q=s(!0),L=s(),b=s(!1);s([]);const g=s(!1),o=s(),v=s(),j=s([]),z=s([]),q=s(""),w=s(""),V=s(""),I=s(""),x=s(""),R=s(null),G=s([]),k=s();Z(()=>y.visible_add_pqr,D=>{D&&(o.value=null,x.value="Sin comentarios",v.value=null,k.value=null,w.value="",V.value="",I.value="")});const J=async()=>{var l,p,m;if(!o.value){alert("Por favor, seleccione un tipo de requerimiento.");return}if(o.value==9&&!q.value){alert("Por favor, ingrese el ID de la orden.");return}if(o.value!=8&&!S.value){alert("Por favor, Clasifica tu inconveniente");return}if(o.value!=8&&!x.value){alert("Por favor, Cuentenos lo sucedido");return}if(o.value!=8&&(!w.value||!V.value)){alert("Por favor, complete los campos obligatorios (nombre y teléfono).");return}if(!k.value){alert("Por favor, Seleccione la red");return}if(!v.value){alert("Por favor, Seleccione la sede");return}const D={data:{reques_type_id:o.value,content:x.value||"Sin comentarios",channel_id:2,rating:R.value,site_id:v.value||null,network_id:k.value||null,order_id:q.value||null,tag_id:((l=S.value)==null?void 0:l.id)||7,restaurant_id:P.value},user:{user_name:w.value||"",user_phone:((p=V.value)==null?void 0:p.toString())||"",user_address:I.value||"",site_id:v.value||null}};try{const n=await _.post(`${f}/create-pqr`,D);L.value=(m=n==null?void 0:n.pqr_id[0])==null?void 0:m.id,o.value==8?(g.value=!0,$("reload")):b.value=!0,Q.value=!1}catch{}$("reload")},M=s([]);return ee(async()=>{z.value=await _.get(`${f}/get-all-pqrs-types`),j.value=await _.get(`${f}/sites`),G.value=await _.get(`${f}/get-all-networks`),B.value=await _.get(`${f}/get-all-pqr-tags`),M.value=await _.get(`${f}/restaurants`),o.value=8}),(D,l)=>{const p=d("Button"),m=d("Dialog"),n=d("Dropdown"),A=d("Tag"),K=d("Rating"),E=d("InputText"),O=d("Textarea"),W=d("InputNumber");return u(),le(m,{visible:C(y).visible_add_pqr,"onUpdate:visible":l[15]||(l[15]=e=>C(y).visible_add_pqr=e),style:{width:"50rem"},modal:"",class:"mx-2",header:"INGRESAR PQR"},{footer:h(()=>[t("div",je,[a(p,{label:"Enviar",style:{"font-weight":"bold"},severity:"info",onClick:J})])]),default:h(()=>[a(m,{closable:!1,class:"mx-4",visible:b.value,"onUpdate:visible":l[1]||(l[1]=e=>b.value=e),modal:"",style:{width:"30rem","background-color":"white"}},{default:h(()=>[t("div",se,[ae,N(),ie,t("b",null,[t("p",ne,T(L.value),1)]),a(p,{onClick:l[0]||(l[0]=()=>{C(y).visible_add_pqr=!1,g.value=!1,b.value=!1}),class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})])]),_:1},8,["visible"]),a(m,{class:"mx-4",visible:g.value,"onUpdate:visible":l[3]||(l[3]=e=>g.value=e),modal:"",style:{width:"30rem","background-color":"white"}},{default:h(()=>[t("div",ue,[de,re,a(p,{onClick:l[2]||(l[2]=()=>{C(y).visible_add_pqr=!1,g.value=!1,b.value=!1}),class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})])]),_:1},8,["visible"]),t("div",ce,[t("div",ve,[t("div",pe,[me,a(n,{modelValue:k.value,"onUpdate:modelValue":l[4]||(l[4]=e=>k.value=e),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:G.value,optionLabel:"name"},null,8,["modelValue","options"])]),t("div",_e,[fe,a(n,{modelValue:P.value,"onUpdate:modelValue":l[5]||(l[5]=e=>P.value=e),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:M.value,optionLabel:"name"},null,8,["modelValue","options"])]),t("div",he,[ye,a(n,{modelValue:o.value,"onUpdate:modelValue":l[6]||(l[6]=e=>o.value=e),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:z.value.filter(e=>e.id!=8),optionLabel:"name"},null,8,["modelValue","options"])]),o.value&&o.value!=8&&o.value!=11?(u(),r("div",be,[ge,a(n,{options:B.value,modelValue:S.value,"onUpdate:modelValue":l[7]||(l[7]=e=>S.value=e),style:{width:"100%"}},{option:h(e=>[t("div",we,[a(A,{style:F([`background-color:${e.option.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),N(),t("h6",Ve,T(e.option.name),1)])]),value:h(e=>[t("div",xe,[a(A,{style:F([`background-color:${e.value.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),N(),t("h6",ke,T(e.value.name),1)])]),_:1},8,["options","modelValue"])])):c("",!0),o.value&&o.value!=11?(u(),r("div",Ue,[Se,a(K,{modelValue:R.value,"onUpdate:modelValue":l[8]||(l[8]=e=>R.value=e),cancel:!1},null,8,["modelValue"])])):c("",!0),o.value?(u(),r("div",qe,[Ie,a(n,{options:j.value.filter(e=>e.show_on_web),modelValue:v.value,"onUpdate:modelValue":l[9]||(l[9]=e=>v.value=e),optionValue:"site_id",optionLabel:"site_name",style:{width:"100%"}},null,8,["options","modelValue"])])):c("",!0),o.value&&o.value==9?(u(),r("div",De,[Ce,a(E,{modelValue:q.value,"onUpdate:modelValue":l[10]||(l[10]=e=>q.value=e),style:{width:"100%"},placeholder:"Escriba el número de la orden"},null,8,["modelValue"])])):c("",!0),o.value?(u(),r("div",Ne,[Pe,a(O,{modelValue:x.value,"onUpdate:modelValue":l[11]||(l[11]=e=>x.value=e),rows:"5",style:{width:"100%",resize:"none"},placeholder:"Deja tus comentarios"},null,8,["modelValue"])])):c("",!0),o.value&&o.value!=8?(u(),r("div",Re,[Ee,a(E,{modelValue:w.value,"onUpdate:modelValue":l[12]||(l[12]=e=>w.value=e),style:{width:"100%"},placeholder:"Escriba su nombre por favor"},null,8,["modelValue"])])):c("",!0),o.value&&o.value!=8?(u(),r("div",Te,[$e,a(W,{useGrouping:!1,modelValue:V.value,"onUpdate:modelValue":l[13]||(l[13]=e=>V.value=e),style:{width:"100%"},placeholder:"Escriba su número de teléfono"},null,8,["modelValue"])])):c("",!0),o.value&&o.value!=8?(u(),r("div",Be,[Le,a(E,{modelValue:I.value,"onUpdate:modelValue":l[14]||(l[14]=e=>I.value=e),style:{width:"100%"},placeholder:"Escriba su dirección"},null,8,["modelValue"])])):c("",!0)])])]),_:1},8,["visible"])}}},Ae=X(ze,[["__scopeId","data-v-508d9820"]]);export{Ae as default};
