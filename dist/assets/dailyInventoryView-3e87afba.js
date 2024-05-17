import{d as D}from"./dailyInventoryService-049a0c43.js";import{r as f,k as E,i as B,a as w,o as u,c as m,b as t,s as i,t as o,F as I,e as F,B as R,d as r,w as p}from"./index-fdef0c85.js";import"./sass.default-a1d89e71.js";const k=t("p",{class:"text-center text-2xl",style:{"font-weight":"bold"}},"Resumen de reporte de inventario diario",-1),M={class:"header mx-auto px-3 md:px-0 my-5",style:{"max-width":"50rem","overflow-x":"auto"}},T={class:"p-0 m-0",style:{width:"max-content"}},V=t("b",null,"FECHA: ",-1),q={class:"p-0 m-0",style:{width:"max-content"}},A=t("b",null,"SEDE: ",-1),L={class:"p-0 m-0",style:{width:"max-content"}},O=t("b",null,"RESPONSABLE: ",-1),P={class:"p-1 m-0 text-center",style:{"font-weight":"bold",background:"#00000020"}},z={__name:"dailyInventoryView",setup(U){const a=f([]),d=f({}),b=E(),g=()=>{d.value={global:{value:null,matchMode:R.CONTAINS}}};B(async()=>{const l=b.params.daily_inventory_id;a.value=await D.getDailyInventoryEntriesByDailyInventoryID(l),a.value=a.value.filter(e=>e.quantity!=0)});function N(l){return l.reduce((e,s)=>{const n=s.group_name;return e[n]||(e[n]=[]),e[n].push(s),e},{})}return g(),(l,e)=>{var _,y,h,v;const s=w("Column"),n=w("DataTable");return u(),m("div",null,[k,t("div",M,[t("p",T,[V,i(" "+o((y=(_=a.value[0])==null?void 0:_.date)==null?void 0:y.split("-").reverse().join("-")),1)]),t("p",q,[A,i(" "+o((h=a.value[0])==null?void 0:h.site_name),1)]),t("p",L,[O,i(" "+o((v=a.value[0])==null?void 0:v.employer_name),1)])]),(u(!0),m(I,null,F(N(a.value),(S,C)=>(u(),m("div",null,[r(n,{stripedRows:"",style:{"max-width":"50rem"},showgridlines:"",filters:d.value,"onUpdate:filters":e[0]||(e[0]=c=>d.value=c),class:"col-12 mb-4 p-2 shadow-2 mt-0 mx-auto",value:S,tableStyle:"min-width:30rem"},{header:p(()=>[t("p",P,o(C),1)]),default:p(()=>[r(s,{style:{width:"40%"},class:"py-1 px-0",field:"item_name",header:"Nombre"}),r(s,{style:{width:"20%"},class:"py-1 px-2rem",field:"quantity",header:"Cantidad"},{body:p(c=>{var x;return[i(o((x=c.data.quantity)==null?void 0:x.toString().replace(".",",")),1)]}),_:1}),r(s,{style:{width:"400%"},class:"py-1 px-0",field:"unit_measure",header:"Unidad de medida"})]),_:2},1032,["filters","value"])]))),256))])}}};export{z as default};
