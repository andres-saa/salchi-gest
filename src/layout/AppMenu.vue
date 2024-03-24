<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { roles, obtenerRolesYActualizar } from '@/service/roles';
import { PrimeIcons } from 'primevue/api';
// import { getUserRole } from '../service/valoresReactivosCompartidos';


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
                        { label: 'Menu', icon: ' fa-solid fa-burger', to: '/tienda-menu/' },
                        { label: 'Domicilios', icon: ' fa-solid fa-truck-fast', to: '/domicilios/1' },
                        { label: 'Conectividad', icon: ' fa-solid fa-truck-fast', to: '/conectividad/' },
                        { label: 'Reportes de ventas', icon: ' fa-solid fa-chart-line', to: '/reporte-ventas/valor-ventas/' },

                    ]
                }]
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
            roles: roles.value['Gestion Humana'],
            items: [
 

                {
                    label: 'Auditorias ', icon: 'fa-solid fa-folder', to: '/auditorias/lista',

                },
                {
                    label: 'Horario y Turnos ', icon: 'fa-solid fa-folder', to: '/horarios-trabajo',

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
            roles:roles.value.todos,
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
                    label: 'Documentos', icon: 'fa-solid fa-book', to: '/site/1/documentos',

                },
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
                    label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-umbrella', to: '/clima',

                },

                {
                    label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-simple', to: '/desempeno',

                },




            ]
        },


        {
            label: 'CAPACITACIONES',
            roles: roles.value.todos,
            items: [

            {
                    label: 'Guias', icon: 'fa-solid fa-book', to: '/guias-user',

                },
               
                {
                    label: 'Agendar', icon: 'fa-solid fa-calendar', to: '/capacitaciones',

                },
                {
                    label: 'Invitaciones', icon: 'fa-solid fa-envelope', to: '/capacitaciones-invitaciones',

                },

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

<style lang="scss" scoped>

/* Para navegadores basados en WebKit como Chrome, Safari */
::-webkit-scrollbar {
    width: 8px; /* Controla el ancho de la barra de desplazamiento */
    height: 8px; /* Controla la altura de la barra de desplazamiento horizontal */
}

/* El track (o la pista) de la barra de desplazamiento */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color de fondo de la pista */
}

/* El handle (o el control deslizante) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
    background: #888; /* Color de fondo del deslizador */
}

/* El handle al pasar el mouse */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color de fondo del deslizador al pasar el mouse */
}

/* Para Firefox */
* {
  scrollbar-width: thin; /* "auto" o "thin" */
  scrollbar-color: #888 #f1f1f1; /* color del deslizador y color de la pista */
}


</style>
