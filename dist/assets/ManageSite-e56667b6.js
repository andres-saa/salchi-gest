import{r as t,c9 as x,h as u,v as y,k as f,a as v,o as r,c as a,b as s,t as p,u as c,F as w,e as S,m as b,d as k,s as F,U as $,i as B}from"./index-db916a24.js";import"./dropDownAux-1861a3ad.js";import{s as h}from"./siteService-9f14fa31.js";/* empty css                                                                  */const N="/images/files.jpg",V={class:"mx-auto md:p-5 px-2",style:{"max-width":"1024px","margin-top":"3rem","min-height":"calc(100vh - 9rem)"}},j={class:"text-4xl text-center col-12 m-auto p-0",style:{"font-weight":"bold",display:"flex","align-items":"center",gap:"1rem","max-width":"1024px"}},C=s("div",{style:{"background-color":"#A855F7",height:"0.5rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1),I={style:{display:"flex","align-items":"center",gap:"1rem"}},R={class:"p-0",style:{"min-width":"max-content","text-transform":"uppercase"}},E=s("div",{style:{"background-color":"#F59E0B",height:"0.5rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1),J={class:"mb-5 m-auto",style:{width:"100%",height:"100%",display:"flex","max-width":"1024px"}},M={class:"p-3",style:{display:"flex",width:"100%","overflow-x":"auto",gap:"1rem"}},O=["onClick"],U=["src"],z={style:{"font-weight":"bold","min-width":"max-content","text-transform":"uppercase"}},A={class:"grid m-auto p-0 col-12",style:{"max-width":"1024px"}},D={key:0,class:"col-12",style:{opacity:"0.3",position:"",height:"60vh","object-fit":"cover"},src:N,alt:""},P={__name:"ManageSite",setup(L){const d=t([]),i=x();u(()=>{h.getSites().then(e=>{var l;d.value=e,(l=i.currentSite)!=null&&l.site_id||i.setSite(e[0])})}),t({});const n=y(),m=t({});t(null),t(null),t(null),t(null),t(null),t(null),t(!1),t(null),t([]),u(async()=>{m.value=await h.getSiteById(n.params.site_id)}),f(()=>n.params.site_id,()=>{const e=localStorage.getItem("currentSiteFiles");e&&(m.value=JSON.parse(e))});const _=e=>{localStorage.setItem("currentSiteFiles",JSON.stringify(e)),B.push(`/site/${e.site_id}/documentos`),i.setSite(e)};return(e,l)=>{const g=v("RouterView");return r(),a("div",V,[s("div",j,[C,s("div",I,[s("p",R,p(c(i).currentSite.site_name),1)]),E]),s("div",J,[s("div",M,[(r(!0),a(w,null,S(d.value,o=>(r(),a("div",{class:"p-1",style:F([{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},c(n).params.site_id==o.site_id?"box-shadow:0 6px 0 red":" 6px solid red"])},[s("div",{onClick:T=>_(o),style:{cursor:"pointer",display:"flex","flex-direction":"column","align-items":"center"}},[s("img",{style:{width:"100%","min-width":"5rem","border-radius":"0.5rem",height:"4rem","object-fit":"cover"},src:`${c($)}/read-product-image/96/site-${o.site_id}`},null,8,U),s("p",z,p(o.site_name),1)],8,O)],4))),256))])]),s("div",A,[!e.$route.path.includes("recibos")&&!e.$route.path.includes("documentos")?(r(),a("img",D)):b("",!0),k(g)])])}}};export{P as default};
