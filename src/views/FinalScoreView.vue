<script setup>
import ScribbleButton from '@/components/ScribbleButton.vue'
import SmileIcon from '@/components/SmileIcon.vue'
import { SCORE } from '@/stores/scorecard'
import { useScorecardStore } from '@/stores/scorecard'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useScorecardStore()
</script>

<template>
  <div class="final-score">
    <h1>Round Complete!</h1>
    <section>
      <p>Heres how it all shook out:</p>
      <div class="score-breakdown">
        <div class="score-block">
          <SmileIcon :variant="SCORE.HAPPY" />
          <p>{{ store.getTotalHappyScore() }}</p>
        </div>
        <div class="score-block">
          <SmileIcon :variant="SCORE.OK" />
          <p>{{ store.getTotalOkScore() }}</p>
        </div>
        <div class="score-block">
          <SmileIcon :variant="SCORE.SAD" />
          <p>{{ store.getTotalSadScore() }}</p>
        </div>
      </div>
      <ScribbleButton class="button" @click="router.push('/')"
        >Home</ScribbleButton
      >
    </section>
  </div>
</template>

<style scoped>
.button {
  margin-bottom: 2rem;
  font-size: 2rem;
}
.final-score {
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  flex-direction: column;
}
.score-breakdown {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
}
.score-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
}
</style>
