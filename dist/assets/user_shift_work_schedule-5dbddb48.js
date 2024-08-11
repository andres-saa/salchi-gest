import{_ as fe,r as l,l as we,H as De,y as Se,h as ke,U as V,k as be,a as F,o as f,c as w,d as n,w as b,b as a,q as N,t as D,F as K,e as Z,s as G,a5 as xe,u as Q,ac as Te,m as Ce,p as Ie,g as Oe}from"./index-f28936d7.js";import{u as X,e as $,s as Ue,a as Y,b as ee,c as te}from"./userService-af1cf623.js";import{s as Ve}from"./siteService-3f61b781.js";import{f as ae,s as W}from"./format-8cf56335.js";const x=L=>(Ie("data-v-a43361ac"),L=L(),Oe(),L),Fe={class:"p-0 mx-auto my-8",style:{"margin-top":"3rem"}},Le={class:""},$e={class:"col-12 p-0 m-0 my-2"},We={class:"col-12 p-0 m-0 my-2"},Ee={class:"col-12 p-0 m-0 my-2"},je={class:"col-12 p-0 m-0 my-2"},Me={class:"col-12 p-0 my-2"},Be={class:"col-12 p-0 my-2"},Ne=x(()=>a("p",{class:"col-12 m-0 p-0 py-2"},"Desde:",-1)),Re=x(()=>a("p",{class:"col-12 m-0 p-0 py-2"},"Hasta:",-1)),Ae={class:"col-12 p-0 m-0"},He={class:"grid p-0 mx-auto",style:{"max-width":"700px"}},Pe={class:"col-12 md:col-5 py-2",style:{height:"4rem"}},Je={class:"col-12 md:col-2 py-2 md:mb-8",style:{display:"flex",height:"4rem","justify-content":"end"}},qe={class:"p-3 text-2xl text-center my-2",style:{"font-weight":"bold",color:"black","text-transform":"uppercase"}},ze=x(()=>a("i",{class:"fa-solid fa-folder-open"},null,-1)),Ke={class:"col-12 pb-6",style:{}},Ze={style:{display:"flex",gap:"0rem","flex-direction":"column"}},Ge={class:"py-0 px-4 text-center col-12 m-0 p-0 text",style:{"font-weight":"bold","text-shadow":"0 0 3px black","text-transform":"uppercase"}},Qe={style:{"overflow-x":"auto"}},Xe={style:{"min-width":"max-content"}},Ye=["onDrop"],et={class:"py-0 my-0 text-sm",style:{"min-width":"max-content","font-weight":"bold","text-transform":"uppercase"}},tt=["onClick","src","onError"],at={key:0,class:"text-sm"},st={class:"py-0 my-0"},ot={class:"py-0 my-0 text-sm text-center"},lt={key:1,class:"text-sm"},nt=x(()=>a("p",{style:{opacity:"0"},class:"py-0 my-0 text-sm text-center"}," . ",-1)),it={class:"py-0 my-0"},rt=x(()=>a("p",{class:"py-0 my-0"},[a("b",{style:{color:"green"}},"DESCANSA")],-1)),ct={key:2,style:{position:"absolute","background-color":"green","border-radius":"50%",width:"1.5rem",height:"1.5rem",top:"-0.5rem",right:"-0.5rem","font-weight":"bold"},icon:"pi pi-times fw-bold",class:"p-button-rounded p-button-danger p-0 texto-parpadeante"},dt={class:"",style:{"text-transform":"uppercase"}},ut=x(()=>a("p",null,"Hora de llegada:",-1)),pt=x(()=>a("p",null,"Hora de salida:",-1)),mt={class:"col-12 p-0",style:{display:"flex","justify-content":"space-between"}},vt={__name:"user_shift_work_schedule",setup(L){const se=l(!1),oe=l(null),le=e=>{oe.value=e,se.value=!0},I=l(!1),d=l(new Date),u=l(new Date),E=we(),v=De();l(!1),l(null);const O=l(),j=l(),T=l(),C=l(),S=l(!1),i=l(null),m=l(null),_=l(new Date),y=l(new Date),R=Se(()=>!T.value||!C.value?"":`${ae(T.value,"dd/MM/yyyy")} - ${ae(C.value,"dd/MM/yyyy")}`),ne=()=>{d.value=T.value||new Date,u.value=C.value||new Date,I.value=!0},ie=()=>{I.value=!1},k=()=>{T.value=d.value,C.value=u.value,I.value=!1,B()},A=()=>{const e=new Date;d.value=W(e,{weekStartsOn:1}),u.value=$(e,{weekStartsOn:1}),k()},re=()=>{const e=W(new Date,{weekStartsOn:1});d.value=Ue(e,7),u.value=$(d.value,{weekStartsOn:1}),k()},ce=()=>{const e=new Date;d.value=Y(e),u.value=ee(e),k()},de=()=>{const e=new Date;d.value=Y(te(e,1)),u.value=ee(te(e,1)),k()};l(!1),l(null);const ue={Monday:"#22c55e",Tuesday:"#F59E0B",Wednesday:"#EF4444",Thursday:"#3B82F6",Friday:"#A855F7",Saturday:"#10B981",Sunday:"#EC4899"},pe=()=>{const e=new Date,t=new Date(e.setDate(e.getDate()+(7-e.getDay())+1));d.value=W(t,{weekStartsOn:1}),u.value=$(t,{weekStartsOn:1}),k()},me=()=>{const e=new Date,t=new Date(e.setDate(e.getDate()+(7-e.getDay())+8));d.value=W(t,{weekStartsOn:1}),u.value=$(t,{weekStartsOn:1}),k()},ve=e=>{if(!(e instanceof Date))return console.error("getDayColor: date is not a Date object",e),"#FFFFFF";const t=e.toLocaleDateString("en-US",{weekday:"long"});return ue[t]},M=l([]),H=l([]),_e=(e,t)=>{const o={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"},h=e==null?void 0:e.trim().toLowerCase();t.target.src=o[h]||o.default},P=l(null);l(!1),l(new Date),ke(async()=>{j.value=await Ve.getSites(),O.value=j.value.filter(t=>t.site_id==E.rawUserData.site_id)[0],P.value=j.value.filter(t=>t.site_id==E.rawUserData.site_id)[0];const e=await X.getUsersBySiteId(E.rawUserData.site_id);M.value=e.filter(t=>t.status=="activo"),await fetch(`${V}/shift_work_days_with_records`)}),be(O,async e=>{const t=await X.getUsersBySiteId(e.site_id);M.value=t.filter(o=>o.status=="activo"),P.value=e,A(),B()});const B=async()=>{if(v.setLoading(!0,"cargando horario"),!O.value||!T.value||!C.value){alert("Please select a site and date range.");return}const e=T.value.toISOString().split("T")[0],t=C.value.toISOString().split("T")[0],o=await fetch(`${V}/shift_filtered_work_days?site_id=${O.value.site_id}&start_date=${e}&end_date=${t}`);if(o.ok){v.setLoading(!1,"cargando horario");const h=await o.json();H.value=h.map(c=>(c.date=new Date(c.date),c.date.setDate(c.date.getDate()+1),c.users=c.records.map(g=>{let U=M.value.find(p=>p.id===g.employer_id);if(U){let p={...U};const s=new Date(`${c.date.toISOString().split("T")[0]}T${g.start_time}`),r=new Date(`${c.date.toISOString().split("T")[0]}T${g.end_time}`);return p.arrivalTime=s,p.departureTime=r,p.hoursWorked=(r-s)/36e5,p.rest=g.rest,p}return null}).filter(g=>g!=null),v.setLoading(!1,"cargando horario"),c))}else v.setLoading(!1,"cargando horario"),alert("Failed to fetch workdays")},ye=e=>{m.value=e,S.value=!0},he=async()=>{if(S.value=!1,v.setLoading(!0,"cargando"),!i.value||!m.value)return;let e=_.value.toISOString().split("T")[1].slice(0,8),t=y.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:i.value.id,work_day_id:m.value.id,start_time:e,end_time:t};await fetch(`${V}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),i.value.arrivalTime=_.value,i.value.departureTime=y.value,i.value.hoursWorked=(y.value-_.value)/36e5,m.value.users.push(i.value),S.value=!1,i.value=null,m.value=null,v.setLoading(!1,"cargando")},ge=async()=>{if(S.value=!1,v.setLoading(!0,"cargando"),!i.value||!m.value)return;let e=_.value.toISOString().split("T")[1].slice(0,8),t=y.value.toISOString().split("T")[1].slice(0,8);const o={employer_id:i.value.id,work_day_id:m.value.id,start_time:e,end_time:t,rest:!0};await fetch(`${V}/shift_work_records`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),i.value.arrivalTime=_.value,i.value.departureTime=y.value,i.value.hoursWorked=(y.value-_.value)/36e5,i.value.rest=!0,m.value.users.push(i.value),S.value=!1,i.value=null,m.value=null,v.setLoading(!1,"cargando")};return(e,t)=>{var p;const o=F("Button"),h=F("Calendar"),c=F("Dialog"),g=F("InputText"),U=F("InputIcon");return f(),w("div",Fe,[n(c,{visible:I.value,"onUpdate:visible":t[2]||(t[2]=s=>I.value=s),modal:"",closable:""},{footer:b(()=>[n(o,{severity:"danger",label:"Cancelar",onClick:ie,class:"p-button-text"}),n(o,{severity:"success",label:"Aceptar",onClick:k})]),default:b(()=>[a("div",Le,[a("div",$e,[n(o,{class:"col-12 p-1",severity:"success",label:"Semana entrante",onClick:pe})]),a("div",We,[n(o,{class:"col-12 p-1",severity:"secondary",label:"Dentro de 2 semanas",onClick:me})]),a("div",Ee,[n(o,{class:"col-12 p-1",severity:"danger",label:"Esta semana",onClick:A})]),a("div",je,[n(o,{class:"col-12 p-1",severity:"help",label:"Semana pasada",onClick:re})]),a("div",Me,[n(o,{class:"col-12 p-1",severity:"warning",label:"Este mes",onClick:ce})]),a("div",Be,[n(o,{class:"col-12 p-1",severity:"primary",label:"Mes pasado",onClick:de})])]),Ne,n(h,{class:"col-12 m-0 p-0",modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),showIcon:""},null,8,["modelValue"]),Re,n(h,{class:"col-12 m-0 p-0",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=s=>u.value=s),showIcon:""},null,8,["modelValue"])]),_:1},8,["visible"]),a("div",Ae,[a("div",He,[a("div",Pe,[n(g,{style:{height:"100%"},class:"col-12 text-center m-0",readonly:"",modelValue:R.value,"onUpdate:modelValue":t[3]||(t[3]=s=>R.value=s),onClick:ne},null,8,["modelValue"])]),a("div",Je,[n(o,{severity:"help",rounded:"",class:"mb-3",icon:"pi pi-search",onClick:B})])])]),a("p",qe,[ze,N(" Calendario de trabajo "+D((p=O.value)==null?void 0:p.site_name),1)]),a("div",Ke,[a("div",Ze,[(f(!0),w(K,null,Z(H.value,s=>(f(),w("div",{class:"p-0 m-0",key:s.id,style:{position:"relative"}},[a("div",{class:"shadow-2",style:G({"background-color":ve(s.date),color:"white","border-radius":"0.5rem 0.5rem 0 0",display:"flex","align-items":"center","justify-content":"space-beetwen"})},[a("p",Ge,D(s.date.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Bogota"})),1)],4),a("div",Qe,[a("div",Xe,[a("div",{class:"shadow-5 p-3 m-0 p-4",style:{"border-radius":"0 0 0.5rem 0.5rem",display:"flex","overflow-x":"auto","flex-wrap":"wrap","align-items":"flex-start",gap:"2rem","justify-content":"start",padding:"10px"},onDragover:t[4]||(t[4]=xe(()=>{},["prevent"])),onDrop:r=>ye(s)},[(f(!0),w(K,null,Z(s.users,r=>{var J,q;return f(),w("div",{class:"shadow-2 p-2",key:r.id,style:G([{"text-align":"center",width:"7rem","aspect-ratio":"1 / 1","background-color":"white",color:"black",position:"relative","border-radius":"0.5rem"},r.rest?"box-shadow:0 0 10px green !important ":"background-color: white;"])},[a("p",et,D(r.name.split(" ").slice(0,1).join(" ")),1),a("img",{class:"shadow-2 p-1",onClick:z=>le(r),src:`${Q(V)}/read-product-image/96/employer-${r.dni}`,alt:"user.name",onError:z=>_e(r.gender,z),style:{width:"3rem","object-fit":"cover",height:"3rem","border-radius":"50%"}},null,40,tt),r.rest?(f(),w("div",lt,[nt,a("p",it,[a("b",null,D((q=r.contract_type)==null?void 0:q.toLowerCase().slice(0,13)),1)]),rt])):(f(),w("div",at,[a("p",st,[a("b",null,D((J=r.contract_type)==null?void 0:J.toLowerCase().split(" ").slice(0,2).join(" ")),1)]),a("p",ot," De: "+D(new Date(r.arrivalTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))+" A: "+D(new Date(r.departureTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})),1)])),Q(Te)()==r.id?(f(),w("div",ct)):Ce("",!0)],4)}),128))],40,Ye)])])]))),128)),N(" ` ")])]),n(c,{visible:S.value,"onUpdate:visible":t[7]||(t[7]=s=>S.value=s),style:{width:"20rem"},modal:!0},{header:b(()=>[N(" . ")]),footer:b(()=>[a("div",mt,[n(o,{severity:"help",label:"Descansa",onClick:ge}),n(o,{severity:"success",label:"Aceptar",onClick:he})])]),default:b(()=>[a("h5",dt,"Cuantas horas trabajo "+D(i.value.name)+"?",1),ut,n(h,{modelValue:_.value,"onUpdate:modelValue":t[5]||(t[5]=s=>_.value=s),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},{inputicon:b(({clickCallback:s})=>[n(U,{class:"pi pi-clock cursor-pointer",onClick:s},null,8,["onClick"])]),_:1},8,["modelValue"]),pt,n(h,{modelValue:y.value,"onUpdate:modelValue":t[6]||(t[6]=s=>y.value=s),showIcon:"",iconDisplay:"input",timeOnly:"",hourFormat:"12"},{inputicon:b(({clickCallback:s})=>[n(U,{class:"pi pi-clock cursor-pointer",onClick:s},null,8,["onClick"])]),_:1},8,["modelValue"])]),_:1},8,["visible"])])}}},ft=fe(vt,[["__scopeId","data-v-a43361ac"]]);export{ft as default};
