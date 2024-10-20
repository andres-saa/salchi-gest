<template>


    <div class="mx-auto shadow-5 px-0 py-0 my-0" style="max-width: 900px; background-color: rgb(21 67 96 / 31%);position: relative;">
        <h1 class="text-center mb-1 p-5 shadow-4" style="margin-top: 3rem; ; color:white; background-color: rgb(21, 67, 96);"><b>Entrenador Salchi🤖bot</b></h1>
        <h2 class="m-0 text-center " style="color:rgb(21, 67, 96);"> <b>{{ etapa == 1 ? 'Patrones' :etapa == 2 ? 'Respuestas':'Chat' }}</b> </h2>

        <div class="m-auto" style="display: flex; align-items: center;width: max-content;">
            <h4 class="m-0 p-0"> <b>Etiqutas</b> </h4>
        <Dropdown style="width: 100%; max-width: 20rem;min-width: 15rem;" class="my-3 mx-4" v-model="selectedTag" :options="tags"
            optionLabel="name"></Dropdown> <Button @click="show_new_tag = true" style="min-width: max-content;" severity="help" label="Nueva Etiqueta"></Button>
        </div>

       

        <Button @click="etapa == 3? etapa = 2 : etapa = 1" severity="help" icon="pi pi-arrow-left px-2"
            style="position: fixed;justify-content: end; left: -1rem; top: 40vh;"></Button>

        <div style="display: flex;gap: 1rem; max-width:900px;overflow: hidden;height: 75vh;" class="mx-auto p-3">

            <div :style="etapa == 1 ? 'transform: translateX(0)' :etapa == 2 ? 'transform: translateX(-100%)' : 'transform: translateX(-200%)'"
                style="min-width: 100%;  overflow-y: auto;" class="grid m-0">

                <div class=" col-12 md:col-6 px-2 py-0">
                    <Textarea rows="10" class=" p-3 shadow-4" v-model="patterns"
                        style="height: max-content;width: 100%;max-width: 100%;height: 60vh; resize: none;"></Textarea>

                </div>


                <div class="col-12 md:col-6 px-2 py-0 "  style="height: 60vh;overflow: auto;">
                    <div class="mb-2" v-for="(patter, index) in patterns.split('\n').filter(p => p !== '')"
                        :key="index">
                        <div cla :style="`background-color: ${getRandomPastelColor()};`"
                            style="border-radius: .3rem;transition:  all .3s ease;" class="shadow-2">
                            <Tag style="border-radius: .2rem; background-color: #ffffff40;" class="m-1 px-2 "
                                :key="index" v-for="(tag, index) in patter.split(' ').filter(p => p.trim() !== '')"> {{
                                    tag }} </Tag>
                        </div>

                    </div>
                </div>


            </div>



            <div :style="etapa == 1 ? 'transform: translateX(0)' :etapa == 2 ? 'transform: translateX(-100%)' : 'transform: translateX(-200%)'"
                style="min-width: 100%;  overflow-y: auto;" class="grid m-0 " >

                <div class=" col-12 md:col-6 px-2 py-0">
                    <Textarea rows="10" class=" p-3 shadow-4" v-model="responses"
                        style="height: max-content;width: 100%;max-width: 100%;height: 60vh; resize: none;"></Textarea>
                </div>


                <div class="col-12 md:col-6 px-2 py-0" style="height: 60vh;overflow: auto;">
                    <div class="mb-2" v-for="(response, index) in responses.split('\n').filter(p => p !== '')"
                        :key="index">
                        <div :style="`background-color: ${getRandomPastelColor()};`"
                            style="border-radius: .3rem;transition:  all .3s ease;" class="shadow-2">
                            <Tag style="border-radius: .2rem; background-color: #ffffff40;" class="m-1 px-2">
                                {{ response }}
                            </Tag>
                        </div>

                    </div>
                </div>


            </div>



            <div :style="etapa == 1 ? 'transform: translateX(0)' :etapa == 2 ? 'transform: translateX(-100%)' : 'transform: translateX(-200%)'"
                style="min-width: 100%;  overflow-y: auto;" class="grid m-0 pb-8 mb-8" >

                <div class="col-12 m-0 pr-7">
                    <div  :style="index % 2 == 0? 'background-color: rgb(21, 67, 96);color:white ' : 'background-color: white;justify-content:end'" style="border-radius: .3rem;display: flex;"  v-for="(message,index) in messages" :key="message.id" class="p-3 shadow-4 my-3">
                        <p   style="width: max-content;" :style="index % 2 == 0? '' : 'text-align:end'">{{ message.text }}</p>
                    </div>
                </div>
                

            </div>

            <div v-if="etapa == 3" class="p-3" style="position: absolute;background-color: rgba(21, 67, 96, 0.31); bottom: 0;width: 97%;" >
                <Textarea style="width: 100%;" type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />

            </div>



        </div>

        <Button @click="etapa == 1? etapa = 2 : etapa = 3" icon="pi pi-arrow-right  px-2" severity="help"
            style="position: fixed; right: -1rem;top: 40vh;justify-content: start; "></Button>



        <Button @click="sendData" iconPos="right" icon="pi pi-arrow-up  px-2" label="Entrenar" severity="success"
            style="position: fixed; right: 1rem;bottom: 1rem;justify-content: start; "></Button>












            <Dialog header="Nueva etiqueta" v-model:visible="show_new_tag" modal>
                <div style="display: flex;flex-direction: column;gap: 1rem;">
                    <InputText v-model="newTag">
                </InputText>

                <Button @click="sendNewTag" label="Crear" severity="help"></Button>
                </div>
                
            </Dialog>
    </div>


</template>






<script setup>
import { onMounted, ref } from 'vue';
import { fetchService } from '../../../service/utils/fetchService';



const etapa = ref(1)
const show_new_tag = ref(false)
const patterns = ref('')
const responses = ref('')
const newTag = ref('')

const tags = ref([])
const selectedTag = ref({})

const update = async () => {
    tags.value = await fetchService.get('https://chatbot.salchimonster.com/get_tags', 'cargando Etiquedas')
}

onMounted(() => {
    update()
})



const darkColors = [
    "#1B2631", // Dark Navy
    "#2C3E50", // Midnight Blue
    "#34495E", // Dark Slate
    "#1A1A1A", // Charcoal Black
    "#4A235A", // Deep Purple
    "#512E5F", // Dark Amethyst
    "#7D3C98", // Dark Violet
    "#154360", // Dark Cerulean
    "#1B4F72", // Deep Blue
    "#17202A", // Jet Black
    "#1C2833", // Dark Gunmetal
    "#641E16", // Deep Red
    "#78281F", // Dark Brick Red
    "#943126", // Dark Crimson
    "#512E5F", // Deep Grape
    "#4D5656", // Dark Steel
    "#212F3D", // Dark Indigo
    "#0B5345", // Dark Jade Green
    "#145A32", // Deep Forest Green
    "#1D8348", // Dark Emerald
    "#6E2C00", // Burnt Orange
    "#784212", // Dark Bronze
    "#4E342E", // Dark Cocoa
    "#3E2723", // Dark Brown
    "#283747"  // Dark Sapphire Blue
];

// Función para seleccionar un color al azar
function getRandomPastelColor() {
    const randomIndex = Math.floor(Math.random() * darkColors.length);
    return darkColors[randomIndex];
}


const sendNewTag = async() => {


    const data = {
        name:newTag.value

    }

    await fetchService.post('https://chatbot.salchimonster.com/create_tag',data,'creando etiqueta')
    await update()
    show_new_tag.value = false

}

const sendData = async () => {
    if (!selectedTag.value.id) {
    alert('etiqueta no seleccionado');
    return;
    }

    if (!patterns.value) {
        alert('Patrones no definidos');
        return;
    }

    if (!responses.value) {
        alert('Respuestas no definidas');
        return;
    }

    const data = {
        "intent_id": selectedTag.value.id,
        "paterns":patterns.value.split('\n').filter(p => p.trim() !== '').map(p => p.split(' ').map(p => p.trim()).filter(b => b.trim() !== ''))
            
        ,
        "responses":responses.value.split('\n')
        
    }


    await fetchService.post('https://chatbot.salchimonster.com/train',data,'enviando respuesta')
    patterns.value = ''
    responses.value = ' '
}




    const messages = ref([]);
const newMessage = ref('');

const sendMessage = () => {
  const message = {
    id: Date.now(),
    text: newMessage.value
  };
  messages.value.push(message);
  newMessage.value = ''; // Limpiar el campo de entrada
  apiCall(message.text);
};

const apiCall = async (messageText) => {
  const data = {
    answer: messageText,
    client_id: "andres" // Asegúrate de reemplazar esto con el ID de cliente adecuado
  };

  const headers = {
    'Authorization': '9yqQJxLc0hcSx47-_9Ya1k8KiLrIdMs-45xOWrYEQWI', // Asegúrate de que la clave API esté correcta
    'Content-Type': 'application/json'
  };

  // Configuración de la solicitud
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  };npm

  try {
    const response = await fetch('https://chatbot.salchimonster.com/chat', requestOptions);
    if (!response.ok) {
      throw new Error('Respuesta de red no fue ok');
    }
    const responseData = await response.json(); // Asumiendo que la respuesta es un JSON
    const reply = {
      id: Date.now(),
      text: responseData.response // Ajusta este campo según la estructura de la respuesta de tu API
    };
    messages.value.push(reply);
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    messages.value.push({
      id: Date.now(),
      text: 'Error al obtener respuesta de la API'
    });
  }
};



</script>


<style scoped>
button {
    z-index: 1000;
}

* {
    transition: all .3s ease;
}
</style>