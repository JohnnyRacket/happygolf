<script setup></script>
<template>
  <div class="round-select">
    <h2>Select Round Length</h2>
    <section>
      <wired-button elevation="2" @click="setNumHoles(9)">9 Holes</wired-button>
      <wired-button elevation="2" @click="setNumHoles(18)"
        >18 Holes</wired-button
      >
    </section>
  </div>
</template>

<style>
.round-select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  padding: 2rem;
  text-align: center;
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
  gap: 2rem;
}
</style>
