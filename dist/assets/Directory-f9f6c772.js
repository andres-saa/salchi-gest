import{s as $}from"./siteService-cc14d045.js";import{_ as Y,r as c,i as H,D as B,U as m,a as T,o as C,c as O,b as s,g as l,w as v,t as q,m as F,e as G,f as K,ac as pe,F as Z,p as ee,h as ae,L as me,j as z,u as L,d as ve,C as fe}from"./index-c4b6802b.js";import{u as se}from"./directorio-57124cf9.js";const Q=U=>(ee("data-v-afd941b0"),U=U(),ae(),U),_e={class:"p-0",style:{"border-radius":"1rem","background-color":"red"}},ge={class:"m-0"},he=Q(()=>s("span",{class:"p-column-title"},"Code",-1)),be=Q(()=>s("span",{class:"p-column-title"},"Code",-1)),we={class:"col-12 px-1",style:{display:"flex",position:"relative","background-color":"","align-items":"center",gap:"0.5rem","justify-content":"end"}},ye={key:0,class:"fa-solid fa-pen-to-square mr-2"},Se={key:1,class:"fa-solid fa-rotate-right mr-2"},xe=Q(()=>s("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1)),Ve={__name:"horarios",setup(U){const h=c(!1),t=()=>{h.value&&y().then(f=>A.value=f),h.value=!h.value},i=c(!1),A=c([]),P=c(!1),p=se();H(()=>{y().then(f=>A.value=f)}),B(()=>p.currentSite,f=>{y().then(x=>A.value=x)});const y=async()=>{P.value=!0,localStorage.getItem("siteId");try{const f=await fetch(`${m}/site-schedule/${p.currentSite.site_id}/`);if(!f.ok)throw"paila";const x=await f.json();return x.forEach(d=>{d.opening_time=new Date(`1970-01-01T${d.opening_time}`),d.closing_time=new Date(`1970-01-01T${d.closing_time}`)}),P.value=!1,x}catch(f){P.value=!1,console.log(f)}};c("");const R=async()=>{i.value=!0;try{const f=A.value.map(d=>{const b={hour12:!1,hour:"2-digit",minute:"2-digit"},V=d.opening_time instanceof Date?d.opening_time.toLocaleTimeString([],b):d.opening_time,j=d.closing_time instanceof Date?d.closing_time.toLocaleTimeString([],b):d.closing_time;return{...d,opening_time:V,closing_time:j}});if(!(await fetch(`${m}/site-schedule/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).ok)throw new Error("Error al enviar los datos");h.value=!1,i.value=!1}catch(f){console.log(f),i.value=!1}},S=c(["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]);return(f,x)=>{const d=T("Column"),b=T("Calendar"),V=T("DataTable"),j=T("Button");return C(),O(Z,null,[s("div",_e,[l(V,{stripedRowss:"",ref:"dt",class:"",value:A.value,dataKey:"id",style:{border:"1rem",overflow:"hidden"},rows:7,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} scheldules",responsiveLayout:"scroll",scrollable:""},{default:v(()=>[l(d,{style:{"max-width":"3rem"},class:"p-0",field:"day_of_week",header:"Dia",headerStyle:"width:1rem; min-width:1rem;"},{body:v(D=>[s("span",ge,q(S.value[D.data.day_of_week-1]),1)]),_:1}),l(d,{class:"p-0",field:"opening_time",header:"Abre",headerStyle:"width:2rem; min-width:2rem;"},{body:v(D=>[he,l(b,{class:"p-0",disabled:!h.value,hourFormat:"12",timeOnly:"",modelValue:D.data.opening_time,"onUpdate:modelValue":E=>D.data.opening_time=E},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),l(d,{class:"p-1",field:"closing_time",header:"Cierra",headerStyle:"width:2rem; min-width:2rem;"},{body:v(D=>[be,l(b,{disabled:!h.value,hourFormat:"12",timeOnly:"",modelValue:D.data.closing_time,"onUpdate:modelValue":E=>D.data.closing_time=E},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value"])]),s("div",we,[l(j,{severity:h.value?"help":"info",onClick:t,size:"small",class:"",style:{transition:"all  .5s","min-width":"max-content","align-items":"","font-weight":"bold","border-radius":"0.5rem"}},{default:v(()=>[h.value?(C(),O("i",Se)):(C(),O("i",ye)),F(" "+q(h.value?"Restablecer":"Modificar horario"),1)]),_:1},8,["severity","onClick"]),l(pe,{name:"fade"},{default:v(()=>[h.value?(C(),G(j,{key:0,size:"small",severity:"success",onClick:R,style:{"font-weight":"bold","min-height":"max-content","border-radius":"0.5rem"},class:""},{default:v(()=>[xe,F(" Guardar")]),_:1})):K("",!0)]),_:1})])],64)}}},ke=Y(Ve,[["__scopeId","data-v-afd941b0"]]);const r=U=>(ee("data-v-5f14cd9b"),U=U(),ae(),U),Le={class:"col-12 mx-auto md:shadow-3 py-6 md:p-3 p-0 px-2 mb-8 my-8",style:{"max-width":"700px","margin-top":"3rem","background-color":"white","border-radius":"0.5rem"}},Ce=r(()=>s("p",{class:"m-0",for:"siteName"},"Nombre de la sede",-1)),Ue=r(()=>s("p",{class:"m-0",for:"siteAddress"},"Dirección",-1)),De=r(()=>s("p",{class:"m-0",for:"sitePhone"},"Teléfono",-1)),Ne=r(()=>s("p",{class:"m-0",for:"emailAddress"},"Correo electrónico",-1)),$e=r(()=>s("p",{class:"m-0",for:"whatsappLink"},"Enlace de WhatsApp",-1)),Te=r(()=>s("p",{class:"m-0",for:"mapsLink"},"Enlace de maps",-1)),Pe={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Ae={class:"field col-12 pb-0 px-0"},Ee=r(()=>s("label",{for:"appName"},"Nombre de la aplicación",-1)),Oe={class:"field col-12 pb-0 px-0"},je=r(()=>s("label",{for:"username"},"Nombre de usuario",-1)),Ie={class:"field col-12 pb-0 px-0"},Re=r(()=>s("label",{for:"password"},"Contraseña",-1)),Be={class:"field col-12 pb-0 px-0"},qe=r(()=>s("label",{for:"pageName"},"Nombre de la página",-1)),Fe={class:"field col-12 pb-0 px-0"},Je=r(()=>s("label",{for:"username"},"Nombre de usuario",-1)),Me={class:"field col-12 pb-0 px-0"},We=r(()=>s("label",{for:"password"},"Contraseña",-1)),ze={class:"field col-12 pb-0 px-0"},He=r(()=>s("label",{for:"uniqueCode"},"Código único",-1)),Ge={class:"field col-12 pb-0 px-0"},Ke=r(()=>s("label",{for:"externalCode"},"Código externo",-1)),Qe={class:"field col-12 pb-0 px-0"},Xe=r(()=>s("label",{for:"wifiUsername"},"Nombre de usuario",-1)),Ye={class:"field col-12 pb-0 px-0"},Ze=r(()=>s("label",{for:"wifiPassword"},"Contraseña",-1)),ea={class:"field col-12 pb-0 px-0"},aa=r(()=>s("label",{for:"username"},"Nombre de usuario",-1)),sa={class:"field col-12 pb-0 px-0"},oa=r(()=>s("label",{for:"password"},"Contraseña",-1)),ta={class:"field col-12 pb-0 px-0"},la=r(()=>s("label",{for:"boxName"},"Nombre de la caja",-1)),ia={class:"field col-12 pb-0 px-0"},na=r(()=>s("label",{for:"password"},"Contraseña",-1)),ra=r(()=>s("p",{class:"p-3 text-2xl text-center",style:{"font-weight":"bold"}},[s("i",{class:"fa-solid fa-folder-open"}),F(" CONTROL HORARIOS EN SEDES")],-1)),da={class:"p-0",style:{overflow:"hidden"}},ua={style:{display:"flex","align-items":"center",gap:"1rem"}},ca={class:"col-12 p-0 my-5"},pa=["src"],ma={class:"field col-12 pb-0 px-0 col-12 mt-2 mb-6 p-0",style:{display:"flex","justify-content":"end",gap:"1rem"}},va=r(()=>s("i",{class:"fa-solid fa-camera"},null,-1)),fa=r(()=>s("i",{class:"fa-solid fa-spinner"},null,-1)),_a=r(()=>s("i",{class:"fa-solid fa-floppy-disk"},null,-1)),ga={class:"grid p-0 m-0",style:{}},ha=r(()=>s("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[s("i",{class:"fa-solid fa-circle-info mr-3"}),F(" INFORMACION BASICA")],-1)),ba={style:{"overflow-x":"auto"},class:"py-3 md:py-0"},wa={class:"p-0"},ya={style:{"font-weight":"bold","min-width":"10rem"}},Sa={key:0,class:"",style:{"min-width":"max-content"}},xa=["href"],Va={class:"col-12 px-0 my-4",style:{display:"flex",gap:"1rem","justify-content":"start","align-items":"center"}},ka=r(()=>s("div",{style:{"background-color":"#000",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1)),La=r(()=>s("div",{class:"col-12 p-0 my-4",style:{display:"flex","justify-content":"start","align-items":"center"}},[s("div",{style:{"background-color":"#ef4444",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}})],-1)),Ca=r(()=>s("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[s("i",{class:"fa-solid fa-clock mr-3"}),F(" HORARIO")],-1)),Ua={class:"col-12"},Da={__name:"Directory",setup(U){const h=c(),t=se();c(t.currentSite);const i=me();H(()=>{p.value={...t.currentSite}});const A=()=>{const n=`${m}/site/${t.currentSite.site_id}`;fe.put(n,p.value).then(e=>{console.log("Actualización exitosa:",e.data),P.value=!1,t.currentSite={...p.value}}).catch(e=>{console.error("Error en la actualización:",e.response.data)})},P=c(!1),p=c({site_name:"",site_address:"",site_phone:"",email_address:"",wsp_link:"",maps:""});B(()=>t.currentSite,(n,e)=>{n!==e&&(p.value={...n})},{deep:!0,immediate:!0});const y=c({}),R=c(!1),S=c({username:"",password:""}),f=()=>{if(i.setLoading(!0,"enviando"),!S.value.username||!S.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,username:S.value.username,password:S.value.password},e=`${m}/site/camera`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return i.setLoading(!1,"enviando"),o.json()}).then(o=>{console.log("Success:",o),R.value=!1,$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u),i.setLoading(!1,"enviando")}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},x=c(!1),d=c({boxName:"",password:""}),b=c(null),V=c(""),j=n=>{const e=n.target.files[0];e&&(console.log("Archivo seleccionado:",e),b.value=e,V.value=URL.createObjectURL(e))},D=()=>{if(i.setLoading(!0,"enviando"),!d.value.boxName||!d.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,box_name:d.value.boxName,password:d.value.password},e=`${m}/site/safe-box`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(i.setLoading(!1,"enviando"),!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"enviando"),console.log("Success:",o),$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u),x.value=!1,d.value.boxName="",d.value.password=""}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},E=c(!1),k=c({username:"",password:""}),oe=()=>{if(i.setLoading(!0,"enviando"),!k.value.username||!k.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,username:k.value.username,password:k.value.password},e=`${m}/site/wifi-network`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"enviando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"enviando"),console.log("Success:",o),E.value=!1,k.value.username="",k.value.password="",$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u)}).catch(o=>{i.setLoading(!1,"enviando"),console.error("Error:",o)})},J=c(!1),N=c({unique_code:"",external_code:""}),te=()=>{if(i.setLoading(!0,"enviando"),!N.value.unique_code){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,unique_code:N.value.unique_code,external_code:N.value.external_code},e=`${m}/site/dataphone`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),J.value=!1,$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),N.value.unique_code="",N.value.external_code=""},M=c(!1),_=c({page:"",username:"",password:""}),le=()=>{if(i.setLoading(!0,"enviando"),!_.value.page||!_.value.username||!_.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,page:_.value.page,username:_.value.username,password:_.value.password},e=`${m}/siteweb-page`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(!o.ok)throw i.setLoading(!1,"borrando"),new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),M.value=!1,$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),_.value.page="",_.value.username="",_.value.password=""},W=c(!1),g=c({name:"",username:"",password:""}),ie=()=>{if(i.setLoading(!0,"enviando"),!g.value.name||!g.value.username||!g.value.password){alert("Por favor, completa todos los campos.");return}const n={site_id:t.currentSite.site_id,name:g.value.name,username:g.value.username,password:g.value.password},e=`${m}/site/application`;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>{if(i.setLoading(!1,"borrando"),!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{i.setLoading(!1,"borrando"),console.log("Success:",o),W.value=!1,$.siteDirectory(t.currentSite.site_id).then(u=>y.value=u)}).catch(o=>{i.setLoading(!1,"borrando"),console.error("Error:",o)}),g.value.name="",g.value.username="",g.value.password=""},ne=[{label:"Nombre",value:"site_name"},{label:"Direccion",value:"site_address"},{label:"Telefono",value:"site_phone"},{label:"Correo",value:"email_address"},{label:"Link de WhatsApp",value:"wsp_link",isLink:!0},{label:"Link de Maps",value:"maps",isLink:!0}];H(async()=>{var n;await $.getSites().then(e=>h.value=e),await $.siteDirectory(t.currentSite.site_id).then(e=>y.value=e),t.currentSite||t.setSite(h.value[0]),V.value=`${m}/read-product-image/600/site-${t.currentSite.site_id}`,b.value="",(n=t==null?void 0:t.currentSite)!=null&&n.site_id&&(I.value=await z.get(`${m}/is-open-status/${t.currentSite.site_id}`))});function re(n,e){const o=`${m}/upload-product-image/site-${e}`;i.setLoading(!0,"sibiendo imagen");const u=new FormData;u.append("file",n),fetch(o,{method:"POST",body:u}).then(w=>{w.ok?(console.log("Archivo photo cargado con éxito"),b.value="",i.setLoading(!1,"sibiendo imagen")):(console.error("Error al cargar foto de perfil:",w.status,w.statusText),i.setLoading(!1,"sibiendo imagen"))}).catch(w=>{console.error("Error en la solicitud:",w),i.setLoading(!1,"sibiendo imagen")})}B(()=>t.currentSite,n=>{i.setLoading(!0,`cargando información de ${n.site_name}`),i.setLoading(!1),$.siteDirectory(t.currentSite.site_id).then(e=>y.value=e),V.value=`${m}/read-product-image/600/site-${t.currentSite.site_id}`,b.value=""});const I=c(!1);return B(()=>t.currentSite,async()=>{var n;(n=t==null?void 0:t.currentSite)!=null&&n.site_id&&(I.value=await z.get(`${m}/is-open-status/${t.currentSite.site_id}`))}),B(I,async()=>{var n,e;(n=t==null?void 0:t.currentSite)!=null&&n.site_id&&await z.put(`${m}/open-close-site/site/${(e=t==null?void 0:t.currentSite)==null?void 0:e.site_id}/status/${I.value}`)}),(n,e)=>{var X;const o=T("InputText"),u=T("Button"),w=T("Dialog"),de=T("Dropdown"),ue=T("InputSwitch");return C(),O("div",Le,[l(w,{class:"mx-2",header:"Actualizar datos de la sede",visible:P.value,"onUpdate:visible":e[6]||(e[6]=a=>P.value=a),modal:!0,style:{width:"500px"}},{default:v(()=>[Ce,l(o,{class:"mb-3",style:{width:"100%"},id:"siteName",modelValue:p.value.site_name,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value.site_name=a)},null,8,["modelValue"]),Ue,l(o,{class:"mb-3",style:{width:"100%"},id:"siteAddress",modelValue:p.value.site_address,"onUpdate:modelValue":e[1]||(e[1]=a=>p.value.site_address=a)},null,8,["modelValue"]),De,l(o,{class:"mb-3",style:{width:"100%"},id:"sitePhone",modelValue:p.value.site_phone,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value.site_phone=a)},null,8,["modelValue"]),Ne,l(o,{class:"mb-3",style:{width:"100%"},id:"emailAddress",modelValue:p.value.email_address,"onUpdate:modelValue":e[3]||(e[3]=a=>p.value.email_address=a)},null,8,["modelValue"]),$e,l(o,{class:"mb-3",style:{width:"100%"},id:"whatsappLink",modelValue:p.value.wsp_link,"onUpdate:modelValue":e[4]||(e[4]=a=>p.value.wsp_link=a)},null,8,["modelValue"]),Te,l(o,{class:"mb-3",style:{width:"100%"},id:"mapsLink",modelValue:p.value.maps,"onUpdate:modelValue":e[5]||(e[5]=a=>p.value.maps=a)},null,8,["modelValue"]),s("div",Pe,[l(u,{class:"mt-4",label:"Guardar cambios",onClick:A,severity:"success"})])]),_:1},8,["visible"]),l(w,{header:"Agregar nueva aplicación",visible:W.value,"onUpdate:visible":e[10]||(e[10]=a=>W.value=a),modal:"",style:{width:"450px"}},{default:v(()=>[s("div",Ae,[Ee,l(o,{class:"col-12",id:"appName",modelValue:g.value.name,"onUpdate:modelValue":e[7]||(e[7]=a=>g.value.name=a)},null,8,["modelValue"])]),s("div",Oe,[je,l(o,{class:"col-12",id:"username",modelValue:g.value.username,"onUpdate:modelValue":e[8]||(e[8]=a=>g.value.username=a)},null,8,["modelValue"])]),s("div",Ie,[Re,l(o,{class:"col-12",id:"password",type:"password",modelValue:g.value.password,"onUpdate:modelValue":e[9]||(e[9]=a=>g.value.password=a)},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:ie})]),_:1},8,["visible"]),l(w,{header:"Agregar nueva página web",visible:M.value,"onUpdate:visible":e[14]||(e[14]=a=>M.value=a),modal:"",style:{width:"450px"}},{default:v(()=>[s("div",Be,[qe,l(o,{class:"col-12",id:"pageName",modelValue:_.value.page,"onUpdate:modelValue":e[11]||(e[11]=a=>_.value.page=a)},null,8,["modelValue"])]),s("div",Fe,[Je,l(o,{class:"col-12",id:"username",modelValue:_.value.username,"onUpdate:modelValue":e[12]||(e[12]=a=>_.value.username=a)},null,8,["modelValue"])]),s("div",Me,[We,l(o,{class:"col-12",id:"password",type:"password",modelValue:_.value.password,"onUpdate:modelValue":e[13]||(e[13]=a=>_.value.password=a)},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:le})]),_:1},8,["visible"]),l(w,{header:"Agregar nuevo datáfono",visible:J.value,"onUpdate:visible":e[17]||(e[17]=a=>J.value=a),modal:"",style:{width:"450px"}},{default:v(()=>[s("div",ze,[He,l(o,{class:"col-12",id:"uniqueCode",modelValue:N.value.unique_code,"onUpdate:modelValue":e[15]||(e[15]=a=>N.value.unique_code=a)},null,8,["modelValue"])]),s("div",Ge,[Ke,l(o,{class:"col-12",id:"externalCode",modelValue:N.value.external_code,"onUpdate:modelValue":e[16]||(e[16]=a=>N.value.external_code=a)},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:te})]),_:1},8,["visible"]),l(w,{header:"Agregar nueva red WiFi",visible:E.value,"onUpdate:visible":e[20]||(e[20]=a=>E.value=a),modal:"",style:{width:"450px"}},{default:v(()=>[s("div",Qe,[Xe,l(o,{class:"col-12",id:"wifiUsername",modelValue:k.value.username,"onUpdate:modelValue":e[18]||(e[18]=a=>k.value.username=a)},null,8,["modelValue"])]),s("div",Ye,[Ze,l(o,{class:"col-12",id:"wifiPassword",modelValue:k.value.password,"onUpdate:modelValue":e[19]||(e[19]=a=>k.value.password=a),type:"password"},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:oe})]),_:1},8,["visible"]),l(w,{header:"Agregar nueva cámara",visible:R.value,"onUpdate:visible":e[23]||(e[23]=a=>R.value=a),modal:"",style:{width:"450px"},closable:!0,showHeader:!0},{default:v(()=>[s("div",ea,[aa,l(o,{class:"col-12",id:"username",modelValue:S.value.username,"onUpdate:modelValue":e[21]||(e[21]=a=>S.value.username=a)},null,8,["modelValue"])]),s("div",sa,[oa,l(o,{class:"col-12",id:"password",modelValue:S.value.password,"onUpdate:modelValue":e[22]||(e[22]=a=>S.value.password=a)},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:f})]),_:1},8,["visible"]),l(w,{header:"Agregar nueva caja fuerte",visible:x.value,"onUpdate:visible":e[26]||(e[26]=a=>x.value=a),modal:"",style:{width:"450px"}},{default:v(()=>[s("div",ta,[la,l(o,{class:"col-12",id:"boxName",modelValue:d.value.boxName,"onUpdate:modelValue":e[24]||(e[24]=a=>d.value.boxName=a)},null,8,["modelValue"])]),s("div",ia,[na,l(o,{class:"col-12",id:"password",modelValue:d.value.password,"onUpdate:modelValue":e[25]||(e[25]=a=>d.value.password=a),type:"password"},null,8,["modelValue"])]),l(u,{label:"Agregar",severity:"success",onClick:D})]),_:1},8,["visible"]),ra,s("div",da,[s("div",ua,[l(de,{modelValue:L(t).currentSite,"onUpdate:modelValue":e[27]||(e[27]=a=>L(t).currentSite=a),options:(X=h.value)==null?void 0:X.filter(a=>a.show_on_web),optionLabel:"site_name",style:{"max-width":"30rem","min-width":"80%"},class:"p-0",placeholder:"Sede"},null,8,["modelValue","options"]),l(ue,{modelValue:I.value,"onUpdate:modelValue":e[28]||(e[28]=a=>I.value=a),binary:"true"},null,8,["modelValue"])]),s("div",ca,[s("img",{class:"img-profile-add p-0",style:{width:"100%","border-radius":"0.5rem","object-fit":"cover","aspect-ratio":"4 / 2","background-color":"#84e4ff"},src:V.value?V.value:`${L(m)}/read-product-image/600/site-${L(t).currentSite.site_id}`,alt:""},null,8,pa),s("div",ma,[s("input",{ref:"fileInput",type:"file",accept:"image/*",onChange:j,style:{display:"none"}},null,544),l(u,{severity:"help",class:"",style:{width:"min-content"},onClick:e[29]||(e[29]=a=>{n.$refs.fileInput.click()})},{default:v(()=>[va]),_:1}),b.value?(C(),G(u,{key:0,severity:"help",class:"",style:{width:"min-content"},onClick:e[30]||(e[30]=()=>{V.value=`${L(m)}/read-product-image/600/site-${L(t).currentSite.site_id}`,b.value=""})},{default:v(()=>[fa]),_:1})):K("",!0),b.value?(C(),G(u,{key:1,severity:"success",class:"",style:{width:"min-content"},onClick:e[31]||(e[31]=a=>re(b.value,L(t).currentSite.site_id))},{default:v(()=>[_a]),_:1})):K("",!0)])]),s("div",ga,[ha,s("div",ba,[(C(),O(Z,null,ve(ne,(a,ce)=>s("div",{key:ce,class:"my-0 p-3 py-0",style:{display:"flex","align-items":"center",gap:"1rem"}},[s("div",wa,[s("p",ya,q(a.label)+":",1)]),a.isLink?(C(),O("a",{key:1,class:"",style:{"min-width":"max-content"},href:L(t).currentSite[a.value]},q(L(t).currentSite[a.value]),9,xa)):(C(),O("div",Sa,q(L(t).currentSite[a.value]),1))])),64))]),s("div",Va,[l(u,{severity:"help",style:{height:"min-content","min-width":"max-content"},label:"Actualizar informacion basica",onClick:e[32]||(e[32]=a=>P.value=!0)}),ka]),La,Ca,s("div",Ua,[l(ke)])])])])}}},Pa=Y(Da,[["__scopeId","data-v-5f14cd9b"]]);export{Pa as default};
