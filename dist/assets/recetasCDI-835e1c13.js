import{r as s,y as K,k as H,h as J,E as Q,a as d,o,c as p,d as i,w as u,b as r,K as y,U as v,I as W,f as m,F as B,e as R,t as h,m as g,q as I,s as x,u as M,i as X}from"./index-c5ed3781.js";import{f as Y,a as Z}from"./formatoPesos-8aa989a0.js";const ee={style:{"max-width":"1366px"},class:"m-auto"},te={class:"m-0 my-3"},ae={style:{display:"flex","justify-content":"end"}},ne={style:{"margin-top":"3rem"}},le={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},oe=r("h3",{class:"px-2"},[r("i",{class:"fa fa-bowl-rice"}),I(),r("b",null,"Productos terminados")],-1),ie={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},se={style:{display:"flex",gap:".5rem","justify-content":"center"}},ce={__name:"recetasCDI",setup(re){const S=(t,a)=>{X.push({name:"cdi_recipe_data_sheet",params:{product_id:t,recipe_name:a}})},D=s({}),b=s(!1),n=s({}),U=s([{}]),C=s([]),k=s(!1),_=s(!1),z=async()=>{const t=D.value.id;await y.delete(`${v}/delete-ingredient/${t}`,"Borrando ingrediente"),_.value=!1,V()},T=[{header:"Id",value:"id",width:"1"},{header:"Nombre",value:"name",type:"max-content",width:""},{header:"Unidad de medida de PT",value:"unit_measure",type:"max-content",width:""},{header:"Iva",value:"iva",width:"10",type:"percent"},{header:"Precio de venta a las sedes",value:"purchase_price",width:"10",type:"money"},{header:"presentacion convertir a gramos",value:"convert_value",width:"10",type:"money"},{header:"Costo unitario",value:"unit_cost",width:"10",type:"money"}],E=s([...T]);K(()=>{var t;return(t=E.value)==null?void 0:t.map(a=>a.value)});const F=s([{name:"Producto",fiel:"namerecipe_name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:s(C),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Peso Bruto (Kg/Litros)",fiel:"net_gross_weight",type:"number"}]);H(n,async(t,a)=>{var f;n.value.purchasing_unit_measure_id=((f=t.purchasing_unit_measure)==null?void 0:f.id)||null},{deep:!0});const N=async()=>{const t=n.value;if(!t.name||!t.purchasing_unit_measure_id||!t.purchasing_price||!t.net_gross_weight){alert("Por favor llene todos los campos");return}k.value?await y.post(`${v}/update-ingredient/${n.value.id}`,t,"Editando ingrediente"):await y.post(`${v}/create-ingredient`,t,"creando un nuevo ingrediente"),V(),b.value=!1},V=async()=>{U.value=await y.get(`${v}/list-cdi-recipes`,"cargando ingredientes"),C.value=await y.get(`${v}/daily_inventory_unit_measures`)};J(async()=>{V()});const w=s(null),j=()=>{w.value={global:{value:null,matchMode:W.CONTAINS}}};return Q(()=>{j()}),(t,a)=>{const f=d("inputText"),O=d("Dropdown"),P=d("InputNumber"),c=d("Button"),$=d("Dialog"),A=d("InputText"),q=d("RouterLink"),L=d("column"),G=d("DataTable");return o(),p("div",ee,[i($,{style:{width:"30rem"},header:k.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:b.value,"onUpdate:visible":a[0]||(a[0]=e=>b.value=e),modal:""},{footer:u(()=>[k.value?(o(),m(c,{key:1,onClick:N,severity:"help",label:"Modificar ingrediente"})):(o(),m(c,{key:0,onClick:N,severity:"help",label:"Guardar ingrediente"}))]),default:u(()=>[(o(!0),p(B,null,R(F.value,e=>(o(),p("div",null,[r("h6",te,h(e.name),1),e.type=="text"?(o(),m(f,{key:0,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="drop"?(o(),m(O,{key:1,options:e.Options,optionLabel:"name",modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):g("",!0),e.type=="money"?(o(),m(P,{key:2,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"},prefix:"$",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="number"?(o(),m(P,{key:3,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):g("",!0),e.type=="persent"?(o(),m(P,{key:4,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"},suffix:"%",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):g("",!0)]))),256))]),_:1},8,["header","visible"]),i($,{class:"mx-2",header:"Eliminar ingrediente",visible:_.value,"onUpdate:visible":a[3]||(a[3]=e=>_.value=e),modal:""},{footer:u(()=>[r("div",ae,[i(c,{size:"small",label:"cancelar",onClick:a[1]||(a[1]=e=>_.value=!1),severity:"help"}),i(c,{size:"small",onClick:a[2]||(a[2]=e=>z()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:u(()=>[r("h6",null,[I("seguro que desea eliminar el Ingrediente "),r("b",null,h(D.value.ingredient_name),1),I(" ?")])]),_:1},8,["visible"]),r("div",ne,[i(G,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:U.value,tableStyle:"min-width: 50rem;",filters:w.value},{header:u(()=>[r("div",le,[oe,i(A,{class:"",modelValue:w.value.global.value,"onUpdate:modelValue":a[4]||(a[4]=e=>w.value.global.value=e),placeholder:"Buscar receta ..."},null,8,["modelValue"]),r("div",ie,[i(q,{to:"/new-cdi-recipe-data-sheet/"},{default:u(()=>[i(c,{size:"small",severity:"help",label:"Nuevo PT"})]),_:1})])])]),default:u(()=>[(o(),p(B,null,R(T,e=>i(L,{header:e.header,style:x([{},`min-width:${e.width}rem`]),field:e.value,class:"py-2"},{body:u(l=>[e.type=="money"?(o(),p("h6",{key:0,style:x([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(M(Y)(l.data[e.value])||"-----------"),5)):e.type=="percent"?(o(),p("h6",{key:1,style:x([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(`${M(Z)(l.data[e.value])}%`||"-----------"),5)):(o(),p("h6",{key:2,style:x([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(l.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),i(L,{header:"Accion",style:{"max-width":"6rem"},field:"name",class:"py-0 px-0 m-0",frozen:"",alignFrozen:"right"},{body:u(e=>[r("div",se,[i(c,{text:"",disabled:"",style:{height:"2rem",width:"2rem"},severity:"warning",icon:"pi pi-pencil"}),i(c,{text:"",disabled:"",style:{height:"2rem",width:"2rem"},severity:"danger",icon:"pi pi-trash"}),i(c,{onClick:l=>S(e.data.id,e.data.name),text:"",severity:"help",style:{height:"2rem",width:"2rem"},icon:"pi pi-eye"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])])}}};export{ce as default};
