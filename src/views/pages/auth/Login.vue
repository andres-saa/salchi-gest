<template>
  <div  style="display: flex;position: relative; background-size: cover;  height: 100vh; width: 100vw; overflow: hidden;" class="p-0 fondo" >

    <!-- <div style="background-image: url('/images/login-bg.jpg');transform: scale(2); filter: blur(5px); background-size: cover;background-position-y: -14rem; height: 100vh; width: 100vw; position: absolute;z-index: -1;">

    </div> -->
      <form class="col-12  m-auto"  @submit.prevent="login" 
            style="max-width: min-content;  display: flex; border-radius: 0.5rem; box-shadow: 0 0 10px rgba(0, 0, 0, 0.389); 
            display: flex; flex-direction: column; background-color: rgb(255, 255, 255); 
            align-items: center;">
          <img  src="/images/logo.png" alt="" style="width: 48px;" class="m-3">
          <p class="text-2xl" style="font-weight: bold;">Iniciar sesión</p>
       
            <InputText class="my-3  m-0" v-model="credentials.username" type="text" autocomplete="username"
                     placeholder="identificación" style="width: 100%;" />
         
          
                     <input
                      class="p-inputtext p-component p-password-input"
                      type="password"
                      v-model="credentials.password"
                      autocomplete="current-password"
                      aria-controls="pv_id_3_panel"
                      aria-expanded="false"
                      aria-haspopup="true"
                      placeholder="Clave"
                      value/>

                      
          <Button size="samll"  style="width: 100%;background-color: rgb(255, 98, 0); border: none;color:#fff" label="Iniciar sesion" class="my-3 " type="submit" ></Button>
      </form>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue';
  import { URI } from '../../../service/conection';
  import router from '@/router/index'
  import {loginStore} from '@/store/user.js'
  import axios from 'axios';
  const store = loginStore()
  import { useToast } from 'primevue/usetoast';


  
  const toast = useToast()
const validateToken = (token) => {

const store = loginStore()
return axios.get(`${URI}/validate-token`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(response => {
  // Aquí manejas la respuesta positiva
  if (response.data.access_token) {
    store.setUserData(response.data)
  }
  return response.data;
})
.catch(error => {
  // Manejo de errores si el token es inválido o expirado
  console.error("Error durante la validación del token:", error);
  throw error;
});
}


const startTokenValidation = () => {
    const store = loginStore();
    setInterval(async () => {
        const token = store.userData.access_token;
        if (!token) {
            router.push('/auth/login');
            return;
        }

        try {
            await validateToken(token);
        } catch (error) {
            console.error('La sesión ha expirado o el token es inválido:', error);
            store.userData = {  };
            router.push('/auth/login');
        }
    }, 30000); // 60000 ms = 1 minuto
};


      const credentials = ref({ username: '', password: '' });
  
      const login = async () => {
        const formData = new URLSearchParams();
        formData.append('username', credentials.value.username);
        formData.append('password', credentials.value.password);
  
        try {
            const response = await fetch(`${URI}/token-employer`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          store.setUserData(data)
          startTokenValidation();
          // localStorage.setItem('token', data.access_token);
          router.push('/')
          toast.add({ severity: 'success', summary: 'Bienvenido', detail: 'Hoy es un gran dia', life: 3000 });


          // Redireccionar a la página de inicio o donde sea necesario
        } catch (error) {
          toast.add({ severity: 'error', summary: 'Algo salio mal', detail: 'Revisate los datos monstruo', life: 3000 });

          console.error(error);
        }
      };
  

  </script>
  
  <style scoped>
  
  .fondo::before{
    content: '';
    height: 120vh;
    width: 120vw;
    top: -2rem;
    left: -2rem;
    position: absolute;
    z-index: -1;
    background-size: contain;
    filter: blur(7px);
  
    background-image: url('https://backend.salchimonster.com/read-product-image/600/site-4');
  }
  </style>