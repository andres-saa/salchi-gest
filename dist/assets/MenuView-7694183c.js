import{f as Te}from"./formatoPesos-2a38d2e7.js";import{u as X,a as ge}from"./site-d56ea9d8.js";/* empty css                                                                    */import{r as e,s as L,v as de,U as b,_ as ee,x as w,i as D,a as f,o as c,e as ue,w as V,b as o,f as E,g as m,c as u,u as l,n as R,j as ke,t as O,k as _e,p as te,h as oe,F as J,d as Z,y as ae,z as Ue,P as $e,A as pe,B as Be,C as Ce,D as F,E as K}from"./index-e7a37f9b.js";import"./ventas-a48b5432.js";import{f as ie}from"./formatoPesos-8aa989a0.js";import{a as se}from"./aditionalService-a30cdf8c.js";e({});e({});const G=e([{name:"Menu",to:"",menus:[{category:{id:1,name:"Salchipapas"},products:[]}]},{name:"Sedes",to:"sedes"},{name:"Carta",to:"menu"},{name:"Rastrear pedido",to:"rastrear-pedido"},{name:"Colaboraciones",to:"colaboraciones"}]),He=e(!1);e(1.042);e({products:[],total:0});e([]);e(0);e();e(!1);const me=e(!1);e({});e({});e({});e({});e(!1);e([]);e([]);e([]);e([]);e([]);e(!1);const ne=e(L.currentRoute);e();e(localStorage.getItem("currentNeigborhood"));const Ge=()=>{const n=e(localStorage.getItem("currentNeigborhood"));(ne.value.fullPath=="/menu"||ne.value.fullPath=="/sedes")&&(me.value=!1),!n.value&&ne.value.fullPath!="/menu"&&(me.value=!0)},Ve={async getSiteById(n){try{const a=await de.get(`${b}/site/${n}`);return a.status===200?a.data:(console.error("An error occurred while fetching the ingredients:",a.status),null)}catch(a){return console.error("An error occurred while fetching the ingredients:",a),null}}};const q=n=>(te("data-v-b57cf900"),n=n(),oe(),n),je=q(()=>o("b",{style:{color:"black"}},null,-1)),We={style:{width:"100%",display:"flex","flex-direction":"column","align-items":"center","border-radius":"","background-color":""}},ze={class:"field col-12 pb-0 p-0",style:{width:"100%"}},Qe={style:{display:"flex",width:"min-content","justify-content":"start",gap:"1rem","align-items":"center"}},Ye=q(()=>o("label",{for:"site_id",style:{color:"black","min-width":"max-content"}},"en que ciudad te encuentras? ",-1)),Je={class:"field col-12 mt-0 pt-0 p-0",style:{width:"100%",gap:"",display:"block"}},Ze={style:{display:"flex",width:"min-content","justify-content":"start",gap:"1rem","align-items":"center"}},qe=q(()=>o("label",{for:"site_id",style:{color:"black","min-width":"max-content"}},"Cual es tu barrio? ",-1)),Fe={key:0,style:{display:"flex","min-width":"max-content"}},Ke=q(()=>o("p",{class:"pl-2",style:{color:"black"}},"buscando barrios...",-1)),Xe={class:"field col-12 p-0",style:{width:"100%",height:"15rem",position:"relative"}},et={class:"img-cont col-12 p-0",style:{overflow:"hidden",position:"relative"}},tt=["src"],ot={style:{position:"absolute",color:"white",top:"0",left:"0",width:"100%","text-transform":"uppercase",height:"100%",display:"flex",padding:"","align-items":"end","border-radius":"0.5rem"}},at={key:0,class:"col-12 py-1",style:{"background-color":"rgba(0, 0, 0, 0.7)","text-align":"center",height:"min-content",width:"100%","font-weight":"500"}},rt=q(()=>o("span",{class:"text-xl lg:text-lg p-0",style:{}}," SALCHIMONSTER",-1)),it={style:{"text-transform":"uppercase"},class:"text-xl lg:text-lg p-0"},st={class:"field col-12 p-0",style:{width:"100%"}},nt={__name:"siteDialog",setup(n){const a=X(),r=ge();w(()=>a.location.site.site_id,()=>{r.cart={products:[],total_cost:0,additions:[]},location.reload()});const _=e({ciudad:!1,barrio:!1}),y=e([]),A=e({}),g=e({});e(localStorage.getItem("currentNeigborhood"));const p=e({site:{name:"default"}}),h=e(),I=()=>{W(g.value.city_id).then(d=>h.value=d)};w(g,()=>{I()}),w(p,async()=>{A.value=await Ve.getSiteById(p.value.site_id).then(d=>A.value=d)});const j=async()=>{const d={site:A.value,neigborhood:p.value,city:g.value};a.setLocation(d),a.setVisible("currentSite",!1),me.value=!1},N=async()=>{try{_.value.ciudad=!0;const d=await fetch(`${b}/cities`);if(d.ok){const s=await d.json();return _.value.ciudad=!1,s}}catch{_.value.ciudad=!1}},W=async d=>{try{_.value.barrio=!0;const s=await fetch(`${b}/neighborhoods/by-city/${d}`);if(s.ok){const M=await s.json();return _.value.barrio=!1,M}}catch{_.value.barrio=!1}};return D(async()=>{N().then(d=>y.value=d)}),(d,s)=>{const M=f("ProgressSpinner"),T=f("Dropdown"),k=f("Button"),U=f("Dialog");return c(),ue(U,{visible:l(a).visibles.currentSite,"onUpdate:visible":s[3]||(s[3]=x=>l(a).visibles.currentSite=x),closable:!1,style:_e([{width:"380px"},{"background-color":"white",position:"relative","border-radius":"1rem","padding-top":"2rem"}]),header:"Seleccion de sede",modal:!0,class:"p-fluid m-3"},{default:V(()=>{var x,$,B,z,Q,Y;return[je,o("div",We,[o("div",ze,[o("div",Qe,[Ye,_.value.ciudad?(c(),ue(M,{key:0,style:{width:"20px",height:"20px"},strokeWidth:"8",fill:"var(--white)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):E("",!0)]),m(T,{class:"",onClick:s[0]||(s[0]=()=>p.value={site:{site_name:"default"}}),modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=H=>g.value=H),options:y.value,placeholder:"SELECCIONA UNA CIUDAD",optionLabel:"city_name",required:"true"},null,8,["modelValue","options"])]),o("div",Je,[o("div",Ze,[qe,_.value.barrio?(c(),u("div",Fe,[m(M,{style:{width:"20px",height:"20px"},strokeWidth:"8",fill:"var(--white)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"}),Ke])):E("",!0)]),m(T,{style:{},filter:"",modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=H=>p.value=H),disabled:!h.value,options:h.value,optionLabel:"name",required:"true",placeholder:"Selecciona un barrio",filterPlaceholder:"Escribe el nombre de tu barrio"},null,8,["modelValue","disabled","options"])]),o("div",Xe,[o("div",et,[(x=p.value)!=null&&x.site_id?(c(),u("img",{key:0,src:`${l(b)}/read-product-image/600/site-${($=p.value)==null?void 0:$.site_id}`,class:R(((B=p.value.site)==null?void 0:B.name)=="default"?"default-image":""),style:{border:"1px solid rgb(255, 255, 255)",width:"100%","background-color":"rgb(255, 255, 255)",height:"100%","object-fit":"cover","border-radius":"0.2rem"},alt:""},null,10,tt)):E("",!0),o("div",ot,[(z=p.value)!=null&&z.site_id?(c(),u("p",at,[rt,ke(),o("span",it,O((Q=A.value)==null?void 0:Q.site_name),1)])):E("",!0)])])]),o("div",st,[m(k,{severity:"help",label:"Guardar",onClick:j,disabled:!((Y=p.value)!=null&&Y.name),style:{width:"100%",border:"none",padding:"10px 20px","text-align":"center","background-color":"black"},b:""},null,8,["disabled"])])])]}),_:1},8,["visible"])}}},ct=ee(nt,[["__scopeId","data-v-b57cf900"]]),ce=X(),Oe={async getCategories(){const n=ce.location.site.site_id,a=ce.restaurant;if(n)try{const r=await de.get(`${b}/categories/${n}/${a}`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}else{ce.visibles.currentSite=!0;try{const r=await de.get(`${b}/categories/${n}/1`);return r.status===200?r.data:(console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return console.error("An error occurred while fetching the ingredients:",r),null}}}};const lt=n=>(te("data-v-49daccb8"),n=n(),oe(),n),dt={class:"d-flex p lg:justify-content-center align-items-center p-0 md:p-1",style:{"overflow-x":"auto",display:"flex",width:"100%","background-color":"rgba(255, 255, 255, 0.913)"}},ut=lt(()=>o("span",{class:"text-lg",style:{"min-width":"max-content"}},"Nuevo pedido",-1)),pt={class:"text-lg",style:{"min-width":"max-content"}},mt={__name:"BarraCategorias",setup(n){const a=X(),r=e([{name:"CARGANDO ..."}]),_=(A,g)=>{L.push({name:"call-center-vender-menu",params:{menu_name:A,category_id:g}})};D(async()=>{r.value=await Oe.getCategories()});const y=A=>ae().path.includes(A);return w(()=>a.restaurant,async A=>{r.value=await Oe.getCategories(),L.push("/call-center-vender")},{depth:!0}),(A,g)=>{const p=f("Button");return c(),u("div",{class:R([r.value.length>1?"apear":"hide","shadow-1 d-flex lg:justify-content-center align-items-center mb-5 p-0 md:p-0"]),style:{position:"sticky",top:"3rem","z-index":"99","background-color":"white",height:"max-content","min-height":"max-content"}},[o("div",dt,[m(p,{onClick:g[0]||(g[0]=h=>l(a).visibles.currentSite=!0),severity:"help",class:"py-2 ml-4 text-lg titulo",style:{"font-weight":"400","border-radius":".3rem","text-transform":"uppercase","min-width":"max-content"}},{default:V(()=>[ut]),_:1}),(c(!0),u(J,null,Z(r.value,h=>(c(),u("div",{key:h.id,class:"p-1"},[m(p,{onClick:I=>_(h.category_name,h.category_id),class:R([y(h.category_id)?"selected menu-button":"menu-button","p-0 mx-3 text-lg titulo"]),style:{"font-weight":"400","text-transform":"uppercase","border-radius":"0","min-width":"max-content"}},{default:V(()=>[o("span",pt,O(h.category_name),1)]),_:2},1032,["onClick","class"])]))),128))])],2)}}},gt=ee(mt,[["__scopeId","data-v-49daccb8"]]);const _t=n=>(te("data-v-994294af"),n=n(),oe(),n),At={class:"col-12 py-0 px-4",style:{display:"flex",cursor:"pointer",position:"fixed",bottom:"0",left:"0","justify-content":"center"}},ht={class:"carro",style:{display:"flex","background-color":"","align-items":"center","justify-content":"center",gap:"1rem"}},St=["src"],vt={key:0,style:{width:"auto","border-radius":"50%",height:"100%","object-fit":"contain"},alt:""},yt={style:{"font-weight":"bold"},class:"text-xl"},bt=_t(()=>o("p",{class:"h2",style:{position:"absolute",top:"0"}},null,-1)),ft={key:0},Ot={class:"",style:{border:"none","background-color":"transparent",display:"flex","align-items":"center","justify-content":"center"}},Et={__name:"barra",setup(n){e(localStorage.getItem("currenSiteWsp"));const a=ge();e(L.currentRoute);let r;ae();const _=()=>{y.value=!1,clearTimeout(r),r=setTimeout(()=>{y.value=!0},500)};D(()=>{window.addEventListener("scroll",_)}),Ue(()=>{window.removeEventListener("scroll",_),clearTimeout(r)});const y=e(!0),A=()=>{L.push("/call-center-vender/cart")};return(g,p)=>{const h=f("Button");return c(),u("div",At,[o("div",{style:_e([y.value?"":"transform: translateY(5rem);opacity:0",{display:"flex",gap:"2rem","border-radius":"10rem","align-items":"center",position:"relative",bottom:"1rem","max-width":"min-content","justify-content":"center",height:"3.5rem","background-color":"rgb(255, 255, 255)","box-shadow":"0px 0px 10px rgba(0, 0, 0, 0.5)"}]),class:"barra-carrito px-5"},[o("div",{onClick:A,style:{}},[o("button",ht,[o("i",{style:{"font-size":"2rem"},class:R(["icono",l($e).SHOPPING_CART])},null,2),(c(!0),u(J,null,Z(l(a).cart.products.slice(0,4),I=>(c(),u("div",{style:{position:"relative"},key:I.id},[m(h,{class:"p-0",label:I.quantity,severity:"danger",rounded:"",style:{width:"1.2rem","font-size":"0.8rem",height:"1.2rem",top:"-.3rem",right:"-.5rem",position:"absolute"}},null,8,["label"]),o("img",{class:"img-cart",onMouseover:p[0]||(p[0]=()=>g.vueMenu=!0),style:{height:"2rem","object-fit":"contain"},src:`${l(b)}/read-photo-product/${I.product.img_identifier}/600`,alt:""},null,40,St)]))),128)),l(a).cart.products.length>4?(c(),u("div",vt,[o("p",yt," +"+O(l(a).cart.products.length-4),1)])):E("",!0)])]),bt,l(a).cart.products.length>0&&g.screenWidth>720?(c(),u("a",ft,[o("button",Ot,[o("span",{class:R(g.topbarMenuClasses),style:{"font-size":"2rem","font-weight":"bold"}},O(l(Te)(Number(g.calcularTotalCarrito()))),3)])])):E("",!0)],4)])}}},It=ee(Et,[["__scopeId","data-v-994294af"]]),Ct=e({products:[],total:0});e([]);const wt=e(0);function Rt(){document.cookie.split(";").forEach(a=>{const[r]=a.split("=");document.cookie=r+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"})}const Ee=e();localStorage.getItem("currentNeigborhood")?Ee.value=JSON.parse(localStorage.getItem("currentNeigborhood")).currenNeigborhood:Ee.value="definir domicilio";const Lt=e(!1);e(!1);const C=e({});e({});e({});e({});const Mt=e([]),Pt=e([]);e([]);e(L.currentRoute);e();e(localStorage.getItem("currentNeigborhood"));const Nt={category:{id:3,name:"Bebidas"},products:[{id:37,name:"COCACOLA ZERO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:38,name:"PREMIO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:39,name:"COCACOLA 1.5 LITROS",price:8e3,description:"BEBIDAS",category_id:3},{id:41,name:"AGUA CRISTAL 400ML",price:4e3,description:"BEBIDAS",category_id:3},{id:42,name:"COCACOLA ORIGINAL 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:80,name:"QUATRO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:81,name:"SPRITE 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:123,name:"JUGO DE LULO",price:8e3,description:"BEBIDAS",category_id:3},{id:124,name:"JUGO DE UVA",price:8e3,description:"BEBIDAS",category_id:3},{id:125,name:"JUGO DE MANGO",price:8e3,description:"BEBIDAS",category_id:3},{id:126,name:"BUDWEISER",price:8e3,description:"BEBIDAS",category_id:3},{id:127,name:"CORONA",price:9500,description:"BEBIDAS",category_id:3}]},xt={category:{id:2,name:"Burgers"},products:[{id:43,name:"BURGERMONSTER",price:25e3,description:"CARNE ANGUS 150 GR, CEBOLLA CARAMELIZADA, SALCHICHA RANCHERA, QUESO AMERICANO, PAN BRIOCHE, LECHUGA Y TOMATE",category_id:2},{id:50,name:"1 burger monster + 1 malteada de ariquipe + papas",price:35e3,description:"",category_id:2},{id:51,name:"burger monster + 1 malteada de frutos tropicales + papas",price:35e3,description:"",category_id:2},{id:52,name:"burger monster + 1 malteada de chocolate  + papas",price:35e3,description:"",category_id:2}]},Dt={category:{id:1,name:"Salchipapas"},products:[{id:1,name:"CLASICMONSTER",price:28900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, RIPIO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:2,name:"MADURIMONSTER",price:34900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, MADURO GUAYABO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:3,name:"BACONMONSTER",price:37900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, BACON, QUESO CHEDDAR Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:4,name:"CHORIMONSTER",price:41900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, CHORIZO, MAICITOS Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:5,name:"POLLIMONSTER",price:41900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, POLLO EN SALSA A LA NARANJA, HUEVOS DE CODORNIZ Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:6,name:"RANCHIMONSTER",price:46e3,description:"PAPA AMARILLA, SALCHICHA RANCHERA, QUESO GRATINADO, MAICITOS Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:7,name:"NACHIMONSTER",price:48500,description:"PAPA AMARILLA, CARNE DESMECHADA, GUACAMOLE, QUESO CHEDDAR, QUESO CON MAIZ, PICO DE GALLO, NACHOS Y SALSAS",category_id:1,porcion:"2 PERSONAS"},{id:8,name:"COSTIMONSTER",price:47900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, COSTILLA AHUMADA EN SALSA BUFALO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:9,name:"MATA HAMBRE",price:48900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, POLLO DESMECHADO, HUEVO DE CODORNIZ Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:10,name:"PORKYMONSTER",price:49e3,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, TROZOS DE CHICHARRON CARNUDO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:11,name:"LA DE SIEMPRE",price:53900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO,CARNE DESMECHADA, GUACAMOLE, PICO DE GALLO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:12,name:"MIXTICA",price:61900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, CARNE DESMECHADA, POLLO DESMECHADO, GUACAMOLE, PICO DE GALLO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:13,name:"SALCHIMONSTER",price:119e3,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, POLLO EN SALSA A LA NARANJA, BACON PREMIUM, COSTILLA AHUMADA EN SALSA BUFALO, CHORIZO, MAICITOS, QUESO GRATINADO, RIPIO, HUEVO DE CODORNIZ, MADURO GUAYABO Y SALSAS.",category_id:1,porcion:"5-6 PERSONAS"}]},Tt={category:{id:4,name:"Malteadas"},products:[{id:47,name:"CHOCOMONSTER",price:1e4,description:"MALTEADA DE CHOCOLATE (TOPINGS OPCIONALES)",category_id:4},{id:48,name:"TROPIMONSTER",price:1e4,description:"MALTEADA DE FRUTOS TROPICALES (TOPINGS OPCIONALES)",category_id:4},{id:49,name:"QUIPEMONSTER",price:1e4,description:"MALTEADA DE AREQUIPE (TOPINGS OPCIONALES)",category_id:4}]},kt={category:{id:5,name:"Almuerzos"},products:[{id:53,name:"COMBO ALMUERZO #2",price:22e3,description:"COMBO ALMUERZO 1 BASE + 2 ACOMPAÑANTES + GASEOSA 400 ML",category_id:5,porcion:"1 PERSONA",acomp_cantidad:2},{id:54,name:"COMBO ALMUERZO #1",price:19e3,description:"COMBO ALMUERZO 1 BASE + ENSALADA + 1 ACOMPAÑANTE + GASEOSA 400 ML",category_id:5,porcion:"1 PERSONA",acomp_cantidad:1},{id:55,name:"ARMA TU LONCH #1",price:16e3,description:"ALMUERZO 1 BASE + ENSALADA + 1 ACOMPAÑANTE",category_id:5,porcion:"1 PERSONA",acomp_cantidad:1},{id:56,name:"ARMA TU LONCH #2",price:19e3,description:"ALMUERZO 1 BASE + 2 ACOMPAÑANTES",category_id:5,porcion:"1 PERSONA",acomp_cantidad:2}]},Ut={category:{id:7,name:"Shows"},products:[{id:200,name:"SHOW DE MEGA QUESO x 400 gr",price:18500,description:"",category_id:7},{id:201,name:"SHOW DE CHICHARRON x 450 gr",price:34e3,description:"",category_id:7},{id:202,name:" SHOW DE CARNE ASADA 450 gr",price:32500,description:"",category_id:7},{id:203,name:"SHOW DE COSTILLA x 450 gr",price:32500,description:"",category_id:7}]},le=e(1.042),Ie={salchipapas:Dt,burgers:xt,shows:Ut,almuerzos:kt,bebidas:Nt,malteadas:Tt};e({});e({});e([{name:"Menu",to:"",menus:[{category:{id:1,name:"Salchipapas"},products:[]}]},{name:"Sedes",to:"sedes",menus:[{name:"Cali",submenus:["la potente","la mas potente"]},{name:"Bogota",submenus:["la potente","la mas potente","la mejor dicho pues"]},{name:"Palmira",submenus:["la potente"]},{name:"Jamundi",submenus:["la potente"]},{name:"Tulua",submenus:["la potente"]}]},{name:"Carta",menus:[],to:"menu"}]);e(!1);e([]);const we=n=>(te("data-v-9ee8be59"),n=n(),oe(),n),$t={class:"header col-12",style:{display:"flex","justify-content":"space-between","background-color":"rgb(255, 255, 255)","z-index":"99",position:"absolute",top:"0rem",left:"0",height:"min-content"}},Bt={class:"mayuscula md:pl-4 nombre col-9 text-l lg:text-xl p-0 text-left",style:{color:"black","font-weight":"bold"}},Ht={class:"md:pr-4 precio col-3 text-l lg:text-xl p-0 text-right",style:{color:"black","font-weight":"bold"}},Gt={class:"col-12 pb-6",style:{display:"flex","justify-content":"center"}},Vt={class:"grid col-12 p-0 md:p-2 m-auto"},jt={class:"col-12 p-0 mt-0 shadow-5",style:{display:"flex","align-items":"center","max-height":"45rem","background-color":"white","border-radius":"0.5rem"}},Wt=["src"],zt={class:"col-12 p-0 mt-0 shadow-5",style:{display:"flex","align-items":"center","max-height":"45rem","background-color":"white","border-radius":"0.5rem"}},Qt={style:{width:"100%","aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center"}},Yt=we(()=>o("p",{class:"col-12 p-0",style:{"font-weight":"bold",color:"black"}}," DESCRIPCION ",-1)),Jt={class:"col-12 text-l p-0",style:{color:"black","text-transform":"capitalize"}},Zt={style:{color:"black"}},qt={class:"mb-2"},Ft={class:"mb-2 text-center"},Kt={class:"mt-2"},Xt={style:{display:"flex",width:"100%",gap:"1rem","justify-content":"space-between"}},eo={class:"text-sm adicion",style:{"text-transform":"lowercase"}},to={key:0,style:{display:"flex","align-items":"center"}},oo={key:0,class:"pl-2 py-1 text-sm"},ao={key:1,class:"pl-2 py-1 text-sm"},ro=we(()=>o("hr",null,null,-1)),io={key:0,class:"col-12 md:col-6 add-car pt-5",style:{"pointer-events":"none",display:"flex","align-items":"end","justify-content":"center",background:"linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%)",height:"5rem",bottom:"0rem",right:"0"}},so={__name:"VistaProducto",setup(n){new Audio("/sounds/sarpazo.mp3");const a=e({}),r=e(!1),_=()=>{r.value=!0},y=()=>{r.value=A.value=p.value=!1},A=e(!1),g=()=>{A.value=!0},p=e(!1),h=()=>{p.value=!0},I=(t,i)=>{if(t.checked){const S={id:t.aditional_item_instance_id,name:t.aditional_item_name,price:t.aditional_item_price,group:i};a.value[S.id]={...S,quantity:t.quantity||1}}else delete a.value[t.aditional_item_instance_id]},j=t=>{if(t.checked){const i={id:t.aditional_item_instance_id,name:t.aditional_item_name,price:t.aditional_item_price};a.value[i.id].quantity++}},N=t=>{a.value[t.aditional_item_instance_id].quantity>1&&a.value[t.aditional_item_instance_id]&&a.value[t.aditional_item_instance_id].quantity--},W=t=>{const i=Object.values(a.value);s.addProductToCart(t),i.forEach(S=>{s.addAdditionToCart(S),console.log(S)}),a.value={},s.setVisible("currentProduct",!1)},d=e([]),s=ge();e({});const M=e(),T=e(),k=ae(),U=e(),x=e();D(async()=>{const t=await s.currentProduct.id;t&&(d.value=await se.getAditional(t))}),w(()=>s.currentProduct,async()=>{const t=await s.currentProduct.id;t&&(d.value=await se.getAditional(t))}),w(()=>s.visibles.addAdditionToCart,async t=>{if(!t)a.value={},d.value=[];else{const i=await s.currentProduct.id;i&&(d.value=await se.getAditional(i))}},{deep:!0}),k.matched.some(t=>t.path==="/admin-products")||k.matched.some(t=>t.path.startsWith("/admin-products/"))||k.matched.some(t=>t.path==="/entregas")||k.matched.some(t=>t.path.startsWith("/entregas/")),e(L.currentRoute);const $=e(1),B=e(window.innerWidth);console.log(B.value);const z=()=>{B.value=window.innerWidth},Q=pe(()=>B.value<768);Be(),window.addEventListener("resize",z),Ce(()=>{window.removeEventListener("resize",z)});const Y=localStorage.getItem("version_tienda");Y?parseInt(Y)!==$.value&&(localStorage.setItem("version_tienda",$.value),localStorage.removeItem("menu"),localStorage.removeItem("cart"),localStorage.removeItem("currentNeigborhood"),Rt(),console.log("Version updated. Do additional actions here.")):localStorage.setItem("version_tienda",$.value);const H=async()=>{if(!C.value.grupo_salsa_id){M.value=[];return}try{let t=await fetch(`${b}/grupo-salsas/${C.value.grupo_salsa_id}/salsas`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let i=await t.json();M.value=i}catch(t){console.error("Error fetching data: ",t)}},Ae=async()=>{if(!C.value.grupo_cambio_id){T.value=[];return}try{let t=await fetch(`${b}/grupo-cambios/${C.value.grupo_cambio_id}/cambios`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let i=await t.json();T.value=i}catch(t){console.error("Error fetching data: ",t)}},he=async()=>{if(!C.value.grupo_topping_id){U.value=[];return}try{let t=await fetch(`${b}/grupo-toppings/${C.value.grupo_topping_id}/toppings`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let i=await t.json();U.value=i}catch(t){console.error("Error fetching data: ",t)}},Se=async()=>{if(!C.value.grupo_acompanante_id){U.value=[];return}try{let t=await fetch(`${b}/grupo-acompanantes/${C.value.grupo_acompanante_id}/acompanantes`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let i=await t.json();x.value=i}catch(t){console.error("Error fetching data: ",t)}},ve=async()=>{if(!C.value.grupo_adicional_id){d.value=[];return}try{let t=await fetch(`${b}/grupo-adicionales/${C.value.grupo_adicional_id}/adicionales`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let i=await t.json();d.value=i}catch(t){console.error("Error fetching data: ",t)}};e(localStorage.getItem("currentNeigborhood")),D(()=>{he(),H(),Ae(),ve(),Se();const t=JSON.parse(localStorage.getItem("cart")),i=t&&t.products?t.products.length:0;if(wt.value=i,localStorage.getItem("cart")&&(Ct.value=JSON.parse(localStorage.getItem("cart"))),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify({products:[],total:0})),console.log(JSON.parse(localStorage.getItem("menu"))),localStorage.getItem("menu")&&localStorage.getItem("versionMenu")&&parseFloat(localStorage.getItem("versionMenu"))==le.value){const S=parseFloat(localStorage.getItem("versionMenu"));console.log(S,le.value),console.log("habia"),G.value[0].menus=JSON.parse(localStorage.getItem("menu"))}else G.value[0].menus=Ie,localStorage.setItem("menu",JSON.stringify(Ie)),localStorage.setItem("versionMenu",le.value),console.log("nuevo menu"),localStorage.removeItem("cart"),localStorage.removeItem("currentNeigborhood")}),e({Caney:"https://drive.google.com/file/d/1LpmzmgBDOR-YAT4_SstyAldl1Nid-CF2/view?usp=sharing","La Flora":"https://backend.novatocode.online/read-site-cover/IMPERIO%20CANEY",Palmira:"	https://backend.novatocode.online/read-site-cover/IMPERIO%20PALMIRA",Bretaña:"https://backend.novatocode.online/read-site-cover/IMPERIO%20BRETA%C3%91A",Jamundi:"https://backend.novatocode.online/read-site-cover/IMPERIO%20JAMUNDI",Tulua:"https://backend.novatocode.online/read-site-cover/IMPERIO%20TULUA",default:""}),e({site:{name:"default"}});const Re=e();e(!1);const ye=e({}),Le=()=>{const t=[];ye.value.sites.map(i=>{i.neigborhoods.map(S=>{t.push({name:S.name,neigborhood:S,site:i}),console.log(i)})}),Re.value=t};w(ye,()=>{Le()}),w(Lt,(t,i)=>{currentAcompanantes.value=[],currentToppings.value=[],Mt.value=[],Pt.value=[],currentCambios.value=[],T.value=[],M.value=[],U.value=[],d.value=[],x.value=[],he(),H(),Ae(),ve(),Se()}),e(localStorage.getItem("currenSiteWsp")),console.log(L.currentRoute),pe(()=>({"layout-topbar-menu-mobile-active":Me.value}));const Me=e(!1);return e(JSON.parse(localStorage.getItem("currentNeigborhood"))),(t,i)=>{const S=f("Button"),Pe=f("ProgressSpinner"),Ne=f("Checkbox"),xe=f("InputText"),De=f("Dialog");return c(),ue(De,{close:y(),closable:!1,visible:l(s).visibles.currentProduct,"onUpdate:visible":i[2]||(i[2]=P=>l(s).visibles.currentProduct=P),style:_e([{width:"500px"},{"justify-content":"center","background-color":"white",position:"relative","border-radius":"1rem","padding-top":"2rem"}]),modal:!0,class:"p-fluid pt-8 m-3"},{footer:V(()=>[o("div",Gt,[m(S,{class:"",onClick:i[0]||(i[0]=P=>W(l(s).currentProduct)),label:"Agregar al carrito",icon:"pi pi-shopping-cart",style:{position:"absolute","pointer-events":"all","background-color":"black",color:"white",width:"auto",border:"none",padding:"0.5rem 3rem","font-weight":"bold"}})])]),default:V(()=>[o("div",$t,[o("p",Bt,O(l(s).currentProduct.product_name),1),o("p",Ht,O(l(ie)(l(s).currentProduct.price)),1)]),m(S,{onClick:i[1]||(i[1]=P=>l(s).setVisible("currentProduct",!1)),severity:"danger",icon:"pi pi-times",style:{width:"2.5rem",height:"2.5rem",border:"none",position:"absolute",right:"-1rem",top:"-1rem","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center","z-index":"99"}}),o("div",Vt,[o("div",jt,[F(o("img",{class:R([r.value?"cargado":"sin-cargar","col-12 p-2 m-0"]),onload:_,src:`${l(b)}/read-photo-product/${l(s).currentProduct.img_identifier}/600`,alt:"",style:{width:"100%","object-fit":"contain","aspect-ratio":"1/1"}},null,10,Wt),[[K,r.value]])]),F(o("div",zt,[o("div",Qt,[m(Pe,{style:{width:"100px",height:"100px"},strokeWidth:"5",animationDuration:".2s","aria-label":"Custom ProgressSpinner"})])],512),[[K,!r.value]]),o("div",{class:R(["col-12 p-0 my-5",Q.value?"static":"scroll"]),style:{}},[Yt,o("p",Jt,O(l(s).currentProduct.product_description.toLowerCase()),1),o("div",Zt,[(c(!0),u(J,null,Z(d.value,P=>(c(),u("div",{key:P.category},[o("div",qt,[o("span",Ft,[o("b",null,O(P.category),1)]),o("div",Kt,[(c(!0),u(J,null,Z(P.items,v=>{var be,fe;return c(),u("div",{key:v.aditional_item_instance_id,style:{display:"flex",gap:"1rem","align-items":"center"}},[m(Ne,{class:"my-1",binary:!0,modelValue:v.checked,"onUpdate:modelValue":re=>v.checked=re,onChange:()=>I(v,P.category)},null,8,["modelValue","onUpdate:modelValue","onChange"]),o("div",Xt,[o("span",eo,O(v.aditional_item_name),1),v.checked?(c(),u("span",to,[v.aditional_item_price>0?(c(),u("span",oo,[o("b",null,O(l(ie)(v.aditional_item_price*((be=a.value[v.aditional_item_instance_id])==null?void 0:be.quantity))),1)])):E("",!0),m(S,{onClick:re=>N(v),class:"ml-2",severity:"danger",style:{width:"2rem",height:"1.5rem",border:"none"},icon:"pi pi-minus"},null,8,["onClick"]),m(xe,{modelValue:(fe=a.value[v.aditional_item_instance_id])==null?void 0:fe.quantity,readonly:"",style:{width:"2rem",border:"none",height:"1.5rem"},class:"p-0 text-center"},null,8,["modelValue"]),m(S,{onClick:re=>j(v),severity:"danger",style:{width:"2rem",height:"1.5rem",border:"none"},icon:"pi pi-plus"},null,8,["onClick"])])):v.aditional_item_price>0?(c(),u("span",ao,[o("b",null,O(l(ie)(v.aditional_item_price)),1)])):E("",!0)])])}),128)),ro])])]))),128))])],2),Q.value?E("",!0):(c(),u("div",io))]),F(o("img",{onLoad:g,class:R(r.value?"cargado-left-hand":"sin-cargar"),style:{"pointer-events":"none",position:"absolute",right:"95%",top:"20%"},src:"/images/garra-sm-hor.png",alt:""},null,34),[[K,r.value]]),F(o("img",{onLoad:h,class:R(r.value?"cargado-right-hand":"sin-cargar"),style:{"pointer-events":"none",position:"absolute",left:"95%",top:"20%"},src:"/images/garra-sm-izq.png",alt:""},null,34),[[K,r.value]])]),_:1},8,["close","visible"])}}},no=ee(so,[["__scopeId","data-v-9ee8be59"]]),co={class:"px-0 mx-0 mt-5",style:{"min-height":"100vh"}},lo={key:0,style:{height:"80vh",display:"flex","align-items":"center","justify-content":"center"}},uo=o("p",{class:"text-center text-4xl md:text-6xl"},[o("b",null,"Por favor seleccione una categoria")],-1),po=[uo],mo={style:{position:"fixed",overflow:"hidden","background-color":"white","border-radius":"0 1rem 1rem 0",left:"0",top:"12rem",display:"flex","flex-direction":"column"}},go={style:{display:"flex","align-items":"center",width:"2rem","flex-direction":"column"}},_o=["src"],Ao={key:0,style:{"border-top":".1rem solid white"}},Eo={__name:"MenuView",setup(n){const a=ae(),r=X();e(L.currentRoute),e(localStorage.getItem("currentNeigborhood"));const _=e(window.innerWidth);pe(()=>_.value<800);const y=()=>{_.value=window.innerWidth};D(()=>{window.addEventListener("resize",y),Ge()}),Ce(()=>{window.removeEventListener("resize",y)});const A=e(G.value[0].menus[0]);return e({}),w(G,()=>{A.value={category:G.value[0].menus[1].category,products:G.value[0].menus[1].products},console.log("cambio")}),D(async()=>{He.value=!0}),(p,h)=>{const I=f("RouterView"),j=f("Button");return c(),u("div",co,[m(ct),m(gt),m(I),m(It),l(a).path=="/call-center-vender"?(c(),u("div",lo,po)):E("",!0),m(no),o("div",mo,[(c(),u(J,null,Z([{name:"S",id:1,imagen:"https://www.salchimonster.com/images/logo.png"},{name:"B",id:2,imagen:"https://burgermonsterr.com/images/LOGO.png"},{name:"P",id:4,imagen:"https://papasmonster.com/images/LOGO.png"}],(N,W)=>o("div",go,[m(j,{size:"small",text:"",label:N.name,class:"text-white",onClick:d=>l(r).restaurant=N.id},{default:V(()=>[o("img",{style:{width:"2rem"},src:N.imagen,alt:""},null,8,_o)]),_:2},1032,["label","onClick"]),W!=2?(c(),u("span",Ao)):E("",!0)])),64))])])}}};export{Eo as default};
