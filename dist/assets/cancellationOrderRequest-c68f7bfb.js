import{P as d}from"./pathService-ef5705aa.js";import{u}from"./ventas-3955f29a.js";import{_ as v,g as m,e as a,o,c as r,a as t,F as h,r as b,b as s,f,d as k,u as R}from"./index-7dd807de.js";const x={class:"container"},y={class:"nav-bar shadow-1"},B={__name:"cancellationOrderRequest",setup(q){u();const n=d.isActiveRoute;m([]);const c=[{label:"Por revisar",icon:"pi pi-history",path:"revisar"},{label:"Revisadas aprobadas",icon:"pi pi-check",path:"aprobadas"},{label:"revisadas rechazadas",icon:"pi pi-times",path:"rechazadas"},{label:"Reportes",icon:"pi pi-book",path:"reports"}];return(w,g)=>{const i=a("Button"),l=a("router-link"),p=a("router-view");return o(),r("div",x,[t("nav",y,[t("ul",null,[(o(),r(h,null,b(c,(e,_)=>t("li",{class:"nav-bar--item",key:_},[s(l,{to:`/cancellation-requests/${e.path}/`},{default:f(()=>[s(i,{icon:e.icon,text:"",class:k([R(n)(e.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:e.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64))])]),s(p)])}}},P=v(B,[["__scopeId","data-v-103d3db6"]]);export{P as default};
