import{s as S}from"./siteService-047b8184.js";import{a5 as we,_ as te,f,h as se,g as oe,U as h,r as O,o as c,c as u,a as e,d as i,w as _,t as p,k as $,J as Z,n as g,V as be,F as P,p as ae,e as ie,x as xe,l as U,b as B}from"./index-18a13e21.js";const le=we("directory",{persist:{key:"directory",storage:localStorage,paths:["currentSite"]},state:()=>({currentSite:{}}),getters:{},actions:{setSite(V){this.currentSite=V}}});const ee=V=>(ae("data-v-96e5c673"),V=V(),ie(),V),ke={class:"p-0",style:{"border-radius":"1rem"}},Se={class:"p-1"},Le=ee(()=>e("span",{class:"p-column-title"},"Code",-1)),Ce=ee(()=>e("span",{class:"p-column-title"},"Code",-1)),De={class:"col-12 px-1",style:{display:"flex",position:"relative","align-items":"center",gap:"0.5rem","justify-content":"end"}},Ve={key:0,class:"fa-solid fa-pen-to-square mr-2"},$e={key:1,class:"fa-solid fa-rotate-right mr-2"},Ee=ee(()=>e("i",{class:"fa-solid fa-floppy-disk mr-2"},null,-1)),Ne={__name:"horarios",setup(V){const L=f(!1),a=()=>{L.value&&m().then(w=>I.value=w),L.value=!L.value},W=f(!1),I=f([]),J=f(!1),z=le();se(()=>{m().then(w=>I.value=w)}),oe(()=>z.currentSite,w=>{m().then(q=>I.value=q)});const m=async()=>{J.value=!0,localStorage.getItem("siteId");try{const w=await fetch(`${h}/site-schedule/${z.currentSite.site_id}/`);if(!w.ok)throw"paila";const q=await w.json();return q.forEach(y=>{y.opening_time=new Date(`1970-01-01T${y.opening_time}`),y.closing_time=new Date(`1970-01-01T${y.closing_time}`)}),J.value=!1,q}catch(w){J.value=!1,console.log(w)}};f("");const R=async()=>{W.value=!0;try{const w=I.value.map(y=>{const j=y.opening_time instanceof Date?y.opening_time.toLocaleTimeString():y.opening_time,C=y.closing_time instanceof Date?y.closing_time.toLocaleTimeString():y.closing_time;return{...y,opening_time:j.split(" ")[0],closing_time:C.split(" ")[0]}});if(!(await fetch(`${h}/site-schedule/`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})).ok)throw"Error al enviar los datos";L.value=!1,W.value=!1}catch(w){console.log(w),W.value=!1}},E=f(["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]);return(w,q)=>{const y=O("Column"),j=O("Calendar"),C=O("DataTable"),G=O("Button");return c(),u(P,null,[e("div",ke,[i(C,{ref:"dt",class:"",value:I.value,dataKey:"id",style:{border:"1rem",overflow:"hidden"},rows:7,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} scheldules",responsiveLayout:"scroll",scrollable:""},{default:_(()=>[i(y,{class:"p-0",field:"day_of_week",header:"Dia",headerStyle:"width:1rem; min-width:1rem;"},{body:_(T=>{var b;return[e("span",Se,p((b=E.value[T.data.day_of_week-1])==null?void 0:b.slice(0,3)),1)]}),_:1}),i(y,{class:"p-0",field:"opening_time",header:"Abre",headerStyle:"width:2rem; min-width:2rem;"},{body:_(T=>[Le,i(j,{class:"p-0",disabled:!L.value,hourFormat:"12",timeOnly:"",modelValue:T.data.opening_time,"onUpdate:modelValue":b=>T.data.opening_time=b},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1}),i(y,{class:"p-1",field:"closing_time",header:"Cierra",headerStyle:"width:2rem; min-width:2rem;"},{body:_(T=>[Ce,i(j,{disabled:!L.value,hourFormat:"12",timeOnly:"",modelValue:T.data.closing_time,"onUpdate:modelValue":b=>T.data.closing_time=b},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["value"])]),e("div",De,[i(G,{severity:L.value?"help":"info",onClick:a,size:"small",class:"",style:{transition:"all  .5s","min-width":"max-content","align-items":"","font-weight":"bold","border-radius":"0.5rem"}},{default:_(()=>[L.value?(c(),u("i",$e)):(c(),u("i",Ve)),$(" "+p(L.value?"Restablecer":"Modificar horario"),1)]),_:1},8,["severity","onClick"]),i(be,{name:"fade"},{default:_(()=>[L.value?(c(),Z(G,{key:0,size:"small",severity:"success",onClick:R,style:{"font-weight":"bold","min-height":"max-content","border-radius":"0.5rem"},class:""},{default:_(()=>[Ee,$(" Guardar")]),_:1})):g("",!0)]),_:1})])],64)}}},Ue=te(Ne,[["__scopeId","data-v-96e5c673"]]);const n=V=>(ae("data-v-5e9e4690"),V=V(),ie(),V),je={class:"field col-12 pb-0 px-0"},Te=n(()=>e("label",{for:"appName"},"Nombre de la aplicación",-1)),Ae={class:"field col-12 pb-0 px-0"},Pe=n(()=>e("label",{for:"username"},"Nombre de usuario",-1)),Oe={class:"field col-12 pb-0 px-0"},qe=n(()=>e("label",{for:"password"},"Contraseña",-1)),Ie={class:"field col-12 pb-0 px-0"},Be=n(()=>e("label",{for:"pageName"},"Nombre de la página",-1)),Re={class:"field col-12 pb-0 px-0"},Fe=n(()=>e("label",{for:"username"},"Nombre de usuario",-1)),We={class:"field col-12 pb-0 px-0"},Je=n(()=>e("label",{for:"password"},"Contraseña",-1)),Me={class:"field col-12 pb-0 px-0"},He=n(()=>e("label",{for:"uniqueCode"},"Código único",-1)),ze={class:"field col-12 pb-0 px-0"},Ge=n(()=>e("label",{for:"externalCode"},"Código externo",-1)),Ke={class:"field col-12 pb-0 px-0"},Qe=n(()=>e("label",{for:"wifiUsername"},"Nombre de usuario",-1)),Xe={class:"field col-12 pb-0 px-0"},Ye=n(()=>e("label",{for:"wifiPassword"},"Contraseña",-1)),Ze={class:"field col-12 pb-0 px-0"},et=n(()=>e("label",{for:"username"},"Nombre de usuario",-1)),tt={class:"field col-12 pb-0 px-0"},st=n(()=>e("label",{for:"password"},"Contraseña",-1)),ot={class:"field col-12 pb-0 px-0"},at=n(()=>e("label",{for:"boxName"},"Nombre de la caja",-1)),it={class:"field col-12 pb-0 px-0"},lt=n(()=>e("label",{for:"password"},"Contraseña",-1)),nt={class:"col-12 mx-auto md:shadow-3 my-4 md:p-3 p-0",style:{"max-width":"600px","border-radius":"1rem"}},rt=n(()=>e("p",{class:"p-3 text-2xl text-center",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-folder-open"}),$(" Directorio")],-1)),dt={class:"p-0",style:{overflow:"hidden"}},ct={class:"col-12 p-0 my-5"},ut=["src"],pt={class:"field col-12 pb-0 px-0 col-12 mt-2 mb-6 p-0",style:{display:"flex","justify-content":"end",gap:"1rem"}},mt=n(()=>e("i",{class:"fa-solid fa-camera"},null,-1)),ft=n(()=>e("i",{class:"fa-solid fa-spinner"},null,-1)),_t=n(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),vt={class:"grid p-0 m-0",style:{}},ht=n(()=>e("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-circle-info mr-3"}),$(" INFORMACION BASICA")],-1)),yt={style:{"overflow-x":"auto"},class:"py-3 md:py-0"},gt={class:"p-0"},wt={style:{"font-weight":"bold","min-width":"10rem"}},bt={key:0,class:"",style:{"min-width":"max-content"}},xt=["href"],kt=n(()=>e("div",{class:"col-12 p-0 my-4",style:{display:"flex","justify-content":"start","align-items":"center"}},[e("div",{style:{"background-color":"#a855f7",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}})],-1)),St={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#f6f7c1","border-radius":"0.5rem",position:"relative"}},Lt={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},Ct=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-video mr-3"}),$(" CAMARAS")],-1)),Dt=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),Vt={style:{display:"flex","align-items":"center",gap:"1rem"}},$t={class:"p-0"},Et={style:{"font-weight":"bold","min-width":"10rem"}},Nt={key:0,class:"",style:{"min-width":"max-content"}},Ut={style:{display:"flex","align-items":"center",gap:"1rem"}},jt={class:"p-0"},Tt={style:{"font-weight":"bold","min-width":"10rem"}},At={key:0,class:"",style:{"min-width":"max-content"}},Pt={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#84e4ff",position:"relative","border-radius":"0.5rem"}},Ot={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},qt=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-shield mr-3"}),$(" CAJAS FUERTES")],-1)),It=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),Bt={style:{"overflow-x":"auto"}},Rt={style:{display:"flex","align-items":"center",gap:"1rem"}},Ft={class:"p-0"},Wt={style:{"font-weight":"bold","min-width":"10rem"}},Jt={key:0,class:"",style:{"min-width":"max-content"}},Mt={style:{display:"flex","align-items":"center",gap:"1rem"}},Ht={class:"p-0"},zt={style:{"font-weight":"bold","min-width":"10rem"}},Gt={key:0,class:"",style:{"min-width":"max-content"}},Kt={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#d0f5be",position:"relative","border-radius":"0.5rem"}},Qt={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},Xt=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-wifi mr-3"}),$(" WIFI'S")],-1)),Yt=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),Zt={style:{"overflow-x":"auto"}},es={style:{display:"flex","align-items":"center",gap:"1rem"}},ts=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre:")],-1)),ss={key:0,class:"",style:{"min-width":"max-content"}},os={style:{display:"flex","align-items":"center",gap:"1rem"}},as=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),is={key:0,class:"",style:{"min-width":"max-content"}},ls={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#e7ceff",position:"relative","border-radius":"0.5rem"}},ns={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},rs=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-regular fa-credit-card mr-3"}),$(" DATAFONOS")],-1)),ds=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),cs={style:{display:"flex","align-items":"center",gap:"1rem"}},us={class:"p-0"},ps={style:{"font-weight":"bold","min-width":"10rem"}},ms={key:0,class:"",style:{"min-width":"max-content"}},fs={style:{display:"flex","align-items":"center",gap:"1rem"}},_s={class:"p-0"},vs={style:{"font-weight":"bold","min-width":"10rem"}},hs={key:0,class:"",style:{"min-width":"max-content"}},ys={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"rgb(237 120 85 / 43%)","border-radius":"0.5rem",position:"relative"}},gs={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},ws=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-paper-plane mr-3"}),$(" PAGINAS WEB")],-1)),bs=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),xs={style:{display:"flex","align-items":"center",gap:"1rem"}},ks=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre :")],-1)),Ss={key:0,class:"",style:{"min-width":"max-content"}},Ls={style:{display:"flex","align-items":"center",gap:"1rem"}},Cs=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Usuario:")],-1)),Ds={key:0,class:"",style:{"min-width":"max-content"}},Vs={style:{display:"flex","align-items":"center",gap:"1rem"}},$s=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),Es={key:0,class:"",style:{"min-width":"max-content"}},Ns={class:"col-12 mt-4 mb-1 col-12",style:{"background-color":"#ddedea","border-radius":"0.5rem",position:"relative"}},Us={class:"text-xl p-0 mb-1 col-12",style:{display:"flex","justify-content":"space-between"}},js=n(()=>e("p",{style:{"font-weight":"bold"}},[e("i",{class:"fa-brands fa-app-store-ios mr-3"}),$("APLICACIONES")],-1)),Ts=n(()=>e("i",{class:"fa-solid fa-plus text-xl"},null,-1)),As={style:{display:"flex","align-items":"center",gap:"1rem"}},Ps=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Nombre :")],-1)),Os={key:0,class:"",style:{"min-width":"max-content"}},qs={style:{display:"flex","align-items":"center",gap:"1rem"}},Is=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Usuario:")],-1)),Bs={key:0,class:"",style:{"min-width":"max-content"}},Rs={style:{display:"flex","align-items":"center",gap:"1rem"}},Fs=n(()=>e("div",{class:"p-0"},[e("p",{style:{"font-weight":"bold","min-width":"10rem"}},"Clave:")],-1)),Ws={key:0,class:"",style:{"min-width":"max-content"}},Js=n(()=>e("div",{class:"col-12 p-0 my-4",style:{display:"flex","justify-content":"start","align-items":"center"}},[e("div",{style:{"background-color":"#ef4444",height:"0.3rem","border-radius":"0 1rem 1rem 0",width:"100%"}})],-1)),Ms=n(()=>e("p",{class:"text-xl mb-1 col-12",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-clock mr-3"}),$(" HORARIO")],-1)),Hs={class:"col-12"},zs={__name:"Directory",setup(V){const L=f(),a=xe(),W=l=>{confirm("¿Estás seguro de que quieres eliminar esta red Wi-Fi?")&&I(l)},I=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/wifi-network/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw a.setLoading(!1,"borrando"),new Error("Network response was not ok");return t.json()}).then(()=>{a.setLoading(!1,"borrando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{a.setLoading(!1,"borrando"),console.error("Error:",t)})},J=l=>{confirm("¿Estás seguro de que quieres eliminar esta caja fuerte?")&&z(l)},z=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/safe-box/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw a.setLoading(!1,"enviando"),new Error("Network response was not ok");return t.json()}).then(()=>{a.setLoading(!1,"enviando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{a.setLoading(!1,"enviando"),console.error("Error:",t)})},m=f({}),R=f(!1),E=f({username:"",password:""}),w=()=>{if(a.setLoading(!0,"enviando"),!E.value.username||!E.value.password){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,username:E.value.username,password:E.value.password},o=`${h}/site/camera`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return a.setLoading(!1,"enviando"),t.json()}).then(t=>{console.log("Success:",t),R.value=!1,S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d),a.setLoading(!1,"enviando")}).catch(t=>{a.setLoading(!1,"enviando"),console.error("Error:",t)})},q=l=>{confirm("¿Estás seguro de que quieres eliminar este datáfono?")&&y(l)},y=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/dataphone/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw a.setLoading(!1,"borrando"),new Error("Network response was not ok");return t.json()}).then(()=>{a.setLoading(!1,"enviando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{a.setLoading(!1,"enviando"),console.error("Error:",t)})},j=f(!1),C=f({boxName:"",password:""}),G=l=>{confirm("¿Estás seguro de que quieres eliminar esta aplicación?")&&T(l)},T=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/application/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return a.setLoading(!1,"enviando"),t.json()}).then(()=>{a.setLoading(!1,"enviando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{console.error("Error:",t)})},b=f(null),F=f(""),ne=l=>{const o=l.target.files[0];o&&(console.log("Archivo seleccionado:",o),b.value=o,F.value=URL.createObjectURL(o))},re=()=>{if(a.setLoading(!0,"enviando"),!C.value.boxName||!C.value.password){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,box_name:C.value.boxName,password:C.value.password},o=`${h}/site/safe-box`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(a.setLoading(!1,"enviando"),!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{a.setLoading(!1,"enviando"),console.log("Success:",t),S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d),j.value=!1,C.value.boxName="",C.value.password=""}).catch(t=>{a.setLoading(!1,"enviando"),console.error("Error:",t)})},K=f(!1),N=f({username:"",password:""}),de=()=>{if(a.setLoading(!0,"enviando"),!N.value.username||!N.value.password){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,username:N.value.username,password:N.value.password},o=`${h}/site/wifi-network`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(!t.ok)throw a.setLoading(!1,"enviando"),new Error("Network response was not ok");return t.json()}).then(t=>{a.setLoading(!1,"enviando"),console.log("Success:",t),K.value=!1,N.value.username="",N.value.password="",S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d)}).catch(t=>{a.setLoading(!1,"enviando"),console.error("Error:",t)})},ce=l=>{confirm("¿Estás seguro de que quieres eliminar esta página web?")&&ue(l)},ue=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/web-page/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw a.setLoading(!1,"borrando"),new Error("Network response was not ok");return t.json()}).then(()=>{a.setLoading(!1,"borrando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{a.setLoading(!1,"borrando"),console.error("Error:",t)})},Q=f(!1),A=f({unique_code:"",external_code:""}),pe=()=>{if(a.setLoading(!0,"enviando"),!A.value.unique_code){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,unique_code:A.value.unique_code,external_code:A.value.external_code},o=`${h}/site/dataphone`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(!t.ok)throw a.setLoading(!1,"borrando"),new Error("Network response was not ok");return t.json()}).then(t=>{a.setLoading(!1,"borrando"),console.log("Success:",t),Q.value=!1,S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d)}).catch(t=>{a.setLoading(!1,"borrando"),console.error("Error:",t)}),A.value.unique_code="",A.value.external_code=""},me=l=>{confirm("¿Estás seguro de que quieres eliminar esta cámara?")&&fe(l)},fe=l=>{a.setLoading(!0,"borrando");const o=`${h}/site/${r.currentSite.site_id}/camera/${l}`;fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw a.setLoading(!1,"enviando"),new Error("Network response was not ok");return t.json()}).then(()=>{a.setLoading(!1,"enviando"),S.siteDirectory(r.currentSite.site_id).then(t=>m.value=t)}).catch(t=>{console.error("Error:",t)})},X=f(!1),x=f({page:"",username:"",password:""}),_e=()=>{if(a.setLoading(!0,"enviando"),!x.value.page||!x.value.username||!x.value.password){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,page:x.value.page,username:x.value.username,password:x.value.password},o=`${h}/siteweb-page`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(!t.ok)throw a.setLoading(!1,"borrando"),new Error("Network response was not ok");return t.json()}).then(t=>{a.setLoading(!1,"borrando"),console.log("Success:",t),X.value=!1,S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d)}).catch(t=>{a.setLoading(!1,"borrando"),console.error("Error:",t)}),x.value.page="",x.value.username="",x.value.password=""},Y=f(!1),k=f({name:"",username:"",password:""}),ve=()=>{if(a.setLoading(!0,"enviando"),!k.value.name||!k.value.username||!k.value.password){alert("Por favor, completa todos los campos.");return}const l={site_id:r.currentSite.site_id,name:k.value.name,username:k.value.username,password:k.value.password},o=`${h}/site/application`;fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(t=>{if(a.setLoading(!1,"borrando"),!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{a.setLoading(!1,"borrando"),console.log("Success:",t),Y.value=!1,S.siteDirectory(r.currentSite.site_id).then(d=>m.value=d)}).catch(t=>{a.setLoading(!1,"borrando"),console.error("Error:",t)}),k.value.name="",k.value.username="",k.value.password=""},he=[{label:"Nombre",value:"site_name"},{label:"Direccion",value:"site_address"},{label:"Telefono",value:"site_phone"},{label:"Correo",value:"email_address"},{label:"Link de WhatsApp",value:"wsp_link",isLink:!0},{label:"Link de Maps",value:"maps",isLink:!0}],r=le();f(r.currentSite),se(async()=>{await S.getSites().then(l=>L.value=l),await S.siteDirectory(r.currentSite.site_id).then(l=>m.value=l),r.currentSite||r.setSite(L.value[0]),F.value=`${h}/read-product-image/600/site-${r.currentSite.site_id}`,b=""});function ye(l,o){const t=`${h}/upload-product-image/site-${o}`;a.setLoading(!0,"sibiendo imagen");const d=new FormData;d.append("file",l),fetch(t,{method:"POST",body:d}).then(D=>{D.ok?(console.log("Archivo photo cargado con éxito"),b.value="",a.setLoading(!1,"sibiendo imagen")):(console.error("Error al cargar foto de perfil:",D.status,D.statusText),a.setLoading(!1,"sibiendo imagen"))}).catch(D=>{console.error("Error en la solicitud:",D),a.setLoading(!1,"sibiendo imagen")})}return oe(()=>r.currentSite,l=>{a.setLoading(!0,`cargando información de ${l.site_name}`),a.setLoading(!1),S.siteDirectory(r.currentSite.site_id).then(o=>m.value=o),F.value=`${h}/read-product-image/600/site-${r.currentSite.site_id}`,b.value=""}),(l,o)=>{const t=O("InputText"),d=O("Button"),D=O("Dialog"),ge=O("Dropdown"),M=O("Divider");return c(),u(P,null,[i(D,{header:"Agregar nueva aplicación",visible:Y.value,"onUpdate:visible":o[3]||(o[3]=s=>Y.value=s),modal:"",style:{width:"450px"}},{default:_(()=>[e("div",je,[Te,i(t,{class:"col-12",id:"appName",modelValue:k.value.name,"onUpdate:modelValue":o[0]||(o[0]=s=>k.value.name=s)},null,8,["modelValue"])]),e("div",Ae,[Pe,i(t,{class:"col-12",id:"username",modelValue:k.value.username,"onUpdate:modelValue":o[1]||(o[1]=s=>k.value.username=s)},null,8,["modelValue"])]),e("div",Oe,[qe,i(t,{class:"col-12",id:"password",type:"password",modelValue:k.value.password,"onUpdate:modelValue":o[2]||(o[2]=s=>k.value.password=s)},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:ve})]),_:1},8,["visible"]),i(D,{header:"Agregar nueva página web",visible:X.value,"onUpdate:visible":o[7]||(o[7]=s=>X.value=s),modal:"",style:{width:"450px"}},{default:_(()=>[e("div",Ie,[Be,i(t,{class:"col-12",id:"pageName",modelValue:x.value.page,"onUpdate:modelValue":o[4]||(o[4]=s=>x.value.page=s)},null,8,["modelValue"])]),e("div",Re,[Fe,i(t,{class:"col-12",id:"username",modelValue:x.value.username,"onUpdate:modelValue":o[5]||(o[5]=s=>x.value.username=s)},null,8,["modelValue"])]),e("div",We,[Je,i(t,{class:"col-12",id:"password",type:"password",modelValue:x.value.password,"onUpdate:modelValue":o[6]||(o[6]=s=>x.value.password=s)},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:_e})]),_:1},8,["visible"]),i(D,{header:"Agregar nuevo datáfono",visible:Q.value,"onUpdate:visible":o[10]||(o[10]=s=>Q.value=s),modal:"",style:{width:"450px"}},{default:_(()=>[e("div",Me,[He,i(t,{class:"col-12",id:"uniqueCode",modelValue:A.value.unique_code,"onUpdate:modelValue":o[8]||(o[8]=s=>A.value.unique_code=s)},null,8,["modelValue"])]),e("div",ze,[Ge,i(t,{class:"col-12",id:"externalCode",modelValue:A.value.external_code,"onUpdate:modelValue":o[9]||(o[9]=s=>A.value.external_code=s)},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:pe})]),_:1},8,["visible"]),i(D,{header:"Agregar nueva red WiFi",visible:K.value,"onUpdate:visible":o[13]||(o[13]=s=>K.value=s),modal:"",style:{width:"450px"}},{default:_(()=>[e("div",Ke,[Qe,i(t,{class:"col-12",id:"wifiUsername",modelValue:N.value.username,"onUpdate:modelValue":o[11]||(o[11]=s=>N.value.username=s)},null,8,["modelValue"])]),e("div",Xe,[Ye,i(t,{class:"col-12",id:"wifiPassword",modelValue:N.value.password,"onUpdate:modelValue":o[12]||(o[12]=s=>N.value.password=s),type:"password"},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:de})]),_:1},8,["visible"]),i(D,{header:"Agregar nueva cámara",visible:R.value,"onUpdate:visible":o[16]||(o[16]=s=>R.value=s),modal:"",style:{width:"450px"},closable:!0,showHeader:!0},{default:_(()=>[e("div",Ze,[et,i(t,{class:"col-12",id:"username",modelValue:E.value.username,"onUpdate:modelValue":o[14]||(o[14]=s=>E.value.username=s)},null,8,["modelValue"])]),e("div",tt,[st,i(t,{class:"col-12",id:"password",modelValue:E.value.password,"onUpdate:modelValue":o[15]||(o[15]=s=>E.value.password=s)},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:w})]),_:1},8,["visible"]),i(D,{header:"Agregar nueva caja fuerte",visible:j.value,"onUpdate:visible":o[19]||(o[19]=s=>j.value=s),modal:"",style:{width:"450px"}},{default:_(()=>[e("div",ot,[at,i(t,{class:"col-12",id:"boxName",modelValue:C.value.boxName,"onUpdate:modelValue":o[17]||(o[17]=s=>C.value.boxName=s)},null,8,["modelValue"])]),e("div",it,[lt,i(t,{class:"col-12",id:"password",modelValue:C.value.password,"onUpdate:modelValue":o[18]||(o[18]=s=>C.value.password=s),type:"password"},null,8,["modelValue"])]),i(d,{label:"Agregar",severity:"success",onClick:re})]),_:1},8,["visible"]),e("div",nt,[rt,e("div",dt,[i(ge,{modelValue:U(r).currentSite,"onUpdate:modelValue":o[20]||(o[20]=s=>U(r).currentSite=s),options:L.value,optionLabel:"site_name",style:{"max-width":"30rem"},class:"col-12 p-0 md:col-4 md:m-3",placeholder:"Sede"},null,8,["modelValue","options"]),e("div",ct,[e("img",{class:"img-profile-add p-0",style:{width:"100%","border-radius":"1rem","object-fit":"cover","aspect-ratio":"4 / 3","background-color":"#84e4ff"},src:F.value?F.value:`${U(h)}/read-product-image/600/site-${U(r).currentSite.site_id}`,alt:""},null,8,ut),e("div",pt,[e("input",{ref:"fileInput",type:"file",accept:"image/*",onChange:ne,style:{display:"none"}},null,544),i(d,{severity:"info",class:"",style:{width:"min-content"},onClick:o[21]||(o[21]=s=>{l.$refs.fileInput.click()})},{default:_(()=>[mt]),_:1}),b.value?(c(),Z(d,{key:0,severity:"help",class:"",style:{width:"min-content"},onClick:o[22]||(o[22]=()=>{F.value=`${U(h)}/read-product-image/600/site-${U(r).currentSite.site_id}`,b.value=""})},{default:_(()=>[ft]),_:1})):g("",!0),b.value?(c(),Z(d,{key:1,severity:"success",class:"",style:{width:"min-content"},onClick:o[23]||(o[23]=s=>ye(b.value,U(r).currentSite.site_id))},{default:_(()=>[_t]),_:1})):g("",!0)])]),e("div",vt,[ht,e("div",yt,[(c(),u(P,null,B(he,(s,v)=>e("div",{key:v,class:"my-0 p-3 py-0",style:{display:"flex","align-items":"center",gap:"1rem"}},[e("div",gt,[e("p",wt,p(s.label)+":",1)]),s.isLink?(c(),u("a",{key:1,class:"",style:{"min-width":"max-content"},href:U(r).currentSite[s.value]},p(U(r).currentSite[s.value]),9,xt)):(c(),u("div",bt,p(U(r).currentSite[s.value]),1))])),64))]),kt,e("div",St,[e("div",Lt,[Ct,i(d,{onClick:o[24]||(o[24]=s=>R.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[Dt]),_:1})]),(c(!0),u(P,null,B(m.value.cameras,(s,v)=>(c(),u("div",{key:v,class:"my-0 col-12 py-0",style:{}},[i(d,{text:"",style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",class:"p-button-rounded p-button-danger p-0 text-2xl text-2xl",onClick:H=>me(s.camera_id)},null,8,["onClick"]),e("div",Vt,[e("div",$t,[e("p",Et,"Usuario "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",Nt,p(s.username),1))]),e("div",Ut,[e("div",jt,[e("p",Tt,"Clave "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",At,p(s.password),1))]),i(M,{class:"p-0 m-1"})]))),128))]),e("div",Pt,[e("div",Ot,[qt,i(d,{onClick:o[25]||(o[25]=s=>j.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[It]),_:1})]),e("div",Bt,[(c(!0),u(P,null,B(m.value.safe_boxes,(s,v)=>(c(),u("div",{key:v,class:"my-0 col-12 py-0",style:{}},[i(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:H=>J(s.safe_box_id)},null,8,["onClick"]),e("div",Rt,[e("div",Ft,[e("p",Wt,"Usuario "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",Jt,p(s.box_name),1))]),e("div",Mt,[e("div",Ht,[e("p",zt,"Clave "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",Gt,p(s.password),1))]),i(M,{class:"p-0 m-1"})]))),128))])]),e("div",Kt,[e("div",Qt,[Xt,i(d,{onClick:o[26]||(o[26]=s=>K.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[Yt]),_:1})]),e("div",Zt,[(c(!0),u(P,null,B(m.value.wifi_networks,(s,v)=>(c(),u("div",{style:{},key:v,class:"my-0 col-12 py-0"},[i(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:H=>W(s.wifi_id)},null,8,["onClick"]),e("div",es,[ts,s.isLink?g("",!0):(c(),u("div",ss,p(s.username),1))]),e("div",os,[as,s.isLink?g("",!0):(c(),u("div",is,p(s.password),1))]),i(M,{class:"p-0 m-1"})]))),128))])]),e("div",ls,[e("div",ns,[rs,i(d,{onClick:o[27]||(o[27]=s=>Q.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[ds]),_:1})]),(c(!0),u(P,null,B(m.value.dataphones,(s,v)=>(c(),u("div",{key:v,class:"my-0 col-12 py-0",style:{}},[i(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:H=>q(s.dataphone_id)},null,8,["onClick"]),e("div",cs,[e("div",us,[e("p",ps,"Codigo unico "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",ms,p(s.unique_code),1))]),e("div",fs,[e("div",_s,[e("p",vs,"Codigo externo "+p(v+1)+":",1)]),s.isLink?g("",!0):(c(),u("div",hs,p(s.external_code),1))]),i(M,{class:"p-0 m-1"})]))),128))]),e("div",ys,[e("div",gs,[ws,i(d,{onClick:o[28]||(o[28]=s=>X.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[bs]),_:1})]),(c(!0),u(P,null,B(m.value.web_pages,(s,v)=>(c(),u("div",{key:v,class:"my-0 col-12 py-0",style:{}},[i(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:H=>ce(s.web_page_id)},null,8,["onClick"]),e("div",xs,[ks,s.isLink?g("",!0):(c(),u("div",Ss,p(s.page),1))]),e("div",Ls,[Cs,s.isLink?g("",!0):(c(),u("div",Ds,p(s.username),1))]),e("div",Vs,[$s,s.isLink?g("",!0):(c(),u("div",Es,p(s.password),1))]),i(M,{class:"p-0 m-1",style:{color:"red","background-color":"red"}})]))),128))]),e("div",Ns,[e("div",Us,[js,i(d,{onClick:o[29]||(o[29]=s=>Y.value=!0),class:"p-0",rounded:"",style:{"aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center",width:"3rem",height:"3rem"},severity:"warning"},{default:_(()=>[Ts]),_:1})]),(c(!0),u(P,null,B(m.value.applications,(s,v)=>(c(),u("div",{key:v,class:"my-0 col-12 py-0",style:{}},[i(d,{style:{position:"absolute",right:"1rem"},icon:"fa-solid fa-trash-can",text:"",class:"p-button-rounded p-button-danger p-0 text-2xl",onClick:H=>G(s.application_id)},null,8,["onClick"]),e("div",As,[Ps,s.isLink?g("",!0):(c(),u("div",Os,p(s.name),1))]),e("div",qs,[Is,s.isLink?g("",!0):(c(),u("div",Bs,p(s.username),1))]),e("div",Rs,[Fs,s.isLink?g("",!0):(c(),u("div",Ws,p(s.password),1))])]))),128))]),Js,Ms,e("div",Hs,[i(Ue)])])])])],64)}}},Qs=te(zs,[["__scopeId","data-v-5e9e4690"]]);export{Qs as default};
