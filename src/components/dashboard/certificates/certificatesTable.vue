<template>
    <div class="w-full my-4 relative overflow-x-auto">
        <div class="pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input 
                  type="text" 
                  id="table-search" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:border-purple-500 block w-80 pl-10 p-2.5" 
                  placeholder="Search certificate by name"
                  v-model="search"
                  @input="onQuery">
            </div>
        </div>
        <div class="relative">
            <table class="w-full table-auto text-sm text-left text-gray-600 overflow-hidden">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Logo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    class="hover:bg-white border-b bg-gray-50"
                    v-for="(item, index) in searchResult" :key="index">
                        <th 
                        scope="row" 
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.data.name }}
                        </th>
                        <td class="px-6 py-4 underline underline-offset-2 decoration-gray-500/30">
                            <a :href="item.data.website" target="_blank">
                            {{ item.data.name }}
                            </a>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.data.description }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-xs py-2 pl-6 text-left text-gray-500/50">{{ searchResult.length }} certificates found</div>
            <loader :isloading="isloading"></loader>
        </div>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from '@vue/runtime-core'
import { certificatesCollection } from "../../../firebase"
import { getDocs, query } from '@firebase/firestore'
import loader from '../../shared/loader.vue'
export default {
    components: {
        loader
    },
    setup() {
        const certificates = ref([])
        const search = ref('')
        const searchResult = ref([])
        const isloading = ref(false)

        onBeforeMount(() => {
            isloading.value = true
        })

        onMounted(async() => {
            const q = query(certificatesCollection)
            const res = await getDocs(q)
            
            res.forEach((doc) => {
                certificates.value.push({
                    id: doc.id,
                    data: doc.data()
                })
            });
            search.value = ''
            searchResult.value = certificates.value
            isloading.value = false
        })

        function onQuery() {
            if(search.value.length >= 1) {
                searchResult.value = certificates.value.filter((certificate) => {
                    return certificate.data.name.toLowerCase().includes(search.value)
                })
            } else {
                searchResult.value = certificates.value
            }
        }
        
        return {
            certificates,
            search,
            searchResult,
            onQuery,
            isloading
        }
    }
}
</script>

<style>

</style>