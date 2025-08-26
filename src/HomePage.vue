<template>
  <section
    class="relative min-h-screen w-full overflow-hidden bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center text-center pt-32 px-6"
  >
    <div
      class="flex flex-col lg:flex-row lg:justify-between lg:items-end items-center gap-8 max-w-3xl md:mt-16"
    >
      <div class="lg:max-w-[600px] lg:ml-[-14rem] lg:mt-[8rem]">
        <h5
          class="lg:ml-[-8rem] text-pale_purple text-sm uppercase font-barlow-condensed tracking-[4.75px] md:text-base md:text-[1.5rem]"
        >
          So, you want to travel to
        </h5>
        <h1 class="text-white font-belle uppercase text-[5.5rem] md:text-[7.5rem] lg:ml-[-8rem]">
          Space
        </h1>
        <p
          class="lg:max-w-[500px] lg:text-left text-pale_purple xs:w-[375px] font-thin leading-6 md:w-[600px] tracking-[1px] md:tracking-[2px] md:text-[1rem] md:leading-7 md:font-normal md:mt-4"
        >
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>

      <button
        class="lg:ml-[14rem] bg-white text-dark_navy uppercase font-bold font-belle rounded-full w-40 h-40 flex items-center justify-center hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-300 ease-in-out md:w-80 md:h-80 lg:w-72 lg:h-72 text-[1.25rem] md:text-[2rem] lg:text-[2.5rem] md:mt-6 lg:mt-0 lg:w-80 lg:h-80 lg:p-18"
      >
        <router-link to="/destination"> Explore </router-link>
      </button>
    </div>
  </section>
</template>

<!-- 00 Home
  01 Destination
  02 Crew
  03 Technology



  Explore -->
