import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/HomePage.vue'
import DestinationMoon from '@/components/destination/DestinationMoon.vue'
import CrewCommander from '@/components/crew/CrewCommander.vue'
import TechnologyVehicle from '@/components/technology/TechnologyVehicle.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/destination', component: DestinationMoon },
    { path: '/crew', component: CrewCommander },
    { path: '/technology', component: TechnologyVehicle },
  ],
})

export default router
