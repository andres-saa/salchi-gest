<template>
    <div class="col-12 m-auto px-0"
        style="max-width: 900px;display: ;align-items: center;justify-content: center; flex-direction: column; ">
        
        
        

        <p class="text-4xl lg:text-6xl   col-12 text-center" style="font-weight: bold;width: auto; "> Accesos rápidos</p>

<div class="col-12 grid  p-2 mx-auto " style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) ;border-radius: 0.5rem;">






    <div class="lg:col-4 col-6  p-0 " v-for="menu in menus" >

        <div class="p-2 m-0">
            <RouterLink :to="menu.to">
                <Button class="text-xl "
                    style="display: flex;justify-content: center;width: 100%; align-items: center; color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold;height: 15vh ;min-height:120px; background-color: rgb(255, 211, 211);">

                    <span class="text-lg lg:text-xl p-3 col-12"
                        style="height: auto; position: absolute; z-index: 100;color: rgb(255, 255, 255); text-shadow: 0 0 5px black;">
                        {{ menu.nombre }}
                    </span>


                    <div style="width: 100%;height: 100%; object-fit: ; position: absolute;" class="imagen p-0">
                        <img class="imagen p-0" :src="menu.imagen" alt=""
                            style="height: 100%;width: 100%; object-fit: cover;">

                    </div>


                </Button>
            </RouterLink>

        </div>
    </div>



</div>


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <p class="text-4xl lg:text-6xl   col-12 text-center" style="font-weight: bold;width: auto; "> Novedades</p>




        <div class="col-12  mb-3" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);border-radius: 0.5rem;">
            <RouterLink to="mas-cerca-de-ti">
                <Button class=" p-0 "
                    style=" display: flex;justify-content: center;width: 100%; align-items: center; color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; background-color: rgb(255, 255, 255);">

                    <!-- <span class="text-3xl  p-3 col-12" style="height: auto; position: absolute; z-index: 100;color: rgb(255, 255, 255); text-shadow: 0 0 5px black;">
                                Encuesta clima organizacional 
                            </span> -->


                    <div style=" position: ;" class=" p-0 col-12">
                        <img class=" p-0" alt="" src="/images/estrategia.png"
                            style="height: 100%;width: 100%;border-radius: 0.5rem; object-fit: cover;">

                    </div>

                    <div class="pl-6 text-2xl" style="display: flex; align-items: center; width: 10rem; height: 3rem;right: 0; top: 0; background-color: red;color: white; position: absolute;z-index: 100;border-radius: 0 0   0 10rem;
                           ">
                        Nuevo
                    </div>


                    <div class="pl-3 text-2xl" style="display: flex; align-items: center;justify-content: center; width: 10rem; height: 2rem;right: 0; bottom: 0; background-color: rgb(255, 255, 255);outline: 10px solid rgb(255, 255, 255); color: white; position: absolute;z-index: 100;border-radius: 10rem 0 0   0;
                           ">
                        <img style="width: 100%; object-fit: contain;height: 100%;" class="p-0" src="/images/forms.png"
                            alt="">
                    </div>






                </Button>
            </RouterLink>
               
            </div>





        <a class="col-12 p-1" href="https://forms.gle/mr7CD1sWT6C2NRKi8">

            <div class="col-12 p-3 mb-3" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);border-radius: 0.5rem;">
                <Button class=" p-0 "
                    style=" display: flex;justify-content: center;width: 100%; align-items: center; color: rgba(0, 0, 0, 0.808);border: none; font-weight: bold; background-color: rgb(255, 255, 255);">

                    <!-- <span class="text-3xl  p-3 col-12" style="height: auto; position: absolute; z-index: 100;color: rgb(255, 255, 255); text-shadow: 0 0 5px black;">
                                Encuesta clima organizacional 
                            </span> -->


                    <div style=" position: ;" class=" p-0 col-12">
                        <img class=" p-0" alt="" src="/images/clima.jpg"
                            style="height: 100%;width: 100%;border-radius: 0.5rem; object-fit: cover;">

                    </div>

                    <div class="pl-6 text-2xl" style="display: flex; align-items: center; width: 10rem; height: 3rem;right: 0; top: 0; background-color: red;color: white; position: absolute;z-index: 100;border-radius: 0 0   0 10rem;
                           ">
                        Nuevo
                    </div>


                    <div class="pl-3 text-2xl" style="display: flex; align-items: center;justify-content: center; width: 10rem; height: 2rem;right: 0; bottom: 0; background-color: rgb(255, 255, 255);outline: 10px solid rgb(255, 255, 255); color: white; position: absolute;z-index: 100;border-radius: 10rem 0 0   0;
                           ">
                        <img style="width: 100%; object-fit: contain;height: 100%;" class="p-0" src="/images/forms.png"
                            alt="">
                    </div>






                </Button>
            </div>
        </a>

        <a class="col-12 p-2 " href="https://forms.gle/ke3scHagtJp8UQD5A">

<div class="col-12 p-3" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); border-radius: 0.5rem;">
    <Button class=" p-0 "
        style=" display: flex;justify-content: center;width: 100%; align-items: center; color: rgba(0, 0, 0, 0.2);border: none; font-weight: bold; background-color: rgb(255, 255, 255);">

        <!-- <span class="text-3xl  p-3 col-12" style="height: auto; position: absolute; z-index: 100;color: rgb(255, 255, 255); text-shadow: 0 0 5px black;">
                    Encuesta clima organizacional 
                </span> -->


        <div style=" position: ;" class=" p-0 col-12">
            <img class=" p-0" alt="" src="/images/desemp.jpg"
                style="height: 100%;width: 100%;border-radius: 0.5rem; object-fit: cover;">

        </div>

        <div class="pl-6 text-2xl" style="display: flex; align-items: center; width: 10rem; height: 3rem;right: 0; top: 0; background-color: red;color: white; position: absolute;z-index: 100;border-radius: 0 0   0 10rem;
               ">
            Nuevo
        </div>


        <div class="pl-3 text-2xl" style="display: flex; align-items: center;justify-content: center; width: 10rem; height: 2rem;right: 0; bottom: 0; background-color: rgb(255, 255, 255);outline: 10px solid rgb(255, 255, 255); color: white; position: absolute;z-index: 100;border-radius: 10rem 0 0   0;
               ">
            <img style="width: 100%; object-fit: contain;height: 100%;" class="p-0" src="/images/forms.png"
                alt="">
        </div>






    </Button>
</div>
</a>





    </div>
</template>





<script setup>


const menus = [
    {
        nombre: 'Descargar certificado laboral',
        to: '/certificado-laboral',
        imagen: "/images/certificado.webp"
    },
    {
        nombre: 'Actualizar mis datos',
        to: '/actualizar-datos',
        imagen: "/images/actualizar.webp"
    },
    {
        nombre: 'Solicitar permiso general',
        to: '/permiso',
        imagen: "/images/permiso.jpg"
    },
    {
        nombre: 'Solicitar permiso por licencia',
        to: '/permiso-licencia',
        imagen: "/images/licencia.avif"
    },
    {
        nombre: 'Solicitar vacaciones',
        to: '/permiso-vacaciones',
        imagen: "/images/vacaciones.jpg"
    },
    {
        nombre: 'Mi carnet digital',
        to: '/mi-carnet',
        imagen: "/images/vacaciones.jpg"
    },

]

</script>



<style scoped>
.imagen::before {

    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    object-fit: cover;


}

Button img {
    transition: all .3s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.208); */
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    object-fit: cover;

}

Button img:hover {
    /* transform: scale(1.03); */

}</style>