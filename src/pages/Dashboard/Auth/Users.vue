<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Users</h1>
      <router-link 
        to="/dashboard/companies/new" 
        class="text-xs btn btn-primary"
        >Add New</router-link>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to manage user who can access to admin panel.</span>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>