if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>r(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjsHelpers-de833af9.js",revision:null},{url:"assets/adicionales-417c807b.js",revision:null},{url:"assets/adicionales-c5f2e38c.css",revision:null},{url:"assets/aditionalService-11679d52.js",revision:null},{url:"assets/aditionalService-c41cc8ef.js",revision:null},{url:"assets/archivCapacitaciones-051f0a88.js",revision:null},{url:"assets/asistencia-546e69dc.js",revision:null},{url:"assets/asistencia-d8f81487.css",revision:null},{url:"assets/audit-8388068f.js",revision:null},{url:"assets/auditService-d1389ebb.js",revision:null},{url:"assets/auto.esm-220b764d.js",revision:null},{url:"assets/autorizar-permisos-42d4b56d.css",revision:null},{url:"assets/autorizar-permisos-5c6ba269.js",revision:null},{url:"assets/cancellationOrderRequest-1ea0d9b6.css",revision:null},{url:"assets/cancellationOrderRequest-edfdb034.js",revision:null},{url:"assets/cancellationOrderRequestSesion-493dd99b.js",revision:null},{url:"assets/cancellationOrderRequestSesion-bb537c6b.css",revision:null},{url:"assets/capacitacion-7f64e616.js",revision:null},{url:"assets/capacitaciones-5bc8d5c1.js",revision:null},{url:"assets/capacitaciones-f6b34eb4.css",revision:null},{url:"assets/capacitaciones-invitaciones-99ea35d1.js",revision:null},{url:"assets/capacitaciones-invitaciones-e70efff5.css",revision:null},{url:"assets/cart-036b91d4.js",revision:null},{url:"assets/cart-5d48d238.css",revision:null},{url:"assets/cdiInventory-1e082d41.js",revision:null},{url:"assets/cdiInventory-ae640941.css",revision:null},{url:"assets/cdiInventoryMyReports-7d72f7ad.js",revision:null},{url:"assets/cdiInventoryMyReports-b90c3299.css",revision:null},{url:"assets/cdiInventoryReports-44628f4b.js",revision:null},{url:"assets/cdiInventoryReports-cfed5253.css",revision:null},{url:"assets/cdiInventoryService-e50f98ec.js",revision:null},{url:"assets/cdiInventorySettings-afd2dc65.css",revision:null},{url:"assets/cdiInventorySettings-d3acfcab.js",revision:null},{url:"assets/cdiInventorySettingsSesion-af63d541.js",revision:null},{url:"assets/cdiInventoryView-85b6dc96.js",revision:null},{url:"assets/checklist-01267d41.js",revision:null},{url:"assets/clima-c72d73b4.js",revision:null},{url:"assets/CompletedConcursos-9588ad58.css",revision:null},{url:"assets/CompletedConcursos-9e9bdf15.js",revision:null},{url:"assets/conectividad-4c4c5879.css",revision:null},{url:"assets/conectividad-7ec30544.js",revision:null},{url:"assets/configCapacitacion-38bcd4a8.js",revision:null},{url:"assets/configCapacitacion-4fa0665f.css",revision:null},{url:"assets/contestService-230173c3.js",revision:null},{url:"assets/Crud-68e2ddab.js",revision:null},{url:"assets/Crud-91c0cf63.css",revision:null},{url:"assets/cumples-876743ba.js",revision:null},{url:"assets/cumples-f412f568.css",revision:null},{url:"assets/currentConcursos-19fb0f25.css",revision:null},{url:"assets/currentConcursos-b24445b5.js",revision:null},{url:"assets/currentDevTasks-e49e255e.js",revision:null},{url:"assets/dailyInventory-43084502.css",revision:null},{url:"assets/dailyInventory-8a71bbfe.js",revision:null},{url:"assets/dailyInventoryMyReports-b49f8494.css",revision:null},{url:"assets/dailyInventoryMyReports-eee69357.js",revision:null},{url:"assets/dailyInventoryReports-3c09dacc.js",revision:null},{url:"assets/dailyInventoryReports-d60c541c.css",revision:null},{url:"assets/dailyInventoryService-82f07ca4.js",revision:null},{url:"assets/dailyInventorySettings-42c0f7f9.css",revision:null},{url:"assets/dailyInventorySettings-ae68cde8.js",revision:null},{url:"assets/dailyInventorySettingsSesion-c62c01d7.js",revision:null},{url:"assets/dailyInventoryView-b14a32ce.js",revision:null},{url:"assets/dailyMan-302b173d.js",revision:null},{url:"assets/desempeno-bbdedc9b.js",revision:null},{url:"assets/DevTask-79297e8a.css",revision:null},{url:"assets/DevTask-c6188e15.js",revision:null},{url:"assets/dialogoEditUser-77ba6082.js",revision:null},{url:"assets/dialogoEditUser-ab49eed5.css",revision:null},{url:"assets/directorio-0474ab2e.js",revision:null},{url:"assets/Directory-9e31690c.css",revision:null},{url:"assets/Directory-bf915a06.js",revision:null},{url:"assets/domicilio-4f8ba764.js",revision:null},{url:"assets/domicilio-ca4c79a0.css",revision:null},{url:"assets/domicilios-5887f626.css",revision:null},{url:"assets/domicilios-eba6f59f.js",revision:null},{url:"assets/Dotacion-5f23f6f3.js",revision:null},{url:"assets/Dotacion-92513fd4.css",revision:null},{url:"assets/dropDownAux-7677d804.js",revision:null},{url:"assets/equipment-32de18ce.js",revision:null},{url:"assets/error-608301a4.js",revision:null},{url:"assets/es-e43b915c.js",revision:null},{url:"assets/FileSaver.min-25f185e4.js",revision:null},{url:"assets/fire-bbb69f2b.js",revision:null},{url:"assets/format-36e25dfb.js",revision:null},{url:"assets/formatDate-262296cf.js",revision:null},{url:"assets/formatoPesos-2a38d2e7.js",revision:null},{url:"assets/formatoPesos-87dbb5ee.js",revision:null},{url:"assets/FutureConcursos-20121592.css",revision:null},{url:"assets/FutureConcursos-bbe96046.js",revision:null},{url:"assets/generarCertificado-606509b1.js",revision:null},{url:"assets/generarCertificado-7018f902.css",revision:null},{url:"assets/gestion-98d92d39.js",revision:null},{url:"assets/gestionCargos-fee4a0f5.js",revision:null},{url:"assets/gracias-9abd77f9.css",revision:null},{url:"assets/gracias-babf9dde.js",revision:null},{url:"assets/guias-872749cb.css",revision:null},{url:"assets/guias-c9eeaa74.js",revision:null},{url:"assets/historyDevTasks-d902c97b.js",revision:null},{url:"assets/home-20f6b33d.js",revision:null},{url:"assets/home-5a9ad9e0.css",revision:null},{url:"assets/html2canvas.esm-6e01b359.js",revision:null},{url:"assets/index-3ec6abaa.js",revision:null},{url:"assets/index-a09d66c3.css",revision:null},{url:"assets/index-f56db1a7.js",revision:null},{url:"assets/index.es-a359d430.js",revision:null},{url:"assets/infoSalchi-acb1d611.js",revision:null},{url:"assets/ingredients-8d910c9f.js",revision:null},{url:"assets/ingredients-ab549362.css",revision:null},{url:"assets/jspdf.es.min-3a31c13b.js",revision:null},{url:"assets/listAudit-7deae0ca.css",revision:null},{url:"assets/listAudit-c7a91225.js",revision:null},{url:"assets/Login-63de274d.css",revision:null},{url:"assets/Login-ea30474f.js",revision:null},{url:"assets/maintenance-1810a67c.js",revision:null},{url:"assets/maintenance-440d0cea.js",revision:null},{url:"assets/maintenance-de733a5e.js",revision:null},{url:"assets/maintenanceList-ad24011d.css",revision:null},{url:"assets/maintenanceList-d75bc9ae.js",revision:null},{url:"assets/manageContest-80654afc.css",revision:null},{url:"assets/manageContest-98c63aeb.js",revision:null},{url:"assets/ManageSite-dd36f570.js",revision:null},{url:"assets/ManageSites-5ba13106.js",revision:null},{url:"assets/ManageSites-869a49cd.css",revision:null},{url:"assets/MenuTienda-02bc6277.css",revision:null},{url:"assets/MenuTienda-55c31d66.js",revision:null},{url:"assets/MenuView-3c5f2d90.css",revision:null},{url:"assets/MenuView-711e39f7.js",revision:null},{url:"assets/miCarnet-4d42f379.js",revision:null},{url:"assets/miPermisoStatus-53f3af7e.css",revision:null},{url:"assets/miPermisoStatus-f0d7094b.js",revision:null},{url:"assets/miPermisoType-faa6cf1d.css",revision:null},{url:"assets/miPermisoType-fd55f99c.js",revision:null},{url:"assets/misPermisos-3944b404.css",revision:null},{url:"assets/misPermisos-9928a6e7.js",revision:null},{url:"assets/monthlyInventory-2aec07a8.css",revision:null},{url:"assets/monthlyInventory-b6934aee.js",revision:null},{url:"assets/monthlyInventoryMyReports-37422a7c.css",revision:null},{url:"assets/monthlyInventoryMyReports-f952fa71.js",revision:null},{url:"assets/monthlyInventoryReports-1b8c8e00.css",revision:null},{url:"assets/monthlyInventoryReports-fa356d5a.js",revision:null},{url:"assets/monthlyInventoryService-c4f4cb61.js",revision:null},{url:"assets/monthlyInventorySettings-2b41259e.css",revision:null},{url:"assets/monthlyInventorySettings-4a35a2d4.js",revision:null},{url:"assets/monthlyInventorySettingsSesion-0df83e44.js",revision:null},{url:"assets/monthlyInventoryView-e00d01cf.js",revision:null},{url:"assets/nevera triple-afbe20c1.js",revision:null},{url:"assets/neveraDoble-7d879354.js",revision:null},{url:"assets/neveraTriple-dd8243b5.js",revision:null},{url:"assets/newAudit-eeb65e01.js",revision:null},{url:"assets/ordenes-10220c27.js",revision:null},{url:"assets/ordenes-96c15c23.css",revision:null},{url:"assets/orderDialog-d5a8028d.css",revision:null},{url:"assets/OrderItem-3b19b861.css",revision:null},{url:"assets/OrderItem.vue_vue_type_style_index_0_scoped_b09f2bb4_lang-8dfe583a.js",revision:null},{url:"assets/OrderPath-3e4537a9.css",revision:null},{url:"assets/OrderPath-d2660082.js",revision:null},{url:"assets/OrderPathAlistar-92c4e917.js",revision:null},{url:"assets/OrderPathAlistar-bea274c8.css",revision:null},{url:"assets/OrderPathComplete-c5a289b4.css",revision:null},{url:"assets/OrderPathComplete-efe27fe7.js",revision:null},{url:"assets/orderPathRecibidaEnSede-3fd3b13c.js",revision:null},{url:"assets/orderPathRecibidaEnSede-9df33851.css",revision:null},{url:"assets/OrderPathToAuthorize-1eac20b1.js",revision:null},{url:"assets/OrderPathToAuthorize-3a4299e7.css",revision:null},{url:"assets/OrderPathTransport-1999765c.css",revision:null},{url:"assets/OrderPathTransport-757ebae4.js",revision:null},{url:"assets/orderSumary-7ca071a9.js",revision:null},{url:"assets/orderSumary-af8d8d20.css",revision:null},{url:"assets/organigrama-19f2ddf5.js",revision:null},{url:"assets/organigrama-aa17cce1.css",revision:null},{url:"assets/pathService-86347f94.js",revision:null},{url:"assets/pay-28632af5.css",revision:null},{url:"assets/pay-808ebf93.js",revision:null},{url:"assets/pedidos-ad8af0cb.css",revision:null},{url:"assets/pedidos-b494abcf.js",revision:null},{url:"assets/permiso-0cc048a6.js",revision:null},{url:"assets/permiso-c1fac94e.css",revision:null},{url:"assets/permiso-licencia-0fa193d5.js",revision:null},{url:"assets/permiso-licencia-199faa2e.css",revision:null},{url:"assets/permiso-vacaciones-87a286e2.css",revision:null},{url:"assets/permiso-vacaciones-8f811929.js",revision:null},{url:"assets/permisosEmployer-aab9935e.js",revision:null},{url:"assets/permisosEmployer-b707a49b.css",revision:null},{url:"assets/ProductService-ab1ebccd.js",revision:null},{url:"assets/productStore-28d7008f.js",revision:null},{url:"assets/purchaseOrder-460ab670.css",revision:null},{url:"assets/purchaseOrder-94c5a5f8.js",revision:null},{url:"assets/purchaseOrderMyOrders-61e640e6.js",revision:null},{url:"assets/purchaseOrderMyOrders-9b929116.css",revision:null},{url:"assets/purchaseOrderNew-12468730.css",revision:null},{url:"assets/purchaseOrderNew-f78ad44c.js",revision:null},{url:"assets/purchaseOrderReports-53c1b9f5.css",revision:null},{url:"assets/purchaseOrderReports-752ed322.js",revision:null},{url:"assets/purchaseOrderService-01c0afce.js",revision:null},{url:"assets/purchaseOrderSettings-39173541.js",revision:null},{url:"assets/purchaseOrderSettings-7c7ccb30.css",revision:null},{url:"assets/purchaseOrderSettingsSesion-5a708dd5.js",revision:null},{url:"assets/purchaseOrderSettingsSesion-c35fa8dc.css",revision:null},{url:"assets/purchaseOrderView-bddc3d62.js",revision:null},{url:"assets/purify.es-cf254a40.js",revision:null},{url:"assets/recetarioCucharas-c77c3686.js",revision:null},{url:"assets/recipeDataSheet-c5d6627b.js",revision:null},{url:"assets/recipes-a6ae88c2.js",revision:null},{url:"assets/recipesService-71b0032b.js",revision:null},{url:"assets/RepClientes-efd47792.js",revision:null},{url:"assets/RepNoOrdenes-fe1cd8bc.js",revision:null},{url:"assets/reporteVentas-8f86b496.js",revision:null},{url:"assets/reporteVentas-f2bbd179.css",revision:null},{url:"assets/reportInventory-146832e6.js",revision:null},{url:"assets/reportInventory-2f04d088.css",revision:null},{url:"assets/reportInventory-5e3c44c9.css",revision:null},{url:"assets/reportInventory-6470db46.js",revision:null},{url:"assets/reportMonthlyInventory-3fbb8022.js",revision:null},{url:"assets/reportMonthlyInventory-a2249634.css",revision:null},{url:"assets/RepTicket-9b877844.js",revision:null},{url:"assets/RepValorVentas-9c6202e3.js",revision:null},{url:"assets/resumen-924bbe21.js",revision:null},{url:"assets/resumen-96d06c94.css",revision:null},{url:"assets/retiro-186983ef.js",revision:null},{url:"assets/salchiweb-d421223b.js",revision:null},{url:"assets/samovar-addd14f8.js",revision:null},{url:"assets/ScheduleDevTasks-a2058b6b.js",revision:null},{url:"assets/sendFileService-c35b5577.js",revision:null},{url:"assets/sesion-8815f03d.css",revision:null},{url:"assets/sesion-edd538f2.js",revision:null},{url:"assets/sesion-eed7948e.js",revision:null},{url:"assets/shift_work_schedule-072056de.css",revision:null},{url:"assets/shift_work_schedule-98a3bc4e.js",revision:null},{url:"assets/ShowFiles-ef13b262.css",revision:null},{url:"assets/ShowFiles-fc2353c3.js",revision:null},{url:"assets/ShowRecibos-11eb98bd.css",revision:null},{url:"assets/ShowRecibos-9f29ec46.js",revision:null},{url:"assets/site-4cec5b5e.js",revision:null},{url:"assets/site-fafb7477.js",revision:null},{url:"assets/siteService-24732630.js",revision:null},{url:"assets/TarjetaMenu-a460585b.css",revision:null},{url:"assets/TransferSession-49ff8f68.js",revision:null},{url:"assets/TransferSession-ef10d20e.css",revision:null},{url:"assets/user_shift_work_schedule-d6872d29.js",revision:null},{url:"assets/user_shift_work_schedule-fc1b65e3.css",revision:null},{url:"assets/user-96d33d40.js",revision:null},{url:"assets/userService-aba765b8.js",revision:null},{url:"assets/userServices-487a605f.js",revision:null},{url:"assets/ventas-4bcaedad.js",revision:null},{url:"assets/vue3-pdf-embed-d67dc33a.js",revision:null},{url:"assets/WhatsApp.svg-2bf29679.js",revision:null},{url:"assets/work_schedule-bc2645a2.js",revision:null},{url:"assets/work_schedule-e8ad0f75.css",revision:null},{url:"assets/workbox-window.prod.es5-c46a1faa.js",revision:null},{url:"assets/xlsx-4f9172c7.js",revision:null},{url:"index.html",revision:"b8d221b356671256b565424ed280b4e1"},{url:"themes/arya-blue/theme.css",revision:"aea0c7407692f674757af3b17aba4f13"},{url:"themes/arya-green/theme.css",revision:"2601de5aa89d78f3a2f56cbad63da49d"},{url:"themes/arya-orange/theme.css",revision:"a5a99200171a36e7544556db680d529c"},{url:"themes/arya-purple/theme.css",revision:"0125ea4f5995213e15705c7f67271107"},{url:"themes/bootstrap4-dark-blue/theme.css",revision:"2068392d5ec5bff211d721773728dfab"},{url:"themes/bootstrap4-dark-purple/theme.css",revision:"1bb12f278457616f1fe7f2e222904546"},{url:"themes/bootstrap4-light-blue/theme.css",revision:"d18f38eb0660c12e06d66f1ed7a2ff78"},{url:"themes/bootstrap4-light-purple/theme.css",revision:"5d2ec42e93056d659e9048c0c4d467f4"},{url:"themes/fluent-light/theme.css",revision:"493b153f886e80b7bc4fd9917198daf9"},{url:"themes/lara-dark-blue/theme.css",revision:"06d5569f23920036419a34e99fad0273"},{url:"themes/lara-dark-indigo/theme.css",revision:"b2375e9da5cd4d0185f3ec097497a765"},{url:"themes/lara-dark-purple/theme.css",revision:"a3b280ee1f184c3ed6da39418eba274d"},{url:"themes/lara-dark-teal/theme.css",revision:"211e6bd5dea49ea26260d2181cf84173"},{url:"themes/lara-light-blue/theme.css",revision:"267a45e7f8b2d8187644c73e78b7a16b"},{url:"themes/lara-light-indigo/theme.css",revision:"6d99be50ad4cfc493e4ba8626fdb1ab5"},{url:"themes/lara-light-purple/theme.css",revision:"8cb501bfd9869d9a928e7deb3976776d"},{url:"themes/lara-light-teal/theme.css",revision:"30cd45902fdd496ab35c261d83928052"},{url:"themes/luna-amber/theme.css",revision:"5f292e7664a8385f33f9bb52e22fbdfe"},{url:"themes/luna-blue/theme.css",revision:"8794a2642918c7d037017a0ac5398417"},{url:"themes/luna-green/theme.css",revision:"f4c217ec1abd22b3d27037c144fb292e"},{url:"themes/luna-pink/theme.css",revision:"813c246e3765fc7ebfcfae9605200752"},{url:"themes/md-dark-deeppurple/theme.css",revision:"b5aa0e78fbc2d8eb73dd7830c42b37f4"},{url:"themes/md-dark-indigo/theme.css",revision:"4e681e91a724b45b08f356cbb7cd8ff8"},{url:"themes/md-light-deeppurple/theme.css",revision:"fe04e970b067edb8bb25bf4c0f696d1d"},{url:"themes/md-light-indigo/theme.css",revision:"4bef35c294802ed16fd0c4ffbf46c4b8"},{url:"themes/mdc-dark-deeppurple/theme.css",revision:"e31238cb3642f510e907f3fecf2b493c"},{url:"themes/mdc-dark-indigo/theme.css",revision:"b8dab2627a99d32f3ca2abda33795ddf"},{url:"themes/mdc-light-deeppurple/theme.css",revision:"e400006e4faf1c3057563af5d524aee9"},{url:"themes/mdc-light-indigo/theme.css",revision:"587edc83551b07106e7ed5e01bdeafb7"},{url:"themes/nova-accent/theme.css",revision:"904e04261941b072dfd69a57a683c3d1"},{url:"themes/nova-alt/theme.css",revision:"8d54e486e0d57af1c89b673525df95ee"},{url:"themes/nova-vue/theme.css",revision:"e047321f33dc4275fd3a86e27af92b71"},{url:"themes/nova/theme.css",revision:"f3b9af8c200c883550f80aae068a24d8"},{url:"themes/rhea/theme.css",revision:"f84af634000cce6904f9806155307560"},{url:"themes/saga-blue/theme.css",revision:"80df1cfb15a2eb6911e3aaf0e2744cb0"},{url:"themes/saga-green/theme.css",revision:"9c5399f9c2004f34e90470868b7b0192"},{url:"themes/saga-orange/theme.css",revision:"669fa9c0a1b2f9c5ca3d4dd51888105d"},{url:"themes/saga-purple/theme.css",revision:"78873431decfc4750bdb16f5400e7667"},{url:"themes/tailwind-light/theme.css",revision:"7de295595130ba207cc1c477a1d7ef28"},{url:"themes/vela-blue/theme.css",revision:"094f9137b7c9e6d8348784474689cfc9"},{url:"themes/vela-green/theme.css",revision:"69e22993c30ff7f2745d40bf22543219"},{url:"themes/vela-orange/theme.css",revision:"8bf0ec3859a9d74663de7ba405765011"},{url:"themes/vela-purple/theme.css",revision:"9685ca34de768546c1ea376f1cb72cc4"},{url:"favicon.ico",revision:"88b5943a0df502a7c73805871f5513c2"},{url:"manifest.webmanifest",revision:"1d32b5f991daf6e0686f7d0a27ced744"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
