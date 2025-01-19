import{B as N,l as S,G as w,U as x,_ as V,g as r,h as R,d as k,o as p,c as A,e as i,f as h,a as e,u as H,x as C,j as y,m as _,t as E,c9 as O,p as Q,k as G}from"./index-eb2a5b3d.js";const L={store:N(),async getAlldrive(){S();try{this.store.setLoading(!0,"cargango archivos");const t=await w.get(`${x}/files-list/1heb6WmBQHyeNxkrttn1QHFoL-jbhXGd2`);return t.status===200?(this.store.setLoading(!1,"cargango archivos"),t.data):(this.store.setLoading(!1,"cargango archivos"),console.error("An error occurred while fetching the ingredients:",t.status),null)}catch(t){return this.store.setLoading(!1,"cargango archivos"),console.error("An error occurred while fetching the ingredients:",t),null}},async uploadData(t){this.store.setLoading(!0,"Enviando a google drive");const c=`${x}/upload-file/`;try{const l=await w.post(c,t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:u=>{this.store.loading.progress=+Math.round(u.loaded/u.total*100)}});l.status===200?(console.log("Archivo photo cargado con éxito"),this.store.setLoading(!1,"Enviando a google drive")):(console.error("Error al cargar foto de perfil:",l.status,l.statusText),this.store.setLoading(!1,"Enviando a google drive"))}catch(l){console.error("Error en la solicitud:",l),this.store.setLoading(!1,"Enviando a google drive")}},async deleteData(t){const c=`${x}/delete-file/${t}`;try{const l=await w.delete(c);l.status===200?console.log("Archivo photo cargado con éxito"):console.error("Error al cargar foto de perfil:",l.status,l.statusText)}catch(l){console.error("Error en la solicitud:",l)}}};const F=t=>(Q("data-v-d6e42680"),t=t(),G(),t),M={class:"mt-8 m-auto",style:{"max-width":"1024px"}},W={style:{width:"100%",display:"flex","align-items":"center","justify-content":"center",border:"3px dashed var(--primary-color)","aspect-ratio":"16 / 9","border-radius":".5rem",overflow:"hidden"}},X=["src"],z={style:{display:"flex","justify-content":"end",gap:"1rem"}},q=F(()=>e("b",null,"seguro",-1)),J={style:{display:"flex","justify-content":"end",gap:"1rem"}},K=F(()=>e("div",{class:"my-2 col-12"},[e("p",{style:{"font-weight":"bold"},class:"text-4xl text-center pl-0 ml-0"},[e("i"),_(" Innovacion")])],-1)),Y={class:"header"},Z={class:"col-12 m-auto",style:{"max-width":"1280px"}},P={class:""},ee={class:"col-12 lg:col-6 md:col-6 xl:col-4",style:{position:"relative"}},te={class:"p-3",style:{height:"100%",position:"relative"}},oe={class:"container -3 p-3",style:{height:"100%",overflow:"hidden","border-radius":".3rem"}},ae=["src"],se={class:"text-2xl my-2",style:{"text-transform":"capitalize","max-width":"100%"}},le={style:{width:"100%",height:"100%",position:"absolute",display:"flex","align-items":"center","pointer-events":"none","justify-content":"center",top:"0",left:"0"}},re=["href"],ie={__name:"innovation",setup(t){const c=r([]),l=r("grid"),u=r({});r(!1);const g=r(!1);R(async()=>{await b()});const T=o=>{g.value=!0,u.value=o},b=async()=>{c.value=await L.getAlldrive()},U=async o=>{await L.deleteData(o),g.value=!1,b()},n=r(),f=r(),j=()=>{const o=v.value.files[0];o&&(n.value=URL.createObjectURL(o))},v=r(null),m=r(!1),B=()=>{m.value=!0,n.value=null},$=async()=>{if(!f.value||!n.value){alert("Tanto el nombre del archivo como el archivo son obligatorios");return}const o=new FormData;o.append("file",v.value.files[0]),o.append("folder_id","1heb6WmBQHyeNxkrttn1QHFoL-jbhXGd2"),o.append("custom_file_name",f.value),await L.uploadData(o),m.value=!1,await b()};return(o,a)=>{const I=k("InputText"),d=k("Button"),D=k("Dialog");return p(),A("div",M,[i(D,{style:{width:"30rem"},modal:"",header:"Agregar una entrada",visible:m.value,"onUpdate:visible":a[3]||(a[3]=s=>m.value=s)},{footer:h(()=>[e("div",z,[n.value?(p(),C(d,{key:0,onClick:a[2]||(a[2]=s=>v.value.click()),class:"m-0",label:"Cambiar video",severity:"",style:{"background-color":"var(--primary-color)",color:"#fff"}})):y("",!0),i(d,{onClick:$,class:"m-0",label:"Enviar",severity:"help"})])]),default:h(()=>[i(I,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=s=>f.value=s),class:"w-100 my-4",style:{width:"100%"},placeholder:"Nombre del video"},null,8,["modelValue"]),e("div",W,[n.value?(p(),A("video",{key:0,controls:"",src:n.value,style:{width:"100%",height:"100%"}},null,8,X)):y("",!0),e("input",{accept:"video/*",style:{display:"none"},type:"file",ref_key:"inputFile",ref:v,onChange:j},null,544),n.value?y("",!0):(p(),C(d,{key:1,text:"",onClick:a[1]||(a[1]=s=>v.value.click()),label:"Cargar un video",style:{color:"var(--primary-color)",width:"100%",height:"100%"}}))])]),_:1},8,["visible"]),i(D,{style:{width:"30rem"},modal:"",header:"Agregar una entrada",visible:g.value,"onUpdate:visible":a[6]||(a[6]=s=>g.value=s)},{footer:h(()=>[e("div",J,[n.value?(p(),C(d,{key:0,onClick:a[4]||(a[4]=s=>v.value.click()),class:"m-0",label:"Cambiar video",severity:"",style:{"background-color":"var(--primary-color)",color:"#fff"}})):y("",!0),i(d,{severity:"danger",onClick:a[5]||(a[5]=s=>U(u.value.file_id)),class:"m-0",label:"Eliminar"})])]),default:h(()=>[e("p",null,[_(" Esta "),q,_(" de eliminar el video "),e("b",null,E(u.value.file_name),1),_("?")])]),_:1},8,["visible"]),K,e("div",Y,[i(d,{onClick:B,icon:"pi pi-plus",severity:"help",label:"Agregar nuevo"})]),e("div",Z,[e("div",P,[i(H(O),{value:c.value.files,layout:l.value,paginator:!0,rows:9,sortOrder:o.sortOrder,sortField:o.sortField},{grid:h(s=>[e("div",ee,[e("div",te,[e("div",oe,[e("img",{class:"foto",style:{width:"100%","aspect-ratio":"1 / 1","border-radius":".3rem","object-fit":"cover"},src:s.data.thumbnailLink,alt:""},null,8,ae),e("p",se,[e("b",null,E(s.data.file_name),1)])]),e("div",le,[e("a",{target:"_blank",href:s.data.embedLink},[i(d,{class:"imagen",style:{"aspect-ratio":"1 / 1","pointer-events":"all",color:"white","background-color":"#00000080",width:"7rem","border-radius":"5rem"},icon:"fa-solid fa-play text-6xl"})],8,re)])]),i(d,{onClick:ne=>T(s.data),severity:"danger",rounded:"",icon:"pi pi-times",style:{position:"absolute",right:"0",top:"0"}},null,8,["onClick"])])]),_:1},8,["value","layout","sortOrder","sortField"])])])])}}},ce=V(ie,[["__scopeId","data-v-d6e42680"]]);export{ce as default};
