import{P as v}from"./pathService-47ece7c3.js";import{_ as u,g as a,o as n,c as s,a as e,F as h,r as m,b as r,f as y,d as b,u as f,p as g,m as I}from"./index-03a193b1.js";const w=t=>(g("data-v-337d3b95"),t=t(),I(),t),x={class:"container"},k={class:"nav-bar shadow-1"},B=w(()=>e("div",{class:"px-3",style:{position:"absolute",left:"0","border-radius":"0 0  10rem 0",top:"100%",height:"1.3rem","background-color":"var(--primary-color)"}},[e("span",{style:{color:"white","font-weight":"bold"}},"Diario")],-1)),C={__name:"dailyInventory",setup(t){const i=v.isActiveRoute,c=[{label:"Reportar inventario",icon:"pi pi-chart-bar",path:"report-inventory"},{label:"Mis reportes",icon:"pi pi-chart-bar",path:"daily-inventory-my-reports"},{label:"Adiministrar reportes",icon:"pi pi-chart-bar",path:"daily-inventory-reports"},{label:"Configuracion",icon:"pi pi-cog",path:"daily-inventory-settings"}];return(S,A)=>{const l=a("Button"),p=a("router-link"),_=a("router-view");return n(),s("div",x,[e("nav",k,[e("ul",null,[(n(),s(h,null,m(c,(o,d)=>e("li",{class:"nav-bar--item",key:d},[r(p,{to:`/daily-inventory/${o.path}/`},{default:y(()=>[r(l,{icon:o.icon,text:"",class:b([f(i)(o.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:o.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64)),B])]),r(_)])}}},P=u(C,[["__scopeId","data-v-337d3b95"]]);export{P as default};
