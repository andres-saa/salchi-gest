<template>
    <Loading v-if="visibleLoading" tittle="Cargando barrios"></Loading>
    <Dialog v-model:visible="showDialog" style="width: auto" header="Confirmar eliminación" :modal="true" :closable="false">
        <p>¿Estás seguro de que quieres eliminar este barrio?</p>
        <Button label="Cancelar" @click="showDialog = false" class="p-button-text" />
        <Button label="Eliminar" @click="deleteNeighborhood" class="p-button-danger" />
    </Dialog>

    <Dialog v-model:visible="showCreateDialog" header="Crear Nuevo Barrio" :modal="true" :closable="false">

        <div class="   grid" style=" ">


            <div class="col-6 pr-2 pl-3">
                <Dropdown style="width: 100%;" v-model="newNeighborhoodCity" :options="cities" optionLabel="city_name"
                    placeholder="Ciudad" />
            </div>

            <div class="col-6 pl-2 pr-3">
                <Dropdown style="width: 100%;" v-model="newNeighborhoodSite" :options="sites" optionLabel="site_name"
                    placeholder="Sede" />

            </div>


        </div>


        <div v-for="(barrio, index) in barriosToAdd" :key="index">
    <div class="my-2" style="width: 100%; display: flex; gap: 1rem;">
        <InputText v-model="barrio.name" placeholder="Nombre del Barrio" />
        <InputNumber v-model="barrio.delivery_price" placeholder="Precio del Domicilio" />
        <Button v-if="barriosToAdd.length > 1" text class="p-0" size="small" severity="danger" @click="removeBarrio(index)">
            <i class="text-xl" :class="PrimeIcons.TRASH"></i>
        </Button>
    </div>
</div>

        <div class="col-12 pl-0">
            <Button text class="p-0" @click="() => {barriosToAdd.push({})}">
                <i class="text-4xl" :class="PrimeIcons.PLUS_CIRCLE"></i>

            </Button>
        </div>





        <template #footer>
            <Button label="Cancelar" @click="showCreateDialog = false" class="p-button-text" />
            <Button label="Crear" @click="createNeighborhood" class="p-button-text" />
        </template>
    </Dialog>

    <div class="col-12 m-auto  p-0" style="max-width: 900px;">





        <DataTable ref="dt" :value="neighborhoods" v-model:selection="selectedneighborhoods" dataKey="id" :paginator="true"
            :rows="10" :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[5, 10, 25, 100]"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} neighborhoods" responsiveLayout="scroll"
            scrollable scroll-height="62vh" :frozenValue="lockedCustomers">
            <template #header style="z-index:200">
                <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                    <p class="m-0  text-2xl my-4 my-0 py-0">Precios Domicilios <Button class="p-2 ml-4" label="Nuevo Barrio"
                            @click="showCreateDialog = true"></Button>
                    </p>

                    <span class="block mt-2 md:mt-0 p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText class="" v-model="filters['global'].value" placeholder="Buscar..." />
                    </span>
                </div>
            </template>

            <Column class="p-2" selectionMode="multiple" headerStyle="width: 3rem; " frozen></Column>

            <Column class="p-2" field="id" header="Id" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="neighborhood">
                    <span class="p-column-title">Code</span>
                    {{ neighborhood.data.neighborhood_id }}
                </template>
            </Column>

            <Column class="p-2" field="name" header="Barrio" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="neighborhood">
                    <span class="p-column-title">Code</span>
                    <!-- {{ neighborhood.data.creator_id }}
                                 -->
                    <InputText :onchange="() => update(neighborhood.data)" style="width:100%;"
                        v-model="neighborhood.data.name"></InputText>

                </template>
            </Column>

            <Column class="p-2" field="delivery_price" header="Precio del domicilio" :sortable="true"
                headerStyle="width:min-content; min-width:min-content; ">
                <template #body="neighborhood">
                    <span class="p-column-title">Code</span>
                    <!-- {{ neighborhood.data.name }} -->
                    <InputNumber style="width:100%;" v-model="neighborhood.data.delivery_price"
                        @update:modelValue="() => update(neighborhood.data)"></InputNumber>
                </template>
            </Column>


            <Column field="actions" header="Acciones">
                <template #body="data">
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="confirmDelete(data.data)" />
                </template>
            </Column>



        </DataTable>



    </div>
</template>
        
        
<script setup>

import { ref, onMounted, onBeforeMount, watch } from 'vue'
import { URI } from '@/service/conection';
import Loading from '@/components/Loading.vue'

const barriosToAdd = ref([{}])
const removeBarrio = (index) => {
    if (barriosToAdd.value.length > 1){
        barriosToAdd.value.splice(index, 1);

    }
};
import { FilterMatchMode, PrimeIcons } from 'primevue/api';

import { useToast } from 'primevue/usetoast';
// import { departamentos, findByDepartament } from '@/service/CountryService.js'
// import { jsPDF } from "jspdf";

// import { uploadUserPhotoProfile } from '@/service/sendFileService'
import {

    getSites

} from '@/service/dropDownAux';

// // import logo from '@/images/logo.png'
// import { getUserRole } from '@/service/valoresReactivosCompartidos.js'
// import * as XLSX from 'xlsx';

const showCreateDialog = ref(false);
const newNeighborhood = ref({
    neighborhood_id: 0,
    name: "",
    delivery_price: 0,
    site_id: 0,
    city_id: 0
})



const newNeighborhoodSite = ref(0)
const newNeighborhoodCity = ref(0)


watch(newNeighborhoodCity, ( nuevo, viejo) => {
    if (nuevo != viejo){
        getSitesByCity().then(s => {
            sites.value = s
            newNeighborhoodSite.value = sites.value[0]
        } )
       
    }
})


watch(showCreateDialog, ( nuevo, viejo) => {
    if (nuevo == true){
        newNeighborhoodCity.value = {}
        barriosToAdd.value=[{}]
    }
})

const createNeighborhood = async () => {
    const barrios = [
      {
        name: 'Alvernia',
        delivery_price: 3000
      },
      {
        name: 'Nuevo alvernia',
        delivery_price: 3000
      },
      {
          name: 'Entre rios',
          delivery_price: 3000
        },
        {
          name: 'Villa nueva',
          delivery_price: 3000
        },
        {
          name: 'Conj residencial la villa',
          delivery_price: 3000
        },
        {
          name: 'El dorado',
          delivery_price: 3000
        },
        {
          name: 'Franciscano',
          delivery_price: 3000
        },
        {
          name: 'Morales',
          delivery_price: 3000
        },
        {
          name: 'Popular',
          delivery_price: 3000
        },
        {
          name: 'El bosque',
          delivery_price: 3000
        },
        {
          name: 'Cespedes',
          delivery_price: 3000
        },
        {
          name: 'Victoria',
          delivery_price: 3000
        },
        {
          name: 'Panamericano',
          delivery_price: 3000
        },
        {
          name: 'Miraflores',
          delivery_price: 3000
        },
        {
          name: 'Jazmin',
          delivery_price: 3000
        },
        {
          name: 'Lomitas',
          delivery_price: 3000
        },
        {
          name: 'Tomas uribe',
          delivery_price: 3000
        },
        {
          name: 'Centro',
          delivery_price: 3000
        },
        {
          name: 'Nuevo farfan',
          delivery_price: 4000
        },
        {
          name: 'Villa del lago',
          delivery_price: 4000
        },
        {
          name: 'Villa margarita',
          delivery_price: 4000
        },
        {
          name: 'Portales de san felipe',
          delivery_price: 4000
        },
        {
          name: 'Asoagrin',
          delivery_price: 4000
        },
        {
          name: 'Villa liliana 1',
          delivery_price: 4000
        },
        {
          name: 'Villa liliana 2',
          delivery_price: 4000
        },
        {
          name: 'Sintra san carlos',
          delivery_price: 4000
        },
        {
          name: 'Prados del limonar',
          delivery_price: 4000
        },
        {
          name: 'Bosques de maracaibo',
          delivery_price: 4000
        },
        {
          name: 'Agua clara av principal',
          delivery_price: 4000
        },
        {
          name: 'tercer milenio',
          delivery_price: 4000
        },
        {
          name: 'Casa huertas',
          delivery_price: 4000
        },
        {
          name: 'San luis',
          delivery_price: 4000
        },
        {
          name: 'Simon bolivar',
          delivery_price: 4000
        },
        {
          name: 'Ciudad campestre',
          delivery_price: 4000
        },
        {
          name: 'La rivera',
          delivery_price: 4000
        },
        {
          name: 'Cienegueta',
          delivery_price: 5000
        },
        {
          name: 'Motel',
          delivery_price: 4000
        },
        {
          name: 'Aeropuerto',
          delivery_price: 4000
        },
        {
          name: 'Parque verzalles',
          delivery_price: 4000
        },
        {
          name: 'La Paz',
          delivery_price: 4000
        },
        {
          name: 'El condor',
          delivery_price: 3000
        },
        {
          name: 'El conder 2',
          delivery_price: 3000
        },
        {
          name: 'Nuevo morales',
          delivery_price: 3000
        },
        {
          name: 'Estambul',
          delivery_price: 3000
        },
        {
          name: 'La cruz',
          delivery_price: 3000
        },
        {
          name: 'Santa rita del rio',
          delivery_price: 3000
        },
        {
          name: 'La inmaculada',
          delivery_price: 3000
        },
        {
          name: 'San antonio',
          delivery_price: 3000
        },
        {
          name: 'Playas',
          delivery_price: 4000
        },
        {
          name: 'Palo bonito',
          delivery_price: 3000
        },
        {
          name: 'Escobar',
          delivery_price: 3000
        },
        {
          name: 'Maracaibo',
          delivery_price: 3500
        },
        {
          name: 'Rojas',
          delivery_price: 3500
        },
        {
          name: 'La merced',
          delivery_price: 3000
        },
        {
          name: 'Saleciano',
          delivery_price: 3000
        },
        {
          name: 'Sajonia',
          delivery_price: 3000
        },
        {
          name: 'Santa ines',
          delivery_price: 4000
        },
        {
          name: 'Pueblo nuevo',
          delivery_price: 3000
        },
        {
          name: 'Progresar',
          delivery_price: 3000
        },
        {
          name: 'Urb la herradura',
          delivery_price: 3000
        },
        {
          name: 'Palmas de progresar',
          delivery_price: 3000
        },
        {
          name: 'San carlos',
          delivery_price: 3000
        },
        {
          name: '12 de octubre',
          delivery_price: 3000
        },
        {
          name: 'El lago',
          delivery_price: 3000
        },
        {
          name: 'El laguito',
          delivery_price: 3000
        },
        {
          name: 'Principe',
          delivery_price: 3000
        },
        {
          name: 'Laureles',
          delivery_price: 4000
        },
        {
          name: 'Av cali',
          delivery_price: 3000
        },
        {
          name: 'La bastilla',
          delivery_price: 3000
        },
        {
          name: 'Quintas de san felipe',
          delivery_price: 4000
        },
        {
          name: 'Fatima',
          delivery_price: 3000
        },
        {
          name: 'Nuevo fatima',
          delivery_price: 3000
        },
        {
          name: 'Villa campestre',
          delivery_price: 3000
        },
        {
          name: 'San benito',
          delivery_price: 3000
        },
        {
          name: 'La esperanza',
          delivery_price: 3500
        },

        {
          name: 'Las delicias',
          delivery_price: 3500
        },

        {
          name: 'La ceiba',
          delivery_price: 3500
        },

        {
          name: 'Ruben cruz velez',
          delivery_price: 3500
        },

        {
          name: 'Diablos rojos',
          delivery_price: 4000
        },

        {
          name: 'La campiña',
          delivery_price: 3000
        },

        {
          name: 'La quinta',
          delivery_price: 3000
        },

        {
          name: 'La graciela',
          delivery_price: 3000
        },

        {
          name: 'Los olmos',
          delivery_price: 3500
        },

        {
          name: 'El jardin',
          delivery_price: 3000
        },

        {
          name: 'La trinidad',
          delivery_price: 3000
        },

        {
          name: '7 de agosto',
          delivery_price: 3500
        },

        {
          name: 'Buenos aires',
          delivery_price: 4000
        },

        {
          name: 'Bolivar',
          delivery_price: 4000
        },

        {
          name: 'San pedro claver',
          delivery_price: 4000
        },

        {
          name: 'Marandua',
          delivery_price: 4000
        },

        {
          name: 'Chiminangos',
          delivery_price: 4000
        },

        {
          name: 'Prados del norte',
          delivery_price: 4000
        },

        {
          name: 'Guayacanes',
          delivery_price: 4000
        },

        {
          name: 'Las americas',
          delivery_price: 4000
        },

        {
          name: 'Las nieves',
          delivery_price: 4000
        },

        {
          name: 'Villa del sur',
          delivery_price: 4000
        },

        {
          name: 'Farfan',
          delivery_price: 4000
        },

        {
          name: 'Municipal',
          delivery_price: 4000
        },

        {
          name: 'La independencia',
          delivery_price: 4000
        },

        {
          name: 'Villa colombia',
          delivery_price: 4000
        },

        {
          name: 'Porvenir',
          delivery_price: 4000
        },

        {
          name: 'Saman del norte',
          delivery_price: 4000
        },

        {
          name: 'El palmar',
          delivery_price: 4000
        },

        {
          name: 'Alameda',
          delivery_price: 4000
        },

        {
          name: 'urb peñaranda',
          delivery_price: 3500
        },

        {
          name: 'Portales del Rio',
          delivery_price: 4000
        },

        {
          name: 'Santa isabel',
          delivery_price: 4000
        },

        {
          name: 'Flor de la campana',
          delivery_price: 4000
        },

        {
          name: 'Bello horizonte',
          delivery_price: 4000
        },

        {
          name: 'Horizonte',
          delivery_price: 4000
        },

        {
          name: 'Lucitania',
          delivery_price: 3500
        },

        {
          name: 'Nuevo principe',
          delivery_price: 3500
        },

        {
          name: 'Hotel',
          delivery_price: 3500
        },

        {
          name: 'Callejoness agua clara',
          delivery_price: 5000
        },
        {
          name: 'Nariño',
          delivery_price: 5000
        },

        {
          name: 'Tres esquinas',
          delivery_price: 5000
        },

        {
          name: 'Cienegueta alto',
          delivery_price: 5000
        },

        {
          name: 'El picacho',
          delivery_price: 5000
        },

        {
          name: 'Campo alegre',
          delivery_price: 5000
        },
    ].map(barrio => ({
        ...barrio,
        site_id: 6,
        city_id: 12
    }));

    // Usar Promise.all para enviar todas las peticiones simultáneamente
    try {
        await Promise.all(barrios.map(async (barrio) => {
            const response = await fetch(`${URI}/neighborhood`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(barrio)
            });

            if (!response.ok) {
                throw new Error(`Error al crear el barrio: ${barrio.name}`);
            }

            // Respuesta exitosa para este barrio
            return response.json();
        }));

        // Si todas las peticiones son exitosas
        toast.add({ severity: 'success', summary: 'Creado', detail: 'Todos los barrios creados con éxito', life: 3000 });
        showCreateDialog.value = false; // Cierra el diálogo después de la creación
        await getNeighborhoods().then(barrio => neighborhoods.value = barrio); // Actualizar la lista de barrios
        router.push(`/domicilios/${newNeighborhoodSite.value.site_id}`)
    } catch (error) {
        console.error('Error en la petición:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron crear algunos barrios', life: 3000 });
    }
};

const cities = ref([])
const getCities = async () => {
    try {
        // spinnersView.value.ciudad = true
        const response = await fetch(`${URI}/cities`)
        if (response.ok) {
            const data = await response.json()
            // spinnersView.value.ciudad = false
            // cities.value = data
            return data
        }

    } catch (error) {
        // spinnersView.value.ciudad = false

    }

}
const deleteNeighborhood = async () => {
    const options = {
        method: 'DELETE', // Método HTTP para la eliminación
    };

    try {
        const response = await fetch(`${URI}/neighborhood/${neighborhoodToDelete.value.neighborhood_id}`, options);
        if (!response.ok) {
            throw new Error('Error al eliminar el barrio');
        }
        // Actualiza tu estado o lista de barrios aquí, por ejemplo, refrescando la lista de barrios
        await getNeighborhoods().then(data => neighborhoods.value = data);
        showDialog.value = false; // Cierra el diálogo después de la eliminación
        toast.add({ severity: 'success', summary: 'Eliminado', detail: 'Barrio eliminado con éxito', life: 3000 });
    } catch (error) {
        console.error('Error en la petición:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el barrio', life: 3000 });
    }
};
onMounted(async () => {
    getCities().then(data => cities.value = data)
})

const neighborhoods = ref([])
const visibleLoading = ref(false)
const showDialog = ref(false);
const neighborhoodToDelete = ref({});

const confirmDelete = (neighborhood) => {
    neighborhoodToDelete.value = neighborhood;
    showDialog.value = true;
};



const getNeighborhoods = async () => {

    const site_id = route.params.site_id

    try {
        visibleLoading.value = true
        const response = await fetch(`${URI}/neighborhoods/by-site/${site_id}`)

        if (!response.ok) {
            visibleLoading.value = false

        }
        if (response.ok) {
            const data = await response.json()
            visibleLoading.value = false

            // cities.value = data
            return data
        }

    } catch (error) {
        visibleLoading.value = false


    }
}


const getSitesByCity = async () => {

if (!newNeighborhoodCity.value?.city_id){
    return
}

const city_id = newNeighborhoodCity.value.city_id

try {
    // visibleLoading.value = true
    const response = await fetch(`${URI}/sites/city/${city_id}`)

    if (!response.ok) {
        // visibleLoading.value = false

    }
    if (response.ok) {
        const data = await response.json()
        // visibleLoading.value = false

        // cities.value = data
        return data
    }

} catch (error) {
    // visibleLoading.value = false


}
}

onMounted(async () => {

    getNeighborhoods().then(data => {
        neighborhoods.value = data
    })



})







// const userId = ref( await getUserId())






const selectedneighborhoods = ref()

const filters = ref(null);

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };

};





onBeforeMount(() => {
    initFilters()
})





























import { computed } from 'vue'
// import { URI } from '@/service/conection';
import { useRoute } from 'vue-router';
import { getUserId } from '@/service/valoresReactivosCompartidos';
import router from '@/router';
// import { getUserId } from '@/service/valoresReactivosCompartidos';
// import { getUsers } from '@/service/userServices'
// import { siteDropValues } from '@/service/valoresReactivosCompartidos';
// import {
//     sitesDropValues,
//     GenderDropValues,
//     PositionDropValues,
//     maritalStatusDropValues,
//     epsDropValues,
//     educationLevelDropValues,
//     employmentContractTypeDropValues,
//     pantSizesDropValues,
//     shirtSizesDropValues,
//     bloodTypesDropValues,
//     housingTypesDropValues,
//     statusDropValues,
//     vehicleTypesDropValues,
//     findSiteById,
//     findSiteByName,
//     getSites

// } from '@/service/dropDownAux';


// import { useToast } from 'primevue/usetoast';
const sending = ref(false)

const incluirLink = ref(false);
const toast = useToast();
const route = useRoute()
const allUsers = ref(false)
const groupedUsersBySite = ref([]);
const groupedUsersByPosition = ref([]);
const neighborhood = ref({})

const esURLValida = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};
const newneighborhood = ref({})
const charging = ref(true)
const checked = ref(false)
const toggleUsersSelectionBySite = (siteName, isSelected) => {
    const siteGroup = groupedUsersBySite.value.find(group => group.site_name === siteName);
    if (!siteGroup) return;

    let updatedSelectedUsers = [...usersSelected.value];

    siteGroup.employers.forEach(user => {
        const userIndex = updatedSelectedUsers.indexOf(user.id);
        if (isSelected && userIndex === -1) {
            updatedSelectedUsers.push(user.id);
        } else if (!isSelected && userIndex !== -1) {
            updatedSelectedUsers.splice(userIndex, 1);
        }
    });

    usersSelected.value = updatedSelectedUsers;
};


// const areAllSelected = computed(() => {
//     const allUserIds = groupedUsersBySite.value.reduce((acc, group) => {
//         return acc.concat(group.employers.map(user => user.id));
//     }, []);

//     return allUserIds.every(userId => usersSelected.value.includes(userId));
// });



const usersSelected = ref([]);

const update = async (neighborhood) => {


    const options = {
        method: 'PUT', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Indica que el cuerpo de la petición es un JSON
        },
        body: JSON.stringify(neighborhood) // Convertir el objeto de datos a una cadena JSON
    };

    // Realizar la petición PUT
    fetch(`${URI}/neighborhood/${neighborhood.neighborhood_id}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('La petición ha fallado');
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(responseData => {
            console.log('Respuesta del servidor:', responseData); // Manejar la respuesta del servidor
        })
        .catch(error => {
            console.error('Error en la petición:', error); // Manejar errores de la petición
        });
}


const createAttendeesData = (training_id) => {
    // const training_id = route.params.neighborhood_id
    return {
        attendees: usersSelected.value.map(userId => ({
            training_id: training_id, // Asegúrate de que sea un número
            attendee_id: userId,
            assigned: false, // o el valor por defecto que desees
            attendance_time: new Date().toISOString() // o una fecha/hora específica si es necesario
        }))
    };
};







async function fetchGroupedUsersBySite() {

    try {
        const response = await fetch(`${URI}/employers/grouped-by-site`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        // Agrupar adicionalmente por posición dentro de cada sede

        data = data.map(group => {
            const groupedByPosition = group.employers.reduce((acc, curr) => {
                acc[curr.position] = acc[curr.position] || [];
                acc[curr.position].push(curr);
                return acc;
            }, {});
            return { ...group, positions: groupedByPosition };

        });

        groupedUsersBySite.value = data;
        charging.value = false



    } catch (error) {
        console.error('Error al obtener usuarios agrupados por sede:', error);
    }
}

// Función para obtener usuarios agrupados por posición
async function fetchGroupedUsersByPosition() {
    try {
        const response = await fetch(`${URI}/employers/grouped-by-position`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        groupedUsersByPosition.value = await response.json();
    } catch (error) {
        console.error('Error al obtener usuarios agrupados por posición:', error);
    }
}



const sites = ref([])


onBeforeMount(() => {

    // initFilters();
    getSites().then(data => sites.value = data)
    // getAsistentes()
});


onMounted(async () => {
    // Cargar datos agrupados al montar el componente
    await fetchGroupedUsersBySite();
    await fetchGroupedUsersByPosition();
});

const toggleUserSelection = (userId) => {
    const index = usersSelected.value.indexOf(userId);
    if (index > -1) {
        usersSelected.value.splice(index, 1); // Elimina el ID si ya está presente
    } else {
        usersSelected.value.push(userId); // Agrega el ID si no está presente
    }
};










watch(() => route.path, () => {
    // Llama a getNeighborhoods cada vez que cambia la ruta
    getNeighborhoods().then(data => {
        neighborhoods.value = data
    })
});

























</script>
        
<style scoped>
Button {
    font-weight: bold;
}

.vacaciones {
    display: flex;
    background-color: #64748B;
    justify-content: center;

}

.licencia {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}

.general {
    display: flex;
    background-color: #64748B;
    justify-content: center;
}


.generado {
    display: flex;
    background-color: #eeff0060;
    justify-content: center;
}

* {
    overflow-wrap: break-word;
    white-space: normal;
    overflow: hidden;
}

.aprobado {
    display: flex;
    background-color: #2bff0060;
    justify-content: center;
}

.rechazado {
    display: flex;
    background-color: #ff000044;
    justify-content: center;
}

Button {
    text-transform: capitalize;
}



.Agendada {
    background-color: var(--yellow-200);
    border-radius: 5rem;
}

.Completada {
    background-color: var(--green-200);
    border-radius: 5rem;
}

.Cancelada {
    background-color: var(--red-200);
    border-radius: 5rem;
}</style>