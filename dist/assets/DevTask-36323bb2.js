import{_ as p,v,a as t,o as n,c,b as e,F as m,e as h,d as o,w as k,n as B}from"./index-c77db9f7.js";const f={class:"container p-2"},x={class:"sub-container"},y={class:"nav"},w={class:"nav_button_list"},V={__name:"DevTask",setup(b){const r=v(),_=[{name:"En curso",to:"/dev-tasks/current"},{name:"Programadas",to:"/dev-tasks/scheduled"},{name:"Historial",to:"/dev-tasks/history"}],l=a=>r.path.includes(a);return(a,g)=>{const u=t("Button"),i=t("router-link"),d=t("routerView");return n(),c("div",f,[e("div",x,[e("nav",y,[e("ul",w,[(n(),c(m,null,h(_,s=>e("li",null,[o(i,{to:s.to},{default:k(()=>[o(u,{class:B(["p-0 py-2",l(s.to)?"selected":""]),severity:"help",label:s.name},null,8,["class","label"])]),_:2},1032,["to"])])),64))])])]),o(d)])}}},D=p(V,[["__scopeId","data-v-d212e530"]]);export{D as default};
