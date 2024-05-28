<template>
    <Dialog class="mx-2" v-model:visible="showDateDialog" modal header="Periodo" :style="{ width: '25rem' }">
        <div class="grid">
            <div class="col-12 px-0 mx-0">
                <!-- Botones para selección rápida de fechas -->
                <Button text label="Hoy" @click="setDateRange(0)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Ayer" @click="setDateRange(1)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Últimos 7 días" @click="setDateRange(7)" class="p-button-text col-12 p-1 m-0" />
                <Button text label="Últimos 14 días" @click="setDateRange(14)" class="p-button-text col-12 p-1" />
                <Button text label="Últimos 28 días" @click="setDateRange(28)" class="p-button-text col-12 p-0" />
            </div>

            <!-- <Divider></Divider> -->
            <div class="col-12 " style="display: flex; flex-direction: column;">


                <span class="text-l" style="font-weight: bold;">Desde </span>
                <Calendar style="min-width: max-content;" v-model="TempStartDate" />

            </div>

            <!-- <Divider></Divider> -->

            <div class="col-12 " style=" display: flex;flex-direction: column;">
                <span style="font-weight: bold; " class="text-l">Hasta </span>
                <Calendar style="min-width: max-content;" v-model="TempEndDate" showWeek />

            </div>


            <div class="col-12 p-0" style="display: flex; justify-content: center;">
                <div class="col-12" style="display: flex; justify-content: center;">
                    <Button @click="() => {
                        setDateRangeDirect(TempStartDate, TempEndDate);
                        showDateDialog = false;



                    }">Aplicar</Button>
                </div>
            </div>


        </div>
    </Dialog>


    <Dialog class="mx-2" v-model:visible="showAddNotesDialog" modal header="Notas de Transporte de orden"
        :style="{ width: '25rem' }">


        <p>Desea ageregar notas?</p>

        <div>

            <Textarea v-model="notesToSend" style="width: 100%;resize: none;height: 10rem"></Textarea>
        </div>
        <template #footer>
            <div class="pt-3" style="display: flex;justify-content: end;align-items: end;">
                <Button text @click="showAddNotesDialog = false" severity="danger" label="cancelar"></Button>
                <Button @click="sendData(itemsToPrepare.filter(order => order.quantity != 0))" severity="help"
                    label="Alistar orden"></Button>

            </div>

        </template>

    </Dialog>

    
<Dialog class="mx-2 " v-model:visible="showNotesDialog" modal header="Notas de la orden" :style="{ width: '28rem' }">

<div>
    <p>
        <b>Autor de la nota: </b>{{currentNoteToShow.item.name}} 
    </p>

    <p>
        <b>Fecha: </b>{{currentNoteToShow.item.status_timestamp.split('T')[0]}} 
    </p>

    <p style="border: 1px solid;border-radius: 0.3rem;" class="p-2">
        <b>Contenido de la Observacion: </b> <br>{{currentNoteToShow.item.notes}} 
    </p>

</div>

</Dialog>


    <Dialog class="mx-2" v-model:visible="showActionDialog" modal header="Interactuar con la orden"
        :style="{ width: '25rem' }">

        <div class="m-0 p-0"
            style="display: flex;width:min-content;width: 100%; flex-direction: column; justify-content:start;gap:0.5rem">
            <router-link :to="`/purchase-order/recorrido/purchase-order-view/${dataToInract.purchase_order_id}`">
                <Button text style="width: 100%;" severity="help" class="" label="Ver detalles" icon="pi pi-eye" />
            </router-link>

            <Button text label="Descargar en excel" style=""
                @click="prepareDownload(dataToInract.purchase_order_id, dataToInract.site_name, dataToInract.expedition_date?.split('T')[0])"
                severity="success" class="" icon="pi pi-download" />

                <Button @click="chargeHistory(dataToInract.purchase_order_id)" text label="Ver Historial" style="" severity="warning" class="" icon="pi pi-history p-0 m-0" />


            <Button @click="openPrepare(dataToInract.purchase_order_id)" label="Transportar orden" style=""
                severity="help" class="" icon="pi  p-0 m-0" />

        </div>

    </Dialog>


    <Dialog class="px-2" v-model:visible="showPrepare" modal header="Transportar orden"
        :style="{ width: 'max-content', 'max-width': '100vw' }">



        <div class="m-0 p-0"
            style="display: flex;width:min-content;width: 100%; flex-direction: column; justify-content:start;gap:0.5rem">



            <p class="m-0 p-0"><b>Autorizada por:</b> {{ dataToInract.responsible_lap }} </p>
            <p class="m-0 p-0"><b>Sede:</b> {{ dataToInract.site_name }} </p>
            <p class="mt-0 p-0"><b>Fecha de autorizacion:</b> {{ dataToInract.status_timestamp.split('T')[0] }} </p>



            <div style="display: flex;flex-direction: column;align-items: start;gap: 0.5rem;">
                <div v-for="color in color_code" style="display: flex;align-items: center;gap: 1rem;">
                    <Tag :style="`background-color:${color.color}`" style="height: 2rem; aspect-ratio: 4 / 3;">
                    </Tag>
                    <span> {{ color.description }}</span>
                </div>
            </div>


            <DataTable showGridlines style="max-width: 1024px;" stripedRows v-model:filters="filters"
                class="col-12 m-auto p-0 m-0" :value="itemsToPrepare.filter(order => order.quantity != 0)"
                tableStyle="min-width: 50rem;">





                <Column class="py-0" field="item_id" header="id"></Column>



                <Column class="py-0" field="item_name" header="Item">


                    <template #body="data">
                        <p
                            :style="data.data.ajustment === 0 ? 'text-decoration: line-through;background-color:#ffc9d1' : ''">
                            {{ data.data.item_name }}</p>
                    </template>

                </Column>

                <Column class="py-0 " field="quantity_adjusted" header="cant. Aprobada en despacho">
                    <template #body="data">
                        <p class="text-right">
                            {{ data.data.quantity_adjusted }}
                        </p>
                    </template>
                </Column>

                <Column class="py-0 px-0" field="quantity" header="cant. realmente recibida">


                    <template #body="data">
                        <input @change="verify(data.data)" @keydown="handleKeydown" class=" text-right"
                            :max="data.data.quantity" :min="0" v-model="data.data.ajustment"
                            style="background-color: transparent; height: 2rem; width:100%; border: none;"
                            :style="data.data.quantity_adjusted === data.data.ajustment ? 'background-color: aquamarine;' : data.data.ajustment === 0 ? 'background-color:#ffc9d1' :
                                data.data.ajustment < data.data.quantity ? 'background-color:#FFAF33;border:2px solid #FF7A33' : data.data.ajustment > data.data.quantity ? 'background-color:#FF3393;border:2px solid #FF3342' : ''"
                            type="number" />
                    </template>

                </Column>
                <Column class="py-0" field="unit_measure" header="Und. de medida"></Column>

                <Column class="py-0" field="quantity" header="interactuar">

                    <template #body="data">
                        <Button @click="data.data.ajustment = data.data.quantity_adjusted"
                            style="min-width: max-content;" text class="px-0 py-1" label="Esta completo"></Button>
                    </template>

                </Column>




            </DataTable>




        </div>



        <template #footer>
            <div class="pt-3" style="display: flex;justify-content: end;align-items: end;">
                <Button outlined @click="complete_all" severity="help" label="Todo esta completo"></Button>
                <Button @click="openShowNote(itemsToPrepare.filter(order => order.quantity != 0))" severity="help"
                    label="Transportar orden"></Button>

            </div>

        </template>
    </Dialog>

    <!-- {{ invetnoryDailyReports }} -->
    <div class=" m-auto" style="max-width: 1024px;">
        <!-- <div class=" m-0 col-12 " style="align-items: center;">



            <div class=" p-0  mb-3" style="display: flex;align-items:center;gap:1rem">
                <span class="text-xl"> <b>Sedes</b></span>
                <MultiSelect style="" display="chip" multiple v-model="selectedSites" optionLabel="site_name"
                    :options="sites.filter(s => s.site_id != 12 & s.site_id != 13)" class="text-sm multi p-0">
                </MultiSelect>
            </div>


            <div class="col p-0" style="display: flex; gap:1rem;align-items:center">
                <span class="text-xl"> <b>Periodo</b></span>
                <InputText class="" @click="showDateDialog = true" style="height: 2.7rem;"
                    :value="`${formatDate(startDate)}  |  ${formatDate(endDate)}`" placeholder="periodo" />
         

                <Button @click="getFiltered" icon="pi pi-search" severity="help" class="text-center p-0 col-12  md:p-0"
                    style="height: 2.5rem;width:min-content;aspect-ratio:  1 / 1;font-weight: bold; border-radius: 50%; display: flex;justify-content:center ; "></Button>

            </div>




        </div> -->

        <div class="col-12 px-3 mt-4 pack-butons" style="display: flex;justify-content:end;gap: 1rem;">
            <Button severity="help" icon="pi pi-download" label="Descargar Todo" @click="downloadAll"></Button>
            <Button severity="help" icon="pi pi-download" label="Descargar Informe" @click="downloadAll2"></Button>

        </div>

    </div>


    <div class="mt-3" style="min-height:20vh; display: flex; justify-content:center;align-items:center">


        <DataTable showGridlines style="max-width: 1024px;" v-model:filters="filters" class="col-12 m-auto"
            :value="invetnoryDailyReports" tableStyle="min-width: 50rem;">
            <template #header>
                <div class="grid" style="align-items:center">
                    <div class="col-12 md:col-6 p-3">
                        <span class="text-xl" style="width: 100%;"> Ordenes pendientes por Transportar</span>
                    </div>
                    <div class="col-12 md:col-6 p-3">
                        <InputText style="width: 100%;" class="" v-model="filters['global'].value"
                            placeholder="Buscar..." />
                    </div>


                </div>
            </template>
            <Column class="py-1" field="purchase_order_id" header="ID"></Column>
            <Column class="py-1" field="responsible_lap" header="Autorizada por"></Column>
            <Column class="py-1" field="site_name" header="Sede"></Column>
            <Column class="py-1" field="date" header="Fecha de autorizacion">

                <template #body="data">
                    <p style="min-width: max-content">
                        {{ data.data.status_timestamp?.split('T')[0] }}

                    </p>

                </template>

            </Column>

            <Column style="min-width:max-content;" class="py-1" field="date" header="Hora">

                <template #body="data">
                    <span style="min-width: max-content;">
                        {{ data.data.status_timestamp?.split('T')[1] }}

                    </span>

                </template>

            </Column>

            <Column class="py-1" field="date" header="Estado actual">

                <template #body="data">
                    <Tag style="width: 100%;height:2.7rem"
                        :style="`background-color:${color_status[data.data.current_status]}`">
                        {{ data.data.current_status }}

                    </Tag>

                </template>

            </Column>
            <!-- 
            <Column class="py-1" field="date" header="Prosima etapa">

                <template #body="data">
                    <Tag severity="danger" style="width: 100%;">
                        Alistado

                    </Tag>

                </template>

            </Column> -->

            <Column style="width: 20px;" class="py-1 mx-0 px-0" field="date" header="Acciones">
                <template #body="data">

                    <div class="m-0 p-0"
                        style="display: flex;width:min-content; justify-content:start; align-items:center;gap:0.5rem">

                        <Button label="Interactuar" @click="openDataInteract(data.data)" severity="help" class=""
                            icon="pi " />

                    </div>



                </template>
            </Column>
        </DataTable>

    </div>


    <Dialog class="mx-2 " v-model:visible="showHistoryDialog" modal header="Historial de la orden" :style="{ width: 'min-content' }">
    
    <Timeline :value="currentOrderHistory">
        <template #opposite="data" align="">
            <p  style="min-width: max-content;" class="p-text-secondary m-0 p-0">{{data.item.status_timestamp.split('T')[0]}}</p> <br>
            <p  style="min-width: max-content;" class="p-text-secondary m-0 p-0">{{data.item.status_timestamp.split('T')[1]?.split(':').slice(0,2).join(':')}}</p>
        </template>
        <template #content="data">
            <p class="m-0"> <b>{{data.item.lap_name}}</b></p>
            <p class="m-0">{{data.item.name}}</p>

            <p v-if="data.item.notes">
                <b>Notas</b>
                {{ data.item.notes }}
            </p>
            <div style="display: flex;gap: 1rem; ">

                <Button  :disabled="!data.item.notes"  style="height: 2rem;opacity: 0; border-radius: 0.3rem;" cla severity="help" class="" label="Notas"></Button>
                <Button :disabled="!data.item.conflict" style="height: 2rem;border-radius: 0.3rem;" severity="danger" class="mb-4" label="Conflictos"></Button>
            </div>
            
        </template>
    </Timeline>


</Dialog>

</template>



<script setup>
import { ref, onMounted } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { siteService } from '@/service/siteService.js'
import { dailyInventoryReportsService } from '@/service/inventory/dailyInventoryService.js'
import { purchaseOrderService } from '@/service/inventory/purchaseOrderService'
import * as XLSX from 'xlsx';

import { format } from 'date-fns';
import { da, es } from 'date-fns/locale';
// import * as xlsxstyle from 'xlsx-style';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useReportesStore } from '@/store/reportes';
import { loginStore } from '@/store/user.js'
const loadingStore = useReportesStore()
const showActionDialog = ref(false)
const itemsToPrepare = ref([])
const showAddNotesDialog = ref(false)
const currentNoteToShow = ref({})


const openNote = (note) => {
    if (note){
        showNotesDialog.value = true
        currentNoteToShow.value = note  
    }

}



const openShowNote = (itemsData) => {
    


    if (itemsData.some(item => !item.ajustment && item.ajustment !== 0)) {
        alert("por favor complete todos los campos")
        return
    }

    if (itemsData.some(item => item.ajustment > item.quantity_adjusted)) {
        alert("No puedes enviar mas de lo solicitado")
        return
    }

    showAddNotesDialog .value = true


}

const notesToSend = ref('')
const dataToInract = ref({})
const showNotesDialog = ref(false)

const showHistoryDialog = ref(false)

const currentOrderHistory = ref([])

const chargeHistory = async(purchase_order_id) => {
     showHistoryDialog.value = true
    currentOrderHistory.value = await purchaseOrderService.getPurchaseOrderHistory(purchase_order_id)
}

const complete_all = () => {
    itemsToPrepare.value.forEach(element => {
        element.ajustment = element.quantity_adjusted
    });
}


const showPrepare = ref(false)

const openDataInteract = (data) => {
    showActionDialog.value = true
    dataToInract.value = data
}


const openPrepare = async (order_id) => {
    showPrepare.value = true
    itemsToPrepare.value = await purchaseOrderService.getpurchaseOrderEntriesBypurchaseOrderID(order_id)

}

const color_status = {
    Generada: '#FF0000', // Rojo
    Lista: '#FFA500', // Naranja
    "Entregada al transportista": '#FFFF00', // Amarillo
    Completada: '#00FF00' // Verde
};

const color_code = [
    {
        color: '#7fffd4',
        description: 'Esta todo bien'
    },
    {
        color: 'rgb(251 53 146)',
        description: 'Cuidado estan enviando mas de lo que reportan'
    },
    {
        color: ' rgb(255, 175, 51)',
        description: 'Recibiste menos de lo reportado'
    }
]

const lap_id = 3
const store = loginStore()
const sites = ref([])
const selectedSites = ref([{}])
const showDateDialog = ref(false)
const TempStartDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))
const TempEndDate = ref(new Date());
const startDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))
const endDate = ref(new Date());
const invetnoryDailyReports = ref()
const filters = ref();
const setDateRangeDirect = (start, end) => {
    startDate.value = start
    endDate.value = end
}

const setDateRange = (days) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Incrementa en uno para incluir el día de mañana

    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - days); // Ajustado para incluir el día de hoy en el rango si es necesario

    TempStartDate.value = pastDate;


    if (days == 1) {
        TempEndDate.value = today;
        endDate.value = TempEndDate.value
        startDate.value = TempStartDate.value
        showDateDialog.value = false



    } else {
        TempEndDate.value = tomorrow;
        startDate.value = TempStartDate.value
        endDate.value = TempEndDate.value
        showDateDialog.value = false

    }

    getFiltered()
}

onMounted(async () => {
    sites.value = await siteService.getSites()
    selectedSites.value = sites.value
    invetnoryDailyReports.value = await purchaseOrderService.getPurchaseOrderByLap_id(lap_id)
})




const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

initFilters();

function formatDate(dated) {
    const date = new Date(dated)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatDateReverse(dated) {
    const date = new Date(dated)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
}


const getFiltered = async () => {
    const site_ids = selectedSites.value.map(site => site.site_id)
    const user_id = store.rawUserData.id
    const new_startDate = formatDate(startDate.value)
    const new_endDate = formatDate(endDate.value)
    invetnoryDailyReports.value = await purchaseOrderService.getAllpurchaseOrderReportsFiltered(site_ids, new_startDate, new_endDate)
}

const entries = ref([])

const prepareDownload = async (purchase_order_id, site_name, date) => {
    entries.value = await purchaseOrderService.getpurchaseOrderEntriesBypurchaseOrderID(purchase_order_id)
    const data = entries.value.map(product => ({
        "Producto": product.item_name,
        "Cantidad": product.quantity,
        "Unidad de medida": product.unit_measure
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
        { wch: Math.max(30, "Producto".length) },
        { wch: Math.max(0, "Cantidad".length) },
        { wch: Math.max(0, "Unidad de medida".length) }]
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, `Orden_de_compra_${site_name}_${date} .xlsx`);

};


const prepareItemsToSend = (itemsData) => {



    const prepareItemsToAdjustQuantity = itemsData.map(data => {
        if (data.quantity != data.ajustment) {
            return {
                "order_purchase_entry_id": data.entry_id,
                "quantity_adjusted": data.ajustment
            }
        }

    }).filter(data => data)

    return prepareItemsToAdjustQuantity

}

const sendData = async (itemsData) => {



    if (itemsData.some(item => !item.ajustment && item.ajustment !== 0)) {
        alert("por favor complete todos los campos")
        return
    }




    loadingStore.setLoading(true, 'Transportando orden')
    const dataToSend = {
        "purchase_order_id": dataToInract.value.purchase_order_id,
        "lap_id": dataToInract.value.lap_id,
        "responsible_id": store.rawUserData.id,

        "ajusts": prepareItemsToSend(itemsData),
        order_purchase_notes:notesToSend.value
    }



    await purchaseOrderService.PreparePurchaserOrder(dataToSend)
    invetnoryDailyReports.value = await purchaseOrderService.getPurchaseOrderByLap_id(lap_id)

    showActionDialog.value = false
    showPrepare.value = false
    loadingStore.setLoading(false, 'Transportando orden')
    showNotesDialog.value = false
    showAddNotesDialog.value = false
}








const downloadAll3 = async () => {

    const reportes = invetnoryDailyReports.value

    reportes.forEach(reporte => {
        prepareDownload(reporte.purchase_order_id, reporte.site_name, reporte.expedition_date?.split('T')[0])
    });

}


const downloadAll2 = async () => {
    loadingStore.setLoading(true, "generando descargas");

    const reportes = invetnoryDailyReports.value;
    const entries = [];

    for (const reporte of reportes) {
        const reports = await purchaseOrderService.getpurchaseOrderEntriesBypurchaseOrderID(reporte.purchase_order_id)
        entries.push(...reports);
    }

    const reports = {};

    // Recorre cada entrada
    entries.forEach(entry => {
        const siteName = entry.site_name;
        const itemName = entry.item_name;
        const quantity = entry.quantity;
        const unitMeasure = entry.unit_measure;

        // Si el item no existe en reports, inicialízalo
        if (!reports[itemName]) {
            reports[itemName] = { unit_measure: unitMeasure };
        }

        // Si el sitio no existe en el item, inicialízalo
        if (!reports[itemName][siteName]) {
            reports[itemName][siteName] = 0;
        }

        // Suma la cantidad del item en el sitio
        reports[itemName][siteName] += quantity;
    });

    // Obtener todas las sedes
    const allSites = [...new Set(entries.map(entry => entry.site_name))];

    // Crear la data para el excel
    const data = [];

    // Formatear las fechas
    const formattedStartDate = format(startDate.value, 'dd-MMMM-yyyy', { locale: es });
    const formattedEndDate = format(endDate.value, 'dd-MMMM-yyyy', { locale: es });

    // Agregar la fila de fecha fusionada
    if (formattedStartDate == formattedEndDate) {
        data.push([`ORDENES DE COMPRA DEL ${formattedStartDate.toUpperCase()}`, ...Array(allSites.length + 2).fill('')]);

    } else {
        data.push([`ORDENES DE COMPRA DEL${formattedStartDate.toUpperCase()} AL ${formattedEndDate.toUpperCase()}`, ...Array(allSites.length + 2).fill('')]);

    }

    // Crear la primera fila (encabezados)
    const headers = ['PRODUCTO', 'UNIDAD DE MEDIDA', ...allSites, 'TOTAL'];
    data.push(headers);

    // Crear las filas para cada producto
    for (const [product, sites] of Object.entries(reports)) {
        const row = [product, sites.unit_measure];
        let totalQuantity = 0;
        for (const site of allSites) {
            const quantity = sites[site] || 0;
            row.push(quantity);
            totalQuantity += quantity; // Sumar la cantidad para el total
        }
        row.push(totalQuantity); // Añadir la cantidad total
        data.push(row);
    }

    // Crear un nuevo libro de trabajo
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Inventario por Sede');

    // Agregar la data al worksheet
    data.forEach((row, index) => {
        const worksheetRow = worksheet.addRow(row);
        if (index === 0) {
            worksheetRow.height = 40; // Mayor altura para la fila del título
            worksheetRow.font = { name: 'Arial', bold: true, size: 14 }; // Texto en negrita y en mayúsculas
            worksheetRow.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true }; // Texto centrado vertical y horizontalmente
            worksheet.mergeCells(`A1:${worksheet.getColumn(allSites.length + 3).letter}1`);
            worksheet.getRow(1).eachCell(cell => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFF00' }
                };
            });
        } else if (index === 1) {
            worksheetRow.font = { name: 'Arial', bold: true };
        }
    });


    // Estilo de bordes y ajuste de columnas
    worksheet.columns.forEach((column, index) => {
        column.width = index === 0 ? 30 : (index === 1 ? 25 : 15);
        column.eachCell(cell => {
            cell.font = { name: 'Arial' };
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };

        });
    });

    // Estilo para la fila de encabezados (negrita)
    worksheet.getRow(2).eachCell(cell => {
        cell.font = { name: 'Arial', bold: true };
    });
    worksheet.getRow(1).eachCell(cell => {
        cell.font = { name: 'Arial', bold: true, size: 16 };
    });

    // Ocultar líneas de cuadrícula
    worksheet.views = [{ showGridLines: false }];

    // Convertir el libro de trabajo a un blob
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Descargar el archivo Excel
    if (formattedStartDate == formattedEndDate) {
        saveAs(blob, `Reporte de inventario del ${formattedStartDate}.xlsx`);
    } else {
        saveAs(blob, `Reporte de inventario del ${formattedStartDate} al ${formattedEndDate} .xlsx`);

    }
    loadingStore.setLoading(false, "generando descargas");
};



const downloadAll = async () => {

    loadingStore.setLoading(true, "generando descargas")
    const reportes = invetnoryDailyReports.value



    for (const reporte of reportes) {
        const reports = await purchaseOrderService.getpurchaseOrderEntriesBypurchaseOrderID(reporte.purchase_order_id)
        entries.value.push(...reports);
    }

    console.log(entries.value)

    const data = entries.value.map(product => ({
        "Fecha": product.date.split('T')[0],
        "Hora": product.date.split('T')[1],
        "Sede": product.site_name,
        "Producto": product.item_name,
        "Cantidad": product.quantity,
        "Unidad de medida": product.unit_measure
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
        { wch: Math.max(0, "Unidad de medida".length) },
        { wch: Math.max(0, "Unidad de medida".length) },
        { wch: Math.max(0, "Unidad de medida".length) },
        { wch: Math.max(30, "Producto".length) },
        { wch: Math.max(0, "Cantidad".length) },
    ]
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, `Compras de todas las sedes.xlsx`);
    loadingStore.setLoading(false, "generando descargas")


};


function handleKeydown(event) {
    // Comprobar si la tecla presionada es la coma
    if (event.key === ',') {
        alert('Por favor usa punto ( . ) para los decimales, gracias');
        event.preventDefault(); // Prevenir que la tecla tenga efecto en el input
    }



}


const verify = (data) => {
    if (data.ajustment > data.quantity) {
        alert('Estas seguro de que hay mas de lo reportado?')
        data.ajustment == data.quantity
    }
}

</script>




<style scoped>
.multi {
    width: 100%;
    max-width: 930px;
}

@media (max-width:500px) {

    .multi {
        width: 80%;
    }

    .pack-butons {
        flex-direction: column;
    }

}
</style>