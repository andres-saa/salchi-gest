import{_ as we,ca as xe,S as Ce,r as d,M as Ee,A as Se,x as $e,i as Z,D as Te,a as g,o as R,c as F,g as s,w as i,b as o,F as ee,U as v,u as S,cb as V,d as ke,t as N,m as z,I as te,J as oe,n as De,f as Ve,p as Ne,h as je}from"./index-67d4dcac.js";import{a as Pe}from"./dropDownAux-d3e0f07e.js";import{u as ae}from"./sendFileService-eb760896.js";import{s as Le}from"./siteService-bf3de3f6.js";/* empty css                                                                  */const n=j=>(Ne("data-v-e065b7ab"),j=j(),je(),j),Ue=n(()=>o("h3",null,"Tipos de archivo",-1)),Ie=n(()=>o("p",{class:"text-xl",style:{"font-weight":"bold"},for:"type_name"},"Nuevo",-1)),Oe={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Re=n(()=>o("p",{class:"text-xl my-4",style:{"font-weight":"bold"},for:"type_name"},"Editar exixtentes",-1)),Fe={class:"col-12 p-0",style:{display:"flex",gap:"1rem","justify-content":"space-between"}},ze=n(()=>o("i",{class:"fa-solid fa-trash-can text-2xl"},null,-1)),Ae=n(()=>o("div",null,null,-1)),qe={class:"col-12 p-0 mx-auto",style:{"margin-top":"0rem"}},Be={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Je={class:"mt-4 col-12 md:col-6 xl:col-4 p-0",style:{display:"flex","max-width":"35rem","justify-content":"end",gap:"1rem"}},Me=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),He=n(()=>o("i",{class:"fa-solid fa-file mr-2 text-2xl"},null,-1)),Ge=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),Ke=n(()=>o("i",{class:"fa-solid fa-house mr-2 text-2xl"},null,-1)),Qe=n(()=>o("i",{class:"fa-solid fa-plus mr-2 text-2xl"},null,-1)),We=n(()=>o("i",{class:"fa-solid fa-font"},null,-1)),Xe={style:{"min-width":"max-content"}},Ye=n(()=>o("span",{class:"p-column-title"},"Category",-1)),Ze={style:{"min-width":"max-content"}},et={style:{display:"flex"}},tt=n(()=>o("i",{class:"fa-solid fa-file-arrow-down"},null,-1)),ot=n(()=>o("i",{class:"fa-solid fa-pen-to-square"},null,-1)),at=n(()=>o("i",{class:"fa-solid fa-trash"},null,-1)),st={class:"col-12 p-0",style:{}},lt=n(()=>o("label",{for:"position"},"FECHA DE RENOVACION",-1)),nt={class:"p-3",style:{"background-color":"rgba(115, 255, 76, 0.306)"}},it=n(()=>o("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),rt={class:"grid",style:{display:"flex","justify-content":"space-between"}},dt={class:"col-12 xl:col-6"},ct={class:"col-12 xl:col-6"},ut={class:"grid",style:{}},pt={class:"col-12"},mt=n(()=>o("label",{for:"position"},"TIPO DE DOCUMENTO",-1)),yt={class:"col-12"},ft=n(()=>o("label",{for:"position"},"FECHA DE RENOVACION",-1)),vt={class:"p-3",style:{"background-color":"rgba(19, 164, 0, 0.306)"}},_t=n(()=>o("i",{class:"pi pi-check",style:{color:"slateblue"}},null,-1)),ht={class:"",style:{display:"flex","justify-content":"space-between",gap:"1rem","flex-direction":"column"}},gt=n(()=>o("h3",null,"Nueva Sede",-1)),bt={class:""},wt=n(()=>o("p",{class:"mt-4"},"Nombre de la Sede:",-1)),xt=n(()=>o("p",{class:"mt-4"},"Dirección:",-1)),Ct=n(()=>o("p",{class:"mt-4"},"Teléfono:",-1)),Et={key:0,style:{"margin-top":"20px"}},St=["src"],$t=n(()=>o("i",{class:"fa-solid fa-camera"},null,-1)),Tt={__name:"ShowFiles",setup(j){const b=xe(),M=Ce(),A=d(!1),$=d(""),se=async()=>{if(!$.value){alert("Por favor, ingrese un nombre para el tipo de documento.");return}try{const t=await fetch(`${v}/site-file-type`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type_name:$.value})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();console.log("Tipo de documento agregado:",e),$.value="",P()}catch(t){console.error("Error al agregar el tipo de documento:",t)}},p=Ee(),le=d([]),c=d(),x=d(),T=d([]),q=d(),h=d(""),m=d(""),k=Se(),D=d({}),y=$e();le.value=q.value;const H=t=>{const e=t.target.files[0];e&&(console.log("Archivo seleccionado:",e),c.value=e)},P=async()=>{try{const t=await fetch(`${v}/site-file-types`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();T.value=e}catch(t){console.error("Error al obtener los tipos de documentos:",t)}},ne=t=>{M.require({target:event.currentTarget,message:`Esta seguro de eliminar ${t.document_name}`,icon:"pi pi-exclamation-triangle",rejectClass:"p-button-info p-button-outlined p-button-sm",acceptClass:"p-button-sm p-button-danger",rejectLabel:"Cancelar",acceptLabel:"Eliminar",accept:()=>{ie(t)},reject:()=>{}})},ie=async t=>{try{if(!(await fetch(`${v}/site_document/${t.document_id}`,{method:"DELETE"})).ok)throw new Error("Error al eliminar el documento");C(),y.add({severity:"success",summary:"Documento eliminado",detail:"El documento ha sido eliminado correctamente.",life:3e3})}catch(e){console.error("Error al eliminar el documento:",e),y.add({severity:"error",summary:"Error al eliminar",detail:"No se pudo eliminar el documento.",life:3e3})}},re=async t=>{if(!c.value){alert("seleccione un archivo");return}let e="post";const l=`${v}/site-document/`,r={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return(await fetch(l,r)).json()},C=async()=>{var t;try{const e=((t=b==null?void 0:b.currentSite)==null?void 0:t.site_id)||k.params.site_id,l=`${v}/get-site-documents-info/${e}`,r=await fetch(l);if(console.log(r),!r.ok)return;const f=await r.json();q.value=f}catch(e){console.error("Error al enviar la solicitud:",e)}},de=async t=>{if(!m.value){alert("la recha de renovacion es obligatoria");return}let e="put";const l={...t},r=`${v}/site-document/${l.document_id}`;l.renovation_date=m.value;const f={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};try{const u=await fetch(r,f);if(!u.ok)throw new Error(`Error en la solicitud: ${u.status}`);const E=await u.json();return C(),B(),y.add({severity:"success",summary:"Actualización exitosa",detail:"Documento actualizado correctamente",life:3e3}),E}catch(u){y.add({severity:"error",summary:"Error en la actualización",detail:u.message,life:3e3})}};Z(async()=>{var e;const t=((e=b==null?void 0:b.currentSite)==null?void 0:e.site_id)||k.params.site_id;b.currentSite=await Le.getSiteById(t),C(),p.setLoading(!0),p.setLoading(!1),P()}),Te(()=>k.params.site_id,()=>{C(),p.setLoading(!0),p.setLoading(!1)}),Z(()=>{const t=localStorage.getItem("currentSiteFiles");t&&(D.value=JSON.parse(t))});const ce=async t=>{try{const e=await fetch(`${v}/site-file-type/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({type_name:t.type_name})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const l=await e.json();console.log("Tipo de documento actualizado:",l),y.add({severity:"success",summary:"Actualizado",detail:"Tipo de archivo actualizado con éxito",life:3e3})}catch(e){console.error("Error al actualizar el tipo de documento:",e),y.add({severity:"error",summary:"Error al actualizar",detail:"No se pudo actualizar el tipo de archivo.",life:3e3})}},L=d(!1),U=d(!1),ue=(t,e,l)=>{var f;if(!m.value){alert("la fecha de renovacion es obligatoria");return}if(!((f=h.value)!=null&&f.type_name)){alert("debe elegir un tipo de archivo");return}if(!t){alert("debe subir un  archivo");return}const r={document_name:`${D.value.site_name} ${h.value.type_name}`,document_type:h.value.type_name,renovation_date:m.value,site_id:k.params.site_id};p.setLoading(!0,"enviando"),re(r).then(u=>{p.setLoading(!1,"enviando"),console.log(u),ae(t,u.document_id,h.value.type_name),C()}),y.add({severity:"success",summary:"hecho",detail:"",life:3e3}),B(),p.setLoading(!1,"enviando")},pe=(t,e)=>{if(!m.value){alert("la fecha de renovecion es obligatoria");return}`${x.value.document_name}`,x.value.document_type,m.value,k.params.site_id,console.log(e),de(e),ae(t,e.document_id,e.document_type),y.add({severity:"success",summary:"hecho",detail:"",life:3e3}),B()},me=t=>{L.value=!0,x.value=t},ye=t=>{U.value=!0,x.value=t},B=()=>{L.value=!1,U.value=!1,c.value=null,C()},I=d(null),O=d(!1),w=d({site_name:"",site_address:"",site_phone:"",site_business_hours:""}),J=d(null);d(null);const fe=()=>{O.value=!0,I.value=null},ve=t=>{const e=t.target.files[0];J.value=e,e&&(I.value=URL.createObjectURL(e))},_e=async()=>{try{const t=await fetch(`${v}/site`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)});if(!t.ok)throw new Error("Error al crear la sede");const l=(await t.json()).site_id;if(J.value){const r=new FormData;r.append("file",J.value),await fetch(`${v}/upload-product-image/site-${l}`,{method:"POST",body:r})}O.value=!1}catch(t){console.error("Error al crear la sede:",t)}},he=async t=>{M.require({target:event.currentTarget,message:"¿Está seguro de que desea eliminar este tipo de archivo?",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-info p-button-outlined p-button-sm",acceptClass:"p-button-sm p-button-danger",rejectLabel:"Cancelar",acceptLabel:"Eliminar",accept:async()=>{try{if(p.setLoading(!0,"eliminando"),!(await fetch(`${v}/site-file-type/${t}`,{method:"DELETE"})).ok)throw new Error("Error al eliminar el tipo de archivo");T.value=T.value.filter(l=>l.type_id!==t),y.add({severity:"success",summary:"Eliminado",detail:"Tipo de archivo eliminado con éxito",life:3e3}),p.setLoading(!1,"eliminando"),P()}catch(e){p.setLoading(!1,"eliminando"),console.error("Error al eliminar el tipo de archivo:",e),y.add({severity:"error",summary:"Error al eliminar",detail:"No se pudo eliminar el tipo de archivo.",life:3e3}),P()}}})};return(t,e)=>{var K,Q,W,X,Y;const l=g("Button"),r=g("Dialog"),f=g("Toast"),u=g("ConfirmPopup"),E=g("Column"),ge=g("DataTable"),G=g("Calendar"),be=g("Dropdown");return R(),F(ee,null,[s(r,{visible:A.value,"onUpdate:visible":e[1]||(e[1]=a=>A.value=a),style:{width:"450px"},modal:!0},{header:i(()=>[Ue]),default:i(()=>[o("div",null,[Ie,s(S(V),{class:"col-12",id:"type_name",modelValue:$.value,"onUpdate:modelValue":e[0]||(e[0]=a=>$.value=a)},null,8,["modelValue"])]),o("div",Oe,[s(l,{class:"my-4",label:"Agregar",onClick:se})]),Re,(R(!0),F(ee,null,ke(T.value,a=>(R(),F("div",{class:"my-2 col-12 p-0",key:a.type_id},[o("div",Fe,[s(S(V),{class:"col-11",modelValue:a.type_name,"onUpdate:modelValue":_=>a.type_name=_,onBlur:_=>ce(a)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),s(l,{rounded:"",style:{"aspect-ratio":"1 / 1",width:"3rem",height:"3rem",display:"flex","justify-content":"center"},severity:"danger",text:"",class:"pi-button-rounded",onClick:_=>he(a.id)},{default:i(()=>[ze]),_:2},1032,["onClick"])])]))),128)),Ae]),_:1},8,["visible"]),s(f),o("div",qe,[s(f),s(u),s(ge,{stripedRows:"",ref:"dt",value:q.value,dataKey:"id",paginator:!0,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:i(()=>[]),default:i(()=>[o("div",Be,[o("div",Je,[s(l,{size:"small ",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-info py-2",onClick:e[2]||(e[2]=a=>ye())},{default:i(()=>[Me,He]),_:1}),s(l,{size:"small ",ico:"",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-warning py-2",onClick:fe},{default:i(()=>[Ge,Ke]),_:1}),s(l,{size:"small ",style:{width:"100%","font-weight":"bold",display:"flex","align-items":"center","justify-content":"center"},rounded:"",class:"p-button-success py-2",onClick:e[3]||(e[3]=a=>A.value=!0)},{default:i(()=>[Qe,We]),_:1})])]),s(E,{class:"p-0",field:"name",header:"Tipo",sortable:!0,headerStyle:"width:20rem; min-width:max-content; "},{body:i(a=>[o("p",Xe,N(a.data.document_type),1)]),_:1}),s(E,{class:"py-0",field:"position",header:"Nombre ",sortable:!0,headerStyle:"width:20rem; min-width:10rem;"},{body:i(a=>[Ye,o("p",Ze,N(a.data.document_name),1)]),_:1}),s(E,{class:"p-0",field:"birth_date",header:"Renovacion",sortable:!0,headerStyle:"width:5rem; min-width:10rem;"},{body:i(a=>{var _;return[z(N((_=a.data.renovation_date)==null?void 0:_.split("-").reverse().join(" / ")),1)]}),_:1}),s(E,{style:{},class:"py-0",frozen:"",alignFrozen:"right"},{body:i(a=>[o("div",et,[s(l,{text:"",size:"large",style:{"aspect-ratio":"1 / 1"},class:"p-button-success mr-2 mb-2 p-0 text-3xl",onClick:_=>S(Pe)(a.data.document_id,a.data.document_type)},{default:i(()=>[tt]),_:2},1032,["onClick"]),s(l,{text:"",size:"large",style:{},class:"p-button-info mr-2 mb-2 p-0 text-3xl",onClick:_=>me(a.data)},{default:i(()=>[ot]),_:2},1032,["onClick"]),s(l,{text:"",size:"large",style:{},class:"p-button-danger mr-2 mb-2 p-0 text-3xl",onClick:_=>ne(a.data)},{default:i(()=>[at]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["value"]),s(r,{class:"p-0",closable:!0,header:` RENOVAR ${(K=x.value)==null?void 0:K.document_type} PARA ${(Q=D.value.site_name)==null?void 0:Q.toUpperCase()}`,visible:L.value,"onUpdate:visible":e[7]||(e[7]=a=>L.value=a),style:{width:"500px"},modal:!0},{default:i(()=>[o("input",{ref:"fileInput",type:"file",onChange:H,style:{display:"none"}},null,544),o("div",st,[lt,s(G,{id:"entry_date",dateFormat:"dd/mm/yy",style:{width:"100%",margin:"20px 0"},modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a),required:"true",autofocus:""},null,8,["modelValue"])]),te(o("p",nt,[it,z(" "+N(c.value?`${c.value.name} : si este no es
                    su documento por
                    favor carguelo`:""),1)],512),[[oe,c.value]]),o("div",rt,[o("div",dt,[s(l,{severity:"help",label:"Seleccionar documento",class:"col-12",style:{},onClick:e[5]||(e[5]=a=>{t.$refs.fileInput.click()})})]),o("div",ct,[s(l,{class:"col-12",severity:"success",label:"Enviar",onClick:e[6]||(e[6]=a=>pe(c.value,x.value))})])])]),_:1},8,["header","visible"]),s(r,{header:` CARGAR ${((W=h.value)==null?void 0:W.type_name)||""} PARA ${(Y=(X=D.value)==null?void 0:X.site_name)==null?void 0:Y.toUpperCase()}`,visible:U.value,"onUpdate:visible":e[12]||(e[12]=a=>U.value=a),style:{width:"450px"},modal:!0},{default:i(()=>[o("div",ut,[o("div",pt,[mt,s(be,{modelValue:h.value,"onUpdate:modelValue":e[8]||(e[8]=a=>h.value=a),modelModifiers:{trim:!0},options:T.value,optionLabel:"type_name",placeholder:"",required:"true",class:De({"p-invalid":t.submitted}),style:{width:"100%",margin:"20px 0"}},null,8,["modelValue","options","class"])]),o("div",yt,[ft,s(G,{dateFormat:"dd/mm/yy",id:"entry_date",style:{width:"100%",margin:"20px 0"},modelValue:m.value,"onUpdate:modelValue":e[9]||(e[9]=a=>m.value=a),required:"true",autofocus:""},null,8,["modelValue"])])]),o("input",{ref:"fileInput",type:"file",onChange:H,style:{display:"none"}},null,544),te(o("p",vt,[_t,z(" "+N(c.value?`${c.value.name} : verifique si
                    este es su documeto
                    antes de envirlo`:""),1)],512),[[oe,c.value]]),o("div",ht,[s(l,{class:"",severity:"help",label:"Seleccionar documento",style:{width:"100%"},onClick:e[10]||(e[10]=a=>{t.$refs.fileInput.click()})}),s(l,{label:"Enviar",style:{width:"100%"},severity:"success",onClick:e[11]||(e[11]=a=>ue(c.value,h.value,D.value.site_id))})])]),_:1},8,["header","visible"])]),s(r,{visible:O.value,"onUpdate:visible":e[17]||(e[17]=a=>O.value=a),style:{width:"450px",padding:"0px"},modal:!0},{header:i(()=>[gt]),footer:i(()=>[s(l,{onClick:_e},{default:i(()=>[z("Crear Sede")]),_:1})]),default:i(()=>[o("div",bt,[wt,s(S(V),{class:"col-12",modelValue:w.value.site_name,"onUpdate:modelValue":e[13]||(e[13]=a=>w.value.site_name=a)},null,8,["modelValue"])]),o("div",null,[xt,s(S(V),{class:"col-12",modelValue:w.value.site_address,"onUpdate:modelValue":e[14]||(e[14]=a=>w.value.site_address=a)},null,8,["modelValue"])]),o("div",null,[Ct,s(S(V),{class:"col-12",modelValue:w.value.site_phone,"onUpdate:modelValue":e[15]||(e[15]=a=>w.value.site_phone=a)},null,8,["modelValue"])]),I.value?(R(),F("div",Et,[o("img",{src:I.value,alt:"Vista previa de la imagen",style:{"max-width":"100%","max-height":"300px"}},null,8,St)])):Ve("",!0),s(l,{class:"my-5",onClick:e[16]||(e[16]=a=>t.$refs.imageInput.click())},{default:i(()=>[$t]),_:1}),o("input",{type:"file",ref:"imageInput",onChange:ve,style:{display:"none"}},null,544)]),_:1},8,["visible"])],64)}}},Pt=we(Tt,[["__scopeId","data-v-e065b7ab"]]);export{Pt as default};
