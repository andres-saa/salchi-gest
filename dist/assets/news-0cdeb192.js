import{r as b,q as z,a as i,o as r,c as s,g as n,w as l,F as k,s as G,b as a,t,m as v,f as c,d as L,k as C,e as D}from"./index-5fe7872a.js";const S={style:{display:"flex","flex-direction":"column"}},j={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},B={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},H={class:"m-0"},O=a("div",null,null,-1),U={class:"m-0"},Z={key:0},I=a("b",null,"Notas",-1),J=a("br",null,null,-1),$=a("div",{style:{display:"flex",gap:"1rem"}},null,-1),K={class:"grid p-3 my-3",style:{"align-items":"center","justify-content":"space-between",display:"flex",gap:"1rem"}},Q=a("h4",{class:"px-2"},[a("i",{class:"fa-regular fa-bars-progress"}),v(),a("b",null,"Solicitudes de requisición")],-1),W={key:0,style:{"min-width":"max-content"},class:"m-0 p-0"},X={key:2,class:"m-0 p-0"},Y={style:{display:"flex","flex-direction":"column",gap:".1rem"}},oe={__name:"news",setup(ee){const F=b(!1),u=b(null),f=()=>{u.value={global:{value:null,matchMode:G.CONTAINS}}},A=b([]),y=async g=>{F.value=!0,A.value=g};z(()=>{f()});const x=[{columnName:"Id",columnValue:"id",columnType:"other"},{columnName:"Nombre del solicitante",columnValue:"creator_name",columnType:"other"},{columnName:"Fecha de solicitud",columnValue:"created_at_formated",columnType:"max-content"},{columnName:"Area de solicitud",columnValue:"area_name",columnType:"max-content"},{columnName:"Justificacion de la requisicion",columnValue:"requisition_description",columnType:"other"}],R=[{id:1,name:"Pendiente de aprobación",color:"#FFFFFF",backgroundColor:"#FF5733"},{id:2,name:"Aprobado por Gerencia",color:"#FFFFFF",backgroundColor:"#2980B9"},{id:3,name:"Publicada en web",color:"#FFFFFF",backgroundColor:"#8E44AD"},{id:4,name:"Revisión de hojas de vida",color:"#FFFFFF",backgroundColor:"#27AE60"},{id:5,name:"Filtro 1, preliminares",color:"#FFFFFF",backgroundColor:"#D35400"},{id:6,name:"Filtro 2, primera entrevista",color:"#FFFFFF",backgroundColor:"#C0392B"},{id:7,name:"Filtro 3, segunda entrevista",color:"#FFFFFF",backgroundColor:"#16A085"},{id:8,name:"Revisión de Exámenes",color:"#FFFFFF",backgroundColor:"#34495E"},{id:9,name:"Recepción de documentos",color:"#FFFFFF",backgroundColor:"#F39C12"},{id:10,name:"Contratación completada",color:"#FFFFFF",backgroundColor:"#2ECC71"},{id:12,name:"Entregado a Gestión Humana",color:"#FFFFFF",backgroundColor:"#3498DB"},{id:13,name:"Rechazado por gerencia general",color:"#FFFFFF",backgroundColor:"#E74C3C"},{id:14,name:"No requiere aprobación de la gerencia",color:"#FFFFFF",backgroundColor:"#95A5A6"},{id:15,name:"Solicitud registrada",color:"#FFFFFF",backgroundColor:"#7F8C8D"},{id:16,name:"Rechazada por Gestión Humana",color:"#FFFFFF",backgroundColor:"#E74C3C"}],T=[{id:29,area_id:1,requester_id:3001,requisition_lap_id:14,creator_id:3001,creator_name:"JUAN CARLOS PÉREZ",created_at:"2024-10-22T08:00:30",area_name:"Cocina",validation_type_id:2,lap_name:"Entregado a Recursos Humanos",created_at_formated:"22-10-2024 08:00 AM",requisition_description:"Contratación de dos cocineros para cubrir el aumento de pedidos durante el horario de almuerzo.",lap_history:[{time:"22-10-2024 08:15 AM",lap:"Entregado a Recursos Humanos",responsible:"JUAN CARLOS PÉREZ",comment:"Personal adicional necesario para mantener la rapidez en la preparación de pedidos."}],creator_position:"Jefe de Cocina"},{id:30,area_id:2,requester_id:3005,requisition_lap_id:15,creator_id:3005,creator_name:"MARÍA GARCÍA",created_at:"2024-10-22T09:30:20",area_name:"Caja",validation_type_id:1,lap_name:"Aprobado por Gerente General",created_at_formated:"22-10-2024 09:30 AM",requisition_description:"Reemplazo de un cajero por baja médica, para garantizar la agilidad en la atención al cliente.",lap_history:[{time:"22-10-2024 09:45 AM",lap:"Aprobado por Gerente General",responsible:"MARÍA GARCÍA",comment:"Reemplazo necesario para mantener el flujo de clientes en caja."}],creator_position:"Supervisora de Caja"},{id:31,area_id:3,requester_id:3010,requisition_lap_id:14,creator_id:3010,creator_name:"CARLOS RAMÍREZ",created_at:"2024-10-23T10:20:45",area_name:"Autoservicio",validation_type_id:2,lap_name:"Entregado a Recursos Humanos",created_at_formated:"23-10-2024 10:20 AM",requisition_description:"Contratación de dos empleados para manejar la entrega de pedidos en el autoservicio durante el horario nocturno.",lap_history:[{time:"23-10-2024 10:35 AM",lap:"Entregado a Recursos Humanos",responsible:"CARLOS RAMÍREZ",comment:"Necesario para mejorar los tiempos de entrega en el autoservicio."}],creator_position:"Gerente de Turno"},{id:32,area_id:4,requester_id:3020,requisition_lap_id:15,creator_id:3020,creator_name:"LAURA MENDOZA",created_at:"2024-10-23T12:30:10",area_name:"Limpieza",validation_type_id:1,lap_name:"Aprobado por Gerente General",created_at_formated:"23-10-2024 12:30 PM",requisition_description:"Contratación de un empleado de limpieza para cubrir turnos de la tarde y mantener la higiene en el comedor.",lap_history:[{time:"23-10-2024 12:45 PM",lap:"Aprobado por Gerente General",responsible:"LAURA MENDOZA",comment:"Personal necesario para mantener la limpieza durante las horas pico."}],creator_position:"Supervisora de Limpieza"}];return(g,p)=>{const w=i("Timeline"),N=i("Dialog"),P=i("InputText"),V=i("Tag"),q=i("column"),h=i("Button"),E=i("Column"),M=i("DataTable");return r(),s(k,null,[n(N,{class:"mx-2",visible:F.value,"onUpdate:visible":p[0]||(p[0]=e=>F.value=e),modal:"",header:"Historial mi solicitud",style:{width:"30rem"}},{default:l(()=>[n(w,{value:A.value},{opposite:l(e=>{var o,d,m,_;return[a("div",S,[a("p",j,t((o=e.item.time)==null?void 0:o.split(" ")[0]),1),a("p",B,t((_=(m=(d=e.item.time)==null?void 0:d.split(" "))==null?void 0:m.slice(2,3))==null?void 0:_[0]),1)])]}),content:l(e=>[a("p",H,[a("b",null,t(e.item.lap),1)]),O,a("p",U,t(e.item.responsible),1),e.item.notes?(r(),s("p",Z,[I,v(" "+t(e.item.notes),1)])):c("",!0),J,$]),_:1},8,["value"])]),_:1},8,["visible"]),n(M,{paginator:!0,rows:15,style:{width:"100%","max-width":"1280px"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} solicitudes",rowsPerPageOptions:[5,10,25,100],scrollable:"",showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto",value:T,tableStyle:"min-width: 50rem;",filters:u.value},{header:l(()=>[a("div",K,[Q,n(P,{class:"",modelValue:u.value.global.value,"onUpdate:modelValue":p[1]||(p[1]=e=>u.value.global.value=e),placeholder:"Buscar Solicitud..."},null,8,["modelValue"])])]),default:l(()=>[(r(),s(k,null,L(x,e=>n(q,{header:e.columnName,field:e.columnValue,class:"my-0 py-0"},{body:l(o=>{var d,m;return[e.columnType=="date"?(r(),s("h6",W,t((d=o.data[e.columnValue])==null?void 0:d.split("-").reverse().join("-")),1)):c("",!0),e.columnType=="max-content"?(r(),s("h6",{key:1,style:C(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},t(o.data[e.columnValue]),5)):c("",!0),e.columnType=="other"?(r(),s("h6",X,t(o.data[e.columnValue]),1)):c("",!0),e.columnType=="money"?(r(),s("h6",{key:3,style:C(e.columnType=="max-content"?"min-width: max-content":""),class:"m-0 p-0"},t(g.formatoPesosColombianos(o.data[e.columnValue])),5)):c("",!0),e.columnValue=="lap_name"?(r(),D(V,{key:4,class:"p-2",style:C([{color:"white"},`background-color:${(m=R.find(_=>_.id==o.data.requisition_lap_id))==null?void 0:m.backgroundColor}`])},{default:l(()=>[v(t(o.data[e.columnValue]),1)]),_:2},1032,["style"])):c("",!0)]}),_:2},1032,["header","field"])),64)),n(E,{class:"",style:{display:"flex","justify-content":"center"},header:"Actuar"},{body:l(e=>[a("div",Y,[n(h,{style:{"min-width":"max-content"},size:"small",onClick:o=>y(e.data.lap_history),label:"Ver historial",severity:"warning",icon:"pi pi-history p-0",class:"my-0 py-1"},null,8,["onClick"]),n(h,{style:{"min-width":"max-content"},size:"small",onClick:o=>y(e.data.lap_history),label:"Crear vacante",severity:"success",icon:"pi pi-check p-0",class:"my-0 py-1"},null,8,["onClick"]),n(h,{style:{"min-width":"max-content"},size:"small",onClick:o=>y(e.data.lap_history),label:"Rechazar solicitud",severity:"danger",icon:"pi pi-times p-0",class:"my-0 py-1"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters"])],64)}}};export{oe as default};