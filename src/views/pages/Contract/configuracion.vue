<template>


    <div class="container mx-4">


        <Dialog v-model:visible="visible.to_delte" header="Eliminar tipo">
            <h6 class="p-0 m-0"> Esta seguro de eliminar el tipo de contrato <b>{{ type_to_delete.name }}</b> ?</h6>

            <template #footer>

                <div style="display: flex;justify-content: end; width:100%">


                    <Button @click="visible.to_delte = false" severity="help" label="No, Pensarlo mejor"></Button>
                    <Button @click="deleteType(type_to_delete.id)" text severity="danger" label="Si claro"></Button>
                </div>


            </template>


        </Dialog>


        <Dialog class="mx-2" header="Nuevo tipo de contrato" v-model:visible="visible.to_add" style="width: 30rem;">
            
            <h6>Nombre del tipo de contrato</h6>
            <InputText v-model="newType.name" style="width: 100%;"></InputText>
            <h6>Descripcion</h6>
            <Textarea v-model="newType.description" style="width: 100%; min-width: 100%; resize: none;" rows="5"></Textarea>




            <template #footer>

                <div style="display: flex;justify-content: end; width:100%">
                    <Button @click="visible.to_add = false" severity="help" label="Cerrar"></Button>
                    <Button @click="addType()" text  severity="danger" label="Guardar"></Button>
                </div>

            </template>


        </Dialog>



        

        <Dialog class="mx-2" header="Actualizar tipo de contrato" v-model:visible="visible.to_update" style="width: 30rem;">
            
            <h6>Nombre del tipo de contrato</h6>
            <InputText v-model="type_to_update.name" style="width: 100%;"></InputText>
            <h6>Descripcion</h6>
            <Textarea v-model="type_to_update.description" style="width: 100%; min-width: 100%; resize: none;" rows="5"></Textarea>
            <template #footer>

                <div style="display: flex;justify-content: end; width:100%">
                    <Button @click="visible.to_delte = false" severity="help" label="Cerrar"></Button>
                    <Button @click="updateType()" text  severity="danger" label="Actualizar"></Button>
                </div>


            </template>


        </Dialog>

    
    
        <div class="m-auto" style="max-width: 500px;">

            <h4><b>Configuracion</b></h4>


            <h6>Anticipacion para considerar un contrato proximo a finalizar (en dias)</h6>
            <InputNumber  v-model="days" suffix=" dias" style="width: 100%;"></InputNumber>


            <div class="mt-6" style="display: flex; justify-content: space-between;align-items: center;">
                <h6 class="p-0 m-0">  Tipos de contrato</h6> 
            
            
                <Button  @click="openToUAddType" severity="help" size="small" label="Nuevo tipo de contrato"></Button>
            </div>
            

            <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} contratos"
        :rowsPerPageOptions="[5, 10, 25, 100]"  showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto p-0"
        :value="contract_types"  :filters="filters">
        <template #header>


            


        </template>
        

        <column header="Nombre" field="name" class="py-2" style="width: 40%;">
        
        
            <template #body="data">

                <h6 class="p-0 m-0" style="text-transform: uppercase;">
                    {{ data.data.name }}
                </h6>


            </template>
        
        </column>


        <column header="Descripcion" style="width: 50%;" field="name" class="py-2">
        
        
        <template #body="data">

            <h6 class="p-0 m-0" style="text-transform: capitalize;">
                {{ data.data.description }}
            </h6>


        </template>
    
    </column>

        <column header="Accion" style="width: min-content;" field="name" class="py-2">
        
        
        <template #body="data">

            <div style="display: flex; justify-content: end;gap: .5rem;">

                <Button @click="openToUpdateType(data.data)" class="m-0 p-0" severity="warning" style="height: 2rem; width: 2rem;" icon="pi pi-pencil"></Button>
                <Button @click="openToDeleteType(data.data)" class="m-0 p-0" severity="danger" style="height: 2rem; width: 2rem;" icon="pi pi-trash"></Button>



            </div>


        </template>
    
    </column>
     


        </DataTable>
        
           


            <div class="my-8" style="display: flex;gap: 1rem; justify-content: end; width: 100%;">


            <!-- <Button @click="sendData()" severity="help" label="Guardar configuracion"></Button> -->
             
</div>
        </div>
   


   
    </div>
</template>

<script setup>
import {fetchService} from '../../../service/utils/fetchService'
import { onMounted,ref,onBeforeMount } from 'vue';
import { URI } from '@/service/conection';
import {formatoPesosColombianos} from '@/service/formatoPesos.js' 
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import router from '@/router/index.js'

import { loginStore } from '@/store/user.js'
import InputNumber from 'primevue/inputnumber';
import { watch } from 'vue';


const type_to_delete = ref({})
const newType = ref({})
const type_to_update = ref({})

const visible = ref({
    to_delte:false,
    to_add:false,
    to_update:false
})


const openToDeleteType = (type) => {
    type_to_delete.value = type
    visible.value.to_delte = true
}

const deleteType = async (id) => {
    await fetchService.delete(`${URI}/delete-contract-type/${id}`,'Eliminando tipo de contrato')
    visible.value.to_delte = false
    await update()
}

const openToUpdateType = (type) => {

    type_to_update.value = {...type}
    visible.value.to_update = true
}


const addType = async () => {

    const data = {
        name:newType.value.name,
        description:newType.value.description

    }

    await fetchService.post(`${URI}/insert-contract-type/`,data,'Creando nuevo tipo de contrato')
    visible.value.to_add = false
    await update()

}

const openToUAddType = (type) => {

visible.value.to_add = true
}



const employers = ref([])
const contract_types = ref([])
const days = ref(0)

const onImageError = (gender, event) => {


const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
}


if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
} else
    event.target.src = genders[gender.trim()?.toLowerCase()]
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
    {
        columnName:'Id del empleado',
        columnValue:'employer_id',
        columnType:'other'

    },
    {
        columnName:'Nombre del empleado',
        columnValue:'employer_name',
        columnType:'max-content'
    },
    {
        columnName:'Tipo de contrato',
        columnValue:'contract_type_name',
        columnType:'max-content'

    },
    {
        columnName:'Fecha de inicio',
        columnValue:'start_date',
        columnType:'date'
    },
    {
        columnName:'Fecha de finalizacion',
        columnValue:'end_date',
        columnType:'date'
    },

    {
        columnName:'Dias restantes',
        columnValue:'days_remaining',
        columnType:'other'
    },

    {
        columnName:'Salario',
        columnValue:'salary',
        columnType:'money'
    },
    {
        columnName:'Creado por',
        columnValue:'creator_name',
        columnType:'max-content'
    },
    {
        columnName:'Estado',
        columnValue:'active',
        columnType:'bool'
    },
 

]


const update = async() => {
    const day = await fetchService.get(`${URI}/get-days-to-alert`)
    days.value = day.days
    contrats.value = await fetchService.get(`${URI}/get-all-vigent-contracts`,'cargando contratos')
    employers.value = await fetchService.get(`${URI}/employers-basic`)
    contract_types.value = await fetchService.get(`${URI}/get-all-contract-types`)
}


const updateType = async() => {
    const id = type_to_update.value.id

    const data = {
        name:type_to_update.value.name,
        description:type_to_update.value.description
    }

    
    await fetchService.put(`${URI}/update-contract-type/${id}`,data,'Actualizando Tipo de contrato')
    
    visible.value.to_update = false
    await update()

}


watch(visible.to_update, async(newVal) => {


    if (!newVal){
        await update()
    }

},{deep:true})

onMounted(async() => {
   await update()
})



watch(days, async() => {
    await updateDays()
})

const updateDays = async() => {
   
    const data = {
        days:days.value
    }
    await fetchService.put(`${URI}/update-contract-days-to-alert/1`,data,'actualizando dias')
}

 



</script>

<style scoped>


.container{
    max-width: 1366px
}


.p-dropdown {
    --placeholder-color: grey;
}
.p-dropdown .p-placeholder {
    color: var(--placeholder-color);
}

</style>