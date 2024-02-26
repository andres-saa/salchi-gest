import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import { roles } from '../service/roles';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { jwtDecode } from 'jwt-decode';// import { roles } from '../service/roles';
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
                    path: '/tienda-menu',
                    name: 'menuTienda',
                    component: () => import('@/views/pages/tienda/MenuTienda.vue'),
                    children:[
                        {
                            path: '/tienda-menu/:adicionales',
                            name: 'tienda-adicionales',
                            component: () => import('@/views/pages/tienda/sesionAdicionales.vue')
                        },
                        {
                            path: '/tienda-menu/productos/:sesion',
                            name: 'tienda-productos',
                            component: () => import('@/views/pages/tienda/sesion.vue')
                        },
                        

                    ]
                },

                {
                    path: '/domicilios/',
                    name: 'domicilios',
                    component: () => import('@/views/pages/domicilios.vue'),
                    children:[
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
                path: '/reporte-ventas/',
                name: 'reporte-ventas',
                component: () => import('@/views/pages/reporteVentas.vue'),
                children:[
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
          }

                ]
            },
                // {
                //     path: '/uikit/input',
                //     name: 'input',
                //     component: () => import('@/views/uikit/Input.vue')
                // },
                // {
                //     path: '/uikit/floatlabel',
                //     name: 'floatlabel',
                //     component: () => import('@/views/uikit/FloatLabel.vue')
                // },
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
                path: '/conectividad',
                name: 'conectividad',
                component: () => import('@/views/pages/conectividad.vue')
            },


              {
                path: '/guias',
                name: 'guias',
                component: () => import('@/views/pages/Guias.vue')
            },
                {
                    path: '/cumples',
                    name: 'cumples',
                    component: () => import('@/views/pages/cumples.vue')
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
                  children:[
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
                    children:[
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
                    children:[
                        {
                            path: '/mis-permisos/:tipo',
                            name: 'mis-permisotipo',
                            component: () => import('@/views/pages/miPermisoType.vue'),
                            meta: { roles: roles.value.todos }, // Asignación correcta dentro de 'meta'
                            children:[
                                {
                                    path: '/mis-permisos/:tipo/:status',
                                    name: 'mis-permisoestado',
                                    component: () => import('@/views/pages/miPermisoStatus.vue'),

                                  },

                            ]
        
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
                    meta: { roles: roles.value.adminTienda } // Asignación correcta dentro de 'meta'

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


router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    // Verifica si hay un token
    if (!token) {
        // Si la ruta actual no es la de login, redirige al login
        if (to.path !== '/auth/login') {
            next({ path: '/auth/login' });
        } else {
            next(); // Si ya está en la página de login, continúa
        }
    } else {
        try {
            const decoded = jwtDecode(token);

            if (!decoded || !decoded.rol) {
                console.error("Rol no encontrado en el token");
                next({ path: '/error' });
                return;
            }

            const userRole = decoded.rol.trim().toLowerCase();

            const isRoleAuthorized = to.matched.some(record => {
                if (!record.meta || !record.meta.roles) {
                    return false;
                }

                const routeRoles = record.meta.roles.map(role => role.trim().toLowerCase());
                return routeRoles.includes(userRole);
            });

            if (isRoleAuthorized || !to.matched.some(record => record.meta?.roles)) {
                next(); // Rol permitido o no se requiere control de rol
            } else {
                next({ path: '/acceso-denegado' }); // Rol no permitido
            }
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            next({ path: '/error' }); // Error en el token o en la decodificación
        }
    }
});








export default router;
  


