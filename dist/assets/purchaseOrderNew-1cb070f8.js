import{_ as R,r as c,l as V,i as $,a as g,o as p,c as _,d as u,w,b as t,s as a,t as r,u as f,F,e as k,H as q,bU as z,bL as P,p as G,g as H,j as K}from"./index-5cac3a7e.js";import"./sass.default-b8072c4d.js";import{p as B}from"./purchaseOrderService-8b231038.js";const o=m=>(G("data-v-fe7e665b"),m=m(),H(),m),W=o(()=>t("span",{style:{color:"red"}},"Esta accion no se puede deshacer luego, piensalo bien.",-1)),Y=o(()=>t("br",null,null,-1)),J=o(()=>t("br",null,null,-1)),Q={style:{"text-transform":"capitalize"}},X={style:{}},Z=o(()=>t("b",{class:"text-l"},"ES CORRECTO",-1)),ee=o(()=>t("b",{class:"text-l"},"PERSONALMENTE.",-1)),te=o(()=>t("br",null,null,-1)),se=o(()=>t("br",null,null,-1)),ae=o(()=>t("b",null,"Deseas continuar?",-1)),oe={style:{display:"flex","justify-content":"end"}},re={class:"md:mx-auto p-3 md:shadow-2 mb-6",style:{"max-width":"700px","border-radius":"0.5rem","min-height":"80vh","margin-top":"3rem","background-color":"white"}},ne=o(()=>t("p",{class:"text-2xl my-3 text-center"},[t("b",null," Generar orden de compra ")],-1)),le={class:"text-xl py-0 my-0"},ie=o(()=>t("b",null," Fechah : ",-1)),de={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},ue=o(()=>t("b",null," Responsable : ",-1)),ce={class:"text-xl py-0 my-0",style:{"text-transform":"capitalize"}},pe=o(()=>t("b",null," sede : ",-1)),_e={class:"text-center p-1 my-3",style:{"background-color":"#00000020","border-radius":"0.2rem"}},me={style:{"text-transform":"uppercase"}},he={style:{"text-transform":"uppercase",display:"flex",gap:"1rem","justify-content":"space-between","font-weight":"bold"},class:"col-12 my-2 md:col-8 p-0"},ye={class:"col-12 md:col-4 px-0 py-1 md:pl-3",style:{display:"flex","align-items":"center",gap:"1rem"}},fe=["onUpdate:modelValue","suffix"],be={class:"col-12 p-0 mt-3",style:{display:"flex","justify-content":"end"}},ve={__name:"purchaseOrderNew",setup(m){c({items:[{}]});const h=c([]),y=c(!1),d=V();c([]);const b=c(!1);function D(s){const e=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];let n=s.getDate(),v=s.getMonth(),x=s.getFullYear();return`${n} de ${e[v]} del ${x}`}const I={1:"#FF0000",2:"#FF4500",3:"#FFD700",4:"#FF4500",5:"#0000FF",6:"#4B0082",7:"#800080",8:"#EE82EE",9:"#FFC0CB",10:"#00FFFF",11:"#3CB371",12:"#00008B",13:"#FFA500",14:"#A52A2A",15:"#FFFF00"},O=s=>s.map(e=>e).map(e=>e.items).flat().map(e=>({order_purchase_item_id:e.item_id,quantity:e.quantity,unit_measure_id:e.unit_measure_id}));$(async()=>{const s=await B.getGroupsWithItems();s.map(e=>e.items.map(n=>n.quantity=null)),h.value=s,console.log(s)});const U=s=>s.map(e=>e).map(e=>e.items).flat().map(e=>({order_purchase_item_id:e.item_id,quantity:e.quantity||0,unit_measure_id:e.unit_measure_id})),C=()=>{var s,e;return{order_purchase:{responsible_id:(s=d.rawUserData)==null?void 0:s.id,site_id:(e=d.rawUserData)==null?void 0:e.site_id},order_purchase_items:O([...h.value])}},N=()=>{const s=C();if(b.value=!0,s.order_purchase_items.some(e=>e.quantity===null)){alert("Debes llenar todos los espacios");return}y.value=!0},T=async()=>{const s=C();s.daily_inventory_items=U([...h.value]),await B.InsertpurchaseOrder(s),K.push("/purchase-order/purchase-order-my-orders/")};function j(s){s.key===","&&(alert("Por favor usa punto ( . ) para los decimales, gracias"),s.preventDefault())}return(s,e)=>{var E,S;const n=g("Button"),v=g("Dialog"),x=g("Tag");return p(),_(F,null,[u(v,{closable:!1,style:{width:"30rem"},class:"m-2",header:"Estas seguro Monstruo?",modal:"",visible:y.value,"onUpdate:visible":e[1]||(e[1]=l=>y.value=l)},{footer:w(()=>[t("div",oe,[u(n,{onClick:e[0]||(e[0]=()=>{y.value=!1,b.value=!1}),label:"Mejor lo reviso de nuevo!",severity:"help"}),u(n,{text:"",label:"Firmar",onClick:T,severity:"danger"})])]),default:w(()=>{var l;return[W,a(),Y,a(),J,a(" Hola, "),t("span",Q,r((l=f(d).rawUserData)==null?void 0:l.name.toLowerCase())+" ! ",1),t("p",X,[a(" Al precionar "),u(n,{severity:"danger",text:"",class:"p-0",label:"Firmar"}),a(" das fe de que el reporte del inventario para la sede "),t("b",null,"Salchimonster "+r(f(d).rawUserData.site_name),1),a(" el dia "+r(D(new Date))+" que estas intentando enviar ",1),Z,a(" y lo has verificado "),ee,a(),te,a(),se,ae])]}),_:1},8,["visible"]),t("div",re,[ne,t("p",le,[ie,a(" "+r(D(new Date)),1)]),t("p",de,[ue,a(r((E=f(d).rawUserData)==null?void 0:E.name.toLowerCase()),1)]),t("p",ce,[pe,a(r((S=f(d).rawUserData)==null?void 0:S.site_name.toLowerCase()),1)]),(p(!0),_(F,null,k(h.value,(l,M)=>(p(),_("div",{key:M},[t("p",_e,[t("b",me,r(l.group_name),1)]),(p(!0),_(F,null,k(l.items,(i,A)=>(p(),_("div",{style:{"align-items":"center"},class:"grid m-0",key:A},[t("div",he,[t("span",null,r(i.item_name),1),a(),u(x,{style:q([{"border-radius":"0.3rem"},`background-color:${I[i.unit_measure_id]}`])},{default:w(()=>[a(r(i.unit_measure),1)]),_:2},1032,["style"])]),t("div",ye,[z(t("input",{onKeydown:j,type:"number",useGrouping:!1,showButtons:"",min:0,maxFractionDigits:2,"onUpdate:modelValue":L=>i.quantity=L,suffix:` ${i.unit_measure}`,maxDecimal:"5",style:q([{width:"100%","border-radius":"0.3rem",border:"2px solid #00000030"},i.quantity==null&&b.value?"border:2px solid red;border-radius:0.3rem":""]),class:"p-3 md:p-2"},null,44,fe),[[P,i.quantity]])])]))),128))]))),128)),t("div",be,[u(n,{onClick:N,severity:"help",label:"Enviar Reporte"})])])],64)}}},Fe=R(ve,[["__scopeId","data-v-fe7e665b"]]);export{Fe as default};
