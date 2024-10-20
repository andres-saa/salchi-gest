import{_ as Q,J as Y,l as X,r as m,i as Z,a as v,o as ee,c as te,g as o,w as h,b as l,F as ae,K as oe,j as N,t as se,p as le,h as ne}from"./index-e7a37f9b.js";import{s as ie}from"./siteService-8f3f7676.js";import{d as R}from"./dailyInventoryService-b4b3d034.js";import{u as D,w as B}from"./xlsx-4f9172c7.js";import{E as re,F as O}from"./FileSaver.min-192d3dee.js";import{f as q}from"./format-8cf56335.js";import{e as z}from"./es-f6133d36.js";import"./sass.default-a5b7a582.js";import"./_commonjsHelpers-de833af9.js";const $=M=>(le("data-v-046a73e3"),M=M(),ne(),M),de={class:"grid"},ce={class:"col-12 px-0 mx-0"},pe={class:"col-12",style:{display:"flex","flex-direction":"column"}},ue=$(()=>l("span",{class:"text-l",style:{"font-weight":"bold"}},"Desde ",-1)),me={class:"col-12",style:{display:"flex","flex-direction":"column"}},ye=$(()=>l("span",{style:{"font-weight":"bold"},class:"text-l"},"Hasta ",-1)),ve={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},he={class:"col-12",style:{display:"flex","justify-content":"center"}},_e={class:"m-auto",style:{"max-width":"1024px"}},fe={class:"grid mx-0 mt-4"},ge={class:"col-12 p-0 mt-4",style:{display:"flex",gap:"1rem","justify-content":"center","align-items":"center"}},we=$(()=>l("span",{class:"text-xl"},[l("b",null,"Periodo")],-1)),xe={class:"col-12 px-3 mt-4",style:{display:"flex","justify-content":"end",gap:"1rem"}},De={class:"mt-3 mx-auto",style:{"min-height":"20vh","max-width":"1024px",display:"flex","justify-content":"center","align-items":"center"}},be={class:"grid",style:{"align-items":"center"}},ke=$(()=>l("div",{class:"col-12 md:col-6 p-3"},[l("span",{class:"text-xl",style:{width:"100%"}}," Mis reportes de inventario")],-1)),Ce={class:"col-12 md:col-6 p-3"},Ie={style:{display:"flex",gap:"0.5rem"}},Re={__name:"dailyInventoryMyReports",setup(M){const S=Y(),U=X(),W=m([]);m([]);const _=m(!1),f=m(new Date(new Date().setDate(new Date().getDate()-7))),y=m(new Date),g=m(new Date(new Date().setDate(new Date().getDate()-7))),w=m(new Date),b=m(),k=m(),H=(r,e)=>{g.value=r,w.value=e},C=r=>{const e=new Date,t=new Date(e);t.setDate(t.getDate()+1);const i=new Date(e);i.setDate(e.getDate()-r),f.value=i,r==1?(y.value=e,w.value=y.value,g.value=f.value,_.value=!1):(y.value=t,g.value=f.value,w.value=y.value,_.value=!1),F()};Z(async()=>{W.value=await ie.getSites();const r=U.rawUserData.id;b.value=await R.getAllMyDailyInventoryReports(r)}),(()=>{k.value={global:{value:null,matchMode:oe.CONTAINS}}})();function A(r){const e=new Date(r),t=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return`${t}-${i}-${s}`}const F=async()=>{const r=U.rawUserData.id,e=A(g.value),t=A(w.value);b.value=await R.getAllMyDailyInventoryReportsFiltered(r,e,t)},I=m([]),J=async(r,e,t)=>{I.value=await R.getDailyInventoryEntriesByDailyInventoryID(r);const i=I.value.map(p=>({Producto:p.item_name,Cantidad:p.quantity,"Unidad de medida":p.unit_measure})),s=D.json_to_sheet(i);s["!cols"]=[{wch:Math.max(20,8)},{wch:Math.max(0,8)},{wch:Math.max(0,16)}];const c=D.book_new();D.book_append_sheet(c,s,"Usuarios"),B(c,`Inventario_${e}_${t.split("-").reverse().join("-")} .xlsx`)},G=async()=>{S.setLoading(!0,"generando descargas");const r=b.value,e=[];for(const n of r){const u=await R.getDailyInventoryEntriesByDailyInventoryID(n.daily_inventory_id);e.push(...u)}const t={};e.forEach(n=>{const u=n.site_name,d=n.item_name,x=n.quantity,T=n.unit_measure;t[d]||(t[d]={unit_measure:T}),t[d][u]||(t[d][u]=0),t[d][u]+=x});const i=[...new Set(e.map(n=>n.site_name))],s=[],c=q(g.value,"dd-MMMM-yyyy",{locale:z}),p=q(w.value,"dd-MMMM-yyyy",{locale:z});c==p?s.push([`REPORTE DE INVENTARIO DEL ${c.toUpperCase()}`,...Array(i.length+2).fill("")]):s.push([`REPORTE DE INVENTARIO DEL ${c.toUpperCase()} AL ${p.toUpperCase()}`,...Array(i.length+2).fill("")]);const P=["PRODUCTO","UNIDAD DE MEDIDA",...i,"TOTAL"];s.push(P);for(const[n,u]of Object.entries(t)){const d=[n,u.unit_measure];let x=0;for(const T of i){const j=u[T]||0;d.push(j),x+=j}d.push(x),s.push(d)}const E=new re.Workbook,a=E.addWorksheet("Inventario por Sede");s.forEach((n,u)=>{const d=a.addRow(n);u===0?(d.height=40,d.font={name:"Arial",bold:!0,size:14},d.alignment={horizontal:"center",vertical:"middle",wrapText:!0},a.mergeCells(`A1:${a.getColumn(i.length+3).letter}1`),a.getRow(1).eachCell(x=>{x.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFFF00"}}})):u===1&&(d.font={name:"Arial",bold:!0})}),a.columns.forEach((n,u)=>{n.width=u===0?30:u===1?25:15,n.eachCell(d=>{d.font={name:"Arial"},d.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}})}),a.getRow(2).eachCell(n=>{n.font={name:"Arial",bold:!0}}),a.getRow(1).eachCell(n=>{n.font={name:"Arial",bold:!0,size:16}}),a.views=[{showGridLines:!1}];const L=await E.xlsx.writeBuffer(),V=new Blob([L],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});c==p?O.saveAs(V,`Reporte de inventario del ${c}.xlsx`):O.saveAs(V,`Reporte de inventario del ${c} al ${p} .xlsx`),S.setLoading(!1,"generando descargas")},K=async()=>{S.setLoading(!0,"generando descargas");const r=b.value;for(const s of r){const c=await R.getDailyInventoryEntriesByDailyInventoryID(s.daily_inventory_id);I.value.push(...c)}console.log(I.value);const e=I.value.map(s=>({Fecha:s.date.split("-").reverse().join("-"),Sede:s.site_name,Producto:s.item_name,Cantidad:s.quantity,"Unidad de medida":s.unit_measure})),t=D.json_to_sheet(e);t["!cols"]=[{wch:Math.max(0,16)},{wch:Math.max(0,16)},{wch:Math.max(30,8)},{wch:Math.max(0,8)}];const i=D.book_new();D.book_append_sheet(i,t,"Usuarios"),B(i,"Inventario todas las sedes.xlsx"),S.setLoading(!1,"generando descargas")};return(r,e)=>{const t=v("Button"),i=v("Calendar"),s=v("Dialog"),c=v("InputText"),p=v("Column"),P=v("router-link"),E=v("DataTable");return ee(),te(ae,null,[o(s,{class:"mx-2",visible:_.value,"onUpdate:visible":e[8]||(e[8]=a=>_.value=a),modal:"",header:"Periodo",style:{width:"25rem"}},{default:h(()=>[l("div",de,[l("div",ce,[o(t,{text:"",label:"Hoy",onClick:e[0]||(e[0]=a=>C(0)),class:"p-button-text col-12 p-1 m-0"}),o(t,{text:"",label:"Ayer",onClick:e[1]||(e[1]=a=>C(1)),class:"p-button-text col-12 p-1 m-0"}),o(t,{text:"",label:"Últimos 7 días",onClick:e[2]||(e[2]=a=>C(7)),class:"p-button-text col-12 p-1 m-0"}),o(t,{text:"",label:"Últimos 14 días",onClick:e[3]||(e[3]=a=>C(14)),class:"p-button-text col-12 p-1"}),o(t,{text:"",label:"Últimos 28 días",onClick:e[4]||(e[4]=a=>C(28)),class:"p-button-text col-12 p-0"})]),l("div",pe,[ue,o(i,{style:{"min-width":"max-content"},modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=a=>f.value=a)},null,8,["modelValue"])]),l("div",me,[ye,o(i,{style:{"min-width":"max-content"},modelValue:y.value,"onUpdate:modelValue":e[6]||(e[6]=a=>y.value=a),showWeek:""},null,8,["modelValue"])]),l("div",ve,[l("div",he,[o(t,{onClick:e[7]||(e[7]=()=>{H(f.value,y.value),_.value=!1})},{default:h(()=>[N("Aplicar")]),_:1})])])])]),_:1},8,["visible"]),l("div",_e,[l("div",fe,[l("div",ge,[we,o(c,{class:"",onClick:e[9]||(e[9]=a=>_.value=!0),style:{height:"2.7rem",width:"16rem"},value:`${A(g.value)}  |  ${A(w.value)}`,placeholder:"periodo"},null,8,["value"]),o(t,{onClick:F,icon:"pi pi-search",severity:"help",class:"text-center p-0 col-12 md:p-0",style:{height:"2.5rem",width:"min-content","aspect-ratio":"1 / 1","font-weight":"bold","border-radius":"50%",display:"flex","justify-content":"center"}})]),l("div",xe,[o(t,{severity:"help",icon:"pi pi-download",label:"Descargar Todo",onClick:K}),o(t,{severity:"help",icon:"pi pi-download",label:"Descargar Informe",onClick:G})])])]),l("div",De,[o(E,{stripedRows:"",style:{"max-width":"1024px"},filters:k.value,"onUpdate:filters":e[11]||(e[11]=a=>k.value=a),class:"col-12 m-auto",value:b.value,tableStyle:"min-width: 50rem;",paginator:!0,rows:15,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} reportes"},{header:h(()=>[l("div",be,[ke,l("div",Ce,[o(c,{style:{width:"100%"},class:"",modelValue:k.value.global.value,"onUpdate:modelValue":e[10]||(e[10]=a=>k.value.global.value=a),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:h(()=>[o(p,{class:"py-1",field:"daily_inventory_id",header:"ID"}),o(p,{class:"py-1",field:"employer_name",header:"Responsable"}),o(p,{class:"py-1",field:"site_name",header:"Sede"}),o(p,{class:"py-1",field:"date",header:"Fecha"},{body:h(a=>[N(se(a.data.date.split("-").reverse().join("-")),1)]),_:1}),o(p,{style:{"max-width":"5rem"},class:"py-1 px-0 m-0",field:"date",header:"Action"},{body:h(a=>[l("div",Ie,[o(P,{to:`/daily-inventory/daily-inventory-view/${a.data.daily_inventory_id}`},{default:h(()=>[o(t,{style:{height:"2rem"},severity:"help",class:"p-1",icon:"pi pi-eye"})]),_:2},1032,["to"]),o(t,{onClick:L=>J(a.data.daily_inventory_id,a.data.site_name,a.data.date),style:{height:"2rem",color:"white",background:"var(--primary-color)",border:"none"},class:"p-1",icon:"pi pi-download"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}},Ve=Q(Re,[["__scopeId","data-v-046a73e3"]]);export{Ve as default};
