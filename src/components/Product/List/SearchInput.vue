<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="search-container">
    <input
        type="text"
        :value="modelValue"
        @input="handleInput"
        placeholder="Search products..."
        class="search-input"
    />
  </div>
</template>

<style scoped>
.search-container {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
}
</style>