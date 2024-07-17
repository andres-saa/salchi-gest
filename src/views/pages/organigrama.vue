<template>

<div>

  <Loading tittle="GENERANDO ORGANIGRAMA" v-if="charging"></Loading>

<!--  -->

<!-- {{ verInfo }} -->
  <div   v-for="item in items.filter(item =>  item?.site?.site_name != 'prueba')" ref="scrollContainer mt-8" class="m-auto col mt-8" style="overflow-x: auto; background-color: rgb(255, 255, 255);border-top: 6px solid rgba(0, 0, 0, 0.331);">

    <p class="text-5xl mb-6" style="font-weight: bold; position: absolute;">{{ item?.site?.site_name }}</p>

      <div  class="py-8" style="">

      
              <OrganigramaItem style="" class="pt-8" :items="item.organigrama" ref="organigramaItem"></OrganigramaItem>


            <!-- {{ item }} -->
      
      
      </div>

  </div>
</div>

</template>

<script setup> 
import OrganigramaItem from './OrganigramaItem.vue';
import { getUsers,getUsersBySite } from '@/service/userServices'
import Loading from '../../components/Loading.vue';
import {

    getSites

} from '@/service/dropDownAux';

import { nextTick } from 'vue';
import {verInfo} from '@/service/valoresReactivosCompartidos.js'



import { onMounted, ref } from 'vue';

const users = ref()
const charging = ref(true)
const scrollContainer = ref(null);

onMounted(() => {
  // Espera a que el DOM esté actualizado

});





const items = ref([])




function buildOrgChart(users, jefeId = null) {
  const orgChart = [];
  for (const user of users) {

    // if (user.boss_id == null && user.id != 1036){
    //   continue
    // }

    if (user.boss_id === jefeId ) {
      const subordinates = buildOrgChart(users, user.id);
      if (subordinates.length > 0) {
        user.subordinates = subordinates;
      }
      orgChart.push(user);
    }
  }
  return orgChart;
}



onMounted(async () => {
  const sedes = await getSites();

  // console.log('sedes',sedes)

  for (const sede of sedes) {
    const users = await getUsersBySite(sede?.site_id);
    const organigrama = buildOrgChart(users);
    console.log("organigrama",organigrama)
    items.value.push({ site: sede, organigrama });
    charging.value = false

  }
});







































</script>