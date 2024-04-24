<template>

    <div class="m-auto px-3" style="max-width: 900px;">
        <p class="p-3 text-2xl text-center" style="font-weight: bold;"> <i class="fa-solid fa-folder-open"></i>
            Auditorias</p>


        <div class="grid mt-2 ">

            <div class="col-12 md:col-4 lg:col-4 xl:col-3 py-0 my-2">
                <RouterLink to="/auditorias/lista">
                    <Button :outlined="!ruta.path.includes('lista')"
                        style="display: flex; justify-content: center;align-items: center; " severity="help"
                        size="small" class="col-12  text-xl p-1">
                        <i class="fa-solid fa-list mr-3 p-0 my-0"></i>
                        <p class="p-0 m-0">Listado</p>
                    </Button>
                </RouterLink>
            </div>




            <div class="col-12 md:col-4 lg:col-4 xl:col-3 py-0 my-2">
                <RouterLink to="/auditorias/nueva">
                    <Button :outlined="!ruta.path.includes('nueva')"
                        style="display: flex; justify-content: center;align-items: center; " severity="warning"
                        size="small" class="col-12  text-xl p-1">
                        <i class="fa-solid fa-plus mr-3 p-0 my-0"></i>
                        <p class="p-0 m-0">Nueva</p>
                    </Button>

                </RouterLink>

            </div>


            <div class="col-12 md:col-4 lg:col-4 xl:col-3 py-0 my-2">
                <RouterLink to="/auditorias/checklist">
                    <Button :outlined="!ruta.path.includes('check')"
                        style="display: flex; justify-content: center;align-items: center; " severity="info"
                        size="small" class="col-12  text-xl p-1">
                        <i class="fa-solid fa-plus mr-3 p-0 my-0"></i>
                        <p class="p-0 m-0">ChekList's</p>
                    </Button>

                </RouterLink>

            </div>








        </div>


        <div class="col-12 p-0 my-6">
            <RouterView>

            </RouterView>

        </div>





    </div>


</template>


<script setup>


import { useRoute } from 'vue-router';

const ruta = useRoute()

</script>