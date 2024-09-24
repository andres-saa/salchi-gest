import{v as K}from"./videoTrainingService-24b79711.js";import{u as ae}from"./urlService-89e3f0c9.js";import{a as Y,u as O}from"./dataToInteract-d78b80be.js";import{_ as W,r as w,y as oe,k as H,a as p,o as c,e as U,w as i,b as e,c as P,F as z,d as M,n as Q,g as t,u as b,f as L,U as E,q as N,t as R,K as A,p as X,h as ee,l as Z,v as te,m as ne,i as le}from"./index-cbaa55ab.js";const F=T=>(X("data-v-4ee29c6b"),T=T(),ee(),T),ie={style:{width:"100%"}},re=F(()=>e("h5",null,[e("b",null,"Estudiantes")],-1)),de={class:"shadow-2 my-2",style:{display:"flex",gap:"1rem",width:"100%","border-radius":".3rem"}},ce={class:"shadow-2",style:{display:"flex",gap:"1rem",width:"100%","border-radius":".3rem"}},ue={class:"container",style:{height:"80vh"}},pe={key:0,style:{}},_e={class:"students",style:{display:"flex","align-items":"center",gap:"1rem"}},me={key:0},ve=F(()=>e("i",{class:"pi pi-check"},null,-1)),he=[ve],ge=["src","onError"],ye={class:"p-0 my-0"},fe=F(()=>e("div",{class:"pt-3",style:{display:"flex",gap:"1rem","align-items":"center"}},null,-1)),we={class:"students",style:{display:"flex","align-items":"center",gap:"1rem"}},be={key:0},Se=F(()=>e("i",{class:"pi pi-check"},null,-1)),qe=[Se],ke=["onClick","src","onError"],xe={class:"p-0 my-0"},$e={class:"",style:{display:"flex",gap:"1rem","align-items":"center"}},Ce={class:"students",style:{display:"flex","align-items":"center",gap:"1rem"}},Pe={key:0},Te=F(()=>e("i",{class:"pi pi-check"},null,-1)),De=[Te],Le=["onClick","src","onError"],Ue={class:"p-0 my-0"},Ie={class:"pt-4",style:{display:"flex","justify-content":"end",gap:"1rem"}},Re={__name:"dialogStudents",setup(T){const y=Y(),f=O(),q=(s,a)=>{var I;const d={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!s||s==""||s=="N/A"?a.target.src=d.default:a.target.src=d[(I=s.trim())==null?void 0:I.toLowerCase()]};w({});function S(s){let a=[];for(let d in s)s.hasOwnProperty(d)&&(a=a.concat(s[d]));return[...a,...v.value]}const _=oe(()=>S(o.value)),k=w([{name:"INSCRITOS",id:0},{name:"INSCRIBIR",id:1}]),h=w([{name:"INDIVIDUAL",id:0},{name:"SEDES",id:1},{name:"CARGOS",id:2}]),l=w(h.value[0]),x=async()=>{const s={sequence_id:y.secuence_students.sequence_id,users:_.value.map(a=>a.id)};console.log(s),await A.put(`${E}/togle_users_to_sequence_video`,s,"actualizando estudiantes"),r.value=k.value[0]},r=w(k.value[0]),V=async(s,a)=>{var I;const d=y.secuence_students.sequence_id;if(s==0&&(a==0?m.value=await A.get(`${E}/list-video-training-student-enrolled-by-sequence-id/${d}`):a==1?m.value=await A.get(`${E}/list-video-training-student-enrolled-by-sequence-id-group-by-site/${d}`):a==2&&(m.value=await A.get(`${E}/list-video-training-student-enrolled-by-sequence-id-group-by-position/${d}`))),s==1&&(a==0?m.value=await A.get(`${E}/list-all-video-training-student-by-sequence-id/${d}`):a==1?m.value=await A.get(`${E}/list-all-video-training-student-by-sequence-id-group-by-site/${d}`):a==2&&(m.value=await A.get(`${E}/list-all-video-training-student-by-sequence-id-group-by-position/${d}`))),a===0)v.value=((I=m.value)==null?void 0:I.filter(n=>n.enrolled))||[];else{o.value={};for(const[n,g]of Object.entries(m.value||{}))o.value[n]=g==null?void 0:g.filter(B=>B.enrolled)}},m=w([{}]),v=w([]),o=w({});w({}),H(()=>f.showSequenceStudents,async s=>{s&&(r.value=k.value[0],l.value=h.value[0],await V(0,0))},{deep:!0}),H(r,async s=>{y.secuence_students.sequence_id,await V(s.id,l.value.id)},{deep:!0}),H(l,async(s,a)=>{v.value=[],o.value={},console.log(S(o.value)),await V(r.value.id,s.id),console.log(r.value.id,s.id)},{deep:!0});const D=s=>{r.value=s},G=s=>{l.value=s};return(s,a)=>{const d=p("Button"),I=p("Column"),n=p("column"),g=p("DataTable"),B=p("Divider"),J=p("Dialog");return c(),U(J,{visible:b(f).showSequenceStudents,"onUpdate:visible":a[2]||(a[2]=u=>b(f).showSequenceStudents=u),closable:!1,class:"p-0 m-3",header:"Estudiantes",style:{width:"30rem","min-height":"80vh"},modal:""},{header:i(()=>[e("div",ie,[re,e("div",de,[(c(!0),P(z,null,M(k.value,u=>(c(),U(d,{class:Q([r.value==u?"selected":"","px-3 py-2"]),style:{"border-radius":"0",color:"var(--text-color)"},onClick:$=>D(u),text:"",label:u.name},null,8,["class","onClick","label"]))),256))]),e("div",ce,[(c(!0),P(z,null,M(h.value,u=>(c(),U(d,{size:"small",class:Q([l.value==u?"selected":"","px-3 py-2 my-"]),style:{"border-radius":"0",color:"var(--text-color)"},onClick:$=>G(u),text:"",label:u.name},null,8,["class","onClick","label"]))),256))])])]),footer:i(()=>[e("div",Ie,[t(d,{text:"",class:"m-0",onClick:a[1]||(a[1]=u=>b(f).showSequenceStudents=!1),severity:"danger",label:"Cerrar"}),t(d,{class:"m-0",onClick:x,severity:"help",label:"Actualizar Estudiantes"})])]),default:i(()=>[e("div",ue,[l.value.id==0?(c(),P("div",pe,[l.value.id==0&&m.value.length>0?(c(),U(g,{key:0,paginator:!1,rows:15,style:{width:"100%"},selection:v.value,"onUpdate:selection":a[0]||(a[0]=u=>v.value=u),paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],showGridlines:"",stripedRows:"",class:"col-12 m-auto p-0",value:m.value},{header:i(()=>[]),default:i(()=>[r.value.id==1?(c(),U(I,{key:0,class:"py-2",selectionMode:"multiple",headerStyle:"width: 3rem; "})):L("",!0),t(n,{class:"p-2",header:"Empleados"},{body:i(u=>[e("div",_e,[r.value.id==0?(c(),P("b",me,he)):L("",!0),e("img",{src:`${b(E)}/read-product-image/96/employer-${r.value.dni}`,onError:$=>q(u.data.gender,$),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,ge),N(),e("h6",ye,R(u.data.user_name),1)])]),_:1})]),_:1},8,["selection","value"])):L("",!0)])):L("",!0),l.value.id==1?(c(!0),P(z,{key:1},M(m.value,(u,$)=>(c(),P("div",{style:{},key:$},[l.value.id==1&&u.length>0?(c(),U(g,{key:0,paginator:!1,rows:15,style:{width:"100%"},selection:o.value[$],"onUpdate:selection":C=>o.value[$]=C,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],showGridlines:"",stripedRows:"",class:"col-12 m-auto p-0",value:u},{header:i(()=>[fe]),default:i(()=>[r.value.id==1?(c(),U(I,{key:0,class:"py-2",selectionMode:"multiple",headerStyle:"width: 3rem; "})):L("",!0),t(n,{class:"p-2",style:{"text-transform":"uppercase"},header:$},{body:i(C=>[e("div",we,[r.value.id==0?(c(),P("b",be,qe)):L("",!0),e("img",{onClick:j=>s.verIMagen(C.option.dni),src:`${b(E)}/read-product-image/96/employer-${C.data.dni}`,onError:j=>q(C.data.gender,j),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,ke),N(),e("h6",xe,R(C.data.user_name),1)])]),_:2},1032,["header"])]),_:2},1032,["selection","onUpdate:selection","value"])):L("",!0)]))),128)):L("",!0),l.value.id==2?(c(!0),P(z,{key:2},M(m.value,(u,$)=>(c(),P("div",{style:{},key:$},[l.value.id==2&&u.length>0?(c(),U(g,{key:0,paginator:!1,rows:15,style:{width:"100%"},selection:o.value[$],"onUpdate:selection":C=>o.value[$]=C,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],showGridlines:"",stripedRows:"",class:"col-12 m-auto p-0",value:u},{header:i(()=>[e("div",$e,[t(B,{class:"p-0 m-2"})])]),default:i(()=>[r.value.id==1?(c(),U(I,{key:0,class:"py-2",selectionMode:"multiple",headerStyle:"width: 3rem; "})):L("",!0),t(n,{class:"p-2",style:{"text-transform":"uppercase"},header:$},{body:i(C=>[e("div",Ce,[r.value.id==0?(c(),P("b",Pe,De)):L("",!0),e("img",{onClick:j=>s.verIMagen(C.option.dni),src:`${b(E)}/read-product-image/96/employer-${C.data.dni}`,onError:j=>q(C.data.gender,j),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,Le),N(),e("h6",Ue,R(C.data.user_name),1)])]),_:2},1032,["header"])]),_:2},1032,["selection","onUpdate:selection","value"])):L("",!0)]))),128)):L("",!0)])]),_:1},8,["visible"])}}},Ee=W(Re,[["__scopeId","data-v-4ee29c6b"]]),Ve={style:{height:"100%"}},Be=e("h6",null,"Nombre del nuevo curso",-1),Ne=e("h6",null,"Descripcion u objetivo",-1),Ae={__name:"dialogToAddSequence",emits:["update"],setup(T,{emit:y}){const f=y,q=Z(),S=O(),_=w({}),k=te(),h=async()=>{const l={..._.value,created_by:q.rawUserData.id,sesion_id:k.params.sesion_id};await K.createSequence(l),S.addSequence=!1,f("update")};return(l,x)=>{const r=p("InputText"),V=p("Textarea"),m=p("Button"),v=p("Dialog");return c(),U(v,{visible:b(S).addSequence,"onUpdate:visible":x[2]||(x[2]=o=>b(S).addSequence=o),class:"p-0 m-3",header:"Registrar nuevo curso",style:{width:"30rem"},modal:""},{footer:i(()=>[t(m,{class:"m-0",onClick:h,severity:"help",label:"Crear Curso"})]),default:i(()=>[e("div",Ve,[Be,t(r,{modelValue:_.value.name,"onUpdate:modelValue":x[0]||(x[0]=o=>_.value.name=o),style:{width:"100%"}},null,8,["modelValue"]),Ne,t(V,{modelValue:_.value.description,"onUpdate:modelValue":x[1]||(x[1]=o=>_.value.description=o),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}},je={style:{height:"100%"}},ze=e("br",null,null,-1),Me={__name:"dialogToDeleteSequence",emits:["update"],setup(T,{emit:y}){const f=y;Z();const q=O(),S=Y();w({});const _=async()=>{const k=S.sequenceToDelete.sequence_id;await K.deleteSequence(k),q.deleteSequence=!1,f("update")};return(k,h)=>{const l=p("Button"),x=p("Dialog");return c(),U(x,{visible:b(q).deleteSequence,"onUpdate:visible":h[0]||(h[0]=r=>b(q).deleteSequence=r),class:"p-0 m-3",header:"Borrar un curso",style:{width:"30rem"},modal:""},{footer:i(()=>[t(l,{icon:"pi pi-trash",class:"m-0",onClick:_,severity:"danger",label:"Eliminar Curso"})]),default:i(()=>{var r;return[e("div",je,[e("h6",null,[N("Seguro que desea borrar el curso "),ze,N(),e("b",null,R((r=b(S).sequenceToDelete)==null?void 0:r.sequence_name),1),N(" ? ")])])]}),_:1},8,["visible"])}}},Oe={style:{height:"100%"}},Fe=e("h6",null,"Nombre del Curso",-1),Ge=e("h6",null,"Descripcion u objetivo",-1),He={__name:"dialogToEditSequence",emits:["update"],setup(T,{emit:y}){const f=Y(),q=y;Z();const S=O(),_=w({...f.sequenceToUpdate});H(()=>f.sequenceToUpdate,h=>{_.value={...h}},{deep:!0}),w({});const k=async()=>{const h=_.value.sequence_id,l={name:_.value.sequence_name,description:_.value.description};await K.updateSequence(h,l),S.updateSequence=!1,q("update")};return(h,l)=>{const x=p("InputText"),r=p("Textarea"),V=p("Button"),m=p("Dialog");return c(),U(m,{visible:b(S).updateSequence,"onUpdate:visible":l[2]||(l[2]=v=>b(S).updateSequence=v),class:"p-0 m-3",header:"Actualizar Curso",style:{width:"30rem"},modal:""},{footer:i(()=>[t(V,{class:"m-0",onClick:k,severity:"warning",label:"Actualizar CURSO"})]),default:i(()=>[e("div",Oe,[Fe,t(x,{modelValue:_.value.sequence_name,"onUpdate:modelValue":l[0]||(l[0]=v=>_.value.sequence_name=v),style:{width:"100%"}},null,8,["modelValue"]),Ge,t(r,{modelValue:_.value.description,"onUpdate:modelValue":l[1]||(l[1]=v=>_.value.description=v),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}};const se=T=>(X("data-v-3d4f87e0"),T=T(),ee(),T),Ke={class:"container py-6"},Ye={style:{height:"100%"}},Ze=["src"],Je={class:"text-center"},Qe={class:"grid p-2",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},We=se(()=>e("h4",{class:"px-2"},[e("i",{class:"fa fa-glasses"}),N(),e("b",null,"Cursos")],-1)),Xe={style:{display:"flex","justify-content":"start","align-items":"center"}},et={class:"",style:{"text-transform":"capitalize"}},tt={class:"date"},st={class:"date"},at={style:{"min-width":"max-content"}},ot={class:"",style:{display:"flex",gap:"1rem","align-items":"center"}},nt=["onClick","src"],lt=se(()=>e("span",{class:""},[e("b",null,[e("i",{class:"text-4xl pi pi-ellipsis-h"})])],-1)),it={__name:"training_video_sequence",setup(T){const y=Y(),f=O(),q=te(),S=(o,D)=>{le.push({name:"video-training-video-admin",params:{sequence_id:o,sequence_name:D}})},_=o=>{const D=o.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);return D&&D[1]?`https://www.youtube.com/embed/${D[1]}`:(console.error("La URL del video no es válida: ",o),"")},k=w({}),h=w(!1),l=w([]),x=o=>{y.sequenceToDelete={},y.sequenceToDelete=o,f.deleteSequence=!0},r=o=>{y.secuence_students={},y.secuence_students=o,f.showSequenceStudents=!0},V=o=>{k.value=o,h.value=!0},m=o=>{y.sequenceToUpdate={},y.sequenceToUpdate=o,f.updateSequence=!0},v=async()=>{l.value=await K.getVideoSequencesBySesionId(q.params.sesion_id)};return ne(async()=>{v()}),(o,D)=>{const G=p("Dialog"),s=p("InputText"),a=p("Button"),d=p("column"),I=p("DataTable");return c(),P("div",Ke,[t(Ae,{onUpdate:v}),t(Me,{onUpdate:v}),t(He,{onUpdate:v}),t(Ee),t(G,{visible:h.value,"onUpdate:visible":D[0]||(D[0]=n=>h.value=n),class:"p-0 m-3",header:`Reproductor de video\r
    `,modal:"",style:{width:"100%","max-width":"150vh","aspect-ratio":"16  / 9"}},{default:i(()=>[e("div",Ye,[e("iframe",{class:"p-0",width:"100%",style:{"aspect-ratio":"16 / 9"},src:_(k.value),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Ze)])]),_:1},8,["visible"]),e("h2",Je,[e("b",null,"GESTIONAR ESCUELA "+R(b(q).params.sesion_name),1)]),t(I,{paginator:!0,rows:15,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Capacitaciones",showGridlines:"",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:l.value,tableStyle:"min-width: 50rem;"},{header:i(()=>[e("div",Qe,[We,t(s,{class:"",style:{width:"100%","max-width":"500px"},placeholder:"Buscar Secuencia..."}),t(a,{onClick:D[1]||(D[1]=n=>b(f).addSequence=!0),severity:"help",label:"Nuevo curso"})])]),default:i(()=>[t(d,{header:"Id",class:"",field:"created_time"},{body:i(n=>[e("h6",null,R(n.data.sequence_id),1)]),_:1}),t(d,{header:"Nombre",class:"",field:"created_time"},{body:i(n=>[e("h6",null,R(n.data.sequence_name),1),e("div",Xe,[t(a,{severity:"help",onClick:g=>S(n.data.sequence_id,n.data.sequence_name),text:"",icon:"fa-solid fa-eye"},null,8,["onClick"]),t(a,{onClick:g=>m(n.data),text:"",icon:"fa-solid fa-pencil"},null,8,["onClick"]),t(a,{text:"",onClick:g=>x(n.data),severity:"danger",icon:"fa-solid fa-trash"},null,8,["onClick"]),t(a,{severity:"success",onClick:g=>r(n.data),text:"",label:"Estudiantes",icon:"fa-solid fa-graduation-cap"},null,8,["onClick"])])]),_:1}),t(d,{header:"Descripcion",style:{"min-width":"30rem"},class:"px-4",field:"created_time"},{body:i(n=>{var g;return[e("h6",et,R((g=n.data.description)==null?void 0:g.toLowerCase()),1)]}),_:1}),t(d,{header:"Fecha",class:"",field:"created_time"},{body:i(n=>[e("h6",tt,R(n.data.created_date),1)]),_:1}),t(d,{header:"Hora",field:"created_time"},{body:i(n=>[e("h6",st,R(n.data.created_time),1)]),_:1}),t(d,{header:"Creador",class:"date",field:"created_time"},{body:i(n=>[e("h6",at,R(n.data.creator_name),1)]),_:1}),t(d,{header:"Clases",class:"px-4"},{body:i(n=>{var g;return[e("div",ot,[(c(!0),P(z,null,M((g=n.data.video_links)==null?void 0:g.filter(B=>B),B=>(c(),P("img",{onClick:J=>V(B),class:"img-courses",style:{width:"9rem",cursor:"pointer","border-radius":".3rem","aspect-ratio":"16 / 9","object-fit":"cover"},src:b(ae).getThumbnail(B),alt:""},null,8,nt))),256)),N(),lt])]}),_:1})]),_:1},8,["value"])])}}},pt=W(it,[["__scopeId","data-v-3d4f87e0"]]);export{pt as default};