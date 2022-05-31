<template>
  <div class="w-full">
    <section class="w-full flex justify-center relative">
      <div class="absolute w-full top-0 bottom-0 bg-hero-image-04 bg-top bg-no-repeat bg-cover bg-origin-border saturate-50 object-cover"></div>
      <div class="absolute w-full top-0 bottom-0 bg-white/50 lg:bg-white/30 saturate-100"></div>
      <div class="z-[1] max-w-screen-md lg:max-w-screen-xl px-4 xl:px-0 w-full flex flex-col lg:flex-row justify-between lg:items-center py-20 lg:py-20 lg:my-20 saturate-100">
        <div class="lg:w-1/2 ">
          <h1 class="uppercase md:text-center lg:text-left text-4xl md:text-6xl mb-4 md:mb-8 font-bold">Reports</h1>
          <span class="block md:text-center lg:text-left text-lg md:text-2xl lg:text-3xl text-gray-800">Discover certificated <span class="text-purple-700">Company</span> and <span class="text-purple-700">Product</span> reports now</span>
        </div>
      </div>
    </section>
    <section class="bg-white w-full flex flex-col items-center">
        <div class="max-w-screen-xl px-4 xl:px-0 w-full flex flex-col justify-between py-10 md:py-20">
          <div class="flex flew-row text-base md:text-lg justify-center underline-offset-4">
            <button class="p-4 mx-2 hover:underline" :class="currentTab === 0 ? 'text-purple-700 underline' : ''" @click="changeTab(0)">Companies</button>
            <button class="p-4 mx-2 hover:underline" :class="currentTab === 1 ? 'text-purple-700 underline' : ''" @click="changeTab(1)">Products</button>
          </div>
          <companiesTable v-if="currentTab === 0"></companiesTable>
          <productsTable v-if="currentTab === 1"></productsTable>
        </div>
    </section>
    <section class="w-full flex justify-center relative">
      <div class="absolute w-full top-0 bottom-0 bg-hero-image-03 bg-center bg-no-repeat bg-cover bg-origin-border saturate-50 -scale-x-100 object-cover"></div>
      <div class="absolute w-full top-0 bottom-0 bg-white/50 lg:bg-white/30 saturate-100"></div>
      <div class="max-w-screen-xl z-[1] px-4 xl:px-0 w-full flex flex-col justify-between py-20">
        <h2 class="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left uppercase font-bold mb-4">Couldn't find your company</h2>
        <span class="text-xl text-center lg:text-left mb-12 md:mb-20 block">Join to our one or more certification programs</span>
        <div class="flex items-center flex-col w-full flex-wrap">
          <router-link to="/" class="text-base md:text-lg bg-purple-700 px-8 md:px-20 py-4 hover:bg-purple-600 uppercase rounded-2xl">
            <span class="w-full block text-center text-white">Get Certification</span>
          </router-link>
          <h2 class="text-sm md:text-base mt-2 text-gray-700">for your <span class="text-purple-700">Company</span> and <span class="text-purple-700">Products</span></h2>
        </div>
      </div>
    </section>
  </div> 
</template>

<script>
import { ref } from '@vue/runtime-core'
import companiesTable from '../../components/frontend/reports/companiesTable.vue'
import productsTable from '../../components/frontend/reports/productsTable.vue'
export default {
    components: { 
        companiesTable,
        productsTable
    },
    setup() {
        const currentTab = ref(0)

        function changeTab(v) {
            currentTab.value = v
        }

        return {
            currentTab,
            changeTab
        }
    }
}
</script>

<style>

</style>