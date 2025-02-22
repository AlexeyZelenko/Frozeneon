/**
* Компонент виртуального скролла для оптимизированного рендеринга больших списков
* Поддерживает анимации при скролле и фильтрации, использует TransitionGroup для плавных переходов
*
* @component
* @description
* Компонент использует технику виртуализации для эффективного отображения больших списков данных,
* рендеря только видимые элементы в области просмотра. Включает анимации при скролле и
* поддерживает плавные переходы при изменении списка.
*
* @example
* ```vue
* <template>
  *   <VirtualScroll
    *     :items="products"
    *     :item-height="200"
    *     :container-height="800"
    *     :buffer="5"
    *   />
  * </template>
*
* <script setup>
* import VirtualScroll from '@/components/VirtualScroll.vue';
* import { ref } from 'vue';
*
* const products = ref([
        *   { id: 1, title: 'Product 1' },
    *   // ... more products
    * ]);
* </script>
* ```
*
* @props {any[]} items - Массив элементов для отображения
* @props {number} itemHeight - Высота каждого элемента в пикселях
* @props {number} containerHeight - Высота контейнера виртуального скролла
* @props {number} [buffer=5] - Количество дополнительных элементов для рендеринга выше и ниже видимой области
*
* @exposes {Function} resetScroll - Метод для сброса позиции скролла
*
* @requires useVirtualScroll - Хук для логики виртуального скролла
* @requires useAnimations - Хук для управления анимациями
* @requires ProductCard - Компонент карточки продукта
*
* @emits {void} scroll - Срабатывает при скролле контейнера
*
* @cssClasses
* - virtual-scroll-container - Основной контейнер
* - is-scrolling - Добавляется при скролле
* - virtual-scroll-content - Контейнер с полной высотой списка
* - virtual-scroll-items - Контейнер для видимых элементов
* - products-grid - Grid-контейнер для карточек продуктов
* - filtering - Класс для анимации фильтрации
* - scroll-animation - Класс для анимации скролла
*
* @cssTransitions
* - product-list-enter-active - Анимация появления элемента
* - product-list-leave-active - Анимация исчезновения элемента
* - product-list-move - Анимация перемещения элемента
*
* @performance
* - Использует v-memo для оптимизации перерендеринга карточек продуктов
* - willChange: 'transform' для оптимизации анимаций трансформации
* - Очистка таймеров анимаций при размонтировании компонента
*/