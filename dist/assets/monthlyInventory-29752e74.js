import{P as m}from"./pathService-fcbb0af3.js";import{_ as v,g as n,o as r,c as s,a as e,F as u,r as d,f as a,e as y,b,u as f,p as g,m as I}from"./index-dffc30d1.js";const w=t=>(g("data-v-f5ecebcc"),t=t(),I(),t),x={class:"container"},k={class:"nav-bar shadow-1"},B=w(()=>e("div",{class:"px-3",style:{position:"absolute",left:"0","border-radius":"0 0  10rem 0",top:"100%",height:"1.3rem","background-color":"var(--primary-color)"}},[e("span",{style:{color:"white","font-weight":"bold"}},"Mensual")],-1)),C={__name:"monthlyInventory",setup(t){const c=m.isActiveRoute,i=[{label:"Reportar inventario",icon:"pi pi-chart-bar",path:"report-monthly-inventory"},{label:"Mis reportes",icon:"pi pi-chart-bar",path:"monthly-inventory-my-reports"},{label:"Adiministrar reportes",icon:"pi pi-chart-bar",path:"monthly-inventory-reports"},{label:"Configuracion",icon:"pi pi-cog",path:"monthly-inventory-settings"}];return(S,A)=>{const l=n("Button"),p=n("router-link"),_=n("router-view");return r(),s("div",x,[e("nav",k,[e("ul",null,[(r(),s(u,null,d(i,(o,h)=>e("li",{class:"nav-bar--item",key:h},[a(p,{to:`/monthly-inventory/${o.path}/`},{default:y(()=>[a(l,{icon:o.icon,text:"",class:b([f(c)(o.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:o.label},null,8,["icon","class","label"])]),_:2},1032,["to"])])),64)),B])]),a(_)])}}},N=v(C,[["__scopeId","data-v-f5ecebcc"]]);export{N as default};
