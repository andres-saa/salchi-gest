import{_ as re,L as ie,r as a,D as T,i as S,q as B,x as ne,A as de,a as h,o as N,c as D,g as l,w as d,b as r,n as j,F as O,U as c,s as ce,m as ue,d as pe,u as P,Q as q,P as H,p as me,h as he}from"./index-82df3ad8.js";import{g as ve}from"./dropDownAux-d6517682.js";const U=_=>(me("data-v-fb010b91"),_=_(),he(),_),ye=U(()=>r("div",null,null,-1)),fe=U(()=>r("p",null,"¿Estás seguro de que quieres eliminar este barrio?",-1)),ge={class:"grid",style:{}},be={class:"col-12 my-0 pb-0"},_e={class:"col-12 my-0"},we={class:"grid m-0",style:{width:"100%"}},Ce={class:"col-12 md:col-6 p-0 md:pr-2"},xe={class:"col-11 md:col-5 p-0 md:pl-2 my-2 md:my-0",style:{display:"flex","justify-content":"end"}},ke={class:"col-12 pl-0"},Ve={class:"col-12 m-auto p-0",style:{"max-width":"700px"}},Le={class:"col-12 p-0 m-0",style:{display:"flex","justify-content":"end",border:"none"}},Pe={class:"flex p-0 flex-column md:flex-row md:justify-content-between md:align-items-center"},Ue={class:"block mt-2 md:mt-0 p-input-icon-left"},$e=U(()=>r("i",{class:"pi pi-search"},null,-1)),Ee=U(()=>r("span",{class:"p-column-title p-0"},"Code",-1)),Te={__name:"domicilio",setup(_){const n=ie();a(!1);const u=a([{}]),G=e=>{u.value.length>1&&u.value.splice(e,1)},v=a(!1);a({neighborhood_id:0,name:"",delivery_price:0,site_id:0,city_id:0});const w=a(0),p=a(0);T(p,(e,o)=>{e!=o&&Y().then(t=>{V.value=t,w.value=V.value[0]})}),T(v,(e,o)=>{e==!0&&(p.value={},u.value=[{}])});const J=async()=>{v.value=!1,n.setLoading(!0,"guardando barrios");try{await Promise.all(u.value.map(async e=>{if(e.site_id=w.value.site_id,e.city_id=p.value.city_id,!(await fetch(`${c}/neighborhood`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error(`Error creating neighborhood: ${e.name}`)})),k.add({severity:"success",summary:"Created",detail:"All neighborhoods created successfully",life:3e3}),u.value=[{}],await C().then(e=>y.value=e),n.setLoading(!1,"guardando barrios")}catch(e){console.error("Request error:",e),k.add({severity:"error",summary:"Error",detail:"Failed to create some neighborhoods",life:3e3}),n.setLoading(!1,"guardando barrios")}},R=a([]),K=async()=>{try{const e=await fetch(`${c}/cities`);if(e.ok)return await e.json()}catch{}},Q=async()=>{const e={method:"DELETE"};try{if(!(await fetch(`${c}/neighborhood/${I.value.neighborhood_id}`,e)).ok)throw new Error("Error al eliminar el barrio");await C().then(t=>y.value=t),b.value=!1,k.add({severity:"success",summary:"Eliminado",detail:"Barrio eliminado con éxito",life:3e3})}catch(o){console.error("Error en la petición:",o),k.add({severity:"error",summary:"Error",detail:"No se pudo eliminar el barrio",life:3e3})}};S(async()=>{K().then(e=>R.value=e)});const y=a([]),W=a(!1),b=a(!1),I=a({}),X=e=>{I.value=e,b.value=!0},C=async()=>{const e=F.params.site_id;try{n.setLoading(!0,"cargando barrios");const o=await fetch(`${c}/neighborhoods/by-site/${e}`);if(o.ok||(W.value=!1,n.setLoading(!1,"cargando barrios")),o.ok){const t=await o.json();return n.setLoading(!1,"cargando barrios"),t}}catch{n.setLoading(!1,"cargando barrios")}},Y=async()=>{var o;if(!((o=p.value)!=null&&o.city_id))return;const e=p.value.city_id;try{const t=await fetch(`${c}/sites/city/${e}`);if(t.ok||n.setLoading(!1,"cargando barrios"),t.ok){const f=await t.json();return n.setLoading(!1,"cargando barrios"),f}}catch{n.setLoading(!1,"cargando barrios")}};S(async()=>{C().then(e=>{y.value=e})}),B(()=>{n.setLoading(!1)});const z=a(),x=a(null),Z=()=>{x.value={global:{value:null,matchMode:ce.CONTAINS}}};B(()=>{Z()}),a(!1),a(!1);const k=ne(),F=de();a(!1);const ee=a([]),oe=a([]);a({}),a({});const te=a(!0);a(!1),a([]);const M=async e=>{const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(`${c}/neighborhood/${e.neighborhood_id}`,o).then(t=>{if(!t.ok)throw new Error("La petición ha fallado");return t.json()}).then(t=>{console.log("Respuesta del servidor:",t)}).catch(t=>{console.error("Error en la petición:",t)})};async function ae(){try{const e=await fetch(`${c}/employers/grouped-by-site`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);let o=await e.json();o=o.map(t=>{const f=t.employers.reduce((m,g)=>(m[g.position]=m[g.position]||[],m[g.position].push(g),m),{});return{...t,positions:f}}),ee.value=o,te.value=!1}catch(e){console.error("Error al obtener usuarios agrupados por sede:",e)}}async function se(){try{const e=await fetch(`${c}/employers/grouped-by-position`);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);oe.value=await e.json()}catch(e){console.error("Error al obtener usuarios agrupados por posición:",e)}}const V=a([]);return B(()=>{ve().then(e=>V.value=e)}),S(async()=>{await ae(),await se()}),T(()=>F.path,()=>{C().then(e=>{y.value=e})}),(e,o)=>{const t=h("Button"),f=h("Dialog"),m=h("Dropdown"),g=h("Divider"),$=h("InputText"),E=h("Column"),le=h("DataTable");return N(),D(O,null,[ye,l(f,{visible:b.value,"onUpdate:visible":o[1]||(o[1]=s=>b.value=s),style:{width:"auto"},header:"Confirmar eliminación",modal:!0,closable:!1},{default:d(()=>[fe,l(t,{label:"Cancelar",onClick:o[0]||(o[0]=s=>b.value=!1),class:"p-button-text"}),l(t,{label:"Eliminar",onClick:Q,class:"p-button-danger"})]),_:1},8,["visible"]),l(f,{style:{width:"45rem"},class:"mx-2",visible:v.value,"onUpdate:visible":o[6]||(o[6]=s=>v.value=s),header:"Crear Nuevo Barrio",modal:!0,closable:!1},{footer:d(()=>[l(t,{severity:"danger",label:"Cancelar",onClick:o[5]||(o[5]=s=>v.value=!1),class:"p-button-text"}),l(t,{severity:"help",label:"Crear",onClick:J,class:"p-button m-0"})]),default:d(()=>{var s;return[r("div",ge,[r("div",be,[l(m,{style:{width:"100%"},modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=i=>p.value=i),options:R.value,optionLabel:"city_name",placeholder:"Ciudad"},null,8,["modelValue","options"])]),r("div",_e,[l(m,{style:{width:"100%"},modelValue:w.value,"onUpdate:modelValue":o[3]||(o[3]=i=>w.value=i),options:(s=V.value)==null?void 0:s.filter(i=>i.show_on_web),optionLabel:"site_name",placeholder:"Sede"},null,8,["modelValue","options"])])]),l(g,null,{default:d(()=>[ue(" Nuevos barrios ")]),_:1}),(N(!0),D(O,null,pe(u.value,(i,A)=>(N(),D("div",{key:A,class:"my-3"},[r("div",we,[r("div",Ce,[l($,{style:{width:"100%"},modelValue:i.name,"onUpdate:modelValue":L=>i.name=L,placeholder:"Nombre del Barrio"},null,8,["modelValue","onUpdate:modelValue"])]),r("div",xe,[l(P(q),{style:{width:"100%"},prefix:"$",modelValue:i.delivery_price,"onUpdate:modelValue":L=>i.delivery_price=L,placeholder:"Precio del Domicilio"},null,8,["modelValue","onUpdate:modelValue"])]),l(t,{icon:"pi pi-trash text-2xl p-0",text:"",class:"col-1 p-0 m-0",size:"small",severity:"danger",onClick:L=>G(A)},null,8,["onClick"])])]))),128)),r("div",ke,[l(t,{text:"",class:"p-0",onClick:o[4]||(o[4]=()=>{u.value.push({})})},{default:d(()=>[r("i",{class:j(["text-4xl",P(H).PLUS_CIRCLE])},null,2)]),_:1})])]}),_:1},8,["visible"]),r("div",Ve,[r("div",Le,[l(t,{style:{},raised:"",severity:"help",size:"small",class:"m-0 my-5",label:"Nuevo Barrio",onClick:o[7]||(o[7]=s=>v.value=!0)})]),l(le,{class:j(y.value.length>0?"apear":"hide"),stripedRows:"",ref:"dt",value:y.value,selection:z.value,"onUpdate:selection":o[9]||(o[9]=s=>z.value=s),dataKey:"id",paginator:!0,rows:10,filters:x.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} neighborhoods",responsiveLayout:"scroll",scrollable:"",frozenValue:e.lockedCustomers},{header:d(()=>[r("div",Pe,[r("span",Ue,[$e,l($,{class:"",modelValue:x.value.global.value,"onUpdate:modelValue":o[8]||(o[8]=s=>x.value.global.value=s),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:d(()=>[l(E,{class:"px-2 py-0 m-0",field:"name",header:"Barrio",sortable:!0,headerStyle:"width:max-content; min-width:15rem "},{body:d(s=>[Ee,l($,{onchange:()=>M(s.data),style:{width:"100%",border:"none","border-radius":"0"},modelValue:s.data.name,"onUpdate:modelValue":i=>s.data.name=i},null,8,["onchange","modelValue","onUpdate:modelValue"])]),_:1}),l(E,{class:"px-2 py-0 m-0",field:"delivery_price",header:"Precio del domicilio",sortable:!0,headerStyle:"width:15rem;min-width:15rem "},{body:d(s=>[l(P(q),{prefix:"$",style:{width:"10%",height:"100%",border:"none !important","border-radius":"0"},modelValue:s.data.delivery_price,"onUpdate:modelValue":[i=>s.data.delivery_price=i,()=>M(s.data)]},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(E,{field:"actions",header:"",class:"p-0",style:{},frozen:"",alignFrozen:"right"},{body:d(s=>[l(t,{class:"p-button-rounded p-button-danger p-0",style:{width:"2rem",display:"flex","align-items":"center",margin:"auto","justify-content":"center","aspect-ratio":"1 / 1"},onClick:i=>X(s.data)},{default:d(()=>[r("i",{class:j(P(H).TRASH)},null,2)]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["class","value","selection","filters","frozenValue"])])],64)}}},Ne=re(Te,[["__scopeId","data-v-fb010b91"]]);export{Ne as default};