import{_ as m,f as u,r as l,o as w,c as f,a as n,d as c,w as _,a5 as y,U as h,v as x,Y as g}from"./index-6f5f142a.js";import{l as k}from"./user-3f7120cd.js";const b=k(),v={setup(){const t=u({username:"",password:""});return{credentials:t,login:async()=>{const a=new URLSearchParams;a.append("username",t.value.username),a.append("password",t.value.password);try{const e=await fetch(`${h}/token-employer`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});if(!e.ok)throw new Error("Network response was not ok");const r=await e.json();b.setUserData(r),localStorage.setItem("token",r.access_token),x.push("/actualizar-datos")}catch(e){console.error(e)}}}}},V={style:{display:"flex",height:"90vh"},class:"p-5"},I=n("img",{src:g,alt:"",style:{width:"48px"},class:"m-3"},null,-1),S=n("p",{class:"text-2xl",style:{"font-weight":"bold"}},"Iniciar sesión",-1),U=n("span",{class:"text-center m-auto"}," Iniciar Sesion ",-1);function B(t,o,a,e,r,C){const d=l("InputText"),i=l("Password"),p=l("Button");return w(),f("div",V,[n("form",{class:"col-12 md:col-6 lg:col-4 xl:col-3 m-auto p-",onSubmit:o[2]||(o[2]=y((...s)=>e.login&&e.login(...s),["prevent"])),style:{display:"flex","border-radius":"1rem","box-shadow":"0 0 10px rgba(0, 0, 0, 0.389)","flex-direction":"column","background-color":"rgb(255, 255, 255)","align-items":"center"}},[I,S,c(d,{class:"my-3",modelValue:e.credentials.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.credentials.username=s),type:"text",placeholder:"identificación",style:{width:"100%"}},null,8,["modelValue"]),c(i,{class:"my-3 col-12 p-0",modelValue:e.credentials.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.credentials.password=s),placeholder:"Clave",toggleMask:"",style:{width:""}},null,8,["modelValue"]),c(p,{class:"my-3",type:"submit",style:{}},{default:_(()=>[U]),_:1})],32)])}const N=m(v,[["render",B]]);export{N as default};