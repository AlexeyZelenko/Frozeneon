/**
 * Хук для управления состояниями анимаций фильтрации и скролла
 *
 * @description
 * Предоставляет функционал для управления временными состояниями анимаций:
 * - Анимация фильтрации (300мс)
 * - Анимация скролла (150мс)
 * Включает автоматическую очистку таймеров для предотвращения утечек памяти
 *
 * @example
 * ```vue
 * <script setup>
 * import { useAnimations } from '@/composables/useAnimations';
 *
 * const {
 *   isFiltering,
 *   isScrolling,
 *   startFilterAnimation,
 *   handleScrollAnimation,
 *   cleanupAnimations
 * } = useAnimations();
 *
 * // Использование при фильтрации
 * const handleFilter = () => {
 *   startFilterAnimation();
 *   // логика фильтрации
 * };
 *
 * // Использование при скролле
 * const handleScroll = () => {
 *   handleScrollAnimation();
 *   // логика скролла
 * };
 *
 * // Очистка при размонтировании компонента
 * onUnmounted(() => {
 *   cleanupAnimations();
 * });
 * </script>
 * ```
 *
 * @returns {Object} Объект с методами и состояниями анимаций:
 * @property {Ref<boolean>} isFiltering - Состояние анимации фильтрации
 * @property {Ref<boolean>} isScrolling - Состояние анимации скролла
 * @property {Function} startFilterAnimation - Запускает анимацию фильтрации на 300мс
 * @property {Function} handleScrollAnimation - Управляет состоянием анимации скролла с debounce 150мс
 * @property {Function} cleanupAnimations - Очищает все таймеры анимаций
 *
 * @notes
 * - Используйте cleanupAnimations при размонтировании компонента
 * - handleScrollAnimation включает debounce для оптимизации производительности
 * - Длительность анимаций можно синхронизировать с CSS transitions
 */