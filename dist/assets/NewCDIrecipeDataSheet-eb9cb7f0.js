import{r as s,A as H,G as K,D as Q,q as $,a as p,o as u,c as S,g as o,w as g,b as l,t as M,u as c,e as f,f as v,j as b,U as V,s as J,F as W,d as X,Q as _,m as z,v as Y}from"./index-87ceccd5.js";const Z={style:{"max-width":"500px"},class:"m-auto px-3 my-8"},ee={class:"m-0 my-3"},te={style:{display:"flex","justify-content":"end"}},ae=l("h6",null," Ingrediente",-1),ne=l("h6",null," Unidad de medida",-1),le=l("h6",null," Cantidad",-1),oe=l("h6",null," Cantidad antes de merma",-1),ie={style:{display:"flex","justify-content":"end"}},se=l("h6",null," Ingrediente",-1),de=l("h6",null," Unidad de medida",-1),re=l("h6",null," Cantidad",-1),ue=l("h6",null," Cantidad antes de merma",-1),me={style:{display:"flex","justify-content":"end"}},pe={class:"text-center",style:{"margin-top":"3rem"}},ce=l("i",{class:"fa-solid fa-bowl-rice mr-2"},null,-1),ve={style:{"text-transform":"uppercase"}},_e={class:"grid mx-0 md:mx-0",style:{"margin-top":"3rem"}},ye={class:"col-12 p-0 md:p-4"},ge={class:"mx-0 p-0",style:{}},fe=l("h5",{style:{},class:"py-3 m-0"}," Nombre de la receta",-1),he=l("h5",{style:{},class:"py-3 m-0"}," Iva",-1),be=l("h5",{style:{},class:"py-3 m-0"}," Unidad de medida",-1),Ve=l("h5",{style:{},class:"py-3 m-0"}," Presentacion convertir a gramos",-1),we={class:"col-12 my-4 px-0",style:{display:"flex","justify-content":"end"}},Ce={__name:"NewCDIrecipeDataSheet",setup(xe){const C=s(!1),i=s({}),A=async()=>{var d;const n={...a.value};if(!n.name||n.iva===null||!((d=n.unitMeasure)!=null&&d.id)||!n.convert_value){alert("por favor llene todos los campos");return}const t={cdi_recipe_data_sheet:{name:n.name,iva:n.iva,pasamanos:!1},cdi_recipe_data_sheet_on_ingredient:{unit_measure_id:n.unitMeasure.id,convert_value:n.convert_value}};console.log(t);const m=await b.post(`${V}/create-cdi-recipe-data-sheet/`,t,"Creando receta");Y.push({name:"cdi_recipe_data_sheet",params:{product_id:m,recipe_name:n.name}}),I.value=!1};H();const I=s(!1),T=s({}),q=s(!1),a=s({name:null,portion_size:33,portion_number:0,preparation_time:"00:00",cooking_time:"00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"Informacion no proporcionada",preparation_equipment:"Informacion no proporcionada",elaboration:"Informacion no proporcionada"}),E=s([{}]),w=s([]);s(!1);const x=s(!1);s([{label:"Costo total del bache",field:"portion_size"},{label:"Costo total por kilo",field:"portion_number"},{label:"Costo con MP, Mano Obra y CIF",field:"preparation_time"},{label:"Precio de venta kilo con 15%",field:"cooking_time"},{label:"Precio de venta kilo con 19% IVA",field:"service_temperature"}]);const R=async()=>{const n=T.value.id;await b.delete(`${V}/delete-recipe-data-ingredient/${n}`,"Borrando ingrediente"),x.value=!1,U()},B=async()=>{const n={...i.value},t={ingredient_id:n.ingredient.id,recipe_data_sheet_id:N.value.recipe_data_sheet.id,unit_measure_id:n.unitMeasure.id,quantity:n.quantity,quantity_before_shrinkage:n.quantity_before_shrinkage};await b.put(`${V}/update-recipe-data-ingredient/${i.value.id}`,t,"modificando ingrediente"),U(),C.value=!1},P=s([...[{header:"Nombre",value:"ingredient_name",type:"max-content",width:""},{header:"Unidad de medida",value:"unit_measure",width:"10",type:"max-content"},{header:"Cantidad",value:"quantity",width:"number",type:"number"},{header:"Cantidad Antes de merma",value:"quantity_before_shrinkage",type:"max-content",type:"number"},{header:"Costo unitario",value:"unit_cost",width:"number",type:"money"},{header:"Porcentaje del costo",value:"total_cost",width:"number",type:"calc_percent"},{header:"Costo total",value:"total_cost",width:"number",type:"money"}]]);K(()=>{var n;return(n=P.value)==null?void 0:n.map(t=>t.value)});const j=s([{name:"Tamano de la porcion",fiel:"portion_size",type:"number"},{name:"Numero de porciones",fiel:"portion_number",type:"number"},{name:"Tiempo de preparacion",fiel:"preparation_time",type:"time"},{name:"Tiempo de coccion",fiel:"cooking_time",type:"time"},{name:"Temperatura de servicio",fiel:"service_temperature",type:"number"},{name:"Precio de venta",fiel:"selling_price",type:"money"},{name:"Impuestos",fiel:"taxes",type:"percent"},{name:"presentacion",fiel:"presentation",type:"textArea"},{name:"Equipo de preparacion",fiel:"preparation_equipment",type:"textArea"},{name:"Elaboracion",fiel:"elaboration",type:"textArea"}]);Q(a,async(n,t)=>{var m;a.value.purchasing_unit_measure_id=((m=n.purchasing_unit_measure)==null?void 0:m.id)||null},{deep:!0});const F=async n=>{const t={...n},m=d=>{if(typeof d=="string")return/^\d{2}:\d{2}:\d{2}$/.test(d)?d.slice(0,5):d;if(d instanceof Date&&!isNaN(d.getTime())){const D=d.getHours().toString().padStart(2,"0"),y=d.getMinutes().toString().padStart(2,"0");return`${D}:${y}`}else return console.error("El tiempo proporcionado no es una fecha válida"),""};t.preparation_time=m(t.preparation_time),t.cooking_time=m(t.cooking_time),console.log(t),await b.put(`${V}/update-recipe-data-sheet/${t.id}`,t,"Modificando receta"),q.value=!1,await U()},N=s({recipe_data_sheet:[{init:!0,id:13,portion_size:0,portion_number:0,preparation_time:"00:00:00",cooking_time:"00:00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"",preparation_equipment:"",elaboration:"",product_id:100,exist:!0,created_at:"2024-08-02T21:54:57.980587+00:00"}],ingredients:[]}),U=async()=>{w.value=await b.get(`${V}/daily_inventory_unit_measures`)};$(async()=>{await U()});const L=s(null),O=()=>{L.value={global:{value:null,matchMode:J.CONTAINS}}};return $(()=>{O()}),(n,t)=>{const m=p("inputText"),d=p("Textarea"),D=p("Calendar"),y=p("Button"),k=p("Dialog"),h=p("Dropdown"),G=p("InputText");return p("column"),p("DataTable"),u(),S("div",Z,[o(k,{style:{width:"40rem"},header:"Actualizar receta",class:"mx-2",visible:q.value,"onUpdate:visible":t[1]||(t[1]=e=>q.value=e),modal:""},{footer:g(()=>[o(y,{onClick:t[0]||(t[0]=e=>F(a.value)),severity:"danger",class:"mt-4",label:"Modificar Receta"})]),default:g(()=>[(u(!0),S(W,null,X(j.value,e=>(u(),S("div",null,[l("h6",ee,M(e.name),1),e.type=="text"?(u(),f(m,{key:0,modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="textArea"?(u(),f(d,{key:1,modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,rows:"6",style:{width:"100%","min-width":"100%",resize:"none"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="time"?(u(),f(D,{key:2,timeOnly:"",modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,rows:"6",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="money"?(u(),f(c(_),{key:3,modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="number"?(u(),f(c(_),{key:4,locale:"es-ES","max-fraction-digits":"3",modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="percent"?(u(),f(c(_),{key:5,locale:"es-ES","max-fraction-digits":"3",modelValue:a.value[e.fiel],"onUpdate:modelValue":r=>a.value[e.fiel]=r,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0)]))),256))]),_:1},8,["visible"]),o(k,{class:"mx-2",header:"Eliminar ingrediente",visible:x.value,"onUpdate:visible":t[4]||(t[4]=e=>x.value=e),modal:""},{footer:g(()=>[l("div",te,[o(y,{size:"small",label:"cancelar",onClick:t[2]||(t[2]=e=>x.value=!1),severity:"help"}),o(y,{size:"small",onClick:t[3]||(t[3]=e=>R()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:g(()=>{var e;return[l("h6",null,[z("seguro que desea eliminar el Ingrediente "),l("b",null,M((e=T.value)==null?void 0:e.ingredient_name),1),z(" ?")])]}),_:1},8,["visible"]),o(k,{style:{width:"30rem"},header:"Nuevo Ingrediente",class:"mx-2",visible:I.value,"onUpdate:visible":t[9]||(t[9]=e=>I.value=e),modal:""},{footer:g(()=>[l("div",ie,[o(y,{class:"m-0",size:"small",label:"Agregar",onClick:n.addIngredintToRecipe,severity:"help"},null,8,["onClick"])])]),default:g(()=>[ae,o(h,{modelValue:i.value.ingredient,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value.ingredient=e),options:E.value,filter:"",optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),ne,o(h,{modelValue:i.value.unitMeasure,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value.unitMeasure=e),options:w.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),le,o(c(_),{modelValue:i.value.quantity,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),oe,o(c(_),{modelValue:i.value.quantity_before_shrinkage,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value.quantity_before_shrinkage=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),o(k,{style:{width:"30rem"},header:"Editar Ingrediente",class:"mx-2",visible:C.value,"onUpdate:visible":t[14]||(t[14]=e=>C.value=e),modal:""},{footer:g(()=>[l("div",me,[o(y,{class:"m-0",size:"small",label:"Guardar",onClick:B,severity:"help"})])]),default:g(()=>[se,o(h,{modelValue:i.value.ingredient,"onUpdate:modelValue":t[10]||(t[10]=e=>i.value.ingredient=e),options:E.value,optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),de,o(h,{modelValue:i.value.unitMeasure,"onUpdate:modelValue":t[11]||(t[11]=e=>i.value.unitMeasure=e),options:w.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),re,o(c(_),{modelValue:i.value.quantity,"onUpdate:modelValue":t[12]||(t[12]=e=>i.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),ue,o(c(_),{modelValue:i.value.quantity_before_shrinkage,"onUpdate:modelValue":t[13]||(t[13]=e=>i.value.quantity_before_shrinkage=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),l("h2",pe,[ce,l("b",ve,M(a.value.name||" Nueva Receta CDI"),1)]),l("div",_e,[l("div",ye,[l("div",ge,[fe,o(G,{modelValue:a.value.name,"onUpdate:modelValue":t[15]||(t[15]=e=>a.value.name=e),placeholder:"Escriba el nombre de la receta",style:{width:"100%"}},null,8,["modelValue"])]),he,o(c(_),{locale:"es-ES","max-fraction-digits":"3",modelValue:a.value.iva,"onUpdate:modelValue":t[16]||(t[16]=e=>a.value.iva=e),suffix:"%",placeholder:"Iva cuando se usa como ingrediente",style:{width:"100%"}},null,8,["modelValue"]),be,o(h,{options:w.value,optionLabel:"name",modelValue:a.value.unitMeasure,"onUpdate:modelValue":t[17]||(t[17]=e=>a.value.unitMeasure=e),placeholder:"Un. med. cuando se usa como ingrediente",style:{width:"100%"}},null,8,["options","modelValue"]),Ve,o(c(_),{modelValue:a.value.convert_value,"onUpdate:modelValue":t[18]||(t[18]=e=>a.value.convert_value=e),placeholder:"Para Kilogramos en 1000",style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue"]),l("div",we,[N.value.recipe_data_sheet.init?v("",!0):(u(),f(y,{key:0,size:"small",severity:"info",onClick:A,label:"Crear Receta"}))])]),v("",!0)]),v("",!0)])}}};export{Ce as default};