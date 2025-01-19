import{s as L}from"./siteService-3f6a07d8.js";import{_ as ie,g as u,h as se,D as G,U as m,d as U,o as c,c as p,a as e,e as l,f as v,t as b,m as j,x as oe,j as C,ac as ke,F as B,p as ne,k as re,B as Se,i as te,u as $,r as M,G as Ve}from"./index-eb2a5b3d.js";import{u as de}from"./directorio-9788c301.js";const ae=E=>(ne("data-v-3f6f351a"),E=E(),re(),E),Le={class:"p-0",style:{"border-radius":"1rem","background-color":"red"}},Ce={class:"m-0"},$e=ae(()=>e("span",{class:"p-column-title"},"Code",-1)),De=ae(()=>e("span",{class:"p-column-title"},"Code",-1)),Ne={class:"col-12 px-1",style:{display:"flex",position:"relative","background-color":"","align-items":"center",gap:"0.5rem","justify-content":"end"}},Ue={key:0,class:"fa-solid fa-pen-to-square mr-2"},Ee={key:1,class:"fa-solid fa-rotate-right mr-2"},Te=ae(()=>e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1)),je={__name:"horarios",setup(E){const S=u(!1),a=()=>{S.value&&F().then(h=>q.value=h),S.value=!S.value},i=u(!1),q=u([]),A=u(!1),f=de();se(()=>{F().then(h=>q.value=h)}),G(()=>f.currentSite,h=>{F().then(w=>q.value=w)});const F=async()=>{A.value=!0,localStorage.getItem("siteId");try{const h=await fetch(`${m}/site-schedule/${f.currentSite.site_id}/`);if(!h.ok)throw"paila";const w=await h.json();return w.forEach(g=>{g.opening_time=new Date(`1970-01-01T${g.opening_time}`),g.closing_time=new Date(`1970-01-01T${g.closing_time}`)}),A.value=!1,w}catch(h){A.value=!1,console.log(h)}};u("");const Y=async()=>{i.value=!0;try{const h=q.value.map(g=>{const R={hour12:!1,hour:"2-digit",minute:"2-digit"},J=g.opening_time instanceof Date?g.opening_time.toLocaleTimeString([],R):g.opening_time,P=g.closing_time instanceof Date?g.closing_time.toLocaleTimeString([],R):g.closing_time;return{...g,opening_time:J,closing_time:P}});if(!(await fetch(`${m}/site-schedule/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).ok)throw new Error("Error al enviar los datos");S.value=!1,i.value=!1}catch(h){console.log(h),i.value=!1}},_=u(["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]);return(h,w)=>{const g=U("Column"),R=U("Calendar"),J=U("DataTable"),P=U("Button");return c(),p(B,null,[e("div",Le,[l(J,{stripedRowss:"",ref:"dt",class:"",value:q.value,dataKey:"id",style:{border:"1rem",overflow:"hidden"},rows:7,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} scheldules",responsiveLayout:"scroll",scrollable:""},{default:v(()=>[l(g,{style:{"max-width":"3rem"},class:"p-0",field:"day_of_week",header:"Dia",headerStyle:"width:1rem; min-width:1rem;"},{body:v(y=>[e("span",Ce,b(_.value[y.data.day_of_week-1]),1)]),_:1}),l(g,{class:"p-0",field:"opening_time",header:"Abre",headerStyle:"width:2rem; min-width:2rem;"},{body:v(y=>[$e,l(R,{class:"p-0",disabled:!S.value,hourFormat:"12",timeOnly:"",modelValue:y.data.opening_time,"onUpdate:modelValue":z=>y.data.opening_time=z},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),l(g,{class:"p-1",field:"closing_time",header:"Cierra",headerStyle:"width:2rem; min-width:2rem;"},{body:v(y=>[De,l(R,{disabled:!S.value,hourFormat:"12",timeOnly:"",modelValue:y.data.closing_time,"onUpdate:modelValue":z=>y.data.closing_time=z},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value"])]),e("div",Ne,[l(P,{severity:S.value?"help":"info",onClick:a,size:"small",class:"",style:{transition:"all  .5s","min-width":"max-content","align-items":"","font-weight":"bold","border-radius":"0.5rem"}},{default:v(()=>[S.value?(c(),p("i",Ee)):(c(),p("i",Ue)),j(" "+b(S.value?"Restablecer":"Modificar horario"),1)]),_:1},8,["severity","onClick"]),l(ke,{name:"fade"},{default:v(()=>[S.value?(c(),oe(P,{key:0,size:"small",severity:"success",onClick:Y,style:{"font-weight":"bold","min-height":"max-content","border-radius":"0.5rem"},class:""},{default:v(()=>[Te,j(" Guardar")]),_:1})):C("",!0)]),_:1})])],64)}}},Ae=ie(je,[["__scopeId","data-v-3f6f351a"]]);const r=E=>(ne("data-v-7efc4078"),E=E(),re(),E),Pe=["src"],Oe={class:"col-12 mx-auto md:shadow-3 md:p-4 p-0 px-2 mb-8 mt-6",style:{"max-width":"900px","margin-top":"3rem","background-color":"white"}},Ie=r(()=>e("p",{class:"m-0",for:"siteName"},"Nombre de la sede",-1)),qe=r(()=>e("p",{class:"m-0",for:"siteAddress"},"Dirección",-1)),Re=r(()=>e("p",{class:"m-0",for:"sitePhone"},"Teléfono",-1)),Be=r(()=>e("p",{class:"m-0",for:"emailAddress"},"Correo electrónico",-1)),We=r(()=>e("p",{class:"m-0",for:"whatsappLink"},"Enlace de WhatsApp",-1)),Fe=r(()=>e("p",{class:"m-0",for:"mapsLink"},"Enlace de maps",-1)),Je={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},ze={class:"field col-12 pb-0 px-0"},Me=r(()=>e("label",{for:"appName"},"Nombre de la aplicación",-1)),Ge={class:"field col-12 pb-0 px-0"},He=r(()=>e("label",{for:"username"},"Nombre de usuario",-1)),Ke={class:"field col-12 pb-0 px-0"},Qe=r(()=>e("label",{for:"password"},"Contraseña",-1)),Xe={class:"field col-12 pb-0 px-0"},Ye=r(()=>e("label",{for:"pageName"},"Nombre de la página",-1)),Ze={class:"field col-12 pb-0 px-0"},et=r(()=>e("label",{for:"username"},"Nombre de usuario",-1)),tt={class:"field col-12 pb-0 px-0"},st=r(()=>e("label",{for:"password"},"Contraseña",-1)),ot={class:"field col-12 pb-0 px-0"},at=r(()=>e("label",{for:"uniqueCode"},"Código único",-1)),lt={class:"field col-12 pb-0 px-0"},it=r(()=>e("label",{for:"externalCode"},"Código externo",-1)),nt={class:"field col-12 pb-0 px-0"},rt=r(()=>e("label",{for:"wifiUsername"},"Nombre de usuario",-1)),dt={class:"field col-12 pb-0 px-0"},ct=r(()=>e("label",{for:"wifiPassword"},"Contraseña",-1)),ut={class:"field col-12 pb-0 px-0"},pt=r(()=>e("label",{for:"username"},"Nombre de usuario",-1)),mt={class:"field col-12 pb-0 px-0"},vt=r(()=>e("label",{for:"password"},"Contraseña",-1)),ft={class:"field col-12 pb-0 px-0"},_t=r(()=>e("label",{for:"boxName"},"Nombre de la caja",-1)),ht={class:"field col-12 pb-0 px-0"},gt=r(()=>e("label",{for:"password"},"Contraseña",-1)),yt=r(()=>e("p",{class:"p-3 text-2xl text-center",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-folder-open"}),j(" CONTROL HORARIOS EN SEDES")],-1)),bt={class:"p-0",style:{overflow:"hidden"}},wt={style:{display:"flex","align-items":"center",gap:"1rem"}},xt={class:"col-12 p-0 my-5"},kt=["src"],St={class:"field col-12 pb-0 px-0 col-12 mt-2 mb-6 p-0",style:{display:"flex","justify-content":"end",gap:"1rem"}},Vt=r(()=>e("i",{class:"fa-solid fa-camera"},null,-1)),Lt=r(()=>e("i",{class:"fa-solid fa-spinner"},null,-1)),Ct=r(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),$t={class:"grid p-0 m-0",style:{}},Dt=r(()=>e("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-circle-info mr-3"}),j(" INFORMACION BASICA")],-1)),Nt={style:{"overflow-x":"auto"},class:"py-3 md:py-0"},Ut={class:"p-0"},Et={style:{"font-weight":"bold","min-width":"10rem"}},Tt={key:0,class:"",style:{"min-width":"max-content"}},jt=["href"],At={class:"col-12 px-0 my-4",style:{display:"flex",gap:"1rem","justify-content":"start","align-items":"center"}},Pt=r(()=>e("div",{style:{"background-color":"#000",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1)),Ot={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#d0f5be",position:"relative","border-radius":"0.5rem"}},It={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},qt=r(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-wifi mr-3"}),j(" WIFI'S")],-1)),Rt=r(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),Bt={style:{"overflow-x":"auto"}},Wt={style:{display:"flex","align-items":"center",gap:"1rem"}},Ft=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre:")],-1)),Jt={key:0,class:"",style:{"min-width":"max-content"}},zt={style:{display:"flex","align-items":"center",gap:"1rem"}},Mt=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),Gt={key:0,class:"",style:{"min-width":"max-content"}},Ht={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#e7ceff",position:"relative","border-radius":"0.5rem"}},Kt={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},Qt=r(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-regular fa-credit-card mr-3"}),j(" DATAFONOS")],-1)),Xt=r(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),Yt={style:{display:"flex","align-items":"center",gap:"1rem"}},Zt={class:"p-0"},es={style:{"font-weight":"bold","min-width":"10rem"}},ts={key:0,class:"",style:{"min-width":"max-content"}},ss={style:{display:"flex","align-items":"center",gap:"1rem"}},os={class:"p-0"},as={style:{"font-weight":"bold","min-width":"10rem"}},ls={key:0,class:"",style:{"min-width":"max-content"}},is={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"rgb(237 120 85 / 43%)","border-radius":"0.5rem",position:"relative"}},ns={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},rs=r(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-paper-plane mr-3"}),j(" PAGINAS WEB")],-1)),ds=r(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),cs={style:{display:"flex","align-items":"center",gap:"1rem"}},us=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre :")],-1)),ps={key:0,class:"",style:{"min-width":"max-content"}},ms={style:{display:"flex","align-items":"center",gap:"1rem"}},vs=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Usuario:")],-1)),fs={key:0,class:"",style:{"min-width":"max-content"}},_s={style:{display:"flex","align-items":"center",gap:"1rem"}},hs=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),gs={key:0,class:"",style:{"min-width":"max-content"}},ys={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#ddedea","border-radius":"0.5rem",position:"relative"}},bs={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},ws=r(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-brands fa-app-store-ios mr-3"}),j("APLICACIONES")],-1)),xs=r(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),ks={style:{display:"flex","align-items":"center",gap:"1rem"}},Ss=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre :")],-1)),Vs={key:0,class:"",style:{"min-width":"max-content"}},Ls={style:{display:"flex","align-items":"center",gap:"1rem"}},Cs=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Usuario:")],-1)),$s={key:0,class:"",style:{"min-width":"max-content"}},Ds={style:{display:"flex","align-items":"center",gap:"1rem"}},Ns=r(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),Us={key:0,class:"",style:{"min-width":"max-content"}},Es=r(()=>e("div",{class:"col-12 p-0 my-4",style:{display:"flex","justify-content":"start","align-items":"center"}},[e("div",{style:{"background-color":"#ef4444",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}})],-1)),Ts=r(()=>e("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-clock mr-3"}),j(" HORARIO")],-1)),js={class:"col-12"},As={__name:"Directory",setup(E){const S=u(),a=de();u(a.currentSite);const i=Se();se(()=>{f.value={...a.currentSite}});const q=()=>{const n=`${m}/site/${a.currentSite.site_id}`;Ve.put(n,f.value).then(t=>{console.log("Actualización exitosa:",t.data),A.value=!1,a.currentSite={...f.value}}).catch(t=>{console.error("Error en la actualización:",t.response.data)})},A=u(!1),f=u({site_name:"",site_address:"",site_phone:"",email_address:"",wsp_link:"",maps:""});G(()=>a.currentSite,(n,t)=>{n!==t&&(f.value={...n})},{deep:!0,immediate:!0});const F=n=>{confirm("¿Estás seguro de que quieres eliminar esta red Wi-Fi?")&&Y(n)},Y=n=>{i.setLoading(!0,"borrando");const t=`${m}/site/${a.currentSite.site_id}/wifi-network/${n}`;fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(()=>{i.setLoading(!1,"borrando"),L.siteDirectory(a.currentSite.site_id).then(o=>_.value=o)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)})},_=u({}),h=u(!1),w=u({username:"",password:""}),g=()=>{if(i.setLoading(!0,"enviando"),!w.value.username||!w.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,username:w.value.username,password:w.value.password},t=`${m}/site/camera`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return i.setLoading(!1,"enviando"),o.json()}).then(o=>{console.log("Success:",o),h.value=!1,L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d),i.setLoading(!1,"enviando")}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},R=n=>{confirm("¿Estás seguro de que quieres eliminar este datáfono?")&&J(n)},J=n=>{i.setLoading(!0,"borrando");const t=`${m}/site/${a.currentSite.site_id}/dataphone/${n}`;fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(()=>{i.setLoading(!1,"enviando"),L.siteDirectory(a.currentSite.site_id).then(o=>_.value=o)}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},P=u(!1),y=u({boxName:"",password:""}),z=n=>{confirm("¿Estás seguro de que quieres eliminar esta aplicación?")&&ce(n)},ce=n=>{i.setLoading(!0,"borrando");const t=`${m}/site/${a.currentSite.site_id}/application/${n}`;fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return i.setLoading(!1,"enviando"),o.json()}).then(()=>{i.setLoading(!1,"enviando"),L.siteDirectory(a.currentSite.site_id).then(o=>_.value=o)}).catch(o=>{console.error("Error:",o)})},O=u(null),I=u(""),ue=n=>{const t=n.target.files[0];t&&(console.log("Archivo seleccionado:",t),O.value=t,I.value=URL.createObjectURL(t))},pe=()=>{if(i.setLoading(!0,"enviando"),!y.value.boxName||!y.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,box_name:y.value.boxName,password:y.value.password},t=`${m}/site/safe-box`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(i.setLoading(!1,"enviando"),!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"enviando"),console.log("Success:",o),L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d),P.value=!1,y.value.boxName="",y.value.password=""}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},H=u(!1),N=u({username:"",password:""}),me=()=>{if(i.setLoading(!0,"enviando"),!N.value.username||!N.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,username:N.value.username,password:N.value.password},t=`${m}/site/wifi-network`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"enviando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"enviando"),console.log("Success:",o),H.value=!1,N.value.username="",N.value.password="",L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d)}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},ve=n=>{confirm("¿Estás seguro de que quieres eliminar esta página web?")&&fe(n)},fe=n=>{i.setLoading(!0,"borrando");const t=`${m}/site/${a.currentSite.site_id}/web-page/${n}`;fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(()=>{i.setLoading(!1,"borrando"),L.siteDirectory(a.currentSite.site_id).then(o=>_.value=o)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)})},K=u(!1),T=u({unique_code:"",external_code:""}),_e=()=>{if(i.setLoading(!0,"enviando"),!T.value.unique_code){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,unique_code:T.value.unique_code,external_code:T.value.external_code},t=`${m}/site/dataphone`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),K.value=!1,L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),T.value.unique_code="",T.value.external_code=""},Q=u(!1),x=u({page:"",username:"",password:""}),he=()=>{if(i.setLoading(!0,"enviando"),!x.value.page||!x.value.username||!x.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,page:x.value.page,username:x.value.username,password:x.value.password},t=`${m}/siteweb-page`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),Q.value=!1,L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),x.value.page="",x.value.username="",x.value.password=""},X=u(!1),k=u({name:"",username:"",password:""}),ge=()=>{if(i.setLoading(!0,"enviando"),!k.value.name||!k.value.username||!k.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:a.currentSite.site_id,name:k.value.name,username:k.value.username,password:k.value.password},t=`${m}/site/application`;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(i.setLoading(!1,"borrando"),!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),X.value=!1,L.siteDirectory(a.currentSite.site_id).then(d=>_.value=d)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),k.value.name="",k.value.username="",k.value.password=""},ye=[{label:"Nombre",value:"site_name"},{label:"Direccion",value:"site_address"},{label:"Telefono",value:"site_phone"},{label:"Correo",value:"email_address"},{label:"Link de WhatsApp",value:"wsp_link",isLink:!0},{label:"Link de Maps",value:"maps",isLink:!0}];se(async()=>{var n;await L.getSites().then(t=>S.value=t),await L.siteDirectory(a.currentSite.site_id).then(t=>_.value=t),a.currentSite||a.setSite(S.value[0]),I.value=`${m}/read-product-image/600/site-${a.currentSite.site_id}`,O.value="",(n=a==null?void 0:a.currentSite)!=null&&n.site_id&&(W.value=await te.get(`${m}/is-open-status/${a.currentSite.site_id}`))});function be(n,t){const o=`${m}/upload-product-image/site-${t}`;i.setLoading(!0,"sibiendo imagen");const d=new FormData;d.append("file",n),fetch(o,{method:"POST",body:d}).then(V=>{V.ok?(console.log("Archivo photo cargado con éxito"),O.value="",i.setLoading(!1,"sibiendo imagen")):(console.error("Error al cargar foto de perfil:",V.status,V.statusText),i.setLoading(!1,"sibiendo imagen"))}).catch(V=>{console.error("Error en la solicitud:",V),i.setLoading(!1,"sibiendo imagen")})}G(()=>a.currentSite,n=>{i.setLoading(!0,`cargando información de ${n.site_name}`),i.setLoading(!1),L.siteDirectory(a.currentSite.site_id).then(t=>_.value=t),I.value=`${m}/read-product-image/600/site-${a.currentSite.site_id}`,O.value=""});const W=u(!1);return G(()=>a.currentSite,async()=>{var n;(n=a==null?void 0:a.currentSite)!=null&&n.site_id&&(W.value=await te.get(`${m}/is-open-status/${a.currentSite.site_id}`))}),G(W,async()=>{var n,t;(n=a==null?void 0:a.currentSite)!=null&&n.site_id&&await te.put(`${m}/open-close-site/site/${(t=a==null?void 0:a.currentSite)==null?void 0:t.site_id}/status/${W.value}`)}),(n,t)=>{var le;const o=U("InputText"),d=U("Button"),V=U("Dialog"),we=U("Dropdown"),xe=U("InputSwitch"),Z=U("Divider");return c(),p(B,null,[e("img",{class:"img-profile-add p-0",style:{width:"100%",filter:"blur(10px)","background-color":"#84e4ff",opacity:".5",position:"fixed","z-index":"-1",height:"120%","border-radius":"0.5rem","object-fit":"cover","aspect-ratio":"4 / 2"},src:I.value?I.value:`${$(m)}/read-product-image/96/site-${$(a).currentSite.site_id}`,alt:""},null,8,Pe),e("div",Oe,[l(V,{class:"mx-2",header:"Actualizar datos de la sede",visible:A.value,"onUpdate:visible":t[6]||(t[6]=s=>A.value=s),modal:!0,style:{width:"500px"}},{default:v(()=>[Ie,l(o,{class:"mb-3",style:{width:"100%"},id:"siteName",modelValue:f.value.site_name,"onUpdate:modelValue":t[0]||(t[0]=s=>f.value.site_name=s)},null,8,["modelValue"]),qe,l(o,{class:"mb-3",style:{width:"100%"},id:"siteAddress",modelValue:f.value.site_address,"onUpdate:modelValue":t[1]||(t[1]=s=>f.value.site_address=s)},null,8,["modelValue"]),Re,l(o,{class:"mb-3",style:{width:"100%"},id:"sitePhone",modelValue:f.value.site_phone,"onUpdate:modelValue":t[2]||(t[2]=s=>f.value.site_phone=s)},null,8,["modelValue"]),Be,l(o,{class:"mb-3",style:{width:"100%"},id:"emailAddress",modelValue:f.value.email_address,"onUpdate:modelValue":t[3]||(t[3]=s=>f.value.email_address=s)},null,8,["modelValue"]),We,l(o,{class:"mb-3",style:{width:"100%"},id:"whatsappLink",modelValue:f.value.wsp_link,"onUpdate:modelValue":t[4]||(t[4]=s=>f.value.wsp_link=s)},null,8,["modelValue"]),Fe,l(o,{class:"mb-3",style:{width:"100%"},id:"mapsLink",modelValue:f.value.maps,"onUpdate:modelValue":t[5]||(t[5]=s=>f.value.maps=s)},null,8,["modelValue"]),e("div",Je,[l(d,{class:"mt-4",label:"Guardar cambios",onClick:q,severity:"success"})])]),_:1},8,["visible"]),l(V,{header:"Agregar nueva aplicación",visible:X.value,"onUpdate:visible":t[10]||(t[10]=s=>X.value=s),modal:"",style:{width:"450px"}},{default:v(()=>[e("div",ze,[Me,l(o,{class:"col-12",id:"appName",modelValue:k.value.name,"onUpdate:modelValue":t[7]||(t[7]=s=>k.value.name=s)},null,8,["modelValue"])]),e("div",Ge,[He,l(o,{class:"col-12",id:"username",modelValue:k.value.username,"onUpdate:modelValue":t[8]||(t[8]=s=>k.value.username=s)},null,8,["modelValue"])]),e("div",Ke,[Qe,l(o,{class:"col-12",id:"password",type:"password",modelValue:k.value.password,"onUpdate:modelValue":t[9]||(t[9]=s=>k.value.password=s)},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:ge})]),_:1},8,["visible"]),l(V,{header:"Agregar nueva página web",visible:Q.value,"onUpdate:visible":t[14]||(t[14]=s=>Q.value=s),modal:"",style:{width:"450px"}},{default:v(()=>[e("div",Xe,[Ye,l(o,{class:"col-12",id:"pageName",modelValue:x.value.page,"onUpdate:modelValue":t[11]||(t[11]=s=>x.value.page=s)},null,8,["modelValue"])]),e("div",Ze,[et,l(o,{class:"col-12",id:"username",modelValue:x.value.username,"onUpdate:modelValue":t[12]||(t[12]=s=>x.value.username=s)},null,8,["modelValue"])]),e("div",tt,[st,l(o,{class:"col-12",id:"password",type:"password",modelValue:x.value.password,"onUpdate:modelValue":t[13]||(t[13]=s=>x.value.password=s)},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:he})]),_:1},8,["visible"]),l(V,{header:"Agregar nuevo datáfono",visible:K.value,"onUpdate:visible":t[17]||(t[17]=s=>K.value=s),modal:"",style:{width:"450px"}},{default:v(()=>[e("div",ot,[at,l(o,{class:"col-12",id:"uniqueCode",modelValue:T.value.unique_code,"onUpdate:modelValue":t[15]||(t[15]=s=>T.value.unique_code=s)},null,8,["modelValue"])]),e("div",lt,[it,l(o,{class:"col-12",id:"externalCode",modelValue:T.value.external_code,"onUpdate:modelValue":t[16]||(t[16]=s=>T.value.external_code=s)},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:_e})]),_:1},8,["visible"]),l(V,{header:"Agregar nueva red WiFi",visible:H.value,"onUpdate:visible":t[20]||(t[20]=s=>H.value=s),modal:"",style:{width:"450px"}},{default:v(()=>[e("div",nt,[rt,l(o,{class:"col-12",id:"wifiUsername",modelValue:N.value.username,"onUpdate:modelValue":t[18]||(t[18]=s=>N.value.username=s)},null,8,["modelValue"])]),e("div",dt,[ct,l(o,{class:"col-12",id:"wifiPassword",modelValue:N.value.password,"onUpdate:modelValue":t[19]||(t[19]=s=>N.value.password=s),type:"password"},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:me})]),_:1},8,["visible"]),l(V,{header:"Agregar nueva cámara",visible:h.value,"onUpdate:visible":t[23]||(t[23]=s=>h.value=s),modal:"",style:{width:"450px"},closable:!0,showHeader:!0},{default:v(()=>[e("div",ut,[pt,l(o,{class:"col-12",id:"username",modelValue:w.value.username,"onUpdate:modelValue":t[21]||(t[21]=s=>w.value.username=s)},null,8,["modelValue"])]),e("div",mt,[vt,l(o,{class:"col-12",id:"password",modelValue:w.value.password,"onUpdate:modelValue":t[22]||(t[22]=s=>w.value.password=s)},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:g})]),_:1},8,["visible"]),l(V,{header:"Agregar nueva caja fuerte",visible:P.value,"onUpdate:visible":t[26]||(t[26]=s=>P.value=s),modal:"",style:{width:"450px"}},{default:v(()=>[e("div",ft,[_t,l(o,{class:"col-12",id:"boxName",modelValue:y.value.boxName,"onUpdate:modelValue":t[24]||(t[24]=s=>y.value.boxName=s)},null,8,["modelValue"])]),e("div",ht,[gt,l(o,{class:"col-12",id:"password",modelValue:y.value.password,"onUpdate:modelValue":t[25]||(t[25]=s=>y.value.password=s),type:"password"},null,8,["modelValue"])]),l(d,{label:"Agregar",severity:"success",onClick:pe})]),_:1},8,["visible"]),yt,e("div",bt,[e("div",wt,[l(we,{modelValue:$(a).currentSite,"onUpdate:modelValue":t[27]||(t[27]=s=>$(a).currentSite=s),options:(le=S.value)==null?void 0:le.filter(s=>s.show_on_web),optionLabel:"site_name",style:{"max-width":"30rem","min-width":"80%"},class:"p-0",placeholder:"Sede"},null,8,["modelValue","options"]),l(xe,{modelValue:W.value,"onUpdate:modelValue":t[28]||(t[28]=s=>W.value=s),binary:"true"},null,8,["modelValue"])]),e("div",xt,[e("img",{class:"img-profile-add p-0",style:{width:"100%","border-radius":"0.5rem","object-fit":"cover","aspect-ratio":"4 / 2","background-color":"#84e4ff"},src:I.value?I.value:`${$(m)}/read-product-image/600/site-${$(a).currentSite.site_id}`,alt:""},null,8,kt),e("div",St,[e("input",{ref:"fileInput",type:"file",accept:"image/*",onChange:ue,style:{display:"none"}},null,544),l(d,{severity:"help",class:"",style:{width:"min-content"},onClick:t[29]||(t[29]=s=>{n.$refs.fileInput.click()})},{default:v(()=>[Vt]),_:1}),O.value?(c(),oe(d,{key:0,severity:"help",class:"",style:{width:"min-content"},onClick:t[30]||(t[30]=()=>{I.value=`${$(m)}/read-product-image/600/site-${$(a).currentSite.site_id}`,O.value=""})},{default:v(()=>[Lt]),_:1})):C("",!0),O.value?(c(),oe(d,{key:1,severity:"success",class:"",style:{width:"min-content"},onClick:t[31]||(t[31]=s=>be(O.value,$(a).currentSite.site_id))},{default:v(()=>[Ct]),_:1})):C("",!0)])]),e("div",$t,[Dt,e("div",Nt,[(c(),p(B,null,M(ye,(s,D)=>e("div",{key:D,class:"my-0 p-3 py-0",style:{display:"flex","align-items":"center",gap:"1rem"}},[e("div",Ut,[e("p",Et,b(s.label)+":",1)]),s.isLink?(c(),p("a",{key:1,class:"",style:{"min-width":"max-content"},href:$(a).currentSite[s.value]},b($(a).currentSite[s.value]),9,jt)):(c(),p("div",Tt,b($(a).currentSite[s.value]),1))])),64))]),e("div",At,[l(d,{severity:"help",style:{height:"min-content","min-width":"max-content"},label:"Actualizar informacion basica",onClick:t[32]||(t[32]=s=>A.value=!0)}),Pt]),e("div",Ot,[e("div",It,[qt,l(d,{onClick:t[33]||(t[33]=s=>H.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"help"},{default:v(()=>[Rt]),_:1})]),e("div",Bt,[(c(!0),p(B,null,M(_.value.wifi_networks,(s,D)=>(c(),p("div",{style:{},key:D,class:"my-0 col-12 py-0"},[l(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:ee=>F(s.wifi_id)},null,8,["onClick"]),e("div",Wt,[Ft,s.isLink?C("",!0):(c(),p("div",Jt,b(s.username),1))]),e("div",zt,[Mt,s.isLink?C("",!0):(c(),p("div",Gt,b(s.password),1))]),l(Z,{class:"p-0 m-1"})]))),128))])]),e("div",Ht,[e("div",Kt,[Qt,l(d,{onClick:t[34]||(t[34]=s=>K.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"help"},{default:v(()=>[Xt]),_:1})]),(c(!0),p(B,null,M(_.value.dataphones,(s,D)=>(c(),p("div",{key:D,class:"my-0 col-12 py-0",style:{}},[l(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:ee=>R(s.dataphone_id)},null,8,["onClick"]),e("div",Yt,[e("div",Zt,[e("p",es,"Codigo unico "+b(D+1)+":",1)]),s.isLink?C("",!0):(c(),p("div",ts,b(s.unique_code),1))]),e("div",ss,[e("div",os,[e("p",as,"Codigo externo "+b(D+1)+":",1)]),s.isLink?C("",!0):(c(),p("div",ls,b(s.external_code),1))]),l(Z,{class:"p-0 m-1"})]))),128))]),e("div",is,[e("div",ns,[rs,l(d,{onClick:t[35]||(t[35]=s=>Q.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"help"},{default:v(()=>[ds]),_:1})]),(c(!0),p(B,null,M(_.value.web_pages,(s,D)=>(c(),p("div",{key:D,class:"my-0 col-12 py-0",style:{}},[l(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:ee=>ve(s.web_page_id)},null,8,["onClick"]),e("div",cs,[us,s.isLink?C("",!0):(c(),p("div",ps,b(s.page),1))]),e("div",ms,[vs,s.isLink?C("",!0):(c(),p("div",fs,b(s.username),1))]),e("div",_s,[hs,s.isLink?C("",!0):(c(),p("div",gs,b(s.password),1))]),l(Z,{class:"p-0 m-1",style:{color:"red","background-color":"red"}})]))),128))]),e("div",ys,[e("div",bs,[ws,l(d,{onClick:t[36]||(t[36]=s=>X.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"help"},{default:v(()=>[xs]),_:1})]),(c(!0),p(B,null,M(_.value.applications,(s,D)=>(c(),p("div",{key:D,class:"my-0 col-12 py-0",style:{}},[l(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:ee=>z(s.application_id)},null,8,["onClick"]),e("div",ks,[Ss,s.isLink?C("",!0):(c(),p("div",Vs,b(s.name),1))]),e("div",Ls,[Cs,s.isLink?C("",!0):(c(),p("div",$s,b(s.username),1))]),e("div",Ds,[Ns,s.isLink?C("",!0):(c(),p("div",Us,b(s.password),1))])]))),128))]),Es,Ts,e("div",js,[l(Ae)])])])])],64)}}},qs=ie(As,[["__scopeId","data-v-7efc4078"]]);export{qs as default};
