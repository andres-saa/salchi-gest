import{_ as N,o as a,c as l,F as h,e as w,b as o,m as b,n as m,u as _,a3 as f,U as B,t as u,f as k,p as $,g as z,r as g,h as x,a as A,d as y,w as E,c7 as v,q as O,a4 as S}from"./index-c77db9f7.js";import{a as R}from"./userServices-735859d1.js";import{g as U}from"./dropDownAux-749a6661.js";const I=c=>($("data-v-bf6a0b09"),c=c(),z(),c),V={class:"list-unstyled pt-0 5 m-0 mt-4 px-0",style:{position:"",display:"flex","list-style":"none"}},j={class:"py-4 mx-6 py-3 px-0"},G=I(()=>o("i",{class:""},null,-1)),D={class:"tex-center p-0",style:{height:"auto",position:"relative","min-width":"max-content","background-color":"rgba(255, 255, 255, 0)",border:"2px",display:"flex","justify-content":"center"}},F={key:0,style:{width:"100%",top:"40px",height:"5px","border-radius":"10rem","background-color":"rgb(0, 0, 0)",position:"absolute","z-index":"2"}},L=["src","onError"],M=I(()=>o("div",{style:{position:"absolute",height:"91px",bottom:"90%","background-color":"rgb(0, 0, 0)",width:"5px"}},null,-1)),q={class:"p-0 text-center",style:{width:"",overflow:"hidden",position:"absolute",height:"auto",bottom:"115%","max-width":"400px","background-color":"rgb(255, 255, 255)"}},T={cla:"",class:"text-center p-0 text-sm p-0 m-0",style:{"min-width":"max-content","font-weight":"bold",color:"black",width:"100%"}},H={cla:"",class:"text-center p-0 text-sm p-0",style:{"min-width":"max-content",width:"100%","text-transform":"uppercase"}},J={__name:"OrganigramaItem",props:{items:{type:Array,default:()=>[]}},setup(c){const p=(r,d)=>{const t={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!r||r==""||r=="N/A"?d.target.src=t.default:d.target.src=t[r.trim().toLowerCase()]};return(r,d)=>(a(),l("ul",V,[(a(!0),l(h,null,w(c.items,t=>{var s;return a(),l("li",{class:"px-0",key:t.id},[o("div",j,[G,o("div",D,[((s=t.subordinates)==null?void 0:s.length)>1?(a(),l("div",F)):b("",!0),o("div",{class:m([t.id==_(f)()?"aro-ext-imagen":"","p-1"]),style:{"border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",position:"relative","z-index":"1111"}},[o("img",{class:m([t.id==_(f)()?"aro-int-imagen":"","img-profile"]),style:{width:"1.5cm","z-index":"1000","background-color":"white",height:"1.5cm","border-radius":"50%","object-fit":"cover",border:"5px solid rgb(0, 0, 0)"},src:`${_(B)}/read-product-image/96/employer-${t.dni}`,onError:n=>p(t.gender,n)},null,42,L)],2),M,o("div",q,[o("p",T,u(t.subordinates?t.position.slice(0,30):t.position.slice(0,15))+" "+u(!t.subordinates&&t.position.length>10||t.subordinates&&t.position.length>20?"...":""),1),o("p",H,u(t.subordinates?t.name.slice(0,30):t.name.slice(0,15))+" "+u(!t.subordinates&&t.name.length>10||t.subordinates&&t.name.length>20?"...":""),1)])])]),t.subordinates&&t.subordinates.length?(a(),k(C,{key:0,items:t.subordinates},null,8,["items"])):b("",!0)])}),128))]))}},C=N(J,[["__scopeId","data-v-bf6a0b09"]]),K={class:"text-5xl mb-6",style:{"font-weight":"bold",position:"absolute"}},P={class:"py-8",style:{}},Y={__name:"organigrama",setup(c){g();const p=g(!0);g(null),x(()=>{});const r=g([]);function d(t,s=null){const n=[];for(const e of t)if(e.boss_id===s){const i=d(t,e.id);i.length>0&&(e.subordinates=i),n.push(e)}return n}return x(async()=>{const t=await U();for(const s of t){const n=await R(s==null?void 0:s.site_id),e=d(n);console.log("organigrama",e),r.value.push({site:s,organigrama:e}),p.value=!1}}),(t,s)=>{const n=A("Button");return a(),l(h,null,[p.value?(a(),k(S,{key:0,tittle:"GENERANDO ORGANIGRAMA"})):b("",!0),y(n,{onClick:s[0]||(s[0]=e=>v.value=!_(v)),style:{position:"fixed",bottom:"20px",right:"20px","z-index":"9999"},size:"large"},{default:E(()=>[O(" ver info")]),_:1}),(a(!0),l(h,null,w(r.value.filter(e=>{var i;return((i=e==null?void 0:e.site)==null?void 0:i.site_name)!="prueba"}),e=>{var i;return a(),l("div",{ref_for:!0,ref:"scrollContainer mt-8",class:"m-auto col mt-8",style:{"overflow-x":"auto","background-color":"rgb(255, 255, 255)","border-top":"6px solid rgba(0, 0, 0, 0.331)"}},[o("p",K,u((i=e==null?void 0:e.site)==null?void 0:i.site_name),1),o("div",P,[y(C,{style:{},class:"pt-8",items:e.organigrama,ref_for:!0,ref:"organigramaItem"},null,8,["items"])])],512)}),256))],64)}}};export{Y as default};
