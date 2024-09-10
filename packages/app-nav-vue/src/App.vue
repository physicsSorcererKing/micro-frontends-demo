<script setup lang="ts">
import { IconBrandVue } from '@tabler/icons-vue'
import './assets/base.css'
import './assets/main.css'
</script>

<template>
  <div class="nav--container">
    <div class="watermark">
      <IconBrandVue size="120" color="#07070a" />
      <p class="watermark--title">Vue Sidebar</p>
    </div>
  </div>
</template>

<style scoped>
.nav--container {
  position: relative;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #07070a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.watermark--title {
  font-size: 28px;
  font-weight: 600;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
