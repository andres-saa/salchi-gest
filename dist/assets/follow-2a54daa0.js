import{P as u}from"./pathService-623a2778.js";import{_ as f,a as o,o as l,c as r,b as t,F as m,d as h,g as s,w as v,n as b,u as g,p as w,h as k}from"./index-87ceccd5.js";const x=e=>(w("data-v-2c4e52b5"),e=e(),k(),e),y={class:"container p-0"},B={class:"nav-bar shadow-1 m-0 p-0"},F=x(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1)),I={__name:"follow",setup(e){const n=u.isActiveRoute,c=[{label:"Revisión de hojas de vida",icon:"fa-regular fa-file-alt",path:"resume-review/accepted"},{label:"Filtro 1, preliminares",icon:"fa-regular fa-filter",path:"preliminary-filter/accepted"},{label:"Filtro 2, primera entrevista",icon:"fa-regular fa-user-check",path:"first-interview/accepted"},{label:"Filtro 3, segunda entrevista",icon:"fa-regular fa-users",path:"second-interview/accepted"},{label:"Recepción de documentos",icon:"fa-regular fa-folder-open",path:"document-reception"},{label:"Contratación completada",icon:"fa-regular fa-handshake",path:"hiring-completed"}];return(C,S)=>{const i=o("Button"),p=o("router-link"),d=o("router-view");return l(),r("div",y,[t("nav",B,[t("ul",null,[(l(),r(m,null,h(c,(a,_)=>t("li",{class:"nav-bar--item",key:_,style:{display:"flex","align-items":"center"}},[s(p,{to:`/hiring-hr-follow/${a.path}/132`},{default:v(()=>[s(i,{icon:a.icon,text:"",class:b([g(n)(a.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:a.label},null,8,["icon","class","label"])]),_:2},1032,["to"]),F])),64))])]),s(d,{class:"p-0 m-0"})])}}},N=f(I,[["__scopeId","data-v-2c4e52b5"]]);export{N as default};