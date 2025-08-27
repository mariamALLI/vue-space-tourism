<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@/hooks/useSpaceData'

const selectedVehicle = ref(0)

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

const { data, error, loading } = useFetch<SpaceData>()

const vehicle = computed(() => data.value?.technology[selectedVehicle.value] ?? null)
</script>

<template>
  <section
    v-if="!loading && !error"
    class="technology relative min-h-screen w-full overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-technology bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-technology min-[1440px]:bg-technology"
    ></div>
    <div class="relative pt-[7.5rem] min-h-screen px-4 md:px-0">
      <h1
        class="translate-x-[20%] md:translate-x-0 font-barlow_c absolute top-24 left-15 md:top-32 md:left-12 lg:top-40 lg:left-20 uppercase tracking-widest text-white text-lg md:text-2xl lg:text-3xl"
      >
        <span class="text-darkGray mr-4">03</span>
        Space launch 101
      </h1>

      <div class="flex flex-col flex-col-reverse md:items-center lg:flex-row lg:justify-between lg:translate-y-[5%] lg:translate-x-[10%]">
        <div class="vehicle-details_buttons mt-[2.5rem] lg:flex lg:gap-10">
          <!-- Vehicle Selection Buttons -->
          <div class="flex justify-center lg:justify-start gap-4 mb-8 mt-[3.5rem] lg:flex-col lg:gap-8 lg:mb-[2rem] lg:mt-[1rem]">
            <button
              @click="selectedVehicle = 0"
              :class="[
                selectedVehicle === 0
                  ? 'bg-white text-navy_blue p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl'
                  : 'bg-transparent text-white border-1 border-white p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl',
              ]"
            >
              1
            </button>
            <button
              @click="selectedVehicle = 1"
              :class="[
                selectedVehicle === 1
                  ? 'bg-white text-navy_blue p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl'
                  : 'bg-transparent text-white border-1 border-white p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl',
              ]"
            >
              2
            </button>
            <button
              @click="selectedVehicle = 2"
              :class="[
                selectedVehicle === 2
                  ? 'bg-white text-navy_blue p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl'
                  : 'bg-transparent text-white border-1 border-white p-2 w-10 h-10 rounded-[50%] md:w-20 md:h-20 md:text-3xl',
              ]"
            >
              3
            </button>
          </div>

          <!-- Vehicle Details -->

          <div class="text-center md:text-left">
            <div class="space-y-8">
              <h2
                class="font-belle text-[14px] tracking-[2.36px] text-darkGray font-thin md:text-center md:text-[2rem]"
              >
                THE TERMINOLOGY...
              </h2>
              <h3
                class="font-belle text-[2rem] text-white md:text-[2.5rem] lg:text-[3.5rem] mb-4 mt-[-2rem] md:text-center md:text-[3.5rem]"
              >
                {{ vehicle && vehicle.name.toUpperCase() }}
              </h3>
              <p
                class="font-barlow text-[0.9rem] md:text-base font-thin mt-[-1rem] mb-[.7rem] leading-[25px] md:leading-[28px] text-pale_purple max-w-[444px] mx-auto md:mx-0 md:text-center md:text-xl md:max-w-2xl lg:max-w-4xl md:leading-[35px] lg:leading-[40px] lg:text-lg lg:text-left"
              >
                {{ vehicle && vehicle.description }}
              </p>
            </div>
          </div>
        </div>
        <!-- Vehicle Image -->
        <div class="w-full mt-8 -mx-4 md:mx-0 md:w-screen">
          <picture>
            <source media="(min-width: 1024px)" :srcset="vehicle?.images.portrait" />
            <img
              :src="vehicle?.images.landscape"
              :alt="vehicle?.name"
              class="w-full h-[200px] md:mt-[4rem] object-cover md:h-[400px] lg:h-[550px] md:object-contain lg:translate-y-[-10%] lg:translate-x-[5%]"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
