<script setup lang="ts">
import { ref } from 'vue';

const crewMember = ref({
  name: 'Douglas Hurley',
  role: 'Commander',
  bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
});
</script>

<template>
  <section>
    <h2>{{ crewMember.name }}</h2>
    <h3>{{ crewMember.role }}</h3>
    <p>{{ crewMember.bio }}</p>
  </section>
</template>

<!--
  00 Home
  01 Destination
  02 Crew
  03 Technology

  02 Meet your crew

  Commander
  Douglas Hurley

  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
  and former NASA astronaut. He launched into space for the third time as
  commander of Crew Dragon Demo-2. -->


