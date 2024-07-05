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


    <Dialog class="p-2" style="max-width: min-content" modal v-model:visible="showDialogs.showParticipantDetail">


    <div class="py-2" style="overflow-x: auto;display: flex; flex-direction: column; width: 20rem">
        <img style="width: 100%;border-radius: .5rem;aspect-ratio: 1 / 1;object-fit: cover;" :src="`${URI}/read-product-image/600/employer-${currentUser.dni}`" alt="">
        <p><b>Nombre:</b> {{ currentUser.name }}</p>
        <p><b>Participaciones:</b> {{ `${currentContest.evidence_type_id == 4 ? formatoPesosColombianos(currentUser.total_entries) : currentUser.total_entries}` }} </p>
        <Button @click="open_evidence(currentContest.id, currentUser.employer_id)" severity="help" size="small" label="VER PARTICIPACIONES"></Button>

      
    </div>


</Dialog>


    <Dialog :close="imagePreview = null" class="p-2" header="Cargar Evidencia" style="width: 30rem" modal v-model:visible="showAddEvidenceDialog">
        <div>

            <p style="font-weight: bold;">{{ contestToParticipate.name }}</p>


            <span><span style="font-weight: bold;">Fecha:</span> {{ format(new Date(), 'dd-MMMM-yyyy', { locale: es })
                }} </span>



            <p class="p-0 m-0 mt-3"><b>Instrucciones:</b></p>
            <p class="px-0 mx-0">{{contestToParticipate.instructions}}</p>


             <img  class="" v-if="contestToParticipate.evidence_type_id ==1 && imagePreview" style="width: 100%;" :src="imagePreview" alt="">
            

            <div v-if="contestToParticipate.evidence_type_id == 4">
                <inputNumber  v-model="entry_to_send" style="width: 100%;"></inputNumber>
            </div>


            <!-- <div v-if="contestToParticipate.contest_winner_type_id == 2 "> 
                <inputNumber min="0" v-model="entry_to_send" style="width: 100%;"></inputNumber>
            </div> -->

            <div v-if="contestToParticipate.contest_winner_type_id == 1 && contestToParticipate.evidence_type_id == 2"> 
                <inputText  v-model="entry_to_send" style="width: 100%;"></inputText>
            </div>


            <div v-if=" contestToParticipate.evidence_type_id == 3">
                <inputText v-model="entry_to_send" style="width: 100%;"></inputText>
            </div>


         

            <input @change="previewFile" ref="inputFile" style="display: none;" type="file" accept="image/*">
            </div>
        
        <template #footer >
            <div class="py-3" style="display: flex;width: 100%; justify-content: space-between;gap: 1rem;">
                <Button class="m-0" :severity="!imagePreview?  'help' : 'warning'" v-if="contestToParticipate.evidence_type_id == 1" @click="inputFile.click()"
                    style="width: 100%;" :label="!imagePreview?  'Subir Archivo' : 'Cambiar archivo'"></Button>

                <Button severity="help" class="m-0" style="width: 100%;" label="Guardar"
                    @click="sendEvidence(entry_to_send, contestToParticipate.id, contestToParticipate.evidence_type_id)">
                </Button>

            </div>

        </template>
    </Dialog>


    <Dialog class="p-2" header="Listado de evidencias" style="width: 30rem;;background-color:#fff;" modal
        v-model:visible="showDialogs.showMyEvidenceDialog">
        <div style="height: 60vh;">

            <b>MIS EVIDENCIAS </b>


            <ol class="p-3" style="display: flex; flex-direction: column;gap: .5rem; ">
                <li style="" class="" v-for="evidence in currentEvidenceList">


                    <p class="p-0 m-0"><b>{{formatDateTime( evidence.timestamp) }} </b></p>

                    <a v-if="evidence.evidence_type_id == 3 && (evidence.evidence_entry.startsWith('http://') || evidence.evidence_entry.startsWith('https://'))" 
                        style="color: var(--primary-color);" 
                        :href="evidence.evidence_entry"> 
                        {{ evidence.evidence_entry }} 
                        </a>

                        <p v-else-if="evidence.evidence_type_id == 3 || evidence.evidence_type_id == 2" style="color: var(--primary-color);">
                        {{ evidence.evidence_entry }} 
                        </p>

                        <span style="color: var(--primary-color);" v-if="evidence.evidence_type_id == 4" >
                            {{ formatoPesosColombianos(evidence.evidence_entry) }}
                        </span>

                        <!-- {{ evidence }} -->
                   


                    <img v-if="evidence.evidence_type_id == 1" style="width: 100%;border-radius:.5rem;r"
                        :src="`${URI}${evidence.evidence_entry}`" alt="">



                </li>
            </ol>

        </div>
    </Dialog>



    <div style="position: fixed;left: -2rem; z-index: -1;filter: blur(3px);" class="col-12">
        <img style="width: 120%;left: 0rem;height: 100vh;"
            src="https://backend.salchimonster.com/read-product-image/600/site-4" alt="">
    </div>

    <div class="container mx-auto p-2" style="max-width:700px;z-index: 99; ">

        <p class="text-white text-4xl text-center" style="font-weight: bold;">  PROXIMOS CONCURSOS</p>


        <!-- {{ contests }} -->

        <div class="container_contests" style="display: flex;flex-direction: column;gap: 2rem;">

            <div class="container_contest_item p-2" v-for="contest in contests.filter(c => !c.started)"
                style="display: flex;flex-direction: column;gap: 1rem;background-color: #00000090; border: 3px solid var(--primary-color);border-radius: 0.5rem;">



                <div class="col-12 p-0" style="display: flex;flex-direction: column; ">

                    <div class="gridd" style="display: flex; gap: 1rem;">


                        <img class="p-0"
                            style="width: 30%;aspect-ratio: 3 / 3; object-fit: cover;"
                            src="https://www.mundodeportivo.com/urbantecno/hero/2022/08/Como-anadirle-subtitulos-a-un-video-de-TikTok.jpg?width=1200"
                            alt="">

                        <div>
                            <p class=" m-0 text-2xl" style="font-weight: bold;color: #fff;"> {{ contest.name }}</p>

                            <p class=" m-0" style="color: #fff;"> {{ contest.description }}</p>
                            <img src="" alt="">

                            <p class="text-white"> <span style="color: var(--primary-color);"> 
                                <b>Desde</b>:</span> {{formatDateTime(contest.start_date)  }} <br> <span style="color: var(--primary-color);"> 
                                    <b>Hasta</b>:</span> {{ formatDateTime(contest.end_date) }}</p>


                            <p class="text-white text-xl py-0 my-0"><b>{{ contest.rbq.length }}  Personas participando</b></p>
                            <p class="text-2xl" style="color: var(--primary-color); font-weight: bold;"> {{
                                calcaDiferenceBetweenDates(contest.end_date) }}</p>

                            <div style="display: flex; gap: 1rem;">
                                <Button @click="participate(contest)" v-if="!contest.entry_exists" severity="help"
                                    style="background-color: var(--primary-color);">Participar</Button>
                                <Button @click="participate(contest)" v-else severity="help"
                                    style="background-color: var(--primary-color);">Subir
                                    evidencia</Button>
                                <Button @click="open_evidence(contest.id, userStore.rawUserData.id)" v-if="contest.entry_exists" severity="help"
                                    style="border: 2px solid var(--primary-color);">Mis evidencias</Button>
                            </div>

                        </div>

                    </div>


                    <div style="justify-content: center;overflow-x: auto; width: 100%; gap: 0rem; display: flex; flex-direction: column;"
                        class="px-0 overflow pb-1" c>


                        <div style="display: flex;justify-content: end; align-items: center;">

                           
                        </div>




                        <div class="py-2" style="display: flex;gap: 1rem;overflow-x: auto;width: 100%;">

                            <div  v-for="(i, index) in contest.rbq.filter(r => r.total_entries)"
                                style="display: flex;flex-direction: column;gap:1rem; justify-content: end; align-items: center;width: 100%;position: relative;">


                                
                                <p v-if="contest.contest_winner_type_id == 2" class="text-white pt-4 my-0">{{formatoPesosColombianos( i.total_entries) }}</p>

                                <p v-else class="text-white pt-4 my-0">{{ i.total_entries }}</p>

                                <img class="min-user-img" @click="showParticipantDetail(i, contest)" style="width: 100%;max-width: 5rem; background-color:#fff; aspect-ratio: 1 / 1;border-radius: 50%; object-fit: cover;"
                                    :src="`${URI}/read-product-image/96/employer-${i.dni}`"
                                    alt="">

                                <div class="py-2" :style="`height:${(i.total_entries)/contest.max_entries*10}rem; width:${100/contest.rbq.length}%`"
                                    style="min-width: 3rem;max-width: 5rem; background-color: var(--primary-color);overflow: hidden; border-radius: 3rem 3rem 0 0; position: relative;">

                                    <img v-if="i.total_entries == contest.max_entries " style="width: 100%; position: absolute;z-index: 10; bottom: 0;;" src="/images/gif/fire.gif" alt="">

                                    <div  style=" display: flex; flex-direction: column; gap: .5rem;justify-content: end; height: 100%;">

                          
                                       
                                    </div>

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
import { loginStore } from '@/store/user.js'
import { URI } from '../../../service/conection';
import {formatDateTime} from '@/service/formating/formatDate.js'
import { read } from 'xlsx';
import { formatoPesosColombianos } from '../callCenter/service/formatoPesos';

const showDialogs = ref({
    showMyEvidenceDialog: false,
    showParticipantDetail:false
})

const currentUser = ref({})
const currentContest = ref({})
const contests = ref([])
const fullParticipantView = ref(false)

const currentEvidenceList = ref([])

const imagePreview = ref(null);

const previewFile = () => {
    const file = inputFile.value.files[0];
    if (file) {
        imagePreview.value = URL.createObjectURL(file);
    }
}


const showParticipantDetail = (user,contest) => {
    currentUser.value = user
    currentContest.value = contest
    showDialogs.value.showParticipantDetail = true

    
    
}


const entry_to_send = ref("")

const userStore = loginStore()

const showAddEvidenceDialog = ref(false)

const inputFile = ref(null)
const participate = (contest) => {
    inputFile.value = null
    showAddEvidenceDialog.value = true
    contestToParticipate.value = contest
}
const contestToParticipate = ref({})



const sendEvidence = async (evidence_entry, contest_id, evidence_type_id) => {


    if(evidence_entry === null){
        alert('debe cargar una evidaencia')
        return
    }

    if(evidence_type_id == 3 && !evidence_entry.includes('.')){
        alert('debe ser una URL valida')
        return
    }


    const evidence = {
        "evidence_type_id": evidence_type_id,
        "evidence_entry": `${evidence_entry}`|| "0",
        "contest_id": contest_id
    };
    const Contest_entry = {
        "participant_id": userStore.rawUserData.id,
        "contest_id": contest_id
    };



    const response_evidence_id = await contestService.sendEvidence({ evidence, Contest_entry });



    if (evidence_type_id === 1) {
        if (!inputFile.value.files.length) {
            alert("Por favor, selecciona una imagen.");
            return;
        }
        const imageFile = inputFile.value.files[0];
        await contestService.sendContestImage(userStore.rawUserData.id, contest_id, response_evidence_id, imageFile);
    }


    showAddEvidenceDialog.value = false;
    entry_to_send.value = "";
    contests.value = await contestService.getAllContest();
};



const open_evidence = async (contest_id, user) => {
    currentEvidenceList.value =[]
    showDialogs.value.showMyEvidenceDialog = true
    currentEvidenceList.value = await contestService.getParticipationByUserId(contest_id,user)
}

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


.min-user-img{
    transition: all ease .2s;
}

.min-user-img:hover{
    filter: brightness(1.3);
    outline: 2px solid var(--primary-color)
}
</style>