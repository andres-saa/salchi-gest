import{_ as R,g as d,q as E,D as V,h as F,d as m,o as G,c as O,e as a,f as n,a as o,u as q,s as H,i as c,U as u,m as $,t as b,Q,p as J,k as K}from"./index-eb2a5b3d.js";const p=f=>(J("data-v-f70b941c"),f=f(),K(),f),W={class:"container mx-4"},X={class:"p-0 m-0"},Y={style:{display:"flex","justify-content":"end",width:"100%"}},Z=p(()=>o("h6",null,"Nombre del tipo de contrato",-1)),ee=p(()=>o("h6",null,"Descripcion",-1)),te={style:{display:"flex","justify-content":"end",width:"100%"}},ae=p(()=>o("h6",null,"Nombre del tipo de contrato",-1)),oe=p(()=>o("h6",null,"Descripcion",-1)),le={style:{display:"flex","justify-content":"end",width:"100%"}},se={class:"m-auto",style:{"max-width":"500px"}},ne=p(()=>o("h4",null,[o("b",null,"Configuracion")],-1)),ie=p(()=>o("h6",null,"Anticipacion para considerar un contrato proximo a finalizar (en dias)",-1)),de={class:"mt-6",style:{display:"flex","justify-content":"space-between","align-items":"center"}},re=p(()=>o("h6",{class:"p-0 m-0"}," Tipos de contrato",-1)),ce={class:"p-0 m-0",style:{"text-transform":"uppercase"}},ue={class:"p-0 m-0",style:{"text-transform":"capitalize"}},pe={style:{display:"flex","justify-content":"end",gap:".5rem"}},ve=p(()=>o("div",{class:"my-8",style:{display:"flex",gap:"1rem","justify-content":"end",width:"100%"}},null,-1)),me={__name:"configuracion",setup(f){const h=d({}),v=d({}),r=d({}),s=d({to_delte:!1,to_add:!1,to_update:!1}),P=l=>{h.value=l,s.value.to_delte=!0},D=async l=>{await c.delete(`${u}/delete-contract-type/${l}`,"Eliminando tipo de contrato"),s.value.to_delte=!1,await _()},N=l=>{r.value={...l},s.value.to_update=!0},U=async()=>{const l={name:v.value.name,description:v.value.description};await c.post(`${u}/insert-contract-type/`,l,"Creando nuevo tipo de contrato"),s.value.to_add=!1,await _()},z=l=>{s.value.to_add=!0},I=d([]),x=d([]),y=d(0),T=d(null),j=()=>{T.value={global:{value:null,matchMode:H.CONTAINS}}};E(()=>{j()});const A=d([{id:1}]),_=async()=>{const l=await c.get(`${u}/get-days-to-alert`);y.value=l.days,A.value=await c.get(`${u}/get-all-vigent-contracts`,"cargando contratos"),I.value=await c.get(`${u}/employers-basic`),x.value=await c.get(`${u}/get-all-contract-types`)},S=async()=>{const l=r.value.id,e={name:r.value.name,description:r.value.description};await c.put(`${u}/update-contract-type/${l}`,e,"Actualizando Tipo de contrato"),s.value.to_update=!1,await _()};V(s.to_update,async l=>{l||await _()},{deep:!0}),F(async()=>{await _()}),V(y,async()=>{await B()});const B=async()=>{const l={days:y.value};await c.put(`${u}/update-contract-days-to-alert/1`,l,"actualizando dias")};return(l,e)=>{const i=m("Button"),w=m("Dialog"),k=m("InputText"),C=m("Textarea"),g=m("column"),L=m("DataTable");return G(),O("div",W,[a(w,{visible:s.value.to_delte,"onUpdate:visible":e[2]||(e[2]=t=>s.value.to_delte=t),header:"Eliminar tipo"},{footer:n(()=>[o("div",Y,[a(i,{onClick:e[0]||(e[0]=t=>s.value.to_delte=!1),severity:"help",label:"No, Pensarlo mejor"}),a(i,{onClick:e[1]||(e[1]=t=>D(h.value.id)),text:"",severity:"danger",label:"Si claro"})])]),default:n(()=>[o("h6",X,[$(" Esta seguro de eliminar el tipo de contrato "),o("b",null,b(h.value.name),1),$(" ?")])]),_:1},8,["visible"]),a(w,{class:"mx-2",header:"Nuevo tipo de contrato",visible:s.value.to_add,"onUpdate:visible":e[7]||(e[7]=t=>s.value.to_add=t),style:{width:"30rem"}},{footer:n(()=>[o("div",te,[a(i,{onClick:e[5]||(e[5]=t=>s.value.to_add=!1),severity:"help",label:"Cerrar"}),a(i,{onClick:e[6]||(e[6]=t=>U()),text:"",severity:"danger",label:"Guardar"})])]),default:n(()=>[Z,a(k,{modelValue:v.value.name,"onUpdate:modelValue":e[3]||(e[3]=t=>v.value.name=t),style:{width:"100%"}},null,8,["modelValue"]),ee,a(C,{modelValue:v.value.description,"onUpdate:modelValue":e[4]||(e[4]=t=>v.value.description=t),style:{width:"100%","min-width":"100%",resize:"none"},rows:"5"},null,8,["modelValue"])]),_:1},8,["visible"]),a(w,{class:"mx-2",header:"Actualizar tipo de contrato",visible:s.value.to_update,"onUpdate:visible":e[12]||(e[12]=t=>s.value.to_update=t),style:{width:"30rem"}},{footer:n(()=>[o("div",le,[a(i,{onClick:e[10]||(e[10]=t=>s.value.to_delte=!1),severity:"help",label:"Cerrar"}),a(i,{onClick:e[11]||(e[11]=t=>S()),text:"",severity:"danger",label:"Actualizar"})])]),default:n(()=>[ae,a(k,{modelValue:r.value.name,"onUpdate:modelValue":e[8]||(e[8]=t=>r.value.name=t),style:{width:"100%"}},null,8,["modelValue"]),oe,a(C,{modelValue:r.value.description,"onUpdate:modelValue":e[9]||(e[9]=t=>r.value.description=t),style:{width:"100%","min-width":"100%",resize:"none"},rows:"5"},null,8,["modelValue"])]),_:1},8,["visible"]),o("div",se,[ne,ie,a(q(Q),{modelValue:y.value,"onUpdate:modelValue":e[13]||(e[13]=t=>y.value=t),suffix:" dias",style:{width:"100%"}},null,8,["modelValue"]),o("div",de,[re,a(i,{onClick:z,severity:"help",size:"small",label:"Nuevo tipo de contrato"})]),a(L,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} contratos",rowsPerPageOptions:[5,10,25,100],showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto p-0",value:x.value,filters:T.value},{header:n(()=>[]),default:n(()=>[a(g,{header:"Nombre",field:"name",class:"py-2",style:{width:"40%"}},{body:n(t=>[o("h6",ce,b(t.data.name),1)]),_:1}),a(g,{header:"Descripcion",style:{width:"50%"},field:"name",class:"py-2"},{body:n(t=>[o("h6",ue,b(t.data.description),1)]),_:1}),a(g,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-2"},{body:n(t=>[o("div",pe,[a(i,{onClick:M=>N(t.data),class:"m-0 p-0",severity:"warning",style:{height:"2rem",width:"2rem"},icon:"pi pi-pencil"},null,8,["onClick"]),a(i,{onClick:M=>P(t.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"]),ve])])}}},_e=R(me,[["__scopeId","data-v-f70b941c"]]);export{_e as default};
