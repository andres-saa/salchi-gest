<<<<<<<< HEAD:dist/assets/cancellationOrderRequestSesion-ff415fd5.js
import{_ as ae,r,l as se,a2 as oe,x as E,H as le,y as ne,K as ie,i as re,ag as d,a as p,o as x,c as de,g as a,w as n,b as o,a6 as F,j,t as y,u as A,e as M,k as ce,f as N,p as ue,h as pe}from"./index-9672dc6b.js";import"./index-3ec6abaa.js";import"./_commonjsHelpers-de833af9.js";const D=h=>(ue("data-v-18933649"),h=h(),pe(),h),me=D(()=>o("h3",null,[o("b",null,"Rechazar esta solicitud")],-1)),ve=D(()=>o("h3",null,[o("b",null,"Aprobar esta solicitud")],-1)),_e={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},ye={class:"col-12 md:col-6 p-3"},he={class:"text-xl",style:{width:"100%"}},ge={style:{"text-transform":"capitalize"}},be={class:"md:mt-0 p-input-icon-right m-3"},fe=D(()=>o("i",{class:"pi pi-search"},null,-1)),we={style:{"min-width":"max-content"}},Ce={style:{"min-width":"max-content"}},xe={style:{"min-width":"max-content"}},qe={style:{display:"flex",gap:"0.5rem"}},Se={__name:"cancellationOrderRequestSesion",setup(h){const g=r(!1),v=r([]),b=r(!1),H=se(),i=r({}),L=r([]),q=r({}),J=r({1:"#27ae60",2:"#3498db",3:"#f1c40f",4:"#e74c3c",5:"#9b59b6"}),G=new Audio("/sound/pip1.wav"),K=new Audio("/sound/pip2.wav"),Q=new Audio("/sound/pip3.wav"),z=oe(),W=r(null),S={revisar:d.getPendientsCancellationRequest,aprobadas:d.getaceptedCancellationAcepted,rechazadas:d.getPendientsCancellationRejected};E(v,async()=>{const s=O.value;console.log(s),s.classList.remove("animator"),s.classList.add("animator")},{deep:!0});const X={revisar:d.getPendientsCancellationRequestNoLoading,aprobadas:d.getaceptedCancellationAceptedNoLoading,rechazadas:d.getPendientsCancellationRejectedNoLoading};le(()=>{B()});const I=(s,t)=>{i.value.id=t,s?b.value=!0:g.value=!0},T=async(s,t)=>{const m={authorized:s,responsible_id:H.rawUserData.id,responsible_observation:i.value.reason||"sin observaciones",category_id:q.value.id||5};await d.resolveCancellationRequest(t,m),b.value=!1,g.value=!1,v.value=await S[c.params.request_status]()},$=s=>{const t=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],m=s.split("T"),u=m[0].split("-"),f=u[2],P=parseInt(u[1],10)-1,R=u[0],l=t[P],w=m[1].split(":"),C=parseInt(w[0],10),e=w[1],k=C>=12,V=C%12||12,ee=V<10?`0${V}`:`${V}`,te=k?"PM":"AM";return{date:`${f}-${l}-${R}`,time:`${ee}:${e} ${te}`}},O=r(null),c=ne(),_=r(),B=()=>{_.value={global:{value:null,matchMode:ie.CONTAINS}}};B(),re(async()=>{Y(),W.value=setInterval(async()=>{const s=await d.is_recent_order_generated();if(s&&z.numberCancellationRequests!=s){const t=Math.floor(Math.random()*U.length);U[t].play(),z.numberCancellationRequests=s,Z()}},1e4),L.value=await d.getCancellationCategories()});const Y=async()=>{v.value=await S[c.params.request_status]()},U=[G,K,Q],Z=async()=>{const s=c.params.request_status||"revisar";v.value=await X[s]()};return E(()=>c.params.request_status,async()=>{v.value=await S[c.params.request_status]()},{deep:!0}),(s,t)=>{const m=p("Textarea"),u=p("Button"),f=p("Dialog"),P=p("Dropdown"),R=p("InputText"),l=p("Column"),w=p("Tag"),C=p("DataTable");return x(),de("div",{class:"container",ref_key:"reuqests",ref:O},[a(f,{visible:g.value,"onUpdate:visible":t[2]||(t[2]=e=>g.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:n(()=>[me]),default:n(()=>[o("form",{onSubmit:t[1]||(t[1]=F(e=>T(!1,i.value.id,i.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[a(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:i.value.reason,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),a(u,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),a(f,{visible:b.value,"onUpdate:visible":t[6]||(t[6]=e=>b.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:n(()=>[ve]),default:n(()=>[a(P,{modelValue:q.value,"onUpdate:modelValue":t[3]||(t[3]=e=>q.value=e),optionLabel:"name",options:L.value,placeholder:"CATEGORIA DE LA CANCELACION",class:"mb-3",style:{width:"100%"}},null,8,["modelValue","options"]),o("form",{onSubmit:t[5]||(t[5]=F(e=>T(!0,i.value.id,i.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[a(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:i.value.reason,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value.reason=e),rows:"5",placeholder:"Notas para el solicitante"},null,8,["modelValue"]),a(u,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),a(C,{paginator:!0,rows:15,filters:_.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} solicitudes",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":t[8]||(t[8]=e=>_.value=e),class:"col-12 m-auto",value:v.value,tableStyle:"min-width: 50rem;"},{header:n(()=>[o("div",_e,[o("div",ye,[o("span",he,[j(" Solicitudes de cancelacion - "),o("span",ge,y(A(c).params.request_status.split("-").join(" ")),1)])]),o("span",be,[fe,a(R,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:n(()=>[a(l,{style:{},class:"py-1 pl-0",field:"order_id",header:"ID orden",frozen:""},{body:n(e=>[o("p",we,y(e.data.order_id),1)]),_:1}),a(l,{class:"py-1",field:"site_name",header:"Sede"}),a(l,{class:"py-1",field:"site_name",header:"Fecha"},{body:n(e=>[o("p",Ce,y($(e.data.timestamp).date),1)]),_:1}),a(l,{class:"py-1",field:"site_name",header:"Hora"},{body:n(e=>[o("p",xe,y($(e.data.timestamp).time),1)]),_:1}),a(l,{style:{"min-width":"15rem"},class:"py-1",field:"cancellation_categorie",header:"Categoria"},{body:n(e=>[e.data.cancellation_categorie?(x(),M(w,{key:0,style:ce(`background-color:${J.value[e.data.cancellation_category_id]} ;`)},{default:n(()=>[j(y(e.data.cancellation_categorie),1)]),_:2},1032,["style"])):N("",!0)]),_:1}),a(l,{style:{"min-width":"30rem"},class:"py-1",field:"reason",header:"Motivo"}),a(l,{style:{"min-width":"30rem"},class:"py-1",field:"responsible_observation",header:"Observacion Call center"}),a(l,{style:{"min-width":"10rem"},class:"py-1",field:"responsible",header:"Quien solicita?"}),a(l,{style:{"min-width":"20em"},class:"py-1",field:"user_name",header:"Nombre del cliente"}),a(l,{style:{"min-width":"10rem"},class:"py-1",field:"user_phone",header:"Cel. cliente"}),a(l,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:n(e=>[o("div",qe,[A(c).params.request_status!="aprobadas"?(x(),M(u,{key:0,size:"",onClick:k=>I(!0,e.data.id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):N("",!0),A(c).params.request_status!="rechazadas"?(x(),M(u,{key:1,onClick:k=>I(!1,e.data.id),style:{height:"1.8rem",width:"2rem",background:"var(--primary-color)",border:"none"},severity:"danger",class:"p-1",icon:"pi pi-times"},null,8,["onClick"])):N("",!0)])]),_:1})]),_:1},8,["filters","value"])],512)}}},Ve=ae(Se,[["__scopeId","data-v-18933649"]]);export{Ve as default};
========
import{_ as ae,r,l as se,a2 as oe,x as E,H as le,y as ne,K as ie,i as re,ag as d,a as p,o as x,c as de,g as a,w as n,b as o,a6 as F,j,t as y,u as A,e as M,k as ce,f as N,p as ue,h as pe}from"./index-acdf86d7.js";import"./index-3ec6abaa.js";import"./_commonjsHelpers-de833af9.js";const D=h=>(ue("data-v-36b64b99"),h=h(),pe(),h),me=D(()=>o("h3",null,[o("b",null,"Rechazar esta solicitud")],-1)),ve=D(()=>o("h3",null,[o("b",null,"Aprobar esta solicitud")],-1)),_e={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},ye={class:"col-12 md:col-6 p-3"},he={class:"text-xl",style:{width:"100%"}},be={style:{"text-transform":"capitalize"}},ge={class:"md:mt-0 p-input-icon-right m-3"},fe=D(()=>o("i",{class:"pi pi-search"},null,-1)),we={style:{"min-width":"max-content"}},Ce={style:{"min-width":"max-content"}},xe={style:{"min-width":"max-content"}},qe={style:{display:"flex",gap:"0.5rem"}},Se={__name:"cancellationOrderRequestSesion",setup(h){const b=r(!1),v=r([]),g=r(!1),H=se(),i=r({}),L=r([]),q=r({}),J=r({1:"#27ae60",2:"#3498db",3:"#f1c40f",4:"#e74c3c",5:"#9b59b6"}),G=new Audio("/sound/pip1.wav"),K=new Audio("/sound/pip2.wav"),Q=new Audio("/sound/pip3.wav"),z=oe(),W=r(null),S={revisar:d.getPendientsCancellationRequest,aprobadas:d.getaceptedCancellationAcepted,rechazadas:d.getPendientsCancellationRejected};E(v,async()=>{const s=O.value;console.log(s),s.classList.remove("animator"),s.classList.add("animator")},{deep:!0});const X={revisar:d.getPendientsCancellationRequestNoLoading,aprobadas:d.getaceptedCancellationAceptedNoLoading,rechazadas:d.getPendientsCancellationRejectedNoLoading};le(()=>{B()});const I=(s,t)=>{i.value.id=t,s?g.value=!0:b.value=!0},T=async(s,t)=>{const m={authorized:s,responsible_id:H.rawUserData.id,responsible_observation:i.value.reason||"sin observaciones",category_id:q.value.id||5};await d.resolveCancellationRequest(t,m),g.value=!1,b.value=!1,v.value=await S[c.params.request_status]()},$=s=>{const t=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],m=s.split("T"),u=m[0].split("-"),f=u[2],P=parseInt(u[1],10)-1,R=u[0],l=t[P],w=m[1].split(":"),C=parseInt(w[0],10),e=w[1],k=C>=12,V=C%12||12,ee=V<10?`0${V}`:`${V}`,te=k?"PM":"AM";return{date:`${f}-${l}-${R}`,time:`${ee}:${e} ${te}`}},O=r(null),c=ne(),_=r(),B=()=>{_.value={global:{value:null,matchMode:ie.CONTAINS}}};B(),re(async()=>{Y(),W.value=setInterval(async()=>{const s=await d.is_recent_order_generated();if(s&&z.numberCancellationRequests!=s){const t=Math.floor(Math.random()*U.length);U[t].play(),z.numberCancellationRequests=s,Z()}},1e4),L.value=await d.getCancellationCategories()});const Y=async()=>{v.value=await S[c.params.request_status]()},U=[G,K,Q],Z=async()=>{const s=c.params.request_status||"revisar";v.value=await X[s]()};return E(()=>c.params.request_status,async()=>{v.value=await S[c.params.request_status]()},{deep:!0}),(s,t)=>{const m=p("Textarea"),u=p("Button"),f=p("Dialog"),P=p("Dropdown"),R=p("InputText"),l=p("Column"),w=p("Tag"),C=p("DataTable");return x(),de("div",{class:"container",ref_key:"reuqests",ref:O},[a(f,{visible:b.value,"onUpdate:visible":t[2]||(t[2]=e=>b.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:n(()=>[me]),default:n(()=>[o("form",{onSubmit:t[1]||(t[1]=F(e=>T(!1,i.value.id,i.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[a(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:i.value.reason,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),a(u,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),a(f,{visible:g.value,"onUpdate:visible":t[6]||(t[6]=e=>g.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:n(()=>[ve]),default:n(()=>[a(P,{modelValue:q.value,"onUpdate:modelValue":t[3]||(t[3]=e=>q.value=e),optionLabel:"name",options:L.value,placeholder:"CATEGORIA DE LA CANCELACION",class:"mb-3",style:{width:"100%"}},null,8,["modelValue","options"]),o("form",{onSubmit:t[5]||(t[5]=F(e=>T(!0,i.value.id,i.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[a(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:i.value.reason,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value.reason=e),rows:"5",placeholder:"Notas para el solicitante"},null,8,["modelValue"]),a(u,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),a(C,{paginator:!0,rows:15,filters:_.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} solicitudes",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":t[8]||(t[8]=e=>_.value=e),class:"col-12 m-auto",value:v.value,tableStyle:"min-width: 50rem;"},{header:n(()=>[o("div",_e,[o("div",ye,[o("span",he,[j(" Solicitudes de cancelacion - "),o("span",be,y(A(c).params.request_status.split("-").join(" ")),1)])]),o("span",ge,[fe,a(R,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:n(()=>[a(l,{style:{},class:"py-1 pl-0",field:"order_id",header:"ID orden",frozen:""},{body:n(e=>[o("p",we,y(e.data.order_id),1)]),_:1}),a(l,{class:"py-1",field:"site_name",header:"Sede"}),a(l,{class:"py-1",field:"site_name",header:"Fecha"},{body:n(e=>[o("p",Ce,y($(e.data.timestamp).date),1)]),_:1}),a(l,{class:"py-1",field:"site_name",header:"Hora"},{body:n(e=>[o("p",xe,y($(e.data.timestamp).time),1)]),_:1}),a(l,{style:{"min-width":"15rem"},class:"py-1",field:"cancellation_categorie",header:"Categoria"},{body:n(e=>[e.data.cancellation_categorie?(x(),M(w,{key:0,style:ce(`background-color:${J.value[e.data.cancellation_category_id]} ;`)},{default:n(()=>[j(y(e.data.cancellation_categorie),1)]),_:2},1032,["style"])):N("",!0)]),_:1}),a(l,{style:{"min-width":"30rem"},class:"py-1",field:"reason",header:"Motivo"}),a(l,{style:{"min-width":"30rem"},class:"py-1",field:"responsible_observation",header:"Observacion Call center"}),a(l,{style:{"min-width":"10rem"},class:"py-1",field:"responsible",header:"Quien solicita?"}),a(l,{style:{"min-width":"20em"},class:"py-1",field:"user_name",header:"Nombre del cliente"}),a(l,{style:{"min-width":"10rem"},class:"py-1",field:"user_phone",header:"Cel. cliente"}),a(l,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:n(e=>[o("div",qe,[A(c).params.request_status!="aprobadas"?(x(),M(u,{key:0,size:"",onClick:k=>I(!0,e.data.id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):N("",!0),A(c).params.request_status!="rechazadas"?(x(),M(u,{key:1,onClick:k=>I(!1,e.data.id),style:{height:"1.8rem",width:"2rem",background:"var(--primary-color)",border:"none"},severity:"danger",class:"p-1",icon:"pi pi-times"},null,8,["onClick"])):N("",!0)])]),_:1})]),_:1},8,["filters","value"])],512)}}},Ve=ae(Se,[["__scopeId","data-v-36b64b99"]]);export{Ve as default};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/cancellationOrderRequestSesion-d5c747dd.js
