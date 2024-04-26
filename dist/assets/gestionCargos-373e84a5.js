import{r as a,y as E,l as A,a as m,o as n,c as r,d as o,f as l,D as z,w as d,F as _,e as k,U as v,j as g,t as u,n as M,s as F,P as J}from"./index-a2618755.js";const H={key:0,class:"col-12",style:{display:"flex","flex-direction":"column","pointer-events":"none","align-items":"center","justify-content":"center",position:"fixed","z-index":"1000",left:"0",top:"0",height:"100%","background-color":"rgba(0, 0, 0, 0.5)"}},W=o("p",{class:"text-3xl",style:{"font-weight":"bold",color:"white","text-shadow":"0 0 10px rgba(0, 0, 0, 0.551)"}},"BUSCANDO CARGOS",-1),q={style:{display:"flex"}},K={style:{display:"flex"},class:"grid pt-6"},Q={style:{display:"flex"},class:"col-12 p-0"},X={class:"col-12 p-1",style:{display:"flex",gap:"1rem"}},Y=o("p",null," Nombre",-1),Z=o("p",null," Descripcion",-1),ee=o("p",null,"Seleccionar Grupo(s)",-1),oe={class:"grid"},se={class:"col-12 p-0 m-auto",style:{"max-width":"900px",display:"flex",gap:"1rem","align-items":"center"}},te={class:"p-5",style:{display:"flex",gap:"1rem","align-items":"center"}},le={class:"text-2xl p-0 m-0",style:{"font-weight":"bold","text-transform":"capitalize"}},ae={class:"mx-5 my-0 p-5",style:{"border-radius":"0.5rem","background-color":"rgba(252, 155, 0, 0.105)",display:"1rem","align-items":"center"}},ne=o("p",{class:"text-xl p-0 m-0",style:{"font-weight":"bold"}},"Description de las funciones del Grupo: ",-1),re={class:"text-sm md:text-lg p-0 m-0"},ie={class:"grid col-12 p-6"},ce={class:"col-12 p-0 mb-6",style:{display:"flex",gap:"1rem","align-items":"center"}},de=o("p",{style:{"font-weight":"bold"},class:"text-xl px-1 m-0"},"Cargos ",-1),ue={style:{display:"flex",gap:"0.5rem","align-items":"center"}},pe={class:"p-0 m-0",style:{"text-transform":"capitalize"}},ge={__name:"gestionCargos",setup(me){const x=a(!1),R=a([]),D=a([]),w=a(!1),f=a(!1),b=a([]),N=a(null),C=a(["todos"]),V=E(),T=a(!0),G=async()=>{try{V.setLoading(!0,"BUSCANDO CARGOS");const e=await(await fetch(v+"/rolegroups")).json();for(const c of e){const i=await(await fetch(`${v}/rolegroup/${c.id}/roles`)).json();c.roles=i}R.value=e,T.value=!1,V.setLoading(!1,"BUSCANDO CARGOS")}catch(t){console.error(t),V.setLoading(!1,"BUSCANDO CARGOS")}},U=async()=>{try{const e=await(await fetch(v+"/roles")).json();D.value=e}catch(t){console.error(t)}},I=async()=>{f.value=!0;const t=`${v}/assign-roles-to-group-delete-olds/${N.value}`;try{if(!(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b.value)})).ok)throw new Error("Hubo un problema al asignar los roles al grupo");x.value=!1,f.value=!1,await G()}catch(e){console.error("Error al asignar roles al grupo:",e)}},p=a({}),j=async()=>{f.value=!0;const t=`${v}/role`;try{const e={title:p.value.title,description:p.value.description},c=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!c.ok)throw new Error("Hubo un problema al crear el nuevo cargo.");const{role_id:y}=await c.json();for(const i of C.value){const S=`${v}/assign-roles-to-group/${i}`;await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([y])})}f.value=!1,w.value=!1,await G(),await U(),C.value=["todos"]}catch(e){console.error("Error al crear y asignar el nuevo rol:",e),f.value=!1}},B=t=>{N.value=t.id,b.value=t.roles.map(e=>e.id),x.value=!0};return A(G),A(U),(t,e)=>{const c=m("ProgressSpinner"),y=m("Checkbox"),i=m("Button"),S=m("Dialog"),$=m("InputText"),P=m("Textarea");return n(),r(_,null,[T.value?(n(),r("div",H,[W,o("div",q,[l(c,{style:{width:"100px",height:"100px"},strokeWidth:"4",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])])):z("",!0),l(S,{visible:x.value,"onUpdate:visible":e[1]||(e[1]=s=>x.value=s),modal:"",header:"Seleccion de Cargos para el grupo",style:{width:"50rem",height:"80vh"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{footer:d(()=>[l(i,{onClick:I},{default:d(()=>[g("Guardar cambios")]),_:1})]),default:d(()=>[o("div",K,[(n(!0),r(_,null,k(D.value,s=>(n(),r("div",Q,[o("div",X,[l(y,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=h=>b.value=h),value:s.id},null,8,["modelValue","value"]),o("p",null,u(s.title),1)])]))),256))])]),_:1},8,["visible"]),l(S,{visible:w.value,"onUpdate:visible":e[5]||(e[5]=s=>w.value=s),modal:"",header:"Crear nuevo Cargo",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:d(()=>[Y,l($,{modelValue:p.value.title,"onUpdate:modelValue":e[2]||(e[2]=s=>p.value.title=s),class:"col-12"},null,8,["modelValue"]),Z,l(P,{modelValue:p.value.description,"onUpdate:modelValue":e[3]||(e[3]=s=>p.value.description=s),class:"col-12",style:{"max-width":"100%","min-width":"100%",height:"20vh"}},null,8,["modelValue"]),ee,o("div",oe,[(n(!0),r(_,null,k(R.value,s=>(n(),r("div",{class:"col-12 py-1",key:s.id},[l(y,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=h=>C.value=h),value:s.id},null,8,["modelValue","value"]),g(" "+u(s.group_name),1)]))),128))]),l(i,{onClick:j,class:"mt-4"},{default:d(()=>[g("Crear nuevo cargo")]),_:1})]),_:1},8,["visible"]),o("div",se,[l(i,{severity:"success",style:{"font-weight":"bold"},onClick:e[6]||(e[6]=s=>w.value=!0)},{default:d(()=>[g("Crear nuevo cargo")]),_:1})]),o("div",null,[(n(!0),r(_,null,k(R.value,(s,h)=>(n(),r("div",{key:s.id,class:"my-6 m-auto",style:{"max-width":"900px","border-radius":"1rem","box-shadow":"0 0 20px rgba(0, 0, 0, 0.2)"}},[o("div",te,[o("p",le,u(h+1)+". Grupo "+u(s.group_name),1)]),o("div",ae,[ne,o("p",re,u(s.description),1)]),o("div",ie,[o("div",ce,[de,l(i,{severity:"warning",style:{"font-weight":"bold"},onClick:O=>B(s)},{default:d(()=>[g("Modificar")]),_:2},1032,["onClick"])]),(n(!0),r(_,null,k(s.roles,(O,L)=>(n(),r("div",{key:O.id,class:"col-12 md:col-6 p-1 text-sm lg:text-lg"},[o("div",ue,[o("p",pe,[o("i",{class:M(F(J).CIRCLE_FILL)},null,2),g(" "+u(L+1)+". "+u(O.title),1)])])]))),128))])]))),128))])],64)}}};export{ge as default};
