import{a as g,u as G}from"./site-cc420456.js";import{M,G as N,U as A,y as k}from"./index-eb2a5b3d.js";import{u as R}from"./ventas-460884b0.js";import"./sass.default-a5b7a582.js";const O={init(){(function(e,t,o,p,s,c,u){e.fbq||(s=e.fbq=function(){s.callMethod?s.callMethod.apply(s,arguments):s.queue.push(arguments)},e._fbq||(e._fbq=s),s.push=s,s.loaded=!0,s.version="2.0",s.queue=[],c=t.createElement(o),c.async=!0,c.src=p,u=t.getElementsByTagName(o)[0],u.parentNode.insertBefore(c,u))})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","9692941457447887");const r=document.createElement("script");r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=G-HGS98CQWJN",r.onload=()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config","G-HGS98CQWJN")},document.head.appendChild(r)},sendTrackingEvent(r,e){window.fbq&&(r==="Purchase"?fbq("track","Purchase",e):fbq("track",r)),window.gtag&&gtag("event",r,{value:e.total,currency:"COP",items:e.items})}},U=M("client",{persist:{key:"client",storage:localStorage,paths:["user"]},state:()=>({user:{name:"",neigborhood:"",address:"",phone_number:"",payment_method_option:""}}),getters:{fucion:r=>0},actions:{async func(){return func}}}),_=R(),i=g(),l=G(),d=U(),T=()=>{var f,h,y,v;d.user.was_reserva=!1,i.sending_order=!0;const r=i.cart.products.map(a=>{var S,P,L;const b=a.product.productogeneral_precio,C=(P=(S=a.product.lista_presentacion)==null?void 0:S[0])==null?void 0:P.producto_precio,w=i.cart.additions.filter(n=>n.parent_id===a.product.producto_id),E=w.reduce((n,x)=>n+Number(x.price),0),q=b!==void 0?Number(b):Number(C)||0,$=(q+E).toFixed(2);return{pedido_productoid:a.product.producto_id,pedido_cantidad:a.quantity,pedido_precio:$,pedido_base_price:q,pedido_escombo:a.product.productogeneral_escombo,pedido_nombre_producto:a.product.productogeneral_descripcion,lista_productocombo:(L=a.product.lista_productobase)==null?void 0:L.map(n=>({pedido_productoid:parseInt(n.producto_id),pedido_cantidad:parseInt(n.productocombo_cantidad),pedido_precio:parseFloat(n.productocombo_precio),pedido_nombre:n.producto_descripcion})),modificadorseleccionList:w.map(n=>({modificadorseleccion_cantidad:Number(n.quantity),pedido_precio:Number(n.price),modificador_id:n.group_id,modificadorseleccion_id:n.id,modificador_nombre:n.name,pedido_productoid:n.parent_id}))}});console.log(r);const e=i.cart.additions.map(a=>({aditional_item_instance_id:a.id,quantity:a.quantity})),t=l.location.site.site_id,o=l.location.site.pe_site_id,p=(f=d.user.payment_method_option)==null?void 0:f.id,s=p===7?0:l.location.neigborhood.delivery_price,c=i.cart.order_notes,u={user_name:d.user.name,user_phone:(h=d.user.phone_number)==null?void 0:h.split(" ").join(""),user_address:` ${d.user.address} ${(v=(y=l.location)==null?void 0:y.neigborhood)==null?void 0:v.name}`||""};return{order_products:[],site_id:t,pe_site_id:o,delivery_person_id:4,payment_method_id:p,delivery_price:s,order_notes:c||"SIN NOTAS",user_data:u,order_aditionals:e,pe_json:r,total:i.cart.total_cost}},B=()=>{var c,u;d.user.was_reserva=!0,i.sending_order=!0;const r=i.cart.products.map(m=>({product_instance_id:m.product.id,quantity:m.quantity})),e=l.location.siteReservas.site_id,t=(c=d.user.payment_method_option)==null?void 0:c.id,o=i.cart.order_notes,p={user_name:d.user.name,user_phone:(u=d.user.phone_number)==null?void 0:u.split(" ").join(""),user_address:"Debe ir a la sede"};return{order_products:r,site_id:e,delivery_person_id:4,payment_method_id:t,delivery_price:0,order_notes:o||"SIN NOTAS",user_data:p,order_aditionals:[]}},Q={async sendOrder(){const r=T(),e=g();if(!j(r))return e.sending_order=!1,null;try{_.setLoading(!0,`enviando tu pedido ${d.user.name}`);const t=await N.post(`${A}/order`,r);if(t.status===200)e.sending_order=!1,e.last_order=t.data,_.setLoading(!1,"enviando tu pedido"),O.sendTrackingEvent("Purchase",{total:e.cart.total_cost,currency:"COP",items:e.cart.products.map(o=>({id:o.product.id,name:o.product.product_name,quantity:o.quantity,price:o.product.price})),value:e.cart.total_cost}),k.push("/call-center-vender/gracias");else return console.error("An error occurred while sending the order:",t.status),alert("An error occurred while sending the order. Please try again."),_.setLoading(!1,"enviando tu pedido"),e.sending_order=!1,null}catch(t){return console.error("An error occurred while sending the order:",t),_.setLoading(!1,"enviando tu pedido"),e.sending_order=!1,alert("An error occurred while sending the order. Please check your internet connection and try again."),e.sending_order=!1,null}},preparar_orden(){T()},async sendOrderReserva(){const r=B(),e=g();if(d.user.was_reserva=!0,!j(r))return e.sending_order=!1,null;try{_.setLoading(!0,`enviando tu pedido ${d.user.name}`);const t=await N.post(`${A}/order`,r);if(t.status===200)e.sending_order=!1,e.last_order=t.data,_.setLoading(!1,"enviando tu pedido"),O.sendTrackingEvent("Purchase",{total:e.cart.total_cost,currency:"COP",items:e.cart.products.map(o=>({id:o.product.id,name:o.product.product_name,quantity:o.quantity,price:o.product.price})),value:e.cart.total_cost}),k.push("/call-center-vender/gracias");else return console.error("An error occurred while sending the order:",t.status),alert("An error occurred while sending the order. Please try again."),_.setLoading(!1,"enviando tu pedido"),e.sending_order=!1,null}catch(t){return console.error("An error occurred while sending the order:",t),_.setLoading(!1,"enviando tu pedido"),e.sending_order=!1,alert("An error occurred while sending the order. Please check your internet connection and try again."),e.sending_order=!1,null}}};function j(r){return!r.user_data.user_name||r.user_data.user_name.trim()==""||!r.user_data.user_phone||r.user_data.user_phone.trim()==""||!r.user_data.user_address||r.user_data.user_address.trim()==""?(alert("Sus datos estan incompletos por favor reviselos"),i.sending_order=!1,!1):!r.site_id||r.delivery_price==null?(alert("Site information is missing. Please select a valid site."),i.sending_order=!1,!1):!0}export{Q as o,U as u};
