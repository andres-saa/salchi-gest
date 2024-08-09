import{_ as V,r as c,l as $,h as z,a as g,o as _,c as m,d as u,w as F,b as t,q as o,t as a,u as v,F as w,e as q,s as S,B as O,a5 as G,p as K,g as P,i as W}from"./index-db916a24.js";import{m as k}from"./monthlyInventoryService-ce9b510b.js";import"./sass.default-a5b7a582.js";const n=p=>(K("data-v-11fe5262"),p=p(),P(),p),H=n(()=>t("span",{style:{color:"red"}},"Esta accion no se puede deshacer luego, piensalo bien.",-1)),Y=n(()=>t("br",null,null,-1)),J=n(()=>t("br",null,null,-1)),Q={style:{"text-transform":"capitalize"}},X={style:{}},Z=n(()=>t("b",{class:"text-l"},"ES CORRECTO",-1)),ee=n(()=>t("b",{class:"text-l"},"PERSONALMENTE.",-1)),te=n(()=>t("br",null,null,-1)),se=n(()=>t("br",null,null,-1)),oe=n(()=>t("b",null,"Deseas continuar?",-1)),ne={style:{display:"flex","justify-content":"end"}},ae={class:"md:mx-auto p-3 md:shadow-2 mb-6",style:{"max-width":"700px","border-radius":"0.5rem","min-height":"80vh","margin-top":"3rem","background-color":"white"}},re=n(()=>t("p",{class:"text-2xl my-3 text-center"},[t("b",null," Reportar inventario ")],-1)),le={class:"text-xl py-0 my-0"},ie=n(()=>t("b",null," Fechah : ",-1)),de={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},ue=n(()=>t("b",null," Responsable : ",-1)),ce={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},_e=n(()=>t("b",null," sede : ",-1)),me={class:"text-center p-1 my-3",style:{"background-color":"#00000020","border-radius":"0.2rem"}},pe={style:{"text-transform":"uppercase"}},ye={style:{"text-transform":"uppercase",display:"flex",gap:"1rem","justify-content":"space-between","font-weight":"bold"},class:"col-12 my-2 md:col-8 p-0"},he={class:"col-12 md:col-4 px-0 py-1 md:pl-3",style:{display:"flex","align-items":"center",gap:"1rem"}},ve=["onUpdate:modelValue","suffix"],fe={class:"col-12 p-0 mt-3",style:{display:"flex","justify-content":"end"}},be={__name:"reportMonthlyInventory",setup(p){c({items:[{}]});const y=c([]),h=c(!1),d=$();c([]);const f=c(!1);function D(s){const e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];let r=s.getDate(),b=s.getMonth(),x=s.getFullYear();return`${r} de ${e[b]} del ${x}`}const B={1:"#FF0000",2:"#FF4500",3:"#FFD700",4:"#FF4500",5:"#0000FF",6:"#4B0082",7:"#800080",8:"#EE82EE",9:"#FFC0CB",10:"#00FFFF",11:"#3CB371",12:"#00008B",13:"#FFA500",14:"#A52A2A",15:"#FFFF00"},M=s=>s.map(e=>e).map(e=>e.items).flat().map(e=>({monthly_inventory_item_id:e.item_id,quantity:e.quantity,monthly_inventory_unit_measure_id:e.unit_measure_id}));function U(s){s.key===","&&(alert("Por favor usa punto ( . ) para los decimales, gracias"),s.preventDefault())}const T=s=>s.map(e=>e).map(e=>e.items).flat().map(e=>({monthly_inventory_item_id:e.item_id,quantity:e.quantity||0,monthly_inventory_unit_measure_id:e.unit_measure_id})),I=()=>{var s,e;return{monthly_inventory:{responsible_id:(s=d.rawUserData)==null?void 0:s.id,site_id:(e=d.rawUserData)==null?void 0:e.site_id},monthly_inventory_items:M([...y.value])}},R=()=>{const s=I();if(f.value=!0,s.monthly_inventory_items.some(e=>e.quantity===null)){alert("Debes llenar todos los espacios");return}h.value=!0},j=async()=>{const s=I();s.monthly_inventory_items=T([...y.value]),await k.InsertMonthlyInventory(s),W.push("/monthly-inventory/monthly-inventory-my-reports/")};return z(async()=>{const s=await k.getGroupsWithItems();s.map(e=>e.items.map(r=>r.quantity=null)),y.value=s,console.log(s)}),(s,e)=>{var C,E;const r=g("Button"),b=g("Dialog"),x=g("Tag");return _(),m(w,null,[u(b,{closable:!1,style:{width:"30rem"},class:"m-2",header:"Estas seguro Monstruo?",modal:"",visible:h.value,"onUpdate:visible":e[1]||(e[1]=l=>h.value=l)},{footer:F(()=>[t("div",ne,[u(r,{onClick:e[0]||(e[0]=()=>{h.value=!1,f.value=!1}),label:"Mejor lo reviso de nuevo!",severity:"help"}),u(r,{text:"",label:"Firmar",onClick:j,severity:"danger"})])]),default:F(()=>{var l;return[H,o(),Y,o(),J,o(" Hola, "),t("span",Q,a((l=v(d).rawUserData)==null?void 0:l.name.toLowerCase())+" ! ",1),t("p",X,[o(" Al precionar "),u(r,{severity:"danger",text:"",class:"p-0",label:"Firmar"}),o(" das fe de que el reporte del inventario para la sede "),t("b",null,"Salchimonster "+a(v(d).rawUserData.site_name),1),o(" el dia "+a(D(new Date))+" que estas intentando enviar ",1),Z,o(" y lo has verificado "),ee,o(),te,o(),se,oe])]}),_:1},8,["visible"]),t("div",ae,[re,t("p",le,[ie,o(" "+a(D(new Date)),1)]),t("p",de,[ue,o(a((C=v(d).rawUserData)==null?void 0:C.name.toLowerCase()),1)]),t("p",ce,[_e,o(a((E=v(d).rawUserData)==null?void 0:E.site_name.toLowerCase()),1)]),(_(!0),m(w,null,q(y.value,(l,A)=>(_(),m("div",{key:A},[t("p",me,[t("b",pe,a(l.group_name),1)]),(_(!0),m(w,null,q(l.items,(i,L)=>(_(),m("div",{style:{"align-items":"center"},class:"grid m-0",key:L},[t("div",ye,[t("span",null,a(i.item_name),1),o(),u(x,{style:S([{"border-radius":"0.3rem"},`background-color:${B[i.unit_measure_id]}`])},{default:F(()=>[o(a(i.unit_measure),1)]),_:2},1032,["style"])]),t("div",he,[O(t("input",{onKeydown:U,type:"number",useGrouping:!1,showButtons:"",min:0,maxFractionDigits:2,"onUpdate:modelValue":N=>i.quantity=N,suffix:` ${i.unit_measure}`,maxDecimal:"5",style:S([{width:"100%","border-radius":"0.3rem",border:"2px solid #00000030"},i.quantity==null&&f.value?"border:2px solid red;border-radius:0.3rem":""]),class:"p-3 md:p-2"},null,44,ve),[[G,i.quantity]])])]))),128))]))),128)),t("div",fe,[u(r,{onClick:R,severity:"help",label:"Enviar Reporte"})])])],64)}}},we=V(be,[["__scopeId","data-v-11fe5262"]]);export{we as default};
