import{r as n,c4 as $,H as j,h as N,k as A,a as r,o as u,c,d as o,b as e,w as F,F as x,e as S,m as M,t as y,a3 as P,u as R,U as z}from"./index-50590a77.js";import{m as C}from"./maintenance-bc0c3d88.js";import{e as l}from"./maintenance-f75236a4.js";import{s as T}from"./siteService-580c302e.js";const G={class:"m-0 m-auto"},H={style:{display:"flex","justify-content":"end"}},O={key:0},J=["src"],K={class:"col-12 p-0",style:{display:"flex","justify-content":"end"}},Q=["onSubmit"],W=e("p",{class:"text-center"},[e("b",null,"SEDES")],-1),X={class:"my-2"},Y={class:"ml-2"},Z={class:"col-12 p-0 m-0"},ee={class:"grid p-0 m-0"},te={style:{position:"relative"},class:"col-6 md:p-3 md:col-4 lg:col-3 xl:col-2 x p-2"},ae={class:"shadow-3 p-2",style:{position:"relative",height:"100%",overflow:"hidden","border-radius":"0.3rem"}},se=["src"],ie=e("p",{class:"py-0 my-0 text-sm"},[e("b",null,"Nombre:")],-1),oe=e("p",{class:"py-0 my-0"},[e("b",null,"Marca:")],-1),de={__name:"equipment",setup(ne){const d=n([]),i=n({name:"",brand:"",site_ids:[]}),v=n(!1),k=$(),m=j(),p=C(),h=n([]);C();const b=n(null),f=n(null),g=n(null),E=s=>{const a=s.target.files[0];a&&(f.value=URL.createObjectURL(a),g.value=a)};N(async()=>{h.value=await T.getSites();const s=await l.getEquipmentBySite(p.currentSite.site_id);s&&(d.value=s)}),A(()=>p.currentSite,async()=>{const s=await l.getEquipmentBySite(p.currentSite.site_id);s&&(d.value=s)});const V=s=>{k.require({message:"¿Estás seguro de que quieres eliminar este equipo? Los mantenimientos realizados a este equipo también serán eliminados.",header:"Confirmación",icon:"pi pi-exclamation-triangle",accept:async()=>{m.setLoading(!0,"eliminando equipo"),await l.deleteEquipment(s),d.value=await l.getEquipmentBySite(p.currentSite.site_id),m.setLoading(!1,"eliminando equipo")},reject:()=>{m.setLoading(!1,"eliminando equipo")}})},B=async()=>{if(i.value.site_ids.length===0){alert("Por favor, selecciona al menos una sede.");return}if(!g.value){alert("Por favor, selecciona la foto del equipo");return}v.value=!1,m.setLoading(!0,"Agregando equipo"),await l.createEquipment(i.value),await l.uploadImage(`${i.value.name}-${i.value.brand}`,g.value);const s=await l.getEquipmentBySite(p.currentSite.site_id);s&&(d.value=s),m.setLoading(!1,"Agregando equipo"),i.value={name:"",brand:"",site_ids:[]},location.reload()};return(s,a)=>{const L=r("ConfirmDialog"),_=r("Button"),D=r("Input"),q=r("InputText"),I=r("Checkbox"),U=r("Dialog");return u(),c("div",G,[o(L,{style:{"max-width":"30rem"}}),e("div",H,[o(_,{label:"Agregar Equipo",severity:"success",onClick:a[0]||(a[0]=t=>v.value=!0),icon:"pi pi-plus",class:"mb-4"})]),o(U,{style:{width:"30rem"},visible:v.value,"onUpdate:visible":a[5]||(a[5]=t=>v.value=t),header:`Agregar \r
        \r
        nuevo equipo`,modal:!0},{default:F(()=>[o(D,{style:{display:"none"},ref_key:"fileInput",ref:b,type:"file",onChange:E,accept:"image/*"},null,512),f.value?(u(),c("div",O,[e("img",{src:f.value,alt:"Previsualización del Producto",style:{"max-width":"100%","aspect-ratio":"1 / 1","object-fit":"cover",height:"auto"}},null,8,J)])):M("",!0),e("div",K,[o(_,{class:"my-3",onClick:a[1]||(a[1]=t=>b.value.click()),icon:"fa-solid fa-camera"})]),e("form",{onSubmit:P(B,["prevent"])},[o(q,{class:"col-12 my-2",modelValue:i.value.name,"onUpdate:modelValue":a[2]||(a[2]=t=>i.value.name=t),placeholder:"Nombre del equipo",required:""},null,8,["modelValue"]),o(q,{class:"col-12 my-2",modelValue:i.value.brand,"onUpdate:modelValue":a[3]||(a[3]=t=>i.value.brand=t),placeholder:"Marca",required:""},null,8,["modelValue"]),W,e("div",X,[(u(!0),c(x,null,S(h.value,t=>(u(),c("div",{key:t.site_id,class:"flex align-items-center my-1"},[o(I,{modelValue:i.value.site_ids,"onUpdate:modelValue":a[4]||(a[4]=w=>i.value.site_ids=w),value:t.site_id},null,8,["modelValue","value"]),e("label",Y,y(t.site_name),1)]))),128))]),o(_,{type:"submit",label:"Guardar",class:"mt-2"})],40,Q)]),_:1},8,["visible"]),e("div",Z,[e("div",ee,[(u(!0),c(x,null,S(d.value,t=>(u(),c("div",te,[e("div",ae,[e("img",{style:{width:"100%","aspect-ratio":"4 / 4","object-fit":"cover","border-radius":"0.3rem"},src:`${R(z)}/read-product-image/300/${t.name}-${t.brand}`,alt:""},null,8,se),ie,e("p",null,y(t.name),1),oe,e("p",null,y(t.brand),1)]),o(_,{size:"small",onClick:w=>V(t.equipment_id),class:"shadow-4 p-3",rounded:"",severity:"danger",icon:"pi pi-trash p-0 shadow-3 text-xl",style:{position:"absolute",width:"1rem",height:"1rem",top:"0rem",right:"0rem"}},null,8,["onClick"])]))),256))])])])}}};export{de as default};
