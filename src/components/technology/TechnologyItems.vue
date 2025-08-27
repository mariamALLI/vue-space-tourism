<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetch } from '@/hooks/useSpaceData';

const selectedVehicle = ref(0);

// Define the expected data structure
interface TechnologyItem {
  name: string
  description: string
  images: {
    portrait: string
    landscape: string
  }
}

interface SpaceData {
  technology: TechnologyItem[]
}

const { data, error, loading } = useFetch<SpaceData>();

const vehicle = computed(() => data.value?.technology[selectedVehicle.value] ?? null);
</script>


<template>
  <section v-if="!loading && !error" class="technology relative min-h-screen w-full overflow-hidden">
    <div class="absolute inset-0 bg-body_mobile_tech bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_tech min-[1440px]:bg-body_desktop_tech"></div>
    <div class="relative container mx-auto px-4 pt-[7.5rem] min-h-screen">
      <h1 class="uppercase text-center mb-[2.5rem] font-barlow_c text-[0.95rem] tracking-[4.55px] min-[768px]:text-left min-[768px]:text-[1.35rem]">
          <span class="text-gray-500 mr-4">03</span>
          Space launch 101
        </h1>

        <div class="grid lg:grid-cols-[auto,1fr] gap-8">
          <!-- Vehicle Selection Buttons -->
          <div class="flex justify-center lg:justify-start gap-4 mb-8">
            <button @click="selectedVehicle = 0"> 1</button>
            <button @click="selectedVehicle = 1"> 2</button>
            <button @click="selectedVehicle = 2"> 3</button>
          </div>

          <!-- Vehicle Details -->
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="text-center md:text-left">
              <div class="space-y-8">
                 <h2 className="font-barlow_c text-[14px] tracking-[2.36px] text-gray-400">THE TERMINOLOGY...</h2>
                <h3 className="font-belle text-[2rem] md:text-[2.5rem] lg:text-[3.5rem]">{{ vehicle && vehicle.name.toUpperCase() }}</h3>
                <p className="font-barlow text-[0.9rem] md:text-base leading-[25px] md:leading-[28px] text-gray-400 max-w-[444px] mx-auto md:mx-0">
                  {{ vehicle && vehicle.description }}
                </p>
              </div>

              <!-- Vehicle Image -->
               <div className="flex justify-center">
              <img
                :src='vehicle?.images.portrait'
                :alt='vehicle?.name'
                className="w-full h-[170px] md:h-[310px] lg:h-[527px] object-cover md:object-contain"
              />
            </div>

            </div>
          </div>
        </div>
    </div>
  </section>
</template>
