<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { roles, obtenerRolesYActualizar } from '@/service/roles';
import { PrimeIcons } from 'primevue/api';
// import { getUserRole } from '../service/valoresReactivosCompartidos';
import { useDocumentsStore } from '../store/documentos';

const documentStore = useDocumentsStore()


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

    model.value = [

        {
            label: 'INICIO',
            roles: roles.value.todos,
            items: [
                {
                    label: 'inicio', icon: 'fa-solid fa-house', to: '/',

                }]
        },

        {
            label: 'VENTAS',
            roles: roles.value.adminTienda,
            items: [
                {
                    label: 'Tienda', icon: 'fa-solid fa-cart-shopping',
                    items: [
                        { label: 'Menu', icon: ' fa-solid fa-burger', to: '/tienda-menu/productos/SALCHIPAPAS/3' },
                        { label: 'Cocina', icon: ' fa-solid fa-burger', to: '/cocina/' },

                        { label: 'Domicilios', icon: ' fa-solid fa-truck-fast', to: '/domicilios/1' },
                        { label: 'Conectividad', icon: ' fa-solid fa-truck-fast', to: '/conectividad/' },
                        { label: 'Reportes de ventas', icon: ' fa-solid fa-chart-line', to: '/reporte-ventas/valor-ventas/' },
                        { label: 'Solicitudes de cancelacion', icon: ' fa-solid fa-burger', to: '/cancellation-requests/revisar/' },

                    ]
                }]
        },

        {
            label: 'INVENTARIO',
            roles: roles.value.todos,
            items: [



                {
                    label: 'Reportes de inventario diario', icon: 'fa-solid fa-calendar',
                    items: [
                        {
                            label: 'Reportar inventario diario', icon: 'fa-solid fa-calendar', to: '/daily-inventory/report-inventory',

                        },
                        {
                            label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/daily-inventory/daily-inventory-reports',

                        },
                     
                    ]

                },


                {
                    label: 'Reportes de inventario Mensual', icon: 'fa-solid fa-calendar',
                    items: [
                        {
                            label: 'Reportar inventario mensual', icon: 'fa-solid fa-calendar', to: '/monthly-inventory/report-monthly-inventory',

                        },
                        {
                            label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/monthly-inventory/monthly-inventory-reports',

                        },
                     
                    ]

                },


                {
                    label: 'Ordenes de compra', icon: 'fa-solid fa-calendar',
                    items: [


                        {
                            label: 'Nueva', icon: 'fa-solid fa-calendar', to: '/purchase-order/generate-purchase-order',

                        },

                        {
                            label: 'Generadas por mi', icon: 'fa-solid fa-calendar', to: '/purchase-order/purchase-order-my-orders/',

                        },


                        {
                            label: 'Alistar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/alistar/',

                        },

                        {
                            label: 'Autorizar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/autorizar',

                        },
                        {
                            label: 'Transportar', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/transport/',

                        },

                        {
                            label: 'Completada', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/completed/',

                        },



                        {
                            label: 'Todas las ordenes', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/purchase-order-reports/',

                        },


                        {
                            label: 'Stock', icon: 'fa-solid fa-calendar', to: '/purchase-order/recorrido/purchase-order-settings/',

                        },
                    ]

                },

                // {
                //     label: 'Recetas', icon: 'fa-solid fa-envelope', to: '/recipes',

                // }

            ]
        },


        {
            label: 'RECURSOS HUMANOS',
            roles: roles.value['Gestion Humana'],
            items: [
                {
                    label: 'Base de datos del personal', icon: 'fa-database fa-solid', to: '/pages/crud',

                },
                {
                    label: 'Gestion de cargos', icon: 'fa-database fa-solid', to: '/cargos',

                },
                {
                    label: 'Directorio ', icon: 'fa-solid fa-folder', to: '/directorio',

                },


            ]
        },

        {
            label: 'CALIDAD Y CONTROL',
            roles: roles.value['Calidad y control'],
            items: [


                {
                    label: 'Auditorias ', icon: 'fa-solid fa-folder', to: '/auditorias/lista',

                },
                {
                    label: 'Registrar horas ', icon: 'fa-solid fa-folder', to: '/horarios-trabajo',

                },

                {
                    label: 'Configurar turnos ', icon: 'fa-solid fa-folder', to: '/turnos-trabajo',

                },
                {
                    label: 'Mantenimientos ', icon: 'fa-solid fa-folder', to: '/maintenance/equipment',

                },





            ]
        },


        {
            label: 'ENTREGAS',
            roles: roles.value['Dotacion'],
            items: [
                {
                    label: 'Dotacion', icon: 'fa-shirt fa-solid', to: '/dotacion',

                },



            ]
        },


        {
            label: 'CELEBRACIONES', icon: 'pi pi-fw pi-home', to: '/cumples',
            roles: roles.value.todos,
            items: [
                {
                    label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples',
                }
            ]

        },

        {
            label: 'SEDES',
            roles: roles.value.documentos,
            items: [

                {
                    label: 'Documentos', icon: 'fa-solid fa-book', to: calcSiteDocument(),
                },



            ]
        },

        {
            label: 'GUIAS',
            roles: roles.value.Guias,
            items: [

                {
                    label: 'Gestion de guias', icon: 'fa-solid fa-book', to: '/guias',

                },



            ]
        },



        {
            label: 'CERTIFICADOS',
            roles: roles.value.todos,
            items: [

                {
                    label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral',

                },


            ]
        },
        {
            label: 'SOLICITAR PERMISOS',
            roles: roles.value.todos,
            items: [

                {
                    label: 'Vacaciones', icon: 'fa-solid fa-sun', to: '/permiso-vacaciones',

                },
                {
                    label: 'Licencia', icon: 'fa-solid fa-id-card', to: '/permiso-Licencia',

                },
                {
                    label: 'Permiso general', icon: 'fa-solid fa-person-walking-arrow-right', to: '/permiso'

                },
                {
                    label: 'Permisos solicitados', icon: 'fa-solid fa-list', to: '/mis-permisos',
                    roles: roles.value.todos,


                },


            ]
        },

        {
            label: ' MAS CERCA DE TI',
            roles: roles.value.todos,
            items: [

                {
                    label: 'Planeacíon Estrategica ', icon: 'fa-solid fa-dumbbell', to: '/mas-cerca-de-ti',

                },
                {
                    label: 'Un verdadero Monstruo', icon: 'fa-solid fa-chart-simple', to: '/informacion-empresarial',

                },

                {
                    label: 'Mis Turnos ', icon: 'fa-solid fa-dumbbell', to: '/turnos-trabajo-empleados',

                },
                {
                    label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-umbrella', to: '/clima',

                },


                {
                    label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-simple', to: '/desempeno',

                },
                {
                    label: 'Encuesta de retiro ', icon: 'fa-solid fa-umbrella', to: '/retiro',

                },




            ]
        },


        {
            label: 'CAPACITACIONES',
            roles: roles.value.todos,
            items: [

                // {
                //         label: 'Guias', icon: 'fa-solid fa-book', to: '/guias-user',

                //     },

                {
                    label: 'Agendar', icon: 'fa-solid fa-calendar', to: '/capacitaciones',

                },
                {
                    label: 'Invitaciones', icon: 'fa-solid fa-envelope', to: '/capacitaciones-invitaciones',

                },
                {
                    label: 'Principal', icon: 'fa-solid fa-envelope',
                    items: [
                        {
                            label: 'Recetario cucharas', icon: 'fa-solid fa-calendar', to: '/cucharas',

                        },
                        {
                            label: 'Organizacion', icon: 'fa-solid fa-envelope', to: '/samovar',

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
            roles: roles.value['Gestion Humana'],
            items: [

                {
                    label: 'Permisos', icon: 'fa-solid fa-person-through-window', to: '/permisos',

                },



            ]
        },



        {
            label: 'Datos',
            roles: roles.value.todos,
            items: [

                {
                    label: 'Actualizar mis datos', icon: 'fa-solid fa-user', to: '/actualizar-datos',

                },


            ]
        },


        {
            label: 'Extras', icon: 'pi pi-fw pi-home', to: '/mis-permisos',
            roles: roles.value.todos,
            items: [
                {
                    label: 'Mi carnet digital', icon: 'fa-solid fa-id-card', to: '/mi-carnet',
                },
                {
                    label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama',
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

    <ul class="layout-menu" style="position: relative;">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="item.roles?.includes(getUserRole())" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>



    </ul>
    <!-- <Button style="position: fixed;top: 50%;left: 22rem;"><i :class="PrimeIcons.ANGLE_DOUBLE_LEFT"></i></Button> -->
</template>

<style lang="scss" scoped></style>
