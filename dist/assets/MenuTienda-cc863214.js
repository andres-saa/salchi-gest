import{j as Q,U as W,_ as j,r as p,h as z,o as w,c as b,b as a,F as O,e as R,n as S,t as C,i as B,v as X,k as F,a as m,f as q,w as y,d as l,u as c,q as U,B as L,C as N}from"./index-db916a24.js";import{u as G}from"./site-b0b3307f.js";import{s as Y}from"./siteService-9f14fa31.js";import{u as M}from"./productStore-c855a9c1.js";import{a as $}from"./aditionalService-30059617.js";import{f as Z}from"./formatoPesos-78ea101b.js";import{p as H}from"./ProductService-03e80e09.js";G();const ee={async getCategories(){try{const t=await Q.get(`${W}/categories/1`);return t.status===200?(t.data.push({category_id:1e3,category_name:"ADICIONALES",site_id:1e3}),t.data):(console.error("An error occurred while fetching the ingredients:",t.status),null)}catch(t){return console.error("An error occurred while fetching the ingredients:",t),null}}};const te={class:"barra align-items-center p-0 md:p-1",style:{"overflow-x":"auto",display:"flex","background-color":"rgba(255, 255, 255, 0.913)"}},oe=["onClick"],ae={class:"text-lg",style:{"min-width":"max-content"}},se={__name:"BarraCategorias",setup(D){const t=p([]),o=(u,i)=>{i>=1e3?B.push("/tienda-menu/productos/adicionales"):B.push({name:"sesion",params:{menu_name:u,category_id:i}})};z(async()=>{t.value=await ee.getCategories()});const s=u=>X().params.category_id==u.category_id;return(u,i)=>(w(),b("div",{class:S([t.value.length>0?"apear":"hide","shadow-3 d-flex p lg:justify-content-center align-items-center mb-5 p-0 md:p-0 m-0"]),style:{position:"sticky",top:"3rem","min-height":"3rem","min-width":"100%","z-index":"99"}},[a("div",te,[(w(!0),b(O,null,R(t.value,d=>(w(),b("div",{key:d.id,class:"p-1"},[a("button",{onClick:g=>o(d.category_name,d.category_id),class:S([s(d)?"selected menu-button":"menu-button","p-2 text-lg titulo"]),style:{"font-weight":"400","text-transform":"uppercase","min-width":"max-content"}},[a("span",ae,C(d.category_name),1)],10,oe)]))),128))])],2))}},ne=j(se,[["__scopeId","data-v-f43f83c3"]]),re={style:{display:"flex","flex-direction":"column",gap:"1rem"}},ie=a("span",null,"Nombre:",-1),le=a("span",null,"descripcion:",-1),ce=a("span",null,"Precio:",-1),de={class:"text-center text-2xl py-4",style:{"font-weight":"bold","text-transform":"capitalize",display:"flex","align-items":"center","justify-content":"center",gap:"1rem"}},ue={style:{"text-transform":"uppercase"}},me={style:{"font-weight":"bold"}},pe={class:"col-12 px-0 pb-0"},_e={__name:"dialogEditProduct",setup(D){const t=p([]),o=M(),s=p([]),u=()=>{!s.value||s.value.length===0||Object.entries(s.value).forEach(([n,e])=>{e.forEach(r=>{const _=t.value.some(P=>P.items.some(E=>E.aditional_item_name.toLowerCase()===r.item_name.toLowerCase()&&E.aditional_item_price===r.item_price&&E.aditional_item_type_name===r.type_name));r.status=_})})},i=n=>s.value[n].every(e=>e.status),d=(n,e)=>{s.value[n].forEach(r=>{r.status=e,g(r.item_id,n,e)})},g=(n,e,r)=>{const _=s.value[e].findIndex(P=>P.item_id===n);_!==-1&&(s.value[e][_].status=r)};F(()=>o.currentProductToEdit.id,async()=>{t.value=await $.getAditional(o.currentProductToEdit.id),s.value=await $.getAllAditionsRegistered(),u()});const V=p([]),x=()=>{let n=[];for(const e in s.value)s.value.hasOwnProperty(e)&&s.value[e].forEach(r=>{r.status&&n.push(r.item_id)});V.value=n,f()},f=()=>{const n={product_id:o.currentProductToEdit.id,name:o.currentProductToEdit.product_name,price:o.currentProductToEdit.price,description:o.currentProductToEdit.product_description,category_id:o.currentProductToEdit.category_id,status:!0},e=V.value;H.updateProductInstance(n,e)};return(n,e)=>{const r=m("Button"),_=m("InputText"),P=m("Textarea"),E=m("InputNumber"),I=m("InputSwitch"),k=m("Column"),J=m("DataTable"),K=m("Dialog");return w(),q(K,{closeOnEscape:"",visible:c(o).visibles.dialogEditProduct,"onUpdate:visible":e[4]||(e[4]=v=>c(o).visibles.dialogEditProduct=v),modal:"",style:{width:"40rem"}},{footer:y(()=>[a("div",pe,[l(r,{class:"",onClick:x,severity:"success",label:"Guardar"})])]),default:y(()=>[l(r,{onClick:e[0]||(e[0]=v=>c(o).visibles.dialogEditProduct=!1),severity:"danger",style:{position:"absolute",right:"-1rem",top:"-1rem"},rounded:"",icon:"pi pi-times"}),a("div",re,[a("div",null,[ie,l(_,{modelValue:c(o).currentProductToEdit.product_name,"onUpdate:modelValue":e[1]||(e[1]=v=>c(o).currentProductToEdit.product_name=v),style:{width:"100%"}},null,8,["modelValue"])]),a("div",null,[le,l(P,{modelValue:c(o).currentProductToEdit.product_description,"onUpdate:modelValue":e[2]||(e[2]=v=>c(o).currentProductToEdit.product_description=v),rows:"3",style:{width:"100%",resize:"none"}},null,8,["modelValue"])]),a("div",null,[ce,l(E,{modelValue:c(o).currentProductToEdit.price,"onUpdate:modelValue":e[3]||(e[3]=v=>c(o).currentProductToEdit.price=v),prefix:"$",maxFractionDigits:"0",rows:"3",style:{width:"100%",resize:"none"}},null,8,["modelValue"])])]),(w(!0),b(O,null,R(s.value,(v,T)=>(w(),b("div",{class:"m-auto col-12 p-0",style:{"max-width":"600px"},key:T},[a("p",de,[a("span",null,C(T),1),l(I,{modelValue:i(T),"onUpdate:modelValue":h=>d(T,h)},null,8,["modelValue","onUpdate:modelValue"])]),l(J,{stripedRows:"",value:v,class:"p-0"},{default:y(()=>[l(k,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:y(h=>[a("span",ue,C(h.data.item_name),1)]),_:1}),l(k,{class:"p-0",field:"aditional_item_price",header:"Precio"},{body:y(h=>[a("span",me,C(c(Z)(h.data.item_price)),1)]),_:1}),l(k,{class:"py-0 pl-4 p-0",header:"Estado",headerStyle:"width:1rem"},{body:y(h=>[l(I,{modelValue:h.data.status,"onUpdate:modelValue":[A=>h.data.status=A,A=>g(h.data.item_id,T,A)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["value"])]))),128))]),_:1},8,["visible"])}}};const ve={class:"py-3",style:{overflow:"hidden"}},ge=["src"],he={class:"col-12 p-0"},fe={__name:"dialogDeleteProduct",setup(D){const t=p(!1),o=()=>{t.value=!0,s.value=!s.value},s=p(!1),u=p([]),i=M(),d=p([]);p(i.currentProductToDelete);const g=()=>{!d.value||d.value.length===0||Object.entries(d.value).forEach(([x,f])=>{f.forEach(n=>{const e=u.value.some(r=>r.items.some(_=>_.aditional_item_name.toLowerCase()===n.item_name.toLowerCase()&&_.aditional_item_price===n.item_price&&_.aditional_item_type_name===n.type_name));n.status=e})})},V=async x=>{await H.deleteProduct(x),i.visibles.dialogDeleteProduct=!1,location.reload()};return F(()=>i.currentProductToEdit.id,async()=>{u.value=await $.getAditional(i.currentProductToEdit.id),d.value=await $.getAllAditionsRegistered(),g()}),p([]),(x,f)=>{const n=m("Button"),e=m("Dialog");return w(),q(e,{close:t.value=!1,closeOnEscape:"",visible:c(i).visibles.dialogDeleteProduct,"onUpdate:visible":f[1]||(f[1]=r=>c(i).visibles.dialogDeleteProduct=r),modal:"",style:{width:"20rem"}},{footer:y(()=>[a("div",he,[l(n,{style:{width:"100%"},onClick:f[0]||(f[0]=r=>V(c(i).currentProductToDelete.product_id)),severity:"danger",label:"Eliminar producto"})])]),default:y(()=>[U(" Esta seguro de eliminar "),a("b",null,C(c(i).currentProductToDelete.product_name),1),U(" ? "),a("div",ve,[L(a("img",{onLoad:o,class:S([t.value&&s.value?"cargado1":t.value&&!s.value?"cargado2":"nada",""]),style:{width:"100%",height:"100%","background-color":"rgb(255, 255, 255)","object-fit":"contain","border-radius":"0.2rem"},src:`https://backend.salchimonster.com/read-product-image/300/${c(i).currentProductToDelete.product_name}`,alt:""},null,42,ge),[[N,t.value]]),L(a("div",{onLoad:o,class:S([t.value?"cargado":"sin-cargar","p-0"]),style:{width:"100%","aspect-ratio":"1 / 1","background-color":"rgb(255, 255, 255)",height:"100%","object-fit":"contain","border-radius":"0.2rem"},alt:""},null,34),[[N,!t.value]])])]),_:1},8,["close","visible"])}}},ye=j(fe,[["__scopeId","data-v-2893cd90"]]),we={style:{"border-radius":"1rem"},class:"mx-auto mx-0 p-0 mt-6 mb-8"},be={class:"mx-3 my-4 mx-auto px-4",style:{"min-width":"max-content","max-width":"1024px",display:"flex","align-items":"center"}},xe=a("span",{class:"mr-4"},[a("b",null,"SEDE")],-1),$e={__name:"MenuTienda",setup(D){const t=G(),o=p([]);return z(async()=>{o.value=await Y.getSites()}),(s,u)=>{const i=m("Dropdown"),d=m("router-view");return w(),b("div",we,[l(ne,{class:"m-0"}),a("div",be,[xe,l(i,{modelValue:c(t).site,"onUpdate:modelValue":u[0]||(u[0]=g=>c(t).site=g),options:o.value.filter(g=>g.show_on_web),optionLabel:"site_name",class:"",style:{width:"100%"}},null,8,["modelValue","options"])]),l(d,{class:""}),l(_e,{class:"m-3"}),l(ye)])}}};export{$e as default};
