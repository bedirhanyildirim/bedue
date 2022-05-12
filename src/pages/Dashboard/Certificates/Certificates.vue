<template>
  <section class="mx-auto w-full max-w-screen-xl overflow-auto px-6">
    <div class="flex items-center my-6 justify-between">
      <h1 class="text-2xl font-bold">Certificates</h1>
      <router-link 
        to="/dashboard/certificates/new"
        class="text-xs btn btn-primary"
        >Add New</router-link>
    </div>
    <div class="alert primary mb-6">
      <span>This page helps you to find the list of the valid certificates.</span>
    </div>
    <certificatesTable></certificatesTable>
  </section>
</template>

<script>
import certificatesTable from "../../../components/dashboard/certificates/certificatesTable.vue"
export default {
  components: {
    certificatesTable
  }
}
</script>

<style>

</style>