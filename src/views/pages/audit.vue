<template>

    <div class="" style="border-radius: 1rem; margin-top: 3rem;">
        <p class="p-3 text-2xl text-center" style="font-weight: bold;"> <i class="fa-solid fa-folder-open"></i>
            Auditorias</p>

        <!-- <p class="text-center text-xl p-4" style="color:red;font-weight: bold;">
            Este apartado se encuentra en desarrollo. favor realizar su auditoria como lo hace de manera habitual
            cualquier duda contactar con el area de desarrollo y tecnologia lunes a viernes de 4:30 am a 6:00 pm , <br> sabados de 5:00 am a 12:00pm
            +57 322 689 2988, feliz jornada y  muchas gracias.
        </p> -->


        <div class=" " style="display: flex;gap: 1rem;overflow-x: auto; justify-content: center; align-items: center;">

            <div class="">
                <RouterLink to="/auditorias/lista">
                    <Button class="text-xl"  text label="Listado" :style="ruta.path.includes('lista')? 'color:black;' : 'color:gray;'"
                        style="display: flex;box-shadow: none;  justify-content: center;align-items: center; "
                      >
                    
                       
                    </Button>
                </RouterLink>
            </div>

            <span class="text-xl">
                |
            </span>

            <div class="">
                <RouterLink to="/auditorias/nueva">
                    <Button  class="text-xl" text label="Nueva" :style="ruta.path.includes('nueva')? 'color:black;' : 'color:gray;'" :outlined="!ruta.path.includes('nueva')"
                        style="display: flex;justify-content: center;align-items: center;box-shadow: none; " 
                       >
                       
                    </Button>

                </RouterLink>

            </div>

            <span class="text-xl">
                |
            </span>
          

            <div class="">
                <RouterLink to="/auditorias/checklist">
                    <Button :style="ruta.path.includes('checklist')? 'color:black;' : 'color:gray;'" class="text-xl"  text label="checkList" :outlined="!ruta.path.includes('check')"
                        style="display: flex;  justify-content: center;align-items: center;box-shadow: none; "
                       >
                 
                    </Button>

                </RouterLink>

            </div>








        </div>


        <div class="">
            <RouterView>

            </RouterView>

        </div>





    </div>


</template>


<script setup>


import { useRoute } from 'vue-router';

const ruta = useRoute()

</script>