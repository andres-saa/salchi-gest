import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import { useRoleStore } from '../store/rolesStore';
import { jwtDecode } from 'jwt-decode';
import {loginStore} from '@/store/user.js'
import axios from 'axios';
import { URI } from '../service/conection';
import { ref } from 'vue';
// import { roles } from '../service/roles';
import pixel from './pixel';

const getRoles = async () => {
  try {
      const response = await fetch(`${URI}/formatted-rolegroups`)
      const groups = await response.json();

      // roles.value = groups;
      return groups
  } catch (error) {
      console.error(error);
  }
};


const roles = ref('') 

roles.value = getRoles()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/pages/home.vue'),
        },




        {
          path: '/call-center-vender',
          name: 'call-center-vender',
          component: () => import('@/views/pages/callCenter/MenuView.vue'),
          children: [
            {
              path: '/call-center-vender/:menu_name/:category_id',
              name: 'call-center-vender-menu',
              component: () => import('@/views/pages/callCenter/sesion.vue'),
              meta: { title:'callCenter' },
            },
            {
              path: '/call-center-vender/cart',
              name: 'cart',
              component: () => import('@/views/pages/callCenter/cart.vue'),
             
            },
            {
              path: '/call-center-vender/pay',
              name: 'pay',
              component: () => import('@/views/pages/callCenter/pay.vue'),
              meta: { requireOpen: true, title:'Finalizar pedido' },
            },
            {
              path: '/call-center-vender/gracias',
              name: 'call-center-vender-gracias',
              component: () => import('@/views/pages/callCenter/gracias.vue'),
              meta: { requirePay: true, title:'Gracias' },
            },
          ]

        },














        {
          path: '/informacion-empresarial',
          name: 'informacion-empresarial',
          component: () => import('@/views/pages/infoSalchi.vue'),
        },
        {
          path: '/ingresar-pedido',
          name: 'ingresar-pedido',
          component: () => import('@/views/pages/cocina/salchiweb.vue'),
        },
        {
          path: '/tienda-menu',
          name: 'menuTienda',
          component: () => import('@/views/pages/tienda/MenuTienda.vue'),
          children:[
              {
                path: 'productos/:menu_name/:category_id',
                name: 'sesion',
                component: () => import('@/views/pages/tienda/sesion.vue')
                // meta: { requireMenu: true },
                // meta: { requiresAuth: true },
              },

              {
                path: 'productos/adicionales',
                name: 'adicionales',
                component: () => import('@/views/pages/tienda/adicionales.vue')
                // meta: { requireMenu: true },
                // meta: { requiresAuth: true },
              },
              // {
              //     path: '/tienda-menu/productos/:sesion',
              //     name: 'tienda-productos',
              //     component: () => import('@/views/pages/tienda/sesion.vue')
              // },
              

          ]
      },

        {
          path: '/domicilios/',
          name: 'domicilios',
          component: () => import('@/views/pages/domicilios.vue'),
          children: [
            {
              path: '/domicilios/:site_id',
              name: 'domicilio',
              component: () => import('@/views/pages/domicilio.vue')
            },
          ]
        },

        {
          path: '/cargos/',
          name: 'cargos',
          component: () => import('@/views/pages/gestionCargos.vue')
        },

        {
          path: '/concursos/',
          name: 'concursos',
          component: () => import('@/views/pages/concursos/currentConcursos.vue')
        },
        {
          path: '/manage-concursos/',
          name: 'manage-concursos',
          component: () => import('@/views/pages/concursos/manageContest.vue')
        },

        {
          path: '/reporte-ventas/',
          name: 'reporte-ventas',
          component: () => import('@/views/pages/reporteVentas.vue'),
          children: [
            {
              path: '/reporte-ventas/valor-ventas',
              name: 'reporte-ventas-valor-ventas',
              component: () => import('@/views/pages/RepValorVentas.vue'),
            },
            {
              path: '/reporte-ventas/no-ordenes',
              name: 'reporte-ventas-no-ordenes',
              component: () => import('@/views/pages/RepNoOrdenes.vue'),
            },
            {
              path: '/reporte-ventas/ticket',
              name: 'reporte-ventas-ticket',
              component: () => import('@/views/pages/RepTicket.vue'),
            }
            ,
            {
              path: '/reporte-ventas/clientes',
              name: 'reporte-ventas-clientes',
              component: () => import('@/views/pages/RepClientes.vue'),
            },
            {
              path: '/reporte-ventas/ordenes',
              name: 'reporte-ventas-ordenes',
              component: () => import('@/views/pages/ordenes.vue'),
            },
            {
              path: '/reporte-ventas/order-sumary',
              name: 'reporte-ventas-order-sumary',
              component: () => import('@/views/pages/orderSumary.vue'),
            }

          ]
        },

        {
          path: '/cocina',
          name: 'cocina',
          component: () => import('@/views/pages/cocina/pedidos.vue'),
          
        },
       
        {
          path: '/purchase-order/recorrido',
          name: 'purchase-order-recorrido',
          component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/orderPath.vue'),
          children:[
            {
              path: '/purchase-order/recorrido/purchase-order-reports',
              name: 'purchase-order-reports',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderReports.vue')
            },
            {
              path: '/purchase-order/recorrido/alistar',
              name: 'purchase-order-recorrido-alistar',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/OrderPathAlistar.vue')
            },
            

            {
              path: '/purchase-order/recorrido/transport',
              name: 'purchase-order-recorrido-transport',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/orderPathTransport.vue')
            },


            {
              path: '/purchase-order/recorrido/recibida-en-sede',
              name: 'purchase-order-recorrido-recibida-en-sede',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/orderPathRecibidaEnSede.vue')
            },
            {
              path: '/purchase-order/recorrido/autorizar',
              name: 'purchase-order-recorrido-autorizada',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/OrderPathToAuthorize.vue')
            },

            {
              path: '/purchase-order/recorrido/completed',
              name: 'purchase-order-recorrido-completed',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/orderPathComplete.vue')
            },
            
            








            {
              path: '/purchase-order/recorrido/purchase-order-settings',
              name: 'purchase-order-settings',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderSettings.vue'),
              children:[
                {
                  path: '/purchase-order/recorrido/purchase-order-settings/:sesion/:id',
                  name: 'purchase-order-settings-sesion',
                  component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderSettingsSesion.vue'),   
                }
              ]       
            
            },
              
            
              



            {
              path: '/purchase-order/recorrido/purchase-order-view/:purchase_order_id',
              name: 'purchase-order-view-3/',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderView.vue')
            },

          ]
        },






























        {
          path: '/sites',
          name: 'sites',
          component: () => import('@/views/pages/ManageSites.vue')
        },


        {
          path: '/dotacion',
          name: 'dotacion',
          component: () => import('@/views/pages/Dotacion.vue')
        },



        {
          path: '/auditorias',
          name: 'auditorias',
          component: () => import('@/views/pages/audit.vue'),
          children: [
            {
              path: '/auditorias/lista',
              name: 'auditorias-list',
              component: () => import('@/views/pages/listAudit.vue')
            },
            {
              path: '/auditorias/nueva',
              name: '/auditorias-nueva',
              component: () => import('@/views/pages/newAudit.vue')
            },
            {
              path: '/auditorias/checklist',
              name: '/auditorias-checklist',
              component: () => import('@/views/pages/checklist.vue')
            },




          ]
        },


        {
          path: '/conectividad',
          name: 'conectividad',
          component: () => import('@/views/pages/conectividad.vue')
        },

        {
          path: '/horarios-trabajo',
          name: '/horarios-trabajo',
          component: () => import('@/views/pages/work_schedule.vue')
        },

        {
          path: '/horarios-trabajo',
          name: '/horarios-trabajo',
          component: () => import('@/views/pages/work_schedule.vue')
        },

        {
          path: '/turnos-trabajo',
          name: '/turnos-trabajo',
          component: () => import('@/views/pages/shift_work_schedule.vue')
        },

        {
          path: '/turnos-trabajo-empleados',
          name: 'turnos-trabajo-empleados',
          component: () => import('@/views/pages/user_shift_work_schedule.vue')
        },



        {
          path: '/guias',
          name: 'guias',
          component: () => import('@/views/pages/Guias.vue')
        },


        {
          path: '/directorio',
          name: 'directory',
          component: () => import('@/views/pages/Directory.vue')
        },
        {
          path: '/cancellation-requests',
          name: 'cancellation-requests',
          component: () => import('@/views/pages/tienda/cancellationOrderRequest.vue'),
          children:[
            {
              path: '/cancellation-requests/:request_status',
              name: 'cancellation-requests-sesion',
              component: () => import('@/views/pages/tienda/cancellationOrderRequestSesion.vue'),
            },

          ]
        },



        {
          path: '/transfer',
          name: 'transfer',
          component: () => import('@/views/pages/tienda/TransferSession.vue'),
          
          
        },
        
        // {
        //   path: '/guias-user',
        //   name: 'guias-user',
        //   component: () => import('@/views/pages/GuiasUsers.vue')
        // },
        {
          path: '/cumples',
          name: 'cumples',
          component: () => import('@/views/pages/cumples.vue')
        },
        {
          path: '/cucharas',
          name: 'cucharas',
          component: () => import('@/views/pages/importante/recetarioCucharas.vue')
        },



        {
          path: '/daily-inventory',
          name: 'daily-inventory',
          component: () => import('@/views/pages/inventory/dailyInventory/dailyInventory.vue'),
          children:[
            {
              path: '/daily-inventory/daily-inventory-reports',
              name: 'daily-inventory-reports',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/dailyInventory/dailyInventoryReports.vue')
            },
            {
              path: '/daily-inventory/daily-inventory-my-reports',
              name: 'daily-inventory-my-reports',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/dailyInventory/dailyInventoryMyReports.vue')
            },
            {
              path: '/daily-inventory/report-inventory',
              name: 'daily-inventory-report-inventory',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/dailyInventory/reportInventory.vue')
            },
              
              
            {
              path: '/daily-inventory/daily-inventory-settings',
              name: 'daily-inventory-settings',
              component: () => import('@/views/pages/inventory/dailyInventory/dailyInventorySettings.vue'),
              meta:{roles: roles.value['Inventario diario admin'] },
              children:[
                {
                  path: '/daily-inventory/daily-inventory-settings/:sesion/:id',
                  name: 'daily-inventory-settings-sesion',
                  component: () => import('@/views/pages/inventory/dailyInventory/dailyInventorySettingsSesion.vue'),   
                }
              ]       
            
            
            },
              



              {
                path: '/daily-inventory/daily-inventory-view/:daily_inventory_id',
                name: 'daily-inventory-view',
                component: () => import('@/views/pages/inventory/dailyInventory/dailyInventoryView.vue'),            },

          ]
        },



        {
          path: '/monthly-inventory',
          name: 'monthly-inventory',
          component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventory.vue'),
          children:[
            {
              path: '/monthly-inventory/monthly-inventory-reports',
              name: 'monthly-inventory-reports',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventoryReports.vue')
            },
            {
              path: '/monthly-inventory/monthly-inventory-my-reports',
              name: 'monthly-inventory-my-reports',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventoryMyReports.vue')
            },
            {
              path: '/monthly-inventory/report-monthly-inventory',
              name: 'monthly-inventory-report-monthly-inventory',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/monthlyInventory/reportMonthlyInventory.vue')
            },
              
              
            {
              path: '/monthly-inventory/monthly-inventory-settings',
              name: 'monthly-inventory-settings',
              component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventorySettings.vue'),
              meta:{roles: roles.value['Inventario diario admin'] },
              children:[
                {
                  path: '/monthly-inventory/monthly-inventory-settings/:sesion/:id',
                  name: 'monthly-inventory-settings-sesion',
                  component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventorySettingsSesion.vue'),   
                }
              ]       
            
            
            },
              



              {
                path: '/monthly-inventory/monthly-inventory-view/:monthly_inventory_id',
                name: 'monthly-inventory-view',
                component: () => import('@/views/pages/inventory/monthlyInventory/monthlyInventoryView.vue'),            },

          ]
        },




        {
          path: '/purchase-order',
          name: 'purchase-order',
          component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrder.vue'),
          children:[
          
            {
              path: '/purchase-order/purchase-order-my-orders',
              name: 'purchase-order-my-orders',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderMyOrders.vue')
            },
            {
              path: '/purchase-order/generate-purchase-order',
              name: 'generate-purchase-order/',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderNew.vue')
            },
              
              
            // {
            //   path: '/purchase-order/purchase-order-settings',
            //   name: 'purchase-order-settings',
            //   meta:{roles: roles.value['Inventario diario admin'] },
            //   component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderSettings.vue'),
            //   children:[
            //     {
            //       path: '/purchase-order/purchase-order-settings/:sesion/:id',
            //       name: 'purchase-order-settings-sesion',
            //       component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderSettingsSesion.vue'),   
            //     }
            //   ]       
            
            
            // },
              



            {
              path: '/purchase-order/purchase-order-view/:purchase_order_id',
              name: 'purchase-order-view/',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderView.vue')
            },

          ]
        },
        {
          path: '/dev-tasks',
          name: 'dev-tasks',
          component: () => import('@/views/pages/dev/DevTask.vue'),
          children:[

            {
              path: '/dev-tasks/current',
              name: 'current-dev-tasks',
              component: () => import('@/views/pages/dev/CurrentDevTasks.vue'),
            },
            {
              path: '/dev-tasks/scheduled',
              name: 'scheduled-dev-tasks',
              component: () => import('@/views/pages/dev/ScheduleDevTasks.vue'),
            },
            {
              path: '/dev-tasks/history',
              name: 'history-dev-tasks',
              component: () => import('@/views/pages/dev/HistoryDevTasks.vue'),
            },

          ]
        },

        {
          path: '/samovar',
          name: 'samovar',
          component: () => import('@/views/pages/importante/samovar.vue')
        },

        {
          path: '/nevera-doble',
          name: 'nevera-doble',
          component: () => import('@/views/pages/importante/neveraDoble.vue')
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: () => import('@/views/pages/inventory/ingredients.vue')
        },

        {
          path: '/recipes',
          name: 'recipes',
          component: () => import('@/views/pages/inventory/recipes.vue'),
        },


        {
          path: '/recipe-data-sheet/:recipe_id',
          name: 'recipe-data-sheet',
          component: () => import('@/views/pages/inventory/recipeDataSheet.vue'),
        },




        {
          path: '/nevera-triple',
          name: 'nevera-triple',
          component: () => import('@/views/pages/importante/neveraTriple.vue')
        },

        {
          path: '/mas-cerca-de-ti',
          name: 'gestion',
          component: () => import('@/views/pages/gestion.vue')
        },


        {
          path: '/site/:site_id',
          name: 'site',
          component: () => import('@/views/pages/ManageSite.vue'),
          children: [
            {
              path: '/site/:site_id/documentos',
              name: 'documentos',
              component: () => import('@/views/pages/ShowFiles.vue'),

            },
            {
              path: '/site/:site_id/recibos',
              name: 'resibos',
              component: () => import('@/views/pages/ShowRecibos.vue'),

            },

          ]

        },
        {
          path: '/certificado-laboral',
          name: 'certificado-laboral',
          component: () => import('@/views/pages/generarCertificado.vue')
        },
        {
          path: '/permisos',
          name: 'permisos',
          component: () => import('@/views/pages/permisosEmployer.vue')
        },
        {
          path: '/permiso',
          name: 'permiso',
          component: () => import('@/views/pages/permiso.vue')
        },
        {
          path: '/permiso-vacaciones',
          name: 'permiso-vacaciones',
          component: () => import('@/views/pages/permiso-vacaciones.vue')
        },
        {
          path: '/permiso-licencia',
          name: 'permiso-licencia',
          component: () => import('@/views/pages/permiso-licencia.vue')
        },











        {
          path: '/capacitaciones',
          name: 'capacitaciones',
          component: () => import('@/views/pages/capacitaciones/capacitaciones.vue'),

        },

        {
          path: '/capacitaciones-invitaciones',
          name: 'capacitaciones-invitaciones',
          component: () => import('@/views/pages/capacitaciones/capacitaciones-invitaciones.vue'),

        },
        {
          path: '/capacitacion/:capacitacion_id/',
          name: 'capacitacion',
          component: () => import('@/views/pages/capacitaciones/capacitacion.vue'),
          children: [
            {
              path: '/capacitacion/:capacitacion_id/configuracion',
              name: 'capacitacion_configuracion',
              component: () => import('@/views/pages/capacitaciones/configCapacitacion.vue'),

            },
            {
              path: '/capacitacion/:capacitacion_id/archivos',
              name: 'capacitacion_archivos',
              component: () => import('@/views/pages/capacitaciones/archivCapacitaciones.vue'),

            },
            {
              path: '/capacitacion/:capacitacion_id/asistencia',
              name: 'capacitacion_asistencia',
              component: () => import('@/views/pages/capacitaciones/asistencia.vue'),

            },
            //   {
            //     path: '/capacitaciones',
            //     name: 'capacitaciones',
            //     component: () => import('@/views/pages/capacitacionNueva.vue'),

            //   },

          ]

        },










        //   {
        //     path: '/capacitaciones',
        //     name: 'capacitaciones',
        //     component: () => import('@/views/pages/capacitaciones.vue'),
        //     children:[
        //         {
        //             path: '/capacitaciones/guias',
        //             name: 'guias',
        //             component: () => import('@/views/pages/guias.vue')
        //           },
        //           {
        //             path: '/capacitaciones/cuestionario',
        //             name: 'cuestionario',
        //             component: () => import('@/views/pages/cuestionario.vue')
        //         },
        //         {
        //             path: '/capacitaciones/asistencia',
        //             name: 'asistencia',
        //             component: () => import('@/views/pages/asistencia.vue')
        //         },
        //         {
        //             path: '/capacitaciones/links',
        //             name: 'links',
        //             component: () => import('@/views/pages/links.vue')
        //         },
        //     ]
        //   },
        {
          path: '/actualizar-datos',
          name: 'actualizar-datos',
          component: () => import('@/views/pages/dialogoEditUser.vue')
        },
        {
          path: '/clima',
          name: 'clima',
          component: () => import('@/views/pages/clima.vue')
        },
        {
          path: '/retiro',
          name: 'retiro',
          component: () => import('@/views/pages/retiro.vue')
        },
        {
          path: '/desempeno',
          name: 'desempeno',
          component: () => import('@/views/pages/desempeno.vue')
        },
        {
          path: '/error',
          name: 'error',
          component: () => import('@/views/pages/error.vue')
        },
        {
          path: '/organigrama',
          name: 'organigrama',
          component: () => import('@/views/pages/organigrama.vue')
        },
        {
          path: '/mi-carnet',
          name: 'mi-carnet',
          component: () => import('@/views/pages/miCarnet.vue')
        },
        {
          path: '/mis-permisos',
          name: 'mis-permisos',
          component: () => import('@/views/pages/misPermisos.vue'),
          children: [
            {
              path: '/mis-permisos/:tipo',
              name: 'mis-permisotipo',
              component: () => import('@/views/pages/miPermisoType.vue'),
              // meta: { roles: roles.value.todos }, // Asignación correcta dentro de 'meta'
              children: [
                {
                  path: '/mis-permisos/:tipo/:status',
                  name: 'mis-permisoestado',
                  component: () => import('@/views/pages/miPermisoStatus.vue'),

                },

              ]

            },

          ]
        },
        {
          path: '/maintenance',
          name: 'maintenance',
          component: () => import('@/views/pages/maintenance/maintenance.vue'),
      // Asignación correcta dentro de 'meta'
          children:[
            
            {
              path: '/maintenance/equipment',
              name: 'maintenance-equipos',
              component: () => import('@/views/pages/maintenance/equipment.vue'),
             
            },

            {
              path: '/maintenance/maintance-list',
              name: 'maintenance-maintance-list',
              component: () => import('@/views/pages/maintenance/maintenanceList.vue'),
             
            },
          ]
        },



        // {
        //     path: '/uikit/button',
        //     name: 'button',
        //     component: () => import('@/views/uikit/Button.vue')
        // },
        // {
        //     path: '/uikit/table',
        //     name: 'table',
        //     component: () => import('@/views/uikit/Table.vue')
        // },
        // {
        //     path: '/uikit/list',
        //     name: 'list',
        //     component: () => import('@/views/uikit/List.vue')
        // },
        // {
        //     path: '/uikit/tree',
        //     name: 'tree',
        //     component: () => import('@/views/uikit/Tree.vue')
        // },
        // {
        //     path: '/uikit/panel',
        //     name: 'panel',
        //     component: () => import('@/views/uikit/Panels.vue')
        // },

        // {
        //     path: '/uikit/overlay',
        //     name: 'overlay',
        //     component: () => import('@/views/uikit/Overlay.vue')
        // },
        // {
        //     path: '/uikit/media',
        //     name: 'media',
        //     component: () => import('@/views/uikit/Media.vue')
        // },
        // {
        //     path: '/uikit/menu',
        //     component: () => import('@/views/uikit/Menu.vue'),
        //     children: [
        //         {
        //             path: '/uikit/menu',
        //             component: () => import('@/views/uikit/menu/PersonalDemo.vue')
        //         },
        //         {
        //             path: '/uikit/menu/seat',
        //             component: () => import('@/views/uikit/menu/SeatDemo.vue')
        //         },
        //         {
        //             path: '/uikit/menu/payment',
        //             component: () => import('@/views/uikit/menu/PaymentDemo.vue')
        //         },
        //         {
        //             path: '/uikit/menu/confirmation',
        //             component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
        //         }
        //     ]
        // },
        // {
        //     path: '/uikit/message',
        //     name: 'message',
        //     component: () => import('@/views/uikit/Messages.vue')
        // },
        // {
        //     path: '/uikit/file',
        //     name: 'file',
        //     component: () => import('@/views/uikit/File.vue')
        // },
        // {
        //     path: '/uikit/charts',
        //     name: 'charts',
        //     component: () => import('@/views/uikit/Chart.vue')
        // },
        // {
        //     path: '/uikit/misc',
        //     name: 'misc',
        //     component: () => import('@/views/uikit/Misc.vue')
        // },
        // {
        //     path: '/blocks',
        //     name: 'blocks',
        //     component: () => import('@/views/utilities/Blocks.vue')
        // },
        // {
        //     path: '/utilities/icons',
        //     name: 'icons',
        //     component: () => import('@/views/utilities/Icons.vue')
        // },
        // {
        //     path: '/pages/timeline',
        //     name: 'timeline',
        //     component: () => import('@/views/pages/Timeline.vue')
        // },
        // {
        //     path: '/pages/empty',
        //     name: 'empty',
        //     component: () => import('@/views/pages/Empty.vue')
        // },
        {
          path: '/pages/crud',
          name: 'crud',
          component: () => import('@/views/pages/Crud.vue'),


        },
        {
          path: '/autorizar-permisos',
          name: 'autorizar',
          component: () => import('@/views/pages/autorizar-permisos.vue'),

        },
        // {
        //     path: '/documentation',
        //     name: 'documentation',
        //     component: () => import('@/views/utilities/Documentation.vue')
        // }
      ]
    },
    // {
    //     path: '/landing',
    //     name: 'landing',
    //     component: () => import('@/views/pages/Landing.vue')
    // },
    // // {
    //     path: '/pages/notfound',
    //     name: 'notfound',
    //     component: () => import('@/views/pages/NotFound.vue')
    // },

    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/pages/auth/Login.vue')
    },


    // {
    //     path: '/auth/access',
    //     name: 'accessDenied',
    //     component: () => import('@/views/pages/auth/Access.vue')
    // },
    // {
    //     path: '/auth/error',
    //     name: 'error',
    //     component: () => import('@/views/pages/auth/Error.vue')
    // }
  ]
});





pixel.init()
router.afterEach((to, from) => {
  // Esto rastreará una "PageView" cada vez que el usuario cambie de ruta
  pixel.sendTrackingEvent('track', 'PageView');
});



const validateToken = (token) => {

  const store = loginStore()
  return axios.get(`${URI}/validate-token`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    // Aquí manejas la respuesta positiva
    if (response.data.access_token) {
      store.setUserData(response.data)
    }
    return response.data;
  })
  .catch(error => {
    // Manejo de errores si el token es inválido o expirado
    console.error("Error durante la validación del token:", error);
    throw error;
  });
}




router.beforeEach(async(to, from, next) => {
  console.log(to.meta)
  const store = loginStore()
  const token = store.userData.access_token
  const validToken = await validateToken(token)
  
  if (!token || !validToken.access_token ) {
    if (to.path !== '/auth/login' ) {
      next({ path: '/auth/login' });
    } else {
      next(); // Si ya está en la página de login, continúa
    }
  } else {

    try {

      const decoded = jwtDecode(token);
      if (!decoded || !decoded.rol) {
        console.error("Rol no encontrado en el token");
        next({ path: '/login' });
        return;
      }

      const userRole = decoded.rol?.split(" ").join('').toLowerCase();


      const isRoleAuthorized = to.matched.some(record => {
        if (!record.meta || !record.meta.roles) {
          return false;
        }

        const routeRoles = record.meta.roles.map(role => role?.split(" ").join('').toLowerCase());
        return routeRoles.includes(userRole);
      });

      if (isRoleAuthorized || !to.matched.some(record => record.meta?.roles)) {
        next(); // Rol permitido o no se requiere control de rol
      } else {
        alert(`No tienes permitido entrar aqui`)
        next('./'); // Rol no permitido
      }
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      next({ path: '/error' }); // Error en el token o en la decodificación
    }
  }
});








export default router;



