<template>

    <Dialog
        class="mx-2"
        v-model:visible="showHistoryDialog"
        modal
        :header="`Historial de la pqr  ID   ${currentOrderHistory.pqr_request_id}`"
        :style="{ width: '40rem' }"
    >
        <Timeline :value="currentOrderHistory.status_history">
            <template #opposite="data" align="">
                <div style="display: flex; flex-direction: column;">
                    <p
                        style="min-width: max-content; margin: 0; padding: 0;"
                        class="p-text-secondary m-0 p-0"
                    >
                        {{ data.item.timestamp?.split(' ')[0] }}
                    </p>
                    <p
                        style="min-width: max-content; margin: 0; padding: 0;"
                        class="p-text-secondary m-0 p-0"
                    >
                        {{
                            data.item.timestamp
                                ?.split(' ')
                                ?.slice(1, 4)
                                ?.join(' ')
                        }}
                    </p>
                </div>
            </template>
            <template #content="data">
                <Tag :style="`background-color:${data.item.color}`">
                    <p class="m-0">
                        <b>{{ data.item.status }}</b>
                    </p>
                </Tag>

                <div></div>

                <p
                    v-if="data.item.responsible_name"
                    class="m-0"
                    style="text-transform: capitalize;"
                >
                    <b>Responsable:</b>
                    {{ data.item.responsible_name?.toLowerCase() }}
                </p>

                <p class="p-0 m-0" v-if="data.item.value"
                    >Le costo a la empresa <b>{{ data.item }}</b></p
                >
                <p class="p-0 m-0" v-if="data.item.order_id"
                    >Orden entregada <b>{{ data.item.order_id }}</b></p
                >
                <p v-if="data.item.notes">
                    <b>Notas</b>
                    {{ data.item.notes }}
                </p>
                <br />
                <div style="display: flex; gap: 1rem;"></div>
            </template>
        </Timeline>
    </Dialog>

    <Dialog
        class="mx-2"
        v-model:visible="showPqrGest"
        modal
        :header="`GESTION DE LA PQR  ID:    ${currentPqrGest.pqr_request_id}`"
        :style="{ width: '50rem' }"
    >
        <div style="display: flex; flex-direction: column;">
            <h6 class="mx-0 my-0"><b>TIPO</b></h6>
            <p style="display: flex; align-items: center; gap: 1rem;">
                {{ currentPqrGest.request_type }}
            </p>

            <h6 class="mx-0 my-0"><b>CANAL</b></h6>
            <p class="m-0 p-0" style="display: flex; align-items: center; gap: 1rem;">
                {{ currentPqrGest.channel }}
            </p>

            <h6 class="mt-3 mb-2"><b>CONTEXTO</b></h6>

            <div style="display: flex; gap: 1rem">
                <div
                    style="width: 100%; max-width: 0.4rem; border-radius: 45rem; box-sizing: border-box;"
                    :style="`background-color:${currentPqrGest.channel_color}`"
                ></div>
                <div style="display: flex; flex-direction: column;">
                    <p>{{ currentPqrGest.request_content }}</p>
                </div>
            </div>

            <h6
                class="mt-3 mb-3"
                v-if="currentPqrGest.user_name || currentPqrGest.user_phone"
            >
                <b>DATOS DEL CLIENTE</b>
            </h6>

            <div style="display: flex; gap: 1rem">
                <div
                    style="width: 100%; max-width: 0.4rem; border-radius: 45rem; box-sizing: border-box;"
                    :style="`background-color:${currentPqrGest.channel_color}`"
                ></div>
                <div style="display: flex; flex-direction: column;">
                    <span v-if="currentPqrGest.user_name"
                        ><b>Nombre: </b> {{ currentPqrGest.user_name }}</span
                    >
                    <span v-if="currentPqrGest.user_phone"
                        ><b>Telefono: </b> {{ currentPqrGest.user_phone }}</span
                    >
                    <span v-if="currentPqrGest.user_address"
                        ><b>Direccion: </b> {{ currentPqrGest.user_address }}</span
                    >
                    <span v-if="currentPqrGest.order_id"
                        ><b>Orden: </b> {{ currentPqrGest.order_id }}</span
                    >
                </div>
            </div>

            <h6><b>HISTORIAL</b></h6>

            <div style="display: flex; gap: 1rem">
                <div
                    style="width: 100%; max-width: 0.4rem; border-radius: 45rem; box-sizing: border-box;"
                    :style="`background-color:${currentPqrGest.status_history[0].color}`"
                ></div>
                <div style="display: flex; flex-direction: column;">
                    <Timeline :value="currentPqrGest.status_history">
                        <template #opposite="data" align="">
                            <div style="display: flex; flex-direction: column;">
                                <p
                                    style="min-width: max-content; margin: 0; padding: 0;"
                                    class="p-text-secondary m-0 p-0"
                                >
                                    {{ data.item.timestamp?.split(' ')[0] }}
                                </p>
                                <p
                                    style="min-width: max-content; margin: 0; padding: 0;"
                                    class="p-text-secondary m-0 p-0"
                                >
                                    {{
                                        data.item.timestamp
                                            ?.split(' ')
                                            ?.slice(1, 4)
                                            ?.join(' ')
                                    }}
                                </p>
                            </div>
                        </template>
                        <template #content="data">
                            <Tag :style="`background-color:${data.item.color}`">
                                <p class="m-0">
                                    <b>{{ data.item.status }}</b>
                                </p>
                            </Tag>
                            <div></div>
                            <p
                                v-if="data.item.responsible_name"
                                class="m-0"
                                style="text-transform: capitalize;"
                            >
                                <b>Responsable:</b>
                                {{ data.item.responsible_name?.toLowerCase() }}
                            </p>

                            <p class="p-0 m-0" v-if="data.item.value"
                                >Le costo a la empresa
                                <b>{{ formatToColombianPeso(data.item.value) }}</b></p
                            >
                            <p class="p-0 m-0" v-if="data.item.order_id"
                                >Orden entregada <b>{{ data.item.order_id }}</b></p
                            >
                            <p v-if="data.item.notes">
                                <b>Notas</b>
                                {{ data.item.notes }}
                            </p>
                            <br />
                            <div style="display: flex; gap: 1rem;"></div>
                        </template>
                    </Timeline>
                </div>
            </div>

            <h6><b>Como desea proceder?</b></h6>

            <Dropdown
                v-model="selecte_status_update"
                :options="allStatus.filter((d) => d.id != 2)"
                optionLabel="name"
                optionValue="id"
            ></Dropdown>

            <div v-if="selecte_status_update">
                <div
                    style="display: flex; justify-content: space-between; margin: 1rem 0"
                    v-if="selecte_status_update == 4 || selecte_status_update == 7"
                >
                    <h6 class="m-0">Le dio una cortesia del 100% ?</h6>
                    <Checkbox binary v-model="costo"></Checkbox>
                </div>

                <div
                    v-if="selecte_status_update == 4 || selecte_status_update == 7"
                    style="display: flex; justify-content: space-between; margin: 1rem 0"
                >
                    <h6 class="m-0">Le dio un bono de descuento?</h6>
                    <Checkbox v-model="order" binary></Checkbox>
                </div>

                <div
                    v-if="(selecte_status_update == 4 || selecte_status_update == 7) && order"
                >
                    <h6 class="m-0 my-3">porcentaje del descuento</h6>
                    <InputNumber v-model="descuento" style="width: 100%;" />
                </div>

                <div
                    v-if="
                        (selecte_status_update == 4 || selecte_status_update == 7) &&
                        (costo || order)
                    "
                >
                    <h6 class="m-0 my-3">Valor de la orden</h6>
                    <InputNumber v-model="costovalue" style="width: 100%;" />
                </div>

                <div
                    v-if="
                        (selecte_status_update == 4 || selecte_status_update == 7) &&
                        (order || costo)
                    "
                >
                    <h6 class="m-0 my-3">Id de la orden</h6>
                    <InputText v-model="inputOrder" style="width: 100%;" />
                </div>

                <div>
                    <h6 class="m-0 my-3">Detalles</h6>
                    <Textarea v-model="notes" rows="5" style="resize: none; width: 100%;">
                    </Textarea>
                </div>

                <h6
                    style="background-color: #ff00002e;"
                    class="p-3"
                >
                    Recuerde que esta firmando como <b>{{ login.rawUserData.name }}</b> y por
                    ende se hace responsable,
                    <b
                        >No preste sus credenciales de Salchigest, cada miembro de la empresa
                        tiene los suyos, muchas gracias</b
                    >
                </h6>
            </div>
        </div>

        <template #footer>
            <div style="display: flex; justify-content: end; margin-top: 2rem">
                <Button @click="sendPqrUpdate" label="Enviar" severity="help"></Button>
            </div>
        </template>
    </Dialog>

    <div style="min-width: 1200px; margin-top: 3rem;">
        <div
            style="display: flex; justify-content: center; width: 100%; align-items: end; gap: 1rem;"
            class="mt-0 px-1"
        >
            <div
                class="my-0 px-0"
                style="display: flex; transition: all ease 0.5s; align-items: end; gap: 1rem"
            >
                <h6><b>Desde</b></h6>
                <Calendar
                    style="max-width: 7.5rem;"
                    v-model="temp_start_date"
                    dateFormat="dd-mm-yy"
                ></Calendar>

                <h6><b>Hasta</b></h6>
                <Calendar
                    style="max-width: 7.5rem;"
                    v-model="temp_end_data"
                    dateFormat="dd-mm-yy"
                ></Calendar>

                <h6><b>Sedes</b></h6>
                <MultiSelect
                    style="max-width: 17rem; min-width: 15rem;"
                    :options="sites.filter((s) => s.show_on_web)"
                    optionLabel="site_name"
                    v-model="selected_sites"
                    placeholder="SEDES"
                />

                <Button
                    @click="getReports(temp_start_date, temp_end_data)"
                    style="min-width: max-content;"
                    severity="help"
                    label="Buscar"
                    icon="pi pi-search"
                ></Button>
                <Button
                    @click="downloadExcel"
                    style="min-width: max-content;"
                    severity="help"
                    label="Descargar Excel"
                    icon="pi pi-download"
                ></Button>
            </div>
        </div>

        <div
            class="px-0 mt-2"
            style="display: flex; width: 100%; align-items: center; justify-content: end; gap: 1rem;"
        >
        </div>

        <div class="scroll-container" style="">
            <div style="display: flex; overflow: hidden; align-items: start;">
                <DataTable
                    :style="`transform:translateX(${login.currentSection_users.x}%);transition: .5s all ease;`"
                    :paginator="true"
                    :rows="15"
                    style="width: 100%;"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Usuarioses"
                    :rowsPerPageOptions="[5, 10, 25, 100]"
                    scrollable
                    showGridlines
                    scrollHeight="65vh"
                    stripedRows
                    class="col-12 m-auto p-2"
                    :value="customers"
                    tableStyle="min-width: 50rem;"
                    :filters="filters"
                >
                    <template #header>
                        <div
                            class="grid p-3"
                            style="align-items: center; justify-content: space-between; display: flex; gap: 1rem;"
                        >
                            <h4 class="px-2">
                                <i class="fa-regular fa-bars-progress"></i>
                                <b style="text-transform: uppercase;"
                                    >USUARIOS <b>{{ route.params.section }}</b></b
                                >
                            </h4>

                            <div style="display: flex; gap: 1rem;">
                                <InputText
                                    class=""
                                    v-model="filters['global'].value"
                                    placeholder="Buscar Usuarios..."
                                />
                            </div>
                        </div>
                    </template>

                    <column
                        v-for="column in dataColumns"
                        :key="column.columnValue"
                        #body="contract"
                        :header="column.columnName"
                        :style="`min-width:${column.size}`"
                        :field="column.columnValue"
                        class="my-0 py-2"
                    >
                        <div
                            class="p"
                            v-if="column.columnValue == 'orders'"
                            style="display: flex; gap: 0.1rem; flex-direction: column; align-items: center;"
                        >
                            <div
                                v-for="(i, index) in contract.data[column.columnValue]"
                                :key="index"
                                :style="`background-color:${pastel_colors[index]}`"
                                style="padding: 0.5rem; box-shadow: 0 0 1rem #00000020; border-radius: 0.5rem; margin: 0.3rem; width: max-content;"
                            >
                                <h6 class="m-0">
                                    <strong>ID: </strong>{{ i.id_order }}
                                </h6>
                                <h6 class="m-0">
                                    <strong>FECHA: </strong>{{ i.fecha_order }}
                                </h6>
                                <h6 class="m-0">
                                    <strong>VALOR: </strong
                                    >{{ formatoPesosColombianos(i.valor_orden) }}
                                </h6>
                            </div>
                        </div>

                        <h6
                            style="min-width: max-content;"
                            v-if="column.columnType == 'date'"
                            class="m-0 p-0"
                        >
                            {{
                                contract.data[column.columnValue]
                                    ?.split('-')
                                    .reverse()
                                    .join('-') || '---------'
                            }}
                        </h6>

                        <h6
                            style="min-width: max-content;"
                            v-if="column.columnType == 'responsible_name'"
                            class="m-0 p-0"
                        >
                            {{ contract.data?.status_history?.[0]?.responsible_name || 'No se ha interactuado' }}
                        </h6>

                        <h6
                            :style="column.columnType == 'max-content' ? 'min-width: max-content' : ''"
                            v-if="column.columnType == 'max-content'"
                            class="m-0 p-0"
                        >
                            {{ contract.data[column.columnValue] || '---------' }}
                        </h6>

                        <h6
                            style="text-align: start; min-width: max-content;"
                            v-if="column.columnType == 'order_id'"
                            class="m-0 p-0"
                        >
                            {{ contract.data[column.columnValue] || '---------' }}
                        </h6>

                        <h6
                            style="text-align: start;"
                            v-if="column.columnType == 'other'"
                            class="m-0 p-0"
                        >
                            {{ contract.data[column.columnValue] || '---------' }}
                        </h6>

                        <h6 v-if="column.columnType == 'rating'" class="m-0 p-0">
                            <Rating
                                :cancel="false"
                                v-if="contract.data[column.columnValue] > 0"
                                readonly
                                v-model="contract.data[column.columnValue]"
                            />
                            <span v-else> ------------</span>
                        </h6>

                        <h6
                            :style="column.columnType == 'max-content' ? 'min-width: max-content' : ''"
                            v-if="column.columnType == 'money'"
                            class="m-0 p-0"
                        >
                            {{
                                formatoPesosColombianos(contract.data[column.columnValue]) ||
                                    '---------'
                            }}
                        </h6>

                        <div
                            class="p-2"
                            v-if="column.columnValue == 'current_status'"
                            style="display: flex; gap: 0.1rem; flex-direction: column; align-items: center;"
                        >
                            <Tag
                                style="color: white; text-align: center;"
                                :style="`background-color:${contract.data[column.columnValue]?.color}`"
                            >
                                {{ contract.data[column.columnValue]?.status || '---------' }}
                            </Tag>
                            <b>
                                {{ contract.data[column.columnValue]?.timestamp || '---------' }}
                            </b>
                        </div>

                        <div
                            class="p-2"
                            v-if="column.columnValue == 'channel'"
                            style="display: flex; gap: 0.1rem; flex-direction: column; align-items: center;"
                        >
                            <Tag
                                style="color: white; text-align: center;"
                                :style="`background-color:${contract.data.channel_color}`"
                            >
                                {{ contract.data[column.columnValue] || '---------' }}
                            </Tag>
                        </div>

                        <div
                            class="p-2"
                            v-if="column.columnValue == 'tag_name'"
                            style="display: flex; gap: 0.1rem; flex-direction: column; align-items: center;"
                        >
                            <Tag
                                style="color: white; text-align: center;"
                                :style="`background-color:${contract.data.tag_color}`"
                            >
                                {{ contract.data[column.columnValue] }}
                            </Tag>
                        </div>

                        <div
                            class="p-2"
                            v-if="column.columnValue == 'restaurant'"
                            style="display: flex; gap: 0.1rem; flex-direction: column; align-items: start;"
                        >
                            <Tag
                                style="color: white;"
                                :style="`background-color:${contract.data.restaurant_color}`"
                            >
                                {{ contract.data[column.columnValue] }}
                            </Tag>
                        </div>
                    </column>
                </DataTable>
            </div>
        </div>

        <pqrUser @reload="update()"></pqrUser>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { pqrsService } from '@/service/pqrs/pqrsService';
import { onBeforeRouteLeave, START_LOCATION, useRoute } from 'vue-router';
import { fetchService } from '@/service/utils/fetchService';
import { URI } from '@/service/conection';
import { FilterMatchMode } from 'primevue/api';
import { loginStore } from '@/store/user';
import { formatToColombianPeso } from '@/service/valoresReactivosCompartidos';
import { formatoPesosColombianos } from '../callCenter/service/formatoPesos';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { PathService } from '@/service/pathService';
// import pqrUser from './pqrUser.vue';
import { useReportesStore } from '@/store/reportes';
import { pastelColors } from '../../../service/valoresReactivosCompartidos';

const store = useReportesStore();
const pastel_colors = [
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#A8E6CF',
    '#BAFFC9',
    '#90EE90',
    '#66CDAA',
    '#3CB371',
    '#2E8B57',
    '#006400',
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#A8E6CF',
    '#BAFFC9',
    '#90EE90',
    '#66CDAA',
    '#3CB371',
    '#2E8B57',
    '#006400',
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#A8E6CF',
    '#BAFFC9',
    '#90EE90',
    '#66CDAA',
    '#3CB371',
    '#2E8B57',
    '#006400',
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#A8E6CF',
    '#BAFFC9',
    '#90EE90',
    '#66CDAA',
    '#3CB371',
    '#2E8B57',
    '#006400',
    '#FFB3BA',
    '#FFDFBA',
    '#FFFFBA',
    '#BAFFC9',
    '#A8E6CF',
    '#BAFFC9',
    '#90EE90',
    '#66CDAA',
    '#3CB371',
    '#2E8B57',
    '#006400'
];

const tipos_graficas = [
    {
        name: 'Lineas',
        value: 'line'
    },
    {
        name: 'Barras',
        value: 'bar'
    }
];

const sites = ref([]);
const selected_sites = ref([]);

const type_graph = ref({
    name: 'Barras',
    value: 'bar'
});

const data_graphics = ref([]);

function formatearFechaLocal(fechaInput) {
    const fecha = new Date(fechaInput);
    if (isNaN(fecha)) {
        throw new Error('Fecha inválida');
    }

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const notes = ref('');
const endDate = ref();
const startDate = ref();
const temp_start_date = ref();
const temp_end_data = ref();

const obtain_pqr_report = async (start, end) => {
    if (!start || !end) {
        alert('Por favor, proporciona tanto la fecha de inicio como la fecha de fin.');
        return;
    }
    await getReports(start, end);
    startDate.value = start;
    endDate.value = end;
};

onBeforeMount(() => {
    endDate.value = new Date();
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
    startDate.value = fifteenDaysAgo;
    temp_start_date.value = startDate.value;
    temp_end_data.value = endDate.value;
});

const report = ref([]);
const report_keys = ref([]);
const report_type = ref([]);
const report_keys_type = ref([]);
const report_responsible = ref([]);
const report_keys_responsible = ref([]);

const options = ref([
    {
        name: 'Basico',
        x: 0
    }
]);

const inputOrder = ref();
const isActive = PathService.isActiveRoute;
const route = useRoute();
const nav_buttons = ref([]);
const active_button_nav = ref({
    id: 2,
    name: 'Generada',
    description: 'Estado inicial de la pqr',
    exist: true,
    color: '#3498DB'
});

const login = loginStore();
const allStatus = ref([]);
const selecte_status_update = ref();
const currentOrderHistory = ref([]);
const currentPqrGest = ref([]);
const showHistoryDialog = ref(false);
const showPqrGest = ref(false);

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};

onBeforeMount(() => {
    initFilters();
});

const dataColumns = ref([
    {
        columnName: 'Id',
        columnValue: 'user_id',
        columnType: 'other',
        size: '1rem',
        vif: true
    },
    {
        columnName: 'Nombre ',
        columnValue: 'user_name',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Clasificacion ',
        columnValue: 'classification',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Telefono',
        columnValue: 'phone_numbers',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Direccion Usuario',
        columnValue: 'user_address',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'No compras (Rango seleccionado)',
        columnValue: 'times_purchased',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Compras',
        columnValue: 'orders',
        columnType: 'orders',
        size: 'max-content',
        vif: true
    },
    {
        columnName: 'Gasto (Rango seleccionado)',
        columnValue: 'total_spent',
        columnType: 'money',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Primera compra',
        columnValue: 'joined_date',
        columnType: 'other',
        size: '15rem',
        vif: true
    },
    {
        columnName: 'Ultima compra',
        columnValue: 'last_purchase',
        columnType: 'other',
        size: '15rem',
        vif: true
    }
]);

const tags = ref({
    '2': '#3498DB',
    '4': '#2ECC71',
    '5': '#16A085',
    '6': '#E74C3C',
    '7': '#F39C12'
});

const newPqrs = ref({ question: '', answer: '' });
const pqrsToDelete = ref({});
const controlVisible = ref({});
const previousIndex = ref(null);
const customers = ref([{}]);
const visibles = ref({});
const editing = ref(false);
const visibleAnswers = ref({});
const costo = ref(false);
const costovalue = ref();
const order = ref(false);
const descuento = ref();

/**
 * NUEVO método para descargar el Excel usando la API:
 * https://excel-creator.salchimonster.com/crear_excel
 */
const downloadExcel = async () => {
    store.setLoading(true)
    if (!customers.value || customers.value.length === 0) {
        alert('No hay datos disponibles para descargar.');
        return;
    }

    // Agrupar por clasificación
    const groupedByClassification = customers.value.reduce((acc, user) => {
        const classification = user.classification || 'SIN CLASIFICACION';
        if (!acc[classification]) {
            acc[classification] = [];
        }
        acc[classification].push({
            'ID de Usuario': user.user_id || '---',
            'Nombre': user.user_name || '---',
            'Teléfonos': user.phone_numbers || '---',
            'Dirección': user.user_address || '---',
            'No. Compras':
                user.times_purchased !== undefined ? user.times_purchased : '---',
            'Total Gastado': user.total_spent
                ? formatoPesosColombianos(user.total_spent)
                : 0,
            'Primera Compra': user.joined_date || '---',
            'Última Compra': user.last_purchase || '---'
        });
        return acc;
    }, {});

    // Crear la estructura de "hojas" para la API
    const hojas = Object.keys(groupedByClassification).map((classification) => {
        return {
            hoja: classification,
            title: `Reporte de ${classification}`,
            column_widths: {
                'ID de Usuario': 15,
                Nombre: 25,
                Teléfonos: 15,
                Dirección: 30,
                'No. Compras': 15,
                'Total Gastado': 15,
                'Primera Compra': 18,
                'Última Compra': 18
            },
            data: groupedByClassification[classification]
        };
    });

    try {
        
        const response = await fetch(
            'https://excel-creator.salchimonster.com/crear-excel',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ hojas })
            }
        );

        if (!response.ok) {
            throw new Error('Error al generar el Excel');
        }

        // La API devuelve directamente un archivo Excel como Blob
        const blob = await response.blob();

        // Crear URL de descarga y disparar la descarga
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Reporte_de_Usuarios_Clasificacion.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        store.setLoading(false)
    } catch (error) {
        console.error('Error al descargar el Excel:', error);
        alert('Error al descargar el Excel');
        store.setLoading(false)
    }
};

const open_to_edit = (pq) => {
    editing.value = true;
    visibles.value.showDialogToAddPqrs = true;
    newPqrs.value = { ...pq };
};

const openToCreatePqrs = () => {
    editing.value = false;
    visibles.value.showDialogToAddPqrs = true;
};

const openToDelete = (pqrs) => {
    pqrsToDelete.value = pqrs;
    visibles.value.showDeleteDialog = true;
};

const toggle = (index) => {
    if (previousIndex.value !== null && previousIndex.value !== index) {
        controlVisible.value[previousIndex.value] = false;
    }
    controlVisible.value[index] = !controlVisible.value[index];
    previousIndex.value = controlVisible.value[index] ? index : null;
};

const update = async () => {
    // Ejemplo si quisieras recargar el reporte de PQRs
    // customers.value = await fetchService.get(`${URI}/get-all-pqrs`);
    // const status = await fetchService.get(`${URI}/get-all-pqrs-status`);
    // allStatus.value = status;
    // nav_buttons.value = status;
    // ...
    // Aquí se deja para no romper la lógica previa.
};

const deletePqrs = async (id) => {
    visibles.value.showDeleteDialog = false;
    await pqrsService.deletePqrs(id);
    update();
};

const getReports = async (starD, endD) => {
    if (!starD || !endDate) {
        return;
    }
    const start = formatearFechaLocal(starD);
    const end = formatearFechaLocal(endD);

    // Petición a tu backend para obtener la data de "customers"
    customers.value = await fetchService.post(`${URI}/get_user_report/`, {
        start_date: start,
        end_date: end,
        sites: selected_sites.value.map((s) => s.site_id)
    });
};

onMounted(async () => {
    await update();
    sites.value = await fetchService.get(`${URI}/sites`);
    sites.value.filter((s) => s.show_on_web);
    selected_sites.value = sites.value;
    await getReports(startDate.value, endDate.value);
});

watch(selecte_status_update, () => {
    resetPqrForm();
});

const resetPqrForm = () => {
    costovalue.value = null;
    notes.value = '';
    inputOrder.value = null;
    costo.value = false;
    order.value = false;
};

const sendPqrUpdate = async () => {
    const discountedValue =
        descuento.value && costovalue.value
            ? (
                  costovalue.value -
                  costovalue.value * (descuento.value / 100)
              ).toFixed(2)
            : costovalue.value;

    const dataToSend = {
        pqr_request_id: currentPqrGest.value.pqr_request_id,
        status_id: selecte_status_update.value,
        responsible_id: login.rawUserData.id,
        value: discountedValue || null,
        notes: notes.value,
        order_id: inputOrder.value || null
    };
    try {
        await fetchService.post(`${URI}/change-pqr-status`, dataToSend);
        update();
        showPqrGest.value = false;
        resetPqrForm();
    } catch (error) {
        console.error('Error al enviar la actualización de la PQR:', error);
    }
};

watch(
    () => route.params.section_id,
    () => {
        update();
    },
    { deep: true }
);

const createNewPqrs = async () => {
    const dataToSend = {
        question: newPqrs.value.question,
        answer: newPqrs.value.answer,
        place_id: route.params.section_id
    };

    visibles.value.showDialogToAddPqrs = false;
    if (editing.value) {
        await pqrsService.updatePqrs(dataToSend, newPqrs.value.id);
    } else {
        await pqrsService.createPqrs(dataToSend);
    }
    update();
};

const chargeHistory = async (historial) => {
    showHistoryDialog.value = true;
    currentOrderHistory.value = historial;
};

const chargePqr = async (historial) => {
    showPqrGest.value = true;
    currentPqrGest.value = historial;
};
</script>

<style scoped>
.pqrs {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 900px;
}

.pqrs-element {
    border-radius: 0.3rem;
}

.bar {
    max-width: 900px;
    display: flex;
    justify-content: end;
}

.container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
}

@keyframes an_show_actions {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
    }
}

.h {
    transform: translateX(100%);
}

@keyframes an_show_actions_2 {
    100% {
        opacity: 0;
        transform: translateX(20px);
    }
    0% {
        opacity: 1;
    }
}

.button-visible {
    animation: an_show_actions 0.3s ease;
}

.button-hide {
    animation: an_show_actions 0.3s ease;
}

/* Transición de fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.nav_bar {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
}

.nav_bar--buttons {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav_bar--buttons-button {
    background-color: transparent;
    padding: 0.3rem 1rem;
    border-radius: 0;
    min-width: max-content;
}

.nav_bar--buttons-button-selected {
    box-shadow: 0 0.3rem 0px var(--primary-color);
}
</style>
