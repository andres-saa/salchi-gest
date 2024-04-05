<template >

    <div lang="es-CO">
        <Dialog v-model:visible="confirmDialogVisible" header="Confirmar" modal :closable="false" :showHeader="true">
    <p>¿Estás seguro de que quieres eliminar este recipee?</p>
    <template #footer>
        <Button v-for="button in confirmDialogFooter" :key="button.label" :label="button.label" :icon="button.icon" @click="button.onClick" :class="button.class" />
    </template>
</Dialog>

   
<Dialog v-model:visible="showDialog" style="width: 450px" header="Nuevo recipee" modal :closable="true">
    <div class="formgrid grid">
        <div class="field col">
            <label for="name">Nombre</label>
            <InputText id="name" v-model="newrecipe.name" />
        </div>
        <div class="field col">
            <label for="unit">Unidad de Medida</label>
            <InputText id="unit" v-model="newrecipe.purchasing_unit_measure" />
        </div>
        <div class="field col">
            <label for="price">Precio de Compra</label>
            <InputNumber id="price" v-model="newrecipe.purchasing_price" mode="currency" currency="COP" locale="es-CO" />
        </div>
        <div class="field col">
            <label for="units">No. Unid por Compra</label>
            <InputNumber id="units" v-model="newrecipe.number_units_purchasing" />
        </div>
        <div class="field col">
            <label for="format">Formato de Compra</label>
            <InputText id="format" v-model="newrecipe.purchasing_format" />
        </div>
        <div class="field col">
            <label for="weight">Peso Neto</label>
            <InputNumber id="weight" v-model="newrecipe.net_gross_weight" />
        </div>
        <div class="field col">
            <label for="shrinkage">Porcentaje de Merma</label>
            <InputNumber id="shrinkage" v-model="newrecipe.shrinkage_percent" />
        </div>
    </div>
    <template #footer>
        <Button label="Cancelar" icon="pi pi-times" @click="showDialog = false" class="p-button-text" />
        <Button label="Guardar" icon="pi pi-check" @click="saverecipe" autofocus />
    </template>
</Dialog>



    <DataTable showGridlines  v-model:filters="filters" :value="recipes" paginator :rows="10" dataKey="id" filterDisplay="row" 


                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 100]"
                    currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} recipees"
                    responsiveLayout="scroll"
                    scrollable        :frozenValue="lockedCustomers"
        :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" :loading="loading">
            
        
    <template #header>  

        <div class="flex justify-content-between">
        <div>
            <Button size="small" label="Agregar recipee" severity="success" icon="pi pi-plus" @click="showDialog = true" />
        </div>
        <div>
            <IconField iconPosition="right">
                <InputIcon>
                    <!-- <i class="pi pi-search" /> -->
                </InputIcon>
                <InputText icon="pi pi-search" v-model="filters['global'].value" placeholder="Buscar..." />
            </IconField>
        </div>
    </div>
    </template>
    <!-- <template #empty> No customers found. </template> -->
    <template #loading> 
   
    <ProgressSpinner  style="width: 100px;background-color: transparent; color: transparent; height: 100px" strokeWidth="5" fill="transparent" 
    animationDuration=".3s" aria-label="Custom ProgressSpinner" /> 


</template>

    <Column class="p-1 px-2" field="" header="Foto" style="min-width: 3rem">
        <template #body="{ data }">
            <!-- {{ data.name }} -->
            <img style="width: 2rem; height: 2rem; aspect-ratio: 1 / 1; object-fit:cover;border-radius: 0.5rem;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYV84QloLgfvrli6GpuJoJlvB-bicUpq2H6QAS80K6Rw&s" alt="" >
        </template>
        
    </Column>

    <Column class="p-1 px-2" field="name" header="Nombre" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.recipe_name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Buscar por nombre" />
        </template>
    </Column>

    <Column class="p-1 px-2" field="name" header="Producto" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.product_name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Buscar por nombre" />
        </template>
    </Column>


    <Column class="p-1 px-2" field="name" header="Categoria" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.category_name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Buscar por nombre" />
        </template>
    </Column>

<Column>
    <template #body="{ data }">
        <div style="display:  flex; gap: 1rem;">
            <RouterLink :to="`recipe-data-sheet/${data.recipe_id}`">
                <Button style="width: 2rem; height: 2rem;" icon="pi pi-eye" class="p-button-rounded p-button-info" />

            </RouterLink>
            <Button style="width: 2rem; height: 2rem;" icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="confirmDelete(data.recipe_id)" />
            <Button style="width: 2rem; height: 2rem;" icon="pi pi-pencil" class="p-button-rounded p-button-warning" />

        </div>
        
        
    </template>
</Column>


    


    
</DataTable>
    </div>

</template>


<script setup>
import { onMounted, ref } from 'vue';
import { recipesService } from '../../../service/inventory/recipesService';
import { PrimeIcons } from 'primevue/api';





const confirmDialogVisible = ref(false);
let selectedrecipeId = ref(null);

// Esto se llamará cuando el usuario haga clic en el botón de eliminar
function confirmDelete(recipeId) {
    selectedrecipeId.value = recipeId;
    confirmDialogVisible.value = true;
}

const confirmDialogFooter = [
    {
        label: 'No',
        icon: 'pi pi-times',
        onClick: () => (confirmDialogVisible.value = false),
        class: 'p-button-text',
    },
    {
        label: 'Sí',
        icon: 'pi pi-check',
        onClick: () => {
            loading.value = true
            deleterecipe(selectedrecipeId.value);
            confirmDialogVisible.value = false;
        },
        class: 'p-button-text',
    },
];

async function deleterecipe(recipeId) {
    try {
        const response = await recipesService.deleterecipe(recipeId);
        if (response) {
            console.log('recipee eliminado exitosamente');
            recipes.value = await recipesService.getrecipes();
            loading.value = false
        } else {
            console.error('Error al eliminar el recipee');
            loading.value = false
        }
    } catch (error) {
        console.error('Error al eliminar el recipee:', error);
        loading.value = false

    }
}




const recipes = ref([]);

onMounted(async () => {
    recipes.value = await recipesService.getrecipes();
    loading.value = false
});


const showDialog = ref(false);
const newrecipe = ref({
    name: '',
    purchasing_unit_measure: '',
    purchasing_price: 0,
    number_units_purchasing: 0,
    purchasing_format: '',
    net_gross_weight: 0,
    shrinkage_percent: 0
});

// Este método será invocado cuando se haga clic en el botón de guardar en el diálogo
async function saverecipe() {
    try {
        const response = await recipesService.createrecipe(newrecipe.value);
        if (response) { // Cambiado a 201 para alinearlo con la lógica de createrecipe
            console.log('recipee creado exitosamente', response);
            // Aquí podrías, por ejemplo, cerrar el diálogo y actualizar la lista de recipees
            showDialog.value = false;
            // Opcional: Actualizar la lista de recipees
            // recipes.value = await recipesService.getrecipes();
        } else {
            console.error('Error al crear el recipee');
        }
    } catch (error) {
        console.error('Error al guardar el recipee:', error);
    }
}


import { FilterMatchMode } from 'primevue/api';
// import { CustomerService } from '@/service/CustomerService';

// const customers = ref();


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    purchasing_unit_measure:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    purchasing_price:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    purchasing_format:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    net_gross_weight:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    shrinkage_percent:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    number_units_purchasing:{ value: null, matchMode: FilterMatchMode.CONTAINS },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});


// const representatives = ref([
//     { name: 'Amy Elsner', image: 'amyelsner.png' },
//     { name: 'Anna Fali', image: 'annafali.png' },
//     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
//     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
//     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
//     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
//     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
//     { name: 'Onyama Limba', image: 'onyamalimba.png' },
//     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
//     { name: 'XuXue Feng', image: 'xuxuefeng.png' }
// ]);
// const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

// onMounted(() => {
//     CustomerService.getCustomersMedium().then((data) => {
//             customers.value = getCustomers(data);
//             loading.value = false;
//         });
// });

// const getCustomers = (data) => {
//     return [...(data || [])].map((d) => {
//         d.date = new Date(d.date);

//         return d;
//     });
// };

// const formatDate = (value) => {
//     return value.toLocaleDateString('en-US', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     });
// };


const formatCurrency = (value) => {
    return value.toLocaleString('es-CO', {  currency: 'cop',prefix:'hid', });
};


// const getSeverity = (status) => {
//     switch (status) {
//         case 'unqualified':
//             return 'danger';

//         case 'qualified':
//             return 'success';

//         case 'new':
//             return 'info';

//         case 'negotiation':
//             return 'warning';

//         case 'renewal':
//             return null;
//     }
// }


// async function deleterecipe(recipeId) {
//     try {
//         const response = await recipesService.deleterecipe(recipeId);
//         if (response) {
//             console.log('recipee eliminado exitosamente');
//             // Actualiza la lista de recipees después de la eliminación
//             recipes.value = await recipesService.getrecipes();
//         } else {
//             console.error('Error al eliminar el recipee');
//         }
//     } catch (error) {
//         console.error('Error al eliminar el recipee:', error);
//     }
// }



</script>