import type {Ref} from "vue";
import {Product} from "./product";

export interface VirtualScrollProps {
    items: Product[];
    itemHeight: number;
    containerHeight: number;
    buffer?: number;
}

export interface VirtualScrollReturn {
    containerRef: Ref<HTMLElement | null>;
    visibleItems: Ref<Product[]>;
    totalHeight: Ref<number>;
    offsetY: Ref<number>;
    resetScroll: () => void;
}