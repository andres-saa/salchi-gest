import{f as t,u as h,h as u,r as l,o as d,c as m,a as s,t as g,d as o,w as a,l as p,n as S,F as b,k as _}from"./index-29fab08c.js";import{a as y}from"./dropDownAux-20f78ced.js";/* empty css                                                                  */const x="/images/files.jpg",w={cla:"",style:{"z-index":"99","max-width":"1024px",display:"flex","align-items":"center","justify-content":"space-between"},class:"col-12 mb-8 m-auto"},v={class:"text-4xl"},N={class:"grid m-auto p-0 col-12",style:{"max-width":"1024px"}},R={key:0,class:"col-12",style:{opacity:"0.3",position:"",height:"60vh","object-fit":"cover"},src:x,alt:""},E={__name:"ManageSite",setup(k){t({});const n=h(),i=t({});return t(null),t(null),t(null),t(null),t(null),t(null),t(!1),t(null),t([]),u(()=>{y(n.params.site_id)}),u(()=>{const e=localStorage.getItem("currentSiteFiles");e&&(i.value=JSON.parse(e))}),(e,B)=>{const r=l("Button"),c=l("RouterLink"),f=l("RouterView");return d(),m(b,null,[s("div",w,[s("div",null,[s("h5",v,"SALCHIMONSTER "+g(i.value.site_name),1),o(c,{to:`/site/${p(n).params.site_id}/documentos`},{default:a(()=>[o(r,{class:"p-button-rounded mr-5 p-button-danger",style:{"font-weight":"bold"},outlined:""},{default:a(()=>[_(" DOCUMENTOS")]),_:1})]),_:1},8,["to"]),o(c,{to:`/site/${p(n).params.site_id}/recibos`,style:{"border-radius":""}},{default:a(()=>[o(r,{class:"p-button-rounded",outlined:"",style:{"font-weight":"bold"}},{default:a(()=>[_(" RECIBOS")]),_:1})]),_:1},8,["to"])])]),s("div",N,[!e.$route.path.includes("recibos")&&!e.$route.path.includes("documentos")?(d(),m("img",R)):S("",!0),o(f)])],64)}}};export{E as default};