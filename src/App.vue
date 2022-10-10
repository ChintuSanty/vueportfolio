<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="sticky top-0 bg-background z-10 lg:flex-col">
    <img alt="Vue logo" class="logo w-1/2" src="@/assets/profile.png" />

    <div class="wrapper text-center">
      <HelloWorld msg="Santhosh Prabakar Badhri" />

      <nav class="pb-4">
        <RouterLink class="text-[#DFF6FF] text-lg" to="/">About</RouterLink>
        <RouterLink class="text-[#DFF6FF] text-lg" to="/experience">Experience</RouterLink>
        <RouterLink class="text-[#DFF6FF] text-lg" to="/skills">Skills</RouterLink>
        <RouterLink class="text-[#DFF6FF] text-lg" to="/education">Education</RouterLink>
      </nav>
    </div>
  </header>

  <div class="grid content-center h:screen">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #47B5FF;
  font-size:1.125rem;
  line-height: 1.75rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
