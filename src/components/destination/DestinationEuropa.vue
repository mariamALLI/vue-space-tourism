<script setup lang="ts">
import { ref } from 'vue';

const destination = ref({
  name: 'Europa',
  description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  distance: '628 mil. km',
  travelTime: '3 years'
});
</script>


<template>
  <section class="container destination-europa">
    <div class="title_image">
      <h2>
        <span>01</span>
        Pick your destination
      </h2>
      <img src="../../assets/destination/image-europa.png" alt="Europa" />
    </div>

    <div class="content">
      <ul class="nav_links">
        <li><router-link to="/destination">Moon</router-link></li>
        <li><router-link to="/destination/mars">Mars</router-link></li>
        <li><router-link to="/destination/europa" class="active">Europa</router-link></li>
        <li><router-link to="/destination/titan">Titan</router-link></li>
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
<!--  01 Pick your destination

  Moon
  Mars
  Europa
  Titan

  Europa

  The smallest of the four Galilean moons orbiting Jupiter, Europa is a
  winter lover’s dream. With an icy surface, it’s perfect for a bit of
  ice skating, curling, hockey, or simple relaxation in your snug
  wintery cabin.

  Avg. distance
  628 mil. km

  Est. travel time
  3 years -->
