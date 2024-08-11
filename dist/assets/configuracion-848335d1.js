import{r as i,y as K,k as H,h as J,E as Q,a as d,o as s,c as g,d as r,w as u,b as l,K as y,U as c,I as W,f as p,F as M,e as F,t as b,m as _,q as $,u as S,s as U}from"./index-f28936d7.js";import{f as X}from"./formatoPesos-8aa989a0.js";const Y={style:{"max-width":"900px"},class:"m-auto"},Z=l("h3",{style:{"margin-top":"6rem"},class:"text-center p-0 mx-0"},[l("i",{class:"fa fa-gear"}),l("b",null," Configuracion del recetario ")],-1),ee={class:"m-0 my-3"},te={style:{display:"flex","justify-content":"end"}},ae={style:{"margin-top":"3rem"}},ne={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},le=l("h4",{class:"p-0"},[l("i",{class:"fa fa-bowl-rice"}),$(),l("b",null,"Productos que tienen receta")],-1),oe={style:{display:"flex","justify-content":"center"}},se=["src"],ie={style:{display:"flex",gap:".5rem","justify-content":"center"}},ce={__name:"configuracion",setup(re){const C=i({}),x=i(!1),o=i({}),D=i([{}]),T=i([]),V=i(!1),h=i(!1),z=async()=>{const t=C.value.id;await y.delete(`${c}/delete-ingredient/${t}`,"Borrando ingrediente"),h.value=!1,k()},R=async(t,a)=>{const m={status:a};let v="";a?v="Activando":v="desactivando",await y.put(`${c}/toggle_product_to_recipe/${t}`,m,v)},N=[{header:"Id",value:"id",width:"1"},{header:"Producto",value:"recipe_name",type:"max-content",width:""},{header:"Categoria",value:"category_name",width:"10"}],E=i([...N]);K(()=>{var t;return(t=E.value)==null?void 0:t.map(a=>a.value)});const j=i([{name:"Producto",fiel:"namerecipe_name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:i(T),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Peso Bruto (Kg/Litros)",fiel:"net_gross_weight",type:"number"}]);H(o,async(t,a)=>{var m;o.value.purchasing_unit_measure_id=((m=t.purchasing_unit_measure)==null?void 0:m.id)||null},{deep:!0});const B=async()=>{const t=o.value;if(!t.name||!t.purchasing_unit_measure_id||!t.purchasing_price||!t.net_gross_weight){alert("Por favor llene todos los campos");return}V.value?await y.post(`${c}/update-ingredient/${o.value.id}`,t,"Editando ingrediente"):await y.post(`${c}/create-ingredient`,t,"creando un nuevo ingrediente"),k(),x.value=!1},k=async()=>{D.value=await y.get(`${c}/list-recipes`,"cargando ingredientes"),T.value=await y.get(`${c}/daily_inventory_unit_measures`)};J(async()=>{k()});const f=i(null),O=()=>{f.value={global:{value:null,matchMode:W.CONTAINS}}};return Q(()=>{O()}),(t,a)=>{const m=d("inputText"),v=d("Dropdown"),I=d("InputNumber"),w=d("Button"),L=d("Dialog"),q=d("InputText"),P=d("column"),A=d("InputSwitch"),G=d("DataTable");return s(),g("div",Y,[Z,r(L,{style:{width:"30rem"},header:V.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:x.value,"onUpdate:visible":a[0]||(a[0]=e=>x.value=e),modal:""},{footer:u(()=>[V.value?(s(),p(w,{key:1,onClick:B,severity:"help",label:"Modificar ingrediente"})):(s(),p(w,{key:0,onClick:B,severity:"help",label:"Guardar ingrediente"}))]),default:u(()=>[(s(!0),g(M,null,F(j.value,e=>(s(),g("div",null,[l("h6",ee,b(e.name),1),e.type=="text"?(s(),p(m,{key:0,modelValue:o.value[e.fiel],"onUpdate:modelValue":n=>o.value[e.fiel]=n,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="drop"?(s(),p(v,{key:1,options:e.Options,optionLabel:"name",modelValue:o.value[e.fiel],"onUpdate:modelValue":n=>o.value[e.fiel]=n,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):_("",!0),e.type=="money"?(s(),p(I,{key:2,modelValue:o.value[e.fiel],"onUpdate:modelValue":n=>o.value[e.fiel]=n,style:{width:"100%"},prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="number"?(s(),p(I,{key:3,modelValue:o.value[e.fiel],"onUpdate:modelValue":n=>o.value[e.fiel]=n,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):_("",!0),e.type=="persent"?(s(),p(I,{key:4,modelValue:o.value[e.fiel],"onUpdate:modelValue":n=>o.value[e.fiel]=n,style:{width:"100%"},suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):_("",!0)]))),256))]),_:1},8,["header","visible"]),r(L,{class:"mx-2",header:"Eliminar ingrediente",visible:h.value,"onUpdate:visible":a[3]||(a[3]=e=>h.value=e),modal:""},{footer:u(()=>[l("div",te,[r(w,{size:"small",label:"cancelar",onClick:a[1]||(a[1]=e=>h.value=!1),severity:"help"}),r(w,{size:"small",onClick:a[2]||(a[2]=e=>z()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:u(()=>[l("h6",null,[$("seguro que desea eliminar el Ingrediente "),l("b",null,b(C.value.ingredient_name),1),$(" ?")])]),_:1},8,["visible"]),l("div",ae,[r(G,{paginator:!0,rows:10,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,15,25,100],scrollable:"",showGridlines:"",scrollHeight:"67vh",stripedRows:"",class:"col-12 m-auto",value:D.value,tableStyle:"min-width: 50rem;",filters:f.value},{header:u(()=>[l("div",ne,[le,r(q,{class:"",modelValue:f.value.global.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value.global.value=e),placeholder:"Buscar receta ..."},null,8,["modelValue"])])]),default:u(()=>[r(P,{header:"foto",class:"py-1 px-0",style:{"max-width":"2.2rem"}},{body:u(e=>[l("div",oe,[l("img",{class:"p-0 shadow-2",style:{width:"2rem","border-radius":".3rem","background-color":"white"},src:`${S(c)}/read-product-image/96/${e.data.recipe_name}`,alt:""},null,8,se)])]),_:1}),(s(),g(M,null,F(N,e=>r(P,{header:e.header,style:U([{},`min-width:${e.width}rem`]),field:e.value,class:"py-2"},{body:u(n=>[e.type=="money"?(s(),g("h6",{key:0,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},b(S(X)(n.data[e.value])||"-----------"),5)):(s(),g("h6",{key:1,style:U([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},b(n.data[e.value]||"-----------"),5))]),_:2},1032,["header","style","field"])),64)),r(P,{header:"Tiene receta?",style:{"max-width":"4rem"},field:"name",class:"py-0 px-0 m-0",frozen:"",alignFrozen:"right"},{body:u(e=>[l("div",ie,[r(A,{onChange:n=>R(e.data.id,e.data.has_recipe),modelValue:e.data.has_recipe,"onUpdate:modelValue":n=>e.data.has_recipe=n},null,8,["onChange","modelValue","onUpdate:modelValue"])])]),_:1})]),_:1},8,["value","filters"])])])}}};export{ce as default};
