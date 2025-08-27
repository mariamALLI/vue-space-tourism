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
      class="p-[1.5rem] lg:p-[3rem] absolute inset-0 bg-crew bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-crew min-[1440px]:bg-crew"
    >
      <h2
        class="translate-x-[25%] md:translate-x-0 font-barlow_c absolute top-24 left-20 md:top-32 md:left-12 lg:top-40 lg:left-20 uppercase tracking-widest text-white text-lg md:text-2xl lg:text-3xl"
      >
        <span class="text-darkGray mr-4">02</span>
        Meet your crew
      </h2>
      <div
        class="crew_content flex flex-col flex-col-reverse lg:flex-row lg:flex-row-reverse lg:translate-y-[5%] lg:translate-x-[5%]"
      >
        <div
          class="crew_image w-full h-[46vh] mt-6 flex items-end justify-center md:h-auto md:mt-0"
        >
          <img
            v-if="crewList[selectedCrewMember]"
            :src="'/' + crewList[selectedCrewMember].images.png"
            :alt="crewList[selectedCrewMember].name"
            class="h-full w-auto object-contain md:w-[70%] md:h-[55vh] lg:h-[65vh] lg:w-full md:object-contain md:translate-y-[20%] lg:translate-y-[30%]"
          />
        </div>
        <div
          class="crew_info mt-[9rem] flex flex-col flex-col-reverse items-center text-center lg:text-left md:translate-y-[30%]"
        >
          <ul class="crew_nav_links flex gap-4 mb-8 mt-4 lg:gap-8">
            <li
              v-for="(_, index) in crewList"
              :key="index"
              @click="selectedCrewMember = index"
              :class="[
                'w-3 h-3 rounded-full bg-darkGray cursor-pointer',
                selectedCrewMember === index ? 'bg-white' : '',
              ]"
              aria-label="Crew member {{ index + 1 }}"
              class="lg:translate-x-[-10rem] lg:translate-y-[4rem]"
            ></li>
          </ul>
          <div class="crew_text" v-if="crewList[selectedCrewMember]">
            <h3 class="role text-darkGray font-belle uppercase text-lg md:mb-2 md:text-2xl">
              {{ crewList[selectedCrewMember].role }}
            </h3>
            <h2 class="name text-white font-belle uppercase text-2xl md:text-6xl">
              {{ crewList[selectedCrewMember].name }}
            </h2>
            <p
              class="bio text-pale_purple text-sm mt-[1.5rem] font-normal tracking-[0.05rem] leading-6 md:text-xl md:leading-8 max-w-2xl lg:text-sm"
            >
              {{ crewList[selectedCrewMember].bio }}
            </p>
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
