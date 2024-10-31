<script setup>
defineProps({
  onClick: Function,
  disabled: Boolean,
})
</script>

<template>
  <button @click="onClick" :class="disabled ? 'disabled' : ''">
    <slot />
  </button>
</template>

<style scoped>
button {
  height: 100px;
  width: 200px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-image: url(/src/assets/buttonoutline.png);
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-image: url(/src/assets/buttonoutlinedark.png);
}
</style>
