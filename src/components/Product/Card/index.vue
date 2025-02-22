<script setup lang="ts">
import { defineProps, onUnmounted, onMounted, ref } from 'vue';
import type { Product } from '@/types/product';
import ProductImage from './Image/index.vue';
import ProductDetails from './Details/index.vue';

defineProps<{
  product: Product;
}>();

const productImageRef = ref<InstanceType<typeof ProductImage> | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    });
  });

  if (productImageRef.value?.imageRef) {
    observer.observe(productImageRef.value.imageRef);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div class="product-card">
    <ProductImage
        ref="productImageRef"
        :src="product.thumbnail"
        :alt="product.title"
    />
    <ProductDetails :product="product" />
  </div>
</template>

<style scoped>
.product-card {
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-card {
    flex-direction: column;
  }
}
</style>