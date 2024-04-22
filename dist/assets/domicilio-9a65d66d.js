import{_ as se,q as le,f as s,i as U,g as E,x as B,y as re,u as ne,r as v,o as T,c as N,d as l,w as n,a as r,F as A,U as u,z as ie,b as de,j as ce,n as $,k as D,P as I,A as ue,v as pe,t as me,p as he,e as ve}from"./index-da6d24f6.js";import{g as ye}from"./dropDownAux-817db674.js";const w=C=>(he("data-v-75ab83e0"),C=C(),ve(),C),fe=w(()=>r("p",null,"¿Estás seguro de que quieres eliminar este barrio?",-1)),ge={class:"grid",style:{}},be={class:"col-6 pr-2 pl-3"},_e={class:"col-6 pl-2 pr-3"},we={class:"my-2",style:{width:"100%",display:"flex",gap:"1rem"}},Ce={class:"col-12 pl-0"},ke={class:"col-12 m-auto p-0",style:{"max-width":"700px"}},xe={class:"flex p-0 flex-column md:flex-row md:justify-content-between md:align-items-center"},Ve={class:"block mt-2 md:mt-0 p-input-icon-left"},Le=w(()=>r("i",{class:"pi pi-search"},null,-1)),Pe=w(()=>r("span",{class:"p-column-title"},"Code",-1)),Se=w(()=>r("span",{class:"p-column-title p-0"},"Code",-1)),Te=w(()=>r("span",{class:"p-column-title p-0"},"Code",-1)),Ue={__name:"domicilio",setup(C){const i=le();s(!1);const c=s([{}]),O=e=>{c.value.length>1&&c.value.splice(e,1)},y=s(!1);s({neighborhood_id:0,name:"",delivery_price:0,site_id:0,city_id:0});const k=s(0),p=s(0);U(p,(e,o)=>{e!=o&&Q().then(a=>{P.value=a,k.value=P.value[0]})}),U(y,(e,o)=>{e==!0&&(p.value={},c.value=[{}])});const q=async()=>{y.value=!1,i.setLoading(!0,"guardando barrios");try{await Promise.all(c.value.map(async e=>{if(e.site_id=k.value.site_id,e.city_id=p.value.city_id,!(await fetch(`${u}/neighborhood`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error(`Error creating neighborhood: ${e.name}`)})),L.add({severity:"success",summary:"Created",detail:"All neighborhoods created successfully",life:3e3}),c.value=[{}],await x().then(e=>g.value=e),i.setLoading(!1,"guardando barrios")}catch(e){console.error("Request error:",e),L.add({severity:"error",summary:"Error",detail:"Failed to create some neighborhoods",life:3e3}),i.setLoading(!1,"guardando barrios")}},j=s([]),H=async()=>{try{const e=await fetch(`${u}/cities`);if(e.ok)return await e.json()}catch{}},G=async()=>{const e={method:"DELETE"};try{if(!(await fetch(`${u}/neighborhood/${R.value.neighborhood_id}`,e)).ok)throw new Error("Error al eliminar el barrio");await x().then(a=>g.value=a),b.value=!1,L.add({severity:"success",summary:"Eliminado",detail:"Barrio eliminado con éxito",life:3e3})}catch(o){console.error("Error en la petición:",o),L.add({severity:"error",summary:"Error",detail:"No se pudo eliminar el barrio",life:3e3})}};E(async()=>{H().then(e=>j.value=e)});const g=s([]),J=s(!1),b=s(!1),R=s({}),K=e=>{R.value=e,b.value=!0},x=async()=>{const e=F.params.site_id;try{i.setLoading(!0,"cargando barrios");const o=await fetch(`${u}/neighborhoods/by-site/${e}`);if(o.ok||(J.value=!1,i.setLoading(!1,"cargando barrios")),o.ok){const a=await o.json();return i.setLoading(!1,"cargando barrios"),a}}catch{i.setLoading(!1,"cargando barrios")}},Q=async()=>{var o;if(!((o=p.value)!=null&&o.city_id))return;const e=p.value.city_id;try{const a=await fetch(`${u}/sites/city/${e}`);if(a.ok||i.setLoading(!1,"cargando barrios"),a.ok){const f=await a.json();return i.setLoading(!1,"cargando barrios"),f}}catch{i.setLoading(!1,"cargando barrios")}};E(async()=>{x().then(e=>{g.value=e})}),B(()=>{i.setLoading(!1)});const z=s(),V=s(null),W=()=>{V.value={global:{value:null,matchMode:ie.CONTAINS}}};B(()=>{W()}),s(!1),s(!1);const L=re(),F=ne();s(!1);const X=s([]),Y=s([]);s({}),s({});const Z=s(!0);s(!1),s([]);const M=async e=>{const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(`${u}/neighborhood/${e.neighborhood_id}`,o).then(a=>{if(!a.ok)throw new Error("La petición ha fallado");return a.json()}).then(a=>{console.log("Respuesta del servidor:",a)}).catch(a=>{console.error("Error en la petición:",a)})};async function ee(){try{const e=await fetch(`${u}/employers/grouped-by-site`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let o=await e.json();o=o.map(a=>{const f=a.employers.reduce((m,d)=>(m[d.position]=m[d.position]||[],m[d.position].push(d),m),{});return{...a,positions:f}}),X.value=o,Z.value=!1}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}async function oe(){try{const e=await fetch(`${u}/employers/grouped-by-position`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);Y.value=await e.json()}catch(e){console.error("Error al obtener usuarios agrupados por posición:",e)}}const P=s([]);return B(()=>{ye().then(e=>P.value=e)}),E(async()=>{await ee(),await oe()}),U(()=>F.path,()=>{x().then(e=>{g.value=e})}),(e,o)=>{const a=v("Button"),f=v("Dialog"),m=v("Dropdown"),d=v("InputText"),te=v("InputNumber"),_=v("Column"),ae=v("DataTable");return T(),N(A,null,[l(f,{visible:b.value,"onUpdate:visible":o[1]||(o[1]=t=>b.value=t),style:{width:"auto"},header:"Confirmar eliminación",modal:!0,closable:!1},{default:n(()=>[fe,l(a,{label:"Cancelar",onClick:o[0]||(o[0]=t=>b.value=!1),class:"p-button-text"}),l(a,{label:"Eliminar",onClick:G,class:"p-button-danger"})]),_:1},8,["visible"]),l(f,{visible:y.value,"onUpdate:visible":o[6]||(o[6]=t=>y.value=t),header:"Crear Nuevo Barrio",modal:!0,closable:!1},{footer:n(()=>[l(a,{label:"Cancelar",onClick:o[5]||(o[5]=t=>y.value=!1),class:"p-button-text"}),l(a,{label:"Crear",onClick:q,class:"p-button-text"})]),default:n(()=>[r("div",ge,[r("div",be,[l(m,{style:{width:"100%"},modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=t=>p.value=t),options:j.value,optionLabel:"city_name",placeholder:"Ciudad"},null,8,["modelValue","options"])]),r("div",_e,[l(m,{style:{width:"100%"},modelValue:k.value,"onUpdate:modelValue":o[3]||(o[3]=t=>k.value=t),options:P.value,optionLabel:"site_name",placeholder:"Sede"},null,8,["modelValue","options"])])]),(T(!0),N(A,null,de(c.value,(t,h)=>(T(),N("div",{key:h},[r("div",we,[l(d,{modelValue:t.name,"onUpdate:modelValue":S=>t.name=S,placeholder:"Nombre del Barrio"},null,8,["modelValue","onUpdate:modelValue"]),l(te,{modelValue:t.delivery_price,"onUpdate:modelValue":S=>t.delivery_price=S,placeholder:"Precio del Domicilio"},null,8,["modelValue","onUpdate:modelValue"]),c.value.length>1?(T(),ce(a,{key:0,text:"",class:"p-0",size:"small",severity:"danger",onClick:S=>O(h)},{default:n(()=>[r("i",{class:$(["text-xl",D(I).TRASH])},null,2)]),_:2},1032,["onClick"])):ue("",!0)])]))),128)),r("div",Ce,[l(a,{text:"",class:"p-0",onClick:o[4]||(o[4]=()=>{c.value.push({})})},{default:n(()=>[r("i",{class:$(["text-4xl",D(I).PLUS_CIRCLE])},null,2)]),_:1})])]),_:1},8,["visible"]),r("div",ke,[l(ae,{ref:"dt",value:g.value,selection:z.value,"onUpdate:selection":o[9]||(o[9]=t=>z.value=t),dataKey:"id",paginator:!0,rows:10,filters:V.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} neighborhoods",responsiveLayout:"scroll",scrollable:"",frozenValue:e.lockedCustomers},{header:n(()=>[l(a,{severity:"help",size:"small",class:"m-0 my-5",label:"Nuevo Barrio",onClick:o[7]||(o[7]=t=>y.value=!0)}),r("div",xe,[r("span",Ve,[Le,l(d,{class:"",modelValue:V.value.global.value,"onUpdate:modelValue":o[8]||(o[8]=t=>V.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:n(()=>[l(_,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; "}),l(_,{class:"px-2 py-0 m-0",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[Pe,pe(" "+me(t.data.neighborhood_id),1)]),_:1}),l(_,{class:"px-2 py-0 m-0",field:"name",header:"Barrio",sortable:!0,headerStyle:"width:max-content; min-width:15rem "},{body:n(t=>[Se,l(d,{onchange:()=>M(t.data),style:{width:"100%",border:"none","border-right":"2px solid rgba(0, 0, 0, 0.1)","border-radius":"0","border-left":"2px solid rgba(0, 0, 0, 0.1)"},modelValue:t.data.name,"onUpdate:modelValue":h=>t.data.name=h},null,8,["onchange","modelValue","onUpdate:modelValue"])]),_:1}),l(_,{class:"px-2 py-0 m-0",field:"delivery_price",header:"Precio del domicilio",sortable:!0,headerStyle:"width:15rem;min-width:15rem "},{body:n(t=>[Te,l(d,{style:{width:"100%",border:"none","border-right":"2px solid rgba(0, 0, 0, 0.1)","border-radius":"0"},modelValue:t.data.delivery_price,"onUpdate:modelValue":[h=>t.data.delivery_price=h,()=>M(t.data)]},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(_,{field:"actions",header:"",class:"p-0",style:{},frozen:"",alignFrozen:"right"},{body:n(t=>[l(a,{class:"p-button-rounded p-button-danger p-0",style:{width:"2rem",display:"flex","align-items":"center",margin:"auto","justify-content":"center","aspect-ratio":"1 / 1"},onClick:h=>K(t.data)},{default:n(()=>[r("i",{class:$(D(I).TRASH)},null,2)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["value","selection","filters","frozenValue"])])],64)}}},Ne=se(Ue,[["__scopeId","data-v-75ab83e0"]]);export{Ne as default};
