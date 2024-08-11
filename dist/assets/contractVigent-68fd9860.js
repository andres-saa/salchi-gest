import{_ as P,r as f,E as S,h as F,K as L,U as v,a as s,o,c as n,d as y,w as c,I as M,b as i,u as T,F as B,e as E,t as r,m,s as V,f as R,q as w,p as D,g as $}from"./index-f28936d7.js";import{f as j}from"./formatoPesos-8aa989a0.js";const z=u=>(D("data-v-030a65e5"),u=u(),$(),u),A={class:"m-auto container"},U={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},O=z(()=>i("h4",{class:"px-2"},[i("i",{class:"fa fa-book"}),w(),i("b",null,"Contratos Vigentes")],-1)),q=["onClick","src","onError"],G={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},H={key:2,class:"m-0 p-0"},K={__name:"contractVigent",setup(u){const b=(t,l)=>{var _;const p={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!t||t==""||t=="N/A"?l.target.src=p.default:l.target.src=p[(_=t.trim())==null?void 0:_.toLowerCase()]},d=f(null),N=()=>{d.value={global:{value:null,matchMode:M.CONTAINS}}};S(()=>{N()});const g=f([{id:1}]),x=[{columnName:"Id",columnValue:"id",columnType:"other"},{columnName:"Id del empleado",columnValue:"employer_id",columnType:"other"},{columnName:"Nombre del empleado",columnValue:"employer_name",columnType:"max-content"},{columnName:"Tipo de contrato",columnValue:"contract_type_name",columnType:"max-content"},{columnName:"Fecha de inicio",columnValue:"start_date",columnType:"date"},{columnName:"Fecha de finalizacion",columnValue:"end_date",columnType:"date"},{columnName:"Dias restantes",columnValue:"days_remaining",columnType:"other"},{columnName:"Salario",columnValue:"salary",columnType:"money"},{columnName:"Creado por",columnValue:"creator_name",columnType:"max-content"},{columnName:"Estado",columnValue:"active",columnType:"bool"}];return F(async()=>{g.value=await L.get(`${v}/get-all-vigent-contracts`,"cargando contratos")}),(t,l)=>{const p=s("InputText"),_=s("Column"),k=s("Tag"),C=s("column"),I=s("DataTable");return o(),n("div",A,[y(I,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:g.value,tableStyle:"min-width: 50rem;",filters:d.value},{header:c(()=>[i("div",U,[O,y(p,{class:"",modelValue:d.value.global.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value.global.value=e),placeholder:"Buscar empleado..."},null,8,["modelValue"])])]),default:c(()=>[y(_,{class:"py-2",header:"Foto",headerStyle:"width:5%; min-width:3rem;"},{body:c(e=>[i("img",{onClick:a=>t.verIMagen(e.data.dni),src:`${T(v)}/read-product-image/96/employer-${e.data.dni}`,onError:a=>b(e.data.gender,a),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,q)]),_:1}),(o(),n(B,null,E(x,e=>y(C,{header:e.columnName,field:e.columnValue},{body:c(a=>{var h;return[e.columnType=="date"?(o(),n("h6",G,r((h=a.data[e.columnValue])==null?void 0:h.split("-").reverse().join("-")),1)):m("",!0),e.columnType=="max-content"?(o(),n("h6",{key:1,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(a.data[e.columnValue]),5)):m("",!0),e.columnType=="other"?(o(),n("h6",H,r(a.data[e.columnValue]),1)):m("",!0),e.columnType=="money"?(o(),n("h6",{key:3,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},r(T(j)(a.data[e.columnValue])),5)):m("",!0),e.columnType=="bool"?(o(),R(k,{key:4,severity:e.columnValue?"success":"danger"},{default:c(()=>[w(r(e.columnValue?"Activo":"Finalizado"),1)]),_:2},1032,["severity"])):m("",!0)]}),_:2},1032,["header","field"])),64))]),_:1},8,["value","filters"])])}}},W=P(K,[["__scopeId","data-v-030a65e5"]]);export{W as default};
