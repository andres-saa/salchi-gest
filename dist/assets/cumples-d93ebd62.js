import{_ as P,z as B,r as e,y as F,i as C,a as f,o as g,c as I,b as l,d as t,w as r,l as T,U as $,q as v,t as b,p as M,g as N,F as R,e as U,f as E,C as z}from"./index-9a92106e.js";import"./dropDownAux-6426c0d6.js";import{g as A}from"./userServices-4095fd45.js";const p=m=>(M("data-v-1d177be3"),m=m(),N(),m),j={class:"grid"},V={class:"col-12"},G={class:""},J=p(()=>l("span",{class:"p-column-title"},"Image",-1)),O=["onClick","src","onError"],q=p(()=>l("div",null,null,-1)),H=p(()=>l("span",{class:"p-column-title"},"name",-1)),K=p(()=>l("span",{class:"p-column-title"},"Fecha de Nacimiento",-1)),Y=p(()=>l("span",{class:"p-column-title"},"Category",-1)),Z=p(()=>l("span",{class:"p-column-title"},"Teléfono",-1)),Q={__name:"ShowUserBirth",props:{mes:String},setup(m){B();const u=e([]);e(!1),e(!1),e(null);const _=e(null),w=e(null),S=e(null);e(!1),e(null),e(null),e({name:"activo",code:"active"}),e(null),e(!1),e(!1),e(!1),e(!1),e(null),e(null),e(null),e(null),e(null),e(null),e(null),e(null),e(null),e(""),e([]),e([]),e("file:///home/ludi/Downloads/9aa6397c673a5906ed994997df3a66bdc3e4f68dr1-194-259v2_00.jpg"),e(null),e(null);const y=m;document.getElementById("fileInput"),document.getElementById("imagePreview");function x(o,a){return o.filter(s=>new Date(s.birth_date).getMonth()+1===a&&(s==null?void 0:s.status.toLowerCase().split(" ")[0])==="activo")}F(()=>{}),C(async()=>{A().then(o=>u.value=o)}),console.log(x(u.value,3),"hikaaaaaaaaaaaaaa");const k=o=>{visibleImage.value=!0,bigImage.value=`${$}/read-product-image/600/employer-${o}`},d=(o,a)=>{const i={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!o||o==""?a.target.src=i.default:a.target.src=i[o.toLowerCase()]};return(o,a)=>{const i=f("Column"),s=f("DataTable");return g(),I("div",j,[l("div",V,[l("div",G,[t(s,{ref_key:"dt",ref:w,value:x(u.value,y.mes),selection:_.value,"onUpdate:selection":a[0]||(a[0]=n=>_.value=n),dataKey:"id",paginator:!0,rows:10,filters:S.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh",frozenValue:o.lockedCustomers},{header:r(()=>[]),default:r(()=>[t(i,{header:"Image",headerStyle:"width:5%; min-width:5rem;"},{body:r(n=>[J,l("div",null,[l("img",{onClick:h=>k(n.data.dni),src:`${T($)}/read-product-image/96/employer-${n.data.dni}`,onError:h=>d(n.data.gender,h),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"3rem",width:"3rem","object-fit":"cover","border-radius":"50%"}},null,40,O)]),q]),_:1}),t(i,{field:"name",header:"Nombre",sortable:!0,headerStyle:"width:max-content; min-width:5rem; "},{body:r(n=>[H,v(" "+b(n.data.name),1)]),_:1}),t(i,{field:"birth_date",header:"Fecha de Nacimiento",sortable:!0,headerStyle:"width:12%; min-width:10rem;"},{body:r(n=>[K,v(" "+b(n.data.birth_date),1)]),_:1}),t(i,{field:"site_name",header:"Sede",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:r(n=>[Y,v(" "+b(n.data.site_name),1)]),_:1}),t(i,{field:"phone",header:"Teléfono",sortable:!0,headerStyle:"width:12%; min-width:10rem;"},{body:r(n=>[Z,v(" "+b(n.data.phone),1)]),_:1})]),_:1},8,["value","selection","filters","frozenValue"])])])])}}},c=P(Q,[["__scopeId","data-v-1d177be3"]]);const L=m=>(M("data-v-9372fcb7"),m=m(),N(),m),W={class:"cont p-2 col-12"},X=L(()=>l("h5",{class:"m-auto col-12 text-center text-5xl",style:{"font-weight":"bold",color:""}},[v(" Cumples "),l("i",{class:"pi pi-spin pi-star-fill",style:{"font-size":"3rem"}})],-1)),ee={class:"m-auto col-12 text-center text-2xl"},te={class:"md:col-9 m-auto p-4 col-12",style:{"border-radius":"1REM","box-shadow":"0 0 20px rgba(0, 0, 0, 0.433)","background-color":"rgb(255, 206, 206)"}},ae={style:{display:"flex","justify-content":"space-between","align-items":"center"}},oe=L(()=>l("h2",{class:"justify-center text-2xl",style:{height:"100%","font-weight":"bold"}}," Este mes ",-1)),se={__name:"cumples",setup(m){const u=e([]);C(async()=>{const o=(await y()).getMonth()+1;A().then(a=>{u.value=x(a,o)})});const _=e(""),w=e(),S=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],y=async()=>{try{const o=await(await fetch(`${$}/server_time`)).json();if(!o||!o.trim())throw new Error("Respuesta del servidor no válida o vacía");const a=new Date(o.replace(" ","T")+"Z");if(isNaN(a.getTime()))throw new Error("La fecha del servidor no es válida");const i=a.getDate(),s=a.getMonth(),n=a.getFullYear();return w.value=s,_.value=`${i} de ${S[s]} de ${n}`,new Date(a)}catch(d){console.error("Error al obtener la hora del servidor:",d),_.value="Fecha no disponible"}};C(y);const x=(d,o)=>d.filter(a=>new Date(a.birth_date).getMonth()+1===o&&(a==null?void 0:a.status.toLowerCase().split(" ")[0])==="activo"),k=(d,o)=>{const a={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};o.target.src=a[d]||a.default};return(d,o)=>{const a=f("Avatar"),i=f("AvatarGroup"),s=f("AccordionTab"),n=f("Accordion");return g(),I("div",W,[X,l("h5",ee," Hoy: "+b(_.value),1),l("div",te,[l("div",ae,[oe,t(i,{class:"mb-3 avatar",onClick:o[0]||(o[0]=h=>d.$refs.currentCumple.click())},{default:r(()=>[(g(!0),I(R,null,U(u.value.slice(0,6),h=>(g(),E(a,{shape:"circle",size:"xlarge",style:{"background-color":"#fff",color:"#ffffff"},key:h.dni,image:`${T($)}/read-product-image/96/employer-${h.dni}`,onError:D=>k(h.gender,D)},null,8,["image","onError"]))),128)),u.value.length>6?(g(),E(a,{key:0,label:`+${u.value.length-6}`,shape:"circle",size:"xlarge",style:{"background-color":"#9c27b0",color:"#ffffff"}},null,8,["label"])):z("",!0)]),_:1})]),t(n,{activeIndex:w.value},{default:r(()=>[t(s,{header:"Enero"},{default:r(()=>[t(c,{mes:1})]),_:1}),t(s,{header:"Febrero"},{default:r(()=>[t(c,{mes:2})]),_:1}),t(s,{header:"Marzo"},{default:r(()=>[t(c,{mes:3})]),_:1}),t(s,{header:"Abril"},{default:r(()=>[t(c,{mes:4})]),_:1}),t(s,{header:"Mayo"},{default:r(()=>[t(c,{mes:5})]),_:1}),t(s,{header:"Junio"},{default:r(()=>[t(c,{mes:6})]),_:1}),t(s,{header:"Julio"},{default:r(()=>[t(c,{mes:7})]),_:1}),t(s,{header:"Agosto"},{default:r(()=>[t(c,{mes:8})]),_:1}),t(s,{header:"Septiembre"},{default:r(()=>[t(c,{mes:9})]),_:1}),t(s,{header:"Octubre"},{default:r(()=>[t(c,{mes:10})]),_:1}),t(s,{header:"Noviembre"},{default:r(()=>[t(c,{mes:11})]),_:1}),t(s,{header:"Diciembre"},{default:r(()=>[t(c,{mes:12})]),_:1})]),_:1},8,["activeIndex"])])])}}},ie=P(se,[["__scopeId","data-v-9372fcb7"]]);export{ie as default};
