import{_ as be,v as xe,r as i,y as Ce,i as Te,z as Le,u as Ee,a as L,o as te,c as oe,d as o,w as n,b as l,F as ke,A as Se,U as f,X as z,n as E,l as k,P as S,q as _,t as C,G as $e,C as Pe,p as Ve,g as Ae}from"./index-9a92106e.js";const De="/images/file.png";const b=A=>(Ve("data-v-8ac1b0ec"),A=A(),Ae(),A),Fe=b(()=>l("h4",null,"Seleccione el elemento a eliminar:",-1)),Ne={style:{display:"flex",gap:"1rem"}},Ue=b(()=>l("p",null,"¿Estás seguro de que quieres eliminar este archivo?",-1)),je=["onSubmit"],Be={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Ie=["onSubmit"],He={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Oe={class:"md:shadow-3 md:p-5",style:{"min-height":"calc(100vh - 9rem)","background-color":"white","max-width":"1024px",margin:"auto","margin-top":"3rem"}},Re=b(()=>l("p",{class:"mb-2 my-5 text-4xl text-center px-4",style:{"font-weight":"bold","text-transform":"capitalize"}},[l("i",{class:"fa-solid fa-person-chalkboard"}),_(" Gestion de guias ")],-1)),ze={class:"grid col-12 m-0 p-0 gap-3 text-center",style:{}},Me={class:"grid col-12 p-0 gap-3 my-4 m-0"},qe={class:"col p-0",style:{display:"flex","justify-content":"end",width:"100%",gap:"1rem"}},Ge=b(()=>l("span",{class:"p-column-title"},"Code",-1)),Je={class:"",style:{position:"relative",display:"flex","justify-content":"center"}},Ke={style:{color:"white","font-size":"0.7rem",position:"absolute","font-weight":"bold",bottom:"0.9rem","text-transform":"uppercase"}},We=b(()=>l("span",{class:"p-column-title"},"Code",-1)),Xe=b(()=>l("span",{class:"p-column-title"},"Code",-1)),Qe=b(()=>l("span",{class:"p-column-title"},"Code",-1)),Ye=b(()=>l("span",{class:"p-column-title"},"Code",-1)),Ze={class:"text-right"},ea={class:"text-right"},aa=["onSubmit"],ta={class:"field my-3",style:{display:"flex",gap:"1rem","justify-content":"end","flex-direction":"column"}},oa={key:0,style:{"background-color":"var(--green-100)","border-radius":"0.2rem"},class:"col-12 my-4"},la={style:{display:"flex",gap:"1rem","justify-content":"end"}},sa={__name:"guias",setup(A){const s=xe(),le={pdf:"#E74C3C",doc:"#3498DB",docx:"#3498DB",xls:"#27AE60",xlsx:"#27AE60",ppt:"#E67E22",pptx:"#E67E22",psd:"#34495E",ai:"#F39C12",indd:"#EB4D4B",jpg:"#F1C40F",jpeg:"#F1C40F",png:"#1ABC9C",gif:"#F39C12",bmp:"#2ECC71",tiff:"#D35400",svg:"#9B59B6",mp3:"#2ECC71",wav:"#3498DB",aac:"#9B59B6",flac:"#E74C3C",ogg:"#E67E22",csv:"#27AE60"},D=i(!1),$=i(null),M=i([]),se=()=>{$.value=null},P=async()=>{await H().then(e=>x.value=e),await O().then(e=>{p.value=[{id_area:"all",area_name:"Todas las areas"},...e]}),await R().then(e=>{h.value=[{id_type:"all",type_name:"Todos los tipos"},...e]}),M.value=[...p.value.map(e=>({id:e.id_area,name:e.area_name,type:"area"})),...h.value.map(e=>({id:e.id_type,name:e.type_name,type:"type"}))]},re=()=>{v.value=p.value.find(e=>e.id_area==="all"),m.value=h.value.find(e=>e.id_type==="all")},ie=async()=>{if(!$.value)return;const{id:e,type:a}=$.value;let u=`${f}/`;a==="area"?u+=`area/${e}`:a==="type"&&(u+=`archived-file-type/${e}`);try{const r=await fetch(u,{method:"DELETE"});if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);g.add({severity:"success",summary:"Éxito",detail:`${a==="area"?"Área":"Tipo"} eliminado correctamente`,life:3e3}),a==="area"?O().then(c=>{p.value=c,P()}):R().then(c=>{P(),h.value=c}),D.value=!1}catch(r){g.add({severity:"error",summary:"Error",detail:r.message,life:3e3})}},F=i(!1),N=i({area_name:""}),U=i(!1),j=i({type_name:""}),ne=()=>{N.value={area_name:""}},de=()=>{j.value={type_name:""}},q=async()=>{s.setLoading(!0,"creando area");try{const e=await fetch(`${f}/area`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);g.add({severity:"success",summary:"Éxito",detail:"Área creada correctamente",life:3e3}),O().then(a=>p.value=a),F.value=!1,s.setLoading(!1,"cargando archivos")}catch(e){g.add({severity:"error",summary:"Error",detail:e.message,life:3e3}),s.setLoading(!1,"cargando archivos")}},G=async()=>{s.setLoading(!0,"creando tipo");try{const e=await fetch(`${f}/archived-file-type`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j.value)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);g.add({severity:"success",summary:"Éxito",detail:"Tipo de archivo creado correctamente",life:3e3}),R().then(a=>h.value=a),U.value=!1,s.setLoading(!1,"cargando archivos")}catch(e){g.add({severity:"error",summary:"Error",detail:e.message,life:3e3}),s.setLoading(!1,"cargando archivos")}},p=i([]),h=i([]),V=i(!1),B=i(null),ce=e=>{B.value=e,V.value=!0},ue=async()=>{if(s.setLoading(!0,"borrando archivo"),!!B.value)try{const e=await fetch(`${f}/archived-file/${B.value}`,{method:"DELETE"});if(e.ok)s.setLoading(!1,"borrando archivo"),g.add({severity:"success",summary:"Éxito",detail:"Archivo eliminado correctamente",life:3e3}),H().then(a=>x.value=a);else throw new Error(`Error al eliminar el archivo: ${e.statusText}`)}catch(e){s.setLoading(!1,"borrando archivo"),g.add({severity:"error",summary:"Error",detail:e.message,life:3e3})}finally{s.setLoading(!1,"borrando archivo"),V.value=!1,B.value=null}},m=i(h.value[0]),v=i(p.value[0]),y=i({});i({});const x=i([]),J=i(null),I=i(!1),T=i({archived_file_id:"",custom_filename:"",file:null}),K=()=>{I.value=!1,T.value={archived_file_id:"",custom_filename:"",file:null}},pe=e=>{T.value.file=e.target.files[0]},W=async()=>{if(T.value.file){const e=new FormData;e.append("file",T.value.file),e.append("id_area",y.value.area.id_area),e.append("id_type",y.value.type.id_type),e.append("file_name",y.value.file_name);try{const a=await fetch(`${f}/upload-archived-file/`,{method:"POST",body:e});if(a.ok){const u=await a.json();g.add({severity:"success",summary:"Éxito",detail:"Archivo subido correctamente",life:3e3}),K(),H().then(r=>x.value=r)}else throw new Error(`Error al subir el archivo: ${a.statusText}`)}catch(a){g.add({severity:"error",summary:"Error",detail:a.message,life:3e3})}}else g.add({severity:"warn",summary:"Advertencia",detail:"Por favor, selecciona un archivo",life:3e3})},X=i();i([]);const Q=i(null),me=()=>{Q.value={global:{value:null,matchMode:Se.CONTAINS}}};Ce(()=>{me()});const ve=(e,a,u)=>{const r=`${f}/get-archived-file/${e}/${a}/${u.split(".")[0]}`;fetch(r).then(c=>{if(c.ok)return c.blob();throw new Error("Network response was not ok.")}).then(c=>{const w=window.URL.createObjectURL(c),d=document.createElement("a");d.href=w,d.download=u,document.body.appendChild(d),d.click(),d.remove(),window.URL.revokeObjectURL(w)}).catch(c=>console.error("Error downloading the file:",c))};async function H(){s.setLoading(!0,"cargando archivos");try{const e=await fetch(`${f}/archived-files`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){s.setLoading(!1,"cargando archivos"),console.error("Error al obtener usuarios agrupados por sede:",e)}}async function O(){s.setLoading(!0,"cargando areas");try{const e=await fetch(`${f}/areas`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){s.setLoading(!1,"cargando archivos"),console.error("Error al obtener usuarios agrupados por sede:",e)}}async function R(){s.setLoading(!0,"cargando tipos");try{const e=await fetch(`${f}/archived-file-types    `);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){s.setLoading(!1,"cargando archivos"),console.error("Error al obtener usuarios agrupados por sede:",e)}}Te(()=>{p.value=[{id_area:"all",area_name:"Todas las areas"},...p.value],h.value=[{id_type:"all",type_name:"Todos los tipos"},...h.value],v.value=p.value.find(e=>e.id_area==="all"),m.value=h.value.find(e=>e.id_type==="all"),P()});async function fe(){if(console.log(3),s.setLoading(!0,"cargando archivos"),!v.value){s.setLoading(!1,"cargando archivos");return}try{const e=await fetch(`${f}/archived-files/area/${v.value.id_area}`);if(!e.ok)throw s.setLoading(!1,"cargando archivos"),new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){s.setLoading(!1,"cargando archivos"),console.error("Error al obtener usuarios agrupados por sede:",e)}}async function he(){if(s.setLoading(!0,"cargando archivos"),!m.value){s.setLoading(!1,"cargando archivos");return}try{const e=await fetch(`${f}/archived-files/type/${m.value.id_type}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){s.setLoading(!1,"cargando archivos"),console.error("Error al obtener usuarios agrupados por sede:",e)}}async function ye(){if(s.setLoading(!0,"cargando archivos"),!m.value||!v.value){s.setLoading(!1,"cargando archivos");return}try{const e=await fetch(`${f}/archived-files/${v.value.id_area}/${m.value.id_type}`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let a=await e.json();return s.setLoading(!1,"cargando archivos"),a}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e),s.setLoading(!1,"cargando archivos")}}const ge=()=>{var e,a,u,r,c,w;v.value&&m.value&&((e=v.value)==null?void 0:e.id_area)!=="all"&&((a=m.value)==null?void 0:a.id_type)!=="all"?ye().then(d=>x.value=d):((u=v.value)==null?void 0:u.id_area)==="all"&&((r=m.value)==null?void 0:r.id_type)!=="all"?he().then(d=>x.value=d):((c=v.value)==null?void 0:c.id_area)!=="all"&&((w=m.value)==null?void 0:w.id_type)==="all"?fe().then(d=>x.value=d):P()},g=Le();return Ee(),(e,a)=>{var Y,Z,ee,ae;const u=L("Dropdown"),r=L("Button"),c=L("Dialog"),w=L("InputText"),d=L("Column"),_e=L("DataTable");return te(),oe(ke,null,[o(c,{visible:D.value,"onUpdate:visible":a[1]||(a[1]=t=>D.value=t),header:"Eliminar área o tipo",modal:"",closable:!0,onHide:se},{default:n(()=>[l("div",null,[Fe,l("div",Ne,[o(u,{style:{width:"60%"},modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=t=>$.value=t),options:M.value,optionLabel:"name",placeholder:"Seleccione un área o tipo"},null,8,["modelValue","options"]),o(r,{style:{width:"40%"},label:"Eliminar",icon:"pi pi-check",class:"p-button-danger",onClick:ie})])])]),_:1},8,["visible"]),o(c,{visible:V.value,"onUpdate:visible":a[3]||(a[3]=t=>V.value=t),header:"Confirmar eliminación",modal:"",closable:!1},{default:n(()=>[Ue,o(r,{label:"No",icon:"pi pi-times",onClick:a[2]||(a[2]=t=>V.value=!1),class:"p-button-text"}),o(r,{label:"Sí",icon:"pi pi-check",onClick:ue,class:"p-button-danger"})]),_:1},8,["visible"]),o(c,{visible:F.value,"onUpdate:visible":a[5]||(a[5]=t=>F.value=t),header:"Crear nueva área",modal:"",closable:!0,onHide:ne},{default:n(()=>[l("form",{onSubmit:z(q,["prevent"])},[o(w,{modelValue:N.value.area_name,"onUpdate:modelValue":a[4]||(a[4]=t=>N.value.area_name=t),placeholder:"Nombre del área",class:"w-full"},null,8,["modelValue"]),l("div",Be,[o(r,{rounded:"",class:"mt-4",label:"Crear",icon:"pi pi-check",onClick:q})])],40,je)]),_:1},8,["visible"]),o(c,{visible:U.value,"onUpdate:visible":a[7]||(a[7]=t=>U.value=t),header:"Crear nuevo tipo de archivo",modal:"",closable:!0,onHide:de},{default:n(()=>[l("form",{onSubmit:z(G,["prevent"])},[o(w,{modelValue:j.value.type_name,"onUpdate:modelValue":a[6]||(a[6]=t=>j.value.type_name=t),placeholder:"Nombre del tipo de archivo",class:"w-full"},null,8,["modelValue"]),l("div",He,[o(r,{rounded:"",class:"mt-4",label:"Crear",icon:"pi pi-check",onClick:G})])],40,Ie)]),_:1},8,["visible"]),l("div",Oe,[o(_e,{class:"mb-4",stripedRows:"",style:{border:"none",padding:"0"},ref:"dt",value:x.value,selection:X.value,"onUpdate:selection":a[14]||(a[14]=t=>X.value=t),dataKey:"id",paginator:!0,rows:10,filters:Q.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} archivos"},{header:n(()=>[l("div",ze,[o(r,{class:"col",style:{height:"2.5rem","min-width":"max-content"},onClick:a[8]||(a[8]=t=>I.value=!0),severity:"success"},{default:n(()=>[l("i",{class:E([k(S).UPLOAD,"pr-3"])},null,2),_(" Nuevo archivo")]),_:1}),o(r,{class:"col text-center",style:{height:"2.5rem","min-width":"max-content"},severity:"warning",onClick:a[9]||(a[9]=t=>F.value=!0)},{default:n(()=>[l("i",{class:E([k(S).PLUS,"pr-3"])},null,2),_(" Nueva area ")]),_:1}),o(r,{class:"col",style:{height:"2.5rem","min-width":"max-content"},severity:"info",onClick:a[10]||(a[10]=t=>U.value=!0)},{default:n(()=>[l("i",{class:E([k(S).PLUS,"pr-3"])},null,2),_(" Nuevo tipo de archivo ")]),_:1}),o(r,{class:"col",style:{height:"2.5rem","min-width":"max-content"},severity:"danger",onClick:a[11]||(a[11]=()=>{D.value=!0,P()})},{default:n(()=>[l("i",{class:E([k(S).TRASH,"pr-3"])},null,2),_(" Eliminar área o tipo ")]),_:1})]),l("div",Me,[o(u,{style:{height:"3rem","text-justify":"center"},class:"col-12 lg:col-5 p-0",optionLabel:"area_name",modelValue:v.value,"onUpdate:modelValue":a[12]||(a[12]=t=>v.value=t),options:p.value,placeholder:"Area de la empresa"},null,8,["modelValue","options"]),o(u,{style:{height:"3rem","text-justify":"center"},class:"col-12 lg:col-4 p-0",modelValue:m.value,"onUpdate:modelValue":a[13]||(a[13]=t=>m.value=t),optionLabel:"type_name",options:h.value,placeholder:"Tipo de archivo"},null,8,["modelValue","options"]),l("div",qe,[o(r,{onClick:re,icon:"fa-solid fa-broom text-2xl",style:{height:"3rem","border-radius":"50%","aspect-ratio":"1/1",display:"flex","align-items":"center","justify-content":"center"},class:"text-center text-4xl",severity:"danger",size:"small"}),o(r,{onClick:ge,style:{height:"3rem","border-radius":"50%","aspect-ratio":"1/1",display:"flex","align-items":"center","justify-content":"center"},class:"text-center text-2xl",severity:"help",size:"small",icon:"text-2xl pi pi-search"})])])]),default:n(()=>[Re,o(d,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),o(d,{class:"p-2",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[Ge,_(" "+C(t.data.id_file),1)]),_:1}),o(d,{class:"p-2",field:"id",header:"",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[l("div",Je,[l("img",{style:$e([{height:"3.5rem","aspect-ratio":"1 / 1","object-fit":"contain","border-radius":"0.5rem"},`background-color:${le[t.data.file_extension]} `]),class:"p-1",src:De,alt:""},null,4),l("span",Ke,C(t.data.file_extension.slice(0,4)),1)])]),_:1}),o(d,{class:"p-2",field:"file_name",header:"Nombre",sortable:!0,headerStyle:"width:min-content; min-width:20rem; "},{body:n(t=>[We,_(" "+C(t.data.file_name),1)]),_:1}),o(d,{class:"p-2",field:"type",header:"Tipo",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[Xe,_(" "+C(t.data.type_name),1)]),_:1}),o(d,{class:"p-2",field:"type",header:"Area",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[Qe,_(" "+C(t.data.area_name),1)]),_:1}),o(d,{class:"p-2",field:"upload_date",header:"Fecha",sortable:!0,headerStyle:"width:10rem; min-width:7rem; "},{body:n(t=>[Ye,_(" "+C(t.data.upload_date),1)]),_:1}),o(d,{class:"p-2",field:"location",header:"Acciones",sortable:!0,frozen:"",alignFrozen:"right",headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[o(r,{text:"",class:"p-0 mx-2",severity:"success",onClick:we=>ve(t.data.id_area,t.data.id_type,t.data.file_name)},{default:n(()=>[l("span",Ze,[l("i",{class:E(k(S).DOWNLOAD)},null,2)])]),_:2},1032,["onClick"]),o(r,{text:"",class:"p-0 mx-2",severity:"danger",onClick:we=>ce(t.data.id_file)},{default:n(()=>[l("span",ea,[l("i",{class:E(k(S).TRASH)},null,2)])]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["value","selection","filters"])]),o(c,{visible:I.value,"onUpdate:visible":a[19]||(a[19]=t=>I.value=t),style:{width:"450px"},header:`Subir ${(Z=(Y=y.value)==null?void 0:Y.type)==null?void 0:Z.type_name} para el area de ${(ae=(ee=y.value)==null?void 0:ee.area)==null?void 0:ae.area_name}`,modal:"",closable:!0,onHide:K},{default:n(()=>[l("form",{onSubmit:z(W,["prevent"]),enctype:"multipart/form-data"},[o(w,{optionLabel:"area_name",placeholder:"Nombre del archivo",class:"col-12 my-0",style:{padding:"0.8rem 10px"},modelValue:y.value.file_name,"onUpdate:modelValue":a[15]||(a[15]=t=>y.value.file_name=t),options:p.value},null,8,["modelValue","options"]),o(u,{optionLabel:"area_name",placeholder:"Area de la empresa",class:"col-12 p-0 my-3",modelValue:y.value.area,"onUpdate:modelValue":a[16]||(a[16]=t=>y.value.area=t),options:p.value},null,8,["modelValue","options"]),o(u,{class:"col-12 p-0",placeholder:"Tipo de archivo",modelValue:y.value.type,"onUpdate:modelValue":a[17]||(a[17]=t=>y.value.type=t),optionLabel:"type_name",options:h.value},null,8,["modelValue","options"]),l("div",ta,[T.value.file?(te(),oe("div",oa,C(T.value.file.name),1)):Pe("",!0),l("div",la,[l("input",{type:"file",id:"file",ref_key:"fileInput",ref:J,onChange:pe,required:"",style:{display:"none"}},null,544),o(r,{rounded:"",onClick:a[18]||(a[18]=()=>{J.value.click()})},{default:n(()=>[_(" Cargar archivo")]),_:1}),o(r,{rounded:"",severity:"success",label:"Enviar",class:"",onClick:W})])])],40,aa)]),_:1},8,["visible","header"])],64)}}},ia=be(sa,[["__scopeId","data-v-8ac1b0ec"]]);export{ia as default};
