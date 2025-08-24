<script setup lang="ts">
import { ref } from 'vue';

const destination = ref({
  name: 'Moon',
  description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  distance: '384,400 km',
  travelTime: '3 days'
});
</script>


<template>
  <section>
    <h2>{{ destination.name }}</h2>
    <p>{{ destination.description }}</p>
    <ul>
      <li>
        <strong>Avg. distance:</strong> {{ destination.distance }}
      </li>
      <li>
        <strong>Est. travel time:</strong> {{ destination.travelTime }}
      </li>
    </ul>
  </section>
</template>

<!--  01 Pick your destination

  Moon
  Mars
  Europa
  Titan

  Moon

  See our planet as you’ve never seen it before. A perfect relaxing trip away to help
  regain perspective and come back refreshed. While you’re there, take in some history
  by visiting the Luna 2 and Apollo 11 landing sites.

  Avg. distance
  384,400 km

  Est. travel time
  3 days -->
