/// <reference path="./useVirtualScroll.docs.ts" />

import { ref, onMounted, onUnmounted, watch } from 'vue';
import type { Product } from '@/types/product';
import type {
  VirtualScrollProps,
  VirtualScrollReturn,
  ScrollState
} from '@/types/virtualScroll';

export function useVirtualScroll(props: VirtualScrollProps): VirtualScrollReturn {
  const containerRef = ref<HTMLElement | null>(null);
  const visibleItems = ref<Product[]>([]);
  const totalHeight = ref(0);
  const offsetY = ref(0);

  const buffer = props.buffer ?? 1;
  const visibleCount = Math.ceil(props.containerHeight / props.itemHeight) + buffer * 2;

  const scrollState = ref<ScrollState>({
    startIndex: 0,
    endIndex: 0,
    offsetY: 0,
    totalHeight: 0,
    visibleCount
  });

  const updateVisibleItems = (): void => {
    if (!containerRef.value) return;

    const newStartIndex = Math.max(
        0,
        Math.floor(offsetY.value / props.itemHeight) - buffer
    );

    const newEndIndex = Math.min(
        props.items.length,
        newStartIndex + visibleCount
    );

    if (
        newStartIndex !== scrollState.value.startIndex ||
        newEndIndex !== scrollState.value.endIndex
    ) {
      scrollState.value = {
        ...scrollState.value,
        startIndex: newStartIndex,
        endIndex: newEndIndex,
        offsetY: offsetY.value
      };

      visibleItems.value = props.items.slice(newStartIndex, newEndIndex);
    }
  };

  const handleScroll = (): void => {
    if (!containerRef.value) return;
    offsetY.value = containerRef.value.scrollTop;
    updateVisibleItems();
  };

  const resetScroll = (): void => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0;
      offsetY.value = 0;
      updateVisibleItems();
    }
  };

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener('scroll', handleScroll, { passive: true });
    }
    totalHeight.value = props.items.length * props.itemHeight;
    updateVisibleItems();
  });

  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', handleScroll);
    }
  });

  watch(
      () => props.items,
      () => {
        totalHeight.value = props.items.length * props.itemHeight;
        updateVisibleItems();
      },
      { immediate: true }
  );

  return {
    containerRef,
    visibleItems,
    totalHeight,
    offsetY,
    resetScroll,
    scrollState,
  };
}