import{A as k}from"./auditService-9b04ba51.js";import{x as M,f as d,h as z,r as y,o as i,c as n,a as l,d as s,w as r,F as f,k as E,t as m,b,U as A}from"./index-13dbe25d.js";const J={class:"m-0 p-0 md:p-4"},K=l("p",null,"¿Estás seguro de que quieres eliminar este checklist?",-1),W={class:"flex justify-content-end"},Q={class:"flex flex-wrap align-items-center justify-content-between gap-2"},X=l("span",{class:"text-xl text-900 font-bold"},"Checklists",-1),Y={style:{"text-transform":"uppercase"}},Z={style:{"text-transform":"uppercase"},class:"py-0 my-0"},ee=l("i",{class:"fa-solid fa-eye text-2xl"},null,-1),te={style:{"text-transform":"uppercase"}},se={class:"py-0 mt-4",style:{"text-transform":"uppercase","font-weight":"bold"}},le={class:"my-0 py-0"},oe={class:"my-0 py-0"},ae={class:"",style:{}},ie={class:"my-0 py-0"},ne={class:"field"},re=l("label",{for:"checklistName"},"Nombre del Checklist",-1),ce={class:"field my-5"},de={class:"input-group",style:{display:"flex","align-items":"center","justify-content":"space-between"}},ue={class:"input-group my-2 col-12 p-0",style:{display:"flex",gap:"1rem","align-items":"center","justify-content":"space-between"}},pe={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},me={class:"grid gap-2 my-4"},he={class:"col-12 py-0"},ve={class:"col-12 py-0"},_e={class:"col-12 py-0"},ke={__name:"checklist",setup(ye){const w=M(),x=d(!1),N=d();d({}),d({});const T=d({}),C=d([{}]),$=o=>{x.value=!0,k.getChecklistWithItems(o).then(a=>T.value=a)},_=d(!1),V=d(null),S=o=>{V.value=o,_.value=!0},U=async()=>{const o=`${A}/checklist/${V.value}`,a={method:"DELETE"};try{const t=await fetch(o,a);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);console.log("Checklist eliminado con éxito"),_.value=!1,k.getChecklist().then(p=>{C.value=Array.isArray(p)?p:[]})}catch(t){console.error("Error al eliminar el checklist:",t),_.value=!1,alert("Error al eliminar el checklist, ya esta siendo utilizado en una auditoria")}};z(()=>{k.getAudits().then(o=>N.value=o),k.getChecklist().then(o=>{C.value=Array.isArray(o)?o:[]})});const g=d(!1),u=d({name:"",groups:[]}),j=()=>{g.value=!0},I=()=>{u.value.groups.push({name:"",items:[]})},R=o=>{o.items.push({description:"",group_id:0})},B=o=>{u.value.groups.splice(o,1)},G=(o,a)=>{o.items.splice(a,1)},O=async()=>{if(!u.value.name.trim()){alert("El nombre del checklist no puede estar vacío.");return}if(u.value.groups.length===0){alert("Debe haber al menos un grupo.");return}for(const t of u.value.groups){if(!t.name.trim()){alert("Todos los grupos deben tener un nombre.");return}if(t.items.length===0){alert("Todos los grupos deben tener al menos un ítem.");return}}const o=`${A}/checklists-with-groups-and-items`,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)};try{w.setLoading(!0,"guardando");const t=await fetch(o,a);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const p=await t.json();console.log("Checklist guardado con éxito:",p),g.value=!1,k.getChecklist().then(h=>{C.value=Array.isArray(h)?h:[],w.setLoading(!1,"guardando")})}catch(t){console.error("Error al guardar el checklist:",t),w.setLoading(!1,"guardando")}},q=()=>{g.value=!1};return(o,a)=>{const t=y("Button"),p=y("Dialog"),h=y("Column"),F=y("DataTable"),D=y("InputText"),H=y("Divider");return i(),n(f,null,[l("div",J,[s(p,{visible:_.value,"onUpdate:visible":a[1]||(a[1]=e=>_.value=e),header:"Confirmar eliminación",style:{width:"30rem"},modal:!0},{default:r(()=>[K,l("div",W,[s(t,{label:"No",onClick:a[0]||(a[0]=e=>_.value=!1),class:"p-button-text"}),s(t,{label:"Sí",onClick:U,class:"p-button-danger"})])]),_:1},8,["visible"]),s(F,{value:C.value,tableStyle:"min-width: 50rem",class:"p-0",dataKey:"id",paginator:!0,rows:10,filters:o.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} to {last} de {totalRecords} listas",responsiveLayout:"scroll",scrollable:""},{header:r(()=>[l("div",Q,[X,s(t,{icon:"pi pi-plus",rounded:"",raised:"",onClick:j})])]),default:r(()=>[s(h,{header:"Id"},{body:r(e=>[E(m(e.data.checklist_id),1)]),_:1}),s(h,{header:"Nombre del checklist"},{body:r(e=>[l("p",Y,m(e.data.checklist_name),1)]),_:1}),s(h,{header:"Grupos de Items",class:""},{body:r(e=>[(i(!0),n(f,null,b(e.data.groups,(c,v)=>(i(),n("p",Z,m(c.group_name)+" "+m(""),1))),256))]),_:1}),s(h,{class:"p-0 m-0",field:"inventoryStatus",header:"Acciones",style:{"min-width":"9rem"}},{body:r(e=>[s(t,{onClick:c=>$(e.data.checklist_id),text:"",severity:"help"},{default:r(()=>[ee]),_:2},1032,["onClick"]),s(t,{onClick:c=>S(e.data.checklist_id),text:"",rounded:"",icon:"fa-solid fa-trash text-2xl",class:"p-button-danger"},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"])]),s(p,{visible:x.value,"onUpdate:visible":a[2]||(a[2]=e=>x.value=e),modal:"",header:"DETALLES",style:{width:"30rem"}},{default:r(()=>[l("h5",null,[l("b",te,m(T.value.checklist_name),1)]),(i(!0),n(f,null,b(T.value.groups,e=>(i(),n("div",null,[l("h6",se,m(e.group_name),1),(i(!0),n(f,null,b(e.items,c=>(i(),n("div",le,[l("ul",oe,[l("li",ae,[l("h6",ie,m(c.item_description),1)])])]))),256))]))),256))]),_:1},8,["visible"]),s(p,{visible:g.value,"onUpdate:visible":a[4]||(a[4]=e=>g.value=e),header:"Crear Checklist",modal:!0},{default:r(()=>[l("div",ne,[re,s(D,{style:{"font-weight":"bold","text-transform":"uppercase"},class:"col-12",id:"checklistName",modelValue:u.value.name,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value.name=e)},null,8,["modelValue"])]),(i(!0),n(f,null,b(u.value.groups,(e,c)=>(i(),n("div",{class:"ml-5",key:c},[l("div",ce,[l("div",de,[s(D,{style:{"font-weight":"bold","text-transform":"uppercase"},placeholder:"nombre del grupo",class:"col-10",id:"groupName"+c,modelValue:e.name,"onUpdate:modelValue":v=>e.name=v},null,8,["id","modelValue","onUpdate:modelValue"]),s(t,{severity:"danger",style:{width:"3rem",height:"3rem","border-radius":"5rem","aspect-ratio":"1 / 1"},class:"input-group-button",icon:"pi pi-times",onClick:v=>B(c)},null,8,["onClick"])])]),s(H,null,{default:r(()=>[E(" Items de "+m(e.name),1)]),_:2},1024),(i(!0),n(f,null,b(e.items,(v,L)=>(i(),n("div",{key:L},[l("div",ue,[s(D,{style:{width:"100%"},placeholder:"descripcion",class:"",id:"groupName"+c,modelValue:v.description,"onUpdate:modelValue":P=>v.description=P},null,8,["id","modelValue","onUpdate:modelValue"]),s(t,{severity:"danger",style:{"min-width":"3rem",height:"3rem","border-radius":"50%","aspect-ratio":"1 / 1"},class:"input-group-button",icon:"pi pi-times",onClick:P=>G(e,L)},null,8,["onClick"])])]))),128)),l("div",pe,[s(t,{style:{height:"3rem",width:"3rem","border-radius":"50%"},icon:"pi pi-plus ",severity:"info",onClick:v=>R(e)},null,8,["onClick"])])]))),128)),l("div",me,[l("div",he,[s(t,{severity:"help",class:"col-12",label:"Añadir Grupo",onClick:I})]),l("div",ve,[s(t,{severity:"success",class:"col-12",label:"Guardar",onClick:O})]),l("div",_e,[s(t,{severity:"danger",class:"col-12",label:"Cancelar",onClick:q})])])]),_:1},8,["visible"])],64)}}};export{ke as default};
