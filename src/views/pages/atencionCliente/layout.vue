<template>


    <div class="container">
  
        <Toolbar class="toolbar">
            <template #start>

                 <Dropdown
                    :options="nav_buttons"
                    v-model="selectedStatus"
                    class="mr-2"
                    placeholder="Seleccionar estado"
                    append-to="body"
                    :style="{ width: '20rem' }">
              
                    <template #value="{ value }">
                        <span class="" style="display: flex;align-items: center;gap:  1rem;">
                            <Tag :style="`background-color:${value?.color}`" style="border-radius: 50%;aspect-ratio: 1 / 1;"></Tag>
                            {{ value?.label }}
                        </span>
                    </template>
                    <template #option="{ option }">
                       <span class="" style="display: flex;align-items: center;gap:  1rem;">
                            <Tag :style="`background-color:${option?.color}`" style="border-radius: 50%;aspect-ratio: 1 / 1;"></Tag>
                            {{ option?.label }}
                        </span>
                    </template>
                
                
                </Dropdown>

                
            </template>

            <template #center>
                <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
                <!-- <Button icon="pi pi-print" class="mr-2" severity="secondary" text /> -->
                <Button icon="pi pi-download" label="Descargar informe" severity="secondary" text />
                    
            </template>

            <template #end>
                  <IconField>
                 
                    <InputText placeholder="Buscar una pqr..." />
                </IconField>
               
                </template>
        </Toolbar>


        <router-view />

    </div>
</template>

 <script setup>
import { fetchService } from '../../../service/utils/fetchService';
import { onMounted, ref, watch } from 'vue';
import { URI } from '../callCenter/service/conection';
import { max } from 'moment-timezone';
import router from '../../../router';



const selectedStatus = ref(null)

const allStatus = ref([])

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])


watch(selectedStatus, (newValue, oldValue) => {
    if (newValue && newValue.id !== oldValue?.id) {
        router.push({
            name: 'atencion-cliente-pqr',
            params: {
                pqr_status_id: newValue.id,
                pqr_status_name: newValue.label
            }
        });
    }
});

const nav_buttons = ref( [{}])

const update = async () => {
    const status = await fetchService.get(`${URI}/get-all-pqrs-status`);
    nav_buttons.value = status.map( (item) => {
        return {
            label: item.name,
            id: item.id,
            color: item.color
        }
    });

        selectedStatus.value = nav_buttons.value[0];

   
            router.push({
                    name: 'atencion-cliente-pqr',
                    params: {
                        pqr_status_id: selectedStatus.value.id,
                        pqr_status_name: selectedStatus.value.name
                    }
                });
 
        


};


onMounted( async() =>  {
    await update();
})



</script>
<style lang="scss" scoped>

    .container {
        width: 100%;
        height: 100%;
       
        margin-top: 3rem;
    }

    .toolbar {
        width: 100%;
        // max-width: 1200px;
        display: flex;
        height: min-content;
        padding: .5rem;
        justify-content: space-between;
        align-items: center;
    }

</style>