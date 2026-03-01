<script setup>
import { computed } from 'vue'
import { SCORE } from '@/stores/scorecard'
import smileGolf from '../assets/smilegolf.png'
import neutralGolf from '../assets/neutralgolf.png'
import frownGolf from '../assets/frowngolf.png'

// Define the props
const props = defineProps({
  variant: {
    type: Number,
    required: false,
    default: SCORE.HAPPY,
  },
})

const image = computed(() => {
  switch (props.variant) {
    case SCORE.HAPPY:
      return smileGolf
    case SCORE.OK:
      return neutralGolf
    case SCORE.SAD:
      return frownGolf
    default:
      return smileGolf
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
