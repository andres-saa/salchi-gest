import{_ as se,H as le,r as s,k as U,h as $,E as T,z as ie,v as re,a as g,o as B,c as N,d as l,w as n,b as i,n as D,F as M,U as c,I as ne,e as de,u as E,J as O,P as q,q as ce,t as ue,p as pe,g as me}from"./index-9ac1edba.js";import{g as he}from"./dropDownAux-665df03b.js";const w=C=>(pe("data-v-cd9672d8"),C=C(),me(),C),ye=w(()=>i("div",null,null,-1)),ve=w(()=>i("p",null,"¿Estás seguro de que quieres eliminar este barrio?",-1)),fe={class:"grid",style:{}},ge={class:"col-12 my-0 pb-0"},_e={class:"col-12 my-0"},be={class:"grid m-0",style:{width:"100%"}},we={class:"col-12 md:col-6 p-0 md:pr-2"},Ce={class:"col-11 md:col-5 p-0 md:pl-2",style:{display:"flex","justify-content":"end"}},xe={class:"col-12 pl-0"},ke={class:"col-12 m-auto p-0",style:{"max-width":"700px"}},Ve={class:"col-12 p-0 m-0",style:{display:"flex","justify-content":"end",border:"none"}},Le={class:"flex p-0 flex-column md:flex-row md:justify-content-between md:align-items-center"},Pe={class:"block mt-2 md:mt-0 p-input-icon-left"},Se=w(()=>i("i",{class:"pi pi-search"},null,-1)),Ee=w(()=>i("span",{class:"p-column-title"},"Code",-1)),Ue=w(()=>i("span",{class:"p-column-title p-0"},"Code",-1)),$e={__name:"domicilio",setup(C){const r=le();s(!1);const u=s([{}]),A=e=>{u.value.length>1&&u.value.splice(e,1)},y=s(!1);s({neighborhood_id:0,name:"",delivery_price:0,site_id:0,city_id:0});const x=s(0),p=s(0);U(p,(e,o)=>{e!=o&&W().then(a=>{P.value=a,x.value=P.value[0]})}),U(y,(e,o)=>{e==!0&&(p.value={},u.value=[{}])});const H=async()=>{y.value=!1,r.setLoading(!0,"guardando barrios");try{await Promise.all(u.value.map(async e=>{if(e.site_id=x.value.site_id,e.city_id=p.value.city_id,!(await fetch(`${c}/neighborhood`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error(`Error creating neighborhood: ${e.name}`)})),L.add({severity:"success",summary:"Created",detail:"All neighborhoods created successfully",life:3e3}),u.value=[{}],await k().then(e=>v.value=e),r.setLoading(!1,"guardando barrios")}catch(e){console.error("Request error:",e),L.add({severity:"error",summary:"Error",detail:"Failed to create some neighborhoods",life:3e3}),r.setLoading(!1,"guardando barrios")}},j=s([]),J=async()=>{try{const e=await fetch(`${c}/cities`);if(e.ok)return await e.json()}catch{}},G=async()=>{const e={method:"DELETE"};try{if(!(await fetch(`${c}/neighborhood/${I.value.neighborhood_id}`,e)).ok)throw new Error("Error al eliminar el barrio");await k().then(a=>v.value=a),_.value=!1,L.add({severity:"success",summary:"Eliminado",detail:"Barrio eliminado con éxito",life:3e3})}catch(o){console.error("Error en la petición:",o),L.add({severity:"error",summary:"Error",detail:"No se pudo eliminar el barrio",life:3e3})}};$(async()=>{J().then(e=>j.value=e)});const v=s([]),K=s(!1),_=s(!1),I=s({}),Q=e=>{I.value=e,_.value=!0},k=async()=>{const e=z.params.site_id;try{r.setLoading(!0,"cargando barrios");const o=await fetch(`${c}/neighborhoods/by-site/${e}`);if(o.ok||(K.value=!1,r.setLoading(!1,"cargando barrios")),o.ok){const a=await o.json();return r.setLoading(!1,"cargando barrios"),a}}catch{r.setLoading(!1,"cargando barrios")}},W=async()=>{var o;if(!((o=p.value)!=null&&o.city_id))return;const e=p.value.city_id;try{const a=await fetch(`${c}/sites/city/${e}`);if(a.ok||r.setLoading(!1,"cargando barrios"),a.ok){const f=await a.json();return r.setLoading(!1,"cargando barrios"),f}}catch{r.setLoading(!1,"cargando barrios")}};$(async()=>{k().then(e=>{v.value=e})}),T(()=>{r.setLoading(!1)});const R=s(),V=s(null),X=()=>{V.value={global:{value:null,matchMode:ne.CONTAINS}}};T(()=>{X()}),s(!1),s(!1);const L=ie(),z=re();s(!1);const Y=s([]),Z=s([]);s({}),s({});const ee=s(!0);s(!1),s([]);const F=async e=>{const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(`${c}/neighborhood/${e.neighborhood_id}`,o).then(a=>{if(!a.ok)throw new Error("La petición ha fallado");return a.json()}).then(a=>{console.log("Respuesta del servidor:",a)}).catch(a=>{console.error("Error en la petición:",a)})};async function oe(){try{const e=await fetch(`${c}/employers/grouped-by-site`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let o=await e.json();o=o.map(a=>{const f=a.employers.reduce((m,d)=>(m[d.position]=m[d.position]||[],m[d.position].push(d),m),{});return{...a,positions:f}}),Y.value=o,ee.value=!1}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}async function te(){try{const e=await fetch(`${c}/employers/grouped-by-position`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);Z.value=await e.json()}catch(e){console.error("Error al obtener usuarios agrupados por posición:",e)}}const P=s([]);return T(()=>{he().then(e=>P.value=e)}),$(async()=>{await oe(),await te()}),U(()=>z.path,()=>{k().then(e=>{v.value=e})}),(e,o)=>{const a=g("Button"),f=g("Dialog"),m=g("Dropdown"),d=g("InputText"),b=g("Column"),ae=g("DataTable");return B(),N(M,null,[ye,l(f,{visible:_.value,"onUpdate:visible":o[1]||(o[1]=t=>_.value=t),style:{width:"auto"},header:"Confirmar eliminación",modal:!0,closable:!1},{default:n(()=>[ve,l(a,{label:"Cancelar",onClick:o[0]||(o[0]=t=>_.value=!1),class:"p-button-text"}),l(a,{label:"Eliminar",onClick:G,class:"p-button-danger"})]),_:1},8,["visible"]),l(f,{style:{width:"45rem"},class:"mx-2",visible:y.value,"onUpdate:visible":o[6]||(o[6]=t=>y.value=t),header:"Crear Nuevo Barrio",modal:!0,closable:!1},{footer:n(()=>[l(a,{label:"Cancelar",onClick:o[5]||(o[5]=t=>y.value=!1),class:"p-button-text"}),l(a,{label:"Crear",onClick:H,class:"p-button-text"})]),default:n(()=>[i("div",fe,[i("div",ge,[l(m,{style:{width:"100%"},modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=t=>p.value=t),options:j.value,optionLabel:"city_name",placeholder:"Ciudad"},null,8,["modelValue","options"])]),i("div",_e,[l(m,{style:{width:"100%"},modelValue:x.value,"onUpdate:modelValue":o[3]||(o[3]=t=>x.value=t),options:P.value.filter(t=>t.show_on_web),optionLabel:"site_name",placeholder:"Sede"},null,8,["modelValue","options"])])]),(B(!0),N(M,null,de(u.value,(t,h)=>(B(),N("div",{key:h,class:"my-3"},[i("div",be,[i("div",we,[l(d,{style:{width:"100%"},modelValue:t.name,"onUpdate:modelValue":S=>t.name=S,placeholder:"Nombre del Barrio"},null,8,["modelValue","onUpdate:modelValue"])]),i("div",Ce,[l(E(O),{unstyled:"",style:{width:"100%"},prefix:"$",modelValue:t.delivery_price,"onUpdate:modelValue":S=>t.delivery_price=S,placeholder:"Precio del Domicilio"},null,8,["modelValue","onUpdate:modelValue"])]),l(a,{icon:"pi pi-trash text-2xl",text:"",class:"col-1 p-0 m-0",size:"small",severity:"danger",onClick:S=>A(h)},null,8,["onClick"])])]))),128)),i("div",xe,[l(a,{text:"",class:"p-0",onClick:o[4]||(o[4]=()=>{u.value.push({})})},{default:n(()=>[i("i",{class:D(["text-4xl",E(q).PLUS_CIRCLE])},null,2)]),_:1})])]),_:1},8,["visible"]),i("div",ke,[i("div",Ve,[l(a,{style:{},raised:"",severity:"help",size:"small",class:"m-0 my-5",label:"Nuevo Barrio",onClick:o[7]||(o[7]=t=>y.value=!0)})]),l(ae,{class:D(v.value.length>0?"apear":"hide"),stripedRows:"",ref:"dt",value:v.value,selection:R.value,"onUpdate:selection":o[9]||(o[9]=t=>R.value=t),dataKey:"id",paginator:!0,rows:10,filters:V.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} neighborhoods",responsiveLayout:"scroll",scrollable:"",frozenValue:e.lockedCustomers},{header:n(()=>[i("div",Le,[i("span",Pe,[Se,l(d,{class:"",modelValue:V.value.global.value,"onUpdate:modelValue":o[8]||(o[8]=t=>V.value.global.value=t),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:n(()=>[l(b,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; "}),l(b,{class:"px-2 py-0 m-0",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:n(t=>[Ee,ce(" "+ue(t.data.neighborhood_id),1)]),_:1}),l(b,{class:"px-2 py-0 m-0",field:"name",header:"Barrio",sortable:!0,headerStyle:"width:max-content; min-width:15rem "},{body:n(t=>[Ue,l(d,{onchange:()=>F(t.data),style:{width:"100%",border:"none","border-radius":"0"},modelValue:t.data.name,"onUpdate:modelValue":h=>t.data.name=h},null,8,["onchange","modelValue","onUpdate:modelValue"])]),_:1}),l(b,{class:"px-2 py-0 m-0",field:"delivery_price",header:"Precio del domicilio",sortable:!0,headerStyle:"width:15rem;min-width:15rem "},{body:n(t=>[l(E(O),{prefix:"$",style:{width:"10%",border:"none","border-radius":"0"},modelValue:t.data.delivery_price,"onUpdate:modelValue":[h=>t.data.delivery_price=h,()=>F(t.data)]},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(b,{field:"actions",header:"",class:"p-0",style:{},frozen:"",alignFrozen:"right"},{body:n(t=>[l(a,{class:"p-button-rounded p-button-danger p-0",style:{width:"2rem",display:"flex","align-items":"center",margin:"auto","justify-content":"center","aspect-ratio":"1 / 1"},onClick:h=>Q(t.data)},{default:n(()=>[i("i",{class:D(E(q).TRASH)},null,2)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["class","value","selection","filters","frozenValue"])])],64)}}},Ne=se($e,[["__scopeId","data-v-cd9672d8"]]);export{Ne as default};