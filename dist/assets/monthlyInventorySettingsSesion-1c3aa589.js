import{m as y}from"./monthlyInventoryService-a9cc0f4a.js";import{g as o,C as N,h as B,D as S,d as r,o as T,c as $,e as l,f as a,a as s,F as j,s as F,t as w,u as A}from"./index-eb2a5b3d.js";import"./sass.default-a5b7a582.js";const E={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},R=s("span",null,"Nombre del Item",-1),G=s("span",null,"Unidad de medida ",-1),L={style:{display:"flex","justify-content":"end"}},O={class:"",style:{display:"flex","flex-direction":"column",gap:"1rem"}},q={style:{display:"flex","justify-content":"end"}},z={class:"m-2"},H={style:{display:"flex","justify-content":"center","align-items":"center"}},J={style:{"text-transform":"uppercase"}},K={style:{display:"flex","justify-content":"end"}},P={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},ee={__name:"monthlyInventorySettingsSesion",setup(Q){const I=n=>{c.value=n,d.value=!0},C=async n=>{await y.disableMonthlyItemInventory(n),d.value=!1,p()},d=o(!1),c=o({}),b=o([]),m=N(),_=o({}),g=o([]),f=o({}),u=o(!1),h=o({}),D=()=>{_.value={global:{value:null,matchMode:F.CONTAINS}}},p=async()=>{const n=m.params.sesion;b.value=await y.getAllMonthlyInventoryItems(n),g.value=await y.getAllMonthlyInventoryUnitMeasures()};B(async()=>{p()}),S(()=>m.params.sesion,async n=>{p()});const k=async n=>{const e=m.params.id;n.monthly_inventory_item_unit_measure_id=h.value.id,n.group_monthly_inventory_item_id=e,await y.InsertMonthlyItemInventory(n),u.value=!1,p()};return D(),(n,e)=>{const M=r("InputText"),V=r("Dropdown"),i=r("Button"),x=r("Dialog"),v=r("Column"),U=r("DataTable");return T(),$(j,null,[l(x,{class:"mx-2",header:"Nuevo item",style:{width:"30rem"},modal:"",visible:u.value,"onUpdate:visible":e[4]||(e[4]=t=>u.value=t)},{footer:a(()=>[s("div",L,[l(i,{onClick:e[2]||(e[2]=t=>u.value=!1),severity:"danger",label:"Cerrar"}),l(i,{onClick:e[3]||(e[3]=t=>k(f.value)),severity:"help",label:"Guardar"})])]),default:a(()=>[s("div",E,[R,l(M,{modelValue:f.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value.name=t)},null,8,["modelValue"]),G,l(V,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),optionLabel:"name",options:g.value},null,8,["modelValue","options"])])]),_:1},8,["visible"]),l(x,{class:"mx-2",header:"Borrar item",style:{width:"30rem"},modal:"",visible:d.value,"onUpdate:visible":e[7]||(e[7]=t=>d.value=t)},{footer:a(()=>[s("div",q,[l(i,{onClick:e[5]||(e[5]=t=>d.value=!1),severity:"help",label:"No"}),l(i,{onClick:e[6]||(e[6]=t=>C(c.value.id)),severity:"danger",label:"Borrar"})])]),default:a(()=>{var t;return[s("div",O,[s("span",null,"Esta seguro de eliminar el item "+w((t=c.value)==null?void 0:t.item_name)+" ?",1)])]}),_:1},8,["visible"]),s("div",z,[l(U,{style:{"max-width":"1024px","border-radius":"0.5rem","min-height":"70vh"},filters:_.value,"onUpdate:filters":e[9]||(e[9]=t=>_.value=t),class:"col-12 shadow-3 my-0 mx-auto",value:b.value,tableStyle:"min-width:30rem"},{header:a(()=>[s("div",H,[s("span",J,w(A(m).params.sesion),1)])]),footer:a(()=>[s("div",P,[l(i,{onClick:e[8]||(e[8]=t=>u.value=!0),class:"",severity:"help",style:{"border-radius":"0.5rem",height:"2rem"},icon:"pi pi-plus"})])]),default:a(()=>[l(v,{style:{width:"10%"},class:"py-2 px-0",field:"id",header:"Id"}),l(v,{style:{width:"50%"},class:"py-2 px-0",field:"item_name",header:"Nombre"}),l(v,{style:{width:"20%"},class:"py-2 px-0",field:"unit_of_measure_name",header:"Unidad de medida"}),l(v,{style:{width:"20%"},class:"py-2 px-0",field:"item_name",header:""},{body:a(t=>[s("div",K,[l(i,{onClick:W=>I(t.data),style:{height:"2rem"},severity:"danger",class:"p-0 nav-bar--button-black m-0 shadow-2",icon:"pi pi-trash"},null,8,["onClick"])])]),_:1})]),_:1},8,["filters","value"])])],64)}}};export{ee as default};
