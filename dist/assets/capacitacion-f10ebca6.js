import{_ as N,y as g,r as u,i as R,a as r,o as s,c as m,b as f,F as k,d as O,g as l,U,u as d,ad as A,e as h,w as C,n as y,f as w}from"./index-e7a37f9b.js";const B={class:"col-12 my-6",style:{display:"flex","justify-content":"center","flex-direction":"column",gap:"1rem"}},F={style:{display:"flex","min-width":"max-content",position:"sticky",top:"3rem","background-color":"white","z-index":"99"},class:"shadow-3"},V={class:""},$={__name:"capacitacion",setup(b){const o=g(),n=u(o.params.capacitacion_id),p=u({}),I=async()=>{const c=o.params.capacitacion_id;try{const a=await fetch(`${U}/training/${c}`);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return await a.json()}catch(a){throw console.error("Error al obtener las capacitaciones:",a),a}};R(()=>{I().then(c=>p.value=c)});const v=[{name:"CONFIGURACION",to:`/capacitacion/${n.value}/configuracion/`},{name:"ARCHIVOS",to:`/capacitacion/${n.value}/archivos/`},{name:"ASISTENCIA",to:`/capacitacion/${n.value}/asistencia/`}];return(c,a)=>{const i=r("Button"),_=r("RouterLink"),x=r("RouterView");return s(),m("div",B,[f("div",F,[(s(),m(k,null,O(v,e=>f("div",V,[e.name=="CONFIGURACION"&&d(A)()==p.value.creator_id?(s(),h(_,{key:0,to:e.to},{default:C(()=>{var t;return[l(i,{class:y((t=d(o).path)!=null&&t.toUpperCase().includes("CONFIGURACION")?"selected":""),text:"",style:{"font-weight":"bold"},label:e.name},null,8,["class","label"])]}),_:2},1032,["to"])):w("",!0),e.name!=="CONFIGURACION"?(s(),h(_,{key:1,to:e.to},{default:C(()=>{var t;return[l(i,{class:y((t=d(o).path)!=null&&t.toUpperCase().includes(e.name)?"selected":""),text:"",style:{"font-weight":"bold"},label:e.name},null,8,["class","label"])]}),_:2},1032,["to"])):w("",!0)])),64))]),l(x)])}}},G=N($,[["__scopeId","data-v-12cd0237"]]);export{G as default};
