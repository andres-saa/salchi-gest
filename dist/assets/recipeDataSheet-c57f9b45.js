import{r as u,v as se,y as re,k as de,E as G,a as g,o,c,d as i,w as _,b as a,t as p,u as m,f as w,m as f,F as E,e as S,U as b,I as ue,J as x,q as A,s as N}from"./index-a1098956.js";import{f as V}from"./fetchService-720ed5a6.js";import{f as L}from"./formatoPesos-78ea101b.js";const pe={style:{"max-width":"900px"},class:"m-auto px-3 my-8"},ce={class:"m-0 my-3"},me={style:{display:"flex","justify-content":"end"}},_e=a("h6",null," Ingrediente",-1),ye=a("h6",null," Unidad de medida",-1),ve=a("h6",null," Cantidad",-1),he=a("h6",null," Cantidad antes de merma",-1),ge={style:{display:"flex","justify-content":"end"}},fe=a("h6",null," Ingrediente",-1),be=a("h6",null," Unidad de medida",-1),we=a("h6",null," Cantidad",-1),xe=a("h6",null," Cantidad antes de merma",-1),Ve={style:{display:"flex","justify-content":"end"}},ke={class:"text-center",style:{"margin-top":"3rem"}},Ie=a("i",{class:"fa-solid fa-bowl-rice mr-2"},null,-1),Ue={style:{"text-transform":"uppercase"}},Ce={class:"grid mx-0 md:mx-0",style:{"margin-top":"3rem"}},qe={class:"col-12 my-4 px-0",style:{display:"flex","justify-content":"end"}},Te={s:"",class:"col-12 md:col-6 py-0 px-0 md:pr-4 shadow-2",style:{"border-radius":".5rem","background-color":"white",display:"flex","align-items":"center","justify-content":"center"}},$e=["src"],De={class:"col-12 md:col-6 py-0 px-0 md:pl-4",style:{}},Me=a("div",{class:"col-12 py-4 md:p-0"},[a("h4",null,[a("b",null," Informacion Principal ")])],-1),Pe={class:"justify-content-start",style:{display:"flex",gap:"1rem",border:"1px solid black","align-items":"center","justify-content":"space-between"}},Ne={class:"m-0 p-2",style:{"background-color":"rgb(231 231 231)",width:"100%"}},ze={key:0,class:"m-0 text-right p-2",style:{width:"100%"}},Re={key:1,class:"m-0 text-right p-2",style:{width:"100%"}},je={key:2,class:"m-0 text-right p-2",style:{width:"100%"}},Ee={key:3,class:"m-0 text-right p-2",style:{width:"100%"}},Se={style:{"margin-top":"3rem"}},Le={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},Ae=a("h4",{class:"px-2"},[a("i",{class:"fa fa-carrot"}),A(),a("b",null,"Ingredientes para su preparacion")],-1),Be={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},Fe={style:{display:"flex","justify-content":"end",gap:".5rem"}},Oe={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 mt-4"},Ge=a("h4",null,[a("b",null," Elaboracion ")],-1),He={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 my-4"},Je=a("h4",null,[a("b",null," Presentacion ")],-1),Ke={style:{border:"1px solid","border-radius":".3rem"},class:"p-3"},Qe=a("h4",null,[a("b",null," Equipo de preparacion ")],-1),et={__name:"recipeDataSheet",setup(We){const U=u(!1),l=u({}),H=async()=>{const n={...l.value},t={ingredient_id:n.ingredient.id,recipe_data_sheet_id:d.value.recipe_data_sheet.id,unit_measure_id:n.unitMeasure.id,quantity:n.quantity,quantity_before_shrinkage:n.quantity_before_shrinkage};await V.post(`${b}/create-recipe-data-ingredient/`,t,"Agregando ingrediente"),I(),C.value=!1},z=se(),C=u(!1),R=u({}),q=u(!1),s=u({portion_size:33,portion_number:0,preparation_time:"00:00",cooking_time:"00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"Informacion no proporcionada",preparation_equipment:"Informacion no proporcionada",elaboration:"Informacion no proporcionada"}),T=u([{}]),$=u([]),J=u(!1),k=u(!1),K=u([{label:"Tamano de la porcion",field:"portion_size"},{label:"Numero de porciones",field:"portion_number"},{label:"Tiempo de preparacion",field:"preparation_time"},{label:"Tiempo de coccion",field:"cooking_time"},{label:"Temperatura de servicio",field:"service_temperature"},{label:"Precio de venta al publico",field:"selling_price",type:"money"},{label:"Impuestos",field:"taxes",type:"percent"},{label:"% Costo de la receta",field:"percent_recipe_total_cost",type:"percent"},{label:"Margen de beneficio",field:"benefit_margin",type:"percent"},{label:"Precio de venta Neto",field:"net_selling_price",type:"money"},{label:"Margen de veneficio neto",field:"net_benefic_margin",type:"money"},{label:"Costo cotal de la receta",field:"recipe_total",type:"money"}]),Q=n=>{k.value=!0,R.value=n},W=()=>{s.value={},C.value=!0},X=async()=>{const n=R.value.id;await V.delete(`${b}/delete-recipe-data-ingredient/${n}`,"Borrando ingrediente"),k.value=!1,I()},Y=n=>{l.value={};const t={...n};t.ingredient=T.value.find(y=>y.ingredient_name=n.ingredient_name),t.unitMeasure=$.value.find(y=>y.name=n.unit_measure),console.log(l.value),U.value=!0,l.value={...t}},Z=n=>{s.value={...n},J.value=!0,q.value=!0},ee=async()=>{const n={...l.value},t={ingredient_id:n.ingredient.id,recipe_data_sheet_id:d.value.recipe_data_sheet.id,unit_measure_id:n.unitMeasure.id,quantity:n.quantity,quantity_before_shrinkage:n.quantity_before_shrinkage};await V.put(`${b}/update-recipe-data-ingredient/${l.value.id}`,t,"modificando ingrediente"),I(),U.value=!1},B=[{header:"Nombre",value:"ingredient_name",type:"max-content",width:""},{header:"Unidad de medida",value:"unit_measure",width:"10",type:"max-content"},{header:"Cantidad",value:"quantity",width:"number"},{header:"Cantidad Antes de merma",value:"quantity_before_shrinkage",type:"max-content"},{header:"Costo unitario",value:"unit_cost",width:"number",type:"money"},{header:"Porcentaje del costo",value:"total_cost",width:"number",type:"calc_percent"},{header:"Costo total",value:"total_cost",width:"number",type:"money"}],te=u([...B]);re(()=>{var n;return(n=te.value)==null?void 0:n.map(t=>t.value)});const ae=u([{name:"Tamano de la porcion",fiel:"portion_size",type:"number"},{name:"Numero de porciones",fiel:"portion_number",type:"number"},{name:"Tiempo de preparacion",fiel:"preparation_time",type:"time"},{name:"Tiempo de coccion",fiel:"cooking_time",type:"time"},{name:"Temperatura de servicio",fiel:"service_temperature",type:"number"},{name:"Precio de venta",fiel:"selling_price",type:"money"},{name:"Impuestos",fiel:"taxes",type:"percent"},{name:"presentacion",fiel:"presentation",type:"textArea"},{name:"Equipo de preparacion",fiel:"preparation_equipment",type:"textArea"},{name:"Elaboracion",fiel:"elaboration",type:"textArea"}]);de(s,async(n,t)=>{var y;s.value.purchasing_unit_measure_id=((y=n.purchasing_unit_measure)==null?void 0:y.id)||null},{deep:!0});const ne=async n=>{const t={...n},y=h=>{if(typeof h=="string")return/^\d{2}:\d{2}:\d{2}$/.test(h)?h.slice(0,5):h;if(h instanceof Date&&!isNaN(h.getTime())){const j=h.getHours().toString().padStart(2,"0"),v=h.getMinutes().toString().padStart(2,"0");return`${j}:${v}`}else return console.error("El tiempo proporcionado no es una fecha válida"),""};t.preparation_time=y(t.preparation_time),t.cooking_time=y(t.cooking_time),console.log(t),await V.put(`${b}/update-recipe-data-sheet/${t.id}`,t,"Modificando receta"),q.value=!1,await I()},d=u({recipe_data_sheet:[{init:!0,id:13,portion_size:0,portion_number:0,preparation_time:"00:00:00",cooking_time:"00:00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"",preparation_equipment:"",elaboration:"",product_id:100,exist:!0,created_at:"2024-08-02T21:54:57.980587+00:00"}],ingredients:[]}),I=async()=>{const n=z.params.product_id;d.value=await V.get(`${b}/list-recipe-by-product-id/${n}`,"cargando receta"),T.value=await V.get(`${b}/list-ingredients`,"cargando ingredientes"),$.value=await V.get(`${b}/daily_inventory_unit_measures`)};G(async()=>{await I()});const D=u(null),ie=()=>{D.value={global:{value:null,matchMode:ue.CONTAINS}}};return G(()=>{ie()}),(n,t)=>{var O;const y=g("inputText"),h=g("Textarea"),j=g("Calendar"),v=g("Button"),M=g("Dialog"),P=g("Dropdown"),le=g("InputText"),F=g("column"),oe=g("DataTable");return o(),c("div",pe,[i(M,{style:{width:"40rem"},header:"Actualizar receta",class:"mx-2",visible:q.value,"onUpdate:visible":t[1]||(t[1]=e=>q.value=e),modal:""},{footer:_(()=>[i(v,{onClick:t[0]||(t[0]=e=>ne(s.value)),severity:"danger",class:"mt-4",label:"Modificar Receta"})]),default:_(()=>[(o(!0),c(E,null,S(ae.value,e=>(o(),c("div",null,[a("h6",ce,p(e.name),1),e.type=="text"?(o(),w(y,{key:0,modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="textArea"?(o(),w(h,{key:1,modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,rows:"6",style:{width:"100%","min-width":"100%",resize:"none"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="time"?(o(),w(j,{key:2,timeOnly:"",modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,rows:"6",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="money"?(o(),w(m(x),{key:3,modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,style:{width:"100%"},prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="number"?(o(),w(m(x),{key:4,modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="percent"?(o(),w(m(x),{key:5,modelValue:s.value[e.fiel],"onUpdate:modelValue":r=>s.value[e.fiel]=r,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0)]))),256))]),_:1},8,["visible"]),i(M,{class:"mx-2",header:"Eliminar ingrediente",visible:k.value,"onUpdate:visible":t[4]||(t[4]=e=>k.value=e),modal:""},{footer:_(()=>[a("div",me,[i(v,{size:"small",label:"cancelar",onClick:t[2]||(t[2]=e=>k.value=!1),severity:"help"}),i(v,{size:"small",onClick:t[3]||(t[3]=e=>X()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:_(()=>{var e;return[a("h6",null,[A("seguro que desea eliminar el Ingrediente "),a("b",null,p((e=R.value)==null?void 0:e.ingredient_name),1),A(" ?")])]}),_:1},8,["visible"]),i(M,{style:{width:"30rem"},header:"Nuevo Ingrediente",class:"mx-2",visible:C.value,"onUpdate:visible":t[9]||(t[9]=e=>C.value=e),modal:""},{footer:_(()=>[a("div",ge,[i(v,{class:"m-0",size:"small",label:"Agregar",onClick:H,severity:"help"})])]),default:_(()=>[_e,i(P,{modelValue:l.value.ingredient,"onUpdate:modelValue":t[5]||(t[5]=e=>l.value.ingredient=e),options:T.value,optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),ye,i(P,{modelValue:l.value.unitMeasure,"onUpdate:modelValue":t[6]||(t[6]=e=>l.value.unitMeasure=e),options:$.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),ve,i(m(x),{modelValue:l.value.quantity,"onUpdate:modelValue":t[7]||(t[7]=e=>l.value.quantity=e),"max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),he,i(m(x),{modelValue:l.value.quantity_before_shrinkage,"onUpdate:modelValue":t[8]||(t[8]=e=>l.value.quantity_before_shrinkage=e),"max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),i(M,{style:{width:"30rem"},header:"Editar Ingrediente",class:"mx-2",visible:U.value,"onUpdate:visible":t[14]||(t[14]=e=>U.value=e),modal:""},{footer:_(()=>[a("div",Ve,[i(v,{class:"m-0",size:"small",label:"Guardar",onClick:ee,severity:"help"})])]),default:_(()=>[fe,i(P,{modelValue:l.value.ingredient,"onUpdate:modelValue":t[10]||(t[10]=e=>l.value.ingredient=e),options:T.value,optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),be,i(P,{modelValue:l.value.unitMeasure,"onUpdate:modelValue":t[11]||(t[11]=e=>l.value.unitMeasure=e),options:$.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),we,i(m(x),{modelValue:l.value.quantity,"onUpdate:modelValue":t[12]||(t[12]=e=>l.value.quantity=e),"max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),xe,i(m(x),{modelValue:l.value.quantity_before_shrinkage,"onUpdate:modelValue":t[13]||(t[13]=e=>l.value.quantity_before_shrinkage=e),"max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),a("h2",ke,[Ie,a("b",Ue,p((O=m(z).params)==null?void 0:O.recipe_name),1)]),a("div",Ce,[a("div",qe,[d.value.recipe_data_sheet.init?f("",!0):(o(),w(v,{key:0,size:"small",severity:"danger",onClick:t[15]||(t[15]=e=>Z(d.value.recipe_data_sheet)),label:"Modificar la Receta"}))]),a("div",Te,[a("img",{style:{height:"18rem",width:"100%","object-fit":"contain"},src:`${m(b)}/read-product-image/600/${m(z).params.recipe_name}`,alt:""},null,8,$e)]),a("div",De,[Me,(o(!0),c(E,null,S(K.value,e=>(o(),c("div",Pe,[a("h6",Ne,p(e.label),1),e.type!=="money"&&e.type!=="percent"?(o(),c("h6",ze,p(d.value.recipe_data_sheet[e.field]),1)):e.type==="money"&&e.calc?(o(),c("h6",Re,p(m(L)(d.value.recipe_data_sheet[e.calc[0]]-d.value.recipe_data_sheet[e.calc[0]]*d.value.recipe_data_sheet[e.calc[1]]/100)),1)):e.type==="money"?(o(),c("h6",je,p(m(L)(d.value.recipe_data_sheet[e.field])),1)):e.type==="percent"?(o(),c("h6",Ee,p(d.value.recipe_data_sheet[e.field])+"% ",1)):f("",!0)]))),256))])]),a("div",Se,[i(oe,{direction:"vertical",paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto p-0",value:d.value.ingredients,tableStyle:"min-width: 50rem;",filters:D.value},{header:_(()=>[a("div",Le,[Ae,i(le,{class:"",modelValue:D.value.global.value,"onUpdate:modelValue":t[16]||(t[16]=e=>D.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),a("div",Be,[i(v,{size:"small",severity:"help",onClick:W,label:"Nuevo ingredinte"})])]),default:_(()=>[(o(),c(E,null,S(B,e=>i(F,{header:e.header,style:N(`min-width:${e.width}rem`),field:e.value,class:"py-2"},{body:_(r=>[e.type=="money"?(o(),c("h6",{key:0,style:N([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(m(L)(r.data[e.value])||"-----------"),5)):e.type=="calc_percent"?(o(),c("h6",{key:1,style:N([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(`${(r.data[e.value]/d.value.recipe_data_sheet.recipe_total*100).toFixed(2)}%`||"-----------"),5)):(o(),c("h6",{key:2,style:N([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(r.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),i(F,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-1",frozen:"",alignFrozen:"right"},{body:_(e=>[a("div",Fe,[i(v,{text:"",onClick:r=>Y(e.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),i(v,{text:"",onClick:r=>Q(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"]),a("div",Oe,[Ge,a("h6",null,p(d.value.recipe_data_sheet.elaboration),1)]),a("div",He,[Je,a("h6",null,p(d.value.recipe_data_sheet.presentation),1)]),a("div",Ke,[Qe,a("h6",null,p(d.value.recipe_data_sheet.preparation_equipment),1)])])])}}};export{et as default};