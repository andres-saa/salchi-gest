import{_ as A,z as O,h as G,r as d,l as o,o as _,c as v,a as e,d as l,F as L,b as U,U as N,t as g,v as H,n as oe,p as J,e as q,S as ae,f as i,u as le,g as $,T as ne,w as f,q as I,V as z,P as F,k as E,W as ie}from"./index-ca9851e9.js";const M=u=>(J("data-v-7786c266"),u=u(),q(),u),re={class:""},ce={class:"flex align-items-center justify-content-between mb-4"},de=M(()=>e("h5",null,"Notificaciones",-1)),ue=M(()=>e("span",{class:"block text-600 font-medium mb-3"},"Sedes en linea",-1)),pe={style:{height:"100%","overflow-y":"auto"},class:"p-0 mx-0 mt-0 mb-4 list-none"},me={style:{display:"flex","align-items":"center","justify-content":"space-between"},class:"flex align-items-center py-2 border-bottom-1 surface-border"},fe={style:{display:"flex","align-items":"center"},class:"p-0"},_e={class:"w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"},ve=["src"],ye={class:"text-900 line-height-3"},be=M(()=>e("span",{class:"block text-600 font-medium mb-3"},"Sedes desconectadas",-1)),he={style:{height:"100% overflow-y: auto"},class:"p-0 mx-0 mt-0 mb-4 list-none"},ge={style:{display:"flex","align-items":"center","justify-content":"space-between"},class:"flex align-items-center py-2 border-bottom-1 surface-border"},xe={style:{display:"flex","align-items":"center"},class:"p-0"},we={class:"w-2rem h-2rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"},De=["src"],$e={class:"text-900 line-height-3"},Se={__name:"RepNotificaciones",setup(u){const s=O();return G(()=>{s.startSitesStatusUpdate()}),(S,k)=>{const x=d("Button"),j=d("Menu");return o(s).visibleNotifications?(_(),v("div",{key:0,class:"card col-12 xl:col-3 mt-3 m-0 notificaciones",style:H(o(s).visibleNotifications?"transform:scaleX(100%)":"transform:scaleX(100%);")},[e("div",re,[e("div",ce,[de,e("div",null,[l(x,{icon:"pi pi-ellipsis-v",class:"p-button-text p-button-plain p-button-rounded",onClick:k[0]||(k[0]=c=>S.$refs.menu1.toggle(c))}),l(j,{ref:"menu1",popup:!0,model:S.items},null,8,["model"])])]),ue,e("ul",pe,[(_(!0),v(L,null,U(o(s).sitesStatus.filter(c=>c.online_status),c=>(_(),v("li",me,[e("div",fe,[e("div",_e,[e("img",{style:{width:"100%","border-radius":"0.5rem","object-fit":"cover","aspect-ratio":"1 / 1"},src:`${o(N)}/read-product-image/96/site-${c.id}`,alt:""},null,8,ve)]),e("span",ye,g(c.site_name),1)]),l(x,{style:{width:"0.5rem","aspect-ratio":"1 / 1"},rounded:"",class:"p-0 mr-3 indicador",severity:"success"})]))),256))]),be,e("ul",he,[(_(!0),v(L,null,U(o(s).sitesStatus.filter(c=>!c.online_status),c=>(_(),v("li",ge,[e("div",xe,[e("div",we,[e("img",{style:{width:"100%","border-radius":"0.5rem","object-fit":"cover","aspect-ratio":"1 / 1"},src:`${o(N)}/read-product-image/96/site-${c.id}`,alt:""},null,8,De)]),e("span",$e,g(c.site_name),1)]),l(x,{style:{width:"0.5rem","aspect-ratio":"1 / 1"},rounded:"",class:"p-0 mr-3 indicador",severity:"danger"})]))),256))])])],4)):oe("",!0)}}},ke=A(Se,[["__scopeId","data-v-7786c266"]]);const W=u=>(J("data-v-bd50b6ff"),u=u(),q(),u),Re={class:"col-12 p-0 m-0",style:{position:"relative","max-width":"1366px"},cls:""},Ve={class:"col-12 px-3 py-0 mb-3",style:{"overflow-x":"auto",filter:"drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.138))"}},Ce={class:"px-0 mx-0",style:{width:"max-content","background-color":"rgba(250, 250, 250, 0)",display:"flex",color:"","justify-content":"start","align-items":"center",gap:"2rem"}},Ne={class:"contenedor mt-5",style:{position:"sticky",top:"0.8rem","z-index":"99"}},je=W(()=>e("span",{class:"text-3xl mt-8 ml-3",style:{"font-weight":"bold"}},"Vision General",-1)),Te={class:"col-12 px-3 py-0 my-3 p-2",style:{"overflow-x":"auto","background-color":"#fafafa"}},Ie={class:"px-0 mx-0",style:{width:"max-content","background-color":"#fafafa",display:"flex",color:"","justify-content":"start",gap:"2rem","min-width":"max-content"}},Ee={class:"p-0",style:{display:"flex","align-items":"center","background-color":"rgba(245, 222, 179, 0)"}},Le=W(()=>e("div",{class:"app",style:{position:""}},null,-1)),Ue={class:"grid p-0 m-0"},Me={class:"grid"},Be={class:"col-12 px-0 mx-0"},Pe={class:"col-12",style:{display:"flex","flex-direction":"column"}},ze={class:"text-l",style:{"font-weight":"bold"}},Fe={class:"col-12",style:{display:"flex","flex-direction":"column"}},Ae={style:{"font-weight":"bold"},class:"text-l"},Oe={class:"col-12 p-0",style:{display:"flex","justify-content":"center"}},Ge={class:"col-12",style:{display:"flex","justify-content":"center"}},He={__name:"reporteVentas",setup(u){const s=O(),{isDarkTheme:S}=ae(),k=i(["enviada","cancelada","en preparacion"]),x=i("enviada"),j=le(),c=i([]),X=i([]),w=i(!1),R=i(new Date(new Date().setDate(new Date().getDate()-7))),V=i(new Date),b=i(new Date),y=i(new Date);i("");function T(a){const t=new Date,p=new Date(t);p.setDate(p.getDate()+1);const m=new Date(t);m.setDate(t.getDate()-a),b.value=m,y.value=p,s.setDateRange(b.value,y.value),w.value=!1,s.fetchSalesReport()}G(()=>{K().then(a=>{c.value=a}),s.fetchSalesReport()});const Y=async()=>{const a=h(R.value),t=h(V.value),p=X.value.map(r=>r.site_id).join(","),m=new URLSearchParams({site_ids:p,status:x.value,start_date:a,end_date:t}),D=`${N}/sales_report?${m.toString()}`;try{const r=await fetch(D,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const C=await r.json();ie.value=C,console.log(C)}catch(r){console.error("Fetch error:",r)}};$([R,V],()=>{Y()},{deep:!0}),$(()=>s.order_status,(a,t)=>{console.log(`El estado de orden ha cambiado de ${t} a ${a}`),s.fetchSalesReport()}),$(s.selectedSites,a=>{s.setSelectedSites(a)},{deep:!0});const K=async()=>{try{const a=await fetch(`${N}/sites`);if(!a.ok)throw"paila";return await a.json()}catch(a){console.log(a)}},Q=i([{name:"Valor ventas",to:"/reporte-ventas/valor-ventas"},{name:"No. Ordenes",to:"/reporte-ventas/no-ordenes"},{name:"Ticket promedio",to:"/reporte-ventas/ticket"},{name:"Ordenes",to:"/reporte-ventas/ordenes"}]);i(null),ne({labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),i([{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]);const B=i(null),Z=()=>{B.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},ee=()=>{B.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};$(S,a=>{a?ee():Z()},{immediate:!0}),i(`${R.value} - ${V.value}`);function h(a){const t=new Date(a),p=t.getFullYear(),m=(t.getMonth()+1).toString().padStart(2,"0"),D=t.getDate().toString().padStart(2,"0");return`${p}-${m}-${D}`}return i({}),i(),$([b,y],([a,t])=>{a>t&&(alert("La fecha de inicio debe ser anterior o igual a la fecha final."),y.value=a)}),(a,t)=>{const p=d("Dropdown"),m=d("MultiSelect"),D=d("InputText"),r=d("Button"),C=d("RouterLink"),te=d("RouterView"),P=d("Calendar"),se=d("Dialog");return _(),v("div",Re,[e("div",Ve,[e("div",Ce,[l(p,{class:"text-sm",modelValue:o(s).order_status,"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).order_status=n),options:k.value,placeholder:"Estado"},null,8,["modelValue","options"]),l(m,{style:{width:"30rem"},display:"chip",multiple:"",modelValue:o(s).selectedSites,"onUpdate:modelValue":t[1]||(t[1]=n=>o(s).selectedSites=n),optionLabel:"site_name",options:c.value.filter(n=>n.site_id!=12&n.site_id!=13),class:"text-sm",placeholder:"Sedes"},null,8,["modelValue","options"]),l(D,{class:"text-center",onClick:t[2]||(t[2]=n=>w.value=!0),style:{},value:o(s).dateRangeDifference.rangeName||`${h(o(s).dateRange.startDate)}  |  ${h(o(s).dateRange.endDate)}`,placeholder:"periodo"},null,8,["value"]),l(r,{class:"text-center p-2",style:{height:"100%",width:"min-content","aspect-ratio":"1 / 1","border-radius":"50%",display:"flex","justify-content":"center"},onClick:o(s).fetchSalesReport},{default:f(()=>[e("i",{class:I(o(F).SEARCH),style:{padding:"0.2rem"}},null,2)]),_:1},8,["onClick"])])]),e("div",Ne,[je,e("div",Te,[e("div",Ie,[(_(!0),v(L,null,U(Q.value,n=>(_(),v("div",null,[l(C,{to:n.to},{default:f(()=>[l(r,{size:"medium",style:H([o(j).fullPath==n.to?"box-shadow: 0 4px 0 #ff6200;color:#000;font-weight:bold;":"",{"border-radius":"0"}]),class:"text-md px-0 py-2 my-3 mx-0",text:"",severity:"secondary"},{default:f(()=>[E(g(n.name)+" ",1)]),_:2},1032,["style"])]),_:2},1032,["to"])]))),256)),e("div",Ee,[l(r,{size:"medium",class:"text-md px-0 py-0 mx-0 text-l btn-ocultar",text:"",onClick:o(s).toogleVisibleNotifications,severity:o(s).visibleNotifications?"danger":"success",rounded:"",style:{"font-weight":"bold"}},{default:f(()=>[e("span",null,[e("span",null,g(o(s).visibleNotifications?"Ocultar notificaciones":"Mostrar notificaciones"),1),E(),e("i",{class:I(o(F).ANGLE_DOUBLE_RIGHT)},null,2)])]),_:1},8,["onClick","severity"])])])])]),Le,e("div",Ue,[e("div",{class:I(["",o(s).visibleNotifications?"col-9":"col-12"])},[l(z,{name:"fade"},{default:f(()=>[l(te)]),_:1})],2),l(z,{name:"noti"},{default:f(()=>[l(ke)]),_:1})]),l(se,{visible:w.value,"onUpdate:visible":t[9]||(t[9]=n=>w.value=n),modal:"",header:"Periodo",style:{width:"25rem"}},{default:f(()=>[e("div",Me,[e("div",Be,[l(r,{text:"",label:"Últimos 7 días",onClick:t[3]||(t[3]=n=>T(7)),class:"p-button-text col-12 p-1 m-0"}),l(r,{text:"",label:"Últimos 14 días",onClick:t[4]||(t[4]=n=>T(14)),class:"p-button-text col-12 p-1"}),l(r,{text:"",label:"Últimos 28 días",onClick:t[5]||(t[5]=n=>T(28)),class:"p-button-text col-12 p-0"})]),e("div",Pe,[e("span",ze,"Desde - "+g(h(R.value)),1),l(P,{style:{"min-width":"max-content"},modelValue:b.value,"onUpdate:modelValue":t[6]||(t[6]=n=>b.value=n)},null,8,["modelValue"])]),e("div",Fe,[e("span",Ae,"Hasta - "+g(h(V.value)),1),l(P,{style:{"min-width":"max-content"},modelValue:y.value,"onUpdate:modelValue":t[7]||(t[7]=n=>y.value=n),showWeek:""},null,8,["modelValue"])]),e("div",Oe,[e("div",Ge,[l(r,{onClick:t[8]||(t[8]=()=>{o(s).setDateRange(b.value,y.value),w.value=!1,o(s).fetchSalesReport()})},{default:f(()=>[E("Aplicar")]),_:1})])])])]),_:1},8,["visible"])])}}},qe=A(He,[["__scopeId","data-v-bd50b6ff"]]);export{qe as default};
