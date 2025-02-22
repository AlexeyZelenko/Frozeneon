<script setup lang="ts">
import ProductList from './components/Product/List/index.vue';
</script>

<template>
  <div class="app">
    <header>
      <img src="@/assets/frozeneon.svg" alt="frozeneon logo" />
      <h1>Product Catalog</h1>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #f0f2f5;
}

header {
  background: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
}

@media (max-width: 768px) {
  header {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}

h1 {
  color: #2c3e50;
  margin: 0;
}

main {
  padding: 0 1rem;
}

img {
  max-width: 30px;
  height: auto;
  margin-right: 10px;
}
</style>