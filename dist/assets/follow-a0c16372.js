import{P as u}from"./pathService-fcbb0af3.js";import{_ as f,g as o,o as l,c as r,a as t,F as m,r as v,f as s,e as h,b,u as g,p as w,m as k}from"./index-dffc30d1.js";const x=e=>(w("data-v-2c4e52b5"),e=e(),k(),e),y={class:"container p-0"},B={class:"nav-bar shadow-1 m-0 p-0"},F=x(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1)),I={__name:"follow",setup(e){const n=u.isActiveRoute,c=[{label:"Revisión de hojas de vida",icon:"fa-regular fa-file-alt",path:"resume-review/accepted"},{label:"Filtro 1, preliminares",icon:"fa-regular fa-filter",path:"preliminary-filter/accepted"},{label:"Filtro 2, primera entrevista",icon:"fa-regular fa-user-check",path:"first-interview/accepted"},{label:"Filtro 3, segunda entrevista",icon:"fa-regular fa-users",path:"second-interview/accepted"},{label:"Recepción de documentos",icon:"fa-regular fa-folder-open",path:"document-reception"},{label:"Contratación completada",icon:"fa-regular fa-handshake",path:"hiring-completed"}];return(C,S)=>{const i=o("Button"),p=o("router-link"),_=o("router-view");return l(),r("div",y,[t("nav",B,[t("ul",null,[(l(),r(m,null,v(c,(a,d)=>t("li",{class:"nav-bar--item",key:d,style:{display:"flex","align-items":"center"}},[s(p,{to:`/hiring-hr-follow/${a.path}/132`},{default:h(()=>[s(i,{icon:a.icon,text:"",class:b([g(n)(a.path)?"nav-var--item-button-selected":"","nav-var--item-button"]),severity:"help",label:a.label},null,8,["icon","class","label"])]),_:2},1032,["to"]),F])),64))])]),s(_,{class:"p-0 m-0"})])}}},N=f(I,[["__scopeId","data-v-2c4e52b5"]]);export{N as default};
