import{u as F,f as m,g as v,h as M,i as u,s as p,j as I,r as l,o as h,c as f,a,d as n,w as r,k as g,l as i,m as R,F as x,b as k,n as q,U as S,q as $,P as w,t as C,v as z,x as H,y as L}from"./index-de8de9e2.js";import"./jspdf.es.min-db67092f.js";import"./dropDownAux-1367bfdb.js";/* empty css                                                             */import"./dialogoEditarProducto.vue_vue_type_style_index_0_scoped_93a19fed_lang-84580219.js";import"./formatoPesos-2a38d2e7.js";const G=a("p",{class:"mb-2 text-4xl text-center px-4",style:{"font-weight":"bold"}}," Administrador de la tienda virtual ",-1),K={class:"col-12 m-auto md:pl-6 p-2",style:{"max-width":"1024px"}},Q={style:{display:"flex","align-items":"center"},class:"col p-"},W={class:"grid col-12 m-0 p-0"},X={class:"col p-2"},Y={class:"col p-2"},Z={style:{width:"100%"},sclass:"text-center"},ee={class:"col-12 lg:col-9 mr-auto ml-auto m-0 p-0 mt-8",style:{width:"100%"}},te=["src"],oe={class:"col-12 m-auto p-0",style:{"max-width":"1024px"}},ae=a("h5",null,"Nombre de la nueva categoria",-1),se={class:"p-input-icon-left",style:{width:"100%"}},ne=a("i",{class:"pi pi-pencil"},null,-1),le=a("span",{class:"text-center col-12 p-0"},"Agregar Categoria",-1),ge={__name:"MenuTienda",setup(re){const V=F(),c=m(!1),_=m([]),y=m(),N=m(V.path),P=async()=>{try{return await(await fetch(`${S}/categories`)).json()}catch(e){console.error("Error fetching data: ",e)}};v(()=>V.path,e=>{N.value=e}),v(u,(e,t)=>{e!==t&&(console.log(t,e),localStorage.setItem("categoryValue",JSON.stringify(e)),e.category_name!="Nueva categoria"?L.push({path:`/tienda-menu/productos/${e.category_name}`,query:{category:e.category_id}}):c.value=!0)}),v(p,(e,t)=>{e!==t&&(console.log(t,e),localStorage.setItem("siteDropValue",JSON.stringify(e)))});const A=async()=>{const e=`${S}/categories`,t={category_name:y.value};try{const s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!s.ok)throw c.value=!1,new Error(`HTTP error! status: ${s.status}`);const d=await s.json();console.log("Success:",d),c.value=!1,b(),L.push({path:"/tienda-menu/"})}catch(s){console.error("Error:",s)}},E=[{name:"Adiciones",to:"adicionales"},{name:"Salsas",to:"salsas"},{name:"Topping",to:"toppings"},{name:"Cambios",to:"cambios"},{name:"Acompanantes",to:"acompanantes"}],O=async()=>{try{return(await fetch(`${S}/sites`)).json()}catch(e){console.log(e)}},b=()=>{P().then(e=>{_.value=e,_.value.push({category_name:"Nueva categoria"})})};return M(async()=>{const e=localStorage.getItem("categoryValue");e&&(u.value=JSON.parse(e));const t=localStorage.getItem("siteDropValue");t&&(p.value=JSON.parse(t)),O().then(s=>I.value=s),b()}),(e,t)=>{const s=l("SPan"),d=l("Dropdown"),D=l("Button"),U=l("RouterLink"),j=l("RouterView"),B=l("InputText"),J=l("Dialog");return h(),f(x,null,[G,a("div",K,[a("div",Q,[n(s,{class:"mr-4",style:{"font-weight":"bold"}},{default:r(()=>[g(" SEDE: ")]),_:1}),g(),n(d,{class:"col md:col-6 p-0",modelValue:i(p),"onUpdate:modelValue":t[0]||(t[0]=o=>R(p)?p.value=o:null),options:i(I),optionLabel:"site_name",placeholder:"sede"},null,8,["modelValue","options"])]),a("div",W,[a("div",X,[n(d,{style:{outline:"none"},class:"p-1 col-12",primary:"",modelValue:i(u),"onUpdate:modelValue":t[1]||(t[1]=o=>R(u)?u.value=o:null),options:_.value,placeholder:"Productos"},{value:r(o=>{var T;return[a("div",null,[a("i",{class:$([i(w).STAR_FILL,"mr-2"])},null,2),g(C((T=o.value)!=null&&T.category_name?o.value.category_name:{}),1)])]}),option:r(o=>[a("div",null,[a("span",null,[a("i",{class:$([o.option.category_name=="Nueva categoria"?i(w).PLUS_CIRCLE:i(w).TRASH,"mr-3"])},null,2)]),g(C(o.option.category_name),1)])]),_:1},8,["modelValue","options"])]),(h(),f(x,null,k(E,o=>a("div",Y,[n(U,{to:`/tienda-menu/${o.to}`},{default:r(()=>[n(D,{style:z(`background-color:${i(H)[o.to]}`),class:"outlined col-12 p-3 text-center",outlined:"",Secondary:""},{default:r(()=>[a("span",Z,C(o.name),1)]),_:2},1032,["style"])]),_:2},1032,["to"])])),64))]),N.value=="/tienda-menu/"?(h(),f(x,{key:0},k([1,2,3,4,5,6],o=>a("div",ee,[a("img",{style:{width:"100%"},src:`/images/carta/${o}.jpeg`,alt:""},null,8,te)])),64)):q("",!0)]),a("div",oe,[n(j)]),n(J,{header:"Confirmation",visible:c.value,"onUpdate:visible":t[4]||(t[4]=o=>c.value=o),style:{width:"350px"},modal:!0},{default:r(()=>[ae,a("span",se,[ne,n(B,{modelValue:y.value,"onUpdate:modelValue":t[2]||(t[2]=o=>y.value=o),class:"w-100",style:{width:"100%"},type:"text"},null,8,["modelValue"])]),n(D,{onClick:t[3]||(t[3]=o=>A()),style:{margin:"auto"},class:"m-auto my-4 text-center"},{default:r(()=>[le]),_:1})]),_:1},8,["visible"])],64)}}};export{ge as default};
