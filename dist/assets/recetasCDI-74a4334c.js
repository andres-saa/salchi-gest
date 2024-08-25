import{r as d,y as W,k as X,h as Y,E as Z,a as p,o as i,c as m,d as n,w as u,b as r,K as v,U as y,I as ee,q as f,t as h,f as c,F as B,e as M,m as _,s as k,u as R,i as te}from"./index-35d31a65.js";import{f as ae,a as ne}from"./formatoPesos-8aa989a0.js";const le={style:{"max-width":"1366px"},class:"m-auto"},se={style:{display:"flex","justify-content":"end"}},oe={class:"m-0 my-3"},ie={style:{display:"flex","justify-content":"end"}},re={style:{"margin-top":"3rem"}},de={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},ue=r("h3",{class:"px-2"},[r("i",{class:"fa fa-bowl-rice"}),f(),r("b",null,"Productos terminados")],-1),pe={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},me={class:"px-2",style:{display:"flex",gap:".5rem","justify-content":"center"}},he={__name:"recetasCDI",setup(ce){const g=d(!1),V=d({}),S=(a,t)=>{te.push({name:"cdi_recipe_data_sheet",params:{product_id:a,recipe_name:t}})},$=d({}),P=d(!1),s=d({}),D=d([{}]),T=d([]),C=d(!1),w=d(!1),E=async()=>{const a=$.value.id;await v.delete(`${y}/delete-ingredient/${a}`,"Borrando ingrediente"),w.value=!1,x()},N=[{header:"Id",value:"id",width:"1"},{header:"Nombre",value:"name",type:"max-content",width:""},{header:"Unidad de medida de PT",value:"unit_measure",type:"max-content",width:""},{header:"Iva",value:"iva",width:"10",type:"percent"},{header:"Precio de venta a las sedes",value:"purchase_price",width:"10",type:"money"},{header:"presentacion convertir a gramos",value:"convert_value",width:"10",type:"money"},{header:"Costo unitario",value:"unit_cost",width:"10",type:"money"}],F=d([...N]);W(()=>{var a;return(a=F.value)==null?void 0:a.map(t=>t.value)});const j=d([{name:"Producto",fiel:"namerecipe_name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:d(T),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Peso Bruto (Kg/Litros)",fiel:"net_gross_weight",type:"number"}]);X(s,async(a,t)=>{var o;s.value.purchasing_unit_measure_id=((o=a.purchasing_unit_measure)==null?void 0:o.id)||null},{deep:!0});const L=async()=>{const a=s.value;if(!a.name||!a.purchasing_unit_measure_id||!a.purchasing_price||!a.net_gross_weight){alert("Por favor llene todos los campos");return}C.value?await v.post(`${y}/update-ingredient/${s.value.id}`,a,"Editando ingrediente"):await v.post(`${y}/create-ingredient`,a,"creando un nuevo ingrediente"),x(),P.value=!1},x=async()=>{D.value=await v.get(`${y}/list-cdi-recipes`,"cargando ingredientes"),T.value=await v.get(`${y}/daily_inventory_unit_measures`)};Y(async()=>{x()});const O=async a=>{await v.post(`${y}/pt_to_pasamanos/${a}`,{},"Convirtiendo"),x(),g.value=!1},q=a=>{g.value=!0,V.value=a},b=d(null),A=()=>{b.value={global:{value:null,matchMode:ee.CONTAINS}}};return Z(()=>{A()}),(a,t)=>{const o=p("Button"),I=p("Dialog"),G=p("inputText"),K=p("Dropdown"),U=p("InputNumber"),H=p("InputText"),J=p("RouterLink"),z=p("column"),Q=p("DataTable");return i(),m("div",le,[n(I,{class:"mx-2",header:"Mover",visible:g.value,"onUpdate:visible":t[2]||(t[2]=e=>g.value=e),modal:""},{footer:u(()=>[r("div",se,[n(o,{size:"small",label:"cancelar",onClick:t[0]||(t[0]=e=>g.value=!1),severity:"help"}),n(o,{size:"small",onClick:t[1]||(t[1]=e=>O(V.value.id)),label:"Convertir en Pasamanos",severity:"danger",text:""})])]),default:u(()=>{var e;return[r("h6",null,[f("seguro que desea convertir "),r("b",null,h((e=V.value)==null?void 0:e.name),1),f(" en un Pasamanos ?")])]}),_:1},8,["visible"]),n(I,{style:{width:"30rem"},header:C.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:P.value,"onUpdate:visible":t[3]||(t[3]=e=>P.value=e),modal:""},{footer:u(()=>[C.value?(i(),c(o,{key:1,onClick:L,severity:"help",label:"Modificar ingrediente"})):(i(),c(o,{key:0,onClick:L,severity:"help",label:"Guardar ingrediente"}))]),default:u(()=>[(i(!0),m(B,null,M(j.value,e=>(i(),m("div",null,[r("h6",oe,h(e.name),1),e.type=="text"?(i(),c(G,{key:0,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="drop"?(i(),c(K,{key:1,options:e.Options,optionLabel:"name",modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):_("",!0),e.type=="money"?(i(),c(U,{key:2,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"},prefix:"$",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="number"?(i(),c(U,{key:3,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="persent"?(i(),c(U,{key:4,modelValue:s.value[e.fiel],"onUpdate:modelValue":l=>s.value[e.fiel]=l,style:{width:"100%"},suffix:"%",locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):_("",!0)]))),256))]),_:1},8,["header","visible"]),n(I,{class:"mx-2",header:"Eliminar ingrediente",visible:w.value,"onUpdate:visible":t[6]||(t[6]=e=>w.value=e),modal:""},{footer:u(()=>[r("div",ie,[n(o,{size:"small",label:"cancelar",onClick:t[4]||(t[4]=e=>w.value=!1),severity:"help"}),n(o,{size:"small",onClick:t[5]||(t[5]=e=>E()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:u(()=>[r("h6",null,[f("seguro que desea eliminar el Ingrediente "),r("b",null,h($.value.ingredient_name),1),f(" ?")])]),_:1},8,["visible"]),r("div",re,[n(Q,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:D.value,tableStyle:"min-width: 50rem;",filters:b.value},{header:u(()=>[r("div",de,[ue,n(H,{class:"",modelValue:b.value.global.value,"onUpdate:modelValue":t[7]||(t[7]=e=>b.value.global.value=e),placeholder:"Buscar receta ..."},null,8,["modelValue"]),r("div",pe,[n(J,{to:"/new-cdi-recipe-data-sheet/"},{default:u(()=>[n(o,{size:"small",severity:"help",label:"Nuevo PT"})]),_:1})])])]),default:u(()=>[(i(),m(B,null,M(N,e=>n(z,{header:e.header,style:k([{},`min-width:${e.width}rem`]),field:e.value,class:"py-2"},{body:u(l=>[e.type=="money"?(i(),m("h6",{key:0,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(R(ae)(l.data[e.value])||"-----------"),5)):e.type=="percent"?(i(),m("h6",{key:1,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(`${R(ne)(l.data[e.value])}%`||"-----------"),5)):(i(),m("h6",{key:2,style:k([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(l.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),n(z,{header:"Accion",style:{"max-width":"max-content"},field:"name",class:"py-0 px-0 m-0",frozen:"",alignFrozen:"right"},{body:u(e=>[r("div",me,[n(o,{text:"",disabled:"",style:{height:"1rem",width:"1rem"},severity:"warning",icon:"pi pi-pencil"}),n(o,{text:"",disabled:"",style:{height:"1rem",width:"1rem"},severity:"danger",icon:"pi pi-trash"}),n(o,{onClick:l=>S(e.data.id,e.data.name),text:"",severity:"help",style:{height:"1rem",width:"1rem"},icon:"pi pi-eye"},null,8,["onClick"]),n(o,{severity:"danger",onClick:l=>q(e.data),style:{"min-width":"max-content"},class:"px-1 py-0 mx-1",size:"small",label:"-> Pasam."},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])])}}};export{he as default};
