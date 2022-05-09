<template>
  <section class="mx-auto max-w-screen-xl overflow-auto">
    Content will be here
  </section>
</template>

<script>
import { isLoggedIn } from "../utils/helper"
export default {
  computed: {
    loggedIn() {
      return isLoggedIn()
    }
  }
}
</script>

<style>

</style>