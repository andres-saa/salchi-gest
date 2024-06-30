<template>
    <div class="container">
        <h1 class="m-auto px-4 py-4"><b>Administrador de concursos</b></h1>

        <DataTable
            :paginator="true"
            :rows="15"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            scrollable
            scrollHeight="65vh"
            stripedRows
            style=""
            v-model:filters="filters"
            class="col-12 m-auto"
            :value="formattedContest"
            tableStyle="min-width: 50rem;"
        >
            <template #header>
                <div class="grid" style="align-items:center;justify-content: space-between;">
                    <div class="col-12 md:col-6 p-3"></div>
                    <span class="md:mt-0 p-input-icon-right m-3">
                        <i class="pi pi-search" />
                        <InputText
                            class=""
                            v-model="filters['global'].value"
                            placeholder="Buscar Solicitud..."
                        />
                    </span>
                </div>
            </template>

            <column header="Id del concurso" field="id"></column>
            <column header="Nombre" field="name"></column>
            <column header="Fecha de inicio" field="formattedStartDate">
                <template #body="data">
                    {{ data.data.formattedStartDate }}
                </template>
            </column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { contestService } from '@/service/contest/contestService.js';
import { FilterMatchMode } from 'primevue/api';
import { formatShortDateTime } from '@/service/formating/formatDate.js';

const contest = ref([]);
const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

const formattedContest = computed(() => {
    return contest.value.map(item => ({
        ...item,
        formattedStartDate: formatShortDateTime(item.start_date)
    }));
});

onBeforeMount(() => {
    initFilters();
});

onMounted(async () => {
    contest.value = await contestService.getAllContest();
});
</script>

<style scoped>
.container {
    margin-top: 3rem;
}

h1 {
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
}
</style>
