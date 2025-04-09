import{_ as oe,h as r,Y as j,i as T,j as E,U as F,l as le,s as re,D as H,C as ne,x as ie,ad as y,g as c,o as w,c as X,f as s,e as l,a,n as G,P as Y,q as u,t as f,u as _,E as D,d as R,k as J,F as de,r as ce,p as ue,m as pe}from"./index-dffc30d1.js";/* empty css                                                                  */import{D as me}from"./DialogoPedido-3c3565d8.js";import"./index-558f534d.js";import{e as _e}from"./formatDate-262296cf.js";import"./formatoPesos-2293ab52.js";import"./_commonjsHelpers-23102255.js";const h=x=>(ue("data-v-3926f9c4"),x=x(),pe(),x),ve={class:"container",style:{"margin-top":"7rem"}},ye=h(()=>a("p",{class:"text-4xl text-center px-4",style:{"font-weight":"bold","margin-top":"6rem"}},[a("i",{class:"fa-solid fa-truck-arrow-right"}),u(" Pedidos pendidentes ")],-1)),fe=h(()=>a("h3",null,[a("b",null,"Rechazar orden")],-1)),he=h(()=>a("h3",null,[a("b",null,"Aprobar esta orden")],-1)),ge={style:{"max-width":"1280px"},class:"mx-auto"},be={class:"slider mx-auto",style:{display:"flex",overflow:"hidden"}},we={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},xe=h(()=>a("div",{class:"col-12 md:col-6 p-3"},[a("span",{class:"text-xl",style:{width:"100%"}},[u(" Pedidos pendientes de validacion"),a("span",{style:{"text-transform":"capitalize"}})])],-1)),Pe={class:"md:mt-0 p-input-icon-right m-3"},Ve=h(()=>a("i",{class:"pi pi-search"},null,-1)),ke={style:{display:"flex",gap:"0.5rem"}},Se={class:"grid p-3 mt-4",style:{"align-items":"center","justify-content":"start",display:"flex",gap:"1rem"}},Ce={class:"px-2 m-0"},Te=h(()=>a("i",{class:"fa-regular fa-bars-progress"},null,-1)),De={style:{"text-transform":"uppercase"}},Re={class:"m-0"},ze={__name:"ValidateSection",setup(x){const z=r([]);r([{columnName:"SEDE",columnValue:"sede",columnType:"other",size:"1rem",vif:!0},{columnName:"ASESOR",columnValue:"current_status",columnType:"status",size:"15rem",vif:!0}]);const i=r({start_date:new Date,end_date:new Date,sites:[]}),L=r([]),S=j(),K=o=>{S.setVisible("currentOrder",!0),S.setOrder(o)},Q=async o=>{const t=U.rawUserData.id;await y.aproveOrder(o,t),g.value=!1,k()},M=async()=>{const o=await E.post(`${F}/transaction_report/`,{start_date:i.value.start_date,end_date:i.value.end_date,sites:i.value.sites.map(t=>t.site_id)});O.value=o,o!=null&&o[0]&&(L.value=Object.keys(o[0]))},O=r([]);T(async()=>{z.value=await E.get(`${F}/sites/`),await M()});const C=r(!1),P=r([]),g=r(!1),U=le(),p=r({});r([{index:1,slide:0,name:"Basico"},{index:2,slide:-100,name:"reportes"}]);const B=r({index:1,slide:0,name:"Basico"});new Audio("/sound/pip1.wav"),new Audio("/sound/pip2.wav"),new Audio("/sound/pip3.wav"),new Audio("/sound/pip4.wav"),j(),r(null);const N={revisar:y.getPendientsCancellationRequest,aprobadas:y.getaceptedCancellationAcepted,rechazadas:y.getPendientsCancellationRejected};re(()=>{q()}),H(()=>S.numberOders,()=>{k()});const W=o=>{g.value=!0,p.value.order_id=o},Z=async(o,t,A)=>{const m={authorized:o,responsible_id:U.rawUserData.id,responsible_observation:p.value.reason||"sin observaciones"};await y.resolveCancellationRequest(t,m),g.value=!1,C.value=!1,P.value=await N.revisar()},V=ne(),v=r(),q=()=>{v.value={global:{value:null,matchMode:ie.CONTAINS}}};q(),T(()=>{k()}),T(async()=>{k()});const k=async()=>{P.value=await y.getOrdersValidate()};return H(()=>V.params.request_status,async()=>{P.value=await N.revisar()},{deep:!0}),(o,t)=>{const A=c("Textarea"),m=c("Button"),I=c("Dialog"),ee=c("InputText"),n=c("Column"),$=c("DataTable"),te=c("Calendar"),ae=c("calendar"),se=c("MultiSelect");return w(),X("div",ve,[ye,s(I,{visible:C.value,"onUpdate:visible":t[2]||(t[2]=e=>C.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:l(()=>[fe]),default:l(()=>[a("form",{onSubmit:t[1]||(t[1]=Y(e=>Z(!1,p.value.id,p.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(A,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:p.value.reason,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),s(m,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),s(I,{visible:g.value,"onUpdate:visible":t[4]||(t[4]=e=>g.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:l(()=>[he]),default:l(()=>[a("form",{onSubmit:t[3]||(t[3]=Y(e=>Q(p.value.order_id),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(m,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar (usuario contactado)",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),a("div",ge,[a("div",be,[a("div",{style:G(`transform:translateX(${B.value.slide}%)`),class:"slider-item"},[s($,{paginator:!0,rows:15,filters:v.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":t[6]||(t[6]=e=>v.value=e),class:"col-12 m-auto",value:P.value,tableStyle:"min-width: 50rem;"},{header:l(()=>[a("div",we,[xe,a("span",Pe,[Ve,s(ee,{class:"",modelValue:v.value.global.value,"onUpdate:modelValue":t[5]||(t[5]=e=>v.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:l(()=>[s(n,{style:{},class:"py-1",field:"order_id",header:"ID orden",frozen:""}),s(n,{style:{},class:"py-1",field:"total_order_price",header:"Monto de la orden"},{body:l(e=>[u(f(_(D)(e.data.total_order_price)),1)]),_:1}),s(n,{style:{},class:"py-1",field:"total_order_price",header:"Hora"},{body:l(e=>[u(f(_(_e)(e.data.latest_status_timestamp)),1)]),_:1}),s(n,{style:{},class:"py-1",field:"delivery_price",header:"Domicilio"},{body:l(e=>{var d,b;return[u(f(_(D)((b=(d=e.data.pe_json)==null?void 0:d.delivery)==null?void 0:b.delivery_costoenvio)),1)]}),_:1}),s(n,{style:{},class:"py-1",field:"Total",header:"Total"},{body:l(e=>{var d,b;return[u(f(_(D)(((b=(d=e.data.pe_json)==null?void 0:d.delivery)==null?void 0:b.delivery_costoenvio)+e.data.total_order_price)),1)]}),_:1}),s(n,{style:{},class:"py-1",field:"user_name",header:"Cliente"}),s(n,{style:{},class:"py-1",field:"user_phone",header:"Telefono cliente"}),s(n,{style:{"max-width":"10rem"},class:"py-1",field:"order_notes",header:"Notas"}),s(n,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:l(e=>[a("div",ke,[_(V).params.request_status!="aprobadas"?(w(),R(m,{key:0,size:"",onClick:d=>K(e.data),style:{height:"1.8rem",width:"2rem"},severity:"info",class:"p-1",icon:"pi pi-eye"},null,8,["onClick"])):J("",!0),_(V).params.request_status!="aprobadas"?(w(),R(m,{key:1,size:"",onClick:d=>W(e.data.order_id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):J("",!0)])]),_:1})]),_:1},8,["filters","value"])],4),a("div",{style:G(`transform:translateX(${B.value.slide}%)`),class:"slider-item"},[s($,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",stripedRows:"",class:"col-12 p-2",value:O.value,tableStyle:"min-width: 50rem;",filters:v.value},{header:l(()=>[a("div",Se,[a("h4",Ce,[Te,u(),a("b",De,[u("Pedidos pendientes "),a("b",null,f(_(V).params.section),1)])]),s(te,{modelValue:i.value.start_date,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value.start_date=e)},null,8,["modelValue"]),s(ae,{modelValue:i.value.end_date,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value.end_date=e)},null,8,["modelValue"]),s(se,{style:{"max-width":"30rem"},modelValue:i.value.sites,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value.sites=e),optionLabel:"site_name",options:z.value.filter(e=>e.show_on_web)},null,8,["modelValue","options"]),s(m,{severity:"help",onClick:M,label:"Buscar",icon:"pi pi-search"})])]),default:l(()=>[(w(!0),X(de,null,ce(L.value,e=>(w(),R(n,{class:"py-1",style:{"text-transform":"uppercase"},header:e},{body:l(d=>[a("h6",Re,f(d.data[e]),1)]),_:2},1032,["header"]))),256))]),_:1},8,["value","filters"])],4)])]),s(me)])}}},Ae=oe(ze,[["__scopeId","data-v-3926f9c4"]]);export{Ae as default};
