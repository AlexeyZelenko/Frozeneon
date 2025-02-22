import { ref } from 'vue';

export function useAnimations() {
    const isFiltering = ref(false);
    const isScrolling = ref(false);
    let scrollTimeout: number;

    const startFilterAnimation = () => {
        isFiltering.value = true;
        setTimeout(() => {
            isFiltering.value = false;
        }, 300);
    };

    const handleScrollAnimation = () => {
        isScrolling.value = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
            isScrolling.value = false;
        }, 150);
    };

    const cleanupAnimations = () => {
        clearTimeout(scrollTimeout);
    };

    return {
        isFiltering,
        isScrolling,
        startFilterAnimation,
        handleScrollAnimation,
        cleanupAnimations,
    };
}