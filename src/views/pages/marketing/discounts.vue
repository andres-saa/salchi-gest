<template>


    <Dialog :header="`sedes para el descuento ${currentSites?.discount_name}`" v-model:visible="dialogVisible.currentSites" modal>
    
        <div class="dialog-sites-discount" style="display: flex;flex-direction: column;gap: 1rem;">
    
            <div v-for="site in currentSites.sites" style="display: flex;gap: 1rem;align-items: center;justify-content: space-between;border-radius: .3rem;">
    
                <img style="width:3rem;aspect-ratio: 1 / 1;object-fit: cover;border-radius: .5rem;" :src="`${URI}/read-product-image/300/site-${site.site_id}`" alt="">
    
                <h5>{{ site.site_name }}</h5>
    
                <Button label="Eliminar sede" severity="danger"></Button>
            </div>
    
        </div>
    
        <template #footer>
    
            <div style="display: flex;justify-content: end;padding: 0; margin: 0;">
    
                <Button  style="margin: 0;" severity="help" label="Agregar Sede">
    
                </Button>
                 
            </div>
    
        </template>
    
    </Dialog>
    
        <div class="container">
            <h1>
                <b>Descuentos</b>
            </h1>
    
            <DataTable :value="data" stripedRows>
    
            <Column class="py-1" header="Nombre" field="discount_name">
            </Column>
            <Column class="py-1" header="Codigo" field="code">
            </Column>
            <Column class="py-1" header="Tipo" field="amount">
                <template #body="slotProps">
    
                    {{ slotProps.data.type.name  }}
                </template>
            </Column>
            <Column class="py-1" header="Monto" field="amount">
                <template #body="slotProps">
    
                    {{ slotProps.data.amount? formatToColombianPeso(slotProps.data.amount)  : `${slotProps.data.percent}%`  }}
                </template>
            </Column>
    
    
            <Column class="py-1" header="Estado" field="amount">
                <template #body="slotProps">
    
                     <Tag  style="padding: .5 1rem;color: white; text-transform: uppercase;" :severity="slotProps.data.status == 'active'? 'success' : 'danger'"> {{slotProps.data.status }} </Tag>
                    <!-- {{ slotProps.data.amount? formatToColombianPeso(slotProps.data.amount)  : `${slotProps.data.percent}%`  }} -->
                </template>
            </Column>
    
            <Column class="py-1" header="Sedes" field="amount" ">
                <template #body="slotProps">
                    <Button text style="padding: .5rem;color: black;" @click="openSiteDialog(slotProps.data)" icon="pi pi-home" severity="help" :label="slotProps.data.sites.length ">  </Button>
                   
                </template>
            </Column>
            
    
    
            <Column class="py-1" header="Tedenciones de 30 dias" field="amount" style="">
                <template #body="slotProps">
    
                    <p style="text-align: end;width: 100%;">
                        {{ slotProps.data.redent }}
                    </p>
                   
                </template>
            </Column>
    
            <Column class="py-1"   header="Ventas de 30 dias" field="amount" ">
    
                <template #body="slotProps">
                    <p style="text-align: end;width: 100%;">
                        {{ formatToColombianPeso(slotProps.data.sell)  }}
                    </p>
    
                </template>
            
            </Column>
    
            <Column class="py-1"  header="" field="" ">
                <template #body="slotProps">
                     <Button @click="toggle" cli ref="op"  text icon="pi pi-ellipsis-v" severity="help" style="color: black;"></Button>
                         
                            <OverlayPanel ref="op">
                        
                        
                        <div style="display: flex;flex-direction: column;gap: .5rem;">
                            <Button disabled icon="pi pi-play"  label="Reactivar cupon" severity="help"> </Button>
                            <RouterLink :to="`/marketing/discounts/${slotProps.data.id}/edit`">
                                <Button style="width: 100%;" icon="pi pi-pencil"  label="Editar cupon" severity="help"> </Button>

                            </RouterLink>

                        </div>
                    </OverlayPanel>
                </template>
            </Column>
    
    
    
       
    </DataTable>
    
    
        </div>
    

    
        
    </template>
    
    
    <script setup>
    import {fetchService} from '@/service/utils/fetchService.js'
    import { onMounted, ref } from 'vue';
    import { URI } from '../../../service/conection';
    import { formatToColombianPeso } from '../../../service/valoresReactivosCompartidos';
    import OverlayPanel from 'primevue/overlaypanel';
    
    const op = ref(null)
    const data = ref({})
    
    onMounted(async () =>  {
        data.value = await fetchService.get(`${URI}/discount/get-discounts`)
    })
    
    
    const dialogVisible = ref({
        currentSites:false
    })
    const currentSites = ref([])
    
    const openSiteDialog = (data) => {
        currentSites.value = data
        dialogVisible.value.currentSites = data
    }
    
    const toggle = (event) => {
        op.value.toggle(event);
    }
    </script>
    
    <style scoped >
    
    
    *{
        color: black;
    }
 
    
    button{
        color: white;
    }
    
    </style>