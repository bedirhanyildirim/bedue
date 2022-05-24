<template>
  <div class="max-w-screen-xl w-full flex flex-col justify-between items-center">
    <section class="w-full py-20">
      <h1 class="flex flex-col">
        <span class="uppercase text-7xl mb-4 font-bold">Discover</span>
        <span class="text-3xl">Third-party lab-certified products</span>
        <router-link to="/reports" class="text-xl text-purple-700 font-bold my-4">Go to Reports</router-link>
      </h1>
    </section>
    <section class="w-full py-20">
      <h2 class="text-7xl uppercase font-bold mb-4">Certificates</h2>
      <span class="mb-20 block text-3xl ">Explore our third-party certification programs</span>
      <ul class="flex flew-row w-full justify-between">
        <li class="flex flex-col items-center">
          <router-link to="/certificates/GFOC" class="text-2xl font-bold uppercase text-purple-700">GFOC</router-link>
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
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>