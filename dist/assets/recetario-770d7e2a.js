import{P as u}from"./pathService-224b049f.js";import{_ as d,a as o,o as c,c as n,b as e,F as f,d as h,g as s,w as b,n as v,u as w,p as g,h as x}from"./index-5fe7872a.js";const y=a=>(g("data-v-40a698e6"),a=a(),x(),a),B={style:{"margin-top":"3rem","max-width":"1366px"},class:"m-auto"},k={class:"nav-bar shadow-1 mb-5"},I=y(()=>e("b",null,[e("i",{class:"pi pi-arrow-right p-1"})],-1)),R={__name:"recetario",setup(a){const r=u.isActiveRoute,i=[{label:"Master",icon:"fa fa-chart-column",path:"prices-cdi-table"},{label:"Pasamanos",icon:"fa fa-bowl-rice",path:"pasamanos"},{label:"Producto Terminado",icon:"fa fa-bowl-rice",path:"producto-terminado"},{label:"Recetas Sedes",icon:"fa fa-bowl-rice",path:"recetas"},{label:"Resumen Beneficio",icon:"fa fa-chart-column",path:"recipe-sumary-benefit"},{label:"Configuracion",icon:"fa fa-gear",path:"configuracion"}];return(S,C)=>{const l=o("Button"),p=o("router-link"),_=o("RouterView");return c(),n("div",B,[e("nav",k,[e("ul",null,[(c(),n(f,null,h(i,(t,m)=>e("li",{class:"nav-bar--item",key:m,style:{display:"flex","align-items":"center"}},[s(p,{to:`/recetario/${t.path}/`},{default:b(()=>[s(l,{icon:`${t.icon}  'text-green'`,text:"",class:v([w(r)(t.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:t.label},null,8,["icon","class","label"])]),_:2},1032,["to"]),I])),64))])]),s(_)])}}},A=d(R,[["__scopeId","data-v-40a698e6"]]);export{A as default};