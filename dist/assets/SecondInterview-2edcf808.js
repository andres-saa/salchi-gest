import{_ as D,h as r,s as F,g as s,o as d,c as _,b as o,f as c,a as e,F as f,r as V,x as M,t as l,q as y,k as T,d as q,u as A,p as H,m as P}from"./index-03a193b1.js";import{P as j}from"./pathService-47ece7c3.js";const a=n=>(H("data-v-283a5ed7"),n=n(),P(),n),E={style:{display:"flex","flex-direction":"column"}},O={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},z={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},L={class:"m-0"},R=a(()=>e("div",null,null,-1)),U={class:"m-0"},$={key:0},G=a(()=>e("b",null,"Notas",-1)),J=a(()=>e("br",null,null,-1)),K=a(()=>e("div",{style:{display:"flex",gap:"1rem"}},null,-1)),Q={style:{"max-width":"1280px",margin:"auto"}},W=a(()=>e("div",{class:"py-4"},[e("h4",{class:"px-2"},[e("i",{class:"fa-regular fa-bars-progress"}),y(),e("b",null,"Filtro 2 Entrevista con el lider que solicito la requisición")]),e("h4",{class:"px-2 py-0 m-0"},[e("b",null,"Vacante: cajero")])],-1)),X={class:"container p-0"},Y={class:"nav-bar shadow-1 m-0 p-0"},Z={__name:"SecondInterview",setup(n){const x=j.isActiveRoute,g=[{label:"Pendientes por revisar",icon:"fa-regular fa-file-alt",path:"accepted"},{label:"Descartados",icon:"fa-regular fa-filter",path:"rejected"}],p=r(!1),b=r(null),w=()=>{b.value={global:{value:null,matchMode:M.CONTAINS}}},I=r([]);return F(()=>{w()}),(ee,m)=>{const S=s("Timeline"),k=s("Dialog"),N=s("Button"),B=s("router-link"),C=s("router-view");return d(),_(f,null,[o(k,{class:"mx-2",visible:p.value,"onUpdate:visible":m[0]||(m[0]=t=>p.value=t),modal:"",header:"Historial mi solicitud",style:{width:"30rem"}},{default:c(()=>[o(S,{value:I.value},{opposite:c(t=>{var i,u,v,h;return[e("div",E,[e("p",O,l((i=t.item.time)==null?void 0:i.split(" ")[0]),1),e("p",z,l((h=(v=(u=t.item.time)==null?void 0:u.split(" "))==null?void 0:v.slice(2,3))==null?void 0:h[0]),1)])]}),content:c(t=>[e("p",L,[e("b",null,l(t.item.lap),1)]),R,e("p",U,l(t.item.responsible),1),t.item.notes?(d(),_("p",$,[G,y(" "+l(t.item.notes),1)])):T("",!0),J,K]),_:1},8,["value"])]),_:1},8,["visible"]),e("div",Q,[W,e("div",X,[e("nav",Y,[e("ul",null,[(d(),_(f,null,V(g,(t,i)=>e("li",{class:"nav-bar--item",key:i,style:{display:"flex"}},[o(B,{to:`/hiring-hr-follow/second-interview/${t.path}/132`},{default:c(()=>[o(N,{icon:t.icon,text:"",class:q([A(x)(t.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:t.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64))])])]),o(C,{class:"p-0 m-0"})])],64)}}},oe=D(Z,[["__scopeId","data-v-283a5ed7"]]);export{oe as default};
