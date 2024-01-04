<template>
    <div class="col-12 m-auto "
        style="max-width: 600px;display: ;height: 70vh;align-items: center;justify-content: center; flex-direction: column; ">

        <p class="text-2xl lg:text-4xl   col-12 text-center" style="font-weight: bold;width: auto; "> Accesos rápidos</p>

        <div class="col-12 grid  p-3 m-auto  ">



            <div class="col-6 m-auto p-3 " p->
                <div>
                    <RouterLink to="/certificado-laboral">
                        <Button class="text-xl"
                            style="color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; min-height: 100px; background-color: rgb(255, 211, 211);">
                            Descargar certificado laboral</Button>
                    </RouterLink>

                </div>
            </div>



            <div class="col-6 m-auto p-3 " p->
                <div>
                    <RouterLink to="/actualizar-datos">
                        <Button class="text-xl"
                            style="color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; min-height: 100px; background-color: rgb(185, 255, 183);">
                            Actualizar mis datos</Button>
                    </RouterLink>

                </div>
            </div>



            <div class="col-6 m-auto p-3 " p->
                <div>
                    <RouterLink to="#">
                        <Button :disabled="true" class="text-xl"
                            style="color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; min-height: 100px; background-color: rgb(183, 193, 255);">
                            Solicitar permiso general</Button>
                    </RouterLink>

                </div>
            </div>



            <div class="col-6 m-auto p-3 " p->
                <div>
                    <RouterLink to="#">
                        <Button :disabled="true" class="text-xl"
                            style="color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; min-height: 100px; background-color: rgb(250, 255, 183);">
                            Solicitar vacaciones</Button>
                    </RouterLink>

                </div>
            </div>

            
            <div class="col-12 m-auto p-3 " p->


                <div>
                    <RouterLink to="#">
                        <Button :disabled="true" class="text-xl"
                            style="color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; min-height: 100px; background-color: rgb(255, 183, 254);">
                            Solicitar permiso por Licencia</Button>
                    </RouterLink>


                </div>

            </div>






        </div>





    </div>
</template>





<script setup>


</script>

<style scoped>
Button {
    transition: all .2s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.208);
    width: 100%;
    display: flex;
    justify-content: center;

}

Button:hover {
    transform: scale(1.03);

}</style>