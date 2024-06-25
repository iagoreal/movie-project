<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    to: '/'
                },
                {
                    label: 'Filmes',
                    to: '/movies'
                },
                {
                    label: 'Séries',
                    to: '/series'
                }
            ]
        };
    }
};
</script>
<template>
        <div class="card">
          <Menubar :model="items">
              <template #start>
                <RouterLink to="/" class="custom-router-link">
                    <img src="https://pirataflix.netlify.app/static/media/logo.dc3d4eba.png" alt="Logo" width="35" height="40" class="h-8" />
                </RouterLink>
              </template>
              <template #item="{ item, props }">
                  <RouterLink v-bind="props" :to="item.to" class="custom-router-link">
                      <span class="ml-2">{{ item.label }}</span>
                      <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                  </RouterLink>
              </template>
              <template #end>
                  <div class="flex items-center gap-2">
                    <RouterLink to="/favorites" class="custom-router-link">
                        <i class="pi pi-heart-fill" style="font-size: 1rem; color: red;"></i>
                    </RouterLink>
                  </div>
              </template>
          </Menubar>
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

  .custom-router-link {
    color: #d1d1d1;
  }
  
  .custom-router-link:hover {
    background-color: transparent;
    color: #ffffff;
  }
  
  </style>
  