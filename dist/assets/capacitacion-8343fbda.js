import{u as v,f as p,g as R,r,o,c as _,a as m,F as f,b as k,d as i,U as A,k as O,N as V,j as h,w as c,v as y,t as C,A as N}from"./index-db2eb84a.js";const x={class:"col-12",style:{display:"flex","justify-content":"center",gap:"1rem"}},B={class:"",style:{display:"flex",gap:"1rem"}},F={__name:"capacitacion",setup(U){const l=v(),n=p(l.params.capacitacion_id),u=p({}),g=async()=>{const e=l.params.capacitacion_id;try{const a=await fetch(`${A}/training/${e}`);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return await a.json()}catch(a){throw console.error("Error al obtener las capacitaciones:",a),a}};R(()=>{g().then(e=>u.value=e)});const w=[{name:"CONFIGURACION",to:`/capacitacion/${n.value}/configuracion/`},{name:"ARCHIVOS",to:`/capacitacion/${n.value}/archivos/`},{name:"ASISTENCIA",to:`/capacitacion/${n.value}/asistencia/`}];return(e,a)=>{const s=r("Button"),d=r("RouterLink"),I=r("RouterView");return o(),_(f,null,[m("div",x,[(o(),_(f,null,k(w,t=>m("div",B,[t.name=="CONFIGURACION"&&O(V)()==u.value.creator_id?(o(),h(d,{key:0,to:t.to},{default:c(()=>[i(s,{outlined:"",style:{"font-weight":"bold"}},{default:c(()=>[y(C(t.name),1)]),_:2},1024)]),_:2},1032,["to"])):N("",!0),t.name!=="CONFIGURACION"?(o(),h(d,{key:1,to:t.to},{default:c(()=>[i(s,{outlined:"",style:{"font-weight":"bold"}},{default:c(()=>[y(C(t.name),1)]),_:2},1024)]),_:2},1032,["to"])):N("",!0)])),64))]),i(I)],64)}}};export{F as default};
