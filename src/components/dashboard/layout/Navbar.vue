<template>
  <header class="h-16 border-b border-gray-200 flex-shrink-0 w-full flex justify-between items-center px-5">
      <router-link to="/" class="text-xl font-medium">
        NutritionSearch<span class="text-sm font-normal text-gray-500">.org</span>
      </router-link>
      <div v-if="!isLogedIn">
        <router-link to="/login">Login</router-link> | 
        <router-link to="/signup">Signup</router-link>
      </div>
      <div v-else>
        <a href="#" @click="logout()">Logout</a>
      </div>
    </header>
</template>

<script>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { computed } from "@vue/runtime-core"

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const logout = async() => {
      await store.dispatch('logout')
      router.push('/login')
    }

    const isLogedIn = computed(() => store.getters.isLogedIn)

    return {
      logout,
      isLogedIn
    }
  }
}
</script>

<style>

</style>