import{_ as xe,B as De,h as u,l as ke,i as Ce,g as w,o as W,c as K,b as o,f as r,a,F as ae,x as Te,q as f,t as p,r as je,n as V,w as Fe,a2 as Se,k as Ae,p as Oe,m as Ue}from"./index-03a193b1.js";import{s as Ee}from"./siteService-36d8009f.js";import"./sass.default-a5b7a582.js";import{p as x}from"./purchaseOrderService-a8bdac3d.js";import{u as S,a as se}from"./xlsx-4cca7150.js";import{E as Re}from"./exceljs.min-4b158bf5.js";import{F as oe}from"./FileSaver.min-cc8488c4.js";import{f as le}from"./format-8cf56335.js";import{e as ne}from"./es-f6133d36.js";import"./_commonjsHelpers-23102255.js";const v=P=>(Oe("data-v-55468dd8"),P=P(),Ue(),P),$e={class:"grid"},Me={class:"col-12 px-0 mx-0"},Pe={class:"col-12",style:{display:"flex","flex-direction":"column"}},qe=v(()=>a("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),Ie={class:"col-12",style:{display:"flex","flex-direction":"column"}},Ne=v(()=>a("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),Le={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Ve={class:"col-12",style:{display:"flex","justify-content":"center"}},Be=v(()=>a("p",null,"Desea ageregar notas?",-1)),He={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},ze=v(()=>a("b",null,"Autor de la nota: ",-1)),Ge=v(()=>a("b",null,"Fecha: ",-1)),Qe={style:{border:"1px solid","border-radius":"0.3rem"},class:"p-2"},We=v(()=>a("b",null,"Contenido de la Observacion: ",-1)),Ke=v(()=>a("br",null,null,-1)),Je={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},Ye={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},Xe={class:"m-0 p-0"},Ze=v(()=>a("b",null,"Autorizada por:",-1)),et={class:"m-0 p-0"},tt=v(()=>a("b",null,"Sede:",-1)),at={class:"mt-0 p-0"},st=v(()=>a("b",null,"Fecha de autorizacion:",-1)),ot={style:{display:"flex","flex-direction":"column","align-items":"start",gap:"0.5rem"}},lt={style:{display:"flex","align-items":"center",gap:"1rem"}},nt={class:"text-right"},it=["max","onUpdate:modelValue"],rt={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},dt={class:"m-auto",style:{"max-width":"1024px"}},ct={class:"col-12 px-3 mt-4 pack-butons",style:{display:"flex","justify-content":"end",gap:"1rem"}},ut={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},pt={class:"grid",style:{"align-items":"center"}},mt=v(()=>a("div",{class:"col-12 md:col-6 p-3"},[a("span",{class:"text-xl",style:{width:"100%"}}," Ordenes pendientes por alistar")],-1)),ht={class:"col-12 md:col-6 p-3"},vt={style:{"min-width":"max-content"}},_t={style:{"min-width":"max-content"}},yt={class:"m-0 p-0",style:{display:"flex",width:"100%","justify-content":"center","align-items":"center",gap:"0.5rem"}},ft={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},gt=v(()=>a("br",null,null,-1)),wt={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},bt={class:"m-0"},xt={class:"m-0"},Dt={key:0},kt=v(()=>a("b",null,"Notas",-1)),Ct={style:{display:"flex",gap:"1rem"}},Tt=3,jt={__name:"purchaseOrderReports",setup(P){const C=De(),q=u(!1),A=u([]),O=u(!1),B=u({}),ie=l=>{if(l.some(t=>!t.ajustment&&t.ajustment!==0)){alert("por favor complete todos los campos");return}if(l.some(t=>t.ajustment>t.quantity_adjusted)){alert("No puedes enviar mas de lo solicitado");return}O.value=!0},H=u(""),_=u({}),z=u(!1),G=u(!1),J=u([]),re=async l=>{G.value=!0,J.value=await x.getPurchaseOrderHistory(l)},de=()=>{A.value.forEach(l=>{l.ajustment=l.quantity_adjusted})},I=u(!1),ce=l=>{q.value=!0,_.value=l},ue=async l=>{I.value=!0,A.value=await x.getpurchaseOrderEntriesBypurchaseOrderID(l)},pe={Generada:"#FF0000",Lista:"#FFA500","Entregada al transportista":"#FFFF00",Completada:"#00FF00"},me=[{color:"#7fffd4",description:"Esta todo bien"},{color:"rgb(251 53 146)",description:"Cuidado estan enviando mas de lo que reportan"},{color:" rgb(255, 175, 51)",description:"Recibiste menos de lo reportado"}],Y=ke(),X=u([]),Z=u([{}]),U=u(!1),T=u(new Date(new Date().setDate(new Date().getDate()-7))),D=u(new Date),E=u(new Date(new Date().setDate(new Date().getDate()-7))),R=u(new Date),j=u(),k=u(),he=(l,t)=>{E.value=l,R.value=t},$=l=>{const t=new Date,s=new Date(t);s.setDate(s.getDate()+1);const d=new Date(t);d.setDate(t.getDate()-l),T.value=d,l==1?(D.value=t,R.value=D.value,E.value=T.value,U.value=!1):(D.value=s,E.value=T.value,R.value=D.value,U.value=!1),ve()};Ce(async()=>{X.value=await Ee.getSites(),Z.value=X.value,j.value=await x.getAllpurchaseOrderReports()}),(()=>{k.value={global:{value:null,matchMode:Te.CONTAINS}}})();function ee(l){const t=new Date(l),s=t.getFullYear(),d=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");return`${s}-${d}-${i}`}const ve=async()=>{const l=Z.value.map(d=>d.site_id);Y.rawUserData.id;const t=ee(E.value),s=ee(R.value);j.value=await x.getAllpurchaseOrderReportsFiltered(l,t,s)},M=u([]),_e=async(l,t,s)=>{M.value=await x.getpurchaseOrderEntriesBypurchaseOrderID(l);const d=M.value.map(g=>({Producto:g.item_name,Cantidad:g.quantity,"Unidad de medida":g.unit_measure})),i=S.json_to_sheet(d);i["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const h=S.book_new();S.book_append_sheet(h,i,"Usuarios"),se(h,`Orden_de_compra_${t}_${s} .xlsx`)},ye=l=>l.map(s=>{if(s.quantity!=s.ajustment)return{order_purchase_entry_id:s.entry_id,quantity_adjusted:s.ajustment}}).filter(s=>s),fe=async l=>{if(l.some(s=>!s.ajustment&&s.ajustment!==0)){alert("por favor complete todos los campos");return}C.setLoading(!0,"Transportando orden");const t={purchase_order_id:_.value.purchase_order_id,lap_id:_.value.lap_id,responsible_id:Y.rawUserData.id,ajusts:ye(l),order_purchase_notes:H.value};await x.PreparePurchaserOrder(t),j.value=await x.getPurchaseOrderByLap_id(Tt),q.value=!1,I.value=!1,C.setLoading(!1,"Transportando orden"),z.value=!1,O.value=!1},ge=async()=>{C.setLoading(!0,"generando descargas");const l=j.value,t=[];for(const e of l){const n=await x.getpurchaseOrderEntriesBypurchaseOrderID(e.purchase_order_id);t.push(...n)}const s={};t.forEach(e=>{const n=e.site_name,c=e.item_name,b=e.quantity,F=e.unit_measure;s[c]||(s[c]={unit_measure:F}),s[c][n]||(s[c][n]=0),s[c][n]+=b});const d=[...new Set(t.map(e=>e.site_name))],i=[],h=le(E.value,"dd-MMMM-yyyy",{locale:ne}),g=le(R.value,"dd-MMMM-yyyy",{locale:ne});h==g?i.push([`ORDENES DE COMPRA DEL ${h.toUpperCase()}`,...Array(d.length+2).fill("")]):i.push([`ORDENES DE COMPRA DEL${h.toUpperCase()} AL ${g.toUpperCase()}`,...Array(d.length+2).fill("")]);const N=["PRODUCTO","UNIDAD DE MEDIDA",...d,"TOTAL"];i.push(N);for(const[e,n]of Object.entries(s)){const c=[e,n.unit_measure];let b=0;for(const F of d){const te=n[F]||0;c.push(te),b+=te}c.push(b),i.push(c)}const m=new Re.Workbook,y=m.addWorksheet("Inventario por Sede");i.forEach((e,n)=>{const c=y.addRow(e);n===0?(c.height=40,c.font={name:"Arial",bold:!0,size:14},c.alignment={horizontal:"center",vertical:"middle",wrapText:!0},y.mergeCells(`A1:${y.getColumn(d.length+3).letter}1`),y.getRow(1).eachCell(b=>{b.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):n===1&&(c.font={name:"Arial",bold:!0})}),y.columns.forEach((e,n)=>{e.width=n===0?30:n===1?25:15,e.eachCell(c=>{c.font={name:"Arial"},c.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),y.getRow(2).eachCell(e=>{e.font={name:"Arial",bold:!0}}),y.getRow(1).eachCell(e=>{e.font={name:"Arial",bold:!0,size:16}}),y.views=[{showGridLines:!1}];const Q=await m.xlsx.writeBuffer(),L=new Blob([Q],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});h==g?oe.saveAs(L,`Reporte de inventario del ${h}.xlsx`):oe.saveAs(L,`Reporte de inventario del ${h} al ${g} .xlsx`),C.setLoading(!1,"generando descargas")},we=async()=>{C.setLoading(!0,"generando descargas");const l=j.value;for(const i of l){const h=await x.getpurchaseOrderEntriesBypurchaseOrderID(i.purchase_order_id);M.value.push(...h)}console.log(M.value);const t=M.value.map(i=>({Fecha:i.date.split("T")[0],Hora:i.date.split("T")[1],Sede:i.site_name,Producto:i.item_name,Cantidad:i.quantity,"Unidad de medida":i.unit_measure})),s=S.json_to_sheet(t);s["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const d=S.book_new();S.book_append_sheet(d,s,"Usuarios"),se(d,"Compras de todas las sedes.xlsx"),C.setLoading(!1,"generando descargas")};function be(l){l.key===","&&(alert("Por favor usa punto ( . ) para los decimales, gracias"),l.preventDefault())}return(l,t)=>{const s=w("Button"),d=w("Calendar"),i=w("Dialog"),h=w("Textarea"),g=w("router-link"),N=w("Tag"),m=w("Column"),y=w("DataTable"),Q=w("InputText"),L=w("Timeline");return W(),K(ae,null,[o(i,{class:"mx-2",visible:U.value,"onUpdate:visible":t[8]||(t[8]=e=>U.value=e),modal:"",header:"Periodo",style:{width:"25rem"}},{default:r(()=>[a("div",$e,[a("div",Me,[o(s,{text:"",label:"Hoy",onClick:t[0]||(t[0]=e=>$(0)),class:"p-button-text col-12 p-1 m-0"}),o(s,{text:"",label:"Ayer",onClick:t[1]||(t[1]=e=>$(1)),class:"p-button-text col-12 p-1 m-0"}),o(s,{text:"",label:"Últimos 7 días",onClick:t[2]||(t[2]=e=>$(7)),class:"p-button-text col-12 p-1 m-0"}),o(s,{text:"",label:"Últimos 14 días",onClick:t[3]||(t[3]=e=>$(14)),class:"p-button-text col-12 p-1"}),o(s,{text:"",label:"Últimos 28 días",onClick:t[4]||(t[4]=e=>$(28)),class:"p-button-text col-12 p-0"})]),a("div",Pe,[qe,o(d,{style:{"min-width":"max-content"},modelValue:T.value,"onUpdate:modelValue":t[5]||(t[5]=e=>T.value=e)},null,8,["modelValue"])]),a("div",Ie,[Ne,o(d,{style:{"min-width":"max-content"},modelValue:D.value,"onUpdate:modelValue":t[6]||(t[6]=e=>D.value=e),showWeek:""},null,8,["modelValue"])]),a("div",Le,[a("div",Ve,[o(s,{onClick:t[7]||(t[7]=()=>{he(T.value,D.value),U.value=!1})},{default:r(()=>[f("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),o(i,{class:"mx-2",visible:O.value,"onUpdate:visible":t[12]||(t[12]=e=>O.value=e),modal:"",header:"Notas de Transporte de orden",style:{width:"25rem"}},{footer:r(()=>[a("div",He,[o(s,{text:"",onClick:t[10]||(t[10]=e=>O.value=!1),severity:"danger",label:"cancelar"}),o(s,{onClick:t[11]||(t[11]=e=>fe(A.value.filter(n=>n.quantity!=0))),severity:"help",label:"Alistar orden"})])]),default:r(()=>[Be,a("div",null,[o(h,{modelValue:H.value,"onUpdate:modelValue":t[9]||(t[9]=e=>H.value=e),style:{width:"100%",resize:"none",height:"10rem"}},null,8,["modelValue"])])]),_:1},8,["visible"]),o(i,{class:"mx-2",visible:z.value,"onUpdate:visible":t[13]||(t[13]=e=>z.value=e),modal:"",header:"Notas de la orden",style:{width:"28rem"}},{default:r(()=>[a("div",null,[a("p",null,[ze,f(p(B.value.item.name),1)]),a("p",null,[Ge,f(p(B.value.item.status_timestamp.split("T")[0]),1)]),a("p",Qe,[We,f(),Ke,f(p(B.value.item.notes),1)])])]),_:1},8,["visible"]),o(i,{class:"mx-2",visible:q.value,"onUpdate:visible":t[17]||(t[17]=e=>q.value=e),modal:"",header:"Interactuar con la orden",style:{width:"25rem"}},{default:r(()=>[a("div",Je,[o(g,{to:`/purchase-order/recorrido/purchase-order-view/${_.value.purchase_order_id}`},{default:r(()=>[o(s,{text:"",style:{width:"100%"},severity:"help",class:"",label:"Ver detalles",icon:"pi pi-eye"})]),_:1},8,["to"]),o(s,{text:"",label:"Descargar en excel",style:{},onClick:t[14]||(t[14]=e=>{var n;return _e(_.value.purchase_order_id,_.value.site_name,(n=_.value.expedition_date)==null?void 0:n.split("T")[0])}),severity:"success",class:"",icon:"pi pi-download"}),o(s,{onClick:t[15]||(t[15]=e=>re(_.value.purchase_order_id)),text:"",label:"Ver Historial",style:{},severity:"warning",class:"",icon:"pi pi-history p-0 m-0"}),o(s,{onClick:t[16]||(t[16]=e=>ue(_.value.purchase_order_id)),label:"Transportar orden",style:{},severity:"help",class:"",icon:"pi  p-0 m-0"})])]),_:1},8,["visible"]),o(i,{class:"px-2",visible:I.value,"onUpdate:visible":t[20]||(t[20]=e=>I.value=e),modal:"",header:"Transportar orden",style:{width:"max-content","max-width":"100vw"}},{footer:r(()=>[a("div",rt,[o(s,{outlined:"",onClick:de,severity:"help",label:"Todo esta completo"}),o(s,{onClick:t[19]||(t[19]=e=>ie(A.value.filter(n=>n.quantity!=0))),severity:"help",label:"Transportar orden"})])]),default:r(()=>[a("div",Ye,[a("p",Xe,[Ze,f(" "+p(_.value.responsible_lap),1)]),a("p",et,[tt,f(" "+p(_.value.site_name),1)]),a("p",at,[st,f(" "+p(_.value.status_timestamp.split("T")[0]),1)]),a("div",ot,[(W(),K(ae,null,je(me,e=>a("div",lt,[o(N,{style:V([`background-color:${e.color}`,{height:"2rem","aspect-ratio":"4 / 3"}])},null,8,["style"]),a("span",null,p(e.description),1)])),64))]),o(y,{showGridlines:"",style:{"max-width":"1024px"},stripedRows:"",filters:k.value,"onUpdate:filters":t[18]||(t[18]=e=>k.value=e),class:"col-12 m-auto p-0 m-0",value:A.value.filter(e=>e.quantity!=0),tableStyle:"min-width: 50rem;"},{default:r(()=>[o(m,{class:"py-0",field:"item_id",header:"id"}),o(m,{class:"py-0",field:"item_name",header:"Item"},{body:r(e=>[a("p",{style:V(e.data.ajustment===0?"text-decoration: line-through;background-color:#ffc9d1":"")},p(e.data.item_name),5)]),_:1}),o(m,{class:"py-0",field:"quantity_adjusted",header:"cant. Aprobada en despacho"},{body:r(e=>[a("p",nt,p(e.data.quantity_adjusted),1)]),_:1}),o(m,{class:"py-0 px-0",field:"quantity",header:"cant. realmente recibida"},{body:r(e=>[Fe(a("input",{onKeydown:be,class:"text-right",max:e.data.quantity,min:0,"onUpdate:modelValue":n=>e.data.ajustment=n,style:V([{"background-color":"transparent",height:"2rem",width:"100%",border:"none"},e.data.quantity_adjusted===e.data.ajustment?"background-color: aquamarine;":e.data.ajustment===0?"background-color:#ffc9d1":e.data.ajustment<e.data.quantity?"background-color:#FFAF33;border:2px solid #FF7A33":e.data.ajustment>e.data.quantity?"background-color:#FF3393;border:2px solid #FF3342":""]),type:"number"},null,44,it),[[Se,e.data.ajustment]])]),_:1}),o(m,{class:"py-0",field:"unit_measure",header:"Und. de medida"}),o(m,{class:"py-0",field:"quantity",header:"interactuar"},{body:r(e=>[o(s,{onClick:n=>e.data.ajustment=e.data.quantity_adjusted,style:{"min-width":"max-content"},text:"",class:"px-0 py-1",label:"Esta completo"},null,8,["onClick"])]),_:1})]),_:1},8,["filters","value"])])]),_:1},8,["visible"]),a("div",dt,[a("div",ct,[o(s,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:we}),o(s,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:ge})])]),a("div",ut,[o(y,{stripedRows:"",showGridlines:"",style:{"max-width":"1024px"},filters:k.value,"onUpdate:filters":t[22]||(t[22]=e=>k.value=e),class:"col-12 m-auto",value:j.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:r(()=>[a("div",pt,[mt,a("div",ht,[o(Q,{style:{width:"100%"},class:"",modelValue:k.value.global.value,"onUpdate:modelValue":t[21]||(t[21]=e=>k.value.global.value=e),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:r(()=>[o(m,{class:"py-1",field:"purchase_order_id",header:"ID"}),o(m,{class:"py-1",field:"employer_name",header:"Solicitante"}),o(m,{class:"py-1",field:"site_name",header:"Sede"}),o(m,{class:"py-1",field:"date",header:"Fecha"},{body:r(e=>{var n;return[a("p",vt,p((n=e.data.expedition_date)==null?void 0:n.split("T")[0]),1)]}),_:1}),o(m,{style:{"min-width":"max-content"},class:"py-1",field:"date",header:"Hora"},{body:r(e=>{var n,c,b,F;return[a("span",_t,p((F=(b=(c=(n=e.data.expedition_date)==null?void 0:n.split("T")[1])==null?void 0:c.split(":"))==null?void 0:b.slice(0,2))==null?void 0:F.join(" : ")),1)]}),_:1}),o(m,{class:"py-1",field:"date",header:"Estado actual"},{body:r(e=>[o(N,{style:V([{width:"100%"},`background-color:${pe[e.data.current_status]}`])},{default:r(()=>[f(p(e.data.current_status),1)]),_:2},1032,["style"])]),_:1}),o(m,{style:{"justify-content":"center"},class:"py-0 mx-0 px-0",field:"date",header:"Actuar"},{body:r(e=>[a("div",yt,[o(s,{label:"",style:{width:"min-content"},text:"",onClick:n=>ce(e.data),severity:"",class:"text-center p-1",icon:"fa-solid fa-hand"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])]),o(i,{class:"mx-2",visible:G.value,"onUpdate:visible":t[23]||(t[23]=e=>G.value=e),modal:"",header:"Historial de la orden",style:{width:"min-content"}},{default:r(()=>[o(L,{value:J.value},{opposite:r(e=>{var n;return[a("p",ft,p(e.item.status_timestamp.split("T")[0]),1),f(),gt,a("p",wt,p((n=e.item.status_timestamp.split("T")[1])==null?void 0:n.split(":").slice(0,2).join(":")),1)]}),content:r(e=>[a("p",bt,[a("b",null,p(e.item.lap_name),1)]),a("p",xt,p(e.item.name),1),e.item.notes?(W(),K("p",Dt,[kt,f(" "+p(e.item.notes),1)])):Ae("",!0),a("div",Ct,[o(s,{disabled:!e.item.notes,style:{height:"2rem",opacity:"0","border-radius":"0.3rem"},cla:"",severity:"help",class:"",label:"Notas"},null,8,["disabled"]),o(s,{disabled:!e.item.conflict,style:{height:"2rem","border-radius":"0.3rem"},severity:"danger",class:"mb-4",label:"Conflictos"},null,8,["disabled"])])]),_:1},8,["value"])]),_:1},8,["visible"])],64)}}},It=xe(jt,[["__scopeId","data-v-55468dd8"]]);export{It as default};
