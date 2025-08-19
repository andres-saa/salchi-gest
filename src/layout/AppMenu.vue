<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { getUserRole } from '../service/valoresReactivosCompartidos';
import { roles, obtenerRolesYActualizar } from '@/service/roles';
import { PrimeIcons } from 'primevue/api';
import { useDocumentsStore } from '../store/documentos';
import { loginStore } from '@/store/user.js';

const login = loginStore();

const permissions = ref([]);
const documentStore = useDocumentsStore();

onBeforeMount(async () => {
  permissions.value = await login.rawUserData.permissions;
});

const calcSiteDocument = () => {
  if (documentStore.currentSite?.site_id) {
    return `/site/${documentStore.currentSite.site_id}/documentos`;
  } else {
    return '/site/1/documentos';
  }
};

const model = ref([]);

async function fetchAndUpdateRoles() {
  const updatedRoles = await obtenerRolesYActualizar();
  roles.value = updatedRoles;

  const get_id = (items) => items.find((i) => permissions.value.includes(i));

  model.value = [
    {
      label: 'MARKETING',
      icon: 'fa-solid fa-plug',
      'icon-color': '#E91E63',
      permision_id: get_id([64]),
      items: [
        {
          label: 'Descuentos',
          icon: 'fa-solid fa-file',
          permision_id: get_id([64]),
          'icon-color': '#F06292',
          to: '/marketing/discounts',
        },
      ],
    },

    {
      label: 'RECOLECCIÓN DE DATOS',
      icon: 'fa-solid fa-plug',
      'icon-color': '#7E57C2',
      permision_id: get_id([64]),
      items: [
        {
          label: 'Email clientes por código',
          icon: 'fa-solid fa-envelope-open',
          permision_id: get_id([64]),
          'icon-color': '#9575CD',
          to: '/usuarios-email',
        },
      ],
    },

    {
      label: 'INTEGRACIONES',
      icon: 'fa-solid fa-plug',
      'icon-color': '#00BCD4',
      permision_id: get_id([56, 57, 58, 59, 60, 61]),
      items: [
        {
          label: 'Distrimonster',
          icon: 'fa-solid fa-truck',
          permision_id: get_id([56, 57]),
          'icon-color': '#26C6DA',
          items: [
            { label: 'Almacén', icon: 'fa-solid fa-warehouse', to: '/distrimonster', permision_id: 56, 'icon-color': '#00ACC1' },
            { label: 'Usuarios', icon: 'fa-solid fa-users', to: '/distrimonster-users', permision_id: 57, 'icon-color': '#0097A7' },
          ],
        },
        {
          label: 'Tiendas',
          icon: 'fa-solid fa-store',
          permision_id: get_id([58, 59, 60, 61]),
          'icon-color': '#26A69A',
          items: [
            { label: 'Almacén', icon: 'fa-solid fa-store', to: '/tiendas', permision_id: 58, 'icon-color': '#26A69A' },
            { label: 'Cartas QR', icon: 'fa-solid fa-qrcode', to: '/cartas', permision_id: 59, 'icon-color': '#26C6DA' },
            { label: 'Banners', icon: 'fa-solid fa-image', to: '/banners', permision_id: 60, 'icon-color': '#29B6F6' },
            { label: 'Redimir código correo', icon: 'fa-solid fa-envelope-open', to: '/redimir-correo', permision_id: 61, 'icon-color': '#4DB6AC' },
          ],
        },
      ],
    },

    {
      label: 'VENTAS',
      icon: 'fa-solid fa-cash-register',
      'icon-color': '#FF7043',
      items: [
        {
          label: 'Tiendas',
          icon: 'fa-solid fa-store',
          'icon-color': '#FFA726',
          permision_id: get_id([1, 2, 3, 4, 5, 6, 7, 31]),
          items: [
            { label: 'Métodos de pago tiendas', icon: 'fa-solid fa-credit-card', to: '/payment-methods/', permision_id: 1, 'icon-color': '#FFB74D' },
            { label: 'Métodos de pago call center', icon: 'fa-solid fa-phone', to: '/payment-methods-call-center/', permision_id: 1, 'icon-color': '#FFCC80' },
            { label: 'Cocina', icon: 'fa-solid fa-utensils', to: '/cocina/', permision_id: 1, 'icon-color': '#FF8A65' },
            { label: 'Menú', icon: 'fa-solid fa-book-open', to: '/tienda-menu/productos/SALCHIPAPAS/3', permision_id: 2, 'icon-color': '#A5D6A7' },
            { label: 'Reportes de ventas', icon: 'fa-solid fa-chart-line', to: '/reporte-ventas/order-sumary', permision_id: 3, 'icon-color': '#EF5350' },
            { label: 'Domicilios', icon: 'fa-solid fa-truck-fast', to: '/domicilios/1', permision_id: 4, 'icon-color': '#8E24AA' },
            { label: 'Transferencias', icon: 'fa-solid fa-right-left', to: '/transfer/transfer-sesion/', permision_id: 5, 'icon-color': '#5E35B1' },
            { label: 'Pasarela de pagos', icon: 'fa-solid fa-credit-card', to: '/pay-orders/', permision_id: 5, 'icon-color': '#42A5F5' },
            { label: 'Validar pedidos', icon: 'fa-solid fa-check-double', to: '/validate/', permision_id: 5, 'icon-color': '#66BB6A' },
            { label: 'Ingresar pedido', icon: 'fa-solid fa-cart-plus', to: '/call-center-vender', permision_id: 6, 'icon-color': '#F48FB1' },
            { label: 'Solicitudes de cancelación', icon: 'fa-solid fa-ban', to: '/cancellation-requests/revisar/', permision_id: 7, 'icon-color': '#FF7043' },
            { label: 'Control', icon: 'fa-solid fa-sliders', to: '/cancellation-requests/revisar/', 'icon-color': '#1E90FF' },
            { label: 'Info sedes', icon: 'fa-solid fa-building', to: '/directorio', permision_id: 31, 'icon-color': '#26A69A' },
          ],
        },
      ],
    },

    {
      label: 'CHAT',
      permision_id: get_id([63]),
      icon: 'fa-brands fa-whatsapp',
      'icon-color': '#25D366',
      items: [
        { label: 'Salchimonster', icon: 'fa-brands fa-whatsapp', 'icon-color': '#25D366', to: '/chat/', permision_id: get_id([62]) },
      ],
    },

    {
      label: 'CONCURSOS',
      icon: 'fa-solid fa-trophy',
      'icon-color': '#FFD700',
      permision_id: get_id([53, 54]),
      items: [
        { label: 'Vigentes', icon: 'fa-solid fa-play', to: '/concursos', permision_id: 53, 'icon-color': '#66BB6A' },
        { label: 'Próximos', icon: 'fa-solid fa-forward', to: '/future-concursos', permision_id: 53, 'icon-color': '#FFA726' },
        { label: 'Finalizados', icon: 'fa-solid fa-flag-checkered', to: '/completed-concursos', permision_id: 53, 'icon-color': '#8E24AA' },
        { label: 'Administrar', icon: 'fa-solid fa-gear', to: '/manage-concursos', permision_id: 54, 'icon-color': '#EF5350' },
      ],
    },

    {
      label: 'FRANQUICIAS',
      icon: 'fa-solid fa-handshake',
      'icon-color': '#43A047',
      permision_id: get_id([63]),
      items: [{ label: 'Solicitudes', icon: 'fa-solid fa-clipboard-list', to: '/franquicias', permision_id: 63, 'icon-color': '#FF7043' }],
    },

    {
      label: 'INVENTARIO',
      icon: 'fa-solid fa-boxes-stacked',
      'icon-color': '#1E88E5',
      items: [
        {
          label: 'Recetario',
          icon: 'fa-solid fa-book',
          'icon-color': '#5C6BC0',
          permision_id: get_id([8, 13, 14]),
          items: [
            { label: 'Ingredientes', icon: 'fa-solid fa-carrot', to: '/recetario/prices-cdi-table/', permision_id: 8, 'icon-color': '#FFA000' },
            { label: 'Recetas', icon: 'fa-solid fa-utensils', to: '/recetario/recetas/', permision_id: 8, 'icon-color': '#F06292' },
            { label: 'Configuración', icon: 'fa-solid fa-gears', to: '/recetario/configuracion/', permision_id: 13, 'icon-color': '#3949AB' },
            { label: 'Resumen beneficio', icon: 'fa-solid fa-chart-pie', to: '/recetario/recipe-sumary-benefit/', permision_id: 14, 'icon-color': '#00C853' },
          ],
        },
        {
          label: 'Reportes de inventario diario',
          icon: 'fa-solid fa-calendar-day',
          'icon-color': '#FF7043',
          permision_id: get_id([10, 11]),
          items: [
            { label: 'Reportar inventario diario', icon: 'fa-solid fa-edit', to: '/daily-inventory/report-inventory', permision_id: 11, 'icon-color': '#1E88E5' },
            { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/daily-inventory/daily-inventory-reports', permision_id: 10, 'icon-color': '#43A047' },
          ],
        },
        {
          label: 'Reportes de inventario mensual',
          icon: 'fa-solid fa-calendar-days',
          'icon-color': '#EC407A',
          permision_id: get_id([17, 18]),
          items: [
            { label: 'Reportar inventario mensual', icon: 'fa-solid fa-file-circle-plus', to: '/monthly-inventory/report-monthly-inventory', permision_id: 17, 'icon-color': '#FFD54F' },
            { label: 'Revisar reportes', icon: 'fa-solid fa-eye', to: '/monthly-inventory/monthly-inventory-reports', permision_id: 18, 'icon-color': '#9CCC65' },
          ],
        },
        {
          label: 'Órdenes de compra',
          icon: 'fa-solid fa-shopping-cart',
          'icon-color': '#FF7043',
          permision_id: get_id([21, 22, 23, 24, 25, 26, 27]),
          items: [
            { label: 'Nueva', icon: 'fa-solid fa-file-circle-plus', to: '/purchase-order/generate-purchase-order', permision_id: 21, 'icon-color': '#FF7043' },
            { label: 'Generadas por mí', icon: 'fa-solid fa-folder-open', to: '/purchase-order/purchase-order-my-orders/', permision_id: 21, 'icon-color': '#42A5F5' },
            { label: 'Alistar', icon: 'fa-solid fa-clipboard-check', to: '/purchase-order/recorrido/alistar/', permision_id: 22, 'icon-color': '#66BB6A' },
            { label: 'Autorizar', icon: 'fa-solid fa-check-double', to: '/purchase-order/recorrido/autorizar', permision_id: 23, 'icon-color': '#AB47BC' },
            { label: 'Transportar', icon: 'fa-solid fa-truck', to: '/purchase-order/recorrido/transport/', permision_id: 24, 'icon-color': '#FB8C00' },
            { label: 'Recibir en la sede', icon: 'fa-solid fa-building-circle-check', to: '/purchase-order/recorrido/recibida-en-sede/', permision_id: 25, 'icon-color': '#00ACC1' },
            { label: 'Completada', icon: 'fa-solid fa-circle-check', to: '/purchase-order/recorrido/completed/', permision_id: 25, 'icon-color': '#43A047' },
            { label: 'Todas las órdenes', icon: 'fa-solid fa-list-ol', to: '/purchase-order/recorrido/purchase-order-reports/', permision_id: 26, 'icon-color': '#8E24AA' },
            { label: 'Stock', icon: 'fa-solid fa-boxes-stacked', to: '/purchase-order/recorrido/purchase-order-settings/', permision_id: 27, 'icon-color': '#5C6BC0' },
          ],
        },
      ],
    },

    {
      label: 'RECURSOS HUMANOS',
      icon: 'fa-solid fa-user-group',
      'icon-color': '#8E24AA',
      permision_id: get_id([28, 29, 30, 31, 32]),
      items: [
        { label: 'Base de datos del personal', icon: 'fa-solid fa-database', to: '/pages/crud', permision_id: 28, 'icon-color': '#42A5F5' },
        { label: 'Contratos', icon: 'fa-solid fa-file-contract', to: '/contracts/contracts-to-finish', permision_id: 29, 'icon-color': '#FF7043' },
        { label: 'Gestión de cargos', icon: 'fa-solid fa-user-gear', to: '/cargos', permision_id: 30, 'icon-color': '#66BB6A' },
        {
          label: 'Requisición de personal',
          icon: 'fa-solid fa-user-plus',
          'icon-color': '#FFD54F',
          permision_id: 32,
          items: [
            { label: 'Solicitudes', icon: 'fa-solid fa-file-circle-plus', to: '/hiring/request-people/', permision_id: 32, 'icon-color': '#EC407A' },
            { label: 'Aprobación de solicitudes', icon: 'fa-solid fa-thumbs-up', to: '/hiring-authorize/requests', permision_id: 32, 'icon-color': '#42A5F5' },
            { label: 'Selección y contratación', icon: 'fa-solid fa-user-check', to: '/hiring-hr/selection', permision_id: 32, 'icon-color': '#66BB6A' },
          ],
        },
      ],
    },

    {
      label: 'ATENCIÓN AL CLIENTE',
      icon: 'fa-solid fa-headset',
      'icon-color': '#009688',
      permision_id: get_id([32]),
      items: [{ label: 'Administrar PQRS', icon: 'fa-solid fa-folder-tree', to: '/pqrs/pagina_web/1', permision_id: 55, 'icon-color': '#FF7043' }],
    },

    {
      label: 'CALIDAD Y CONTROL',
      icon: 'fa-solid fa-clipboard-check',
      'icon-color': '#2E7D32',
      permision_id: get_id([33, 34, 35, 36]),
      items: [
        { label: 'Auditorías', icon: 'fa-solid fa-list-check', to: '/auditorias/lista', permision_id: 33, 'icon-color': '#FFD54F' },
        { label: 'Configurar turnos', icon: 'fa-solid fa-clock', to: '/turnos-trabajo', permision_id: 35, 'icon-color': '#FB8C00' },
      ],
    },

    {
      label: 'ENTREGAS',
      icon: 'fa-solid fa-truck-moving',
      'icon-color': '#FB8C00',
      permision_id: get_id([37]),
      items: [{ label: 'Dotación', icon: 'fa-solid fa-shirt', to: '/dotacion', permision_id: 37, 'icon-color': '#EC407A' }],
    },

    {
      label: 'CELEBRACIONES',
      icon: 'fa-solid fa-cake-candles',
      'icon-color': '#EC407A',
      to: '/cumples',
      permision_id: get_id([38]),
      items: [{ label: 'Cumpleaños', icon: 'fa-solid fa-cake-candles', to: '/cumples', permision_id: 38, 'icon-color': '#FFD54F' }],
    },

    {
      label: 'SEDES',
      icon: 'fa-solid fa-building',
      'icon-color': '#3949AB',
      permision_id: get_id([39]),
      items: [{ label: 'Documentos', icon: 'fa-solid fa-file-lines', to: calcSiteDocument(), permision_id: 39, 'icon-color': '#42A5F5' }],
    },

    {
      label: 'GUÍAS',
      icon: 'fa-solid fa-book-open',
      'icon-color': '#C0CA33',
      permision_id: get_id([40]),
      items: [{ label: 'Gestión de guías', icon: 'fa-solid fa-book', to: '/guias', permision_id: 40, 'icon-color': '#F06292' }],
    },

    {
      label: 'CERTIFICADOS',
      icon: 'fa-solid fa-award',
      'icon-color': '#FFC107',
      permision_id: get_id([41]),
      items: [{ label: 'Generar certificado laboral', icon: 'fa-solid fa-certificate', to: '/certificado-laboral', permision_id: 41, 'icon-color': '#FFB300' }],
    },

    {
      label: 'SOLICITAR PERMISOS',
      icon: 'fa-solid fa-calendar-check',
      'icon-color': '#66BB6A',
      permision_id: get_id([42]),
      items: [
        { label: 'Vacaciones', icon: 'fa-solid fa-umbrella-beach', to: '/permiso-vacaciones', permision_id: 42, 'icon-color': '#42A5F5' },
        { label: 'Licencia', icon: 'fa-solid fa-id-card', to: '/permiso-Licencia', permision_id: 42, 'icon-color': '#EC407A' },
        { label: 'Permiso general', icon: 'fa-solid fa-calendar-check', to: '/permiso', permision_id: 42, 'icon-color': '#FFA000' },
        { label: 'Permisos solicitados', icon: 'fa-solid fa-list', to: '/mis-permisos', permision_id: 42, 'icon-color': '#26A69A' },
      ],
    },

    {
      label: 'MÁS CERCA DE TI',
      icon: 'fa-solid fa-hand-holding-heart',
      'icon-color': '#26A69A',
      roles: roles.value.todos,
      permision_id: get_id([43]),
      items: [
        { label: 'Planeación Estratégica', icon: 'fa-solid fa-lightbulb', to: '/mas-cerca-de-ti', permision_id: 43, 'icon-color': '#FFFF00' },
        { label: 'Un verdadero Monstruo', icon: 'fa-solid fa-ghost', to: '/informacion-empresarial', permision_id: 43, 'icon-color': '#8A2BE2' },
        { label: 'Mis turnos', icon: 'fa-solid fa-business-time', to: '/turnos-trabajo-empleados', permision_id: 43, 'icon-color': '#00ACC1' },
        { label: 'Clima organizacional', icon: 'fa-solid fa-cloud-sun', to: '/clima', permision_id: 43, 'icon-color': '#FFA07A' },
        { label: 'Evaluación de desempeño', icon: 'fa-solid fa-chart-line', to: '/desempeno', permision_id: 43, 'icon-color': '#66BB6A' },
        { label: 'Encuesta de retiro', icon: 'fa-solid fa-door-open', to: '/retiro', permision_id: 43, 'icon-color': '#FF7043' },
        { label: 'PQRS', icon: 'fa-solid fa-question', to: '/pqrs-user', permision_id: 43, 'icon-color': '#EC407A' },
      ],
    },

    {
      label: 'CAPACITACIONES',
      icon: 'fa-solid fa-chalkboard-user',
      'icon-color': '#1976D2',
      permision_id: get_id([44, 45, 46]),
      items: [
        { label: 'Agendar', icon: 'fa-solid fa-calendar-plus', to: '/capacitaciones', permision_id: 44, 'icon-color': '#43A047' },
        { label: 'Mi formación', icon: 'fa-solid fa-chalkboard-user', to: '/video-training-sequences/', permision_id: 45, 'icon-color': '#FFD54F' },
        { label: 'Administrar escuelas', icon: 'fa-solid fa-school', to: '/video-training-video-sesion', permision_id: 46, 'icon-color': '#FB8C00' },
        {
          label: 'Principal',
          icon: 'fa-solid fa-house',
          'icon-color': '#00E676',
          permision_id: get_id([48, 49]),
          items: [
            { label: 'Recetario cucharas', icon: 'fa-solid fa-spoon', to: '/cucharas', permision_id: 48, 'icon-color': '#FF7043' },
            { label: 'Organización', icon: 'fa-solid fa-sitemap', to: '/samovar', permision_id: 49, 'icon-color': '#8E24AA' },
          ],
        },
      ],
    },

    {
      label: 'REVISAR',
      icon: 'fa-solid fa-check-double',
      'icon-color': '#43A047',
      permision_id: get_id([50]),
      items: [{ label: 'Permisos', icon: 'fa-solid fa-file-invoice', to: '/permisos', permision_id: 50, 'icon-color': '#FF7043' }],
    },

    {
      label: 'DATOS',
      icon: 'fa-solid fa-database',
      'icon-color': '#546E7A',
      permision_id: get_id([50]),
      items: [{ label: 'Actualizar mis datos', icon: 'fa-solid fa-user-pen', to: '/actualizar-datos', permision_id: 50, 'icon-color': '#EC407A' }],
    },

    {
      label: 'EXTRAS',
      icon: 'fa-solid fa-ellipsis',
      'icon-color': '#BDBDBD',
      to: '/mis-permisos',
      permision_id: get_id([52]),
      items: [
        { label: 'Mi carnet digital', icon: 'fa-solid fa-id-badge', to: '/mi-carnet', permision_id: 52, 'icon-color': '#FFD54F' },
        { label: 'Organigrama empresarial', icon: 'fa-solid fa-diagram-project', to: '/organigrama', permision_id: 52, 'icon-color': '#42A5F5' },
      ],
    },
  ];

  login.model = model.value;
}

onBeforeMount(async () => {
  await fetchAndUpdateRoles();
});
</script>

<template>
  <ul class="layout-menu" style="padding-bottom: 6rem;">
    <div class="" v-for="(item, i) in model" :key="i">
      <app-menu-item
        v-if="item.items.some((i) => permissions.includes(i.permision_id))"
        :item="item"
        :index="i"
      />
    </div>
  </ul>
</template>

<style lang="scss" scoped></style>
