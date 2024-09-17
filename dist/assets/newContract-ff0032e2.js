import{_ as F,l as E,r as p,E as N,m as k,K as _,U as i,a as y,o as M,c as B,b as a,g as r,w as m,I as D,u as w,t as v,q as j,p as z,h as A}from"./index-fcc1124b.js";const s=u=>(z("data-v-0c25a3aa"),u=u(),A(),u),L={class:"container mx-4"},T={class:"m-auto",style:{"max-width":"500px"}},q=s(()=>a("h4",null,[a("b",null,"Nuevo contrato")],-1)),G=s(()=>a("h6",null,"Empleado",-1)),K={style:{display:"flex",gap:"1rem","align-items":"center"}},O=["onClick","src","onError"],P={class:"p-0 m-0"},R={style:{display:"flex",gap:"1rem",height:"1rem","align-items":"center"}},H=["onClick","src","onError"],J={class:"p-0 m-0"},Q=s(()=>a("h6",null,"Tipo de contrato",-1)),W={class:"p-0 m-0",style:{"text-transform":"capitalize"}},X=s(()=>a("span",{style:{color:"grey"}},"Seleccione el tipo de contrato",-1)),Y={class:"p-0 m-0",style:{"text-transform":"capitalize"}},Z=s(()=>a("i",{class:"pi pi-book"},null,-1)),ee=s(()=>a("h6",null,"Fecha de inicio",-1)),te=s(()=>a("h6",null,"Fecha de finalizacion",-1)),ae=s(()=>a("h6",null,"Salario",-1)),oe=s(()=>a("h6",null,"Fecha de Alarma",-1)),le={class:"my-8",style:{display:"flex",gap:"1rem","justify-content":"end",width:"100%"}},ne={__name:"newContract",setup(u){const V=E(),t=p({employer_id:0,contract_type_id:0,start_date:"",end_date:"",created_by:0,alert_date:"",Salary:0}),h=p([]),g=p([]),f=(l,o)=>{var d;const c={masculino:"/images/male-avatar.png",femenino:"/images/female-avatar.png",default:"/images/who.png"};!l||l==""||l=="N/A"?o.target.src=c.default:o.target.src=c[(d=l.trim())==null?void 0:d.toLowerCase()]},b=p(null),C=()=>{b.value={global:{value:null,matchMode:D.CONTAINS}}};N(()=>{C()});const S=p([{id:1}]);k(async()=>{S.value=await _.get(`${i}/get-all-vigent-contracts`,"cargando contratos"),h.value=await _.get(`${i}/employers-basic`),g.value=await _.get(`${i}/get-all-contract-types`)});const x=()=>{const l=V.rawUserData.id;if(!t.value.employer_id||!t.value.contract_type_id||!t.value.start_date||!t.value.end_date||!t.value.alert_date||!t.value.Salary){alert("Error: Faltan datos necesarios. Por favor, complete todos los campos.");return}return{employer_id:t.value.employer_id.id,contract_type_id:t.value.contract_type_id.id,start_date:t.value.start_date,end_date:t.value.end_date,created_by:l,alert_date:t.value.alert_date,Salary:t.value.Salary}},I=async()=>{const l=x();l&&_.post(`${i}/create-new-contract/`,l,"Generando contrato","/contracts/contracts-all/")};return(l,o)=>{const c=y("Dropdown"),d=y("Calendar"),$=y("InputNumber"),U=y("Button");return M(),B("div",L,[a("div",T,[q,G,r(c,{options:h.value,filter:"",optionLabel:"name",modelValue:t.value.employer_id,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value.employer_id=e),style:{width:"100%"}},{option:m(e=>[a("div",K,[a("img",{onClick:n=>l.verIMagen(e.option.dni),src:`${w(i)}/read-product-image/96/employer-${e.option.dni}`,onError:n=>f(e.option.gender,n),class:"shadow-2 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,O),a("h6",P,v(e.option.name),1)])]),value:m(e=>[a("div",R,[a("img",{onClick:n=>l.verIMagen(e.value.dni),src:`${w(i)}/read-product-image/96/employer-${e.value.dni}`,onError:n=>f(e.value.gender,n),class:"shadow-2 p-0 m-0 img-profile",style:{border:"none",position:"relative",height:"2rem",width:"2rem","object-fit":"cover","border-radius":"50%"}},null,40,H),a("h6",J,v(e.value.name),1)])]),_:1},8,["options","modelValue"]),Q,r(c,{class:"",options:g.value,placeholder:"Seleccione el tipo de contrato",modelValue:t.value.contract_type_id,"onUpdate:modelValue":o[1]||(o[1]=e=>t.value.contract_type_id=e),optionLabel:"name",filter:"",style:{width:"100%"}},{option:m(e=>{var n;return[a("h6",W,v((n=e.option.name)==null?void 0:n.toUpperCase()),1)]}),placeholder:m(()=>[X]),value:m(e=>{var n;return[a("h6",Y,[Z,j(" "+v((n=e.value.name)==null?void 0:n.toUpperCase()),1)])]}),_:1},8,["options","modelValue"]),ee,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.start_date,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value.start_date=e),style:{width:"100%"}},null,8,["modelValue"]),te,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.end_date,"onUpdate:modelValue":o[3]||(o[3]=e=>t.value.end_date=e),style:{width:"100%"}},null,8,["modelValue"]),ae,r($,{dateFormat:"dd/mm/yy",prefix:"$",modelValue:t.value.Salary,"onUpdate:modelValue":o[4]||(o[4]=e=>t.value.Salary=e),style:{width:"100%"}},null,8,["modelValue"]),oe,r(d,{dateFormat:"dd/mm/yy",modelValue:t.value.alert_date,"onUpdate:modelValue":o[5]||(o[5]=e=>t.value.alert_date=e),style:{width:"100%"}},null,8,["modelValue"]),a("div",le,[r(U,{onClick:o[6]||(o[6]=e=>I()),severity:"help",label:"Confirmar y enviar"})])])])}}},re=F(ne,[["__scopeId","data-v-0c25a3aa"]]);export{re as default};
