import{a as l}from"./aditionalService-5baec276.js";import{f as k}from"./formatoPesos-8aa989a0.js";import{_ as V,y as D,r as E,i as N,x,a as u,o as d,c,b as a,t as r,u as g,F as v,d as B,g as s,w as _,f as F,p as T,h as z,G as b}from"./index-e7a37f9b.js";import{u as L}from"./site-21b20e0d.js";const S=o=>(T("data-v-e454b161"),o=o(),z(),o),P={class:"m-auto",style:{"max-width":"1024px"}},R={class:"text-center text-3xl",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},U=S(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),G={style:{"min-width":"max-content",width:"auto"}},M=S(()=>a("div",{style:{width:"100%",height:"5px","min-width":"max-content","background-color":"#ff6200"}},null,-1)),O={class:"text-center text-2xl",style:{"font-weight":"bold","text-transform":"capitalize"}},$={style:{"text-transform":"uppercase"}},j={key:0,style:{"font-weight":"bold"}},q={__name:"adicionales",setup(o){const p=L(),m=D(),n=E({});N(async()=>{n.value=await l.getAllAditions()});const A=async(h,f)=>{try{const e={status:f},i=await l.toggleAditionalStatus(h,e);if(!i)throw new Error("Failed to update the status");console.log("Status updated successfully:",i)}catch(e){console.error("Error updating status:",e)}};return x(()=>m.path,async()=>{m.params.category_id&&(n.value=await l.getAllAditions(),await b())},{deep:!0}),x(()=>p.site,async()=>{p.site&&(n.value=await l.getAllAditions(),await b())},{deep:!0}),(h,f)=>{const e=u("Column"),i=u("InputSwitch"),C=u("DataTable");return d(),c(v,null,[a("div",P,[a("p",R,[U,a("span",G,"ADICIONALES DE "+r(g(p).site.site_name),1),M])]),(d(!0),c(v,null,B(n.value,(I,y)=>(d(),c("div",{class:"m-auto col-12",style:{"max-width":"600px"},key:y},[a("p",O,r(y),1),s(C,{stripedRows:"",value:I},{default:_(()=>[s(e,{style:{"text-transform":"capitalize"},class:"p-0",field:"aditional_item_name",header:"Nombre"},{body:_(t=>[a("span",$,r(t.data.aditional_item_name),1)]),_:1}),s(e,{class:"p-0 pl-3",field:"aditional_item_price",header:"Precio"},{body:_(t=>[t.data.aditional_item_price!=0?(d(),c("span",j,r(g(k)(t.data.aditional_item_price)),1)):F("",!0)]),_:1}),s(e,{style:{width:"2rem"},class:"p-0 pl-3",header:""},{body:_(t=>[s(i,{class:"p-0 m-0",modelValue:t.data.status,"onUpdate:modelValue":w=>t.data.status=w,onChange:w=>A(t.data.aditional_item_instance_id,t.data.status)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:2},1032,["value"])]))),128))],64)}}},W=V(q,[["__scopeId","data-v-e454b161"]]);export{W as default};
