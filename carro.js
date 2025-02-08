// const carro = [
//     {
//       "signature": {
//           id:1,
//           lista_productocombo:[
//               {
//                   id:1,
//                   cantidad:3
//               }
//           ],
//           modificadorseleccionList:[
//               {
//                   id:2,
//                   cantidad:3
//               }]
//           },

//       "pedido_precio": 124900,
//       "pedido_escombo": 1,
//       "pedido_cantidad": 1,
//       "pedido_base_price": 59200,
//       "pedido_productoid": 93,
//       "lista_productocombo": [
//         {
//           "pedido_nombre": "Coca Cola Sabor Original 400 Ml",
//           "pedido_precio": 5900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 13
//         },
//         {
//           "pedido_nombre": "Nachimonster 2 Personas",
//           "pedido_precio": 53900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 33
//         },
//         {
//           "pedido_nombre": "Sprite 400 Ml",
//           "pedido_precio": 5900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 24
//         }
//       ],
//       "pedido_nombre_producto": "COMBO NACHIMONSTER 2P + 2 BEBIDAS",
//       "modificadorseleccionList": [],
//       "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/ad69e9d0-c7af-4614-9e48-87bb6fb7f8ad.jpg"
//     },
//     {
//       "signature":4,
//       "pedido_precio": 135600,
//       "pedido_escombo": "1",
//       "pedido_cantidad": 1,
//       "pedido_base_price": 63900,
//       "pedido_productoid": "158",
//       "lista_productocombo": [
//         {
//           "pedido_nombre": "Coca Cola Sabor Original 400 Ml",
//           "pedido_precio": 5900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 13
//         },
//         {
//           "pedido_nombre": "Coca Cola Zero 400 Ml",
//           "pedido_precio": 5900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 14
//         },
//         {
//           "pedido_nombre": "La De Siempre 2 Personas",
//           "pedido_precio": 59900,
//           "pedido_cantidad": 1,
//           "pedido_productoid": 36
//         }
//       ],
//       "pedido_nombre_producto": "COMBO LA DE SIEMPRE 2P + 2 BEBIDAS",
//       "modificadorseleccionList": [],
//       "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/1f974112-bcb7-4caa-8b24-b016acb881f7.jpg"
//     },
//     {
//       "signature": 59,
//       "pedido_precio": 279200,
//       "pedido_escombo": "0",
//       "pedido_cantidad": 1,
//       "pedido_base_price": 52500,
//       "pedido_productoid": "31",
//       "lista_productocombo": [],
//       "pedido_nombre_producto": "COSTIMONSTER 2 PERSONAS",
//       "modificadorseleccionList": [
//         {
//           "pedido_precio": 17900,
//           "modificador_id": "16",
//           "pedido_productoid": "31",
//           "modificador_nombre": "ADICION COSTILLA AHUMADA",
//           "modificadorseleccion_id": "36",
//           "modificadorseleccion_cantidad": 1
//         },
//         {
//           "pedido_precio": 14000,
//           "modificador_id": "16",
//           "pedido_productoid": "31",
//           "modificador_nombre": "ADICION CHORIZO",
//           "modificadorseleccion_id": "37",
//           "modificadorseleccion_cantidad": 4
//         },
//         {
//           "pedido_precio": 19500,
//           "modificador_id": 16,
//           "pedido_productoid": 31,
//           "modificador_nombre": "ADICION CHICHARRON",
//           "modificadorseleccion_id": "38",
//           "modificadorseleccion_cantidad": 4
//         },
//         {
//           "pedido_precio": 16500,
//           "modificador_id": "16",
//           "pedido_productoid": "31",
//           "modificador_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
//           "modificadorseleccion_id": 39,
//           "modificadorseleccion_cantidad": 4
//         },
//         {
//           "pedido_precio": 8800,
//           "modificador_id": "16",
//           "pedido_productoid": "31",
//           "modificador_nombre": "ADICION BACON PREMIUM",
//           "modificadorseleccion_id": 4,
//           "modificadorseleccion_cantidad": 1
//         },
//         {
//           "pedido_precio": 0,
//           "modificador_id": "22",
//           "pedido_productoid": "31",
//           "modificador_nombre": "SALSA VERDE 2P",
//           "modificadorseleccion_id": "56",
//           "modificadorseleccion_cantidad": 1
//         },
//         {
//           "pedido_precio": 0,
//           "modificador_id": "22",
//           "pedido_productoid": "31",
//           "modificador_nombre": "SALSA AJO 2P",
//           "modificadorseleccion_id": "57",
//           "modificadorseleccion_cantidad": 1
//         }
//       ],
//       "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/cdc9be25-5241-4afd-aaeb-a1a0cc8acfca.png"
//     }
//   ]




//   const calculateTotalProduct = (product) => {
//         const base = product.pedido_base_price
//         const adiciones = 0
//         if (product.modificadorseleccionList?.length > 0){
//             4
//         }
//         return product.pedido_base_price + product.modificadorseleccionList.reduce(2)
//   }

// console.log(calculateTotalProduct(carro[0]))