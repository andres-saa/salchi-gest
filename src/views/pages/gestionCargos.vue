<template>



    <Dialog v-model:visible="show_access" style="width: 40rem;" modal header="gestion de permisos">

        <!-- {{ store.rawUserData.permissions }} -->

        <h5 class="text-center my-3"><b> ACCESOS - {{ rol_to_edit.name }}</b> </h5>

        <div style="display: flex;flex-direction: column;gap: .5rem;" v-for="(group, roles) in all_roles">
             <h6 class="m-0 p-0 mt-2"><b> {{ group.name }}</b></h6>
             <div class="pl-4" v-for="rol in group.permissions" style="display: flex;gap: 1rem;align-items: center;">
                <InputSwitch @change="toggle_permision(rol,rol.enrolled)" v-model="rol.enrolled" style="min-width: 3rem;"></InputSwitch>
                <h6 class="m-0" style="text-transform: uppercase;"> {{ rol.name }}</h6>
                <!-- {{ rol }} -->
             </div>

           
        </div>

    </Dialog>

    <div class="mx-auto mb-4" style="margin-top:6rem;max-width: 50rem;">

        <h2 class="my-6 text-center"> <b> Gestion de cargos y accesos</b></h2>

        <div style="margin-top: 3rem;">
        <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} Roles"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="60vh" stripedRows class="col-12 m-auto"
        :value="rols" tableStyle="" :filters="filters">


        <template #header>
            <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h3 class="px-2">  <b>Cargos</b></h3>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar Cargo ..." />

               


            </div>

            <div style="display: flex; width: 100%; justify-content: end;flex-wrap: wrap;gap: 1rem;align-items: center;" >
                <!-- <MultiSelect v-model="visibleColumns" :options="columns" optionLabel="header" style="width: min-content; max-width: 300px;" placeholder="Columnas visibles"></MultiSelect> -->
                <Button size="small" severity="help" @click="openNewIngredient" label="Nuevo Cargo"></Button>
            </div>


        

        </template>



        <column class="py-2" style="width: 80%;" header="CARGO" field="name">
        
            <template #body="data">

                <h6 class="m-0 p-0" style="text-transform: uppercase;min-width: max-content;">
                    {{ data.data.name }}
                </h6>

            </template>
        
        </column>





        <column class="py-2" style="width: 20%;" header="Accion" field="name">
        
        <template #body="data">

           <Button  @click="openToEdit(data.data.id, data.data)" icon="pi pi-eye" text class="p-0" label="Accesos"></Button>

        </template>
    
    </column>







        </Datatable>
        </div>




    </div>
</template>


<script setup>


import { ref } from 'vue';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';
import { fetchService } from '@/service/utils/fetchService';
import { URI } from '@/service/conection';
import { watch } from 'vue';
import { computed } from 'vue';
import {formatoPesosColombianos,formatoDecimal} from '@/service/formatoPesos.js' 
import {loginStore} from '@/store/user.js'

const rols = ref([{}])
const user_permisions = ref([])
const store = loginStore()
const all_roles = ref([])
const show_access = ref(false)


onBeforeMount(() => {
    initFilters()
})


const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


const update = async() => {

    rols.value = await fetchService.get(`${URI}/get-all-rol`)


    
}



const rol_to_edit = ref('')

const openToEdit = async(id,data) => {

    rol_to_edit.value = data
    show_access.value = true
    const roles = await fetchService.get(`${URI}/get_all-permission-group-by-group`,'Cargando') 
    const permision =   await fetchService.get(`${URI}/get-all-rol-by-rol-id/${id}`,'Cargando')
    // permissions = permision

    const permision_rol = permision.map(p => p.permission_id)

    roles.forEach(element => { element.permissions.forEach( p => {

        p.enrolled = permision_rol.includes(p.id)
        p.permission_rol_id = permision.find(m => m.permission_id == p.id)?.id

        console.log(p)
    
    
    }) 
    // console.log(roles)
    });
    
    all_roles.value = roles


}


onMounted( async() => {
   await update()
})


const toggle_permision = async(permision,status) => {




    const new_data = 
        {
        "rol_id": rol_to_edit.value.id,
        "permission_id": permision.id,
        "status": status,
        "permission_rol_id":permision.permission_rol_id
        }

    console.log(new_data)

    await fetchService.put(`${URI}/toggle_permision/${permision.permission_rol_id || 1}/${status}`,new_data,'Cargando') 
}



</script>