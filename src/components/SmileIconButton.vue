<script setup>
import { computed, defineProps } from 'vue'

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
})

const background = computed(() => (props.selected ? 'lightgreen' : 'none'))
</script>

<template>
  <div>
    <button @click="props.onClick" class="smile-icon-button">
      <img src="@/assets/smilegolf.png" alt="smile" />
    </button>
  </div>
</template>

<style scoped>
.smile-icon-button {
  width: 150px;
  height: 150px;
  background: v-bind('background');
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
  height: 100%;
}
</style>
