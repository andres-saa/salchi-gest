import{f as c,h as n,o as t,c as s,a as e,F as i,b as d,U as h,q as p,l as u,P as g,k as x}from"./index-c4b56b22.js";const m=e("p",{class:"text-center text-5xl py-3",style:{"font-weight":"bold"}},"Guias para el area finanzas",-1),f={class:"col-12 p-0 m-0",style:{height:"80vh",display:"flex","align-items":"center"}},_={class:"grid m-auto m-0",style:{"max-width":"1280px"}},b={class:"col-12 sm:col-6 md:col-4 lg:col-6 xl:col-4 py-2",style:{"background-color":"rgba(255, 0, 0, 0)","aspect-ratio":"4 / 3"}},v={style:{"box-shadow":"0 0 10px","background-size":"cover","background-image":"url('https://static2.bigstockphoto.com/0/1/3/large1500/310380877.jpg')",height:"100%",width:"100%",overflow:"hidden","border-radius":"1rem",position:"relative"}},y=e("div",{class:"p-3 text-sm xl:text-lg",style:{"text-shadow":"0 0 3px black",width:"100%",position:"",color:"white",height:"100%","background-color":"rgba(0, 0, 0, 0.661)"}},[e("p",{class:"text-2xl",style:{"font-weight":"bold"}}," Descripcion: "),x(),e("p",null,"Informacion referente a todo lo relacionado con las facturas y como se debe realizar el proceso de instalacion de los vienes de servicion dados a los integrantes de la sesion del inicio")],-1),w={style:{"box-shadow":"0 0 10px",width:"50%",right:"0",display:"flex","align-items":"center","justify-content":"center",position:"absolute",bottom:"0","border-radius":"10rem 0 0 0","background-color":"rgb(255, 255, 255)","aspect-ratio":"16 / 4"}},j={__name:"Guias",setup(k){const a=c([]),l=async()=>{try{const o=await fetch(`${h}/archived-files`);if(!o.ok)throw"paila";return await o.json()}catch(o){console.log(o)}};return n(()=>{l().then(o=>a.value=o)}),(o,r)=>(t(),s(i,null,[m,e("div",f,[e("div",_,[(t(!0),s(i,null,d(a.value,z=>(t(),s("div",b,[e("div",v,[y,e("div",w,[e("i",{class:p(["fa-solid fa-download text-5xl p-1",u(g).DOWNLOAD]),style:{"z-index":"",color:"rgb(255, 0, 0)"}},null,2)])])]))),256))])])],64))}};export{j as default};