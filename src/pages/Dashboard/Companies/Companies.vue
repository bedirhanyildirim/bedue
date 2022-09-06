<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Companies</h1>
      <router-link 
        to="/dashboard/companies/new" 
        class="text-xs btn btn-primary"
        >Add New</router-link>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to find the list of the registered companies.</span>
    </div>
    <companiesTable></companiesTable>
  </section>
</template>

<script>
import companiesTable from "../../../components/dashboard/companies/companiesTable.vue"
export default {
  components: {
    companiesTable
  }
}
</script>

<style>

</style>