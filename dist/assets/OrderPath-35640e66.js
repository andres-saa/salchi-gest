import{P as h}from"./pathService-205e178e.js";import{_ as u,a as r,o as s,c,b as t,F as m,d as v,g as o,w as b,n as f,u as x,p as g,h as w}from"./index-82df3ad8.js";const k=e=>(g("data-v-95ceeae8"),e=e(),w(),e),y={class:"container"},B={class:"nav-bar shadow-1"},I=k(()=>t("i",{class:"ml-2 fa-solid text-xl fa-arrow-right"},null,-1)),P={__name:"OrderPath",setup(e){const n=h.isActiveRoute,i=[{label:"Alistar",icon:"pi pi-chart-bar",path:"alistar"},{label:"Autorizar",icon:"pi pi-chart-bar",path:"autorizar"},{label:"Transportar",icon:"pi pi-chart-bar",path:"transport"},{label:"Recibir Orden",icon:"pi pi-chart-bar",path:"recibida-en-sede"},{label:"Completadas",icon:"pi pi-chart-bar",path:"completed"},{label:"stock en planta",icon:"pi pi-cog",path:"purchase-order-settings"}];return(A,C)=>{const l=r("Button"),p=r("router-link"),_=r("router-view");return s(),c("div",y,[t("nav",B,[t("ul",null,[(s(),c(m,null,v(i,(a,d)=>t("li",{class:"nav-bar--item",key:d,style:{display:"flex","align-items":"center"}},[o(p,{to:`/purchase-order/recorrido/${a.path}/`},{default:b(()=>[o(l,{icon:a.icon,text:"",class:f([x(n)(a.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:a.label},null,8,["icon","class","label"])]),_:2},1032,["to"]),I])),64))])]),o(_)])}}},z=u(P,[["__scopeId","data-v-95ceeae8"]]);export{z as default};