<<<<<<<< HEAD:dist/assets/adicionales-f42f4f41.js
import{a as l}from"./aditionalService-fc3b0fa0.js";import{f as I}from"./formatoPesos-78ea101b.js";import{_ as D,v as V,r as E,h as N,k as x,a as u,o as d,c,b as a,t as r,u as g,F as v,e as B,d as s,w as _,m as F,p as T,g as z,D as S}from"./index-a1098956.js";import{u as L}from"./site-dcda7d67.js";const b=o=>(T("data-v-151a8628"),o=o(),z(),o),P={class:"m-auto",style:{"max-width":"1024px"}},R={class:"text-center text-3xl",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},U=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),M={style:{"min-width":"max-content",width:"auto"}},O=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),$={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize"}},j={style:{"text-transform":"uppercase"}},q={key:0,style:{"font-weight":"bold"}},G={__name:"adicionales",setup(o){const p=L(),m=V(),n=E({});N(async()=>{n.value=await l.getAllAditions()});const A=async(h,f)=>{try{const e={status:f},i=await l.toggleAditionalStatus(h,e);if(!i)throw new Error("Failed to update the status");console.log("Status updated successfully:",i)}catch(e){console.error("Error updating status:",e)}};return x(()=>m.path,async()=>{m.params.category_id&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),x(()=>p.site,async()=>{p.site&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),(h,f)=>{const e=u("Column"),i=u("InputSwitch"),C=u("DataTable");return d(),c(v,null,[a("div",P,[a("p",R,[U,a("span",M,"ADICIONALES DE "+r(g(p).site.site_name),1),O])]),(d(!0),c(v,null,B(n.value,(k,w)=>(d(),c("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:w},[a("p",$,r(w),1),s(C,{stripedRows:"",value:k},{default:_(()=>[s(e,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:_(t=>[a("span",j,r(t.data.aditional_item_name),1)]),_:1}),s(e,{class:"p-0 pl-3",field:"aditional_item_price",header:"Precio"},{body:_(t=>[t.data.aditional_item_price!=0?(d(),c("span",q,r(g(I)(t.data.aditional_item_price)),1)):F("",!0)]),_:1}),s(e,{style:{width:"2rem"},class:"p-0 pl-3",header:""},{body:_(t=>[s(i,{class:"p-0 m-0",modelValue:t.data.status,"onUpdate:modelValue":y=>t.data.status=y,onChange:y=>A(t.data.aditional_item_instance_id,t.data.status)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:2},1032,["value"])]))),128))],64)}}},W=D(G,[["__scopeId","data-v-151a8628"]]);export{W as default};
========
import{a as l}from"./aditionalService-c90ab3ea.js";import{f as I}from"./formatoPesos-78ea101b.js";import{_ as D,v as V,r as E,h as N,k as x,a as u,o as d,c,b as a,t as r,u as g,F as v,e as B,d as s,w as _,m as F,p as T,g as z,D as S}from"./index-1a945cfc.js";import{u as L}from"./site-f24a704b.js";const b=o=>(T("data-v-151a8628"),o=o(),z(),o),P={class:"m-auto",style:{"max-width":"1024px"}},R={class:"text-center text-3xl",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},U=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),M={style:{"min-width":"max-content",width:"auto"}},O=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),$={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize"}},j={style:{"text-transform":"uppercase"}},q={key:0,style:{"font-weight":"bold"}},G={__name:"adicionales",setup(o){const p=L(),m=V(),n=E({});N(async()=>{n.value=await l.getAllAditions()});const A=async(h,f)=>{try{const e={status:f},i=await l.toggleAditionalStatus(h,e);if(!i)throw new Error("Failed to update the status");console.log("Status updated successfully:",i)}catch(e){console.error("Error updating status:",e)}};return x(()=>m.path,async()=>{m.params.category_id&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),x(()=>p.site,async()=>{p.site&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),(h,f)=>{const e=u("Column"),i=u("InputSwitch"),C=u("DataTable");return d(),c(v,null,[a("div",P,[a("p",R,[U,a("span",M,"ADICIONALES DE "+r(g(p).site.site_name),1),O])]),(d(!0),c(v,null,B(n.value,(k,w)=>(d(),c("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:w},[a("p",$,r(w),1),s(C,{stripedRows:"",value:k},{default:_(()=>[s(e,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:_(t=>[a("span",j,r(t.data.aditional_item_name),1)]),_:1}),s(e,{class:"p-0 pl-3",field:"aditional_item_price",header:"Precio"},{body:_(t=>[t.data.aditional_item_price!=0?(d(),c("span",q,r(g(I)(t.data.aditional_item_price)),1)):F("",!0)]),_:1}),s(e,{style:{width:"2rem"},class:"p-0 pl-3",header:""},{body:_(t=>[s(i,{class:"p-0 m-0",modelValue:t.data.status,"onUpdate:modelValue":y=>t.data.status=y,onChange:y=>A(t.data.aditional_item_instance_id,t.data.status)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:2},1032,["value"])]))),128))],64)}}},W=D(G,[["__scopeId","data-v-151a8628"]]);export{W as default};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/adicionales-777a2d0b.js
