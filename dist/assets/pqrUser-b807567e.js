import{M as F,C,U as c,_ as X,r as s,D as Y,i as Z,j as R,a as v,o as d,e as ee,w as g,u as I,b as l,g as r,m as N,t as L,c as p,k as A,f as _,p as te,h as le}from"./index-7ca17fce.js";F();const n=i=>(te("data-v-ef103601"),i=i(),le(),i),oe={style:{height:"auto",color:"black","background-color":"white",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},se=n(()=>l("h4",null,"Hemos recibido su solicitud y ha quedado registrada con el id ",-1)),ae=n(()=>l("br",null,null,-1)),re={class:"text-center",style:{width:"auto","font-size":"3rem"}},ne={style:{height:"auto",color:"black",display:"flex","flex-direction":"column","justify-content":"end","align-items":"center"}},ie=n(()=>l("br",null,null,-1)),ue=n(()=>l("b",null,[l("p",{class:"text-center",style:{width:"auto","font-size":"3rem"}}," Listo")],-1)),de={class:"container mt-0 col-12 p-0",style:{"max-width":"",margin:"auto"}},ce={class:"form",style:{width:"100%",display:"flex","flex-direction":"column",gap:"1rem"}},ve={class:"input"},pe=n(()=>l("h5",{class:"field"},"Medio",-1)),_e={class:"input"},me=n(()=>l("h5",{class:"field"},"Categoria",-1)),he={key:0,class:"input"},fe=n(()=>l("h5",{class:"field"},"Por favor clasifica tu inconveniente",-1)),ye={style:{display:"flex","align-items":"center",gap:"1rem"}},ge={class:"p-0 m-0"},be={style:{display:"flex","align-items":"center",gap:"1rem"}},we={class:"p-0 m-0"},Ve={key:1,class:"input p-3",style:{"background-color":"#00f3ff29"}},Se=n(()=>l("h5",{class:"field"},"Califícanos",-1)),Pe={key:2,class:"input"},xe=n(()=>l("h5",{class:"field"},"Sede",-1)),ke={key:3,class:"input"},Re=n(()=>l("h5",{class:"field"},[N("ID de la orden ejemplo "),l("b",null,"BRE-0554")],-1)),qe={key:4,class:"input"},Ee=n(()=>l("h5",{class:"field"},"Comentarios",-1)),Ue={key:5,class:"input"},Qe=n(()=>l("h5",{class:"field"},"Nombre",-1)),Ce={key:6,class:"input"},Ie=n(()=>l("h5",{class:"field"},"Número de teléfono",-1)),Ne={key:7,class:"input"},$e=n(()=>l("h5",{class:"field"},"Dirección (opcional)",-1)),De={class:"input",style:{display:"flex","justify-content":"end"}},Le={__name:"pqrUser",emits:["inFocus","reload"],setup(i,{emit:a}){const m=a,B=s([{}]),q=s({}),b=F();s();const H=s(!0),T=s(),w=s(!1);s([]);const V=s(!1),o=s(),h=s(),j=s([]),z=s([]),E=s(""),S=s(""),P=s(""),U=s(""),x=s(""),$=s(null),G=s([]),k=s();Y(()=>b.visible_add_pqr,Q=>{Q&&(o.value=null,x.value="Sin comentarios",h.value=null,k.value=null,S.value="",P.value="",U.value="")});const J=async()=>{var t,f,y;if(!o.value){alert("Por favor, seleccione un tipo de requerimiento.");return}if(o.value==9&&!E.value){alert("Por favor, ingrese el ID de la orden.");return}if(o.value!=8&&!q.value){alert("Por favor, Clasifica tu inconveniente");return}if(o.value!=8&&!x.value){alert("Por favor, Cuentenos lo sucedido");return}if(o.value!=8&&(!S.value||!P.value)){alert("Por favor, complete los campos obligatorios (nombre y teléfono).");return}if(!k.value){alert("Por favor, Seleccione la red");return}if(!h.value){alert("Por favor, Seleccione la sede");return}const Q={data:{reques_type_id:o.value,content:x.value||"Sin comentarios",channel_id:2,rating:$.value,site_id:h.value||null,network_id:k.value||null,order_id:E.value||null,tag_id:((t=q.value)==null?void 0:t.id)||7},user:{user_name:S.value||"",user_phone:((f=P.value)==null?void 0:f.toString())||"",user_address:U.value||"",site_id:h.value||null}};try{const u=await R.post(`${c}/create-pqr`,Q);T.value=(y=u==null?void 0:u.pqr_id[0])==null?void 0:y.id,o.value==8?(V.value=!0,m("reload")):w.value=!0,H.value=!1}catch{}m("reload")};return Z(async()=>{z.value=await R.get(`${c}/get-all-pqrs-types`),j.value=await R.get(`${c}/sites`),G.value=await R.get(`${c}/get-all-networks`),B.value=await R.get(`${c}/get-all-pqr-tags`),o.value=8}),(Q,t)=>{const f=v("Button"),y=v("Dialog"),u=v("Dropdown"),M=v("Tag"),K=v("Rating"),D=v("InputText"),O=v("Textarea"),W=v("InputNumber");return d(),ee(y,{visible:I(b).visible_add_pqr,"onUpdate:visible":t[14]||(t[14]=e=>I(b).visible_add_pqr=e),style:{width:"50rem"},modal:"",class:"mx-2",header:"INGRESAR PQR"},{footer:g(()=>[l("div",De,[r(f,{label:"Enviar",style:{"font-weight":"bold"},severity:"info",onClick:J})])]),default:g(()=>[r(y,{closable:!1,class:"mx-4",visible:w.value,"onUpdate:visible":t[1]||(t[1]=e=>w.value=e),modal:"",style:{width:"30rem","background-color":"white"}},{default:g(()=>[l("div",oe,[se,N(),ae,l("b",null,[l("p",re,L(T.value),1)]),r(f,{onClick:t[0]||(t[0]=()=>{I(b).visible_add_pqr=!1,V.value=!1,w.value=!1}),class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})])]),_:1},8,["visible"]),r(y,{class:"mx-4",visible:V.value,"onUpdate:visible":t[3]||(t[3]=e=>V.value=e),modal:"",style:{width:"30rem","background-color":"white"}},{default:g(()=>[l("div",ne,[ie,ue,r(f,{onClick:t[2]||(t[2]=()=>{I(b).visible_add_pqr=!1,V.value=!1,w.value=!1}),class:"m-auto",style:{"font-weight":"bold"},severity:"info",label:"Listo"})])]),_:1},8,["visible"]),l("div",de,[l("div",ce,[l("div",ve,[pe,r(u,{modelValue:k.value,"onUpdate:modelValue":t[4]||(t[4]=e=>k.value=e),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:G.value,optionLabel:"name"},null,8,["modelValue","options"])]),l("div",_e,[me,r(u,{modelValue:o.value,"onUpdate:modelValue":t[5]||(t[5]=e=>o.value=e),optionValue:"id",style:{width:"100%","text-transform":"uppercase"},options:z.value.filter(e=>e.id!=8),optionLabel:"name"},null,8,["modelValue","options"])]),o.value&&o.value!=8?(d(),p("div",he,[fe,r(u,{options:B.value,modelValue:q.value,"onUpdate:modelValue":t[6]||(t[6]=e=>q.value=e),style:{width:"100%"}},{option:g(e=>[l("div",ye,[r(M,{style:A([`background-color:${e.option.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),N(),l("h6",ge,L(e.option.name),1)])]),value:g(e=>[l("div",be,[r(M,{style:A([`background-color:${e.value.color}`,{height:"1.5rem","aspect-ratio":"1 / 1","border-radius":"50%"}])},null,8,["style"]),N(),l("h6",we,L(e.value.name),1)])]),_:1},8,["options","modelValue"])])):_("",!0),o.value?(d(),p("div",Ve,[Se,r(K,{modelValue:$.value,"onUpdate:modelValue":t[7]||(t[7]=e=>$.value=e),cancel:!1},null,8,["modelValue"])])):_("",!0),o.value?(d(),p("div",Pe,[xe,r(u,{options:j.value.filter(e=>e.show_on_web),modelValue:h.value,"onUpdate:modelValue":t[8]||(t[8]=e=>h.value=e),optionValue:"site_id",optionLabel:"site_name",style:{width:"100%"}},null,8,["options","modelValue"])])):_("",!0),o.value&&o.value==9?(d(),p("div",ke,[Re,r(D,{modelValue:E.value,"onUpdate:modelValue":t[9]||(t[9]=e=>E.value=e),style:{width:"100%"},placeholder:"Escriba el número de la orden"},null,8,["modelValue"])])):_("",!0),o.value?(d(),p("div",qe,[Ee,r(O,{modelValue:x.value,"onUpdate:modelValue":t[10]||(t[10]=e=>x.value=e),rows:"5",style:{width:"100%",resize:"none"},placeholder:"Deja tus comentarios"},null,8,["modelValue"])])):_("",!0),o.value&&o.value!=8?(d(),p("div",Ue,[Qe,r(D,{modelValue:S.value,"onUpdate:modelValue":t[11]||(t[11]=e=>S.value=e),style:{width:"100%"},placeholder:"Escriba su nombre por favor"},null,8,["modelValue"])])):_("",!0),o.value&&o.value!=8?(d(),p("div",Ce,[Ie,r(W,{useGrouping:!1,modelValue:P.value,"onUpdate:modelValue":t[12]||(t[12]=e=>P.value=e),style:{width:"100%"},placeholder:"Escriba su número de teléfono"},null,8,["modelValue"])])):_("",!0),o.value&&o.value!=8?(d(),p("div",Ne,[$e,r(D,{modelValue:U.value,"onUpdate:modelValue":t[13]||(t[13]=e=>U.value=e),style:{width:"100%"},placeholder:"Escriba su dirección"},null,8,["modelValue"])])):_("",!0)])])]),_:1},8,["visible"])}}},Te=X(Le,[["__scopeId","data-v-ef103601"]]);export{Te as default};
