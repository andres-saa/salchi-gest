import{f as s,h,u as S,g as b,r as _,o as n,c,a as e,t as f,l as i,F as k,b as $,d as a,w as d,n as B,y as C,U as N,k as g,c4 as y,v as F}from"./index-f46c65fd.js";import{a as R}from"./dropDownAux-3f0bb8e8.js";import{u as V}from"./directorio-5f65520c.js";/* empty css                                                                  */import{s as j}from"./siteService-12afe3d8.js";const O="/images/files.jpg",z={class:"m-auto md:p-5 md:shadow-5",style:{"max-width":"1024px"}},E={class:"text-4xl text-center col-12 m-auto p-0",style:{"font-weight":"bold",display:"flex","align-items":"center",gap:"1rem","max-width":"1024px"}},I=e("div",{style:{"background-color":"#A855F7",height:"0.5rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1),M={style:{display:"flex","align-items":"center",gap:"1rem"}},T={class:"p-0",style:{"min-width":"max-content","text-transform":"uppercase"}},U=e("div",{style:{"background-color":"#F59E0B",height:"0.5rem","border-radius":"0 1rem 1rem 0",width:"100%"}},null,-1),D={class:"mb-5 m-auto",style:{width:"100%",height:"100%",display:"flex","max-width":"1024px"}},J={class:"p-3",style:{display:"flex",width:"100%","overflow-x":"auto",gap:"1rem"}},L=["onClick"],A=["src"],q={style:{"font-weight":"bold","min-width":"max-content","text-transform":"uppercase"}},G={style:{"z-index":"99","max-width":"1024px",display:"flex","align-items":"center","justify-content":"space-between"},class:"col-12 p-0 m-auto"},H={class:"col-12 md:col-6 p-0",style:{"min-width":"max-content","max-width":"40rem",display:"flex",gap:"1rem"}},K={class:"grid m-auto p-0 col-12",style:{"max-width":"1024px"}},P={key:0,class:"col-12",style:{opacity:"0.3",position:"",height:"60vh","object-fit":"cover"},src:O,alt:""},se={__name:"ManageSite",setup(Q){const u=s([]),l=V();h(()=>{j.getSites().then(t=>{var m;u.value=t,(m=l.currentSite)!=null&&m.site_id||l.setSite(t[0])})}),s({});const o=S(),x=s({});s(null),s(null),s(null),s(null),s(null),s(null),s(!1),s(null),s([]),h(()=>{R(o.params.site_id)}),b(()=>o.params.site_id,()=>{const t=localStorage.getItem("currentSiteFiles");t&&(x.value=JSON.parse(t))});const w=t=>{localStorage.setItem("currentSiteFiles",JSON.stringify(t)),F.push(`/site/${t.site_id}/documentos`),l.setSite(t)};return(t,m)=>{const p=_("Button"),v=_("RouterView");return n(),c("div",z,[e("div",E,[I,e("div",M,[e("p",T,f(i(l).currentSite.site_name),1)]),U]),e("div",D,[e("div",J,[(n(!0),c(k,null,$(u.value,r=>(n(),c("div",{class:"p-1",style:C([{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"},i(o).params.site_id==r.site_id?"box-shadow:0 6px 0 red":" 6px solid red"])},[e("div",{onClick:W=>w(r),style:{cursor:"pointer",display:"flex","flex-direction":"column","align-items":"center"}},[e("img",{style:{width:"100%","min-width":"5rem","border-radius":"0.5rem",height:"4rem","object-fit":"cover"},src:`${i(N)}/read-product-image/96/site-${r.site_id}`},null,8,A),e("p",q,f(r.site_name),1)],8,L)],4))),256))])]),e("div",G,[e("div",H,[a(i(y),{to:`/site/${i(o).params.site_id}/documentos`,style:{width:"100%"}},{default:d(()=>[a(p,{size:"small",class:"mr-3 p-button-help center",style:{"font-weight":"bold",width:"100%"}},{default:d(()=>[g(" DOCUMENTOS")]),_:1})]),_:1},8,["to"]),a(i(y),{to:`/site/${i(o).params.site_id}/recibos`,style:{width:"100%"}},{default:d(()=>[a(p,{size:"small",class:"p-button-warning",style:{"font-weight":"bold",width:"100%"}},{default:d(()=>[g(" RECIBOS")]),_:1})]),_:1},8,["to"])])]),e("div",K,[!t.$route.path.includes("recibos")&&!t.$route.path.includes("documentos")?(n(),c("img",P)):B("",!0),a(v)])])}}};export{se as default};