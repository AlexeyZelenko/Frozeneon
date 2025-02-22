/**
 * Хук для виртуализации списка элементов
 * Оптимизирует рендеринг больших списков, отображая только видимые элементы
 *
 * @description
 * Основные принципы работы:
 * 1. Ограничение контейнера: Контейнер имеет фиксированную высоту для ограничения области отображения
 * 2. Подписка на события скролла: Обновляет позицию и пересчитывает видимые элементы
 * 3. Расчет видимых элементов: Определяет элементы для отображения на основе позиции скролла
 * 4. Рендеринг только видимых элементов: Хранит и отображает только элементы в видимой области
 * 5. Буферизация: Отображает дополнительные элементы выше и ниже видимой области
 * 6. Реактивность: Автоматически обновляет элементы при изменении данных
 *
 * @example
 * ```vue
 * <template>
 *   <div
 *     ref="containerRef"
 *     class="virtual-scroll-container"
 *     :style="{ height: `${containerHeight}px` }"
 *   >
 *     <div
 *       class="virtual-scroll-content"
 *       :style="{ height: `${totalHeight}px` }"
 *     >
 *       <div
 *         class="virtual-scroll-items"
 *         :style="{ transform: `translateY(${offsetY}px)` }"
 *       >
 *         <div
 *           v-for="product in visibleItems"
 *           :key="product.id"
 *           class="virtual-scroll-item"
 *           :style="{ height: `${itemHeight}px` }"
 *         >
 *           {{ product.title }}
 *         </div>
 *       </div>
 *     </div>
 *   </div>
 * </template>
 *
 * <script setup lang="ts">
 * const items = ref<Product[]>(
 *   Array.from({ length: 10000 }, (_, i) => ({
 *     id: i + 1,
 *     title: `Product ${i + 1}`,
 *   }))
 * );
 *
 * const {
 *   containerRef,
 *   visibleItems,
 *   totalHeight,
 *   offsetY,
 *   resetScroll,
 *   scrollState,
 * } = useVirtualScroll({
 *   items: items.value,
 *   itemHeight: 50,
 *   containerHeight: 500,
 *   buffer: 5,
 * });
 * </script>
 * ```
 *
 * @returns {Object} Объект с следующими свойствами:
 * - containerRef: Реф для контейнера списка
 * - visibleItems: Массив видимых элементов
 * - totalHeight: Общая высота списка
 * - offsetY: Текущее смещение по вертикали
 * - resetScroll: Метод для сброса позиции скролла
 * - scrollState: Объект с состоянием скролла
 *
 * @property {Object} scrollState Состояние скролла:
 * - startIndex: Индекс первого видимого элемента
 * - endIndex: Индекс последнего видимого элемента
 * - offsetY: Текущее смещение
 * - totalHeight: Общая высота
 * - visibleCount: Количество видимых элементов
 *
 * @note
 * Возможные улучшения:
 * 1. Поддержка элементов разной высоты через массив offsets
 * 2. Ленивая загрузка при достижении конца списка
 * 3. Анимации для плавного появления/исчезновения элементов
 */