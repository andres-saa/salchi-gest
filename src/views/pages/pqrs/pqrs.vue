<template>
    <div class="pqrs-layout" style="margin-top: 3rem;">

      <!-- Contenido principal: ocupa mejor la pantalla -->
      <main class="content">
        <Transition name="fade-slide" mode="out-in">
          <router-view :key="$route.fullPath" />
        </Transition>
      </main>
    </div>
  </template>
  
  <script setup>
  // Sin barra ni fetch de canales: interfaz enfocada en el contenido de la ruta
  </script>
  
  <style scoped>
  .pqrs-layout {

    --radius: 1rem;
    --surface: #fff;
    --border: color-mix(in oklab, #000 10%, transparent);
    --text-weak: #6b7280;
    min-height: 100dvh;
    background:
      radial-gradient(1200px 500px at 10% -10%, rgba(0, 4, 255, 0.1), transparent 60%),
      radial-gradient(1200px 500px at 90% -10%, rgba(0, 255, 170, 0.1), transparent 60%),
      linear-gradient(180deg, #f8fafc, #f9fafb);
    padding: clamp(8px, 1vw, 16px);
    display: grid;
    grid-template-rows: auto 1fr;
  }
  
  /* Encabezado reducido para aprovechar espacio */
  .topbar {
    max-width: var(--max-w);
    margin: 0 auto clamp(8px, 1.5vh, 14px);
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 5rem;
  }
  
  .title {
    margin: 0;
    font-size: clamp(1.4rem, 2.6vw, 2rem);
    line-height: 1.1;
  }
  
  .blurb {
    margin: .25rem 0 0 0;
    color: var(--text-weak);
    font-size: clamp(.9rem, 1.3vw, 1rem);
  }
  
  /* Tarjeta de contenido amplia */
  .content {
    max-width: var(--max-w);
    margin: 0 auto;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: clamp(12px, 1.6vw, 20px);
    min-height: 70dvh;
  }
  
  /* Transición sutil del router-view */
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all .18s ease;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(6px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
  }
  
  /* Responsive fino */
  @media (max-width: 640px) {
    .topbar { align-items: start; }
    .content { padding: 12px; }
  }
  </style>
  