<template>
  <section id="wrap">
    <header>
      <h1>JS Piano</h1>
      <h2>Usa tu teclado o haz clic con el mouse. Pasa el cursor para ver pistas.</h2>
    </header>
    <section id="main">
      <div class="nowplaying" ref="nowplaying"></div>
      <div class="keys">
        <div data-key="65" class="key" data-note="C" @click="playNoteMouse">
       
        </div>
        <div data-key="87" class="key sharp" data-note="C#" @click="playNoteMouse">
          
        </div>
        <div data-key="83" class="key" data-note="D" @click="playNoteMouse">
   
        </div>
        <div data-key="69" class="key sharp" data-note="D#" @click="playNoteMouse">
        
        </div>
        <div data-key="68" class="key" data-note="E" @click="playNoteMouse">
       
        </div>
        <div data-key="70" class="key" data-note="F" @click="playNoteMouse">
   
        </div>
        <div data-key="84" class="key sharp" data-note="F#" @click="playNoteMouse">
  
        </div>
        <div data-key="71" class="key" data-note="G" @click="playNoteMouse">
      
        </div>
        <div data-key="89" class="key sharp" data-note="G#" @click="playNoteMouse">
  
        </div>
        <div data-key="72" class="key" data-note="A" @click="playNoteMouse">
      
        </div>
        <div data-key="85" class="key sharp" data-note="A#" @click="playNoteMouse">

        </div>
        <div data-key="74" class="key" data-note="B" @click="playNoteMouse">
   
        </div>
        <div data-key="75" class="key" data-note="C" @click="playNoteMouse">

        </div>
        <div data-key="79" class="key sharp" data-note="C#" @click="playNoteMouse">
   
        </div>
        <div data-key="76" class="key" data-note="D" @click="playNoteMouse">

        </div>
        <div data-key="80" class="key sharp" data-note="D#" @click="playNoteMouse">

        </div>
        <div data-key="186" class="key" data-note="E" @click="playNoteMouse">
 
        </div>
      </div>
      
      <!-- Audios para cada tecla -->
      <audio data-key="65" src="http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"></audio>
      <audio data-key="87" src="http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"></audio>
      <audio data-key="83" src="http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"></audio>
      <audio data-key="69" src="http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"></audio>
      <audio data-key="68" src="http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"></audio>
      <audio data-key="70" src="http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"></audio>
      <audio data-key="84" src="http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"></audio>
      <audio data-key="71" src="http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"></audio>
      <audio data-key="89" src="http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"></audio>
      <audio data-key="72" src="http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"></audio>
      <audio data-key="85" src="http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"></audio>
      <audio data-key="74" src="http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"></audio>
      <audio data-key="75" src="http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"></audio>
      <audio data-key="79" src="http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"></audio>
      <audio data-key="76" src="http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"></audio>
      <audio data-key="80" src="http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"></audio>
      <audio data-key="186" src="http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"></audio>
    </section>
    <video playsinline autoplay muted loop id="bgvid" poster="http://carolinegabriel.com/demo/js-keyboard/video/bg.jpg">
      <source src="http://carolinegabriel.com/demo/js-keyboard/video/bg.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Referencia para actualizar el display de la nota que se está reproduciendo
const nowplaying = ref(null);

// Función para reproducir la nota al presionar una tecla
function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  const noteName = key.getAttribute("data-note");
  key.classList.add("playing");
  if (nowplaying.value) nowplaying.value.innerHTML = noteName;
  audio.currentTime = 0;
  audio.play();
}

// Función para reproducir la nota al hacer clic con el mouse
function playNoteMouse(e) {
  const key = e.currentTarget;
  const keyCode = key.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  const noteName = key.getAttribute("data-note");
  key.classList.add("playing");
  if (nowplaying.value) nowplaying.value.innerHTML = noteName;
  audio.currentTime = 0;
  audio.play();
}

// Función para quitar la clase "playing" al finalizar la transición
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.currentTarget.classList.remove("playing");
}

onMounted(() => {
  // Escucha el evento de teclado
  window.addEventListener("keydown", playNote);

  // Agrega el evento para remover la clase "playing" al terminar la transición
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
  });

  // Opcional: agrega un delay en la transición de aparición de las pistas (hints)
  const hints = document.querySelectorAll(".hints");
  hints.forEach((hint, index) => {
    hint.style.transitionDelay = `${index * 50}ms`;
  });
});
</script>

<style scoped>
html {
  background: #000;
  font-family: 'Noto Serif', serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}

video#bgvid {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
}

header {
  position: relative;
  margin: 30px 0;
}

header:after {
  content: '';
  width: 460px;
  height: 15px;
  background: url(images/intro-div.svg) no-repeat center;
  display: inline-block;
  text-align: center;
  background-size: 70%;
}

h1 {
  color: #fff;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0;
}

h2 {
  color: #fff;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  margin: 0 0 30px;
}

.nowplaying {
  font-size: 120px;
  line-height: 1;
  color: #eee;
  text-shadow: 0 0 5rem #028ae9;
  transition: all 0.07s ease;
  min-height: 120px;
}

.keys {
  display: block;
  width: 100%;
  height: 350px;
  max-width: 880px;
  position: relative;
  margin: 40px auto 0;
  cursor: pointer; /* Se muestra el cursor para indicar interactividad */
}

.key {
  position: relative;
  border: 4px solid black;
  border-radius: 0.5rem;
  transition: all 0.07s ease;
  display: block;
  box-sizing: border-box;
  z-index: 2;
}

.key:not(.sharp) {
  float: left;
  width: 10%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
}

.key.sharp {
  position: absolute;
  width: 6%;
  height: 60%;
  background: #000;
  color: #eee;
  top: 0;
  z-index: 3;
}

.key[data-key="87"] {
  left: 7%;
}

.key[data-key="69"] {
  left: 17%;
}

.key[data-key="84"] {
  left: 37%;
}

.key[data-key="89"] {
  left: 47%;
}

.key[data-key="85"] {
  left: 57%;
}

.key[data-key="79"] {
  left: 77%;
}

.key[data-key="80"] {
  left: 87%;
}

.playing {
  transform: scale(0.95);
  border-color: #028ae9;
  box-shadow: 0 0 1rem #028ae9;
}

.hints {
  display: block;
  width: 100%;
  opacity: 0;
  position: absolute;
  bottom: 7px;
  transition: opacity 0.3s ease-out;
  font-size: 20px;
}

.keys:hover .hints {
  opacity: 1;
}
</style>
