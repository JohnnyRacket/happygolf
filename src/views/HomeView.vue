<script setup>
import 'wired-elements'
// import BouncingIcon from '@/components/BouncingIcon.vue'

const startRound = () => {
  console.log('Starting a new round')
}
</script>

<template>
  <main>
    <h1>Happy Golf</h1>
    <section>
      <wired-button id="styled" elevation="2" @click="startRound"
        >Start Round</wired-button
      >
    </section>
    <!-- <BouncingIcon /> -->
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
  /* background-image: url('/images/tile_background.png'); */
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
</style>
