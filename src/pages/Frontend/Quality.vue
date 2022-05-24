<template>
  <section class="max-w-screen-xl w-full flex flex-col justify-between items-center">
    <div class="w-full py-20">
      <h1 class="flex flex-col uppercase text-7xl mb-4 font-bold">
        Quality
      </h1>
      <span class="text-black w-1/2 flex">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium earum labore sint expedita? Libero possimus a placeat. Dolorum sit itaque, illo repellendus, velit commodi qui neque, voluptate a aut expedita!
      </span>
      <h2 class="mt-20 text-4xl text-center">Which Certificates</h2>
      <ul class="flex flew-row w-full justify-between mt-8">
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
      <h2 class="mt-20 text-4xl">Ho Do We Test</h2>
      <span class="text-black w-1/2 flex">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, eos eius unde quibusdam architecto repellendus officia harum voluptate iusto eum impedit hic corporis, laudantium velit, provident enim sed nobis sint.
      </span>
      <h2 class="mt-20 text-4xl">Which Types</h2>
      <router-link to="/quality/types">Click</router-link>
    </div>
  </section>  
</template>

<script>
export default {

}
</script>

<style>

</style>