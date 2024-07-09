<template>

    <Dialog  class="mx-2"  :header="!editing ? 'Nuevo concurso' : 'Editar concurso'" style="width: 30rem;" modal v-model:visible="visible.dialogAddContestVisible">



        <form action="" class="">
        <img class="img-profile-add" style="width: 100%;; object-fit: contain;border-radius: 0.5rem;"
            :src="urlPhotoProfile ? urlPhotoProfile : `${URI}/read-product-image/600/contest-${contests_to_send.id}`"
            alt="">
        <div class="field col-12 mt-3 mb-6 p-0" style="display: flex; justify-content: end;">
            <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" style="display: none;">
            <Button icon="pi pi-camera"  severity="help"  class=""
                 @click="$refs.fileInput.click();" />

        </div>

            <div class="form-container my-2" >
                <div style="" v-for=" menu in content_to_add_contest_form">
                    <div style="display: flex;justify-content: space-between; ">
                        <span  class="py-0 my-0" :for="menu.name"> {{ menu.name }}</span>
                        <Tag v-if=" (contests_to_send[menu.field] == null || contests_to_send[menu.field] == '') && checked" severity="danger" class="pr-1 pl-3" style="border-radius: 3rem .7rem 0  0;">Este campo es obligatorio</Tag>
                    </div>
                   
                    
                    <InputText  :class=" (contests_to_send[menu.field] == null || contests_to_send[menu.field] == '') && checked ? 'invalid' : ''"  v-model="contests_to_send[menu.field]" v-if="menu.type == 'text'" style="width: 100%;" :id="menu.name" />


                    <Textarea  :class=" (contests_to_send[menu.field] == null || contests_to_send[menu.field] == '') && checked ? 'invalid' : ''" v-model="contests_to_send[menu.field]" v-if="menu.type == 'textArea'" rows="4" style="width: 100%;resize: none; min-width: 100%;max-width: 100%; "></Textarea>
                    <Calendar  :class=" (contests_to_send[menu.field] == null || contests_to_send[menu.field] == '') && checked ? 'invalid' : ''" showTime dateFormat="dd/mm/yy" v-model="contests_to_send[menu.field]" v-if="menu.type == 'date'" style="width: 100%;"></Calendar>


                    <Dropdown :class=" (contests_to_send[menu.field] == null || contests_to_send[menu.field] == '') && checked ? 'invalid' : ''" :disabled="(menu.field === 'evidence_type_id' && numeric_entry) || (menu.delicated && editing)" showTime v-model="contests_to_send[menu.field]" optionLabel="name" :options="menu.options" v-if="menu.type == 'Dropdown'" style="width: 100%;"></Dropdown>
                </div>


            </div>
        </form>

        <template #footer>
            <div style="width: 100%;">
                <Button @click="visible.dialogAddContestVisible = false" text severity="danger" label="Cancelar"></Button>
                <Button @click="createContest()" label="Guardar" severity="help"></Button>
            </div>
        </template>

    </Dialog>

    <Dialog class="mx-2"  header="Eliminar concurso" style="width: 25rem;" modal v-model:visible="visible.deleteContestDialogVisible">

        <div>
            <p>Esta seguro de eliminar el concurso <b>{{ contest_to_delete.name }}?</b></p>
        </div>


        <template #footer>
            <div style=" display:  flex; justify-content: end;">

                <Button @click="deleteContest(contest_to_delete.id)"  label="Eliminar este concurso" severity="danger">

                </Button>

            </div>

        </template>

    </Dialog>


    <div class="container px-0 md:px-3">
        <h1 class="m-auto px-4 py-4"><b>Administrador de concursos</b></h1>

        <DataTable
            :paginator="true"
            :rows="15"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} concursos"
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
                <div class="grid p-2" style="align-items:center;display: flex;gap: 1rem; justify-content: end;">
                    
                        <InputText
                            class=""
                            style="width: 100%; max-width: 500px;"
                            v-model="filters['global'].value"
                            placeholder="Buscar Concurso..."
                        />
              

                        <Button @click="openNewContest" style="min-width: max-content;" icon="pi pi-plus" label="Nuevo concurso" class="" severity="help"></Button>
                        


                   
                   
                  
                </div>
           
            </template>

            <column frozen style="min-width: 1rem;" class="py-1 pl-0" header="Id" field="id"></column>
            <column  style="min-width: 1rem;" class="py-1 pl-0" header="imagen" field="id">
            
                <template #body="data">
                     
                    <img class="p-0"
                            style="width: 100%;aspect-ratio: 3 / 3;border-radius: .3rem; object-fit: cover;"
                             :src="`${URI}/read-product-image/96/contest-${data.data.id}`"
                            alt="">
                </template>
            
            
            </column>
            <column style="min-width: 20rem;" class="py-1" header="Nombre" field="name"></column>

            <column style="min-width: 20rem;" class="py-1" header="Participantes" field="name">
            
                <template #body="data">
{{ data.data.is_site_participation? 'Sedes' : 'Colaboradores' }}
                </template>
            </column>



            <column style="min-width: 13rem;" class="py-1" header="Fecha de inicio" field="formattedStartDate">
                <template #body="data">
                    {{ data.data.formattedStartDate }}
                </template>
            </column>
            <column style="min-width: 13rem;" class="py-1" header="Fecha de finalizacion" field="formattedStartDate">
                <template #body="data">
                    {{ data.data.formattedEndDate }}
                </template>
            </column>


      

            <column style="min-width: 13rem;" class="py-1" header="Forma de ganar" field="formattedStartDate">
                <template #body="data">
                   
                    <span> {{ data.data.contest_winner_type_name }}</span>

                </template>
            </column>

            <column style="min-width: 12rem;" class="py-1" header="Tipo de evidencia" field="formattedStartDate">
                <template #body="data">
                   
                    <span> {{ data.data.evidence_type_name }}</span>

                </template>
            </column>


            
            <column style="min-width: 12rem;" class="py-1" header="Quien va ganando?" field="formattedStartDate">
                <template #body="data">
                   
                    <p style="text-transform: capitalize;min-width: max-content;"> {{ data.data.rbq[0]?.name?.split(' ')?.slice(0,3)?.join(' ')?.toLowerCase() }}</p>

                </template>
            </column>


            <column style="min-width: 20rem;" class="py-1" header="Instrucciones" field="formattedStartDate">
                <template #body="data">
                   
                    <span> {{ data.data.instructions }}</span>

                </template>
            </column>

            
            <column style="min-width: 5rem;" class="py-1" header="Estado" field="formattedStartDate">
                <template #body="data">
                   
                    <Tag  v-if="data.data.started" :severity="data.data.vigent? 'success' : 'danger'" style="border-radius: .3rem; min-width: max-content;">{{ data.data.vigent? 'En curso...' : 'Finalizado' }} </Tag> 
                    <Tag  v-if="!data.data.started" style="border-radius: .3rem;min-width: max-content;">{{ data.data.started? '' : 'Proximo' }} </Tag> 

                </template>
            </column>


            <column  alignFrozen="right" style="min-width: 4rem;" class="py-1 pr-0" header="Acciones" field="Visible">
                <template #body="data">
                    <div style="display: flex; align-items: center; gap: 0;">
                            <Button @click="opencontestToEdit(data.data)" style="pediting: 0; margin: 0;" severity="warning" text class="p-0 m-0 text-2xl" icon="fa-solid fa-pen-to-square p-0 m-0"></Button>
                            <Button @click="openContestToDelete(data.data)"  style="pediting: 0; margin: 0;" severity="danger" text class="p-0 m-0 text-2xl" icon="fa-solid fa-trash  p-0 m-0"></Button>
                    </div>
                   
                </template>
            </column>
            <column frozen alignFrozen="right" style="min-width: 4rem;" class="py-1 pr-0" header="Visible" field="Visible">
                <template #body="data">
                    <div style="display: flex; align-items: center; gap: 0;">
                        <InputSwitch  @change="() => contestService.contestToggleVisible(visibleContest[data.data.id], data.data.id)" v-model="visibleContest[data.data.id]"/>
                    </div>
                   
                </template>
            </column>

        </DataTable>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount, watch } from 'vue';
import { contestService } from '@/service/contest/contestService.js';
import { FilterMatchMode } from 'primevue/api';
import { formatShortDateTime } from '@/service/formating/formatDate.js';
import { loginStore } from '@/store/user.js'
import router from '../../../router';
import { URI } from '../callCenter/service/conection';
import { tr } from 'date-fns/locale';
import fileService from '../../../service/files/fileServide';
const file = ref(null)
const checked = ref(false)
const userStore = loginStore()
const editing = ref(false)
const contest = ref([]);
const filters = ref();
const contest_entry_option = ref({})
const urlPhotoProfile = ref(null)

const handleFileChange = (event) => {
    // Accede al archivo seleccionado a través del objeto de evento
    const selectedFile = event.target.files[0];


    if (selectedFile) {
        // Aquí puedes realizar acciones con el archivo seleccionado, como cargarlo al servidor
        console.log('Archivo seleccionado:', selectedFile);
        file.value = selectedFile
        urlPhotoProfile.value = URL.createObjectURL(selectedFile);
    }

}
const numeric_entry = ref(false)
const contests_to_send = ref({})
const visible = ref({
    dialogAddContestVisible:false,
    deleteContestDialogVisible:false
})




const opencontestToEdit = (contest) => {

    editing.value = true
    
    const currentConntest = {...contest}
    
    currentConntest.evidence_type_id = contest_entry_option.value.evidences.filter(c => c.id == currentConntest.evidence_type_id)[0]

    currentConntest.contest_winner_type_id = contest_entry_option.value.winner_type.filter(c => c.id == currentConntest.contest_winner_type_id)[0]


    currentConntest.is_site_participation = currentConntest.is_site_participation?  {name:'Sedes', value:true}:{name:'Colaboradores', value:false}

    contests_to_send.value = currentConntest


    visible.value.dialogAddContestVisible = true
}




const openNewContest = () => {
    editing.value = false
    contests_to_send.value = {}
    visible.value.dialogAddContestVisible = true
}
const content_to_add_contest_form = ref([
    {
        type:"text",
        field:'name',
        name:"Nombre"
    },
    {
        type:"textArea",
        field:'description',
        name:"Descripcion"
    },
    {
        type:"textArea",
        field:'instructions',
        name:"Instrucciones"
    },
    {
        type:"date",
        field:'start_date',
        name:"Fecha de inicio"
    },
    {
        type:"date",
        field:'end_date',
        name:"Fecha de finalizacion"
    },
    {
        type:"Dropdown",
        field:'contest_winner_type_id',
        name:"Forma de ganar",
        options_name:'winner_type',
        delicated:true,
        options:[],
        selected:{}
    },
    {
        type:"Dropdown",
        field:'evidence_type_id',
        name:"Tipo de evidencia",
        delicated:true,
        options_name:'evidences',
        options:[],
        selected:{}
    },
    {
        type:"Dropdown",
        field:'is_site_participation',
        name:"Participantes",
       
        options_name:'name',
        options:[
            {name:'Sedes', value:true},
            {name:'Colaboradores', value:false}
        ],
        selected:{}
    }
])




watch(contests_to_send, (newValue, oldValue) => {

    if (newValue.contest_winner_type_id?.id !== 2) {
        numeric_entry.value = false
        return
    }

    contests_to_send.value.evidence_type_id = content_to_add_contest_form.value.filter(menu => menu.field == 'evidence_type_id')[0].options?.filter(o => o.id == 4)[0]
    numeric_entry.value = true


}, { deep: true });





const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

const formattedContest = computed(() => {
    return contest.value.map(item => ({
        ...item,
        formattedStartDate: formatShortDateTime(item.start_date),
        formattedEndDate: formatShortDateTime(item.end_date)
    }));
});

onBeforeMount(() => {
    initFilters();
});

const contest_to_delete  = ref({})

const openContestToDelete = (contest) => {

    contest_to_delete.value = contest
    visible.value.deleteContestDialogVisible = true
    checked.value = false

}




const visibleContest = ref({})

const update = async() => {
    const value = await contestService.getAllContestAll()
    value.forEach(elem => {
        visibleContest.value[elem.id] = elem.visible
    });
    contest.value = value
}





const createContest = async () => {

    checked.value = true
    if (
        !contests_to_send.value.name ||
        !contests_to_send.value.start_date ||
        !contests_to_send.value.end_date ||
        !contests_to_send.value.description ||
        !contests_to_send.value?.evidence_type_id?.id ||
        !contests_to_send.value?.instructions ||
        !contests_to_send.value?.contest_winner_type_id?.id ||
        !contests_to_send.value?.is_site_participation 
    ) {
        alert("debe llenar todos los campos")
        return
    }



    const dataToSend = {
        "name": contests_to_send.value.name || '',
        "start_date": contests_to_send.value.start_date || '',
        "end_date": contests_to_send.value.end_date || '',
        "description": contests_to_send.value.description || '',
        "evidence_type_id": contests_to_send.value.evidence_type_id.id || '',
        "instructions": contests_to_send.value.instructions || '',
        "contest_winner_type_id": contests_to_send.value.contest_winner_type_id.id || '',
        "is_site_participation":contests_to_send.value.is_site_participation.value || false
    }


    const contest_id = editing.value? await contestService.updateContest({...dataToSend , id: contests_to_send.value.id}) : await contestService.createContest(dataToSend)


    visible.value.dialogAddContestVisible = false
    file.value ? fileService.uploadImage(file.value,'contest',contest_id) : ''
    update()
}




const deleteContest = async (id) => {
    visible.value.deleteContestDialogVisible = false

    await contestService.deleteContest(id)
    update()
}



onMounted(async () => {
    if(userStore.rawUserData.id != 1132){
        alert('no autorizado')
        router.push('/concursos')
    }

    contest_entry_option.value = await contestService.getContestEntryOption()
    content_to_add_contest_form.value.forEach( elem => {
        elem.type == 'Dropdown' && elem.field != 'is_site_participation'? elem.options = contest_entry_option.value[elem.options_name] : elem.options = elem.options
    })
    await update()

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

.form-container{
    display: flex; flex-direction: column;
    gap:.8rem
}

.invalid{
    border-color: #e24c4c;
    border-radius: .3rem 0 .3rem .3rem;
}
</style>
