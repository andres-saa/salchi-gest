import{f as xe}from"./formatoPesos-2a38d2e7.js";import{u as Z,a as pe}from"./site-ce64542d.js";/* empty css                                                                    */import{r as e,h as N,U as O,i as P,j as Oe,_ as F,k as M,a as b,o as c,f as le,w as z,b as o,m as I,d as g,c as u,u as d,n as C,q as De,t as f,s as me,p as K,g as X,F as J,e as q,v as ee,x as Te,P as ke,y as de,z as Ue,A as Ee,B as Q,C as Y}from"./index-f28936d7.js";import"./ventas-c15014a5.js";import{f as re}from"./formatoPesos-8aa989a0.js";import{a as se}from"./aditionalService-e3bfa237.js";e({});e({});const B=e([{name:"Menu",to:"",menus:[{category:{id:1,name:"Salchipapas"},products:[]}]},{name:"Sedes",to:"sedes"},{name:"Carta",to:"menu"},{name:"Rastrear pedido",to:"rastrear-pedido"},{name:"Colaboraciones",to:"colaboraciones"}]),$e=e(!1);e(1.042);e({products:[],total:0});e([]);e(0);const He=e();N(async()=>{let i={};localStorage.getItem("currentNeigborhood")?(i=JSON.parse(localStorage.getItem("currentNeigborhood")).currenNeigborhood,Be(i.neighborhood_id).then(a=>He.value=a)):i="definir domicilio"});const Be=async i=>{try{const a=await fetch(`${O}/neighborhood/${i}`);if(!a.ok)console.log("paila");else return data=await a.json(),data}catch{}};e(!1);const ue=e(!1);e({});e({});e({});e({});e(!1);e([]);e([]);e([]);e([]);e([]);e(!1);const ne=e(P.currentRoute);e();e(localStorage.getItem("currentNeigborhood"));const Ge=()=>{const i=e(localStorage.getItem("currentNeigborhood"));(ne.value.fullPath=="/menu"||ne.value.fullPath=="/sedes")&&(ue.value=!1),!i.value&&ne.value.fullPath!="/menu"&&(ue.value=!0)},Ve={async getSiteById(i){try{const a=await Oe.get(`${O}/site/${i}`);return a.status===200?a.data:(console.error("An error occurred while fetching the ingredients:",a.status),null)}catch(a){return console.error("An error occurred while fetching the ingredients:",a),null}}};const W=i=>(K("data-v-a7e3ed67"),i=i(),X(),i),je=W(()=>o("b",{style:{color:"black"}},null,-1)),We={style:{width:"100%",display:"flex","flex-direction":"column","align-items":"center","border-radius":"","background-color":""}},Qe={class:"field col-12 pb-0 p-0",style:{width:"100%"}},Ye={style:{display:"flex",width:"min-content","justify-content":"start",gap:"1rem","align-items":"center"}},ze=W(()=>o("label",{for:"site_id",style:{color:"black","min-width":"max-content"}},"en que ciudad te encuentras? ",-1)),Je={class:"field col-12 mt-0 pt-0 p-0",style:{width:"100%",gap:"",display:"block"}},qe={style:{display:"flex",width:"min-content","justify-content":"start",gap:"1rem","align-items":"center"}},Ze=W(()=>o("label",{for:"site_id",style:{color:"black","min-width":"max-content"}},"Cual es tu barrio? ",-1)),Fe={key:0,style:{display:"flex","min-width":"max-content"}},Ke=W(()=>o("p",{class:"pl-2",style:{color:"black"}},"buscando barrios...",-1)),Xe={class:"field col-12 p-0",style:{width:"100%",height:"15rem",position:"relative"}},et={class:"img-cont col-12 p-0",style:{overflow:"hidden",position:"relative"}},tt=["src"],ot={style:{position:"absolute",color:"white",top:"0",left:"0",width:"100%","text-transform":"uppercase",height:"100%",display:"flex",padding:"","align-items":"end","border-radius":"0.5rem"}},at={key:0,class:"col-12 py-1",style:{"background-color":"rgba(0, 0, 0, 0.7)","text-align":"center",height:"min-content",width:"100%","font-weight":"500"}},it=W(()=>o("span",{class:"text-xl lg:text-lg p-0",style:{}}," SALCHIMONSTER",-1)),rt={style:{"text-transform":"uppercase"},class:"text-xl lg:text-lg p-0"},st={class:"field col-12 p-0",style:{width:"100%"}},nt={__name:"siteDialog",setup(i){const a=Z(),n=pe();M(()=>a.location.site.site_id,()=>{n.cart={products:[],total_cost:0,additions:[]},location.reload()});const _=e({ciudad:!1,barrio:!1}),y=e([]),h=e({}),m=e({});e(localStorage.getItem("currentNeigborhood"));const p=e({site:{name:"default"}}),A=e(),R=()=>{ae(m.value.city_id).then(l=>A.value=l)};M(m,()=>{R()}),M(p,async()=>{h.value=await Ve.getSiteById(p.value.site_id).then(l=>h.value=l)});const te=async()=>{const l={site:h.value,neigborhood:p.value,city:m.value};a.setLocation(l),a.setVisible("currentSite",!1),ue.value=!1},oe=async()=>{try{_.value.ciudad=!0;const l=await fetch(`${O}/cities`);if(l.ok){const r=await l.json();return _.value.ciudad=!1,r}}catch{_.value.ciudad=!1}},ae=async l=>{try{_.value.barrio=!0;const r=await fetch(`${O}/neighborhoods/by-city/${l}`);if(r.ok){const w=await r.json();return _.value.barrio=!1,w}}catch{_.value.barrio=!1}};return N(async()=>{oe().then(l=>y.value=l)}),(l,r)=>{const w=b("ProgressSpinner"),k=b("Dropdown"),x=b("Button"),U=b("Dialog");return c(),le(U,{visible:d(a).visibles.currentSite,"onUpdate:visible":r[4]||(r[4]=D=>d(a).visibles.currentSite=D),closable:!1,style:me([{width:"380px"},{"background-color":"white",position:"relative","border-radius":"1rem","padding-top":"2rem"}]),header:"Seleccion de sede",modal:!0,class:"p-fluid m-3"},{default:z(()=>{var D,$,H,G,V,j;return[je,o("div",We,[o("div",Qe,[o("div",Ye,[ze,_.value.ciudad?(c(),le(w,{key:0,style:{width:"20px",height:"20px"},strokeWidth:"8",fill:"var(--white)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):I("",!0)]),g(k,{class:"",onClick:r[0]||(r[0]=()=>p.value={site:{site_name:"default"}}),modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=T=>m.value=T),options:y.value,placeholder:"SELECCIONA UNA CIUDAD",optionLabel:"city_name",required:"true"},null,8,["modelValue","options"])]),o("div",Je,[o("div",qe,[Ze,_.value.barrio?(c(),u("div",Fe,[g(w,{style:{width:"20px",height:"20px"},strokeWidth:"8",fill:"var(--white)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"}),Ke])):I("",!0)]),g(k,{style:{},filter:"",modelValue:p.value,"onUpdate:modelValue":r[2]||(r[2]=T=>p.value=T),disabled:!A.value,options:A.value,optionLabel:"name",required:"true",placeholder:"Selecciona un barrio",filterPlaceholder:"Escribe el nombre de tu barrio"},null,8,["modelValue","disabled","options"])]),o("div",Xe,[o("div",et,[(D=p.value)!=null&&D.site_id?(c(),u("img",{key:0,src:`${d(O)}/read-product-image/600/site-${($=p.value)==null?void 0:$.site_id}`,class:C(((H=p.value.site)==null?void 0:H.name)=="default"?"default-image":""),style:{border:"1px solid rgb(255, 255, 255)",width:"100%","background-color":"rgb(255, 255, 255)",height:"100%","object-fit":"cover","border-radius":"0.2rem"},alt:""},null,10,tt)):I("",!0),o("div",ot,[(G=p.value)!=null&&G.site_id?(c(),u("p",at,[it,De(),o("span",rt,f((V=h.value)==null?void 0:V.site_name),1)])):I("",!0)])])]),o("div",st,[g(x,{severity:"help",label:"Guardar",onClick:te,disabled:!((j=p.value)!=null&&j.name),style:{width:"100%",border:"none",padding:"10px 20px","text-align":"center","background-color":"black"},b:""},null,8,["disabled"])])]),g(x,{onClick:r[3]||(r[3]=T=>d(a).setVisible("currentSite",!1)),icon:"pi pi-times",severity:"danger",rounded:"",style:{width:"2.5rem",height:"2.5rem",border:"none",position:"absolute",right:"-1rem",top:"-1rem"}})]}),_:1},8,["visible"])}}},ct=F(nt,[["__scopeId","data-v-a7e3ed67"]]),lt=Z(),dt={async getCategories(){const i=lt.location.site.site_id;if(i)try{const a=await Oe.get(`${O}/categories/${i}`);return a.status===200?a.data:(console.error("An error occurred while fetching the ingredients:",a.status),null)}catch(a){return console.error("An error occurred while fetching the ingredients:",a),null}else return[]}};const ut=i=>(K("data-v-0a96fb9d"),i=i(),X(),i),pt={class:"d-flex p lg:justify-content-center align-items-center p-0 md:p-1",style:{"overflow-x":"auto",display:"flex",width:"100%","background-color":"rgba(255, 255, 255, 0.913)"}},mt=ut(()=>o("span",{class:"text-lg",style:{"min-width":"max-content"}},"Nuevo pedido",-1)),gt=["onClick"],_t={class:"text-lg",style:{"min-width":"max-content"}},At={__name:"BarraCategorias",setup(i){const a=Z(),n=e([{name:"CARGANDO ..."}]),_=(h,m)=>{P.push({name:"call-center-vender-menu",params:{menu_name:h,category_id:m}})};N(async()=>{n.value=await dt.getCategories()});const y=h=>ee().path.includes(h);return(h,m)=>{const p=b("Button");return c(),u("div",{class:C([n.value.length>1?"apear":"hide","shadow-1 d-flex lg:justify-content-center align-items-center mb-5 p-0 md:p-0"]),style:{position:"sticky",top:"3rem","z-index":"99","background-color":"white",height:"max-content","min-height":"max-content"}},[o("div",pt,[g(p,{onClick:m[0]||(m[0]=A=>d(a).visibles.currentSite=!0),severity:"help",class:"py-2 ml-4 text-lg titulo",style:{"font-weight":"400","border-radius":".3rem","text-transform":"uppercase","min-width":"max-content"}},{default:z(()=>[mt]),_:1}),(c(!0),u(J,null,q(n.value,A=>(c(),u("div",{key:A.id,class:"p-1"},[o("button",{onClick:R=>_(A.category_name,A.category_id),class:C([y(A.category_id)?"selected menu-button":"menu-button","p-2 text-lg titulo"]),style:{"font-weight":"400","text-transform":"uppercase","min-width":"max-content"}},[o("span",_t,f(A.category_name),1)],10,gt)]))),128))])],2)}}},ht=F(At,[["__scopeId","data-v-0a96fb9d"]]);const St=i=>(K("data-v-88fb4d20"),i=i(),X(),i),vt={class:"col-12 py-0 px-4",style:{display:"flex",cursor:"pointer",position:"fixed",bottom:"0",left:"0","justify-content":"center"}},yt={class:"carro",style:{display:"flex","background-color":"","align-items":"center","justify-content":"center",gap:"1rem"}},bt=["src"],ft={key:0,style:{width:"auto","border-radius":"50%",height:"100%","object-fit":"contain"},alt:""},Ot={style:{"font-weight":"bold"},class:"text-xl"},Et=St(()=>o("p",{class:"h2",style:{position:"absolute",top:"0"}},null,-1)),It={key:0},Ct={class:"",style:{border:"none","background-color":"transparent",display:"flex","align-items":"center","justify-content":"center"}},Rt={__name:"barra",setup(i){e(localStorage.getItem("currenSiteWsp"));const a=pe();e(P.currentRoute);let n;ee();const _=()=>{y.value=!1,clearTimeout(n),n=setTimeout(()=>{y.value=!0},500)};N(()=>{window.addEventListener("scroll",_)}),Te(()=>{window.removeEventListener("scroll",_),clearTimeout(n)});const y=e(!0),h=()=>{P.push("/call-center-vender/cart")};return(m,p)=>{const A=b("Button");return c(),u("div",vt,[o("div",{style:me([y.value?"":"transform: translateY(5rem);opacity:0",{display:"flex",gap:"2rem","border-radius":"10rem","align-items":"center",position:"relative",bottom:"1rem","max-width":"min-content","justify-content":"center",height:"3.5rem","background-color":"rgb(255, 255, 255)","box-shadow":"0px 0px 10px rgba(0, 0, 0, 0.5)"}]),class:"barra-carrito px-5"},[o("div",{onClick:h,style:{}},[o("button",yt,[o("i",{style:{"font-size":"2rem"},class:C(["icono",d(ke).SHOPPING_CART])},null,2),(c(!0),u(J,null,q(d(a).cart.products.slice(0,4),R=>(c(),u("div",{style:{position:"relative"},key:R.id},[g(A,{class:"p-0",label:R.quantity,severity:"danger",rounded:"",style:{width:"1.2rem","font-size":"0.8rem",height:"1.2rem",top:"-.3rem",right:"-.5rem",position:"absolute"}},null,8,["label"]),o("img",{class:"img-cart",onMouseover:p[0]||(p[0]=()=>m.vueMenu=!0),style:{height:"2rem","object-fit":"contain"},src:`https://backend.salchimonster.com/read-product-image/96/${R.product.product_name}`,alt:""},null,40,bt)]))),128)),d(a).cart.products.length>4?(c(),u("div",ft,[o("p",Ot," +"+f(d(a).cart.products.length-4),1)])):I("",!0)])]),Et,d(a).cart.products.length>0&&m.screenWidth>720?(c(),u("a",It,[o("button",Ct,[o("span",{class:C(m.topbarMenuClasses),style:{"font-size":"2rem","font-weight":"bold"}},f(d(xe)(Number(m.calcularTotalCarrito()))),3)])])):I("",!0)],4)])}}},wt=F(Rt,[["__scopeId","data-v-88fb4d20"]]),Lt=e({products:[],total:0});e([]);const Mt=e(0);function Nt(){document.cookie.split(";").forEach(a=>{const[n]=a.split("=");document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"})}const be=e();localStorage.getItem("currentNeigborhood")?be.value=JSON.parse(localStorage.getItem("currentNeigborhood")).currenNeigborhood:be.value="definir domicilio";const Pt=e(!1);e(!1);const E=e({});e({});e({});e({});const xt=e([]),Dt=e([]);e([]);e(P.currentRoute);e();e(localStorage.getItem("currentNeigborhood"));const Tt={category:{id:3,name:"Bebidas"},products:[{id:37,name:"COCACOLA ZERO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:38,name:"PREMIO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:39,name:"COCACOLA 1.5 LITROS",price:8e3,description:"BEBIDAS",category_id:3},{id:41,name:"AGUA CRISTAL 400ML",price:4e3,description:"BEBIDAS",category_id:3},{id:42,name:"COCACOLA ORIGINAL 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:80,name:"QUATRO 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:81,name:"SPRITE 400ML",price:4500,description:"BEBIDAS",category_id:3},{id:123,name:"JUGO DE LULO",price:8e3,description:"BEBIDAS",category_id:3},{id:124,name:"JUGO DE UVA",price:8e3,description:"BEBIDAS",category_id:3},{id:125,name:"JUGO DE MANGO",price:8e3,description:"BEBIDAS",category_id:3},{id:126,name:"BUDWEISER",price:8e3,description:"BEBIDAS",category_id:3},{id:127,name:"CORONA",price:9500,description:"BEBIDAS",category_id:3}]},kt={category:{id:2,name:"Burgers"},products:[{id:43,name:"BURGERMONSTER",price:25e3,description:"CARNE ANGUS 150 GR, CEBOLLA CARAMELIZADA, SALCHICHA RANCHERA, QUESO AMERICANO, PAN BRIOCHE, LECHUGA Y TOMATE",category_id:2},{id:50,name:"1 burger monster + 1 malteada de ariquipe + papas",price:35e3,description:"",category_id:2},{id:51,name:"burger monster + 1 malteada de frutos tropicales + papas",price:35e3,description:"",category_id:2},{id:52,name:"burger monster + 1 malteada de chocolate  + papas",price:35e3,description:"",category_id:2}]},Ut={category:{id:1,name:"Salchipapas"},products:[{id:1,name:"CLASICMONSTER",price:28900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, RIPIO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:2,name:"MADURIMONSTER",price:34900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, MADURO GUAYABO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:3,name:"BACONMONSTER",price:37900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, BACON, QUESO CHEDDAR Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:4,name:"CHORIMONSTER",price:41900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, CHORIZO, MAICITOS Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:5,name:"POLLIMONSTER",price:41900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, POLLO EN SALSA A LA NARANJA, HUEVOS DE CODORNIZ Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:6,name:"RANCHIMONSTER",price:46e3,description:"PAPA AMARILLA, SALCHICHA RANCHERA, QUESO GRATINADO, MAICITOS Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:7,name:"NACHIMONSTER",price:48500,description:"PAPA AMARILLA, CARNE DESMECHADA, GUACAMOLE, QUESO CHEDDAR, QUESO CON MAIZ, PICO DE GALLO, NACHOS Y SALSAS",category_id:1,porcion:"2 PERSONAS"},{id:8,name:"COSTIMONSTER",price:47900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, COSTILLA AHUMADA EN SALSA BUFALO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:9,name:"MATA HAMBRE",price:48900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, POLLO DESMECHADO, HUEVO DE CODORNIZ Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:10,name:"PORKYMONSTER",price:49e3,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, TROZOS DE CHICHARRON CARNUDO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:11,name:"LA DE SIEMPRE",price:53900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO,CARNE DESMECHADA, GUACAMOLE, PICO DE GALLO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:12,name:"MIXTICA",price:61900,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, QUESO GRATINADO, CARNE DESMECHADA, POLLO DESMECHADO, GUACAMOLE, PICO DE GALLO Y SALSAS.",category_id:1,porcion:"2 PERSONAS"},{id:13,name:"SALCHIMONSTER",price:119e3,description:"PAPA AMARILLA, SALCHICHA PREMIUM SM, POLLO EN SALSA A LA NARANJA, BACON PREMIUM, COSTILLA AHUMADA EN SALSA BUFALO, CHORIZO, MAICITOS, QUESO GRATINADO, RIPIO, HUEVO DE CODORNIZ, MADURO GUAYABO Y SALSAS.",category_id:1,porcion:"5-6 PERSONAS"}]},$t={category:{id:4,name:"Malteadas"},products:[{id:47,name:"CHOCOMONSTER",price:1e4,description:"MALTEADA DE CHOCOLATE (TOPINGS OPCIONALES)",category_id:4},{id:48,name:"TROPIMONSTER",price:1e4,description:"MALTEADA DE FRUTOS TROPICALES (TOPINGS OPCIONALES)",category_id:4},{id:49,name:"QUIPEMONSTER",price:1e4,description:"MALTEADA DE AREQUIPE (TOPINGS OPCIONALES)",category_id:4}]},Ht={category:{id:5,name:"Almuerzos"},products:[{id:53,name:"COMBO ALMUERZO #2",price:22e3,description:"COMBO ALMUERZO 1 BASE + 2 ACOMPAÑANTES + GASEOSA 400 ML",category_id:5,porcion:"1 PERSONA",acomp_cantidad:2},{id:54,name:"COMBO ALMUERZO #1",price:19e3,description:"COMBO ALMUERZO 1 BASE + ENSALADA + 1 ACOMPAÑANTE + GASEOSA 400 ML",category_id:5,porcion:"1 PERSONA",acomp_cantidad:1},{id:55,name:"ARMA TU LONCH #1",price:16e3,description:"ALMUERZO 1 BASE + ENSALADA + 1 ACOMPAÑANTE",category_id:5,porcion:"1 PERSONA",acomp_cantidad:1},{id:56,name:"ARMA TU LONCH #2",price:19e3,description:"ALMUERZO 1 BASE + 2 ACOMPAÑANTES",category_id:5,porcion:"1 PERSONA",acomp_cantidad:2}]},Bt={category:{id:7,name:"Shows"},products:[{id:200,name:"SHOW DE MEGA QUESO x 400 gr",price:18500,description:"",category_id:7},{id:201,name:"SHOW DE CHICHARRON x 450 gr",price:34e3,description:"",category_id:7},{id:202,name:" SHOW DE CARNE ASADA 450 gr",price:32500,description:"",category_id:7},{id:203,name:"SHOW DE COSTILLA x 450 gr",price:32500,description:"",category_id:7}]},ce=e(1.042),fe={salchipapas:Ut,burgers:kt,shows:Bt,almuerzos:Ht,bebidas:Tt,malteadas:$t};e({});e({});e([{name:"Menu",to:"",menus:[{category:{id:1,name:"Salchipapas"},products:[]}]},{name:"Sedes",to:"sedes",menus:[{name:"Cali",submenus:["la potente","la mas potente"]},{name:"Bogota",submenus:["la potente","la mas potente","la mejor dicho pues"]},{name:"Palmira",submenus:["la potente"]},{name:"Jamundi",submenus:["la potente"]},{name:"Tulua",submenus:["la potente"]}]},{name:"Carta",menus:[],to:"menu"}]);e(!1);e([]);const Ie=i=>(K("data-v-5b16136b"),i=i(),X(),i),Gt={class:"header col-12",style:{display:"flex","justify-content":"space-between","background-color":"rgb(255, 255, 255)","z-index":"99",position:"absolute",top:"0rem",left:"0",height:"min-content"}},Vt={class:"mayuscula md:pl-4 nombre col-9 text-l lg:text-xl p-0 text-left",style:{color:"black","font-weight":"bold"}},jt={class:"md:pr-4 precio col-3 text-l lg:text-xl p-0 text-right",style:{color:"black","font-weight":"bold"}},Wt={class:"col-12 pb-6",style:{display:"flex","justify-content":"center"}},Qt={class:"grid col-12 p-0 md:p-2 m-auto"},Yt={class:"col-12 p-0 mt-0 shadow-5",style:{display:"flex","align-items":"center","max-height":"45rem","background-color":"white","border-radius":"0.5rem"}},zt=["src"],Jt={class:"col-12 p-0 mt-0 shadow-5",style:{display:"flex","align-items":"center","max-height":"45rem","background-color":"white","border-radius":"0.5rem"}},qt={style:{width:"100%","aspect-ratio":"1 / 1",display:"flex","align-items":"center","justify-content":"center"}},Zt=Ie(()=>o("p",{class:"col-12 p-0",style:{"font-weight":"bold",color:"black"}}," DESCRIPCION ",-1)),Ft={class:"col-12 text-l p-0",style:{color:"black","text-transform":"capitalize"}},Kt={style:{color:"black"}},Xt={class:"mb-2"},eo={class:"mb-2 text-center"},to={class:"mt-2"},oo={style:{display:"flex",width:"100%",gap:"1rem","justify-content":"space-between"}},ao={class:"text-sm adicion",style:{"text-transform":"lowercase"}},io={key:0,style:{display:"flex","align-items":"center"}},ro={key:0,class:"pl-2 py-1 text-sm"},so={key:1,class:"pl-2 py-1 text-sm"},no=Ie(()=>o("hr",null,null,-1)),co={key:0,class:"col-12 md:col-6 add-car pt-5",style:{"pointer-events":"none",display:"flex","align-items":"end","justify-content":"center",background:"linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 80%)",height:"5rem",bottom:"0rem",right:"0"}},lo={__name:"VistaProducto",setup(i){new Audio("/sounds/sarpazo.mp3");const a=e({}),n=e(!1),_=()=>{n.value=!0},y=()=>{n.value=h.value=p.value=!1},h=e(!1),m=()=>{h.value=!0},p=e(!1),A=()=>{p.value=!0},R=(t,s)=>{if(t.checked){const S={id:t.aditional_item_instance_id,name:t.aditional_item_name,price:t.aditional_item_price,group:s};a.value[S.id]={...S,quantity:t.quantity||1}}else delete a.value[t.aditional_item_instance_id]},te=t=>{if(t.checked){const s={id:t.aditional_item_instance_id,name:t.aditional_item_name,price:t.aditional_item_price};a.value[s.id].quantity++}},oe=t=>{a.value[t.aditional_item_instance_id].quantity>1&&a.value[t.aditional_item_instance_id]&&a.value[t.aditional_item_instance_id].quantity--},ae=t=>{const s=Object.values(a.value);r.addProductToCart(t),s.forEach(S=>{r.addAdditionToCart(S),console.log(S)}),a.value={},r.setVisible("currentProduct",!1)},l=e([]),r=pe();e({});const w=e(),k=e(),x=ee(),U=e(),D=e();N(async()=>{const t=await r.currentProduct.id;t&&(l.value=await se.getAditional(t))}),M(()=>r.currentProduct,async()=>{const t=await r.currentProduct.id;t&&(l.value=await se.getAditional(t))}),M(()=>r.visibles.addAdditionToCart,async t=>{if(!t)a.value={},l.value=[];else{const s=await r.currentProduct.id;s&&(l.value=await se.getAditional(s))}},{deep:!0}),x.matched.some(t=>t.path==="/admin-products")||x.matched.some(t=>t.path.startsWith("/admin-products/"))||x.matched.some(t=>t.path==="/entregas")||x.matched.some(t=>t.path.startsWith("/entregas/")),e(P.currentRoute);const $=e(1),H=e(window.innerWidth);console.log(H.value);const G=()=>{H.value=window.innerWidth},V=de(()=>H.value<768);Ue(),window.addEventListener("resize",G),Ee(()=>{window.removeEventListener("resize",G)});const j=localStorage.getItem("version_tienda");j?parseInt(j)!==$.value&&(localStorage.setItem("version_tienda",$.value),localStorage.removeItem("menu"),localStorage.removeItem("cart"),localStorage.removeItem("currentNeigborhood"),Nt(),console.log("Version updated. Do additional actions here.")):localStorage.setItem("version_tienda",$.value);const T=async()=>{if(!E.value.grupo_salsa_id){w.value=[];return}try{let t=await fetch(`${O}/grupo-salsas/${E.value.grupo_salsa_id}/salsas`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();w.value=s}catch(t){console.error("Error fetching data: ",t)}},ge=async()=>{if(!E.value.grupo_cambio_id){k.value=[];return}try{let t=await fetch(`${O}/grupo-cambios/${E.value.grupo_cambio_id}/cambios`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();k.value=s}catch(t){console.error("Error fetching data: ",t)}},_e=async()=>{if(!E.value.grupo_topping_id){U.value=[];return}try{let t=await fetch(`${O}/grupo-toppings/${E.value.grupo_topping_id}/toppings`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();U.value=s}catch(t){console.error("Error fetching data: ",t)}},Ae=async()=>{if(!E.value.grupo_acompanante_id){U.value=[];return}try{let t=await fetch(`${O}/grupo-acompanantes/${E.value.grupo_acompanante_id}/acompanantes`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();D.value=s}catch(t){console.error("Error fetching data: ",t)}},he=async()=>{if(!E.value.grupo_adicional_id){l.value=[];return}try{let t=await fetch(`${O}/grupo-adicionales/${E.value.grupo_adicional_id}/adicionales`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);let s=await t.json();l.value=s}catch(t){console.error("Error fetching data: ",t)}};e(localStorage.getItem("currentNeigborhood")),N(()=>{_e(),T(),ge(),he(),Ae();const t=JSON.parse(localStorage.getItem("cart")),s=t&&t.products?t.products.length:0;if(Mt.value=s,localStorage.getItem("cart")&&(Lt.value=JSON.parse(localStorage.getItem("cart"))),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify({products:[],total:0})),console.log(JSON.parse(localStorage.getItem("menu"))),localStorage.getItem("menu")&&localStorage.getItem("versionMenu")&&parseFloat(localStorage.getItem("versionMenu"))==ce.value){const S=parseFloat(localStorage.getItem("versionMenu"));console.log(S,ce.value),console.log("habia"),B.value[0].menus=JSON.parse(localStorage.getItem("menu"))}else B.value[0].menus=fe,localStorage.setItem("menu",JSON.stringify(fe)),localStorage.setItem("versionMenu",ce.value),console.log("nuevo menu"),localStorage.removeItem("cart"),localStorage.removeItem("currentNeigborhood")}),e({Caney:"https://drive.google.com/file/d/1LpmzmgBDOR-YAT4_SstyAldl1Nid-CF2/view?usp=sharing","La Flora":"https://backend.novatocode.online/read-site-cover/IMPERIO%20CANEY",Palmira:"	https://backend.novatocode.online/read-site-cover/IMPERIO%20PALMIRA",Bretaña:"https://backend.novatocode.online/read-site-cover/IMPERIO%20BRETA%C3%91A",Jamundi:"https://backend.novatocode.online/read-site-cover/IMPERIO%20JAMUNDI",Tulua:"https://backend.novatocode.online/read-site-cover/IMPERIO%20TULUA",default:""}),e({site:{name:"default"}});const Ce=e();e(!1);const Se=e({}),Re=()=>{const t=[];Se.value.sites.map(s=>{s.neigborhoods.map(S=>{t.push({name:S.name,neigborhood:S,site:s}),console.log(s)})}),Ce.value=t};M(Se,()=>{Re()}),M(Pt,(t,s)=>{currentAcompanantes.value=[],currentToppings.value=[],xt.value=[],Dt.value=[],currentCambios.value=[],k.value=[],w.value=[],U.value=[],l.value=[],D.value=[],_e(),T(),ge(),he(),Ae()}),e(localStorage.getItem("currenSiteWsp")),console.log(P.currentRoute),de(()=>({"layout-topbar-menu-mobile-active":we.value}));const we=e(!1);return e(JSON.parse(localStorage.getItem("currentNeigborhood"))),(t,s)=>{const S=b("Button"),Le=b("ProgressSpinner"),Me=b("Checkbox"),Ne=b("InputText"),Pe=b("Dialog");return c(),le(Pe,{close:y(),closable:!1,visible:d(r).visibles.currentProduct,"onUpdate:visible":s[2]||(s[2]=L=>d(r).visibles.currentProduct=L),style:me([{width:"500px"},{"justify-content":"center","background-color":"white",position:"relative","border-radius":"1rem","padding-top":"2rem"}]),modal:!0,class:"p-fluid pt-8 m-3"},{footer:z(()=>[o("div",Wt,[g(S,{class:"",onClick:s[0]||(s[0]=L=>ae(d(r).currentProduct)),label:"Agregar al carrito",icon:"pi pi-shopping-cart",style:{position:"absolute","pointer-events":"all","background-color":"black",color:"white",width:"auto",border:"none",padding:"0.5rem 3rem","font-weight":"bold"}})])]),default:z(()=>[o("div",Gt,[o("p",Vt,f(d(r).currentProduct.product_name),1),o("p",jt,f(d(re)(d(r).currentProduct.price)),1)]),g(S,{onClick:s[1]||(s[1]=L=>d(r).setVisible("currentProduct",!1)),severity:"danger",icon:"pi pi-times",style:{width:"2.5rem",height:"2.5rem",border:"none",position:"absolute",right:"-1rem",top:"-1rem","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center","z-index":"99"}}),o("div",Qt,[o("div",Yt,[Q(o("img",{class:C([n.value?"cargado":"sin-cargar","col-12 p-2 m-0"]),onload:_,src:`https://backend.salchimonster.com/read-product-image/600/${d(r).currentProduct.product_name}`,alt:"",style:{width:"100%","object-fit":"contain","aspect-ratio":"1/1"}},null,10,zt),[[Y,n.value]])]),Q(o("div",Jt,[o("div",qt,[g(Le,{style:{width:"100px",height:"100px"},strokeWidth:"5",animationDuration:".2s","aria-label":"Custom ProgressSpinner"})])],512),[[Y,!n.value]]),o("div",{class:C(["col-12 p-0 my-5",V.value?"static":"scroll"]),style:{}},[Zt,o("p",Ft,f(d(r).currentProduct.product_description.toLowerCase()),1),o("div",Kt,[(c(!0),u(J,null,q(l.value,L=>(c(),u("div",{key:L.category},[o("div",Xt,[o("span",eo,[o("b",null,f(L.category),1)]),o("div",to,[(c(!0),u(J,null,q(L.items,v=>{var ve,ye;return c(),u("div",{key:v.aditional_item_instance_id,style:{display:"flex",gap:"1rem","align-items":"center"}},[g(Me,{class:"my-1",binary:!0,modelValue:v.checked,"onUpdate:modelValue":ie=>v.checked=ie,onChange:()=>R(v,L.category)},null,8,["modelValue","onUpdate:modelValue","onChange"]),o("div",oo,[o("span",ao,f(v.aditional_item_name),1),v.checked?(c(),u("span",io,[v.aditional_item_price>0?(c(),u("span",ro,[o("b",null,f(d(re)(v.aditional_item_price*((ve=a.value[v.aditional_item_instance_id])==null?void 0:ve.quantity))),1)])):I("",!0),g(S,{onClick:ie=>oe(v),class:"ml-2",severity:"danger",style:{width:"2rem",height:"1.5rem",border:"none"},icon:"pi pi-minus"},null,8,["onClick"]),g(Ne,{modelValue:(ye=a.value[v.aditional_item_instance_id])==null?void 0:ye.quantity,readonly:"",style:{width:"2rem",border:"none",height:"1.5rem"},class:"p-0 text-center"},null,8,["modelValue"]),g(S,{onClick:ie=>te(v),severity:"danger",style:{width:"2rem",height:"1.5rem",border:"none"},icon:"pi pi-plus"},null,8,["onClick"])])):v.aditional_item_price>0?(c(),u("span",so,[o("b",null,f(d(re)(v.aditional_item_price)),1)])):I("",!0)])])}),128)),no])])]))),128))])],2),V.value?I("",!0):(c(),u("div",co))]),Q(o("img",{onLoad:m,class:C(n.value?"cargado-left-hand":"sin-cargar"),style:{"pointer-events":"none",position:"absolute",right:"95%",top:"20%"},src:"/images/garra-sm-hor.png",alt:""},null,34),[[Y,n.value]]),Q(o("img",{onLoad:A,class:C(n.value?"cargado-right-hand":"sin-cargar"),style:{"pointer-events":"none",position:"absolute",left:"95%",top:"20%"},src:"/images/garra-sm-izq.png",alt:""},null,34),[[Y,n.value]])]),_:1},8,["close","visible"])}}},uo=F(lo,[["__scopeId","data-v-5b16136b"]]),po={class:"px-0 mx-0 mt-5",style:{"min-height":"100vh"}},mo={key:0,style:{height:"80vh",display:"flex","align-items":"center","justify-content":"center"}},go=o("p",{class:"text-center text-4xl md:text-6xl"},[o("b",null,"Por favor seleccione una categoria")],-1),_o=[go],Oo={__name:"MenuView",setup(i){const a=ee();Z(),e(P.currentRoute),e(localStorage.getItem("currentNeigborhood"));const n=e(window.innerWidth);de(()=>n.value<800);const _=()=>{n.value=window.innerWidth};N(()=>{window.addEventListener("resize",_),Ge()}),Ee(()=>{window.removeEventListener("resize",_)});const y=e(B.value[0].menus[0]);return e({}),M(B,()=>{y.value={category:B.value[0].menus[1].category,products:B.value[0].menus[1].products},console.log("cambio")}),N(async()=>{$e.value=!0}),(m,p)=>{const A=b("RouterView");return c(),u("div",po,[g(ct),g(ht),g(A),g(wt),d(a).path=="/call-center-vender"?(c(),u("div",mo,_o)):I("",!0),g(uo)])}}};export{Oo as default};
