<script setup></script>
<template>
  <div class="hole-score">
    <h2>Hole {{ $route.params.holeNumber }}</h2>
    <section>
      <wired-button elevation="2" @click="nextHole">Next Hole</wired-button>
    </section>
  </div>
</template>

<style></style>
