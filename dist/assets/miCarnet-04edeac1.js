import{f as u,U as d,bU as m,h as D,r as h,o as y,c as f,a as e,t as a,l as g,b as _,n as E,w as S,F as j,bY as x,q as I,P as N,k as z}from"./index-596175d6.js";import B from"./html2canvas.esm-e0a7d97b.js";const T="/images/logo blanco.png",q={class:"col-12",style:{display:"flex","justify-content":"center","flex-direction":"column","align-items":"center"}},O=e("p",{class:"px-3 py-0 mt-3 text-center text-4xl col-12",style:{"font-weight":"bold"}},"Mi carnet",-1),R={class:"carnet mb-8 mt-8 p-3",style:{"background-color":"rgba(255, 255, 255, 0)",display:"flex",width:"min-content","justify-content":"center","align-items":"center",transform:"scale(1.4)","border-radius":"0.7rem"}},V={class:"p-0 content",style:{"border-radius":"0.7rem"}},A={class:"P-7",style:{width:"5.5cm","max-width":"100%",height:"8.5cm","box-shadow":"0 0 10px rgba(0, 0, 0, 0.281)","border-radius":"0.5rem",display:"flex","justify-content":"center",overflow:"hidden",position:"relative"}},F=e("div",{style:{width:"11cm",height:"11cm","border-radius":"50%","background-color":"rgba(255,98,0,255)","box-shadow":"0 0 10px rgba(0, 0, 0, 0.288)",position:"absolute",bottom:"5cm"}},null,-1),L={style:{position:"absolute",width:"3cm",height:"3cm","z-index":"99","border-radius":"50%",top:"1.5cm",overflow:"hidden","box-shadow":"0 0 10px rgba(0, 0, 0, 0.2)"}},M=["src"],W=e("div",{style:{position:"absolute",display:"flex","align-items":"center",top:"0.5cm"}},[e("img",{style:{width:"0.8cm","object-fit":"contain"},src:T,alt:""}),e("span",{class:"ml-2 text-white",style:{"font-weight":"bold"}}," Salchimonster")],-1),G={class:"info",style:{position:"absolute",top:"4.8cm"}},J={class:"px-3 py-0 my-0 text-center text-sm",style:{"font-weight":"bold","text-transform":"uppercase"}},Y={class:"px-3 py-0 mb-2 text-center text-sm",style:{"text-transform":"capitalize"}},H={class:"px-3 py-0 my-0 text-center",style:{"font-size":"0.7rem"}},K={class:"px-3 py-0 my-0 text-center",style:{"font-size":"0.7rem"}},Q={class:"px-3 py-0 mt-0 text-center text-sm",style:{"font-weight":"bold"}},X={key:0,class:"col-12",style:{display:"flex","justify-content":"center"}},Z={class:"col-12",style:{display:"flex","justify-content":"center"}},se={__name:"miCarnet",setup(ee){const s=u({}),l=u(!1),b=async o=>{fetch(`${d}/employer/dni/${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Employer data:",t),s.value=t}).catch(t=>{console.error("There has been a problem with your fetch operation:",t),s.value={}})},w=async()=>{l.value=!0;try{const o=document.querySelector(".carnet"),t=document.querySelector(".content");if(!o){console.error("Elemento carnet no encontrado");return}const n=document.querySelector(".fotoPerfil");if(!n){console.error("Elemento fotoPerfil no encontrado");return}n.src=U,t.style.border="1px solid  rgba(255,98,0,255)",await new Promise((P,$)=>{n.onload=P,n.onerror=$});const c=(await B(o,{scale:2,useCORS:!0,allowTaint:!1})).toDataURL("image/png").replace("image/png","image/octet-stream"),r=document.createElement("a");r.download=`carnet-${x()}.png`,r.href=c,document.body.appendChild(r),r.click(),document.body.removeChild(r),t.style.border="none",l.value=!1}catch(o){console.error("Error al descargar el carnet:",o)}};function v(o){return`https://api.allorigins.win/raw?url=${encodeURIComponent(o)}`}const k=`${d}/read-product-image/600/employer-${m()}`,U=v(k),C=()=>{const o=new Date().getTime();return`${d}/read-product-image/600/employer-${m()}?timestamp=${o}`};return D(()=>{b(m())}),(o,t)=>{var i,c;const n=h("ProgressSpinner"),p=h("Button");return y(),f(j,null,[e("div",q,[O,e("div",R,[e("div",V,[e("div",A,[F,e("div",L,[e("img",{class:"fotoPerfil",style:{"object-fit":"cover",width:"100%","background-color":"white"},src:C(),alt:""},null,8,M)]),W,e("div",G,[e("p",J,a(s.value.name),1),e("p",Y,a(s.value.position),1),e("p",H,"Email: "+a(((i=s.value)==null?void 0:i.email)||""),1),e("p",K,"Telefono: "+a(((c=s.value)==null?void 0:c.phone)||""),1),e("p",Q,"ID "+a(g(x)()),1)])])])])]),l.value?(y(),f("div",X,[_(n,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):E("",!0),e("div",Z,[_(p,{onClick:t[0]||(t[0]=r=>w())},{default:S(()=>[e("i",{class:I([g(N).DOWNLOAD,"mr-2"])},null,2),z(" Descargar")]),_:1})])],64)}}};export{se as default};