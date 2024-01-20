
<template>
    <div class="col-12 m-auto p-0" style="max-width:600px ;"> 
      
        
        <div>
            <div v-for="link in links">

                <div class="col-12 py-2">
                    <p class="mb-0" style="font-weight: bold;">{{ link.tittle }}</p>
                    <a :href="link.link">{{ link.link }}</a>

                </div>
            </div>
        </div>
    </div>
    </template> 


<script setup>

const links = [
    {
        tittle:'Modificar formulario de la evaluacion',
        link:'https://docs.google.com/forms/d/12a1d4DhGO7gmEfaw6svIyOGgWopL_k2InBv3sGtbNsg/edit'
    },

    {
        tittle:'Modificar formulario de la asistencia',
        link:'https://docs.google.com/forms/d/1mWA6AMCVLm_wwO228AXhuPe6PH7bcEl6CFxRMmemucw/edit'
    },
    {
        tittle:'Ver las respuestas de los formularios',
        link:'https://docs.google.com/spreadsheets/d/1h45HGDYP8d2t7OPZ-4xCU1eAu6JsxV4MnUOjOKi6sOU/edit?usp=sharing'
    }
]

</script>
    
    
    