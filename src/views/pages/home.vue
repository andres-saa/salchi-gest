<template>
    <div class="container p-3">
      <div class="buttons">

        <!-- <div style="border: 2px solid red;border-radius: 1rem;position: relative; overflow: hidden;"> 
            <Sonando style="position: absolute;top: /3rem;"></Sonando>

        </div> -->




      
        <div
          class="p-3"
          v-for="menu in model.slice(0,1)"
          :key="menu.label"
          v-show="tienePermiso(menu)"
          style="display: flex; border-radius: 1rem 1rem 1rem 1rem; flex-direction: column; background-color: #ffffff15; gap: 1rem;"
        >
     
          <div
            :style="`background-color:${menu.color}`"
            style="display: flex; padding: 1rem 1rem; align-items: center; gap: 1rem; background-color: #ffffff30; border-radius: 1rem 1rem 1rem 1rem;"
          >
            <div
              :style="`background-color:${menu.color}`"
              style="width: 3rem; height: 3rem; border-radius: 50%; display: flex; justify-content: center; align-items: center;"
            >
              <i class="text-white text-2xl" :class="menu.icon"></i>
            </div>
            <span class="text-white">{{ menu.label }}</span>
          </div>




          

  
          <!-- Iterar sobre los submenús -->
          <div
            v-for="m in menu.items"
            :key="m.label"
            v-show="tienePermiso(m)"
            :style="m.items ? `border:1px solid ${m.color}; padding:1rem` : ''"
            style="border-radius: 1rem; display: flex; flex-direction: column; gap: 1rem;"
          >
            <!-- Encabezado del submenú si tiene sub-items -->
            <div
              v-if="m.items"
              :style="`background-color: ${m.color}`"
              class="p-3"
              style="display: flex; align-items: center; padding: 0.3rem; gap: 1rem; border-radius: 0.5rem;"
            >
              <b><span class="text-white">{{ m.label }}</span></b>
            </div>
  
            <RouterLink :to="m.to"  v-else>  
            <div
             
      
              class="px-3 hover"
              style="display: flex; align-items: center; padding: 0.3rem; gap: 1rem; border-radius: 10rem 0 0 10rem;"
            > 
              <div class=""
                :style="`background-color:${m.color}`"
                style="width: 3rem; height: 3rem; border-radius: 50%; display: flex; justify-content: center; align-items: center;"
              >
                <i class="text-white text-2xl" :class="m.icon"></i>
              </div>
         
                  <span class="text-white">{{ m.label }}</span>
              
            </div>
        </RouterLink>
            <!-- Iterar sobre los sub-items del submenú -->
            <div v-for="m2 in m.items?.slice(0, 5)" :key="m2.label">
                <RouterLink :to="m2.to">
              <div class="hover"
                style="display: flex; align-items: center; gap: 1rem;"
              >
                <div 
                  :style="`background-color:${m2.color}`"
                  style="width: 3rem; height: 3rem; border-radius: 50%; display: flex; justify-content: center; align-items: center;"
                >
                  <i class="text-white text-2xl" :class="m2.icon"></i>
                </div>
            
                    <span class="text-white">{{ m2.label }}</span>

               
              </div>

            </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>
const model = [
    
    {
        label: 'PRIILEGIADO',
        icon: 'pi pi-key',
        color: 'red', // Amarillo
        items: [
            {
                label: 'Para Bryan y Juan',
                icon: 'fa-solid fa-key',
                color: 'red', // Verde
                items: [
                    { label: 'Base de clientes', icon: 'fa-solid fa-key', to: '/customers/', permision_id: 800, color: 'red' }, // Turquesa
                    // { label: 'recetas', icon: 'fa-solid fa-utensils', to: '/recetario/recetas/', permision_id: 8, color: '#00C9A7' },
                    // { label: 'Configuracion', icon: 'fa-solid fa-gears', to: '/recetario/configuracion/', permision_id: 13, color: '#00C9A7' },
                    // { label: 'Resumen Beneficio', icon: 'fa-solid fa-chart-pie', to: '/recetario/recipe-sumary-benefit/', permision_id: 14, color: '#00C9A7' },
                ]
            },
            
        ]
    },

    {
        label: 'INVENTARIO',
        icon: 'fa-solid fa-boxes-stacked',
        color: '#FFD93D', // Amarillo
        items: [
            {
                label: 'Recetario',
                icon: 'fa-solid fa-book',
                color: '#6BCB77', // Verde
                items: [
                    { label: 'Ingredientes', icon: 'fa-solid fa-carrot', to: '/recetario/prices-cdi-table/', permision_id: 8, color: '#00C9A7' }, // Turquesa
                    { label: 'recetas', icon: 'fa-solid fa-utensils', to: '/recetario/recetas/', permision_id: 8, color: '#00C9A7' },
                    { label: 'Configuracion', icon: 'fa-solid fa-gears', to: '/recetario/configuracion/', permision_id: 13, color: '#00C9A7' },
                    { label: 'Resumen Beneficio', icon: 'fa-solid fa-chart-pie', to: '/recetario/recipe-sumary-benefit/', permision_id: 14, color: '#00C9A7' },
                ]
            },
            {
                label: 'Reportes de inventario diario',
                icon: 'fa-solid fa-calendar-day',
                color: '#4D96FF', // Azul
                items: [
                    { label: 'Reportar inventario diario', icon: 'fa-solid fa-edit', to: '/daily-inventory/report-inventory', permision_id: 11, color: '#FFA502' }, // Naranja
                    { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/daily-inventory/daily-inventory-reports', permision_id: 10, color: '#FFA502' },
                ]
            },
            {
                label: 'Reportes de inventario Mensual',
                icon: 'fa-solid fa-calendar-days',
                color: '#4D96FF', // Azul
                items: [
                    { label: 'Reportar inventario mensual', icon: 'fa-solid fa-file-circle-plus', to: '/monthly-inventory/report-monthly-inventory', permision_id: 17, color: '#FFA502' }, // Naranja
                    { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/monthly-inventory/monthly-inventory-reports', permision_id: 18, color: '#FFA502' },
                ]
            },
            {
                label: 'Ordenes de compra',
                icon: 'fa-solid fa-shopping-cart',
                color: '#FF6B6B', // Rojo
                items: [
                    { label: 'Nueva', icon: 'fa-solid fa-file-circle-plus', to: '/purchase-order/generate-purchase-order', permision_id: 21, color: '#D65DB1' }, // Rosa
                    { label: 'Generadas por mi', icon: 'fa-solid fa-folder-open', to: '/purchase-order/purchase-order-my-orders/', permision_id: 21, color: '#D65DB1' },
                    { label: 'Alistar', icon: 'fa-solid fa-clipboard-check', to: '/purchase-order/recorrido/alistar/', permision_id: 22, color: '#D65DB1' },
                    { label: 'Autorizar', icon: 'fa-solid fa-check-double', to: '/purchase-order/recorrido/autorizar', permision_id: 23, color: '#D65DB1' },
                    { label: 'Transportar', icon: 'fa-solid fa-truck', to: '/purchase-order/recorrido/transport/', permision_id: 24, color: '#D65DB1' },
                    { label: 'Recibir en la sede', icon: 'fa-solid fa-building-circle-check', to: '/purchase-order/recorrido/recibida-en-sede/', permision_id: 25, color: '#D65DB1' },
                    { label: 'Completada', icon: 'fa-solid fa-circle-check', to: '/purchase-order/recorrido/completed/', permision_id: 25, color: '#D65DB1' },
                    { label: 'Todas las ordenes', icon: 'fa-solid fa-list-ol', to: '/purchase-order/recorrido/purchase-order-reports/', permision_id: 26, color: '#D65DB1' },
                    { label: 'Stock', icon: 'fa-solid fa-boxes-packing', to: '/purchase-order/recorrido/purchase-order-settings/', permision_id: 27, color: '#D65DB1' },
                ]
            },
        ]
    },
    {
        label: 'VENTAS',
        icon: 'fa-solid fa-cash-register',
        color: '#FFA502', // Naranja
        items: [
            {
                label: 'Tienda',
                icon: 'fa-solid fa-store',
                color: '#845EC2', // Púrpura
                items: [
                    { label: 'Cocina', icon: 'fa-solid fa-utensils', to: '/cocina/', permision_id: 1, color: '#FFD93D' }, // Amarillo
                    { label: 'Menu', icon: 'fa-solid fa-book-open', to: '/tienda-menu/productos/SALCHIPAPAS/3', permision_id: 2, color: '#FFD93D' },
                    { label: 'Reportes de ventas', icon: 'fa-solid fa-chart-line', to: '/reporte-ventas/order-sumary', permision_id: 3, color: '#FFD93D' },
                    { label: 'Domicilios', icon: 'fa-solid fa-truck-fast', to: '/domicilios/1', permision_id: 4, color: '#FFD93D' },
                    { label: 'Transferencias', icon: 'fa-solid fa-right-left', to: '/transfer/', permision_id: 5, color: '#FFD93D' },
                    { label: 'Ingresar pedido', icon: 'fa-solid fa-cart-plus', to: '/call-center-vender', permision_id: 6, color: '#FFD93D' },
                    { label: 'Solicitudes de cancelacion', icon: 'fa-solid fa-ban', to: '/cancellation-requests/revisar/', permision_id: 7, color: '#FFD93D' },
                    { label: 'Control', icon: 'fa-solid fa-sliders', to: '/cancellation-requests/revisar/', color: '#FFD93D' }, // Sin permision_id
                    { label: 'Info sedes ', icon: 'fa-solid fa-building', to: '/directorio', permision_id: 31, color: '#FFD93D' },
                ],
            },
            {
                label: 'Cajeros',
                icon: 'fa-solid fa-cash-register',
                color: '#845EC2', // Púrpura
                items: [
                    { label: 'Reportes', icon: 'fa-solid fa-file-invoice-dollar', to: '/cachier-money/reportes/', permision_id: 1, color: '#FFD93D' },
                    { label: 'Registros', icon: 'fa-solid fa-book', to: '/cachier-money/registros/', permision_id: 1, color: '#FFD93D' },
                    { label: 'Salidas', icon: 'fa-solid fa-money-bill-trend-up', to: '/cachier-money/salidas/', permision_id: 1, color: '#FFD93D' },
                ],
            }
        ]
    },
    {
        label: 'INFORMACIÓN ADICIONAL',
        icon: 'fa-solid fa-hand-holding-heart',
        color: '#00C9A7', // Turquesa
        items: [
            { label: 'Planeacíon Estrategica ', icon: 'fa-solid fa-lightbulb', to: '/mas-cerca-de-ti', permision_id: 43, color: '#FFD93D' },
            { label: 'Un verdadero Monstruo', icon: 'fa-solid fa-ghost', to: '/informacion-empresarial', permision_id: 43, color: '#FFD93D' },
            { label: 'Mis Turnos ', icon: 'fa-solid fa-business-time', to: '/turnos-trabajo-empleados', permision_id: 43, color: '#FFD93D' },
            { label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-cloud-sun', to: '/clima', permision_id: 43, color: '#FFD93D' },
            { label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-line', to: '/desempeno', permision_id: 43, color: '#FFD93D' },
            { label: 'Encuesta de retiro ', icon: 'fa-solid fa-door-open', to: '/retiro', permision_id: 43, color: '#FFD93D' },
            // { label: 'PQRS ', icon: 'fa-solimd fa-question', to: '/pqrs-user', permision_id: 43, color: '#FFD93D' },
        ]
    },
    {
        label: 'CAPACITACIONES',
        icon: 'fa-solid fa-chalkboard-user',
        color: '#4D96FF', // Azul
        items: [
            { label: 'Agendar', icon: 'fa-solid fa-calendar-plus', to: '/capacitaciones', permision_id: 44, color: '#FFD93D' },
            { label: 'Mi formacion', icon: 'fa-solid fa-chalkboard-user', to: '/video-training-sequences/', permision_id: 45, color: '#FFD93D' },
            { label: 'Administrar Escuelas', icon: 'fa-solid fa-school', to: '/video-training-video-sesion', permision_id: 46, color: '#FFD93D' },
            {
                label: 'Principal',
                icon: 'fa-solid fa-house',
                color: '#845EC2', // Púrpura
                items: [
                    { label: 'Recetario cucharas', icon: 'fa-solid fa-utensil-spoon', to: '/cucharas', permision_id: 48, color: '#FF6B6B' }, // Rojo
                    { label: 'Organizacion', icon: 'fa-solid fa-sitemap', to: '/samovar', permision_id: 49, color: '#FF6B6B' },
                ]
            },
        ]
    },
    {
        label: 'RECURSOS HUMANOS',
        icon: 'fa-solid fa-user-group',
        color: '#6BCB77', // Verde
        items: [
            { label: 'Base de datos del personal', icon: 'fa-solid fa-database', to: '/pages/crud', permision_id: 28, color: '#FFA502' }, // Naranja
            { label: 'Contratos', icon: 'fa-solid fa-file-contract', to: '/contracts/contracts-to-finish', permision_id: 29, color: '#FFA502' },
            { label: 'Gestion de cargos', icon: 'fa-solid fa-user-gear', to: '/cargos', permision_id: 30, color: '#FFA502' },
            {
                label: 'Requisicion de personal',
                icon: 'fa-solid fa-user-plus',
                permision_id: 32,
                color: '#845EC2', // Púrpura
                items: [
                    { label: 'Solicitudes', icon: 'fa-solid fa-file-circle-plus', to: '/hiring/request-people/', permision_id: 32, color: '#FFD93D' },
                    { label: 'Aprobacion de solicitudes', icon: 'fa-solid fa-thumbs-up', to: '/hiring-authorize/requests', permision_id: 32, color: '#FFD93D' },
                    { label: 'Seleccion y contratacion', icon: 'fa-solid fa-user-check', to: '/hiring-hr/selection', permision_id: 32, color: '#FFD93D' },
                ]
            },
        ]
    },
    {
        label: 'SOLICITAR PERMISOS',
        icon: 'fa-solid fa-calendar-check',
        color: '#845EC2', // Púrpura
        items: [
            { label: 'Vacaciones', icon: 'fa-solid fa-umbrella-beach', to: '/permiso-vacaciones', permision_id: 42, color: '#FFD93D' },
            { label: 'Licencia', icon: 'fa-solid fa-id-card', to: '/permiso-Licencia', permision_id: 42, color: '#FFD93D' },
            { label: 'Permiso general', icon: 'fa-solid fa-calendar-check', to: '/permiso', permision_id: 42, color: '#FFD93D' },
            { label: 'Permisos solicitados', icon: 'fa-solid fa-list', to: '/mis-permisos', permision_id: 42, color: '#FFD93D' },
        ]
    },
    {
        label: 'CONCURSOS',
        icon: 'fa-solid fa-trophy',
        color: '#FF6B6B', // Rojo
        items: [
            { label: 'Vigentes', icon: 'fa-solid fa-play', to: '/concursos', permision_id: 53, color: '#FFD93D' },
            { label: 'Proximos', icon: 'fa-solid fa-forward', to: '/future-concursos', permision_id: 53, color: '#FFD93D' },
            { label: 'Finalizados ', icon: 'fa-solid fa-flag-checkered', to: '/completed-concursos', permision_id: 53, color: '#FFD93D' },
            { label: 'Administrar ', icon: 'fa-solid fa-gear', to: '/manage-concursos', permision_id: 54, color: '#FFD93D' },
        ]
    },
    {
        label: 'MAS CERCA DE TI',
        icon: 'fa-solid fa-hand-holding-heart',
        color: '#00C9A7', // Turquesa
        items: [
            { label: 'Planeacíon Estrategica ', icon: 'fa-solid fa-lightbulb', to: '/mas-cerca-de-ti', permision_id: 43, color: '#FFD93D' },
            { label: 'Un verdadero Monstruo', icon: 'fa-solid fa-ghost', to: '/informacion-empresarial', permision_id: 43, color: '#FFD93D' },
            { label: 'Mis Turnos ', icon: 'fa-solid fa-business-time', to: '/turnos-trabajo-empleados', permision_id: 43, color: '#FFD93D' },
            { label: 'Evaluación clima organizacional ', icon: 'fa-solid fa-cloud-sun', to: '/clima', permision_id: 43, color: '#FFD93D' },
            { label: 'Evaluación de desempeño ', icon: 'fa-solid fa-chart-line', to: '/desempeno', permision_id: 43, color: '#FFD93D' },
            { label: 'Encuesta de retiro ', icon: 'fa-solid fa-door-open', to: '/retiro', permision_id: 43, color: '#FFD93D' },
            { label: 'PQRS ', icon: 'fa-solid fa-question', to: '/pqrs-user', permision_id: 43, color: '#FFD93D' },
        ]
    },
    {
        label: 'CAPACITACIONES',
        icon: 'fa-solid fa-chalkboard-user',
        color: '#4D96FF', // Azul
        items: [
            { label: 'Agendar', icon: 'fa-solid fa-calendar-plus', to: '/capacitaciones', permision_id: 44, color: '#FFD93D' },
            { label: 'Mi formacion', icon: 'fa-solid fa-chalkboard-user', to: '/video-training-sequences/', permision_id: 45, color: '#FFD93D' },
            { label: 'Administrar Escuelas', icon: 'fa-solid fa-school', to: '/video-training-video-sesion', permision_id: 46, color: '#FFD93D' },
            {
                label: 'Principal',
                icon: 'fa-solid fa-house',
                color: '#845EC2', // Púrpura
                items: [
                    { label: 'Recetario cucharas', icon: 'fa-solid fa-utensil-spoon', to: '/cucharas', permision_id: 48, color: '#FF6B6B' }, // Rojo
                    { label: 'Organizacion', icon: 'fa-solid fa-sitemap', to: '/samovar', permision_id: 49, color: '#FF6B6B' },
                ]
            },
        ]
    },

    {
        label: 'ATENCION AL CLIENTE',
        icon: 'fa-solid fa-headset',
        color: '#4D96FF', // Azul
        items: [
            { label: 'Administrar PQRS ', icon: 'fa-solid fa-folder-tree', to: '/pqrs/pagina_web/1', permision_id: 55, color: '#FFD93D' },
        ]
    },
    {
        label: 'CALIDAD Y CONTROL',
        icon: 'fa-solid fa-clipboard-check',
        color: '#6BCB77', // Verde
        items: [
            { label: 'Auditorias ', icon: 'fa-solid fa-list-check', to: '/auditorias/lista', permision_id: 33, color: '#FFA502' },
            { label: 'Configurar turnos ', icon: 'fa-solid fa-clock', to: '/turnos-trabajo', permision_id: 35, color: '#FFA502' },
        ]
    },



    {
        label: 'FRANQUICIAS',
        icon: 'fa-solid fa-handshake',
        color: '#845EC2', // Púrpura
        items: [
            { label: 'Solicitudes', icon: 'fa-solid fa-clipboard-list', to: '/franquicias', permision_id: 53, color: '#FFD93D' },
        ]
    },
    {
        label: 'ENTREGAS',
        icon: 'fa-solid fa-truck-moving',
        color: '#FFA502', // Naranja
        items: [
            { label: 'Dotacion', icon: 'fa-solid fa-shirt', to: '/dotacion', permision_id: 37, color: '#FFD93D' },
        ]
    },
    {
        label: 'CELEBRACIONES',
        icon: 'fa-solid fa-cake-candles',
        color: '#D65DB1', // Rosa
        to: '/cumples',
        items: [
            { label: 'Cumpleanos', icon: 'fa-solid fa-cake-candles', to: '/cumples', permision_id: 38, color: '#FFD93D' }
        ]
    },
    {
        label: 'GUIAS',
        icon: 'fa-solid fa-book-open',
        color: '#845EC2', // Púrpura
        items: [
            { label: 'Gestion de guias', icon: 'fa-solid fa-book', to: '/guias', permision_id: 40, color: '#FFD93D' },
        ]
    },
    {
        label: 'CERTIFICADOS',
        icon: 'fa-solid fa-award',
        color: '#FF6B6B', // Rojo
        items: [
            { label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral', permision_id: 41, color: '#FFD93D' },
        ]
    },
    {
        label: 'Revisar',
        icon: 'fa-solid fa-check-double',
        color: '#D65DB1', // Rosa
        items: [
            { label: 'Permisos', icon: 'fa-solid fa-file-invoice', to: '/permisos', permision_id: 50, color: '#FFD93D' },
        ]
    },
    {
        label: 'Datos',
        icon: 'fa-solid fa-database',
        color: '#6BCB77', // Verde
        items: [
            { label: 'Actualizar mis datos', icon: 'fa-solid fa-user-pen', to: '/actualizar-datos', permision_id: 50, color: '#FFD93D' },
        ]
    },
    {
        label: 'Extras',
        icon: 'fa-solid fa-ellipsis',
        color: '#845EC2', // Púrpura
        to: '/mis-permisos',
        items: [
            { label: 'Mi carnet digital', icon: 'fa-solid fa-id-badge', to: '/mi-carnet', permision_id: 52, color: '#FFD93D' },
            { label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama', permision_id: 52, color: '#FFD93D' },
        ]
    },
];

import { RouterLink } from 'vue-router';
import { loginStore } from '../../store/user';
import Sonando from './Sonando.vue';
import sesion from './callCenter/sesion.vue';


const elegidos = [1132,1082,1250]


function tienePermiso(item) {
  // Si el permiso es 800, se permite solo si el usuario está en 'elegidos'
  if (item.permision_id === 800) {
    return elegidos.includes(permisions.rawUserData.id);
  }

  // Para otros permisos, verifica si el usuario lo tiene en su rawUserData
  const permisoValido = item.permision_id
    ? permisions.rawUserData.permissions.includes(item.permision_id)
    : false;

  if (permisoValido) return true;

  // Si el elemento tiene sub-items, verifica recursivamente
  if (item.items && item.items.length > 0) {
    return item.items.some(subItem => tienePermiso(subItem));
  }

  return false;
}


const permisions = loginStore()

</script>
<style scoped>

.container{
    background-color: rgb(0, 1, 22);
    min-height: 100vh;
    display: flex;
    align-items: center;
    /* padding: 30rem; */


}

.buttons{

     padding-top: 3rem;
     margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    align-items: stretch; /* Estirar elementos para llenar el espacio */

}


@media (width<1400px) {
 .buttons{
    grid-template-columns: repeat(1,1fr);

 }   
}


@media (width<1200px) {
 .buttons{
    grid-template-columns: repeat(1,1fr);

 }   
}


@media (width<800px) {
 .buttons{
    grid-template-columns: repeat(1,1fr);

 }   
}

.hover{
    transition: all .3s ease;
}

.hover:hover{
    transform: scale(1.1);
}
</style>