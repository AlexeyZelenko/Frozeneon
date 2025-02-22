<template>
  <div class="spinner-container">
    <svg
        class="spinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
    >
      <circle fill="#50A5E6" cx="18" cy="18" r="18" />
      <ellipse fill="#1C6399" cx="11.985" cy="15.188" rx="2.5" ry="3.5" />
      <ellipse fill="#1C6399" cx="23.985" cy="15.188" rx="2.5" ry="3.5" />
      <path
          fill="#FFF"
          d="M24.985 21.833c2.209 0 4 1.791 4 4s-1.791 4-4 4h-14c-2.209 0-4-1.791-4-4s1.791-4 4-4h14z"
      />
    </svg>
  </div>
</template>

<style scoped>
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.spinner {
  width: 50%;
  height: 50%;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script setup lang="ts">
</script>