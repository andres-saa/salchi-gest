import{_ as W,r as h,Y as X,G as H,i as ee,j as Y,U as G,a as x,o as p,c as f,b as e,g as r,w as c,a1 as R,u as s,a0 as S,m,t as i,e as z,f as O,F as T,d as L,p as te,h as oe}from"./index-c4b6802b.js";import{f as k}from"./formatoPesos-8aa989a0.js";const n=C=>(te("data-v-ef9ba3fe"),C=C(),oe(),C),le=n(()=>e("h3",null,[e("b",null,"Cancelar Orden")],-1)),se=n(()=>e("span",{for:"responsible"},"Responsable",-1)),ne=n(()=>e("span",{for:"reason"},"Razón",-1)),ie=n(()=>e("h3",null,[e("b",null,"Cancelar Orden")],-1)),re=n(()=>e("span",{class:"advert",style:{"text-transform":"lowercase",color:"red","font-weight":"bold"}}," Desde el 16 de mayo de 2024, la cancelación de órdenes requerirá autorización.",-1)),ae=n(()=>e("span",{for:"responsible"},"Responsable",-1)),de=n(()=>e("span",{for:"reason"},"Razón",-1)),ce={style:{"text-transform":"capitalize"}},ue={class:"col-12 mb-0 pb-0 px-0 m-0",style:{display:"flex","justify-content":"space-between",gap:"1rem"}},pe={id:"factura",style:{width:"100%"}},me=n(()=>e("i",{class:"pi pi-whatsapp mr-2"},null,-1)),_e=n(()=>e("br",null,null,-1)),be={class:"",style:{width:"auto"}},ve={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},ye={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},he={style:{padding:"0",color:"black","text-align":"center",margin:"auto","margin-bottom":"1rem",width:"max-content","min-width":"max-content",display:"flex","justify-content":"center","flex-direction":"column"}},fe=n(()=>e("div",{class:"",style:{"font-weight":"bold",color:"white",margin:"0","background-color":"black","align-items":"center",display:"grid","grid-template-columns":"auto auto"}},[e("div",{style:{width:"100%"}},[e("b",null," productos")]),e("div",null,[e("p",{style:{"text-align":"end","font-weight":"bold"}},[e("b",null," total ")])])],-1)),ge={style:{display:"grid","grid-template-columns":"auto auto"}},we={class:"p-0 m-0"},xe=n(()=>e("br",null,null,-1)),Oe={style:{"text-align":"end",color:"black"}},ke={key:0,class:"p-0 m-0"},Ce=n(()=>e("b",null,"COMBO INCLUYE",-1)),De=[Ce],Ee={class:"p-0 m-0 ml-5",style:{}},Ve={style:{display:"flex",width:"","justify-content":"space-between"},class:"p-0 m-0"},Se={class:"p-0 m-0 ml-5",style:{}},Te={class:"p-0 m-0",style:{"text-align":"end"}},Ie=n(()=>e("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),Ne={class:"",style:{display:"grid",color:"","margin-top":"0.5rem","grid-template-columns":"auto auto"}},Re=n(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold"}},[e("b",null,"Subtotal")])],-1)),ze={class:""},Le={style:{"text-align":"end","font-weight":"bold",color:"black"}},Ue=n(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold"}},[e("b",null,"Domicilio")])],-1)),Ae={class:""},Be={style:{"text-align":"end","font-weight":"bold",color:"black"}},Me=n(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold",color:"black"}},[e("b",null,"Total")])],-1)),Pe={class:""},je={style:{"text-align":"end",color:"black","font-weight":"bold"}},$e=n(()=>e("div",{class:""},null,-1)),Fe=n(()=>e("p",{style:{"font-weight":"bold","background-color":"black",color:"white",padding:"0",margin:"0","margin-top":"0.5rem"}},[e("b",null,"Notas")],-1)),qe={class:"notas",style:{border:"1px solid",margin:"0",color:"black",padding:"0.5rem"}},He=n(()=>e("p",{style:{"background-color":"black","font-weight":"bold","margin-top":"1rem",color:"white"}},[e("b",null,"cliente")],-1)),Ye={style:{display:"grid","grid-template-columns":"auto auto"}},Ge=n(()=>e("div",{class:"",style:{}},[e("span",null,[e("b",null,"NOMBRE")])],-1)),Ze={class:""},Je={style:{"text-align":"end",color:"black"}},Ke=n(()=>e("div",{style:{}},[e("span",null,[e("b",null,"telefono")])],-1)),Qe={style:{"text-align":"end",color:"black"}},We=n(()=>e("div",{style:{}},[e("span",null,[e("b",null,"direccion ")])],-1)),Xe={style:{"text-align":"end",color:"black"}},et=n(()=>e("div",null,[e("span",null,[e("b",null,"metodo de pago")])],-1)),tt={style:{"text-align":"end",color:"black"}},ot={class:"col-12 mb-0 pb-0 px-0 m-0",style:{display:"flex","justify-content":"space-between",gap:"1rem"}},lt=n(()=>e("h3",null,[e("b",null,"TRASLADO DE SEDE")],-1)),st=n(()=>e("span",{for:"responsible"},"SELECCIONE LA SEDE DESTINO",-1)),nt={__name:"DialogoPedido",setup(C){const I=h(0),D=h(!1),o=X(),U=H(()=>o.currentOrder.pe_json.listaPedidos.reduce((d,t)=>{var v;let b=t.pedido_cantidad*t.pedido_precio;if(t.modificadorseleccionList&&t.modificadorseleccionList.length>0){const g=((v=t.modificadorseleccionList)==null?void 0:v.filter(w=>w.pedido_productoid==t.pedido_productoid)).reduce((w,l)=>w+l.modificadorseleccion_cantidad*l.pedido_precio,0);b+=g}return d+b},0)),Z=H(()=>U.value+o.currentOrder.delivery_price),J=async()=>{var t;const d={order_id:o.currentOrder.order_id,responsible:(t=a.value.responsible)==null?void 0:t.name,reason:a.value.reason};await S.create_cancellling_request(d),D.value=!1,o.Notification.pause(),o.Notification.currentTime=0},E=h(!1),K=()=>{const d=document.getElementById("factura").innerHTML,t=window.open("","_blank");t.document.write("<html><head><title>Factura</title>");const b=document.getElementsByTagName("style");for(let v=0;v<b.length;v++)t.document.write(b[v].outerHTML);t.document.write("<style>  @media print { html{height: min-content;}  *{text-transform:uppercase;align-items:center; width:100%; font-family: sans-serif;padding:0;margin:0; font-size:o.9rem !IMPORTANT} body { padding:0; -webkit-print-color-adjust: exact; /* Chrome, Safari */ color-adjust: exact; /* Firefox */ } }  </style>"),t.document.write("</head><body>"),t.document.write(d),t.document.write("</body></html>"),t.document.close(),t.print(),setTimeout(()=>{t.close()},.01)},A=h([]);ee(async()=>{o.currentOrder.value=o.currentOrder,A.value=await Y.get(`${G}/sites`)});const N=h(!1),V=h(!1),a=h({responsible:null,reason:"Sin razon"}),B=h([{name:"Restaurante",value:"restaurant"},{name:"Cliente",value:"client"}]),M=()=>{a.value.responsible&&S.cancelOrder(o.currentOrder.order_id,a.value.reason,a.value.responsible.name).then(d=>{d&&(N.value=!1,console.log("Order canceled successfully"))}).catch(d=>{console.error("Failed to cancel order:",d)})},Q=async()=>{const d=o.currentOrder.order_id,t=I.value;await Y.put(`${G}/traslate-order`,{site_id:t,order_id:d},`trasladando orden ${d}`),o.visibles.currentOrder=!1,V.value=!1};return(d,t)=>{const b=x("Dropdown"),v=x("Textarea"),u=x("Button"),g=x("Dialog"),w=x("Tag");return p(),f(T,null,[e("div",null,[r(g,{visible:N.value,"onUpdate:visible":t[2]||(t[2]=l=>N.value=l),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:c(()=>[le]),default:c(()=>[e("form",{onSubmit:R(M,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[se,r(b,{style:{width:"100%"},id:"responsible",modelValue:a.value.responsible,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.responsible=l),options:B.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),ne,r(v,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:a.value.reason,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.reason=l),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),r(u,{style:{width:"100%","border-radius":"0.5rem"},label:"cancelar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),r(g,{visible:D.value,"onUpdate:visible":t[5]||(t[5]=l=>D.value=l),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:c(()=>[ie]),default:c(()=>[e("form",{onSubmit:R(J,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[re,ae,r(b,{style:{width:"100%"},id:"responsible",modelValue:a.value.responsible,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.responsible=l),options:B.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),de,r(v,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:a.value.reason,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value.reason=l),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),r(u,{style:{width:"100%","border-radius":"0.5rem"},label:"solicitar cancelacion",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"]),r(g,{closable:!1,style:{width:"30rem"},modal:"",visible:E.value,"onUpdate:visible":t[8]||(t[8]=l=>E.value=l)},{footer:c(()=>[e("div",ue,[r(u,{text:"",size:"small",onClick:t[6]||(t[6]=()=>{s(S).deliveryZero(s(o).currentOrder.order_id),E.value=!1}),style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"si"}),r(u,{onClick:t[7]||(t[7]=l=>E.value=!1),size:"small",style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"no"})])]),default:c(()=>[e("span",ce,[m(" Esta seguro de llevar a $0.00 el valor del domicilio para la orden "),e("b",null,i(s(o).currentOrder.order_id),1),m(" del cliente "),e("b",null,i(s(o).currentOrder.user_name),1),m("? ")])]),_:1},8,["visible"]),r(g,{class:"mx-3",closeOnEscape:"",closable:!1,visible:s(o).visibles.currentOrder,"onUpdate:visible":t[13]||(t[13]=l=>s(o).visibles.currentOrder=l),modal:"",style:{"max-height":"95vh",width:"35rem",position:"relative"}},{footer:c(()=>[e("div",ot,[s(o).currentOrder.current_status=="en preparacion"?(p(),z(u,{key:0,size:"small",onClick:t[9]||(t[9]=l=>s(S).sendOrder(s(o).currentOrder.order_id)),style:{"border-radius":"0.3rem",width:"100%"},severity:"success",label:"enviar"})):O("",!0),r(u,{size:"small",style:{"border-radius":"0.3rem",width:"100%"},onClick:K,severity:"warning",label:"imprimir"}),r(u,{size:"small",style:{"border-radius":"0.3rem",width:"100%"},onClick:t[10]||(t[10]=l=>D.value=!0),severity:"danger",label:"CANCELAR "}),r(u,{severity:"warning",onClick:t[11]||(t[11]=l=>V.value=!0),style:{width:"100%","background-color":"black",border:"none"},icon:"pi pi-airplane",label:"traslado"})])]),default:c(()=>{var l,P,j,$,F;return[e("div",pe,[s(o).currentOrder.responsible_id?(p(),z(w,{key:0,style:{},class:"tag mb-2",severity:"success"},{default:c(()=>[me,m(" TRANSFERENCIA APROBADA")]),_:1})):O("",!0),m(),_e,s(o).currentOrder.responsible_id?(p(),z(w,{key:1,class:"tag",severity:"success"},{default:c(()=>[m(i(s(o).currentOrder.name),1)]),_:1})):O("",!0),e("div",be,[e("p",ve," ID:"+i(s(o).currentOrder.order_id),1),e("p",ye,i(s(o).currentOrder.user_name),1),e("p",he,[e("b",null," fecha: "+i((l=s(o).currentOrder.latest_status_timestamp)==null?void 0:l.split("T")[0]),1),e("b",null," Hora: "+i((F=($=(j=(P=s(o).currentOrder.latest_status_timestamp)==null?void 0:P.split("T")[1])==null?void 0:j.split(":"))==null?void 0:$.slice(0,2))==null?void 0:F.join(":")),1)]),fe,(p(!0),f(T,null,L(s(o).currentOrder.pe_json.listaPedidos,_=>{var q;return p(),f("div",null,[e("div",ge,[e("p",we,[m(i(_.pedido_cantidad)+" "+i(_.pedido_nombre_producto)+" ",1),xe]),e("div",null,[e("p",Oe,i(s(k)(_.pedido_precio*_.pedido_cantidad)),1)])]),_.lista_productocombo?(p(),f("p",ke,De)):O("",!0),_.lista_productocombo?(p(!0),f(T,{key:1},L(_.lista_productocombo,y=>(p(),f("p",Ee,[m(" -- "),e("b",null,i(y.pedido_cantidad),1),m(" "+i(y.pedido_nombre),1)]))),256)):O("",!0),(p(!0),f(T,null,L((q=_.modificadorseleccionList)==null?void 0:q.filter(y=>y.pedido_productoid==_.pedido_productoid),y=>(p(),f("div",Ve,[e("p",Se,[m(" -- "),e("b",null,i(y.modificadorseleccion_cantidad),1),m(" "+i(y.modificador_nombre),1)]),e("p",Te,i(s(k)(y.pedido_precio)),1)]))),256)),Ie])}),256)),e("div",Ne,[Re,e("div",ze,[e("p",Le,[e("b",null,i(s(k)(U.value)),1)])]),Ue,e("div",Ae,[e("p",Be,[e("b",null,i(s(k)(s(o).currentOrder.delivery_price)),1)])]),Me,e("div",Pe,[e("p",je,[e("b",null,i(s(k)(Z.value)),1)])]),$e]),Fe,e("p",qe,i(s(o).currentOrder.order_notes),1),He,e("div",Ye,[Ge,e("div",Ze,[e("p",Je,i(s(o).currentOrder.user_name),1)]),Ke,e("div",null,[e("p",Qe,i(s(o).currentOrder.user_phone),1)]),We,e("div",null,[e("p",Xe,i(s(o).currentOrder.user_address),1)]),et,e("div",null,[e("p",tt,i(s(o).currentOrder.payment_method),1)])])])]),r(u,{class:"shadow-4",onClick:t[12]||(t[12]=_=>s(o).setVisible("currentOrder",!1)),icon:"pi pi-times",rounded:"",severity:"danger",style:{position:"absolute",top:"-1rem","border-radius":"50%",right:"-1rem"}})]}),_:1},8,["visible"])]),r(g,{visible:V.value,"onUpdate:visible":t[16]||(t[16]=l=>V.value=l),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:c(()=>[lt]),default:c(()=>[e("form",{onSubmit:R(M,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[st,r(b,{style:{width:"100%"},id:"responsible",modelValue:I.value,"onUpdate:modelValue":t[14]||(t[14]=l=>I.value=l),optionValue:"site_id",options:A.value.filter(l=>l.show_on_web),optionLabel:"site_name",placeholder:"Seleccione la sede destino"},null,8,["modelValue","options"]),r(u,{onClick:t[15]||(t[15]=l=>Q()),style:{width:"100%","border-radius":"0.5rem"},label:"Trasladar",type:"submit",class:"p-button-danger"})],32)]),_:1},8,["visible"])],64)}}},at=W(nt,[["__scopeId","data-v-ef9ba3fe"]]);export{at as D};
