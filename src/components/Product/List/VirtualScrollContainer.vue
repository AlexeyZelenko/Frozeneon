<script setup lang="ts">
import { defineProps, defineExpose, onUnmounted } from 'vue';
import { useVirtualScroll } from '@/composables/useVirtualScroll.ts';
import { useAnimations } from '@/composables/useAnimations.ts';
import ProductCard from '@/components/Product/Card/index.vue';
import '@/styles/VirtualScroll.scss';

const props = defineProps<{
  items: any[];
  itemHeight: number;
  containerHeight: number;
  buffer?: number;
}>();

const {
  containerRef,
  visibleItems,
  totalHeight,
  offsetY,
  resetScroll
} = useVirtualScroll(props);

const {
  isFiltering,
  isScrolling,
  handleScrollAnimation,
  cleanupAnimations
} = useAnimations();

// Обработка скролла с анимацией
const handleScroll = () => {
  if (containerRef.value) {
    handleScrollAnimation();
  }
};

onUnmounted(() => {
  cleanupAnimations();
});

defineExpose({
  resetScroll,
});
</script>

<template>
  <div
      ref="containerRef"
      class="virtual-scroll-container"
      :class="{ 'is-scrolling': isScrolling }"
      :style="{ height: `${containerHeight}px` }"
      @scroll="handleScroll"
  >
    <div
        class="virtual-scroll-content"
        :style="{
        height: `${totalHeight}px`,
        position: 'relative'
      }"
    >
      <div
          class="virtual-scroll-items"
          :style="{
          transform: `translateY(${offsetY}px)`,
          willChange: 'transform'
        }"
      >
        <TransitionGroup
            name="product-list"
            tag="div"
            class="products-grid"
        >
          <ProductCard
              v-for="product in visibleItems"
              :key="product.id"
              :product="product"
              :class="{
              'filtering': isFiltering,
              'scroll-animation': isScrolling
            }"
              v-memo="[product.id]"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>