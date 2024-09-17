import{r as d,H as pe,y as me,k as ve,m as ye,E as ge,a as y,o,c as v,g as n,w as c,b as s,F as $,K as b,U as x,I as he,e as g,d as Q,t as h,f,q as N,u as P,s as I}from"./index-fcc1124b.js";import{f as F,a as ee}from"./formatoPesos-8aa989a0.js";import{r as fe,u as B,w as _e}from"./xlsx-4f9172c7.js";const we={class:"m-0 my-3"},be={style:{display:"flex","justify-content":"end"}},xe={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},Ie=s("h3",{class:"px-2"},[s("i",{class:"fa fa-upload"}),N(),s("b",null,"Carga de precios")],-1),ke=s("div",{style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},null,-1),Pe={class:"p-2",style:{display:"flex","flex-wrap":"wrap","justify-content":"end",gap:"1rem"}},Ce={style:{"margin-top":"3rem"}},Ve={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},De=s("h3",{class:"px-2"},[s("i",{class:"fa fa-carrot"}),N(),s("b",null,"Ingredientes")],-1),Ee={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},Ue=s("h6",{class:"m-0"},[s("b",null," Porcentajes visible")],-1),Re=s("div",null,null,-1),Te={style:{display:"flex","justify-content":"end",gap:".5rem"}},ze={__name:"pricesCdiTable",setup(Ne){const L=d([]),M=d(null),C=d(!1),W=()=>{C.value=!0,M.value&&(M.value.value="",M.value.click())},te=async a=>{const t=a.target.files[0];if(t)try{const i=await ae(t);L.value=i,C.value=!0,console.log(L.value)}catch(i){console.error("Error al leer el archivo:",i)}},ae=a=>new Promise((t,i)=>{const p=new FileReader;p.onload=w=>{try{const u=new Uint8Array(w.target.result),k=fe(u,{type:"array"}),S=k.SheetNames[0],m=k.Sheets[S],J=B.sheet_to_json(m).filter(e=>e.ID&&e.ID.toString().trim()!=="");t(J)}catch(u){i(u)}},p.onerror=w=>{i(w)},p.readAsArrayBuffer(a)}),X=pe(),O=d([]),j=d({}),V=d(!1),r=d({}),G=d([{}]),z=d([]),D=d(!1),E=d(!1),le=a=>{E.value=!0,j.value=a},ne=()=>{D.value=!1,r.value={},V.value=!0},se=async()=>{const a=j.value.id;await b.delete(`${x}/delete-ingredient/${a}`,"Borrando ingrediente"),E.value=!1,A()},oe=a=>{var t;D.value=!0,r.value={id:a.id,name:a.name,purchasing_unit_measure:z.value.find(i=>i.name==a.unit_measure),purchasing_unit_measure_id:(t=z.value.find(i=>i.name==a.unit_measure)[0])==null?void 0:t.id,purchasing_price:a.last_price_purchase,net_gross_weight:a.net_gross_weight,iva:a.iva},console.log(r.value),V.value=!0},H=d([{percent:"cargando..."}]),Y=[{header:"Id",value:"id",width:"1",frozen:!0},{header:"Nombre ingrediente",value:"name",type:"max-content",width:"",frozen:!0},{header:"UM de compra",value:"unit_measure",width:"10",frozen:!1},{header:"Ultimo precio de compra",value:"last_price_purchase",width:"10",type:"money",frozen:!1},{header:"iva",value:"iva",width:"5",type:"percent",frozen:!1}],ie=d([...Y]);me(()=>{var a;return(a=ie.value)==null?void 0:a.map(t=>t.value)});const re=d([{name:"Nombre del ingrediente",fiel:"name",type:"text"},{name:"Unidad de medida de compra",fiel:"purchasing_unit_measure",type:"drop",Options:d(z),optionLable:"name"},{name:"precio de compra",fiel:"purchasing_price",type:"money"},{name:"Presentacion convertir a gramos",fiel:"net_gross_weight",type:"number"},{name:"iva (%)",fiel:"iva",type:"persent"}]);ve(r,async(a,t)=>{var i;r.value.purchasing_unit_measure_id=((i=a.purchasing_unit_measure)==null?void 0:i.id)||null},{deep:!0});const de=async()=>{X.setLoading(!0,"generando descargas");const a=G.value.map(p=>({ID:p.id,INGREDIENTE:p.name,"IVA (%)":p.iva,"ULTIMO PRECIO DE COMPRA":p.last_price_purchase})),t=B.json_to_sheet(a);t["!cols"]=[{wch:3},{wch:50},{wch:8},{wch:25}];const i=B.book_new();B.book_append_sheet(i,t,"Usuarios"),_e(i,"Ultimos precios de compra.xlsx"),X.setLoading(!1,"generando descargas")},Z=async()=>{const a=r.value;if(!a.name||!a.purchasing_unit_measure_id||!a.purchasing_price||!a.net_gross_weight){alert("Por favor llene todos los campos");return}D.value?await b.post(`${x}/update-ingredient/${r.value.id}`,a,"Editando ingrediente"):await b.post(`${x}/create-ingredient`,a,"creando un nuevo ingrediente"),A(),V.value=!1},ue=async()=>{const a=L.value.map(t=>({ingredient_id:t.ID,name:t.INGREDIENTE,iva:t["IVA (%)"]||0,last_price_purchase:parseFloat(t["ULTIMO PRECIO DE COMPRA"])||0}));console.log(a),await b.put(`${x}/update-bulk-last-purchase-price`,a,"cargando precios"),A(),C.value=!1},A=async()=>{G.value=await b.get(`${x}/get-cdi-prices-table`,"cargando ingredientes"),z.value=await b.get(`${x}/daily_inventory_unit_measures`),H.value=await b.get(`${x}/get-prices-cdi-percents`)};ye(async()=>{A()});const _=d(null),ce=()=>{_.value={global:{value:null,matchMode:he.CONTAINS}}};return ge(()=>{ce()}),(a,t)=>{const i=y("inputText"),p=y("Dropdown"),w=y("InputNumber"),u=y("Button"),k=y("Dialog"),S=y("InputText"),m=y("column"),q=y("DataTable"),J=y("MultiSelect");return o(),v($,null,[n(k,{style:{width:"30rem"},header:D.value?"Actualizar Ingrediente":"Nuevo Ingrediente",class:"mx-2",visible:V.value,"onUpdate:visible":t[0]||(t[0]=e=>V.value=e),modal:""},{footer:c(()=>[D.value?(o(),g(u,{key:1,onClick:Z,severity:"help",label:"Modificar ingrediente"})):(o(),g(u,{key:0,onClick:Z,severity:"help",label:"Guardar ingrediente"}))]),default:c(()=>[(o(!0),v($,null,Q(re.value,e=>(o(),v("div",null,[s("h6",we,h(e.name),1),e.type=="text"?(o(),g(i,{key:0,modelValue:r.value[e.fiel],"onUpdate:modelValue":l=>r.value[e.fiel]=l,style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="drop"?(o(),g(p,{key:1,options:e.Options,optionLabel:"name",modelValue:r.value[e.fiel],"onUpdate:modelValue":l=>r.value[e.fiel]=l,style:{width:"100%"}},null,8,["options","modelValue","onUpdate:modelValue"])):f("",!0),e.type=="money"?(o(),g(w,{key:2,modelValue:r.value[e.fiel],"onUpdate:modelValue":l=>r.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",prefix:"$"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="number"?(o(),g(w,{key:3,modelValue:r.value[e.fiel],"onUpdate:modelValue":l=>r.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.type=="persent"?(o(),g(w,{key:4,modelValue:r.value[e.fiel],"onUpdate:modelValue":l=>r.value[e.fiel]=l,style:{width:"100%"},locale:"es-ES","max-fraction-digits":"3",suffix:"%"},null,8,["modelValue","onUpdate:modelValue"])):f("",!0)]))),256))]),_:1},8,["header","visible"]),n(k,{class:"mx-2",header:"Eliminar ingrediente",visible:E.value,"onUpdate:visible":t[3]||(t[3]=e=>E.value=e),modal:""},{footer:c(()=>[s("div",be,[n(u,{size:"small",label:"cancelar",onClick:t[1]||(t[1]=e=>E.value=!1),severity:"help"}),n(u,{size:"small",onClick:t[2]||(t[2]=e=>se()),label:"Eliminar ingrediente",severity:"danger",text:""})])]),default:c(()=>[s("h6",null,[N("seguro que desea eliminar el Ingrediente "),s("b",null,h(j.value.name),1),N(" ?")])]),_:1},8,["visible"]),n(k,{visible:C.value,"onUpdate:visible":t[6]||(t[6]=e=>C.value=e),modal:"",header:"Actualizar ultimos precios de compra",class:"px-0",style:{"max-width":"60rem",width:"95%"}},{footer:c(()=>[s("div",Pe,[n(u,{size:"small",icon:"pi pi-upload",severity:"help",onClick:W,label:"Cargar otro archivo"}),n(u,{size:"small",onClick:t[5]||(t[5]=e=>ue()),label:"Actualizar (Tener cuidado)",severity:"danger"})])]),default:c(()=>[n(q,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:L.value,tableStyle:"min-width: 50rem;",filters:_.value},{header:c(()=>[s("div",xe,[Ie,n(S,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":t[4]||(t[4]=e=>_.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),ke]),default:c(()=>[n(m,{header:"ID",field:"ID",class:"py-1"}),n(m,{header:"INGREDIENTE",field:"INGREDIENTE",class:"py-1"}),n(m,{header:"IVA",field:"IVA (%)",class:"py-1"}),n(m,{header:"ULTIMO PRECIO DE COMPRA",field:"ULTIMO PRECIO DE COMPRA",class:"py-1"},{body:c(e=>[N(h(P(F)(e.data["ULTIMO PRECIO DE COMPRA"])),1)]),_:1})]),_:1},8,["value","filters"])]),_:1},8,["visible"]),s("div",Ce,[n(q,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} recetas",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:G.value,tableStyle:"min-width: 50rem;",filters:_.value},{header:c(()=>[s("div",Ve,[De,n(S,{class:"",modelValue:_.value.global.value,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value.global.value=e),placeholder:"Buscar ingrediente ..."},null,8,["modelValue"])]),s("div",Ee,[Ue,n(J,{optionLabel:"percent",modelValue:O.value,"onUpdate:modelValue":t[8]||(t[8]=e=>O.value=e),placeholder:"Columnas visibles",options:H.value},null,8,["modelValue","options"]),n(u,{size:"small",icon:"pi pi-plus",severity:"help",onClick:ne,label:"Nuevo ingredinte"}),n(u,{size:"small",icon:"pi pi-download",severity:"help",onClick:de,label:"Descargar plantilla"}),n(u,{size:"small",icon:"pi pi-upload",severity:"danger",onClick:W,label:"Cargar precios"}),s("input",{type:"file",ref_key:"fileInput",ref:M,accept:".xlsx, .csv",style:{display:"none"},onChange:te},null,544)])]),default:c(()=>[(o(),v($,null,Q(Y,e=>n(m,{frozen:e.frozen,header:e.header,style:I(`min-width:${e.width}rem`),field:e.value,class:"py-2"},{body:c(l=>[e.type=="money"?(o(),v("h6",{key:0,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(P(F)(l.data[e.value])||"-----------"),5)):e.type=="percent"?(o(),v("h6",{key:1,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(`${P(ee)(l.data[e.value])}%`||"-----------"),5)):e.type=="number"?(o(),v("h6",{key:2,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(P(ee)(l.data[e.value])||"-----------"),5)):e.type!="money"&&e.type!="number"?(o(),v("h6",{key:3,style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(l.data[e.value]||"-----------"),5)):f("",!0)]),_:2},1032,["frozen","header","style","field"])),64)),Re,(o(!0),v($,null,Q(H.value,e=>(o(),v("div",null,[O.value.some(l=>l.percent==e.percent)?(o(),g(m,{key:0,header:`Al ${e.percent}%`,style:"min-width:6rem",field:e.value,class:"py-2"},{body:c(l=>{var U,R,T;return[s("h6",{style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(P(F)((T=(R=(U=l.data)==null?void 0:U.percent_prices)==null?void 0:R.find(K=>K.hasOwnProperty(e.percent.toString())))==null?void 0:T[e.percent])||"-----------"),5)]}),_:2},1032,["header","field"])):f("",!0),O.value.some(l=>l.percent==e.percent)?(o(),g(m,{key:1,header:`Al ${e.percent}% + IVA`,style:"min-width:10rem",field:e.value,class:"py-2"},{body:c(l=>{var U,R,T;return[s("h6",{style:I([{"text-transform":"lowercase"},e.type=="max-content"?"min-width:max-content":""]),class:"my-0 p-0"},h(P(F)((T=(R=(U=l.data)==null?void 0:U.percent_prices_iva)==null?void 0:R.find(K=>K.hasOwnProperty(e.percent)))==null?void 0:T[e.percent])||"-----------"),5)]}),_:2},1032,["header","field"])):f("",!0)]))),256)),n(m,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-1",frozen:"",alignFrozen:"right"},{body:c(e=>[s("div",Te,[n(u,{text:"",onClick:l=>oe(e.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),n(u,{text:"",onClick:l=>le(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])])],64)}}};export{ze as default};
