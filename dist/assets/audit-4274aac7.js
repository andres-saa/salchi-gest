import{v as u,a as n,o as _,c as x,b as e,d as t,w as c,q as r,s as i,u as a}from"./index-5f448c56.js";const p={class:"",style:{"border-radius":"1rem"}},h=e("p",{class:"p-3 text-2xl text-center",style:{"font-weight":"bold"}},[e("i",{class:"fa-solid fa-folder-open"}),r(" Auditorias")],-1),y=e("p",{class:"text-center text-xl p-4",style:{color:"red","font-weight":"bold"}},[r(" Este apartado se encuentra en desarrollo. favor realizar su auditoria como lo hace de manera habitual cualquier duda contactar con el area de desarrollo y tecnologia lunes a viernes de 4:30 am a 6:00 pm , "),e("br"),r(" sabados de 5:00 am a 12:00pm +57 322 689 2988, feliz jornada y muchas gracias. ")],-1),f={class:"",style:{display:"flex",gap:"1rem","overflow-x":"auto","justify-content":"center","align-items":"center"}},m={class:""},b=e("span",{class:"text-xl"}," | ",-1),v={class:""},g=e("span",{class:"text-xl"}," | ",-1),k={class:""},w={class:""},L={__name:"audit",setup(j){const s=u();return(B,R)=>{const o=n("Button"),l=n("RouterLink"),d=n("RouterView");return _(),x("div",p,[h,y,e("div",f,[e("div",m,[t(l,{to:"/auditorias/lista"},{default:c(()=>[t(o,{class:"text-xl",text:"",label:"Listado",style:i([a(s).path.includes("lista")?"color:black;":"color:gray;",{display:"flex","box-shadow":"none","justify-content":"center","align-items":"center"}])},null,8,["style"])]),_:1})]),b,e("div",v,[t(l,{to:"/auditorias/nueva"},{default:c(()=>[t(o,{class:"text-xl",text:"",label:"Nueva",style:i([a(s).path.includes("nueva")?"color:black;":"color:gray;",{display:"flex","justify-content":"center","align-items":"center","box-shadow":"none"}]),outlined:!a(s).path.includes("nueva")},null,8,["style","outlined"])]),_:1})]),g,e("div",k,[t(l,{to:"/auditorias/checklist"},{default:c(()=>[t(o,{style:i([a(s).path.includes("checklist")?"color:black;":"color:gray;",{display:"flex","justify-content":"center","align-items":"center","box-shadow":"none"}]),class:"text-xl",text:"",label:"checkList",outlined:!a(s).path.includes("check")},null,8,["style","outlined"])]),_:1})])]),e("div",w,[t(d)])])}}};export{L as default};