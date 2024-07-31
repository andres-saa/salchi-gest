import{v as U}from"./videoTrainingService-dd18db14.js";import{u as D}from"./urlService-c835519e.js";import{u as S,a as P}from"./dataToInteract-efbd0110.js";import{l as L,r as b,v as j,a as c,o as C,f as I,w as d,d as o,b as e,u as p,c as R,m as z,q as T,t as f,k as E,h as A,U as q,_ as F,p as Y,g as G}from"./index-23284505.js";import{f as H}from"./fetchService-868ce8a2.js";const O={style:{height:"100%"}},Z=e("h6",null,"Nombre de la nueva Clase",-1),J=e("h6",{style:{}},[T("Link del video (YouTube) "),e("i",{class:"pi pi-youtube"})],-1),K=["src"],Q=e("h6",null,"Descripcion u objetivo",-1),W={__name:"dialogToAddVideo",emits:["update"],setup(w,{emit:v}){const h=v,y=L(),r=S(),t=b({}),u=j(),n=async()=>{const s={...t.value,created_by:y.rawUserData.id,sequence_id:u.params.sequence_id};await U.createVideo(s),r.addVideo=!1,h("update")};return(s,i)=>{const m=c("InputText"),V=c("Textarea"),g=c("Button"),a=c("Dialog");return C(),I(a,{visible:p(r).addVideo,"onUpdate:visible":i[3]||(i[3]=_=>p(r).addVideo=_),class:"p-0 m-3",header:"Registrar nueva Clase",style:{width:"30rem"},modal:""},{footer:d(()=>[o(g,{class:"m-0",onClick:n,severity:"help",label:"Crear Clase"})]),default:d(()=>[e("div",O,[Z,o(m,{modelValue:t.value.name,"onUpdate:modelValue":i[0]||(i[0]=_=>t.value.name=_),style:{width:"100%"}},null,8,["modelValue"]),J,o(m,{modelValue:t.value.link,"onUpdate:modelValue":i[1]||(i[1]=_=>t.value.link=_),style:{width:"100%"}},null,8,["modelValue"]),t.value.link&&p(D).getThumbnail(t.value.link)?(C(),R("img",{key:0,class:"my-3",style:{width:"100%","border-radius":".3rem","aspect-ratio":"16 / 9","object-fit":"cover"},src:p(D).getThumbnail(t.value.link),alt:""},null,8,K)):z("",!0),Q,o(V,{modelValue:t.value.description,"onUpdate:modelValue":i[2]||(i[2]=_=>t.value.description=_),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}},X={style:{height:"100%"}},ee=e("br",null,null,-1),te={__name:"dialogToDeleteVideo",emits:["update"],setup(w,{emit:v}){const h=v;L();const y=S(),r=P();b({});const t=async()=>{const u=r.videoToDelete.video_id;await U.deleteVideo(u),y.deleteVideo=!1,h("update")};return(u,n)=>{const s=c("Button"),i=c("Dialog");return C(),I(i,{visible:p(y).deleteVideo,"onUpdate:visible":n[0]||(n[0]=m=>p(y).deleteVideo=m),class:"p-0 m-3",header:"Registrar nueva escuela",style:{width:"30rem"},modal:""},{footer:d(()=>[o(s,{icon:"pi pi-trash",class:"m-0",onClick:t,severity:"danger",label:"Eliminar escuela"})]),default:d(()=>{var m;return[e("div",X,[e("h6",null,[T("Seguro que desea borrar la clase "),ee,T(),e("b",null,f((m=p(r).videoToDelete)==null?void 0:m.video_name),1),T(" ? ")])])]}),_:1},8,["visible"])}}},oe={style:{height:"100%"}},ae=e("h6",null,"Nombre del video",-1),se=e("h6",{style:{}},[T("Link del video (YouTube) "),e("i",{class:"pi pi-youtube"})],-1),ie=["src"],le=e("h6",null,"Descripcion u objetivo",-1),ne={__name:"dialogToEditVideo",emits:["update"],setup(w,{emit:v}){const h=P(),y=v;L();const r=S(),t=b({...h.videoToUpdate});E(()=>h.videoToUpdate,n=>{t.value={...n}},{deep:!0}),b({});const u=async()=>{if(!D.ValidateThumbnail(t.value.video_link)){alert("url invalida debe ser una url valida de youtube");return}const n=t.value.video_id,s={name:t.value.video_name,link:t.value.video_link,description:t.value.description};await U.updateVideo(n,s),r.updateVideo=!1,y("update")};return(n,s)=>{const i=c("InputText"),m=c("Textarea"),V=c("Button"),g=c("Dialog");return C(),I(g,{visible:p(r).updateVideo,"onUpdate:visible":s[3]||(s[3]=a=>p(r).updateVideo=a),class:"p-0 m-3",header:"Actualizar Curso",style:{width:"30rem"},modal:""},{footer:d(()=>[o(V,{class:"m-0",onClick:u,severity:"warning",label:"Actualizar escuela"})]),default:d(()=>[e("div",oe,[ae,o(i,{modelValue:t.value.video_name,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value.video_name=a),style:{width:"100%"}},null,8,["modelValue"]),se,o(i,{modelValue:t.value.video_link,"onUpdate:modelValue":s[1]||(s[1]=a=>t.value.video_link=a),style:{width:"100%"}},null,8,["modelValue"]),t.value.video_link&&p(D).getThumbnail(t.value.video_link)?(C(),R("img",{key:0,class:"my-3",style:{width:"100%","border-radius":".3rem","aspect-ratio":"16 / 9","object-fit":"cover"},src:p(D).getThumbnail(t.value.video_link),alt:""},null,8,ie)):z("",!0),le,o(m,{modelValue:t.value.description,"onUpdate:modelValue":s[2]||(s[2]=a=>t.value.description=a),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}},de=e("div",{class:"pt-3",style:{display:"flex",gap:"1rem","align-items":"center"}},[e("h6",{class:"m-0 p-0 text-cende"},[e("b")])],-1),re={class:"students",style:{display:"flex","align-items":"center",gap:"1rem"}},ce=["src","onError"],ue={class:"p-0 my-0"},pe={__name:"dialogStudentsVideo",setup(w){const v=b({}),h=b([{}]),y=P(),r=S(),t=(u,n)=>{var i;const s={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!u||u==""||u=="N/A"?n.target.src=s.default:n.target.src=s[(i=u.trim())==null?void 0:i.toLowerCase()]};return b({}),A(async()=>{}),E(()=>r.showvideoStudents,async u=>{var n;if(u){const s=y.videoUsersId;h.value=await H.get(`${q}/list-video-mark-by-video-id/${s}`,"cargando asistencia"),(n=h.value)==null||n.forEach(i=>v.value[i.user_id]=i.mark)}},{deep:!0}),(u,n)=>{const s=c("Checkbox"),i=c("column"),m=c("DataTable"),V=c("Dialog");return C(),I(V,{visible:p(r).showvideoStudents,"onUpdate:visible":n[0]||(n[0]=g=>p(r).showvideoStudents=g),class:"p-0 m-3",header:"Vistas",style:{width:"30rem"},modal:""},{default:d(()=>[o(m,{paginator:!1,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],showGridlines:"",stripedRows:"",class:"col-12 m-auto p-0",value:h.value},{header:d(()=>[de]),default:d(()=>[o(i,{class:"p-2",style:{"text-transform":"uppercase"}},{body:d(g=>[e("div",re,[o(s,{disabled:"",binary:"",modelValue:v.value[g.data.user_id],"onUpdate:modelValue":a=>v.value[g.data.user_id]=a},null,8,["modelValue","onUpdate:modelValue"]),e("img",{src:`${p(q)}/read-product-image/96/employer-${g.data.dni}`,onError:a=>t(g.data.gender,a),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,ce),T(),e("h6",ue,f(g.data.name),1)])]),_:1})]),_:1},8,["value"])]),_:1},8,["visible"])}}};const me=w=>(Y("data-v-8119d1cd"),w=w(),G(),w),_e={class:"container py-6"},ve={style:{"text-transform":"uppercase"},class:"text-center"},he={style:{height:"100%"}},ye=["src"],ge={class:"grid p-2",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},be=me(()=>e("h4",{class:"px-2"},[e("i",{class:"fa fa-book"}),T(),e("b",null,"Clases")],-1)),fe={style:{}},we={style:{"text-transform":"capitalize"}},Ve={style:{display:"flex","justify-content":"start","align-items":"center"}},xe={style:{"text-transform":"capitalize"}},ke={style:{display:"flex",gap:".5rem"}},Te=["onClick","src"],Ce={class:"date",style:{}},De={class:"date",style:{}},$e={style:{"min-width":"max-content"}},Se={__name:"training_videos",setup(w){const v=P(),h=j(),y=b(!1),r=S(),t=b([]),u=b({}),n=a=>{v.videoUsersId=a,r.showvideoStudents=!0},s=a=>{const _=a.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);return _&&_[1]?`https://www.youtube.com/embed/${_[1]}`:(console.error("La URL del video no es válida: ",a),"")},i=a=>{u.value=a,y.value=!0};A(async()=>{m()});const m=async()=>{const a=h.params.sequence_id;t.value=await U.getVideosBySequenceId(a)},V=a=>{v.videoToDelete={},v.videoToDelete=a,r.deleteVideo=!0},g=a=>{v.videoToUpdate={},v.videoToUpdate=a,r.updateVideo=!0};return(a,_)=>{const B=c("Dialog"),N=c("InputText"),$=c("Button"),x=c("column"),M=c("DataTable");return C(),R("div",_e,[o(W,{onUpdate:m}),o(te,{onUpdate:m}),o(ne,{onUpdate:m}),o(pe),e("h2",ve,[e("b",null,"curso "+f(p(h).params.sequence_name),1)]),o(B,{visible:y.value,"onUpdate:visible":_[0]||(_[0]=l=>y.value=l),class:"p-0 m-3",header:`Reproductor de video\r
    `,modal:"",style:{width:"100%","max-width":"150vh","aspect-ratio":"16  / 9"}},{default:d(()=>[e("div",he,[e("iframe",{class:"p-0",width:"100%",style:{"aspect-ratio":"16 / 9"},src:s(u.value.video_link),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,ye)])]),_:1},8,["visible"]),o(M,{paginator:!0,rows:15,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Secuencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:t.value,tableStyle:"min-width: 50rem;"},{header:d(()=>[e("div",ge,[be,o(N,{class:"",style:{width:"100%","max-width":"500px"},placeholder:"Buscar Secuencia..."}),o($,{onClick:_[1]||(_[1]=l=>p(r).addVideo=!0),severity:"help",label:"Nueva Clase"})])]),default:d(()=>[o(x,{header:"Id",class:"px-4",field:"id"},{body:d(l=>[e("h6",fe,f(l.data.video_id),1)]),_:1}),o(x,{header:"Nombre",style:{"min-width":"20rem"},class:"px-4",field:"created_time"},{body:d(l=>[e("h6",we,f(l.data.video_name.toLowerCase()),1),e("div",Ve,[o($,{onClick:k=>i(l.data),text:"",icon:"fa-solid fa-play"},null,8,["onClick"]),o($,{onClick:k=>g(l.data),text:"",icon:"fa-solid fa-pencil"},null,8,["onClick"]),o($,{onClick:k=>V(l.data),text:"",severity:"danger",icon:"fa-solid fa-trash"},null,8,["onClick"]),o($,{severity:"success",onClick:k=>n(l.data.video_id),text:"",label:"Visualizaciones",icon:"fa-solid fa-eye"},null,8,["onClick"])])]),_:1}),o(x,{header:"Descripcion",style:{"max-width":"20rem"},class:"px-4",field:"created_time"},{body:d(l=>{var k;return[e("h6",xe,f((k=l.data.description)==null?void 0:k.toLowerCase()),1)]}),_:1}),o(x,{header:"Miniatura",class:"px-4"},{body:d(l=>[e("div",ke,[e("img",{onClick:k=>i(l.data),style:{width:"9rem",cursor:"pointer","border-radius":".3rem","aspect-ratio":"16 / 9","object-fit":"cover"},src:p(D).getThumbnail(l.data.video_link),alt:""},null,8,Te)])]),_:1}),o(x,{header:"Fecha",class:"px-4",field:"created_time"},{body:d(l=>[e("h6",Ce,f(l.data.created_date),1)]),_:1}),o(x,{header:"Hora",class:"px-4",field:"created_time"},{body:d(l=>[e("h6",De,f(l.data.created_time),1)]),_:1}),o(x,{header:"Creador",class:"px-4",field:"created_time"},{body:d(l=>[e("h6",$e,f(l.data.creator_name),1)]),_:1})]),_:1},8,["value"])])}}},Be=F(Se,[["__scopeId","data-v-8119d1cd"]]);export{Be as default};
