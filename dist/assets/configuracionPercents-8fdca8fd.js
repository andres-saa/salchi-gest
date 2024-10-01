import{r as s,A as S,x as z,i as A,H as E,a as c,o as d,c as b,g as a,w as o,b as n,q as m,U as v,K as q,e as x,F as G,d as H,t as g,j,f as O}from"./index-caf3b98c.js";const K={style:{"max-width":"500px"},class:"m-auto"},J=n("h3",{style:{"margin-top":"6rem"},class:"text-center p-0 mx-0"},[n("i",{class:"fa fa-gear"}),n("b",null," Porcentajes de comparacion cdi ")],-1),Q={class:"m-0 my-3"},W={style:{display:"flex","justify-content":"end"}},X={style:{display:"flex",width:"100%","justify-content":"end","flex-wrap":"wrap",gap:"1rem","align-items":"center"}},Y={class:"p-0 m-0",style:{"text-transform":"uppercase"}},Z={class:"p-0 m-0",style:{"text-transform":"capitalize"}},ee={style:{display:"flex","justify-content":"end",gap:".5rem"}},te={style:{display:"flex","justify-content":"end",gap:".5rem"}},se={__name:"configuracionPercents",setup(ae){const w=s({}),y=s(!1),i=s({}),k=s([{}]),D=s([]),P=s(!1),u=s(!1),$=t=>{u.value=!0,w.value=t},M=()=>{P.value=!1,i.value={},y.value=!0},B=async()=>{const t=w.value.id;await m.delete(`${v}/delete-cdi-percent-price/${t}`,"Borrando"),u.value=!1,_()},I=s([...[{header:"Id",value:"id"},{header:"Porcentaje",value:"percent",width:""}]]);S(()=>{var t;return(t=I.value)==null?void 0:t.map(l=>l.value)});const T=s([{name:"Porcentaje(%)",fiel:"percent",type:"number"}]);z(i,async(t,l)=>{var h;i.value.purchasing_unit_measure_id=((h=t.purchasing_unit_measure)==null?void 0:h.id)||null},{deep:!0});const C=async()=>{const t=i.value;await m.post(`${v}/create-cdi-percent-price`,t,"creando un nuevo porcentaje"),_(),y.value=!1},U=async t=>{await m.put(`${v}/set-main-percent-to-sell/${t}/`,{},"Modificando"),_()},_=async()=>{k.value=await m.get(`${v}/get-prices-cdi-percents`),D.value=await m.get(`${v}/daily_inventory_unit_measures`)};A(async()=>{_()});const N=s(null),L=()=>{N.value={global:{value:null,matchMode:q.CONTAINS}}};return E(()=>{L()}),(t,l)=>{const h=c("InputNumber"),r=c("Button"),V=c("Dialog"),f=c("column"),F=c("InputSwitch"),R=c("DataTable");return d(),b("div",K,[J,a(V,{style:{width:"30rem"},header:P.value?"Actualizar Percente":"Nuevo Percente",class:"mx-2",visible:y.value,"onUpdate:visible":l[0]||(l[0]=e=>y.value=e),modal:""},{footer:o(()=>[P.value?(d(),x(r,{key:1,onClick:C,severity:"help",label:"Modificar Percente"})):(d(),x(r,{key:0,onClick:C,severity:"help",label:"Guardar"}))]),default:o(()=>[(d(!0),b(G,null,H(T.value,e=>(d(),b("div",null,[n("h6",Q,g(e.name),1),a(h,{modelValue:i.value[e.fiel],"onUpdate:modelValue":p=>i.value[e.fiel]=p,style:{width:"100%"},suffix:"%",locale:"es-ES"},null,8,["modelValue","onUpdate:modelValue"])]))),256))]),_:1},8,["header","visible"]),a(V,{class:"mx-2",header:"Eliminar Percente",visible:u.value,"onUpdate:visible":l[3]||(l[3]=e=>u.value=e),modal:""},{footer:o(()=>[n("div",W,[a(r,{size:"small",label:"cancelar",onClick:l[1]||(l[1]=e=>u.value=!1),severity:"help"}),a(r,{size:"small",onClick:l[2]||(l[2]=e=>B()),label:"Eliminar",severity:"danger",text:""})])]),default:o(()=>[n("h6",null,[j("seguro que desea eliminar el Valor de comparacion "),n("b",null,g(w.value.percent)+"%",1),j(" ?")])]),_:1},8,["visible"]),a(R,{paginator:!0,rows:15,style:{width:"100%"},paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} porcentajes",rowsPerPageOptions:[5,10,25,100],showGridlines:"",scrollHeight:"65vh",stripedRows:"",class:"col-12 m-auto p-0",value:k.value,filters:N.value},{header:o(()=>[n("div",X,[a(r,{size:"small",severity:"help",onClick:M,label:"Nuevo porcentaje"})])]),default:o(()=>[a(f,{header:"Id",field:"name",class:"py-2",style:{width:"40%"}},{body:o(e=>[n("h6",Y,g(e.data.id),1)]),_:1}),a(f,{header:"Porcentaje",style:{width:"50%"},field:"name",class:"py-2"},{body:o(e=>[n("h6",Z,g(e.data.percent)+"% ",1)]),_:1}),a(f,{header:"Para vender a sedes?",style:{width:"max-content","min-width":"10rem"},field:"name",class:"py-2"},{body:o(e=>[n("div",ee,[a(F,{onChange:p=>U(e.data.id),modelValue:e.data.main,"onUpdate:modelValue":p=>e.data.main=p},null,8,["onChange","modelValue","onUpdate:modelValue"])])]),_:1}),a(f,{header:"Accion",style:{width:"min-content"},field:"name",class:"py-2"},{body:o(e=>[n("div",te,[e.data.main?O("",!0):(d(),x(r,{key:0,onClick:p=>$(e.data),class:"m-0 p-0",severity:"danger",style:{height:"2rem",width:"2rem"},icon:"pi pi-trash"},null,8,["onClick"]))])]),_:1})]),_:1},8,["value","filters"])])}}};export{se as default};
