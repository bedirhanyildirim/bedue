<template>
  <header class="h-16 border-b border-gray-200 flex-shrink-0 w-full flex justify-between items-center px-5">
      <router-link to="/dashboard/home" class="text-xl font-medium">
        <span class="text-purple-700 font-['Open_Sans']">Nutrition Search</span>
      </router-link>
      <div v-if="!isLogedIn">
        <router-link to="/login">Login</router-link> | 
        <router-link to="/signup">Signup</router-link>
      </div>
      <div v-else>
        <a href="#" class="hidden lg:block" @click="logout()">Logout</a>
      </div>
      <div class="flex lg:hidden h-full items-center">
        <div @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z"/></svg>
        </div>
        <div v-show="mobileMenu" class="fixed inset-0 bg-white z-50">
          <div class="px-4 flex flex-col w-full h-full items-center justify-center">
            <div class="absolute top-0 left-0 right-0">
              <div class="w-full h-16 relative">
                <span @click="toggleMobileMenu" class="absolute top-5 right-5">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg>
                </span>
              </div>
            </div>
            <div class="flex flex-col w-2/3 md:w-1/2" @click="toggleMobileMenu">
              <router-link to="/dashboard/home" class="nav-link">Dashboard</router-link>
              <router-link to="/dashboard/companies" class="nav-link">Companies</router-link>
              <router-link to="/dashboard/products" class="nav-link">Products</router-link>
              <router-link to="/dashboard/certificates" class="nav-link">Certificates</router-link>
              <router-link to="/dashboard/users" class="nav-link">Users</router-link>
              <router-link to="/" class="nav-link border-t mt-4">Go to Website</router-link>
              <a href="#" class="nav-link" @click="logout()">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { computed } from "@vue/runtime-core"
import { ref } from 'vue'

export default {
  setup() {
    const mobileMenu = ref(false)

    const store = useStore()
    const router = useRouter()

    const logout = async() => {
      await store.dispatch('logout')
      router.push('/login')
    }

    const isLogedIn = computed(() => store.getters.isLogedIn)

    function toggleMobileMenu() {
      mobileMenu.value = !mobileMenu.value
    }

    return {
      logout,
      isLogedIn,
      toggleMobileMenu,
      mobileMenu
    }
  }
}
</script>

<style>

</style>