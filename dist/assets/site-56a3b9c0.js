<<<<<<<< HEAD:dist/assets/site-56a3b9c0.js
import{G as r,j as a,U as c}from"./index-a1098956.js";const d=r("shoping-cart",{persist:{key:"shoping-cart",storage:localStorage,paths:["cart","last_order"]},state:()=>({currentProduct:{},visibles:{currentProduct:!1,addAdditionToCart:!1,last_order:""},cart:{products:[],total_cost:0,additions:[]},last_order:"",sending_order:!1}),getters:{totalItems:e=>e.cart.products.reduce((t,i)=>t+i.quantity,0),totalAdditions:e=>e.cart.additions.reduce((t,i)=>t+i.price*i.quantity,0),isProductInCart:e=>t=>e.cart.products.some(i=>i.product.id===t)},actions:{incrementAdditionQuantity(e){const t=this.cart.additions.find(i=>i.id===e);t&&(t.quantity+=1,this.calculateCartTotal())},removeAdditionCompletelyFromCart(e){const t=this.cart.additions.findIndex(i=>i.id===e);t>-1&&(this.cart.additions.splice(t,1),this.calculateCartTotal())},decrementAdditionQuantity(e){const t=this.cart.additions.find(i=>i.id===e);t&&t.quantity>1&&(t.quantity-=1,this.calculateCartTotal())},setCurrentProduct(e){this.currentProduct=e},setVisible(e,t){this.visibles[e]=t},addProductToCart(e,t=1,i=[]){const o=this.cart.products.find(s=>s.product.id===e.id);o?(o.quantity+=t,o.total_cost+=e.price*t):this.cart.products.push({product:e,quantity:t,additionalItems:this.groupAdditionalItems(i),total_cost:this.calculateProductTotal(e,t,i)}),this.calculateCartTotal()},removeProductFromCart(e){this.cart.products=this.cart.products.filter(t=>t.product.id!==e),this.calculateCartTotal()},addAdditionalItem(e,t){const i=this.cart.products.find(o=>o.product.id===e);i&&(i.additionalItems.push(t),i.total_cost+=t.price*t.quantity,this.calculateCartTotal())},removeAdditionalItem(e,t){const i=this.cart.products.find(o=>o.product.id===e);if(i){const o=i.additionalItems.findIndex(s=>s.id===t);o>-1&&(i.total_cost-=i.additionalItems[o].price*i.additionalItems[o].quantity,i.additionalItems.splice(o,1),this.calculateCartTotal())}},groupAdditionalItems(e){return e.reduce((t,i)=>((t[i.type]=t[i.type]||[]).push(i),t),{})},calculateProductTotal(e,t,i){let o=e.price*t;return i.forEach(s=>{o+=s.price*s.quantity}),o},removeProductInstance(e){const t=this.cart.products.find(i=>i.product.id===e);t&&t.quantity>1?(t.quantity-=1,t.total_cost-=t.product.price,this.calculateCartTotal()):t&&t.quantity===1&&this.removeProductFromCart(e)},calculateCartTotal(){const e=this.cart.products.reduce((i,o)=>i+o.total_cost,0),t=this.totalAdditions;this.cart.total_cost=e+t},addAdditionToCart(e){const t=this.cart.additions.find(i=>i.id===e.id);t?t.quantity+=e.quantity:this.cart.additions.push({...e}),this.calculateCartTotal()},removeAdditionFromCart(e){const t=this.cart.additions.findIndex(i=>i.id===e);t>-1&&(this.cart.additions[t].quantity>1?this.cart.additions[t].quantity-=1:this.cart.additions.splice(t,1),this.calculateCartTotal())}}}),l=r("call-center-site",{persist:{key:"call-center-site",storage:localStorage,paths:["location"]},state:()=>({location:{site:{},neigborhood:{}},visibles:{currentSite:!1},current_delivery:0,webSocket:null,status:"closed"}),getters:{fucion:e=>0},actions:{async func(){return func},setLocation(e){this.connectWebSocket(e.site.site_id),this.location=e},setVisible(e,t){this.visibles[e]=t},async connectWebSocket(e){this.webSocket!==null&&this.webSocket.close,this.webSocket=new WebSocket(`wss://${URI_SOCKET}/ws/${e}`),this.webSocket.onopen=()=>this.webSocket.onmessage=t=>{console.log("new mesagge")},this.webSocket.onclose=async()=>{console.log("WebSocket disconnected");const t=this.location.site.site_id;t&&this.connectWebSocket(t),this.webSocket=null},this.webSocket.onerror=t=>console.error("WebSocket error:",t)},async setNeighborhoodPrice(){try{const e=await a.get(`${c}/neighborhood/${this.location.neigborhood.neighborhood_id}/`);return e.status===200?(this.location.neigborhood=e.data,e.data):(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async setNeighborhoodPriceCero(){this.location.neigborhood.delivery_price=0}}});export{d as a,l as u};
========
import{G as r,j as a,U as c}from"./index-1a945cfc.js";const d=r("shoping-cart",{persist:{key:"shoping-cart",storage:localStorage,paths:["cart","last_order"]},state:()=>({currentProduct:{},visibles:{currentProduct:!1,addAdditionToCart:!1,last_order:""},cart:{products:[],total_cost:0,additions:[]},last_order:"",sending_order:!1}),getters:{totalItems:e=>e.cart.products.reduce((t,i)=>t+i.quantity,0),totalAdditions:e=>e.cart.additions.reduce((t,i)=>t+i.price*i.quantity,0),isProductInCart:e=>t=>e.cart.products.some(i=>i.product.id===t)},actions:{incrementAdditionQuantity(e){const t=this.cart.additions.find(i=>i.id===e);t&&(t.quantity+=1,this.calculateCartTotal())},removeAdditionCompletelyFromCart(e){const t=this.cart.additions.findIndex(i=>i.id===e);t>-1&&(this.cart.additions.splice(t,1),this.calculateCartTotal())},decrementAdditionQuantity(e){const t=this.cart.additions.find(i=>i.id===e);t&&t.quantity>1&&(t.quantity-=1,this.calculateCartTotal())},setCurrentProduct(e){this.currentProduct=e},setVisible(e,t){this.visibles[e]=t},addProductToCart(e,t=1,i=[]){const o=this.cart.products.find(s=>s.product.id===e.id);o?(o.quantity+=t,o.total_cost+=e.price*t):this.cart.products.push({product:e,quantity:t,additionalItems:this.groupAdditionalItems(i),total_cost:this.calculateProductTotal(e,t,i)}),this.calculateCartTotal()},removeProductFromCart(e){this.cart.products=this.cart.products.filter(t=>t.product.id!==e),this.calculateCartTotal()},addAdditionalItem(e,t){const i=this.cart.products.find(o=>o.product.id===e);i&&(i.additionalItems.push(t),i.total_cost+=t.price*t.quantity,this.calculateCartTotal())},removeAdditionalItem(e,t){const i=this.cart.products.find(o=>o.product.id===e);if(i){const o=i.additionalItems.findIndex(s=>s.id===t);o>-1&&(i.total_cost-=i.additionalItems[o].price*i.additionalItems[o].quantity,i.additionalItems.splice(o,1),this.calculateCartTotal())}},groupAdditionalItems(e){return e.reduce((t,i)=>((t[i.type]=t[i.type]||[]).push(i),t),{})},calculateProductTotal(e,t,i){let o=e.price*t;return i.forEach(s=>{o+=s.price*s.quantity}),o},removeProductInstance(e){const t=this.cart.products.find(i=>i.product.id===e);t&&t.quantity>1?(t.quantity-=1,t.total_cost-=t.product.price,this.calculateCartTotal()):t&&t.quantity===1&&this.removeProductFromCart(e)},calculateCartTotal(){const e=this.cart.products.reduce((i,o)=>i+o.total_cost,0),t=this.totalAdditions;this.cart.total_cost=e+t},addAdditionToCart(e){const t=this.cart.additions.find(i=>i.id===e.id);t?t.quantity+=e.quantity:this.cart.additions.push({...e}),this.calculateCartTotal()},removeAdditionFromCart(e){const t=this.cart.additions.findIndex(i=>i.id===e);t>-1&&(this.cart.additions[t].quantity>1?this.cart.additions[t].quantity-=1:this.cart.additions.splice(t,1),this.calculateCartTotal())}}}),l=r("call-center-site",{persist:{key:"call-center-site",storage:localStorage,paths:["location"]},state:()=>({location:{site:{},neigborhood:{}},visibles:{currentSite:!1},current_delivery:0,webSocket:null,status:"closed"}),getters:{fucion:e=>0},actions:{async func(){return func},setLocation(e){this.connectWebSocket(e.site.site_id),this.location=e},setVisible(e,t){this.visibles[e]=t},async connectWebSocket(e){this.webSocket!==null&&this.webSocket.close,this.webSocket=new WebSocket(`wss://${URI_SOCKET}/ws/${e}`),this.webSocket.onopen=()=>this.webSocket.onmessage=t=>{console.log("new mesagge")},this.webSocket.onclose=async()=>{console.log("WebSocket disconnected");const t=this.location.site.site_id;t&&this.connectWebSocket(t),this.webSocket=null},this.webSocket.onerror=t=>console.error("WebSocket error:",t)},async setNeighborhoodPrice(){try{const e=await a.get(`${c}/neighborhood/${this.location.neigborhood.neighborhood_id}/`);return e.status===200?(this.location.neigborhood=e.data,e.data):(console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return console.error("An error occurred while fetching the ingredients:",e),null}},async setNeighborhoodPriceCero(){this.location.neigborhood.delivery_price=0}}});export{d as a,l as u};
>>>>>>>> f305ac0ac9b0c258999af462a4fb3e6cc20cc11f:dist/assets/site-5149b83f.js
