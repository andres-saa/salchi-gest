<<<<<<<< HEAD:dist/assets/gestionCargos-b9a22eeb.js
import{r as l,H as E,h as D,a as _,o as r,c as n,d as a,w as c,b as s,F as C,e as R,U as v,q as g,t as u,n as P,u as M,P as z}from"./index-a1098956.js";const F={class:"mx-auto px-2",style:{"max-width":"700px"}},H={style:{display:"flex"},class:"grid pt-6"},J={style:{display:"flex"},class:"col-12 p-0"},q={class:"col-12 p-1",style:{display:"flex",gap:"1rem"}},K=s("p",null," Nombre",-1),Q=s("p",null," Descripcion",-1),W=s("p",null,"Seleccionar Grupo(s)",-1),X={class:"grid"},Y={class:"col-12 p-0 p-0",style:{"max-width":"900px","margin-top":"6rem",display:"flex",gap:"1rem","align-items":"center","justify-content":"end"}},Z={class:"p-2",style:{display:"flex",gap:"1rem","align-items":"center"}},ee={class:"text-2xl p-0 m-0",style:{"font-weight":"bold","text-transform":"capitalize"}},oe={class:"mx-2 mt-2 p-3",style:{"border-radius":"0.3rem","background-color":"rgba(0, 0, 0, 0.1)",color:"black",border:"px solid","align-items":"center"}},se=s("p",{class:"text-xl p-0 m-0",style:{"font-weight":"bold"}},"Description de las funciones del Grupo: ",-1),te={class:"text-sm md:text-lg p-0 m-0"},le={class:"grid px-0 mx-2"},ae={class:"col-12 p-0 my-6",style:{display:"flex",gap:"1rem","align-items":"center"}},re=s("p",{style:{"font-weight":"bold"},class:"text-xl px-0 m-0"},"Cargos ",-1),ne={style:{display:"flex",gap:"0.5rem","align-items":"center"}},ie={class:"p-0 m-0",style:{"text-transform":"capitalize"}},ue={__name:"gestionCargos",setup(de){const h=l(!1),k=l([]),T=l([]),x=l(!1),f=l(!1),w=l([]),N=l(null),b=l(["todos"]),S=E(),I=l(!0),V=async()=>{try{S.setLoading(!0,"BUSCANDO CARGOS");const e=await(await fetch(v+"/rolegroups")).json();for(const i of e){const m=await(await fetch(`${v}/rolegroup/${i.id}/roles`)).json();i.roles=m}k.value=e,I.value=!1,S.setLoading(!1,"BUSCANDO CARGOS")}catch(t){console.error(t),S.setLoading(!1,"BUSCANDO CARGOS")}},U=async()=>{try{const e=await(await fetch(v+"/roles")).json();T.value=e}catch(t){console.error(t)}},$=async()=>{f.value=!0;const t=`${v}/assign-roles-to-group-delete-olds/${N.value}`;try{if(!(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)})).ok)throw new Error("Hubo un problema al asignar los roles al grupo");h.value=!1,f.value=!1,await V()}catch(e){console.error("Error al asignar roles al grupo:",e)}},p=l({}),j=async()=>{f.value=!0;const t=`${v}/role`;try{const e={title:p.value.title,description:p.value.description},i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!i.ok)throw new Error("Hubo un problema al crear el nuevo cargo.");const{role_id:d}=await i.json();for(const m of b.value){const G=`${v}/assign-roles-to-group/${m}`;await fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([d])})}f.value=!1,x.value=!1,await V(),await U(),b.value=["todos"]}catch(e){console.error("Error al crear y asignar el nuevo rol:",e),f.value=!1}},A=t=>{N.value=t.id,w.value=t.roles.map(e=>e.id),h.value=!0};return D(V),D(U),(t,e)=>{const i=_("Checkbox"),d=_("Button"),m=_("Dialog"),G=_("InputText"),B=_("Textarea");return r(),n("div",F,[a(m,{class:"mx-2",visible:h.value,"onUpdate:visible":e[1]||(e[1]=o=>h.value=o),modal:"",header:"Seleccion de Cargos para el grupo",style:{width:"50rem",height:"80vh"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{footer:c(()=>[a(d,{onClick:$},{default:c(()=>[g("Guardar cambios")]),_:1})]),default:c(()=>[s("div",H,[(r(!0),n(C,null,R(T.value,o=>(r(),n("div",J,[s("div",q,[a(i,{modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=y=>w.value=y),value:o.id},null,8,["modelValue","value"]),s("p",null,u(o.title),1)])]))),256))])]),_:1},8,["visible"]),a(m,{visible:x.value,"onUpdate:visible":e[5]||(e[5]=o=>x.value=o),modal:"",header:"Crear nuevo Cargo",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:c(()=>[K,a(G,{modelValue:p.value.title,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value.title=o),class:"col-12"},null,8,["modelValue"]),Q,a(B,{modelValue:p.value.description,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value.description=o),class:"col-12",style:{"max-width":"100%","min-width":"100%",height:"20vh"}},null,8,["modelValue"]),W,s("div",X,[(r(!0),n(C,null,R(k.value,o=>(r(),n("div",{class:"col-12 py-1",key:o.id},[a(i,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=y=>b.value=y),value:o.id},null,8,["modelValue","value"]),g(" "+u(o.group_name),1)]))),128))]),a(d,{onClick:j,class:"mt-4"},{default:c(()=>[g("Crear nuevo cargo")]),_:1})]),_:1},8,["visible"]),s("div",Y,[a(d,{severity:"help",style:{"font-weight":"bold"},onClick:e[6]||(e[6]=o=>x.value=!0)},{default:c(()=>[g("Crear nuevo cargo")]),_:1})]),(r(!0),n(C,null,R(k.value,(o,y)=>(r(),n("div",{key:o.id,class:"my-6 m-auto shadow-2 px-2",style:{"border-radius":"0.5rem",border:"1px solid"}},[s("div",Z,[s("p",ee,u(y+1)+". Grupo "+u(o.group_name),1)]),s("div",oe,[se,s("p",te,u(o.description),1)]),s("div",le,[s("div",ae,[re,a(d,{severity:"danger",style:{"font-weight":"bold"},onClick:O=>A(o)},{default:c(()=>[g("Modificar")]),_:2},1032,["onClick"])]),(r(!0),n(C,null,R(o.roles,(O,L)=>(r(),n("div",{key:O.id,class:"col-12 md:col-6 p-1 text-sm lg:text-lg"},[s("div",ne,[s("p",ie,[s("i",{class:P(M(z).CIRCLE_FILL)},null,2),g(" "+u(L+1)+". "+u(O.title),1)])])]))),128))])]))),128))])}}};export{ue as default};
========
import{r as l,H as E,h as D,a as _,o as r,c as n,d as a,w as c,b as s,F as C,e as R,U as v,q as g,t as u,n as P,u as M,P as z}from"./index-1a945cfc.js";const F={class:"mx-auto px-2",style:{"max-width":"700px"}},H={style:{display:"flex"},class:"grid pt-6"},J={style:{display:"flex"},class:"col-12 p-0"},q={class:"col-12 p-1",style:{display:"flex",gap:"1rem"}},K=s("p",null," Nombre",-1),Q=s("p",null," Descripcion",-1),W=s("p",null,"Seleccionar Grupo(s)",-1),X={class:"grid"},Y={class:"col-12 p-0 p-0",style:{"max-width":"900px","margin-top":"6rem",display:"flex",gap:"1rem","align-items":"center","justify-content":"end"}},Z={class:"p-2",style:{display:"flex",gap:"1rem","align-items":"center"}},ee={class:"text-2xl p-0 m-0",style:{"font-weight":"bold","text-transform":"capitalize"}},oe={class:"mx-2 mt-2 p-3",style:{"border-radius":"0.3rem","background-color":"rgba(0, 0, 0, 0.1)",color:"black",border:"px solid","align-items":"center"}},se=s("p",{class:"text-xl p-0 m-0",style:{"font-weight":"bold"}},"Description de las funciones del Grupo: ",-1),te={class:"text-sm md:text-lg p-0 m-0"},le={class:"grid px-0 mx-2"},ae={class:"col-12 p-0 my-6",style:{display:"flex",gap:"1rem","align-items":"center"}},re=s("p",{style:{"font-weight":"bold"},class:"text-xl px-0 m-0"},"Cargos ",-1),ne={style:{display:"flex",gap:"0.5rem","align-items":"center"}},ie={class:"p-0 m-0",style:{"text-transform":"capitalize"}},ue={__name:"gestionCargos",setup(de){const h=l(!1),k=l([]),T=l([]),x=l(!1),f=l(!1),w=l([]),N=l(null),b=l(["todos"]),S=E(),I=l(!0),V=async()=>{try{S.setLoading(!0,"BUSCANDO CARGOS");const e=await(await fetch(v+"/rolegroups")).json();for(const i of e){const m=await(await fetch(`${v}/rolegroup/${i.id}/roles`)).json();i.roles=m}k.value=e,I.value=!1,S.setLoading(!1,"BUSCANDO CARGOS")}catch(t){console.error(t),S.setLoading(!1,"BUSCANDO CARGOS")}},U=async()=>{try{const e=await(await fetch(v+"/roles")).json();T.value=e}catch(t){console.error(t)}},$=async()=>{f.value=!0;const t=`${v}/assign-roles-to-group-delete-olds/${N.value}`;try{if(!(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)})).ok)throw new Error("Hubo un problema al asignar los roles al grupo");h.value=!1,f.value=!1,await V()}catch(e){console.error("Error al asignar roles al grupo:",e)}},p=l({}),j=async()=>{f.value=!0;const t=`${v}/role`;try{const e={title:p.value.title,description:p.value.description},i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!i.ok)throw new Error("Hubo un problema al crear el nuevo cargo.");const{role_id:d}=await i.json();for(const m of b.value){const G=`${v}/assign-roles-to-group/${m}`;await fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([d])})}f.value=!1,x.value=!1,await V(),await U(),b.value=["todos"]}catch(e){console.error("Error al crear y asignar el nuevo rol:",e),f.value=!1}},A=t=>{N.value=t.id,w.value=t.roles.map(e=>e.id),h.value=!0};return D(V),D(U),(t,e)=>{const i=_("Checkbox"),d=_("Button"),m=_("Dialog"),G=_("InputText"),B=_("Textarea");return r(),n("div",F,[a(m,{class:"mx-2",visible:h.value,"onUpdate:visible":e[1]||(e[1]=o=>h.value=o),modal:"",header:"Seleccion de Cargos para el grupo",style:{width:"50rem",height:"80vh"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{footer:c(()=>[a(d,{onClick:$},{default:c(()=>[g("Guardar cambios")]),_:1})]),default:c(()=>[s("div",H,[(r(!0),n(C,null,R(T.value,o=>(r(),n("div",J,[s("div",q,[a(i,{modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=y=>w.value=y),value:o.id},null,8,["modelValue","value"]),s("p",null,u(o.title),1)])]))),256))])]),_:1},8,["visible"]),a(m,{visible:x.value,"onUpdate:visible":e[5]||(e[5]=o=>x.value=o),modal:"",header:"Crear nuevo Cargo",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:c(()=>[K,a(G,{modelValue:p.value.title,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value.title=o),class:"col-12"},null,8,["modelValue"]),Q,a(B,{modelValue:p.value.description,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value.description=o),class:"col-12",style:{"max-width":"100%","min-width":"100%",height:"20vh"}},null,8,["modelValue"]),W,s("div",X,[(r(!0),n(C,null,R(k.value,o=>(r(),n("div",{class:"col-12 py-1",key:o.id},[a(i,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=y=>b.value=y),value:o.id},null,8,["modelValue","value"]),g(" "+u(o.group_name),1)]))),128))]),a(d,{onClick:j,class:"mt-4"},{default:c(()=>[g("Crear nuevo cargo")]),_:1})]),_:1},8,["visible"]),s("div",Y,[a(d,{severity:"help",style:{"font-weight":"bold"},onClick:e[6]||(e[6]=o=>x.value=!0)},{default:c(()=>[g("Crear nuevo cargo")]),_:1})]),(r(!0),n(C,null,R(k.value,(o,y)=>(r(),n("div",{key:o.id,class:"my-6 m-auto shadow-2 px-2",style:{"border-radius":"0.5rem",border:"1px solid"}},[s("div",Z,[s("p",ee,u(y+1)+". Grupo "+u(o.group_name),1)]),s("div",oe,[se,s("p",te,u(o.description),1)]),s("div",le,[s("div",ae,[re,a(d,{severity:"danger",style:{"font-weight":"bold"},onClick:O=>A(o)},{default:c(()=>[g("Modificar")]),_:2},1032,["onClick"])]),(r(!0),n(C,null,R(o.roles,(O,L)=>(r(),n("div",{key:O.id,class:"col-12 md:col-6 p-1 text-sm lg:text-lg"},[s("div",ne,[s("p",ie,[s("i",{class:P(M(z).CIRCLE_FILL)},null,2),g(" "+u(L+1)+". "+u(O.title),1)])])]))),128))])]))),128))])}}};export{ue as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/gestionCargos-6d56adec.js
