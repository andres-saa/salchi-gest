<<<<<<<< HEAD:dist/assets/dailyInventoryReports-ab9d5eab.js
import{_ as oe,H as se,l as le,r as u,h as ne,a as y,o as H,c as W,d as s,w as h,b as o,s as ie,t as q,m as re,F as de,I as ce,q as G,p as pe,g as ue}from"./index-a1098956.js";import{s as me}from"./siteService-87e954ef.js";import{d as L}from"./dailyInventoryService-db0d65bf.js";import{u as C,w as J}from"./xlsx-4f9172c7.js";import{E as ve,F as Q}from"./FileSaver.min-192d3dee.js";import{m as ye}from"./index-3ec6abaa.js";/* empty css                                                                              */import{f as Y}from"./format-8cf56335.js";import{e as Z}from"./es-f6133d36.js";import"./sass.default-a5b7a582.js";import"./_commonjsHelpers-de833af9.js";const A=E=>(pe("data-v-0a0c3b5f"),E=E(),ue(),E),he={class:"grid"},fe={class:"col-12 px-0 mx-0"},_e={class:"col-12",style:{display:"flex","flex-direction":"column"}},ge=A(()=>o("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),we={class:"col-12",style:{display:"flex","flex-direction":"column"}},xe=A(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),be={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},De={class:"col-12",style:{display:"flex","justify-content":"center"}},ke={class:"m-auto",style:{"max-width":"1024px"}},Ce={class:"m-0 col-12 p-3",style:{"align-items":"center"}},Ie={class:"p-0 mb-3",style:{display:"flex",gap:"1rem","align-items":"center","justify-content":"start"}},Se=A(()=>o("span",{class:"text-xl",style:{}},[o("b",null,"Sedes")],-1)),Re={class:"col p-0",style:{display:"flex","justify-content":"start",gap:"1rem","align-items":"center"}},Me=A(()=>o("span",{class:"text-xl"},[o("b",null,"Periodo")],-1)),Ae={class:"col-12 px-3",style:{display:"flex","justify-content":"end",gap:"1rem"}},Ee={class:"text-center p-0 text-white"},$e={class:"mt-3",style:{"min-height":"20vh","flex-direction":"column",display:"flex","justify-content":"center","align-items":"center"}},Pe={class:"grid",style:{"align-items":"center"}},Te=A(()=>o("div",{class:"col-12 md:col-6 p-3"},[o("span",{class:"text-xl",style:{width:"100%"}}," Gestionar reportes de inventario")],-1)),Ue={class:"col-12 md:col-6 p-3"},Fe={style:{"text-transform":"uppercase"}},Ve={style:{display:"flex",gap:"0.5rem"}},Le="America/Bogota",je={__name:"dailyInventoryReports",setup(E){const $=se(),K=le(),j=u([]),P=u([{}]),g=u(!1),T=ye().tz(Le).toDate(),N=u(!1),I=u(0),w=u(T),f=u(T),x=u(T),b=u(T),U=u(),S=u(),X=(d,e)=>{x.value=d,b.value=e},R=d=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const l=new Date(e);l.setDate(e.getDate()-d),w.value=l,d==1?(f.value=l,b.value=f.value,x.value=w.value,g.value=!1):(f.value=e,x.value=w.value,b.value=f.value,g.value=!1),B()};ne(async()=>{j.value=await me.getSites(),P.value=j.value,B()}),(()=>{S.value={global:{value:null,matchMode:ce.CONTAINS}}})();function F(d){const e=new Date(d),a=e.getFullYear(),l=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${a}-${l}-${n}`}const B=async()=>{const d=P.value.map(l=>l.site_id);K.rawUserData.id;const e=F(x.value),a=F(b.value);U.value=await L.getAllDailyInventoryReportsFiltered(d,e,a)},M=u([]),ee=async(d,e,a)=>{M.value=await L.getDailyInventoryEntriesByDailyInventoryID(d);const l=M.value.map(m=>({Producto:m.item_name,Cantidad:m.quantity,"Unidad de medida":m.unit_measure})),n=C.json_to_sheet(l);n["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const p=C.book_new();C.book_append_sheet(p,n,"Usuarios"),J(p,`Inventario_${e}_${a.split("-").reverse().join("-")} .xlsx`)},te=async()=>{$.setLoading(!0,"generando descargas");const d=U.value,e=[];I.value=0,N.value=!0;for(const i of d){const c=await L.getDailyInventoryEntriesByDailyInventoryID(i.daily_inventory_id);e.push(...c),I.value+=100/d.length}const a={};e.forEach(i=>{const c=i.site_name,r=i.item_name,k=i.quantity,O=i.unit_measure;a[r]||(a[r]={unit_measure:O}),a[r][c]||(a[r][c]=0),a[r][c]+=k});const l=[...new Set(e.map(i=>i.site_name))],n=[],p=Y(x.value,"dd-MMMM-yyyy",{locale:Z}),m=Y(b.value,"dd-MMMM-yyyy",{locale:Z});p==m?n.push([`REPORTE DE INVENTARIO DEL ${p.toUpperCase()}`,...Array(l.length+2).fill("")]):n.push([`REPORTE DE INVENTARIO DEL ${p.toUpperCase()} AL ${m.toUpperCase()}`,...Array(l.length+2).fill("")]);const _=["PRODUCTO","UNIDAD DE MEDIDA",...l,"TOTAL"];n.push(_);for(const[i,c]of Object.entries(a)){const r=[i,c.unit_measure];let k=0;for(const O of l){const z=c[O]||0;r.push(z),k+=z}r.push(k),n.push(r)}const V=new ve.Workbook,v=V.addWorksheet("Inventario por Sede");n.forEach((i,c)=>{const r=v.addRow(i);c===0?(r.height=40,r.font={name:"Arial",bold:!0,size:14},r.alignment={horizontal:"center",vertical:"middle",wrapText:!0},v.mergeCells(`A1:${v.getColumn(l.length+3).letter}1`),v.getRow(1).eachCell(k=>{k.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):c===1&&(r.font={name:"Arial",bold:!0})}),v.columns.forEach((i,c)=>{i.width=c===0?30:c===1?25:15,i.eachCell(r=>{r.font={name:"Arial"},r.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),v.getRow(2).eachCell(i=>{i.font={name:"Arial",bold:!0}}),v.getRow(1).eachCell(i=>{i.font={name:"Arial",bold:!0,size:16}}),v.views=[{showGridLines:!1}];const t=await V.xlsx.writeBuffer(),D=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});p==m?Q.saveAs(D,`Reporte de inventario del ${p}.xlsx`):Q.saveAs(D,`Reporte de inventario del ${p} al ${m} .xlsx`),$.setLoading(!1,"generando descargas"),I.value=0,N.value=!1},ae=async()=>{$.setLoading(!0,"generando descargas");const d=U.value;for(const n of d){const p=await L.getDailyInventoryEntriesByDailyInventoryID(n.daily_inventory_id);M.value.push(...p)}console.log(M.value);const e=M.value.map(n=>({Fecha:n.date.split("-").reverse().join("-"),Sede:n.site_name,Producto:n.item_name,Cantidad:n.quantity,"Unidad de medida":n.unit_measure})),a=C.json_to_sheet(e);a["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const l=C.book_new();C.book_append_sheet(l,a,"Usuarios"),J(l,"Inventario todas las sedes.xlsx"),$.setLoading(!1,"generando descargas")};return(d,e)=>{const a=y("Button"),l=y("Calendar"),n=y("Dialog"),p=y("MultiSelect"),m=y("InputText"),_=y("Column"),V=y("router-link"),v=y("DataTable");return H(),W(de,null,[s(n,{class:"mx-2",visible:g.value,"onUpdate:visible":e[8]||(e[8]=t=>g.value=t),modal:"",header:"Periodo",style:{width:"25rem"}},{default:h(()=>[o("div",he,[o("div",fe,[s(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=t=>R(0)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=t=>R(1)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=t=>R(7)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=t=>R(14)),class:"p-button-text col-12 p-1"}),s(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=t=>R(28)),class:"p-button-text col-12 p-0"})]),o("div",_e,[ge,s(l,{style:{"min-width":"max-content"},modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=t=>w.value=t)},null,8,["modelValue"])]),o("div",we,[xe,s(l,{style:{"min-width":"max-content"},modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=t=>f.value=t),showWeek:""},null,8,["modelValue"])]),o("div",be,[o("div",De,[s(a,{onClick:e[7]||(e[7]=()=>{X(w.value,f.value),g.value=!1})},{default:h(()=>[G("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),o("div",ke,[o("div",Ce,[o("div",Ie,[Se,s(p,{style:{},display:"chip",multiple:"",modelValue:P.value,"onUpdate:modelValue":e[9]||(e[9]=t=>P.value=t),optionLabel:"site_name",options:j.value.filter(t=>t.site_id!=12&t.site_id!=13),class:"text-sm multi p-0"},null,8,["modelValue","options"])]),o("div",Re,[Me,s(m,{class:"",onClick:e[10]||(e[10]=t=>g.value=!0),style:{height:"2.7rem",width:"16rem"},value:`${F(x.value)}  |  ${F(b.value)}`,placeholder:"periodo"},null,8,["value"]),s(a,{onClick:B,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])]),o("div",Ae,[s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:ae}),s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:te})])]),N.value?(H(),W("div",{key:0,class:"p-1",style:ie([`width:${I.value}%`,{transition:"1s ease all",position:"fixed",top:"3rem",display:"flex","justify-content":"end","align-items":"center","z-index":"9999",height:"1rem","background-color":"var(--primary-color)"}])},[o("p",Ee,q(Math.round(I.value))+"%",1)],4)):re("",!0),o("div",$e,[s(v,{style:{"max-width":"1024px"},filters:S.value,"onUpdate:filters":e[12]||(e[12]=t=>S.value=t),class:"col-12 m-auto",value:U.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:h(()=>[o("div",Pe,[Te,o("div",Ue,[s(m,{style:{width:"100%"},class:"",modelValue:S.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>S.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:h(()=>[s(_,{class:"py-1",field:"daily_inventory_id",header:"ID"}),s(_,{class:"py-1",field:"employer_name",header:"Responsable"},{body:h(t=>[o("div",Fe,q(t.data.employer_name),1)]),_:1}),s(_,{class:"py-1",field:"site_name",header:"Sede"}),s(_,{class:"py-1",field:"date",header:"Fecha"},{body:h(t=>{var D;return[G(q((D=t.data.date)==null?void 0:D.split("-").reverse().join("-")),1)]}),_:1}),s(_,{style:{},class:"py-1 px-0",field:"date",header:"Action"},{body:h(t=>[o("div",Ve,[s(V,{to:`/daily-inventory/daily-inventory-view/${t.data.daily_inventory_id}`},{default:h(()=>[s(a,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),s(a,{onClick:D=>ee(t.data.daily_inventory_id,t.data.site_name,t.data.date),style:{height:"2rem",background:"var(--primary-color)",border:"none"},severity:"success",class:"p-1",icon:"pi pi-download"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},Ke=oe(je,[["__scopeId","data-v-0a0c3b5f"]]);export{Ke as default};
========
import{_ as oe,H as se,l as le,r as u,h as ne,a as y,o as H,c as W,d as s,w as h,b as o,s as ie,t as q,m as re,F as de,I as ce,q as G,p as pe,g as ue}from"./index-1a945cfc.js";import{s as me}from"./siteService-6d9bcdae.js";import{d as L}from"./dailyInventoryService-65200f69.js";import{u as C,w as J}from"./xlsx-4f9172c7.js";import{E as ve,F as Q}from"./FileSaver.min-192d3dee.js";import{m as ye}from"./index-3ec6abaa.js";/* empty css                                                                              */import{f as Y}from"./format-8cf56335.js";import{e as Z}from"./es-f6133d36.js";import"./sass.default-a5b7a582.js";import"./_commonjsHelpers-de833af9.js";const A=E=>(pe("data-v-0a0c3b5f"),E=E(),ue(),E),he={class:"grid"},fe={class:"col-12 px-0 mx-0"},_e={class:"col-12",style:{display:"flex","flex-direction":"column"}},ge=A(()=>o("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),we={class:"col-12",style:{display:"flex","flex-direction":"column"}},xe=A(()=>o("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),be={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},De={class:"col-12",style:{display:"flex","justify-content":"center"}},ke={class:"m-auto",style:{"max-width":"1024px"}},Ce={class:"m-0 col-12 p-3",style:{"align-items":"center"}},Ie={class:"p-0 mb-3",style:{display:"flex",gap:"1rem","align-items":"center","justify-content":"start"}},Se=A(()=>o("span",{class:"text-xl",style:{}},[o("b",null,"Sedes")],-1)),Re={class:"col p-0",style:{display:"flex","justify-content":"start",gap:"1rem","align-items":"center"}},Me=A(()=>o("span",{class:"text-xl"},[o("b",null,"Periodo")],-1)),Ae={class:"col-12 px-3",style:{display:"flex","justify-content":"end",gap:"1rem"}},Ee={class:"text-center p-0 text-white"},$e={class:"mt-3",style:{"min-height":"20vh","flex-direction":"column",display:"flex","justify-content":"center","align-items":"center"}},Pe={class:"grid",style:{"align-items":"center"}},Te=A(()=>o("div",{class:"col-12 md:col-6 p-3"},[o("span",{class:"text-xl",style:{width:"100%"}}," Gestionar reportes de inventario")],-1)),Ue={class:"col-12 md:col-6 p-3"},Fe={style:{"text-transform":"uppercase"}},Ve={style:{display:"flex",gap:"0.5rem"}},Le="America/Bogota",je={__name:"dailyInventoryReports",setup(E){const $=se(),K=le(),j=u([]),P=u([{}]),g=u(!1),T=ye().tz(Le).toDate(),N=u(!1),I=u(0),w=u(T),f=u(T),x=u(T),b=u(T),U=u(),S=u(),X=(d,e)=>{x.value=d,b.value=e},R=d=>{const e=new Date,a=new Date(e);a.setDate(a.getDate()+1);const l=new Date(e);l.setDate(e.getDate()-d),w.value=l,d==1?(f.value=l,b.value=f.value,x.value=w.value,g.value=!1):(f.value=e,x.value=w.value,b.value=f.value,g.value=!1),B()};ne(async()=>{j.value=await me.getSites(),P.value=j.value,B()}),(()=>{S.value={global:{value:null,matchMode:ce.CONTAINS}}})();function F(d){const e=new Date(d),a=e.getFullYear(),l=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${a}-${l}-${n}`}const B=async()=>{const d=P.value.map(l=>l.site_id);K.rawUserData.id;const e=F(x.value),a=F(b.value);U.value=await L.getAllDailyInventoryReportsFiltered(d,e,a)},M=u([]),ee=async(d,e,a)=>{M.value=await L.getDailyInventoryEntriesByDailyInventoryID(d);const l=M.value.map(m=>({Producto:m.item_name,Cantidad:m.quantity,"Unidad de medida":m.unit_measure})),n=C.json_to_sheet(l);n["!cols"]=[{wch:Math.max(30,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const p=C.book_new();C.book_append_sheet(p,n,"Usuarios"),J(p,`Inventario_${e}_${a.split("-").reverse().join("-")} .xlsx`)},te=async()=>{$.setLoading(!0,"generando descargas");const d=U.value,e=[];I.value=0,N.value=!0;for(const i of d){const c=await L.getDailyInventoryEntriesByDailyInventoryID(i.daily_inventory_id);e.push(...c),I.value+=100/d.length}const a={};e.forEach(i=>{const c=i.site_name,r=i.item_name,k=i.quantity,O=i.unit_measure;a[r]||(a[r]={unit_measure:O}),a[r][c]||(a[r][c]=0),a[r][c]+=k});const l=[...new Set(e.map(i=>i.site_name))],n=[],p=Y(x.value,"dd-MMMM-yyyy",{locale:Z}),m=Y(b.value,"dd-MMMM-yyyy",{locale:Z});p==m?n.push([`REPORTE DE INVENTARIO DEL ${p.toUpperCase()}`,...Array(l.length+2).fill("")]):n.push([`REPORTE DE INVENTARIO DEL ${p.toUpperCase()} AL ${m.toUpperCase()}`,...Array(l.length+2).fill("")]);const _=["PRODUCTO","UNIDAD DE MEDIDA",...l,"TOTAL"];n.push(_);for(const[i,c]of Object.entries(a)){const r=[i,c.unit_measure];let k=0;for(const O of l){const z=c[O]||0;r.push(z),k+=z}r.push(k),n.push(r)}const V=new ve.Workbook,v=V.addWorksheet("Inventario por Sede");n.forEach((i,c)=>{const r=v.addRow(i);c===0?(r.height=40,r.font={name:"Arial",bold:!0,size:14},r.alignment={horizontal:"center",vertical:"middle",wrapText:!0},v.mergeCells(`A1:${v.getColumn(l.length+3).letter}1`),v.getRow(1).eachCell(k=>{k.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):c===1&&(r.font={name:"Arial",bold:!0})}),v.columns.forEach((i,c)=>{i.width=c===0?30:c===1?25:15,i.eachCell(r=>{r.font={name:"Arial"},r.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),v.getRow(2).eachCell(i=>{i.font={name:"Arial",bold:!0}}),v.getRow(1).eachCell(i=>{i.font={name:"Arial",bold:!0,size:16}}),v.views=[{showGridLines:!1}];const t=await V.xlsx.writeBuffer(),D=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});p==m?Q.saveAs(D,`Reporte de inventario del ${p}.xlsx`):Q.saveAs(D,`Reporte de inventario del ${p} al ${m} .xlsx`),$.setLoading(!1,"generando descargas"),I.value=0,N.value=!1},ae=async()=>{$.setLoading(!0,"generando descargas");const d=U.value;for(const n of d){const p=await L.getDailyInventoryEntriesByDailyInventoryID(n.daily_inventory_id);M.value.push(...p)}console.log(M.value);const e=M.value.map(n=>({Fecha:n.date.split("-").reverse().join("-"),Sede:n.site_name,Producto:n.item_name,Cantidad:n.quantity,"Unidad de medida":n.unit_measure})),a=C.json_to_sheet(e);a["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const l=C.book_new();C.book_append_sheet(l,a,"Usuarios"),J(l,"Inventario todas las sedes.xlsx"),$.setLoading(!1,"generando descargas")};return(d,e)=>{const a=y("Button"),l=y("Calendar"),n=y("Dialog"),p=y("MultiSelect"),m=y("InputText"),_=y("Column"),V=y("router-link"),v=y("DataTable");return H(),W(de,null,[s(n,{class:"mx-2",visible:g.value,"onUpdate:visible":e[8]||(e[8]=t=>g.value=t),modal:"",header:"Periodo",style:{width:"25rem"}},{default:h(()=>[o("div",he,[o("div",fe,[s(a,{text:"",label:"Hoy",onClick:e[0]||(e[0]=t=>R(0)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Ayer",onClick:e[1]||(e[1]=t=>R(1)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=t=>R(7)),class:"p-button-text col-12 p-1 m-0"}),s(a,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=t=>R(14)),class:"p-button-text col-12 p-1"}),s(a,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=t=>R(28)),class:"p-button-text col-12 p-0"})]),o("div",_e,[ge,s(l,{style:{"min-width":"max-content"},modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=t=>w.value=t)},null,8,["modelValue"])]),o("div",we,[xe,s(l,{style:{"min-width":"max-content"},modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=t=>f.value=t),showWeek:""},null,8,["modelValue"])]),o("div",be,[o("div",De,[s(a,{onClick:e[7]||(e[7]=()=>{X(w.value,f.value),g.value=!1})},{default:h(()=>[G("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),o("div",ke,[o("div",Ce,[o("div",Ie,[Se,s(p,{style:{},display:"chip",multiple:"",modelValue:P.value,"onUpdate:modelValue":e[9]||(e[9]=t=>P.value=t),optionLabel:"site_name",options:j.value.filter(t=>t.site_id!=12&t.site_id!=13),class:"text-sm multi p-0"},null,8,["modelValue","options"])]),o("div",Re,[Me,s(m,{class:"",onClick:e[10]||(e[10]=t=>g.value=!0),style:{height:"2.7rem",width:"16rem"},value:`${F(x.value)}  |  ${F(b.value)}`,placeholder:"periodo"},null,8,["value"]),s(a,{onClick:B,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})])]),o("div",Ae,[s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:ae}),s(a,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:te})])]),N.value?(H(),W("div",{key:0,class:"p-1",style:ie([`width:${I.value}%`,{transition:"1s ease all",position:"fixed",top:"3rem",display:"flex","justify-content":"end","align-items":"center","z-index":"9999",height:"1rem","background-color":"var(--primary-color)"}])},[o("p",Ee,q(Math.round(I.value))+"%",1)],4)):re("",!0),o("div",$e,[s(v,{style:{"max-width":"1024px"},filters:S.value,"onUpdate:filters":e[12]||(e[12]=t=>S.value=t),class:"col-12 m-auto",value:U.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:h(()=>[o("div",Pe,[Te,o("div",Ue,[s(m,{style:{width:"100%"},class:"",modelValue:S.value.global.value,"onUpdate:modelValue":e[11]||(e[11]=t=>S.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:h(()=>[s(_,{class:"py-1",field:"daily_inventory_id",header:"ID"}),s(_,{class:"py-1",field:"employer_name",header:"Responsable"},{body:h(t=>[o("div",Fe,q(t.data.employer_name),1)]),_:1}),s(_,{class:"py-1",field:"site_name",header:"Sede"}),s(_,{class:"py-1",field:"date",header:"Fecha"},{body:h(t=>{var D;return[G(q((D=t.data.date)==null?void 0:D.split("-").reverse().join("-")),1)]}),_:1}),s(_,{style:{},class:"py-1 px-0",field:"date",header:"Action"},{body:h(t=>[o("div",Ve,[s(V,{to:`/daily-inventory/daily-inventory-view/${t.data.daily_inventory_id}`},{default:h(()=>[s(a,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),s(a,{onClick:D=>ee(t.data.daily_inventory_id,t.data.site_name,t.data.date),style:{height:"2rem",background:"var(--primary-color)",border:"none"},severity:"success",class:"p-1",icon:"pi pi-download"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},Ke=oe(je,[["__scopeId","data-v-0a0c3b5f"]]);export{Ke as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/dailyInventoryReports-b4fd1005.js
