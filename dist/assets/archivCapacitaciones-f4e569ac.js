import{r as n,E as H,m as k,U as _,z as q,v as z,a as m,o as v,c as D,b as t,e as L,f as x,g as o,w as r,F as W,I as K,u as C,ac as G,q as g,t as p,n as R,P as V,a5 as J}from"./index-fcc1124b.js";const Q={class:"col-12",style:{display:"flex"}},X={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Y=t("p",{class:"m-0 text-2xl my-4"},"Archivos de la capacitacion ",-1),Z={class:"block mt-2 md:mt-0 p-input-icon-left"},ee=t("i",{class:"pi pi-search"},null,-1),te={style:{display:"flex","justify-content":"end"}},ae=t("span",{class:"p-column-title"},"Code",-1),oe=t("div",null,[t("img",{style:{height:"3rem"},src:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",alt:""})],-1),se=t("span",{class:"p-column-title"},"Code",-1),ne=t("span",{class:"p-column-title"},"Code",-1),ie=t("span",{class:"p-column-title"},"Code",-1),le={class:"text-right"},re={class:"text-right",style:{}},ce={class:"field"},de=t("label",{for:"customFilename",class:"col-12 pl-0"},"Nombre del Archivo",-1),ue={class:"field"},me={key:0,style:{"background-color":"var(--green-100)","border-radius":"0.2rem"},class:"col-12 my-4"},_e={__name:"archivCapacitaciones",setup(pe){const P=n({}),S=n(!0),T=n(null),h=n(!1),c=n({training_id:"",custom_filename:"",file:null}),I=()=>{h.value=!0},E=()=>{h.value=!1,c.value={training_id:"",custom_filename:"",file:null}},N=s=>{c.value.file=s.target.files[0]},F=async()=>{const s=b.params.capacitacion_id;if(c.value.file){const e=new FormData;e.append("file",c.value.file),e.append("custom_filename",c.value.custom_filename),e.append("training_id",c.value.training_id);try{const l=await fetch(`${_}/upload-training-file/${s}`,{method:"POST",body:e});if(l.ok){const d=await l.json();$().then(u=>y.value=u),w.add({severity:"success",summary:"Éxito",detail:"Archivo subido correctamente",life:3e3}),E()}else throw new Error(`Error al subir el archivo: ${l.statusText}`)}catch(l){w.add({severity:"error",summary:"Error",detail:l.message,life:3e3})}}else w.add({severity:"warn",summary:"Advertencia",detail:"Por favor, selecciona un archivo",life:3e3})},U=n(),y=n([]),f=n(null),A=()=>{f.value={global:{value:null,matchMode:K.CONTAINS}}};H(()=>{A()});const M=(s,e)=>{const l=`${_}/get-training-file/${s}/${e}`;fetch(l).then(d=>{if(d.ok)return d.blob();throw new Error("Network response was not ok.")}).then(d=>{const u=window.URL.createObjectURL(d),i=document.createElement("a");i.href=u,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(u)}).catch(d=>console.error("Error downloading the file:",d))};async function $(){const s=b.params.capacitacion_id;try{const e=await fetch(`${_}/training-files/${s}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let l=await e.json();return S.value=!1,l}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}k(()=>{B().then(s=>P.value=s)});const B=async()=>{const s=b.params.capacitacion_id;try{const e=await fetch(`${_}/training/${s}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error al obtener las capacitaciones:",e),e}};k(async()=>{$().then(s=>y.value=s)}),n(!1),n(!1);const w=q(),b=z();return n(!1),n([]),n([]),n({}),k(()=>{}),(s,e)=>{const l=m("ProgressSpinner"),d=m("InputText"),u=m("Button"),i=m("Column"),O=m("DataTable"),j=m("Dialog");return v(),D(W,null,[t("div",Q,[S.value?(v(),L(l,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):x("",!0)]),o(O,{style:{"max-width":"900px",margin:"auto"},ref:"dt",value:y.value,selection:U.value,"onUpdate:selection":e[1]||(e[1]=a=>U.value=a),dataKey:"id",paginator:!0,rows:20,filters:f.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} archivos",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh"},{header:r(()=>[t("div",X,[Y,t("span",Z,[ee,o(d,{class:"",modelValue:f.value.global.value,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value.global.value=a),placeholder:"Buscar..."},null,8,["modelValue"])])]),t("div",te,[C(G)()==P.value.creator_id?(v(),L(u,{key:0,label:"Subir archivo",icon:"pi pi-upload",class:"p-button-success",onClick:I})):x("",!0)])]),default:r(()=>[o(i,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),o(i,{class:"p-2",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[ae,g(" "+p(a.data.id),1)]),_:1}),o(i,{class:"p-2",field:"id",header:"",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[oe]),_:1}),o(i,{class:"p-2",field:"file_name",header:"Nombre del archivo",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[se,g(" "+p(a.data.file_name),1)]),_:1}),o(i,{class:"p-2",field:"type",header:"tipo",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[ne,g(" "+p(a.data.file_type),1)]),_:1}),o(i,{class:"p-2",field:"upload_date",header:"Fecha de subida",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[ie,g(" "+p(a.data.upload_date),1)]),_:1}),o(i,{class:"p-2",field:"location",header:"Acciones",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(a=>[o(u,{text:"",class:"p-0 mx-2",severity:"success",onClick:he=>M(a.data.training_id,a.data.file_name)},{default:r(()=>[t("span",le,[t("i",{class:R(C(V).DOWNLOAD)},null,2)])]),_:2},1032,["onClick"]),o(u,{text:"",class:"p-0 mx-2",severity:"danger",style:{width:"100"}},{default:r(()=>[t("span",re,[t("i",{class:R(C(V).TRASH)},null,2)])]),_:1})]),_:1})]),_:1},8,["value","selection","filters"]),o(j,{visible:h.value,"onUpdate:visible":e[4]||(e[4]=a=>h.value=a),style:{width:"450px"},header:"Subir Archivo de Capacitación",modal:"",closable:!0,onHide:E},{footer:r(()=>[t("div",null,[t("input",{type:"file",id:"file",ref_key:"fileInput",ref:T,onChange:N,required:"",style:{display:"none"}},null,544),o(u,{onClick:e[3]||(e[3]=()=>{T.value.click()}),text:"",label:" Cargar archivo"}),o(u,{label:"Enviar",class:"",severity:"help",onClick:F})])]),default:r(()=>[t("form",{onSubmit:J(F,["prevent"]),enctype:"multipart/form-data"},[t("div",ce,[de,o(d,{id:"customFilename",class:"col-12",modelValue:c.value.custom_filename,"onUpdate:modelValue":e[2]||(e[2]=a=>c.value.custom_filename=a),required:""},null,8,["modelValue"])]),t("div",ue,[c.value.file?(v(),D("div",me,p(c.value.file.name),1)):x("",!0)])],32)]),_:1},8,["visible"])],64)}}};export{_e as default};
