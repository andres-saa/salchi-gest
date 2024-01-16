<template>
    <div ref="scrollContainer mt-8" class="m-auto col" style="overflow-x: auto; background-color: rgb(255, 255, 255);">
        <OrganigramaItem class="pt-8" :items="items" ref="organigramaItem"></OrganigramaItem>



    </div>
</template>

<script setup> 
import OrganigramaItem from './OrganigramaItem.vue';
import { getUsers,getUsersBySite } from '@/service/userServices'
import {

    getSites

} from '@/service/dropDownAux';

import { nextTick } from 'vue';




import { onMounted, ref } from 'vue';

const users = ref()
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

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


onMounted(async() => {


  getUsersBySite(3).then(data => {
    users.value = data
    const organigrama = buildOrgChart(data);
    items.value = organigrama

  })

  
})


</script>