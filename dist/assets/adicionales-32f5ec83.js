import{a as l}from"./aditionalService-bd1c0a64.js";import{f as I}from"./formatoPesos-2a38d2e7.js";import{_ as V,k as D,r as E,i as N,m as x,a as u,o as d,c,b as a,t as r,u as g,F as v,e as z,d as s,w as _,y as B,p as F,g as T,z as S}from"./index-50638590.js";import{u as L}from"./site-1b6f3501.js";const b=o=>(F("data-v-151a8628"),o=o(),T(),o),P={class:"m-auto",style:{"max-width":"1024px"}},R={class:"text-center text-3xl",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},U=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),M={style:{"min-width":"max-content",width:"auto"}},O=b(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),$={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize"}},j={style:{"text-transform":"uppercase"}},q={key:0,style:{"font-weight":"bold"}},G={__name:"adicionales",setup(o){const p=L(),m=D(),n=E({});N(async()=>{n.value=await l.getAllAditions()});const A=async(h,f)=>{try{const e={status:f},i=await l.toggleAditionalStatus(h,e);if(!i)throw new Error("Failed to update the status");console.log("Status updated successfully:",i)}catch(e){console.error("Error updating status:",e)}};return x(()=>m.path,async()=>{m.params.category_id&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),x(()=>p.site,async()=>{p.site&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),(h,f)=>{const e=u("Column"),i=u("InputSwitch"),C=u("DataTable");return d(),c(v,null,[a("div",P,[a("p",R,[U,a("span",M,"ADICIONALES DE "+r(g(p).site.site_name),1),O])]),(d(!0),c(v,null,z(n.value,(k,y)=>(d(),c("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:y},[a("p",$,r(y),1),s(C,{stripedRows:"",value:k},{default:_(()=>[s(e,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:_(t=>[a("span",j,r(t.data.aditional_item_name),1)]),_:1}),s(e,{class:"p-0 pl-3",field:"aditional_item_price",header:"Precio"},{body:_(t=>[t.data.aditional_item_price!=0?(d(),c("span",q,r(g(I)(t.data.aditional_item_price)),1)):B("",!0)]),_:1}),s(e,{style:{width:"2rem"},class:"p-0 pl-3",header:""},{body:_(t=>[s(i,{class:"p-0 m-0",modelValue:t.data.status,"onUpdate:modelValue":w=>t.data.status=w,onChange:w=>A(t.data.aditional_item_instance_id,t.data.status)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:2},1032,["value"])]))),128))],64)}}},W=V(G,[["__scopeId","data-v-151a8628"]]);export{W as default};
