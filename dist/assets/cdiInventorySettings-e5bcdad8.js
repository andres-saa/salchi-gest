<<<<<<<< HEAD:dist/assets/cdiInventorySettings-6bb77c88.js
import{_ as j}from"./dailyMan-302b173d.js";import{c as _}from"./cdiInventoryService-511f9f0b.js";import{_ as T,r as i,v as z,h as U,a as p,o as u,c as v,d as s,w as m,b as n,F as k,e as E,s as F,u as R,m as C,t as A,n as L,f as M,i as q,p as H,g as J}from"./index-a1098956.js";import"./sass.default-a5b7a582.js";const K=c=>(H("data-v-0756db3b"),c=c(),J(),c),O={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},P=K(()=>n("span",null,"Nombre del grupo",-1)),Q={style:{display:"flex","justify-content":"end"}},W={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},X={style:{display:"flex","justify-content":"end"}},Y={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},Z={class:"nav-bar p-2",style:{width:"100%","max-width":"1024px"}},ee={class:"p-2",style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},te={class:"p-0",style:{display:"flex",gap:"1rem"}},se={key:0,style:{height:"60vh","object-fit":"contain",width:"100%"},src:j,alt:""},le={__name:"cdiInventorySettings",setup(c){const g=i([]),x=z(),r=i(!1),d=i(!1),y=i({}),b=async()=>{g.value=await _.getCdiInventoryGroups()},I=l=>{y.value=l,d.value=!0},S=async l=>{await _.disableCdiGrupInventory(l),d.value=!1,b()},o=i(!1),f=i({name:null}),B=(l,t)=>{q.push({name:"cdi-inventory-settings-sesion",params:{sesion:l,id:t}})},V=async l=>{await _.InsertCdiGrupInventory(l),r.value=!1,b()},w=l=>x.params.sesion==l;return U(async()=>{await b()}),(l,t)=>{const $=p("InputText"),a=p("Button"),h=p("Dialog"),G=p("router-view");return u(),v(k,null,[s(h,{class:"mx-2",header:"Nuevo grupo de items",style:{width:"30rem"},modal:"",visible:r.value,"onUpdate:visible":t[3]||(t[3]=e=>r.value=e)},{footer:m(()=>[n("div",Q,[s(a,{onClick:t[1]||(t[1]=e=>r.value=!1),severity:"danger",label:"Cerrar"}),s(a,{onClick:t[2]||(t[2]=e=>V(f.value)),severity:"help",label:"Guardar"})])]),default:m(()=>[n("div",O,[P,s($,{modelValue:f.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value.name=e)},null,8,["modelValue"])])]),_:1},8,["visible"]),s(h,{class:"mx-2",header:"Borrar grupo",style:{width:"30rem"},modal:"",visible:d.value,"onUpdate:visible":t[6]||(t[6]=e=>d.value=e)},{footer:m(()=>[n("div",X,[s(a,{onClick:t[4]||(t[4]=e=>d.value=!1),severity:"help",label:"No"}),s(a,{onClick:t[5]||(t[5]=e=>S(y.value.id)),severity:"danger",label:"Borrar"})])]),default:m(()=>{var e;return[n("div",W,[n("span",null,"Esta seguro de eliminar el grupo "+A((e=y.value)==null?void 0:e.name)+" ?",1)])]}),_:1},8,["visible"]),n("div",Y,[n("nav",Z,[n("ul",ee,[(u(!0),v(k,null,E(g.value,(e,D)=>(u(),v("li",{style:{position:"relative",display:"flex","justify-content":"center","align-items":"center","flex-basis":"200"},class:"p-0",key:D},[s(a,{style:{},onClick:N=>B(e.name,e.id),disabled:o.value,class:L([w(e.name)?"selected":"","nav-bar--button shadow-2"]),label:e.name},null,8,["onClick","disabled","class","label"]),o.value&&!w(e.name)?(u(),M(a,{key:0,onClick:N=>I(e),size:"small",class:"m-0 shadow-2",severity:"danger",icon:"pi pi-times ",style:{position:"absolute",width:"1rem",height:"1rem",left:"-.5rem",padding:"0.7rem","border-radius":"50%"}},null,8,["onClick"])):C("",!0)]))),128)),n("li",te,[s(a,{class:"nav-bar--button-black m-0 shadow-2",onClick:t[7]||(t[7]=e=>r.value=!0),icon:"pi pi-plus"}),s(a,{onClick:t[8]||(t[8]=e=>o.value=!o.value),style:F(o.value?"background-color: #22c55e;":"background-color: red;"),class:"nav-bar--button-black m-0 shadow-2",icon:o.value?"pi pi-check":"pi pi-trash"},null,8,["style","icon"])])])]),R(x).path=="/cdi-inventory/cdi-inventory-settings/"?(u(),v("img",se)):C("",!0)]),s(G)],64)}}},re=T(le,[["__scopeId","data-v-0756db3b"]]);export{re as default};
========
import{_ as j}from"./dailyMan-302b173d.js";import{c as _}from"./cdiInventoryService-451cf845.js";import{_ as T,r as i,v as z,h as U,a as p,o as u,c as v,d as s,w as m,b as n,F as k,e as E,s as F,u as R,m as C,t as A,n as L,f as M,i as q,p as H,g as J}from"./index-1a945cfc.js";import"./sass.default-a5b7a582.js";const K=c=>(H("data-v-0756db3b"),c=c(),J(),c),O={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},P=K(()=>n("span",null,"Nombre del grupo",-1)),Q={style:{display:"flex","justify-content":"end"}},W={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},X={style:{display:"flex","justify-content":"end"}},Y={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},Z={class:"nav-bar p-2",style:{width:"100%","max-width":"1024px"}},ee={class:"p-2",style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},te={class:"p-0",style:{display:"flex",gap:"1rem"}},se={key:0,style:{height:"60vh","object-fit":"contain",width:"100%"},src:j,alt:""},le={__name:"cdiInventorySettings",setup(c){const g=i([]),x=z(),r=i(!1),d=i(!1),y=i({}),b=async()=>{g.value=await _.getCdiInventoryGroups()},I=l=>{y.value=l,d.value=!0},S=async l=>{await _.disableCdiGrupInventory(l),d.value=!1,b()},o=i(!1),f=i({name:null}),B=(l,t)=>{q.push({name:"cdi-inventory-settings-sesion",params:{sesion:l,id:t}})},V=async l=>{await _.InsertCdiGrupInventory(l),r.value=!1,b()},w=l=>x.params.sesion==l;return U(async()=>{await b()}),(l,t)=>{const $=p("InputText"),a=p("Button"),h=p("Dialog"),G=p("router-view");return u(),v(k,null,[s(h,{class:"mx-2",header:"Nuevo grupo de items",style:{width:"30rem"},modal:"",visible:r.value,"onUpdate:visible":t[3]||(t[3]=e=>r.value=e)},{footer:m(()=>[n("div",Q,[s(a,{onClick:t[1]||(t[1]=e=>r.value=!1),severity:"danger",label:"Cerrar"}),s(a,{onClick:t[2]||(t[2]=e=>V(f.value)),severity:"help",label:"Guardar"})])]),default:m(()=>[n("div",O,[P,s($,{modelValue:f.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value.name=e)},null,8,["modelValue"])])]),_:1},8,["visible"]),s(h,{class:"mx-2",header:"Borrar grupo",style:{width:"30rem"},modal:"",visible:d.value,"onUpdate:visible":t[6]||(t[6]=e=>d.value=e)},{footer:m(()=>[n("div",X,[s(a,{onClick:t[4]||(t[4]=e=>d.value=!1),severity:"help",label:"No"}),s(a,{onClick:t[5]||(t[5]=e=>S(y.value.id)),severity:"danger",label:"Borrar"})])]),default:m(()=>{var e;return[n("div",W,[n("span",null,"Esta seguro de eliminar el grupo "+A((e=y.value)==null?void 0:e.name)+" ?",1)])]}),_:1},8,["visible"]),n("div",Y,[n("nav",Z,[n("ul",ee,[(u(!0),v(k,null,E(g.value,(e,D)=>(u(),v("li",{style:{position:"relative",display:"flex","justify-content":"center","align-items":"center","flex-basis":"200"},class:"p-0",key:D},[s(a,{style:{},onClick:N=>B(e.name,e.id),disabled:o.value,class:L([w(e.name)?"selected":"","nav-bar--button shadow-2"]),label:e.name},null,8,["onClick","disabled","class","label"]),o.value&&!w(e.name)?(u(),M(a,{key:0,onClick:N=>I(e),size:"small",class:"m-0 shadow-2",severity:"danger",icon:"pi pi-times ",style:{position:"absolute",width:"1rem",height:"1rem",left:"-.5rem",padding:"0.7rem","border-radius":"50%"}},null,8,["onClick"])):C("",!0)]))),128)),n("li",te,[s(a,{class:"nav-bar--button-black m-0 shadow-2",onClick:t[7]||(t[7]=e=>r.value=!0),icon:"pi pi-plus"}),s(a,{onClick:t[8]||(t[8]=e=>o.value=!o.value),style:F(o.value?"background-color: #22c55e;":"background-color: red;"),class:"nav-bar--button-black m-0 shadow-2",icon:o.value?"pi pi-check":"pi pi-trash"},null,8,["style","icon"])])])]),R(x).path=="/cdi-inventory/cdi-inventory-settings/"?(u(),v("img",se)):C("",!0)]),s(G)],64)}}},re=T(le,[["__scopeId","data-v-0756db3b"]]);export{re as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/cdiInventorySettings-e5bcdad8.js
