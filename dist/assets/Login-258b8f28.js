import{_ as g,l as r,z as x,r as k,a as l,o as b,c as I,b as c,d,a5 as V,p as B,g as S,a0 as T,U as p,i,j as U}from"./index-f28936d7.js";const m=s=>(B("data-v-42d36496"),s=s(),S(),s),D={style:{display:"flex",position:"relative","background-size":"cover",height:"100vh",width:"100vw",overflow:"hidden"},class:"p-0 fondo"},L=m(()=>c("img",{src:T,alt:"",style:{width:"48px"},class:"m-3"},null,-1)),z=m(()=>c("p",{class:"text-2xl",style:{"font-weight":"bold"}},"Iniciar sesión",-1)),P={__name:"Login",setup(s){const _=r(),u=x(),h=a=>{const e=r();return U.get(`${p}/validate-token`,{headers:{Authorization:`Bearer ${a}`}}).then(o=>(o.data.access_token&&e.setUserData(o.data),o.data)).catch(o=>{throw console.error("Error durante la validación del token:",o),o})},w=()=>{const a=r();setInterval(async()=>{const e=a.userData.access_token;if(!e){i.push("/auth/login");return}try{await h(e)}catch(o){console.error("La sesión ha expirado o el token es inválido:",o),a.userData={},i.push("/auth/login")}},6e4)},t=k({username:"",password:""}),v=async()=>{const a=new URLSearchParams;a.append("username",t.value.username),a.append("password",t.value.password);try{const e=await fetch(`${p}/token-employer`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});if(!e.ok)throw new Error("Network response was not ok");const o=await e.json();_.setUserData(o),w(),i.push("/"),u.add({severity:"success",summary:"Bienvenido",detail:"Hoy es un gran dia",life:1e4})}catch(e){u.add({severity:"error",summary:"Algo salio mal",detail:"Revisate los datos monstruo",life:1e4}),console.error(e)}};return(a,e)=>{const o=l("InputText"),y=l("Password"),f=l("Button");return b(),I("div",D,[c("form",{class:"col-12 m-auto",onSubmit:V(v,["prevent"]),style:{"max-width":"min-content",display:"flex","border-radius":"0.5rem","box-shadow":"0 0 10px rgba(0, 0, 0, 0.389)","flex-direction":"column","background-color":"rgb(255, 255, 255)","align-items":"center"}},[L,z,d(o,{class:"my-3 m-0",modelValue:t.value.username,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value.username=n),type:"text",placeholder:"identificación",style:{width:"100%"}},null,8,["modelValue"]),d(y,{class:"",toggleMask:"",modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value.password=n),placeholder:"Clave"},null,8,["modelValue"]),d(f,{size:"samll",style:{width:"100%","background-color":"rgb(255, 98, 0)",border:"none",color:"#fff"},label:"Iniciar sesion",class:"my-3",type:"submit"})],32)])}}},E=g(P,[["__scopeId","data-v-42d36496"]]);export{E as default};
