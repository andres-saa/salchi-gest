import{_ as j,a2 as V,r as d,l as E,H as K,x as q,y as G,K as J,i as A,ag as c,a as p,o as C,c as Q,g as s,w as o,b as t,a6 as M,j as m,t as g,u,a0 as P,e as O,f as B,p as W,h as X}from"./index-caf3b98c.js";import{D as Y}from"./OrderItem.vue_vue_type_style_index_0_scoped_bf963792_lang-45781117.js";import"./index-3ec6abaa.js";import{e as Z}from"./formatDate-262296cf.js";import"./formatoPesos-8aa989a0.js";import"./_commonjsHelpers-de833af9.js";const f=y=>(W("data-v-3b553b36"),y=y(),X(),y),ee={class:"container",style:{"margin-top":"7rem"}},ae=f(()=>t("p",{class:"text-4xl text-center px-4",style:{"font-weight":"bold","margin-top":"6rem"}},[t("i",{class:"fa-solid fa-truck-arrow-right"}),m(" Transferencias ")],-1)),se=f(()=>t("h3",null,[t("b",null,"Rechazar orden")],-1)),te=f(()=>t("h3",null,[t("b",null,"Aprobar esta orden")],-1)),oe={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},le=f(()=>t("div",{class:"col-12 md:col-6 p-3"},[t("span",{class:"text-xl",style:{width:"100%"}},[m(" Transferencias pendientes "),t("span",{style:{"text-transform":"capitalize"}})])],-1)),re={class:"md:mt-0 p-input-icon-right m-3"},ne=f(()=>t("i",{class:"pi pi-search"},null,-1)),ie={style:{display:"flex",gap:"0.5rem"}},de={__name:"TransferSession",setup(y){const w=V(),I=l=>{w.setVisible("currentOrder",!0),w.setOrder(l)},N=async l=>{const a=k.rawUserData.id;await c.authorizeOrder(l,a),_.value=!1,h()},x=d(!1),b=d([]),_=d(!1),k=E(),n=d({});new Audio("/sound/pip1.wav"),new Audio("/sound/pip2.wav"),new Audio("/sound/pip3.wav"),new Audio("/sound/pip4.wav"),V(),d(null);const S={revisar:c.getPendientsCancellationRequest,aprobadas:c.getaceptedCancellationAcepted,rechazadas:c.getPendientsCancellationRejected};K(()=>{D()}),q(()=>w.numberTransferRequests,()=>{h()});const U=l=>{_.value=!0,n.value.order_id=l},L=async(l,a,z)=>{const i={authorized:l,responsible_id:k.rawUserData.id,responsible_observation:n.value.reason||"sin observaciones"};await c.resolveCancellationRequest(a,i),_.value=!1,x.value=!1,b.value=await S.revisar()},T=G(),v=d(),D=()=>{v.value={global:{value:null,matchMode:J.CONTAINS}}};D(),A(()=>{h()}),A(async()=>{h()});const h=async()=>{b.value=await c.getOrdersTransfer()};return q(()=>T.params.request_status,async()=>{b.value=await S.revisar()},{deep:!0}),(l,a)=>{const z=p("Textarea"),i=p("Button"),R=p("Dialog"),F=p("InputText"),r=p("Column"),H=p("DataTable");return C(),Q("div",ee,[ae,s(R,{visible:x.value,"onUpdate:visible":a[2]||(a[2]=e=>x.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:o(()=>[se]),default:o(()=>[t("form",{onSubmit:a[1]||(a[1]=M(e=>L(!1,n.value.id,n.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(z,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:n.value.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),s(i,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),s(R,{visible:_.value,"onUpdate:visible":a[4]||(a[4]=e=>_.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:o(()=>[te]),default:o(()=>[t("form",{onSubmit:a[3]||(a[3]=M(e=>N(n.value.order_id),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(i,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar (Transferencia confirmada)",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),s(H,{paginator:!0,rows:15,filters:v.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":a[6]||(a[6]=e=>v.value=e),class:"col-12 m-auto",value:b.value,tableStyle:"min-width: 50rem;"},{header:o(()=>[t("div",oe,[le,t("span",re,[ne,s(F,{class:"",modelValue:v.value.global.value,"onUpdate:modelValue":a[5]||(a[5]=e=>v.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:o(()=>[s(r,{style:{},class:"py-1 pl-0",field:"order_id",header:"ID orden",frozen:""}),s(r,{style:{},class:"py-1 pl-0",field:"total_order_price",header:"Monto de la orden"},{body:o(e=>[m(g(u(P)(e.data.total_order_price)),1)]),_:1}),s(r,{style:{},class:"py-1 pl-0",field:"total_order_price",header:"Hora"},{body:o(e=>[m(g(u(Z)(e.data.latest_status_timestamp)),1)]),_:1}),s(r,{style:{},class:"py-1 pl-0",field:"delivery_price",header:"Domicilio"},{body:o(e=>[m(g(u(P)(e.data.delivery_price)),1)]),_:1}),s(r,{style:{},class:"py-1 pl-0",field:"Total",header:"Total"},{body:o(e=>[m(g(u(P)(e.data.delivery_price+e.data.total_order_price)),1)]),_:1}),s(r,{style:{},class:"py-1 pl-0",field:"user_name",header:"Cliente"}),s(r,{style:{},class:"py-1 pl-0",field:"user_phone",header:"Telefono cliente"}),s(r,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:o(e=>[t("div",ie,[u(T).params.request_status!="aprobadas"?(C(),O(i,{key:0,size:"",onClick:$=>I(e.data),style:{height:"1.8rem",width:"2rem"},severity:"info",class:"p-1",icon:"pi pi-eye"},null,8,["onClick"])):B("",!0),u(T).params.request_status!="aprobadas"?(C(),O(i,{key:1,size:"",onClick:$=>U(e.data.order_id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):B("",!0)])]),_:1})]),_:1},8,["filters","value"]),s(Y)])}}},fe=j(de,[["__scopeId","data-v-3b553b36"]]);export{fe as default};
