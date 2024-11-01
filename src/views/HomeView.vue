<script setup>
import ScribbleButton from '@/components/ScribbleButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const startRound = () => {
  router.push('/round-select')
}
</script>

<template>
  <main>
    <h1>Happy Golf</h1>
    <section>
      <ScribbleButton class="next-button" @click="startRound"
        >Round Start</ScribbleButton
      >
    </section>
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  flex-direction: column;
}
@media screen and (max-width: 900px) {
  main {
    background-image: url('src/assets/golfbg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
section {
  z-index: 3;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#styled {
  stroke-width: 3;
  font-weight: bold;
}
.next-button {
  width: 256px;
  height: 128px;
}

img {
  position: fixed;
  top: -50px;
  left: -140px;
  width: 500px;
  height: 500px;
  z-index: -1;
  transform: rotate(-35deg);
  opacity: 0.3;
}
</style>
