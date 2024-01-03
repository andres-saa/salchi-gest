<template>
    <div style="display: flex;height: 100vh;">

      <form class="col-12 md:col-6 lg:col-4 xl:col-3 m-auto p-5 " @submit.prevent="login" style="border-radius: 1rem; box-shadow: 0 0 10px rgba(0, 0, 0, 0.389); display: flex;flex-direction: column; background-color: rgb(255, 255, 255);">
        <p class="text-2xl" style="font-weight: bold;">Iniciar sesion</p>
        <InputText class="my-3" v-model="credentials.username" type="text" placeholder="identificacion" />
        <InputText class="my-3" v-model="credentials.password" type="password" placeholder="Clave" />
        <Button class="my-3" type="submit">Iniciar</Button>
      </form>


    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { URI } from '../../../service/conection';
  import router from '@/router/index'
  export default {
    setup() {
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
          localStorage.setItem('token', data.access_token);
          router.push('/actualizar-datos')
          // Redireccionar a la página de inicio o donde sea necesario
        } catch (error) {
          console.error(error);
        }
      };
  
      return { credentials, login };
    }
  };
  </script>
  