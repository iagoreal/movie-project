<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <menuBar/>
    </header>
    
    <RouterView />
  </div>
</template>

<style scoped>

header {
  height: fit-content;
  width: 100vh;
}

body {
  height: 100vh;
  width: 100vh;
}

</style>
