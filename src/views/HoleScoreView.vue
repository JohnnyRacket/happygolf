<script setup>
import SmileIconButton from '@/components/SmileIconButton.vue'
import { useScorecardStore } from '@/stores/scorecard'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const store = useScorecardStore()
const buttonSelected = ref(false)

const nextHole = () => {
  buttonSelected.value = false
  const nextHoleNumber = parseInt(route.params.holeNumber) + 1
  console.log('nextHoleNumber', nextHoleNumber, store.numberOfHoles)
  if (nextHoleNumber <= store.numberOfHoles) {
    router.push(`/hole/${nextHoleNumber}`)
  } else {
    router.push('/scorecard')
  }
}

const scoreHole = score => {
  store.setScoreForHole(route.params.holeNumber, score)
  buttonSelected.value = true
}

const isSelected = score => {
  console.log(
    'isselected',
    buttonSelected.value,
    store.getScoreForHole(route.params.holeNumber),
    score,
  )
  console.log(
    'isSelected',
    buttonSelected.value &&
      store.getScoreForHole(route.params.holeNumber) == score,
  )
  return (
    buttonSelected.value &&
    store.getScoreForHole(route.params.holeNumber) == score
  )
}
</script>

<template>
  <div class="hole-score">
    <h2>Hole {{ $route.params.holeNumber }}</h2>
    <section>
      <SmileIconButton @click="scoreHole(1)" :selected="isSelected(1)" />
      <SmileIconButton @click="scoreHole(0)" :selected="isSelected(0)" />
      <SmileIconButton @click="scoreHole(-1)" :selected="isSelected(-1)" />
      <Button label="info" @click="nextHole" :disabled="!buttonSelected" rounded
        >Next Hole</Button
      >
    </section>
  </div>
</template>

<style>
.hole-score {
  display: flex;
  height: 100vh;
  font-size: 2rem;
  padding: 2rem;
  flex-direction: column;
}

section {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
