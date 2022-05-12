<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Certificates</h1>
      <router-link 
        to="/dashboard/certificates/new" 
        class="text-xs font-medium text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 transition-colors"
        >Add New</router-link>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to find the list of the valid certificates.</span>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>

</style>