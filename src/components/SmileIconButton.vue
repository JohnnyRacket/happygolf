<script setup>
import { computed } from 'vue'
import { SCORE } from '@/stores/scorecard'
import smileGolf from '../assets/smilegolf.png'
import neutralGolf from '../assets/neutralgolf.png'
import frownGolf from '../assets/frowngolf.png'
import outlineImg from '../assets/outline.png'

// Define the props
const props = defineProps({
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
  onClick: {
    type: Function,
    required: true,
  },
  variant: {
    type: Number,
    required: false,
    default: SCORE.HAPPY,
  },
})

const background = computed(() =>
  props.selected ? `url(${outlineImg})` : 'none',
)

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
  <button @click="props.onClick" class="smile-icon-button">
    <img :src="image" alt="smile" />
  </button>
</template>

<style scoped>
.smile-icon-button {
  height: 100%;
  min-height: 0;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 50%;
  background-image: v-bind('background');
  background-repeat: no-repeat;
  background-size: contain;
}
img {
  width: 100%;
  height: 100%;
}
</style>
