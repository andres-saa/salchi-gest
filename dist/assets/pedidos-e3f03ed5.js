import{x as W,h as T,U as C,y as X,_ as Y,r as B,i as J,a as I,o as v,c as x,d as E,w as j,b as e,L as G,u as b,s as P,t as _,n as k,D as M,F as L,e as $,p as Q,g as q,f as N,E as ee,M as re,m as F}from"./index-823524e4.js";import{f as z}from"./formatoPesos-2a38d2e7.js";import{s as ne}from"./siteService-9262852e.js";const R={async getOrdersBySite(m){const c=W();try{c.setLoading(!0);const t=await T.get(`${C}/order-by-site/${m}`);return t.status===200?(c.setLoading(!1),t.data):(console.error("An error occurred while fetching the ingredients:",t.status),c.setLoading(!1),null)}catch(t){return c.setLoading(!1),console.error("An error occurred while fetching the ingredients:",t),null}},async UpdateOrdersBySite(m){W();try{const c=await T.get(`${C}/order-by-site/${m}`);return c.status===200?c.data:(console.error("An error occurred while fetching the ingredients:",c.status),null)}catch(c){return console.error("An error occurred while fetching the ingredients:",c),null}},async getOrderCount(m){try{const c=await T.get(`${C}/get_order_count_by_site_id/${m}`);return c.status===200?c.data:(console.error("An error occurred while fetching the ingredients:",c.status),null)}catch(c){return console.error("An error occurred while fetching the ingredients:",c),null}},async getOrderById(m){const c=W();try{c.setLoading(!0);const t=await T.get(`${C}/order-by-id/${m}`);return t.status===200?(c.setLoading(!1),t.data):(console.error("An error occurred while fetching the ingredients:",t.status),c.setLoading(!1),null)}catch(t){return console.error("An error occurred while fetching the ingredients:",t),c.setLoading(!1),null}},async getOrderByPhone(m){const c=W();try{c.setLoading(!0);const t=await T.get(`${C}/order-by-phone/${m}`);return t.status===200?(c.setLoading(!1),t.data):(console.error("An error occurred while fetching the ingredients:",t.status),c.setLoading(!1),null)}catch(t){return console.error("An error occurred while fetching the ingredients:",t),c.setLoading(!1),null}},async is_recent_order_generated(m){try{const c=await T.get(`${C}/recent-order/${m}`);return c.status===200?c.data:(console.error("An error occurred while fetching the ingredients:",c.status),null)}catch(c){return console.error("An error occurred while fetching the ingredients:",c),null}},async prepareOrder(m){const c=U();c.setVisible("currentOrder",!1);try{const t=await T.post(`${C}/order/${m}/prepare`);return t.status===200?(c.Notification.pause(),c.Notification.currentTime=0,c.getTodayOrders(),t.data):(console.error("An error occurred while preparing the order:",t.status),null)}catch(t){return console.error("An error occurred while preparing the order:",t),null}},async cancelOrder(m,c,t){const p=U();p.Notification.pause(),p.Notification.currentTime=0,p.setVisible("currentOrder",!1);const r={reason:c,responsible:t};try{const i=await T.post(`${C}/order/${m}/cancel`,r);return i.status===200?(p.getTodayOrders(),p.setVisible("currentOrder",!1),i.data):(console.error("An error occurred while cancelling the order:",i.status),null)}catch(i){return console.error("An error occurred while cancelling the order:",i),null}},async sendOrder(m){const c=U();c.setVisible("currentOrder",!1);try{const t=await T.post(`${C}/order/${m}/send`);return t.status===200?(c.getTodayOrders(),c.setVisible("currentOrder",!1),t.data):(console.error("An error occurred while sending the order:",t.status),null)}catch(t){return console.error("An error occurred while sending the order:",t),null}},async create_cancellling_request(m){const c=U();c.setVisible("currentOrder",!1);try{const t=await T.post(`${C}/insert-cancellation-order`,m);return t.status===200?(c.getTodayOrders(),c.setVisible("currentOrder",!1),t.data):(console.error("An error occurred while sending the order:",t.status),null)}catch(t){return console.error("An error occurred while sending the order:",t),null}},async deliveryZero(m){const c=U();c.setVisible("currentOrder",!1);try{const t=await T.put(`${C}/delivery_zero/${m}`);return t.status===200?(c.getTodayOrders(),c.setVisible("currentOrder",!1),t.data):(console.error("An error occurred while sending the order:",t.status),null)}catch(t){return console.error("An error occurred while sending the order:",t),null}}},Z=X("site",{persist:{key:"site",storage:localStorage,paths:[]},state:()=>({site:{site_id:1}}),getters:{},actions:{setSite(m){this.site=m}}}),U=X("cart",{persist:{key:"order",storage:localStorage,paths:["currentCountOrders"]},state:()=>({currentOrder:{},visibles:{currentOrder:!1},TodayOrders:[],Notification:new Audio("/sound/pip.mp3"),webSocket:null,currentCountOrders:0,last_order_id:0,currentSearchingOrder:{}}),getters:{},actions:{setVisible(m,c){this.visibles[m]=c},setOrder(m){this.currentOrder=m},async getTodayOrders(){const m=Z();m.site.site_id&&(this.TodayOrders=await R.getOrdersBySite(m.site.site_id))},async updateTodayOrders(){const m=Z();m.site.site_id&&(this.TodayOrders=await R.UpdateOrdersBySite(m.site.site_id))},startOrderUpdates(){this.interval=setInterval(()=>{this.updateTodayOrders()},1e4)},stopOrderUpdates(){clearInterval(this.interval)}}});var oe={exports:{}};(function(m,c){(function(p,r){m.exports=r()})(window,function(){return function(t){var p={};function r(i){if(p[i])return p[i].exports;var h=p[i]={i,l:!1,exports:{}};return t[i].call(h.exports,h,h.exports,r),h.l=!0,h.exports}return r.m=t,r.c=p,r.d=function(i,h,d){r.o(i,h)||Object.defineProperty(i,h,{enumerable:!0,get:d})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,h){if(h&1&&(i=r(i)),h&8||h&4&&typeof i=="object"&&i&&i.__esModule)return i;var d=Object.create(null);if(r.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:i}),h&2&&typeof i!="string")for(var w in i)r.d(d,w,(function(u){return i[u]}).bind(null,w));return d},r.n=function(i){var h=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(h,"a",h),h},r.o=function(i,h){return Object.prototype.hasOwnProperty.call(i,h)},r.p="",r(r.s=0)}({"./src/index.js":function(t,p,r){r.r(p),r("./src/sass/index.scss");var i=r("./src/js/init.js"),h=i.default.init;typeof window<"u"&&(window.printJS=h),p.default=h},"./src/js/browser.js":function(t,p,r){r.r(p);var i={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!i.isIE()&&!!window.StyleMedia},isChrome:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!d.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};p.default=i},"./src/js/functions.js":function(t,p,r){r.r(p),r.d(p,"addWrapper",function(){return w}),r.d(p,"capitalizePrint",function(){return u}),r.d(p,"collectStyles",function(){return l}),r.d(p,"addHeader",function(){return s}),r.d(p,"cleanUp",function(){return g}),r.d(p,"isRawHTML",function(){return f});var i=r("./src/js/modal.js"),h=r("./src/js/browser.js");function d(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(y){return typeof y}:d=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},d(o)}function w(o,a){var y="font-family:"+a.font+" !important; font-size: "+a.font_size+" !important; width:100%;";return'<div style="'+y+'">'+o+"</div>"}function u(o){return o.charAt(0).toUpperCase()+o.slice(1)}function l(o,a){for(var y=document.defaultView||window,A="",O=y.getComputedStyle(o,""),D=0;D<O.length;D++)(a.targetStyles.indexOf("*")!==-1||a.targetStyle.indexOf(O[D])!==-1||n(a.targetStyles,O[D]))&&O.getPropertyValue(O[D])&&(A+=O[D]+":"+O.getPropertyValue(O[D])+";");return A+="max-width: "+a.maxWidth+"px !important; font-size: "+a.font_size+" !important;",A}function n(o,a){for(var y=0;y<o.length;y++)if(d(a)==="object"&&a.indexOf(o[y])!==-1)return!0;return!1}function s(o,a){var y=document.createElement("div");if(f(a.header))y.innerHTML=a.header;else{var A=document.createElement("h1"),O=document.createTextNode(a.header);A.appendChild(O),A.setAttribute("style",a.headerStyle),y.appendChild(A)}o.insertBefore(y,o.childNodes[0])}function g(o){o.showModal&&i.default.close(),o.onLoadingEnd&&o.onLoadingEnd(),(o.showModal||o.onLoadingStart)&&window.URL.revokeObjectURL(o.printable);var a="mouseover";(h.default.isChrome()||h.default.isFirefox())&&(a="focus");var y=function A(){window.removeEventListener(a,A),o.onPrintDialogClose();var O=document.getElementById(o.frameId);O&&O.remove()};window.addEventListener(a,y)}function f(o){var a=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return a.test(o)}},"./src/js/html.js":function(t,p,r){r.r(p);var i=r("./src/js/functions.js"),h=r("./src/js/print.js");function d(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(s){return typeof s}:d=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},d(l)}p.default={print:function(n,s){var g=u(n.printable)?n.printable:document.getElementById(n.printable);if(!g){window.console.error("Invalid HTML element id: "+n.printable);return}n.printableElement=w(g,n),n.header&&Object(i.addHeader)(n.printableElement,n),h.default.send(n,s)}};function w(l,n){for(var s=l.cloneNode(),g=Array.prototype.slice.call(l.childNodes),f=0;f<g.length;f++)if(n.ignoreElements.indexOf(g[f].id)===-1){var o=w(g[f],n);s.appendChild(o)}switch(n.scanStyles&&l.nodeType===1&&s.setAttribute("style",Object(i.collectStyles)(l,n)),l.tagName){case"SELECT":s.value=l.value;break;case"CANVAS":s.getContext("2d").drawImage(l,0,0);break}return s}function u(l){return d(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(t,p,r){r.r(p);var i=r("./src/js/functions.js"),h=r("./src/js/print.js"),d=r("./src/js/browser.js");p.default={print:function(u,l){u.printable.constructor!==Array&&(u.printable=[u.printable]),u.printableElement=document.createElement("div"),u.printable.forEach(function(n){var s=document.createElement("img");if(s.setAttribute("style",u.imageStyle),s.src=n,d.default.isFirefox()){var g=s.src;s.src=g}var f=document.createElement("div");f.appendChild(s),u.printableElement.appendChild(f)}),u.header&&Object(i.addHeader)(u.printableElement,u),h.default.send(u,l)}}},"./src/js/init.js":function(t,p,r){r.r(p);var i=r("./src/js/browser.js"),h=r("./src/js/modal.js"),d=r("./src/js/pdf.js"),w=r("./src/js/html.js"),u=r("./src/js/raw-html.js"),l=r("./src/js/image.js"),n=r("./src/js/json.js");function s(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(a){return typeof a}:s=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},s(f)}var g=["pdf","html","image","json","raw-html"];p.default={init:function(){var o={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(te){throw te},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},a=arguments[0];if(a===void 0)throw new Error("printJS expects at least 1 attribute.");switch(s(a)){case"string":o.printable=encodeURI(a),o.fallbackPrintable=o.printable,o.type=arguments[1]||o.type;break;case"object":o.printable=a.printable,o.fallbackPrintable=typeof a.fallbackPrintable<"u"?a.fallbackPrintable:o.printable,o.fallbackPrintable=o.base64?"data:application/pdf;base64,".concat(o.fallbackPrintable):o.fallbackPrintable;for(var y in o)y==="printable"||y==="fallbackPrintable"||(o[y]=typeof a[y]<"u"?a[y]:o[y]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+s(a))}if(!o.printable)throw new Error("Missing printable information.");if(!o.type||typeof o.type!="string"||g.indexOf(o.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");o.showModal&&h.default.show(o),o.onLoadingStart&&o.onLoadingStart();var A=document.getElementById(o.frameId);A&&A.parentNode.removeChild(A);var O=document.createElement("iframe");switch(i.default.isFirefox()?O.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):O.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),O.setAttribute("id",o.frameId),o.type!=="pdf"&&(O.srcdoc="<html><head><title>"+o.documentTitle+"</title>",o.css&&(Array.isArray(o.css)||(o.css=[o.css]),o.css.forEach(function(V){O.srcdoc+='<link rel="stylesheet" href="'+V+'">'})),O.srcdoc+="</head><body></body></html>"),o.type){case"pdf":if(i.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var D=window.open(o.fallbackPrintable,"_blank");D.focus(),o.onIncompatibleBrowser()}catch(V){o.onError(V)}finally{o.showModal&&h.default.close(),o.onLoadingEnd&&o.onLoadingEnd()}else d.default.print(o,O);break;case"image":l.default.print(o,O);break;case"html":w.default.print(o,O);break;case"raw-html":u.default.print(o,O);break;case"json":n.default.print(o,O);break}}}},"./src/js/json.js":function(t,p,r){r.r(p);var i=r("./src/js/functions.js"),h=r("./src/js/print.js");function d(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(n){return typeof n}:d=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(u)}p.default={print:function(l,n){if(d(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(s){return{field:d(s)==="object"?s.field:s,displayName:d(s)==="object"?s.displayName:s,columnSize:d(s)==="object"&&s.columnSize?s.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(i.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=w(l),h.default.send(l,n)}};function w(u){var l=u.printable,n=u.properties,s='<table style="border-collapse: collapse; width: 100%;">';u.repeatTableHeader&&(s+="<thead>"),s+="<tr>";for(var g=0;g<n.length;g++)s+='<th style="width:'+n[g].columnSize+";"+u.gridHeaderStyle+'">'+Object(i.capitalizePrint)(n[g].displayName)+"</th>";s+="</tr>",u.repeatTableHeader&&(s+="</thead>"),s+="<tbody>";for(var f=0;f<l.length;f++){s+="<tr>";for(var o=0;o<n.length;o++){var a=l[f],y=n[o].field.split(".");if(y.length>1)for(var A=0;A<y.length;A++)a=a[y[A]];else a=a[n[o].field];s+='<td style="width:'+n[o].columnSize+u.gridStyle+'">'+a+"</td>"}s+="</tr>"}return s+="</tbody></table>",s}},"./src/js/modal.js":function(t,p,r){r.r(p);var i={show:function(d){var w="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",u=document.createElement("div");u.setAttribute("style",w),u.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var n=document.createElement("div");n.setAttribute("class","printClose"),n.setAttribute("id","printClose"),l.appendChild(n);var s=document.createElement("span");s.setAttribute("class","printSpinner"),l.appendChild(s);var g=document.createTextNode(d.modalMessage);l.appendChild(g),u.appendChild(l),document.getElementsByTagName("body")[0].appendChild(u),document.getElementById("printClose").addEventListener("click",function(){i.close()})},close:function(){var d=document.getElementById("printJS-Modal");d&&d.parentNode.removeChild(d)}};p.default=i},"./src/js/pdf.js":function(t,p,r){r.r(p);var i=r("./src/js/print.js"),h=r("./src/js/functions.js");p.default={print:function(u,l){if(u.base64){var n=Uint8Array.from(atob(u.printable),function(g){return g.charCodeAt(0)});d(u,l,n);return}u.printable=/^(blob|http|\/\/)/i.test(u.printable)?u.printable:window.location.origin+(u.printable.charAt(0)!=="/"?"/"+u.printable:u.printable);var s=new window.XMLHttpRequest;s.responseType="arraybuffer",s.addEventListener("error",function(){Object(h.cleanUp)(u),u.onError(s.statusText,s)}),s.addEventListener("load",function(){if([200,201].indexOf(s.status)===-1){Object(h.cleanUp)(u),u.onError(s.statusText,s);return}d(u,l,s.response)}),s.open("GET",u.printable,!0),s.send()}};function d(w,u,l){var n=new window.Blob([l],{type:"application/pdf"});n=window.URL.createObjectURL(n),u.setAttribute("src",n),i.default.send(w,u)}},"./src/js/print.js":function(t,p,r){r.r(p);var i=r("./src/js/browser.js"),h=r("./src/js/functions.js"),d={send:function(s,g){document.getElementsByTagName("body")[0].appendChild(g);var f=document.getElementById(s.frameId);f.onload=function(){if(s.type==="pdf"){i.default.isFirefox()?setTimeout(function(){return w(f,s)},1e3):w(f,s);return}var o=f.contentWindow||f.contentDocument;if(o.document&&(o=o.document),o.body.appendChild(s.printableElement),s.type!=="pdf"&&s.style){var a=document.createElement("style");a.innerHTML=s.style,o.head.appendChild(a)}var y=o.getElementsByTagName("img");y.length>0?u(Array.from(y)).then(function(){return w(f,s)}):w(f,s)}}};function w(n,s){try{if(n.focus(),i.default.isEdge()||i.default.isIE())try{n.contentWindow.document.execCommand("print",!1,null)}catch{n.contentWindow.print()}else n.contentWindow.print()}catch(g){s.onError(g)}finally{i.default.isFirefox()&&(n.style.visibility="hidden",n.style.left="-1px"),Object(h.cleanUp)(s)}}function u(n){var s=n.map(function(g){if(g.src&&g.src!==window.location.href)return l(g)});return Promise.all(s)}function l(n){return new Promise(function(s){var g=function f(){!n||typeof n.naturalWidth>"u"||n.naturalWidth===0||!n.complete?setTimeout(f,500):s()};g()})}p.default=d},"./src/js/raw-html.js":function(t,p,r){r.r(p);var i=r("./src/js/print.js");p.default={print:function(d,w){d.printableElement=document.createElement("div"),d.printableElement.setAttribute("style","width:100%"),d.printableElement.innerHTML=d.printable,i.default.send(d,w)}}},"./src/sass/index.scss":function(t,p,r){},0:function(t,p,r){t.exports=r("./src/index.js")}}).default})})(oe);const S=m=>(Q("data-v-62f7495b"),m=m(),q(),m),se=S(()=>e("h3",null,[e("b",null,"Cancelar Orden")],-1)),le=["onSubmit"],ie=S(()=>e("span",{for:"responsible"},"Responsable",-1)),ae=S(()=>e("span",{for:"reason"},"Razón",-1)),de=S(()=>e("h3",null,[e("b",null,"Cancelar Orden")],-1)),ce=["onSubmit"],ue=S(()=>e("span",{class:"advert",style:{"text-transform":"lowercase",color:"red","font-weight":"bold"}}," Desde el 16 de mayo de 2024, la cancelación de órdenes requerirá autorización.",-1)),fe=S(()=>e("span",{for:"responsible"},"Responsable",-1)),pe=S(()=>e("span",{for:"reason"},"Razón",-1)),he={style:{"text-transform":"capitalize"}},ye={class:"col-12 mb-0 pb-0 px-0 m-0",style:{display:"flex","justify-content":"space-between",gap:"1rem"}},be={id:"factura",style:{width:"100%"}},me={class:"",style:{width:"auto",color:"black"}},ge=S(()=>e("br",null,null,-1)),_e=S(()=>e("b",null,"responsable",-1)),ve=S(()=>e("br",null,null,-1)),we=S(()=>e("b",null,"Razon",-1)),Oe={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},xe={class:"",id:"id",style:{"font-weight":"bold","min-width":"100%",width:"max-content","text-align":"center",color:"black",margin:"0rem"}},Ee={style:{padding:"0",color:"black",margin:"auto","margin-bottom":"1rem",width:"max-content","min-width":"max-content"}},Se=S(()=>e("div",{class:"",style:{"font-weight":"bold",color:"white",margin:"0","background-color":"black","align-items":"center",display:"grid","grid-template-columns":"auto auto"}},[e("div",{style:{width:"100%"}},[e("b",null," productos")]),e("div",null,[e("p",{style:{"text-align":"end","font-weight":"bold"}},[e("b",null," total ")])])],-1)),Ae={style:{display:"grid","grid-template-columns":"auto auto"}},Pe={style:{"text-align":"end",color:"black"}},je=S(()=>e("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),Me={style:{"background-color":"black","font-weight":"bold",color:"white",width:"100%",margin:"0"}},Te={style:{display:"grid","grid-template-columns":"auto 20%","align-items":"center"}},Ce={style:{"text-align":"end",color:"black"}},Ie=S(()=>e("div",{style:{"background-color":"rgba(0, 0, 0, 0.286)",height:"1px"}},null,-1)),De={class:"",style:{display:"grid",color:"","margin-top":"0.5rem","grid-template-columns":"auto auto"}},Le=S(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold"}},[e("b",null,"Subtotal")])],-1)),$e={class:""},Be={style:{"text-align":"end","font-weight":"bold",color:"black"}},Ue=S(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold"}},[e("b",null,"Domicilio")])],-1)),Re={class:""},Ve={style:{"text-align":"end","font-weight":"bold",color:"black"}},ke=S(()=>e("div",{class:""},[e("span",{style:{"font-weight":"bold",color:"black"}},[e("b",null,"Total")])],-1)),Ne={class:""},ze={style:{"text-align":"end",color:"black","font-weight":"bold"}},We=S(()=>e("div",{class:""},null,-1)),He=S(()=>e("p",{style:{"font-weight":"bold","background-color":"black",color:"white",padding:"0",margin:"0","margin-top":"0.5rem"}},[e("b",null,"Notas")],-1)),Ke={class:"notas",style:{border:"1px solid",margin:"0",color:"black",padding:"0.5rem"}},Fe=S(()=>e("p",{style:{"background-color":"black","font-weight":"bold","margin-top":"1rem",color:"white"}},[e("b",null,"cliente")],-1)),Je={style:{display:"grid","grid-template-columns":"auto auto"}},Ze=S(()=>e("div",{class:"",style:{}},[e("span",null,[e("b",null,"NOMBRE")])],-1)),Ge={class:""},Xe={style:{"text-align":"end",color:"black"}},Ye=S(()=>e("div",{style:{}},[e("span",null,[e("b",null,"telefono")])],-1)),Qe={style:{"text-align":"end",color:"black"}},qe=S(()=>e("div",{style:{}},[e("span",null,[e("b",null,"direccion ")])],-1)),et={style:{"text-align":"end",color:"black"}},tt=S(()=>e("div",null,[e("span",null,[e("b",null,"metodo de pago")])],-1)),rt={style:{"text-align":"end",color:"black"}},nt={__name:"DialogoPedido",setup(m){const c=B(!1),t=U(),p=l=>{const n=new Date(l),s=n.getHours(),g=n.getMinutes(),f=s>=12?"pm":"am",o=s%12||12,a=o<10?"0"+o:o,y=g<10?"0"+g:g;return`${a}:${y} ${f}`},r=async()=>{var n;const l={order_id:t.currentOrder.order_id,responsible:(n=d.value.responsible)==null?void 0:n.name,reason:d.value.reason};await R.create_cancellling_request(l),c.value=!1,t.Notification.pause(),t.Notification.currentTime=0},i=B(!1);J(async()=>{t.currentOrder.value=t.currentOrder});const h=B(!1),d=B({responsible:null,reason:"Sin razon"}),w=B([{name:"Restaurante",value:"restaurant"},{name:"Cliente",value:"client"}]),u=()=>{d.value.responsible&&R.cancelOrder(t.currentOrder.order_id,d.value.reason,d.value.responsible.name).then(l=>{l&&(h.value=!1,console.log("Order canceled successfully"))}).catch(l=>{console.error("Failed to cancel order:",l)})};return(l,n)=>{const s=I("Dropdown"),g=I("Textarea"),f=I("Button"),o=I("Dialog");return v(),x("div",null,[E(o,{visible:h.value,"onUpdate:visible":n[2]||(n[2]=a=>h.value=a),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:j(()=>[se]),default:j(()=>[e("form",{onSubmit:G(u,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[ie,E(s,{style:{width:"100%"},id:"responsible",modelValue:d.value.responsible,"onUpdate:modelValue":n[0]||(n[0]=a=>d.value.responsible=a),options:w.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),ae,E(g,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:d.value.reason,"onUpdate:modelValue":n[1]||(n[1]=a=>d.value.reason=a),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),E(f,{style:{width:"100%","border-radius":"0.5rem"},label:"cancelar",type:"submit",class:"p-button-danger"})],40,le)]),_:1},8,["visible"]),E(o,{visible:c.value,"onUpdate:visible":n[5]||(n[5]=a=>c.value=a),closeOnEscape:"",closable:!0,modal:"",style:{width:"30rem"}},{header:j(()=>[de]),default:j(()=>[e("form",{onSubmit:G(r,["prevent"]),style:{display:"flex",gap:"1rem","flex-direction":"column","align-items":"start"}},[ue,fe,E(s,{style:{width:"100%"},id:"responsible",modelValue:d.value.responsible,"onUpdate:modelValue":n[3]||(n[3]=a=>d.value.responsible=a),options:w.value,optionLabel:"name",placeholder:"Selecciona un responsable"},null,8,["modelValue","options"]),pe,E(g,{style:{resize:"none","text-transform":"lowercase",width:"100%"},id:"reason",modelValue:d.value.reason,"onUpdate:modelValue":n[4]||(n[4]=a=>d.value.reason=a),rows:"5",placeholder:"Escribe la razón de la cancelación"},null,8,["modelValue"]),E(f,{style:{width:"100%","border-radius":"0.5rem"},label:"solicitar cancelacion",type:"submit",class:"p-button-danger"})],40,ce)]),_:1},8,["visible"]),E(o,{closable:!1,style:{width:"30rem"},modal:"",visible:i.value,"onUpdate:visible":n[8]||(n[8]=a=>i.value=a)},{footer:j(()=>[e("div",ye,[E(f,{text:"",size:"small",onClick:n[6]||(n[6]=()=>{b(R).deliveryZero(b(t).currentOrder.order_id),i.value=!1}),style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"si"}),E(f,{onClick:n[7]||(n[7]=a=>i.value=!1),size:"small",style:{"border-radius":"0.3rem",width:"100%"},severity:"danger",label:"no"})])]),default:j(()=>[e("span",he,[P(" Esta seguro de llevar a $0.00 el valor del domicilio para la orden "),e("b",null,_(b(t).currentOrder.order_id),1),P(" del cliente "),e("b",null,_(b(t).currentOrder.user_name),1),P("? ")])]),_:1},8,["visible"]),E(o,{class:"mx-3",closeOnEscape:"",closable:!1,visible:b(t).visibles.currentOrder,"onUpdate:visible":n[10]||(n[10]=a=>b(t).visibles.currentOrder=a),modal:"",style:{"max-height":"95vh",width:"35rem",position:"relative"}},{default:j(()=>{var a;return[e("div",be,[e("div",me,[b(t).currentOrder.current_status=="enviada"?(v(),x("p",{key:0,class:k(["text-2xl estado",b(t).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," El pedido fue enviado al domicilio del cliente a las "+_(p(b(t).currentOrder.latest_status_timestamp)),3)):M("",!0),b(t).currentOrder.current_status=="cancelada"?(v(),x("p",{key:1,class:k(["text-2xl estado",b(t).currentOrder.current_status]),style:{"text-transform":"lowercase"}},[P(" El pedido fue cancelado a las "+_(p(b(t).currentOrder.latest_status_timestamp))+" ",1),ge,_e,P(": "+_(b(t).currentOrder.responsible)+" ",1),ve,we,P(": "+_(b(t).currentOrder.reason),1)],2)):M("",!0),b(t).currentOrder.current_status=="en preparacion"?(v(),x("p",{key:2,class:k(["text-2xl estado",b(t).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," El pedido esta en preparacion desde las "+_(p(b(t).currentOrder.latest_status_timestamp))+" y ser'a enviada en breve ",3)):M("",!0),b(t).currentOrder.current_status=="generada"?(v(),x("p",{key:3,class:k(["text-2xl estado",b(t).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," Hemos recibido su pedido a las "+_(p(b(t).currentOrder.latest_status_timestamp))+" y empezaremos a prepararlo en breve, gracias por su espera ",3)):M("",!0),b(t).currentOrder.current_status?M("",!0):(v(),x("p",{key:4,class:k(["text-2xl estado",b(t).currentOrder.current_status]),style:{"text-transform":"lowercase"}}," Este pedido no existe en nuestra base de datos ",2)),e("p",Oe," ID:"+_(b(t).currentOrder.order_id),1),e("p",xe,_(b(t).currentOrder.user_name),1),e("p",Ee,[e("b",null," fecha: "+_((a=b(t).currentOrder.latest_status_timestamp)==null?void 0:a.split("T")[0]),1)]),Se,(v(!0),x(L,null,$(b(t).currentOrder.products,y=>(v(),x("div",null,[e("div",Ae,[e("p",null,_(y.quantity)+" "+_(y.name),1),e("div",null,[e("p",Pe,_(b(z)(y.total_price)),1)])]),je]))),256)),(v(!0),x(L,null,$(b(t).currentOrder.additional_items,(y,A)=>(v(),x("div",{s:"",key:A,style:{position:"relative","margin-top":"0.5rem"}},[e("p",Me,[e("b",null,_(A),1)]),(v(!0),x(L,null,$(y,O=>(v(),x("div",null,[e("div",Te,[e("div",null,[e("p",null,_(O.aditional_quantity)+" "+_(O.aditional_name),1)]),e("div",null,[e("p",Ce,_(b(z)(O.total_aditional_price)),1)])]),Ie]))),256))]))),128)),e("div",De,[Le,e("div",$e,[e("p",Be,[e("b",null,_(b(z)(b(t).currentOrder.total_order_price)),1)])]),Ue,e("div",Re,[e("p",Ve,[e("b",null,_(b(z)(b(t).currentOrder.delivery_price)),1)])]),ke,e("div",Ne,[e("p",ze,[e("b",null,_(b(z)(b(t).currentOrder.delivery_price+b(t).currentOrder.total_order_price)),1)])]),We]),He,e("p",Ke,_(b(t).currentOrder.order_notes),1),Fe,e("div",Je,[Ze,e("div",Ge,[e("p",Xe,_(b(t).currentOrder.user_name),1)]),Ye,e("div",null,[e("p",Qe,_(b(t).currentOrder.user_phone),1)]),qe,e("div",null,[e("p",et,_(b(t).currentOrder.user_address),1)]),tt,e("div",null,[e("p",rt,_(b(t).currentOrder.payment_method),1)])])])]),E(f,{class:"shadow-4",onClick:n[9]||(n[9]=y=>b(t).setVisible("currentOrder",!1)),icon:"pi pi-times",rounded:"",severity:"danger",style:{position:"absolute",top:"-1rem","border-radius":"50%",right:"-1rem"}})]}),_:1},8,["visible"])])}}},ot=Y(nt,[["__scopeId","data-v-62f7495b"]]),st={style:{display:"flex","align-items":"center","justify-content":"space-between"}},lt={style:{display:"flex","align-items":"center"}},it={style:{"min-width":"max-content",color:"black"}},at={style:{width:"3rem",height:"100%"}},dt={style:{position:"relative"}},ct=["src"],ut={style:{display:"flex",gap:"1rem","align-items":"center"}},ft={style:{"min-width":"max-content",color:"black"}},pt={key:1,style:{"font-weight":"bold"}},ht=e("b",null,"RESPONSABLE:",-1),yt={key:4},bt=e("b",null,"OBSERVACIONES:",-1),H={__name:"OrderItem",props:{order:{type:Object,default:{}}},setup(m){const c=U(),t=()=>{c.setVisible("currentOrder",!0),c.setOrder(r.order)},p={generada:"warning","en preparacion":"info",enviada:"success",cancelada:"danger"},r=m;return(i,h)=>{var n,s,g,f,o,a;const d=I("Tag"),w=I("Button"),u=I("ProgressSpinner"),l=I("P");return v(),x("div",{onClick:t,class:"col-12",style:ee([b(c).currentSearchingOrder.order_id==r.order.order_id?"border:3px solid var(--primary-color)":"",{"background-color":"rgba(255, 255, 255, 0.506)","border-radius":"0.5rem",cursor:"pointer"}])},[E(d,{class:"text-l",severity:r.order.user_phone=="1111111111"?"danger":"help"},{default:j(()=>[P(_(r.order.user_phone=="1111111111"?"ES UNA PRUEBA, RELAJATE":r.order.user_name),1)]),_:1},8,["severity"]),e("div",st,[e("div",lt,[e("b",it," #"+_((n=r.order)==null?void 0:n.order_id),1),(v(!0),x(L,null,$(r.order.products.slice(0,3),y=>(v(),x("div",at,[e("div",dt,[e("img",{style:{width:"100%"},src:`https://backend.salchimonster.com/read-product-image/96/${y.name}`,alt:""},null,8,ct),E(w,{severity:"danger",class:"p-0",rounded:"",label:y.quantity,style:{width:"1.5rem",position:"absolute",top:"-.5rem",right:"-.5rem","z-index":"99",height:"1.5rem","border-radius":"1rem"}},null,8,["label"])])]))),256))]),e("span",ut,[e("b",ft,_((a=(o=(f=(g=(s=r.order)==null?void 0:s.latest_status_timestamp)==null?void 0:g.split("T")[1])==null?void 0:f.split(".")[0])==null?void 0:o.split(":").slice(0,2))==null?void 0:a.join(":")),1),r.order.current_status!="en preparacion"?(v(),N(d,{key:0,severity:p[r.order.current_status]},{default:j(()=>[P(_(r.order.current_status),1)]),_:1},8,["severity"])):M("",!0),r.order.current_status=="en preparacion"?(v(),N(u,{key:1,style:{width:"50px",height:"50px"},strokeWidth:"8",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})):M("",!0)])]),r.order.calcel_sol_state!=null?(v(),N(d,{key:0,severity:r.order.calcel_sol_state?"success":"danger"},{default:j(()=>[P(_(r.order.calcel_sol_state?"REVISADO":" EN REVISION..."),1)]),_:1},8,["severity"])):M("",!0),P(),r.order.calcel_sol_state?(v(),x("span",pt," Y ")):M("",!0),r.order.calcel_sol_state?(v(),N(d,{key:2,severity:r.order.calcel_sol_asnwer?"success":"danger"},{default:j(()=>[P(_(r.order.calcel_sol_asnwer?"APROBADO":"RECHAZADO"),1)]),_:1},8,["severity"])):M("",!0),r.order.calcel_sol_state?(v(),N(l,{key:3,class:"m-0"},{default:j(()=>{var y;return[ht,P(" "+_((y=r.order.cancelation_solve_responsible)==null?void 0:y.split(" ").slice(0,3).join(" ")),1)]}),_:1})):M("",!0),r.order.responsible_observation?(v(),x("span",yt,[e("p",null,[bt,P(" "+_(r.order.responsible_observation||"sin observaciones"),1)])])):M("",!0)],4)}}};const K=m=>(Q("data-v-c8833b83"),m=m(),q(),m),mt={class:"grid xl:mx-0 mx-0 py-0 mt-6 px-0"},gt={class:"col-12 py-0 px-2 shadow-2 my-0"},_t={class:""},vt={class:"pb-0 p-0",style:{display:"flex","flex-wrap":"wrap",gap:"1rem","list-style":"none","overflow-x":"auto"}},wt={style:{display:"flex",gap:"1rem"}},Ot={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},xt={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#ffad53"}},Et={style:{height:"100%",width:"100%"}},St=K(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-envelope text-2xl"}),P(" RECIBIDOS")])],-1)),At={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},Pt={class:"px-3 py-2"},jt={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Mt={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#8e3693"}},Tt={style:{height:"100%",width:"100%"}},Ct=K(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-clock text-2xl"}),P(" EN PREPARACION")])],-1)),It={class:"lg:pb-8",style:{height:"100%","overflow-y":"auto"}},Dt={class:"px-3 py-2"},Lt={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},$t={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"#00bf7a"}},Bt={class:"lg:pb-8",style:{height:"100%",width:"100%"}},Ut=K(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-send text-2xl"}),P(" ENVIADOS")])],-1)),Rt={style:{height:"100%","overflow-y":"auto"}},Vt={class:"px-3 py-2"},kt={class:"md:px-2 xl:pt-5 p-0 col-12 xl:col-4 top"},Nt={class:"shadow-4 contenedor pb-2",style:{overflow:"hidden","background-color":"red"}},zt={class:"lg:pb-8",style:{height:"100%",width:"100%"}},Wt=K(()=>e("p",{class:"col-12 text-center shadow-4",style:{"background-color":"#ffffff61"}},[e("span",{class:"text-center text-2xl",style:{color:"black","font-weight":"bold"}},[e("i",{class:"pi pi-times text-2xl"}),P(" CANCELADOS")])],-1)),Ht={style:{height:"100%","overflow-y":"auto"}},Kt={class:"px-3 py-2"},Ft={__name:"pedidos",setup(m){const c=B([]),t=U(),p=Z(),r=B(""),i=B("");J(()=>{t.startOrderUpdates()}),re(()=>{t.stopOrderUpdates()}),J(async()=>{c.value=await ne.getSites(),t.getTodayOrders()}),F(()=>p.site,()=>{t.getTodayOrders()}),F(r,()=>{i.value=""}),F(i,()=>{r.value=""});const h=()=>{var u;if(r.value!="")d(r.value);else if(i.value!="")w((u=i.value)==null?void 0:u.split(" ").join(""));else return},d=async u=>{const l=await R.getOrderById(u);l!=null&&l.order_id?(t.setVisible("currentOrder",!0),t.setOrder(l),p.site=c.value.filter(n=>n.site_id==l.site_id)[0],t.currentSearchingOrder=l):alert("Orden no encontrada")},w=async u=>{const l=await R.getOrderByPhone(u);l!=null&&l.order_id?(t.setVisible("currentOrder",!0),t.setOrder(l),p.site=c.value.filter(n=>n.site_id==l.site_id)[0],t.currentSearchingOrder=l):alert("Orden no encontrada")};return(u,l)=>{const n=I("Button"),s=I("InputText"),g=I("InputMask");return v(),x("div",mt,[e("div",gt,[e("nav",_t,[e("ul",vt,[(v(!0),x(L,null,$(c.value.filter(f=>f.show_on_web),f=>(v(),x("li",null,[E(n,{class:"p-2 mb-2",onClick:o=>b(p).site=f,style:ee([b(p).site.site_id==f.site_id?"box-shadow:0 5px 0px var(--primary-color)":"",{"min-width":"max-content","border-radius":"0",color:"black"}]),text:"",label:f.site_name},null,8,["onClick","style","label"])]))),256)),e("li",wt,[E(s,{style:{},modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=f=>r.value=f),modelModifiers:{trim:!0},placeholder:"Buscar por id (sin #)"},null,8,["modelValue"]),P(),E(g,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=f=>i.value=f),prefix:"+57",id:"basic",mask:"999 999 9999",placeholder:"Buscar por telefono"},null,8,["modelValue"]),E(n,{onClick:l[2]||(l[2]=f=>h()),severity:"help",icon:"pi pi-search",label:"Buscar"})])])])]),E(ot),e("div",Ot,[e("div",xt,[e("div",Et,[St,e("div",At,[(v(!0),x(L,null,$(b(t).TodayOrders.filter(f=>f.current_status=="generada"),f=>(v(),x("div",Pt,[E(H,{order:f},null,8,["order"])]))),256))])])])]),e("div",jt,[e("div",Mt,[e("div",Tt,[Ct,e("div",It,[(v(!0),x(L,null,$(b(t).TodayOrders.filter(f=>f.current_status=="en preparacion"),f=>(v(),x("div",Dt,[E(H,{order:f},null,8,["order"])]))),256))])])])]),e("div",Lt,[e("div",$t,[e("div",Bt,[Ut,e("div",Rt,[(v(!0),x(L,null,$(b(t).TodayOrders.filter(f=>f.current_status=="enviada"),f=>(v(),x("div",Vt,[E(H,{order:f},null,8,["order"])]))),256))])])])]),e("div",kt,[e("div",Nt,[e("div",zt,[Wt,e("div",Ht,[(v(!0),x(L,null,$(b(t).TodayOrders.filter(f=>f.current_status=="cancelada"),f=>(v(),x("div",Kt,[E(H,{order:f},null,8,["order"])]))),256))])])])])])}}},Xt=Y(Ft,[["__scopeId","data-v-c8833b83"]]);export{Xt as default};
