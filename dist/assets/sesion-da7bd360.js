import{u as j,p as S}from"./ProductService-99c2d377.js";import{_ as C,r as f,A as D,a as y,o as a,c as r,b as t,g as c,D as T,E as V,n as B,f as E,t as l,u as v,y as I,i as L,x as b,j as M,F as k,d as N,G as F}from"./index-caf3b98c.js";import{f as z}from"./formatoPesos-8aa989a0.js";import{u as A}from"./site-cd21c7d8.js";const G={class:"container p-shadow col-12 shadow-2 p-3",style:{"border-radius":"0.5rem","background-color":"white",height:"100%",position:"relative"}},O={style:{display:"flex",position:"absolute",right:"-1rem",top:"-1rem",gap:"0.2rem","z-index":"9"}},R={class:"imagen",style:{overflow:"hidden"}},U=["src"],W={key:0,style:{width:"100%",display:"flex","justify-content":"center","align-items":"center","aspect-ratio":"1 / 1","background-color":"rgb(255, 255, 255)","object-fit":"contain","border-radius":"0.5rem"}},q={class:"texto",style:{}},H={style:{display:"flex",gap:"1rem",height:"100%","flex-direction":"column","justify-content":"space-between"}},J={style:{display:"grid","grid-template-columns":"auto auto",width:"100%","justify-content":"space-between","align-items":"center"}},K={style:{"text-transform":"uppercase"}},Q={style:{display:"flex","justify-content":"space-between","align-items":"c"}},X={style:{display:"flex","align-items":"center",gap:"1rem"}},Y={class:"text-xl"},Z={__name:"TarjetaMenu",props:{product:{type:Object,default:{}}},setup(x){const o=j(),e=x,n=f(!1),h=()=>{n.value=!0},d=i=>{o.visibles.dialogEditProduct=!0,o.currentProductToEdit=i},u=i=>{o.visibles.dialogDeleteProduct=!0,o.currentProductToDelete=i},p=async i=>{try{const s=await S.updateProductInstanceStatus(e.product.id,i);s&&console.log("Status updated:",s)}catch(s){console.error("Failed to update status:",s)}},_=D(()=>e.product.product_description.substring(0,100)+"...");return(i,s)=>{var w;const g=y("Button"),P=y("ProgressSpinner"),$=y("InputSwitch");return a(),r("div",G,[t("div",O,[c(g,{class:"shadow-2",onClick:s[0]||(s[0]=m=>u(e.product)),severity:"danger",style:{width:"2rem",height:"2rem",right:"0",top:"0"},rounded:"",icon:"pi pi-times"}),c(g,{class:"shadow-2",onClick:s[1]||(s[1]=m=>d(e.product)),severity:"warning",style:{"font-weight":"bold",width:"2rem",height:"2rem",right:"0",top:"0"},rounded:"",icon:"pi pi-pencil"})]),t("div",R,[T(t("img",{onLoad:h,class:B([n.value?"cargado":"sin-cargar",""]),style:{width:"100%","aspect-ratio":"1 / 1","background-color":"rgb(255, 255, 255)","object-fit":"contain","border-radius":"0.2rem"},src:`https://backend.salchimonster.com/read-product-image/300/${e.product.product_name}`,alt:""},null,42,U),[[V,n.value]]),n.value?E("",!0):(a(),r("div",W,[c(P,{style:{width:"60px",height:"60px"},strokeWidth:"8",animationDuration:".2s","aria-label":"Custom ProgressSpinner"})]))]),t("div",q,[t("div",H,[t("div",J,[t("span",null,[t("b",K,l(e.product.product_name),1)]),c(g,{class:"elipsis",text:"",style:{color:"black"},icon:"pi pi-ellipsis-v p-0 text-xl"})]),t("span",null,l((w=_.value)==null?void 0:w.toLocaleLowerCase()),1),t("div",Q,[c($,{modelValue:e.product.status,"onUpdate:modelValue":[s[2]||(s[2]=m=>e.product.status=m),s[3]||(s[3]=m=>p(e.product.status))]},null,8,["modelValue"]),t("div",X,[t("span",Y,[t("b",null,l(v(z)(e.product.price)),1)])])])])])])}}},tt=C(Z,[["__scopeId","data-v-fecd3d4e"]]),et={class:"text-center text-3xl col-12",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},st=t("div",{style:{width:"100%",height:"3px","background-color":"#ff6200"}},null,-1),ot={class:"text-3xl",style:{width:"min-content"}},it={style:{"min-width":"max-content"}},nt=t("div",{style:{width:"100%",height:"3px","background-color":"#ff6200"}},null,-1),at={key:0,class:"grid p-1 pb-8",style:{"max-width":"900px",margin:"auto"}},rt={key:1,style:{"font-weight":"bold"},class:"text-4xl text-center my-8 p-0"},pt={__name:"sesion",setup(x){const o=A(),e=I(),n=f([]),h=f(!1);L(async()=>{d()});const d=async()=>{let u=e.params.category_id,p=o.site.site_id;n.value=await S.getProductsByCategorySite(u,p)};return b(()=>e.params.category_id,async()=>{d()},{deep:!0}),b(()=>o.site,async()=>{o.site&&(d(),await F())},{deep:!0}),(u,p)=>(a(),r(k,null,[t("p",et,[st,t("span",ot,[t("p",it,l(v(e).params.menu_name)+" DE",1),M(" "+l(v(o).site.site_name),1)]),nt]),h.value?(a(),r("p",rt," Selecciona una sede y una categoria. ")):(a(),r("div",at,[(a(!0),r(k,null,N(n.value,(_,i)=>(a(),r("div",{key:_.id,class:"col-12 md:col-4 lg:col-3 sm:col-6"},[c(tt,{style:{width:"100%"},id:`tarjeta-${i}`,product:_},null,8,["id","product"])]))),128))]))],64))}};export{pt as default};
