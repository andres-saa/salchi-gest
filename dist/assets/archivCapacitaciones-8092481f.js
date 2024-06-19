import{r as n,C as H,i as x,U as v,D as q,k as z,a as p,o as g,c as U,b as t,f as L,y as C,q as m,t as h,d as o,w as c,F as W,E as K,u as P,$ as G,n as R,P as V,a2 as J}from"./index-50638590.js";const Q={class:"col-12",style:{display:"flex"}},X={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Y={class:"m-0 text-2xl my-4"},Z={class:"block mt-2 md:mt-0 p-input-icon-left"},ee=t("i",{class:"pi pi-search"},null,-1),te=t("span",{class:"p-column-title"},"Code",-1),ae=t("div",null,[t("img",{style:{height:"3rem"},src:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",alt:""})],-1),oe=t("span",{class:"p-column-title"},"Code",-1),se=t("span",{class:"p-column-title"},"Code",-1),ne=t("span",{class:"p-column-title"},"Code",-1),ie={class:"text-right"},le={class:"text-right",style:{}},re=["onSubmit"],ce={class:"field"},de=t("label",{for:"customFilename",class:"col-12 pl-0"},"Nombre del Archivo",-1),ue={class:"field"},me={key:0,style:{"background-color":"var(--green-100)","border-radius":"0.2rem"},class:"col-12 my-4"},_e={__name:"archivCapacitaciones",setup(pe){const y=n({}),S=n(!0),T=n(null),f=n(!1),d=n({training_id:"",custom_filename:"",file:null}),N=()=>{f.value=!0},E=()=>{f.value=!1,d.value={training_id:"",custom_filename:"",file:null}},A=s=>{d.value.file=s.target.files[0]},F=async()=>{const s=k.params.capacitacion_id;if(d.value.file){const e=new FormData;e.append("file",d.value.file),e.append("custom_filename",d.value.custom_filename),e.append("training_id",d.value.training_id);try{const r=await fetch(`${v}/upload-training-file/${s}`,{method:"POST",body:e});if(r.ok){const i=await r.json();D().then(u=>w.value=u),b.add({severity:"success",summary:"Éxito",detail:"Archivo subido correctamente",life:3e3}),E()}else throw new Error(`Error al subir el archivo: ${r.statusText}`)}catch(r){b.add({severity:"error",summary:"Error",detail:r.message,life:3e3})}}else b.add({severity:"warn",summary:"Advertencia",detail:"Por favor, selecciona un archivo",life:3e3})},$=n(),w=n([]),_=n(null),I=()=>{_.value={global:{value:null,matchMode:K.CONTAINS}}};H(()=>{I()});const M=(s,e)=>{const r=`${v}/get-training-file/${s}/${e}`;fetch(r).then(i=>{if(i.ok)return i.blob();throw new Error("Network response was not ok.")}).then(i=>{const u=window.URL.createObjectURL(i),l=document.createElement("a");l.href=u,l.download=e,document.body.appendChild(l),l.click(),l.remove(),window.URL.revokeObjectURL(u)}).catch(i=>console.error("Error downloading the file:",i))};async function D(){const s=k.params.capacitacion_id;try{const e=await fetch(`${v}/training-files/${s}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let r=await e.json();return S.value=!1,r}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}x(()=>{B().then(s=>y.value=s)});const B=async()=>{const s=k.params.capacitacion_id;try{const e=await fetch(`${v}/training/${s}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error al obtener las capacitaciones:",e),e}};x(async()=>{D().then(s=>w.value=s)}),n(!1),n(!1);const b=q(),k=z();return n(!1),n([]),n([]),n({}),x(()=>{}),(s,e)=>{const r=p("ProgressSpinner"),i=p("Button"),u=p("InputText"),l=p("Column"),O=p("DataTable"),j=p("Dialog");return g(),U(W,null,[t("div",Q,[S.value?(g(),L(r,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):C("",!0)]),m(" "+h(y.value)+" ",1),o(O,{style:{"max-width":"900px",margin:"auto"},ref:"dt",value:w.value,selection:$.value,"onUpdate:selection":e[1]||(e[1]=a=>$.value=a),dataKey:"id",paginator:!0,rows:20,filters:_.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} archivos",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh"},{header:c(()=>[t("div",X,[t("p",Y,[m("Archivos de la capacitacion "),P(G)()==y.value.creator_id?(g(),L(i,{key:0,label:"Subir archivo",icon:"pi pi-upload",class:"p-button-success ml-4 p-2",onClick:N})):C("",!0)]),t("span",Z,[ee,o(u,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value.global.value=a),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:c(()=>[o(l,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),o(l,{class:"p-2",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[te,m(" "+h(a.data.id),1)]),_:1}),o(l,{class:"p-2",field:"id",header:"",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[ae]),_:1}),o(l,{class:"p-2",field:"file_name",header:"Nombre del archivo",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[oe,m(" "+h(a.data.file_name),1)]),_:1}),o(l,{class:"p-2",field:"type",header:"tipo",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[se,m(" "+h(a.data.file_type),1)]),_:1}),o(l,{class:"p-2",field:"upload_date",header:"Fecha de subida",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[ne,m(" "+h(a.data.upload_date),1)]),_:1}),o(l,{class:"p-2",field:"location",header:"Acciones",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:c(a=>[o(i,{text:"",class:"p-0 mx-2",severity:"success",onClick:he=>M(a.data.training_id,a.data.file_name)},{default:c(()=>[t("span",ie,[t("i",{class:R(P(V).DOWNLOAD)},null,2)])]),_:2},1032,["onClick"]),o(i,{text:"",class:"p-0 mx-2",severity:"danger",style:{width:"100"}},{default:c(()=>[t("span",le,[t("i",{class:R(P(V).TRASH)},null,2)])]),_:1})]),_:1})]),_:1},8,["value","selection","filters"]),o(j,{visible:f.value,"onUpdate:visible":e[4]||(e[4]=a=>f.value=a),style:{width:"450px"},header:"Subir Archivo de Capacitación",modal:"",closable:!0,onHide:E},{default:c(()=>[t("form",{onSubmit:J(F,["prevent"]),enctype:"multipart/form-data"},[t("div",ce,[de,o(u,{id:"customFilename",class:"col-12",modelValue:d.value.custom_filename,"onUpdate:modelValue":e[2]||(e[2]=a=>d.value.custom_filename=a),required:""},null,8,["modelValue"])]),t("div",ue,[t("input",{type:"file",id:"file",ref_key:"fileInput",ref:T,onChange:A,required:"",style:{display:"none"}},null,544),o(i,{onClick:e[3]||(e[3]=()=>{T.value.click()}),outlined:""},{default:c(()=>[m(" Cargar archivo")]),_:1}),d.value.file?(g(),U("div",me,h(d.value.file.name),1)):C("",!0)]),o(i,{label:"Enviar",class:"",onClick:F})],40,re)]),_:1},8,["visible"])],64)}}};export{_e as default};
