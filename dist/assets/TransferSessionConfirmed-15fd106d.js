import{_ as re,h as n,Y as j,i as L,j as z,U as M,l as ie,s as de,D as H,C as ce,x as ue,g as r,o as b,c as X,f as s,e as l,a,q as m,n as G,P as Y,t as i,u as f,E as U,d as q,k as J,F as pe,r as me,p as _e,m as ve,ad as w}from"./index-dffc30d1.js";/* empty css                                                                  */import{D as ye}from"./DialogoPedido-3c3565d8.js";import"./index-558f534d.js";import"./formatoPesos-2293ab52.js";import"./_commonjsHelpers-23102255.js";const v=x=>(_e("data-v-de7d362c"),x=x(),ve(),x),fe={class:"container",style:{"margin-top":"3rem"}},he=v(()=>a("p",{class:"text-4xl text-center px-4",style:{"font-weight":"bold","margin-top":"0rem"}}," Transferencias Confirmadas ",-1)),ge=v(()=>a("h3",null,[a("b",null,"Rechazar orden")],-1)),be=v(()=>a("h3",null,[a("b",null,"Aprobar esta orden")],-1)),we={style:{"max-width":"1280px"},class:"mx-auto"},xe={style:{display:"flex","align-items":"center",gap:"1rem"}},Pe=v(()=>a("h3",{style:{width:"min-content",padding:"0"}},[a("b",null,"Modos")],-1)),Te={class:"slider mx-auto",style:{display:"flex",overflow:"hidden"}},Se={class:"grid",style:{"align-items":"center","justify-content":"space-between"}},Ve=v(()=>a("span",null,null,-1)),Ce={class:"md:mt-0 p-input-icon-right m-3"},De=v(()=>a("i",{class:"pi pi-search"},null,-1)),ke={style:{display:"flex",gap:"0.5rem"}},Re={class:"grid p-3 mt-4",style:{"align-items":"center","justify-content":"start",display:"flex",gap:"1rem"}},Le={class:"px-2 m-0"},ze=v(()=>a("i",{class:"fa-regular fa-bars-progress"},null,-1)),Me={style:{"text-transform":"uppercase"}},Ue={class:"m-0"},qe={__name:"TransferSessionConfirmed",setup(x){const B=n([]),K=o=>{const t={weekday:"long",year:"numeric",month:"long",day:"numeric"},C={hour:"2-digit",minute:"2-digit",hour12:!0},c=new Date(o).toLocaleDateString("es-ES",t),D=new Date(o).toLocaleTimeString("es-ES",C);return`${c} a las ${D}`};n([{columnName:"SEDE",columnValue:"sede",columnType:"other",size:"1rem",vif:!0},{columnName:"ASESOR",columnValue:"current_status",columnType:"status",size:"15rem",vif:!0}]);const d=n({start_date:new Date,end_date:new Date,sites:[]}),O=n([]),k=j(),Q=o=>{k.setVisible("currentOrder",!0),k.setOrder(o)},W=async o=>{const t=N.rawUserData.id;await w.authorizeOrder(o,t),h.value=!1,V()},$=async()=>{const o=await z.post(`${M}/transaction_report/`,{start_date:d.value.start_date,end_date:d.value.end_date,sites:d.value.sites.map(t=>t.site_id)});A.value=o,o!=null&&o[0]&&(O.value=Object.keys(o[0]))},A=n([]);L(async()=>{B.value=await z.get(`${M}/sites/`),await $()});const R=n(!1),P=n([]),h=n(!1),N=ie(),_=n({}),Z=n([{index:1,slide:0,name:"Basico"},{index:2,slide:-100,name:"reportes"}]),T=n({index:1,slide:0,name:"Basico"});new Audio("/sound/pip1.wav"),new Audio("/sound/pip2.wav"),new Audio("/sound/pip3.wav"),new Audio("/sound/pip4.wav"),j(),n(null);const E={revisar:w.getPendientsCancellationRequest,aprobadas:w.getaceptedCancellationAcepted,rechazadas:w.getPendientsCancellationRejected};de(()=>{F()}),H(()=>k.numberTransferRequests,()=>{V()});const ee=o=>{h.value=!0,_.value.order_id=o},te=async(o,t,C)=>{const c={authorized:o,responsible_id:N.rawUserData.id,responsible_observation:_.value.reason||"sin observaciones"};await w.resolveCancellationRequest(t,c),h.value=!1,R.value=!1,P.value=await E.revisar()},S=ce(),y=n(),F=()=>{y.value={global:{value:null,matchMode:ue.CONTAINS}}};F(),L(()=>{V()}),L(async()=>{V()});const V=async()=>{P.value=await z.get(`${M}/order-to-transfer-confirmed`)};return H(()=>S.params.request_status,async()=>{P.value=await E.revisar()},{deep:!0}),(o,t)=>{const C=r("Textarea"),c=r("Button"),D=r("Dialog"),ae=r("Dropdown"),se=r("InputText"),u=r("Column"),I=r("DataTable"),oe=r("Calendar"),le=r("calendar"),ne=r("MultiSelect");return b(),X("div",fe,[he,s(D,{visible:R.value,"onUpdate:visible":t[2]||(t[2]=e=>R.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:l(()=>[ge]),default:l(()=>[a("form",{onSubmit:t[1]||(t[1]=Y(e=>te(!1,_.value.id,_.value.reason),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(C,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:_.value.reason,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value.reason=e),rows:"5",placeholder:"Porque desea rechazar esta solicitud?"},null,8,["modelValue"]),s(c,{style:{width:"100%","border-radius":"0.5rem"},label:"Rechazar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),s(D,{visible:h.value,"onUpdate:visible":t[4]||(t[4]=e=>h.value=e),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:l(()=>[be]),default:l(()=>[a("form",{onSubmit:t[3]||(t[3]=Y(e=>W(_.value.order_id),["prevent"])),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[s(c,{style:{width:"100%","border-radius":"0.5rem"},label:"Aprobar (Transferencia confirmada)",type:"submit",class:"p-button-success"})],32)]),_:1},8,["visible"]),a("div",we,[a("div",xe,[Pe,m(),s(ae,{modelValue:T.value,"onUpdate:modelValue":t[5]||(t[5]=e=>T.value=e),options:Z.value,optionLabel:"name"},null,8,["modelValue","options"])]),a("div",Te,[a("div",{style:G(`transform:translateX(${T.value.slide}%)`),class:"slider-item"},[s(I,{paginator:!0,rows:15,filters:y.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",scrollHeight:"65vh",stripedRows:"",style:{},"onUpdate:filters":t[7]||(t[7]=e=>y.value=e),class:"col-12 m-auto",value:P.value,tableStyle:"min-width: 50rem;"},{header:l(()=>[a("div",Se,[Ve,a("span",Ce,[De,s(se,{class:"",modelValue:y.value.global.value,"onUpdate:modelValue":t[6]||(t[6]=e=>y.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])])]),default:l(()=>[s(u,{style:{"min-width":"max-content"},class:"py-1",field:"order_id",header:"ID orden",frozen:""}),s(u,{style:{},class:"py-1",field:"total_order_price",header:"Monto de la orden"},{body:l(e=>[m(i(f(U)(e.data.total_order_price)),1)]),_:1}),s(u,{style:{},class:"py-1",field:"total_order_price",header:"Fecha y Hora"},{body:l(e=>[m(i(K(e.data.latest_status_timestamp)),1)]),_:1}),s(u,{style:{},class:"py-1",field:"delivery_price",header:"Domicilio"},{body:l(e=>{var p,g;return[m(i(f(U)((g=(p=e.data.pe_json)==null?void 0:p.delivery)==null?void 0:g.delivery_costoenvio)),1)]}),_:1}),s(u,{style:{},class:"py-1",field:"Total",header:"Total"},{body:l(e=>{var p,g;return[m(i(f(U)(((g=(p=e.data.pe_json)==null?void 0:p.delivery)==null?void 0:g.delivery_costoenvio)+e.data.total_order_price)),1)]}),_:1}),s(u,{style:{},class:"py-1",field:"user_name",header:"Cliente"},{body:l(e=>[m(i(e.data.user_name)+" "+i(e.data.second_name)+" "+i(e.data.first_last_name)+" "+i(e.data.second_last_name),1)]),_:1}),s(u,{style:{},class:"py-1",field:"user_phone",header:"Telefono cliente"}),s(u,{style:{},class:"py-1 px-0",field:"date",header:"Action",frozen:"",alignFrozen:"right"},{body:l(e=>[a("div",ke,[f(S).params.request_status!="aprobadas"?(b(),q(c,{key:0,size:"",onClick:p=>Q(e.data),style:{height:"1.8rem",width:"2rem"},severity:"info",class:"p-1",icon:"pi pi-eye"},null,8,["onClick"])):J("",!0),f(S).params.request_status!="aprobadas"?(b(),q(c,{key:1,size:"",onClick:p=>ee(e.data.order_id),style:{height:"1.8rem",width:"2rem"},severity:"success",class:"p-1",icon:"pi pi-check"},null,8,["onClick"])):J("",!0)])]),_:1})]),_:1},8,["filters","value"])],4),a("div",{style:G(`transform:translateX(${T.value.slide}%)`),class:"slider-item"},[s(I,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} Transferencias",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",stripedRows:"",class:"col-12 p-2",value:A.value,tableStyle:"min-width: 50rem;",filters:y.value},{header:l(()=>[a("div",Re,[a("h4",Le,[ze,m(),a("b",Me,[m("Transferencias "),a("b",null,i(f(S).params.section),1)])]),s(oe,{modelValue:d.value.start_date,"onUpdate:modelValue":t[8]||(t[8]=e=>d.value.start_date=e)},null,8,["modelValue"]),s(le,{modelValue:d.value.end_date,"onUpdate:modelValue":t[9]||(t[9]=e=>d.value.end_date=e)},null,8,["modelValue"]),s(ne,{style:{"max-width":"30rem"},modelValue:d.value.sites,"onUpdate:modelValue":t[10]||(t[10]=e=>d.value.sites=e),optionLabel:"site_name",options:B.value.filter(e=>e.show_on_web)},null,8,["modelValue","options"]),s(c,{severity:"help",onClick:$,label:"Buscar",icon:"pi pi-search"})])]),default:l(()=>[(b(!0),X(pe,null,me(O.value,e=>(b(),q(u,{class:"py-1",style:{"text-transform":"uppercase"},header:e},{body:l(p=>[a("h6",Ue,i(p.data[e]),1)]),_:2},1032,["header"]))),256))]),_:1},8,["value","filters"])],4)])]),s(ye)])}}},Fe=re(qe,[["__scopeId","data-v-de7d362c"]]);export{Fe as default};
