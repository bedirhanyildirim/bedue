<template>
  <div class="w-full my-4 relative overflow-x-auto">
        <div class="pb-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:border-purple-500 block w-80 pl-10 p-2.5" placeholder="Search for company">
            </div>
        </div>
        <table class="w-full table-auto text-sm text-left text-gray-500 overflow-hidden">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Orzaks Ilac ve Kimya Sanayi Tic. A.S.
                    </th>
                    <td class="px-6 py-4 underline underline-offset-2 decoration-gray-500/30">
                        <a href="https://orzax.com.tr/" target="_blank">orzax.com.tr</a>
                    </td>
                    <td class="px-6 py-4">
                        Turkey
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Nuvita İlaç ve Kimya San. Tic. A.Ş.
                    </th>
                    <td class="px-6 py-4 underline underline-offset-2 decoration-gray-500/30">
                        <a href="https://nuvita.com.tr/" target="_blank">nuvita.com.tr</a>
                    </td>
                    <td class="px-6 py-4">
                        Turkey
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-xs py-2 pl-6 text-left text-gray-500/50">{{ count }} companies found</div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { companiesCollection } from "../../../firebase"
import { getDocs, query } from '@firebase/firestore'
export default {
    setup() {
        const count = ref(0)
        onMounted(async() => {
            const q = query(companiesCollection)
            const res = await (await getDocs(q))
            
            count.value = res.size
            console.log("size: ", res.size)
            res.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        })

        return {
            count
        }
    }
}
</script>

<style scoped>
</style>