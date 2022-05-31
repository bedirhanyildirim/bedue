<template>
  <div class="w-full mt-8 relative">
    <div class="mb-2 md:mb-8 w-full flex justify-center">
      <div class="relative max-w-sm w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input 
          type="text" 
          id="table-search"
          class="text-base w-full border-b outline-none focus:ring-purple-500 focus:border-purple-500 block pl-10 p-2.5" 
          placeholder="Search company by name"
          v-model="search"
          @input="onQuery">
      </div>
    </div>
    <div class="w-full relative overflow-x-auto">
      <table class="w-full table-auto text-sm text-left text-gray-600 relative">
        <thead class="hidden md:table-header-group text-xs text-gray-700 uppercase bg-white border-b whitespace-nowrap">
          <tr>
            <th scope="col" class="px-2 md:px-6 py-3">
              Logo
            </th>
            <th scope="col" class="px-2 md:px-6 py-3">
              Company name
            </th>
            <th scope="col" class="px-6 py-3 hidden md:table-cell">
              Country
            </th>
            <th scope="col" class="px-6 py-3 hidden md:table-cell">
              <span class="sr-only">Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            class="bg-white border-b md:border-none"
            v-for="(item, index) in searchResult" :key="index">
            <td class="pl-2 md:px-6 py-4 underline underline-offset-2 decoration-gray-500/30">
              <div class="w-14 h-14 overflow-hidden md:mr-6 bg-white object-center flex justify-center items-center">
                <img src="https://andi.nutrasource.ca/CompanyImages/ORZK_Logo.jpg"/>
              </div>
            </td>
            <td class="pl-2 md:px-2 md:py-4 font-medium text-gray-900">
                {{ item.data.name }}
            </td>
            <td class="px-6 py-4 hidden md:table-cell">
              {{ item.data.country.toUpperCase() }}
            </td>
            <td class="px-6 py-4 text-right hidden md:table-cell">
              <router-link :to="'/company/' + item.id" class="font-medium text-purple-600 hover:underline">Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-xs py-2 md:pl-6 text-center md:text-left text-gray-500/50">{{ searchResult.length }} companies found</div>
      <loader :isloading="isloading"></loader>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import { companiesCollection } from "../../../firebase"
import { getDocs, query } from '@firebase/firestore'
import loader from '../../shared/loader.vue'
export default {
  components: {
    loader
  },
  setup() {
    const companies = ref([])
    const search = ref('')
    const searchResult = ref([])
    const isloading = ref(false)

    onBeforeMount(() => {
      isloading.value = true
    })
        
    onMounted(async() => {
      const q = query(companiesCollection)
      const res = await getDocs(q)
            
      res.forEach((doc) => {
        companies.value.push({
          id: doc.id,
          data: doc.data()
        })
      });
      search.value = ''
      searchResult.value = companies.value
      isloading.value = false
      document.getElementById('table-search').focus()
    })

    function onQuery() {
      if(search.value.length >= 1) {
        searchResult.value = companies.value.filter((company) => {
          return company.data.name.toLowerCase().includes(search.value)
        })
      } else {
        searchResult.value = companies.value
      }
    }

    return {
      companies,
      search,
      searchResult,
      onQuery,
      isloading
    }
  }
}
</script>

<style scoped>
</style>