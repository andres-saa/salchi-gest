<<<<<<<< HEAD:dist/assets/CompletedConcursos-54dbb84c.js
import{_ as H}from"./fire-bbb69f2b.js";import{c as C}from"./contestService-584139f4.js";import{_ as J,r as _,l as Z,i as K,a as I,o as l,c as s,g as m,w as f,b as t,F as E,d as M,k as O,u as d,U as k,j as u,t as a,e as P,f as v,p as Q,h as X}from"./index-9672dc6b.js";import{f as A}from"./formatDate-262296cf.js";import{f as R}from"./formatoPesos-2a38d2e7.js";import{f as Y}from"./format-8cf56335.js";import{e as ee}from"./es-f6133d36.js";const r=D=>(Q("data-v-b66fa0e8"),D=D(),X(),D),te={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"50rem"}},ie={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center"}},le=r(()=>t("img",{style:{width:"2rem","aspect-ratio":"1 / 1","border-radius":"50%",border:"3px solid yellow"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s",alt:""},null,-1)),se={class:"py-2",style:{"overflow-x":"auto",display:"flex","flex-direction":"column",width:"20rem"}},ae=["src"],oe={style:{}},re=r(()=>t("b",null,"Nombre:",-1)),ne=r(()=>t("b",null,"Participaciones:",-1)),de={style:{"font-weight":"bold"}},ce=r(()=>t("span",{style:{"font-weight":"bold"}},"Fecha:",-1)),ue=r(()=>t("p",{class:"p-0 m-0 mt-3"},[t("b",null,"Instrucciones:")],-1)),pe={class:"px-0 mx-0"},_e=["src"],ve={key:1},me={key:2},ye={key:3},he={class:"py-3",style:{display:"flex",width:"100%","justify-content":"space-between",gap:"1rem"}},fe={style:{height:"60vh"}},be=r(()=>t("b",null,"MIS EVIDENCIAS ",-1)),ge={class:"p-3",style:{display:"flex","flex-direction":"column",gap:".5rem"}},we={style:{},class:""},xe={class:"p-0 m-0"},ke=["href"],Ce={key:1,style:{color:"var(--primary-color)"}},De={key:2,style:{color:"var(--primary-color)"}},$e=["src"],Se=r(()=>t("div",{style:{position:"fixed",left:"-2rem","z-index":"-1",filter:"blur(10px)",top:"0"},class:"col-12"},[t("img",{style:{width:"120%",left:"0rem",height:"100vh","object-fit":"cover"},src:"https://backend.salchimonster.com/read-product-image/600/site-8",alt:""})],-1)),Ue={class:"container mx-auto p-2",style:{"max-width":"700px","z-index":"99"}},Ie=r(()=>t("p",{class:"text-white text-4xl text-center",style:{"font-weight":"bold"}}," CONCURSOS FINALIZADOS",-1)),Ee={class:"container_contests",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Me={class:"container_contest_item p-2",style:{display:"flex","flex-direction":"column",gap:"1rem","background-color":"#00000090",border:"3px solid var(--primary-color)","border-radius":"0.5rem"}},Pe={class:"col-12 p-0",style:{display:"flex","flex-direction":"column"}},Ve={class:"gridd",style:{display:"flex",gap:"1rem"}},Fe=["src"],Ne={class:"m-0 text-2xl",style:{"font-weight":"bold",color:"#fff","text-transform":"capitalize"}},je={class:"m-0",style:{color:"#fff"}},Ae=r(()=>t("img",{src:"",alt:""},null,-1)),Re={class:"text-white"},ze=r(()=>t("span",{style:{color:"var(--primary-color)","font-weight":"bold"}},[t("b",null,"Participaron"),u(":")],-1)),Be=r(()=>t("br",null,null,-1)),Le={class:"text-white"},Oe=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Desde"),u(":")],-1)),Te=r(()=>t("br",null,null,-1)),qe=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Hasta"),u(":")],-1)),We={key:0,class:"text-white text-xl py-0 my-0"},Ge={class:"text-2xl",style:{color:"var(--primary-color)","font-weight":"bold"}},He={style:{display:"flex",gap:"1rem"}},Je={style:{"justify-content":"center","overflow-x":"auto",width:"100%",gap:"0rem",display:"flex","flex-direction":"column"},class:"px-0 overflow pb-1",c:""},Ze=r(()=>t("div",{style:{display:"flex","justify-content":"end","align-items":"center"}},null,-1)),Ke={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"100%"}},Qe={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center",width:"100%",position:"relative"}},Xe={key:0,class:"text-white pt-4 my-0"},Ye={key:1,class:"text-white pt-4 my-0"},et=["onClick","src"],tt={key:0,style:{width:"100%",position:"absolute","z-index":"10",bottom:"0"},src:H,alt:""},it=r(()=>t("div",{style:{display:"flex","flex-direction":"column",gap:".5rem","justify-content":"end",height:"100%"}},null,-1)),lt={__name:"CompletedConcursos",setup(D){const g=_({showMyEvidenceDialog:!1,showParticipantDetail:!1}),b=_({}),$=_({}),V=_([]),z=_(!1),F=_([]),w=_(null),T=()=>{const n=x.value.files[0];n&&(w.value=URL.createObjectURL(n))},q=(n,i)=>{b.value=n,$.value=i,g.value.showParticipantDetail=!0},y=_(""),N=Z(),S=_(!1),x=_(null),B=n=>{x.value=null,S.value=!0,p.value=n},p=_({}),W=async(n,i,c)=>{if(n===null){alert("debe cargar una evidaencia");return}if(c==3&&!n.includes(".")){alert("debe ser una URL valida");return}const h={evidence_type_id:c,evidence_entry:`${n}`||"0",contest_id:i},j={participant_id:N.rawUserData.id,contest_id:i},U=await C.sendEvidence({evidence:h,Contest_entry:j});if(c===1){if(!x.value.files.length){alert("Por favor, selecciona una imagen.");return}const e=x.value.files[0];await C.sendContestImage(N.rawUserData.id,i,U,e)}S.value=!1,y.value="",V.value=await C.getAllContest()},L=async(n,i)=>{F.value=[],g.value.showMyEvidenceDialog=!0,F.value=await C.getParticipationByUserId(n,i)},G=n=>{const i=new Date(n).getDate()-new Date().getDate();let c="";switch(i){case 0:c="Finaliza hoy";break;case 1:c="Finaliza Manana";break;case 2:c="Finaliza pasado Manana";break;default:c=`Finalizo hace   ${Math.abs(i)} ${Math.abs(i)>1?"dias":"dia"}`;break}return c};return K(async()=>{V.value=await C.getAllContest()}),(n,i)=>{const c=I("Dialog"),h=I("Button"),j=I("inputNumber"),U=I("inputText");return l(),s("div",null,[m(c,{class:"p-2",style:{"max-width":"100vw"},modal:"",visible:z.value,"onUpdate:visible":i[0]||(i[0]=e=>z.value=e)},{default:f(()=>[t("div",te,[(l(),s(E,null,M([1,2,3,4,5,6,7,8,9,0,4,5,6,7],(e,o)=>t("div",ie,[le,t("div",{class:"py-2",style:O([`height:${(12-o+1)/2}rem`,{width:"2rem","background-color":"var(--primary-color)","border-radius":"3rem 3rem 0 0"}])},null,4)])),64))])]),_:1},8,["visible"]),m(c,{class:"p-2",header:"Informacion de participante",style:{"max-width":"min-content"},modal:"",visible:g.value.showParticipantDetail,"onUpdate:visible":i[2]||(i[2]=e=>g.value.showParticipantDetail=e)},{default:f(()=>[t("div",se,[t("img",{style:{width:"100%","border-radius":".5rem","aspect-ratio":"1 / 1","object-fit":"cover"},src:$.value.is_site_participation?`${d(k)}/read-product-image/600/site-${b.value.site_id}`:`${d(k)}/read-product-image/600/employer-${b.value.dni}`,alt:""},null,8,ae),t("p",oe,[re,u(" "+a(b.value.name),1)]),t("p",null,[ne,u(" "+a(`${$.value.evidence_type_id==4?d(R)(b.value.total_entries):b.value.total_entries}`),1)]),m(h,{onClick:i[1]||(i[1]=e=>L($.value.id,b.value.employer_id)),severity:"help",size:"small",label:"VER PARTICIPACIONES"})])]),_:1},8,["visible"]),m(c,{close:w.value=null,class:"p-2",header:"Cargar Evidencia",style:{width:"30rem"},modal:"",visible:S.value,"onUpdate:visible":i[8]||(i[8]=e=>S.value=e)},{footer:f(()=>[t("div",he,[p.value.evidence_type_id==1?(l(),P(h,{key:0,class:"m-0",severity:w.value?"warning":"help",onClick:i[6]||(i[6]=e=>x.value.click()),style:{width:"100%"},label:w.value?"Cambiar archivo":"Subir Archivo"},null,8,["severity","label"])):v("",!0),m(h,{severity:"help",class:"m-0",style:{width:"100%"},label:"Guardar",onClick:i[7]||(i[7]=e=>W(y.value,p.value.id,p.value.evidence_type_id))})])]),default:f(()=>[t("div",null,[t("p",de,a(p.value.name),1),t("span",null,[ce,u(" "+a(d(Y)(new Date,"dd-MMMM-yyyy",{locale:d(ee)})),1)]),ue,t("p",pe,a(p.value.instructions),1),p.value.evidence_type_id==1&&w.value?(l(),s("img",{key:0,class:"",style:{width:"100%"},src:w.value,alt:""},null,8,_e)):v("",!0),p.value.evidence_type_id==4?(l(),s("div",ve,[m(j,{modelValue:y.value,"onUpdate:modelValue":i[3]||(i[3]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),p.value.contest_winner_type_id==1&&p.value.evidence_type_id==2?(l(),s("div",me,[m(U,{modelValue:y.value,"onUpdate:modelValue":i[4]||(i[4]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),p.value.evidence_type_id==3?(l(),s("div",ye,[m(U,{modelValue:y.value,"onUpdate:modelValue":i[5]||(i[5]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),t("input",{onChange:T,ref_key:"inputFile",ref:x,style:{display:"none"},type:"file",accept:"image/*"},null,544)])]),_:1},8,["close","visible"]),m(c,{class:"p-2",header:"Listado de evidencias",style:{width:"30rem","background-color":"#fff"},modal:"",visible:g.value.showMyEvidenceDialog,"onUpdate:visible":i[9]||(i[9]=e=>g.value.showMyEvidenceDialog=e)},{default:f(()=>[t("div",fe,[be,t("ol",ge,[(l(!0),s(E,null,M(F.value,e=>(l(),s("li",we,[t("p",xe,[t("b",null,a(d(A)(e.timestamp)),1)]),e.evidence_type_id==3&&(e.evidence_entry.startsWith("http://")||e.evidence_entry.startsWith("https://"))?(l(),s("a",{key:0,style:{color:"var(--primary-color)"},href:e.evidence_entry},a(e.evidence_entry),9,ke)):e.evidence_type_id==3||e.evidence_type_id==2?(l(),s("p",Ce,a(e.evidence_entry),1)):v("",!0),e.evidence_type_id==4?(l(),s("span",De,a(d(R)(e.evidence_entry)),1)):v("",!0),e.evidence_type_id==1?(l(),s("img",{key:3,style:{width:"100%","border-radius":".5rem"},src:`${d(k)}${e.evidence_entry}`,alt:""},null,8,$e)):v("",!0)]))),256))])])]),_:1},8,["visible"]),Se,t("div",Ue,[Ie,t("div",Ee,[(l(!0),s(E,null,M(V.value.filter(e=>!e.vigent&&e.started),e=>(l(),s("div",Me,[t("div",Pe,[t("div",Ve,[t("img",{class:"p-0",style:{width:"30%","aspect-ratio":"3 / 3","border-radius":".3rem","object-fit":"cover"},src:`${d(k)}/read-product-image/600/contest-${e.id}`,alt:""},null,8,Fe),t("div",null,[t("p",Ne,a(e.name),1),t("p",je,a(e.description),1),Ae,t("p",Re,[ze,u(" "+a(e.is_site_participation?"SEDES":"COLABORADORES")+" ",1),Be]),t("p",Le,[Oe,u(" "+a(d(A)(e.start_date))+" ",1),Te,u(),qe,u(" "+a(d(A)(e.end_date)),1)]),e.rbq.filter(o=>o.name).length>0?(l(),s("p",We,[t("b",null,a(e.rbq.filter(o=>o.name).length)+" "+a(e.is_site_participation?"sede":"persona")+" participando",1)])):v("",!0),t("p",Ge,a(G(e.end_date)),1),t("div",He,[e.entry_exists?(l(),P(h,{key:1,onClick:o=>B(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Subir evidencia")]),_:2},1032,["onClick"])):(l(),P(h,{key:0,onClick:o=>B(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Participar")]),_:2},1032,["onClick"])),e.entry_exists?(l(),P(h,{key:2,onClick:o=>L(e.id,d(N).rawUserData.id),severity:"help",style:{border:"2px solid var(--primary-color)"}},{default:f(()=>[u("Mis evidencias")]),_:2},1032,["onClick"])):v("",!0)])])]),t("div",Je,[Ze,t("div",Ke,[(l(!0),s(E,null,M(e.rbq.filter(o=>o.total_entries),(o,st)=>(l(),s("div",Qe,[e.contest_winner_type_id==2?(l(),s("p",Xe,a(d(R)(o.total_entries)),1)):(l(),s("p",Ye,a(o.total_entries),1)),t("img",{onClick:at=>q(o,e),class:"min-user-img",style:{width:"100%","max-width":"5rem","background-color":"#fff","aspect-ratio":"1 / 1","border-radius":"50%","object-fit":"cover"},src:e.is_site_participation?`${d(k)}/read-product-image/600/site-${o.site_id}`:`${d(k)}/read-product-image/300/employer-${o.dni}`,alt:""},null,8,et),t("div",{class:"py-2",style:O([`height:${o.total_entries/e.max_entries*10}rem; width:${100/e.rbq.length}%`,{"min-width":"3rem","max-width":"5rem","background-color":"var(--primary-color)",overflow:"hidden","border-radius":"3rem 3rem 0 0",position:"relative"}])},[o.total_entries==e.max_entries?(l(),s("img",tt)):v("",!0),it],4)]))),256))])])])]))),256))])])])}}},_t=J(lt,[["__scopeId","data-v-b66fa0e8"]]);export{_t as default};
========
import{_ as H}from"./fire-bbb69f2b.js";import{c as C}from"./contestService-d8de68f9.js";import{_ as J,r as _,l as Z,i as K,a as I,o as l,c as s,g as m,w as f,b as t,F as E,d as M,k as O,u as d,U as k,j as u,t as a,e as P,f as v,p as Q,h as X}from"./index-acdf86d7.js";import{f as A}from"./formatDate-262296cf.js";import{f as R}from"./formatoPesos-2a38d2e7.js";import{f as Y}from"./format-8cf56335.js";import{e as ee}from"./es-f6133d36.js";const r=D=>(Q("data-v-800c99a0"),D=D(),X(),D),te={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"50rem"}},ie={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center"}},le=r(()=>t("img",{style:{width:"2rem","aspect-ratio":"1 / 1","border-radius":"50%",border:"3px solid yellow"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s",alt:""},null,-1)),se={class:"py-2",style:{"overflow-x":"auto",display:"flex","flex-direction":"column",width:"20rem"}},ae=["src"],oe={style:{}},re=r(()=>t("b",null,"Nombre:",-1)),ne=r(()=>t("b",null,"Participaciones:",-1)),de={style:{"font-weight":"bold"}},ce=r(()=>t("span",{style:{"font-weight":"bold"}},"Fecha:",-1)),ue=r(()=>t("p",{class:"p-0 m-0 mt-3"},[t("b",null,"Instrucciones:")],-1)),pe={class:"px-0 mx-0"},_e=["src"],ve={key:1},me={key:2},ye={key:3},he={class:"py-3",style:{display:"flex",width:"100%","justify-content":"space-between",gap:"1rem"}},fe={style:{height:"60vh"}},ge=r(()=>t("b",null,"MIS EVIDENCIAS ",-1)),be={class:"p-3",style:{display:"flex","flex-direction":"column",gap:".5rem"}},we={style:{},class:""},xe={class:"p-0 m-0"},ke=["href"],Ce={key:1,style:{color:"var(--primary-color)"}},De={key:2,style:{color:"var(--primary-color)"}},$e=["src"],Se=r(()=>t("div",{style:{position:"fixed",left:"-2rem","z-index":"-1",filter:"blur(10px)",top:"0"},class:"col-12"},[t("img",{style:{width:"120%",left:"0rem",height:"100vh","object-fit":"cover"},src:"https://backend.salchimonster.com/read-product-image/600/site-8",alt:""})],-1)),Ue={class:"container mx-auto p-2",style:{"max-width":"700px","z-index":"99"}},Ie=r(()=>t("p",{class:"text-white text-4xl text-center",style:{"font-weight":"bold"}}," CONCURSOS FINALIZADOS",-1)),Ee={class:"container_contests",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Me={class:"container_contest_item p-2",style:{display:"flex","flex-direction":"column",gap:"1rem","background-color":"#00000090",border:"3px solid var(--primary-color)","border-radius":"0.5rem"}},Pe={class:"col-12 p-0",style:{display:"flex","flex-direction":"column"}},Ve={class:"gridd",style:{display:"flex",gap:"1rem"}},Fe=["src"],Ne={class:"m-0 text-2xl",style:{"font-weight":"bold",color:"#fff","text-transform":"capitalize"}},je={class:"m-0",style:{color:"#fff"}},Ae=r(()=>t("img",{src:"",alt:""},null,-1)),Re={class:"text-white"},ze=r(()=>t("span",{style:{color:"var(--primary-color)","font-weight":"bold"}},[t("b",null,"Participaron"),u(":")],-1)),Be=r(()=>t("br",null,null,-1)),Le={class:"text-white"},Oe=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Desde"),u(":")],-1)),Te=r(()=>t("br",null,null,-1)),qe=r(()=>t("span",{style:{color:"var(--primary-color)"}},[t("b",null,"Hasta"),u(":")],-1)),We={key:0,class:"text-white text-xl py-0 my-0"},Ge={class:"text-2xl",style:{color:"var(--primary-color)","font-weight":"bold"}},He={style:{display:"flex",gap:"1rem"}},Je={style:{"justify-content":"center","overflow-x":"auto",width:"100%",gap:"0rem",display:"flex","flex-direction":"column"},class:"px-0 overflow pb-1",c:""},Ze=r(()=>t("div",{style:{display:"flex","justify-content":"end","align-items":"center"}},null,-1)),Ke={class:"py-2",style:{display:"flex",gap:"1rem","overflow-x":"auto",width:"100%"}},Qe={style:{display:"flex","flex-direction":"column",gap:"1rem","justify-content":"end","align-items":"center",width:"100%",position:"relative"}},Xe={key:0,class:"text-white pt-4 my-0"},Ye={key:1,class:"text-white pt-4 my-0"},et=["onClick","src"],tt={key:0,style:{width:"100%",position:"absolute","z-index":"10",bottom:"0"},src:H,alt:""},it=r(()=>t("div",{style:{display:"flex","flex-direction":"column",gap:".5rem","justify-content":"end",height:"100%"}},null,-1)),lt={__name:"CompletedConcursos",setup(D){const b=_({showMyEvidenceDialog:!1,showParticipantDetail:!1}),g=_({}),$=_({}),V=_([]),z=_(!1),F=_([]),w=_(null),T=()=>{const n=x.value.files[0];n&&(w.value=URL.createObjectURL(n))},q=(n,i)=>{g.value=n,$.value=i,b.value.showParticipantDetail=!0},y=_(""),N=Z(),S=_(!1),x=_(null),B=n=>{x.value=null,S.value=!0,p.value=n},p=_({}),W=async(n,i,c)=>{if(n===null){alert("debe cargar una evidaencia");return}if(c==3&&!n.includes(".")){alert("debe ser una URL valida");return}const h={evidence_type_id:c,evidence_entry:`${n}`||"0",contest_id:i},j={participant_id:N.rawUserData.id,contest_id:i},U=await C.sendEvidence({evidence:h,Contest_entry:j});if(c===1){if(!x.value.files.length){alert("Por favor, selecciona una imagen.");return}const e=x.value.files[0];await C.sendContestImage(N.rawUserData.id,i,U,e)}S.value=!1,y.value="",V.value=await C.getAllContest()},L=async(n,i)=>{F.value=[],b.value.showMyEvidenceDialog=!0,F.value=await C.getParticipationByUserId(n,i)},G=n=>{const i=new Date(n).getDate()-new Date().getDate();let c="";switch(i){case 0:c="Finaliza hoy";break;case 1:c="Finaliza Manana";break;case 2:c="Finaliza pasado Manana";break;default:c=`Finalizo hace   ${Math.abs(i)} ${Math.abs(i)>1?"dias":"dia"}`;break}return c};return K(async()=>{V.value=await C.getAllContest()}),(n,i)=>{const c=I("Dialog"),h=I("Button"),j=I("inputNumber"),U=I("inputText");return l(),s("div",null,[m(c,{class:"p-2",style:{"max-width":"100vw"},modal:"",visible:z.value,"onUpdate:visible":i[0]||(i[0]=e=>z.value=e)},{default:f(()=>[t("div",te,[(l(),s(E,null,M([1,2,3,4,5,6,7,8,9,0,4,5,6,7],(e,o)=>t("div",ie,[le,t("div",{class:"py-2",style:O([`height:${(12-o+1)/2}rem`,{width:"2rem","background-color":"var(--primary-color)","border-radius":"3rem 3rem 0 0"}])},null,4)])),64))])]),_:1},8,["visible"]),m(c,{class:"p-2",header:"Informacion de participante",style:{"max-width":"min-content"},modal:"",visible:b.value.showParticipantDetail,"onUpdate:visible":i[2]||(i[2]=e=>b.value.showParticipantDetail=e)},{default:f(()=>[t("div",se,[t("img",{style:{width:"100%","border-radius":".5rem","aspect-ratio":"1 / 1","object-fit":"cover"},src:$.value.is_site_participation?`${d(k)}/read-product-image/600/site-${g.value.site_id}`:`${d(k)}/read-product-image/600/employer-${g.value.dni}`,alt:""},null,8,ae),t("p",oe,[re,u(" "+a(g.value.name),1)]),t("p",null,[ne,u(" "+a(`${$.value.evidence_type_id==4?d(R)(g.value.total_entries):g.value.total_entries}`),1)]),m(h,{onClick:i[1]||(i[1]=e=>L($.value.id,g.value.employer_id)),severity:"help",size:"small",label:"VER PARTICIPACIONES"})])]),_:1},8,["visible"]),m(c,{close:w.value=null,class:"p-2",header:"Cargar Evidencia",style:{width:"30rem"},modal:"",visible:S.value,"onUpdate:visible":i[8]||(i[8]=e=>S.value=e)},{footer:f(()=>[t("div",he,[p.value.evidence_type_id==1?(l(),P(h,{key:0,class:"m-0",severity:w.value?"warning":"help",onClick:i[6]||(i[6]=e=>x.value.click()),style:{width:"100%"},label:w.value?"Cambiar archivo":"Subir Archivo"},null,8,["severity","label"])):v("",!0),m(h,{severity:"help",class:"m-0",style:{width:"100%"},label:"Guardar",onClick:i[7]||(i[7]=e=>W(y.value,p.value.id,p.value.evidence_type_id))})])]),default:f(()=>[t("div",null,[t("p",de,a(p.value.name),1),t("span",null,[ce,u(" "+a(d(Y)(new Date,"dd-MMMM-yyyy",{locale:d(ee)})),1)]),ue,t("p",pe,a(p.value.instructions),1),p.value.evidence_type_id==1&&w.value?(l(),s("img",{key:0,class:"",style:{width:"100%"},src:w.value,alt:""},null,8,_e)):v("",!0),p.value.evidence_type_id==4?(l(),s("div",ve,[m(j,{modelValue:y.value,"onUpdate:modelValue":i[3]||(i[3]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),p.value.contest_winner_type_id==1&&p.value.evidence_type_id==2?(l(),s("div",me,[m(U,{modelValue:y.value,"onUpdate:modelValue":i[4]||(i[4]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),p.value.evidence_type_id==3?(l(),s("div",ye,[m(U,{modelValue:y.value,"onUpdate:modelValue":i[5]||(i[5]=e=>y.value=e),style:{width:"100%"}},null,8,["modelValue"])])):v("",!0),t("input",{onChange:T,ref_key:"inputFile",ref:x,style:{display:"none"},type:"file",accept:"image/*"},null,544)])]),_:1},8,["close","visible"]),m(c,{class:"p-2",header:"Listado de evidencias",style:{width:"30rem","background-color":"#fff"},modal:"",visible:b.value.showMyEvidenceDialog,"onUpdate:visible":i[9]||(i[9]=e=>b.value.showMyEvidenceDialog=e)},{default:f(()=>[t("div",fe,[ge,t("ol",be,[(l(!0),s(E,null,M(F.value,e=>(l(),s("li",we,[t("p",xe,[t("b",null,a(d(A)(e.timestamp)),1)]),e.evidence_type_id==3&&(e.evidence_entry.startsWith("http://")||e.evidence_entry.startsWith("https://"))?(l(),s("a",{key:0,style:{color:"var(--primary-color)"},href:e.evidence_entry},a(e.evidence_entry),9,ke)):e.evidence_type_id==3||e.evidence_type_id==2?(l(),s("p",Ce,a(e.evidence_entry),1)):v("",!0),e.evidence_type_id==4?(l(),s("span",De,a(d(R)(e.evidence_entry)),1)):v("",!0),e.evidence_type_id==1?(l(),s("img",{key:3,style:{width:"100%","border-radius":".5rem"},src:`${d(k)}${e.evidence_entry}`,alt:""},null,8,$e)):v("",!0)]))),256))])])]),_:1},8,["visible"]),Se,t("div",Ue,[Ie,t("div",Ee,[(l(!0),s(E,null,M(V.value.filter(e=>!e.vigent&&e.started),e=>(l(),s("div",Me,[t("div",Pe,[t("div",Ve,[t("img",{class:"p-0",style:{width:"30%","aspect-ratio":"3 / 3","border-radius":".3rem","object-fit":"cover"},src:`${d(k)}/read-product-image/600/contest-${e.id}`,alt:""},null,8,Fe),t("div",null,[t("p",Ne,a(e.name),1),t("p",je,a(e.description),1),Ae,t("p",Re,[ze,u(" "+a(e.is_site_participation?"SEDES":"COLABORADORES")+" ",1),Be]),t("p",Le,[Oe,u(" "+a(d(A)(e.start_date))+" ",1),Te,u(),qe,u(" "+a(d(A)(e.end_date)),1)]),e.rbq.filter(o=>o.name).length>0?(l(),s("p",We,[t("b",null,a(e.rbq.filter(o=>o.name).length)+" "+a(e.is_site_participation?"sede":"persona")+" participando",1)])):v("",!0),t("p",Ge,a(G(e.end_date)),1),t("div",He,[e.entry_exists?(l(),P(h,{key:1,onClick:o=>B(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Subir evidencia")]),_:2},1032,["onClick"])):(l(),P(h,{key:0,onClick:o=>B(e),severity:"help",style:{"background-color":"var(--primary-color)"}},{default:f(()=>[u("Participar")]),_:2},1032,["onClick"])),e.entry_exists?(l(),P(h,{key:2,onClick:o=>L(e.id,d(N).rawUserData.id),severity:"help",style:{border:"2px solid var(--primary-color)"}},{default:f(()=>[u("Mis evidencias")]),_:2},1032,["onClick"])):v("",!0)])])]),t("div",Je,[Ze,t("div",Ke,[(l(!0),s(E,null,M(e.rbq.filter(o=>o.total_entries),(o,st)=>(l(),s("div",Qe,[e.contest_winner_type_id==2?(l(),s("p",Xe,a(d(R)(o.total_entries)),1)):(l(),s("p",Ye,a(o.total_entries),1)),t("img",{onClick:at=>q(o,e),class:"min-user-img",style:{width:"100%","max-width":"5rem","background-color":"#fff","aspect-ratio":"1 / 1","border-radius":"50%","object-fit":"cover"},src:e.is_site_participation?`${d(k)}/read-product-image/600/site-${o.site_id}`:`${d(k)}/read-product-image/300/employer-${o.dni}`,alt:""},null,8,et),t("div",{class:"py-2",style:O([`height:${o.total_entries/e.max_entries*10}rem; width:${100/e.rbq.length}%`,{"min-width":"3rem","max-width":"5rem","background-color":"var(--primary-color)",overflow:"hidden","border-radius":"3rem 3rem 0 0",position:"relative"}])},[o.total_entries==e.max_entries?(l(),s("img",tt)):v("",!0),it],4)]))),256))])])])]))),256))])])])}}},_t=J(lt,[["__scopeId","data-v-800c99a0"]]);export{_t as default};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/CompletedConcursos-cedc99d9.js
