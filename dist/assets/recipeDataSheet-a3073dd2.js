import{r as u,A as de,G as ue,D as pe,q as H,a as g,o,c,g as n,w as y,b as a,t as p,u as m,e as b,f,F as R,d as j,j as x,U as w,s as ce,Q as k,m as L,n as me,k as U,v as _e}from"./index-9a073ae1.js";import{f as A,a as ye}from"./formatoPesos-8aa989a0.js";const ve={style:{"max-width":"1280px"},class:"m-auto px-3 my-8"},he={class:"m-0 my-3"},ge={style:{display:"flex","justify-content":"end"}},fe=a("h6",null," Ingrediente",-1),be=a("h6",null," Unidad de medida",-1),we=a("h6",null," Cantidad",-1),xe=a("h6",null," Cantidad antes de merma",-1),ke={style:{display:"flex","justify-content":"end"}},Ve=a("h6",null," Ingrediente",-1),Ce=a("h6",null," Unidad de medida",-1),Ue=a("h6",null," Cantidad",-1),Ie=a("h6",null," Cantidad antes de merma",-1),Te={style:{display:"flex","justify-content":"end"}},qe={class:"text-center",style:{"margin-top":"3rem"}},$e=a("i",{class:"fa-solid fa-bowl-rice mr-2"},null,-1),De={style:{"text-transform":"uppercase"}},Se={class:"grid mx-0 md:mx-0",style:{"margin-top":"3rem"}},Me={class:"col-12 my-4 px-0",style:{display:"flex","justify-content":"end"}},Pe={s:"",class:"col-12 md:col-6 py-0 px-0 md:pr-4 shadow-2",style:{"border-radius":".5rem","background-color":"white",display:"flex","align-items":"center","justify-content":"center"}},Ee=["src"],Ne={class:"col-12 md:col-6 py-0 px-0 md:pl-4",style:{}},ze=a("div",{class:"col-12 py-4 md:p-0"},[a("h4",null,[a("b",null," Información Principal ")])],-1),Re={class:"m-0 p-2",style:{"background-color":"var(--primary-color)",width:"100%",color:"white","font-weight":"bold"}},je={key:0,class:"m-0 text-right p-2",style:{width:"100%"}},Ae={key:1,class:"m-0 text-right p-2",style:{width:"100%"}},Le={key:2,class:"m-0 text-right p-2",style:{width:"100%"}},Be={key:3,class:"m-0 text-right p-2",style:{width:"100%"}},Fe={style:{"margin-top":"3rem"}},Ge={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},Oe=a("h4",{class:"px-2"},[a("i",{class:"fa fa-carrot"}),L(),a("b",null,"Ingredientes para su preparación")],-1),He={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},Qe={style:{display:"flex","justify-content":"end",gap:".5rem"}},Je={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 mt-4"},Ke=a("h4",null,[a("b",null," Elaboracion ")],-1),We={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 my-4"},Xe=a("h4",null,[a("b",null," Presentacion ")],-1),Ye={style:{border:"1px solid","border-radius":".3rem"},class:"p-3"},Ze=a("h4",null,[a("b",null," Equipo de preparacion ")],-1),it={__name:"recipeDataSheet",setup(et){const Q=(i,t)=>{alert(t),_e.push({name:"cdi_recipe_data_sheet",params:{product_id:i,recipe_name:t}})},I=u(!1),l=u({}),J=async()=>{const i={...l.value},t={cdi_recipe_data_sheet_id:i.ingredient.id,recipe_data_sheet_id:d.value.recipe_data_sheet.id,unit_measure_id:i.unitMeasure.id,quantity:i.quantity,quantity_before_shrinkage:i.quantity_before_shrinkage};await x.post(`${w}/create-new-recipe-data-ingredient/`,t,"Agregando ingrediente"),C(),T.value=!1},E=de(),T=u(!1),N=u({}),q=u(!1),r=u({portion_size:33,portion_number:0,preparation_time:"00:00",cooking_time:"00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"Informacion no proporcionada",preparation_equipment:"Informacion no proporcionada",elaboration:"Informacion no proporcionada"}),$=u([{}]),D=u([]),K=u(!1),V=u(!1),W=u([{label:"Tamano de la porcion",field:"portion_size"},{label:"Numero de porciones",field:"portion_number"},{label:"Tiempo de preparacion",field:"preparation_time"},{label:"Tiempo de coccion",field:"cooking_time"},{label:"Temperatura de servicio",field:"service_temperature"},{label:"Precio de venta al publico",field:"selling_price",type:"money",separe:!0},{label:"Impuestos",field:"taxes",type:"percent"},{label:"Precio de venta Neto",field:"net_selling_price",type:"money"},{label:"Costo cotal de la receta",field:"recipe_total",type:"money",separe:!0},{label:"% Costo de la receta",field:"percent_recipe_total_cost",type:"percent"},{label:"Margen de beneficio neto",field:"net_benefic_margin",type:"money"},{label:"Margen de beneficio",field:"benefit_margin",type:"percent"}]),X=i=>{V.value=!0,N.value=i},Y=()=>{r.value={},T.value=!0},Z=async()=>{const i=N.value.id;await x.delete(`${w}/delete-recipe-data-ingredient/${i}`,"Borrando ingrediente"),V.value=!1,C()},ee=i=>{l.value={};const t={...i};t.ingredient=$.value.find(v=>v.ingredient_name=i.ingredient_name),t.unitMeasure=D.value.find(v=>v.name=i.unit_measure),console.log(l.value),I.value=!0,l.value={...t}},te=i=>{r.value={...i},K.value=!0,q.value=!0},ae=async()=>{const i={...l.value},t={ingredient_id:i.ingredient.id,recipe_data_sheet_id:d.value.recipe_data_sheet.id,unit_measure_id:i.unitMeasure.id,quantity:i.quantity,quantity_before_shrinkage:i.quantity_before_shrinkage};await x.put(`${w}/update-recipe-data-ingredient/${l.value.id}`,t,"modificando ingrediente"),C(),I.value=!1},B=[{header:"Nombre",value:"ingredient_name",type:"max-content",width:""},{header:"Unidad de medida",value:"unit_measure",width:"10",type:"max-content"},{header:"Cantidad",value:"quantity",width:"number",type:"number"},{header:"Cantidad Antes de merma",value:"quantity_before_shrinkage",type:"max-content",type:"number"},{header:"Costo unitario",value:"unit_cost",width:"number",type:"money"},{header:"Porcentaje del costo",value:"total_cost",width:"number",type:"calc_percent"},{header:"Costo total",value:"total_cost",width:"number",type:"money"}],ie=u([...B]);ue(()=>{var i;return(i=ie.value)==null?void 0:i.map(t=>t.value)});const ne=u([{name:"Tamano de la porcion",fiel:"portion_size",type:"number"},{name:"Numero de porciones",fiel:"portion_number",type:"number"},{name:"Tiempo de preparacion",fiel:"preparation_time",type:"time"},{name:"Tiempo de coccion",fiel:"cooking_time",type:"time"},{name:"Temperatura de servicio",fiel:"service_temperature",type:"number"},{name:"Precio de venta",fiel:"selling_price",type:"money"},{name:"Impuestos",fiel:"taxes",type:"percent"},{name:"presentacion",fiel:"presentation",type:"textArea"},{name:"Equipo de preparacion",fiel:"preparation_equipment",type:"textArea"},{name:"Elaboracion",fiel:"elaboration",type:"textArea"}]);pe(r,async(i,t)=>{var v;r.value.purchasing_unit_measure_id=((v=i.purchasing_unit_measure)==null?void 0:v.id)||null},{deep:!0});const le=async i=>{const t={...i},v=h=>{if(typeof h=="string")return/^\d{2}:\d{2}:\d{2}$/.test(h)?h.slice(0,5):h;if(h instanceof Date&&!isNaN(h.getTime())){const z=h.getHours().toString().padStart(2,"0"),_=h.getMinutes().toString().padStart(2,"0");return`${z}:${_}`}else return console.error("El tiempo proporcionado no es una fecha válida"),""};t.preparation_time=v(t.preparation_time),t.cooking_time=v(t.cooking_time),console.log(t),await x.put(`${w}/update-recipe-data-sheet/${t.id}`,t,"Modificando receta"),q.value=!1,await C()},d=u({recipe_data_sheet:[{init:!0,id:13,portion_size:0,portion_number:0,preparation_time:"00:00:00",cooking_time:"00:00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"",preparation_equipment:"",elaboration:"",product_id:100,exist:!0,created_at:"2024-08-02T21:54:57.980587+00:00"}],ingredients:[]}),C=async()=>{const i=E.params.product_id;d.value=await x.get(`${w}/list-recipe-by-product-id/${i}`,"cargando receta"),$.value=await x.get(`${w}/list-cdi-recipes-all`,"cargando ingredientes"),D.value=await x.get(`${w}/daily_inventory_unit_measures`)};H(async()=>{await C()});const S=u(null),oe=()=>{S.value={global:{value:null,matchMode:ce.CONTAINS}}};return H(()=>{oe()}),(i,t)=>{var G;const v=g("inputText"),h=g("Textarea"),z=g("Calendar"),_=g("Button"),M=g("Dialog"),P=g("Dropdown"),se=g("InputText"),F=g("column"),re=g("DataTable");return o(),c("div",ve,[n(M,{style:{width:"40rem"},header:"Actualizar receta",class:"mx-2",visible:q.value,"onUpdate:visible":t[1]||(t[1]=e=>q.value=e),modal:""},{footer:y(()=>[n(_,{onClick:t[0]||(t[0]=e=>le(r.value)),severity:"danger",class:"mt-4",label:"Modificar Receta"})]),default:y(()=>[(o(!0),c(R,null,j(ne.value,e=>(o(),c("div",null,[a("h6",he,p(e.name),1),e.type=="text"?(o(),b(v,{key:0,modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="textArea"?(o(),b(h,{key:1,modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,rows:"6",style:{width:"100%","min-width":"100%",resize:"none"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="time"?(o(),b(z,{key:2,timeOnly:"",modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,rows:"6",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="money"?(o(),b(m(k),{key:3,modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="number"?(o(),b(m(k),{key:4,locale:"es-ES","max-fraction-digits":"3",modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="percent"?(o(),b(m(k),{key:5,locale:"es-ES","max-fraction-digits":"3",modelValue:r.value[e.fiel],"onUpdate:modelValue":s=>r.value[e.fiel]=s,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0)]))),256))]),_:1},8,["visible"]),n(M,{class:"mx-2",header:"Eliminar ingrediente",visible:V.value,"onUpdate:visible":t[4]||(t[4]=e=>V.value=e),modal:""},{footer:y(()=>[a("div",ge,[n(_,{size:"small",label:"cancelar",onClick:t[2]||(t[2]=e=>V.value=!1),severity:"help"}),n(_,{size:"small",onClick:t[3]||(t[3]=e=>Z()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:y(()=>{var e;return[a("h6",null,[L("seguro que desea eliminar el Ingrediente "),a("b",null,p((e=N.value)==null?void 0:e.ingredient_name),1),L(" ?")])]}),_:1},8,["visible"]),n(M,{style:{width:"30rem"},header:"Nuevo Ingrediente",class:"mx-2",visible:T.value,"onUpdate:visible":t[9]||(t[9]=e=>T.value=e),modal:""},{footer:y(()=>[a("div",ke,[n(_,{class:"m-0",size:"small",label:"Agregar",onClick:J,severity:"help"})])]),default:y(()=>[fe,n(P,{modelValue:l.value.ingredient,"onUpdate:modelValue":t[5]||(t[5]=e=>l.value.ingredient=e),options:$.value,filter:"",optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),be,n(P,{modelValue:l.value.unitMeasure,"onUpdate:modelValue":t[6]||(t[6]=e=>l.value.unitMeasure=e),options:D.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),we,n(m(k),{modelValue:l.value.quantity,"onUpdate:modelValue":t[7]||(t[7]=e=>l.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),xe,n(m(k),{modelValue:l.value.quantity_before_shrinkage,"onUpdate:modelValue":t[8]||(t[8]=e=>l.value.quantity_before_shrinkage=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),n(M,{style:{width:"30rem"},header:"Editar Ingrediente",class:"mx-2",visible:I.value,"onUpdate:visible":t[14]||(t[14]=e=>I.value=e),modal:""},{footer:y(()=>[a("div",Te,[n(_,{class:"m-0",size:"small",label:"Guardar",onClick:ae,severity:"help"})])]),default:y(()=>[Ve,n(P,{modelValue:l.value.ingredient,"onUpdate:modelValue":t[10]||(t[10]=e=>l.value.ingredient=e),options:$.value,optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),Ce,n(P,{modelValue:l.value.unitMeasure,"onUpdate:modelValue":t[11]||(t[11]=e=>l.value.unitMeasure=e),options:D.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),Ue,n(m(k),{modelValue:l.value.quantity,"onUpdate:modelValue":t[12]||(t[12]=e=>l.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"]),Ie,n(m(k),{modelValue:l.value.quantity_before_shrinkage,"onUpdate:modelValue":t[13]||(t[13]=e=>l.value.quantity_before_shrinkage=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),a("h2",qe,[$e,a("b",De,p((G=m(E).params)==null?void 0:G.recipe_name),1)]),a("div",Se,[a("div",Me,[d.value.recipe_data_sheet.init?f("",!0):(o(),b(_,{key:0,size:"small",severity:"info",onClick:t[15]||(t[15]=e=>te(d.value.recipe_data_sheet)),label:"Modificar la Receta"}))]),a("div",Pe,[a("img",{style:{width:"100%","aspect-ratio":"1 / 1","object-fit":"cover"},src:`${m(w)}/read-product-image/600/${m(E).params.recipe_name}`,alt:""},null,8,Ee)]),a("div",Ne,[ze,(o(!0),c(R,null,j(W.value,e=>(o(),c("div",{class:me([e.separe?"mt-4 ":"","justify-content-start"]),style:{display:"flex","background-color":"white",gap:"1rem",border:"1px solid black","align-items":"center","justify-content":"space-between"}},[a("h6",Re,p(e.label),1),e.type!=="money"&&e.type!=="percent"?(o(),c("h6",je,p(d.value.recipe_data_sheet[e.field]),1)):e.type==="money"&&e.calc?(o(),c("h6",Ae,p(m(A)(d.value.recipe_data_sheet[e.calc[0]]-d.value.recipe_data_sheet[e.calc[0]]*d.value.recipe_data_sheet[e.calc[1]]/100)),1)):e.type==="money"?(o(),c("h6",Le,p(m(A)(d.value.recipe_data_sheet[e.field])),1)):e.type==="percent"?(o(),c("h6",Be,p(d.value.recipe_data_sheet[e.field])+"% ",1)):f("",!0)],2))),256))])]),a("div",Fe,[n(re,{direction:"vertical",paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto p-0",value:d.value.ingredients,tableStyle:"min-width: 50rem;",filters:S.value},{header:y(()=>[a("div",Ge,[Oe,n(se,{class:"",modelValue:S.value.global.value,"onUpdate:modelValue":t[16]||(t[16]=e=>S.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),a("div",He,[n(_,{size:"small",severity:"help",onClick:Y,label:"Nuevo ingredinte"})])]),default:y(()=>[(o(),c(R,null,j(B,e=>n(F,{header:e.header,style:U(`min-width:${e.width}rem`),field:e.value,class:"py-2"},{body:y(s=>{var O;return[e.type=="money"?(o(),c("h6",{key:0,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(m(A)(s.data[e.value])||"-----------"),5)):e.type=="calc_percent"?(o(),c("h6",{key:1,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(`${(O=(s.data[e.value]/d.value.recipe_data_sheet.recipe_total*100).toFixed(2))==null?void 0:O.replace(".",",")}%`||"-----------"),5)):e.type=="number"?(o(),c("h6",{key:2,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(m(ye)(s.data[e.value])||"-----------"),5)):(o(),c("h6",{key:3,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},p(s.data[e.value]||"-----------"),5))]}),_:2},1032,["header","style","field"])),64)),n(F,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-1",frozen:"",alignFrozen:"right"},{body:y(e=>[a("div",Qe,[n(_,{text:"",onClick:s=>ee(e.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),n(_,{text:"",onClick:s=>X(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"]),e.data.pasamanos?f("",!0):(o(),b(_,{key:0,onClick:s=>Q(e.data.recipe_id,e.data.ingredient_name),text:"",severity:"help",style:{height:"2rem",width:"2rem"},icon:"pi pi-eye"},null,8,["onClick"]))])]),_:1})]),_:1},8,["value","filters"]),a("div",Je,[Ke,a("h6",null,p(d.value.recipe_data_sheet.elaboration),1)]),a("div",We,[Xe,a("h6",null,p(d.value.recipe_data_sheet.presentation),1)]),a("div",Ye,[Ze,a("h6",null,p(d.value.recipe_data_sheet.preparation_equipment),1)])])])}}};export{it as default};
