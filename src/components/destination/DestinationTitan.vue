<script setup lang="ts">
import { ref } from 'vue';

const destination = ref({
  name: 'Titan',
  description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  distance: '1.6 bil. km',
  travelTime: '7 years'
});
</script>

<template>
  <section class="container destination-titan">
    <div class="title_image">
      <h2>
        <span>01</span>
        Pick your destination
      </h2>
      <img src="../../assets/destination/image-titan.png" alt="Titan" />
    </div>

    <div class="content">
      <ul class="nav_links">
        <li><router-link to="/destination">Moon</router-link></li>
        <li><router-link to="/destination/mars">Mars</router-link></li>
        <li><router-link to="/destination/europa">Europa</router-link></li>
        <li><router-link to="/destination/titan" class="active">Titan</router-link></li>
      </ul>

      <h3>{{ destination.name }}</h3>
      <p>{{ destination.description }}</p>

      <div class="stats">
        <div class="distance">
          <h4>Avg. distance</h4>
          <p>{{ destination.distance }}</p>
        </div>
        <div class="travel_time">
          <h4>Est. travel time</h4>
          <p>{{ destination.travelTime }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

