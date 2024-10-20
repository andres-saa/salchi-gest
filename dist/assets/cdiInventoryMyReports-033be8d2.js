import{_ as Q,J as Y,l as X,r as m,i as Z,a as y,o as ee,c as te,g as a,w as h,b as n,F as oe,K as ae,j as N,t as se,p as ne,h as le}from"./index-e7a37f9b.js";import{s as ie}from"./siteService-8f3f7676.js";import{c as R}from"./cdiInventoryService-1eb6c0fe.js";import{u as D,w as B}from"./xlsx-4f9172c7.js";import{E as re,F as O}from"./FileSaver.min-192d3dee.js";import{f as q}from"./format-8cf56335.js";import{e as z}from"./es-f6133d36.js";import"./sass.default-a5b7a582.js";import"./_commonjsHelpers-de833af9.js";const $=M=>(ne("data-v-2add1d26"),M=M(),le(),M),de={class:"grid"},ce={class:"col-12 px-0 mx-0"},pe={class:"col-12",style:{display:"flex","flex-direction":"column"}},ue=$(()=>n("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),me={class:"col-12",style:{display:"flex","flex-direction":"column"}},ve=$(()=>n("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),ye={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},he={class:"col-12",style:{display:"flex","justify-content":"center"}},_e={class:"m-auto",style:{"max-width":"1024px"}},fe={class:"grid mx-0 mt-4"},ge={class:"col-12 p-0 mt-4",style:{display:"flex",gap:"1rem","justify-content":"center","align-items":"center"}},we=$(()=>n("span",{class:"text-xl"},[n("b",null,"Periodo")],-1)),xe={class:"col-12 px-3 mt-4",style:{display:"flex","justify-content":"end",gap:"1rem"}},De={class:"mt-3 mx-auto",style:{"min-height":"20vh","max-width":"1024px",display:"flex","justify-content":"center","align-items":"center"}},be={class:"grid",style:{"align-items":"center"}},Ce=$(()=>n("div",{class:"col-12 md:col-6 p-3"},[n("span",{class:"text-xl",style:{width:"100%"}}," Mis reportes de inventario")],-1)),ke={class:"col-12 md:col-6 p-3"},Ie={style:{display:"flex",gap:"0.5rem"}},Re={__name:"cdiInventoryMyReports",setup(M){const S=Y(),U=X(),W=m([]);m([]);const _=m(!1),f=m(new Date(new Date().setDate(new Date().getDate()-7))),v=m(new Date),g=m(new Date(new Date().setDate(new Date().getDate()-7))),w=m(new Date),b=m(),C=m(),H=(r,e)=>{g.value=r,w.value=e},k=r=>{const e=new Date,t=new Date(e);t.setDate(t.getDate()+1);const i=new Date(e);i.setDate(e.getDate()-r),f.value=i,r==1?(v.value=e,w.value=v.value,g.value=f.value,_.value=!1):(v.value=t,g.value=f.value,w.value=v.value,_.value=!1),F()};Z(async()=>{W.value=await ie.getSites();const r=U.rawUserData.id;b.value=await R.getAllMyCdiInventoryReports(r)}),(()=>{C.value={global:{value:null,matchMode:ae.CONTAINS}}})();function A(r){const e=new Date(r),t=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return`${t}-${i}-${s}`}const F=async()=>{const r=U.rawUserData.id,e=A(g.value),t=A(w.value);b.value=await R.getAllMyCdiInventoryReportsFiltered(r,e,t)},I=m([]),J=async(r,e,t)=>{I.value=await R.getCdiInventoryEntriesByCdiInventoryID(r);const i=I.value.map(p=>({Producto:p.item_name,Cantidad:p.quantity,"Unidad de medida":p.unit_measure})),s=D.json_to_sheet(i);s["!cols"]=[{wch:Math.max(20,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const c=D.book_new();D.book_append_sheet(c,s,"Usuarios"),B(c,`Inventario_${e}_${t.split("-").reverse().join("-")} .xlsx`)},G=async()=>{S.setLoading(!0,"generando descargas");const r=b.value,e=[];for(const l of r){const u=await R.getCdiInventoryEntriesByCdiInventoryID(l.cdi_inventory_id);e.push(...u)}const t={};e.forEach(l=>{const u=l.site_name,d=l.item_name,x=l.quantity,T=l.unit_measure;t[d]||(t[d]={unit_measure:T}),t[d][u]||(t[d][u]=0),t[d][u]+=x});const i=[...new Set(e.map(l=>l.site_name))],s=[],c=q(g.value,"dd-MMMM-yyyy",{locale:z}),p=q(w.value,"dd-MMMM-yyyy",{locale:z});c==p?s.push([`REPORTE DE INVENTARIO DEL ${c.toUpperCase()}`,...Array(i.length+2).fill("")]):s.push([`REPORTE DE INVENTARIO DEL ${c.toUpperCase()} AL ${p.toUpperCase()}`,...Array(i.length+2).fill("")]);const P=["PRODUCTO","UNIDAD DE MEDIDA",...i,"TOTAL"];s.push(P);for(const[l,u]of Object.entries(t)){const d=[l,u.unit_measure];let x=0;for(const T of i){const j=u[T]||0;d.push(j),x+=j}d.push(x),s.push(d)}const E=new re.Workbook,o=E.addWorksheet("Inventario por Sede");s.forEach((l,u)=>{const d=o.addRow(l);u===0?(d.height=40,d.font={name:"Arial",bold:!0,size:14},d.alignment={horizontal:"center",vertical:"middle",wrapText:!0},o.mergeCells(`A1:${o.getColumn(i.length+3).letter}1`),o.getRow(1).eachCell(x=>{x.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):u===1&&(d.font={name:"Arial",bold:!0})}),o.columns.forEach((l,u)=>{l.width=u===0?30:u===1?25:15,l.eachCell(d=>{d.font={name:"Arial"},d.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),o.getRow(2).eachCell(l=>{l.font={name:"Arial",bold:!0}}),o.getRow(1).eachCell(l=>{l.font={name:"Arial",bold:!0,size:16}}),o.views=[{showGridLines:!1}];const L=await E.xlsx.writeBuffer(),V=new Blob([L],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});c==p?O.saveAs(V,`Reporte de inventario del ${c}.xlsx`):O.saveAs(V,`Reporte de inventario del ${c} al ${p} .xlsx`),S.setLoading(!1,"generando descargas")},K=async()=>{S.setLoading(!0,"generando descargas");const r=b.value;for(const s of r){const c=await R.getCdiInventoryEntriesByCdiInventoryID(s.cdi_inventory_id);I.value.push(...c)}console.log(I.value);const e=I.value.map(s=>({Fecha:s.date.split("-").reverse().join("-"),Sede:s.site_name,Producto:s.item_name,Cantidad:s.quantity,"Unidad de medida":s.unit_measure})),t=D.json_to_sheet(e);t["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const i=D.book_new();D.book_append_sheet(i,t,"Usuarios"),B(i,"Inventario todas las sedes.xlsx"),S.setLoading(!1,"generando descargas")};return(r,e)=>{const t=y("Button"),i=y("Calendar"),s=y("Dialog"),c=y("InputText"),p=y("Column"),P=y("router-link"),E=y("DataTable");return ee(),te(oe,null,[a(s,{class:"mx-2",visible:_.value,"onUpdate:visible":e[8]||(e[8]=o=>_.value=o),modal:"",header:"Periodo",style:{width:"25rem"}},{default:h(()=>[n("div",de,[n("div",ce,[a(t,{text:"",label:"Hoy",onClick:e[0]||(e[0]=o=>k(0)),class:"p-button-text col-12 p-1 m-0"}),a(t,{text:"",label:"Ayer",onClick:e[1]||(e[1]=o=>k(1)),class:"p-button-text col-12 p-1 m-0"}),a(t,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=o=>k(7)),class:"p-button-text col-12 p-1 m-0"}),a(t,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=o=>k(14)),class:"p-button-text col-12 p-1"}),a(t,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=o=>k(28)),class:"p-button-text col-12 p-0"})]),n("div",pe,[ue,a(i,{style:{"min-width":"max-content"},modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=o=>f.value=o)},null,8,["modelValue"])]),n("div",me,[ve,a(i,{style:{"min-width":"max-content"},modelValue:v.value,"onUpdate:modelValue":e[6]||(e[6]=o=>v.value=o),showWeek:""},null,8,["modelValue"])]),n("div",ye,[n("div",he,[a(t,{onClick:e[7]||(e[7]=()=>{H(f.value,v.value),_.value=!1})},{default:h(()=>[N("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),n("div",_e,[n("div",fe,[n("div",ge,[we,a(c,{class:"",onClick:e[9]||(e[9]=o=>_.value=!0),style:{height:"2.7rem",width:"16rem"},value:`${A(g.value)}  |  ${A(w.value)}`,placeholder:"periodo"},null,8,["value"]),a(t,{onClick:F,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})]),n("div",xe,[a(t,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:K}),a(t,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:G})])])]),n("div",De,[a(E,{stripedRows:"",style:{"max-width":"1024px"},filters:C.value,"onUpdate:filters":e[11]||(e[11]=o=>C.value=o),class:"col-12 m-auto",value:b.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:h(()=>[n("div",be,[Ce,n("div",ke,[a(c,{style:{width:"100%"},class:"",modelValue:C.value.global.value,"onUpdate:modelValue":e[10]||(e[10]=o=>C.value.global.value=o),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:h(()=>[a(p,{class:"py-1",field:"cdi_inventory_id",header:"ID"}),a(p,{class:"py-1",field:"employer_name",header:"Responsable"}),a(p,{class:"py-1",field:"site_name",header:"Sede"}),a(p,{class:"py-1",field:"date",header:"Fecha"},{body:h(o=>[N(se(o.data.date.split("-").reverse().join("-")),1)]),_:1}),a(p,{style:{"max-width":"5rem"},class:"py-1 px-0 m-0",field:"date",header:"Action"},{body:h(o=>[n("div",Ie,[a(P,{to:`/cdi-inventory/cdi-inventory-view/${o.data.cdi_inventory_id}`},{default:h(()=>[a(t,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),a(t,{onClick:L=>J(o.data.cdi_inventory_id,o.data.site_name,o.data.date),style:{height:"2rem",color:"white",background:"var(--primary-color)",border:"none"},class:"p-1",icon:"pi pi-download"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},Ve=Q(Re,[["__scopeId","data-v-2add1d26"]]);export{Ve as default};
