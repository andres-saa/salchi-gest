import{_ as ne,f as l,g as x,h as B,O as M,A as te,u as se,r as m,o as w,c as T,I as R,n as A,d as o,w as t,a as n,F,U as d,Q as de,b as ce,q,l as O,P as H,k as G,t as pe,y as me,p as ue,e as ve}from"./index-e37a2320.js";import{_ as ye}from"./Loading-4d190490.js";import{g as _e}from"./dropDownAux-8d9502d9.js";const C=P=>(ue("data-v-6938e1f6"),P=P(),ve(),P),he=C(()=>n("p",null,"¿Estás seguro de que quieres eliminar este barrio?",-1)),fe={class:"grid",style:{}},be={class:"col-6 pr-2 pl-3"},ge={class:"col-6 pl-2 pr-3"},we={class:"my-2",style:{width:"100%",display:"flex",gap:"1rem"}},Ce={class:"col-12 pl-0"},Pe={class:"col-12 m-auto p-0",style:{"max-width":"900px"}},Ve={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},Le={class:"m-0 text-2xl my-4 my-0 py-0"},Se={class:"block mt-2 md:mt-0 p-input-icon-left"},ke=C(()=>n("i",{class:"pi pi-search"},null,-1)),Ee=C(()=>n("span",{class:"p-column-title"},"Code",-1)),Ne=C(()=>n("span",{class:"p-column-title"},"Code",-1)),xe=C(()=>n("span",{class:"p-column-title"},"Code",-1)),Be={__name:"domicilio",setup(P){const u=l([{}]),J=a=>{u.value.length>1&&u.value.splice(a,1)},v=l(!1);l({neighborhood_id:0,name:"",delivery_price:0,site_id:0,city_id:0});const V=l(0),y=l(0);x(y,(a,e)=>{a!=e&&Y().then(i=>{E.value=i,V.value=E.value[0]})}),x(v,(a,e)=>{a==!0&&(y.value={},u.value=[{}])});const Q=async()=>{const a=[{name:"Alvernia",delivery_price:3e3},{name:"Nuevo alvernia",delivery_price:3e3},{name:"Entre rios",delivery_price:3e3},{name:"Villa nueva",delivery_price:3e3},{name:"Conj residencial la villa",delivery_price:3e3},{name:"El dorado",delivery_price:3e3},{name:"Franciscano",delivery_price:3e3},{name:"Morales",delivery_price:3e3},{name:"Popular",delivery_price:3e3},{name:"El bosque",delivery_price:3e3},{name:"Cespedes",delivery_price:3e3},{name:"Victoria",delivery_price:3e3},{name:"Panamericano",delivery_price:3e3},{name:"Miraflores",delivery_price:3e3},{name:"Jazmin",delivery_price:3e3},{name:"Lomitas",delivery_price:3e3},{name:"Tomas uribe",delivery_price:3e3},{name:"Centro",delivery_price:3e3},{name:"Nuevo farfan",delivery_price:4e3},{name:"Villa del lago",delivery_price:4e3},{name:"Villa margarita",delivery_price:4e3},{name:"Portales de san felipe",delivery_price:4e3},{name:"Asoagrin",delivery_price:4e3},{name:"Villa liliana 1",delivery_price:4e3},{name:"Villa liliana 2",delivery_price:4e3},{name:"Sintra san carlos",delivery_price:4e3},{name:"Prados del limonar",delivery_price:4e3},{name:"Bosques de maracaibo",delivery_price:4e3},{name:"Agua clara av principal",delivery_price:4e3},{name:"tercer milenio",delivery_price:4e3},{name:"Casa huertas",delivery_price:4e3},{name:"San luis",delivery_price:4e3},{name:"Simon bolivar",delivery_price:4e3},{name:"Ciudad campestre",delivery_price:4e3},{name:"La rivera",delivery_price:4e3},{name:"Cienegueta",delivery_price:5e3},{name:"Motel",delivery_price:4e3},{name:"Aeropuerto",delivery_price:4e3},{name:"Parque verzalles",delivery_price:4e3},{name:"La Paz",delivery_price:4e3},{name:"El condor",delivery_price:3e3},{name:"El conder 2",delivery_price:3e3},{name:"Nuevo morales",delivery_price:3e3},{name:"Estambul",delivery_price:3e3},{name:"La cruz",delivery_price:3e3},{name:"Santa rita del rio",delivery_price:3e3},{name:"La inmaculada",delivery_price:3e3},{name:"San antonio",delivery_price:3e3},{name:"Playas",delivery_price:4e3},{name:"Palo bonito",delivery_price:3e3},{name:"Escobar",delivery_price:3e3},{name:"Maracaibo",delivery_price:3500},{name:"Rojas",delivery_price:3500},{name:"La merced",delivery_price:3e3},{name:"Saleciano",delivery_price:3e3},{name:"Sajonia",delivery_price:3e3},{name:"Santa ines",delivery_price:4e3},{name:"Pueblo nuevo",delivery_price:3e3},{name:"Progresar",delivery_price:3e3},{name:"Urb la herradura",delivery_price:3e3},{name:"Palmas de progresar",delivery_price:3e3},{name:"San carlos",delivery_price:3e3},{name:"12 de octubre",delivery_price:3e3},{name:"El lago",delivery_price:3e3},{name:"El laguito",delivery_price:3e3},{name:"Principe",delivery_price:3e3},{name:"Laureles",delivery_price:4e3},{name:"Av cali",delivery_price:3e3},{name:"La bastilla",delivery_price:3e3},{name:"Quintas de san felipe",delivery_price:4e3},{name:"Fatima",delivery_price:3e3},{name:"Nuevo fatima",delivery_price:3e3},{name:"Villa campestre",delivery_price:3e3},{name:"San benito",delivery_price:3e3},{name:"La esperanza",delivery_price:3500},{name:"Las delicias",delivery_price:3500},{name:"La ceiba",delivery_price:3500},{name:"Ruben cruz velez",delivery_price:3500},{name:"Diablos rojos",delivery_price:4e3},{name:"La campiña",delivery_price:3e3},{name:"La quinta",delivery_price:3e3},{name:"La graciela",delivery_price:3e3},{name:"Los olmos",delivery_price:3500},{name:"El jardin",delivery_price:3e3},{name:"La trinidad",delivery_price:3e3},{name:"7 de agosto",delivery_price:3500},{name:"Buenos aires",delivery_price:4e3},{name:"Bolivar",delivery_price:4e3},{name:"San pedro claver",delivery_price:4e3},{name:"Marandua",delivery_price:4e3},{name:"Chiminangos",delivery_price:4e3},{name:"Prados del norte",delivery_price:4e3},{name:"Guayacanes",delivery_price:4e3},{name:"Las americas",delivery_price:4e3},{name:"Las nieves",delivery_price:4e3},{name:"Villa del sur",delivery_price:4e3},{name:"Farfan",delivery_price:4e3},{name:"Municipal",delivery_price:4e3},{name:"La independencia",delivery_price:4e3},{name:"Villa colombia",delivery_price:4e3},{name:"Porvenir",delivery_price:4e3},{name:"Saman del norte",delivery_price:4e3},{name:"El palmar",delivery_price:4e3},{name:"Alameda",delivery_price:4e3},{name:"urb peñaranda",delivery_price:3500},{name:"Portales del Rio",delivery_price:4e3},{name:"Santa isabel",delivery_price:4e3},{name:"Flor de la campana",delivery_price:4e3},{name:"Bello horizonte",delivery_price:4e3},{name:"Horizonte",delivery_price:4e3},{name:"Lucitania",delivery_price:3500},{name:"Nuevo principe",delivery_price:3500},{name:"Hotel",delivery_price:3500},{name:"Callejoness agua clara",delivery_price:5e3},{name:"Nariño",delivery_price:5e3},{name:"Tres esquinas",delivery_price:5e3},{name:"Cienegueta alto",delivery_price:5e3},{name:"El picacho",delivery_price:5e3},{name:"Campo alegre",delivery_price:5e3}].map(e=>({...e,site_id:6,city_id:12}));try{await Promise.all(a.map(async e=>{const i=await fetch(`${d}/neighborhood`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!i.ok)throw new Error(`Error al crear el barrio: ${e.name}`);return i.json()})),k.add({severity:"success",summary:"Creado",detail:"Todos los barrios creados con éxito",life:3e3}),v.value=!1,await L().then(e=>_.value=e),me.push(`/domicilios/${V.value.site_id}`)}catch(e){console.error("Error en la petición:",e),k.add({severity:"error",summary:"Error",detail:"No se pudieron crear algunos barrios",life:3e3})}},U=l([]),K=async()=>{try{const a=await fetch(`${d}/cities`);if(a.ok)return await a.json()}catch{}},W=async()=>{const a={method:"DELETE"};try{if(!(await fetch(`${d}/neighborhood/${$.value.neighborhood_id}`,a)).ok)throw new Error("Error al eliminar el barrio");await L().then(i=>_.value=i),f.value=!1,k.add({severity:"success",summary:"Eliminado",detail:"Barrio eliminado con éxito",life:3e3})}catch(e){console.error("Error en la petición:",e),k.add({severity:"error",summary:"Error",detail:"No se pudo eliminar el barrio",life:3e3})}};B(async()=>{K().then(a=>U.value=a)});const _=l([]),h=l(!1),f=l(!1),$=l({}),X=a=>{$.value=a,f.value=!0},L=async()=>{const a=D.params.site_id;try{h.value=!0;const e=await fetch(`${d}/neighborhoods/by-site/${a}`);if(e.ok||(h.value=!1),e.ok){const i=await e.json();return h.value=!1,i}}catch{h.value=!1}},Y=async()=>{var e;if(!((e=y.value)!=null&&e.city_id))return;const a=y.value.city_id;try{const i=await fetch(`${d}/sites/city/${a}`);if(i.ok,i.ok)return await i.json()}catch{}};B(async()=>{L().then(a=>{_.value=a})});const j=l(),S=l(null),Z=()=>{S.value={global:{value:null,matchMode:de.CONTAINS}}};M(()=>{Z()}),l(!1),l(!1);const k=te(),D=se();l(!1);const ee=l([]),ae=l([]);l({}),l({});const ie=l(!0);l(!1),l([]);const z=async a=>{const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch(`${d}/neighborhood/${a.neighborhood_id}`,e).then(i=>{if(!i.ok)throw new Error("La petición ha fallado");return i.json()}).then(i=>{console.log("Respuesta del servidor:",i)}).catch(i=>{console.error("Error en la petición:",i)})};async function re(){try{const a=await fetch(`${d}/employers/grouped-by-site`);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);let e=await a.json();e=e.map(i=>{const b=i.employers.reduce((c,s)=>(c[s.position]=c[s.position]||[],c[s.position].push(s),c),{});return{...i,positions:b}}),ee.value=e,ie.value=!1}catch(a){console.error("Error al obtener usuarios agrupados por sede:",a)}}async function le(){try{const a=await fetch(`${d}/employers/grouped-by-position`);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);ae.value=await a.json()}catch(a){console.error("Error al obtener usuarios agrupados por posición:",a)}}const E=l([]);return M(()=>{_e().then(a=>E.value=a)}),B(async()=>{await re(),await le()}),x(()=>D.path,()=>{L().then(a=>{_.value=a})}),(a,e)=>{const i=m("Button"),b=m("Dialog"),c=m("Dropdown"),s=m("InputText"),I=m("InputNumber"),g=m("Column"),oe=m("DataTable");return w(),T(F,null,[h.value?(w(),R(ye,{key:0,tittle:"Cargando barrios"})):A("",!0),o(b,{visible:f.value,"onUpdate:visible":e[1]||(e[1]=r=>f.value=r),style:{width:"auto"},header:"Confirmar eliminación",modal:!0,closable:!1},{default:t(()=>[he,o(i,{label:"Cancelar",onClick:e[0]||(e[0]=r=>f.value=!1),class:"p-button-text"}),o(i,{label:"Eliminar",onClick:W,class:"p-button-danger"})]),_:1},8,["visible"]),o(b,{visible:v.value,"onUpdate:visible":e[6]||(e[6]=r=>v.value=r),header:"Crear Nuevo Barrio",modal:!0,closable:!1},{footer:t(()=>[o(i,{label:"Cancelar",onClick:e[5]||(e[5]=r=>v.value=!1),class:"p-button-text"}),o(i,{label:"Crear",onClick:Q,class:"p-button-text"})]),default:t(()=>[n("div",fe,[n("div",be,[o(c,{style:{width:"100%"},modelValue:y.value,"onUpdate:modelValue":e[2]||(e[2]=r=>y.value=r),options:U.value,optionLabel:"city_name",placeholder:"Ciudad"},null,8,["modelValue","options"])]),n("div",ge,[o(c,{style:{width:"100%"},modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=r=>V.value=r),options:E.value,optionLabel:"site_name",placeholder:"Sede"},null,8,["modelValue","options"])])]),(w(!0),T(F,null,ce(u.value,(r,p)=>(w(),T("div",{key:p},[n("div",we,[o(s,{modelValue:r.name,"onUpdate:modelValue":N=>r.name=N,placeholder:"Nombre del Barrio"},null,8,["modelValue","onUpdate:modelValue"]),o(I,{modelValue:r.delivery_price,"onUpdate:modelValue":N=>r.delivery_price=N,placeholder:"Precio del Domicilio"},null,8,["modelValue","onUpdate:modelValue"]),u.value.length>1?(w(),R(i,{key:0,text:"",class:"p-0",size:"small",severity:"danger",onClick:N=>J(p)},{default:t(()=>[n("i",{class:q(["text-xl",O(H).TRASH])},null,2)]),_:2},1032,["onClick"])):A("",!0)])]))),128)),n("div",Ce,[o(i,{text:"",class:"p-0",onClick:e[4]||(e[4]=()=>{u.value.push({})})},{default:t(()=>[n("i",{class:q(["text-4xl",O(H).PLUS_CIRCLE])},null,2)]),_:1})])]),_:1},8,["visible"]),n("div",Pe,[o(oe,{ref:"dt",value:_.value,selection:j.value,"onUpdate:selection":e[9]||(e[9]=r=>j.value=r),dataKey:"id",paginator:!0,rows:10,filters:S.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25,100],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} neighborhoods",responsiveLayout:"scroll",scrollable:"","scroll-height":"62vh",frozenValue:a.lockedCustomers},{header:t(()=>[n("div",Ve,[n("p",Le,[G("Precios Domicilios "),o(i,{class:"p-2 ml-4",label:"Nuevo Barrio",onClick:e[7]||(e[7]=r=>v.value=!0)})]),n("span",Se,[ke,o(s,{class:"",modelValue:S.value.global.value,"onUpdate:modelValue":e[8]||(e[8]=r=>S.value.global.value=r),placeholder:"Buscar..."},null,8,["modelValue"])])])]),default:t(()=>[o(g,{class:"p-2",selectionMode:"multiple",headerStyle:"width: 3rem; ",frozen:""}),o(g,{class:"p-2",field:"id",header:"Id",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:t(r=>[Ee,G(" "+pe(r.data.neighborhood_id),1)]),_:1}),o(g,{class:"p-2",field:"name",header:"Barrio",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:t(r=>[Ne,o(s,{onchange:()=>z(r.data),style:{width:"100%"},modelValue:r.data.name,"onUpdate:modelValue":p=>r.data.name=p},null,8,["onchange","modelValue","onUpdate:modelValue"])]),_:1}),o(g,{class:"p-2",field:"delivery_price",header:"Precio del domicilio",sortable:!0,headerStyle:"width:min-content; min-width:min-content; "},{body:t(r=>[xe,o(I,{style:{width:"100%"},modelValue:r.data.delivery_price,"onUpdate:modelValue":[p=>r.data.delivery_price=p,()=>z(r.data)]},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(g,{field:"actions",header:"Acciones"},{body:t(r=>[o(i,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger",onClick:p=>X(r.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","selection","filters","frozenValue"])])],64)}}},je=ne(Be,[["__scopeId","data-v-6938e1f6"]]);export{je as default};