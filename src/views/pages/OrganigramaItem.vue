<template >
  <ul class="list-unstyled  pt-0 5 m-0 mt-4  px-0" style="   position: ; display: flex; list-style: none;"  >





    <li class="px-0" v-for="item in items" :key="item.id" >


      
      <div class="py-4 mx-6 py-3 px-0">

        
        <i class=""></i>
       <div class=" tex-center p-0"  style="height: auto; position: relative;min-width: max-content;background-color: rgba(255, 255, 255, 0);border: 2px; display: flex;justify-content: center;"> 

        <div v-if="item.subordinates?.length > 1" style="width: 100%;top:40px; height: 5px;border-radius: 10rem; background-color: rgb(0, 0, 0);  position: absolute; ; ">

</div>

        <div  :class="item.id == getUserId()?'aro-ext-imagen':''" class="p-1" style="border-radius: 50%;display: flex;align-items: center;justify-content: center; position: relative;z-index: 111; ">
          <img :class="item.id == getUserId()?'aro-int-imagen':''" style="width: 1.5cm;;background-color: white; height: 1.5cm; ; border-radius: 50%;object-fit: cover; border: 5px solid rgb(0, 0, 0);" :src="`${URI}/read-product-image/96/employer-${item.dni}`"
                                    @error="onImageError(item.gender, $event)" class=" img-profile "
                                     />
        </div>
      
                        

        <div style="position: absolute; height: 91px;bottom:90%;z-index:; background-color: rgb(0, 0, 0); width: 5px;"> 
        </div>

        <div   class="p-0  text-center " style="width: ; overflow: hidden; position: absolute; height: auto;bottom:115%;z-index:;max-width: 400px; background-color: rgb(255, 255, 255);"> 
          
          <p cla class="text-center p-0  text-sm p-0 m-0" style="min-width: max-content;font-weight: bold;color: black; width: 100%;">  
             {{!item.subordinates? item.position.slice(0, 15) : item.position.slice(0, 30) }} {{!item.subordinates && item.position.length > 10 ? '...' : item.subordinates && item.position.length > 20 ? '...' : '' }}
             
             
 </p>


 <p cla class="text-center p-0  text-sm p-0" style="min-width: max-content; width: 100%;text-transform:uppercase;">  
             {{!item.subordinates? item.name.slice(0, 15) : item.name.slice(0, 30) }} {{!item.subordinates && item.name.length > 10 ? '...' : item.subordinates && item.name.length > 20 ? '...' : '' }}
             
 </p>
        </div>


      
       </div> 
      
      </div>


 
      <OrganigramaItem  v-if="item.subordinates && item.subordinates.length" :items="item.subordinates" />


      
    
    </li>
  
  </ul>
  
</template>

<script setup>
import { defineProps } from 'vue';
import OrganigramaItem from './OrganigramaItem.vue';
import { URI } from '@/service/conection';
import { getUserId } from '../../service/valoresReactivosCompartidos';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});




const onImageError = (gender, event) => {


const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
}


if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
} else
    event.target.src = genders[gender.trim().toLowerCase()]
}
</script>

<style scoped>
*{
  text-transform: uppercase;
}
/* Aquí puedes añadir estilos personalizados si lo necesitas */



.aro-ext-imagen{


  border: 2px solid red;
  background-color: rgb(255, 0, 0);

}


.aro-int-imagen{
  box-shadow: 0 0 10px rgb(255, 255, 255);
  transform: scale(1.5);
  animation:heartbeat 0.5s ease infinite ;
}




@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
