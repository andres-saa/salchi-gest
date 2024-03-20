import{_ as ve,c5 as _e,f as d,x as he,u as ge,B as we,h as Q,g as be,r as f,o as z,c as I,d as a,w as i,a as o,F as W,U as m,l as k,c6 as S,b as xe,t as D,k as O,c0 as X,bU as Y,q as Ce,n as ke,p as Ee,e as $e}from"./index-f46c65fd.js";import{b as Te}from"./dropDownAux-3f0bb8e8.js";import{u as Z}from"./sendFileService-2b5b4814.js";import{u as Se}from"./directorio-5f65520c.js";/* empty css                                                                  */const n=V=>(Ee("data-v-eaeaf23c"),V=V(),$e(),V),De=n(()=>o("h3",null,"Tipos de archivo",-1)),Ve=n(()=>o("p",{class:"text-xl",style:{"font-weight":"bold"},for:"type_name"},"Nuevo",-1)),Ne={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Pe=n(()=>o("p",{class:"text-xl my-4",style:{"font-weight":"bold"},for:"type_name"},"Editar exixtentes",-1)),je={class:"col-12 p-0",style:{display:"flex",gap:"1rem","justify-content":"space-between"}},Le=n(()=>o("i",{class:"fa-solid fa-trash-can text-2xl"},null,-1)),Ue=n(()=>o("div",null,null,-1)),ze={class:"col-12 p-0 m-auto",style:{}},Ie={class:""},Oe={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Re={class:"mt-4 col-12 md:col-6 xl:col-4 p-0",style:{display:"flex","max-width":"35rem","justify-content":"end",gap:"1rem"}},Ae=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),Fe=n(()=>o("i",{class:"fa-solid fa-file mr-2 text-2xl"},null,-1)),qe=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),Be=n(()=>o("i",{class:"fa-solid fa-house mr-2 text-2xl"},null,-1)),Je=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),He=n(()=>o("i",{class:"fa-solid fa-font"},null,-1)),Me={style:{"min-width":"max-content"}},Ge=n(()=>o("span",{class:"p-column-title"},"Category",-1)),Ke={style:{"min-width":"max-content"}},Qe={style:{display:"flex"}},We=n(()=>o("i",{class:"fa-solid fa-file-arrow-down"},null,-1)),Xe=n(()=>o("i",{class:"fa-solid fa-pen-to-square"},null,-1)),Ye=n(()=>o("i",{class:"fa-solid fa-trash"},null,-1)),Ze={class:"col-12 p-0",style:{}},et=n(()=>o("label",{for:"position"},"FECHA DE RENOVACION",-1)),tt={class:"p-3",style:{"background-color":"rgba(115, 255, 76, 0.306)"}},ot=n(()=>o("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),st={class:"grid",style:{display:"flex","justify-content":"space-between"}},at={class:"col-12 xl:col-6"},lt={class:"col-12 xl:col-6"},nt={class:"grid",style:{}},it={class:"col-12"},rt=n(()=>o("label",{for:"position"},"TIPO DE DOCUMENTO",-1)),dt={class:"col-12"},ct=n(()=>o("label",{for:"position"},"FECHA DE RENOVACION",-1)),ut={class:"p-3",style:{"background-color":"rgba(19, 164, 0, 0.306)"}},pt=n(()=>o("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),mt={class:"",style:{display:"flex","justify-content":"space-between",gap:"1rem","flex-direction":"column"}},yt=n(()=>o("h3",null,"Nueva Sede",-1)),ft={class:""},vt=n(()=>o("p",{class:"mt-4"},"Nombre de la Sede:",-1)),_t=n(()=>o("p",{class:"mt-4"},"Dirección:",-1)),ht=n(()=>o("p",{class:"mt-4"},"Teléfono:",-1)),gt={key:0,style:{"margin-top":"20px"}},wt=["src"],bt=n(()=>o("i",{class:"fa-solid fa-camera"},null,-1)),xt={__name:"ShowFiles",setup(V){const R=Se(),H=_e(),A=d(!1),E=d(""),ee=async()=>{if(!E.value){alert("Por favor, ingrese un nombre para el tipo de documento.");return}try{const t=await fetch(`${m}/site-file-type`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type_name:E.value})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();console.log("Tipo de documento agregado:",e),E.value="",N()}catch(t){console.error("Error al agregar el tipo de documento:",t)}},v=he(),M=d([]),c=d(),_=d(),$=d([]),F=d(),h=d(""),g=d(""),q=ge(),T=d({}),u=we();M.value=F.value;const G=t=>{const e=t.target.files[0];e&&(console.log("Archivo seleccionado:",e),c.value=e)},N=async()=>{try{const t=await fetch(`${m}/site-file-types`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();$.value=e}catch(t){console.error("Error al obtener los tipos de documentos:",t)}},te=t=>{H.require({target:event.currentTarget,message:`Esta seguro de eliminar ${t.document_name}`,icon:"pi pi-exclamation-triangle",rejectClass:"p-button-info p-button-outlined p-button-sm",acceptClass:"p-button-sm p-button-danger",rejectLabel:"Cancelar",acceptLabel:"Eliminar",accept:()=>{oe(t)},reject:()=>{}})},oe=async t=>{try{if(!(await fetch(`${m}/site_document/${t.document_id}`,{method:"DELETE"})).ok)throw new Error("Error al eliminar el documento");b(),u.add({severity:"success",summary:"Documento eliminado",detail:"El documento ha sido eliminado correctamente.",life:3e3})}catch(e){console.error("Error al eliminar el documento:",e),u.add({severity:"error",summary:"Error al eliminar",detail:"No se pudo eliminar el documento.",life:3e3})}},se=async t=>{let e="post";const l=`${m}/site-document/`,r={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return(await fetch(l,r)).json()},b=async()=>{var t;try{const e=((t=R==null?void 0:R.currentSite)==null?void 0:t.site_id)||1,l=`${m}/get-site-documents-info/${e}`,r=await fetch(l);if(console.log(r),!r.ok)return;const p=await r.json();F.value=p}catch(e){console.error("Error al enviar la solicitud:",e)}},ae=async t=>{let e="put";const l={...t},r=`${m}/site-document/${l.document_id}`;l.renovation_date=g.value;const p={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};try{const y=await fetch(r,p);if(!y.ok)throw new Error(`Error en la solicitud: ${y.status}`);const x=await y.json();return b(),B(),u.add({severity:"success",summary:"Actualización exitosa",detail:"Documento actualizado correctamente",life:3e3}),x}catch(y){u.add({severity:"error",summary:"Error en la actualización",detail:y.message,life:3e3})}};Q(()=>{b(),v.setLoading(!0),v.setLoading(!1),N()}),be(()=>q.params.site_id,()=>{b(),v.setLoading(!0),v.setLoading(!1)}),Q(()=>{const t=localStorage.getItem("currentSiteFiles");t&&(T.value=JSON.parse(t))});const le=async t=>{try{const e=await fetch(`${m}/site-file-type/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({type_name:t.type_name})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const l=await e.json();console.log("Tipo de documento actualizado:",l),u.add({severity:"success",summary:"Actualizado",detail:"Tipo de archivo actualizado con éxito",life:3e3})}catch(e){console.error("Error al actualizar el tipo de documento:",e),u.add({severity:"error",summary:"Error al actualizar",detail:"No se pudo actualizar el tipo de archivo.",life:3e3})}},P=d(!1),j=d(!1),ne=(t,e,l)=>{const r={document_name:`${T.value.site_name} ${h.value.type_name}`,document_type:h.value.type_name,renovation_date:g.value,site_id:q.params.site_id};se(r).then(p=>{console.log(p),Z(t,p.document_id,h.value.type_name),b()}),u.add({severity:"success",summary:"hecho",detail:"",life:3e3}),B()},ie=(t,e)=>{console.log(M,h.value),`${_.value.document_name}`,_.value.document_type,g.value,q.params.site_id,console.log(e),ae(e),Z(t,e.document_id,e.document_type),u.add({severity:"success",summary:"hecho",detail:"",life:3e3}),B()},re=t=>{P.value=!0,_.value=t},de=t=>{j.value=!0,_.value=t},B=()=>{P.value=!1,j.value=!1,c.value=null,b()},L=d(null),U=d(!1),w=d({site_name:"",site_address:"",site_phone:"",site_business_hours:""}),J=d(null);d(null);const ce=()=>{U.value=!0,L.value=null},ue=t=>{const e=t.target.files[0];J.value=e,e&&(L.value=URL.createObjectURL(e))},pe=async()=>{try{const t=await fetch(`${m}/site`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)});if(!t.ok)throw new Error("Error al crear la sede");const l=(await t.json()).site_id;if(J.value){const r=new FormData;r.append("file",J.value),await fetch(`${m}/upload-product-image/site-${l}`,{method:"POST",body:r})}U.value=!1}catch(t){console.error("Error al crear la sede:",t)}},me=async t=>{H.require({target:event.currentTarget,message:"¿Está seguro de que desea eliminar este tipo de archivo?",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-info p-button-outlined p-button-sm",acceptClass:"p-button-sm p-button-danger",rejectLabel:"Cancelar",acceptLabel:"Eliminar",accept:async()=>{try{if(v.setLoading(!0,"eliminando"),!(await fetch(`${m}/site-file-type/${t}`,{method:"DELETE"})).ok)throw new Error("Error al eliminar el tipo de archivo");$.value=$.value.filter(l=>l.type_id!==t),u.add({severity:"success",summary:"Eliminado",detail:"Tipo de archivo eliminado con éxito",life:3e3}),v.setLoading(!1,"eliminando"),N()}catch(e){v.setLoading(!1,"eliminando"),console.error("Error al eliminar el tipo de archivo:",e),u.add({severity:"error",summary:"Error al eliminar",detail:"No se pudo eliminar el tipo de archivo.",life:3e3}),N()}}})};return(t,e)=>{const l=f("Button"),r=f("Dialog"),p=f("Toast"),y=f("ConfirmPopup"),x=f("Column"),ye=f("DataTable"),K=f("Calendar"),fe=f("Dropdown");return z(),I(W,null,[a(r,{visible:A.value,"onUpdate:visible":e[1]||(e[1]=s=>A.value=s),style:{width:"450px"},modal:!0},{header:i(()=>[De]),default:i(()=>[o("div",null,[Ve,a(k(S),{class:"col-12",id:"type_name",modelValue:E.value,"onUpdate:modelValue":e[0]||(e[0]=s=>E.value=s)},null,8,["modelValue"])]),o("div",Ne,[a(l,{class:"my-4",label:"Agregar",onClick:ee})]),Pe,(z(!0),I(W,null,xe($.value,s=>(z(),I("div",{class:"my-2 col-12 p-0",key:s.type_id},[o("div",je,[a(k(S),{class:"col-11",modelValue:s.type_name,"onUpdate:modelValue":C=>s.type_name=C,onBlur:C=>le(s)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),a(l,{rounded:"",style:{"aspect-ratio":"1 / 1",width:"3rem",height:"3rem",display:"flex","justify-content":"center"},severity:"danger",text:"",class:"pi-button-rounded",onClick:C=>me(s.id)},{default:i(()=>[Le]),_:2},1032,["onClick"])])]))),128)),Ue]),_:1},8,["visible"]),a(p),o("div",ze,[a(p),a(y),o("div",Ie,[a(ye,{ref:"dt",value:F.value,dataKey:"id",paginator:!0,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll",frozenValue:t.lockedCustomers},{header:i(()=>[]),default:i(()=>[o("div",Oe,[o("div",Re,[a(l,{size:"small ",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-info py-2",onClick:e[2]||(e[2]=s=>de())},{default:i(()=>[Ae,Fe]),_:1}),a(l,{size:"small ",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-warning py-2",onClick:ce},{default:i(()=>[qe,Be]),_:1}),a(l,{size:"small ",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-success py-2",onClick:e[3]||(e[3]=s=>A.value=!0)},{default:i(()=>[Je,He]),_:1})])]),a(x,{class:"",field:"name",header:"Tipo",sortable:!0,headerStyle:"width:20rem; min-width:max-content; "},{body:i(s=>[o("p",Me,D(s.data.document_type),1)]),_:1}),a(x,{class:"py-0",field:"position",header:"Nombre ",sortable:!0,headerStyle:"width:20rem; min-width:10rem;"},{body:i(s=>[Ge,o("p",Ke,D(s.data.document_name),1)]),_:1}),a(x,{class:"p-0",field:"birth_date",header:"Renovacion",sortable:!0,headerStyle:"width:5rem; min-width:10rem;"},{body:i(s=>[O(D(s.data.renovation_date),1)]),_:1}),a(x,{style:{},class:"py-0",header:"Acciones",fieldheaderStyle:"width:10rem; min-width:max-content",frozen:"",alignFrozen:"right"},{body:i(s=>[o("div",Qe,[a(l,{text:"",size:"large",style:{"aspect-ratio":"1 / 1"},class:"p-button-success mr-2 mb-2 p-0 text-3xl",onClick:C=>k(Te)(s.data.document_id,s.data.document_type)},{default:i(()=>[We]),_:2},1032,["onClick"]),a(l,{text:"",size:"large",style:{},class:"p-button-info mr-2 mb-2 p-0 text-3xl",onClick:C=>re(s.data)},{default:i(()=>[Xe]),_:2},1032,["onClick"]),a(l,{text:"",size:"large",style:{},class:"p-button-danger mr-2 mb-2 p-0 text-3xl",onClick:C=>te(s.data)},{default:i(()=>[Ye]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["value","frozenValue"]),a(r,{class:"p-0",closable:!0,header:` CARGAR PARA ${T.value.site_name}`,visible:P.value,"onUpdate:visible":e[7]||(e[7]=s=>P.value=s),style:{width:"5000px"},modal:!0},{default:i(()=>[o("input",{ref:"fileInput",type:"file",onChange:G,style:{display:"none"}},null,544),o("div",Ze,[et,a(K,{id:"entry_date",style:{width:"100%",margin:"20px 0"},modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=s=>g.value=s),required:"true",autofocus:""},null,8,["modelValue"])]),X(o("p",tt,[ot,O(" "+D(c.value?`${c.value.name} : si este no es
                    su documento por
                    favor carguelo`:""),1)],512),[[Y,c.value]]),o("div",st,[o("div",at,[a(l,{label:"Seleccionar documento",class:"col-12",style:{"background-color":"var(--primary-color)"},onClick:e[5]||(e[5]=s=>{t.$refs.fileInput.click()})})]),o("div",lt,[a(l,{class:"col-12",label:"Enviar",style:{"background-color":"var(--primary-color)"},onClick:e[6]||(e[6]=s=>ie(c.value,_.value))})])])]),_:1},8,["header","visible"]),a(r,{header:` CARGAR ${_.value?_.value:""} PARA ${T.value.site_name}`,visible:j.value,"onUpdate:visible":e[12]||(e[12]=s=>j.value=s),style:{width:"450px"},modal:!0},{default:i(()=>[o("div",nt,[o("div",it,[rt,a(fe,{modelValue:h.value,"onUpdate:modelValue":e[8]||(e[8]=s=>h.value=s),modelModifiers:{trim:!0},options:$.value,optionLabel:"type_name",placeholder:"",required:"true",class:Ce({"p-invalid":t.submitted}),style:{width:"100%",margin:"20px 0"}},null,8,["modelValue","options","class"])]),o("div",dt,[ct,a(K,{id:"entry_date",style:{width:"100%",margin:"20px 0"},modelValue:g.value,"onUpdate:modelValue":e[9]||(e[9]=s=>g.value=s),required:"true",autofocus:""},null,8,["modelValue"])])]),o("input",{ref:"fileInput",type:"file",onChange:G,style:{display:"none"}},null,544),X(o("p",ut,[pt,O(" "+D(c.value?`${c.value.name} : verifique si
                    este es su documeto
                    antes de envirlo`:""),1)],512),[[Y,c.value]]),o("div",mt,[a(l,{class:"",severity:"help",label:"Seleccionar documento",style:{width:"100%"},onClick:e[10]||(e[10]=s=>{t.$refs.fileInput.click()})}),a(l,{label:"Enviar",style:{width:"100%"},severity:"success",onClick:e[11]||(e[11]=s=>ne(c.value,h.value,T.value.site_id))})])]),_:1},8,["header","visible"])])]),a(r,{visible:U.value,"onUpdate:visible":e[17]||(e[17]=s=>U.value=s),style:{width:"450px",padding:"0px"},modal:!0},{header:i(()=>[yt]),footer:i(()=>[a(l,{onClick:pe},{default:i(()=>[O("Crear Sede")]),_:1})]),default:i(()=>[o("div",ft,[vt,a(k(S),{class:"col-12",modelValue:w.value.site_name,"onUpdate:modelValue":e[13]||(e[13]=s=>w.value.site_name=s)},null,8,["modelValue"])]),o("div",null,[_t,a(k(S),{class:"col-12",modelValue:w.value.site_address,"onUpdate:modelValue":e[14]||(e[14]=s=>w.value.site_address=s)},null,8,["modelValue"])]),o("div",null,[ht,a(k(S),{class:"col-12",modelValue:w.value.site_phone,"onUpdate:modelValue":e[15]||(e[15]=s=>w.value.site_phone=s)},null,8,["modelValue"])]),L.value?(z(),I("div",gt,[o("img",{src:L.value,alt:"Vista previa de la imagen",style:{"max-width":"100%","max-height":"300px"}},null,8,wt)])):ke("",!0),a(l,{class:"my-5",onClick:e[16]||(e[16]=s=>t.$refs.imageInput.click())},{default:i(()=>[bt]),_:1}),o("input",{type:"file",ref:"imageInput",onChange:ue,style:{display:"none"}},null,544)]),_:1},8,["visible"])],64)}}},St=ve(xt,[["__scopeId","data-v-eaeaf23c"]]);export{St as default};
