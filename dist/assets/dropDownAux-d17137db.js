<<<<<<<< HEAD:dist/assets/dropDownAux-d17137db.js
import{r as o,V as l,U as n}from"./index-a1098956.js";const S=o([{}]),d=o([]),E=o([]),I=o(["Masculino","Femenino"]),D=o(["COOSALUD EPS-S","NUEVA EPS","MUTUAL SER","ALIANSALUD EPS","SALUD TOTAL EPS S.A.","EPS SANITAS","EPS SURA","FAMISANAR EPS","SERVICIO OCCIDENTAL DE SALUD EPS (SOS EPS)","SALUD MIA EPS","COMFENALCO VALLE EPS","COMPENSAR EPS","EPM - EMPRESAS PUBLICAS DE MEDELLIN","FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA","CAJACOPI ATLANTICO","CAPRESOCA EPS","COMFACHOCO","COMFAORIENTE","EPS FAMILIAR DE COLOMBIA","ASMET SALUD","EMSSANAR E.S.S.","CAPITAL SALUD EPS-S","SAVIA SALUD EPS","DUSAKAWI EPSI","ASOCIACION INDIGENA DEL CAUCA EPSI","ANAS WAYUU EPSI","MALLAMAS EPSI","PIJAOS SALUD EPSI","SALUD BÓLIVAR EPS SAS"]),L=o(["Soltero/a","Casado/a","Divorciado/a","Union libre"]),P=o(["Primaria","Secundaria","Técnico/tecnológico","Universitario/a","Posgrado"]),O=o(["Fijo 3 meses","Turneros","Indefinido"]),p=o(["Propia","Arrendada","Familiar","Otra"]),C=o(["XS","S","M","L","XL","XXL"]),U=o(["28","30","32","34","36","38","40","42"]),m=o(["Carro","Moto"]),M=o(l.todos),V=async()=>{try{const e=await fetch(`${n}/sites`);if(e.ok){const s=await e.json();return S.value=s,s}else return console.error("Error al obtener los datos de la API"),[]}catch(e){return console.error("Error al obtener los datos de la API",e),[]}},N=o(["A+","A-","B+","B-","AB+","AB-","O+","O-"]),f=o(["activo","inactivo","Por remplazar"]);function R(e){return S.value.find(s=>s.site_id==e)}const T=async(e,s)=>{try{const a=`${n}/get-document-file/${e}/${s}/`,t=await fetch(a);if(t.ok){const c=await t.blob(),A=URL.createObjectURL(c),i=`${e}-${s}.${c.type.split("/")[1]||"bin"}`,r=document.createElement("a");r.href=A,r.download=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}else console.error("Error en la solicitud:",t.status,t.statusText)}catch(a){console.error("Error al enviar la solicitud:",a)}},y=async e=>{try{const s=`${n}/get-site-documents-info/${e}`,a=await fetch(s);if(console.log(a),a.ok){const t=await a.json();E.value=t}}catch(s){console.error("Error al enviar la solicitud:",s)}};export{I as G,M as P,T as a,y as b,E as c,d,N as e,R as f,V as g,P as h,O as i,D as j,p as k,C as l,L as m,f as n,U as p,S as s,m as v};
========
import{r as o,V as l,U as n}from"./index-1a945cfc.js";const S=o([{}]),d=o([]),E=o([]),I=o(["Masculino","Femenino"]),D=o(["COOSALUD EPS-S","NUEVA EPS","MUTUAL SER","ALIANSALUD EPS","SALUD TOTAL EPS S.A.","EPS SANITAS","EPS SURA","FAMISANAR EPS","SERVICIO OCCIDENTAL DE SALUD EPS (SOS EPS)","SALUD MIA EPS","COMFENALCO VALLE EPS","COMPENSAR EPS","EPM - EMPRESAS PUBLICAS DE MEDELLIN","FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA","CAJACOPI ATLANTICO","CAPRESOCA EPS","COMFACHOCO","COMFAORIENTE","EPS FAMILIAR DE COLOMBIA","ASMET SALUD","EMSSANAR E.S.S.","CAPITAL SALUD EPS-S","SAVIA SALUD EPS","DUSAKAWI EPSI","ASOCIACION INDIGENA DEL CAUCA EPSI","ANAS WAYUU EPSI","MALLAMAS EPSI","PIJAOS SALUD EPSI","SALUD BÓLIVAR EPS SAS"]),L=o(["Soltero/a","Casado/a","Divorciado/a","Union libre"]),P=o(["Primaria","Secundaria","Técnico/tecnológico","Universitario/a","Posgrado"]),O=o(["Fijo 3 meses","Turneros","Indefinido"]),p=o(["Propia","Arrendada","Familiar","Otra"]),C=o(["XS","S","M","L","XL","XXL"]),U=o(["28","30","32","34","36","38","40","42"]),m=o(["Carro","Moto"]),M=o(l.todos),V=async()=>{try{const e=await fetch(`${n}/sites`);if(e.ok){const s=await e.json();return S.value=s,s}else return console.error("Error al obtener los datos de la API"),[]}catch(e){return console.error("Error al obtener los datos de la API",e),[]}},N=o(["A+","A-","B+","B-","AB+","AB-","O+","O-"]),f=o(["activo","inactivo","Por remplazar"]);function R(e){return S.value.find(s=>s.site_id==e)}const T=async(e,s)=>{try{const a=`${n}/get-document-file/${e}/${s}/`,t=await fetch(a);if(t.ok){const c=await t.blob(),A=URL.createObjectURL(c),i=`${e}-${s}.${c.type.split("/")[1]||"bin"}`,r=document.createElement("a");r.href=A,r.download=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}else console.error("Error en la solicitud:",t.status,t.statusText)}catch(a){console.error("Error al enviar la solicitud:",a)}},y=async e=>{try{const s=`${n}/get-site-documents-info/${e}`,a=await fetch(s);if(console.log(a),a.ok){const t=await a.json();E.value=t}}catch(s){console.error("Error al enviar la solicitud:",s)}};export{I as G,M as P,T as a,y as b,E as c,d,N as e,R as f,V as g,P as h,O as i,D as j,p as k,C as l,L as m,f as n,U as p,S as s,m as v};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/dropDownAux-0900efb8.js
