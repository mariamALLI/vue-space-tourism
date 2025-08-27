import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/HomePage.vue'
import DestinationMoon from '@/components/destination/DestinationMoon.vue'
import CrewCommander from '@/components/crew/CrewMembers.vue'
import TechnologyVehicle from '@/components/technology/TechnologyItems.vue'
import DestinationEuropa from '@/components/destination/DestinationEuropa.vue'
import DestinationMars from '@/components/destination/DestinationMars.vue'
import DestinationTitan from '@/components/destination/DestinationTitan.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/destination', component: DestinationMoon },
    { path: '/destination/mars', component: DestinationMars },
    { path: '/destination/europa', component: DestinationEuropa },
    { path: '/destination/titan', component: DestinationTitan },
    { path: '/crew', component: CrewCommander },
    { path: '/technology', component: TechnologyVehicle },
  ],
})

export default router
