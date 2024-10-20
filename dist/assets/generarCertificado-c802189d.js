import{_ as M,r as _,A as B,i as P,C as H,cd as U,x as V,a as L,o as v,c as y,b as e,g as S,u as w,w as z,f as E,t as l,k as G,D as W,E as q,j as f,aK as Y,U as T,G as J,X as K,ce as X,n as Q,P as Z,p as ee,h as te,a1 as oe}from"./index-e7a37f9b.js";import{f as se}from"./formatoPesos-8aa989a0.js";import{a as ae}from"./html2canvas.esm-6e01b359.js";import{E as le}from"./jspdf.es.min-a81115ff.js";const ne="/images/sello gestion humana.png",re="/images/certificado.png";const n=g=>(ee("data-v-a21d736f"),g=g(),te(),g),ie={class:"my-8 m-auto",style:{}},ce=n(()=>e("p",{class:"text-2xl lg:text-3xl text-center my-4 mt-8",style:{"font-weight":"bold"}},"Generar Certificado Laboral",-1)),de={class:"mb-6 col-12 m0-",style:{display:"flex",height:"auto"}},me=n(()=>e("span",{style:{color:"white"}},"Buscar",-1)),he={key:0,class:"text-1xl m-auto col-6 p-0",style:{color:"var(--primary-color)"}},ue={key:1,class:"text-5xl m-auto col-12"},pe={key:2,class:"col-12 p-0 m-auto",style:{height:"max-content","background-color":"transparent"}},_e=n(()=>e("h6",{class:"text-center p-2 m-0 mb-5 col-12",style:{"border-radius":"2rem","font-weight":"bold","background-color":"var(--gray-200)"}},"INFORMACIÓN DEL EMPLEADO",-1)),fe={class:"px-0 grid",style:{display:""}},ve=n(()=>e("h6",{class:"col-6 m-0 text-left text-md"},"NOMBRE",-1)),ye={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},ge=n(()=>e("h6",{class:"col-6 m-0 py-2 text-left"},"ESTADO",-1)),be={class:"col-6 m-0 py-2 text-right",style:{"font-weight":"300","min-width":"max-content"}},xe={class:"px-0 grid",style:{}},we=n(()=>e("h6",{class:"col-6 m-0 text-left"},"DOCUMENTO",-1)),Ee={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},Ce={class:"px-0 grid",style:{}},Ne=n(()=>e("h6",{class:"col-6 m-0 text-left"},"FECHA DE INICIO",-1)),Se={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},Ie={class:"px-0 grid",style:{"background-color":""}},ke=n(()=>e("h6",{class:"col-6 m-0 text-left"},"CARGO",-1)),De={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},Ae=n(()=>e("h6",{class:"text-center p-2 mb-5",style:{"border-radius":"2rem","font-weight":"bold","background-color":"var(--gray-200)"}},"DETALLES ADICIONALES",-1)),Oe={class:"px-0 grid",style:{}},Pe=n(()=>e("h6",{class:"col-6 m-0 text-left"},"TIPO DE CONTRATO",-1)),Le={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},ze={class:"px-0 grid",style:{}},Te=n(()=>e("h6",{class:"col-6 m-0 text-left"},"SALARIO",-1)),je={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},$e={style:{color:"white"}},Re={class:"col-12 p-0 mt-6",style:{"overflow-x":"auto","box-shadow":"0 0 20px rgba(0, 0, 0, 0.308)"},ref:"contenidoParaPDF"},Fe={class:"a4-size p-8 mi-clase",style:{"box-shadow":"0 0 10px rgba(0, 0, 0, 0.508)"}},Me=n(()=>e("img",{class:"",src:oe,style:{width:"10%"},alt:""},null,-1)),Be={class:"py-4",style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},He=n(()=>e("h6",{class:"text-center py-5",style:{"font-size":"12pt","font-weight":"bold",color:"black","font-family":"Arial, Helvetica, sans-serif"}}," INVERSIONES SALCHIMONSTER SAS ",-1)),Ue=n(()=>e("h6",{style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"},class:"text-center"},"NIT: 901.420.874-0",-1)),Ve={class:"text-center py-4",style:{"font-weight":"bold"}},Ge={style:{"text-transform":"uppercase"}},We={class:"text-md text-justify",style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},qe={style:{"text-transform":"uppercase"}},Ye={style:{"text-transform":"uppercase"}},Je={style:{"text-transform":"uppercase"}},Ke={style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"},class:"py-1 mt-0"},Xe=Y('<p class="py-6" data-v-a21d736f> Cordialmente, </p><img style="width:20rem;border-bottom:2px solid;padding-right:3rem;padding-bottom:1rem;" src="'+ne+'" alt="" data-v-a21d736f><p class="py-0 my-0" data-v-a21d736f> Oficina de Gestión Humana</p><p class="py-0 my-0" data-v-a21d736f>INVERSIONES SALCHIMONSTER SAS</p><p class="py-0 my-0" data-v-a21d736f> NIT. 901420874-0 </p>',5),Qe={key:3,class:"col-12"},Ze=n(()=>e("img",{src:re,alt:"",srcset:"",style:{width:"100%",height:"50vh","object-fit":"cover","border-radius":"1rem"}},null,-1)),et=[Ze],tt={__name:"generarCertificado",setup(g){const I=_(window.innerWidth),k=B(()=>I.value<600),D=()=>{I.value=window.innerWidth};P(()=>{window.addEventListener("resize",D)}),H(()=>{window.removeEventListener("resize",D)});const a=_({}),p=_(U()),A=_(),C=_("2029-12-21 16:19"),N=_();document.getElementsByClassName("mi-clase");const j=t=>{let o=new Date(t),c=o.getDate(),h=o.getMonth(),r=o.getFullYear(),u=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][h];return`los ${c} días del mes de ${u} de ${r}`};V(p,(t,o)=>{console.log(`El valor de usrDni ha cambiado de ${o} a ${t}`)});const $=async t=>{fetch(`${T}/employer/dni/${t}`).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{console.log("Employer data:",o),a.value=o,N.value=""}).catch(o=>{console.error("There has been a problem with your fetch operation:",o),a.value={},N.value="  No hay un usuario para el número de documento "+p.value,A.value="error"})},R=async()=>{fetch(`${T}/server_time`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Employer data:",t),C.value=t}).catch(t=>{console.error("There has been a problem with your fetch operation:",t),A.value="error"})};P(async()=>{R()});function O(t){t||(t="2029-12-21 16:19");const o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];let[c,h]=t.split(" "),[r,d,u]=c.split("-").map(Number),s=o[d-1];return`${u} de ${s} de ${r}`}function b(t){const o=["cero","un","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],c=["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"],h=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];function r(s){let i="",m="cien";if(s[0]>1?(i+=o[s[0]]+"cientos ",m=""):s[0]===1&&(i+=m+" "),s[1]>1)i+=h[s[1]]+" y ";else if(s[1]===1)return i+c[s[2]];return(s[2]!==0||s[0]===0&&s[1]===0)&&(i+=o[s[2]]),i}if(t===0)return o[0];if(t<0)return"menos "+b(-t);let d=[];for(;t>0;)d.push(t%1e3),t=Math.floor(t/1e3);return d.map((s,i)=>{if(s===0)return"";let m=r([Math.floor(s/100),Math.floor(s%100/10),s%10]);return i===1?s===1?"mil":m+" mil":i===2?s===1?"un millón":m+" millones":m}).reverse().join(" ").trim()}console.log(b(16e5)),console.log(b(16e5)),console.log(b(1111111));const x=_(k.value),F=async()=>{const t=k.value;x.value=!1,await J();let o=document.querySelector(".mi-clase");if(o)try{const h=(await ae(o,{scale:2.5})).toDataURL("image/jpeg",.9),r=new le({orientation:"portrait",unit:"px",format:"a4"}),d=r.internal.pageSize.getWidth(),u=r.internal.pageSize.getHeight();r.addImage(h,"JPEG",0,0,d,u),r.save(`certificado laboral - ${a.value.name}.pdf`)}catch(c){console.error("Error al exportar PDF: ",c)}finally{x.value=t}else console.error("No se encontró el elemento para convertir a PDF"),x.value=t};return(t,o)=>{var r,d,u,s,i;const c=L("InputNumber"),h=L("Button");return v(),y("div",ie,[ce,e("span",de,[S(c,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=m=>p.value=m),disabled:!w(K).documentos.includes((r=w(X)())==null?void 0:r.toLowerCase()),class:"mr-5",style:{width:"100%"},placeholder:"Cedula del empleado"},null,8,["modelValue","disabled"]),S(h,{severity:"help",style:{display:"flex",color:"white","align-items":"center","justify-content":"center","font-weight":"bold"},onClick:o[1]||(o[1]=m=>$(p.value))},{default:z(()=>[me]),_:1})]),p.value==null?(v(),y("p",he," Por favor digite el numero de decumento del usuario y presione Buscar")):E("",!0),!a.value.dni&&p.value?(v(),y("p",ue,l(N.value),1)):E("",!0),a.value.dni&&p.value?(v(),y("div",pe,[_e,e("div",fe,[ve,e("h6",ye,l(a.value.name),1)]),e("div",{class:"px-0 grid p-0",style:G([{display:"","border-radius":"2rem"},((u=(d=a.value)==null?void 0:d.status)==null?void 0:u.toLowerCase().split(" ")[0])=="activo"?"background-color:rgb(193, 255, 100);":"background-color: rgb(255, 132, 132);"])},[ge,e("h6",be,l(a.value.status),1)],4),e("div",xe,[we,e("h6",Ee,l(a.value.dni),1)]),e("div",Ce,[Ne,e("h6",Se,l(a.value.entry_date),1)]),e("div",Ie,[ke,e("h6",De,l(a.value.position),1)]),Ae,e("div",Oe,[Pe,e("h6",Le,l(a.value.contract_type),1)]),e("div",ze,[Te,e("h6",je,l(w(se)(a.value.salary)),1)]),S(h,{onClick:o[2]||(o[2]=m=>F()),style:{display:"flex",color:"white","align-items":"center","justify-content":"center","font-weight":"bold"}},{default:z(()=>[e("span",$e,[e("i",{class:Q(w(Z).UPLOAD)},null,2),f(" Descargar certificado")])]),_:1})])):E("",!0),W(e("div",Re,[e("div",Fe,[Me,e("h6",Be,l(O(C.value)),1),He,Ue,e("h6",Ve,[f(" CERTIFICA A: "),e("span",Ge,l(a.value.name),1)]),e("h5",We,[f(" El(la) señor(a) "),e("b",qe,l(a.value.name),1),f(" identificado con CC No. "),e("b",null,l(a.value.dni),1),f(" labora en nuestra empresa con un contrato "),e("b",Ye,l(a.value.contract_type),1),f(" desde el dia "+l(O(a.value.entry_date))+" activo a la fecha desempeñando el cargo de ",1),e("b",Je,l(a.value.position)+". ",1),e("h5",Ke,[f(" Para constancia de lo anterior se firma en Yumbo a "+l(j(C.value))+" ",1),Xe])])])],512),[[q,((i=(s=a.value)==null?void 0:s.status)==null?void 0:i.toLowerCase().split(" ")[0])=="activo"&&!x.value]]),a.value.dni?E("",!0):(v(),y("div",Qe,et))])}}},nt=M(tt,[["__scopeId","data-v-a21d736f"]]);export{nt as default};
