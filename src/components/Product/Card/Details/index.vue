<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product } from '@/types/product';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="product-info">
    <h3 class="product-title">{{ product?.title }}</h3>
    <p class="product-description">{{ product?.description }}</p>
    <div class="product-details">
      <div class="price-rating">
        <span class="price">${{ product.price }}</span>
        <span class="discount">-{{ Math.round(product.discountPercentage) }}%</span>
        <span class="rating">★ {{ product.rating }}</span>
      </div>
      <div class="brand-category">
        <span class="brand">{{ product.brand }}</span>
        <span class="category">{{ product.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped src="./_index.scss"></style>