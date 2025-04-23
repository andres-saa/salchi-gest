<template>
  <div class="containerm" lang="es" translate="yes">
      <div :id="section.categoria_id" class=" container-button" v-for="(section, index) in cart?.menu.filter(p => p.products  && p.visible)"
          :key="section.categoria_id">



          <div class="category-header">
              <span class="category-name" style="margin: 0 1rem;">
                  <b>{{ section.categoria_descripcion }}</b>
              </span>
              <!-- <img @click="open(image.producto)" v-for="(image, index) in cart?.menu?.data
                  .filter(p => p.categoria_id === section.categoria_id  &&  (p?.productogeneral_precio > 0 || p?.lista_presentacion?.[0].producto_precio > 0))
                  .map(p => { return { imagen: p.productogeneral_urlimagen, producto: p } })
                  .slice(0, 4)" :key="index" class="category-img" :src="`${URI}/get-image?image_url=${image.imagen}`"
                  alt="Imagen de categoría"> -->

          </div>



          <div class="section">

              <div v-for="(product, index) in section?.products"
                  :key="product.id" class="" style="width: 100%;">

                  <div class="card-container">
                      <MenuCard style="height: 100%;" :id="`tarjeta-${index}`" :index="index + 1" :product="product">
                      </MenuCard>
                  </div>

              </div>


          </div>

      </div>
  </div>

</template>




<script setup>
import { usecartStore } from './store/shoping_cart';
import MenuCard from './cards/MenuCard.vue';
import { useReportesStore } from './store/ventas';
import { useSitesStore } from './store/site';
import { URI } from './service/conection';
const sitestore = useSitesStore()
import { onMounted, onUnmounted } from 'vue';
const store = useReportesStore()
const cart = usecartStore()
import { loginStore } from '../../../store/user';

const userStore = loginStore()

onMounted(() => {
    userStore.bar_color = 'var(--primary-color)',
    userStore.colorized = false
})

onUnmounted(() => {
    userStore.bar_color = 'rgba(0, 1, 22, 1)'
    userStore.colorized = true
})


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



const open = (product) => {
  cart.setCurrentProduct(product);
  cart.setVisible('currentProduct', true);


};

const smoothScrollTo = (categoryId) => {
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


onMounted(() => {
  if (cart.currentSection) {
      smoothScrollTo(cart.currentSection)
  }
})

</script>



<style scoped>
.category-name {
  font-size: 2rem;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  text-align: center;

}


.container-button {
  /* padding-top: 2rem;
  padding-bottom: 2rem; */
}

.container {
  max-width: 1600px;
  margin: auto;
  /* margin-top: 3rem; */
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;

  margin: 2rem auto;
  justify-content: center;
  /* width: max-content; */
}

.selected{
  background-color: rgb(255, 255, 255);
  animation:colorizes 1s infinite linear ;
}

@keyframes colorizes {

  0%{
    background-color: yellow;
  }
  50%{
    background-color: greenyellow;
  }
  
}


.category-img {

  height: 4rem;
  width: 4rem;
  aspect-ratio: 1 /1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  transition: all ease .3s;
  cursor: pointer;
  /* padding: .3rem; */
}

.category-img:hover {
  transform: translateY(-.5rem);
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.2);


}

.section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}



@media (max-width: 1220px) {
  .section {
      grid-template-columns: repeat(2, 1fr);
  }
}

/*
 Cuando la ventana sea menor a 992px,
 pasas a 2 columnas.
*/
/* @media (max-width: 992px) {
  .section {
      grid-template-columns: repeat(2, 1fr);
  }
} */

/*
 Cuando la ventana sea menor a 768px,
 queda en 1 columna (formato de “tarjeta” vertical).
*/
@media (max-width: 870px) {
  .section {
      grid-template-columns: repeat(1, 1fr);
  }

  .category-img {

      height: 3rem;
      width: 3rem;

  }

  .category-name {
      font-size: 1.5rem;
      padding: 0;
      margin: 0;
      width: 100%;
      text-transform: uppercase;
      text-align: center;

  }

}


.card-container {
  padding: 1rem;
  width: 100%;
  height: 100%;
}
</style>
