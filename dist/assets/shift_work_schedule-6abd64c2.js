import{_ as We,r as n,V as je,v as Fe,m as Ne,i as Me,U as k,k as Be,Q as le,a as W,o as p,c as m,d as l,w as d,b as t,l as j,F as Y,e as ne,q as I,t as v,C as ie,W as Re,G as pe,X as Ae,p as He,g as qe}from"./index-9a92106e.js";import{u as me,f as ve,s as ee,e as te,a as ze,b as ye,c as _e,d as fe}from"./subMonths-beec08c9.js";import{s as Je}from"./siteService-ad45e9f9.js";const y=q=>(He("data-v-1af2ae5e"),q=q(),qe(),q),Pe={key:0,class:"user-info",style:{display:"flex","flex-direction":"column","align-items":"center"}},Ge=["src"],Ke={class:"col-12 p-0 mt-4"},Qe={key:0},Xe={key:0,class:"p-0 my-1"},Ze=y(()=>t("b",null," Desde: ",-1)),Ye={key:1,class:"p-0 my-1"},et=y(()=>t("b",null," Hasta: ",-1)),tt={key:2,class:"p-0 my-1 text-xl",style:{color:"green"}},st=y(()=>t("b",null," Descansa ",-1)),at=[st],ot={class:"p-0 my-1"},lt=y(()=>t("b",null,"Cargo:",-1)),nt={class:"p-0 my-1"},it=y(()=>t("b",null,"Telefono:",-1)),rt={class:"p-0 my-1"},dt=y(()=>t("b",null,"Contrato",-1)),ct={class:""},ut={class:"col-12 p-0 m-0 my-2"},pt={class:"col-12 p-0 m-0 my-2"},mt={class:"col-12 p-0 m-0 my-2"},vt={class:"col-12 p-0 m-0 my-2"},yt={class:"col-12 p-0 my-2"},_t={class:"col-12 p-0 my-2"},ft=y(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Desde:",-1)),ht=y(()=>t("p",{class:"col-12 m-0 p-0 py-2"},"Hasta:",-1)),gt=y(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este día de trabajo y todos sus registros?")],-1)),wt=y(()=>t("div",{class:"confirmation-content"},[t("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),t("span",null,"¿Estás seguro de que quieres eliminar este registro?")],-1)),bt=y(()=>t("h3",null,"Nueva semana",-1)),Dt={style:{"margin-top":"6rem"},class:"px-2 mx-0 col-12"},kt={class:"col-12 p-0 m-0 mb-8"},St={class:"grid p-0 mx-auto"},xt={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},Ct={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},Tt={class:"col-12 md:col-2 py-2",style:{display:"flex",height:"4rem","justify-content":"end"}},Ut={class:"grid",style:{margin:"auto"}},$t={class:"col-2 p-0",style:{height:"80vh","max-width":"min-content","overflow-y":"auto"}},Lt={class:"p-0 text-sm",style:{display:"flex","justify-content":"center"}},It={style:{display:"flex",gap:"1rem","flex-direction":"column"},class:"pb-3 m-auto"},Ot=["onDragstart"],Vt=["onClick","src","onError"],Et={class:"my-0 py-0",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},Wt={class:"my-0 py-0",style:{"min-width":"min-content","text-transform":"uppercase","text-align":"center"}},jt={class:"col",style:{height:"80vh","overflow-y":"auto"}},Ft={class:"col-12 pb-6",style:{}},Nt={style:{display:"flex",gap:"0rem","flex-direction":"column"}},Mt={class:"py-0 px-4 text-center col-12 m-0 p-0 text",style:{"font-weight":"bold","text-shadow":"0 0 3px black","text-transform":"uppercase"}},Bt={style:{"overflow-x":"auto"}},Rt={style:{"min-width":"max-content"}},At=["onDrop"],Ht={class:"py-0 my-0 text-sm",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},qt=["onClick","src","onError"],zt={key:0,class:"text-sm"},Jt={class:"py-0 my-0 text-sm text-center"},Pt={key:1,class:"text-sm"},Gt={class:"py-0 my-0"},Kt=y(()=>t("p",{class:"py-0 my-0"},[t("b",{style:{color:"green"}},"DESCANSA")],-1)),Qt={class:"",style:{"text-transform":"uppercase"}},Xt=y(()=>t("p",null,"Hora de llegada:",-1)),Zt=y(()=>t("p",null,"Hora de salida:",-1)),Yt={class:"col-12 p-0",style:{display:"flex","justify-content":"space-between"}},es={__name:"shift_work_schedule",setup(q){const z=n(!1),c=n(null),re=a=>{c.value=a,z.value=!0},F=n(!1),h=n(new Date),w=n(new Date),J=je(),u=Fe(),N=n(!1),P=n(null),g=n(),M=n(),U=n(),O=n(),$=n(!1),_=n(null),S=n(null),C=n(new Date),T=n(new Date),de=Ne(()=>!U.value||!O.value?"":`${ve(U.value,"dd/MM/yyyy")} - ${ve(O.value,"dd/MM/yyyy")}`),he=()=>{h.value=U.value||new Date,w.value=O.value||new Date,F.value=!0},ge=()=>{F.value=!1},L=async()=>{U.value=h.value,O.value=w.value,F.value=!1,await Z(U.value),E()},ce=()=>{const a=new Date;h.value=ee(a,{weekStartsOn:1}),w.value=te(a,{weekStartsOn:1}),L()},we=()=>{const a=ee(new Date,{weekStartsOn:1});h.value=ze(a,7),w.value=te(h.value,{weekStartsOn:1}),L()},be=()=>{const a=new Date;h.value=ye(a),w.value=_e(a),L()},De=()=>{const a=new Date;h.value=ye(fe(a,1)),w.value=_e(fe(a,1)),L()},ke=a=>{P.value=a,N.value=!0},Se=async()=>{if(N.value=!1,u.setLoading(!0,"borrando"),!P.value)return;const a=await fetch(`${k}/shift_work_records/${P.value}`,{method:"DELETE"});a.ok?(E(),u.setLoading(!1,"borrando")):(console.error("Error al eliminar el registro:",await a.text()),alert("Hubo un error al eliminar el registro."),u.setLoading(!1,"borrando")),P.value=null},B=n(!1),G=n(null),xe=a=>{G.value=a,B.value=!0},Ce=async()=>{if(B.value=!1,!G.value)return;u.setLoading(!0,"borrando"),(await fetch(`${k}/shift_work_days/${G.value}`,{method:"DELETE"})).ok?(Q.value=Q.value.filter(e=>e.id!==G.value),u.setLoading(!1,"borrando")):(alert("Hubo un error al eliminar el día de trabajo."),u.setLoading(!1,"borrando"))},Te={Monday:"#22c55e",Tuesday:"#F59E0B",Wednesday:"#EF4444",Thursday:"#3B82F6",Friday:"#A855F7",Saturday:"#10B981",Sunday:"#EC4899"},Ue=a=>{if(!(a instanceof Date))return console.error("getDayColor: date is not a Date object",a),"#FFFFFF";const e=a.toLocaleDateString("en-US",{weekday:"long"});return Te[e]},K=n([]),Q=n([]),se=(a,e)=>{const o={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"},i=a==null?void 0:a.trim().toLowerCase();e.target.src=o[i]||o.default},V=n(null),X=n(!1),ae=n(new Date);Me(async()=>{M.value=await Je.getSites(),g.value=M.value.filter(o=>o.site_id==J.rawUserData.site_id)[0],V.value=M.value.filter(o=>o.site_id==J.rawUserData.site_id)[0];const a=await me.getUsersBySiteId(J.rawUserData.site_id);K.value=a.filter(o=>o.status=="activo"),await fetch(`${k}/shift_work_days_with_records`),await Z(new Date),await E()});const $e=async()=>{const a=new Date,e=new Date(a.setDate(a.getDate()+(7-a.getDay())+1));h.value=ee(e,{weekStartsOn:1}),w.value=te(e,{weekStartsOn:1}),L()},Le=async()=>{const a=new Date,e=new Date(a.setDate(a.getDate()+(7-a.getDay())+8));h.value=ee(e,{weekStartsOn:1}),w.value=te(e,{weekStartsOn:1}),L()};Be(g,async(a,e)=>{var o,i;if(le()==1104&&((o=g.value.site_name)==null?void 0:o.toLowerCase())!="kennedy"&&((i=g.value.site_name)==null?void 0:i.toLowerCase())!="montes"){alert("No tienes permiso para administrar esta sede"),g.value=e;return}else{const b=await me.getUsersBySiteId(a.site_id);K.value=b.filter(f=>f.status=="activo"),V.value=a,ce(),E(),await Z(new Date)}});const E=async()=>{var i,b;if(le()==1104&&((i=g.value.site_name)==null?void 0:i.toLowerCase())!="kennedy"&&((b=g.value.site_name)==null?void 0:b.toLowerCase())!="montes")return;if(u.setLoading(!0,"cargando horario"),!g.value||!U.value||!O.value){alert("No olvide seleccionar una sede y un rango de fechas");return}const a=U.value.toISOString().split("T")[0],e=O.value.toISOString().split("T")[0],o=await fetch(`${k}/shift_filtered_work_days?site_id=${g.value.site_id}&start_date=${a}&end_date=${e}`);if(o.ok){u.setLoading(!1,"cargando horario");const R=await o.json();Q.value=R.map(f=>(f.date=new Date(f.date),f.date.setDate(f.date.getDate()+1),f.users=f.records.map(x=>{let A=K.value.find(D=>D.id===x.employer_id);if(A){let D={...A};const H=new Date(`${f.date.toISOString().split("T")[0]}T${x.start_time}`),s=new Date(`${f.date.toISOString().split("T")[0]}T${x.end_time}`);return D.arrivalTime=H,D.departureTime=s,D.hoursWorked=(s-H)/36e5,D.rest=x.rest,D}return null}).filter(x=>x!=null),u.setLoading(!1,"cargando horario"),f))}else u.setLoading(!1,"cargando horario"),alert("Failed to fetch workdays")};async function Z(a){if(!V.value)return;let e=new Date(a.getTime()-a.getTimezoneOffset()*6e4).toISOString().split("T")[0];const o=await fetch(`${k}/shift_work_days`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:e,site_id:V.value.site_id})});o.ok?E():console.error("Error al agregar un nuevo día laboral",await o.text())}const Ie=a=>{_.value=a},Oe=a=>{S.value=a,$.value=!0},Ve=async()=>{if($.value=!1,u.setLoading(!0,"cargando"),!_.value||!S.value)return;let a=C.value.toISOString().split("T")[1].slice(0,8),e=T.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:_.value.id,work_day_id:S.value.id,start_time:a,end_time:e};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),_.value.arrivalTime=C.value,_.value.departureTime=T.value,_.value.hoursWorked=(T.value-C.value)/36e5,S.value.users.push(_.value),$.value=!1,_.value=null,S.value=null,u.setLoading(!1,"cargando")},Ee=async()=>{if($.value=!1,u.setLoading(!0,"cargando"),!_.value||!S.value)return;let a=C.value.toISOString().split("T")[1].slice(0,8),e=T.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:_.value.id,work_day_id:S.value.id,start_time:a,end_time:e,rest:!0};await fetch(`${k}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});const i={..._.value};i.arrivalTime=C.value,i.departureTime=T.value,i.hoursWorked=(T.value-C.value)/36e5,i.rest=!0,S.value.users.push(i),$.value=!1,_.value=null,S.value=null,u.setLoading(!1,"cargando")};return(a,e)=>{var A,D,H;const o=W("Button"),i=W("Dialog"),b=W("Calendar"),R=W("Dropdown"),f=W("InputText"),x=W("InputIcon");return p(),m(Y,null,[l(i,{visible:z.value,"onUpdate:visible":e[2]||(e[2]=s=>z.value=s),modal:"",style:{width:"30rem"}},{footer:d(()=>[l(o,{label:"Cerrar",onClick:e[1]||(e[1]=s=>z.value=!1)})]),default:d(()=>{var s;return[t("h4",null,v(c.value.name),1),c.value?(p(),m("div",Pe,[t("img",{class:"shadow-3",src:`${j(k)}/read-product-image/300/employer-${c.value.dni}`,onError:e[0]||(e[0]=r=>se(c.value.gender,r)),alt:"Foto del empleado",style:{width:"100%","aspect-ratio":"1 / 1","border-radius":"0.5rem","object-fit":"cover"}},null,40,Ge),t("div",Ke,[c.value.arrivalTime&&c.value.departureTime?(p(),m("div",Qe,[c.value.rest?ie("",!0):(p(),m("p",Xe,[Ze,I(v(new Date(c.value.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),c.value.rest?(p(),m("p",tt,at)):(p(),m("p",Ye,[et,I(" "+v(new Date(c.value.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)]))])):ie("",!0),t("p",ot,[lt,I(" "+v(c.value.position),1)]),t("p",nt,[it,I(" "+v(c.value.phone),1)]),t("p",rt,[dt,I(" "+v((s=c.value.contract_type)==null?void 0:s.toLowerCase()),1)])])])):ie("",!0)]}),_:1},8,["visible"]),l(i,{visible:F.value,"onUpdate:visible":e[5]||(e[5]=s=>F.value=s),modal:"",closable:""},{footer:d(()=>[l(o,{severity:"danger",label:"Cancelar",onClick:ge,class:"p-button-text"}),l(o,{severity:"success",label:"Aceptar",onClick:L})]),default:d(()=>[t("div",ct,[t("div",ut,[l(o,{class:"col-12 p-1",severity:"success",label:"Semana entrante",onClick:$e})]),t("div",pt,[l(o,{class:"col-12 p-1",severity:"secondary",label:"Dentro de 2 semanas",onClick:Le})]),t("div",mt,[l(o,{class:"col-12 p-1",severity:"danger",label:"Esta semana",onClick:ce})]),t("div",vt,[l(o,{class:"col-12 p-1",severity:"help",label:"Semana pasada",onClick:we})]),t("div",yt,[l(o,{class:"col-12 p-1",severity:"warning",label:"Este mes",onClick:be})]),t("div",_t,[l(o,{class:"col-12 p-1",severity:"primary",label:"Mes pasado",onClick:De})])]),ft,l(b,{class:"col-12 m-0 p-0",modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=s=>h.value=s),showIcon:""},null,8,["modelValue"]),ht,l(b,{class:"col-12 m-0 p-0",modelValue:w.value,"onUpdate:modelValue":e[4]||(e[4]=s=>w.value=s),showIcon:""},null,8,["modelValue"])]),_:1},8,["visible"]),l(i,{visible:B.value,"onUpdate:visible":e[7]||(e[7]=s=>B.value=s),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:d(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[6]||(e[6]=s=>B.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:Ce})]),default:d(()=>[gt]),_:1},8,["visible"]),l(i,{visible:N.value,"onUpdate:visible":e[9]||(e[9]=s=>N.value=s),modal:"",style:{width:"350px"},header:"Confirmar eliminación",closable:!1},{footer:d(()=>[l(o,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[8]||(e[8]=()=>N.value=!1)}),l(o,{label:"Sí",icon:"pi pi-check",class:"p-button",onClick:Se})]),default:d(()=>[wt]),_:1},8,["visible"]),l(i,{visible:X.value,"onUpdate:visible":e[14]||(e[14]=s=>X.value=s),style:{width:"22rem"},modal:"",closeOnEscape:"",onClose:e[15]||(e[15]=s=>X.value=!1)},{footer:d(()=>[l(o,{label:"cancelar",onClick:e[12]||(e[12]=s=>X.value=!1),class:"p-button-danger"}),l(o,{label:"Agregar",onClick:e[13]||(e[13]=s=>Z(ae.value)),class:"p-button-success"})]),default:d(()=>[bt,l(b,{class:"my-4",modelValue:ae.value,"onUpdate:modelValue":e[10]||(e[10]=s=>ae.value=s),showIcon:""},null,8,["modelValue"]),l(R,{class:"col-12 p-0",disabled:"",modelValue:V.value,"onUpdate:modelValue":e[11]||(e[11]=s=>V.value=s),options:M.value,optionLabel:"site_name",placeholder:"Select a site"},null,8,["modelValue","options"])]),_:1},8,["visible"]),t("div",Dt,[t("div",kt,[t("div",St,[t("div",xt,[l(R,{disabled:!((H=j(Re)["Horarios de trabajo admin"])!=null&&H.includes((D=(A=j(J))==null?void 0:A.rawUserData)==null?void 0:D.rol))&&j(le)()!=1104,style:{height:"100%"},class:"col-12 p-0 m-0",modelValue:g.value,"onUpdate:modelValue":e[16]||(e[16]=s=>g.value=s),options:M.value,optionLabel:"site_name"},null,8,["disabled","modelValue","options"])]),t("div",Ct,[l(f,{style:{height:"100%"},class:"col-12 text-center m-0",readonly:"",modelValue:de.value,"onUpdate:modelValue":e[17]||(e[17]=s=>de.value=s),onClick:he},null,8,["modelValue"])]),t("div",Tt,[l(o,{severity:"help",rounded:"",class:"mb-3",icon:"pi pi-search",onClick:E})])])]),t("div",Ut,[t("div",$t,[t("div",Lt,[t("div",It,[(p(!0),m(Y,null,ne(K.value,s=>(p(),m("div",{key:s.id,draggable:"true",style:{display:"flex","flex-direction":"column","align-items":"center"},onDragstart:r=>Ie(s)},[t("img",{onClick:r=>re(s),class:"shadow-2 p-1",src:`${j(k)}/read-product-image/96/employer-${s.dni}`,alt:"user.name",onError:r=>se(s.gender,r),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,Vt),t("p",Et,v(s.name.split(" ").slice(0,2).join(" ")),1),t("span",Wt,v(s.position),1)],40,Ot))),128))])])]),t("div",jt,[t("div",Ft,[t("div",Nt,[(p(!0),m(Y,null,ne(Q.value,s=>(p(),m("div",{class:"p-0 m-0",key:s.id,style:{position:"relative"}},[t("div",{class:"shadow-2",style:pe({"background-color":Ue(s.date),color:"white","border-radius":"0.5rem 0.5rem 0 0",display:"flex","align-items":"center","justify-content":"space-beetwen"})},[t("p",Mt,v(s.date.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Bogota"}))+" ",1)],4),t("div",Bt,[l(o,{style:{position:"absolute",right:"-1rem",top:"-1rem"},icon:"pi pi-trash text-2xl ",class:"p-button-rounded p-button-danger shadow-5",onClick:r=>xe(s.id)},null,8,["onClick"]),t("div",Rt,[t("div",{class:"shadow-5 p-3 m-0 p-4",style:{"border-radius":"0 0 0.5rem 0.5rem",display:"flex","overflow-x":"auto","flex-wrap":"wrap","align-items":"flex-start",gap:"2rem","justify-content":"start",padding:"10px"},onDragover:e[18]||(e[18]=Ae(()=>{},["prevent"])),onDrop:r=>Oe(s)},[(p(!0),m(Y,null,ne(s.users,r=>{var ue;return p(),m("div",{class:"shadow-2 p-2",key:r.id,style:pe([{"text-align":"center",width:"7rem","aspect-ratio":"1 / 1","background-color":"white",color:"black",position:"relative","border-radius":"0.5rem"},r.rest?"outline:2px solid green;  ":"background-color: white;"])},[t("p",Ht,v(r.name.split(" ").slice(0,1).join(" ")),1),t("img",{class:"shadow-2 p-1",onClick:oe=>re(r),src:`${j(k)}/read-product-image/96/employer-${r.dni}`,alt:"user.name",onError:oe=>se(r.gender,oe),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,qt),r.rest?(p(),m("div",Pt,[t("p",Gt,[t("b",null,v((ue=r.contract_type)==null?void 0:ue.toLowerCase().slice(0,13)),1)]),Kt])):(p(),m("div",zt,[t("p",Jt," De: "+v(new Date(r.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))+" A: "+v(new Date(r.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),l(o,{style:{position:"absolute",width:"1.5rem",height:"1.5rem",top:"-0.5rem",right:"-0.5rem","font-weight":"bold"},icon:"pi pi-times fw-bold",class:"p-button-rounded p-button-danger p-0",onClick:oe=>ke(r.id)},null,8,["onClick"])],4)}),128))],40,At)])])]))),128)),I(" ` ")])])])])]),l(i,{visible:$.value,"onUpdate:visible":e[21]||(e[21]=s=>$.value=s),style:{width:"20rem"},modal:!0},{header:d(()=>[I(" . ")]),footer:d(()=>[t("div",Yt,[l(o,{severity:"help",label:"Descansa",onClick:Ee}),l(o,{severity:"success",label:"Aceptar",onClick:Ve})])]),default:d(()=>[t("h5",Qt,"Cuantas horas trabajo "+v(_.value.name)+"?",1),Xt,l(b,{modelValue:C.value,"onUpdate:modelValue":e[19]||(e[19]=s=>C.value=s),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},{inputicon:d(({clickCallback:s})=>[l(x,{class:"pi pi-clock cursor-pointer",onClick:s},null,8,["onClick"])]),_:1},8,["modelValue"]),Zt,l(b,{modelValue:T.value,"onUpdate:modelValue":e[20]||(e[20]=s=>T.value=s),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},{inputicon:d(({clickCallback:s})=>[l(x,{class:"pi pi-clock cursor-pointer",onClick:s},null,8,["onClick"])]),_:1},8,["modelValue"])]),_:1},8,["visible"])],64)}}},os=We(es,[["__scopeId","data-v-1af2ae5e"]]);export{os as default};
