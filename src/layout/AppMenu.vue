<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { roles } from '../service/roles';
// import { getUserRole } from '../service/valoresReactivosCompartidos';
const model = ref([

{
        label: 'INICIO',
        roles:roles.todos,
        items: [
            {
                label: 'inicio', icon: 'fa-solid fa-house', to: '/',

            }]
    },
    
    {
        label: 'PRINCIPAL',
        roles:roles.adminTienda,
        items: [
            {
                label: 'Tienda', icon: 'fa-solid fa-cart-shopping', to: '/',
                items: [
                    {label: 'Menu',icon: ' fa-solid fa-burger', to: '/tienda-menu/'},
                    {label: 'Domicilios',icon: ' fa-solid fa-truck-fast', to: '/domicilios'},





                ]
            }]
    },


    {
        label: 'RECURSOS HUMANOS',
        roles:roles.adminTienda,
        items: [
            {
                label: 'Base de datos del personal', icon: 'fa-database fa-solid', to: '/pages/crud',
               
            },
            
           
        
        ]
    },

    {
                label: 'CELEBRACIONES', icon: 'pi pi-fw pi-home', to: '/cumples',
                roles:roles.todos,
                items:[
                    {
                        label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples',
                    }
                ]
                
            },

    {
        label: 'SEDES',
        roles:roles.documentos,
        items: [
            // {
            //     label: 'Base de datos del personal', icon: 'pi pi-fw pi-home', to: '/pages/crud',
               
            // },
            // {
            //     label: 'Celebraciond de cumpleanos', icon: 'pi pi-fw pi-home', to: '/cumples',
                
            // },
            {
                label: 'Documentos', icon: 'fa-solid fa-book', to: '/sites',
                
            },

            // {
            //     label: 'Auditorias', icon: 'pi pi-fw pi-home', to: '/sites',
                
            // }
        
        ]
    },

    {
        label: 'CERTIFICADOS',
        roles:roles.todos,
        items: [
            // {
            //     label: 'Base de datos del personal', icon: 'pi pi-fw pi-home', to: '/pages/crud',
               
            // },
            // {
            //     label: 'Celebraciond de cumpleanos', icon: 'pi pi-fw pi-home', to: '/cumples',
                
            // },
            {
                label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral',
                
            },
            

            // {
            //     label: 'Auditorias', icon: 'pi pi-fw pi-home', to: '/sites',
                
            // }
        
        ]
    },
    {
        label: 'SOLICITAR PERMISOS',
        roles:roles.todos,
        items: [
            // {
            //     label: 'Base de datos del personal', icon: 'pi pi-fw pi-home', to: '/pages/crud',
               
            // },
            // {
            //     label: 'Celebraciond de cumpleanos', icon: 'pi pi-fw pi-home', to: '/cumples',
                
            // },
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
                roles:roles.todos, 
                
                
            },
           
            
            
            

            // {
            //     label: 'Auditorias', icon: 'pi pi-fw pi-home', to: '/sites',
                
            // }
        
        ]
    },

    {
        label: 'GESTION HUMANA MAS CERCA DE TI',
        roles:roles.todos,
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
        roles:roles.todos,
        items: [

            {
                label: 'Agendar', icon: 'fa-solid fa-calendar', to: '/capacitaciones',
                
            },
            {
                label: 'Invitaciones', icon: 'fa-solid fa-envelope', to: '/capacitaciones-invitaciones',
                
            },
            // {
            //     label: 'Agendadas', icon: 'pi pi-fw pi-home', to: '/clima',
                
            // },

            // {
            //     label: 'Finalizadas', icon: 'pi pi-fw pi-home', to: '/desempeno',
                
            // },
           
           
        
        ]
    },
  

    {
        label: 'Revisar',
        roles:roles.adminTienda,
        items: [
            // {
            //     label: 'Base de datos del personal', icon: 'pi pi-fw pi-home', to: '/pages/crud',
               
            // },
            // {
            //     label: 'Celebraciond de cumpleanos', icon: 'pi pi-fw pi-home', to: '/cumples',
                
            // },
            {
                label: 'Permisos', icon: 'fa-solid fa-person-through-window', to: '/permisos',
                
            },
 

            
            

            // {
            //     label: 'Auditorias', icon: 'pi pi-fw pi-home', to: '/sites',
                
            // }
        
        ]
    },

    

    {
        label: 'Datos',
        roles:roles.todos,
        items: [
            // {
            //     label: 'Base de datos del personal', icon: 'pi pi-fw pi-home', to: '/pages/crud',
               
            // },
            // {
            //     label: 'Celebraciond de cumpleanos', icon: 'pi pi-fw pi-home', to: '/cumples',
                
            // },
            {
                label: 'Actualizar mis datos', icon: 'fa-solid fa-user', to: '/actualizar-datos',
                
            },
            // {
            //     label: 'Licencia', icon: 'pi pi-fw pi-home', to: '/permiso-Licencia',
                
            // },
            // {
            //     label: 'Permiso', icon: 'pi pi-fw pi-home', to: '/permiso'
                
            // },
            

            // {
            //     label: 'Auditorias', icon: 'pi pi-fw pi-home', to: '/sites',
                
            // }
        
        ]
    },









    // {
    //     label: 'UI Components',
    //     items: [
    //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
    //         { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
    //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
    //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
    //         { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
    //         { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
    //         { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
    //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
    //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
    //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
    //         { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
    //         { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
    //         { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
    //         { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
    //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
    //         { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
    //     ]
    // },
    // {
    //     label: 'Prime Blocks',
    //     items: [
    //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
    //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Utilities',
    //     items: [
    //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/utilities/icons' },
    //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     to: '/pages',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             to: '/landing'
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     to: '/auth/login'
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     to: '/auth/error'
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     to: '/auth/access'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             to: '/pages/crud'
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi pi-fw pi-calendar',
    //             to: '/pages/timeline'
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             to: '/pages/notfound'
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             to: '/pages/empty'
    //         }
    //     ]
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-question',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'Figma',
    //             url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
    //             icon: 'pi pi-fw pi-pencil',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-search',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         },
    //         {
    //             label: 'Nuxt Version',
    //             url: 'https://github.com/primefaces/sakai-nuxt',
    //             icon: 'pi pi-fw pi-star'
    //         }
    //     ]
    // }
    {
                label: 'Extras', icon: 'pi pi-fw pi-home', to: '/mis-permisos',
                roles:roles.todos, 
                items: [
                    {
                        label: 'Mi carnet digital', icon: 'fa-solid fa-id-card', to: '/mi-carnet',
                    },
                    // {
                    //     label: 'Organigrama empresarial', icon: 'pi pi-fw pi-home', to: '/organigrama',
                    // },
                   
                ]
                
            },
]);





</script>

<template>

   
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="item.roles?.includes(getUserRole().toLowerCase())" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        

    </ul>
</template>

<style lang="scss" scoped></style>
