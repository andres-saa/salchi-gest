<<<<<<<< HEAD:dist/assets/maintenance-e61d889c.js
import{r as d,cf as x,h as f,a as s,o as y,c as v,b as e,d as t,u as n,w as p,q as w}from"./index-a1098956.js";import{s as b}from"./siteService-87e954ef.js";import{m as g}from"./maintenance-9b930b9e.js";const S={class:"p-0 mx-auto shadow-4 p-4 mb-8",style:{"max-width":"1024px","min-height":"calc(100vh - 15rem)","margin-top":"6rem","background-color":"white","border-radius":"0.5rem"}},k=e("p",{class:"mb-2 my-1 text-4xl text-center px-4",style:{"font-weight":"bold","text-transform":"capitalize"}},[e("i",{class:"fa-solid fa-person-chalkboard"}),w(" Mantenimientos ")],-1),V={class:"grid p-0 mx-0 mt-6 col-12 xl:col-8 md:col-10 my-4 p-1",style:{}},B={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0",style:{display:"flex","align-items":"center"}},q=e("span",{class:"p-0 col-2 mr-4 pl-0"},[e("b",null,"SEDE")],-1),E={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0"},C={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0"},z={__name:"maintenance",setup(D){const l=d([]);d({});const o=g(),i=x().currentRoute;return f(async()=>{var a;l.value=await b.getSites(),(a=o.currentSite)!=null&&a.site_id||o.setCurrentSite(l.value[0])}),(a,c)=>{const u=s("Dropdown"),r=s("Button"),m=s("router-link"),_=s("router-view");return y(),v("div",S,[k,e("div",V,[e("div",B,[q,t(u,{modelValue:n(o).currentSite,"onUpdate:modelValue":c[0]||(c[0]=h=>n(o).currentSite=h),class:"col-9 p-0",options:l.value,optionLabel:"site_name"},null,8,["modelValue","options"])]),e("div",E,[t(m,{to:"/maintenance/equipment"},{default:p(()=>[t(r,{outlined:!n(i).fullPath.includes("equipment"),severity:"warning",style:{width:"100%"},class:"",label:"Equipos"},null,8,["outlined"])]),_:1})]),e("div",C,[t(m,{to:"/maintenance/maintance-list"},{default:p(()=>[t(r,{outlined:!n(i).fullPath.includes("maintance-list"),severity:"help",style:{width:"100%"},class:"",label:"Mantenimientos"},null,8,["outlined"])]),_:1})])]),t(_,{class:"p-0 m-0"})])}}};export{z as default};
========
import{r as d,cf as x,h as f,a as s,o as y,c as v,b as e,d as t,u as n,w as p,q as w}from"./index-1a945cfc.js";import{s as b}from"./siteService-6d9bcdae.js";import{m as g}from"./maintenance-13983e37.js";const S={class:"p-0 mx-auto shadow-4 p-4 mb-8",style:{"max-width":"1024px","min-height":"calc(100vh - 15rem)","margin-top":"6rem","background-color":"white","border-radius":"0.5rem"}},k=e("p",{class:"mb-2 my-1 text-4xl text-center px-4",style:{"font-weight":"bold","text-transform":"capitalize"}},[e("i",{class:"fa-solid fa-person-chalkboard"}),w(" Mantenimientos ")],-1),V={class:"grid p-0 mx-0 mt-6 col-12 xl:col-8 md:col-10 my-4 p-1",style:{}},B={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0",style:{display:"flex","align-items":"center"}},q=e("span",{class:"p-0 col-2 mr-4 pl-0"},[e("b",null,"SEDE")],-1),E={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0"},C={class:"col-12 md:px-2 lg:px-3 md:col-4 py-0 my-2 p-0"},z={__name:"maintenance",setup(D){const l=d([]);d({});const o=g(),i=x().currentRoute;return f(async()=>{var a;l.value=await b.getSites(),(a=o.currentSite)!=null&&a.site_id||o.setCurrentSite(l.value[0])}),(a,c)=>{const u=s("Dropdown"),r=s("Button"),m=s("router-link"),_=s("router-view");return y(),v("div",S,[k,e("div",V,[e("div",B,[q,t(u,{modelValue:n(o).currentSite,"onUpdate:modelValue":c[0]||(c[0]=h=>n(o).currentSite=h),class:"col-9 p-0",options:l.value,optionLabel:"site_name"},null,8,["modelValue","options"])]),e("div",E,[t(m,{to:"/maintenance/equipment"},{default:p(()=>[t(r,{outlined:!n(i).fullPath.includes("equipment"),severity:"warning",style:{width:"100%"},class:"",label:"Equipos"},null,8,["outlined"])]),_:1})]),e("div",C,[t(m,{to:"/maintenance/maintance-list"},{default:p(()=>[t(r,{outlined:!n(i).fullPath.includes("maintance-list"),severity:"help",style:{width:"100%"},class:"",label:"Mantenimientos"},null,8,["outlined"])]),_:1})])]),t(_,{class:"p-0 m-0"})])}}};export{z as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/maintenance-97054b62.js
