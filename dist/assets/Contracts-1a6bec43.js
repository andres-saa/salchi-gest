import{P as u}from"./pathService-e6b543e0.js";import{_ as d,a as o,o as n,c,b as e,F as m,d as h,g as a,w as v,n as b,u as f}from"./index-e7a37f9b.js";const g={style:{"margin-top":"3rem"}},w={class:"nav-bar shadow-1"},x={__name:"Contracts",setup(C){const s=u.isActiveRoute,i=[{label:"Vigentes",icon:"pi pi-circle-fill",path:"contracts-vigent",color:"green"},{label:"Por Finalizar",icon:"pi pi-history",path:"contracts-to-finish"},{label:"Finalizados",icon:"pi pi-arrow-down",path:"contracts-ended"},{label:"Proximos",icon:"pi pi-arrow-right",path:"contracts-next"},{label:"Todos los contratos",icon:"pi pi-book",path:"contracts-all"},{label:"Nuevo contrato",icon:"pi pi-plus-circle",path:"new-contract"},{label:"Configuracion",icon:"pi pi-cog",path:"configuracion"}];return(k,y)=>{const r=o("Button"),l=o("router-link"),p=o("RouterView");return n(),c("div",g,[e("nav",w,[e("ul",null,[(n(),c(m,null,h(i,(t,_)=>e("li",{class:"nav-bar--item",key:_},[a(l,{to:`/contracts/${t.path}/`},{default:v(()=>[a(r,{icon:`${t.icon}  'text-green'`,text:"",class:b([f(s)(t.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:t.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64))])]),a(p)])}}},F=d(x,[["__scopeId","data-v-2865f801"]]);export{F as default};
