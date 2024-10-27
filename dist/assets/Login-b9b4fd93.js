import{_ as y,l,E as g,r as x,a as c,o as k,c as b,b as r,g as p,H as I,a1 as T,a0 as B,p as S,h as U,W as V,U as u,y as i,z as D}from"./index-5708809f.js";const m=s=>(S("data-v-13fd55f5"),s=s(),U(),s),L={style:{display:"flex",position:"relative","background-size":"cover",height:"100vh",width:"100vw",overflow:"hidden"},class:"p-0 fondo"},z=m(()=>r("img",{src:V,alt:"",style:{width:"48px"},class:"m-3"},null,-1)),E=m(()=>r("p",{class:"text-2xl",style:{"font-weight":"bold"}},"Iniciar sesión",-1)),C={__name:"Login",setup(s){const h=l(),d=g(),_=a=>{const e=l();return D.get(`${u}/validate-token`,{headers:{Authorization:`Bearer ${a}`}}).then(o=>(o.data.access_token&&e.setUserData(o.data),o.data)).catch(o=>{throw console.error("Error durante la validación del token:",o),o})},f=()=>{const a=l();setInterval(async()=>{const e=a.userData.access_token;if(!e){i.push("/auth/login");return}try{await _(e)}catch(o){console.error("La sesión ha expirado o el token es inválido:",o),a.userData={},i.push("/auth/login")}},3e4)},t=x({username:"",password:""}),v=async()=>{const a=new URLSearchParams;a.append("username",t.value.username),a.append("password",t.value.password);try{const e=await fetch(`${u}/token-employer`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});if(!e.ok)throw new Error("Network response was not ok");const o=await e.json();h.setUserData(o),f(),i.push("/"),d.add({severity:"success",summary:"Bienvenido",detail:"Hoy es un gran dia",life:3e3})}catch(e){d.add({severity:"error",summary:"Algo salio mal",detail:"Revisate los datos monstruo",life:3e3}),console.error(e)}};return(a,e)=>{const o=c("InputText"),w=c("Button");return k(),b("div",L,[r("form",{class:"col-12 m-auto",onSubmit:B(v,["prevent"]),style:{"max-width":"min-content",display:"flex","border-radius":"0.5rem","box-shadow":"0 0 10px rgba(0, 0, 0, 0.389)","flex-direction":"column","background-color":"rgb(255, 255, 255)","align-items":"center"}},[z,E,p(o,{class:"my-3 m-0",modelValue:t.value.username,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value.username=n),type:"text",autocomplete:"username",placeholder:"identificación",style:{width:"100%"}},null,8,["modelValue"]),I(r("input",{class:"p-inputtext p-component p-password-input",type:"password","onUpdate:modelValue":e[1]||(e[1]=n=>t.value.password=n),autocomplete:"current-password","aria-controls":"pv_id_3_panel","aria-expanded":"false","aria-haspopup":"true",placeholder:"Clave",value:""},null,512),[[T,t.value.password]]),p(w,{size:"samll",style:{width:"100%","background-color":"rgb(255, 98, 0)",border:"none",color:"#fff"},label:"Iniciar sesion",class:"my-3",type:"submit"})],32)])}}},R=y(C,[["__scopeId","data-v-13fd55f5"]]);export{R as default};
