<template>
  <main>
    <section id="home" ref="homeRef"><WelcomeSection /></section>
    <section id="about" ref="aboutRef"><AboutSection /></section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AboutSection from '@/components/AboutSection.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'

const router = useRouter()
const route = useRoute()

const homeRef = ref(null)
const aboutRef = ref(null)

const sections = [
  { path: '/', el: homeRef },
  { path: '/about', el: aboutRef },
]

// 🟢 Cuando cambia la ruta, hacer scroll a la sección correspondiente
function scrollToSection(path: any) {
  const section = sections.find((s) => s.path === path)
  if (section?.el?.value) {
    console.log(section)
    ;(section.el.value as any).scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.el.value === entry.target)
          if (section) router.replace(section.path)
        }
      })
    },
    { threshold: 0.5 }, // cambia cuando el 50% de la sección es visible
  )
  scrollToSection(route.path)
  sections.forEach(({ el }) => {
    if (el.value) observer.observe(el.value)
  })
})
/*
watch(route.path as any, (newPath) => {
  scrollToSection(newPath)
})*/
</script>

<style scoped>
section {
  height: 100vh;
  width: 100%;
  border: 1px solid red;
  scroll-snap-align: start;
}
</style>
