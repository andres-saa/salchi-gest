import{f as C}from"./fetchService-8efb7707.js";import{_ as L,r as m,E as N,h as T,U as p,a as s,o as v,c as h,d as l,w as n,I as V,b as o,u as S,F,e as M,t as D,p as R,g as $,q as B}from"./index-db916a24.js";const E=r=>(R("data-v-2721db28"),r=r(),$(),r),U={class:"m-auto container"},j=["src"],A={class:"grid p-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},O=E(()=>o("h4",{class:"px-2"},[o("i",{class:"fa fa-book"}),B(),o("b",null,"Contratos")],-1)),q=["onClick","src","onError"],G={style:{"min-width":"max-content"},class:"m-0 p-0"},H={__name:"userLIst",setup(r){const f=(a,t)=>{const c={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!a||a==""||a=="N/A"?t.target.src=c.default:t.target.src=c[a.trim().toLowerCase()]},u=m(!1),g=m("/images/male-avatar.png"),b=a=>{u.value=!0,g.value=`${p}/read-product-image/600/employer-${a}`},i=m(null),w=()=>{i.value={global:{value:null,matchMode:V.CONTAINS}}};N(()=>{w()});const _=m([{id:1}]),y=[{columnName:"Id",columnValue:"id",columnType:"other"},{columnName:"Nombre del empleado",columnValue:"name",columnType:"max-content"}];return T(async()=>{_.value=await C.get(`${p}/employers-basic`,"cargando contratos")}),(a,t)=>{const c=s("Dialog"),I=s("InputText"),x=s("Column"),P=s("column"),k=s("DataTable");return v(),h("div",U,[l(c,{class:"p-0",visible:u.value,"onUpdate:visible":t[0]||(t[0]=e=>u.value=e),modal:"",header:"Foto de Perfil",style:{width:"30rem"},breakpoints:{"1199px":"75vw","575px":"90vw",padding:0}},{default:n(()=>[o("img",{class:"p-0 m-0",style:{width:"100%","object-fit":"contain"},src:g.value,alt:"",srcset:""},null,8,j)]),_:1},8,["visible"]),l(k,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:_.value,tableStyle:"min-width: 50rem;",filters:i.value},{header:n(()=>[o("div",A,[O,l(I,{class:"",modelValue:i.value.global.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value.global.value=e),placeholder:"Buscar empleado..."},null,8,["modelValue"])])]),default:n(()=>[l(x,{class:"py-2",header:"Foto",headerStyle:"width:5%; min-width:3rem;"},{body:n(e=>[o("img",{onClick:d=>b(e.data.dni),src:`${S(p)}/read-product-image/96/employer-${e.data.dni}`,onError:d=>f(e.data.gender,d),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,q)]),_:1}),(v(),h(F,null,M(y,e=>l(P,{header:e.columnName,field:e.columnValue},{body:n(d=>[o("h6",G,D(d.data[e.columnValue]),1)]),_:2},1032,["header","field"])),64))]),_:1},8,["value","filters"])])}}},K=L(H,[["__scopeId","data-v-2721db28"]]);export{K as default};
