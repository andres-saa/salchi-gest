<template>


    <div class="container mx-4 ">

    
    
        <div class="m-auto" style="max-width: 500px;">

            <h4><b>Nuevo contrato</b></h4>


            <h6>Empleado</h6>
            <Dropdown :options="employers" filter optionLabel="name" v-model="contractModel.employer_id" style="width: 100%;">

                <template #option="data">

                    <div style="display: flex; gap: 1rem; align-items: center;">

                        <img @click="verIMagen(data.option.dni)"
                                :src="`${URI}/read-product-image/96/employer-${data.option.dni}`"
                                @error="onImageError(data.option.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />

                        <h6 class="p-0 m-0">
                            {{ data.option.name }}
                        </h6>
                    </div>
                   

                </template>

                <template #value="value">


                    <div style="display: flex; gap: 1rem;height: 1rem; align-items: center;">

                  

                        <img @click="verIMagen(value.value.dni)"
                                :src="`${URI}/read-product-image/96/employer-${value.value.dni}`"
                                @error="onImageError(value.value.gender, $event)" class="shadow-2 p-0 m-0 img-profile"
                                style="border:none; position:relative;height: 2rem;  width:2rem; object-fit: cover; border-radius: 50%;" />

                    <h6 class="p-0 m-0">
                        {{ value.value.name }}
                    </h6>
                    </div>
                                        



                </template>



            </Dropdown>
            
            <h6>Tipo de contrato</h6>
            <Dropdown  class="" :options="contract_types" placeholder="Seleccione el tipo de contrato" v-model="contractModel.contract_type_id" optionLabel="name" filter style="width: 100%;">

                <template #option="data">

                    <h6  class="p-0 m-0" style="text-transform: capitalize;">
                        {{ data.option.name?.toUpperCase() }}
                    </h6>
            
                </template>

                <template #placeholder>
            <span style="color: grey;">Seleccione el tipo de contrato</span>
        </template>

                <template #value="value">
                    

                <h6 class="p-0 m-0" style="text-transform: capitalize;">
                    <i class="pi pi-book"></i>
                    {{ value.value.name?.toUpperCase() }}
                </h6>

                </template>

                
            </Dropdown>

            <h6>Fecha de inicio</h6>
            <Calendar dateFormat="dd/mm/yy" v-model="contractModel.start_date" style="width: 100%;"></Calendar>

            <h6>Fecha de finalizacion</h6>
            <Calendar  dateFormat="dd/mm/yy" v-model="contractModel.end_date" style="width: 100%;"></Calendar>

            <h6>Salario</h6>
            <InputNumber  dateFormat="dd/mm/yy" prefix="$" v-model="contractModel.Salary" style="width: 100%;"></InputNumber>

            <h6>Fecha de Alarma</h6>
            <Calendar  dateFormat="dd/mm/yy" v-model="contractModel.alert_date" style="width: 100%;"></Calendar>




            <div class="my-8" style="display: flex;gap: 1rem; justify-content: end; width: 100%;">


<Button @click="sendData()" severity="help" label="Confirmar y enviar"></Button>
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
const user = loginStore()
const contractModel = ref({
  "employer_id": 0,
  "contract_type_id": 0,
  "start_date": '',
  "end_date":'',
  "created_by": 0,
  "alert_date": '',
  "Salary": 0
})





const employers = ref([])
const contract_types = ref([])


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


onMounted(async() => {
    contrats.value = await fetchService.get(`${URI}/get-all-vigent-contracts`,'cargando contratos')
    employers.value = await fetchService.get(`${URI}/employers-basic`)
    contract_types.value = await fetchService.get(`${URI}/get-all-contract-types`)
})

const formatData = () => {
    const user_id = user.rawUserData.id;

    // Verificar si algún dato necesario falta
    if (!contractModel.value.employer_id || 
        !contractModel.value.contract_type_id || 
        !contractModel.value.start_date || 
        !contractModel.value.end_date || 
        !contractModel.value.alert_date || 
        !contractModel.value.Salary) {

        // Lanzar alerta si algún dato falta
        alert("Error: Faltan datos necesarios. Por favor, complete todos los campos.");

        // Retornar si algún dato está ausente
        return;
    }

    // Retornar el objeto con los datos formateados si todo está presente
    return {
        "employer_id": contractModel.value.employer_id.id,
        "contract_type_id": contractModel.value.contract_type_id.id,
        "start_date": contractModel.value.start_date,
        "end_date": contractModel.value.end_date,
        "created_by": user_id,
        "alert_date": contractModel.value.alert_date,
        "Salary": contractModel.value.Salary
    };
};


const sendData = async() => {

    const data = formatData()
    if (!data) {
        return
    }
    fetchService.post(`${URI}/create-new-contract/`,data,'Generando contrato','/contracts/contracts-all/')

    
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