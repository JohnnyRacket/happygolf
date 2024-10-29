<template>
  <div ref="parentElement" class="bouncing-container">
    <img width="100" height="100" src="../assets/smilegolf.png" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const parentElement = ref(null)
const x = ref(0)
const y = ref(0)
const dx = ref(Math.random() * 0.5 + 0.25)
const dy = ref(Math.random() * 0.5 + 0.25)
const containerWidth = ref(0)
const containerHeight = ref(0)

const xPx = computed(() => {
  return `${x.value}px`
})

const yPx = computed(() => {
  return `${y.value}px`
})

const updatePosition = () => {
  x.value += dx.value
  y.value += dy.value

  if (x.value < 0 || x.value + 100 > containerWidth.value) dx.value = -dx.value
  if (y.value < 0 || y.value + 100 > containerHeight.value) dy.value = -dy.value

  requestAnimationFrame(updatePosition)
}

onMounted(() => {
  containerWidth.value = parentElement.value?.clientWidth
  containerHeight.value = parentElement.value?.clientHeight
  x.value = Math.random() * (containerWidth.value - 100)
  y.value = Math.random() * (containerHeight.value - 100)
  requestAnimationFrame(updatePosition)
})

onUnmounted(() => {
  cancelAnimationFrame(updatePosition)
})
</script>

<style scoped>
.bouncing-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

img {
  z-index: -1;
  position: absolute;
  top: v-bind('yPx');
  left: v-bind('xPx');
}
</style>
