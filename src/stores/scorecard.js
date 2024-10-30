import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const SCORE = {
  HAPPY: 1,
  OK: 0,
  SAD: -1,
}

export const useScorecardStore = defineStore('scorecard', () => {
  const scorecard = ref([0])
  const averageScore = computed(() =>
    Math.round(
      scorecard.value.reduce((a, b) => a + b, 0) / (scorecard.value.length - 1),
    ),
  )

  function setScoreForHole(holeNumber, value) {
    scorecard.value[holeNumber] = value
  }

  function getScoreForHole(holeNumber) {
    return scorecard.value?.[holeNumber]
  }
  function scorecard1Indexed() {
    return [...scorecard.value].splice(1)
  }

  return {
    scorecard,
    scorecard1Indexed,
    averageScore,
    setScoreForHole,
    getScoreForHole,
  }
})
