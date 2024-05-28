import{_ as De,x as ke,r as u,l as Ce,i as je,a as _,o as G,c as Q,d as s,w as r,b as o,F as ee,B as Se,s as x,t as m,D as Te,e as Fe,E as N,L as Ee,M as Ae,p as Re,g as Ue}from"./index-46f5b0d8.js";import{s as $e}from"./siteService-79317d44.js";import"./sass.default-a1d89e71.js";import{p as f}from"./purchaseOrderService-9ab03e7d.js";import{u as S,w as te}from"./xlsx-4f9172c7.js";import{E as Me,F as ae}from"./FileSaver.min-af960175.js";import{f as se}from"./format-36e25dfb.js";import{e as oe}from"./es-e43b915c.js";import"./_commonjsHelpers-23102255.js";const g=q=>(Re("data-v-48752de1"),q=q(),Ue(),q),qe={class:"grid"},Oe={class:"col-12 px-0 mx-0"},Ie={class:"col-12",style:{display:"flex","flex-direction":"column"}},Pe=g(()=>o("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),Ve={class:"col-12",style:{display:"flex","flex-direction":"column"}},Ne=g(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),Le={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Be={class:"col-12",style:{display:"flex","justify-content":"center"}},He=g(()=>o("p",null,"Desea ageregar notas?",-1)),ze={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},Ge={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},Qe=g(()=>o("br",null,null,-1)),We={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},Ke={class:"m-0"},Je={class:"m-0"},Ye={key:0},Xe=g(()=>o("b",null,"Notas",-1)),Ze={style:{display:"flex",gap:"1rem"}},et={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},tt={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},at={class:"m-0 p-0"},st=g(()=>o("b",null,"Transportado por:",-1)),ot={class:"m-0 p-0"},lt=g(()=>o("b",null,"Sede:",-1)),nt={class:"mt-0 p-0"},it=g(()=>o("b",null,"Fecha",-1)),rt={style:{display:"flex","flex-direction":"column","align-items":"start",gap:"0.5rem"}},dt={style:{display:"flex","align-items":"center",gap:"1rem"}},ct={class:"text-right"},ut=["onChange","max","onUpdate:modelValue"],pt={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},mt={class:"m-auto",style:{"max-width":"1024px"}},ht={class:"col-12 px-3 mt-4 pack-butons",style:{display:"flex","justify-content":"end",gap:"1rem"}},yt={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},vt={class:"grid",style:{"align-items":"center"}},_t=g(()=>o("div",{class:"col-12 md:col-6 p-3"},[o("span",{class:"text-xl",style:{width:"100%"}}," Ordenes pendientes por Recibir")],-1)),ft={class:"col-12 md:col-6 p-3"},gt={style:{"min-width":"max-content"}},bt={style:{"min-width":"max-content"}},wt={class:"m-0 p-0",style:{display:"flex",width:"min-content","justify-content":"start","align-items":"center",gap:"0.5rem"}},le=4,xt={__name:"orderPathRecibidaEnSede",setup(q){const D=ke(),O=u(!1),T=u([]),F=u(!1),L=u(""),ne=u(!1),ie=l=>{if(l.some(t=>!t.ajustment&&t.ajustment!==0)){alert("por favor complete todos los campos");return}if(l.some(t=>t.ajustment>t.quantity)){alert("No puedes enviar mas de lo solicitado");return}F.value=!0},y=u({}),B=u(!1),W=u([]),re=async l=>{B.value=!0,W.value=await f.getPurchaseOrderHistory(l)},de=()=>{T.value.forEach(l=>{l.ajustment=l.quantity_adjusted})},I=u(!1),ce=l=>{O.value=!0,y.value=l},ue=async l=>{I.value=!0,T.value=await f.getpurchaseOrderEntriesBypurchaseOrderID(l)},pe={Generada:"#FF0000",Lista:"#FFA500","Entregada al transportista":"#FFFF00",Completada:"#00FF00"},me=[{color:"#7fffd4",description:"Esta todo bien"},{color:"rgb(251 53 146)",description:"El transportista reporto menos de lo que habia"},{color:" rgb(255, 175, 51)",description:"Recibiste menos de lo reportado por el transportista"}],K=Ce(),J=u([]),Y=u([{}]),E=u(!1),k=u(new Date(new Date().setDate(new Date().getDate()-7))),b=u(new Date),A=u(new Date(new Date().setDate(new Date().getDate()-7))),R=u(new Date),C=u(),w=u(),he=(l,t)=>{A.value=l,R.value=t},U=l=>{const t=new Date,a=new Date(t);a.setDate(a.getDate()+1);const c=new Date(t);c.setDate(t.getDate()-l),k.value=c,l==1?(b.value=t,R.value=b.value,A.value=k.value,E.value=!1):(b.value=a,A.value=k.value,R.value=b.value,E.value=!1),ye()};je(async()=>{J.value=await $e.getSites(),Y.value=J.value,C.value=await f.getPurchaseOrderByLap_id(le)}),(()=>{w.value={global:{value:null,matchMode:Se.CONTAINS}}})();function X(l){const t=new Date(l),a=t.getFullYear(),c=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");return`${a}-${c}-${i}`}const ye=async()=>{const l=Y.value.map(c=>c.site_id);K.rawUserData.id;const t=X(A.value),a=X(R.value);C.value=await f.getAllpurchaseOrderReportsFiltered(l,t,a)},$=u([]),ve=async(l,t,a)=>{$.value=await f.getpurchaseOrderEntriesBypurchaseOrderID(l);const c=$.value.map(v=>({Producto:v.item_name,Cantidad:v.quantity,"Unidad de medida":v.unit_measure})),i=S.json_to_sheet(c);i["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const h=S.book_new();S.book_append_sheet(h,i,"Usuarios"),te(h,`Orden_de_compra_${t}_${a} .xlsx`)},_e=l=>l.map(a=>{if(a.quantity!=a.ajustment)return{order_purchase_entry_id:a.entry_id,quantity_adjusted:a.ajustment}}).filter(a=>a),fe=async l=>{if(l.some(a=>!a.ajustment&&a.ajustment!==0)){alert("por favor complete todos los campos");return}D.setLoading(!0,"Recibiendo orden");const t={purchase_order_id:y.value.purchase_order_id,lap_id:y.value.lap_id,responsible_id:K.rawUserData.id,ajusts:_e(l),order_purchase_notes:L.value};await f.PreparePurchaserOrder(t),C.value=await f.getPurchaseOrderByLap_id(le),O.value=!1,I.value=!1,D.setLoading(!1,"Recibiendo orden"),F.value=!1,ne.value=!1},ge=async()=>{D.setLoading(!0,"generando descargas");const l=C.value,t=[];for(const e of l){const n=await f.getpurchaseOrderEntriesBypurchaseOrderID(e.purchase_order_id);t.push(...n)}const a={};t.forEach(e=>{const n=e.site_name,p=e.item_name,j=e.quantity,z=e.unit_measure;a[p]||(a[p]={unit_measure:z}),a[p][n]||(a[p][n]=0),a[p][n]+=j});const c=[...new Set(t.map(e=>e.site_name))],i=[],h=se(A.value,"dd-MMMM-yyyy",{locale:oe}),v=se(R.value,"dd-MMMM-yyyy",{locale:oe});h==v?i.push([`ORDENES DE COMPRA DEL ${h.toUpperCase()}`,...Array(c.length+2).fill("")]):i.push([`ORDENES DE COMPRA DEL${h.toUpperCase()} AL ${v.toUpperCase()}`,...Array(c.length+2).fill("")]);const H=["PRODUCTO","UNIDAD DE MEDIDA",...c,"TOTAL"];i.push(H);for(const[e,n]of Object.entries(a)){const p=[e,n.unit_measure];let j=0;for(const z of c){const Z=n[z]||0;p.push(Z),j+=Z}p.push(j),i.push(p)}const M=new Me.Workbook,d=M.addWorksheet("Inventario por Sede");i.forEach((e,n)=>{const p=d.addRow(e);n===0?(p.height=40,p.font={name:"Arial",bold:!0,size:14},p.alignment={horizontal:"center",vertical:"middle",wrapText:!0},d.mergeCells(`A1:${d.getColumn(c.length+3).letter}1`),d.getRow(1).eachCell(j=>{j.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):n===1&&(p.font={name:"Arial",bold:!0})}),d.columns.forEach((e,n)=>{e.width=n===0?30:n===1?25:15,e.eachCell(p=>{p.font={name:"Arial"},p.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),d.getRow(2).eachCell(e=>{e.font={name:"Arial",bold:!0}}),d.getRow(1).eachCell(e=>{e.font={name:"Arial",bold:!0,size:16}}),d.views=[{showGridLines:!1}];const P=await M.xlsx.writeBuffer(),V=new Blob([P],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});h==v?ae.saveAs(V,`Reporte de inventario del ${h}.xlsx`):ae.saveAs(V,`Reporte de inventario del ${h} al ${v} .xlsx`),D.setLoading(!1,"generando descargas")},be=async()=>{D.setLoading(!0,"generando descargas");const l=C.value;for(const i of l){const h=await f.getpurchaseOrderEntriesBypurchaseOrderID(i.purchase_order_id);$.value.push(...h)}console.log($.value);const t=$.value.map(i=>({Fecha:i.date.split("T")[0],Hora:i.date.split("T")[1],Sede:i.site_name,Producto:i.item_name,Cantidad:i.quantity,"Unidad de medida":i.unit_measure})),a=S.json_to_sheet(t);a["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const c=S.book_new();S.book_append_sheet(c,a,"Usuarios"),te(c,"Compras de todas las sedes.xlsx"),D.setLoading(!1,"generando descargas")};function we(l){l.key===","&&(alert("Por favor usa punto ( . ) para los decimales, gracias"),l.preventDefault())}const xe=l=>{l.ajustment>l.quantity&&(alert("Estas seguro de que  hay mas de lo reportado por el transportista"),l.ajustment==l.quantity)};return(l,t)=>{const a=_("Button"),c=_("Calendar"),i=_("Dialog"),h=_("Textarea"),v=_("Timeline"),H=_("router-link"),M=_("Tag"),d=_("Column"),P=_("DataTable"),V=_("InputText");return G(),Q(ee,null,[s(i,{class:"mx-2",visible:E.value,"onUpdate:visible":t[8]||(t[8]=e=>E.value=e),modal:"",header:"Periodo",style:{width:"25rem"}},{default:r(()=>[o("div",qe,[o("div",Oe,[s(a,{text:"",label:"Hoy",onClick:t[0]||(t[0]=e=>U(0)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Ayer",onClick:t[1]||(t[1]=e=>U(1)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 7 días",onClick:t[2]||(t[2]=e=>U(7)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 14 días",onClick:t[3]||(t[3]=e=>U(14)),class:"p-button-text col-12 p-1"}),s(a,{text:"",label:"Últimos 28 días",onClick:t[4]||(t[4]=e=>U(28)),class:"p-button-text col-12 p-0"})]),o("div",Ie,[Pe,s(c,{style:{"min-width":"max-content"},modelValue:k.value,"onUpdate:modelValue":t[5]||(t[5]=e=>k.value=e)},null,8,["modelValue"])]),o("div",Ve,[Ne,s(c,{style:{"min-width":"max-content"},modelValue:b.value,"onUpdate:modelValue":t[6]||(t[6]=e=>b.value=e),showWeek:""},null,8,["modelValue"])]),o("div",Le,[o("div",Be,[s(a,{onClick:t[7]||(t[7]=()=>{he(k.value,b.value),E.value=!1})},{default:r(()=>[x("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:F.value,"onUpdate:visible":t[12]||(t[12]=e=>F.value=e),modal:"",header:"Notas de alistamientos",style:{width:"25rem"}},{footer:r(()=>[o("div",ze,[s(a,{text:"",onClick:t[10]||(t[10]=e=>F.value=!1),severity:"danger",label:"cancelar"}),s(a,{onClick:t[11]||(t[11]=e=>fe(T.value.filter(n=>n.quantity!=0))),severity:"help",label:"Alistar orden"})])]),default:r(()=>[He,o("div",null,[s(h,{modelValue:L.value,"onUpdate:modelValue":t[9]||(t[9]=e=>L.value=e),style:{width:"100%",resize:"none",height:"10rem"}},null,8,["modelValue"])])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:B.value,"onUpdate:visible":t[13]||(t[13]=e=>B.value=e),modal:"",header:"Historial de la orden",style:{width:"min-content"}},{default:r(()=>[s(v,{value:W.value},{opposite:r(e=>{var n;return[o("p",Ge,m(e.item.status_timestamp.split("T")[0]),1),x(),Qe,o("p",We,m((n=e.item.status_timestamp.split("T")[1])==null?void 0:n.split(":").slice(0,2).join(":")),1)]}),content:r(e=>[o("p",Ke,[o("b",null,m(e.item.lap_name),1)]),o("p",Je,m(e.item.name),1),e.item.notes?(G(),Q("p",Ye,[Xe,x(" "+m(e.item.notes),1)])):Te("",!0),o("div",Ze,[s(a,{disabled:!e.item.notes,style:{height:"2rem",opacity:"0","border-radius":"0.3rem"},cla:"",severity:"help",class:"",label:"Notas"},null,8,["disabled"]),s(a,{disabled:!e.item.conflict,style:{height:"2rem","border-radius":"0.3rem"},severity:"danger",class:"mb-4",label:"Conflictos"},null,8,["disabled"])])]),_:1},8,["value"])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:O.value,"onUpdate:visible":t[17]||(t[17]=e=>O.value=e),modal:"",header:"Interactuar con la orden",style:{width:"25rem"}},{default:r(()=>[o("div",et,[s(H,{to:`/purchase-order/recorrido/purchase-order-view/${y.value.purchase_order_id}`},{default:r(()=>[s(a,{text:"",style:{width:"100%"},severity:"help",class:"",label:"Ver detalles",icon:"pi pi-eye"})]),_:1},8,["to"]),s(a,{text:"",label:"Descargar en excel",style:{},onClick:t[14]||(t[14]=e=>{var n;return ve(y.value.purchase_order_id,y.value.site_name,(n=y.value.expedition_date)==null?void 0:n.split("T")[0])}),severity:"success",class:"",icon:"pi pi-download"}),s(a,{onClick:t[15]||(t[15]=e=>re(y.value.purchase_order_id)),text:"",label:"Ver Historial",style:{},severity:"warning",class:"",icon:"pi pi-history p-0 m-0"}),s(a,{onClick:t[16]||(t[16]=e=>ue(y.value.purchase_order_id)),label:"Recibir orden",style:{},severity:"help",class:"",icon:"pi  p-0 m-0"})])]),_:1},8,["visible"]),s(i,{class:"px-2",visible:I.value,"onUpdate:visible":t[20]||(t[20]=e=>I.value=e),modal:"",header:"Recibir orden",style:{width:"max-content","max-width":"100vw"}},{footer:r(()=>[o("div",pt,[s(a,{outlined:"",onClick:de,severity:"help",label:"Todo esta completo"}),s(a,{onClick:t[19]||(t[19]=e=>ie(T.value.filter(n=>n.quantity!=0))),severity:"help",label:"Recibir orden"})])]),default:r(()=>[o("div",tt,[o("p",at,[st,x(" "+m(y.value.responsible_lap),1)]),o("p",ot,[lt,x(" "+m(y.value.site_name),1)]),o("p",nt,[it,x(" "+m(y.value.status_timestamp.split("T")[0]),1)]),o("div",rt,[(G(),Q(ee,null,Fe(me,e=>o("div",dt,[s(M,{style:N([`background-color:${e.color}`,{height:"2rem","aspect-ratio":"4 / 3"}])},null,8,["style"]),o("span",null,m(e.description),1)])),64))]),s(P,{showGridlines:"",style:{"max-width":"1024px"},stripedRows:"",filters:w.value,"onUpdate:filters":t[18]||(t[18]=e=>w.value=e),class:"col-12 m-auto p-0 m-0",value:T.value.filter(e=>e.quantity!=0),tableStyle:"min-width: 50rem;"},{default:r(()=>[s(d,{class:"py-0",field:"item_id",header:"id"}),s(d,{class:"py-0",field:"item_name",header:"Item"},{body:r(e=>[o("p",{style:N(e.data.ajustment===0?"text-decoration: line-through;background-color:#ffc9d1":"")},m(e.data.item_name),5)]),_:1}),s(d,{class:"py-0",field:"quantity_adjusted",header:"cant. Reportada por transportista"},{body:r(e=>[o("p",ct,m(e.data.quantity_adjusted),1)]),_:1}),s(d,{class:"py-0 px-0",field:"quantity",header:"cant. realmente recibida"},{body:r(e=>[Ee(o("input",{onChange:n=>xe(e.data),onKeydown:we,class:"text-right",max:e.data.quantity,min:0,"onUpdate:modelValue":n=>e.data.ajustment=n,style:N([{"background-color":"transparent",height:"2rem",width:"100%",border:"none"},e.data.quantity_adjusted===e.data.ajustment?"background-color: aquamarine;":e.data.ajustment===0?"background-color:#ffc9d1":e.data.ajustment<e.data.quantity?"background-color:#FFAF33;border:2px solid #FF7A33":e.data.ajustment>e.data.quantity?"background-color:#FF3393;border:2px solid #FF3342":""]),type:"number"},null,44,ut),[[Ae,e.data.ajustment]])]),_:1}),s(d,{class:"py-0",field:"unit_measure",header:"Und. de medida"}),s(d,{class:"py-0",field:"quantity",header:"interactuar"},{body:r(e=>[s(a,{onClick:n=>e.data.ajustment=e.data.quantity_adjusted,style:{"min-width":"max-content"},text:"",class:"px-0 py-1",label:"Esta completo"},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value"])])]),_:1},8,["visible"]),o("div",mt,[o("div",ht,[s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:be}),s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:ge})])]),o("div",yt,[s(P,{showGridlines:"",style:{"max-width":"1024px"},filters:w.value,"onUpdate:filters":t[22]||(t[22]=e=>w.value=e),class:"col-12 m-auto",value:C.value,tableStyle:"min-width: 50rem;"},{header:r(()=>[o("div",vt,[_t,o("div",ft,[s(V,{style:{width:"100%"},class:"",modelValue:w.value.global.value,"onUpdate:modelValue":t[21]||(t[21]=e=>w.value.global.value=e),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:r(()=>[s(d,{class:"py-1",field:"purchase_order_id",header:"ID"}),s(d,{class:"py-1",field:"responsible_lap",header:"Transportada por"}),s(d,{class:"py-1",field:"site_name",header:"Sede"}),s(d,{class:"py-1",field:"date",header:"Fecha"},{body:r(e=>{var n;return[o("p",gt,m((n=e.data.status_timestamp)==null?void 0:n.split("T")[0]),1)]}),_:1}),s(d,{style:{"min-width":"max-content"},class:"py-1",field:"date",header:"Hora"},{body:r(e=>{var n;return[o("span",bt,m((n=e.data.status_timestamp)==null?void 0:n.split("T")[1]),1)]}),_:1}),s(d,{class:"py-1",field:"date",header:"Estado actual"},{body:r(e=>[s(M,{style:N([{width:"100%",height:"2.7rem",color:"black"},`background-color:${pe[e.data.current_status]}`])},{default:r(()=>[x(m(e.data.current_status),1)]),_:2},1032,["style"])]),_:1}),s(d,{style:{width:"20px"},class:"py-1 mx-0 px-0",field:"date",header:"Acciones"},{body:r(e=>[o("div",wt,[s(a,{label:"Interactuar",onClick:n=>ce(e.data),severity:"help",class:"",icon:"pi "},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},Ut=De(xt,[["__scopeId","data-v-48752de1"]]);export{Ut as default};
