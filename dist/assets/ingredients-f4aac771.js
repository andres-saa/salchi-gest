import{a as C}from"./axios-4d564c32.js";import{U,_ as z,f as _,h as q,r as h,o as F,c as S,d as l,w as a,F as P,b as j,q as G,a as n,k as M,t as f,p as Q,e as H,R as p}from"./index-6af777e5.js";const I={async getIngredients(){try{const s=await C.get(`${U}/ingredients`);return s.status===200?s.data:(console.error("An error occurred while fetching the ingredients:",s.status),null)}catch(s){return console.error("An error occurred while fetching the ingredients:",s),null}},async createIngredient(s){try{const r=await C.post(`${U}/ingredient`,s);return r.status===200?r.data:(console.error("An error occurred while creating the ingredient:",r.status),null)}catch(r){return console.error("An error occurred while creating the ingredient:",r),null}},async deleteIngredient(s){try{const r=await C.delete(`${U}/ingredient/${s}`);return r.status===200?(console.log("Ingredient deleted successfully"),!0):(console.error("An error occurred while deleting the ingredient:",r.status),!1)}catch(r){return console.error("An error occurred while deleting the ingredient:",r),!1}}};const m=s=>(Q("data-v-d7e45f62"),s=s(),H(),s),J=m(()=>n("p",null,"¿Estás seguro de que quieres eliminar este ingrediente?",-1)),K=m(()=>n("p",{class:"p-3 text-2xl text-center",style:{"font-weight":"bold"}},[n("i",{class:"fa-solid fa-folder-open"}),M(" Ingredientes")],-1)),W={class:"formgrid grid"},Y={class:"field col add-ingredient-field"},X=m(()=>n("label",{for:"name"},"Nombre",-1)),Z={class:"field col add-ingredient-field"},ee=m(()=>n("label",{for:"unit"},"Unidad de Medida",-1)),le={class:"field col add-ingredient-field"},ne=m(()=>n("label",{for:"price"},"Precio de Compra",-1)),te={class:"field col add-ingredient-field"},ae=m(()=>n("label",{for:"units"},"No. Unid por Compra",-1)),oe={class:"field col add-ingredient-field"},re=m(()=>n("label",{for:"format"},"Formato de Compra",-1)),ie={class:"field col add-ingredient-field"},se=m(()=>n("label",{for:"weight"},"Peso Neto",-1)),de={class:"field col add-ingredient-field"},ue=m(()=>n("label",{for:"shrinkage"},"Porcentaje de Merma",-1)),ce={class:"flex justify-content-between"},pe=m(()=>n("img",{style:{width:"2rem",height:"2rem","aspect-ratio":"1 / 1","object-fit":"cover","border-radius":"0.5rem"},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV84QloLgfvrli6GpuJoJlvB-bicUpq2H6QAS80K6Rw&s",alt:""},null,-1)),me={class:"flex align-items-center gapy-2 px-2"},ge={class:"flex align-items-center gapy-2 px-2"},he={class:"flex align-items-center gapy-2 px-2"},_e={class:"flex align-items-center gapy-2 px-2"},fe={class:"flex align-items-center gapy-2 px-2"},ve={class:"flex align-items-center gapy-2 px-2"},ye={style:{display:"flex",gap:"1rem"}},be={__name:"ingredients",setup(s){const r=_(!1);let k=_(null);function A(u){k.value=u,r.value=!0}const T=[{label:"No",icon:"pi pi-times",onClick:()=>r.value=!1,class:"p-button-text"},{label:"Sí",icon:"pi pi-check",onClick:()=>{v.value=!0,$(k.value),r.value=!1},class:"p-button-text"}];async function $(u){try{await I.deleteIngredient(u)?(console.log("Ingrediente eliminado exitosamente"),x.value=await I.getIngredients(),v.value=!1):(console.error("Error al eliminar el ingrediente"),v.value=!1)}catch(t){console.error("Error al eliminar el ingrediente:",t),v.value=!1}}const x=_([]);q(async()=>{x.value=await I.getIngredients(),v.value=!1});const b=_(!1),i=_({name:"",purchasing_unit_measure:"",purchasing_price:0,number_units_purchasing:0,purchasing_format:"",net_gross_weight:0,shrinkage_percent:0});async function B(){try{const u=await I.createIngredient(i.value);u?(console.log("Ingrediente creado exitosamente",u),b.value=!1):console.error("Error al crear el ingrediente")}catch(u){console.error("Error al guardar el ingrediente:",u)}}const w=_({global:{value:null,matchMode:p.CONTAINS},name:{value:null,matchMode:p.CONTAINS},purchasing_unit_measure:{value:null,matchMode:p.CONTAINS},purchasing_price:{value:null,matchMode:p.CONTAINS},purchasing_format:{value:null,matchMode:p.CONTAINS},net_gross_weight:{value:null,matchMode:p.CONTAINS},shrinkage_percent:{value:null,matchMode:p.CONTAINS},number_units_purchasing:{value:null,matchMode:p.CONTAINS},representative:{value:null,matchMode:p.IN},status:{value:null,matchMode:p.EQUALS},verified:{value:null,matchMode:p.EQUALS}}),v=_(!0),D=u=>u.toLocaleString("es-CO",{currency:"cop",prefix:"hid"});return(u,t)=>{const y=h("Button"),N=h("Dialog"),c=h("InputText"),V=h("InputNumber"),L=h("InputIcon"),O=h("IconField"),E=h("ProgressSpinner"),g=h("Column"),R=h("DataTable");return F(),S(P,null,[l(N,{visible:r.value,"onUpdate:visible":t[0]||(t[0]=e=>r.value=e),header:"Confirmar",modal:"",closable:!1,showHeader:!0},{footer:a(()=>[(F(),S(P,null,j(T,e=>l(y,{key:e.label,label:e.label,icon:e.icon,onClick:e.onClick,class:G(e.class)},null,8,["label","icon","onClick","class"])),64))]),default:a(()=>[J]),_:1},8,["visible"]),K,l(N,{visible:b.value,"onUpdate:visible":t[9]||(t[9]=e=>b.value=e),style:{width:"450px"},header:"Nuevo Ingrediente",modal:"",closable:!0},{footer:a(()=>[l(y,{label:"Cancelar",icon:"pi pi-times",onClick:t[8]||(t[8]=e=>b.value=!1),class:"p-button-text"}),l(y,{label:"Guardar",icon:"pi pi-check",onClick:B,autofocus:""})]),default:a(()=>[n("div",W,[n("div",Y,[X,l(c,{id:"name",modelValue:i.value.name,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value.name=e)},null,8,["modelValue"])]),n("div",Z,[ee,l(c,{id:"unit",modelValue:i.value.purchasing_unit_measure,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value.purchasing_unit_measure=e)},null,8,["modelValue"])]),n("div",le,[ne,l(V,{id:"price",modelValue:i.value.purchasing_price,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value.purchasing_price=e),mode:"currency",currency:"COP",locale:"es-CO"},null,8,["modelValue"])]),n("div",te,[ae,l(V,{id:"units",modelValue:i.value.number_units_purchasing,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value.number_units_purchasing=e)},null,8,["modelValue"])]),n("div",oe,[re,l(c,{id:"format",modelValue:i.value.purchasing_format,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value.purchasing_format=e)},null,8,["modelValue"])]),n("div",ie,[se,l(V,{id:"weight",modelValue:i.value.net_gross_weight,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value.net_gross_weight=e)},null,8,["modelValue"])]),n("div",de,[ue,l(V,{id:"shrinkage",modelValue:i.value.shrinkage_percent,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value.shrinkage_percent=e)},null,8,["modelValue"])])])]),_:1},8,["visible"]),l(R,{showGridlines:"",filters:w.value,"onUpdate:filters":t[12]||(t[12]=e=>w.value=e),value:x.value,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} to {last} de {totalRecords} ingredientes",responsiveLayout:"scroll",scrollable:"",frozenValue:u.lockedCustomers,globalFilterFields:["name","country.name","representative.name","status"],loading:v.value},{header:a(()=>[n("div",ce,[n("div",null,[l(y,{size:"small",rounded:"",severity:"success",icon:"pi pi-plus",onClick:t[10]||(t[10]=e=>b.value=!0)})]),n("div",null,[l(O,{iconPosition:"right"},{default:a(()=>[l(L),l(c,{icon:"pi pi-search",modelValue:w.value.global.value,"onUpdate:modelValue":t[11]||(t[11]=e=>w.value.global.value=e),placeholder:"Buscar..."},null,8,["modelValue"])]),_:1})])])]),loading:a(()=>[l(E,{style:{width:"100px","background-color":"transparent",color:"transparent",height:"100px"},strokeWidth:"5",fill:"transparent",animationDuration:".3s","aria-label":"Custom ProgressSpinner"})]),default:a(()=>[l(g,{class:"py-2 px-2",field:"",header:"Foto",style:{"min-width":"3rem"}},{body:a(({data:e})=>[pe]),_:1}),l(g,{class:"py-2 px-2",field:"name",header:"Nombre",style:{"min-width":"12rem"}},{body:a(({data:e})=>[M(f(e.name),1)]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por nombre"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"purchasing_unit_measure",header:"Unidad de medida",filterField:"purchasing_unit_measure",style:{"min-width":"16rem"}},{body:a(({data:e})=>[n("div",me,f(e.purchasing_unit_measure),1)]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por unidad de medida"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"purchasing_price",header:"Precio de compra",filterField:"purchasing_price",showFilterMenu:!0,filterMenuStyle:{width:"14rem"},style:{"min-width":"20rem"}},{body:a(({data:e})=>[n("div",ge,[n("span",null,"$"+f(D(e.purchasing_price)),1)])]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por precio"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"number_units_purchasing",header:"No Unid por Compra",filterField:"number_units_purchasing",showFilterMenu:!0,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:a(({data:e})=>[n("div",he,[n("span",null,f(e.number_units_purchasing),1)])]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por precio"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"purchasing_format",header:"Formato de compra",filterField:"purchasing_format",showFilterMenu:!0,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:a(({data:e})=>[n("div",_e,[n("span",null,f(e.purchasing_format),1)])]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por formato"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"net_gross_weight",header:"Peso neto",filterField:"net_gross_weight",showFilterMenu:!0,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:a(({data:e})=>[n("div",fe,[n("span",null,f(e.net_gross_weight),1)])]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por peso"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{class:"py-2 px-2",field:"shrinkage_percent",header:"Porcentaje de merma",filterField:"shrinkage_percent",showFilterMenu:!0,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:a(({data:e})=>[n("div",ve,[n("span",null,f(e.shrinkage_percent)+"%",1)])]),filter:a(({filterModel:e,filterCallback:d})=>[l(c,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,type:"text",onInput:o=>d(),class:"p-column-filter",placeholder:"Buscar por merma"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),l(g,{frozen:"",alignFrozen:"right",class:"py-2 px-2",header:"Acciones"},{body:a(({data:e})=>[n("div",ye,[l(y,{style:{width:"2rem",height:"2rem"},icon:"pi pi-trash",class:"p-button-rounded p-button-danger",onClick:d=>A(e.id)},null,8,["onClick"]),l(y,{style:{width:"2rem",height:"2rem"},icon:"pi pi-pencil",class:"p-button-rounded p-button-warning"})])]),_:1})]),_:1},8,["filters","value","frozenValue","globalFilterFields","loading"])],64)}}},Ie=z(be,[["__scopeId","data-v-d7e45f62"]]);export{Ie as default};
