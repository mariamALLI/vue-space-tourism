<script setup lang="ts">
import { useFetch } from '@/hooks/useSpaceData'
import { ref, computed } from 'vue'

const selectedCrewMember = ref(0)

// Define the expected data structure
interface CrewMember {
  name: string
  role: string
  bio: string
  images: {
    png: string
    webp: string
  }
}

interface SpaceData {
  crew: CrewMember[]
  // add other properties if needed
}

const { data, error, loading } = useFetch<SpaceData>()
console.log('data:', data)

const crewList = computed(() => data.value?.crew ?? [])
</script>

<template>
  <section
    v-if="!loading && !error"
    class="relative min-h-screen w-full overflow-hidden min-[1440px]:overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-body_mobile_crew bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_crew min-[1440px]:bg-body_desktop_crew"
    >
      <h2
        class="absolute top-24 left-6 md:top-32 md:left-12 lg:top-40 lg:left-20 uppercase tracking-widest text-white text-lg md:text-xl lg:text-2xl"
      >
        <span class="text-gray-400 mr-4 font-bold">02</span>
        Meet your crew
      </h2>
      <div class="crew_content">
        <div class="crew_image">
          <img
            v-if="crewList[selectedCrewMember]"
            :src="'/' + crewList[selectedCrewMember].images.png"
            :alt="crewList[selectedCrewMember].name"
          />
        </div>
        <div class="crew_info">
          <ul class="crew_nav_links">
            <li
              v-for="(_, index) in crewList"
              :key="index"
              @click="selectedCrewMember = index"
              :class="[
                'w-3 h-3 rounded-full bg-gray-400 cursor-pointer',
                selectedCrewMember === index ? 'bg-white' : '',
              ]"
            ></li>
          </ul>
          <div class="crew_text" v-if="crewList[selectedCrewMember]">
            <h3 class="role">{{ crewList[selectedCrewMember].role }}</h3>
            <h2 class="name">{{ crewList[selectedCrewMember].name }}</h2>
            <p class="bio">{{ crewList[selectedCrewMember].bio }}</p>
          </div>
        </div>
      </div>
    </div>
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
