<script setup lang="ts">
import { ref } from 'vue';

const destination = ref({
  name: 'Mars',
  description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  distance: '225 mil. km',
  travelTime: '9 months'
});
</script>

<template>
  <section>
    <div class="container destination-mars">
      <div class="title_image">
        <h2>
          <span>01</span>
          Pick your destination
        </h2>
        <img src="../../assets/destination/image-mars.png" alt="Mars" />
      </div>

      <div class="content">
        <ul class="nav_links">
          <li><router-link to="/destination">Moon</router-link></li>
          <li><router-link to="/destination/mars" class="active">Mars</router-link></li>
          <li><router-link to="/destination/europa">Europa</router-link></li>
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
    </div>
  </section>
</template>
