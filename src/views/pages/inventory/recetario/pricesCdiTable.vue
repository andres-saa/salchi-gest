<template>


    <Dialog style="width: 30rem;" :header="editing? 'Actualizar Ingrediente' : 'Nuevo Ingrediente'" class="mx-2" v-model:visible="showNewIngredinetDialog" modal>



        <div v-for="field in newIngredientsFields">
 
            <h6 class="m-0 my-3">{{field.name}} </h6>
            <inputText v-model="newIngredient[field.fiel]" v-if="field.type == 'text'" style="width: 100%;"></inputText>
           <Dropdown  :options="field.Options" optionLabel="name" v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'drop'"></Dropdown>
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'money' " locale="es-ES" max-fraction-digits="3"  prefix="$"></InputNumber>
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'number'" locale="es-ES" max-fraction-digits="3" ></InputNumber>
           <InputNumber v-model="newIngredient[field.fiel]" style="width: 100%;" v-if="field.type == 'persent'" locale="es-ES" max-fraction-digits="3" suffix="%" ></InputNumber>
           
        </div>

        <template #footer>

            <Button v-if="!editing" @click="sendIngredient"  severity="help" label="Guardar ingrediente"></Button>
            <Button v-else @click="sendIngredient"  severity="help" label="Modificar ingrediente"></Button>


        </template>
      

    </Dialog>


    <Dialog class="mx-2" header="Eliminar ingrediente" v-model:visible=" showDeleIngredientDialog" modal>

        <h6>seguro que desea eliminar el Ingrediente <b>{{ ingredientToDelete.name }}</b> ?</h6>

        <template #footer>
            <div style="display:  flex;justify-content: end;">
                <Button size="small" label="cancelar" @click="showDeleIngredientDialog = false" severity="help"></Button>
                <Button size="small" @click="DeleteIngredient()" label="Eliminar ingrediente" severity="danger" text ></Button>
            </div>
        </template>
    </Dialog>

    <Dialog v-model:visible="visibleCharge" modal header="Actualizar ultimos precios de compra" class="px-0" style="max-width: 60rem;width: 95%;">

        <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} recetas"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="unjson" tableStyle="min-width: 50rem;" :filters="filters">
        <template #header>
            <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h3 class="px-2"> <i class="fa fa-upload"></i>  <b>Carga de precios</b></h3>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar ingrediente ..." />

               


            </div>

            <div style="display: flex; width: 100%; justify-content: end;flex-wrap: wrap;gap: 1rem;align-items: center;" >
                <!-- <MultiSelect v-model="visibleColumns" :options="columns" optionLabel="header" style="width: min-content; max-width: 300px;" placeholder="Columnas visibles"></MultiSelect> -->
                 
                

            </div>

        </template>



            <column header="ID" field="ID" class="py-1" ></column>
            <column header="INGREDIENTE" field="INGREDIENTE" class="py-1" ></column>
            <column header="IVA" field="IVA (%)" class="py-1" ></column>
            <column header="ULTIMO PRECIO DE COMPRA" field="ULTIMO PRECIO DE COMPRA" class="py-1" >
            
                <template #body="data">


                    {{formatoPesosColombianos( data.data['ULTIMO PRECIO DE COMPRA']) }}


                </template>
            </column>


          
            
        </DataTable>


        

       <template #footer>

                <div class="p-2" style="display: flex;flex-wrap: wrap;justify-content: end; gap: 1rem
                ;">
                    <Button size="small" icon="pi pi-upload" severity="help" @click="openFileInput" label="Cargar otro archivo"></Button>
                    <Button size="small" @click="updatePrices()" label="Actualizar (Tener cuidado)" severity="danger"></Button>
                </div>

            </template>


    </Dialog>




    

    <div style="margin-top: 3rem;">
        <DataTable :paginator="true" :rows="15" style="width: 100%;"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} recetas"
        :rowsPerPageOptions="[5, 10, 25, 100]" scrollable showGridlines scrollHeight="65vh" stripedRows class="col-12 m-auto"
        :value="ingredients" tableStyle="min-width: 50rem;" :filters="filters">
        <template #header>
            <div class="grid p-3" style="align-items:center;justify-content: space-between; display: flex;gap: 1rem;">
                <h3 class="px-2"> <i class="fa fa-carrot"></i>  <b>Ingredientes</b></h3>

                <InputText class="" v-model="filters['global'].value"
                placeholder="Buscar ingrediente ..." />

               


            </div>

            <div style="display: flex; width: 100%; justify-content: end;flex-wrap: wrap;gap: 1rem;align-items: center;" >
                <!-- <MultiSelect v-model="visibleColumns" :options="columns" optionLabel="header" style="width: min-content; max-width: 300px;" placeholder="Columnas visibles"></MultiSelect> -->
                 <h6 class="m-0">
                   <b> Porcentajes visible</b>
                 </h6>
                <MultiSelect optionLabel="percent" v-model="visibleColumnsIvas" placeholder="Columnas visibles" :options="column_ivas"></MultiSelect>

                <Button size="small" icon="pi pi-plus" severity="help" @click="openNewIngredient" label="Nuevo ingredinte"></Button>
                <Button size="small" icon="pi pi-download" severity="help" @click="downloadAll" label="Descargar plantilla"></Button>
                <Button size="small" icon="pi pi-upload" severity="danger" @click="openFileInput" label="Cargar precios"></Button>
                <input type="file" ref="fileInput" accept=".xlsx, .csv" style="display: none;" @change="handleFileChange">

            </div>


        

        </template>

        <column :frozen="column.frozen" v-for="column in columns" :header="column.header" :style="`min-width:${column.width}rem`"  :field="column.value" class="py-2" >
            <template #body="data" >
               

                <h6 v-if="column.type == 'money'" style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{formatoPesosColombianos(data.data[column.value] ) || '-----------'}}</h6>
                <h6 v-else-if="column.type == 'percent'" style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{`${formatoDecimal(data.data[column.value] )}%` || '-----------'}}</h6>

                <h6 v-else-if="column.type == 'number'" style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{formatoDecimal(data.data[column.value] ) || '-----------'}}</h6>
                <h6 v-else-if=" column.type!= 'money' && column.type != 'number'" style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0">{{ data.data[column.value] || '-----------'}}</h6>
            </template>
        </column>





        <div>
            
        </div>
        <div v-for="column in column_ivas"  > 
            <column  v-if="visibleColumnsIvas.some(item => item.percent == column.percent)" :header="`Al ${column.percent}%`" :style="`min-width:6rem`"  :field="column.value" class="py-2" >
                <template #body="data" >
                

                    <h6  style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0"> 
                        {{formatoPesosColombianos(data.data?.percent_prices?.find(obj => obj.hasOwnProperty(column.percent.toString()))?.[column.percent]) || '-----------' }}  </h6>

                </template>
            </column>


            <column  v-if="visibleColumnsIvas.some(item => item.percent == column.percent)"  :header="`Al ${column.percent}% + IVA` " :style="`min-width:10rem`"  :field="column.value" class="py-2" >
                <template #body="data" >
                

                    <h6  style="text-transform: lowercase;" :style="column.type == 'max-content' ? 'min-width:max-content' : ''" class="my-0 p-0"> 
                        {{formatoPesosColombianos(data.data?.percent_prices_iva?.find(obj => obj.hasOwnProperty(column.percent))?.[column.percent]) || '-----------' }}  </h6>

                </template>
            </column>
        </div>
       

        <column header="Accion" style="width: min-content;" field="name" class="py-1" frozen alignFrozen="right">
        
        
        <template #body="data" >

            <div style="display: flex; justify-content: end;gap: .5rem;">

                <Button text @click="openEditIngredient(data.data)" class="m-0 p-0" severity="warning" style="height: 2rem; width: 2rem;" icon="pi pi-pencil"></Button>
                <Button text @click="openToDeletIngredient(data.data)" class="m-0 p-0" severity="danger" style="height: 2rem; width: 2rem;" icon="pi pi-trash"></Button>



            </div>


        </template>
    
    </column>
      
        



        


        


        </Datatable>
    </div>
</template>


<script setup >
import { ref } from 'vue';
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';
import { fetchService } from '../../../../service/utils/fetchService';
import { URI } from '../../../../service/conection';
import { watch } from 'vue';
import { computed } from 'vue';
import {formatoPesosColombianos,formatoDecimal} from '@/service/formatoPesos.js' 
import * as XLSX from 'xlsx';
import { useReportesStore } from '@/store/reportes';






const unjson = ref([]);
const fileInput = ref(null);
const visibleCharge = ref(false)

const openFileInput = () => {
  // Mostrar el indicador de carga, si es necesario
  visibleCharge.value = true;

  // Asegúrate de que la referencia al campo de entrada de archivos está disponible
  if (fileInput.value) {
    // Vaciar el valor del campo de entrada de archivos para permitir la selección del mismo archivo
    fileInput.value.value = '';
    // Abrir el selector de archivos
    fileInput.value.click();
  }
};

const handleFileChange = async (event) => {

    
    const file = event.target.files[0];
    if (file) {
        try {
            const data = await fileToJson(file);
            unjson.value = data; // Guarda el JSON en la variable reactiva
            visibleCharge.value = true
            console.log(unjson.value); // Muestra el JSON en la consola para depuración
        } catch (error) {
            console.error("Error al leer el archivo:", error);
        }
    }

    
};

const fileToJson = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                // Convert ArrayBuffer to binary string
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const rawData = XLSX.utils.sheet_to_json(worksheet);

                // Filter out records without an ID
                const filteredData = rawData.filter(record => record['ID'] && record['ID'].toString().trim() !== '');

                resolve(filteredData);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = (error) => {
            reject(error);
        };

        // Read the file as an ArrayBuffer
        reader.readAsArrayBuffer(file);
    });
};


const loadingStore = useReportesStore()
const visibleColumnsIvas = ref([])

const ingredientToDelete = ref({})
const showNewIngredinetDialog = ref(false)
const newIngredient = ref({})
const ingredients = ref([{}])
const unitMeasures = ref([])

const editing = ref(false)
const showDeleIngredientDialog  = ref(false)



const openToDeletIngredient = (ingredient) => {
    showDeleIngredientDialog.value = true
    ingredientToDelete.value = ingredient
}







const openNewIngredient = () =>{
    
    editing.value = false
    newIngredient.value = {}
    showNewIngredinetDialog.value = true
}


const DeleteIngredient = async() => {
    const id = ingredientToDelete.value.id
    await fetchService.delete(`${URI}/delete-ingredient/${id}`,'Borrando ingrediente')
    showDeleIngredientDialog.value = false
    update()

}


const openEditIngredient = (ingredient) =>{


    // console.log(ingredient)

    editing.value = true



    newIngredient.value = { 
        "id":ingredient.id ,
        "name": ingredient.name,
        "purchasing_unit_measure": unitMeasures.value.find(um => um.name == ingredient.unit_measure),
        purchasing_unit_measure_id:unitMeasures.value.find(um => um.name == ingredient.unit_measure)[0]?.id,
        "purchasing_price": ingredient.last_price_purchase, 
        "net_gross_weight": ingredient.net_gross_weight ,
        "iva": ingredient.iva } 
        console.log(newIngredient.value)


    showNewIngredinetDialog.value = true


}



const column_ivas = ref([
    {percent:'cargando...'}
])


const columns = [
    {
        header:'Id',
        value:'id',
        width:'1',
        frozen:true
    },
    {
        header:'Nombre ingrediente',
        value:'name',
        type:'max-content',
        width:'',
        frozen:true
    },
    {
        header:'UM de compra',
        value:'unit_measure',
        width:'10',
        frozen:false
    },

    {
        header:'Ultimo precio de compra',
        value:'last_price_purchase',
        width:'10',
        type:'money',
        frozen:false
    },

    {
        header:'iva',
        value:'iva',
        width:'5',
        type:'percent',
        frozen:false
    },


    
    

]


const visibleColumns = ref ([...columns])

const visibleColIds = computed( () => {
    return visibleColumns.value?.map(col => col.value)
})

const newIngredientsFields = ref([
    {
        name:'Nombre del ingrediente',
        fiel:'name',
        type:'text'
    },
    {
        name:'Unidad de medida de compra',
        fiel:'purchasing_unit_measure',
        type:'drop',
        Options:ref(unitMeasures),
        optionLable:'name'
    },
    {
        name:'precio de compra',
        fiel:'purchasing_price',
        type:'money'
    },
    // {
    //     name:'No Unidades por compra',
    //     fiel:'number_units_purchasing',
    //     type:'number'
    // },


    {
        name:'Presentacion convertir a gramos',
        fiel:'net_gross_weight',
        type:'number'
    },

    {
        name:'iva (%)',
        fiel:'iva',
        type:'persent'
    }
    // {
    //     name:'porcentaje de merma (%)',
    //     fiel:'shrinkage_persent',
    //     type:'persent'
    // }

]) 


watch(newIngredient, async(newval,oldval) => {
    newIngredient.value.purchasing_unit_measure_id = newval.purchasing_unit_measure?.id || null
}, {deep:true})







const downloadAll = async () => {

    loadingStore.setLoading(true,"generando descargas")


    const data = ingredients.value.map(product => ({
        "ID":product.id,
        "INGREDIENTE":product.name,
        "IVA (%)":product.iva,
        "ULTIMO PRECIO DE COMPRA":product.last_price_purchase,
     
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
    { wch: 3},
    { wch: 50 },
    { wch: 8},
    { wch:25 },
    
    
    ]
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, `Ultimos precios de compra.xlsx`);
    loadingStore.setLoading(false,"generando descargas")


};

















const sendIngredient = async() => {
    const data = newIngredient.value

    if(!data.name || !data.purchasing_unit_measure_id || !data.purchasing_price || !data.net_gross_weight){
        alert('Por favor llene todos los campos')
        return
    }

    if (editing.value){
        await fetchService.post(`${URI}/update-ingredient/${newIngredient.value.id}`,data,'Editando ingrediente')
    } else {
        await fetchService.post(`${URI}/create-ingredient`,data,'creando un nuevo ingrediente')

    }
    update()
    showNewIngredinetDialog.value = false


}



const updatePrices = async() => {
    const data = unjson.value
    .map(i => ({
        "ingredient_id": i['ID'],
        "name":i['INGREDIENTE'],
        "iva": i['IVA (%)'] || 0,
        "last_price_purchase": parseFloat(i['ULTIMO PRECIO DE COMPRA']) || 0
    }));
    console.log(data)


    await fetchService.put(`${URI}/update-bulk-last-purchase-price`,data, 'cargando precios')
    update()
    visibleCharge.value = false



}



const update = async() => {
   ingredients.value = await fetchService.get(`${URI}/get-cdi-prices-table`,'cargando ingredientes')
   unitMeasures.value = await fetchService.get(`${URI}/daily_inventory_unit_measures`, )
   column_ivas.value = await fetchService.get(`${URI}/get-prices-cdi-percents`)
}

onMounted( async() =>{
    update()
})

const filters = ref(null);
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};

onBeforeMount(() => {
    initFilters()
})
</script>

<style>

h6::first-letter{
    text-transform: uppercase;
}

</style>



