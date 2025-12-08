<!-- src/components/ParticlesBackground.vue -->
<template>
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    url="http://foo.bar/particles.json"
  />

  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="{
      fullScreen: false,
      /*background: {
        color: {
          value: '#0d47a1',
        },
      },*/
      //fpsLimit: 120,
      interactivity: {
        detect_on: 'canvas',
        events: {
          /*onClick: {
            enable: true,
            mode: 'push',
          },*/
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 1,
            opacity: 0.8,
            size: 17,
            speed: 2,
          },
          /*push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },*/
        },
      },
      particles: {
        number: { value: 20 },
        color: { value: ['#0be779', '#008a3e', '#a3ffce'] },
        links: {
          color: '#ffffff',
          distance: 450,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: true,
          speed: 1,
          straight: false,
          bounce: true,
        },
        number: {
          /* density: {
            enable: true,
          },*/
          value: 20,
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.3,
            sync: true,
          },
        },
        /*shape: {
          type: 'circle',
        },*/
        size: {
          value: { min: 10, max: 50 },
        },
      },
      detectRetina: true,
    }"
  />
</template>
<style scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}
</style>
