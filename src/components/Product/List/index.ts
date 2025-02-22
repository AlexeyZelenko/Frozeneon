import { onMounted, ref, watch } from 'vue';
import { useProducts } from '@/composables/useProducts';
import VirtualScrollContainer from './VirtualScrollContainer.vue';
import { ProductListReturn } from '@/types/product';

export function useProductList(): ProductListReturn {
    const containerHeight = ref(800);
    const virtualScrollContainerRef = ref<InstanceType<typeof VirtualScrollContainer> | null>(null);

    const {
        loading,
        error,
        searchQuery,
        filteredProducts,
        fetchProducts,
    } = useProducts();

    // Сброс скролла при изменении поискового запроса
    watch(searchQuery, () => {
        requestAnimationFrame(() => {
            if (virtualScrollContainerRef.value) {
                virtualScrollContainerRef.value.resetScroll();
            }
        });
    });

    // Настройка контейнера
    const setupContainer = (): (() => void) => {
        const updateHeight = (): void => {
            containerHeight.value = window.innerHeight - 200;
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        fetchProducts();

        return () => window.removeEventListener('resize', updateHeight);
    };

    // Инициализация при монтировании
    onMounted(setupContainer);

    return {
        containerHeight,
        virtualScrollContainerRef,
        loading,
        error,
        searchQuery,
        filteredProducts,
    };
}