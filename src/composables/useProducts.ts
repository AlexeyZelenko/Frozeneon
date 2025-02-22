import { ref, computed } from 'vue';
import type { Product, ProductsResponse } from '../types/product';

export function useProducts() {
  const products = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref('');

  const filteredProducts = computed(() => {
    const query = searchQuery?.value.toLowerCase();
    return products.value.filter(product => 
      product.title?.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query)
    );
  });

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data: ProductsResponse = await response.json();
      products.value = data.products;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch products';
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    searchQuery,
    filteredProducts,
    fetchProducts,
  };
}