<<<<<<<< HEAD:dist/assets/shift_work_schedule-356ba726.js
import{_ as Ve,r as n,l as We,J as je,A as Fe,i as Ne,U as k,x as Me,ad as ae,a as R,o as u,c as m,g as l,w as h,b as t,u as V,F as oe,d as le,j as W,t as p,f as ne,X as Be,k as ue,a6 as Ae,p as Re,h as He}from"./index-9672dc6b.js";import{u as me,e as Q,s as qe,a as pe,b as ve,c as ye}from"./userService-27ee0de0.js";import{s as ze}from"./siteService-00b98a17.js";import"./editor.esm-9ac76b80.js";import{f as _e,s as Y}from"./format-8cf56335.js";const v=H=>(Re("data-v-bc608e1d"),H=H(),He(),H),Je={style:{"margin-top":"4rem"},class:"px-2 mx-0 col-12"},Pe={key:0,class:"user-info",style:{display:"flex","flex-direction":"column","align-items":"center"}},Ke=["src"],Xe={class:"col-12 p-0 mt-4"},Ze={key:0},Ge={key:0,class:"p-0 my-1"},Qe=v(()=>t("b",null," Desde: ",-1)),Ye={key:1,class:"p-0 my-1"},et=v(()=>t("b",null," Hasta: ",-1)),tt={key:2,class:"p-0 my-1 text-xl",style:{color:"green"}},st=v(()=>t("b",null," Descansa ",-1)),at=[st],ot={class:"p-0 my-1"},lt=v(()=>t("b",null,"Cargo:",-1)),nt={class:"p-0 my-1"},it=v(()=>t("b",null,"Telefono:",-1)),rt={class:"p-0 my-1"},dt=v(()=>t("b",null,"Contrato",-1)),ct={class:"col-12 p-0 m-0 my-2"},ut={class:"col-12 p-0 m-0 my-2"},mt={class:"col-12 p-0 m-0 my-2"},pt={class:"col-12 p-0 m-0 my-2"},vt={class:"col-12 p-0 my-2"},yt={class:"col-12 p-0 my-2"},_t=v(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Desde:",-1)),ht=v(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Hasta:",-1)),ft=v(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este día de trabajo y todos sus registros?")],-1)),gt=v(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este registro?")],-1)),wt=v(()=>t("h3",null,"Nueva semana",-1)),bt={class:"col-12 p-0 m-0 mb-2 shadow-3",style:{}},Dt={class:"grid px-8 md:mx-auto",style:{"max-width":"800px"}},kt={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},St={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},xt={class:"col-12 md:col-2 py-2 m-0",style:{height:"4rem"}},Tt={class:"grid",style:{margin:"auto"}},Ct={class:"col-2 p-0 px-2",style:{height:"80vh",width:"min-content","overflow-y":"auto"}},Ut={class:"p-0 text-sm",style:{display:"flex","justify-content":"center"}},$t={style:{display:"flex",gap:"1rem","flex-direction":"column"},class:"pb-3 m-auto"},Lt=["onDragstart"],Ot=["onClick","src","onError"],Et={class:"my-0 py-0",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},It={class:"my-0 py-0",style:{"min-width":"min-content","text-transform":"uppercase","text-align":"center"}},Vt={class:"col",style:{height:"80vh","min-width":"300px","overflow-y":"auto"}},Wt={class:"col-12 pb-6"},jt={style:{display:"flex",gap:"0rem","flex-direction":"column"}},Ft={class:"py-0 px-4 text-center col-12 m-0 p-0 text",style:{"font-weight":"bold","text-shadow":"0 0 3px black","text-transform":"uppercase"}},Nt={style:{"overflow-x":"auto"}},Mt={style:{}},Bt=["onDrop"],At={class:"py-0 my-0 text-sm",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},Rt=["onClick","src","onError"],Ht={key:0,class:"text-sm"},qt={class:"py-0 my-0 text-sm text-center"},zt={key:1,class:"text-sm"},Jt={class:"py-0 my-0"},Pt=v(()=>t("p",{class:"py-0 my-0"},[t("b",{style:{color:"green"}},"DESCANSA")],-1)),Kt={style:{"text-transform":"uppercase"}},Xt=v(()=>t("p",null,"Hora de llegada:",-1)),Zt=v(()=>t("p",null,"Hora de salida:",-1)),Gt={class:"col-12 p-0",style:{display:"flex","justify-content":"space-between"}},Qt={__name:"shift_work_schedule",setup(H){n("");const q=n(!1),d=n(null);n(null);const ie=s=>{d.value=s,q.value=!0},j=n(!1),f=n(new Date),w=n(new Date),z=We(),c=je(),F=n(!1),J=n(null),g=n(),N=n(),U=n(),O=n(),$=n(!1),y=n(null),S=n(null),T=n(new Date),C=n(new Date),re=Fe(()=>!U.value||!O.value?"":`${_e(U.value,"dd/MM/yyyy")} - ${_e(O.value,"dd/MM/yyyy")}`),he=()=>{f.value=U.value||new Date,w.value=O.value||new Date,j.value=!0},fe=()=>{j.value=!1},L=async()=>{U.value=f.value,O.value=w.value,j.value=!1,await G(U.value),I()},de=()=>{const s=new Date;f.value=Y(s,{weekStartsOn:1}),w.value=Q(s,{weekStartsOn:1}),L()},ge=()=>{const s=Y(new Date,{weekStartsOn:1});f.value=qe(s,7),w.value=Q(f.value,{weekStartsOn:1}),L()},we=()=>{const s=new Date;f.value=pe(s),w.value=ve(s),L()},be=()=>{const s=new Date;f.value=pe(ye(s,1)),w.value=ve(ye(s,1)),L()},De=s=>{J.value=s,F.value=!0},ke=async()=>{if(F.value=!1,c.setLoading(!0,"borrando"),!J.value)return;const s=await fetch(`${k}/shift_work_records/${J.value}`,{method:"DELETE"});s.ok?(I(),c.setLoading(!1,"borrando")):(console.error("Error al eliminar el registro:",await s.text()),alert("Hubo un error al eliminar el registro."),c.setLoading(!1,"borrando")),J.value=null},M=n(!1),P=n(null),Se=s=>{P.value=s,M.value=!0},xe=async()=>{if(M.value=!1,!P.value)return;c.setLoading(!0,"borrando"),(await fetch(`${k}/shift_work_days/${P.value}`,{method:"DELETE"})).ok?(X.value=X.value.filter(e=>e.id!==P.value),c.setLoading(!1,"borrando")):(alert("Hubo un error al eliminar el día de trabajo."),c.setLoading(!1,"borrando"))},Te={Monday:"#22c55e",Tuesday:"#F59E0B",Wednesday:"#EF4444",Thursday:"#3B82F6",Friday:"#A855F7",Saturday:"#10B981",Sunday:"#EC4899"},Ce=s=>{if(!(s instanceof Date))return console.error("getDayColor: date is not a Date object",s),"#FFFFFF";const e=s.toLocaleDateString("en-US",{weekday:"long"});return Te[e]},K=n([]),X=n([]),ee=(s,e)=>{const o={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"},r=s==null?void 0:s.trim().toLowerCase();e.target.src=o[r]||o.default},E=n(null),Z=n(!1),te=n(new Date);Ne(async()=>{N.value=await ze.getSites(),g.value=N.value.filter(o=>o.site_id==z.rawUserData.site_id)[0],E.value=N.value.filter(o=>o.site_id==z.rawUserData.site_id)[0];const s=await me.getUsersBySiteId(z.rawUserData.site_id);K.value=s.filter(o=>o.status=="activo"),await fetch(`${k}/shift_work_days_with_records`),await G(new Date),await I()});const Ue=async()=>{const s=new Date,e=new Date(s.setDate(s.getDate()+(7-s.getDay())+1));f.value=Y(e,{weekStartsOn:1}),w.value=Q(e,{weekStartsOn:1}),L()},$e=async()=>{const s=new Date,e=new Date(s.setDate(s.getDate()+(7-s.getDay())+8));f.value=Y(e,{weekStartsOn:1}),w.value=Q(e,{weekStartsOn:1}),L()};Me(g,async(s,e)=>{var o,r;if(ae()==1104&&((o=g.value.site_name)==null?void 0:o.toLowerCase())!="kennedy"&&((r=g.value.site_name)==null?void 0:r.toLowerCase())!="montes"){alert("No tienes permiso para administrar esta sede"),g.value=e;return}else{const b=await me.getUsersBySiteId(s.site_id);K.value=b.filter(_=>_.status=="activo"),E.value=s,de(),I(),await G(new Date)}});const I=async()=>{var r,b;if(ae()==1104&&((r=g.value.site_name)==null?void 0:r.toLowerCase())!="kennedy"&&((b=g.value.site_name)==null?void 0:b.toLowerCase())!="montes")return;if(c.setLoading(!0,"cargando horario"),!g.value||!U.value||!O.value){alert("No olvide seleccionar una sede y un rango de fechas");return}const s=U.value.toISOString().split("T")[0],e=O.value.toISOString().split("T")[0],o=await fetch(`${k}/shift_filtered_work_days?site_id=${g.value.site_id}&start_date=${s}&end_date=${e}`);if(o.ok){c.setLoading(!1,"cargando horario");const B=await o.json();X.value=B.map(_=>(_.date=new Date(_.date),_.date.setDate(_.date.getDate()+1),_.users=_.records.map(x=>{let A=K.value.find(D=>D.id===x.employer_id);if(A){let D={...A};const a=new Date(`${_.date.toISOString().split("T")[0]}T${x.start_time}`),i=new Date(`${_.date.toISOString().split("T")[0]}T${x.end_time}`);return D.arrivalTime=a,D.departureTime=i,D.hoursWorked=(i-a)/36e5,D.rest=x.rest,D}return null}).filter(x=>x!=null),c.setLoading(!1,"cargando horario"),_))}else c.setLoading(!1,"cargando horario"),alert("Failed to fetch workdays")};async function G(s){if(!E.value)return;let e=new Date(s.getTime()-s.getTimezoneOffset()*6e4).toISOString().split("T")[0];const o=await fetch(`${k}/shift_work_days`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e,site_id:E.value.site_id})});o.ok?I():console.error("Error al agregar un nuevo día laboral",await o.text())}const Le=s=>{y.value=s},Oe=s=>{S.value=s,$.value=!0},Ee=async()=>{if($.value=!1,c.setLoading(!0,"cargando"),!y.value||!S.value)return;let s=T.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:y.value.id,work_day_id:S.value.id,start_time:s,end_time:e};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),y.value.arrivalTime=T.value,y.value.departureTime=C.value,y.value.hoursWorked=(C.value-T.value)/36e5,S.value.users.push(y.value),$.value=!1,y.value=null,S.value=null,c.setLoading(!1,"cargando")},Ie=async()=>{if($.value=!1,c.setLoading(!0,"cargando"),!y.value||!S.value)return;let s=T.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:y.value.id,work_day_id:S.value.id,start_time:s,end_time:e,rest:!0};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});const r={...y.value};r.arrivalTime=T.value,r.departureTime=C.value,r.hoursWorked=(C.value-T.value)/36e5,r.rest=!0,S.value.users.push(r),$.value=!1,y.value=null,S.value=null,c.setLoading(!1,"cargando")};return(s,e)=>{var x,A,D;const o=R("Button"),r=R("Dialog"),b=R("Calendar"),B=R("Dropdown"),_=R("InputText");return u(),m("div",Je,[l(r,{visible:q.value,"onUpdate:visible":e[2]||(e[2]=a=>q.value=a),modal:"",closable:!1,style:{width:"30rem"}},{footer:h(()=>[l(o,{label:"Cerrar",severity:"help",onClick:e[1]||(e[1]=a=>q.value=!1)})]),default:h(()=>{var a;return[t("h4",null,p(d.value.name),1),d.value?(u(),m("div",Pe,[t("img",{class:"shadow-3",src:`${V(k)}/read-product-image/300/employer-${d.value.dni}`,onError:e[0]||(e[0]=i=>ee(d.value.gender,i)),alt:"Foto del empleado",style:{width:"100%","aspect-ratio":"1 / 1","border-radius":"0.5rem","object-fit":"cover"}},null,40,Ke),t("div",Xe,[d.value.arrivalTime&&d.value.departureTime?(u(),m("div",Ze,[d.value.rest?ne("",!0):(u(),m("p",Ge,[Qe,W(p(new Date(d.value.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),d.value.rest?(u(),m("p",tt,at)):(u(),m("p",Ye,[et,W(" "+p(new Date(d.value.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)]))])):ne("",!0),t("p",ot,[lt,W(" "+p(d.value.position),1)]),t("p",nt,[it,W(" "+p(d.value.phone),1)]),t("p",rt,[dt,W(" "+p((a=d.value.contract_type)==null?void 0:a.toLowerCase()),1)])])])):ne("",!0)]}),_:1},8,["visible"]),l(r,{visible:j.value,"onUpdate:visible":e[5]||(e[5]=a=>j.value=a),modal:"",closable:""},{footer:h(()=>[l(o,{severity:"danger",label:"Cancelar",onClick:fe,class:"p-button-text"}),l(o,{severity:"success",label:"Aceptar",onClick:L})]),default:h(()=>[t("div",null,[t("div",ct,[l(o,{class:"col-12 p-1",severity:"success",label:"Semana entrante",onClick:Ue})]),t("div",ut,[l(o,{class:"col-12 p-1",severity:"secondary",label:"Dentro de 2 semanas",onClick:$e})]),t("div",mt,[l(o,{class:"col-12 p-1",severity:"danger",label:"Esta semana",onClick:de})]),t("div",pt,[l(o,{class:"col-12 p-1",severity:"help",label:"Semana pasada",onClick:ge})]),t("div",vt,[l(o,{class:"col-12 p-1",severity:"warning",label:"Este mes",onClick:we})]),t("div",yt,[l(o,{class:"col-12 p-1",severity:"primary",label:"Mes pasado",onClick:be})])]),_t,l(b,{class:"col-12 m-0 p-0",modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=a=>f.value=a),showIcon:""},null,8,["modelValue"]),ht,l(b,{class:"col-12 m-0 p-0",modelValue:w.value,"onUpdate:modelValue":e[4]||(e[4]=a=>w.value=a),showIcon:""},null,8,["modelValue"])]),_:1},8,["visible"]),l(r,{visible:M.value,"onUpdate:visible":e[7]||(e[7]=a=>M.value=a),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:h(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[6]||(e[6]=a=>M.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:xe})]),default:h(()=>[ft]),_:1},8,["visible"]),l(r,{visible:F.value,"onUpdate:visible":e[9]||(e[9]=a=>F.value=a),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:h(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[8]||(e[8]=()=>F.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:ke})]),default:h(()=>[gt]),_:1},8,["visible"]),l(r,{visible:Z.value,"onUpdate:visible":e[14]||(e[14]=a=>Z.value=a),style:{width:"22rem"},modal:"",closeOnEscape:"",onClose:e[15]||(e[15]=a=>Z.value=!1)},{footer:h(()=>[l(o,{label:"cancelar",onClick:e[12]||(e[12]=a=>Z.value=!1),class:"p-button-danger"}),l(o,{label:"Agregar",onClick:e[13]||(e[13]=a=>G(te.value)),class:"p-button-success"})]),default:h(()=>[wt,l(b,{class:"my-4",modelValue:te.value,"onUpdate:modelValue":e[10]||(e[10]=a=>te.value=a),showIcon:""},null,8,["modelValue"]),l(B,{class:"col-12 p-0",disabled:"",modelValue:E.value,"onUpdate:modelValue":e[11]||(e[11]=a=>E.value=a),options:N.value,optionLabel:"site_name",placeholder:"Select a site"},null,8,["modelValue","options"])]),_:1},8,["visible"]),t("div",bt,[t("div",Dt,[t("div",kt,[l(B,{disabled:!((D=V(Be)["Horarios de trabajo admin"])!=null&&D.includes((A=(x=V(z))==null?void 0:x.rawUserData)==null?void 0:A.rol))&&V(ae)()!=1104,style:{height:"100%"},class:"col-12 p-0 m-0",modelValue:g.value,"onUpdate:modelValue":e[16]||(e[16]=a=>g.value=a),options:N.value,optionLabel:"site_name"},null,8,["disabled","modelValue","options"])]),t("div",St,[l(_,{style:{height:"100%"},class:"col-12 text-center m-0",readonly:"",modelValue:re.value,"onUpdate:modelValue":e[17]||(e[17]=a=>re.value=a),onClick:he},null,8,["modelValue"])]),t("div",xt,[l(o,{severity:"help",class:"mb-3",label:"Buscar",icon:"pi pi-search",onClick:I})])])]),t("div",Tt,[t("div",Ct,[t("div",Ut,[t("div",$t,[(u(!0),m(oe,null,le(K.value,a=>(u(),m("div",{key:a.id,draggable:"true",style:{display:"flex","flex-direction":"column","align-items":"center"},onDragstart:i=>Le(a)},[t("img",{onClick:i=>ie(a),class:"shadow-2 p-1",src:`${V(k)}/read-product-image/96/employer-${a.dni}`,alt:"user.name",onError:i=>ee(a.gender,i),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Ot),t("p",Et,p(a.name.split(" ").slice(0,2).join(" ")),1),t("span",It,p(a.position),1)],40,Lt))),128))])])]),t("div",Vt,[t("div",Wt,[t("div",jt,[(u(!0),m(oe,null,le(X.value,a=>(u(),m("div",{class:"p-0 m-0",key:a.id,style:{position:"relative"}},[t("div",{class:"shadow-2",style:ue({"background-color":Ce(a.date),color:"white","border-radius":"0.5rem 0.5rem 0 0",display:"flex","align-items":"center","justify-content":"space-beetwen"})},[t("p",Ft,p(a.date.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Bogota"})),1)],4),t("div",Nt,[l(o,{style:{position:"absolute",right:"-1rem",top:"-1rem"},icon:"pi pi-trash text-2xl ",class:"p-button-rounded p-button-danger shadow-5",onClick:i=>Se(a.id)},null,8,["onClick"]),t("div",Mt,[t("div",{class:"shadow-5 p-3 m-0 p-4",style:{"border-radius":"0 0 0.5rem 0.5rem",display:"flex","flex-wrap":"wrap","align-items":"flex-start",gap:"2rem","justify-content":"start",padding:"10px"},onDragover:e[18]||(e[18]=Ae(()=>{},["prevent"])),onDrop:i=>Oe(a)},[(u(!0),m(oe,null,le(a.users,i=>{var ce;return u(),m("div",{class:"shadow-2 p-2",key:i.id,style:ue([{"text-align":"center",width:"7rem","aspect-ratio":"1 / 1","background-color":"white",color:"black",position:"relative","border-radius":"0.5rem"},i.rest?"outline:2px solid green;  ":"background-color: white;"])},[t("p",At,p(i.name.split(" ").slice(0,1).join(" ")),1),t("img",{class:"shadow-2 p-1",onClick:se=>ie(i),src:`${V(k)}/read-product-image/96/employer-${i.dni}`,alt:"user.name",onError:se=>ee(i.gender,se),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Rt),i.rest?(u(),m("div",zt,[t("p",Jt,[t("b",null,p((ce=i.contract_type)==null?void 0:ce.toLowerCase().slice(0,13)),1)]),Pt])):(u(),m("div",Ht,[t("p",qt," De: "+p(new Date(i.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))+" A: "+p(new Date(i.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),l(o,{style:{position:"absolute",width:"1.5rem",height:"1.5rem",top:"-0.5rem",right:"-0.5rem","font-weight":"bold"},icon:"pi pi-times fw-bold",class:"p-button-rounded p-button-danger p-0",onClick:se=>De(i.id)},null,8,["onClick"])],4)}),128))],40,Bt)])])]))),128)),W(" ` ")])])])]),l(r,{visible:$.value,"onUpdate:visible":e[21]||(e[21]=a=>$.value=a),style:{width:"20rem"},modal:!0},{footer:h(()=>[t("div",Gt,[l(o,{severity:"help",label:"Descansa",onClick:Ie}),l(o,{severity:"success",label:"Aceptar",onClick:Ee})])]),default:h(()=>[t("h5",Kt,"Cuantas horas trabajo "+p(y.value.name)+"?",1),Xt,l(b,{modelValue:T.value,"onUpdate:modelValue":e[19]||(e[19]=a=>T.value=a),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"]),Zt,l(b,{modelValue:C.value,"onUpdate:modelValue":e[20]||(e[20]=a=>C.value=a),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"])]),_:1},8,["visible"])])}}},os=Ve(Qt,[["__scopeId","data-v-bc608e1d"]]);export{os as default};
========
import{_ as Ve,r as n,l as We,J as je,A as Fe,i as Ne,U as k,x as Me,ad as ae,a as R,o as u,c as m,g as l,w as h,b as t,u as V,F as oe,d as le,j as W,t as p,f as ne,X as Be,k as ue,a6 as Ae,p as Re,h as He}from"./index-acdf86d7.js";import{u as me,e as Q,s as qe,a as pe,b as ve,c as ye}from"./userService-36c36d1e.js";import{s as ze}from"./siteService-e3ae066c.js";import"./editor.esm-4902b93b.js";import{f as _e,s as Y}from"./format-8cf56335.js";const v=H=>(Re("data-v-141ee6c2"),H=H(),He(),H),Je={style:{"margin-top":"4rem"},class:"px-2 mx-0 col-12"},Pe={key:0,class:"user-info",style:{display:"flex","flex-direction":"column","align-items":"center"}},Ke=["src"],Xe={class:"col-12 p-0 mt-4"},Ze={key:0},Ge={key:0,class:"p-0 my-1"},Qe=v(()=>t("b",null," Desde: ",-1)),Ye={key:1,class:"p-0 my-1"},et=v(()=>t("b",null," Hasta: ",-1)),tt={key:2,class:"p-0 my-1 text-xl",style:{color:"green"}},st=v(()=>t("b",null," Descansa ",-1)),at=[st],ot={class:"p-0 my-1"},lt=v(()=>t("b",null,"Cargo:",-1)),nt={class:"p-0 my-1"},it=v(()=>t("b",null,"Telefono:",-1)),rt={class:"p-0 my-1"},dt=v(()=>t("b",null,"Contrato",-1)),ct={class:"col-12 p-0 m-0 my-2"},ut={class:"col-12 p-0 m-0 my-2"},mt={class:"col-12 p-0 m-0 my-2"},pt={class:"col-12 p-0 m-0 my-2"},vt={class:"col-12 p-0 my-2"},yt={class:"col-12 p-0 my-2"},_t=v(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Desde:",-1)),ht=v(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Hasta:",-1)),ft=v(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este día de trabajo y todos sus registros?")],-1)),gt=v(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este registro?")],-1)),wt=v(()=>t("h3",null,"Nueva semana",-1)),bt={class:"col-12 p-0 m-0 mb-2 shadow-3",style:{}},Dt={class:"grid px-8 md:mx-auto",style:{"max-width":"800px"}},kt={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},St={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},xt={class:"col-12 md:col-2 py-2 m-0",style:{height:"4rem"}},Tt={class:"grid",style:{margin:"auto"}},Ct={class:"col-2 p-0 px-2",style:{height:"80vh",width:"min-content","overflow-y":"auto"}},Ut={class:"p-0 text-sm",style:{display:"flex","justify-content":"center"}},$t={style:{display:"flex",gap:"1rem","flex-direction":"column"},class:"pb-3 m-auto"},Lt=["onDragstart"],Ot=["onClick","src","onError"],Et={class:"my-0 py-0",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},It={class:"my-0 py-0",style:{"min-width":"min-content","text-transform":"uppercase","text-align":"center"}},Vt={class:"col",style:{height:"80vh","min-width":"300px","overflow-y":"auto"}},Wt={class:"col-12 pb-6"},jt={style:{display:"flex",gap:"0rem","flex-direction":"column"}},Ft={class:"py-0 px-4 text-center col-12 m-0 p-0 text",style:{"font-weight":"bold","text-shadow":"0 0 3px black","text-transform":"uppercase"}},Nt={style:{"overflow-x":"auto"}},Mt={style:{}},Bt=["onDrop"],At={class:"py-0 my-0 text-sm",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},Rt=["onClick","src","onError"],Ht={key:0,class:"text-sm"},qt={class:"py-0 my-0 text-sm text-center"},zt={key:1,class:"text-sm"},Jt={class:"py-0 my-0"},Pt=v(()=>t("p",{class:"py-0 my-0"},[t("b",{style:{color:"green"}},"DESCANSA")],-1)),Kt={style:{"text-transform":"uppercase"}},Xt=v(()=>t("p",null,"Hora de llegada:",-1)),Zt=v(()=>t("p",null,"Hora de salida:",-1)),Gt={class:"col-12 p-0",style:{display:"flex","justify-content":"space-between"}},Qt={__name:"shift_work_schedule",setup(H){n("");const q=n(!1),d=n(null);n(null);const ie=s=>{d.value=s,q.value=!0},j=n(!1),f=n(new Date),w=n(new Date),z=We(),c=je(),F=n(!1),J=n(null),g=n(),N=n(),U=n(),O=n(),$=n(!1),y=n(null),S=n(null),T=n(new Date),C=n(new Date),re=Fe(()=>!U.value||!O.value?"":`${_e(U.value,"dd/MM/yyyy")} - ${_e(O.value,"dd/MM/yyyy")}`),he=()=>{f.value=U.value||new Date,w.value=O.value||new Date,j.value=!0},fe=()=>{j.value=!1},L=async()=>{U.value=f.value,O.value=w.value,j.value=!1,await G(U.value),I()},de=()=>{const s=new Date;f.value=Y(s,{weekStartsOn:1}),w.value=Q(s,{weekStartsOn:1}),L()},ge=()=>{const s=Y(new Date,{weekStartsOn:1});f.value=qe(s,7),w.value=Q(f.value,{weekStartsOn:1}),L()},we=()=>{const s=new Date;f.value=pe(s),w.value=ve(s),L()},be=()=>{const s=new Date;f.value=pe(ye(s,1)),w.value=ve(ye(s,1)),L()},De=s=>{J.value=s,F.value=!0},ke=async()=>{if(F.value=!1,c.setLoading(!0,"borrando"),!J.value)return;const s=await fetch(`${k}/shift_work_records/${J.value}`,{method:"DELETE"});s.ok?(I(),c.setLoading(!1,"borrando")):(console.error("Error al eliminar el registro:",await s.text()),alert("Hubo un error al eliminar el registro."),c.setLoading(!1,"borrando")),J.value=null},M=n(!1),P=n(null),Se=s=>{P.value=s,M.value=!0},xe=async()=>{if(M.value=!1,!P.value)return;c.setLoading(!0,"borrando"),(await fetch(`${k}/shift_work_days/${P.value}`,{method:"DELETE"})).ok?(X.value=X.value.filter(e=>e.id!==P.value),c.setLoading(!1,"borrando")):(alert("Hubo un error al eliminar el día de trabajo."),c.setLoading(!1,"borrando"))},Te={Monday:"#22c55e",Tuesday:"#F59E0B",Wednesday:"#EF4444",Thursday:"#3B82F6",Friday:"#A855F7",Saturday:"#10B981",Sunday:"#EC4899"},Ce=s=>{if(!(s instanceof Date))return console.error("getDayColor: date is not a Date object",s),"#FFFFFF";const e=s.toLocaleDateString("en-US",{weekday:"long"});return Te[e]},K=n([]),X=n([]),ee=(s,e)=>{const o={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"},r=s==null?void 0:s.trim().toLowerCase();e.target.src=o[r]||o.default},E=n(null),Z=n(!1),te=n(new Date);Ne(async()=>{N.value=await ze.getSites(),g.value=N.value.filter(o=>o.site_id==z.rawUserData.site_id)[0],E.value=N.value.filter(o=>o.site_id==z.rawUserData.site_id)[0];const s=await me.getUsersBySiteId(z.rawUserData.site_id);K.value=s.filter(o=>o.status=="activo"),await fetch(`${k}/shift_work_days_with_records`),await G(new Date),await I()});const Ue=async()=>{const s=new Date,e=new Date(s.setDate(s.getDate()+(7-s.getDay())+1));f.value=Y(e,{weekStartsOn:1}),w.value=Q(e,{weekStartsOn:1}),L()},$e=async()=>{const s=new Date,e=new Date(s.setDate(s.getDate()+(7-s.getDay())+8));f.value=Y(e,{weekStartsOn:1}),w.value=Q(e,{weekStartsOn:1}),L()};Me(g,async(s,e)=>{var o,r;if(ae()==1104&&((o=g.value.site_name)==null?void 0:o.toLowerCase())!="kennedy"&&((r=g.value.site_name)==null?void 0:r.toLowerCase())!="montes"){alert("No tienes permiso para administrar esta sede"),g.value=e;return}else{const b=await me.getUsersBySiteId(s.site_id);K.value=b.filter(_=>_.status=="activo"),E.value=s,de(),I(),await G(new Date)}});const I=async()=>{var r,b;if(ae()==1104&&((r=g.value.site_name)==null?void 0:r.toLowerCase())!="kennedy"&&((b=g.value.site_name)==null?void 0:b.toLowerCase())!="montes")return;if(c.setLoading(!0,"cargando horario"),!g.value||!U.value||!O.value){alert("No olvide seleccionar una sede y un rango de fechas");return}const s=U.value.toISOString().split("T")[0],e=O.value.toISOString().split("T")[0],o=await fetch(`${k}/shift_filtered_work_days?site_id=${g.value.site_id}&start_date=${s}&end_date=${e}`);if(o.ok){c.setLoading(!1,"cargando horario");const B=await o.json();X.value=B.map(_=>(_.date=new Date(_.date),_.date.setDate(_.date.getDate()+1),_.users=_.records.map(x=>{let A=K.value.find(D=>D.id===x.employer_id);if(A){let D={...A};const a=new Date(`${_.date.toISOString().split("T")[0]}T${x.start_time}`),i=new Date(`${_.date.toISOString().split("T")[0]}T${x.end_time}`);return D.arrivalTime=a,D.departureTime=i,D.hoursWorked=(i-a)/36e5,D.rest=x.rest,D}return null}).filter(x=>x!=null),c.setLoading(!1,"cargando horario"),_))}else c.setLoading(!1,"cargando horario"),alert("Failed to fetch workdays")};async function G(s){if(!E.value)return;let e=new Date(s.getTime()-s.getTimezoneOffset()*6e4).toISOString().split("T")[0];const o=await fetch(`${k}/shift_work_days`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e,site_id:E.value.site_id})});o.ok?I():console.error("Error al agregar un nuevo día laboral",await o.text())}const Le=s=>{y.value=s},Oe=s=>{S.value=s,$.value=!0},Ee=async()=>{if($.value=!1,c.setLoading(!0,"cargando"),!y.value||!S.value)return;let s=T.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:y.value.id,work_day_id:S.value.id,start_time:s,end_time:e};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),y.value.arrivalTime=T.value,y.value.departureTime=C.value,y.value.hoursWorked=(C.value-T.value)/36e5,S.value.users.push(y.value),$.value=!1,y.value=null,S.value=null,c.setLoading(!1,"cargando")},Ie=async()=>{if($.value=!1,c.setLoading(!0,"cargando"),!y.value||!S.value)return;let s=T.value.toISOString().split("T")[1].slice(0,8),e=C.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:y.value.id,work_day_id:S.value.id,start_time:s,end_time:e,rest:!0};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});const r={...y.value};r.arrivalTime=T.value,r.departureTime=C.value,r.hoursWorked=(C.value-T.value)/36e5,r.rest=!0,S.value.users.push(r),$.value=!1,y.value=null,S.value=null,c.setLoading(!1,"cargando")};return(s,e)=>{var x,A,D;const o=R("Button"),r=R("Dialog"),b=R("Calendar"),B=R("Dropdown"),_=R("InputText");return u(),m("div",Je,[l(r,{visible:q.value,"onUpdate:visible":e[2]||(e[2]=a=>q.value=a),modal:"",closable:!1,style:{width:"30rem"}},{footer:h(()=>[l(o,{label:"Cerrar",severity:"help",onClick:e[1]||(e[1]=a=>q.value=!1)})]),default:h(()=>{var a;return[t("h4",null,p(d.value.name),1),d.value?(u(),m("div",Pe,[t("img",{class:"shadow-3",src:`${V(k)}/read-product-image/300/employer-${d.value.dni}`,onError:e[0]||(e[0]=i=>ee(d.value.gender,i)),alt:"Foto del empleado",style:{width:"100%","aspect-ratio":"1 / 1","border-radius":"0.5rem","object-fit":"cover"}},null,40,Ke),t("div",Xe,[d.value.arrivalTime&&d.value.departureTime?(u(),m("div",Ze,[d.value.rest?ne("",!0):(u(),m("p",Ge,[Qe,W(p(new Date(d.value.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),d.value.rest?(u(),m("p",tt,at)):(u(),m("p",Ye,[et,W(" "+p(new Date(d.value.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)]))])):ne("",!0),t("p",ot,[lt,W(" "+p(d.value.position),1)]),t("p",nt,[it,W(" "+p(d.value.phone),1)]),t("p",rt,[dt,W(" "+p((a=d.value.contract_type)==null?void 0:a.toLowerCase()),1)])])])):ne("",!0)]}),_:1},8,["visible"]),l(r,{visible:j.value,"onUpdate:visible":e[5]||(e[5]=a=>j.value=a),modal:"",closable:""},{footer:h(()=>[l(o,{severity:"danger",label:"Cancelar",onClick:fe,class:"p-button-text"}),l(o,{severity:"success",label:"Aceptar",onClick:L})]),default:h(()=>[t("div",null,[t("div",ct,[l(o,{class:"col-12 p-1",severity:"success",label:"Semana entrante",onClick:Ue})]),t("div",ut,[l(o,{class:"col-12 p-1",severity:"secondary",label:"Dentro de 2 semanas",onClick:$e})]),t("div",mt,[l(o,{class:"col-12 p-1",severity:"danger",label:"Esta semana",onClick:de})]),t("div",pt,[l(o,{class:"col-12 p-1",severity:"help",label:"Semana pasada",onClick:ge})]),t("div",vt,[l(o,{class:"col-12 p-1",severity:"warning",label:"Este mes",onClick:we})]),t("div",yt,[l(o,{class:"col-12 p-1",severity:"primary",label:"Mes pasado",onClick:be})])]),_t,l(b,{class:"col-12 m-0 p-0",modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=a=>f.value=a),showIcon:""},null,8,["modelValue"]),ht,l(b,{class:"col-12 m-0 p-0",modelValue:w.value,"onUpdate:modelValue":e[4]||(e[4]=a=>w.value=a),showIcon:""},null,8,["modelValue"])]),_:1},8,["visible"]),l(r,{visible:M.value,"onUpdate:visible":e[7]||(e[7]=a=>M.value=a),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:h(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[6]||(e[6]=a=>M.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:xe})]),default:h(()=>[ft]),_:1},8,["visible"]),l(r,{visible:F.value,"onUpdate:visible":e[9]||(e[9]=a=>F.value=a),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:h(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[8]||(e[8]=()=>F.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:ke})]),default:h(()=>[gt]),_:1},8,["visible"]),l(r,{visible:Z.value,"onUpdate:visible":e[14]||(e[14]=a=>Z.value=a),style:{width:"22rem"},modal:"",closeOnEscape:"",onClose:e[15]||(e[15]=a=>Z.value=!1)},{footer:h(()=>[l(o,{label:"cancelar",onClick:e[12]||(e[12]=a=>Z.value=!1),class:"p-button-danger"}),l(o,{label:"Agregar",onClick:e[13]||(e[13]=a=>G(te.value)),class:"p-button-success"})]),default:h(()=>[wt,l(b,{class:"my-4",modelValue:te.value,"onUpdate:modelValue":e[10]||(e[10]=a=>te.value=a),showIcon:""},null,8,["modelValue"]),l(B,{class:"col-12 p-0",disabled:"",modelValue:E.value,"onUpdate:modelValue":e[11]||(e[11]=a=>E.value=a),options:N.value,optionLabel:"site_name",placeholder:"Select a site"},null,8,["modelValue","options"])]),_:1},8,["visible"]),t("div",bt,[t("div",Dt,[t("div",kt,[l(B,{disabled:!((D=V(Be)["Horarios de trabajo admin"])!=null&&D.includes((A=(x=V(z))==null?void 0:x.rawUserData)==null?void 0:A.rol))&&V(ae)()!=1104,style:{height:"100%"},class:"col-12 p-0 m-0",modelValue:g.value,"onUpdate:modelValue":e[16]||(e[16]=a=>g.value=a),options:N.value,optionLabel:"site_name"},null,8,["disabled","modelValue","options"])]),t("div",St,[l(_,{style:{height:"100%"},class:"col-12 text-center m-0",readonly:"",modelValue:re.value,"onUpdate:modelValue":e[17]||(e[17]=a=>re.value=a),onClick:he},null,8,["modelValue"])]),t("div",xt,[l(o,{severity:"help",class:"mb-3",label:"Buscar",icon:"pi pi-search",onClick:I})])])]),t("div",Tt,[t("div",Ct,[t("div",Ut,[t("div",$t,[(u(!0),m(oe,null,le(K.value,a=>(u(),m("div",{key:a.id,draggable:"true",style:{display:"flex","flex-direction":"column","align-items":"center"},onDragstart:i=>Le(a)},[t("img",{onClick:i=>ie(a),class:"shadow-2 p-1",src:`${V(k)}/read-product-image/96/employer-${a.dni}`,alt:"user.name",onError:i=>ee(a.gender,i),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Ot),t("p",Et,p(a.name.split(" ").slice(0,2).join(" ")),1),t("span",It,p(a.position),1)],40,Lt))),128))])])]),t("div",Vt,[t("div",Wt,[t("div",jt,[(u(!0),m(oe,null,le(X.value,a=>(u(),m("div",{class:"p-0 m-0",key:a.id,style:{position:"relative"}},[t("div",{class:"shadow-2",style:ue({"background-color":Ce(a.date),color:"white","border-radius":"0.5rem 0.5rem 0 0",display:"flex","align-items":"center","justify-content":"space-beetwen"})},[t("p",Ft,p(a.date.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Bogota"})),1)],4),t("div",Nt,[l(o,{style:{position:"absolute",right:"-1rem",top:"-1rem"},icon:"pi pi-trash text-2xl ",class:"p-button-rounded p-button-danger shadow-5",onClick:i=>Se(a.id)},null,8,["onClick"]),t("div",Mt,[t("div",{class:"shadow-5 p-3 m-0 p-4",style:{"border-radius":"0 0 0.5rem 0.5rem",display:"flex","flex-wrap":"wrap","align-items":"flex-start",gap:"2rem","justify-content":"start",padding:"10px"},onDragover:e[18]||(e[18]=Ae(()=>{},["prevent"])),onDrop:i=>Oe(a)},[(u(!0),m(oe,null,le(a.users,i=>{var ce;return u(),m("div",{class:"shadow-2 p-2",key:i.id,style:ue([{"text-align":"center",width:"7rem","aspect-ratio":"1 / 1","background-color":"white",color:"black",position:"relative","border-radius":"0.5rem"},i.rest?"outline:2px solid green;  ":"background-color: white;"])},[t("p",At,p(i.name.split(" ").slice(0,1).join(" ")),1),t("img",{class:"shadow-2 p-1",onClick:se=>ie(i),src:`${V(k)}/read-product-image/96/employer-${i.dni}`,alt:"user.name",onError:se=>ee(i.gender,se),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Rt),i.rest?(u(),m("div",zt,[t("p",Jt,[t("b",null,p((ce=i.contract_type)==null?void 0:ce.toLowerCase().slice(0,13)),1)]),Pt])):(u(),m("div",Ht,[t("p",qt," De: "+p(new Date(i.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))+" A: "+p(new Date(i.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),l(o,{style:{position:"absolute",width:"1.5rem",height:"1.5rem",top:"-0.5rem",right:"-0.5rem","font-weight":"bold"},icon:"pi pi-times fw-bold",class:"p-button-rounded p-button-danger p-0",onClick:se=>De(i.id)},null,8,["onClick"])],4)}),128))],40,Bt)])])]))),128)),W(" ` ")])])])]),l(r,{visible:$.value,"onUpdate:visible":e[21]||(e[21]=a=>$.value=a),style:{width:"20rem"},modal:!0},{footer:h(()=>[t("div",Gt,[l(o,{severity:"help",label:"Descansa",onClick:Ie}),l(o,{severity:"success",label:"Aceptar",onClick:Ee})])]),default:h(()=>[t("h5",Kt,"Cuantas horas trabajo "+p(y.value.name)+"?",1),Xt,l(b,{modelValue:T.value,"onUpdate:modelValue":e[19]||(e[19]=a=>T.value=a),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"]),Zt,l(b,{modelValue:C.value,"onUpdate:modelValue":e[20]||(e[20]=a=>C.value=a),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},null,8,["modelValue"])]),_:1},8,["visible"])])}}},os=Ve(Qt,[["__scopeId","data-v-141ee6c2"]]);export{os as default};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/shift_work_schedule-1c8dcacc.js
