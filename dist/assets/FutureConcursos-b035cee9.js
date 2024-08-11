import{_ as H}from"./fire-bbb69f2b.js";import{c as C}from"./contestService-c3b2fde1.js";import{_ as J,r as _,l as X,h as K,a as E,o as s,c as l,d as v,w as f,b as t,F as I,e as P,s as L,u as d,U as k,q as u,t as o,f as F,m as y,p as Q,g as Y}from"./index-f28936d7.js";import{f as j}from"./formatDate-262296cf.js";import{f as z}from"./formatoPesos-2a38d2e7.js";import{f as Z}from"./format-8cf56335.js";import{e as ee}from"./es-f6133d36.js";const r=D=>(Q("data-v-d96bc2a0"),D=D(),Y(),D),te={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"50rem"}},ie={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center"}},se=r(()=>t("img",{style:{width:"2rem","aspect-ratio":"1 / 1","border-radius":"50%",border:"3px solid yellow"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s",alt:""},null,-1)),le={class:"py-2",style:{"overflow-x":"auto",display:"flex","flex-direction":"column",width:"20rem"}},oe=["src"],ae={style:{}},re=r(()=>t("b",null,"Nombre:",-1)),ne=r(()=>t("b",null,"Participaciones:",-1)),de={style:{"font-weight":"bold"}},ce=r(()=>t("span",{style:{"font-weight":"bold"}},"Fecha:",-1)),ue=r(()=>t("p",{class:"p-0 m-0 mt-3"},[t("b",null,"Instrucciones:")],-1)),pe={class:"px-0 mx-0"},_e=["src"],ye={key:1},ve={key:2},me={key:3},he={class:"py-3",style:{display:"flex",width:"100%","justify-content":"space-between",gap:"1rem"}},fe={style:{height:"60vh"}},be=r(()=>t("b",null,"MIS EVIDENCIAS ",-1)),ge={class:"p-3",style:{display:"flex","flex-direction":"column",gap:".5rem"}},we={style:{},class:""},xe={class:"p-0 m-0"},ke=["href"],Ce={key:1,style:{color:"var(--primary-color)"}},De={key:2,style:{color:"var(--primary-color)"}},$e=["src"],Se=r(()=>t("div",{style:{position:"fixed",left:"-2rem","z-index":"-1",filter:"blur(10px)",top:"0"},class:"col-12"},[t("img",{style:{width:"120%",left:"0rem",height:"100vh","object-fit":"cover"},src:"https://backend.salchimonster.com/read-product-image/600/site-2",alt:""})],-1)),Ue={class:"container mx-auto p-2",style:{"max-width":"700px","z-index":"99"}},Ee=r(()=>t("p",{class:"text-white text-4xl text-center",style:{"font-weight":"bold"}},"PROXIMOS CONCURSOS ",-1)),Ie={class:"container_contests",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Pe={class:"container_contest_item p-2",style:{display:"flex","flex-direction":"column",gap:"1rem","background-color":"#00000090",border:"3px solid var(--primary-color)","border-radius":"0.5rem"}},Fe={class:"col-12 p-0",style:{display:"flex","flex-direction":"column"}},Me={class:"gridd",style:{display:"flex",gap:"1rem"}},Ve=["src"],Ne={class:"m-0 text-2xl",style:{"font-weight":"bold",color:"#fff","text-transform":"capitalize"}},Re={class:"m-0",style:{color:"#fff"}},je=r(()=>t("img",{src:"",alt:""},null,-1)),ze={class:"text-white"},Ae=r(()=>t("span",{style:{color:"var(--primary-color)","font-weight":"bold"}},[t("b",null,"Participa"),u(":")],-1)),Oe=r(()=>t("br",null,null,-1)),Be={class:"text-white"},Le=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Desde"),u(":")],-1)),qe=r(()=>t("br",null,null,-1)),Te=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Hasta"),u(":")],-1)),We={key:0,class:"text-white text-xl py-0 my-0"},Ge={key:1,class:"text-white text-xl py-0 my-0"},He=r(()=>t("b",null," Se el primero en inscribirte",-1)),Je=[He],Xe={class:"text-2xl",style:{color:"var(--primary-color)","font-weight":"bold"}},Ke={style:{display:"flex",gap:"1rem"}},Qe={style:{"justify-content":"center","overflow-x":"auto",width:"100%",gap:"0rem",display:"flex","flex-direction":"column"},class:"px-0 overflow pb-1",c:""},Ye=r(()=>t("div",{style:{display:"flex","justify-content":"end","align-items":"center"}},null,-1)),Ze={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"100%"}},et={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center",width:"100%",position:"relative"}},tt={key:0,class:"text-white pt-4 my-0"},it={key:1,class:"text-white pt-4 my-0"},st=["onClick","src"],lt={key:0,style:{width:"100%",position:"absolute","z-index":"10",bottom:"0"},src:H,alt:""},ot=r(()=>t("div",{style:{display:"flex","flex-direction":"column",gap:".5rem","justify-content":"end",height:"100%"}},null,-1)),at={__name:"FutureConcursos",setup(D){const g=_({showMyEvidenceDialog:!1,showParticipantDetail:!1}),b=_({}),$=_({}),M=_([]),A=_(!1),V=_([]),w=_(null),q=()=>{const n=x.value.files[0];n&&(w.value=URL.createObjectURL(n))},T=(n,i)=>{b.value=n,$.value=i,g.value.showParticipantDetail=!0},m=_(""),N=X(),S=_(!1),x=_(null),O=n=>{x.value=null,S.value=!0,p.value=n},p=_({}),W=async(n,i,c)=>{if(n===null){alert("debe cargar una evidaencia");return}if(c==3&&!n.includes(".")){alert("debe ser una URL valida");return}const h={evidence_type_id:c,evidence_entry:`${n}`||"0",contest_id:i},R={participant_id:N.rawUserData.id,contest_id:i},U=await C.sendEvidence({evidence:h,Contest_entry:R});if(c===1){if(!x.value.files.length){alert("Por favor, selecciona una imagen.");return}const e=x.value.files[0];await C.sendContestImage(N.rawUserData.id,i,U,e)}S.value=!1,m.value="",M.value=await C.getAllContest()},B=async(n,i)=>{V.value=[],g.value.showMyEvidenceDialog=!0,V.value=await C.getParticipationByUserId(n,i)},G=n=>{const i=new Date(n).getDate()-new Date().getDate();let c="";switch(i){case 0:c="Finaliza hoy";break;case 1:c="Finaliza Manana";break;case 2:c="Finaliza pasado Manana";break;default:c=`Finaliza en  ${i} ${Math.abs(i)>1?"dias":"dia"} `;break}return c};return K(async()=>{M.value=await C.getAllContest()}),(n,i)=>{const c=E("Dialog"),h=E("Button"),R=E("inputNumber"),U=E("inputText");return s(),l("div",null,[v(c,{class:"p-2",style:{"max-width":"100vw"},modal:"",visible:A.value,"onUpdate:visible":i[0]||(i[0]=e=>A.value=e)},{default:f(()=>[t("div",te,[(s(),l(I,null,P([1,2,3,4,5,6,7,8,9,0,4,5,6,7],(e,a)=>t("div",ie,[se,t("div",{class:"py-2",style:L([`height:${(12-a+1)/2}rem`,{width:"2rem","background-color":"var(--primary-color)","border-radius":"3rem 3rem 0 0"}])},null,4)])),64))])]),_:1},8,["visible"]),v(c,{class:"p-2",header:"Informacion de participante",style:{"max-width":"min-content"},modal:"",visible:g.value.showParticipantDetail,"onUpdate:visible":i[2]||(i[2]=e=>g.value.showParticipantDetail=e)},{default:f(()=>[t("div",le,[t("img",{style:{width:"100%","border-radius":".5rem","aspect-ratio":"1 / 1","object-fit":"cover"},src:$.value.is_site_participation?`${d(k)}/read-product-image/600/site-${b.value.site_id}`:`${d(k)}/read-product-image/600/employer-${b.value.dni}`,alt:""},null,8,oe),t("p",ae,[re,u(" "+o(b.value.name),1)]),t("p",null,[ne,u(" "+o(`${$.value.evidence_type_id==4?d(z)(b.value.total_entries):b.value.total_entries}`),1)]),v(h,{onClick:i[1]||(i[1]=e=>B($.value.id,b.value.employer_id)),severity:"help",size:"small",label:"VER PARTICIPACIONES"})])]),_:1},8,["visible"]),v(c,{close:w.value=null,class:"p-2",header:"Cargar Evidencia",style:{width:"30rem"},modal:"",visible:S.value,"onUpdate:visible":i[8]||(i[8]=e=>S.value=e)},{footer:f(()=>[t("div",he,[p.value.evidence_type_id==1?(s(),F(h,{key:0,class:"m-0",severity:w.value?"warning":"help",onClick:i[6]||(i[6]=e=>x.value.click()),style:{width:"100%"},label:w.value?"Cambiar archivo":"Subir Archivo"},null,8,["severity","label"])):y("",!0),v(h,{severity:"help",class:"m-0",style:{width:"100%"},label:"Guardar",onClick:i[7]||(i[7]=e=>W(m.value,p.value.id,p.value.evidence_type_id))})])]),default:f(()=>[t("div",null,[t("p",de,o(p.value.name),1),t("span",null,[ce,u(" "+o(d(Z)(new Date,"dd-MMMM-yyyy",{locale:d(ee)})),1)]),ue,t("p",pe,o(p.value.instructions),1),p.value.evidence_type_id==1&&w.value?(s(),l("img",{key:0,class:"",style:{width:"100%"},src:w.value,alt:""},null,8,_e)):y("",!0),p.value.evidence_type_id==4?(s(),l("div",ye,[v(R,{modelValue:m.value,"onUpdate:modelValue":i[3]||(i[3]=e=>m.value=e),style:{width:"100%"}},null,8,["modelValue"])])):y("",!0),p.value.contest_winner_type_id==1&&p.value.evidence_type_id==2?(s(),l("div",ve,[v(U,{modelValue:m.value,"onUpdate:modelValue":i[4]||(i[4]=e=>m.value=e),style:{width:"100%"}},null,8,["modelValue"])])):y("",!0),p.value.evidence_type_id==3?(s(),l("div",me,[v(U,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=e=>m.value=e),style:{width:"100%"}},null,8,["modelValue"])])):y("",!0),t("input",{onChange:q,ref_key:"inputFile",ref:x,style:{display:"none"},type:"file",accept:"image/*"},null,544)])]),_:1},8,["close","visible"]),v(c,{class:"p-2",header:"Listado de evidencias",style:{width:"30rem","background-color":"#fff"},modal:"",visible:g.value.showMyEvidenceDialog,"onUpdate:visible":i[9]||(i[9]=e=>g.value.showMyEvidenceDialog=e)},{default:f(()=>[t("div",fe,[be,t("ol",ge,[(s(!0),l(I,null,P(V.value,e=>(s(),l("li",we,[t("p",xe,[t("b",null,o(d(j)(e.timestamp)),1)]),e.evidence_type_id==3&&(e.evidence_entry.startsWith("http://")||e.evidence_entry.startsWith("https://"))?(s(),l("a",{key:0,style:{color:"var(--primary-color)"},href:e.evidence_entry},o(e.evidence_entry),9,ke)):e.evidence_type_id==3||e.evidence_type_id==2?(s(),l("p",Ce,o(e.evidence_entry),1)):y("",!0),e.evidence_type_id==4?(s(),l("span",De,o(d(z)(e.evidence_entry)),1)):y("",!0),e.evidence_type_id==1?(s(),l("img",{key:3,style:{width:"100%","border-radius":".5rem"},src:`${d(k)}${e.evidence_entry}`,alt:""},null,8,$e)):y("",!0)]))),256))])])]),_:1},8,["visible"]),Se,t("div",Ue,[Ee,t("div",Ie,[(s(!0),l(I,null,P(M.value.filter(e=>!e.started),e=>(s(),l("div",Pe,[t("div",Fe,[t("div",Me,[t("img",{class:"p-0",style:{width:"30%","aspect-ratio":"3 / 3","border-radius":".3rem","object-fit":"cover"},src:`${d(k)}/read-product-image/600/contest-${e.id}`,alt:""},null,8,Ve),t("div",null,[t("p",Ne,o(e.name),1),t("p",Re,o(e.description),1),je,t("p",ze,[Ae,u(" "+o(e.is_site_participation?"SEDES":"COLABORADORES")+" ",1),Oe]),t("p",Be,[Le,u(" "+o(d(j)(e.start_date))+" ",1),qe,u(),Te,u(" "+o(d(j)(e.end_date)),1)]),e.rbq.filter(a=>a.name).length>0?(s(),l("p",We,[t("b",null,o(e.rbq.filter(a=>a.name).length)+" "+o(e.is_site_participation?"sede":"persona")+" participando",1)])):(s(),l("p",Ge,Je)),t("p",Xe,o(G(e.end_date)),1),t("div",Ke,[e.entry_exists?(s(),F(h,{key:1,onClick:a=>O(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Subir evidencia")]),_:2},1032,["onClick"])):(s(),F(h,{key:0,onClick:a=>O(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Participar")]),_:2},1032,["onClick"])),e.entry_exists?(s(),F(h,{key:2,onClick:a=>B(e.id,d(N).rawUserData.id),severity:"help",style:{border:"2px solid var(--primary-color)"}},{default:f(()=>[u("Mis evidencias")]),_:2},1032,["onClick"])):y("",!0)])])]),t("div",Qe,[Ye,t("div",Ze,[(s(!0),l(I,null,P(e.rbq.filter(a=>a.total_entries),(a,rt)=>(s(),l("div",et,[e.contest_winner_type_id==2?(s(),l("p",tt,o(d(z)(a.total_entries)),1)):(s(),l("p",it,o(a.total_entries),1)),t("img",{onClick:nt=>T(a,e),class:"min-user-img",style:{width:"100%","max-width":"5rem","background-color":"#fff","aspect-ratio":"1 / 1","border-radius":"50%","object-fit":"cover"},src:e.is_site_participation?`${d(k)}/read-product-image/600/site-${a.site_id}`:`${d(k)}/read-product-image/300/employer-${a.dni}`,alt:""},null,8,st),t("div",{class:"py-2",style:L([`height:${a.total_entries/e.max_entries*10}rem; width:${100/e.rbq.length}%`,{"min-width":"3rem","max-width":"5rem","background-color":"var(--primary-color)",overflow:"hidden","border-radius":"3rem 3rem 0 0",position:"relative"}])},[a.total_entries==e.max_entries?(s(),l("img",lt)):y("",!0),ot],4)]))),256))])])])]))),256))])])])}}},mt=J(at,[["__scopeId","data-v-d96bc2a0"]]);export{mt as default};
