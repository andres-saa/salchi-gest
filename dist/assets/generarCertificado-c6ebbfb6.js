import{_ as B,f as _,B as F,h as P,aV as M,bV as H,g as U,r as L,o as v,c as y,a as e,d as C,l as w,w as z,n as S,t as n,v as W,bQ as q,bI as G,k as f,ah as Y,U as T,aS as J,bW as Q,bX as X,q as K,P as Z,p as ee,e as te}from"./index-829b5995.js";import{_ as oe}from"./logo-c69ae777.js";import{f as se}from"./formatoPesos-2a38d2e7.js";import ae from"./html2canvas.esm-e0a7d97b.js";import{E as ne}from"./jspdf.es.min-c783b0bd.js";const le="/images/sello gestion humana.png",re="/images/certificado.png";const l=g=>(ee("data-v-0ce94785"),g=g(),te(),g),ie={class:"m-2 m-auto"},ce=l(()=>e("p",{class:"text-2xl lg:text-3xl text-center my-4 mt-8",style:{"font-weight":"bold"}},"Generar Certificado Laboral",-1)),de={class:"mb-6 col-12",style:{display:"flex",height:"auto"}},me=l(()=>e("span",{style:{color:"white"}},"Buscar",-1)),he={key:0,class:"text-1xl m-auto col-6 p-0",style:{color:"var(--primary-color)"}},ue={key:1,class:"text-5xl m-auto col-12"},pe={key:2,class:"col-12 p-0 m-auto",style:{height:"max-content","background-color":"transparent"}},_e=l(()=>e("h6",{class:"text-center p-2 m-0 mb-5 col-12",style:{"border-radius":"2rem","font-weight":"bold","background-color":"var(--gray-200)"}},"INFORMACIÓN DEL EMPLEADO",-1)),fe={class:"px-0 grid",style:{display:""}},ve=l(()=>e("h6",{class:"col-6 m-0 text-left text-md"},"NOMBRE",-1)),ye={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},ge=l(()=>e("h6",{class:"col-6 m-0 py-2 text-left"},"ESTADO",-1)),be={class:"col-6 m-0 py-2 text-right",style:{"font-weight":"300","min-width":"max-content"}},xe={class:"px-0 grid",style:{}},we=l(()=>e("h6",{class:"col-6 m-0 text-left"},"DOCUMENTO",-1)),Se={class:"col-6 m-0 text-right",style:{"font-weight":"300","min-width":"max-content"}},Ee={class:"px-0 grid",style:{}},Ne=l(()=>e("h6",{class:"col-6 m-0 text-left"},"FECHA DE INICIO",-1)),Ce={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},Ie={class:"px-0 grid",style:{"background-color":""}},ke=l(()=>e("h6",{class:"col-6 m-0 text-left"},"CARGO",-1)),De={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},Ae=l(()=>e("h6",{class:"text-center p-2 mb-5",style:{"border-radius":"2rem","font-weight":"bold","background-color":"var(--gray-200)"}},"DETALLES ADICIONALES",-1)),Oe={class:"px-0 grid",style:{}},Pe=l(()=>e("h6",{class:"col-6 m-0 text-left"},"TIPO DE CONTRATO",-1)),Le={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},ze={class:"px-0 grid",style:{}},Te=l(()=>e("h6",{class:"col-6 m-0 text-left"},"SALARIO",-1)),je={class:"col-6 m-0 text-right",style:{"font-weight":"300"}},$e={style:{color:"white"}},Re={class:"col-12 p-0 mt-6",style:{"overflow-x":"auto","box-shadow":"0 0 20px rgba(0, 0, 0, 0.308)"},ref:"contenidoParaPDF"},Ve={class:"a4-size p-8 mi-clase",style:{"box-shadow":"0 0 10px rgba(0, 0, 0, 0.508)"}},Be=l(()=>e("img",{class:"",src:oe,style:{width:"10%"},alt:""},null,-1)),Fe={class:"py-4",style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},Me=l(()=>e("h6",{class:"text-center py-5",style:{"font-size":"12pt","font-weight":"bold",color:"black","font-family":"Arial, Helvetica, sans-serif"}}," INVERSIONES SALCHIMONSTER SAS ",-1)),He=l(()=>e("h6",{style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"},class:"text-center"},"NIT: 901.420.874-0",-1)),Ue={class:"text-center py-4",style:{"font-weight":"bold"}},We={style:{"text-transform":"uppercase"}},qe={class:"text-md text-justify",style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"}},Ge={style:{"text-transform":"uppercase"}},Ye={style:{"text-transform":"uppercase"}},Je={style:{"text-transform":"uppercase"}},Qe={style:{"font-size":"12pt","font-weight":"normal",color:"black","font-family":"Arial, Helvetica, sans-serif"},class:"py-1 mt-0"},Xe=Y('<p class="py-6" data-v-0ce94785> Cordialmente, </p><img style="width:20rem;border-bottom:2px solid;padding-right:3rem;padding-bottom:1rem;" src="'+le+'" alt="" data-v-0ce94785><p class="py-0 my-0" data-v-0ce94785> Oficina de Gestión Humana</p><p class="py-0 my-0" data-v-0ce94785>INVERSIONES SALCHIMONSTER SAS</p><p class="py-0 my-0" data-v-0ce94785> NIT. 901420874-0 </p>',5),Ke={key:3,class:"col-12"},Ze=l(()=>e("img",{src:re,alt:"",srcset:"",style:{width:"100%",height:"50vh","object-fit":"cover","border-radius":"1rem"}},null,-1)),et=[Ze],tt={__name:"generarCertificado",setup(g){const I=_(window.innerWidth),k=F(()=>I.value<600),D=()=>{I.value=window.innerWidth};P(()=>{window.addEventListener("resize",D)}),M(()=>{window.removeEventListener("resize",D)});const a=_({}),p=_(H()),A=_(),E=_("2029-12-21 16:19"),N=_();document.getElementsByClassName("mi-clase");const j=t=>{let o=new Date(t),c=o.getDate(),h=o.getMonth(),r=o.getFullYear(),u=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][h];return`los ${c} días del mes de ${u} de ${r}`};U(p,(t,o)=>{console.log(`El valor de usrDni ha cambiado de ${o} a ${t}`)});const $=async t=>{fetch(`${T}/employer/dni/${t}`).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{console.log("Employer data:",o),a.value=o,N.value=""}).catch(o=>{console.error("There has been a problem with your fetch operation:",o),a.value={},N.value="  No hay un usuario para el número de documento "+p.value,A.value="error"})},R=async()=>{fetch(`${T}/server_time`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{console.log("Employer data:",t),E.value=t}).catch(t=>{console.error("There has been a problem with your fetch operation:",t),A.value="error"})};P(async()=>{R()});function O(t){t||(t="2029-12-21 16:19");const o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];let[c,h]=t.split(" "),[r,d,u]=c.split("-").map(Number),s=o[d-1];return`${u} de ${s} de ${r}`}function b(t){const o=["cero","un","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],c=["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"],h=["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];function r(s){let i="",m="cien";if(s[0]>1?(i+=o[s[0]]+"cientos ",m=""):s[0]===1&&(i+=m+" "),s[1]>1)i+=h[s[1]]+" y ";else if(s[1]===1)return i+c[s[2]];return(s[2]!==0||s[0]===0&&s[1]===0)&&(i+=o[s[2]]),i}if(t===0)return o[0];if(t<0)return"menos "+b(-t);let d=[];for(;t>0;)d.push(t%1e3),t=Math.floor(t/1e3);return d.map((s,i)=>{if(s===0)return"";let m=r([Math.floor(s/100),Math.floor(s%100/10),s%10]);return i===1?s===1?"mil":m+" mil":i===2?s===1?"un millón":m+" millones":m}).reverse().join(" ").trim()}console.log(b(16e5)),console.log(b(16e5)),console.log(b(1111111));const x=_(k.value),V=async()=>{const t=k.value;x.value=!1,await J();let o=document.querySelector(".mi-clase");if(o)try{const h=(await ae(o,{scale:2.5})).toDataURL("image/jpeg",.9),r=new ne({orientation:"portrait",unit:"px",format:"a4"}),d=r.internal.pageSize.getWidth(),u=r.internal.pageSize.getHeight();r.addImage(h,"JPEG",0,0,d,u),r.save(`certificado laboral - ${a.value.name}.pdf`)}catch(c){console.error("Error al exportar PDF: ",c)}finally{x.value=t}else console.error("No se encontró el elemento para convertir a PDF"),x.value=t};return(t,o)=>{var r,d,u,s,i;const c=L("InputNumber"),h=L("Button");return v(),y("div",ie,[ce,e("span",de,[C(c,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=m=>p.value=m),disabled:!w(Q).documentos.includes((r=w(X)())==null?void 0:r.toLowerCase()),class:"mr-5",style:{width:"100%"},placeholder:"Cedula del empleado"},null,8,["modelValue","disabled"]),C(h,{style:{display:"flex",color:"white","align-items":"center","justify-content":"center","font-weight":"bold"},onClick:o[1]||(o[1]=m=>$(p.value))},{default:z(()=>[me]),_:1})]),p.value==null?(v(),y("p",he," Por favor digite el numero de decumento del usuario y presione Buscar")):S("",!0),!a.value.dni&&p.value?(v(),y("p",ue,n(N.value),1)):S("",!0),a.value.dni&&p.value?(v(),y("div",pe,[_e,e("div",fe,[ve,e("h6",ye,n(a.value.name),1)]),e("div",{class:"px-0 grid p-0",style:W([{display:"","border-radius":"2rem"},((u=(d=a.value)==null?void 0:d.status)==null?void 0:u.toLowerCase().split(" ")[0])=="activo"?"background-color:rgb(193, 255, 100);":"background-color: rgb(255, 132, 132);"])},[ge,e("h6",be,n(a.value.status),1)],4),e("div",xe,[we,e("h6",Se,n(a.value.dni),1)]),e("div",Ee,[Ne,e("h6",Ce,n(a.value.entry_date),1)]),e("div",Ie,[ke,e("h6",De,n(a.value.position),1)]),Ae,e("div",Oe,[Pe,e("h6",Le,n(a.value.contract_type),1)]),e("div",ze,[Te,e("h6",je,n(w(se)(a.value.salary)),1)]),C(h,{onClick:o[2]||(o[2]=m=>V()),style:{display:"flex",color:"white","align-items":"center","justify-content":"center","font-weight":"bold"}},{default:z(()=>[e("span",$e,[e("i",{class:K(w(Z).UPLOAD)},null,2),f(" Descargar certificado")])]),_:1})])):S("",!0),q(e("div",Re,[e("div",Ve,[Be,e("h6",Fe,n(O(E.value)),1),Me,He,e("h6",Ue,[f(" CERTIFICA A: "),e("span",We,n(a.value.name),1)]),e("h5",qe,[f(" El(la) señor(a) "),e("b",Ge,n(a.value.name),1),f(" identificado con CC No. "),e("b",null,n(a.value.dni),1),f(" labora en nuestra empresa con un contrato "),e("b",Ye,n(a.value.contract_type),1),f(" desde el dia "+n(O(a.value.entry_date))+" activo a la fecha desempeñando el cargo de ",1),e("b",Je,n(a.value.position)+". ",1),e("h5",Qe,[f(" Para constancia de lo anterior se firma en Yumbo a "+n(j(E.value))+" ",1),Xe])])])],512),[[G,((i=(s=a.value)==null?void 0:s.status)==null?void 0:i.toLowerCase().split(" ")[0])=="activo"&&!x.value]]),a.value.dni?S("",!0):(v(),y("div",Ke,et))])}}},rt=B(tt,[["__scopeId","data-v-0ce94785"]]);export{rt as default};
