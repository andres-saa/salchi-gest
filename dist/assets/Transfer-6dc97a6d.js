import{P as m}from"./pathService-fcbb0af3.js";import{_ as u,h as v,g as t,o as n,c as r,a as e,F as f,r as h,f as o,e as b,b as x,u as k,p as C,m as g}from"./index-dffc30d1.js";const w=a=>(C("data-v-88639c0b"),a=a(),g(),a),y={class:"container"},B={class:"nav-bar shadow-1"},I={class:"container"},P=w(()=>e("h6",{class:"text-center"},"Los pedidos de Distrimonster seguiran' apareciendo hasta 15 dias en pendiente de validacion, Para las tiendas se debe validar el mismo dia' , luego no podra' hacerlo",-1)),S={__name:"Transfer",setup(a){const i=m.isActiveRoute;v([]);const c=[{label:"Por Confirmar",icon:"pi pi-history",path:"transfer-sesion"},{label:"Confirmadas",icon:"pi pi-check",path:"transfer-sesion-confirmed"},{label:"Cliente no confirma",icon:"pi pi-times",path:"transfer-sesion-no-confirmed"}];return(T,A)=>{const l=t("Button"),_=t("router-link"),p=t("router-view");return n(),r("div",y,[e("nav",B,[e("ul",null,[(n(),r(f,null,h(c,(s,d)=>e("li",{class:"nav-bar--item",key:d},[o(_,{to:`/transfer/${s.path}/`},{default:b(()=>[o(l,{icon:s.icon,text:"",class:x([k(i)(`/transfer/${s.path}/`)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:s.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64))])]),e("div",I,[P,o(p)])])}}},N=u(S,[["__scopeId","data-v-88639c0b"]]);export{N as default};
