<template>
    

  

    <div class="col-12 m-auto p-0 grid" style="max-width:600px ;"> 

    <div class="col-6 md:col-4" v-for=" documento  in documentos">
    
        <Button style="transition: all ease .2s; background-color: transparent; border-radius: 1rem; border: none" class="p-2 m-0" @click="ver(documento.src)">
            <div style="width: 100%; background-color: white; ">
    <!-- <iframe src="https://drive.google.com/file/d/1SEEIG-xUP67ro3HtXMpkNdCGc3wjS_vt/view" width=100%  frameborder="0" marginheight="0" marginwidth="0" style="width: 100%;height: 85vh;">Cargando…</iframe> -->
         <img class="md:p-5 p-2" src="/images/doc.png" style="width: 100%;box-shadow: 0 0 10px rgba(0, 0, 0, 0.254); border-radius: 1rem; object-fit: contain;" alt="">
         
    </div>
    </Button>
 
    
    <div class="p-1 " style="height: auto;font-weight: bold;">
        <p>{{documento.tittle}}   </p>
    </div>
    </div>
    
</div>


<Dialog v-model:visible="visible" :style="{ width: '1024px',height:'100vh' }" header="Salchimonster" :modal="true"
        class="p-fluid m-2">

        <iframe width="100%" style="height: 100vh;" :src="currentDocument" frameborder="0"></iframe>

</Dialog>


</template>

<script setup>


import {ref} from  'vue'

const visible = ref(false)

const ver = (documento) => {
    visible.value = true
    currentDocument.value = documento
}
const currentDocument = ref("")
const documentos = ref([
    {
        src:"/documents/Elegant and Professional Company Business Proposal Presentation.pdf",
        tittle:'titulo'
    },
    {
        src:"/documents/Planeación Estrategica Completa.pdf",
        tittle:'titulo'
    },
    {
        src:"/documents/Elegant and Professional Company Business Proposal Presentation.pdf",
        tittle:'titulo'
    }
])
</script>


<style scoped>



Button:hover{
transform: scale(1.05);
background-color: red;
}



</style>

