import{_ as m,f as u,r,o as w,c as _,a as n,d as l,w as f,bX as y,U as h,y as x}from"./index-de8de9e2.js";import{_ as g}from"./logo-c69ae777.js";const b={setup(){const t=u({username:"",password:""});return{credentials:t,login:async()=>{const a=new URLSearchParams;a.append("username",t.value.username),a.append("password",t.value.password);try{const e=await fetch(`${h}/token-employer`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});if(!e.ok)throw new Error("Network response was not ok");const c=await e.json();localStorage.setItem("token",c.access_token),x.push("/actualizar-datos")}catch(e){console.error(e)}}}}},k={style:{display:"flex",height:"90vh"},class:"p-5"},V=n("img",{src:g,alt:"",style:{width:"48px"},class:"m-3"},null,-1),v=n("p",{class:"text-2xl",style:{"font-weight":"bold"}},"Iniciar sesión",-1),I=n("span",{class:"text-center m-auto"}," Iniciar Sesion ",-1);function B(t,o,a,e,c,S){const d=r("InputText"),i=r("Password"),p=r("Button");return w(),_("div",k,[n("form",{class:"col-12 md:col-6 lg:col-4 xl:col-3 m-auto p-",onSubmit:o[2]||(o[2]=y((...s)=>e.login&&e.login(...s),["prevent"])),style:{display:"flex","border-radius":"1rem","box-shadow":"0 0 10px rgba(0, 0, 0, 0.389)","flex-direction":"column","background-color":"rgb(255, 255, 255)","align-items":"center"}},[V,v,l(d,{class:"my-3",modelValue:e.credentials.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.credentials.username=s),type:"text",placeholder:"identificación",style:{width:"100%"}},null,8,["modelValue"]),l(i,{class:"my-3 col-12 p-0",modelValue:e.credentials.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.credentials.password=s),placeholder:"Clave",toggleMask:"",style:{width:""}},null,8,["modelValue"]),l(p,{class:"my-3",type:"submit",style:{}},{default:f(()=>[I]),_:1})],32)])}const P=m(b,[["render",B]]);export{P as default};
