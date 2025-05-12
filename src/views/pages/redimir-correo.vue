<template>




    


    

    <div class="wrapper"
      style="background: url(https://backend.salchimonster.com/read-photo-product/6xjNbDfY);background-size: cover;backdrop-filter: blur(3rem);display: flex;flex-direction: column;">


      <div style="display: flex;gap: 1rem;width: 100%;max-width: 40rem;" class="my-4">
        <InputText v-model="code" style="width: 100%;"> </InputText>
        <Button @click="searh" label="Validar codigo" severity="help" style="background-color: var(--primary-color);min-width: max-content;"> </Button>
      </div>


      

      
      <div v-if="user.user_name" class="user-form" >
        <!-- Nombre -->
        <div class="form-row">
          <h5>Nombre</h5>
          <InputText readOnly v-model.trim="user.user_name" placeholder="Nombre completo" required />
        </div>
  
        <!-- Teléfono -->
        <div class="form-row">
          <h5>Teléfono</h5>
          <InputText readOnly v-model.trim="user.user_phone" placeholder="Número de teléfono" required />
        </div>
  
        <!-- Dirección -->
        <div class="form-row">
          <h5>Dirección</h5>
          <InputText readOnly v-model.trim="user.user_address" placeholder="Dirección" required />
        </div>
  
        <!-- Email -->
        <div class="form-row">
          <h5>Email</h5>
          <InputText readOnly v-model.trim="user.email" placeholder="Correo electrónico" required />
        </div>
  
        <!-- Botón Guardar -->
        <div style="display: flex;justify-content: end;" v-if="user.user_name && !user.redimido && !response && user.user_name != 'Codigo no valido'">
          <Button type="submit" @click="redeem"  label="Redimir" severity="help" class="p-button-primary" />
        </div>


        <Tag style="height: 3rem;" v-if="response || user.redimido" :severity=" response || user.redimido?  'success' : 'danger'">
                {{ 'Redimido' }}
        </Tag>

        <div style="display: flex;justify-content: end;" v-if="response && user.user_name != 'Codigo no valido'">
          <Button  type="submit" @click="redimir_otro" label="Redimir otro" severity="help" class="p-button-primary" />
        </div>
  
    </div>
  
  

  

  
  
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { fetchService } from '@/service/utils/fetchService'
  import { URI } from '@/service/conection'
  
  
  const show = ref(true)
  const response = ref(false)
  
  const code = ref('')
  
  const user = ref({
    user_name: '',
    user_phone: '',
    user_address: '',
    email: ''
  })


  const redimir_otro = () => {

    user.value = {
    user_name: '',
    user_phone: '',
    user_address: '',
    email: ''
  }

  InputText.value = null

  }
  
  const submitForm = async () => {
    // code.value = await fetchService.post(`${URI}/insert-user-to-email/`, user.value)
    show.value = false
  }

  const redeem = async () => {
    response.value = await fetchService.post(`${URI}/redeem-code-email/${code.value}`)
   
  }



  const searh = async () => {
    user.value = await fetchService.get(`${URI}/get-user-by-code/${code.value}`, user.value)
  
  }


  </script>
  
  <style scoped>
  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: fixed; */
    background-position: cover;
    top: 0;
    z-index: 100;
  }
  
  .user-form {
    width: 40rem;
    /* Escritorio */
    max-width: 95vw;
    /* Impide desbordes en móviles */
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1rem #00000030;
    border-radius: .5rem;
    gap: 1rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* Etiqueta | Campo */
    gap: 0.5rem;
    align-items: center;
  }
  
  /* ────── Móviles < 600 px ────── */
  @media (max-width: 600px) {
    .form-row {
      grid-template-columns: 1fr;
      /* Apila etiqueta y campo */
    }
  }
  </style>
  