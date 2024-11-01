import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const SCORE = {
  HAPPY: 1,
  OK: 0,
  SAD: -1,
}

export const useScorecardStore = defineStore('scorecard', () => {
  const scorecard = ref([])
  const averageScore = computed(() =>
    Math.round(
      scorecard.value.reduce((a, b) => a + b, 0) / scorecard.value.length,
    ),
  )

  const numberOfHoles = computed(() => scorecard?.value?.length ?? 0)

  function setScoreForHole(holeNumber, value) {
    console.log('holeNumber', holeNumber)
    scorecard.value[holeNumber - 1] = value
  }

  function getScoreForHole(holeNumber) {
    return scorecard.value?.[holeNumber - 1]
  }

  function initScorecard(numberOfHoles) {
    scorecard.value = Array.from({ length: numberOfHoles }, () => 0)
  }

  function getTotalHappyScore() {
    return scorecard.value.filter(score => score === SCORE.HAPPY).length
  }

  function getTotalOkScore() {
    return scorecard.value.filter(score => score === SCORE.OK).length
  }

  function getTotalSadScore() {
    return scorecard.value.filter(score => score === SCORE.SAD).length
  }

  return {
    scorecard,
    numberOfHoles,
    averageScore,
    initScorecard,
    setScoreForHole,
    getScoreForHole,
    getTotalHappyScore,
    getTotalOkScore,
    getTotalSadScore,
  }
})
