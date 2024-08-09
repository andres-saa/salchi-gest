<<<<<<<< HEAD:dist/assets/training_video_sesion-709b57ed.js
import{v as k}from"./videoTrainingService-63bbe9ac.js";import{u as C,a as I}from"./dataToInteract-38824492.js";import{l as V,r as w,a as i,o as U,f as $,w as n,d as t,b as e,u as y,q as T,t as b,k as N,_ as E,v as z,h as A,c as j,p as q,g as M,i as F}from"./index-a1098956.js";const H={style:{height:"100%"}},G=e("h6",null,"Nombre de la nueva escuela",-1),O=e("h6",null,"Descripcion u objetivo",-1),Y={__name:"dialogToAddSesion",emits:["update"],setup(g,{emit:u}){const p=u,v=V(),d=C(),o=w({}),h=async()=>{const r={...o.value,created_by:v.rawUserData.id};await k.createSesion(r),d.addSesion=!1,p("update")};return(r,s)=>{const f=i("InputText"),_=i("Textarea"),c=i("Button"),m=i("Dialog");return U(),$(m,{visible:y(d).addSesion,"onUpdate:visible":s[2]||(s[2]=l=>y(d).addSesion=l),class:"p-0 m-3",header:"Registrar nueva escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(c,{class:"m-0",onClick:h,severity:"help",label:"Crear escuela"})]),default:n(()=>[e("div",H,[G,t(f,{modelValue:o.value.name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.name=l),style:{width:"100%"}},null,8,["modelValue"]),O,t(_,{modelValue:o.value.description,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.description=l),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}},J={style:{height:"100%"}},K=e("br",null,null,-1),Q={__name:"dialogToDeletesesion",emits:["update"],setup(g,{emit:u}){const p=u;V();const v=C(),d=I();w({});const o=async()=>{const h=d.sesionToDelete.sesion_id;await k.deleteSesion(h),v.deleteSesion=!1,p("update")};return(h,r)=>{const s=i("Button"),f=i("Dialog");return U(),$(f,{visible:y(v).deleteSesion,"onUpdate:visible":r[0]||(r[0]=_=>y(v).deleteSesion=_),class:"p-0 m-3",header:"Registrar nueva escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(s,{icon:"pi pi-trash",class:"m-0",onClick:o,severity:"danger",label:"Eliminar escuela"})]),default:n(()=>{var _;return[e("div",J,[e("h6",null,[T("Seguro que desea borrar la escuela "),K,T(),e("b",null,b((_=y(d).sesionToDelete)==null?void 0:_.sesion_name),1),T(" ? ")])])]}),_:1},8,["visible"])}}},W={style:{height:"100%"}},X=e("h6",null,"Nombre de la escuela",-1),Z=e("h6",null,"Descripcion u objetivo",-1),ee={__name:"dialogToEditSesion",emits:["update"],setup(g,{emit:u}){const p=I(),v=u;V();const d=C(),o=w({...p.sesionToUpdate});N(()=>p.sesionToUpdate,r=>{o.value={...r}},{deep:!0}),w({});const h=async()=>{const r=o.value.sesion_id,s={name:o.value.sesion_name,description:o.value.description};await k.updateSesion(r,s),d.updateSesion=!1,v("update")};return(r,s)=>{const f=i("InputText"),_=i("Textarea"),c=i("Button"),m=i("Dialog");return U(),$(m,{visible:y(d).updateSesion,"onUpdate:visible":s[2]||(s[2]=l=>y(d).updateSesion=l),class:"p-0 m-3",header:"Actualizar escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(c,{class:"m-0",onClick:h,severity:"warning",label:"Actualizar escuela"})]),default:n(()=>[e("div",W,[X,t(f,{modelValue:o.value.sesion_name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.sesion_name=l),style:{width:"100%"}},null,8,["modelValue"]),Z,t(_,{modelValue:o.value.description,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.description=l),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}};const P=g=>(q("data-v-5f9b24a6"),g=g(),M(),g),te={class:"container py-6"},oe=P(()=>e("h2",{class:"text-center"},[e("b",null,[e("i",{class:"fa-solid fa-school"}),T(" ADMINISTRAR ESCUELAS")])],-1)),se={style:{height:"100%"}},ae=["src"],ne={class:"grid p-2",style:{"align-items":"center",display:"flex",gap:"1rem","justify-content":"space-between"}},ie=P(()=>e("h4",{class:"px-2"},[e("i",{class:"fa fa-graduation-cap"}),T(),e("b",null,"Escuelas")],-1)),le={style:{}},de={style:{"text-transform":"capitalize"}},re={style:{display:"flex","justify-content":"start","align-items":"center"}},ce={class:"",style:{"text-transform":"capitalize"}},ue={class:"date",style:{}},pe={class:"date",style:{}},_e={style:{"min-width":"max-content"}},me={__name:"training_video_sesion",setup(g){const u=I(),p=C(),v=c=>{u.sesionToDelete={},u.sesionToDelete=c,p.deleteSesion=!0},d=c=>{u.sesionToUpdate={},u.sesionToUpdate=c,p.updateSesion=!0},o=async()=>{s.value=await k.getSesions()};z();const h=w(!1),r=(c,m)=>{F.push({name:"video-training-sequence-admin",params:{sesion_id:m,sesion_name:c}})},s=w([]),f=w({}),_=c=>c.replace("watch?v=","embed/");return A(async()=>{o()}),(c,m)=>{const l=i("Dialog"),R=i("InputText"),D=i("Button"),S=i("column"),L=i("DataTable");return U(),j("div",te,[t(Y,{onUpdate:o}),t(Q,{onUpdate:o}),t(ee,{onUpdate:o}),oe,t(l,{visible:h.value,"onUpdate:visible":m[0]||(m[0]=a=>h.value=a),class:"p-0 m-3",header:`Reproductor de video\r
========
import{v as k}from"./videoTrainingService-b46cc08c.js";import{u as C,a as I}from"./dataToInteract-8727ac71.js";import{l as V,r as w,a as i,o as U,f as $,w as n,d as t,b as e,u as y,q as T,t as b,k as N,_ as E,v as z,h as A,c as j,p as q,g as M,i as F}from"./index-1a945cfc.js";const H={style:{height:"100%"}},G=e("h6",null,"Nombre de la nueva escuela",-1),O=e("h6",null,"Descripcion u objetivo",-1),Y={__name:"dialogToAddSesion",emits:["update"],setup(g,{emit:u}){const p=u,v=V(),d=C(),o=w({}),h=async()=>{const r={...o.value,created_by:v.rawUserData.id};await k.createSesion(r),d.addSesion=!1,p("update")};return(r,s)=>{const f=i("InputText"),_=i("Textarea"),c=i("Button"),m=i("Dialog");return U(),$(m,{visible:y(d).addSesion,"onUpdate:visible":s[2]||(s[2]=l=>y(d).addSesion=l),class:"p-0 m-3",header:"Registrar nueva escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(c,{class:"m-0",onClick:h,severity:"help",label:"Crear escuela"})]),default:n(()=>[e("div",H,[G,t(f,{modelValue:o.value.name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.name=l),style:{width:"100%"}},null,8,["modelValue"]),O,t(_,{modelValue:o.value.description,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.description=l),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}},J={style:{height:"100%"}},K=e("br",null,null,-1),Q={__name:"dialogToDeletesesion",emits:["update"],setup(g,{emit:u}){const p=u;V();const v=C(),d=I();w({});const o=async()=>{const h=d.sesionToDelete.sesion_id;await k.deleteSesion(h),v.deleteSesion=!1,p("update")};return(h,r)=>{const s=i("Button"),f=i("Dialog");return U(),$(f,{visible:y(v).deleteSesion,"onUpdate:visible":r[0]||(r[0]=_=>y(v).deleteSesion=_),class:"p-0 m-3",header:"Registrar nueva escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(s,{icon:"pi pi-trash",class:"m-0",onClick:o,severity:"danger",label:"Eliminar escuela"})]),default:n(()=>{var _;return[e("div",J,[e("h6",null,[T("Seguro que desea borrar la escuela "),K,T(),e("b",null,b((_=y(d).sesionToDelete)==null?void 0:_.sesion_name),1),T(" ? ")])])]}),_:1},8,["visible"])}}},W={style:{height:"100%"}},X=e("h6",null,"Nombre de la escuela",-1),Z=e("h6",null,"Descripcion u objetivo",-1),ee={__name:"dialogToEditSesion",emits:["update"],setup(g,{emit:u}){const p=I(),v=u;V();const d=C(),o=w({...p.sesionToUpdate});N(()=>p.sesionToUpdate,r=>{o.value={...r}},{deep:!0}),w({});const h=async()=>{const r=o.value.sesion_id,s={name:o.value.sesion_name,description:o.value.description};await k.updateSesion(r,s),d.updateSesion=!1,v("update")};return(r,s)=>{const f=i("InputText"),_=i("Textarea"),c=i("Button"),m=i("Dialog");return U(),$(m,{visible:y(d).updateSesion,"onUpdate:visible":s[2]||(s[2]=l=>y(d).updateSesion=l),class:"p-0 m-3",header:"Actualizar escuela",style:{width:"30rem"},modal:""},{footer:n(()=>[t(c,{class:"m-0",onClick:h,severity:"warning",label:"Actualizar escuela"})]),default:n(()=>[e("div",W,[X,t(f,{modelValue:o.value.sesion_name,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.sesion_name=l),style:{width:"100%"}},null,8,["modelValue"]),Z,t(_,{modelValue:o.value.description,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.description=l),style:{width:"100%",resize:"none"},rows:"4"},null,8,["modelValue"])])]),_:1},8,["visible"])}}};const P=g=>(q("data-v-5f9b24a6"),g=g(),M(),g),te={class:"container py-6"},oe=P(()=>e("h2",{class:"text-center"},[e("b",null,[e("i",{class:"fa-solid fa-school"}),T(" ADMINISTRAR ESCUELAS")])],-1)),se={style:{height:"100%"}},ae=["src"],ne={class:"grid p-2",style:{"align-items":"center",display:"flex",gap:"1rem","justify-content":"space-between"}},ie=P(()=>e("h4",{class:"px-2"},[e("i",{class:"fa fa-graduation-cap"}),T(),e("b",null,"Escuelas")],-1)),le={style:{}},de={style:{"text-transform":"capitalize"}},re={style:{display:"flex","justify-content":"start","align-items":"center"}},ce={class:"",style:{"text-transform":"capitalize"}},ue={class:"date",style:{}},pe={class:"date",style:{}},_e={style:{"min-width":"max-content"}},me={__name:"training_video_sesion",setup(g){const u=I(),p=C(),v=c=>{u.sesionToDelete={},u.sesionToDelete=c,p.deleteSesion=!0},d=c=>{u.sesionToUpdate={},u.sesionToUpdate=c,p.updateSesion=!0},o=async()=>{s.value=await k.getSesions()};z();const h=w(!1),r=(c,m)=>{F.push({name:"video-training-sequence-admin",params:{sesion_id:m,sesion_name:c}})},s=w([]),f=w({}),_=c=>c.replace("watch?v=","embed/");return A(async()=>{o()}),(c,m)=>{const l=i("Dialog"),R=i("InputText"),D=i("Button"),S=i("column"),L=i("DataTable");return U(),j("div",te,[t(Y,{onUpdate:o}),t(Q,{onUpdate:o}),t(ee,{onUpdate:o}),oe,t(l,{visible:h.value,"onUpdate:visible":m[0]||(m[0]=a=>h.value=a),class:"p-0 m-3",header:`Reproductor de video\r
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/training_video_sesion-ef1c8f81.js
    `,modal:"",style:{width:"70%","aspect-ratio":"16  / 9"}},{default:n(()=>[e("div",se,[e("iframe",{class:"p-0",width:"100%",style:{"aspect-ratio":"16 / 9"},src:_(f.value.video_link),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,ae)])]),_:1},8,["visible"]),t(L,{paginator:!0,rows:15,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Secuencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:s.value,tableStyle:"min-width: 50rem;"},{header:n(()=>[e("div",ne,[ie,t(R,{class:"",style:{width:"100%","max-width":"500px"},placeholder:"Buscar Secuencia..."}),t(D,{onClick:m[1]||(m[1]=a=>y(p).addSesion=!0),severity:"help",label:"Nueva Escuela"})])]),default:n(()=>[t(S,{header:"Id",class:"px-4",field:"id"},{body:n(a=>[e("h6",le,b(a.data.sesion_id),1)]),_:1}),t(S,{header:"Nombre",style:{"min-width":"20rem"},class:"px-4",field:"created_time"},{body:n(a=>{var x;return[e("h6",de,b((x=a.data.sesion_name)==null?void 0:x.toLowerCase()),1),e("div",re,[t(D,{severity:"help",onClick:B=>r(a.data.sesion_name,a.data.sesion_id),text:"",icon:"fa-solid fa-eye"},null,8,["onClick"]),t(D,{onClick:B=>d(a.data),text:"",icon:"fa-solid fa-pencil"},null,8,["onClick"]),t(D,{onClick:B=>v(a.data),text:"",severity:"danger",icon:"fa-solid fa-trash"},null,8,["onClick"])])]}),_:1}),t(S,{header:"Descripcion",style:{"min-width":"30rem"},class:"px-4",field:"created_time"},{body:n(a=>{var x;return[e("h6",ce,b((x=a.data.description)==null?void 0:x.toLowerCase()),1)]}),_:1}),t(S,{header:"Fecha",class:"px-4",field:"created_time"},{body:n(a=>[e("h6",ue,b(a.data.created_date),1)]),_:1}),t(S,{header:"Hora",class:"px-4",field:"created_time"},{body:n(a=>[e("h6",pe,b(a.data.created_time),1)]),_:1}),t(S,{header:"Creador",class:"px-4",style:{},field:"created_time"},{body:n(a=>[e("h6",_e,b(a.data.creator_name),1)]),_:1})]),_:1},8,["value"])])}}},ge=E(me,[["__scopeId","data-v-5f9b24a6"]]);export{ge as default};
