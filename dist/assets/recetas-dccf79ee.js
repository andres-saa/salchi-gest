import{r,y as G,k as H,h as K,E as J,a as u,o,c as p,d as s,w as d,b as i,U as y,I as Q,f as m,F as L,e as M,t as f,m as v,q as U,u as R,s as I,i as W}from"./index-db916a24.js";import{f as g}from"./fetchService-8efb7707.js";import{f as X}from"./formatoPesos-78ea101b.js";const Y={style:{"max-width":"900px"},class:"m-auto"},Z={class:"m-0 my-3"},ee={style:{display:"flex","justify-content":"end"}},te={style:{"margin-top":"3rem"}},ae={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},ne=i("h3",{class:"px-2"},[i("i",{class:"fa fa-bowl-rice"}),U(),i("b",null,"Recetas")],-1),le={style:{display:"flex","justify-content":"center"}},oe=["src"],se={style:{display:"flex",gap:".5rem","justify-content":"center"}},ce={__name:"recetas",setup(ie){const F=(t,a)=>{W.push({name:"recipe_data_sheet",params:{product_id:t,recipe_name:a}})},C=r({}),b=r(!1),n=r({}),D=r([{}]),$=r([]),x=r(!1),h=r(!1),z=async()=>{const t=C.value.id;await g.delete(`${y}/delete-ingredient/${t}`,"Borrando ingrediente"),h.value=!1,V()},T=[{header:"Id",value:"id",width:"1"},{header:"Producto",value:"recipe_name",type:"max-content",width:""},{header:"Categoria",value:"category_name",width:"10"}],S=r([...T]);G(()=>{var t;return(t=S.value)==null?void 0:t.map(a=>a.value)});const E=r([{name:"Producto",fiel:"namerecipe_name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:r($),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Peso Bruto (Kg/Litros)",fiel:"net_gross_weight",type:"number"}]);H(n,async(t,a)=>{var w;n.value.purchasing_unit_measure_id=((w=t.purchasing_unit_measure)==null?void 0:w.id)||null},{deep:!0});const N=async()=>{const t=n.value;if(!t.name||!t.purchasing_unit_measure_id||!t.purchasing_price||!t.net_gross_weight){alert("Por favor llene todos los campos");return}x.value?await g.post(`${y}/update-ingredient/${n.value.id}`,t,"Editando ingrediente"):await g.post(`${y}/create-ingredient`,t,"creando un nuevo ingrediente"),V(),b.value=!1},V=async()=>{D.value=await g.get(`${y}/list-recipes-enabled`,"cargando ingredientes"),$.value=await g.get(`${y}/daily_inventory_unit_measures`)};K(async()=>{V()});const _=r(null),j=()=>{_.value={global:{value:null,matchMode:Q.CONTAINS}}};return J(()=>{j()}),(t,a)=>{const w=u("inputText"),O=u("Dropdown"),k=u("InputNumber"),c=u("Button"),B=u("Dialog"),A=u("InputText"),P=u("column"),q=u("DataTable");return o(),p("div",Y,[s(B,{style:{width:"30rem"},header:x.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:b.value,"onUpdate:visible":a[0]||(a[0]=e=>b.value=e),modal:""},{footer:d(()=>[x.value?(o(),m(c,{key:1,onClick:N,severity:"help",label:"Modificar ingrediente"})):(o(),m(c,{key:0,onClick:N,severity:"help",label:"Guardar ingrediente"}))]),default:d(()=>[(o(!0),p(L,null,M(E.value,e=>(o(),p("div",null,[i("h6",Z,f(e.name),1),e.type=="text"?(o(),m(w,{key:0,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="drop"?(o(),m(O,{key:1,options:e.Options,optionLabel:"name",modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):v("",!0),e.type=="money"?(o(),m(k,{key:2,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"},prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="number"?(o(),m(k,{key:3,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="persent"?(o(),m(k,{key:4,modelValue:n.value[e.fiel],"onUpdate:modelValue":l=>n.value[e.fiel]=l,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0)]))),256))]),_:1},8,["header","visible"]),s(B,{class:"mx-2",header:"Eliminar ingrediente",visible:h.value,"onUpdate:visible":a[3]||(a[3]=e=>h.value=e),modal:""},{footer:d(()=>[i("div",ee,[s(c,{size:"small",label:"cancelar",onClick:a[1]||(a[1]=e=>h.value=!1),severity:"help"}),s(c,{size:"small",onClick:a[2]||(a[2]=e=>z()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:d(()=>[i("h6",null,[U("seguro que desea eliminar el Ingrediente "),i("b",null,f(C.value.ingredient_name),1),U(" ?")])]),_:1},8,["visible"]),i("div",te,[s(q,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:D.value,tableStyle:"min-width: 50rem;",filters:_.value},{header:d(()=>[i("div",ae,[ne,s(A,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":a[4]||(a[4]=e=>_.value.global.value=e),placeholder:"Buscar receta ..."},null,8,["modelValue"])])]),default:d(()=>[s(P,{header:"foto",class:"py-1 px-0",style:{"max-width":"2.2rem"}},{body:d(e=>[i("div",le,[i("img",{class:"p-0 shadow-2",style:{width:"2rem","border-radius":".3rem","background-color":"white"},src:`${R(y)}/read-product-image/96/${e.data.recipe_name}`,alt:""},null,8,oe)])]),_:1}),(o(),p(L,null,M(T,e=>s(P,{header:e.header,style:I([{},`min-width:${e.width}rem`]),field:e.value,class:"py-2"},{body:d(l=>[e.type=="money"?(o(),p("h6",{key:0,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},f(R(X)(l.data[e.value])||"-----------"),5)):(o(),p("h6",{key:1,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},f(l.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),s(P,{header:"Accion",style:{"max-width":"6rem"},field:"name",class:"py-0 px-0 m-0",frozen:"",alignFrozen:"right"},{body:d(e=>[i("div",se,[s(c,{text:"",disabled:"",style:{height:"2rem",width:"2rem"},severity:"warning",icon:"pi pi-pencil"}),s(c,{text:"",disabled:"",style:{height:"2rem",width:"2rem"},severity:"danger",icon:"pi pi-trash"}),s(c,{onClick:l=>F(e.data.id,e.data.recipe_name),text:"",severity:"help",style:{height:"2rem",width:"2rem"},icon:"pi pi-eye"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])])}}};export{ce as default};