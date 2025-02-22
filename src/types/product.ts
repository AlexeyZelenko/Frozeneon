import type {Ref} from "vue";
import VirtualScrollContainer from "../components/Product/List/VirtualScrollContainer.vue";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductListReturn {
  containerHeight: Ref<number>;
  virtualScrollContainerRef: Ref<InstanceType<typeof VirtualScrollContainer> | null>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  searchQuery: Ref<string>;
  filteredProducts: Ref<Product[]>;
}