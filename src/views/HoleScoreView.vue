<script setup>
import ScribbleButton from '@/components/ScribbleButton.vue'
import SmileIconButton from '@/components/SmileIconButton.vue'
import { SCORE, useScorecardStore } from '@/stores/scorecard'
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
      <SmileIconButton
        @click="scoreHole(1)"
        :selected="isSelected(1)"
        :variant="SCORE.HAPPY"
      />
      <SmileIconButton
        @click="scoreHole(0)"
        :selected="isSelected(0)"
        :variant="SCORE.OK"
      />
      <SmileIconButton
        @click="scoreHole(-1)"
        :selected="isSelected(-1)"
        :variant="SCORE.SAD"
      />
      <ScribbleButton @click="nextHole" :disabled="!buttonSelected"
        >Next Hole</ScribbleButton
      >
    </section>
  </div>
</template>

<style scoped>
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
  flex: 1;
  overflow: hidden;
}
.next-button {
  padding: 1.5rem;
  margin: 1rem 0;
}
</style>
