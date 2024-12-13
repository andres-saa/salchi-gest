import{r as d,G as W,D as X,i as Y,q as Z,a as p,o,c,g as n,w as u,b as r,j as v,U as y,s as ee,m as w,t as h,e as m,F as B,d as M,f as g,k,u as R,v as te}from"./index-c4b6802b.js";import{f as ae,a as ne}from"./formatoPesos-8aa989a0.js";const le={style:{"max-width":"1366px"},class:"m-auto"},se={style:{display:"flex","justify-content":"end"}},ie={class:"m-0 my-3"},oe={style:{display:"flex","justify-content":"end"}},re={style:{"margin-top":"3rem"}},de={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},ue=r("h3",{class:"px-2"},[r("i",{class:"fa fa-bowl-rice"}),w(),r("b",null,"Productos terminados")],-1),pe={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},ce={class:"px-2",style:{display:"flex",gap:".5rem","justify-content":"center"}},he={__name:"recetasCDI",setup(me){const _=d(!1),V=d({}),S=(a,t)=>{te.push({name:"cdi_recipe_data_sheet",params:{product_id:a,recipe_name:t}})},U=d({}),C=d(!1),s=d({}),$=d([{}]),N=d([]),P=d(!1),f=d(!1),F=async()=>{const a=U.value.id;await v.delete(`${y}/delete-ingredient/${a}`,"Borrando ingrediente"),f.value=!1,x()},T=[{header:"Id",value:"id",width:"1"},{header:"Nombre",value:"name",type:"max-content",width:""},{header:"Unidad de medida",value:"unit_measure",type:"max-content",width:""},{header:"Iva",value:"iva",width:"10",type:"percent"},{header:"Precio de venta a las sedes",value:"purchase_price",width:"10",type:"money"},{header:"Precio de venta a las sedes + IVA",value:"purchase_price_with_iva",width:"10",type:"money"},{header:"Costo unitario",value:"unit_cost",width:"10",type:"money"},{header:"Costo unitario + IVA",value:"unit_cost_with_iva",width:"10",type:"money"},{header:"presentacion convertir a gramos",value:"convert_value",width:"10",type:"money"}],j=d([...T]);W(()=>{var a;return(a=j.value)==null?void 0:a.map(t=>t.value)});const E=d([{name:"Producto",fiel:"namerecipe_name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:d(N),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Peso Bruto (Kg/Litros)",fiel:"net_gross_weight",type:"number"}]);X(s,async(a,t)=>{var i;s.value.purchasing_unit_measure_id=((i=a.purchasing_unit_measure)==null?void 0:i.id)||null},{deep:!0});const L=async()=>{const a=s.value;if(!a.name||!a.purchasing_unit_measure_id||!a.purchasing_price||!a.net_gross_weight){alert("Por favor llene todos los campos");return}P.value?await v.post(`${y}/update-ingredient/${s.value.id}`,a,"Editando ingrediente"):await v.post(`${y}/create-ingredient`,a,"creando un nuevo ingrediente"),x(),C.value=!1},x=async()=>{$.value=await v.get(`${y}/list-cdi-recipes`,"cargando ingredientes"),N.value=await v.get(`${y}/daily_inventory_unit_measures`)};Y(async()=>{x()});const A=async a=>{await v.post(`${y}/pt_to_pasamanos/${a}`,{},"Convirtiendo"),x(),_.value=!1},O=a=>{_.value=!0,V.value=a},b=d(null),q=()=>{b.value={global:{value:null,matchMode:ee.CONTAINS}}};return Z(()=>{q()}),(a,t)=>{const i=p("Button"),I=p("Dialog"),G=p("inputText"),H=p("Dropdown"),D=p("InputNumber"),K=p("InputText"),J=p("RouterLink"),z=p("column"),Q=p("DataTable");return o(),c("div",le,[n(I,{class:"mx-2",header:"Mover",visible:_.value,"onUpdate:visible":t[2]||(t[2]=e=>_.value=e),modal:""},{footer:u(()=>[r("div",se,[n(i,{size:"small",label:"cancelar",onClick:t[0]||(t[0]=e=>_.value=!1),severity:"help"}),n(i,{size:"small",onClick:t[1]||(t[1]=e=>A(V.value.id)),label:"Convertir en Pasamanos",severity:"danger",text:""})])]),default:u(()=>{var e;return[r("h6",null,[w("seguro que desea convertir "),r("b",null,h((e=V.value)==null?void 0:e.name),1),w(" en un Pasamanos ?")])]}),_:1},8,["visible"]),n(I,{style:{width:"30rem"},header:P.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:C.value,"onUpdate:visible":t[3]||(t[3]=e=>C.value=e),modal:""},{footer:u(()=>[P.value?(o(),m(i,{key:1,onClick:L,severity:"help",label:"Modificar ingrediente"})):(o(),m(i,{key:0,onClick:L,severity:"help",label:"Guardar ingrediente"}))]),default:u(()=>[(o(!0),c(B,null,M(E.value,e=>(o(),c("div",null,[r("h6",ie,h(e.name),1),e.type=="text"?(o(),m(G,{key:0,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="drop"?(o(),m(H,{key:1,options:e.Options,optionLabel:"name",modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):g("",!0),e.type=="money"?(o(),m(D,{key:2,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"},prefix:"$",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="number"?(o(),m(D,{key:3,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="persent"?(o(),m(D,{key:4,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"},suffix:"%",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):g("",!0)]))),256))]),_:1},8,["header","visible"]),n(I,{class:"mx-2",header:"Eliminar ingrediente",visible:f.value,"onUpdate:visible":t[6]||(t[6]=e=>f.value=e),modal:""},{footer:u(()=>[r("div",oe,[n(i,{size:"small",label:"cancelar",onClick:t[4]||(t[4]=e=>f.value=!1),severity:"help"}),n(i,{size:"small",onClick:t[5]||(t[5]=e=>F()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:u(()=>[r("h6",null,[w("seguro que desea eliminar el Ingrediente "),r("b",null,h(U.value.ingredient_name),1),w(" ?")])]),_:1},8,["visible"]),r("div",re,[n(Q,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:$.value,tableStyle:"min-width: 50rem;",filters:b.value},{header:u(()=>[r("div",de,[ue,n(K,{class:"",modelValue:b.value.global.value,"onUpdate:modelValue":t[7]||(t[7]=e=>b.value.global.value=e),placeholder:"Buscar receta ..."},null,8,["modelValue"]),r("div",pe,[n(J,{to:"/new-cdi-recipe-data-sheet/"},{default:u(()=>[n(i,{size:"small",severity:"help",label:"Nuevo PT"})]),_:1})])])]),default:u(()=>[(o(),c(B,null,M(T,e=>n(z,{header:e.header,style:k([{},`min-width:${e.width}rem`]),field:e.value,class:"py-2"},{body:u(l=>[e.type=="money"?(o(),c("h6",{key:0,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(R(ae)(l.data[e.value])||"-----------"),5)):e.type=="percent"?(o(),c("h6",{key:1,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(`${R(ne)(l.data[e.value])}%`||"-----------"),5)):(o(),c("h6",{key:2,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(l.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),n(z,{header:"Accion",style:{"max-width":"max-content"},field:"name",class:"py-0 px-0 m-0",frozen:"",alignFrozen:"right"},{body:u(e=>[r("div",ce,[n(i,{text:"",disabled:"",style:{height:"1rem",width:"1rem"},severity:"warning",icon:"pi pi-pencil"}),n(i,{text:"",disabled:"",style:{height:"1rem",width:"1rem"},severity:"danger",icon:"pi pi-trash"}),n(i,{onClick:l=>S(e.data.id,e.data.name),text:"",severity:"help",style:{height:"1rem",width:"1rem"},icon:"pi pi-eye"},null,8,["onClick"]),n(i,{severity:"danger",onClick:l=>O(e.data),style:{"min-width":"max-content"},class:"px-1 py-0 mx-1",size:"small",label:"-> Pasam."},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])])}}};export{he as default};