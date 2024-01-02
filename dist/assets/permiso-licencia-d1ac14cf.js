import{_ as j,r,w as z,o as M,b as w,d as f,e as v,f as e,g as y,j as R,A as I,t as n,h as U,l as d,F as $,U as V,v as B,x as F}from"./index-351d7858.js";import{f as H}from"./formatoPesos-2a38d2e7.js";const s=g=>(B("data-v-7284542a"),g=g(),F(),g),P=s(()=>e("p",{class:"text-4xl text-center py-4",style:{"font-weight":"bold"}},"Generar Permiso de Licencia",-1)),q={class:"a4-size mb-6",style:{display:"flex",height:"auto"}},G={key:0,class:"text-1xl m-auto col-6 p-0",style:{color:"var(--primary-color)"}},J={key:1,class:"text-5xl m-auto col-6"},K={key:2,class:"grid mt-1",style:{"min-height":""}},Q={class:"col-12 a4-size p-0 m-auto",style:{height:"max-content","background-color":"transparent"}},W=s(()=>e("h6",{class:"text-center p-2",style:{"font-weight":"bold","background-color":"var(--gray-200)"}},"INFORMACIÓN DEL EMPLEADO",-1)),X={class:"px-0 grid",style:{display:""}},Y=s(()=>e("h6",{class:"col-6 m-0 text-left"},"NOMBRE",-1)),Z={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},ee={class:"px-0 grid",style:{}},te=s(()=>e("h6",{class:"col-6 m-0 text-left"},"DOCUMENTO",-1)),oe={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},se={class:"px-0 grid",style:{}},le=s(()=>e("h6",{class:"col-6 m-0 text-left"},"FECHA DE INICIO",-1)),ne={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},ae={class:"px-0 grid",style:{}},ie=s(()=>e("h6",{class:"col-6 m-0 text-left"},"CARGO",-1)),ce={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},re=s(()=>e("h6",{class:"text-center p-2",style:{"font-weight":"bold","background-color":"var(--gray-200)"}},"DETALLES ADICIONALES",-1)),de={class:"px-0 grid",style:{}},he=s(()=>e("h6",{class:"col-6 m-0 text-left"},"TIPO DE CONTRATO",-1)),ue={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},_e={class:"px-0 grid",style:{}},me=s(()=>e("h6",{class:"col-6 m-0 text-left"},"SALARIO",-1)),pe={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},fe=s(()=>e("p",null,"Observaciones",-1)),ve={key:0,class:"col-12"},ye={class:"a4-size p-8",style:{"box-shadow":"0 0 10px rgba(0, 0, 0, 0.508)"}},ge=s(()=>e("img",{class:"m-auto",src:"https://salchimonster.com/images/logo.png",style:{width:"10%"},alt:""},null,-1)),xe={style:{"font-size":"14pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},be=s(()=>e("h6",{class:"text-center",style:{"font-size":"14pt","font-weight":"bold",color:"black","font-family":"Arial, Helvetica, sans-serif"}}," INVERSIONES SALCHIMONSTER SAS ",-1)),we=s(()=>e("h6",{style:{"font-size":"14pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"},class:"text-center"},"NIT: 901.420.874-0",-1)),Ie=s(()=>e("h6",{class:"text-center py-4",style:{"font-weight":"bold"}},[d("FORMATO SOLICITUD DE LICENCIA "),e("span",{style:{"text-transform":"capitalize"}})],-1)),Ee={class:"text-l",style:{"font-size":"14pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},Ne={class:"p-0 m-0"},Ae=s(()=>e("span",{style:{"font-weight":"bold"}},"Fecha de la solicitud: ",-1)),Ce={style:{"border-bottom":"1px solid","padding-bottom":"0","padding-right":"2rem"}},ke={class:"p-0 m-0",style:{width:"100%"}},Oe=s(()=>e("span",{style:{"font-weight":"bold"}},"Nombre: ",-1)),De={style:{width:"100%","border-bottom":"1px solid","padding-bottom":"0","padding-right":"3rem"}},Se={class:"p-0 m-0"},Ve=s(()=>e("span",{style:{"font-weight":"bold"}},"Cargo: ",-1)),Te={style:{"border-bottom":"1px solid","padding-bottom":"0","padding-right":"2rem"}},Le={class:"p-0 m-0"},je=s(()=>e("span",{style:{"font-weight":"bold"}},"Identificación No: ",-1)),ze={style:{"border-bottom":"1px solid","padding-bottom":"0","padding-right":"2rem"}},Me={style:{display:"flex","justify-content":"start",gap:"2rem",border:"1px solid","margin-top":"2rem"},class:"p-2"},Re={style:{display:"flex","flex-direction":"column"},class:""},Ue=s(()=>e("div",{style:{"font-weight":"bold"}}," Desde ",-1)),$e={style:{display:"flex","flex-direction":"column"}},Be=s(()=>e("div",{style:{"font-weight":"bold"}}," Hasta ",-1)),Fe={style:{display:"flex","justify-content":"start",gap:"2rem",border:"1px solid","margin-top":"2rem"},class:"p-2"},He={style:{display:"flex","flex-direction":"column"},class:""},Pe=s(()=>e("div",{class:"mb-2",style:{"font-weight":"bold"}}," Observaciones ",-1)),qe={__name:"permiso-licencia",setup(g){const a=r({}),h=r(),D=r(),E=r("2029-12-21 16:19"),N=r(),A=r(),C=r(),k=r();r();function S(o){var t=new Date(o),u={day:"numeric",month:"long",year:"numeric"};return t.toLocaleDateString("es-ES",u)}z(h,(o,t)=>{console.log(`El valor de usrDni ha cambiado de ${t} a ${o}`)});const T=async o=>{fetch(`${V}/employer/dni/${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Employer data:",t),a.value=t,N.value=""}).catch(t=>{console.error("There has been a problem with your fetch operation:",t),a.value={},N.value="  No hay un usuario para el número de documento "+h.value,D.value="error"})},L=async()=>{fetch(`${V}/server_time`).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{console.log("Employer data:",o),E.value=o}).catch(o=>{console.error("There has been a problem with your fetch operation:",o),D.value="error"})};M(async()=>{L()});function O(o){o||(o="2029-12-21 16:19");const t=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];let[u,b]=o.split(" "),[_,m,i]=u.split("-").map(Number),l=t[m-1];return`${i} de ${l} de ${_}`}function x(o){const t=["cero","un","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],u=["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"],b=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];function _(l){let c="",p="cien";if(l[0]>1?(c+=t[l[0]]+"cientos ",p=""):l[0]===1&&(c+=p+" "),l[1]>1)c+=b[l[1]]+" y ";else if(l[1]===1)return c+u[l[2]];return(l[2]!==0||l[0]===0&&l[1]===0)&&(c+=t[l[2]]),c}if(o===0)return t[0];if(o<0)return"menos "+x(-o);let m=[];for(;o>0;)m.push(o%1e3),o=Math.floor(o/1e3);return m.map((l,c)=>{if(l===0)return"";let p=_([Math.floor(l/100),Math.floor(l%100/10),l%10]);return c===1?l===1?"mil":p+" mil":c===2?l===1?"un millón":p+" millones":p}).reverse().join(" ").trim()}return console.log(x(16e5)),console.log(x(16e5)),console.log(x(1111111)),(o,t)=>{const u=w("InputNumber"),b=w("Button"),_=w("Calendar"),m=w("InputText");return f(),v($,null,[P,e("span",q,[y(u,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=i=>h.value=i),class:"mr-5",style:{width:"100%"},placeholder:"Cedula del empleado"},null,8,["modelValue"]),y(b,{onClick:t[1]||(t[1]=i=>T(h.value))},{default:R(()=>[d("Buscar")]),_:1})]),h.value==null?(f(),v("p",G," Por favor digite el numero de decumento del usuario y presione Buscar")):I("",!0),!a.value.user_name&&h.value?(f(),v("p",J,n(N.value),1)):I("",!0),a.value.name?(f(),v("div",K,[e("div",Q,[W,e("div",X,[Y,e("h6",Z,n(a.value.name),1)]),e("div",ee,[te,e("h6",oe,n(a.value.dni),1)]),e("div",se,[le,e("h6",ne,n(a.value.entry_date),1)]),e("div",ae,[ie,e("h6",ce,n(a.value.position),1)]),re,e("div",de,[he,e("h6",ue,n(a.value.contract_type),1)]),e("div",_e,[me,e("h6",pe,n(U(H)(a.value.salary)),1)]),d(" DESDE "),y(_,{modelValue:A.value,"onUpdate:modelValue":t[2]||(t[2]=i=>A.value=i),required:"true",autofocus:""},null,8,["modelValue"]),d(" HASTA "),y(_,{modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=i=>C.value=i),required:"true",autofocus:""},null,8,["modelValue"]),fe,y(m,{modelValue:k.value,"onUpdate:modelValue":t[4]||(t[4]=i=>k.value=i),class:"mr-5",style:{width:"100%"},placeholder:"Cedula del empleado"},null,8,["modelValue"])]),a.value.name?(f(),v("div",ve,[e("div",ye,[ge,e("h6",xe,n(O(E.value)),1),be,we,Ie,e("h5",Ee,[e("p",Ne,[Ae,d(),e("span",Ce,n(O(E.value)),1)]),e("p",ke,[Oe,d(),e("span",De,n(O(a.value.user_name)),1)]),e("p",Se,[Ve,d(),e("span",Te,n(a.value.position),1)]),e("p",Le,[je,d(),e("span",ze,n(a.value.dni),1)]),e("div",Me,[e("div",Re,[Ue,e("div",null,n(S(A.value)),1)]),e("div",$e,[Be,e("div",null,n(S(C.value)),1)])]),e("div",Fe,[e("div",He,[Pe,e("div",null,n(k.value),1)])])])])])):I("",!0)])):I("",!0)],64)}}},Ke=j(qe,[["__scopeId","data-v-7284542a"]]);export{Ke as default};
