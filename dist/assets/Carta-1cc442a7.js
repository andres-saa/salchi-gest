import{_ as J,C as Q,h as l,H as X,i as Y,D as Z,j as U,U as p,g as I,o as v,c as f,a as s,t as ee,u as F,f as c,e as C,F as ae,r as te,k as j,b as oe,P as S,p as re,m as ne,K as B}from"./index-dffc30d1.js";import{p as se}from"./ProductService-f2197daf.js";import"./site-8f528972.js";const ie=g=>(re("data-v-230a0eef"),g=g(),ne(),g),le={style:{padding:"3rem"}},ce={style:{"text-transform":"capitalize"}},de={class:"image",style:{display:"flex","flex-direction":"column",position:"relative","justify-content":"end","align-items":"end",padding:"0 .5rem"}},ue=["src"],pe={key:1,style:{position:"absolute",left:"0",top:"0",width:"100%",display:"flex","justify-content":"center","align-items":"center",height:"100%","background-color":"#ffffff80"}},ve={class:"col-12 p-0 m-0"},fe={class:"draggable-container"},ge=["onDragstart","onDragenter","onDrop"],me=["src","alt"],_e=ie(()=>s("div",{class:"confirmation-content"},[s("i",{class:"pi pi-exclamation-triangle",style:{"font-size":"2rem",color:"#ff9800"}}),s("span",{class:"message"},"¿Estás seguro de que deseas eliminar esta imagen?")],-1)),he={class:"dialog-footer"},ye={__name:"Carta",setup(g){const m=Q(),o=l([]),_=l(-1),h=l(-1),y=l(!1),u=l(null),b=l(!1),w=l(!1),d=l([]),D=l(null),$=l(null),E=X(()=>o.value.slice().sort((e,a)=>e.index-a.index));Y(async()=>{await A()}),Z(()=>m.params.carta_id,async()=>{await A()});async function A(){try{const e=m.params.carta_id,a=await U.get(`${p}/carta/${e}`);o.value=a.map((t,r)=>({...t,id:t.id??Date.now()+Math.random(),index:t.index??r,src:t.img_identifier,title:t.title??"Sin título"}))}catch(e){console.error("Error al obtener cartas:",e)}}async function R(e){const a=await U.post(`${p}/carta/`,e);return location.reload(),a}async function L(e){return(await B.post(`${p}/carta/reorder`,e)).data}async function M(e){return(await B.delete(`${p}/carta/${e}`)).data}function O(e){_.value=e}function z(e){h.value=e}function N(){h.value=-1}async function V(e){if(e===_.value)return;const a=E.value[_.value],t=o.value.findIndex(r=>r.id===a.id);o.value.splice(t,1),o.value.splice(e,0,a),o.value.forEach((r,i)=>{r.index=i}),_.value=-1,h.value=-1;try{const r=o.value.map(i=>({id:i.id,index:i.index,img_identifier:i.src}));await L(r)}catch(r){console.error("Error al reordenar cartas:",r)}}function H(e){u.value=e,y.value=!0}function P(){y.value=!1,u.value=null}async function T(){if(u.value){try{await M(u.value.id);const e=o.value.findIndex(a=>a.id===u.value.id);e!==-1&&(o.value.splice(e,1),o.value.forEach((a,t)=>{a.index=t}))}catch(e){console.error("Error al eliminar carta:",e)}P()}}function q(){b.value=!0}function G(){$.value.click()}function K(e){const a=e.target.files;!a||a.length===0||(d.value=Array.from(a),d.value.length>0&&(D.value=URL.createObjectURL(d.value[0])),e.target.value="")}async function W(){if(d.value.length===0){alert("Por favor selecciona al menos una imagen.");return}w.value=!0;try{for(const e of d.value){const a=new FormData;a.append("file",e);const t=await se.uploadPhoto(a),{image_identifier:r}=t,i={index:o.value.length,img_identifier:r,carta_id:m.params.carta_id},n=await R(i);o.value.push({id:n.id??Date.now()+Math.random(),index:n.index??o.value.length-1,src:n.img_identifier,title:e.name})}d.value=[],D.value=null,b.value=!1}catch(e){console.error("Error al subir las imágenes o crear cartas:",e),alert("Hubo un error al subir las imágenes.")}finally{w.value=!1}}return(e,a)=>{const t=I("Button"),r=I("ProgressSpinner"),i=I("Dialog");return v(),f("div",le,[s("h2",ce,[s("b",null,ee(F(m).params.carta_name),1)]),c(t,{style:{margin:"1rem 0","background-color":"var(--primary-color)",border:"none"},label:"Agregar Imágenes",icon:"pi pi-upload",severity:"help",onClick:q}),c(i,{header:"Agregar Imágenes",visible:b.value,"onUpdate:visible":a[0]||(a[0]=n=>b.value=n),modal:"",style:{width:"40rem"}},{footer:C(()=>[s("div",ve,[c(t,{onClick:W,severity:"help",label:"Guardar"})])]),default:C(()=>[s("div",de,[D.value?(v(),f("img",{key:0,src:D.value,alt:"Preview",style:{width:"100%","aspect-ratio":"19 / 9","background-color":"rgb(255, 255, 255)","object-fit":"cover","border-radius":"0.2rem"}},null,8,ue)):j("",!0),w.value?(v(),f("div",pe,[c(r,{strokeWidth:"8",style:{color:"white"}})])):j("",!0),c(t,{class:"my-3",label:"Agregar foto",severity:"help",onClick:G}),s("input",{type:"file",ref_key:"fileInput",ref:$,onChange:K,style:{display:"none"},multiple:"",accept:"image/*"},null,544)])]),_:1},8,["visible"]),s("div",fe,[(v(!0),f(ae,null,te(E.value,(n,x)=>(v(),f("div",{key:n.id,class:oe(["draggable-item",{"drag-over":h.value===x}]),draggable:"true",onDragstart:k=>O(x),onDragenter:S(k=>z(x),["prevent"]),onDragover:a[1]||(a[1]=S(()=>{},["prevent"])),onDragleave:N,onDrop:k=>V(x)},[s("img",{src:`${F(p)}/read-photo-product/${n.src}`,alt:n.title},null,8,me),c(t,{style:{"border-radius":"50%",position:"absolute","background-color":"var(--primary-color)",border:"3px solid","aspect-ratio":"1 / 1",right:"-1.5rem",top:"-1.5rem"},icon:"pi pi-times",severity:"info",class:"delete-button",onClick:S(k=>H(n),["stop"])},null,8,["onClick"])],42,ge))),128)),c(i,{header:"Confirmar Eliminación",visible:y.value,"onUpdate:visible":a[2]||(a[2]=n=>y.value=n),modal:"",closable:!1,style:{width:"350px"}},{default:C(()=>[_e,s("div",he,[c(t,{label:"Sí, eliminar",icon:"pi pi-check",class:"p-button-danger",onClick:T}),c(t,{label:"Cancelar",icon:"pi pi-times",class:"p-button-secondary",onClick:P})])]),_:1},8,["visible"])])])}}},we=J(ye,[["__scopeId","data-v-230a0eef"]]);export{we as default};
