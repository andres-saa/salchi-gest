import{m as E}from"./monthlyInventoryService-79dd2c56.js";import{h as f,C as I,i as M,g as w,o as c,c as u,a as t,q as r,t as a,F as B,r as D,x as F,b as i,f as p}from"./index-03a193b1.js";import"./sass.default-a5b7a582.js";const R=t("p",{class:"text-center text-2xl",style:{"font-weight":"bold"}},"Resumen de reporte de inventario diario",-1),q={class:"header mx-auto px-3 md:px-0 my-5",style:{"max-width":"50rem","overflow-x":"auto"}},T={class:"p-0 m-0",style:{width:"max-content"}},V=t("b",null,"FECHA: ",-1),k={class:"p-0 m-0",style:{width:"max-content"}},A=t("b",null,"SEDE: ",-1),L={class:"p-0 m-0",style:{width:"max-content"}},O=t("b",null,"RESPONSABLE: ",-1),P={class:"p-1 m-0 text-center",style:{"font-weight":"bold",background:"#00000020"}},z={__name:"monthlyInventoryView",setup(U){const s=f([]),d=f({}),b=I(),g=()=>{d.value={global:{value:null,matchMode:F.CONTAINS}}};M(async()=>{const l=b.params.monthly_inventory_id;s.value=await E.getMonthlyInventoryEntriesByMonthlyInventoryID(l),s.value=s.value.filter(e=>e.quantity!=0)});function N(l){return l.reduce((e,n)=>{const o=n.group_name;return e[o]||(e[o]=[]),e[o].push(n),e},{})}return g(),(l,e)=>{var _,h,y,v;const n=w("Column"),o=w("DataTable");return c(),u("div",null,[R,t("div",q,[t("p",T,[V,r(" "+a((h=(_=s.value[0])==null?void 0:_.date)==null?void 0:h.split("-").reverse().join("-")),1)]),t("p",k,[A,r(" "+a((y=s.value[0])==null?void 0:y.site_name),1)]),t("p",L,[O,r(" "+a((v=s.value[0])==null?void 0:v.employer_name),1)])]),(c(!0),u(B,null,D(N(s.value),(C,S)=>(c(),u("div",null,[i(o,{stripedRows:"",style:{"max-width":"50rem"},showgridlines:"",filters:d.value,"onUpdate:filters":e[0]||(e[0]=m=>d.value=m),class:"col-12 mb-4 p-2 shadow-2 mt-0 mx-auto",value:C,tableStyle:"min-width:30rem"},{header:p(()=>[t("p",P,a(S),1)]),default:p(()=>[i(n,{style:{width:"40%"},class:"py-1 px-0",field:"item_name",header:"Nombre"}),i(n,{style:{width:"20%"},class:"py-1 px-2rem",field:"quantity",header:"Cantidad"},{body:p(m=>{var x;return[r(a((x=m.data.quantity)==null?void 0:x.toString().replace(".",",")),1)]}),_:1}),i(n,{style:{width:"400%"},class:"py-1 px-0",field:"unit_measure",header:"Unidad de medida"})]),_:2},1032,["filters","value"])]))),256))])}}};export{z as default};
