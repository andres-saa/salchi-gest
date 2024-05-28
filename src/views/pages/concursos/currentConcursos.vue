<template>

    <Dialog class="p-2" style="max-width: 100vw" modal v-model:visible="fullParticipantView">


        <div class="py-2" style="display: flex;gap: 1rem;overflow-x: auto; width: 50rem;">

            <div v-for="(i, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 5, 6, 7]"
                style="display: flex;flex-direction: column;gap:1rem; justify-content: end; align-items: center;">


                <img style="width: 2rem; aspect-ratio: 1 / 1;border-radius: 50%; border: 3px solid yellow;"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s"
                    alt="">

                <div class="py-2" :style="`height:${(12 - index + 1) / 2}rem`"
                    style="width: 2rem;background-color: var(--primary-color); border-radius: 3rem 3rem 0 0;">

                </div>



            </div>

        </div>


    </Dialog>


    <Dialog class="p-2" header="Cargar Evidencia" style="width: 30rem" modal v-model:visible="showAddEvidenceDialog">
         <div>

            <p style="font-weight: bold;">{{ contestToParticipate.name }}</p>


            <span><span style="font-weight: bold;">Fecha:</span> {{ format(new Date(), 'dd-MMMM-yyyy', { locale: es })
                }} </span>


            <div v-if="contestToParticipate.evidence_type_id == 4">
                <span>Cuanto vendiste de adiciones hoy</span>
      

                <inputNumber style="width: 100%;"></inputNumber>
            </div>


            <div v-if="contestToParticipate.evidence_type_id == 2 || contestToParticipate.evidence_type_id == 3 ">
                <br>
  
                <span>Introduce el link de tu video</span>
                <br>
                <br>
                <inputText style="width: 100%;"></inputText>
            </div>


            <div v-if="contestToParticipate.evidence_type_id == 1">
               
                <br>
                <br>
                <span>Carga la foto de la evidencia</span>
            </div>




            


            <input style="display: none;" type="file">



        </div>
        <template #footer >
            <div style="display: flex; justify-content: space-between;gap: 1rem;">
                <Button severity="help" style="width: 100%;" label="Subir Archivo"></Button>
                <Button severity="help" style="width: 100%;" label="Guardar"></Button>

            </div>

            </template>
    </Dialog>




    <div style="position: fixed;left: -2rem; z-index: -1;filter: blur(3px);" class="col-12">
        <img style="width: 120%;left: 0rem;height: 100vh;"
            src="https://backend.salchimonster.com/read-product-image/600/site-4" alt="">
    </div>

    <div class="container mx-auto p-2" style="max-width:700px;z-index: 99; ">

        <p class="text-white text-4xl text-center" style="font-weight: bold;"> CONCURSOS</p>


        <!-- {{ contests }} -->

        <div class="container_contests" style="display: flex;flex-direction: column;gap: 2rem;">

            <div class="container_contest_item p-2" v-for="contest in contests"
                style="display: flex;flex-direction: column;gap: 1rem;background-color: #00000090; border: 3px solid var(--primary-color);border-radius: 0.5rem;">



                <div class="col-12 p-0" style="display: flex;flex-direction: column; ">

                    <div class="gridd" style="display: flex; gap: 1rem;">


                        <img class="p-0"
                            style="width: 30%;aspect-ratio: 3 / 3;border-radius: 0.3rem; object-fit: cover;"
                            src="https://www.mundodeportivo.com/urbantecno/hero/2022/08/Como-anadirle-subtitulos-a-un-video-de-TikTok.jpg?width=1200"
                            alt="">

                        <div>
                            <p class=" m-0 text-2xl" style="font-weight: bold;color: #fff;"> {{ contest.name }}</p>

                            <p class=" m-0" style="color: #fff;"> {{ contest.description }}</p>
                            <img src="" alt="">

                            <p class="text-white">{{ contest.start_date }} --> {{ contest.end_date }}</p>

                            <p class="text-2xl" style="color: var(--primary-color); font-weight: bold;"> {{
                                calcaDiferenceBetweenDates(contest.end_date) }}</p>

                            <div style="display: flex; gap: 1rem;">
                                <Button @click="participate(contest)" v-if="!contest.entry_exists" severity="help"
                                    style="background-color: var(--primary-color);">Participar</Button>
                                <Button @click="participate(contest)" v-else severity="help" style="background-color: var(--primary-color);">Subir
                                    evidencia</Button>
                                <Button v-if="contest.entry_exists" severity="help"
                                    style="border: 2px solid var(--primary-color);">Mi participacion</Button>
                            </div>

                        </div>

                    </div>


                    <div style="justify-content: center;overflow-x: auto; width: 100%; gap: 0rem; display: flex; flex-direction: column;"
                        class="px-0 overflow pb-1" c>


                        <div style="display: flex;justify-content: end; align-items: center;">

                            <!-- <span style="color: white;"> Ampliar </span> -->
                            <Button @click="fullParticipantView = true" label="Ampliar" size="small"
                                style="color: white;" severity="help" icon="fa-solid fa-expand"> </Button>
                        </div>




                        <div class="py-2" style="display: flex;gap: 1rem;overflow-x: auto;">

                            <div v-for="(i, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 5, 6, 7]"
                                style="display: flex;flex-direction: column;gap:1rem; justify-content: end; align-items: center;">


                                <img style="width: 2rem; aspect-ratio: 1 / 1;border-radius: 50%; border: 3px solid yellow;"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-buhde5C1FxyNtkRvkUTCe6gq73eLIv_JOycF3WMvg&s"
                                    alt="">

                                <div class="py-2" :style="`height:${(12 - index + 1) / 2}rem`"
                                    style="width: 2rem;background-color: var(--primary-color); border-radius: 3rem 3rem 0 0;">

                                </div>



                            </div>

                        </div>



                    </div>


                </div>



            </div>



        </div>
    </div>

</template>


<script setup>

import { contestService } from '@/service/contest/contestService.js'

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ref, onMounted, watch } from 'vue'

const showAddEvidenceDialog = ref(true)


const participate = (contest) => {
    showAddEvidenceDialog.value = true
    contestToParticipate.value = contest
}
const contestToParticipate = ref({})


const contests = ref([])
const fullParticipantView = ref(false)

const calcaDiferenceBetweenDates = (end) => {
    const answer = new Date(end).getDate() - new Date().getDate()
    let result = ''
    switch (answer) {
        case 1:
            result = 'Finaliza acaba Manana'
            break;

        case 2:
            result = 'Finaliza pasado Manana'
            break;

        default:

            result = `Finaliza en  ${answer} dias`
            break;
    }

    return result
}

onMounted(async () => {
    contests.value = await contestService.getAllContest()
})
</script>


<style scoped>
.container {
    margin-top: 6rem;
    margin-bottom: 6rem;
}



::-webkit-scrollbar {
    width: 2px;
    height: 0.8rem;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 1rem;
    margin: 3px;
    /* o cualquier otro valor para definir el ancho de la barra de desplazamiento */
}

/* El track (o la pista) de la barra de desplazamiento */
::-webkit-scrollbar-track {
    background: rgb(0 1 22);
    margin: 2px;
    padding: 2px;
    /* Color de fondo de la pista */
}

/* El handle (o el control deslizante) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
    border-radius: 1rem;
    margin: 3px;
    /* Color de fondo del deslizador */
}

@media (max-width:560px) {

    .gridd {
        flex-direction: column;
    }
}
</style>