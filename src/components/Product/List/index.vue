<script setup lang="ts">
import SearchInput from './SearchInput.vue';
import VirtualScrollContainer from './VirtualScrollContainer.vue';
import { useProductList } from './index.ts';
import './index.scss';

const {
  containerHeight,
  virtualScrollContainerRef,
  loading,
  error,
  searchQuery,
  filteredProducts
} = useProductList();
</script>

<template>
  <div class="product-list-container">
    <SearchInput v-model="searchQuery" />
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <VirtualScrollContainer
        v-else
        ref="virtualScrollContainerRef"
        :items="filteredProducts"
        :item-height="152"
        :container-height="containerHeight"
        :buffer="1"
    />
  </div>
</template>