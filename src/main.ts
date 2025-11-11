import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Particles from '@tsparticles/vue3'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const app = createApp(App)

// 👇 registra el componente globalmente en lugar de usarlo como plugin
//app.component('Particles', ParticlesComponent)

app.use(Particles, {
  init: async (engine: any) => {
    // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    await loadSlim(engine) // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  },
})

app.use(router)

app.mount('#app')
