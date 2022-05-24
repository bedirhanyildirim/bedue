<template>
    <header class="h-20 max-w-screen-xl w-full flex justify-between items-center px-5">
      <router-link to="/" class="text-2xl font-medium">
        <span class="text-purple-700">NutritionSearch</span><span class="text-sm font-normal text-gray-500">.org</span>
      </router-link>
      <div class="bg-white text-lg uppercase text-purple-700 font-medium py-4">
        <router-link to="/" class="px-4">Home</router-link>
        <router-link to="/about" class="px-4">About</router-link>
        <router-link to="/quality" class="px-4">Quality</router-link>
        <router-link to="/reports" class="px-4">Reports</router-link>
        <router-link to="/contact" class="px-4">Contact</router-link>
        <router-link to="/faq" class="px-4">F.A.Q.</router-link>
        <router-link to="/dashboard" class="px-4">Dashboard</router-link>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>