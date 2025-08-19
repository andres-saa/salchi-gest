<template>
    <div class="home-actions" role="list">
      <div
        v-for="(btn, i) in buttons"
        :key="i"
        class="action-card"
        :style="{ '--accent': btn.bg }"
        :tabindex="btn.to ? 0 : -1"
        role="listitem"
        :aria-label="btn.label"
        @click="btn.to && router.push(btn.to)"
        @keydown.enter.prevent="btn.to && router.push(btn.to)"
        @keydown.space.prevent="btn.to && router.push(btn.to)"
      >
        <!-- Icono -->
        <div class="icon-badge" aria-hidden="true">
          <i :class="btn.icon" />
        </div>
  
        <!-- Texto -->
        <div class="card-text">
          <h3 class="title">{{ btn.label }}</h3>
          <p class="desc" v-if="btn.desc">{{ btn.desc }}</p>
        </div>
  
        <!-- CTA -->
        <div class="card-cta">
          <Button
            class="cta"
            :icon="btn.icon"
            :label="btn.to ? 'Abrir' : 'Pronto'"
            :disabled="!btn.to"
            @click.stop="btn.to && router.push(btn.to)"
            :aria-label="btn.label"
          />
        </div>
  
        <!-- Decoración -->
    
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import router from '../../../router'
  
  type Btn = {
    label: string
    bg: string
    icon: string
    to?: string
    desc?: string
  }
  
  const buttons: Btn[] = [
    {
      label: 'Chatear con clientes',
      bg: '#22C55E',
      icon: 'pi pi-whatsapp',
      to: '/chat/chats',
      desc: 'Gestiona conversaciones y responde más rápido.'
    },
    {
      label: 'Gestionar plantillas y difusiones',
      bg: '#EF4444',
      icon: 'pi pi-sync',
      to: '/chat/templates',
      desc: 'Crea plantillas, campañas y mensajes masivos.'
    },
    {
      label: 'Estadísticas',
      bg: '#F59E0B',
      icon: 'pi pi-chart-bar',
      // to: '/chat/stats',
      desc: 'Métricas y rendimiento de tus mensajes.'
    }
  ]
  </script>
  
  <style scoped>
  /* ====== Layout base (responsive) ====== */
  .home-actions {
    --gap: clamp(0.75rem, 2vw, 1.25rem);
    --min: clamp(220px, 32vw, 340px);
    --pad: clamp(0.5rem, 2vw, 1rem);
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
    gap: var(--gap);
    padding: var(--pad);
    margin: 0 auto;
    width: min(1200px, 100%);
    min-height: calc(100vh - 6rem);
    align-items: stretch;
    place-items: stretch;
    padding-bottom: calc(var(--pad) + env(safe-area-inset-bottom, 0px));
    touch-action: manipulation;
  }
  
  /* ====== Tarjeta “Glass” con acento ====== */
  .action-card {
    --accent: #6b7280; /* fallback */
    --accent-10: color-mix(in oklab, var(--accent) 10%, white);
    --accent-20: color-mix(in oklab, var(--accent) 20%, white);
    --accent-30: color-mix(in oklab, var(--accent) 30%, white);
  
    position: relative;
    display: grid;

    grid-template-rows: auto 1fr auto;
    gap: .75rem;
    padding: 1.1rem;
    border-radius: 1.1rem;
    background: linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.32)) border-box;
    border: 1px solid color-mix(in oklab, var(--accent) 25%, #e5e7eb);
    box-shadow: 0 10px 28px rgba(0, 0, 0, .10), inset 0 1px 0 rgba(255,255,255,.45);
    backdrop-filter: blur(10px);
    isolation: isolate;
    transition: transform .18s ease, box-shadow .2s ease, border-color .2s ease;
    cursor: pointer;
    outline: none;
  }
  
  .action-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, .14), inset 0 1px 0 rgba(255,255,255,.55);
    border-color: color-mix(in oklab, var(--accent) 40%, #e5e7eb);
  }
  
  .action-card:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 45%, #c7d2fe);
  }
  
  /* Glow decorativo */
  .glow {
    position: absolute;
    inset: -30% -30% auto auto;
    width: 60%;
    height: 60%;
    background: radial-gradient(60% 60% at 60% 20%, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 60%);
    pointer-events: none;
    z-index: -1;
  }
  
  /* ====== Icono ====== */
  .icon-badge {
    width: clamp(3rem, 6vw, 3.75rem);
    height: clamp(3rem, 6vw, 3.75rem);
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--accent-30), var(--accent-10));
    border: 1px solid color-mix(in oklab, var(--accent) 30%, #ffffff);
    box-shadow: 0 6px 16px color-mix(in oklab, var(--accent) 24%, transparent);
    color: var(--accent);
    transform: translateZ(0);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .action-card:hover .icon-badge { transform: translateY(-3px); }
  .icon-badge i { font-size: clamp(1.25rem, 2.6vw, 1.65rem); }
  
  /* ====== Texto ====== */
  .card-text { display: grid; gap: .25rem; }
  .title {
    margin: 0;
    font-size: clamp(1rem, 2.2vw, 1.1rem);
    font-weight: 800;
    letter-spacing: .2px;
    color: #0f172a;
  }
  .desc {
    margin: 0;
    font-size: clamp(.9rem, 2vw, .95rem);
    color: #475569;
  }
  
  /* ====== CTA ====== */
  .card-cta { margin-top: .25rem; }
  .cta {
    width: 100%;
    justify-content: center;
    border-radius: .75rem;
    border: 1px solid var(--accent);
    background: linear-gradient(180deg, rgba(255,255,255,.4), rgba(255,255,255,.15));
    color: var(--accent);
    transition: transform .12s ease, background-color .2s ease, box-shadow .2s ease, color .2s ease, border-color .2s ease;
  }
  .cta:hover:not(:disabled) {
    background: linear-gradient(180deg, var(--accent-20), var(--accent-10));
    color: color-mix(in oklab, var(--accent) 90%, #1f2937);
    box-shadow: 0 8px 22px color-mix(in oklab, var(--accent) 18%, transparent);
  }
  .cta:active:not(:disabled) { transform: translateY(1px); }
  .cta:disabled { opacity: .65; cursor: not-allowed; }
  
  /* ====== Animación (con respeto a reduce motion) ====== */
  @keyframes rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  .action-card { animation: rise .35s ease both; }
  .action-card:nth-child(2) { animation-delay: .04s; }
  .action-card:nth-child(3) { animation-delay: .08s; }
  @media (prefers-reduced-motion: reduce) {
    .action-card, .icon-badge, .cta { transition: none !important; animation: none !important; }
  }
  
  /* ====== Breakpoints finos ====== */
  /* Tablets: tarjetas más estrechas, más espacio vertical */
  @media (max-width: 1024px) {
    .home-actions {
      --min: clamp(220px, 44vw, 320px);
      --gap: clamp(0.75rem, 2vw, 1rem);
    }
  }
  
  /* Móviles grandes: 2 columnas si cabe, CTA más grande */
  @media (max-width: 780px) {
    .home-actions {
      --min: min(300px, 48vw);
      width: min(980px, 100%);
      min-height: auto; /* evita forzar 100vh en móviles con teclados visibles */
    }
    .cta { font-size: 0.95rem; padding: .75rem; }
  }
  
  /* Móviles pequeños: 1 columna, menos blur y sombras para rendimiento */
  @media (max-width: 520px) {
    .home-actions {
      grid-template-columns: 1fr;
      --gap: .85rem;
      padding: .75rem;
    }
    .action-card {
      backdrop-filter: blur(4px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, .08), inset 0 1px 0 rgba(255,255,255,.40);
    }
    .cta { padding: .7rem; }
  }
  
  /* Pantallas táctiles (performance): reduce efectos pesados */
  @media (pointer: coarse) {
    .action-card { backdrop-filter: blur(5px); }
    .icon-badge { transition: none; }
  }
  </style>
  