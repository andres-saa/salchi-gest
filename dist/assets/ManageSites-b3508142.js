import{_ as A,h as a,i as g,r as _,o as i,c as p,a as e,d as f,w as v,l as u,F as C,b as N,e as h,U as y,A as U,t as D,p as M,f as O,g as z,j as G}from"./index-adcf7657.js";import{g as T,a as j}from"./userServices-ee0f7b5b.js";import{g as x,s as J}from"./dropDownAux-732931e2.js";const L=n=>(M("data-v-82b406a5"),n=n(),O(),n),R={class:"grid"},q={class:"col-12 m-auto",style:{"max-width":"1280px"}},H={class:""},K=L(()=>e("div",{class:"my-2 col-12"},[e("p",{style:{"font-weight":"bold"},class:"text-4xl text-center pl-0 ml-0"},[e("i",{class:"fa-solid fa-book"}),z(" Documentos")])],-1)),Q={class:"col-12 lg:col-6 md:col-6 xl:col-4",style:{"aspect-ratio":"4 / 3"}},W=["onClick"],X={class:"m-4 container-"},Y={class:"text-center cont-img-sede"},Z={class:"nombre-sede-cont"},P={class:"text-5xl font-bold text-white nombre-sede"},ee={style:{width:"100%",cursor:"pointer",animation:""}},te=["src"],se={__name:"ManageSites",setup(n){const S=t=>{localStorage.setItem("currentSiteFiles",JSON.stringify(t)),G.push(`/site/${t.site_id}/documentos`)},c=a({}),b=async t=>{try{const s=await j(t);c.value[t]=s}catch(s){console.error("Error al obtener usuarios por sede:",s)}};g(()=>{x().then(t=>{t.forEach(s=>b(s.site_id))})});const w=(t,s)=>{const r={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};s.target.src=r[t]||r.default};a(null);const k=a("grid");a(null);const F=a(null),V=a(null);g(()=>{x(),T().then(t=>$.value=t)});const $=a([]);return(t,s)=>{const r=_("Avatar"),B=_("AvatarGroup"),E=_("DataView");return i(),p("div",R,[e("div",q,[e("div",H,[K,f(E,{value:u(J),layout:k.value,paginator:!0,rows:9,sortOrder:F.value,sortField:V.value},{grid:v(o=>[e("div",Q,[e("div",{onClick:l=>S(o.data),style:{cursor:"pointer"}},[e("div",X,[e("div",Y,[e("div",Z,[f(B,null,{default:v(()=>{var l,m;return[(i(!0),p(C,null,N((l=c.value[o.data.site_id])==null?void 0:l.slice(0,4),d=>(i(),h(r,{shape:"circle",size:"large",style:{"background-color":"#fff",color:"#ffffff"},key:d.dni,image:`${u(y)}/read-product-image/96/employer-${d.dni}`,onError:I=>w(d.gender,I)},null,8,["image","onError"]))),128)),((m=c.value[o.data.site_id])==null?void 0:m.length)>6?(i(),h(r,{key:0,shape:"circle",size:"large",style:{"background-color":"red",color:"#ffffff"},label:`+${c.value[o.data.site_id].length-4}`},null,8,["label"])):U("",!0)]}),_:2},1024),e("div",P,[e("p",ee,D(o.data.site_name),1)])]),e("img",{src:`${u(y)}/read-product-image/300/site-${o.data.site_id}`,class:"w-12 imagen"},null,8,te)])])],8,W)])]),_:1},8,["value","layout","sortOrder","sortField"])])])])}}},ne=A(se,[["__scopeId","data-v-82b406a5"]]);export{ne as default};
