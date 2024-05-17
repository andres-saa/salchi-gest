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

    <!-- {{ invetnoryDailyReports }} -->
    <div class=" m-auto" style="max-width: 1024px;">
        <div class="grid mx-0 mt-4 ">

            
            

            <div class="col-12 p-0 mt-4" style="display: flex; gap:1rem;justify-content:center;align-items:center">
                <span class="text-xl" > <b>Periodo</b></span>
                <InputText class="" @click="showDateDialog = true" style="height: 2.7rem;width:16rem"
                    :value="`${formatDate(startDate)}  |  ${formatDate(endDate)}`" placeholder="periodo" />
                <!-- {{ dateRange }} -->

                <Button @click="getFiltered" icon="pi pi-search" severity="help" class="text-center p-0 col-12  md:p-0"
                    style="height: 2.5rem;width:min-content;aspect-ratio:  1 / 1;font-weight: bold; border-radius: 50%; display: flex;justify-content:center ; "></Button>

            </div>

            <div class="col-12 px-3 mt-4" style="display: flex;justify-content:end;gap: 1rem;">
            <Button severity="help" icon="pi pi-download" label="Descargar Todo" @click="downloadAll"></Button>
            <Button severity="help" icon="pi pi-download" label="Descargar Informe" @click="downloadAll2"></Button>

        </div>

        </div>
    </div>


<div class="mt-3 mx-auto" style="min-height:20vh;max-width:1024px; display: flex; justify-content:center;align-items:center">


    <DataTable stripedRows style="max-width: 1024px;"  v-model:filters="filters" class="col-12 m-auto" :value="invetnoryDailyReports" tableStyle="min-width: 50rem;">
        <template #header>
            <div class="grid" style="align-items:center">
                <div class="col-12 md:col-6 p-3"> 
                    <span  class="text-xl" style="width: 100%;"> Mis reportes de inventario</span>
                </div>
                <div class="col-12 md:col-6 p-3"> 
                    <InputText style="width: 100%;" class="" v-model="filters['global'].value" placeholder="Buscar..." />
                </div>
                

            </div>
        </template>
        <Column class="py-1" field="daily_inventory_id" header="ID"></Column>
        <Column class="py-1" field="employer_name" header="Responsable"></Column>
        <Column class="py-1" field="site_name" header="Sede"></Column>
        <Column class="py-1" field="date" header="Fecha">
        <template #body="temp">
            {{ temp.data.date.split('-').reverse().join("-")}}
        </template>
        </Column>
        <Column style="max-width: 5rem" class="py-1 px-0 m-0" field="date" header="Action">
            <template #body="data">

                <div style="display: flex;gap:0.5rem;">
                    <router-link :to="`/daily-inventory/daily-inventory-view/${data.data.daily_inventory_id}`">
                        <Button style="height: 2rem;" severity="help" class="p-1" icon="pi pi-eye" />
                    </router-link>

                  


                        <Button @click="prepareDownload(data.data.daily_inventory_id,data.data.site_name,data.data.date)" style="height: 2rem;color:white; background:var(--primary-color);border:none" class="p-1"
                        icon="pi pi-download" />

                    
                </div>
                
            </template>
        </Column>
    </DataTable>

</div>


</template>



<script setup>
import { ref, onMounted } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { siteService } from '../../../../service/siteService.js'
import { dailyInventoryReportsService } from '../../../../service/inventory/dailyInventoryService.js'
import { loginStore } from '../../../../store/user.js'
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useReportesStore } from '@/store/reportes';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
const loadingStore = useReportesStore()

const store = loginStore()
const sites = ref([])
const selectedSites = ref([])
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
    const user_id = store.rawUserData.id
    invetnoryDailyReports.value = await dailyInventoryReportsService.getAllMyDailyInventoryReports(user_id)
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




const getFiltered = async() => {
    const user_id = store.rawUserData.id
    const new_startDate = formatDate(startDate.value) 
    const new_endDate = formatDate(endDate.value) 
    invetnoryDailyReports.value = await dailyInventoryReportsService.getAllMyDailyInventoryReportsFiltered(user_id,new_startDate,new_endDate)
}




const entries = ref([])


const prepareDownload = async (daily_inventory_id,site_name,date) => {
    entries.value = await dailyInventoryReportsService.getDailyInventoryEntriesByDailyInventoryID(daily_inventory_id)

    const data = entries.value.map(product => ({
        "Producto": product.item_name,
        "Cantidad": product.quantity,
        "Unidad de medida":product.unit_measure
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
        { wch: Math.max(20, "Producto".length) },
        { wch: Math.max(0, "Cantidad".length) },
        { wch: Math.max(0, "Unidad de medida".length) }]
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, `Inventario_${site_name}_${date.split('-').reverse().join("-")} .xlsx`);

};


const downloadAll2 = async () => {
    loadingStore.setLoading(true, "generando descargas");

    const reportes = invetnoryDailyReports.value;
    const entries = [];

    for (const reporte of reportes) {
        const reports = await dailyInventoryReportsService.getDailyInventoryEntriesByDailyInventoryID(reporte.daily_inventory_id);
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
        data.push([`REPORTE DE INVENTARIO DEL ${formattedStartDate.toUpperCase()}`, ...Array(allSites.length + 2).fill('')]);

    }else {
        data.push([`REPORTE DE INVENTARIO DEL ${formattedStartDate.toUpperCase()} AL ${formattedEndDate.toUpperCase()}`, ...Array(allSites.length + 2).fill('')]);

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
            worksheetRow.font = { name: 'Arial', bold: true, size: 14}; // Texto en negrita y en mayúsculas
            worksheetRow.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true  }; // Texto centrado vertical y horizontalmente
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
        cell.font = { name: 'Arial', bold: true,size:16 };
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

loadingStore.setLoading(true,"generando descargas")
const reportes = invetnoryDailyReports.value


for (const reporte of reportes) {
    const reports = await dailyInventoryReportsService.getDailyInventoryEntriesByDailyInventoryID(reporte.daily_inventory_id);
    entries.value.push(...reports);    
}

console.log(entries.value)

const data = entries.value.map(product => ({
    "Fecha":product.date.split('-').reverse().join('-'),
    "Sede":product.site_name,
    "Producto": product.item_name,
    "Cantidad": product.quantity,
    "Unidad de medida":product.unit_measure
}));


const worksheet = XLSX.utils.json_to_sheet(data);
worksheet["!cols"] = [
{ wch: Math.max(0, "Unidad de medida".length) },
{ wch: Math.max(0, "Unidad de medida".length) },
    { wch: Math.max(30, "Producto".length) },
    { wch: Math.max(0, "Cantidad".length) },
   ]
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

XLSX.writeFile(workbook, `Inventario todas las sedes.xlsx`);
loadingStore.setLoading(false,"generando descargas")


};



</script>


<style scoped>
.multi {
    max-width: 100%;
}

@media (max-width:500px) {

    .multi {
        width: 50%;
    }

}
</style>