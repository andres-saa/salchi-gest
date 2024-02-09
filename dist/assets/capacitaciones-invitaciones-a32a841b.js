import{_ as ue,f as i,h as A,O as H,A as pe,u as me,r as v,o as h,c as g,d as o,w as r,v as he,a,n as S,I as M,Q as _e,bZ as B,U as C,k as y,t as p,F as G,b as W,q as O,l as R,P as q,p as fe,e as ve,y as ye}from"./index-829b5995.js";import{g as ge}from"./dropDownAux-e414dca8.js";const l=k=>(fe("data-v-9c357c75"),k=k(),ve(),k),we={class:"col-12 m-auto"},be={style:{display:"flex"}},xe=l(()=>a("div",{style:{display:"flex"}},null,-1)),Se={class:"grid"},Ce={class:"col-12 lg:col-6"},ke=l(()=>a("p",{class:"col-12 text-3xl",style:{"font-weight":"bold"}}," Configuración ",-1)),Ve={class:"col-12 m-auto pb-4 p-4",style:{"background-color":"var(--orange-400)","box-shadow":"0 0 10px rgba(0, 0, 0, 0.137)",height:"max-content","border-radius":"1rem"}},Pe=l(()=>a("div",{class:"col-12 m-0 mb-3",style:{}},[a("p",{class:"text-2xl",style:{"font-weight":"bold","text-transform":"capitalize",color:"white"}})],-1)),Te={class:"flex flex-column gap-2 my-4 text-white"},Ue=l(()=>a("label",{for:"username"},"Nombre de la capacitacion",-1)),Ie={class:"flex flex-column gap-2 my-4 text-white"},Ee=l(()=>a("label",{for:"username"},"Tematica",-1)),De={class:"flex flex-column gap-2 my-4 text-white"},Ne=l(()=>a("label",{for:"switch-incluir-link"},"¿Incluir enlace de la reunión?",-1)),$e={key:0,class:"flex flex-column gap-2 my-4 text-white"},Ae=l(()=>a("label",{for:"input-enlace-reunion"},"Enlace de la reunión",-1)),Be={class:"flex flex-column gap-2 my-4 text-white"},Oe=l(()=>a("label",{for:"username"},"Ubicacion",-1)),Re={class:"flex flex-column gap-2 my-4 text-white"},Le=l(()=>a("label",{for:"username"},"Fecha de la capacitacion",-1)),ze=l(()=>a("span",{class:"col-12 p-0"},"Agendar",-1)),je={class:"col-12 lg:col-6"},Fe=l(()=>a("p",{class:"col-12 my-0 text-3xl",style:{"font-weight":"bold"}}," Asistentes ",-1)),He={class:"col-12",style:{display:"flex"}},Me={key:0,class:"col-12 p-0 ml-3",style:{display:"flex",gap:"1rem","align-items":"center"}},Ge=l(()=>a("span",{class:"",style:{"font-weight":"bold"}},"TODOS ",-1)),We={class:"col-12 m-auto pb-4 p-5",style:{"background-color":"rgba(255, 255, 255, 0)",height:"100%","border-radius":"1rem","height overflow":"hidden"}},qe={class:"grid",style:{height:"70vh","overflow-y":"auto"}},Je={class:"col-12 grid py-4",style:{"border-bottom":"2px solid rgba(0, 0, 0, 0.375)"}},Ke={class:"col-12 p-1",style:{display:"flex",gap:"1rem","align-items":"center"}},Qe={style:{"font-weight":"bold"}},Ye={class:"col-12 p-1",style:{display:"flex","min-width":"max-content",gap:"1rem","align-items":"center","justify-content":"start"}},Ze={class:"",style:{"font-weight":""}},Xe={key:0,class:"col-12",style:{display:"flex","flex-direction":"column","pointer-events":"none","align-items":"center","justify-content":"center",position:"fixed","z-index":"1000",left:"0",top:"0",height:"100%","background-color":"rgba(0, 0, 0, 0.5)"}},et=l(()=>a("p",{class:"text-3xl",style:{"font-weight":"bold",color:"white","text-shadow":"0 0 10px rgba(0, 0, 0, 0.551)"}},"CARGANDO INVITACIONES",-1)),tt={style:{display:"flex"}},at={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},st={class:"m-0 text-2xl my-4"},ot={class:"block mt-2 md:mt-0 p-input-icon-left"},nt=l(()=>a("i",{class:"pi pi-search"},null,-1)),lt=l(()=>a("span",{class:"p-column-title"},"Code",-1)),it=l(()=>a("span",{class:"p-column-title"},"Code",-1)),rt=l(()=>a("span",{class:"p-column-title"},"Code",-1)),ct=l(()=>a("span",{class:"p-column-title"},"Code",-1)),dt=l(()=>a("span",{class:"p-column-title"},"Code",-1)),ut=l(()=>a("span",{class:"p-column-title"},"Code",-1)),pt=l(()=>a("span",{class:"p-column-title"},"Code",-1)),mt=l(()=>a("span",{class:"p-column-title"},"Code",-1)),ht={class:"text-right"},_t={class:"text-right",style:{}},ft={key:2,class:"col-12 text-6xl text-center",style:{"font-weight":"bold",display:"flex",height:"85vh","justify-content":"center","align-items":"center"}},vt=l(()=>a("p",null,"No tienes invitaciones a capacitaciones",-1)),yt=[vt],gt={__name:"capacitaciones-invitaciones",setup(k){const V=i(!1),P=i(),L=i(),T=i(null),J=()=>{T.value={global:{value:null,matchMode:_e.CONTAINS}}},z=async()=>{const s=B();try{const e=await fetch(`${C}/attendee/${s}/invited-trainings`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error al obtener las capacitaciones:",e),e}};A(()=>{z().then(s=>P.value=s)}),H(()=>{J()});const w=i(!1),U=i(!1),I=pe();me();const N=i(!1),b=i([]),K=i([]);i({});const Q=s=>{try{return new URL(s),!0}catch{return!1}},u=i({}),x=i(!0);i(!1);const Y=(s,e)=>{const n=b.value.find(c=>c.site_name===s);if(!n)return;let d=[...m.value];n.employers.forEach(c=>{const _=d.indexOf(c.id);e&&_===-1?d.push(c.id):!e&&_!==-1&&d.splice(_,1)}),m.value=d},Z=s=>{s?m.value=b.value.reduce((e,n)=>e.concat(n.employers.map(d=>d.id)),[]):m.value=[]},j=s=>{const e=b.value.find(n=>n.site_name===s);return e?e.employers.every(n=>m.value.includes(n.id)):!1};i({}),i([]);const m=i([]),X=s=>({attendees:m.value.map(e=>({training_id:s,attendee_id:e,assigned:!1,attendance_time:new Date().toISOString()}))}),ee=async s=>{const e=X(s);try{const n=await fetch(`${C}/training/attendees`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const d=await n.json();I.add({severity:"success",summary:"asistentes modificados",detail:"hecho",life:3e3}),console.log("Respuesta del servidor:",d),ye.push(`capacitacion/${s}/configuracion`),w.value=!1}catch(n){console.error("Error al enviar los datos de los asistentes:",n)}};async function te(){try{const s=await fetch(`${C}/employers/grouped-by-site`);if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);let e=await s.json();e=e.map(n=>{const d=n.employers.reduce((c,_)=>(c[_.position]=c[_.position]||[],c[_.position].push(_),c),{});return{...n,positions:d}}),b.value=e,x.value=!1}catch(s){console.error("Error al obtener usuarios agrupados por sede:",s)}}async function ae(){try{const s=await fetch(`${C}/employers/grouped-by-position`);if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);K.value=await s.json()}catch(s){console.error("Error al obtener usuarios agrupados por posición:",s)}}const se=i([]);H(()=>{ge().then(s=>se.value=s)}),A(async()=>{await te(),await ae()});const oe=s=>{const e=m.value.indexOf(s);e>-1?m.value.splice(e,1):m.value.push(s)},ne=s=>m.value.includes(s),le=async()=>{w.value=!0;const s={...u.value};if(s.creator_id=await B(),s.status="Agendada",!U.value||!s.material_url)s.material_url=null;else if(!Q(s.material_url)){I.add({severity:"error",summary:"Error",detail:"El enlace de la reunión no es válido",life:3e3}),w.value=!1;return}if(!s.name||!s.topic||!s.location||!s.scheduled_time){I.add({severity:"warn",summary:"Advertencia",detail:"Por favor, completa todos los campos requeridos.",life:3e3}),w.value=!1;return}try{const e=await fetch(`${C}/training/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const d=(await e.json()).training_id;await ee(d),console.log("Capacitación actualizada con éxito",e),I.add({severity:"success",summary:"Capacitación actualizada",detail:"Hecho",life:3e3}),z().then(c=>P.value=c),ie.value=!1}catch(e){console.error("Error al actualizar la capacitación:",e)}},ie=i(!1);return A(()=>{}),(s,e)=>{var F;const n=v("ProgressSpinner"),d=v("Dialog"),c=v("InputText"),_=v("InputSwitch"),re=v("Calendar"),E=v("Button"),$=v("Checkbox"),f=v("Column"),ce=v("RouterLink"),de=v("DataTable");return h(),g("div",we,[o(d,{visible:w.value,"onUpdate:visible":e[0]||(e[0]=t=>w.value=t),modal:"",header:"Enviando datos",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:r(()=>[a("div",be,[o(n,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])]),_:1},8,["visible"]),o(d,{style:he([{"max-width":"1024px"},{width:"90%"}]),visible:V.value,"onUpdate:visible":e[9]||(e[9]=t=>V.value=t),modal:"",header:"Agendar capacitacion",breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:r(()=>[y(p(u.value)+" "+p(m.value)+" ",1),xe,a("div",Se,[a("div",Ce,[ke,a("div",Ve,[Pe,a("div",Te,[Ue,o(c,{id:"username",modelValue:u.value.name,"onUpdate:modelValue":e[1]||(e[1]=t=>u.value.name=t),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Ie,[Ee,o(c,{id:"username",modelValue:u.value.topic,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value.topic=t),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",De,[Ne,o(_,{id:"switch-incluir-link",modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=t=>U.value=t)},null,8,["modelValue"])]),U.value?(h(),g("div",$e,[Ae,o(c,{id:"input-enlace-reunion",modelValue:u.value.material_url,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value.material_url=t)},null,8,["modelValue"])])):S("",!0),a("div",Be,[Oe,o(c,{id:"username",modelValue:u.value.location,"onUpdate:modelValue":e[5]||(e[5]=t=>u.value.location=t),"aria-describedby":"username-help"},null,8,["modelValue"])]),a("div",Re,[Le,o(re,{id:"username",modelValue:u.value.scheduled_time,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value.scheduled_time=t),"aria-describedby":"username-help"},null,8,["modelValue"])])]),o(E,{onClick:le,class:"my-6 col-12",outlined:""},{default:r(()=>[ze]),_:1})]),a("div",je,[Fe,a("div",He,[x.value?(h(),M(n,{key:0,style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):S("",!0)]),x.value?S("",!0):(h(),g("div",Me,[o($,{class:"mt-3",style:{"margin-left":"3px"},modelValue:N.value,"onUpdate:modelValue":e[7]||(e[7]=t=>N.value=t),binary:!0,onChange:e[8]||(e[8]=t=>Z(N.value))},null,8,["modelValue"]),Ge])),a("div",We,[a("div",qe,[(h(!0),g(G,null,W(b.value,t=>(h(),g("div",Je,[a("div",Ke,[o($,{style:{},binary:!0,modelValue:j(t.site_name),onChange:D=>Y(t.site_name,!j(t.site_name))},null,8,["modelValue","onChange"]),a("span",Qe,p(t.site_name),1)]),(h(!0),g(G,null,W(t.employers,D=>(h(),g("div",Ye,[o($,{class:"",style:{},binary:!0,modelValue:ne(D.id),onChange:()=>oe(D.id)},null,8,["modelValue","onChange"]),a("p",Ze,p(D.name),1)]))),256))]))),256))])])])])]),_:1},8,["visible"]),x.value?(h(),g("div",Xe,[et,a("div",tt,[o(n,{style:{width:"100px",height:"100px"},strokeWidth:"4",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])])):S("",!0),((F=P.value)==null?void 0:F.length)>0?(h(),M(de,{key:1,ref:"dt",value:P.value,selection:L.value,"onUpdate:selection":e[12]||(e[12]=t=>L.value=t),dataKey:"id",paginator:!0,rows:10,filters:T.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Capacitaciones",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh",frozenValue:s.lockedCustomers},{header:r(()=>[a("div",at,[a("p",st,[y(" Invitaciones "),o(E,{onClick:e[10]||(e[10]=t=>V.value=!V.value),class:"ml-0 p-2 col-12 lg:ml-0 lg:col-12 mt-4"},{default:r(()=>[y(" Agendar nueva capacitacion")]),_:1})]),a("span",ot,[nt,o(c,{class:"",modelValue:T.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>T.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:r(()=>[o(f,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),o(f,{class:"p-2",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[lt,y(" "+p(t.data.id),1)]),_:1}),o(f,{class:"p-2",field:"creator_id",header:"Responsable",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[it,y(" "+p(t.data.creator_id),1)]),_:1}),o(f,{class:"p-2",field:"name",header:"Nombre",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[rt,y(" "+p(t.data.name),1)]),_:1}),o(f,{class:"p-2",field:"name",header:"Tema",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[ct,y(" "+p(t.data.topic),1)]),_:1}),o(f,{class:"p-2",field:"location",header:"Ubicacion",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[dt,y(" "+p(t.data.location),1)]),_:1}),o(f,{class:"p-2",field:"location",header:"Fecha de la capacitacion",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[ut,y(" "+p(t.data.scheduled_time),1)]),_:1}),o(f,{class:"p-2",field:"location",header:"Fecha de creacion",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[pt,y(" "+p(t.data.created_at),1)]),_:1}),o(f,{class:"p-2",field:"location",header:"Estado",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[mt,a("p",{class:O(["p-2 text-center",t.data.status])},p(t.data.status),3)]),_:1}),o(f,{class:"p-2",field:"location",header:"Detalles",sortable:!0,frozen:"",alignFrozen:"right",headerStyle:"width:min-content; min-width:min-content; "},{body:r(t=>[o(ce,{to:R(B)()==t.data.creator_id?`capacitacion/${t.data.id}/configuracion`:`capacitacion/${t.data.id}/archivos`},{default:r(()=>[o(E,{text:"",class:"p-0 mx-2",severity:"success",style:{width:"100"}},{default:r(()=>[a("span",ht,[a("i",{class:O(R(q).EYE)},null,2)])]),_:1})]),_:2},1032,["to"]),o(E,{text:"",class:"p-0 mx-2",severity:"danger",style:{width:"100"}},{default:r(()=>[a("span",_t,[a("i",{class:O(R(q).TRASH)},null,2)])]),_:1})]),_:1})]),_:1},8,["value","selection","filters","frozenValue"])):x.value?S("",!0):(h(),g("div",ft,yt))])}}},xt=ue(gt,[["__scopeId","data-v-9c357c75"]]);export{xt as default};
