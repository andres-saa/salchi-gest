import{U as e}from"./index-351d7858.js";const s=async()=>{try{const r=await fetch(`${e}/employers`,{method:"GET"});return r.ok?await r.json():(console.error("Error al obtener usuarios:",r.statusText),null)}catch(r){return console.error("Error al obtener usuarios:",r),null}};export{s as g};
