<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Home', path: '/', label: '00' },
  { name: 'Destination', path: '/destination', label: '01' },
  { name: 'Crew', path: '/crew', label: '02' },
  { name: 'Technology', path: '/technology', label: '03' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="fixed top-0 w-full z-50">
    <div
      class="flex justify-between items-center px-6 pt-6 md:px-10 md:pt-8 lg:px-12 lg:pt-10 w-full"
    >
      <!-- logo -->
      <router-link to="/">
        <img
          src="/logo.svg"
          alt="Logo"
          class="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 md:mt-[-1rem] lg:mt-[-1.25rem]"
        />
      </router-link>

      <!-- line for desktop -->
      <div
        class="hidden lg:block flex-1 max-w-[600px] h-[1px] bg-white/20 ml-8 -mr-10 z-[50] mt-[-0.5rem]"
      ></div>

      <!-- hamburger menu for mobile -->
      <div class="md:hidden z-[60]">
        <button @click="toggleMenu" class="text-white focus:outline-none relative z-[60]">
          <img
            v-if="isOpen"
            src="@/assets/shared/icon-close.svg"
            alt="Close Menu"
            class="h-6 w-6"
          />
          <img v-else src="@/assets/shared/icon-hamburger.svg" alt="Open Menu" class="h-6 w-6" />
        </button>
      </div>

      <!-- Navigation-links for desktop -->
      <div
        class="hidden md:flex md:items-center md:gap-8 bg-white/5 backdrop-blur-lg px-8 py-4 rounded-lg md:py-[20px] md:mr-[-4rem] md:mt-[-2rem] lg:mr-[-3rem] lg:mt-[-1rem] lg:px-16 lg:py-6 lg:rounded-none"
      >
        <ul class="flex gap-8">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              :to="link.path"
              :class="[
                'flex items-center gap-2 py-2 px-4 uppercase tracking-widest hover:text-white hover:border-b-2 hover:border-white transition-colors duration-300 ease-in-out lg:text-sm md:text-base',
                route.name === link.name
                  ? 'text-white font-bold border-b-2 border-white'
                  : 'text-gray-400',
              ]"
              @click="isOpen = false"
              active-class="text-white font-bold border-b-2 border-white"
            >
              <span>{{ link.label }}</span>
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile overlay menu -->
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 h-screen w-2/3 sm:w-1/2 bg-white/5 backdrop-blur-xl z-50 flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out"
    >
      <ul class="flex flex-col gap-8">
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="link.path"
            :class="[
              'flex items-center gap-4 text-lg font-normal uppercase tracking-widest hover:text-white transition-colors duration-300 ease-in-out hover:border-b-2 hover:border-white text-sm',
              route.name === link.name ? 'text-white font-bold' : 'text-white/80',
            ]"
            @click="isOpen = false"
          >
            <span class="font-bold">{{ link.label }}</span>
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>



