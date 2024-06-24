<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Filmes</RouterLink>
          <RouterLink to="/">Séries</RouterLink>
        </nav>
    </header>
    
    <RouterView />
  </div>
  </template>

<style scoped>
.wrapper {
  width: 100vh;
  height: 100vh;
}
header {
  height: fit-content;
  width: 100vh;
}

body {
  height: 100vh;
  width: 100vh;
}

</style>
