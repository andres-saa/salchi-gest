import{_ as T,z as P,r as f,m as k,y as L,a as b,o as l,c as u,b as t,g as p,w as N,B,n as E,C as z,T as D,f as I,t as _,F as $,d as C,u as S,v as V,D as w,k as M,U as O,q as R}from"./index-cbaa55ab.js";import{f as q}from"./formatoPesos-2a38d2e7.js";import{a as j,u as F}from"./site-2a969c9f.js";/* empty css                                                                    */import{u as U}from"./ventas-1d5df1d6.js";const A={class:"container shadow-3 col-12",style:{"border-radius":"0.5rem","background-color":"white",height:"100%",position:"relative",overflow:""}},H=["src"],J={key:0,style:{width:"100%",display:"flex","justify-content":"center","align-items":"center","aspect-ratio":"1 / 1","background-color":"rgb(255, 255, 255)","object-fit":"contain","border-radius":"0.5rem"}},W={class:"texto",style:{}},G={style:{display:"flex",gap:"1rem",height:"100%","flex-direction":"column","justify-content":"space-between"}},K={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Q={style:{"text-transform":"uppercase"}},X=["v-lazy"],Y={style:{display:"flex","justify-content":"space-between","align-items":"c"}},Z={style:{display:"flex","align-items":"center",gap:"1rem"}},tt={class:"text-xl"},et={__name:"TarjetaMenu",props:{product:{type:Object,default:{}},index:{type:Number,default:12}},setup(y){const c=j(),d=P(),m=s=>{c.addProductToCart(s),d.add({severity:"success",summary:"Exito",detail:"Producto agregado al carrito",life:3e3})},r=f(!1),g=()=>{r.value=!0},h=s=>{c.setCurrentProduct(s),c.setVisible("currentProduct",!0)},o=y;k(()=>{const s=new IntersectionObserver(e=>{e.forEach(a=>{if(a.isIntersecting){const i=a.target;i.src=i.dataset.src,r.value[i.dataset.index]=!0,s.unobserve(i)}})},{threshold:.1});document.querySelectorAll("img.lazy").forEach((e,a)=>{e.dataset.index=a,s.observe(e)})});const n=L(()=>o.product.product_description.substring(0,100)+"...");return(s,e)=>{var v;const a=b("ProgressSpinner"),i=b("Button");return l(),u("div",A,[t("div",{class:"imagen",style:{display:"flex",overflow:"hidden","align-items":"center"},onClick:e[0]||(e[0]=x=>h(o.product))},[p(D,{name:"fade"},{default:N(()=>[B(t("img",{onLoad:g,class:E(r.value?"cargado":"sin-cargar"),style:{width:"100%","aspect-ratio":"1 / 1","border-radius":"0.5rem",cursor:"pointer","background-color":"rgb(255, 255, 255)","object-fit":"contain"},src:`https://backend.salchimonster.com/read-product-image/300/${o.product.product_name}`,alt:""},null,42,H),[[z,r.value]])]),_:1}),r.value?I("",!0):(l(),u("div",J,[p(a,{style:{width:"60px",height:"60px"},strokeWidth:"8",animationDuration:".2s","aria-label":"Custom ProgressSpinner"})]))]),t("div",W,[t("div",G,[t("div",K,[t("span",null,[t("b",Q,_(o.product.product_name),1)]),(l(),u($,null,C([1],x=>t("img",{class:"character",style:{width:"6rem"},"v-lazy":`/images/characters/${o.index}.png`,alt:""},null,8,X)),64))]),t("span",null,_((v=n.value)==null?void 0:v.toLocaleLowerCase()),1),t("div",Y,[p(i,{icon:"pi pi-heart text-2xl",text:"",rounded:"",style:{color:"red"}}),t("div",Z,[t("span",tt,[t("b",null,_(S(q)(o.product.price)),1)])])])])]),p(i,{style:{position:"absolute",right:"-1rem",top:"-1rem"},onClick:e[1]||(e[1]=x=>m(o.product)),severity:"danger",rounded:"",icon:"pi pi-plus text-xl fw-100"})])}}},st=T(et,[["__scopeId","data-v-e47f1dc0"]]),ot={class:"grid p-1 pb-8",style:{"max-width":"1024px",margin:"auto",position:"relative"}},rt={class:"text-center text-3xl col-12",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},at=t("div",{style:{width:"100%",height:"5px","background-color":"#ff6200"}},null,-1),nt=t("div",{style:{width:"100%",height:"5px","background-color":"#ff6200"}},null,-1),pt={__name:"sesion",setup(y){j();const c=F(),d=U(),m=f([]),r=V();k(async()=>{g(),await w()}),M(()=>r.params.category_id,async()=>{r.params.category_id&&(g(),await w())},{deep:!0});const g=async h=>{const o=c.location.site.site_id,n=r.params.category_id,s=c.restaurant;if(n&&o){d.setLoading(!0,"cargando productos");try{let e=await fetch(`${O}/products-active/category-id/${n}/site/${o}/${s}`);if(!e.ok)throw d.setLoading(!1,"cargando productos"),new Error(`HTTP error! status: ${e.status}`);d.setLoading(!1,"cargando productos");let a=await e.json();m.value=a}catch(e){d.setLoading(!1,"cargando productos"),console.error("Error fetching data: ",e)}}};return f(JSON.parse(localStorage.getItem("currentNeigborhood"))),(h,o)=>(l(),u("div",ot,[t("p",rt,[at,R(" "+_(S(r).params.menu_name)+" ",1),nt]),(l(!0),u($,null,C(m.value,(n,s)=>(l(),u("div",{key:n.id,class:"col-12 md:col-4 lg:col-3 sm:col-6"},[p(st,{style:{width:"100%"},id:`tarjeta-${s}`,index:s+1,product:n},null,8,["id","index","product"])]))),128))]))}};export{pt as default};
