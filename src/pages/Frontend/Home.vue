<template>
  <div class="w-full">
    <section class="w-full flex justify-center relative">
      <div class="absolute w-full top-0 bottom-0 bg-hero-image-01 bg-center bg-no-repeat bg-cover bg-origin-border saturate-50"></div>
      <div class="max-w-screen-xl w-full flex flex-col justify-between py-20 my-20 saturate-100">
        <div class="w-1/2">
          <h1 class="uppercase text-6xl mb-8 font-bold">Third-party lab certification for quality</h1>
          <span class="text-2xl text-gray-700">Discover certificated product <router-link to="/reports" class="text-purple-700 hover:underline transition-all">Reports</router-link> now</span>
        </div>
      </div>
    </section>
    <section class="bg-white w-full flex justify-center">
      <div class="max-w-screen-xl w-full flex flex-col justify-between py-20 my-20">
        <h2 class="text-5xl uppercase font-bold mb-4">Certificates</h2>
        <span class="mb-20 block text-xl ">Explore our third-party certification programs</span>
        <ul class="flex flew-row w-full justify-between">
          <li class="flex flex-col items-center">
            <router-link to="/quality/certificates/GFOC" class="text-2xl font-bold uppercase text-purple-700">GFOC</router-link>
            <span class="text-base text-gray-700">Fish Oil</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="text-2xl font-bold uppercase text-purple-700">GKOC</span>
            <span class="text-base text-gray-700">Krill Oil</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="text-2xl font-bold uppercase text-purple-700">GPRO</span>
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