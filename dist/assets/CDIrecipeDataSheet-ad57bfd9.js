import{r as d,v as ce,y as pe,k as me,E as J,a as g,o as i,c,d as n,w as m,b as a,t as v,s as b,u as f,f as w,m as x,F as N,e as L,q as D,K as V,U as k,I as ve,J as C,n as ye}from"./index-35d31a65.js";import{f as Q,a as _e}from"./formatoPesos-8aa989a0.js";const he={style:{"max-width":"900px"},class:"m-auto px-3 my-8"},ge={class:"m-0 my-3"},fe={key:0},be={style:{display:"flex","justify-content":"end"}},we=a("h6",null," Ingrediente",-1),xe=a("h6",null," Unidad de medida",-1),Ve=a("h6",null," Cantidad",-1),ke={style:{display:"flex","justify-content":"end"}},Ce=a("h6",null," Unidad de medida",-1),Ue=a("h6",null," Cantidad",-1),Ie={style:{display:"flex","justify-content":"end"}},Te={class:"text-center",style:{"margin-top":"3rem"}},De=a("i",{class:"fa-solid fa-bowl-rice mr-2"},null,-1),Pe={style:{"text-transform":"uppercase"}},$e={class:"grid mx-0 md:mx-0",style:{"margin-top":"3rem"}},Ee={class:"col-12 lg:col-6 p-0 md:p-4 shadow-2",style:{"border-radius":".5rem","background-color":"white"}},Me=a("div",{class:"col-12 py-4 md:p-0 p-0"},[a("h4",{style:{},class:"px-0"},[a("b",null," Informacion Basica "),D(),a("h6",{class:"m-0",style:{color:"var(--primary-color)"}},"(Al tratar como ingrediente)")])],-1),qe={class:"mx-0 p-0",style:{}},Ne=a("h5",{style:{},class:"py-2 m-0"}," Nombre de la receta",-1),Se=a("h5",{style:{},class:"py-2 m-0"}," Iva",-1),ze=a("h5",{style:{},class:"py-2 m-0"}," Unidad de medida",-1),Oe=a("h5",{style:{},class:"py-2 m-0"}," Presentacion convertir a gramos",-1),Re={class:"col-12 my-4 px-0",style:{display:"flex","justify-content":"end","flex-direction":"column","align-items":"end",gap:"1rem"}},Ae={class:"col-12 lg:col-6 md:pl-6",style:{}},Le=a("div",{class:"col-12 p-0 lg:py-2"},[a("div",{class:"col-12 py-4 md:p-0 p-0"},[a("h4",{style:{},class:"px-0"},[a("b",null," Informacion Principal")])])],-1),Be={class:"m-0 p-2",style:{"background-color":"var(--primary-color)",width:"100%",color:"white","font-weight":"bold"}},je={key:0,class:"m-0 text-right p-2",style:{width:"100%"}},Fe={key:1,class:"m-0 text-right p-2",style:{width:"100%"}},Ge={style:{"margin-top":"3rem"}},He={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},Ke=a("h4",{class:"px-2"},[a("i",{class:"fa fa-carrot"}),D(),a("b",null,"Ingredientes para su preparacion")],-1),Je={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},Qe={style:{display:"flex","justify-content":"end",gap:".5rem"}},We={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 mt-4"},Xe=a("h4",null,[a("b",null," Elaboracion ")],-1),Ye={style:{border:"1px solid","border-radius":".3rem"},class:"p-3 my-4"},Ze=a("h4",null,[a("b",null," Presentacion ")],-1),et={style:{border:"1px solid","border-radius":".3rem"},class:"p-3"},tt=a("h4",null,[a("b",null," Equipo de preparacion ")],-1),it={__name:"CDIrecipeDataSheet",setup(at){const P=d(!1),r=d({}),S=d({}),W=()=>{p.value=!p.value},X=async()=>{const l={...r.value},t={ingredient_id:l.ingredient.id,cdi_recipe_data_sheet_id:u.value.recipe_data_sheet.id,unit_measure_id:l.unitMeasure.id,quantity:l.quantity};await V.post(`${k}/create-cdi-recipe-data-ingredient/`,t,"Agregando ingrediente"),T(),$.value=!1},Y=ce(),$=d(!1),z=d({}),O=d(!1),o=d({id:1,name:"cargando...",iva:0,purchase_price:0,convert_value:0,unit_cost:0,pasamanos:null,unit_measure:"Cargando..."}),R=d([{}]),U=d([]),p=d(!1),I=d(!1),Z=d([{label:"Costo con MP, Mano Obra y CIF",field:"labour_cost"},{label:"Cantidad total del bache en Kilogramos",field:"quantity_bache_total_cost",type:"number"},{label:"Costo total del bache",field:"bache_total_cost"},{label:"Costo total por kilo",field:"total_cost_per_kilo"},{label:"Precio de venta kilo con 15%",field:"cost_whit_percent_gain"},{label:"Precio de venta con margen error 5%",field:"purchasing_price_whit_error"},{label:"Precio de venta kilo con 19% IVA",field:"purchasing_price_whit_error_and_iva"}]),ee=l=>{I.value=!0,z.value=l},te=()=>{r.value={},$.value=!0},ae=async()=>{const l=z.value.recipe_ingredient_id;await V.delete(`${k}/delete-cdi-recipe-data-ingredient/${l}`,"Borrando ingrediente"),I.value=!1,T()},le=l=>{r.value={};const t={...l};t.ingredient=R.value.find(y=>y.ingredient_name=l.ingredient_name),t.unitMeasure=U.value.find(y=>y.name=l.unit_measure),console.log(r.value),P.value=!0,r.value={...t}},ne=async()=>{const l={...r.value},t={ingredient_id:l.ingredient_id,cdi_recipe_data_sheet_id:u.value.recipe_data_sheet.id,unit_measure_id:l.unitMeasure.id,quantity:l.quantity};console.log(t),await V.put(`${k}/update-cdi-recipe-data-ingredient/${r.value.recipe_ingredient_id}`,t,"modificando ingrediente"),T(),P.value=!1},B=[{header:"Nombre",value:"ingredient_name",type:"max-content",width:""},{header:"Unidad de medida",value:"unit_measure",width:"10",type:"max-content"},{header:"Cantidad",value:"quantity",width:"number",type:"number"},{header:"Costo",value:"purchasing_price",width:"number",type:"money"},{header:"Costo total",value:"total_cost",width:"number",type:"money"}],ie=d([...B]);pe(()=>{var l;return(l=ie.value)==null?void 0:l.map(t=>t.value)});const oe=d([{name:"Tamano de la porcion",fiel:"portion_size",type:"number"},{name:"Numero de porciones",fiel:"portion_number",type:"number"},{name:"Tiempo de preparacion",fiel:"preparation_time",type:"time"},{name:"Tiempo de coccion",fiel:"cooking_time",type:"time"},{name:"Temperatura de servicio",fiel:"service_temperature",type:"number"},{name:"Precio de venta",fiel:"selling_price",type:"money"},{name:"Impuestos",fiel:"taxes",type:"percent"},{name:"presentacion",fiel:"presentation",type:"textArea"},{name:"Equipo de preparacion",fiel:"preparation_equipment",type:"textArea"},{name:"Elaboracion",fiel:"elaboration",type:"textArea"}]);me(o,async(l,t)=>{var y;o.value.purchasing_unit_measure_id=((y=l.purchasing_unit_measure)==null?void 0:y.id)||null},{deep:!0});const se=async l=>{const t={...l},y=h=>{if(typeof h=="string")return/^\d{2}:\d{2}:\d{2}$/.test(h)?h.slice(0,5):h;if(h instanceof Date&&!isNaN(h.getTime())){const A=h.getHours().toString().padStart(2,"0"),_=h.getMinutes().toString().padStart(2,"0");return`${A}:${_}`}else return console.error("El tiempo proporcionado no es una fecha válida"),""};t.preparation_time=y(t.preparation_time),t.cooking_time=y(t.cooking_time),console.log(t),await V.put(`${k}/update-recipe-data-sheet/${t.id}`,t,"Modificando receta"),O.value=!1,await T()},u=d({recipe_data_sheet:[{init:!0,id:13,portion_size:0,portion_number:0,preparation_time:"00:00:00",cooking_time:"00:00:00",service_temperature:0,selling_price:0,taxes:0,presentation:"",preparation_equipment:"",elaboration:"",product_id:100,exist:!0,created_at:"2024-08-02T21:54:57.980587+00:00"}],ingredients:[]}),T=async()=>{const l=Y.params.product_id;u.value=await V.get(`${k}/list-cdi-recipe-by-recipe-id/${l}`,"cargando receta"),R.value=await V.get(`${k}/list-ingredients`,"cargando ingredientes"),U.value=await V.get(`${k}/daily_inventory_unit_measures`),o.value=u.value.recipe,S.value=U.value.filter(t=>t.id==o.value.unit_measure_id)[0]};J(async()=>{await T()});const E=d(null),re=()=>{E.value={global:{value:null,matchMode:ve.CONTAINS}}};return J(()=>{re()}),(l,t)=>{var G,H;const y=g("inputText"),h=g("Textarea"),A=g("Calendar"),_=g("Button"),M=g("Dialog"),q=g("Dropdown"),j=g("InputText"),de=g("Tag"),F=g("column"),ue=g("DataTable");return i(),c("div",he,[n(M,{style:{width:"40rem"},header:"Actualizar receta",class:"mx-2",visible:O.value,"onUpdate:visible":t[1]||(t[1]=e=>O.value=e),modal:""},{footer:m(()=>[n(_,{onClick:t[0]||(t[0]=e=>se(o.value)),severity:"danger",class:"mt-4",label:"Modificar Receta"})]),default:m(()=>[(i(!0),c(N,null,L(oe.value,e=>(i(),c("div",null,[a("h6",ge,v(e.name),1),p.value?(i(),c(N,{key:1},[e.type=="text"?(i(),w(y,{key:0,modelValue:u.value[e.fiel],"onUpdate:modelValue":s=>u.value[e.fiel]=s,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)],64)):(i(),c("h6",fe,"algo")),e.type=="textArea"?(i(),w(h,{key:2,modelValue:o.value[e.fiel],"onUpdate:modelValue":s=>o.value[e.fiel]=s,rows:"6",style:{width:"100%","min-width":"100%",resize:"none"}},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),e.type=="time"?(i(),w(A,{key:3,timeOnly:"",modelValue:o.value[e.fiel],"onUpdate:modelValue":s=>o.value[e.fiel]=s,rows:"6",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),e.type=="money"?(i(),w(f(C),{key:4,modelValue:o.value[e.fiel],"onUpdate:modelValue":s=>o.value[e.fiel]=s,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),e.type=="number"?(i(),w(f(C),{key:5,locale:"es-ES","max-fraction-digits":"3",modelValue:o.value[e.fiel],"onUpdate:modelValue":s=>o.value[e.fiel]=s,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),e.type=="percent"?(i(),w(f(C),{key:6,locale:"es-ES","max-fraction-digits":"3",modelValue:o.value[e.fiel],"onUpdate:modelValue":s=>o.value[e.fiel]=s,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)]))),256))]),_:1},8,["visible"]),n(M,{class:"mx-2",header:"Eliminar ingrediente",visible:I.value,"onUpdate:visible":t[4]||(t[4]=e=>I.value=e),modal:""},{footer:m(()=>[a("div",be,[n(_,{size:"small",label:"cancelar",onClick:t[2]||(t[2]=e=>I.value=!1),severity:"help"}),n(_,{size:"small",onClick:t[3]||(t[3]=e=>ae()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:m(()=>{var e;return[a("h6",null,[D("seguro que desea eliminar el Ingrediente "),a("b",null,v((e=z.value)==null?void 0:e.ingredient_name),1),D(" ?")])]}),_:1},8,["visible"]),n(M,{style:{width:"30rem"},header:"Nuevo Ingrediente",class:"mx-2",visible:$.value,"onUpdate:visible":t[8]||(t[8]=e=>$.value=e),modal:""},{footer:m(()=>[a("div",ke,[n(_,{class:"m-0",size:"small",label:"Agregar",onClick:X,severity:"help"})])]),default:m(()=>[we,n(q,{modelValue:r.value.ingredient,"onUpdate:modelValue":t[5]||(t[5]=e=>r.value.ingredient=e),options:R.value,filter:"",optionLabel:"ingredient_name",style:{width:"100%"}},null,8,["modelValue","options"]),xe,n(q,{modelValue:r.value.unitMeasure,"onUpdate:modelValue":t[6]||(t[6]=e=>r.value.unitMeasure=e),options:U.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),Ve,n(f(C),{modelValue:r.value.quantity,"onUpdate:modelValue":t[7]||(t[7]=e=>r.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),n(M,{style:{width:"30rem"},header:"Editar Ingrediente",class:"mx-2",visible:P.value,"onUpdate:visible":t[11]||(t[11]=e=>P.value=e),modal:""},{footer:m(()=>[a("div",Ie,[n(_,{class:"m-0",size:"small",label:"Guardar",onClick:ne,severity:"help"})])]),default:m(()=>[Ce,n(q,{modelValue:r.value.unitMeasure,"onUpdate:modelValue":t[9]||(t[9]=e=>r.value.unitMeasure=e),options:U.value,optionLabel:"name",style:{width:"100%"}},null,8,["modelValue","options"]),Ue,n(f(C),{modelValue:r.value.quantity,"onUpdate:modelValue":t[10]||(t[10]=e=>r.value.quantity=e),locale:"es-ES","max-fraction-digits":"3",style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["visible"]),a("h2",Te,[De,a("b",Pe,v((H=(G=u.value)==null?void 0:G.recipe)==null?void 0:H.name)+" - CDI ",1)]),a("div",$e,[a("div",Ee,[Me,a("div",qe,[Ne,n(j,{style:b([p.value?"oulined:1px solid var(--primary-color)":"",{width:"100%"}]),readOnly:!p.value,modelValue:o.value.name,"onUpdate:modelValue":t[12]||(t[12]=e=>o.value.name=e),placeholder:"Escriba el nombre de la receta"},null,8,["style","readOnly","modelValue"])]),Se,n(f(C),{suffix:"%",style:b([p.value?"oulined:1px solid var(--primary-color)":"",{width:"100%"}]),readOnly:!p.value,modelValue:o.value.iva,"onUpdate:modelValue":t[13]||(t[13]=e=>o.value.iva=e),placeholder:"Escriba el nombre de la receta"},null,8,["style","readOnly","modelValue"]),ze,n(q,{options:U.value,optionLabel:"name",style:b([p.value?"oulined:1px solid var(--primary-color)":"",{width:"100%"}]),readidOnly:!p.value,modelValue:S.value,"onUpdate:modelValue":t[14]||(t[14]=e=>S.value=e),placeholder:"Escriba el nombre de la receta"},null,8,["options","style","readidOnly","modelValue"]),Oe,n(f(C),{style:b([p.value?"oulined:1px solid var(--primary-color)":"",{width:"100%"}]),readOnly:!p.value,modelValue:o.value.convert_value,"onUpdate:modelValue":t[15]||(t[15]=e=>o.value.convert_value=e),placeholder:"Escriba el nombre de la receta"},null,8,["style","readOnly","modelValue"]),a("div",Re,[p.value?(i(),w(de,{key:0,class:"m-0 tag"},{default:m(()=>[D("Editando...")]),_:1})):x("",!0),u.value.recipe_data_sheet.init?x("",!0):(i(),w(_,{key:1,size:"small",severity:"info",onClick:W,label:p.value?"Guardar":"Modificar informacion PT"},null,8,["label"]))])]),a("div",Ae,[Le,(i(!0),c(N,null,L(Z.value,e=>(i(),c("div",{class:ye([e.separe?"mt-4 ":"","justify-content-start"]),style:{display:"flex","background-color":"white",gap:"1rem",border:"1px solid black","align-items":"center","justify-content":"space-between"}},[a("h6",Be,v(e.label),1),e.type=="number"?(i(),c("h6",je,v(u.value.recipe_data_sheet[e.field]),1)):(i(),c("h6",Fe,v(f(Q)(u.value.recipe_data_sheet[e.field])),1))],2))),256))])]),a("div",Ge,[n(ue,{direction:"vertical",paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto p-0",value:u.value.ingredients,tableStyle:"min-width: 50rem;",filters:E.value},{header:m(()=>[a("div",He,[Ke,n(j,{class:"",modelValue:E.value.global.value,"onUpdate:modelValue":t[16]||(t[16]=e=>E.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),a("div",Je,[n(_,{size:"small",severity:"help",onClick:te,label:"Nuevo ingrediente"})])]),default:m(()=>[(i(),c(N,null,L(B,e=>n(F,{header:e.header,style:b(`min-width:${e.width}rem`),field:e.value,class:"py-2"},{body:m(s=>{var K;return[e.type=="money"?(i(),c("h6",{key:0,style:b([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},v(f(Q)(s.data[e.value])||"-----------"),5)):e.type=="calc_percent"?(i(),c("h6",{key:1,style:b([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},v(`${(K=(s.data[e.value]/u.value.recipe_data_sheet.recipe_total*100).toFixed(2))==null?void 0:K.replace(".",",")}%`||"-----------"),5)):e.type=="number"?(i(),c("h6",{key:2,style:b([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},v(f(_e)(s.data[e.value])||"-----------"),5)):(i(),c("h6",{key:3,style:b([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},v(s.data[e.value]||"-----------"),5))]}),_:2},1032,["header","style","field"])),64)),n(F,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-1",frozen:"",alignFrozen:"right"},{body:m(e=>[a("div",Qe,[n(_,{text:"",onClick:s=>le(e.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),n(_,{text:"",onClick:s=>ee(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"]),a("div",We,[Xe,a("h6",null,v(u.value.recipe_data_sheet.elaboration),1)]),a("div",Ye,[Ze,a("h6",null,v(u.value.recipe_data_sheet.presentation),1)]),a("div",et,[tt,a("h6",null,v(u.value.recipe_data_sheet.preparation_equipment),1)])])])}}};export{it as default};
