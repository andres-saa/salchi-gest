<<<<<<<< HEAD:dist/assets/contractEnded-a0bb13c8.js
import{_ as I,r as f,H as S,i as F,q as E,U as v,a as s,o,c as n,g as y,w as c,K as L,b as i,u as T,F as M,d as B,t as r,f as m,k as b,e as R,j as V,p as j,h as z}from"./index-9672dc6b.js";import{f as D}from"./formatoPesos-8aa989a0.js";const $=d=>(j("data-v-17ce213b"),d=d(),z(),d),A={class:"m-auto container"},U={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},H=$(()=>i("h4",{class:"px-2"},[i("i",{class:"fa fa-book"}),V(),i("b",null,"Contratos finalizados")],-1)),O=["onClick","src","onError"],q={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},G={key:2,class:"m-0 p-0"},K={__name:"contractEnded",setup(d){const w=(t,l)=>{var _;const p={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!t||t==""||t=="N/A"?l.target.src=p.default:l.target.src=p[(_=t.trim())==null?void 0:_.toLowerCase()]},u=f(null),x=()=>{u.value={global:{value:null,matchMode:L.CONTAINS}}};S(()=>{x()});const h=f([{id:1}]),N=[{columnName:"Id",columnValue:"id",columnType:"other"},{columnName:"Id del empleado",columnValue:"employer_id",columnType:"other"},{columnName:"Nombre del empleado",columnValue:"employer_name",columnType:"max-content"},{columnName:"Tipo de contrato",columnValue:"contract_type_name",columnType:"max-content"},{columnName:"Fecha de inicio",columnValue:"start_date",columnType:"date"},{columnName:"Fecha de finalizacion",columnValue:"end_date",columnType:"date"},{columnName:"Salario",columnValue:"salary",columnType:"money"},{columnName:"Creado por",columnValue:"creator_name",columnType:"max-content"},{columnName:"Estado",columnValue:"active",columnType:"bool"}];return F(async()=>{h.value=await E.get(`${v}/get-all-finished-contracts`,"cargando contratos")}),(t,l)=>{const p=s("InputText"),_=s("Column"),k=s("Tag"),C=s("column"),P=s("DataTable");return o(),n("div",A,[y(P,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:h.value,tableStyle:"min-width: 50rem;",filters:u.value},{header:c(()=>[i("div",U,[H,y(p,{class:"",modelValue:u.value.global.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value.global.value=e),placeholder:"Buscar empleado..."},null,8,["modelValue"])])]),default:c(()=>[y(_,{class:"py-2",header:"Foto",headerStyle:"width:5%; min-width:3rem;"},{body:c(e=>[i("img",{onClick:a=>t.verIMagen(e.data.dni),src:`${T(v)}/read-product-image/96/employer-${e.data.dni}`,onError:a=>w(e.data.gender,a),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,O)]),_:1}),(o(),n(M,null,B(N,e=>y(C,{header:e.columnName,field:e.columnValue},{body:c(a=>{var g;return[e.columnType=="date"?(o(),n("h6",q,r((g=a.data[e.columnValue])==null?void 0:g.split("-").reverse().join("-")),1)):m("",!0),e.columnType=="max-content"?(o(),n("h6",{key:1,style:b(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(a.data[e.columnValue]),5)):m("",!0),e.columnType=="other"?(o(),n("h6",G,r(a.data[e.columnValue]),1)):m("",!0),e.columnType=="money"?(o(),n("h6",{key:3,style:b(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(T(D)(a.data[e.columnValue])),5)):m("",!0),e.columnType=="bool"?(o(),R(k,{key:4,severity:e.columnValue?"success":"danger"},{default:c(()=>[V(r(e.columnValue?"Activo":"Finalizado"),1)]),_:2},1032,["severity"])):m("",!0)]}),_:2},1032,["header","field"])),64))]),_:1},8,["value","filters"])])}}},W=I(K,[["__scopeId","data-v-17ce213b"]]);export{W as default};
========
import{_ as I,r as f,H as S,i as F,q as E,U as v,a as s,o,c as n,g as y,w as c,K as L,b as i,u as T,F as M,d as B,t as r,f as m,k as b,e as R,j as V,p as j,h as z}from"./index-acdf86d7.js";import{f as D}from"./formatoPesos-8aa989a0.js";const $=d=>(j("data-v-9e206f0b"),d=d(),z(),d),A={class:"m-auto container"},U={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},H=$(()=>i("h4",{class:"px-2"},[i("i",{class:"fa fa-book"}),V(),i("b",null,"Contratos finalizados")],-1)),O=["onClick","src","onError"],q={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},G={key:2,class:"m-0 p-0"},K={__name:"contractEnded",setup(d){const w=(t,l)=>{var _;const p={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!t||t==""||t=="N/A"?l.target.src=p.default:l.target.src=p[(_=t.trim())==null?void 0:_.toLowerCase()]},u=f(null),x=()=>{u.value={global:{value:null,matchMode:L.CONTAINS}}};S(()=>{x()});const h=f([{id:1}]),N=[{columnName:"Id",columnValue:"id",columnType:"other"},{columnName:"Id del empleado",columnValue:"employer_id",columnType:"other"},{columnName:"Nombre del empleado",columnValue:"employer_name",columnType:"max-content"},{columnName:"Tipo de contrato",columnValue:"contract_type_name",columnType:"max-content"},{columnName:"Fecha de inicio",columnValue:"start_date",columnType:"date"},{columnName:"Fecha de finalizacion",columnValue:"end_date",columnType:"date"},{columnName:"Salario",columnValue:"salary",columnType:"money"},{columnName:"Creado por",columnValue:"creator_name",columnType:"max-content"},{columnName:"Estado",columnValue:"active",columnType:"bool"}];return F(async()=>{h.value=await E.get(`${v}/get-all-finished-contracts`,"cargando contratos")}),(t,l)=>{const p=s("InputText"),_=s("Column"),k=s("Tag"),C=s("column"),P=s("DataTable");return o(),n("div",A,[y(P,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:h.value,tableStyle:"min-width: 50rem;",filters:u.value},{header:c(()=>[i("div",U,[H,y(p,{class:"",modelValue:u.value.global.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value.global.value=e),placeholder:"Buscar empleado..."},null,8,["modelValue"])])]),default:c(()=>[y(_,{class:"py-2",header:"Foto",headerStyle:"width:5%; min-width:3rem;"},{body:c(e=>[i("img",{onClick:a=>t.verIMagen(e.data.dni),src:`${T(v)}/read-product-image/96/employer-${e.data.dni}`,onError:a=>w(e.data.gender,a),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,O)]),_:1}),(o(),n(M,null,B(N,e=>y(C,{header:e.columnName,field:e.columnValue},{body:c(a=>{var g;return[e.columnType=="date"?(o(),n("h6",q,r((g=a.data[e.columnValue])==null?void 0:g.split("-").reverse().join("-")),1)):m("",!0),e.columnType=="max-content"?(o(),n("h6",{key:1,style:b(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(a.data[e.columnValue]),5)):m("",!0),e.columnType=="other"?(o(),n("h6",G,r(a.data[e.columnValue]),1)):m("",!0),e.columnType=="money"?(o(),n("h6",{key:3,style:b(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(T(D)(a.data[e.columnValue])),5)):m("",!0),e.columnType=="bool"?(o(),R(k,{key:4,severity:e.columnValue?"success":"danger"},{default:c(()=>[V(r(e.columnValue?"Activo":"Finalizado"),1)]),_:2},1032,["severity"])):m("",!0)]}),_:2},1032,["header","field"])),64))]),_:1},8,["value","filters"])])}}},W=I(K,[["__scopeId","data-v-9e206f0b"]]);export{W as default};
>>>>>>>> 28f31c5afd2bb355b3d54512504ed07d683417ac:dist/assets/contractEnded-836fa7a4.js
