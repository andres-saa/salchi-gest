import{_ as C,f as o,h,r as _,o as i,c as f,a as s,d as p,w as v,l as m,F as O,b as M,I as y,U as S,n as N,t as D,p as z,e as G,y as J}from"./index-de8de9e2.js";import{g as L,a as P}from"./userServices-7389417d.js";import{g as b,s as R}from"./dropDownAux-1367bfdb.js";class T{getProductsSmall(){return fetch("demo/data/products-small.json").then(e=>e.json()).then(e=>e.data)}getProducts(){return fetch("demo/data/products.json").then(e=>e.json()).then(e=>e.data)}getUsers(){return fetch("http://127.0.0.1:8000/read/users").then(e=>e.json()).then(e=>e.data)}getProductsWithOrdersSmall(){return fetch("demo/data/products-orders-small.json").then(e=>e.json()).then(e=>e.data)}}const w=n=>(z("data-v-494bdf0b"),n=n(),G(),n),W={class:"grid"},q={class:"col-12 m-auto",style:{"max-width":"1280px"}},H={class:""},K=w(()=>s("div",{class:"my-2 col-12"},[s("p",{style:{"font-weight":"bold",color:"black"},class:"text-4xl pl-0 ml-0"},"Administrar recibos y documentacion")],-1)),Q={class:"col-12 lg:col-4 md:col-6"},X=["onClick"],Y={class:"m-4 container-"},Z={class:"text-center cont-img-sede"},ee={class:"nombre-sede-cont"},te={class:"text-5xl font-bold text-white nombre-sede"},se={style:{width:"100%",animation:""}},ae=["src"],oe=w(()=>s("div",{class:"flex align-items-center justify-content-between"},null,-1)),re={__name:"ManageSites",setup(n){const e=t=>{localStorage.setItem("currentSiteFiles",JSON.stringify(t)),J.push(`/site/${t.site_id}`)},l=o({}),x=async t=>{try{const a=await P(t);l.value[t]=a}catch(a){console.error("Error al obtener usuarios por sede:",a)}};h(()=>{b().then(t=>{t.forEach(a=>x(a.site_id))})});const k=(t,a)=>{const c={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};a.target.src=c[t]||c.default},j=o(null),F=o("grid");o(null);const I=o(null),V=o(null),$=new T;h(()=>{$.getProductsSmall().then(t=>j.value=t),b(),L().then(t=>B.value=t)});const B=o([]);return(t,a)=>{const c=_("Avatar"),E=_("AvatarGroup"),U=_("DataView");return i(),f("div",W,[s("div",q,[s("div",H,[K,p(U,{value:m(R),layout:F.value,paginator:!0,rows:9,sortOrder:I.value,sortField:V.value},{grid:v(r=>[s("div",Q,[s("div",{onClick:d=>e(r.data)},[s("div",Y,[s("div",Z,[s("div",ee,[p(E,null,{default:v(()=>{var d,g;return[(i(!0),f(O,null,M((d=l.value[r.data.site_id])==null?void 0:d.slice(0,4),u=>(i(),y(c,{shape:"circle",size:"xlarge",style:{"background-color":"#fff",color:"#ffffff"},key:u.dni,image:`${m(S)}/read-product-image/96/employer-${u.dni}`,onError:A=>k(u.gender,A)},null,8,["image","onError"]))),128)),((g=l.value[r.data.site_id])==null?void 0:g.length)>6?(i(),y(c,{key:0,shape:"circle",size:"xlarge",style:{"background-color":"red",color:"#ffffff"},label:`+${l.value[r.data.site_id].length-4}`},null,8,["label"])):N("",!0)]}),_:2},1024),s("div",te,[s("p",se,D(r.data.site_name),1)])]),s("img",{src:`${m(S)}/read-product-image/300/site-${r.data.site_id}`,class:"w-12 imagen"},null,8,ae)]),oe])],8,X)])]),_:1},8,["value","layout","sortOrder","sortField"])])])])}}},ie=C(re,[["__scopeId","data-v-494bdf0b"]]);export{ie as default};
