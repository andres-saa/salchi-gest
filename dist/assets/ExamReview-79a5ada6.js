import{_ as b,r as l,q as g,a as r,o as u,e as w,w as n,s as N,g as B,b as e,t as s,c as I,m as S,f as k,p as C,h as D}from"./index-87ceccd5.js";const i=o=>(C("data-v-b9925ce6"),o=o(),D(),o),E={style:{display:"flex","flex-direction":"column"}},M={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},T={style:{"min-width":"max-content",margin:"0",padding:"0"},class:"p-text-secondary m-0 p-0"},V={class:"m-0"},H=i(()=>e("div",null,null,-1)),R={class:"m-0"},F={key:0},O=i(()=>e("b",null,"Notas",-1)),q=i(()=>e("br",null,null,-1)),A=i(()=>e("div",{style:{display:"flex",gap:"1rem"}},null,-1)),U={__name:"ExamReview",setup(o){const a=l(!1),v=l(null),h=()=>{v.value={global:{value:null,matchMode:N.CONTAINS}}},x=l([]);return g(()=>{h()}),(j,c)=>{const y=r("Timeline"),f=r("Dialog");return u(),w(f,{class:"mx-2",visible:a.value,"onUpdate:visible":c[0]||(c[0]=t=>a.value=t),modal:"",header:"Historial mi solicitud",style:{width:"30rem"}},{default:n(()=>[B(y,{value:x.value},{opposite:n(t=>{var _,d,p,m;return[e("div",E,[e("p",M,s((_=t.item.time)==null?void 0:_.split(" ")[0]),1),e("p",T,s((m=(p=(d=t.item.time)==null?void 0:d.split(" "))==null?void 0:p.slice(2,3))==null?void 0:m[0]),1)])]}),content:n(t=>[e("p",V,[e("b",null,s(t.item.lap),1)]),H,e("p",R,s(t.item.responsible),1),t.item.notes?(u(),I("p",F,[O,S(" "+s(t.item.notes),1)])):k("",!0),q,A]),_:1},8,["value"])]),_:1},8,["visible"])}}},G=b(U,[["__scopeId","data-v-b9925ce6"]]);export{G as default};