<template>
  <div class="flex flex-col items-center min-h-screen bg-white">
    <navbar></navbar>
    <div class="flex w-full justify-center bg-white items-center mt-14 md:mt-24">
      <router-view/>
    </div>
    <fefooter></fefooter>
  </div>
</template>

<script>
import navbar from '../components/frontend/layout/navbar.vue'
import fefooter from '../components/frontend/layout/footer.vue'
export default {
  components: { 
    navbar,
    fefooter
  }
}
</script>

<style>

</style>