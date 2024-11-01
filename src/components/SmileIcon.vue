<script setup>
import { computed } from 'vue'
import { SCORE } from '@/stores/scorecard'

// Define the props
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: SCORE.HAPPY,
  },
})

const image = computed(() => {
  switch (props.variant) {
    case SCORE.HAPPY:
      return '/src/assets/smilegolf.png'
    case SCORE.OK:
      return '/src/assets/neutralgolf.png'
    case SCORE.SAD:
      return '/src/assets/frowngolf.png'
    default:
      return '/src/assets/smilegolf.png'
  }
})
</script>

<template>
  <div class="smile-icon">
    <img :src="image" alt="smile" />
  </div>
</template>

<style scoped>
.smile-icon {
  width: 100%;
  min-width: none;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 50%;
}
img {
  width: 100%;
}
</style>
