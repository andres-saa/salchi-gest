import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import { useRoleStore } from '../store/rolesStore';
import { jwtDecode } from 'jwt-decode';
import {loginStore} from '@/store/user.js'
import axios from 'axios';
import { URI } from '../service/conection';
import { ref } from 'vue';
import pixel from './pixel';



const getRoles = async () => {
  try {
      const response = await fetch(`${URI}/formatted-rolegroups`)
      const groups = await response.json();

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
          name: 'home',
          component: () => import('@/views/pages/home.vue'),
        
        },

        {
          path: '/hiring/',
          name: 'hiring',
          component: () => import('@/views/pages/hiring/requester/Vacancies.vue'),
          children:[
            {
              path: '/hiring/request-people',
              name: 'hiring-request',
              component: () => import('@/views/pages/hiring/requester/requests.vue'),
              
            },
            {
              path: '/hiring/my-requests',
              name: 'my-requests',
              component: () => import('@/views/pages/hiring/requester/myRequests.vue'),
              
            }
          ]
        
        },

        {
          path: '/cachier-money/',
          name: 'cachier-money',
          component: () => import('@/views/pages/cachierMoney/cachierMoney.vue'),
          meta:{permission: 433},
          children:[

            {
              path: '/cachier-money/reportes',
              name: 'cachier-money-reportes',
              component: () => import('@/views/pages/cachierMoney/Reportes.vue'),
              meta:{permission: 433},
            },
            {
              path: '/cachier-money/registros',
              name: 'cachier-money-registros',
              component: () => import('@/views/pages/cachierMoney/Registros.vue'),
            },
            {
              path: '/cachier-money/salidas',
              name: 'cachier-money-salidas',
              component: () => import('@/views/pages/cachierMoney/Salidas.vue'),
            }

          ]
          
        },
        {
          path: '/hiring-authorize',
          name: 'hiring-authorize',
          component: () => import('@/views/pages/hiring/authorizer/autorizer.vue'),
          children:[
            {
              path: '/hiring-authorize/requests',
              name: 'hiring-authorize-requests',
              component: () => import('@/views/pages/hiring/authorizer/requests.vue'),
            },
            {
              path: '/hiring-authorize/acepted',
              name: 'hiring-auhorize-acepted',
              component: () => import('@/views/pages/hiring/authorizer/acepted.vue'),
            },
            {
              path: '/hiring-authorize/rejected',
              name: 'hiring-autorize-rejected',
              component: () => import('@/views/pages/hiring/authorizer/rejected.vue'),
            }
          ]
        
        },

    
          {
            path: '/customers',
            name: 'customers',
            component: () => import('@/views/pages/customers/customer.vue'),
          },

          {
            path: '/sonando',
            name: 'sonando',
            component: () => import('@/views/pages/Sonando.vue'),
          },
        

        {
          path: '/hiring-hr/',
          name: 'hiring-hr',
          component: () => import('@/views/pages/hiring/hr/hr.vue'),
          children:[
            {
              path: '/hiring-hr/news',
              name: 'hiring-authorize-hr',
              component: () => import('@/views/pages/hiring/hr/news.vue'),
            },
            {
              path: '/hiring-hr/selection',
              name: 'hiring-auhorize-acepted-hr',
              component: () => import('@/views/pages/hiring/hr/selection.vue'),
            },
            {
              path: '/hiring-hr/vacancies',
              name: 'hiring-autorize-rejected-hr',
              component: () => import('@/views/pages/hiring/hr/vacancies.vue'),
            }
          ]
        
        },

        {
          path: '/hiring-hr-follow/:vacancy_id',
          name: 'hiring-hr-follow',
          component: () => import('@/views/pages/hiring/hr/follow/follow.vue'),
          children: [
            {
              path: "/hiring-hr-follow/resume-review:vacancy_id",
              name: "resume-review",
              component: () => import('@/views/pages/hiring/hr/follow/ResumeReview/ResumeReview.vue'),
              children: [
                  { path: "/hiring-hr-follow/resume-review/accepted/:vacancy_id", name: "resume-review-accepted", component: () => import('@/views/pages/hiring/hr/follow/ResumeReview/Accepted.vue') },
                  { path: "/hiring-hr-follow/resume-review/rejected/:vacancy_id", name: "resume-review-rejected", component: () => import('@/views/pages/hiring/hr/follow/ResumeReview/Rejected.vue') }
              ]
          },
          {
              path: "/hiring-hr-follow/preliminary-filter:vacancy_id",
              name: "preliminary-filter",
              component: () => import('@/views/pages/hiring/hr/follow/PreliminaryFilter/PreliminaryFilter.vue'),
              children: [
                  { path: "/hiring-hr-follow/preliminary-filter/accepted/:vacancy_id", name: "preliminary-filter-accepted", component: () => import('@/views/pages/hiring/hr/follow/PreliminaryFilter/Accepted.vue') },
                  { path: "/hiring-hr-follow/preliminary-filter/rejected/:vacancy_id", name: "preliminary-filter-rejected", component: () => import('@/views/pages/hiring/hr/follow/PreliminaryFilter/Rejected.vue') }
              ]
          },
          {
              path: "/hiring-hr-follow/first-interview:vacancy_id",
              name: "first-interview",
              component: () => import('@/views/pages/hiring/hr/follow/FirstInterview/FirstInterview.vue'),
              children: [
                  { path: "/hiring-hr-follow/first-interview/accepted/:vacancy_id", name: "first-interview-accepted", component: () => import('@/views/pages/hiring/hr/follow/FirstInterview/Accepted.vue') },
                  { path: "/hiring-hr-follow/first-interview/rejected/:vacancy_id", name: "first-interview-rejected", component: () => import('@/views/pages/hiring/hr/follow/FirstInterview/Rejected.vue') }
              ]
          },
          {
              path: "/hiring-hr-follow/second-interview/:vacancy_id",
              name: "second-interview",
              component: () => import('@/views/pages/hiring/hr/follow/SecondInterview/SecondInterview.vue'),
              children: [
                  { path: "/hiring-hr-follow/second-interview/accepted/:vacancy_id", name: "second-interview-accepted", component: () => import('@/views/pages/hiring/hr/follow/SecondInterview/Accepted.vue') },
                  { path: "/hiring-hr-follow/second-interview/rejected/:vacancy_id", name: "second-interview-rejected", component: () => import('@/views/pages/hiring/hr/follow/SecondInterview/Rejected.vue') }
              ]
          },
          
            { path: "/hiring-hr-follow/exam-review/:vacancy_id", name: "exam-review", component: () => import('@/views/pages/hiring/hr/follow/ExamReview.vue') },
            { path: "/hiring-hr-follow/document-reception/:vacancy_id", name: "document-reception", component: () => import('@/views/pages/hiring/hr/follow/DocumentReception.vue') },
            { path: "/hiring-hr-follow/hiring-completed/:vacancy_id", name: "hiring-completed", component: () => import('@/views/pages/hiring/hr/follow/HiringCompleted.vue') }
        ]
        
        },



        {
          path: '/chat-bot/train',
          name: 'chatbot-train',
          component: () => import('@/views/pages/salchibot/train.vue'),
        
        },


        {
          path: '/call-center-vender',
          name: 'call-center-vender',
          component: () => import('@/views/pages/callCenter/MenuView.vue'),
          matched:{permission_id: 6},
          
          children: [
            {
              path: '/call-center-vender/:category_id',
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
          path: '/pqrs',
          name: 'pqrs',
          component: () => import('@/views/pages/pqrs/pqrs.vue'),
          meta:{permission_id: 32},
          children:[
            {
              path: '/pqrs/:section/:section_id',
              name: 'pqrs-section',
              component: () => import('@/views/pages/pqrs/pqrsSection.vue'),
              
            },

          ]
        },

        {
          path: '/pqrs-user',
          name: 'pqrs-user',
          component: () => import('@/views/pages/pqrs/pqrUser.vue'),
          meta:{permission_id: 43}
          
        },

        {
          path: '/informacion-empresarial',
          name: 'informacion-empresarial',
          component: () => import('@/views/pages/infoSalchi.vue'),
          meta:{permission_id: 43}
        },

        {
          path: '/tienda-menu',
          name: 'menuTienda',
          meta:{permission_id: 2},
          component: () => import('@/views/pages/tienda/MenuTienda.vue'),
          children:[
              {
                path: 'productos/:menu_name/:category_id',
                name: 'sesion',
                component: () => import('@/views/pages/tienda/sesion.vue')
         
              },

              {
                path: 'productos/adicionales',
                name: 'adicionales',
                component: () => import('@/views/pages/tienda/adicionales.vue')
            
              },
            
              

          ]
      },


        {
          path: '/domicilios/',
          name: 'domicilios',
          component: () => import('@/views/pages/domicilios.vue'),
          meta:{permission_id: 4},
          children: [
            {
              path: '/domicilios/:site_id',
              name: 'domicilio',
              component: () => import('@/views/pages/domicilio.vue')
            },
          ]
        },


        {
          path: '/franquicias/',
          name: 'franquicias',
          component: () => import('@/views/pages/Franquicias/Franquicias.vue'),
          meta:{permission_id: 4},
        },

        
        {
          path: '/cargos/',
          name: 'cargos',
          component: () => import('@/views/pages/gestionCargos.vue')
        },

        {
          path: '/video-training-sequences/',
          name: 'video-training-sequences',
          component: () => import('@/views/pages/training_video/training_video_secuence.vue'),
         
        },
        {
          path: '/video-training-video/:sequence_id/:sequence_name',
          name: 'video-training-videos',
          component: () => import('@/views/pages/training_video/training_videos.vue')
        },

        {
          path: '/video-training-video-admin/:sequence_id/:sequence_name',
          name: 'video-training-video-admin',
          component: () => import('@/views/pages/training_video/admin/training_videos.vue')
        },

        {
          path: '/video-training-video-sesion',
          name: 'video-training-videos-sesion',
          component: () => import('@/views/pages/training_video/admin/training_video_sesion.vue')
        },

        {
          path: '/video-training-sequence-admin/:sesion_name/:sesion_id',
          name: 'video-training-sequence-admin',
          component: () => import('@/views/pages/training_video/admin/training_video_sequence.vue')
        },
        {
          path: '/contracts',
          name: 'contracts',
          component: () => import('@/views/pages/Contract/Contracts.vue'),
          children:[
            {
              path: '/contracts/contracts-all/',
              name: 'contracts-all',
              component: () => import('@/views/pages/Contract/ContractAll.vue')
            },
            {
              path: '/contracts/contracts-to-finish/',
              name: 'contracts-to-finish',
              component: () => import('@/views/pages/Contract/ContractToFinish.vue')
             
            },
            {
              path: '/contracts/contracts-user-list/',
              name: 'contracts-user-list',
              component: () => import('@/views/pages/Contract/userLIst.vue')
  
            },
            {
              path: '/contracts/new-contract/',
              name: 'contracts-new-contract',
              component: () => import('@/views/pages/Contract/newContract.vue')
            },
            {
              path: '/contracts/contracts-vigent/',
              name: 'contracts-vigent',
              component: () => import('@/views/pages/Contract/contractVigent.vue')
            },
            {
              path: '/contracts/contracts-ended/',
              name: 'contracts-ended',
              component: () => import('@/views/pages/Contract/contractEnded.vue')
            },
            {
              path: '/contracts/contracts-next/',
              name: 'contracts-next',
              component: () => import('@/views/pages/Contract/contractNext.vue')
            },
            {
              path: '/contracts/configuracion/',
              name: 'contracts-configuracion',
              component: () => import('@/views/pages/Contract/configuracion.vue')
            },
           

          ]
        },

        {
          path: '/recetario/',
          name: 'recetario',
          component: () => import('@/views/pages/inventory/recetario/recetario.vue'),
          children:[
            {
              path: '/recetario/recetas',
              name: 'recetario-recetas',
              component: () => import('@/views/pages/inventory/recetario/recetas.vue')
            },

            {
              path: '/recetario/producto-terminado',
              name: 'producto-terminado',
              component: () => import('@/views/pages/inventory/recetario/recetasCDI.vue')
            },

            {
              path: '/recetario/pasamanos',
              name: 'producto-pasamanos',
              component: () => import('@/views/pages/inventory/recetario/Pasamanos.vue')
            },

            {
              path: '/recetario/ingredientes/',
              name: 'recetario-ingredientes',
              component: () => import('@/views/pages/inventory/recetario/ingredientes.vue')
            },
            {
              path: '/recetario/recipe-sumary-benefit/',
              name: 'recetario-recipe-sumary-benefit',
              component: () => import('@/views/pages/inventory/recetario/recipeSummaryBenefit.vue')
            },
            {
              path: '/recetario/configuracion/',
              name: 'recetario-configuracion',
              component: () => import('@/views/pages/inventory/recetario/configuracion.vue'),
              children:[
                {
                  path: '/recetario/configuracion/productos-con-receta',
                  name: 'recetario-recipe-sumary-benefit-productos-con-receta',
                  component: () => import('@/views/pages/inventory/recetario/configuracionRecetas.vue')
                },
                {
                  path: '/recetario/configuracion/comparation-percents',
                  name: 'recetario-recipe-comparation-percents',
                  component: () => import('@/views/pages/inventory/recetario/configuracionPercents.vue')
                },
              ]
            },
            {
              path: '/recipe-data-sheet/:product_id/:recipe_name',
              name: 'recipe_data_sheet',
              component: () => import('@/views/pages/inventory/recetario/recipeDataSheet.vue')
            },
            {
              path: '/cdi-recipe-data-sheet/:product_id/:recipe_name',
              name: 'cdi_recipe_data_sheet',
              component: () => import('@/views/pages/inventory/recetario/CDIrecipeDataSheet.vue')
            },

            {
              path: '/cdi-recipe-data-sheet-pasamanos/:product_id/:recipe_name',
              name: 'cdi_recipe_data_sheet_pasamanos',
              component: () => import('@/views/pages/inventory/recetario/CDIrecipeDataSheetPasamanos.vue')
            }, 

            {
              path: '/new-cdi-recipe-data-sheet/',
              name: 'new-cdi_recipe_data_sheet',
              component: () => import('@/views/pages/inventory/recetario/NewCDIrecipeDataSheet.vue')
            },

            {
              path: '/new-cdi-recipe-data-sheet-pasamanos/',
              name: 'new-cdi_recipe_data_sheet-pasamanos',
              component: () => import('@/views/pages/inventory/recetario/NewCDIrecipeDataSheetPasamanos.vue')
            },
            
            {
              path: '/recetario/prices-cdi-table',
              name: 'prices_cdi_table',
              component: () => import('@/views/pages/inventory/recetario/pricesCdiTable.vue')
            },
          ]
        },

        

        {
          path: '/concursos/',
          name: 'concursos',
          component: () => import('@/views/pages/concursos/currentConcursos.vue')
        },

        {
          path: '/future-concursos/',
          name: 'future-concursos',
          component: () => import('@/views/pages/concursos/FutureConcursos.vue')
        },

        {
          path: '/completed-concursos/',
          name: 'completed-concursos',
          component: () => import('@/views/pages/concursos/CompletedConcursos.vue')
        },
        {
          path: '/manage-concursos/',
          name: 'manage-concursos',
          component: () => import('@/views/pages/concursos/manageContest.vue')
        },

        {
          path: '/reporte-ventas/',
          name: 'reporte-ventas',
          component: () => import('@/views/pages/reports/reporteVentas.vue'),
          meta:{permission_id: 3},
          children: [
            {
              path: '/reporte-ventas/valor-ventas',
              name: 'reporte-ventas-valor-ventas',
              component: () => import('@/views/pages/reports/RepValorVentas.vue'),
            },
            {
              path: '/reporte-ventas/no-ordenes',
              name: 'reporte-ventas-no-ordenes',
              component: () => import('@/views/pages/reports/RepNoOrdenes.vue'),
            },
            {
              path: '/reporte-ventas/modificar-ordenes',
              name: 'reporte-ventas-no-ordenes-modificar',
              component: () => import('@/views/pages/reports/modificar_ordenes.vue'),
            },
            {
              path: '/reporte-ventas/ticket',
              name: 'reporte-ventas-ticket',
              component: () => import('@/views/pages/reports/RepTicket.vue'),
            }
            ,
            {
              path: '/reporte-ventas/clientes',
              name: 'reporte-ventas-clientes',
              component: () => import('@/views/pages/reports/RepClientes.vue'),
            },
            {
              path: '/reporte-ventas/ordenes',
              name: 'reporte-ventas-ordenes',
              component: () => import('@/views/pages/reports/ordenes.vue'),
            },
            {
              path: '/reporte-ventas/order-sumary',
              name: 'reporte-ventas-order-sumary',
              component: () => import('@/views/pages/reports/orderSumary.vue'),
            }

          ]
        },

        {
          path: '/cocina',
          name: 'cocina',
          component: () => import('@/views/pages/cocina/pedidos.vue'),
          meta:{permission_id: 1}
          
        },
       
        {
          path: '/purchase-order/recorrido',
          name: 'purchase-order-recorrido',
          component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/OrderPath.vue'),
          
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
              component: () => import('@//views/pages/inventory/purchaseOrder/orderPath/OrderPathTransport.vue')
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
              component: () => import('@/views/pages/inventory/purchaseOrder/orderPath/OrderPathComplete.vue')
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
          component: () => import('@/views/pages/guias.vue')
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
            {
              path: '/cancellation-requests/reports',
              name: 'cancellation-requests-reports',
              component: () => import('@/views/pages/tienda/CancellationReports.vue'),
            },

          ]
        },



        {
          path: '/transfer',
          name: 'transfer',
          component: () => import('@/views/pages/tienda/TransferSession.vue'),
          
          
        },

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
          path: '/cdi-inventory',
          name: 'cdi-inventory',
          component: () => import('@/views/pages/inventory/cdiInventory/cdiInventory.vue'),
          children:[
            {
              path: '/cdi-inventory/cdi-inventory-reports',
              name: 'cdi-inventory-reports',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/cdiInventory/cdiInventoryReports.vue')
            },
            {
              path: '/cdi-inventory/cdi-inventory-my-reports',
              name: 'cdi-inventory-my-reports',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/cdiInventory/cdiInventoryMyReports.vue')
            },
            {
              path: '/cdi-inventory/report-inventory',
              name: 'cdi-inventory-report-inventory',
              meta:{roles: roles.value['Inventario diario'] },
              component: () => import('@/views/pages/inventory/cdiInventory/reportInventory.vue')
            },
              
              
            {
              path: '/cdi-inventory/cdi-inventory-settings',
              name: 'cdi-inventory-settings',
              component: () => import('@/views/pages/inventory/cdiInventory/cdiInventorySettings.vue'),
              meta:{roles: roles.value['Inventario diario admin'] },
              children:[
                {
                  path: '/cdi-inventory/cdi-inventory-settings/:sesion/:id',
                  name: 'cdi-inventory-settings-sesion',
                  component: () => import('@/views/pages/inventory/cdiInventory/cdiInventorySettingsSesion.vue'),   
                }
              ]       
            
            
            },
              



              {
                path: '/cdi-inventory/cdi-inventory-view/:cdi_inventory_id',
                name: 'cdi-inventory-view',
                component: () => import('@/views/pages/inventory/cdiInventory/cdiInventoryView.vue'),            },

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

            {
              path: '/purchase-order/purchase-order-view/:purchase_order_id',
              name: 'purchase-order-view/',
              meta:{roles: roles.value['Inventario diario admin'] },
              component: () => import('@/views/pages/inventory/purchaseOrder/purchaseOrderView.vue')
            },

          ]
        },
        // {
        //   path: '/dev-tasks',
        //   name: 'dev-tasks',
        //   component: () => import('@/views/pages/dev/DevTask.vue'),
        //   children:[

        //     {
        //       path: '/dev-tasks/current',
        //       name: 'current-dev-tasks',
        //       component: () => import('@/views/pages/dev/CurrentDevTasks.vue'),
        //     },
        //     {
        //       path: '/dev-tasks/scheduled',
        //       name: 'scheduled-dev-tasks',
        //       component: () => import('@/views/pages/dev/ScheduleDevTasks.vue'),
        //     },
        //     {
        //       path: '/dev-tasks/history',
        //       name: 'history-dev-tasks',
        //       component: () => import('@/views/pages/dev/HistoryDevTasks.vue'),
        //     },

        //   ]
        // },

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
          path: '/innovation',
          name: 'innovation',
          component: () => import('@/views/pages/innovation/innovation.vue')
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
          component: () => import('@/views/pages/generarCertificado.vue'),
          meta:{permission:41},
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


          ]

        },

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

        {
          path: '/pages/crud',
          name: 'crud',
          component: () => import('@/views/pages/Crud.vue'),


        },

        
        {
          path: '/distrimonster',
          name: 'distrimonster',
          component: () => import('@/views/pages/Distrimonster.vue'),


        },
        {
          path: '/Tiendas',
          name: 'tiendas',
          component: () => import('@/views/pages/Tiendas.vue'),


        },
        {
          path: '/autorizar-permisos',
          name: 'autorizar',
          component: () => import('@/views/pages/autorizar-permisos.vue'),

        },

      ]
    },

    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/pages/auth/Login.vue')
    },

  ]
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




router.beforeEach(async (to, from, next) => {
  const store = loginStore();
  const token = store.userData.access_token;

  // Validar si el token es válido
  const validToken = await validateToken(token);

  if (!validToken.access_token) {
    if (to.path !== '/auth/login') {
      return next({ path: '/auth/login' });
    } else {
      return next(); // Si ya está en la página de login, continuar
    }
  }

  try {
    // Decodificar el token para obtener el rol del usuario
    const decoded = jwtDecode(token);
    if (!decoded?.rol) {
      console.error("Rol no encontrado en el token");
      return next({ path: '/auth/login' });
    }

    const userRole = decoded.rol.trim().toLowerCase();
    const permissions = decoded.permissions || [];

    // Verificar si el rol del usuario está autorizado para acceder a la ruta
    const isRoleAuthorized = to.matched.some(record => {
      const routeRol = record.meta?.permission || -1;
      return permissions.includes(routeRol);
    });

    // Permitir acceso si el rol está autorizado o si la ruta no tiene permisos específicos
    if (isRoleAuthorized || !to.matched.some(record => record.meta?.permission)) {
      next(); // Rol permitido o la ruta no requiere permisos específicos
    } else {
      // Mostrar alerta y cancelar navegación
      alert('No tienes permiso para entrar aquí');
      next(false); // Cancela la navegación
    }
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    next({ path: '/error' }); // Error en el token o en la decodificación
  }
});


export default router;



