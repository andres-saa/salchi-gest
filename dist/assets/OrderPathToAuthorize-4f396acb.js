import{_ as ge,x as xe,r as d,l as De,i as ke,a as b,o as W,c as te,d as s,w as r,b as a,F as Ce,B as Ae,s as w,t as m,D as ae,E as K,L as Se,M as Te,f as Fe,p as je,g as Oe}from"./index-46f5b0d8.js";import{s as Ue}from"./siteService-79317d44.js";import"./sass.default-a1d89e71.js";import{p as g}from"./purchaseOrderService-9ab03e7d.js";import{u as T,w as se}from"./xlsx-4f9172c7.js";import{E as qe,F as le}from"./FileSaver.min-af960175.js";import{f as oe}from"./format-36e25dfb.js";import{e as ne}from"./es-e43b915c.js";import"./_commonjsHelpers-23102255.js";const v=M=>(je("data-v-ea1d08cb"),M=M(),Oe(),M),Ee=v(()=>a("b",null,"Autor de la nota: ",-1)),Me=v(()=>a("b",null,"Fecha: ",-1)),$e=v(()=>a("b",null,"Contenido de la Observacion: ",-1)),Ie=v(()=>a("br",null,null,-1)),Ne=v(()=>a("p",null,"Desea ageregar notas?",-1)),Pe={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},Ve={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},Re=v(()=>a("br",null,null,-1)),Be={style:{"min-width":"max-content"},class:"p-text-secondary m-0 p-0"},Le={class:"m-0"},ze={class:"m-0"},He={key:0},Ge=v(()=>a("b",null,"Notas",-1)),We={style:{display:"flex",gap:"1rem"}},Ke={class:"grid"},Qe={class:"col-12 px-0 mx-0"},Je={class:"col-12",style:{display:"flex","flex-direction":"column"}},Ye=v(()=>a("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),Xe={class:"col-12",style:{display:"flex","flex-direction":"column"}},Ze=v(()=>a("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),et={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},tt={class:"col-12",style:{display:"flex","justify-content":"center"}},at={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},st={class:"m-0 p-0",style:{display:"flex",width:"100%","flex-direction":"column","justify-content":"start",gap:"0.5rem"}},lt={class:"m-0 p-0"},ot=v(()=>a("b",null,"Alistada por:",-1)),nt={class:"m-0 p-0"},it=v(()=>a("b",null,"Sede:",-1)),rt={class:"mt-0 p-0"},dt=v(()=>a("b",null,"Fecha de Alistamiento:",-1)),ut={class:"text-right"},ct=["max","onUpdate:modelValue"],pt={class:"pt-3",style:{display:"flex","justify-content":"end","align-items":"end"}},mt={class:"m-auto",style:{"max-width":"1024px"}},ht={class:"col-12 px-3 mt-4 pack-butons",style:{display:"flex","justify-content":"end",gap:"1rem"}},vt={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},yt={class:"grid",style:{"align-items":"center"}},_t=v(()=>a("div",{class:"col-12 md:col-6 p-3"},[a("span",{class:"text-xl",style:{width:"100%"}}," Ordenes pendientes por Autorizar")],-1)),ft={class:"col-12 md:col-6 p-3"},wt={style:{"min-width":"max-content"}},bt={style:{"min-width":"max-content"}},gt={class:"m-0 p-0",style:{display:"flex",width:"min-content","justify-content":"start","align-items":"center",gap:"0.5rem"}},ie=2,xt={__name:"OrderPathToAuthorize",setup(M){const k=xe(),$=d(!1),F=d([]),I=d(!1),V=d(""),y=d({}),R=d(!1),B=d({}),re=()=>{F.value.forEach(n=>{n.ajustment=n.quantity})},de=n=>{if(n.some(t=>!t.ajustment&&t.ajustment!==0)){alert("por favor complete todos los campos");return}if(n.some(t=>t.ajustment>t.quantity)){alert("No puedes enviar mas de lo solicitado");return}I.value=!0},N=d(!1),ue=n=>{$.value=!0,y.value=n},ce=async n=>{N.value=!0,F.value=await g.getpurchaseOrderEntriesBypurchaseOrderID(n)},pe={Generada:"#FF0000",Lista:"#FFA500","Entregada al transportista":"#FFFF00",Completada:"#00FF00"},L=d(!1),Q=d([]),me=async n=>{L.value=!0,Q.value=await g.getPurchaseOrderHistory(n)},J=De(),Y=d([]),X=d([{}]),j=d(!1),C=d(new Date(new Date().setDate(new Date().getDate()-7))),x=d(new Date),O=d(new Date(new Date().setDate(new Date().getDate()-7))),U=d(new Date),A=d(),D=d(),he=(n,t)=>{O.value=n,U.value=t},q=n=>{const t=new Date,i=new Date(t);i.setDate(i.getDate()+1);const u=new Date(t);u.setDate(t.getDate()-n),C.value=u,n==1?(x.value=t,U.value=x.value,O.value=C.value,j.value=!1):(x.value=i,O.value=C.value,U.value=x.value,j.value=!1),ve()};ke(async()=>{Y.value=await Ue.getSites(),X.value=Y.value,A.value=await g.getPurchaseOrderByLap_id(ie)}),(()=>{D.value={global:{value:null,matchMode:Ae.CONTAINS}}})();function Z(n){const t=new Date(n),i=t.getFullYear(),u=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return`${i}-${u}-${l}`}const ve=async()=>{const n=X.value.map(u=>u.site_id);J.rawUserData.id;const t=Z(O.value),i=Z(U.value);A.value=await g.getAllpurchaseOrderReportsFiltered(n,t,i)},E=d([]),ye=async(n,t,i)=>{E.value=await g.getpurchaseOrderEntriesBypurchaseOrderID(n);const u=E.value.map(_=>({Producto:_.item_name,Cantidad:_.quantity,"Unidad de medida":_.unit_measure})),l=T.json_to_sheet(u);l["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const h=T.book_new();T.book_append_sheet(h,l,"Usuarios"),se(h,`Orden_de_compra_${t}_${i} .xlsx`)},_e=async n=>{if(n.some(i=>!i.ajustment&&i.ajustment!==0&&i.quantity_adjusted<i.quantity)){alert("Debe aceptar los ajustes antes de Autorizar");return}k.setLoading(!0,"Autorizando orden");const t={purchase_order_id:y.value.purchase_order_id,lap_id:y.value.lap_id,responsible_id:J.rawUserData.id,ajusts:[],order_purchase_notes:V.value};await g.PreparePurchaserOrder(t),A.value=await g.getPurchaseOrderByLap_id(ie),$.value=!1,N.value=!1,k.setLoading(!1,"Autorizando orden"),R.value=!1},fe=async()=>{k.setLoading(!0,"generando descargas");const n=A.value,t=[];for(const e of n){const o=await g.getpurchaseOrderEntriesBypurchaseOrderID(e.purchase_order_id);t.push(...o)}const i={};t.forEach(e=>{const o=e.site_name,c=e.item_name,S=e.quantity,G=e.unit_measure;i[c]||(i[c]={unit_measure:G}),i[c][o]||(i[c][o]=0),i[c][o]+=S});const u=[...new Set(t.map(e=>e.site_name))],l=[],h=oe(O.value,"dd-MMMM-yyyy",{locale:ne}),_=oe(U.value,"dd-MMMM-yyyy",{locale:ne});h==_?l.push([`ORDENES DE COMPRA DEL ${h.toUpperCase()}`,...Array(u.length+2).fill("")]):l.push([`ORDENES DE COMPRA DEL${h.toUpperCase()} AL ${_.toUpperCase()}`,...Array(u.length+2).fill("")]);const z=["PRODUCTO","UNIDAD DE MEDIDA",...u,"TOTAL"];l.push(z);for(const[e,o]of Object.entries(i)){const c=[e,o.unit_measure];let S=0;for(const G of u){const ee=o[G]||0;c.push(ee),S+=ee}c.push(S),l.push(c)}const p=new qe.Workbook,f=p.addWorksheet("Inventario por Sede");l.forEach((e,o)=>{const c=f.addRow(e);o===0?(c.height=40,c.font={name:"Arial",bold:!0,size:14},c.alignment={horizontal:"center",vertical:"middle",wrapText:!0},f.mergeCells(`A1:${f.getColumn(u.length+3).letter}1`),f.getRow(1).eachCell(S=>{S.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):o===1&&(c.font={name:"Arial",bold:!0})}),f.columns.forEach((e,o)=>{e.width=o===0?30:o===1?25:15,e.eachCell(c=>{c.font={name:"Arial"},c.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),f.getRow(2).eachCell(e=>{e.font={name:"Arial",bold:!0}}),f.getRow(1).eachCell(e=>{e.font={name:"Arial",bold:!0,size:16}}),f.views=[{showGridLines:!1}];const H=await p.xlsx.writeBuffer(),P=new Blob([H],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});h==_?le.saveAs(P,`Reporte de inventario del ${h}.xlsx`):le.saveAs(P,`Reporte de inventario del ${h} al ${_} .xlsx`),k.setLoading(!1,"generando descargas")},we=async()=>{k.setLoading(!0,"generando descargas");const n=A.value;for(const l of n){const h=await g.getpurchaseOrderEntriesBypurchaseOrderID(l.purchase_order_id);E.value.push(...h)}console.log(E.value);const t=E.value.map(l=>({Fecha:l.date.split("T")[0],Hora:l.date.split("T")[1],Sede:l.site_name,Producto:l.item_name,Cantidad:l.quantity,"Unidad de medida":l.unit_measure})),i=T.json_to_sheet(t);i["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const u=T.book_new();T.book_append_sheet(u,i,"Usuarios"),se(u,"Compras de todas las sedes.xlsx"),k.setLoading(!1,"generando descargas")};function be(n){n.key===","&&(alert("Por favor usa punto ( . ) para los decimales, gracias"),n.preventDefault())}return(n,t)=>{const i=b("Dialog"),u=b("Textarea"),l=b("Button"),h=b("Timeline"),_=b("Calendar"),z=b("router-link"),p=b("Column"),f=b("DataTable"),H=b("InputText"),P=b("Tag");return W(),te(Ce,null,[s(i,{class:"mx-2",visible:R.value,"onUpdate:visible":t[0]||(t[0]=e=>R.value=e),modal:"",header:"Notas de la orden",style:{width:"28rem"}},{default:r(()=>[a("div",null,[a("p",null,[Ee,w(m(B.value.item.name),1)]),a("p",null,[Me,w(m(B.value.item.status_timestamp.split("T")[0]),1)]),a("p",null,[$e,w(),Ie,w(m(B.value.item.notes),1)])])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:I.value,"onUpdate:visible":t[4]||(t[4]=e=>I.value=e),modal:"",header:"Notas de alistamientos",style:{width:"25rem"}},{footer:r(()=>[a("div",Pe,[s(l,{text:"",onClick:t[2]||(t[2]=e=>I.value=!1),severity:"danger",label:"cancelar"}),s(l,{onClick:t[3]||(t[3]=e=>_e(F.value.filter(o=>o.quantity!=0))),severity:"help",label:"Alistar orden"})])]),default:r(()=>[Ne,a("div",null,[s(u,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=e=>V.value=e),style:{width:"100%",resize:"none",height:"10rem"}},null,8,["modelValue"])])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:L.value,"onUpdate:visible":t[5]||(t[5]=e=>L.value=e),modal:"",header:"Historial de la orden",style:{width:"min-content"}},{default:r(()=>[s(h,{value:Q.value},{opposite:r(e=>{var o;return[a("p",Ve,m(e.item.status_timestamp.split("T")[0]),1),w(),Re,a("p",Be,m((o=e.item.status_timestamp.split("T")[1])==null?void 0:o.split(":").slice(0,2).join(":")),1)]}),content:r(e=>[a("p",Le,[a("b",null,m(e.item.lap_name),1)]),a("p",ze,m(e.item.name),1),e.item.notes?(W(),te("p",He,[Ge,w(" "+m(e.item.notes),1)])):ae("",!0),a("div",We,[s(l,{disabled:!e.item.notes,style:{height:"2rem",opacity:"0","border-radius":"0.3rem"},cla:"",severity:"help",class:"",label:"Notas"},null,8,["disabled"]),s(l,{disabled:!e.item.conflict,style:{height:"2rem","border-radius":"0.3rem"},severity:"danger",class:"mb-4",label:"Conflictos"},null,8,["disabled"])])]),_:1},8,["value"])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:j.value,"onUpdate:visible":t[14]||(t[14]=e=>j.value=e),modal:"",header:"Periodo",style:{width:"25rem"}},{default:r(()=>[a("div",Ke,[a("div",Qe,[s(l,{text:"",label:"Hoy",onClick:t[6]||(t[6]=e=>q(0)),class:"p-button-text col-12 p-1 m-0"}),s(l,{text:"",label:"Ayer",onClick:t[7]||(t[7]=e=>q(1)),class:"p-button-text col-12 p-1 m-0"}),s(l,{text:"",label:"Últimos 7 días",onClick:t[8]||(t[8]=e=>q(7)),class:"p-button-text col-12 p-1 m-0"}),s(l,{text:"",label:"Últimos 14 días",onClick:t[9]||(t[9]=e=>q(14)),class:"p-button-text col-12 p-1"}),s(l,{text:"",label:"Últimos 28 días",onClick:t[10]||(t[10]=e=>q(28)),class:"p-button-text col-12 p-0"})]),a("div",Je,[Ye,s(_,{style:{"min-width":"max-content"},modelValue:C.value,"onUpdate:modelValue":t[11]||(t[11]=e=>C.value=e)},null,8,["modelValue"])]),a("div",Xe,[Ze,s(_,{style:{"min-width":"max-content"},modelValue:x.value,"onUpdate:modelValue":t[12]||(t[12]=e=>x.value=e),showWeek:""},null,8,["modelValue"])]),a("div",et,[a("div",tt,[s(l,{onClick:t[13]||(t[13]=()=>{he(C.value,x.value),j.value=!1})},{default:r(()=>[w("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),s(i,{class:"mx-2",visible:$.value,"onUpdate:visible":t[18]||(t[18]=e=>$.value=e),modal:"",header:"Interactuar con la orden",style:{width:"25rem"}},{default:r(()=>[a("div",at,[s(z,{to:`/purchase-order/recorrido/purchase-order-view/${y.value.purchase_order_id}`},{default:r(()=>[s(l,{text:"",style:{width:"100%"},severity:"help",class:"",label:"Ver detalles",icon:"pi pi-eye"})]),_:1},8,["to"]),s(l,{text:"",label:"Descargar en excel",style:{},onClick:t[15]||(t[15]=e=>{var o;return ye(y.value.purchase_order_id,y.value.site_name,(o=y.value.expedition_date)==null?void 0:o.split("T")[0])}),severity:"success",class:"",icon:"pi pi-download"}),s(l,{onClick:t[16]||(t[16]=e=>me(y.value.purchase_order_id)),text:"",label:"Ver Historial",style:{},severity:"warning",class:"",icon:"pi pi-history p-0 m-0"}),s(l,{onClick:t[17]||(t[17]=e=>ce(y.value.purchase_order_id)),label:"Autorizar esta orden",style:{},severity:"help",class:"",icon:"pi  p-0 m-0"})])]),_:1},8,["visible"]),s(i,{class:"px-2",visible:N.value,"onUpdate:visible":t[21]||(t[21]=e=>N.value=e),modal:"",header:"Autorizar orden",style:{width:"max-content","max-width":"100vw"}},{footer:r(()=>[a("div",pt,[s(l,{outlined:"",onClick:re,severity:"help",label:"Aprobar todo"}),s(l,{onClick:t[20]||(t[20]=e=>de(F.value.filter(o=>o.quantity!=0))),severity:"help",label:"Alistar orden"})])]),default:r(()=>[a("div",st,[a("p",lt,[ot,w(" "+m(y.value.responsible_lap),1)]),a("p",nt,[it,w(" "+m(y.value.site_name),1)]),a("p",rt,[dt,w(" "+m(y.value.status_timestamp.split("T")[0]),1)]),s(f,{showGridlines:"",style:{"max-width":"1024px"},stripedRows:"",filters:D.value,"onUpdate:filters":t[19]||(t[19]=e=>D.value=e),class:"col-12 m-auto p-0 m-0",value:F.value.filter(e=>e.quantity!=0),tableStyle:"min-width: 50rem;"},{default:r(()=>[s(p,{class:"py-0",field:"item_id",header:"id"}),s(p,{class:"py-0",field:"item_name",header:"Item"},{body:r(e=>[a("p",{style:K(e.data.ajustment===0?"text-decoration: line-through;background-color:#ffc9d1":"")},m(e.data.item_name),5)]),_:1}),s(p,{class:"py-0",field:"quantity",header:"cant. Solicitada por la sede"},{body:r(e=>[a("p",ut,m(e.data.quantity),1)]),_:1}),s(p,{class:"py-0 px-0",field:"quantity",header:"cant. despachada por quien alista"},{body:r(e=>[Se(a("input",{readonly:"",onKeydown:be,class:"text-right",max:e.data.quantity,min:0,"onUpdate:modelValue":o=>e.data.quantity_adjusted=o,style:K([{"background-color":"transparent",height:"2rem",width:"100%",border:"none"},e.data.quantity===e.data.ajustment&&e.data.quantity_adjusted<e.data.quantity?"background-color: aquamarine;":e.data.ajustment===0?"background-color:#ffc9d1":e.data.quantity_adjusted<e.data.quantity?"background-color:#FFAF33;border:2px solid #FF7A33":""]),type:"number"},null,44,ct),[[Te,e.data.quantity_adjusted]])]),_:1}),s(p,{class:"py-0",field:"unit_measure",header:"Und. de medida"}),s(p,{class:"py-0",field:"quantity",header:"interactuar"},{body:r(e=>[e.data.quantity_adjusted<e.data.quantity?(W(),Fe(l,{key:0,onClick:o=>e.data.ajustment=e.data.quantity,style:{"min-width":"max-content"},text:"",class:"px-0 py-1",label:"Aprobar"},null,8,["onClick"])):ae("",!0)]),_:1})]),_:1},8,["filters","value"])])]),_:1},8,["visible"]),a("div",mt,[a("div",ht,[s(l,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:we}),s(l,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:fe})])]),a("div",vt,[s(f,{showGridlines:"",style:{"max-width":"1024px"},filters:D.value,"onUpdate:filters":t[23]||(t[23]=e=>D.value=e),class:"col-12 m-auto",value:A.value,tableStyle:"min-width: 50rem;"},{header:r(()=>[a("div",yt,[_t,a("div",ft,[s(H,{style:{width:"100%"},class:"",modelValue:D.value.global.value,"onUpdate:modelValue":t[22]||(t[22]=e=>D.value.global.value=e),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:r(()=>[s(p,{class:"py-1",field:"purchase_order_id",header:"ID"}),s(p,{class:"py-1",field:"responsible_lap",header:"Quien la alisto"}),s(p,{class:"py-1",field:"site_name",header:"Sede"}),s(p,{class:"py-1",field:"date",header:"Fecha"},{body:r(e=>{var o;return[a("p",wt,m((o=e.data.status_timestamp)==null?void 0:o.split("T")[0]),1)]}),_:1}),s(p,{style:{"min-width":"max-content"},class:"py-1",field:"date",header:"Hora"},{body:r(e=>{var o;return[a("span",bt,m((o=e.data.status_timestamp)==null?void 0:o.split("T")[1]),1)]}),_:1}),s(p,{class:"py-1",field:"date",header:"Estado actual"},{body:r(e=>[s(P,{style:K([{width:"100%",height:"2.7rem"},`background-color:${pe[e.data.current_status]}`])},{default:r(()=>[w(m(e.data.current_status),1)]),_:2},1032,["style"])]),_:1}),s(p,{style:{width:"20px"},class:"py-1 mx-0 px-0",field:"date",header:"Acciones"},{body:r(e=>[a("div",gt,[s(l,{label:"Interactuar",onClick:o=>ue(e.data),severity:"help",class:"",icon:"pi "},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},qt=ge(xt,[["__scopeId","data-v-ea1d08cb"]]);export{qt as default};
