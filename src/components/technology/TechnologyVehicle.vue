<script setup lang="ts">
import { ref } from 'vue';

const vehicle = ref({
  name: 'Space Shuttle',
  description: 'The Space Shuttle was a reusable spacecraft system operated by NASA.',
  image: './assets/technology/image-space-shuttle.png',
  stats: {
    speed: '28,000 km/h',
    crewCapacity: 7
  }
});
</script>


<template>
  <section>
    <h2>{{ vehicle.name }}</h2>
    <p>{{ vehicle.description }}</p>
    <img :src="vehicle.image" :alt="vehicle.name" />
    <ul>
      <li>
        <strong>Max speed:</strong> {{ vehicle.stats.speed }}
      </li>
      <li>
        <strong>Crew capacity:</strong> {{ vehicle.stats.crewCapacity }}
      </li>
    </ul>
  </section>
</template>
