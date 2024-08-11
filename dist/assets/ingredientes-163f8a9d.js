import{r as s,y as K,k as J,h as Q,E as W,a as d,o as i,c,d as o,w as m,b as r,F as P,K as w,U as f,I as X,f as g,e as E,t as b,m as v,q as N,s as V,u as L}from"./index-4791e4b6.js";import{f as Y,a as Z}from"./formatoPesos-8aa989a0.js";const ee={class:"m-0 my-3"},te={style:{display:"flex","justify-content":"end"}},ae={style:{"margin-top":"3rem"}},ne={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},le=r("h3",{class:"px-2"},[r("i",{class:"fa fa-carrot"}),N(),r("b",null,"Ingredientes")],-1),ie={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},se={style:{display:"flex","justify-content":"end",gap:".5rem"}},de={__name:"ingredientes",setup(oe){const I=s({}),y=s(!1),a=s({}),D=s([{}]),x=s([]),h=s(!1),_=s(!1),F=t=>{_.value=!0,I.value=t},S=()=>{h.value=!1,a.value={},y.value=!0},z=async()=>{const t=I.value.id;await w.delete(`${f}/delete-ingredient/${t}`,"Borrando ingrediente"),_.value=!1,U()},R=t=>{var n;h.value=!0,a.value={id:t.id,name:t.ingredient_name,purchasing_unit_measure:x.value.find(u=>u.name==t.purchasing_unit_measure),purchasing_unit_measure_id:(n=x.value.find(u=>u.name==t.purchasing_unit_measure)[0])==null?void 0:n.id,purchasing_price:t.purchasing_price,net_gross_weight:t.net_gross_weight},console.log(a.value),y.value=!0},$=[{header:"Id",value:"id",width:"1"},{header:"Nombre ingrediente",value:"ingredient_name",type:"max-content",width:""},{header:"UM de compra",value:"purchasing_unit_measure",width:"10"},{header:"Precio de compra",value:"purchasing_price",width:"10",type:"money"},{header:"No. Un. por compra",value:"number_units_purchasing",width:"10",type:"number"},{header:"Form de compra",value:"purchasing_format",width:"10"},{header:"Presentacion convertir a gramos",value:"net_gross_weight",width:"10",type:"number"},{header:"porcentaje de Merma (%)",value:"shrinkage_persent",width:"8"},{header:"Costo unitario",value:"unit_cost",type:"number"}],j=s([...$]);K(()=>{var t;return(t=j.value)==null?void 0:t.map(n=>n.value)});const O=s([{name:"Nombre del ingrediente",fiel:"name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:s(x),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Presentacion convertir a gramos",fiel:"net_gross_weight",type:"number"}]);J(a,async(t,n)=>{var u;a.value.purchasing_unit_measure_id=((u=t.purchasing_unit_measure)==null?void 0:u.id)||null},{deep:!0});const T=async()=>{const t=a.value;if(!t.name||!t.purchasing_unit_measure_id||!t.purchasing_price||!t.net_gross_weight){alert("Por favor llene todos los campos");return}h.value?await w.post(`${f}/update-ingredient/${a.value.id}`,t,"Editando ingrediente"):await w.post(`${f}/create-ingredient`,t,"creando un nuevo ingrediente"),U(),y.value=!1},U=async()=>{D.value=await w.get(`${f}/list-ingredients`,"cargando ingredientes"),x.value=await w.get(`${f}/daily_inventory_unit_measures`)};Q(async()=>{U()});const k=s(null),A=()=>{k.value={global:{value:null,matchMode:X.CONTAINS}}};return W(()=>{A()}),(t,n)=>{const u=d("inputText"),q=d("Dropdown"),C=d("InputNumber"),p=d("Button"),M=d("Dialog"),G=d("InputText"),B=d("column"),H=d("DataTable");return i(),c(P,null,[o(M,{style:{width:"30rem"},header:h.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:y.value,"onUpdate:visible":n[0]||(n[0]=e=>y.value=e),modal:""},{footer:m(()=>[h.value?(i(),g(p,{key:1,onClick:T,severity:"help",label:"Modificar ingrediente"})):(i(),g(p,{key:0,onClick:T,severity:"help",label:"Guardar ingrediente"}))]),default:m(()=>[(i(!0),c(P,null,E(O.value,e=>(i(),c("div",null,[r("h6",ee,b(e.name),1),e.type=="text"?(i(),g(u,{key:0,modelValue:a.value[e.fiel],"onUpdate:modelValue":l=>a.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="drop"?(i(),g(q,{key:1,options:e.Options,optionLabel:"name",modelValue:a.value[e.fiel],"onUpdate:modelValue":l=>a.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):v("",!0),e.type=="money"?(i(),g(C,{key:2,modelValue:a.value[e.fiel],"onUpdate:modelValue":l=>a.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="number"?(i(),g(C,{key:3,modelValue:a.value[e.fiel],"onUpdate:modelValue":l=>a.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),e.type=="persent"?(i(),g(C,{key:4,modelValue:a.value[e.fiel],"onUpdate:modelValue":l=>a.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):v("",!0)]))),256))]),_:1},8,["header","visible"]),o(M,{class:"mx-2",header:"Eliminar ingrediente",visible:_.value,"onUpdate:visible":n[3]||(n[3]=e=>_.value=e),modal:""},{footer:m(()=>[r("div",te,[o(p,{size:"small",label:"cancelar",onClick:n[1]||(n[1]=e=>_.value=!1),severity:"help"}),o(p,{size:"small",onClick:n[2]||(n[2]=e=>z()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:m(()=>[r("h6",null,[N("seguro que desea eliminar el Ingrediente "),r("b",null,b(I.value.ingredient_name),1),N(" ?")])]),_:1},8,["visible"]),r("div",ae,[o(H,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:D.value,tableStyle:"min-width: 50rem;",filters:k.value},{header:m(()=>[r("div",ne,[le,o(G,{class:"",modelValue:k.value.global.value,"onUpdate:modelValue":n[4]||(n[4]=e=>k.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),r("div",ie,[o(p,{size:"small",severity:"help",onClick:S,label:"Nuevo ingredinte"})])]),default:m(()=>[(i(),c(P,null,E($,e=>o(B,{header:e.header,style:V(`min-width:${e.width}rem`),field:e.value,class:"py-2"},{body:m(l=>[e.type=="money"?(i(),c("h6",{key:0,style:V([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},b(L(Y)(l.data[e.value])||"-----------"),5)):v("",!0),e.type=="number"?(i(),c("h6",{key:1,style:V([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},b(L(Z)(l.data[e.value])||"-----------"),5)):e.type!="money"&&e.type!="number"?(i(),c("h6",{key:2,style:V([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},b(l.data[e.value]||"-----------"),5)):v("",!0)]),_:2},1032,["header","style","field"])),64)),o(B,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-2",frozen:"",alignFrozen:"right"},{body:m(e=>[r("div",se,[o(p,{text:"",onClick:l=>R(e.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),o(p,{text:"",onClick:l=>F(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])],64)}}};export{de as default};
