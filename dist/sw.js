if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>r(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjsHelpers-23102255.js",revision:null},{url:"assets/adicionales-0ecfab69.js",revision:null},{url:"assets/adicionales-85746516.css",revision:null},{url:"assets/aditionalService-03d5f559.js",revision:null},{url:"assets/archivCapacitaciones-7a981241.js",revision:null},{url:"assets/asistencia-1832884f.js",revision:null},{url:"assets/asistencia-d8f81487.css",revision:null},{url:"assets/audit-e0134236.js",revision:null},{url:"assets/auditService-25f5ec57.js",revision:null},{url:"assets/auto.esm-220b764d.js",revision:null},{url:"assets/autorizar-permisos-42d4b56d.css",revision:null},{url:"assets/autorizar-permisos-ede73be0.js",revision:null},{url:"assets/cancellationOrderRequest-1456bb7e.js",revision:null},{url:"assets/cancellationOrderRequest-1ea0d9b6.css",revision:null},{url:"assets/cancellationOrderRequestSesion-38cf7119.css",revision:null},{url:"assets/cancellationOrderRequestSesion-e35ff483.js",revision:null},{url:"assets/capacitacion-be7760f0.js",revision:null},{url:"assets/capacitaciones-7ec77358.js",revision:null},{url:"assets/capacitaciones-f6b34eb4.css",revision:null},{url:"assets/capacitaciones-invitaciones-e70efff5.css",revision:null},{url:"assets/capacitaciones-invitaciones-f747e2f8.js",revision:null},{url:"assets/checklist-a65f41e9.js",revision:null},{url:"assets/clima-fff43925.js",revision:null},{url:"assets/conectividad-2a6c634e.js",revision:null},{url:"assets/conectividad-4c4c5879.css",revision:null},{url:"assets/configCapacitacion-0881d668.js",revision:null},{url:"assets/configCapacitacion-4fa0665f.css",revision:null},{url:"assets/Crud-91c0cf63.css",revision:null},{url:"assets/Crud-b5d3a1d3.js",revision:null},{url:"assets/cumples-d29df08b.js",revision:null},{url:"assets/cumples-f412f568.css",revision:null},{url:"assets/currentConcursos-15074492.js",revision:null},{url:"assets/currentConcursos-50500c66.css",revision:null},{url:"assets/currentDevTasks-16399584.js",revision:null},{url:"assets/dailyInventory-1a28c5d0.js",revision:null},{url:"assets/dailyInventory-43084502.css",revision:null},{url:"assets/dailyInventoryMyReports-96af84d8.css",revision:null},{url:"assets/dailyInventoryMyReports-d4cf63ca.js",revision:null},{url:"assets/dailyInventoryReports-218d33f6.js",revision:null},{url:"assets/dailyInventoryReports-6dd5e669.css",revision:null},{url:"assets/dailyInventoryService-6507eba0.js",revision:null},{url:"assets/dailyInventorySettings-42c0f7f9.css",revision:null},{url:"assets/dailyInventorySettings-65a99699.js",revision:null},{url:"assets/dailyInventorySettingsSesion-d55254d7.js",revision:null},{url:"assets/dailyInventoryView-0358c535.js",revision:null},{url:"assets/dailyMan-302b173d.js",revision:null},{url:"assets/desempeno-f654dba8.js",revision:null},{url:"assets/DevTask-1957c1af.js",revision:null},{url:"assets/DevTask-79297e8a.css",revision:null},{url:"assets/dialogoEditUser-ab49eed5.css",revision:null},{url:"assets/dialogoEditUser-b829c2f7.js",revision:null},{url:"assets/DialogoPedido-5d97fbed.js",revision:null},{url:"assets/DialogoPedido-d3585c40.css",revision:null},{url:"assets/directorio-bd47fee4.js",revision:null},{url:"assets/Directory-6370932f.js",revision:null},{url:"assets/Directory-9e31690c.css",revision:null},{url:"assets/domicilio-61435839.js",revision:null},{url:"assets/domicilio-a74c7a50.css",revision:null},{url:"assets/domicilios-b4bd5cb0.css",revision:null},{url:"assets/domicilios-bf94291b.js",revision:null},{url:"assets/Dotacion-8e924fee.js",revision:null},{url:"assets/Dotacion-92513fd4.css",revision:null},{url:"assets/dropDownAux-5f39ea23.js",revision:null},{url:"assets/equipment-449f041f.js",revision:null},{url:"assets/error-f66ecee5.js",revision:null},{url:"assets/es-e43b915c.js",revision:null},{url:"assets/FileSaver.min-af960175.js",revision:null},{url:"assets/format-36e25dfb.js",revision:null},{url:"assets/formatoPesos-2a38d2e7.js",revision:null},{url:"assets/generarCertificado-32123d43.js",revision:null},{url:"assets/generarCertificado-7018f902.css",revision:null},{url:"assets/gestion-e3bdca1e.js",revision:null},{url:"assets/gestionCargos-e4a8d2db.js",revision:null},{url:"assets/guias-872749cb.css",revision:null},{url:"assets/guias-a4decf30.js",revision:null},{url:"assets/historyDevTasks-40d6b29f.js",revision:null},{url:"assets/home-5a9ad9e0.css",revision:null},{url:"assets/home-cb461cd3.js",revision:null},{url:"assets/html2canvas.esm-6e01b359.js",revision:null},{url:"assets/index-558f534d.js",revision:null},{url:"assets/index-86327897.js",revision:null},{url:"assets/index-a09d66c3.css",revision:null},{url:"assets/index.es-af0b3564.js",revision:null},{url:"assets/infoSalchi-27a47a62.js",revision:null},{url:"assets/ingredients-9cbbacc3.js",revision:null},{url:"assets/ingredients-ab549362.css",revision:null},{url:"assets/jspdf.es.min-02724fbb.js",revision:null},{url:"assets/listAudit-5994fd17.css",revision:null},{url:"assets/listAudit-dff45b1b.js",revision:null},{url:"assets/Login-3dad1472.css",revision:null},{url:"assets/Login-4b723bc3.js",revision:null},{url:"assets/maintenance-1813d8c6.js",revision:null},{url:"assets/maintenance-50e2efb6.js",revision:null},{url:"assets/maintenance-78e79260.js",revision:null},{url:"assets/maintenanceList-ad24011d.css",revision:null},{url:"assets/maintenanceList-cd93a7ca.js",revision:null},{url:"assets/ManageSite-7308d5f6.js",revision:null},{url:"assets/ManageSites-869a49cd.css",revision:null},{url:"assets/ManageSites-92c0f96b.js",revision:null},{url:"assets/MenuTienda-4b83b13d.css",revision:null},{url:"assets/MenuTienda-d241ab61.js",revision:null},{url:"assets/miCarnet-51add834.js",revision:null},{url:"assets/miPermisoStatus-46010aac.js",revision:null},{url:"assets/miPermisoStatus-53f3af7e.css",revision:null},{url:"assets/miPermisoType-c8dfc3c5.js",revision:null},{url:"assets/miPermisoType-faa6cf1d.css",revision:null},{url:"assets/misPermisos-3944b404.css",revision:null},{url:"assets/misPermisos-94557079.js",revision:null},{url:"assets/monthlyInventory-25517216.js",revision:null},{url:"assets/monthlyInventory-2aec07a8.css",revision:null},{url:"assets/monthlyInventoryMyReports-37422a7c.css",revision:null},{url:"assets/monthlyInventoryMyReports-6502485d.js",revision:null},{url:"assets/monthlyInventoryReports-1b8c8e00.css",revision:null},{url:"assets/monthlyInventoryReports-b50fee14.js",revision:null},{url:"assets/monthlyInventoryService-870d91cb.js",revision:null},{url:"assets/monthlyInventorySettings-2b41259e.css",revision:null},{url:"assets/monthlyInventorySettings-7190bf8f.js",revision:null},{url:"assets/monthlyInventorySettingsSesion-c04bb295.js",revision:null},{url:"assets/monthlyInventoryView-4bab2037.js",revision:null},{url:"assets/nevera triple-afbe20c1.js",revision:null},{url:"assets/neveraDoble-1d51c87a.js",revision:null},{url:"assets/neveraTriple-306210a7.js",revision:null},{url:"assets/newAudit-dcc26643.js",revision:null},{url:"assets/ordenes-93c45155.js",revision:null},{url:"assets/ordenes-96c15c23.css",revision:null},{url:"assets/order-ce8c4e0c.js",revision:null},{url:"assets/orderDialog-d5a8028d.css",revision:null},{url:"assets/OrderPath-81896d59.css",revision:null},{url:"assets/OrderPath-d43fe31a.js",revision:null},{url:"assets/OrderPathAlistar-4f4ed6fc.js",revision:null},{url:"assets/OrderPathAlistar-935af36d.css",revision:null},{url:"assets/OrderPathComplete-ad828ace.js",revision:null},{url:"assets/OrderPathComplete-fac8c2b8.css",revision:null},{url:"assets/orderPathRecibidaEnSede-1b2fe578.css",revision:null},{url:"assets/orderPathRecibidaEnSede-1e9b3f0c.js",revision:null},{url:"assets/OrderPathToAuthorize-51c9bb86.js",revision:null},{url:"assets/OrderPathToAuthorize-b5d53e08.css",revision:null},{url:"assets/OrderPathTransport-051e6af4.css",revision:null},{url:"assets/OrderPathTransport-4fda9233.js",revision:null},{url:"assets/orderService-493e44b5.js",revision:null},{url:"assets/orderSumary-06285902.js",revision:null},{url:"assets/orderSumary-b64405c0.css",revision:null},{url:"assets/organigrama-aa17cce1.css",revision:null},{url:"assets/organigrama-e99e5e81.js",revision:null},{url:"assets/pathService-cf5d1470.js",revision:null},{url:"assets/pedidos-ad8af0cb.css",revision:null},{url:"assets/pedidos-e0763377.js",revision:null},{url:"assets/permiso-18a866d1.js",revision:null},{url:"assets/permiso-c1fac94e.css",revision:null},{url:"assets/permiso-licencia-199faa2e.css",revision:null},{url:"assets/permiso-licencia-2795ef17.js",revision:null},{url:"assets/permiso-vacaciones-0b123b90.js",revision:null},{url:"assets/permiso-vacaciones-87a286e2.css",revision:null},{url:"assets/permisosEmployer-1d98bfc4.js",revision:null},{url:"assets/permisosEmployer-b707a49b.css",revision:null},{url:"assets/ProductService-2394aae9.js",revision:null},{url:"assets/productStore-1e8b70a8.js",revision:null},{url:"assets/purchaseOrder-460ab670.css",revision:null},{url:"assets/purchaseOrder-9dc4ab5a.js",revision:null},{url:"assets/purchaseOrderMyOrders-9f126afd.js",revision:null},{url:"assets/purchaseOrderMyOrders-efebfa35.css",revision:null},{url:"assets/purchaseOrderNew-95a48246.js",revision:null},{url:"assets/purchaseOrderNew-f9cd5223.css",revision:null},{url:"assets/purchaseOrderReports-154fe557.js",revision:null},{url:"assets/purchaseOrderReports-82ab0b0a.css",revision:null},{url:"assets/purchaseOrderService-16d372a9.js",revision:null},{url:"assets/purchaseOrderSettings-0f6cbaca.js",revision:null},{url:"assets/purchaseOrderSettings-7c7ccb30.css",revision:null},{url:"assets/purchaseOrderSettingsSesion-a19067b0.js",revision:null},{url:"assets/purchaseOrderSettingsSesion-c35fa8dc.css",revision:null},{url:"assets/purchaseOrderView-27cf3ca3.js",revision:null},{url:"assets/purify.es-cf254a40.js",revision:null},{url:"assets/recetarioCucharas-95b49eb6.js",revision:null},{url:"assets/recipeDataSheet-5e5b9f33.js",revision:null},{url:"assets/recipes-a47920df.js",revision:null},{url:"assets/recipesService-8a8a657f.js",revision:null},{url:"assets/RepClientes-db7a7f71.js",revision:null},{url:"assets/RepNoOrdenes-b4d88abd.js",revision:null},{url:"assets/reporteVentas-4210b0e7.css",revision:null},{url:"assets/reporteVentas-b684d71f.js",revision:null},{url:"assets/reportInventory-28ece955.js",revision:null},{url:"assets/reportInventory-8144fb5c.css",revision:null},{url:"assets/reportMonthlyInventory-4193e11f.js",revision:null},{url:"assets/reportMonthlyInventory-a2249634.css",revision:null},{url:"assets/RepTicket-1b9fa6e5.js",revision:null},{url:"assets/RepValorVentas-82341d5f.js",revision:null},{url:"assets/retiro-a06e73db.js",revision:null},{url:"assets/salchiweb-7c6aff5d.js",revision:null},{url:"assets/samovar-5c1a1111.js",revision:null},{url:"assets/ScheduleDevTasks-eeb374da.js",revision:null},{url:"assets/sendFileService-ae4a1b92.js",revision:null},{url:"assets/sesion-2e34b3d4.css",revision:null},{url:"assets/sesion-b64cc67c.js",revision:null},{url:"assets/shift_work_schedule-22ef4c8d.js",revision:null},{url:"assets/shift_work_schedule-3b3e24d5.css",revision:null},{url:"assets/ShowFiles-2513d6fe.js",revision:null},{url:"assets/ShowFiles-ef13b262.css",revision:null},{url:"assets/ShowRecibos-11eb98bd.css",revision:null},{url:"assets/ShowRecibos-6d19016d.js",revision:null},{url:"assets/site-029090fe.js",revision:null},{url:"assets/siteService-db45ce92.js",revision:null},{url:"assets/TransferSession-7c054241.css",revision:null},{url:"assets/TransferSession-82ede70a.js",revision:null},{url:"assets/user_shift_work_schedule-9ec1f22c.js",revision:null},{url:"assets/user_shift_work_schedule-fc1b65e3.css",revision:null},{url:"assets/userService-de26e1fa.js",revision:null},{url:"assets/userServices-6829aec4.js",revision:null},{url:"assets/vue3-pdf-embed-5d6c9787.js",revision:null},{url:"assets/work_schedule-146bd4ed.js",revision:null},{url:"assets/work_schedule-e8ad0f75.css",revision:null},{url:"assets/workbox-window.prod.es5-c46a1faa.js",revision:null},{url:"assets/xlsx-4f9172c7.js",revision:null},{url:"index.html",revision:"4600108cefa12234ec11b85b17d87a38"},{url:"themes/arya-blue/theme.css",revision:"aea0c7407692f674757af3b17aba4f13"},{url:"themes/arya-green/theme.css",revision:"2601de5aa89d78f3a2f56cbad63da49d"},{url:"themes/arya-orange/theme.css",revision:"a5a99200171a36e7544556db680d529c"},{url:"themes/arya-purple/theme.css",revision:"0125ea4f5995213e15705c7f67271107"},{url:"themes/bootstrap4-dark-blue/theme.css",revision:"2068392d5ec5bff211d721773728dfab"},{url:"themes/bootstrap4-dark-purple/theme.css",revision:"1bb12f278457616f1fe7f2e222904546"},{url:"themes/bootstrap4-light-blue/theme.css",revision:"d18f38eb0660c12e06d66f1ed7a2ff78"},{url:"themes/bootstrap4-light-purple/theme.css",revision:"5d2ec42e93056d659e9048c0c4d467f4"},{url:"themes/fluent-light/theme.css",revision:"493b153f886e80b7bc4fd9917198daf9"},{url:"themes/lara-dark-blue/theme.css",revision:"06d5569f23920036419a34e99fad0273"},{url:"themes/lara-dark-indigo/theme.css",revision:"b2375e9da5cd4d0185f3ec097497a765"},{url:"themes/lara-dark-purple/theme.css",revision:"a3b280ee1f184c3ed6da39418eba274d"},{url:"themes/lara-dark-teal/theme.css",revision:"211e6bd5dea49ea26260d2181cf84173"},{url:"themes/lara-light-blue/theme.css",revision:"267a45e7f8b2d8187644c73e78b7a16b"},{url:"themes/lara-light-indigo/theme.css",revision:"cc6096d00445141e5d087a40490f161f"},{url:"themes/lara-light-purple/theme.css",revision:"8cb501bfd9869d9a928e7deb3976776d"},{url:"themes/lara-light-teal/theme.css",revision:"30cd45902fdd496ab35c261d83928052"},{url:"themes/luna-amber/theme.css",revision:"5f292e7664a8385f33f9bb52e22fbdfe"},{url:"themes/luna-blue/theme.css",revision:"8794a2642918c7d037017a0ac5398417"},{url:"themes/luna-green/theme.css",revision:"f4c217ec1abd22b3d27037c144fb292e"},{url:"themes/luna-pink/theme.css",revision:"813c246e3765fc7ebfcfae9605200752"},{url:"themes/md-dark-deeppurple/theme.css",revision:"b5aa0e78fbc2d8eb73dd7830c42b37f4"},{url:"themes/md-dark-indigo/theme.css",revision:"4e681e91a724b45b08f356cbb7cd8ff8"},{url:"themes/md-light-deeppurple/theme.css",revision:"fe04e970b067edb8bb25bf4c0f696d1d"},{url:"themes/md-light-indigo/theme.css",revision:"4bef35c294802ed16fd0c4ffbf46c4b8"},{url:"themes/mdc-dark-deeppurple/theme.css",revision:"e31238cb3642f510e907f3fecf2b493c"},{url:"themes/mdc-dark-indigo/theme.css",revision:"b8dab2627a99d32f3ca2abda33795ddf"},{url:"themes/mdc-light-deeppurple/theme.css",revision:"e400006e4faf1c3057563af5d524aee9"},{url:"themes/mdc-light-indigo/theme.css",revision:"587edc83551b07106e7ed5e01bdeafb7"},{url:"themes/nova-accent/theme.css",revision:"904e04261941b072dfd69a57a683c3d1"},{url:"themes/nova-alt/theme.css",revision:"8d54e486e0d57af1c89b673525df95ee"},{url:"themes/nova-vue/theme.css",revision:"e047321f33dc4275fd3a86e27af92b71"},{url:"themes/nova/theme.css",revision:"f3b9af8c200c883550f80aae068a24d8"},{url:"themes/rhea/theme.css",revision:"f84af634000cce6904f9806155307560"},{url:"themes/saga-blue/theme.css",revision:"80df1cfb15a2eb6911e3aaf0e2744cb0"},{url:"themes/saga-green/theme.css",revision:"9c5399f9c2004f34e90470868b7b0192"},{url:"themes/saga-orange/theme.css",revision:"669fa9c0a1b2f9c5ca3d4dd51888105d"},{url:"themes/saga-purple/theme.css",revision:"78873431decfc4750bdb16f5400e7667"},{url:"themes/tailwind-light/theme.css",revision:"7de295595130ba207cc1c477a1d7ef28"},{url:"themes/vela-blue/theme.css",revision:"094f9137b7c9e6d8348784474689cfc9"},{url:"themes/vela-green/theme.css",revision:"69e22993c30ff7f2745d40bf22543219"},{url:"themes/vela-orange/theme.css",revision:"8bf0ec3859a9d74663de7ba405765011"},{url:"themes/vela-purple/theme.css",revision:"9685ca34de768546c1ea376f1cb72cc4"},{url:"favicon.ico",revision:"88b5943a0df502a7c73805871f5513c2"},{url:"manifest.webmanifest",revision:"1d32b5f991daf6e0686f7d0a27ced744"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
