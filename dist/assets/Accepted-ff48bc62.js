import{_ as M,r as x,q as F,a as n,o as s,c as i,g as o,w as c,b as t,F as w,s as H,t as l,m as T,f as m,d as R,k as V,e as j,p as $,h as O}from"./index-5708809f.js";const p=d=>($("data-v-0aa87a6e"),d=d(),O(),d),E={style:{display:"flex","flex-direction":"column"}},G={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},U={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},q={class:"m-0"},J=p(()=>t("div",null,null,-1)),K={class:"m-0"},Q={key:0},W=p(()=>t("b",null,"Notas",-1)),X=p(()=>t("br",null,null,-1)),Y=p(()=>t("div",{style:{display:"flex",gap:"1rem"}},null,-1)),Z={style:{"max-width":"1280px",margin:"auto"}},ee={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},te=p(()=>t("span",null,null,-1)),ae={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},le={key:2,class:"m-0 p-0"},se={key:3,class:"m-0 p-0"},oe={href:`
                `,style:{color:"blue"}},ne={style:{display:"flex","flex-direction":"column",gap:".1rem"}},ie={__name:"Accepted",setup(d){const y=x(!1),u=x(null),C=()=>{u.value={global:{value:null,matchMode:H.CONTAINS}}},f=x([]),h=async v=>{y.value=!0,f.value=v};F(()=>{C()});const P=[{columnName:"Nombre",columnValue:"name",columnType:"max-content"},{columnName:"Correo electronico",columnValue:"email",columnType:"other"},{columnName:"Telefono",columnValue:"phone",columnType:"other"}],N=[{id:1,name:"Ana Gómez",email:"ana.gomez@example.com",phone:"1122334455"},{id:2,name:"Juan Pérez",email:"juan.perez@example.com",phone:"2233445566"},{id:3,name:"Laura Martínez",email:"laura.martinez@example.com",phone:"3344556677"}];return(v,_)=>{const z=n("Timeline"),D=n("Dialog"),B=n("InputText"),L=n("Tag"),S=n("column"),g=n("Button"),I=n("Column"),A=n("DataTable");return s(),i(w,null,[o(D,{class:"mx-2",visible:y.value,"onUpdate:visible":_[0]||(_[0]=e=>y.value=e),modal:"",header:"Historial mi solicitud",style:{width:"30rem"}},{default:c(()=>[o(z,{value:f.value},{opposite:c(e=>{var a,r,b,k;return[t("div",E,[t("p",G,l((a=e.item.time)==null?void 0:a.split(" ")[0]),1),t("p",U,l((k=(b=(r=e.item.time)==null?void 0:r.split(" "))==null?void 0:b.slice(2,3))==null?void 0:k[0]),1)])]}),content:c(e=>[t("p",q,[t("b",null,l(e.item.lap),1)]),J,t("p",K,l(e.item.responsible),1),e.item.notes?(s(),i("p",Q,[W,T(" "+l(e.item.notes),1)])):m("",!0),X,Y]),_:1},8,["value"])]),_:1},8,["visible"]),t("div",Z,[o(A,{paginator:!0,rows:5,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} solicitudes",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:N,tableStyle:"min-width: 50rem;",filters:u.value},{header:c(()=>[t("div",ee,[te,o(B,{class:"",modelValue:u.value.global.value,"onUpdate:modelValue":_[1]||(_[1]=e=>u.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])]),default:c(()=>[(s(),i(w,null,R(P,e=>o(S,{header:e.columnName,field:e.columnValue,class:"my-0 py-0"},{body:c(a=>{var r;return[e.columnType=="date"?(s(),i("h6",ae,l((r=a.data[e.columnValue])==null?void 0:r.split("-").reverse().join("-")),1)):m("",!0),e.columnType=="max-content"?(s(),i("h6",{key:1,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},l(a.data[e.columnValue]),5)):m("",!0),e.columnType=="other"?(s(),i("h6",le,l(a.data[e.columnValue]),1)):m("",!0),e.columnType=="link"?(s(),i("h6",se,[t("a",oe,l(a.data[e.columnValue]),1)])):m("",!0),e.columnType=="money"?(s(),i("h6",{key:4,style:V(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},l(v.formatoPesosColombianos(a.data[e.columnValue])),5)):m("",!0),e.columnValue=="active"?(s(),j(L,{key:5,class:"p-2",style:{color:"white"},severity:`${a.data[e.columnValue]?"success":"danger"}`},{default:c(()=>[T(l(a.data[e.columnValue]?"activa":"inactiva"),1)]),_:2},1032,["severity"])):m("",!0)]}),_:2},1032,["header","field"])),64)),o(I,{class:"my-0 py-2",style:{display:"flex","justify-content":"center"},header:"Actuar"},{body:c(e=>[t("div",ne,[o(g,{style:{"min-width":"max-content"},size:"small",onClick:a=>h(e.data.lap_history),label:"Entrevistar",severity:"success",icon:"pi pi-check p-0",class:"my-0 py-1"},null,8,["onClick"]),o(g,{size:"small",onClick:a=>h(e.data.lap_history),label:"Descartar",severity:"danger",icon:"pi pi-times p-0",class:"my-0 py-1"},null,8,["onClick"]),o(g,{size:"small",onClick:a=>h(e.data.lap_history),label:"Descargar CV",severity:"help",icon:"pi pi-times p-0",class:"my-0 py-1"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters"])])],64)}}},me=M(ie,[["__scopeId","data-v-0aa87a6e"]]);export{me as default};
