<template>
  <div class="flex-1 h-full max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl relative">
    <div class="flex flex-col overflow-y-auto">
      <div class="flex items-center justify-center p-6 relative">
        <div class="w-full">
          <h1 to="/" class="text-xl font-medium text-center my-6">
            NutritionSearch<span class="text-sm font-normal text-gray-500">.org</span>
          </h1>
          <h1 class="mb-4 text-xl font-semibold text-gray-700">Login</h1>
          <div class="w-full relative">
            <label class="block text-sm">
              <span class="text-gray-70">Email</span>
              <input 
                type="text" 
                class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" 
                v-model="email"
                placeholder="Bedirhan" />
            </label>
            <label class="block mt-4 text-sm">
              <span class="text-gray-70">Password</span>
              <input 
                type="password" 
                class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input" 
                v-model="password"
                placeholder="Bedirhan" />
            </label>
            <loader :isloading="isloading"></loader>
          </div>
          <div class="alert danger" v-if="error">
              Something went wrong! {{ error }}
          </div>
          <button
            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple disabled:bg-gray-700"
            @click="login()"
            :disabled="isloading"
          >Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import loader from "../../../components/shared/loader.vue"
export default {
    components: {
      loader
    },
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const isloading = ref(false)

      const store = useStore()
      const router = useRouter()

      const login = async() => {
        isloading.value = true
        try {
          await store.dispatch('login', {
            email: email.value,
            password: password.value
          })
        } catch(err) {
          error.value = err.message
        } finally {
          isloading.value = false
          router.push('/dashboard')
        }
      }

      return {
        email,
        password,
        error,
        isloading,
        login
      }
    }
}
</script>

<style scoped>
</style>