<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { roles, obtenerRolesYActualizar } from '@/service/roles';
import { PrimeIcons } from 'primevue/api';
// import { getUserRole } from '../service/valoresReactivosCompartidos';
import { useDocumentsStore } from '../store/documentos';
import {loginStore} from '@/store/user.js'



const login = loginStore()

const permissions = ref([])
const documentStore = useDocumentsStore()

onBeforeMount( async() => {
     permissions.value =  await login.rawUserData.permissions
    //  console.log(permissions.value)
    // alert(permissions.value?.[0])
})


const calcSiteDocument = () => {
    if (documentStore.currentSite.site_id) {
        return `/site/${site_id}/documentos`
    } else {
        return '/site/1/documentos'
    }
}
const model = ref([]);

async function fetchAndUpdateRoles() {
    const updatedRoles = await obtenerRolesYActualizar(); // Espera a que la promesa se resuelva
    roles.value = updatedRoles; // Actualiza el estado reactivo de roles
    const get_id = (items) => {
    return items.find( i => permissions.value.includes(i))
    }
    model.value = [

        // {
        //     label: 'INICIO',
        //     roles: roles.value.todos,
        //     items: [
        //         {
        //             label: 'inicio', icon: 'fa-solid fa-house', to: '/',

        //         }]
        // },

        {
            label: 'VENTAS',
            items: [
                {
                    label: 'Tienda', icon: 'fa-solid fa-cart-shopping',
                    items: [
                        { label: 'Cocina', icon: ' fa-solid fa-burger', to: '/cocina/',permision_id: 1 },
                        { label: 'Menu', icon: ' fa-solid fa-burger', to: '/tienda-menu/productos/SALCHIPAPAS/3' ,permision_id: 2, },
                        { label: 'Reportes de ventas', icon: ' fa-solid fa-chart-line', to: '/reporte-ventas/order-sumary',permision_id: 3  },
                        { label: 'Domicilios', icon: ' fa-solid fa-truck-fast', to: '/domicilios/1' ,permision_id: 4 },
                        { label: 'Transferencias', icon: ' fa-solid fa-truck-fast', to: '/transfer/' ,permision_id: 5 },
                        { label: 'Ingresar pedido', icon: ' fa-solid fa-burger', to: '/call-center-vender',permision_id: 6 },
                        { label: 'Solicitudes de cancelacion', icon: ' fa-solid fa-burger', to: '/cancellation-requests/revisar/' ,permision_id: 7  },
                        { label: 'Control', icon: ' fa-solid fa-burger', to: '/cancellation-requests/revisar/'  },

                    ],
                    permision_id: get_id([1,2,3,4,5,6,7]),
                },
                {
                    label: 'Cajeros', icon: 'fa-solid fa-cart-shopping',
                    items: [
                        { label: 'Reportes', icon: ' fa-solid fa-burger', to: '/cachier-money/reportes/',permision_id: 1 },
                        { label: 'Registros', icon: ' fa-solid fa-burger', to: '/cachier-money/registros/',permision_id: 1 },
                        { label: 'Salidas', icon: ' fa-solid fa-burger', to: '/cachier-money/salidas/',permision_id: 1 },
                    ],
                    permision_id: get_id([1,2,3,4,5,6,7]),
                }]
        },



        {
            label: 'CONCURSOS',

            permision_id:get_id([53,54]),
           
           
            items: [
                {
                    label: 'Vigentes', icon: 'fa-database fa-solid', to: '/concursos',permision_id:53

                },
                {
                    label: 'Proximos', icon: 'fa-database fa-solid', to: '/future-concursos',permision_id:53

                },
                {
                    label: 'Finalizados ', icon: 'fa-solid fa-folder', to: '/completed-concursos',permision_id:53

                },

                {
                    label: 'Administrar ', icon: 'fa-solid fa-folder', to: '/manage-concursos',permision_id:54

                },


            ]
        },

        {
            label: 'INVENTARIO',
            
            items: [


            
                {
                        label: 'Recetario', icon: 'fa-solid fa-calendar',
                        permision_id: get_id([8,13,14]),
                        items: [
                            {
                                label: 'Ingredientes', icon: 'fa-solid fa-calendar', to: '/recetario/prices-cdi-table/',permision_id:8

                            },
                            {
                                label: 'recetas', icon: 'fa-solid fa-calendar', to: '/recetario/recetas/',permision_id:8

                            },
                            {
                            label: 'Configuracion', icon: 'fa-solid fa-calendar', to: '/recetario/configuracion/',permision_id:13

                            },
                            {
                                label: 'Resumen Beneficio', icon: 'fa-solid fa-calendar', to: '/recetario/recipe-sumary-benefit/',permision_id:14

                            },
                            
                        
                        ]

                    },



                {
                    label: 'Reportes de inventario diario', icon: 'fa-solid fa-calendar',
                    permision_id: get_id([10,11]),
                    items: [
                        {
                            label: 'Reportar inventario diario', icon: 'fa-solid fa-calendar', to: '/daily-inventory/report-inventory',permision_id:11

                        },
                        {
                            label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/daily-inventory/daily-inventory-reports',permision_id:10

                        },
                     
                    ]

                },


                {
                    label: 'Reportes de inventario Mensual', icon: 'fa-solid fa-calendar',
                    permision_id: get_id([17,18]),
                    items: [
                        {
                            label: 'Reportar inventario mensual', icon: 'fa-solid fa-calendar', to: '/monthly-inventory/report-monthly-inventory',permision_id:17

                        },
                        {
                            label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/monthly-inventory/monthly-inventory-reports',permision_id:18

                        },
                     
                    ]

                },

                // {
                //     label: 'Reportes de inventario Cdi', icon: 'fa-solid fa-calendar',
                //     permision_id:get_id([19,20]),
                //     items: [
                //         {
                //             label: 'Reportar inventario ', icon: 'fa-solid fa-calendar', to: '/cdi-inventory/report-inventory/',permision_id:20

                //         },
                //         {
                //             label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/cdi-inventory/cdi-inventory-reports/',permision_id:19

                //         },
                     
                //     ]

                // },


                {
                    label: 'Ordenes de compra', icon: 'fa-solid fa-calendar',
                    permision_id:get_id([21,22,23,24,25,26,27]),
                    items: [


                       


                        {
                            label: 'Nueva', icon: 'fa-solid fa-calendar', to: '/purchase-order/generate-purchase-order',permision_id: 21,

                        },

                        {
                            label: 'Generadas por mi', icon: 'fa-solid fa-calendar', to: '/purchase-order/purchase-order-my-orders/',permision_id: 21,

                        },


                        {
                            label: 'Alistar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/alistar/',permision_id: 22,

                        },

                        {
                            label: 'Autorizar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/autorizar',permision_id: 23,

                        },
                        {
                            label: 'Transportar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/transport/',permision_id: 24,

                        },


                        {
                            label: 'Recibir en la sede', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/recibida-en-sede/',permision_id: 25,

                        },


                        {
                            label: 'Completada', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/completed/',permision_id: 25,

                        },



                        {
                            label: 'Todas las ordenes', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/purchase-order-reports/',permision_id: 26,

                        },


                        {
                            label: 'Stock', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/purchase-order-settings/',permision_id: 27,

                        },
                    ]

                },

                

            ]
        },


        {
            label: 'RECURSOS HUMANOS',

            permision_id:get_id([28,29,30,31,32]),
            items: [
                {
                    label: 'Base de datos del personal', icon: 'fa-database fa-solid', to: '/pages/crud',permision_id: 28,

                },
                {
                    label: 'Contratos', icon: 'fa-database fa-solid', to: '/contracts/contracts-to-finish',permision_id: 29,

                },
                {
                    label: 'Gestion de cargos', icon: 'fa-database fa-solid', to: '/cargos',permision_id: 30,

                },
                // {
                //     label: 'Directorio ', icon: 'fa-solid fa-folder', to: '/directorio',permision_id: 31,

                // },

                {
                    label: 'Administrar PQRS ', icon: 'fa-solid fa-folder',to:'/pqrs/pagina_web/1' ,permision_id: 32,
                    

                },
                {
                    label: 'Requisicion de personal', icon: 'fa-solid fa-folder' ,permision_id: 32,
                    items:
                    [
                            {
                                label: 'Solicitudes', icon: 'fa-solid fa-folder',to:'/hiring/request-people/' ,permision_id: 32,
                            },
                            {
                                label: 'Aprobacion de solicitudes', icon: 'fa-solid fa-folder',to:'/hiring-authorize/requests' ,permision_id: 32,
                                
                            },
                            {
                                label: 'Seleccion y contratacion', icon: 'fa-solid fa-folder',to:'/hiring-hr/selection' ,permision_id: 32,
                            },

                        ]
                    

                },


            ]
        },

        {
            label: 'CALIDAD Y CONTROL',
   
            permision_id:get_id([33,34,35,36]),
            items: [


     
                {
                    label: 'Auditorias ', icon: 'fa-solid fa-folder', to: '/auditorias/lista',permision_id: 33,

                },
                // {
                //     label: 'Registrar horas ', icon: 'fa-solid fa-folder', to: '/horarios-trabajo',permision_id: 34,

                // },

                {
                    label: 'Configurar turnos ', icon: 'fa-solid fa-folder', to: '/turnos-trabajo',permision_id: 35,

                },
                // {
                //     label: 'Mantenimientos ', icon: 'fa-solid fa-folder', to: '/maintenance/equipment',permision_id: 36,

                // },





            ]
        },


        {
            label: 'ENTREGAS',
  
            permision_id:get_id([37]),
            
            items: [
                {
                    label: 'Dotacion', icon: 'fa-shirt fa-solid', to: '/dotacion', permision_id: 37,

                },



            ]
        },


        {
            label: 'CELEBRACIONES', icon: 'pi pi-fw pi-home', to: '/cumples',
            permision_id:get_id([38]),
            items: [
                {
                    label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples',permision_id: 38,
                }
            ]

        },

        {
            label: 'SEDES',

            permision_id:get_id([39]),
            items: [

                {
                    label: 'Documentos', icon: 'fa-solid fa-book', to: calcSiteDocument(),permision_id: 39,
                },



            ]
        },

        {
            label: 'GUIAS',
 
            permision_id:get_id([40]),
            items: [

                {
                    label: 'Gestion de guias', icon: 'fa-solid fa-book', to: '/guias',permision_id: 40,

                },



            ]
        },



        {
            label: 'CERTIFICADOS',
  
            permision_id:get_id([41]),
            items: [

                {
                    label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral',permision_id: 41,

                },


            ]
        },
        {
            label: 'SOLICITAR PERMISOS',
 
            permision_id:get_id([42]),
            items: [

                {
                    label: 'Vacaciones', icon: 'fa-solid fa-sun', to: '/permiso-vacaciones',permision_id: 42,

                },
                {
                    label: 'Licencia', icon: 'fa-solid fa-id-card', to: '/permiso-Licencia',permision_id: 42,

                },
                {
                    label: 'Permiso general', icon: 'fa-solid fa-person-walking-arrow-right', to: '/permiso',permision_id: 42,

                },
                {
                    label: 'Permisos solicitados', icon: 'fa-solid fa-list', to: '/mis-permisos',permision_id: 42,
            


                },


            ]
        },

        {
            label: ' MAS CERCA DE TI',
            roles: roles.value.todos,
            permision_id:get_id([43]),

            items: [

                {
                    label: 'Planeacíon Estrategica ', icon: 'fa-solid fa-dumbbell', to: '/mas-cerca-de-ti',permision_id: 43,

                },
                {
                    label: 'Un verdadero Monstruo', icon: 'fa-solid fa-chart-simple', to: '/informacion-empresarial',permision_id: 43,

                },

                {
                    label: 'Mis Turnos ', icon: 'fa-solid fa-dumbbell', to: '/turnos-trabajo-empleados',permision_id: 43,

                },
                {
                    label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-umbrella', to: '/clima',permision_id: 43,

                },


                {
                    label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-simple', to: '/desempeno',permision_id: 43,

                },
                {
                    label: 'Encuesta de retiro ', icon: 'fa-solid fa-umbrella', to: '/retiro',permision_id: 43,

                },
                {
                    label: 'PQRS ', icon: 'fa-solid fa-folder',to:'/pqrs-user',permision_id: 43,
                    

                },




            ]
        },


        {
            label: 'CAPACITACIONES',
            permision_id:get_id([44,45,46]),
            items: [

                // {
                //         label: 'Guias', icon: 'fa-solid fa-book', to: '/guias-user',

                //     },

                {
                    label: 'Agendar', icon: 'fa-solid fa-calendar', to: '/capacitaciones',permision_id: 44,

                },
                {
                    label: 'Mi formacion', icon: 'fa-solid fa-calendar', to: '/video-training-sequences/',permision_id: 45,

                },

                {
                    label: 'Administrar Escuelas', icon: 'fa-solid fa-calendar', to: '/video-training-video-sesion',permision_id: 46,

                },


                // {
                //     label: 'Invitaciones', icon: 'fa-solid fa-envelope', to: '/capacitaciones-invitaciones',

                // },
                {
                    label: 'Principal', icon: 'fa-solid fa-envelope',
                    permision_id:get_id([48,49]),
                    items: [
                        {
                            label: 'Recetario cucharas', icon: 'fa-solid fa-calendar', to: '/cucharas',permision_id: 48,

                        },
                        {
                            label: 'Organizacion', icon: 'fa-solid fa-envelope', to: '/samovar', permision_id: 49,

                        },

                        
                        // {
                        //     label: 'inventario', icon: 'fa-solid fa-envelope', to: '/inventory',

                        // },
                        // {
                        //     label: 'Org. Nevera doble ', icon: 'fa-solid fa-envelope', to: '/nevera-doble',

                        // },
                        // {
                        //     label: 'Org. Nevera triple', icon: 'fa-solid fa-envelope', to: '/nevera-triple',

                        // },

                    ]

                }

                ,


            ]
        },





        {
            label: 'Revisar',
  
            items: [

                {
                    label: 'Permisos', icon: 'fa-solid fa-person-through-window', to: '/permisos',

                },



            ]
        },



        {
            label: 'Datos',
            permision_id:get_id([50]),
            items: [

                {
                    label: 'Actualizar mis datos', icon: 'fa-solid fa-user', to: '/actualizar-datos', permision_id: 50,

                },


            ]
        },


        {
            label: 'Extras', icon: 'pi pi-fw pi-home', to: '/mis-permisos',

            permision_id:get_id([52]),
            items: [
                {
                    label: 'Mi carnet digital', icon: 'fa-solid fa-id-card', to: '/mi-carnet',permision_id: 52,
                },
                {
                    label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama',permision_id: 52,
                },

            ]


        },
    ];
}



onBeforeMount(async () => {
    await fetchAndUpdateRoles(); // Espera a que los roles se actualicen antes de montar el componente
});





</script>


<template>

    <ul class="layout-menu" style="">


        



        <div class="" v-for="(item, i) in model" :key="item">
            <app-menu-item 
            v-if="item.items.some( i => permissions.includes(i.permision_id))"   :item="item" :index="i"></app-menu-item>
      
        </div>

        
    </ul>

</template>

<style lang="scss" scoped></style>
