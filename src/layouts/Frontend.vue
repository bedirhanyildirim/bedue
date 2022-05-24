<template>
<div class="flex flex-col items-center min-h-screen bg-white">
  <navbar></navbar>
  <div class="flex w-full justify-center bg-white items-center mt-20">
    <router-view/>
  </div>
</div>
</template>

<script>
import navbar from '../components/frontend/layout/navbar.vue'
export default {
  components: { navbar }
}
</script>

<style>

</style>