<<<<<<<< HEAD:dist/assets/purchaseOrderReports-a3c65022.js
import{_ as Z,H as ee,l as te,r as h,h as ae,a as y,o as se,c as oe,d as s,w as _,b as l,F as le,I as ne,q as j,t as V,s as ie,p as re,g as de}from"./index-a1098956.js";import{s as ce}from"./siteService-87e954ef.js";import"./sass.default-a5b7a582.js";import{p as R}from"./purchaseOrderService-242a3a7f.js";import{u as k,w as q}from"./xlsx-4f9172c7.js";import{E as pe,F as H}from"./FileSaver.min-192d3dee.js";import{f as z}from"./format-8cf56335.js";import{e as G}from"./es-f6133d36.js";import"./_commonjsHelpers-de833af9.js";const A=E=>(re("data-v-0c8b3b36"),E=E(),de(),E),ue={class:"grid"},me={class:"col-12 px-0 mx-0"},he={class:"col-12",style:{display:"flex","flex-direction":"column"}},_e=A(()=>l("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),ve={class:"col-12",style:{display:"flex","flex-direction":"column"}},ye=A(()=>l("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),ge={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},fe={class:"col-12",style:{display:"flex","justify-content":"center"}},we={class:"m-auto",style:{"max-width":"1024px"}},xe={class:"m-0 col-12",style:{"align-items":"center"}},De={class:"p-0 mb-3",style:{display:"flex","align-items":"center",gap:"1rem"}},be=A(()=>l("span",{class:"text-xl"},[l("b",null,"Sedes")],-1)),ke={class:"col p-0",style:{display:"flex",gap:"1rem","align-items":"center"}},Ce=A(()=>l("span",{class:"text-xl"},[l("b",null,"Periodo")],-1)),Se={class:"col-12 px-3 mt-4 pack-butons",style:{display:"flex","justify-content":"end",gap:"1rem"}},Fe={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},Me={class:"grid",style:{"align-items":"center"}},Re=A(()=>l("div",{class:"col-12 md:col-6 p-3"},[l("span",{class:"text-xl",style:{width:"100%"}}," Gestionar ordenes de compra")],-1)),Ae={class:"col-12 md:col-6 p-3"},Ee={style:{"min-width":"max-content"}},$e={style:{"min-width":"max-content"}},Oe={class:"m-0 p-0",style:{display:"flex",width:"min-content","justify-content":"start","align-items":"center",gap:"0.5rem"}},Te={__name:"purchaseOrderReports",setup(E){const $=ee(),W=te(),P=h([]),O=h([{}]),f=h(!1),w=h(new Date(new Date().setDate(new Date().getDate()-7))),g=h(new Date),x=h(new Date(new Date().setDate(new Date().getDate()-7))),D=h(new Date),C=h(),S=h(),J=(c,e)=>{x.value=c,D.value=e},Q={Generada:"#FF0000",Lista:"#FFA500","Entregada al transportista":"#FFFF00",Completada:"#00FF00"},F=c=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const i=new Date(e);i.setDate(e.getDate()-c),w.value=i,c==1?(g.value=e,D.value=g.value,x.value=w.value,f.value=!1):(g.value=a,x.value=w.value,D.value=g.value,f.value=!1),B()};ae(async()=>{P.value=await ce.getSites(),O.value=P.value,C.value=await R.getAllpurchaseOrderReports()}),(()=>{S.value={global:{value:null,matchMode:ne.CONTAINS}}})();function T(c){const e=new Date(c),a=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${a}-${i}-${n}`}const B=async()=>{const c=O.value.map(i=>i.site_id);W.rawUserData.id;const e=T(x.value),a=T(D.value);C.value=await R.getAllpurchaseOrderReportsFiltered(c,e,a)},M=h([]),Y=async(c,e,a)=>{M.value=await R.getpurchaseOrderEntriesBypurchaseOrderID(c);const i=M.value.map(u=>({Producto:u.item_name,Cantidad:u.quantity,"Unidad de medida":u.unit_measure})),n=k.json_to_sheet(i);n["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const p=k.book_new();k.book_append_sheet(p,n,"Usuarios"),q(p,`Orden_de_compra_${e}_${a} .xlsx`)},K=async()=>{$.setLoading(!0,"generando descargas");const c=C.value,e=[];for(const o of c){const r=await R.getpurchaseOrderEntriesBypurchaseOrderID(o.purchase_order_id);e.push(...r)}const a={};e.forEach(o=>{const r=o.site_name,d=o.item_name,b=o.quantity,I=o.unit_measure;a[d]||(a[d]={unit_measure:I}),a[d][r]||(a[d][r]=0),a[d][r]+=b});const i=[...new Set(e.map(o=>o.site_name))],n=[],p=z(x.value,"dd-MMMM-yyyy",{locale:G}),u=z(D.value,"dd-MMMM-yyyy",{locale:G});p==u?n.push([`ORDENES DE COMPRA DEL ${p.toUpperCase()}`,...Array(i.length+2).fill("")]):n.push([`ORDENES DE COMPRA DEL${p.toUpperCase()} AL ${u.toUpperCase()}`,...Array(i.length+2).fill("")]);const v=["PRODUCTO","UNIDAD DE MEDIDA",...i,"TOTAL"];n.push(v);for(const[o,r]of Object.entries(a)){const d=[o,r.unit_measure];let b=0;for(const I of i){const N=r[I]||0;d.push(N),b+=N}d.push(b),n.push(d)}const U=new pe.Workbook,m=U.addWorksheet("Inventario por Sede");n.forEach((o,r)=>{const d=m.addRow(o);r===0?(d.height=40,d.font={name:"Arial",bold:!0,size:14},d.alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.mergeCells(`A1:${m.getColumn(i.length+3).letter}1`),m.getRow(1).eachCell(b=>{b.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):r===1&&(d.font={name:"Arial",bold:!0})}),m.columns.forEach((o,r)=>{o.width=r===0?30:r===1?25:15,o.eachCell(d=>{d.font={name:"Arial"},d.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),m.getRow(2).eachCell(o=>{o.font={name:"Arial",bold:!0}}),m.getRow(1).eachCell(o=>{o.font={name:"Arial",bold:!0,size:16}}),m.views=[{showGridLines:!1}];const L=await U.xlsx.writeBuffer(),t=new Blob([L],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});p==u?H.saveAs(t,`Reporte de inventario del ${p}.xlsx`):H.saveAs(t,`Reporte de inventario del ${p} al ${u} .xlsx`),$.setLoading(!1,"generando descargas")},X=async()=>{$.setLoading(!0,"generando descargas");const c=C.value;for(const n of c){const p=await R.getpurchaseOrderEntriesBypurchaseOrderID(n.purchase_order_id);M.value.push(...p)}console.log(M.value);const e=M.value.map(n=>({Fecha:n.date.split("T")[0],Hora:n.date.split("T")[1],Sede:n.site_name,Producto:n.item_name,Cantidad:n.quantity,"Unidad de medida":n.unit_measure})),a=k.json_to_sheet(e);a["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const i=k.book_new();k.book_append_sheet(i,a,"Usuarios"),q(i,"Compras de todas las sedes.xlsx"),$.setLoading(!1,"generando descargas")};return(c,e)=>{const a=y("Button"),i=y("Calendar"),n=y("Dialog"),p=y("MultiSelect"),u=y("InputText"),v=y("Column"),U=y("Tag"),m=y("router-link"),L=y("DataTable");return se(),oe(le,null,[s(n,{class:"mx-2",visible:f.value,"onUpdate:visible":e[8]||(e[8]=t=>f.value=t),modal:"",header:"Periodo",style:{width:"25rem"}},{default:_(()=>[l("div",ue,[l("div",me,[s(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=t=>F(0)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=t=>F(1)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=t=>F(7)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=t=>F(14)),class:"p-button-text col-12 p-1"}),s(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=t=>F(28)),class:"p-button-text col-12 p-0"})]),l("div",he,[_e,s(i,{style:{"min-width":"max-content"},modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=t=>w.value=t)},null,8,["modelValue"])]),l("div",ve,[ye,s(i,{style:{"min-width":"max-content"},modelValue:g.value,"onUpdate:modelValue":e[6]||(e[6]=t=>g.value=t),showWeek:""},null,8,["modelValue"])]),l("div",ge,[l("div",fe,[s(a,{onClick:e[7]||(e[7]=()=>{J(w.value,g.value),f.value=!1})},{default:_(()=>[j("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),l("div",we,[l("div",xe,[l("div",De,[be,s(p,{style:{},display:"chip",multiple:"",modelValue:O.value,"onUpdate:modelValue":e[9]||(e[9]=t=>O.value=t),optionLabel:"site_name",options:P.value.filter(t=>t.site_id!=12&t.site_id!=13),class:"text-sm multi p-0"},null,8,["modelValue","options"])]),l("div",ke,[Ce,s(u,{class:"",onClick:e[10]||(e[10]=t=>f.value=!0),style:{height:"2.7rem"},value:`${T(x.value)}  |  ${T(D.value)}`,placeholder:"periodo"},null,8,["value"]),s(a,{onClick:B,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])]),l("div",Se,[s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:X}),s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:K})])]),l("div",Fe,[s(L,{style:{"max-width":"1024px"},filters:S.value,"onUpdate:filters":e[12]||(e[12]=t=>S.value=t),class:"col-12 m-auto",value:C.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:_(()=>[l("div",Me,[Re,l("div",Ae,[s(u,{style:{width:"100%"},class:"",modelValue:S.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>S.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:_(()=>[s(v,{class:"py-1",field:"purchase_order_id",header:"ID"}),s(v,{class:"py-1",field:"employer_name",header:"Responsable"}),s(v,{class:"py-1",field:"site_name",header:"Sede"}),s(v,{class:"py-1",field:"date",header:"Fecha"},{body:_(t=>{var o;return[l("p",Ee,V((o=t.data.expedition_date)==null?void 0:o.split("T")[0]),1)]}),_:1}),s(v,{style:{"min-width":"max-content"},class:"py-1",field:"date",header:"Hora"},{body:_(t=>{var o;return[l("span",$e,V((o=t.data.expedition_date)==null?void 0:o.split("T")[1]),1)]}),_:1}),s(v,{class:"py-1",field:"date",header:"Estado actual"},{body:_(t=>[s(U,{style:ie([{width:"100%",height:"2.7rem"},`background-color:${Q[t.data.current_status]}`])},{default:_(()=>[j(V(t.data.current_status),1)]),_:2},1032,["style"])]),_:1}),s(v,{style:{width:"20px"},class:"py-1 mx-0 px-0",field:"date",header:"Acciones"},{body:_(t=>[l("div",Oe,[s(m,{to:`/purchase-order/purchase-order-view/${t.data.purchase_order_id}`},{default:_(()=>[s(a,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),s(a,{style:{height:"2rem"},onClick:o=>{var r;return Y(t.data.purchase_order_id,t.data.site_name,(r=t.data.expedition_date)==null?void 0:r.split("T")[0])},severity:"success",class:"p-1",icon:"pi pi-download"},null,8,["onClick"]),s(a,{style:{height:"2rem"},severity:"warning",class:"p-1",icon:"pi pi-history p-0 m-0"})])]),_:1})]),_:1},8,["filters","value"])])],64)}}},ze=Z(Te,[["__scopeId","data-v-0c8b3b36"]]);export{ze as default};
========
import{_ as Z,H as ee,l as te,r as h,h as ae,a as y,o as se,c as oe,d as s,w as _,b as l,F as le,I as ne,q as j,t as V,s as ie,p as re,g as de}from"./index-1a945cfc.js";import{s as ce}from"./siteService-6d9bcdae.js";import"./sass.default-a5b7a582.js";import{p as R}from"./purchaseOrderService-c7ca2ca5.js";import{u as k,w as q}from"./xlsx-4f9172c7.js";import{E as pe,F as H}from"./FileSaver.min-192d3dee.js";import{f as z}from"./format-8cf56335.js";import{e as G}from"./es-f6133d36.js";import"./_commonjsHelpers-de833af9.js";const A=E=>(re("data-v-0c8b3b36"),E=E(),de(),E),ue={class:"grid"},me={class:"col-12 px-0 mx-0"},he={class:"col-12",style:{display:"flex","flex-direction":"column"}},_e=A(()=>l("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),ve={class:"col-12",style:{display:"flex","flex-direction":"column"}},ye=A(()=>l("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),ge={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},fe={class:"col-12",style:{display:"flex","justify-content":"center"}},we={class:"m-auto",style:{"max-width":"1024px"}},xe={class:"m-0 col-12",style:{"align-items":"center"}},De={class:"p-0 mb-3",style:{display:"flex","align-items":"center",gap:"1rem"}},be=A(()=>l("span",{class:"text-xl"},[l("b",null,"Sedes")],-1)),ke={class:"col p-0",style:{display:"flex",gap:"1rem","align-items":"center"}},Ce=A(()=>l("span",{class:"text-xl"},[l("b",null,"Periodo")],-1)),Se={class:"col-12 px-3 mt-4 pack-butons",style:{display:"flex","justify-content":"end",gap:"1rem"}},Fe={class:"mt-3",style:{"min-height":"20vh",display:"flex","justify-content":"center","align-items":"center"}},Me={class:"grid",style:{"align-items":"center"}},Re=A(()=>l("div",{class:"col-12 md:col-6 p-3"},[l("span",{class:"text-xl",style:{width:"100%"}}," Gestionar ordenes de compra")],-1)),Ae={class:"col-12 md:col-6 p-3"},Ee={style:{"min-width":"max-content"}},$e={style:{"min-width":"max-content"}},Oe={class:"m-0 p-0",style:{display:"flex",width:"min-content","justify-content":"start","align-items":"center",gap:"0.5rem"}},Te={__name:"purchaseOrderReports",setup(E){const $=ee(),W=te(),P=h([]),O=h([{}]),f=h(!1),w=h(new Date(new Date().setDate(new Date().getDate()-7))),g=h(new Date),x=h(new Date(new Date().setDate(new Date().getDate()-7))),D=h(new Date),C=h(),S=h(),J=(c,e)=>{x.value=c,D.value=e},Q={Generada:"#FF0000",Lista:"#FFA500","Entregada al transportista":"#FFFF00",Completada:"#00FF00"},F=c=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const i=new Date(e);i.setDate(e.getDate()-c),w.value=i,c==1?(g.value=e,D.value=g.value,x.value=w.value,f.value=!1):(g.value=a,x.value=w.value,D.value=g.value,f.value=!1),B()};ae(async()=>{P.value=await ce.getSites(),O.value=P.value,C.value=await R.getAllpurchaseOrderReports()}),(()=>{S.value={global:{value:null,matchMode:ne.CONTAINS}}})();function T(c){const e=new Date(c),a=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${a}-${i}-${n}`}const B=async()=>{const c=O.value.map(i=>i.site_id);W.rawUserData.id;const e=T(x.value),a=T(D.value);C.value=await R.getAllpurchaseOrderReportsFiltered(c,e,a)},M=h([]),Y=async(c,e,a)=>{M.value=await R.getpurchaseOrderEntriesBypurchaseOrderID(c);const i=M.value.map(u=>({Producto:u.item_name,Cantidad:u.quantity,"Unidad de medida":u.unit_measure})),n=k.json_to_sheet(i);n["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const p=k.book_new();k.book_append_sheet(p,n,"Usuarios"),q(p,`Orden_de_compra_${e}_${a} .xlsx`)},K=async()=>{$.setLoading(!0,"generando descargas");const c=C.value,e=[];for(const o of c){const r=await R.getpurchaseOrderEntriesBypurchaseOrderID(o.purchase_order_id);e.push(...r)}const a={};e.forEach(o=>{const r=o.site_name,d=o.item_name,b=o.quantity,I=o.unit_measure;a[d]||(a[d]={unit_measure:I}),a[d][r]||(a[d][r]=0),a[d][r]+=b});const i=[...new Set(e.map(o=>o.site_name))],n=[],p=z(x.value,"dd-MMMM-yyyy",{locale:G}),u=z(D.value,"dd-MMMM-yyyy",{locale:G});p==u?n.push([`ORDENES DE COMPRA DEL ${p.toUpperCase()}`,...Array(i.length+2).fill("")]):n.push([`ORDENES DE COMPRA DEL${p.toUpperCase()} AL ${u.toUpperCase()}`,...Array(i.length+2).fill("")]);const v=["PRODUCTO","UNIDAD DE MEDIDA",...i,"TOTAL"];n.push(v);for(const[o,r]of Object.entries(a)){const d=[o,r.unit_measure];let b=0;for(const I of i){const N=r[I]||0;d.push(N),b+=N}d.push(b),n.push(d)}const U=new pe.Workbook,m=U.addWorksheet("Inventario por Sede");n.forEach((o,r)=>{const d=m.addRow(o);r===0?(d.height=40,d.font={name:"Arial",bold:!0,size:14},d.alignment={horizontal:"center",vertical:"middle",wrapText:!0},m.mergeCells(`A1:${m.getColumn(i.length+3).letter}1`),m.getRow(1).eachCell(b=>{b.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):r===1&&(d.font={name:"Arial",bold:!0})}),m.columns.forEach((o,r)=>{o.width=r===0?30:r===1?25:15,o.eachCell(d=>{d.font={name:"Arial"},d.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),m.getRow(2).eachCell(o=>{o.font={name:"Arial",bold:!0}}),m.getRow(1).eachCell(o=>{o.font={name:"Arial",bold:!0,size:16}}),m.views=[{showGridLines:!1}];const L=await U.xlsx.writeBuffer(),t=new Blob([L],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});p==u?H.saveAs(t,`Reporte de inventario del ${p}.xlsx`):H.saveAs(t,`Reporte de inventario del ${p} al ${u} .xlsx`),$.setLoading(!1,"generando descargas")},X=async()=>{$.setLoading(!0,"generando descargas");const c=C.value;for(const n of c){const p=await R.getpurchaseOrderEntriesBypurchaseOrderID(n.purchase_order_id);M.value.push(...p)}console.log(M.value);const e=M.value.map(n=>({Fecha:n.date.split("T")[0],Hora:n.date.split("T")[1],Sede:n.site_name,Producto:n.item_name,Cantidad:n.quantity,"Unidad de medida":n.unit_measure})),a=k.json_to_sheet(e);a["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const i=k.book_new();k.book_append_sheet(i,a,"Usuarios"),q(i,"Compras de todas las sedes.xlsx"),$.setLoading(!1,"generando descargas")};return(c,e)=>{const a=y("Button"),i=y("Calendar"),n=y("Dialog"),p=y("MultiSelect"),u=y("InputText"),v=y("Column"),U=y("Tag"),m=y("router-link"),L=y("DataTable");return se(),oe(le,null,[s(n,{class:"mx-2",visible:f.value,"onUpdate:visible":e[8]||(e[8]=t=>f.value=t),modal:"",header:"Periodo",style:{width:"25rem"}},{default:_(()=>[l("div",ue,[l("div",me,[s(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=t=>F(0)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=t=>F(1)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=t=>F(7)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=t=>F(14)),class:"p-button-text col-12 p-1"}),s(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=t=>F(28)),class:"p-button-text col-12 p-0"})]),l("div",he,[_e,s(i,{style:{"min-width":"max-content"},modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=t=>w.value=t)},null,8,["modelValue"])]),l("div",ve,[ye,s(i,{style:{"min-width":"max-content"},modelValue:g.value,"onUpdate:modelValue":e[6]||(e[6]=t=>g.value=t),showWeek:""},null,8,["modelValue"])]),l("div",ge,[l("div",fe,[s(a,{onClick:e[7]||(e[7]=()=>{J(w.value,g.value),f.value=!1})},{default:_(()=>[j("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),l("div",we,[l("div",xe,[l("div",De,[be,s(p,{style:{},display:"chip",multiple:"",modelValue:O.value,"onUpdate:modelValue":e[9]||(e[9]=t=>O.value=t),optionLabel:"site_name",options:P.value.filter(t=>t.site_id!=12&t.site_id!=13),class:"text-sm multi p-0"},null,8,["modelValue","options"])]),l("div",ke,[Ce,s(u,{class:"",onClick:e[10]||(e[10]=t=>f.value=!0),style:{height:"2.7rem"},value:`${T(x.value)}  |  ${T(D.value)}`,placeholder:"periodo"},null,8,["value"]),s(a,{onClick:B,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])]),l("div",Se,[s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:X}),s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:K})])]),l("div",Fe,[s(L,{style:{"max-width":"1024px"},filters:S.value,"onUpdate:filters":e[12]||(e[12]=t=>S.value=t),class:"col-12 m-auto",value:C.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:_(()=>[l("div",Me,[Re,l("div",Ae,[s(u,{style:{width:"100%"},class:"",modelValue:S.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>S.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:_(()=>[s(v,{class:"py-1",field:"purchase_order_id",header:"ID"}),s(v,{class:"py-1",field:"employer_name",header:"Responsable"}),s(v,{class:"py-1",field:"site_name",header:"Sede"}),s(v,{class:"py-1",field:"date",header:"Fecha"},{body:_(t=>{var o;return[l("p",Ee,V((o=t.data.expedition_date)==null?void 0:o.split("T")[0]),1)]}),_:1}),s(v,{style:{"min-width":"max-content"},class:"py-1",field:"date",header:"Hora"},{body:_(t=>{var o;return[l("span",$e,V((o=t.data.expedition_date)==null?void 0:o.split("T")[1]),1)]}),_:1}),s(v,{class:"py-1",field:"date",header:"Estado actual"},{body:_(t=>[s(U,{style:ie([{width:"100%",height:"2.7rem"},`background-color:${Q[t.data.current_status]}`])},{default:_(()=>[j(V(t.data.current_status),1)]),_:2},1032,["style"])]),_:1}),s(v,{style:{width:"20px"},class:"py-1 mx-0 px-0",field:"date",header:"Acciones"},{body:_(t=>[l("div",Oe,[s(m,{to:`/purchase-order/purchase-order-view/${t.data.purchase_order_id}`},{default:_(()=>[s(a,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),s(a,{style:{height:"2rem"},onClick:o=>{var r;return Y(t.data.purchase_order_id,t.data.site_name,(r=t.data.expedition_date)==null?void 0:r.split("T")[0])},severity:"success",class:"p-1",icon:"pi pi-download"},null,8,["onClick"]),s(a,{style:{height:"2rem"},severity:"warning",class:"p-1",icon:"pi pi-history p-0 m-0"})])]),_:1})]),_:1},8,["filters","value"])])],64)}}},ze=Z(Te,[["__scopeId","data-v-0c8b3b36"]]);export{ze as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/purchaseOrderReports-f66d5ff2.js
