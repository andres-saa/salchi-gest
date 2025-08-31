<template>
    <div ref="categoryBar"
      style="position: sticky;  box-shadow: 0 1rem .5rem #00000020;
   top: 3rem;padding: .2rem; z-index: 99    ;display: flex;align-items: center; background-color: white; overflow-x: auto;">
           
           <Button @click="siteStore.visibles.currentSite = true" severity="help"
                
                class="  ml-4 text-lg titulo"  style="font-weight: 400;min-height: 100%;border-radius: .4rem;  text-transform: uppercase;min-width: max-content;">
                <span class="text-lg" style="min-width: max-content;">Nuevo pedido</span>
        </Button>
      <div class="container" style="justify-content: start; align-items: center;">
        <div class="container" style="justify-content: start; align-items: center">
      <div
        v-for="(section, index) in cart?.menu?.filter(p => p.products  && p.visible)"
        :key="section.categoria_id"
        :id="'categoryButton-' + section.categoria_id"
        class="container-button"
      >
        <a @click.prevent="smoothScrollTo(section.categoria_id)">
          <Button
            class="bar-button"
            :class="{ selected: cart.currentSection === section.categoria_id }"
            :label="section.categoria_descripcion"
          >
            <img
              :src="`${URI}/get-image?image_url=${section.products?.[0]?.productogeneral_urlimagen}`"
              alt=""
            />
            <span
              ><b>{{ section.categoria_descripcion }}</b></span
            >
          </Button>
        </a>
      </div>
    </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, computed, watch } from 'vue';
  import { usecartStore } from './store/shoping_cart';
  import router from '../../../router';
  import { useSitesStore } from './store/site';
  import { URI } from './service/conection';

  const siteStore = useSitesStore()
//   import { Button } from 'primevue';
  
  // Store
  const cart = usecartStore();
  
  // Orden personalizado de las categorías (IDs)
  const codigos = [
    10,
    26,
    8,
    9,
    13,
    27,
    11,
    4,
    5,
    110, // SALCHIPAPA PARA 2 PERSONAS NJ
    112, // SALCHIPAPAS PERSONALES NJ
    113, // PARA COMPARTIR
    111, // BURGERMONSTER
    109, // BEBIDAS
    115,
    118, 
    119, 
    116,
    117
 ]
  
  // Filtra y ordena las categorías con base en 'codigos'
  const filteredAndSortedCategories = computed(() => {
    return cart?.menu?.listaCategorias
      ?.filter(c => siteStore.categories.includes(parseInt(c.categoria_id)))
      ?.sort((a, b) => {
        return codigos.indexOf(parseInt(a.categoria_id)) - codigos.indexOf(parseInt(b.categoria_id));
      });
  });
  
  /**
   * Desplaza suavemente el contenido principal hasta la sección
   * y actualiza cart.currentSection para que se marque como activa
   */
  const smoothScrollTo = (categoryId) => {
    
    router.push(`/call-center-vender/${categoryId}`)
    // ----- SCROLL VERTICAL (al contenido) -----
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 10 * 16;
      const elementY = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementY - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  
    // ----- MARCAR SECCIÓN ACTUAL -----
    cart.currentSection = categoryId;
  
    // ----- SCROLL HORIZONTAL (a la barra de categorías) -----
    setTimeout(() => {
      const buttonElement = document.getElementById(`categoryButton-${categoryId}`);
      if (buttonElement) {
        buttonElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',   // Centra horizontalmente
          block: 'nearest'       // No desplaza verticalmente innecesariamente
        });
      }
    }, 1000);
  };
  
  // IntersectionObserver para marcar la sección activa al hacer scroll
  // let observer = null;
  // onMounted(() => {
  //   observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           cart.currentSection = entry.target.id;
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       // Ajustar según la altura de tu barra sticky
  //       rootMargin: '-50px 0px -60% 0px',
  //       threshold: 0
  //     }
  //   );
  
  //   // Se observa cada contenedor de categoría (en tu DOM deben existir elementos con id = section.categoria_id)
  //   filteredAndSortedCategories.value.forEach(section => {
  //     const target = document.getElementById(section.categoria_id);
  //     if (target) {
  //       observer.observe(target);
  //     }
  //   });
  
  
  
  
  
  
  // });
  
  // Al desmontar, limpiamos el observer
  onBeforeUnmount(() => {
    // if (observer) observer.disconnect();
  });
  
  
  // watch(() => cart.currentSection, (f) => {
  //   setTimeout(() => {
  //     const buttonElement = document.getElementById(`categoryButton-${f}`);
  //     if (buttonElement) {
  //       buttonElement.scrollIntoView({
  //         behavior: 'smooth',
  //         inline: 'center',   // Centra horizontalmente
  //         block: 'nearest'       // No desplaza verticalmente innecesariamente
  //       });
  //     }
  //   }, 1000);
  // })
  
  /**
   * Watch que, cada vez que cambie la sección activa,
   * busca el botón correspondiente y hace scroll para centrarlo.
   */
  
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;
    animation: ;
  
  }
  
  .bar-button {
    border-radius: .5rem;
    background-color: #fff;
    color: #000;
    padding: .2rem 1rem .4rem .4rem;
    white-space: nowrap;
    box-shadow: 0 0 .5rem #00000050;
    /* para evitar quiebres de línea */
  }
  
  
  .bar-button:hover {
  
    background-color: #00000023;
    color: #000000;
  
    /* para evitar quiebres de línea */
  }
  
  
  .container-button {
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 3rem;
  }
  
  .selected {
    background-color: var(--primary-color);
    color: #fff;
  }
  
  
  @keyframes scrollHint {
    0% {
      transform: translateX(0) rotate(45deg);
      opacity: 0;
    }
  
    30% {
      opacity: 1;
    }
  
    70% {
      transform: translateX(20px) rotate(45deg);
      opacity: 1;
    }
  
    100% {
      transform: translateX(40px) rotate(45deg);
      opacity: 0;
    }
  }
  
  img {
    height: 2rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
  }
  </style>
  