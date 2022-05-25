<template>
  <div class="w-full">
    <section class="w-full flex justify-center relative">
      <div class="absolute w-full top-0 bottom-0 bg-hero-image-01 bg-center bg-no-repeat bg-cover bg-origin-border saturate-50 object-cover"></div>
      <div class="max-w-screen-md lg:max-w-screen-xl px-4 xl:px-0 w-full flex flex-col lg:flex-row justify-between py-20 lg:py-20 lg:my-20 saturate-100 bg-white/50 lg:bg-transparent">
        <div class="lg:w-1/2 md:mb-20 lg:mb-0">
          <h1 class="uppercase md:text-center lg:text-left text-4xl md:text-6xl mb-4 md:mb-8 font-bold">Third-party lab certification</h1>
          <span class="block md:text-center lg:text-left text-lg md:text-3xl lg:text-3xl text-gray-800">Discover certificated product <router-link to="/reports" class="text-purple-700 hover:underline transition-all">Reports</router-link> now</span>
        </div>
        <div class="lg:w-1/2 hidden md:flex flex-row items-center justify-evenly">
          <div class="flex justify-center items-center flex-col rounded-full w-32 h-32 bg-purple-600 lg:bg-purple-600/90 text-white hover:scale-110 transform-gpu transition-all">
            <h3 class="font-thin text-base">Companies</h3>
            <span class="font-mono mt-1 text-lg">+99</span>
          </div>
          <div class="flex justify-center items-center flex-col rounded-full w-32 h-32 bg-teal-600 lg:bg-teal-600/90 text-white hover:scale-110 transform-gpu transition-all">
            <h3 class="font-thin text-base">Products</h3>
            <span class="font-mono mt-1 text-lg">+99</span>
          </div>
          <div class="flex justify-center items-center flex-col rounded-full w-32 h-32 bg-gray-600 lg:bg-gray-600/90 text-white hover:scale-110 transform-gpu transition-all">
            <h3 class="font-thin text-base">Certificates</h3>
            <span class="font-mono mt-1 text-lg">3</span>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white w-full flex justify-center">
      <div class="max-w-screen-xl px-4 xl:px-0 w-full flex flex-col justify-between py-20 lg:py-20 lg:my-20">
        <h2 class="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left uppercase font-bold mb-4">Certificates</h2>
        <span class="text-xl text-center lg:text-left mb-20 block">Explore our third-party certification programs</span>
        <ul class="flex flew-row w-full justify-evenly">
          <li class="flex flex-col items-center">
            <router-link to="/quality/certificates/GFOC" class="text-2xl font-bold uppercase text-orange-300">GFOC</router-link>
            <span class="text-base text-gray-700">Fish Oil</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="text-2xl font-bold uppercase text-rose-500">GKOC</span>
            <span class="text-base text-gray-700">Krill Oil</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="text-2xl font-bold uppercase text-teal-500">GPRO</span>
            <span class="text-base text-gray-700">Probiotic</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>