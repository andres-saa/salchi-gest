import{_ as U,l as k,r as p,q as N,i as E,j as _,U as i,a as v,o as M,c as D,b as o,g as r,w as m,s as B,u as b,t as y,m as j,p as z,h as A}from"./index-5708809f.js";const s=u=>(z("data-v-95f6a745"),u=u(),A(),u),L={class:"container mx-4"},T={class:"m-auto",style:{"max-width":"500px"}},P=s(()=>o("h4",null,[o("b",null,"Nuevo contrato")],-1)),q=s(()=>o("h6",null,"Empleado",-1)),G={style:{display:"flex",gap:"1rem","align-items":"center"}},O=["onClick","src","onError"],R={class:"p-0 m-0"},H={style:{display:"flex",gap:"1rem",height:"1rem","align-items":"center"}},J=["onClick","src","onError"],K={class:"p-0 m-0"},Q=s(()=>o("h6",null,"Tipo de contrato",-1)),W={class:"p-0 m-0",style:{"text-transform":"capitalize"}},X=s(()=>o("span",{style:{color:"grey"}},"Seleccione el tipo de contrato",-1)),Y={class:"p-0 m-0",style:{"text-transform":"capitalize"}},Z=s(()=>o("i",{class:"pi pi-book"},null,-1)),ee=s(()=>o("h6",null,"Fecha de inicio",-1)),te=s(()=>o("h6",null,"Fecha de finalizacion",-1)),oe=s(()=>o("h6",null,"Salario",-1)),ae=s(()=>o("h6",null,"Fecha de Alarma",-1)),le={class:"my-8",style:{display:"flex",gap:"1rem","justify-content":"end",width:"100%"}},ne={__name:"newContract",setup(u){const C=k(),t=p({employer_id:0,contract_type_id:0,start_date:"",end_date:"",created_by:0,alert_date:"",Salary:0}),h=p([]),g=p([]),f=(l,a)=>{var d;const c={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!l||l==""||l=="N/A"?a.target.src=c.default:a.target.src=c[(d=l.trim())==null?void 0:d.toLowerCase()]},S=p(null),x=()=>{S.value={global:{value:null,matchMode:B.CONTAINS}}};N(()=>{x()});const $=p([{id:1}]);E(async()=>{$.value=await _.get(`${i}/get-all-vigent-contracts`,"cargando contratos"),h.value=await _.get(`${i}/employers-basic`),g.value=await _.get(`${i}/get-all-contract-types`)});const F=()=>{const l=C.rawUserData.id;if(!t.value.employer_id||!t.value.contract_type_id||!t.value.start_date||!t.value.end_date||!t.value.alert_date||!t.value.Salary){alert("Error: Faltan datos necesarios. Por favor, complete todos los campos.");return}return{employer_id:t.value.employer_id.id,contract_type_id:t.value.contract_type_id.id,start_date:t.value.start_date,end_date:t.value.end_date,created_by:l,alert_date:t.value.alert_date,Salary:t.value.Salary}},w=async()=>{const l=F();l&&_.post(`${i}/create-new-contract/`,l,"Generando contrato","/contracts/contracts-all/")};return(l,a)=>{const c=v("Dropdown"),d=v("Calendar"),I=v("InputNumber"),V=v("Button");return M(),D("div",L,[o("div",T,[P,q,r(c,{options:h.value,filter:"",optionLabel:"name",modelValue:t.value.employer_id,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.employer_id=e),style:{width:"100%"}},{option:m(e=>[o("div",G,[o("img",{onClick:n=>l.verIMagen(e.option.dni),src:`${b(i)}/read-product-image/96/employer-${e.option.dni}`,onError:n=>f(e.option.gender,n),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,O),o("h6",R,y(e.option.name),1)])]),value:m(e=>[o("div",H,[o("img",{onClick:n=>l.verIMagen(e.value.dni),src:`${b(i)}/read-product-image/96/employer-${e.value.dni}`,onError:n=>f(e.value.gender,n),class:"shadow-2 p-0 m-0 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,J),o("h6",K,y(e.value.name),1)])]),_:1},8,["options","modelValue"]),Q,r(c,{class:"",options:g.value,placeholder:"Seleccione el tipo de contrato",modelValue:t.value.contract_type_id,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.contract_type_id=e),optionLabel:"name",filter:"",style:{width:"100%"}},{option:m(e=>{var n;return[o("h6",W,y((n=e.option.name)==null?void 0:n.toUpperCase()),1)]}),placeholder:m(()=>[X]),value:m(e=>{var n;return[o("h6",Y,[Z,j(" "+y((n=e.value.name)==null?void 0:n.toUpperCase()),1)])]}),_:1},8,["options","modelValue"]),ee,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.start_date,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.start_date=e),style:{width:"100%"}},null,8,["modelValue"]),te,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.end_date,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.end_date=e),style:{width:"100%"}},null,8,["modelValue"]),oe,r(I,{dateFormat:"dd/mm/yy",prefix:"$",modelValue:t.value.Salary,"onUpdate:modelValue":a[4]||(a[4]=e=>t.value.Salary=e),style:{width:"100%"}},null,8,["modelValue"]),ae,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.alert_date,"onUpdate:modelValue":a[5]||(a[5]=e=>t.value.alert_date=e),style:{width:"100%"}},null,8,["modelValue"]),o("div",le,[r(V,{onClick:a[6]||(a[6]=e=>w()),severity:"help",label:"cargar PDF"}),r(V,{onClick:a[7]||(a[7]=e=>w()),severity:"danger",label:"Confirmar y enviar"})])])])}}},re=U(ne,[["__scopeId","data-v-95f6a745"]]);export{re as default};
