<script setup lang="ts">
import { ref } from 'vue'

 const destination = ref({
  name: 'Europa',
  description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  distance: '628 mil. km',
  travelTime: '3 years'
});

const fadeLeft = {
  initial: { x: -50, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
}
</script>

<template>
  <section class="container destination-moon">
    <div
      class="absolute inset-0 bg-destination bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-destination min-[1440px]:bg-destination"
    >
      <Motion
        tag="div"
        class="title_image"
        :initial="fadeLeft.initial"
        :enter="fadeLeft.enter"
        :delay="0"
      >
        <h2
          class="translate-x-[10%] md:translate-x-0 font-barlow_c absolute top-24 left-15 md:top-32 md:left-12 lg:top-40 lg:left-20 uppercase tracking-widest text-white text-lg md:text-2xl lg:text-3xl"
        >
          <span class="text-darkGray mr-4">01</span>
          Pick your destination
        </h2>
      </Motion>

      <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-around">
        <Motion
          tag="img"
          :initial="fadeLeft.initial"
          :enter="fadeLeft.enter"
          :delay="0.2"
          class="mx-auto mt-[1rem]"
        >
          <img
            src="../../assets/destination/image-europa.png"
            alt="Europa"
            class="w-[40%] md:w-[70%] h-full object-cover translate-x-[80%] translate-y-[80%] md:translate-x-[30%] md:translate-y-[65%] md:object-contain lg:w-full lg:translate-x-[-15%] lg:translate-y-[50%]"
          />
        </Motion>

        <Motion
          tag="div"
          class="content translate-y-[20%] md:translate-y-[50%] lg:translate-x-[-15%]"
          :initial="fadeLeft.initial"
          :enter="fadeLeft.enter"
          :delay="0.4"
        >
          <ul
            class="nav_links flex items-center justify-center gap-8 mb-8 mt-[4rem] md:mt-0 text-pale_purple font-barlow_c uppercase font-regular md:text-[1.5rem] lg:translate-x-[-15%]"
          >
            <li>
              <router-link to="/destination" class="hover:text-white hover:border-b-2 hover:border-white"
                >Moon</router-link
              >
            </li>
            <li>
              <router-link
                to="/destination/mars"
                class="hover:text-white hover:border-b-2 hover:border-white"
                >Mars</router-link
              >
            </li>
            <li>
              <router-link
                to="/destination/europa"
                class="active text-white border-b-2 border-white"
                >Europa</router-link
              >
            </li>
            <li>
              <router-link
                to="/destination/titan"
                class="hover:text-white hover:border-b-2 hover:border-white"
                >Titan</router-link
              >
            </li>
          </ul>

          <h3
            class="uppercase font-normal text-center font-belle text-[3rem] text-white md:text-[5.5rem] lg:text-[6rem] mb-4 mt-[-2rem] md:text-center md:text-[3.5rem] md:mt-[6rem] lg:mt-[1rem] lg:translate-x-[-15%]"
          >
            {{ destination.name }}
          </h3>
          <p
            class="font-barlow text-center text-[0.9rem] md:text-base font-light mt-[-1rem] mb-[.7rem] leading-[25px] md:leading-[28px] text-pale_purple max-w-[300px] mx-auto md:mx-0 md:text-center md:text-xl md:max-w-2xl lg:max-w-lg md:leading-[35px] lg:leading-[40px] lg:text-lg lg:text-left"
          >
            {{ destination.description }}
          </p>

          <div class="line h-[1px] bg-darkGray my-4 font-light"></div>
          <div
            class="stats flex flex-col items-center justify-center gap-2 md:flex-row md:justify-around md:mt-8"
          >
            <div class="distance text-center">
              <h4
                class="font-barlow_c uppercase text-[0.9rem] md:text-[1.2rem] font-regular text-pale_purple"
              >
                Avg. distance
              </h4>
              <p class="font-belle text-white md:text-[2rem]">{{ destination.distance }}</p>
            </div>
            <div class="travel_time text-center">
              <h4
                class="font-barlow_c uppercase text-[0.9rem] md:text-[1.2rem] md:text-base font-regular text-pale_purple"
              >
                Est. travel time
              </h4>
              <p class="font-belle text-white md:text-[2rem]">{{ destination.travelTime }}</p>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>


