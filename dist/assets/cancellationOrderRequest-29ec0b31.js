import{P as d}from"./pathService-f173b917.js";import{u}from"./ventas-ea628876.js";import{_ as v,r as m,a,o,c as r,b as t,F as h,d as b,g as s,w as f,n as k,u as x}from"./index-ebbd7fb7.js";const R={class:"container"},w={class:"nav-bar shadow-1"},y={__name:"cancellationOrderRequest",setup(B){u();const c=d.isActiveRoute;m([]);const n=[{label:"Por revisar",icon:"pi pi-history",path:"revisar"},{label:"Revisadas aprobadas",icon:"pi pi-check",path:"aprobadas"},{label:"revisadas rechazadas",icon:"pi pi-times",path:"rechazadas"}];return(q,g)=>{const i=a("Button"),l=a("router-link"),_=a("router-view");return o(),r("div",R,[t("nav",w,[t("ul",null,[(o(),r(h,null,b(n,(e,p)=>t("li",{class:"nav-bar--item",key:p},[s(l,{to:`/cancellation-requests/${e.path}/`},{default:f(()=>[s(i,{icon:e.icon,text:"",class:k([x(c)(e.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:e.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64))])]),s(_)])}}},P=v(y,[["__scopeId","data-v-5dc781cc"]]);export{P as default};
