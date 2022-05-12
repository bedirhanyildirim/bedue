<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Products</h1>
      <router-link 
        to="/dashboard/products/new" 
        class="text-xs btn btn-primary"
        >Add New</router-link>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to find the list of the registered products.</span>
    </div>
    <productsTable></productsTable>
  </section>
</template>

<script>
import productsTable from "../../../components/dashboard/products/productsTable.vue"
export default {
  components: {
    productsTable
  }
}
</script>

<style>

</style>