import{_ as L,r as v,q as F,a as s,o,c as n,g as i,w as c,b as t,F as T,s as H,t as l,m as k,f as m,d as M,k as V,e as O,p as $,h as A}from"./index-5708809f.js";const p=d=>($("data-v-b35c52bf"),d=d(),A(),d),G={style:{display:"flex","flex-direction":"column"}},U={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},q={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},E={class:"m-0"},J=p(()=>t("div",null,null,-1)),K={class:"m-0"},Q={key:0},W=p(()=>t("b",null,"Notas",-1)),X=p(()=>t("br",null,null,-1)),Y=p(()=>t("div",{style:{display:"flex",gap:"1rem"}},null,-1)),Z={style:{"max-width":"1280px",margin:"auto"}},ee={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},te=p(()=>t("span",null,null,-1)),ae={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},le={key:2,class:"m-0 p-0"},oe={key:3,class:"m-0 p-0"},se={href:`
                `,style:{color:"blue"}},ne={style:{display:"flex","flex-direction":"column",gap:".1rem"}},ie={__name:"Rejected",setup(d){const y=v(!1),u=v(null),C=()=>{u.value={global:{value:null,matchMode:H.CONTAINS}}},g=v([]),x=async h=>{y.value=!0,g.value=h};F(()=>{C()});const z=[{columnName:"Nombre",columnValue:"name",columnType:"max-content"},{columnName:"Correo electronico",columnValue:"email",columnType:"other"},{columnName:"Telefono",columnValue:"phone",columnType:"other"}],N=[{id:5,name:"Sara Jiménez",email:"sara.jimenez@example.com",phone:"5566778899"},{id:6,name:"Diego Ramírez",email:"diego.ramirez@example.com",phone:"6677889900"},{id:7,name:"Carmen Hernández",email:"carmen.hernandez@example.com",phone:"7788990011"},{id:8,name:"Francisco García",email:"francisco.garcia@example.com",phone:"8899001122"},{id:9,name:"Beatriz Álvarez",email:"beatriz.alvarez@example.com",phone:"9900112233"},{id:10,name:"Manuel Ortiz",email:"manuel.ortiz@example.com",phone:"0011223344"}];return(h,_)=>{const P=s("Timeline"),R=s("Dialog"),B=s("InputText"),D=s("Tag"),S=s("column"),f=s("Button"),j=s("Column"),I=s("DataTable");return o(),n(T,null,[i(R,{class:"mx-2",visible:y.value,"onUpdate:visible":_[0]||(_[0]=e=>y.value=e),modal:"",header:"Historial mi solicitud",style:{width:"30rem"}},{default:c(()=>[i(P,{value:g.value},{opposite:c(e=>{var a,r,b,w;return[t("div",G,[t("p",U,l((a=e.item.time)==null?void 0:a.split(" ")[0]),1),t("p",q,l((w=(b=(r=e.item.time)==null?void 0:r.split(" "))==null?void 0:b.slice(2,3))==null?void 0:w[0]),1)])]}),content:c(e=>[t("p",E,[t("b",null,l(e.item.lap),1)]),J,t("p",K,l(e.item.responsible),1),e.item.notes?(o(),n("p",Q,[W,k(" "+l(e.item.notes),1)])):m("",!0),X,Y]),_:1},8,["value"])]),_:1},8,["visible"]),t("div",Z,[i(I,{paginator:!0,rows:5,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} solicitudes",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:N,tableStyle:"min-width: 50rem;",filters:u.value},{header:c(()=>[t("div",ee,[te,i(B,{class:"",modelValue:u.value.global.value,"onUpdate:modelValue":_[1]||(_[1]=e=>u.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])]),default:c(()=>[(o(),n(T,null,M(z,e=>i(S,{header:e.columnName,field:e.columnValue,class:"my-0 py-0"},{body:c(a=>{var r;return[e.columnType=="date"?(o(),n("h6",ae,l((r=a.data[e.columnValue])==null?void 0:r.split("-").reverse().join("-")),1)):m("",!0),e.columnType=="max-content"?(o(),n("h6",{key:1,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},l(a.data[e.columnValue]),5)):m("",!0),e.columnType=="other"?(o(),n("h6",le,l(a.data[e.columnValue]),1)):m("",!0),e.columnType=="link"?(o(),n("h6",oe,[t("a",se,l(a.data[e.columnValue]),1)])):m("",!0),e.columnType=="money"?(o(),n("h6",{key:4,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},l(h.formatoPesosColombianos(a.data[e.columnValue])),5)):m("",!0),e.columnValue=="active"?(o(),O(D,{key:5,class:"p-2",style:{color:"white"},severity:`${a.data[e.columnValue]?"success":"danger"}`},{default:c(()=>[k(l(a.data[e.columnValue]?"activa":"inactiva"),1)]),_:2},1032,["severity"])):m("",!0)]}),_:2},1032,["header","field"])),64)),i(j,{class:"my-0 py-2",style:{display:"flex","justify-content":"center"},header:"Actuar"},{body:c(e=>[t("div",ne,[i(f,{style:{"min-width":"max-content"},size:"small",onClick:a=>x(e.data.lap_history),label:"Reconsiderar",severity:"success",icon:"pi pi-check p-0",class:"my-0 py-1"},null,8,["onClick"]),i(f,{size:"small",onClick:a=>x(e.data.lap_history),label:"Descargar CV",severity:"help",icon:"pi pi-times p-0",class:"my-0 py-1"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters"])])],64)}}},me=L(ie,[["__scopeId","data-v-b35c52bf"]]);export{me as default};
