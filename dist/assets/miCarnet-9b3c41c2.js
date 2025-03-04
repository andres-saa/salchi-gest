import{B as E,h as m,U as p,cb as u,i as j,g as h,o as f,c as y,a as e,t as a,u as _,b as x,k as I,f as B,a8 as b,d as L,V as N,q as z}from"./index-03a193b1.js";import{a as R}from"./html2canvas.esm-6e01b359.js";const T="/images/logo blanco.png",V={class:"col-12",style:{display:"flex","justify-content":"center","flex-direction":"column","align-items":"center"}},q=e("p",{class:"px-3 py-0 mt-3 text-center text-4xl col-12",style:{"font-weight":"bold"}},"Mi carnet",-1),O={class:"carnet mb-8 mt-8 p-3",style:{"background-color":"rgba(255, 255, 255, 0)",display:"flex",width:"min-content","justify-content":"center","align-items":"center",transform:"scale(1.4)","border-radius":"0.7rem"}},A={class:"p-0 content",style:{"border-radius":"0.7rem"}},M={class:"P-7",style:{width:"5.5cm","max-width":"100%",height:"8.5cm","box-shadow":"0 0 10px rgba(0, 0, 0, 0.281)","border-radius":"0.5rem",display:"flex","justify-content":"center",overflow:"hidden",position:"relative"}},W=e("div",{style:{width:"11cm",height:"11cm","border-radius":"50%","background-color":"rgba(255,98,0,255)","box-shadow":"0 0 10px rgba(0, 0, 0, 0.288)",position:"absolute",bottom:"5cm"}},null,-1),G={style:{position:"absolute",width:"3cm",height:"3cm","z-index":"99","border-radius":"50%",top:"1.5cm",overflow:"hidden","box-shadow":"0 0 10px rgba(0, 0, 0, 0.2)"}},J=["src"],F=e("div",{style:{position:"absolute",display:"flex","align-items":"center",top:"0.5cm"}},[e("img",{style:{width:"0.8cm","object-fit":"contain"},src:T,alt:""}),e("span",{class:"ml-2 text-white",style:{"font-weight":"bold"}}," Salchimonster")],-1),H={class:"info",style:{position:"absolute",top:"4.8cm"}},K={class:"px-3 py-0 my-0 text-center text-sm",style:{"font-weight":"bold","text-transform":"uppercase"}},Q={class:"px-3 py-0 mb-2 text-center text-sm",style:{"text-transform":"capitalize"}},X={class:"px-3 py-0 my-0 text-center",style:{"font-size":"0.7rem"}},Y={class:"px-3 py-0 my-0 text-center",style:{"font-size":"0.7rem"}},Z={class:"px-3 py-0 mt-0 text-center text-sm",style:{"font-weight":"bold"}},ee={key:0,class:"col-12",style:{display:"flex","justify-content":"center"}},te={class:"col-12",style:{display:"flex","justify-content":"center"}},re={__name:"miCarnet",setup(oe){const c=E(),w=m(!0),s=m({}),i=m(!1),v=async o=>{c.setLoading(!0,"Cargando carnet"),fetch(`${p}/employer/dni/${o}`).then(t=>{if(!t.ok)throw c.setLoading(!1,"Cargando carnet"),new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Employer data:",t),s.value=t,c.setLoading(!1,"Cargando carnet"),w.value=!1}).catch(t=>{c.setLoading(!1,"Cargando carnet"),console.error("There has been a problem with your fetch operation:",t),s.value={}})},C=async()=>{i.value=!0;try{const o=document.querySelector(".carnet"),t=document.querySelector(".content");if(!o){console.error("Elemento carnet no encontrado");return}const n=document.querySelector(".fotoPerfil");if(!n){console.error("Elemento fotoPerfil no encontrado");return}n.src=P,t.style.border="1px solid  rgba(255,98,0,255)",await new Promise(($,D)=>{n.onload=$,n.onerror=D});const l=(await R(o,{scale:2,useCORS:!0,allowTaint:!1})).toDataURL("image/png").replace("image/png","image/octet-stream"),r=document.createElement("a");r.download=`carnet-${b()}.png`,r.href=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),t.style.border="none",i.value=!1}catch(o){console.error("Error al descargar el carnet:",o)}};function k(o){return`https://api.allorigins.win/raw?url=${encodeURIComponent(o)}`}const U=`${p}/read-product-image/600/employer-${u()}`,P=k(U),S=()=>{const o=new Date().getTime();return`${p}/read-product-image/600/employer-${u()}?timestamp=${o}`};return j(()=>{v(u())}),(o,t)=>{var d,l;const n=h("ProgressSpinner"),g=h("Button");return f(),y("div",null,[e("div",V,[q,e("div",O,[e("div",A,[e("div",M,[W,e("div",G,[e("img",{class:"fotoPerfil",style:{"object-fit":"cover",width:"100%","background-color":"white"},src:S(),alt:""},null,8,J)]),F,e("div",H,[e("p",K,a(s.value.name),1),e("p",Q,a(s.value.position),1),e("p",X,"Email: "+a(((d=s.value)==null?void 0:d.email)||""),1),e("p",Y,"Telefono: "+a(((l=s.value)==null?void 0:l.phone)||""),1),e("p",Z,"ID "+a(_(b)()),1)])])])])]),i.value?(f(),y("div",ee,[x(n,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):I("",!0),e("div",te,[x(g,{onClick:t[0]||(t[0]=r=>C())},{default:B(()=>[e("i",{class:L([_(N).DOWNLOAD,"mr-2"])},null,2),z(" Descargar")]),_:1})])])}}};export{re as default};
