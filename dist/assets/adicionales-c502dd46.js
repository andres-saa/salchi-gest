import{a as l}from"./aditionalService-f4c4a4d5.js";import{f as k}from"./formatoPesos-2a38d2e7.js";import{_ as D,u as V,r as E,i as N,k as x,a as _,o as p,c as u,b as e,t as d,l as g,F as v,e as B,d as s,w as c,p as F,g as T,s as S}from"./index-9a92106e.js";import{u as z}from"./site-f4659c22.js";const b=o=>(F("data-v-8d09934e"),o=o(),T(),o),L={class:"m-auto",style:{"max-width":"1024px"}},P={class:"text-center text-3xl",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},R=b(()=>e("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),U={style:{"min-width":"max-content",width:"auto"}},M=b(()=>e("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),O={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize"}},$={style:{"text-transform":"uppercase"}},j={style:{"font-weight":"bold"}},q={__name:"adicionales",setup(o){const r=z(),m=V(),n=E({});N(async()=>{n.value=await l.getAllAditions()});const A=async(h,f)=>{try{const a={status:f},i=await l.toggleAditionalStatus(h,a);if(!i)throw new Error("Failed to update the status");console.log("Status updated successfully:",i)}catch(a){console.error("Error updating status:",a)}};return x(()=>m.path,async()=>{m.params.category_id&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),x(()=>r.site,async()=>{r.site&&(n.value=await l.getAllAditions(),await S())},{deep:!0}),(h,f)=>{const a=_("Column"),i=_("InputSwitch"),C=_("DataTable");return p(),u(v,null,[e("div",L,[e("p",P,[R,e("span",U,"ADICIONALES DE "+d(g(r).site.site_name),1),M])]),(p(!0),u(v,null,B(n.value,(I,w)=>(p(),u("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:w},[e("p",O,d(w),1),s(C,{stripedRows:"",value:I},{default:c(()=>[s(a,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:c(t=>[e("span",$,d(t.data.aditional_item_name),1)]),_:1}),s(a,{class:"p-0",field:"aditional_item_price",header:"Precio"},{body:c(t=>[e("span",j,d(g(k)(t.data.aditional_item_price)),1)]),_:1}),s(a,{style:{},class:"p-0 pl-4",header:"",headerStyle:"width:min-content;max-width:min-content;"},{body:c(t=>[s(i,{class:"p-0 m-0",modelValue:t.data.status,"onUpdate:modelValue":y=>t.data.status=y,onChange:y=>A(t.data.aditional_item_instance_id,t.data.status)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:2},1032,["value"])]))),128))],64)}}},Q=D(q,[["__scopeId","data-v-8d09934e"]]);export{Q as default};
