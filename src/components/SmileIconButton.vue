<script setup>
import { computed } from 'vue'
import { SCORE } from '@/stores/scorecard'

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
  props.selected ? 'url(/src/assets/outline.png)' : 'none',
)

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
