import{f as e,U as t}from"./index-bb5ca796.js";const n=e([{}]),c=e([]),S=e([]),d=e(["Masculino","Femenino"]),I=e(["COOSALUD EPS-S","NUEVA EPS","MUTUAL SER","ALIANSALUD EPS","SALUD TOTAL EPS S.A.","EPS SANITAS","EPS SURA","FAMISANAR EPS","SERVICIO OCCIDENTAL DE SALUD EPS (SOS EPS)","SALUD MIA EPS","COMFENALCO VALLE EPS","COMPENSAR EPS","EPM - EMPRESAS PUBLICAS DE MEDELLIN","FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA","CAJACOPI ATLANTICO","CAPRESOCA EPS","COMFACHOCO","COMFAORIENTE","EPS FAMILIAR DE COLOMBIA","ASMET SALUD","EMSSANAR E.S.S.","CAPITAL SALUD EPS-S","SAVIA SALUD EPS","DUSAKAWI EPSI","ASOCIACION INDIGENA DEL CAUCA EPSI","ANAS WAYUU EPSI","MALLAMAS EPSI","PIJAOS SALUD EPSI","SALUD BÓLIVAR EPS SAS"]),u=e(["Soltero/a","Casado/a","Divorciado/a","Union libre"]),D=e(["Primaria","Secundaria","Técnico/tecnológico","Universitario/a","Posgrado"]),C=e(["Fijo 3 meses","Turneros","Indefinido"]),L=e(["Propia","Arrendada","Familiar","Otra"]),O=e(["XS","S","M","L","XL","XXL"]),P=e(["28","30","32","34","36","38","40","42"]),p=e(["Carro","Moto"]),R=e(["Coordinador de Sedes Cali","Coordinador de Sede Bogotá","Líder de Punto","Cajero","Cocinero","Mesero","Auxiliar de Cocina","Jefe de Cocina","Domiciliario","Gerencia General","Jefe de Gestión Humana","gestion humana","SAAMOVAR","AUXILIAR CONTABLE","DIGITADORA","AUXILIAR DE LOGISTICA","AUXILIAR DE TESORERIA","TESORERO","PATINADOR","cajero dia","AUXILIAR DE PRODUCCION","Aprendiz SENA","Jefe de Producción","Líder de Producción","Auxiliar de Producción","Contadora","Auxiliar de Contabilidad","Coordinador de Inventarios","Auxiliar de Logística","Conductor","JEFE DE PRODUCCION","FRITADOR"," LIDER DE CAJA","SUBGERENTE","LIDER DE PUNTO","CAJERO NOCHE","Jefe de Compras","Auxiliar de Compras","Gerente de Marketing","Diseñador","Community Manager","administrador"]),U=async()=>{try{const r=await fetch(`${t}/sites`);if(r.ok){const o=await r.json();return n.value=o,o}else return console.error("Error al obtener los datos de la API"),[]}catch(r){return console.error("Error al obtener los datos de la API",r),[]}},T=async r=>{try{const o=await fetch(`${t}/site/${r}`);if(o.ok){const a=await o.json();return c.value=a[0],a}else console.error("Error al obtener los datos de la API")}catch(o){console.error("Error al obtener los datos de la API",o)}},f=e(["A+","A-","B+","B-","AB+","AB-","O+","O-"]),N=e(["activo","inactivo","Por remplazar"]);function M(r){return n.value.find(o=>o.site_id==r)}const m=async(r,o)=>{try{const a=`${t}/get-site-document/${r}/${o}/`,s=await fetch(a);if(console.log(r,o,s),s.ok)if(s.headers.get("content-type")==="application/pdf"){const i=await s.blob(),A=URL.createObjectURL(i);window.open(A,"_blank")}else console.error("La respuesta no es un PDF.");else console.error("Error en la solicitud:",s.status,s.statusText)}catch(a){console.error("Error al enviar la solicitud:",a)}},V=async r=>{try{const o=`${t}/get-site-documents-info/${r}`,a=await fetch(o);if(console.log(a),a.ok){const s=await a.json();S.value=s}}catch(o){console.error("Error al enviar la solicitud:",o)}};export{d as G,R as P,T as a,m as b,S as c,V as d,c as e,M as f,U as g,f as h,D as i,C as j,I as k,L as l,u as m,O as n,N as o,P as p,n as s,p as v};
