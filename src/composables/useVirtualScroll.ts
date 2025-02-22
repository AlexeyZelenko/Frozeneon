import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Product } from '@/types/product';
import { VirtualScrollProps, VirtualScrollReturn } from '@/types/virtualScroll';

export function useVirtualScroll(props: VirtualScrollProps): VirtualScrollReturn {
  const containerRef = ref<HTMLElement | null>(null);
  const visibleItems = ref<Product[]>([]);
  const totalHeight = ref(0);
  const offsetY = ref(0);

  const buffer = props.buffer ?? 1;
  const visibleCount = Math.ceil(props.containerHeight / props.itemHeight) + buffer * 2;

  const startIndex = ref(0);
  const endIndex = ref(0);

  // Обновление видимых элементов
  const updateVisibleItems = (): void => {
    const newStartIndex = Math.max(0, Math.floor(offsetY.value / props.itemHeight) - buffer);
    const newEndIndex = Math.min(props.items.length, newStartIndex + visibleCount);

    if (newStartIndex !== startIndex.value || newEndIndex !== endIndex.value) {
      startIndex.value = newStartIndex;
      endIndex.value = newEndIndex;
      visibleItems.value = props.items.slice(startIndex.value, endIndex.value);
    }
  };

  // Обработчик скролла
  const handleScroll = (): void => {
    if (containerRef.value) {
      offsetY.value = containerRef.value.scrollTop;
      updateVisibleItems();
    }
  };

  // Сброс скролла
  const resetScroll = (): void => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0;
    }
  };

  // Инициализация при монтировании
  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener('scroll', handleScroll, { passive: true });
    }
    totalHeight.value = props.items.length * props.itemHeight;
    updateVisibleItems();
  });

  // Очистка при размонтировании
  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', handleScroll);
    }
  });

  // Реактивное обновление при изменении items
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
  };
}