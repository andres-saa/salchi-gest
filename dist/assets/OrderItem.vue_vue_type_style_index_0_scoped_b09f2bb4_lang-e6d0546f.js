import{_ as V,r as T,Q as K,h as F,a as A,o as w,c as S,d as O,w as j,b as n,a3 as W,u as b,S as R,q as M,t as v,f as N,m as P,n as I,F as U,e as z,p as k,g as J}from"./index-50590a77.js";import{f as L}from"./formatoPesos-87dbb5ee.js";var $={exports:{}};(function(C,B){(function(p,o){C.exports=o()})(window,function(){return function(i){var p={};function o(l){if(p[l])return p[l].exports;var f=p[l]={i:l,l:!1,exports:{}};return i[l].call(f.exports,f,f.exports,o),f.l=!0,f.exports}return o.m=i,o.c=p,o.d=function(l,f,s){o.o(l,f)||Object.defineProperty(l,f,{enumerable:!0,get:s})},o.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},o.t=function(l,f){if(f&1&&(l=o(l)),f&8||f&4&&typeof l=="object"&&l&&l.__esModule)return l;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:l}),f&2&&typeof l!="string")for(var g in l)o.d(s,g,(function(d){return l[d]}).bind(null,g));return s},o.n=function(l){var f=l&&l.__esModule?function(){return l.default}:function(){return l};return o.d(f,"a",f),f},o.o=function(l,f){return Object.prototype.hasOwnProperty.call(l,f)},o.p="",o(o.s=0)}({"./src/index.js":function(i,p,o){o.r(p),o("./src/sass/index.scss");var l=o("./src/js/init.js"),f=l.default.init;typeof window<"u"&&(window.printJS=f),p.default=f},"./src/js/browser.js":function(i,p,o){o.r(p);var l={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!l.isIE()&&!!window.StyleMedia},isChrome:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!s.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};p.default=l},"./src/js/functions.js":function(i,p,o){o.r(p),o.d(p,"addWrapper",function(){return g}),o.d(p,"capitalizePrint",function(){return d}),o.d(p,"collectStyles",function(){return a}),o.d(p,"addHeader",function(){return r}),o.d(p,"cleanUp",function(){return m}),o.d(p,"isRawHTML",function(){return y});var l=o("./src/js/modal.js"),f=o("./src/js/browser.js");function s(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(c){return typeof c}:s=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},s(t)}function g(t,u){var c="font-family:"+u.font+" !important; font-size: "+u.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t,u){for(var c=document.defaultView||window,E="",h=c.getComputedStyle(t,""),x=0;x<h.length;x++)(u.targetStyles.indexOf("*")!==-1||u.targetStyle.indexOf(h[x])!==-1||e(u.targetStyles,h[x]))&&h.getPropertyValue(h[x])&&(E+=h[x]+":"+h.getPropertyValue(h[x])+";");return E+="max-width: "+u.maxWidth+"px !important; font-size: "+u.font_size+" !important;",E}function e(t,u){for(var c=0;c<t.length;c++)if(s(u)==="object"&&u.indexOf(t[c])!==-1)return!0;return!1}function r(t,u){var c=document.createElement("div");if(y(u.header))c.innerHTML=u.header;else{var E=document.createElement("h1"),h=document.createTextNode(u.header);E.appendChild(h),E.setAttribute("style",u.headerStyle),c.appendChild(E)}t.insertBefore(c,t.childNodes[0])}function m(t){t.showModal&&l.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var u="mouseover";(f.default.isChrome()||f.default.isFirefox())&&(u="focus");var c=function E(){window.removeEventListener(u,E),t.onPrintDialogClose();var h=document.getElementById(t.frameId);h&&h.remove()};window.addEventListener(u,c)}function y(t){var u=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return u.test(t)}},"./src/js/html.js":function(i,p,o){o.r(p);var l=o("./src/js/functions.js"),f=o("./src/js/print.js");function s(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(r){return typeof r}:s=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(a)}p.default={print:function(e,r){var m=d(e.printable)?e.printable:document.getElementById(e.printable);if(!m){window.console.error("Invalid HTML element id: "+e.printable);return}e.printableElement=g(m,e),e.header&&Object(l.addHeader)(e.printableElement,e),f.default.send(e,r)}};function g(a,e){for(var r=a.cloneNode(),m=Array.prototype.slice.call(a.childNodes),y=0;y<m.length;y++)if(e.ignoreElements.indexOf(m[y].id)===-1){var t=g(m[y],e);r.appendChild(t)}switch(e.scanStyles&&a.nodeType===1&&r.setAttribute("style",Object(l.collectStyles)(a,e)),a.tagName){case"SELECT":r.value=a.value;break;case"CANVAS":r.getContext("2d").drawImage(a,0,0);break}return r}function d(a){return s(a)==="object"&&a&&(a instanceof HTMLElement||a.nodeType===1)}},"./src/js/image.js":function(i,p,o){o.r(p);var l=o("./src/js/functions.js"),f=o("./src/js/print.js"),s=o("./src/js/browser.js");p.default={print:function(d,a){d.printable.constructor!==Array&&(d.printable=[d.printable]),d.printableElement=document.createElement("div"),d.printable.forEach(function(e){var r=document.createElement("img");if(r.setAttribute("style",d.imageStyle),r.src=e,s.default.isFirefox()){var m=r.src;r.src=m}var y=document.createElement("div");y.appendChild(r),d.printableElement.appendChild(y)}),d.header&&Object(l.addHeader)(d.printableElement,d),f.default.send(d,a)}}},"./src/js/init.js":function(i,p,o){o.r(p);var l=o("./src/js/browser.js"),f=o("./src/js/modal.js"),s=o("./src/js/pdf.js"),g=o("./src/js/html.js"),d=o("./src/js/raw-html.js"),a=o("./src/js/image.js"),e=o("./src/js/json.js");function r(y){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(u){return typeof u}:r=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},r(y)}var m=["pdf","html","image","json","raw-html"];p.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(H){throw H},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},u=arguments[0];if(u===void 0)throw new Error("printJS expects at least 1 attribute.");switch(r(u)){case"string":t.printable=encodeURI(u),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=u.printable,t.fallbackPrintable=typeof u.fallbackPrintable<"u"?u.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof u[c]<"u"?u[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+r(u))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||m.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&f.default.show(t),t.onLoadingStart&&t.onLoadingStart();var E=document.getElementById(t.frameId);E&&E.parentNode.removeChild(E);var h=document.createElement("iframe");switch(l.default.isFirefox()?h.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):h.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),h.setAttribute("id",t.frameId),t.type!=="pdf"&&(h.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(D){h.srcdoc+='<link rel="stylesheet" href="'+D+'">'})),h.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(l.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var x=window.open(t.fallbackPrintable,"_blank");x.focus(),t.onIncompatibleBrowser()}catch(D){t.onError(D)}finally{t.showModal&&f.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else s.default.print(t,h);break;case"image":a.default.print(t,h);break;case"html":g.default.print(t,h);break;case"raw-html":d.default.print(t,h);break;case"json":e.default.print(t,h);break}}}},"./src/js/json.js":function(i,p,o){o.r(p);var l=o("./src/js/functions.js"),f=o("./src/js/print.js");function s(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(e){return typeof e}:s=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(d)}p.default={print:function(a,e){if(s(a.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof a.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!a.properties||!Array.isArray(a.properties))throw new Error("Invalid properties array for your JSON data.");a.properties=a.properties.map(function(r){return{field:s(r)==="object"?r.field:r,displayName:s(r)==="object"?r.displayName:r,columnSize:s(r)==="object"&&r.columnSize?r.columnSize+";":100/a.properties.length+"%;"}}),a.printableElement=document.createElement("div"),a.header&&Object(l.addHeader)(a.printableElement,a),a.printableElement.innerHTML+=g(a),f.default.send(a,e)}};function g(d){var a=d.printable,e=d.properties,r='<table style="border-collapse: collapse; width: 100%;">';d.repeatTableHeader&&(r+="<thead>"),r+="<tr>";for(var m=0;m<e.length;m++)r+='<th style="width:'+e[m].columnSize+";"+d.gridHeaderStyle+'">'+Object(l.capitalizePrint)(e[m].displayName)+"</th>";r+="</tr>",d.repeatTableHeader&&(r+="</thead>"),r+="<tbody>";for(var y=0;y<a.length;y++){r+="<tr>";for(var t=0;t<e.length;t++){var u=a[y],c=e[t].field.split(".");if(c.length>1)for(var E=0;E<c.length;E++)u=u[c[E]];else u=u[e[t].field];r+='<td style="width:'+e[t].columnSize+d.gridStyle+'">'+u+"</td>"}r+="</tr>"}return r+="</tbody></table>",r}},"./src/js/modal.js":function(i,p,o){o.r(p);var l={show:function(s){var g="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",d=document.createElement("div");d.setAttribute("style",g),d.setAttribute("id","printJS-Modal");var a=document.createElement("div");a.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var e=document.createElement("div");e.setAttribute("class","printClose"),e.setAttribute("id","printClose"),a.appendChild(e);var r=document.createElement("span");r.setAttribute("class","printSpinner"),a.appendChild(r);var m=document.createTextNode(s.modalMessage);a.appendChild(m),d.appendChild(a),document.getElementsByTagName("body")[0].appendChild(d),document.getElementById("printClose").addEventListener("click",function(){l.close()})},close:function(){var s=document.getElementById("printJS-Modal");s&&s.parentNode.removeChild(s)}};p.default=l},"./src/js/pdf.js":function(i,p,o){o.r(p);var l=o("./src/js/print.js"),f=o("./src/js/functions.js");p.default={print:function(d,a){if(d.base64){var e=Uint8Array.from(atob(d.printable),function(m){return m.charCodeAt(0)});s(d,a,e);return}d.printable=/^(blob|http|\/\/)/i.test(d.printable)?d.printable:window.location.origin+(d.printable.charAt(0)!=="/"?"/"+d.printable:d.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("error",function(){Object(f.cleanUp)(d),d.onError(r.statusText,r)}),r.addEventListener("load",function(){if([200,201].indexOf(r.status)===-1){Object(f.cleanUp)(d),d.onError(r.statusText,r);return}s(d,a,r.response)}),r.open("GET",d.printable,!0),r.send()}};function s(g,d,a){var e=new window.Blob([a],{type:"application/pdf"});e=window.URL.createObjectURL(e),d.setAttribute("src",e),l.default.send(g,d)}},"./src/js/print.js":function(i,p,o){o.r(p);var l=o("./src/js/browser.js"),f=o("./src/js/functions.js"),s={send:function(r,m){document.getElementsByTagName("body")[0].appendChild(m);var y=document.getElementById(r.frameId);y.onload=function(){if(r.type==="pdf"){l.default.isFirefox()?setTimeout(function(){return g(y,r)},1e3):g(y,r);return}var t=y.contentWindow||y.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(r.printableElement),r.type!=="pdf"&&r.style){var u=document.createElement("style");u.innerHTML=r.style,t.head.appendChild(u)}var c=t.getElementsByTagName("img");c.length>0?d(Array.from(c)).then(function(){return g(y,r)}):g(y,r)}}};function g(e,r){try{if(e.focus(),l.default.isEdge()||l.default.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch{e.contentWindow.print()}else e.contentWindow.print()}catch(m){r.onError(m)}finally{l.default.isFirefox()&&(e.style.visibility="hidden",e.style.left="-1px"),Object(f.cleanUp)(r)}}function d(e){var r=e.map(function(m){if(m.src&&m.src!==window.location.href)return a(m)});return Promise.all(r)}function a(e){return new Promise(function(r){var m=function y(){!e||typeof e.naturalWidth>"u"||e.naturalWidth===0||!e.complete?setTimeout(y,500):r()};m()})}p.default=s},"./src/js/raw-html.js":function(i,p,o){o.r(p);var l=o("./src/js/print.js");p.default={print:function(s,g){s.printableElement=document.createElement("div"),s.printableElement.setAttribute("style","width:100%"),s.printableElement.innerHTML=s.printable,l.default.send(s,g)}}},"./src/sass/index.scss":function(i,p,o){},0:function(i,p,o){i.exports=o("./src/index.js")}}).default})})($);const _=C=>(k("data-v-ec18c33b"),C=C(),J(),C),Z=_(()=>n("h3",null,[n("b",null,"Cancelar Orden")],-1)),G=["onSubmit"],Q=_(()=>n("span",{for:"responsible"},"Responsable",-1)),X=_(()=>n("span",{for:"reason"},"Razón",-1)),Y=_(()=>n("h3",null,[n("b",null,"Cancelar Orden")],-1)),q=["onSubmit"],ee=_(()=>n("span",{class:"advert",style:{"text-transform":"lowercase",color:"red","font-weight":"bold"}}," Desde el 16 de mayo de 2024, la cancelación de órdenes requerirá autorización.",-1)),te=_(()=>n("span",{for:"responsible"},"Responsable",-1)),ne=_(()=>n("span",{for:"reason"},"Razón",-1)),re={style:{"text-transform":"capitalize"}},oe={class:"col-12 mb-0 pb-0 px-0 m-0",style:{display:"flex","justify-content":"space-between",gap:"1rem"}},le={id:"factura",style:{width:"100%"}},ie=_(()=>n("i",{class:"pi pi-whatsapp mr-2"},null,-1)),se=_(()=>n("br",null,null,-1)),ae={class:"",style:{width:"auto",color:"black"}},de=_(()=>n("br",null,null,-1)),ce=_(()=>n("b",null,"responsable",-1)),ue=_(()=>n("br",null,null,-1)),fe=_(()=>n("b",null,"Razon",-1)),pe={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},be={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},me={style:{padding:"0",color:"black",margin:"auto","margin-bottom":"1rem",width:"max-content","min-width":"max-content"}},ye=_(()=>n("div",{class:"",style:{"font-weight":"bold",color:"white",margin:"0","background-color":"black","align-items":"center",display:"grid","grid-template-columns":"auto auto"}},[n("div",{style:{width:"100%"}},[n("b",null," productos")]),n("div",null,[n("p",{style:{"text-align":"end","font-weight":"bold"}},[n("b",null," total ")])])],-1)),he={style:{display:"grid","grid-template-columns":"auto auto"}},ve={style:{"text-align":"end",color:"black"}},ge=_(()=>n("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),_e={style:{"background-color":"black","font-weight":"bold",color:"white",width:"100%",margin:"0"}},Ee={style:{display:"grid","grid-template-columns":"auto 20%","align-items":"center"}},we={style:{"text-align":"end",color:"black"}},Oe=_(()=>n("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),xe={class:"",style:{display:"grid",color:"","margin-top":"0.5rem","grid-template-columns":"auto auto"}},Se=_(()=>n("div",{class:""},[n("span",{style:{"font-weight":"bold"}},[n("b",null,"Subtotal")])],-1)),je={class:""},Me={style:{"text-align":"end","font-weight":"bold",color:"black"}},Pe=_(()=>n("div",{class:""},[n("span",{style:{"font-weight":"bold"}},[n("b",null,"Domicilio")])],-1)),Ce={class:""},De={style:{"text-align":"end","font-weight":"bold",color:"black"}},Te=_(()=>n("div",{class:""},[n("span",{style:{"font-weight":"bold",color:"black"}},[n("b",null,"Total")])],-1)),Ae={class:""},Ie={style:{"text-align":"end",color:"black","font-weight":"bold"}},Le=_(()=>n("div",{class:""},null,-1)),Be=_(()=>n("p",{style:{"font-weight":"bold","background-color":"black",color:"white",padding:"0",margin:"0","margin-top":"0.5rem"}},[n("b",null,"Notas")],-1)),Re={class:"notas",style:{border:"1px solid",margin:"0",color:"black",padding:"0.5rem"}},Ue=_(()=>n("p",{style:{"background-color":"black","font-weight":"bold","margin-top":"1rem",color:"white"}},[n("b",null,"cliente")],-1)),ze={style:{display:"grid","grid-template-columns":"auto auto"}},We=_(()=>n("div",{class:"",style:{}},[n("span",null,[n("b",null,"NOMBRE")])],-1)),Ne={class:""},He={style:{"text-align":"end",color:"black"}},Ve=_(()=>n("div",{style:{}},[n("span",null,[n("b",null,"telefono")])],-1)),Ke={style:{"text-align":"end",color:"black"}},Fe=_(()=>n("div",{style:{}},[n("span",null,[n("b",null,"direccion ")])],-1)),ke={style:{"text-align":"end",color:"black"}},Je=_(()=>n("div",null,[n("span",null,[n("b",null,"metodo de pago")])],-1)),$e={style:{"text-align":"end",color:"black"}},Ze={class:"col-12 px-0"},Ge={__name:"DialogoPedido",setup(C){const B=T(!1),i=K(),p=a=>{const e=new Date(a),r=e.getHours(),m=e.getMinutes(),y=r>=12?"pm":"am",t=r%12||12,u=t<10?"0"+t:t,c=m<10?"0"+m:m;return`${u}:${c} ${y}`},o=async()=>{var e;const a={order_id:i.currentOrder.order_id,responsible:(e=s.value.responsible)==null?void 0:e.name,reason:s.value.reason};await R.create_cancellling_request(a),B.value=!1,i.Notification.pause(),i.Notification.currentTime=0},l=T(!1);F(async()=>{i.currentOrder.value=i.currentOrder});const f=T(!1),s=T({responsible:null,reason:"Sin razon"}),g=T([{name:"Restaurante",value:"restaurant"},{name:"Cliente",value:"client"}]),d=()=>{s.value.responsible&&R.cancelOrder(i.currentOrder.order_id,s.value.reason,s.value.responsible.name).then(a=>{a&&(f.value=!1,console.log("Order canceled successfully"))}).catch(a=>{console.error("Failed to cancel order:",a)})};return(a,e)=>{const r=A("Dropdown"),m=A("Textarea"),y=A("Button"),t=A("Dialog"),u=A("Tag");return w(),S("div",null,[O(t,{visible:f.value,"onUpdate:visible":e[2]||(e[2]=c=>f.value=c),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:j(()=>[Z]),default:j(()=>[n("form",{onSubmit:W(d,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[Q,O(r,{style:{width:"100%"},id:"responsible",modelValue:s.value.responsible,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value.responsible=c),options:g.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),X,O(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:s.value.reason,"onUpdate:modelValue":e[1]||(e[1]=c=>s.value.reason=c),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),O(y,{style:{width:"100%","border-radius":"0.5rem"},label:"cancelar",type:"submit",class:"p-button-danger"})],40,G)]),_:1},8,["visible"]),O(t,{visible:B.value,"onUpdate:visible":e[5]||(e[5]=c=>B.value=c),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:j(()=>[Y]),default:j(()=>[n("form",{onSubmit:W(o,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[ee,te,O(r,{style:{width:"100%"},id:"responsible",modelValue:s.value.responsible,"onUpdate:modelValue":e[3]||(e[3]=c=>s.value.responsible=c),options:g.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),ne,O(m,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:s.value.reason,"onUpdate:modelValue":e[4]||(e[4]=c=>s.value.reason=c),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),O(y,{style:{width:"100%","border-radius":"0.5rem"},label:"solicitar cancelacion",type:"submit",class:"p-button-danger"})],40,q)]),_:1},8,["visible"]),O(t,{closable:!1,style:{width:"30rem"},modal:"",visible:l.value,"onUpdate:visible":e[8]||(e[8]=c=>l.value=c)},{footer:j(()=>[n("div",oe,[O(y,{text:"",size:"small",onClick:e[6]||(e[6]=()=>{b(R).deliveryZero(b(i).currentOrder.order_id),l.value=!1}),style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"si"}),O(y,{onClick:e[7]||(e[7]=c=>l.value=!1),size:"small",style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"no"})])]),default:j(()=>[n("span",re,[M(" Esta seguro de llevar a $0.00 el valor del domicilio para la orden "),n("b",null,v(b(i).currentOrder.order_id),1),M(" del cliente "),n("b",null,v(b(i).currentOrder.user_name),1),M("? ")])]),_:1},8,["visible"]),O(t,{class:"mx-3",closeOnEscape:"",closable:!1,visible:b(i).visibles.currentOrder,"onUpdate:visible":e[11]||(e[11]=c=>b(i).visibles.currentOrder=c),modal:"",style:{"max-height":"95vh",width:"35rem",position:"relative"}},{footer:j(()=>[n("div",Ze,[O(y,{severity:"help",onClick:e[9]||(e[9]=c=>l.value=!0),style:{width:"100%"},label:"domicilio $0.00"})])]),default:j(()=>{var c;return[n("div",le,[b(i).currentOrder.responsible_id?(w(),N(u,{key:0,style:{},class:"tag mb-2",severity:"success"},{default:j(()=>[ie,M(" TRANSFERENCIA APROBADA")]),_:1})):P("",!0),M(),se,b(i).currentOrder.responsible_id?(w(),N(u,{key:1,class:"tag mb-2",severity:"success"},{default:j(()=>[M(v(b(i).currentOrder.name),1)]),_:1})):P("",!0),n("div",ae,[b(i).currentOrder.current_status=="enviada"?(w(),S("p",{key:0,class:I(["text-2xl estado",b(i).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," El pedido fue enviado al domicilio del cliente a las "+v(p(b(i).currentOrder.latest_status_timestamp)),3)):P("",!0),b(i).currentOrder.current_status=="cancelada"?(w(),S("p",{key:1,class:I(["text-2xl estado",b(i).currentOrder.current_status]),style:{"text-transform":"lowercase"}},[M(" El pedido fue cancelado a las "+v(p(b(i).currentOrder.latest_status_timestamp))+" ",1),de,ce,M(": "+v(b(i).currentOrder.responsible)+" ",1),ue,fe,M(": "+v(b(i).currentOrder.reason),1)],2)):P("",!0),b(i).currentOrder.current_status=="en preparacion"?(w(),S("p",{key:2,class:I(["text-2xl estado",b(i).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," El pedido esta en preparacion desde las "+v(p(b(i).currentOrder.latest_status_timestamp))+" y ser'a enviada en breve ",3)):P("",!0),b(i).currentOrder.current_status=="generada"?(w(),S("p",{key:3,class:I(["text-2xl estado",b(i).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," Hemos recibido su pedido a las "+v(p(b(i).currentOrder.latest_status_timestamp))+" "+v(b(i).currentOrder.authorized?"  y empezaremos a prepararlo en breve, gracias por su espera":"y empezaremos a prepararlo Cuando se confirme su Transferencia, Muchas gracias."),3)):P("",!0),b(i).currentOrder.current_status?P("",!0):(w(),S("p",{key:4,class:I(["text-2xl estado",b(i).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," Este pedido no existe en nuestra base de datos ",2)),n("p",pe," ID:"+v(b(i).currentOrder.order_id),1),n("p",be,v(b(i).currentOrder.user_name),1),n("p",me,[n("b",null," fecha: "+v((c=b(i).currentOrder.latest_status_timestamp)==null?void 0:c.split("T")[0]),1)]),ye,(w(!0),S(U,null,z(b(i).currentOrder.products,E=>(w(),S("div",null,[n("div",he,[n("p",null,v(E.quantity)+" "+v(E.name),1),n("div",null,[n("p",ve,v(b(L)(E.total_price)),1)])]),ge]))),256)),(w(!0),S(U,null,z(b(i).currentOrder.additional_items,(E,h)=>(w(),S("div",{s:"",key:h,style:{position:"relative","margin-top":"0.5rem"}},[n("p",_e,[n("b",null,v(h),1)]),(w(!0),S(U,null,z(E,x=>(w(),S("div",null,[n("div",Ee,[n("div",null,[n("p",null,v(x.aditional_quantity)+" "+v(x.aditional_name),1)]),n("div",null,[n("p",we,v(b(L)(x.total_aditional_price)),1)])]),Oe]))),256))]))),128)),n("div",xe,[Se,n("div",je,[n("p",Me,[n("b",null,v(b(L)(b(i).currentOrder.total_order_price)),1)])]),Pe,n("div",Ce,[n("p",De,[n("b",null,v(b(L)(b(i).currentOrder.delivery_price)),1)])]),Te,n("div",Ae,[n("p",Ie,[n("b",null,v(b(L)(b(i).currentOrder.delivery_price+b(i).currentOrder.total_order_price)),1)])]),Le]),Be,n("p",Re,v(b(i).currentOrder.order_notes),1),Ue,n("div",ze,[We,n("div",Ne,[n("p",He,v(b(i).currentOrder.user_name),1)]),Ve,n("div",null,[n("p",Ke,v(b(i).currentOrder.user_phone),1)]),Fe,n("div",null,[n("p",ke,v(b(i).currentOrder.user_address),1)]),Je,n("div",null,[n("p",$e,v(b(i).currentOrder.payment_method),1)])])])]),O(y,{class:"shadow-4",onClick:e[10]||(e[10]=E=>b(i).setVisible("currentOrder",!1)),icon:"pi pi-times",rounded:"",severity:"danger",style:{position:"absolute",top:"-1rem","border-radius":"50%",right:"-1rem"}})]}),_:1},8,["visible"])])}}},Ye=V(Ge,[["__scopeId","data-v-ec18c33b"]]);export{Ye as D};
