<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue';
import Spinner from "../Spinner/index.vue";

const imageRef = ref<HTMLImageElement | null>(null);

defineExpose({
  imageRef
});

defineProps<{
  src: string;
  alt: string;
}>();

const isLoading = ref(true);
const isError = ref(false);

const handleImageLoad = () => {
  isLoading.value = false;
  isError.value = false;
};

const handleImageError = () => {
  isLoading.value = false;
  isError.value = true;
};
</script>

<template>
  <div class="image-container">
    <img
        ref="imageRef"
        :src="src"
        :alt="alt"
        class="product-thumbnail"
        @load="handleImageLoad"
        @error="handleImageError"
    />
    <div v-if="isLoading" class="spinner-container">
      <Spinner />
      <!--      <div class="spinner"></div>-->
    </div>
    <div v-if="isError" class="error-message">
      Failed to load image
    </div>
  </div>
</template>

<style scoped src="./_image.scss"></style>