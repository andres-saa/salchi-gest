import{_ as G,L as q,r as c,l as K,z as Q,k as W,B as X,i as I,a4 as l,m as Y,a as u,o as T,c as Z,b as s,d as t,w as r,F as ee,a1 as O,s as f,t as x,u as _,J as k,f as A,D as B,p as ae,g as se}from"./index-cc435204.js";import{D as te}from"./DialogoPedido-8949f5a6.js";import"./index-558f534d.js";import"./formatoPesos-2a38d2e7.js";import"./_commonjsHelpers-23102255.js";const y=b=>(ae("data-v-c1b8963a"),b=b(),se(),b),oe={class:"container",style:{"margin-top":"7rem"}},re=y(()=>s("p",{class:"text-4xl text-center px-4",style:{"font-weight":"bold","margin-top":"6rem"}},[s("i",{class:"fa-solid fa-truck-arrow-right"}),f(" Transferencias ")],-1)),le=y(()=>s("h3",null,[s("b",null,"Rechazar orden")],-1)),ne=y(()=>s("h3",null,[s("b",null,"Aprobar esta orden")],-1)),ie={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},de=y(()=>s("div",{class:"col-12 md:col-6 p-3"},[s("span",{class:"text-xl",style:{width:"100%"}},[f(" Transferencias pendientes "),s("span",{style:{"text-transform":"capitalize"}})])],-1)),ce={class:"md:mt-0 p-input-icon-right m-3"},ue=y(()=>s("i",{class:"pi pi-search"},null,-1)),pe={style:{display:"flex",gap:"0.5rem"}},me={__name:"TransferSession",setup(b){const C=q(),L=o=>{C.setVisible("currentOrder",!0),C.setOrder(o)},M=async o=>{const a=P.rawUserData.id;await l.authorizeOrder(o,a),m.value=!1,w()},g=c(!1),p=c([]),m=c(!1),P=K(),n=c({});new Audio("/sound/pip1.wav"),new Audio("/sound/pip2.wav"),new Audio("/sound/pip3.wav");const N=new Audio("/sound/pip4.wav"),S=q(),U=c(null),D={revisar:l.getPendientsCancellationRequest,aprobadas:l.getaceptedCancellationAcepted,rechazadas:l.getPendientsCancellationRejected};Q(()=>{R()});const F=o=>{m.value=!0,n.value.order_id=o},$=async(o,a,z)=>{const d={authorized:o,responsible_id:P.rawUserData.id,responsible_observation:n.value.reason||"sin observaciones"};await l.resolveCancellationRequest(a,d),m.value=!1,g.value=!1,p.value=await D.revisar()},h=W(),v=c(),R=()=>{v.value={global:{value:null,matchMode:X.CONTAINS}}};R(),I(()=>{w()}),I(async()=>{w(),U.value=setInterval(async()=>{const o=await l.is_recent_transfer_generated();o&&S.numberTransferRequests!=o&&(N.play(),S.numberTransferRequests=o,E())},1e4)});const w=async()=>{p.value=await l.getOrdersTransfer()},E=async()=>{p.value=await l.getOrdersTransferNoLoading()};return Y(()=>h.params.request_status,async()=>{p.value=await D.revisar()},{deep:!0}),(o,a)=>{const z=u("Textarea"),d=u("Button"),V=u("Dialog"),j=u("InputText"),i=u("Column"),H=u("DataTable");return T(),Z(ee,null,[s("div",oe,[re,t(V,{visible:g.value,"onUpdate:visible":a[2]||(a[2]=e=>g.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:r(()=>[le]),default:r(()=>[s("form",{onSubmit:a[1]||(a[1]=O(e=>$(!1,n.value.id,n.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[t(z,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:n.value.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),t(d,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),t(V,{visible:m.value,"onUpdate:visible":a[4]||(a[4]=e=>m.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:r(()=>[ne]),default:r(()=>[s("form",{onSubmit:a[3]||(a[3]=O(e=>M(n.value.order_id),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[t(d,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar (Transferencia confirmada)",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),t(H,{paginator:!0,rows:15,filters:v.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":a[6]||(a[6]=e=>v.value=e),class:"col-12 m-auto",value:p.value,tableStyle:"min-width: 50rem;"},{header:r(()=>[s("div",ie,[de,s("span",ce,[ue,t(j,{class:"",modelValue:v.value.global.value,"onUpdate:modelValue":a[5]||(a[5]=e=>v.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:r(()=>[t(i,{style:{},class:"py-1 pl-0",field:"order_id",header:"ID orden",frozen:""}),t(i,{style:{},class:"py-1 pl-0",field:"total_order_price",header:"Monto de la orden"},{body:r(e=>[f(x(_(k)(e.data.total_order_price)),1)]),_:1}),t(i,{style:{},class:"py-1 pl-0",field:"delivery_price",header:"Domicilio"},{body:r(e=>[f(x(_(k)(e.data.delivery_price)),1)]),_:1}),t(i,{style:{},class:"py-1 pl-0",field:"Total",header:"Total"},{body:r(e=>[f(x(_(k)(e.data.delivery_price+e.data.total_order_price)),1)]),_:1}),t(i,{style:{},class:"py-1 pl-0",field:"user_name",header:"Cliente"}),t(i,{style:{},class:"py-1 pl-0",field:"user_phone",header:"Telefono cliente"}),t(i,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:r(e=>[s("div",pe,[_(h).params.request_status!="aprobadas"?(T(),A(d,{key:0,size:"",onClick:J=>L(e.data),style:{height:"1.8rem",width:"2rem"},severity:"info",class:"p-1",icon:"pi pi-eye"},null,8,["onClick"])):B("",!0),_(h).params.request_status!="aprobadas"?(T(),A(d,{key:1,size:"",onClick:J=>F(e.data.order_id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):B("",!0)])]),_:1})]),_:1},8,["filters","value"])]),t(te)],64)}}},ge=G(me,[["__scopeId","data-v-c1b8963a"]]);export{ge as default};
