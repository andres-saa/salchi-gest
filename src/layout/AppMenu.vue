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
    //             'icon-color': '#FF5733', // Ejemplo de color vivo
    //         }
    //     ]
    // },

    {
        label: 'VENTAS',
        icon: 'fa-solid fa-cash-register',
        'icon-color': '#FF5733', // Rojo vivo
        items: [
            {
                label: 'Tienda',
                icon: 'fa-solid fa-store',
                'icon-color': '#FF8D1A', // Naranja vibrante
                items: [
                    { label: 'Cocina', icon: 'fa-solid fa-utensils', to: '/cocina/', permision_id: 1, 'icon-color': '#FFC300' }, // Amarillo
                    { label: 'Menu', icon: 'fa-solid fa-book-open', to: '/tienda-menu/productos/SALCHIPAPAS/3', permision_id: 2, 'icon-color': '#DAF7A6' }, // Verde claro
                    { label: 'Reportes de ventas', icon: 'fa-solid fa-chart-line', to: '/reporte-ventas/order-sumary', permision_id: 3, 'icon-color': '#C70039' }, // Rojo intenso
                    { label: 'Domicilios', icon: 'fa-solid fa-truck-fast', to: '/domicilios/1', permision_id: 4, 'icon-color': '#900C3F' }, // Burdeos
                    { label: 'Transferencias', icon: 'fa-solid fa-right-left', to: '/transfer/', permision_id: 5, 'icon-color': '#581845' }, // Púrpura oscuro
                    { label: 'Ingresar pedido', icon: 'fa-solid fa-cart-plus', to: '/call-center-vender', permision_id: 6, 'icon-color': '#FFC0CB' }, // Rosa
                    { label: 'Solicitudes de cancelacion', icon: 'fa-solid fa-ban', to: '/cancellation-requests/revisar/', permision_id: 7, 'icon-color': '#FF4500' }, // Naranja rojizo
                    { label: 'Control', icon: 'fa-solid fa-sliders', to: '/cancellation-requests/revisar/', 'icon-color': '#1E90FF' }, // Azul
                    { label: 'Info sedes ', icon: 'fa-solid fa-building', to: '/directorio', permision_id: 31, 'icon-color': '#32CD32' }, // Verde lima
                ],
                permision_id: get_id([1,2,3,4,5,6,7,31]),
            },
            {
                label: 'Cajeros',
                icon: 'fa-solid fa-cash-register',
                'icon-color': '#FF69B4', // Rosa vibrante
                items: [
                    { label: 'Reportes', icon: 'fa-solid fa-file-invoice-dollar', to: '/cachier-money/reportes/', permision_id: 1, 'icon-color': '#FF1493' }, // Rosa oscuro
                    { label: 'Registros', icon: 'fa-solid fa-book', to: '/cachier-money/registros/', permision_id: 1, 'icon-color': '#ADFF2F' }, // Verde amarillento
                    { label: 'Salidas', icon: 'fa-solid fa-money-bill-trend-up', to: '/cachier-money/salidas/', permision_id: 1, 'icon-color': '#00CED1' }, // Turquesa
                ],
                permision_id: get_id([1,2,3,4,5,6,7]),
            }
        ]
    },

    {
        label: 'MONSTER LIVE',
        icon: 'fa-solid fa-sync',
        'icon-color': 'yellow', // Verde lima
        permision_id: get_id([50]),
        items: [
            { label: 'Sonando', icon: 'fa-solid fa-music', to: '/sonando', permision_id: 50, 'icon-color': '#FF4500' }, // Naranja rojizo
        ]
    },

    {
        label: 'CONCURSOS',
        icon: 'fa-solid fa-trophy',
        'icon-color': '#FFD700', // Oro
        permision_id: get_id([53,54]),
        items: [
            { label: 'Vigentes', icon: 'fa-solid fa-play', to: '/concursos', permision_id: 53, 'icon-color': '#32CD32' }, // Verde lima
            { label: 'Proximos', icon: 'fa-solid fa-forward', to: '/future-concursos', permision_id: 53, 'icon-color': '#FF8C00' }, // Naranja oscuro
            { label: 'Finalizados ', icon: 'fa-solid fa-flag-checkered', to: '/completed-concursos', permision_id: 53, 'icon-color': '#8A2BE2' }, // Azul violeta
            { label: 'Administrar ', icon: 'fa-solid fa-gear', to: '/manage-concursos', permision_id: 54, 'icon-color': '#DC143C' }, // Carmesí
        ]
    },

    {
        label: 'FRANQUICIAS',
        icon: 'fa-solid fa-handshake',
        'icon-color': '#7CFC00', // Verde césped
        permision_id: get_id([53,54]),
        items: [
            { label: 'Solicitudes', icon: 'fa-solid fa-clipboard-list', to: '/franquicias', permision_id: 53, 'icon-color': '#FF6347' }, // Tomate
        ]
    },

    {
        label: 'INVENTARIO',
        icon: 'fa-solid fa-boxes-stacked',
        'icon-color': '#4682B4', // Azul acero
        items: [
            {
                label: 'Recetario',
                icon: 'fa-solid fa-book',
                'icon-color': '#6A5ACD', // Azul pizarra medio
                permision_id: get_id([8,13,14]),
                items: [
                    { label: 'Ingredientes', icon: 'fa-solid fa-carrot', to: '/recetario/prices-cdi-table/', permision_id: 8, 'icon-color': '#FFA500' }, // Naranja
                    { label: 'recetas', icon: 'fa-solid fa-utensils', to: '/recetario/recetas/', permision_id: 8, 'icon-color': '#FF69B4' }, // Rosa vibrante
                    { label: 'Configuracion', icon: 'fa-solid fa-gears', to: '/recetario/configuracion/', permision_id: 13, 'icon-color': '#4B0082' }, // Índigo
                    { label: 'Resumen Beneficio', icon: 'fa-solid fa-chart-pie', to: '/recetario/recipe-sumary-benefit/', permision_id: 14, 'icon-color': '#00FF7F' }, // Verde primavera
                ]
            },
            {
                label: 'Reportes de inventario diario',
                icon: 'fa-solid fa-calendar-day',
                'icon-color': '#FF4500', // Naranja rojizo
                permision_id: get_id([10,11]),
                items: [
                    { label: 'Reportar inventario diario', icon: 'fa-solid fa-edit', to: '/daily-inventory/report-inventory', permision_id: 11, 'icon-color': '#1E90FF' }, // Azul dodger
                    { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/daily-inventory/daily-inventory-reports', permision_id: 10, 'icon-color': '#32CD32' }, // Verde lima
                ]
            },
            {
                label: 'Reportes de inventario Mensual',
                icon: 'fa-solid fa-calendar-days',
                'icon-color': '#FF69B4', // Rosa vibrante
                permision_id: get_id([17,18]),
                items: [
                    { label: 'Reportar inventario mensual', icon: 'fa-solid fa-file-circle-plus', to: '/monthly-inventory/report-monthly-inventory', permision_id: 17, 'icon-color': '#FFD700' }, // Oro
                    { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/monthly-inventory/monthly-inventory-reports', permision_id: 18, 'icon-color': '#7FFF00' }, // Verde chartreuse
                ]
            },
            // {
            //     label: 'Reportes de inventario Cdi', icon: 'fa-solid fa-calendar',
            //     permision_id:get_id([19,20]),
            //     items: [
            //         {
            //             label: 'Reportar inventario ', icon: 'fa-solid fa-calendar', to: '/cdi-inventory/report-inventory/',permision_id:20,
            //             'icon-color': '#FF1493' // Rosa oscuro
            //         },
            //         {
            //             label: 'Revisar reportes', icon: 'fa-solid fa-calendar', to: '/cdi-inventory/cdi-inventory-reports/',permision_id:19,
            //             'icon-color': '#00FA9A' // Verde menta
            //         },
            //     ]
            // },
            {
                label: 'Ordenes de compra',
                icon: 'fa-solid fa-shopping-cart',
                'icon-color': '#FF6347', // Tomate
                permision_id: get_id([21,22,23,24,25,26,27]),
                items: [
                    { label: 'Nueva', icon: 'fa-solid fa-file-circle-plus', to: '/purchase-order/generate-purchase-order', permision_id: 21, 'icon-color': '#FF4500' }, // Naranja rojizo
                    { label: 'Generadas por mi', icon: 'fa-solid fa-folder-open', to: '/purchase-order/purchase-order-my-orders/', permision_id: 21, 'icon-color': '#1E90FF' }, // Azul dodger
                    { label: 'Alistar', icon: 'fa-solid fa-clipboard-check', to: '/purchase-order/recorrido/alistar/', permision_id: 22, 'icon-color': '#32CD32' }, // Verde lima
                    { label: 'Autorizar', icon: 'fa-solid fa-check-double', to: '/purchase-order/recorrido/autorizar', permision_id: 23, 'icon-color': '#DA70D6' }, // Orquídea
                    { label: 'Transportar', icon: 'fa-solid fa-truck', to: '/purchase-order/recorrido/transport/', permision_id: 24, 'icon-color': '#FF8C00' }, // Naranja oscuro
                    { label: 'Recibir en la sede', icon: 'fa-solid fa-building-circle-check', to: '/purchase-order/recorrido/recibida-en-sede/', permision_id: 25, 'icon-color': '#00CED1' }, // Turquesa oscuro
                    { label: 'Completada', icon: 'fa-solid fa-circle-check', to: '/purchase-order/recorrido/completed/', permision_id: 25, 'icon-color': '#32CD32' }, // Verde lima
                    { label: 'Todas las ordenes', icon: 'fa-solid fa-list-ol', to: '/purchase-order/recorrido/purchase-order-reports/', permision_id: 26, 'icon-color': '#8A2BE2' }, // Azul violeta
                    { label: 'Stock', icon: 'fa-solid fa-boxes-packing', to: '/purchase-order/recorrido/purchase-order-settings/', permision_id: 27, 'icon-color': '#FF1493' }, // Rosa oscuro
                ]
            },
        ]
    },

    {
        label: 'RECURSOS HUMANOS',
        icon: 'fa-solid fa-user-group',
        'icon-color': '#FF69B4', // Rosa vibrante
        permision_id: get_id([28,29,30,31,32]),
        items: [
            { label: 'Base de datos del personal', icon: 'fa-solid fa-database', to: '/pages/crud', permision_id: 28, 'icon-color': '#00BFFF' }, // Azul profundo
            { label: 'Contratos', icon: 'fa-solid fa-file-contract', to: '/contracts/contracts-to-finish', permision_id: 29, 'icon-color': '#FF4500' }, // Naranja rojizo
            { label: 'Gestion de cargos', icon: 'fa-solid fa-user-gear', to: '/cargos', permision_id: 30, 'icon-color': '#32CD32' }, // Verde lima
            {
                label: 'Requisicion de personal',
                icon: 'fa-solid fa-user-plus',
                'icon-color': '#FFD700', // Oro
                permision_id: 32,
                items: [
                    { label: 'Solicitudes', icon: 'fa-solid fa-file-circle-plus', to: '/hiring/request-people/', permision_id: 32, 'icon-color': '#FF69B4' }, // Rosa vibrante
                    { label: 'Aprobacion de solicitudes', icon: 'fa-solid fa-thumbs-up', to: '/hiring-authorize/requests', permision_id: 32, 'icon-color': '#1E90FF' }, // Azul dodger
                    { label: 'Seleccion y contratacion', icon: 'fa-solid fa-user-check', to: '/hiring-hr/selection', permision_id: 32, 'icon-color': '#32CD32' }, // Verde lima
                ]
            },
        ]
    },

    {
        label: 'ATENCION AL CLIENTE',
        icon: 'fa-solid fa-headset',
        'icon-color': '#00CED1', // Turquesa oscuro
        permision_id: get_id([32]),
        items: [
            { label: 'Administrar PQRS ', icon: 'fa-solid fa-folder-tree', to: '/pqrs/pagina_web/1', permision_id: 55, 'icon-color': '#FF6347' }, // Tomate
        ]
    },

    {
        label: 'CALIDAD Y CONTROL',
        icon: 'fa-solid fa-clipboard-check',
        'icon-color': '#32CD32', // Verde lima
        permision_id: get_id([33,34,35,36]),
        items: [
            { label: 'Auditorias ', icon: 'fa-solid fa-list-check', to: '/auditorias/lista', permision_id: 33, 'icon-color': '#FFD700' }, // Oro
            // { label: 'Registrar horas ', icon: 'fa-solid fa-folder', to: '/horarios-trabajo', permision_id: 34 },
            { label: 'Configurar turnos ', icon: 'fa-solid fa-clock', to: '/turnos-trabajo', permision_id: 35, 'icon-color': '#FF8C00' }, // Naranja oscuro
            // { label: 'Mantenimientos ', icon: 'fa-solid fa-folder', to: '/maintenance/equipment', permision_id: 36 },
        ]
    },

    {
        label: 'ENTREGAS',
        icon: 'fa-solid fa-truck-moving',
        'icon-color': '#FF4500', // Naranja rojizo
        permision_id: get_id([37]),
        items: [
            { label: 'Dotacion', icon: 'fa-solid fa-shirt', to: '/dotacion', permision_id: 37, 'icon-color': '#FF1493' }, // Rosa oscuro
        ]
    },

    {
        label: 'CELEBRACIONES',
        icon: 'fa-solid fa-cake-candles',
        'icon-color': '#FF69B4', // Rosa vibrante
        to: '/cumples',
        permision_id: get_id([38]),
        items: [
            { label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples', permision_id: 38, 'icon-color': '#FFD700' } // Oro
        ]
    },

    {
        label: 'SEDES',
        icon: 'fa-solid fa-building',
        'icon-color': '#8A2BE2', // Azul violeta
        permision_id: get_id([39]),
        items: [
            { label: 'Documentos', icon: 'fa-solid fa-file-lines', to: calcSiteDocument(), permision_id: 39, 'icon-color': '#1E90FF' }, // Azul dodger
        ]
    },

    {
        label: 'GUIAS',
        icon: 'fa-solid fa-book-open',
        'icon-color': '#7FFF00', // Verde chartreuse
        permision_id: get_id([40]),
        items: [
            { label: 'Gestion de guias', icon: 'fa-solid fa-book', to: '/guias', permision_id: 40, 'icon-color': '#FF69B4' }, // Rosa vibrante
        ]
    },

    {
        label: 'CERTIFICADOS',
        icon: 'fa-solid fa-award',
        'icon-color': '#FFD700', // Oro
        permision_id: get_id([41]),
        items: [
            { label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral', permision_id: 41, 'icon-color': '#FF4500' }, // Naranja rojizo
        ]
    },

    {
        label: 'SOLICITAR PERMISOS',
        icon: 'fa-solid fa-calendar-check',
        'icon-color': '#32CD32', // Verde lima
        permision_id: get_id([42]),
        items: [
            { label: 'Vacaciones', icon: 'fa-solid fa-umbrella-beach', to: '/permiso-vacaciones', permision_id: 42, 'icon-color': '#1E90FF' }, // Azul dodger
            { label: 'Licencia', icon: 'fa-solid fa-id-card', to: '/permiso-Licencia', permision_id: 42, 'icon-color': '#FF1493' }, // Rosa oscuro
            { label: 'Permiso general', icon: 'fa-solid fa-calendar-check', to: '/permiso', permision_id: 42, 'icon-color': '#FFA500' }, // Naranja
            { label: 'Permisos solicitados', icon: 'fa-solid fa-list', to: '/mis-permisos', permision_id: 42, 'icon-color': '#00FA9A' }, // Verde menta
        ]
    },

    {
        label: ' MAS CERCA DE TI',
        icon: 'fa-solid fa-hand-holding-heart',
        'icon-color': '#FF69B4', // Rosa vibrante
        roles: roles.value.todos,
        permision_id: get_id([43]),
        items: [
            { label: 'Planeacíon Estrategica ', icon: 'fa-solid fa-lightbulb', to: '/mas-cerca-de-ti', permision_id: 43, 'icon-color': '#FFFF00' }, // Amarillo
            { label: 'Un verdadero Monstruo', icon: 'fa-solid fa-ghost', to: '/informacion-empresarial', permision_id: 43, 'icon-color': '#8A2BE2' }, // Azul violeta
            { label: 'Mis Turnos ', icon: 'fa-solid fa-business-time', to: '/turnos-trabajo-empleados', permision_id: 43, 'icon-color': '#00CED1' }, // Turquesa oscuro
            { label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-cloud-sun', to: '/clima', permision_id: 43, 'icon-color': '#FFA07A' }, // Salmón claro
            { label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-line', to: '/desempeno', permision_id: 43, 'icon-color': '#32CD32' }, // Verde lima
            { label: 'Encuesta de retiro ', icon: 'fa-solid fa-door-open', to: '/retiro', permision_id: 43, 'icon-color': '#FF4500' }, // Naranja rojizo
            { label: 'PQRS ', icon: 'fa-solid fa-question', to: '/pqrs-user', permision_id: 43, 'icon-color': '#FF1493' }, // Rosa oscuro
        ]
    },

    {
        label: 'CAPACITACIONES',
        icon: 'fa-solid fa-chalkboard-user',
        'icon-color': '#1E90FF', // Azul dodger
        permision_id: get_id([44,45,46]),
        items: [
            // { label: 'Guias', icon: 'fa-solid fa-book', to: '/guias-user', },
            { label: 'Agendar', icon: 'fa-solid fa-calendar-plus', to: '/capacitaciones', permision_id: 44, 'icon-color': '#32CD32' }, // Verde lima
            { label: 'Mi formacion', icon: 'fa-solid fa-chalkboard-user', to: '/video-training-sequences/', permision_id: 45, 'icon-color': '#FFD700' }, // Oro
            { label: 'Administrar Escuelas', icon: 'fa-solid fa-school', to: '/video-training-video-sesion', permision_id: 46, 'icon-color': '#FF8C00' }, // Naranja oscuro
            // { label: 'Invitaciones', icon: 'fa-solid fa-envelope', to: '/capacitaciones-invitaciones', },
            {
                label: 'Principal',
                icon: 'fa-solid fa-house',
                'icon-color': '#00FA9A', // Verde menta
                permision_id: get_id([48,49]),
                items: [
                    { label: 'Recetario cucharas', icon: 'fa-solid fa-utensil-spoon', to: '/cucharas', permision_id: 48, 'icon-color': '#FF6347' }, // Tomate
                    { label: 'Organizacion', icon: 'fa-solid fa-sitemap', to: '/samovar', permision_id: 49, 'icon-color': '#8A2BE2' }, // Azul violeta
                ]
            },
        ]
    },

    {
        label: 'Revisar',
        icon: 'fa-solid fa-check-double',
        'icon-color': '#32CD32', // Verde lima
        permision_id: get_id([50]),
        items: [
            { label: 'Permisos', icon: 'fa-solid fa-file-invoice', to: '/permisos', permision_id: 50, 'icon-color': '#FF4500' }, // Naranja rojizo
        ]
    },

    {
        label: 'Datos',
        icon: 'fa-solid fa-database',
        'icon-color': '#00BFFF', // Azul profundo
        permision_id: get_id([50]),
        items: [
            { label: 'Actualizar mis datos', icon: 'fa-solid fa-user-pen', to: '/actualizar-datos', permision_id: 50, 'icon-color': '#FF1493' }, // Rosa oscuro
        ]
    },

    {
        label: 'Extras',
        icon: 'fa-solid fa-ellipsis',
        'icon-color': '#FF69B4', // Rosa vibrante
        to: '/mis-permisos',
        permision_id: get_id([52]),
        items: [
            { label: 'Mi carnet digital', icon: 'fa-solid fa-id-badge', to: '/mi-carnet', permision_id: 52, 'icon-color': '#FFD700' }, // Oro
            { label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama', permision_id: 52, 'icon-color': '#1E90FF' }, // Azul dodger
        ]
    },
];

}



onBeforeMount(async () => {
    await fetchAndUpdateRoles(); // Espera a que los roles se actualicen antes de montar el componente
});





</script>


<template>

    <ul class="layout-menu" style="padding-bottom: 6rem;">


        



        <div class="" v-for="(item, i) in model" :key="item">
            <app-menu-item 
            v-if="item.items.some( i => permissions.includes(i.permision_id))"   :item="item" :index="i"></app-menu-item>
      
        </div>

        
    </ul>

</template>

<style lang="scss" scoped></style>
