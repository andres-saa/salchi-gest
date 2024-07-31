<template>


    <div class="m-auto container ">


        
        <Dialog class="p-0 " v-model:visible="visibleImage" modal header="Foto de Perfil" :style="{ width: '30rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw', 'padding': 0 }">




            <img class="p-0 m-0" style="width: 100%;  ; object-fit: contain;" :src="bigImage" alt="" srcset="">


        </Dialog>


        <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="contrats" tableStyle="min-width: 50rem;" :filters="filters">
        <template #header>
            <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h4 class="px-2"> <i class="fa fa-book"></i>  <b>Contratos</b></h4>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar empleado..." />



            </div>


        </template>


        <Column class="py-2" header="Foto" headerStyle="width:5%; min-width:3rem;">
                        <template #body="user">
                            <!-- <span class="p-column-title">Foto</span> -->


                            <img @click="verIMagen(user.data.dni)"
                                :src="`${URI}/read-product-image/96/employer-${user.data.dni}`"
                                @error="onImageError(user.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />


                            
                        </template>
                    </Column>
        <column #body="contract" :header="column.columnName" v-for="column in dataColumns" :field="column.columnValue">

            <h6  style="min-width: max-content;"  class="m-0 p-0">
                {{ contract.data[column.columnValue]}}
            </h6>

            <!-- <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'max-content'" class="m-0 p-0">
                {{ contract.data[column.columnValue] }}
            </h6>

            <h6  v-if="column.columnType == 'other'" class="m-0 p-0">
                {{ contract.data[column.columnValue] }}
            </h6>

            <h6 :style="column.columnType == 'max-content'? 'min-width: max-content' : ''" v-if="column.columnType == 'money'" class="m-0 p-0">
                {{formatoPesosColombianos(contract.data[column.columnValue])  }}
            </h6>

            <Tag v-if="column.columnType == 'bool'" :severity="column.columnValue? 'success' : 'danger'">
                {{ column.columnValue? 'Activo' : 'Finalizado' }}
            </Tag>
         -->
        </column>

        <!-- <column header="hola" field="id"></column> -->



        </DataTable>

    </div>
</template>

<script setup>
import {fetchService} from '../../../service/utils/fetchService'
import { onMounted,ref,onBeforeMount } from 'vue';
import { URI } from '@/service/conection';
import {formatoPesosColombianos} from '@/service/formatoPesos.js' 
import { FilterMatchMode, PrimeIcons } from 'primevue/api';




const onImageError = (gender, event) => {


const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
}


if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
} else
    event.target.src = genders[gender.trim().toLowerCase()]
}





const visibleImage = ref(false)
const bigImage = ref('/images/male-avatar.png')

const verIMagen = (dni) => {
    visibleImage.value = true
    bigImage.value = `${URI}/read-product-image/600/employer-${dni}`
}

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


onBeforeMount(() => {
    initFilters();

});


const contrats = ref([
    {id:1}
])


const dataColumns = [
    {
        columnName:'Id',
        columnValue:'id',
        columnType:'other'
    },
    // {
    //     columnName:'Id del empleado',
    //     columnValue:'employer_id',
    //     columnType:'other'

    // },
    {
        columnName:'Nombre del empleado',
        columnValue:'name',
        columnType:'max-content'
    },
    // {
    //     columnName:'Tipo de contrato',
    //     columnValue:'contract_type_name',
    //     columnType:'max-content'

    // },
    // {
    //     columnName:'Fecha de inicio',
    //     columnValue:'start_date',
    //     columnType:'date'
    // },
    // {
    //     columnName:'Fecha de finalizacion',
    //     columnValue:'end_date',
    //     columnType:'date'
    // },

    // {
    //     columnName:'Salario',
    //     columnValue:'salary',
    //     columnType:'money'
    // },
    // {
    //     columnName:'Creado por',
    //     columnValue:'creator_name',
    //     columnType:'max-content'
    // },
    // {
    //     columnName:'Estado',
    //     columnValue:'active',
    //     columnType:'bool'
    // },
 

]


onMounted(async() => {
    contrats.value = await fetchService.get(`${URI}/employers-basic`,'cargando contratos')
})


</script>

<style scoped>


.container{
    max-width: 1366px
}

</style>