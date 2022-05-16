<template>
  <div class="w-full my-4 relative overflow-x-auto">
        <div class="pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input 
                  type="text" 
                  id="table-search" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:border-purple-500 block w-80 pl-10 p-2.5" 
                  placeholder="Search company by name"
                  v-model="search"
                  @input="onQuery">
            </div>
        </div>
        <div class="relative">

            <table class="w-full table-auto text-sm text-left text-gray-500 overflow-hidden relative">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Company name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Website
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="(item, index) in searchResult" :key="index">
                        <th 
                        scope="row" 
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ item.data.name }}
                        </th>
                        <td class="px-6 py-4 underline underline-offset-2 decoration-gray-500/30">
                            <a :href="item.data.website" target="_blank">
                            {{ item.data.website }}
                            </a>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.data.country }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-xs py-2 pl-6 text-left text-gray-500/50">{{ searchResult.length }} companies found</div>
            <div v-show="isloading" class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white/30 backdrop-blur-xl">
                <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
            </div>
        </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { companiesCollection } from "../../../firebase"
import { getDocs, query } from '@firebase/firestore'
export default {
    setup() {
        const companies = ref([])
        const search = ref('')
        const searchResult = ref([])
        const isloading = ref(false)
        
        onMounted(async() => {
            const q = query(companiesCollection)
            const res = await (await getDocs(q))
            
            isloading.value = true
            res.forEach((doc) => {
                companies.value.push({
                    id: doc.id,
                    data: doc.data()
                })
            });
            search.value = ''
            searchResult.value = companies.value
            isloading.value = false
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