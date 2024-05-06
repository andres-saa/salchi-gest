import{h as O,U as R,_ as F,r as E,i as U,a as c,o as h,c as v,d as s,b as o,F as k,e as D,n as G,t as P,j as I,u as M,k as q,f as H,w as y,l as d}from"./index-53be5af1.js";import{u as A}from"./site-886e9c53.js";import{s as J}from"./siteService-58c4f5cc.js";import{u as K}from"./productStore-04e9f539.js";import{a as B}from"./aditionalService-9c34df49.js";import{f as Q}from"./formatoPesos-2a38d2e7.js";import{p as W}from"./ProductService-c5480e35.js";A();const X={async getCategories(){try{const a=await O.get(`${R}/categories/1`);return a.status===200?(a.data.push({category_id:1e3,category_name:"ADICIONALES",site_id:1e3}),a.data):(console.error("An error occurred while fetching the ingredients:",a.status),null)}catch(a){return console.error("An error occurred while fetching the ingredients:",a),null}}};const Y={style:{position:"sticky",top:"3rem","z-index":"99","background-color":"white"},class:"shadow-3 d-flex p lg:justify-content-center align-items-center mb-5 p-0 md:p-0 m-0"},Z={class:"barra align-items-center p-0 md:p-1",style:{"overflow-x":"auto",display:"flex","background-color":"rgba(255, 255, 255, 0.913)"}},ee=["onClick"],te={class:"text-lg",style:{"min-width":"max-content"}},oe={__name:"BarraCategorias",setup(T){const a=E([]),t=(p,_)=>{_>=1e3?I.push("/tienda-menu/productos/adicionales"):I.push({name:"sesion",params:{menu_name:p,category_id:_}})};U(async()=>{a.value=await X.getCategories()});const n=p=>M().params.category_id==p.category_id;return(p,_)=>{const g=c("Button");return h(),v("div",Y,[s(g,{class:"px-0",style:{position:"absolute",border:"none","background-color":"white",color:"black",left:"0rem","z-index":"99",height:"100%",width:"1.7rem","border-radius":"0"},severity:"help",icon:"pi pi-angle-left text-2xl"}),s(g,{class:"px-0",style:{position:"absolute",border:"none","background-color":"white",color:"black",right:"0rem","z-index":"99",height:"100%",width:"1.7rem","border-radius":"none"},severity:"help",icon:"pi pi-angle-right text-2xl"}),o("div",Z,[(h(!0),v(k,null,D(a.value,l=>(h(),v("div",{key:l.id,class:"p-1"},[o("button",{onClick:V=>t(l.category_name,l.category_id),class:G([n(l)?"selected menu-button":"menu-button","p-2 text-lg titulo"]),style:{"font-weight":"400","text-transform":"uppercase","min-width":"max-content"}},[o("span",te,P(l.category_name),1)],10,ee)]))),128))])])}}},se=F(oe,[["__scopeId","data-v-9df991f2"]]),ae={style:{display:"flex","flex-direction":"column",gap:"1rem"}},ne=o("span",null,"Nombre:",-1),re=o("span",null,"descripcion:",-1),ie=o("span",null,"Precio:",-1),le={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize",display:"flex","align-items":"center","justify-content":"center",gap:"1rem"}},de={style:{"text-transform":"uppercase"}},ce={style:{"font-weight":"bold"}},ue={class:"col-12 px-0"},pe={__name:"dialogEditProduct",setup(T){const a=E([]),t=K(),n=E([]),p=()=>{!n.value||n.value.length===0||Object.entries(n.value).forEach(([i,e])=>{e.forEach(r=>{const f=a.value.some(x=>x.items.some(w=>w.aditional_item_name.toLowerCase()===r.item_name.toLowerCase()&&w.aditional_item_price===r.item_price&&w.aditional_item_type_name===r.type_name));r.status=f})})},_=i=>n.value[i].every(e=>e.status),g=(i,e)=>{n.value[i].forEach(r=>{r.status=e,l(r.item_id,i,e)})},l=(i,e,r)=>{const f=n.value[e].findIndex(x=>x.item_id===i);f!==-1&&(n.value[e][f].status=r)};q(()=>t.currentProductToEdit.id,async()=>{a.value=await B.getAditional(t.currentProductToEdit.id),n.value=await B.getAllAditionsRegistered(),p()});const V=E([]),z=()=>{let i=[];for(const e in n.value)n.value.hasOwnProperty(e)&&n.value[e].forEach(r=>{r.status&&i.push(r.item_id)});V.value=i,N()},N=()=>{const i={product_id:t.currentProductToEdit.id,name:t.currentProductToEdit.product_name,price:t.currentProductToEdit.price,description:t.currentProductToEdit.product_description,category_id:t.currentProductToEdit.category_id,status:!0},e=V.value;W.updateProductInstance(i,e)};return(i,e)=>{const r=c("Button"),f=c("InputText"),x=c("Textarea"),w=c("InputNumber"),$=c("InputSwitch"),S=c("Column"),L=c("DataTable"),j=c("Dialog");return h(),H(j,{closeOnEscape:"",visible:d(t).visibles.dialogEditProduct,"onUpdate:visible":e[4]||(e[4]=u=>d(t).visibles.dialogEditProduct=u),modal:"",style:{width:"40rem"}},{footer:y(()=>[o("div",ue,[s(r,{onClick:z,severity:"success",label:"Guardar"})])]),default:y(()=>[s(r,{onClick:e[0]||(e[0]=u=>d(t).visibles.dialogEditProduct=!1),severity:"danger",style:{position:"absolute",right:"-1rem",top:"-1rem"},rounded:"",icon:"pi pi-times"}),o("div",ae,[o("div",null,[ne,s(f,{modelValue:d(t).currentProductToEdit.product_name,"onUpdate:modelValue":e[1]||(e[1]=u=>d(t).currentProductToEdit.product_name=u),style:{width:"100%"}},null,8,["modelValue"])]),o("div",null,[re,s(x,{modelValue:d(t).currentProductToEdit.product_description,"onUpdate:modelValue":e[2]||(e[2]=u=>d(t).currentProductToEdit.product_description=u),rows:"3",style:{width:"100%",resize:"none"}},null,8,["modelValue"])]),o("div",null,[ie,s(w,{modelValue:d(t).currentProductToEdit.price,"onUpdate:modelValue":e[3]||(e[3]=u=>d(t).currentProductToEdit.price=u),prefix:"$",maxFractionDigits:"0",rows:"3",style:{width:"100%",resize:"none"}},null,8,["modelValue"])])]),(h(!0),v(k,null,D(n.value,(u,b)=>(h(),v("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:b},[o("p",le,[o("span",null,P(b),1),s($,{modelValue:_(b),"onUpdate:modelValue":m=>g(b,m)},null,8,["modelValue","onUpdate:modelValue"])]),s(L,{stripedRows:"",value:u},{default:y(()=>[s(S,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:y(m=>[o("span",de,P(m.data.item_name),1)]),_:1}),s(S,{class:"p-0",field:"aditional_item_price",header:"Precio"},{body:y(m=>[o("span",ce,P(d(Q)(m.data.item_price)),1)]),_:1}),s(S,{class:"py-0 pl-4",header:"Estado",headerStyle:"width:1rem"},{body:y(m=>[s($,{modelValue:m.data.status,"onUpdate:modelValue":[C=>m.data.status=C,C=>l(m.data.item_id,b,C)]},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["value"])]))),128))]),_:1},8,["visible"])}}},me={style:{"max-width":"1024px","border-radius":"1rem"},class:"m-auto m-0 p-0 mt-8"},_e={class:"mx-3 my-4 mx-auto px-4",style:{"min-width":"max-content","max-width":"1024px",display:"flex","align-items":"center"}},he=o("span",{class:"mr-4"},[o("b",null,"SEDE")],-1),Ee={__name:"MenuTienda",setup(T){const a=A(),t=E([]);return U(async()=>{t.value=await J.getSites()}),(n,p)=>{const _=c("Dropdown"),g=c("router-view");return h(),v(k,null,[s(se,{class:""}),o("div",me,[o("div",_e,[he,s(_,{modelValue:d(a).site,"onUpdate:modelValue":p[0]||(p[0]=l=>d(a).site=l),options:t.value.filter(l=>l.show_on_web),optionLabel:"site_name",class:"",style:{width:"100%"}},null,8,["modelValue","options"])]),s(g,{class:""})]),s(pe,{class:"m-3"})],64)}}};export{Ee as default};