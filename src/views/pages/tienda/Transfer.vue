<template>
    <div class="container">
      <!-- NAV -->
      <nav class="nav-bar shadow-1">
        <!-- Sombras de overflow -->
        <div class="fade-left" v-show="canScrollLeft"></div>
        <div class="fade-right" v-show="canScrollRight"></div>
  
        <!-- Botones de desplazamiento -->
        <Button
          class="scroll-btn left"
          text
          :icon="icons.CHEVRON_LEFT"
          @click="scrollBy(-220)"
          v-show="canScrollLeft"
          aria-label="Desplazar navegación a la izquierda"
        />
        <Button
          class="scroll-btn right"
          text
          :icon="icons.CHEVRON_RIGHT"
          @click="scrollBy(220)"
          v-show="canScrollRight"
          aria-label="Desplazar navegación a la derecha"
        />
  
        <ul ref="scroller" class="nav-scroller" role="tablist" @scroll="updateScrollShadows">
          <li
            v-for="(button, index) in navItems"
            :key="index"
            class="nav-bar--item"
            role="presentation"
          >
            <router-link
              class="link-reset"
              :to="`/transfer/${button.path}/`"
              :aria-current="isActive(`/transfer/${button.path}/`) ? 'page' : null"
            >
              <Button
                :icon="button.icon"
                text
                severity="help"
                class="nav-var--item-button"
                :class="isActive(`/transfer/${button.path}/`) ? 'nav-var--item-button-selected' : ''"
                :label="button.label"
                :aria-pressed="isActive(`/transfer/${button.path}/`)"
              />
            </router-link>
          </li>
        </ul>
      </nav>
  
      <!-- Aviso -->
      <div class="notice shadow-1">
        <i class="pi pi-info-circle"></i>
        <p>
          Los pedidos de <b>Distrimonster</b> seguirán apareciendo hasta
          <b>15 días</b> en <em>pendiente de validación</em>. Para las tiendas,
          se debe validar el mismo día; luego no podrá hacerlo.
        </p>
      </div>
  
      <!-- Contenido -->
      <Transition name="fade-slide" mode="out-in">
        <router-view />
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { PrimeIcons as icons } from 'primevue/api'
  import { PathService } from '@/service/pathService.js'
  
  const isActive = PathService.isActiveRoute
  
  const navItems = [
    { label: 'Por Confirmar', icon: 'pi pi-history', path: 'transfer-sesion' },
    { label: 'Confirmadas', icon: 'pi pi-check', path: 'transfer-sesion-confirmed' },
    { label: 'Cliente no confirma', icon: 'pi pi-times', path: 'transfer-sesion-no-confirmed' }
  ]
  
  // Scroll helpers
  const scroller = ref(null)
  const canScrollLeft = ref(false)
  const canScrollRight = ref(false)
  
  function updateScrollShadows () {
    const el = scroller.value
    if (!el) return
    canScrollLeft.value = el.scrollLeft > 0
    canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
  }
  
  function scrollBy (px) {
    scroller.value?.scrollBy({ left: px, behavior: 'smooth' })
  }
  
  function handleResize () {
    updateScrollShadows()
  }
  
  onMounted(async () => {
    await nextTick()
    updateScrollShadows()
    window.addEventListener('resize', handleResize, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  
  </script>
  
  <style scoped>
  /* ---------- Estructura general ---------- */
  .container {
    margin-top: 3rem;
    position: relative;
  }
  
  /* ---------- NAV ---------- */
  .nav-bar {
    position: sticky;
    top: 3rem;
    z-index: 99;
    width: 100%;
    background: rgba(255,255,255,0.9);
    backdrop-filter: saturate(120%) blur(6px);
    border-bottom: 1px solid var(--surface-200);
  }
  
  ul {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 1rem;
    margin: 0;
    padding: .5rem .75rem;
  }
  
  @media (width < 600px) {
    ul {
      justify-content: start;
      padding: .5rem .5rem;
    }
  }
  
  li { list-style: none; }
  .nav-bar--item { padding-bottom: .3rem; }
  
  .link-reset { text-decoration: none; color: inherit; }
  
  /* Scroller sin barras visibles */
  .nav-scroller {
    scrollbar-width: none;      /* Firefox */
    -ms-overflow-style: none;   /* IE/Edge */
  }
  .nav-scroller::-webkit-scrollbar { display: none; }
  
  /* Botones de tabs */
  .nav-var--item-button {
    color: gray;
    border-radius: .4rem;
    padding: .55rem .8rem;
    min-width: max-content;
    position: relative;
    transition: color .15s ease, background .15s ease;
  }
  
  .nav-var--item-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  
  .nav-var--item-button-selected {
    color: black;
  }
  
  .nav-var--item-button-selected::after {
    content: '';
    position: absolute;
    left: .5rem;
    right: .5rem;
    bottom: -.35rem;
    height: .22rem;
    border-radius: 2rem;
    background: var(--primary-color);
    transform-origin: center;
  }
  
  /* Sombras y botones de desplazamiento */
  .fade-left,
  .fade-right {
    position: absolute;
    top: 0; bottom: 0;
    width: 2.5rem;
    pointer-events: none;
    z-index: 1;
  }
  .fade-left {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  .fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  .scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    opacity: .9;
  }
  .scroll-btn.left { left: .25rem; }
  .scroll-btn.right { right: .25rem; }
  
  /* ---------- Aviso ---------- */
  .notice {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: .6rem;
    margin: 1rem auto 1.25rem;
    padding: .75rem .9rem;
    max-width: 1000px;
    border: 1px solid var(--surface-200);
    border-radius: .6rem;
    background: #fff;
    color: var(--text-color);
  }
  .notice i { font-size: 1.1rem; color: var(--primary-color); }
  .notice p { margin: 0; line-height: 1.4; }
  
  /* ---------- Transición de vistas ---------- */
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all .18s ease;
  }
  .fade-slide-enter-from, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(4px);
  }
  </style>
  