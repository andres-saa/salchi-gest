import{_ as z,f as c,h as I,u as G,A as J,r as h,o as Y,c as H,d as s,a,w as p,F as K,k as f,t as b,l as Q,bU as $,bM as P,q as W,p as X,e as Z,U as V}from"./index-de8de9e2.js";import{_ as ee}from"./document_image-852a5261.js";import{c as N,d as te,e as oe,b as ae}from"./dropDownAux-1367bfdb.js";import{u as U}from"./sendFileService-8fb2bf1c.js";const m=g=>(X("data-v-d4e5f3e5"),g=g(),Z(),g),se={class:"grid"},le={class:"col-12"},ne={class:""},ie=m(()=>a("span",{class:"p-column-title"},"Image",-1)),re=m(()=>a("div",null,null,-1)),de=m(()=>a("span",{class:"p-column-title"},"name",-1)),ue=m(()=>a("span",{class:"p-column-title"},"Category",-1)),ce={class:"col-12"},pe=m(()=>a("label",{for:"position"},"FECHA DE RENOVACION",-1)),me={class:"p-3",style:{"background-color":"rgba(115, 255, 76, 0.306)"}},ve=m(()=>a("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),_e={style:{display:"flex","justify-content":"space-between"}},he={class:"",style:{display:"flex",padding:"0",margin:"0"}},ye={class:"col-6"},fe=m(()=>a("label",{for:"position"},"TIPO DE DOCUMENTO",-1)),be={class:"col-6"},ge=m(()=>a("label",{for:"position"},"FECHA DE RENOVACION",-1)),we={class:"p-3",style:{"background-color":"rgba(19, 164, 0, 0.306)"}},Ce=m(()=>a("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),Se={style:{display:"flex","justify-content":"space-between"}},ke={__name:"ShowRecibos",setup(g){const C=c([]),i=c(),r=c(),T=c(["CÁMARA DE COMERCIO","USO DE SUELOS","RUT","BOMBEROS","CONCEPTO SANITARIO","SAYCO Y ACIMPRO"]),v=c({});I(()=>{const t=localStorage.getItem("currentSiteFiles");t&&(v.value=JSON.parse(t))});const d=c(""),y=c(""),S=G(),k=J();C.value=N.value;const O=t=>{const e=t.target.files[0];e&&(console.log("Archivo seleccionado:",e),i.value=e)},F=async t=>{let e="post";const u=`${V}/site-document/`,l={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};await fetch(u,l).then(n=>{if(!n.ok)throw new Error(`Error en la solicitud: ${n.status}`);return n.json()}).then(n=>{}).catch(n=>{})},x=async(t,e)=>{let u="put";const l=`${V}/site-document/${e}`,n={method:u,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};await fetch(l,n).then(_=>{if(!_.ok)throw new Error(`Error en la solicitud: ${_.status}`);return _.json()}).then(_=>{}).catch(_=>{})};I(()=>{te(S.params.site_id),console.log(oe)});const w=c(!1),R=c(!1),M=(t,e,u)=>{const l=N.value.some(n=>n.document_type==d.value);if(console.log(C,d.value),console.log(l),l)k.add({severity:"error",summary:`Ya hay cargado un ${d.value} para ${v.value.site_name} pero puede renovarlo si gusta  `,detail:"",life:3e3});else{const n={document_name:`${v.value.site_name} ${d.value}`,document_type:d.value,renovation_date:y.value,site_id:S.params.site_id};F(n),U(t,e,u),k.add({severity:"success",summary:"hecho",detail:"",life:3e3}),E()}},B=(t,e,u)=>{console.log(C,d.value);{const l={document_name:`${r.value.document_name}`,document_type:r.value.document_type,renovation_date:y.value,site_id:S.params.site_id};console.log(l),x(l,r.value.document_id),U(t,e,u),k.add({severity:"success",summary:"hecho",detail:"",life:3e3}),E()}},q=t=>{w.value=!0,r.value=t},E=()=>{w.value=!1,R.value=!1};return(t,e)=>{const u=h("Toast"),l=h("Button"),n=h("Column"),_=h("Calendar"),A=h("Dialog"),L=h("Dropdown"),j=h("DataTable");return Y(),H(K,null,[s(u),a("div",se,[a("div",le,[a("div",ne,[s(j,{ref:"dt",value:[],dataKey:"id",paginator:!0,rows:10,filters:t.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh",frozenValue:t.lockedCustomers},{header:p(()=>[s(l,{label:"SUBIR UN RECIBO",style:{width:"100%"},class:"p-button-rounded p-button-danger mr-0"})]),default:p(()=>[s(n,{header:"",headerStyle:"width:0%; min-width:5rem;"},{body:p(o=>[ie,a("img",{src:ee,class:"shadow-2",width:"100",onClick:e[0]||(e[0]=(...D)=>t.cambiar&&t.cambiar(...D))}),re]),_:1}),s(n,{field:"name",header:"Nombre Documento",sortable:!0,headerStyle:"width:30%; min-width:5rem; "},{body:p(o=>[de,f(" "+b(o.data.document_type),1)]),_:1}),s(n,{field:"position",header:"Responsable",sortable:!0,headerStyle:"width:30%; min-width:10rem;"},{body:p(o=>[ue,f(" "+b(o.data.document_name),1)]),_:1}),s(n,{field:"birth_date",header:"Fecha de renovacion",sortable:!0,headerStyle:"width:12%; min-width:10rem;"},{body:p(o=>[f(b(o.data.renovation_date),1)]),_:1}),s(n,{fieldheaderStyle:"width:30%; min-width:10rem;",frozen:"",alignFrozen:"right"},{body:p(o=>[s(l,{label:"DESCARGAR",style:{width:"100%"},class:"p-button-rounded p-button-success mr-2 mb-2",onClick:D=>Q(ae)(v.value.site_name,o.data.document_type)},null,8,["onClick"]),s(l,{label:"RENOVAR",style:{width:"100%"},class:"p-button-rounded p-button-danger mr-0",onClick:D=>q(o.data)},null,8,["onClick"])]),_:1}),s(A,{header:` CARGAR ${r.value?r.value.document_type:""} PARA ${v.value.site_name}`,visible:w.value,"onUpdate:visible":e[4]||(e[4]=o=>w.value=o),breakpoints:{"960px":"75vw"},style:{width:"50vw",padding:"50p0x"},modal:!0},{default:p(()=>[a("input",{ref:"fileInput",type:"file",accept:".pdf",onChange:O,style:{display:"none"}},null,544),a("div",ce,[pe,s(_,{id:"entry_date",style:{width:"100%",margin:"20px 0"},modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=o=>y.value=o),required:"true",autofocus:""},null,8,["modelValue"])]),$(a("p",me,[ve,f(" "+b(i.value?i.value.name:""),1)],512),[[P,i.value]]),a("div",_e,[s(l,{label:"Seleccionar documento",style:{width:"40%","background-color":"var(--primary-color)"},onClick:e[2]||(e[2]=o=>{t.$refs.fileInput.click()})}),s(l,{label:"Enviar",style:{width:"40%","background-color":"var(--primary-color)"},onClick:e[3]||(e[3]=o=>B(i.value,r.value.document_type,v.value.site_name))})])]),_:1},8,["header","visible"]),s(A,{header:` CARGAR ${r.value?r.value.document_type:""} PARA ${v.value.site_name}`,visible:R.value,"onUpdate:visible":e[9]||(e[9]=o=>R.value=o),breakpoints:{"960px":"75vw"},style:{width:"50vw",padding:"50p0x"},modal:!0},{default:p(()=>[a("div",he,[a("div",ye,[fe,s(L,{modelValue:d.value,"onUpdate:modelValue":e[5]||(e[5]=o=>d.value=o),modelModifiers:{trim:!0},options:T.value,placeholder:"",required:"true",class:W({"p-invalid":t.submitted&&!t.currentUser.position}),style:{width:"100%",margin:"20px 0"}},null,8,["modelValue","options","class"])]),a("div",be,[ge,s(_,{id:"entry_date",style:{width:"100%",margin:"20px 0"},modelValue:y.value,"onUpdate:modelValue":e[6]||(e[6]=o=>y.value=o),required:"true",autofocus:""},null,8,["modelValue"])])]),a("input",{ref:"fileInput",type:"file",accept:".pdf",onChange:O,style:{display:"none"}},null,544),$(a("p",we,[Ce,f(" "+b(i.value?i.value.name:""),1)],512),[[P,i.value]]),a("div",Se,[s(l,{label:"Seleccionar documento",style:{width:"40%","background-color":"var(--primary-color)"},onClick:e[7]||(e[7]=o=>{t.$refs.fileInput.click()})}),s(l,{label:"Enviar",style:{width:"40%","background-color":"var(--primary-color)"},onClick:e[8]||(e[8]=o=>M(i.value,d.value,v.value.site_name))})])]),_:1},8,["header","visible"])]),_:1},8,["filters","frozenValue"])])])])],64)}}},Ae=z(ke,[["__scopeId","data-v-d4e5f3e5"]]);export{Ae as default};
