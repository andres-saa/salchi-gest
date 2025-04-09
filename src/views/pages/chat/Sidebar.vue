<template>

    <div class="sidebar-container">
        <div class="header">
            <Button class="restaurant"> <img src="https://backend.salchimonster.com/read-photo-product/xai0dVnL" alt=""> <h5>Salchimonster <i class="pi pi-angle-down pl-2"></i></h5></Button> 
            <div><Button class="options" text > <i class="pi pi-bars  text-2xl text-white"></i></Button></div>
        </div>


        <div class="busqueda">
            <InputText class="search"></InputText>
        </div>


        <div class="statuses">
            <Button style="height: 2.3rem; border-radius: .3rem;"  v-for="(button, index) in buttons" 
                    :key="index"
                    class="status"
                    :label="button.label"
                    :style="{ backgroundColor: button.bgColor, color: button.textColor }">

            </Button>

   
        </div>

        <!-- <hr style="grid-area: hr;opacity: .3;"> -->

       <div class="chats">


        <div class="chat" v-for="(chat, index) in chats" :key="index">
      <img style="grid-area: imagen;" class="cliente-img" :src="chat.image" alt="Imagen del cliente">
      <div style="grid-area: nombre;">{{ chat.nombre }}</div>
      <span style="grid-area: mensaje; color: #ffffff80;">{{ chat.mensaje }}</span>
      <span style="grid-area: fecha; text-align: end;">{{ chat.fecha }}</span>
      <div style="grid-area: check; text-align: end;display: flex; width: 100%;justify-content: end; gap: .5rem;"><div style="height: 1.5rem; width:1.5rem;border-radius: 50%;background-color: rgb(156, 39, 176);display: flex;align-items: center;justify-content: center;font-weight: bold;"><span style="color: white;">4</span></div> <i style="color: greenyellow;" class="fa-solid fa-check-double"></i></div>
      <!-- <hr style="grid-area: hr; opacity: .3;"> -->
    </div>


       </div>
    </div>
</template>





<script setup>
import { ref } from 'vue';
const  buttons = [
        { label: "Todos",         bgColor: "#4CAF50", textColor: "#fff" },
        { label: "Sin leer",      bgColor: "#2196F3", textColor: "#fff" },
        { label: "Favoritos",     bgColor: "#FFC107", textColor: "#fff" },
        { label: "Preocupantes",  bgColor: "#F44336", textColor: "#fff" },
        { label: "Top",           bgColor: "#9C27B0", textColor: "#fff" }
      ]



      const chats = ref(
  Array.from({ length: 20 }, (_, i) => ({
    image: `https://picsum.photos/50/50?random=${i + 1}`,
    nombre: `Usuario ${i + 1}`,
    mensaje: `Mensaje de ejemplo ${i + 1} ...`,
    fecha: new Date().toLocaleDateString()
  }))
);
</script>
<style scoped>
.sidebar-container{
    width:100%;
    background-color:#ffffff11;
    display:flex;
    flex-direction: column;
    /* padding: 1rem; */
    height: calc(100%  - 2rem);
    border-radius: .5rem;
    /* max-height: 80vh; */
    max-height: calc(100vh - 5rem);
    gap:  1rem;
    grid-template-rows: 3rem 3rem min-content 1fr;
    /* border-right: 4px solid #222c33; */
    /* align-items: s;?; */

}


.restaurant h5{

    color: white;
    margin: 0;

    
}


.restaurant img{

color: white;
aspect-ratio: 1 / 1;
height:100%;
/* width: 48px; */
object-fit: contain

}

.restaurant{
    display: flex;
    gap: 1rem;
    height:3rem;
    align-items: center;
    padding: .5rem;
    outline:none !important;
    border: none !important;
}


*:focus{
    outline: none;
    border: none;
}

.chats{
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.034); */
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    margin-top: 1rem;
    overflow: auto;
    max-height: 100%;
    width: 100%;
    /* padding-right: 1rem; */
    /* padding: 1rem; */



}





.chat{
    display: grid;
    width: 100%;
    grid-template-areas: "imagen nombre fecha"
                        "imagen mensaje check"
                        "hr hr hr ";
    grid-template-columns: 1fr 5fr 2fr;
    grid-template-rows: 1fr 1fr;
    /* padding: 1rem; */
    /* background-color: rgba(255, 255, 255, 0.082); */
    color: white;
    /* border-radius: .3rem; */
    gap: .3rem;
    cursor: pointer;
    padding: .6rem 1rem;
}


.chat:hover{
    background-color: rgba(255, 255, 255, 0.13);
}


::-webkit-scrollbar {
        width: 12px; /* Ancho de la barra */
        /* box-shadow: 0 0 .3rem rgb(255, 0, 0); */
        }

        ::-webkit-scrollbar-track {
        background: #ff7b0023; /* Fondo de la pista */
        }

        ::-webkit-scrollbar-thumb {
        background:var(--primary-color); /* Color del pulgar */
        border-radius: 6px;
        
         /* Bordes redondeados */
        }

        ::-webkit-scrollbar-thumb:hover {
        background: #ff0000;
         /* Color al pasar el cursor */
        }

        

html {
  scrollbar-width: thin; /* Grosor de la barra: auto, thin, none */
  scrollbar-color: #888 #f1f1f1; /* Color del pulgar y de la pista */
}


.cliente-img{
    width: 3rem;
    background-color: white;
    border-radius: 50%;
    height: 3rem;
}

h4{
    color: white;
    padding: 0;
    margin: 0;
}

.header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: min-content;
    min-width: 25rem;
    /* margin: 1rem 0; */
    padding: 1rem;
}

.statuses{
    display: flex;
    width: 100%;
    align-items: center;
    height: min-content;
    flex-wrap: wrap;
    gap: 1rem;
    min-width: 25rem;
    padding:  -0rem 1rem;
}

.status{
    background-color: rgba(255, 255, 255, 0.144);
    color: white;
}

.busqueda{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: min-content;
    /* min-width: 25rem; */
    padding:0 1rem;
}
.options{
    padding: 0;
    margin: 0;
}

.search{
    width: 100%;
    height: min-content;
    background-color: rgba(255, 255, 255, 0.219);
    border: none;
    color: white;
}

hr{
    height: 0;
}









</style>